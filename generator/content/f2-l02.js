'use strict';
/*
 * F2-L02 · What Is Your Name?
 * Website: Pathways › Foundation › F2 › Lesson 2. مَا اسْمُكَ / مَا اسْمُكِ؟ · اِسْمِي … · وَأَنْتَ / وَأَنْتِ؟ · تَشَرَّفْنَا ·
 * هَذَا صَدِيقِي / هَذِهِ صَدِيقَتِي; name-form labels; Name-Card Mission; suffix decision check; listening (4 lines);
 * Adam–Maryam reading; name exchange speaking; name card writing; ten-question checkpoint.
 */
const F = require('./f2-common');
const game = require('../site-data/pathway-visual-games.json')['f2-l02'];
const { q, bank } = F;

const meta = F.meta({
  n: 2, fileTitle: 'What_Is_Your_Name', chip: 'Names',
  title: 'What Is Your Name?', arabic: 'مَا اسْمُكَ؟ مَا اسْمُكِ؟',
  focus: 'Open a conversation, ask one person’s name accurately (-ka to a boy, -ki to a girl), answer with اِسْمِي …, and introduce a friend.',
  icon: 'FaIdCard',
});
const NEXT = { nextCode: 'F2-L03', nextTitle: 'How Old Are You?', nextAr: 'كَمْ عُمْرُكَ؟' };

