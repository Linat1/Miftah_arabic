'use strict';
/* GM-CP-01 · Common Prepositions and the Genitive — website: Mastery & Revision › Grammar › Conjunctions and Prepositions › Lesson 1
 * (meaning first: fī, ilā, min, ʿalā, ʿan, maʿa, bi-, li-; the noun after a preposition is majrūr — kasra / tanwīn kasr, -ayni, -īna;
 * pronoun forms fīhi, ʿalayhā, minhum learned as units; attached bi- and li-: bi-l-, li-l-, lahu, bihi; verb + preposition collocations;
 * clinic). Quizzes are the website’s (Entry, Meaning, Genitive Form, Attached Form, Final Mastery) plus the website game; one Entry item
 * with a mixed-label option is skipped. Sorter, I-do, frames, reading and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__08-conjunctions-prepositions__grammar-mastery-01-common-prepositions';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-CP-01', fileTitle: 'Common_Prepositions', title: 'Common Prepositions and the Genitive', arabic: 'حُرُوفُ الْجَرِّ وَالْمَجْرُورُ',
  focus: 'Eight small words show where, where to, where from, about what, with whom, how and for whom. After a preposition the noun ends in kasra (fī l-bayti). Bi- and li- join the next word: bi-l-ḥāfila, li-l-ṭālib.',
  icon: 'FaSignsPost',
});

const slides = G.gmLesson({
  code: 'GM-CP-01', site: KEY,
  support: `• Core: فِي · إِلَى · مِنْ · عَلَى · عَنْ · مَعَ with places and people (فِي الْمَدْرَسَةِ · إِلَى الْمَكْتَبَةِ). Develop: attached بِـ and لِـ (بِالْحَافِلَةِ · لِلطَّالِبِ · لَهُ · بِهِ) and verb + preposition pairs (اِسْتَمَعَ إِلَى · بَحَثَ عَنْ). Stretch: the genitive with duals and plurals (إِلَى مَكْتَبَتَيْنِ · مَعَ الْمُعَلِّمِينَ).
• Website principle: choose the preposition by the Arabic relationship, not by the English translation. maʿa = company (with my brother); bi- = means (by train).
• Case boundary (website): this lesson shows the kasra for reading and modelling; the full system comes in the Case Endings lessons (GM-CASE).`,
  teach: 'Meaning of 8 prepositions; majrūr; bi- / li-; collocations.',
  wedo: 'Choose the preposition; sort maʿa / bi-; repair.',
  next: { nextCode: 'GM-CP-02', nextTitle: 'Spatial and Temporal Locators', nextAr: 'ظُرُوفُ الْمَكَانِ وَالزَّمَانِ' },
  doNow: {
    pick: [0, 1, 2, 3, 5],
    fb: { 0: 'Fī locates something inside a place.', 1: 'Ilā marks movement towards a destination.', 2: 'ʿAn commonly introduces a topic.', 3: 'Bi- attaches directly to the next word.', 4: 'Li- + al- is written li-l-, and the noun takes kasra.' },
    keyIdea: { text: 'Preposition + noun = a phrase; the noun ends in kasra. Bi- and li- join the word: bi-l-, li-l-.', ar: '{k|فِي} الْبَيْتِ ‖ {e|بِالْحَافِلَةِ} · {e|لِلطَّالِبِ}' },
    retrieves: 'The website Entry Check (questions 1, 2, 3, 4 and 6) — the GM-VF-R prep words fī, ʿalā, min, ilā, maʿa.',
  },
  objectives: ['Choose a preposition by its meaning.', 'Write the noun after a preposition with kasra.', 'Attach bi- and li- correctly.', 'Learn verbs with their prepositions.'],
  routes: {
    core: ['I say where I am and where I go.', 'I use maʿa for people.'],
    develop: ['I write bi-l- and li-l- with no space.', 'I learn istamaʿa ilā and baḥatha ʿan.'],
    stretch: ['I use -ayni and -īna after a preposition.', 'I write a 60–80-word message with six prepositions.'],
  },
  terms: {
    items: [
      { ar: 'حَرْفُ الْجَرِّ', en: 'preposition', note: 'فِي · إِلَى · مِنْ' },
      { ar: 'الِاسْمُ الْمَجْرُورُ', en: 'noun after a preposition (genitive)', note: 'الْبَيْتِ' },
      { ar: 'الْكَسْرَةُ', en: 'kasra (genitive sign)', note: 'الْمَدْرَسَةِ' },
      { ar: 'شِبْهُ الْجُمْلَةِ', en: 'prepositional phrase', note: 'فِي الصَّفِّ' },
      { ar: 'بِـ · لِـ', en: 'attached prepositions', note: 'بِالْقِطَارِ · لَهُ' },
      { ar: 'التَّلَازُمُ', en: 'verb + preposition pair', note: 'اِسْتَمَعَ إِلَى' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 1 · meaning first (website table)', title: 'Eight common prepositions', ar: 'حُرُوفُ الْجَرِّ الشَّائِعَةُ', ltr: true,
      cols: [{ label: 'Preposition', w: 2.0, size: 26 }, { label: 'Core function', w: 3.0 }, { label: 'Worked example (website)', w: 4.6, size: 22 }, { label: 'Meaning', w: 2.73 }],
      rows: [
        { core: true, cells: ['فِي', 'in / inside / during', 'أَدْرُسُ فِي الْمَدْرَسَةِ.', 'I study at school.'] },
        { core: true, cells: ['إِلَى', 'to / towards', 'أَذْهَبُ إِلَى الْمَكْتَبَةِ.', 'I go to the library.'] },
        { core: true, cells: ['مِنْ', 'from / out of', 'عُدْتُ مِنَ السُّوقِ.', 'I returned from the market.'] },
        { core: true, cells: ['عَلَى', 'on / upon', 'الْكِتَابُ عَلَى الطَّاوِلَةِ.', 'The book is on the table.'] },
        { cells: ['عَنْ', 'about / away from', 'تَحَدَّثْنَا عَنِ الرِّحْلَةِ.', 'We spoke about the trip.'] },
        { cells: ['مَعَ', 'with (company)', 'ذَهَبْتُ مَعَ أُسْرَتِي.', 'I went with my family.'] },
        { cells: ['بِـ · لِـ', 'by / using · for', 'ذَهَبْتُ بِالْحَافِلَةِ.', 'I went by bus.'] },
      ],
      foot: 'Website meaning boundary: maʿa = accompanying someone; bi- = instrument, means or method. Compare dhahabtu maʿa akhī and dhahabtu bi-l-qiṭār.',
      notes: 'PART 1 (4 min) — website “Meaning first”. Act them out: in the box, to the door, from the door, on the desk.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · after a preposition: al-ism al-majrūr (website)', title: 'The noun after a preposition takes kasra', ar: 'الِاسْمُ الْمَجْرُورُ', ltr: true,
      cols: [{ label: 'Noun type', w: 3.0 }, { label: 'After a preposition', w: 4.4, size: 26 }, { label: 'Sign', w: 2.2 }, { label: 'Meaning', w: 2.73 }],
      rows: [
        { core: true, cells: ['definite', 'فِي الْبَيْتِ', 'kasra -i', 'in the house'] },
        { core: true, cells: ['indefinite', 'فِي بَيْتٍ', 'tanwīn -in', 'in a house'] },
        { cells: ['dual', 'إِلَى مَدْرَسَتَيْنِ', '-ayni', 'to two schools'] },
        { cells: ['sound masc. plural', 'مَعَ الْمُعَلِّمِينَ', '-īna', 'with the teachers'] },
        { cells: ['pronoun', 'فِيهِ · عَلَيْهَا · مِنْهُمْ', 'learn as units', 'in it · on her · from them'] },
      ],
      foot: 'Website warning: a pronoun attached to a preposition does not show a kasra in the same way — learn fīhi, ʿalayhā, minhum as complete units.',
      notes: 'PART 2 (3 min) — website “What happens after a preposition?”. Stretch rows recycle GM-N-03 duals and GM-N-04 plurals.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · attached bi- and li- · verb + preposition (website tables) · Develop / Stretch', title: 'No space — and learn the pair', ar: 'بِـ وَلِـ وَتَلَازُمُ الْأَفْعَالِ', ltr: true,
      cols: [{ label: 'Build', w: 3.4, size: 22 }, { label: 'Correct form', w: 3.4, size: 24 }, { label: 'Meaning', w: 2.6 }, { label: 'Notice', w: 2.93 }],
      rows: [
        { core: true, cells: ['بِـ + الْحَافِلَةِ', 'بِالْحَافِلَةِ', 'by the bus', 'bi- joins al-'] },
        { core: true, cells: ['لِـ + الطَّالِبِ', 'لِلطَّالِبِ', 'for the student', 'one lām: li-l-'] },
        { cells: ['لِـ + هُ', 'لَهُ', 'for him / he has', 'also bihi: with it'] },
        { cells: ['اِسْتَمَعَ', 'اِسْتَمَعْتُ إِلَى الْمُوسِيقَى', 'listened to', 'istamaʿa ilā'] },
        { cells: ['اِهْتَمَّ', 'أَهْتَمُّ بِالْبِيئَةِ', 'interested in', 'ihtamma bi-'] },
        { cells: ['بَحَثَ', 'بَحَثْتُ عَنِ الْمَعْلُومَاتِ', 'looked for', 'baḥatha ʿan'] },
      ],
      foot: 'Website: do not write bi l-bayt or li l-madrasa with a space. Memory method: learn istamaʿa ilā — not only istamaʿa. The pair is the usable unit.',
      notes: 'PART 3 (3 min) — website “Attached prepositions” and “Choose the preposition the verb needs”.',
    },
  ],
  quick: [
    W(/Meaning Check/, 0, { prompt: 'I travelled ___ my parents.', feedback: 'Company: maʿa.' }),
    W(/Meaning Check/, 1, { prompt: 'I travelled ___ train.', feedback: 'Means of transport: bi-.' }),
    W(/Meaning Check/, 2, { prompt: 'We spoke ___ technology.', feedback: 'The topic follows ʿan.' }),
    W(/Attached Form/, 1, { prompt: 'Which means “for the school”?', feedback: 'li- + al- = li-l-.' }),
  ],
  quickNote: 'website Meaning and Attached Form checks.',
  ido: {
    title: 'Watch me write a message with prepositions',
    steps: [
      { head: 'Where am I?', ar: 'فِي مَدْرَسَتِي', think: 'fī = in.' },
      { head: 'Where to?', ar: 'إِلَى الْمَكْتَبَةِ', think: 'ilā + kasra.' },
      { head: 'With whom? How?', ar: 'مَعَ صَدِيقَتِي بِالْحَافِلَةِ', think: 'maʿa = person; bi- = means.' },
      { head: 'About what?', ar: 'عَنِ الْعُطْلَةِ', think: 'ʿan = topic.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'PREPOSITION', e: 'ATTACHED bi- / li-' },
    model: 'أَنَا {k|فِي} مَدْرَسَتِي الْآنَ، وَسَأَذْهَبُ {k|إِلَى} الْمَكْتَبَةِ بَعْدَ الدَّرْسِ. ذَهَبْتُ {k|مَعَ} صَدِيقَتِي {e|بِالْحَافِلَةِ}، وَتَحَدَّثْنَا {k|عَنِ} الْعُطْلَةِ.',
    modelEn: 'I am at my school now, and I will go to the library after the lesson. I went with my friend by bus, and we talked about the holiday.',
    notes: 'Website skills-workshop model. ʿani l-ʿuṭla: ʿan takes kasra before al- (helping vowel).',
  },
  models: [
    { ar: 'الْكِتَابُ عَلَى الطَّاوِلَةِ.', en: 'The book is on the table.', tip: 'Surface.' },
    { ar: 'هَذِهِ هَدِيَّةٌ لِصَدِيقَتِي.', en: 'This is a gift for my friend.', tip: 'li-.' },
    { ar: 'عُدْنَا مِنَ الرِّحْلَةِ.', en: 'We returned from the trip.', tip: 'min + kasra.' },
    { ar: 'أَهْتَمُّ بِالْبِيئَةِ.', en: 'I care about the environment.', tip: 'ihtamma bi-.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · retrieve the preposition (website game) · say it aloud', title: 'Which preposition completes it?', ar: 'أَكْمِلْ بِحَرْفِ الْجَرِّ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Sentence', w: 5.4, size: 22 }, { label: 'Answer', w: 2.4, size: 26 }, { label: 'Why', w: 4.53 }],
      rows: [
        { core: true, cells: ['أَدْرُسُ … الْمَدْرَسَةِ.', 'فِي', 'location'] },
        { core: true, cells: ['أَذْهَبُ … الْمَكْتَبَةِ.', 'إِلَى', 'direction'] },
        { core: true, cells: ['عُدْتُ … السُّوقِ.', 'مِنَ', 'source'] },
        { cells: ['تَحَدَّثْنَا … الرِّحْلَةِ.', 'عَنِ', 'topic'] },
        { cells: ['ذَهَبْتُ … صَدِيقِي.', 'مَعَ', 'company'] },
        { cells: ['سَافَرْنَا … الْقِطَارِ.', 'بِـ', 'means: bi-l-qiṭāri'] },
      ],
      foot: 'Website game: choose the preposition that completes the meaning. Min and ʿan take a helping vowel before al- (mina, ʿani).',
      notes: 'WE DO (3 min) — website game items. Cover column 2.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · company or means?', title: 'With a person, or by a means?', ar: 'مَعَ أَمْ بِـ؟',
      categories: ['maʿa (company)', 'bi- (means / method)'],
      items: [['مَعَ أَخِي', 0], ['مَعَ أُسْرَتِي', 0], ['مَعَ صَدِيقَتِي', 0], ['مَعَ الْمُعَلِّمِ', 0], ['بِالْقِطَارِ', 1], ['بِالْحَافِلَةِ', 1], ['بِالْقَلَمِ', 1], ['بِالسَّيَّارَةِ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Website meaning boundary. Ask: “I went with the bus” — maʿa or bi-? (bi-).',
    },
  ],
  mistakes: [
    { wrong: 'أَذْهَبُ فِي الْمَدْرَسَةِ', right: 'أَذْهَبُ إِلَى الْمَدْرَسَةِ', why: 'Movement towards a destination = ilā (website clinic).' },
    { wrong: 'ذَهَبْتُ مَعَ الْحَافِلَةِ', right: 'ذَهَبْتُ بِالْحَافِلَةِ', why: 'Means of transport uses bi- (website clinic).' },
    { wrong: 'هَدِيَّةٌ لِ الطَّالِبُ', right: 'هَدِيَّةٌ لِلطَّالِبِ', why: 'Attach li- and use the genitive (website clinic).' },
  ],
  hints: ['Being there or going there?', 'Person or means?', 'Space? Ending?'],
  practice: [
    W(/Genitive Form/, 0, { prompt: 'Choose the fully marked “in a school”.', feedback: 'Indefinite after fī: tanwīn kasr.' }),
    W(/Genitive Form/, 1, { prompt: 'Choose “with the teachers”.', feedback: 'Sound masculine plural after a preposition: -īna.' }),
    W(/Attached Form/, 2, { prompt: 'Choose “for him”.', feedback: 'The established form is lahu.' }),
    W(/Final Mastery/, 5, { prompt: 'Complete: “I looked ___ the book.”', feedback: 'The collocation is baḥatha ʿan.' }),
  ],
  practiceLabel: 'website Genitive, Attached Form and Final Mastery checks',
  read: {
    title: 'A message from Laylā', label: 'website skills workshop (teacher-written message)',
    text: 'مَرْحَبًا يَا سَارَةُ! أَنَا الْآنَ فِي الْمَكْتَبَةِ مَعَ أَخِي. جِئْنَا مِنَ الْبَيْتِ بِالدَّرَّاجَةِ. أَبْحَثُ عَنْ كِتَابٍ عَنِ الْفَضَاءِ لِمَشْرُوعِ الْعُلُومِ. الْكُتُبُ هُنَا عَلَى رُفُوفٍ عَالِيَةٍ! بَعْدَ سَاعَةٍ سَنَذْهَبُ إِلَى الْمَطْعَمِ، وَعِنْدِي هَدِيَّةٌ لَكِ. إِلَى اللِّقَاءِ!',
    glossary: [['جِئْنَا', 'we came'], ['بِالدَّرَّاجَةِ', 'by bicycle'], ['الْفَضَاءِ', 'space'], ['رُفُوفٍ', 'shelves'], ['عَالِيَةٍ', 'high']],
    task: 'Website: circle every preposition and draw an arrow to the noun or pronoun it governs.',
    questions: [
      q('Who is Laylā with?', ['her brother', 'Sārah', 'her mother'], 'Maʿa akhī.'),
      q('How did they come?', ['by bicycle', 'by bus', 'on foot'], 'Bi-d-darrāja.'),
      q('What is she looking for?', ['a book about space', 'a restaurant', 'a gift'], 'Abḥathu ʿan kitābin ʿani l-faḍāʾ.'),
      q('Which phrase means “for you (f.)”?', ['لَكِ', 'لِمَشْرُوعِ', 'إِلَى اللِّقَاءِ'], 'li- + ki = laki.'),
    ],
    qNote: 'Teacher-written message for the website skills workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: where, who, how, what about?', source: 'website skills workshop',
    prompts: [
      { route: 'core', ar: 'أَيْنَ أَنْتَ الْآنَ؟ وَإِلَى أَيْنَ تَذْهَبُ بَعْدَ الْمَدْرَسَةِ؟' },
      { route: 'develop', ar: 'مَعَ مَنْ تَذْهَبُ إِلَى الْمَدْرَسَةِ؟ وَكَيْفَ؟' },
      { route: 'stretch', ar: 'عَمَّ تَتَحَدَّثُ مَعَ أَصْدِقَائِكَ؟ وَبِمَاذَا تَهْتَمُّ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَنَا فِي ______ ، وَسَأَذْهَبُ إِلَى ______ .' },
      { route: 'develop', ar: 'أَذْهَبُ مَعَ ______ ، وَأُسَافِرُ ______ .' },
      { route: 'stretch', ar: 'نَتَحَدَّثُ عَنْ ______ ، وَأَهْتَمُّ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَيْفَ تَذْهَبِينَ إِلَى الْمَدْرَسَةِ؟', en: 'How do you go to school? (to a girl)' },
      { who: 'B', ar: 'أَذْهَبُ مَعَ أُخْتِي بِالسَّيَّارَةِ. فِي الطَّرِيقِ نَتَحَدَّثُ عَنِ الدُّرُوسِ، وَنَسْتَمِعُ إِلَى الْقُرْآنِ.', en: 'I go with my sister by car. On the way we talk about lessons and listen to the Qur’an.' },
    ],
    notes: 'Website: a spoken description using where, where to, with whom, how and about what.',
  },
  write: {
    siteTask: 'Write 60–80 Arabic words telling a friend where you are, where you are going, who is with you, how you will travel and what you will talk about.',
    core: { amount: '5 sentences', task: 'Where I am, where I go, who with.', how: 'fī · ilā · maʿa.' },
    develop: { amount: '7 sentences', task: 'Add how you travel and a gift for someone.', how: 'bi-l- · li-l- (no space).' },
    stretch: { amount: '60–80 words', task: 'Website message with six prepositions and a verb–preposition pair.', how: 'Check every noun ending.' },
  },
  frames: {
    core: [
      { en: 'I am in …', ar: 'أَنَا فِي ______ .' },
      { en: 'I am going to …', ar: 'سَأَذْهَبُ إِلَى ______ .' },
      { en: 'I came back from …', ar: 'رَجَعْتُ مِنَ ______ .' },
      { en: 'I went with …', ar: 'ذَهَبْتُ مَعَ ______ .' },
    ],
    develop: [
      { en: 'We travelled by train to …', ar: 'سَافَرْنَا بِالْقِطَارِ إِلَى ______ .' },
      { en: 'This gift is for …', ar: 'هَذِهِ الْهَدِيَّةُ ______ .' },
      { en: 'We talked about …', ar: 'تَحَدَّثْنَا عَنِ ______ .' },
      { en: 'I listen to …', ar: 'أَسْتَمِعُ إِلَى ______ .' },
    ],
    bank: ['فِي', 'إِلَى', 'مِنْ', 'عَلَى', 'عَنْ', 'مَعَ', 'بِالْحَافِلَةِ', 'بِالْقِطَارِ', 'لِلطَّالِبِ', 'لَهُ', 'لَهَا', 'اِسْتَمَعَ إِلَى', 'بَحَثَ عَنْ'],
  },
  stretchTask: {
    task: 'Website practical message: 60–80 words to a friend — where, where to, with whom, how, about what.',
    checklist: ['Six different prepositions.', 'Bi- and li- attached (bi-l-, li-l-).', 'Kasra on every noun after a preposition.', 'One verb–preposition pair.', 'maʿa for people, bi- for means.'],
    phrases: [['بَعْدَ الدَّرْسِ', 'after the lesson'], ['فِي الطَّرِيقِ', 'on the way'], ['إِلَى اللِّقَاءِ', 'see you'], ['عِنْدِي … لَكَ', 'I have … for you'], ['بِالسَّيَّارَةِ', 'by car'], ['عَنِ الْعُطْلَةِ', 'about the holiday']],
  },
  model: {
    text: 'أَهْلًا يَا عُمَرُ! أَنَا الْآنَ فِي الْبَيْتِ، وَسَأَذْهَبُ بَعْدَ الْعَصْرِ إِلَى النَّادِي مَعَ أَبِي. سَنُسَافِرُ بِالْحَافِلَةِ، لِأَنَّ السَّيَّارَةَ عِنْدَ الْمِيكَانِيكِيِّ. بَعْدَ التَّدْرِيبِ سَنَرْجِعُ مِنَ النَّادِي إِلَى بَيْتِ جَدِّي، وَسَنَتَحَدَّثُ عَنْ مُبَارَاةِ الْأُسْبُوعِ الْقَادِمِ. عِنْدِي قَمِيصٌ جَدِيدٌ لَكَ، وَسَأَضَعُهُ عَلَى مَكْتَبِكَ غَدًا. أَبْحَثُ أَيْضًا عَنْ كِتَابٍ لِلْمُدَرِّبِ. مَعَ السَّلَامَةِ!',
    en: 'Hello ʿUmar! I am at home now, and after ʿAṣr I will go to the club with my father. We will travel by bus, because the car is at the mechanic’s. After training we will go back from the club to my grandfather’s house, and we will talk about next week’s match. I have a new shirt for you, and I will put it on your desk tomorrow. I am also looking for a book for the coach. Goodbye!',
    find: ['location / direction', 'company / means', 'topic', 'li- / bi-'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'I chose each preposition by its meaning.' },
    { route: 'core', text: 'maʿa for people; bi- for means.' },
    { route: 'develop', text: 'Bi- and li- are attached (bi-l-, li-l-).' },
    { route: 'develop', text: 'Nouns after prepositions end in kasra.' },
    { route: 'stretch', text: 'I used a verb–preposition pair.' },
  ],
  exit: [
    W(/Final Mastery/, 0, { prompt: 'Choose “from the library”.', feedback: 'Source: min.' }),
    W(/Final Mastery/, 3, { prompt: 'Correct spelling: “for the teacher”.', feedback: 'li-l- + genitive noun.' }),
    W(/Final Mastery/, 6, { prompt: 'Choose “in two rooms”.', feedback: 'Dual genitive: -ayni.' }),
  ],
  mastery: false,
  prep: {
    words: [['أَمَامَ', 'in front of', 'أَمَامَ الْبَيْتِ'], ['خَلْفَ', 'behind', 'خَلْفَ الْمَدْرَسَةِ'], ['بَيْنَ', 'between', 'بَيْنَ الْبَيْتَيْنِ'], ['قَبْلَ', 'before', 'قَبْلَ الدَّرْسِ'], ['بَعْدَ', 'after', 'بَعْدَ الصَّلَاةِ']],
    questionEn: 'These words also take a noun with kasra. Can you say “in front of the school”?',
    questionAr: '______ الْمَدْرَسَةِ',
    homework: {
      core: 'Write eight sentences, one for each preposition.',
      develop: 'Write five sentences with bi-l- and li-l-.',
      stretch: 'Website message (60–80 words) with six prepositions.',
    },
    wordsSource: 'The five words prepare GM-CP-02 (website: spatial and temporal locators).',
  },
  remember: 'Remember: choose by meaning — fī in · ilā to · min from · ʿalā on · ʿan about · maʿa with (person) · bi- by (means) · li- for · the noun after takes kasra · bi-l- / li-l- with no space.',
});

module.exports = { meta, slides };
