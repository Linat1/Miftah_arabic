'use strict';
/* GM-CASE-01 · The Nominative Case — website: Mastery & Revision › Grammar › Case Endings › Lesson 1 (case as a role system: the
 * three-case map; the nominative jobs — subject of a verb, topic and simple predicate; nominative forms: -u, -un, -āni, -ūna, -ātu /
 * -ātun; noun–adjective case agreement; links to kāna, inna and laysa; clinic). Quizzes are the website’s (Readiness, Mini-check:
 * subjects, Mini-check: nominal sentences, Final Mastery); the two Readiness items whose options are bare vowel marks are skipped.
 * Colour code for this area: teal = verb / particle, blue = nominative words. I-do, meaning → sentence drill, nominative sorter,
 * reading, frames and the extended model are teacher-made on the website content (the drill uses the website game items). */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__12-case-endings__grammar-mastery-01-nominative';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-CASE-01', fileTitle: 'Nominative', title: 'The Nominative Case', arabic: 'حَالَةُ الرَّفْعِ',
  focus: 'Case endings are role signals. The nominative (-u / -un) marks the doer (kataba ṭ-ṭālibu), the topic and the simple predicate (al-jawwu jamīlun). Duals show -āni, sound plurals -ūna and -ātu — and adjectives copy the case.',
  icon: 'FaCrown',
});

