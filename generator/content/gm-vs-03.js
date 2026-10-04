'use strict';
/* GM-VS-03 · Verb-First Agreement — website: Mastery & Revision › Grammar › Verbal Sentences › Lesson 3 (verb first before an explicit
 * subject → the verb stays singular in number but matches gender: kataba ṭ-ṭullābu, katabati ṭ-ṭālibātu; past and present
 * transformations SVO → VSO; the future keeps the singular present; reading the feminine -t with a helping kasra; non-human plurals —
 * both rules give the same form; the contrast table; clinic). Register note kept: full-agreement VSO exists in some modern usage, but
 * the formal exam target is singular agreement. Website game vowelling error noted (not used on slides): سَيَسَافِرُ → سَيُسَافِرُ.
 * Quizzes are the website’s (Entry, Past VSO, Present VSO, Final Mastery). Colour code for this area: teal = verb, blue = subject.
 * I-do, transformation drill, correct-or-repair sorter, reading, frames and the extended model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__10-verbal-sentences__grammar-mastery-03-verb-first-agreement';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-VS-03', fileTitle: 'Verb_First_Agreement', title: 'Verb-First Agreement', arabic: 'الْمُطَابَقَةُ عِنْدَ تَقَدُّمِ الْفِعْلِ',
  focus: 'When the verb comes FIRST, it stays singular — even for two or many people — but it still shows masculine or feminine: kataba ṭ-ṭullābu (the students wrote), katabati ṭ-ṭālibātu (the female students wrote).',
  icon: 'FaRightLeft',
});

const slides = G.gmLesson({
  code: 'GM-VS-03', site: KEY,
  support: `• Core: kataba before boys (one, two or many) and katabat before girls (one, two or many). Develop: present and future — yaktubu ṭ-ṭullābu, taktubu ṭ-ṭālibātu, sa-taktubu — and turning SVO into VSO. Stretch: the helping kasra (katabati ṭ-ṭālibātu), non-human plurals and explaining each change.
• Website memory line: verb first → singular in number, matching in gender. Website warning: never transform by moving words only — recalculate the verb.
• Register note (website): some modern and dialect-influenced writing uses full agreement in VSO, but the formal exam-safe target is the singular verb. Builds directly on GM-VS-02 (subject-first full agreement).`,
  teach: 'The VSO rule; past; present and future; the contrast table.',
  wedo: 'Turn it round; correct or repair; fix the clinic sentences.',
  next: { nextCode: 'GM-VS-04', nextTitle: 'Building and Editing Verbal Sentences', nextAr: 'بِنَاءُ الْجُمَلِ الْفِعْلِيَّةِ وَمُرَاجَعَتُهَا' },
  doNow: {
    questions: [
      W(/Entry Check/, 0, { prompt: 'Complete (verb first): ___ الطُّلَّابُ الْوَاجِبَ.', feedback: 'Verb first → singular: kataba.' }),
      W(/Entry Check/, 1, { prompt: 'Complete (verb first): ___ الطَّالِبَاتُ الْوَاجِبَ.', feedback: 'Singular, but feminine: katabat.' }),
      W(/Entry Check/, 2, { prompt: 'Complete (verb first): ___ الطَّالِبَانِ الْوَاجِبَ.', feedback: 'Two boys after the verb → kataba.' }),
      W(/Entry Check/, 4, { feedback: 'People FIRST → full plural agreement.' }),
      W(/Entry Check/, 5, { feedback: 'Gender stays; the plural ending goes.' }),
    ],
    keyIdea: { text: 'Verb first → singular verb that still shows gender. Subject first → full agreement (Lesson 2).', ar: '{k|كَتَبَ} {w|الطُّلَّابُ} ‖ {w|الطُّلَّابُ} {k|كَتَبُوا}' },
    retrieves: 'The website Entry Check — GM-VS-02 full agreement (katabū, katabna) and GM-VS-01 VSO order.',
  },
  objectives: ['Keep the verb singular when it comes first.', 'Keep the verb’s gender correct.', 'Use the rule in past, present and future.', 'Change the verb when I change the order.'],
  routes: {
    core: ['I write kataba ṭ-ṭullābu.', 'I write katabati ṭ-ṭālibātu.'],
    develop: ['I use yaktubu / taktubu before groups.', 'I turn SVO into VSO and fix the verb.'],
    stretch: ['I explain each change.', 'I write a verb-first report of 80–100 words.'],
  },
  terms: {
    items: [
      { ar: 'تَقَدُّمُ الْفِعْلِ', en: 'the verb comes first', note: 'كَتَبَ الطُّلَّابُ' },
      { ar: 'مُفْرَدٌ فِي الْعَدَدِ', en: 'singular in number', note: 'كَتَبَ · لَا كَتَبُوا' },
      { ar: 'مُطَابِقٌ فِي الْجِنْسِ', en: 'matching in gender', note: 'كَتَبَتِ الطَّالِبَاتُ' },
      { ar: 'الْمُطَابَقَةُ الْكَامِلَةُ', en: 'full agreement (subject first)', note: 'الطُّلَّابُ كَتَبُوا' },
      { ar: 'الْكَسْرَةُ الْمُسَاعِدَةُ', en: 'helping kasra on -t', note: 'كَتَبَتِ الطَّالِبَةُ' },
      { ar: 'التَّحْوِيلُ', en: 'transforming (changing the order)', note: 'حَوِّلِ الْجُمْلَةَ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · the formal VSO rule (website table)', title: 'Verb first: one verb for one, two or many', ar: 'الْفِعْلُ أَوَّلًا: مُفْرَدٌ مُطَابِقٌ فِي الْجِنْسِ', ltr: true,
      cols: [{ label: 'Subject after the verb', w: 3.4 }, { label: 'Verb', w: 2.2, size: 26 }, { label: 'Website model', w: 4.6, size: 24 }, { label: 'Verb is…', w: 2.13 }],
      rows: [
        { core: true, cells: ['one boy', 'كَتَبَ', 'كَتَبَ الطَّالِبُ.', 'm. singular'] },
        { cells: ['two boys', 'كَتَبَ', 'كَتَبَ الطَّالِبَانِ.', 'm. singular'] },
        { core: true, cells: ['boys / mixed group', 'كَتَبَ', 'كَتَبَ الطُّلَّابُ.', 'm. singular'] },
        { core: true, cells: ['one girl', 'كَتَبَتْ', 'كَتَبَتِ الطَّالِبَةُ.', 'f. singular'] },
        { cells: ['two girls', 'كَتَبَتْ', 'كَتَبَتِ الطَّالِبَتَانِ.', 'f. singular'] },
        { core: true, cells: ['group of girls', 'كَتَبَتْ', 'كَتَبَتِ الطَّالِبَاتُ.', 'f. singular'] },
      ],
      foot: 'Website memory line: verb first → singular in number, matching in gender. Only TWO past forms to choose from: kataba for boys, katabat for girls.',
      notes: 'PART 1 (3 min) — website “The formal VSO agreement rule”. Register note: full-agreement VSO occurs in some modern and dialect-influenced writing, but the exam-safe target is the singular verb.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · past-tense VSO (website table)', title: 'Move the verb — drop the number ending', ar: 'الْمَاضِي: مِنَ الِاسْمِ إِلَى الْفِعْلِ', ltr: true,
      cols: [{ label: 'Subject first (Lesson 2)', w: 4.3, size: 24 }, { label: 'Verb first (today)', w: 4.3, size: 24 }, { label: 'Change', w: 3.73 }],
      rows: [
        { cells: ['الطَّالِبَانِ كَتَبَا.', 'كَتَبَ الطَّالِبَانِ.', 'drop -ā'] },
        { cells: ['الطَّالِبَتَانِ كَتَبَتَا.', 'كَتَبَتِ الطَّالِبَتَانِ.', 'drop -ā, keep -t'] },
        { core: true, cells: ['الطُّلَّابُ كَتَبُوا.', 'كَتَبَ الطُّلَّابُ.', 'drop -ū'] },
        { core: true, cells: ['الطَّالِبَاتُ كَتَبْنَ.', 'كَتَبَتِ الطَّالِبَاتُ.', '-na becomes -t'] },
      ],
      foot: 'Website reading tip: the feminine -t is silent (katabat), but before al- a helping kasra is heard: katabati ṭ-ṭālibātu. Do not invent a new ending — the rule is unchanged.',
      notes: 'PART 2 (3 min) — website “Past-tense VSO” + “Reading feminine VSO accurately”. Choral: read column 1, then column 2, and say the change.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · present and future VSO (website tables) · Develop', title: 'The prefix shows gender; the suffix disappears', ar: 'الْمُضَارِعُ وَالْمُسْتَقْبَلُ', ltr: true,
      cols: [{ label: 'Subject first', w: 4.0, size: 22 }, { label: 'Verb first: present', w: 4.0, size: 22 }, { label: 'Verb first: future', w: 4.33, size: 22 }],
      rows: [
        { cells: ['الطَّالِبَانِ يَكْتُبَانِ.', 'يَكْتُبُ الطَّالِبَانِ.', 'سَيَكْتُبُ الطَّالِبَانِ.'] },
        { cells: ['الطَّالِبَتَانِ تَكْتُبَانِ.', 'تَكْتُبُ الطَّالِبَتَانِ.', 'سَتَكْتُبُ الطَّالِبَتَانِ.'] },
        { core: true, cells: ['الطُّلَّابُ يَكْتُبُونَ.', 'يَكْتُبُ الطُّلَّابُ.', 'سَيَكْتُبُ الطُّلَّابُ.'] },
        { core: true, cells: ['الطَّالِبَاتُ يَكْتُبْنَ.', 'تَكْتُبُ الطَّالِبَاتُ.', 'سَتَكْتُبُ الطَّالِبَاتُ.'] },
      ],
      foot: 'Website: before a group of girls use taktubu (the “she” form), NOT yaktubna. The future adds sa- to the singular present. With lan: lan yaktuba ṭ-ṭullābu · lan taktuba ṭ-ṭālibātu.',
      notes: 'PART 3 (3 min) — website “Present-tense VSO” and “Future VSO”. Core: rows 3–4. Ask: which letter shows the gender? (ya- / ta-).',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 4 · the contrast at a glance (website table) · Stretch', title: 'Change the order — recalculate the verb', ar: 'الْمُقَارَنَةُ', ltr: true,
      cols: [{ label: 'Meaning', w: 3.3 }, { label: 'Subject first', w: 4.5, size: 24 }, { label: 'Verb first', w: 4.53, size: 24 }],
      rows: [
        { cells: ['The two boys arrived.', 'الْوَلَدَانِ وَصَلَا.', 'وَصَلَ الْوَلَدَانِ.'] },
        { cells: ['The two girls arrived.', 'الْبِنْتَانِ وَصَلَتَا.', 'وَصَلَتِ الْبِنْتَانِ.'] },
        { core: true, cells: ['The boys arrived.', 'الْأَوْلَادُ وَصَلُوا.', 'وَصَلَ الْأَوْلَادُ.'] },
        { core: true, cells: ['The girls arrived.', 'الْبَنَاتُ وَصَلْنَ.', 'وَصَلَتِ الْبَنَاتُ.'] },
        { cells: ['The buses arrived.', 'الْحَافِلَاتُ وَصَلَتْ.', 'وَصَلَتِ الْحَافِلَاتُ.'] },
      ],
      foot: 'Website useful contrast: with PEOPLE, the order changes the verb. With THINGS (non-human plurals) both orders give the same “she” verb, because both rules point to waṣalat.',
      notes: 'PART 4 (3 min) — website “The contrast at a glance” + “Non-human plurals”. Website warning: do not transform by moving words only.',
    },
  ],
  quick: [
    W(/Past VSO/, 0, { feedback: 'Teachers (m.) after the verb → sharaḥa.' }),
    W(/Past VSO/, 1, { feedback: 'Female teachers after the verb → sharaḥat.' }),
    W(/Past VSO/, 3, { feedback: 'Two girls after the verb → fataḥat.' }),
    W(/Present VSO/, 1, { feedback: 'Girls after the verb → tadrusu.' }),
  ],
  quickNote: 'website Past VSO and Present VSO checks.',
  ido: {
    title: 'Watch me turn SVO into VSO',
    steps: [
      { head: 'Subject first', ar: 'الطَّالِبَاتُ كَتَبْنَ', think: 'Full agreement: -na.' },
      { head: 'Number', ar: 'مُفْرَدٌ', think: 'Verb first: one form.' },
      { head: 'Gender', ar: 'مُؤَنَّثٌ', think: 'Girls: keep -t.' },
      { head: 'Verb first', ar: 'كَتَبَتِ الطَّالِبَاتُ', think: 'Singular, feminine.' },
    ],
    legend: ['k', 'w'], legendLabels: { k: 'SINGULAR VERB', w: 'SUBJECT' },
    model: '{k|بَدَأَ} {w|الطُّلَّابُ} النَّشَاطَ مُبَكِّرًا، ثُمَّ {k|جَهَّزَتِ} {w|الطَّالِبَاتُ} الْقَاعَةَ. {k|وَصَلَتِ} {w|الْحَافِلَاتُ} فِي السَّاعَةِ التَّاسِعَةِ. {k|لَعِبَ} {w|الْفَرِيقَانِ} مُبَارَاةً قَوِيَّةً. غَدًا {k|سَيُقَدِّمُ} {w|الْمُعَلِّمُونَ} الْجَوَائِزَ.',
    modelEn: 'The students started the activity early, then the girls prepared the hall. The buses arrived at nine o’clock. The two teams played a hard match. Tomorrow the teachers will present the prizes.',
    notes: 'Website skills-workshop model, extended. Every teal verb is singular — check: which ones are feminine, and why?',
  },
  models: [
    { ar: 'شَرَحَ الْمُعَلِّمُونَ الدَّرْسَ.', en: 'The teachers explained the lesson.', tip: 'Plural subject, singular verb.' },
    { ar: 'شَرَحَتِ الْمُعَلِّمَاتُ الدَّرْسَ.', en: 'The female teachers explained the lesson.', tip: 'Feminine singular.' },
    { ar: 'تَدْرُسُ الطَّالِبَاتُ فِي الْمَكْتَبَةِ.', en: 'The female students study in the library.', tip: 'ta-, not -na.' },
    { ar: 'سَيَعْمَلُ الْمُهَنْدِسُونَ هُنَا.', en: 'The engineers will work here.', tip: 'sa- + singular.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · turn it round (website paper route)', title: 'Move the subject, fix the verb', ar: 'حَوِّلْ إِلَى جُمْلَةٍ فِعْلِيَّةٍ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Subject first', w: 4.6, size: 22 }, { label: 'Verb first', w: 4.6, size: 22 }, { label: 'Change', w: 3.13 }],
      rows: [
        { core: true, cells: ['الْوَلَدَانِ ذَهَبَا.', 'ذَهَبَ الْوَلَدَانِ.', 'drop -ā'] },
        { core: true, cells: ['الطُّلَّابُ فَازُوا بِالْمُبَارَاةِ.', 'فَازَ الطُّلَّابُ بِالْمُبَارَاةِ.', 'drop -ū'] },
        { core: true, cells: ['الطَّالِبَاتُ شَارَكْنَ فِي الْحَفْلِ.', 'شَارَكَتِ الطَّالِبَاتُ فِي الْحَفْلِ.', '-na becomes -t'] },
        { cells: ['الْبِنْتَانِ رَسَمَتَا صُورَةً.', 'رَسَمَتِ الْبِنْتَانِ صُورَةً.', 'drop -ā, keep -t'] },
        { cells: ['الْمُعَلِّمُونَ يَشْرَحُونَ الدَّرْسَ.', 'يَشْرَحُ الْمُعَلِّمُونَ الدَّرْسَ.', 'drop -ūna'] },
        { cells: ['الطَّالِبَاتُ سَيُسَافِرْنَ غَدًا.', 'سَتُسَافِرُ الطَّالِبَاتُ غَدًا.', 'ya- … -na becomes ta-'] },
      ],
      foot: 'Website paper route: draw an arrow showing every dual or plural ending you removed. Then read the new sentence aloud.',
      notes: 'WE DO (3 min) — cover column 2. Row 2 is the website Final Mastery transformation; row 6 uses the website game verb (sāfara).',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · correct or repair? (website clinic routine)', title: 'Name the order, then check the verb', ar: 'صَحِيحٌ أَمْ يَحْتَاجُ إِلَى تَصْحِيحٍ؟',
      categories: ['Correct', 'Needs repair'],
      items: [['ذَهَبَ الْأَوْلَادُ.', 0], ['الْأَوْلَادُ ذَهَبُوا.', 0], ['وَصَلَتِ الْبَنَاتُ.', 0], ['يَلْعَبُ الْأَوْلَادُ.', 0], ['ذَهَبُوا الْأَوْلَادُ.', 1], ['الْأَوْلَادُ ذَهَبَ.', 1], ['وَصَلْنَ الْبَنَاتُ.', 1], ['يَلْعَبُونَ الْأَوْلَادُ.', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). For each “needs repair” card, students say the correct form: dhahaba l-awlādu · al-awlādu dhahabū · waṣalati l-banātu · yalʿabu l-awlādu.',
    },
  ],
  mistakes: [
    { wrong: 'كَتَبُوا الطُّلَّابُ الْوَاجِبَ.', right: 'كَتَبَ الطُّلَّابُ الْوَاجِبَ.', why: 'Verb first → singular verb (website clinic).' },
    { wrong: 'كَتَبْنَ الطَّالِبَاتُ الْوَاجِبَ.', right: 'كَتَبَتِ الطَّالِبَاتُ الْوَاجِبَ.', why: 'Verb first → feminine singular (website clinic).' },
    { wrong: 'يَدْرُسْنَ الطَّالِبَاتُ الْآنَ.', right: 'تَدْرُسُ الطَّالِبَاتُ الْآنَ.', why: 'Present before girls → ta- “she” form (website clinic).' },
  ],
  hints: ['Which comes first: verb or subject?', 'Girls: which singular form?', 'Present “she” form?'],
  practice: [
    W(/Present VSO/, 0, { feedback: 'Boys after the verb → yadrusu.' }),
    W(/Present VSO/, 2, { feedback: 'Two female teachers after the verb → tudarrisu.' }),
    W(/Present VSO/, 3, { feedback: 'Singular masculine verb before a group of men.' }),
    W(/Final Mastery/, 7, { prompt: 'Transform to verb first: الطُّلَّابُ فَازُوا بِالْمُبَارَاةِ.', feedback: 'Move the subject and recalculate: fāza.' }),
  ],
  practiceLabel: 'website Present VSO and Final Mastery checks',
  read: {
    title: 'Our sports day', label: 'website skills workshop (teacher-written report)',
    text: 'يَوْمَ الْخَمِيسِ أَقَامَتْ مَدْرَسَتُنَا يَوْمًا رِيَاضِيًّا. وَصَلَتِ الْحَافِلَاتُ فِي السَّاعَةِ الثَّامِنَةِ، وَنَزَلَ الطُّلَّابُ إِلَى الْمَلْعَبِ. جَهَّزَتِ الْمُعَلِّمَاتُ الْمَاءَ وَالْفَوَاكِهَ، وَرَفَعَ الْأَوْلَادُ الْأَعْلَامَ. فِي السِّبَاقِ الْأَوَّلِ فَازَ الْفَرِيقُ الْأَزْرَقُ، ثُمَّ فَازَتِ الْبَنَاتُ فِي كُرَةِ السَّلَّةِ. شَجَّعَ الْآبَاءُ اللَّاعِبِينَ بِحَمَاسٍ. فِي النِّهَايَةِ وَزَّعَ الْمُدِيرُ الْجَوَائِزَ، وَسَيَكْتُبُ الطُّلَّابُ تَقْرِيرًا عَنِ الْيَوْمِ.',
    glossary: [['يَوْمًا رِيَاضِيًّا', 'a sports day'], ['نَزَلَ', 'went down / out'], ['الْأَعْلَامَ', 'the flags'], ['السِّبَاقِ', 'the race'], ['شَجَّعَ', 'cheered on']],
    task: 'Website reading audit: underline every verb that comes before a plural subject. Is each one singular? Which ones are feminine?',
    questions: [
      q('What did the female teachers prepare?', ['water and fruit', 'the flags', 'the prizes'], 'Jahhazati l-muʿallimātu l-māʾa wa-l-fawākiha.'),
      q('Why is it nazala ṭ-ṭullābu, not nazalū?', ['verb first: singular', 'only one student', 'it is a mistake'], 'The verb comes before the plural subject.'),
      q('Which verb comes before a group of girls?', ['فَازَتِ', 'رَفَعَ', 'شَجَّعَ'], 'Fāzati l-banātu: feminine singular.'),
      q('What will the students do?', ['write a report', 'hand out prizes', 'run a race'], 'Sa-yaktubu ṭ-ṭullābu taqrīran.'),
    ],
    qNote: 'Teacher-written report for the website reading audit; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: report the event, verb first', source: 'website skills workshop',
    prompts: [
      { route: 'core', ar: 'مَاذَا فَعَلَ الطُّلَّابُ فِي الرِّحْلَةِ؟' },
      { route: 'develop', ar: 'مَاذَا فَعَلَتِ الْبَنَاتُ فِي الْحَفْلِ؟' },
      { route: 'stretch', ar: 'أَخْبِرْنَا عَنْ مُبَارَاةٍ: مَاذَا حَدَثَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'زَارَ الطُّلَّابُ ______ ، وَأَكَلَ الطُّلَّابُ ______ .' },
      { route: 'develop', ar: 'قَدَّمَتِ الْبَنَاتُ ______ .' },
      { route: 'stretch', ar: 'لَعِبَ ______ ، ثُمَّ فَازَ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا حَدَثَ فِي الْحَفْلِ أَمْسِ؟', en: 'What happened at the celebration yesterday?' },
      { who: 'B', ar: 'وَصَلَ الضُّيُوفُ مُبَكِّرًا، وَأَلْقَتِ الطَّالِبَاتُ قَصِيدَةً جَمِيلَةً. بَعْدَ ذَلِكَ وَزَّعَ الْمُعَلِّمُونَ الْهَدَايَا.', en: 'The guests arrived early, and the girls recited a lovely poem. After that the teachers handed out the gifts.' },
    ],
    notes: 'Website: narrate events in formal VSO without copying the plural ending from a subject that follows the verb.',
  },
  write: {
    siteTask: 'Write 80–100 Arabic words reporting a school event, match, trip or celebration. Begin at least six sentences with a verb.',
    core: { amount: '5 sentences', task: 'A trip: what the students did — verb first.', how: 'zāra ṭ-ṭullābu · akala ṭ-ṭullābu.' },
    develop: { amount: '7 sentences', task: 'Add a group of girls, two people and the future.', how: 'zārati ṭ-ṭālibātu · sa-yazūru.' },
    stretch: { amount: '80–100 words', task: 'Website event-first report with the full checklist.', how: 'Check every verb-first form is singular.' },
  },
  frames: {
    core: [
      { en: 'The students visited …', ar: 'زَارَ الطُّلَّابُ ______ .' },
      { en: 'The girls drew …', ar: 'رَسَمَتِ الْبَنَاتُ ______ .' },
      { en: 'The teachers explained …', ar: 'شَرَحَ الْمُعَلِّمُونَ ______ .' },
      { en: 'The two boys played …', ar: 'لَعِبَ الْوَلَدَانِ ______ .' },
    ],
    develop: [
      { en: 'The buses arrived at …', ar: 'وَصَلَتِ الْحَافِلَاتُ فِي ______ .' },
      { en: 'The girls are studying …', ar: 'تَدْرُسُ الطَّالِبَاتُ ______ .' },
      { en: 'Tomorrow the students will present …', ar: 'غَدًا سَيُقَدِّمُ الطُّلَّابُ ______ .' },
      { en: 'The two girls won in …', ar: 'فَازَتِ الْبِنْتَانِ فِي ______ .' },
    ],
    bank: ['ذَهَبَ', 'ذَهَبَتْ', 'زَارَ', 'زَارَتْ', 'يَدْرُسُ', 'تَدْرُسُ', 'سَيُقَدِّمُ', 'سَتُقَدِّمُ', 'الطُّلَّابُ', 'الطَّالِبَاتُ', 'الْوَلَدَانِ', 'الْبِنْتَانِ', 'الْحَافِلَاتُ'],
  },
  stretchTask: {
    task: 'Website event-first report (80–100 words): a school event, match, trip or celebration, with at least six sentences beginning with a verb.',
    checklist: ['Two male / mixed plural subjects after verbs.', 'Two female plural subjects after verbs.', 'One dual subject.', 'One non-human plural.', 'Two time frames — and every verb-first form singular.'],
    phrases: [['وَصَلَ الضُّيُوفُ', 'the guests arrived'], ['بَدَأَ الْحَفْلُ', 'the celebration began'], ['صَفَّقَ الْحُضُورُ', 'the audience applauded'], ['فَازَ الْفَرِيقُ', 'the team won'], ['وَزَّعَ الْجَوَائِزَ', 'handed out the prizes'], ['فِي النِّهَايَةِ', 'in the end']],
  },
  model: {
    text: 'أَقَامَتْ مَدْرَسَتُنَا حَفْلًا كَبِيرًا فِي نِهَايَةِ الْفَصْلِ. وَصَلَ الضُّيُوفُ فِي السَّاعَةِ الْعَاشِرَةِ، وَجَلَسَ الْآبَاءُ فِي الصُّفُوفِ الْأُولَى. بَدَأَ الْحَفْلُ بِتِلَاوَةِ الْقُرْآنِ، ثُمَّ أَلْقَتِ الطَّالِبَاتُ قَصِيدَةً عَنِ الْوَطَنِ. قَدَّمَ الطُّلَّابُ مَسْرَحِيَّةً مُضْحِكَةً، وَصَفَّقَ الْحُضُورُ طَوِيلًا. بَعْدَ ذَلِكَ وَزَّعَتِ الْمُعَلِّمَتَانِ الْجَدِيدَتَانِ الْهَدَايَا. وَصَلَتِ الْحَافِلَاتُ فِي السَّاعَةِ الثَّانِيَةِ، وَرَجَعَ الطُّلَّابُ إِلَى بُيُوتِهِمْ مَسْرُورِينَ. فِي الْأُسْبُوعِ الْقَادِمِ سَيَكْتُبُ الطُّلَّابُ مَقَالَاتٍ عَنِ الْحَفْلِ، وَسَتَنْشُرُهَا الْمَدْرَسَةُ فِي مَجَلَّتِهَا.',
    en: 'Our school held a big celebration at the end of term. The guests arrived at ten o’clock, and the parents sat in the front rows. The celebration began with a recitation of the Qur’an, then the girls recited a poem about the homeland. The boys performed a funny play, and the audience applauded for a long time. After that the two new teachers (f.) handed out the gifts. The buses arrived at two o’clock, and the students went home happy. Next week the students will write articles about the celebration, and the school will publish them in its magazine.',
    find: ['singular verb + male plural', 'feminine verb + female plural', 'verb + dual subject', 'non-human plural'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'Every verb before a plural subject is singular.' },
    { route: 'core', text: 'Verbs before girls end in -t (or start with ta-).' },
    { route: 'develop', text: 'I used taktubu, not yaktubna, before a group of girls.' },
    { route: 'develop', text: 'When I moved a subject, I recalculated the verb.' },
    { route: 'stretch', text: 'I read the helping kasra aloud: katabati ṭ-ṭālibātu.' },
  ],
  exit: [
    W(/Final Mastery/, 5, { feedback: 'Girls after the verb → taktubu.' }),
    W(/Final Mastery/, 6, { feedback: 'Future VSO: sa- + feminine singular.' }),
    W(/Final Mastery/, 8, { prompt: 'Transform to subject first: شَارَكَتِ الطَّالِبَاتُ.', feedback: 'Girls FIRST → full agreement: shārakna.' }),
  ],
  mastery: false,
  prep: {
    words: [['هَلْ', 'yes / no question word', '—'], ['مَا', 'did not (+ past verb)', '—'], ['لَمْ', 'did not (+ present form)', '—'], ['لَنْ', 'will not', '—'], ['أَمَّا … فَـ', 'as for … (contrast)', '—']],
    questionEn: 'Questions and negatives keep the same roles. How would you say “The students did not write the report”, verb first?',
    questionAr: 'لَمْ ______ الطُّلَّابُ التَّقْرِيرَ.',
    homework: {
      core: 'Write six verb-first sentences: three with boys, three with girls.',
      develop: 'Turn the six sentences round (subject first) and fix every verb.',
      stretch: 'Website event-first report (80–100 words).',
    },
    wordsSource: 'The five words prepare GM-VS-04 (website: building and editing verbal sentences — questions, negation, contrast).',
  },
  remember: 'Remember: verb first → singular in number, matching in gender · kataba ṭ-ṭullābu · katabati ṭ-ṭālibātu · present: yaktubu / taktubu (never yaktubna before the subject) · subject first → full agreement · move the subject = recalculate the verb.',
});

module.exports = { meta, slides };
