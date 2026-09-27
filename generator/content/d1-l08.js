'use strict';
/* D1-L08 · Weekend Routine — website: Pathways › Development › D1 › D1-L08 (أَمَّا … فَـ, بَيْنَمَا, real condition إِذَا, flexible frequency, balance). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D1')({
  n: 8, fileTitle: 'Weekend_Routine', chip: 'Weekend Routine',
  title: 'Weekend Routine — What Do You Do at the Weekend?', arabic: 'رُوتِينُ عُطْلَةِ نِهَايَةِ الأُسْبُوعِ — مَاذَا تَفْعَلُ؟',
  focus: 'Contrast the fixed school week with a flexible weekend: أَمَّا … فَـ and بَيْنَمَا, “if I have time” with إِذَا, flexible frequency (غَالِبًا مَا، فِي بَعْضِ الأَحْيَانِ) and a judgement about balance.',
  icon: 'FaUmbrellaBeach', iconSet: 'fa6',
});

const who = (m, f, pl) => ({ tag: 'I · he · she', forms: [{ l: 'we', ar: pl }, { l: 'she', ar: f }, { l: 'he', ar: m }] });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D1-L08', {
  support: `• Core: four weekend activities with a day (يَوْمَ السَّبْتِ …) and one contrast frame learnt as a chunk: أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَـ …
• Develop: Saturday vs Sunday vs school days, with بَيْنَمَا for another person (recycles D1-L06). Stretch: إِذَا conditions, flexible frequency and an evaluation of balance with evidence.
• Sensitivity: weekends differ a lot between families (work, madrasa, caring duties). Students may invent a weekend — the language is what is assessed.
• Urdu bridge: عطلہ / تعطیل، اقارب، شوق (→ hobby)، مسئولیت / ذمہ داری، توازن.`,
  teach: 'School days vs the weekend; “if I have time”.',
  wedo: 'School day → weekend, sort for balance, fix and listen.',
  next: { nextCode: 'D1-L09', nextTitle: 'Reading Daily Routines and Weekly Schedules', nextAr: 'قِرَاءَةُ الرُّوتِينِ وَالجَدَاوِلِ' },
  doNow: {
    questions: [
      q('What does أَزُورُ أَقَارِبِي mean?', ['I visit my relatives', 'I meet my friends', 'I go shopping'], 'Prepared at home.'),
      q('What does وَقْتُ الفَرَاغِ mean?', ['free time', 'weekend', 'break time at school'], 'Prepared at home.'),
      q('Ask a GIRL “What do you do?”', ['مَاذَا تَفْعَلِينَ؟', 'مَاذَا تَفْعَلُ؟', 'مَاذَا يَفْعَلُ؟'], 'D1-L07: girl → -īna.'),
      q('Which question asks for a reason?', ['لِمَاذَا؟', 'مَتَى؟', 'كَمْ مَرَّةً؟'], 'D1-L07 question words.'),
      q('Complete: أَمَّا يَوْمُ السَّبْتِ ___ هُوَ يَوْمُ الرَّاحَةِ.', ['فَـ', 'بَيْنَمَا', 'لِأَنَّ'], 'D1-L03: أَمَّا … فَـ.'),
    ],
    keyIdea: { text: 'School days are fixed; the weekend is flexible. Contrast them, and say what depends on time.', ar: '{k|أَمَّا} فِي نِهَايَةِ الأُسْبُوعِ {k|فَـ}أَنَامُ وَقْتًا أَطْوَلَ. {w|إِذَا} كَانَ لَدَيَّ وَقْتٌ أَلْتَقِي بِأَصْدِقَائِي.' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 retrieve D1-L07 (you m./f., question words) and D1-L03 (أَمَّا … فَـ).',
  },
  routes: {
    core: ['I can say four things I do at the weekend.', 'I can contrast school days and the weekend.'],
    develop: ['I can describe Saturday and Sunday separately.', 'I can compare with another person using بَيْنَمَا.'],
    stretch: ['I can say what depends on time or weather with إِذَا.', 'I can judge whether my weekend is balanced, with evidence.'],
  },
  bridge: [
    { ar: 'عُطْلَةٌ', urdu: 'تعطیل', tr: 'taʿtīl', en: 'holiday, break' },
    { ar: 'أَقَارِبُ', urdu: 'اقارب', tr: 'aqārib', en: 'relatives' },
    { ar: 'تَوَازُنٌ', urdu: 'توازن', tr: 'tawāzun', en: 'balance' },
    { ar: 'مَسْؤُولِيَّةٌ', urdu: 'مسئولیت', tr: 'masʾūliyat', en: 'responsibility' },
    { ar: 'الطَّقْسُ', urdu: 'موسم', tr: 'mausam', en: 'Urdu: weather · Arabic مَوْسِمٌ: season' },
  ],
  bridgeNotes: 'URDU BRIDGE: تعطیل / تعطیلات (holidays) → عُطْلَةٌ. اقارب (relatives, formal Urdu) → أَقَارِبُ (sg. قَرِيبٌ). توازن → تَوَازُنٌ (balance). مسئولیت (responsibility) → مَسْؤُولِيَّةٌ. FALSE FRIEND: Urdu موسم = weather, but Arabic مَوْسِمٌ = season; weather in Arabic is الطَّقْسُ (حَسَبَ الطَّقْسِ = depending on the weather).',
  core: ['عُطْلَةُ نِهَايَةِ الأُسْبُوعِ', 'يَوْمُ السَّبْتِ', 'يَوْمُ الأَحَدِ', 'فِي نِهَايَةِ الأُسْبُوعِ', 'أَنَامُ وَقْتًا أَطْوَلَ', 'أَزُورُ أَقَارِبِي', 'أَلْتَقِي بِأَصْدِقَائِي', 'أَتَسَوَّقُ', 'أُسَاعِدُ فِي البَيْتِ', 'أُمَارِسُ هِوَايَتِي'],
  forms: {
    'أَزُورُ أَقَارِبِي': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'أَقَارِبُ' }, { l: 'f.', ar: 'قَرِيبَةٌ' }, { l: 'm.', ar: 'قَرِيبٌ' }] },
    'أَلْتَقِي بِأَصْدِقَائِي': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'أَصْدِقَاءُ' }, { l: 'f.', ar: 'صَدِيقَةٌ' }, { l: 'm.', ar: 'صَدِيقٌ' }] },
    'أَتَسَوَّقُ': who('يَتَسَوَّقُ', 'تَتَسَوَّقُ', 'نَتَسَوَّقُ'),
    'أُمَارِسُ هِوَايَتِي': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'هِوَايَاتٌ' }, { l: 'hobby', ar: 'هِوَايَةٌ' }, { l: 'he', ar: 'يُمَارِسُ هِوَايَتَهُ' }] },
    'أَنَامُ وَقْتًا أَطْوَلَ': who('يَنَامُ', 'تَنَامُ', 'نَنَامُ'),
    'أُخَطِّطُ لِلْأُسْبُوعِ': who('يُخَطِّطُ', 'تُخَطِّطُ', 'نُخَطِّطُ'),
    'خُطَّةٌ مُرِنَةٌ': { tag: 'm · f · pl', forms: [{ l: 'plans', ar: 'خُطَطٌ مَرِنَةٌ' }, { l: 'f.', ar: 'مَرِنَةٌ' }, { l: 'm.', ar: 'مَرِنٌ' }] },
  },
  vocabNotes: { 0: 'يَوْمُ السَّبْتِ = Saturday; يَوْمَ السَّبْتِ (with fatḥa) = ON Saturday. In the UK the weekend is Saturday–Sunday; in many Arab countries it is Friday–Saturday — ask the class.' },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · school days vs the weekend (website rule)', title: 'School days … as for the weekend …', ar: 'أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَـ…',
      cols: [{ label: 'School days', w: 4.5, size: 22 }, { label: 'As for the weekend …', w: 5.2, size: 22 }, { label: 'Contrast', w: 2.63 }],
      rows: [
        { core: true, cells: [P('فِي أَيَّامِ الدِّرَاسَةِ أَسْتَيْقِظُ مُبَكِّرًا،', 'On school days I wake up early,'), P('{k|أَمَّا} فِي نِهَايَةِ الأُسْبُوعِ {k|فَـ}أَنَامُ وَقْتًا أَطْوَلَ.', 'as for the weekend, I sleep longer.'), 'early / longer'] },
        { core: true, cells: [P('أَذْهَبُ إِلَى المَدْرَسَةِ،', 'I go to school,'), P('{k|أَمَّا} يَوْمُ السَّبْتِ {k|فَـ}أَزُورُ أَقَارِبِي.', 'as for Saturday, I visit my relatives.'), 'school / family'] },
        { cells: [P('أُرَاجِعُ دُرُوسِي يَوْمِيًّا،', 'I revise my lessons daily,'), P('{k|أَمَّا} يَوْمُ الأَحَدِ {k|فَـ}أُرَاجِعُ لِمُدَّةِ سَاعَةٍ فَقَطْ.', 'as for Sunday, I revise for one hour only.'), 'daily / one hour'] },
        { cells: [P('أَتَّبِعُ جَدْوَلًا ثَابِتًا،', 'I follow a fixed timetable,'), P('{k|أَمَّا} فِي العُطْلَةِ {k|فَـ}خُطَّتِي مَرِنَةٌ.', 'as for the break, my plan is flexible.'), 'fixed / flexible'] },
      ],
      foot: 'Website warning: “as for” comes FIRST, then the topic, then fa- joined to the comment. Never fa- before “as for”.',
      notes: `GRAMMAR PART 1 — website rule “Contrast school days and weekends” (أَمَّا introduces the new topic and فَـ begins the comment) and website pattern 3.
Website common error: فَأَمَّا السَّبْتُ أَسْتَرِيحُ ✗ → أَمَّا السَّبْتُ فَأَسْتَرِيحُ ✓.
Core: learn row 1 as a chunk. Develop: rows 1–3, changing the activity. Stretch: row 4 (evaluation).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · flexible plans (website rules) · Develop / Stretch', title: 'If I have time … often … sometimes …', ar: 'إِذَا · غَالِبًا مَا · بَيْنَمَا',
      cards: [
        { chip: 'CONDITION · STRETCH', color: 'B83227', head: 'إِذَا', big: 'إِذَا كَانَ لَدَيَّ وَقْتٌ أُمَارِسُ هِوَايَتِي.', en: 'If I have time, I practise my hobby.', clue: 'if + present, present.' },
        { chip: 'HOW OFTEN? · DEVELOP', color: '1E7B4F', head: 'غَالِبًا مَا', big: 'غَالِبًا مَا أَزُورُ أَقَارِبِي يَوْمَ السَّبْتِ.', en: 'I often visit relatives on Saturday.', clue: 'A tendency, not a timetable.' },
        { chip: 'TWO PEOPLE · DEVELOP', color: '1D5FBF', head: 'بَيْنَمَا', big: 'أَزُورُ أَقَارِبِي، بَيْنَمَا تَلْتَقِي أُخْتِي بِصَدِيقَاتِهَا.', en: 'I visit relatives, whereas my sister meets her friends.', clue: 'Each verb matches its subject.' },
      ],
      error: { text: 'Website common error: use a clear repeated-condition frame.', pairs: [['إِذَا كَانَ لَدَيَّ وَقْتٌ أَذْهَبُ.', 'إِذَا لَدَيَّ وَقْتٌ ذَهَبْتُ دَائِمًا.']] },
      notes: `GRAMMAR PART 2 — website rules “Express a real condition with إِذَا” (the present can describe a repeated or likely condition), “Use flexible frequency precisely” (غَالِبًا مَا، فِي بَعْضِ الأَحْيَانِ، نَادِرًا مَا) and “Contrast two people or activities with بَيْنَمَا”.
Useful chunk for everyone: إِذَا كَانَ لَدَيَّ وَقْتٌ (if I have time) — students learn it whole. Also حَسَبَ الطَّقْسِ (depending on the weather).`,
    },
  ],
  quick: [0, 1, 2, 3],
  ido: {
    title: 'Watch me describe my weekend',
    steps: [
      { head: 'Contrast', ar: '{k|أَمَّا} يَوْمُ السَّبْتِ {k|فَـ}أَنَامُ وَقْتًا أَطْوَلَ.', think: 'As for + topic + fa-.' },
      { head: 'How often', ar: '{w|غَالِبًا مَا} أَزُورُ أَقَارِبِي بَعْدَ الظُّهْرِ.', think: 'A tendency.' },
      { head: 'Condition', ar: '{e|إِذَا} كَانَ لَدَيَّ وَقْتٌ أَلْتَقِي بِأَصْدِقَائِي.', think: 'It depends on time.' },
      { head: 'Judgement', ar: 'عُطْلَتِي مُتَوَازِنَةٌ لِأَنَّهَا تَجْمَعُ بَيْنَ الرَّاحَةِ وَالمَسْؤُولِيَّةِ.', think: 'Opinion + evidence.' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: 'AS FOR … FA-', w: 'FREQUENCY', e: 'CONDITION' },
    model: 'فِي أَيَّامِ الدِّرَاسَةِ أَسْتَيْقِظُ مُبَكِّرًا، {k|أَمَّا} يَوْمُ السَّبْتِ {k|فَـ}أَنَامُ وَقْتًا أَطْوَلَ. {w|غَالِبًا مَا} أَزُورُ أَقَارِبِي بَعْدَ الظُّهْرِ، وَ{e|إِذَا} كَانَ لَدَيَّ وَقْتٌ أَلْتَقِي بِأَصْدِقَائِي. يَوْمَ الأَحَدِ أُخَطِّطُ لِلْأُسْبُوعِ. عُطْلَتِي مُتَوَازِنَةٌ لِأَنَّهَا تَجْمَعُ بَيْنَ الرَّاحَةِ وَالمَسْؤُولِيَّةِ.',
    modelEn: 'On school days I wake up early; as for Saturday, I sleep longer. I often visit my relatives in the afternoon, and if I have time I meet my friends. On Sunday I plan the week. My weekend is balanced because it combines rest and responsibility.',
    notes: 'I DO (3 min) — website patterns combined into a short weekend, with a think-aloud. Students copy it and label each sentence: CONTRAST · FREQUENCY · CONDITION · JUDGEMENT.',
  },
  wedoSlides: [
    {
      type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · school day → weekend (website picture-game sentences)', title: 'But at the weekend …', ar: 'أَمَّا فِي نِهَايَةِ الأُسْبُوعِ …',
      seed: 8,
      questions: [
        q('Which is accurate?', ['أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَأَسْتَيْقِظُ مُتَأَخِّرًا.', 'فَأَمَّا فِي نِهَايَةِ الأُسْبُوعِ أَسْتَيْقِظُ مُتَأَخِّرًا.', 'أَمَّا فِي نِهَايَةِ الأُسْبُوعِ أَسْتَيْقِظُ فَمُتَأَخِّرًا.'], 'As for + topic, then fa- on the verb.', { ar: 'أَسْتَيْقِظُ صَبَاحًا مُبَكِّرًا …' }),
        q('Which is accurate?', ['أَمَّا يَوْمُ السَّبْتِ فَأَزُورُ أَقَارِبِي.', 'أَمَّا يَوْمُ السَّبْتِ أَزُورُ أَقَارِبِي.', 'يَوْمُ السَّبْتِ فَأَمَّا أَزُورُ أَقَارِبِي.'], 'fa- is needed before the comment.', { ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ …' }),
        q('Which flexible plan is accurate?', ['إِذَا كَانَ لَدَيَّ وَقْتٌ أُمَارِسُ هِوَايَتِي.', 'إِذَا لَدَيَّ وَقْتٌ مَارَسْتُ دَائِمًا.', 'لِأَنَّ كَانَ لَدَيَّ وَقْتٌ.'], '“If I have time” as a whole chunk.', { ar: 'أَدْرُسُ بَعْدَ المَدْرَسَةِ …' }),
        q('Contrast with my brother:', ['أَنَامُ وَقْتًا أَطْوَلَ، بَيْنَمَا يَتَمَرَّنُ أَخِي.', 'أَنَامُ وَقْتًا أَطْوَلَ، بَيْنَمَا تَتَمَرَّنُ أَخِي.', 'أَنَامُ وَقْتًا أَطْوَلَ، بَيْنَمَا أَتَمَرَّنُ أَخِي.'], 'My brother → ya-.', { ar: 'أَنَامُ لَيْلًا …' }),
      ],
      side: { kind: 'core', label: 'CORE', text: 'Pattern: as for + the weekend + fa- + verb.\nLearn: “if I have time” as one chunk.' },
      answerSlide: { min: 0, eyebrow: 'We do · school day → weekend answers', title: 'But at the weekend: answers', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO — the website picture-game sentences (school-day routine) become weekend contrasts. 20 seconds each; chat the letters. Q1–2 target the website’s main error (the position of fa-).',
      answerNotes: 'Reveal; volunteers change the activity and say their own weekend version.',
    },
  ],
  sorterCats: ['Rest and enjoyment', 'Responsibility and preparation', 'Social and family time'],
  sorterNotes: 'Accept reasoned alternatives (helping at home can be family time). Stretch: use the sort to judge balance — which column is emptiest in YOUR weekend?',
  hints: ['Where does fa- belong: before “as for” or before the comment?', 'أُخْتِي is feminine. Which prefix?', 'Use the whole chunk “if I have time”.'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: لَا أَتَّبِعُ جَدْوَلًا · غَالِبًا مَا · لِمُدَّةِ سَاعَةٍ.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5.',
  gloss: [
    ['فِي نِهَايَةِ الأُسْبُوعِ لَا أَتَّبِعُ جَدْوَلًا صَارِمًا.', 'At the weekend I don’t follow a strict timetable.'],
    ['صَبَاحَ السَّبْتِ غَالِبًا مَا أُسَاعِدُ أُسْرَتِي، ثُمَّ أَلْتَقِي بِصَدِيقَاتِي إِذَا كَانَ لَدَيَّ وَقْتٌ.', 'On Saturday morning I often help my family, then I meet my friends if I have time.'],
    ['أَمَّا مَسَاءُ السَّبْتِ فَأَقْضِيهِ مَعَ أُسْرَتِي.', 'As for Saturday evening, I spend it with my family.'],
    ['يَوْمَ الأَحَدِ أُرَاجِعُ دُرُوسِي لِمُدَّةِ سَاعَةٍ، بَيْنَمَا يَذْهَبُ أَخِي إِلَى التَّدْرِيبِ. بَعْدَ ذٰلِكَ نَزُورُ جَدَّتَنَا.', 'On Sunday I revise for an hour, whereas my brother goes to training. After that we visit our grandmother.'],
    ['أُحِبُّ هٰذَا التَّوَازُنَ لِأَنَّنِي أَسْتَرِيحُ وَأَسْتَعِدُّ لِلْأُسْبُوعِ الجَدِيدِ أَيْضًا.', 'I like this balance because I rest and also get ready for the new week.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَاذَا تَفْعَلُ عَادَةً يَوْمَ السَّبْتِ؟' },
      { route: 'develop', ar: 'كَيْفَ يَخْتَلِفُ يَوْمُ الأَحَدِ؟' },
      { route: 'develop', ar: 'مَاذَا تَفْعَلُ إِذَا كَانَ لَدَيْكَ وَقْتٌ؟' },
      { route: 'stretch', ar: 'هَلْ عُطْلَتُكَ مُتَوَازِنَةٌ؟ هَاتِ دَلِيلًا.' },
    ],
    stems: [
      { route: 'core', ar: 'يَوْمَ السَّبْتِ ______ ، وَيَوْمَ الأَحَدِ ______ .' },
      { route: 'develop', ar: 'أَمَّا يَوْمُ الأَحَدِ فَـ ______ .' },
      { route: 'develop', ar: 'إِذَا كَانَ لَدَيَّ وَقْتٌ ______ .' },
      { route: 'stretch', ar: 'عُطْلَتِي مُتَوَازِنَةٌ / غَيْرُ مُتَوَازِنَةٍ لِأَنَّ ______ .' },
    ],
    modelEn: ['Is your weekend organised?', 'It isn’t strict, but I set aside time for rest and homework. If I have time, I meet my friends.'],
    notes: 'Website prompts 1, 2, 3 and 5. (Prompt 4 “Which responsibilities do you complete?” is a good extra question for fast finishers.) Remind students to ask a girl with -īna (D1-L07): مَاذَا تَفْعَلِينَ يَوْمَ السَّبْتِ؟',
  },
  write: {
    core: { amount: '5 sentences', how: 'Four weekend activities with a day, and one sentence “as for the weekend …” from the frames.' },
    develop: { amount: '8 sentences', how: 'Saturday vs Sunday vs school days; one contrast with another person (whereas).' },
    stretch: { amount: '100–120 words', how: 'Website task: both days, as for … fa-, whereas, an “if” condition, three frequency expressions and an evaluation of balance.' },
  },
  frames: {
    core: [
      { en: 'On Saturday I …', ar: 'يَوْمَ السَّبْتِ ______ .' },
      { en: 'On Sunday I …', ar: 'يَوْمَ الأَحَدِ ______ .' },
      { en: 'At the weekend I sleep longer.', ar: 'فِي نِهَايَةِ الأُسْبُوعِ أَنَامُ وَقْتًا أَطْوَلَ.' },
      { en: 'I visit my relatives / meet my friends.', ar: 'أَزُورُ أَقَارِبِي / أَلْتَقِي بِأَصْدِقَائِي.' },
      { en: 'As for the weekend, I …', ar: 'أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَـ ______ .' },
    ],
    develop: [
      { en: 'On school days I …, as for Saturday, I …', ar: 'فِي أَيَّامِ الدِّرَاسَةِ ______ ، أَمَّا يَوْمُ السَّبْتِ فَـ ______ .' },
      { en: 'I often …', ar: 'غَالِبًا مَا ______ .' },
      { en: 'Sometimes I go shopping with …', ar: 'فِي بَعْضِ الأَحْيَانِ أَتَسَوَّقُ مَعَ ______ .' },
      { en: 'If I have time, I …', ar: 'إِذَا كَانَ لَدَيَّ وَقْتٌ ______ .' },
      { en: '…, whereas my sister …', ar: '______ ، بَيْنَمَا تَـ ______ أُخْتِي.' },
    ],
    bank: ['يَوْمَ السَّبْتِ', 'يَوْمَ الأَحَدِ', 'أَمَّا … فَـ', 'بَيْنَمَا', 'إِذَا كَانَ لَدَيَّ وَقْتٌ', 'غَالِبًا مَا', 'نَادِرًا مَا', 'أَزُورُ أَقَارِبِي', 'أَتَسَوَّقُ', 'أُمَارِسُ هِوَايَتِي', 'أُخَطِّطُ لِلْأُسْبُوعِ', 'تَوَازُنٌ'],
  },
  stretch: [
    ['لَا أَتَّبِعُ جَدْوَلًا صَارِمًا', 'I don’t follow a strict timetable'],
    ['إِذَا كَانَ الطَّقْسُ مُنَاسِبًا', 'if the weather is suitable'],
    ['نَادِرًا مَا أَقْضِي اليَوْمَ كُلَّهُ فِي البَيْتِ', 'I rarely spend the whole day at home'],
    ['تَجْمَعُ بَيْنَ الرَّاحَةِ وَالأُسْرَةِ وَالمَسْؤُولِيَّةِ', 'it combines rest, family and responsibility'],
    ['وَلٰكِنَّنِي أُرِيدُ أَنْ أَقْرَأَ أَكْثَرَ', 'but I want to read more'],
  ],
  modelEn: 'My weekend routine is different from school days. As for Saturday, I wake up a little late, then I help my family at home. I often visit my relatives in the afternoon, and if I have time I meet my friends. In the evening I practise my hobby, whereas my brother watches sport. On Sunday I revise my lessons for an hour and prepare my bag. I rarely spend the whole day at home. In my opinion, my weekend is balanced because it combines rest, family and responsibility, but I want to read more.',
  find: ['أَمَّا … فَـ', 'an “if” condition', 'three frequency expressions', 'the judgement with a reason'],
  modelNotes: 'Evidence: أَمَّا يَوْمُ السَّبْتِ فَأَسْتَيْقِظُ · إِذَا كَانَ لَدَيَّ وَقْتٌ · غَالِبًا مَا، نَادِرًا مَا، لِمُدَّةِ سَاعَةٍ · بَيْنَمَا يُشَاهِدُ أَخِي · مُتَوَازِنَةٌ لِأَنَّهَا تَجْمَعُ … وَلٰكِنَّنِي أُرِيدُ أَنْ أَقْرَأَ أَكْثَرَ (qualification).',
  selfCheck: [
    { route: 'core', text: 'I wrote about both Saturday and Sunday.' },
    { route: 'core', text: 'I used “as for … fa-” in the right order.' },
    { route: 'develop', text: 'After “whereas”, the verb matches the new person.' },
    { route: 'develop', text: 'I used two flexible frequency expressions.' },
    { route: 'stretch', text: 'I used “if” and judged the balance with evidence.' },
  ],
  exit: [0, 2, 3],
  glossary: [
    ['يَخْتَلِفُ … عَنْ', 'differs from'], ['السُّوقِ', 'the market'], ['إِذَا كَانَ الطَّقْسُ مُنَاسِبًا', 'if the weather is suitable'], ['مُتْعَبِينَ', 'tired (pl.)'], ['مُبَارَاةً', 'a match'],
    ['أُحَضِّرُ حَقِيبَتِي', 'I prepare my bag'], ['كُلُّ وَقْتِي', 'all my time'], ['دِرَاسَةً', 'study'], ['فَالتَّوَازُنُ', 'for balance'], ['بِنَشَاطٍ', 'energetically'],
  ],
  prep: {
    words: [['جَدْوَلٌ أُسْبُوعِيٌّ', 'a weekly schedule', 'pl.: جَدَاوِلُ'], ['مَوْعِدُ البَدْءِ', 'start time', ''], ['مَوْعِدُ الاِنْتِهَاءِ', 'finish time', ''], ['الدَّلِيلُ', 'evidence', ''], ['حَسَبَ الجَدْوَلِ', 'according to the schedule', '']],
    questionEn: 'Look at your own school timetable. Which day is the busiest, and how do you know?',
    questionAr: 'مَا أَكْثَرُ يَوْمٍ اِنْشِغَالًا فِي جَدْوَلِكَ؟',
    homework: {
      core: 'Website D1-L08: the vocabulary tab and the sorter “Weekend balance board”.',
      develop: 'Write 8 sentences: Saturday, Sunday and one contrast with a family member.',
      stretch: 'Website writing task: 100–120 words about your weekend and how it differs from school days.',
    },
    wordsSource: 'The five words come from the website D1-L09 vocabulary (routine texts and schedules, reading evidence).',
  },
  remember: 'Remember: as for + topic + fa- + comment.',
});

module.exports = { meta, slides };