const slides = G.gmLesson({
  code: 'GM-CASE-01', site: KEY,
  support: `• Core: find the doer of a verb and the topic of a nominal sentence; add -u (definite) or -un (indefinite). Develop: dual -āni, sound masculine plural -ūna, sound feminine plural -ātu / -ātun, and adjectives that copy the case. Stretch: explain what changes after kāna, inna and laysa; edit a paragraph for role, case and agreement.
• Website warning: never choose the case by position alone — the first noun is not automatically nominative. Ask first: what is this word’s job?
• Website: communication before parsing — learners need to recognise the main roles and keep endings consistent in supported work, not label every word. Recycles GM-VS (roles) and GM-NVS (topic, predicate, kāna, inna).`,
  teach: 'The case map; subjects; topic + predicate; forms; adjectives; kāna and inna.',
  wedo: 'Meaning → sentence; nominative or not?; repair.',
  next: { nextCode: 'GM-CASE-02', nextTitle: 'The Accusative Case', nextAr: 'حَالَةُ النَّصْبِ' },
  doNow: {
    questions: [
      W(/Readiness Check/, 0, { prompt: 'Which noun is the doer: كَتَبَ الطَّالِبُ الرِّسَالَةَ', feedback: 'The student does the writing: aṭ-ṭālibu.' }),
      W(/Readiness Check/, 1, { feedback: 'Topic and predicate: both -u / -un.' }),
      W(/Readiness Check/, 4, { feedback: 'The adjective copies -un.' }),
      W(/Readiness Check/, 5, { feedback: 'Dual nominative: -āni.' }),
      W(/subjects/, 0, { prompt: 'Choose the correct verb-first sentence.', feedback: 'The subject after the verb: -u.' }),
    ],
    keyIdea: { text: 'Find the job first, then the ending. Doer, topic and simple predicate → nominative (-u / -un).', ar: '{k|كَتَبَ} {w|الطَّالِبُ} الرِّسَالَةَ ‖ {w|الْجَوُّ جَمِيلٌ}' },
    retrieves: 'The website Readiness Check — GM-VS-01 sentence roles and GM-NVS-01 topic + predicate.',
  },
  objectives: ['Find the doer and the topic.', 'Use -u and -un correctly.', 'Use the dual and plural nominative endings.', 'Make adjectives copy the case.'],
  routes: {
    core: ['I find the doer and give it -u.', 'I write topic + predicate with -u / -un.'],
    develop: ['I use -āni, -ūna, -ātu.', 'I make adjectives match in case.'],
    stretch: ['I explain kāna, inna and laysa.', 'I edit a 90–110-word school update.'],
  },
  terms: {
    items: [
      { ar: 'الْإِعْرَابُ', en: 'case endings (role signals)', note: 'الْكِتَابُ · الْكِتَابَ · الْكِتَابِ' },
      { ar: 'الرَّفْعُ', en: 'the nominative case', note: 'الطَّالِبُ · طَالِبٌ' },
      { ar: 'الضَّمَّةُ', en: 'ḍamma: -u', note: 'الْجَوُّ' },
      { ar: 'تَنْوِينُ الضَّمِّ', en: 'ḍammatān: -un', note: 'جَمِيلٌ' },
      { ar: 'الْفَاعِلُ', en: 'the doer of a verb', note: 'وَصَلَ الْمُعَلِّمُ' },
      { ar: 'الْمُبْتَدَأُ وَالْخَبَرُ', en: 'topic and predicate', note: 'الْمُدِيرُ مَشْغُولٌ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 1 · the three-case map (website table)', title: 'Case is a role system — not decoration', ar: 'خَرِيطَةُ الْإِعْرَابِ', ltr: true,
      cols: [{ label: 'Case', w: 2.6, size: 24 }, { label: 'Core question', w: 4.0 }, { label: 'Example', w: 2.4, size: 22 }, { label: 'Main jobs', w: 3.33 }],
      rows: [
        { core: true, cells: ['الرَّفْعُ', 'Who / what is the doer or topic?', 'الْكِتَابُ · كِتَابٌ', 'doer, topic, predicate'] },
        { cells: ['النَّصْبُ', 'Who / what receives the action?', 'الْكِتَابَ · كِتَابًا', 'object, some adverbs'] },
        { cells: ['الْجَرُّ', 'What follows a preposition or completes an iḍāfa?', 'الْكِتَابِ · كِتَابٍ', 'after fī, min …; iḍāfa'] },
      ],
      foot: 'Website warning: do not choose by position. The first noun is not automatically nominative, and the last noun is not automatically genitive. In everyday unvowelled Arabic these short vowels are often not written — but the grammar still controls agreement.',
      notes: 'PART 1 (2 min) — website “The three-case map”. Today: row 1 only. Lessons 2 and 3 cover the accusative and genitive.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · where the nominative appears (website models)', title: 'The doer, the topic and the predicate', ar: 'مَوَاضِعُ الرَّفْعِ', ltr: true,
      cols: [{ label: 'Job', w: 3.0 }, { label: 'Website model', w: 5.6, size: 24 }, { label: 'Nominative word(s)', w: 3.73, size: 22 }],
      rows: [
        { core: true, cells: ['doer of a verb', 'فَتَحَ الْحَارِسُ الْبَابَ.', 'الْحَارِسُ'] },
        { cells: ['doer (indefinite)', 'وَصَلَتْ حَافِلَةٌ جَدِيدَةٌ.', 'حَافِلَةٌ جَدِيدَةٌ'] },
        { cells: ['doer (dual)', 'حَضَرَ الطَّالِبَانِ الْجَدِيدَانِ.', 'الطَّالِبَانِ الْجَدِيدَانِ'] },
        { core: true, cells: ['topic + predicate', 'الْمُدِيرُ مَشْغُولٌ.', 'الْمُدِيرُ · مَشْغُولٌ'] },
        { cells: ['this + predicate', 'هَذِهِ مَدْرَسَةٌ كَبِيرَةٌ.', 'مَدْرَسَةٌ كَبِيرَةٌ'] },
        { core: true, cells: ['plural predicate', 'الطُّلَّابُ مُسْتَعِدُّونَ.', 'الطُّلَّابُ · مُسْتَعِدُّونَ'] },
      ],
      foot: 'Website: the doer of the action is nominative — even when it comes after the verb. A present nominal sentence begins with a nominative topic and gives a nominative predicate.',
      notes: 'PART 2 (3 min) — website “The subject of a verbal sentence” and “Topic and predicate”. Ask for each: what is its job?',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · the nominative forms (website table) · Develop', title: 'Six shapes of the nominative', ar: 'عَلَامَاتُ الرَّفْعِ', ltr: true,
      cols: [{ label: 'Noun type', w: 4.0 }, { label: 'Nominative', w: 3.6, size: 26 }, { label: 'Signal', w: 4.73 }],
      rows: [
        { core: true, cells: ['definite singular', 'الطَّالِبُ', 'ḍamma: -u'] },
        { core: true, cells: ['indefinite singular', 'طَالِبٌ', 'ḍammatān: -un'] },
        { cells: ['dual', 'طَالِبَانِ', '-āni'] },
        { cells: ['sound masculine plural', 'مُعَلِّمُونَ', '-ūna'] },
        { cells: ['sound feminine plural (definite)', 'الطَّالِبَاتُ', '-ātu'] },
        { cells: ['sound feminine plural (indefinite)', 'طَالِبَاتٌ', '-ātun'] },
      ],
      foot: 'Duals and sound plurals show the case even in unvowelled writing: -āni / -ūna are nominative; -ayni / -īna are not (Lessons 2–3).',
      notes: 'PART 3 (3 min) — website “Nominative forms”. Core: rows 1–2. Choral: say the six forms with a fist-bump on the ending.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 4 · noun–adjective case agreement (website table) · Develop', title: 'The adjective copies the case too', ar: 'الصِّفَةُ تَتْبَعُ الْمَوْصُوفَ', ltr: true,
      cols: [{ label: 'Type', w: 3.4 }, { label: 'Noun + adjective', w: 4.4, size: 26 }, { label: 'Why', w: 4.53 }],
      rows: [
        { core: true, cells: ['definite', 'الطَّالِبُ الْمُجْتَهِدُ', 'both al-, both -u'] },
        { core: true, cells: ['indefinite', 'طَالِبٌ مُجْتَهِدٌ', 'both -un'] },
        { cells: ['dual', 'طَالِبَانِ مُجْتَهِدَانِ', 'both -āni'] },
        { cells: ['human plural', 'مُعَلِّمُونَ جَدِيدُونَ', 'both -ūna'] },
        { cells: ['non-human plural', 'كُتُبٌ جَدِيدَةٌ', 'adjective: feminine singular, -un'] },
      ],
      foot: 'Website common partial correction: changing the noun ending but leaving the adjective unchanged is still an error. Check the pair as one unit: jāʾa ṭālibun jadīdun.',
      notes: 'PART 4 (2 min) — website “Noun–adjective case agreement”.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 5 · links to kāna, inna and laysa (website table) · Stretch', title: 'The particle changes the job — and the ending', ar: 'مَعَ كَانَ وَإِنَّ وَلَيْسَ', ltr: true,
      cols: [{ label: 'Structure', w: 5.0, size: 24 }, { label: 'Topic / noun', w: 3.6 }, { label: 'Predicate', w: 3.73 }],
      rows: [
        { core: true, cells: ['الطَّالِبُ مُجْتَهِدٌ.', 'nominative (-u)', 'nominative (-un)'] },
        { cells: ['كَانَ الطَّالِبُ مُجْتَهِدًا.', 'nominative (-u)', 'accusative (-an)'] },
        { cells: ['لَيْسَ الطَّالِبُ مُجْتَهِدًا.', 'nominative (-u)', 'accusative (-an)'] },
        { cells: ['إِنَّ الطَّالِبَ مُجْتَهِدٌ.', 'accusative (-a)', 'nominative (-un)'] },
      ],
      foot: 'Website editing shortcut: circle kāna (or a sister), underline its noun, box its predicate. With inna, reverse the two cases. The word’s meaning has not changed — its grammatical job has.',
      notes: 'PART 5 (2 min) — website “Connections to kāna and inna” (laysa row teacher-added from GM-NVS-04).',
    },
  ],
  quick: [
    W(/subjects/, 1, { prompt: 'Choose the correct feminine subject.', feedback: 'The subject stays -u: al-muʿallimatu.' }),
    W(/subjects/, 2, { prompt: 'Choose the correct indefinite subject.', feedback: 'Indefinite subject: -un.' }),
    W(/subjects/, 3, { prompt: 'Choose the subject with its adjective.', feedback: 'Both -āni.' }),
    W(/nominal sentences/, 0, { feedback: 'Topic and predicate: -u / -un.' }),
  ],
  quickNote: 'website mini-checks: subjects and nominal sentences.',
  ido: {
    title: 'Watch me mark the nominative in a school update',
    steps: [
      { head: 'Verb', ar: 'وَصَلَ', think: 'Who arrived?' },
      { head: 'Doer', ar: 'مُعَلِّمٌ', think: 'Indefinite: -un.' },
      { head: 'Adjective', ar: 'جَدِيدٌ', think: 'Copies -un.' },
      { head: 'Topic + predicate', ar: 'الْمُعَلِّمُ خَبِيرٌ', think: 'Both nominative.' },
    ],
    legend: ['k', 'w'], legendLabels: { k: 'VERB', w: 'NOMINATIVE' },
    model: '{k|وَصَلَ} {w|مُعَلِّمٌ جَدِيدٌ} إِلَى الْمَدْرَسَةِ. {w|الْمُعَلِّمُ خَبِيرٌ}. {w|الطُّلَّابُ سَعِيدُونَ}. {k|حَضَرَ} {w|الطَّالِبَانِ الْجَدِيدَانِ} الدَّرْسَ الْأَوَّلَ. {w|الْكُتُبُ جَدِيدَةٌ}. {k|كَانَ} {w|الْيَوْمُ} مُمْتِعًا.',
    modelEn: 'A new teacher arrived at the school. The teacher is an expert. The students are happy. The two new students attended the first lesson. The books are new. The day was enjoyable.',
    notes: 'Built on the website reading lines. Point out ad-darsa and mumtiʿan — not nominative (object; predicate of kāna).',
  },
  models: [
    { ar: 'فَتَحَ الْحَارِسُ الْبَابَ.', en: 'The guard opened the door.', tip: 'Doer: -u.' },
    { ar: 'وَصَلَتْ حَافِلَةٌ جَدِيدَةٌ.', en: 'A new bus arrived.', tip: 'Indefinite: -un + -un.' },
    { ar: 'الطُّلَّابُ مُسْتَعِدُّونَ.', en: 'The students are ready.', tip: 'Plural: -ūna.' },
    { ar: 'الطَّالِبَاتُ مُجْتَهِدَاتٌ.', en: 'The female students are hardworking.', tip: '-ātu + -ātun.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · meaning → nominative sentence (website game)', title: 'Say it with the right signals', ar: 'قُلْهَا بِالرَّفْعِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Meaning', w: 3.9 }, { label: 'Arabic', w: 5.2, size: 24 }, { label: 'Signal', w: 3.23 }],
      rows: [
        { core: true, cells: ['The student arrived.', 'وَصَلَ الطَّالِبُ.', '-u'] },
        { core: true, cells: ['A new teacher entered.', 'دَخَلَ مُعَلِّمٌ جَدِيدٌ.', '-un + -un'] },
        { cells: ['The two pupils are ready.', 'الطَّالِبَانِ مُسْتَعِدَّانِ.', '-āni + -āni'] },
        { cells: ['The engineers arrived.', 'وَصَلَ الْمُهَنْدِسُونَ.', '-ūna'] },
        { cells: ['The female pupils are hardworking.', 'الطَّالِبَاتُ مُجْتَهِدَاتٌ.', '-ātu + -ātun'] },
        { core: true, cells: ['The books are useful.', 'الْكُتُبُ مُفِيدَةٌ.', 'things: f. singular'] },
      ],
      foot: 'Website strategy: find the role first, then choose the ending — never by sound alone.',
      notes: 'WE DO (3 min) — website game items. Cover column 2; students build each sentence aloud.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · read the signal', title: 'Nominative or not?', ar: 'مَرْفُوعٌ أَمْ لَا؟',
      categories: ['Nominative', 'Not nominative'],
      items: [['الطَّالِبُ', 0], ['كِتَابٌ', 0], ['طَالِبَانِ', 0], ['مُعَلِّمُونَ', 0], ['الطَّالِبَ', 1], ['كِتَابًا', 1], ['طَالِبَيْنِ', 1], ['مُعَلِّمِينَ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). The “not nominative” forms are previews of Lessons 2–3 (-a, -an, -ayni, -īna).',
    },
  ],
  mistakes: [
    { wrong: 'قَرَأَ الطَّالِبَ الْكِتَابُ.', right: 'قَرَأَ الطَّالِبُ الْكِتَابَ.', why: 'Doer -u; the thing read -a (website clinic).' },
    { wrong: 'جَاءَ طَالِبٌ جَدِيدًا.', right: 'جَاءَ طَالِبٌ جَدِيدٌ.', why: 'The adjective copies the noun’s case (website clinic).' },
    { wrong: 'حَضَرَ الْمُعَلِّمِينَ.', right: 'حَضَرَ الْمُعَلِّمُونَ.', why: 'A plural doer takes -ūna (website clinic).' },
  ],
  hints: ['Who did the reading?', 'Does the adjective match?', 'Which plural ending is nominative?'],
  practice: [
    W(/nominal sentences/, 1, { feedback: 'Plural predicate: -ūna.' }),
    W(/nominal sentences/, 2, { feedback: '-ātu + -ātun.' }),
    W(/nominal sentences/, 3, { feedback: 'Topic -u; things → feminine singular -un.' }),
    W(/Final Mastery/, 1, { feedback: 'Doer -u, object -a.' }),
  ],
  practiceLabel: 'website mini-check: nominal sentences and Final Mastery',
  read: {
    title: 'A new teacher', label: 'website reading and noticing (extended school update)',
    text: 'وَصَلَ مُعَلِّمٌ جَدِيدٌ إِلَى مَدْرَسَتِنَا هَذَا الْأُسْبُوعَ. الْمُعَلِّمُ خَبِيرٌ فِي الْعُلُومِ، وَهُوَ لَطِيفٌ وَصَبُورٌ. حَضَرَ الطُّلَّابُ الدَّرْسَ الْأَوَّلَ فِي الْمُخْتَبَرِ. الْمُخْتَبَرُ كَبِيرٌ وَحَدِيثٌ، وَالْأَجْهِزَةُ جَدِيدَةٌ. شَارَكَتْ طَالِبَتَانِ نَشِيطَتَانِ فِي تَجْرِبَةٍ مُمْتِعَةٍ. فِي نِهَايَةِ الدَّرْسِ كَانَ الطُّلَّابُ سُعَدَاءَ، وَالْمُعَلِّمُ مَسْرُورٌ.',
    glossary: [['خَبِيرٌ', 'an expert'], ['الْمُخْتَبَرِ', 'the lab'], ['الْأَجْهِزَةُ', 'the equipment'], ['تَجْرِبَةٍ', 'an experiment'], ['سُعَدَاءَ', 'happy (pl.)']],
    task: 'Website: underline every nominative doer or topic, circle the predicates, and explain why jadīdun matches muʿallimun.',
    questions: [
      q('What does the new teacher teach?', ['science', 'Arabic', 'maths'], 'Khabīrun fī l-ʿulūm.'),
      q('Find a nominative dual.', ['طَالِبَتَانِ نَشِيطَتَانِ', 'الطُّلَّابُ', 'تَجْرِبَةٍ'], 'Both words end in -āni.'),
      q('Why is it jadīdatun with al-ajhizatu?', ['things → feminine singular', 'it is a mistake', 'only one machine'], 'Non-human plural predicate.'),
      q('Which word is NOT nominative?', ['الدَّرْسَ', 'الْمُعَلِّمُ', 'الْمُخْتَبَرُ'], 'Ad-darsa is the object (-a).'),
    ],
    qNote: 'Website reading lines, extended by the teacher; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: describe your class', source: 'website speaking frame',
    prompts: [
      { route: 'core', ar: 'صِفْ صَفَّكَ.' },
      { route: 'develop', ar: 'مَنْ حَضَرَ إِلَى الْمَدْرَسَةِ الْيَوْمَ؟' },
      { route: 'stretch', ar: 'صِفْ مَدْرَسَتَكَ: الْمَكَانَ وَالنَّاسَ.' },
    ],
    stems: [
      { route: 'core', ar: 'صَفِّي ______ ، وَالْمُعَلِّمُ ______ .' },
      { route: 'develop', ar: 'حَضَرَ ______ ، وَوَصَلَ ______ .' },
      { route: 'stretch', ar: 'الطُّلَّابُ ______ ، وَالْكُتُبُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَيْفَ صَفُّكِ هَذِهِ السَّنَةَ؟', en: 'How is your class this year? (to a girl)' },
      { who: 'B', ar: 'صَفِّي كَبِيرٌ وَمُرِيحٌ. الطَّالِبَاتُ لَطِيفَاتٌ، وَالْمُعَلِّمَتَانِ نَشِيطَتَانِ. وَصَلَتْ كُتُبٌ جَدِيدَةٌ أَمْسِ.', en: 'My class is big and comfortable. The girls are kind, and the two teachers are energetic. New books arrived yesterday.' },
    ],
    notes: 'Website frame: verb + doer · al-madrasatu + predicate · aṭ-ṭullābu + plural predicate · al-kutubu + feminine singular adjective.',
  },
  write: {
    siteTask: 'Write 90–110 Arabic words describing a school day, a new person or a class event.',
    core: { amount: '5 sentences', task: 'Your class: two doers and three nominal sentences.', how: 'waṣala … · al-madrasatu kabīratun.' },
    develop: { amount: '7 sentences', task: 'Add a dual, a sound plural and four noun–adjective pairs.', how: '-āni · -ūna · -ātun.' },
    stretch: { amount: '90–110 words', task: 'Website school update with full endings on the target nouns.', how: 'Plan: role → number → ending.' },
  },
  frames: {
    core: [
      { en: 'A new … arrived', ar: 'وَصَلَ ______ جَدِيدٌ.' },
      { en: 'The school is …', ar: 'الْمَدْرَسَةُ ______ .' },
      { en: 'The teacher (f.) is …', ar: 'الْمُعَلِّمَةُ ______ .' },
      { en: 'The … entered the class', ar: 'دَخَلَ ______ الصَّفَّ.' },
    ],
    develop: [
      { en: 'The students are …', ar: 'الطُّلَّابُ ______ .' },
      { en: 'The two teachers are …', ar: 'الْمُعَلِّمَانِ ______ .' },
      { en: 'The female students are …', ar: 'الطَّالِبَاتُ ______ .' },
      { en: 'The books are …', ar: 'الْكُتُبُ ______ .' },
    ],
    bank: ['جَدِيدٌ', 'كَبِيرَةٌ', 'لَطِيفٌ', 'مُفِيدَةٌ', 'سَعِيدُونَ', 'مُسْتَعِدُّونَ', 'نَشِيطَانِ', 'مُجْتَهِدَاتٌ', 'خَبِيرٌ', 'مُعَلِّمٌ', 'طَالِبَةٌ', 'الْمُدِيرُ', 'الطُّلَّابُ'],
  },
  stretchTask: {
    task: 'Website school update (90–110 words): a school day, a new person or a class event.',
    checklist: ['Two verbal-sentence doers.', 'Two nominal sentences.', 'One dual or sound plural.', 'Four noun–adjective pairs that agree in case.', 'Full endings on the target nouns only.'],
    phrases: [['وَصَلَ', 'arrived'], ['حَضَرَ', 'attended / came'], ['بَدَأَ', 'began'], ['مُتَحَمِّسٌ', 'excited'], ['مُنَظَّمٌ', 'organised'], ['نَاجِحٌ', 'successful']],
  },
  model: {
    text: 'بَدَأَ الْفَصْلُ الدِّرَاسِيُّ الْجَدِيدُ يَوْمَ الْأَحَدِ. وَصَلَ الطُّلَّابُ مُبَكِّرِينَ، وَحَضَرَتْ مُعَلِّمَتَانِ جَدِيدَتَانِ. الْمُعَلِّمَةُ الْأُولَى خَبِيرَةٌ فِي الرِّيَاضِيَّاتِ، وَالثَّانِيَةُ مُتَخَصِّصَةٌ فِي الْأَدَبِ. الْمَدْرَسَةُ نَظِيفَةٌ وَمُنَظَّمَةٌ، وَالْفُصُولُ وَاسِعَةٌ. الْمَكْتَبَةُ الْجَدِيدَةُ جَمِيلَةٌ جِدًّا، وَالْكُتُبُ مُفِيدَةٌ وَمُتَنَوِّعَةٌ. الطُّلَّابُ مُتَحَمِّسُونَ، وَالطَّالِبَاتُ مُسْتَعِدَّاتٌ لِلْمُسَابَقَاتِ. فِي الِاسْتِرَاحَةِ لَعِبَ فَرِيقَانِ قَوِيَّانِ مُبَارَاةً سَرِيعَةً. كَانَ الْجَوُّ مُشْمِسًا، وَكَانَ الْيَوْمُ نَاجِحًا. الْمُدِيرُ سَعِيدٌ بِالْبِدَايَةِ، وَالْآبَاءُ مَسْرُورُونَ أَيْضًا.',
    en: 'The new term began on Sunday. The students arrived early, and two new teachers (f.) came. The first teacher is an expert in maths, and the second specialises in literature. The school is clean and organised, and the classrooms are spacious. The new library is very beautiful, and the books are useful and varied. The boys are excited, and the girls are ready for the competitions. At break two strong teams played a quick match. The weather was sunny, and the day was a success. The head teacher is happy with the start, and the parents are pleased too.',
    find: ['nominative doer', 'dual -āni', 'plural -ūna', 'kāna noun (-u)'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My doers and topics end in -u / -un.' },
    { route: 'core', text: 'I found the job before choosing the ending.' },
    { route: 'develop', text: 'My duals end in -āni and my plurals in -ūna / -ātu.' },
    { route: 'develop', text: 'Every adjective copies its noun’s case.' },
    { route: 'stretch', text: 'After kāna, the noun is -u but the predicate is -an.' },
  ],
  exit: [
    W(/Final Mastery/, 5, { feedback: 'Plural doer: -ūna.' }),
    W(/Final Mastery/, 7, { feedback: 'Kitābun mufīdun: both -un.' }),
    W(/Final Mastery/, 8, { feedback: 'The noun of kāna stays nominative.' }),
  ],
  mastery: false,
  prep: {
    words: [['الْفَتْحَةُ', 'fatḥa: the -a ending', '—'], ['النَّصْبُ', 'the accusative case', '—'], ['الْمَفْعُولُ بِهِ', 'the object', '—'], ['كِتَابًا', 'a book (accusative)', '—'], ['مُعَلِّمِينَ', 'teachers (accusative)', '—']],
    questionEn: 'In kataba ṭ-ṭālibu r-risālata, the letter ends in -a. What is its job in the sentence?',
    questionAr: 'قَرَأْتُ كِتَابًا — لِمَاذَا «ـًا»؟',
    homework: {
      core: 'Write five sentences about your family and mark every nominative word.',
      develop: 'Write one sentence each with -āni, -ūna and -ātun.',
      stretch: 'Website school update (90–110 words) with full endings on the target nouns.',
    },
    wordsSource: 'The five words prepare GM-CASE-02 (website: the accusative case).',
  },
  remember: 'Remember: case = role · nominative (-u / -un) = doer, topic, simple predicate · dual -āni · plural -ūna / -ātu · adjectives copy the case · kāna / laysa keep the noun -u (predicate -an); inna makes the noun -a (predicate -u).',
});

module.exports = { meta, slides };
