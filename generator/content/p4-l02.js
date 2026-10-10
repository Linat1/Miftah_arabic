'use strict';
/* P4-L02 · Urban Environments — Cities, Architecture and Urban Planning — website: Pathways › Progression › P4 › P4-L02 (materials with مَبْنِيٌّ مِنْ;
 * the planning verbs يُعِيدُ تَصْمِيمَ / يُجَدِّدُ / يُحَوِّلُ إِلَى / يُخَطِّطُ لِـ; the urban passive يُبْنَى / يُخَطَّطُ / يُعَادُ تَصْمِيمُهُ with a nominative subject;
 * both conditional types; the goal clause لِكَيْ + a verb in -a). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing,
 * live builder, mission and visual game used as published, with waṣl alif shown without a kasra, لِكَيْ always written with its sukūn, and one agreement
 * fix in the reading: وَيُبْنَى … مُدُنٌ ذَكِيَّةٌ → وَتُبْنَى (a non-human plural takes a feminine verb). Game card 4 (الاِزْدِحَامُ with a waṣl kasra) not used. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P4')({
  n: 2, fileTitle: 'Urban_Environments_Cities_and_Planning', chip: 'Vocabulary',
  title: 'Urban Environments — Cities, Architecture and Urban Planning', arabic: 'البِيئَاتُ الحَضَرِيَّةُ — المُدُنُ وَالعِمَارَةُ وَالتَّخْطِيطُ العُمْرَانِيُّ',
  focus: 'Analyse a city: mabniyyun min for materials, the planning verbs (yuʿīdu taṣmīm · yujaddidu · yuḥawwilu ilā), the urban passive with a nominative subject (yubnā mashrūʿun), and a goal with li-kay takūna.',
  icon: 'FaCity', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const sg = (s) => ({ tag: 'sg · pl', forms: [{ l: 'sg.', ar: s }] });
const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace('وَيُبْنَى فِي المُقَابِلِ مُدُنٌ', 'وَتُبْنَى فِي المُقَابِلِ مُدُنٌ'));
const site = fix(D.site('P4-L02'));
const RH = [['Materials and features', 'mabniyyun min · yatamayyazu bi-'], ['Planning verbs', 'yuʿīdu taṣmīm · yujaddidu · yuḥawwilu ilā'], ['Urban passive', 'yubnā / yukhaṭṭaṭu + nominative'], ['Goal clause', 'li-kay + verb in -a']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P4-L02', {
  support: `• Core: five urban sentences with mabniyyun min and the planning verbs (website Core). Develop: add an urban passive and a Type 1 challenge. Stretch: close with a Type 2 counterfactual and a li-kay goal (website 100–110 words).
• Invite students to describe their own town or a city they love (Makkah, Madinah, Istanbul, Manchester…). Keep it positive: what is built, what is renewed, what would make it better.
• The passive is the new structure: the doer disappears and the thing built becomes the subject — so it is NOMINATIVE (يُبْنَى مَشْرُوعٌ, not مَشْرُوعًا).
• Grammar links: yatamayyaz bi- (P3-L04) · the passive in reports (P3-L05) · li-kay + -a (P4-L01) · both conditionals (P3-L05).`,
  teach: 'Materials and planning verbs, the urban passive, goals with li-kay, the language of urban analysis.',
  wedo: 'Match city scenes, build an urban analysis, sort material / planning / passive and goal.',
  next: { nextCode: 'P4-L03', nextTitle: 'Climate Change and the Arab World — Causes, Impacts and Responses', nextAr: 'تَغَيُّرُ المَنَاخِ وَالعَالَمُ العَرَبِيُّ' },
  objectives: ['Name urban-planning vocabulary.', 'Say what buildings are made of with mabniyyun min.', 'Describe change with the planning verbs and the urban passive.', 'State a planning goal with li-kay + a verb in -a.'],
  rulesAr: 'المَوَادُّ وَالمَبْنِيُّ لِلْمَجْهُولِ وَجُمْلَةُ الغَرَضِ',
  ruleEx: [['نَاطِحَاتُ السَّحَابِ مَبْنِيَّةٌ مِنَ الزُّجَاجِ', 'تَتَمَيَّزُ المَدِينَةُ بِمِعْمَارٍ حَدِيثٍ'], ['يُعِيدُ المُهَنْدِسُ تَصْمِيمَ المِنْطَقَةِ', 'يُحَوِّلُ المَشْرُوعُ المَطَارَ القَدِيمَ إِلَى حَدِيقَةٍ'], ['يُبْنَى مَشْرُوعٌ ضَخْمٌ عَلَى أَطْرَافِ المَدِينَةِ'], ['يُخَطِّطُونَ لِكَيْ تَكُونَ المَدِينَةُ صَالِحَةً لِلْعَيْشِ']],
  doNow: {
    questions: [
      q('What does تَخْطِيطٌ عُمْرَانِيٌّ mean?', ['urban planning', 'a building site', 'an architect'], 'Prepared at home (P4-L01).'),
      q('What does حَيٌّ سَكَنِيٌّ mean?', ['a residential district', 'a living creature', 'a quiet street'], 'Prepared at home (P4-L01).'),
      q('What does الازْدِحَامُ المُرُورِيُّ mean?', ['traffic congestion', 'road safety', 'a traffic light'], 'Prepared at home (P4-L01).'),
      q('Complete: تَضُمُّ الغَابَةُ ___ الأَنْوَاعِ.', ['آلَافَ', 'بِآلَافِ', 'لِآلَافِ'], 'P4-L01: yaḍummu + direct object.'),
      q('Complete: نَحْتَاجُ إِلَى قَوَانِينَ لِكَيْ ___ الغَابَاتِ.', ['نَحْمِيَ', 'نَحْمِي', 'سَنَحْمِي'], 'P4-L01: after li-kay, -a.'),
    ],
    keyIdea: { text: 'In the passive the doer disappears — and the thing built becomes the subject (-un).', ar: 'يَبْنِي المُهَنْدِسُونَ {w|مَشْرُوعًا} ← يُبْنَى {k|مَشْرُوعٌ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P4-L01. Questions 4–5 retrieve yaḍummu + object and li-kay + -a (P4-L01) — today li-kay sets the goal of a city plan.',
  },
  routes: {
    core: ['I can name 8 urban-planning words.', 'I can say what a building is made of (mabniyyun min).'],
    develop: ['I can use the planning verbs with their partners.', 'I can use the urban passive with a nominative subject.'],
    stretch: ['I can set a goal with li-kay + -a.', 'I can write an urban analysis.'],
  },
  bridge: [
    { ar: 'تَعْمِيرٌ · عُمْرَانِيٌّ', urdu: 'تعمیر', tr: 'taʿmīr', en: 'construction · urban' },
    { ar: 'تَجْدِيدٌ', urdu: 'تجدید', tr: 'tajdīd', en: 'renewal, renovation' },
    { ar: 'ازْدِحَامٌ', urdu: 'ازدحام', tr: 'izdihām', en: 'crowding, congestion' },
    { ar: 'تَحْوِيلٌ', urdu: 'تحویل', tr: 'tahwīl', en: 'Arabic: conversion · Urdu: custody' },
    { ar: 'مَنْصُوبٌ', urdu: 'منصوبہ', tr: 'mansūba', en: 'Arabic: subjunctive · Urdu: a plan!' },
  ],
  bridgeNotes: 'URDU BRIDGE: تعمیر، تجدید and ازدحام are shared. Two traps: Urdu تحویل = custody (تحویل میں), Arabic تَحْوِيلٌ = converting (يُحَوِّلُ إِلَى); Urdu منصوبہ = a plan, but Arabic مَنْصُوبٌ = the subjunctive (the -a verb) — a plan in Arabic is خُطَّةٌ or مَشْرُوعٌ.',
  core: ['تَخْطِيطٌ عُمْرَانِيٌّ', 'تَجْدِيدٌ حَضَرِيٌّ', 'حَيٌّ سَكَنِيٌّ', 'مَسَاحَاتٌ خَضْرَاءُ حَضَرِيَّةٌ', 'مَدِينَةٌ ذَكِيَّةٌ', 'مَبْنِيٌّ مِنْ', 'يُعِيدُ تَصْمِيمَ', 'يُجَدِّدُ', 'يُحَوِّلُ إِلَى', 'الازْدِحَامُ المُرُورِيُّ', 'يُبْنَى', 'صَالِحٌ لِلْعَيْشِ'],
  forms: {
    'حَيٌّ سَكَنِيٌّ': sp('أَحْيَاءٌ سَكَنِيَّةٌ'), 'مَسَاحَاتٌ خَضْرَاءُ حَضَرِيَّةٌ': sg('مَسَاحَةٌ خَضْرَاءُ حَضَرِيَّةٌ'), 'مَدِينَةٌ ذَكِيَّةٌ': sp('مُدُنٌ ذَكِيَّةٌ'),
    'مَبْنِيٌّ مِنْ': { tag: 'm · f', forms: [{ l: 'f. / non-human pl.', ar: 'مَبْنِيَّةٌ مِنْ' }] }, 'صَالِحٌ لِلْعَيْشِ': { tag: 'm · f', forms: [{ l: 'f.', ar: 'صَالِحَةٌ لِلْعَيْشِ' }] },
    'يَتَمَيَّزُ بِـ': hs('تَتَمَيَّزُ بِـ'), 'يُعِيدُ تَصْمِيمَ': hs('تُعِيدُ تَصْمِيمَ'), 'يُجَدِّدُ': hs('تُجَدِّدُ'), 'يُحَوِّلُ إِلَى': hs('تُحَوِّلُ إِلَى'), 'يُخَطِّطُ لِـ': hs('تُخَطِّطُ لِـ'), 'يُؤَدِّي إِلَى': hs('تُؤَدِّي إِلَى'),
    'يُبْنَى': hs('تُبْنَى'), 'يُخَطَّطُ': hs('تُخَطَّطُ'), 'يُعَادُ تَصْمِيمُهُ': { tag: 'it (m · f)', forms: [{ l: 'it (f.)', ar: 'يُعَادُ تَصْمِيمُهَا' }] }, 'يُحَوَّلُ إِلَى': hs('تُحَوَّلُ إِلَى'),
  },
  vocabNotes: {
    0: 'Urban planning: the nouns of a city report. عُمْرَانِيٌّ (from عُمْرَانٌ, built environment) and حَضَرِيٌّ (urban, from حَضَرٌ) are both used for “urban”.',
    1: 'Planning verbs and materials: learn each with its partner — مَبْنِيٌّ مِنْ · يَتَمَيَّزُ بِـ · يُعِيدُ تَصْمِيمَ / يُجَدِّدُ + object · يُحَوِّلُ … إِلَى · يُخَطِّطُ لِـ · يُؤَدِّي إِلَى.',
    2: 'The urban passive and goals: يُبْنَى · يُخَطَّطُ · يُعَادُ تَصْمِيمُهُ · يُحَوَّلُ إِلَى — the subject after them is nominative (-un). Population density is more often called الكَثَافَةُ السُّكَّانِيَّةُ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · materials and planning verbs (website rules 1–2 + vocabulary notes) · Core', title: 'Made of … and changed into …', ar: 'المَوَادُّ وَأَفْعَالُ التَّخْطِيطِ',
      cols: [{ label: 'Verb', w: 2.6, size: 20 }, { label: 'Meaning', w: 2.0 }, { label: 'Partner', w: 1.6 }, { label: 'Example (website)', w: 6.13, size: 18 }],
      rows: [
        { core: true, cells: ['{m|مَبْنِيٌّ مِنْ}', 'built from', 'min', 'نَاطِحَاتُ السَّحَابِ مَبْنِيَّةٌ {m|مِنَ} الزُّجَاجِ وَالصُّلْبِ.'] },
        { cells: ['{k|يَتَمَيَّزُ بِـ}', 'stands out for', 'bi-', 'تَتَمَيَّزُ المَدِينَةُ {k|بِمَزِيجٍ} مِنَ القَدِيمِ وَالحَدِيثِ.'] },
        { core: true, cells: ['{w|يُعِيدُ تَصْمِيمَ}', 'redesigns', 'object', 'تُعِيدُ الهَيْئَاتُ تَصْمِيمَ {w|أَحْيَاءٍ} كَامِلَةٍ.'] },
        { cells: ['{w|يُجَدِّدُ}', 'renovates', 'object', 'تُجَدِّدُ المَشَارِيعُ {w|الأَحْيَاءَ} القَدِيمَةَ.'] },
        { core: true, cells: ['{e|يُحَوِّلُ … إِلَى}', 'converts into', 'object + ilā', 'يُحَوِّلُ المَشْرُوعُ المَطَارَ القَدِيمَ {e|إِلَى} حَدِيقَةٍ.'] },
        { cells: ['{p|يُخَطِّطُ لِـ}', 'plans for', 'li-', 'يُخَطِّطُ المُهَنْدِسُونَ {p|لِمَدِينَةٍ} ذَكِيَّةٍ.'] },
      ],
      ltr: true,
      foot: 'Website mistakes 1–2: mabniyya bi-l-zujāj ✗ → min al-zujāj ✓ · yuḥawwilu l-maṭāra ḥadīqatan ✗ → ilā ḥadīqatin ✓.',
      notes: `GRAMMAR PART 1 — website rules “Materials and features” and “Planning verbs”, the vocabulary notes and mistakes 1–2. Examples from the website quiz, listening and reading.
مَبْنِيٌّ is an adjective (passive participle) — it agrees: البُرْجُ مَبْنِيٌّ · نَاطِحَاتُ السَّحَابِ مَبْنِيَّةٌ (non-human plural = feminine singular).
يُعِيدُ تَصْمِيمَ is literally “repeats the design of” — the place is in the genitive after تَصْمِيمَ: تَصْمِيمَ المِنْطَقَةِ.
Accuracy note for teachers: Dubai’s historic Al Fahidi district was built mainly from coral stone, gypsum and palm wood; the website simplifies this to “clay and wood”.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 2 · the urban passive (website rule 3 + teaching point 1) · Develop', title: 'The doer disappears', ar: 'المَبْنِيُّ لِلْمَجْهُولِ',
      cols: [{ label: 'Active', w: 2.3, size: 20 }, { label: 'Passive', w: 2.6, size: 20 }, { label: 'Example (website)', w: 7.43, size: 18 }],
      rows: [
        { core: true, cells: ['يَبْنِي', '{k|يُبْنَى}', 'يُبْنَى {k|مَشْرُوعٌ ضَخْمٌ} عَلَى أَطْرَافِ المَدِينَةِ.'] },
        { core: true, cells: ['بَنَى', '{k|بُنِيَ}', 'بُنِيَ {k|الجُزْءُ القَدِيمُ} مِنَ الطِّينِ وَالخَشَبِ.'] },
        { cells: ['يُخَطِّطُ', '{k|يُخَطَّطُ}', 'يُخَطَّطُ لِاسْتِكْمَالِ المَشْرُوعِ.'] },
        { cells: ['يُعِيدُ تَصْمِيمَ', '{k|يُعَادُ تَصْمِيمُ}', 'يُعَادُ {k|تَصْمِيمُ} الأَحْيَاءِ لِكَيْ تَكُونَ صَالِحَةً لِلْعَيْشِ.'] },
        { cells: ['يُحَوِّلُ', '{k|يُحَوَّلُ}', 'يُحَوَّلُ {k|كَثِيرٌ} مِنَ المَنَاطِقِ الصِّنَاعِيَّةِ إِلَى مَسَاحَاتٍ خَضْرَاءَ.'] },
        { cells: ['تَبْنِي (f.)', '{k|تُبْنَى}', 'وَتُبْنَى فِي المُقَابِلِ {k|مُدُنٌ ذَكِيَّةٌ} جَدِيدَةٌ.'] },
      ],
      ltr: true,
      foot: 'The new subject is nominative (-un): yubnā mashrūʿun ✓ · yubnā mashrūʿan ✗ (website quiz 3).',
      notes: `GRAMMAR PART 2 — website rule “Urban passive”, teaching point 1 and quiz 3. Examples from the website listening, reading, speaking and writing model.
The passive vowel pattern: present يُفْعَلُ (yu-…-a-) · past فُعِلَ (u-…-i-). Hollow verb: يُعِيدُ → يُعَادُ (long ā).
Row 6 — website correction: the reading has وَيُبْنَى … مُدُنٌ ذَكِيَّةٌ; a non-human plural takes a feminine verb, so وَتُبْنَى.
Row 3: يُخَطَّطُ لِـ has no subject at all (“it is planned to …”) — an impersonal passive.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · challenge, regret, goal (website rule 4 + teaching point 2 + listening) · Develop / Stretch', title: 'From problem to plan', ar: 'التَّحَدِّي · الافْتِرَاضُ · الهَدَفُ',
      cards: [
        { chip: 'TYPE 1 · CHALLENGE · CORE', color: '1D5FBF', head: 'إِذَا … سَـ', big: 'إِذَا وَاصَلَتِ المُدُنُ التَّوَسُّعَ دُونَ تَخْطِيطٍ، سَتُعَانِي مِنْ تَلَوُّثٍ ضَوْضَائِيٍّ.', en: 'If cities keep expanding without planning, they will suffer noise pollution.', clue: 'A real risk.' },
        { chip: 'TYPE 2 · REGRET · DEVELOP', color: 'C0386B', head: 'لَوْ … لَـ', big: 'لَوْ كَانَ التَّخْطِيطُ أَكْثَرَ اسْتِدَامَةً، لَكَانَتِ المُدُنُ أَقَلَّ اكْتِظَاظًا.', en: 'Had planning been more sustainable, cities would be less crowded.', clue: 'It did not happen.' },
        { chip: 'GOAL · STRETCH', color: '1E6B52', head: 'لِكَيْ تَكُونَ', big: 'يُخَطِّطُ المُهَنْدِسُونَ لِكَيْ تَكُونَ المُدُنُ صَالِحَةً لِلْعَيْشِ.', en: 'Engineers plan so that cities become liveable.', clue: 'takūnu → takūna.' },
      ],
      error: { text: 'Website mistake 3: after li-kay the verb ends in -a.', pairs: [['لِكَيْ تَكُونَ المَدِينَةُ صَالِحَةً', 'لِكَيْ تَكُونُ المَدِينَةُ صَالِحَةً']] },
      notes: `GRAMMAR PART 3 — website rule “Goal clause”, teaching point 2 and the listening (cards 1–2).
تَكُونَ is a hollow verb: تَكُونُ → تَكُونَ (the long ū stays). After li-kay تَكُونَ is followed by its predicate in the accusative: صَالِحَةً · أَكْثَرَ اسْتِدَامَةً.
Card 1: دُونَ = without (+ noun); دُونَ أَنْ + a verb in -a (website reading: دُونَ أَنْ تَمْحُوَ).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the language of urban analysis (website reading and writing model) · Stretch', title: 'Old and new, side by side', ar: 'لُغَةُ التَّحْلِيلِ العُمْرَانِيِّ',
      cols: [{ label: 'Tool', w: 2.4 }, { label: 'Example (website texts)', w: 7.4, size: 18 }, { label: 'Effect', w: 2.53 }],
      rows: [
        { core: true, cells: ['whereas', 'بُنِيَ الجُزْءُ القَدِيمُ مِنَ الطِّينِ، {p|فِي حِينِ أَنَّ} نَاطِحَاتِ السَّحَابِ مَبْنِيَّةٌ مِنَ الزُّجَاجِ.', 'contrast'] },
        { cells: ['a challenge between', 'تُوَاجِهُ المُدُنُ تَحَدِّيًا {m|بَيْنَ} الحِفَاظِ عَلَى تُرَاثِهَا {m|وَ}بِنَاءِ مُسْتَقْبَلِهَا.', 'balance'] },
        { cells: ['without -ing', 'تُعِيدُ تَصْمِيمَهَا {e|دُونَ أَنْ تَمْحُوَ} طَابِعَهَا.', 'an + -a (ū → uwa)'] },
        { cells: ['on the other hand', '{p|وَفِي المُقَابِلِ}، تُبْنَى مُدُنٌ ذَكِيَّةٌ عَلَى أَحْدَثِ المَعَايِيرِ.', 'contrast'] },
        { core: true, cells: ['experts say', '{w|يُشِيرُ الخُبَرَاءُ إِلَى أَنَّ} المُدُنَ تَحْتَاجُ إِلَى مَسَاحَاتٍ خَضْرَاءَ.', 'evidence'] },
      ],
      ltr: true,
      foot: 'An urban analysis weighs the old against the new, then closes with experts and a goal.',
      notes: `GRAMMAR PART 4 — register tools from the website reading and writing model.
Row 1: فِي حِينِ أَنَّ + an accusative noun — نَاطِحَاتِ ends in -i because a sound feminine plural takes -i in the accusative.
Row 3: يَمْحُو (to erase) → أَنْ تَمْحُوَ — weak verbs in -ū add -a: تَمْحُوَ · تَدْعُوَ.
Stretch: write one sentence comparing the old and new parts of a city you know with فِي حِينِ أَنَّ.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me analyse a city',
    steps: [
      { head: 'Materials', ar: '{m|بُنِيَ} … مِنَ · {m|مَبْنِيَّةٌ مِنَ} …', think: 'min!' },
      { head: 'Change', ar: '{w|تُعِيدُ تَصْمِيمَ} … {w|يُحَوَّلُ} … إِلَى', think: 'Passive: -un.' },
      { head: 'Risk + regret', ar: '{e|إِذَا} … سَـ · {p|لَوْ} … لَـ', think: 'Both types.' },
      { head: 'Goal', ar: '{k|لِكَيْ تَبْقَى} صَالِحَةً', think: '-a.' },
    ],
    legend: ['m', 'w', 'e', 'p', 'k'], legendLabels: { m: 'MATERIALS', w: 'PLANNING · PASSIVE', e: 'TYPE 1', p: 'TYPE 2', k: 'GOAL' },
    model: '{m|بُنِيَ} الجُزْءُ القَدِيمُ مِنْ دُبَيَّ {m|مِنَ} الطِّينِ، فِي حِينِ أَنَّ نَاطِحَاتِ السَّحَابِ {m|مَبْنِيَّةٌ مِنَ} الزُّجَاجِ. {w|تُعِيدُ} الهَيْئَاتُ {w|تَصْمِيمَ} أَحْيَاءٍ كَامِلَةٍ، {w|وَيُحَوَّلُ} كَثِيرٌ مِنَ المَنَاطِقِ الصِّنَاعِيَّةِ إِلَى مَسَاحَاتٍ خَضْرَاءَ. {e|إِذَا} تَوَسَّعَتِ المُدُنُ، {e|سَتُعَانِي} مِنَ الازْدِحَامِ. {p|وَلَوْ} كَانَ التَّخْطِيطُ أَكْثَرَ اسْتِدَامَةً، {p|لَكَانَتِ} المُدُنُ أَقَلَّ اكْتِظَاظًا. لِذٰلِكَ تَحْتَاجُ المُدُنُ إِلَى مَسَاحَاتٍ خَضْرَاءَ {k|لِكَيْ تَبْقَى} صَالِحَةً لِلْعَيْشِ.',
    modelEn: 'In Dubai, the old part was built from clay and wood, whereas the skyscrapers are built from glass. Authorities are redesigning whole districts, and many industrial areas are being converted into green spaces. If cities expand, they will suffer from congestion. Had planning been more sustainable, cities would be less crowded. So cities need green spaces so that they remain liveable.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Materials: buniya … MIN, mabniyyatun MIN. Change: tuʿīdu taṣmīma + object; the passive yuḥawwalu — the subject kathīrun is -UN. A risk: idhā … SA-. A regret: law … LA-. The goal: li-kay tabqā — a verb in -ā shows no change.”',
  },
  patternEn: ['the old part was built from clay, and the skyscrapers are built from glass', 'the AlUla project converts historic sites into tourist destinations', 'they plan so that the capital becomes more sustainable'],
  gameKey: 'P4-L02',
  game: {
    title: 'The city: match the picture',
    pick: [1, 2, 5],
    en: ['The city needs green spaces.', 'Public transport is important in cities.', 'A healthy city encourages walking and cycling.'],
    icons: [[['fa6', 'FaTreeCity', '1E6B52']], [['fa6', 'FaBus', 'C77700'], ['fa6', 'FaTrainSubway', '1D5FBF']], [['fa6', 'FaPersonWalking', 'C0386B'], ['fa6', 'FaBicycle', '1E6B52']]],
    labels: ['green spaces', 'public transport', 'walking and cycling'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6; card 4 not used). Then turn each into a goal with li-kay: نُنْشِئُ حَدَائِقَ لِكَيْ تَكُونَ المَدِينَةُ أَجْمَلَ · نُطَوِّرُ النَّقْلَ العَامَّ لِكَيْ يَقِلَّ الازْدِحَامُ · نَبْنِي مَمَرَّاتٍ لِكَيْ يَمْشِيَ النَّاسُ أَكْثَرَ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build an urban analysis (website live builder)', title: 'Material + planning + goal', ar: 'ابْنِ تَحْلِيلًا عُمْرَانِيًّا',
      cols: [{ label: '1 · Material / feature', w: 4.0, size: 16 }, { label: '2 · Planning action', w: 4.1, size: 16 }, { label: '3 · Goal / condition', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then find the passive verbs: is the noun after them -un?',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: find the two passives in column 2 (يُحَوَّلُ · يُبْنَى) and their nominative subjects (كَثِيرٌ · مَشْرُوعٌ). Stretch: column 3 row 3 uses a passive in the condition (إِذَا خُطِّطَ) — write your own: إِذَا بُنِيَتْ … سَـ …`,
    },
  ],
  sorterTitle: 'Material / feature, planning verb — or passive / goal?',
  sorterNotes: 'Then join one card from each column: … مَبْنِيٌّ مِنْ … ، وَيُعِيدُ المَشْرُوعُ تَصْمِيمَهُ لِكَيْ … .',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('مَبْنِيٌّ مِنْ names the material.', 'mabniyyun min names the material.').replace('يُحَوِّلُ … إِلَى.', 'yuḥawwilu … ilā.').replace('لِكَيْ + subjunctive تَكُونَ.', 'li-kay + a verb in -a (takūna).') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; agreement fix in the reading (وَتُبْنَى … مُدُنٌ); rule headings and formulas in English and transliteration; game card 4 not used (its waṣl alif carries a kasra); the verb, passive and analysis tables are teacher-built from the website texts. All other website items are used as published.',
  hints: ['mabniyya bi-?', 'yuḥawwilu … no ilā?', 'yubnā mashrūʿan?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: tatamayyazu bi- · buniya … min · tuḥawwilu … ilā.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down one passive verb you hear.',
  gloss: [
    ['تَتَمَيَّزُ مَدِينَةُ دُبَيَّ بِمَزِيجٍ فَرِيدٍ مِنَ العِمَارَةِ التُّرَاثِيَّةِ وَالمِعْمَارِ الحَدِيثِ. بُنِيَ الجُزْءُ القَدِيمُ مِنَ الطِّينِ وَالخَشَبِ، فِي حِينِ أَنَّ نَاطِحَاتِ السَّحَابِ مَبْنِيَّةٌ مِنَ الزُّجَاجِ وَالصُّلْبِ.', 'Dubai stands out for a unique mix of heritage and modern architecture. The old part was built from clay and wood, whereas the skyscrapers are built from glass and steel.'],
    ['تُعِيدُ هَيْئَاتُ التَّطْوِيرِ تَصْمِيمَ أَحْيَاءٍ كَامِلَةٍ، وَتُحَوِّلُ مَنَاطِقَ صِنَاعِيَّةً قَدِيمَةً إِلَى مَسَاحَاتٍ خَضْرَاءَ.', 'Development authorities are redesigning whole districts and converting old industrial areas into green spaces.'],
    ['غَيْرَ أَنَّ التَّوَسُّعَ السَّرِيعَ يُؤَدِّي إِلَى ازْدِحَامٍ مُرُورِيٍّ. إِذَا وَاصَلَتِ المُدُنُ التَّوَسُّعَ دُونَ تَخْطِيطٍ، سَتُعَانِي مِنْ تَلَوُّثٍ ضَوْضَائِيٍّ.', 'However, rapid expansion leads to traffic congestion. If cities keep expanding without planning, they will suffer from noise pollution.'],
    ['وَلَوْ كَانَ التَّخْطِيطُ أَكْثَرَ اسْتِدَامَةً مُنْذُ البِدَايَةِ، لَكَانَتِ المُدُنُ أَقَلَّ اكْتِظَاظًا.', 'Had planning been more sustainable from the start, cities would be less crowded.'],
    ['لِذٰلِكَ يُخَطِّطُ المُهَنْدِسُونَ لِكَيْ تَكُونَ المُدُنُ صَالِحَةً لِلْعَيْشِ.', 'So engineers plan so that cities become liveable.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ مَدِينَةً مُسْتَعْمِلًا «مَبْنِيٌّ مِنْ» وَ«يَتَمَيَّزُ بِـ».' },
      { route: 'develop', ar: 'مَا الَّذِي يُجَدَّدُ أَوْ يُعَادُ تَصْمِيمُهُ فِيهَا؟' },
      { route: 'stretch', ar: 'مَا الهَدَفُ العُمْرَانِيُّ؟ اسْتَعْمِلْ «لِكَيْ» + مَنْصُوبًا.' },
    ],
    stems: [
      { route: 'core', ar: 'تَتَمَيَّزُ ______ بِمَزِيجٍ مِنْ ______ ، وَأَحْيَاؤُهَا القَدِيمَةُ مَبْنِيَّةٌ مِنَ ______ .' },
      { route: 'develop', ar: 'يُعَادُ تَصْمِيمُ ______ ، وَيُحَوَّلُ ______ إِلَى ______ .' },
      { route: 'stretch', ar: 'يُخَطِّطُ المُهَنْدِسُونَ لِكَيْ تَكُونَ المَدِينَةُ ______ .' },
    ],
    modelEn: ['Describe a city.', 'The city stands out for a mix of old and new, and its old districts are built of stone.', 'And what is the urban goal?', 'The districts are being redesigned so that they become liveable — and had they cared about greenery early, they would be more beautiful.'],
    notes: 'Website prompts and model. Pair task: “city planner” — each student presents one change to their own town (passive + li-kay), the partner asks: لِمَاذَا؟ To a girl: صِفِي · مُسْتَعْمِلَةً · اسْتَعْمِلِي. Core stem: … بِمَزِيجٍ مِنَ القَدِيمِ وَالحَدِيثِ.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Website Core: five urban sentences with mabniyyun min and the planning verbs.' },
    develop: { amount: '60–80 words', how: 'Website Develop: add an urban passive and a Type 1 challenge.' },
    stretch: { amount: '100–110 words', how: 'Website task: analyse a city or project with mabniyyun min, a planning verb, the passive, both conditionals and a li-kay goal.' },
  },
  frames: {
    core: [
      { en: '… stands out for a mix of …', ar: 'تَتَمَيَّزُ مَدِينَةُ ______ بِمَزِيجٍ مِنْ ______ .' },
      { en: 'The old part is built from …', ar: 'الجُزْءُ القَدِيمُ مَبْنِيٌّ مِنَ ______ .' },
      { en: 'whereas the new buildings are built from …', ar: 'فِي حِينِ أَنَّ المَبَانِيَ الجَدِيدَةَ مَبْنِيَّةٌ مِنَ ______ .' },
      { en: 'The project converts … into …', ar: 'يُحَوِّلُ المَشْرُوعُ ______ إِلَى ______ .' },
    ],
    develop: [
      { en: '… is being built on the edge of the city.', ar: 'يُبْنَى ______ عَلَى أَطْرَافِ المَدِينَةِ.' },
      { en: 'If cities keep expanding without planning, …', ar: 'إِذَا وَاصَلَتِ المُدُنُ التَّوَسُّعَ دُونَ تَخْطِيطٍ، سَتُعَانِي مِنْ ______ .' },
      { en: 'Had planning been more sustainable, …', ar: 'لَوْ كَانَ التَّخْطِيطُ أَكْثَرَ اسْتِدَامَةً، لَكَانَتِ المُدُنُ ______ .' },
      { en: 'Cities need … so that they remain liveable.', ar: 'تَحْتَاجُ المُدُنُ إِلَى ______ لِكَيْ تَبْقَى صَالِحَةً لِلْعَيْشِ.' },
    ],
    bank: ['الحَجَرِ', 'الطِّينِ وَالخَشَبِ', 'الزُّجَاجِ وَالصُّلْبِ', 'بِمَزِيجٍ مِنَ القَدِيمِ وَالحَدِيثِ', 'المَطَارَ القَدِيمَ', 'حَدِيقَةٍ عَامَّةٍ', 'مَسَاحَاتٍ خَضْرَاءَ', 'مَشْرُوعٌ ضَخْمٌ', 'الازْدِحَامِ المُرُورِيِّ', 'التَّلَوُّثِ الضَّوْضَائِيِّ', 'أَقَلَّ اكْتِظَاظًا', 'مَدِينَةٌ ذَكِيَّةٌ'],
  },
  stretch: [
    ['بِمَزِيجٍ فَرِيدٍ مِنَ العِمَارَةِ التُّرَاثِيَّةِ وَالمِعْمَارِ الحَدِيثِ', 'with a unique mix of heritage and modern architecture'],
    ['فِي حِينِ أَنَّ نَاطِحَاتِ السَّحَابِ مَبْنِيَّةٌ مِنَ الزُّجَاجِ وَالصُّلْبِ', 'whereas the skyscrapers are built from glass and steel'],
    ['وَيُحَوَّلُ كَثِيرٌ مِنَ المَنَاطِقِ الصِّنَاعِيَّةِ إِلَى مَسَاحَاتٍ خَضْرَاءَ', 'and many industrial areas are being converted into green spaces'],
    ['سَتُعَانِي مِنِ ازْدِحَامٍ مُرُورِيٍّ وَتَلَوُّثٍ ضَوْضَائِيٍّ', 'they will suffer from traffic congestion and noise pollution'],
    ['لِكَيْ تَبْقَى صَالِحَةً لِلْعَيْشِ', 'so that they remain liveable'],
  ],
  modelEn: 'In Dubai, the old part was built from clay and wood, whereas the skyscrapers are built from glass and steel. Development authorities are redesigning whole districts, and many industrial areas are being converted into green spaces. If cities keep expanding without enough planning, they will suffer from traffic congestion and noise pollution. Had planning been more sustainable from the start, cities would be less crowded today. So planning experts point out that cities need green spaces so that they remain liveable.',
  find: ['buniya … min · mabniyyatun min', 'tuʿīdu taṣmīm · yuḥawwalu … ilā (passive)', 'a Type 1 and a Type 2', 'li-kay tabqā + yushīr … ilā anna'],
  modelNotes: 'Website writing model. Evidence: تَتَمَيَّزُ … بِمَزِيجٍ · بُنِيَ … مِنَ · مَبْنِيَّةٌ مِنَ · تُعِيدُ … تَصْمِيمَ · وَيُحَوَّلُ كَثِيرٌ … إِلَى · إِذَا وَاصَلَتِ … سَتُعَانِي · لَوْ كَانَ … لَكَانَتِ · يُشِيرُ … إِلَى أَنَّ · لِكَيْ تَبْقَى.',
  selfCheck: [
    { route: 'core', text: 'mabniyyun takes min; it agrees (mabniyyatun for a feminine / non-human plural).' },
    { route: 'core', text: 'yuḥawwilu has ilā; yuʿīdu taṣmīm and yujaddidu take an object.' },
    { route: 'develop', text: 'After a passive verb, the subject is nominative (-un).' },
    { route: 'develop', text: 'I have a Type 1 challenge and a Type 2 regret.' },
    { route: 'stretch', text: 'My goal uses li-kay + a verb in -a (takūna · tabqā).' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تُوَاجِهُ', 'faces'], ['تَحَدِّيًا', 'a challenge'], ['الحِفَاظِ عَلَى', 'preserving'], ['ذَاكِرَةَ أَجْيَالٍ', 'the memory of generations'], ['تَمْحُوَ', '(to) erase'],
    ['طَابِعَهَا', 'its character'], ['فِي المُقَابِلِ', 'on the other hand'], ['المَعَايِيرِ', 'standards'], ['هُوِيَّتَهَا', 'its identity'], ['تُوَاكِبُ العَصْرَ', 'keeps up with the times'],
  ],
  prep: {
    words: [['تَغَيُّرُ المَنَاخِ', 'climate change', '—'], ['شُحُّ المِيَاهِ', 'water scarcity', '—'], ['التَّصَحُّرُ', 'desertification', '—'], ['يَخْشَى أَنْ', 'he fears that', '+ verb in -a'], ['الطَّاقَةُ الشَّمْسِيَّةُ', 'solar energy', '—']],
    questionEn: 'How is climate change affecting the Arab world — and what do you fear most?',
    questionAr: 'أَخْشَى أَنْ ______ إِذَا لَمْ ______ .',
    homework: {
      core: 'Write five urban sentences with mabniyyun min and the planning verbs.',
      develop: 'Add a passive (yubnā / yuḥawwalu + -un) and a Type 1 challenge (60–80 words).',
      stretch: 'Website writing task: a 100–110-word analysis of a city or urban project ending with li-kay.',
    },
    wordsSource: 'The five words come from the website P4-L03 vocabulary (climate change).',
  },
  remember: 'Remember: mabniyyun MIN · yuḥawwilu … ILĀ · yuʿīdu taṣmīma + object — after a passive verb the subject is -UN (yubnā mashrūʿun) — and the goal is li-kay + a verb in -a (takūna).',
});

module.exports = { meta, slides };
