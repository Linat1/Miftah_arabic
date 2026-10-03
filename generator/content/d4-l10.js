'use strict';
/* D4-L10 · Listening — Environment and Technology News — website: Pathways › Development › D4 › D4-L10 (reporting verbs أَعْلَنَ / أَكَّدَ أَنَّ, حَذَّرَ مِنْ,
 * corrected details بَدَلًا مِنْ / كَانَ مِنَ المُقَرَّرِ …، وَلٰكِنَّ …, numbers with direction ارْتَفَعَ مِنْ … إِلَى / انْخَفَضَ بِنِسْبَةِ, speaker comparison كِلَاهُمَا).
 * Listening-skills lesson: the website two-voice bulletin (presenter + correspondent) is split into two listening cycles. One quiz distractor
 * replaced (it differed only in vowels); English added to the model sentences and speaking model. The website lesson has no picture game. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D4')({
  n: 10, fileTitle: 'Listening_Environment_and_Technology_News', chip: 'Listening Skills',
  title: 'Listening — Environment and Technology News', arabic: 'الاسْتِمَاعُ — أَخْبَارُ البِيئَةِ وَالتِّقْنِيَّةِ',
  focus: 'Listen to a news bulletin like an examiner: who said it (أَعْلَنَ · أَكَّدَ · حَذَّرَ مِنْ), the FINAL detail after a change (بَدَلًا مِنْ), and exact figures (مِنْ … إِلَى · بِنِسْبَةِ).',
  icon: 'FaHeadphones', iconSet: 'fa6',
});

const site = D.site('D4-L10');
const quiz = site.grammar.quiz.map((it, i) => (i === 0 ? { ...it, options: ['أَعْلَنَ الوَزِيرُ أَنَّ المَشْرُوعَ سَيَبْدَأُ قَرِيبًا.', 'أَعْلَنَ الوَزِيرُ إِلَى المَشْرُوعِ سَيَبْدَأُ.', 'أَعْلَنَ الوَزِيرُ عَلَى المَشْرُوعِ سَيَبْدَأُ.'] } : it));
const T1 = 'مُقَدِّمُ النَّشْرَةِ: أَعْلَنَتِ البَلَدِيَّةُ اليَوْمَ أَنَّ مَشْرُوعَ الحَافِلَاتِ الكَهْرَبَائِيَّةِ سَيَبْدَأُ فِي سِبْتَمْبَرَ، بَدَلًا مِنْ يُونْيُو كَمَا كَانَ مُقَرَّرًا. وَأَكَّدَتْ أَنَّ عَدَدَ الحَافِلَاتِ سَيَبْلُغُ خَمْسِينَ حَافِلَةً.';
const T2 = 'المُرَاسِلَةُ: وَفْقًا لِلتَّقْرِيرِ، انْخَفَضَ اسْتِهْلَاكُ الوَقُودِ فِي المَدِينَةِ بِنِسْبَةِ ٨٪، بَيْنَمَا ارْتَفَعَ اسْتِخْدَامُ النَّقْلِ العَامِّ مِنْ ٢٥٪ إِلَى ٣٢٪. لٰكِنَّ خَبِيرًا حَذَّرَ مِنْ أَنَّ شَبَكَةَ الشَّحْنِ مَا زَالَتْ غَيْرَ كَافِيَةٍ.';
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D4-L10', {
  support: `• This is a LISTENING-SKILLS lesson: the website bulletin has two voices (the presenter, then a correspondent). Do them as two cycles: predict → listen twice → read the script → answers.
• Core: label each question (month? number? per cent? problem?) and answer the first-detail questions. Develop: all questions + the FINAL detail after a change (بَدَلًا مِنْ). Stretch: the website writing task — a 120–140-word summary with an evaluation.
• Read each text yourself at natural news speed. Do NOT show the script until after the second listening.
• Same strategy family as D3-L10 (change of plan, “not … but …”); NEW today: news reporting verbs and change figures (from … to … / by …%).`,
  teach: 'Reporting verbs, corrected details, figures and speakers.',
  wedo: 'Sort the news words, fix reporting slips, then two listening cycles.',
  next: { nextCode: 'D4-L11', nextTitle: 'D4 Consolidation — Range Mastery and Speaking Preparation', nextAr: 'تَرْسِيخُ الوَحْدَةِ — إِتْقَانُ النِّطَاقِ وَإِعْدَادُ التَّحَدُّثِ' },
  objectives: ['Recognise news reporting verbs (أَعْلَنَ أَنَّ · أَكَّدَ أَنَّ · حَذَّرَ مِنْ).', 'Catch the final detail after a change (بَدَلًا مِنْ).', 'Record figures exactly: start, end and size of change.', 'Match each idea to the speaker who says it.'],
  rulesTitle: 'Reporting, correction and numerical change in listening',
  rulesAr: 'النَّقْلُ وَالتَّصْحِيحُ وَتَغَيُّرُ الأَرْقَامِ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does نَشْرَةٌ إِخْبَارِيَّةٌ mean?', ['a news bulletin', 'a headline', 'an interview'], 'Prepared at home (D4-L09).'),
      q('What does حَذَّرَ مِنْ mean?', ['warned against', 'announced that', 'added that'], 'Prepared at home (D4-L09).'),
      q('What does كِلَاهُمَا mean?', ['both of them', 'neither of them', 'the first one'], 'Prepared at home (D4-L09).'),
      q('Which connector signals a counterpoint?', ['مَعَ ذٰلِكَ', 'عَلَاوَةً عَلَى ذٰلِكَ', 'فِي البِدَايَةِ'], 'D4-L09.'),
      q('انْخَفَضَ الاسْتِهْلَاكُ بِنِسْبَةِ ١٨٪ means …', ['consumption fell by 18%', 'consumption rose to 18%', 'consumption is 18%'], 'D4-L08: statistics.'),
    ],
    keyIdea: { text: 'In the news, the LAST detail usually wins: listen past the first answer you hear.', ar: 'سَيَبْدَأُ فِي {e|سِبْتَمْبَرَ}، {w|بَدَلًا مِنْ} يُونْيُو' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D4-L09. Question 4 retrieves D4-L09 (connectors); question 5 retrieves D4-L08 (statistics).',
  },
  routes: {
    core: ['I can catch a month, a number and a per cent.', 'I can recognise أَعْلَنَ and حَذَّرَ مِنْ.'],
    develop: ['I can catch the FINAL detail after a change.', 'I can record start and end values.'],
    stretch: ['I can match ideas to speakers.', 'I can summarise and evaluate a news report.'],
  },
  bridge: [
    { ar: 'خَبَرٌ / أَخْبَارٌ', urdu: 'خبر / اخبار', tr: 'khabar / akhbār', en: 'news (Urdu اخبار = newspaper)' },
    { ar: 'إِعْلَانٌ', urdu: 'اعلان', tr: 'eʿlān', en: 'announcement' },
    { ar: 'تَصْرِيحٌ', urdu: 'تصریح', tr: 'taṣrīḥ', en: 'statement, clarification' },
    { ar: 'تَفْصِيلٌ', urdu: 'تفصیل', tr: 'tafṣīl', en: 'detail' },
    { ar: 'مُقَابَلَةٌ', urdu: 'مقابلہ', tr: 'muqābla', en: 'Urdu: competition · Arabic: interview' },
  ],
  bridgeNotes: 'URDU BRIDGE: خبر، اعلان، تفصیل are shared. CAREFUL: Urdu اخبار = a newspaper, Arabic أَخْبَارٌ = news (plural of خَبَرٌ). Urdu مقابلہ = a competition / contest; Arabic مُقَابَلَةٌ = an interview or a meeting.',
  core: ['نَشْرَةٌ إِخْبَارِيَّةٌ', 'مُرَاسِلٌ / مُرَاسِلَةٌ', 'خَبِيرٌ / خَبِيرَةٌ', 'تَصْرِيحٌ', 'أَعْلَنَ أَنَّ', 'أَكَّدَ أَنَّ', 'حَذَّرَ مِنْ', 'أَضَافَ أَنَّ', 'ارْتَفَعَ مِنْ ... إِلَى', 'انْخَفَضَ بِنِسْبَةِ', 'بَدَلًا مِنْ', 'كِلَاهُمَا'],
  vocabNotes: {
    0: 'News and listening signals: who is speaking (مُرَاسِلٌ · خَبِيرٌ · مُتَحَدِّثٌ) and what kind of text it is (نَشْرَةٌ · مُقَابَلَةٌ · تَصْرِيحٌ).',
    1: 'Reporting and change: these verbs tell you WHO says WHAT. The change phrases tell you the start, the end and the size of a change.',
    2: 'Listening strategy: gist first (المَعْنَى العَامُّ), then specific information (المَعْلُومَةُ المُحَدَّدَةُ) on the second listening.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · reporting verbs (website rule 1)', title: 'Who said what?', ar: 'مَنْ قَالَ مَاذَا؟',
      cols: [{ label: 'Reporting verb', w: 2.6, size: 22 }, { label: 'Example (website)', w: 7.0, size: 20 }, { label: 'Meaning', w: 2.73 }],
      rows: [
        { core: true, cells: ['أَعْلَنَ أَنَّ', P('أَعْلَنَ الوَزِيرُ أَنَّ المَشْرُوعَ سَيَبْدَأُ فِي سِبْتَمْبَرَ.', 'The minister announced that the project will start in September.'), 'announced that'] },
        { core: true, cells: ['أَكَّدَ أَنَّ', P('أَكَّدَتِ البَلَدِيَّةُ أَنَّ العَدَدَ سَيَبْلُغُ خَمْسِينَ.', 'The council confirmed that the number will reach fifty.'), 'confirmed that'] },
        { core: true, cells: ['حَذَّرَ مِنْ', P('حَذَّرَ الخَبِيرُ مِنْ زِيَادَةِ شُحِّ المِيَاهِ.', 'The expert warned of increasing water scarcity.'), 'warned of'] },
        { cells: ['أَشَارَ إِلَى أَنَّ', P('أَشَارَتِ المُرَاسِلَةُ إِلَى أَنَّ الإِنْتَاجَ ارْتَفَعَ.', 'The correspondent pointed out that production rose.'), 'pointed out that'] },
        { cells: ['أَضَافَ أَنَّ', P('أَضَافَ خَبِيرٌ أَنَّ هٰذَا التَّقَدُّمَ مُهِمٌّ.', 'An expert added that this progress is important.'), 'added that'] },
      ],
      ltr: true,
      foot: 'After أَنَّ the noun ends in -a (المَشْرُوعَ). حَذَّرَ always takes مِنْ.',
      notes: `GRAMMAR PART 1 — website rule “Reporting a speaker’s statement” (the noun after أَنَّ is accusative; listen for the reporting verb and the information that follows). Examples from the website rules, listening and reading transcript. A female subject: أَعْلَنَتْ · أَكَّدَتْ · أَشَارَتْ.
Website mistakes: أَعْلَنَ الوَزِيرُ أَنْ المَشْرُوعُ ✗ · حَذَّرَ الخَبِيرُ عَلَى ✗.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · corrections, figures, speakers (website rules 2–4) · Develop / Stretch', title: 'The final detail, the exact figure, the right speaker', ar: 'التَّصْحِيحُ · الأَرْقَامُ · المُتَحَدِّثُ',
      cards: [
        { chip: 'CORRECTED DETAIL · DEVELOP', color: '1D5FBF', head: 'بَدَلًا مِنْ · وَلٰكِنَّ', big: 'سَيَبْدَأُ فِي سِبْتَمْبَرَ، بَدَلًا مِنْ يُونْيُو.', en: 'It will start in September, instead of June.', clue: 'Final = September.' },
        { chip: 'FIGURES · DEVELOP', color: 'C0386B', head: 'مِنْ … إِلَى · بِنِسْبَةِ', big: 'ارْتَفَعَ الإِنْتَاجُ مِنْ ٢٠٪ إِلَى ٣٥٪.', en: 'Production rose from 20% to 35%.', clue: 'Start · end · change.' },
        { chip: 'SPEAKERS · STRETCH', color: '6B4C9A', head: 'بَيْنَمَا · كِلَاهُمَا', big: 'تُؤَيِّدُ سَلْمَى الطَّاقَةَ الشَّمْسِيَّةَ، بَيْنَمَا يَرَى عُمَرُ أَنَّ التَّكْلِفَةَ مُرْتَفِعَةٌ.', en: 'Salma supports solar energy, whereas Omar thinks the cost is high.', clue: 'Who says it?' },
      ],
      error: { text: 'Website mistake: use min … ilā for start and end values.', pairs: [['مِنْ ٢٠٪ إِلَى ٣٥٪', 'بِنِسْبَةِ ٢٠٪ إِلَى ٣٥٪']] },
      notes: `GRAMMAR PART 2 — website rules “Track changed details” (a later detail may replace an earlier plan; the final stated information is usually the answer), “Numbers with direction of change” (distinguish the starting value, final value and size of change: 20% → 35% is a rise OF 15 points) and “Speaker comparison” (match each idea to the person who explicitly states it; do not infer agreement from topic alone). Full website example 4 ends: وَكِلَاهُمَا يُؤَيِّدُ تَرْشِيدَ الاسْتِهْلَاكِ — both support reducing consumption.`,
    },
  ],
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me take notes from a news bulletin',
    steps: [
      { head: 'Predict', ar: 'مَتَى؟ · كَمْ؟ · مَنْ؟', think: 'Month, number, speaker.' },
      { head: 'Reporting verb', ar: '{k|أَعْلَنَتِ} البَلَدِيَّةُ أَنَّ …', think: 'Who says it? The council.' },
      { head: 'Trap', ar: 'سِبْتَمْبَرَ، {w|بَدَلًا مِنْ} يُونْيُو', think: 'June is the distractor.' },
      { head: 'Figure', ar: '{e|مِنْ ٢٥٪ إِلَى ٣٢٪}', think: 'Start 25 · end 32.' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: 'REPORTING VERB', w: 'CORRECTION', e: 'FIGURE' },
    model: 'مُلَاحَظَاتِي: {k|أَعْلَنَتِ} البَلَدِيَّةُ: الحَافِلَاتُ الكَهْرَبَائِيَّةُ فِي سِبْتَمْبَرَ ({w|بَدَلًا مِنْ} يُونْيُو) · خَمْسُونَ حَافِلَةً · الوَقُودُ: {e|بِنِسْبَةِ ٨٪} أَقَلَّ · النَّقْلُ العَامُّ: {e|مِنْ ٢٥٪ إِلَى ٣٢٪} · {k|حَذَّرَ} خَبِيرٌ: شَبَكَةُ الشَّحْنِ غَيْرُ كَافِيَةٍ.',
    modelEn: 'My notes: the council announced: electric buses in September (instead of June) · fifty buses · fuel: 8% less · public transport: from 25% to 32% · an expert warned: the charging network is insufficient.',
    notes: 'I DO (3 min) — model the note-taking routine BEFORE the listening: predict the type of answer, listen for the reporting verb, catch the trap word (بَدَلًا مِنْ), write figures as start → end. Then the copy box shows what a full set of notes looks like (students copy the layout, not the content, before they listen themselves).',
  },
  patternEn: ['The minister announced that the project will start in September.', 'The project was scheduled to start in June, but it will start in September.', 'Production rose from 20% to 35%.'],
  sorterNotes: 'Then say which column helps you most in a listening exam, and why.',
  patch: {
    grammar: { ...site.grammar, quiz },
    writing: { model: site.writing.model.replace('لِلبَيَانَاتِ', 'لِلْبَيَانَاتِ') },
    speaking: {
      model: [
        ['A', 'مَا أَهَمُّ اسْتِرَاتِيجِيَّةٍ لِفَهْمِ نَشْرَةٍ إِخْبَارِيَّةٍ؟', 'What is the most important strategy for understanding a news bulletin?'],
        ['B', 'أُحَدِّدُ المَعْنَى العَامَّ فِي المَرَّةِ الأُولَى، ثُمَّ أُسَجِّلُ الأَرْقَامَ وَالتَّغْيِيرَاتِ وَالكَلِمَاتِ الَّتِي تُصَحِّحُ مَعْلُومَةً سَابِقَةً فِي المَرَّةِ الثَّانِيَةِ.', 'I identify the gist the first time, then the second time I record the figures, the changes and the words that correct an earlier piece of information.'],
      ],
    },
  },
  patchNote: 'one quiz distractor replaced (it differed only in vowels), one missing sukūn added in the writing model, and English added to the model sentences and speaking model.',
  hints: ['anna or an after a reporting verb?', 'Which preposition after ḥadhdhara?', 'Start and end value: which words?'],
  listenParts: [
    {
      title: 'Voice 1: the presenter', script: T1, q: [0, 1, 2], min: 3,
      extra: [L('Who made the announcement?', ['the council', 'a bus company', 'an expert'], 'أَعْلَنَتِ البَلَدِيَّةُ')],
      tip: 'Label first: month? month? number?\nTwo months are heard: which is FINAL?',
      routes: 'Core: questions 1 and 3. Develop/Stretch: all four — question 2 is the distractor month.',
      gloss: [
        ['أَعْلَنَتِ البَلَدِيَّةُ اليَوْمَ أَنَّ مَشْرُوعَ الحَافِلَاتِ الكَهْرَبَائِيَّةِ سَيَبْدَأُ فِي سِبْتَمْبَرَ،', 'The council announced today that the electric-bus project will start in September,'],
        ['بَدَلًا مِنْ يُونْيُو كَمَا كَانَ مُقَرَّرًا.', 'instead of June as was planned.'],
        ['وَأَكَّدَتْ أَنَّ عَدَدَ الحَافِلَاتِ سَيَبْلُغُ خَمْسِينَ حَافِلَةً.', 'It confirmed that the number of buses will reach fifty.'],
      ],
    },
    {
      title: 'Voice 2: the correspondent', script: T2, q: [3, 4, 5], min: 3,
      extra: [L('What is the source of the figures?', ['the report', 'the minister', 'a blog'], 'وَفْقًا لِلتَّقْرِيرِ')],
      tip: 'Three figures: 8% · 25% · 32%.\nWhich one is the size of a fall?',
      routes: 'Core: questions 1 and 3. Develop/Stretch: all four — say what each figure measures.',
      gloss: [
        ['وَفْقًا لِلتَّقْرِيرِ، انْخَفَضَ اسْتِهْلَاكُ الوَقُودِ فِي المَدِينَةِ بِنِسْبَةِ ٨٪،', 'According to the report, fuel consumption in the city fell by 8%,'],
        ['بَيْنَمَا ارْتَفَعَ اسْتِخْدَامُ النَّقْلِ العَامِّ مِنْ ٢٥٪ إِلَى ٣٢٪.', 'while public-transport use rose from 25% to 32%.'],
        ['لٰكِنَّ خَبِيرًا حَذَّرَ مِنْ أَنَّ شَبَكَةَ الشَّحْنِ مَا زَالَتْ غَيْرَ كَافِيَةٍ.', 'But an expert warned that the charging network is still insufficient.'],
      ],
    },
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'كَيْفَ تَسْتَمِعُ لِلْمَعْنَى العَامِّ؟' },
      { route: 'develop', ar: 'كَيْفَ تُسَجِّلُ الأَرْقَامَ وَالتَّغْيِيرَاتِ؟' },
      { route: 'stretch', ar: 'مَاذَا تَفْعَلُ عِنْدَمَا يُصَحِّحُ المُتَحَدِّثُ مَعْلُومَةً؟' },
    ],
    stems: [
      { route: 'core', ar: 'فِي المَرَّةِ الأُولَى، أَسْتَمِعُ لِـ ______ .' },
      { route: 'develop', ar: 'أَكْتُبُ الرَّقْمَ الأَوَّلَ وَ ______ ، ثُمَّ ______ .' },
      { route: 'stretch', ar: 'عِنْدَمَا أَسْمَعُ « بَدَلًا مِنْ » ، ______ .' },
    ],
    modelEn: ['What is the most important strategy for understanding a news bulletin?', 'I identify the gist the first time, then the second time I record the figures, the changes and the words that correct an earlier piece of information.'],
    notes: 'Website prompts and model. Students explain HOW they listened today, using the two cycles as evidence. Core may answer with one Arabic key word + English.',
  },
  write: {
    core: { amount: '5 sentences', how: 'The bulletin in notes turned into sentences: when, how many, two figures, the problem.' },
    develop: { amount: '100–120 words', how: 'A summary with two reporting verbs and the corrected month.' },
    stretch: { amount: '120–140 words', how: 'Website task: summarise the report and evaluate its main development.' },
  },
  frames: {
    core: [
      { en: 'The council announced that the project will start in …', ar: 'أَعْلَنَتِ البَلَدِيَّةُ أَنَّ المَشْرُوعَ سَيَبْدَأُ فِي ______ .' },
      { en: 'The number of buses will reach …', ar: 'سَيَبْلُغُ عَدَدُ الحَافِلَاتِ ______ .' },
      { en: 'Fuel consumption fell by …', ar: 'انْخَفَضَ اسْتِهْلَاكُ الوَقُودِ بِنِسْبَةِ ______ .' },
      { en: 'An expert warned that …', ar: 'حَذَّرَ خَبِيرٌ مِنْ أَنَّ ______ .' },
    ],
    develop: [
      { en: '… instead of …', ar: '______ ، بَدَلًا مِنْ ______ .' },
      { en: 'Public transport use rose from … to …', ar: 'ارْتَفَعَ اسْتِخْدَامُ النَّقْلِ العَامِّ مِنْ ______ إِلَى ______ .' },
      { en: 'This is positive progress, but …', ar: 'هٰذَا تَقَدُّمٌ إِيجَابِيٌّ، لٰكِنَّ ______ .' },
      { en: 'We conclude that …', ar: 'نَسْتَنْتِجُ أَنَّ ______ .' },
    ],
    bank: ['أَعْلَنَ أَنَّ', 'أَكَّدَ أَنَّ', 'حَذَّرَ مِنْ', 'أَشَارَ إِلَى أَنَّ', 'أَضَافَ أَنَّ', 'بَدَلًا مِنْ', 'ارْتَفَعَ مِنْ … إِلَى', 'انْخَفَضَ بِنِسْبَةِ', 'وَفْقًا لِـ', 'بَيْنَمَا', 'كِلَاهُمَا', 'نَسْتَنْتِجُ أَنَّ'],
  },
  stretch: [
    ['يُعْلِنُ التَّقْرِيرُ أَنَّ …', 'the report announces that …'],
    ['هٰذَا تَقَدُّمٌ إِيجَابِيٌّ', 'this is positive progress'],
    ['المَشْرُوعُ وَاعِدٌ', 'the project is promising'],
    ['يَحْتَاجُ إِلَى بِنْيَةٍ تَحْتِيَّةٍ أَقْوَى', 'needs stronger infrastructure'],
    ['مُقَارَنَةً بِالعَامِ المَاضِي', 'compared with last year'],
  ],
  modelEn: 'The report announces that the electric-bus project will start in September instead of June, and the number of buses will reach fifty. According to the data, fuel consumption fell by 8% and public-transport use rose from 25% to 32%. This is positive progress, but the expert warned that the charging network is insufficient. We conclude that the project is promising, but it needs stronger infrastructure.',
  find: ['the corrected month', 'two figures with change language', 'two reporting verbs', 'a supported evaluation'],
  modelNotes: 'Website writing model. Evidence: يُعْلِنُ التَّقْرِيرُ أَنَّ … · سِبْتَمْبَرَ بَدَلًا مِنْ يُونْيُو · انْخَفَضَ … بِنِسْبَةِ ٨٪ · ارْتَفَعَ … مِنْ ٢٥٪ إِلَى ٣٢٪ · حَذَّرَ مِنْ أَنَّ · نَسْتَنْتِجُ أَنَّ …',
  selfCheck: [
    { route: 'core', text: 'I wrote the FINAL month, not the first one.' },
    { route: 'core', text: 'My figures are exact.' },
    { route: 'develop', text: 'I used أَنَّ after my reporting verbs.' },
    { route: 'develop', text: 'I wrote حَذَّرَ مِنْ (not عَلَى).' },
    { route: 'stretch', text: 'I ended with a supported evaluation.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['نَشْرَةٍ بِيئِيَّةٍ', 'an environment bulletin'], ['إِنْتَاجَ الطَّاقَةِ الشَّمْسِيَّةِ', 'solar-energy production'], ['خِلَالَ ثَلَاثِ سَنَوَاتٍ', 'over three years'], ['التَّقَدُّمَ', 'progress'], ['لَا يَكْفِي', 'is not enough'],
    ['لِتَحْقِيقِ الأَهْدَافِ', 'to achieve the targets'], ['أَسْرَعَ مِنْ', 'faster than'], ['تَوَسُّعِ الشَّبَكَةِ', 'the grid’s expansion'], ['مُمَثِّلَةُ البَلَدِيَّةِ', 'the council’s representative'], ['سَيُفْتَتَحُ', 'will be opened'],
  ],
  prep: {
    words: [['نُقْطَةُ قُوَّةٍ', 'a strength', 'pl. نِقَاطُ قُوَّةٍ'], ['مَجَالُ تَحْسِينٍ', 'an area for improvement', 'pl. مَجَالَاتُ تَحْسِينٍ'], ['أَقْصِدُ أَنَّ', 'what I mean is', 'يَقْصِدُ'], ['بِعِبَارَةٍ أُخْرَى', 'in other words', '—'], ['لِأُصَحِّحْ ذٰلِكَ', 'let me correct that', '—']],
    questionEn: 'Look back at D4: what is one strength and one area for improvement in your Arabic?',
    questionAr: 'نُقْطَةُ قُوَّتِي: … · مَجَالُ تَحْسِينٍ: …',
    homework: {
      core: 'Learn the 12 news words; redo the listening questions from the script.',
      develop: 'A 100–120-word summary of the bulletin with two reporting verbs.',
      stretch: 'Website writing task: 120–140-word summary and evaluation.',
    },
    wordsSource: 'The five words come from the website D4-L11 vocabulary (self-evaluation and self-correction in speaking).',
  },
  remember: 'Remember: predict → gist → details. Who said it? What is the FINAL detail? Start, end and size of every change.',
});

module.exports = { meta, slides };
