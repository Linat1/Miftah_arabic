'use strict';
/* GM-V-08 · Negating Past and Present — website: Mastery & Revision › Grammar › Verbs › Lesson 8 (four-part negation map: mā + past ·
 * lam + jussive · lā + present · lan + subjunctive; past negation with mā and lam; present negation with lā; statement lā taktubu vs
 * prohibition lā taktub; visible jussive changes — sukūn, nūn drops, final weak letter drops; clinic). Quizzes are the website’s (Entry,
 * Map, Past, Present, Jussive Change, Mastery) plus the website game; one map item with an “as future plan” option is skipped. Sorter,
 * I-do steps, frames, reading and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__07-verbs__grammar-mastery-08-negation';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-V-08', fileTitle: 'Negation', title: 'Negating Past and Present', arabic: 'نَفْيُ الْمَاضِي وَالْمُضَارِعِ',
  focus: 'English has one “not”; Arabic chooses by time: mā + past (did not), lam + jussive (did not), lā + present (does not), lan + subjunctive (will not). After lam the verb takes sukūn, drops its nūn, or loses a final weak letter.',
  icon: 'FaBan',
});

const slides = G.gmLesson({
  code: 'GM-V-08', site: KEY,
  support: `• Core: مَا + past (مَا ذَهَبْتُ) and لَا + present (لَا أَذْهَبُ). Develop: لَمْ + jussive (لَمْ أَذْهَبْ · لَمْ يَكْتُبُوا) and the four-part map with لَنْ. Stretch: weak jussives (لَمْ يَمْشِ · لَمْ يَدْعُ · لَمْ يَرَ) and statement vs prohibition (لَا تَكْتُبُ / لَا تَكْتُبْ).
• Website point: mā + past and lam + jussive BOTH mean “did not”. Lam looks like a present verb but means past — warn students.
• Weak classes: start with the time line (yesterday · every day · tomorrow) and one particle each.`,
  teach: 'Negation map; mā and lam; lā; jussive changes.',
  wedo: 'Choose the particle; sort by time; repair.',
  next: { nextCode: 'GM-V-09', nextTitle: 'Basic Conditionals', nextAr: 'أَسَالِيبُ الشَّرْطِ الْأَسَاسِيَّةُ' },
  doNow: {
    pick: [0, 1, 2, 3, 5],
    fb: { 0: 'Mā can negate the past verb directly.', 1: 'Lam + jussive present also means “did not”.', 2: 'Lā + present negates a habit.', 3: 'The five-verb nūn drops after lam.', 4: 'Lan belongs to the future system (GM-V-06).' },
    keyIdea: { text: 'Pick the particle from the TIME: did not = mā + past or lam + jussive · does not = lā + present · will not = lan.', ar: '{k|مَا ذَهَبْتُ} · {k|لَمْ أَذْهَبْ} ‖ {e|لَا أَذْهَبُ} · {e|لَنْ أَذْهَبَ}' },
    retrieves: 'The website Entry Check (questions 1–4 and 6) — the GM-V-07 prep words mā, lam and lā, and lan from GM-V-06.',
  },
  objectives: ['Negate the past with mā and with lam.', 'Negate the present with lā.', 'Make the jussive changes after lam.', 'Tell a negative statement from a negative command.'],
  routes: {
    core: ['I say I did not … with mā.', 'I say I do not … with lā.'],
    develop: ['I say I did not … with lam + sukūn.', 'I drop the nūn after lam.'],
    stretch: ['I shorten weak verbs after lam.', 'I explain lā taktubu vs lā taktub.'],
  },
  terms: {
    items: [
      { ar: 'النَّفْيُ', en: 'negation', note: 'مَا · لَمْ · لَا · لَنْ' },
      { ar: 'مَا', en: 'did not (+ past)', note: 'مَا ذَهَبْتُ' },
      { ar: 'لَمْ', en: 'did not (+ jussive)', note: 'لَمْ أَذْهَبْ' },
      { ar: 'لَا', en: 'does not (+ present)', note: 'لَا أَذْهَبُ' },
      { ar: 'الْمَجْزُومُ', en: 'jussive (after lam)', note: 'أَذْهَبْ' },
      { ar: 'أَبَدًا', en: 'never / at all', note: 'لَا أُدَخِّنُ أَبَدًا' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · a four-part negation map (website table)', title: 'One English “not” — four Arabic systems', ar: 'خَرِيطَةُ النَّفْيِ', ltr: true,
      cols: [{ label: 'Structure', w: 3.0 }, { label: 'Model (website)', w: 3.6, size: 26 }, { label: 'Meaning', w: 2.6 }, { label: 'Verb form', w: 3.13 }],
      rows: [
        { core: true, cells: ['mā + past', 'مَا ذَهَبْتُ.', 'I did not go.', 'normal past'] },
        { cells: ['lam + jussive', 'لَمْ أَذْهَبْ.', 'I did not go.', 'present shape, sukūn'] },
        { core: true, cells: ['lā + present', 'لَا أَذْهَبُ عَادَةً.', 'I don’t usually go.', 'normal present'] },
        { cells: ['lan + subjunctive', 'لَنْ أَذْهَبَ.', 'I will not go.', 'present shape, fatḥa'] },
      ],
      foot: 'Website: choose the particle from the intended time frame and sentence type — not from the English word “not”.',
      notes: 'PART 1 (3 min) — website “A four-part negation map”. Draw a timeline: yesterday (mā / lam) · every day (lā) · tomorrow (lan).',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 2 · past with mā and lam · present with lā (website)', title: 'Two ways to say “did not”', ar: 'مَا وَلَمْ وَلَا', ltr: true,
      cols: [{ label: 'Use', w: 3.0 }, { label: 'Arabic (website)', w: 5.2, size: 24 }, { label: 'English', w: 4.13 }],
      rows: [
        { core: true, cells: ['mā + past', 'مَا زُرْنَا الْمَتْحَفَ أَمْسِ.', 'We did not visit the museum yesterday.'] },
        { cells: ['lam + jussive', 'لَمْ نَزُرِ الْمَتْحَفَ أَمْسِ.', 'We did not visit the museum yesterday.'] },
        { core: true, cells: ['habit', 'لَا أَشْرَبُ الْقَهْوَةَ.', 'I do not drink coffee.'] },
        { cells: ['current refusal', 'لَا أُرِيدُ أَنْ أَذْهَبَ الْآنَ.', 'I do not want to go now.'] },
        { cells: ['general fact', 'لَا تَطِيرُ الْأَسْمَاكُ.', 'Fish do not fly.'] },
        { cells: ['statement vs command', 'لَا تَكْتُبُ · لَا تَكْتُبْ!', 'you do not write · don’t write!'] },
      ],
      foot: 'Website: both mā and lam are standard; lam is very common in formal written Arabic. Lā taktubu (u) is a statement; lā taktub (sukūn) is a command.',
      notes: 'PART 2 (4 min) — website “Past negation” and “Present negation with lā”. Stretch: lam nazuri — the long ū of nazūru shortens in the jussive.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · visible jussive changes after lam (website table) · Develop / Stretch', title: 'What lam does to the end of the verb', ar: 'تَغَيُّرَاتُ الْجَزْمِ بَعْدَ «لَمْ»', ltr: true,
      cols: [{ label: 'Positive', w: 3.0, size: 26 }, { label: 'After lam', w: 3.4, size: 26 }, { label: 'What changes', w: 5.93 }],
      rows: [
        { core: true, cells: ['يَكْتُبُ', 'لَمْ يَكْتُبْ', 'final ḍamma → sukūn'] },
        { core: true, cells: ['يَكْتُبُونَ', 'لَمْ يَكْتُبُوا', 'nūn drops (+ silent alif)'] },
        { cells: ['تَكْتُبِينَ', 'لَمْ تَكْتُبِي', 'nūn drops'] },
        { cells: ['يَمْشِي', 'لَمْ يَمْشِ', 'final yāʾ drops'] },
        { cells: ['يَدْعُو', 'لَمْ يَدْعُ', 'final wāw drops'] },
        { cells: ['يَرَى', 'لَمْ يَرَ', 'final alif drops'] },
      ],
      foot: 'Website stretch focus: weak verbs make the jussive especially visible — learn the pairs yamshī / lam yamshi, yadʿū / lam yadʿu, yarā / lam yara.',
      notes: 'PART 3 (3 min) — website “Visible jussive changes after lam”. Same changes as after prohibitive lā (GM-V-07).',
    },
  ],
  quick: [
    W(/Negation Map/, 0, { prompt: 'Which negates a completed past action?', feedback: 'Mā + past.' }),
    W(/Negation Map/, 1, { prompt: 'Which is a past negative with the jussive?', feedback: 'Lam + jussive.' }),
    W(/Negation Map/, 2, { prompt: 'Which negates a present habit?', feedback: 'Lā + present.' }),
    W(/Past Negation Check/, 1, { prompt: '“She did not arrive” with lam', feedback: 'Jussive present form: lam taṣil.' }),
  ],
  quickNote: 'website Negation Map and Past Negation checks.',
  ido: {
    title: 'Watch me choose the particle from the time',
    steps: [
      { head: 'Last week', ar: 'مَا ذَهَبْتُ', think: 'Past → mā + past.' },
      { head: 'Last week', ar: 'لَمْ أَلْعَبْ', think: 'Or lam + sukūn.' },
      { head: 'Every day', ar: 'لَا أَتَدَرَّبُ', think: 'Habit → lā.' },
      { head: 'Next week', ar: 'لَنْ أَتَوَقَّفَ', think: 'Future → lan.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'PAST', e: 'PRESENT / FUTURE' },
    model: 'فِي الْأُسْبُوعِ الْمَاضِي {k|مَا ذَهَبْتُ} إِلَى النَّادِي، وَ{k|لَمْ أَلْعَبْ} كُرَةَ الْقَدَمِ. أَنَا {e|لَا أَتَدَرَّبُ} كُلَّ يَوْمٍ، وَلَكِنَّنِي {e|لَنْ أَتَوَقَّفَ} عَنِ الرِّيَاضَةِ.',
    modelEn: 'Last week I did not go to the club, and I did not play football. I do not train every day, but I will not stop doing sport.',
    notes: 'Website model. Ask: which two verbs mean the same time? (mā dhahabtu and lam alʿab — both past).',
  },
  models: [
    { ar: 'مَا فَهِمْتُ السُّؤَالَ.', en: 'I did not understand the question.', tip: 'mā + past.' },
    { ar: 'لَمْ يَأْتُوا إِلَى الدَّرْسِ.', en: 'They did not come to the lesson.', tip: 'Nūn drops.' },
    { ar: 'لَا تَنْبُتُ النَّبَاتَاتُ بِلَا مَاءٍ.', en: 'Plants do not grow without water.', tip: 'General fact.' },
    { ar: 'لَمْ أَرَ صَدِيقِي مُنْذُ شَهْرٍ.', en: 'I have not seen my friend for a month.', tip: 'Weak jussive.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · link time, particle and mood (website game) · say it aloud', title: 'Which “not” fits?', ar: 'اِخْتَرْ أَدَاةَ النَّفْيِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'English', w: 3.8 }, { label: 'Arabic', w: 4.4, size: 24 }, { label: 'Clue', w: 4.13 }],
      rows: [
        { core: true, cells: ['I did not travel yesterday.', 'مَا سَافَرْتُ أَمْسِ.', 'mā + past'] },
        { cells: ['I did not travel yesterday.', 'لَمْ أُسَافِرْ أَمْسِ.', 'lam + sukūn'] },
        { core: true, cells: ['I do not travel often.', 'لَا أُسَافِرُ غَالِبًا.', 'lā + present'] },
        { core: true, cells: ['I will not travel tomorrow.', 'لَنْ أُسَافِرَ غَدًا.', 'lan + fatḥa'] },
        { cells: ['They did not write.', 'لَمْ يَكْتُبُوا.', 'nūn drops'] },
        { cells: ['He did not walk.', 'لَمْ يَمْشِ.', 'yāʾ drops'] },
      ],
      foot: 'Website game: link the time, the particle and the mood.',
      notes: 'WE DO (3 min) — website game items. Cover column 2.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · which time is negated?', title: 'Did not, does not, or will not?', ar: 'مَاضٍ أَمْ حَاضِرٌ أَمْ مُسْتَقْبَلٌ؟',
      categories: ['Did not', 'Does not', 'Will not'],
      items: [['مَا كَتَبْتُ', 0], ['لَمْ يَأْكُلْ', 0], ['لَمْ يَرَ', 0], ['لَا أَشْرَبُ', 1], ['هِيَ لَا تَذْهَبُ', 1], ['لَا تَطِيرُ', 1], ['لَنْ نَتَأَخَّرَ', 2], ['لَنْ يَكْتُبُوا', 2]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type 1, 2 or 3. Trap: lam + a present shape = did not.',
    },
  ],
  mistakes: [
    { wrong: 'لَا ذَهَبْتُ أَمْسِ', right: 'مَا ذَهَبْتُ أَمْسِ', why: 'Use mā with a past verb, or lam + jussive (website clinic).' },
    { wrong: 'لَمْ يَكْتُبُونَ', right: 'لَمْ يَكْتُبُوا', why: 'The nūn drops after lam (website clinic).' },
    { wrong: 'هُوَ لَا يَكْتُبْ', right: 'هُوَ لَا يَكْتُبُ', why: 'A statement stays indicative; sukūn suggests a command (website clinic).' },
  ],
  hints: ['Lā with a past verb?', 'Nūn after lam?', 'Statement or command?'],
  practice: [
    W(/Past Negation Check/, 2, { prompt: '“They did not travel” with lam', feedback: 'The nūn drops.' }),
    W(/Present Negation Check/, 0, { prompt: 'Statement: “He does not play.”', feedback: 'Indicative present statement.' }),
    W(/Jussive Change/, 0, { prompt: '“He did not walk”', feedback: 'Final weak jussive: the yāʾ drops.' }),
    W(/Jussive Change/, 2, { prompt: '“He did not see”', feedback: 'Jussive of yarā: lam yara.' }),
  ],
  practiceLabel: 'website Past, Present and Jussive Change checks',
  read: {
    title: 'A difficult day — my diary', label: 'website reading workshop (teacher-written diary)',
    text: 'يَوْمُ الْأَحَدِ: كَانَ يَوْمًا صَعْبًا! مَا سَمِعْتُ الْمُنَبِّهَ، وَلَمْ أَسْتَيْقِظْ فِي الْوَقْتِ. لَمْ آكُلِ الْفَطُورَ، وَلَمْ أَرَ أُخْتِي قَبْلَ الْمَدْرَسَةِ. أَنَا عَادَةً لَا أَتَأَخَّرُ، وَلَا أَنْسَى وَاجِبِي، وَلَكِنِ الْيَوْمَ نَسِيتُهُ! أَصْدِقَائِي لَمْ يَضْحَكُوا، بَلْ سَاعَدُونِي. مِنَ الْآنَ لَنْ أَسْهَرَ لَيْلًا.',
    glossary: [['الْمُنَبِّهَ', 'the alarm clock'], ['فِي الْوَقْتِ', 'on time'], ['نَسِيتُهُ', 'I forgot it'], ['يَضْحَكُوا', 'laugh'], ['أَسْهَرَ', 'stay up late']],
    task: 'Website: classify every negative sentence by time frame and particle, and explain the verb form.',
    questions: [
      q('Which two verbs negate the past?', ['مَا سَمِعْتُ · لَمْ أَسْتَيْقِظْ', 'لَا أَتَأَخَّرُ · لَا أَنْسَى', 'لَنْ أَسْهَرَ · لَا أَنْسَى'], 'Mā + past and lam + jussive.'),
      q('What does the writer usually NOT do?', ['arrive late', 'eat breakfast', 'see her sister'], 'Lā ataʾakhkharu — a habit.'),
      q('Why is it lam ara and not lam arā?', ['the final alif drops in the jussive', 'it is future', 'it is a command'], 'Weak jussive.'),
      q('What will the writer not do from now on?', ['stay up late at night', 'forget homework', 'go to school'], 'Lan ashara laylan.'),
    ],
    qNote: 'Teacher-written diary for the website reading workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: four questions, four “nots”', source: 'website speaking workshop',
    prompts: [
      { route: 'core', ar: 'هَلْ ذَهَبْتَ إِلَى السُّوقِ أَمْسِ؟ هَلْ تَشْرَبُ الْقَهْوَةَ؟' },
      { route: 'develop', ar: 'هَلْ زُرْتَ مَكَانًا جَدِيدًا هَذَا الشَّهْرَ؟' },
      { route: 'stretch', ar: 'مَا الَّذِي لَمْ تَفْعَلْهُ، وَلَا تَفْعَلُهُ، وَلَنْ تَفْعَلَهُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَمْسِ مَا ______ ، وَعَادَةً لَا ______ .' },
      { route: 'develop', ar: 'لَا، لَمْ ______ لِأَنَّنِي ______ .' },
      { route: 'stretch', ar: 'لَمْ ______ ، وَلَا ______ ، وَلَنْ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'هَلْ شَاهَدْتِ الْمُبَارَاةَ أَمْسِ؟', en: 'Did you watch the match yesterday? (to a girl)' },
      { who: 'B', ar: 'لَا، لَمْ أُشَاهِدْهَا، لِأَنَّنِي لَا أُحِبُّ كُرَةَ الْقَدَمِ. وَلَنْ أُشَاهِدَ الْمُبَارَاةَ الْقَادِمَةَ أَيْضًا!', en: 'No, I didn’t watch it, because I don’t like football. And I won’t watch the next match either!' },
    ],
    notes: 'Website: answer four questions with a different negative system each time. Listening (website): lam yaktub / lā yaktubu / lan yaktuba — identify the time.',
  },
  write: {
    siteTask: 'Write a 120–140-word reflection comparing what you did not do last week, what you do not usually do, and what you will not do next week.',
    core: { amount: '6 sentences', task: 'Three things I did not do, three I do not do.', how: 'mā + past · lā + present.' },
    develop: { amount: '8 sentences', task: 'Add lam and lan sentences.', how: 'Sukūn after lam; fatḥa after lan.' },
    stretch: { amount: '120–140 words', task: 'Website reflection: last week, usually, next week.', how: 'One weak jussive and one five-verb form.' },
  },
  frames: {
    core: [
      { en: 'Yesterday I did not …', ar: 'أَمْسِ مَا ______ .' },
      { en: 'I do not usually …', ar: 'عَادَةً لَا ______ .' },
      { en: 'My brother does not …', ar: 'أَخِي لَا ______ .' },
      { en: 'I did not understand …', ar: 'مَا فَهِمْتُ ______ .' },
    ],
    develop: [
      { en: 'Last week I did not …', ar: 'فِي الْأُسْبُوعِ الْمَاضِي لَمْ ______ .' },
      { en: 'My friends did not …', ar: 'أَصْدِقَائِي لَمْ ______ .' },
      { en: 'Next week I will not …', ar: 'فِي الْأُسْبُوعِ الْقَادِمِ لَنْ ______ .' },
      { en: 'I have not seen … for …', ar: 'لَمْ أَرَ ______ مُنْذُ ______ .' },
    ],
    bank: ['مَا ذَهَبْتُ', 'مَا فَهِمْتُ', 'لَمْ أَلْعَبْ', 'لَمْ أَرَ', 'لَمْ يَأْتُوا', 'لَا أَشْرَبُ', 'لَا أُحِبُّ', 'لَا أَتَأَخَّرُ', 'لَنْ أَنْسَى', 'أَمْسِ', 'عَادَةً', 'أَبَدًا', 'مُنْذُ'],
  },
  stretchTask: {
    task: 'Website integrated production task: a 120–140-word reflection — last week, usually, next week.',
    checklist: ['mā + past at least twice.', 'lam + jussive at least twice.', 'lā + present at least twice.', 'lan + subjunctive at least twice.', 'One weak jussive and one five-verb form.'],
    phrases: [['فِي الْأُسْبُوعِ الْمَاضِي', 'last week'], ['عَادَةً', 'usually'], ['أَبَدًا', 'never'], ['لَمْ … بَعْدُ', 'not … yet'], ['مُنْذُ', 'since / for'], ['بَلْ', 'but rather']],
  },
  model: {
    text: 'فِي الْأُسْبُوعِ الْمَاضِي كُنْتُ مَرِيضًا، فَمَا ذَهَبْتُ إِلَى الْمَدْرَسَةِ، وَلَمْ أَخْرُجْ مِنَ الْبَيْتِ. لَمْ أَرَ أَصْدِقَائِي، وَهُمْ لَمْ يَزُورُونِي لِأَنَّهُمْ كَانُوا مَشْغُولِينَ. مَا قَرَأْتُ كَثِيرًا. أَنَا عَادَةً لَا أَنَامُ فِي النَّهَارِ، وَلَا أُشَاهِدُ التِّلْفَازَ كَثِيرًا، وَلَكِنِّي كُنْتُ مُتْعَبًا جِدًّا. فِي الْأُسْبُوعِ الْقَادِمِ لَنْ أَتَأَخَّرَ فِي دُرُوسِي، وَلَنْ أَنْسَى أَنْ أَشْرَبَ الْمَاءَ.',
    en: 'Last week I was ill, so I did not go to school, and I did not leave the house. I did not see my friends, and they did not visit me because they were busy. I did not read much. I do not usually sleep in the daytime, and I do not watch TV much, but I was very tired. Next week I will not fall behind in my lessons, and I will not forget to drink water.',
    find: ['mā + past', 'lam + jussive', 'lā + present', 'lan + subjunctive'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'mā goes with a past verb; lā with a present verb.' },
    { route: 'core', text: 'I never used lā with a past verb.' },
    { route: 'develop', text: 'After lam my verb has sukūn or no nūn.' },
    { route: 'develop', text: 'After lan my verb has fatḥa.' },
    { route: 'stretch', text: 'My weak verbs are shortened after lam.' },
  ],
  exit: [
    W(/Negation Mastery/, 1, { prompt: 'Past with lam: “I did not write”', feedback: 'Jussive: sukūn.' }),
    W(/Negation Mastery/, 5, { prompt: '“You (f.) did not write”', feedback: 'Jussive five-verb form: no nūn.' }),
    W(/Negation Mastery/, 8, { prompt: 'Which is a present statement?', feedback: 'Indicative: lā yalʿabu.' }),
  ],
  mastery: false,
  prep: {
    words: [['إِذَا', 'if / when (likely)', 'إِذَا دَرَسْتَ نَجَحْتَ'], ['إِنْ', 'if', 'إِنْ تَدْرُسْ تَنْجَحْ'], ['لَوْ', 'if (unreal)', 'لَوْ كُنْتُ غَنِيًّا …'], ['فَـ', 'then (linking)', 'فَسَأَذْهَبُ'], ['نَجَحَ', 'to succeed', 'نَجَحْتُ']],
    questionEn: 'How would you say “If you study, you will succeed” — using a word above?',
    questionAr: '______ دَرَسْتَ نَجَحْتَ.',
    homework: {
      core: 'Write five “did not” sentences with mā and five “does not” with lā.',
      develop: 'Rewrite the five mā sentences with lam + jussive.',
      stretch: 'Website reflection: last week, usually, next week.',
    },
    wordsSource: 'The five words prepare GM-V-09 (website Verbs lesson 9: basic conditionals).',
  },
  remember: 'Remember: did not = mā + past or lam + jussive · does not = lā + present · will not = lan + fatḥa · after lam: sukūn, nūn drops, weak letter drops.',
});

module.exports = { meta, slides };
