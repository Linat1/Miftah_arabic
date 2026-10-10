'use strict';
/* GM-INT-02 · Which? Gender and Case Agreement — website: Mastery & Revision › Grammar › Interrogatives › Lesson 2 (ayy / ayya
 * asks for a choice from a known set — not an open “what?”; gender follows the NOUN: ayyu yawmin, ayyatu sāʿatin; ayy / ayya is
 * the first term of an iḍāfa, so the noun after it is genitive (-in); the case of ayy / ayya follows the role of the whole phrase:
 * ayyu (subject), ayya (object), ayyi (after a preposition); answers and follow-ups; Stretch: ayyuhumā; clinic). Quizzes are the
 * website’s (Which? Starter, Mini-checks: gender, case; Repair lab; Mastery); the Starter item with “only” options is skipped.
 * Colour code: teal = ayy / ayya, purple = the genitive noun. I-do, meaning → question drill, gender sorter, reading, frames and
 * the model dialogue are teacher-made on the website content (the drill uses the website game items). */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__14-interrogatives__grammar-mastery-02-ayy-ayyah';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-INT-02', fileTitle: 'Ayy_Ayya', title: 'Which? Gender and Case Agreement', arabic: 'أَيّ وَأَيَّة: التَّذْكِيرُ وَالتَّأْنِيثُ وَالْإِعْرَابُ',
  focus: 'Which? = ayyu with masculine nouns (ayyu yawmin?) and ayyatu with feminine nouns (ayyatu sāʿatin?). The noun after it ends in -in; ayy itself takes -u, -a or -i depending on its job in the sentence.',
  icon: 'FaListCheck',
});

