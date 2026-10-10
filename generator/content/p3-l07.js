'use strict';
/* P3-L07 · Cultural Sensitivity in Travel — Being a Respectful Visitor — website: Pathways › Progression › P3 › P3-L07 (modal advice يُسْتَحْسَنُ أَنْ /
 * يَجِبُ أَنْ + the subjunctive, including weak verbs such as يَرْتَدِيَ / تُغَطِّيَ; rules with يَحْظُرُ + object and يَسْمَحُ بِـ; a Type 1 scenario, a reported
 * tip and a Type 2 reflection). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder, mission and visual
 * game used as published, with waṣl alif shown without a kasra. Game card 1 (اِحْتِرَامُ with a waṣl kasra) not used. English added to the patterns;
 * sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P3')({
  n: 7, fileTitle: 'Cultural_Sensitivity_in_Travel', chip: 'Culture',
  title: 'Cultural Sensitivity in Travel — Being a Respectful Visitor', arabic: 'الحَسَاسِيَّةُ الثَّقَافِيَّةُ فِي السَّفَرِ — كَيْفَ تَكُونُ زَائِرًا مُحْتَرَمًا',
  focus: 'Advise a visitor politely: yustaḥsan an and yajib an + a verb in -a (an yartadiya), rules with yaḥẓur + object and yasmaḥ bi-, a Type 1 scenario and a Type 2 reflection.',
  icon: 'FaHandshake', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const sg = (s) => ({ tag: 'sg · pl', forms: [{ l: 'sg.', ar: s }] });
const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const hy = (you) => ({ tag: 'he · you', forms: [{ l: 'you (m.)', ar: you }] });
const site = D.waslFix(D.site('P3-L07'));
const RH = [['yustaḥsan an + subjunctive', 'yustaḥsan an + verb in -a'], ['yajib an + subjunctive', 'yajib an + verb in -a'], ['Rules: yaḥẓur / yasmaḥ bi-', 'yaḥẓur + object · yasmaḥ bi-'], ['Advice scenario and reflection', 'idhā … yustaḥsan an · law … la-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P3-L07', {
  support: `• Core: four advice sentences with yustaḥsan an and yajib an (website Core). Develop: add a yaḥẓur rule and a yasmaḥ bi- permission. Stretch: a full 100–110-word cultural guide with a reported tip and a Type 2 reflection.
• Our students are often the experts here: many know mosque etiquette, Ramadan courtesy and hospitality customs from home. Invite them to advise “a visitor to our community” — it builds pride and confidence.
• Mosque etiquette in the texts: taking off shoes is for everyone; covering the head (تُغَطِّيَ رَأْسَكِ) is expected of women visitors. Clarify gently if asked.
• Grammar link: the subjunctive after an was introduced in P3-L06 (qarrartu an aljaʾa). Today adds yustaḥsan an and weak verbs: يَرْتَدِي → أَنْ يَرْتَدِيَ.`,
  teach: 'Four modals, the subjunctive with weak verbs, rules with yaḥẓur / yasmaḥ bi-, guide register.',
  wedo: 'Match cultural pictures, build a cultural guide, sort advice / prohibition / permission.',
  next: { nextCode: 'P3-L08', nextTitle: 'Reading — Travel and Tourism Texts', nextAr: 'القِرَاءَةُ — نُصُوصُ السَّفَرِ وَالسِّيَاحَةِ' },
  objectives: ['Use cultural-sensitivity vocabulary.', 'Give polite advice with yustaḥsan an + a verb in -a.', 'State rules with yaḥẓur + object and yasmaḥ bi-.', 'Write a cultural guide for visitors.'],
  rulesAr: 'صِيَغُ النُّصْحِ وَالفِعْلُ المَنْصُوبُ بَعْدَ أَنْ',
  ruleEx: [['يُسْتَحْسَنُ أَنْ يَتَعَلَّمَ الزَّائِرُ تَحِيَّةً عَرَبِيَّةً', 'يُسْتَحْسَنُ أَنْ يَرْتَدِيَ مَلَابِسَ مُحْتَشِمَةً'], ['إِذَا زُرْتَ مَسْجِدًا، يَجِبُ أَنْ تَخْلَعَ حِذَاءَكَ'], ['يَحْظُرُ القَانُونُ التَّصْوِيرَ هُنَا', 'يَسْمَحُ المَتْحَفُ بِالتَّصْوِيرِ'], ['إِذَا دُعِيتَ إِلَى مَنْزِلٍ، يُسْتَحْسَنُ أَنْ تُحْضِرَ هَدِيَّةً', 'لَوْ تَعَلَّمْتُ العَرَبِيَّةَ قَبْلَ الرِّحْلَةِ، لَكَانَتِ التَّجْرِبَةُ أَعْمَقَ']],
  doNow: {
    questions: [
      q('What does حَسَاسِيَّةٌ ثَقَافِيَّةٌ mean?', ['cultural sensitivity', 'cultural heritage', 'a cultural festival'], 'Prepared at home (P3-L06).'),
      q('What does قَوَاعِدُ اللِّبَاسِ mean?', ['the dress code', 'the house rules', 'the clothes shop'], 'Prepared at home (P3-L06).'),
      q('What does يُسْتَحْسَنُ أَنْ mean?', ['it is preferable that', 'it is forbidden that', 'it is possible that'], 'Prepared at home (P3-L06).'),
      q('Complete: قَرَّرْتُ أَنْ ___ إِلَى السَّفَارَةِ.', ['أَلْجَأَ', 'أَلْجَأُ', 'لَجَأْتُ'], 'P3-L06: after an, the verb ends in -a.'),
      q('Complete: يُبَلِّغُ المُسَافِرُ ___ سَرِقَةِ حَقِيبَتِهِ.', ['عَنْ', 'بِـ', 'إِلَى'], 'P3-L06: yuballigh is fixed with ʿan.'),
    ],
    keyIdea: { text: 'Polite advice: yustaḥsan an + a verb in -a. Rules: yaḥẓur + object · yasmaḥ bi-.', ar: 'يُسْتَحْسَنُ أَنْ {k|يَتَعَلَّمَ} · يَحْظُرُ {w|التَّصْوِيرَ} · يَسْمَحُ {m|بِالتَّصْوِيرِ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P3-L06. Questions 4–5 retrieve the subjunctive after an and yuballigh ʿan (P3-L06) — today the subjunctive becomes polite advice.',
  },
  routes: {
    core: ['I can name 8 cultural-sensitivity words.', 'I can advise with yustaḥsan an + a verb in -a.'],
    develop: ['I can state a rule with yaḥẓur and yasmaḥ bi-.', 'I can use weak verbs after an (yartadiya).'],
    stretch: ['I can add a reported tip and a Type 2 reflection.', 'I can write a cultural guide.'],
  },
  bridge: [
    { ar: 'احْتِرَامٌ', urdu: 'احترام', tr: 'ehtirām', en: 'respect' },
    { ar: 'ثَقَافَةٌ', urdu: 'ثقافت', tr: 'saqāfat', en: 'culture' },
    { ar: 'لِبَاسٌ', urdu: 'لباس', tr: 'libās', en: 'clothing, dress' },
    { ar: 'عَادَاتٌ', urdu: 'عادت · عادات', tr: 'ādat', en: 'a habit · customs' },
    { ar: 'تَقَالِيدُ', urdu: 'تقلید', tr: 'taqlīd', en: 'false friend! Urdu = imitation' },
  ],
  bridgeNotes: 'URDU BRIDGE: احترام، ثقافت، لباس and عادت are shared. Careful with تقلید: in Urdu (and in fiqh) it means following / imitating; Arabic تَقَالِيدُ (sg. تَقْلِيدٌ) means traditions, customs.',
  core: ['حَسَاسِيَّةٌ ثَقَافِيَّةٌ', 'تَقَالِيدُ مَحَلِّيَّةٌ', 'قَوَاعِدُ اللِّبَاسِ', 'احْتِرَامُ المُقَدَّسَاتِ', 'زَلَّةٌ ثَقَافِيَّةٌ', 'مُجْتَمَعٌ مُضِيفٌ', 'يُسْتَحْسَنُ أَنْ', 'يَجِبُ أَنْ', 'يَحْظُرُ', 'يَسْمَحُ بِـ', 'مَلَابِسُ مُحْتَشِمَةٌ', 'تَحِيَّةٌ مُنَاسِبَةٌ'],
  forms: {
    'تَقَالِيدُ مَحَلِّيَّةٌ': sg('تَقْلِيدٌ مَحَلِّيٌّ'), 'زَلَّةٌ ثَقَافِيَّةٌ': sp('زَلَّاتٌ ثَقَافِيَّةٌ'), 'مُجْتَمَعٌ مُضِيفٌ': sp('مُجْتَمَعَاتٌ مُضِيفَةٌ'), 'جِسْرٌ ثَقَافِيٌّ': sp('جُسُورٌ ثَقَافِيَّةٌ'),
    'تَحِيَّةٌ مُنَاسِبَةٌ': sp('تَحِيَّاتٌ مُنَاسِبَةٌ'), 'بَادِرَةُ احْتِرَامٍ': sp('بَوَادِرُ احْتِرَامٍ'), 'مَلَابِسُ مُحْتَشِمَةٌ': { tag: 'pl.', forms: [{ l: 'sg. (garment)', ar: 'مَلْبَسٌ' }] },
    'يَحْظُرُ': hs('تَحْظُرُ'), 'يَسْمَحُ بِـ': hs('تَسْمَحُ بِـ'), 'يُفْضِي إِلَى': hs('تُفْضِي إِلَى'),
    'يُسْتَحْسَنُ أَنْ يَتَعَلَّمَ': hy('يُسْتَحْسَنُ أَنْ تَتَعَلَّمَ'), 'يُسْتَحْسَنُ أَنْ يَحْتَرِمَ': hy('يُسْتَحْسَنُ أَنْ تَحْتَرِمَ'), 'يُسْتَحْسَنُ أَنْ يَرْتَدِيَ': hy('يُسْتَحْسَنُ أَنْ تَرْتَدِيَ'),
  },
  vocabNotes: {
    0: 'Cultural sensitivity: the nouns of a visitor’s guide. احْتِرَامُ المُقَدَّسَاتِ = respect for sacred places (mosques, shrines, holy sites); زَلَّةٌ ثَقَافِيَّةٌ = a cultural slip, a faux pas.',
    1: 'Modal advice verbs: يُسْتَحْسَنُ أَنْ (polite) and يَجِبُ أَنْ (strong) + a verb in -a. Rules: يَحْظُرُ + object (prohibits), يَسْمَحُ بِـ (permits), يُفْضِي إِلَى (leads to).',
    2: 'The subjunctive after أَنْ: the verb ends in -a, even weak verbs — يَرْتَدِي → أَنْ يَرْتَدِيَ. Change the person to speak to the visitor: أَنْ تَتَعَلَّمَ (you).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · four ways to guide a visitor (website rules 1–3 + table) · Core', title: 'Advise, require, forbid, allow', ar: 'النُّصْحُ · الوُجُوبُ · الحَظْرُ · السَّمَاحُ',
      cols: [{ label: 'Verb', w: 2.4, size: 20 }, { label: 'Force', w: 1.9 }, { label: 'What follows', w: 2.0 }, { label: 'Example (website)', w: 6.03, size: 19 }],
      rows: [
        { core: true, cells: ['{k|يُسْتَحْسَنُ أَنْ}', 'polite advice', 'verb in -a', 'يُسْتَحْسَنُ أَنْ {k|يَتَعَلَّمَ} الزَّائِرُ تَحِيَّةً عَرَبِيَّةً.'] },
        { core: true, cells: ['{k|يَجِبُ أَنْ}', 'obligation', 'verb in -a', 'يَجِبُ أَنْ {k|تَخْلَعَ} حِذَاءَكَ.'] },
        { cells: ['{w|يَحْظُرُ}', 'prohibition', 'direct object', 'يَحْظُرُ القَانُونُ {w|التَّصْوِيرَ} هُنَا.'] },
        { cells: ['{m|يَسْمَحُ بِـ}', 'permission', 'bi- + noun', 'يَسْمَحُ المَتْحَفُ {m|بِالتَّصْوِيرِ} دُونَ فَلَاشٍ.'] },
      ],
      ltr: true,
      foot: 'Website mistakes 2–3: yaḥẓur bi-l-taṣwīr ✗ → yaḥẓur al-taṣwīra ✓ · yasmaḥ al-taṣwīra ✗ → yasmaḥ bi-l-taṣwīr ✓.',
      notes: `GRAMMAR PART 1 — website rules 1–3, teaching points 1–2 and the website table.
يُسْتَحْسَنُ is passive (“it is considered good”) — so it never changes: يُسْتَحْسَنُ أَنْ يَتَعَلَّمَ / أَنْ تَتَعَلَّمِي / أَنْ نَتَعَلَّمَ.
Softer → stronger: يُسْتَحْسَنُ أَنْ (it is preferable) → يَنْبَغِي أَنْ (one should, P3-L05 game) → يَجِبُ أَنْ (you must).
Islamic link for students who want it: مَكْرُوهٌ / مُسْتَحَبٌّ / وَاجِبٌ / حَرَامٌ share the same idea of graded advice.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 2 · the subjunctive with sound and weak verbs (website quiz, vocabulary and texts) · Develop', title: 'After an: -u becomes -a', ar: 'المُضَارِعُ المَنْصُوبُ',
      cols: [{ label: 'Normal', w: 2.2, size: 20 }, { label: 'After an', w: 2.4, size: 20 }, { label: 'Note', w: 1.9 }, { label: 'Example (website texts)', w: 5.83, size: 18 }],
      rows: [
        { core: true, cells: ['يَتَعَلَّمُ', '{k|يَتَعَلَّمَ}', 'sound', 'يُسْتَحْسَنُ أَنْ {k|يَتَعَلَّمَ} الزَّائِرُ بَعْضَ العِبَارَاتِ.'] },
        { core: true, cells: ['تَخْلَعُ', '{k|تَخْلَعَ}', 'sound · you', 'يَجِبُ أَنْ {k|تَخْلَعَ} حِذَاءَكَ.'] },
        { cells: ['يَرْتَدِي', '{k|يَرْتَدِيَ}', 'weak: -ī → -iya', 'يُسْتَحْسَنُ أَنْ {k|يَرْتَدِيَ} مَلَابِسَ مُحْتَشِمَةً.'] },
        { cells: ['تُغَطِّي', '{k|تُغَطِّيَ}', 'weak: -ī → -iya', 'يَجِبُ أَنْ تَخْلَعَ حِذَاءَكَ {k|وَتُغَطِّيَ} رَأْسَكِ.'] },
        { cells: ['يَتَجَنَّبُ', '{k|يَتَجَنَّبَ}', 'sound', 'يُسْتَحْسَنُ أَنْ {k|يَتَجَنَّبَ} الأَكْلَ عَلَنًا فِي رَمَضَانَ.'] },
      ],
      ltr: true,
      foot: 'Website mistake 1: an yataʿallamu ✗ → an yataʿallama ✓. Weak verbs in -ī keep the yāʾ and add -a: yartadiya.',
      notes: `GRAMMAR PART 2 — website quiz questions 1–3, vocabulary group 3 (يَتَعَلَّمَ · يَحْتَرِمَ · يَرْتَدِيَ) and the listening and reading texts.
Weak verbs: ending in ـِي (يَرْتَدِي · يُغَطِّي · يَمْشِي) → add fatḥa: يَرْتَدِيَ. Ending in ـُو (يَدْعُو) → يَدْعُوَ. Ending in ـَى (يَسْعَى · يَنْسَى) → no visible change.
Row 4: a second verb joined with وَ is also subjunctive (أَنْ تَخْلَعَ … وَتُغَطِّيَ). To a woman: رَأْسَكِ (the website says رَأْسَكَ, addressing “you” in general).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · rules on signs and in guides (website rule 3 + teaching point 2) · Develop', title: 'Read the sign', ar: 'لُغَةُ اللَّافِتَاتِ وَالقَوَاعِدِ',
      cards: [
        { chip: 'PROHIBITS · CORE', color: 'C0386B', head: 'يَحْظُرُ + object', big: 'يَحْظُرُ بَعْضُ المَوَاقِعِ التَّصْوِيرَ.', en: 'Some sites prohibit photography.', clue: 'No preposition.' },
        { chip: 'PERMITS · CORE', color: '1E6B52', head: 'يَسْمَحُ بِـ', big: 'تَسْمَحُ مَوَاقِعُ أُخْرَى بِالتَّصْوِيرِ.', en: 'Other sites permit photography.', clue: 'Always bi-.' },
        { chip: 'LEADS TO · STRETCH', color: '1D5FBF', head: 'يُفْضِي إِلَى', big: 'الاحْتِرَامُ يُفْضِي إِلَى التَّفَاهُمِ.', en: 'Respect leads to understanding.', clue: 'Always ilā.' },
      ],
      error: { text: 'Website mistake 2: yaḥẓur takes a direct object.', pairs: [['يَحْظُرُ القَانُونُ التَّصْوِيرَ', 'يَحْظُرُ القَانُونُ بِالتَّصْوِيرِ']] },
      notes: `GRAMMAR PART 3 — website rule “Rules: يَحْظُرُ / يَسْمَحُ بِـ”, teaching point 2 and mistakes 2–3. Card 3 uses the website vocabulary item يُفْضِي إِلَى.
On real signs you will see the noun forms: مَمْنُوعٌ التَّصْوِيرُ / يُمْنَعُ التَّصْوِيرُ (photography forbidden) · يُسْمَحُ بِالتَّصْوِيرِ (photography allowed). Note: with يَسْمَحُ, the thing permitted takes بِـ and the person takes لِـ: يَسْمَحُ لِلزُّوَّارِ بِالتَّصْوِيرِ.
Card 2: مَوَاقِعُ (non-human plural) → feminine verb تَسْمَحُ.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the voice of a cultural guide (website rule 4, listening and writing model) · Stretch', title: 'Scenario, tip and reflection', ar: 'أُسْلُوبُ الدَّلِيلِ الثَّقَافِيِّ',
      cols: [{ label: 'Tool', w: 2.4 }, { label: 'Example (website texts)', w: 7.3, size: 19 }, { label: 'Structure', w: 2.63 }],
      rows: [
        { core: true, cells: ['scenario', '{w|إِذَا} دُعِيتَ إِلَى مَنْزِلٍ، يُسْتَحْسَنُ أَنْ {k|تُحْضِرَ} هَدِيَّةً.', 'idhā + modal'] },
        { cells: ['impersonal', '{p|يُعْتَبَرُ} الاحْتِرَامُ الثَّقَافِيُّ رَكِيزَةً أَسَاسِيَّةً.', 'passive'] },
        { cells: ['reported tip', '{m|أَخْبَرَنِي} مُضِيفٌ عَرَبِيٌّ {m|أَنَّ} بَادِرَةً صَغِيرَةً تَفْتَحُ القُلُوبَ.', 'akhbaranī anna'] },
        { cells: ['reason', 'يَتَجَنَّبُ الأَكْلَ عَلَنًا {p|احْتِرَامًا لِلصَّائِمِينَ}.', 'maṣdar + li-'] },
        { core: true, cells: ['reflection', '{e|لَوْ} عَرَفَ كُلُّ زَائِرٍ عَادَاتِ البَلَدِ، {e|لَقَلَّتِ} الزَّلَّاتُ الثَّقَافِيَّةُ.', 'law … la-'] },
      ],
      ltr: true,
      foot: 'A guide moves from the general (yuʿtabar) to the scenario (idhā) to the personal (akhbaranī) to the reflection (law).',
      notes: `GRAMMAR PART 4 — website rule “Advice scenario and reflection” plus register tools from the listening, reading and writing model.
Row 1: دُعِيتَ = “you were invited” (passive of دَعَا). Row 2: يُعْتَبَرُ = “is considered” (passive). Row 4: احْتِرَامًا لِـ = “out of respect for” — an accusative maṣdar giving the reason (المَفْعُولُ لِأَجْلِهِ).
Row 5: قَلَّ (to become few) → لَقَلَّتِ الزَّلَّاتُ (faux pas would have been fewer) — feminine because الزَّلَّاتُ is a non-human plural.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me write a cultural guide',
    steps: [
      { head: 'Big idea', ar: '{p|يُعْتَبَرُ} الاحْتِرَامُ …', think: 'General.' },
      { head: 'Polite advice', ar: 'يُسْتَحْسَنُ أَنْ {k|يَتَعَلَّمَ} …', think: '-a after an.' },
      { head: 'Scenario + rule', ar: '{w|إِذَا} زُرْتَ … يَجِبُ أَنْ · {m|يَحْظُرُ} …', think: 'Object!' },
      { head: 'Tip + reflection', ar: '{m|أَخْبَرَنِي … أَنَّ} · {e|لَوْ … لَـ}', think: 'Type 2.' },
    ],
    legend: ['p', 'k', 'w', 'm', 'e'], legendLabels: { p: 'GENERAL', k: 'VERB IN -A', w: 'SCENARIO', m: 'RULE / TIP', e: 'REFLECTION' },
    model: '{p|يُعْتَبَرُ} الاحْتِرَامُ الثَّقَافِيُّ رَكِيزَةً أَسَاسِيَّةً لِأَيِّ رِحْلَةٍ نَاجِحَةٍ. يُسْتَحْسَنُ أَنْ {k|يَتَعَلَّمَ} الزَّائِرُ بَعْضَ العِبَارَاتِ العَرَبِيَّةِ، وَيُسْتَحْسَنُ أَنْ {k|يَرْتَدِيَ} مَلَابِسَ مُحْتَشِمَةً. {w|وَإِذَا} زُرْتَ مَسْجِدًا، يَجِبُ أَنْ {k|تَخْلَعَ} حِذَاءَكَ. كَمَا {m|يَحْظُرُ} بَعْضُ المُقَدَّسَاتِ {m|التَّصْوِيرَ}، فَاسْأَلْ أَوَّلًا. {m|أَخْبَرَنِي} مُرْشِدٌ مَحَلِّيٌّ {m|أَنَّ} التَّحِيَّةَ تُعَبِّرُ عَنِ احْتِرَامٍ عَمِيقٍ. {e|وَلَوْ} عَرَفَ كُلُّ زَائِرٍ عَادَاتِ البَلَدِ، {e|لَقَلَّتِ} الزَّلَّاتُ الثَّقَافِيَّةُ.',
    modelEn: 'Cultural respect is considered a cornerstone of any successful trip. It is preferable for the visitor to learn some Arabic phrases, and to wear modest clothing. If you visit a mosque, you must take off your shoes. Some sacred places also prohibit photography, so ask first. A local guide told me that the greeting expresses deep respect. And had every visitor known the country’s customs, cultural faux pas would have been fewer.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Start general: yuʿtabaru. Polite advice: yustaḥsanu AN — so yataʿallamA, yartadiyA. A scenario: idhā zurta masjidan, yajibu an takhlaʿA. A rule: yaḥẓuru + object — no bi-. A reported tip: akhbaranī … anna. Close with law … la-qallat.”',
  },
  patternEn: ['it is preferable for the visitor to learn some Arabic phrases', 'if you visit a mosque, you must take off your shoes', 'had I learned some Arabic, the experience would have been deeper'],
  gameKey: 'P3-L07',
  game: {
    title: 'Culture around us: match the picture',
    pick: [1, 4, 5],
    en: ['Ways of greeting differ from place to place.', 'Traditional clothes differ between regions.', 'Every country has traditional dishes.'],
    icons: [[['fa6', 'FaHand', 'C77700'], ['fa6', 'FaHandshake', '1D5FBF']], [['fa6', 'FaPersonDress', 'C0386B'], ['fa6', 'FaShirt', '1E6B52']], [['fa6', 'FaBowlFood', 'C77700'], ['fa6', 'FaEarthAsia', '1D5FBF']]],
    labels: ['greetings', 'traditional dress', 'traditional dishes'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6; card 1 not used). Then turn each into advice: يُسْتَحْسَنُ أَنْ يَتَعَلَّمَ الزَّائِرُ التَّحِيَّةَ المَحَلِّيَّةَ · يُسْتَحْسَنُ أَنْ يَحْتَرِمَ اللِّبَاسَ التَّقْلِيدِيَّ · يُسْتَحْسَنُ أَنْ يُجَرِّبَ الأَطْبَاقَ التَّقْلِيدِيَّةَ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a cultural guide (website live builder)', title: 'Advice + rule + reflection', ar: 'ابْنِ دَلِيلًا ثَقَافِيًّا',
      cols: [{ label: '1 · Polite advice', w: 4.0, size: 16 }, { label: '2 · Scenario / rule', w: 4.1, size: 16 }, { label: '3 · Tip / reflection', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then find every verb after an: does it end in -a?',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: change column 1 to “you”: يُسْتَحْسَنُ أَنْ تَتَعَلَّمَ / تَرْتَدِيَ / تَتَجَنَّبَ. Stretch: write your own column-3 reflection about our school: لَوْ عَرَفَ الزُّوَّارُ … ، لَـ …`,
    },
  ],
  sorterTitle: 'Advice (an + -a), prohibition (+ object) — or permission (bi-)?',
  sorterCats: ['an + verb in -a', 'yaḥẓur + object', 'yasmaḥ bi-'],
  sorterNotes: 'Then put the right verb in front of each card: يُسْتَحْسَنُ / يَجِبُ + أَنْ … · يَحْظُرُ المَوْقِعُ … · يَسْمَحُ المَتْحَفُ … .',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('Subjunctive يَتَعَلَّمَ after أَنْ.', 'A verb in -a after an.') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; rule headings and formulas in English and transliteration; sorter headings in transliteration; game card 1 not used (its waṣl alif carries a kasra); the modal, subjunctive, rules and guide tables are teacher-built from the website texts. All other website items are used as published.',
  hints: ['an + -u?', 'yaḥẓur + bi-?', 'yasmaḥ + no bi-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: yustaḥsan an · yajib an · yaḥẓur.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down every verb after an.',
  gloss: [
    ['يُعْتَبَرُ الاحْتِرَامُ الثَّقَافِيُّ رَكِيزَةً أَسَاسِيَّةً لِأَيِّ رِحْلَةٍ نَاجِحَةٍ إِلَى العَالَمِ العَرَبِيِّ. يُشَارُ إِلَى أَنَّ الزُّوَّارَ الَّذِينَ يَحْتَرِمُونَ العَادَاتِ المَحَلِّيَّةَ يَحْظَوْنَ بِاسْتِقْبَالٍ أَدْفَأَ.', 'Cultural respect is considered a cornerstone of any successful trip to the Arab world. It is noted that visitors who respect local customs receive a warmer welcome.'],
    ['يُسْتَحْسَنُ أَنْ يَرْتَدِيَ الزَّائِرُ مَلَابِسَ مُحْتَشِمَةً فِي الأَمَاكِنِ العَامَّةِ. وَإِذَا زُرْتَ مَسْجِدًا، يَجِبُ أَنْ تَخْلَعَ حِذَاءَكَ وَتُغَطِّيَ رَأْسَكَ.', 'It is preferable for the visitor to wear modest clothing in public places. And if you visit a mosque, you must take off your shoes and cover your head.'],
    ['كَمَا يَحْظُرُ بَعْضُ المَوَاقِعِ التَّصْوِيرَ، بَيْنَمَا تَسْمَحُ مَوَاقِعُ أُخْرَى بِهِ دُونَ فَلَاشٍ.', 'Some sites also prohibit photography, while other sites allow it without flash.'],
    ['وَأَخْبَرَنِي مُرْشِدٌ مَحَلِّيٌّ أَنَّهُ مِنَ المُسْتَحْسَنِ تَعَلُّمُ التَّحِيَّةِ العَرَبِيَّةِ، وَقَالَ إِنَّ هٰذِهِ البَادِرَةَ تُعَبِّرُ عَنِ احْتِرَامٍ عَمِيقٍ.', 'A local guide told me that it is good to learn the Arabic greeting, and said that this gesture expresses deep respect.'],
    ['وَلَوْ تَعَلَّمَ كُلُّ سَائِحٍ شَيْئًا مِنْ لُغَةِ البَلَدِ، لَكَانَ التَّبَادُلُ الثَّقَافِيُّ أَعْمَقَ وَأَغْنَى.', 'And had every tourist learned some of the country’s language, cultural exchange would have been deeper and richer.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'بِمَ تَنْصَحُ زَائِرًا؟ اسْتَعْمِلْ «يُسْتَحْسَنُ أَنْ».' },
      { route: 'develop', ar: 'مَا الَّذِي يَجِبُ أَنْ يَفْعَلَهُ فِي مَكَانٍ دِينِيٍّ؟' },
      { route: 'stretch', ar: 'لَوْ تَعَلَّمَ الزَّائِرُ لُغَةَ البَلَدِ، مَاذَا كَانَ سَيَخْتَلِفُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'يُسْتَحْسَنُ أَنْ يَتَعَلَّمَ الزَّائِرُ ______ .' },
      { route: 'develop', ar: 'إِذَا زُرْتَ مَسْجِدًا، يَجِبُ أَنْ تَخْلَعَ ______ .' },
      { route: 'stretch', ar: 'لَوْ تَعَلَّمَ الزَّائِرُ ______ ، لَكَانَ ______ أَعْمَقَ.' },
    ],
    modelEn: ['What do you advise a visitor?', 'It is preferable for the visitor to learn an Arabic greeting and to wear modest clothing.', 'And if they learned the local language?', 'Had they learned some Arabic, the cultural exchange would have been much deeper.'],
    notes: 'Website prompts and model. Pair task: “welcome to our community” — A is a visitor to your mosque or home; B gives three pieces of advice (يُسْتَحْسَنُ أَنْ · يَجِبُ أَنْ · يَحْظُرُ / يَسْمَحُ بِـ). To a girl: اسْتَعْمِلِي · تَنْصَحِينَ.',
  },
  write: {
    core: { amount: '4 sentences', how: 'Website Core: four advice sentences with yustaḥsan an and yajib an.' },
    develop: { amount: '60–80 words', how: 'Website Develop: add a yaḥẓur rule and a yasmaḥ bi- permission.' },
    stretch: { amount: '100–110 words', how: 'Website task: a cultural guide with yustaḥsan an twice, yajib an, yaḥẓur, a Type 1 scenario, a reported tip and a Type 2 reflection.' },
  },
  frames: {
    core: [
      { en: 'It is preferable for the visitor to learn …', ar: 'يُسْتَحْسَنُ أَنْ يَتَعَلَّمَ الزَّائِرُ ______ .' },
      { en: 'It is preferable for him to wear …', ar: 'يُسْتَحْسَنُ أَنْ يَرْتَدِيَ ______ .' },
      { en: 'If you visit a mosque, you must …', ar: 'إِذَا زُرْتَ مَسْجِدًا، يَجِبُ أَنْ ______ .' },
      { en: 'In Ramadan, it is preferable to avoid …', ar: 'فِي رَمَضَانَ، يُسْتَحْسَنُ أَنْ يَتَجَنَّبَ ______ .' },
    ],
    develop: [
      { en: 'Some sites prohibit …', ar: 'يَحْظُرُ بَعْضُ المَوَاقِعِ ______ .' },
      { en: 'The museum permits …', ar: 'يَسْمَحُ المَتْحَفُ بِالتَّصْوِيرِ ______ .' },
      { en: 'A local guide told me that …', ar: 'أَخْبَرَنِي مُرْشِدٌ مَحَلِّيٌّ أَنَّ ______ .' },
      { en: 'Had every visitor known …, … would have …', ar: 'لَوْ عَرَفَ كُلُّ زَائِرٍ ______ ، لَكَانَ ______ .' },
    ],
    bank: ['بَعْضَ العِبَارَاتِ العَرَبِيَّةِ', 'التَّحِيَّةَ المَحَلِّيَّةَ', 'مَلَابِسَ مُحْتَشِمَةً', 'حِذَاءَكَ', 'الأَكْلَ عَلَنًا نَهَارًا', 'التَّصْوِيرَ', 'الدُّخُولَ بِالأَحْذِيَةِ', 'دُونَ فَلَاشٍ', 'عَادَاتِ البَلَدِ', 'الزَّلَّاتُ الثَّقَافِيَّةُ', 'التَّبَادُلُ الثَّقَافِيُّ', 'بَادِرَةً صَغِيرَةً'],
  },
  stretch: [
    ['يُعْتَبَرُ الاحْتِرَامُ الثَّقَافِيُّ رَكِيزَةً أَسَاسِيَّةً', 'cultural respect is considered a cornerstone'],
    ['فِي الأَمَاكِنِ العَامَّةِ', 'in public places'],
    ['فَاسْأَلْ أَوَّلًا', 'so ask first'],
    ['أَنَّهُ مِنَ المُسْتَحْسَنِ تَعَلُّمُ التَّحِيَّةِ', 'that it is good to learn the greeting'],
    ['لَكَانَ التَّبَادُلُ الثَّقَافِيُّ أَعْمَقَ وَأَغْنَى', 'cultural exchange would have been deeper and richer'],
  ],
  modelEn: 'Cultural respect is considered a cornerstone of any successful trip to the Arab world. It is preferable for the visitor to learn some Arabic phrases before travelling, and it is preferable to wear modest clothing in public places. If you visit a mosque, you must take off your shoes and cover your head. Some sacred places also prohibit photography, so ask first. On one of my trips, a local guide told me that it is good to learn the greeting, and said that this gesture expresses deep respect. And had every visitor known the country’s customs, cultural faux pas would have been fewer, and cultural exchange deeper and richer.',
  find: ['yustaḥsan an + -a (twice)', 'yajib an · yaḥẓur + object', 'akhbaranī … anna · qāla inna', 'law … la-qallat · la-kāna'],
  modelNotes: 'Website writing model. Evidence: يُسْتَحْسَنُ أَنْ يَتَعَلَّمَ · يُسْتَحْسَنُ أَنْ يَرْتَدِيَ · إِذَا زُرْتَ مَسْجِدًا، يَجِبُ أَنْ تَخْلَعَ … وَتُغَطِّيَ · يَحْظُرُ … التَّصْوِيرَ · أَخْبَرَنِي … أَنَّهُ · قَالَ إِنَّ · لَوْ عَرَفَ … لَقَلَّتِ … وَلَكَانَ.',
  selfCheck: [
    { route: 'core', text: 'My verbs after an end in -a (yataʿallama · yartadiya).' },
    { route: 'core', text: 'I used yustaḥsan an for polite advice and yajib an for a must.' },
    { route: 'develop', text: 'yaḥẓur has a direct object; yasmaḥ has bi-.' },
    { route: 'develop', text: 'I have a Type 1 scenario (idhā zurta …).' },
    { route: 'stretch', text: 'I report a tip (akhbaranī … anna) and reflect with law … la-.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['يُشَكِّلُ', 'it forms'], ['جِسْرًا', 'a bridge'], ['العِبَارَاتِ', 'phrases'], ['الدِّينِيَّةِ', 'religious'], ['يَتَجَنَّبَ', '(to) avoid'],
    ['عَلَنًا', 'in public'], ['نَهَارًا', 'during the day'], ['لِلصَّائِمِينَ', 'for those fasting'], ['مُضِيفٌ', 'a host'], ['تَفْتَحُ القُلُوبَ', 'it opens hearts'],
  ],
  prep: {
    words: [['نَصٌّ سِيَاحِيٌّ', 'a tourism text', 'pl. نُصُوصٌ'], ['مُرَاجَعَةُ فُنْدُقٍ', 'a hotel review', 'pl. مُرَاجَعَاتٌ'], ['مَوْقِفُ الكَاتِبِ', 'the writer’s attitude', '—'], ['يَسْتَنْتِجُ', 'he infers', 'أَسْتَنْتِجُ I'], ['نَقْدٌ ضِمْنِيٌّ', 'implicit criticism', '—']],
    questionEn: 'When you read a hotel review, how can you tell what the writer really thinks?',
    questionAr: 'أَسْتَنْتِجُ مَوْقِفَ الكَاتِبِ مِنْ ______ .',
    homework: {
      core: 'Write four advice sentences with yustaḥsan an and yajib an (verbs in -a).',
      develop: 'Add a yaḥẓur rule and a yasmaḥ bi- permission (60–80 words).',
      stretch: 'Website writing task: a 100–110-word cultural guide for visitors to an Arab country.',
    },
    wordsSource: 'The five words come from the website P3-L08 vocabulary (reading travel texts).',
  },
  remember: 'Remember: yustaḥsan an / yajib an + a verb in -a (yataʿallama · yartadiya) — yaḥẓur + an object · yasmaḥ bi- — then a scenario with idhā and a reflection with law … la-.',
});

module.exports = { meta, slides };
