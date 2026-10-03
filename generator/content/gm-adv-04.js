'use strict';
/* GM-ADV-04 · Common Adverbial Phrases for Fluency — website: Mastery & Revision › Grammar › Adverbs › Lesson 4 (learn whole chunks;
 * frequency كُلَّ يَوْمٍ · كُلَّ صَبَاحٍ · مَرَّةً / مَرَّتَيْنِ فِي الْأُسْبُوعِ · مِنْ وَقْتٍ لِآخَرَ — كُلَّ is accusative, the noun genitive;
 * parts of the day and time horizon فِي الصَّبَاحِ · بَعْدَ الظُّهْرِ · فِي الْوَقْتِ الْحَالِيِّ · حَتَّى الْآنَ · فِي وَقْتٍ لَاحِقٍ · فِي الْمُسْتَقْبَلِ;
 * sequence فِي الْبِدَايَةِ · أَوَّلًا · ثُمَّ · بَعْدَ ذَلِكَ · فِي الْوَقْتِ نَفْسِهِ · أَخِيرًا — avoid the “ثُمَّ chain”; place and direction
 * فِي الدَّاخِلِ / الْخَارِجِ · عَلَى الْيَمِينِ / الْيَسَارِ · بِالْقُرْبِ مِنْ · بَعِيدًا عَنْ). Quizzes are the website’s (Entry, Frequency, Sequence,
 * Place and Mastery checks); Arabic-in-English feedback is rewritten in English. The website game (unvowelled sentences) is not used.
 * Sorter, answer ladder, repair, reading questions, frames and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__05-adverbs__grammar-mastery-04-common-phrases';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-ADV-04', fileTitle: 'Adverbial_Phrases_for_Fluency', title: 'Common Adverbial Phrases for Fluency', arabic: 'عِبَارَاتٌ ظَرْفِيَّةٌ شَائِعَةٌ لِلطَّلَاقَةِ',
  focus: 'Fluent speakers retrieve ready-made chunks: every day, twice a week, after that, finally, near the school. Learn each phrase whole, then plug it into your sentences to extend, organise and connect your answers.',
  icon: 'FaComments',
});

const slides = G.gmLesson({
  code: 'GM-ADV-04', site: KEY,
  support: `• Core: frequency (كُلَّ يَوْمٍ · مَرَّتَيْنِ فِي الْأُسْبُوعِ), time of day (فِي الصَّبَاحِ · فِي الْمَسَاءِ) and future (فِي الْمُسْتَقْبَلِ). Develop: sequence links (فِي الْبِدَايَةِ · بَعْدَ ذَلِكَ · أَخِيرًا) without the “ثُمَّ chain”. Stretch: layer frequency, time, place and sequence in sustained speaking and writing; direction chunks for role plays.
• This is the final Adverbs lesson: the website calls it the “package mastery”. Return to the final check in 3–7 days (spaced retrieval).
• Exam value: these chunks turn a one-line IGCSE answer into a developed one — model the “extended answer ladder” explicitly.`,
  teach: 'Frequency; time of day and horizon; sequence; place and direction.',
  wedo: 'Sort the chunks; climb the answer ladder.',
  next: { nextCode: 'GM-PRO-01', nextTitle: 'Subject Pronouns', nextAr: 'ضَمَائِرُ الرَّفْعِ الْمُنْفَصِلَةُ' },
  doNow: {
    fb: {
      0: 'The fixed phrase is kulla yawmin.',
      1: 'Fī l-mustaqbal is a set future phrase.',
      2: 'This phrase places the action in the morning.',
      3: 'Baʿda dhālika moves the story forward.',
      4: 'It expresses occasional frequency.',
    },
    keyIdea: { text: 'Learn useful phrases as WHOLE chunks — then you can say more, faster, and organise your answer.', ar: '{k|كُلَّ يَوْمٍ} · {e|بَعْدَ ذَلِكَ} · {k|فِي الْمُسْتَقْبَلِ}' },
    retrieves: 'The website Entry Check (questions 1–5) — it uses the sequence words prepared at the end of GM-ADV-03.',
  },
  objectives: ['Use frequency and routine chunks accurately.', 'Use time-of-day and time-horizon phrases.', 'Sequence events with varied links.', 'Give directions with place chunks.'],
  routes: {
    core: ['I say every day, twice a week, in the morning.', 'I say in the future.'],
    develop: ['I sequence: at first, after that, finally.', 'I avoid repeating thumma.'],
    stretch: ['I layer four kinds of chunk in one answer.', 'I give directions: on the right, near …'],
  },
  terms: {
    items: [
      { ar: 'التَّكْرَارُ', en: 'frequency (how often?)', note: 'كُلَّ يَوْمٍ' },
      { ar: 'التَّرْتِيبُ', en: 'sequence', note: 'أَوَّلًا · أَخِيرًا' },
      { ar: 'الِاتِّجَاهُ', en: 'direction', note: 'عَلَى الْيَمِينِ' },
      { ar: 'كَمْ مَرَّةً؟', en: 'how often?', note: 'مَرَّةً فِي الْأُسْبُوعِ' },
      { ar: 'عِبَارَةٌ جَاهِزَةٌ', en: 'ready-made chunk', note: 'learn it whole' },
      { ar: 'الطَّلَاقَةُ', en: 'fluency', note: 'speed and flow' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · frequency and routine chunks (website table)', title: 'How often?', ar: 'عِبَارَاتُ التَّكْرَارِ', ltr: true,
      cols: [{ label: 'Phrase', w: 3.8, size: 22 }, { label: 'Meaning', w: 3.0 }, { label: 'Model (website)', w: 5.53, size: 22 }],
      rows: [
        { core: true, cells: ['كُلَّ يَوْمٍ', 'every day', 'أَقْرَأُ كُلَّ يَوْمٍ.'] },
        { core: true, cells: ['كُلَّ صَبَاحٍ · كُلَّ مَسَاءٍ', 'every morning · evening', 'أَمْشِي كُلَّ صَبَاحٍ.'] },
        { core: true, cells: ['مَرَّةً فِي الْأُسْبُوعِ', 'once a week', 'أَسْبَحُ مَرَّةً فِي الْأُسْبُوعِ.'] },
        { core: true, cells: ['مَرَّتَيْنِ فِي الْأُسْبُوعِ', 'twice a week', 'أَتَدَرَّبُ مَرَّتَيْنِ فِي الْأُسْبُوعِ.'] },
        { cells: ['مَرَّةً فِي الشَّهْرِ', 'once a month', 'نَزُورُ جَدِّي مَرَّةً فِي الشَّهْرِ.'] },
        { cells: ['مِنْ وَقْتٍ لِآخَرَ', 'from time to time', 'أَزُورُهُمْ مِنْ وَقْتٍ لِآخَرَ.'] },
      ],
      foot: 'Website: in kulla yawmin, kulla is accusative and the noun after it is genitive. Accurate use matters more than naming the case.',
      notes: 'PART 1 (3 min) — website “Frequency and routine chunks”. Chant each chunk with its meaning; then “kam marratan?” questions round the class.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · parts of the day and time horizon (website)', title: 'When in the day — and when in life?', ar: 'أَوْقَاتُ الْيَوْمِ وَالْأُفُقُ الزَّمَنِيُّ', ltr: true,
      cols: [{ label: 'Within the day', w: 3.4, size: 22 }, { label: 'Meaning', w: 2.8 }, { label: 'Longer period', w: 3.4, size: 22 }, { label: 'Meaning', w: 2.73 }],
      rows: [
        { core: true, cells: ['فِي الصَّبَاحِ', 'in the morning', 'فِي الْوَقْتِ الْحَالِيِّ', 'currently'] },
        { core: true, cells: ['بَعْدَ الظُّهْرِ', 'in the afternoon', 'حَتَّى الْآنَ', 'until now'] },
        { core: true, cells: ['فِي الْمَسَاءِ', 'in the evening', 'فِي وَقْتٍ لَاحِقٍ', 'later'] },
        { cells: ['فِي اللَّيْلِ', 'at night', 'فِي الْمُسْتَقْبَلِ', 'in the future'] },
        { cells: ['عِنْدَ مُنْتَصَفِ اللَّيْلِ', 'at midnight', 'يَوْمًا مَا', 'one day'] },
      ],
      foot: 'Website model: currently I study Arabic; in the future I will use it in my work.',
      notes: 'PART 2 (3 min) — website “Parts of the day and time horizon”. Model the website pair: فِي الْوَقْتِ الْحَالِيِّ أَدْرُسُ الْعَرَبِيَّةَ · فِي الْمُسْتَقْبَلِ سَأَسْتَعْمِلُهَا فِي عَمَلِي.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · sequence links and place chunks (website) · Develop / Stretch', title: 'Organise the story — and give directions', ar: 'التَّرْتِيبُ وَالِاتِّجَاهَاتُ', ltr: true,
      cols: [{ label: 'Stage / use', w: 3.0 }, { label: 'Useful phrases (website)', w: 5.6, size: 22 }, { label: 'Function', w: 3.73 }],
      rows: [
        { core: true, cells: ['opening', 'فِي الْبِدَايَةِ · أَوَّلًا', 'introduce the first stage'] },
        { core: true, cells: ['continuation', 'ثُمَّ · بَعْدَ ذَلِكَ · فِي وَقْتٍ لَاحِقٍ', 'move forward'] },
        { cells: ['simultaneous', 'فِي الْوَقْتِ نَفْسِهِ', 'two things together'] },
        { core: true, cells: ['ending', 'أَخِيرًا · فِي النِّهَايَةِ', 'close the sequence'] },
        { cells: ['position', 'فِي الدَّاخِلِ · فِي الْخَارِجِ · عَلَى الْيَمِينِ · عَلَى الْيَسَارِ', 'where exactly'] },
        { cells: ['distance', 'بِالْقُرْبِ مِنْ · بَعِيدًا عَنْ', 'near · far from'] },
      ],
      foot: 'Website warning: avoid the “thumma chain” — repeating thumma before every sentence sounds mechanical. Vary the links.',
      notes: 'PART 3 (3 min) — website “Sequence and fluency links” and “Place and direction chunks”. Directions are especially useful for role plays (travel, town, school).',
    },
  ],
  quick: [
    W(/Frequency/, 0, { feedback: 'The dual marratayni in this fixed phrase.' }),
    W(/Frequency/, 3, { feedback: 'A common frequency chunk.' }),
    W(/Sequence/, 0, { feedback: 'Fī l-bidāya introduces the first stage.' }),
    W(/Place Phrase/, 0, { feedback: 'Bi-l-qurbi min expresses “near”.' }),
  ],
  quickNote: 'website Frequency, Sequence and Place checks.',
  ido: {
    title: 'Watch me climb the answer ladder',
    steps: [
      { head: 'Basic', ar: 'أَلْعَبُ كُرَةَ الْقَدَمِ.', think: 'One short answer.' },
      { head: '+ Frequency', ar: 'مَرَّتَيْنِ فِي الْأُسْبُوعِ', think: 'How often?' },
      { head: '+ Time / place', ar: 'بَعْدَ الظُّهْرِ بِالْقُرْبِ مِنْ بَيْتِي', think: 'When? Where?' },
      { head: '+ Future', ar: 'فِي الْمُسْتَقْبَلِ سَأَلْعَبُ فِي فَرِيقٍ', think: 'Develop forward.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'CHUNK', e: 'DEVELOPMENT' },
    model: 'أَلْعَبُ كُرَةَ الْقَدَمِ {k|مَرَّتَيْنِ فِي الْأُسْبُوعِ} {k|بَعْدَ الظُّهْرِ} فِي حَدِيقَةٍ {k|بِالْقُرْبِ مِنْ} بَيْتِي، وَ{e|فِي الْمُسْتَقْبَلِ} سَأَلْعَبُ فِي فَرِيقِ الْمَدْرَسَةِ.',
    modelEn: 'I play football twice a week in the afternoon in a park near my house, and in the future I will play in the school team.',
    notes: 'Website “extended answer ladder”: basic answer → add frequency / time → add sequence or future. Build it rung by rung on screen.',
  },
  models: [
    { ar: 'أَسْتَيْقِظُ كُلَّ صَبَاحٍ فِي السَّاعَةِ السَّابِعَةِ.', en: 'I wake up every morning at seven.', tip: 'Frequency + time.' },
    { ar: 'فِي الْبِدَايَةِ أَغْسِلُ وَجْهِي، وَبَعْدَ ذَلِكَ أُصَلِّي.', en: 'First I wash my face, and after that I pray.', tip: 'Sequence.' },
    { ar: 'الْمَكْتَبَةُ عَلَى الْيَسَارِ بِالْقُرْبِ مِنَ الْمَدْرَسَةِ.', en: 'The library is on the left near the school.', tip: 'Website: directions.' },
    { ar: 'فِي وَقْتٍ لَاحِقٍ سَأُرْسِلُ الرِّسَالَةَ.', en: 'Later, I will send the message.', tip: 'Website game: later + future.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort the chunks', title: 'What does each chunk do?', ar: 'صَنِّفِ الْعِبَارَاتِ',
      categories: ['Frequency', 'Time', 'Sequence', 'Place'],
      items: [['مَرَّةً فِي الشَّهْرِ', 0], ['بَعْدَ الظُّهْرِ', 1], ['أَخِيرًا', 2], ['عَلَى الْيَمِينِ', 3], ['كُلَّ مَسَاءٍ', 0], ['يَوْمًا مَا', 1], ['فِي الْوَقْتِ نَفْسِهِ', 2], ['بَعِيدًا عَنِ الْبَيْتِ', 3]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website reading task (“identify frequency, time-of-day, place and sequence phrases”) as a sort. Students type 1–4.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · chunk audit (website) · say it aloud', title: 'Break the “thumma chain”', ar: 'نَوِّعِ الرَّوَابِطَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Step', w: 2.2 }, { label: 'Thumma chain (weak)', w: 4.8, size: 22 }, { label: 'Varied (better)', w: 5.33, size: 22 }],
      rows: [
        { core: true, cells: ['1', 'ثُمَّ اسْتَيْقَظْتُ.', 'فِي الْبِدَايَةِ اسْتَيْقَظْتُ.'] },
        { core: true, cells: ['2', 'ثُمَّ أَكَلْتُ.', 'بَعْدَ ذَلِكَ أَكَلْتُ الْفَطُورَ.'] },
        { core: true, cells: ['3', 'ثُمَّ ذَهَبْتُ.', 'ثُمَّ ذَهَبْتُ إِلَى الْمَدْرَسَةِ.'] },
        { cells: ['4', 'ثُمَّ رَجَعْتُ.', 'أَخِيرًا رَجَعْتُ إِلَى الْبَيْتِ.'] },
      ],
      foot: 'Website: thumma is fine — once. Vary the links, and only use a phrase when it adds meaning.',
      notes: 'WE DO (2 min) — website “chunk audit”. Cover the right column; students rewrite the chain together.',
    },
  ],
  mistakes: [
    { wrong: 'كُلُّ يَوْمٌ', right: 'كُلَّ يَوْمٍ', why: 'Learn the fixed form: kulla yawmin (website).' },
    { wrong: 'أَسْبَحُ مَرَّتَانِ الْأُسْبُوعُ.', right: 'أَسْبَحُ مَرَّتَيْنِ فِي الْأُسْبُوعِ.', why: 'Use the whole chunk (website).' },
    { wrong: 'فِي الصَّبَاحُ', right: 'فِي الصَّبَاحِ', why: 'Genitive after fī.' },
  ],
  hints: ['Which fixed form?', 'Is the chunk complete?', 'Ending after fī?'],
  practice: [
    W(/Mastery/, 4, { feedback: 'The phrase means at a later time.' }),
    W(/Mastery/, 5, { feedback: 'Simultaneous timing.' }),
    W(/Mastery/, 7, { feedback: 'The sequence moves logically from first to last.' }),
    W(/Mastery/, 8, { feedback: 'Bi-l-qurbi min = near.' }),
  ],
  practiceLabel: 'website adverbial phrase mastery questions 5, 6, 8 and 9',
  read: {
    title: 'A trip to the coast', label: 'website reading text, extended by the teacher',
    text: 'فِي الْبِدَايَةِ وَصَلْنَا إِلَى الْمَحَطَّةِ فِي الصَّبَاحِ. بَعْدَ ذَلِكَ مَشَيْنَا إِلَى فُنْدُقٍ بِالْقُرْبِ مِنَ الْبَحْرِ. فِي الْمَسَاءِ خَرَجْنَا مِنْ وَقْتٍ لِآخَرَ لِزِيَارَةِ السُّوقِ، وَأَخِيرًا عُدْنَا إِلَى الْفُنْدُقِ. فِي الْمُسْتَقْبَلِ سَنَرْجِعُ إِلَى هُنَاكَ مَرَّةً فِي السَّنَةِ.',
    glossary: [['وَصَلْنَا', 'we arrived'], ['الْمَحَطَّةِ', 'the station'], ['مَشَيْنَا', 'we walked'], ['خَرَجْنَا', 'we went out'], ['لِزِيَارَةِ', 'to visit'], ['عُدْنَا', 'we returned'], ['سَنَرْجِعُ', 'we will go back']],
    task: 'Website: identify frequency, time-of-day, place and sequence phrases, and explain how each guides the reader.',
    questions: [
      q('Where was the hotel?', ['near the sea', 'far from the sea', 'in the station'], 'بِالْقُرْبِ مِنَ الْبَحْرِ.'),
      q('Which phrase opens the story?', ['فِي الْبِدَايَةِ', 'أَخِيرًا', 'بَعْدَ ذَلِكَ'], 'Opening link.'),
      q('How often did they visit the market?', ['from time to time', 'every day', 'never'], 'مِنْ وَقْتٍ لِآخَرَ.'),
      q('What will they do in the future?', ['go back once a year', 'stay at home', 'move to the hotel'], 'Teacher-added last sentence.'),
    ],
    qNote: 'The first three sentences are the website text; the last sentence and the questions are teacher-written.',
  },
  speak: {
    title: 'Extended answer ladder', source: 'website extended answer ladder',
    prompts: [
      { route: 'core', ar: 'مَاذَا تَفْعَلُ فِي الصَّبَاحِ؟' },
      { route: 'develop', ar: 'صِفْ يَوْمًا عَادِيًّا مِنَ الْبِدَايَةِ إِلَى النِّهَايَةِ.' },
      { route: 'stretch', ar: 'كَيْفَ أَصِلُ مِنْ مَدْرَسَتِكَ إِلَى أَقْرَبِ مَكْتَبَةٍ؟' },
    ],
    stems: [
      { route: 'core', ar: 'كُلَّ صَبَاحٍ ______ .' },
      { route: 'develop', ar: 'فِي الْبِدَايَةِ ______ ، بَعْدَ ذَلِكَ ______ ، وَأَخِيرًا ______ .' },
      { route: 'stretch', ar: 'امْشِ ______ ، ثُمَّ ______ ؛ الْمَكْتَبَةُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَيْفَ أَصِلُ إِلَى الْمَسْجِدِ؟', en: 'How do I get to the mosque?' },
      { who: 'B', ar: 'فِي الْبِدَايَةِ امْشِ إِلَى الْأَمَامِ، بَعْدَ ذَلِكَ خُذْ أَوَّلَ شَارِعٍ عَلَى الْيَمِينِ. الْمَسْجِدُ بِالْقُرْبِ مِنَ الْحَدِيقَةِ، لَيْسَ بَعِيدًا عَنْ هُنَا.', en: 'First walk straight on, after that take the first street on the right. The mosque is near the park, not far from here.' },
    ],
    notes: 'Website: answer in three stages — basic answer; add a frequency / time phrase; add sequence or future. Route listening (website): one partner gives directions, the other draws the route and repeats it back.',
  },
  write: {
    siteTask: 'Write 120–140 words as an email, blog entry or short article about a routine, trip or future plan, with at least ten different adverbial chunks.',
    core: { amount: '6 sentences', task: 'Describe your routine with frequency and time-of-day chunks.', how: 'every morning, twice a week, in the evening …' },
    develop: { amount: '8 sentences', task: 'Organise a day with varied sequence links.', how: 'at first, after that, at the same time, finally.' },
    stretch: { amount: '120–140 words', task: 'Website integrated fluency task (ten chunks).', how: 'Include directions and a future plan.' },
  },
  frames: {
    core: [
      { en: 'Every morning I …', ar: 'كُلَّ صَبَاحٍ ______ .' },
      { en: 'I … twice a week.', ar: '______ مَرَّتَيْنِ فِي الْأُسْبُوعِ.' },
      { en: 'In the evening I …', ar: 'فِي الْمَسَاءِ ______ .' },
      { en: 'In the future I will …', ar: 'فِي الْمُسْتَقْبَلِ ______ .' },
    ],
    develop: [
      { en: 'At first …', ar: 'فِي الْبِدَايَةِ ______ .' },
      { en: 'After that …', ar: 'بَعْدَ ذَلِكَ ______ .' },
      { en: 'Finally …', ar: 'أَخِيرًا ______ .' },
      { en: 'My school is near …', ar: 'مَدْرَسَتِي بِالْقُرْبِ مِنْ ______ .' },
    ],
    bank: ['كُلَّ يَوْمٍ', 'كُلَّ صَبَاحٍ', 'مَرَّةً فِي الْأُسْبُوعِ', 'مِنْ وَقْتٍ لِآخَرَ', 'بَعْدَ الظُّهْرِ', 'حَتَّى الْآنَ', 'فِي الْمُسْتَقْبَلِ', 'فِي الْبِدَايَةِ', 'بَعْدَ ذَلِكَ', 'أَخِيرًا', 'عَلَى الْيَمِينِ', 'بِالْقُرْبِ مِنْ'],
  },
  stretchTask: {
    task: 'Website integrated fluency task: 120–140 words (email, blog or article) about a routine, trip or future plan, with ten different adverbial chunks.',
    checklist: ['Two frequency phrases.', 'Two time-of-day or time-horizon phrases.', 'Three different sequence links (no thumma chain).', 'Two place or direction phrases.', 'Coherent time frames — every chunk adds meaning.'],
    phrases: [['فِي الْبِدَايَةِ', 'at the beginning'], ['مِنْ وَقْتٍ لِآخَرَ', 'from time to time'], ['فِي الْوَقْتِ نَفْسِهِ', 'at the same time'], ['بَعِيدًا عَنْ', 'far from'], ['يَوْمًا مَا', 'one day'], ['فِي النِّهَايَةِ', 'in the end']],
  },
  model: {
    text: 'مَرْحَبًا يَا سَارَةُ، فِي الْبِدَايَةِ سَأَصِفُ رُوتِينِي. أَسْتَيْقِظُ كُلَّ صَبَاحٍ فِي السَّاعَةِ السَّادِسَةِ، وَبَعْدَ ذَلِكَ أَذْهَبُ إِلَى مَدْرَسَتِي الَّتِي تَقَعُ بِالْقُرْبِ مِنْ بَيْتِي. بَعْدَ الظُّهْرِ أَتَدَرَّبُ مَرَّتَيْنِ فِي الْأُسْبُوعِ، وَمِنْ وَقْتٍ لِآخَرَ أَزُورُ جَدَّتِي. فِي الْمَسَاءِ أُسَاعِدُ أُمِّي فِي الْمَطْبَخِ وَأَتَحَدَّثُ مَعَهَا فِي الْوَقْتِ نَفْسِهِ. فِي الْمُسْتَقْبَلِ سَأَدْرُسُ فِي الْخَارِجِ، وَيَوْمًا مَا سَأَزُورُكِ! أَخِيرًا، اكْتُبِي لِي قَرِيبًا.',
    en: 'Hello Sara, first I will describe my routine. I wake up every morning at six, and after that I go to my school, which is near my house. In the afternoon I train twice a week, and from time to time I visit my grandmother. In the evening I help my mother in the kitchen and chat with her at the same time. In the future I will study abroad, and one day I will visit you! Finally, write to me soon.',
    find: ['frequency', 'time', 'sequence', 'place'],
    source: 'extends the website model for the integrated fluency task',
  },
  selfCheck: [
    { route: 'core', text: 'I used two frequency chunks correctly.' },
    { route: 'core', text: 'I used time-of-day phrases with fī.' },
    { route: 'develop', text: 'I used three different sequence links.' },
    { route: 'develop', text: 'I did not repeat thumma before every sentence.' },
    { route: 'stretch', text: 'I included directions and a future plan.' },
  ],
  exit: [
    W(/Frequency/, 4, { feedback: 'The complete phrase follows the verb naturally.' }),
    W(/Sequence/, 3, { feedback: 'The phrase links two things happening together.' }),
    W(/Place Phrase/, 2, { feedback: 'ʿAlā l-yamīn gives the direction.' }),
  ],
  mastery: false,
  prep: {
    words: [['أَنَا', 'I', '—'], ['أَنْتَ · أَنْتِ', 'you (m. · f.)', '—'], ['هُوَ · هِيَ', 'he · she', '—'], ['نَحْنُ', 'we', '—'], ['هُمْ · هُنَّ', 'they (m. · f.)', '—']],
    questionEn: 'Arabic has different words for “you” to a boy and to a girl. Can you think of why that is useful?',
    questionAr: 'أَنْتَ طَالِبٌ · ______ طَالِبَةٌ',
    homework: {
      core: 'Learn twelve chunks with their meanings.',
      develop: 'Rewrite an old paragraph with varied sequence links.',
      stretch: 'Website integrated fluency task (120–140 words).',
    },
    wordsSource: 'The five words prepare GM-PRO-01 (website Pronouns lesson 1: subject pronouns).',
  },
  remember: 'Remember: learn chunks whole · kulla yawmin, marratayni fī l-usbūʿ · sequence with variety, not a thumma chain · directions: on the right, near, far from.',
});

module.exports = { meta, slides };
