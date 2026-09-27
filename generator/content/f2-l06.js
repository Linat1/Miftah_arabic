'use strict';
/*
 * F2-L06 · Polite Classroom Arabic
 * Website: Pathways › Foundation › F2 › Lesson 6. The 14-phrase politeness bank (please / thank you / you’re welcome /
 * sorry / here you are / no problem / excuse me), the tanwīn ـًا sound, listener endings (ـكَ / ـكِ, تَفَضَّلْ / تَفَضَّلِي),
 * 12 classroom objects, 8 requests, role-play rounds, 4 listening exchanges, the Maryam dialogue, speaking and writing.
 */
const F = require('./f2-common');
const game = require('../site-data/pathway-visual-games.json')['f2-l06'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 6, fileTitle: 'Polite_Classroom_Arabic', chip: 'Polite Classroom Arabic',
  title: 'Polite Classroom Arabic', arabic: 'لُغَةُ الأَدَبِ فِي الصَّفِّ',
  focus: 'Ask for help, borrow classroom items, ask permission, apologise, thank someone and respond — choosing the right form for a male or female listener every time.',
  icon: 'FaHandsPraying', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F2-L07', nextTitle: 'Building a Full Introduction', nextAr: 'بِنَاءُ تَعْرِيفٍ كَامِلٍ' };
const rounds = banks.l06.rounds.map((r) => F.w({ ...r, q: `${r.text} ${r.prompt}` }));
const O = (sg, pl, g, en, core) => ({ core, cells: [{ ar: sg }, { ar: pl }, g, en] });

const site = {
  speaking: {
    context: 'Classroom role-play',
    model: [
      ['طَالِبٌ', 'مَعْذِرَةً، أُرِيدُ قَلَمًا، مِنْ فَضْلِكَ.', 'Excuse me, I would like a pen, please. (to a male teacher)'],
      ['مُعَلِّمٌ', 'نَعَمْ، تَفَضَّلْ.', 'Yes, here you are.'],
      ['طَالِبٌ', 'شُكْرًا جَزِيلًا.', 'Thank you very much.'],
      ['مُعَلِّمٌ', 'عَفْوًا.', 'You’re welcome.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: a complete polite classroom dialogue (6–10 lines) with an attention phrase, a request, please chosen for the listener, a response and handover, thanks and a reply.',
    checklist: ['At least six lines, with an attention phrase.', 'A request: object, help, repetition or permission.', 'مِنْ فَضْلِكَ / مِنْ فَضْلِكِ chosen for the listener.', 'Thanks and a reply (شُكْرًا … عَفْوًا).'],
    model: 'الطَّالِبَةُ: مَعْذِرَةً، أُرِيدُ قَلَمَ رَصَاصٍ، مِنْ فَضْلِكِ.\nالمُعَلِّمَةُ: نَعَمْ، تَفَضَّلِي.\nالطَّالِبَةُ: شُكْرًا جَزِيلًا.\nالمُعَلِّمَةُ: عَفْوًا.\nالطَّالِبَةُ: لَا أَفْهَمُ السُّؤَالَ. أَعِيدِي، مِنْ فَضْلِكِ.\nالمُعَلِّمَةُ: نَعَمْ.',
  },
  differentiation: {
    core: 'Six lines using one request.',
    develop: 'Eight lines using two different classroom needs.',
    stretch: 'Ten lines: switch the listener’s gender and include an apology.',
  },
  mistakes: [
    { wrong: 'الطَّالِبَةُ ← المُعَلِّمَةِ: مِنْ فَضْلِكَ', right: 'الطَّالِبَةُ ← المُعَلِّمَةِ: مِنْ فَضْلِكِ', why: 'The ending follows the LISTENER (a female teacher): -ki.' },
    { wrong: 'مَرْيَمُ: أَنَا آسِفٌ.', right: 'مَرْيَمُ: أَنَا آسِفَةٌ.', why: '“Sorry” is an adjective: it matches the SPEAKER.' },
    { wrong: 'شُكْرًا. — لَا بَأْسَ.', right: 'شُكْرًا. — عَفْوًا.', why: 'After thanks, say “you’re welcome”. “No problem” answers an apology.' },
  ],
  listening: {
    title: 'Four classroom exchanges',
    script: '١. الطَّالِبُ: مَعْذِرَةً، أُرِيدُ قَلَمًا، مِنْ فَضْلِكَ. المُعَلِّمُ: نَعَمْ، تَفَضَّلْ. الطَّالِبُ: شُكْرًا جَزِيلًا. المُعَلِّمُ: عَفْوًا. ٢. الطَّالِبَةُ: لَا أَفْهَمُ. أَعِيدِي، مِنْ فَضْلِكِ. المُعَلِّمَةُ: نَعَمْ، سَأُعِيدُ السُّؤَالَ بِبُطْءٍ. الطَّالِبَةُ: شُكْرًا. ٣. الطَّالِبُ: هَلْ يُمْكِنُ أَنْ أَشْرَبَ المَاءَ؟ المُعَلِّمُ: نَعَمْ، تَفَضَّلْ. الطَّالِبُ: شُكْرًا. ٤. الطَّالِبَةُ: أَنَا آسِفَةٌ. تَأَخَّرْتُ. المُعَلِّمَةُ: لَا بَأْسَ. تَفَضَّلِي. الطَّالِبَةُ: شُكْرًا جَزِيلًا.',
    questions: bank(6, 'listeningQuiz', [0, 1, 2, 4, 6]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 6,
    source: 'Website sections used: the four-question retrieval, the complete polite-phrase bank (14 phrases), the ـًا pronunciation and addressee patterns, the polite phrase check (10), the classroom object bank (12), eight classroom requests, the role-play rounds (12), listening (four exchanges, eight questions), the Maryam reading dialogue (eight questions), role-play cards and speaking checklist, the dialogue-writing task and the twelve-question checkpoint. Picture match: website visual game “Polite Classroom Arabic”.',
    support: `• These phrases are for REAL use: from today, students use them in every Arabic lesson (please / thank you / I don’t understand / repeat, please). Put the website phrase bank on the class wall or OneNote.
• Core: learn phrases as whole chunks (website: “Do not wait until every grammar detail is familiar before using them”). Develop: choose -ka / -ki and تَفَضَّلْ / تَفَضَّلِي for the listener. Stretch: switch listener gender mid-dialogue; add an apology.
• Two gender rules meet today (a great link to F2-L05): please / here you are follow the LISTENER; آسِفٌ / آسِفَةٌ follows the SPEAKER.
• Address the teacher: يَا أُسْتَاذُ (m.) / يَا أُسْتَاذَةُ (f.). Urdu bridge: فضل، معذرت، معاف، دفتر، سوال.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Polite phrases, classroom objects, then requests.', wedo: 'Picture match, role-play rounds, listen and read.', next: 'F2-L07' }),
  F.doNow({
    questions: [
      q('What does مِنْ فَضْلِكِ mean?', ['please (to a girl)', 'thank you (to a girl)', 'here you are (to a girl)'], 'Prepared at home.'),
      q('What does تَفَضَّلْ mean?', ['Here you are. / Go ahead.', 'Thank you.', 'Excuse me.'], 'Prepared at home.'),
      ...bank(6, 'retrievalQuiz', [1, 2, 3]),
    ],
    keyIdea: { text: 'Please and “here you are” follow the LISTENER. “I am sorry” follows the SPEAKER.', ar: 'مِنْ فَضْلِكَ / مِنْ فَضْلِكِ  ·  آسِفٌ / آسِفَةٌ' },
    retrieves: 'Questions 1–2 test two of the five phrases prepared at home. Questions 3–5 are the website retrieval (the -ki ending, أَفْهَمُ, مُعَلِّمَةٌ).',
  }),
  F.objectivesSlide([
    'Use the complete F2-L06 polite-phrase bank accurately.',
    'Choose masculine and feminine forms for the person addressed.',
    'Make practical classroom requests and respond appropriately.',
    'Recognise the -an sound (ـًا) in common polite expressions.',
  ], {
    core: ['I can say please, thank you and an answer in a four-line exchange.', 'I can say “I don’t understand” and ask for help.'],
    develop: ['I can ask for an object, then for repetition or help.', 'I can choose the listener ending.'],
    stretch: ['I can switch between male and female listeners.', 'I can apologise with the right form.'],
  }, 3, 'Website “By the end” (left) and the website speaking Core / Develop / Stretch goals (right).'),
  F.keywordsSlide({
    text: '14 polite phrases, 12 classroom objects and 8 requests — all from the website. Core: the six phrases you will use EVERY lesson.',
    groups: [
      { head: 'GROUP 1', name: 'Polite phrases · 14' },
      { head: 'GROUP 2', name: 'Classroom objects · 12' },
      { head: 'GROUP 3', name: 'Requests · 8' },
    ],
    bridge: [
      { ar: 'مِنْ فَضْلِكَ', urdu: 'فضل', tr: 'fazl', en: 'grace, kindness' },
      { ar: 'مَعْذِرَةً', urdu: 'معذرت', tr: 'mazrat', en: 'apology, excuse' },
      { ar: 'عَفْوًا', urdu: 'معاف', tr: 'muāf', en: 'forgiven' },
      { ar: 'دَفْتَرٌ', urdu: 'دفتر', tr: 'daftar', en: 'Urdu: office · Arabic: notebook' },
      { ar: 'سُؤَالٌ', urdu: 'سوال', tr: 'sawāl', en: 'question' },
    ],
    notes: `URDU BRIDGE: فضل (fazl: grace — مِنْ فَضْلِكَ = “out of your kindness”), معذرت (mazrat → مَعْذِرَةً), معاف (muāf → عَفْوًا, same root ʿ-f-w), دفتر (FALSE FRIEND: Urdu office; Arabic notebook), سوال.
Website pronunciation pattern: شُكْرًا، عَفْوًا، جَزِيلًا، مَعْذِرَةً all finish with an -an sound (tanwīn fatḥ, F1-L06).`,
  }),
  {
    type: 'vocab', stage: 'teach', min: 3, eyebrow: 'Key words · Group 1 · the polite-phrase bank (website) · 1 of 2', title: 'Please, thank you, sorry', ar: 'عِبَارَاتُ الأَدَبِ',
    items: [
      { n: 1, ar: 'مِنْ فَضْلِكَ', en: 'please', tr: 'min faḍ-li-ka · -ki · -kum', tag: 'to m. · f. · pl.', core: true, forms: [{ l: 'to m.', ar: 'مِنْ فَضْلِكَ' }, { l: 'to f.', ar: 'مِنْ فَضْلِكِ' }, { l: 'to pl.', ar: 'مِنْ فَضْلِكُمْ' }] },
      { n: 2, ar: 'شُكْرًا', en: 'thank you', tr: 'shuk-ran', tag: '-an sound', core: true, note: 'A complete polite response.' },
      { n: 3, ar: 'شُكْرًا جَزِيلًا', en: 'thank you very much', tr: 'shuk-ran ja-zī-lan', tag: '-an sound ×2', core: true, note: 'جَزِيلًا strengthens the thanks.' },
      { n: 4, ar: 'عَفْوًا', en: 'you’re welcome / excuse me', tr: 'ʿaf-wan', tag: 'reply', core: true, note: 'The context tells you which meaning.' },
      { n: 5, ar: 'نَعَمْ · لَا', en: 'yes · no', tr: 'na-ʿam · lā', tag: 'answer', core: true, note: 'لَا also makes “not”: لَا أَفْهَمُ.' },
      { n: 6, ar: 'أَنَا آسِفٌ', en: 'I am sorry', tr: 'ā-sif · ā-si-fa · ā-si-fūn', tag: 'speaker m. · f. · pl.', forms: [{ l: 'boy', ar: 'آسِفٌ' }, { l: 'girl', ar: 'آسِفَةٌ' }, { l: 'we', ar: 'آسِفُونَ' }] },
    ],
    notes: `POLITE PHRASES 1–6 (website bank, with the website emojis as gestures: 🙏 please · 💛 thank you · ⭐ very much · 🤝 you’re welcome · ✅/❌ yes/no · 🙇 sorry).
Card 1 follows the LISTENER (-ka / -ki / -kum). Card 6 follows the SPEAKER — it is an adjective, just like F2-L05 (a boy says آسِفٌ, a girl says آسِفَةٌ).`,
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · the polite-phrase bank (website) · 2 of 2', title: 'Here you are, no problem, excuse me', ar: 'عِبَارَاتُ الأَدَبِ',
    items: [
      { n: 7, ar: 'تَفَضَّلْ', en: 'here you are / go ahead', tr: 'ta-faḍ-ḍal · -lī · -lū', tag: 'to m. · f. · pl.', core: true, forms: [{ l: 'to m.', ar: 'تَفَضَّلْ' }, { l: 'to f.', ar: 'تَفَضَّلِي' }, { l: 'to pl.', ar: 'تَفَضَّلُوا' }] },
      { n: 8, ar: 'لَا بَأْسَ', en: 'no problem / it’s all right', tr: 'lā baʾs', tag: 'reply to sorry', core: true, note: 'A reassuring answer to an apology.' },
      { n: 9, ar: 'مَعْذِرَةً', en: 'excuse me / pardon', tr: 'maʿ-dhi-ra-tan', tag: 'attention', core: true, note: 'Use it to gain attention politely.' },
      { n: 10, ar: 'يَا أُسْتَاذُ', en: 'Sir / Miss (addressing a teacher)', tr: 'yā us-tā-dhu · us-tā-dha-tu', tag: 'to m. · f.', forms: [{ l: 'to m.', ar: 'يَا أُسْتَاذُ' }, { l: 'to f.', ar: 'يَا أُسْتَاذَةُ' }] },
      { n: 11, ar: 'لَا أَفْهَمُ', en: 'I do not understand.', tr: 'lā af-ha-mu', tag: 'problem', core: true, note: 'F2-L04 verb + لَا.' },
      { n: 12, ar: 'هَلْ يُمْكِنُ أَنْ …؟', en: 'May I …? / Is it possible to …?', tr: 'hal yum-ki-nu an …', tag: 'permission', note: 'هَلْ يُمْكِنُ أَنْ أَدْخُلَ؟ May I come in?' },
    ],
    notes: `POLITE PHRASES 7–9 (website bank: 👉 here you are · 🌿 no problem · 💬 excuse me) + the request starters from the website (يَا أُسْتَاذَةُ from the reading; لَا أَفْهَمُ and هَلْ يُمْكِنُ أَنْ … from the requests).
Card 7 follows the LISTENER: the final ـي addresses one female (website). Pair them up: شُكْرًا → عَفْوًا · آسِفٌ → لَا بَأْسَ · مِنْ فَضْلِكَ → تَفَضَّلْ.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · classroom objects (website) · recycle F2-L05', title: 'What do you need?', ar: 'أَدَوَاتُ الصَّفِّ',
    cols: [{ label: 'One', w: 2.9, size: 24 }, { label: 'Plural (reference)', w: 3.0, size: 20 }, { label: 'm. or f.?', w: 2.2 }, { label: 'English', w: 4.23 }],
    rows: [
      O('قَلَمٌ', 'أَقْلَامٌ', 'm.', 'pen', true),
      O('قَلَمُ رَصَاصٍ', 'أَقْلَامُ رَصَاصٍ', 'm.', 'pencil', true),
      O('كِتَابٌ', 'كُتُبٌ', 'm.', 'book', true),
      O('دَفْتَرٌ', 'دَفَاتِرُ', 'm.', 'notebook'),
      O('وَرَقَةٌ', 'أَوْرَاقٌ', 'f. (ة)', 'sheet of paper'),
      O('مِمْحَاةٌ', 'مَمَاحٍ', 'f. (ة)', 'eraser'),
    ],
    notes: 'CLASSROOM OBJECTS 1–6 (website object bank). Quick F2-L05 recall: students type m / f for each word BEFORE you reveal column 3 (the ة clue). Plural = reference only.',
  },
  {
    type: 'formsTable', stage: 'teach', flex: true, eyebrow: 'Key words · Group 2 · classroom objects (website) · FLEX', title: 'Six more classroom words', ar: 'أَدَوَاتُ الصَّفِّ',
    cols: [{ label: 'One', w: 2.9, size: 24 }, { label: 'Plural (reference)', w: 3.0, size: 20 }, { label: 'm. or f.?', w: 2.2 }, { label: 'English', w: 4.23 }],
    rows: [
      O('مِسْطَرَةٌ', 'مَسَاطِرُ', 'f. (ة)', 'ruler'),
      O('حَقِيبَةٌ', 'حَقَائِبُ', 'f. (ة)', 'bag'),
      O('مَاءٌ', 'مِيَاهٌ', 'm.', 'water'),
      O('بَابٌ', 'أَبْوَابٌ', 'm.', 'door'),
      O('نَافِذَةٌ', 'نَوَافِذُ', 'f. (ة)', 'window'),
      O('سُؤَالٌ', 'أَسْئِلَةٌ', 'm.', 'question'),
    ],
    notes: 'CLASSROOM OBJECTS 7–12 (website object bank) — FLEX. Useful for the role-play cards (ruler, water, door).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · useful classroom requests (website) · look at the listener', title: 'To a boy or to a girl?', ar: 'طَلَبَاتٌ مُهَذَّبَةٌ فِي الصَّفِّ',
    cols: [{ label: 'To a boy / man', w: 4.4, size: 22 }, { label: 'To a girl / woman', w: 4.6, size: 22 }, { label: 'Meaning', w: 3.33 }],
    rows: [
      { core: true, cells: [{ ar: 'أُرِيدُ قَلَمًا، مِنْ فَضْلِ{e|كَ}.' }, { ar: 'أُرِيدُ قَلَمًا، مِنْ فَضْلِ{e|كِ}.' }, 'I would like a pen, please.'] },
      { core: true, cells: [{ ar: 'أَعِدْ، مِنْ فَضْلِ{e|كَ}.' }, { ar: 'أَعِيدِ{e|ي}، مِنْ فَضْلِ{e|كِ}.' }, 'Repeat, please.'] },
      { cells: [{ ar: 'تَكَلَّمْ بِبُطْءٍ، مِنْ فَضْلِ{e|كَ}.' }, { ar: 'تَكَلَّمِ{e|ي} بِبُطْءٍ، مِنْ فَضْلِ{e|كِ}.' }, 'Speak slowly, please.'] },
      { cells: [{ ar: 'سَاعِدْنِي، مِنْ فَضْلِ{e|كَ}.' }, { ar: 'سَاعِدِ{e|ي}نِي، مِنْ فَضْلِ{e|كِ}.' }, 'Help me, please.'] },
      { core: true, cells: [{ ar: 'تَفَضَّلْ.' }, { ar: 'تَفَضَّلِ{e|ي}.' }, 'Here you are. / Go ahead.'] },
      { cells: [{ ar: 'هَلْ يُمْكِنُ أَنْ أَدْخُلَ؟' }, { ar: 'هَلْ يُمْكِنُ أَنْ أَدْخُلَ؟' }, 'May I come in? (same for both)'] },
    ],
    foot: 'Speaking to a girl or woman? Listen for -ki and -ī.',
    notes: `REQUESTS (website “Useful classroom requests”, 1–8). Pink = the parts that change for a female listener: -ki on “please”, and -ī on the command (أَعِيدِي، تَكَلَّمِي، سَاعِدِينِي، تَفَضَّلِي).
Website addressee pattern: “Look at the person you are speaking to.” Row 6 does not change — the speaker asks about himself / herself.
Class routine from today: any student can type “لَا أَفْهَمُ. أَعِدْ / أَعِيدِي، مِنْ فَضْلِكَ / مِنْ فَضْلِكِ” in the chat.`,
  },
  F.quickCheck(bank(6, 'phraseQuiz', [1, 5, 7, 8]), 'website “Polite phrase check” questions 2, 6, 8 and 9.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me borrow a pencil politely', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Get attention + request', ar: 'مَعْذِرَةً، أُرِيدُ قَلَمَ رَصَاصٍ،', think: 'Excuse me first; then what I need.' },
      { head: 'Please — to the listener', ar: 'مِنْ فَضْلِ{e|كِ}.', think: 'My teacher is a woman: -ki.' },
      { head: 'She hands it over', ar: 'نَعَمْ، تَفَضَّلِ{e|ي}.', think: 'I am a girl, so she says تَفَضَّلِي.' },
      { head: 'Thanks and reply', ar: 'شُكْرًا جَزِيلًا. — عَفْوًا.', think: 'Thanks → you’re welcome. Hold the -an sound.' },
    ],
    legend: ['e'], legendLabels: { e: 'TO A FEMALE' },
    model: 'مَعْذِرَةً، أُرِيدُ قَلَمَ رَصَاصٍ، مِنْ فَضْلِ{e|كِ}. — نَعَمْ، تَفَضَّلِ{e|ي}. — شُكْرًا جَزِيلًا. — عَفْوًا.',
    modelEn: 'Excuse me, I would like a pencil, please. — Yes, here you are. — Thank you very much. — You’re welcome.',
    notes: 'I DO (3 min) — the website “model dialogue” (writing section), modelled with a think-aloud. Students copy it. Then change ONE thing aloud: “Now a boy asks a male teacher” → مِنْ فَضْلِكَ … تَفَضَّلْ.',
  },
  F.gameSlide({ ...game, items: [game.items[2], game.items[5], game.items[3]] }, {
    title: 'What do you say?',
    en: ['I do not understand.', 'Thank you very much.', 'May I go out?'],
    icons: [[['fa6', 'FaEarListen', '1D5FBF'], ['fa6', 'FaQuestion', 'B83227']], [['fa6', 'FaHandsPraying', 'C77700'], ['fa6', 'FaHeart', 'D6336C']], [['fa6', 'FaDoorOpen', '6B4C9A'], ['fa6', 'FaHand', '1D5FBF']]],
    labels: ['I don’t understand', 'thank you!', 'leaving the room'],
    order: [1, 2, 0],
    notes: 'Website visual game “Polite Classroom Arabic” (3 of 6). New: أَخْرُجَ = go out (compare أَدْخُلَ = come in). Other website cards for homework: asking a question, كَرِّرْ (repeat), and مَا مَعْنَى هَذِهِ الكَلِمَةِ؟ (what does this word mean?).',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website role-play rounds', title: 'Choose the complete, polite line', ar: 'مَاذَا تَقُولُ؟',
    seed: 15,
    questions: [rounds[1], rounds[5], rounds[9], rounds[2], rounds[11]],
    side: { kind: 'core', label: 'CORE', text: 'Who is the LISTENER?\nFemale → -ki / -ī.\nWho is the SPEAKER?\nFemale → آسِفَةٌ.' },
    answerSlide: { min: 0, eyebrow: 'We do · role-play answers', title: 'Role-play: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 12 role-play rounds (borrow a ruler from a female, ask her to repeat, a girl apologises, ask to enter, reassure). The other 7 are homework.',
    answerNotes: 'After each answer, one student SAYS the line aloud to the teacher (by invitation) — the teacher replies in role.',
  },
  F.repairSlide(site, [
    'Who is listening — a man or a woman?',
    'Maryam is speaking about herself.',
    'What do you say after “thank you”?',
  ]),
  F.listening(site, {
    coreTip: 'Listen twice.\nFirst: the situation.\nThen: the exact polite phrase.',
    routes: 'Core: questions 1, 3 and 5. Develop / Stretch: all 5.',
    gloss: [
      ['١. مَعْذِرَةً، أُرِيدُ قَلَمًا، مِنْ فَضْلِكَ. — نَعَمْ، تَفَضَّلْ. — شُكْرًا جَزِيلًا. — عَفْوًا.', 'Excuse me, I want a pen, please. — Yes, here you are. — Thank you very much. — You’re welcome.'],
      ['٢. لَا أَفْهَمُ. أَعِيدِي، مِنْ فَضْلِكِ. — نَعَمْ، سَأُعِيدُ السُّؤَالَ بِبُطْءٍ. — شُكْرًا.', 'I don’t understand. Repeat, please. — Yes, I will repeat the question slowly. — Thanks.'],
      ['٣. هَلْ يُمْكِنُ أَنْ أَشْرَبَ المَاءَ؟ — نَعَمْ، تَفَضَّلْ. — شُكْرًا.', 'May I drink some water? — Yes, go ahead. — Thanks.'],
      ['٤. أَنَا آسِفَةٌ. تَأَخَّرْتُ. — لَا بَأْسَ. تَفَضَّلِي. — شُكْرًا جَزِيلًا.', 'I am sorry. I was late. — No problem. Come in. — Thank you very much.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 2, eyebrow: 'We do · reading · a polite start to the lesson (website)', title: 'Maryam arrives at the lesson', ar: 'بِدَايَةٌ مُهَذَّبَةٌ لِلدَّرْسِ',
    lines: [
      ['مَرْيَمُ: مَعْذِرَةً يَا أُسْتَاذَةُ. هَلْ يُمْكِنُ أَنْ أَدْخُلَ؟', 'Excuse me, Miss. May I come in?'],
      ['المُعَلِّمَةُ: نَعَمْ، تَفَضَّلِي يَا مَرْيَمُ.', 'Yes, come in, Maryam.'],
      ['مَرْيَمُ: شُكْرًا. لَا أَفْهَمُ السُّؤَالَ. أَعِيدِي، مِنْ فَضْلِكِ.', 'Thanks. I don’t understand the question. Repeat, please.'],
      ['المُعَلِّمَةُ: نَعَمْ. سَأُعِيدُ السُّؤَالَ بِبُطْءٍ.', 'Yes. I will repeat the question slowly.'],
      ['مَرْيَمُ: شُكْرًا جَزِيلًا. وَهَلْ يُمْكِنُ أَنْ أَسْتَعِيرَ مِسْطَرَةً؟', 'Thank you very much. And may I borrow a ruler?'],
      ['المُعَلِّمَةُ: نَعَمْ، تَفَضَّلِي. هَذِهِ مِسْطَرَةٌ. — مَرْيَمُ: شُكْرًا. — عَفْوًا.', 'Yes, here you are. This is a ruler. — Thanks. — You’re welcome.'],
    ],
    notes: 'READING (website section 6). Website strategy “Track the exchange”: circle each request · underline the two female addressee forms · box the item Maryam borrows · find every thanks/response pair · explain why the teacher says تَفَضَّلِي, not تَفَضَّلْ.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (website)', title: 'Use precise evidence', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: bank(6, 'readingQuiz', [1, 2, 3, 5, 6]),
    side: { kind: 'info', head: 'FIND THE EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Choose, then point to the exact line in the dialogue.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 2, 3, 4, 6 and 7 (1, 5 and 8 for homework). Q5 (“Why is مِنْ فَضْلِكِ correct?”) is the key concept of the lesson.',
    answerNotes: 'A student reads aloud the evidence line for each answer (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'اُطْلُبْ قَلَمًا مِنَ المُعَلِّمِ.' },
      { route: 'develop', ar: 'اُطْلُبْ مِسْطَرَةً مِنَ المُعَلِّمَةِ.' },
      { route: 'develop', ar: 'لَا تَفْهَمُ السُّؤَالَ. مَاذَا تَقُولُ؟' },
      { route: 'stretch', ar: 'تَأَخَّرْتَ. اِعْتَذِرْ، ثُمَّ اُطْلُبْ كِتَابًا.' },
    ],
    stems: [
      { route: 'core', ar: 'مَعْذِرَةً، أُرِيدُ ______ ، مِنْ فَضْلِكَ.' },
      { route: 'develop', ar: 'هَلْ يُمْكِنُ أَنْ أَسْتَعِيرَ ______ ، مِنْ فَضْلِكِ؟' },
      { route: 'stretch', ar: 'أَنَا آسِفٌ / آسِفَةٌ. تَأَخَّرْتُ. …' },
      { route: 'sum', ar: 'تَفَضَّلْ / تَفَضَّلِي · عَفْوًا · لَا بَأْسَ' },
    ],
    modelEn: ['Excuse me, I would like a pen, please.', 'Yes, here you are.'],
    notes: `WEBSITE ROLE-PLAY CARDS (read one aloud; the named pair performs it; the class judges): 📘 ask for a book (to a female) · ✏️ a pencil (to a male) · 📏 borrow a ruler (to a female) · 🔁 ask for repetition (to a male) · 🐢 slower speech (to a female) · 💧 ask to drink water · 🚪 ask to enter · ⏰ apologise for being late (a female student).
Website speaking checklist (listener ticks 1–6 in chat): attention with مَعْذِرَةً · a clear request · the listener ending · an appropriate response · thanks and close · clear -an sounds and long vowels.
Routes (website): Core — a four-line exchange with please, thank you and a response · Develop — an object, then repetition or help · Stretch — switch male / female listeners without losing the endings. The teacher plays the responder role for Core students.`,
  }),
  F.routesSlide(site, {
    core: { amount: '6 lines', how: 'One request: excuse me → request + please → here you are → thanks → you’re welcome.' },
    develop: { amount: '8 lines', how: 'Two classroom needs, e.g. a pencil and then “repeat, please”.' },
    stretch: { amount: '10 lines', how: 'Switch the listener’s gender and include an apology + “no problem”.' },
  }),
  F.framesSlide({
    core: [
      { en: 'Excuse me, I would like …', ar: 'مَعْذِرَةً، أُرِيدُ ______ ،' },
      { en: '… please (to a boy / girl).', ar: 'مِنْ ______ .' },
      { en: 'Yes, here you are.', ar: 'نَعَمْ، ______ .' },
      { en: 'Thank you very much.', ar: 'شُكْرًا ______ .' },
      { en: 'You’re welcome.', ar: '______ .' },
    ],
    develop: [
      { en: 'Excuse me, Miss. May I come in?', ar: 'مَعْذِرَةً يَا ______ . هَلْ يُمْكِنُ أَنْ ______ ؟' },
      { en: 'I don’t understand. Repeat, please.', ar: 'لَا ______ . ______ ، مِنْ فَضْلِكِ.' },
      { en: 'May I borrow …?', ar: 'هَلْ يُمْكِنُ أَنْ أَسْتَعِيرَ ______ ؟' },
      { en: 'I am sorry. I was late.', ar: 'أَنَا ______ . تَأَخَّرْتُ.' },
      { en: 'No problem.', ar: 'لَا ______ .' },
    ],
    bank: ['فَضْلِكَ', 'فَضْلِكِ', 'تَفَضَّلْ', 'تَفَضَّلِي', 'جَزِيلًا', 'عَفْوًا', 'أَفْهَمُ', 'أَعِدْ', 'أَعِيدِي', 'آسِفٌ', 'آسِفَةٌ', 'بَأْسَ', 'قَلَمًا', 'كِتَابًا', 'مِسْطَرَةً'],
  }),
  F.modelSlide(site,
    'Student (f.): Excuse me, I would like a pencil, please. — Teacher (f.): Yes, here you are. — Student: Thank you very much. — Teacher: You’re welcome. — Student: I don’t understand the question. Repeat, please. — Teacher: Yes.',
    ['an attention phrase', 'please with -ki', 'تَفَضَّلِي', 'thanks + reply'],
    'Website “model dialogue”. Develop: add a second request; Stretch: rewrite it for a male teacher.'),
  F.selfCheckSlide([
    { route: 'core', text: 'I used please, thank you and a reply.' },
    { route: 'core', text: 'I can say “I don’t understand” in Arabic.' },
    { route: 'develop', text: 'My “please” matches the listener (-ka / -ki).' },
    { route: 'develop', text: 'I made two different classroom requests.' },
    { route: 'stretch', text: 'My “sorry” matches the speaker (آسِفٌ / آسِفَةٌ).' },
  ]),
  F.exitTicket(bank(6, 'finalQuiz', [1, 4, 8]), 12),
  F.prepSlide({
    ...NEXT,
    words: [['أَسْكُنُ فِي …', 'I live in …', ''], ['أَيْنَ تَسْكُنُ؟', 'Where do you live? (to a boy)', 'f. تَسْكُنِينَ'], ['أَيْضًا', 'also, too', ''], ['سَعِيدٌ بِلِقَائِكَ', 'happy to meet you (boy speaking)', 'f. سَعِيدَةٌ'], ['وَ', 'and (joins facts)', '']],
    questionEn: 'Write your facts in English: name, age, origin, where you live, languages. Next lesson you join them in Arabic.',
    questionAr: 'أَنَا مِنْ … وَأَسْكُنُ فِي …',
    homework: {
      core: 'Website F2-L06: the role-play rounds (12) and the picture game “Polite Classroom Arabic”.',
      develop: 'Write a polite classroom dialogue with two requests (type, draw or paper route).',
      stretch: 'A 10-line dialogue switching listener gender + an apology; then the 12-question checkpoint (aim for 10/12).',
    },
    wordsSource: 'The five words are from the website F2-L07 introduction fact bank (residence, connectors and the polite close).',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: use polite Arabic in every lesson from now on!' }),
];

module.exports = { meta, slides };
