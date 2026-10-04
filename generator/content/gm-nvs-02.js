'use strict';
/* GM-NVS-02 · Inna and Its Sisters — website: Mastery & Revision › Grammar › Non-Verbal Sentences › Lesson 2 (the core change: inna +
 * noun in -a + predicate still in -u; inna at the start vs anna after aʿtaqidu / aʿrifu and in li-anna; attached pronouns innanī …
 * innahum; the functional map: lākinna contrast, laʿalla hope, layta wish, kaʾanna resemblance; lākin vs lākinna; clinic). Quizzes are
 * the website’s (Entry, Inna / Anna, Final Mastery). Colour code: teal = particle, blue = noun of the particle (-a), orange =
 * predicate (-u). I-do, transformation drill, meaning sorter, reading, frames and the extended model are teacher-made on the website
 * content (the drill uses the website game items). */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__11-non-verbal-sentences__grammar-mastery-02-inna-sisters';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-NVS-02', fileTitle: 'Inna_Sisters', title: 'Inna and Its Sisters', arabic: 'إِنَّ وَأَخَوَاتُهَا',
  focus: 'Small words, big jobs: inna (indeed), anna (that), li-anna (because), lākinna (but), laʿalla (perhaps), layta (I wish), kaʾanna (as if). After each one, the topic takes -a and the predicate keeps -u: inna l-jawwa jamīlun.',
  icon: 'FaWandMagicSparkles',
});