const slides = G.gmLesson({
  code: 'GM-INT-02', site: KEY,
  support: `• Core: ayy with masculine nouns, ayya with feminine nouns, followed by a singular noun in -in (ayyu kitābin? ayyatu madīnatin?). Develop: the case of ayy / ayya follows the role of the phrase — ayyu (subject), ayya (object), ayyi (after a preposition); “which?” vs open mā / mādhā. Stretch: ayyuhumā (which of the two?) and editing complex questions.
• Website three-step decision: gender → role of the whole phrase → the noun after it stays genitive. Gender comes from the NOUN, not from the person speaking (ṭarīq is masculine; sāʿa is feminine).
• Colour code: teal = ayy / ayya, purple = genitive noun. Builds on GM-POS-02 (iḍāfa) and GM-CASE-01 to 03.`,
  teach: 'Which or what?; gender; the construct; case; answers.',
  wedo: 'Meaning → question; masculine or feminine?; repair.',
  next: { nextCode: 'GM-INT-03', nextTitle: 'Common Question Words', nextAr: 'أَدَوَاتُ الِاسْتِفْهَامِ الشَّائِعَةُ' },
  doNow: {
    questions: [
      W(/Which\? Starter/, 0, { prompt: 'Choose “which day”.', feedback: 'Yawm is masculine: ayyu.' }),
      W(/Which\? Starter/, 1, { prompt: 'Choose “which car”.', feedback: 'Sayyāra is feminine: ayyatu.' }),
      W(/Which\? Starter/, 2, { feedback: 'The noun completes an iḍāfa: genitive.' }),
      W(/Which\? Starter/, 3, { prompt: 'Choose “Which book did you read?”', feedback: 'Object: ayya; noun -in.' }),
      W(/Which\? Starter/, 4, { prompt: 'Choose “In which class?”', feedback: 'After fī: ayyi.' }),
    ],
    keyIdea: { text: 'Gender from the noun → case from the job → the noun after ayy is always -in.', ar: '{k|أَيُّ} {m|يَوْمٍ}؟ ‖ {k|أَيَّةُ} {m|سَاعَةٍ}؟' },
    retrieves: 'The website Starter — GM-POS-02 iḍāfa and GM-CASE-01 to 03 endings.',
  },
  objectives: ['Use ayy with masculine and ayya with feminine nouns.', 'Put the noun after it in the genitive.', 'Give ayy the case of its sentence role.', 'Tell “which?” from “what?”.'],
  routes: {
    core: ['I write ayyu yawmin? and ayyatu sāʿatin?', 'I answer with a full sentence.'],
    develop: ['I write ayya kitābin qaraʾta?', 'I write fī ayyati madrasatin?'],
    stretch: ['I use ayyuhumā.', 'I write a choice dialogue with all three cases.'],
  },
  terms: {
    items: [
      { ar: 'أَيٌّ', en: 'which? (masculine nouns)', note: 'أَيُّ يَوْمٍ؟' },
      { ar: 'أَيَّةٌ', en: 'which? (feminine nouns)', note: 'أَيَّةُ سَاعَةٍ؟' },
      { ar: 'الِاخْتِيَارُ', en: 'a choice from a known set', note: 'أَيُّ كِتَابٍ؟' },
      { ar: 'الْمُضَافُ إِلَيْهِ', en: 'noun after ayy (genitive)', note: 'كِتَابٍ' },
      { ar: 'الْمَوْقِعُ', en: 'the role in the sentence', note: 'أَيُّ · أَيَّ · أَيِّ' },
      { ar: 'أَيُّهُمَا', en: 'which of the two?', note: 'أَيُّهُمَا أَفْضَلُ؟' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 1 · which? versus what? (website table)', title: 'Which? = choose one from a set', ar: 'أَيٌّ أَمْ مَا؟', ltr: true,
      cols: [{ label: 'Question type', w: 3.6 }, { label: 'Arabic model', w: 4.4, size: 22 }, { label: 'Expected answer', w: 4.33, size: 22 }],
      rows: [
        { core: true, cells: ['open: What is this?', 'مَا هَذَا؟', 'هَذَا جِهَازٌ.'] },
        { core: true, cells: ['choice: Which device?', 'أَيُّ جِهَازٍ تُرِيدُ؟', 'أُرِيدُ الْحَاسُوبَ.'] },
        { cells: ['open: What are you reading?', 'مَاذَا تَقْرَأُ؟', 'أَقْرَأُ قِصَّةً.'] },
        { cells: ['choice: Which story?', 'أَيَّةَ قِصَّةٍ تَقْرَأُ؟', 'أَقْرَأُ الْقِصَّةَ الْأُولَى.'] },
      ],
      foot: 'Website meaning test: can the listener point to one option — a day, route, subject or item? If yes, “which?” (ayy / ayya) is the right question.',
      notes: 'PART 1 (2 min) — website “ayy / ayya versus what?”. Hold up three books: mā hādhā? vs ayyu kitābin turīdu?',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · gender agreement: ayy or ayya (website lists)', title: 'The noun decides — not the speaker', ar: 'أَيٌّ أَمْ أَيَّةٌ؟', ltr: true,
      cols: [{ label: 'Masculine noun', w: 3.4, size: 24 }, { label: 'Meaning', w: 2.8 }, { label: 'Feminine noun', w: 3.4, size: 24 }, { label: 'Meaning', w: 2.73 }],
      rows: [
        { core: true, cells: ['أَيُّ يَوْمٍ؟', 'which day?', 'أَيَّةُ سَاعَةٍ؟', 'which hour?'] },
        { core: true, cells: ['أَيُّ كِتَابٍ؟', 'which book?', 'أَيَّةُ مَدْرَسَةٍ؟', 'which school?'] },
        { cells: ['أَيُّ فِلْمٍ؟', 'which film?', 'أَيَّةُ حَقِيبَةٍ؟', 'which bag?'] },
        { cells: ['أَيُّ طَرِيقٍ؟', 'which road?', 'أَيَّةُ رِيَاضَةٍ؟', 'which sport?'] },
        { core: true, cells: ['أَيُّ لَوْنٍ؟', 'which colour?', 'أَيَّةُ لُغَةٍ؟', 'which language?'] },
      ],
      foot: 'Website warning: do not guess from meaning — learn the grammatical gender with the noun. Ṭarīq is masculine; sāʿa is feminine. Most nouns ending in tāʾ marbūṭa are feminine → ayya.',
      notes: 'PART 2 (3 min) — website “Gender agreement”. Choral: masculine column, then feminine column. In everyday speech ayy is also heard with feminine nouns; ayya is the careful exam target.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · the construct structure (website table) · Develop', title: 'Ayy + noun = an iḍāfa', ar: 'أَيٌّ مُضَافٌ', ltr: true,
      cols: [{ label: 'First term', w: 2.8, size: 26 }, { label: 'Second term', w: 3.2, size: 26 }, { label: 'Meaning', w: 6.33 }],
      rows: [
        { core: true, cells: ['أَيُّ', 'يَوْمٍ', 'which day'] },
        { core: true, cells: ['أَيَّةُ', 'سَاعَةٍ', 'which hour / time'] },
        { cells: ['أَيَّ', 'كِتَابٍ', 'which book (as an object)'] },
        { cells: ['أَيَّةِ', 'مَدْرَسَةٍ', 'which school (after a preposition)'] },
      ],
      foot: 'Website: two endings, two jobs. The ending on ayy / ayya follows the role of the whole phrase; the noun after it is ALWAYS genitive because it completes the iḍāfa.',
      notes: 'PART 3 (2 min) — website “The construct structure”. Link to GM-POS-02: first noun bare, second noun -i / -in.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 4 · case on ayy / ayya (website table) · Develop', title: 'What job does the whole phrase do?', ar: 'إِعْرَابُ أَيٍّ', ltr: true,
      cols: [{ label: 'Role', w: 2.8 }, { label: 'Masculine', w: 3.9, size: 22 }, { label: 'Feminine', w: 4.2, size: 22 }, { label: 'Ending', w: 1.43 }],
      rows: [
        { core: true, cells: ['subject', 'أَيُّ يَوْمٍ يُنَاسِبُكَ؟', 'أَيَّةُ سَاعَةٍ تُنَاسِبُكِ؟', '-u'] },
        { core: true, cells: ['object', 'أَيَّ كِتَابٍ قَرَأْتَ؟', 'أَيَّةَ رِيَاضَةٍ تُفَضِّلِينَ؟', '-a'] },
        { core: true, cells: ['after a preposition', 'فِي أَيِّ فَصْلٍ تَدْرُسُ؟', 'فِي أَيَّةِ مَدْرَسَةٍ تَدْرُسِينَ؟', '-i'] },
      ],
      foot: 'Website three-step decision: (1) gender of the noun → ayy or ayya; (2) role of the whole phrase → -u, -a or -i; (3) the noun after it → -in.',
      notes: 'PART 4 (3 min) — website “Case on ayy / ayya”. Ask: does the choice DO the action (-u), RECEIVE it (-a), or come after fī / min / ilā (-i)?',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 5 · known choices, answers and follow-ups (website models) · Stretch', title: 'Ask the category — answer with the choice', ar: 'السُّؤَالُ وَالْجَوَابُ', ltr: true,
      cols: [{ label: 'Question', w: 4.4, size: 22 }, { label: 'Answer', w: 5.0, size: 22 }, { label: 'Context', w: 2.93 }],
      rows: [
        { core: true, cells: ['أَيُّ يَوْمٍ تُفَضِّلُ؟', 'أُفَضِّلُ يَوْمَ السَّبْتِ لِأَنَّنِي مُتَفَرِّغٌ.', 'timetable'] },
        { cells: ['إِلَى أَيَّةِ مَدِينَةٍ سَتُسَافِرِينَ؟', 'سَأُسَافِرُ إِلَى الْقَاهِرَةِ.', 'travel'] },
        { core: true, cells: ['أَيَّةَ مَادَّةٍ تُحِبُّ؟', 'أُحِبُّ عِلْمَ الْأَحْيَاءِ لِأَنَّهُ مُثِيرٌ.', 'school'] },
        { cells: ['أَيُّهُمَا أَفْضَلُ لَكَ؟', 'هَذَا أَفْضَلُ لِي.', 'two options'] },
      ],
      foot: 'Website: a strong question names the category; a strong answer names the chosen item and gives a reason. Ayyuhumā = which of the two (ayy + the dual ending -humā).',
      notes: 'PART 5 (2 min) — website “Known choices, answers and follow-ups”.',
    },
  ],
  quick: [
    W(/gender/, 0, { prompt: 'Choose “which language”.', feedback: 'Lugha is feminine.' }),
    W(/gender/, 1, { prompt: 'Choose “which road”.', feedback: 'Ṭarīq is masculine.' }),
    W(/gender/, 2, { prompt: 'Choose “Which sport do you prefer?”', feedback: 'Feminine + object: ayyata.' }),
    W(/gender/, 3, { prompt: 'Choose “Which colour suits you?”', feedback: 'Masculine + subject: ayyu.' }),
  ],
  quickNote: 'website mini-check: gender.',
  ido: {
    title: 'Watch me build “which?” questions',
    steps: [
      { head: 'Noun', ar: 'مَادَّةٍ', think: 'Feminine → ayya.' },
      { head: 'Role', ar: 'سَتَخْتَارُ', think: 'Object of the verb → -a.' },
      { head: 'Question', ar: 'أَيَّةَ مَادَّةٍ', think: 'ayyata + noun -in.' },
      { head: 'After fī', ar: 'فِي أَيَّةِ قَاعَةٍ', think: 'Genitive -i.' },
    ],
    legend: ['k', 'm'], legendLabels: { k: 'WHICH', m: 'NOUN (-in)' },
    model: '{k|أَيَّةَ} {m|مَادَّةٍ} سَتَخْتَارُ؟ {k|أَيُّ} {m|يَوْمٍ} يُنَاسِبُكَ؟ فِي {k|أَيَّةِ} {m|قَاعَةٍ} سَتَكُونُ الْحِصَّةُ؟ — أَخْتَارُ الْكِيمْيَاءَ. يُنَاسِبُنِي يَوْمُ الثُّلَاثَاءِ. الْحِصَّةُ فِي الْقَاعَةِ الثَّالِثَةِ.',
    modelEn: 'Which subject will you choose? Which day suits you? In which hall will the lesson be? — I choose chemistry. Tuesday suits me. The lesson is in the third hall.',
    notes: 'Website “Reading: course choices” questions with teacher answers. Website task: identify the gender and case evidence in each question.',
  },
  models: [
    { ar: 'أَيُّ يَوْمٍ يُنَاسِبُكَ؟', en: 'Which day suits you?', tip: 'Subject: ayyu.' },
    { ar: 'أَيَّ كِتَابٍ قَرَأْتَ؟', en: 'Which book did you read?', tip: 'Object: ayya.' },
    { ar: 'فِي أَيَّةِ مَدْرَسَةٍ تَدْرُسِينَ؟', en: 'Which school do you study at? (to a girl)', tip: 'After fī: ayyati.' },
    { ar: 'أَيُّهُمَا أَفْضَلُ لَكَ؟', en: 'Which of the two is better for you?', tip: 'Two options.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · meaning → question (website game)', title: 'Gender first, then case', ar: 'اِبْنِ السُّؤَالَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Meaning', w: 3.8 }, { label: 'Arabic', w: 5.0, size: 22 }, { label: 'Gender · case', w: 3.53 }],
      rows: [
        { core: true, cells: ['Which day suits you?', 'أَيُّ يَوْمٍ يُنَاسِبُكَ؟', 'm. · subject -u'] },
        { core: true, cells: ['Which book did you buy?', 'أَيَّ كِتَابٍ اشْتَرَيْتَ؟', 'm. · object -a'] },
        { core: true, cells: ['Which bag did she choose?', 'أَيَّةَ حَقِيبَةٍ اخْتَارَتْ؟', 'f. · object -a'] },
        { cells: ['In which class?', 'فِي أَيِّ فَصْلٍ؟', 'm. · after fī -i'] },
        { cells: ['From which city?', 'مِنْ أَيَّةِ مَدِينَةٍ؟', 'f. · after min -i'] },
        { cells: ['Which language is easier?', 'أَيَّةُ لُغَةٍ أَسْهَلُ؟', 'f. · subject -u'] },
      ],
      foot: 'Website editing sequence: gender → sentence role → genitive noun after ayy.',
      notes: 'WE DO (3 min) — website game items. Cover column 2; students say gender and case BEFORE building the question.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · learn the gender with the noun', title: 'Ayy or ayya?', ar: 'أَيٌّ أَمْ أَيَّةٌ؟',
      categories: ['Masculine → ayy', 'Feminine → ayya'],
      items: [['يَوْمٌ', 0], ['كِتَابٌ', 0], ['طَرِيقٌ', 0], ['لَوْنٌ', 0], ['سَاعَةٌ', 1], ['لُغَةٌ', 1], ['رِيَاضَةٌ', 1], ['مَدِينَةٌ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Then build a question for each card: ayyu ṭarīqin aqṣaru? ayyatu lughatin tuḥibbu?',
    },
  ],
  mistakes: [
    { wrong: 'أَيَّةُ يَوْمٍ يُنَاسِبُكِ؟', right: 'أَيُّ يَوْمٍ يُنَاسِبُكِ؟', why: 'Yawm is masculine (website repair lab).' },
    { wrong: 'مِنْ أَيَّةُ دَوْلَةٌ أَنْتَ؟', right: 'مِنْ أَيَّةِ دَوْلَةٍ أَنْتَ؟', why: 'After min: ayyati … dawlatin (website repair lab).' },
    { wrong: 'أَيُّ كِتَابٌ قَرَأْتَ؟', right: 'أَيَّ كِتَابٍ قَرَأْتَ؟', why: 'Object: ayya; the noun after it is -in (website clinic).' },
  ],
  hints: ['Is yawm masculine or feminine?', 'What does min do?', 'Did the book do the action or receive it?'],
  practice: [
    W(/Mini-check: case/, 0, { prompt: 'Choose “Which teacher arrived?”', feedback: 'Subject: ayyu.' }),
    W(/Mini-check: case/, 1, { prompt: 'Choose “Which film did you watch?”', feedback: 'Object: ayya.' }),
    W(/Mini-check: case/, 2, { prompt: 'Choose “From which city?”', feedback: 'After min: ayyati madīnatin.' }),
    W(/Repair lab/, 1, { prompt: 'Repair: أَيُّ حَقِيبَةٍ اشْتَرَيْتِ؟', feedback: 'Feminine + object: ayyata.' }),
  ],
  practiceLabel: 'website mini-check: case and Repair lab',
  read: {
    title: 'Choosing an extra subject', label: 'website reading: course choices (extended notice)',
    text: 'أَهْلًا بِكُمْ فِي الْأُسْبُوعِ الْأَوَّلِ! أَيَّةَ مَادَّةٍ إِضَافِيَّةٍ سَتَخْتَارُونَ هَذَا الْفَصْلَ؟ عِنْدَنَا ثَلَاثُ مَوَادَّ: الْفُنُونُ، وَالْبَرْمَجَةُ، وَالْخَطُّ الْعَرَبِيُّ. أَيُّ يَوْمٍ يُنَاسِبُكُمْ؟ الْحِصَصُ يَوْمَ الِاثْنَيْنِ أَوْ يَوْمَ الْأَرْبِعَاءِ. فِي أَيَّةِ قَاعَةٍ سَتَكُونُ الْحِصَّةُ؟ حِصَّةُ الْبَرْمَجَةِ فِي مُخْتَبَرِ الْحَاسُوبِ، وَحِصَّةُ الْخَطِّ فِي الْمَكْتَبَةِ. اُكْتُبُوا اسْمَ الْمَادَّةِ وَالْيَوْمِ عَلَى الْوَرَقَةِ، وَأَعْطُوهَا لِمُعَلِّمِ الْفَصْلِ قَبْلَ يَوْمِ الْخَمِيسِ.',
    glossary: [['إِضَافِيَّةٍ', 'extra'], ['الْبَرْمَجَةُ', 'programming'], ['الْخَطُّ', 'calligraphy'], ['مُخْتَبَرِ', 'laboratory'], ['الْوَرَقَةِ', 'the sheet of paper']],
    task: 'Website: identify the gender and case evidence in each “which?” question.',
    questions: [
      q('How many extra subjects are offered?', ['three', 'two', 'four'], 'Thalāthu mawādda.'),
      q('Where is the programming lesson?', ['in the computer lab', 'in the library', 'in the hall'], 'Fī mukhtabari l-ḥāsūbi.'),
      q('Why is it ayyata in ayyata māddatin?', ['feminine noun, object of the verb', 'masculine noun', 'after a preposition'], 'Mādda is feminine; it receives sa-takhtārūna.'),
      q('When must they hand in the sheet?', ['before Thursday', 'on Monday', 'on Wednesday'], 'Qabla yawmi l-khamīsi.'),
    ],
    qNote: 'Website course-choice questions in a teacher-written notice; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: the choice ladder', source: 'website speaking task',
    prompts: [
      { route: 'core', ar: 'أَيُّ لَوْنٍ تُحِبُّ؟' },
      { route: 'develop', ar: 'أَيَّةَ رِيَاضَةٍ تُفَضِّلُ؟ وَلِمَاذَا؟' },
      { route: 'stretch', ar: 'إِلَى أَيَّةِ مَدِينَةٍ تُرِيدُ أَنْ تُسَافِرَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أُحِبُّ اللَّوْنَ ______ .' },
      { route: 'develop', ar: 'أُفَضِّلُ ______ لِأَنَّهَا ______ .' },
      { route: 'stretch', ar: 'أُرِيدُ أَنْ أُسَافِرَ إِلَى ______ ، لِأَنَّ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'أَيُّ يَوْمٍ يُنَاسِبُكِ لِلزِّيَارَةِ؟', en: 'Which day suits you for the visit? (to a girl)' },
      { who: 'B', ar: 'يُنَاسِبُنِي يَوْمُ السَّبْتِ لِأَنَّنِي مُتَفَرِّغَةٌ. وَفِي أَيَّةِ سَاعَةٍ نَلْتَقِي؟', en: 'Saturday suits me because I am free. And at what time shall we meet?' },
    ],
    notes: 'Website: ask about a day, subject, city, sport, colour and book; give a full answer and one reason each time.',
  },
  write: {
    siteTask: 'Write a dialogue in which one person chooses a course, journey, item or activity from several options.',
    core: { amount: '6 lines', task: 'Three “which?” questions with answers.', how: 'ayyu yawmin …? · ayyatu sāʿatin …?' },
    develop: { amount: '10 lines', task: 'Use all three cases and two prepositions.', how: 'ayya … · fī ayyati …' },
    stretch: { amount: '14 lines', task: 'Website choice dialogue with the full checklist.', how: 'End with ayyuhumā.' },
  },
  frames: {
    core: [
      { en: 'Which … suits you?', ar: 'أَيُّ ______ يُنَاسِبُكَ؟' },
      { en: 'Which … do you like? (m. noun)', ar: 'أَيَّ ______ تُحِبُّ؟' },
      { en: 'Which … do you prefer? (f. noun)', ar: 'أَيَّةَ ______ تُفَضِّلُ؟' },
      { en: 'I prefer … because …', ar: 'أُفَضِّلُ ______ لِأَنَّ ______ .' },
    ],
    develop: [
      { en: 'In which … do you study?', ar: 'فِي أَيِّ ______ تَدْرُسُ؟' },
      { en: 'From which city …?', ar: 'مِنْ أَيَّةِ مَدِينَةٍ ______ ؟' },
      { en: 'To which … will you travel?', ar: 'إِلَى أَيَّةِ ______ سَتُسَافِرُ؟' },
      { en: 'Which of the two …?', ar: 'أَيُّهُمَا ______ ؟' },
    ],
    bank: ['أَيُّ', 'أَيَّ', 'أَيِّ', 'أَيَّةُ', 'أَيَّةَ', 'أَيَّةِ', 'يَوْمٍ', 'كِتَابٍ', 'لَوْنٍ', 'سَاعَةٍ', 'مَدِينَةٍ', 'رِيَاضَةٍ', 'أَيُّهُمَا'],
  },
  stretchTask: {
    task: 'Website choice-based conversation: one person chooses a course, journey, item or activity from several options.',
    checklist: ['Three masculine and three feminine “which?” questions.', 'All three cases (-u, -a, -i).', 'Two prepositions before ayy / ayya.', 'One ayyuhumā.', 'Complete answers with reasons.'],
    phrases: [['يُنَاسِبُنِي', 'suits me'], ['أَقْتَرِحُ', 'I suggest'], ['أَفْضَلُ', 'better / best'], ['مُتَفَرِّغٌ', 'free (not busy)'], ['إِذَنْ', 'so / then'], ['أَظُنُّ أَنَّ', 'I think that']],
  },
  model: {
    text: '— أُرِيدُ أَنْ أَشْتَرِكَ فِي نَادٍ جَدِيدٍ هَذَا الْفَصْلَ. أَيَّ نَادٍ تَقْتَرِحِينَ؟ — عِنْدَنَا نَادِي الْقِرَاءَةِ وَنَادِي الرُّوبُوتَاتِ. أَيُّ نَشَاطٍ يُنَاسِبُكِ أَكْثَرَ؟ — أُحِبُّ التِّقْنِيَّةَ، لَكِنَّ وَقْتِي ضَيِّقٌ. فِي أَيِّ يَوْمٍ يَجْتَمِعُ نَادِي الرُّوبُوتَاتِ؟ — يَوْمَ الثُّلَاثَاءِ بَعْدَ الظُّهْرِ. — وَفِي أَيَّةِ قَاعَةٍ؟ — فِي مُخْتَبَرِ الْحَاسُوبِ، بِجَانِبِ الْمَكْتَبَةِ. — وَأَيَّةَ مَهَارَةٍ سَأَتَعَلَّمُ هُنَاكَ؟ — سَتَتَعَلَّمِينَ الْبَرْمَجَةَ وَتَصْمِيمَ الرُّوبُوتَاتِ. — إِذَنْ، أَيُّهُمَا أَفْضَلُ لِي: الْقِرَاءَةُ أَمِ الرُّوبُوتَاتُ؟ — أَظُنُّ أَنَّ الرُّوبُوتَاتِ أَفْضَلُ لَكِ، لِأَنَّكِ تُحِبِّينَ التِّقْنِيَّةَ.',
    en: '— I want to join a new club this term. Which club do you suggest? — We have the reading club and the robotics club. Which activity suits you more? — I love technology, but my time is tight. On which day does the robotics club meet? — On Tuesday afternoon. — And in which room? — In the computer lab, next to the library. — And which skill will I learn there? — You will learn programming and robot design. — So which of the two is better for me: reading or robotics? — I think robotics is better for you, because you love technology.',
    find: ['ayyu (subject)', 'ayya / ayyata (object)', 'fī ayyi / ayyati (after a preposition)', 'ayyuhumā'],
    source: 'teacher model on the website dialogue task',
  },
  selfCheck: [
    { route: 'core', text: 'Masculine nouns take ayy; feminine nouns take ayya.' },
    { route: 'core', text: 'The noun after ayy ends in -in.' },
    { route: 'develop', text: 'Subject → ayyu; object → ayya; after a preposition → ayyi.' },
    { route: 'develop', text: 'I used “which?” only for a choice from a known set.' },
    { route: 'stretch', text: 'I used ayyuhumā for two options.' },
  ],
  exit: [
    W(/Mastery/, 4, { prompt: 'Choose “Which car did you buy?”', feedback: 'Feminine + object: ayyata.' }),
    W(/Mastery/, 5, { prompt: 'Choose “In which school?”', feedback: 'Feminine + after fī: ayyati.' }),
    W(/Mastery/, 8, { prompt: 'Choose the accurate question with ilā.', feedback: 'Ilā governs the whole phrase.' }),
  ],
  mastery: false,
  prep: {
    words: [['مَنْ', 'who?', '—'], ['مَاذَا', 'what? (with a verb)', '—'], ['أَيْنَ', 'where?', '—'], ['مَتَى', 'when?', '—'], ['لِمَاذَا', 'why?', '—']],
    questionEn: 'Each question word asks for a different piece of information. Which word would you use to ask about a time?',
    questionAr: '______ تَبْدَأُ الْحِصَّةُ؟',
    homework: {
      core: 'Write six “which?” questions: three masculine, three feminine nouns.',
      develop: 'Write one question in each case for “which book?” and “which school?”.',
      stretch: 'Website choice dialogue (14 lines).',
    },
    wordsSource: 'The five words prepare GM-INT-03 (website: common question words).',
  },
  remember: 'Remember: which? = ayy (masculine noun) / ayya (feminine noun) + noun in -in · subject → ayyu · object → ayya · after a preposition → ayyi · use “which?” for a choice from a known set; mā / mādhā for open questions · ayyuhumā = which of the two?',
});

module.exports = { meta, slides };
