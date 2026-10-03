'use strict';
/* D6-L11 · D6 Consolidation — Complete Review and Speaking Preparation — website: Pathways › Development › D6 › D6-L11 (mirror the tense of the question;
 * cultural verb + preposition said as one unit; extend with لِأَنَّ / عَلَى سَبِيلِ المِثَالِ; qualify as you speak — فِي بَعْضِ البُلْدَانِ · عَلَى حَدِّ عِلْمِي;
 * time-buying and repair phrases دَعْنِي أُفَكِّرُ · عَفْوًا، أَقْصِدُ). Website vocabulary, rules, quiz, sorter, listening, reading, speaking and writing used as
 * published; one English quiz option replaced with Arabic; the third website mistake is an English description, so it is replaced with an Arabic tense
 * slip on the same point; English added to the patterns and speaking model. The website visual game repeats D6-L02, so it is skipped. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D6')({
  n: 11, fileTitle: 'D6_Consolidation_Review_Speaking_Preparation', chip: 'Consolidation',
  title: 'D6 Consolidation — Complete Review and Speaking Preparation', arabic: 'تَرْسِيخُ الوَحْدَةِ — مُرَاجَعَةٌ شَامِلَةٌ وَإِعْدَادُ التَّحَدُّثِ',
  focus: 'Hold a fluent topic conversation on culture and identity under pressure: mirror the tense of the question (مَرَرْتَ بِهَا → حَضَرْتُ), say verb + preposition as one unit (نَحْتَفِلُ بِـ), add a reason (لِأَنَّ …) — and qualify as you speak (فِي بَعْضِ البُلْدَانِ · عَلَى حَدِّ عِلْمِي).',
  icon: 'FaComments', iconSet: 'fa6',
});

const site = D.site('D6-L11');
const quiz = site.grammar.quiz.map((it, i) => (i === 4 ? { ...it, options: [it.options[0], it.options[1], 'لَا شَيْءَ'] } : it));
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D6-L11', {
  support: `• Core: answer four cultural questions aloud with the frames, each verb with its preposition. Develop: add a reason (لِأَنَّ) and one qualifier to every answer. Stretch: a full topic answer across three tenses with a supported opinion and no overgeneralisation — then the website ~80-word self-review.
• This is the speaking rehearsal for the D6-L12 assessment (topic conversation on ثَقَافَتِي وَهُوِيَّتِي). Run the checklist ALOUD: mirror the tense → fix the preposition → add a reason → qualify the claim.
• Fairness and adab: كُلُّ العَرَبِ / كُلُّ المُسْلِمِينَ … is inaccurate as well as unkind to real diversity. One extra second (فِي بَعْضِ البُلْدَانِ) keeps statements true. Collect each student’s “one priority” for L12.`,
  teach: 'Mirror, fix, extend, qualify — while speaking.',
  wedo: 'Sort answer / extend / qualify, fix three slips, then hear a candidate.',
  next: { nextCode: 'D6-L12', nextTitle: 'D6 Review and Unit Assessment', nextAr: 'المُرَاجَعَةُ وَتَقْيِيمُ الوَحْدَةِ' },
  objectives: ['Sustain a topic conversation on culture and identity.', 'Use cultural verbs, three tenses and an opinion while speaking.', 'Qualify a cultural claim in real time.', 'Name my own priority before the final assessment.'],
  rulesAr: 'نِظَامُ الوَحْدَةِ تَحْتَ ضَغْطِ التَّحَدُّثِ',
  flexGroups: [1],
  doNow: {
    questions: [
      q('What does الطَّلَاقَةُ mean?', ['fluency', 'accuracy', 'hesitation'], 'Prepared at home (D6-L10).'),
      q('What does عَلَى حَدِّ عِلْمِي mean?', ['as far as I know', 'in my opinion', 'for example'], 'Prepared at home (D6-L10).'),
      q('What does لَا أُعَمِّمُ mean?', ['I do not generalise', 'I do not know', 'I do not agree'], 'Prepared at home (D6-L10).'),
      q('A speaker says فِي بَعْضِ العَائِلَاتِ. Which option is wrong?', ['All families do this.', 'Some families do this.', 'It varies between families.'], 'D6-L10: a hedge narrows the claim.'),
      q('What does كَانَتْ جَدَّتِي تُعِدُّ الحَلْوَى mean?', ['My grandmother used to make the sweets.', 'My grandmother made the sweets once.', 'My grandmother will make the sweets.'], 'D6-L10: كَانَ + present = past habit.'),
    ],
    keyIdea: { text: 'Mirror the tense → fix the preposition → add a reason → qualify the claim.', ar: '{k|حَضَرْتُ} · {e|نَحْتَفِلُ بِـ} · {w|لِأَنَّ} · {k|فِي بَعْضِ البُلْدَانِ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D6-L10. Questions 4–5 retrieve D6-L10 (hedges · كَانَ + present).',
  },
  routes: {
    core: ['I answer in the tense the question uses.', 'I say each cultural verb with its preposition.'],
    develop: ['I add a reason or an example to every answer.', 'I qualify one claim (فِي بَعْضِ …).'],
    stretch: ['I give a full answer across three tenses with a supported opinion.', 'I can name my own priority for the assessment.'],
  },
  bridge: [
    { ar: 'تَقْيِيمٌ', urdu: 'تقییم / قدر', tr: 'qadr', en: 'assessment, evaluation (قِيمَةٌ = value)' },
    { ar: 'مِثَالٌ', urdu: 'مثال', tr: 'misāl', en: 'example (same word)' },
    { ar: 'عِلْمٌ', urdu: 'علم', tr: 'ʿilm', en: 'knowledge (عَلَى حَدِّ عِلْمِي = as far as I know)' },
    { ar: 'عِبَارَةٌ', urdu: 'عبارت', tr: 'ʿibārat', en: 'Urdu: a written passage · Arabic: a phrase' },
    { ar: 'عَامٌّ / تَعْمِيمٌ', urdu: 'عام', tr: 'ʿām', en: 'general (لَا أُعَمِّمُ = I do not generalise)' },
  ],
  bridgeNotes: 'URDU BRIDGE: مثال، علم، عام are shared — عام in Urdu means “common, general”, the root of Arabic أُعَمِّمُ (I generalise). CAREFUL: Urdu عبارت = a passage of text; Arabic بِعِبَارَةٍ أُخْرَى = in other words (a phrase).',
  core: ['مُرَاجَعَةٌ نِهَائِيَّةٌ', 'تَقْيِيمٌ ذَاتِيٌّ', 'الطَّلَاقَةُ', 'دَعْنِي أُفَكِّرُ', 'عَلَى سَبِيلِ المِثَالِ', 'عَفْوًا، أَقْصِدُ', 'فِي بَعْضِ البُلْدَانِ', 'أَحْيَانًا', 'لَيْسَ دَائِمًا', 'عَلَى حَدِّ عِلْمِي', 'يَخْتَلِفُ الأَمْرُ', 'لَا أُعَمِّمُ'],
  forms: {
    'تَقْيِيمٌ ذَاتِيٌّ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'تَقْيِيمَاتٌ ذَاتِيَّةٌ' }] },
    'فِي بَعْضِ البُلْدَانِ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'بَلَدٌ' }] },
    'فِي بَعْضِ العَائِلَاتِ': { tag: 'pl · sg', forms: [{ l: 'sg.', ar: 'عَائِلَةٌ' }] },
    'لَا أُعَمِّمُ': { tag: 'II · I · he', forms: [{ l: 'he', ar: 'لَا يُعَمِّمُ' }, { l: 'she', ar: 'لَا تُعَمِّمُ' }] },
    'يَحْتَفِلُ بِـ': { tag: 'VIII · past', forms: [{ l: 'past', ar: 'اِحْتَفَلَ' }, { l: 'I', ar: 'أَحْتَفِلُ' }] },
    'يَتَكَيَّفُ مَعَ': { tag: 'V · past', forms: [{ l: 'past', ar: 'تَكَيَّفَ' }, { l: 'I', ar: 'أَتَكَيَّفُ' }] },
  },
  vocabNotes: {
    0: 'Speaking with control: phrases that buy time (دَعْنِي أُفَكِّرُ), extend (عَلَى سَبِيلِ المِثَالِ), rephrase (بِعِبَارَةٍ أُخْرَى) and repair (عَفْوًا، أَقْصِدُ) — all in Arabic, never in English.',
    1: 'The D6 spine to reuse (FLEX — revision of L02–L09): every cultural verb with its fixed preposition, the cultural passives, and the opinion structure.',
    2: 'Qualifying in real time: each phrase keeps a cultural statement accurate. Build it INTO the sentence as you say it.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · mirror the tense, keep the preposition (website rules 1–2)', title: 'Answer the question that was asked', ar: 'أَجِبْ بِزَمَنِ السُّؤَالِ',
      cols: [{ label: 'Examiner asks', w: 3.6, size: 20 }, { label: 'Candidate answers (website)', w: 6.0, size: 22 }, { label: 'Check', w: 2.73 }],
      rows: [
        { core: true, cells: ['صِفْ مُنَاسَبَةً {k|مَرَرْتَ} بِهَا.', P('فِي العَامِ المَاضِي {k|حَضَرْتُ} حَفْلًا فِي المَرْكَزِ.', 'Last year I attended a party at the centre.'), 'past → past'] },
        { core: true, cells: ['كَيْفَ {e|تَحْتَفِلُونَ} بِالعِيدِ؟', P('{e|نَحْتَفِلُ بِالعِيدِ} كُلَّ سَنَةٍ مَعَ الجَالِيَةِ.', 'We celebrate Eid every year with the community.'), 'present + bi-'] },
        { core: true, cells: ['إِلَى أَيِّ ثَقَافَةٍ {e|تَنْتَمِي}؟', P('{e|أَنْتَمِي إِلَى} ثَقَافَتَيْنِ.', 'I belong to two cultures.'), 'present + ilā'] },
        { cells: ['مَاذَا {w|سَتَفْعَلُ} فِي العَامِ القَادِمِ؟', P('{w|سَأَزُورُ} بَلَدَ أُسْرَتِي.', 'I will visit my family’s country.'), 'future → future'] },
      ],
      ltr: true,
      foot: 'Switching a past question into the present is the commonest avoidance pattern — examiners notice it.',
      notes: `GRAMMAR PART 1 — website rules “Mirror the tense of the question” (past question → past answer) and “Cultural verb plus preposition” (say the verb and the preposition as one unit so the pair never comes apart under pressure).
Drill: teacher says the verb, class answers with the preposition — يَحْتَفِلُ → بِـ · يَنْتَمِي → إِلَى · يَتَكَيَّفُ → مَعَ · يَحْتَفِظُ → بِـ · يَعْتَزُّ → بِـ · يَطْمَحُ → إِلَى.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · extend and qualify (website rules 3–4) · Develop / Stretch', title: 'One more clause, one more second', ar: 'التَّوَسُّعُ وَالتَّحَفُّظُ',
      cards: [
        { chip: 'REASON · CORE', color: '1E6B52', head: 'لِأَنَّ', big: 'أَعْتَزُّ بِلُغَتِي لِأَنَّهَا تَرْبِطُنِي بِجُذُورِي.', en: 'I am proud of my language because it ties me to my roots.', clue: 'Claim + reason.' },
        { chip: 'EXAMPLE · DEVELOP', color: '1D5FBF', head: 'عَلَى سَبِيلِ المِثَالِ', big: 'عَلَى سَبِيلِ المِثَالِ، تُزَيَّنُ البُيُوتُ بِالفَوَانِيسِ.', en: 'For example, houses are decorated with lanterns.', clue: 'Make it concrete.' },
        { chip: 'QUALIFY · STRETCH', color: '6B4C9A', head: 'عَلَى حَدِّ عِلْمِي', big: 'عَلَى حَدِّ عِلْمِي تَخْتَلِفُ العَادَاتُ فِي بَعْضِ البُلْدَانِ.', en: 'As far as I know, customs differ in some countries.', clue: 'Never “all”.' },
      ],
      error: { text: 'Website mistake: a claim about a whole population is inaccurate.', pairs: [['فِي بَعْضِ البُلْدَانِ يَحْتَفِلُ النَّاسُ بِهٰذِهِ الطَّرِيقَةِ.', 'كُلُّ العَرَبِ يَحْتَفِلُونَ بِالطَّرِيقَةِ نَفْسِهَا.']] },
      notes: `GRAMMAR PART 2 — website rules “Extend with a reason or an example” (a bare answer scores little; one extension turns it into a response) and “Qualify as you speak” (a qualifier keeps a cultural statement accurate and shows control of register).
Website teaching points: “Hedge while you speak, not afterwards.” · “One accurate cultural verb beats three careless ones — examiners hear the preposition.”`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me answer under pressure',
    steps: [
      { head: 'Buy time', ar: '{w|دَعْنِي أُفَكِّرُ}', think: 'In Arabic.' },
      { head: 'Mirror', ar: '{k|حَضَرْتُ} حَفْلًا', think: 'Past question.' },
      { head: 'Repair', ar: '{w|عَفْوًا، أَقْصِدُ} زُيِّنَتْ', think: 'Fix the tense.' },
      { head: 'Qualify', ar: '{e|عَلَى حَدِّ عِلْمِي} لَا', think: 'Not everyone.' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: 'TENSE', w: 'TIME / REPAIR', e: 'QUALIFIER' },
    model: '{w|دَعْنِي أُفَكِّرُ}. فِي العَامِ المَاضِي {k|حَضَرْتُ} حَفْلًا فِي المَرْكَزِ الثَّقَافِيِّ، وَتُزَيَّنُ القَاعَةُ … {w|عَفْوًا، أَقْصِدُ} أَنَّهَا {k|زُيِّنَتْ} بِالفَوَانِيسِ. {e|عَلَى حَدِّ عِلْمِي} لَا يَحْتَفِلُ الجَمِيعُ بِالطَّرِيقَةِ نَفْسِهَا؛ {e|فَفِي بَعْضِ البُلْدَانِ} تَخْتَلِفُ العَادَاتُ.',
    modelEn: 'Let me think. Last year I attended a party at the cultural centre, and the hall is decorated … sorry, I mean it was decorated with lanterns. As far as I know, not everyone celebrates the same way; in some countries customs differ.',
    notes: 'I DO (3 min) — from the website listening (the candidate). Model the repair on purpose: start with the present passive تُزَيَّنُ, stop, and self-correct to the past زُيِّنَتْ with عَفْوًا، أَقْصِدُ. Students hear that a repair in Arabic is a strength, not a failure.',
  },
  patternEn: ['we celebrate Eid every year', 'in some families … and not always', 'I am proud of my language because it ties me to my roots'],
  sorterNotes: 'Then build one full answer: one card from each column, in order.',
  mistakes: [
    { wrong: 'كُلُّ العَرَبِ يَحْتَفِلُونَ بِالطَّرِيقَةِ نَفْسِهَا.', right: 'فِي بَعْضِ البُلْدَانِ يَحْتَفِلُ النَّاسُ بِهٰذِهِ الطَّرِيقَةِ.', why: 'A claim about a whole population is inaccurate.' },
    { wrong: 'نَحْتَفِلُ العِيدَ.', right: 'نَحْتَفِلُ بِالعِيدِ.', why: 'yaḥtafilu requires bi-.' },
    { wrong: 'فِي العَامِ المَاضِي أَحْضُرُ حَفْلًا فِي المَرْكَزِ.', right: 'فِي العَامِ المَاضِي حَضَرْتُ حَفْلًا فِي المَرْكَزِ.', why: 'A past question needs a past answer.' },
  ],
  patch: {
    grammar: { ...site.grammar, quiz },
    speaking: {
      model: [
        ['A', 'صِفْ مُنَاسَبَةً ثَقَافِيَّةً مَرَرْتَ بِهَا.', 'Describe a cultural occasion you have experienced.'],
        ['B', 'فِي العَامِ المَاضِي حَضَرْتُ حَفْلًا فِي المَرْكَزِ الثَّقَافِيِّ، وَزُيِّنَتِ القَاعَةُ بِالفَوَانِيسِ.', 'Last year I attended a party at the cultural centre, and the hall was decorated with lanterns.'],
        ['A', 'وَهَلْ يَحْتَفِلُ الجَمِيعُ بِالطَّرِيقَةِ نَفْسِهَا؟', 'And does everyone celebrate the same way?'],
        ['B', 'عَلَى حَدِّ عِلْمِي لَا؛ فَفِي بَعْضِ البُلْدَانِ تَخْتَلِفُ العَادَاتُ، وَلَا يُمْكِنُ إِنْكَارُ أَنَّ التَّنَوُّعَ ثَرْوَةٌ.', 'As far as I know, no — in some countries customs differ, and it cannot be denied that diversity is a richness.'],
      ],
    },
  },
  patchNote: 'one English quiz option replaced with Arabic, the English-description mistake replaced with an Arabic tense slip, and English added to the patterns and speaking model; the website visual game repeats D6-L02 and is skipped.',
  hints: ['All, or some?', 'yaḥtafilu + which preposition?', 'Last year → which tense?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nExaminer and candidate — listen for her phrases.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — and note her time-buying, repair and qualifying phrases.',
  gloss: [
    ['المُمْتَحِنُ: صِفْ مُنَاسَبَةً ثَقَافِيَّةً مَرَرْتَ بِهَا. الطَّالِبَةُ: دَعْنِي أُفَكِّرُ.', 'Examiner: Describe a cultural occasion you have experienced. Student: Let me think.'],
    ['فِي العَامِ المَاضِي حَضَرْتُ حَفْلًا فِي المَرْكَزِ الثَّقَافِيِّ، وَتُزَيَّنُ القَاعَةُ عَادَةً بِالأَعْلَامِ وَالفَوَانِيسِ. عَفْوًا، أَقْصِدُ أَنَّهَا زُيِّنَتْ فِي ذٰلِكَ اليَوْمِ.', 'Last year I attended a party at the cultural centre, and the hall is usually decorated with flags and lanterns. Sorry, I mean it was decorated on that day.'],
    ['المُمْتَحِنُ: وَهَلْ يَحْتَفِلُ كُلُّ النَّاسِ بِالطَّرِيقَةِ نَفْسِهَا؟', 'Examiner: And does everyone celebrate in the same way?'],
    ['الطَّالِبَةُ: عَلَى حَدِّ عِلْمِي لَا؛ فَفِي بَعْضِ البُلْدَانِ تَخْتَلِفُ العَادَاتُ، وَلَيْسَ دَائِمًا يَتَشَابَهُ الاحْتِفَالُ.', 'Student: As far as I know, no — in some countries customs differ, and the celebration is not always the same.'],
    ['المُمْتَحِنُ: وَمَا أَهَمِّيَّةُ اللُّغَةِ العَرَبِيَّةِ فِي حَيَاتِكِ؟ الطَّالِبَةُ: لَا يُمْكِنُ إِنْكَارُ أَنَّ اللُّغَةَ جُزْءٌ مِنَ الهُوِيَّةِ، وَأَعْتَزُّ بِهَا، وَسَأُوَاصِلُ تَعَلُّمَهَا.', 'Examiner: And how important is Arabic in your life? Student: It cannot be denied that language is part of identity; I am proud of it, and I will keep learning it.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ بَلَدًا عَرَبِيًّا تُرِيدُ زِيَارَتَهُ. وَلِمَاذَا؟' },
      { route: 'develop', ar: 'صِفْ مُنَاسَبَةً ثَقَافِيَّةً أَوْ دِينِيَّةً مَرَرْتَ بِهَا.' },
      { route: 'stretch', ar: 'مَا أَهَمِّيَّةُ اللُّغَةِ العَرَبِيَّةِ فِي حَيَاتِكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أُرِيدُ أَنْ أَزُورَ ______ ، لِأَنَّ ______ .' },
      { route: 'develop', ar: 'فِي العَامِ المَاضِي حَضَرْتُ ______ ، وَزُيِّنَ / زُيِّنَتْ ______ .' },
      { route: 'stretch', ar: 'لَا يُمْكِنُ إِنْكَارُ أَنَّ ______ ، وَعَلَى حَدِّ عِلْمِي ______ .' },
    ],
    modelEn: ['Describe a cultural occasion you have experienced.', 'Last year I attended a party at the cultural centre, and the hall was decorated with lanterns.'],
    notes: 'Website prompts and model: a full topic-conversation rehearsal. Pairs swap roles (examiner / candidate); the examiner ticks: tense mirrored · preposition · reason · qualifier. To a girl: تُرِيدِينَ · مَرَرْتِ · حَيَاتِكِ.',
  },
  write: {
    core: { amount: '5 sentences', how: 'What was difficult, what you practised, and one target (frames).' },
    develop: { amount: '60 words', how: 'Add كَانَ + present for an old habit and one cultural verb with its preposition.' },
    stretch: { amount: '≈ 80 words', how: 'Website task: your D6 self-review — difficulty, practice, progress, next focus, one qualifier.' },
  },
  frames: {
    core: [
      { en: 'At the beginning I used to make mistakes in …', ar: 'فِي البِدَايَةِ كُنْتُ أُخْطِئُ فِي ______ .' },
      { en: 'Then I practised …', ar: 'ثُمَّ تَدَرَّبْتُ عَلَى ______ .' },
      { en: 'Now I say …', ar: 'وَالآنَ أَقُولُ ______ .' },
      { en: 'In the future I will focus on …', ar: 'وَفِي المُسْتَقْبَلِ سَأُرَكِّزُ عَلَى ______ .' },
    ],
    develop: [
      { en: 'I used to say … instead of …', ar: 'كُنْتُ أَقُولُ ______ بَدَلَ ______ .' },
      { en: 'Despite that, I still need …', ar: 'عَلَى الرَّغْمِ مِنْ ذٰلِكَ مَا زِلْتُ أَحْتَاجُ إِلَى ______ .' },
      { en: 'I aspire to …', ar: 'وَأَطْمَحُ إِلَى أَنْ ______ .' },
      { en: 'As far as I know …', ar: 'عَلَى حَدِّ عِلْمِي ______ .' },
    ],
    bank: ['كُنْتُ أُخْطِئُ', 'حُرُوفُ الجَرِّ', 'تَدَرَّبْتُ عَلَى', 'وَحْدَةً وَاحِدَةً', 'كُنْتُ أُعَمِّمُ', 'فِي بَعْضِ البُلْدَانِ', 'عَلَى حَدِّ عِلْمِي', 'مَا زِلْتُ أَحْتَاجُ إِلَى', 'سُرْعَةٌ فِي الرَّدِّ', 'سَأُرَكِّزُ عَلَى', 'أَطْمَحُ إِلَى', 'دُونَ تَرَدُّدٍ'],
  },
  stretch: [
    ['حَتَّى صَارَا وَحْدَةً وَاحِدَةً', 'until they became one unit'],
    ['رَاجَعْتُ نِقَاطَ ضَعْفِي بِصَرَاحَةٍ', 'I reviewed my weak points honestly'],
    ['مَا زِلْتُ أَحْتَاجُ إِلَى سُرْعَةٍ أَكْبَرَ', 'I still need more speed'],
    ['سَأُرَكِّزُ عَلَى إِضَافَةِ سَبَبٍ فِي كُلِّ إِجَابَةٍ', 'I will focus on adding a reason to every answer'],
    ['أَنْ أَتَحَدَّثَ دُونَ تَرَدُّدٍ', 'to speak without hesitation'],
  ],
  modelEn: 'At the beginning I used to make mistakes with prepositions after cultural verbs: I said “naḥtafilu al-ʿīda” instead of “naḥtafilu bil-ʿīd”. Then I practised each verb with its preposition until they became one unit. I also sometimes used to generalise, and now I say “in some countries” or “as far as I know”. Despite that, I still need more speed in replying. In the future I will focus on adding a reason to every answer, and I aspire to speak without hesitation.',
  find: ['كَانَ + present (old habit)', 'four past verbs', 'a cultural verb + preposition', 'a future focus and a qualifier'],
  modelNotes: 'Website writing model. Evidence: كُنْتُ أُخْطِئُ · كُنْتُ أُعَمِّمُ · تَدَرَّبْتُ · صَارَا · نَحْتَفِلُ بِالعِيدِ · فِي بَعْضِ البُلْدَانِ · عَلَى حَدِّ عِلْمِي · عَلَى الرَّغْمِ مِنْ ذٰلِكَ · سَأُرَكِّزُ · أَطْمَحُ إِلَى أَنْ أَتَحَدَّثَ.',
  selfCheck: [
    { route: 'core', text: 'I answered in the tense the question used.' },
    { route: 'core', text: 'Every cultural verb had its preposition.' },
    { route: 'develop', text: 'I added a reason or an example to each answer.' },
    { route: 'develop', text: 'I qualified at least one claim.' },
    { route: 'stretch', text: 'I named my one priority for the assessment.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['التَّقْيِيمِ النِّهَائِيِّ', 'the final assessment'], ['نِقَاطَ ضَعْفِي', 'my weak points'], ['بِصَرَاحَةٍ', 'honestly'], ['أُخْطِئُ', 'I make mistakes'], ['بَدَلَ', 'instead of'],
    ['حَتَّى صَارَا', 'until they became'], ['أُعَمِّمُ', 'I generalise'], ['مَا زِلْتُ', 'I still'], ['سُرْعَتِي فِي الرَّدِّ', 'my speed in replying'], ['دُونَ تَرَدُّدٍ', 'without hesitation'],
  ],
  prep: {
    words: [['تَقْيِيمٌ', 'an assessment', 'pl. تَقْيِيمَاتٌ'], ['فَهْمُ المَسْمُوعِ', 'listening comprehension', '—'], ['فَهْمُ المَقْرُوءِ', 'reading comprehension', '—'], ['المُحَادَثَةُ', 'the conversation', 'pl. المُحَادَثَاتُ'], ['أُرَاجِعُ إِجَابَتِي', 'I check my answer', 'تُرَاجِعُ she']],
    questionEn: 'Prepare three answers for the speaking assessment — one past, one present, one future — each with a reason and one qualifier.',
    questionAr: 'حَضَرْتُ … لِأَنَّ … · نَحْتَفِلُ بِـ … · سَأَزُورُ … · عَلَى حَدِّ عِلْمِي …',
    homework: {
      core: 'Learn the cultural verbs with their prepositions; answer the four topic questions aloud.',
      develop: 'Record a 60-second answer with a reason and a qualifier.',
      stretch: 'Website writing task: an ≈ 80-word self-review of your D6 progress.',
    },
    wordsSource: 'The five words prepare students for the D6-L12 assessment (its four parts and checking).',
  },
  remember: 'Remember: mirror the tense · verb + preposition as one unit · add لِأَنَّ … · qualify with فِي بَعْضِ … / عَلَى حَدِّ عِلْمِي — and repair in Arabic.',
});

module.exports = { meta, slides };
