'use strict';
/* D5-L06 · Music, Arts and Arabic Culture — website: Pathways › Development › D5 › D5-L06 (يُعَبِّرُ عَنْ · يُؤَثِّرُ فِي · يُلْهِمُ + direct object, past forms عَبَّرَ / أَثَّرَ / أَلْهَمَ,
 * hedged cultural statements فِي بَعْضِ البُلْدَانِ · أَحْيَانًا · لَيْسَ دَائِمًا; instruments, calligraphy and heritage).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing and visual game used as published; two quiz items given
 * distractors that do not differ only in vowels; English added to the patterns and speaking model. Teacher notes offer a nasheed / duff /
 * calligraphy route for families who prefer to avoid musical instruments. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D5')({
  n: 6, fileTitle: 'Music_Arts_and_Arabic_Culture', chip: 'Culture',
  title: 'Music, Arts and Arabic Culture', arabic: 'المُوسِيقَى وَالفُنُونُ وَالثَّقَافَةُ العَرَبِيَّةُ',
  focus: 'Talk about Arabic arts — the oud, the nay, calligraphy, arabesque — and what they do: express (يُعَبِّرُ عَنْ), influence (يُؤَثِّرُ فِي), inspire (يُلْهِمُ) — while describing culture fairly (فِي بَعْضِ البُلْدَانِ · أَحْيَانًا · لَيْسَ دَائِمًا).',
  icon: 'FaPenNib', iconSet: 'fa6',
});

const site = D.site('D5-L06');
const quiz = site.grammar.quiz.map((it, i) => {
  if (i === 4) return { ...it, options: ['حَفْلَةٍ', 'حَفْلَتَيْنِ مُوسِيقِيَّةً', 'الحَفْلَةِ'] };
  if (i === 7) return { ...it, options: [it.options[0], it.options[1], 'الزَّخْرَفَةُ العَرَبِيَّةُ جَمِيلُونَ.'] };
  return it;
});
const mfp = (f, pl) => ({ tag: 'm · f · pl', forms: [{ l: 'pl.', ar: pl }, { l: 'f.', ar: f }] });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D5-L06', {
  support: `• Core: 10 arts words (instruments, calligraphy, exhibition, artist) + “I like … because …”. Develop: يُعَبِّرُ عَنْ and يُؤَثِّرُ فِي with the right prepositions, in present and past. Stretch: يُلْهِمُ + direct object and a hedged statement about taste (website ~80-word task).
• SCHOOL CONTEXT: some families avoid musical instruments. Every task works with the nasheed (النَّشِيدُ), the duff (الدُّفُّ), Arabic calligraphy (الخَطُّ العَرَبِيُّ) or arabesque (الزَّخْرَفَةُ) — let students choose. Hedging language (لَيْسَ دَائِمًا · فِي بَعْضِ البُلْدَانِ) is exactly the respectful way to describe these different views.
• Builds on D5-L01 (يَعْزِفُ عَلَى), D5-L03–L05 (past tense, كَانَ, connectors).`,
  teach: 'Express, influence, inspire — and say it fairly.',
  wedo: 'Sort verbs by preposition, fix slips, then an evening of heritage.',
  next: { nextCode: 'D5-L07', nextTitle: 'Holidays and Travel — Past and Future', nextAr: 'الإِجَازَاتُ وَالسَّفَرُ — المَاضِي وَالمُسْتَقْبَلُ' },
  objectives: ['Name Arabic instruments and art forms with accurate agreement.', 'Use يُعَبِّرُ عَنْ and يُؤَثِّرُ فِي with their fixed prepositions.', 'Use يُلْهِمُ / أَلْهَمَ with a direct object.', 'Describe culture fairly with hedging (فِي بَعْضِ البُلْدَانِ · أَحْيَانًا · لَيْسَ دَائِمًا).'],
  rulesAr: 'التَّعْبِيرُ عَنِ التَّأْثِيرِ وَالتَّقْدِيرِ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does الخَطُّ العَرَبِيُّ mean?', ['Arabic calligraphy', 'Arabic music', 'Arabic poetry'], 'Prepared at home (D5-L05).'),
      q('What does فَنَّانَةٌ mean?', ['a (female) artist', 'a band', 'an exhibition'], 'Prepared at home (D5-L05).'),
      q('What does يُعَبِّرُ عَنْ mean?', ['he expresses', 'he influences', 'he inspires'], 'Prepared at home (D5-L05).'),
      q('Choose the accurate sentence.', ['كَانَتِ الحَفْلَةُ رَائِعَةً.', 'كَانَتِ الحَفْلَةُ رَائِعَةٌ.', 'كَانَ الحَفْلَةُ رَائِعٌ.'], 'D5-L05: kāna + -an.'),
      q('Complete: أَعْزِفُ ___ العُودِ.', ['عَلَى', 'إِلَى', 'فِي'], 'D5-L01.'),
    ],
    keyIdea: { text: 'Each verb keeps its own preposition: ʿan, fī — or nothing at all.', ar: 'يُعَبِّرُ {k|عَنْ} · يُؤَثِّرُ {e|فِي} · يُلْهِمُ {w|الجُمْهُورَ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D5-L05. Question 4 retrieves كَانَ + accusative (D5-L05); question 5 retrieves يَعْزِفُ عَلَى (D5-L01).',
  },
  routes: {
    core: ['I can name 10 arts words.', 'I can say which art I like and why.'],
    develop: ['I can use يُعَبِّرُ عَنْ and يُؤَثِّرُ فِي.', 'I can describe a past cultural visit.'],
    stretch: ['I can use أَلْهَمَ + object.', 'I can make a fair, hedged statement about taste.'],
  },
  bridge: [
    { ar: 'فَنٌّ / فَنَّانٌ', urdu: 'فن / فنکار', tr: 'fan / fankār', en: 'art / artist' },
    { ar: 'خَطٌّ', urdu: 'خط / خطاطی', tr: 'khaṭṭāṭī', en: 'Urdu خط: letter · Arabic خَطٌّ: calligraphy, line' },
    { ar: 'تُرَاثٌ', urdu: 'ورثہ / میراث', tr: 'mīrās', en: 'heritage (same root w-r-th)' },
    { ar: 'مَعْرِضٌ', urdu: 'نمائش', tr: 'numāʾish', en: 'exhibition' },
    { ar: 'نَشِيدٌ', urdu: 'نشید / نعت', tr: 'nashīd', en: 'nasheed, song' },
  ],
  bridgeNotes: 'URDU BRIDGE: فن، خطاطی، نشید are shared; تُرَاثٌ shares the root of Urdu ورثہ / میراث (inheritance). CAREFUL: Urdu خط usually means a letter you post; Arabic خَطٌّ = handwriting / calligraphy (a letter is رِسَالَةٌ).',
  core: ['العُودُ', 'النَّايُ', 'الدُّفُّ', 'فِرْقَةٌ', 'حَفْلَةٌ مُوسِيقِيَّةٌ', 'الخَطُّ العَرَبِيُّ', 'زَخْرَفَةٌ', 'مَعْرِضٌ', 'فَنَّانٌ / فَنَّانَةٌ', 'تُرَاثٌ مُوسِيقِيٌّ', 'يُعَبِّرُ عَنْ', 'يُؤَثِّرُ فِي'],
  forms: {
    'فَنَّانٌ / فَنَّانَةٌ': mfp('فَنَّانَةٌ', 'فَنَّانُونَ / فَنَّانَاتٌ'), 'مُوسِيقَارٌ': mfp('مُوسِيقَارَةٌ', 'مُوسِيقَارُونَ'),
    'فِرْقَةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'فِرَقٌ' }] }, 'مَعْرِضٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'مَعَارِضُ' }] }, 'لَوْحَةٌ': { tag: 'sg · pl', forms: [{ l: 'pl.', ar: 'لَوْحَاتٌ' }] },
    'يُعَبِّرُ عَنْ': { tag: 'she · past', forms: [{ l: 'past', ar: 'عَبَّرَ' }, { l: 'she', ar: 'تُعَبِّرُ' }] },
    'يُؤَثِّرُ فِي': { tag: 'she · past', forms: [{ l: 'past', ar: 'أَثَّرَ' }, { l: 'she', ar: 'تُؤَثِّرُ' }] },
    'يُلْهِمُ': { tag: 'she · past', forms: [{ l: 'past', ar: 'أَلْهَمَ' }, { l: 'she', ar: 'تُلْهِمُ' }] },
  },
  vocabNotes: {
    0: 'Instruments and ensembles. The duff (frame drum) and the human voice (النَّشِيدُ) are used in nasheeds.',
    1: 'Arts and heritage: calligraphy and arabesque are central Islamic arts. People show m. / f. / pl.: فَنَّانٌ · فَنَّانَةٌ · فَنَّانُونَ.',
    2: 'Appreciation and influence: three verbs with three different complements + three hedging phrases.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · three verbs, three complements (website rules 1–3)', title: 'Express, influence, inspire', ar: 'يُعَبِّرُ · يُؤَثِّرُ · يُلْهِمُ',
      cols: [{ label: 'Verb + complement', w: 3.0, size: 22 }, { label: 'Example (website)', w: 6.6, size: 22 }, { label: 'Past', w: 2.73, size: 22 }],
      rows: [
        { core: true, cells: ['يُعَبِّرُ {k|عَنْ}', P('تُعَبِّرُ المُوسِيقَى {k|عَنِ} المَشَاعِرِ.', 'Music expresses feelings.'), 'عَبَّرَ عَنْ'] },
        { core: true, cells: ['يُؤَثِّرُ {e|فِي}', P('أَثَّرَ العُودُ {e|فِي} المُوسِيقَى الأُورُوبِّيَّةِ.', 'The oud influenced European music.'), 'أَثَّرَ فِي'] },
        { cells: ['يُلْهِمُ', P('أَلْهَمَ المُوسِيقَارُ {w|جِيلًا} كَامِلًا.', 'The composer inspired a whole generation.'), 'أَلْهَمَ'] },
        { cells: ['يُلْهِمُ', P('تُلْهِمُ الزَّخْرَفَةُ {w|الفَنَّانِينَ}.', 'Arabesque inspires artists.'), 'أَلْهَمَتْ'] },
        { core: true, cells: ['أَلْهَمَتْنِي', P('أَلْهَمَتْنِي الزَّخْرَفَةُ حَقًّا.', 'The arabesque truly inspired me.'), '-nī = me'] },
      ],
      ltr: true,
      foot: 'After ʿan and fī the noun is genitive (-i); after yulhimu the object is accusative (-an / -a).',
      notes: `GRAMMAR PART 1 — website rules “يُعَبِّرُ عَنْ” (Form II with عَنْ + genitive), “يُؤَثِّرُ فِي” (Form II with فِي — lasting influence on a person, style or generation) and “يُلْهِمُ with a direct object” (Form IV, no preposition). Website teaching point: “Each verb keeps its own preposition.”
Website mistakes: تُعَبِّرُ المُوسِيقَى فِي ✗ · أَثَّرَ الفَنَّانُ عَنْ ✗ · أَلْهَمَ المُوسِيقَارُ فِي الشَّبَابِ ✗.
Nasheed alternative: يُعَبِّرُ النَّشِيدُ عَنْ حُبِّ الوَطَنِ · أَلْهَمَنِي الخَطُّ العَرَبِيُّ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · describing culture fairly (website rule 4) · Develop / Stretch', title: 'Some, sometimes, not always', ar: 'لَا تُعَمِّمْ',
      cards: [
        { chip: 'SOME PLACES · CORE', color: '1E6B52', head: 'فِي بَعْضِ البُلْدَانِ', big: 'فِي بَعْضِ البُلْدَانِ يَتَعَلَّمُ الأَطْفَالُ الخَطَّ مُبَكِّرًا.', en: 'In some countries children learn calligraphy early.', clue: 'Not “all Arabs”.' },
        { chip: 'SOMETIMES · DEVELOP', color: '1D5FBF', head: 'أَحْيَانًا', big: 'أَحْيَانًا يَتَعَلَّمُهَا الشَّبَابُ فِي مَرَاكِزَ ثَقَافِيَّةٍ.', en: 'Sometimes young people learn them in cultural centres.', clue: 'Some of the time.' },
        { chip: 'NOT ALWAYS · STRETCH', color: '6B4C9A', head: 'لَيْسَ دَائِمًا', big: 'لَيْسَ دَائِمًا يُفَضِّلُ الشَّبَابُ التُّرَاثَ، فَالذَّوْقُ شَخْصِيٌّ.', en: 'Young people do not always prefer heritage — taste is personal.', clue: 'Hedge + reason.' },
      ],
      error: { text: 'Website quiz: avoid over-generalising about a whole people.', pairs: [['فِي بَعْضِ البُلْدَانِ', 'كُلُّ العَرَبِ']] },
      notes: `GRAMMAR PART 2 — website rule “Hedged cultural statements” and teaching point “Describe variety, not a single rule: musical taste and artistic tradition differ across and within Arabic-speaking countries.”
Link to our values: speaking fairly and accurately about people (avoid generalising) is part of good adab. This is also an exam skill: a balanced, qualified view scores higher.`,
    },
  ],
  quick: [0, 1, 2, 6],
  rest: [3, 4, 5, 7],
  ido: {
    title: 'Watch me describe a cultural evening',
    steps: [
      { head: 'Scene', ar: 'كَانَتِ الفِرْقَةُ صَغِيرَةً', think: 'kānat + -atan.' },
      { head: 'Express', ar: 'عَبَّرَتِ المُوسِيقَى {k|عَنْ} مَشَاعِرَ', think: 'ʿabbara + ʿan.' },
      { head: 'Inspire', ar: 'أَلْهَمَتْنِي {w|الزَّخْرَفَةُ}', think: 'No preposition.' },
      { head: 'Hedge', ar: '{e|لَيْسَ دَائِمًا}؛ فَالذَّوْقُ شَخْصِيٌّ', think: 'Fair, not general.' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: 'PREPOSITION', w: 'DIRECT OBJECT', e: 'HEDGE' },
    model: 'فِي الشَّهْرِ المَاضِي حَضَرْتُ حَفْلَةً مُوسِيقِيَّةً فِي المَسْرَحِ. كَانَتِ الفِرْقَةُ صَغِيرَةً. عَبَّرَتِ المُوسِيقَى {k|عَنْ} مَشَاعِرَ عَمِيقَةٍ، وَأَثَّرَتْ {k|فِي} الجُمْهُورِ كَثِيرًا. وَبَعْدَ الحَفْلَةِ زُرْتُ مَعْرِضًا لِلْخَطِّ العَرَبِيِّ، وَأَلْهَمَتْنِي {w|الزَّخْرَفَةُ} حَقًّا.',
    modelEn: 'Last month I attended a concert in the theatre. The ensemble was small. The music expressed deep feelings and greatly affected the audience. After the concert I visited an exhibition of Arabic calligraphy, and the arabesque truly inspired me.',
    notes: 'I DO (3 min) — from the website writing model. Alternative model (no instruments): حَضَرْتُ أُمْسِيَةَ أَنَاشِيدَ فِي المَسْجِدِ. عَبَّرَتِ الأَنَاشِيدُ عَنْ حُبِّ النَّبِيِّ ﷺ، وَأَثَّرَتْ فِي الحُضُورِ كَثِيرًا.',
  },
  patternEn: ['Music expresses feelings.', 'The oud influenced music.', 'The composer inspired a whole generation.'],
  game: {
    title: 'Which art? Match the picture',
    pick: [0, 1, 2],
    en: ['I listen to music.', 'I love art and drawing.', 'I go to the theatre.'],
    icons: [[['fa6', 'FaMusic', '6B4C9A']], [['fa6', 'FaPalette', 'C0386B'], ['fa6', 'FaPaintbrush', '1D5FBF']], [['fa6', 'FaMasksTheater', 'C77700']]],
    labels: ['music notes', 'paint and brush', 'theatre masks'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Then upgrade each with today’s verbs: … تُعَبِّرُ عَنِ المَشَاعِرِ · … يُلْهِمُنِي. Other website cards: films, literature and writing, cultural shows.',
  },
  sorterNotes: 'Then make one sentence per column about an art YOU like (calligraphy, nasheed, drawing …).',
  patch: {
    grammar: { ...site.grammar, quiz },
    speaking: {
      model: [
        ['A', 'أَيُّ آلَةٍ مُوسِيقِيَّةٍ تُعْجِبُكَ؟', 'Which musical instrument do you like?'],
        ['B', 'يُعْجِبُنِي العُودُ لِأَنَّهُ يُعَبِّرُ عَنِ المَشَاعِرِ بِوُضُوحٍ.', 'I like the oud because it expresses feelings clearly.'],
        ['A', 'وَهَلْ أَثَّرَتْ فِيكَ حَفْلَةٌ مُعَيَّنَةٌ؟', 'And did a particular concert affect you?'],
        ['B', 'نَعَمْ، فِي الأُسْبُوعِ المَاضِي حَضَرْتُ حَفْلَةً أَلْهَمَتْنِي حَقًّا، وَلٰكِنْ لَيْسَ دَائِمًا أُفَضِّلُ التُّرَاثَ.', 'Yes, last week I attended a concert that truly inspired me, but I do not always prefer heritage.'],
      ],
    },
  },
  patchNote: 'two quiz items given distractors that do not differ only in vowels, and English added to the patterns and speaking model.',
  hints: ['yuʿabbiru + which preposition?', 'yuʾaththiru + which preposition?', 'yulhimu: preposition or none?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nThree instruments + one exhibition.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — and note the three verbs with their prepositions.',
  gloss: [
    ['فِي الأُسْبُوعِ المَاضِي ذَهَبْتُ مَعَ أُسْرَتِي إِلَى حَفْلَةٍ مُوسِيقِيَّةٍ فِي المَسْرَحِ الكَبِيرِ.', 'Last week I went with my family to a concert in the big theatre.'],
    ['كَانَتِ الفِرْقَةُ صَغِيرَةً، وَعَزَفَتْ عَلَى العُودِ وَالنَّايِ وَالقَانُونِ.', 'The ensemble was small, and it played the oud, the nay and the qanun.'],
    ['عَبَّرَتِ المُوسِيقَى عَنْ مَشَاعِرَ كَثِيرَةٍ، وَأَثَّرَتْ فِي الجُمْهُورِ تَأْثِيرًا وَاضِحًا.', 'The music expressed many feelings, and it clearly affected the audience.'],
    ['وَبَعْدَ الحَفْلَةِ زُرْنَا مَعْرِضًا لِلْخَطِّ العَرَبِيِّ، وَأَلْهَمَتْنِي الزَّخْرَفَةُ حَقًّا.', 'After the concert we visited a calligraphy exhibition, and the arabesque truly inspired me.'],
    ['فِي بَعْضِ البُلْدَانِ يَتَعَلَّمُ الأَطْفَالُ هٰذِهِ الآلَاتِ مُبَكِّرًا، وَلٰكِنْ لَيْسَ دَائِمًا؛ فَالأَذْوَاقُ تَخْتَلِفُ مِنْ أُسْرَةٍ إِلَى أُسْرَةٍ.', 'In some countries children learn these instruments early, but not always — tastes differ from family to family.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'أَيُّ فَنٍّ يُعْجِبُكَ؟ وَلِمَاذَا؟' },
      { route: 'develop', ar: 'صِفْ حَفْلَةً أَوْ مَعْرِضًا زُرْتَهُ. مَاذَا رَأَيْتَ وَسَمِعْتَ؟' },
      { route: 'stretch', ar: 'هَلْ تُفَضِّلُ الفُنُونَ التُّرَاثِيَّةَ أَمِ الحَدِيثَةَ؟ اِسْتَعْمِلْ أَحْيَانًا وَلَيْسَ دَائِمًا.' },
    ],
    stems: [
      { route: 'core', ar: 'يُعْجِبُنِي ______ لِأَنَّهُ يُعَبِّرُ عَنْ ______ .' },
      { route: 'develop', ar: 'زُرْتُ ______ ، وَأَثَّرَ فِيَّ ______ .' },
      { route: 'stretch', ar: 'أَحْيَانًا أُفَضِّلُ ______ ، وَلٰكِنْ لَيْسَ دَائِمًا ؛ فَالذَّوْقُ ______ .' },
    ],
    modelEn: ['Which musical instrument do you like?', 'I like the oud because it expresses feelings clearly.'],
    notes: 'Website prompts and model, with the first prompt widened to “which art” so every student can answer (calligraphy, nasheed, drawing). To a girl: يُعْجِبُكِ · زُرْتِهِ · رَأَيْتِ · تُفَضِّلِينَ.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Name arts and instruments with accurate agreement + one “I like … because …”.' },
    develop: { amount: '60–80 words', how: 'A cultural visit with عَبَّرَ عَنْ and أَثَّرَ فِي.' },
    stretch: { amount: '≈ 80 words', how: 'Website task: express · influence · inspire + one hedged statement about taste.' },
  },
  frames: {
    core: [
      { en: 'I like … because …', ar: 'يُعْجِبُنِي ______ لِأَنَّ ______ .' },
      { en: 'Last month I visited an exhibition of …', ar: 'فِي الشَّهْرِ المَاضِي زُرْتُ مَعْرِضًا لِـ ______ .' },
      { en: 'The (female) artist drew …', ar: 'رَسَمَتِ الفَنَّانَةُ ______ .' },
      { en: 'The … was beautiful.', ar: 'كَانَ ______ جَمِيلًا.' },
    ],
    develop: [
      { en: 'It expressed …', ar: 'عَبَّرَ / عَبَّرَتْ عَنْ ______ .' },
      { en: 'It influenced …', ar: 'أَثَّرَ / أَثَّرَتْ فِي ______ .' },
      { en: '… truly inspired me.', ar: 'أَلْهَمَنِي / أَلْهَمَتْنِي ______ حَقًّا.' },
      { en: 'In some countries …', ar: 'فِي بَعْضِ البُلْدَانِ ______ .' },
    ],
    bank: ['العُودُ', 'النَّايُ', 'الدُّفُّ', 'النَّشِيدُ', 'الخَطُّ العَرَبِيُّ', 'الزَّخْرَفَةُ', 'مَعْرِضٌ', 'يُعَبِّرُ عَنْ', 'يُؤَثِّرُ فِي', 'يُلْهِمُ', 'أَحْيَانًا', 'لَيْسَ دَائِمًا'],
  },
  stretch: [
    ['عَبَّرَتْ عَنْ مَشَاعِرَ عَمِيقَةٍ', 'it expressed deep feelings'],
    ['أَثَّرَتْ فِي الجُمْهُورِ كَثِيرًا', 'it greatly affected the audience'],
    ['تَحْتَاجُ إِلَى صَبْرٍ وَدِقَّةٍ', 'it needs patience and precision'],
    ['فَالذَّوْقُ شَخْصِيٌّ', 'because taste is personal'],
    ['الأَذْوَاقُ تَخْتَلِفُ مِنْ أُسْرَةٍ إِلَى أُسْرَةٍ', 'tastes differ from family to family'],
  ],
  modelEn: 'Last month I attended a concert in the theatre. The ensemble was small, and it played the oud and the nay. The music expressed deep feelings and greatly affected the audience. After the concert I visited an exhibition of Arabic calligraphy, and the arabesque truly inspired me. In some countries children learn these instruments early, and sometimes young people prefer modern music — but not always; taste is personal.',
  find: ['عَبَّرَ عَنْ', 'أَثَّرَ فِي', 'أَلْهَمَ + object', 'a hedged statement'],
  modelNotes: 'Website writing model. Evidence: عَبَّرَتِ المُوسِيقَى عَنْ … · أَثَّرَتْ فِي الجُمْهُورِ · أَلْهَمَتْنِي الزَّخْرَفَةُ · فِي بَعْضِ البُلْدَانِ · أَحْيَانًا · لَيْسَ دَائِمًا. Students who prefer: replace the concert with a calligraphy workshop or a nasheed evening — the grammar is identical.',
  selfCheck: [
    { route: 'core', text: 'My adjectives agree (حَفْلَةٌ مُوسِيقِيَّةٌ).' },
    { route: 'core', text: 'I said what I like and why.' },
    { route: 'develop', text: 'I used عَنْ after يُعَبِّرُ and فِي after يُؤَثِّرُ.' },
    { route: 'develop', text: 'I described a past visit with past verbs.' },
    { route: 'stretch', text: 'I used أَلْهَمَ + object and a fair, hedged statement.' },
  ],
  exit: [0, 1, 3],
  glossary: [
    ['تَارِيخٍ طَوِيلٍ', 'a long history'], ['مَشَاعِرَ إِنْسَانِيَّةٍ', 'human feelings'], ['مُشْتَرَكَةٍ', 'shared'], ['خَارِجَ', 'outside'], ['ظَهَرَ', 'appeared'],
    ['فَنٌّ بَصَرِيٌّ', 'a visual art'], ['صَبْرٍ وَدِقَّةٍ', 'patience and precision'], ['تُدَرَّسُ', 'are taught'], ['مَرَاكِزَ ثَقَافِيَّةٍ', 'cultural centres'], ['الذَّوْقُ شَخْصِيٌّ', 'taste is personal'],
  ],
  prep: {
    words: [['سَافَرَ إِلَى', 'he travelled to', 'سَافَرْتُ I travelled'], ['زَارَ', 'he visited', 'زُرْتُ I visited'], ['المَطَارُ', 'the airport', '—'], ['الفُنْدُقُ', 'the hotel', 'pl. الفَنَادِقُ'], ['رِحْلَةٌ', 'a trip', 'pl. رِحْلَاتٌ']],
    questionEn: 'Where did you go on your last holiday or trip? Where would you like to go next?',
    questionAr: 'سَافَرْتُ إِلَى … وَسَأُسَافِرُ إِلَى …',
    homework: {
      core: 'Learn 12 arts words; write five sentences from the frames.',
      develop: 'A 60–80-word cultural visit with عَبَّرَ عَنْ and أَثَّرَ فِي.',
      stretch: 'Website writing task: ≈ 80 words with a hedged statement about taste.',
    },
    wordsSource: 'The five words come from the website D5-L07 vocabulary (holidays and travel).',
  },
  remember: 'Remember: يُعَبِّرُ عَنْ · يُؤَثِّرُ فِي · يُلْهِمُ + object — and describe culture fairly: some, sometimes, not always.',
});

module.exports = { meta, slides };