const site = {
  speaking: {
    context: 'Meet someone and exchange names',
    model: [
      ['A', 'مَرْحَبًا. مَا اسْمُكَ؟', 'Hello. What is your name?'],
      ['B', 'مَرْحَبًا. اِسْمِي آدَم. وَأَنْتَ؟', 'Hello. My name is Adam. And you?'],
      ['A', 'اِسْمِي خَالِد. تَشَرَّفْنَا.', 'My name is Khalid. Pleased to meet you.'],
      ['B', 'تَشَرَّفْنَا.', 'Pleased to meet you.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: create your Arabic name card and a four-line name exchange. Stretch: add one line introducing a friend.',
    checklist: ['Arabic begins on the right.', 'The question ends with the Arabic question mark ؟', 'I chose كَ or كِ for the listener.', 'I used اِسْمِي before my name.'],
    model: 'مَرْحَبًا.\nمَا اسْمُكِ؟\nاِسْمِي مَرْيَم. وَأَنْتَ؟\nاِسْمِي آدَم. تَشَرَّفْنَا.',
  },
  differentiation: {
    core: 'Write your own name line and the two questions (to a boy, to a girl).',
    develop: 'Write a four-line name exchange.',
    stretch: 'Add one line introducing a friend (“This is my friend; his / her name is …”).',
  },
  mistakes: [
    { wrong: 'زَيْنَب ← مَا اسْمُكَ؟', right: 'زَيْنَب ← مَا اسْمُكِ؟', why: 'Choose the ending from the LISTENER: Zaynab is a girl, so -ki.' },
    { wrong: 'اِسْمُكَ خَالِد.', right: 'اِسْمِي خَالِد.', why: 'Your own answer means “my name”.' },
    { wrong: 'هَذَا صَدِيقَتِي.', right: 'هَذِهِ صَدِيقَتِي.', why: 'A female friend: BOTH words must be feminine.' },
  ],
  listening: {
    title: 'Catch the ending and the name',
    script: 'مَا اسْمُكَ؟ — اِسْمِي خَالِد. / مَا اسْمُكِ؟ — اِسْمِي زَيْنَب. / السَّلَامُ عَلَيْكُمْ. اِسْمِي يُوسُف. وَمَا اسْمُكَ؟ / مَرْحَبًا. اِسْمِي مَرْيَم. تَشَرَّفْنَا.',
    questions: bank(2, 'listeningQuiz', [0, 1, 2, 3, 5]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
  reading: {
    title: 'Adam meets Maryam',
    text: 'آدَم: السَّلَامُ عَلَيْكُمْ. مَا اسْمُكِ؟\nمَرْيَم: وَعَلَيْكُمُ السَّلَامُ. اِسْمِي مَرْيَم. وَأَنْتَ؟\nآدَم: اِسْمِي آدَم. تَشَرَّفْنَا.\nمَرْيَم: تَشَرَّفْنَا.',
    questions: bank(2, 'readingQuiz').map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 2,
    source: 'Website sections used: the three-question greeting retrieval, name vocabulary and form labels, the suffix pattern اِسْمُكَ / اِسْمُكِ / اِسْمِي, the suffix decision check, listening (four lines, six questions), the Adam–Maryam reading (five questions), the model name exchange and partner evidence, the name-card writing task and the ten-question checkpoint. Picture match: website visual game “What Is Your Name?” (two name cards) plus one teacher-made friend card.',
    support: `• Core outcome (website “essential outcome”): choose مَا اسْمُكَ؟ or مَا اسْمُكِ؟ for the LISTENER and answer with اِسْمِي …. Keep the model visible for Core throughout.
• Develop: cover the model, swap partners and change the addressee. Stretch: introduce a friend (هَذَا صَدِيقِي، اسْمُهُ … / هَذِهِ صَدِيقَتِي، اسْمُهَا …).
• Likely misconceptions (website): choosing -ka / -ki from the speaker’s own gender; writing اِسْمُكَ when meaning “my name”; the Arabic question mark ؟ on the wrong side; restarting the vowel in اِسْم after مَا.
• Urdu bridge: اسم، شرف، لقب، اوّل، سوال.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Name words, then one noun with three endings.', wedo: 'Picture match, choose the ending, listen and read.', next: 'F2-L03' }),
  F.doNow({
    questions: [
      q('What does تَشَرَّفْنَا mean?', ['Pleased to meet you.', 'See you later.', 'Thank you.'], 'Prepared at home.'),
      q('Which phrase means “My name is …”?', ['اِسْمِي …', 'مَا اسْمُكَ؟', 'هَذَا صَدِيقِي'], 'Prepared at home.'),
      ...bank(2, 'retrieval', [0, 1, 2]),
    ],
    keyIdea: { text: 'Look at the LISTENER, then choose the ending: -ka for a boy, -ki for a girl.', ar: 'مَا اسْمُكَ؟  ·  مَا اسْمُكِ؟' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 are the website’s “three-question greeting retrieval” (F2-L01).',
  }),
  F.objectivesSlide([
    'Ask a boy or a girl their name accurately.',
    'Say اِسْمِي … and give my name.',
    'Hear the difference between -ka and -ki.',
    'Read, speak and write a short name exchange.',
  ], {
    core: ['I can choose the correct question for a boy or a girl.', 'I can give my name with a model.'],
    develop: ['I can open, ask, answer and close a short exchange.', 'I can do it without reading every line.'],
    stretch: ['I can introduce a male or female friend.', 'I can use a fuller “pleased to meet you” phrase.'],
  }, 2, 'Website “By the end, I can …” (left) and the website Core / Develop / Stretch goals (right).'),
  F.keywordsSlide({
    text: '12 words and phrases from the website in 3 groups. Core first: the question, the answer, “and you?” and “pleased to meet you”.',
    groups: [
      { head: 'GROUP 1', name: 'The name conversation · 6' },
      { head: 'GROUP 2', name: 'Friends and names · 6' },
      { head: 'GROUP 3', name: 'Names on a form · 3 (FLEX)' },
    ],
    bridge: [
      { ar: 'اِسْمٌ', urdu: 'اسم', tr: 'ism', en: 'name, noun' },
      { ar: 'تَشَرَّفْنَا', urdu: 'شرف', tr: 'sharaf', en: 'honour' },
      { ar: 'اللَّقَبُ', urdu: 'لقب', tr: 'laqab', en: 'title, surname' },
      { ar: 'الأَوَّلُ', urdu: 'اوّل', tr: 'awwal', en: 'first' },
      { ar: 'سُؤَالٌ', urdu: 'سوال', tr: 'sawāl', en: 'question' },
    ],
    notes: `URDU BRIDGE: اسم (ism — Urdu grammar uses it for “noun”), شرف (sharaf, honour → تَشَرَّفْنَا “we are honoured” = pleased to meet you), لقب (laqab), اوّل (awwal → الاسم الأول = first name), سوال (sawāl → today’s name QUESTION).
Website vocabulary scope: ACTIVE core = مَا اسْمُكَ؟ مَا اسْمُكِ؟ اِسْمِي… وَأَنْتَ؟ وَأَنْتِ؟ تَشَرَّفْنَا. Stretch / receptive = the friend phrases and form labels.`,
  }),
  {
    type: 'vocab', stage: 'teach', min: 3, eyebrow: 'Key words · Group 1 · the name conversation', title: 'Ask, answer, ask back', ar: 'مُفْرَدَاتُ السُّؤَالِ عَنِ الاِسْمِ',
    items: [
      { n: 1, ar: 'مَا اسْمُكَ؟', en: 'What is your name? (to a boy)', tr: 'mas-mu-ka', tag: 'to m.', core: true, note: 'Listen for the final -ka.' },
      { n: 2, ar: 'مَا اسْمُكِ؟', en: 'What is your name? (to a girl)', tr: 'mas-mu-ki', tag: 'to f.', core: true, note: 'Listen for the final -ki.' },
      { n: 3, ar: 'اِسْمِي …', en: 'My name is …', tr: 'is-mī …', tag: 'answer', core: true, note: 'Add your name after the phrase.' },
      { n: 4, ar: 'وَأَنْتَ؟', en: 'And you?', tr: 'wa-an-ta · wa-an-ti · wa-an-tum', tag: 'm · f · pl', core: true, forms: [{ l: 'm.', ar: 'وَأَنْتَ؟' }, { l: 'f.', ar: 'وَأَنْتِ؟' }, { l: 'pl.', ar: 'وَأَنْتُمْ؟' }] },
      { n: 5, ar: 'تَشَرَّفْنَا', en: 'Pleased to meet you.', tr: 'ta-shar-raf-nā', tag: 'fixed phrase', core: true, note: 'Stretch: تَشَرَّفْتُ بِلِقَائِكَ / بِلِقَائِكِ' },
      { n: 6, ar: 'اِسْمٌ', en: 'name', tr: 'is-mu-ka · is-mu-ki · is-mu-kum', tag: 'your: m · f · pl', forms: [{ l: 'your m.', ar: 'اِسْمُكَ' }, { l: 'your f.', ar: 'اِسْمُكِ' }, { l: 'your pl.', ar: 'اِسْمُكُمْ' }] },
    ],
    notes: `KEY WORDS — Group 1 (website “Build the name conversation”). Hear → Say → See → Use.
Pronunciation (website “Script connection”): اِسْم begins with hamzat al-waṣl — after مَا the phrase flows as mā-smuka / mā-smuki; do not restart the vowel.
Drill in pairs: teacher points at a boy / girl picture → class asks the matching question.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · friends and names', title: 'Introduce a friend', ar: 'هَذَا صَدِيقِي',
    items: [
      { n: 7, ar: 'صَدِيقٌ', en: 'a friend', tr: 'ṣa-dīq · ṣa-dī-qa · aṣ-di-qāʾ', tag: 'm · f · pl', forms: [{ l: 'm.', ar: 'صَدِيقٌ' }, { l: 'f.', ar: 'صَدِيقَةٌ' }, { l: 'pl.', ar: 'أَصْدِقَاءُ' }] },
      { n: 8, ar: 'هَذَا صَدِيقِي', en: 'This is my friend. (m.)', tr: 'hā-dhā ṣa-dī-qī', tag: 'Stretch', forms: [{ l: 'this m.', ar: 'هَذَا' }, { l: 'this f.', ar: 'هَذِهِ' }, { l: 'these', ar: 'هَؤُلَاءِ' }] },
      { n: 9, ar: 'هَذِهِ صَدِيقَتِي', en: 'This is my friend. (f.)', tr: 'hā-dhi-hi ṣa-dī-qa-tī', tag: 'Stretch', note: 'Both words are feminine.' },
      { n: 10, ar: 'خَالِد · يُوسُف', en: 'Khalid · Yusuf (boys)', tr: 'khā-lid · yū-suf', tag: 'names m.', core: true, note: 'Ask them: مَا اسْمُكَ؟' },
      { n: 11, ar: 'زَيْنَب · مَرْيَم', en: 'Zaynab · Maryam (girls)', tr: 'zay-nab · mar-yam', tag: 'names f.', core: true, note: 'Ask them: مَا اسْمُكِ؟' },
      { n: 12, ar: 'اِسْمُهُ … / اِسْمُهَا …', en: 'His name is … / Her name is …', tr: 'is-mu-hu · is-mu-hā', tag: 'Stretch', note: 'Use it after “this is my friend”.' },
    ],
    notes: `KEY WORDS — Group 2 (website Stretch language + the four website characters).
Card 7 shows the m / f / pl forms of “friend”; card 8 the three forms of “this / these”. The feminine forms both carry the ـة / ـتِـ sound — a useful pattern for F2-L05 (gender agreement).`,
  },
  {
    type: 'formsTable', stage: 'teach', flex: true, eyebrow: 'Key words · Group 3 · FLEX · names on a simple form (website)', title: 'Read a name form', ar: 'الاسْمُ عَلَى الاسْتِمَارَةِ',
    cols: [{ label: 'On the form (unvowelled)', w: 4.2, size: 26 }, { label: 'Say it', w: 3.4 }, { label: 'Meaning', w: 4.73 }],
    rows: [
      { core: true, cells: ['الاسم الأول', 'al-ism al-awwal', 'first name — recognise now'] },
      { cells: ['اسم العائلة', 'ism al-ʿāʾila', 'family name — recognise now'] },
      { cells: ['اللقب', 'al-laqab', 'surname / family name — recognise now'] },
      { cells: [{ ar: 'تَهَجَّأْ اسْمَكَ', sub: 'to a boy · to a girl: تَهَجَّئِي' }, 'ta-haj-jaʾ is-ma-ka', 'Spell your name. (optional Stretch)'] },
    ],
    notes: 'FORM LABELS (website “Vocabulary-list bridge”). Real forms are unvowelled — this is F1-L10 decoding in action. Receptive only today: students recognise the labels; the website checkpoint asks about الاسم الأول and اللقب.',
  },
  {
    type: 'codeWord', stage: 'teach', min: 3, eyebrow: 'Grammar focus · one noun, three useful endings', title: 'Whose name?', ar: 'اِسْمٌ ← اِسْمُكَ / اِسْمُكِ / اِسْمِي',
    word: '{m|اِسْمُ}{e|كِ}', tr: 'is-mu-ki · your name (to a girl)',
    parts: [
      { code: 'm', ar: 'اِسْمُ', title: 'MEANING: name', text: 'The word for “name” stays recognisable.' },
      { code: 'e', ar: 'كَ / كِ', title: 'ENDING: your', text: '-ka to a boy · -ki to a girl.' },
      { code: 'w', ar: 'ـِي', title: 'WHO: my', text: 'The long -ī ending means “my”: اِسْمِي.' },
    ],
    notes: `GRAMMAR (website section 3). The attached ending tells us WHOSE name: اِسْمُكَ your (to a boy) · اِسْمُكِ your (to a girl) · اِسْمِي my.
Website common mistake: do not choose the ending from YOUR own gender — choose it for the person you are speaking TO. Memory cue: look at the listener, then choose the final vowel.
Website pronunciation notice: without vowels, both questions look the same (ما اسمك؟) — context and careful listening tell you -ka or -ki.
Link to F2-L01: exactly the same endings as حَالُكَ / حَالُكِ.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Grammar focus · the same endings on every noun', title: 'My, your (boy), your (girl), your (group)', ar: 'اِسْمِي · اِسْمُكَ · اِسْمُكِ · اِسْمُكُمْ',
    cols: [{ label: 'my', w: 2.5, size: 22 }, { label: 'your (to a boy)', w: 2.5, size: 22 }, { label: 'your (to a girl)', w: 2.5, size: 22 }, { label: 'your (to a group)', w: 2.5, size: 22 }, { label: 'Word', w: 2.33 }],
    rows: [
      { core: true, cells: [{ ar: 'اِسْمِ{w|ي}', sub: 'is-mī' }, { ar: 'اِسْمُ{e|كَ}', sub: 'is-mu-ka' }, { ar: 'اِسْمُ{e|كِ}', sub: 'is-mu-ki' }, { ar: 'اِسْمُ{e|كُمْ}', sub: 'is-mu-kum' }, 'name'] },
      { cells: [{ ar: 'حَالِ{w|ي}', sub: 'ḥā-lī' }, { ar: 'حَالُ{e|كَ}', sub: 'ḥā-lu-ka' }, { ar: 'حَالُ{e|كِ}', sub: 'ḥā-lu-ki' }, { ar: 'حَالُ{e|كُمْ}', sub: 'ḥā-lu-kum' }, 'state (F2-L01)'] },
      { cells: [{ ar: 'صَدِيقِ{w|ي}', sub: 'ṣa-dī-qī' }, { ar: 'صَدِيقُ{e|كَ}', sub: 'ṣa-dī-qu-ka' }, { ar: 'صَدِيقُ{e|كِ}', sub: 'ṣa-dī-qu-ki' }, { ar: 'صَدِيقُ{e|كُمْ}', sub: 'ṣa-dī-qu-kum' }, 'friend'] },
    ],
    foot: 'Answer with “my” — whoever you are: اِسْمِي …',
    notes: 'ONE PATTERN, MANY WORDS (teacher-made from the website pattern). Blue = “my”; pink = “your”. Next lesson the same endings return on عُمْر (age): عُمْرُكَ / عُمْرُكِ / عُمْرِي — say it now as a preview.',
  },
  F.quickCheck(bank(2, 'grammarCheck', [0, 1, 2, 3]), 'website “Suffix decision check” questions 1–4.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me exchange names', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Greet', ar: 'السَّلَامُ عَلَيْكُمْ.', think: 'Every name question begins with a greeting (F2-L01).' },
      { head: 'Look, then ask', ar: 'مَا اسْمُ{e|كِ}؟', think: 'I am speaking to Maryam — a girl — so -ki.' },
      { head: 'She answers and asks back', ar: '{w|اِسْمِي} مَرْيَم. وَأَنْتَ؟', think: 'She says “my name”, then asks me: وَأَنْتَ (to a boy).' },
      { head: 'Answer and close', ar: '{w|اِسْمِي} آدَم. تَشَرَّفْنَا.', think: 'My name, then the polite phrase.' },
    ],
    legend: ['e', 'w'], legendLabels: { e: 'YOUR', w: 'MY' },
    model: 'السَّلَامُ عَلَيْكُمْ. مَا اسْمُ{e|كِ}؟ — {w|اِسْمِي} مَرْيَم. وَأَنْتَ؟ — {w|اِسْمِي} آدَم. تَشَرَّفْنَا.',
    modelEn: 'Peace be upon you. What is your name? — My name is Maryam. And you? — My name is Adam. Pleased to meet you.',
    notes: 'I DO (3 min) — the website Adam–Maryam dialogue, modelled with a think-aloud. Students copy it. Point to the ؟ — the Arabic question mark faces the other way and goes at the LEFT end (website checklist).',
  },
  F.gameSlide({ ...game, items: [game.items[0], game.items[1], { sentence: 'هَذِهِ صَدِيقَتِي.' }] }, {
    title: 'Match the picture to the sentence',
    en: ['My name is Maryam.', 'My name is Khalid.', 'This is my friend. (f.)'],
    icons: [[['fa6', 'FaPersonDress', 'D6336C'], ['fa6', 'FaIdCard', '1D5FBF']], [['fa6', 'FaPerson', '1D5FBF'], ['fa6', 'FaIdCard', '1D5FBF']], [['fa6', 'FaPersonDress', 'D6336C'], ['fa6', 'FaHeart', 'D6336C']]],
    labels: ['girl · name card', 'boy · name card', 'a female friend'],
    order: [2, 0, 1],
    notes: 'Cards 1–2 are the website visual game (“What Is Your Name?”); card 3 is teacher-made (the website’s Stretch friend phrase). Key words to spot: the names, and هَذِهِ … صَدِيقَتِي.',
  }),
  F.repairSlide(site, [
    'Who is the listener? Look at the last vowel.',
    'Is this your own name?',
    'Is the friend male or female? Check BOTH words.',
  ]),
  F.listening(site, {
    coreTip: 'Listen twice.\nFirst: boy or girl?\nThen: which name?',
    routes: 'Core: questions 1–4. Develop / Stretch: all 5.',
    gloss: [
      ['مَا اسْمُكَ؟ — اِسْمِي خَالِد.', 'What is your name? (to a boy) — My name is Khalid.'],
      ['مَا اسْمُكِ؟ — اِسْمِي زَيْنَب.', 'What is your name? (to a girl) — My name is Zaynab.'],
      ['السَّلَامُ عَلَيْكُمْ. اِسْمِي يُوسُف. وَمَا اسْمُكَ؟', 'Peace be upon you. My name is Yusuf. And what is your name?'],
      ['مَرْحَبًا. اِسْمِي مَرْيَم. تَشَرَّفْنَا.', 'Hello. My name is Maryam. Pleased to meet you.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 2, eyebrow: 'We do · reading · track the speakers (website)', title: 'Adam meets Maryam', ar: 'اِقْرَأْ حِوَارًا قَصِيرًا',
    lines: [
      ['آدَم: السَّلَامُ عَلَيْكُمْ. مَا اسْمُكِ؟', 'Peace be upon you. What is your name? · speaking to a girl'],
      ['مَرْيَم: وَعَلَيْكُمُ السَّلَامُ. اِسْمِي مَرْيَم. وَأَنْتَ؟', 'And upon you peace. My name is Maryam. And you? · to a boy'],
      ['آدَم: اِسْمِي آدَم. تَشَرَّفْنَا.', 'My name is Adam. Pleased to meet you.'],
      ['مَرْيَم: تَشَرَّفْنَا.', 'Pleased to meet you.'],
    ],
    notes: `READING (website section 5). Website strategy “three colours, three jobs”: underline greetings once · circle the questions · box the two names (use Teams annotation or books).
Authentic purpose (website): the correct answer comes from the speaker labels and the final vowel — not from guessing which name “sounds” male or female.
Core: read with the English. Develop / Stretch: cover the English.`,
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions · “find the evidence” (website)', title: 'Prove it from the dialogue', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: site.reading.questions.map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, why: x.feedback })),
    side: { kind: 'info', head: 'FIND THE EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Answer, then point to the exact Arabic line that proves it.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions (all five). Website answers: 1 Adam; 2 Maryam; 3 Adam; 4 وَأَنْتَ؟; 5 تَشَرَّفْنَا.',
    answerNotes: 'For each answer, a student reads aloud the line that proves it (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَرْحَبًا. مَا اسْمُكَ؟' },
      { route: 'develop', ar: 'السَّلَامُ عَلَيْكُمْ. مَا اسْمُكِ؟' },
      { route: 'develop', ar: 'مَا اسْمُكَ؟ وَمَا اسْمُ صَدِيقِكَ؟' },
      { route: 'stretch', ar: 'مَنْ هَذَا؟ مَنْ هَذِهِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'اِسْمِي ______ .' },
      { route: 'develop', ar: 'اِسْمِي ______ . وَأَنْتَ / وَأَنْتِ؟' },
      { route: 'stretch', ar: 'هَذَا صَدِيقِي، اِسْمُهُ ______ .' },
      { route: 'sum', ar: 'تَشَرَّفْنَا!' },
    ],
    modelEn: ['Hello. What is your name?', 'Hello. My name is Adam. And you?'],
    notes: `WEBSITE PARTNER EVIDENCE (the listener ticks, in the chat 1–5): 1 opened politely · 2 chose -ka / -ki accurately · 3 gave the name with اِسْمِي · 4 asked back with وَأَنْتَ؟ / وَأَنْتِ؟ · 5 closed with تَشَرَّفْنَا.
Routes (website): Core keeps the model visible with one partner · Develop covers the model, swaps partners and changes the addressee · Stretch introduces their partner (هَذَا صَدِيقِي، اسْمُهُ … / هَذِهِ صَدِيقَتِي، اسْمُهَا …).`,
  }),
  F.routesSlide(site, {
    core: { amount: 'name card + 2 questions', how: 'Your name line, then the question to a boy and to a girl — use the frames.' },
    develop: { amount: '4 lines', how: 'Greet → ask → answer and ask back → pleased to meet you.' },
    stretch: { amount: '4 lines + 1', how: 'Add one line introducing a friend; “this” must match the friend (m. / f.).' },
  }),
  F.framesSlide({
    core: [
      { en: 'My name is …', ar: 'اِسْمِي ______ .' },
      { en: 'What is your name? (to a boy)', ar: 'مَا ______ ؟' },
      { en: 'What is your name? (to a girl)', ar: 'مَا ______ ؟' },
      { en: 'And you? (to a girl)', ar: 'وَ ______ ؟' },
    ],
    develop: [
      { en: 'Hello. What is your name?', ar: 'مَرْحَبًا. مَا اسْمُـ ___ ؟' },
      { en: 'My name is … And you?', ar: 'اِسْمِي ______ . وَ ______ ؟' },
      { en: 'My name is … Pleased to meet you.', ar: 'اِسْمِي ______ . ______ .' },
      { en: 'This is my friend, his name is …', ar: 'هَذَا صَدِيقِي، اِسْمُهُ ______ .' },
      { en: 'This is my friend, her name is …', ar: 'هَذِهِ صَدِيقَتِي، اِسْمُهَا ______ .' },
    ],
    bank: ['اِسْمِي', 'اسْمُكَ', 'اسْمُكِ', 'أَنْتَ', 'أَنْتِ', 'تَشَرَّفْنَا', 'مَرْحَبًا', 'خَالِد', 'زَيْنَب', 'يُوسُف', 'مَرْيَم'],
  }),
  F.modelSlide(site,
    'Hello. — What is your name? (to a girl) — My name is Maryam. And you? (to a boy) — My name is Adam. Pleased to meet you.',
    ['a greeting', 'the -ki question', 'my name', 'pleased to meet you'],
    'Website “achievable model”. Point out the ؟ at the left end of each question.'),
  F.selfCheckSlide([
    { route: 'core', text: 'My question matches the listener: -ka or -ki.' },
    { route: 'core', text: 'I used اِسْمِي before my name.' },
    { route: 'develop', text: 'Each question ends with the Arabic question mark ؟' },
    { route: 'develop', text: 'I asked back with “and you?”.' },
    { route: 'stretch', text: 'I introduced a friend with هَذَا or هَذِهِ matched.' },
  ]),
  F.exitTicket(bank(2, 'finalQuiz', [1, 2, 4]), 10),
  F.prepSlide({
    ...NEXT,
    words: [['كَمْ عُمْرُكَ؟', 'How old are you? (to a boy)', ''], ['كَمْ عُمْرُكِ؟', 'How old are you? (to a girl)', ''], ['عُمْرِي … سَنَةً', 'I am … years old.', ''], ['سَنَةٌ', 'a year', 'pl. سَنَوَاتٌ'], ['١١ – ٢٠', 'the numbers 11 to 20', '']],
    questionEn: 'Website “Prepare for F2-L03”: practise writing your name in Arabic and revise the numbers 1–20.',
    questionAr: 'اِسْمِي …',
    homework: {
      core: 'Website F2-L02: the Name-Card Mission (6 cards) and the picture game “What Is Your Name?”.',
      develop: 'Write your name card and a four-line exchange (type, draw or paper route).',
      stretch: 'Add a line introducing a friend, then the website ten-question checkpoint (aim for 8/10).',
    },
    wordsSource: 'The five words are the website F2-L03 core vocabulary (the age question, the answer and “year”); the numbers 11–20 are on the website age page.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: revise numbers 1–20 + learn the age question.' }),
];

module.exports = { meta, slides };
