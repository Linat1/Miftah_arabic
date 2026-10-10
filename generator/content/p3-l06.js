'use strict';
/* P3-L06 · Travel Problems and Solutions — Dealing With the Unexpected — website: Pathways › Progression › P3 › P3-L06 (a travel-problem story that pulls in
 * all five P3 structures: a past-perfect precaution, the past narrative, a reported official, a Type 1 plan and a Type 2 regret — plus the subjunctive after
 * أَنْ and the help verbs يُبَلِّغُ عَنْ / يَلْجَأُ إِلَى). Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, live builder,
 * mission and visual game used as published, with waṣl alif shown without a kasra. English added to the patterns; sorter headings in English. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P3')({
  n: 6, fileTitle: 'Travel_Problems_and_Solutions', chip: 'Narrative',
  title: 'Travel Problems and Solutions — Dealing With the Unexpected', arabic: 'مَشَاكِلُ السَّفَرِ وَالحُلُولُ — التَّعَامُلُ مَعَ غَيْرِ المُتَوَقَّعِ',
  focus: 'Tell a travel-problem story with all five P3 structures: kuntu qad (precaution), the past (problem), qāla … inna (the official), idhā … sa- (next time) and law … la- (regret) — plus the subjunctive after an: qarrartu an aljaʾa.',
  icon: 'FaPlaneCircleExclamation', iconSet: 'fa6',
});

const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const site = D.waslFix(D.site('P3-L06'));
const RH = [['Precaution and problem', 'kuntu qad + past · past narrative'], ['Reported official', 'qāla … inna'], ['Plan and regret', 'idhā … sa- · law … la-'], ['Subjunctive after an', 'yajibu an / qarrartu an + fatḥa']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const LB = site.live_builder.groups;

const slides = D.devLesson('P3-L06', {
  support: `• Core: the five-stage sequence for one problem, one sentence each (website Core). Develop: expand the narrative and add a subjunctive after an. Stretch: a full 100–110-word narrative where the Type 2 regret is the most complex sentence.
• This lesson revises the whole unit — a good moment to praise progress. Every structure has been met before: kuntu qad (P3-L02/L03) · qāla inna (P2-L02) · idhā … sa- and law … la- (P3-L05).
• New today: the subjunctive after أَنْ — the verb ends in a fatḥa (أَلْجَأَ, not أَلْجَأُ). Weak students only need the sound: “after an, say -a”.
• Practical life skill: keep a photo of your passport, buy travel insurance, know where your embassy is. Some students may have had stressful journeys — keep stories light and invite, never require, real examples.`,
  teach: 'The five-stage problem story, the subjunctive after an, help verbs, the regret upgraded.',
  wedo: 'Match travel problems, build a problem narrative, sort precaution / problem / help.',
  next: { nextCode: 'P3-L07', nextTitle: 'Cultural Sensitivity in Travel — Being a Respectful Visitor', nextAr: 'الحَسَاسِيَّةُ الثَّقَافِيَّةُ فِي السَّفَرِ' },
  objectives: ['Name travel problems and sources of help.', 'Tell a problem story: precaution → problem → official → plan → regret.', 'Use the subjunctive after an (yajibu an, qarrartu an).', 'Write a travel-problem narrative.'],
  rulesAr: 'خَمْسُ بُنًى فِي سَرْدِ مُشْكِلَةٍ',
  ruleEx: [['كُنْتُ قَدْ تَأَكَّدْتُ مِنْ حَجْزِي مَرَّتَيْنِ', 'ثُمَّ اكْتَشَفْتُ أَنَّ الرِّحْلَةَ أُلْغِيَتْ'], ['قَالَ المُوَظَّفُ إِنَّ الرِّحْلَةَ سَتَتَأَخَّرُ سَاعَتَيْنِ'], ['إِذَا سَافَرْتُ ثَانِيَةً، سَأَشْتَرِي تَأْمِينًا', 'لَوْ كُنْتُ قَدِ اشْتَرَيْتُ تَأْمِينًا، لَحَصَلْتُ عَلَى تَعْوِيضٍ'], ['قَرَّرْتُ أَنْ أَلْجَأَ إِلَى السَّفَارَةِ', 'يَجِبُ أَنْ أَتَصَرَّفَ بِهُدُوءٍ']],
  doNow: {
    questions: [
      q('What does تَأَخُّرُ الرِّحْلَةِ mean?', ['a flight delay', 'a flight cancellation', 'a direct flight'], 'Prepared at home (P3-L05).'),
      q('What does فُقْدَانُ الأَمْتِعَةِ mean?', ['lost luggage', 'heavy luggage', 'hand luggage'], 'Prepared at home (P3-L05).'),
      q('What does يَتَصَرَّفُ بِهُدُوءٍ mean?', ['he acts calmly', 'he travels quickly', 'he complains loudly'], 'Prepared at home (P3-L05).'),
      q('Complete: تُسْهِمُ السِّيَاحَةُ ___ الاقْتِصَادِ المَحَلِّيِّ.', ['فِي', 'بِـ', 'عَلَى'], 'P3-L05: yushim is fixed with fī.'),
      q('Complete the regret: لَوْ نَظَّمْنَا الزِّيَارَاتِ، ___ التُّرَاثُ أَفْضَلَ.', ['لَكَانَ', 'سَيَكُونُ', 'يَكُونُ'], 'P3-L05: a Type 2 result takes la-.'),
    ],
    keyIdea: { text: 'A good problem story has five stages — and after an, the verb ends in -a.', ar: '{p|كُنْتُ قَدْ} · {e|اكْتَشَفْتُ} · {m|قَالَ … إِنَّ} · {w|إِذَا … سَـ} · {k|لَوْ … لَـ} · قَرَّرْتُ أَنْ {k|أَلْجَأَ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P3-L05. Questions 4–5 retrieve yushim fī and the law … la- regret (P3-L05) — today the regret becomes personal.',
  },
  routes: {
    core: ['I can name 8 travel problems and sources of help.', 'I can tell a problem in the past.'],
    develop: ['I can use kuntu qad and qāla … inna in my story.', 'I can use the subjunctive after an.'],
    stretch: ['I can add a Type 1 plan and a Type 2 regret.', 'I can write a full problem narrative.'],
  },
  bridge: [
    { ar: 'تَأْخِيرٌ · تَأَخُّرٌ', urdu: 'تاخیر', tr: 'tākhīr', en: 'a delay' },
    { ar: 'مُسَافِرٌ', urdu: 'مسافر', tr: 'musāfir', en: 'a traveller' },
    { ar: 'سَفَارَةٌ', urdu: 'سفارت · سفارت خانہ', tr: 'sifārat', en: 'an embassy' },
    { ar: 'يَسْتَشِيرُ', urdu: 'مشورہ', tr: 'mashwara', en: 'consults · advice (same root)' },
    { ar: 'يُبَلِّغُ', urdu: 'تبلیغ', tr: 'tablīgh', en: 'reports, conveys (same root)' },
  ],
  bridgeNotes: 'URDU BRIDGE: تاخیر، مسافر and سفارت are shared. مشورہ shares a root with يَسْتَشِيرُ (to consult), and تبلیغ (conveying a message) shares a root with يُبَلِّغُ (to report) and بَلَاغٌ (a police report).',
  core: ['تَأَخُّرُ الرِّحْلَةِ', 'إِلْغَاءٌ', 'فُقْدَانُ الأَمْتِعَةِ', 'سَرِقَةٌ', 'ضَيَاعٌ', 'يَتَصَرَّفُ بِهُدُوءٍ', 'يُبَلِّغُ عَنْ', 'يَلْجَأُ إِلَى', 'يَطْلُبُ التَّعْوِيضَ', 'التَّأْمِينُ السِّيَاحِيُّ', 'شُرْطَةُ السِّيَاحَةِ', 'السَّفَارَةُ'],
  forms: {
    'سَرِقَةٌ': sp('سَرِقَاتٌ'), 'خَطَأٌ فِي الحَجْزِ': sp('أَخْطَاءٌ فِي الحَجْزِ'), 'السَّفَارَةُ': sp('السَّفَارَاتُ'), 'بَلَاغٌ': sp('بَلَاغَاتٌ'),
    'وَثِيقَةُ سَفَرٍ مُؤَقَّتَةٌ': sp('وَثَائِقُ سَفَرٍ مُؤَقَّتَةٌ'), 'بُطَاقَةُ الهُوِيَّةِ': sp('بِطَاقَاتُ الهُوِيَّةِ'),
    'مُوَظَّفُ المَطَارِ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'مُوَظَّفُو المَطَارِ' }, { l: 'f.', ar: 'مُوَظَّفَةُ المَطَارِ' }] },
    'يَتَعَامَلُ مَعَ': ihs('أَتَعَامَلُ مَعَ', 'تَتَعَامَلُ مَعَ'), 'يَتَصَرَّفُ بِهُدُوءٍ': ihs('أَتَصَرَّفُ بِهُدُوءٍ', 'تَتَصَرَّفُ بِهُدُوءٍ'), 'يُبَلِّغُ عَنْ': ihs('أُبَلِّغُ عَنْ', 'تُبَلِّغُ عَنْ'),
    'يَلْجَأُ إِلَى': ihs('أَلْجَأُ إِلَى', 'تَلْجَأُ إِلَى'), 'يَسْتَشِيرُ': ihs('أَسْتَشِيرُ', 'تَسْتَشِيرُ'), 'يَطْلُبُ التَّعْوِيضَ': ihs('أَطْلُبُ التَّعْوِيضَ', 'تَطْلُبُ التَّعْوِيضَ'),
  },
  vocabNotes: {
    0: 'Travel problems: most are nouns you will put after اكْتَشَفْتُ أَنَّ … or use with the past: تَأَخَّرَتِ الرِّحْلَةُ · ضَاعَتْ حَقِيبَتِي · أُلْغِيَتِ الرِّحْلَةُ (was cancelled).',
    1: 'Dealing with problems: learn each verb with its partner — يَتَعَامَلُ مَعَ · يُبَلِّغُ عَنْ · يَلْجَأُ إِلَى · يَسْتَشِيرُ + object. After أَنْ they end in -a: أَنْ أَلْجَأَ · أَنْ أُبَلِّغَ.',
    2: 'Sources of help: who you go to — شُرْطَةُ السِّيَاحَةِ for theft, السَّفَارَةُ for a lost passport (they issue a وَثِيقَةُ سَفَرٍ مُؤَقَّتَةٌ), مُوَظَّفُ المَطَارِ for delays and luggage.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the five-stage problem story (website rules 1–3 + teaching point 1 + table) · Core', title: 'Five stages, five structures', ar: 'خَمْسُ مَرَاحِلَ · خَمْسُ بُنًى',
      cols: [{ label: 'Stage', w: 1.9 }, { label: 'Structure', w: 2.4 }, { label: 'Example (website)', w: 8.03, size: 19 }],
      rows: [
        { core: true, cells: ['1 · precaution', 'kuntu qad + past', '{p|كُنْتُ قَدْ} تَأَكَّدْتُ مِنْ حَجْزِي مَرَّتَيْنِ.'] },
        { core: true, cells: ['2 · problem', 'past narrative', 'ثُمَّ {e|اكْتَشَفْتُ أَنَّ} الرِّحْلَةَ {e|أُلْغِيَتْ}.'] },
        { cells: ['3 · official', 'qāla inna · ashāra ilā anna', '{m|قَالَ} المُوَظَّفُ {m|إِنَّ} الرِّحْلَةَ سَتَتَأَخَّرُ سَاعَتَيْنِ.'] },
        { cells: ['4 · next time', 'idhā … sa-', '{w|إِذَا} سَافَرْتُ ثَانِيَةً، {w|سَأَشْتَرِي} تَأْمِينًا.'] },
        { cells: ['5 · regret', 'law … la-', '{k|لَوْ كُنْتُ قَدِ} اشْتَرَيْتُ تَأْمِينًا، {k|لَحَصَلْتُ} عَلَى تَعْوِيضٍ.'] },
      ],
      ltr: true,
      foot: 'Core: one sentence per stage. Stages 1–2 alone already make a good story.',
      notes: `GRAMMAR PART 1 — website rules “Precaution and problem”, “Reported official”, “Plan and regret”, teaching point 1 and the website table.
Stage 2: أُلْغِيَتْ = “it was cancelled” (passive of أَلْغَى) — no need to say who cancelled it.
Stage 3: قَالَ is followed by إِنَّ; أَشَارَ إِلَى and أَوْضَحَ by أَنَّ (P2-L02). Both make the next noun accusative: إِنَّ الرِّحْلَةَ.
Stages 4–5: P3-L05. Ask: “Can it still happen?” → idhā … sa-. “Did it not happen?” → law … la-.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 2 · the subjunctive after an (website rule 4 + teaching point 2) · Develop', title: 'After an, say -a', ar: 'الفِعْلُ المُضَارِعُ بَعْدَ أَنْ',
      cols: [{ label: 'Normal (-u)', w: 2.4, size: 20 }, { label: 'After an (-a)', w: 2.6, size: 20 }, { label: 'Example (website texts)', w: 7.33, size: 19 }],
      rows: [
        { core: true, cells: ['أَتَصَرَّفُ', 'أَنْ {k|أَتَصَرَّفَ}', 'حَاوَلْتُ أَنْ {k|أَتَصَرَّفَ} بِهُدُوءٍ.'] },
        { core: true, cells: ['أَلْجَأُ', 'أَنْ {k|أَلْجَأَ}', 'قَرَّرْتُ أَنْ {k|أَلْجَأَ} إِلَى شُرْطَةِ السِّيَاحَةِ.'] },
        { cells: ['أُبَلِّغُ · أَذْهَبُ', 'أَنْ {k|أُبَلِّغَ} … {k|أَذْهَبَ}', 'يَجِبُ أَنْ {k|أُبَلِّغَ} عَنِ الفُقْدَانِ ثُمَّ {k|أَذْهَبَ} إِلَى السَّفَارَةِ.'] },
        { cells: ['أَنْتَظِرُ', 'أَنْ {k|أَنْتَظِرَ}', 'يَجِبُ أَنْ {k|أَنْتَظِرَ} فِي صَالَةِ المُغَادَرَةِ.'] },
        { cells: ['أَحْتَفِظُ', 'أَنْ {k|أَحْتَفِظَ}', 'قَرَّرْتُ أَنْ {k|أَحْتَفِظَ} بِنُسْخَةٍ مِنْ وَثَائِقِي.'] },
      ],
      ltr: true,
      foot: 'Website mistake 2: qarrartu an aljaʾu ✗ → an aljaʾa ✓. Triggers: yajibu an · ḥāwaltu an · qarrartu an.',
      notes: `GRAMMAR PART 2 — website rule “Subjunctive after أَنْ”, teaching point 2 and mistake 2. Examples from the website listening, reading and live builder.
The subjunctive (المُضَارِعُ المَنْصُوبُ) only changes the last vowel: -u → -a. Row 3: a second verb joined with ثُمَّ / وَ is also subjunctive (أَذْهَبَ).
Remember the difference: أَنْ + verb (-a) · أَنَّ + noun / pronoun (accusative) — اكْتَشَفْتُ أَنَّ الرِّحْلَةَ … · قَرَّرْتُ أَنْ أَلْجَأَ … .
P3-L07 builds on this with يُسْتَحْسَنُ أَنْ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the help verbs and their partners (website vocabulary notes) · Core / Develop', title: 'Who do you turn to?', ar: 'أَفْعَالُ طَلَبِ المُسَاعَدَةِ',
      cards: [
        { chip: 'ʿAN · CORE', color: '1D5FBF', head: 'يُبَلِّغُ عَنْ', big: 'أُبَلِّغُ عَنِ السَّرِقَةِ لِلشُّرْطَةِ.', en: 'I report the theft to the police.', clue: 'Report about → ʿan.' },
        { chip: 'ILĀ · CORE', color: 'C77700', head: 'يَلْجَأُ إِلَى', big: 'لَجَأْتُ إِلَى السَّفَارَةِ.', en: 'I turned to the embassy.', clue: 'Turn to → ilā.' },
        { chip: 'OBJECT · DEVELOP', color: '1E6B52', head: 'يَسْتَشِيرُ', big: 'اسْتَشَرْتُ مُوَظَّفَ المَطَارِ.', en: 'I consulted the airport official.', clue: 'Direct object.' },
      ],
      error: { text: 'Website mistake 3: yuballigh is fixed with ʿan.', pairs: [['يُبَلِّغُ المُسَافِرُ عَنِ السَّرِقَةِ لِلشُّرْطَةِ', 'يُبَلِّغُ المُسَافِرُ السَّرِقَةَ لِلشُّرْطَةِ']] },
      notes: `GRAMMAR PART 3 — website vocabulary notes (Form II يُبَلِّغُ عَنْ, Form VIII يَلْجَأُ إِلَى, Form X يَسْتَشِيرُ + object) and mistake 3.
Card 1: report ABOUT something (عَنْ) TO someone (لِـ): أُبَلِّغُ عَنِ السَّرِقَةِ لِلشُّرْطَةِ.
Card 3: the past of يَسْتَشِيرُ is اسْتَشَارَ → اسْتَشَرْتُ (I consulted) — a hollow verb: the long vowel shortens before -tu.
Also useful: يَتَعَامَلُ مَعَ المُشْكِلَةِ (deals with the problem) · يَطْلُبُ التَّعْوِيضَ (asks for compensation).`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · make the regret the strongest sentence (website listening, reading and writing model) · Stretch', title: 'Upgrade the regret', ar: 'النَّدَمُ فِي أَقْوَى صُوَرِهِ',
      cols: [{ label: 'Level', w: 1.8 }, { label: 'Example (website texts)', w: 7.9, size: 19 }, { label: 'Structure', w: 2.63 }],
      rows: [
        { core: true, cells: ['simple', '{k|لَوْ} أَمَّنْتُ رِحْلَتِي، {k|لَحَصَلْتُ} عَلَى تَعْوِيضٍ.', 'law + past → la-'] },
        { cells: ['past perfect', '{k|لَوْ كُنْتُ قَدْ} صَوَّرْتُ جَوَازِي، {k|لَكُنْتُ قَدْ} وَفَّرْتُ سَاعَاتٍ مِنَ القَلَقِ.', 'law kuntu qad'] },
        { cells: ['negative', '{k|لَوْ كُنْتُ قَدِ} اخْتَرْتُ رِحْلَةً مُبَاشِرَةً، {k|لَمَا} وَاجَهْتُ هٰذَا التَّأْخِيرَ.', 'law … lamā'] },
        { cells: ['passive', 'أَوْضَحَ أَنَّ تَأْخِيرَ الطَّقْسِ {e|لَا يُعَوَّضُ} عَادَةً.', 'lā + passive'] },
        { core: true, cells: ['the close', '{k|لَوْ} فَعَلْتُ ذٰلِكَ، {k|لَمَا} عِشْتُ يَوْمًا كَامِلًا مِنَ القَلَقِ.', 'law … lamā'] },
      ],
      ltr: true,
      foot: 'Website mistake 1: law ishtaraytu, sa-ḥaṣaltu ✗ → la-ḥaṣaltu ✓. Never sa- after law.',
      notes: `GRAMMAR PART 4 — the website differentiation asks Stretch writers to make the Type 2 regret “the most complex sentence”. Rows from the website live builder, listening, reading and writing model.
Row 2 is the most advanced: past perfect in both halves (لَوْ كُنْتُ قَدْ … لَكُنْتُ قَدْ …) — “if I had …, I would have …”.
Row 4 (passive): يُعَوِّضُ (compensates) → يُعَوَّضُ (is compensated).
Website mistake 1 also shows the waṣl kasra: لَوِ اشْتَرَيْتُ — law takes a kasra to join the next word.`,
    },
  ],
  quick: [0, 1, 4, 6],
  rest: [2, 3, 5, 7],
  ido: {
    title: 'Watch me tell a problem story',
    steps: [
      { head: 'Precaution', ar: '{p|كُنْتُ قَدْ} خَطَّطْتُ …', think: 'Had done.' },
      { head: 'Problem', ar: '{e|اكْتَشَفْتُ أَنَّ} حَقِيبَتِي {e|ضَاعَتْ}', think: 'Past.' },
      { head: 'Action + official', ar: 'قَرَّرْتُ أَنْ {k|أَلْجَأَ} · {m|قَالَ … إِنَّ}', think: '-a after an.' },
      { head: 'Plan + regret', ar: '{w|إِذَا … سَـ} · {k|لَوْ … لَمَا}', think: 'Type 1, Type 2.' },
    ],
    legend: ['p', 'e', 'm', 'w', 'k'], legendLabels: { p: 'PRECAUTION', e: 'PROBLEM', m: 'OFFICIAL', w: 'PLAN', k: 'AN + -A / REGRET' },
    model: '{p|كُنْتُ قَدْ} خَطَّطْتُ لِرِحْلَتِي بِعِنَايَةٍ، {p|وَكُنْتُ قَدْ} تَأَكَّدْتُ مِنْ حَجْزِي مَرَّتَيْنِ. لٰكِنْ عِنْدَ الوُصُولِ، {e|اكْتَشَفْتُ أَنَّ} حَقِيبَتِي {e|ضَاعَتْ} فِي المَطَارِ. حَاوَلْتُ أَنْ {k|أَتَصَرَّفَ} بِهُدُوءٍ، وَقَرَّرْتُ أَنْ {k|أَلْجَأَ} إِلَى مَكْتَبِ الأَمْتِعَةِ المَفْقُودَةِ. {m|قَالَ} المُوَظَّفُ {m|إِنَّ} الحَقِيبَةَ سَتَصِلُ فِي اليَوْمِ التَّالِي. {w|إِذَا} سَافَرْتُ ثَانِيَةً، {w|سَأَضَعُ} أَشْيَائِي المُهِمَّةَ فِي حَقِيبَةِ اليَدِ. {k|وَلَوْ} كُنْتُ قَدْ فَعَلْتُ ذٰلِكَ هٰذِهِ المَرَّةَ، {k|لَمَا} عِشْتُ يَوْمًا كَامِلًا مِنَ القَلَقِ.',
    modelEn: 'I had planned my trip carefully, and I had checked my booking twice. But on arrival, I discovered that my suitcase had been lost at the airport. I tried to act calmly, and I decided to turn to the lost-luggage office. The official said that the suitcase would arrive the next day. If I travel again, I will put my important things in my hand luggage. And had I done that this time, I would not have lived through a whole day of worry.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “Stage 1 — what had I done? kuntu qad. Stage 2 — what went wrong? iktashaftu anna … ḍāʿat. Now my action: qarrartu AN — so the verb ends in -a: aljaʾA. Stage 3 — the official: qāla … INNA. Stage 4 — next time: idhā … SA-. Stage 5 — the regret: law … LAMĀ.”',
  },
  patternEn: ['I had checked my booking, then I discovered the flight was cancelled', 'the airport official said that the luggage is safe', 'had I bought insurance, I would have got full compensation'],
  gameKey: 'P3-L06',
  game: {
    title: 'What went wrong? Match the picture',
    pick: [0, 1, 4],
    en: ['The flight was delayed.', 'My suitcase got lost.', 'I lost my way.'],
    icons: [[['fa6', 'FaPlaneCircleExclamation', '1D5FBF'], ['fa6', 'FaClock', 'C77700']], [['fa6', 'FaSuitcaseRolling', 'C0386B'], ['fa6', 'FaCircleQuestion', 'C77700']], [['fa6', 'FaMapLocationDot', '1E6B52'], ['fa6', 'FaPersonCircleQuestion', 'C0386B']]],
    labels: ['flight delay', 'lost suitcase', 'lost the way'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Then give each problem a solution with an: يَجِبُ أَنْ أَنْتَظِرَ بِهُدُوءٍ · قَرَّرْتُ أَنْ أُبَلِّغَ عَنِ الفُقْدَانِ · حَاوَلْتُ أَنْ أَسْتَشِيرَ شُرْطَةَ السِّيَاحَةِ.',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a problem narrative (website live builder)', title: 'Precaution + official + plan or regret', ar: 'ابْنِ قِصَّةَ مُشْكِلَةٍ',
      cols: [{ label: '1 · Precaution', w: 4.0, size: 16 }, { label: '2 · What the official said', w: 4.1, size: 16 }, { label: '3 · Plan / regret / decision', w: 4.23, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Then add a problem in the past between columns 1 and 2.',
      notes: `WE DO (3 min) — the website live builder: “${site.live_builder.target}” Website feedback: any three different combinations work.
Core: read row 1 across, then add the problem: لٰكِنَّ الرِّحْلَةَ أُلْغِيَتْ. Develop: find the two verbs after an that end in -a (أُبَلِّغَ · أَحْتَفِظَ). Stretch: upgrade column 3 row 2 to لَوْ كُنْتُ قَدْ أَمَّنْتُ رِحْلَتِي، لَكُنْتُ قَدْ حَصَلْتُ عَلَى تَعْوِيضٍ.`,
    },
  ],
  sorterTitle: 'Precaution / regret, problem — or help verb?',
  sorterCats: ['precaution / regret', 'problem (past)', 'help verbs'],
  sorterNotes: 'Then tell a three-sentence story with a card from each column: كُنْتُ قَدْ … · ثُمَّ … · فَقَرَّرْتُ أَنْ … .',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns, final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'waṣl alif shown without a kasra; rule headings and formulas in English and transliteration; sorter headings in English; the subjunctive, help-verb and regret tables are teacher-built from the website texts. All other website items, including the visual game, are used as published.',
  hints: ['law … sa-?', 'an + -u?', 'yuballigh + no ʿan?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 3.\nListen for: kuntu qad · iktashaftu anna · qāla … inna.',
  listenRoutes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5 — and write down every verb you hear after an.',
  gloss: [
    ['يَرْوِي المُسَافِرُ: كُنْتُ قَدْ وَصَلْتُ إِلَى المَطَارِ مُبَكِّرًا، وَكُنْتُ قَدْ تَأَكَّدْتُ مِنْ حَجْزِي مَرَّتَيْنِ.', 'The traveller recounts: I had arrived at the airport early, and I had checked my booking twice.'],
    ['لٰكِنْ فَجْأَةً اكْتَشَفْتُ أَنَّ جَوَازَ سَفَرِي مَفْقُودٌ. حَاوَلْتُ أَنْ أَتَصَرَّفَ بِهُدُوءٍ، وَقَرَّرْتُ أَنْ أَلْجَأَ إِلَى شُرْطَةِ السِّيَاحَةِ.', 'But suddenly I discovered that my passport was missing. I tried to act calmly, and I decided to turn to the tourist police.'],
    ['قَالَ المُوَظَّفُ إِنَّهُ يَجِبُ أَنْ أُبَلِّغَ عَنِ الفُقْدَانِ ثُمَّ أَذْهَبَ إِلَى السَّفَارَةِ. وَأَشَارَ إِلَى أَنَّنِي سَأَحْصُلُ عَلَى وَثِيقَةِ سَفَرٍ مُؤَقَّتَةٍ.', 'The officer said that I must report the loss and then go to the embassy. He pointed out that I would get a temporary travel document.'],
    ['إِذَا سَافَرْتُ ثَانِيَةً، سَأَحْتَفِظُ بِنُسْخَةٍ مِنْ وَثَائِقِي.', 'If I travel again, I will keep a copy of my documents.'],
    ['وَلَوْ كُنْتُ قَدْ صَوَّرْتُ جَوَازِي قَبْلَ الرِّحْلَةِ، لَكُنْتُ قَدْ وَفَّرْتُ سَاعَاتٍ مِنَ القَلَقِ.', 'And had I photographed my passport before the trip, I would have saved hours of worry.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا كُنْتَ قَدْ فَعَلْتَ قَبْلَ أَنْ تَحْدُثَ المُشْكِلَةُ؟' },
      { route: 'develop', ar: 'مَاذَا قَالَ المُوَظَّفُ؟ وَمَاذَا قَرَّرْتَ أَنْ تَفْعَلَ؟' },
      { route: 'stretch', ar: 'لَوْ كُنْتَ قَدْ فَعَلْتَ شَيْئًا مُخْتَلِفًا، مَاذَا كَانَ سَيَتَغَيَّرُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'كُنْتُ قَدْ ______ ، ثُمَّ اكْتَشَفْتُ أَنَّ ______ .' },
      { route: 'develop', ar: 'قَالَ المُوَظَّفُ إِنَّ ______ ، فَقَرَّرْتُ أَنْ ______ .' },
      { route: 'stretch', ar: 'لَوْ كُنْتُ قَدْ ______ ، لَمَا ______ .' },
    ],
    modelEn: ['What had you done before the problem?', 'I had checked my booking, then I discovered the flight had been cancelled.', 'And what did you decide to do?', 'I decided to turn to the office — and had I insured my trip, I would have got compensation.'],
    notes: 'Website prompts and model. Pair task: “the airport desk” — A is the traveller with a problem card (delay / lost bag / lost passport), B is the official who must answer with يَجِبُ أَنْ + -a. Then swap. To a girl: كُنْتِ قَدْ فَعَلْتِ · قَرَّرْتِ أَنْ تَفْعَلِي.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Website Core: the five-stage sequence for one problem, one sentence each.' },
    develop: { amount: '60–80 words', how: 'Website Develop: expand the past narrative and add a subjunctive after an.' },
    stretch: { amount: '100–110 words', how: 'Website task: a narrative using all five structures, with the Type 2 regret as the most complex sentence.' },
  },
  frames: {
    core: [
      { en: 'I had … (precaution)', ar: 'كُنْتُ قَدْ ______ .' },
      { en: 'Then I discovered that …', ar: 'ثُمَّ اكْتَشَفْتُ أَنَّ ______ .' },
      { en: 'The official said that …', ar: 'قَالَ المُوَظَّفُ إِنَّ ______ .' },
      { en: 'If I travel again, I will buy …', ar: 'إِذَا سَافَرْتُ ثَانِيَةً، سَأَشْتَرِي ______ .' },
    ],
    develop: [
      { en: 'I tried to act calmly.', ar: 'حَاوَلْتُ أَنْ أَتَصَرَّفَ بِهُدُوءٍ.' },
      { en: 'I decided to turn to …', ar: 'قَرَّرْتُ أَنْ أَلْجَأَ إِلَى ______ .' },
      { en: 'He pointed out that I must …', ar: 'أَشَارَ إِلَى أَنَّهُ يَجِبُ أَنْ ______ .' },
      { en: 'Had I …, I would not have …', ar: 'لَوْ كُنْتُ قَدْ ______ ، لَمَا ______ .' },
    ],
    bank: ['تَأَكَّدْتُ مِنْ حَجْزِي', 'وَصَلْتُ مُبَكِّرًا', 'خَطَّطْتُ بِعِنَايَةٍ', 'الرِّحْلَةَ أُلْغِيَتْ', 'حَقِيبَتِي ضَاعَتْ', 'جَوَازَ سَفَرِي مَفْقُودٌ', 'شُرْطَةِ السِّيَاحَةِ', 'السَّفَارَةِ', 'أُبَلِّغَ عَنِ الفُقْدَانِ', 'أَشْتَرِي تَأْمِينًا', 'حَصَلْتُ عَلَى تَعْوِيضٍ', 'وَاجَهْتُ هٰذَا التَّأْخِيرَ'],
  },
  stretch: [
    ['لٰكِنْ عِنْدَ الوُصُولِ', 'but on arrival'],
    ['وَأَشَارَ إِلَى أَنَّهُ يَجِبُ أَنْ أُبَلِّغَ عَنِ الفُقْدَانِ رَسْمِيًّا', 'and he pointed out that I must report the loss officially'],
    ['طَلَبْتُ التَّعْوِيضَ وَحَصَلْتُ عَلَى مَبْلَغٍ بَسِيطٍ', 'I asked for compensation and got a small sum'],
    ['سَأَضَعُ أَشْيَائِي المُهِمَّةَ فِي حَقِيبَةِ اليَدِ', 'I will put my important things in my hand luggage'],
    ['لَمَا عِشْتُ يَوْمًا كَامِلًا مِنَ القَلَقِ', 'I would not have lived through a whole day of worry'],
  ],
  modelEn: 'I had planned my trip carefully, and I had checked my booking twice before travelling. But on arrival, I discovered that my suitcase had been lost at the airport. I tried to act calmly, and I decided to turn to the lost-luggage office. The official said that the suitcase would arrive the next day, and he pointed out that I must report the loss officially. I asked for compensation and got a small sum. If I travel again, I will put my important things in my hand luggage. And had I done that this time, I would not have lived through a whole day of worry.',
  find: ['kuntu qad (precaution)', 'iktashaftu anna (problem)', 'qāla … inna · an + -a', 'idhā … sa- · law … lamā'],
  modelNotes: 'Website writing model. Evidence: كُنْتُ قَدْ خَطَّطْتُ · كُنْتُ قَدْ تَأَكَّدْتُ · اكْتَشَفْتُ أَنَّ حَقِيبَتِي ضَاعَتْ · أَنْ أَتَصَرَّفَ · أَنْ أَلْجَأَ · قَالَ المُوَظَّفُ إِنَّ · أَنْ أُبَلِّغَ · إِذَا سَافَرْتُ … سَأَضَعُ · لَوْ كُنْتُ قَدْ فَعَلْتُ … لَمَا عِشْتُ.',
  selfCheck: [
    { route: 'core', text: 'My story has a precaution (kuntu qad) and a problem in the past.' },
    { route: 'core', text: 'I used a help verb with its partner (yuballigh ʿan · yaljaʾ ilā).' },
    { route: 'develop', text: 'I reported the official with qāla … inna.' },
    { route: 'develop', text: 'My verbs after an end in -a.' },
    { route: 'stretch', text: 'I have idhā … sa- for next time and law … la- / lamā for my regret.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['بِعِنَايَةٍ', 'carefully'], ['الشَّاشَةِ', 'the screen'], ['شَرِكَةِ الطَّيَرَانِ', 'the airline'], ['الطَّقْسِ', 'the weather'], ['صَالَةِ المُغَادَرَةِ', 'the departure lounge'],
    ['أَوْضَحَ', 'he explained'], ['لَا يُعَوَّضُ', 'is not compensated'], ['وَاجَهْتُ', 'I faced'], ['يُغَطِّي', 'it covers'], ['مُبَاشِرَةً', 'direct'],
  ],
  prep: {
    words: [['حَسَاسِيَّةٌ ثَقَافِيَّةٌ', 'cultural sensitivity', '—'], ['تَقَالِيدُ مَحَلِّيَّةٌ', 'local customs', 'sg. تَقْلِيدٌ'], ['قَوَاعِدُ اللِّبَاسِ', 'the dress code', '—'], ['مَلَابِسُ مُحْتَشِمَةٌ', 'modest clothing', '—'], ['يُسْتَحْسَنُ أَنْ', 'it is preferable that', '+ verb in -a']],
    questionEn: 'What should a visitor do to respect local customs?',
    questionAr: 'يُسْتَحْسَنُ أَنْ يَحْتَرِمَ الزَّائِرُ ______ .',
    homework: {
      core: 'Write the five-stage sequence for one travel problem, one sentence each.',
      develop: 'Expand it to 60–80 words with a verb after an (qarrartu an … / yajibu an …).',
      stretch: 'Website writing task: a 100–110-word travel-problem narrative using all five structures.',
    },
    wordsSource: 'The five words come from the website P3-L07 vocabulary (cultural sensitivity).',
  },
  remember: 'Remember: precaution (kuntu qad) → problem (iktashaftu anna) → official (qāla … inna) → next time (idhā … sa-) → regret (law … la-) — and after an, the verb ends in -a: qarrartu an aljaʾa.',
});

module.exports = { meta, slides };
