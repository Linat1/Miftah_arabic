'use strict';
/* D5-L01 · Hobbies and Free Time — Vocabulary and Present Habits — website: Pathways › Development › D5 › D5-L01 (collocations يَلْعَبُ / يُمَارِسُ / يَعْزِفُ عَلَى /
 * يَسْتَمِعُ إِلَى, frequency مَرَّةً / مَرَّتَيْنِ / ثَلَاثَ مَرَّاتٍ, preference أُفَضِّلُ … عَلَى · أَسْتَمْتِعُ بِـ … أَكْثَرَ مِنْ · أَهْوَى … حَقًّا).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing and visual game used as published; three quiz
 * distractors replaced (they differed only in vowel endings) and English added to the model sentences. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D5')({
  n: 1, fileTitle: 'Hobbies_and_Free_Time', chip: 'Vocabulary',
  title: 'Hobbies and Free Time — Vocabulary and Present Habits', arabic: 'الهِوَايَاتُ وَوَقْتُ الفَرَاغِ',
  focus: 'Name hobbies with the RIGHT verb (يَلْعَبُ · يُمَارِسُ · يَعْزِفُ عَلَى · يَسْتَمِعُ إِلَى), say how often (مَرَّةً · مَرَّتَيْنِ · ثَلَاثَ مَرَّاتٍ) and say what you prefer and why.',
  icon: 'FaPalette', iconSet: 'fa6',
});

const site = D.site('D5-L01');
const swap = { 1: 'أَعْزِفُ عَلَى السِّبَاحَةِ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ.', 5: 'أُفَضِّلُ الرَّسْمَ إِلَى التَّصْوِيرِ.', 6: 'أَسْتَمْتِعُ عَلَى القِرَاءَةِ أَكْثَرَ مِنَ الغِنَاءِ.' };
const quiz = site.grammar.quiz.map((it, i) => (swap[i] ? { ...it, options: [it.options[0], it.options[1], swap[i]] } : it));
const vf = (i, she) => ({ tag: 'I · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D5-L01', {
  support: `• NEW UNIT (D5 · Hobbies, Sport and Leisure). Core: 12 hobbies with their verb + one frequency phrase (أَلْعَبُ كُرَةَ القَدَمِ مَرَّةً فِي الأُسْبُوعِ). Develop: all four verb families + the dual مَرَّتَيْنِ + أُفَضِّلُ … عَلَى. Stretch: all three preference structures, a reason with لِأَنَّ and a contrast (أَمَّا … فَـ).
• The key idea: learn the WHOLE collocation (verb + preposition + noun), never the verb alone — English “play” is three different Arabic verbs.
• Grammar links: the dual (F3), numbers 3–10 + genitive plural (F2 / F4), لِأَنَّ + pronoun (D1).`,
  teach: 'Four verb families, frequency and three ways to prefer.',
  wedo: 'Sort hobbies by verb, fix collocation slips, then three students’ free time.',
  next: { nextCode: 'D5-L02', nextTitle: 'Sport — Vocabulary, Famous Athletes and Cultural Context', nextAr: 'الرِّيَاضَةُ وَالرِّيَاضِيُّونَ المَشْهُورُونَ' },
  objectives: ['Name at least 18 hobbies with the correct verb collocation.', 'Say how often with مَرَّةً / مَرَّتَيْنِ / ثَلَاثَ مَرَّاتٍ + a period.', 'Express preference with أُفَضِّلُ … عَلَى · أَسْتَمْتِعُ بِـ · أَهْوَى … حَقًّا.', 'Give a reason with لِأَنَّ where the pronoun matches its noun.'],
  rulesAr: 'التَّلَازُمُ اللَّفْظِيُّ وَالتَّكْرَارُ وَالتَّفْضِيلُ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does هِوَايَةٌ mean?', ['a hobby', 'free time', 'a sport'], 'Prepared at home (D4-L12).'),
      q('What does مَرَّتَيْنِ فِي الأُسْبُوعِ mean?', ['twice a week', 'once a week', 'every day'], 'Prepared at home (D4-L12).'),
      q('What does يَعْزِفُ عَلَى mean?', ['he plays (an instrument)', 'he practises sport', 'he listens to'], 'Prepared at home (D4-L12).'),
      q('Choose the dual of يَوْمٌ.', ['يَوْمَانِ', 'أَيَّامٌ', 'يَوْمِيٌّ'], 'F3: the dual.'),
      q('Complete: ثَلَاثَةُ ___', ['أَيَّامٍ', 'يَوْمٌ', 'يَوْمَانِ'], 'Numbers 3–10 + genitive plural.'),
    ],
    keyIdea: { text: 'English “play” is THREE Arabic verbs: learn the verb, its preposition and its noun as one unit.', ar: '{k|أَلْعَبُ} كُرَةَ القَدَمِ · {w|أُمَارِسُ} السِّبَاحَةَ · {e|أَعْزِفُ عَلَى} العُودِ' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D4-L12. Questions 4–5 retrieve the dual and numbers 3–10 + plural, needed for frequency today.',
  },
  routes: {
    core: ['I can name 12 hobbies with the right verb.', 'I can say how often I do one.'],
    develop: ['I can use all four verb families and the dual.', 'I can say what I prefer with أُفَضِّلُ … عَلَى.'],
    stretch: ['I can use all three preference structures.', 'I can give a reason and a contrast.'],
  },
  bridge: [
    { ar: 'فَرَاغٌ', urdu: 'فراغت', tr: 'farāghat', en: 'leisure, free time' },
    { ar: 'رِيَاضَةٌ', urdu: 'ریاضت', tr: 'riyāzat', en: 'Urdu: discipline, practice · Arabic: sport' },
    { ar: 'مُوسِيقَى', urdu: 'موسیقی', tr: 'mausīqī', en: 'music' },
    { ar: 'شِطْرَنْجٌ', urdu: 'شطرنج', tr: 'shatranj', en: 'chess' },
    { ar: 'تَصْوِيرٌ', urdu: 'تصویر', tr: 'taṣvīr', en: 'Urdu: a picture · Arabic: photography' },
  ],
  bridgeNotes: 'URDU BRIDGE: موسیقی، شطرنج، فراغت are shared. CAREFUL: Urdu ریاضت = spiritual discipline / practice; Arabic رِيَاضَةٌ = sport (and also mathematics in رِيَاضِيَّاتٌ). Urdu تصویر = a picture; Arabic تَصْوِيرٌ = photography (a picture is صُورَةٌ).',
  core: ['هِوَايَةٌ / هِوَايَاتٌ', 'وَقْتُ الفَرَاغِ', 'يُمَارِسُ الرِّيَاضَةَ', 'يَلْعَبُ كُرَةَ القَدَمِ', 'السِّبَاحَةُ / يَسْبَحُ', 'الرَّسْمُ / يَرْسُمُ', 'يَعْزِفُ عَلَى العُودِ', 'القِرَاءَةُ / يَقْرَأُ', 'يَسْتَمِعُ إِلَى المُوسِيقَى', 'مَرَّةً فِي الأُسْبُوعِ', 'مَرَّتَيْنِ فِي الأُسْبُوعِ', 'أُفَضِّلُ … عَلَى …'],
  forms: {
    'يُمَارِسُ الرِّيَاضَةَ': vf('أُمَارِسُ', 'تُمَارِسُ'), 'يَلْعَبُ كُرَةَ القَدَمِ': vf('أَلْعَبُ', 'تَلْعَبُ'), 'يَعْزِفُ عَلَى العُودِ': vf('أَعْزِفُ', 'تَعْزِفُ'),
    'يَسْتَمِعُ إِلَى المُوسِيقَى': vf('أَسْتَمِعُ', 'تَسْتَمِعُ'), 'يَطْبُخُ': vf('أَطْبُخُ', 'تَطْبُخُ'), 'يَتَطَوَّعُ': vf('أَتَطَوَّعُ', 'تَتَطَوَّعُ'),
    'مُمْتِعٌ / مُمْتِعَةٌ': { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: 'مُمْتِعُونَ / مُمْتِعَاتٌ' }] },
  },
  vocabNotes: {
    0: 'Hobbies and activities. Cards show “he” on the front and I / she where it helps. Many hobbies are verbal nouns (السِّبَاحَةُ swimming · الرَّسْمُ drawing): learn the noun AND the verb.',
    1: 'How often: مَرَّةً (once) is accusative · مَرَّتَيْنِ (twice) is the dual · ثَلَاثَ مَرَّاتٍ (three times) — 3–10 + genitive plural.',
    2: 'Saying what you prefer: the thing you like LESS comes after عَلَى (أُفَضِّلُ الرَّسْمَ عَلَى التَّصْوِيرِ = I prefer drawing to photography).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · four verb families (website rules 1–3)', title: 'Which verb goes with which hobby?', ar: 'الفِعْلُ المُنَاسِبُ',
      cols: [{ label: 'Verb + preposition', w: 3.0, size: 22 }, { label: 'Example (website)', w: 6.6, size: 22 }, { label: 'Used for', w: 2.73 }],
      rows: [
        { core: true, cells: ['يَلْعَبُ', P('أَلْعَبُ كُرَةَ القَدَمِ · تَلْعَبُ الشِّطْرَنْجَ', 'I play football · she plays chess'), 'ball and board games'] },
        { core: true, cells: ['يُمَارِسُ', P('أُمَارِسُ السِّبَاحَةَ · تُمَارِسُ رِيَاضَةَ اليُوغَا', 'I practise swimming · she does yoga'), 'an activity, a sport'] },
        { core: true, cells: ['يَعْزِفُ عَلَى', P('أَعْزِفُ عَلَى العُودِ · تَعْزِفُ عَلَى البِيَانُو', 'I play the oud · she plays the piano'), 'an instrument'] },
        { core: true, cells: ['يَسْتَمِعُ إِلَى', P('أَسْتَمِعُ إِلَى المُوسِيقَى', 'I listen to music'), 'sound, music'] },
        { cells: ['يُشَاهِدُ', P('أُشَاهِدُ الأَفْلَامَ', 'I watch films'), 'films, matches'] },
      ],
      ltr: true,
      foot: 'After يَلْعَبُ / يُمَارِسُ the hobby ends in -a (كُرَةَ · السِّبَاحَةَ); after عَلَى / إِلَى it ends in -i (العُودِ · المُوسِيقَى).',
      notes: `GRAMMAR PART 1 — website rules “يَلْعَبُ with ball games”, “يُمَارِسُ with an activity noun” and “يَعْزِفُ عَلَى with an instrument” (the Cambridge list also records العَزْفُ بِـ — recognise both). Website teaching point: “Learn the whole collocation, not the single verb.”
Website mistakes: أَلْعَبُ السِّبَاحَةَ ✗ → أُمَارِسُ السِّبَاحَةَ · أَعْزِفُ البِيَانُو ✗ → أَعْزِفُ عَلَى البِيَانُو.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · frequency and preference (website rule 4 + vocabulary) · Develop / Stretch', title: 'How often? What do you prefer?', ar: 'التَّكْرَارُ وَالتَّفْضِيلُ',
      cards: [
        { chip: 'FREQUENCY · CORE', color: '1E6B52', head: 'مَرَّةً · مَرَّتَيْنِ · ثَلَاثَ مَرَّاتٍ', big: 'أَسْبَحُ مَرَّتَيْنِ فِي الأُسْبُوعِ.', en: 'I swim twice a week.', clue: 'Dual = twice.' },
        { chip: 'PREFER · DEVELOP', color: '1D5FBF', head: 'أُفَضِّلُ … عَلَى …', big: 'أُفَضِّلُ الرَّسْمَ عَلَى التَّصْوِيرِ.', en: 'I prefer drawing to photography.', clue: 'Less liked after ʿalā.' },
        { chip: 'ENJOY / LOVE · STRETCH', color: '6B4C9A', head: 'أَسْتَمْتِعُ بِـ · أَهْوَى … حَقًّا', big: 'أَهْوَى تَسَلُّقَ الجِبَالِ حَقًّا لِأَنَّهُ مُمْتِعٌ.', en: 'I truly love mountain climbing because it is fun.', clue: 'Reason + agreement.' },
      ],
      error: { text: 'Website mistake: 3–10 take a genitive plural.', pairs: [['ثَلَاثَ مَرَّاتٍ فِي الشَّهْرِ', 'ثَلَاثَ مَرَّةٍ فِي الشَّهْرِ']] },
      notes: `GRAMMAR PART 2 — website rule “Frequency after a number” (مَرَّةً is adverbial and accusative; مَرَّتَيْنِ is the dual; from three to ten the counted noun becomes a genitive plural) and the website preference structures (vocabulary group 3).
Agreement in card 3: تَسَلُّقٌ is masculine, so لِأَنَّهُ … مُمْتِعٌ; for السِّبَاحَةُ: لِأَنَّهَا مُمْتِعَةٌ (website quiz 8).`,
    },
  ],
  quick: [0, 2, 3, 4],
  rest: [1, 5, 6, 7],
  ido: {
    title: 'Watch me talk about my free time',
    steps: [
      { head: 'Hobby + verb', ar: '{k|أَعْزِفُ عَلَى} العُودِ', think: 'Instrument: ʿalā.' },
      { head: 'How often', ar: '{e|يَوْمِيًّا}', think: 'Every day.' },
      { head: 'Prefer', ar: '{w|أُفَضِّلُ} المُوسِيقَى {w|عَلَى} الرِّيَاضَةِ', think: 'Less liked after ʿalā.' },
      { head: 'Reason', ar: 'لِأَنَّهَا تُرِيحُنِي', think: 'Music is feminine: -hā.' },
    ],
    legend: ['k', 'e', 'w'], legendLabels: { k: 'COLLOCATION', e: 'FREQUENCY', w: 'PREFERENCE' },
    model: 'فِي وَقْتِ فَرَاغِي {k|أُمَارِسُ} السِّبَاحَةَ {e|مَرَّتَيْنِ فِي الأُسْبُوعِ}، وَ{k|أَلْعَبُ} كُرَةَ السَّلَّةِ {e|مَرَّةً فِي الأُسْبُوعِ}. وَ{k|أَعْزِفُ عَلَى} العُودِ {e|يَوْمِيًّا} لِأَنَّ المُوسِيقَى تُرِيحُنِي. {w|أُفَضِّلُ} الأَنْشِطَةَ الهَادِئَةَ {w|عَلَى} الأَلْعَابِ السَّرِيعَةِ.',
    modelEn: 'In my free time I go swimming twice a week, and I play basketball once a week. I play the oud every day because music relaxes me. I prefer quiet activities to fast games.',
    notes: 'I DO (3 min) — think aloud with the website writing model: “Ball game? Activity? Instrument? Which verb? Which ending?” Then the first half of the website model in the copy box.',
  },
  patternEn: ['he plays football', 'he plays the oud', 'twice a week'],
  game: {
    title: 'What is my hobby? Match the picture',
    pick: [0, 2, 4],
    en: ['I like reading in my free time.', 'I like drawing.', 'I like swimming.'],
    icons: [[['fa6', 'FaBookOpen', '1D5FBF']], [['fa6', 'FaPalette', 'C0386B'], ['fa6', 'FaPaintbrush', '6B4C9A']], [['fa6', 'FaPersonSwimming', '1E7B9F'], ['fa6', 'FaWater', '1D5FBF']]],
    labels: ['a book', 'paint and brush', 'a swimmer'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Then upgrade each sentence with a verb + frequency: أَقْرَأُ مَرَّةً فِي الأُسْبُوعِ · أَرْسُمُ يَوْمِيًّا · أُمَارِسُ السِّبَاحَةَ مَرَّتَيْنِ فِي الأُسْبُوعِ. Other website cards: أَلْعَبُ أَلْعَابَ الفِيدْيُو · أَسْتَمِعُ إِلَى المُوسِيقَى · أُحِبُّ المَشْيَ فِي الحَدِيقَةِ.',
  },
  sorterNotes: 'Then make one sentence for each column with a frequency: أَلْعَبُ الشِّطْرَنْجَ مَرَّةً فِي الأُسْبُوعِ.',
  patch: {
    grammar: { ...site.grammar, quiz },
    vocab: site.vocab.map((g) => ({ ...g, items: g.items.map((it) => (it.ar.startsWith('أَهْوَى') ? { ...it, note: 'The word ḥaqqan adds emphasis.' } : it)) })),
  },
  patchNote: 'three quiz distractors replaced (they differed only in vowel endings) and English added to the model sentences.',
  hints: ['Ball game or activity?', 'Which preposition after yaʿzifu?', '3–10: singular or plural?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 5.\nThree people: Salma · Yusuf · Layla.',
  listenRoutes: 'Core: questions 1, 3 and 5. Develop / Stretch: all 5 — then say one preference for each person.',
  gloss: [
    ['أَنَا سَلْمَى، وَأُمَارِسُ السِّبَاحَةَ مَرَّتَيْنِ فِي الأُسْبُوعِ', 'I am Salma, and I swim twice a week'],
    ['لِأَنَّهَا تُرِيحُنِي بَعْدَ الدِّرَاسَةِ. وَفِي وَقْتِ فَرَاغِي أَقْرَأُ الرِّوَايَاتِ.', 'because it relaxes me after studying. In my free time I read novels.'],
    ['أَمَّا أَخِي يُوسُفُ فَيَعْزِفُ عَلَى العُودِ يَوْمِيًّا،', 'As for my brother Yusuf, he plays the oud every day,'],
    ['وَيَقُولُ إِنَّهُ يُفَضِّلُ المُوسِيقَى عَلَى الرِّيَاضَةِ.', 'and he says he prefers music to sport.'],
    ['وَصَدِيقَتِي لَيْلَى تَلْعَبُ كُرَةَ السَّلَّةِ ثَلَاثَ مَرَّاتٍ فِي الشَّهْرِ فَقَطْ، لٰكِنَّهَا تَهْوَى التَّصْوِيرَ الفُوتُوغْرَافِيَّ حَقًّا.', 'My friend Layla plays basketball only three times a month, but she truly loves photography.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا هِوَايَتُكَ المُفَضَّلَةُ؟ وَكَمْ مَرَّةً تُمَارِسُهَا فِي الأُسْبُوعِ؟' },
      { route: 'develop', ar: 'هَلْ تُفَضِّلُ الرِّيَاضَةَ عَلَى المُوسِيقَى؟ لِمَاذَا؟' },
      { route: 'stretch', ar: 'مَاذَا تَفْعَلُ فِي وَقْتِ فَرَاغِكَ مَعَ أَصْدِقَائِكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'هِوَايَتِي المُفَضَّلَةُ ______ ، وَأُمَارِسُهَا ______ .' },
      { route: 'develop', ar: 'أُفَضِّلُ ______ عَلَى ______ لِأَنَّ ______ .' },
      { route: 'stretch', ar: 'مَعَ أَصْدِقَائِي ______ ، أَمَّا وَحْدِي فَـ ______ .' },
    ],
    modelEn: ['What is your favourite hobby?', 'I go swimming twice a week, and I enjoy it a lot.'],
    notes: 'Website prompts and model (a four-line exchange: question → activity + frequency → follow-up → preference + reason). Website task: “my hobby in thirty seconds”. To a girl: هِوَايَتُكِ · تُمَارِسِينَهَا · تُفَضِّلِينَ.',
  },
  write: {
    core: { amount: '6 sentences', how: 'Six hobbies, each with the right verb and one frequency phrase.' },
    develop: { amount: '8 sentences', how: 'A paragraph with four verb families, the dual and أُفَضِّلُ … عَلَى + لِأَنَّ.' },
    stretch: { amount: '8+ sentences', how: 'Website task: five verbs, four frequencies, all three preference structures and a reason.' },
  },
  frames: {
    core: [
      { en: 'In my free time I play … once a week.', ar: 'فِي وَقْتِ فَرَاغِي أَلْعَبُ ______ مَرَّةً فِي الأُسْبُوعِ.' },
      { en: 'I practise … twice a week.', ar: 'أُمَارِسُ ______ مَرَّتَيْنِ فِي الأُسْبُوعِ.' },
      { en: 'I play (instrument) … every day.', ar: 'أَعْزِفُ عَلَى ______ يَوْمِيًّا.' },
      { en: 'I listen to … in the evening.', ar: 'أَسْتَمِعُ إِلَى ______ فِي المَسَاءِ.' },
    ],
    develop: [
      { en: 'I prefer … to … because …', ar: 'أُفَضِّلُ ______ عَلَى ______ لِأَنَّ ______ .' },
      { en: 'I enjoy … more than …', ar: 'أَسْتَمْتِعُ بِـ ______ أَكْثَرَ مِنْ ______ .' },
      { en: 'I truly love …', ar: 'أَهْوَى ______ حَقًّا.' },
      { en: 'As for my favourite hobby, it is …', ar: 'أَمَّا هِوَايَتِي المُفَضَّلَةُ فَهِيَ ______ .' },
    ],
    bank: ['أَلْعَبُ', 'أُمَارِسُ', 'أَعْزِفُ عَلَى', 'أَسْتَمِعُ إِلَى', 'أُشَاهِدُ', 'مَرَّةً', 'مَرَّتَيْنِ', 'ثَلَاثَ مَرَّاتٍ', 'يَوْمِيًّا', 'نَادِرًا', 'أُفَضِّلُ … عَلَى', 'لِأَنَّ'],
  },
  stretch: [
    ['أُفَضِّلُ الأَنْشِطَةَ الهَادِئَةَ عَلَى الأَلْعَابِ السَّرِيعَةِ', 'I prefer quiet activities to fast games'],
    ['أَسْتَمْتِعُ بِالقِرَاءَةِ أَكْثَرَ مِنْ مُشَاهَدَةِ الأَفْلَامِ', 'I enjoy reading more than watching films'],
    ['أَهْوَاهُ حَقًّا لِأَنَّهُ يَجْعَلُنِي سَعِيدًا', 'I truly love it because it makes me happy'],
    ['تُرِيحُنِي بَعْدَ الدِّرَاسَةِ', 'it relaxes me after studying'],
    ['وَمَعَ ذٰلِكَ …', 'and yet …'],
  ],
  modelEn: 'In my free time I go swimming twice a week, and I play basketball once a week. I play the oud every day because music relaxes me. I prefer quiet activities to fast games, and I enjoy reading more than watching films. As for my favourite hobby, it is drawing, and I truly love it because it makes me happy.',
  find: ['three different collocation verbs', 'three frequency phrases', 'two preference structures', 'a reason with لِأَنَّ'],
  modelNotes: 'Website writing model. Evidence: أُمَارِسُ السِّبَاحَةَ · أَلْعَبُ كُرَةَ السَّلَّةِ · أَعْزِفُ عَلَى العُودِ · مَرَّتَيْنِ / مَرَّةً فِي الأُسْبُوعِ · يَوْمِيًّا · أُفَضِّلُ … عَلَى · أَسْتَمْتِعُ بِـ … أَكْثَرَ مِنْ · أَهْوَاهُ حَقًّا لِأَنَّهُ … (الرَّسْمُ is masculine).',
  selfCheck: [
    { route: 'core', text: 'Each hobby has the right verb.' },
    { route: 'core', text: 'I said how often (مَرَّةً / مَرَّتَيْنِ).' },
    { route: 'develop', text: 'I used عَلَى after أَعْزِفُ and إِلَى after أَسْتَمِعُ.' },
    { route: 'develop', text: 'I used أُفَضِّلُ … عَلَى with a reason.' },
    { route: 'stretch', text: 'I used all three preference structures.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['رِيَاضَةَ اليُوغَا', 'yoga'], ['أَرْكَبُ الدَّرَّاجَةَ', 'I ride a bike'], ['نِهَايَةِ الأُسْبُوعِ', 'the weekend'], ['الأَنْشِطَةَ الهَادِئَةَ', 'quiet activities'], ['الأَلْعَابِ السَّرِيعَةِ', 'fast games'],
    ['المُبَارَيَاتِ', 'matches'], ['أَحْيَانًا', 'sometimes'], ['نَتَنَاقَشُ', 'we discuss'], ['الغِنَاءُ', 'singing'], ['يَجْعَلُنِي سَعِيدَةً', 'makes me happy (f.)'],
  ],
  prep: {
    words: [['فَرِيقٌ', 'a team', 'pl. فِرَقٌ'], ['مُبَارَاةٌ', 'a match', 'pl. مُبَارَيَاتٌ'], ['بُطُولَةٌ', 'a championship', 'pl. بُطُولَاتٌ'], ['فَازَ بِـ', 'he won (a prize)', 'فَازَتْ she'], ['لَاعِبٌ / لَاعِبَةٌ', 'a player (m / f)', 'pl. لَاعِبُونَ']],
    questionEn: 'Which sport do you like to watch or play, and who is your favourite player?',
    questionAr: 'أُحِبُّ … وَلَاعِبِي المُفَضَّلُ …',
    homework: {
      core: 'Learn the 12 core hobbies with their verbs; write six sentences from the frames.',
      develop: 'An 8-sentence paragraph with four verb families and أُفَضِّلُ … عَلَى.',
      stretch: 'Website writing task: 8+ sentences, all three preference structures and a reason.',
    },
    wordsSource: 'The five words come from the website D5-L02 vocabulary (sport: matches and results).',
  },
  remember: 'Remember: learn the whole collocation — أَلْعَبُ · أُمَارِسُ · أَعْزِفُ عَلَى · أَسْتَمِعُ إِلَى — then add how often and what you prefer.',
});

module.exports = { meta, slides };
