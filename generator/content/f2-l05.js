'use strict';
/*
 * F2-L05 · Gender of Nouns and Masculine/Feminine Agreement
 * Website: Pathways › Foundation › F2 › Lesson 5. Eight people-noun pairs, ة as the feminine clue + exceptions
 * (أُمٌّ، بِنْتٌ، أُخْتٌ; أَرْضٌ، شَمْسٌ، يَدٌ، عَيْنٌ), ten adjective pairs, noun + adjective agreement, هَذَا / هَذِهِ,
 * Gender Detective (14 rounds), listening (4 descriptions), class profile reading, speaking, writing, 12-question check.
 */
const F = require('./f2-common');
const game = require('../site-data/pathway-visual-games.json')['f2-l05'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 5, fileTitle: 'Gender_Agreement', chip: 'Masculine & Feminine',
  title: 'Masculine and Feminine: Make the Pair Match', arabic: 'تَذْكِيرُ الأَسْمَاءِ وَتَأْنِيثُهَا وَمُطَابَقَةُ الصِّفَةِ',
  focus: 'Learn the eight people-noun pairs and ten adjective pairs, use ة as a strong feminine clue (and know the exceptions), and build descriptions where the noun, the adjective and هَذَا / هَذِهِ all agree.',
  icon: 'FaScaleBalanced', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F2-L06', nextTitle: 'Polite Classroom Arabic', nextAr: 'لُغَةُ الأَدَبِ فِي الصَّفِّ' };
const rounds = banks.l05.rounds.map((r) => F.w({ ...r, show: r.word }));
const P = (m, f, pl, en, core) => ({ core, cells: [{ ar: m }, { ar: f }, { ar: pl }, en] });
const A = (m, f, en, ex, core) => ({ core, cells: [{ ar: m }, { ar: `${f.slice(0, -2)}{e|${f.slice(-2)}}` }, en, { ar: ex }] });

const site = {
  speaking: {
    context: 'Describe the person accurately',
    model: [
      ['1', 'هَذَا طَالِبٌ جَدِيدٌ. اِسْمُهُ يُوسُفُ.', 'This is a new male student. His name is Yusuf.'],
      ['2', 'هَذِهِ طَالِبَةٌ جَدِيدَةٌ. اِسْمُهَا زَيْنَبُ.', 'This is a new female student. Her name is Zaynab.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: write three accurate descriptions of people, using at least five different adjectives from the lesson bank. Stretch: an irregular feminine noun, two adjectives in one sentence and one described object.',
    checklist: ['I used هَذَا or هَذِهِ accurately.', 'Each adjective comes after its noun.', 'Masculine and feminine endings match.', 'At least five different adjectives.'],
    model: 'هَذَا صَدِيقِي يُوسُفُ. هُوَ وَلَدٌ ذَكِيٌّ وَلَطِيفٌ وَطَوِيلٌ.\nهَذِهِ زَمِيلَتِي فَاطِمَةُ. هِيَ طَالِبَةٌ جَدِيدَةٌ وَسَعِيدَةٌ.\nوَهَذِهِ أُخْتِي. هِيَ بِنْتٌ صَغِيرَةٌ وَجَمِيلَةٌ.',
  },
  differentiation: {
    core: 'Four noun + adjective phrases with four different people nouns.',
    develop: 'Three connected descriptions with at least five different adjectives.',
    stretch: 'An irregular feminine noun, two adjectives in one sentence and one described object.',
  },
  mistakes: [
    { wrong: 'زَمِيلَةٌ لَطِيفٌ', right: 'زَمِيلَةٌ لَطِيفَةٌ', why: 'The noun is feminine, so the adjective is feminine too.' },
    { wrong: 'جَدِيدٌ كِتَابٌ', right: 'كِتَابٌ جَدِيدٌ', why: 'Noun first, adjective second.' },
    { wrong: 'هَذَا أُخْتٌ قَصِيرَةٌ.', right: 'هَذِهِ أُخْتٌ قَصِيرَةٌ.', why: 'أُخْتٌ is feminine without ة, so use هَذِهِ.' },
  ],
  listening: {
    title: 'Who is being described?',
    script: 'هَذَا زَمِيلٌ جَدِيدٌ. اِسْمُهُ يُوسُفُ. هُوَ لَطِيفٌ وَطَوِيلٌ. / هَذِهِ زَمِيلَةٌ جَدِيدَةٌ. اِسْمُهَا زَيْنَبُ. هِيَ ذَكِيَّةٌ وَسَعِيدَةٌ. / هَذَا طِفْلٌ صَغِيرٌ، وَهَذِهِ طِفْلَةٌ صَغِيرَةٌ. / هَذَا أَخٌ طَوِيلٌ، وَهَذِهِ أُخْتٌ قَصِيرَةٌ.',
    questions: bank(5, 'listeningQuiz', [0, 1, 2, 3, 7]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 5,
    source: 'Website sections used: the four-question readiness check, eight people-noun pairs, the ة clue and exceptions, recycled object nouns, task language, the agreement pattern (noun + adjective, هَذَا / هَذِهِ), ten adjective pairs, the agreement mini-check (10), Gender Detective (14 rounds), listening (4 descriptions, 8 questions), the class-profile reading (8 questions), the speaking prompt and checklist, the three-descriptions writing task and the twelve-question checkpoint. Picture match: website visual game “Gender of Nouns and Masculine/Feminine Agreement”.',
    support: `• This is the grammar heart of F2 — the same “make it match” decision returns in family, home, school, colours and clothing (website “Why this matters”).
• Core: ONE rule — feminine noun → add ة to the adjective. Work with the four ة-pairs (طَالِبٌ، مُعَلِّمٌ، صَدِيقٌ، زَمِيلٌ) and three adjectives. Develop: all pairs + هَذَا / هَذِهِ. Stretch: exceptions (أُخْتٌ، بِنْتٌ، أُمٌّ; شَمْسٌ، عَيْنٌ) and two adjectives.
• Plural forms are shown for reference (m / f / pl on every noun) but are not practised today.
• Urdu bridge: طالب، معلم، جدید، قدیم، طویل — five of today’s words are used in Urdu.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'People words, the ة clue, then adjectives that match.', wedo: 'Gender Detective, picture match, listen and read.', next: 'F2-L06' }),
  F.doNow({
    questions: [
      q('What is the feminine form of طَالِبٌ?', ['طَالِبَةٌ', 'طُلَّابٌ', 'طَالِبِي'], 'Prepared at home.'),
      q('What does جَدِيدٌ mean?', ['new', 'old', 'big'], 'Prepared at home.'),
      ...bank(5, 'retrievalQuiz', [0, 1, 3]),
    ],
    keyIdea: { text: 'Arabic keeps the noun and adjective together: masculine with masculine, feminine with feminine.', ar: 'طَالِبٌ جَدِيدٌ  ·  طَالِبَةٌ جَدِيدَةٌ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 are the website “readiness check” (the -ki question, the feminine nationality, the ة clue).',
  }),
  F.objectivesSlide([
    'Recognise and use all eight people-noun pairs.',
    'Recognise and use all ten adjective pairs.',
    'Use ة as a strong feminine clue, and know the exceptions.',
    'Put the adjective after its noun and keep the agreement.',
  ], {
    core: ['I can learn the people nouns and match one adjective.', 'I can add ة to the adjective for a feminine noun.'],
    develop: ['I can build full descriptions without a model.', 'I can use هَذَا and هَذِهِ correctly.'],
    stretch: ['I can combine two adjectives.', 'I can use feminine nouns without ة.'],
  }, 2, 'Website “By the end, I can …” (left) and the website Core / Develop / Stretch goals (right).'),
  F.keywordsSlide({
    text: '8 people pairs, 10 adjective pairs and the feminine exceptions — all website active vocabulary. Core: the ة rule and the first four people pairs.',
    groups: [
      { head: 'GROUP 1', name: 'People · 8 pairs' },
      { head: 'GROUP 2', name: 'The ة clue + exceptions' },
      { head: 'GROUP 3', name: 'Adjectives · 10 pairs' },
    ],
    bridge: [
      { ar: 'طَالِبٌ', urdu: 'طالب علم', tr: 'tālib-e-ilm', en: 'student' },
      { ar: 'مُعَلِّمٌ', urdu: 'معلم', tr: 'muallim', en: 'teacher' },
      { ar: 'جَدِيدٌ', urdu: 'جدید', tr: 'jadīd', en: 'modern, new' },
      { ar: 'قَدِيمٌ', urdu: 'قدیم', tr: 'qadīm', en: 'ancient, old' },
      { ar: 'طَوِيلٌ', urdu: 'طویل', tr: 'tawīl', en: 'long' },
    ],
    notes: `URDU BRIDGE: طالب علم (student), معلم (teacher), جدید (modern), قدیم (ancient), طویل (long) — Urdu borrowed these from Arabic but did NOT borrow the ة agreement, so Urdu speakers need to add it consciously.
Website task language to recognise today: مُذَكَّرٌ أَمْ مُؤَنَّثٌ؟ (masculine or feminine?) · طَابِقْ (match) · اِخْتَرِ الصَّوَابَ (choose the correct answer) · لَاحِظِ النِّهَايَةَ (notice the ending) · مُمْتَازٌ! (excellent!).`,
  }),
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Key words · Group 1 · people · eight masculine/feminine pairs (website)', title: 'People: masculine, feminine, plural', ar: 'الأَشْخَاصُ',
    cols: [{ label: 'Masculine', w: 2.8, size: 24 }, { label: 'Feminine', w: 2.8, size: 24 }, { label: 'Plural (reference)', w: 3.3, size: 20 }, { label: 'English', w: 3.43 }],
    rows: [
      P('طَالِبٌ', 'طَالِبَ{e|ةٌ}', 'طُلَّابٌ · طَالِبَاتٌ', 'student', true),
      P('مُعَلِّمٌ', 'مُعَلِّمَ{e|ةٌ}', 'مُعَلِّمُونَ · مُعَلِّمَاتٌ', 'teacher', true),
      P('صَدِيقٌ', 'صَدِيقَ{e|ةٌ}', 'أَصْدِقَاءُ · صَدِيقَاتٌ', 'friend', true),
      P('زَمِيلٌ', 'زَمِيلَ{e|ةٌ}', 'زُمَلَاءُ · زَمِيلَاتٌ', 'classmate / colleague', true),
      P('طِفْلٌ', 'طِفْلَ{e|ةٌ}', 'أَطْفَالٌ', 'child'),
      P('وَلَدٌ', 'بِنْتٌ', 'أَوْلَادٌ · بَنَاتٌ', 'boy / girl'),
      P('رَجُلٌ', 'اِمْرَأَةٌ', 'رِجَالٌ · نِسَاءٌ', 'man / woman'),
      P('أَخٌ', 'أُخْتٌ', 'إِخْوَةٌ · أَخَوَاتٌ', 'brother / sister'),
    ],
    notes: `PEOPLE (website active vocabulary, all eight pairs). Read each pair aloud; ask: “Does the feminine add ة?” → YES for rows 1–5 (pink), NO for rows 6–8: a different word altogether.
Plural column = reference only (the user-friendly m / f / pl record for students’ vocabulary books); not practised today.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · find the gender clue in the noun (website)', title: 'The ة clue — and its exceptions', ar: 'التَّاءُ المَرْبُوطَةُ',
    cards: [
      { chip: 'STRONG CLUE · CORE', head: 'ـة', big: 'طَالِبَةٌ · مُعَلِّمَةٌ · حَقِيبَةٌ · سَيَّارَةٌ', en: 'female student · female teacher · bag · car', clue: 'Most nouns ending in ة are feminine.' },
      { chip: 'NO ة · USE ACTIVELY', color: '7B3FA0', head: 'أُمٌّ · بِنْتٌ · أُخْتٌ', big: 'أُمٌّ · بِنْتٌ · أُخْتٌ', en: 'mother · girl · sister', clue: 'Naturally feminine people: no ة needed.' },
      { chip: 'NO ة · RECOGNISE', color: 'B83227', head: 'شَمْسٌ · عَيْنٌ', big: 'أَرْضٌ · شَمْسٌ · يَدٌ · عَيْنٌ', en: 'earth · sun · hand · eye', clue: 'Feminine by convention — learn them.' },
    ],
    error: { text: 'The ending is a clue, not the complete rule.', pairs: [['هَذِهِ شَمْسٌ', 'هَذَا شَمْسٌ']] },
    notes: `THE ة CLUE (website section 2). “Most nouns ending in ة are feminine. It is a powerful clue, but some feminine words do not carry it.”
Website: USE actively now أُمٌّ، بِنْتٌ، أُخْتٌ; RECOGNISE for now أَرْضٌ، شَمْسٌ، يَدٌ، عَيْنٌ (F1 dictation words يَدٌ، عَيْنٌ return!).
Recycled objects (website): مَدْرَسَةٌ f · كِتَابٌ m · قَلَمٌ m · حَقِيبَةٌ f · بَيْتٌ m · سَيَّارَةٌ f · مَدِينَةٌ f · أُسْتَاذَةٌ f — ask the class to sort them in the chat (m / f).`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 3 · adjectives 1–5 (website)', title: 'Adjectives: add ة for feminine', ar: 'الصِّفَاتُ (١)',
    cols: [{ label: 'Masculine', w: 2.6, size: 26 }, { label: 'Feminine', w: 2.8, size: 26 }, { label: 'English', w: 2.6 }, { label: 'Website example', w: 4.33, size: 20 }],
    rows: [
      A('جَدِيدٌ', 'جَدِيدَةٌ', 'new', 'طَالِبَةٌ جَدِيدَةٌ', true),
      A('قَدِيمٌ', 'قَدِيمَةٌ', 'old (things)', 'كِتَابٌ قَدِيمٌ', true),
      A('كَبِيرٌ', 'كَبِيرَةٌ', 'big / older', 'أَخٌ كَبِيرٌ', true),
      A('صَغِيرٌ', 'صَغِيرَةٌ', 'small / young', 'طِفْلَةٌ صَغِيرَةٌ'),
      A('جَمِيلٌ', 'جَمِيلَةٌ', 'beautiful', 'حَقِيبَةٌ جَمِيلَةٌ'),
    ],
    notes: 'ADJECTIVES 1–5 (website). Website note: keep قَدِيمٌ / قَدِيمَةٌ mainly for THINGS; use كَبِيرٌ / كَبِيرَةٌ for big or older people. Gesture each adjective (big arms, small fingers…).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 3 · adjectives 6–10 (website)', title: 'Five more matching pairs', ar: 'الصِّفَاتُ (٢)',
    cols: [{ label: 'Masculine', w: 2.6, size: 26 }, { label: 'Feminine', w: 2.8, size: 26 }, { label: 'English', w: 2.6 }, { label: 'Website example', w: 4.33, size: 20 }],
    rows: [
      A('ذَكِيٌّ', 'ذَكِيَّةٌ', 'clever', 'هِيَ ذَكِيَّةٌ', true),
      A('لَطِيفٌ', 'لَطِيفَةٌ', 'kind / pleasant', 'زَمِيلٌ لَطِيفٌ', true),
      A('طَوِيلٌ', 'طَوِيلَةٌ', 'tall / long', 'أَخٌ طَوِيلٌ'),
      A('قَصِيرٌ', 'قَصِيرَةٌ', 'short', 'أُخْتٌ قَصِيرَةٌ'),
      A('سَعِيدٌ', 'سَعِيدَةٌ', 'happy', 'اِمْرَأَةٌ سَعِيدَةٌ'),
    ],
    notes: 'ADJECTIVES 6–10 (website). ذَكِيٌّ → ذَكِيَّةٌ follows the same shadda pattern as the nationality ending (F2-L04: مِصْرِيٌّ → مِصْرِيَّةٌ).',
  },
  {
    type: 'formula', stage: 'teach', min: 3, eyebrow: 'Grammar focus · the adjective follows and matches the noun (website)', title: 'Two decisions: gender, then match', ar: 'الصِّفَةُ بَعْدَ الاِسْمِ وَهِيَ تُطَابِقُهُ',
    cols: [
      { label: 'this (m. / f.)', ar: 'هَذَا / هَذِهِ', color: '1D5FBF', pale: 'EEF3FA' },
      { label: '1 · the noun (decide the gender)', ar: 'الاِسْمُ', color: '6B4C9A', pale: 'F1ECF7' },
      { label: '2 · the adjective (same gender)', ar: 'الصِّفَةُ', color: 'D6336C', pale: 'FBEAEA' },
    ],
    rows: [
      { en: 'This is a new male student.', cells: ['هَذَا', 'طَالِبٌ', 'جَدِيدٌ.'] },
      { en: 'This is a new female student.', cells: ['هَذِهِ', 'طَالِبَ{e|ةٌ}', 'جَدِيدَ{e|ةٌ}.'] },
      { en: 'This is a short sister.', cells: ['هَذِهِ', 'أُخْتٌ', 'قَصِيرَ{e|ةٌ}.'] },
      { en: 'This is an old book.', cells: ['هَذَا', 'كِتَابٌ', 'قَدِيمٌ.'] },
    ],
    foot: 'Noun FIRST, adjective SECOND — كِتَابٌ جَدِيدٌ = a new book.',
    notes: `GRAMMAR (website section 3). Make two decisions: first choose the noun’s gender; then give the adjective the same gender. Website: Arabic does not normally place the adjective before the noun; هَذَا goes with a masculine singular noun and هَذِهِ with a feminine singular noun.
Row 3 is the trap: أُخْتٌ has no ة, but it is feminine → هَذِهِ … قَصِيرَةٌ.
Website “Make the pair match”: مُذَكَّرٌ مَعَ مُذَكَّرٍ · مُؤَنَّثٌ مَعَ مُؤَنَّثٍ.`,
  },
  F.quickCheck(bank(5, 'grammarQuiz', [0, 1, 2, 3]), 'website “Agreement mini-check” questions 1–4.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me describe two people', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Decide the gender', ar: 'يُوسُفُ ← وَلَدٌ', think: 'Yusuf is a boy: masculine.' },
      { head: 'Match every word', ar: 'هَذَا صَدِيقِي. هُوَ وَلَدٌ ذَكِيٌّ.', think: 'هَذَا, هُوَ, ذَكِيٌّ — all masculine.' },
      { head: 'Now a girl', ar: 'هَذِهِ زَمِيلَتِي. هِيَ طَالِبَ{e|ةٌ}', think: 'Fatima: هَذِهِ, هِيَ, and the noun has ة.' },
      { head: 'Adjective: add ة', ar: 'طَالِبَ{e|ةٌ} جَدِيدَ{e|ةٌ}', think: 'The adjective copies the ة: جَدِيدَةٌ.' },
    ],
    legend: ['e'], legendLabels: { e: 'FEMININE ة' },
    model: 'هَذَا صَدِيقِي يُوسُفُ. هُوَ وَلَدٌ ذَكِيٌّ وَلَطِيفٌ. — هَذِهِ زَمِيلَتِي فَاطِمَةُ. هِيَ طَالِبَ{e|ةٌ} جَدِيدَ{e|ةٌ} وَسَعِيدَ{e|ةٌ}.',
    modelEn: 'This is my friend Yusuf. He is a clever and kind boy. — This is my classmate Fatima. She is a new and happy student.',
    notes: 'I DO (3 min) — the website “achievable model”, built with a think-aloud. After writing, students circle every ة in the second sentence (4 of them, including زَمِيلَتِي where ة becomes ت).',
  },
  F.gameSlide({ ...game, items: [game.items[0], game.items[1], game.items[3]] }, {
    title: 'Match the picture to the sentence',
    en: ['He is a hard-working student.', 'She is a hard-working student.', 'This is a new car.'],
    icons: [[['fa6', 'FaPerson', '1D5FBF'], ['fa6', 'FaBookOpen', '1D5FBF']], [['fa6', 'FaPersonDress', 'D6336C'], ['fa6', 'FaBookOpen', 'D6336C']], [['fa6', 'FaCar', 'D6336C'], ['fa6', 'FaStar', 'C77700']]],
    labels: ['a boy studying', 'a girl studying', 'a new car'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). New word: مُجْتَهِدٌ / مُجْتَهِدَةٌ = hard-working — students can still solve it from هُوَ / هِيَ and the ة. سَيَّارَةٌ is feminine → هَذِهِ … جَدِيدَةٌ.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website game “Gender Detective”', title: 'Gender Detective', ar: 'مُحَقِّقُ التَّذْكِيرِ وَالتَّأْنِيثِ',
    seed: 14,
    questions: [rounds[1], rounds[2], rounds[4], rounds[6], rounds[10]],
    side: { kind: 'core', label: 'CORE', text: 'Step 1: masculine or feminine?\nStep 2: every word matches.\nStep 3: noun first.' },
    answerSlide: { min: 0, eyebrow: 'We do · Gender Detective answers', title: 'Detective: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — website “Gender Detective” (5 of 14 rounds: sun, eye, mother, a female classmate, sister — the exceptions and the full sentence). The other 9 rounds are homework. Website: “Inspect each word, decide its gender and then choose the matching description.”',
    answerNotes: 'Reveal; ask “What was the clue?” for each (ة / a naturally feminine person / learnt exception).',
  },
  F.repairSlide(site, [
    'The noun is feminine. What about the adjective?',
    'Which comes first in Arabic?',
    'أُخْتٌ has no ة — but is it masculine?',
  ]),
  F.listening(site, {
    coreTip: 'Listen twice.\nFirst: who? Then: the exact noun + adjective pair.',
    routes: 'Core: questions 1, 3 and 5. Develop / Stretch: all 5.',
    gloss: [
      ['هَذَا زَمِيلٌ جَدِيدٌ. اِسْمُهُ يُوسُفُ. هُوَ لَطِيفٌ وَطَوِيلٌ.', 'This is a new classmate. His name is Yusuf. He is kind and tall.'],
      ['هَذِهِ زَمِيلَةٌ جَدِيدَةٌ. اِسْمُهَا زَيْنَبُ. هِيَ ذَكِيَّةٌ وَسَعِيدَةٌ.', 'This is a new classmate (f.). Her name is Zaynab. She is clever and happy.'],
      ['هَذَا طِفْلٌ صَغِيرٌ، وَهَذِهِ طِفْلَةٌ صَغِيرَةٌ.', 'This is a young boy, and this is a young girl.'],
      ['هَذَا أَخٌ طَوِيلٌ، وَهَذِهِ أُخْتٌ قَصِيرَةٌ.', 'This is a tall brother, and this is a short sister.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 2, eyebrow: 'We do · reading · a short class profile (website)', title: 'Read a short class profile', ar: 'اِقْرَأْ مَلَفًّا قَصِيرًا عَنِ الفَصْلِ',
    lines: [
      ['هَذَا خَالِدٌ. هُوَ طَالِبٌ جَدِيدٌ وَزَمِيلٌ لَطِيفٌ. هُوَ طَوِيلٌ وَذَكِيٌّ.', 'This is Khalid. He is a new student and a kind classmate. He is tall and clever.'],
      ['هَذِهِ مَرْيَمُ. هِيَ طَالِبَةٌ جَدِيدَةٌ وَزَمِيلَةٌ لَطِيفَةٌ. هِيَ قَصِيرَةٌ وَسَعِيدَةٌ.', 'This is Maryam. She is a new student and a kind classmate. She is short and happy.'],
      ['هَذَا يُوسُفُ. هُوَ أَخٌ كَبِيرٌ. وَهَذِهِ زَيْنَبُ. هِيَ أُخْتٌ صَغِيرَةٌ.', 'This is Yusuf. He is an older brother. And this is Zaynab. She is a younger sister.'],
      ['فَصْلُهُمْ كَبِيرٌ، وَمَدْرَسَتُهُمْ جَدِيدَةٌ. فِي الفَصْلِ كِتَابٌ قَدِيمٌ وَحَقِيبَةٌ جَمِيلَةٌ.', 'Their class is big and their school is new. In the class there is an old book and a beautiful bag.'],
    ],
    notes: 'READING (website section 6). Website: “Track every masculine and feminine clue rather than translating one word at a time.” Develop: underline every ة in line 2 (there are 5). Stretch: find the feminine noun WITHOUT ة (أُخْتٌ) and the word where ة became ت before an ending (مَدْرَسَتُهُمْ).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions · find the evidence (website)', title: 'Prove it from the profile', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: bank(5, 'readingQuiz', [2, 3, 5, 6, 7]),
    side: { kind: 'info', head: 'FIND THE EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Answer from the Arabic text, not from the pictures alone (website).' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 3, 4, 6, 7 and 8 (questions 1, 2 and 5 are homework).',
    answerNotes: 'A student reads aloud the evidence phrase for each answer (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَنْ هَذَا؟ مَنْ هَذِهِ؟' },
      { route: 'develop', ar: 'صِفْ زَمِيلًا أَوْ زَمِيلَةً.' },
      { route: 'develop', ar: 'صِفْ أَخًا أَوْ أُخْتًا.' },
      { route: 'stretch', ar: 'صِفْ شَخْصَيْنِ بِصِفَتَيْنِ.' },
    ],
    stems: [
      { route: 'core', ar: 'هَذَا ______ ______ . / هَذِهِ ______ ______ .' },
      { route: 'develop', ar: 'هَذِهِ زَمِيلَتِي. اِسْمُهَا ______ . هِيَ ______ .' },
      { route: 'stretch', ar: 'هُوَ ______ وَ ______ ، وَهِيَ ______ وَ ______ .' },
      { route: 'sum', ar: 'مُمْتَازٌ! / مُمْتَازَةٌ!' },
    ],
    modelEn: ['This is a new male student. His name is Yusuf.', 'This is a new female student. Her name is Zaynab.'],
    notes: `WEBSITE SPEAKING CHECKLIST (the listener ticks 1–5 in chat): 1 chose هَذَا / هَذِهِ · 2 an accurate person noun · 3 adjective second · 4 adjective matched · 5 added a name (اِسْمُهُ / اِسْمُهَا).
Website “random speaking prompt”: show a character card (يُوسُفُ · male student · new) → هَذَا طَالِبٌ جَدِيدٌ. اِسْمُهُ يُوسُفُ. Then hide the model.
Routes (website): Core — four different people nouns with one agreeing adjective each · Develop — add demonstratives, names and four different adjectives · Stretch — two adjectives each and one irregular feminine noun.
Praise with the website task word مُمْتَازٌ! (to a boy) / مُمْتَازَةٌ! (to a girl) — agreement again.`,
  }),
  F.routesSlide(site, {
    core: { amount: '4 phrases', how: 'Four people nouns, each with ONE matching adjective (use the tables).' },
    develop: { amount: '3 descriptions', how: 'This is … + name + he / she is … with five different adjectives.' },
    stretch: { amount: '3 descriptions +', how: 'Two adjectives in one sentence, a feminine noun without ة, and one object.' },
  }),
  F.framesSlide({
    core: [
      { en: 'a new male student', ar: 'طَالِبٌ ______' },
      { en: 'a new female student', ar: 'طَالِبَةٌ ______' },
      { en: 'a kind friend (f.)', ar: 'صَدِيقَةٌ ______' },
      { en: 'a tall brother', ar: 'أَخٌ ______' },
      { en: 'a short sister', ar: 'أُخْتٌ ______' },
    ],
    develop: [
      { en: 'This is my friend …', ar: 'هَذَا صَدِيقِي ______ .' },
      { en: 'He is a … boy.', ar: 'هُوَ وَلَدٌ ______ وَ ______ .' },
      { en: 'This is my classmate (f.) …', ar: 'هَذِهِ زَمِيلَتِي ______ .' },
      { en: 'She is a … student.', ar: 'هِيَ طَالِبَةٌ ______ وَ ______ .' },
      { en: 'In my bag there is an old book.', ar: 'فِي حَقِيبَتِي كِتَابٌ ______ .' },
    ],
    bank: ['جَدِيدٌ', 'جَدِيدَةٌ', 'قَدِيمٌ', 'كَبِيرٌ', 'صَغِيرَةٌ', 'جَمِيلَةٌ', 'ذَكِيٌّ', 'ذَكِيَّةٌ', 'لَطِيفٌ', 'لَطِيفَةٌ', 'طَوِيلٌ', 'قَصِيرَةٌ', 'سَعِيدٌ', 'سَعِيدَةٌ'],
  }),
  F.modelSlide(site,
    'This is my friend Yusuf. He is a clever, kind and tall boy. — This is my classmate Fatima. She is a new and happy student. — And this is my sister. She is a small and beautiful girl.',
    ['هَذَا / هَذِهِ', 'noun then adjective', 'five adjectives', 'a feminine noun without ة'],
    'Website “achievable model”. Evidence for the last chip: بِنْتٌ (a girl) — feminine without ة.'),
  F.selfCheckSlide([
    { route: 'core', text: 'Each adjective comes after its noun.' },
    { route: 'core', text: 'For a feminine noun, my adjective has ة.' },
    { route: 'develop', text: 'I used هَذَا or هَذِهِ accurately.' },
    { route: 'develop', text: 'I used at least five different adjectives.' },
    { route: 'stretch', text: 'I included a feminine noun without ة, correctly matched.' },
  ]),
  F.exitTicket(bank(5, 'finalQuiz', [3, 6, 11]), 12),
  F.prepSlide({
    ...NEXT,
    words: [['مِنْ فَضْلِكَ', 'please (to a boy)', 'f. مِنْ فَضْلِكِ'], ['شُكْرًا جَزِيلًا', 'thank you very much', ''], ['عَفْوًا', 'you’re welcome / excuse me', ''], ['أَنَا آسِفٌ', 'I am sorry (boy speaking)', 'f. آسِفَةٌ'], ['تَفَضَّلْ', 'here you are (to a boy)', 'f. تَفَضَّلِي']],
    questionEn: 'Which polite phrase do you use most in English at school? Find its Arabic partner in the list.',
    questionAr: 'مِنْ فَضْلِكَ · شُكْرًا',
    homework: {
      core: 'Website F2-L05: Gender Detective (14 rounds) and the picture game.',
      develop: 'Write three accurate descriptions with five adjectives (type, draw or paper route).',
      stretch: 'Add two adjectives in one sentence and a feminine noun without ة; then the 12-question checkpoint (aim for 10/12).',
    },
    wordsSource: 'The five phrases are from the website F2-L06 polite-phrase bank. Notice that three of them change for a boy or a girl — exactly today’s rule!',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: learn 5 polite phrases (boy / girl forms).' }),
];

module.exports = { meta, slides };