const slides = G.gmLesson({
  code: 'GM-NVS-02', site: KEY,
  support: `• Core: inna for emphasis, aʿtaqidu anna for opinions, li-annahu / li-annahā for reasons — with the noun in -a and the predicate unchanged. Develop: lākinnahu / lākinnahā for contrast, laʿalla for hope, the attached pronouns innanī … innahum. Stretch: layta (wish) and kaʾanna (as if) with full case control.
• Website warning: do not move both endings — only the noun after the particle changes (-u → -a); the predicate stays -u (mujtahidun, not mujtahidan).
• Colour code: teal = particle, blue = its noun (-a), orange = predicate (-u). Builds on GM-NVS-01 (mubtadaʾ + khabar) and GM-CP-04/05 (linking words).`,
  teach: 'The -a change; inna or anna; pronouns; the meaning map.',
  wedo: 'Add the particle; sort by meaning; repair.',
  next: { nextCode: 'GM-NVS-03', nextTitle: 'Kāna and Its Sisters', nextAr: 'كَانَ وَأَخَوَاتُهَا' },
  doNow: {
    questions: [
      W(/Entry Check/, 0, { feedback: 'Noun -a (ad-darsa), predicate -u (mufīdun).' }),
      W(/Entry Check/, 1, { feedback: 'After aʿtaqidu: anna.' }),
      W(/Entry Check/, 2, { prompt: 'Choose “because it is useful”.', feedback: 'The predicate stays -un.' }),
      W(/Entry Check/, 4, { feedback: 'Layta = I wish.' }),
      W(/Entry Check/, 5, { feedback: 'Lākinna + hu = lākinnahu.' }),
    ],
    keyIdea: { text: 'Particle + noun in -a + predicate in -u. Learn each particle with its meaning and one frame.', ar: '{k|إِنَّ} {w|الْجَوَّ} {p|جَمِيلٌ}' },
    retrieves: 'The website Entry Check — GM-NVS-01 topic + predicate and GM-CP linking words (li-anna, lākin).',
  },
  objectives: ['Use inna for emphasis.', 'Use anna after “I think / I know”.', 'Give reasons and contrasts with pronouns.', 'Express hope, wish and “as if”.'],
  routes: {
    core: ['I write inna l-jawwa jamīlun.', 'I write aʿtaqidu anna … and li-annahu …'],
    develop: ['I use lākinnahā and laʿalla.', 'I use innanī, innahu, innahum.'],
    stretch: ['I use layta and kaʾanna.', 'I write a 100–120-word connected opinion.'],
  },
  terms: {
    items: [
      { ar: 'إِنَّ وَأَخَوَاتُهَا', en: 'inna and its sisters', note: 'إِنَّ · أَنَّ · لَكِنَّ' },
      { ar: 'اسْمُ إِنَّ', en: 'the noun of inna (-a)', note: 'إِنَّ الْجَوَّ' },
      { ar: 'خَبَرُ إِنَّ', en: 'the predicate of inna (-u)', note: 'جَمِيلٌ' },
      { ar: 'التَّوْكِيدُ', en: 'emphasis', note: 'إِنَّ' },
      { ar: 'الرَّجَاءُ · التَّمَنِّي', en: 'hope · wish', note: 'لَعَلَّ · لَيْتَ' },
      { ar: 'التَّشْبِيهُ', en: 'comparison (“as if”)', note: 'كَأَنَّ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · the core change after inna (website table)', title: 'Only the first word changes: -u becomes -a', ar: 'إِنَّ + اسْمُهَا الْمَنْصُوبُ + خَبَرُهَا الْمَرْفُوعُ', ltr: true,
      cols: [{ label: 'Before', w: 3.8, size: 24 }, { label: 'After inna', w: 4.4, size: 24 }, { label: 'Meaning', w: 4.13 }],
      rows: [
        { core: true, cells: ['الطَّالِبُ مُجْتَهِدٌ.', 'إِنَّ الطَّالِبَ مُجْتَهِدٌ.', 'Indeed, the student is hardworking.'] },
        { core: true, cells: ['الْمَدْرَسَةُ كَبِيرَةٌ.', 'إِنَّ الْمَدْرَسَةَ كَبِيرَةٌ.', 'Indeed, the school is large.'] },
        { cells: ['الطُّلَّابُ مُسْتَعِدُّونَ.', 'إِنَّ الطُّلَّابَ مُسْتَعِدُّونَ.', 'Indeed, the students are ready.'] },
        { core: true, cells: ['الْجَوُّ جَمِيلٌ.', 'إِنَّ الْجَوَّ جَمِيلٌ.', 'Indeed, the weather is beautiful.'] },
        { cells: ['اللُّغَةُ الْعَرَبِيَّةُ جَمِيلَةٌ.', 'إِنَّ اللُّغَةَ الْعَرَبِيَّةَ جَمِيلَةٌ.', 'Its adjective follows: -a too.'] },
      ],
      foot: 'Website warning: do not move both endings. The predicate does NOT become -a just because inna appears — inna ṭ-ṭāliba mujtahidun, never mujtahidan.',
      notes: 'PART 1 (3 min) — website “The core change after inna” (rows 4–5 teacher-added). Say column 1, then column 2: students clap on the changed ending.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · inna at the start, anna inside (website table)', title: 'Same grammar, different jobs', ar: 'إِنَّ أَمْ أَنَّ؟', ltr: true,
      cols: [{ label: 'Use', w: 2.6 }, { label: 'Frame', w: 2.9, size: 22 }, { label: 'Website model', w: 6.83, size: 22 }],
      rows: [
        { core: true, cells: ['opening emphasis', 'إِنَّ …', 'إِنَّ التَّعَلُّمَ مُهِمٌّ.'] },
        { core: true, cells: ['reported thought', 'أَعْتَقِدُ أَنَّ …', 'أَعْتَقِدُ أَنَّ التَّعَلُّمَ مُهِمٌّ.'] },
        { cells: ['knowledge', 'أَعْرِفُ أَنَّ …', 'أَعْرِفُ أَنَّ الطَّرِيقَ طَوِيلٌ.'] },
        { core: true, cells: ['reason', 'لِأَنَّ …', 'أَدْرُسُ لِأَنَّ الِامْتِحَانَ قَرِيبٌ.'] },
        { cells: ['news heard', 'سَمِعْتُ أَنَّ …', 'سَمِعْتُ أَنَّ الْمَتْحَفَ مُغْلَقٌ.'] },
      ],
      foot: 'Website practical distinction: START an emphatic statement with inna (kasra). After a verb such as aʿtaqidu, aʿrifu, samiʿtu — and inside li-anna — use anna (fatḥa).',
      notes: 'PART 2 (3 min) — website “inna at the start; anna inside a larger sentence” (row 5 teacher-added).',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · attached pronouns (website table) · Develop', title: 'The noun can be a pronoun ending', ar: 'إِنَّ مَعَ الضَّمَائِرِ', ltr: true,
      cols: [{ label: 'Person', w: 2.6 }, { label: 'Form', w: 3.4, size: 24 }, { label: 'Website model', w: 6.33, size: 24 }],
      rows: [
        { cells: ['I', 'إِنَّنِي · إِنِّي', 'إِنَّنِي مُسْتَعِدَّةٌ.'] },
        { cells: ['you (m. · f.)', 'إِنَّكَ · إِنَّكِ', 'إِنَّكِ مُجْتَهِدَةٌ.'] },
        { core: true, cells: ['he / it (m.)', 'إِنَّهُ', 'إِنَّهُ مُفِيدٌ.'] },
        { core: true, cells: ['she / it (f.)', 'إِنَّهَا', 'إِنَّهَا مُفِيدَةٌ.'] },
        { cells: ['we', 'إِنَّنَا', 'إِنَّنَا مُسْتَعِدُّونَ.'] },
        { cells: ['they', 'إِنَّهُمْ · إِنَّهُنَّ', 'إِنَّهُمْ نَاجِحُونَ.'] },
      ],
      foot: 'Website high-value frame: ufaḍḍilu l-qirāʾata li-annahā mufīdatun wa-mumtiʿatun — I prefer reading because it is useful and enjoyable. The same endings join anna, li-anna and lākinna.',
      notes: 'PART 3 (2 min) — website “Attached pronouns make fluent clauses”. Core: li-annahu / li-annahā only.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 4 · a functional map of the sisters (website table) · Develop / Stretch', title: 'Learn the job before the label', ar: 'مَعَانِي الْأَخَوَاتِ', ltr: true,
      cols: [{ label: 'Particle', w: 2.2, size: 26 }, { label: 'Job', w: 3.0 }, { label: 'Website model', w: 7.13, size: 22 }],
      rows: [
        { core: true, cells: ['لَكِنَّ', 'contrast: but', 'الطَّرِيقُ طَوِيلٌ، لَكِنَّهُ آمِنٌ.'] },
        { cells: ['لَعَلَّ', 'hope: perhaps', 'لَعَلَّ الطَّقْسَ جَمِيلٌ غَدًا.'] },
        { cells: ['لَيْتَ', 'wish: if only', 'لَيْتَ الْعُطْلَةَ أَطْوَلُ.'] },
        { cells: ['كَأَنَّ', 'as if / looks like', 'كَأَنَّ الْبَحْرَ مِرْآةٌ.'] },
      ],
      foot: 'Website: lākin (no shadda) simply links a new clause — lākin huwa mutʿabun. Lākinna follows the inna pattern and usually takes a pronoun — lākinnahu mutʿabun. Never lākinnuhu.',
      notes: 'PART 4 (3 min) — website “A functional map of the main sisters”. Gestures: lākinna = hand flip; laʿalla = crossed fingers; layta = sigh; kaʾanna = hands as a mirror.',
    },
  ],
  quick: [
    W(/أَنَّ Check/, 0, { prompt: 'Add inna: الْمَدْرَسَةُ كَبِيرَةٌ.', feedback: 'Noun -a, predicate -u.' }),
    W(/أَنَّ Check/, 1, { feedback: 'After aʿtaqidu: anna.' }),
    W(/أَنَّ Check/, 2, { prompt: 'Choose “but she is busy”.', feedback: 'Lākinnahā + mashghūlatun.' }),
    W(/أَنَّ Check/, 3, { prompt: 'Choose “It is as though the city is asleep.”', feedback: 'Kaʾanna + al-madīnata + nāʾimatun.' }),
  ],
  quickNote: 'website inna / anna check.',
  ido: {
    title: 'Watch me turn a fact into an opinion',
    steps: [
      { head: 'Fact', ar: 'التِّقْنِيَّةُ مُفِيدَةٌ', think: 'Topic + predicate.' },
      { head: 'Frame', ar: 'أَعْتَقِدُ أَنَّ', think: 'My opinion: anna.' },
      { head: 'Noun', ar: 'التِّقْنِيَّةَ', think: '-u becomes -a.' },
      { head: 'Predicate', ar: 'مُفِيدَةٌ', think: 'Stays -un.' },
    ],
    legend: ['k', 'w', 'p'], legendLabels: { k: 'PARTICLE', w: 'NOUN (-a)', p: 'PREDICATE' },
    model: '{k|أَعْتَقِدُ أَنَّ} {w|التَّعَلُّمَ} عَنْ بُعْدٍ {p|مُفِيدٌ}، {k|لَكِنَّهُ} {p|يَحْتَاجُ إِلَى تَنْظِيمٍ جَيِّدٍ}. {k|لَعَلَّ} {w|التِّقْنِيَّةَ} {p|تُسَاعِدُنَا أَكْثَرَ} فِي الْمُسْتَقْبَلِ، {k|لِأَنَّهَا} {p|تَتَطَوَّرُ بِسُرْعَةٍ}. {k|إِنَّ} {w|الْمُسْتَقْبَلَ} {p|مُشْرِقٌ}!',
    modelEn: 'I think that distance learning is useful, but it needs good organisation. Perhaps technology will help us more in the future, because it is developing quickly. Indeed, the future is bright!',
    notes: 'Website skills-workshop lines, extended. The predicate can be a whole verb clause (yaḥtāju …, tusāʿidunā …).',
  },
  models: [
    { ar: 'إِنَّ الطَّالِبَ مُجْتَهِدٌ.', en: 'Indeed, the student is hardworking.', tip: 'Emphasis.' },
    { ar: 'أَعْرِفُ أَنَّ الطَّرِيقَ طَوِيلٌ.', en: 'I know that the road is long.', tip: 'After a verb: anna.' },
    { ar: 'أُفَضِّلُ الْقِرَاءَةَ لِأَنَّهَا مُفِيدَةٌ.', en: 'I prefer reading because it is useful.', tip: 'li-anna + -hā.' },
    { ar: 'كَأَنَّ الْبَحْرَ مِرْآةٌ.', en: 'It is as though the sea is a mirror.', tip: 'Resemblance.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · add the particle (website game)', title: 'Change one ending — keep the other', ar: 'أَدْخِلِ الْحَرْفَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Sentence', w: 3.6, size: 22 }, { label: 'Add', w: 2.4, size: 22 }, { label: 'New sentence', w: 6.33, size: 22 }],
      rows: [
        { core: true, cells: ['الْمَدِينَةُ جَمِيلَةٌ.', 'إِنَّ', 'إِنَّ الْمَدِينَةَ جَمِيلَةٌ.'] },
        { core: true, cells: ['الْخُطَّةُ مُفِيدَةٌ.', 'أَعْتَقِدُ أَنَّ', 'أَعْتَقِدُ أَنَّ الْخُطَّةَ مُفِيدَةٌ.'] },
        { core: true, cells: ['هُوَ مُتْعَبٌ.', 'لِأَنَّ', 'لِأَنَّهُ مُتْعَبٌ'] },
        { cells: ['هِيَ مُنَظَّمَةٌ.', 'لَكِنَّ', 'لَكِنَّهَا مُنَظَّمَةٌ'] },
        { cells: ['الْحَافِلَةُ مُتَأَخِّرَةٌ.', 'لَعَلَّ', 'لَعَلَّ الْحَافِلَةَ مُتَأَخِّرَةٌ.'] },
        { cells: ['السَّمَاءُ لَوْحَةٌ.', 'كَأَنَّ', 'كَأَنَّ السَّمَاءَ لَوْحَةٌ.'] },
      ],
      foot: 'Huwa and hiya become endings: li-anna + huwa = li-annahu; lākinna + hiya = lākinnahā. The predicate never changes.',
      notes: 'WE DO (3 min) — website game items. Cover column 3; students say the new sentence, stressing the -a.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · what job does the particle do?', title: 'Contrast, hope, wish or “as if”?', ar: 'مَا مَعْنَى الْحَرْفِ؟',
      categories: ['Contrast', 'Hope', 'Wish', 'As if'],
      items: [['الطَّرِيقُ طَوِيلٌ، لَكِنَّهُ آمِنٌ.', 0], ['الْبَيْتُ صَغِيرٌ، لَكِنَّهُ جَمِيلٌ.', 0], ['لَعَلَّ الطَّقْسَ جَمِيلٌ غَدًا.', 1], ['لَعَلَّ الِامْتِحَانَ سَهْلٌ.', 1], ['لَيْتَ الْعُطْلَةَ أَطْوَلُ.', 2], ['لَيْتَ أَخِي هُنَا.', 2], ['كَأَنَّ الْبَحْرَ مِرْآةٌ.', 3], ['كَأَنَّ الْمَدِينَةَ نَائِمَةٌ.', 3]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website models and Final Mastery items. Ask for the English meaning of each card as it is sorted.',
    },
  ],
  mistakes: [
    { wrong: 'إِنَّ الطَّالِبُ مُجْتَهِدًا.', right: 'إِنَّ الطَّالِبَ مُجْتَهِدٌ.', why: 'Noun -a; predicate stays -u (website clinic).' },
    { wrong: 'أَعْتَقِدُ إِنَّ الْخُطَّةَ جَيِّدَةٌ.', right: 'أَعْتَقِدُ أَنَّ الْخُطَّةَ جَيِّدَةٌ.', why: 'After a reporting verb: anna (website clinic).' },
    { wrong: 'لِأَنَّهُ مُفِيدًا.', right: 'لِأَنَّهُ مُفِيدٌ.', why: 'The predicate stays -un (website clinic).' },
  ],
  hints: ['Which word takes -a?', 'After “I think”: inna or anna?', 'Does the predicate change?'],
  practice: [
    W(/Final Mastery/, 2, { feedback: 'Ism inna -a; khabar -u.' }),
    W(/Final Mastery/, 3, { feedback: 'Feminine pronoun -hā + laṭīfatun.' }),
    W(/Final Mastery/, 7, { feedback: 'They (people) → innahum … mustaʿiddūna.' }),
    W(/Final Mastery/, 8, { feedback: 'Lākinnahu + āminun.' }),
  ],
  practiceLabel: 'website Final Mastery check',
  read: {
    title: 'A trip to Istanbul', label: 'website skills workshop (teacher-written opinion)',
    text: 'أُحِبُّ السَّفَرَ كَثِيرًا، لِأَنَّهُ يُعَلِّمُنَا أَشْيَاءَ جَدِيدَةً. فِي الصَّيْفِ الْمَاضِي زُرْتُ مَدِينَةَ إِسْطَنْبُولَ مَعَ أُسْرَتِي. إِنَّ الْمَدِينَةَ رَائِعَةٌ! كَأَنَّ الْمَسَاجِدَ الْقَدِيمَةَ قُصُورٌ مِنَ الْقِصَصِ. أَعْتَقِدُ أَنَّ الطَّعَامَ هُنَاكَ لَذِيذٌ جِدًّا، لَكِنَّ الْأَسْعَارَ مُرْتَفِعَةٌ قَلِيلًا. لَيْتَ الْعُطْلَةَ أَطْوَلُ! لَعَلَّنَا نَرْجِعُ إِلَيْهَا فِي السَّنَةِ الْقَادِمَةِ، لِأَنَّ أُمِّي تُحِبُّهَا أَيْضًا.',
    glossary: [['يُعَلِّمُنَا', 'teaches us'], ['رَائِعَةٌ', 'wonderful'], ['قُصُورٌ', 'palaces'], ['الْأَسْعَارَ', 'the prices'], ['مُرْتَفِعَةٌ', 'high']],
    task: 'Website paper route: colour-code the noun (-a) and the predicate after three particles.',
    questions: [
      q('Why does the writer love travelling?', ['it teaches us new things', 'it is cheap', 'the food is good'], 'Li-annahu yuʿallimunā ashyāʾa jadīdatan.'),
      q('What are the old mosques compared to?', ['palaces from stories', 'mirrors', 'paintings'], 'Kaʾanna: “as if”.'),
      q('What is the problem in Istanbul?', ['the prices are a little high', 'the food is bad', 'it is far away'], 'Lākinna l-asʿāra murtafiʿatun.'),
      q('Which sentence is a wish?', ['لَيْتَ الْعُطْلَةَ أَطْوَلُ!', 'إِنَّ الْمَدِينَةَ رَائِعَةٌ!', 'لَعَلَّنَا نَرْجِعُ إِلَيْهَا'], 'Layta = I wish.'),
    ],
    qNote: 'Teacher-written opinion for the website skills workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: give an opinion with reasons', source: 'website skills workshop',
    prompts: [
      { route: 'core', ar: 'هَلْ تُحِبُّ مَدْرَسَتَكَ؟ لِمَاذَا؟' },
      { route: 'develop', ar: 'مَا رَأْيُكَ فِي التِّقْنِيَّةِ؟' },
      { route: 'stretch', ar: 'مَاذَا تَتَمَنَّى لِلْمُسْتَقْبَلِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'نَعَمْ، أُحِبُّهَا لِأَنَّهَا ______ .' },
      { route: 'develop', ar: 'أَعْتَقِدُ أَنَّ التِّقْنِيَّةَ ______ ، لَكِنَّهَا ______ .' },
      { route: 'stretch', ar: 'لَيْتَ ______ ، وَلَعَلَّ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَا رَأْيُكِ فِي السَّفَرِ؟', en: 'What do you think of travelling? (to a girl)' },
      { who: 'B', ar: 'أَعْتَقِدُ أَنَّ السَّفَرَ مُمْتِعٌ، لَكِنَّهُ مُتْعِبٌ أَحْيَانًا. لَيْتَ الطَّائِرَاتِ أَسْرَعُ!', en: 'I think that travelling is fun, but it is sometimes tiring. I wish planes were faster!' },
    ],
    notes: 'Website: move beyond separate basic sentences by showing emphasis, reason, reporting, contrast and attitude.',
  },
  write: {
    siteTask: 'Write 100–120 Arabic words about school, technology, travel or leisure.',
    core: { amount: '5 sentences', task: 'My school: what I think and why.', how: 'aʿtaqidu anna … · li-annahā …' },
    develop: { amount: '8 sentences', task: 'Add a contrast and a hope.', how: 'lākinnahu · laʿalla.' },
    stretch: { amount: '100–120 words', task: 'Website connected opinion with the full checklist.', how: 'Add layta or kaʾanna.' },
  },
  frames: {
    core: [
      { en: 'I think that the school is …', ar: 'أَعْتَقِدُ أَنَّ الْمَدْرَسَةَ ______ .' },
      { en: 'Indeed, Arabic is …', ar: 'إِنَّ الْعَرَبِيَّةَ ______ .' },
      { en: 'I like … because it (f.) is …', ar: 'أُحِبُّ ______ لِأَنَّهَا ______ .' },
      { en: 'I know that the road is …', ar: 'أَعْرِفُ أَنَّ الطَّرِيقَ ______ .' },
    ],
    develop: [
      { en: '…, but it (m.) is …', ar: '______ ، لَكِنَّهُ ______ .' },
      { en: 'Perhaps the exam is …', ar: 'لَعَلَّ الِامْتِحَانَ ______ .' },
      { en: 'I wish the holiday were …', ar: 'لَيْتَ الْعُطْلَةَ ______ .' },
      { en: 'It is as though the city is …', ar: 'كَأَنَّ الْمَدِينَةَ ______ .' },
    ],
    bank: ['إِنَّ', 'أَنَّ', 'لِأَنَّهُ', 'لِأَنَّهَا', 'لَكِنَّهُ', 'لَكِنَّهَا', 'لَعَلَّ', 'لَيْتَ', 'كَأَنَّ', 'مُفِيدٌ', 'مُمْتِعٌ', 'صَعْبٌ', 'سَهْلٌ'],
  },
  stretchTask: {
    task: 'Website connected opinion (100–120 words): school, technology, travel or leisure.',
    checklist: ['aʿtaqidu anna …', 'One inna statement.', 'li-anna or li-annahu / li-annahā.', 'One contrast with lākinna.', 'One hope or wish (laʿalla / layta).'],
    phrases: [['فِي رَأْيِي', 'in my opinion'], ['أَعْتَقِدُ أَنَّ', 'I think that'], ['أَعْرِفُ أَنَّ', 'I know that'], ['لِأَنَّهُ', 'because it / he'], ['لَكِنَّهُ', 'but it / he'], ['لَعَلَّ', 'perhaps']],
  },
  model: {
    text: 'إِنَّ التِّقْنِيَّةَ جُزْءٌ مُهِمٌّ مِنْ حَيَاتِنَا الْيَوْمَ. أَعْتَقِدُ أَنَّ الْحَاسُوبَ مُفِيدٌ جِدًّا لِلطُّلَّابِ، لِأَنَّهُ يُسَاعِدُهُمْ فِي الْبَحْثِ وَالْكِتَابَةِ. أَعْرِفُ أَنَّ الْهَاتِفَ مُمْتِعٌ أَيْضًا، لَكِنَّهُ يَأْخُذُ وَقْتًا طَوِيلًا. أَحْيَانًا أَجْلِسُ أَمَامَ الشَّاشَةِ سَاعَاتٍ، فَكَأَنَّ الْوَقْتَ طَائِرٌ! أُخْتِي الصَّغِيرَةُ تُحِبُّ الْأَلْعَابَ الْإِلِكْتُرُونِيَّةَ، وَلَكِنَّ أُمِّي تَقُولُ: إِنَّهَا مُضِرَّةٌ لِلْعُيُونِ. لَعَلَّ الْمَدَارِسَ تُعَلِّمُ الطُّلَّابَ كَيْفَ يَسْتَعْمِلُونَ التِّقْنِيَّةَ بِحِكْمَةٍ. لَيْتَ الْيَوْمَ أَطْوَلُ، فَعِنْدِي أَشْيَاءُ كَثِيرَةٌ أُرِيدُ أَنْ أَتَعَلَّمَهَا! فِي رَأْيِي، إِنَّ التَّوَازُنَ هُوَ الْحَلُّ.',
    en: 'Indeed, technology is an important part of our lives today. I think that the computer is very useful for students, because it helps them with research and writing. I know that the phone is fun too, but it takes a long time. Sometimes I sit in front of the screen for hours — it is as though time were a bird! My little sister loves video games, but my mother says: “They are harmful to the eyes.” Perhaps schools will teach students how to use technology wisely. I wish the day were longer, because I have many things I want to learn! In my opinion, balance is the solution.',
    find: ['inna statement', 'aʿtaqidu anna', 'lākinnahu', 'layta (wish)'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'After each particle, the noun ends in -a.' },
    { route: 'core', text: 'The predicate still ends in -u / -un.' },
    { route: 'develop', text: 'I used anna after aʿtaqidu / aʿrifu.' },
    { route: 'develop', text: 'My pronoun endings match: li-annahu (m.), li-annahā (f.).' },
    { route: 'stretch', text: 'I used layta or kaʾanna correctly.' },
  ],
  exit: [
    W(/Final Mastery/, 1, { prompt: 'Which follows aʿrifu in “I know that…”?', feedback: 'Anna links the content.' }),
    W(/Final Mastery/, 4, { prompt: 'Which means “perhaps the exam is easy”?', feedback: 'Laʿalla = hope / possibility.' }),
    W(/Final Mastery/, 5, { prompt: 'Which means “I wish the holiday were longer”?', feedback: 'Layta = wish.' }),
  ],
  mastery: false,
  prep: {
    words: [['كَانَ', 'was / were (he, it)', '—'], ['كَانَتْ', 'was (she, it f.)', '—'], ['كُنْتُ', 'I was', '—'], ['صَارَ', 'became', '—'], ['مَا زَالَ', 'is still', '—']],
    questionEn: 'Kāna puts a sentence in the past — and this time the PREDICATE changes to -an: kāna l-jawwu jamīlan. Which word changed?',
    questionAr: 'كَانَ الْجَوُّ ______ .',
    homework: {
      core: 'Write three inna sentences and three aʿtaqidu anna sentences.',
      develop: 'Write four reason / contrast sentences with li-annahu / li-annahā / lākinnahu / lākinnahā.',
      stretch: 'Website connected opinion (100–120 words).',
    },
    wordsSource: 'The five words prepare GM-NVS-03 (website: kāna and its sisters).',
  },
  remember: 'Remember: inna / anna / li-anna / lākinna / laʿalla / layta / kaʾanna + noun in -a + predicate in -u · inna starts a sentence; anna follows aʿtaqidu, aʿrifu, samiʿtu · pronouns attach: innahu, li-annahā, lākinnahum · lākin (no shadda) just links.',
});

module.exports = { meta, slides };
