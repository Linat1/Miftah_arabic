'use strict';
/* GM-VS-02 · Subject-First Full Agreement — website: Mastery & Revision › Grammar › Verbal Sentences › Lesson 2 (subject first → the verb
 * mirrors person, gender and number; past-tense endings -a / -at / -ā / -atā / -ū / -na; present prefixes and suffixes yaktubu …
 * yaktubna; the future is sa- / sawfa + the agreeing present; the non-human plural exception: feminine singular; coordinated human
 * subjects; clinic). Quizzes are the website’s (Entry, Past, Present, Human or Non-Human, Final Mastery) plus the website game. Colour
 * code for this area: teal = verb, blue = subject. I-do, conjugation grid, sorter, reading, frames and the extended model are
 * teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__10-verbal-sentences__grammar-mastery-02-subject-first-agreement';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-VS-02', fileTitle: 'Subject_First_Agreement', title: 'Subject-First Full Agreement', arabic: 'الْمُطَابَقَةُ الْكَامِلَةُ عِنْدَ تَقَدُّمِ الْفَاعِلِ',
  focus: 'When people come first, the verb copies them completely: aṭ-ṭullābu katabū, aṭ-ṭālibātu katabna, aṭ-ṭālibāni katabā. One exception: non-human plurals take a feminine singular verb — al-ḥāfilātu waṣalat.',
  icon: 'FaPeopleGroup',
});

const slides = G.gmLesson({
  code: 'GM-VS-02', site: KEY,
  support: `• Core: masculine and feminine singular (kataba · katabat) and the past plural -ū. Develop: the full family — dual -ā / -atā, feminine plural -na — in past, present and future (yaktubūna, yaktubna, sa-yaktubāni). Stretch: the non-human plural exception (al-ḥawāsību taʿmalu) and coordinated subjects (ʿAlī wa-Aḥmadu dhahabā).
• Website memory line: subject first → full agreement. Ask three questions about the subject: who (person)? male or female (gender)? one, two or more (number)?
• Watch the feminine plural present: aṭ-ṭālibātu YAktubna (yā’, not tā’). Recycles GM-V-05/06 past and present endings and GM-VS-01 roles.`,
  teach: 'Three features; past family; present and future family; non-human exception; pairs.',
  wedo: 'One verb, six subjects; human or not?; repair.',
  next: { nextCode: 'GM-VS-03', nextTitle: 'Verb-First Agreement', nextAr: 'الْمُطَابَقَةُ عِنْدَ تَقَدُّمِ الْفِعْلِ' },
  doNow: {
    questions: [
      W(/Entry Check/, 0, { feedback: 'One boy: kataba.' }),
      W(/Entry Check/, 1, { feedback: 'One girl: katabat.' }),
      W(/Entry Check/, 2, { feedback: 'Two boys: katabā.' }),
      W(/Entry Check/, 3, { feedback: 'A group of girls: katabna.' }),
      W(/Entry Check/, 4, { feedback: 'Buses are not people: feminine singular.' }),
    ],
    keyIdea: { text: 'Subject first → the verb copies who, gender and number. Non-human plurals → feminine singular.', ar: '{w|الطُّلَّابُ} {k|كَتَبُوا} ‖ {w|الْحَافِلَاتُ} {k|وَصَلَتْ}' },
    retrieves: 'The website Entry Check (questions 1–5) — GM-VS-01 subject-first order and GM-V past endings.',
  },
  objectives: ['Match the verb to a singular subject.', 'Use dual and plural verb endings.', 'Agree in past, present and future.', 'Treat non-human plurals as feminine singular.'],
  routes: {
    core: ['I match kataba / katabat to one person.', 'I write aṭ-ṭullābu katabū.'],
    develop: ['I use all six past endings.', 'I agree in the present and future.'],
    stretch: ['I use the non-human plural rule.', 'I write a group report with paired subjects.'],
  },
  terms: {
    items: [
      { ar: 'الْمُطَابَقَةُ', en: 'agreement — the verb copies the subject', note: 'الطُّلَّابُ كَتَبُوا' },
      { ar: 'الْمُفْرَدُ', en: 'singular (one)', note: 'الطَّالِبُ' },
      { ar: 'الْمُثَنَّى', en: 'dual (two)', note: 'الطَّالِبَانِ' },
      { ar: 'الْجَمْعُ', en: 'plural (three or more)', note: 'الطُّلَّابُ' },
      { ar: 'الْمُذَكَّرُ · الْمُؤَنَّثُ', en: 'masculine · feminine', note: 'كَتَبَ · كَتَبَتْ' },
      { ar: 'جَمْعُ غَيْرِ الْعَاقِلِ', en: 'non-human plural', note: 'الْكُتُبُ وَصَلَتْ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · the core subject-first rule (website table)', title: 'Who? Male or female? How many?', ar: 'الْفَاعِلُ أَوَّلًا: مُطَابَقَةٌ كَامِلَةٌ', ltr: true,
      cols: [{ label: 'Feature', w: 2.4 }, { label: 'Ask about the subject', w: 3.2 }, { label: 'Website model', w: 6.73, size: 24 }],
      rows: [
        { core: true, cells: ['Person', 'I, we, he, she, they?', 'أَنَا كَتَبْتُ الرِّسَالَةَ.'] },
        { core: true, cells: ['Gender', 'masculine or feminine?', 'الطَّالِبَةُ كَتَبَتِ الرِّسَالَةَ.'] },
        { cells: ['Number: two', 'one, two or more?', 'الطَّالِبَتَانِ كَتَبَتَا الرِّسَالَةَ.'] },
        { core: true, cells: ['Number: group (m.)', 'boys / mixed group?', 'الطُّلَّابُ كَتَبُوا الرِّسَالَةَ.'] },
        { cells: ['Number: group (f.)', 'girls only?', 'الطَّالِبَاتُ كَتَبْنَ الرِّسَالَةَ.'] },
      ],
      foot: 'Website memory line: subject first means FULL agreement — the verb shows the person, the gender and the number of the subject that came before it.',
      notes: 'PART 1 (3 min) — website “The core subject-first rule”. Point at each verb ending and ask: how does the verb know who did it?',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · past-tense full agreement (website table)', title: 'Six subjects, six endings', ar: 'الْمَاضِي', ltr: true,
      cols: [{ label: 'Subject first', w: 2.8, size: 24 }, { label: 'Verb', w: 2.2, size: 26 }, { label: 'Ending', w: 2.0 }, { label: 'Meaning', w: 5.33 }],
      rows: [
        { core: true, cells: ['الطَّالِبُ', 'كَتَبَ', '-a', 'The student (m.) wrote.'] },
        { core: true, cells: ['الطَّالِبَةُ', 'كَتَبَتْ', '-at', 'The student (f.) wrote.'] },
        { cells: ['الطَّالِبَانِ', 'كَتَبَا', '-ā', 'The two students (m.) wrote.'] },
        { cells: ['الطَّالِبَتَانِ', 'كَتَبَتَا', '-atā', 'The two students (f.) wrote.'] },
        { core: true, cells: ['الطُّلَّابُ', 'كَتَبُوا', '-ū', 'The students (m. / mixed) wrote.'] },
        { cells: ['الطَّالِبَاتُ', 'كَتَبْنَ', '-na', 'The students (f.) wrote.'] },
      ],
      foot: 'Website connected reading: in aṭ-ṭālibatu katabati l-wājiba a helping kasra is heard on the -t before al-. It is still the feminine singular ending. The silent alif in katabū is written, not pronounced.',
      notes: 'PART 2 (3 min) — website “Past-tense full agreement”. Core: rows 1, 2 and 5. Choral drill: say subject + verb down the table.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · present and future (website tables) · Develop', title: 'Prefix + suffix — and add sa- for the future', ar: 'الْمُضَارِعُ وَالْمُسْتَقْبَلُ', ltr: true,
      cols: [{ label: 'Subject first', w: 2.8, size: 24 }, { label: 'Present', w: 2.8, size: 26 }, { label: 'Future', w: 3.0, size: 26 }, { label: 'Meaning', w: 3.73 }],
      rows: [
        { core: true, cells: ['الطَّالِبُ', 'يَكْتُبُ', 'سَيَكْتُبُ', 'he writes · will write'] },
        { core: true, cells: ['الطَّالِبَةُ', 'تَكْتُبُ', 'سَتَكْتُبُ', 'she writes · will write'] },
        { cells: ['الطَّالِبَانِ', 'يَكْتُبَانِ', 'سَيَكْتُبَانِ', 'the two (m.) write'] },
        { cells: ['الطَّالِبَتَانِ', 'تَكْتُبَانِ', 'سَتَكْتُبَانِ', 'the two (f.) write'] },
        { core: true, cells: ['الطُّلَّابُ', 'يَكْتُبُونَ', 'سَيَكْتُبُونَ', 'they (m. / mixed) write'] },
        { cells: ['الطَّالِبَاتُ', 'يَكْتُبْنَ', 'سَيَكْتُبْنَ', 'they (f.) write'] },
      ],
      foot: 'Website: the future simply adds sa- (or sawfa) to the agreeing present: aṭ-ṭālibātu sawfa yaktubna. Two jobs for ta-: taktubu = “she writes” or “you write” — the subject tells you which.',
      notes: 'PART 3 (3 min) — website “Present-tense” and “Future” sections. Trap: the feminine plural present starts with ya- (yaktubna), not ta-.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 4 · the essential exception (website table) · Stretch', title: 'Things, not people: feminine singular', ar: 'جَمْعُ غَيْرِ الْعَاقِلِ', ltr: true,
      cols: [{ label: 'Non-human plural', w: 2.9, size: 24 }, { label: 'Verb', w: 2.4, size: 24 }, { label: 'Complete model', w: 7.03, size: 22 }],
      rows: [
        { core: true, cells: ['الْحَافِلَاتُ', 'وَصَلَتْ', 'الْحَافِلَاتُ وَصَلَتْ مُبَكِّرًا.'] },
        { core: true, cells: ['الْكُتُبُ', 'وَصَلَتْ', 'الْكُتُبُ وَصَلَتْ أَمْسِ.'] },
        { cells: ['الْمَدَارِسُ', 'تَفْتَحُ', 'الْمَدَارِسُ تَفْتَحُ أَبْوَابَهَا صَبَاحًا.'] },
        { cells: ['السَّيَّارَاتُ', 'سَتَتَوَقَّفُ', 'السَّيَّارَاتُ سَتَتَوَقَّفُ هُنَا.'] },
        { cells: ['الْحَوَاسِيبُ', 'تَعْمَلُ', 'الْحَوَاسِيبُ تَعْمَلُ بِسُرْعَةٍ.'] },
      ],
      foot: 'Website warning: do not overapply plural agreement. Al-ḥāfilātu waṣalna treats buses like a group of women. Buses, books, schools and cars take the “she” verb: waṣalat, taftaḥu.',
      notes: 'PART 4 (2 min) — website “The essential exception” (last row from the website Human or Non-Human check). Ask: is it a person? If not → the “she” form.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 5 · coordinated subjects (website) · Stretch', title: 'Two names first = a group verb', ar: 'الْفَاعِلُ الْمَعْطُوفُ', ltr: true,
      cols: [{ label: 'Who?', w: 3.0 }, { label: 'Website model', w: 7.2, size: 24 }, { label: 'Verb', w: 2.13 }],
      rows: [
        { core: true, cells: ['two boys', 'عَلِيٌّ وَأَحْمَدُ ذَهَبَا إِلَى السُّوقِ.', 'dual (m.)'] },
        { cells: ['two girls', 'مَرْيَمُ وَلَيْلَى ذَهَبَتَا إِلَى السُّوقِ.', 'dual (f.)'] },
        { cells: ['boys and girls', 'الطُّلَّابُ وَالطَّالِبَاتُ شَارَكُوا فِي الْمَشْرُوعِ.', 'mixed: -ū'] },
        { core: true, cells: ['me and my sister', 'أَنَا وَأُخْتِي ذَهَبْنَا إِلَى الْمَكْتَبَةِ.', 'we: -nā'] },
      ],
      foot: 'Website exam-safe strategy: put the whole group first, then use clear full agreement. A mixed group of men and women takes the masculine plural.',
      notes: 'PART 5 (2 min) — website “Coordinated human subjects”. Row 4 is very useful for writing: anā wa-ukhtī → naḥnu → -nā.',
    },
  ],
  quick: [
    W(/Past Agreement/, 1, { feedback: 'Two female teachers: sharaḥatā.' }),
    W(/Past Agreement/, 3, { feedback: 'A group of girls: dhahabna.' }),
    W(/Present Agreement/, 0, { feedback: 'Two girls: ta- … -āni.' }),
    W(/Human or Non-Human/, 1, { feedback: 'Cars are not people: feminine singular.' }),
  ],
  quickNote: 'website Past, Present and Human or Non-Human checks.',
  ido: {
    title: 'Watch me match the verb to the subject',
    steps: [
      { head: 'Subject', ar: 'الطَّالِبَتَانِ', think: 'People? Yes.' },
      { head: 'How many?', ar: 'اثْنَتَانِ', think: '-tāni = two.' },
      { head: 'Gender', ar: 'مُؤَنَّثٌ', think: 'Two girls.' },
      { head: 'Verb', ar: 'كَتَبَتَا', think: 'Feminine dual: -atā.' },
    ],
    legend: ['w', 'k'], legendLabels: { w: 'SUBJECT', k: 'AGREEING VERB' },
    model: '{w|الطَّالِبَةُ} {k|جَمَعَتِ} الْمَعْلُومَاتِ. {w|الطَّالِبَتَانِ} {k|كَتَبَتَا} التَّقْرِيرَ. {w|الطُّلَّابُ} {k|صَمَّمُوا} الْمُلْصَقَ. {w|الطَّالِبَاتُ} {k|يُرَاجِعْنَ} النَّصَّ الْآنَ. {w|الصُّوَرُ} {k|سَتَظْهَرُ} فِي الْعَرْضِ.',
    modelEn: 'The student (f.) collected the information. The two students (f.) wrote the report. The students designed the poster. The female students are reviewing the text now. The pictures will appear in the presentation.',
    notes: 'Website skills-workshop model, extended. The last sentence is the exception: pictures are not people → sa-taẓharu.',
  },
  models: [
    { ar: 'الْمُعَلِّمَانِ شَرَحَا الدَّرْسَ.', en: 'The two teachers explained the lesson.', tip: 'Dual: -ā.' },
    { ar: 'الْبَنَاتُ ذَهَبْنَ إِلَى الْمَلْعَبِ.', en: 'The girls went to the playground.', tip: 'Female group: -na.' },
    { ar: 'الْأَطِبَّاءُ يَعْمَلُونَ فِي الْمُسْتَشْفَى.', en: 'The doctors work in the hospital.', tip: 'Group: -ūna.' },
    { ar: 'الْحَوَاسِيبُ تَعْمَلُ بِسُرْعَةٍ.', en: 'The computers work quickly.', tip: 'Things: “she” form.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · one verb, six subjects (website game)', title: 'Who understood?', ar: 'فَهِمَ · يَفْهَمُ · سَيَفْهَمُ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Subject first', w: 3.1, size: 24 }, { label: 'Past', w: 3.0, size: 26 }, { label: 'Present', w: 3.0, size: 26 }, { label: 'Future', w: 3.23, size: 26 }],
      rows: [
        { core: true, cells: ['الطَّالِبُ', 'فَهِمَ', 'يَفْهَمُ', 'سَيَفْهَمُ'] },
        { core: true, cells: ['الطَّالِبَةُ', 'فَهِمَتْ', 'تَفْهَمُ', 'سَتَفْهَمُ'] },
        { cells: ['الطَّالِبَانِ', 'فَهِمَا', 'يَفْهَمَانِ', 'سَيَفْهَمَانِ'] },
        { cells: ['الطَّالِبَتَانِ', 'فَهِمَتَا', 'تَفْهَمَانِ', 'سَتَفْهَمَانِ'] },
        { core: true, cells: ['الطُّلَّابُ', 'فَهِمُوا', 'يَفْهَمُونَ', 'سَيَفْهَمُونَ'] },
        { cells: ['الطَّالِبَاتُ', 'فَهِمْنَ', 'يَفْهَمْنَ', 'سَيَفْهَمْنَ'] },
      ],
      foot: 'Website paper route: three columns — past, present, future. Put each subject in a row and write the fully agreeing verb beside it.',
      notes: 'WE DO (3 min) — cover columns 2–4 and build the grid together, one column at a time. Core: rows 1, 2 and 5.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · website Human or Non-Human?', title: 'People or things?', ar: 'عَاقِلٌ أَمْ غَيْرُ عَاقِلٍ؟',
      categories: ['People → plural verb', 'Things → “she” verb'],
      items: [['الْمُعَلِّمَاتُ', 0], ['الْأَطِبَّاءُ', 0], ['الْبَنَاتُ', 0], ['الْأَوْلَادُ', 0], ['السَّيَّارَاتُ', 1], ['الْحَوَاسِيبُ', 1], ['الْمَدَارِسُ', 1], ['الْكُتُبُ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Then say a verb for each: al-muʿallimātu dakhalna · as-sayyārātu dakhalat (website items).',
    },
  ],
  mistakes: [
    { wrong: 'الطُّلَّابُ كَتَبَ الْوَاجِبَ.', right: 'الطُّلَّابُ كَتَبُوا الْوَاجِبَ.', why: 'People first, so the verb must be plural (website clinic).' },
    { wrong: 'الطَّالِبَاتُ يَكْتُبُونَ.', right: 'الطَّالِبَاتُ يَكْتُبْنَ.', why: 'A group of girls needs -na (website clinic).' },
    { wrong: 'الْحَافِلَاتُ وَصَلْنَ مُبَكِّرًا.', right: 'الْحَافِلَاتُ وَصَلَتْ مُبَكِّرًا.', why: 'Buses are not people: feminine singular (website warning).' },
  ],
  hints: ['One student or many?', 'Boys or girls?', 'Are buses people?'],
  practice: [
    W(/Present Agreement/, 2, { feedback: 'Girls, present: ya- … -na.' }),
    W(/Present Agreement/, 3, { feedback: 'A group of teachers first → yashraḥūna.' }),
    W(/Human or Non-Human/, 2, { feedback: 'Doctors are people: yaʿmalūna.' }),
    W(/Human or Non-Human/, 3, { feedback: 'Computers are things: taʿmalu.' }),
  ],
  practiceLabel: 'website Present and Human or Non-Human checks',
  read: {
    title: 'Our project report', label: 'website skills workshop (teacher-written report)',
    text: 'صَفُّنَا يَعْمَلُ عَلَى مَشْرُوعٍ عَنِ الْبِيئَةِ. الْمُعَلِّمَةُ قَسَّمَتْنَا إِلَى مَجْمُوعَاتٍ. يُوسُفُ وَآدَمُ صَوَّرَا الْحَدِيقَةَ، وَالْبَنَاتُ كَتَبْنَ الْأَسْئِلَةَ. الْأَوْلَادُ يَجْمَعُونَ الْمَعْلُومَاتِ الْآنَ، وَأَنَا وَصَدِيقَتِي نُرَاجِعُ التَّقْرِيرَ. الصُّوَرُ جَمِيلَةٌ، وَالْحَوَاسِيبُ تَعْمَلُ بِسُرْعَةٍ. فِي الْأُسْبُوعِ الْقَادِمِ الْمَجْمُوعَاتُ سَتُقَدِّمُ عُرُوضَهَا، وَالْمُدِيرُ سَيَحْضُرُ.',
    glossary: [['قَسَّمَتْنَا', 'she divided us'], ['مَجْمُوعَاتٍ', 'groups'], ['صَوَّرَا', 'the two of them photographed'], ['نُرَاجِعُ', 'we review'], ['عُرُوضَهَا', 'their presentations']],
    task: 'Website: circle each subject and underline its verb. Label each pair: one, two, group (m.), group (f.) or things.',
    questions: [
      q('Who photographed the garden?', ['Yūsuf and Ādam', 'the girls', 'the teacher'], 'Yūsufu wa-Ādamu ṣawwarā.'),
      q('Why is it ṣawwarā and not ṣawwara?', ['two boys: dual', 'one boy', 'things, not people'], 'Two named boys first → dual -ā.'),
      q('Which verb agrees with a group of girls?', ['كَتَبْنَ', 'يَجْمَعُونَ', 'تَعْمَلُ'], 'Al-banātu katabna.'),
      q('Why is it taʿmalu with al-ḥawāsību?', ['things take the “she” verb', 'the computers are female', 'it is a mistake'], 'Non-human plural → feminine singular.'),
    ],
    qNote: 'Teacher-written report for the website skills workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: who did what?', source: 'website skills workshop',
    prompts: [
      { route: 'core', ar: 'مَاذَا فَعَلَتْ أُخْتُكَ أَمْسِ؟ وَمَاذَا فَعَلَ أَخُوكَ؟' },
      { route: 'develop', ar: 'مَاذَا يَفْعَلُ أَصْدِقَاؤُكَ بَعْدَ الْمَدْرَسَةِ؟' },
      { route: 'stretch', ar: 'صِفْ مَشْرُوعًا جَمَاعِيًّا: مَاذَا فَعَلَ كُلُّ شَخْصٍ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أُخْتِي ______ أَمْسِ، وَأَخِي ______ .' },
      { route: 'develop', ar: 'أَصْدِقَائِي ______ بَعْدَ الْمَدْرَسَةِ.' },
      { route: 'stretch', ar: 'أَنَا وَ______ ______ ، وَالْبَنَاتُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَيْفَ يَسِيرُ مَشْرُوعُكُمْ؟', en: 'How is your project going?' },
      { who: 'B', ar: 'جَيِّدًا! الْبَنَاتُ كَتَبْنَ الْأَسْئِلَةَ، وَالْأَوْلَادُ يَجْمَعُونَ الصُّوَرَ. أَنَا وَأَحْمَدُ سَنُقَدِّمُ الْعَرْضَ يَوْمَ الْخَمِيسِ.', en: 'Well! The girls wrote the questions, and the boys are collecting the pictures. Aḥmad and I will give the presentation on Thursday.' },
    ],
    notes: 'Website: describe what different people and groups did, do and will do without confusing singular and plural endings.',
  },
  write: {
    siteTask: 'Write 80–100 Arabic words describing what one person, two people and several groups did, do and will do in a school project.',
    core: { amount: '5 sentences', task: 'One person and two people: what they did.', how: 'akhī kataba · ukhtī katabat · al-waladāni katabā.' },
    develop: { amount: '7 sentences', task: 'Add groups in the past, present and future.', how: '-ū · -na · -ūna · sa-.' },
    stretch: { amount: '80–100 words', task: 'Website progress report with the full checklist.', how: 'Every subject before its verb.' },
  },
  frames: {
    core: [
      { en: 'My brother wrote …', ar: 'أَخِي كَتَبَ ______ .' },
      { en: 'My sister read …', ar: 'أُخْتِي قَرَأَتْ ______ .' },
      { en: 'The two boys played …', ar: 'الْوَلَدَانِ لَعِبَا ______ .' },
      { en: 'The two girls drew …', ar: 'الْبِنْتَانِ رَسَمَتَا ______ .' },
    ],
    develop: [
      { en: 'The boys are collecting …', ar: 'الْأَوْلَادُ يَجْمَعُونَ ______ .' },
      { en: 'The girls will write …', ar: 'الْبَنَاتُ سَيَكْتُبْنَ ______ .' },
      { en: 'The pictures will appear in …', ar: 'الصُّوَرُ سَتَظْهَرُ فِي ______ .' },
      { en: 'My friend and I reviewed …', ar: 'أَنَا وَصَدِيقِي رَاجَعْنَا ______ .' },
    ],
    bank: ['كَتَبَ', 'كَتَبَتْ', 'كَتَبَا', 'كَتَبَتَا', 'كَتَبُوا', 'كَتَبْنَ', 'يَكْتُبُونَ', 'يَكْتُبْنَ', 'سَيَكْتُبُونَ', 'وَصَلَتْ', 'تَعْمَلُ', 'التَّقْرِيرَ', 'الْعَرْضَ'],
  },
  stretchTask: {
    task: 'Website group progress report (80–100 words): what people did, do and will do in a school project.',
    checklist: ['One masculine and one feminine singular subject.', 'One dual subject.', 'One male / mixed group and one female group.', 'Two non-human plural subjects (“she” verb).', 'Every subject placed before its verb.'],
    phrases: [['جَمَعَ الْمَعْلُومَاتِ', 'collected the information'], ['كَتَبَ التَّقْرِيرَ', 'wrote the report'], ['صَمَّمَ مُلْصَقًا', 'designed a poster'], ['رَاجَعَ النَّصَّ', 'reviewed the text'], ['قَدَّمَ عَرْضًا', 'gave a presentation'], ['فِي الْأُسْبُوعِ الْقَادِمِ', 'next week']],
  },
  model: {
    text: 'نَعْمَلُ هَذَا الشَّهْرَ عَلَى مَشْرُوعٍ عَنْ تَارِيخِ مَدِينَتِنَا. الْمُعَلِّمُ شَرَحَ الْفِكْرَةَ فِي الْأُسْبُوعِ الْأَوَّلِ، وَمَرْيَمُ جَمَعَتِ الْمَعْلُومَاتِ مِنَ الْمَكْتَبَةِ. سَعِيدٌ وَيُوسُفُ زَارَا الْمَتْحَفَ وَصَوَّرَا الْمَبَانِيَ الْقَدِيمَةَ. الْآنَ الْبَنَاتُ يَكْتُبْنَ التَّقْرِيرَ، وَالْأَوْلَادُ يُصَمِّمُونَ الْمُلْصَقَاتِ. الصُّوَرُ وَصَلَتْ أَمْسِ، وَالْحَوَاسِيبُ تَعْمَلُ جَيِّدًا. فِي الْأُسْبُوعِ الْقَادِمِ الطُّلَّابُ سَيُقَدِّمُونَ الْعَرْضَ أَمَامَ الْمُدِيرِ، وَالْمُدِيرُ سَيَكْتُبُ رَأْيَهُ.',
    en: 'This month we are working on a project about the history of our city. The teacher explained the idea in the first week, and Maryam collected the information from the library. Saʿīd and Yūsuf visited the museum and photographed the old buildings. Now the girls are writing the report and the boys are designing the posters. The pictures arrived yesterday, and the computers are working well. Next week the students will give the presentation in front of the head teacher, and the head teacher will write his opinion.',
    find: ['feminine singular verb', 'dual verb', 'female-group verb', 'non-human plural + “she” verb'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'One boy → kataba; one girl → katabat.' },
    { route: 'core', text: 'A group of boys (or mixed) → -ū / -ūna.' },
    { route: 'develop', text: 'Two people → -ā / -atā / -āni.' },
    { route: 'develop', text: 'A group of girls → -na (yaktubna, not taktubna).' },
    { route: 'stretch', text: 'Things in the plural → the “she” verb.' },
  ],
  exit: [
    W(/Final Mastery/, 4, { feedback: 'A group of girls first → fataḥna.' }),
    W(/Final Mastery/, 7, { feedback: 'Schools are things → taftaḥu.' }),
    W(/Final Mastery/, 8, { feedback: 'A mixed group → masculine plural shārakū.' }),
  ],
  mastery: false,
  prep: {
    words: [['كَتَبَ الطُّلَّابُ', 'the students wrote', '—'], ['كَتَبَتِ الطَّالِبَاتُ', 'the students (f.) wrote', '—'], ['ذَهَبَ الْوَلَدَانِ', 'the two boys went', '—'], ['يَدْرُسُ الطُّلَّابُ', 'the students study', '—'], ['وَصَلَتِ الْحَافِلَاتُ', 'the buses arrived', '—']],
    questionEn: 'Look: when the verb comes FIRST, it stays singular even for many people. What do you notice about kataba ṭ-ṭullābu?',
    questionAr: '______ الطُّلَّابُ الرِّسَالَةَ.',
    homework: {
      core: 'Write the six past forms of dhahaba with their subjects (website table).',
      develop: 'Fill a past / present / future grid for darasa with six subjects.',
      stretch: 'Website group progress report (80–100 words).',
    },
    wordsSource: 'The five phrases prepare GM-VS-03 (website: verb-first agreement).',
  },
  remember: 'Remember: subject first → full agreement · kataba · katabat · katabā · katabatā · katabū · katabna · present: yaktubūna / yaktubna · future = sa- + present · non-human plurals → the “she” verb (al-kutubu waṣalat).',
});

module.exports = { meta, slides };
