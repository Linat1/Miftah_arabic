'use strict';
/*
 * F4-L04 · Likes, Dislikes and Preferences
 * Website: Pathways › Foundation › F4 › Lesson 4. The F4 retrieval bridge, the preference-language bank (أُحِبُّ · لَا أُحِبُّ ·
 * أُفَضِّلُ · مَادَّتِي المُفَضَّلَةُ · فِي رَأْيِي · بِالنِّسْبَةِ إِلَيَّ; جِدًّا · كَثِيرًا · قَلِيلًا · أَكْثَرَ · أَقَلَّ · خُصُوصًا; 14), asking a boy
 * or a girl (12), comparing two subjects (أُفَضِّلُ … عَلَى / أَكْثَرَ مِنْ; reason adjectives; 14), the opinion profile, the
 * Preference Mission (14), Noor, Omar and Salma (listening), Yusuf, Hanan and a class survey (reading), the preference
 * conversation, the 7–9-sentence report and the 16-question checkpoint.
 */
const F = require('./f4-common');
const game = require('../site-data/pathway-visual-games.json')['f4-l04'];
const { q, bank, banks } = F;

const meta = F.meta({
  n: 4, fileTitle: 'Likes_Dislikes_and_Preferences', chip: 'Likes & Preferences',
  title: 'Likes, Dislikes and Preferences', arabic: 'مَا أُحِبُّ وَمَا لَا أُحِبُّ وَمَا أُفَضِّلُ',
  focus: 'Say how strongly you like a subject, ask a boy or a girl about their preferences, compare two subjects and report another person’s opinion.',
  icon: 'FaHeart', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F4-L05', nextTitle: 'Giving Reasons — Why?', nextAr: 'إِعْطَاءُ الأَسْبَابِ — لِمَاذَا؟' };
const AR = /[؀-ۿ]/;
const rounds = banks.l04.rounds.map((r) => F.w({ ...r, q: AR.test(r.prompt) ? r.prompt : `${r.title}: ${r.prompt}` }));
const prompts = banks.l04.prompts;
const MF = (m, f) => ({ tag: 'm · f', forms: [{ l: 'f.', ar: f }, { l: 'm.', ar: m }] });

const site = {
  speaking: {
    context: 'Hold a subject-preference conversation',
    model: [
      ['A', 'هَلْ تُحِبِّينَ الرِّيَاضِيَّاتِ؟ مَا مَادَّتُكِ المُفَضَّلَةُ؟', 'Do you like maths? What is your favourite subject?'],
      ['B', 'أُحِبُّهَا قَلِيلًا. مَادَّتِي المُفَضَّلَةُ هِيَ الفَنُّ، وَأُفَضِّلُهُ عَلَى المُوسِيقَى.', 'I like it a little. My favourite is art, and I prefer it to music.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: a 7–9-sentence report on your own (or a fictional learner’s) subject preferences — a strong like with a degree, a dislike, a comparison and two reasons.',
    checklist: ['A degree: جِدًّا / كَثِيرًا / قَلِيلًا after the subject.', 'لَا أُحِبُّ … (لَا before the verb).', 'أُفَضِّلُ … عَلَى … or أَكْثَرَ مِنْ.', 'Two reasons with لِأَنَّهُ / لِأَنَّهَا.'],
    model: 'أُحِبُّ العُلُومَ كَثِيرًا لِأَنَّهَا مُثِيرَةٌ لِلاهْتِمَامِ، وَأُفَضِّلُ الكِيمِيَاءَ عَلَى الفِيزِيَاءِ. أُحِبُّ الفَنَّ قَلِيلًا، وَلَكِنِّي لَا أُحِبُّ التَّارِيخَ لِأَنَّهُ مُمِلٌّ فِي رَأْيِي. صَدِيقِي عُمَرُ يُحِبُّ التَّارِيخَ جِدًّا، أَمَّا صَدِيقَتِي سَلْمَى فَتُفَضِّلُ اللُّغَةَ العَرَبِيَّةَ لِأَنَّهَا مُهِمَّةٌ وَجَمِيلَةٌ.',
  },
  differentiation: {
    core: 'Seven accurate sentences using the models.',
    develop: 'Three preference verbs, two degrees and two reasons.',
    stretch: 'Report another learner: yuḥibbu / tuḥibbu / yufaḍḍilu / tufaḍḍilu.',
  },
  mistakes: [
    { wrong: 'أُحِبُّ كَثِيرًا العُلُومَ.', right: 'أُحِبُّ العُلُومَ كَثِيرًا.', why: 'The degree word comes AFTER the subject.' },
    { wrong: 'يَا مَرْيَمُ، هَلْ تُحِبُّ الفَنَّ؟', right: 'يَا مَرْيَمُ، هَلْ تُحِبِّينَ الفَنَّ؟', why: 'The LISTENER’s gender controls the question ending.' },
    { wrong: 'أُفَضِّلُ الفَنَّ مِنَ التَّارِيخِ.', right: 'أُفَضِّلُ الفَنَّ عَلَى التَّارِيخِ.', why: 'Prefer X to Y = ‘alā; like more than = akthara min.' },
  ],
  listening: {
    title: 'Noor compares school subjects',
    script: 'نُورٌ: أَدْرُسُ مَوَادَّ كَثِيرَةً فِي المَدْرَسَةِ. أُحِبُّ العُلُومَ كَثِيرًا لِأَنَّهَا مُثِيرَةٌ لِلاهْتِمَامِ، وَأُفَضِّلُ الكِيمِيَاءَ عَلَى الفِيزِيَاءِ. أُحِبُّ الفَنَّ قَلِيلًا، وَلَكِنِّي لَا أُحِبُّ التَّارِيخَ لِأَنَّهُ مُمِلٌّ فِي رَأْيِي. صَدِيقِي عُمَرُ يُحِبُّ التَّارِيخَ جِدًّا، وَهُوَ يُفَضِّلُهُ عَلَى الجُغْرَافِيَا. أَمَّا صَدِيقَتِي سَلْمَى فَتُفَضِّلُ اللُّغَةَ العَرَبِيَّةَ لِأَنَّهَا مُهِمَّةٌ وَجَمِيلَةٌ.',
    questions: bank(4, 'listening', [0, 2, 3, 5, 8]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 4,
    source: 'Website sections used: the eight-question F4 retrieval bridge and “a complete answer”, the preference-language bank (verbs, openers, intensity and comparison words, word-order rules) and the 14-question check, asking a boy or a girl (12), comparing two subjects with reason agreement (14), the opinion profile builder, the Preference Mission (14), Noor, Omar and Salma (listening, 10), Yusuf, Hanan and the class survey (reading, 12), the preference conversation (4 prompts), the 7–9-sentence report and the 16-question checkpoint. Picture match: website visual game.',
    support: `• Core: أُحِبُّ / لَا أُحِبُّ + كَثِيرًا / قَلِيلًا + مَادَّتِي المُفَضَّلَةُ. Develop: asking a boy or a girl, أُفَضِّلُ … عَلَى … and two reasons. Stretch: أَكْثَرَ / أَقَلَّ مِنْ and reporting others (يُحِبُّ / تُحِبُّ / يُفَضِّلُ / تُفَضِّلُ).
• Website “a complete answer”: subject + degree or comparison + a reason when appropriate.
• Opinions are personal: accept honest dislikes of subjects respectfully — the task is accuracy, not agreement. Students may also invent a fictional learner (website).
• Urdu bridge: پسند (like) — Arabic uses أُحِبُّ; فضیلت / افضل (excellence, better) share the root of أُفَضِّلُ; زیادہ ≈ أَكْثَرُ (different word); خصوصاً = خُصُوصًا.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Like, dislike, prefer and how much, then compare two subjects.', wedo: 'Preference mission, listen to Noor, read Yusuf and Hanan.', next: 'F4-L05' }),
  F.doNow({
    questions: [
      q('What does كَثِيرًا mean?', ['a lot', 'a little', 'never'], 'Prepared at home (F4-L03).'),
      q('What does فِي رَأْيِي mean?', ['in my opinion', 'in my bag', 'on my desk'], 'Prepared at home (F4-L03).'),
      ...bank(4, 'retrieval', [3, 4, 7]),
    ],
    keyIdea: { text: 'A complete opinion = subject + how much (or a comparison) + a reason. The degree word goes AFTER the subject.', ar: 'أُحِبُّ العُلُومَ {k|كَثِيرًا}، وَأُفَضِّلُ الكِيمِيَاءَ {w|عَلَى} الفِيزِيَاءِ' },
    retrieves: 'Questions 1–2 test two of the five phrases prepared at home at the end of F4-L03. Questions 3–5 are the website “F4 retrieval bridge” (asking a girl, the feminine reason, but).',
  }),
  F.objectivesSlide([
    'Use uḥibbu, lā uḥibbu and ufaḍḍilu accurately.',
    'Show degree with jiddan, kathīran and qalīlan.',
    'Ask one male or female listener about preferences.',
    'Compare two subjects and report another person’s opinion.',
  ], {
    core: ['I can say what I like and don’t like.', 'I can say a lot / a little.'],
    develop: ['I can ask a boy or a girl what they like.', 'I can say I prefer X to Y with a reason.'],
    stretch: ['I can say I like X more than Y.', 'I can report what a friend likes.'],
  }, 2, 'Website “By the end, I can…” (left) and the website writing Core / Develop / Stretch routes (right).'),
  F.keywordsSlide({
    text: 'Preference verbs, degree words and comparisons. Core: like, don’t like, prefer, a lot, a little.',
    groups: [
      { head: 'GROUP 1', name: 'Preference verbs + openers' },
      { head: 'GROUP 2', name: 'Degree · comparison · 6' },
      { head: 'GROUP 3', name: 'Reason adjectives · 14' },
    ],
    bridge: [
      { ar: 'أُفَضِّلُ', urdu: 'افضل', tr: 'ufaḍḍilu', en: 'I prefer (Urdu: best)' },
      { ar: 'خُصُوصًا', urdu: 'خصوصاً', tr: 'khuṣūṣan', en: 'especially' },
      { ar: 'رَأْيٌ', urdu: 'رائے', tr: 'ra’y', en: 'opinion' },
      { ar: 'عَمَلِيٌّ', urdu: 'عملی', tr: '‘amaliyy', en: 'practical' },
      { ar: 'مُفِيدٌ', urdu: 'مفید', tr: 'mufīd', en: 'useful' },
    ],
    notes: 'URDU BRIDGE: افضل / فضیلت (best, excellence) share the root of أُفَضِّلُ (I prefer); خصوصاً، رائے، عملی and مفید are shared words.',
  }),
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 1–2 · preference and degree (website bank)', title: 'Like, prefer, a lot, a little …', ar: 'لُغَةُ التَّفْضِيلِ',
    items: [
      { n: 1, ar: 'أُحِبُّ · لَا أُحِبُّ', en: 'I like · I do not like', tr: 'u-ḥib-bu · lā u-ḥib-bu', core: true, tag: 'verbs' },
      { n: 2, ar: 'أُفَضِّلُ', en: 'I prefer', tr: 'u-faḍ-ḍi-lu', core: true, tag: 'verb', forms: [{ l: 'to …', ar: 'أُفَضِّلُ … عَلَى …' }] },
      { n: 3, ar: 'جِدًّا · كَثِيرًا', en: 'very much · a lot', tr: 'jid-dan · ka-thī-ran', core: true, tag: 'degree' },
      { n: 4, ar: 'قَلِيلًا', en: 'a little', tr: 'qa-lī-lan', core: true, tag: 'degree' },
      { n: 5, ar: 'أَكْثَرَ · أَقَلَّ', en: 'more · less', tr: 'ak-tha-ra · a-qal-la', tag: 'compare', forms: [{ l: 'than', ar: 'أَكْثَرَ مِنْ …' }] },
      { n: 6, ar: 'فِي رَأْيِي · خُصُوصًا', en: 'in my opinion · especially', tr: 'fī ra’-yī · khu-ṣū-ṣan', tag: 'openers' },
    ],
    notes: 'PREFERENCE BANK (website). Also: مَادَّتِي المُفَضَّلَةُ (my favourite subject), بِالنِّسْبَةِ إِلَيَّ (as for me — Stretch opener). Website rules: place the degree AFTER the subject (أُحِبُّ الفَنَّ جِدًّا · أُحِبُّ المُوسِيقَى كَثِيرًا · أُحِبُّ الفَلْسَفَةَ قَلِيلًا); negation stays BEFORE the verb (لَا أُحِبُّ التَّارِيخَ) — do not split لَا أُحِبُّ.',
  },
  {
    type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Group 3 · reason adjectives (website)', title: 'Creative, practical, complicated …', ar: 'صِفَاتُ السَّبَبِ',
    items: [
      { n: 7, ar: 'إِبْدَاعِيٌّ', en: 'creative', tr: 'ib-dā-‘iyy', core: true, ...MF('إِبْدَاعِيٌّ', 'إِبْدَاعِيَّةٌ') },
      { n: 8, ar: 'عَمَلِيٌّ', en: 'practical', tr: '‘a-ma-liyy', ...MF('عَمَلِيٌّ', 'عَمَلِيَّةٌ') },
      { n: 9, ar: 'مُعَقَّدٌ', en: 'complicated', tr: 'mu-‘aq-qad', ...MF('مُعَقَّدٌ', 'مُعَقَّدَةٌ') },
      { n: 10, ar: 'مُثِيرٌ لِلاهْتِمَامِ', en: 'interesting', tr: 'mu-thīr lil-ih-ti-mām', core: true, ...MF('مُثِيرٌ', 'مُثِيرَةٌ') },
      { n: 11, ar: 'مُمْتِعٌ', en: 'enjoyable', tr: 'mum-ti‘', core: true, ...MF('مُمْتِعٌ', 'مُمْتِعَةٌ') },
      { n: 12, ar: 'مُمِلٌّ', en: 'boring', tr: 'mu-mill', core: true, ...MF('مُمِلٌّ', 'مُمِلَّةٌ') },
    ],
    notes: 'REASON ADJECTIVES (website, 14): سَهْلٌ، صَعْبٌ، مُفِيدٌ، مُمْتِعٌ، مُمِلٌّ، مُهِمٌّ، مُثِيرٌ لِلاهْتِمَامِ، شَيِّقٌ، عَمَلِيٌّ، إِبْدَاعِيٌّ، مُفَضَّلٌ، مُعَقَّدٌ — each with a feminine form (+ـةٌ). New today: إِبْدَاعِيٌّ، عَمَلِيٌّ، مُعَقَّدٌ.',
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · ask a boy, ask a girl (website)', title: 'The listener controls the ending', ar: 'اِسْأَلْ زَمِيلًا أَوْ زَمِيلَةً',
    cols: [{ label: 'Ask one male', w: 4.3, size: 22 }, { label: 'Ask one female', w: 4.6, size: 22 }, { label: 'Meaning', w: 3.43 }],
    rows: [
      { core: true, cells: [{ ar: 'هَلْ تُحِبُّ العُلُومَ؟' }, { ar: 'هَلْ تُحِبِّ{e|ينَ} العُلُومَ؟' }, 'Do you like science?'] },
      { core: true, cells: [{ ar: 'مَا مَادَّتُكَ المُفَضَّلَةُ؟' }, { ar: 'مَا مَادَّتُ{e|كِ} المُفَضَّلَةُ؟' }, 'What is your favourite subject?'] },
      { cells: [{ ar: 'أَيَّ مَادَّةٍ تُفَضِّلُ؟' }, { ar: 'أَيَّ مَادَّةٍ تُفَضِّلِ{e|ينَ}؟' }, 'Which subject do you prefer?'] },
      { core: true, cells: [{ ar: 'نَعَمْ، أُحِبُّ العُلُومَ كَثِيرًا.' }, { ar: 'لَا، لَا أُحِبُّ الفِيزِيَاءَ.' }, 'Answer in the first person'] },
      { cells: [{ ar: 'هُوَ يُحِبُّ التَّارِيخَ.' }, { ar: 'هِيَ تُفَضِّلُ العَرَبِيَّةَ.' }, 'Report: he likes · she prefers'] },
    ],
    foot: 'Website common mistake: the SPEAKER’s gender does not choose tuḥibbu / tuḥibbīna — the LISTENER’s gender does.',
    notes: `GRAMMAR PART 1 — website section 3 “Ask another learner about preferences”. The answer returns to the first person (أُحِبُّ، مَادَّتِي).
Reporting (Stretch, website): هُوَ يُحِبُّ … · هِيَ تُفَضِّلُ … · عُمَرُ يُحِبُّ التَّارِيخَ جِدًّا · سَلْمَى تُفَضِّلُ اللُّغَةَ العَرَبِيَّةَ.`,
  },
  {
    type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · compare two subjects (website)', title: 'Prefer … to · more than', ar: 'قَارِنْ بَيْنَ مَادَّتَيْنِ',
    cards: [
      { chip: 'PATTERN A', color: '1D5FBF', head: 'أُفَضِّلُ … عَلَى …', big: 'أُفَضِّلُ الكِيمِيَاءَ عَلَى الفِيزِيَاءِ.', en: 'I prefer chemistry to physics.', clue: 'prefer X ‘alā Y' },
      { chip: 'PATTERN B · STRETCH', color: '6B4C9A', head: 'أَكْثَرَ مِنْ …', big: 'أُحِبُّ الفَنَّ أَكْثَرَ مِنَ المُوسِيقَى.', en: 'I like art more than music.', clue: 'less = aqalla min' },
      { chip: 'JUSTIFY', color: '1E6B52', head: 'لِأَنَّهُ / لِأَنَّهَا', big: 'أُفَضِّلُ الفَنَّ عَلَى التَّارِيخِ؛ لِأَنَّهُ إِبْدَاعِيٌّ.', en: 'I prefer art to history because it is creative.', clue: 'Match the preferred subject.' },
    ],
    error: { text: 'Website: name BOTH choices and explain why one wins.', pairs: [['أُفَضِّلُ الفَنَّ عَلَى التَّارِيخِ.', 'أُفَضِّلُ الفَنَّ مِنَ التَّارِيخِ.']] },
    notes: `GRAMMAR PART 2 — website section 4 “Compare two subjects accurately”: Pattern A أُفَضِّلُ … عَلَى … and Pattern B أُحِبُّ … أَكْثَرَ مِنْ … ; reason adjectives choose the matching gender (أُحِبُّ الفَنَّ لِأَنَّهُ إِبْدَاعِيٌّ · أُحِبُّ الجُغْرَافِيَا لِأَنَّهَا مُفِيدَةٌ).
Website complete answer: أُحِبُّ العُلُومَ كَثِيرًا، وَأُفَضِّلُ الكِيمِيَاءَ عَلَى الفِيزِيَاءِ؛ لِأَنَّهَا مُثِيرَةٌ لِلاهْتِمَامِ.`,
  },
  F.quickCheck([...bank(4, 'language', [5]), ...bank(4, 'questions', [1, 7]), ...bank(4, 'compare', [1])], 'website preference check question 6, ask-and-answer questions 2 and 8, and comparison check question 2.'),
  {
    type: 'ido', stage: 'ido', min: 3, eyebrow: 'I do · watch, then copy', title: 'Watch me build a complete opinion', ar: 'شَاهِدْ ثُمَّ اُكْتُبْ',
    steps: [
      { head: 'Like + degree', ar: 'أُحِبُّ العُلُومَ {k|كَثِيرًا}.', think: 'Degree after the subject.' },
      { head: 'Compare', ar: 'أُفَضِّلُ الكِيمِيَاءَ {w|عَلَى} الفِيزِيَاءِ.', think: 'prefer X ‘alā Y.' },
      { head: 'Reason', ar: 'لِأَنَّهَا مُثِيرَةٌ لِلاهْتِمَامِ.', think: 'Chemistry (f.) → -hā.' },
      { head: 'Dislike', ar: 'وَلَكِنِّي لَا أُحِبُّ التَّارِيخَ لِأَنَّهُ مُمِلٌّ.', think: 'lā before the verb.' },
    ],
    legend: ['k', 'w'], legendLabels: { k: 'DEGREE', w: 'COMPARISON' },
    model: 'أُحِبُّ العُلُومَ {k|كَثِيرًا}، وَأُفَضِّلُ الكِيمِيَاءَ {w|عَلَى} الفِيزِيَاءِ لِأَنَّهَا مُثِيرَةٌ لِلاهْتِمَامِ. أُحِبُّ الفَنَّ {k|قَلِيلًا}، وَلَكِنِّي لَا أُحِبُّ التَّارِيخَ لِأَنَّهُ مُمِلٌّ فِي رَأْيِي.',
    modelEn: 'I like science a lot, and I prefer chemistry to physics because it is interesting. I like art a little, but I do not like history because it is boring in my opinion.',
    notes: 'I DO (3 min) — the website listening (Noor) as the model. Think aloud at every step: “Where does the degree go? Which subject do I prefer — so which pronoun?”',
  },
  F.gameSlide({ ...game, title: 'Visual game — Likes and dislikes', items: [game.items[2], game.items[3], game.items[5]] }, {
    title: 'Like or don’t like? Match the picture',
    en: ['I like reading.', 'I do not like football.', 'I prefer the bicycle to the car.'],
    icons: [[['fa6', 'FaHeart', 'B83280'], ['fa6', 'FaBookOpen', '1D5FBF']], [['fa6', 'FaBan', 'B83227'], ['fa6', 'FaFutbol', '5A6472']], [['fa6', 'FaBicycle', '1E6B52'], ['fa6', 'FaCar', '5A6472']]],
    labels: ['heart + book', 'no + football', 'bicycle > car'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6 — general likes, not school subjects). Follow-up: make each one about a school subject — أُحِبُّ الفَنَّ · لَا أُحِبُّ الفِيزِيَاءَ · أُفَضِّلُ العُلُومَ عَلَى التَّارِيخِ.',
  }),
  {
    type: 'mcq', stage: 'wedo', min: 4, eyebrow: 'We do · website “Preference Mission”', title: 'Complete the preference mission', ar: 'مُهِمَّةُ التَّفْضِيلِ',
    seed: 15,
    questions: [rounds[4], rounds[5], rounds[6], rounds[7], rounds[12]],
    side: { kind: 'core', label: 'CORE', text: 'girl → tuḥibbīna\nprefer X ‘alā Y\nmore than = akthara min' },
    answerSlide: { min: 0, eyebrow: 'We do · Mission answers', title: 'Mission: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 14 Preference Mission rounds (female listener, prefer, more than, reason for art, report her). The other 9 are homework.',
    answerNotes: 'After each answer, a student says the complete sentence aloud.',
  },
  F.repairSlide(site, ['Where does the degree word go?', 'Asking a girl: which ending?', 'Prefer X … Y: ‘alā or min?']),
  F.listening(site, {
    coreTip: 'Listen twice.\nThree columns: Noor · Omar · Salma — subject, degree, reason.',
    routes: 'Core: questions 1, 2 and 3. Develop / Stretch: all 5.',
    gloss: [
      ['نُورٌ: أَدْرُسُ مَوَادَّ كَثِيرَةً فِي المَدْرَسَةِ.', 'Noor: I study many subjects at school.'],
      ['أُحِبُّ العُلُومَ كَثِيرًا لِأَنَّهَا مُثِيرَةٌ لِلاهْتِمَامِ، وَأُفَضِّلُ الكِيمِيَاءَ عَلَى الفِيزِيَاءِ.', 'I like science a lot because it is interesting, and I prefer chemistry to physics.'],
      ['أُحِبُّ الفَنَّ قَلِيلًا، وَلَكِنِّي لَا أُحِبُّ التَّارِيخَ لِأَنَّهُ مُمِلٌّ فِي رَأْيِي.', 'I like art a little, but I don’t like history because it is boring in my opinion.'],
      ['صَدِيقِي عُمَرُ يُحِبُّ التَّارِيخَ جِدًّا، وَهُوَ يُفَضِّلُهُ عَلَى الجُغْرَافِيَا.', 'My friend Omar likes history very much, and he prefers it to geography.'],
      ['أَمَّا صَدِيقَتِي سَلْمَى فَتُفَضِّلُ اللُّغَةَ العَرَبِيَّةَ لِأَنَّهَا مُهِمَّةٌ وَجَمِيلَةٌ.', 'As for my friend Salma, she prefers Arabic because it is important and beautiful.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 3, eyebrow: 'We do · reading · Profile A (website)', title: 'Yusuf’s preferences', ar: 'المَلَفُّ (أ)',
    lines: [
      ['أَنَا يُوسُفُ. أُحِبُّ الرِّيَاضِيَّاتِ كَثِيرًا؛', 'Yusuf · likes maths a lot'],
      ['لِأَنَّهَا عَمَلِيَّةٌ وَمُفِيدَةٌ.', 'because it is practical and useful (f.)'],
      ['أُفَضِّلُ عِلْمَ الحَاسُوبِ عَلَى الفَنِّ؛ لِأَنَّهُ شَيِّقٌ.', 'Prefers computing to art — engaging (m.)'],
      ['لَا أُحِبُّ المُوسِيقَى كَثِيرًا،', 'Does not like music much'],
      ['وَلَكِنِّي أُحِبُّ اللُّغَةَ العَرَبِيَّةَ جِدًّا.', 'but likes Arabic very much'],
    ],
    notes: 'PROFILE A (website, complete). Find: two degree words, one comparison and two reasons with agreement.',
  },
  {
    type: 'glossed', stage: 'wedo', flex: true, eyebrow: 'We do · reading · Profile B (website) · FLEX / Stretch', title: 'Hanan’s preferences', ar: 'المَلَفُّ (ب)',
    lines: [
      ['اِسْمِي حَنَانُ. مَادَّتِي المُفَضَّلَةُ هِيَ الفَنُّ؛', 'Hanan · favourite: art'],
      ['لِأَنَّهُ إِبْدَاعِيٌّ وَمُمْتِعٌ.', 'creative and enjoyable (m.)'],
      ['أُحِبُّ الجُغْرَافِيَا أَكْثَرَ مِنَ التَّارِيخِ.', 'Geography more than history'],
      ['أُحِبُّ العُلُومَ قَلِيلًا، وَلَا أُفَضِّلُ الفِيزِيَاءَ؛', 'Science a little · not physics'],
      ['لِأَنَّهَا مُعَقَّدَةٌ فِي رَأْيِي.', 'complicated, in her opinion (f.)'],
    ],
    notes: 'PROFILE B (website, complete) — Pattern B (أَكْثَرَ مِنْ). The website also shows a six-student class survey (science most liked, history most disliked, maths split evenly) — use it on the website for homework.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading questions (website)', title: 'Yusuf or Hanan?', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 8,
    questions: bank(4, 'reading', [1, 2, 3, 5, 6]),
    side: { kind: 'info', head: 'EVIDENCE', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the preference verb,\nthen the degree or the reason.' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 2, 3, 4, 6 and 7. The survey questions (9–12) are on the website.',
    answerNotes: 'A student reads aloud the evidence phrase (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'هَلْ تُحِبُّ الرِّيَاضِيَّاتِ؟ / هَلْ تُحِبِّينَ الرِّيَاضِيَّاتِ؟' },
      { route: 'develop', ar: 'مَا مَادَّتُكَ المُفَضَّلَةُ؟ وَلِمَاذَا؟' },
      { route: 'develop', ar: 'أَيَّ مَادَّةٍ تُفَضِّلُ: الفَنَّ أَمِ المُوسِيقَى؟' },
      { route: 'stretch', ar: 'مَاذَا يُحِبُّ صَدِيقُكَ؟ وَمَاذَا تُفَضِّلُ صَدِيقَتُكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'نَعَمْ، أُحِبُّ … كَثِيرًا. / لَا، لَا أُحِبُّ … .' },
      { route: 'develop', ar: 'مَادَّتِي المُفَضَّلَةُ هِيَ ______ لِأَنَّهُ / لِأَنَّهَا ______ .' },
      { route: 'develop', ar: 'أُفَضِّلُ ______ عَلَى ______ .' },
      { route: 'stretch', ar: 'صَدِيقِي يُحِبُّ ______ ، وَصَدِيقَتِي تُفَضِّلُ ______ .' },
    ],
    modelEn: ['Do you like maths? What is your favourite subject?', 'I like it a little. My favourite is art, and I prefer it to music.'],
    notes: `WEBSITE SPEAKING STUDIO “Hold a subject-preference conversation” — answer in complete sentences, ask a follow-up question and compare two subjects. Prompts (website):
${prompts.map((r) => `• ${r.title}: ${r.detail}`).join('\n')}
Website checklist (1–6): أُحِبُّ · لَا أُحِبُّ · a degree word · أُفَضِّلُ … عَلَى · accurate reason agreement · one follow-up question.`,
  }),
  F.routesSlide(site, {
    core: { amount: '7 sentences', how: 'Like, dislike, favourite and a degree, using the models.' },
    develop: { amount: '7–9 sentences', how: 'Three preference verbs, two degrees, two reasons.' },
    stretch: { amount: '9+ sentences', how: 'Report another learner and use akthara / aqalla min.' },
  }),
  F.framesSlide({
    core: [
      { en: 'I like science a lot.', ar: 'أُحِبُّ العُلُومَ كَثِيرًا.' },
      { en: 'I like art a little.', ar: 'أُحِبُّ الفَنَّ قَلِيلًا.' },
      { en: 'I do not like history.', ar: 'لَا أُحِبُّ التَّارِيخَ.' },
      { en: 'My favourite subject is Arabic.', ar: 'مَادَّتِي المُفَضَّلَةُ هِيَ اللُّغَةُ العَرَبِيَّةُ.' },
      { en: 'Do you (f.) like maths?', ar: 'هَلْ تُحِبِّينَ الرِّيَاضِيَّاتِ؟' },
    ],
    develop: [
      { en: 'I prefer chemistry to physics.', ar: 'أُفَضِّلُ الكِيمِيَاءَ عَلَى الفِيزِيَاءِ.' },
      { en: 'I like art more than music.', ar: 'أُحِبُّ الفَنَّ أَكْثَرَ مِنَ المُوسِيقَى.' },
      { en: '… because it is creative (m.).', ar: '… لِأَنَّهُ إِبْدَاعِيٌّ.' },
      { en: 'Omar likes history very much.', ar: 'عُمَرُ يُحِبُّ التَّارِيخَ جِدًّا.' },
      { en: 'Salma prefers Arabic.', ar: 'سَلْمَى تُفَضِّلُ اللُّغَةَ العَرَبِيَّةَ.' },
    ],
    bank: ['أُحِبُّ', 'لَا أُحِبُّ', 'أُفَضِّلُ', 'عَلَى', 'أَكْثَرَ مِنْ', 'جِدًّا', 'كَثِيرًا', 'قَلِيلًا', 'فِي رَأْيِي', 'لِأَنَّهُ', 'لِأَنَّهَا', 'وَلَكِنِّي'],
  }),
  F.modelSlide(site,
    'I like science a lot because it is interesting, and I prefer chemistry to physics. I like art a little, but I do not like history because it is boring in my opinion. My friend Omar likes history very much; as for my friend Salma, she prefers Arabic because it is important and beautiful.',
    ['degree words', 'comparison', 'reasons', 'reporting others'],
    'The website listening (Noor) as a model report. Stretch: add Pattern B (أَكْثَرَ مِنْ) from Hanan’s profile.'),
  F.selfCheckSlide([
    { route: 'core', text: 'I used uḥibbu and lā uḥibbu correctly.' },
    { route: 'core', text: 'The degree word comes after the subject.' },
    { route: 'develop', text: 'I compared with ufaḍḍilu … ‘alā …' },
    { route: 'develop', text: 'My reasons agree with the subject.' },
    { route: 'stretch', text: 'I reported another person’s opinion.' },
  ]),
  F.exitTicket(bank(4, 'finalCheck', [2, 4, 8]), 16),
  F.prepSlide({
    ...NEXT,
    words: [['لِمَاذَا؟', 'why?', '—'], ['لِأَنَّنِي', 'because I …', '—'], ['عَمَلِيٌّ', 'practical', 'f. عَمَلِيَّةٌ'], ['إِبْدَاعِيٌّ', 'creative', 'f. إِبْدَاعِيَّةٌ'], ['مُعَقَّدٌ', 'complicated', 'f. مُعَقَّدَةٌ']],
    questionEn: 'Why do you like your favourite subject? Give one reason.',
    questionAr: 'لِمَاذَا؟',
    homework: {
      core: 'Website F4-L04: the Preference Mission (14) and the picture game.',
      develop: 'Website opinion profile: one like, one dislike, one comparison and one reason.',
      stretch: 'Write a 7–9-sentence preference report about yourself and one friend.',
    },
    wordsSource: 'The five words come from the website F4-L05 reason bank.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: subject + degree + reason · prefer X ‘alā Y · the listener controls tuḥibbu / tuḥibbīna.' }),
];

module.exports = { meta, slides };
