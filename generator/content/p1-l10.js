'use strict';
/* P1-L10 · Listening — Health and Lifestyle Texts — website: Pathways › Progression › P1 › P1-L10 (listening-skills lesson: predicting the structure each question
 * targets, active vs passive by ear يُعَالِجُ / يُعَالَجُ, the conditional signal إِذَا, statistics anchored by بِالْمِئَةِ with units before tens 35 ≠ 53, rejecting the
 * general distractor). The website listening (a nutritionist on the Mediterranean diet) is split into two short listens. Website vocabulary, rules, quiz, sorter,
 * mistakes, listening, reading (strategy guide), speaking and writing used as published; rule examples shown without their English glosses; one extra listening
 * question added (fish twice a week). The website visual game is a Foundation symptoms match, unrelated to listening skills, so it is not used. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P1')({
  n: 10, fileTitle: 'Listening_Health_and_Lifestyle_Texts', chip: 'Listening Skills',
  title: 'Listening — Health and Lifestyle Texts', arabic: 'الاسْتِمَاعُ — نُصُوصُ الصِّحَّةِ وَأُسْلُوبِ الحَيَاةِ',
  focus: 'Listen like an examiner: predict what each question targets, hear the passive by its vowel (يُعَالِجُ / يُعَالَجُ), catch the إِذَا … سَـ relationship, write numbers the right way round (خَمْسَةٌ وَثَلَاثُونَ = 35) and reject the general distractor.',
  icon: 'FaHeadphones', iconSet: 'fa6',
});

const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const site = D.site('P1-L10');
const RH = [['Active vs passive by ear', 'yuʿālij (kasra) vs yuʿālaj (fatḥa)'], ['Conditional signal', 'idhā → condition + consequence'], ['Statistical anchor', 'number + bi-l-miʾa'], ['Distractor discipline', 'specific cause-effect > general statement']];
const rules = site.grammar.rules.map((r, i) => ({ ...r, heading: RH[i][0], formula: RH[i][1] }));
const T1 = 'يَقُولُ خَبِيرُ التَّغْذِيَةِ: تَعْتَمِدُ الحِمْيَةُ المُتَوَسِّطِيَّةُ عَلَى الخُضَارِ وَزَيْتِ الزَّيْتُونِ وَالحُبُوبِ الكَامِلَةِ. تُشِيرُ الدِّرَاسَاتُ إِلَى أَنَّ هٰذِهِ الحِمْيَةَ تُقَلِّلُ خَطَرَ أَمْرَاضِ القَلْبِ بِنِسْبَةِ خَمْسَةٍ وَثَلَاثِينَ بِالْمِئَةِ. وَإِذَا قَلَّلْتَ الأَطْعِمَةَ المُصَنَّعَةَ، سَتَنْخَفِضُ نِسْبَةُ الالْتِهَابِ فِي جِسْمِكَ.';
const T2 = 'يُوصَى بِتَنَاوُلِ السَّمَكِ مَرَّتَيْنِ أُسْبُوعِيًّا. أَمَّا المُكَمِّلَاتُ الغِذَائِيَّةُ، فَيَرَى الخَبِيرُ أَنَّهَا لَيْسَتْ بَدِيلًا عَنِ الطَّعَامِ الطَّبِيعِيِّ. وَعِنْدَ المُقَارَنَةِ، تَبْقَى الحِمْيَةُ المُتَوَازِنَةُ أَفْضَلَ مِنْ أَيِّ حُبُوبٍ مُكَمِّلَةٍ. خِتَامًا، يَنْصَحُ بِخُطْوَةٍ صَغِيرَةٍ: اِسْتَبْدِلْ وَجْبَةً وَاحِدَةً مُصَنَّعَةً بِأُخْرَى طَازَجَةٍ.';

const slides = D.devLesson('P1-L10', {
  support: `• LISTENING-SKILLS LESSON (IGCSE Paper 1 style): the website script is read in TWO short parts, each with its own questions, read-along and answers. Read it yourself at natural speed; do not show the script until after the second listening.
• Before each listen, students label every question S / C / R / P (statistic · condition · recommendation · passive procedure) and write the cue word they expect (بِالْمِئَةِ · إِذَا · يُوصَى · يُ…َ…).
• Core: questions 1, 2 and 4 + the cue words. Develop: all questions + say which structure each targeted. Stretch: explain one distractor rejected and why the correct answer was specific (website task).
• Grammar links: passive (P1-L06) · conditional (P1-L03) · numbers and percentages (GM-NUM) · fact vs opinion يَرَى أَنَّ (P1-L08).`,
  teach: 'Predict the structure, hear the passive, catch idhā, anchor the numbers.',
  wedo: 'Two short listens with read-along, then sort active, passive and statistic cues.',
  next: { nextCode: 'P1-L11', nextTitle: 'Consolidation — Speaking Preparation and Grammar Mastery', nextAr: 'تَرْسِيخُ الوَحْدَةِ — إِعْدَادُ التَّحَدُّثِ' },
  objectives: ['Predict which structure each question targets before listening.', 'Distinguish the passive yuʿālaj from the active yuʿālij by ear.', 'Catch conditional relationships signalled by idhā.', 'Anchor statistics and avoid reversing Arabic tens and units.'],
  objNotes: 'Website objectives (Arabic shown in transliteration on the slide so the lines read cleanly). The route statements turn them into this lesson’s concrete targets.',
  rulesAr: 'سَمَاعُ البُنْيَةِ',
  ruleEx: [['يُعَالِجُ الطَّبِيبُ المَرِيضَ', 'يُعَالَجُ المَرِيضُ'], ['إِذَا أَكَلْتَ الخُضَارَ يَوْمِيًّا، سَتُقَلِّلُ خَطَرَ الإِصَابَةِ'], ['يَنْخَفِضُ الخَطَرُ بِنِسْبَةِ خَمْسَةٍ وَثَلَاثِينَ بِالْمِئَةِ'], ['إِذَا … سَـ …', 'الرِّيَاضَةُ مُفِيدَةٌ لِلْجَمِيعِ']],
  doNow: {
    questions: [
      q('What does كَلِمَةٌ مِفْتَاحِيَّةٌ mean?', ['a key word', 'a main idea', 'a number'], 'Prepared at home (P1-L09).'),
      q('What does مُشَتِّتٌ mean?', ['a distractor', 'a detail', 'a context'], 'Prepared at home (P1-L09).'),
      q('What does حِمْيَةٌ mean?', ['a diet', 'a disease', 'a doctor'], 'Prepared at home (P1-L09).'),
      q('Which verb is passive?', ['يُشَخَّصُ', 'يُشَخِّصُ', 'شَخَّصَ'], 'P1-L06: the medical passive.'),
      q('Choose the accurate conditional.', ['إِذَا قَلَّلْتَ السُّكَّرَ، سَتَنَامُ أَفْضَلَ.', 'إِذَا تُقَلِّلُ السُّكَّرَ، سَتَنَامُ أَفْضَلَ.', 'إِذَا سَتُقَلِّلُ السُّكَّرَ، تَنَامُ أَفْضَلَ.'], 'P1-L03: idhā + past form.'),
    ],
    keyIdea: { text: 'Before you listen, know WHAT you are listening for — the question tells you the cue.', ar: '{e|بِالْمِئَةِ} · {k|إِذَا … سَـ} · {w|يُوصَى} · {m|يُعَالَجُ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P1-L09. Questions 4–5 retrieve the passive (P1-L06) and the conditional (P1-L03) — today students must catch both by ear at natural speed.',
  },
  routes: {
    core: ['I can write the cue word for each question.', 'I can write a heard number correctly (35, not 53).'],
    develop: ['I can hear active vs passive by the vowel.', 'I can catch an idhā condition and its result.'],
    stretch: ['I can reject the general distractor.', 'I can explain why the right answer is specific.'],
  },
  bridge: [
    { ar: 'إِشَارَةٌ', urdu: 'اشارہ', tr: 'ishāra', en: 'a signal, cue' },
    { ar: 'سِيَاقٌ', urdu: 'سیاق و سباق', tr: 'siyāq-o-sabāq', en: 'context' },
    { ar: 'تَفْصِيلٌ', urdu: 'تفصیل', tr: 'tafṣīl', en: 'a detail' },
    { ar: 'خَمْسَةٌ وَثَلَاثُونَ', urdu: 'پینتیس', tr: 'paintīs', en: '35 — Urdu also says the unit first (pain-tīs)!' },
    { ar: 'بِالْمِئَةِ', urdu: 'فیصد', tr: 'fīṣad', en: 'percent' },
  ],
  bridgeNotes: 'URDU BRIDGE: Urdu numbers also put the unit first — پینتیس (35) is “five-thirty”, just like خَمْسَةٌ وَثَلَاثُونَ. Students who count in Urdu should NOT reverse Arabic numbers; English is the odd one out. اشارہ، سیاق and تفصیل are shared.',
  core: ['إِشَارَةٌ', 'كَلِمَةٌ مِفْتَاحِيَّةٌ', 'مُشَتِّتٌ', 'تَفْصِيلٌ دَقِيقٌ', 'الفِكْرَةُ الرَّئِيسِيَّةُ', 'حِمْيَةٌ', 'مُكَمِّلَاتٌ غِذَائِيَّةٌ', 'أَطْعِمَةٌ مُصَنَّعَةٌ', 'يُوصَى بِـ', 'بِالْمِئَةِ', 'خَمْسَةٌ وَثَلَاثُونَ', 'يَنْخَفِضُ بِنِسْبَةِ'],
  forms: {
    'مُشَتِّتٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'مُشَتِّتَاتٌ' }] }, 'كَلِمَةٌ مِفْتَاحِيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'كَلِمَاتٌ مِفْتَاحِيَّةٌ' }] },
    'حِمْيَةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'حِمْيَاتٌ' }] }, 'مُكَمِّلَاتٌ غِذَائِيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'sg.', ar: 'مُكَمِّلٌ غِذَائِيٌّ' }] },
    'خَبِيرُ تَغْذِيَةٍ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'خُبَرَاءُ تَغْذِيَةٍ' }, { l: 'f.', ar: 'خَبِيرَةُ تَغْذِيَةٍ' }] },
    'يُوصَى بِـ': { tag: 'active', forms: [{ l: 'active', ar: 'يُوصِي بِـ' }] },
    'خَمْسَةٌ وَثَلَاثُونَ': { tag: '35', forms: [{ l: 'after bi-nisbati', ar: 'خَمْسَةٍ وَثَلَاثِينَ' }] }, 'ثَلَاثَةٌ وَخَمْسُونَ': { tag: '53', forms: [{ l: 'after bi-nisbati', ar: 'ثَلَاثَةٍ وَخَمْسِينَ' }] },
    'يَنْخَفِضُ بِنِسْبَةِ': { tag: 'he · she', forms: [{ l: 'she', ar: 'تَنْخَفِضُ' }] }, 'يَرْتَفِعُ': { tag: 'he · she', forms: [{ l: 'she', ar: 'تَرْتَفِعُ' }] },
  },
  vocabNotes: {
    0: 'Listening for structure — the vocabulary of exam strategy. A مُشَتِّتٌ is an option that uses words you heard but does not answer the question.',
    1: 'Health content you will hear. يُوصَى بِـ is the passive of يُوصِي بِـ — listen for the fatḥa (yūṣā).',
    2: 'Numbers in speech: the unit comes BEFORE the ten — خَمْسَةٌ وَثَلَاثُونَ = 35, ثَلَاثَةٌ وَخَمْسُونَ = 53. After بِنِسْبَةِ the number is genitive: بِنِسْبَةِ خَمْسَةٍ وَثَلَاثِينَ بِالْمِئَةِ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · active vs passive by ear (website rule 1 + teaching point 1) · Core / Develop', title: 'Listen for the vowel before the last letter', ar: 'المَعْلُومُ وَالمَجْهُولُ بِالأُذُنِ',
      cols: [{ label: 'Meaning', w: 2.5 }, { label: 'Active (i)', w: 2.6, size: 24 }, { label: 'Passive (a)', w: 2.6, size: 24 }, { label: 'You hear …', w: 4.63 }],
      rows: [
        { core: true, cells: ['treats · is treated', '{w|يُعَالِجُ}', '{k|يُعَالَجُ}', 'yuʿāli-ju · yuʿāla-ju'] },
        { core: true, cells: ['diagnoses · is diagnosed', 'يُشَخِّصُ', 'يُشَخَّصُ', 'yushakhkhi-ṣu · yushakhkha-ṣu'] },
        { cells: ['recommends · is recommended', 'يُوصِي', 'يُوصَى', 'yūṣī · yūṣā (ee → aa)'] },
        { cells: ['prescribes · is prescribed', 'يَصِفُ', 'يُوصَفُ', 'ya-ṣifu · yū-ṣafu'] },
        { cells: ['treated (past)', 'عَالَجَ', 'عُولِجَ', 'ʿālaja · ʿūlija (u-i)'] },
      ],
      ltr: true,
      foot: 'Website teaching point: the prefix yu- has a ḍamma in BOTH — the fatḥa just before the last consonant signals the passive.',
      notes: `GRAMMAR PART 1 — website rule “Active vs passive by ear” and teaching point “The passive has a ḍamma-then-fatḥa shape”.
Drill (2 min): say one form of each pair; students show ONE finger for active, TWO for passive. Then say full sentences: يُعَالِجُ الطَّبِيبُ المَرِيضَ / يُعَالَجُ المَرِيضُ.
A second clue: after a passive verb there is no doer, and the noun that follows is the one AFFECTED (المَرِيضُ).
Website mistake 2: «يُعَالَجُ المَرِيضُ» فِعْلٌ مَعْلُومٌ ✗ → مَبْنِيٌّ لِلْمَجْهُولِ.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · numbers: units before tens (website rule 3 + teaching point 2) · Core', title: 'Five and thirty = 35', ar: 'الآحَادُ قَبْلَ العَشَرَاتِ',
      cols: [{ label: 'You hear', w: 4.2, size: 24 }, { label: 'Word by word', w: 3.3 }, { label: 'Write', w: 1.8 }, { label: 'Not', w: 3.03 }],
      rows: [
        { core: true, cells: ['خَمْسَةٌ وَثَلَاثُونَ بِالْمِئَةِ', 'five and thirty percent', '35%', '53%'] },
        { core: true, cells: ['ثَلَاثَةٌ وَخَمْسُونَ', 'three and fifty', '53', '35'] },
        { cells: ['خَمْسَةٌ وَعِشْرُونَ', 'five and twenty', '25', '52'] },
        { cells: ['سَبْعَةٌ وَأَرْبَعُونَ', 'seven and forty', '47', '74'] },
        { cells: ['بِنِسْبَةِ اثْنَيْنِ وَسِتِّينَ بِالْمِئَةِ', 'by two and sixty percent', '62%', '26%'] },
      ],
      ltr: true,
      foot: 'Hold the WHOLE number phrase before you write the figure — and let bi-l-miʾa tell you it is a percentage.',
      notes: `GRAMMAR PART 2 — website rule “Statistical anchor” (the word بِالْمِئَةِ marks a percentage; hold the number before writing) and teaching point “Arabic numbers put the unit before the ten”.
Website mistake 1: سَمِعْتُ «خَمْسَةٌ وَثَلَاثُونَ» فَكَتَبْتُ ٥٣ ✗ → ٣٥.
Urdu link: پینتیس is also “five-thirty” — the habit to fight comes from English.
Case: after بِنِسْبَةِ the number is genitive (خَمْسَةٍ وَثَلَاثِينَ · اثْنَيْنِ وَسِتِّينَ) — the ending changes, the number does not.
Drill: say five numbers; students write them on mini-whiteboards / in the chat.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · predict the cue before you listen (website table + reading) · Develop', title: 'The question tells you what to listen for', ar: 'التَّخْمِينُ المُوَجَّهُ',
      cols: [{ label: 'The question asks …', w: 3.3 }, { label: 'Label', w: 1.2 }, { label: 'Cue to listen for', w: 3.3, size: 22 }, { label: 'Then catch …', w: 4.53 }],
      rows: [
        { core: true, cells: ['how much? what percentage?', 'S', '{e|بِالْمِئَةِ} · {e|بِنِسْبَةِ}', 'the number BEFORE the cue'] },
        { core: true, cells: ['what follows if …?', 'C', '{k|إِذَا} … {k|سَـ}', 'the result clause'] },
        { cells: ['what is recommended?', 'R', '{w|يُوصَى بِـ} · {w|يَنْصَحُ بِـ}', 'what comes after bi-'] },
        { cells: ['what happens to the patient?', 'P', '{m|يُعَالَجُ} · {m|يُشَخَّصُ}', 'the affected noun'] },
        { cells: ['what is the expert’s view?', 'O', '{p|يَرَى أَنَّ}', 'the opinion after anna'] },
      ],
      ltr: true,
      foot: 'Website reading: read the questions first and decide what each one asks — a statistic, a condition or a procedure.',
      notes: `GRAMMAR PART 3 — the website table (You hear / It signals / Listen for) and the website reading “a listening strategy guide” (اقْرَأِ الأَسْئِلَةَ أَوَّلًا وَحَدِّدْ مَا يَطْلُبُهُ كُلُّ سُؤَالٍ …).
Routine for every listening today: 30 seconds to label each question S / C / R / P / O and write the cue word next to it.
Row 5 links to P1-L08: يَرَى الخَبِيرُ أَنَّ … is an opinion, not a statistic — the listening uses it for supplements.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · beating the distractor (website rule 4) · Stretch', title: 'Specific beats general', ar: 'تَجَنُّبُ المُشَتِّتِ',
      cards: [
        { chip: 'GENERAL · DISTRACTOR', color: 'C0386B', head: 'جُمْلَةٌ عَامَّةٌ', big: 'الرِّيَاضَةُ مُفِيدَةٌ لِلْجَمِيعِ.', en: 'Sport is good for everyone.', clue: 'True — but not the answer.' },
        { chip: 'SPECIFIC · CORRECT', color: '1E6B52', head: 'إِذَا … سَـ …', big: 'إِذَا قَلَّلْتَ الأَطْعِمَةَ المُصَنَّعَةَ، سَتَنْخَفِضُ نِسْبَةُ الالْتِهَابِ.', en: 'If you cut processed foods, inflammation will fall.', clue: 'Matches the cue.' },
        { chip: 'HEARD, BUT … · STRETCH', color: '6B4C9A', head: 'لَيْسَتْ بَدِيلًا', big: 'المُكَمِّلَاتُ لَيْسَتْ بَدِيلًا عَنِ الطَّعَامِ.', en: 'Supplements are not a substitute for food.', clue: 'Listen for the negation.' },
      ],
      error: { text: 'Website mistake 3: choosing the general sentence because it feels safe.', pairs: [['الجُمْلَةُ الَّتِي تُطَابِقُ السَّبَبَ وَالنَّتِيجَةَ', 'الجُمْلَةُ العَامَّةُ المُرِيحَةُ']] },
      notes: `GRAMMAR PART 4 — website rule “Distractor discipline” (a conditional answer is specific; a general health statement is often the distractor) and the website reading (الإِجَابَةُ العَامَّةُ كَثِيرًا مَا تَكُونُ مُشَتِّتًا).
Card 3: an option may repeat words you HEARD (المُكَمِّلَاتُ … الطَّعَامِ) but reverse the meaning — the listening says لَيْسَتْ بَدِيلًا. Distractors love a missing لَيْسَ / لَا.
Two-question test for every option: 1) Did I hear THIS idea (not just these words)? 2) Does it answer THIS question?`,
    },
  ],
  quick: [0, 1, 2, 7],
  rest: [3, 4, 5, 6],
  ido: {
    title: 'Watch me annotate, predict, listen',
    steps: [
      { head: 'Label', ar: 'S · C · R · P', think: 'What does it ask?' },
      { head: 'Cue', ar: '{e|بِالْمِئَةِ} · {k|إِذَا}', think: 'Write it beside.' },
      { head: 'Catch', ar: 'بِنِسْبَةِ {e|خَمْسَةٍ وَثَلَاثِينَ}', think: 'Hold it: 35.' },
      { head: 'Check', ar: '{k|إِذَا} قَلَّلْتَ … {k|سَتَنْخَفِضُ}', think: 'Specific, not general.' },
    ],
    legend: ['e', 'k'], legendLabels: { e: 'STATISTIC CUE', k: 'CONDITION CUE' },
    model: 'تُشِيرُ الدِّرَاسَاتُ إِلَى أَنَّ هٰذِهِ الحِمْيَةَ تُقَلِّلُ خَطَرَ أَمْرَاضِ القَلْبِ بِنِسْبَةِ {e|خَمْسَةٍ وَثَلَاثِينَ بِالْمِئَةِ}. {k|وَإِذَا} قَلَّلْتَ الأَطْعِمَةَ المُصَنَّعَةَ، {k|سَتَنْخَفِضُ} نِسْبَةُ الالْتِهَابِ فِي جِسْمِكَ.',
    modelEn: 'Studies indicate that this diet reduces the risk of heart disease by thirty-five percent. And if you cut down on processed foods, the level of inflammation in your body will fall.',
    notes: 'I DO (3 min) — model the routine on listening questions 2 and 3 BEFORE the class hears the text. Label (S, C) → write the cues (بِالْمِئَةِ, إِذَا) → read the two sentences aloud once → circle 35 (not 53) and the result clause → reject “nothing” / “weight always rises” as distractors. The copy box shows the transcript AFTER annotation.',
  },
  patternEn: ['the patient is treated in hospital', 'if you eat vegetables, you will reduce the risk of illness', 'the risk falls by thirty-five percent'],
  listenParts: [
    {
      title: 'Part 1: the diet and the numbers', script: T1, q: [0, 1, 2], min: 3,
      tip: 'Label first: ? · S · C.\nHold the number: 35 or 53?',
      routes: 'Core: questions 1 and 2. Develop/Stretch: all three — question 3 is the idhā … sa- relationship.',
      gloss: [
        ['يَقُولُ خَبِيرُ التَّغْذِيَةِ: تَعْتَمِدُ الحِمْيَةُ المُتَوَسِّطِيَّةُ عَلَى الخُضَارِ وَزَيْتِ الزَّيْتُونِ وَالحُبُوبِ الكَامِلَةِ.', 'The nutritionist says: the Mediterranean diet relies on vegetables, olive oil and whole grains.'],
        ['تُشِيرُ الدِّرَاسَاتُ إِلَى أَنَّ هٰذِهِ الحِمْيَةَ تُقَلِّلُ خَطَرَ أَمْرَاضِ القَلْبِ بِنِسْبَةِ خَمْسَةٍ وَثَلَاثِينَ بِالْمِئَةِ.', 'Studies indicate that this diet reduces the risk of heart disease by 35%.'],
        ['وَإِذَا قَلَّلْتَ الأَطْعِمَةَ المُصَنَّعَةَ، سَتَنْخَفِضُ نِسْبَةُ الالْتِهَابِ فِي جِسْمِكَ.', 'And if you cut down on processed foods, the level of inflammation in your body will fall.'],
      ],
    },
    {
      title: 'Part 2: advice, opinion and the close', script: T2, q: [3, 4], min: 3,
      extra: [L('How often is fish recommended?', ['twice a week', 'every day', 'once a month'], 'يُوصَى بِتَنَاوُلِ السَّمَكِ مَرَّتَيْنِ أُسْبُوعِيًّا.')],
      tip: 'Label first: O · R · R.\nListen for: yarā anna · lays-at · yūṣā.',
      routes: 'Core: questions 2 and 3. Develop/Stretch: all three — in question 1 the distractor “better than food” reverses لَيْسَتْ بَدِيلًا.',
      gloss: [
        ['يُوصَى بِتَنَاوُلِ السَّمَكِ مَرَّتَيْنِ أُسْبُوعِيًّا.', 'It is recommended to eat fish twice a week.'],
        ['أَمَّا المُكَمِّلَاتُ الغِذَائِيَّةُ، فَيَرَى الخَبِيرُ أَنَّهَا لَيْسَتْ بَدِيلًا عَنِ الطَّعَامِ الطَّبِيعِيِّ.', 'As for supplements, the expert believes they are not a substitute for natural food.'],
        ['وَعِنْدَ المُقَارَنَةِ، تَبْقَى الحِمْيَةُ المُتَوَازِنَةُ أَفْضَلَ مِنْ أَيِّ حُبُوبٍ مُكَمِّلَةٍ.', 'By comparison, a balanced diet remains better than any supplement pills.'],
        ['خِتَامًا، يَنْصَحُ بِخُطْوَةٍ صَغِيرَةٍ: اِسْتَبْدِلْ وَجْبَةً وَاحِدَةً مُصَنَّعَةً بِأُخْرَى طَازَجَةٍ.', 'Finally, he advises a small step: replace one processed meal with a fresh one.'],
      ],
    },
  ],
  sorterTitle: 'Active, passive — or a statistic cue?',
  sorterNotes: 'Then say each active / passive pair aloud and let a partner point to the right column by ear only (eyes closed).',
  patch: { grammar: { ...site.grammar, rules } },
  patchNote: 'the website listening is split into two short listens with one teacher-added question (fish twice a week); rule headings and formulas shown in English and transliteration (rule examples without their English glosses); the website visual game (a Foundation symptoms match) is not used. All other website items are used as published.',
  hints: ['five and thirty = ?', 'yuʿālaj: active or passive?', 'General or specific?'],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا الإِحْصَائِيَّةُ الَّتِي سَمِعْتَهَا؟ وَبِأَيِّ كَلِمَةٍ عَرَفْتَهَا؟' },
      { route: 'develop', ar: 'مَا الجُمْلَةُ الشَّرْطِيَّةُ الَّتِي قَالَهَا الخَبِيرُ؟' },
      { route: 'stretch', ar: 'كَيْفَ تُمَيِّزُ المَبْنِيَّ لِلْمَجْهُولِ فِي الكَلَامِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'سَمِعْتُ أَنَّ ______ بِنِسْبَةِ ______ بِالْمِئَةِ.' },
      { route: 'develop', ar: 'قَالَ الخَبِيرُ: إِذَا ______ ، سَوْفَ ______ .' },
      { route: 'stretch', ar: 'سَمِعْتُ « ______ »، وَالفَتْحَةُ قَبْلَ الآخِرِ دَلَّتْ عَلَى ______ .' },
    ],
    modelEn: ['What statistic did you hear?', 'I heard that the diet reduces the risk by 35%, and I recognised it from the word “percent”.', 'And how did you recognise the passive?', 'I heard “yūṣā bi-”, and the fatḥa before the end showed it was passive.'],
    notes: 'Website prompts and model. Students report in the third person (قَالَ الخَبِيرُ … سَمِعْتُ أَنَّ …). Check the number is said correctly (خَمْسَةٍ وَثَلَاثِينَ). To a girl: سَمِعْتِهَا · عَرَفْتِهَا · تُمَيِّزِينَ.',
  },
  write: {
    core: { amount: '5 questions', how: 'Website Core: annotate five questions with the cue word you will listen for.' },
    develop: { amount: '50–60 words', how: 'Website Develop: add whether each targets a passive, a conditional or a statistic.' },
    stretch: { amount: '80–90 words', how: 'Website task: explain your listening strategy — prediction, the passive cue, numbers and distractors.' },
  },
  frames: {
    core: [
      { en: 'Before listening, I read the questions and …', ar: 'قَبْلَ الاسْتِمَاعِ، أَقْرَأُ الأَسْئِلَةَ وَ ______ .' },
      { en: 'If the question is about a statistic, I wait for …', ar: 'إِذَا كَانَ السُّؤَالُ عَنْ إِحْصَائِيَّةٍ، أَنْتَظِرُ ______ .' },
      { en: '“Five and thirty” means …', ar: '«خَمْسَةٌ وَثَلَاثُونَ» تَعْنِي ______ .' },
      { en: 'The cue word for a recommendation is …', ar: 'الكَلِمَةُ المِفْتَاحِيَّةُ لِلتَّوْصِيَةِ هِيَ ______ .' },
    ],
    develop: [
      { en: 'I tell the passive from the fatḥa before …', ar: 'أُمَيِّزُ المَبْنِيَّ لِلْمَجْهُولِ مِنَ الفَتْحَةِ قَبْلَ ______ .' },
      { en: 'Units are said before …', ar: 'تُقَالُ الآحَادُ قَبْلَ ______ .' },
      { en: 'I reject the general answer because …', ar: 'أَرْفُضُ الإِجَابَةَ العَامَّةَ لِأَنَّهَا ______ .' },
      { en: 'I choose the specific answer linked to …', ar: 'أَخْتَارُ الإِجَابَةَ المُحَدَّدَةَ المَرْبُوطَةَ بِالنَّصِّ وَ ______ .' },
    ],
    bank: ['رَقْمًا مَعَ كَلِمَةِ «بِالْمِئَةِ»', 'إِذَا … سَـ', 'يُوصَى', 'يُعَالَجُ', 'الحَرْفِ الأَخِيرِ', 'العَشَرَاتِ', 'مُشَتِّتٌ', 'مُحَدَّدَةٌ', 'كَلِمَةٌ مِفْتَاحِيَّةٌ', 'السِّيَاقُ', 'خَمْسَةً وَثَلَاثِينَ', 'تَفْصِيلٌ دَقِيقٌ'],
  },
  stretch: [
    ['أُحَدِّدُ مَا يَطْلُبُهُ كُلُّ سُؤَالٍ', 'I identify what each question asks for'],
    ['إِحْصَائِيَّةً أَمْ عَلَاقَةً شَرْطِيَّةً أَمْ إِجْرَاءً طِبِّيًّا', 'a statistic, a conditional relationship or a medical procedure'],
    ['فَـ«يُعَالَجُ» مَجْهُولٌ وَ«يُعَالِجُ» مَعْلُومٌ', 'so yuʿālaj is passive and yuʿālij is active'],
    ['لِأَنَّ الآحَادَ تُقَالُ قَبْلَ العَشَرَاتِ', 'because units are said before tens'],
    ['الإِجَابَةَ المُحَدَّدَةَ المَرْبُوطَةَ بِالنَّصِّ', 'the specific answer linked to the text'],
  ],
  modelEn: 'Before listening, I read the questions and identify what each one asks for: a statistic, a conditional relationship or a medical procedure. If the question is about a statistic, I wait for a number with the word “percent”. I tell the passive by the fatḥa before the last letter, so yuʿālaj is passive and yuʿālij is active. I pay attention to Arabic numbers, because units are said before tens, so “five and thirty” means 35. Finally, I reject the general answer, because it is often a distractor, and choose the specific answer linked to the text.',
  find: ['a prediction step', 'the passive cue (fatḥa)', 'the number rule (units before tens)', 'rejecting the general distractor'],
  modelNotes: 'Website writing model. Evidence: أَقْرَأُ الأَسْئِلَةَ وَأُحَدِّدُ مَا يَطْلُبُهُ كُلُّ سُؤَالٍ · أَنْتَظِرُ رَقْمًا مَعَ كَلِمَةِ «بِالْمِئَةِ» · الفَتْحَةِ قَبْلَ الحَرْفِ الأَخِيرِ · الآحَادَ تُقَالُ قَبْلَ العَشَرَاتِ · أَرْفُضُ الإِجَابَةَ العَامَّةَ … مُشَتِّتًا.',
  selfCheck: [
    { route: 'core', text: 'I labelled every question and wrote its cue word.' },
    { route: 'core', text: 'I wrote heard numbers the right way round.' },
    { route: 'develop', text: 'I heard active vs passive by the vowel.' },
    { route: 'develop', text: 'I caught the idhā condition AND its result.' },
    { route: 'stretch', text: 'I explained one distractor I rejected.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['الأَكَادِيمِيِّ', 'academic'], ['حَدِّدْ', 'identify'], ['يَطْلُبُهُ', 'it asks for'], ['فَانْتَظِرْ', 'then wait for'], ['عَلَاقَةً شَرْطِيَّةً', 'a conditional relationship'],
    ['الإِجْرَاءُ الطِّبِّيُّ', 'the medical procedure'], ['الآحَادُ', 'the units'], ['العَشَرَاتِ', 'the tens'], ['مُحَدَّدَةٌ', 'specific'], ['مَرْبُوطَةٌ بِالنَّصِّ', 'linked to the text'],
  ],
  prep: {
    words: [['الطَّلَاقَةُ', 'fluency', '—'], ['التِّلْقَائِيَّةُ', 'spontaneity', '—'], ['لَعِبُ الأَدْوَارِ', 'a role play', '—'], ['المُطَابَقَةُ', 'agreement', '—'], ['عَادَةٌ صِحِّيَّةٌ', 'a healthy habit', 'pl. عَادَاتٌ صِحِّيَّةٌ']],
    questionEn: 'Prepare a 30-second answer: what is your healthiest habit, and what would you like to change?',
    questionAr: 'أَهَمُّ عَادَةٍ صِحِّيَّةٍ عِنْدِي ______ ، وَأَوَدُّ أَنْ أُغَيِّرَ ______ .',
    homework: {
      core: 'Learn the 12 core words; annotate five listening questions with their cue words.',
      develop: 'A 50–60-word note on which structure each question targeted.',
      stretch: 'Website writing task: an 80–90-word explanation of your listening strategy.',
    },
    wordsSource: 'The five words come from the website P1-L11 vocabulary (speaking preparation and grammar mastery).',
  },
  remember: 'Remember: label the question first (S · C · R · P) — the passive has a fatḥa before the last letter (yuʿālaj) — khamsa wa-thalāthūn = 35 — and the specific answer beats the general one.',
});

module.exports = { meta, slides };
