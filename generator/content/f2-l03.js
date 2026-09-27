'use strict';
/*
 * F2-L03 · How Old Are You?
 * Website: Pathways › Foundation › F2 › Lesson 3. كَمْ عُمْرُكَ / كَمْ عُمْرُكِ؟ · عُمْرِي … سَنَةً (11–20) ·
 * سَنَوَاتٍ (3–10) · ages 11–20 · Age-Card Mission · age-pattern check · listening (3 exchanges) · Adam–Maryam
 * reading · name-and-age speaking · age line writing · ten-question checkpoint.
 */
const F = require('./f2-common');
const game = require('../site-data/pathway-visual-games.json')['f2-l03'];
const { q, bank } = F;

const meta = F.meta({
  n: 3, fileTitle: 'How_Old_Are_You', chip: 'Age',
  title: 'How Old Are You?', arabic: 'كَمْ عُمْرُكَ؟ كَمْ عُمْرُكِ؟',
  focus: 'Ask one person their age (-ka to a boy, -ki to a girl), answer with عُمْرِي … سَنَةً, and recognise the ages 11–20 in short conversations and profiles.',
  icon: 'FaCakeCandles', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F2-L04', nextTitle: 'Nationality and Language', nextAr: 'الجِنْسِيَّةُ وَاللُّغَةُ' };
const n2 = (d, ar, tr, en) => ({ core: ['١٢', '١٣', '١٤', '١٥'].includes(d), cells: [{ ar: d, sub: en }, { ar, sub: tr }, { ar: `عُمْرِي ${ar} سَنَةً.`, sub: `I am ${en} years old.` }] });

const site = {
  speaking: {
    context: 'Exchange names and ages',
    model: [
      ['A', 'مَرْحَبًا. مَا اسْمُكِ؟', 'Hello. What is your name? (to a girl)'],
      ['B', 'اِسْمِي زَيْنَب. وَأَنْتَ؟', 'My name is Zaynab. And you?'],
      ['A', 'اِسْمِي خَالِد. كَمْ عُمْرُكِ؟', 'My name is Khalid. How old are you?'],
      ['B', 'عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً. وَأَنْتَ؟', 'I am thirteen years old. And you?'],
      ['A', 'عُمْرِي اِثْنَتَا عَشْرَةَ سَنَةً.', 'I am twelve years old.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: write your own age line, both gendered age questions and a four-line name-and-age exchange. Stretch: include one younger age with سَنَوَاتٍ.',
    checklist: ['Arabic begins on the right; each question ends with ؟', 'I chose كَ or كِ for the listener.', 'I used عُمْرِي before the number.', 'I used سَنَةً after an age from 11–20.'],
    model: 'مَرْحَبًا.\nمَا اسْمُكِ؟\nاِسْمِي مَرْيَم. كَمْ عُمْرُكَ؟\nعُمْرِي خَمْسَ عَشْرَةَ سَنَةً.',
  },
  differentiation: {
    core: 'Write your own age line and the two age questions (to a boy, to a girl).',
    develop: 'Write a four-line name-and-age exchange.',
    stretch: 'Add a younger person (a brother or sister, age 3–10) with سَنَوَاتٍ.',
  },
  mistakes: [
    { wrong: 'عُمْرُكَ ثَلَاثَ عَشْرَةَ سَنَةً.', right: 'عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً.', why: 'Do not copy the question ending: your own answer is “my age”.' },
    { wrong: 'زَيْنَب ← كَمْ عُمْرُكَ؟', right: 'زَيْنَب ← كَمْ عُمْرُكِ؟', why: 'Zaynab is a girl: -ki.' },
    { wrong: 'عُمْرِي أَرْبَعَ عَشْرَةَ سَنَوَاتٍ.', right: 'عُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.', why: 'Ages 11–20 take the singular “year”.' },
  ],
  listening: {
    title: 'Catch the listener and the age',
    script: 'مَرْحَبًا. مَا اسْمُكَ؟ — اِسْمِي خَالِد. كَمْ عُمْرُكَ؟ — عُمْرِي اِثْنَتَا عَشْرَةَ سَنَةً. / مَرْحَبًا. مَا اسْمُكِ؟ — اِسْمِي زَيْنَب. كَمْ عُمْرُكِ؟ — عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً. / السَّلَامُ عَلَيْكُمْ. اِسْمِي يُوسُف. عُمْرِي خَمْسَ عَشْرَةَ سَنَةً. وَأَنْتَ؟',
    questions: bank(3, 'listeningQuiz', [0, 1, 3, 4, 5]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 3,
    source: 'Website sections used: the three-question readiness check, age vocabulary and the numbers 11–20, the pattern عُمْرُكَ / عُمْرُكِ / عُمْرِي with سَنَةً / سَنَوَاتٍ, the age-pattern decision check, listening (three exchanges, six questions), the Adam–Maryam reading (five questions), the name-and-age speaking model and checklist, the age-line writing task and the ten-question checkpoint. Picture match: website visual game “How Old Are You?”.',
    support: `• Core: ONE secure answer frame — عُمْرِي … سَنَةً — and your own age. Students do NOT need to explain the number grammar; they learn their own age as a whole chunk.
• Develop: the four ages the website uses most (12–15) and both gendered questions. Stretch: younger ages 3–10 with سَنَوَاتٍ.
• Teacher note: the website gives the number words in the feminine form because سَنَة is feminine (ثَلَاثَ عَشْرَةَ سَنَةً). Present them as fixed phrases today; number grammar comes later in the course.
• Arabic-Indic digits (F1-L07) are on every age card — a good retrieval moment. Urdu bridge: عمر، سال (not Arabic!), کم، نمبر.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Age words and numbers 11–20, then عُمْرِي … سَنَةً.', wedo: 'Picture match, choose the pattern, listen and read.', next: 'F2-L04' }),
  F.doNow({
    questions: [
      q('What does this question mean?', ['How old are you? (to a girl)', 'What is your name? (to a girl)', 'How are you? (to a girl)'], 'Prepared at home.', { ar: 'كَمْ عُمْرُكِ؟', arBig: true }),
      q('What does سَنَةٌ mean?', ['a year', 'a name', 'a number'], 'Prepared at home.'),
      ...bank(3, 'retrievalQuiz', [0, 1, 2]),
    ],
    keyIdea: { text: 'The age question uses the same endings as the name question: -ka for a boy, -ki for a girl. Answer with “my age”.', ar: 'كَمْ عُمْرُكَ؟ ← عُمْرِي … سَنَةً' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 are the website “three-question readiness check” (name question, the digit ١٢, “and you?”).',
  }),
  F.objectivesSlide([
    'Ask a boy or a girl their age accurately.',
    'Answer with عُمْرِي … سَنَةً.',
    'Recognise and say common ages from 1–20.',
    'Read, hear, speak and write a short age exchange.',
  ], {
    core: ['I can ask and answer age with the model visible.', 'I can say my own age.'],
    develop: ['I can use names, ages and “and you?” in one exchange.', 'I can hear ages 12–15 in a conversation.'],
    stretch: ['I can choose between the singular and plural “year”.', 'I can give a younger age (3–10).'],
  }, 3, 'Website “By the end, I can …” (left) and the website Core / Develop / Stretch goals (right).'),
  F.keywordsSlide({
    text: '6 age phrases and the numbers 11–20 from the website. Core: the two questions, your answer, and YOUR own age.',
    groups: [
      { head: 'GROUP 1', name: 'The age conversation · 6' },
      { head: 'GROUP 2', name: 'Numbers 11–20 · 10' },
    ],
    bridge: [
      { ar: 'عُمْرٌ', urdu: 'عمر', tr: 'umr', en: 'age, life-time' },
      { ar: 'كَمْ', urdu: 'کم', tr: 'kam', en: 'Urdu: less · Arabic: how many?' },
      { ar: 'سُؤَالٌ', urdu: 'سوال', tr: 'sawāl', en: 'question' },
      { ar: 'عَدَدٌ', urdu: 'عدد', tr: 'adad', en: 'number' },
      { ar: 'جَوَابٌ', urdu: 'جواب', tr: 'jawāb', en: 'answer' },
    ],
    notes: `URDU BRIDGE: عمر (umr — exactly the same word: “Ap ki umr kya hai?”), سوال / جواب (question / answer), عدد (number).
FALSE FRIEND: Urdu کم (kam) means “less”; Arabic كَمْ (kam) means “how many / how much?”. And Urdu سال (year) is Persian — the Arabic word is سَنَة.`,
  }),
  {
    type: 'vocab', stage: 'teach', min: 3, eyebrow: 'Key words · Group 1 · the age conversation (website)', title: 'Ask and answer age', ar: 'السُّؤَالُ عَنِ العُمْرِ',
    items: [
      { n: 1, ar: 'كَمْ عُمْرُكَ؟', en: 'How old are you? (to a boy)', tr: 'kam ʿum-ru-ka', tag: 'to m.', core: true, note: 'Listen for the final -ka.' },
      { n: 2, ar: 'كَمْ عُمْرُكِ؟', en: 'How old are you? (to a girl)', tr: 'kam ʿum-ru-ki', tag: 'to f.', core: true, note: 'Listen for the final -ki.' },
      { n: 3, ar: 'عُمْرِي … سَنَةً', en: 'I am … years old. (11–20)', tr: 'ʿum-rī … sa-na-tan', tag: 'answer', core: true, note: 'The secure answer for ages 11–20.' },
      { n: 4, ar: 'سَنَةٌ', en: 'a year', tr: 'sa-na · sa-na-tān · sa-na-wāt', tag: 'sg · dual · pl', core: true, forms: [{ l: 'one', ar: 'سَنَةٌ' }, { l: 'two', ar: 'سَنَتَانِ' }, { l: 'pl.', ar: 'سَنَوَاتٌ' }] },
      { n: 5, ar: 'عُمْرٌ', en: 'age', tr: 'ʿum-ru-ka · ʿum-ru-ki · ʿum-ru-kum', tag: 'your: m · f · pl', forms: [{ l: 'your m.', ar: 'عُمْرُكَ' }, { l: 'your f.', ar: 'عُمْرُكِ' }, { l: 'your pl.', ar: 'أَعْمَارُكُمْ' }] },
      { n: 6, ar: 'عُمْرِي خَمْسُ سَنَوَاتٍ', en: 'I am five years old. (3–10)', tr: 'kham-su sa-na-wāt', tag: 'Stretch', note: 'Younger ages: the plural سَنَوَاتٍ.' },
    ],
    notes: `KEY WORDS — Group 1 (website “Build the age conversation”). Hear → Say → See → Use.
Card 4 shows one year / two years / years. Card 5: the plural “your ages” is أَعْمَارُكُمْ (recognition only).
Website: “In the age answer, you will usually see سَنَةً” — the -an ending (tanwīn fatḥa, F1-L06).`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Key words · Group 2 · the ages 11–20 (website)', title: 'Say your age', ar: 'الأَعْدَادُ مِنْ ١١ إِلَى ٢٠',
    cols: [{ label: 'Digit', w: 2.0, size: 26 }, { label: 'Number (with سَنَة)', w: 4.3, size: 22 }, { label: 'Age line', w: 6.03, size: 20 }],
    rows: [
      n2('١١', 'إِحْدَى عَشْرَةَ', 'iḥ-dā ʿash-ra-ta', 'eleven'),
      n2('١٢', 'اِثْنَتَا عَشْرَةَ', 'ith-na-tā ʿash-ra-ta', 'twelve'),
      n2('١٣', 'ثَلَاثَ عَشْرَةَ', 'tha-lā-tha ʿash-ra-ta', 'thirteen'),
      n2('١٤', 'أَرْبَعَ عَشْرَةَ', 'ar-ba-ʿa ʿash-ra-ta', 'fourteen'),
      n2('١٥', 'خَمْسَ عَشْرَةَ', 'kham-sa ʿash-ra-ta', 'fifteen'),
    ],
    notes: `NUMBERS 11–15 (website list). CORE rows = the website characters’ ages (Khalid 12, Zaynab 13, Maryam 14, Yusuf 15).
Say each age line; students repeat. Everyone finds THEIR OWN age now and writes it in their book as a whole chunk.
F1 link: read the digit first (F1-L07), then the words. The pattern is simple: [3–9] + عَشْرَةَ.`,
  },
  {
    type: 'formsTable', stage: 'teach', flex: true, eyebrow: 'Key words · Group 2 · the ages 16–20 (website) · FLEX', title: 'Older ages', ar: 'الأَعْدَادُ مِنْ ١٦ إِلَى ٢٠',
    cols: [{ label: 'Digit', w: 2.0, size: 26 }, { label: 'Number (with سَنَة)', w: 4.3, size: 22 }, { label: 'Age line', w: 6.03, size: 20 }],
    rows: [
      n2('١٦', 'سِتَّ عَشْرَةَ', 'sit-ta ʿash-ra-ta', 'sixteen'),
      n2('١٧', 'سَبْعَ عَشْرَةَ', 'sab-ʿa ʿash-ra-ta', 'seventeen'),
      n2('١٨', 'ثَمَانِيَ عَشْرَةَ', 'tha-mā-ni-ya ʿash-ra-ta', 'eighteen'),
      n2('١٩', 'تِسْعَ عَشْرَةَ', 'tis-ʿa ʿash-ra-ta', 'nineteen'),
      { cells: [{ ar: '٢٠', sub: 'twenty' }, { ar: 'عِشْرُونَ', sub: 'ʿish-rū-na' }, { ar: 'عُمْرِي عِشْرُونَ سَنَةً.', sub: 'I am twenty years old.' }] },
    ],
    notes: 'NUMBERS 16–20 (website list) — FLEX: useful for older family members and the website visual game (ages 16–18). عِشْرُونَ is a new word, not “two + ten”.',
  },
  {
    type: 'codeWord', stage: 'teach', min: 2, eyebrow: 'Grammar focus · one noun, three useful endings (again!)', title: 'Whose age?', ar: 'عُمْرٌ ← عُمْرُكَ / عُمْرُكِ / عُمْرِي',
    word: '{k|كَمْ} {m|عُمْرُ}{e|كِ}؟', tr: 'kam ʿum-ru-ki · how old are you? (to a girl)',
    parts: [
      { code: 'k', ar: 'كَمْ', title: 'KEY WORD: how many?', text: 'With عُمْر it asks age.' },
      { code: 'm', ar: 'عُمْرُ', title: 'MEANING: age', text: 'Urdu: umr — the same word.' },
      { code: 'e', ar: 'كَ / كِ', title: 'ENDING: your', text: '-ka to a boy · -ki to a girl. Answer with -ī: عُمْرِي.' },
    ],
    notes: `GRAMMAR (website section 3, “One noun, three useful endings”): the same endings from the name question return with عُمْر.
Website secure model: كَمْ عُمْرُكِ؟ — عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً. Choose the ending from the listener; answer with عُمْرِي whatever your gender.
Website common mistake: do not copy the question ending into the answer (عُمْرُكَ = your age; your answer begins عُمْرِي).`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · which “year”? (website)', title: 'One year or many years?', ar: 'سَنَةً أَمْ سَنَوَاتٍ؟',
    cards: [
      { chip: 'AGES 11–20 · CORE', head: 'سَنَةً', big: 'عُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.', en: 'I am fourteen years old.', clue: 'After 11–20 the singular “year”: sanatan.' },
      { chip: 'AGES 3–10 · STRETCH', color: '7B3FA0', head: 'سَنَوَاتٍ', big: 'عُمْرُ أَخِي خَمْسُ سَنَوَاتٍ.', en: 'My brother is five years old.', clue: 'After 3–10 the plural “years”: sanawāt.' },
      { chip: 'THE ANSWER · ALWAYS', color: '1D5FBF', head: 'عُمْرِي', big: 'كَمْ عُمْرُكَ؟ — عُمْرِي …', en: 'How old are you? — I am …', clue: 'The question says “your”; the answer says “my”.' },
    ],
    error: { text: 'Website common mistake: copying the question ending into the answer.', pairs: [['عُمْرِي …', 'عُمْرُكَ …']] },
    notes: `WEBSITE PATTERN: ages 11–20 → ١٤ سَنَةً (singular “year”); younger ages 3–10 → ٥ سَنَوَاتٍ (plural “years”).
Card 2 sentence is teacher-made (a younger brother) to give the Stretch rule a real use. Core students only need card 1 and card 3.`,
  },
  F.quickCheck(bank(3, 'patternQuiz', [0, 1, 2, 3]), 'website “Age-pattern decision check” questions 1–4.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me ask a name and an age', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Greet and ask the name', ar: 'مَرْحَبًا. مَا اسْمُ{e|كِ}؟', think: 'Zaynab is a girl: -ki (F2-L02).' },
      { head: 'She answers', ar: 'اِسْمِي زَيْنَب. وَأَنْتَ؟', think: 'She asks back — I am a boy: وَأَنْتَ.' },
      { head: 'Ask the age', ar: 'كَمْ عُمْرُ{e|كِ}؟', think: 'Same listener, same ending: -ki.' },
      { head: 'She answers', ar: '{w|عُمْرِي} ثَلَاثَ عَشْرَةَ سَنَةً.', think: 'My age + the number + سَنَةً (13 is between 11 and 20).' },
    ],
    legend: ['e', 'w'], legendLabels: { e: 'YOUR', w: 'MY' },
    model: 'مَرْحَبًا. مَا اسْمُ{e|كِ}؟ — اِسْمِي زَيْنَب. وَأَنْتَ؟ — اِسْمِي خَالِد. كَمْ عُمْرُ{e|كِ}؟ — {w|عُمْرِي} ثَلَاثَ عَشْرَةَ سَنَةً.',
    modelEn: 'Hello. What is your name? — My name is Zaynab. And you? — My name is Khalid. How old are you? — I am thirteen years old.',
    notes: 'I DO (3 min) — the website listening exchange 2 (Zaynab, 13), modelled with a think-aloud. Students copy it and underline the endings: pink = your, blue = my.',
  },
  F.gameSlide({ ...game, items: [game.items[0], game.items[1], game.items[2]] }, {
    title: 'Match the picture to the age',
    en: ['I am thirteen years old.', 'I am fourteen years old.', 'I am fifteen years old.'],
    icons: [[['fa6', 'FaPersonDress', 'D6336C'], ['fa6', 'FaCakeCandles', 'C77700']], [['fa6', 'FaPerson', '1D5FBF'], ['fa6', 'FaCakeCandles', 'C77700']], [['fa6', 'FaPersonDress', 'D6336C'], ['fa6', 'FaCakeCandles', 'C77700']]],
    labels: ['girl · 13', 'boy · 14', 'girl · 15'],
    order: [2, 0, 1],
    notes: 'Website visual game “How Old Are You?” (3 of 6 cards; ages 16–18 for homework). The only difference is the first number word: ثَلَاثَ / أَرْبَعَ / خَمْسَ — perfect for careful reading.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · website age-pattern check (continued)', title: 'Choose the right pattern', ar: 'اِخْتَرِ النَّمَطَ الصَّحِيحَ',
    seed: 12,
    questions: [...bank(3, 'patternQuiz', [4]), ...bank(3, 'finalQuiz', [5, 7])],
    side: { kind: 'core', label: 'CORE', text: '11–20 → sanatan (one year).\n3–10 → sanawāt (years).\nYour answer starts with “my age”.' },
    answerSlide: { min: 0, eyebrow: 'We do · answers', title: 'Answers and reasons', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website pattern check Q5 (Stretch: age 5) and checkpoint Q6 and Q8. Show-me: A/B/C fingers to camera.',
    answerNotes: 'Reveal; the class reads each correct line aloud.',
  },
  F.repairSlide(site, [
    'Is this YOUR age?',
    'Who is the listener?',
    'The age is 14. Which “year”?',
  ]),
  F.listening(site, {
    coreTip: 'Listen twice.\nFirst: boy or girl?\nThen: which number?',
    routes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5.',
    gloss: [
      ['مَرْحَبًا. مَا اسْمُكَ؟ — اِسْمِي خَالِد.', 'Hello. What is your name? (to a boy) — My name is Khalid.'],
      ['كَمْ عُمْرُكَ؟ — عُمْرِي اِثْنَتَا عَشْرَةَ سَنَةً.', 'How old are you? — I am twelve years old.'],
      ['مَرْحَبًا. مَا اسْمُكِ؟ — اِسْمِي زَيْنَب.', 'Hello. What is your name? (to a girl) — My name is Zaynab.'],
      ['كَمْ عُمْرُكِ؟ — عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً.', 'How old are you? — I am thirteen years old.'],
      ['السَّلَامُ عَلَيْكُمْ. اِسْمِي يُوسُف. عُمْرِي خَمْسَ عَشْرَةَ سَنَةً. وَأَنْتَ؟', 'Peace be upon you. My name is Yusuf. I am fifteen. And you?'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 2, eyebrow: 'We do · reading · scan, match, prove (website)', title: 'Adam and Maryam: names and ages', ar: 'اِقْرَأْ حِوَارًا قَصِيرًا',
    lines: [
      ['آدَم: السَّلَامُ عَلَيْكُمْ. مَا اسْمُكِ؟', 'Peace be upon you. What is your name?'],
      ['مَرْيَم: وَعَلَيْكُمُ السَّلَامُ. اِسْمِي مَرْيَم. وَأَنْتَ؟', 'And upon you peace. My name is Maryam. And you?'],
      ['آدَم: اِسْمِي آدَم. كَمْ عُمْرُكِ؟', 'My name is Adam. How old are you?'],
      ['مَرْيَم: عُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً. وَأَنْتَ؟', 'I am fourteen years old. And you?'],
      ['آدَم: عُمْرِي خَمْسَ عَشْرَةَ سَنَةً.', 'I am fifteen years old.'],
    ],
    notes: 'READING (website section 5). Scan for names, question endings and age numbers before answering. Core: read with English; Develop / Stretch: cover the English.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions · find the evidence (website)', title: 'Prove it from the dialogue', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: bank(3, 'readingQuiz'),
    side: { kind: 'info', head: 'FIND THE EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Answer, then point to the exact Arabic that proves it.\nQ5: compare the two ages.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'All five website reading questions.',
    answerNotes: 'A student reads aloud the line that proves each answer (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'كَمْ عُمْرُكَ؟' },
      { route: 'develop', ar: 'مَا اسْمُكِ؟ كَمْ عُمْرُكِ؟' },
      { route: 'develop', ar: 'مَا اسْمُكَ؟ كَمْ عُمْرُكَ؟' },
      { route: 'stretch', ar: 'كَمْ عُمْرُ أَخِيكَ أَوْ أُخْتِكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'عُمْرِي ______ سَنَةً.' },
      { route: 'develop', ar: 'اِسْمِي ______ . عُمْرِي ______ سَنَةً. وَأَنْتَ؟' },
      { route: 'stretch', ar: 'عُمْرُ أَخِي ______ سَنَوَاتٍ.' },
      { route: 'sum', ar: 'عُمْرُهُ / عُمْرُهَا ______ سَنَةً.' },
    ],
    modelEn: ['Hello. What is your name? (to a girl)', 'My name is Zaynab. And you?'],
    notes: `WEBSITE SPEAKING CHECKLIST (the listener ticks 1–5 in the chat): 1 opened politely · 2 asked the name with the correct ending · 3 asked the age with عُمْرُكَ / عُمْرُكِ · 4 answered with عُمْرِي … سَنَةً · 5 asked back.
Website “random partner prompt”: show a character card (خَالِد ١٢ · زَيْنَب ١٣ · يُوسُف ١٥ · مَرْيَم ١٤); the partner answers AS that character.
Stretch prompt (teacher-made): “How old is your brother or sister?” — uses سَنَوَاتٍ for 3–10. Summarise (↺): his age / her age is … (Stretch).`,
  }),
  F.routesSlide(site, {
    core: { amount: 'age line + 2 questions', how: 'My age line (whole chunk), then the question to a boy and to a girl.' },
    develop: { amount: '4 lines', how: 'Name → name back → age → age back, with the right endings.' },
    stretch: { amount: '4 lines + 1', how: 'Add a younger brother or sister (3–10) with the plural “years”.' },
  }),
  F.framesSlide({
    core: [
      { en: 'I am … years old.', ar: 'عُمْرِي ______ سَنَةً.' },
      { en: 'How old are you? (to a boy)', ar: 'كَمْ ______ ؟' },
      { en: 'How old are you? (to a girl)', ar: 'كَمْ ______ ؟' },
      { en: 'And you? (to a boy)', ar: 'وَ ______ ؟' },
    ],
    develop: [
      { en: 'What is your name?', ar: 'مَا اسْمُـ ___ ؟' },
      { en: 'My name is … And you?', ar: 'اِسْمِي ______ . وَ ______ ؟' },
      { en: 'My name is … How old are you?', ar: 'اِسْمِي ______ . كَمْ عُمْرُ ___ ؟' },
      { en: 'I am … years old.', ar: 'عُمْرِي ______ سَنَةً.' },
      { en: 'My sister is … years old. (3–10)', ar: 'عُمْرُ أُخْتِي ______ سَنَوَاتٍ.' },
    ],
    bank: ['عُمْرِي', 'عُمْرُكَ', 'عُمْرُكِ', 'سَنَةً', 'سَنَوَاتٍ', 'اِثْنَتَا عَشْرَةَ', 'ثَلَاثَ عَشْرَةَ', 'أَرْبَعَ عَشْرَةَ', 'خَمْسَ عَشْرَةَ', 'أَنْتَ', 'أَنْتِ'],
  }),
  F.modelSlide(site,
    'Hello. — What is your name? (to a girl) — My name is Maryam. How old are you? (to a boy) — I am fifteen years old.',
    ['a greeting', 'the -ka age question', 'عُمْرِي', 'sanatan after 15'],
    'Website “achievable model”.'),
  F.selfCheckSlide([
    { route: 'core', text: 'I used عُمْرِي before the number.' },
    { route: 'core', text: 'My question matches the listener: -ka or -ki.' },
    { route: 'develop', text: 'I used sanatan after an age from 11–20.' },
    { route: 'develop', text: 'Each question ends with the Arabic question mark ؟' },
    { route: 'stretch', text: 'I used the plural “years” for an age from 3–10.' },
  ]),
  F.exitTicket(bank(3, 'finalQuiz', [1, 2, 9]), 10),
  F.prepSlide({
    ...NEXT,
    words: [['جِنْسِيَّةٌ', 'nationality', ''], ['لُغَةٌ', 'language', 'pl. لُغَاتٌ'], ['أَنَا مِصْرِيٌّ', 'I am Egyptian. (m.)', 'f. مِصْرِيَّةٌ'], ['بَرِيطَانِيٌّ', 'British (m.)', 'f. بَرِيطَانِيَّةٌ'], ['أَتَكَلَّمُ العَرَبِيَّةَ', 'I speak Arabic.', '']],
    questionEn: 'Which languages do you speak at home? Write their names in English — we will learn them in Arabic.',
    questionAr: 'أَتَكَلَّمُ …',
    homework: {
      core: 'Website F2-L03: the Age-Card Mission and the picture game “How Old Are You?”.',
      develop: 'Write your age line and a four-line name-and-age exchange (type, draw or paper route).',
      stretch: 'Add a younger family member with سَنَوَاتٍ, then the ten-question checkpoint (aim for 8/10).',
    },
    wordsSource: 'The five words are the website F2-L04 core identity vocabulary and its model line أَتَكَلَّمُ العَرَبِيَّةَ.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: learn 5 identity words + your home languages.' }),
];

module.exports = { meta, slides };
