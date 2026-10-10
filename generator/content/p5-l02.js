'use strict';
/* P5-L02 · Migration and Displacement — A Global Crisis in Arabic — website: Pathways › Progression › P5 › P5-L02 (the humanitarian passives يُهَجَّرُ /
 * يُرَحَّلُ / يُودَعُ that centre the displaced person; active displacement verbs يَفِرُّ مِنْ / يَلْتَمِسُ اللُّجُوءَ; both conditionals incl. the negative
 * لَوْ لَمْ … لَمَا; humanising vs dehumanising language). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live
 * builder, mission and visual game used as published, with waṣl alif shown without a kasra and لِكَيْ always written with its sukūn. Game cards 0, 1 and 4
 * not used (waṣl / ḍamma on the initial alif). Sorter headings in transliteration. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P5')({
  n: 2, fileTitle: 'Migration_and_Displacement', chip: 'Report',
  title: 'Migration and Displacement — A Global Crisis in Arabic', arabic: 'الهِجْرَةُ وَالتَّهْجِيرُ — أَزْمَةٌ عَالَمِيَّةٌ بِالعَرَبِيَّةِ',
  focus: 'Report displacement with compassion and precision — humanitarian passives (yuhajjaru, yuraḥḥalu, yūdaʿu) that put the person first, active verbs for what people do (yafirru min, yaltamisu l-lujūʾ), both conditionals and humanising language.',
  icon: 'FaSuitcaseRolling', iconSet: 'fa6',
});

const hs = (she) => ({ tag: 'he · she (it)', forms: [{ l: 'she / it (f.)', ar: she }] });
const pl = (they) => ({ tag: 'he · they', forms: [{ l: 'they', ar: they }] });
const sp = (p) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: p }] });
const fix = (o) => JSON.parse(JSON.stringify(D.waslFix(o)).replace(/لِكَي(?!ْ)/g, 'لِكَيْ'));
const site = fix(D.site('P5-L02'));
const RH = [['Form II passive', 'yufaʿʿalu (yuhajjaru · yuraḥḥalu)'], ['Displacement verbs', 'yafirru min · yaltamisu l-lujūʾ'], ['Type 1 forward', 'idhā + past → sa-'], ['Type 2 backward', 'law + past → la- (negative la-mā)']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P5-L02', {
  support: `• SENSITIVITY FIRST: some students may be refugees, have refugee parents or grandparents, or relatives still displaced. Never ask students to share their own stories; keep examples general; allow anyone to write about migration for study or work instead. Check in privately after the lesson if a student seems affected.
• Core: two humanitarian passives centring the displaced person (website Core). Develop: add a Type 1 plan and a Type 2 counterfactual (100 words). Stretch: 110 words with the past perfect, both conditionals and a necessity subjunctive.
• Faith link (optional): the Hijra itself — the Prophet ﷺ and the Muhājirūn left their homes, and the Anṣār welcomed them: «وَيُؤْثِرُونَ عَلَىٰ أَنْفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ» (al-Ḥashr 59:9). Islam honours both the migrant and the host.
• Accuracy: UNHCR figures change every year; the website’s “about 40%” refers to the Arab region’s share of the world’s forcibly displaced in recent UN estimates — treat it as approximate.
• Grammar links: the passive (P4-L02 / L05) · both conditionals and la-mā (P3-L05 / P4-L04) · necessity subjunctive (P4-L04) · past perfect (P4-L07).`,
  teach: 'Form II passives that centre the person, choice vs force (yuhājiru vs yuhajjaru), both conditionals, humanising register.',
  wedo: 'Match migration pictures, build a humanitarian line, sort passive / active / conditional.',
  next: { nextCode: 'P5-L03', nextTitle: 'Gender Equality — Rights, Progress and Challenges', nextAr: 'المُسَاوَاةُ بَيْنَ الجِنْسَيْنِ' },
  objectives: ['Describe migration and displacement with precise humanitarian vocabulary.', 'Form the humanitarian passives yuhajjaru, yuraḥḥalu, yūdaʿu.', 'Use both conditional types in a humanitarian analysis.', 'Write a compassionate, formally rigorous migration analysis.'],
  rulesAr: 'المَبْنِيُّ لِلْمَجْهُولِ الإِنْسَانِيُّ وَتَحْلِيلُ الشَّرْطِ',
  ruleEx: [['يُهَجَّرُ المَلَايِينُ بِسَبَبِ النِّزَاعِ', 'يُرَحَّلُ طَالِبُ اللُّجُوءِ قَسْرًا'], ['يَفِرُّ المَدَنِيُّونَ مِنْ مَنَاطِقِ النِّزَاعِ', 'يَلْتَمِسُ اللَّاجِئُونَ الحِمَايَةَ الدَّوْلِيَّةَ'], ['إِذَا تَوَصَّلَ المُجْتَمَعُ الدَّوْلِيُّ إِلَى حُلُولٍ، سَتَتَرَاجَعُ مَوْجَاتُ النُّزُوحِ'], ['لَوْ لَمْ تَنْدَلِعِ الحُرُوبُ، لَمَا اضْطُرَّ المَلَايِينُ إِلَى الفِرَارِ']],
  doNow: {
    questions: [
      q('What does هِجْرَةٌ اضْطِرَارِيَّةٌ mean?', ['forced migration', 'migration for study', 'a migration office'], 'Prepared at home (P5-L01).'),
      q('What does طَالِبُ لُجُوءٍ mean?', ['an asylum seeker', 'a student abroad', 'a tourist'], 'Prepared at home (P5-L01).'),
      q('What does يُهَجَّرُ mean?', ['is displaced (forced to leave)', 'migrates by choice', 'returns home'], 'Prepared at home (P5-L01).'),
      q('Complete: صَحِيحٌ أَنَّ الاقْتِصَادَ ___ ، غَيْرَ أَنَّ الفَقْرَ ازْدَادَ.', ['نَمَا', 'يَنْمُوَ', 'لِيَنْمُوَ'], 'P5-L01: a conceded fact is real — no -a.'),
      q('Which connector opens the refutation?', ['غَيْرَ أَنَّ', 'صَحِيحٌ أَنَّ', 'لِكَيْ'], 'P5-L01: ghayra anna.'),
    ],
    keyIdea: { text: 'Grammar can show respect: the passive puts the PERSON first — what happened to them — without blaming them.', ar: '{e|يُهَجَّرُ} المَلَايِينُ · {e|يُودَعُ} النَّازِحُونَ فِي مُخَيَّمَاتٍ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P5-L01. Questions 4–5 retrieve the concession–refutation move (P5-L01) — use it again today: ṣaḥīḥun anna … ghayra anna …',
  },
  routes: {
    core: ['I can name 8 migration words.', 'I can use yuhajjaru and yūdaʿu with the person as subject.'],
    develop: ['I can tell yuhājiru (choice) from yuhajjaru (force).', 'I can add a Type 1 plan and a Type 2 regret.'],
    stretch: ['I can use la-mā and the past perfect.', 'I can write a compassionate 110-word analysis.'],
  },
  bridge: [
    { ar: 'هِجْرَةٌ · مُهَاجِرٌ', urdu: 'ہجرت · مہاجر', tr: 'hijrat · muhājir', en: 'migration · a migrant (the Hijra; 1947 in South Asian history)' },
    { ar: 'خَيْمَةٌ · مُخَيَّمٌ', urdu: 'خیمہ', tr: 'khaima', en: 'a tent · a camp' },
    { ar: 'حُدُودٌ', urdu: 'حدود', tr: 'hudūd', en: 'borders, limits' },
    { ar: 'حَقٌّ · حُقُوقٌ', urdu: 'حق · حقوق', tr: 'haq · huqūq', en: 'a right · rights' },
    { ar: 'كَرَامَةٌ', urdu: 'کرامت', tr: 'karāmat', en: 'Arabic: dignity · Urdu: a miracle (of a saint)' },
  ],
  bridgeNotes: 'URDU BRIDGE: ہجرت, مہاجر, خیمہ, حدود and حقوق are shared — مہاجر has deep meaning in South Asian history too. Careful: Urdu کرامت is a saint’s miracle; Arabic كَرَامَةُ اللَّاجِئِينَ = the DIGNITY of refugees — today’s key value.',
  core: ['يُهَجَّرُ', 'يُرَحَّلُ', 'يُودَعُ فِي مُخَيَّمٍ', 'هِجْرَةٌ اضْطِرَارِيَّةٌ', 'نُزُوحٌ دَاخِلِيٌّ', 'طَالِبُ لُجُوءٍ', 'تَهْجِيرٌ قَسْرِيٌّ', 'أَزْمَةٌ إِنْسَانِيَّةٌ', 'مُخَيَّمُ اللَّاجِئِينَ', 'الحَقُّ فِي اللُّجُوءِ', 'يَفِرُّ مِنْ', 'يَلْتَمِسُ اللُّجُوءَ'],
  forms: {
    'يُهَجَّرُ': pl('يُهَجَّرُونَ'), 'يُرَحَّلُ': pl('يُرَحَّلُونَ'), 'يُودَعُ فِي مُخَيَّمٍ': pl('يُودَعُونَ فِي مُخَيَّمَاتٍ'), 'يُحْرَمُ مِنْ': pl('يُحْرَمُونَ مِنْ'),
    'طَالِبُ لُجُوءٍ': sp('طَالِبُو لُجُوءٍ'), 'مُخَيَّمُ اللَّاجِئِينَ': sp('مُخَيَّمَاتُ اللَّاجِئِينَ'), 'أَزْمَةٌ إِنْسَانِيَّةٌ': sp('أَزَمَاتٌ إِنْسَانِيَّةٌ'),
    'يَفِرُّ مِنْ': pl('يَفِرُّونَ مِنْ'), 'يَعْبُرُ الحُدُودَ': hs('تَعْبُرُ الحُدُودَ'), 'يَلْتَمِسُ اللُّجُوءَ': pl('يَلْتَمِسُونَ اللُّجُوءَ'),
  },
  vocabNotes: {
    0: 'Humanitarian passives: ḍamma on the prefix + fatḥa before the last letter — يُهَجَّرُ (Form II) · يُودَعُ (Form IV, from أَوْدَعَ). The agent (who displaced them) is left out on purpose: الفَاعِلُ المَحْذُوفُ. The person stays at the centre.',
    1: 'Migration and displacement: نُزُوحٌ = displacement INSIDE one’s own country (نَازِحٌ); لُجُوءٌ = asylum ACROSS a border (لَاجِئٌ). هِجْرَةٌ is the general word; اضْطِرَارِيَّةٌ / قَسْرِيٌّ make it forced.',
    2: 'Displacement verbs and impact: the ACTIVE verbs tell what people do themselves — يَفِرُّ مِنْ (flees: doubled, فَرَّ) · يَلْتَمِسُ (seeks, Form VIII). The impact words name the human cost: trauma, family breakdown, loss of roots.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the humanitarian passive (website rule 1, teaching point 1 and vocabulary) · Core', title: 'Put the person first', ar: 'المَبْنِيُّ لِلْمَجْهُولِ الإِنْسَانِيُّ',
      cols: [{ label: 'Active', w: 2.0, size: 20 }, { label: 'Passive', w: 2.2, size: 20 }, { label: 'Form', w: 1.6 }, { label: 'Example (website texts)', w: 6.53, size: 17 }],
      rows: [
        { core: true, cells: ['يُهَجِّرُ', '{e|يُهَجَّرُ}', 'II', '{e|يُهَجَّرُ} المَلَايِينُ بِسَبَبِ النِّزَاعَاتِ المُسَلَّحَةِ.'] },
        { core: true, cells: ['يُرَحِّلُ', '{e|يُرَحَّلُ}', 'II', '{e|يُرَحَّلُ} طَالِبُ اللُّجُوءِ قَسْرًا.'] },
        { core: true, cells: ['يُودِعُ', '{e|يُودَعُ}', 'IV', 'وَ{e|يُودَعُ} كَثِيرُونَ فِي مُخَيَّمَاتٍ تَفْتَقِرُ إِلَى الخَدَمَاتِ.'] },
        { cells: ['يَحْرِمُ', '{m|يُحْرَمُ}', 'I', 'أَنَّ الأَطْفَالَ {m|يُحْرَمُونَ} مِنَ التَّعْلِيمِ.'] },
        { cells: ['فَتَحَ', '{m|فُتِحَتْ}', 'I (past)', 'إِذَا {m|فُتِحَتْ} مَمَرَّاتٌ إِنْسَانِيَّةٌ آمِنَةٌ …'] },
      ],
      ltr: true,
      foot: 'Present passive: yu- + fatḥa before the last letter (yuhajjaRu → yuhajjAru). Past passive: ḍamma first, kasra before the last (futiḥat).',
      notes: `GRAMMAR PART 1 — website rule “Form II passive”, teaching point 1 (“The humanitarian passive centres the person”), the vocabulary group “Humanitarian passives”, and the listening (rows 3–5).
Why passive? The person who suffers becomes the grammatical subject; who caused it is left out (الفَاعِلُ المَحْذُوفُ) — so the reader looks at the human being, not the politics.
Agreement: the verb before a plural subject stays singular (يُهَجَّرُ المَلَايِينُ); after it, it becomes plural (الأَطْفَالُ يُحْرَمُونَ).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · choice, force, action (website rule 2, mistake 1 and common error) · Core / Develop', title: 'Chose to go — or forced to go?', ar: 'الاخْتِيَارُ أَمِ الإِجْبَارُ؟',
      cards: [
        { chip: 'CHOICE · ACTIVE · CORE', color: '1E6B52', head: 'يُهَاجِرُ', big: 'هَاجَرَ لِلدِّرَاسَةِ · هَاجَرَتْ لِلْعَمَلِ', en: 'He migrated to study · she migrated for work.', clue: 'They decided.' },
        { chip: 'FORCE · PASSIVE · CORE', color: 'C0386B', head: 'يُهَجَّرُ', big: 'يُهَجَّرُ الأَطْفَالُ قَسْرًا مِنْ مُدُنِهِمْ.', en: 'Children are forcibly displaced from their cities.', clue: 'Someone forced them.' },
        { chip: 'THEIR ACTION · DEVELOP', color: '1D5FBF', head: 'يَفِرُّ مِنْ · يَلْتَمِسُ', big: 'يَفِرُّ المَدَنِيُّونَ مِنْ مَنَاطِقِ النِّزَاعِ وَيَلْتَمِسُونَ اللُّجُوءَ.', en: 'Civilians flee conflict zones and seek asylum.', clue: 'Brave choices, active verbs.' },
      ],
      error: { text: 'Website mistake 1: forced displacement is the passive, not “migrates”.', pairs: [['يُهَجَّرُ الأَطْفَالُ قَسْرًا', 'يُهَاجِرُ الأَطْفَالُ قَسْرًا']] },
      notes: `GRAMMAR PART 2 — website rule “Displacement verbs”, mistake 1, the common error and the website game (card 1).
Same root (h-j-r), three meanings: هَاجَرَ / يُهَاجِرُ (Form III, to migrate — a choice) · هَجَّرَ / يُهَجِّرُ (Form II, to displace someone) · يُهَجَّرُ (its passive — to BE displaced). Write them on the board as a family.
Card 3: active verbs give displaced people agency — they are not only victims; they flee, cross borders and seek protection.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · both conditionals in humanitarian analysis (website rules 3–4, teaching point 2 and mistakes 2–3) · Develop', title: 'Look forward, look back', ar: 'الشَّرْطُ فِي التَّحْلِيلِ الإِنْسَانِيِّ',
      cols: [{ label: 'Type', w: 2.0 }, { label: 'Marker', w: 2.3 }, { label: 'Example (website texts)', w: 8.03, size: 17 }],
      rows: [
        { core: true, cells: ['Type 1 · plan', 'idhā … sa-', '{w|إِذَا} تَوَصَّلَ المُجْتَمَعُ الدَّوْلِيُّ إِلَى حُلُولٍ، {w|سَتَتَرَاجَعُ} مَوْجَاتُ النُّزُوحِ.'] },
        { cells: ['Type 1 + passive', 'idhā … sa-', '{w|وَإِذَا} تَعَاوَنَ المُجْتَمَعُ الدَّوْلِيُّ، {w|سَتُفْتَحُ} مَمَرَّاتٌ إِنْسَانِيَّةٌ.'] },
        { core: true, cells: ['Type 2 · negative', 'law lam … la-mā', '{m|لَوْ لَمْ} تَنْدَلِعِ الحُرُوبُ، {m|لَمَا} اضْطُرَّ المَلَايِينُ إِلَى الفِرَارِ.'] },
        { cells: ['Type 2 + passive', 'law … la-', '{m|لَوْ} فُتِحَتْ مَمَرَّاتٌ إِنْسَانِيَّةٌ، {m|لَنَجَا} كَثِيرُونَ.'] },
        { cells: ['past perfect', 'kānū qad', '{p|وَكَانُوا قَدْ} نَشَؤُوا فِي مُدُنٍ بَاتَتِ اليَوْمَ رُكَامًا.'] },
      ],
      ltr: true,
      foot: 'Website mistakes 2–3: law lam … sa-mā ✗ → la-mā ✓ · idhā … la-tarājaʿa ✗ → sa-yatarājaʿu ✓.',
      notes: `GRAMMAR PART 3 — website rules “Type 1 forward” and “Type 2 backward”, teaching point 2 (“Both conditionals do different humanitarian work”), mistakes 2–3 and the reading (row 5).
Row 3 is the hardest: لَوْ لَمْ + past (had … NOT) → لَمَا + past (would NOT have). Two negatives — and the meaning is hopeful: the suffering was not inevitable.
Row 5: كَانُوا قَدْ نَشَؤُوا = they had grown up (نَشَأَ, the hamza on wāw before -ū). بَاتَتْ رُكَامًا = has become rubble.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · humanising language (website quiz 8, final check and writing model) · Stretch', title: 'Words that respect people', ar: 'لُغَةٌ تَحْتَرِمُ الإِنْسَانَ',
      cols: [{ label: 'Avoid (dehumanising)', w: 4.6, size: 18 }, { label: 'Use (humanising)', w: 5.2, size: 18 }, { label: 'Why', w: 2.53 }],
      rows: [
        { core: true, cells: ['تَدَفَّقَتْ {e|جَحَافِلُ} المُهَاجِرِينَ', 'يَبْحَثُ اللَّاجِئُونَ عَنْ {k|مَلْجَأٍ آمِنٍ}', 'people, not an army'] },
        { core: true, cells: ['المُهَاجِرُونَ {e|عِبْءٌ ثَقِيلٌ}', 'مِنَ الضَّرُورِيِّ أَنْ {k|تُصَانَ كَرَامَتُهُمْ}', 'dignity, not burden'] },
        { cells: ['الحَرْبُ سَبَبٌ.', '{k|يُهَجَّرُ الطِّفْلُ} مِنْ مَدِينَتِهِ', 'centre the person'] },
        { cells: ['مُشْكِلَةٌ كَبِيرَةٌ', 'مِنْ {w|أَعْمَقِ الأَزَمَاتِ الإِنْسَانِيَّةِ} فِي عَصْرِنَا', 'precise, serious'] },
        { cells: ['المُخَيَّمَاتُ سَيِّئَةٌ', 'مُخَيَّمَاتٌ {w|تَفْتَقِرُ إِلَى} الأَمَانِ وَالخَدَمَاتِ', 'describe the need'] },
      ],
      ltr: true,
      foot: 'Website quiz: “Which sentence uses humanising language?” — the register you choose is part of your argument.',
      notes: `GRAMMAR PART 4 — website quiz 8, the final check, mission rounds 10–11 and the writing model / reading.
Discuss calmly: جَحَافِلُ = hordes, armies — it turns people into a threat. عِبْءٌ = a burden — it turns people into a cost. Journalists and the UN avoid both.
Row 2 is a P4 necessity subjunctive in the passive: أَنْ تُصَانَ (to be preserved) · أَنْ تُكْفَلَ (to be guaranteed) — the -a is on a passive verb.`,
    },
  ],
  quick: [0, 1, 2, 6],
  rest: [3, 4, 5, 7],
  ido: {
    title: 'Watch me write a migration analysis',
    steps: [
      { head: 'Evidence', ar: '{p|يُشَارُ إِلَى أَنَّ} …', think: 'Numbers first.' },
      { head: 'The people', ar: '{e|يُهَجَّرُ} … وَ{e|يُودَعُونَ} …', think: 'Person first.' },
      { head: 'Could it differ?', ar: '{m|لَوْ لَمْ} … {m|لَمَا}', think: 'Type 2.' },
      { head: 'What is needed', ar: 'مِنَ الضَّرُورِيِّ أَنْ {k|تُكْفَلَ} …', think: 'an + -a.' },
    ],
    legend: ['p', 'e', 'm', 'k'], legendLabels: { p: 'EVIDENCE', e: 'HUMANITARIAN PASSIVE', m: 'TYPE 2', k: 'NECESSITY' },
    model: '{p|يُشَارُ إِلَى أَنَّ} المِنْطَقَةَ العَرَبِيَّةَ تَضُمُّ نِسْبَةً كَبِيرَةً مِنَ النَّازِحِينَ قَسْرًا فِي العَالَمِ. {e|يُهَجَّرُ} كَثِيرٌ مِنَ الأَطْفَالِ وَ{e|يُحْرَمُونَ} مِنْ تَعْلِيمِهِمْ، وَ{e|يُودَعُونَ} فِي مُخَيَّمَاتٍ تَفْتَقِرُ إِلَى الأَمَانِ. {m|وَلَوْ لَمْ} تَنْدَلِعِ الحُرُوبُ، {m|لَمَا} اضْطُرَّ المَلَايِينُ إِلَى الفِرَارِ. وَمِنَ الضَّرُورِيِّ أَنْ {k|تُكْفَلَ} حُقُوقُ اللَّاجِئِينَ.',
    modelEn: 'It is reported that the Arab region holds a large share of the world’s forcibly displaced. Many children are displaced and deprived of their education, and placed in camps lacking safety. Had the wars not broken out, millions would not have had to flee. It is essential that refugees’ rights be guaranteed.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Evidence first: yushāru ilā ANNA. Now the people — who is my subject? The children, not the war: yuhajjaru, yuḥramūna, yūdaʿūna — passives. Could it have been different? law LAM … LA-MĀ. What is needed? min al-ḍarūrī AN tukfalA — a passive in -a.”',
  },
  patternEn: ['millions are displaced and placed in camps that lack services', 'civilians flee conflict zones and seek asylum', 'had the wars not broken out, millions would not have had to flee'],
  gameKey: 'P5-L02',
  game: {
    title: 'Why people move: match the picture',
    pick: [2, 3, 5],
    en: ['He migrated to study.', 'She migrated for work.', 'A person can carry their identity with them to a new country.'],
    icons: [[['fa6', 'FaGraduationCap', '1D5FBF'], ['fa6', 'FaPlaneDeparture', '6B4C9A']], [['fa6', 'FaBriefcase', 'C77700'], ['fa6', 'FaEarthAfrica', '1D5FBF']], [['fa6', 'FaHeart', 'C0386B'], ['fa6', 'FaSuitcaseRolling', '1E6B52']]],
    labels: ['for study', 'for work', 'identity'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6; cards 0, 1 and 4 not used — vowel on the initial alif). These are migrations by CHOICE (هَاجَرَ, active) — contrast with today’s forced displacement (يُهَجَّرُ, passive). Card 3 is a good, positive close: يُمْكِنُ أَنْ يَحْمِلَ الإِنْسَانُ هُوِيَّتَهُ مَعَهُ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a humanitarian line (website live builder)', title: 'Passive + conditional + solution', ar: 'ابْنِ سَطْرًا إِنْسَانِيًّا',
      cols: [{ label: '1 · Humanitarian passive', w: 4.0, size: 16 }, { label: '2 · Conditional', w: 4.2, size: 16 }, { label: '3 · Solution (an + -a)', w: 4.13, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then check: is the person the subject? Does the solution verb end in -a?',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across. Develop: label column 2 — Type 2 negative (row 1), Type 2 (row 2), Type 1 (row 3). Stretch: add a concession from P5-L01 before the line: صَحِيحٌ أَنَّ بَعْضَ الدُّوَلِ اسْتَقْبَلَتِ اللَّاجِئِينَ، غَيْرَ أَنَّ …`,
    },
  ],
  sorterTitle: 'Passive, active — or conditional analysis?',
  sorterCats: ['humanitarian passive', 'active displacement verb', 'conditional analysis'],
  sorterNotes: 'Then turn one active card into a passive and one passive card into a respectful headline (e.g. يُودَعُ النَّازِحُونَ فِي مُخَيَّمَاتٍ → «نَازِحُونَ يَبْحَثُونَ عَنِ الأَمَانِ»).',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: { ...site.writing, prompt: 'Write a 100–110-word migration analysis. Open with reported statistics, describe the human impact with humanitarian passives (yuhajjaru / yūdaʿu) and the past perfect, analyse with both conditional types, and close with a necessity subjunctive.', checklist: ['Reported statistics with an impersonal passive (yushāru ilā anna).', 'Humanitarian passives centring the displaced person.', 'A Type 1 plan and a Type 2 counterfactual (la-mā).', 'A necessity subjunctive and a compassionate register.'] }, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('Type 2 counterfactual (لَمَا).', 'Type 2 counterfactual (la-mā).') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; لِكَيْ always written with its sukūn; rule headings, formulas, a pattern tip, the writing prompt and checklist in English and transliteration; sorter headings in transliteration; game cards 0, 1 and 4 not used; the passive, choice/force, conditional and register tables are teacher-built from the website texts. All other website items are used as published.',
  hints: ['yuhājiru qasran?', 'law lam … sa-mā?', 'idhā … la-?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: yuhajjaru · yūdaʿu · yafirru · yaltamisu.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down every passive verb you hear.',
  gloss: [
    ['يَقُولُ المَنْدُوبُ: تَضُمُّ المِنْطَقَةُ العَرَبِيَّةُ نَحْوَ أَرْبَعِينَ بِالمِئَةِ مِنْ مَجْمُوعِ النَّازِحِينَ قَسْرًا فِي العَالَمِ.', 'The representative says: the Arab region holds about forty per cent of all the forcibly displaced people in the world.'],
    ['يُهَجَّرُ المَلَايِينُ بِسَبَبِ النِّزَاعَاتِ المُسَلَّحَةِ، وَيُودَعُ كَثِيرُونَ فِي مُخَيَّمَاتٍ تَفْتَقِرُ إِلَى الخَدَمَاتِ الأَسَاسِيَّةِ.', 'Millions are displaced by armed conflicts, and many are placed in camps that lack basic services.'],
    ['يَفِرُّ المَدَنِيُّونَ مِنْ مَنَاطِقِ النِّزَاعِ وَيَلْتَمِسُونَ الحِمَايَةَ الدَّوْلِيَّةَ. وَأَكَّدَتِ المُفَوَّضِيَّةُ أَنَّ الأَطْفَالَ يُحْرَمُونَ مِنَ التَّعْلِيمِ.', 'Civilians flee conflict zones and seek international protection. The Commission (UNHCR) confirmed that children are deprived of education.'],
    ['لَوْ لَمْ تَنْدَلِعِ الحُرُوبُ، لَمَا اضْطُرَّ المَلَايِينُ إِلَى الفِرَارِ.', 'Had the wars not broken out, millions would not have been forced to flee.'],
    ['وَإِذَا فُتِحَتْ مَمَرَّاتٌ إِنْسَانِيَّةٌ آمِنَةٌ، سَتَنْخَفِضُ خَسَائِرُ الأَرْوَاحِ.', 'And if safe humanitarian corridors are opened, the loss of life will fall.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفِ الأَزْمَةَ بِاسْتِعْمَالِ فِعْلٍ مَبْنِيٍّ لِلْمَجْهُولِ إِنْسَانِيٍّ.' },
      { route: 'develop', ar: 'مَا تَحْلِيلُكَ الشَّرْطِيُّ مِنَ النَّوْعِ الثَّانِي؟' },
      { route: 'stretch', ar: 'مَا الحَلُّ الَّذِي تَقْتَرِحُهُ بِمُسَبِّبِ نَصْبٍ؟' },
    ],
    stems: [
      { route: 'core', ar: 'يُهَجَّرُ ______ وَيُودَعُونَ فِي ______ .' },
      { route: 'develop', ar: 'لَوْ لَمْ تَنْدَلِعِ الحُرُوبُ، لَمَا ______ .' },
      { route: 'stretch', ar: 'مِنَ الضَّرُورِيِّ أَنْ تُكْفَلَ ______ وَأَنْ تُصَانَ ______ .' },
    ],
    modelEn: ['Describe the crisis.', 'Millions are displaced and placed in camps that lack services.', 'And your analysis?', 'Had the wars not broken out, millions would not have had to flee — and it is essential that their rights be guaranteed.'],
    notes: 'Website prompts and model. Pair task: “news anchor” — A reads one sentence of a humanitarian report; B checks: is the PERSON the subject? Is the language respectful? Swap. Keep all examples general. To a girl: صِفِي · تَحْلِيلُكِ · تَقْتَرِحِينَهُ.',
  },
  write: {
    core: { amount: '2 sentences', how: 'Website Core: two humanitarian passives centring the displaced person.' },
    develop: { amount: '100 words', how: 'Website Develop: add a Type 1 plan and a Type 2 counterfactual.' },
    stretch: { amount: '100–110 words', how: 'Website task: statistics, passives, the past perfect, both conditionals and a necessity subjunctive.' },
  },
  frames: {
    core: [
      { en: 'Millions are displaced because of …', ar: 'يُهَجَّرُ المَلَايِينُ بِسَبَبِ ______ .' },
      { en: '… are placed in camps that lack …', ar: 'يُودَعُ النَّازِحُونَ فِي مُخَيَّمَاتٍ تَفْتَقِرُ إِلَى ______ .' },
      { en: 'Children are deprived of …', ar: 'يُحْرَمُ الأَطْفَالُ مِنْ ______ .' },
      { en: 'Civilians flee from …', ar: 'يَفِرُّ المَدَنِيُّونَ مِنْ ______ .' },
    ],
    develop: [
      { en: 'It is reported that …', ar: 'يُشَارُ إِلَى أَنَّ ______ .' },
      { en: 'Had the wars not broken out, …', ar: 'لَوْ لَمْ تَنْدَلِعِ الحُرُوبُ، لَمَا ______ .' },
      { en: 'If the international community cooperates, …', ar: 'إِذَا تَعَاوَنَ المُجْتَمَعُ الدَّوْلِيُّ، سَتُفْتَحُ ______ .' },
      { en: 'It is essential that … be guaranteed.', ar: 'مِنَ الضَّرُورِيِّ أَنْ تُكْفَلَ ______ .' },
    ],
    bank: ['النِّزَاعَاتِ المُسَلَّحَةِ', 'الخَدَمَاتِ الأَسَاسِيَّةِ', 'الأَمَانِ', 'التَّعْلِيمِ', 'مَنَاطِقِ النِّزَاعِ', 'القَصْفِ', 'اضْطُرَّ المَلَايِينُ إِلَى الفِرَارِ', 'مَمَرَّاتٌ إِنْسَانِيَّةٌ', 'حُقُوقُ اللَّاجِئِينَ', 'كَرَامَتُهُمْ', 'الحِمَايَةَ الدَّوْلِيَّةَ', 'مُدُنٍ بَاتَتِ اليَوْمَ رُكَامًا'],
  },
  stretch: [
    ['مَا يُقَارِبُ أَرْبَعِينَ بِالمِئَةِ', 'nearly forty per cent'],
    ['اضْطُرَّتْ إِلَى مُغَادَرَةِ دِيَارِهَا', 'were forced to leave their homes'],
    ['وَكَانُوا قَدْ نَشَؤُوا فِي مُدُنٍ بَاتَتِ اليَوْمَ رُكَامًا', 'and they had grown up in cities that are now rubble'],
    ['لَوْ لَمْ تَتَدَفَّقِ الأَسْلِحَةُ', 'had weapons not poured in'],
    ['وَأَنْ تُصَانَ كَرَامَتُهُمْ', 'and that their dignity be preserved'],
  ],
  modelEn: 'It is reported that the Arab region holds nearly forty per cent of all the forcibly displaced people in the world, and UNHCR reports confirm that millions of families were forced to leave their homes. Many children are displaced and deprived of their education, and placed in camps that lack safety; they had grown up in cities that are now rubble. Had weapons not poured into conflict zones, losses would be far fewer. If the international community cooperates, urgent humanitarian corridors will be opened. It is essential that refugees’ rights be guaranteed and their dignity preserved.',
  find: ['yushāru ilā anna (evidence)', 'yuhajjaru · yuḥramūna · yūdaʿūna', 'kānū qad · law lam … · idhā … sa-', 'an tukfala · an tuṣāna'],
  modelNotes: 'Website writing model. Evidence: يُشَارُ إِلَى أَنَّ · تُؤَكِّدُ … أَنَّ · اضْطُرَّتْ إِلَى · يُهَجَّرُ … وَيُحْرَمُونَ … وَيُودَعُونَ · كَانُوا قَدْ نَشَؤُوا · لَوْ لَمْ تَتَدَفَّقِ … لَكَانَتِ · إِذَا تَعَاوَنَ … سَتُفْتَحُ · مِنَ الضَّرُورِيِّ أَنْ تُكْفَلَ … وَأَنْ تُصَانَ.',
  selfCheck: [
    { route: 'core', text: 'The displaced PERSON is the subject of my passives (yuhajjaru l-aṭfālu).' },
    { route: 'core', text: 'I used yuhajjaru for force, not yuhājiru (choice).' },
    { route: 'develop', text: 'My Type 1 has sa-; my Type 2 has la- / la-mā.' },
    { route: 'develop', text: 'My solution verb after an ends in -a (an tukfala).' },
    { route: 'stretch', text: 'My language is humanising — no “hordes”, no “burden”.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['الاضْطِرَارِيَّةُ', 'forced'], ['أَعْمَقِ', 'the deepest'], ['النَّازِحِينَ قَسْرًا', 'the forcibly displaced'], ['مُؤَقَّتَةٍ', 'temporary'], ['نَشَؤُوا', 'they grew up'],
    ['بَاتَتْ', 'have become'], ['رُكَامًا', 'rubble'], ['القَصْفِ', 'the bombardment'], ['تَتَدَفَّقِ', 'pour in'], ['تُكْفَلَ', 'be guaranteed'],
  ],
  prep: {
    words: [['المُسَاوَاةُ بَيْنَ الجِنْسَيْنِ', 'gender equality', '—'], ['تَمْكِينُ المَرْأَةِ', 'women’s empowerment', '—'], ['فَجْوَةُ الأُجُورِ', 'the pay gap', '—'], ['يُطَالِبُ بِأَنْ', 'demands that', '+ verb in -a'], ['القَوَالِبُ النَّمَطِيَّةُ', 'stereotypes', 'sg. قَالَبٌ نَمَطِيٌّ']],
    questionEn: 'Name one woman (from history or today) whose achievements you admire.',
    questionAr: 'أُعْجَبُ بِالسَّيِّدَةِ ______ لِأَنَّهَا ______ .',
    homework: {
      core: 'Write two humanitarian passives centring the displaced person.',
      develop: 'Add a Type 1 plan and a Type 2 counterfactual (100 words).',
      stretch: 'Website writing task: a 100–110-word compassionate migration analysis.',
    },
    wordsSource: 'The five words come from the website P5-L03 vocabulary (gender equality). Faith link idea for next lesson: Khadīja (raḍiya Allāhu ʿanhā), a successful businesswoman.',
  },
  remember: 'Remember: put the person first — yuhajjaru (is displaced, by force) is not yuhājiru (migrates, by choice); look forward with idhā … sa-, back with law lam … la-mā; and choose words that protect people’s dignity.',
});

module.exports = { meta, slides };
