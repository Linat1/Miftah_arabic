'use strict';
/* D5-L04 · Past Tense — Plural Forms and Irregular Verbs — website: Pathways › Development › D5 › D5-L04 (plural suffixes نَحْنُ ـنَا · أَنْتُمْ ـتُمْ · هُمْ ـُوا;
 * hollow verbs قَالَ → قُلْنَا · نَامَ → نِمْنَا; weak-final verbs مَشَى → مَشَيْنَا · رَأَى → رَأَيْنَا; هُمْ + weak-final مَشَوْا; group narrative language).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking and writing used as published; two quiz distractors replaced
 * (they differed only in vowels) and English added to the patterns and speaking model. The website visual game repeats D5-L03, so it is skipped. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D5')({
  n: 4, fileTitle: 'Past_Tense_Plural_and_Irregular', chip: 'Grammar',
  title: 'Past Tense — Plural Forms and Irregular Verbs', arabic: 'الفِعْلُ المَاضِي — الجَمْعُ وَالأَفْعَالُ الشَّاذَّةُ',
  focus: 'Tell a group story: we / you all / they did (لَعِبْنَا · لَعِبْتُمْ · لَعِبُوا) — and fix the stem of irregular verbs first (قَالَ → قُلْنَا · مَشَى → مَشَيْنَا) before adding the ending.',
  icon: 'FaPeopleGroup', iconSet: 'fa6',
});

const site = D.site('D5-L04');
const quiz = site.grammar.quiz.map((it, i) => {
  if (i === 3) return { ...it, options: [it.options[0], 'نَوَمْنَا', it.options[2]] };
  if (i === 7) return { ...it, options: [it.options[0], 'أَمْضَوْنَا وَقْتًا مُمْتِعًا مَعًا.', it.options[2]] };
  return it;
});
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D5-L04', {
  support: `• Core: the نَحْنُ form of six regular verbs (ذَهَبْنَا · لَعِبْنَا · شَاهَدْنَا) and the هُمْ form (ذَهَبُوا). Develop: أَنْتُمْ in questions + the hollow verbs قُلْنَا · نِمْنَا · جِئْنَا. Stretch: weak-final verbs (مَشَيْنَا · رَأَيْنَا · اشْتَرَيْنَا · مَشَوْا) and a narrative with two connectors.
• The key idea: the ENDINGS never change; irregular verbs change the STEM first (website: “identify the family, adjust the stem, then attach the ending”).
• Builds directly on D5-L03 (singular endings). D5-L05 adds narrative connectors and كَانَ.`,
  teach: 'Three plural endings, then two irregular families.',
  wedo: 'Sort verbs by family, fix stem slips, then a group trip.',
  next: { nextCode: 'D5-L05', nextTitle: 'Storytelling — Narrative Connectors and كَانَ Description', nextAr: 'رِوَايَةُ القِصَصِ — رَوَابِطُ السَّرْدِ وَكَانَ' },
  objectives: ['Form the past tense for نَحْنُ · أَنْتُمْ · هُمْ.', 'Shorten the stem of hollow verbs (قَالَ → قُلْنَا · نَامَ → نِمْنَا).', 'Change the final alif of weak verbs to yāʾ (مَشَى → مَشَيْنَا).', 'Tell a group story with connectors (فَجْأَةً · لِحُسْنِ الحَظِّ · لِلْأَسَفِ).'],
  rulesAr: 'لَوَاحِقُ الجَمْعِ وَالجُذُورُ الشَّاذَّةُ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does ذَهَبْنَا mean?', ['we went', 'they went', 'I went'], 'Prepared at home (D5-L03).'),
      q('What does مَعًا mean?', ['together', 'alone', 'again'], 'Prepared at home (D5-L03).'),
      q('What does رَأَيْنَا mean?', ['we saw', 'we said', 'we slept'], 'Prepared at home (D5-L03).'),
      q('Complete: أَمْسِ ___ سَلْمَى لَوْحَةً.', ['رَسَمَتْ', 'رَسَمْنَا', 'رَسَمُوا'], 'D5-L03: she → -at.'),
      q('“Did you (f.) watch the match?”', ['هَلْ شَاهَدْتِ المُبَارَاةَ؟', 'هَلْ شَاهَدْنَا المُبَارَاةَ؟', 'هَلْ شَاهَدُوا المُبَارَاةَ؟'], 'D5-L03: you (f.) → -ti.'),
    ],
    keyIdea: { text: 'Same endings for every verb — irregular verbs just change their stem first.', ar: '{e|لَعِبْنَا} · {k|قُلْنَا} · {w|مَشَيْنَا}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D5-L03. Questions 4–5 retrieve the D5-L03 singular endings (هِيَ · أَنْتِ).',
  },
  routes: {
    core: ['I can say what we did (لَعِبْنَا).', 'I can say what they did (لَعِبُوا).'],
    develop: ['I can ask “you all” questions (لَعِبْتُمْ؟).', 'I can use قُلْنَا · نِمْنَا · جِئْنَا.'],
    stretch: ['I can use weak-final verbs (مَشَيْنَا · مَشَوْا).', 'I can tell a group story with connectors.'],
  },
  bridge: [
    { ar: 'شَاذٌّ', urdu: 'شاذ', tr: 'shāz', en: 'irregular, rare' },
    { ar: 'جَمْعٌ', urdu: 'جمع', tr: 'jamaʿ', en: 'plural (Urdu also: add up)' },
    { ar: 'لِلْأَسَفِ', urdu: 'افسوس', tr: 'afsos', en: 'unfortunately (related root)' },
    { ar: 'فَجْأَةً', urdu: 'اچانک / یکایک', tr: 'achānak', en: 'suddenly' },
    { ar: 'حُسْنُ الحَظِّ', urdu: 'خوش قسمتی / حظ', tr: 'ḥaẓ', en: 'good luck (Urdu حظ = pleasure)' },
  ],
  bridgeNotes: 'URDU BRIDGE: شاذ و نادر (rare) and جمع (plural) are the same grammar words. افسوس is Persian, but Arabic أَسَفٌ (regret) is the root of لِلْأَسَفِ. CAREFUL: Urdu حظ (ḥaẓ) = enjoyment; Arabic حَظٌّ = luck.',
  core: ['فَعَلْنَا', 'فَعَلْتُمْ', 'فَعَلُوا', 'ذَهَبْنَا', 'لَعِبُوا', 'قَالَ ← قُلْنَا', 'نَامَ ← نِمْنَا', 'رَأَى ← رَأَيْنَا', 'مَشَى ← مَشَيْنَا', 'مَعًا', 'فَجْأَةً', 'لِحُسْنِ الحَظِّ'],
  vocabNotes: {
    0: 'Plural past forms: we -nā · you all -tum · they -ū (the final alif in ـُوا is silent).',
    1: 'Irregular past verbs: the card shows “he” → “we”. Hollow verbs shorten the middle (قَالَ → قُلْنَا); weak-final verbs change alif to yāʾ (مَشَى → مَشَيْنَا).',
    2: 'Group narrative language: connectors for the story (فَجْأَةً · لِحُسْنِ الحَظِّ · لِلْأَسَفِ) and group verbs from other forms (قَرَّرْنَا · أَحْضَرْنَا · اجْتَمَعْنَا).',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · three plural endings (website rule 1)', title: 'We, you all, they', ar: 'نَحْنُ · أَنْتُمْ · هُمْ',
      cols: [{ label: 'Person', w: 1.9, size: 22 }, { label: 'ذَهَبَ (went)', w: 2.7, size: 26 }, { label: 'لَعِبَ (played)', w: 2.7, size: 26 }, { label: 'شَاهَدَ (watched)', w: 2.7, size: 26 }, { label: 'Ending', w: 2.33 }],
      rows: [
        { core: true, cells: ['نَحْنُ', '{e|ذَهَبْنَا}', '{e|لَعِبْنَا}', '{e|شَاهَدْنَا}', 'we: -nā'] },
        { cells: ['أَنْتُمْ', '{k|ذَهَبْتُمْ}', '{k|لَعِبْتُمْ}', '{k|شَاهَدْتُمْ}', 'you all: -tum'] },
        { core: true, cells: ['هُمْ', '{w|ذَهَبُوا}', '{w|لَعِبُوا}', '{w|شَاهَدُوا}', 'they: -ū (silent alif)'] },
        { cells: ['أَنَا (D5-L03)', 'ذَهَبْتُ', 'لَعِبْتُ', 'شَاهَدْتُ', 'I: -tu'] },
        { cells: ['هِيَ (D5-L03)', 'ذَهَبَتْ', 'لَعِبَتْ', 'شَاهَدَتْ', 'she: -at'] },
      ],
      ltr: true,
      foot: 'They + a group: لَعِبُوا (the alif is written but not pronounced).',
      notes: `GRAMMAR PART 1 — website rule “The three plural suffixes” (the نَحْنُ and أَنْتُمْ suffixes begin with a consonant; the هُمْ suffix is a long ū written with a silent alif). Website teaching point: “ـنَا turns your story into our story.”
Drill: teacher says a person, students chorus (نَحْنُ → لَعِبْنَا · هُمْ → لَعِبُوا). Website mistake: هُمْ لَعِبْنَا ✗ → هُمْ لَعِبُوا.`,
    },
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 2 · irregular stems (website rules 2–4) · Develop / Stretch', title: 'Fix the stem, then add the ending', ar: 'الأَفْعَالُ الشَّاذَّةُ',
      cols: [{ label: 'Family', w: 2.4 }, { label: 'he', w: 2.2, size: 26 }, { label: 'we', w: 2.4, size: 26 }, { label: 'Example (website)', w: 5.33, size: 20 }],
      rows: [
        { core: true, cells: ['hollow (u)', 'قَالَ', '{k|قُلْنَا}', P('قُلْنَا الحَقِيقَةَ.', 'We told the truth.')] },
        { cells: ['hollow (i)', 'نَامَ', '{k|نِمْنَا}', P('نِمْنَا مُبَكِّرِينَ.', 'We slept early.')] },
        { cells: ['hollow + hamza', 'جَاءَ', '{k|جِئْنَا}', P('جِئْنَا إِلَى المَحَطَّةِ.', 'We came to the station.')] },
        { core: true, cells: ['weak-final', 'مَشَى', '{w|مَشَيْنَا}', P('مَشَيْنَا عَلَى الشَّاطِئِ.', 'We walked on the beach.')] },
        { cells: ['weak-final', 'رَأَى', '{w|رَأَيْنَا}', P('رَأَيْنَا مَنْظَرًا جَمِيلًا.', 'We saw a beautiful view.')] },
      ],
      ltr: true,
      foot: 'They + weak-final: mashā becomes mashaw (they walked) — but a regular verb takes -ū: laʿibū (they played).',
      notes: `GRAMMAR PART 2 — website rules “Hollow verbs” (the long middle vowel shortens before a consonant suffix: u for قَالَ, i for نَامَ), “Weak-final verbs” (alif maqṣūra → yāʾ before a consonant suffix) and “هُمْ with a weak-final verb” (the final vowel letter drops and the verb takes ـَوْا).
Website mistakes: قَالْنَا ✗ → قُلْنَا · مَشَانَا ✗ → مَشَيْنَا. Core: قُلْنَا and مَشَيْنَا only.`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me tell a group story',
    steps: [
      { head: 'Regular', ar: '{e|اجْتَمَعْنَا} صَبَاحًا', think: 'We: -nā.' },
      { head: 'Weak-final', ar: 'ثُمَّ {w|مَشَيْنَا} سَاعَتَيْنِ', think: 'Alif → yāʾ.' },
      { head: 'Connector', ar: '{k|فَجْأَةً} بَدَأَ المَطَرُ', think: 'The turning point.' },
      { head: 'Hollow', ar: '{e|قُلْنَا} إِنَّنَا تَعِبْنَا', think: 'qāla → qul-.' },
    ],
    legend: ['e', 'w', 'k'], legendLabels: { e: 'WE', w: 'WEAK-FINAL', k: 'CONNECTOR' },
    model: 'فِي الإِجَازَةِ المَاضِيَةِ {e|قَرَّرْنَا} أَنْ نَذْهَبَ إِلَى الجَبَلِ. {e|اجْتَمَعْنَا} صَبَاحًا، ثُمَّ {w|مَشَيْنَا} سَاعَتَيْنِ حَتَّى {e|وَصَلْنَا} إِلَى القِمَّةِ. وَهُنَاكَ {w|رَأَيْنَا} مَنْظَرًا رَائِعًا. {k|فَجْأَةً} بَدَأَ المَطَرُ، وَ{k|لِحُسْنِ الحَظِّ} {e|أَحْضَرْنَا} مَعَاطِفَ.',
    modelEn: 'Last holiday we decided to go to the mountain. We met in the morning, then walked for two hours until we reached the summit. There we saw a wonderful view. Suddenly it started to rain, and luckily we had brought coats.',
    notes: 'I DO (3 min) — think aloud from the website listening (a group trip): “Who? We. Regular or irregular? Which family? Fix the stem, then -nā.” Students copy the box and underline the two weak-final verbs.',
  },
  patternEn: ['we played together', 'we told the truth', 'we saw a beautiful view'],
  sorterNotes: 'Then give the “he” form of every verb aloud: قُلْنَا → قَالَ · مَشَيْنَا → مَشَى.',
  patch: {
    grammar: { ...site.grammar, quiz },
    speaking: {
      model: [
        ['A', 'أَيْنَ ذَهَبْتُمْ فِي الإِجَازَةِ؟', 'Where did you (all) go in the holiday?'],
        ['B', 'ذَهَبْنَا إِلَى الجَبَلِ، وَمَشَيْنَا سَاعَتَيْنِ حَتَّى وَصَلْنَا إِلَى القِمَّةِ.', 'We went to the mountain, and walked for two hours until we reached the summit.'],
        ['A', 'وَمَاذَا رَأَيْتُمْ هُنَاكَ؟', 'And what did you see there?'],
        ['B', 'رَأَيْنَا مَنْظَرًا رَائِعًا، وَغَنَّيْنَا مَعًا، وَقُلْنَا إِنَّنَا سَنَعُودُ.', 'We saw a wonderful view, sang together, and said that we would come back.'],
      ],
    },
  },
  patchNote: 'two quiz distractors replaced (they differed only in vowels), English added to the patterns and speaking model; the website visual game repeats D5-L03 and is skipped.',
  hints: ['qāla + -nā: shorten the stem!', 'mashā + -nā: alif → yāʾ', 'They: -nā or -ū?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 4.\nCount the “we” verbs you hear.',
  listenRoutes: 'Core: questions 1, 2 and 4. Develop / Stretch: all 5 — then list the irregular verbs you heard (مَشَيْنَا · رَأَيْنَا · غَنَّيْنَا · نِمْنَا · قُلْنَا).',
  gloss: [
    ['فِي الإِجَازَةِ المَاضِيَةِ قَرَّرْنَا أَنْ نَذْهَبَ إِلَى الجَبَلِ.', 'Last holiday we decided to go to the mountain.'],
    ['اجْتَمَعْنَا صَبَاحًا وَأَحْضَرْنَا الطَّعَامَ وَالمَاءَ، ثُمَّ مَشَيْنَا سَاعَتَيْنِ حَتَّى وَصَلْنَا إِلَى القِمَّةِ.', 'We met in the morning and brought food and water, then walked for two hours until we reached the summit.'],
    ['وَهُنَاكَ رَأَيْنَا مَنْظَرًا رَائِعًا، وَغَنَّيْنَا مَعًا وَضَحِكْنَا كَثِيرًا.', 'There we saw a wonderful view, and we sang together and laughed a lot.'],
    ['فَجْأَةً بَدَأَ المَطَرُ، وَلِحُسْنِ الحَظِّ أَحْضَرْنَا مَعَاطِفَ.', 'Suddenly it began to rain, and luckily we had brought coats.'],
    ['وَفِي المَسَاءِ نِمْنَا مُبَكِّرِينَ لِأَنَّنَا تَعِبْنَا، وَقُلْنَا إِنَّنَا أَمْضَيْنَا وَقْتًا مُمْتِعًا حَقًّا.', 'In the evening we slept early because we were tired, and we said we had spent a truly enjoyable time.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'أَيْنَ ذَهَبْتُمْ؟ وَمَاذَا فَعَلْتُمْ هُنَاكَ؟' },
      { route: 'develop', ar: 'مَاذَا رَأَيْتُمْ؟ وَهَلْ أَعْجَبَكُمُ المَكَانُ؟' },
      { route: 'stretch', ar: 'هَلْ أَمْضَيْتُمْ وَقْتًا مُمْتِعًا؟ لِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'ذَهَبْنَا إِلَى ______ ، وَ ______ نَا هُنَاكَ.' },
      { route: 'develop', ar: 'رَأَيْنَا ______ ، وَمَشَيْنَا ______ .' },
      { route: 'stretch', ar: 'نَعَمْ، أَمْضَيْنَا وَقْتًا مُمْتِعًا لِأَنَّنَا ______ ، وَلٰكِنْ لِلْأَسَفِ ______ .' },
    ],
    modelEn: ['Where did you (all) go in the holiday?', 'We went to the mountain, and walked for two hours until we reached the summit.'],
    notes: 'Website prompts and model (a أَنْتُمْ question answered with نَحْنُ verbs). Pairs: A asks with ـتُمْ, B answers with ـنَا — then swap. Listen for one irregular verb each.',
  },
  write: {
    core: { amount: '5 sentences', how: 'Five نَحْنُ sentences about a day out, each with a different verb.' },
    develop: { amount: '80–100 words', how: 'A linked story with نَحْنُ verbs, one هُمْ verb and one irregular verb.' },
    stretch: { amount: '100–120 words', how: 'Website task: 6+ نَحْنُ verbs, 2 irregular verbs, 2 connectors and a هُمْ verb.' },
  },
  frames: {
    core: [
      { en: 'Last holiday we went to …', ar: 'فِي الإِجَازَةِ المَاضِيَةِ ذَهَبْنَا إِلَى ______ .' },
      { en: 'We played …', ar: 'لَعِبْنَا ______ .' },
      { en: 'We watched …', ar: 'شَاهَدْنَا ______ .' },
      { en: 'My friends swam …', ar: 'أَصْدِقَائِي سَبَحُوا ______ .' },
    ],
    develop: [
      { en: 'We walked to …', ar: 'مَشَيْنَا إِلَى ______ .' },
      { en: 'There we saw …', ar: 'وَهُنَاكَ رَأَيْنَا ______ .' },
      { en: 'Suddenly …', ar: 'فَجْأَةً ______ .' },
      { en: 'We said that we had spent an enjoyable time.', ar: 'قُلْنَا إِنَّنَا أَمْضَيْنَا وَقْتًا مُمْتِعًا.' },
    ],
    bank: ['ذَهَبْنَا', 'لَعِبْنَا', 'وَصَلْنَا', 'اجْتَمَعْنَا', 'قُلْنَا', 'نِمْنَا', 'جِئْنَا', 'مَشَيْنَا', 'رَأَيْنَا', 'اشْتَرَيْنَا', 'فَجْأَةً', 'لِحُسْنِ الحَظِّ'],
  },
  stretch: [
    ['قَرَّرْنَا أَنْ نُنَظِّمَ رِحْلَةً قَصِيرَةً', 'we decided to organise a short trip'],
    ['اشْتَرَيْنَا التَّذَاكِرَ قَبْلَ أُسْبُوعٍ', 'we bought the tickets a week before'],
    ['رَأَيْنَا حِرَفًا تَقْلِيدِيَّةً', 'we saw traditional crafts'],
    ['لِلْأَسَفِ نَسِينَا الكَامِيرَا', 'unfortunately we forgot the camera'],
    ['نِمْنَا مُبَكِّرِينَ لِأَنَّنَا تَعِبْنَا', 'we slept early because we were tired'],
  ],
  modelEn: 'Last summer we got together with our friends and decided to organise a short trip. We bought the tickets a week before, then came to the station early. We walked in the old market and saw beautiful traditional crafts. Suddenly it began to rain, and luckily we had brought coats. In the evening we sang together and slept early because we were tired, and we said we had spent an enjoyable time.',
  find: ['six نَحْنُ verbs', 'a hollow verb (جِئْنَا · نِمْنَا · قُلْنَا)', 'a weak-final verb (اشْتَرَيْنَا · مَشَيْنَا · رَأَيْنَا)', 'two connectors'],
  modelNotes: 'Website writing model. Evidence: اجْتَمَعْنَا · قَرَّرْنَا · اشْتَرَيْنَا · جِئْنَا · مَشَيْنَا · رَأَيْنَا · أَحْضَرْنَا · غَنَّيْنَا · نِمْنَا · قُلْنَا · أَمْضَيْنَا; connectors فَجْأَةً · لِحُسْنِ الحَظِّ. Stretch: add one هُمْ verb (e.g. أَصْدِقَاؤُنَا لَعِبُوا …) to complete the website checklist.',
  selfCheck: [
    { route: 'core', text: 'My “we” verbs end in -nā.' },
    { route: 'core', text: 'My “they” verbs end in -ū (ـُوا).' },
    { route: 'develop', text: 'I fixed the stem of a hollow verb (قُلْنَا).' },
    { route: 'develop', text: 'I used one أَنْتُمْ question.' },
    { route: 'stretch', text: 'I used a weak-final verb and two connectors.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['اجْتَمَعْنَا', 'we got together'], ['نَحْنُ الأَصْدِقَاءَ', 'we friends'], ['نُنَظِّمَ رِحْلَةً', 'organise a trip'], ['التَّذَاكِرَ', 'the tickets'], ['ظُهْرًا', 'at noon'],
    ['حِرَفًا تَقْلِيدِيَّةً', 'traditional crafts'], ['أَصْدِقَاؤُنَا الآخَرُونَ', 'our other friends'], ['نَسِينَا', 'we forgot'], ['الفُنْدُقِ', 'the hotel'], ['سَنَعُودُ', 'we will return'],
  ],
  prep: {
    words: [['فِي البِدَايَةِ', 'at the beginning', '—'], ['فِي تِلْكَ اللَّحْظَةِ', 'at that moment', '—'], ['فِي النِّهَايَةِ', 'in the end', '—'], ['كَانَ / كَانَتْ', 'he / she was', 'كُنْتُ I was'], ['ذِكْرَى', 'a memory', 'pl. ذِكْرَيَاتٌ']],
    questionEn: 'Think of a day you will never forget. Where were you, and what happened?',
    questionAr: 'كُنْتُ فِي … وَفَجْأَةً …',
    homework: {
      core: 'Learn the three plural endings with ذَهَبَ and لَعِبَ; write five نَحْنُ sentences.',
      develop: 'An 80–100-word group story with one هُمْ verb and one irregular verb.',
      stretch: 'Website writing task: a group narrative with two irregular verbs and two connectors.',
    },
    wordsSource: 'The five words come from the website D5-L05 vocabulary (narrative connectors and كَانَ).',
  },
  remember: 'Remember: we -nā · you all -tum · they -ū — and for irregular verbs, fix the stem first: قُلْنَا · نِمْنَا · مَشَيْنَا.',
});

module.exports = { meta, slides };
