'use strict';
/* GM-V-04 · Past Tense: Complete Conjugation and Narration — website: Mastery & Revision › Grammar › Verbs › Lesson 4 (third-person endings
 * — · ـَتْ · ـَا · ـَتَا · ـُوا · ـْنَ; first and second person ـْتُ · ـْنَا · ـْتَ · ـْتِ · ـْتُمَا · ـْتُمْ · ـْتُنَّ; the three short vowels on -t;
 * endings across verb families (regular, hollow, doubled, final weak); narrative frame and purposes; clinic: I / you vowel, she / you f.,
 * feminine plural, weak stem). Quizzes are the website’s (Entry, Third-Person, Speaker and Addressee, Past Family, Narrative, Mastery)
 * plus the website person game. Sorter, I-do, frames and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__07-verbs__grammar-mastery-04-past-tense';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-V-04', fileTitle: 'Past_Tense', title: 'Past Tense: Complete Conjugation and Narration', arabic: 'الْفِعْلُ الْمَاضِي: التَّصْرِيفُ وَالسَّرْدُ',
  focus: 'The past tense shows WHO acted with an ending on the verb: katabtu (I), katabta (you m.), katabti (you f.), katabat (she), katabnā (we), katabū (they). One tiny vowel changes the person — so read the ending carefully, and tell your story in order.',
  icon: 'FaClockRotateLeft',
});

const slides = G.gmLesson({
  code: 'GM-V-04', site: KEY,
  support: `• Core: the most frequent endings — ـْتُ · ـْنَا · ـَتْ · ـُوا, then ـْتَ / ـْتِ. Develop: all thirteen persons, including duals (ـَا · ـَتَا · ـْتُمَا) and feminine plurals (ـْنَ · ـْتُنَّ). Stretch: add the endings to hollow, doubled and final-weak stems (قُلْنَا · مَرَرْتُ · مَشَيْتِ) and analyse full agreement.
• The “four t’s” trap: ـْتُ (I) · ـْتَ (you m.) · ـْتِ (you f.) · ـَتْ (she). Say them with exaggerated final vowels.
• Narrative frame from the website: فِي الْأُسْبُوعِ الْمَاضِي … أَوَّلًا … ثُمَّ … بَعْدَ ذَلِكَ … أَخِيرًا … (links to GM-ADV-04).`,
  teach: 'Third person; first and second person; families; narration.',
  wedo: 'Match person and ending; tell the story in order; repair.',
  next: { nextCode: 'GM-V-05', nextTitle: 'Present Tense: Prefixes, Suffixes and Meaning', nextAr: 'الْفِعْلُ الْمُضَارِعُ: السَّوَابِقُ وَاللَّوَاحِقُ وَالدَّلَالَةُ' },
  doNow: {
    pick: [0, 1, 2, 3, 4],
    fb: { 0: '-tu marks “I” in the past.', 1: 'The vowel on -ti marks “you (f.)”.', 2: '-ū marks “they (m. / mixed)”.', 3: '-tumā marks “you two”.', 4: '-na marks “they (f.)”.' },
    keyIdea: { text: 'In the past, the ENDING tells you who acted. One small vowel can change the person.', ar: 'كَتَبْتُ · كَتَبْتَ · كَتَبْتِ · {k|كَتَبَتْ}' },
    retrieves: 'The website Entry Check (questions 1–5) — it uses the five forms prepared at the end of GM-V-03.',
  },
  objectives: ['Conjugate regular past verbs for all persons.', 'Distinguish -tu, -ta, -ti and -at.', 'Add past endings to weak and doubled stems.', 'Tell a connected story in the past.'],
  routes: {
    core: ['I write I, we, she and they in the past.', 'I hear the difference between -tu, -ta and -ti.'],
    develop: ['I use dual and feminine plural endings.', 'I tell a story with first, then, finally.'],
    stretch: ['I add endings to weak stems: qulnā, marartu.', 'I mix I, we and a third-person report.'],
  },
  terms: {
    items: [
      { ar: 'الْفِعْلُ الْمَاضِي', en: 'past tense (completed)', note: 'كَتَبَ' },
      { ar: 'ضَمِيرُ الرَّفْعِ الْمُتَّصِلُ', en: 'subject ending', note: 'ـْتُ · ـْنَا · ـُوا' },
      { ar: 'الْمُتَكَلِّمُ', en: '1st person (I / we)', note: 'كَتَبْتُ · كَتَبْنَا' },
      { ar: 'الْمُخَاطَبُ', en: '2nd person (you)', note: 'كَتَبْتَ · كَتَبْتِ' },
      { ar: 'الْغَائِبُ', en: '3rd person (he / she / they)', note: 'كَتَبَ · كَتَبَتْ · كَتَبُوا' },
      { ar: 'السَّرْدُ', en: 'narration (telling a story)', note: 'أَوَّلًا … ثُمَّ … أَخِيرًا' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · third-person past endings (website table)', title: 'He, she, they', ar: 'الْغَائِبُ', ltr: true,
      cols: [{ label: 'Pronoun', w: 2.8, size: 24 }, { label: 'Ending', w: 2.6, size: 24 }, { label: 'wrote', w: 3.2, size: 26 }, { label: 'Note', w: 3.73 }],
      rows: [
        { core: true, cells: ['هُوَ', '—', 'كَتَبَ', 'the dictionary form'] },
        { core: true, cells: ['هِيَ', 'ـَتْ', 'كَتَبَتْ', 'she'] },
        { core: true, cells: ['هُمْ', 'ـُوا', 'كَتَبُوا', 'they (m. / mixed)'] },
        { cells: ['هُنَّ', 'ـْنَ', 'كَتَبْنَ', 'they (f.)'] },
        { cells: ['هُمَا (m.)', 'ـَا', 'كَتَبَا', 'they two (m.)'] },
        { cells: ['هُمَا (f.)', 'ـَتَا', 'كَتَبَتَا', 'they two (f.)'] },
      ],
      foot: 'Website: third person starts from the dictionary form; the ending shows masculine / feminine and singular / dual / plural.',
      notes: 'PART 1 (3 min) — website “Third-person past endings”. Core: rows 1–3.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 2 · first and second person (website table)', title: 'I, we and you', ar: 'الْمُتَكَلِّمُ وَالْمُخَاطَبُ', ltr: true,
      cols: [{ label: 'Pronoun', w: 2.8, size: 24 }, { label: 'Ending', w: 2.6, size: 24 }, { label: 'studied', w: 3.2, size: 26 }, { label: 'Note', w: 3.73 }],
      rows: [
        { core: true, cells: ['أَنَا', 'ـْتُ', 'دَرَسْتُ', 'I — final ḍamma'] },
        { core: true, cells: ['نَحْنُ', 'ـْنَا', 'دَرَسْنَا', 'we'] },
        { core: true, cells: ['أَنْتَ', 'ـْتَ', 'دَرَسْتَ', 'you (m.) — final fatḥa'] },
        { core: true, cells: ['أَنْتِ', 'ـْتِ', 'دَرَسْتِ', 'you (f.) — final kasra'] },
        { cells: ['أَنْتُمَا', 'ـْتُمَا', 'دَرَسْتُمَا', 'you two'] },
        { cells: ['أَنْتُمْ · أَنْتُنَّ', 'ـْتُمْ · ـْتُنَّ', 'دَرَسْتُمْ · دَرَسْتُنَّ', 'you all (m. · f.)'] },
      ],
      foot: 'Website: the three short vowels matter — darastu (I), darasta (you m.), darasti (you f.). And she = darasat (sukūn on the t).',
      notes: 'PART 2 (4 min) — website “First and second person”. Drill the four t’s aloud with exaggerated vowels.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · endings across verb families · narration (website) · Stretch', title: 'Ending + the right stem', ar: 'اللَّاحِقَةُ وَالْجِذْعُ', ltr: true,
      cols: [{ label: 'Family', w: 2.6 }, { label: 'he', w: 2.4, size: 24 }, { label: 'I · we', w: 3.4, size: 24 }, { label: 'What happens (website)', w: 3.93 }],
      rows: [
        { core: true, cells: ['regular', 'كَتَبَ', 'كَتَبْتُ · كَتَبْنَا', 'core letters stay visible'] },
        { cells: ['hollow', 'قَالَ', 'قُلْتُ · قُلْنَا', 'stem shortens'] },
        { cells: ['doubled', 'مَرَّ', 'مَرَرْتُ · مَرَرْنَا', 'shadda opens'] },
        { cells: ['final weak', 'مَشَى', 'مَشَيْتُ · مَشَيْنَا', 'final letter changes'] },
      ],
      foot: 'Website warning: conjugation is not only adding a suffix — identify the family first (GM-V-02), then attach the ending. Narrative frame: last week … first … then … after that … finally …',
      notes: 'PART 3 (3 min) — website “Past endings across verb families” and “Use the past to tell events”.',
    },
  ],
  quick: [
    W(/Third-Person/, 0, { feedback: '-at = she.' }),
    W(/Third-Person/, 3, { feedback: '-na = they (f.).' }),
    W(/Speaker and Addressee/, 1, { feedback: '-ta = you (m.).' }),
    W(/Speaker and Addressee/, 2, { feedback: '-ti = you (f.).' }),
  ],
  quickNote: 'website Third-Person and Speaker / Addressee checks.',
  ido: {
    title: 'Watch me tell a story in order',
    steps: [
      { head: 'When', ar: 'فِي الْأُسْبُوعِ الْمَاضِي', think: 'Past time frame.' },
      { head: 'We', ar: 'ذَهَبْنَا', think: '-nā = we.' },
      { head: 'Then', ar: 'ثُمَّ رَأَيْنَا', think: 'Sequence + we.' },
      { head: 'Report', ar: 'وَقَالَ الْمُرْشِدُ', think: 'he: dictionary form.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'PAST VERB', e: 'SEQUENCE' },
    model: 'فِي الْأُسْبُوعِ الْمَاضِي {k|ذَهَبْنَا} إِلَى مَعْرِضٍ ثَقَافِيٍّ. {e|أَوَّلًا} {k|رَأَيْنَا} صُوَرًا جَمِيلَةً، {e|ثُمَّ} {k|قَالَ} الْمُرْشِدُ إِنَّ الْمَعْرِضَ يَعْرِضُ تَارِيخَ الْمَدِينَةِ. {e|أَخِيرًا} {k|رَجَعْنَا} إِلَى الْبَيْتِ.',
    modelEn: 'Last week we went to a cultural exhibition. First we saw beautiful pictures, then the guide said that the exhibition shows the history of the city. Finally we returned home.',
    notes: 'Website model with the narrative frame added. For each verb, say who acted from the ending alone.',
  },
  models: [
    { ar: 'أَمْسِ قَرَأْتُ مَقَالًا.', en: 'Yesterday I read an article.', tip: 'Website: personal action.' },
    { ar: 'فِي الْعُطْلَةِ زُرْنَا مِصْرَ.', en: 'In the holiday we visited Egypt.', tip: 'Website: shared experience.' },
    { ar: 'فَازُوا بِالْمُبَارَاةِ.', en: 'They won the match.', tip: 'Website: reporting others.' },
    { ar: 'وَصَلَتِ الطَّالِبَاتُ وَجَلَسْنَ فِي الصَّفِّ.', en: 'The female students arrived and sat in class.', tip: 'Feminine plural report.' },
  ],
  wedoSlides: [
    {
      type: 'sorter', min: 2, eyebrow: 'We do · match person and ending (website person game)', title: 'Who acted?', ar: 'مَنْ فَعَلَ؟',
      categories: ['I · we', 'you', 'he · she · they'],
      items: [['كَتَبْتُ', 0], ['دَرَسْتِ', 1], ['سَافَرَتْ', 2], ['زُرْنَا', 0], ['قُلْتُمْ', 1], ['لَعِبُوا', 2], ['وَصَلْنَ', 2], ['شَاهَدْتَ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min) — website person game forms. Students type 1–3 and name the exact pronoun (darasti = anti).',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'We do · one verb, every person · say it aloud', title: 'Conjugate “to play”', ar: 'صَرِّفِ الْفِعْلَ «لَعِبَ»', ltr: true, stage: 'wedo',
      cols: [{ label: 'Pronoun', w: 3.0, size: 24 }, { label: 'Past', w: 3.2, size: 26 }, { label: 'Pronoun', w: 3.0, size: 24 }, { label: 'Past', w: 3.13, size: 26 }],
      rows: [
        { core: true, cells: ['أَنَا', 'لَعِبْتُ', 'نَحْنُ', 'لَعِبْنَا'] },
        { core: true, cells: ['أَنْتَ', 'لَعِبْتَ', 'أَنْتِ', 'لَعِبْتِ'] },
        { core: true, cells: ['هُوَ', 'لَعِبَ', 'هِيَ', 'لَعِبَتْ'] },
        { cells: ['هُمْ', 'لَعِبُوا', 'هُنَّ', 'لَعِبْنَ'] },
        { cells: ['أَنْتُمْ', 'لَعِبْتُمْ', 'هُمَا (m.)', 'لَعِبَا'] },
      ],
      foot: 'Cover the “Past” columns; students conjugate aloud, then write. Watch the vowel on the second root letter: laʿiba.',
      notes: 'WE DO (2 min). Laʿiba has kasra on the middle letter — the endings are the same.',
    },
  ],
  mistakes: [
    { wrong: 'أَنَا دَرَسْتَ', right: 'أَنَا دَرَسْتُ', why: 'The final vowel shows the person: -tu = I (website clinic).' },
    { wrong: 'هِيَ كَتَبْتِ', right: 'هِيَ كَتَبَتْ', why: '-at = she; -ti = you (f.) (website clinic).' },
    { wrong: 'هُنَّ لَعِبُوا', right: 'هُنَّ لَعِبْنَ', why: 'Feminine plural takes -na (website clinic).' },
  ],
  hints: ['Which vowel for I?', 'She or you (f.)?', 'All female?'],
  practice: [
    W(/Past Family/, 0, { feedback: 'Hollow short stem.' }),
    W(/Past Family/, 1, { feedback: 'The doubled stem opens.' }),
    W(/Past Family/, 2, { prompt: 'Choose “you (f.) walked”.', feedback: 'Final yāʾ family + -ti.' }),
    W(/Narrative/, 3, { feedback: 'Past form and sequence agree.' }),
  ],
  practiceLabel: 'website Past Family and Narrative checks',
  read: {
    title: 'A short biography', label: 'website reading workshop (teacher-written biography)',
    text: 'وُلِدَتْ فَاطِمَةُ الْفِهْرِيَّةُ فِي الْقَيْرَوَانِ، ثُمَّ سَافَرَتْ مَعَ أُسْرَتِهَا إِلَى فَاسَ. هُنَاكَ وَرِثَتْ مَالًا كَثِيرًا، فَبَنَتْ مَسْجِدًا كَبِيرًا. بَعْدَ ذَلِكَ دَرَسَ فِيهِ طُلَّابٌ كَثِيرُونَ، وَأَصْبَحَ جَامِعَةَ الْقَرَوِيِّينَ. زُرْنَا الْجَامِعَةَ فِي الصَّيْفِ الْمَاضِي، وَتَعَلَّمْنَا قِصَّتَهَا.',
    size: 22,
    glossary: [['وُلِدَتْ', 'she was born'], ['وَرِثَتْ', 'she inherited'], ['بَنَتْ', 'she built'], ['أَصْبَحَ', 'it became'], ['تَعَلَّمْنَا', 'we learned']],
    task: 'Website: identify who performed each action, using the endings to resolve pronouns that are not written.',
    questions: [
      q('Who travelled to Fes?', ['Fatima (with her family)', 'the students', 'the writer'], 'Sāfarat — -at = she.'),
      q('What did Fatima build?', ['a big mosque', 'a school', 'a house'], 'Banat masjidan kabīran.'),
      q('Who visited the university last summer?', ['the writer and others (we)', 'Fatima', 'the students'], 'Zurnā — -nā = we.'),
      q('Which form is final weak (“she built”)?', ['بَنَتْ', 'سَافَرَتْ', 'وَرِثَتْ'], 'banā → banat.'),
    ],
    qNote: 'Teacher-written biography (Fatima al-Fihri, founder of al-Qarawiyyin) for the website reading workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: a one-minute story', source: 'website speaking workshop',
    prompts: [
      { route: 'core', ar: 'مَاذَا فَعَلْتَ أَمْسِ؟' },
      { route: 'develop', ar: 'مَاذَا فَعَلْتُمْ فِي آخِرِ رِحْلَةٍ مَدْرَسِيَّةٍ؟' },
      { route: 'stretch', ar: 'احْكِ قِصَّةً: أَنَا … نَحْنُ … هُمْ / هِيَ …' },
    ],
    stems: [
      { route: 'core', ar: 'أَمْسِ ______ وَ ______ .' },
      { route: 'develop', ar: 'أَوَّلًا ______ ، ثُمَّ ______ ، وَأَخِيرًا ______ .' },
      { route: 'stretch', ar: 'أَنَا ______ ، وَنَحْنُ ______ ، وَأَصْدِقَائِي ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا فَعَلْتِ فِي عُطْلَةِ نِهَايَةِ الْأُسْبُوعِ؟', en: 'What did you do at the weekend? (to a girl)' },
      { who: 'B', ar: 'زُرْتُ خَالَتِي، وَطَبَخْنَا مَعًا، وَبَعْدَ ذَلِكَ لَعِبَ أَوْلَادُهَا فِي الْحَدِيقَةِ.', en: 'I visited my aunt, we cooked together, and after that her children played in the garden.' },
    ],
    notes: 'Website: one-minute story with first-person singular, first-person plural and a third-person report. Listening (website): partner tells a weekend account; listener draws a timeline with the exact past forms.',
  },
  write: {
    siteTask: 'Write a 130–140-word blog entry about a memorable day, with at least eight different past verbs and four different subject endings.',
    core: { amount: '6 sentences', task: 'A memorable day in the first person.', how: 'I went, I saw, I ate … (-tu).' },
    develop: { amount: '8 sentences', task: 'Add we, she and they — in order.', how: 'first · then · after that · finally.' },
    stretch: { amount: '130–140 words', task: 'Website blog with one hollow and one weak verb.', how: 'Underline each ending and label the subject above it.' },
  },
  frames: {
    core: [
      { en: 'Last week I went to …', ar: 'فِي الْأُسْبُوعِ الْمَاضِي ذَهَبْتُ إِلَى ______ .' },
      { en: 'First we …', ar: 'أَوَّلًا ______ .' },
      { en: 'Then my sister …', ar: 'ثُمَّ ______ أُخْتِي.' },
      { en: 'Finally we returned …', ar: 'أَخِيرًا رَجَعْنَا ______ .' },
    ],
    develop: [
      { en: 'My friends played …', ar: 'لَعِبَ أَصْدِقَائِي ______ .' },
      { en: 'The girls wrote …', ar: 'كَتَبَتِ الْبَنَاتُ ______ .' },
      { en: 'Did you (f.) see …?', ar: 'هَلْ رَأَيْتِ ______ ؟' },
      { en: 'We said …', ar: 'قُلْنَا ______ .' },
    ],
    bank: ['ذَهَبْتُ', 'ذَهَبْنَا', 'رَأَيْتُ', 'زُرْنَا', 'أَكَلْنَا', 'شَاهَدْتُ', 'سَافَرَتْ', 'لَعِبُوا', 'وَصَلْنَ', 'قُلْتُ', 'رَجَعْنَا', 'أَوَّلًا', 'ثُمَّ', 'أَخِيرًا'],
  },
  stretchTask: {
    task: 'Website integrated production task: a 130–140-word blog entry about a memorable day.',
    checklist: ['Eight different past verbs.', 'Four different subject endings (e.g. -tu, -nā, -at, -ū).', 'A past time expression and sequence links.', 'One hollow verb and one weak verb.', 'Singular and plural subjects.'],
    phrases: [['فِي ذَلِكَ الْيَوْمِ', 'on that day'], ['أَوَّلًا … ثُمَّ …', 'first … then …'], ['أَعْجَبَنِي', 'I liked (it pleased me)'], ['فَرِحْتُ كَثِيرًا', 'I was very happy'], ['تَعَلَّمْتُ', 'I learned'], ['أَخِيرًا رَجَعْنَا', 'finally we returned']],
  },
  model: {
    text: 'أَجْمَلُ يَوْمٍ فِي حَيَاتِي كَانَ يَوْمَ تَخَرُّجِ أُخْتِي الْكَبِيرَةِ. فِي الصَّبَاحِ لَبِسْنَا ثِيَابًا جَدِيدَةً وَذَهَبْنَا إِلَى الْجَامِعَةِ. أَوَّلًا جَلَسْنَا فِي قَاعَةٍ كَبِيرَةٍ، ثُمَّ دَخَلَ الطُّلَّابُ وَالطَّالِبَاتُ. حِينَ سَمِعْنَا اسْمَ أُخْتِي، صَفَّقْنَا كَثِيرًا، وَبَكَتْ أُمِّي مِنَ الْفَرَحِ. بَعْدَ ذَلِكَ أَخَذْنَا صُوَرًا، وَقُلْتُ لِأُخْتِي: «أَنَا فَخُورٌ بِكِ!». أَخِيرًا رَجَعْنَا إِلَى الْبَيْتِ وَأَكَلْنَا عَشَاءً لَذِيذًا. تَعَلَّمْتُ أَنَّ الْجُهْدَ يَصْنَعُ النَّجَاحَ.',
    en: 'The most beautiful day of my life was my older sister’s graduation day. In the morning we put on new clothes and went to the university. First we sat in a big hall, then the male and female students came in. When we heard my sister’s name, we clapped a lot, and my mother cried with joy. After that we took photos, and I said to my sister: “I am proud of you!”. Finally we went home and ate a delicious dinner. I learned that effort creates success.',
    find: ['I', 'we', 'she / they', 'sequence'],
    source: 'teacher model on the website blog task',
  },
  selfCheck: [
    { route: 'core', text: 'Each ending matches its subject.' },
    { route: 'core', text: 'I used -tu for I and -nā for we.' },
    { route: 'develop', text: 'I used -at for she and -ū for they.' },
    { route: 'develop', text: 'My story moves in order with sequence words.' },
    { route: 'stretch', text: 'Weak stems are correct (qultu, mashaynā).' },
  ],
  exit: [
    W(/Mastery/, 1, { prompt: 'Choose “you (f.) wrote”.', feedback: '-ti = you (f.).' }),
    W(/Mastery/, 4, { prompt: 'Choose “they two (f.) wrote”.', feedback: '-atā = they two (f.).' }),
    W(/Mastery/, 7, { prompt: 'Choose “we said”.', feedback: 'Hollow short stem: qulnā.' }),
  ],
  mastery: false,
  prep: {
    words: [['أَكْتُبُ', 'I write', 'a-'], ['تَكْتُبُ', 'you write / she writes', 'ta-'], ['يَكْتُبُ', 'he writes', 'ya-'], ['نَكْتُبُ', 'we write', 'na-'], ['يَكْتُبُونَ', 'they write', 'ya- … -ūna']],
    questionEn: 'In the past the ending shows the person. Where is the person shown in aktubu, taktubu, naktubu?',
    questionAr: 'أَكْتُبُ · تَكْتُبُ · ______ · نَكْتُبُ',
    homework: {
      core: 'Conjugate darasa for I, we, you (m.), you (f.), she, they.',
      develop: 'Repair a story with person-ending mistakes.',
      stretch: 'Website blog entry about a memorable day.',
    },
    wordsSource: 'The five forms prepare GM-V-05 (website Verbs lesson 5: the present tense).',
  },
  remember: 'Remember: the ending tells who · -tu I · -ta you (m.) · -ti you (f.) · -at she · -nā we · -ū they · -na they (f.) · identify the family, then add the ending.',
});

module.exports = { meta, slides };
