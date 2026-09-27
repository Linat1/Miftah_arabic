'use strict';
/*
 * F2-L01 · Hello, Goodbye & How Are You?
 * Website: Pathways › Foundation › F2 › Lesson 1 (“Open the Conversation”). Greeting pairs, time-of-day pairs,
 * كَيْفَ حَالُكَ / حَالُكِ, closings, Ahmad–Sara dialogue, Response Relay, gender check, Four-Move Mingle Mission.
 */
const F = require('./f2-common');
const game = require('../site-data/pathway-visual-games.json')['f2-l01'];
const { q, bank } = F;

const meta = F.meta({
  n: 1, fileTitle: 'Greetings_How_Are_You', chip: 'Greetings',
  title: 'Hello, Goodbye & How Are You?', arabic: 'مَرْحَبًا! كَيْفَ حَالُكَ؟',
  focus: 'Move from reading Arabic to using it with another person: open with a suitable greeting, give the paired reply, ask how someone is (to a boy or a girl), answer, and close the exchange politely.',
  icon: 'FaHandshake',
});
const NEXT = { nextCode: 'F2-L02', nextTitle: 'What Is Your Name?', nextAr: 'مَا اسْمُكَ؟' };

const site = {
  speaking: {
    context: 'The Four-Move Mingle Mission',
    model: [
      ['أَحْمَدُ', 'صَبَاحُ الخَيْرِ يَا سَارَةُ.', 'Good morning, Sara.'],
      ['سَارَةُ', 'صَبَاحُ النُّورِ يَا أَحْمَدُ.', 'Good morning, Ahmad.'],
      ['أَحْمَدُ', 'كَيْفَ حَالُكِ؟', 'How are you? (to a girl)'],
      ['سَارَةُ', 'بِخَيْرٍ، الحَمْدُ لِلَّهِ. وَأَنْتَ؟', 'Fine, praise be to God. And you?'],
      ['أَحْمَدُ', 'بِخَيْرٍ، شُكْرًا.', 'Fine, thank you.'],
      ['سَارَةُ', 'إِلَى اللِّقَاءِ.', 'See you later.'],
      ['أَحْمَدُ', 'مَعَ السَّلَامَةِ.', 'Goodbye.'],
    ],
  },
  writing: {
    prompt: 'Website homework: write a six-line imaginary dialogue between two speakers. Use at least four phrases from today, and make every line respond to the one before it.',
    checklist: ['A time-suitable opening and its paired reply.', 'The “how are you?” question matched to the listener (-ka or -ki).', 'A short answer, and the question returned.', 'A polite closing.'],
    model: 'أَحْمَدُ: صَبَاحُ الخَيْرِ يَا سَارَةُ.\nسَارَةُ: صَبَاحُ النُّورِ يَا أَحْمَدُ.\nأَحْمَدُ: كَيْفَ حَالُكِ؟\nسَارَةُ: بِخَيْرٍ، الحَمْدُ لِلَّهِ. وَأَنْتَ؟\nأَحْمَدُ: بِخَيْرٍ، شُكْرًا.\nسَارَةُ: إِلَى اللِّقَاءِ.\nأَحْمَدُ: مَعَ السَّلَامَةِ.',
  },
  differentiation: {
    core: 'Four lines: open, reply, ask how, answer — copy the pairs from the phrase map.',
    develop: 'The full six-line dialogue with a correct -ka or -ki question.',
    stretch: 'A 6–8 line dialogue using the extended greeting, without transliteration.',
  },
  mistakes: [
    { wrong: 'أَحْمَدُ ← كَيْفَ حَالُكِ؟', right: 'أَحْمَدُ ← كَيْفَ حَالُكَ؟', why: 'Ahmad is one male: the question ends in -ka (fatḥa).' },
    { wrong: 'صَبَاحُ الخَيْرِ ← مَسَاءُ النُّورِ', right: 'صَبَاحُ الخَيْرِ ← صَبَاحُ النُّورِ', why: 'Keep the pair: a morning greeting gets the morning reply.' },
    { wrong: 'كَيْفَ حَالُكَ؟ ← أَهْلًا وَسَهْلًا', right: 'كَيْفَ حَالُكَ؟ ← بِخَيْرٍ، الحَمْدُ لِلَّهِ', why: 'Answer the question you heard: give how you are.' },
  ],
  listening: {
    title: 'Ahmad and Sara meet in the morning',
    script: 'أَحْمَدُ: صَبَاحُ الخَيْرِ يَا سَارَةُ. سَارَةُ: صَبَاحُ النُّورِ يَا أَحْمَدُ. أَحْمَدُ: كَيْفَ حَالُكِ؟ سَارَةُ: بِخَيْرٍ، الحَمْدُ لِلَّهِ. وَأَنْتَ؟ أَحْمَدُ: بِخَيْرٍ، شُكْرًا. سَارَةُ: إِلَى اللِّقَاءِ. أَحْمَدُ: مَعَ السَّلَامَةِ.',
    questions: [
      { prompt: 'What time of day is it?', options: ['morning', 'evening', 'night'], answer: 0, feedback: 'صَبَاحُ الخَيْرِ = good morning.' },
      { prompt: 'How does Sara reply to the first line?', options: ['صَبَاحُ النُّورِ', 'مَسَاءُ النُّورِ', 'وَعَلَيْكُمُ السَّلَامُ'], answer: 0, feedback: 'The paired morning reply.' },
      { prompt: 'Which question does Ahmad ask Sara?', options: ['كَيْفَ حَالُكِ؟', 'كَيْفَ حَالُكَ؟', 'مَا اسْمُكِ؟'], answer: 0, feedback: 'Sara is female: -ki.' },
      { prompt: 'How is Sara?', options: ['fine', 'tired', 'ill'], answer: 0, feedback: 'بِخَيْرٍ = fine.' },
      { prompt: 'Which word shows Sara returns the question to Ahmad?', options: ['وَأَنْتَ؟', 'وَأَنْتِ؟', 'شُكْرًا'], answer: 0, feedback: 'Ahmad is male: وَأَنْتَ؟' },
    ],
  },
};

