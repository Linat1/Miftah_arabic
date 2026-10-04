'use strict';
/* GM-V-06 · Future Tense and Future Negation — website: Mastery & Revision › Grammar › Verbs › Lesson 6 (sa- attached and sawfa separate
 * before a present verb; no rigid “sa- = near, sawfa = distant” rule; lan + subjunctive: singular forms take a final fatḥa, the five verbs
 * drop their nūn; plans, predictions, promises and refusals; future time phrases; clinic). Quizzes are the website’s (Entry, Future Marker,
 * Future Negation, Communicative Function, Mastery) plus the website game; items whose options carry “only”, “as a plan” or “means promise”
 * notes are skipped. Sorter, I-do, frames, reading and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__07-verbs__grammar-mastery-06-future-negation';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-V-06', fileTitle: 'Future_Tense', title: 'Future Tense and Future Negation', arabic: 'زَمَنُ الْمُسْتَقْبَلِ وَنَفْيُهُ',
  focus: 'Future = sa- (attached) or sawfa (separate) + a correct present verb. Negative future = lan + present verb, which changes: a final fatḥa on singular forms, and the five verbs lose their nūn.',
  icon: 'FaRocket',
});

const slides = G.gmLesson({
  code: 'GM-V-06', site: KEY,
  support: `• Core: سَـ and سَوْفَ before a present verb you already know (سَأَدْرُسُ · سَوْفَ أَدْرُسُ). Develop: لَنْ + singular forms (لَنْ أَكْتُبَ · لَنْ تَكْتُبَ). Stretch: لَنْ with the five verbs — the nūn drops (لَنْ تَكْتُبِي · لَنْ يَكْتُبُوا).
• Website correction: do not teach “sa- = near, sawfa = distant” as a law. Both mark the future; context decides.
• Weak classes: the future is the easiest tense — students already know the present from GM-V-05. Reassure them: one extra letter.`,
  teach: 'sa- and sawfa; lan + subjunctive; purposes; time phrases.',
  wedo: 'Make it negative; sort nūn stays / drops; repair.',
  next: { nextCode: 'GM-V-07', nextTitle: 'Imperatives and Negative Commands', nextAr: 'فِعْلُ الْأَمْرِ وَالنَّهْيُ' },
  doNow: {
    pick: [0, 1, 3, 4, 5],
    fb: { 0: 'sa- attaches to the present form.', 1: 'Sawfa is a separate word followed by a present verb.', 2: 'In an affirmative future the plural keeps its nūn.', 3: 'After lan, the five-verb nūn drops.', 4: 'Both mark the future; context matters more than distance.' },
    keyIdea: { text: 'Future = sa- or sawfa + present verb. Negative future = lan + present verb with a fatḥa — or with the nūn dropped.', ar: '{k|سَأَكْتُبُ} · {k|سَوْفَ أَكْتُبُ} ‖ {e|لَنْ أَكْتُبَ}' },
    retrieves: 'The website Entry Check (questions 1, 2, 4, 5 and 6) — the GM-V-05 prep words sa-, sawfa and lan.',
  },
  objectives: ['Make the future with sa- and sawfa.', 'Negate the future with lan.', 'Drop the nūn of the five verbs after lan.', 'Use the future for plans, predictions, promises and refusals.'],
  routes: {
    core: ['I say I will study with sa- and sawfa.', 'I add a time phrase like tomorrow.'],
    develop: ['I say I will not … with lan.', 'I change the final vowel to fatḥa after lan.'],
    stretch: ['I drop the nūn after lan (they, you f.).', 'I write a promise and two refusals.'],
  },
  terms: {
    items: [
      { ar: 'الْمُسْتَقْبَلُ', en: 'the future', note: 'فِي الْمُسْتَقْبَلِ' },
      { ar: 'سَـ', en: 'will (attached)', note: 'سَأَدْرُسُ' },
      { ar: 'سَوْفَ', en: 'will (separate word)', note: 'سَوْفَ أَدْرُسُ' },
      { ar: 'لَنْ', en: 'will not', note: 'لَنْ أَدْرُسَ' },
      { ar: 'الْمَنْصُوبُ', en: 'subjunctive (after lan)', note: 'أَكْتُبَ' },
      { ar: 'الْأَفْعَالُ الْخَمْسَةُ', en: 'the five verbs (end in nūn)', note: 'يَكْتُبُونَ · تَكْتُبِينَ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · build the affirmative future (website table)', title: 'One extra letter — or one extra word', ar: 'سَـ وَسَوْفَ', ltr: true,
      cols: [{ label: 'Marker', w: 2.4, size: 26 }, { label: 'Writing', w: 2.4 }, { label: 'Model (website)', w: 4.2, size: 24 }, { label: 'Typical use', w: 3.33 }],
      rows: [
        { core: true, cells: ['سَـ', 'attached', 'سَأَدْرُسُ غَدًا.', 'compact, very common'] },
        { core: true, cells: ['سَوْفَ', 'separate', 'سَوْفَ أَدْرُسُ غَدًا.', 'explicit; often more formal'] },
        { cells: ['no marker', 'present + time', 'أُسَافِرُ غَدًا.', 'a clear arrangement'] },
        { core: true, cells: ['سَـ', 'she', 'سَتَدْرُسُ', 'ta- stays after sa-'] },
        { cells: ['سَـ', 'they (m.)', 'سَيَكْتُبُونَ', 'the nūn STAYS'] },
      ],
      foot: 'Website correction: both sa- and sawfa mark the future — there is no strict “near / distant” law. Never use both together, and never attach sawfa.',
      notes: 'PART 1 (3 min) — website “Build the affirmative future”. Students already know the present (GM-V-05): just add sa-.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 2 · negate the future with lan (website table)', title: 'lan changes the end of the verb', ar: 'النَّفْيُ بِـ «لَنْ»', ltr: true,
      cols: [{ label: 'Subject', w: 2.4, size: 24 }, { label: 'Affirmative', w: 3.4, size: 24 }, { label: 'Negative with lan', w: 3.6, size: 24 }, { label: 'Change', w: 2.93 }],
      rows: [
        { core: true, cells: ['أَنَا', 'سَأَكْتُبُ', 'لَنْ أَكْتُبَ', 'u → a'] },
        { core: true, cells: ['هِيَ', 'سَتَكْتُبُ', 'لَنْ تَكْتُبَ', 'u → a'] },
        { core: true, cells: ['نَحْنُ', 'سَنَكْتُبُ', 'لَنْ نَكْتُبَ', 'u → a'] },
        { cells: ['أَنْتِ', 'سَتَكْتُبِينَ', 'لَنْ تَكْتُبِي', 'nūn drops'] },
        { cells: ['هُمْ', 'سَيَكْتُبُونَ', 'لَنْ يَكْتُبُوا', 'nūn drops + silent alif'] },
      ],
      foot: 'Website: lan REPLACES sa- / sawfa (never “lan sa-”). The five verbs (-īna, -āni, -ūna) lose their nūn; the plural adds a silent alif.',
      notes: 'PART 2 (4 min) — website “Negate the future”. Chant: lan aktuba · lan taktubī · lan yaktubū.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · purposes and time phrases (website) · Develop / Stretch', title: 'Plans, predictions, promises, refusals', ar: 'الْوَظَائِفُ وَعِبَارَاتُ الزَّمَنِ', ltr: true,
      cols: [{ label: 'Purpose / phrase', w: 3.2 }, { label: 'Arabic (website)', w: 5.6, size: 22 }, { label: 'English', w: 3.53 }],
      rows: [
        { core: true, cells: ['plan', 'سَأَدْرُسُ الطِّبَّ فِي الْمُسْتَقْبَلِ.', 'I will study medicine.'] },
        { cells: ['prediction', 'سَوْفَ تَتَغَيَّرُ التِّقْنِيَّةُ سَرِيعًا.', 'Technology will change fast.'] },
        { core: true, cells: ['promise', 'سَأُسَاعِدُكَ غَدًا.', 'I will help you tomorrow.'] },
        { cells: ['refusal', 'لَنْ أَتَأَخَّرَ مَرَّةً أُخْرَى.', 'I will not be late again.'] },
        { cells: ['next week', 'سَوْفَ نَبْدَأُ الْأُسْبُوعَ الْقَادِمَ.', 'We will start next week.'] },
        { cells: ['next summer', 'سَنُسَافِرُ فِي الصَّيْفِ الْمُقْبِلِ.', 'We will travel next summer.'] },
      ],
      foot: 'Website “double evidence”: a future marker + a future time phrase makes the time unmistakable. Extend with a reason: … li-annanī …',
      notes: 'PART 3 (3 min) — website “Plans, predictions, promises and refusals” and “Future time expressions”.',
    },
  ],
  quick: [
    W(/Future Marker Check/, 0, { prompt: 'Which is the correct attached form?', feedback: 'Sa- attaches directly.' }),
    W(/Future Marker Check/, 1, { prompt: 'Which is the correct separate form?', feedback: 'Sawfa is a separate word.' }),
    W(/Future Marker Check/, 2, { feedback: 'ta- matches she.' }),
    W(/Future Negation Check/, 0, { feedback: 'Subjunctive after lan: final fatḥa.' }),
  ],
  quickNote: 'website Future Marker and Future Negation checks.',
  ido: {
    title: 'Watch me build a future plan — and a refusal',
    steps: [
      { head: 'Present', ar: 'أَدْرُسُ', think: 'I study (GM-V-05).' },
      { head: 'Future', ar: 'سَأَدْرُسُ', think: 'Add sa-.' },
      { head: 'Present', ar: 'أَتَوَقَّفُ', think: 'I stop.' },
      { head: 'Negative', ar: 'لَنْ أَتَوَقَّفَ', think: 'lan + fatḥa.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'FUTURE', e: 'LAN + SUBJUNCTIVE' },
    model: 'فِي الْمُسْتَقْبَلِ {k|سَأَدْرُسُ} فِي الْجَامِعَةِ، وَ{k|سَوْفَ أَتَعَلَّمُ} مَهَارَاتٍ جَدِيدَةً. {e|لَنْ أَتَوَقَّفَ} عَنْ تَعَلُّمِ الْعَرَبِيَّةِ.',
    modelEn: 'In the future I will study at university, and I will learn new skills. I will not stop learning Arabic.',
    notes: 'Website model (the website prints “ʿani taʿallumi” — corrected to ʿan taʿallumi; ʿan only takes kasra before al-).',
  },
  models: [
    { ar: 'سَأَتَّصِلُ بِكَ مَسَاءً.', en: 'I will call you this evening.', tip: 'Promise.' },
    { ar: 'سَوْفَ يَزْدَادُ اسْتِخْدَامُ التِّقْنِيَّةِ.', en: 'The use of technology will increase.', tip: 'Prediction.' },
    { ar: 'لَنْ أَنْسَى وَاجِبِي.', en: 'I will not forget my homework.', tip: 'lan + final weak: no change seen.' },
    { ar: 'أَصْدِقَائِي لَنْ يَتَأَخَّرُوا.', en: 'My friends will not be late.', tip: 'Nūn drops.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · make it negative (website game) · say it aloud', title: 'Will → will not', ar: 'حَوِّلْ إِلَى النَّفْيِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'English', w: 3.2 }, { label: 'Affirmative', w: 3.4, size: 24 }, { label: 'Negative', w: 3.4, size: 24 }, { label: 'Clue', w: 2.33 }],
      rows: [
        { core: true, cells: ['I will study', 'سَأَدْرُسُ', 'لَنْ أَدْرُسَ', 'u → a'] },
        { core: true, cells: ['she will be late', 'سَتَتَأَخَّرُ', 'لَنْ تَتَأَخَّرَ', 'u → a'] },
        { cells: ['they will write', 'سَيَكْتُبُونَ', 'لَنْ يَكْتُبُوا', 'nūn drops'] },
        { cells: ['you (f.) will travel', 'سَتُسَافِرِينَ', 'لَنْ تُسَافِرِي', 'nūn drops'] },
        { cells: ['we will see', 'سَنَرَى', 'لَنْ نَرَى', 'no visible change'] },
        { cells: ['they will arrive', 'سَيَصِلُونَ', 'لَنْ يَصِلُوا', 'nūn drops'] },
      ],
      foot: 'Website game: lan replaces sa- — then check the end of the verb.',
      notes: 'WE DO (3 min) — website game items. Cover column 3.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · nūn stays or drops?', title: 'Does the nūn stay?', ar: 'هَلْ تَبْقَى النُّونُ؟',
      categories: ['Nūn stays (future)', 'Nūn drops (after lan)'],
      items: [['سَيَكْتُبُونَ', 0], ['لَنْ يَكْتُبُوا', 1], ['سَتَدْرُسِينَ', 0], ['لَنْ تَدْرُسِي', 1], ['سَوْفَ يَلْعَبُونَ', 0], ['لَنْ يَلْعَبُوا', 1], ['سَتُسَافِرِينَ', 0], ['لَنْ تُسَافِرِي', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type 1 or 2; ask why the nūn drops (lan).',
    },
  ],
  mistakes: [
    { wrong: 'سَوْفَسَأَدْرُسُ', right: 'سَوْفَ أَدْرُسُ', why: 'Do not combine both markers or attach sawfa (website clinic).' },
    { wrong: 'لَنْ يَذْهَبُونَ', right: 'لَنْ يَذْهَبُوا', why: 'The nūn of the five verbs drops after lan (website clinic).' },
    { wrong: 'سَافَرْتُ غَدًا', right: 'سَأُسَافِرُ غَدًا', why: 'Tomorrow needs a future verb (website clinic).' },
  ],
  hints: ['One marker or two?', 'What happens to the nūn after lan?', 'Past verb with tomorrow?'],
  practice: [
    W(/Future Negation Check/, 1, { prompt: 'Choose “you (f.) will not write”.', feedback: 'The nūn drops; this is not a command.' }),
    W(/Future Negation Check/, 2, { feedback: 'Present subjunctive after lan: the nūn drops.' }),
    W(/Communicative Function/, 0, { prompt: 'Which is the best future ambition?', feedback: 'A future plan.' }),
    W(/Communicative Function/, 3, { prompt: 'Which is the best negative intention?', feedback: 'lan + subjunctive.' }),
  ],
  practiceLabel: 'website Future Negation and Communicative Function checks',
  read: {
    title: 'Four students, four plans', label: 'website reading workshop (teacher-written plans)',
    text: 'تَقُولُ مَرْيَمُ: «سَأَدْرُسُ الطِّبَّ لِأَنَّنِي أُحِبُّ مُسَاعَدَةَ النَّاسِ». يَقُولُ يُوسُفُ: «سَوْفَ تَتَغَيَّرُ الْوَظَائِفُ بِسَبَبِ التِّقْنِيَّةِ». تَقُولُ سَارَةُ لِأُمِّهَا: «سَأُسَاعِدُكِ فِي الْمَطْبَخِ غَدًا». يَقُولُ عُمَرُ: «لَنْ أَتَأَخَّرَ عَنِ الْمَدْرَسَةِ مَرَّةً أُخْرَى، وَأَصْدِقَائِي لَنْ يَتَأَخَّرُوا أَيْضًا».',
    glossary: [['الطِّبَّ', 'medicine'], ['مُسَاعَدَةَ', 'helping'], ['الْوَظَائِفُ', 'jobs'], ['بِسَبَبِ', 'because of'], ['الْمَطْبَخِ', 'the kitchen']],
    task: 'Website: match each prediction, intention, promise and refusal to the correct person.',
    questions: [
      q('Who makes a prediction?', ['Yūsuf', 'Maryam', 'Sārah'], 'Sawfa tataghayyaru l-waẓāʾif — a prediction about jobs.'),
      q('Who makes a promise?', ['Sārah', 'ʿUmar', 'Maryam'], 'Saʾusāʿiduki — I will help you.'),
      q('Who refuses something / makes a negative plan?', ['ʿUmar', 'Yūsuf', 'Sārah'], 'Lan ataʾakhkhara.'),
      q('Which verb lost its nūn after lan?', ['يَتَأَخَّرُوا', 'أَتَأَخَّرَ', 'سَأَدْرُسُ'], 'Yataʾakhkharūna → lan yataʾakhkharū.'),
    ],
    qNote: 'Teacher-written plans for the website reading workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: my next five years', source: 'website speaking workshop',
    prompts: [
      { route: 'core', ar: 'مَاذَا سَتَفْعَلُ غَدًا؟' },
      { route: 'develop', ar: 'مَاذَا سَتَفْعَلُ فِي الصَّيْفِ الْمُقْبِلِ؟ وَمَاذَا لَنْ تَفْعَلَ؟' },
      { route: 'stretch', ar: 'كَيْفَ سَتَكُونُ حَيَاتُكَ بَعْدَ خَمْسِ سَنَوَاتٍ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'غَدًا ______ وَ ______ .' },
      { route: 'develop', ar: 'فِي الصَّيْفِ الْمُقْبِلِ ______ ، وَلَكِنْ لَنْ ______ .' },
      { route: 'stretch', ar: 'بَعْدَ خَمْسِ سَنَوَاتٍ ______ لِأَنَّنِي ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا سَتَفْعَلِينَ بَعْدَ الْمَدْرَسَةِ؟', en: 'What will you do after school? (to a girl)' },
      { who: 'B', ar: 'سَأَدْرُسُ فِي الْجَامِعَةِ، وَسَوْفَ أَعْمَلُ مُعَلِّمَةً. لَنْ أَتْرُكَ الْعَرَبِيَّةَ لِأَنَّنِي أُحِبُّهَا.', en: 'I will study at university, and I will work as a teacher. I will not leave Arabic because I love it.' },
    ],
    notes: 'Website: five linked future sentences on education, work and travel. Listening (website): sayafʿalu / lan yafʿala, especially in plural forms.',
  },
  write: {
    siteTask: 'Write 130–140 words about your plans, hopes and predictions for the next five years. Include one promise and two things you will not do.',
    core: { amount: '5 sentences', task: 'My plans for tomorrow and next week.', how: 'sa- + a present verb.' },
    develop: { amount: '7 sentences', task: 'Add sawfa, one promise and one lan sentence.', how: 'Fatḥa after lan.' },
    stretch: { amount: '130–140 words', task: 'Website task: five-year plans, a promise and two refusals.', how: 'One five-verb form after lan.' },
  },
  frames: {
    core: [
      { en: 'Tomorrow I will …', ar: 'غَدًا ______ .' },
      { en: 'Next week we will …', ar: 'الْأُسْبُوعَ الْقَادِمَ ______ .' },
      { en: 'In the future I will work as …', ar: 'فِي الْمُسْتَقْبَلِ سَأَعْمَلُ ______ .' },
      { en: 'I will help …', ar: 'سَأُسَاعِدُ ______ .' },
    ],
    develop: [
      { en: 'I will not …', ar: 'لَنْ ______ .' },
      { en: 'Technology will …', ar: 'سَوْفَ ______ التِّقْنِيَّةُ.' },
      { en: 'My friends will not …', ar: 'أَصْدِقَائِي لَنْ ______ .' },
      { en: 'I will … because …', ar: '______ لِأَنَّنِي ______ .' },
    ],
    bank: ['سَأَدْرُسُ', 'سَوْفَ أَعْمَلُ', 'سَنُسَافِرُ', 'سَأُسَاعِدُ', 'لَنْ أَتَأَخَّرَ', 'لَنْ أَنْسَى', 'لَنْ يَتَأَخَّرُوا', 'غَدًا', 'الْأُسْبُوعَ الْقَادِمَ', 'فِي الْمُسْتَقْبَلِ', 'بَعْدَ خَمْسِ سَنَوَاتٍ'],
  },
  stretchTask: {
    task: 'Website integrated production task: 130–140 words about your plans, hopes and predictions for the next five years.',
    checklist: ['Both sa- and sawfa.', 'Three future time phrases.', 'Two lan structures.', 'One five-verb form after lan (nūn dropped).', 'One promise and one prediction.'],
    phrases: [['بَعْدَ خَمْسِ سَنَوَاتٍ', 'in five years'], ['فِي الصَّيْفِ الْمُقْبِلِ', 'next summer'], ['أَتَمَنَّى أَنْ', 'I hope to'], ['أَعِدُكَ أَنْ', 'I promise you to'], ['لِأَنَّنِي', 'because I'], ['لَنْ أَتَوَقَّفَ عَنْ', 'I will not stop']],
  },
  model: {
    text: 'بَعْدَ خَمْسِ سَنَوَاتٍ سَأَكُونُ فِي الْجَامِعَةِ، وَسَأَدْرُسُ الْهَنْدَسَةَ لِأَنَّنِي أُحِبُّ الرِّيَاضِيَّاتِ. فِي الصَّيْفِ الْمُقْبِلِ سَنُسَافِرُ إِلَى الْأُرْدُنِّ، وَسَوْفَ أَتَكَلَّمُ الْعَرَبِيَّةَ هُنَاكَ. أَظُنُّ أَنَّ التِّقْنِيَّةَ سَوْفَ تَتَغَيَّرُ كَثِيرًا. أَعِدُ أُمِّي أَنِّي سَأُسَاعِدُهَا كُلَّ أُسْبُوعٍ. لَنْ أَتَوَقَّفَ عَنْ تَعَلُّمِ الْقُرْآنِ، وَلَنْ أُضَيِّعَ وَقْتِي. أَصْدِقَائِي أَيْضًا لَنْ يَنْسَوْا أَحْلَامَهُمْ.',
    en: 'In five years I will be at university, and I will study engineering because I love maths. Next summer we will travel to Jordan, and I will speak Arabic there. I think technology will change a lot. I promise my mother that I will help her every week. I will not stop learning the Qur’an, and I will not waste my time. My friends too will not forget their dreams.',
    find: ['sa- / sawfa', 'lan + fatḥa', 'nūn dropped', 'time phrase'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'sa- is attached; sawfa is separate.' },
    { route: 'core', text: 'My future verbs are present forms.' },
    { route: 'develop', text: 'After lan the verb ends in fatḥa.' },
    { route: 'develop', text: 'I used future time phrases.' },
    { route: 'stretch', text: 'After lan I dropped the nūn of the five verbs.' },
  ],
  exit: [
    W(/Future Mastery/, 1, { prompt: 'Choose “we will travel”.', feedback: 'Separate sawfa.' }),
    W(/Future Mastery/, 3, { prompt: 'Choose “you (f.) will not write”.', feedback: 'The nūn drops.' }),
    W(/Future Mastery/, 4, { prompt: 'Choose “they will not write”.', feedback: 'The nūn drops.' }),
  ],
  mastery: false,
  prep: {
    words: [['اُكْتُبْ', 'write! (to a boy)', '—'], ['اُكْتُبِي', 'write! (to a girl)', '—'], ['اُكْتُبُوا', 'write! (to a group)', '—'], ['لَا تَكْتُبْ', 'don’t write!', '—'], ['مِنْ فَضْلِكَ', 'please', '—']],
    questionEn: 'Lan taktubī drops the nūn. Can you guess how a teacher says “Write!” to a girl?',
    questionAr: 'تَكْتُبِينَ · ______ !',
    homework: {
      core: 'Write five sentences about tomorrow with sa-.',
      develop: 'Make five future sentences negative with lan.',
      stretch: 'Website task: five-year plans with a promise and two refusals.',
    },
    wordsSource: 'The five words prepare GM-V-07 (website Verbs lesson 7: imperatives and negative commands).',
  },
  remember: 'Remember: sa- attached · sawfa separate · both = future · lan replaces them · after lan: fatḥa, and the five verbs drop the nūn.',
});

module.exports = { meta, slides };
