'use strict';
/* GM-NVS-01 · Simple Non-Verbal Sentences — website: Mastery & Revision › Grammar › Non-Verbal Sentences › Lesson 1 (the present
 * equational sentence: mubtadaʾ + khabar with no “is”; identity, description, classification, location; agreement of single-word
 * predicates — human and non-human plurals; phrase or sentence? — definiteness decides; predicate types: word, prepositional phrase,
 * locator, time; clinic). Quizzes are the website’s (Entry, Agreement, Final Mastery) plus the website game (Phrase or sentence?), used
 * as the sorter. Colour code for this area: blue = subject / topic (mubtadaʾ), orange = predicate (khabar). I-do, agreement drill,
 * reading, frames and the extended model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__11-non-verbal-sentences__grammar-mastery-01-simple-equational-sentences';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-NVS-01', fileTitle: 'Simple_Nominal_Sentences', title: 'Simple Non-Verbal Sentences', arabic: 'الْجُمَلُ الِاسْمِيَّةُ الْبَسِيطَةُ',
  focus: 'Arabic needs no “is / am / are” in the present: huwa muhandisun (he is an engineer), al-baytu kabīrun (the house is big), anā fī l-bank (I am in the bank). Topic + information — that is a complete sentence.',
  icon: 'FaEquals',
});

const slides = G.gmLesson({
  code: 'GM-NVS-01', site: KEY,
  support: `• Core: subject + predicate with no “is” (huwa ṭālibun, al-jawwu jamīlun) and location with fī (anā fī l-bayt). Develop: agreement — feminine, dual, human plural — and the phrase-or-sentence test (al-baytu l-kabīru vs al-baytu kabīrun). Stretch: non-human plurals (al-kutubu mufīdatun), locator and time predicates, case-aware reading.
• Website transfer warning: never insert yakūnu because English has “is”. Website boundary: case endings explain the structure, but communication comes first — Case Endings (GM-CASE) analyses them later.
• Colour code for the area: blue = topic (mubtadaʾ), orange = predicate (khabar). Recycles GM-PRO pronouns, GM-ADJ agreement and GM-CP prepositions.`,
  teach: 'No “is”; agreement; phrase or sentence; four predicate types.',
  wedo: 'Make it agree; phrase or sentence?; repair.',
  next: { nextCode: 'GM-NVS-02', nextTitle: 'Inna and Its Sisters', nextAr: 'إِنَّ وَأَخَوَاتُهَا' },
  doNow: {
    questions: [
      W(/Entry Check/, 0, { feedback: 'No separate “is” in the present.' }),
      W(/Entry Check/, 1, { feedback: 'Definite topic + indefinite predicate = a sentence.' }),
      W(/Entry Check/, 2, { feedback: 'A woman: ṭabībatun.' }),
      W(/Entry Check/, 3, { feedback: 'Fī + place is the predicate.' }),
      W(/Entry Check/, 5, { prompt: 'Which is a phrase, not a complete sentence?', feedback: 'Both definite → “the large classroom”.' }),
    ],
    keyIdea: { text: 'Topic + information = a complete sentence. No word for “is”.', ar: '{w|الْبَيْتُ} {p|كَبِيرٌ} ‖ {w|أَنَا} {p|فِي الْبَيْتِ}' },
    retrieves: 'The website Entry Check — GM-PRO subject pronouns, GM-ADJ adjective agreement and GM-DEM hādhā / hādhihi.',
  },
  objectives: ['Make sentences with no “is”.', 'Match the predicate to the subject.', 'Tell a phrase from a sentence.', 'Say where and when with a phrase.'],
  routes: {
    core: ['I write huwa ṭālibun and anā fī l-bayt.', 'I match masculine and feminine.'],
    develop: ['I use dual and plural predicates.', 'I tell al-baytu l-kabīru from al-baytu kabīrun.'],
    stretch: ['I use the non-human plural rule.', 'I describe a person and a place in 80–100 words.'],
  },
  terms: {
    items: [
      { ar: 'الْجُمْلَةُ الِاسْمِيَّةُ', en: 'nominal sentence (no verb)', note: 'الْجَوُّ جَمِيلٌ' },
      { ar: 'الْمُبْتَدَأُ', en: 'topic — what we talk about', note: 'الْجَوُّ' },
      { ar: 'الْخَبَرُ', en: 'predicate — the information', note: 'جَمِيلٌ' },
      { ar: 'الْمَعْرِفَةُ', en: 'definite (with al- or a name)', note: 'الْبَيْتُ' },
      { ar: 'النَّكِرَةُ', en: 'indefinite (with tanwīn)', note: 'كَبِيرٌ' },
      { ar: 'شِبْهُ الْجُمْلَةِ', en: 'phrase predicate (where / when)', note: 'فِي الْبَيْتِ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · the present equational sentence (website table)', title: 'Topic + information — no “is”', ar: 'الْمُبْتَدَأُ + الْخَبَرُ', ltr: true,
      cols: [{ label: 'Function', w: 2.6 }, { label: 'Website model', w: 4.6, size: 26 }, { label: 'Meaning', w: 5.13 }],
      rows: [
        { core: true, cells: ['Identity', 'هُوَ مُهَنْدِسٌ.', 'He is an engineer.'] },
        { core: true, cells: ['Description', 'الْجَوُّ جَمِيلٌ.', 'The weather is beautiful.'] },
        { core: true, cells: ['Classification', 'هَذَا كِتَابٌ.', 'This is a book.'] },
        { core: true, cells: ['Location', 'أَنَا فِي الْبَنْكِ.', 'I am in the bank.'] },
        { cells: ['Group identity', 'نَحْنُ طُلَّابٌ.', 'We are students.'] },
      ],
      foot: 'Website: Arabic puts the topic and the information side by side; English adds am / is / are in translation. Common transfer error: do not insert yakūnu just because English has “is” — huwa muhandisun is the natural sentence.',
      notes: 'PART 1 (3 min) — website “The present equational sentence”. Read each model, then ask: where is the “is”? (There isn’t one.)',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · agreement in one-word predicates (website table)', title: 'The information matches the topic', ar: 'الْمُطَابَقَةُ', ltr: true,
      cols: [{ label: 'Topic', w: 3.0 }, { label: 'Website model', w: 5.6, size: 24 }, { label: 'Predicate is…', w: 3.73 }],
      rows: [
        { core: true, cells: ['one male', 'هُوَ طَالِبٌ مُجْتَهِدٌ.', 'masculine singular'] },
        { core: true, cells: ['one female', 'هِيَ طَالِبَةٌ مُجْتَهِدَةٌ.', 'feminine singular'] },
        { cells: ['two males', 'الطَّالِبَانِ مُسْتَعِدَّانِ.', 'dual: -āni'] },
        { cells: ['male / mixed group', 'الطُّلَّابُ مُجْتَهِدُونَ.', 'plural: -ūna'] },
        { cells: ['female group', 'الطَّالِبَاتُ مُجْتَهِدَاتٌ.', 'plural: -ātun'] },
        { core: true, cells: ['things (plural)', 'الْكُتُبُ مُفِيدَةٌ.', 'feminine singular'] },
      ],
      foot: 'Website boundary: the case endings help explain the structure, but clear agreement comes first — the Case Endings lessons analyse them later. Things in the plural take the feminine singular, as with verbs (GM-VS-02).',
      notes: 'PART 2 (3 min) — website “Agreement in single-word predicates”. Core: rows 1, 2 and 6.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · phrase or complete sentence? (website table) · Develop', title: 'Definite + definite = phrase · definite + indefinite = sentence', ar: 'عِبَارَةٌ أَمْ جُمْلَةٌ؟', ltr: true,
      cols: [{ label: 'Form', w: 4.0, size: 26 }, { label: 'Meaning', w: 3.8 }, { label: 'Analysis', w: 4.53 }],
      rows: [
        { core: true, cells: ['الْبَيْتُ الْكَبِيرُ', 'the large house', 'phrase — not finished'] },
        { core: true, cells: ['الْبَيْتُ كَبِيرٌ.', 'The house is large.', 'complete sentence'] },
        { cells: ['مَدْرَسَةٌ جَدِيدَةٌ', 'a new school', 'phrase (indefinite)'] },
        { cells: ['الْمَدْرَسَةُ جَدِيدَةٌ.', 'The school is new.', 'complete sentence'] },
        { cells: ['هَذَا الْكِتَابُ', 'this book', 'phrase'] },
        { cells: ['هَذَا كِتَابٌ.', 'This is a book.', 'complete sentence'] },
      ],
      foot: 'Website: do not confuse aṭ-ṭālibu l-mujtahidu (“the hardworking student” — a name for someone) with aṭ-ṭālibu mujtahidun (“The student is hardworking” — a statement). Listen for al- on the second word.',
      notes: 'PART 3 (3 min) — website “Phrase or complete sentence?” (rows 5–6 teacher-added). Test: can you put a full stop after it and say “is”? Then it is a sentence.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 4 · three practical predicate types (website table) · Stretch', title: 'A word, a place phrase or a time', ar: 'أَنْوَاعُ الْخَبَرِ', ltr: true,
      cols: [{ label: 'Predicate type', w: 3.2 }, { label: 'Website model', w: 5.4, size: 24 }, { label: 'Tells us', w: 3.73 }],
      rows: [
        { core: true, cells: ['one word (noun / adjective)', 'أَخِي طَبِيبٌ.', 'identity or description'] },
        { core: true, cells: ['preposition phrase', 'أَخِي فِي الْمُسْتَشْفَى.', 'location'] },
        { cells: ['locator phrase', 'الْمَدْرَسَةُ أَمَامَ الْمَسْجِدِ.', 'relative position'] },
        { cells: ['time word', 'الِامْتِحَانُ غَدًا.', 'when'] },
      ],
      foot: 'Website useful feature: a place phrase never changes for gender — huwa fī l-bayt and hiya fī l-bayt. The noun after fī takes kasra: fī l-bayti, fī l-bank (not fī l-banku).',
      notes: 'PART 4 (2 min) — website “Three practical predicate types”. Locators: amāma, khalfa, bi-jānibi, bayna, fawqa, taḥta.',
    },
  ],
  quick: [
    W(/Agreement Check/, 0, { prompt: 'Choose “The teacher (f.) is active.”', feedback: 'Feminine and indefinite: nashīṭatun.' }),
    W(/Agreement Check/, 1, { prompt: 'Choose “The two boys are ready.”', feedback: 'Two boys → dual mustaʿiddāni.' }),
    W(/Agreement Check/, 2, { prompt: 'Choose “The books are useful.”', feedback: 'Things → feminine singular.' }),
    W(/Agreement Check/, 3, { feedback: 'Fī l-maktaba is the predicate.' }),
  ],
  quickNote: 'website Agreement Check.',
  ido: {
    title: 'Watch me describe my school',
    steps: [
      { head: 'Topic', ar: 'الْمَدْرَسَةُ', think: 'What am I describing?' },
      { head: 'Gender', ar: 'مُؤَنَّثٌ', think: 'Madrasa: feminine.' },
      { head: 'Predicate', ar: 'كَبِيرَةٌ', think: 'No “is”; -a + tanwīn.' },
      { head: 'Location', ar: 'فِي الطَّابِقِ الْأَوَّلِ', think: 'Place phrase.' },
    ],
    legend: ['w', 'p'], legendLabels: { w: 'TOPIC', p: 'PREDICATE' },
    model: '{w|هَذِهِ} {p|مَدْرَسَتِي}. {w|هِيَ} {p|كَبِيرَةٌ وَحَدِيثَةٌ}. {w|الْمَكْتَبَةُ} {p|فِي الطَّابِقِ الْأَوَّلِ}. {w|الْفُصُولُ} {p|وَاسِعَةٌ}. {w|أَنَا} {p|طَالِبَةٌ فِي الصَّفِّ التَّاسِعِ}. {w|مَادَّتِي الْمُفَضَّلَةُ} {p|الْعَرَبِيَّةُ}.',
    modelEn: 'This is my school. It is big and modern. The library is on the first floor. The classrooms are spacious. I am a student (f.) in Year 9. My favourite subject is Arabic.',
    notes: 'Built from the website skills-workshop lines. Point out al-fuṣūlu wāsiʿatun: classrooms are things → feminine singular.',
  },
  models: [
    { ar: 'هُوَ مُهَنْدِسٌ.', en: 'He is an engineer.', tip: 'Identity.' },
    { ar: 'الْجَوُّ جَمِيلٌ.', en: 'The weather is beautiful.', tip: 'Description.' },
    { ar: 'أَخِي فِي الْمُسْتَشْفَى.', en: 'My brother is in the hospital.', tip: 'Location.' },
    { ar: 'الِامْتِحَانُ غَدًا.', en: 'The exam is tomorrow.', tip: 'Time.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · make it agree (website agreement table)', title: 'Who is active?', ar: 'مَنْ نَشِيطٌ؟', ltr: true, stage: 'wedo',
      cols: [{ label: 'Topic', w: 3.4, size: 24 }, { label: 'Who / what?', w: 3.4 }, { label: 'Predicate', w: 2.8, size: 26 }, { label: 'Rule', w: 2.73 }],
      rows: [
        { core: true, cells: ['أَخِي', 'my brother', 'نَشِيطٌ', 'm. singular'] },
        { core: true, cells: ['أُخْتِي', 'my sister', 'نَشِيطَةٌ', 'f. singular'] },
        { cells: ['الْوَلَدَانِ', 'the two boys', 'نَشِيطَانِ', 'dual'] },
        { cells: ['الْمُعَلِّمُونَ', 'the teachers (m.)', 'نَشِيطُونَ', 'plural -ūna'] },
        { cells: ['الْمُعَلِّمَاتُ', 'the teachers (f.)', 'نَشِيطَاتٌ', 'plural -ātun'] },
        { core: true, cells: ['الْقِطَطُ', 'the cats', 'نَشِيطَةٌ', 'things / animals'] },
      ],
      foot: 'Say the full sentence each time: akhī nashīṭun · ukhtī nashīṭatun … Animals and things in the plural take the feminine singular.',
      notes: 'WE DO (3 min) — cover column 3. Then swap the adjective: mujtahid, saʿīd, mashghūl.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · website game · phrase or sentence?', title: 'Is it finished?', ar: 'عِبَارَةٌ أَمْ جُمْلَةٌ؟',
      categories: ['Phrase (not finished)', 'Complete sentence'],
      items: [['الْبَيْتُ الْكَبِيرُ', 0], ['السَّيَّارَةُ الْجَدِيدَةُ', 0], ['الْكُتُبُ الْمُفِيدَةُ', 0], ['الطَّالِبُ الْمُجْتَهِدُ', 0], ['الْبَيْتُ كَبِيرٌ.', 1], ['السَّيَّارَةُ جَدِيدَةٌ.', 1], ['الْكُتُبُ مُفِيدَةٌ.', 1], ['الطَّالِبَةُ فِي الْفَصْلِ.', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website game items. Website tip: read for meaning and definiteness, not just word order.',
    },
  ],
  mistakes: [
    { wrong: 'هُوَ يَكُونُ مُعَلِّمًا.', right: 'هُوَ مُعَلِّمٌ.', why: 'No present “is” is needed (website clinic).' },
    { wrong: 'هِيَ طَبِيبٌ.', right: 'هِيَ طَبِيبَةٌ.', why: 'A woman: feminine predicate (website clinic).' },
    { wrong: 'السَّيَّارَاتُ سَرِيعَاتٌ.', right: 'السَّيَّارَاتُ سَرِيعَةٌ.', why: 'Things in the plural → feminine singular (website clinic).' },
  ],
  hints: ['Does English “is” need a word?', 'Is the doctor a man or a woman?', 'Are cars people?'],
  practice: [
    W(/Final Mastery/, 1, { prompt: 'Identify the predicate: الْجَوُّ جَمِيلٌ.', feedback: 'Jamīlun gives the information.' }),
    W(/Final Mastery/, 2, { feedback: 'Sayyāra is feminine: hādhihi … jadīdatun.' }),
    W(/Final Mastery/, 4, { feedback: 'After fī: kasra — fī l-bayti.' }),
    W(/Final Mastery/, 8, { feedback: 'A place phrase can be the predicate.' }),
  ],
  practiceLabel: 'website Final Mastery check',
  read: {
    title: 'Zaynab’s school', label: 'website skills workshop (teacher-written description)',
    text: 'اِسْمِي زَيْنَبُ. أَنَا طَالِبَةٌ فِي الصَّفِّ الْعَاشِرِ، وَمَدْرَسَتِي فِي وَسَطِ الْمَدِينَةِ. الْمَدْرَسَةُ قَدِيمَةٌ وَلَكِنَّهَا جَمِيلَةٌ. الْفُصُولُ وَاسِعَةٌ، وَالنَّوَافِذُ كَبِيرَةٌ. مُعَلِّمَتِي الْمُفَضَّلَةُ الْأُسْتَاذَةُ سَارَةُ؛ هِيَ لَطِيفَةٌ وَصَبُورَةٌ. صَدِيقَاتِي مَرِحَاتٌ وَمُجْتَهِدَاتٌ. الْمَكْتَبَةُ بِجَانِبِ الْمَسْجِدِ، وَالْمَلْعَبُ خَلْفَ الْمَدْرَسَةِ. الِامْتِحَانَاتُ بَعْدَ أُسْبُوعَيْنِ!',
    glossary: [['وَسَطِ', 'the centre'], ['وَاسِعَةٌ', 'spacious'], ['النَّوَافِذُ', 'the windows'], ['صَبُورَةٌ', 'patient (f.)'], ['مَرِحَاتٌ', 'cheerful (f. pl.)']],
    task: 'Website: underline each topic once and box each predicate. Label one predicate “word” and one “phrase”.',
    questions: [
      q('Where is Zaynab’s school?', ['in the city centre', 'behind the mosque', 'next to the river'], 'Fī wasaṭi l-madīna.'),
      q('Why is it wāsiʿatun with al-fuṣūlu?', ['things: feminine singular', 'the classrooms are for girls', 'it is a mistake'], 'Non-human plural → feminine singular.'),
      q('Which predicate tells us a location?', ['خَلْفَ الْمَدْرَسَةِ', 'مَرِحَاتٌ', 'لَطِيفَةٌ'], 'A locator phrase.'),
      q('When are the exams?', ['in two weeks', 'tomorrow', 'next year'], 'Baʿda usbūʿayn.'),
    ],
    qNote: 'Teacher-written description for the website skills workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: who, what and where?', source: 'website skills workshop',
    prompts: [
      { route: 'core', ar: 'مَنْ أَنْتَ؟ وَأَيْنَ مَدْرَسَتُكَ؟' },
      { route: 'develop', ar: 'صِفْ صَدِيقَكَ أَوْ صَدِيقَتَكَ.' },
      { route: 'stretch', ar: 'صِفْ غُرْفَتَكَ: مَا فِيهَا، وَأَيْنَ الْأَشْيَاءُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَنَا ______ ، وَمَدْرَسَتِي فِي ______ .' },
      { route: 'develop', ar: 'صَدِيقِي ______ وَ______ .' },
      { route: 'stretch', ar: 'السَّرِيرُ ______ ، وَالْكُتُبُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَنْ هَذِهِ فِي الصُّورَةِ؟', en: 'Who is this in the picture?' },
      { who: 'B', ar: 'هَذِهِ أُخْتِي مَرْيَمُ. هِيَ طَبِيبَةٌ فِي مُسْتَشْفًى كَبِيرٍ، وَزَوْجُهَا مُهَنْدِسٌ. بَيْتُهُمَا قَرِيبٌ مِنْ بَيْتِنَا.', en: 'This is my sister Maryam. She is a doctor in a big hospital, and her husband is an engineer. Their house is near our house.' },
    ],
    notes: 'Website: identify people and things, describe them and say where they are — no “is” needed.',
  },
  write: {
    siteTask: 'Write 80–100 Arabic words introducing yourself or another person and describing a familiar place.',
    core: { amount: '5 sentences', task: 'Yourself: name, class, school and where it is.', how: 'anā ṭālib(a) · madrasatī fī …' },
    develop: { amount: '7 sentences', task: 'Add a friend and two plural topics.', how: 'aṣdiqāʾī mujtahidūna · al-kutubu mufīdatun.' },
    stretch: { amount: '80–100 words', task: 'Website description of a person and a place.', how: 'Four word predicates, three place phrases.' },
  },
  frames: {
    core: [
      { en: 'I am a … in Year …', ar: 'أَنَا ______ فِي الصَّفِّ ______ .' },
      { en: 'My school is …', ar: 'مَدْرَسَتِي ______ .' },
      { en: 'The library is next to …', ar: 'الْمَكْتَبَةُ بِجَانِبِ ______ .' },
      { en: 'My teacher (f.) is …', ar: 'مُعَلِّمَتِي ______ .' },
    ],
    develop: [
      { en: 'My friends are …', ar: 'أَصْدِقَائِي ______ .' },
      { en: 'The classrooms are …', ar: 'الْفُصُولُ ______ .' },
      { en: 'The playground is behind …', ar: 'الْمَلْعَبُ خَلْفَ ______ .' },
      { en: 'This is a … book', ar: 'هَذَا كِتَابٌ ______ .' },
    ],
    bank: ['كَبِيرٌ', 'صَغِيرٌ', 'جَدِيدٌ', 'قَدِيمٌ', 'جَمِيلٌ', 'وَاسِعٌ', 'قَرِيبٌ', 'بَعِيدٌ', 'فِي', 'أَمَامَ', 'خَلْفَ', 'بِجَانِبِ', 'بَيْنَ'],
  },
  stretchTask: {
    task: 'Website task (80–100 words): introduce yourself or another person and describe a familiar place.',
    checklist: ['At least four one-word predicates.', 'Three place or locator predicates.', 'Correct gender agreement throughout.', 'One non-human plural with a feminine singular predicate.', 'No inserted yakūnu.'],
    phrases: [['فِي وَسَطِ', 'in the middle of'], ['بِجَانِبِ', 'next to'], ['أَمَامَ', 'in front of'], ['خَلْفَ', 'behind'], ['قَرِيبٌ مِنْ', 'near to'], ['بَعِيدٌ عَنْ', 'far from']],
  },
  model: {
    text: 'اِسْمِي يُوسُفُ، وَأَنَا طَالِبٌ فِي الصَّفِّ التَّاسِعِ. بَيْتُنَا فِي حَيٍّ هَادِئٍ قُرْبَ النَّهْرِ. الْبَيْتُ صَغِيرٌ وَلَكِنَّهُ مُرِيحٌ. غُرْفَتِي فِي الطَّابِقِ الثَّانِي، وَنَافِذَتُهَا أَمَامَ الْحَدِيقَةِ. كُتُبِي كَثِيرَةٌ، وَهِيَ عَلَى رُفُوفٍ بِجَانِبِ السَّرِيرِ. أَبِي مُهَنْدِسٌ، وَأُمِّي مُعَلِّمَةٌ فِي مَدْرَسَةٍ قَرِيبَةٍ. أَخَوَايَ تَوْأَمَانِ، وَهُمَا صَغِيرَانِ وَمَرِحَانِ. جِيرَانُنَا لُطَفَاءُ وَكُرَمَاءُ. الْمَسْجِدُ فِي آخِرِ الشَّارِعِ، وَالسُّوقُ بَعِيدٌ قَلِيلًا.',
    en: 'My name is Yūsuf, and I am a student in Year 9. Our house is in a quiet neighbourhood near the river. The house is small but comfortable. My room is on the second floor, and its window faces the garden. My books are many, and they are on shelves next to the bed. My father is an engineer, and my mother is a teacher in a nearby school. My two brothers are twins; they are young and cheerful. Our neighbours are kind and generous. The mosque is at the end of the street, and the market is a little far.',
    find: ['word predicate', 'place predicate', 'dual predicate', 'non-human plural + feminine singular'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'I did not add a word for “is”.' },
    { route: 'core', text: 'Feminine topics have feminine predicates.' },
    { route: 'develop', text: 'My predicates are indefinite (tanwīn) — so they are sentences, not phrases.' },
    { route: 'develop', text: 'Dual and plural people have dual / plural predicates.' },
    { route: 'stretch', text: 'Things in the plural have a feminine singular predicate.' },
  ],
  exit: [
    W(/Final Mastery/, 3, { feedback: 'Definite topic + indefinite predicate.' }),
    W(/Final Mastery/, 6, { feedback: 'Cars are things → sarīʿatun.' }),
    W(/Final Mastery/, 7, { feedback: 'Both definite → a phrase: “the useful book”.' }),
  ],
  mastery: false,
  prep: {
    words: [['إِنَّ', 'indeed / truly (adds emphasis)', '—'], ['لَكِنَّ', 'but', '—'], ['لِأَنَّ', 'because', '—'], ['لَعَلَّ', 'perhaps / hopefully', '—'], ['كَأَنَّ', 'as if', '—']],
    questionEn: 'After inna the topic changes its ending from -u to -a: inna l-jawwa jamīlun. Can you hear the change?',
    questionAr: 'إِنَّ ______ جَمِيلٌ.',
    homework: {
      core: 'Write five sentences about your family with no “is”.',
      develop: 'Write six sentences: two dual, two plural (people), two plural (things).',
      stretch: 'Website description of a person and a place (80–100 words).',
    },
    wordsSource: 'The five words prepare GM-NVS-02 (website: inna and its sisters).',
  },
  remember: 'Remember: topic + information = a sentence, with no “is” · the predicate matches the topic (ṭabībun / ṭabībatun) · definite + definite = a phrase; definite + indefinite = a sentence · place phrases never change for gender · things in the plural → feminine singular.',
});

module.exports = { meta, slides };
