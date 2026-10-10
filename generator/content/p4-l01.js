'use strict';
/* P4-L01 · The Natural World — Landscapes, Ecosystems and Biodiversity — website: Pathways › Progression › P4 › P4-L01 (composition verbs with their
 * complements: يَضُمُّ / يُشَكِّلُ + object, يَتَفَاعَلُ مَعَ, يَعْتَمِدُ عَلَى, يُؤَدِّي إِلَى; a real threat with إِذَا … سَـ and a counterfactual with لَوْ … لَـ; the
 * purpose subjunctive لِكَيْ + a verb with a final fatḥa). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live
 * builder, mission and visual game used as published, with waṣl alif shown without a kasra and لِكَيْ always written with its sukūn. English added to the
 * patterns; sorter headings in English. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P4')({
  n: 1, fileTitle: 'The_Natural_World_Ecosystems_and_Biodiversity', chip: 'Vocabulary',
  title: 'The Natural World — Landscapes, Ecosystems and Biodiversity', arabic: 'العَالَمُ الطَّبِيعِيُّ — المَنَاظِرُ وَالأَنْظِمَةُ البِيئِيَّةُ وَالتَّنَوُّعُ الحَيَوِيُّ',
  focus: 'Describe an ecosystem in scientific register with yaḍummu and yushakkilu, weigh a real threat (idhā … sa-) against a counterfactual (law … la-), and give a purpose with li-kay + a verb ending in -a.',
  icon: 'FaLeaf', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const sg = (s) => ({ tag: 'sg · pl', forms: [{ l: 'sg.', ar: s }] });
const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const we = (w) => ({ tag: 'it · we', forms: [{ l: 'we', ar: w }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ'));
const site = fix(D.site('P4-L01'));
const RH = [['Composition', 'yaḍummu / yushakkilu + object'], ['Real threat (Type 1)', 'idhā + past → sa-'], ['Counterfactual (Type 2)', 'law + past → la-'], ['Purpose subjunctive', 'li-kay + verb in -a']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P4-L01', {
  support: `• Core: five ecosystem sentences with yaḍummu, yushakkilu and their complements (website Core). Develop: add a Type 1 threat and a Type 2 counterfactual. Stretch: close with a li-kay purpose clause (website 100–110 words).
• A new unit: celebrate the P3 grammar students bring with them — both conditionals and the verb in -a after an. Today li-kay works exactly like an.
• Faith link (optional): وَوَضَعَ المِيزَانَ (al-Raḥmān 55:7) — Allah set the balance; humans are trustees (khalīfa) of the earth. A natural bridge to التَّوَازُنُ البِيئِيُّ.
• Grammar links: Type 1 / Type 2 (P3-L05) · the subjunctive after an (P3-L06/L07) · verbs with fixed partners (P3-L04).`,
  teach: 'Composition verbs + partners, a threat vs a counterfactual, li-kay + -a, scientific register.',
  wedo: 'Match natural scenes, build an ecosystem argument, sort composition / conditional / purpose.',
  next: { nextCode: 'P4-L02', nextTitle: 'Urban Environments — Cities, Architecture and Urban Planning', nextAr: 'البِيئَاتُ الحَضَرِيَّةُ' },
  objectives: ['Name ecosystem and biodiversity vocabulary.', 'Describe composition with yaḍummu, yushakkilu and yatafāʿalu maʿa.', 'Weigh a real threat (idhā) against a counterfactual (law).', 'Give a purpose with li-kay + a verb ending in -a.'],
  rulesAr: 'أَفْعَالُ التَّكْوِينِ وَالفِعْلُ المَنْصُوبُ بَعْدَ لِكَيْ',
  ruleEx: [['تَضُمُّ الغَابَةُ آلَافَ الأَنْوَاعِ', 'يُشَكِّلُ المَرْجَانُ بِيئَةً حَيَوِيَّةً'], ['إِذَا اسْتَمَرَّ الاحْتِرَارُ، سَتَتَبَيَّضُ الشِّعَابُ'], ['لَوْ كَانَتِ الحِمَايَةُ أَصْرَمَ، لَكَانَتِ الشِّعَابُ أَفْضَلَ'], ['لِكَيْ تَحْمِيَ المِنْطَقَةُ إِرْثَهَا الطَّبِيعِيَّ']],
  doNow: {
    questions: [
      q('What does نِظَامٌ بِيئِيٌّ mean?', ['an ecosystem', 'an environmental law', 'a nature reserve'], 'Prepared at home (P3-L12).'),
      q('What does مَوْطِنٌ طَبِيعِيٌّ mean?', ['a natural habitat', 'a homeland', 'a natural resource'], 'Prepared at home (P3-L12).'),
      q('What does يُهَدِّدُ mean?', ['it threatens', 'it protects', 'it includes'], 'Prepared at home (P3-L12).'),
      q('Complete: لَوْ حَجَزْتُ مُبَكِّرًا، ___ المَالَ.', ['لَوَفَّرْتُ', 'سَأُوَفِّرُ', 'وَفَّرْتُ'], 'P3: a Type 2 result takes la-.'),
      q('Complete: يُسْتَحْسَنُ أَنْ ___ الزَّائِرُ التَّحِيَّةَ.', ['يَتَعَلَّمَ', 'يَتَعَلَّمُ', 'تَعَلَّمَ'], 'P3-L07: after an, the verb ends in -a.'),
    ],
    keyIdea: { text: 'li-kay works like an: the next verb ends in -a.', ar: 'أَنْ {k|يَتَعَلَّمَ} · لِكَيْ {k|نَحْمِيَ} · لِكَيْ {k|تَسْتَمِرَّ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P3-L12. Questions 4–5 retrieve the Type 2 la- and the verb in -a after an (P3) — today li-kay uses the same -a.',
  },
  routes: {
    core: ['I can name 8 ecosystem words.', 'I can use yaḍummu / yushakkilu with an object.'],
    develop: ['I can state a threat with idhā … sa-.', 'I can state a counterfactual with law … la-.'],
    stretch: ['I can give a purpose with li-kay + -a.', 'I can describe and defend an ecosystem.'],
  },
  bridge: [
    { ar: 'نِظَامٌ', urdu: 'نظام', tr: 'nizām', en: 'a system' },
    { ar: 'تَوَازُنٌ', urdu: 'توازن', tr: 'tawāzun', en: 'balance' },
    { ar: 'حَيَاةٌ · حَيَوِيٌّ', urdu: 'حیات', tr: 'hayāt', en: 'life · biological, vital' },
    { ar: 'خَطَرٌ', urdu: 'خطرہ', tr: 'khatra', en: 'danger, threat' },
    { ar: 'طَبِيعَةٌ', urdu: 'طبیعت', tr: 'tabīʿat', en: 'Arabic: nature · Urdu: mood, health' },
  ],
  bridgeNotes: 'URDU BRIDGE: نظام، توازن، حیات and خطرہ are shared. Careful: Urdu طبیعت usually means one’s mood or health (طبیعت ٹھیک ہے؟); Arabic الطَّبِيعَةُ is nature — the natural world (Urdu uses قدرت).',
  core: ['نِظَامٌ بِيئِيٌّ', 'تَنَوُّعٌ حَيَوِيٌّ', 'سِلْسِلَةٌ غِذَائِيَّةٌ', 'مَوْطِنٌ طَبِيعِيٌّ', 'أَنْوَاعٌ مُهَدَّدَةٌ بِالانْقِرَاضِ', 'شِعَابٌ مَرْجَانِيَّةٌ', 'التَّوَازُنُ البِيئِيُّ', 'يَضُمُّ', 'يُشَكِّلُ', 'يَتَفَاعَلُ مَعَ', 'يُهَدِّدُ', 'لِكَيْ'],
  forms: {
    'نِظَامٌ بِيئِيٌّ': sp('أَنْظِمَةٌ بِيئِيَّةٌ'), 'سِلْسِلَةٌ غِذَائِيَّةٌ': sp('سَلَاسِلُ غِذَائِيَّةٌ'), 'مَوْطِنٌ طَبِيعِيٌّ': sp('مَوَاطِنُ طَبِيعِيَّةٌ'),
    'أَنْوَاعٌ مُهَدَّدَةٌ بِالانْقِرَاضِ': sg('نَوْعٌ مُهَدَّدٌ بِالانْقِرَاضِ'), 'غَابَةٌ اسْتِوَائِيَّةٌ': sp('غَابَاتٌ اسْتِوَائِيَّةٌ'), 'شِعَابٌ مَرْجَانِيَّةٌ': sg('شِعْبٌ مَرْجَانِيٌّ'),
    'يَتَكَوَّنُ مِنْ': hs('تَتَكَوَّنُ مِنْ'), 'يَضُمُّ': hs('تَضُمُّ'), 'يُشَكِّلُ': hs('تُشَكِّلُ'), 'يَتَفَاعَلُ مَعَ': hs('تَتَفَاعَلُ مَعَ'), 'يَعْتَمِدُ عَلَى': hs('تَعْتَمِدُ عَلَى'),
    'يُهَدِّدُ': hs('تُهَدِّدُ'), 'يُؤَدِّي إِلَى': hs('تُؤَدِّي إِلَى'),
    'لِكَيْ تَحْمِيَ': we('لِكَيْ نَحْمِيَ'), 'لِكَيْ تَسْتَمِرَّ': we('لِكَيْ نَسْتَمِرَّ'), 'لِكَيْ تُحَافِظَ': we('لِكَيْ نُحَافِظَ'),
  },
  vocabNotes: {
    0: 'Ecosystems and biodiversity: the nouns of a science report. Note the plurals: نِظَامٌ → أَنْظِمَةٌ (or نُظُمٌ in the website texts) · سِلْسِلَةٌ → سَلَاسِلُ · مَوْطِنٌ → مَوَاطِنُ.',
    1: 'Composition and impact verbs: learn each with its partner — يَضُمُّ / يُشَكِّلُ / يُهَدِّدُ + object · يَتَكَوَّنُ مِنْ · يَتَفَاعَلُ مَعَ · يَعْتَمِدُ عَلَى · يُؤَدِّي إِلَى. With a forest, a sea or the reefs as subject, use ta-: تَضُمُّ · تُشَكِّلُ.',
    2: 'The purpose subjunctive (FLEX): لِكَيْ = so that; the next verb ends in -a, just like after أَنْ: لِكَيْ نَحْمِيَ · لِكَيْ تَسْتَمِرَّ · لِكَيْ تُحَافِظَ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · composition and impact verbs (website rule 1 + teaching point 1 + vocabulary notes) · Core', title: 'Every verb has a partner', ar: 'أَفْعَالُ التَّكْوِينِ وَمُتَمِّمَاتُهَا',
      cols: [{ label: 'Verb', w: 2.4, size: 20 }, { label: 'Meaning', w: 2.0 }, { label: 'Partner', w: 1.7 }, { label: 'Example (website)', w: 6.23, size: 18 }],
      rows: [
        { core: true, cells: ['{w|يَضُمُّ}', 'includes', 'object', 'تَضُمُّ الغَابَةُ {w|آلَافَ} الأَنْوَاعِ.'] },
        { core: true, cells: ['{w|يُشَكِّلُ}', 'forms', 'object', 'يُشَكِّلُ المَرْجَانُ {w|بِيئَةً} حَيَوِيَّةً.'] },
        { cells: ['{k|يَتَفَاعَلُ مَعَ}', 'interacts with', 'maʿa', 'تَتَفَاعَلُ الأَنْوَاعُ {k|مَعَ} بَعْضِهَا.'] },
        { cells: ['{k|يَعْتَمِدُ عَلَى}', 'depends on', 'ʿalā', 'يَعْتَمِدُ التَّوَازُنُ {k|عَلَى} بَقَاءِ كُلِّ عُنْصُرٍ.'] },
        { cells: ['{e|يُهَدِّدُ}', 'threatens', 'object', 'يُهَدِّدُ الاحْتِرَارُ {e|هٰذَا التَّوَازُنَ}.'] },
        { cells: ['{m|يُؤَدِّي إِلَى}', 'leads to', 'ilā', 'يُؤَدِّي النَّشَاطُ البَشَرِيُّ {m|إِلَى} انْقِرَاضِ أَنْوَاعٍ.'] },
      ],
      ltr: true,
      foot: 'Website mistake 2: taḍummu bi-ālāfi ✗ → taḍummu ālāfa ✓ — no preposition after yaḍummu.',
      notes: `GRAMMAR PART 1 — website rule “Composition”, teaching point 1 and the vocabulary notes (يَضُمُّ Form I doubled · يُشَكِّلُ Form II · يَتَفَاعَلُ Form VI + مَعَ · يَعْتَمِدُ عَلَى · يُهَدِّدُ + object · يُؤَدِّي إِلَى). All examples are from the website listening and reading.
Also in the vocabulary: يَتَكَوَّنُ مِنْ (is composed of) — يَتَكَوَّنُ النِّظَامُ البِيئِيُّ مِنْ كَائِنَاتٍ حَيَّةٍ وَبِيئَتِهَا.
Agreement: الغَابَةُ / الشِّعَابُ / الأَنْوَاعُ are “she” → تَضُمُّ · تَتَفَاعَلُ; المَرْجَانُ / الاحْتِرَارُ are “he” → يُشَكِّلُ · يُهَدِّدُ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · a real threat or a counterfactual? (website rules 2–3) · Develop', title: 'Warn with idhā, regret with law', ar: 'الخَطَرُ الحَقِيقِيُّ وَالافْتِرَاضُ',
      cards: [
        { chip: 'TYPE 1 · THREAT · CORE', color: '1D5FBF', head: 'إِذَا … سَـ', big: 'إِذَا اسْتَمَرَّ الاحْتِرَارُ، سَتَتَبَيَّضُ الشِّعَابُ وَتَمُوتُ.', en: 'If warming continues, the reefs will bleach and die.', clue: 'Still possible.' },
        { chip: 'TYPE 2 · REGRET · DEVELOP', color: 'C0386B', head: 'لَوْ … لَـ', big: 'لَوْ كَانَتِ الحِمَايَةُ أَصْرَمَ، لَكَانَتِ الشِّعَابُ أَفْضَلَ حَالًا.', en: 'Had protection been stricter, the reefs would be in better shape.', clue: 'It did not happen.' },
        { chip: 'TYPE 2 NEGATIVE · STRETCH', color: '6B4C9A', head: 'لَوْ … لَمَا', big: 'لَوْ عَامَلْنَا الطَّبِيعَةَ بِاحْتِرَامٍ، لَمَا وَصَلَتِ الأَنْوَاعُ إِلَى حَافَّةِ الانْقِرَاضِ.', en: 'Had we treated nature with respect, species would not have reached the brink.', clue: 'lamā = would not.' },
      ],
      error: { text: 'Website mistake 3: a Type 2 result takes la-, not sa-.', pairs: [['لَوِ اسْتَمَرَّ الاحْتِرَارُ، لَمَاتَتِ الشِّعَابُ', 'لَوِ اسْتَمَرَّ الاحْتِرَارُ، سَتَمُوتُ الشِّعَابُ']] },
      notes: `GRAMMAR PART 2 — website rules “Real threat (Type 1)” and “Counterfactual (Type 2)”; card 3 is from the website reading (لَوْ عَامَلْنَا … لَمَا وَصَلَ كَثِيرٌ مِنَ الأَنْوَاعِ إِلَى حَافَّةِ الانْقِرَاضِ).
Revision from P3-L05: a real trend that can still happen → إِذَا … سَـ; a past that did not happen → لَوْ … لَـ / لَمَا.
أَصْرَمُ = stricter (comparative of صَارِمٌ) — accusative أَصْرَمَ as the predicate of كَانَ.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 3 · li-kay + a verb in -a (website rule 4 + teaching point 2 + vocabulary group 3) · Develop / Stretch', title: 'So that … -a', ar: 'لِكَيْ + الفِعْلُ المَنْصُوبُ',
      cols: [{ label: 'Normal', w: 2.1, size: 20 }, { label: 'After li-kay', w: 2.8, size: 20 }, { label: 'Verb type', w: 2.0 }, { label: 'Example (website)', w: 5.43, size: 17 }],
      rows: [
        { core: true, cells: ['نُحَافِظُ', 'لِكَيْ {k|نُحَافِظَ}', 'sound', 'لِكَيْ نُحَافِظَ عَلَى التَّوَازُنِ'] },
        { core: true, cells: ['نَحْمِي', 'لِكَيْ {k|نَحْمِيَ}', 'weak -ī → -iya', 'لِكَيْ نَحْمِيَ التَّنَوُّعَ الحَيَوِيَّ'] },
        { cells: ['تَسْتَمِرُّ', 'لِكَيْ {k|تَسْتَمِرَّ}', 'doubled', 'لِكَيْ تَسْتَمِرَّ الحَيَاةُ البَحْرِيَّةُ'] },
        { cells: ['تَحْمِي', 'لِكَيْ {k|تَحْمِيَ}', 'weak -ī → -iya', 'لِكَيْ تَحْمِيَ هٰذَا الإِرْثَ الطَّبِيعِيَّ'] },
        { cells: ['تَبْقَى', 'لِكَيْ {k|تَبْقَى}', 'weak -ā: no change', 'لِكَيْ تَبْقَى الشِّعَابُ حَيَّةً'] },
      ],
      ltr: true,
      foot: 'Website mistake 1: li-kay naḥmī ✗ → li-kay naḥmiya ✓. “The final fatḥa is the mark that earns the accuracy point.”',
      notes: `GRAMMAR PART 3 — website rule “Purpose subjunctive”, teaching point 2 (“P4 accuracy depends on it”), mistake 1 and vocabulary group 3. Row 5 is a teacher addition: verbs ending in -ā (تَبْقَى · يَسْعَى) show no change.
Same rule as P3-L06/L07: أَنْ / لِكَيْ / لِـ (purpose) all take the verb in -a. Also correct: لِنَحْمِيَ (li- + verb) — the shorter form.
The doubled verb: تَسْتَمِرُّ → تَسْتَمِرَّ (the shadda stays, only the last vowel changes).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · scientific register (website listening, reading and writing model) · Stretch', title: 'Sound like a science report', ar: 'الأُسْلُوبُ العِلْمِيُّ',
      cols: [{ label: 'Tool', w: 2.5 }, { label: 'Example (website texts)', w: 7.2, size: 18 }, { label: 'Effect', w: 2.63 }],
      rows: [
        { core: true, cells: ['a big claim', '{p|يُعَدُّ} التَّنَوُّعُ الحَيَوِيُّ {p|أَسَاسَ} الحَيَاةِ عَلَى الأَرْضِ.', 'yuʿaddu … + acc.'] },
        { cells: ['superlative', 'شِعَابٌ مَرْجَانِيَّةٌ {w|مِنْ أَغْنَى} النُّظُمِ البِيئِيَّةِ فِي العَالَمِ.', 'min + afʿal'] },
        { cells: ['indispensable', 'يُشَكِّلُ المَرْجَانُ بِيئَةً {m|لَا غِنَى عَنْهَا}.', 'emphasis'] },
        { cells: ['cause → effect', 'يُهَدِّدُ الاحْتِرَارُ التَّوَازُنَ {e|وَيُؤَدِّي إِلَى} تَبْيِيضِ المَرْجَانِ.', 'ilā + maṣdar'] },
        { core: true, cells: ['the close', '{k|لِذٰلِكَ} يَجِبُ أَنْ نَتَعَاوَنَ {k|لِكَيْ نَحْمِيَ} التَّنَوُّعَ الحَيَوِيَّ.', 'therefore + purpose'] },
      ],
      ltr: true,
      foot: 'A science paragraph moves: what it is → why it matters → the threat → the counterfactual → therefore + li-kay.',
      notes: `GRAMMAR PART 4 — register tools from the website listening, reading and writing model.
Row 1: يُعَدُّ + accusative (أَسَاسَ) — “is considered the basis”. Row 2: P3-L01 superlative. Row 3: لَا غِنَى عَنْهُ / عَنْهَا = indispensable. Row 4: يُؤَدِّي إِلَى + a verbal noun (تَبْيِيضِ).
Science fact for Stretch: coral bleaching happens when hot water makes corals expel the algae that feed them; some northern Red Sea corals appear unusually heat-tolerant, which is why scientists study them.`,
    },
  ],
  quick: [0, 1, 4, 5],
  rest: [2, 3, 6, 7],
  ido: {
    title: 'Watch me describe and defend an ecosystem',
    steps: [
      { head: 'Describe', ar: '{w|يَضُمُّ} … {w|يُشَكِّلُ} …', think: 'Objects.' },
      { head: 'Threat', ar: '{e|يُهَدِّدُ} … {e|إِذَا} … سَـ', think: 'Type 1.' },
      { head: 'Regret', ar: '{p|لَوْ} … {p|لَـ}كَانَتْ', think: 'Type 2.' },
      { head: 'Purpose', ar: '{k|لِذٰلِكَ} … {k|لِكَيْ تَحْمِيَ}', think: '-a!' },
    ],
    legend: ['w', 'e', 'p', 'k'], legendLabels: { w: 'COMPOSITION', e: 'THREAT · TYPE 1', p: 'TYPE 2', k: 'LI-KAY + -A' },
    model: 'يَقَعُ البَحْرُ الأَحْمَرُ بَيْنَ شِبْهِ الجَزِيرَةِ العَرَبِيَّةِ وَأَفْرِيقِيَا، {w|وَيَضُمُّ} شِعَابًا مَرْجَانِيَّةً غَنِيَّةً. {w|يُشَكِّلُ} المَرْجَانُ بِيئَةً لَا غِنَى عَنْهَا لِآلَافِ الأَسْمَاكِ. غَيْرَ أَنَّ الاحْتِرَارَ {e|يُهَدِّدُ} هٰذَا التَّوَازُنَ؛ {e|فَإِذَا} اسْتَمَرَّ، {e|سَتَمُوتُ} الشِّعَابُ. {p|وَلَوْ} كَانَتِ الحِمَايَةُ أَصْرَمَ فِي المَاضِي، {p|لَكَانَتِ} الشِّعَابُ أَفْضَلَ حَالًا. {k|لِذٰلِكَ} نَحْتَاجُ إِلَى تَعَاوُنٍ إِقْلِيمِيٍّ {k|لِكَيْ نَحْمِيَ} هٰذَا الإِرْثَ.',
    modelEn: 'The Red Sea lies between the Arabian Peninsula and Africa, and it includes rich coral reefs. Coral forms an indispensable environment for thousands of fish. However, warming threatens this balance: if it continues, the reefs will die. Had protection been stricter in the past, the reefs would be in better shape. Therefore we need regional cooperation so that we protect this heritage.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Describe first: yaḍummu + object, yushakkilu + object. Then the threat: yuhaddidu — and a real warning, idhā … SA-. Then the regret: law … LA-kānat. Close with li-kay — so the verb ends in -A: naḥmiyA.”',
  },
  patternEn: ['the Red Sea’s coral reefs include a thousand species of fish', 'had protection measures been stricter, the reefs would be in better shape', 'states need cooperation so that they protect this natural heritage'],
  gameKey: 'P4-L01',
  game: {
    title: 'Landscapes: match the picture',
    pick: [0, 3, 5],
    en: ['This is a forest.', 'This is a sea.', 'We must protect the environment.'],
    icons: [[['fa6', 'FaTree', '1E6B52'], ['fa6', 'FaLeaf', '1E6B52']], [['fa6', 'FaWater', '1D5FBF'], ['fa6', 'FaFish', 'C77700']], [['fa6', 'FaEarthAfrica', '1D5FBF'], ['fa6', 'FaSeedling', '1E6B52']]],
    labels: ['a forest', 'the sea', 'protect the environment'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6) — a quick warm-up at A2 level. Then upgrade each to today’s register: تَضُمُّ الغَابَةُ آلَافَ الأَنْوَاعِ · يَضُمُّ البَحْرُ شِعَابًا مَرْجَانِيَّةً · يَجِبُ أَنْ نَتَعَاوَنَ لِكَيْ نَحْمِيَ البِيئَةَ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build an ecosystem argument (website live builder)', title: 'Composition + threat + purpose', ar: 'ابْنِ حُجَّةً بِيئِيَّةً',
      cols: [{ label: '1 · Composition', w: 4.0, size: 16 }, { label: '2 · Threat / counterfactual', w: 4.1, size: 16 }, { label: '3 · Purpose (li-kay)', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then underline every verb after li-kay: does it end in -a?',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: label column 2 — Type 1 (row 1), Type 2 (row 2), cause–effect (row 3). Stretch: write your own column-3 line about a desert or a mountain: لِكَيْ نُحَافِظَ عَلَى …`,
    },
  ],
  sorterTitle: 'Composition, conditional — or purpose?',
  sorterCats: ['composition (object)', 'conditional (Type 1 / 2)', 'purpose (li-kay + -a)'],
  sorterNotes: 'Then join one card from each column into a three-part argument: تَضُمُّ … ، وَإِذَا … سَـ … ، لِذٰلِكَ … لِكَيْ … .',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('يَضُمُّ takes a direct object.', 'yaḍummu takes a direct object.').replace('لِكَيْ + subjunctive تَحْمِيَ.', 'li-kay + a verb in -a (taḥmiya).') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; rule headings and formulas in English and transliteration; sorter headings in English; the verb, purpose and register tables are teacher-built from the website texts. All other website items, including the visual game, are used as published.',
  hints: ['li-kay naḥmī?', 'taḍummu + bi-?', 'law … sa-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: yaḍummu · yushakkilu · idhā … sa-.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down the verb after li-kay with its final vowel.',
  gloss: [
    ['يَقَعُ البَحْرُ الأَحْمَرُ بَيْنَ شِبْهِ الجَزِيرَةِ العَرَبِيَّةِ وَشَمَالِ أَفْرِيقِيَا. يَضُمُّ هٰذَا البَحْرُ شِعَابًا مَرْجَانِيَّةً مِنْ أَغْنَى النُّظُمِ البِيئِيَّةِ البَحْرِيَّةِ فِي العَالَمِ.', 'The Red Sea lies between the Arabian Peninsula and North Africa. This sea includes coral reefs among the richest marine ecosystems in the world.'],
    ['يُشَكِّلُ المَرْجَانُ بِيئَةً لَا غِنَى عَنْهَا لِآلَافِ الأَسْمَاكِ. غَيْرَ أَنَّ الاحْتِرَارَ يُهَدِّدُ هٰذَا التَّوَازُنَ.', 'Coral forms an indispensable environment for thousands of fish. However, warming threatens this balance.'],
    ['إِذَا اسْتَمَرَّ ارْتِفَاعُ حَرَارَةِ المُحِيطَاتِ، سَتَتَبَيَّضُ الشِّعَابُ وَتَمُوتُ.', 'If the rise in ocean temperatures continues, the reefs will bleach and die.'],
    ['وَلَوْ كَانَتْ إِجْرَاءَاتُ الحِمَايَةِ أَصْرَمَ فِي العُقُودِ المَاضِيَةِ، لَكَانَتِ الشِّعَابُ أَفْضَلَ حَالًا اليَوْمَ.', 'Had protection measures been stricter in past decades, the reefs would be in better shape today.'],
    ['لِذٰلِكَ تَحْتَاجُ دُوَلُ المِنْطَقَةِ إِلَى تَعَاوُنٍ إِقْلِيمِيٍّ لِكَيْ تَحْمِيَ هٰذَا الإِرْثَ الطَّبِيعِيَّ الاسْتِثْنَائِيَّ.', 'So the region’s states need regional cooperation so that they protect this exceptional natural heritage.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ نِظَامًا بِيئِيًّا مُسْتَعْمِلًا «يَضُمُّ» وَ«يُشَكِّلُ».' },
      { route: 'develop', ar: 'مَا الخَطَرُ الحَقِيقِيُّ عَلَيْهِ؟ عَبِّرْ عَنْهُ بِشَرْطٍ مِنَ النَّوْعِ الأَوَّلِ.' },
      { route: 'stretch', ar: 'لِمَاذَا نَحْتَاجُ إِلَى حِمَايَتِهِ؟ اسْتَعْمِلْ «لِكَيْ» + مَنْصُوبًا.' },
    ],
    stems: [
      { route: 'core', ar: 'يَضُمُّ ______ ، وَيُشَكِّلُ ______ بِيئَةً لِآلَافِ ______ .' },
      { route: 'develop', ar: 'إِذَا اسْتَمَرَّ ______ ، سَيَخْتَلُّ ______ .' },
      { route: 'stretch', ar: 'نَحْتَاجُ إِلَى ______ لِكَيْ نَحْمِيَ ______ .' },
    ],
    modelEn: ['Describe an ecosystem.', 'The Red Sea includes rich coral reefs, and coral forms an environment for thousands of fish.', 'And why do we need to protect it?', 'We need cooperation so that we protect this heritage — and had we delayed longer, we would have lost it.'],
    notes: 'Website prompts and model. Pair task: each student defends a different ecosystem (desert · forest · sea · mountain) in 40 seconds — composition, threat, purpose. Partner checks the -a after li-kay. To a girl: صِفِي · مُسْتَعْمِلَةً · عَبِّرِي · اسْتَعْمِلِي.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Website Core: five ecosystem sentences with yaḍummu, yushakkilu and their complements.' },
    develop: { amount: '60–80 words', how: 'Website Develop: add a Type 1 threat and a Type 2 counterfactual.' },
    stretch: { amount: '100–110 words', how: 'Website task: describe an ecosystem with both verbs, both conditionals, yuʾaddī ilā and a li-kay purpose clause.' },
  },
  frames: {
    core: [
      { en: '… includes …', ar: 'يَضُمُّ ______ ______ .' },
      { en: '… forms an environment for …', ar: 'يُشَكِّلُ ______ بِيئَةً لِآلَافِ ______ .' },
      { en: 'The species interact with each other in …', ar: 'تَتَفَاعَلُ الأَنْوَاعُ مَعَ بَعْضِهَا فِي ______ .' },
      { en: 'The balance depends on …', ar: 'يَعْتَمِدُ التَّوَازُنُ عَلَى ______ .' },
    ],
    develop: [
      { en: '… threatens … and leads to …', ar: 'يُهَدِّدُ ______ هٰذَا التَّوَازُنَ وَيُؤَدِّي إِلَى ______ .' },
      { en: 'If … continues, … will be disrupted.', ar: 'إِذَا اسْتَمَرَّ ______ ، سَيَخْتَلُّ ______ .' },
      { en: 'Had protection been stricter, … would be in better shape.', ar: 'لَوْ كَانَتِ الحِمَايَةُ أَصْرَمَ، لَكَانَ ______ أَفْضَلَ حَالًا.' },
      { en: 'Therefore we need … so that we protect …', ar: 'لِذٰلِكَ نَحْتَاجُ إِلَى ______ لِكَيْ نَحْمِيَ ______ .' },
    ],
    bank: ['البَحْرُ الأَحْمَرُ', 'الغَابَةُ الاسْتِوَائِيَّةُ', 'شِعَابًا مَرْجَانِيَّةً', 'آلَافَ الأَنْوَاعِ', 'المَرْجَانُ', 'سَلَاسِلَ غِذَائِيَّةٍ مُعَقَّدَةٍ', 'بَقَاءِ كُلِّ عُنْصُرٍ', 'الاحْتِرَارُ', 'انْقِرَاضِ أَنْوَاعٍ', 'تَبْيِيضِ المَرْجَانِ', 'تَعَاوُنٍ إِقْلِيمِيٍّ', 'التَّنَوُّعَ الحَيَوِيَّ'],
  },
  stretch: [
    ['مِنْ أَغْنَى النُّظُمِ البِيئِيَّةِ فِي العَالَمِ', 'among the richest ecosystems in the world'],
    ['بِيئَةً لَا غِنَى عَنْهَا', 'an indispensable environment'],
    ['فِي سَلَاسِلَ غِذَائِيَّةٍ مُعَقَّدَةٍ', 'in complex food chains'],
    ['وَيُؤَدِّي إِلَى تَبْيِيضِ المَرْجَانِ', 'and leads to coral bleaching'],
    ['لِكَيْ تَحْمِيَ هٰذَا الإِرْثَ الطَّبِيعِيَّ لِلْأَجْيَالِ القَادِمَةِ', 'so that it protects this natural heritage for future generations'],
  ],
  modelEn: 'The Red Sea lies between the Arabian Peninsula and North Africa, and it includes coral reefs among the richest ecosystems in the world. Coral forms an indispensable environment for thousands of fish, and the species interact with each other in complex food chains. However, warming threatens this balance and leads to coral bleaching. If the rise in ocean temperatures continues, the reefs will die within decades. Had protection measures been stricter in the past, the reefs would be in better shape today. Therefore the region’s states need regional cooperation so that they protect this exceptional natural heritage for future generations.',
  find: ['yaḍummu + object · yushakkilu + object', 'yatafāʿalu maʿa · yuʾaddī ilā', 'a Type 1 (idhā … sa-) and a Type 2 (law … la-)', 'li-kay taḥmiya (-a)'],
  modelNotes: 'Website writing model. Evidence: وَيَضُمُّ شِعَابًا · يُشَكِّلُ المَرْجَانُ بِيئَةً · تَتَفَاعَلُ الأَنْوَاعُ مَعَ · يُهَدِّدُ … وَيُؤَدِّي إِلَى · إِذَا اسْتَمَرَّ … سَتَمُوتُ · لَوْ كَانَتْ … لَكَانَتِ · لِكَيْ تَحْمِيَ.',
  selfCheck: [
    { route: 'core', text: 'yaḍummu / yushakkilu have a direct object (no preposition).' },
    { route: 'core', text: 'Each other verb has its partner (maʿa · ʿalā · ilā).' },
    { route: 'develop', text: 'My threat uses idhā … sa-; my counterfactual uses law … la-.' },
    { route: 'develop', text: 'Feminine subjects take ta- (taḍummu l-ghābatu).' },
    { route: 'stretch', text: 'The verb after li-kay ends in -a (naḥmiya · tastamirra).' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['أَسَاسَ', 'the basis'], ['مُعَقَّدَةٍ', 'complex'], ['بَقَاءِ', 'the survival'], ['عُنْصُرٍ', 'an element'], ['النَّشَاطَ البَشَرِيَّ', 'human activity'],
    ['انْقِرَاضِ', 'the extinction'], ['فَقَدْنَا', 'we lost'], ['سَتَتَأَثَّرُ', 'will be affected'], ['عَامَلْنَا', 'we treated'], ['حَافَّةِ', 'the edge, the brink'],
  ],
  prep: {
    words: [['تَخْطِيطٌ عُمْرَانِيٌّ', 'urban planning', '—'], ['حَيٌّ سَكَنِيٌّ', 'a residential district', 'pl. أَحْيَاءٌ سَكَنِيَّةٌ'], ['مَسَاحَاتٌ خَضْرَاءُ', 'green spaces', 'sg. مَسَاحَةٌ خَضْرَاءُ'], ['الازْدِحَامُ المُرُورِيُّ', 'traffic congestion', '—'], ['يُبْنَى', 'it is built', 'تُبْنَى she / it (f.)']],
    questionEn: 'What would make your town or city a better place to live?',
    questionAr: 'تَحْتَاجُ مَدِينَتِي إِلَى ______ لِكَيْ تَكُونَ ______ .',
    homework: {
      core: 'Write five ecosystem sentences with yaḍummu and yushakkilu (no preposition!).',
      develop: 'Add a Type 1 threat and a Type 2 counterfactual (60–80 words).',
      stretch: 'Website writing task: a 100–110-word description of an ecosystem ending with li-kay + -a.',
    },
    wordsSource: 'The five words come from the website P4-L02 vocabulary (urban environments).',
  },
  remember: 'Remember: yaḍummu / yushakkilu / yuhaddidu + an OBJECT · yatafāʿalu MAʿA · yaʿtamidu ʿALĀ · yuʾaddī ILĀ — warn with idhā … sa-, regret with law … la- — and after li-kay the verb ends in -a.',
});

module.exports = { meta, slides };
