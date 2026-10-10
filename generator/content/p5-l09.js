'use strict';
/* P5-L09 · Writing — Social Issues and Opinions (Paper 4 Extended Writing) — website: Pathways › Progression › P5 › P5-L09 (writing-skills lesson: the
 * programme’s most demanding text — a 150–165-word argumentative essay in four paragraphs carrying the nine P5 Range markers: reported speech, past
 * perfect, Type 1, Type 2, purpose / necessity / volition triggers, concession صَحِيحٌ أَنَّ + refutation غَيْرَ أَنَّ, and a conclusion connector + a verb in -a).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder and mission used as published, with waṣl alif shown
 * without a kasra, لِكَيْ always written with its sukūn, and these corrections: يَصِرُّ → يُصِرُّ (vocabulary note); تِسْعَةَ مُؤَشِّرَاتٍ نَحْوِيَّةً → نَحْوِيَّةٍ
 * (listening — the adjective agrees with the genitive counted noun); اندِمَاجٍ → انْدِمَاجٍ (writing model); and the doubled concessions بِالرَّغْمِ مِنْ …،
 * غَيْرَ أَنَّ → … فَإِنَّ (live builder) and بِالرَّغْمِ مِنْ …، مَعَ ذٰلِكَ تَبْقَى → … تَبْقَى (sorter), as in P5-L07. The website visual game (topic pictures) is
 * beginner-level and not used. Sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P5')({
  n: 9, fileTitle: 'Writing_Social_Issues_Paper_4', chip: 'Writing Skills',
  title: 'Writing — Social Issues and Opinions (Paper 4 Extended Writing)', arabic: 'الكِتَابَةُ — القَضَايَا الاجْتِمَاعِيَّةُ وَالآرَاءُ (كِتَابَةٌ مُوَسَّعَةٌ)',
  focus: 'Plan and write a 150–165-word argumentative essay: four paragraphs for Task Completion (thesis, evidence, concession–refutation, conclusion) and nine Range markers spread across them — ending with wa-bināʾan ʿalā mā sabaqa + a verb in -a.',
  icon: 'FaPenNib', iconSet: 'fa6',
});

const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/يَصِرُّ/g, 'يُصِرُّ')
  .replace(/مُؤَشِّرَاتٍ نَحْوِيَّةً/g, 'مُؤَشِّرَاتٍ نَحْوِيَّةٍ').replace(/اندِمَاجٍ/g, 'انْدِمَاجٍ')
  .replace(/بِالرَّغْمِ مِنَ التَّحَدِّيَاتِ، غَيْرَ أَنَّ/g, 'بِالرَّغْمِ مِنَ التَّحَدِّيَاتِ، فَإِنَّ')
  .replace(/بِالرَّغْمِ مِنَ التَّقَدُّمِ، مَعَ ذٰلِكَ تَبْقَى/g, 'بِالرَّغْمِ مِنَ التَّقَدُّمِ، تَبْقَى'));
const site = fix(D.site('P5-L09'));
const RH = [['Thesis + evidence', 'yushāru ilā anna · akkada … anna'], ['Concession + refutation', 'ṣaḥīḥun anna + -u · ghayra anna'], ['Both conditionals', 'idhā … sa- · law … la-'], ['Conclusion', 'wa-bināʾan ʿalā mā sabaqa + an + -a']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;
const VN = [['أَكَّدَ … أَنَّ.', 'akkada … anna.'], ['إِذَا … سَـ.', 'idhā … sa-.'], ['لَوْ … لَـ.', 'law … la-.'], ['لِكَيْ.', 'li-kay.'], ['يَتَطَلَّبُ / يَنْبَغِي أَنْ.', 'yataṭallabu / yanbaghī an.'], ['يُطَالِبُ / يُصِرُّ عَلَى أَنْ.', 'yuṭālibu / yuṣirru ʿalā an.'], ['صَحِيحٌ أَنَّ.', 'ṣaḥīḥun anna.'], ['وَبِنَاءً عَلَى مَا سَبَقَ.', 'wa-bināʾan ʿalā mā sabaqa.']];

const slides = D.devLesson('P5-L09', {
  support: `• WRITING-SKILLS LESSON (IGCSE Paper 4 style): the website task — a 150–165-word argumentative essay — is the main You Do. It is the longest and most complex text of the whole programme; give students the full writing slot and let them choose any social issue from P5-L01 to L06.
• Core: the four-paragraph plan with the thesis and one concession–refutation pair (website Core). Develop: 150 words with both conditionals and a subjunctive trigger. Stretch: 165 words with all nine Range markers and a formal conclusion.
• The nine Range markers: reported speech · past perfect · Type 1 · Type 2 · purpose (li-kay) · necessity (yataṭallabu / yanbaghī an) · volition (yuṭālibu bi-an / yuṣirru ʿalā an) · concession (ṣaḥīḥun anna … ghayra anna) · conclusion connector. The website vocabulary lists eight; the past perfect is the ninth (writing checklist).
• Sensitivity: the website model is about migration — see the P5-L02 note; keep the language humanising (الوَافِدُونَ · المُهَاجِرُونَ).
• Faith link (optional): «يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَى وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا» (al-Ḥujurāt 49:13) — diversity as a source of mutual knowledge.`,
  teach: 'The four-paragraph plan, the nine Range markers, thesis vs topic, the accuracy traps.',
  wedo: 'Upgrade plain sentences, build an essay spine, sort thesis / concession / conclusion.',
  next: { nextCode: 'P5-L10', nextTitle: 'Listening — Social Issues and Opinions Texts', nextAr: 'الاسْتِمَاعُ — القَضَايَا الاجْتِمَاعِيَّةُ وَالآرَاءُ' },
  objectives: ['Plan a four-paragraph argumentative essay: thesis, evidence, concession–refutation, conclusion.', 'Place all nine P5 Range markers across the essay.', 'Concede a real point (ṣaḥīḥun anna + indicative) and refute it (ghayra anna).', 'Close with wa-bināʾan ʿalā mā sabaqa + a subjunctive and reach 150–165 words.'],
  rulesAr: 'تَرْكِيبُ المَقَالِ الحِجَاجِيِّ الكَامِلِ',
  ruleEx: [['يُشَارُ إِلَى أَنَّ الهِجْرَةَ تُثْرِي المُجْتَمَعَاتِ'], ['صَحِيحٌ أَنَّ الانْدِمَاجَ يَسْتَغْرِقُ وَقْتًا، غَيْرَ أَنَّ العَائِدَ أَكْبَرُ'], ['إِذَا أُحْسِنَتِ السِّيَاسَاتُ، سَيَنْدَمِجُ الوَافِدُونَ'], ['وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ التَّقَدُّمُ أَنْ تَسْتَثْمِرَ الحُكُومَاتُ فِي الإِنْسَانِ']],
  doNow: {
    questions: [
      q('What does الأُطْرُوحَةُ mean?', ['the thesis', 'the title', 'the evidence'], 'Prepared at home (P5-L08).'),
      q('What does بِنْيَةُ التَّسْلِيمِ mean?', ['a concession structure', 'a building plan', 'a conclusion'], 'Prepared at home (P5-L08).'),
      q('What does رَابِطُ الخِتَامِ mean?', ['a conclusion connector', 'a final exam', 'a chain'], 'Prepared at home (P5-L08).'),
      q('Gap-fill: صَحِيحٌ أَنَّ الدَّوْلَةَ ___ إِجْرَاءَاتٍ.', ['تَتَّخِذُ', 'تَتَّخِذَ', 'تَتَّخِذْ'], 'P5-L08: a conceded fact → -u.'),
      q('What makes an argument balanced?', ['a concession and a refutation', 'only one side', 'no evidence'], 'P5-L08: two sides.'),
    ],
    keyIdea: { text: 'Two marks at once: Task Completion rewards the ARGUMENT, Range rewards the GRAMMAR — plan both before you write.', ar: 'إِتْمَامُ المُهِمَّةِ = بِنْيَةُ الحُجَّةِ · النِّطَاقُ = {e|تِسْعَةُ مُؤَشِّرَاتٍ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P5-L08. Questions 4–5 retrieve the reading skills of P5-L08 — today students switch from reading the architecture to building it.',
  },
  routes: {
    core: ['I can plan four paragraphs with their jobs.', 'I can write a thesis and one concession–refutation pair.'],
    develop: ['I can add both conditionals and a trigger.', 'I can reach 150 words.'],
    stretch: ['I can place all nine Range markers.', 'I can write a 165-word essay with a formal conclusion.'],
  },
  bridge: [
    { ar: 'تَنَوُّعٌ', urdu: 'تنوع', tr: 'tanawwu', en: 'diversity, variety' },
    { ar: 'ثَقَافَةٌ', urdu: 'ثقافت', tr: 'saqāfat', en: 'culture' },
    { ar: 'مُهَاجِرٌ', urdu: 'مہاجر', tr: 'muhājir', en: 'a migrant' },
    { ar: 'اقْتِصَادٌ', urdu: 'اقتصاد', tr: 'iqtisād', en: 'the economy' },
    { ar: 'تَقَدُّمٌ', urdu: 'ترقی', tr: 'taraqqī', en: 'progress (Arabic تَرَقٍّ = promotion, rising)' },
  ],
  bridgeNotes: 'URDU BRIDGE: تنوع, ثقافت, مہاجر and اقتصاد are shared — the website model essay is full of words you already know. Careful: Urdu ترقی = progress, but in Arabic progress is usually التَّقَدُّمُ (تَرَقٍّ = rising / promotion). So: يَتَطَلَّبُ التَّقَدُّمُ أَنْ … (progress requires that …).',
  core: ['الكَلَامُ المَنْقُولُ', 'شَرْطٌ مِنَ النَّوْعِ الأَوَّلِ', 'شَرْطٌ مِنَ النَّوْعِ الثَّانِي', 'مُسَبِّبُ الغَرَضِ', 'مُسَبِّبُ الضَّرُورَةِ', 'مُسَبِّبُ الإِرَادَةِ', 'بِنْيَةُ التَّسْلِيمِ', 'رَابِطُ الخِتَامِ', 'الأُطْرُوحَةُ', 'الدَّلِيلُ', 'يُثْرِي', 'يُهَدِّدُ الاسْتِقْرَارَ'],
  forms: {
    'يُثْرِي': { tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: 'تُثْرِي' }] }, 'يُهَدِّدُ الاسْتِقْرَارَ': { tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: 'تُهَدِّدُ الاسْتِقْرَارَ' }] },
    'الأُطْرُوحَةُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الأُطْرُوحَاتُ' }] }, 'الدَّلِيلُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الأَدِلَّةُ' }] },
    'الخَاتِمَةُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'الخَوَاتِمُ' }] },
  },
  vocabNotes: {
    0: 'The Range markers — the names of the grammar you will be marked on. Learn them as a checklist: reported speech · Type 1 · Type 2 · purpose · necessity · volition · concession · conclusion connector (+ the past perfect = nine).',
    1: 'Essay register: الأُطْرُوحَةُ (thesis) → الدَّلِيلُ (evidence) → نَقِيضُ الحُجَّةِ (counter-argument) → الرَّدُّ (refutation) → الخَاتِمَةُ (conclusion). الصَّوْتُ التَّحْلِيلِيُّ المُتَّزِنُ = the calm, balanced voice the examiner wants.',
    2: 'Content words from P5-L01 to L06 — pick ONE issue for your essay. يُثْرِي (enriches) takes a direct object: تُثْرِي الهِجْرَةُ المُجْتَمَعَاتِ. Its opposite in the model: تُضْعِفُ (weakens).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the four-paragraph plan (website table, teaching point 1 and reading) · Core', title: 'Plan the argument and the grammar together', ar: 'خُطَّةُ المَقَالِ',
      cols: [{ label: 'Para.', w: 1.0 }, { label: 'Argument role (TC)', w: 2.2 }, { label: 'Range markers', w: 2.8 }, { label: 'Example (website model essay)', w: 6.33, size: 16 }],
      rows: [
        { core: true, cells: ['P1', 'thesis', 'reported speech', '{p|يُشَارُ إِلَى أَنَّ} الهِجْرَةَ تُثْرِي المُجْتَمَعَاتِ المُضِيفَةَ أَكْثَرَ مِمَّا تُضْعِفُهَا'] },
        { core: true, cells: ['P2', 'evidence', 'reported speech + past perfect', '{m|أَكَّدَ} البَاحِثُونَ {m|أَنَّ} … وَ{w|كَانَتْ} دُوَلٌ كَثِيرَةٌ {w|قَدِ} اسْتَفَادَتْ'] },
        { core: true, cells: ['P3', 'concession + refutation', 'ṣaḥīḥun anna … ghayra anna', '{w|صَحِيحٌ أَنَّ} الانْدِمَاجَ يَسْتَغْرِقُ وَقْتًا، {e|غَيْرَ أَنَّ} العَائِدَ يَفُوقُ التَّكْلِفَةَ'] },
        { cells: ['P3', 'analysis', 'Type 1 + Type 2 + volition', '{k|إِذَا} أُحْسِنَتِ … {k|سَيَنْدَمِجُ} · {m|لَوْ} فُتِحَتْ … {m|لَتَجَنَّبْنَا}'] },
        { cells: ['P4', 'conclusion', 'connector + necessity + purpose', '{k|وَبِنَاءً عَلَى مَا سَبَقَ}، يَتَطَلَّبُ التَّقَدُّمُ أَنْ تَسْتَثْمِرَ … لِكَيْ يَنْعَمَ'] },
      ],
      ltr: true,
      foot: 'Website teaching point: label where each paragraph’s argument role AND each Range marker will sit before you write.',
      notes: `GRAMMAR PART 1 — the website table (“Paragraph · Argument role · Range markers”), teaching point 1 (“TC rewards the argument; Range rewards the grammar”) and the website reading.
Planning routine (3 min): draw four boxes; in each, write the role on the left and the marker(s) on the right; tick each marker as you use it. Target words: P1 30 · P2 35 · P3 60 · P4 35 = 160.
Note: the website model puts both conditionals AFTER the concession (P3) — they analyse what could be done and what could have been.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the nine Range markers (website vocabulary group 1 and writing model) · Develop', title: 'Nine markers, nine ticks', ar: 'مُؤَشِّرَاتُ النِّطَاقِ التِّسْعَةُ',
      cols: [{ label: 'Markers', w: 2.7 }, { label: 'Form', w: 2.9, size: 17 }, { label: 'From the website model essay', w: 6.73, size: 16 }],
      rows: [
        { core: true, cells: ['1 reported speech · 2 past perfect', '{p|أَكَّدَ … أَنَّ} · {w|كَانَتْ … قَدْ}', 'أَكَّدَ البَاحِثُونَ أَنَّ التَّنَوُّعَ يَرْفَعُ الإِنْتَاجِيَّةَ · كَانَتْ دُوَلٌ قَدِ اسْتَفَادَتْ'] },
        { core: true, cells: ['3 Type 1 · 4 Type 2', '{k|إِذَا … سَـ} · {m|لَوْ … لَـ}', 'إِذَا أُحْسِنَتِ السِّيَاسَاتُ، سَيَنْدَمِجُ … · لَوْ فُتِحَتْ … لَتَجَنَّبْنَا …'] },
        { cells: ['5 purpose · 6 necessity', '{e|لِكَيْ} · {e|يَتَطَلَّبُ أَنْ}', 'يَتَطَلَّبُ التَّقَدُّمُ أَنْ تَسْتَثْمِرَ … لِكَيْ يَنْعَمَ الجَمِيعُ'] },
        { cells: ['7 volition', '{e|يُطَالِبُ بِأَنْ}', 'وَيُطَالِبُ الخُبَرَاءُ بِأَنْ تُوضَعَ بَرَامِجُ انْدِمَاجٍ فَاعِلَةٌ'] },
        { core: true, cells: ['8 concession · 9 conclusion', '{w|صَحِيحٌ أَنَّ … غَيْرَ أَنَّ} · {k|وَبِنَاءً …}', 'صَحِيحٌ أَنَّ الانْدِمَاجَ … غَيْرَ أَنَّ … · وَبِنَاءً عَلَى مَا سَبَقَ …'] },
      ],
      ltr: true,
      foot: 'Range rewards DISTINCT markers — nine different ones, not one repeated nine times (website quiz 2).',
      notes: `GRAMMAR PART 2 — the website vocabulary group “The nine P5 Range markers” and the website writing model (every row is from the model).
Teacher check: students write 1–9 in the margin and tick each one in their draft. A missing tick = a missing Range mark.
Row 4: يُطَالِبُ بِأَنْ تُوضَعَ — volition + a PASSIVE in -a (P5-L03). One sentence, two markers of sophistication.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · a thesis, not a topic (website quiz 8, mission round 10, rule 1) · Core / Develop', title: 'Take a position', ar: 'أُطْرُوحَةٌ لَا مَوْضُوعٌ',
      cards: [
        { chip: 'TOPIC ✗', color: 'C0386B', head: 'مَوْضُوعٌ فَقَطْ', big: 'الهِجْرَةُ مَوْضُوعٌ مُهِمٌّ.', en: 'Migration is an important topic.', clue: 'no position' },
        { chip: 'ANNOUNCEMENT ✗', color: 'C77700', head: 'إِعْلَانٌ', big: 'سَأَتَحَدَّثُ عَنِ الهِجْرَةِ.', en: 'I will talk about migration.', clue: 'no position' },
        { chip: 'THESIS ✓', color: '1E6B52', head: 'أُطْرُوحَةٌ', big: 'الهِجْرَةُ تُثْرِي المُجْتَمَعَاتِ أَكْثَرَ مِمَّا تُضْعِفُهَا.', en: 'Migration enriches societies more than it weakens them.', clue: 'a position to defend' },
      ],
      error: { text: 'Website mistake 3: close formally — not with a weak opener.', pairs: [['وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ التَّقَدُّمُ أَنْ …', 'وَأَخِيرًا، يَجِبُ …']] },
      notes: `GRAMMAR PART 3 — website quiz 8 and mission round 10 (“Which is a position, not just a topic?”), rule “Thesis + evidence” and mistake 3.
A thesis is a sentence someone could DISAGREE with. Test: can you add «… غَيْرَ أَنَّ بَعْضَهُمْ يَرَى العَكْسَ»? If yes, it is a thesis.
أَكْثَرَ مِمَّا = more than (+ verb): تُثْرِي … أَكْثَرَ مِمَّا تُضْعِفُهَا — a ready-made thesis frame for ANY issue: X يَنْفَعُ … أَكْثَرَ مِمَّا يَضُرُّ.
Website teaching point 2: “The most-missed element is the conclusion connector + subjunctive” — one sentence carries a Range marker AND an Accuracy marker.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the accuracy traps (website mistakes, common error and corrections) · Stretch', title: 'Five traps to avoid', ar: 'أَخْطَاءٌ شَائِعَةٌ',
      cols: [{ label: '✗ Wrong', w: 4.2, size: 16 }, { label: '✓ Right', w: 4.4, size: 16 }, { label: 'Rule', w: 3.73 }],
      rows: [
        { core: true, cells: ['صَحِيحٌ أَنَّ الانْدِمَاجَ يَسْتَغْرِقَ وَقْتًا', 'صَحِيحٌ أَنَّ الانْدِمَاجَ {w|يَسْتَغْرِقُ} وَقْتًا', 'anna (a fact) → -u'] },
        { core: true, cells: ['… أَنْ تَسْتَثْمِرُ الحُكُومَاتُ', '… أَنْ {e|تَسْتَثْمِرَ} الحُكُومَاتُ', 'an (an aim) → -a'] },
        { cells: ['صَحِيحٌ أَنَّ …، وَالعَائِدُ أَكْبَرُ', 'صَحِيحٌ أَنَّ …، {e|غَيْرَ أَنَّ} العَائِدَ أَكْبَرُ', 'answer every concession'] },
        { cells: ['بِالرَّغْمِ مِنَ التَّحَدِّيَاتِ، غَيْرَ أَنَّ …', 'بِالرَّغْمِ مِنَ التَّحَدِّيَاتِ، {k|فَإِنَّ} …', 'one concession word only'] },
        { cells: ['لَوْ فُتِحَتِ الأَبْوَابُ، سَنَتَجَنَّبُ …', 'لَوْ فُتِحَتِ الأَبْوَابُ، {m|لَتَجَنَّبْنَا} …', 'Type 2 → la- + past'] },
      ],
      ltr: true,
      foot: 'Website common error: a subjunctive after ṣaḥīḥun anna, a concession never answered, or no formal close.',
      notes: `GRAMMAR PART 4 — website mistakes 1–2, the common error, quiz 7 and the website correction applied in this deck (row 4).
WEBSITE CORRECTION: the website live builder has «بِالرَّغْمِ مِنَ التَّحَدِّيَاتِ، غَيْرَ أَنَّ الفُرَصَ أَكْبَرُ» and the sorter «بِالرَّغْمِ مِنَ التَّقَدُّمِ، مَعَ ذٰلِكَ تَبْقَى …» — both double the concession (as in P5-L07). This deck reads «… فَإِنَّ …» and «… تَبْقَى …».
Proof-reading routine (3 min at the end): check every أَنَّ (-u), every أَنْ / لِكَيْ (-a), every صَحِيحٌ (answered?), every لَوْ (la-?).`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me plan and write the opening and close',
    steps: [
      { head: 'P1 · Thesis', ar: '{p|يُشَارُ إِلَى أَنَّ} … أَكْثَرَ مِمَّا …', think: 'A position.' },
      { head: 'P2 · Evidence', ar: '{m|أَكَّدَ} … {m|أَنَّ} · {w|كَانَتْ … قَدْ}', think: 'Two markers.' },
      { head: 'P3 · Balance', ar: '{w|صَحِيحٌ أَنَّ} … {e|غَيْرَ أَنَّ} · {m|لَوْ} …', think: 'Concede, answer.' },
      { head: 'P4 · Close', ar: '{k|وَبِنَاءً عَلَى مَا سَبَقَ} …', think: 'an + -a!' },
    ],
    legend: ['p', 'm', 'w', 'e', 'k'], legendLabels: { p: 'THESIS', m: 'EVIDENCE', w: 'BALANCE', e: 'REFUTATION', k: 'CONCLUSION' },
    model: '{p|يُشَارُ إِلَى أَنَّ} الهِجْرَةَ تُثْرِي المُجْتَمَعَاتِ المُضِيفَةَ أَكْثَرَ مِمَّا تُضْعِفُهَا. {m|أَكَّدَ} البَاحِثُونَ {m|أَنَّ} التَّنَوُّعَ يَرْفَعُ الإِنْتَاجِيَّةَ، {w|وَكَانَتْ} دُوَلٌ كَثِيرَةٌ {w|قَدِ} اسْتَفَادَتْ مِنْ كَفَاءَاتِ الوَافِدِينَ. {w|صَحِيحٌ أَنَّ} الانْدِمَاجَ يَسْتَغْرِقُ وَقْتًا، {e|غَيْرَ أَنَّ} العَائِدَ يَفُوقُ التَّكْلِفَةَ. {m|وَلَوْ} فُتِحَتْ أَبْوَابُ العَمَلِ مُبَكِّرًا، {m|لَتَجَنَّبْنَا} كَثِيرًا مِنَ التَّوَتُّرِ. {k|وَبِنَاءً عَلَى مَا سَبَقَ}، يَتَطَلَّبُ التَّقَدُّمُ أَنْ تَسْتَثْمِرَ الحُكُومَاتُ فِي الانْدِمَاجِ.',
    modelEn: 'It is noted that migration enriches host societies more than it weakens them. Researchers have confirmed that diversity raises productivity, and many countries had benefited from the skills of newcomers. It is true that integration takes time; however, the return outweighs the cost. Had the doors to work been opened earlier, we would have avoided much tension. Based on the above, progress requires governments to invest in integration.',
    notes: 'I DO (4 min) — the website model, shortened. Think aloud with the plan visible: “P1 — a position, not a topic: … akthara mimmā tuḍʿifuhā. P2 — akkada … anna (tick 1) and kānat … qad (tick 2). P3 — ṣaḥīḥun anna + -u (tick), ghayra anna, then law … la- (tick). P4 — the most-missed sentence: wa-bināʾan ʿalā mā sabaqa + an tastathmirA (two ticks).” Count the ticks with the class.',
  },
  patternEn: ['it is noted that migration enriches societies with diversity and energies', 'it is true that integration takes time; however, the return outweighs the cost', 'based on the above, progress requires governments to invest in people'],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · upgrade the sentence (website model and mistakes)', title: 'From plain to Paper 4', ar: 'حَسِّنِ الجُمْلَةَ',
      cols: [{ label: 'Plain sentence', w: 3.0, size: 19 }, { label: 'Paper 4 sentence', w: 7.0, size: 17 }, { label: 'Marker', w: 2.33 }],
      rows: [
        { core: true, cells: ['الهِجْرَةُ مُفِيدَةٌ.', 'يُشَارُ إِلَى أَنَّ الهِجْرَةَ تُثْرِي المُجْتَمَعَاتِ أَكْثَرَ مِمَّا تُضْعِفُهَا.', 'thesis + report'] },
        { core: true, cells: ['الانْدِمَاجُ صَعْبٌ.', 'صَحِيحٌ أَنَّ الانْدِمَاجَ يَسْتَغْرِقُ وَقْتًا، غَيْرَ أَنَّ العَائِدَ أَكْبَرُ.', 'concession'] },
        { cells: ['دُوَلٌ اسْتَفَادَتْ.', 'وَكَانَتْ دُوَلٌ كَثِيرَةٌ قَدِ اسْتَفَادَتْ مِنْ كَفَاءَاتِ الوَافِدِينَ.', 'past perfect'] },
        { cells: ['نُرِيدُ بَرَامِجَ.', 'وَيُطَالِبُ الخُبَرَاءُ بِأَنْ تُوضَعَ بَرَامِجُ انْدِمَاجٍ فَاعِلَةٌ.', 'volition'] },
        { cells: ['وَأَخِيرًا، الاسْتِثْمَارُ مُهِمٌّ.', 'وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ التَّقَدُّمُ أَنْ تَسْتَثْمِرَ الحُكُومَاتُ فِي الإِنْسَانِ.', 'conclusion'] },
      ],
      ltr: true,
      foot: 'Cover the middle column: upgrade each plain sentence, then compare with the website model.',
      notes: `WE DO (3 min) — an upgrade drill built from the website model. The left-hand sentences are accurate but show almost no Range — that is the point.
Core: rows 1–2. Develop: rows 1–4. Stretch: all five, then turn row 3 into a Type 2: لَوْ لَمْ تَسْتَفِدِ الدُّوَلُ مِنْ …، لَـ …
Row 5 is website mistake 3: وَأَخِيرًا is a weak opener — it lists, it does not synthesise.`,
    },
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · build an essay spine (website live builder, one item corrected)', title: 'Thesis + balance + conclusion', ar: 'ابْنِ عَمُودَ المَقَالِ',
      cols: [{ label: '1 · Thesis / evidence', w: 4.1, size: 15 }, { label: '2 · Concession + refutation', w: 4.1, size: 15 }, { label: '3 · Conclusion', w: 4.13, size: 15 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (flex) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Correction: column 2 row 3 reads «بِالرَّغْمِ مِنَ التَّحَدِّيَاتِ، فَإِنَّ …» (the website has «… غَيْرَ أَنَّ …», a doubled concession — see Grammar Part 4).
Ask: which columns could come from DIFFERENT issues and still make one essay? (none — an essay keeps ONE issue; mixing is a TC risk).`,
    },
  ],
  sorterTitle: 'Thesis, balance — or conclusion?',
  sorterCats: ['thesis / evidence', 'concession + refutation', 'conclusion'],
  sorterNotes: 'Then pick one card from each column about the SAME issue and join them into a mini-essay — thesis, balance, conclusion.',
  patch: { vocab: site.vocab.map((g) => ({ ...g, items: g.items.map((it) => ({ ...it, note: VN.reduce((s, [a, b]) => s.replace(a, b), it.note) })) })), grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: { ...site.writing, prompt: 'Write a 150–165-word argumentative essay on a social issue. Move thesis → evidence → concession (ṣaḥīḥun anna) → refutation (ghayra anna) → conclusion (wa-bināʾan ʿalā mā sabaqa + a verb in -a), placing all nine P5 Range markers.', checklist: ['A clear thesis and cited evidence (reported speech).', 'A concession (ṣaḥīḥun anna + indicative) answered by a refutation (ghayra anna).', 'Both conditional types, a subjunctive trigger and the past perfect.', 'A conclusion connector (wa-bināʾan ʿalā mā sabaqa) + a verb in -a; 150–165 words.'] }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns, final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; يَصِرُّ → يُصِرُّ; مُؤَشِّرَاتٍ نَحْوِيَّةً → نَحْوِيَّةٍ (listening); اندِمَاجٍ → انْدِمَاجٍ (writing model); two doubled concessions corrected (live builder and sorter, as in P5-L07); vocabulary notes, rule formulas, writing prompt and checklist in transliteration; sorter headings in transliteration; the plan, Range, thesis, trap and upgrade tables are teacher-built from the website texts; the website visual game is beginner-level and not used. All other website items are used as published.',
  hints: ['ṣaḥīḥun anna … yastaghriqa?', '…، wa-l-ʿāʾidu akbaru?', 'wa-akhīran, yajibu …?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nListen for: the word count · itmām al-muhimma · al-niṭāq · wa-bināʾan ʿalā mā sabaqa.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5 — and write down the five Range markers the examiner names.',
  gloss: [
    ['فِي الوَرَقَةِ الرَّابِعَةِ، يَبْلُغُ نَصُّ هٰذِهِ الوَحْدَةِ مِئَةً وَخَمْسِينَ إِلَى مِئَةٍ وَخَمْسٍ وَسِتِّينَ كَلِمَةً، وَهُوَ أَطْوَلُ نَصٍّ وَأَعْقَدُهُ فِي البَرْنَامَجِ.', 'In Paper 4, this unit’s text reaches 150 to 165 words; it is the longest and most complex text in the programme.'],
    ['يُكَافِئُ إِتْمَامُ المُهِمَّةِ بِنْيَةَ الحُجَّةِ: أُطْرُوحَةٌ، فَدَلِيلٌ، فَتَسْلِيمٌ بِـ«صَحِيحٌ أَنَّ»، فَرَدٌّ بِـ«غَيْرَ أَنَّ»، فَخَاتِمَةٌ.', 'Task Completion rewards the structure of the argument: a thesis, then evidence, then a concession with “ṣaḥīḥun anna”, then a refutation with “ghayra anna”, then a conclusion.'],
    ['أَمَّا النِّطَاقُ فَيُكَافِئُ تِسْعَةَ مُؤَشِّرَاتٍ نَحْوِيَّةٍ: كَلَامٌ مَنْقُولٌ، وَنَوْعَا الشَّرْطِ، وَمُسَبِّبَاتُ النَّصْبِ، وَبِنْيَةُ التَّسْلِيمِ، وَرَابِطُ الخِتَامِ.', 'Range, however, rewards nine grammatical markers: reported speech, both types of conditional, the subjunctive triggers, the concession structure and the conclusion connector.'],
    ['وَتَذَكَّرْ أَنَّ الفِعْلَ بَعْدَ «صَحِيحٌ أَنَّ» مُثْبَتٌ لِأَنَّهُ يَصِفُ وَاقِعًا.', 'And remember that the verb after “ṣaḥīḥun anna” is indicative, because it describes reality.'],
    ['وَاخْتِمْ دَائِمًا بِـ«وَبِنَاءً عَلَى مَا سَبَقَ» وَفِعْلٍ مَنْصُوبٍ.', 'And always close with “wa-bināʾan ʿalā mā sabaqa” and a subjunctive verb.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا أُطْرُوحَتُكَ وَدَلِيلُكَ؟' },
      { route: 'develop', ar: 'مَا نَقِيضُ الحُجَّةِ، وَكَيْفَ تَرُدُّ عَلَيْهِ؟' },
      { route: 'stretch', ar: 'كَيْفَ تَخْتِمُ بِرَابِطٍ خِتَامِيٍّ وَفِعْلٍ مَنْصُوبٍ؟' },
    ],
    stems: [
      { route: 'core', ar: 'يُشَارُ إِلَى أَنَّ ______ أَكْثَرَ مِمَّا ______ .' },
      { route: 'develop', ar: 'صَحِيحٌ أَنَّ ______ ، غَيْرَ أَنَّ ______ .' },
      { route: 'stretch', ar: 'وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ التَّقَدُّمُ أَنْ ______ .' },
    ],
    modelEn: ['What is your thesis?', 'It is noted that migration enriches societies more than it weakens them.', 'And how do you conclude?', 'True, integration takes time; however, the return is greater — so progress requires that we invest in integration.'],
    notes: 'Website prompts and model: students TALK THROUGH their plan with a partner before writing (2 min each). The partner counts the Range markers on their fingers — nine needed! To a girl: أُطْرُوحَتُكِ وَدَلِيلُكِ · تَرُدِّينَ · تَخْتِمِينَ.',
  },
  diff: { core: 'Write the four-paragraph plan with the thesis and one concession–refutation pair.' },
  write: {
    core: { amount: '4 paragraphs', how: 'Website Core: the four-paragraph plan with the thesis and one concession–refutation pair.' },
    develop: { amount: '150 words', how: 'Website Develop: expand to 150 words with both conditionals and a subjunctive trigger.' },
    stretch: { amount: '150–165 words', how: 'Website Stretch: all nine Range markers and a formal conclusion.' },
  },
  frames: {
    core: [
      { en: 'P1 · It is noted that … more than …', ar: 'يُشَارُ إِلَى أَنَّ ______ أَكْثَرَ مِمَّا ______ .' },
      { en: 'P2 · Researchers confirmed that …', ar: 'أَكَّدَ البَاحِثُونَ أَنَّ ______ .' },
      { en: 'P3 · It is true that …; however, …', ar: 'صَحِيحٌ أَنَّ ______ ، غَيْرَ أَنَّ ______ .' },
      { en: 'P4 · Based on the above, progress requires …', ar: 'وَبِنَاءً عَلَى مَا سَبَقَ، يَتَطَلَّبُ التَّقَدُّمُ أَنْ ______ .' },
    ],
    develop: [
      { en: 'Many countries had benefited from …', ar: 'وَكَانَتْ دُوَلٌ كَثِيرَةٌ قَدِ اسْتَفَادَتْ مِنْ ______ .' },
      { en: 'If policies are improved, …', ar: 'إِذَا أُحْسِنَتِ السِّيَاسَاتُ، سَيَنْدَمِجُ ______ .' },
      { en: 'Had … been opened earlier, we would have avoided …', ar: 'لَوْ فُتِحَتْ ______ مُبَكِّرًا، لَتَجَنَّبْنَا ______ .' },
      { en: 'Experts demand that … be set up.', ar: 'وَيُطَالِبُ الخُبَرَاءُ بِأَنْ تُوضَعَ ______ .' },
    ],
    bank: ['الهِجْرَةَ تُثْرِي المُجْتَمَعَاتِ', 'تُضْعِفُهَا', 'التَّنَوُّعَ الثَّقَافِيَّ يَرْفَعُ الإِنْتَاجِيَّةَ', 'كَفَاءَاتِ الوَافِدِينَ', 'الانْدِمَاجَ يَسْتَغْرِقُ وَقْتًا', 'العَائِدَ يَفُوقُ التَّكْلِفَةَ', 'الوَافِدُونَ بِسُهُولَةٍ', 'أَبْوَابُ العَمَلِ', 'كَثِيرًا مِنَ التَّوَتُّرِ', 'بَرَامِجُ انْدِمَاجٍ فَاعِلَةٌ', 'تَسْتَثْمِرَ الحُكُومَاتُ فِي الإِنْسَانِ', 'لِكَيْ يَنْعَمَ الجَمِيعُ بِالاسْتِقْرَارِ'],
  },
  stretch: [
    ['إِذْ تُضِيفُ إِلَيْهَا تَنَوُّعًا ثَقَافِيًّا', 'since it adds cultural diversity to them'],
    ['وَيُثْرِي الحَيَاةَ العَامَّةَ', 'and enriches public life'],
    ['وَيَسْتَلْزِمُ سِيَاسَاتٍ حَكِيمَةً', 'and requires wise policies'],
    ['وَيُسْهِمُونَ فِي التَّنْمِيَةِ', 'and contribute to development'],
    ['بِالاسْتِقْرَارِ وَالازْدِهَارِ', 'stability and prosperity'],
  ],
  modelEn: 'It is noted that migration enriches host societies more than it weakens them, adding cultural diversity and human energy. Researchers have confirmed that diversity raises productivity and enriches public life, and many countries had benefited from newcomers’ skills. It is true that integration takes time and requires wise policies; however, the economic and social return far outweighs the cost. If policies are improved, newcomers will integrate and contribute to development. Had work been opened to them earlier, we would have avoided much social tension. Experts demand effective integration programmes. Based on the above, progress requires governments to invest in integration so that everyone enjoys stability and prosperity.',
  find: ['akkada … anna · kānat … qad', 'ṣaḥīḥun anna … ghayra anna', 'idhā … sa- · law … la-', 'wa-bināʾan … an tastathmira'],
  modelNotes: 'Website writing model (≈ 150 words). Range: يُشَارُ إِلَى أَنَّ (1) · أَكَّدَ … أَنَّ (1) · كَانَتْ … قَدِ اسْتَفَادَتْ (2) · صَحِيحٌ أَنَّ … غَيْرَ أَنَّ (8) · إِذَا أُحْسِنَتْ … سَيَنْدَمِجُ (3) · لَوْ فُتِحَتْ … لَتَجَنَّبْنَا (4) · يُطَالِبُ … بِأَنْ تُوضَعَ (7) · وَبِنَاءً عَلَى مَا سَبَقَ (9) · يَتَطَلَّبُ … أَنْ تَسْتَثْمِرَ (6) · لِكَيْ يَنْعَمَ (5).',
  selfCheck: [
    { route: 'core', text: 'My first sentence is a position, not just a topic.' },
    { route: 'core', text: 'My concession (-u) is answered by ghayra anna.' },
    { route: 'develop', text: 'I used both conditionals and a subjunctive trigger.' },
    { route: 'develop', text: 'I closed with wa-bināʾan ʿalā mā sabaqa + a verb in -a.' },
    { route: 'stretch', text: 'I ticked all nine Range markers and wrote 150–165 words.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['المُضِيفَةَ', 'host'], ['تُضْعِفُهَا', 'weakens them'], ['الإِنْتَاجِيَّةَ', 'productivity'], ['كَفَاءَاتِ', 'skills, competences'], ['الوَافِدِينَ', 'newcomers'],
    ['يَسْتَغْرِقُ', 'takes (time)'], ['حَكِيمَةً', 'wise'], ['التَّوَتُّرِ', 'tension'], ['فَاعِلَةٌ', 'effective'], ['الازْدِهَارِ', 'prosperity'],
  ],
  prep: {
    words: [['إِشَارَةُ التَّسْلِيمِ', 'the concession signal', 'pl. إِشَارَاتٌ'], ['إِشَارَةُ الرَّدِّ', 'the refutation signal', '—'], ['مَوْقِفُ المُتَحَدِّثِ', 'the speaker’s position', 'f. المُتَحَدِّثَةِ'], ['التَّنَبُّؤُ بِمَا يَلِي', 'predicting what follows', '—'], ['مُنْحَازٌ', 'one-sided, partisan', 'f. مُنْحَازَةٌ']],
    questionEn: 'When you hear “ṣaḥīḥun anna …”, what do you expect to hear next?',
    questionAr: 'عِنْدَمَا أَسْمَعُ «صَحِيحٌ أَنَّ»، أَتَوَقَّعُ أَنْ أَسْمَعَ ______ .',
    homework: {
      core: 'Write the four-paragraph plan with the thesis and one concession–refutation pair.',
      develop: 'Expand to 150 words with both conditionals and a subjunctive trigger.',
      stretch: 'Website writing task: a 150–165-word essay with all nine Range markers.',
    },
    wordsSource: 'The five words come from the website P5-L10 vocabulary (listening to social-issue texts).',
  },
  remember: 'Remember: plan BOTH marks — four paragraphs for the argument (thesis, evidence, balance, conclusion) and nine ticks for Range. Concession -u, answered by ghayra anna; close with wa-bināʾan ʿalā mā sabaqa + -a.',
});

module.exports = { meta, slides };
