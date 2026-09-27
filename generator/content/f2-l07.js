'use strict';
/*
 * F2-L07 · Building a Full Introduction
 * Website: Pathways › Foundation › F2 › Lesson 7. The introduction fact bank (greeting, name, age, origin, residence,
 * language, nationality, close), مِنْ vs فِي (origin vs residence), أَسْكُنُ فِي / أَيْنَ تَسْكُنُ(ينَ)؟, connectors وَ،
 * أَيْضًا، ثُمَّ, the seven-step order, Introduction Builder (12), Tariq listening, three introductions, 30-second talk.
 */
const F = require('./f2-common');
const game = require('../site-data/pathway-visual-games.json')['f2-l07'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 7, fileTitle: 'Full_Introduction', chip: 'Full Introduction',
  title: 'Building a Full Introduction', arabic: 'بِنَاءُ تَعْرِيفٍ كَامِلٍ بِالنَّفْسِ',
  focus: 'Bring together everything you can already say — greeting, name, age, origin, residence, nationality and language — and connect it with وَ and أَيْضًا into a clear introduction another person can follow.',
  icon: 'FaUserCheck', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F2-L08', nextTitle: 'Reading and Writing Personal Profiles', nextAr: 'البِطَاقَاتُ الشَّخْصِيَّةُ' };
const rounds = banks.l07.rounds.map((r) => F.w({ ...r, q: `${r.detail} ${r.prompt}` }));
const roles = banks.l07.roles;
const FB = (fact, ans, qm, qf, core) => ({ core, cells: [{ ar: ans }, { ar: qm }, { ar: qf }, fact] });

const site = {
  speaking: {
    context: 'Your 30-second introduction',
    model: [
      ['1', 'مَرْحَبًا! اِسْمِي لَيْلَى، وَعُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً.', 'Hello! My name is Layla, and I am thirteen.'],
      ['2', 'أَنَا مِنْ سُورِيَا، وَأَسْكُنُ فِي لَنْدَنَ. سَعِيدَةٌ بِلِقَائِكُمْ.', 'I am from Syria, and I live in London. Pleased to meet you.'],
    ],
  },
  writing: {
    prompt: 'Website writing workshop: plan six facts (name, age, origin, residence, nationality/language, close), then write four to seven connected sentences. Stretch: include أَيْضًا, then write a second introduction about a fictional person.',
    checklist: ['The greeting comes first.', 'اِسْمِي and عُمْرِي carry the “my” ending.', 'مِنْ for origin, فِي for residence.', 'وَ is attached to the next word.'],
    model: 'السَّلَامُ عَلَيْكُمْ. اِسْمِي أَحْمَدُ، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً. أَنَا مِنْ مِصْرَ، وَأَسْكُنُ فِي لَنْدَنَ. جِنْسِيَّتِي مِصْرِيَّةٌ، وَأَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ. سَعِيدٌ بِلِقَائِكُمْ.',
  },
  differentiation: {
    core: 'Four sentences: name, age, origin and residence.',
    develop: 'Five or six sentences with language or nationality and a polite close.',
    stretch: 'Seven connected sentences with أَيْضًا, then a second introduction about a fictional person.',
  },
  mistakes: [
    { wrong: 'أَسْكُنُ مِنْ لَنْدَنَ.', right: 'أَسْكُنُ فِي لَنْدَنَ.', why: 'Residence takes فِي (in); origin takes مِنْ (from).' },
    { wrong: 'اِسْمِي لَيْلَى، وَ عُمْرِي …', right: 'اِسْمِي لَيْلَى، وَعُمْرِي …', why: 'وَ is written attached to the next word.' },
    { wrong: 'لَيْلَى: سَعِيدٌ بِلِقَائِكُمْ.', right: 'لَيْلَى: سَعِيدَةٌ بِلِقَائِكُمْ.', why: 'The adjective matches the speaker: Layla is female.' },
  ],
  listening: {
    title: 'Tariq’s introduction',
    script: 'السَّلَامُ عَلَيْكُمْ. اِسْمِي طَارِقٌ، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً. أَنَا مِنْ بَاكِسْتَانَ، وَأَسْكُنُ فِي بِرْمِنْغَامَ. أَتَكَلَّمُ الأُرْدِيَّةَ وَالإِنْجِلِيزِيَّةَ. سَعِيدٌ بِلِقَائِكُمْ.',
    questions: bank(7, 'listeningQuiz', [0, 1, 2, 3, 4]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 7,
    source: 'Website sections used: the six-fact retrieval, the complete introduction fact bank and question bank, the origin/residence bridge and check (8), the seven-step order and connector rules, the order and connector check (8), the Introduction Builder Mission (12), Tariq’s listening (8 questions), three reading introductions (10 questions), the 30-second speaking studio with identity cards and success ladder, the writing workshop and the twelve-question checkpoint. Picture match: website visual game “Building a Full Introduction” (the same cards as F2-L02 — used here as quick retrieval).',
    support: `• This is a CONSOLIDATION lesson: almost no new language. The only new pieces are أَسْكُنُ فِي (I live in), the connectors وَ / أَيْضًا, and the close سَعِيدٌ / سَعِيدَةٌ بِلِقَائِكُمْ.
• Website: “The goal is not to memorise a single paragraph; it is to choose the right chunk for your real information.”
• Core: four facts with the fact bank visible. Develop: five or six joined facts from brief prompts. Stretch: introduce a fictional partner in the third person (he / she) — a preview of F2-L08.
• Privacy: students may use an identity card (Layla, Tariq, Aisha…) instead of real details (city of residence especially).`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'The fact bank, then from vs in, then joining facts.', wedo: 'Builder mission, picture match, listen and read.', next: 'F2-L08' }),
  F.doNow({
    questions: [
      q('What does أَسْكُنُ فِي لَنْدَنَ mean?', ['I live in London.', 'I am from London.', 'I speak in London.'], 'Prepared at home.'),
      q('What does أَيْضًا mean?', ['also, too', 'and', 'from'], 'Prepared at home.'),
      ...bank(7, 'retrievalQuiz', [1, 2, 4]),
    ],
    keyIdea: { text: 'A full introduction is not one new sentence — it is a chain of sentences you already know, joined with “and”.', ar: 'اِسْمِي … وَعُمْرِي … أَنَا مِنْ … وَأَسْكُنُ فِي …' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 are the website “six-fact retrieval” (age question to a girl, origin with مِنْ, feminine nationality).',
  }),
  F.objectivesSlide([
    'Give name, age, origin, residence, nationality and language.',
    'Keep origin (مِنْ) and residence (فِي) separate.',
    'Join facts with وَ and أَيْضًا in a clear order.',
    'Deliver a 30-second introduction and write 4–7 sentences.',
  ], {
    core: ['I can give four facts with the fact bank visible.', 'I can say where I am from and where I live.'],
    develop: ['I can give five or six joined facts from prompts.', 'I can close politely with the right form.'],
    stretch: ['I can introduce a partner as he / she.', 'I can adapt the pattern to any identity card.'],
  }, 1, 'Website lesson aims (left) and the website speaking Core / Develop / Stretch goals (right).'),
  F.keywordsSlide({
    text: 'Only a few new words today — the rest is the fact bank from F2-L01 to F2-L06. Core: أَسْكُنُ فِي, وَ, and the polite close.',
    groups: [
      { head: 'GROUP 1', name: 'The fact bank · 7 facts' },
      { head: 'GROUP 2', name: 'Residence + connectors · 6' },
    ],
    bridge: [
      { ar: 'سَكَنٌ', urdu: 'مسکن', tr: 'maskan', en: 'dwelling, home' },
      { ar: 'لِقَاءٌ', urdu: 'ملاقات', tr: 'mulāqāt', en: 'meeting' },
      { ar: 'سَعِيدٌ', urdu: 'سعید', tr: 'saʿīd', en: 'happy, fortunate (a name)' },
      { ar: 'تَعْرِيفٌ', urdu: 'تعارف', tr: 'taʿāruf', en: 'introduction' },
      { ar: 'مَعْلُومَاتٌ', urdu: 'معلومات', tr: 'maʿlūmāt', en: 'information' },
    ],
    notes: `URDU BRIDGE: مسکن (maskan — same root as أَسْكُنُ), ملاقات (mulāqāt — same root as لِقَاء in بِلِقَائِكُمْ), سعید (a common name — happy), تعارف (taʿāruf — introduction, same root as تَعْرِيف), معلومات (information).
Cities used on the website: لَنْدَنُ، بِرْمِنْغَامُ، بَارِيسُ، القَاهِرَةُ، الرِّيَاضُ. Students add their own city.`,
  }),
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Key words · Group 1 · the introduction fact bank (website) · 1 of 2', title: 'Your answer and the question', ar: 'بَنْكُ عِبَارَاتِ التَّعْرِيفِ',
    cols: [{ label: 'My answer (I)', w: 3.6, size: 22 }, { label: 'Ask a boy', w: 3.2, size: 22 }, { label: 'Ask a girl', w: 3.33, size: 22 }, { label: 'Fact', w: 2.2 }],
    rows: [
      FB('👋 Greeting', 'مَرْحَبًا! / السَّلَامُ عَلَيْكُمْ.', 'أَهْلًا وَسَهْلًا.', 'أَهْلًا وَسَهْلًا.', true),
      FB('🪪 Name', 'اِسْمِي …', 'مَا اسْمُكَ؟', 'مَا اسْمُكِ؟', true),
      FB('🎂 Age', 'عُمْرِي … سَنَةً.', 'كَمْ عُمْرُكَ؟', 'كَمْ عُمْرُكِ؟', true),
      FB('🌍 Origin', 'أَنَا مِنْ …', 'مِنْ أَيْنَ أَنْتَ؟', 'مِنْ أَيْنَ أَنْتِ؟', true),
    ],
    notes: 'FACT BANK 1–4 (website). Recall race: cover the right-hand column; students say the question for a boy and a girl before you reveal. Every row recycles F2-L01–L04.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1 · the introduction fact bank (website) · 2 of 2', title: 'Residence, language, nationality, close', ar: 'بَنْكُ عِبَارَاتِ التَّعْرِيفِ',
    cols: [{ label: 'My answer (I)', w: 3.6, size: 22 }, { label: 'Ask a boy', w: 3.2, size: 22 }, { label: 'Ask a girl', w: 3.33, size: 22 }, { label: 'Fact', w: 2.2 }],
    rows: [
      FB('🏠 Residence (NEW)', 'أَسْكُنُ فِي …', 'أَيْنَ تَسْكُنُ؟', 'أَيْنَ تَسْكُنِينَ؟', true),
      FB('🗣️ Language', 'أَتَكَلَّمُ …', 'مَا اللُّغَةُ الَّتِي تَتَكَلَّمُهَا؟', 'مَا اللُّغَةُ الَّتِي تَتَكَلَّمِينَهَا؟'),
      FB('🏳️ Nationality', 'أَنَا مِصْرِيٌّ / مِصْرِيَّةٌ.', 'مَا جِنْسِيَّتُكَ؟', 'مَا جِنْسِيَّتُكِ؟'),
      FB('🤝 Close (NEW)', 'سَعِيدٌ / سَعِيدَةٌ بِلِقَائِكُمْ.', 'تَشَرَّفْنَا.', 'تَشَرَّفْنَا.', true),
    ],
    notes: `FACT BANK 5–8 (website). NEW: أَسْكُنُ فِي … and the close سَعِيدٌ / سَعِيدَةٌ بِلِقَائِكُمْ (pleased to meet you all).
Website rules: with أَنَا the nationality matches the SPEAKER; after جِنْسِيَّتِي (my nationality, a feminine noun) the adjective is feminine for everyone: جِنْسِيَّتِي مِصْرِيَّةٌ. سَعِيدٌ / سَعِيدَةٌ also matches the speaker (F2-L05!).
The language question uses “which you speak” — recognition only for Core.`,
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 2 · residence and connectors (website)', title: 'Where you live, and how to join facts', ar: 'السَّكَنُ وَأَدَوَاتُ الرَّبْطِ',
    items: [
      { n: 1, ar: 'أَسْكُنُ فِي', en: 'I live in', tr: 'as-ku-nu fī', tag: 'I · you m. · you f.', core: true, forms: [{ l: 'I', ar: 'أَسْكُنُ' }, { l: 'you m.', ar: 'تَسْكُنُ' }, { l: 'you f.', ar: 'تَسْكُنِينَ' }] },
      { n: 2, ar: 'سَعِيدٌ بِلِقَائِكُمْ', en: 'pleased to meet you (all)', tr: 'sa-ʿī-dun bi-li-qāʾi-kum', tag: 'speaker m. · f.', core: true, forms: [{ l: 'boy', ar: 'سَعِيدٌ' }, { l: 'girl', ar: 'سَعِيدَةٌ' }, { l: 'we', ar: 'سُعَدَاءُ' }] },
      { n: 3, ar: 'وَ', en: 'and', tr: 'wa-', tag: 'connector', core: true, note: 'Attached: وَعُمْرِي · وَأَسْكُنُ.' },
      { n: 4, ar: 'أَيْضًا', en: 'also, too', tr: 'ay-ḍan', tag: 'connector', note: 'After the added idea.' },
      { n: 5, ar: 'ثُمَّ', en: 'then', tr: 'thum-ma', tag: 'Stretch', note: 'Optional sequence connector.' },
      { n: 6, ar: 'لَنْدَنُ · بِرْمِنْغَامُ', en: 'London · Birmingham', tr: 'lan-da-nu · bir-min-ghā-mu', tag: 'cities', note: 'Also: بَارِيسُ، القَاهِرَةُ، الرِّيَاضُ' },
    ],
    notes: 'RESIDENCE AND CONNECTORS (website “Useful connectors” + residence row). Card 1: I / you (to a boy) / you (to a girl) — تَسْكُنِينَ has the same -īna ending as تَتَكَلَّمِينَ (F2-L04). Card 2: the adjective follows the speaker; the “we” form is for recognition.',
  },
  {
    type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · keep origin and residence separate (website)', title: 'From or in?', ar: 'مِنْ أَيْنَ؟ وَأَيْنَ تَسْكُنُ؟',
    cards: [
      { chip: 'ORIGIN · WHERE FROM?', color: '1D5FBF', head: 'مِنْ', big: 'أَنَا مِنْ سُورِيَا.', en: 'I am from Syria.', clue: 'مِنْ before the country or place of origin.' },
      { chip: 'RESIDENCE · WHERE NOW?', color: '0E7C86', head: 'فِي', big: 'أَسْكُنُ فِي لَنْدَنَ.', en: 'I live in London.', clue: 'فِي before the city or country you live in now.' },
      { chip: 'BOTH · JOINED WITH وَ', color: '6B4C9A', head: 'مِنْ … وَ … فِي', big: 'أَنَا مِنْ بَاكِسْتَانَ، وَأَسْكُنُ فِي بِرْمِنْغَامَ.', en: 'I am from Pakistan, and I live in Birmingham.', clue: 'A person can be from one place and live in another.' },
    ],
    error: { text: 'Website: the small words carry different meanings.', pairs: [['أَسْكُنُ فِي', 'أَسْكُنُ مِنْ']] },
    notes: 'ORIGIN vs RESIDENCE (website section 3). Many students in the class are exactly card 3 — from one country, living in another. Quick poll: type your own sentence in the chat using BOTH مِنْ and فِي (or use an identity card).',
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'Grammar focus · build a listener-friendly introduction (website)', title: 'Seven steps, one clear path', ar: 'رَتِّبْ تَعْرِيفَكَ وَارْبِطْ أَفْكَارَكَ',
    cols: [{ label: 'Step', w: 2.6 }, { label: 'Arabic chunk', w: 5.6, size: 22 }, { label: 'Tip', w: 4.13 }],
    rows: [
      { core: true, cells: ['1 · Greeting', { ar: 'مَرْحَبًا!' }, 'Always first.'] },
      { core: true, cells: ['2 · Name', { ar: 'اِسْمِي …' }, 'My name.'] },
      { core: true, cells: ['3 · Age', { ar: '{k|وَ}عُمْرِي … سَنَةً.' }, 'وَ joined to the next word.'] },
      { core: true, cells: ['4 · Origin', { ar: 'أَنَا {k|مِنْ} …' }, 'from'] },
      { cells: ['5 · Residence', { ar: '{k|وَ}أَسْكُنُ {k|فِي} …' }, 'and I live in'] },
      { cells: ['6 · Language', { ar: '{k|وَ}أَتَكَلَّمُ … {k|أَيْضًا}.' }, 'also — after the idea'] },
      { cells: ['7 · Close', { ar: 'سَعِيدٌ / سَعِيدَ{e|ةٌ} بِلِقَائِكُمْ.' }, 'matches the speaker'] },
    ],
    notes: `THE SEVEN STEPS (website section 4). Website: “The order is flexible in real life, but this Foundation sequence gives the listener a clear path.”
Connector rules (website): وَ attaches to the following word (اِسْمِي لَيْلَى، وَعُمْرِي …). أَيْضًا goes after the added idea (أَتَكَلَّمُ العَرَبِيَّةَ، وَأَتَكَلَّمُ الإِنْجِلِيزِيَّةَ أَيْضًا) — or avoid repeating the verb: أَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ.`,
  },
  F.quickCheck(bank(7, 'residenceQuiz', [0, 1, 3, 4]), 'website “Origin or residence?” check questions 1, 2, 4 and 5.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me build Layla’s introduction', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Greet + name', ar: 'مَرْحَبًا! اِسْمِي لَيْلَى،', think: 'Steps 1–2. A comma: more is coming.' },
      { head: 'Join the age', ar: '{k|وَ}عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً.', think: 'وَ is glued to عُمْرِي.' },
      { head: 'From … and in …', ar: 'أَنَا {k|مِنْ} سُورِيَا، {k|وَ}أَسْكُنُ {k|فِي} لَنْدَنَ.', think: 'Origin, then residence.' },
      { head: 'Language + close', ar: 'أَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ. سَعِيدَ{e|ةٌ} بِلِقَائِكُمْ.', think: 'Layla is a girl: سَعِيدَةٌ.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'LINK WORD', e: 'MATCHES ME' },
    model: 'مَرْحَبًا! اِسْمِي لَيْلَى، {k|وَ}عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً. أَنَا {k|مِنْ} سُورِيَا، {k|وَ}أَسْكُنُ {k|فِي} لَنْدَنَ. أَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ. سَعِيدَ{e|ةٌ} بِلِقَائِكُمْ.',
    modelEn: 'Hello! My name is Layla, and I am thirteen. I am from Syria, and I live in London. I speak Arabic and English. Pleased to meet you.',
    notes: 'I DO (3 min) — the website “finished product” (Layla), built step by step with a think-aloud. Students copy it and underline every وَ, circle مِنْ and فِي (website writing checklist).',
  },
  F.gameSlide({ ...game, items: [game.items[3], game.items[2], game.items[5]] }, {
    title: 'Quick retrieval: who says it?',
    en: ['I am Egyptian. (boy)', 'I am British. (girl)', 'I speak Arabic.'],
    icons: [[['fa6', 'FaPerson', '1D5FBF'], ['fa6', 'FaFlag', 'B83227']], [['fa6', 'FaPersonDress', 'D6336C'], ['fa6', 'FaFlag', '1D5FBF']], [['fa6', 'FaPerson', '1D5FBF'], ['fa6', 'FaComments', '1E7B4F']]],
    labels: ['a boy · Egypt', 'a girl · Britain', 'a boy · speaks Arabic'],
    order: [1, 2, 0],
    notes: 'The website game for F2-L07 repeats the F2-L02/L04 cards — used here as a 2-minute retrieval warm-up for the nationality and language facts. Stretch: turn each card into a full sentence with a name and a city.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Introduction Builder Mission”', title: 'Build a coherent introduction', ar: 'مَهَمَّةُ بِنَاءِ التَّعْرِيفِ',
    seed: 16,
    questions: [rounds[2], rounds[4], rounds[6], rounds[8], rounds[9]],
    side: { kind: 'core', label: 'CORE', text: 'from = مِنْ\nin = فِي\nand = وَ (glued on)\nalso = أَيْضًا (after)' },
    answerSlide: { min: 0, eyebrow: 'We do · Builder Mission answers', title: 'Builder: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 12 builder decisions (join the age, add the city, place أَيْضًا, attach وَ, keep مِنْ / فِي separate). The other 7 are homework.',
    answerNotes: 'After each answer, read the whole growing introduction aloud together.',
  },
  F.repairSlide(site, [
    'Do you live FROM a city?',
    'Look at the space after وَ.',
    'Who is speaking — a boy or a girl?',
  ]),
  F.listening(site, {
    coreTip: 'Listen twice.\nMake a four-box fact file:\nname · age · country · city.',
    routes: 'Core: questions 1–4 (the fact file). Develop / Stretch: all 5.',
    gloss: [
      ['السَّلَامُ عَلَيْكُمْ. اِسْمِي طَارِقٌ، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.', 'Peace be upon you. My name is Tariq, and I am fourteen.'],
      ['أَنَا مِنْ بَاكِسْتَانَ، وَأَسْكُنُ فِي بِرْمِنْغَامَ.', 'I am from Pakistan, and I live in Birmingham.'],
      ['أَتَكَلَّمُ الأُرْدِيَّةَ وَالإِنْجِلِيزِيَّةَ. سَعِيدٌ بِلِقَائِكُمْ.', 'I speak Urdu and English. Pleased to meet you all.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading workshop · three introductions (website)', title: 'Layla, Yusuf and Aisha', ar: 'اِقْرَأْ ثَلَاثَةَ تَعْرِيفَاتٍ',
    lines: [
      ['لَيْلَى: مَرْحَبًا! اِسْمِي لَيْلَى، وَعُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً. أَنَا مِنْ سُورِيَا، وَأَسْكُنُ فِي لَنْدَنَ.', 'Layla: 13 · from Syria · lives in London'],
      ['أَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ. سَعِيدَةٌ بِلِقَائِكُمْ.', 'speaks Arabic and English'],
      ['يُوسُف: السَّلَامُ عَلَيْكُمْ. اِسْمِي يُوسُفُ، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً. أَنَا مِنَ المَغْرِبِ، وَأَسْكُنُ فِي بَارِيسَ.', 'Yusuf: 15 · from Morocco · lives in Paris'],
      ['أَتَكَلَّمُ العَرَبِيَّةَ وَالفَرَنْسِيَّةَ أَيْضًا. تَشَرَّفْنَا.', 'speaks Arabic and French too'],
      ['عَائِشَة: أَهْلًا وَسَهْلًا. اِسْمِي عَائِشَةُ، وَعُمْرِي اِثْنَتَا عَشْرَةَ سَنَةً. أَنَا مِنْ بَرِيطَانِيَا، وَأَسْكُنُ فِي بِرْمِنْغَامَ.', 'Aisha: 12 · from Britain · lives in Birmingham'],
      ['جِنْسِيَّتِي بَرِيطَانِيَّةٌ، وَأَفْهَمُ العَرَبِيَّةَ أَيْضًا. سَعِيدَةٌ بِلِقَائِكُمْ.', 'British nationality · also understands Arabic'],
    ],
    notes: 'READING (website section 7). The English column is a fact summary, NOT a translation — students must read the Arabic for the exact evidence. Website strategy: scan each text for the same categories; use مِنْ, فِي and the age phrase as evidence.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions · find the evidence (website)', title: 'Prove it from the three texts', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: bank(7, 'readingQuiz', [3, 5, 6, 8, 9]),
    side: { kind: 'info', head: 'FIND THE EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Use مِنْ, فِي and the age phrase as evidence (website).' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 4, 6, 7, 9 and 10 (1–3, 5 and 8 for homework). Q10 (“Why does Layla say سَعِيدَةٌ?”) links back to F2-L05 agreement.',
    answerNotes: 'A student reads aloud the evidence for each answer (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'مَا اسْمُكَ؟ كَمْ عُمْرُكَ؟ مِنْ أَيْنَ أَنْتَ؟' },
      { route: 'develop', ar: 'قَدِّمْ نَفْسَكَ فِي ثَلَاثِينَ ثَانِيَةً.' },
      { route: 'develop', ar: 'أَيْنَ تَسْكُنِينَ؟ وَمَا اللُّغَةُ الَّتِي تَتَكَلَّمِينَهَا؟' },
      { route: 'stretch', ar: 'قَدِّمْ زَمِيلَكَ أَوْ زَمِيلَتَكَ.' },
    ],
    stems: [
      { route: 'core', ar: 'اِسْمِي ______ ، وَعُمْرِي ______ سَنَةً. أَنَا مِنْ ______ .' },
      { route: 'develop', ar: '… وَأَسْكُنُ فِي ______ . أَتَكَلَّمُ ______ أَيْضًا.' },
      { route: 'stretch', ar: 'هَذَا / هَذِهِ ______ . هُوَ / هِيَ مِنْ ______ …' },
      { route: 'sum', ar: 'سَعِيدٌ / سَعِيدَةٌ بِلِقَائِكُمْ.' },
    ],
    modelEn: ['Hello! My name is Layla, and I am thirteen.', 'I am from Syria, and I live in London. Pleased to meet you.'],
    notes: `WEBSITE SPEAKING STUDIO: “Start with your real information. Then use the random identity cards to prove that you can adapt the pattern rather than recite one memorised paragraph.”
Identity cards (website — read one; a student introduces themself AS that person):
${roles.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website success ladder (listener ticks 1–7 in chat): greeting first · name and age · origin and residence separated (مِنْ / فِي) · one extra detail · ideas joined (وَ / أَيْضًا) · polite close · connected breath groups, not one word at a time.
Routes (website): Core — four facts with the phrase bank visible · Develop — five or six joined facts from brief prompts only · Stretch — introduce a fictional partner in the third person after hearing their introduction.`,
  }),
  F.routesSlide(site, {
    core: { amount: '4 sentences', how: 'Name, age, origin, residence — copy the chunks from the fact bank.' },
    develop: { amount: '5–6 sentences', how: 'Add language or nationality and the polite close; join with وَ.' },
    stretch: { amount: '7 sentences + 1', how: 'Use أَيْضًا; then write a second introduction about a fictional person.' },
  }),
  F.framesSlide({
    core: [
      { en: 'Hello! My name is …,', ar: 'مَرْحَبًا! اِسْمِي ______ ،' },
      { en: 'and I am … years old.', ar: 'وَعُمْرِي ______ سَنَةً.' },
      { en: 'I am from …', ar: 'أَنَا مِنْ ______ ،' },
      { en: 'and I live in …', ar: 'وَأَسْكُنُ فِي ______ .' },
    ],
    develop: [
      { en: 'I speak … and …', ar: 'أَتَكَلَّمُ ______ وَ ______ .' },
      { en: 'I also understand …', ar: 'وَأَفْهَمُ ______ أَيْضًا.' },
      { en: 'My nationality is …', ar: 'جِنْسِيَّتِي ______ يَّةٌ.' },
      { en: 'Pleased to meet you (boy / girl).', ar: 'سَعِيدٌ / سَعِيدَةٌ بِلِقَائِكُمْ.' },
    ],
    bank: ['مَرْحَبًا', 'اِسْمِي', 'وَعُمْرِي', 'سَنَةً', 'أَنَا مِنْ', 'وَأَسْكُنُ فِي', 'أَتَكَلَّمُ', 'أَيْضًا', 'لَنْدَنَ', 'بِرْمِنْغَامَ', 'سَعِيدٌ', 'سَعِيدَةٌ', 'بِلِقَائِكُمْ'],
  }),
  F.modelSlide(site,
    'Peace be upon you. My name is Ahmad, and I am fourteen. I am from Egypt, and I live in London. My nationality is Egyptian, and I speak Arabic and English. Pleased to meet you.',
    ['a greeting first', 'وَعُمْرِي', 'مِنْ … فِي …', 'سَعِيدٌ (a boy)'],
    'Website “achievable model” (Ahmad). Note جِنْسِيَّتِي مِصْرِيَّةٌ — feminine because جِنْسِيَّة is feminine, even though Ahmad is a boy.'),
  F.selfCheckSlide([
    { route: 'core', text: 'My greeting comes first.' },
    { route: 'core', text: 'I used مِنْ for origin and فِي for residence.' },
    { route: 'develop', text: 'وَ is attached to the next word.' },
    { route: 'develop', text: 'My close matches me: سَعِيدٌ or سَعِيدَةٌ.' },
    { route: 'stretch', text: 'I used أَيْضًا after the added idea.' },
  ]),
  F.exitTicket(bank(7, 'finalQuiz', [3, 4, 10]), 12),
  F.prepSlide({
    ...NEXT,
    words: [['اِسْمُهُ … / اِسْمُهَا …', 'his name is … / her name is …', ''], ['يَعِيشُ فِي …', 'he lives in …', 'f. تَعِيشُ'], ['يُحِبُّ …', 'he likes …', 'f. تُحِبُّ'], ['هِوَايَةٌ', 'a hobby', 'pl. هِوَايَاتٌ'], ['بِطَاقَةٌ شَخْصِيَّةٌ', 'a personal profile', '']],
    questionEn: 'Choose a friend or family member. Note their name, age, city and one hobby in English.',
    questionAr: 'اِسْمُهُ … / اِسْمُهَا …',
    homework: {
      core: 'Website F2-L07: the Introduction Builder Mission (12 decisions).',
      develop: 'Write your full introduction (4–7 sentences) using the website planner.',
      stretch: 'Add a second introduction about a fictional person; then the 12-question checkpoint (aim for 10/12).',
    },
    wordsSource: 'The five words are from the website F2-L08 vocabulary bank (third-person profile language: his / her, he / she verbs, hobby).',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: practise your 30-second introduction aloud!' }),
];

module.exports = { meta, slides };