const slides = [
  F.titleSlide({
    n: 1,
    plan: '0–1 Welcome · 1–2 Lesson map · 2–9 Do Now + answers · 9–10 Objectives · 10–19 Greeting pairs (3 groups) · 19–24 The five moves + كَ / كِ · 24–26 Quick check · 26–29 I Do · 29–38 We Do (picture match, relay, listening, fix) · 38–49 You Do (Mingle Mission 5 + write 6) · 49–54 Feedback · 54–56 Preparation.',
    source: 'Website sections used: the greeting system in pairs, Response Relay (8 items), the gender form explorer and gender check (6), the Ahmad–Sara dialogue (listening and dialogue rebuild), the Four-Move Mingle Mission, the ten-question checkpoint (exit ticket) and the six-line homework dialogue. The picture match is the website visual game “Hello, Goodbye and How Are You?”.',
    support: `• This is the first SPEAKING unit. Core: learn phrases as whole chunks in pairs (A says → B replies); transliteration is on every card as a temporary bridge. Develop: choose -ka / -ki correctly. Stretch: the extended greeting (heritage-reader extension).
• Culture (website): greeting choice, gesture and physical contact vary by country, relationship and person — follow the other person’s lead; never assume one gesture is expected. This is careful Modern Standard Arabic; spoken varieties differ, and that is normal, not an error.
• Urdu bridge: سلام، خیر، حال، شکریہ، صبح — many students already know these words.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Greeting pairs, then كَ for a boy and كِ for a girl.', wedo: 'Picture match, response relay, listen and fix.', next: 'F2-L02' }),
  F.doNow({
    questions: [
      q('What does مَرْحَبًا mean?', ['hello, welcome', 'goodbye', 'thank you'], 'Prepared at home.'),
      q('Choose the reply to this greeting.', ['وَعَلَيْكُمُ السَّلَامُ', 'مَرْحَبًا', 'اِسْمِي'], 'Prepared at home: the reply returns the peace.', { ar: 'السَّلَامُ عَلَيْكُمْ', arBig: true }),
      q('Which letter is ح?', ['ḥāʾ', 'jīm', 'khāʾ'], 'F1: no dot — the throat letter ḥāʾ.', { ar: 'ح', arBig: true }),
      q('Choose the closest reading.', ['ṣabāḥ', 'sabah', 'ṣubḥ'], 'F1 decoding: ص is ṣād; alif gives long ā.', { ar: 'صَبَاح', arBig: true }),
      q('What does the tanwīn on this word add?', ['an -in ending', 'a doubled letter', 'a long ā'], 'F1-L06: two kasras = -in (bi-khayr-in).', { ar: 'بِخَيْرٍ', arBig: true }),
    ],
    keyIdea: { text: 'A greeting usually comes in a PAIR: one person opens, the other gives the matching reply.', ar: 'صَبَاحُ الخَيْرِ ← صَبَاحُ النُّورِ' },
    retrieves: 'Questions 1–2 test the greetings prepared at home after the F1 assessment (Flipped Learning follow-up). Questions 3–5 use F1 decoding skills (letters, long vowels, tanwīn) on today’s words.',
  }),
  F.objectivesSlide([
    'Use at least four different greeting moves.',
    'Give the correct response to three greeting pairs.',
    'Tell حَالُكَ (to a boy) from حَالُكِ (to a girl).',
    'Perform a four-line exchange without reading every word.',
  ], {
    core: ['I can say and answer the peace greeting and “hello”.', 'I can answer “how are you?” with “fine”.'],
    develop: ['I can use the morning and evening pairs.', 'I can choose -ka (boy) or -ki (girl) for my listener.'],
    stretch: ['I can hold a six-line exchange with the model hidden.', 'I can use the extended greeting respectfully.'],
  }, 1, 'The left column is the website’s “Today’s success criteria”.'),
  F.keywordsSlide({
    text: '14 phrases from the website in 3 groups. Learn them as PAIRS: A says → B replies. Hear it → say it → see it → use it.',
    groups: [
      { head: 'GROUP 1', name: 'Opening and welcome · 4' },
      { head: 'GROUP 2', name: 'Time of day · 4' },
      { head: 'GROUP 3', name: 'Check in and close · 6' },
    ],
    bridge: [
      { ar: 'السَّلَامُ', urdu: 'سلام', tr: 'salām', en: 'peace, greeting' },
      { ar: 'خَيْرٌ', urdu: 'خیر', tr: 'khair', en: 'good, well-being' },
      { ar: 'حَالٌ', urdu: 'حال', tr: 'hāl', en: 'condition, state' },
      { ar: 'شُكْرًا', urdu: 'شکریہ', tr: 'shukriya', en: 'thank you' },
      { ar: 'صَبَاحٌ', urdu: 'صبح', tr: 'subah', en: 'morning' },
    ],
    notes: `URDU BRIDGE: سلام (السَّلَامُ عَلَيْكُمْ), خیر (بِخَيْرٍ / صَبَاحُ الخَيْرِ), حال (کیا حال ہے؟ = كَيْفَ حَالُكَ؟), شکریہ (شُكْرًا), صبح (صَبَاحٌ). Ask: “Which of these do you already say at home?” — a quick confidence win for EAL students.
All phrases are the website “greeting system” cards.`,
  }),
  {
    type: 'vocab', stage: 'teach', min: 3, eyebrow: 'Key words · Group 1 · open and welcome', title: 'Opening and welcome', ar: 'التَّحِيَّةُ وَالتَّرْحِيبُ',
    items: [
      { n: 1, ar: 'السَّلَامُ عَلَيْكُمْ', en: 'Peace be upon you.', tr: 'as-sa-lā-mu ʿa-lay-kum', tag: 'open', core: true, note: 'Widely used greeting of Islamic origin.' },
      { n: 2, ar: 'وَعَلَيْكُمُ السَّلَامُ', en: 'And upon you be peace.', tr: 'wa-ʿa-lay-ku-mu s-sa-lām', tag: 'reply', core: true, note: 'The reply turns it round: “and upon YOU”.' },
      { n: 3, ar: 'مَرْحَبًا', en: 'Hello / welcome.', tr: 'mar-ḥa-ban', tag: 'open + reply', core: true, note: 'Flexible: answer with the same word.' },
      { n: 4, ar: 'أَهْلًا وَسَهْلًا', en: 'Welcome.', tr: 'ah-lan wa-sah-lan', tag: 'welcome', core: true, note: 'Idiomatic: the meaning matters, not word-for-word.' },
      { n: 5, ar: 'عَلَيْكَ', en: 'upon you', tr: 'to one boy · to one girl · to a group', tag: 'm · f · pl', forms: [{ l: 'm.', ar: 'عَلَيْكَ' }, { l: 'f.', ar: 'عَلَيْكِ' }, { l: 'pl.', ar: 'عَلَيْكُمْ' }] },
      { n: 6, ar: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ', en: 'The extended greeting (Stretch)', tr: '… and the mercy of God and His blessings', tag: 'Stretch' },
    ],
    notes: `KEY WORDS — Group 1 (website “Opening and welcome”). Hear → Say → See → Use, in PAIRS: teacher says card 1, class replies with card 2. Swap: class opens, teacher replies.
Card 5: the plural عَلَيْكُمْ is used in the greeting even to one person — it is the fixed form. The three boxes show m / f / pl so students notice the ENDING pattern they meet today (كَ / كِ / كُمْ).
Card 6 is the website heritage-reader extension (Stretch).`,
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · time of day', title: 'Morning and evening pairs', ar: 'تَحِيَّاتُ الصَّبَاحِ وَالمَسَاءِ',
    items: [
      { n: 7, ar: 'صَبَاحُ الخَيْرِ', en: 'Good morning.', tr: 'ṣa-bā-ḥu l-khayr', tag: 'open', core: true, note: 'Literally: morning of goodness.' },
      { n: 8, ar: 'صَبَاحُ النُّورِ', en: 'Good morning. (reply)', tr: 'ṣa-bā-ḥu n-nūr', tag: 'reply', core: true, note: 'Literally: morning of light.' },
      { n: 9, ar: 'مَسَاءُ الخَيْرِ', en: 'Good evening.', tr: 'ma-sā-ʾu l-khayr', tag: 'open', note: 'The hamza is a short stop.' },
      { n: 10, ar: 'مَسَاءُ النُّورِ', en: 'Good evening. (reply)', tr: 'ma-sā-ʾu n-nūr', tag: 'reply', note: 'Keep the evening pair.' },
    ],
    notes: `KEY WORDS — Group 2 (website “Time-of-day pairs”). Show a sun / moon gesture. Drill: teacher says the OPENING, class says the REPLY; then swap.
Memory cue: opening = الخَيْرِ (goodness); reply = النُّورِ (light). Sun letters from F1: in النُّور the ل is silent and the ن is doubled (an-nūr).`,
  },
  {
    type: 'vocab', stage: 'teach', min: 3, eyebrow: 'Key words · Group 3 · check in and close', title: 'How are you? and goodbye', ar: 'السُّؤَالُ عَنِ الحَالِ وَالوَدَاعُ',
    items: [
      { n: 11, ar: 'كَيْفَ حَالُكَ؟', en: 'How are you?', tr: 'kay-fa ḥā-lu-ka · -ki · -kum', tag: 'm · f · pl', core: true, forms: [{ l: 'to m.', ar: 'حَالُكَ' }, { l: 'to f.', ar: 'حَالُكِ' }, { l: 'to pl.', ar: 'حَالُكُمْ' }] },
      { n: 12, ar: 'بِخَيْرٍ، الحَمْدُ لِلَّهِ', en: 'Fine, praise be to God.', tr: 'bi-khay-rin, al-ḥam-du lil-lāh', tag: 'answer', core: true, note: 'بِخَيْرٍ can stand alone.' },
      { n: 13, ar: 'شُكْرًا', en: 'Thank you.', tr: 'shuk-ran', tag: 'polite', core: true, note: 'Urdu: shukriya.' },
      { n: 14, ar: 'وَأَنْتَ؟', en: 'And you?', tr: 'wa-an-ta · wa-an-ti · wa-an-tum', tag: 'm · f · pl', forms: [{ l: 'm.', ar: 'وَأَنْتَ؟' }, { l: 'f.', ar: 'وَأَنْتِ؟' }, { l: 'pl.', ar: 'وَأَنْتُمْ؟' }] },
      { n: 15, ar: 'مَعَ السَّلَامَةِ', en: 'Goodbye.', tr: 'ma-ʿa s-sa-lā-ma', tag: 'close', core: true, note: 'A general, polite closing.' },
      { n: 16, ar: 'إِلَى اللِّقَاءِ', en: 'See you later.', tr: 'i-lā l-li-qāʾ', tag: 'close', note: 'When you will meet again.' },
    ],
    notes: `KEY WORDS — Group 3 (website “Check in and answer” + “Closing the exchange”; وَأَنْتَ؟ from the website dialogue).
Cards 11 and 14 show the three addressee forms (to one boy · one girl · a group). Today we practise the first two; the plural is for recognition.
Pronunciation (website): ḥ in حَال is not English h — breathe out through a narrowed throat; hold the long ā in حَال and سَلَام.`,
  },
  {
    type: 'formula', stage: 'teach', min: 2, eyebrow: 'The conversation map (website) · five moves', title: 'A greeting is a social action', ar: 'التَّحِيَّةُ تَفْتَحُ الحِوَارَ',
    cols: [
      { label: '1 · Open → 2 · Respond', ar: 'اِفْتَحْ ← رُدَّ', color: '1D5FBF', pale: 'EEF3FA' },
      { label: '3 · Check in → 4 · Answer', ar: 'اِسْأَلْ ← أَجِبْ', color: '6B4C9A', pale: 'F1ECF7' },
      { label: '5 · Close', ar: 'وَدِّعْ', color: '0E7C86', pale: 'E3F2F3' },
    ],
    rows: [
      { en: 'Morning: open, ask a girl, close.', cells: ['صَبَاحُ الخَيْرِ ← صَبَاحُ النُّورِ', 'كَيْفَ حَالُكِ؟ ← بِخَيْرٍ', 'إِلَى اللِّقَاءِ'] },
      { en: 'Any time: open, ask a boy, close.', cells: ['السَّلَامُ عَلَيْكُمْ ← وَعَلَيْكُمُ السَّلَامُ', 'كَيْفَ حَالُكَ؟ ← بِخَيْرٍ', 'مَعَ السَّلَامَةِ'] },
      { en: 'Friendly: hello, ask, close.', cells: ['مَرْحَبًا ← مَرْحَبًا', 'كَيْفَ حَالُكَ؟ ← بِخَيْرٍ، الحَمْدُ لِلَّهِ', 'مَعَ السَّلَامَةِ'] },
    ],
    foot: 'Turn-taking: listen to the line you receive, then make your line answer it.',
    notes: `THE FIVE MOVES (website section 1, “A greeting is a social action”): Open → Respond → Check in → Answer → Close.
Website “Notice”: What do hello, bonjour, hola, salam and nǐ hǎo do BEFORE any information is exchanged? (They open the interaction and show goodwill.)
Read each row as a mini-dialogue: teacher = A, class = B. Then swap.`,
  },
  {
    type: 'codeWord', stage: 'teach', min: 3, eyebrow: 'Grammar focus · one small vowel, one important choice', title: 'Who am I speaking to?', ar: 'كَيْفَ حَالُكَ؟ أَمْ كَيْفَ حَالُكِ؟',
    word: 'كَيْفَ {m|حَالُـ}{e|كِ}؟', tr: 'kay-fa ḥā-lu-ki · how are you? (to one girl)',
    parts: [
      { code: 'k', ar: 'كَيْفَ', title: 'KEY WORD: how?', text: 'Question word — it stays the same.' },
      { code: 'm', ar: 'حَالُ', title: 'MEANING: state', text: 'حَال = condition, state (Urdu: hāl).' },
      { code: 'e', ar: 'كَ / كِ', title: 'ENDING: your', text: 'كَ (-ka) to a boy · كِ (-ki) to a girl.' },
    ],
    notes: `GRAMMAR (website section 5, “Address one person accurately”). In careful MSA the short vowel on the final ك tells the listener whether you are speaking to one male or one female.
Memory cue: LOOK at the listener, then choose the final vowel. The ending depends on the person you are speaking TO — not on your own gender.
Website: in ordinary unvowelled print both look the same (كيف حالك؟) — context supplies the reading.
Respectful workaround (website): if unsure, كَيْفَ الحَالُ؟ (“how are things?”) avoids a gendered ending.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 1, eyebrow: 'Grammar focus · the same ending on three words', title: 'Boy, girl or group?', ar: 'مُذَكَّرٌ · مُؤَنَّثٌ · جَمْعٌ',
    cols: [{ label: 'To a boy (m.)', w: 3.2, size: 24 }, { label: 'To a girl (f.)', w: 3.2, size: 24 }, { label: 'To a group (pl.)', w: 3.2, size: 24 }, { label: 'Meaning', w: 2.73 }],
    rows: [
      { core: true, cells: [{ ar: 'كَيْفَ حَالُ{e|كَ}؟', sub: 'ḥā-lu-ka' }, { ar: 'كَيْفَ حَالُ{e|كِ}؟', sub: 'ḥā-lu-ki' }, { ar: 'كَيْفَ حَالُ{e|كُمْ}؟', sub: 'ḥā-lu-kum' }, 'How are you?'] },
      { core: true, cells: [{ ar: 'وَأَنْ{e|تَ}؟', sub: 'wa-an-ta' }, { ar: 'وَأَنْ{e|تِ}؟', sub: 'wa-an-ti' }, { ar: 'وَأَنْ{e|تُمْ}؟', sub: 'wa-an-tum' }, 'And you?'] },
      { cells: [{ ar: 'عَلَيْ{e|كَ}', sub: 'ʿa-lay-ka' }, { ar: 'عَلَيْ{e|كِ}', sub: 'ʿa-lay-ki' }, { ar: 'عَلَيْ{e|كُمْ}', sub: 'ʿa-lay-kum' }, 'upon you'] },
    ],
    foot: 'Fatḥa (-a) for a boy · kasra (-i) for a girl · -um for a group.',
    notes: `M / F / PL TABLE (1 min). Pink = the ending. Read across each row; students repeat, stressing the last sound.
Rows 1–2 are today’s CORE (website: حَالُكَ / حَالُكِ; وَأَنْتَ؟ / وَأَنْتِ؟ from the dialogue). Row 3 links back to the greeting: السَّلَامُ عَلَيْكُمْ uses the group form.`,
  },
  F.quickCheck(bank(1, 'genderItems', [0, 1, 2, 5]), 'website “Gender ending check” questions 1, 2, 3 and 6.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me build a greeting exchange', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Open (morning)', ar: 'صَبَاحُ الخَيْرِ يَا سَارَةُ.', think: 'It is morning, so I choose the morning pair. يَا = addressing Sara.' },
      { head: 'She replies', ar: 'صَبَاحُ النُّورِ يَا أَحْمَدُ.', think: 'The paired reply: الخَيْرِ → النُّورِ.' },
      { head: 'Check in', ar: 'كَيْفَ حَالُ{e|كِ}؟', think: 'I look at Sara — a girl — so the ending is -ki.' },
      { head: 'Answer and close', ar: 'بِخَيْرٍ … إِلَى اللِّقَاءِ.', think: 'She answers, then we close politely.' },
    ],
    legend: ['e'], legendLabels: { e: 'ENDING' },
    model: 'صَبَاحُ الخَيْرِ يَا سَارَةُ. — صَبَاحُ النُّورِ يَا أَحْمَدُ. — كَيْفَ حَالُ{e|كِ}؟ — بِخَيْرٍ، الحَمْدُ لِلَّهِ. — إِلَى اللِّقَاءِ.',
    modelEn: 'Good morning, Sara. — Good morning, Ahmad. — How are you? — Fine, praise be to God. — See you later.',
    notes: `I DO (3 min) — teacher models the website Ahmad–Sara dialogue with a think-aloud, then students COPY it into their books.
Think aloud each decision: “What time is it? → which pair?”, “Who am I speaking to? → -ka or -ki?”, “How do I close?”.
Website pronunciation contrasts to model: ḥ (مَرْحَبًا، حَال), ʿ (عَلَيْكُمْ، مَعَ), long ā (حَال، سَلَام، مَسَاء), final vowel (حَالُكَ / حَالُكِ).`,
  },
  F.gameSlide({ ...game, items: [game.items[2], game.items[1], game.items[4]] }, {
    title: 'Match the picture to the greeting',
    en: ['Good morning.', 'Good evening.', 'How are you? (to a girl)'],
    icons: [[['fa6', 'FaSun', 'E0A100'], ['fa6', 'FaHand', '1D5FBF']], [['fa6', 'FaMoon', '4A4E8C'], ['fa6', 'FaHand', '1D5FBF']], [['fa6', 'FaPersonDress', 'D6336C'], ['fa6', 'FaQuestion', '0E7C86']]],
    labels: ['morning', 'evening', 'asking a girl'],
    order: [1, 2, 0],
    notes: 'Key words to spot: صَبَاحُ (morning), مَسَاءُ (evening), the final ـكِ (a girl). The other three website game items (مَرْحَبًا، كَيْفَ حَالُكَ؟، إِلَى اللِّقَاءِ) are for homework.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website game “Response Relay”', title: 'Choose the natural next move', ar: 'سِبَاقُ الرُّدُودِ',
    seed: 11,
    questions: bank(1, 'relay', [1, 2, 4, 7, 6]),
    side: { kind: 'core', label: 'CORE', text: 'Find the PAIR.\nMorning → the morning reply.\nHello → hello.\nA guest → a welcome.' },
    answerSlide: { min: 0, eyebrow: 'We do · Response Relay answers', title: 'Relay: answers', ar: 'الإِجَابَاتُ' },
    notes: `WE DO — website “Response Relay” (5 of its 8 decisions; the other 3 are homework). Guided rehearsal, so immediate feedback is appropriate (website).
After each answer: class SAYS the pair aloud (A: opening, B: reply) — chunk practice.`,
    answerNotes: 'Reveal; the class says each pair aloud once.',
  },
  F.listening(site, {
    coreTip: 'Listen twice.\nCore: questions 1, 3 and 4.\nListen for: morning · the -ki ending · fine.',
    routes: 'Core: questions 1, 3 and 4. Develop / Stretch: all 5.',
    gloss: site.speaking.model.map(([who, ar, en]) => [`${who}: ${ar}`, en]),
  }),
  {
    type: 'sorter', stage: 'wedo', flex: true, eyebrow: 'We do · sort the moves', title: 'Open, check in or close?', ar: 'صَنِّفْ',
    categories: ['Open or reply', 'Check in or answer', 'Close'],
    items: [
      { ar: 'مَرْحَبًا', cat: 0 }, { ar: 'بِخَيْرٍ', cat: 1 }, { ar: 'مَعَ السَّلَامَةِ', cat: 2 }, { ar: 'صَبَاحُ النُّورِ', cat: 0 },
      { ar: 'كَيْفَ حَالُكَ؟', cat: 1 }, { ar: 'إِلَى اللِّقَاءِ', cat: 2 }, { ar: 'أَهْلًا وَسَهْلًا', cat: 0 }, { ar: 'وَأَنْتِ؟', cat: 1 }, { ar: 'وَعَلَيْكُمُ السَّلَامُ', cat: 0 },
    ],
    answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — teacher-made sorter based on the website conversation map (FLEX, 2 min). Core clue: a “?” means check-in; السَّلَامَة / اللِّقَاء mean goodbye.',
  },
  F.repairSlide(site, [
    'Ahmad is a boy. Look at the last vowel.',
    'It is morning. Which reply matches?',
    'Answer the question you heard.',
  ]),
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'السَّلَامُ عَلَيْكُمْ! كَيْفَ حَالُكَ؟' },
      { route: 'develop', ar: 'صَبَاحُ الخَيْرِ! كَيْفَ حَالُكِ؟' },
      { route: 'develop', ar: 'مَسَاءُ الخَيْرِ! كَيْفَ حَالُكَ؟' },
      { route: 'stretch', ar: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ' },
    ],
    stems: [
      { route: 'core', ar: 'وَعَلَيْكُمُ السَّلَامُ. بِخَيْرٍ، شُكْرًا.' },
      { route: 'develop', ar: 'صَبَاحُ النُّورِ. بِخَيْرٍ، الحَمْدُ لِلَّهِ. وَأَنْتَ؟' },
      { route: 'stretch', ar: 'وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ …' },
      { route: 'sum', ar: 'إِلَى اللِّقَاءِ! مَعَ السَّلَامَةِ!' },
    ],
    modelEn: ['Good morning, Sara.', 'Good morning, Ahmad.'],
    notes: `WEBSITE “FOUR-MOVE MINGLE MISSION” (online version): 5-minute timer. Pairs on open mic, one after another; each pair must complete all four functions — Open · Respond · Check in and answer · Close — and change partner after every exchange. The class ticks the moves heard in the chat (1 2 3 4).
Before: each student chooses one opening and one closing and rehearses the gendered question they will need (website).
After (website): “The phrase that became easier was … The sound I still need to practise is …”`,
  }),
  F.routesSlide(site, {
    core: { amount: '4 lines', how: 'Copy the pairs from the frames: open → reply → how are you? → fine.' },
    develop: { amount: '6 lines', how: 'The website homework dialogue: every line answers the one before; -ka / -ki correct.' },
    stretch: { amount: '6–8 lines', how: 'Use the extended greeting; no transliteration; both a morning and a closing pair.' },
  }),
  F.framesSlide({
    core: [
      { en: 'A: Peace be upon you.', ar: 'السَّلَامُ عَلَيْكُمْ.' },
      { en: 'B: And upon you be peace.', ar: 'وَعَلَيْكُمُ ______ .' },
      { en: 'A: How are you? (to a boy)', ar: 'كَيْفَ ______ ؟' },
      { en: 'B: Fine, thank you.', ar: '______ ، شُكْرًا.' },
      { en: 'A: Goodbye.', ar: 'مَعَ ______ .' },
    ],
    develop: [
      { en: 'Good morning, …', ar: 'صَبَاحُ الخَيْرِ يَا ______ .' },
      { en: 'Good morning (reply), …', ar: 'صَبَاحُ ______ يَا ______ .' },
      { en: 'How are you? (to a girl)', ar: 'كَيْفَ حَالُـ ___ ؟' },
      { en: 'Fine, praise be to God. And you?', ar: 'بِخَيْرٍ، الحَمْدُ لِلَّهِ. وَ ______ ؟' },
      { en: 'See you later.', ar: 'إِلَى ______ .' },
    ],
    bank: ['السَّلَامُ', 'حَالُكَ', 'حَالُكِ', 'بِخَيْرٍ', 'النُّورِ', 'الخَيْرِ', 'السَّلَامَةِ', 'اللِّقَاءِ', 'أَنْتَ', 'أَنْتِ', 'شُكْرًا', 'مَرْحَبًا'],
  }),
  F.stretchSlide(site, [
    ['السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ', 'peace be upon you, and the mercy of God and His blessings'],
    ['وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ', 'the full reply'],
    ['أَهْلًا وَسَهْلًا', 'welcome'],
    ['كَيْفَ الحَالُ؟', 'how are things? (no gender ending)'],
    ['مَسَاءُ الخَيْرِ ← مَسَاءُ النُّورِ', 'the evening pair'],
  ]),
  F.modelSlide(site,
    'Ahmad: Good morning, Sara. — Sara: Good morning, Ahmad. — Ahmad: How are you? — Sara: Fine, praise be to God. And you? — Ahmad: Fine, thank you. — Sara: See you later. — Ahmad: Goodbye.',
    ['a morning pair', 'the -ki question', '“and you?” to a boy', 'two closings'],
    'This is the website dialogue (section 6, “Notice who is speaking to whom”).'),
  F.selfCheckSlide([
    { route: 'core', text: 'I can say and answer السَّلَامُ عَلَيْكُمْ.' },
    { route: 'core', text: 'I can answer “how are you?” with بِخَيْرٍ.' },
    { route: 'develop', text: 'I can use the morning and evening pairs.' },
    { route: 'develop', text: 'I choose حَالُكَ for a boy and حَالُكِ for a girl.' },
    { route: 'stretch', text: 'I can hold a four-line exchange without reading every word.' },
  ]),
  F.exitTicket(bank(1, 'finalItems', [1, 5, 8]), 10),
  F.prepSlide({
    ...NEXT,
    words: [['مَا اسْمُكَ؟', 'What is your name? (to a boy)', ''], ['اِسْمِي …', 'My name is …', ''], ['تَشَرَّفْنَا', 'Pleased to meet you.', ''], ['هَذَا صَدِيقِي', 'This is my friend. (m.)', ''], ['هَذِهِ صَدِيقَتِي', 'This is my friend. (f.)', '']],
    questionEn: 'Practise: say your name in Arabic three times, then ask a family member theirs.',
    questionAr: 'اِسْمِي …',
    homework: {
      core: 'Website F2-L01: play the picture game “Hello, Goodbye and How Are You?”, then write 4 greeting lines.',
      develop: 'Website homework: the six-line imaginary dialogue (at least four phrases from today).',
      stretch: 'Heritage extension: a natural 6–8 line dialogue with the extended greeting, no transliteration.',
    },
    wordsSource: 'The five words are the website F2-L02 vocabulary (the name question, the answer, “pleased to meet you” and introducing a friend).',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: learn the 5 name phrases before next lesson.' }),
];

module.exports = { meta, slides };
