'use strict';
/* GM-VF-00 · What Are Arabic Verb Forms? — website: Mastery & Revision › Grammar › Arabic Verb Forms › Introduction (one root, related
 * meanings: ʿalima / ʿallama / taʿallama; Forms I–X are numbered morphological families, not tenses or difficulty levels; a form is
 * not a guaranteed translation and not every root occurs in every form; study route: meaning → pattern → practise → revisit).
 * The website offers four check items; they are used where they fit (W). All other questions, the patterns table (فَعَلَ … اِسْتَفْعَلَ),
 * the sorter, reading, speaking, frames and model are teacher-written on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__07a-verb-forms__introduction';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-VF-00', fileTitle: 'What_Are_Verb_Forms', title: 'What Are Arabic Verb Forms?', arabic: 'مَا الْأَوْزَانُ الصَّرْفِيَّةُ؟',
  focus: 'Arabic builds words from a ROOT (usually three consonants) poured into a PATTERN. ʿ-l-m gives ʿalima (know), ʿallama (teach), taʿallama (learn). The numbers I–X name ten pattern families — they are not tenses.',
  icon: 'FaSitemap',
});

const slides = G.gmLesson({
  code: 'GM-VF-00', site: KEY,
  support: `• Core: root vs pattern with the ع ل م family (عَلِمَ · عَلَّمَ · تَعَلَّمَ) and the k-t-b family. Develop: the ten forms with one example each, and “a form is not a tense” (عَلَّمَ / يُعَلِّمُ are both Form II). Stretch: the فَعَلَ templates (فَعَّلَ · فَاعَلَ · أَفْعَلَ · تَفَعَّلَ …) and why the numbers are only a learning convention.
• Website warnings: a root is not an English translation; not every root occurs in all ten forms; a form gives clues, not a guaranteed meaning.
• Recommended route (website): one form per lesson — GM-VF-01 to VF-10, with VF-R (morphology reference) as an optional extension.`,
  teach: 'Root and pattern; the ten forms; form ≠ tense; how to study.',
  wedo: 'Find the root; sort by root family; repair.',
  next: { nextCode: 'GM-VF-01', nextTitle: 'Form I: The Basic Verb', nextAr: 'الْفِعْلُ الثُّلَاثِيُّ الْمُجَرَّدُ' },
  doNow: {
    questions: [
      q('What does the root k-t-b connect?', ['words about writing', 'words about reading', 'words about travel'], 'Kataba, kitāb, kātib, maktab.'),
      q('Kātib (writer) and maktūb (written) come from which verb?', ['كَتَبَ', 'قَرَأَ', 'دَرَسَ'], 'Same root k-t-b (GM-V-12).'),
      q('Darasa = to study. Darrasa (with shadda) means …', ['to teach', 'to study again', 'to write'], 'One extra letter, a new meaning — the prep from GM-V-12.'),
      q('Which is the PRESENT of kataba?', ['يَكْتُبُ', 'كِتَابٌ', 'كَاتِبٌ'], 'Same verb, different tense (GM-V-05).'),
      q('How many consonants do most Arabic roots have?', ['three', 'two', 'five'], 'Most roots are triliteral.'),
    ],
    keyIdea: { text: 'ROOT (the consonants, e.g. ʿ-l-m) + PATTERN (the vowels and extra letters) = a real word with its own meaning.', ar: '{k|عَلِمَ} · {e|عَلَّمَ} · {k|تَعَلَّمَ}' },
    retrieves: 'Teacher-written retrieval from GM-V-12 (root families) and GM-V-05 (past and present pairs).',
  },
  objectives: ['Explain the difference between a root and a pattern.', 'Recognise related verbs from one root.', 'Know that Forms I–X are families, not tenses.', 'Plan how to learn one form at a time.'],
  routes: {
    core: ['I find the three root letters of a verb.', 'I know ʿalima, ʿallama and taʿallama.'],
    develop: ['I give one example verb for several forms.', 'I explain why ʿallama and yuʿallimu are the same form.'],
    stretch: ['I match verbs to the faʿala templates.', 'I explain why a form is not a fixed meaning.'],
  },
  terms: {
    items: [
      { ar: 'الْجَذْرُ', en: 'root (the consonants)', note: 'ع ل م' },
      { ar: 'الْوَزْنُ', en: 'pattern / form', note: 'فَعَّلَ' },
      { ar: 'الْمِيزَانُ الصَّرْفِيُّ', en: 'the template f-ʿ-l', note: 'فَعَلَ' },
      { ar: 'الْمُجَرَّدُ', en: 'basic (no added letters)', note: 'Form I' },
      { ar: 'الْمَزِيدُ', en: 'derived (letters added)', note: 'Forms II–X' },
      { ar: 'الزَّمَنُ', en: 'tense', note: 'مَاضٍ · مُضَارِعٌ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 1 · one root, related meanings (website)', title: 'Discover the family ʿ-l-m', ar: 'جَذْرٌ وَاحِدٌ وَمَعَانٍ مُتَرَابِطَةٌ', ltr: true,
      cols: [{ label: 'Verb', w: 2.6, size: 26 }, { label: 'Meaning', w: 2.6 }, { label: 'Model sentence (website)', w: 4.6, size: 22 }, { label: 'English', w: 2.53 }],
      rows: [
        { core: true, cells: ['عَلِمَ', 'to know', 'عَلِمَ الطَّالِبُ الْجَوَابَ.', 'The student knew the answer.'] },
        { core: true, cells: ['عَلَّمَ', 'to teach', 'عَلَّمَتِ الْمُعَلِّمَةُ الطَّالِبَ.', 'The teacher taught the student.'] },
        { core: true, cells: ['تَعَلَّمَ', 'to learn', 'تَعَلَّمَ الطَّالِبُ الْعَرَبِيَّةَ.', 'The student learned Arabic.'] },
        { cells: ['عِلْمٌ · مُعَلِّمٌ', 'knowledge · teacher', 'nouns from the same root (GM-V-12)', '—'] },
      ],
      foot: 'Website: notice the shared consonants ʿ – l – m. The pattern changes the word, and the meaning changes with it. A root is a connection, not an English translation.',
      notes: 'PART 1 (3 min) — website “One root, related meanings”. Write ع ل م on the board and build each word around it.',
    },
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 2 · what do the numbers mean? Forms I–V (website table)', title: 'The ten families — part 1', ar: 'الْأَوْزَانُ (١ – ٥)', ltr: true,
      cols: [{ label: 'Form', w: 1.4 }, { label: 'Template', w: 2.4, size: 24 }, { label: 'Past · present', w: 4.0, size: 24 }, { label: 'Meaning', w: 2.4 }, { label: 'Typical idea', w: 2.13 }],
      rows: [
        { core: true, cells: ['I', 'فَعَلَ', 'كَتَبَ · يَكْتُبُ', 'to write', 'basic verb'] },
        { core: true, cells: ['II', 'فَعَّلَ', 'عَلَّمَ · يُعَلِّمُ', 'to teach', 'shadda: cause / intensify'] },
        { cells: ['III', 'فَاعَلَ', 'شَارَكَ · يُشَارِكُ', 'to participate', 'long ā: with someone'] },
        { cells: ['IV', 'أَفْعَلَ', 'أَرْسَلَ · يُرْسِلُ', 'to send', 'a-: cause'] },
        { core: true, cells: ['V', 'تَفَعَّلَ', 'تَعَلَّمَ · يَتَعَلَّمُ', 'to learn', 'ta- + shadda: develop'] },
      ],
      foot: 'Website: Roman numerals name families — they do not show tense or difficulty. ʿallama (past) and yuʿallimu (present) are BOTH Form II.',
      notes: 'PART 2 (3 min) — website “What do the numbers mean?” (templates and “typical idea” added as Stretch clues — see VF-01 to VF-10).',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · Forms VI–X and how to study (website) · Develop / Stretch', title: 'The ten families — part 2', ar: 'الْأَوْزَانُ (٦ – ١٠)', ltr: true,
      cols: [{ label: 'Form', w: 1.4 }, { label: 'Template', w: 2.4, size: 24 }, { label: 'Past · present', w: 4.0, size: 24 }, { label: 'Meaning', w: 2.4 }, { label: 'Typical idea', w: 2.13 }],
      rows: [
        { cells: ['VI', 'تَفَاعَلَ', 'تَعَاوَنَ · يَتَعَاوَنُ', 'to cooperate', 'each other'] },
        { cells: ['VII', 'اِنْفَعَلَ', 'اِنْكَسَرَ · يَنْكَسِرُ', 'to break (become broken)', 'happens to it'] },
        { cells: ['VIII', 'اِفْتَعَلَ', 'اِكْتَسَبَ · يَكْتَسِبُ', 'to acquire', '-t- inside'] },
        { cells: ['IX', 'اِفْعَلَّ', 'اِحْمَرَّ · يَحْمَرُّ', 'to become red', 'colours (rare)'] },
        { core: true, cells: ['X', 'اِسْتَفْعَلَ', 'اِسْتَعْمَلَ · يَسْتَعْمِلُ', 'to use', 'ista-: seek / use'] },
      ],
      foot: 'Website study route: begin with meaning → notice the pattern → practise and apply → revisit. Not every root has all ten forms; learn real verbs, not empty tables.',
      notes: 'PART 3 (3 min) — website table (Forms VI–X) and “How to study the collection”. Form IX is optional extension (website).',
    },
  ],
  quick: [
    W(/Self-check/, 0, { feedback: 'Arabic roots commonly contain three consonants.' }),
    W(/Self-check/, 1, { feedback: 'The doubled middle letter marks Form II ʿallama.' }),
    W(/Quick understanding/, 0, { prompt: 'Which pair is the SAME form in different tenses?', feedback: 'ʿallama and yuʿallimu are the past and present of Form II.' }),
    q('Which verb is Form V?', ['تَعَلَّمَ', 'عَلَّمَ', 'عَلِمَ'], 'ta- + shadda = tafaʿʿala.'),
  ],
  quickNote: 'website Self-check and Quick understanding items, plus one teacher item.',
  ido: {
    title: 'Watch me find the root and the form',
    steps: [
      { head: 'Word', ar: 'يَسْتَعْمِلُ', think: 'Remove the prefix ya-.' },
      { head: 'Extra letters', ar: 'اِسْتَـ', think: 'ista- = Form X.' },
      { head: 'Root', ar: 'ع م ل', think: 'Work / use.' },
      { head: 'Form', ar: 'اِسْتَفْعَلَ', think: 'Form X template.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'ROOT LETTERS', e: 'PATTERN' },
    model: '{k|عَلِمَ} الطَّالِبُ الْجَوَابَ. {e|عَلَّمَتِ} الْمُعَلِّمَةُ الطَّالِبَ. {e|تَعَلَّمَ} الطَّالِبُ الْعَرَبِيَّةَ.',
    modelEn: 'The student knew the answer. The teacher taught the student. The student learned Arabic.',
    notes: 'Website “Discover the family” sentences. Ask: which letters never change? (ʿ-l-m).',
  },
  models: [
    { ar: 'أُعَلِّمُ أَخِي الصَّغِيرَ الْقِرَاءَةَ.', en: 'I teach my little brother to read.', tip: 'Form II.' },
    { ar: 'نَتَعَلَّمُ الْعَرَبِيَّةَ مَعًا.', en: 'We learn Arabic together.', tip: 'Form V.' },
    { ar: 'أَسْتَعْمِلُ الْحَاسُوبَ كُلَّ يَوْمٍ.', en: 'I use the computer every day.', tip: 'Form X.' },
    { ar: 'نَتَعَاوَنُ فِي الْمَشْرُوعِ.', en: 'We cooperate on the project.', tip: 'Form VI.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · find the root · say it aloud', title: 'Strip the extras, find the root', ar: 'اِسْتَخْرِجِ الْجَذْرَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Word', w: 3.0, size: 26 }, { label: 'Root', w: 2.6, size: 26 }, { label: 'Root idea', w: 3.0 }, { label: 'Form', w: 3.73 }],
      rows: [
        { core: true, cells: ['يُعَلِّمُ', 'ع ل م', 'knowledge', 'II (shadda)'] },
        { core: true, cells: ['يُشَارِكُ', 'ش ر ك', 'sharing', 'III (long ā)'] },
        { cells: ['أَرْسَلَ', 'ر س ل', 'sending', 'IV (a-)'] },
        { cells: ['تَعَاوَنَ', 'ع و ن', 'help', 'VI (ta- + ā)'] },
        { cells: ['اِكْتَسَبَ', 'ك س ب', 'gaining', 'VIII (-t-)'] },
        { cells: ['يَسْتَعْمِلُ', 'ع م ل', 'work / use', 'X (ista-)'] },
      ],
      foot: 'Routine: remove tense prefixes (ya-, tu-) first, then the pattern letters (ta-, ista-, a-, shadda, long ā). What is left is the root.',
      notes: 'WE DO (3 min). Cover columns 2 and 4.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · which root family?', title: 'Which family does it belong to?', ar: 'إِلَى أَيِّ أُسْرَةٍ؟',
      categories: ['k-t-b (writing)', 'ʿ-l-m (knowing)', 'd-r-s (studying)'],
      items: [['كَتَبَ', 0], ['مَكْتَبٌ', 0], ['كَاتِبٌ', 0], ['عَلَّمَ', 1], ['تَعَلَّمَ', 1], ['مُعَلِّمٌ', 1], ['مَدْرَسَةٌ', 2], ['دَرَّسَ', 2]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students type 1, 2 or 3 and name the root letters.',
    },
  ],
  mistakes: [
    { wrong: 'جَذْرُ «يُعَلِّمُ»: ي ع ل', right: 'جَذْرُ «يُعَلِّمُ»: ع ل م', why: 'Remove the tense prefix yu- first; the shadda doubles the l.' },
    { wrong: 'جَذْرُ «تَعَلَّمَ»: ت ع ل', right: 'جَذْرُ «تَعَلَّمَ»: ع ل م', why: 'Ta- is a pattern letter (Form V), not a root letter.' },
    { wrong: 'جَذْرُ «اِسْتَعْمَلَ»: س ع م', right: 'جَذْرُ «اِسْتَعْمَلَ»: ع م ل', why: 'Ista- is the Form X prefix.' },
  ],
  hints: ['Tense prefix or root?', 'Pattern letter or root?', 'What does ista- mark?'],
  practice: [
    W(/Self-check/, 2, { prompt: 'Which claim is accurate?', feedback: 'A numbered form identifies a pattern, not a guaranteed translation.' }),
    q('What is the root of مُعَلِّمٌ (teacher)?', ['ع ل م', 'م ع ل', 'ع ل ن'], 'Remove the mu- and the shadda.'),
    q('Which is Form X?', ['اِسْتَعْمَلَ', 'عَمِلَ', 'تَعَامَلَ'], 'ista- = Form X.'),
    q('Shāraka (to participate) has a long ā after the first root letter. Which form?', ['III', 'II', 'IV'], 'fāʿala = Form III.'),
  ],
  practiceLabel: 'website Self-check item and teacher-written pattern questions',
  read: {
    title: 'A family of words', label: 'reading for roots (teacher-written)',
    text: 'فِي مَدْرَسَتِنَا مُعَلِّمَةٌ نَشِيطَةٌ. هِيَ تُعَلِّمُنَا الْعُلُومَ، وَنَحْنُ نَتَعَلَّمُ مِنْهَا كَثِيرًا. فِي الدَّرْسِ نَتَعَاوَنُ فِي مَجْمُوعَاتٍ، وَنَسْتَعْمِلُ الْحَاسُوبَ. أَمْسِ أَرْسَلَتْ لَنَا رِسَالَةً: «أَنْتُمْ تَعْلَمُونَ الْكَثِيرَ الْآنَ!». فِي آخِرِ الْعَامِ سَنُشَارِكُ فِي مَعْرِضِ الْعُلُومِ.',
    glossary: [['نَشِيطَةٌ', 'active (f.)'], ['مَجْمُوعَاتٍ', 'groups'], ['مَعْرِضِ', 'exhibition'], ['آخِرِ الْعَامِ', 'end of the year']],
    task: 'Find every word from the root ʿ-l-m, then name the form of four other verbs.',
    questions: [
      q('How many words come from ʿ-l-m in the first two sentences?', ['four', 'two', 'one'], 'Muʿallima, tuʿallimu, al-ʿulūm, nataʿallamu.'),
      q('Which verb is Form VI (working together)?', ['نَتَعَاوَنُ', 'نَسْتَعْمِلُ', 'أَرْسَلَتْ'], 'tafāʿala.'),
      q('Which verb is Form IV?', ['أَرْسَلَتْ', 'نُشَارِكُ', 'نَتَعَلَّمُ'], 'afʿala: arsala.'),
      q('Who teaches and who learns?', ['the teacher teaches; the students learn', 'the students teach', 'nobody learns'], 'Tuʿallimunā · nataʿallamu.'),
    ],
    qNote: 'Teacher-written text using the website example verbs; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: who teaches, who learns?', source: 'teacher-written on the website model sentences',
    prompts: [
      { route: 'core', ar: 'مَنْ يُعَلِّمُكَ الْعَرَبِيَّةَ؟' },
      { route: 'develop', ar: 'مَاذَا تَتَعَلَّمُ هَذِهِ السَّنَةَ؟ وَمَاذَا تَسْتَعْمِلُ؟' },
      { route: 'stretch', ar: 'مَا الْفَرْقُ بَيْنَ «عَلِمَ» وَ«عَلَّمَ» وَ«تَعَلَّمَ»؟' },
    ],
    stems: [
      { route: 'core', ar: 'يُعَلِّمُنِي ______ .' },
      { route: 'develop', ar: 'أَتَعَلَّمُ ______ ، وَأَسْتَعْمِلُ ______ .' },
      { route: 'stretch', ar: '«عَلِمَ» يَعْنِي ______ ، وَ«عَلَّمَ» يَعْنِي ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَنْ يُعَلِّمُكِ الْقُرْآنَ؟', en: 'Who teaches you the Qur’an? (to a girl)' },
      { who: 'B', ar: 'تُعَلِّمُنِي أُمِّي، وَأَنَا أَتَعَلَّمُ مِنْهَا كُلَّ يَوْمٍ. وَأُعَلِّمُ أُخْتِي الصَّغِيرَةَ أَيْضًا!', en: 'My mother teaches me, and I learn from her every day. And I teach my little sister too!' },
    ],
    notes: 'Use the root on the board. Students say one sentence with each of ʿalima, ʿallama and taʿallama.',
  },
  write: {
    siteTask: 'Website study route: read the model sentences, notice the pattern, then write your own sentences with related verbs.',
    core: { amount: '3 sentences', task: 'One sentence each with ʿalima, ʿallama and taʿallama.', how: 'Copy the website models, change the subject.' },
    develop: { amount: '5 sentences', task: 'Add sentences with Forms III, VI and X.', how: 'Use the table verbs.' },
    stretch: { amount: '8 sentences', task: 'A root map for one root with three forms and two nouns.', how: 'Label each word with its form.' },
  },
  frames: {
    core: [
      { en: 'I know …', ar: 'أَعْلَمُ أَنَّ ______ .' },
      { en: '… teaches me …', ar: '______ يُعَلِّمُنِي ______ .' },
      { en: 'I learn … every day', ar: 'أَتَعَلَّمُ ______ كُلَّ يَوْمٍ.' },
      { en: 'I use … at school', ar: 'أَسْتَعْمِلُ ______ فِي الْمَدْرَسَةِ.' },
    ],
    develop: [
      { en: 'We cooperate in …', ar: 'نَتَعَاوَنُ فِي ______ .' },
      { en: 'I participate in …', ar: 'أُشَارِكُ فِي ______ .' },
      { en: 'I sent … to …', ar: 'أَرْسَلْتُ ______ إِلَى ______ .' },
      { en: 'The root of … is …', ar: 'جَذْرُ «______» هُوَ ______ .' },
    ],
    bank: ['عَلِمَ', 'عَلَّمَ', 'تَعَلَّمَ', 'كَتَبَ', 'شَارَكَ', 'أَرْسَلَ', 'تَعَاوَنَ', 'اِكْتَسَبَ', 'اِسْتَعْمَلَ', 'الْجَذْرُ', 'الْوَزْنُ'],
  },
  stretchTask: {
    task: 'Make a root map: one root, three verb forms, two nouns — each in a sentence.',
    checklist: ['Root letters written separately.', 'Three verbs from different forms.', 'Each verb labelled with its form number.', 'Two nouns from the same root.', 'One sentence per word.'],
    phrases: [['جَذْرُ الْكَلِمَةِ', 'the root of the word'], ['عَلَى وَزْنِ', 'on the pattern of'], ['الْوَزْنُ الثَّانِي', 'Form II'], ['يَعْنِي', 'means'], ['مِنْ نَفْسِ الْجَذْرِ', 'from the same root']],
  },
  model: {
    text: 'جَذْرُ «عَلَّمَ» هُوَ ع ل م. مِنْ هَذَا الْجَذْرِ: «عَلِمَ» (الْوَزْنُ الْأَوَّلُ)، وَ«عَلَّمَ» (الْوَزْنُ الثَّانِي)، وَ«تَعَلَّمَ» (الْوَزْنُ الْخَامِسُ). أَعْلَمُ أَنَّ الْعَرَبِيَّةَ جَمِيلَةٌ. تُعَلِّمُنِي مُعَلِّمَتِي الْقَوَاعِدَ، وَأَتَعَلَّمُ كَلِمَاتٍ جَدِيدَةً كُلَّ أُسْبُوعٍ. «الْعِلْمُ» نُورٌ، وَ«الْمُعَلِّمُ» يُسَاعِدُنَا عَلَى طَلَبِهِ.',
    en: 'The root of ʿallama is ʿ-l-m. From this root: ʿalima (Form I), ʿallama (Form II) and taʿallama (Form V). I know that Arabic is beautiful. My teacher teaches me grammar, and I learn new words every week. Knowledge is light, and the teacher helps us to seek it.',
    find: ['root letters', 'Form I', 'Form II', 'Form V'],
    source: 'teacher model on the website introduction',
  },
  selfCheck: [
    { route: 'core', text: 'I can find three root letters.' },
    { route: 'core', text: 'I know ʿalima, ʿallama, taʿallama.' },
    { route: 'develop', text: 'I know a form is not a tense.' },
    { route: 'develop', text: 'I can give one verb for five forms.' },
    { route: 'stretch', text: 'I can match verbs to the faʿala templates.' },
  ],
  exit: [
    q('Which verb means “to learn”?', ['تَعَلَّمَ', 'عَلَّمَ', 'عَلِمَ'], 'Form V.'),
    q('ʿAllama and yuʿallimu are …', ['the same form, different tenses', 'two different forms', 'two different roots'], 'Both Form II.'),
    q('What is the root of يَسْتَعْمِلُ?', ['ع م ل', 'س ت ع', 'ي س ت'], 'Remove ya- and ista-.'),
  ],
  mastery: false,
  prep: {
    words: [['فَهِمَ · يَفْهَمُ', 'to understand', '—'], ['جَلَسَ · يَجْلِسُ', 'to sit', '—'], ['دَرَسَ · يَدْرُسُ', 'to study', '—'], ['كَبُرَ · يَكْبُرُ', 'to grow up', '—'], ['قَرَأَ · يَقْرَأُ', 'to read', '—']],
    questionEn: 'Look at the present vowels: yaktubu, yafhamu, yajlisu. Are they all the same?',
    questionAr: 'يَكْتُبُ · يَفْهَمُ · يَجْلِسُ',
    homework: {
      core: 'Write the root of eight words from your vocabulary list.',
      develop: 'Write five sentences with verbs from five different forms.',
      stretch: 'Root map: one root, three forms, two nouns.',
    },
    wordsSource: 'The five pairs prepare GM-VF-01 (website Verb Forms: Form I).',
  },
  remember: 'Remember: root = the consonants · pattern = vowels + extra letters · Forms I–X are families, not tenses · a form is a clue, not a rule · learn real verbs one form at a time.',
});

module.exports = { meta, slides };
