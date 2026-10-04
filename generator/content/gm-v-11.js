'use strict';
/* GM-V-11 · Passive Voice — website: Mastery & Revision › Grammar › Verbs › Lesson 11 (past passive fuʿila: kataba → kutiba; present
 * passive yufʿalu: yaktubu → yuktabu; the former object becomes nāʾib al-fāʿil, nominative, and the verb agrees with it (tuktabu
 * r-risālatu; non-human plurals take feminine singular); reasons: unknown or obvious agent, rules, processes, formal reports; derived
 * forms (uʿlinat · tustaʿmalu · yuʿtaqadu) as Stretch; transformation steps; clinic). Quizzes are the website’s (Entry, Past, Present,
 * Why Passive, Active-to-Passive, Mastery) plus the website game; items whose options carry English or Arabic remarks (“only”, “بلا
 * فاعل”, “without knowing person”) are skipped. Sorter, I-do, frames, reading and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__07-verbs__grammar-mastery-11-passive-voice';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-V-11', fileTitle: 'Passive_Voice', title: 'Passive Voice', arabic: 'الْمَبْنِيُّ لِلْمَجْهُولِ فِي الْمَاضِي وَالْمُضَارِعِ',
  focus: 'The passive hides the doer and puts the result first. Past: u – i (kataba → kutiba). Present: u – a (yaktubu → yuktabu). The old object becomes the new subject: nominative, and the verb agrees with it.',
  icon: 'FaRightLeft',
});

const slides = G.gmLesson({
  code: 'GM-V-11', site: KEY,
  support: `• Core: the vowel patterns فُعِلَ and يُفْعَلُ with sound verbs (كُتِبَ · يُكْتَبُ · فُتِحَ · يُفْتَحُ) and signs (يُمْنَعُ التَّدْخِينُ). Develop: transforming active → passive with agreement (كُتِبَتِ الرِّسَالَةُ · تُقْرَأُ الْكُتُبُ). Stretch: derived forms (أُعْلِنَتْ · تُسْتَعْمَلُ · يُعْتَقَدُ) and choosing passive or active for a reason.
• Hook for weak classes: “u-i past, u-a present” — the first ḍamma is the passive alarm.
• Agreement reminder (GM-N-06): non-human plurals take a feminine singular verb — tuqraʾu l-kutubu.`,
  teach: 'Past passive; present passive; transformation; why passive.',
  wedo: 'Transform; sort active / passive; repair.',
  next: { nextCode: 'GM-V-12', nextTitle: 'Verbal Nouns and Participles', nextAr: 'الْمَصْدَرُ وَاسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُولِ' },
  doNow: {
    pick: [0, 1, 2, 3, 4],
    fb: { 0: 'The past passive uses the fuʿila vowel pattern.', 1: 'The present passive uses yufʿalu / tufʿalu.', 2: 'The passive focuses on the rule, not the unnamed agent.', 3: 'The affected noun becomes the deputy subject and is nominative.', 4: 'Present passive: yufʿalu.' },
    keyIdea: { text: 'Passive = new vowels: past u–i (kutiba), present u–a (yuktabu). The object moves up and becomes nominative.', ar: '{k|كُتِبَتِ} الرِّسَالَةُ ‖ {e|تُكْتَبُ} الرِّسَالَةُ' },
    retrieves: 'The website Entry Check (questions 1–5) — the GM-V-10 prep words kutiba, yuktabu and yuqālu.',
  },
  objectives: ['Form the past passive fuʿila.', 'Form the present passive yufʿalu.', 'Make the verb agree with the new subject.', 'Choose passive or active for a reason.'],
  routes: {
    core: ['I read signs like yumnaʿu t-tadkhīn.', 'I change kataba into kutiba.'],
    develop: ['I turn an active sentence into a passive one.', 'I use ta- for feminine and non-human plural subjects.'],
    stretch: ['I use derived passives like uʿlinat and tustaʿmalu.', 'I explain why I chose passive or active.'],
  },
  terms: {
    items: [
      { ar: 'الْمَبْنِيُّ لِلْمَعْلُومِ', en: 'active voice', note: 'كَتَبَ الطَّالِبُ' },
      { ar: 'الْمَبْنِيُّ لِلْمَجْهُولِ', en: 'passive voice', note: 'كُتِبَ الدَّرْسُ' },
      { ar: 'الْفَاعِلُ', en: 'the doer', note: 'الطَّالِبُ' },
      { ar: 'نَائِبُ الْفَاعِلِ', en: 'deputy subject', note: 'الرِّسَالَةُ' },
      { ar: 'يُمْنَعُ', en: 'is forbidden', note: 'يُمْنَعُ التَّدْخِينُ' },
      { ar: 'يُقَالُ إِنَّ', en: 'it is said that', note: 'يُقَالُ إِنَّ …' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · passive past: fuʿila (website table)', title: 'Past passive: u – i', ar: 'الْمَاضِي الْمَبْنِيُّ لِلْمَجْهُولِ', ltr: true,
      cols: [{ label: 'Active past', w: 4.2, size: 22 }, { label: 'Passive past', w: 3.6, size: 22 }, { label: 'What happened', w: 4.53 }],
      rows: [
        { core: true, cells: ['كَتَبَ الطَّالِبُ الرِّسَالَةَ.', 'كُتِبَتِ الرِّسَالَةُ.', 'the letter is foregrounded'] },
        { core: true, cells: ['فَتَحَ الْمُوَظَّفُ الْبَابَ.', 'فُتِحَ الْبَابُ.', 'the agent is omitted'] },
        { core: true, cells: ['كَسَرَ الْوَلَدُ الزُّجَاجَ.', 'كُسِرَ الزُّجَاجُ.', 'the object becomes the subject'] },
        { cells: ['أَعْلَنَتِ الْمَدْرَسَةُ النَّتَائِجَ.', 'أُعْلِنَتِ النَّتَائِجُ.', 'derived form (Stretch)'] },
      ],
      foot: 'Website: Form I active faʿala becomes passive fuʿila — kataba → kutiba, fataḥa → futiḥa. The verb agrees with the new subject: kutibat (the letter is feminine).',
      notes: 'PART 1 (3 min) — website “Passive past”. Say the vowels: ka-ta-ba / ku-ti-ba.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · passive present: yufʿalu (website table)', title: 'Present passive: u – a', ar: 'الْمُضَارِعُ الْمَبْنِيُّ لِلْمَجْهُولِ', ltr: true,
      cols: [{ label: 'Active present', w: 4.4, size: 22 }, { label: 'Passive present', w: 3.6, size: 22 }, { label: 'Use', w: 4.33 }],
      rows: [
        { core: true, cells: ['يَكْتُبُ الطَّالِبُ الرِّسَالَةَ.', 'تُكْتَبُ الرِّسَالَةُ.', 'process / general practice'] },
        { core: true, cells: ['يَفْتَحُ الْمُوَظَّفُ الْبَابَ.', 'يُفْتَحُ الْبَابُ.', 'what happens to the door'] },
        { core: true, cells: ['يَمْنَعُ الْقَانُونُ التَّدْخِينَ.', 'يُمْنَعُ التَّدْخِينُ.', 'rule / sign'] },
        { cells: ['يَسْتَعْمِلُ النَّاسُ التِّقْنِيَّةَ.', 'تُسْتَعْمَلُ التِّقْنِيَّةُ.', 'derived form (Stretch)'] },
      ],
      foot: 'Website: active yafʿalu becomes passive yufʿalu. The prefix still matches the new subject: tuktabu r-risālatu (ta- for feminine).',
      notes: 'PART 2 (3 min) — website “Passive present”. Signs and notices are full of yufʿalu.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 3 · transform and choose (website) · Develop / Stretch', title: 'Three steps — and a good reason', ar: 'التَّحْوِيلُ وَسَبَبُ الِاخْتِيَارِ', ltr: true,
      cols: [{ label: 'Step / reason', w: 3.4 }, { label: 'Arabic (website)', w: 5.0, size: 22 }, { label: 'Notice', w: 3.93 }],
      rows: [
        { core: true, cells: ['1 · change the vowels', 'كَتَبَ · كُتِبَ', 'u–i past · u–a present'] },
        { core: true, cells: ['2 · remove the doer', 'كُتِبَتِ الرِّسَالَةُ.', 'only if unknown / unimportant'] },
        { core: true, cells: ['3 · raise the object', 'الرِّسَالَةَ · الرِّسَالَةُ', 'nominative + agreement'] },
        { cells: ['unknown agent', 'سُرِقَتِ الدَّرَّاجَةُ.', 'we don’t know who'] },
        { cells: ['rule / process', 'تُفْحَصُ الْحَقَائِبُ عِنْدَ الْمَدْخَلِ.', 'impersonal'] },
        { cells: ['formal report', 'يُعْتَقَدُ أَنَّ التِّقْنِيَّةَ سَتَتَطَوَّرُ.', 'it is believed'] },
      ],
      foot: 'Website warning: do not use the passive to hide a relevant agent. If who acted matters, the active sentence is clearer.',
      notes: 'PART 3 (4 min) — website “Transform active into passive” and “Choose passive for a reason”.',
    },
  ],
  quick: [
    W(/Passive Past Check/, 0, { prompt: 'Passive past of samiʿa (hear)?', feedback: 'Past passive pattern: sumiʿa.' }),
    W(/Passive Past Check/, 1, { prompt: 'Choose “The door was opened”.', feedback: 'Passive verb + nominative deputy subject.' }),
    W(/Passive Present Check/, 1, { prompt: 'Choose “The letter is written”.', feedback: 'Feminine agreement: tu-.' }),
    W(/Passive Present Check/, 2, { prompt: 'Choose “The cars are used”.', feedback: 'Non-human plural takes feminine singular agreement.' }),
  ],
  quickNote: 'website Passive Past and Passive Present checks.',
  ido: {
    title: 'Watch me report the news in the passive',
    steps: [
      { head: 'Active', ar: 'أَعْلَنَتِ الْمَدْرَسَةُ', think: 'The doer is obvious.' },
      { head: 'Passive', ar: 'أُعْلِنَتِ النَّتَائِجُ', think: 'u–i; results first.' },
      { head: 'Active', ar: 'نَشَرَتْ', think: 'Same doer.' },
      { head: 'Passive', ar: 'نُشِرَتْ', think: 'Feminine -at agrees.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'PAST PASSIVE', e: 'PRESENT PASSIVE' },
    model: '{k|أُعْلِنَتِ} النَّتَائِجُ صَبَاحَ الْيَوْمِ، وَ{k|نُشِرَتْ} عَلَى مَوْقِعِ الْمَدْرَسَةِ. {e|تُسْتَعْمَلُ} هَذِهِ الطَّرِيقَةُ لِكَيْ يَطَّلِعَ جَمِيعُ الطُّلَّابِ عَلَيْهَا.',
    modelEn: 'The results were announced this morning and were published on the school website. This method is used so that all students can see them.',
    notes: 'Website model. Note the subjunctive after li-kay (GM-V-10).',
  },
  models: [
    { ar: 'يُمْنَعُ الدُّخُولُ.', en: 'Entry is forbidden.', tip: 'Sign.' },
    { ar: 'سُرِقَ الْهَاتِفُ.', en: 'The phone was stolen.', tip: 'Unknown agent.' },
    { ar: 'تُغْسَلُ الْفَوَاكِهُ قَبْلَ الْأَكْلِ.', en: 'Fruit is washed before eating.', tip: 'Process.' },
    { ar: 'صَحَّحَتِ الْمُعَلِّمَةُ الْعَمَلَ.', en: 'The teacher marked the work.', tip: 'Active: the doer matters.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · active → passive (website check) · say it aloud', title: 'Transform it', ar: 'حَوِّلْ إِلَى الْمَجْهُولِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Active', w: 5.0, size: 22 }, { label: 'Passive', w: 3.8, size: 22 }, { label: 'Clue', w: 3.53 }],
      rows: [
        { core: true, cells: ['فَتَحَ الْحَارِسُ الْبَابَ.', 'فُتِحَ الْبَابُ.', 'u–i'] },
        { core: true, cells: ['كَسَرَ الْوَلَدُ النَّافِذَةَ.', 'كُسِرَتِ النَّافِذَةُ.', 'feminine -at'] },
        { cells: ['يَقْرَأُ الطُّلَّابُ الْكُتُبَ.', 'تُقْرَأُ الْكُتُبُ.', 'non-human plural: tu-'] },
        { cells: ['مَنَعَ الْقَانُونُ التَّدْخِينَ.', 'مُنِعَ التَّدْخِينُ.', 'u–i'] },
        { cells: ['يَفْحَصُ الْمُوَظَّفُ الْحَقَائِبَ.', 'تُفْحَصُ الْحَقَائِبُ.', 'u–a + tu-'] },
        { cells: ['يَسْتَعْمِلُ النَّاسُ الْهَوَاتِفَ.', 'تُسْتَعْمَلُ الْهَوَاتِفُ.', 'derived (Stretch)'] },
      ],
      foot: 'Website routine: draw an arrow from object to deputy subject — and change its ending to ḍamma.',
      notes: 'WE DO (3 min) — website Active-to-Passive check and game. Cover column 2.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · who is doing it?', title: 'Active or passive?', ar: 'مَعْلُومٌ أَمْ مَجْهُولٌ؟',
      categories: ['Active (doer named)', 'Passive (doer hidden)'],
      items: [['كَتَبَ', 0], ['يَفْتَحُ', 0], ['تَكْتُبُ', 0], ['أَعْلَنَتْ', 0], ['كُتِبَ', 1], ['يُفْتَحُ', 1], ['تُكْتَبُ', 1], ['أُعْلِنَتْ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Website listening idea: which information does the speaker foreground? Clue: a first ḍamma = passive.',
    },
  ],
  mistakes: [
    { wrong: 'يَفْتَحُ الْبَابُ', right: 'يُفْتَحُ الْبَابُ', why: 'For “is opened”, the present passive begins with ḍamma (website clinic).' },
    { wrong: 'كُسِرَ الزُّجَاجَ', right: 'كُسِرَ الزُّجَاجُ', why: 'The deputy subject is nominative (website clinic).' },
    { wrong: 'يُكْتَبُ الرِّسَالَةُ', right: 'تُكْتَبُ الرِّسَالَةُ', why: 'The verb agrees with the feminine noun (website clinic).' },
  ],
  hints: ['Which vowel starts a passive?', 'Fatḥa or ḍamma on the new subject?', 'Ya- or ta- for a feminine noun?'],
  practice: [
    W(/Passive Past Check/, 2, { prompt: 'Choose “The books were read”.', feedback: 'Past passive and feminine singular for a non-human plural.' }),
    W(/Why Passive/, 1, { prompt: 'Which is best for a rule?', feedback: 'An impersonal notice.' }),
    W(/Why Passive/, 3, { prompt: 'Which is the best process description?', feedback: 'A general process.' }),
    W(/Active-to-Passive/, 1, { prompt: 'Transform: yaqraʾu ṭ-ṭullābu l-kutuba.', feedback: 'Non-human plural: feminine singular verb + nominative.' }),
  ],
  practiceLabel: 'website Passive Past, Why Passive and Active-to-Passive checks',
  read: {
    title: 'School notice and news', label: 'website reading workshop (teacher-written notice)',
    text: 'إِعْلَانٌ: تُفْتَحُ الْمَكْتَبَةُ يَوْمِيًّا مِنَ الثَّامِنَةِ. يُمْنَعُ الْأَكْلُ فِي الصُّفُوفِ، وَتُجْمَعُ الْهَوَاتِفُ قَبْلَ الِامْتِحَانِ. خَبَرٌ: سُرِقَتْ دَرَّاجَةٌ مِنْ أَمَامِ الْمَدْرَسَةِ أَمْسِ، وَوُجِدَتْ بَعْدَ سَاعَتَيْنِ فِي الْحَدِيقَةِ. وَأُعْلِنَتْ أَسْمَاءُ الْفَائِزِينَ فِي الْمُسَابَقَةِ، وَكَتَبَتِ الْمُدِيرَةُ رِسَالَةَ شُكْرٍ لِكُلِّ الْمُشَارِكِينَ.',
    glossary: [['تُجْمَعُ', 'are collected'], ['سُرِقَتْ', 'was stolen'], ['وُجِدَتْ', 'was found'], ['الْفَائِزِينَ', 'the winners'], ['الْمُشَارِكِينَ', 'the participants']],
    task: 'Website: underline the passive verbs and identify the affected noun that follows each one.',
    questions: [
      q('What happens to phones before the exam?', ['they are collected', 'they are opened', 'they are stolen'], 'Tujmaʿu l-hawātif.'),
      q('Why is suriqat passive?', ['the thief is unknown', 'it is a rule', 'it is a process'], 'Unknown agent.'),
      q('Which verb is ACTIVE because the doer matters?', ['كَتَبَتِ الْمُدِيرَةُ', 'أُعْلِنَتْ', 'وُجِدَتْ'], 'The head teacher is named.'),
      q('What is forbidden in classrooms?', ['eating', 'reading', 'writing'], 'Yumnaʿu l-akl.'),
    ],
    qNote: 'Teacher-written notice for the website reading workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: how does it work at our school?', source: 'website speaking workshop',
    prompts: [
      { route: 'core', ar: 'مَا الْمَمْنُوعُ فِي مَدْرَسَتِكَ؟' },
      { route: 'develop', ar: 'كَيْفَ يُنَظَّمُ يَوْمُ الِامْتِحَانِ فِي مَدْرَسَتِكَ؟' },
      { route: 'stretch', ar: 'اِشْرَحْ كَيْفَ يُصْنَعُ الْخُبْزُ. ثُمَّ: مَنْ يَصْنَعُهُ فِي بَيْتِكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'يُمْنَعُ ______ ، وَيُمْنَعُ ______ .' },
      { route: 'develop', ar: 'أَوَّلًا تُجْمَعُ ______ ، ثُمَّ تُوَزَّعُ ______ .' },
      { route: 'stretch', ar: 'يُخْلَطُ ______ ، ثُمَّ يُخْبَزُ ______ . أُمِّي ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَيْفَ تُنَظَّفُ الْمَدْرَسَةُ؟', en: 'How is the school cleaned?' },
      { who: 'B', ar: 'تُنَظَّفُ الصُّفُوفُ كُلَّ مَسَاءٍ، وَتُغْسَلُ الْأَرْضُ يَوْمَ الْجُمُعَةِ. وَالطُّلَّابُ يُرَتِّبُونَ طَاوِلَاتِهِمْ قَبْلَ الْخُرُوجِ.', en: 'The classrooms are cleaned every evening, and the floor is washed on Friday. And the students tidy their desks before leaving.' },
    ],
    notes: 'Website: explain a school process with three present passives, then answer who does one step with an active sentence. Listening (website): paired active / passive sentences — what is foregrounded?',
  },
  write: {
    siteTask: 'Write a 120–140-word news report, process description or school notice. Include at least five passive verbs and explain one event with an active sentence where the agent matters.',
    core: { amount: '5 sentences', task: 'A school notice: what is forbidden and when places open.', how: 'yumnaʿu · yuftaḥu · tuftaḥu.' },
    develop: { amount: '7 sentences', task: 'A short news report with past passives.', how: 'u–i; feminine -at.' },
    stretch: { amount: '120–140 words', task: 'Website report or process with one active sentence.', how: 'Derived passives; non-human plural agreement.' },
  },
  frames: {
    core: [
      { en: '… is forbidden', ar: 'يُمْنَعُ ______ .' },
      { en: 'The library opens at …', ar: 'تُفْتَحُ الْمَكْتَبَةُ فِي ______ .' },
      { en: 'The door is closed at …', ar: 'يُغْلَقُ الْبَابُ فِي ______ .' },
      { en: '… was stolen', ar: 'سُرِقَ ______ .' },
    ],
    develop: [
      { en: 'The results were announced …', ar: 'أُعْلِنَتِ النَّتَائِجُ ______ .' },
      { en: 'The books are collected …', ar: 'تُجْمَعُ الْكُتُبُ ______ .' },
      { en: 'The bag was found …', ar: 'وُجِدَتِ الْحَقِيبَةُ ______ .' },
      { en: 'It is said that …', ar: 'يُقَالُ إِنَّ ______ .' },
    ],
    bank: ['يُمْنَعُ', 'يُفْتَحُ', 'تُفْتَحُ', 'يُغْلَقُ', 'تُجْمَعُ', 'سُرِقَ', 'وُجِدَ', 'كُتِبَ', 'أُعْلِنَتْ', 'نُشِرَتْ', 'تُسْتَعْمَلُ', 'يُقَالُ'],
  },
  stretchTask: {
    task: 'Website integrated production task: a 120–140-word news report, process or notice with five passives.',
    checklist: ['Two past passives (u–i).', 'Three present passives (u–a).', 'One feminine subject with -at / tu-.', 'One non-human plural with feminine singular.', 'One active sentence where the doer matters.'],
    phrases: [['أُعْلِنَ أَنَّ', 'it was announced that'], ['يُعْتَقَدُ أَنَّ', 'it is believed that'], ['يُرْجَى', 'it is requested'], ['تُسْتَعْمَلُ', 'is used'], ['أَوَّلًا … ثُمَّ', 'first … then'], ['بَعْدَ ذَلِكَ', 'after that']],
  },
  model: {
    text: 'خَبَرٌ مِنْ مَدْرَسَتِنَا: أُقِيمَ مَعْرِضُ الْعُلُومِ يَوْمَ الْخَمِيسِ، وَدُعِيَ إِلَيْهِ الْأَهَالِي. عُرِضَتْ أَكْثَرُ مِنْ ثَلَاثِينَ تَجْرِبَةً، وَكُتِبَتْ تَقَارِيرُ عَنْ كُلِّ مَشْرُوعٍ. فِي الْمَعْرِضِ تُسْتَعْمَلُ أَدَوَاتٌ آمِنَةٌ فَقَطْ، وَيُمْنَعُ لَمْسُ الْمَوَادِّ الْكِيمِيَائِيَّةِ. تُجْمَعُ آرَاءُ الزُّوَّارِ فِي اسْتِمَارَةٍ قَصِيرَةٍ. وَفِي النِّهَايَةِ اخْتَارَتْ لَجْنَةُ الْمُعَلِّمِينَ أَفْضَلَ مَشْرُوعٍ، وَفَازَتْ بِهِ طَالِبَتَانِ مِنَ الصَّفِّ الْعَاشِرِ.',
    en: 'News from our school: the science fair was held on Thursday, and parents were invited. More than thirty experiments were displayed, and reports were written about every project. At the fair only safe equipment is used, and touching the chemicals is forbidden. Visitors’ opinions are collected on a short form. At the end the teachers’ committee chose the best project, and two Year 10 students won it.',
    find: ['past passive', 'present passive', 'non-human plural', 'active (doer matters)'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My passive verbs start with ḍamma.' },
    { route: 'core', text: 'Past passive u–i; present passive u–a.' },
    { route: 'develop', text: 'The new subject is nominative (ḍamma).' },
    { route: 'develop', text: 'The verb agrees: tu- / -at for feminine and non-human plurals.' },
    { route: 'stretch', text: 'I kept the active where the doer matters.' },
  ],
  exit: [
    W(/Passive Voice Mastery/, 2, { prompt: 'Choose “The door was opened”.', feedback: 'Passive + nominative.' }),
    W(/Passive Voice Mastery/, 5, { prompt: 'Choose “The books are read”.', feedback: 'Non-human plural: feminine + nominative.' }),
    W(/Active-to-Passive/, 0, { prompt: 'Transform: kasara l-waladu n-nāfidhata.', feedback: 'Passive + feminine agreement + nominative.' }),
  ],
  mastery: false,
  prep: {
    words: [['الْكِتَابَةُ', 'writing (verbal noun)', '—'], ['كَاتِبٌ', 'writer / writing (doer)', '—'], ['مَكْتُوبٌ', 'written (done to)', '—'], ['الدِّرَاسَةُ', 'studying', '—'], ['مَدْرُوسٌ', 'studied', '—']],
    questionEn: 'From k-t-b we get kitāba, kātib and maktūb. Which one means “written”?',
    questionAr: 'كَتَبَ · كِتَابَةٌ · كَاتِبٌ · ______',
    homework: {
      core: 'Write five school signs with yumnaʿu and yuftaḥu.',
      develop: 'Transform eight active sentences into the passive.',
      stretch: 'Website task: news report with five passives and one active.',
    },
    wordsSource: 'The five words prepare GM-V-12 (website Verbs lesson 12: verbal nouns and participles).',
  },
  remember: 'Remember: past passive u–i (kutiba) · present passive u–a (yuktabu) · the object becomes the subject: ḍamma + agreement · keep the active when the doer matters.',
});

module.exports = { meta, slides };
