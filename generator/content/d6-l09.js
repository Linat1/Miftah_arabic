'use strict';
/* D6-L09 · Writing — Countries, Culture and Identity (Paper 4 Extended Writing) — website: Pathways › Development › D6 › D6-L09 (130–140 words on ثَقَافَتِي وَهُوِيَّتِي:
 * past experience → present habit → opinion → future aspiration; one cultural verb with its preposition; لَا يُمْكِنُ إِنْكَارُ أَنَّ + accusative; a passive and a
 * formal connector; أَعْتَزُّ بِـ · أَطْمَحُ إِلَى; self-marking against Task Completion, Range and Accuracy). Website vocabulary, rules, quiz, sorter, mistakes,
 * listening, reading model, speaking and writing used as published. Key case-ending distractors kept on purpose; English added to the patterns and speaking model
 * (the last speaking line is smoothed). The website visual game repeats D6-L02, so it is skipped. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D6')({
  n: 9, fileTitle: 'Writing_Countries_Culture_Identity', chip: 'Extended Writing',
  title: 'Writing — Countries, Culture and Identity (Paper 4)', arabic: 'الكِتَابَةُ — الدُّوَلُ وَالثَّقَافَةُ وَالهُوِيَّةُ',
  focus: 'Plan, write and self-mark 130–140 words on ثَقَافَتِي وَهُوِيَّتِي that shows the full D6 range: a past celebration (احْتَفَلْنَا بِالعِيدِ), the present (تُزَيَّنُ البُيُوتُ), a supported opinion (لَا يُمْكِنُ إِنْكَارُ أَنَّ اللُّغَةَ …) and a future aspiration (أَطْمَحُ إِلَى …).',
  icon: 'FaPenNib', iconSet: 'fa6',
});

const site = D.site('D6-L09');
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D6-L09', {
  support: `• Core: the three-paragraph frame — past celebration · present · future (70–90 words), one cultural verb with its preposition. Develop: 110–130 words with a passive and a formal connector. Stretch: the website task (130–140 words) with all six structures and a supported opinion — then the 90-second self-mark.
• Website key message: Range = variety of STRUCTURE, not long words. Accuracy: ONE cultural verb with the right preposition is worth more than three used carelessly.
• Identity is personal: any celebration or family tradition works, and a fictional family is always acceptable. This is the D6 writing showcase — keep the best draft for the D6-L12 assessment.`,
  teach: 'Six structures planned, then checked one at a time.',
  wedo: 'Sort sentences into sections, fix slips, then hear a student plan the piece.',
  next: { nextCode: 'D6-L10', nextTitle: 'Listening — Culture, Celebration and Identity Texts', nextAr: 'الاِسْتِمَاعُ — نُصُوصُ الثَّقَافَةِ وَالاحْتِفَالِ وَالهُوِيَّةِ' },
  objectives: ['Write 130–140 words on culture and identity.', 'Use the full D6 range in one coherent piece.', 'Support an opinion with لَا يُمْكِنُ إِنْكَارُ أَنَّ or مِنْ وِجْهَةِ نَظَرِي.', 'Self-mark my draft for Task Completion, Range and Accuracy.'],
  rulesAr: 'تَوْظِيفُ القَوَاعِدِ كَامِلَةً فِي نَصٍّ وَاحِدٍ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does أَعْتَزُّ بِـ mean?', ['I take pride in', 'I belong to', 'I hope to'], 'Prepared at home (D6-L08).'),
      q('What does مِنْ وِجْهَةِ نَظَرِي mean?', ['from my point of view', 'in conclusion', 'frankly'], 'Prepared at home (D6-L08).'),
      q('What does الدِّقَّةُ mean?', ['accuracy', 'range', 'word count'], 'Prepared at home (D6-L08).'),
      q('Complete: يُشِيرُ الكَاتِبُ ___ أَهَمِّيَّةِ التُّرَاثِ.', ['إِلَى', 'عَنْ', 'بِـ'], 'D6-L08.'),
      q('Choose the accurate sentence.', ['لَنْ نَتَخَلَّى عَنْ لُغَتِنَا.', 'لَنْ تَخَلَّيْنَا عَنْ لُغَتِنَا.', 'لَنْ سَنَتَخَلَّى عَنْ لُغَتِنَا.'], 'D6-L07: لَنْ + present.'),
    ],
    keyIdea: { text: 'Range = variety of structure, not long words. Plan where each structure goes, then check them one by one.', ar: '{k|احْتَفَلْنَا بِـ} · {e|تُزَيَّنُ البُيُوتُ} · {w|لَا يُمْكِنُ إِنْكَارُ أَنَّ} · {k|أَطْمَحُ إِلَى}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D6-L08. Questions 4–5 retrieve D6-L08 (يُشِيرُ إِلَى) and D6-L07 (لَنْ + subjunctive).',
  },
  routes: {
    core: ['I can write one paragraph per section with frames.', 'I can use one cultural verb with its preposition.'],
    develop: ['I can add a passive and a formal connector.', 'I can support my opinion with a reason.'],
    stretch: ['I can write 130–140 words with all six structures.', 'I can self-mark against the three criteria.'],
  },
  bridge: [
    { ar: 'هُوِيَّةٌ', urdu: 'ہویت / شناخت', tr: 'shanākht', en: 'identity' },
    { ar: 'تَجْرِبَةٌ', urdu: 'تجربہ', tr: 'tajriba', en: 'experience (same word)' },
    { ar: 'قِيمَةٌ', urdu: 'قیمت', tr: 'qīmat', en: 'Urdu: price · Arabic: value (also price)' },
    { ar: 'إِنْكَارٌ', urdu: 'انکار', tr: 'inkār', en: 'Urdu: refusal · Arabic: denial' },
    { ar: 'نَظَرٌ / نَظَرِيَّةٌ', urdu: 'نظر / نظریہ', tr: 'nazar / nazariya', en: 'view / point of view' },
  ],
  bridgeNotes: 'URDU BRIDGE: تجربہ، نظریہ، انکار are shared. CAREFUL: Urdu انکار = saying no; Arabic لَا يُمْكِنُ إِنْكَارُ أَنَّ = “it cannot be denied that”. Urdu قیمت = price; Arabic القِيمَةُ الثَّقَافِيَّةُ = cultural value.',
  core: ['الهُوِيَّةُ', 'تَجْرِبَةٌ شَخْصِيَّةٌ', 'أَعْتَزُّ بِـ', 'أَنْتَمِي إِلَى', 'لَا يُمْكِنُ إِنْكَارُ أَنَّ', 'مِنْ وِجْهَةِ نَظَرِي', 'أَعْتَقِدُ أَنَّ', 'أَطْمَحُ إِلَى', 'فِي الخِتَامِ', 'إِنْجَازُ المُهِمَّةِ', 'التَّنَوُّعُ اللُّغَوِيُّ', 'الدِّقَّةُ'],
  forms: {
    'تَجْرِبَةٌ شَخْصِيَّةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'تَجَارِبُ شَخْصِيَّةٌ' }] },
    'القِيمَةُ الثَّقَافِيَّةُ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'القِيَمُ الثَّقَافِيَّةُ' }] },
    'أَعْتَزُّ بِـ': { tag: 'VIII · past', forms: [{ l: 'past', ar: 'اِعْتَزَّ' }, { l: 'he', ar: 'يَعْتَزُّ' }] },
    'أَنْتَمِي إِلَى': { tag: 'VIII · past', forms: [{ l: 'past', ar: 'اِنْتَمَى' }, { l: 'he', ar: 'يَنْتَمِي' }] },
    'أَطْمَحُ إِلَى': { tag: 'I · past', forms: [{ l: 'past', ar: 'طَمَحَ' }, { l: 'he', ar: 'يَطْمَحُ' }] },
    'أَتَمَنَّى أَنْ': { tag: 'V · past', forms: [{ l: 'past', ar: 'تَمَنَّى' }, { l: 'he', ar: 'يَتَمَنَّى' }] },
    'أَعْتَقِدُ أَنَّ': { tag: 'VIII · past', forms: [{ l: 'past', ar: 'اِعْتَقَدَ' }, { l: 'he', ar: 'يَعْتَقِدُ' }] },
  },
  vocabNotes: {
    0: 'Writing about identity: the content words. أَعْتَزُّ بِـ and أَنْتَمِي إِلَى keep their prepositions.',
    1: 'Opinion structures: أَنَّ + noun in -a (لَا يُمْكِنُ إِنْكَارُ أَنَّ اللُّغَةَ …) · أَنْ + verb in -a (مِنَ المُهِمِّ أَنْ نَحْتَفِظَ …).',
    2: 'The mark scheme: the three criteria (Task Completion · Range · Accuracy) and the four things to check in your draft.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the four-section plan (website rule 1 + listening)', title: 'Past, present, opinion, future', ar: 'خُطَّةُ النَّصِّ',
      cols: [{ label: 'Section', w: 2.4 }, { label: 'Model (website)', w: 7.2, size: 22 }, { label: 'Structure', w: 2.73 }],
      rows: [
        { core: true, cells: ['1 · past', P('{k|فِي الطُّفُولَةِ} احْتَفَلْنَا بِالعِيدِ فِي بَلَدِ أُسْرَتِي.', 'In childhood we celebrated Eid in my family’s country.'), 'past + cultural verb'] },
        { core: true, cells: ['2 · present', P('{e|أَمَّا الآنَ} فَنَحْتَفِلُ هُنَا، وَتُزَيَّنُ البُيُوتُ.', 'Now we celebrate here, and the houses are decorated.'), 'present + passive'] },
        { core: true, cells: ['3 · opinion', P('{w|لَا يُمْكِنُ إِنْكَارُ أَنَّ} اللُّغَةَ جُزْءٌ مِنَ الهُوِيَّةِ.', 'It cannot be denied that language is part of identity.'), 'anna + noun in -a'] },
        { core: true, cells: ['4 · future', P('{k|وَفِي المُسْتَقْبَلِ} سَأَزُورُ بَلَدَ أُسْرَتِي مَرَّةً أُخْرَى.', 'In the future I will visit my family’s country again.'), 'sa- + present'] },
        { cells: ['4 · aspiration', P('وَأَطْمَحُ إِلَى أَنْ أُتْقِنَ الفُصْحَى.', 'And I aspire to master classical Arabic.'), 'aṭmaḥu ilā'] },
      ],
      ltr: true,
      foot: 'Plan where each structure will go BEFORE writing — then check them one at a time.',
      notes: `GRAMMAR PART 1 — website rule “Three tenses, signalled” (past experience → present habit → future aspiration; each section carries its own time phrase) and the website listening (a student plans each paragraph, adds an opinion, then counts the words and checks every suffix and preposition).
Website mistake: فِي الطُّفُولَةِ نَحْتَفِلُ ✗ → احْتَفَلْنَا.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · verb, opinion, passive (website rules 2–4) · Develop / Stretch', title: 'Accuracy beats quantity', ar: 'الدِّقَّةُ قَبْلَ الكَثْرَةِ',
      cards: [
        { chip: 'CULTURAL VERB · CORE', color: '1E6B52', head: 'نَحْتَفِلُ بِالعِيدِ', big: 'نَحْتَفِلُ بِالعِيدِ كُلَّ سَنَةٍ.', en: 'We celebrate Eid every year.', clue: 'One verb, right preposition.' },
        { chip: 'OPINION · DEVELOP', color: '1D5FBF', head: 'لَا يُمْكِنُ إِنْكَارُ أَنَّ', big: 'لَا يُمْكِنُ إِنْكَارُ أَنَّ التَّنَوُّعَ ثَرْوَةٌ.', en: 'It cannot be denied that diversity is a richness.', clue: 'Noun after anna: -a.' },
        { chip: 'PASSIVE · STRETCH', color: '6B4C9A', head: 'تُزَيَّنُ البُيُوتُ', big: 'تُزَيَّنُ البُيُوتُ فِي المُنَاسَبَاتِ.', en: 'Houses are decorated on special occasions.', clue: 'Subject ends in -u.' },
      ],
      error: { text: 'Website mistake: the noun after أَنَّ is accusative.', pairs: [['أَنَّ اللُّغَةَ جُزْءٌ', 'أَنَّ اللُّغَةُ جُزْءٌ']] },
      notes: `GRAMMAR PART 2 — website rules “One cultural verb, correctly governed” (يَحْتَفِلُ بِـ · يَنْتَمِي إِلَى · يَتَمَسَّكُ بِـ · يَعْتَادُ عَلَى — choose one and get its preposition right), “An opinion with a supported claim” (أَنَّ makes the following noun accusative; follow the claim with a reason) and “A passive and a formal connector” (passive subject nominative; عَلَى الرَّغْمِ مِنْ + genitive).
Website teaching point: “Mark your own draft in ninety seconds: count the past verbs, check each suffix, check the preposition on every cultural verb, confirm the passive subject is nominative, count the words.”`,
    },
  ],
  quick: [0, 1, 3, 4],
  rest: [2, 5, 6, 7],
  ido: {
    title: 'Watch me plan, draft and self-mark',
    steps: [
      { head: 'Plan', ar: 'المَاضِي · الحَاضِرُ · الرَّأْيُ · المُسْتَقْبَلُ', think: 'Four boxes first.' },
      { head: 'Past', ar: '{k|احْتَفَلْنَا بِالعِيدِ}', think: 'Cultural verb + bi-.' },
      { head: 'Opinion', ar: '{w|أَنَّ اللُّغَةَ} جُزْءٌ مِنَ الهُوِيَّةِ', think: 'Noun in -a.' },
      { head: 'Check', ar: 'اللَّوَاحِقُ · حُرُوفُ الجَرِّ · العَدَدُ', think: '90 seconds.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'PAST / FUTURE', e: 'PRESENT', w: 'OPINION' },
    model: 'أَنْتَمِي إِلَى ثَقَافَتَيْنِ، وَأَعْتَزُّ بِهِمَا مَعًا. {k|فِي الطُّفُولَةِ احْتَفَلْنَا بِالعِيدِ} فِي بَلَدِ أُسْرَتِي. {e|أَمَّا الآنَ فَنَحْتَفِلُ} هُنَا، {e|وَتُزَيَّنُ البُيُوتُ}. {w|لَا يُمْكِنُ إِنْكَارُ أَنَّ اللُّغَةَ} جُزْءٌ مِنَ الهُوِيَّةِ، {k|وَأَطْمَحُ إِلَى} أَنْ أُتْقِنَ الفُصْحَى.',
    modelEn: 'I belong to two cultures, and I take pride in both. In childhood we celebrated Eid in my family’s country. Now we celebrate here, and the houses are decorated. It cannot be denied that language is part of identity, and I aspire to master classical Arabic.',
    notes: 'I DO (3 min) — the plan → draft → self-mark cycle. The copy box is the skeleton of the website model (one sentence per section). The full 130-word website model is on the Write / model slides. Then model the 90-second self-mark aloud: circle every verb, box every preposition, underline the passive subject, count the words.',
  },
  patternEn: ['it cannot be denied that language is part of identity', 'I take pride in my cultural heritage', 'houses are decorated on special occasions'],
  sorterNotes: 'Then take one sentence from each column and join them into a mini four-section text.',
  patch: {
    speaking: {
      model: [
        ['A', 'مَا مَوْضُوعُ فِقْرَتِكَ الأُولَى؟', 'What is your first paragraph about?'],
        ['B', 'سَأَكْتُبُ عَنِ المَاضِي: فِي الطُّفُولَةِ احْتَفَلْنَا بِالعِيدِ فِي بَلَدِ أُسْرَتِي.', 'I will write about the past: in childhood we celebrated Eid in my family’s country.'],
        ['A', 'وَكَيْفَ تَخْتِمُ؟', 'And how will you finish?'],
        ['B', 'أَخْتِمُ بِرَأْيٍ: لَا يُمْكِنُ إِنْكَارُ أَنَّ اللُّغَةَ جُزْءٌ مِنَ الهُوِيَّةِ، ثُمَّ أَذْكُرُ طُمُوحِي: أَطْمَحُ إِلَى أَنْ أُتْقِنَ الفُصْحَى.', 'I finish with an opinion — it cannot be denied that language is part of identity — then I state my aspiration: I aspire to master classical Arabic.'],
      ],
    },
  },
  patchNote: 'English added to the patterns and speaking model (its last line smoothed); the key case-ending quiz distractors are kept on purpose; the website visual game repeats D6-L02 and is skipped.',
  hints: ['After anna: which ending?', 'iḥtafala + which preposition?', 'Childhood → which tense?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nPlan → past → present → opinion → future → check.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — then copy the student’s plan as your own plan.',
  gloss: [
    ['قَبْلَ أَنْ أَكْتُبَ، خَطَّطْتُ لِكُلِّ فِقْرَةٍ.', 'Before I wrote, I planned each paragraph.'],
    ['فِي الفِقْرَةِ الأُولَى كَتَبْتُ عَنِ المَاضِي: فِي الطُّفُولَةِ احْتَفَلْنَا بِالعِيدِ فِي بَلَدِ أُسْرَتِي، وَكَانَتْ جَدَّتِي تَحْكِي لَنَا القِصَصَ.', 'In the first paragraph I wrote about the past: in childhood we celebrated Eid in my family’s country, and my grandmother used to tell us stories.'],
    ['وَفِي الفِقْرَةِ الثَّانِيَةِ كَتَبْتُ عَنِ الحَاضِرِ: أَمَّا الآنَ فَنَحْتَفِلُ هُنَا مَعَ الجَالِيَةِ، وَتُزَيَّنُ البُيُوتُ وَتُتَبَادَلُ التَّهَانِي.', 'In the second paragraph I wrote about the present: now we celebrate here with the community; the houses are decorated and greetings are exchanged.'],
    ['ثُمَّ أَضَفْتُ رَأْيِي: لَا يُمْكِنُ إِنْكَارُ أَنَّ اللُّغَةَ جُزْءٌ مِنَ الهُوِيَّةِ. وَفِي الخِتَامِ كَتَبْتُ عَنِ المُسْتَقْبَلِ: أَطْمَحُ إِلَى زِيَارَةِ بَلَدِ أُسْرَتِي، وَسَأُوَاصِلُ تَعَلُّمَ العَرَبِيَّةِ.', 'Then I added my opinion: it cannot be denied that language is part of identity. To finish I wrote about the future: I aspire to visit my family’s country, and I will keep learning Arabic.'],
    ['وَأَخِيرًا عَدَدْتُ الكَلِمَاتِ وَرَاجَعْتُ كُلَّ لَاحِقَةٍ وَكُلَّ حَرْفِ جَرٍّ.', 'Finally I counted the words and checked every suffix and every preposition.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا مَوْضُوعُ فِقْرَتِكَ الأُولَى؟ وَأَيُّ زَمَنٍ سَتَسْتَعْمِلُ؟' },
      { route: 'develop', ar: 'أَيَّ فِعْلٍ ثَقَافِيٍّ سَتَسْتَعْمِلُ؟ وَمَا حَرْفُ الجَرِّ الصَّحِيحُ؟' },
      { route: 'stretch', ar: 'كَيْفَ سَتَخْتِمُ بِرَأْيٍ وَطُمُوحٍ؟' },
    ],
    stems: [
      { route: 'core', ar: 'سَأَكْتُبُ عَنِ المَاضِي: فِي الطُّفُولَةِ ______ .' },
      { route: 'develop', ar: 'سَأَسْتَعْمِلُ ______ ، وَحَرْفُ الجَرِّ ______ .' },
      { route: 'stretch', ar: 'أَخْتِمُ بِرَأْيٍ: لَا يُمْكِنُ إِنْكَارُ أَنَّ ______ ، وَأَطْمَحُ إِلَى ______ .' },
    ],
    modelEn: ['What is your first paragraph about?', 'I will write about the past: in childhood we celebrated Eid in my family’s country.'],
    notes: 'Website prompts and model: talk the plan through BEFORE writing. Pairs: 60 seconds each; the partner ticks past / present / opinion / future heard. To a girl: فِقْرَتِكِ · سَتَسْتَعْمِلِينَ · سَتَخْتِمِينَ.',
  },
  write: {
    core: { amount: '70–90 words', how: 'One paragraph per section with the frames; one cultural verb + preposition.' },
    develop: { amount: '110–130 words', how: 'Add a passive, a formal connector and a supported opinion.' },
    stretch: { amount: '130–140 words', how: 'Website task: 5+ past verbs · cultural verb · passive · connector · opinion · aspiration.' },
  },
  frames: {
    core: [
      { en: 'I belong to … and I take pride in …', ar: 'أَنْتَمِي إِلَى ______ ، وَأَعْتَزُّ بِـ ______ .' },
      { en: 'In childhood we celebrated …', ar: 'فِي الطُّفُولَةِ احْتَفَلْنَا بِـ ______ .' },
      { en: 'As for now, we celebrate …', ar: 'أَمَّا الآنَ فَنَحْتَفِلُ ______ .' },
      { en: 'In the future I will visit …', ar: 'وَفِي المُسْتَقْبَلِ سَأَزُورُ ______ .' },
    ],
    develop: [
      { en: '… are decorated / are exchanged …', ar: 'تُزَيَّنُ ______ ، وَتُتَبَادَلُ ______ .' },
      { en: 'Despite the distance, we keep …', ar: 'عَلَى الرَّغْمِ مِنْ بُعْدِ المَسَافَةِ نَحْتَفِظُ بِـ ______ .' },
      { en: 'It cannot be denied that …', ar: 'لَا يُمْكِنُ إِنْكَارُ أَنَّ ______ .' },
      { en: 'I aspire to …', ar: 'أَطْمَحُ إِلَى أَنْ ______ .' },
    ],
    bank: ['أَنْتَمِي إِلَى', 'أَعْتَزُّ بِـ', 'احْتَفَلْنَا بِـ', 'كَانَتْ جَدَّتِي تَحْكِي', 'أَمَّا الآنَ فَـ', 'تُزَيَّنُ البُيُوتُ', 'عَلَى الرَّغْمِ مِنْ', 'أَصْغَرُ مِنَ السَّابِقِ', 'مِنْ وِجْهَةِ نَظَرِي', 'لَا يُمْكِنُ إِنْكَارُ أَنَّ', 'سَأَزُورُ', 'أَطْمَحُ إِلَى'],
  },
  stretch: [
    ['وَكَانَتْ جَدَّتِي تَحْكِي لَنَا قِصَصَ الحَيِّ القَدِيمِ', 'and my grandmother used to tell us stories of the old neighbourhood'],
    ['وَالاحْتِفَالُ هُنَا أَصْغَرُ مِنَ السَّابِقِ وَلٰكِنَّهُ أَكْثَرُ تَنَوُّعًا', 'the celebration here is smaller than before but more varied'],
    ['فَهِيَ تَرْبِطُنِي بِجُذُورِي', 'for it ties me to my roots'],
    ['لِكَيْ أَقْرَأَ أَدَبَهَا بِنَفْسِي', 'so that I can read its literature myself'],
    ['مِنْ وِجْهَةِ نَظَرِي', 'from my point of view'],
  ],
  modelEn: 'I belong to two cultures, and I take pride in both. In childhood we celebrated Eid in my family’s country, and my grandmother used to tell us stories of the old neighbourhood. We visited relatives, exchanged gifts and ate delicious sweets. Now we celebrate here with the community; the houses are decorated and greetings are exchanged at the cultural centre. Despite the distance we keep our customs, and the celebration here is smaller than before but more varied. From my point of view, it cannot be denied that language is part of identity, for it ties me to my roots. In the future I will visit my family’s country again, and I aspire to master classical Arabic so that I can read its literature myself.',
  find: ['five past verbs', 'a cultural verb + preposition', 'a passive and a connector', 'an opinion and an aspiration'],
  modelNotes: 'Website writing model (≈ 135 words). Evidence: احْتَفَلْنَا بِالعِيدِ · كَانَتْ جَدَّتِي تَحْكِي · زُرْنَا · تَبَادَلْنَا · أَكَلْنَا · تُزَيَّنُ البُيُوتُ · تُتَبَادَلُ التَّهَانِي · عَلَى الرَّغْمِ مِنْ بُعْدِ المَسَافَةِ · أَصْغَرُ مِنَ السَّابِقِ · لَا يُمْكِنُ إِنْكَارُ أَنَّ اللُّغَةَ … · سَأَزُورُ · أَطْمَحُ إِلَى أَنْ أُتْقِنَ · لِكَيْ أَقْرَأَ.',
  selfCheck: [
    { route: 'core', text: 'Each section has a time phrase and matching verbs.' },
    { route: 'core', text: 'My cultural verb has its correct preposition.' },
    { route: 'develop', text: 'My passive subject ends in -u.' },
    { route: 'develop', text: 'After أَنَّ my noun ends in -a.' },
    { route: 'stretch', text: 'I counted my words (130–140) and checked every suffix.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['ثَقَافَتَيْنِ', 'two cultures'], ['بَلَدِ أُسْرَتِي', 'my family’s country'], ['تَحْكِي', 'tells'], ['الحَيِّ القَدِيمِ', 'the old neighbourhood'], ['الأَقَارِبَ', 'relatives'],
    ['حَلْوَى', 'sweets'], ['التَّهَانِي', 'greetings'], ['تَرْبِطُنِي', 'ties me'], ['بِجُذُورِي', 'to my roots'], ['أُتْقِنَ الفُصْحَى', 'master classical Arabic'],
  ],
  prep: {
    words: [['المُعْتَقَدَاتُ', 'beliefs', 'sing. مُعْتَقَدٌ'], ['القِيَمُ', 'values', 'sing. قِيمَةٌ'], ['التَّقَالِيدُ', 'traditions', 'sing. تَقْلِيدٌ'], ['لَيْسَ دَائِمًا', 'not always', '—'], ['فِي بَعْضِ العَائِلَاتِ', 'in some families', '—']],
    questionEn: 'Finish your final draft. Then: in a listening, how do you know if a speaker means the past, the present or the future?',
    questionAr: 'أَعْرِفُ الزَّمَنَ مِنْ ______ .',
    homework: {
      core: 'Final 70–90-word version from the frames; learn the five listening words.',
      develop: 'Final 110–130-word version with a passive, a connector and an opinion.',
      stretch: 'Website writing task: final 130–140 words, self-marked against the three criteria.',
    },
    wordsSource: 'The five words come from the website D6-L10 vocabulary (listening for culture and qualifiers).',
  },
  remember: 'Remember: plan four sections · one cultural verb, right preposition · أَنَّ + -a · passive subject -u · count and check before you hand in.',
});

module.exports = { meta, slides };
