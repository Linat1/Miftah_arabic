'use strict';
/* GM-V-05 · Present Tense: Prefixes, Suffixes and Meaning — website: Mastery & Revision › Grammar › Verbs › Lesson 5 (prefix family أَـ · نَـ ·
 * يَـ · تَـ; تَكْتُبُ is ambiguous (you m. / she); the complete paradigm with suffixes ـِينَ · ـَانِ · ـُونَ · ـْنَ; meanings: habit, current
 * action, general fact, arranged future; weak verbs in the present — يَقُولُ · يَصِلُ · يَمْشِي / يَمْشُونَ · يَدْعُو / تَدْعِينَ; clinic).
 * Quizzes are the website’s (Entry, Prefix, Present Ending, Meaning in Context, Present Weak Verb, Mastery) plus the website person-builder
 * game; one website item marked “only” is skipped. Sorter, I-do, frames and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__07-verbs__grammar-mastery-05-present-tense';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-V-05', fileTitle: 'Present_Tense', title: 'Present Tense: Prefixes, Suffixes and Meaning', arabic: 'الْفِعْلُ الْمُضَارِعُ: السَّوَابِقُ وَاللَّوَاحِقُ وَالدَّلَالَةُ',
  focus: 'The present shows the person at the FRONT (a- I, na- we, ya- he, ta- you / she) and sometimes at the END too (-īna you f., -āni two, -ūna they, -na they f.). The same form can mean “I write” or “I am writing” — context decides.',
  icon: 'FaPenNib',
});

const slides = G.gmLesson({
  code: 'GM-V-05', site: KEY,
  support: `• Core: the four prefixes أَـ · نَـ · يَـ · تَـ with sound verbs (أَكْتُبُ · نَكْتُبُ · يَكْتُبُ · تَكْتُبُ). Develop: suffix persons — تَكْتُبِينَ · يَكْتُبُونَ · يَكْتُبْنَ · تَكْتُبَانِ. Stretch: weak verbs in the present (أَقُولُ · تَصِلُ · يَمْشُونَ · تَدْعِينَ) and meaning from context (habit, now, general fact).
• Website warning: the Arabic present is not one English tense — أَقْرَأُ can be “I read” or “I am reading”.
• Prefix memory hook: أَنَيْت (a-, na-, ya-, ta-) — the four letters every present verb starts with.`,
  teach: 'Prefix family; full paradigm; meaning in context; weak verbs.',
  wedo: 'Build the form; sort by prefix; repair.',
  next: { nextCode: 'GM-V-06', nextTitle: 'Future Tense and Future Negation', nextAr: 'زَمَنُ الْمُسْتَقْبَلِ وَنَفْيُهُ' },
  doNow: {
    pick: [0, 1, 2, 4, 5],
    fb: { 0: 'a- marks “I”.', 1: 'na- marks “we”.', 2: 'You (f.) takes ta- … -īna.', 4: 'They (f.) take ya- … -na.' },
    keyIdea: { text: 'Present = PREFIX for the person (a-, na-, ya-, ta-) + sometimes a SUFFIX (-īna, -āni, -ūna, -na).', ar: '{k|أَكْتُبُ} · {k|نَكْتُبُ} ‖ {e|تَكْتُبِينَ} · {e|يَكْتُبُونَ}' },
    retrieves: 'The website Entry Check (questions 1, 2, 3, 5 and 6) — it uses the forms prepared at the end of GM-V-04.',
  },
  objectives: ['Use the prefixes a-, na-, ya- and ta- accurately.', 'Add suffixes for feminine, dual and plural persons.', 'Read habit, current action or general fact from context.', 'Conjugate common weak verbs in the present.'],
  routes: {
    core: ['I say I, we, he and she write.', 'I know ta- can mean you (m.) or she.'],
    develop: ['I say you (f.), they and they (f.) write.', 'I use every day and now to show meaning.'],
    stretch: ['I conjugate qāla, waṣala and mashā in the present.', 'I write a general fact in the present.'],
  },
  terms: {
    items: [
      { ar: 'الْمُضَارِعُ', en: 'present tense', note: 'يَكْتُبُ' },
      { ar: 'السَّابِقَةُ', en: 'prefix', note: 'أَ · نَ · يَ · تَ' },
      { ar: 'اللَّاحِقَةُ', en: 'suffix', note: 'ـِينَ · ـُونَ · ـْنَ' },
      { ar: 'الْعَادَةُ', en: 'habit', note: 'أَقْرَأُ كُلَّ يَوْمٍ' },
      { ar: 'الْحَدَثُ الْآنَ', en: 'current action', note: 'أَقْرَأُ الْآنَ' },
      { ar: 'حَقِيقَةٌ عَامَّةٌ', en: 'general fact', note: 'تَدُورُ الْأَرْضُ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · the prefix family (website table)', title: 'The front of the verb tells you who', ar: 'السَّوَابِقُ: أَ · نَ · يَ · تَ', ltr: true,
      cols: [{ label: 'Prefix', w: 2.4, size: 26 }, { label: 'Core person (website)', w: 5.4 }, { label: 'Example', w: 4.53, size: 26 }],
      rows: [
        { core: true, cells: ['أَـ', 'I', 'أَكْتُبُ'] },
        { core: true, cells: ['نَـ', 'we', 'نَكْتُبُ'] },
        { core: true, cells: ['يَـ', 'he, and many third-person forms', 'يَكْتُبُ'] },
        { core: true, cells: ['تَـ', 'you (m.), she, and several dual / plural forms', 'تَكْتُبُ'] },
      ],
      foot: 'Website: taktubu is ambiguous on its own — “you (m.) write” or “she writes”. The pronoun, noun or conversation decides.',
      notes: 'PART 1 (3 min) — website “The prefix family”. Hook: a – na – ya – ta.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 2 · the complete present paradigm (website table)', title: 'Prefix + suffix', ar: 'تَصْرِيفُ الْمُضَارِعِ', ltr: true,
      cols: [{ label: 'Pronoun', w: 2.4, size: 24 }, { label: 'writes', w: 3.2, size: 24 }, { label: 'Pronoun', w: 2.4, size: 24 }, { label: 'writes', w: 4.33, size: 24 }],
      rows: [
        { core: true, cells: ['أَنَا', 'أَكْتُبُ', 'نَحْنُ', 'نَكْتُبُ'] },
        { core: true, cells: ['أَنْتَ', 'تَكْتُبُ', 'أَنْتِ', 'تَكْتُبِينَ'] },
        { core: true, cells: ['هُوَ', 'يَكْتُبُ', 'هِيَ', 'تَكْتُبُ'] },
        { cells: ['هُمْ', 'يَكْتُبُونَ', 'هُنَّ', 'يَكْتُبْنَ'] },
        { cells: ['أَنْتُمْ', 'تَكْتُبُونَ', 'أَنْتُنَّ', 'تَكْتُبْنَ'] },
        { cells: ['هُمَا', 'يَكْتُبَانِ', 'أَنْتُمَا', 'تَكْتُبَانِ'] },
      ],
      foot: 'Website: duals, masculine plurals, “you (f.)” and feminine plurals need BOTH ends. Dual: humā (m.) yaktubāni, humā (f.) taktubāni.',
      notes: 'PART 2 (4 min) — website “The complete present paradigm”. Colour prefixes and box suffixes (website routine).',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · meaning in context · weak verbs (website tables) · Develop / Stretch', title: 'Habit, now, fact — and weak stems', ar: 'الدَّلَالَةُ وَالْأَفْعَالُ الْمُعْتَلَّةُ', ltr: true,
      cols: [{ label: 'Point', w: 3.2 }, { label: 'Arabic (website)', w: 5.0, size: 22 }, { label: 'Notice', w: 4.13 }],
      rows: [
        { core: true, cells: ['habit', 'أَقْرَأُ كُلَّ يَوْمٍ.', 'every day → habit'] },
        { core: true, cells: ['current action', 'أَقْرَأُ الْآنَ.', 'now → happening now'] },
        { cells: ['general fact', 'تَدُورُ الْأَرْضُ حَوْلَ الشَّمْسِ.', 'general knowledge'] },
        { cells: ['hollow', 'أَقُولُ · تَقُولِينَ · يَقُولُونَ', 'long ū stays'] },
        { cells: ['initial weak', 'أَصِلُ · تَصِلِينَ · يَصِلُونَ', 'no wāw'] },
        { cells: ['final weak', 'أَمْشِي · تَمْشِينَ · يَمْشُونَ', 'plural drops the yāʾ'] },
      ],
      foot: 'Website: the Arabic present can be “I write”, “I am writing”, or an arranged future — strengthen a future with sa- (GM-V-06).',
      notes: 'PART 3 (3 min) — website “Habit, current action and general truth” and “Present forms of weak verbs”.',
    },
  ],
  quick: [
    W(/Prefix Check/, 1, { feedback: 'na- = we.' }),
    W(/Prefix Check/, 3, { feedback: 'ta- can mark “she”.' }),
    W(/Present Ending/, 2, { prompt: 'Choose “they (m. / mixed) study”.', feedback: 'ya- … -ūna.' }),
    W(/Present Ending/, 3, { prompt: 'Choose “they (f.) study”.', feedback: 'Third-person feminine plural uses ya- … -na.' }),
  ],
  quickNote: 'website Prefix and Present Ending checks.',
  ido: {
    title: 'Watch me build the present from the subject',
    steps: [
      { head: 'Subject', ar: 'أُخْتِي', think: 'she → ta-.' },
      { head: 'Verb', ar: 'تَسْتَيْقِظُ', think: 'ta- + stem.' },
      { head: 'Subject', ar: 'أَصْدِقَائِي', think: 'they → ya- … -ūna.' },
      { head: 'Verb', ar: 'يَدْرُسُونَ', think: 'Both ends.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'PREFIX ONLY', e: 'PREFIX + SUFFIX' },
    model: '{k|أَسْتَيْقِظُ} مُبَكِّرًا، وَ{k|تَسْتَيْقِظُ} أُخْتِي بَعْدِي. {k|نَذْهَبُ} إِلَى الْمَدْرَسَةِ مَعًا، وَأَصْدِقَائِي {e|يَدْرُسُونَ} مَوَادَّ مُخْتَلِفَةً.',
    modelEn: 'I wake up early, and my sister wakes up after me. We go to school together, and my friends study different subjects.',
    notes: 'Website model, with the subject placed first so the plural verb agrees fully. Stretch note: when the verb comes first it stays singular (yadrusu aṣdiqāʾī) — see the Verbal Sentences lessons.',
  },
  models: [
    { ar: 'أَقْرَأُ قَبْلَ النَّوْمِ كُلَّ لَيْلَةٍ.', en: 'I read before sleeping every night.', tip: 'Habit.' },
    { ar: 'مَاذَا تَفْعَلِينَ الْآنَ؟', en: 'What are you doing now? (to a girl)', tip: 'ta- … -īna.' },
    { ar: 'تَشْرُقُ الشَّمْسُ مِنَ الشَّرْقِ.', en: 'The sun rises in the east.', tip: 'General fact.' },
    { ar: 'الطَّالِبَاتُ يَكْتُبْنَ الْوَاجِبَ.', en: 'The female students are writing the homework.', tip: 'ya- … -na.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · person builder (website game) · say it aloud', title: 'Subject + verb = present form', ar: 'كَوِّنِ الْمُضَارِعَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Subject', w: 2.6, size: 24 }, { label: 'Verb', w: 2.6, size: 24 }, { label: 'Present form', w: 3.4, size: 26 }, { label: 'Clue', w: 3.73 }],
      rows: [
        { core: true, cells: ['أَنَا', 'كَتَبَ', 'أَكْتُبُ', 'a-'] },
        { core: true, cells: ['أَنْتِ', 'دَرَسَ', 'تَدْرُسِينَ', 'ta- … -īna'] },
        { core: true, cells: ['هُمْ', 'قَالَ', 'يَقُولُونَ', 'ya- … -ūna (hollow)'] },
        { cells: ['هُنَّ', 'كَتَبَ', 'يَكْتُبْنَ', 'ya- … -na'] },
        { cells: ['أَنْتُمْ', 'وَصَلَ', 'تَصِلُونَ', 'ta- … -ūna (no wāw)'] },
        { cells: ['نَحْنُ', 'مَشَى', 'نَمْشِي', 'na- (final weak)'] },
      ],
      foot: 'Website person builder: start from the subject, choose the prefix, then add any suffix.',
      notes: 'WE DO (3 min) — the website game items. Cover column 3.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · one end or both ends?', title: 'Prefix only, or prefix + suffix?', ar: 'سَابِقَةٌ فَقَطْ أَمْ سَابِقَةٌ وَلَاحِقَةٌ؟',
      categories: ['Prefix only', 'Prefix + suffix'],
      items: [['أَلْعَبُ', 0], ['تَلْعَبِينَ', 1], ['نَلْعَبُ', 0], ['يَلْعَبُونَ', 1], ['يَلْعَبُ', 0], ['يَلْعَبْنَ', 1], ['تَلْعَبُ', 0], ['تَلْعَبَانِ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type 1 or 2 and name the pronoun for each.',
    },
  ],
  mistakes: [
    { wrong: 'هِيَ يَكْتُبُ', right: 'هِيَ تَكْتُبُ', why: 'She takes ta- (website clinic).' },
    { wrong: 'أَنْتِ تَكْتُبُ', right: 'أَنْتِ تَكْتُبِينَ', why: 'Add -īna for you (f.) (website clinic).' },
    { wrong: 'هُنَّ تَكْتُبْنَ', right: 'هُنَّ يَكْتُبْنَ', why: 'They (f.) begin with ya- (website clinic).' },
  ],
  hints: ['Which prefix for she?', 'What ending for you (f.)?', 'ya- or ta- for they (f.)?'],
  practice: [
    W(/Meaning in Context/, 0, { prompt: 'What does adrusu l-āna mean?', feedback: 'Al-āna signals a current action.' }),
    W(/Meaning in Context/, 1, { prompt: 'What does amshī kulla ṣabāḥin mean?', feedback: 'A routine.' }),
    W(/Present Weak Verb/, 2, { feedback: 'Final yāʾ verb, present plural: yamshūna.' }),
    W(/Present Weak Verb/, 3, { prompt: 'Choose “you (f.) call / invite”.', feedback: 'The final wāw changes before -īna.' }),
  ],
  practiceLabel: 'website Meaning in Context and Present Weak Verb checks',
  read: {
    title: 'Our school profile', label: 'website reading workshop (teacher-written profile)',
    text: 'تَقَعُ مَدْرَسَتُنَا فِي وَسَطِ الْمَدِينَةِ. يَدْرُسُ فِيهَا خَمْسُمِئَةِ طَالِبٍ وَطَالِبَةٍ. يَبْدَأُ الْيَوْمُ الدِّرَاسِيُّ فِي الثَّامِنَةِ. الطُّلَّابُ يَلْعَبُونَ كُرَةَ الْقَدَمِ فِي الِاسْتِرَاحَةِ، وَالطَّالِبَاتُ يَقْرَأْنَ فِي الْمَكْتَبَةِ. مُعَلِّمَتِي تَقُولُ دَائِمًا: «أَنْتُمْ تَتَعَلَّمُونَ كُلَّ يَوْمٍ!».',
    glossary: [['تَقَعُ', 'is located'], ['وَسَطِ', 'the centre'], ['يَبْدَأُ', 'begins'], ['الِاسْتِرَاحَةِ', 'the break'], ['تَتَعَلَّمُونَ', 'you (pl.) learn']],
    task: 'Website: use prefixes and suffixes to identify speakers, addressees and reported people.',
    questions: [
      q('Who reads in the library?', ['the female students', 'the male students', 'the teacher'], 'Yaqraʾna — ya- … -na = they (f.).'),
      q('Who plays football?', ['the male students', 'the female students', 'the teacher'], 'Yalʿabūna = they (m.).'),
      q('Who is the teacher talking to in her saying?', ['the students (you all)', 'herself', 'one girl'], 'Antum tataʿallamūna.'),
      q('Which verb shows a general fact about the school?', ['تَقَعُ', 'يَقْرَأْنَ', 'تَقُولُ'], 'Where the school is located.'),
    ],
    qNote: 'Teacher-written profile for the website reading workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: my routine — and theirs', source: 'website speaking workshop',
    prompts: [
      { route: 'core', ar: 'مَاذَا تَفْعَلُ كُلَّ صَبَاحٍ؟' },
      { route: 'develop', ar: 'مَاذَا تَفْعَلُونَ فِي الْمَدْرَسَةِ؟' },
      { route: 'stretch', ar: 'مَاذَا يَفْعَلُ صَدِيقُكَ؟ وَمَاذَا تَفْعَلُ صَدِيقَتُكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'كُلَّ صَبَاحٍ ______ وَ ______ .' },
      { route: 'develop', ar: 'فِي الْمَدْرَسَةِ ______ وَ ______ .' },
      { route: 'stretch', ar: 'صَدِيقِي ______ ، وَصَدِيقَتِي ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا تَفْعَلِينَ بَعْدَ الْمَدْرَسَةِ؟', en: 'What do you do after school? (to a girl)' },
      { who: 'B', ar: 'أَرْجِعُ إِلَى الْبَيْتِ وَأَكْتُبُ الْوَاجِبَ، ثُمَّ أَقْرَأُ الْقُرْآنَ مَعَ أُمِّي. أَخِي يَلْعَبُ فِي الْحَدِيقَةِ.', en: 'I go home and write my homework, then I read the Qur’an with my mother. My brother plays in the garden.' },
    ],
    notes: 'Website: one-minute routine answer, then change the subject from I to we, and from a male to a female friend. Listening (website): minimal contrasts taktubu / taktubīna / yaktubūna / yaktubna.',
  },
  write: {
    siteTask: 'Write 120–140 words about your routine, current priorities and one general fact about your school or community, with eight present verbs and six different persons.',
    core: { amount: '6 sentences', task: 'My routine: I wake up, I go, I study …', how: 'a- for every verb.' },
    develop: { amount: '8 sentences', task: 'Add we, she, they and you (f.).', how: 'Check both ends of the verb.' },
    stretch: { amount: '120–140 words', task: 'Website task with a habit, a current action and a general fact.', how: 'Include one hollow and one final-weak verb.' },
  },
  frames: {
    core: [
      { en: 'Every day I wake up at …', ar: 'كُلَّ يَوْمٍ أَسْتَيْقِظُ فِي ______ .' },
      { en: 'We go to …', ar: 'نَذْهَبُ إِلَى ______ .' },
      { en: 'My brother plays …', ar: 'أَخِي يَلْعَبُ ______ .' },
      { en: 'My sister reads …', ar: 'أُخْتِي تَقْرَأُ ______ .' },
    ],
    develop: [
      { en: 'Now I am …', ar: 'الْآنَ ______ .' },
      { en: 'My friends study …', ar: 'أَصْدِقَائِي يَدْرُسُونَ ______ .' },
      { en: 'The girls walk to …', ar: 'الْبَنَاتُ يَمْشِينَ إِلَى ______ .' },
      { en: 'What do you (f.) do …?', ar: 'مَاذَا تَفْعَلِينَ ______ ؟' },
    ],
    bank: ['أَسْتَيْقِظُ', 'أَذْهَبُ', 'نَدْرُسُ', 'يَلْعَبُ', 'تَقْرَأُ', 'تَكْتُبِينَ', 'يَدْرُسُونَ', 'يَكْتُبْنَ', 'أَقُولُ', 'نَمْشِي', 'يَصِلُ', 'كُلَّ يَوْمٍ', 'الْآنَ'],
  },
  stretchTask: {
    task: 'Website integrated production task: 120–140 words about your routine, priorities and a general fact.',
    checklist: ['Eight present verbs.', 'Six different persons.', 'A habit, a current action and a general fact.', 'One hollow verb and one final-weak verb.', 'A feminine plural or dual form.'],
    phrases: [['كُلَّ يَوْمٍ', 'every day'], ['فِي الْوَقْتِ الْحَالِيِّ', 'currently'], ['أُرَكِّزُ عَلَى', 'I focus on'], ['يَقُولُ الْمُعَلِّمُ', 'the teacher says'], ['يَمْشُونَ', 'they walk'], ['تَتَعَلَّمِينَ', 'you (f.) learn']],
  },
  model: {
    text: 'أَسْتَيْقِظُ كُلَّ يَوْمٍ فِي السَّادِسَةِ وَأُصَلِّي الْفَجْرَ. بَعْدَ ذَلِكَ نَأْكُلُ الْفَطُورَ مَعًا، وَتَقُولُ أُمِّي: «لَا تَتَأَخَّرُوا!». أَخَوَايَ يَمْشِيَانِ إِلَى الْمَدْرَسَةِ، وَأَنَا أَرْكَبُ الْحَافِلَةَ. فِي الْوَقْتِ الْحَالِيِّ أُرَكِّزُ عَلَى الِامْتِحَانَاتِ، فَأَدْرُسُ كُلَّ مَسَاءٍ. أُخْتَايَ تَدْرُسَانِ فِي الْجَامِعَةِ، وَهُنَّ وَصَدِيقَاتُهُنَّ يَقْرَأْنَ كَثِيرًا. فِي مَدِينَتِنَا يَعِيشُ نَاسٌ مِنْ ثَقَافَاتٍ مُخْتَلِفَةٍ.',
    en: 'I wake up every day at six and pray Fajr. After that we eat breakfast together, and my mother says: “Don’t be late!”. My two brothers walk to school, and I take the bus. Currently I am focusing on exams, so I study every evening. My two sisters study at university, and they and their friends read a lot. In our city people from different cultures live together.',
    find: ['prefix only', 'prefix + suffix', 'habit / now', 'general fact'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'Every present verb starts with a-, na-, ya- or ta-.' },
    { route: 'core', text: 'She takes ta-; he takes ya-.' },
    { route: 'develop', text: 'I added -īna, -ūna, -na or -āni where needed.' },
    { route: 'develop', text: 'Time words show habit or now.' },
    { route: 'stretch', text: 'My weak verbs are correct in the present.' },
  ],
  exit: [
    W(/Mastery/, 2, { prompt: 'Choose “you (f.) write”.', feedback: 'ta- … -īna.' }),
    W(/Mastery/, 4, { prompt: 'Choose “they two (m.) write”.', feedback: 'Third-person masculine dual: yaktubāni.' }),
    W(/Mastery/, 6, { prompt: 'Choose “they (f.) write”.', feedback: 'ya- … -na.' }),
  ],
  mastery: false,
  prep: {
    words: [['سَـ', 'will (attached)', 'سَأَدْرُسُ'], ['سَوْفَ', 'will (separate)', 'سَوْفَ أَدْرُسُ'], ['لَنْ', 'will not', 'لَنْ أَتَأَخَّرَ'], ['غَدًا', 'tomorrow', '—'], ['فِي الْمُسْتَقْبَلِ', 'in the future', '—']],
    questionEn: 'You know adrusu (I study). How do you think you say “I will study”?',
    questionAr: 'أَدْرُسُ · ______ غَدًا',
    homework: {
      core: 'Conjugate laʿiba in the present for six persons.',
      develop: 'Repair ten present forms with wrong prefixes or endings.',
      stretch: 'Website task: routine, priorities and a general fact.',
    },
    wordsSource: 'The five words prepare GM-V-06 (website Verbs lesson 6: the future and its negation).',
  },
  remember: 'Remember: a- I · na- we · ya- he / they · ta- you / she · add -īna, -āni, -ūna, -na where needed · the present can mean habit, now or a general fact.',
});

module.exports = { meta, slides };
