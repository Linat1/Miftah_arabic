'use strict';
/* P5-L01 · Poverty and Inequality — Analysing Social Disparities — website: Pathways › Progression › P5 › P5-L01 (the P5 concession–refutation
 * architecture: concede a real situation with صَحِيحٌ أَنَّ + an indicative verb, refute with غَيْرَ أَنَّ, analyse with a Type 2 and conclude with
 * وَبِنَاءً عَلَى مَا سَبَقَ + a necessity subjunctive; academic register يَرْزَحُ تَحْتَ / يُحْرَمُ مِنْ / بِنْيَوِيٌّ / جِهَازِيٌّ).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder, mission and visual game used as published, with
 * waṣl alif shown without a kasra and لِكَيْ always written with its sukūn. Game cards 1, 3 and 5 not used (card 5 has a waṣl kasra). Sorter headings in
 * transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P5')({
  n: 1, fileTitle: 'Poverty_and_Inequality', chip: 'Argument',
  title: 'Poverty and Inequality — Analysing Social Disparities', arabic: 'الفَقْرُ وَعَدَمُ المُسَاوَاةِ — تَحْلِيلُ التَّفَاوُتَاتِ الاجْتِمَاعِيَّةِ',
  focus: 'Argue like an academic: concede a real point with ṣaḥīḥun anna (+ a real, indicative verb), refute it with ghayra anna, analyse with law … la-, and conclude with wa-bināʾan ʿalā mā sabaqa + yataṭallabu an + a verb in -a.',
  icon: 'FaScaleBalanced', iconSet: 'fa6',
});

const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const fm = (f) => ({ tag: 'm · f', forms: [{ l: 'f.', ar: f }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ'));
const site = fix(D.site('P5-L01'));
const RH = [['Concede', 'ṣaḥīḥun anna + a real (indicative) verb'], ['Refute', 'ghayra anna + the counter-argument'], ['Analyse', 'law + past → la-'], ['Conclude', 'wa-bināʾan ʿalā mā sabaqa · yataṭallabu an + verb in -a']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P5-L01', {
  support: `• Core: one concession (ṣaḥīḥun anna) answered by one refutation (ghayra anna) (website Core). Develop: add a Type 2 and reach 100 words. Stretch: 110 words with a formal conclusion and a necessity subjunctive.
• SENSITIVITY: some students or their families may know hardship first-hand. Keep the discussion at the level of societies and policies, never individuals in the class; never ask students about their own family income.
• Faith link (optional): «كَيْ لَا يَكُونَ دُولَةً بَيْنَ الأَغْنِيَاءِ مِنْكُمْ» (al-Ḥashr 59:7) — wealth should not circulate only among the rich. Notice: kay lā yakūna — a purpose clause with the verb in -a! Zakāt is the Qur’anic model of “wealth redistribution”.
• New in P5: the concession–refutation move. Old tools reused: Type 2 (P3-L05), yataṭallabu an (P4), passives (P4-L02/L05), reported statistics (P3-L06 / P4).
• Accuracy: the UN Economic and Social Commission for Western Asia (ESCWA) has estimated well over 100 million people in Arab countries living in poverty (figures vary by method and year) — the website figure is safe.`,
  teach: 'Concede → refute, real (indicative) vs required (subjunctive), the four-move paragraph, academic register.',
  wedo: 'Match pictures of inequality, build a concession–refutation, sort concede / refute / conclude.',
  next: { nextCode: 'P5-L02', nextTitle: 'Migration and Displacement — A Global Crisis in Arabic', nextAr: 'الهِجْرَةُ وَالتَّهْجِيرُ' },
  objectives: ['Describe poverty and inequality with precise social-science vocabulary.', 'Concede a real situation with ṣaḥīḥun anna + an indicative verb.', 'Refute it with the formal connector ghayra anna.', 'Analyse with a Type 2 and conclude with a necessity subjunctive.'],
  rulesAr: 'بِنْيَةُ التَّسْلِيمِ وَالدَّحْضِ',
  ruleEx: [['صَحِيحٌ أَنَّ الاقْتِصَادَ العَرَبِيَّ نَمَا فِي العُقُودِ الأَخِيرَةِ'], ['غَيْرَ أَنَّ الهُوَّةَ بَيْنَ الأَغْنِيَاءِ وَالفُقَرَاءِ ازْدَادَتِ اتِّسَاعًا'], ['لَوْ كَانَتْ سِيَاسَاتُ الحِمَايَةِ أَقْوَى، لَكَانَتْ مُعَدَّلَاتُ الفَقْرِ أَقَلَّ'], ['وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ الأَمْرُ أَنْ تُعِيدَ الحُكُومَاتُ تَوْزِيعَ الثَّرْوَةِ']],
  doNow: {
    questions: [
      q('What does صَحِيحٌ أَنَّ mean?', ['it is true that', 'it is necessary that', 'so that'], 'Prepared at home (P4-L12).'),
      q('What does فَقْرٌ مُدْقِعٌ mean?', ['extreme poverty', 'a poor harvest', 'a low price'], 'Prepared at home (P4-L12).'),
      q('What does البَطَالَةُ mean?', ['unemployment', 'heroism', 'a holiday'], 'Prepared at home (P4-L12).'),
      q('Complete: يَتَطَلَّبُ الأَمْرُ أَنْ ___ مِيزَانِيَّةً أَكْبَرَ.', ['نُخَصِّصَ', 'نُخَصِّصُ', 'خَصَّصْنَا'], 'P4: an + a verb in -a.'),
      q('Complete: لَوْ بَدَأْنَا مُبَكِّرًا، ___ .', ['لَنَجَحْنَا', 'سَنَنْجَحُ', 'نَجَحْنَا'], 'P4: law … la-.'),
    ],
    keyIdea: { text: 'Strong arguments are fair: first admit what is true — then say “however”.', ar: '{w|صَحِيحٌ أَنَّ} الاقْتِصَادَ نَمَا، {e|غَيْرَ أَنَّ} الهُوَّةَ ازْدَادَتْ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P4-L12. Questions 4–5 retrieve the necessity subjunctive and the Type 2 (P4) — both return in today’s analysis and conclusion.',
  },
  routes: {
    core: ['I can name 8 inequality words.', 'I can concede with ṣaḥīḥun anna and refute with ghayra anna.'],
    develop: ['I can keep the conceded verb real (indicative).', 'I can add a Type 2 analysis.'],
    stretch: ['I can close with wa-bināʾan ʿalā mā sabaqa + an + -a.', 'I can write a 110-word inequality analysis.'],
  },
  bridge: [
    { ar: 'فَقْرٌ · فَقِيرٌ', urdu: 'فقیر', tr: 'faqīr', en: 'Arabic: a poor person · Urdu: a beggar, a dervish' },
    { ar: 'غَنِيٌّ · أَغْنِيَاءُ', urdu: 'غنی', tr: 'ghanī', en: 'rich (al-Ghanī — the Self-Sufficient)' },
    { ar: 'عَدَالَةٌ · عَدْلٌ', urdu: 'عدالت', tr: 'adālat', en: 'Arabic: justice · Urdu: a law court' },
    { ar: 'مُسَاوَاةٌ', urdu: 'مساوات', tr: 'musāwāt', en: 'equality' },
    { ar: 'حِرْمَانٌ · مَحْرُومٌ', urdu: 'محروم', tr: 'mahrūm', en: 'deprivation · deprived' },
  ],
  bridgeNotes: 'URDU BRIDGE: مساوات and محروم are shared (محرومی = deprivation). Careful: Urdu عدالت is a law COURT; Arabic العَدَالَةُ الاجْتِمَاعِيَّةُ is social JUSTICE (a court = مَحْكَمَةٌ). Urdu فقیر is often a beggar or a Sufi; Arabic فَقِيرٌ simply means a poor person.',
  core: ['صَحِيحٌ أَنَّ', 'غَيْرَ أَنَّ', 'مَعَ ذٰلِكَ', 'لَا يُمْكِنُ إِنْكَارُ أَنَّ', 'وَبِنَاءً عَلَى مَا سَبَقَ', 'فَقْرٌ مُدْقِعٌ', 'الهُوَّةُ بَيْنَ الأَغْنِيَاءِ وَالفُقَرَاءِ', 'حَدُّ الفَقْرِ', 'البَطَالَةُ', 'العَدَالَةُ الاجْتِمَاعِيَّةُ', 'يَرْزَحُ تَحْتَ', 'يُحْرَمُ مِنْ'],
  forms: {
    'يَرْزَحُ تَحْتَ': hs('تَرْزَحُ تَحْتَ'), 'يُحْرَمُ مِنْ': { tag: 'he · she · they', forms: [{ l: 'they', ar: 'يُحْرَمُونَ مِنْ' }, { l: 'she', ar: 'تُحْرَمُ مِنْ' }] },
    'يُسْهِمُ فِي تَعْمِيقِ': hs('تُسْهِمُ فِي تَعْمِيقِ'), 'بِنْيَوِيٌّ': fm('بِنْيَوِيَّةٌ'), 'جِهَازِيٌّ': fm('جِهَازِيَّةٌ'),
  },
  vocabNotes: {
    0: 'The concession–refutation architecture: CONCEDE (صَحِيحٌ أَنَّ · لَا يُمْكِنُ إِنْكَارُ أَنَّ) → REFUTE (غَيْرَ أَنَّ · مَعَ ذٰلِكَ · بِالرَّغْمِ مِنْ + maṣdar) → CONCLUDE (وَبِنَاءً عَلَى مَا سَبَقَ). After أَنَّ comes a noun in -a: أَنَّ الاقْتِصَادَ …',
    1: 'Poverty and inequality: الهُوَّةُ = the gap, the chasm (literally an abyss) · حَدُّ الفَقْرِ = the poverty line · التَّهْمِيشُ = pushing people to the margins (هَامِشٌ = margin).',
    2: 'Academic register: يَرْزَحُ تَحْتَ (to groan under a heavy load) is far stronger than يَعِيشُ فِي. يُحْرَمُ مِنْ is a passive (P4-L02). بِنْيَوِيٌّ (structural) and جِهَازِيٌّ (systemic) describe problems built into society, not individual bad luck.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · concede, then refute (website rules 1–2, teaching point 1 and vocabulary) · Core', title: 'Admit it — then answer it', ar: 'التَّسْلِيمُ ثُمَّ الدَّحْضُ',
      cols: [{ label: 'Move', w: 1.7 }, { label: 'Marker', w: 3.0, size: 19 }, { label: 'What follows', w: 2.0 }, { label: 'Example (website)', w: 5.63, size: 17 }],
      rows: [
        { core: true, cells: ['concede', '{w|صَحِيحٌ أَنَّ}', 'noun + real verb', 'صَحِيحٌ أَنَّ نِسَبَ التَّعْلِيمِ {w|ارْتَفَعَتْ}،'] },
        { cells: ['concede (strong)', '{w|لَا يُمْكِنُ إِنْكَارُ أَنَّ}', 'noun + real verb', 'لَا يُمْكِنُ إِنْكَارُ أَنَّ التَّعْلِيمَ {w|تَوَسَّعَ}،'] },
        { core: true, cells: ['refute', '{e|غَيْرَ أَنَّ}', 'noun + counter-point', 'غَيْرَ أَنَّ الفُرَصَ لَا تَزَالُ غَيْرَ مُتَكَافِئَةٍ.'] },
        { cells: ['refute', '{e|مَعَ ذٰلِكَ}،', 'a full sentence', 'مَعَ ذٰلِكَ، يُحْرَمُ الفُقَرَاءُ مِنَ الفُرَصِ.'] },
        { cells: ['refute', '{e|بِالرَّغْمِ مِنْ}', 'a maṣdar', 'بِالرَّغْمِ مِنْ {e|نُمُوِّ} الاقْتِصَادِ، ازْدَادَ الفَقْرُ.'] },
      ],
      ltr: true,
      foot: 'Website mistake 2: …، وَالتَّفَاوُتُ ازْدَادَ ✗ (a bare wa- is too weak) → …، غَيْرَ أَنَّ التَّفَاوُتَ ازْدَادَ ✓.',
      notes: `GRAMMAR PART 1 — website rules “Concede” and “Refute”, teaching point 1 (“Concession then refutation is one two-step move”), the vocabulary group and mistake 2. Row 5 is teacher-built from the vocabulary note (بِالرَّغْمِ مِنْ + verbal noun).
Why concede at all? Because examiners reward an argument that answers the other side — it shows maturity and control.
After أَنَّ (with shadda) comes a NOUN in -a: أَنَّ نِسَبَ · أَنَّ الفُرَصَ · أَنَّ التَّفَاوُتَ. Keep غَيْرَ أَنَّ (formal) for writing; لٰكِنَّ is fine in speech.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · real vs required (website teaching point 2 and mistake 1) · Core / Develop', title: 'The concession is real — the solution is not yet', ar: 'الوَاقِعُ وَالمَطْلُوبُ',
      cards: [
        { chip: 'REAL · INDICATIVE · CORE', color: '1E6B52', head: 'صَحِيحٌ أَنَّ … نَمَا', big: 'صَحِيحٌ أَنَّ الاقْتِصَادَ العَرَبِيَّ نَمَا فِي العُقُودِ الأَخِيرَةِ.', en: 'It is true that the Arab economy has grown in recent decades.', clue: 'It happened → no -a.' },
        { chip: 'REQUIRED · SUBJUNCTIVE · DEVELOP', color: '1D5FBF', head: 'يَتَطَلَّبُ … أَنْ تُعِيدَ', big: 'يَتَطَلَّبُ الأَمْرُ أَنْ تُعِيدَ الحُكُومَاتُ تَوْزِيعَ الثَّرْوَةِ.', en: 'It requires governments to redistribute wealth.', clue: 'Not done yet → -a.' },
        { chip: 'ANNA ≠ AN · STRETCH', color: '6B4C9A', head: 'أَنَّ + اسْمٌ · أَنْ + فِعْلٌ', big: 'صَحِيحٌ أَنَّ النُّمُوَّ تَحَقَّقَ · يَنْبَغِي أَنْ نُحَقِّقَ العَدَالَةَ', en: 'anna + a noun (real) · an + a verb in -a (required)', clue: 'Two words, two jobs.' },
      ],
      error: { text: 'Website mistake 1: a conceded fact is real — no subjunctive.', pairs: [['صَحِيحٌ أَنَّ الاقْتِصَادَ نَمَا', 'صَحِيحٌ أَنَّ الاقْتِصَادَ يَنْمُوَ']] },
      notes: `GRAMMAR PART 2 — website teaching point 2 (“ṣaḥīḥun anna takes the indicative — the concession is real”) and mistake 1.
The P4 rule still holds: the -a ending marks something wanted or required. A concession admits something that IS (or WAS) true, so its verb is normal: نَمَا (past) or يَنْمُو (present, ending in -ū).
Card 3 links P4 and P5: anna (shadda) introduces a fact about a noun; an (sukūn) introduces a verb in -a.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the four-move paragraph (website rules 1–4, table and writing model) · Develop', title: 'Concede → refute → analyse → conclude', ar: 'الحَرَكَاتُ الأَرْبَعُ',
      cols: [{ label: 'Move', w: 1.8 }, { label: 'Marker', w: 2.6 }, { label: 'Example (website writing model)', w: 7.93, size: 17 }],
      rows: [
        { core: true, cells: ['1 · concede', 'ṣaḥīḥun anna', '{w|صَحِيحٌ أَنَّ} الاقْتِصَادَ العَرَبِيَّ نَمَا وَارْتَفَعَتْ نِسَبُ التَّعْلِيمِ،'] },
        { core: true, cells: ['2 · refute', 'ghayra anna', '{e|غَيْرَ أَنَّ} الهُوَّةَ بَيْنَ الأَغْنِيَاءِ وَالفُقَرَاءِ ازْدَادَتِ اتِّسَاعًا.'] },
        { cells: ['3 · analyse', 'law … la-', '{m|وَلَوْ} كَانَتْ سِيَاسَاتُ إِعَادَةِ تَوْزِيعِ الثَّرْوَةِ أَكْثَرَ فَاعِلِيَّةً، {m|لَكَانَتِ} المُعَدَّلَاتُ أَقَلَّ.'] },
        { cells: ['4 · conclude', 'wa-bināʾan … + an', '{k|وَبِنَاءً عَلَى مَا سَبَقَ}، يَتَطَلَّبُ تَحْقِيقُ العَدَالَةِ أَنْ {k|تُعِيدَ} الحُكُومَاتُ النَّظَرَ …'] },
      ],
      ltr: true,
      foot: 'Website mistake 3: law … sa-tarājaʿa ✗ → law … la-tarājaʿa ✓. The Type 2 result always takes la-.',
      notes: `GRAMMAR PART 3 — website rules 1–4, the website table and the writing model. This is the backbone of every P5 paragraph.
Move 3 is the honest heart of the argument: “it could have been different” → so policy matters. Move 4 turns analysis into a proposal.
اتِّسَاعًا = in width (tamyīz): ازْدَادَتِ الهُوَّةُ اتِّسَاعًا = the gap grew wider. The writing model also adds a P4 purpose clause at the end: لِكَيْ يَحْظَى الجَمِيعُ بِفُرَصٍ مُتَكَافِئَةٍ.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the academic register of inequality (website listening, reading and vocabulary) · Stretch', title: 'Sound like a social scientist', ar: 'لُغَةُ عِلْمِ الاجْتِمَاعِ',
      cols: [{ label: 'Tool', w: 2.4 }, { label: 'Example (website texts)', w: 7.4, size: 18 }, { label: 'Instead of …', w: 2.53 }],
      rows: [
        { core: true, cells: ['suffer under', '{e|يَرْزَحُ} كَثِيرُونَ {e|تَحْتَ وَطْأَةِ} الفَقْرِ المُدْقِعِ', 'yaʿīshu fī'] },
        { cells: ['are deprived of', 'وَ{m|يُحْرَمُ} الأَطْفَالُ {m|مِنْ} فُرَصِ التَّعْلِيمِ', 'laysa ladayhim'] },
        { cells: ['which deepens', '{w|مِمَّا يُسْهِمُ فِي تَعْمِيقِ} دَوَّامَةِ الحِرْمَانِ', 'wa-hādhā sayyiʾ'] },
        { cells: ['structural · systemic', 'الفَقْرِ {p|البِنْيَوِيِّ} · التَّهْمِيشَ {p|الجِهَازِيَّ}', 'kabīr'] },
        { core: true, cells: ['one of the gravest', 'يُعَدُّ التَّفَاوُتُ الاجْتِمَاعِيُّ {k|مِنْ أَخْطَرِ التَّحَدِّيَاتِ}', 'mushkila kabīra'] },
      ],
      ltr: true,
      foot: 'Academic Arabic replaces everyday verbs with precise, weighty ones — and adds an adjective that explains the CAUSE (structural, systemic).',
      notes: `GRAMMAR PART 4 — register tools from the website listening, reading and vocabulary group “Academic register”.
Row 1: وَطْأَةٌ = the crushing weight (of poverty). Row 3: مِمَّا = “which (fact)” — it links a result to the whole previous sentence; دَوَّامَةٌ = a whirlpool, a vicious circle.
Stretch: rewrite a plain sentence of their own in this register: الفُقَرَاءُ لَيْسَ عِنْدَهُمْ تَعْلِيمٌ → يُحْرَمُ الفُقَرَاءُ مِنْ فُرَصِ التَّعْلِيمِ.`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me write an inequality analysis',
    steps: [
      { head: 'Evidence', ar: '{p|تُشِيرُ} التَّقَارِيرُ {p|إِلَى أَنَّ} …', think: 'Numbers first.' },
      { head: 'Concede', ar: '{w|صَحِيحٌ أَنَّ} … نَمَا', think: 'Real → no -a.' },
      { head: 'Refute', ar: '{e|غَيْرَ أَنَّ} الهُوَّةَ …', think: 'However.' },
      { head: 'Analyse + conclude', ar: '{m|لَوْ} … {m|لَكَانَتِ} · {k|وَبِنَاءً عَلَى مَا سَبَقَ}', think: 'la- · an + -a.' },
    ],
    legend: ['p', 'w', 'e', 'm', 'k'], legendLabels: { p: 'EVIDENCE', w: 'CONCEDE', e: 'REFUTE', m: 'TYPE 2', k: 'CONCLUDE' },
    model: '{p|تُشِيرُ} تَقَارِيرُ الأُمَمِ المُتَّحِدَةِ {p|إِلَى أَنَّ} أَكْثَرَ مِنْ مِئَةِ مِلْيُونِ عَرَبِيٍّ يَعِيشُونَ تَحْتَ حَدِّ الفَقْرِ. {w|صَحِيحٌ أَنَّ} الاقْتِصَادَ العَرَبِيَّ نَمَا، {e|غَيْرَ أَنَّ} الهُوَّةَ بَيْنَ الأَغْنِيَاءِ وَالفُقَرَاءِ ازْدَادَتِ اتِّسَاعًا. {m|وَلَوْ} كَانَتْ سِيَاسَاتُ التَّوْزِيعِ أَكْثَرَ فَاعِلِيَّةً، {m|لَكَانَتِ} المُعَدَّلَاتُ أَقَلَّ. {k|وَبِنَاءً عَلَى مَا سَبَقَ}، يَتَطَلَّبُ الأَمْرُ أَنْ تُعِيدَ الحُكُومَاتُ النَّظَرَ فِي سِيَاسَاتِهَا.',
    modelEn: 'UN reports indicate that more than 100 million Arabs live below the poverty line. It is true that the Arab economy has grown; however, the gap between rich and poor has grown wider. Had distribution policies been more effective, the rates would be lower. Based on the above, governments need to review their policies.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Evidence first: tushīru … ilā ANNA. Then I am fair: ṣaḥīḥun ANNA … namā — it really happened, so no -a. Then my real point: GHAYRA anna. Then: could it have been different? law … LA-kānat. Finally: wa-bināʾan ʿalā mā sabaqa — yataṭallabu AN tuʿīdA.”',
  },
  patternEn: ['it is true that the economy has grown; however, class inequality has increased', 'many suffer under the weight of extreme poverty', 'had protection policies been stronger, poverty rates would be lower'],
  gameKey: 'P5-L01',
  game: {
    title: 'Faces of inequality: match the picture',
    pick: [0, 2, 4],
    en: ['There is a large gap between the rich and the poor.', 'Access to healthcare is unequal.', 'The standard of housing differs between families.'],
    icons: [[['fa6', 'FaSackDollar', 'C77700'], ['fa6', 'FaScaleBalanced', '6B4C9A']], [['fa6', 'FaHospital', '1D5FBF'], ['fa6', 'FaUserSlash', 'C0386B']], [['fa6', 'FaHouseChimney', '1E6B52'], ['fa6', 'FaHouseCrack', 'C0386B']]],
    labels: ['the wealth gap', 'healthcare', 'housing'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6; card 5 not used — waṣl kasra). Then turn each card into a concession–refutation: صَحِيحٌ أَنَّ المُسْتَشْفَيَاتِ كَثُرَتْ، غَيْرَ أَنَّ الوُصُولَ إِلَيْهَا غَيْرُ مُتَسَاوٍ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a concession–refutation (website live builder)', title: 'Concede + refute + solve', ar: 'سَلِّمْ ثُمَّ ادْحَضْ',
      cols: [{ label: '1 · Concede', w: 4.0, size: 16 }, { label: '2 · Refute (ghayra anna)', w: 4.1, size: 16 }, { label: '3 · Solution / analysis', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then check: is the conceded verb real (no -a)? Does the solution verb end in -a?',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: label column 3 — necessity (rows 1–2) or Type 2 (row 3). Stretch: write your own concession–refutation about education or health.
Column 3 row 2: يَنْبَغِي أَنْ تُوَسَّعَ = should be widened (passive in -a).`,
    },
  ],
  sorterTitle: 'Concession, refutation — or analysis / conclusion?',
  sorterCats: ['concession (ṣaḥīḥun anna)', 'refutation (ghayra anna)', 'analysis / conclusion'],
  sorterNotes: 'Then join one card from each column into one fair, three-step argument — and read it aloud with a pause before ghayra anna.',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: { ...site.writing, prompt: 'Write a 100–110-word social-inequality analysis. Open with reported statistics, concede a real gain with ṣaḥīḥun anna + an indicative verb, refute it with ghayra anna, add a Type 2 counterfactual, and conclude with wa-bināʾan ʿalā mā sabaqa + a necessity subjunctive.', checklist: ['A reported-statistics opening (tushīru … ilā anna).', 'A concession with ṣaḥīḥun anna + an indicative verb and a refutation with ghayra anna.', 'The formal verbs yarzaḥu taḥta / yuḥramu min and a Type 2 counterfactual.', 'A formal conclusion (wa-bināʾan ʿalā mā sabaqa) with a necessity subjunctive.'] }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('Formal verb يَرْزَحُ تَحْتَ.', 'The formal verb yarzaḥu taḥta.') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; rule headings, formulas, a pattern tip, the writing prompt and checklist in English and transliteration; sorter headings in transliteration; game cards 1, 3 and 5 not used; the move, real-vs-required, paragraph and register tables are teacher-built from the website texts. All other website items are used as published.',
  hints: ['ṣaḥīḥun anna … yanmuwa?', '… wa-l-tafāwutu?', 'law … sa-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: tushīru ilā anna · ṣaḥīḥun anna · ghayra anna.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and label each sentence: evidence · concede · refute · analyse · conclude.',
  gloss: [
    ['تَقُولُ المُحَلِّلَةُ: تُشِيرُ تَقَارِيرُ الأُمَمِ المُتَّحِدَةِ إِلَى أَنَّ أَكْثَرَ مِنْ مِئَةِ مِلْيُونِ عَرَبِيٍّ يَعِيشُونَ تَحْتَ حَدِّ الفَقْرِ.', 'The analyst says: UN reports indicate that more than 100 million Arabs live below the poverty line.'],
    ['صَحِيحٌ أَنَّ الاقْتِصَادَ العَرَبِيَّ نَمَا فِي العُقُودِ الأَخِيرَةِ، غَيْرَ أَنَّ الهُوَّةَ بَيْنَ الأَغْنِيَاءِ وَالفُقَرَاءِ ازْدَادَتِ اتِّسَاعًا.', 'It is true that the Arab economy has grown in recent decades; however, the gap between rich and poor has grown wider.'],
    ['يَرْزَحُ كَثِيرُونَ تَحْتَ وَطْأَةِ الفَقْرِ المُدْقِعِ، وَيُحْرَمُ الأَطْفَالُ مِنْ فُرَصِ التَّعْلِيمِ.', 'Many suffer under the weight of extreme poverty, and children are deprived of educational opportunities.'],
    ['وَلَوْ كَانَتْ سِيَاسَاتُ إِعَادَةِ تَوْزِيعِ الثَّرْوَةِ أَكْثَرَ فَاعِلِيَّةً، لَكَانَتِ المُعَدَّلَاتُ أَقَلَّ بِكَثِيرٍ.', 'Had wealth-redistribution policies been more effective, the rates would be far lower.'],
    ['وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ الأَمْرُ أَنْ تُعِيدَ الحُكُومَاتُ النَّظَرَ فِي سِيَاسَاتِهَا الضَّرِيبِيَّةِ.', 'Based on the above, governments need to review their tax policies.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا النُّقْطَةُ الَّتِي تُسَلِّمُ بِهَا بِـ«صَحِيحٌ أَنَّ»؟' },
      { route: 'develop', ar: 'كَيْفَ تَدْحَضُهَا بِـ«غَيْرَ أَنَّ»؟' },
      { route: 'stretch', ar: 'مَا الحَلُّ الَّذِي تَقْتَرِحُهُ بِـ«يَتَطَلَّبُ الأَمْرُ أَنْ»؟' },
    ],
    stems: [
      { route: 'core', ar: 'صَحِيحٌ أَنَّ ______ ، غَيْرَ أَنَّ ______ .' },
      { route: 'develop', ar: 'لَوْ كَانَتِ السِّيَاسَاتُ أَقْوَى، لَتَرَاجَعَ ______ .' },
      { route: 'stretch', ar: 'وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ الأَمْرُ أَنْ ______ .' },
    ],
    modelEn: ['What point do you concede?', 'It is true that the economy has grown and education rates have risen.', 'And how do you refute it?', 'However, the gap has widened — and the state needs to redistribute wealth.'],
    notes: 'Website prompts and model. Pair task: “fair debate” — A states a gain (ṣaḥīḥun anna …), B answers with ghayra anna …, A closes with a solution (yataṭallabu al-amru an …). Swap. Keep it about society, not anyone’s family. To a girl: تُسَلِّمِينَ · تَدْحَضِينَهَا · تَقْتَرِحِينَهُ.',
  },
  write: {
    core: { amount: '2 sentences', how: 'Website Core: one concession (ṣaḥīḥun anna) answered by one refutation (ghayra anna).' },
    develop: { amount: '100 words', how: 'Website Develop: add a Type 2 counterfactual and reach 100 words.' },
    stretch: { amount: '100–110 words', how: 'Website task: statistics, concession, refutation, Type 2 and a formal conclusion with a necessity subjunctive.' },
  },
  frames: {
    core: [
      { en: 'It is true that …', ar: 'صَحِيحٌ أَنَّ ______ ،' },
      { en: '… however, …', ar: 'غَيْرَ أَنَّ ______ .' },
      { en: 'Many suffer under the weight of …', ar: 'يَرْزَحُ كَثِيرُونَ تَحْتَ وَطْأَةِ ______ .' },
      { en: 'Children are deprived of …', ar: 'يُحْرَمُ الأَطْفَالُ مِنْ ______ .' },
    ],
    develop: [
      { en: 'Reports indicate that …', ar: 'تُشِيرُ التَّقَارِيرُ إِلَى أَنَّ ______ .' },
      { en: 'Had policies been more effective, …', ar: 'لَوْ كَانَتِ السِّيَاسَاتُ أَكْثَرَ فَاعِلِيَّةً، لَكَانَتِ ______ .' },
      { en: 'Based on the above, it requires that …', ar: 'وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ الأَمْرُ أَنْ ______ .' },
      { en: '… so that everyone enjoys …', ar: 'لِكَيْ يَحْظَى الجَمِيعُ بِفُرَصٍ ______ .' },
    ],
    bank: ['الاقْتِصَادَ نَمَا', 'نِسَبَ التَّعْلِيمِ ارْتَفَعَتْ', 'الهُوَّةَ ازْدَادَتِ اتِّسَاعًا', 'الفُرَصَ غَيْرُ مُتَكَافِئَةٍ', 'الفَقْرِ المُدْقِعِ', 'فُرَصِ التَّعْلِيمِ', 'الرِّعَايَةِ الصِّحِّيَّةِ', 'المُعَدَّلَاتُ أَقَلَّ', 'تُعِيدَ الحُكُومَاتُ تَوْزِيعَ الثَّرْوَةِ', 'فُرَصٍ مُتَكَافِئَةٍ', 'شَبَكَةُ الأَمَانِ', 'العَدَالَةِ الاجْتِمَاعِيَّةِ'],
  },
  stretch: [
    ['ازْدَادَتِ اتِّسَاعًا', 'grew wider'],
    ['تَحْتَ وَطْأَةِ الفَقْرِ البِنْيَوِيِّ', 'under the weight of structural poverty'],
    ['مِمَّا يُسْهِمُ فِي تَعْمِيقِ دَوَّامَةِ الحِرْمَانِ', 'which deepens the cycle of deprivation'],
    ['أَكْثَرَ فَاعِلِيَّةً', 'more effective'],
    ['لِكَيْ يَحْظَى الجَمِيعُ بِفُرَصٍ مُتَكَافِئَةٍ', 'so that everyone enjoys equal opportunities'],
  ],
  modelEn: 'UN reports indicate that more than 100 million Arabs live below the poverty line. It is true that the Arab economy has grown and education rates have risen in recent decades; however, the gap between rich and poor has grown wider. Many suffer under the weight of structural poverty, and children are deprived of education and care, which deepens the cycle of deprivation. Had wealth-redistribution policies been more effective, the rates would be far lower. Based on the above, achieving social justice requires governments to review their tax policies so that everyone enjoys equal opportunities.',
  find: ['tushīru … ilā anna (evidence)', 'ṣaḥīḥun anna … ghayra anna', 'law … la-kānat (Type 2)', 'wa-bināʾan … an tuʿīda · li-kay'],
  modelNotes: 'Website writing model. Evidence: تُشِيرُ … إِلَى أَنَّ · صَحِيحٌ أَنَّ … نَمَا · غَيْرَ أَنَّ … ازْدَادَتِ اتِّسَاعًا · يَرْزَحُ … تَحْتَ وَطْأَةِ · يُحْرَمُ … مِنْ · مِمَّا يُسْهِمُ فِي تَعْمِيقِ · لَوْ كَانَتْ … لَكَانَتِ · وَبِنَاءً عَلَى مَا سَبَقَ · يَتَطَلَّبُ … أَنْ تُعِيدَ · لِكَيْ يَحْظَى.',
  selfCheck: [
    { route: 'core', text: 'I conceded with ṣaḥīḥun anna and refuted with ghayra anna.' },
    { route: 'core', text: 'After anna I put a noun in -a (anna l-iqtiṣāda).' },
    { route: 'develop', text: 'My conceded verb is real (no -a); my solution verb after an ends in -a.' },
    { route: 'develop', text: 'My Type 2 result has la-.' },
    { route: 'stretch', text: 'I used yarzaḥu taḥta / yuḥramu min and closed with wa-bināʾan ʿalā mā sabaqa.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['التَّفَاوُتُ', 'inequality, disparity'], ['مُتَكَافِئَةٍ', 'equal (opportunities)'], ['وَطْأَةِ', 'the weight, burden'], ['الرِّعَايَةِ الصِّحِّيَّةِ', 'healthcare'], ['دَوَّامَةِ', 'a vicious circle'],
    ['مُنَظَّمَةٌ دَوْلِيَّةٌ', 'an international organisation'], ['يُقَلِّصُ', 'reduces, shrinks'], ['أَوْسَعَ', 'wider'], ['لَتَقَلَّصَتِ', 'would have shrunk'], ['تَحْقِيقُ', 'achieving'],
  ],
  prep: {
    words: [['هِجْرَةٌ اضْطِرَارِيَّةٌ', 'forced migration', '—'], ['نُزُوحٌ دَاخِلِيٌّ', 'internal displacement', '—'], ['طَالِبُ لُجُوءٍ', 'an asylum seeker', 'pl. طَالِبُو لُجُوءٍ'], ['مُخَيَّمُ اللَّاجِئِينَ', 'a refugee camp', 'pl. مُخَيَّمَاتٌ'], ['يُهَجَّرُ', 'is displaced', 'passive']],
    questionEn: 'Why do people leave their homes? Give one reason and one “however”.',
    questionAr: 'صَحِيحٌ أَنَّ بَعْضَ النَّاسِ يُهَاجِرُونَ لِلْعَمَلِ، غَيْرَ أَنَّ ______ .',
    homework: {
      core: 'Write two concession–refutation pairs about inequality (ṣaḥīḥun anna … ghayra anna …).',
      develop: 'Add a Type 2 analysis and reach 100 words.',
      stretch: 'Website writing task: a 100–110-word inequality analysis with a formal conclusion.',
    },
    wordsSource: 'The five words come from the website P5-L02 vocabulary (migration and displacement). Teacher note: approach this topic with care — some students may have refugee or migrant backgrounds.',
  },
  remember: 'Remember: be fair, then firm — ṣaḥīḥun anna + a REAL verb (no -a) · ghayra anna + your point · law … la- to show it could be different · wa-bināʾan ʿalā mā sabaqa + an + a verb in -A.',
});

module.exports = { meta, slides };
