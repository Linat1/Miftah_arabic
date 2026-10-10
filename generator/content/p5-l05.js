'use strict';
/* P5-L05 · Global Justice — International Responsibility and the Arab World — website: Pathways › Progression › P5 › P5-L05 (closing an argument like a
 * UN report: وَبِنَاءً عَلَى مَا سَبَقَ / وَخُلَاصَةُ القَوْلِ; the refusal trigger يَرْفُضُ أَنْ + a verb in -a; the international-law passives يُنْتَهَكُ and
 * يُلْزَمُ بِـ; a Type 2 counterfactual exposing double standards). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing,
 * live builder, mission and visual game used as published, with waṣl alif shown without a kasra, لِكَيْ always written with its sukūn and عَلَاوَةً → عِلَاوَةً
 * in one quiz option (as in P4-L06 / P4-L09). Game cards 0, 3 and 5 not used. Sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P5')({
  n: 5, fileTitle: 'Global_Justice', chip: 'Argument',
  title: 'Global Justice — International Responsibility and the Arab World', arabic: 'العَدَالَةُ العَالَمِيَّةُ — المَسْؤُولِيَّةُ الدَّوْلِيَّةُ وَالعَالَمُ العَرَبِيُّ',
  focus: 'Close an argument like a UN report — wa-bināʾan ʿalā mā sabaqa and wa-khulāṣatu l-qawl, refuse with yarfuḍu an + a verb in -a, centre the law with the passives yuntahaku and yulzamu bi-, and expose double standards with law … la-.',
  icon: 'FaScaleBalanced', iconSet: 'fa6',
});

const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ').replace(/عَلَاوَةً/g, 'عِلَاوَةً'));
const site = fix(D.site('P5-L05'));
const RH = [['Conclusion connectors', 'wa-bināʾan ʿalā mā sabaqa · wa-khulāṣatu l-qawl'], ['Refusal trigger', 'yarfuḍu an + verb in -a'], ['International-law passives', 'yuntahaku · yulzamu bi-'], ['Counterfactual analysis', 'law + past → la-']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P5-L05', {
  support: `• Core: one conclusion with wa-bināʾan ʿalā mā sabaqa and one refusal with yarfuḍu an (website Core). Develop: add a law passive and a Type 2 counterfactual (110 words). Stretch: 120 words with both conditionals, the past perfect and two conclusion connectors.
• Sensitivity: this lesson touches conflict zones, civilian suffering and massacres. Some students may have family affected by current conflicts. Keep the discussion on PRINCIPLES (law, accountability, equal standards), let students voice strong feelings respectfully, avoid graphic detail, and follow the school’s policy on contested political topics and safeguarding.
• Faith link (optional): «يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ لِلَّهِ شُهَدَاءَ بِالقِسْطِ، وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَى أَلَّا تَعْدِلُوا» (al-Māʾida 5:8) — justice even towards those you dislike: the Qur’anic answer to double standards. Also «إِنَّ اللهَ يَأْمُرُ بِالعَدْلِ وَالإِحْسَانِ» (al-Naḥl 16:90).
• Grammar links: wa-bināʾan ʿalā mā sabaqa (P5-L01) · an + -a triggers (P5-L03, P5-L04) · passives (P5-L02) · past perfect kānat … qad and Type 1 / Type 2 (P3, P4).`,
  teach: 'Formal conclusion connectors, yarfuḍu an + -a, the law passives yuntahaku / yulzamu bi-, Type 2 on double standards.',
  wedo: 'Match the justice pictures, build a justice line, sort conclusion / refusal / law passive.',
  next: { nextCode: 'P5-L06', nextTitle: 'Youth and Society — The Arab Generation’s Challenges and Power', nextAr: 'الشَّبَابُ وَالمُجْتَمَعُ' },
  objectives: ['Analyse global-justice issues with international-law and diplomacy vocabulary.', 'Close an argument with wa-bināʾan ʿalā mā sabaqa and wa-khulāṣatu l-qawl.', 'Use the refusal trigger yarfuḍu an + a verb in -a.', 'Form the international-law passives yuntahaku and yulzamu bi-.'],
  rulesAr: 'الخَوَاتِمُ الرَّسْمِيَّةُ وَالرَّفْضُ وَالمَبْنِيُّ لِلْمَجْهُولِ',
  ruleEx: [['وَبِنَاءً عَلَى مَا سَبَقَ، يُعَدُّ إِصْلَاحُ النِّظَامِ الدَّوْلِيِّ ضَرُورَةً'], ['يَرْفُضُ النَّاشِطُونَ أَنْ تَسْتَمِرَّ ازْدِوَاجِيَّةُ المَعَايِيرِ'], ['يُنْتَهَكُ القَانُونُ الدَّوْلِيُّ فِي مَنَاطِقِ النِّزَاعِ'], ['لَوْ طُبِّقَ القَانُونُ الدَّوْلِيُّ بِالتَّسَاوِي، لَكَانَ العَالَمُ أَكْثَرَ عَدْلًا']],
  doNow: {
    questions: [
      q('What does العَدَالَةُ الدَّوْلِيَّةُ mean?', ['international justice', 'a national court', 'a state border'], 'Prepared at home (P5-L04).'),
      q('What does ازْدِوَاجِيَّةُ المَعَايِيرِ mean?', ['double standards', 'two languages', 'high standards'], 'Prepared at home (P5-L04).'),
      q('What does الإِفْلَاتُ مِنَ العِقَابِ mean?', ['impunity (escaping punishment)', 'a fair punishment', 'a prison escape film'], 'Prepared at home (P5-L04).'),
      q('Complete: يَمْنَعُ القَانُونُ أَنْ ___ البَيَانَاتُ الشَّخْصِيَّةُ.', ['تُبَاعَ', 'تُبَاعُ', 'بِيعَتْ'], 'P5-L04: yamnaʿu an + a passive in -a.'),
      q('Complete: لَا يَنْبَغِي أَنْ ___ القَانُونُ أَنْ تُرَاقَبَ المُحَادَثَاتُ.', ['يُبِيحَ', 'يُبِيحُ', 'أَبَاحَ'], 'P5-L04: two an — two verbs in -a.'),
    ],
    keyIdea: { text: 'A strong essay ends by drawing everything together — and refusal is one more an + -a trigger.', ar: '{w|وَبِنَاءً عَلَى مَا سَبَقَ}، … · يَرْفُضُ أَنْ {e|تَسْتَمِرَّ} …' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P5-L04. Questions 4–5 retrieve prohibition / permission + -a (P5-L04) — today refusal joins the same family: yarfuḍu an + -a.',
  },
  routes: {
    core: ['I can name 8 global-justice words.', 'I can close with wa-bināʾan ʿalā mā sabaqa.'],
    develop: ['I can use yarfuḍu an + a verb in -a.', 'I can use yuntahaku and yulzamu bi-.'],
    stretch: ['I can expose double standards with a Type 2.', 'I can write a 120-word global-justice analysis.'],
  },
  bridge: [
    { ar: 'عَدَالَةٌ', urdu: 'عدالت', tr: 'adālat', en: 'Arabic: justice · Urdu: a court of law' },
    { ar: 'قَانُونٌ', urdu: 'قانون', tr: 'qānūn', en: 'a law' },
    { ar: 'خُلَاصَةٌ', urdu: 'خلاصہ', tr: 'khulāsa', en: 'a summary (وَخُلَاصَةُ القَوْلِ = in summary)' },
    { ar: 'مَسْؤُولِيَّةٌ', urdu: 'مسئولیت', tr: 'masʾūliyat', en: 'responsibility' },
    { ar: 'حِمَايَةٌ', urdu: 'حمایت', tr: 'himāyat', en: 'Arabic: protection · Urdu: support' },
  ],
  bridgeNotes: 'URDU BRIDGE: قانون, خلاصہ and مسئولیت are shared — and Urdu خلاصہ gives you the conclusion connector وَخُلَاصَةُ القَوْلِ for free. Careful: Urdu عدالت = a court, but Arabic العَدَالَةُ = JUSTICE (a court = مَحْكَمَةٌ). Urdu حمایت = support; Arabic الحِمَايَةُ = PROTECTION (مَسْؤُولِيَّةُ الحِمَايَةِ = the responsibility to protect).',
  core: ['وَبِنَاءً عَلَى مَا سَبَقَ', 'وَخُلَاصَةُ القَوْلِ', 'يَرْفُضُ أَنْ', 'يَنْتَهِكُ', 'يُنْتَهَكُ', 'يُلْزَمُ بِـ', 'العَدَالَةُ الدَّوْلِيَّةُ', 'القَانُونُ الدَّوْلِيُّ الإِنْسَانِيُّ', 'مَسْؤُولِيَّةُ الحِمَايَةِ', 'ازْدِوَاجِيَّةُ المَعَايِيرِ', 'الإِفْلَاتُ مِنَ العِقَابِ', 'المُحَاسَبَةُ الدَّوْلِيَّةُ'],
  forms: {
    'يَرْفُضُ أَنْ': { tag: 'he · she · they', forms: [{ l: 'she / it (f.)', ar: 'تَرْفُضُ أَنْ' }, { l: 'they', ar: 'يَرْفُضُونَ أَنْ' }] },
    'يَنْتَهِكُ': hs('تَنْتَهِكُ'), 'يُنْتَهَكُ': hs('تُنْتَهَكُ'), 'يُلْزَمُ بِـ': { tag: 'he · she · they', forms: [{ l: 'she / it (f.)', ar: 'تُلْزَمُ بِـ' }, { l: 'they', ar: 'يُلْزَمُونَ بِـ' }] },
    'يُلْزِمُ بِـ': hs('تُلْزِمُ بِـ'), 'يَتَحَمَّلُ المَسْؤُولِيَّةَ': hs('تَتَحَمَّلُ المَسْؤُولِيَّةَ'),
    'قَرَارُ مَجْلِسِ الأَمْنِ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'قَرَارَاتُ مَجْلِسِ الأَمْنِ' }] }, 'مَبْدَأٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'مَبَادِئُ' }] },
  },
  vocabNotes: {
    0: 'Conclusion connectors open the LAST sentence and draw the argument together — never a new point. وَمِنَ المُنْطَلَقِ ذَاتِهِ (from the same starting point) links two related points. المُسَبِّبُ المُوَسَّعُ and التَّرْكِيبُ المَقَالِيُّ are the website’s grammar labels (extended trigger, essay construction), not essay vocabulary.',
    1: 'Global justice: سِيَادَةُ الدَّوْلَةِ (state sovereignty) vs مَسْؤُولِيَّةُ الحِمَايَةِ (responsibility to protect) — the central tension of the topic. ازْدِوَاجِيَّةُ المَعَايِيرِ (double standards) and الإِفْلَاتُ مِنَ العِقَابِ (impunity) are the key criticisms.',
    2: 'Active and passive pairs: يَنْتَهِكُ (violates) → يُنْتَهَكُ (is violated) · يُلْزِمُ بِـ (obliges to) → يُلْزَمُ بِـ (is obliged to). Same letters — only the vowels change.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · formal conclusion connectors (website rule 1, teaching point 1, builder task 3) · Core', title: 'Close it like a UN report', ar: 'الخَاتِمَةُ الرَّسْمِيَّةُ',
      cols: [{ label: 'Connector', w: 3.3, size: 19 }, { label: 'Meaning', w: 2.1 }, { label: 'What follows (website texts)', w: 6.93, size: 17 }],
      rows: [
        { core: true, cells: ['{w|وَبِنَاءً عَلَى مَا سَبَقَ}', 'based on the above', '{w|وَبِنَاءً عَلَى مَا سَبَقَ}، يُعَدُّ إِصْلَاحُ مَجْلِسِ الأَمْنِ ضَرُورَةً.'] },
        { core: true, cells: ['{w|وَبِنَاءً عَلَى مَا سَبَقَ}', '+ necessity -a', '{w|وَبِنَاءً عَلَى مَا سَبَقَ}، مِنَ الضَّرُورِيِّ أَنْ {e|يُصْلَحَ} النِّظَامُ الدَّوْلِيُّ.'] },
        { cells: ['{k|وَخُلَاصَةُ القَوْلِ}', 'in summary', '{k|وَخُلَاصَةُ القَوْلِ}، لَا عَدَالَةَ دُونَ مُحَاسَبَةٍ.'] },
        { cells: ['{m|وَمِنَ المُنْطَلَقِ ذَاتِهِ}', 'from the same point', '{m|وَمِنَ المُنْطَلَقِ ذَاتِهِ}، تَجِبُ المُسَاوَاةُ فِي التَّطْبِيقِ.'] },
        { cells: ['✗ وَأَيْضًا · ثُمَّ', 'weak opener', '✗ وَأَيْضًا، مِنَ الضَّرُورِيِّ … → ✓ {w|وَبِنَاءً عَلَى مَا سَبَقَ}، …'] },
      ],
      ltr: true,
      foot: 'Website common error: using a conclusion connector to add a NEW point. It closes the argument — it never opens a new one.',
      notes: `GRAMMAR PART 1 — website rule “Conclusion connectors”, teaching point 1 and builder task 3 (“Formalise the conclusion”).
Three closing shapes to copy: يُعَدُّ … ضَرُورَةً (is considered a necessity) · مِنَ الضَّرُورِيِّ أَنْ + -a (necessity subjunctive) · لَا + noun + دُونَ (no X without Y: لَا عَدَالَةَ دُونَ مُحَاسَبَةٍ).
Row 5: the website mission contrasts the formal conclusion with وَأَيْضًا and ثُمَّ — fine in speech, too weak to close an essay.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · the refusal trigger (website rule 2, teaching point 2, mistake 1 and mission) · Develop', title: 'Refuse it — then -a', ar: 'يَرْفُضُ أَنْ',
      cards: [
        { chip: 'ACTIVE · CORE', color: '1D5FBF', head: 'أَنْ تَسْتَمِرَّ', big: 'يَرْفُضُ النَّاشِطُونَ أَنْ تَسْتَمِرَّ ازْدِوَاجِيَّةُ المَعَايِيرِ.', en: 'Activists refuse to let double standards continue.', clue: 'tastamirr-A' },
        { chip: 'THEY · DEVELOP', color: 'C0386B', head: 'أَنْ يَخْضَعُوا', big: 'يَرْفُضُ القَادَةُ أَنْ يَخْضَعُوا لِلْمُحَاسَبَةِ.', en: 'The leaders refuse to be held to account.', clue: 'they: the -na drops' },
        { chip: 'PASSIVE · STRETCH', color: '6B4C9A', head: 'أَنْ يُفْلِتَ', big: 'تَرْفُضُ الشُّعُوبُ أَنْ يُفْلِتَ المُجْرِمُونَ مِنَ العِقَابِ.', en: 'Peoples refuse to let criminals escape punishment.', clue: 'yuflit-A' },
      ],
      error: { text: 'Website mistake 1 and the mission error spot: after an the verb ends in -a; with “they” the final -na drops.', pairs: [['أَنْ تَسْتَمِرَّ الازْدِوَاجِيَّةُ', 'أَنْ تَسْتَمِرُّ الازْدِوَاجِيَّةُ'], ['أَنْ يَخْضَعُوا', 'أَنْ يَخْضَعُونَ']] },
      notes: `GRAMMAR PART 2 — website rule “Refusal trigger”, teaching point 2 (“Refusal joins insistence, demand, prohibition and permission”), mistake 1 and the mission error spot.
The family so far: يُصِرُّ عَلَى أَنْ · يُطَالِبُ بِأَنْ · يَدْعُو إِلَى أَنْ (P5-L03) · يَمْنَعُ أَنْ · يُبِيحُ أَنْ (P5-L04) · يَرْفُضُ أَنْ (today). One rule for all six: an + -a.
Card 2: يَخْضَعُونَ → أَنْ يَخْضَعُوا — the plural -ūna loses its nūn (and gains a silent alif) after an.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · international-law passives (website rule 3, table, mistake 2 and sorter) · Develop', title: 'Centre the law: active → passive', ar: 'المَبْنِيُّ لِلْمَجْهُولِ فِي القَانُونِ',
      cols: [{ label: 'Active', w: 2.1, size: 20 }, { label: 'Passive', w: 2.1, size: 20 }, { label: 'Meaning', w: 2.2 }, { label: 'Example (website texts)', w: 5.93, size: 17 }],
      rows: [
        { core: true, cells: ['يَنْتَهِكُ', '{e|يُنْتَهَكُ}', 'is violated', '{e|يُنْتَهَكُ} القَانُونُ الدَّوْلِيُّ فِي مَنَاطِقِ النِّزَاعِ'] },
        { core: true, cells: ['يُلْزِمُ بِـ', '{k|يُلْزَمُ بِـ}', 'is obliged to', '{k|تُلْزَمُ} الدُّوَلُ {k|بِالامْتِثَالِ} لِلْمُعَاهَدَاتِ'] },
        { cells: ['يُحَاسِبُ', '{w|يُحَاسَبُ}', 'is held to account', '{w|يُحَاسَبُ} المُنْتَهِكُونَ أَمَامَ القَضَاءِ الدَّوْلِيِّ'] },
        { cells: ['طَبَّقَ', '{m|طُبِّقَ}', 'was applied', 'لَمْ {m|يُطَبَّقْ} مَبْدَأُ المَسْؤُولِيَّةِ عَنِ الحِمَايَةِ بِالتَّسَاوِي'] },
        { cells: ['يُشِيرُ إِلَى', '{p|يُشَارُ إِلَى}', 'it is noted', '{p|يُشَارُ إِلَى} أَنَّ المَبْدَأَ لَمْ يُطَبَّقْ بِالتَّسَاوِي'] },
      ],
      ltr: true,
      foot: 'Website mistake 2: tulzamu … ʿalā ✗ → tulzamu bi- ✓ — yulzamu is fixed with bi-.',
      notes: `GRAMMAR PART 3 — website rule “International-law passives” (“The passive centres the law or the obligation”), the table, mistake 2, the sorter and the reading.
Pattern: passive present = yu- … -a- (yuntahaku · yulzamu · yuḥāsabu); passive past = u … i (ṭubbiqa). Row 4: لَمْ يُطَبَّقْ — the jussive after lam (sukūn).
Why passive? The report focuses on the LAW being violated, not on naming who did it — the neutral register of international bodies.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the full analysis toolkit (website rule 4, mistake 3 and writing model) · Stretch', title: 'From report to conclusion', ar: 'أَدَوَاتُ التَّحْلِيلِ',
      cols: [{ label: 'Tool', w: 2.3 }, { label: 'Example (website texts)', w: 7.6, size: 17 }, { label: 'Range', w: 2.43 }],
      rows: [
        { core: true, cells: ['reported speech', '{p|يُؤَكِّدُ} الخُبَرَاءُ {p|أَنَّ} القَانُونَ الدَّوْلِيَّ الإِنْسَانِيَّ يُنْتَهَكُ', 'yuʾakkidu anna'] },
        { cells: ['past perfect', '{w|كَانَتِ} الأُمَمُ المُتَّحِدَةُ {w|قَدْ} أَقَرَّتْ هٰذِهِ المَبَادِئَ لِكَيْ يُحْمَى المَدَنِيُّونَ', 'kānat … qad'] },
        { cells: ['Type 1', '{k|إِذَا} الْتَزَمَتِ الدُّوَلُ بِالمِيثَاقِ بِالتَّسَاوِي، {k|سَيُحْدِثُ} ذٰلِكَ تَحَوُّلًا جَذْرِيًّا', 'idhā … sa-'] },
        { core: true, cells: ['Type 2', '{m|لَوْ} طُبِّقَ القَانُونُ بِالتَّسَاوِي، {m|لَكَانَ} العَالَمُ أَعْدَلَ', 'law … la-'] },
        { cells: ['conclusion', '{e|وَبِنَاءً عَلَى مَا سَبَقَ}، مِنَ الضَّرُورِيِّ أَنْ يُصْلَحَ النِّظَامُ الدَّوْلِيُّ', 'synthesis + -a'] },
      ],
      ltr: true,
      foot: 'Website mistake 3: law … sa-yakūnu ✗ → law … la-kāna ✓ — a Type 2 result takes la-, not sa-.',
      notes: `GRAMMAR PART 4 — website rule “Counterfactual analysis” (“A Type 2 exposes double standards”), mistake 3 and the writing model.
Row 3 vs row 4: Type 1 = a REAL possibility (idhā … sa-) · Type 2 = what SHOULD have happened (law … la-). The Type 2 is the sharpest tool against double standards: “had the law been applied equally …”.
Stretch students use all five rows in order — that IS the website writing model.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me write a global-justice analysis',
    steps: [
      { head: 'Report', ar: '{p|يُؤَكِّدُ} … {p|أَنَّ} … {e|يُنْتَهَكُ}', think: 'Passive.' },
      { head: 'Background', ar: '{w|كَانَتْ} … {w|قَدْ} أَقَرَّتْ …', think: 'Past perfect.' },
      { head: 'Refuse', ar: 'يَرْفُضُ … أَنْ {k|تَسْتَمِرَّ}', think: 'an + -a.' },
      { head: 'Conclude', ar: '{m|لَوْ} … {m|لَكَانَتْ} · {e|وَبِنَاءً عَلَى مَا سَبَقَ}', think: 'Synthesise.' },
    ],
    legend: ['p', 'e', 'w', 'k', 'm'], legendLabels: { p: 'REPORT', e: 'LAW / CLOSE', w: 'PAST PERFECT', k: 'REFUSAL', m: 'TYPE 2' },
    model: '{p|يُؤَكِّدُ} الخُبَرَاءُ {p|أَنَّ} القَانُونَ الدَّوْلِيَّ الإِنْسَانِيَّ {e|يُنْتَهَكُ} فِي مَنَاطِقِ النِّزَاعِ. {w|كَانَتِ} الأُمَمُ المُتَّحِدَةُ {w|قَدْ} أَقَرَّتْ هٰذِهِ المَبَادِئَ لِكَيْ يُحْمَى المَدَنِيُّونَ، غَيْرَ أَنَّ التَّطْبِيقَ يَظَلُّ رَهِينًا بِالمَصَالِحِ. {k|وَيَرْفُضُ} النَّاشِطُونَ {k|أَنْ تَسْتَمِرَّ} ازْدِوَاجِيَّةُ المَعَايِيرِ. {m|وَلَوْ} طُبِّقَ القَانُونُ بِالتَّسَاوِي، {m|لَكَانَ} العَالَمُ أَكْثَرَ عَدْلًا. {e|وَبِنَاءً عَلَى مَا سَبَقَ}، مِنَ الضَّرُورِيِّ أَنْ يُصْلَحَ النِّظَامُ الدَّوْلِيُّ.',
    modelEn: 'Experts confirm that international humanitarian law is violated in conflict zones. The United Nations had adopted these principles so that civilians would be protected; however, application remains hostage to interests. Activists refuse to let double standards continue. Had the law been applied equally, the world would be more just. Based on the above, it is essential that the international system be reformed.',
    notes: 'I DO (3 min) — from the website reading and writing model. Think aloud: “Report first: yuʾakkidu … anna + the passive yuntahaku. Background: kānat … qad aqarrat. Now the refusal: yarfuḍu … an tastamirrA. The sharpest point: law ṭubbiqa … LA-kāna. And close — not a new point, a synthesis: wa-bināʾan ʿalā mā sabaqa + min al-ḍarūrī an yuṣlaḥA.”',
  },
  patternEn: ['international humanitarian law is systematically violated in conflict zones', 'many activists refuse to let double standards continue', 'based on the above, reforming the Security Council is an indispensable step'],
  gameKey: 'P5-L05',
  game: {
    title: 'Shared responsibility: match the picture',
    pick: [1, 2, 4],
    en: ['Countries should cooperate to solve problems.', 'Humanitarian aid is essential in crises.', 'Countries share a responsibility to protect the environment.'],
    icons: [[['fa6', 'FaHandshake', '1D5FBF'], ['fa6', 'FaGlobe', '1E6B52']], [['fa6', 'FaKitMedical', 'C0386B'], ['fa6', 'FaHandHoldingHeart', 'C77700']], [['fa6', 'FaSeedling', '1E6B52'], ['fa6', 'FaEarthAfrica', '1D5FBF']]],
    labels: ['cooperation', 'humanitarian aid', 'the environment'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6; card 3 not used — waṣl kasra). Card 1 already has an + -a: يَجِبُ أَنْ تَتَعَاوَنَ. Upgrade each card into a P5 sentence: تَرْفُضُ الشُّعُوبُ أَنْ تُتْرَكَ الدُّوَلُ الفَقِيرَةُ وَحْدَهَا · تُلْزَمُ الدُّوَلُ بِحِمَايَةِ البِيئَةِ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a justice line (website live builder)', title: 'Law passive + refusal + conclusion', ar: 'ابْنِ سَطْرًا عَنِ العَدَالَةِ',
      cols: [{ label: '1 · Law passive', w: 4.1, size: 16 }, { label: '2 · Refusal (yarfuḍu an)', w: 4.1, size: 16 }, { label: '3 · Formal conclusion', w: 4.13, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then underline the passive, circle the verb in -a and box the connector.',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: column 2 row 2 (يُفْلِتَ — refusal + a verb in -a). Stretch: add a Type 2 between columns 2 and 3: وَلَوْ طُبِّقَ القَانُونُ بِالتَّسَاوِي، لَكَانَ …`,
    },
  ],
  sorterTitle: 'Conclusion, refusal — or law passive?',
  sorterCats: ['conclusion connector', 'refusal (yarfuḍu an)', 'law passive'],
  sorterNotes: 'Then turn one law passive into a refusal: يُنْتَهَكُ القَانُونُ → يَرْفُضُ النَّاشِطُونَ أَنْ يُنْتَهَكَ القَانُونُ. What happened to the final vowel?',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: { ...site.writing, prompt: 'Write a 110–120-word global-justice analysis. Open with reported speech and a law passive (yuntahaku), use the past perfect for what the UN had adopted, add both conditional types and the refusal trigger yarfuḍu an, and close with wa-bināʾan ʿalā mā sabaqa / wa-khulāṣatu l-qawl + a verb in -a.', checklist: ['A law passive (yuntahaku / yulzamu bi-) and reported speech.', 'The past perfect (kānat … qad) and both conditional types.', 'The refusal trigger yarfuḍu an + a verb in -a.', 'A formal conclusion connector + a verb in -a.'] }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('Passive: يُنْتَهَكُ.', 'Passive: yuntahaku.').replace('Refusal: يَرْفُضُ أَنْ.', 'Refusal: yarfuḍu an.') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; عَلَاوَةً → عِلَاوَةً in one quiz option; rule formulas, pattern tips, writing prompt and checklist in transliteration; sorter headings in transliteration; game cards 0, 3 and 5 not used; the conclusion, refusal, passive and toolkit tables are teacher-built from the website texts. All other website items are used as published.',
  hints: ['an tastamirru?', 'tulzamu ʿalā?', 'law … sa-yakūnu?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 5.\nListen for: yuntahaku · yarfuḍu … an · wa-bināʾan ʿalā mā sabaqa.',
  listenRoutes: 'Core: questions 1, 3 and 5. Develop / Stretch: all 5 — and note the two conclusion connectors at the end.',
  gloss: [
    ['يَقُولُ الخَبِيرُ القَانُونِيُّ: يُؤَكِّدُ المُخْتَصُّونَ أَنَّ القَانُونَ الدَّوْلِيَّ الإِنْسَانِيَّ يُنْتَهَكُ بِشَكْلٍ مَنْهَجِيٍّ فِي مَنَاطِقِ النِّزَاعِ.', 'The legal expert says: specialists confirm that international humanitarian law is systematically violated in conflict zones.'],
    ['وَيَكْمُنُ جَوْهَرُ الأَزْمَةِ فِي ازْدِوَاجِيَّةِ المَعَايِيرِ الَّتِي تُمَارِسُهَا بَعْضُ الدُّوَلِ الكُبْرَى.', 'The core of the crisis lies in the double standards practised by some major powers.'],
    ['تُلْزَمُ الدُّوَلُ المُوَقِّعَةُ بِالامْتِثَالِ لِلْمُعَاهَدَاتِ، غَيْرَ أَنَّ التَّطْبِيقَ يَظَلُّ رَهِينًا بِالمَصَالِحِ السِّيَاسِيَّةِ.', 'Signatory states are obliged to comply with the treaties; however, application remains hostage to political interests.'],
    ['يَرْفُضُ كَثِيرٌ مِنَ النَّاشِطِينَ أَنْ تَسْتَمِرَّ هٰذِهِ الازْدِوَاجِيَّةُ. وَلَوْ طُبِّقَ القَانُونُ بِلَا ازْدِوَاجِيَّةٍ، لَكَانَتِ المَجَازِرُ أَقَلَّ حِدَّةً.', 'Many activists refuse to let these double standards continue. Had the law been applied without double standards, the massacres would have been less severe.'],
    ['وَبِنَاءً عَلَى مَا سَبَقَ، يُعَدُّ إِصْلَاحُ مَجْلِسِ الأَمْنِ خُطْوَةً لَا غِنَى عَنْهَا. وَخُلَاصَةُ القَوْلِ، لَا عَدَالَةَ عَالَمِيَّةً دُونَ مُحَاسَبَةٍ مُتَسَاوِيَةٍ.', 'Based on the above, reforming the Security Council is an indispensable step. In summary, there is no global justice without equal accountability.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا المُشْكِلَةُ؟ صِفْهَا بِفِعْلٍ مَبْنِيٍّ لِلْمَجْهُولِ.' },
      { route: 'develop', ar: 'مَا الَّذِي يَرْفُضُهُ النَّاشِطُونَ؟' },
      { route: 'stretch', ar: 'كَيْفَ تَخْتِمُ حُجَّتَكَ بِرَابِطٍ خِتَامِيٍّ؟' },
    ],
    stems: [
      { route: 'core', ar: 'يُنْتَهَكُ ______ فِي مَنَاطِقِ النِّزَاعِ.' },
      { route: 'develop', ar: 'يَرْفُضُ النَّاشِطُونَ أَنْ ______ .' },
      { route: 'stretch', ar: 'وَبِنَاءً عَلَى مَا سَبَقَ، مِنَ الضَّرُورِيِّ أَنْ ______ .' },
    ],
    modelEn: ['What is the problem?', 'International law is violated, and states are obliged to comply in theory only.', 'And how do you conclude?', 'Based on the above, it is essential that the international system be reformed.'],
    notes: 'Website prompts and model. Pair task: “UN press conference” — A states the problem with a law passive; B refuses with yarfuḍu an …; together they close with wa-bināʾan ʿalā mā sabaqa. To a girl: صِفِيهَا · تَخْتِمِينَ حُجَّتَكِ.',
  },
  write: {
    core: { amount: '2 sentences', how: 'Website Core: one conclusion with wa-bināʾan ʿalā mā sabaqa and one refusal with yarfuḍu an.' },
    develop: { amount: '110 words', how: 'Website Develop: add a law passive and a Type 2 counterfactual.' },
    stretch: { amount: '110–120 words', how: 'Website Stretch: both conditionals, the past perfect and two conclusion connectors.' },
  },
  frames: {
    core: [
      { en: 'International law is violated in …', ar: 'يُنْتَهَكُ القَانُونُ الدَّوْلِيُّ فِي ______ .' },
      { en: 'States are obliged to …', ar: 'تُلْزَمُ الدُّوَلُ بِاحْتِرَامِ ______ .' },
      { en: 'Activists refuse to let … continue.', ar: 'يَرْفُضُ النَّاشِطُونَ أَنْ تَسْتَمِرَّ ______ .' },
      { en: 'Based on the above, it is essential that …', ar: 'وَبِنَاءً عَلَى مَا سَبَقَ، مِنَ الضَّرُورِيِّ أَنْ ______ .' },
    ],
    develop: [
      { en: 'Experts confirm that …', ar: 'يُؤَكِّدُ الخُبَرَاءُ أَنَّ ______ .' },
      { en: 'The UN had adopted … so that …', ar: 'كَانَتِ الأُمَمُ المُتَّحِدَةُ قَدْ أَقَرَّتْ ______ لِكَيْ ______ .' },
      { en: 'Had the law been applied equally, …', ar: 'لَوْ طُبِّقَ القَانُونُ بِالتَّسَاوِي، لَكَانَ ______ .' },
      { en: 'In summary, there is no … without …', ar: 'وَخُلَاصَةُ القَوْلِ، لَا ______ دُونَ ______ .' },
    ],
    bank: ['مَنَاطِقِ النِّزَاعِ', 'المُعَاهَدَاتِ', 'ازْدِوَاجِيَّةُ المَعَايِيرِ', 'يُصْلَحَ النِّظَامُ الدَّوْلِيُّ', 'يُفْلِتَ المُنْتَهِكُونَ مِنَ العِقَابِ', 'هٰذِهِ المَبَادِئَ', 'يُحْمَى المَدَنِيُّونَ', 'العَالَمُ أَكْثَرَ عَدْلًا', 'عَدَالَةَ', 'مُحَاسَبَةٍ', 'حِمَايَةَ حَقِيقِيَّةً', 'مَجْلِسِ الأَمْنِ'],
  },
  stretch: [
    ['بِشَكْلٍ مَنْهَجِيٍّ', 'systematically'],
    ['يَكْمُنُ جَوْهَرُ الأَزْمَةِ فِي', 'the core of the crisis lies in'],
    ['رَهِينًا بِالمَصَالِحِ السِّيَاسِيَّةِ', 'hostage to political interests'],
    ['تَحَوُّلًا جَذْرِيًّا', 'a radical transformation'],
    ['أَقَلَّ حِدَّةً', 'less severe'],
  ],
  modelEn: 'Legal experts confirm that international humanitarian law is systematically violated in conflict zones, and it is noted that the principle of the responsibility to protect has not been applied equally. The core of the crisis lies in the double standards practised by the major powers. The United Nations had adopted these principles so that civilians would be protected; however, application remains hostage to political interests. Many activists refuse to let these double standards continue. If states committed to the Charter equally, this would bring about a radical transformation. Had the law been applied without double standards, the massacres would have been less severe. Based on the above, it is essential that the international system be reformed so that peoples enjoy equal protection.',
  find: ['yuntahaku · yushāru ilā', 'kānat … qad aqarrat', 'yarfuḍu … an tastamirra', 'wa-bināʾan ʿalā mā sabaqa'],
  modelNotes: 'Website writing model. Evidence: يُؤَكِّدُ … أَنَّ … يُنْتَهَكُ · يُشَارُ إِلَى أَنَّ … لَمْ يُطَبَّقْ · كَانَتْ … قَدْ أَقَرَّتْ … لِكَيْ يُحْمَى · يَرْفُضُ … أَنْ تَسْتَمِرَّ · إِذَا الْتَزَمَتْ … سَيُحْدِثُ · لَوْ طُبِّقَ … لَكَانَتْ · وَبِنَاءً عَلَى مَا سَبَقَ … أَنْ يُصْلَحَ … لِكَيْ تَنْعَمَ.',
  selfCheck: [
    { route: 'core', text: 'My last sentence opens with wa-bināʾan ʿalā mā sabaqa — and adds no new point.' },
    { route: 'core', text: 'After yarfuḍu an my verb ends in -a (they: the -na drops).' },
    { route: 'develop', text: 'I used a law passive: yuntahaku or yulzamu bi- (not ʿalā).' },
    { route: 'develop', text: 'My Type 2 result starts with la- (not sa-).' },
    { route: 'stretch', text: 'I used the past perfect, both conditionals and two connectors.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['بِشَكْلٍ مَنْهَجِيٍّ', 'systematically'], ['جَوْهَرُ', 'the core, essence'], ['تُمَارِسُهَا', '(which) they practise'], ['المُوَقِّعَةُ', 'signatory'], ['الامْتِثَالِ', 'compliance'],
    ['رَهِينًا', 'hostage, dependent'], ['المَجَازِرُ', 'massacres'], ['أَقَرَّتْ', 'adopted, approved'], ['المَدَنِيُّونَ', 'civilians'], ['لَا غِنَى عَنْهَا', 'indispensable'],
  ],
  prep: {
    words: [['جِيلُ الشَّبَابِ', 'the youth generation', 'pl. أَجْيَالٌ'], ['المُشَارَكَةُ السِّيَاسِيَّةُ', 'political participation', '—'], ['صَوْتُ الشَّبَابِ', 'the youth voice', 'pl. أَصْوَاتٌ'], ['الطُّمُوحُ', 'ambition', '—'], ['يُعِيدُ تَعْرِيفَ', 'redefines', 'f. تُعِيدُ تَعْرِيفَ']],
    questionEn: 'What is the biggest challenge facing young Arabs today?',
    questionAr: 'أَكْبَرُ تَحَدٍّ يُوَاجِهُهُ الشَّبَابُ اليَوْمَ هُوَ ______ .',
    homework: {
      core: 'Write one refusal (yarfuḍu an) and one conclusion (wa-bināʾan ʿalā mā sabaqa) about global justice.',
      develop: 'Add a law passive and a Type 2 counterfactual (110 words).',
      stretch: 'Website writing task: a 110–120-word global-justice analysis.',
    },
    wordsSource: 'The five words come from the website P5-L06 vocabulary (youth and society).',
  },
  remember: 'Remember: close with wa-bināʾan ʿalā mā sabaqa — a synthesis, not a new point; yarfuḍu an + a verb in -A; yuntahaku (is violated) and yulzamu BI- (is obliged to); and law … LA- for the double standards.',
});

module.exports = { meta, slides };
