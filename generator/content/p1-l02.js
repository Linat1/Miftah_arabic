'use strict';
/* P1-L02 · Physical Activity — website: Pathways › Progression › P1 › P1-L02 (two families of benefit verb: direct object يُقَوِّي · يُحَسِّنُ · يُنَشِّطُ
 * vs مِنْ يُقَلِّلُ · يَزِيدُ · يُخَفِّفُ; يُسَاعِدُ عَلَى + verbal noun; the hollow Form I زَادَ → زِدْتُ; past habit كُنْتُ أَتَمَرَّنُ vs present and future intention).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing, builder and visual game used as published.
 * The website visual-game card أَمَارِسُ السِّبَاحَةَ (should be أُمَارِسُ) is not used. English added to the patterns. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('P1')({
  n: 2, fileTitle: 'Physical_Activity_Sport_Exercise_Body', chip: 'Vocabulary',
  title: 'Physical Activity — Sport, Exercise and the Body', arabic: 'النَّشَاطُ البَدَنِيُّ',
  focus: 'State the benefits of exercise with the two verb families — a direct object (يُقَوِّي العَضَلَاتِ) or مِنْ (يُقَلِّلُ مِنَ التَّوَتُّرِ) — contrast past and present habits (كُنْتُ أَتَمَرَّنُ … أَمَّا الآنَ فَأَتَمَرَّنُ) and plan ahead (أَنْوِي أَنْ).',
  icon: 'FaPersonRunning', iconSet: 'fa6',
});

const ihs = (i, she) => ({ tag: 'I · he · she', forms: [{ l: 'she', ar: she }, { l: 'I', ar: i }] });
const sp = (sg) => ({ tag: 'sg · pl', forms: [{ l: 'sg.', ar: sg }] });

const slides = D.devLesson('P1-L02', {
  support: `• Core: 10 fitness words + benefit sentences with يُقَوِّي and يُقَلِّلُ مِنْ. Develop: sort every benefit verb into its family (direct object / مِنْ / عَلَى) and contrast a past and a present habit. Stretch: the website ~80–90-word personal fitness plan with a future intention and a caution about injury.
• Sensitivity: students have different abilities, health conditions and access to sport. Accept walking, stretching, helping at home or playing with siblings as “activity”; never compare bodies or weights.
• Grammar links: Form II verbs (D units) · كَانَ + present for a past habit (D5 / GM-NVS-03) · non-human plural agreement (P1-L01) · أَنْ + subjunctive (D units).`,
  teach: 'Two families of benefit verb, the hollow زِدْتُ, then and now.',
  wedo: 'Sort the verbs, build a benefit sentence, match the activity.',
  next: { nextCode: 'P1-L03', nextTitle: 'Mental Health and Wellbeing — Talking About Stress and Happiness', nextAr: 'الصِّحَّةُ النَّفْسِيَّةُ وَالعَافِيَةُ' },
  objectives: ['State a benefit using yuqawwī, yuḥassin, yuqallil min and yazīd min.', 'Distinguish the verbs that take a direct object from those that take min.', 'Narrate past exercise history and contrast it with present habits.', 'Write a personal fitness plan using modal and future structures.'],
  objNotes: 'Website objectives (Arabic verbs shown in transliteration on the slide so the line reads cleanly). The route statements turn them into this lesson’s concrete targets.',
  rulesAr: 'أَفْعَالُ الفَائِدَةِ وَمُتَعَلِّقَاتُهَا',
  doNow: {
    questions: [
      q('What does لِيَاقَةٌ بَدَنِيَّةٌ mean?', ['physical fitness', 'healthy food', 'a sports club'], 'Prepared at home (P1-L01).'),
      q('What does يَتَمَرَّنُ mean?', ['he exercises', 'he rests', 'he eats'], 'Prepared at home (P1-L01).'),
      q('What does بِانْتِظَامٍ mean?', ['regularly', 'quickly', 'rarely'], 'Prepared at home (P1-L01).'),
      q('Complete: يَحْتَوِي السَّمَكُ ___ بُرُوتِينٍ.', ['عَلَى', 'إِلَى', 'مِنْ'], 'P1-L01: content structures.'),
      q('Choose the accurate agreement: تَمَارِينُ ___', ['مُفِيدَةٌ', 'مُفِيدُونَ', 'مُفِيدٌ'], 'P1-L01: non-human plurals.'),
    ],
    keyIdea: { text: 'Before you write a benefit: does the verb take a direct object, or min?', ar: '{w|يُقَوِّي العَضَلَاتِ} · {e|يُقَلِّلُ مِنَ التَّوَتُّرِ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at the end of P1-L01. Questions 4–5 retrieve last lesson’s preposition rule (يَحْتَوِي عَلَى) and non-human plural agreement — both come back today.',
  },
  routes: {
    core: ['I can name 10 fitness words.', 'I can state two benefits of an activity.'],
    develop: ['I can sort benefit verbs into their families.', 'I can contrast what I used to do with what I do now.'],
    stretch: ['I can write a fitness plan with an intention (anwī an).', 'I can add a caution about injury.'],
  },
  bridge: [
    { ar: 'رِيَاضَةٌ', urdu: 'ریاضت', tr: 'riyāzat', en: 'Urdu: discipline, practice · Arabic: sport' },
    { ar: 'قُوَّةٌ', urdu: 'قوت', tr: 'quwwat', en: 'strength, power' },
    { ar: 'جِسْمٌ', urdu: 'جسم', tr: 'jism', en: 'body' },
    { ar: 'نَبْضٌ', urdu: 'نبض', tr: 'nabz', en: 'pulse' },
    { ar: 'بِاعْتِدَالٍ', urdu: 'اعتدال', tr: 'eʿtidāl', en: 'moderation' },
  ],
  bridgeNotes: 'URDU BRIDGE: جسم، قوت، نبض and اعتدال are shared. CAREFUL: Urdu ریاضت usually means spiritual discipline or practice (riyāzat of music); Arabic رِيَاضَةٌ is everyday sport.',
  core: ['لِيَاقَةٌ بَدَنِيَّةٌ', 'قُدْرَةُ التَّحَمُّلِ', 'مُرُونَةٌ', 'العَضَلَاتُ', 'الإِحْمَاءُ', 'الإِصَابَةُ', 'يَتَمَرَّنُ', 'الجَرْيُ', 'السِّبَاحَةُ', 'يُقَوِّي', 'يُحَسِّنُ', 'يُقَلِّلُ مِنْ'],
  forms: {
    'العَضَلَاتُ': sp('عَضَلَةٌ'), 'المَفَاصِلُ': sp('مَفْصِلٌ'), 'تَمَارِينُ المُقَاوَمَةِ': sp('تَمْرِينُ مُقَاوَمَةٍ'),
    'قُوَّةٌ عَضَلِيَّةٌ': { tag: 'f.', forms: [{ l: 'adj. m.', ar: 'عَضَلِيٌّ' }] },
    'يَتَمَرَّنُ': ihs('أَتَمَرَّنُ', 'تَتَمَرَّنُ'), 'يُمَارِسُ رِيَاضَةً': ihs('أُمَارِسُ', 'تُمَارِسُ'), 'يُقَوِّي': ihs('أُقَوِّي', 'تُقَوِّي'), 'يُحَسِّنُ': ihs('أُحَسِّنُ', 'تُحَسِّنُ'),
    'يُقَلِّلُ مِنْ': ihs('أُقَلِّلُ', 'تُقَلِّلُ'), 'يَزِيدُ مِنْ': { tag: 'past I · he', forms: [{ l: 'he did', ar: 'زَادَ' }, { l: 'I did', ar: 'زِدْتُ' }] },
    'يُسَاعِدُ عَلَى': ihs('أُسَاعِدُ', 'تُسَاعِدُ'), 'يُخَفِّفُ مِنْ': ihs('أُخَفِّفُ', 'تُخَفِّفُ'), 'يَحْمِي مِنْ': ihs('أَحْمِي', 'تَحْمِي'), 'يُنَشِّطُ': ihs('أُنَشِّطُ', 'تُنَشِّطُ'),
  },
  vocabNotes: {
    0: 'Fitness and the body. العَضَلَاتُ and المَفَاصِلُ are plurals of things → feminine singular adjective: عَضَلَاتٌ قَوِيَّةٌ · مَفَاصِلُ سَلِيمَةٌ. المَفَاصِلُ is a diptote.',
    1: 'Activities: most are verbal nouns (الجَرْيُ · السِّبَاحَةُ · الإِطَالَةُ), so they follow أُمَارِسُ as a direct object: أُمَارِسُ السِّبَاحَةَ.',
    2: 'Benefit verbs: sort as you learn — DIRECT OBJECT: يُقَوِّي · يُحَسِّنُ · يُنَشِّطُ · يَحْمِي (the joints) | مِنْ: يُقَلِّلُ · يَزِيدُ · يُخَفِّفُ | عَلَى: يُسَاعِدُ. With a feminine subject (الرِّيَاضَةُ) every verb starts with tu- / ta-.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · two families of benefit verb (website rules 1–2) · Core / Develop', title: 'Direct object — or min?', ar: 'مَفْعُولٌ بِهِ أَمْ «مِنْ»؟',
      cols: [{ label: 'Meaning', w: 2.3 }, { label: 'Verb', w: 2.2, size: 24 }, { label: 'Example', w: 5.9, size: 22 }, { label: 'Family', w: 1.93 }],
      rows: [
        { core: true, cells: ['strengthens', '{w|يُقَوِّي}', 'يُقَوِّي التَّمْرِينُ {w|العَضَلَاتِ}.', 'direct object'] },
        { core: true, cells: ['improves', '{w|تُحَسِّنُ}', 'تُحَسِّنُ الرِّيَاضَةُ {w|الحَالَةَ} المِزَاجِيَّةَ.', 'direct object'] },
        { cells: ['energises', '{w|يُنَشِّطُ}', 'يُنَشِّطُ الجَرْيُ {w|الجِسْمَ}.', 'direct object'] },
        { core: true, cells: ['reduces', '{e|يُقَلِّلُ مِنْ}', 'يُقَلِّلُ المَشْيُ {e|مِنْ} خَطَرِ أَمْرَاضِ القَلْبِ.', 'min + gen.'] },
        { cells: ['increases', '{e|يَزِيدُ مِنْ}', 'يَزِيدُ التَّمْرِينُ {e|مِنْ} قُدْرَةِ التَّحَمُّلِ.', 'min + gen.'] },
        { cells: ['eases', '{e|يُخَفِّفُ مِنْ}', 'يُخَفِّفُ التَّمْرِينُ {e|مِنَ} التَّوَتُّرِ.', 'min + gen.'] },
      ],
      ltr: true,
      foot: 'Raising or lowering an amount (reduce, increase, ease) → min. Making something better or stronger → a direct object, no preposition.',
      notes: `GRAMMAR PART 1 — website rules “Direct-object benefit verbs” and “Benefit verbs with مِنْ”. Website teaching point: “Sorting them into these two groups is the whole grammar of this lesson.”
Ask before every sentence: “Am I changing the AMOUNT of something? → min.” Then: the direct object is ACCUSATIVE (العَضَلَاتِ with -i because it is a sound feminine plural; الجِسْمَ, الحَالَةَ with -a); after min it is GENITIVE.
Note مِنَ before al-: يُخَفِّفُ مِنَ التَّوَتُّرِ.
Website mistakes: يُقَوِّي التَّمْرِينُ مِنَ العَضَلَاتِ ✗ · يُقَلِّلُ المَشْيُ خَطَرَ الأَمْرَاضِ ✗.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · helps to, protects, and agreement (website rule 3) · Develop', title: 'The third family: ʿalā', ar: 'يُسَاعِدُ عَلَى',
      cards: [
        { chip: 'HELPS TO · DEVELOP', color: '1E6B52', head: 'يُسَاعِدُ عَلَى', big: 'يُسَاعِدُ الإِحْمَاءُ عَلَى تَجَنُّبِ الإِصَابَةِ.', en: 'Warming up helps to avoid injury.', clue: 'ʿalā + verbal noun.' },
        { chip: 'SHE-VERB · CORE', color: 'C0386B', head: 'الرِّيَاضَةُ · التَّمَارِينُ', big: 'تَمَارِينُ الإِطَالَةِ تُحَسِّنُ المُرُونَةَ.', en: 'Stretching exercises improve flexibility.', clue: 'Things → tu-.' },
        { chip: 'PROTECTS · STRETCH', color: '6B4C9A', head: 'تَحْمِي', big: 'تَحْمِي الإِطَالَةُ المَفَاصِلَ.', en: 'Stretching protects the joints.', clue: 'Direct object.' },
      ],
      error: { text: 'Website table: helps takes ʿalā, never min or bi-.', pairs: [['يُسَاعِدُ عَلَى النَّوْمِ', 'يُسَاعِدُ مِنَ النَّوْمِ']] },
      notes: `GRAMMAR PART 2 — website rule “يُسَاعِدُ عَلَى” (Form III with a fixed preposition, followed by a verbal noun). Verbal nouns for today: تَجَنُّبٌ (avoiding) · النَّوْمُ (sleep) · اسْتِعَادَةُ النَّشَاطِ (regaining energy).
Card 2 links back to P1-L01: الرِّيَاضَةُ is feminine, and a plural of things (التَّمَارِينُ) is treated as “she” — so the verb is تُحَسِّنُ / تُقَوِّي, not يُحَسِّنُونَ.
Card 3: website mission — تَحْمِي الإِطَالَةُ المَفَاصِلَ (direct object). With the meaning “protects FROM” it takes مِنْ: يَحْمِي مِنَ الإِصَابَةِ.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 3 · the hollow verb zāda (website teaching point) · Develop', title: 'zāda → zidtu', ar: 'زَادَ · زِدْتُ',
      cols: [{ label: 'Person', w: 2.2 }, { label: 'Past', w: 2.6, size: 26 }, { label: 'Present', w: 2.6, size: 26 }, { label: 'Example', w: 4.93, size: 20 }],
      rows: [
        { core: true, cells: ['I', '{e|زِدْتُ}', 'أَزِيدُ', 'زِدْتُ مِنْ نَشَاطِي.'] },
        { cells: ['you (m.) · you (f.)', '{e|زِدْتَ} · {e|زِدْتِ}', 'تَزِيدُ · تَزِيدِينَ', 'هَلْ زِدْتِ مِنْ تَمَارِينِكِ؟'] },
        { core: true, cells: ['he · she', '{w|زَادَ} · {w|زَادَتْ}', 'يَزِيدُ · تَزِيدُ', 'زَادَتْ قُدْرَتُهَا عَلَى التَّحَمُّلِ.'] },
        { cells: ['we', '{e|زِدْنَا}', 'نَزِيدُ', 'زِدْنَا وَقْتَ المَشْيِ.'] },
        { cells: ['they (m.)', '{w|زَادُوا}', 'يَزِيدُونَ', 'زَادُوا مِنَ الإِحْمَاءِ.'] },
      ],
      ltr: true,
      foot: 'Long ā stays before a vowel ending (zāda, zādat, zādū); it shortens to i before -tu, -ta, -ti, -nā (zidtu).',
      notes: `GRAMMAR PART 3 — website teaching point “يَزِيدُ is Form I, not Form II”: zāda / yazīd is a HOLLOW verb (root z-y-d), so the past with a consonant suffix is زِدْتُ.
Website mistake: زَادْتُ مِنْ نَشَاطِي ✗ → زِدْتُ. Quiz distractors: زَادْتُ · زَيَدْتُ · زُدْتُ (the last is the pattern of قَالَ → قُلْتُ, which has a w root).
Quick drill: say “I increased / she increased / we increased” and students answer with the form.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 4 · then, now and next (website rule 4 + writing checklist) · Develop / Stretch', title: 'I used to · now · I intend to', ar: 'المَاضِي · الآنَ · المُسْتَقْبَلُ',
      cols: [{ label: 'Time', w: 2.3 }, { label: 'I · we', w: 3.6, size: 22 }, { label: 'He · She · They', w: 4.6, size: 20 }, { label: 'Pattern', w: 1.83 }],
      rows: [
        { core: true, cells: ['used to (habit)', '{m|كُنْتُ} أَتَمَرَّنُ', '{m|كَانَ} يَتَمَرَّنُ · {m|كَانَتْ} تَتَمَرَّنُ', 'kāna + present'] },
        { core: true, cells: ['now (habit)', '{k|أَمَّا الآنَ} فَأَتَمَرَّنُ', 'يَتَمَرَّنُ · تَتَمَرَّنُ', 'ammā … fa-'] },
        { cells: ['will', '{w|سَأُحَاوِلُ}', 'سَيُحَاوِلُ · سَتُحَاوِلُ', 'sa- + present'] },
        { cells: ['intend to', '{w|أَنْوِي أَنْ} أُضِيفَ', 'يَنْوِي أَنْ يُضِيفَ · تَنْوِي أَنْ تُضِيفَ', 'an + -a'] },
        { cells: ['used to (plural)', '{m|كُنَّا} نَتَمَرَّنُ', '{m|كَانُوا} يَتَمَرَّنُونَ', 'we · they'] },
      ],
      ltr: true,
      foot: 'Website model: kuntu atamarranu marratan … ammā al-āna fa-atamarranu thalātha marrātin.',
      notes: `GRAMMAR PART 4 — website rule “Past habit against present habit” (كُنْتُ أَتَمَرَّنُ describes what you used to do; أَتَمَرَّنُ what you do now) and the writing checklist (one future intention with سَـ or أَنْوِي أَنْ + a subjunctive verb).
Website quiz distractor: كُنْتُ تَمَرَّنْتُ ✗ — kāna + PAST is a different tense (had done), not a habit.
Frequency phrases: مَرَّةً فِي الأُسْبُوعِ · مَرَّتَيْنِ · ثَلَاثَ مَرَّاتٍ · يَوْمِيًّا · أُسْبُوعِيًّا (GM-NUM link).
After أَنْ the verb takes fatḥa: أُضِيفَ · أُمَارِسَ · أَسْتَمِرَّ.`,
    },
  ],
  quick: [0, 1, 4, 5],
  rest: [2, 3, 6, 7],
  ido: {
    title: 'Watch me build a fitness story',
    steps: [
      { head: 'Then', ar: '{m|كُنْتُ} أَتَمَرَّنُ مَرَّةً', think: 'kāna + present.' },
      { head: 'Now', ar: 'أَمَّا الآنَ فَأُمَارِسُ المَشْيَ', think: 'ammā … fa-.' },
      { head: 'Benefit', ar: '{w|يُقَوِّي} عَضَلَاتِي {e|وَيُقَلِّلُ مِنَ} التَّوَتُّرِ', think: 'Two families.' },
      { head: 'Next', ar: '{k|أَنْوِي أَنْ} أُضِيفَ السِّبَاحَةَ', think: 'an + -a.' },
    ],
    legend: ['m', 'w', 'e', 'k'], legendLabels: { m: 'USED TO', w: 'DIRECT OBJECT', e: 'MIN', k: 'INTENTION' },
    model: 'فِي المَاضِي {m|كُنْتُ} أَتَمَرَّنُ مَرَّةً وَاحِدَةً فِي الأُسْبُوعِ فَقَطْ. أَمَّا الآنَ فَأُمَارِسُ المَشْيَ السَّرِيعَ ثَلَاثَ مَرَّاتٍ. {w|يُقَوِّي} هٰذَا البَرْنَامَجُ عَضَلَاتِي {w|وَيُحَسِّنُ} نَوْمِي، {e|وَيُقَلِّلُ مِنَ} التَّوَتُّرِ. {k|وَأَنْوِي أَنْ} أُضِيفَ رُكُوبَ الدَّرَّاجَةِ.',
    modelEn: 'In the past I used to exercise only once a week. Now, however, I do brisk walking three times. This programme strengthens my muscles and improves my sleep, and it reduces stress. And I intend to add cycling.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud: “A past habit — kuntu + present. Now — ammā al-āna fa-. Strengthens: is it an amount? No → direct object. Reduces stress: an amount → min. Next: anwī an + fatḥa.”',
  },
  patternEn: ['exercise strengthens the muscles', 'it reduces the risk of heart disease', 'I used to exercise once a week'],
  game: {
    title: 'Which activity? Match the picture',
    pick: [0, 4, 5],
    en: ['I play football.', 'I ride a bicycle.', 'I run three times a week.'],
    icons: [[['fa6', 'FaFutbol', '1E6B52']], [['fa6', 'FaPersonBiking', '1D5FBF']], [['fa6', 'FaPersonRunning', 'C0386B'], ['fa6', 'FaCalendarWeek', 'C77700']]],
    labels: ['football', 'cycling', 'running every week'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Then add a benefit to each: أَلْعَبُ كُرَةَ القَدَمِ، وَهِيَ تُقَوِّي … · أَرْكَبُ الدَّرَّاجَةَ، وَهٰذَا يَزِيدُ مِنْ … Other website cards: basketball, tennis and a swimming card (not used: أَمَارِسُ should be أُمَارِسُ).',
  },
  wedoSlides: [
    {
      type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · build a benefit sentence (website builder)', title: 'Activity + benefit + condition', ar: 'اِبْنِ جُمْلَةً',
      cols: [{ label: '1 · Activity + direct object', w: 4.6, size: 20 }, { label: '2 · min / ʿalā', w: 4.0, size: 20 }, { label: '3 · Condition or advice', w: 3.73, size: 20 }],
      rows: [
        { core: true, cells: ['يُقَوِّي المَشْيُ السَّرِيعُ العَضَلَاتِ', 'وَيُقَلِّلُ مِنْ خَطَرِ أَمْرَاضِ القَلْبِ', 'شَرِيطَةَ أَنْ يَكُونَ مُنْتَظِمًا'] },
        { core: true, cells: ['تُحَسِّنُ الإِطَالَةُ المُرُونَةَ', 'وَيُخَفِّفُ مِنَ التَّوَتُّرِ', 'إِذَا مُورِسَ بِاعْتِدَالٍ'] },
        { cells: ['تَزِيدُ تَمَارِينُ المُقَاوَمَةِ مِنَ القُوَّةِ', 'وَيُسَاعِدُ عَلَى النَّوْمِ العَمِيقِ', 'وَيُنْصَحُ بِالبَدْءِ بِبُطْءٍ'] },
      ],
      foot: 'Website builder: take one box from each column; check that column 2 agrees with the activity in column 1.',
      notes: `WE DO (3 min) — the website sentence builder. Pairs build three sentences, one box per column.
Agreement check (the hidden challenge): column 2 is written for a MASCULINE subject (المَشْيُ). If the activity is الإِطَالَةُ or التَّمَارِينُ, the verb in column 2 becomes feminine: وَتُخَفِّفُ مِنَ التَّوَتُّرِ · وَتُسَاعِدُ عَلَى النَّوْمِ.
Core: read row 1 and translate. Develop: build two new combinations and fix the agreement. Stretch: write a fourth row with يَحْمِي and a new condition.
Translations: شَرِيطَةَ أَنْ يَكُونَ مُنْتَظِمًا = on condition that it is regular · إِذَا مُورِسَ بِاعْتِدَالٍ = if it is practised in moderation · يُنْصَحُ بِالبَدْءِ بِبُطْءٍ = it is advised to start slowly.`,
    },
  ],
  sorterTitle: 'Which family?',
  sorterNotes: 'Then say one benefit phrase for each verb: يُقَوِّي العَضَلَاتِ · يُقَلِّلُ مِنَ التَّوَتُّرِ · يُسَاعِدُ عَلَى النَّوْمِ · يُحَافِظُ عَلَى الصِّحَّةِ · يُشَجِّعُ عَلَى الحَرَكَةِ.',
  hints: ['yuqawwī: direct object or min?', 'yuqallil: direct object or min?', 'zāda + -tu: hollow!'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nListen for: then and now.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — and write down two direct-object verbs and two min verbs you hear.',
  gloss: [
    ['النَّشَاطُ البَدَنِيُّ المُنْتَظِمُ يُقَوِّي العَضَلَاتِ وَيُحَسِّنُ صِحَّةَ القَلْبِ.', 'Regular physical activity strengthens the muscles and improves heart health.'],
    ['وَالمَشْيُ السَّرِيعُ ثَلَاثِينَ دَقِيقَةً يَوْمِيًّا يُقَلِّلُ مِنْ خَطَرِ أَمْرَاضِ القَلْبِ، وَيَزِيدُ مِنْ قُدْرَةِ التَّحَمُّلِ.', 'Brisk walking for thirty minutes a day reduces the risk of heart disease and increases endurance.'],
    ['أَمَّا تَمَارِينُ الإِطَالَةِ فَتُحَسِّنُ المُرُونَةَ وَتَحْمِي المَفَاصِلَ. وَيُسَاعِدُ الإِحْمَاءُ عَلَى تَجَنُّبِ الإِصَابَةِ.', 'Stretching exercises improve flexibility and protect the joints. Warming up helps to avoid injury.'],
    ['فِي المَاضِي كُنْتُ أَتَمَرَّنُ مَرَّةً وَاحِدَةً فِي الأُسْبُوعِ، أَمَّا الآنَ فَأَتَمَرَّنُ ثَلَاثَ مَرَّاتٍ بِاعْتِدَالٍ.', 'In the past I used to exercise once a week; now I exercise three times, in moderation.'],
    ['وَيُنْصَحُ بِالبَدْءِ بِبُطْءٍ، لِأَنَّ الزِّيَادَةَ السَّرِيعَةَ تَزِيدُ مِنْ خَطَرِ الإِصَابَةِ.', 'It is advised to start slowly, because a rapid increase raises the risk of injury.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'أَيَّ نَشَاطٍ بَدَنِيٍّ تُمَارِسُ؟ وَكَمْ مَرَّةً فِي الأُسْبُوعِ؟' },
      { route: 'develop', ar: 'كَيْفَ كَانَ نَشَاطُكَ فِي المَاضِي؟ وَمَا الَّذِي تَغَيَّرَ؟' },
      { route: 'stretch', ar: 'مَا فَائِدَتُهُ؟ اِسْتَعْمِلْ يُقَوِّي وَيُقَلِّلُ مِنْ.' },
    ],
    stems: [
      { route: 'core', ar: 'أُمَارِسُ ______ ______ مَرَّاتٍ فِي الأُسْبُوعِ.' },
      { route: 'develop', ar: 'كُنْتُ ______ ، أَمَّا الآنَ فَأُمَارِسُ ______ .' },
      { route: 'stretch', ar: 'يُقَوِّي ______ ، وَيُقَلِّلُ مِنْ ______ .' },
    ],
    modelEn: ['Which physical activity do you do?', 'I do brisk walking three times a week.', 'And what was your activity like in the past?', 'I used to exercise only once, and now I feel the difference: walking strengthens my muscles and reduces stress.'],
    notes: 'Website prompts and model. Any activity counts (walking to the mosque, playing with siblings). Listen for the two verb families and kuntu + present. To a girl: تُمَارِسِينَ · نَشَاطُكِ · اِسْتَعْمِلِي.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Website Core: five benefit sentences — sort each verb into its family first.' },
    develop: { amount: '60–70 words', how: 'Website Develop: add a past habit (kuntu + present) and a present habit in contrast.' },
    stretch: { amount: '80–90 words', how: 'Website task: a personal fitness plan with a future intention and a caution about injury.' },
  },
  frames: {
    core: [
      { en: 'I do … times a week.', ar: 'أُمَارِسُ ______ ______ مَرَّاتٍ فِي الأُسْبُوعِ.' },
      { en: '… strengthens the muscles.', ar: 'يُقَوِّي ______ العَضَلَاتِ.' },
      { en: '… improves my sleep.', ar: 'يُحَسِّنُ ______ نَوْمِي.' },
      { en: '… reduces stress.', ar: 'يُقَلِّلُ ______ مِنَ التَّوَتُّرِ.' },
    ],
    develop: [
      { en: 'In the past I used to …', ar: 'فِي المَاضِي كُنْتُ ______ .' },
      { en: 'Now, however, I do …', ar: 'أَمَّا الآنَ فَأُمَارِسُ ______ .' },
      { en: 'Warming up helps to avoid injury.', ar: 'يُسَاعِدُ الإِحْمَاءُ عَلَى ______ الإِصَابَةِ.' },
      { en: 'Next month I intend to add …', ar: 'فِي الشَّهْرِ القَادِمِ أَنْوِي أَنْ أُضِيفَ ______ .' },
    ],
    bank: ['المَشْيُ السَّرِيعُ', 'الجَرْيُ', 'السِّبَاحَةُ', 'رُكُوبُ الدَّرَّاجَاتِ', 'الإِطَالَةُ', 'العَضَلَاتُ', 'المُرُونَةُ', 'قُدْرَةُ التَّحَمُّلِ', 'التَّوَتُّرُ', 'بِانْتِظَامٍ', 'بِاعْتِدَالٍ', 'مَرَّةً فِي الأُسْبُوعِ'],
  },
  stretch: [
    ['وَكُنْتُ أَشْعُرُ بِالتَّعَبِ بِسُرْعَةٍ', 'and I used to get tired quickly'],
    ['وَأُضِيفُ تَمَارِينَ إِطَالَةٍ قَصِيرَةً', 'and I add short stretching exercises'],
    ['وَلِذٰلِكَ أَبْدَأُ دَائِمًا بِبُطْءٍ', 'and so I always start slowly'],
    ['وَسَأُحَاوِلُ أَنْ أَسْتَمِرَّ بِاعْتِدَالٍ', 'and I will try to keep going in moderation'],
    ['شَرِيطَةَ أَنْ يَكُونَ مُنْتَظِمًا', 'on condition that it is regular'],
  ],
  modelEn: 'In the past I used to exercise only once a week, and I used to get tired quickly. Now, however, I do brisk walking three times a week and add short stretching exercises. This programme strengthens my muscles and improves my sleep, and it reduces stress after studying. Warming up helps to avoid injury, so I always start slowly. Next month I intend to add cycling once a week, and I will try to keep going in moderation.',
  find: ['a past habit (kuntu + present)', 'a direct-object benefit verb', 'a min benefit verb', 'a future intention (anwī an / sa-)'],
  modelNotes: 'Website writing model. Evidence: كُنْتُ أَتَمَرَّنُ · أَمَّا الآنَ فَأُمَارِسُ · يُقَوِّي … عَضَلَاتِي وَيُحَسِّنُ نَوْمِي · يُقَلِّلُ مِنَ التَّوَتُّرِ · يُسَاعِدُ الإِحْمَاءُ عَلَى تَجَنُّبِ الإِصَابَةِ · أَنْوِي أَنْ أُضِيفَ · سَأُحَاوِلُ أَنْ أَسْتَمِرَّ.',
  selfCheck: [
    { route: 'core', text: 'No preposition after yuqawwī / yuḥassin.' },
    { route: 'core', text: 'min after yuqallil / yazīd / yukhaffif.' },
    { route: 'develop', text: 'My past habit uses kuntu + a present verb.' },
    { route: 'develop', text: 'My feminine and plural subjects take a tu- verb.' },
    { route: 'stretch', text: 'I added an intention (anwī an + -a) and a caution.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['تَدْرِيبٍ قَاسٍ', 'harsh training'], ['لِيَسْتَفِيدَ', 'in order to benefit'], ['الحَرَكَةِ', 'movement'], ['المُعْتَدِلُ', 'moderate'], ['تُشِيرُ دِرَاسَاتٌ', 'studies indicate'],
    ['مُزْمِنَةٍ', 'chronic'], ['العِظَامَ', 'the bones'], ['أُسْبُوعِيًّا', 'weekly'], ['مُوَزَّعَةً', 'spread out'], ['شِدَّةَ', 'intensity'],
  ],
  prep: {
    words: [['الصِّحَّةُ النَّفْسِيَّةُ', 'mental health', '—'], ['التَّوَتُّرُ', 'stress', '—'], ['القَلَقُ', 'anxiety, worry', '—'], ['السَّعَادَةُ', 'happiness', '—'], ['يَتَعَامَلُ مَعَ', 'he copes with', 'تَتَعَامَلُ she']],
    questionEn: 'What do you do to feel calm when you are stressed?',
    questionAr: 'عِنْدَمَا أَشْعُرُ بِالتَّوَتُّرِ ______ .',
    homework: {
      core: 'Learn the 10 fitness words; write five benefit sentences.',
      develop: 'A 60–70-word paragraph contrasting your past and present activity.',
      stretch: 'Website writing task: an 80–90-word fitness plan with an intention and a caution.',
    },
    wordsSource: 'The five words come from the website P1-L03 vocabulary (mental health and coping).',
  },
  remember: 'Remember: make it stronger or better → direct object (yuqawwī al-ʿaḍalāt); change an amount → min (yuqallil min) — helps → ʿalā — and zāda becomes zidtu.',
});

module.exports = { meta, slides };
