'use strict';
/* P4-L06 · Energy and Resources — Arab World Potential and Global Responsibility — website: Pathways › Progression › P4 › P4-L06 (the full subjunctive
 * system in one argument: purpose لِكَيْ, intention يَهْدِفُ إِلَى أَنْ, necessity يَنْبَغِي أَنْ; verbs with fixed prepositions; both conditionals; a cited official).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder, mission and visual game used as published, with
 * waṣl alif shown without a kasra, لِكَيْ always written with its sukūn, and two vowel fixes: عَلَاوَةً → عِلَاوَةً and الأَحْفُورِيِّ → الأُحْفُورِيِّ.
 * Game cards 1, 3 and 4 not used (three cards are enough). Sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P4')({
  n: 6, fileTitle: 'Energy_and_Resources', chip: 'Policy',
  title: 'Energy and Resources — Arab World Potential and Global Responsibility', arabic: 'الطَّاقَةُ وَالمَوَارِدُ — إِمْكَانَاتُ العَالَمِ العَرَبِيِّ وَالمَسْؤُولِيَّةُ العَالَمِيَّةُ',
  focus: 'Analyse the Arab world’s energy transition with the whole subjunctive system in one argument — li-kay (purpose), yahdifu ilā an (intention), yanbaghī an (necessity), each + a verb in -a — plus verbs with fixed partners, both conditionals and a cited official.',
  icon: 'FaSolarPanel', iconSet: 'fa6',
});

const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/عَلَاوَةً/g, 'عِلَاوَةً').replace(/الأَحْفُورِيِّ/g, 'الأُحْفُورِيِّ'));
const site = fix(D.site('P4-L06'));
const RH = [['Purpose', 'li-kay + verb in -a'], ['Intention', 'yahdifu ilā an + verb in -a'], ['Necessity', 'yanbaghī an + verb in -a'], ['Both conditionals', 'idhā … sa- · law … la-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;
const TR = [[': لِكَيْ', ': li-kay'], [': يَهْدِفُ إِلَى أَنْ', ': yahdifu ilā an'], [': يَنْبَغِي أَنْ', ': yanbaghī an']];

const slides = D.devLesson('P4-L06', {
  support: `• Core: three energy sentences, one for each trigger (website Core). Develop: add a Type 1 prospect and a Type 2 counterfactual. Stretch: a full 110–120-word analysis with all three triggers and a cited official.
• Accuracy: Arab states hold roughly 55–57% of the world’s proven oil reserves (OPEC / OAPEC figures vary by year), and Saudi Vision 2030 targets about half of electricity from renewables by 2030. The region has some of the strongest sunlight on Earth.
• Faith link (optional): «وَلَا تُفْسِدُوا فِي الأَرْضِ بَعْدَ إِصْلَاحِهَا» (al-Aʿrāf 7:56) — resources are a trust (amāna), to be used wisely for the next generation.
• Grammar links: li-kay (P4-L01) · volition verbs (P4-L03) · necessity (P4-L04) · both conditionals (P3-L05) · reported speech (P3-L06). Today: choose the RIGHT trigger.`,
  teach: 'Purpose, intention and necessity in one argument, verbs with fixed partners, prospect / counterfactual / citation, energy-policy register.',
  wedo: 'Match energy pictures, build an energy argument, sort purpose / intention / necessity.',
  next: { nextCode: 'P4-L07', nextTitle: 'Heritage Conservation — Protecting the Built and Natural Past', nextAr: 'الحِفَاظُ عَلَى التُّرَاثِ' },
  objectives: ['Describe energy resources and the transition to renewables.', 'Use li-kay (purpose), yahdifu ilā an (intention) and yanbaghī an (necessity).', 'Choose the right trigger within one argument.', 'Write an energy-transition analysis using all P4 structures.'],
  rulesAr: 'نِظَامُ النَّصْبِ الكَامِلُ فِي سِيَاسَةِ الطَّاقَةِ',
  ruleEx: [['تَسْتَثْمِرُ الدُّوَلُ فِي الشَّمْسِ لِكَيْ تُحَقِّقَ الاسْتِدَامَةَ'], ['تَهْدِفُ الرُّؤْيَةُ إِلَى أَنْ تُنَوِّعَ المَمْلَكَةُ اقْتِصَادَهَا'], ['يَنْبَغِي أَنْ تَسْتَثْمِرَ شَرِكَاتُ النِّفْطِ فِي الطَّاقَةِ الخَضْرَاءِ'], ['إِذَا أَكْمَلَ الخَلِيجُ تَحَوُّلَهُ، سَيُصْبِحُ رَائِدًا', 'لَوْ بَدَأَ التَّحَوُّلُ مُبَكِّرًا، لَكَانَتِ الانْبِعَاثَاتُ أَقَلَّ']],
  doNow: {
    questions: [
      q('What does احْتِيَاطِيَّاتُ النِّفْطِ mean?', ['oil reserves', 'oil prices', 'oil pollution'], 'Prepared at home (P4-L05).'),
      q('What does طَاقَةٌ مُتَجَدِّدَةٌ mean?', ['renewable energy', 'nuclear energy', 'energy saving'], 'Prepared at home (P4-L05).'),
      q('What does تَنْوِيعُ الدَّخْلِ mean?', ['income diversification', 'income tax', 'a low income'], 'Prepared at home (P4-L05).'),
      q('Choose the accurate reporting passive.', ['دُمِّرَتْ مِئَاتُ المَنَازِلِ.', 'دُمِّرَتْ مِئَاتَ المَنَازِلِ.', 'دُمِّرَتْ مِئَاتِ المَنَازِلِ.'], 'P4-L05: the passive subject stays nominative.'),
      q('Complete: أَعْلَنَ الوَزِيرُ ___ الإِغَاثَةَ وَصَلَتْ.', ['أَنَّ', 'أَنْ', 'لِكَيْ'], 'P4-L05: aʿlana + anna + a noun.'),
    ],
    keyIdea: { text: 'Three triggers, three jobs — WHY (purpose), AIM (intention), MUST (necessity) — and after each, the verb ends in -a.', ar: 'لِكَيْ {e|تُحَقِّقَ} · يَهْدِفُ إِلَى أَنْ {w|تُنَوِّعَ} · يَنْبَغِي أَنْ {k|تَسْتَثْمِرَ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P4-L05. Questions 4–5 retrieve the reporting passive and aʿlana anna (P4-L05) — today an official is cited with akkada anna.',
  },
  routes: {
    core: ['I can name 8 energy words.', 'I can use li-kay + a verb in -a.'],
    develop: ['I can use yahdifu ilā an and yanbaghī an.', 'I can choose the right trigger: purpose, intention or necessity.'],
    stretch: ['I can add a prospect, a counterfactual and a cited official.', 'I can write an energy-transition analysis.'],
  },
  bridge: [
    { ar: 'طَاقَةٌ', urdu: 'طاقت', tr: 'tāqat', en: 'Arabic: energy · Urdu: strength' },
    { ar: 'نِيَّةٌ', urdu: 'نیت', tr: 'niyyat', en: 'an intention' },
    { ar: 'رُؤْيَةٌ', urdu: 'رویت', tr: 'ruʾyat', en: 'Arabic: a vision (plan) · Urdu: a sighting' },
    { ar: 'دَخْلٌ', urdu: 'دخل', tr: 'dakhl', en: 'Arabic: income · Urdu: interference' },
    { ar: 'احْتِيَاطٌ', urdu: 'احتیاط', tr: 'ehtiyāt', en: 'Arabic: reserve, precaution · Urdu: caution' },
  ],
  bridgeNotes: 'URDU BRIDGE: نیت is shared (the niyya of every action!). Four false friends: Urdu طاقت = strength (Arabic طَاقَةٌ = energy) · رویت = sighting, as in رویتِ ہلال (Arabic رُؤْيَةُ 2030 = Vision 2030) · دخل = interference (Arabic دَخْلٌ = income) · احتیاط = caution (Arabic احْتِيَاطِيَّاتٌ = reserves).',
  core: ['احْتِيَاطِيَّاتُ النِّفْطِ', 'إِنْتَاجُ الغَازِ الطَّبِيعِيِّ', 'طَاقَةٌ شَمْسِيَّةٌ', 'طَاقَةُ الرِّيَاحِ', 'طَاقَةٌ مُتَجَدِّدَةٌ', 'صُفْرٌ كَرْبُونِيٌّ', 'الاقْتِصَادُ الأَخْضَرُ', 'يَتَحَوَّلُ إِلَى', 'يَسْتَثْمِرُ فِي', 'يَهْدِفُ إِلَى', 'تَحَوُّلٌ طَاقَوِيٌّ', 'تَنْوِيعُ الدَّخْلِ'],
  forms: {
    'يَتَحَوَّلُ إِلَى': hs('تَتَحَوَّلُ إِلَى'), 'يُنَوِّعُ': hs('تُنَوِّعُ'), 'يَسْتَثْمِرُ فِي': hs('تَسْتَثْمِرُ فِي'), 'يُضَاعِفُ': hs('تُضَاعِفُ'), 'يَهْدِفُ إِلَى': hs('تَهْدِفُ إِلَى'), 'يَعْتَمِدُ عَلَى': hs('تَعْتَمِدُ عَلَى'),
    'صَنْدُوقُ الثَّرْوَةِ السِّيَادِيُّ': sp('صَنَادِيقُ الثَّرْوَةِ السِّيَادِيَّةُ'), 'رُؤْيَةٌ اسْتِرَاتِيجِيَّةٌ': sp('رُؤًى اسْتِرَاتِيجِيَّةٌ'), 'تَحَوُّلٌ طَاقَوِيٌّ': sp('تَحَوُّلَاتٌ طَاقَوِيَّةٌ'),
  },
  vocabNotes: {
    0: 'Energy resources: fossil (oil, gas) and renewable (sun, wind, hydrogen). صُفْرٌ كَرْبُونِيٌّ = net zero (literally “carbon zero”). The adjective after a feminine noun is feminine: طَاقَةٌ شَمْسِيَّةٌ.',
    1: 'Transition verbs: learn each WITH its partner — يَتَحَوَّلُ إِلَى · يَسْتَثْمِرُ فِي · يَعْتَمِدُ عَلَى · يَهْدِفُ إِلَى. يُنَوِّعُ and يُضَاعِفُ take a direct object (no preposition).',
    2: 'The three triggers together, plus the big ideas of energy policy: sovereign wealth funds, income diversification, a strategic vision, global responsibility.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · three triggers, three jobs (website rules 1–3, teaching points 1–2 and table) · Core', title: 'Why? Aim? Must?', ar: 'الغَرَضُ · النِّيَّةُ · الضَّرُورَةُ',
      cols: [{ label: 'Trigger', w: 2.5, size: 20 }, { label: 'Job', w: 1.7 }, { label: 'Question', w: 1.6 }, { label: 'Example (website)', w: 6.53, size: 17 }],
      rows: [
        { core: true, cells: ['{e|لِكَيْ}', 'purpose', 'why?', 'تَسْتَثْمِرُ دُوَلُ الخَلِيجِ فِي الشَّمْسِ لِكَيْ {e|تُحَقِّقَ} صُفْرًا كَرْبُونِيًّا.'] },
        { core: true, cells: ['{w|يَهْدِفُ إِلَى أَنْ}', 'intention', 'what aim?', 'تَهْدِفُ الرُّؤْيَةُ إِلَى أَنْ {w|تُنَوِّعَ} المَمْلَكَةُ اقْتِصَادَهَا.'] },
        { core: true, cells: ['{k|يَنْبَغِي أَنْ}', 'necessity', 'what must?', 'يَنْبَغِي أَنْ {k|تَسْتَثْمِرَ} شَرِكَاتُ النِّفْطِ فِي الطَّاقَةِ الخَضْرَاءِ.'] },
        { cells: ['two verbs', 'purpose', 'why?', 'لِكَيْ {e|تُوَاكِبَ} العَصْرَ وَ{e|تَحْمِيَ} اقْتِصَادَهَا.'] },
        { cells: ['{p|يَهْدِفُ إِلَى}', 'aim + noun', 'no an', 'تَهْدِفُ الاتِّفَاقِيَّةُ إِلَى {p|خَفْضِ} الانْبِعَاثَاتِ.'] },
      ],
      ltr: true,
      foot: 'Website teaching point: li-kay states the goal of an action, yahdifu ilā an an intention, yanbaghī an a requirement — three triggers in three lines.',
      notes: `GRAMMAR PART 1 — website rules 1–3, the website table and teaching points 1–2 (“Three triggers, one energy argument” · “Which trigger, and why”). Row 4 is from the website reading; row 5 is from P4-L03.
Ask the question to choose the trigger: WHY are they doing it? → li-kay · What do they AIM at? → yahdifu ilā an · What MUST happen? → yanbaghī an.
Row 4: one li-kay can govern two verbs — both end in -a (tuwākiba … taḥmiya; weak -ī → -iya). Row 5: yahdifu ilā + a NOUN (maṣdar) needs no an and no -a.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · verbs with fixed partners (website vocabulary notes, mistake 3, quiz 7 and mission 7–8) · Develop', title: 'Every verb has its partner', ar: 'أَفْعَالٌ وَحُرُوفُهَا',
      cols: [{ label: 'Verb', w: 2.4, size: 20 }, { label: 'Partner', w: 1.5, size: 20 }, { label: 'Meaning', w: 2.0 }, { label: 'Example (website texts)', w: 6.43, size: 17 }],
      rows: [
        { core: true, cells: ['يَتَحَوَّلُ', '{p|إِلَى}', 'transitions to', 'يَتَحَوَّلُ العَالَمُ العَرَبِيُّ {p|إِلَى} الطَّاقَةِ المُتَجَدِّدَةِ.'] },
        { core: true, cells: ['يَسْتَثْمِرُ', '{p|فِي}', 'invests in', 'تَسْتَثْمِرُ الدُّوَلُ {p|فِي} الطَّاقَةِ الشَّمْسِيَّةِ.'] },
        { cells: ['يَعْتَمِدُ', '{p|عَلَى}', 'depends on', 'تُقَلِّلُ الدُّوَلُ اعْتِمَادَهَا {p|عَلَى} النِّفْطِ.'] },
        { cells: ['يُنَوِّعُ', '—', 'diversifies', 'تُنَوِّعُ الدُّوَلُ {m|مَصَادِرَ} دَخْلِهَا.'] },
        { cells: ['يُضَاعِفُ', '—', 'doubles', 'تُضَاعِفُ الدَّوْلَةُ {m|إِنْتَاجَ} الطَّاقَةِ الشَّمْسِيَّةِ.'] },
      ],
      ltr: true,
      foot: 'Website mistake 3: yataḥawwalu fī ✗ → yataḥawwalu ilā ✓. The maṣdar keeps the partner: iʿtimād ʿalā · istithmār fī.',
      notes: `GRAMMAR PART 2 — the website vocabulary notes (“fixed with ilā / fī / ʿalā”; “object”), mistake 3, quiz 7 and mission rounds 7–8. Rows 3–4 are from the website reading; row 5 is teacher-built from the website vocabulary.
Rows 4–5 (blue/purple) take a direct object in -a: مَصَادِرَ · إِنْتَاجَ. Row 3: the maṣdar اعْتِمَادٌ keeps عَلَى, just like the verb.
The listening also uses يَتَحَوَّلُ نَحْوَ (towards) — accurate, but إِلَى is the default partner to learn.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · prospect, regret, evidence (website rule 4, listening and mistake 2) · Develop / Stretch', title: 'Weigh the future', ar: 'الاحْتِمَالُ · الافْتِرَاضُ · الدَّلِيلُ',
      cards: [
        { chip: 'TYPE 1 · PROSPECT · CORE', color: '1D5FBF', head: 'إِذَا … سَـ', big: 'إِذَا أَكْمَلَ الخَلِيجُ تَحَوُّلَهُ الطَّاقَوِيَّ، سَيُصْبِحُ رَائِدًا عَالَمِيًّا.', en: 'If the Gulf completes its energy transition, it will become a global leader.', clue: 'Still possible.' },
        { chip: 'TYPE 2 · REGRET · DEVELOP', color: 'C0386B', head: 'لَوْ … لَـ', big: 'لَوْ بَدَأَ هٰذَا التَّحَوُّلُ قَبْلَ عِقْدَيْنِ، لَكَانَتِ الانْبِعَاثَاتُ اليَوْمَ أَقَلَّ.', en: 'Had this transition begun two decades ago, emissions would be lower today.', clue: 'It did not happen.' },
        { chip: 'EVIDENCE · STRETCH', color: '6B4C9A', head: 'أَكَّدَ … أَنَّ … أَنْ', big: 'أَكَّدَ المَسْؤُولُونَ أَنَّ المَمْلَكَةَ تَهْدِفُ إِلَى أَنْ تُنْتِجَ نِصْفَ كَهْرَبَائِهَا.', en: 'Officials stressed that the kingdom aims to produce half its electricity.', clue: 'anna + noun · an + verb.' },
      ],
      error: { text: 'Website mistake 2: after an, the verb takes -a.', pairs: [['تَهْدِفُ الرُّؤْيَةُ إِلَى أَنْ تُنَوِّعَ المَمْلَكَةُ', 'تَهْدِفُ الرُّؤْيَةُ إِلَى أَنْ تُنَوِّعُ المَمْلَكَةُ']] },
      notes: `GRAMMAR PART 3 — website rule 4 (“Both conditionals”), the listening (cards 1–3) and mistake 2.
Card 3 is the Stretch sentence of the lesson: أَنَّ + a noun (المَمْلَكَةَ) AND, inside it, أَنْ + a verb (تُنْتِجَ). Both little words — two jobs.
Card 2: عِقْدَيْنِ = two decades (dual of عِقْدٌ, genitive after قَبْلَ).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the language of an energy analysis (website listening, reading and writing model) · Stretch', title: 'Sound like an energy analyst', ar: 'لُغَةُ تَحْلِيلِ الطَّاقَةِ',
      cols: [{ label: 'Tool', w: 2.4 }, { label: 'Example (website texts)', w: 7.4, size: 18 }, { label: 'Structure', w: 2.53 }],
      rows: [
        { core: true, cells: ['a statistic', 'تَمْتَلِكُ الدُّوَلُ العَرَبِيَّةُ {w|نَحْوَ سَبْعَةٍ وَخَمْسِينَ بِالمِئَةِ} مِنَ الاحْتِيَاطِيَّاتِ', 'naḥwa = about'] },
        { cells: ['a paradox', 'يَعِيشُ العَالَمُ العَرَبِيُّ {e|مُفَارَقَةً لَافِتَةً}', 'framing'] },
        { cells: ['the backbone', 'شَكَّلَتْ هٰذِهِ المَوَارِدُ {m|العَمُودَ الفِقْرِيَّ} لِلِاقْتِصَادِ', 'metaphor'] },
        { cells: ['however', '{p|غَيْرَ أَنَّ} كَثِيرًا مِنْهَا يَتَحَوَّلُ الآنَ نَحْوَ الطَّاقَةِ المُتَجَدِّدَةِ', 'ghayra anna + noun'] },
        { core: true, cells: ['moreover', '{k|عِلَاوَةً عَلَى ذٰلِكَ}، يَنْبَغِي أَنْ تُوَاصِلَ الحُكُومَاتُ اسْتِثْمَارَاتِهَا', 'formal connector'] },
      ],
      ltr: true,
      foot: 'An energy analysis moves: the numbers → the paradox → the turn (ghayra anna) → aims and purposes → what must happen.',
      notes: `GRAMMAR PART 4 — register tools from the website listening, reading and writing model.
Row 1: نَحْوَ + number = about, approximately. Row 2: مُفَارَقَةٌ = a paradox — the biggest fossil exporter with the strongest sunshine. Row 3: العَمُودُ الفِقْرِيُّ = the backbone (literally “the spinal column”).
Spelling: عِلَاوَةً (with kasra) = moreover — the website prints a fatḥa. The reading’s الوَقُودُ الأُحْفُورِيُّ (fossil fuel) takes a ḍamma on the hamza, as in the website game.`,
    },
  ],
  quick: [0, 1, 2, 6],
  rest: [3, 4, 5, 7],
  ido: {
    title: 'Watch me write an energy analysis',
    steps: [
      { head: 'Shift', ar: 'تَتَحَوَّلُ … {p|إِلَى} الطَّاقَةِ المُتَجَدِّدَةِ', think: 'Verb + partner.' },
      { head: 'Aim + why', ar: 'تَهْدِفُ إِلَى أَنْ {w|تُنْتِجَ} · لِكَيْ {e|تُحَقِّقَ}', think: '-a, -a.' },
      { head: 'Regret', ar: '{m|لَوْ} … {m|لَكَانَتِ} …', think: 'Type 2.' },
      { head: 'Must', ar: 'يَنْبَغِي أَنْ {k|تُوَاصِلَ} …', think: 'Necessity.' },
    ],
    legend: ['p', 'w', 'e', 'm', 'k'], legendLabels: { p: 'PARTNER', w: 'INTENTION', e: 'PURPOSE', m: 'TYPE 2', k: 'NECESSITY' },
    model: 'تَتَحَوَّلُ الدُّوَلُ العَرَبِيَّةُ الآنَ {p|إِلَى} الطَّاقَةِ المُتَجَدِّدَةِ. وَأَكَّدَ المَسْؤُولُونَ أَنَّ المَمْلَكَةَ تَهْدِفُ إِلَى أَنْ {w|تُنْتِجَ} نِصْفَ كَهْرَبَائِهَا مِنْ مَصَادِرَ مُتَجَدِّدَةٍ، وَتَسْتَثْمِرُ دُوَلُ الخَلِيجِ فِي الشَّمْسِ لِكَيْ {e|تُحَقِّقَ} صُفْرًا كَرْبُونِيًّا. {m|وَلَوْ} بَدَأَ التَّحَوُّلُ قَبْلَ عِقْدَيْنِ، {m|لَكَانَتِ} الانْبِعَاثَاتُ أَقَلَّ. لِذٰلِكَ يَنْبَغِي أَنْ {k|تُوَاصِلَ} الحُكُومَاتُ اسْتِثْمَارَاتِهَا.',
    modelEn: 'Arab states are now turning to renewable energy. Officials stressed that the kingdom aims to produce half its electricity from renewable sources, and the Gulf states are investing in the sun so that they reach net zero. Had the transition begun two decades ago, emissions would be lower. So governments should continue their investments.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “The shift: yataḥawwalu — partner ILĀ. The aim: yahdifu ilā AN tuntijA. The reason: li-kay tuḥaqqiqA. The regret: law … LA-kānat. What must happen? yanbaghī AN tuwāṣilA. Three triggers — three jobs — one ending.”',
  },
  patternEn: ['the Gulf states invest in solar energy so that they achieve sustainability', 'the vision aims for the kingdom to diversify its economy', 'oil companies should invest in green energy'],
  gameKey: 'P4-L06',
  game: {
    title: 'Energy sources: match the picture',
    pick: [0, 2, 5],
    en: ['Solar energy is renewable.', 'Oil is a non-renewable resource.', 'Clean energy reduces pollution.'],
    icons: [[['fa6', 'FaSun', 'C77700'], ['fa6', 'FaSolarPanel', '1D5FBF']], [['fa6', 'FaOilWell', '1F2937'], ['fa6', 'FaBan', 'C0386B']], [['fa6', 'FaLeaf', '1E6B52'], ['fa6', 'FaEarthAfrica', '1D5FBF']]],
    labels: ['solar energy', 'oil', 'clean energy'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Then give each card a trigger: تَسْتَثْمِرُ الدُّوَلُ فِي الشَّمْسِ لِكَيْ تُقَلِّلَ التَّلَوُّثَ · تَهْدِفُ الدُّوَلُ إِلَى أَنْ تُقَلِّلَ اعْتِمَادَهَا عَلَى النِّفْطِ · يَنْبَغِي أَنْ نَسْتَعْمِلَ الطَّاقَةَ النَّظِيفَةَ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build an energy argument (website live builder)', title: 'Purpose + intention + necessity', ar: 'ابْنِ حُجَّةً عَنِ الطَّاقَةِ',
      cols: [{ label: '1 · Purpose (li-kay)', w: 4.1, size: 16 }, { label: '2 · Intention (yahdifu ilā an)', w: 4.1, size: 16 }, { label: '3 · Necessity / regret', w: 4.13, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then circle every verb after li-kay and an: does it end in -a?',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: find the one line with no trigger (column 3 row 3: a Type 2 regret with an impersonal passive, اسْتُثْمِرَ). Stretch: add “akkada l-masʾūlūna anna …” in front of column 2.`,
    },
  ],
  sorterTitle: 'Purpose, intention — or necessity?',
  sorterCats: ['purpose (li-kay)', 'intention (yahdifu ilā an)', 'necessity (yanbaghī an)'],
  sorterNotes: 'The intention and necessity cards start with an — put the right trigger in front before you read: تَهْدِفُ الرُّؤْيَةُ إِلَى … · يَنْبَغِي … . Ask: AIM or MUST?',
  patch: { vocab: site.vocab.map((g) => ({ ...g, items: g.items.map((it) => ({ ...it, en: TR.reduce((s, [a, b]) => s.replace(a, b), it.en) })) })), grammar: { ...site.grammar, rules }, listening: { ...site.listening, questions: site.listening.questions.map((x, i) => (i === 4 ? { ...x, options: ['Had it begun two decades ago, emissions would be lower today', ...x.options.slice(1)] } : x)) }, reading: { ...site.reading, questions: site.reading.questions.map((x, i) => (i === 4 ? { ...x, options: ['Had it invested in solar early, the region would lead the world now', ...x.options.slice(1)] } : x)) }, writing: { ...site.writing, prompt: 'Write one hundred and ten to one hundred and twenty words analysing the Arab world’s energy transition. Use all three subjunctive triggers — li-kay (purpose), yahdifu ilā an (intention), yanbaghī an (necessity) — both conditional types, reported speech and a formal connector.', checklist: site.writing.checklist.map((c) => c.replace(/\(.*\)/, '(ʿilāwatan ʿalā dhālika / ghayra anna)')) }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('لِكَيْ + subjunctive تُحَقِّقَ.', 'li-kay + a verb in -a (tuḥaqqiqa).').replace('يَهْدِفُ إِلَى أَنْ + subjunctive.', 'yahdifu ilā an + a verb in -a (tunawwiʿa).').replace('يَنْبَغِي أَنْ + subjunctive.', 'yanbaghī an + a verb in -a (tastathmira).') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; vowel fixes عَلَاوَةً → عِلَاوَةً and الأَحْفُورِيِّ → الأُحْفُورِيِّ; rule formulas, pattern tips, trigger-word glosses, writing prompt and connector checklist in transliteration; listening and reading question 5 answers shortened to fit; sorter headings in transliteration; game cards 1, 3 and 4 not used; the trigger, partner and register tables are teacher-built from the website texts. All other website items are used as published.',
  hints: ['li-kay tuḥaqqiqu?', 'an tunawwiʿu?', 'yataḥawwalu fī?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: yahdifu ilā an · li-kay · yanbaghī an.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and label each trigger you hear: purpose, intention or necessity.',
  gloss: [
    ['تَمْتَلِكُ الدُّوَلُ العَرَبِيَّةُ نَحْوَ سَبْعَةٍ وَخَمْسِينَ بِالمِئَةِ مِنَ الاحْتِيَاطِيَّاتِ النِّفْطِيَّةِ المُؤَكَّدَةِ عَالَمِيًّا. غَيْرَ أَنَّ كَثِيرًا مِنْهَا يَتَحَوَّلُ الآنَ نَحْوَ الطَّاقَةِ المُتَجَدِّدَةِ.', 'Arab states hold about 57% of the world’s proven oil reserves. However, many of them are now turning towards renewable energy.'],
    ['وَأَكَّدَ المَسْؤُولُونَ أَنَّ المَمْلَكَةَ تَهْدِفُ إِلَى أَنْ تُنْتِجَ نِصْفَ احْتِيَاجَاتِهَا الكَهْرَبَائِيَّةِ مِنْ مَصَادِرَ مُتَجَدِّدَةٍ.', 'Officials stressed that the kingdom aims to produce half of its electricity needs from renewable sources.'],
    ['تَسْتَثْمِرُ دُوَلُ الخَلِيجِ فِي الطَّاقَةِ الشَّمْسِيَّةِ لِكَيْ تُحَقِّقَ صُفْرًا كَرْبُونِيًّا. وَيَنْبَغِي أَنْ تُوَاصِلَ الحُكُومَاتُ اسْتِثْمَارَاتِهَا، وَأَنْ يُشَارِكَ القِطَاعُ الخَاصُّ فِي التَّمْوِيلِ.', 'The Gulf states invest in solar energy so that they reach net zero. Governments should continue their investments, and the private sector should share in the funding.'],
    ['إِذَا أَكْمَلَ الخَلِيجُ تَحَوُّلَهُ الطَّاقَوِيَّ، سَيُصْبِحُ رَائِدًا عَالَمِيًّا فِي الطَّاقَةِ النَّظِيفَةِ.', 'If the Gulf completes its energy transition, it will become a global leader in clean energy.'],
    ['وَلَوْ بَدَأَ هٰذَا التَّحَوُّلُ قَبْلَ عِقْدَيْنِ، لَكَانَتِ الانْبِعَاثَاتُ العَالَمِيَّةُ اليَوْمَ أَقَلَّ.', 'Had this transition begun two decades ago, global emissions would be lower today.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'لِمَاذَا تَسْتَثْمِرُ الدُّوَلُ فِي الشَّمْسِ؟ اسْتَعْمِلْ «لِكَيْ».' },
      { route: 'develop', ar: 'إِلَى مَاذَا تَهْدِفُ الرُّؤْيَةُ؟ اسْتَعْمِلْ «يَهْدِفُ إِلَى أَنْ».' },
      { route: 'stretch', ar: 'مَا الضَّرُورِيُّ لِنَجَاحِ التَّحَوُّلِ؟ اسْتَعْمِلْ «يَنْبَغِي أَنْ» وَ«لَوْ».' },
    ],
    stems: [
      { route: 'core', ar: 'تَسْتَثْمِرُ الدُّوَلُ فِي الشَّمْسِ لِكَيْ تُحَقِّقَ ______ .' },
      { route: 'develop', ar: 'تَهْدِفُ الرُّؤْيَةُ إِلَى أَنْ تُنَوِّعَ ______ .' },
      { route: 'stretch', ar: 'يَنْبَغِي أَنْ تُوَاصِلَ ______ ، وَلَوْ بَدَأْنَا مُبَكِّرًا لَكُنَّا ______ .' },
    ],
    modelEn: ['Why do states invest in the sun?', 'They invest so that they reach net zero and protect their economy.', 'And what is necessary for success?', 'Governments should continue their investments — and had we started early, we would be leaders.'],
    notes: 'Website prompts and model. Pair task: “minister and journalist” — the journalist asks WHY? / WHAT AIM? / WHAT MUST?; the minister answers with the matching trigger. Swap. Partner checks every -a. To a girl: اسْتَعْمِلِي.',
  },
  write: {
    core: { amount: '3 sentences', how: 'Website Core: three energy sentences, one for each trigger.' },
    develop: { amount: '60–80 words', how: 'Website Develop: add a Type 1 prospect and a Type 2 counterfactual.' },
    stretch: { amount: '110–120 words', how: 'Website task: a full analysis with all three triggers, both conditionals, a cited official and a formal connector.' },
  },
  frames: {
    core: [
      { en: 'States invest in … so that they …', ar: 'تَسْتَثْمِرُ الدُّوَلُ فِي ______ لِكَيْ ______ .' },
      { en: 'The vision aims for the kingdom to …', ar: 'تَهْدِفُ الرُّؤْيَةُ إِلَى أَنْ تُنَوِّعَ ______ .' },
      { en: 'Oil companies should …', ar: 'يَنْبَغِي أَنْ تَسْتَثْمِرَ شَرِكَاتُ النِّفْطِ فِي ______ .' },
      { en: 'The Arab world is turning to …', ar: 'يَتَحَوَّلُ العَالَمُ العَرَبِيُّ إِلَى ______ .' },
    ],
    develop: [
      { en: 'If the Gulf completes its transition, …', ar: 'إِذَا أَكْمَلَ الخَلِيجُ تَحَوُّلَهُ، سَيُصْبِحُ ______ .' },
      { en: 'Had the transition begun early, …', ar: 'لَوْ بَدَأَ التَّحَوُّلُ مُبَكِّرًا، لَكَانَتِ ______ .' },
      { en: 'Officials stressed that the kingdom aims to …', ar: 'أَكَّدَ المَسْؤُولُونَ أَنَّ المَمْلَكَةَ تَهْدِفُ إِلَى أَنْ ______ .' },
      { en: 'Moreover, governments should …', ar: 'عِلَاوَةً عَلَى ذٰلِكَ، يَنْبَغِي أَنْ تُوَاصِلَ ______ .' },
    ],
    bank: ['الطَّاقَةِ الشَّمْسِيَّةِ', 'صُفْرًا كَرْبُونِيًّا', 'المَمْلَكَةُ اقْتِصَادَهَا', 'مَصَادِرَ دَخْلِهَا', 'الطَّاقَةِ الخَضْرَاءِ', 'الطَّاقَةِ المُتَجَدِّدَةِ', 'رَائِدًا عَالَمِيًّا', 'الانْبِعَاثَاتُ أَقَلَّ', 'تُنْتِجَ نِصْفَ كَهْرَبَائِهَا', 'الحُكُومَاتُ اسْتِثْمَارَاتِهَا', 'تُوَاكِبَ العَصْرَ', 'تَحْمِيَ اقْتِصَادَهَا'],
  },
  stretch: [
    ['نَحْوَ سَبْعَةٍ وَخَمْسِينَ بِالمِئَةِ مِنَ الاحْتِيَاطِيَّاتِ', 'about 57% of the reserves'],
    ['العَمُودَ الفِقْرِيَّ لِلِاقْتِصَادِ', 'the backbone of the economy'],
    ['غَيْرَ أَنَّ كَثِيرًا مِنْهَا يَتَحَوَّلُ', 'however, many of them are turning'],
    ['لِكَيْ يَنْجَحَ الاقْتِصَادُ الأَخْضَرُ', 'so that the green economy succeeds'],
    ['عِلَاوَةً عَلَى ذٰلِكَ', 'moreover'],
  ],
  modelEn: 'Arab states hold about 57% of proven oil reserves, and these resources have formed the backbone of the economy for decades. However, many of them are now turning towards renewable energy. Officials stressed that the kingdom aims to produce half its electricity from renewable sources. The Gulf states invest in solar energy so that they reach net zero. If the Gulf completes its transition, it will become a global leader. Had the transition begun two decades ago, emissions would be lower. Moreover, governments should continue their investments, and the private sector should share in the funding so that the green economy succeeds.',
  find: ['li-kay tuḥaqqiqa (purpose)', 'yahdifu ilā an tuntija (intention)', 'yanbaghī an tuwāṣila (necessity)', 'idhā … sa- · law … la- · akkada anna'],
  modelNotes: 'Website writing model. Evidence: نَحْوَ … بِالمِئَةِ · العَمُودَ الفِقْرِيَّ · غَيْرَ أَنَّ · يَتَحَوَّلُ … نَحْوَ · أَكَّدَ … أَنَّ … تَهْدِفُ إِلَى أَنْ تُنْتِجَ · لِكَيْ تُحَقِّقَ · إِذَا أَكْمَلَ … سَيُصْبِحُ · لَوْ بَدَأَ … لَكَانَتِ · عِلَاوَةً عَلَى ذٰلِكَ · يَنْبَغِي أَنْ تُوَاصِلَ … وَأَنْ يُشَارِكَ · لِكَيْ يَنْجَحَ.',
  selfCheck: [
    { route: 'core', text: 'After li-kay and every an, my verb ends in -a.' },
    { route: 'core', text: 'I used all three triggers: li-kay, yahdifu ilā an, yanbaghī an.' },
    { route: 'develop', text: 'Each verb has its partner: yataḥawwalu ilā · yastathmiru fī · yaʿtamidu ʿalā.' },
    { route: 'develop', text: 'My prospect uses idhā … sa-; my regret uses law … la-.' },
    { route: 'stretch', text: 'I cited officials (akkada anna) and used a formal connector.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['المُؤَكَّدَةِ', 'proven, confirmed'], ['احْتِيَاجَاتِهَا', 'its needs'], ['القِطَاعُ الخَاصُّ', 'the private sector'], ['التَّمْوِيلِ', 'funding'], ['رَائِدًا', 'a leader, a pioneer'],
    ['عِقْدَيْنِ', 'two decades'], ['مُفَارَقَةً', 'a paradox'], ['مُصَدِّرٍ', 'an exporter'], ['إِمْكَانَاتِ', 'potential'], ['تُوَاكِبَ العَصْرَ', '(to) keep pace with the times'],
  ],
  prep: {
    words: [['تُرَاثٌ مِعْمَارِيٌّ', 'architectural heritage', '—'], ['مَوْقِعٌ أَثَرِيٌّ', 'an archaeological site', '—'], ['تَرْمِيمٌ', 'restoration', '—'], ['يُحَافِظُ عَلَى', 'preserves, maintains', 'with ʿalā'], ['الذَّاكِرَةُ الجَمَاعِيَّةُ', 'collective memory', '—']],
    questionEn: 'Which heritage site in the Arab world would you protect — and why?',
    questionAr: 'يَنْبَغِي أَنْ نُحَافِظَ عَلَى ______ لِكَيْ ______ .',
    homework: {
      core: 'Write three energy sentences: one with li-kay, one with yahdifu ilā an, one with yanbaghī an (verbs in -a!).',
      develop: 'Add a Type 1 prospect and a Type 2 counterfactual (60–80 words).',
      stretch: 'Website writing task: a 110–120-word energy-transition analysis.',
    },
    wordsSource: 'The five words come from the website P4-L07 vocabulary (heritage conservation).',
  },
  remember: 'Remember: WHY? li-kay · AIM? yahdifu ilā an · MUST? yanbaghī an — all + a verb in -A. Learn each verb with its partner (yataḥawwalu ilā, yastathmiru fī), and weigh the future with idhā … sa- and law … la-.',
});

module.exports = { meta, slides };
