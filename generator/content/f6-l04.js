'use strict';
/* F6-L04 · Tickets, Timetables and Journey Duration — website: Pathways › Foundation › F6 › F6-L04 (ticket and timetable language, أُرِيدُ أَنْ أَحْجُزَ, مَتَى يُغَادِرُ / يَصِلُ؟, مِنْ أَيِّ رَصِيفٍ؟, تَسْتَغْرِقُ الرِّحْلَةُ + duration). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F6')({
  n: 4, fileTitle: 'Tickets_Timetables_and_Journey_Duration', chip: 'Tickets and Timetables',
  title: 'Tickets, Timetables and Journey Duration', arabic: 'التَّذَاكِرُ وَجَدَاوِلُ الرِّحْلَاتِ وَالمُدَّةُ',
  focus: 'Buy a ticket, read a departure board and ask when, from which platform and how long: تَسْتَغْرِقُ الرِّحْلَةُ سَاعَتَيْنِ.',
  icon: 'FaTicket', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const who = (he, she, i) => ({ tag: 'he · she · I', forms: [{ l: 'he', ar: he }, { l: 'she / it (f.)', ar: she }, { l: 'I', ar: i }] });
const slides = D.devLesson('F6-L04', {
  support: `• Core: a supported ticket dialogue with the key chunks: أُرِيدُ تَذْكِرَةً إِلَى … · كَمْ ثَمَنُ التَّذْكِرَةِ؟ · مَتَى يُغَادِرُ القِطَارُ؟
• Develop: read the departure board and create a six-line transaction independently.
• Stretch: handle a delay, a platform change and an alternative journey with follow-up questions.
• Website: “Transport timetables reward scanning for destination, time, platform and delay status rather than translating every word.”
• Times: use numerals on the board (٨:٣٠ / 8:30); say them with the F4-L02 clock language (الثَّامِنَةُ وَالنِّصْفُ).
• The verb agrees with the vehicle: القِطَارُ يُغَادِرُ · الحَافِلَةُ تُغَادِرُ · الرِّحْلَةُ تَسْتَغْرِقُ.`,
  teach: 'Ticket office and timetable words, then book · when? · which platform? · how long?',
  wedo: 'Picture match, sort ticket / timetable, fix the mistakes and listen at the train station.',
  next: { nextCode: 'F6-L05', nextTitle: 'Describing Your Town: Advantages and Disadvantages', nextAr: 'وَصْفُ مَدِينَتِكَ' },
  doNow: {
    questions: [
      q('What does تَذْكِرَةٌ mean?', ['a ticket', 'a timetable', 'a platform'], 'Prepared at home (F6-L03).'),
      q('What does يُغَادِرُ mean?', ['departs', 'arrives', 'is delayed'], 'Prepared at home (F6-L03).'),
      q('Choose “I go by bus.”', ['أَذْهَبُ بِالحَافِلَةِ.', 'أَذْهَبُ عَلَى الحَافِلَةِ.', 'أَذْهَبُ مَشْيًا الحَافِلَةَ.'], 'F6-L03: bi- with motor transport.'),
      q('Ask a girl how she travels.', ['كَيْفَ تُسَافِرِينَ؟', 'كَيْفَ تُسَافِرُ؟', 'كَيْفَ أُسَافِرُ؟'], 'F6-L03: -īna for a girl.'),
      q('What does يَقُودُ mean?', ['he drives', 'he rides', 'he walks'], 'F6-L03 journey verbs.'),
    ],
    keyIdea: { text: 'Journey (رِحْلَةٌ) is feminine, so “it takes” is tastaghriqu.', ar: '{e|تَسْتَغْرِقُ} الرِّحْلَةُ {k|سَاعَتَيْنِ}.' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F6-L03. Questions 3–5 retrieve F6-L03 (bi-, asking a girl, journey verbs).',
  },
  routes: {
    core: ['I can ask for a single or a return ticket.', 'I can ask when the train leaves.'],
    develop: ['I can read a simple departure board.', 'I can say how long a journey takes.'],
    stretch: ['I can deal with a delay or a platform change.', 'I can perform the ticket dialogue without notes.'],
  },
  bridge: [
    { ar: 'مَوْعِدٌ', urdu: 'وعدہ', tr: 'vaʿda', en: 'promise → set time' },
    { ar: 'مُدَّةٌ', urdu: 'مدت', tr: 'muddat', en: 'a period (of time)' },
    { ar: 'دَرَجَةٌ', urdu: 'درجہ', tr: 'darja', en: 'class / grade' },
    { ar: 'جَوَازُ سَفَرٍ', urdu: 'جواز', tr: 'jawāz', en: 'permission → passport' },
    { ar: 'تَأَخُّرٌ', urdu: 'تاخیر', tr: 'tākhīr', en: 'a delay' },
  ],
  bridgeNotes: 'URDU BRIDGE: مدت (a period — “kuch muddat”), درجہ (class: پہلا درجہ “first class”), تاخیر (delay) all share their roots with the lesson words. جواز (justification, permission) → جَوَازُ سَفَرٍ “permission to travel” = passport. وعدہ (promise) → مَوْعِدٌ (an agreed time).',
  core: ['شُبَّاكُ التَّذَاكِرِ', 'أَحْجُزُ', 'أَشْتَرِي', 'تَذْكِرَةٌ مُفْرَدَةٌ', 'تَذْكِرَةُ ذَهَابٍ وَإِيَابٍ', 'يُغَادِرُ', 'يَصِلُ', 'يَتَأَخَّرُ', 'فِي الوَقْتِ', 'رَصِيفٌ', 'تَسْتَغْرِقُ', 'مُدَّةُ الرِّحْلَةِ'],
  forms: {
    'يُغَادِرُ': who('يُغَادِرُ', 'تُغَادِرُ', 'أُغَادِرُ'),
    'يَصِلُ': who('يَصِلُ', 'تَصِلُ', 'أَصِلُ'),
    'يَتَأَخَّرُ': who('يَتَأَخَّرُ', 'تَتَأَخَّرُ', 'أَتَأَخَّرُ'),
    'يَحْجُزُ / أَحْجُزُ': who('يَحْجُزُ', 'تَحْجُزُ', 'أَحْجُزُ'),
    'رَصِيفٌ': { tag: 'sg · pl', forms: [{ l: 'one', ar: 'رَصِيفٌ' }, { l: 'pl.', ar: 'أَرْصِفَةٌ' }] },
  },
  vocabSlides: 4,
  flexGroups: [2],
  vocabNotes: {
    0: 'Ticket words. تَذْكِرَةٌ (pl. تَذَاكِرُ): مُفْرَدَةٌ (single) / ذَهَابٍ وَإِيَابٍ (return: “going and coming back”).',
    1: 'Timetable verbs: the cards show he / she (it, f.) / I. القِطَارُ يُغَادِرُ but الحَافِلَةُ تُغَادِرُ.',
    2: 'FLEX: the four key questions are on the grammar slide. Times: سَاعَةٌ، سَاعَتَانِ (2), ثَلَاثُ سَاعَاتٍ; نِصْفُ سَاعَةٍ.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the ticket questions (website rules 1, 2 and 4)', title: 'Book · when? · which platform?', ar: 'أَسْئِلَةُ المُسَافِرِ',
      cols: [{ label: 'Need', w: 2.6 }, { label: 'Traveller asks', w: 4.9, size: 24 }, { label: 'Answer', w: 4.83, size: 22 }],
      rows: [
        { core: true, cells: ['book', { ar: 'أُرِيدُ أَنْ أَحْجُزَ تَذْكِرَةً إِلَى دُبَيَّ.' }, { ar: 'ذَهَابًا فَقَطْ أَمْ ذَهَابًا وَإِيَابًا؟' }] },
        { core: true, cells: ['price', { ar: 'كَمْ ثَمَنُ التَّذْكِرَةِ؟' }, { ar: 'ثَمَنُهَا خَمْسَةٌ وَثَلَاثُونَ دِينَارًا.' }] },
        { core: true, cells: ['departure', { ar: 'مَتَى يُغَادِرُ القِطَارُ؟' }, { ar: 'يُغَادِرُ فِي السَّاعَةِ التَّاسِعَةِ.' }] },
        { cells: ['arrival', { ar: 'مَتَى تَصِلُ الحَافِلَةُ؟' }, { ar: 'تَصِلُ فِي السَّاعَةِ الحَادِيَةَ عَشْرَةَ.' }] },
        { cells: ['platform', { ar: 'مِنْ أَيِّ رَصِيفٍ؟' }, { ar: 'مِنَ الرَّصِيفِ الرَّابِعِ.' }] },
      ],
      ltr: true,
      foot: 'After urīdu an the verb takes -a: an aḥjuza. The vehicle decides the verb: al-qiṭāru yughādiru · al-ḥāfilatu tughādiru.',
      notes: `GRAMMAR PART 1 — website rules “Book or buy a ticket” (أُرِيدُ أَنْ أَحْجُزَ / أَشْتَرِيَ تَذْكِرَةً, or simply أُرِيدُ تَذْكِرَةً), “Ask departure and arrival times” (مَتَى + verb + the transport noun as subject) and “Ask for platform and ticket type”.
Website mistakes: أُرِيدُ يَحْجُزُ ✗ → أُرِيدُ أَنْ أَحْجُزَ ✓ · مَتَى الرَّصِيفُ؟ ✗ → مِنْ أَيِّ رَصِيفٍ؟ ✓.
Price: كَمْ ثَمَنُ + noun (F5-L06).`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · how long does it take? (website rule 3)', title: 'The journey takes …', ar: 'تَسْتَغْرِقُ الرِّحْلَةُ',
      cards: [
        { chip: 'QUESTION', color: '6B4C9A', head: 'كَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟', big: 'كَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟', en: 'How long does the journey take?', clue: 'Journey = f. → ta-.' },
        { chip: 'HOURS', color: '1D5FBF', head: 'سَاعَةً · سَاعَتَيْنِ', big: 'تَسْتَغْرِقُ الرِّحْلَةُ سَاعَتَيْنِ وَنِصْفًا.', en: 'The journey takes two and a half hours.', clue: 'Two = the dual (-ayni).' },
        { chip: 'MINUTES', color: '1E7B4F', head: 'دَقِيقَةً', big: 'تَسْتَغْرِقُ الرِّحْلَةُ أَرْبَعِينَ دَقِيقَةً.', en: 'The journey takes forty minutes.', clue: '11+ → singular -an.' },
      ],
      error: { text: 'Website common error: the journey is feminine.', pairs: [['تَسْتَغْرِقُ الرِّحْلَةُ سَاعَةً.', 'يَسْتَغْرِقُ الرِّحْلَةُ سَاعَةً.']] },
      notes: `GRAMMAR PART 2 — website rule “State journey duration”: تَسْتَغْرِقُ الرِّحْلَةُ + period (the duration is the object: سَاعَةً، سَاعَتَيْنِ، ثَلَاثَ سَاعَاتٍ، نِصْفَ سَاعَةٍ).
Website common error: يَسْتَغْرِقُ الرِّحْلَةُ ✗ → تَسْتَغْرِقُ الرِّحْلَةُ ✓.
Link: F5-L08 مُنْذُ (since / for) describes how long something HAS lasted; تَسْتَغْرِقُ says how long a journey TAKES.`,
    },
  ],
  quick: [0, 1, 3, 4],
  rest: [2, 5, 6],
  ido: {
    title: 'Watch me buy a ticket',
    steps: [
      { head: '1 · Ask', ar: 'أُرِيدُ تَذْكِرَةَ ذَهَابٍ وَإِيَابٍ إِلَى دُبَيَّ، مِنْ فَضْلِكَ.', think: 'Ticket type + destination + please.' },
      { head: '2 · Class', ar: 'المُوَظَّفُ: الدَّرَجَةُ الأُولَى أَمِ الثَّانِيَةُ؟ — الثَّانِيَةُ.', think: 'am = or (F5-L03).' },
      { head: '3 · Price + time', ar: 'كَمْ ثَمَنُ التَّذْكِرَةِ؟ وَ{k|مَتَى} تُغَادِرُ الرِّحْلَةُ؟', think: 'Two questions.' },
      { head: '4 · Answer', ar: 'تُغَادِرُ فِي السَّابِعَةِ مِنَ البَوَّابَةِ السَّادِسَةِ، وَ{e|تَسْتَغْرِقُ} سَاعَتَيْنِ.', think: 'Time + gate + duration.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'WHEN?', e: 'IT TAKES' },
    model: 'المُسَافِرُ: مَرْحَبًا، أُرِيدُ تَذْكِرَةَ ذَهَابٍ وَإِيَابٍ إِلَى دُبَيَّ، مِنْ فَضْلِكَ. — المُوَظَّفُ: الدَّرَجَةُ الأُولَى أَمِ الثَّانِيَةُ؟ — المُسَافِرُ: الثَّانِيَةُ. كَمْ ثَمَنُ التَّذْكِرَةِ؟ وَ{k|مَتَى} تُغَادِرُ الرِّحْلَةُ؟ — المُوَظَّفُ: ثَمَنُهَا مِئَةٌ وَعِشْرُونَ دِينَارًا. تُغَادِرُ فِي السَّاعَةِ السَّابِعَةِ مِنَ البَوَّابَةِ السَّادِسَةِ، وَ{e|تَسْتَغْرِقُ} سَاعَتَيْنِ. — المُسَافِرُ: شُكْرًا جَزِيلًا.',
    modelEn: 'Traveller: Hello, I would like a return ticket to Dubai, please. — Clerk: First or second class? — Second. How much is the ticket? And when does the journey leave? — It costs 120 dinars. It leaves at seven o’clock from gate six and takes two hours. — Thank you very much.',
    notes: 'I DO (3 min) — the website model dialogue. Perform it with a confident student (you are the clerk). Then swap and change the destination.',
  },
  game: {
    title: 'Tickets and times: match the picture',
    pick: [2, 3, 4],
    en: ['I want a single ticket.', 'I want a return ticket.', 'The journey takes two hours.'],
    icons: [[['fa6', 'FaTicket', 'C77700'], ['fa6', 'FaArrowRight', '1D5FBF']], [['fa6', 'FaTicket', 'C77700'], ['fa6', 'FaArrowRightArrowLeft', '1D5FBF']], [['fa6', 'FaStopwatch', '6B4C9A']]],
    labels: ['one way', 'return', '2 hours'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). (The website’s departure items write يَغَادِرُ — the correct vowelling is يُغَادِرُ / تُغَادِرُ, so they are left out here.)',
  },
  sorterNotes: 'Ask: would you hear this at the ticket window or read it on the board?',
  hints: ['Journey: m. or f.?', 'After urīdu, what joins the next verb?', 'Which question asks for the platform?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 4.\nListen for the number after دِينَارًا and الرَّصِيفِ.',
  listenRoutes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5, then act the dialogue.',
  gloss: [
    ['المُسَافِرُ: مِنْ فَضْلِكَ، أُرِيدُ تَذْكِرَةَ ذَهَابٍ وَإِيَابٍ إِلَى عَمَّانَ.', 'Traveller: Please, I would like a return ticket to Amman.'],
    ['المُوَظَّفُ: الدَّرَجَةُ الأُولَى أَمِ الثَّانِيَةُ؟ المُسَافِرُ: الدَّرَجَةُ الثَّانِيَةُ. كَمْ ثَمَنُ التَّذْكِرَةِ؟', 'Clerk: First or second class? — Second class. How much is the ticket?'],
    ['المُوَظَّفُ: خَمْسَةٌ وَثَلَاثُونَ دِينَارًا.', 'Clerk: Thirty-five dinars.'],
    ['القِطَارُ يُغَادِرُ عِنْدَ السَّاعَةِ التَّاسِعَةِ وَالرُّبْعِ مِنَ الرَّصِيفِ الرَّابِعِ.', 'The train leaves at a quarter past nine from platform four.'],
    ['المُسَافِرُ: كَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟ المُوَظَّفُ: سَاعَتَيْنِ وَنِصْفًا، وَالقِطَارُ فِي الوَقْتِ.', 'How long does the journey take? — Two and a half hours, and the train is on time.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'أُرِيدُ تَذْكِرَةً إِلَى …' },
      { route: 'develop', ar: 'هَلْ تُرِيدُ ذَهَابًا فَقَطْ أَمْ ذَهَابًا وَإِيَابًا؟' },
      { route: 'develop', ar: 'مَتَى تُغَادِرُ الرِّحْلَةُ؟' },
      { route: 'stretch', ar: 'كَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟ القِطَارُ مُتَأَخِّرٌ — مَاذَا تَفْعَلُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أُرِيدُ تَذْكِرَةً إِلَى ______ ، مِنْ فَضْلِكَ.' },
      { route: 'develop', ar: 'ذَهَابًا وَإِيَابًا، مِنْ فَضْلِكَ.' },
      { route: 'develop', ar: 'تُغَادِرُ فِي السَّاعَةِ ______ مِنَ الرَّصِيفِ ______ .' },
      { route: 'stretch', ar: 'تَسْتَغْرِقُ ______ · هَلْ هُنَاكَ قِطَارٌ آخَرُ؟' },
    ],
    modelEn: ['Hello, I would like a ticket to Beirut.', 'One way or return?'],
    notes: 'Website “Ticket-office role play” — all four prompts are the website’s. Put a departure board on screen (the reading text). Stretch: the clerk announces a delay or a platform change. Website model: مَرْحَبًا، أُرِيدُ تَذْكِرَةً إِلَى بَيْرُوتَ. — ذَهَابًا فَقَطْ أَمْ ذَهَابًا وَإِيَابًا؟ — ذَهَابًا وَإِيَابًا، مِنْ فَضْلِكَ. مَتَى تُغَادِرُ الرِّحْلَةُ؟ — تُغَادِرُ عِنْدَ السَّاعَةِ العَاشِرَةِ وَتَسْتَغْرِقُ ثَلَاثَ سَاعَاتٍ.',
  },
  write: {
    core: { amount: '6 lines', how: 'A supported ticket dialogue using the question chunks.' },
    develop: { amount: '8–10 lines', how: 'Website task: dialogue + a short timetable note (destination, type, price, time, platform, duration).' },
    stretch: { amount: '12+ lines', how: 'Add a delay or platform change and an alternative journey.' },
  },
  frames: {
    core: [
      { en: 'I would like a ticket to …, please.', ar: 'أُرِيدُ تَذْكِرَةً إِلَى ______ ، مِنْ فَضْلِكَ.' },
      { en: 'A return ticket, please.', ar: 'تَذْكِرَةَ ذَهَابٍ وَإِيَابٍ، مِنْ فَضْلِكَ.' },
      { en: 'How much is the ticket?', ar: 'كَمْ ثَمَنُ التَّذْكِرَةِ؟' },
      { en: 'When does the train leave?', ar: 'مَتَى يُغَادِرُ القِطَارُ؟' },
      { en: 'Thank you very much.', ar: 'شُكْرًا جَزِيلًا.' },
    ],
    develop: [
      { en: 'From which platform?', ar: 'مِنْ أَيِّ رَصِيفٍ؟' },
      { en: 'How long does the journey take?', ar: 'كَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟' },
      { en: 'The journey takes two hours.', ar: 'تَسْتَغْرِقُ الرِّحْلَةُ سَاعَتَيْنِ.' },
      { en: 'The bus is delayed twenty minutes.', ar: 'الحَافِلَةُ مُتَأَخِّرَةٌ عِشْرِينَ دَقِيقَةً.' },
      { en: 'I want to book a first-class ticket.', ar: 'أُرِيدُ أَنْ أَحْجُزَ تَذْكِرَةً فِي الدَّرَجَةِ الأُولَى.' },
    ],
    bank: ['تَذْكِرَةٌ', 'ذَهَابًا فَقَطْ', 'ذَهَابًا وَإِيَابًا', 'دَرَجَةٌ أُولَى', 'يُغَادِرُ / تُغَادِرُ', 'يَصِلُ / تَصِلُ', 'رَصِيفٌ', 'بَوَّابَةٌ', 'مُتَأَخِّرٌ', 'فِي الوَقْتِ', 'تَسْتَغْرِقُ', 'سَاعَتَيْنِ'],
  },
  stretch: [
    ['القِطَارُ مُتَأَخِّرٌ نِصْفَ سَاعَةٍ', 'the train is half an hour late'],
    ['تَغَيَّرَ الرَّصِيفُ', 'the platform has changed'],
    ['هَلْ هُنَاكَ رِحْلَةٌ مُبَاشِرَةٌ؟', 'is there a direct journey?'],
    ['يَجِبُ التَّبْدِيلُ فِي …', 'you must change at …'],
    ['يَجِبُ الحَجْزُ المُسْبَقُ', 'advance booking is required'],
  ],
  modelEn: 'Traveller: Hello, I would like a return ticket to Dubai, please. Clerk: First class or second? Traveller: Second. How much is the ticket? And when does the journey leave? Clerk: It costs 120 dinars. It leaves at seven o’clock from gate six and takes two hours. Traveller: Thank you very much.',
  find: ['ticket type', 'a price question', 'a when? question', 'it takes'],
  modelNotes: 'Evidence: تَذْكِرَةَ ذَهَابٍ وَإِيَابٍ · كَمْ ثَمَنُ التَّذْكِرَةِ؟ · مَتَى تُغَادِرُ الرِّحْلَةُ؟ · تَسْتَغْرِقُ سَاعَتَيْنِ.',
  selfCheck: [
    { route: 'core', text: 'I asked for a ticket politely.' },
    { route: 'core', text: 'I asked when it leaves.' },
    { route: 'develop', text: 'تَسْتَغْرِقُ + a duration.' },
    { route: 'develop', text: 'The verb agrees with the vehicle.' },
    { route: 'stretch', text: 'I handled a delay or a change.' },
  ],
  exit: [0, 2, 4],
  glossary: [
    ['جَدْوَلُ الرِّحْلَاتِ', 'the departure board'], ['إِلَى العَقَبَةِ', 'to Aqaba'], ['مِنَ الرَّصِيفِ', 'from platform'], ['يَصِلُ عِنْدَ', 'arrives at'], ['إِلَى إِرْبِدَ', 'to Irbid'],
    ['البَوَّابَةِ', 'the gate'], ['مُتَأَخِّرَةٌ', 'delayed (f.)'], ['مُبَاشِرَةٌ', 'direct'], ['تَسْتَغْرِقُ', 'takes'], ['الحَجْزُ المُسْبَقُ', 'advance booking'],
  ],
  prep: {
    words: [['مَزَايَا', 'advantages', 'sing. مِيزَةٌ'], ['عُيُوبٌ', 'disadvantages', 'sing. عَيْبٌ'], ['هَادِئٌ', 'quiet', 'f. هَادِئَةٌ'], ['مُزْدَحِمٌ', 'crowded', 'f. مُزْدَحِمَةٌ'], ['نَظِيفٌ', 'clean', 'f. نَظِيفَةٌ']],
    questionEn: 'Is your town quiet or crowded? Write one sentence.',
    questionAr: 'مَدِينَتِي … لِأَنَّ …',
    homework: {
      core: 'Website F6-L04: the vocabulary tab and the “Ticket or timetable detail?” sorter.',
      develop: 'Website writing task: a ticket dialogue and a short timetable note.',
      stretch: 'Write a dialogue with a delay, a platform change and an alternative journey.',
    },
    wordsSource: 'The five words come from the website F6-L05 lesson (advantages and disadvantages of your town).',
  },
  remember: 'Remember: أُرِيدُ أَنْ أَحْجُزَ · مَتَى يُغَادِرُ؟ · مِنْ أَيِّ رَصِيفٍ؟ · تَسْتَغْرِقُ الرِّحْلَةُ …',
});

module.exports = { meta, slides };
