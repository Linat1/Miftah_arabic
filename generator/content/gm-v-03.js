'use strict';
/* GM-V-03 · Unusual High-Frequency Verbs — website: Mastery & Revision › Grammar › Verbs › Lesson 3 (رَأَى / يَرَى table with hamza kept in
 * رَأَيْتُ; coming: جَاءَ / يَجِيءُ and أَتَى / يَأْتِي — learn both, use one consistently; other families أَخَذَ / يَأْخُذُ (آخُذُ · خُذْ) · أَكَلَ /
 * يَأْكُلُ (آكُلُ · كُلْ) · أَعْطَى / يُعْطِي · بَقِيَ / يَبْقَى · أَرَادَ / يُرِيدُ; madda for first-person آخُذُ; mini-paradigm method; spelling
 * clinic). Quizzes are the website’s (Entry, رأى check, Coming check, High-Frequency Irregular check, Mini-Paradigm, Mastery); the
 * website game sentences are used in the We-do. Sorter, I-do, frames and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__07-verbs__grammar-mastery-03-unusual-verbs';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-V-03', fileTitle: 'Unusual_High_Frequency_Verbs', title: 'Unusual High-Frequency Verbs', arabic: 'أَفْعَالٌ شَائِعَةٌ غَيْرُ مَأْلُوفَةٍ',
  focus: 'A handful of everyday verbs look irregular: to see (raʾā / yarā), to come (jāʾa / yajīʾu, atā / yaʾtī), to take (akhadha → ākhudhu, khudh!), to give, to want. Learn each as a short five-form chain and check every hamza and madda.',
  icon: 'FaStar',
});

const slides = G.gmLesson({
  code: 'GM-V-03', site: KEY,
  support: `• Core: رَأَيْتُ · يَرَى · جِئْتُ · آخُذُ · أَعْطَيْتُ · أُرِيدُ. Develop: move the same verb across persons and time frames (رَأَى · رَأَتْ · رَأَيْتُ · يَرَى · أَرَى · سَأَرَى). Stretch: compare جَاءَ / أَتَى; spelling of hamza, madda and alif maqṣūra; irregular commands خُذْ · كُلْ.
• Website “mini-paradigm method”: say five forms in one rhythm, then put them in sentence frames — far more durable than lists.
• These verbs carry IGCSE narratives: what I saw, how I came, what I took, what I want to do next.`,
  teach: 'To see; to come; take, eat, give, remain, want; spelling.',
  wedo: 'Complete the chains; gap-fill; repair.',
  next: { nextCode: 'GM-V-04', nextTitle: 'Past Tense: Conjugation and Narration', nextAr: 'الْفِعْلُ الْمَاضِي: التَّصْرِيفُ وَالسَّرْدُ' },
  doNow: {
    pick: [0, 1, 2, 3, 4],
    fb: {
      0: 'Raʾā becomes raʾay- before the ending.',
      1: 'The high-frequency present is yarā.',
      2: 'Jāʾa becomes jiʾ- before -tu.',
      3: 'The standard spelling is jāʾū.',
      4: 'First-person present contracts to ākhudhu (madda).',
    },
    keyIdea: { text: 'Some everyday verbs must be learned as small chains. Say five forms in one rhythm.', ar: 'رَأَى · رَأَتْ · {k|رَأَيْتُ} · {e|يَرَى} · أَرَى' },
    retrieves: 'The website Entry Check (questions 1–5) — it uses the five verbs prepared at the end of GM-V-02.',
  },
  objectives: ['Use to see across persons and time frames.', 'Use to come (jāʾa and atā) accurately.', 'Use take, eat, give and want in common forms.', 'Spell hamza, madda and alif maqṣūra correctly.'],
  routes: {
    core: ['I say I saw, he sees, I came, I take.', 'I keep the hamza in raʾaytu.'],
    develop: ['I move one verb across I / she / we / they.', 'I say I will see with sa-.'],
    stretch: ['I compare jiʾtu and ataytu.', 'I use the commands khudh and kul.'],
  },
  terms: {
    items: [
      { ar: 'رَأَى / يَرَى', en: 'to see', note: 'رَأَيْتُ · أَرَى' },
      { ar: 'جَاءَ / يَجِيءُ', en: 'to come', note: 'جِئْتُ · أَجِيءُ' },
      { ar: 'أَتَى / يَأْتِي', en: 'to come (also very common)', note: 'أَتَيْتُ · آتِي' },
      { ar: 'أَخَذَ / يَأْخُذُ', en: 'to take', note: 'آخُذُ · خُذْ' },
      { ar: 'أَعْطَى / يُعْطِي', en: 'to give', note: 'أَعْطَيْتُ · أُعْطِي' },
      { ar: 'الْمَدَّةُ', en: 'madda (ā with hamza)', note: 'آخُذُ · آكُلُ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · the verb to see (website table)', title: 'raʾā / yarā', ar: 'رَأَى / يَرَى', ltr: true,
      cols: [{ label: 'Function', w: 3.2 }, { label: 'Form', w: 3.4, size: 24 }, { label: 'Model (website)', w: 5.73, size: 22 }],
      rows: [
        { core: true, cells: ['past: he', 'رَأَى', 'رَأَى الْفِيلْمَ.'] },
        { core: true, cells: ['past: she', 'رَأَتْ', 'رَأَتْ صَدِيقَتَهَا.'] },
        { core: true, cells: ['past: I / we', 'رَأَيْتُ · رَأَيْنَا', 'رَأَيْنَا الْبَحْرَ.'] },
        { core: true, cells: ['present: I / he / we', 'أَرَى · يَرَى · نَرَى', 'نَرَى الْجَبَلَ.'] },
        { cells: ['present: they', 'يَرَوْنَ', 'يَرَوْنَ الْقَمَرَ.'] },
        { cells: ['future', 'سَأَرَى', 'سَأَرَى النَّتِيجَةَ غَدًا.'] },
      ],
      foot: 'Website spelling alert: keep the hamza in raʾaytu. The present yarā drops the hamza — learn it whole.',
      notes: 'PART 1 (3 min) — website “The verb raʾā / yarā”. Chant the mini-paradigm: raʾā — raʾat — raʾaytu — yarā — arā.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · coming: two common pairs (website table)', title: 'jāʾa / yajīʾu and atā / yaʾtī', ar: 'جَاءَ وَأَتَى', ltr: true,
      cols: [{ label: 'Function', w: 3.2 }, { label: 'jāʾa / yajīʾu', w: 4.4, size: 24 }, { label: 'atā / yaʾtī', w: 4.73, size: 24 }],
      rows: [
        { core: true, cells: ['past: he · she', 'جَاءَ · جَاءَتْ', 'أَتَى · أَتَتْ'] },
        { core: true, cells: ['past: I · we', 'جِئْتُ · جِئْنَا', 'أَتَيْتُ · أَتَيْنَا'] },
        { core: true, cells: ['present: I · he', 'أَجِيءُ · يَجِيءُ', 'آتِي · يَأْتِي'] },
        { cells: ['present: we · they', 'نَجِيءُ · يَجِيئُونَ', 'نَأْتِي · يَأْتُونَ'] },
        { cells: ['past: they', 'جَاءُوا', 'أَتَوْا'] },
      ],
      foot: 'Website house approach: learn both pairs; choose ONE and use it consistently within a sentence — do not mix stems.',
      notes: 'PART 2 (3 min) — website “Coming”. Jiʾtu behaves like a hollow verb (GM-V-02); atā behaves like a final-weak verb.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 3 · other high-frequency unusual verbs (website table) · Develop / Stretch', title: 'Take, eat, give, remain, want', ar: 'أَفْعَالٌ شَائِعَةٌ أُخْرَى', ltr: true,
      cols: [{ label: 'Meaning', w: 2.4 }, { label: 'Verb family', w: 3.6, size: 22 }, { label: 'Key forms (website)', w: 4.2, size: 22 }, { label: 'Notice', w: 2.13 }],
      rows: [
        { core: true, cells: ['take', 'أَخَذَ / يَأْخُذُ', 'أَخَذْتُ · آخُذُ · خُذْ', 'madda; short command'] },
        { core: true, cells: ['eat', 'أَكَلَ / يَأْكُلُ', 'أَكَلْتُ · آكُلُ · كُلْ', 'madda; short command'] },
        { core: true, cells: ['give', 'أَعْطَى / يُعْطِي', 'أَعْطَيْتُ · أُعْطِي · أَعْطِ', 'final weak'] },
        { cells: ['remain', 'بَقِيَ / يَبْقَى', 'بَقِيتُ · أَبْقَى', 'final weak'] },
        { core: true, cells: ['want', 'أَرَادَ / يُرِيدُ', 'أَرَدْتُ · أُرِيدُ', 'hollow-like'] },
      ],
      foot: 'Website warning: ākhudhu and ākulu are NOT written with two hamzas — the madda shows the contraction.',
      notes: 'PART 3 (4 min) — website “Other high-frequency unusual verbs”. Khudh! and kul! are the commands students hear at home and at mealtimes.',
    },
  ],
  quick: [
    W(/يَرَى Check/, 0, { feedback: 'Stem raʾay- before -nā.' }),
    W(/Coming Verb/, 2, { prompt: 'Choose “he comes” from atā / yaʾtī.', feedback: 'Keep the middle hamza: yaʾtī.' }),
    W(/High-Frequency Irregular/, 1, { prompt: 'Choose “Take!” (to one male).', feedback: 'The irregular command is khudh.' }),
    W(/High-Frequency Irregular/, 3, { feedback: 'The short past stem before -tu: aradtu.' }),
  ],
  quickNote: 'website verb checks.',
  ido: {
    title: 'Watch me tell what happened',
    steps: [
      { head: 'Came', ar: 'جِئْتُ', think: 'jāʾa → jiʾtu.' },
      { head: 'Saw', ar: 'رَأَيْتُ', think: 'Keep the hamza.' },
      { head: 'Took', ar: 'أَخَذْتُ', think: 'Regular past.' },
      { head: 'Gave', ar: 'أَعْطَيْتُ', think: 'Final weak: -aytu.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'UNUSUAL VERB', e: 'TIME' },
    model: '{e|أَمْسِ} {k|جِئْتُ} إِلَى الْمَدْرَسَةِ مُبَكِّرًا، وَ{k|رَأَيْتُ} مَعْرِضًا جَمِيلًا. {k|أَخَذْتُ} بَعْضَ الصُّوَرِ، وَ{k|أَعْطَيْتُ} صَدِيقَتِي نُسْخَةً مِنْهَا.',
    modelEn: 'Yesterday I came to school early, and I saw a beautiful exhibition. I took some photos, and I gave my friend a copy of them.',
    notes: 'Website model. Narrate the spelling check for each verb: hamza, madda, alif maqṣūra.',
  },
  models: [
    { ar: 'سَأَرَى النَّتِيجَةَ غَدًا.', en: 'I will see the result tomorrow.', tip: 'Website: future of to see.' },
    { ar: 'آخُذُ الْحَافِلَةَ كُلَّ يَوْمٍ.', en: 'I take the bus every day.', tip: 'Madda.' },
    { ar: 'أُرِيدُ أَنْ أَنْجَحَ.', en: 'I want to succeed.', tip: 'Website game.' },
    { ar: 'يَأْتِي أَبِي مِنَ الْعَمَلِ مَسَاءً.', en: 'My father comes home from work in the evening.', tip: 'atā / yaʾtī.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · mini-paradigm chains (website) · say them aloud', title: 'Complete the chain', ar: 'أَكْمِلِ السِّلْسِلَةَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Meaning', w: 2.0 }, { label: 'he · she', w: 3.2, size: 22 }, { label: 'I (past)', w: 2.4, size: 24 }, { label: 'he · I (present)', w: 3.0, size: 22 }, { label: 'command', w: 1.73, size: 22 }],
      rows: [
        { core: true, cells: ['see', 'رَأَى · رَأَتْ', 'رَأَيْتُ', 'يَرَى · أَرَى', '—'] },
        { core: true, cells: ['come', 'جَاءَ · جَاءَتْ', 'جِئْتُ', 'يَجِيءُ · أَجِيءُ', '—'] },
        { core: true, cells: ['take', 'أَخَذَ · أَخَذَتْ', 'أَخَذْتُ', 'يَأْخُذُ · آخُذُ', 'خُذْ'] },
        { cells: ['eat', 'أَكَلَ · أَكَلَتْ', 'أَكَلْتُ', 'يَأْكُلُ · آكُلُ', 'كُلْ'] },
        { cells: ['give', 'أَعْطَى · أَعْطَتْ', 'أَعْطَيْتُ', 'يُعْطِي · أُعْطِي', 'أَعْطِ'] },
      ],
      foot: 'Website: say five forms in one rhythm, three times, faster each time. Then cover the columns and rebuild.',
      notes: 'WE DO (3 min). Cover columns 3–5; students rebuild aloud.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · past or present?', title: 'Did it happen, or does it happen?', ar: 'مَاضٍ أَمْ مُضَارِعٌ؟',
      categories: ['Past', 'Present'],
      items: [['رَأَيْتُ', 0], ['أَرَى', 1], ['جِئْنَا', 0], ['نَجِيءُ', 1], ['أَخَذْتُ', 0], ['آخُذُ', 1], ['أَعْطَيْتُ', 0], ['أُعْطِي', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type P or N and give the English. Watch aʿṭaytu (past) vs uʿṭī (present).',
    },
  ],
  mistakes: [
    { wrong: 'أَنَا رَيْتُ الْمُبَارَاةَ', right: 'أَنَا رَأَيْتُ الْمُبَارَاةَ', why: 'Keep the hamza and the full stem raʾay- (website clinic).' },
    { wrong: 'أَنَا جَاءْتُ مُبَكِّرًا', right: 'أَنَا جِئْتُ مُبَكِّرًا', why: 'The first-person past is jiʾtu (website clinic).' },
    { wrong: 'أَنَا أَأْخُذُ الْحَافِلَةَ', right: 'أَنَا آخُذُ الْحَافِلَةَ', why: 'Use madda in the first-person present (website clinic).' },
  ],
  hints: ['Where is the hamza?', 'What is “I came”?', 'Two hamzas or madda?'],
  practice: [
    W(/Mini-Paradigm/, 0, { prompt: 'Complete the chain: raʾā, raʾat, ___, yarā', feedback: 'Past first person: raʾaytu.' }),
    W(/Mini-Paradigm/, 2, { prompt: 'Complete the chain: akhadha, akhadhtu, ___', feedback: 'The present pair: yaʾkhudhu.' }),
    W(/Mastery/, 2, { prompt: 'Choose “they see”.', feedback: 'The plural present is yarawna.' }),
    W(/Mastery/, 7, { prompt: 'Choose “I gave”.', feedback: 'Past first person: aʿṭaytu.' }),
  ],
  practiceLabel: 'website mini-paradigm and mastery checks',
  read: {
    title: 'A message from the trip', label: 'website reading workshop (teacher-written message)',
    text: 'مَرْحَبًا يَا أُمِّي! جِئْنَا إِلَى الْمَدِينَةِ صَبَاحًا، وَرَأَيْنَا الْمَتْحَفَ الْكَبِيرَ. أَخَذْتُ صُوَرًا كَثِيرَةً، وَأَعْطَانِي الْمُرْشِدُ خَرِيطَةً. أَكَلْنَا فِي مَطْعَمٍ صَغِيرٍ. الْآنَ أُرِيدُ أَنْ أَشْتَرِيَ هَدِيَّةً لَكِ. سَنَأْتِي إِلَى الْبَيْتِ مَسَاءً، وَسَتَرَيْنَ الصُّوَرَ!',
    glossary: [['الْمُرْشِدُ', 'the guide'], ['خَرِيطَةً', 'a map'], ['أَعْطَانِي', 'he gave me'], ['أَشْتَرِيَ', 'buy'], ['سَتَرَيْنَ', 'you (f.) will see']],
    task: 'Website: identify the subject and time of each unusual verb, and work out any unfamiliar form from context.',
    questions: [
      q('What did the group see?', ['the big museum', 'the sea', 'a match'], 'رَأَيْنَا الْمَتْحَفَ الْكَبِيرَ.'),
      q('Who gave the writer a map?', ['the guide', 'the mother', 'a friend'], 'أَعْطَانِي الْمُرْشِدُ.'),
      q('What does the writer want now?', ['to buy a gift', 'to eat', 'to go home'], 'أُرِيدُ أَنْ أَشْتَرِيَ هَدِيَّةً.'),
      q('Who will see the photos?', ['the mother', 'the guide', 'the writer'], 'Sa-tarayna = you (f.) will see.'),
    ],
    qNote: 'Teacher-written message for the website reading workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: what did you see, take, want?', source: 'website speaking workshop',
    prompts: [
      { route: 'core', ar: 'مَاذَا رَأَيْتَ فِي الْعُطْلَةِ؟' },
      { route: 'develop', ar: 'كَيْفَ جِئْتَ إِلَى الْمَدْرَسَةِ الْيَوْمَ؟ مَاذَا أَخَذْتَ مَعَكَ؟' },
      { route: 'stretch', ar: 'مَاذَا تُرِيدُ أَنْ تَفْعَلَ بَعْدَ ذَلِكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'رَأَيْتُ ______ .' },
      { route: 'develop', ar: 'جِئْتُ ______ ، وَأَخَذْتُ ______ .' },
      { route: 'stretch', ar: 'أُرِيدُ أَنْ ______ ، وَسَأَرَى ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَيْفَ جِئْتِ إِلَى الْمَدْرَسَةِ؟', en: 'How did you come to school? (to a girl)' },
      { who: 'B', ar: 'جِئْتُ بِالْحَافِلَةِ، وَأَخَذْتُ مَعِي كِتَابًا. فِي الطَّرِيقِ رَأَيْتُ صَدِيقَتِي.', en: 'I came by bus, and I took a book with me. On the way I saw my friend.' },
    ],
    notes: 'Website: answer the four questions in connected Arabic. Listening (website): distinguish jiʾtu, jāʾat, jāʾū, ajīʾu and yajīʾūna.',
  },
  write: {
    siteTask: 'Write a 100–120-word description of an event you attended or saw, using at least five unusual high-frequency verbs across two or three time frames.',
    core: { amount: '6 sentences', task: 'An event: I came, I saw, I took, I ate …', how: 'Use the chains on the we-do slide.' },
    develop: { amount: '8 sentences', task: 'Add other persons and the future.', how: 'raʾaynā · sa-arā · yajīʾu.' },
    stretch: { amount: '100–120 words', task: 'Website task with a spelling margin checklist.', how: 'hamza · madda · alif maqṣūra · subject.' },
  },
  frames: {
    core: [
      { en: 'Yesterday I came to …', ar: 'أَمْسِ جِئْتُ إِلَى ______ .' },
      { en: 'I saw …', ar: 'رَأَيْتُ ______ .' },
      { en: 'I took …', ar: 'أَخَذْتُ ______ .' },
      { en: 'I want to …', ar: 'أُرِيدُ أَنْ ______ .' },
    ],
    develop: [
      { en: 'We ate …', ar: 'أَكَلْنَا ______ .' },
      { en: 'I gave my friend …', ar: 'أَعْطَيْتُ صَدِيقِي ______ .' },
      { en: 'Tomorrow I will see …', ar: 'غَدًا سَأَرَى ______ .' },
      { en: 'My father comes …', ar: 'يَأْتِي أَبِي ______ .' },
    ],
    bank: ['رَأَيْتُ', 'رَأَيْنَا', 'أَرَى', 'سَأَرَى', 'جِئْتُ', 'جِئْنَا', 'يَأْتِي', 'أَخَذْتُ', 'آخُذُ', 'أَكَلْنَا', 'أَعْطَيْتُ', 'أُرِيدُ', 'أَرَدْتُ'],
  },
  stretchTask: {
    task: 'Website integrated production task: a 100–120-word description of an event you attended or saw.',
    checklist: ['A form of to see (raʾā).', 'A form of to come (jāʾa or atā — not mixed in one sentence).', 'A form of to take (akhadha).', 'A form of to give (aʿṭā) and to want (arāda).', 'Two or three time frames; every hamza and madda checked.'],
    phrases: [['جِئْتُ مُبَكِّرًا', 'I came early'], ['رَأَيْتُ مَعْرِضًا', 'I saw an exhibition'], ['أَخَذْتُ صُوَرًا', 'I took photos'], ['أَعْطَيْتُهُ', 'I gave him'], ['أُرِيدُ أَنْ أَعُودَ', 'I want to go back'], ['سَأَرَى', 'I will see']],
  },
  model: {
    text: 'فِي يَوْمِ السَّبْتِ جِئْتُ مَعَ أُسْرَتِي إِلَى مَعْرِضِ الْكِتَابِ. رَأَيْنَا كُتُبًا كَثِيرَةً بِلُغَاتٍ مُخْتَلِفَةٍ. أَخَذْتُ كِتَابًا عَنِ التَّارِيخِ الْإِسْلَامِيِّ، وَأَعْطَتْنِي أُمِّي مَالًا لِأَشْتَرِيَهُ. أَكَلْنَا فِي مَقْهَى الْمَعْرِضِ. أَنَا الْآنَ أَقْرَأُ الْكِتَابَ، وَأُرِيدُ أَنْ أَرْجِعَ فِي السَّنَةِ الْقَادِمَةِ. سَأَرَى كُتُبًا جَدِيدَةً بِإِذْنِ اللَّهِ!',
    en: 'On Saturday I came with my family to the book fair. We saw many books in different languages. I took a book about Islamic history, and my mother gave me money to buy it. We ate in the fair’s café. Now I am reading the book, and I want to go back next year. I will see new books, God willing!',
    find: ['see', 'come', 'take / give', 'want'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'I kept the hamza in raʾaytu.' },
    { route: 'core', text: 'I wrote jiʾtu for “I came”.' },
    { route: 'develop', text: 'I used a madda in ākhudhu / ākulu.' },
    { route: 'develop', text: 'I used two or three time frames.' },
    { route: 'stretch', text: 'I did not mix jāʾa and atā in one sentence.' },
  ],
  exit: [
    W(/Mastery/, 0, { prompt: 'Choose “I saw”.', feedback: 'Correct hamza and stem.' }),
    W(/Mastery/, 3, { prompt: 'Choose “I came”.', feedback: 'Correct stem and hamza: jiʾtu.' }),
    W(/Mastery/, 5, { prompt: 'Choose “I take”.', feedback: 'Madda: ākhudhu.' }),
  ],
  mastery: false,
  prep: {
    words: [['كَتَبْتُ', 'I wrote', '-tu'], ['كَتَبْتَ', 'you (m.) wrote', '-ta'], ['كَتَبْتِ', 'you (f.) wrote', '-ti'], ['كَتَبُوا', 'they wrote', '-ū'], ['كَتَبْنَ', 'they (f.) wrote', '-na']],
    questionEn: 'Katabtu, katabta, katabti look almost the same. What tells you who wrote?',
    questionAr: 'كَتَبْتُ · كَتَبْتَ · كَتَبْتِ · ______',
    homework: {
      core: 'Learn the five chains by heart.',
      develop: 'Correct a message with hamza, madda and stem errors.',
      stretch: 'Website task: an event you attended or saw.',
    },
    wordsSource: 'The five forms prepare GM-V-04 (website Verbs lesson 4: the past tense).',
  },
  remember: 'Remember: raʾā · raʾaytu · yarā · jāʾa · jiʾtu · yajīʾu · atā · yaʾtī · akhadha · ākhudhu · khudh · learn chains, check hamza and madda.',
});

module.exports = { meta, slides };
