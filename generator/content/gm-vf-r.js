'use strict';
/* GM-VF-R · Optional Morphology Reference — website: Mastery & Revision › Grammar › Arabic Verb Forms › Reference (the ten patterns
 * with past / present; verbal noun, active and passive participle patterns; worked families; exceptions: Form I vowels, weak and
 * hamzated roots, Form VIII assimilation — ittaṣala / yattaṣilu, Form VII vs the passive; imperatives). Taught as a consolidation
 * lesson after GM-VF-01 … VF-10. Website correction: kaʾs is normally feminine — the Form VII / passive example uses al-kūb. Website
 * self-check items used via W; analysis tables, sorter, reading, root map and model are teacher-written on the website reference. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__07a-verb-forms__reference';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const PAT = (label) => ({
  cols: [{ label: 'Form', w: 1.2 }, { label: 'Past', w: 2.2, size: 24 }, { label: 'Present', w: 2.3, size: 24 }, { label: 'Verbal noun', w: 2.4, size: 24 }, { label: 'Doer', w: 2.1, size: 24 }, { label: label, w: 2.13, size: 24 }],
});

const meta = G.meta({
  code: 'GM-VF-R', fileTitle: 'Morphology_Reference', title: 'Optional Morphology Reference', arabic: 'مَرْجِعٌ صَرْفِيٌّ اخْتِيَارِيٌّ',
  focus: 'All ten forms on one page: past, present, verbal noun, doer and affected patterns — plus the exceptions that real verbs bring. Use it to analyse any word: find the root, find the pattern, name the form.',
  icon: 'FaTableCells',
});

const slides = G.gmLesson({
  code: 'GM-VF-R', site: KEY,
  support: `• Core: the ten past / present templates with one real example each (revision of VF-01 to VF-10). Develop: verbal noun, doer and affected patterns (تَفْعِيلٌ · مُفَعِّلٌ · مُفَعَّلٌ …) and analysing a word: root → pattern → form → type. Stretch: the exceptions — Form I vowels, weak roots (قَالَ · اِخْتَارَ), Form VIII assimilation (اِتَّصَلَ · يَتَّصِلُ), Form VII vs passive.
• Website: “a reference for comparing patterns, not a list to memorise in one sitting”. Use the tables as a lookup tool; let students keep them in their books.
• Website scope note: these are the ten commonly taught families. Not every root occurs in every form, and a possible form is not always a real word.`,
  teach: 'Ten patterns; derived nouns; exceptions.',
  wedo: 'Analyse the word; sort action / doer / affected; repair.',
  next: { nextCode: 'GM-CP-01', nextTitle: 'Common Prepositions and the Genitive', nextAr: 'حُرُوفُ الْجَرِّ وَالْمَجْرُورُ' },
  doNow: {
    questions: [
      q('Which form is شَارَكَ?', ['III', 'II', 'VI'], 'Long ā after the first letter.'),
      q('Which form is تَعَلَّمَ?', ['V', 'II', 'VIII'], 'ta- + shadda.'),
      q('Which form is اِجْتَمَعَ?', ['VIII', 'VII', 'X'], 't after the first root letter.'),
      q('Which form is أَرْسَلَ?', ['IV', 'I', 'X'], 'a- before the root.'),
      q('Which form is اِسْتَعْمَلَ?', ['X', 'VIII', 'VI'], 'ista- before the root.'),
    ],
    keyIdea: { text: 'Every derived word = ROOT + PATTERN. Strip the pattern letters, find the root, name the form.', ar: '{k|ع ل م} + {e|مُتَفَعِّلٌ} = {e|مُتَعَلِّمٌ}' },
    retrieves: 'Teacher-written retrieval of GM-VF-01 to VF-10 (one verb per form).',
  },
  objectives: ['Recall the ten past / present patterns.', 'Recognise verbal noun, doer and affected patterns.', 'Analyse a word: root, pattern, form.', 'Allow for weak roots and other exceptions.'],
  routes: {
    core: ['I match ten verbs to their forms.', 'I use the reference table to check a verb.'],
    develop: ['I name the verbal noun of a derived verb.', 'I tell mutaʿallim (doer) from mutaʿallam (affected).'],
    stretch: ['I explain ittaṣala (Form VIII assimilation).', 'I build a root map across five forms.'],
  },
  terms: {
    items: [
      { ar: 'الصَّرْفُ', en: 'morphology (word structure)', note: 'الْأَوْزَانُ' },
      { ar: 'الْمِيزَانُ الصَّرْفِيُّ', en: 'the f-ʿ-l template', note: 'فَعَلَ' },
      { ar: 'الْمَصْدَرُ', en: 'verbal noun (action)', note: 'تَعْلِيمٌ' },
      { ar: 'اسْمُ الْفَاعِلِ', en: 'active participle (doer)', note: 'مُعَلِّمٌ' },
      { ar: 'اسْمُ الْمَفْعُولِ', en: 'passive participle (affected)', note: 'مُعَلَّمٌ' },
      { ar: 'الْإِدْغَامُ', en: 'assimilation (merging letters)', note: 'اِتَّصَلَ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 4, eyebrow: 'Reference · part 1 · Forms I–V (website tables)', title: 'The patterns — Forms I to V', ar: 'الْأَوْزَانُ مِنَ الْأَوَّلِ إِلَى الْخَامِسِ', ltr: true,
      ...PAT('Affected'),
      rows: [
        { core: true, cells: ['I', 'فَعَلَ', 'يَفْعُلُ', 'سَمَاعِيٌّ', 'فَاعِلٌ', 'مَفْعُولٌ'] },
        { core: true, cells: ['II', 'فَعَّلَ', 'يُفَعِّلُ', 'تَفْعِيلٌ', 'مُفَعِّلٌ', 'مُفَعَّلٌ'] },
        { core: true, cells: ['III', 'فَاعَلَ', 'يُفَاعِلُ', 'مُفَاعَلَةٌ', 'مُفَاعِلٌ', 'مُفَاعَلٌ'] },
        { cells: ['IV', 'أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالٌ', 'مُفْعِلٌ', 'مُفْعَلٌ'] },
        { cells: ['V', 'تَفَعَّلَ', 'يَتَفَعَّلُ', 'تَفَعُّلٌ', 'مُتَفَعِّلٌ', 'مُتَفَعَّلٌ'] },
      ],
      foot: 'Website: Form I yafʿulu is one common present; others are yafʿilu and yafʿalu. Form I verbal nouns vary — learn them individually. Forms II–IV present: yu-; Form V: ya-.',
      notes: 'PART 1 (4 min) — website “The ten patterns” and “Verbal nouns and participles”. Students say a real verb for each row (kataba, ʿallama, shāraka, arsala, taʿallama).',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Reference · part 2 · Forms VI–X (website tables)', title: 'The patterns — Forms VI to X', ar: 'الْأَوْزَانُ مِنَ السَّادِسِ إِلَى الْعَاشِرِ', ltr: true,
      ...PAT('Affected'),
      rows: [
        { cells: ['VI', 'تَفَاعَلَ', 'يَتَفَاعَلُ', 'تَفَاعُلٌ', 'مُتَفَاعِلٌ', 'مُتَفَاعَلٌ'] },
        { cells: ['VII', 'اِنْفَعَلَ', 'يَنْفَعِلُ', 'اِنْفِعَالٌ', 'مُنْفَعِلٌ', '—'] },
        { core: true, cells: ['VIII', 'اِفْتَعَلَ', 'يَفْتَعِلُ', 'اِفْتِعَالٌ', 'مُفْتَعِلٌ', 'مُفْتَعَلٌ'] },
        { cells: ['IX', 'اِفْعَلَّ', 'يَفْعَلُّ', 'اِفْعِلَالٌ', 'مُفْعَلٌّ', '—'] },
        { core: true, cells: ['X', 'اِسْتَفْعَلَ', 'يَسْتَفْعِلُ', 'اِسْتِفْعَالٌ', 'مُسْتَفْعِلٌ', 'مُسْتَفْعَلٌ'] },
      ],
      foot: 'Website: passive participles are not equally natural for every verb; intransitive verbs (VII, IX) often have none. A dash = no ordinary form for this model. Derived doer = mu- + kasra; affected = mu- + fatḥa.',
      notes: 'PART 2 (3 min). Real verbs: taʿāwana, inkasara, ijtamaʿa, iḥmarra, istaʿmala.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Reference · part 3 · important exceptions (website) · Stretch', title: 'When real verbs bend the pattern', ar: 'اسْتِثْنَاءَاتٌ مُهِمَّةٌ', ltr: true,
      cols: [{ label: 'Point', w: 3.0 }, { label: 'Example', w: 4.6, size: 24 }, { label: 'What to remember', w: 4.73 }],
      rows: [
        { core: true, cells: ['Form I vowels', 'يَكْتُبُ · يَفْهَمُ · يَجْلِسُ', 'learn each past–present pair'] },
        { cells: ['weak / hamzated', 'قَالَ · يَقُولُ ‖ اِخْتَارَ · يَخْتَارُ', 'letters contract or change'] },
        { cells: ['Form VIII assimilation', 'اِتَّصَلَ · يَتَّصِلُ', 'w + t → tt (root w-ṣ-l)'] },
        { core: true, cells: ['Form VII vs passive', 'اِنْكَسَرَ الْكُوبُ ‖ كُسِرَ الْكُوبُ', 'different constructions'] },
        { cells: ['imperatives', 'اُكْتُبْ · عَلِّمْ · أَرْسِلْ · اِسْتَعْمِلْ', 'from the present stem (GM-V-07)'] },
      ],
      foot: 'Website: regular patterns are a starting point, not a substitute for lexical knowledge. Check the actual dictionary entry before using a derived noun.',
      notes: 'PART 3 (3 min) — website “Important exceptions and distinctions” (kaʾs → kūb; see file note).',
    },
  ],
  quick: [
    W(/Self-check/, 0, { prompt: 'Which family normally has the pattern tafaʿʿala?', feedback: 'Form V adds ta- and doubles the middle letter.' }),
    W(/Self-check/, 1, { prompt: 'Which family commonly uses the verbal noun istifʿāl?', feedback: 'A common Form X verbal-noun pattern.' }),
    q('Which is the Form II verbal noun of عَلَّمَ?', ['تَعْلِيمٌ', 'تَعَلُّمٌ', 'عِلْمٌ'], 'tafʿīl.'),
    q('Mutaʿallim (learner) is …', ['a doer (active participle)', 'a verbal noun', 'a passive participle'], 'mu- + kasra.'),
  ],
  quickNote: 'website Self-check items, plus two teacher items.',
  ido: {
    title: 'Watch me analyse an unknown word',
    steps: [
      { head: 'Word', ar: 'الْمُسْتَخْدِمُونَ', think: 'Remove al- and -ūna.' },
      { head: 'Pattern', ar: 'مُسْتَفْعِلٌ', think: 'mu- + sta- + kasra.' },
      { head: 'Root', ar: 'خ د م', think: 'Serve / use.' },
      { head: 'Answer', ar: 'اسْمُ فَاعِلٍ', think: 'Form X doer: users.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'ROOT LETTERS', e: 'PATTERN' },
    model: 'جَذْرُ «{k|مُسْتَخْدِمٍ}» هُوَ خ د م، وَوَزْنُهُ {e|مُسْتَفْعِلٌ}: اسْمُ فَاعِلٍ مِنَ الْوَزْنِ الْعَاشِرِ «اِسْتَخْدَمَ»، أَيِ الَّذِي يَسْتَخْدِمُ.',
    modelEn: 'The root of mustakhdim is kh-d-m, and its pattern is mustafʿil: the active participle of Form X istakhdama — the one who uses (a user).',
    notes: 'Teacher routine built on the website tables. Students copy the four-step analysis frame.',
  },
  models: [
    { ar: 'الْمُعَلِّمُ يُعَلِّمُ، وَالْمُتَعَلِّمُ يَتَعَلَّمُ.', en: 'The teacher teaches, and the learner learns.', tip: 'II and V.' },
    { ar: 'الِاجْتِمَاعُ فِي الْقَاعَةِ.', en: 'The meeting is in the hall.', tip: 'VIII verbal noun.' },
    { ar: 'هَذِهِ الْكُتُبُ مُسْتَعْمَلَةٌ.', en: 'These books are used (second-hand).', tip: 'X affected.' },
    { ar: 'اِتَّصَلْتُ بِأُمِّي.', en: 'I called my mother.', tip: 'VIII assimilation.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · analyse the word · root → pattern → form → type', title: 'Word detectives', ar: 'مُحَلِّلُو الْكَلِمَاتِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Word', w: 2.8, size: 26 }, { label: 'Root', w: 2.2, size: 24 }, { label: 'Form', w: 1.6 }, { label: 'Type', w: 2.6 }, { label: 'Meaning', w: 3.13 }],
      rows: [
        { core: true, cells: ['مُعَلِّمٌ', 'ع ل م', 'II', 'doer', 'teacher'] },
        { core: true, cells: ['اِجْتِمَاعٌ', 'ج م ع', 'VIII', 'verbal noun', 'meeting'] },
        { core: true, cells: ['تَعَاوُنٌ', 'ع و ن', 'VI', 'verbal noun', 'cooperation'] },
        { cells: ['مُسْتَخْدِمٌ', 'خ د م', 'X', 'doer', 'user'] },
        { cells: ['إِرْسَالٌ', 'ر س ل', 'IV', 'verbal noun', 'sending'] },
        { cells: ['مُشَارِكٌ', 'ش ر ك', 'III', 'doer', 'participant'] },
      ],
      foot: 'Use the reference tables: match the word to a template (mufaʿʿil, iftiʿāl, tafāʿul …), then read off the form.',
      notes: 'WE DO (3 min). Cover columns 2–5; students fill them in using the reference slides.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · action, doer or affected?', title: 'Which kind of noun?', ar: 'مَصْدَرٌ أَمْ فَاعِلٌ أَمْ مَفْعُولٌ؟',
      categories: ['Action (verbal noun)', 'Doer', 'Affected'],
      items: [['تَعْلِيمٌ', 0], ['اِسْتِخْدَامٌ', 0], ['تَعَاوُنٌ', 0], ['مُعَلِّمٌ', 1], ['مُتَعَلِّمٌ', 1], ['مُسْتَخْدِمٌ', 1], ['مُرْسَلٌ', 2], ['مُسْتَعْمَلٌ', 2]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Clue: mu- + kasra = doer; mu- + fatḥa = affected (GM-V-12).',
    },
  ],
  mistakes: [
    { wrong: 'أَنَا مُتَعَلَّمٌ', right: 'أَنَا مُتَعَلِّمٌ', why: 'The doer has kasra before the last letter.' },
    { wrong: 'شَارَكَ · يَشَارِكُ', right: 'شَارَكَ · يُشَارِكُ', why: 'Forms II–IV take yu- in the present.' },
    { wrong: 'اِوْتَصَلْتُ بِأُمِّي', right: 'اِتَّصَلْتُ بِأُمِّي', why: 'Form VIII of w-ṣ-l: w + t merge into tt (website).' },
  ],
  hints: ['Kasra or fatḥa: doer or affected?', 'Which forms take yu-?', 'What happens to w + t?'],
  practice: [
    W(/Self-check/, 2, { prompt: 'Which statement is correct?', feedback: 'Morphology helps recognition, but usage and transitivity matter.' }),
    q('Which form is the verbal noun اِنْقِطَاعٌ from?', ['VII', 'VIII', 'X'], 'infiʿāl.'),
    q('What is the Form X affected participle of اِسْتَعْمَلَ?', ['مُسْتَعْمَلٌ', 'مُسْتَعْمِلٌ', 'اِسْتِعْمَالٌ'], 'mu- + fatḥa.'),
    q('Which present has yu-?', ['يُرْسِلُ', 'يَتَعَلَّمُ', 'يَسْتَعْمِلُ'], 'Form IV.'),
  ],
  practiceLabel: 'website Self-check item and teacher-written analysis questions',
  read: {
    title: 'A school open day', label: 'morphology detective text (teacher-written)',
    text: 'أَعْلَنَتِ الْمَدْرَسَةُ عَنْ يَوْمٍ مَفْتُوحٍ. اِسْتَقْبَلَ الْمُعَلِّمُونَ الزُّوَّارَ، وَشَارَكَ الطُّلَّابُ فِي تَقْدِيمِ الْمَشَارِيعِ. تَعَاوَنَتِ الْمَجْمُوعَاتُ، وَاجْتَمَعَ الْآبَاءُ فِي الْقَاعَةِ. اِسْتَعْمَلْنَا الْحَوَاسِيبَ لِعَرْضِ الصُّوَرِ، وَتَعَلَّمَ الْجَمِيعُ شَيْئًا جَدِيدًا. فِي النِّهَايَةِ اِنْصَرَفَ الضُّيُوفُ سُعَدَاءَ.',
    glossary: [['يَوْمٍ مَفْتُوحٍ', 'open day'], ['تَقْدِيمِ', 'presenting'], ['لِعَرْضِ', 'to display'], ['سُعَدَاءَ', 'happy (pl.)']],
    task: 'Find one verb from each of Forms II–VIII and X, and name each verbal noun and participle.',
    questions: [
      q('Which verb is Form X?', ['اِسْتَقْبَلَ', 'اِجْتَمَعَ', 'اِنْصَرَفَ'], 'ista- + q-b-l.'),
      q('Which word is a Form II verbal noun?', ['تَقْدِيمِ', 'تَعَاوَنَتِ', 'تَعَلَّمَ'], 'tafʿīl.'),
      q('Which verb is Form VII?', ['اِنْصَرَفَ', 'اِسْتَعْمَلْنَا', 'أَعْلَنَتِ'], 'in- before the root.'),
      q('Which word is a Form I passive participle?', ['مَفْتُوحٍ', 'الْمُعَلِّمُونَ', 'الْمَشَارِيعِ'], 'mafʿūl.'),
    ],
    qNote: 'Teacher-written detective text using the website reference examples; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: explain a word to a partner', source: 'teacher-written on the website reference',
    prompts: [
      { route: 'core', ar: 'مِنْ أَيِّ وَزْنٍ «تَعَلَّمَ»؟' },
      { route: 'develop', ar: 'مَا مَصْدَرُ «اِجْتَمَعَ»؟ وَمَا اسْمُ الْفَاعِلِ مِنْ «عَلَّمَ»؟' },
      { route: 'stretch', ar: 'حَلِّلْ كَلِمَةَ «مُسْتَقْبَلٌ»: الْجَذْرُ، وَالْوَزْنُ، وَالْمَعْنَى.' },
    ],
    stems: [
      { route: 'core', ar: '«تَعَلَّمَ» مِنَ الْوَزْنِ ______ .' },
      { route: 'develop', ar: 'مَصْدَرُ «اِجْتَمَعَ» ______ ، وَاسْمُ الْفَاعِلِ ______ .' },
      { route: 'stretch', ar: 'الْجَذْرُ ______ ، وَالْوَزْنُ ______ ، وَالْمَعْنَى ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَا جَذْرُ «مُشَارِكَةٌ»؟', en: 'What is the root of mushārika?' },
      { who: 'B', ar: 'جَذْرُهَا ش ر ك، وَوَزْنُهَا مُفَاعِلَةٌ. هِيَ اسْمُ فَاعِلٍ مِنَ الْوَزْنِ الثَّالِثِ «شَارَكَ»، وَمَعْنَاهَا: الَّتِي تُشَارِكُ.', en: 'Its root is sh-r-k and its pattern mufāʿila. It is the active participle of Form III shāraka, meaning a female participant.' },
    ],
    notes: 'Pairs take turns choosing a word from the reference tables; the partner analyses it aloud.',
  },
  write: {
    siteTask: 'Website “next step”: use the reference to repair uncertainties — build your own root map and check every pattern.',
    core: { amount: '5 lines', task: 'Name the form of ten verbs from the unit.', how: 'Use the reference tables.' },
    develop: { amount: '8 lines', task: 'For five verbs, give the verbal noun and the doer.', how: 'tafʿīl, mufāʿala, iftiʿāl …' },
    stretch: { amount: 'root map', task: 'One root across five forms with nouns, each in a sentence.', how: 'e.g. ʿ-l-m or kh-d-m.' },
  },
  frames: {
    core: [
      { en: '… is from Form …', ar: '«______» مِنَ الْوَزْنِ ______ .' },
      { en: 'The root of … is …', ar: 'جَذْرُ «______» هُوَ ______ .' },
      { en: 'The present of … is …', ar: 'مُضَارِعُ «______» هُوَ ______ .' },
      { en: 'The verbal noun of … is …', ar: 'مَصْدَرُ «______» هُوَ ______ .' },
    ],
    develop: [
      { en: 'The doer of … is …', ar: 'اسْمُ الْفَاعِلِ مِنْ «______» هُوَ ______ .' },
      { en: '… is a doer / an action', ar: '«______» اسْمُ فَاعِلٍ / مَصْدَرٌ.' },
      { en: 'From the root … we have …', ar: 'مِنَ الْجَذْرِ ______ عِنْدَنَا ______ .' },
      { en: 'This word means …', ar: 'مَعْنَى هَذِهِ الْكَلِمَةِ ______ .' },
    ],
    bank: ['الْوَزْنُ الْأَوَّلُ', 'الثَّانِي', 'الثَّالِثُ', 'الرَّابِعُ', 'الْخَامِسُ', 'السَّادِسُ', 'السَّابِعُ', 'الثَّامِنُ', 'الْعَاشِرُ', 'مَصْدَرٌ', 'اسْمُ فَاعِلٍ', 'اسْمُ مَفْعُولٍ'],
  },
  stretchTask: {
    task: 'Build a root map: one root across five forms, with a verbal noun and a participle, each in a sentence.',
    checklist: ['Root letters written separately.', 'Five forms, each labelled with its number.', 'Past and present for each verb.', 'Two nouns (verbal noun / participle) named correctly.', 'One sentence per word.'],
    phrases: [['مِنْ نَفْسِ الْجَذْرِ', 'from the same root'], ['عَلَى وَزْنِ', 'on the pattern of'], ['اسْمُ فَاعِلٍ', 'active participle'], ['مَصْدَرٌ', 'verbal noun'], ['يَعْنِي', 'means'], ['أَمَّا … فَـ', 'as for …']],
  },
  model: {
    text: 'خَرِيطَةُ الْجَذْرِ ع ل م: «عَلِمَ · يَعْلَمُ» مِنَ الْوَزْنِ الْأَوَّلِ، وَمَصْدَرُهُ «عِلْمٌ». «عَلَّمَ · يُعَلِّمُ» مِنَ الْوَزْنِ الثَّانِي، وَاسْمُ الْفَاعِلِ «مُعَلِّمٌ». «تَعَلَّمَ · يَتَعَلَّمُ» مِنَ الْوَزْنِ الْخَامِسِ، وَمَصْدَرُهُ «تَعَلُّمٌ». «أَعْلَمَ · يُعْلِمُ» مِنَ الْوَزْنِ الرَّابِعِ. «اِسْتَعْلَمَ · يَسْتَعْلِمُ» مِنَ الْوَزْنِ الْعَاشِرِ، وَمِنْهُ «الِاسْتِعْلَامَاتُ» فِي الْمَطَارِ. الْمُعَلِّمَةُ تُعَلِّمُنَا، وَنَحْنُ نَتَعَلَّمُ الْعِلْمَ النَّافِعَ.',
    en: 'Root map ʿ-l-m: ʿalima / yaʿlamu (I) means to know; its verbal noun is ʿilm. ʿAllama / yuʿallimu (II) means to teach; the doer is muʿallim. Taʿallama / yataʿallamu (V) means to learn; its verbal noun is taʿallum. Aʿlama / yuʿlimu (IV) means to inform. Istaʿlama / yastaʿlimu (X) means to inquire — hence “the information desk” at the airport. The teacher teaches us, and we learn beneficial knowledge.',
    find: ['Form I', 'Form II', 'Form V', 'Form X'],
    source: 'teacher model root map on the website reference',
  },
  selfCheck: [
    { route: 'core', text: 'I can name the form of a verb using the tables.' },
    { route: 'core', text: 'I know which presents take yu- (II, III, IV).' },
    { route: 'develop', text: 'I can give the verbal noun of a derived verb.' },
    { route: 'develop', text: 'I can tell doer (kasra) from affected (fatḥa).' },
    { route: 'stretch', text: 'I can explain one exception (ittaṣala, ikhtāra).' },
  ],
  exit: [
    q('Which form is تَفَاعَلَ?', ['VI', 'V', 'III'], 'ta- + ā.'),
    q('Which is the verbal noun of a Form IV verb?', ['إِرْسَالٌ', 'تَرَاسُلٌ', 'مُرَاسَلَةٌ'], 'ifʿāl.'),
    q('Mustaʿmal means …', ['used', 'user', 'using'], 'mu- + fatḥa = affected.'),
  ],
  mastery: false,
  prep: {
    words: [['فِي', 'in', 'فِي الْبَيْتِ'], ['عَلَى', 'on', 'عَلَى الطَّاوِلَةِ'], ['مِنْ', 'from', 'مِنَ الْمَدْرَسَةِ'], ['إِلَى', 'to', 'إِلَى السُّوقِ'], ['مَعَ', 'with', 'مَعَ صَدِيقِي']],
    questionEn: 'Look at the noun after each word: what vowel does it end with?',
    questionAr: 'فِي الْبَيْتِ · عَلَى الطَّاوِلَةِ',
    homework: {
      core: 'Copy the ten-pattern table and add one real verb per form.',
      develop: 'Give the verbal noun and doer for eight derived verbs.',
      stretch: 'A root map for one root across five forms.',
    },
    wordsSource: 'The five words prepare GM-CP-01 (website Conjunctions and Prepositions: common prepositions and the genitive).',
  },
  remember: 'Remember: root + pattern = word · I faʿala · II faʿʿala · III fāʿala · IV afʿala · V tafaʿʿala · VI tafāʿala · VII infaʿala · VIII iftaʿala · IX ifʿalla · X istafʿala · learn real verbs — patterns are clues.',
});

module.exports = { meta, slides };
