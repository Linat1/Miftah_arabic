'use strict';
/* P2-L10 · Listening — Education and Future Plans Texts — website: Pathways › Progression › P2 › P2-L10 (listening-skills lesson: reported speech in three
 * audible parts — verb · particle + pronoun · content; إِذَا vs لَوْ by ear; the fast past-perfect unit كَانَ قَدْ; the speaker’s own view أَرَى أَنَّ vs a cited view).
 * The website listening (a student’s educational journey) is split into two short listens. Website vocabulary, rules, quiz, sorter, mistakes, listening,
 * reading (strategy guide), speaking, writing, live builder and mission used as published, with waṣl alif shown without a kasra; rule examples shown without
 * English glosses; two listening questions added (the subject chosen · the speaker’s own view). The website visual game repeats the P2-L01 / P2-L03 cards,
 * so it is not used. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P2')({
  n: 10, fileTitle: 'Listening_Education_and_Future_Plans_Texts', chip: 'Listening Skills',
  title: 'Listening — Education and Future Plans Texts', arabic: 'الاسْتِمَاعُ — نُصُوصُ التَّعْلِيمِ وَخُطَطِ المُسْتَقْبَلِ',
  focus: 'Listen like an examiner: decode reported speech in three parts (who said it · about whom · what), hear idhā as a real plan and law as a counterfactual, catch kāna qad as one fast unit, and keep the speaker’s own view apart from a cited one.',
  icon: 'FaHeadphones', iconSet: 'fa6',
});

const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const sp = (pl) => ({ tag: 'sg · pl', forms: [{ l: 'pl.', ar: pl }] });
const site = D.waslFix(D.site('P2-L10'));
const RH = [['Decode reported speech', 'verb + inna / anna + content'], ['idhā vs law by ear', 'idhā … sa- (real) · law … la- (unreal)'], ['Catch the past-perfect unit', 'kāna-qad-verb'], ['Own view vs cited view', 'arā anna vs qāla … inna']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const S = site.listening.script;
const cut = S.indexOf('إِذَا قُبِلْتُ');
const T1 = S.slice(0, cut).trim();
const T2 = S.slice(cut).trim();
const LB = site.live_builder.groups;

const slides = D.devLesson('P2-L10', {
  support: `• LISTENING-SKILLS LESSON (IGCSE Paper 1 style): the website script is read in TWO short parts, each with its own questions, read-along and answers. Read it yourself at natural speed — kāna qad should sound like ONE word.
• Before each listen, students label every question R / C / P / O (reported · conditional · past perfect · own opinion) and write the signal word they expect (قَالَ · إِذَا / لَوْ · كَانَ قَدْ · أَرَى).
• Core: questions 1, 2 and 3 + the signal words. Develop: all questions + say which structure each targeted. Stretch: explain how idhā vs law changed the meaning of one answer (website Stretch).
• Grammar links: reported speech (P2-L02) · past perfect (P2-L03) · Type 2 (P2-L06) · reporting verbs and stance (P2-L08) · listening routine (P1-L10).`,
  teach: 'Three parts of reported speech, idhā vs law by ear, kāna qad, own vs cited view.',
  wedo: 'Two short listens with read-along, then sort the signals and build a listening report.',
  next: { nextCode: 'P2-L11', nextTitle: 'Consolidation — Speaking Preparation, Error Analysis and Grammar Mastery', nextAr: 'تَرْسِيخُ الوَحْدَةِ — إِعْدَادُ التَّحَدُّثِ' },
  objectives: ['Predict which structure each question targets before listening.', 'Catch the reporting verb, inna / anna and the reported content.', 'Tell a real idhā conditional from a hypothetical law one by ear.', 'Hear the fast past-perfect unit kāna qad.'],
  objNotes: 'Website objectives (Arabic shown in transliteration on the slide so the lines read cleanly). The route statements turn them into this lesson’s concrete targets.',
  rulesAr: 'سَمَاعُ البُنَى فِي الكَلَامِ السَّرِيعِ',
  ruleEx: [['قَالَ المُرْشِدُ إِنَّنِي سَأَنْجَحُ', 'أَشَارَ الخَبِيرُ إِلَى أَنَّ الإِصْلَاحَ ضَرُورِيٌّ'], ['إِذَا قُبِلْتُ، سَأَدْرُسُ الطِّبَّ', 'لَوْ تَوَافَرَ الدَّعْمُ، لَتَفَوَّقْتُ'], ['كُنْتُ قَدْ حَصَلْتُ عَلَى مِنْحَةٍ'], ['أَرَى أَنَّ …', 'قَالَ الخَبِيرُ إِنَّ …']],
  doNow: {
    questions: [
      q('What does مُشَتِّتٌ mean?', ['a distractor', 'a key word', 'a signal'], 'Prepared at home (P2-L09).'),
      q('What does مَنْحَةٌ دِرَاسِيَّةٌ mean?', ['a scholarship', 'an exam', 'a university'], 'Prepared at home (P2-L09).'),
      q('What does نِسْبَةُ القَبُولِ mean?', ['the acceptance rate', 'exam pressure', 'the pass mark'], 'Prepared at home (P2-L09).'),
      q('Which pair shows both conditional types?', ['إِذَا قُبِلْتُ سَأَدْرُسُ؛ وَلَوْ تَوَافَرَ الدَّعْمُ لَتَفَوَّقْتُ.', 'إِذَا قُبِلْتُ سَأَدْرُسُ؛ وَإِذَا تَوَافَرَ الدَّعْمُ سَأَتَفَوَّقُ.', 'لَوْ قُبِلْتُ لَدَرَسْتُ؛ وَلَوْ تَوَافَرَ الدَّعْمُ لَتَفَوَّقْتُ.'], 'P2-L09: one idhā, one law.'),
      q('Choose the accurate past perfect.', ['كُنْتُ قَدْ قَرَّرْتُ تَخَصُّصِي.', 'كَانَ قَدْ قَرَّرْتُ تَخَصُّصِي.', 'كُنْتُ قَدْ أُقَرِّرُ تَخَصُّصِي.'], 'P2-L03: kuntu qad + past.'),
    ],
    keyIdea: { text: 'One small word changes the answer: inna-nī (me) or inna-hu (him)? idhā (real) or law (unreal)?', ar: '{m|قَالَ} مُرْشِدِي {m|إِنَّنِي} … · {k|إِذَا} … {k|سَـ} · {p|لَوْ} … {p|لَـ} · {e|كَانَ قَدْ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P2-L09. Questions 4–5 retrieve both conditional types (P2-L09) and the past perfect (P2-L03) — today students must catch them by ear at natural speed.',
  },
  routes: {
    core: ['I can write the signal word for each question.', 'I can say who said it and about whom.'],
    develop: ['I can hear idhā (real) vs law (hypothetical).', 'I can catch kāna qad + verb as one unit.'],
    stretch: ['I can tell the speaker’s view from a cited one.', 'I can explain how idhā / law changed an answer.'],
  },
  bridge: [
    { ar: 'ضَمِيرٌ', urdu: 'ضمیر', tr: 'zamīr', en: 'a pronoun (Urdu also: conscience)' },
    { ar: 'إِشَارَةٌ', urdu: 'اشارہ', tr: 'ishāra', en: 'a signal, cue' },
    { ar: 'امْتِحَانٌ', urdu: 'امتحان', tr: 'imtihān', en: 'an exam' },
    { ar: 'شَرْطٌ', urdu: 'شرط', tr: 'shart', en: 'a condition' },
    { ar: 'مُرْشِدٌ', urdu: 'مرشد', tr: 'murshid', en: 'Arabic: an adviser · Urdu: a spiritual guide' },
  ],
  bridgeNotes: 'URDU BRIDGE: ضمیر، اشارہ، امتحان and شرط are shared. CAREFUL: Urdu مرشد usually means a spiritual guide; in this listening مُرْشِدِي is simply “my (careers) adviser”. And Urdu ضمیر also means conscience — here it is the grammar word “pronoun”.',
  core: ['الفِعْلُ النَّاقِلُ', 'إِشَارَةٌ', 'كَلِمَةٌ مِفْتَاحِيَّةٌ', 'مُشَتِّتٌ', 'شَرْطٌ حَقِيقِيٌّ', 'شَرْطٌ افْتِرَاضِيٌّ', 'مَنْحَةٌ دِرَاسِيَّةٌ', 'نِسْبَةُ القَبُولِ', 'ضَغْطُ الامْتِحَانَاتِ', 'مُرْشِدٌ', 'كَانَ قَدْ', 'ضَمِيرٌ'],
  forms: {
    'إِشَارَةٌ': sp('إِشَارَاتٌ'), 'كَلِمَةٌ مِفْتَاحِيَّةٌ': sp('كَلِمَاتٌ مِفْتَاحِيَّةٌ'), 'مُشَتِّتٌ': sp('مُشَتِّتَاتٌ'), 'مَنْحَةٌ دِرَاسِيَّةٌ': sp('مِنَحٌ دِرَاسِيَّةٌ'),
    'مَجَالٌ': sp('مَجَالَاتٌ'), 'إِصْلَاحٌ تَعْلِيمِيٌّ': sp('إِصْلَاحَاتٌ تَعْلِيمِيَّةٌ'), 'ضَمِيرٌ': sp('ضَمَائِرُ'),
    'مُرْشِدٌ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'مُرْشِدُونَ' }, { l: 'f.', ar: 'مُرْشِدَةٌ' }] },
    'كَانَ قَدْ': { tag: 'he · she · they', forms: [{ l: 'they', ar: 'كَانُوا قَدْ' }, { l: 'she', ar: 'كَانَتْ قَدْ' }] },
  },
  vocabNotes: {
    0: 'Listening for structure — the vocabulary of exam strategy: the reporting verb, the signal, the key word, the source — and the مُشَتِّتٌ (distractor) that repeats heard words with the wrong meaning.',
    1: 'Education content you will hear: a scholarship, the acceptance rate, exam pressure, a field of study, an adviser.',
    2: 'Grammar markers by ear: each one is short and fast — قَالَ إِنَّ · كَانَ قَدْ · إِذَا · لَوْ · سَـ · لَـ. Miss one and the meaning changes.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · reported speech in three audible parts (website rule 1 + teaching point 1) · Core', title: 'Who said it — and about whom?', ar: 'مَنْ قَالَ؟ وَعَمَّنْ؟',
      cols: [{ label: 'You hear', w: 6.0, size: 20 }, { label: 'Pronoun', w: 2.1 }, { label: 'Who will succeed?', w: 4.23 }],
      rows: [
        { core: true, cells: ['{m|قَالَ} مُرْشِدِي {w|إِنَّنِي} {k|سَأَنْجَحُ}.', '-nī (me)', 'the speaker'] },
        { core: true, cells: ['{m|قَالَ} مُرْشِدِي {w|إِنَّهُ} {k|سَيَنْجَحُ}.', '-hu (him)', 'another boy'] },
        { cells: ['{m|قَالَتِ} المُعَلِّمَةُ {w|إِنَّهَا} {k|سَتَنْجَحُ}.', '-hā (her)', 'a girl'] },
        { cells: ['{m|قَالَ} المُرْشِدُ {w|إِنَّهُمْ} {k|سَيَنْجَحُونَ}.', '-hum (them)', 'a group'] },
        { cells: ['{m|أَشَارَ} الخَبِيرُ {w|إِلَى أَنَّ} الإِصْلَاحَ {k|ضَرُورِيٌّ}.', 'a noun', '— (a claim about reform)'] },
      ],
      ltr: true,
      foot: 'Verb = WHO said it · inna / anna + pronoun = ABOUT WHOM · content = WHAT (the tense is kept).',
      notes: `GRAMMAR PART 1 — website rule “Decode reported speech” (the verb tells you the source; the pronoun tells you about whom) and teaching point “Reported speech has three audible parts”.
Website quiz 1: «قَالَ مُرْشِدِي إِنَّنِي سَأَنْجَحُ» — who succeeds? The speaker (إِنَّنِي), not the mentor. Quiz 7: a boy’s «سَأَدْرُسُ» → قَالَ إِنَّهُ سَيَدْرُسُ.
Drill (2 min): say one row; students hold up 1 finger (me), 2 (him), 3 (her), 4 (them). The pronoun is ONE short syllable — train the ear for -nī / -hu / -hā / -hum.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · idhā vs law by ear (website rule 2 + teaching point 2) · Core / Develop', title: 'One word decides: real or imagined?', ar: 'إِذَا أَمْ لَوْ؟',
      cards: [
        { chip: 'REAL PLAN · CORE', color: '1E6B52', head: 'إِذَا … سَـ', big: 'إِذَا قُبِلْتُ فِي الجَامِعَةِ، سَأَتَخَصَّصُ فِي الطَّاقَةِ المُتَجَدِّدَةِ.', en: 'If I am accepted, I will specialise in renewable energy.', clue: 'Still possible.' },
        { chip: 'COUNTERFACTUAL · DEVELOP', color: 'C0386B', head: 'لَوْ … لَـ', big: 'لَوْ تَوَافَرَتْ لِي مَوَارِدُ أَفْضَلُ، لَكُنْتُ قَدْ تَقَدَّمْتُ أَسْرَعَ.', en: 'Had better resources been available, I would have progressed faster.', clue: 'It did not happen.' },
        { chip: 'NEGATIVE REAL · STRETCH', color: '6B4C9A', head: 'إِذَا لَمْ … لَنْ', big: 'إِذَا لَمْ أَجْتَهِدْ، لَنْ أَحْصُلَ عَلَى مِنْحَةٍ.', en: 'If I do not work hard, I will not get a scholarship.', clue: 'lam + lan.' },
      ],
      error: { text: 'Website mistake 2: law is not a real plan.', pairs: [['سَمِعْتُ «لَوْ» فَفَهِمْتُ أَنَّهُ افْتِرَاضٌ', 'سَمِعْتُ «لَوْ» فَفَهِمْتُ أَنَّهُ خُطَّةٌ وَاقِعِيَّةٌ']] },
      notes: `GRAMMAR PART 2 — website rule “إِذَا vs لَوْ by ear” and teaching point “إِذَا is real; لَوْ signals a counterfactual”. Cards 1–2 are from the website listening.
Card 3 is the website sorter item إِذَا لَمْ … لَنْ (a real conditional in the negative): lam + jussive in the condition, lan + subjunctive in the result.
Ear tip: law is one short syllable — listen for the la- at the start of the RESULT (لَكُنْتُ · لَتَفَوَّقْتُ) as a second clue.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the fast past-perfect unit (website rule 3) · Develop', title: 'kuntu-qad-qarrartu: one fast unit', ar: 'كَانَ قَدْ — وَحْدَةٌ سَرِيعَةٌ',
      cols: [{ label: 'Person', w: 2.0 }, { label: 'You hear', w: 4.4, size: 22 }, { label: 'Sounds like', w: 3.4 }, { label: 'Clue', w: 2.53 }],
      rows: [
        { core: true, cells: ['I', '{e|كُنْتُ قَدْ حَصَلْتُ}', 'kuntu-qad-ḥaṣaltu', '-tu twice'] },
        { core: true, cells: ['he', '{e|كَانَ قَدْ حَصَلَ}', 'kāna-qad-ḥaṣala', '-a twice'] },
        { cells: ['she', '{e|كَانَتْ قَدْ حَصَلَتْ}', 'kānat-qad-ḥaṣalat', '-at twice'] },
        { cells: ['they', '{e|كَانُوا قَدْ حَصَلُوا}', 'kānū-qad-ḥaṣalū', '-ū twice'] },
        { cells: ['I (Type 2 result)', '{p|لَكُنْتُ} {e|قَدْ تَقَدَّمْتُ}', 'la-kuntu-qad-taqaddamtu', 'la- + past perfect'] },
      ],
      ltr: true,
      foot: 'The ending repeats: kāna and the main verb carry the SAME person — so the first ending tells you who.',
      notes: `GRAMMAR PART 3 — website rule “Catch the past-perfect unit” (spoken fast as one unit; hear all three parts) and the website reading (… «كَانَ قَدْ»، وَهِيَ تُقَالُ بِسُرْعَةٍ كَوَحْدَةٍ وَاحِدَةٍ).
Listening part 1 has two in a row: كُنْتُ قَدْ قَرَّرْتُ … وَكُنْتُ قَدْ حَصَلْتُ. Part 2 has the Type 2 + past perfect: لَكُنْتُ قَدْ تَقَدَّمْتُ.
Drill: say each row at full speed; students write the person (I / he / she / they) — the ending is the clue.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · the speaker’s view or a cited one? (website rule 4 + listening) · Stretch', title: 'Whose opinion is it?', ar: 'رَأْيُ المُتَحَدِّثِ أَمْ رَأْيُ غَيْرِهِ؟',
      cols: [{ label: 'You hear (website listening)', w: 6.4, size: 19 }, { label: 'Whose view?', w: 2.6 }, { label: 'Signal', w: 3.33 }],
      rows: [
        { core: true, cells: ['{w|أَرَى أَنَّ} ضَغْطَ الامْتِحَانَاتِ كَبِيرٌ.', 'the speaker’s own', 'arā (I think)'] },
        { core: true, cells: ['{m|قَالَ} مُرْشِدِي إِنَّنِي مُؤَهَّلٌ.', 'the adviser’s', 'qāla'] },
        { cells: ['{m|وَأَكَّدَ} أَنَّ اجْتِهَادِي سَيُثْمِرُ.', 'the adviser’s (about me)', 'akkada + -ī'] },
        { cells: ['{m|وَأَشَارَ} تَقْرِيرٌ إِلَى أَنَّ نِسْبَةَ القَبُولِ مُرْتَفِعَةٌ.', 'a report’s', 'ashāra'] },
      ],
      ltr: true,
      foot: 'Website mistake 1: «qāla l-khabīru inna …» reports the EXPERT’s view, not the speaker’s.',
      notes: `GRAMMAR PART 4 — website rule “Own view vs cited view” (a reporting verb signals a cited view, not the speaker’s own) and website mistake 1. All four rows are from the website listening.
Website mistake 3: أَشَارَ الخَبِيرُ أَنَّ ✗ → أَشَارَ … إِلَى أَنَّ.
Exam link (P2-L08): when a question asks “what does the SPEAKER think?”, look for أَرَى أَنَّ / فِي رَأْيِي — not for قَالَ.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me label, predict, listen',
    steps: [
      { head: 'Label', ar: 'R · C · P · O', think: 'What does it ask?' },
      { head: 'Who?', ar: '{m|قَالَ} … {m|إِنَّنِي}', think: 'The speaker.' },
      { head: 'Real?', ar: '{k|إِذَا} … · {p|لَوْ} …', think: 'Plan or not?' },
      { head: 'Unit', ar: '{e|كُنْتُ-قَدْ-قَرَّرْتُ}', think: 'One fast unit.' },
    ],
    legend: ['e', 'm', 'k', 'p'], legendLabels: { e: 'PAST PERFECT', m: 'REPORTED', k: 'REAL · IDHĀ', p: 'COUNTERFACTUAL · LAW' },
    model: 'يَقُولُ الطَّالِبُ: {e|كُنْتُ قَدْ قَرَّرْتُ} دِرَاسَةَ الهَنْدَسَةِ. {m|قَالَ} مُرْشِدِي {m|إِنَّنِي} مُؤَهَّلٌ. {k|إِذَا قُبِلْتُ} فِي الجَامِعَةِ، {k|سَأَتَخَصَّصُ} فِي الطَّاقَةِ المُتَجَدِّدَةِ. {p|وَلَوْ تَوَافَرَتْ} لِي مَوَارِدُ أَفْضَلُ، {p|لَكُنْتُ} قَدْ تَقَدَّمْتُ أَسْرَعَ.',
    modelEn: 'The student says: I had decided to study engineering. My adviser said that I am qualified. If I am accepted at the university, I will specialise in renewable energy. And had better resources been available to me, I would have progressed faster.',
    notes: 'I DO (3 min) — model the routine on listening questions 1–4 BEFORE the class hears the text. Label (P, R, C, C) → write the signals (كُنْتُ قَدْ · قَالَ · إِذَا · لَوْ) → read the four sentences aloud once → circle إِنَّنِي (me!) and the la- of لَكُنْتُ. The copy box shows the transcript AFTER annotation.',
  },
  patternEn: ['my adviser said that I will certainly succeed', 'had the support been available, I would have excelled more', 'I had obtained a scholarship before secondary school'],
  listenParts: [
    {
      title: 'Part 1: background and the adviser', script: T1, q: [0, 1], min: 3,
      extra: [L('Which subject had the student decided to study?', ['engineering', 'medicine', 'law'], 'كُنْتُ قَدْ قَرَّرْتُ دِرَاسَةَ الهَنْدَسَةِ.')],
      tip: 'Label first: P · R · P.\nListen for: kuntu qad · qāla … inna-nī.',
      routes: 'Core: questions 1 and 3. Develop/Stretch: all three — in question 2, who is “qualified”? (إِنَّنِي = the speaker).',
      gloss: [
        ['يَقُولُ الطَّالِبُ: بِحُلُولِ نِهَايَةِ الثَّانَوِيَّةِ، كُنْتُ قَدْ قَرَّرْتُ دِرَاسَةَ الهَنْدَسَةِ، وَكُنْتُ قَدْ حَصَلْتُ عَلَى خِبْرَةٍ عَمَلِيَّةٍ.', 'The student says: by the end of secondary school, I had decided to study engineering, and I had gained practical experience.'],
        ['قَالَ مُرْشِدِي إِنَّنِي مُؤَهَّلٌ، وَأَكَّدَ أَنَّ اجْتِهَادِي سَيُثْمِرُ.', 'My adviser said that I am qualified, and stressed that my hard work will pay off.'],
      ],
    },
    {
      title: 'Part 2: plans, a counterfactual and opinions', script: T2, q: [2, 3, 4], min: 3,
      extra: [L('What is the student’s OWN view of exam pressure?', ['It is great, but it pushes him to work', 'It does not exist', 'The report says it is low'], 'أَرَى أَنَّ ضَغْطَ الامْتِحَانَاتِ كَبِيرٌ، لٰكِنَّهُ يَدْفَعُنِي إِلَى العَمَلِ.')],
      tip: 'Label first: C · C · R · O.\nListen for: idhā … sa- · law … la- · ashāra · arā.',
      routes: 'Core: questions 1 and 2. Develop/Stretch: all four — question 4 asks for the SPEAKER’s view (arā anna), not the report’s.',
      gloss: [
        ['إِذَا قُبِلْتُ فِي الجَامِعَةِ الَّتِي أُرِيدُهَا، سَأَتَخَصَّصُ فِي الطَّاقَةِ المُتَجَدِّدَةِ.', 'If I am accepted at the university I want, I will specialise in renewable energy.'],
        ['وَلَوْ تَوَافَرَتْ لِي مَوَارِدُ أَفْضَلُ فِي المَدْرَسَةِ، لَكُنْتُ قَدْ تَقَدَّمْتُ أَسْرَعَ.', 'And had better resources been available to me at school, I would have progressed faster.'],
        ['وَأَشَارَ تَقْرِيرٌ إِلَى أَنَّ نِسْبَةَ القَبُولِ فِي هٰذَا المَجَالِ مُرْتَفِعَةٌ.', 'A report indicated that the acceptance rate in this field is high.'],
        ['أَرَى أَنَّ ضَغْطَ الامْتِحَانَاتِ كَبِيرٌ، لٰكِنَّهُ يَدْفَعُنِي إِلَى العَمَلِ. سَوْفَ أُسْهِمُ فِي مَجَالِي بَعْدَ التَّخَرُّجِ.', 'I think exam pressure is great, but it pushes me to work. I will contribute to my field after graduating.'],
      ],
    },
  ],
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 2, flex: true, eyebrow: 'We do · report what you heard (website live builder)', title: 'Claim + conditional + past perfect', ar: 'تَقْرِيرٌ عَمَّا سَمِعْتَ',
      cols: [{ label: '1 · Reported claim', w: 4.0, size: 16 }, { label: '2 · Conditional', w: 4.0, size: 16 }, { label: '3 · Past-perfect fact', w: 4.33, size: 16 }],
      rows: [0, 1, 2].map((i) => ({ core: i === 0, cells: [LB[0][i], LB[1][i], LB[2][i]] })),
      foot: 'Pick one from each column — any combination is accurate. Say it, then write three different versions.',
      notes: `WE DO (flex) — the website live builder: “Build a listening report from a reported claim, a conditional reading and a past-perfect fact.” Website feedback: any three different combinations work.
Use after the two listens: students retell the student’s story in the third person (إِنَّهُ · قُبِلَ · كَانَ قَدْ حَصَلَ) — the pronoun switch from P2-L02.`,
    },
  ],
  sorterTitle: 'Reported speech, conditional — or past perfect?',
  sorterCats: ['reported speech', 'conditional (real / hypothetical)', 'past perfect'],
  sorterNotes: 'Then say each signal aloud at full speed and let a partner point to the right column by ear only (eyes closed).',
  patch: { vocab: site.vocab, grammar: { ...site.grammar, rules }, listening: site.listening, reading: site.reading, writing: site.writing, speaking: site.speaking, mistakes: site.mistakes, patterns: site.patterns.map((x) => ({ ...x, tip: x.tip.replace('إِنَّ', 'inna').replace('لَوْ', 'law').replace('كُنْتُ قَدْ', 'kuntu qad') })), final: site.final, sorter: site.sorter, mission: site.mission },
  patchNote: 'the website listening is split into two short listens with two teacher-added questions (the subject chosen · the speaker’s own view); waṣl alif shown without a kasra; rule headings and formulas in English and transliteration (rule examples without their English glosses); sorter headings in English; the website visual game repeats the P2-L01 / P2-L03 cards and is not used. All other website items are used as published.',
  hints: ['qāla l-khabīru → whose view?', 'law → a real plan?', 'ashāra + anna?'],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا الكَلَامُ المَنْقُولُ الَّذِي سَمِعْتَهُ؟ وَبِأَيِّ فِعْلٍ نَاقِلٍ؟' },
      { route: 'develop', ar: 'هَلِ اسْتَعْمَلَ المُتَحَدِّثُ «إِذَا» أَمْ «لَوْ»؟ وَمَاذَا يَعْنِي ذٰلِكَ؟' },
      { route: 'stretch', ar: 'مَا الإِنْجَازُ السَّابِقُ الَّذِي ذَكَرَهُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'سَمِعْتُ أَنَّ المُرْشِدَ قَالَ إِنَّهُ ______ .' },
      { route: 'develop', ar: 'اسْتَعْمَلَ « ______ »، أَيْ إِنَّهُ يَصِفُ ______ .' },
      { route: 'stretch', ar: 'كَانَ قَدْ ______ قَبْلَ ______ .' },
    ],
    modelEn: ['What reported speech did you hear?', 'The adviser said that he is qualified, and stressed that his hard work will pay off.', 'And did he use idhā or law?', 'He used law — that is, he is describing a hypothetical situation that did not happen.'],
    notes: 'Website prompts and model. Students report the student’s story in the THIRD person (إِنَّهُ مُؤَهَّلٌ · اجْتِهَادَهُ · كَانَ قَدْ حَصَلَ) — the P2-L02 pronoun switch. To a girl: سَمِعْتِهِ.',
  },
  write: {
    core: { amount: '5 questions', how: 'Website Core: annotate five questions with the signal word you will listen for.' },
    develop: { amount: '50–60 words', how: 'Website Develop: add whether each targets reported speech, a conditional or a past perfect.' },
    stretch: { amount: '80–90 words', how: 'Website task: explain your listening strategy — reported speech, idhā vs law, kāna qad and cited views.' },
  },
  frames: {
    core: [
      { en: 'Before listening, I read the questions and …', ar: 'قَبْلَ الاسْتِمَاعِ، أَقْرَأُ الأَسْئِلَةَ وَ ______ .' },
      { en: 'If the question is about reported speech, I wait for …', ar: 'إِذَا كَانَ السُّؤَالُ عَنْ كَلَامٍ مَنْقُولٍ، أَنْتَظِرُ ______ .' },
      { en: 'The pronoun tells me …', ar: 'يُخْبِرُنِي الضَّمِيرُ ______ .' },
      { en: 'kāna qad shows …', ar: 'تَدُلُّ «كَانَ قَدْ» عَلَى ______ .' },
    ],
    develop: [
      { en: 'I distinguish real idhā from hypothetical law because …', ar: 'أُمَيِّزُ بَيْنَ «إِذَا» الحَقِيقِيَّةِ وَ«لَوْ» الافْتِرَاضِيَّةِ لِأَنَّ ______ .' },
      { en: 'I catch kāna qad as …', ar: 'أَلْتَقِطُ «كَانَ قَدْ» بِوَصْفِهَا ______ .' },
      { en: 'The reporting verb conveys the view of …', ar: 'يَنْقُلُ الفِعْلُ النَّاقِلُ رَأْيَ ______ .' },
      { en: 'So I do not confuse …', ar: 'فَلَا أَخْلِطُ بَيْنَ ______ .' },
    ],
    bank: ['فِعْلًا نَاقِلًا مَعَ «إِنَّ» أَوْ «أَنَّ»', 'عَمَّنْ يَتَحَدَّثُ', 'إِنْجَازٍ سَابِقٍ', 'وَحْدَةً سَرِيعَةً', 'الإِجَابَةَ تَخْتَلِفُ', 'نَوْعِ الشَّرْطِ', 'مَصْدَرٍ آخَرَ', 'رَأْيِ المُتَحَدِّثِ', 'إِشَارَةٌ', 'كَلِمَةٌ مِفْتَاحِيَّةٌ', 'مُشَتِّتٌ', 'أُحَدِّدُ مَا يَطْلُبُهُ'],
  },
  stretch: [
    ['وَأُحَدِّدُ مَا يَطْلُبُهُ كُلٌّ مِنْهَا', 'and I identify what each one asks for'],
    ['أَنْتَبِهُ إِلَى الضَّمِيرِ لِأَعْرِفَ عَمَّنْ يَتَحَدَّثُ', 'I pay attention to the pronoun to know who he is talking about'],
    ['لِأَنَّ الإِجَابَةَ تَخْتَلِفُ بِحَسَبِ نَوْعِ الشَّرْطِ', 'because the answer differs according to the type of conditional'],
    ['بِوَصْفِهَا وَحْدَةً سَرِيعَةً تَدُلُّ عَلَى إِنْجَازٍ سَابِقٍ', 'as a fast unit that signals an earlier achievement'],
    ['فَلَا أَخْلِطُ بَيْنَهُمَا', 'so I do not confuse the two'],
  ],
  modelEn: 'Before listening, I read the questions and identify what each one asks for. If the question is about reported speech, I wait for a reporting verb with “inna” or “anna”, then I pay attention to the pronoun to know who the speaker is talking about. I distinguish real “idhā” from hypothetical “law”, because the answer differs according to the type of conditional. I catch “kāna qad” as a fast unit that signals an earlier achievement. Finally, I remember that a reporting verb conveys the view of another source, not the speaker’s, so I do not confuse the two.',
  find: ['a prediction step', 'the reported-speech routine (verb · particle · pronoun)', 'idhā vs law', 'kāna qad as one unit + cited vs own view'],
  modelNotes: 'Website writing model. Evidence: أَقْرَأُ الأَسْئِلَةَ وَأُحَدِّدُ … · أَنْتَظِرُ فِعْلًا نَاقِلًا مَعَ «إِنَّ» أَوْ «أَنَّ» … أَنْتَبِهُ إِلَى الضَّمِيرِ · أُمَيِّزُ بَيْنَ «إِذَا» الحَقِيقِيَّةِ وَ«لَوْ» الافْتِرَاضِيَّةِ · أَلْتَقِطُ «كَانَ قَدْ» بِوَصْفِهَا وَحْدَةً سَرِيعَةً · الفِعْلَ النَّاقِلَ يَنْقُلُ رَأْيَ مَصْدَرٍ آخَرَ.',
  selfCheck: [
    { route: 'core', text: 'I labelled every question and wrote its signal word.' },
    { route: 'core', text: 'I caught who said it and about whom (the pronoun).' },
    { route: 'develop', text: 'I heard idhā as a plan and law as a counterfactual.' },
    { route: 'develop', text: 'I caught kāna qad + verb and its person.' },
    { route: 'stretch', text: 'I kept the speaker’s view apart from a cited one.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['الأَكَادِيمِيِّ', 'academic'], ['حَدِّدْ', 'identify'], ['يَطْلُبُهُ', 'it asks for'], ['فَانْتَظِرْ', 'then wait for'], ['عَلَاقَةً شَرْطِيَّةً', 'a conditional relationship'],
    ['الإِنْجَازُ السَّابِقُ', 'the earlier achievement'], ['كَوَحْدَةٍ وَاحِدَةٍ', 'as a single unit'], ['الضَّمِيرِ', 'the pronoun'], ['عَمَّنْ', 'about whom'], ['المُتَحَدِّثِ نَفْسِهِ', 'the speaker himself'],
  ],
  prep: {
    words: [['الطَّلَاقَةُ', 'fluency', '—'], ['التِّلْقَائِيَّةُ', 'spontaneity', '—'], ['مُقَابَلَةُ القَبُولِ', 'an admissions interview', 'pl. مُقَابَلَاتٌ'], ['الارْتِجَالُ', 'improvisation', '—'], ['الثِّقَةُ', 'confidence', '—']],
    questionEn: 'Prepare a 30-second admissions-interview answer: why do you want to study your chosen subject?',
    questionAr: 'أُرِيدُ أَنْ أَدْرُسَ ______ لِأَنَّنِي ______ ، وَكُنْتُ قَدْ ______ .',
    homework: {
      core: 'Learn the 12 core words; annotate five listening questions with their signal words.',
      develop: 'A 50–60-word note on which structure each question targeted.',
      stretch: 'Website writing task: an 80–90-word explanation of your listening strategy.',
    },
    wordsSource: 'The five words come from the website P2-L11 vocabulary (speaking preparation and fluency).',
  },
  remember: 'Remember: reported speech has three parts — WHO (qāla) · ABOUT WHOM (inna-nī / inna-hu) · WHAT — idhā is a real plan, law did not happen — kāna qad is one fast unit — and arā anna is the speaker’s own view.',
});

module.exports = { meta, slides };
