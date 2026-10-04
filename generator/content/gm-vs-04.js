'use strict';
/* GM-VS-04 · Building and Editing Verbal Sentences — website: Mastery & Revision › Grammar › Verbal Sentences › Lesson 4 (choose VSO or
 * SVO for a communicative reason; the six-step sentence ladder; transforming across past / present / future; questions and negation
 * — hal, mā, lam + jussive, lā, lan — keep the roles; the four-pass editing routine: roles → order → verb form → expansion; Cambridge
 * application; integrated clinic). Website ladder row 5 is abridged on the site (“…”) and is completed here. Quizzes are the website’s
 * (Entry, Order Choice, Sentence Ladder, Editor, Final Mastery); the Order Choice item with an “only” option is skipped. Colour code
 * for this area: teal = verb, blue = subject. I-do, question / negation drill, reading audit text, frames and the extended model are
 * teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__10-verbal-sentences__grammar-mastery-04-building-editing';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-VS-04', fileTitle: 'Building_Editing', title: 'Building and Editing Verbal Sentences', arabic: 'بِنَاءُ الْجُمَلِ الْفِعْلِيَّةِ وَمُرَاجَعَتُهَا',
  focus: 'Put it all together: choose verb first or subject first for a reason, build a sentence one detail at a time, keep agreement through questions and negatives (hal, lam, lan) — then edit in four passes.',
  icon: 'FaPenToSquare',
});

const slides = G.gmLesson({
  code: 'GM-VS-04', site: KEY,
  support: `• Core: build a clear VSO and SVO core and expand it with time and place; ask with hal. Develop: transform across past, present and future and negate with mā, lam, lā and lan without losing agreement. Stretch: the four-pass edit on a full paragraph, order chosen for focus and contrast (ammā … fa-), clear object pronouns.
• This lesson revises GM-VS-01 to 03: VSO = singular verb that matches gender; SVO = full agreement; non-human plurals = “she” verb.
• Website warning: variety is not random — change the order only when it improves focus, contrast or flow. Lam takes the present (jussive) form: lam yaktub, never lam kataba.`,
  teach: 'Order for a reason; the ladder; time frames; questions and negatives; four-pass edit.',
  wedo: 'Edit the clinic drafts; question and negate; repair.',
  next: { nextCode: 'GM-NVS-01', nextTitle: 'Simple Non-Verbal Sentences', nextAr: 'الْجُمَلُ الِاسْمِيَّةُ الْبَسِيطَةُ' },
  doNow: {
    questions: [
      W(/Entry Check/, 0, { feedback: 'Verb first before people → singular: akmala.' }),
      W(/Entry Check/, 1, { feedback: 'People first → full agreement: akmalū.' }),
      W(/Entry Check/, 2, { prompt: 'Add a manner phrase: كَتَبَتْ لَيْلَى الرِّسَالَةَ', feedback: 'Add “how” after a secure core.' }),
      W(/Entry Check/, 3, { feedback: 'Lam + present form, past meaning.' }),
      W(/Entry Check/, 4, { feedback: 'Hal goes in front of the whole sentence.' }),
    ],
    keyIdea: { text: 'Verb first → singular verb · subject first → full agreement · questions and negatives keep the same rule.', ar: 'لَمْ {k|يَكْتُبِ} {w|الطُّلَّابُ} ‖ {w|الطُّلَّابُ} لَمْ {k|يَكْتُبُوا}' },
    retrieves: 'The website Entry Check — GM-VS-01 roles, GM-VS-02 full agreement and GM-VS-03 verb-first agreement.',
  },
  objectives: ['Choose verb first or subject first for a reason.', 'Expand a sentence one detail at a time.', 'Keep agreement in questions and negatives.', 'Edit a paragraph in four passes.'],
  routes: {
    core: ['I build VSO and SVO cores.', 'I add time and place and ask with hal.'],
    develop: ['I change the time frame correctly.', 'I negate with lam and lan.'],
    stretch: ['I edit a paragraph in four passes.', 'I write 120–140 words with varied order.'],
  },
  terms: {
    items: [
      { ar: 'الْبِنَاءُ', en: 'building (a sentence)', note: 'خُطْوَةً خُطْوَةً' },
      { ar: 'الْمُرَاجَعَةُ', en: 'editing / checking', note: 'أَرْبَعُ مَرَاحِلَ' },
      { ar: 'الِاسْتِفْهَامُ', en: 'question', note: 'هَلْ كَتَبَ …؟' },
      { ar: 'النَّفْيُ', en: 'negation', note: 'مَا · لَمْ · لَا · لَنْ' },
      { ar: 'الْمَجْزُومُ', en: 'jussive form (after lam)', note: 'لَمْ يَكْتُبْ' },
      { ar: 'التَّنْوِيعُ', en: 'variety (with a reason)', note: 'أَمَّا … فَـ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 1 · choose the order for a reason (website table)', title: 'What do you want to put in focus?', ar: 'اِخْتَرِ التَّرْتِيبَ لِسَبَبٍ', ltr: true,
      cols: [{ label: 'Purpose', w: 3.4 }, { label: 'Opening', w: 2.2 }, { label: 'Website model', w: 6.73, size: 22 }],
      rows: [
        { core: true, cells: ['Report a new event', 'verb first', 'فَازَ الْفَرِيقُ بِالْمُبَارَاةِ.'] },
        { core: true, cells: ['Keep talking about a known person', 'subject first', 'الْفَرِيقُ لَعِبَ بِمَهَارَةٍ.'] },
        { cells: ['Contrast two topics', 'subject first', 'عَلِيٌّ دَرَسَ، أَمَّا أَخُوهُ فَلَعِبَ.'] },
        { cells: ['Tell a sequence', 'often verb first', 'وَصَلَ الطُّلَّابُ، ثُمَّ بَدَأَ الدَّرْسُ.'] },
        { cells: ['Answer “What did they do?”', 'subject first', 'الطُّلَّابُ أَكْمَلُوا الْمَشْرُوعَ.'] },
      ],
      foot: 'Website: variety is not random. Do not swap VSO and SVO just to look advanced — change the order when it improves focus, contrast or flow.',
      notes: 'PART 1 (2 min) — website “Choose the order for a reason”. Stretch: ammā … fa- = “as for …”.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · the sentence-building ladder (website table)', title: 'One secure step at a time', ar: 'سُلَّمُ بِنَاءِ الْجُمْلَةِ', ltr: true,
      cols: [{ label: 'Step', w: 1.9 }, { label: 'Sentence', w: 8.3, size: 20 }, { label: 'Adds', w: 2.13 }],
      rows: [
        { core: true, cells: ['1 · core', 'كَتَبَ الطَّالِبُ الرِّسَالَةَ.', 'V + S + O'] },
        { core: true, cells: ['2 · time', 'كَتَبَ الطَّالِبُ الرِّسَالَةَ أَمْسِ.', 'when?'] },
        { core: true, cells: ['3 · place', 'كَتَبَ الطَّالِبُ الرِّسَالَةَ أَمْسِ فِي الْمَكْتَبَةِ.', 'where?'] },
        { cells: ['4 · manner', 'كَتَبَ الطَّالِبُ الرِّسَالَةَ أَمْسِ فِي الْمَكْتَبَةِ بِعِنَايَةٍ.', 'how?'] },
        { cells: ['5 · reason', 'كَتَبَ الطَّالِبُ الرِّسَالَةَ لِأَنَّهُ أَرَادَ الِاعْتِذَارَ.', 'why?'] },
        { cells: ['6 · link', 'ثُمَّ أَرْسَلَهَا إِلَى صَدِيقِهِ.', 'next event'] },
      ],
      foot: 'Website object control: in arsalahā the attached -hā refers back to ar-risāla (feminine). After every new step, re-check the core: is the verb still right for its subject?',
      notes: 'PART 2 (3 min) — website “The sentence-building ladder”. Row 5 is abridged on the website (“…”); completed here. He wrote the letter because he wanted to apologise; then he sent it to his friend.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 3 · transform across past, present and future (website table) · Develop', title: 'Change the time — rebuild the verb', ar: 'غَيِّرِ الزَّمَنَ', ltr: true,
      cols: [{ label: 'Time', w: 2.0 }, { label: 'Verb first', w: 5.1, size: 20 }, { label: 'Subject first', w: 5.23, size: 20 }],
      rows: [
        { core: true, cells: ['Past', 'زَارَ الطُّلَّابُ الْمَتْحَفَ أَمْسِ.', 'الطُّلَّابُ زَارُوا الْمَتْحَفَ أَمْسِ.'] },
        { core: true, cells: ['Present / habit', 'يَزُورُ الطُّلَّابُ الْمَتْحَفَ كُلَّ سَنَةٍ.', 'الطُّلَّابُ يَزُورُونَ الْمَتْحَفَ كُلَّ سَنَةٍ.'] },
        { cells: ['Future', 'سَيَزُورُ الطُّلَّابُ الْمَتْحَفَ غَدًا.', 'الطُّلَّابُ سَيَزُورُونَ الْمَتْحَفَ غَدًا.'] },
        { cells: ['Future negative', 'لَنْ يَزُورَ الطُّلَّابُ الْمَتْحَفَ غَدًا.', 'الطُّلَّابُ لَنْ يَزُورُوا الْمَتْحَفَ غَدًا.'] },
      ],
      foot: 'Website editing question: did you change only the time word, or did you also rebuild the verb for its order and subject? Column 2 stays singular; column 3 shows full agreement.',
      notes: 'PART 3 (2 min) — website “Transform across past, present and future”. Note lan + -a (yazūra) and lan + -ū (yazūrū — the nūn drops).',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 4 · questions and negation keep the roles (website table)', title: 'Add hal, mā, lam, lā, lan — keep the rule', ar: 'الِاسْتِفْهَامُ وَالنَّفْيُ', ltr: true,
      cols: [{ label: 'Function', w: 2.5 }, { label: 'Verb first', w: 4.9, size: 20 }, { label: 'Subject first', w: 4.93, size: 20 }],
      rows: [
        { core: true, cells: ['Yes / no question', 'هَلْ كَتَبَ الطُّلَّابُ التَّقْرِيرَ؟', 'هَلِ الطُّلَّابُ كَتَبُوا التَّقْرِيرَ؟'] },
        { cells: ['Past negative (mā)', 'مَا كَتَبَ الطُّلَّابُ التَّقْرِيرَ.', 'الطُّلَّابُ مَا كَتَبُوا التَّقْرِيرَ.'] },
        { core: true, cells: ['Past negative (lam)', 'لَمْ يَكْتُبِ الطُّلَّابُ التَّقْرِيرَ.', 'الطُّلَّابُ لَمْ يَكْتُبُوا التَّقْرِيرَ.'] },
        { cells: ['Present negative (lā)', 'لَا يَكْتُبُ الطُّلَّابُ الْآنَ.', 'الطُّلَّابُ لَا يَكْتُبُونَ الْآنَ.'] },
        { cells: ['Future negative (lan)', 'لَنْ يَكْتُبَ الطُّلَّابُ غَدًا.', 'الطُّلَّابُ لَنْ يَكْتُبُوا غَدًا.'] },
      ],
      foot: 'Website warning: do not mix systems. Lam needs the present (jussive) form with a past meaning — lam yaktub = he did not write. Lam kataba is wrong.',
      notes: 'PART 4 (3 min) — website “Questions and negation preserve the core roles”. Core: rows 1 and 3. Helping kasra: lam yaktubi ṭ-ṭullābu.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 5 · the four-pass editing routine (website table) · Stretch', title: 'Edit one thing at a time', ar: 'الْمُرَاجَعَةُ فِي أَرْبَعِ مَرَاحِلَ', ltr: true,
      cols: [{ label: 'Pass', w: 2.2 }, { label: 'Ask', w: 6.0 }, { label: 'Do', w: 4.13 }],
      rows: [
        { core: true, cells: ['1 · Roles', 'What is the verb? Who is the subject? Is there an object?', 'mark V, S and O'] },
        { core: true, cells: ['2 · Order', 'Does the subject come before or after the verb?', 'choose full or singular agreement'] },
        { cells: ['3 · Verb form', 'Do person, gender, number, tense and mood fit?', 'repair prefix, suffix, end vowel'] },
        { cells: ['4 · Expansion', 'Are pronouns, prepositions, time words and links clear?', 'check reference and flow'] },
      ],
      foot: 'Website tip: read backwards for agreement — start at the end of the sentence, find the subject, then go back to the verb. This stops you reading only for meaning.',
      notes: 'PART 5 (2 min) — website “A four-pass editing routine”. Students copy this table into their books: it is the checklist for every writing task.',
    },
  ],
  quick: [
    W(/Order Choice/, 0, { prompt: 'You have already mentioned the girls. Say what they did.', feedback: 'Known girls as topic → subject first, full agreement.' }),
    W(/Order Choice/, 2, { feedback: 'Subject-first topics make the contrast clear.' }),
    W(/Sentence Ladder/, 2, { feedback: 'The core and the details are all clear.' }),
    W(/Editor Check/, 2, { prompt: 'Repair: لَمْ ذَهَبَ الطُّلَّابُ.', feedback: 'Lam + present (jussive) form.' }),
  ],
  quickNote: 'website Order Choice, Sentence Ladder and Editor checks.',
  ido: {
    title: 'Watch me edit a draft in four passes',
    steps: [
      { head: '1 · Roles', ar: 'الطُّلَّابُ', think: 'Subject: boys, plural.' },
      { head: '2 · Order', ar: 'فِعْلٌ ثُمَّ فَاعِلٌ', think: 'Verb first → singular.' },
      { head: '3 · Verb form', ar: 'وَصَلَ', think: 'Repair: waṣala.' },
      { head: '4 · Expansion', ar: 'الدَّرْسَ', think: 'Object: -a.' },
    ],
    legend: ['k', 'w'], legendLabels: { k: 'VERB', w: 'SUBJECT' },
    model: '{k|بَدَأَ} {w|الْيَوْمُ} مُبَكِّرًا، ثُمَّ {k|وَصَلَ} {w|الطُّلَّابُ} إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ الثَّامِنَةِ. {w|الطَّالِبَاتُ} {k|جَهَّزْنَ} الْقَاعَةَ، أَمَّا الْمُعَلِّمُونَ فَرَاجَعُوا الْخُطَّةَ. لَمْ {k|تَصِلِ} {w|الْحَافِلَاتُ} فِي الْمَوْعِدِ، وَلَكِنَّهَا سَتَصِلُ قَرِيبًا.',
    modelEn: 'The day began early, then the students arrived at school at eight o’clock. The girls prepared the hall; as for the teachers, they reviewed the plan. The buses did not arrive on time, but they will arrive soon.',
    notes: 'Website clinic draft first: waṣalū ṭ-ṭullābu thumma badaʾū d-darsu → after four passes: waṣala ṭ-ṭullābu, thumma badaʾū d-darsa. Then the website final model: point out each order choice and why.',
  },
  models: [
    { ar: 'فَازَ الْفَرِيقُ بِالْمُبَارَاةِ.', en: 'The team won the match.', tip: 'New event: verb first.' },
    { ar: 'عَلِيٌّ دَرَسَ، أَمَّا أَخُوهُ فَلَعِبَ.', en: 'Ali studied; as for his brother, he played.', tip: 'Contrast: subject first.' },
    { ar: 'هَلْ كَتَبَ الطُّلَّابُ التَّقْرِيرَ؟', en: 'Did the students write the report?', tip: 'hal + VSO.' },
    { ar: 'لَنْ يَزُورَ الطُّلَّابُ الْمَتْحَفَ غَدًا.', en: 'The students will not visit the museum tomorrow.', tip: 'lan + -a.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · integrated clinic (website) · use the four passes', title: 'Find the problem, name the pass', ar: 'رَاجِعْ وَصَحِّحْ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Draft', w: 4.6, size: 20 }, { label: 'Improved', w: 4.6, size: 20 }, { label: 'Reason', w: 3.13 }],
      rows: [
        { core: true, cells: ['وَصَلُوا الطُّلَّابُ ثُمَّ بَدَأُوا الدَّرْسُ.', 'وَصَلَ الطُّلَّابُ، ثُمَّ بَدَأُوا الدَّرْسَ.', 'VSO singular; object -a'] },
        { core: true, cells: ['الطَّالِبَاتُ سَيَقْرَأُ الْمَقَالَةَ.', 'الطَّالِبَاتُ سَيَقْرَأْنَ الْمَقَالَةَ.', 'SVO: full agreement'] },
        { cells: ['لَمْ كَتَبَ الْوَلَدَانِ الْوَاجِبَ.', 'لَمْ يَكْتُبِ الْوَلَدَانِ الْوَاجِبَ.', 'lam + present form'] },
        { cells: ['الْحَافِلَاتُ وَصَلْنَ وَهُمْ سَرِيعُونَ.', 'الْحَافِلَاتُ وَصَلَتْ وَهِيَ سَرِيعَةٌ.', 'things: “she”'] },
        { cells: ['قَرَأَتْ مَرْيَمُ الرِّسَالَةَ ثُمَّ أَرْسَلَهُ.', 'قَرَأَتْ مَرْيَمُ الرِّسَالَةَ ثُمَّ أَرْسَلَتْهَا.', 'clear pronoun'] },
      ],
      foot: 'Website: use the four-pass routine and state the reason for each repair. Row 1: after waṣala ṭ-ṭullābu, the second verb carries its own plural subject — badaʾū is correct.',
      notes: 'WE DO (3 min) — cover column 2. Students say which pass catches each error (1 roles · 2 order · 3 verb form · 4 expansion). Row 5 from the website Editor Check.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · ask it, deny it (website questions and negation)', title: 'Statement → question → negative', ar: 'اِسْأَلْ وَانْفِ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Statement', w: 3.9, size: 20 }, { label: 'Question', w: 4.2, size: 20 }, { label: 'Negative', w: 4.23, size: 20 }],
      rows: [
        { core: true, cells: ['كَتَبَ الطُّلَّابُ التَّقْرِيرَ.', 'هَلْ كَتَبَ الطُّلَّابُ التَّقْرِيرَ؟', 'لَمْ يَكْتُبِ الطُّلَّابُ التَّقْرِيرَ.'] },
        { core: true, cells: ['وَصَلَ الْقِطَارُ.', 'هَلْ وَصَلَ الْقِطَارُ؟', 'لَمْ يَصِلِ الْقِطَارُ.'] },
        { cells: ['فَتَحَتِ الْبَنَاتُ الْبَابَ.', 'هَلْ فَتَحَتِ الْبَنَاتُ الْبَابَ؟', 'لَمْ تَفْتَحِ الْبَنَاتُ الْبَابَ.'] },
        { cells: ['يَدْرُسُ الطُّلَّابُ الْآنَ.', 'هَلْ يَدْرُسُ الطُّلَّابُ الْآنَ؟', 'لَا يَدْرُسُ الطُّلَّابُ الْآنَ.'] },
        { cells: ['سَيَزُورُ الطُّلَّابُ الْمَتْحَفَ.', 'هَلْ سَيَزُورُ الطُّلَّابُ الْمَتْحَفَ؟', 'لَنْ يَزُورَ الطُّلَّابُ الْمَتْحَفَ.'] },
        { cells: ['الطَّالِبَاتُ كَتَبْنَ.', 'هَلِ الطَّالِبَاتُ كَتَبْنَ؟', 'الطَّالِبَاتُ لَمْ يَكْتُبْنَ.'] },
      ],
      foot: 'The particle goes in front — the verb’s agreement does not change. Past: lam + present form · present: lā · future: lan + -a.',
      notes: 'WE DO (3 min) — cover columns 2–3. Rows 1 and 2 from the website game. Row 6 (Stretch): subject-first negative keeps full agreement — lam yaktubna.',
    },
  ],
  mistakes: [
    { wrong: 'الطَّالِبَاتُ كَتَبَتِ التَّقْرِيرَ.', right: 'الطَّالِبَاتُ كَتَبْنَ التَّقْرِيرَ.', why: 'Girls first → full agreement (website game).' },
    { wrong: 'لَمْ كَتَبَ الطَّالِبُ.', right: 'لَمْ يَكْتُبِ الطَّالِبُ.', why: 'Lam takes the present (jussive) form (website game).' },
    { wrong: 'الْكُتُبُ وَصَلْنَ.', right: 'الْكُتُبُ وَصَلَتْ.', why: 'Books are things → the “she” verb (website game).' },
  ],
  hints: ['Subject first: which agreement?', 'Which verb form follows lam?', 'Are books people?'],
  practice: [
    W(/Editor Check/, 0, { prompt: 'Repair: كَتَبُوا الطُّلَّابُ الْإِجَابَاتِ.', feedback: 'Verb first → singular kataba.' }),
    W(/Editor Check/, 1, { prompt: 'Repair: الطَّالِبَاتُ قَدَّمَتِ الْعَرْضَ.', feedback: 'Girls first → qaddamna.' }),
    W(/Editor Check/, 3, { prompt: 'Repair the pronoun: قَرَأَتْ مَرْيَمُ الرِّسَالَةَ ثُمَّ أَرْسَلَهُ.', feedback: 'Maryam sent it (the letter): arsalathā.' }),
    W(/Sentence Ladder/, 0, { feedback: 'Li-anna introduces a reason.' }),
  ],
  practiceLabel: 'website Editor and Sentence Ladder checks',
  read: {
    title: 'The charity sale', label: 'website reading audit (teacher-written report)',
    text: 'فِي يَوْمِ الْأَحَدِ نَظَّمَ مَجْلِسُ الطُّلَّابِ سُوقًا خَيْرِيًّا. وَصَلَ الطُّلَّابُ مُبَكِّرًا، وَرَتَّبُوا الطَّاوِلَاتِ فِي السَّاحَةِ. الطَّالِبَاتُ صَنَعْنَ الْحَلْوَى فِي الْبَيْتِ، ثُمَّ بِعْنَهَا بِسُرْعَةٍ. أَمَّا الْأَوْلَادُ فَبَاعُوا الْكُتُبَ الْقَدِيمَةَ. لَمْ يَحْضُرِ الْمُدِيرُ فِي الصَّبَاحِ لِأَنَّهُ كَانَ فِي اجْتِمَاعٍ، وَلَكِنَّهُ زَارَ السُّوقَ بَعْدَ الظُّهْرِ وَاشْتَرَى كَعْكَةً. جَمَعَ الْمَجْلِسُ تَبَرُّعَاتٍ كَثِيرَةً، وَسَيُرْسِلُهَا إِلَى مُسْتَشْفَى الْأَطْفَالِ.',
    glossary: [['نَظَّمَ', 'organised'], ['سُوقًا خَيْرِيًّا', 'a charity sale'], ['رَتَّبُوا', 'they arranged'], ['صَنَعْنَ', 'they (f.) made'], ['تَبَرُّعَاتٍ', 'donations']],
    task: 'Website reading audit: underline every verb, box each named subject and draw a line from each attached object pronoun to its noun.',
    questions: [
      q('What did the girls make?', ['sweets', 'tables', 'old books'], 'Aṭ-ṭālibātu ṣanaʿna l-ḥalwā.'),
      q('Why is rattabū plural after waṣala ṭ-ṭullābu?', ['its subject is inside the verb', 'it is a mistake', 'the tables are plural'], 'The second verb carries its own plural subject (website clinic).'),
      q('What does -hā in sa-yursiluhā refer to?', ['the donations', 'the hospital', 'the cake'], 'Tabarruʿāt: non-human plural → -hā.'),
      q('Why did the head teacher not come in the morning?', ['he was in a meeting', 'he was ill', 'he was selling books'], 'Li-annahu kāna fī jtimāʿ.'),
    ],
    qNote: 'Teacher-written report for the website reading audit; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: tell it twice', source: 'website speaking transformation',
    prompts: [
      { route: 'core', ar: 'مَاذَا فَعَلَ صَفُّكَ أَمْسِ؟' },
      { route: 'develop', ar: 'قُلِ الْخَبَرَ مَرَّتَيْنِ: الْفِعْلُ أَوَّلًا، ثُمَّ الْفَاعِلُ أَوَّلًا.' },
      { route: 'stretch', ar: 'مَاذَا حَدَثَ، وَمَاذَا لَمْ يَحْدُثْ، وَمَاذَا سَيَحْدُثُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'زَارَ صَفُّنَا ______ ، وَشَاهَدْنَا ______ .' },
      { route: 'develop', ar: 'لَعِبَ الْأَوْلَادُ ______ . ‖ الْأَوْلَادُ لَعِبُوا ______ .' },
      { route: 'stretch', ar: 'لَمْ ______ ، وَلَكِنَّنَا سَوْفَ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'كَيْفَ كَانَتِ الرِّحْلَةُ؟', en: 'How was the trip?' },
      { who: 'B', ar: 'رَائِعَةً! زَارَ الطُّلَّابُ الْقَلْعَةَ، وَالْبَنَاتُ رَسَمْنَ صُوَرًا جَمِيلَةً. لَمْ نَزُرِ الْمَتْحَفَ لِأَنَّهُ كَانَ مُغْلَقًا، وَلَكِنَّنَا سَنَزُورُهُ فِي الشَّهْرِ الْقَادِمِ.', en: 'Wonderful! The students visited the castle, and the girls drew lovely pictures. We didn’t visit the museum because it was closed, but we will visit it next month.' },
    ],
    notes: 'Website: say one event first in VSO, then retell it with the subject first. Explain aloud how the verb changed.',
  },
  write: {
    siteTask: 'Write 120–140 Arabic words about a memorable day, school event, journey or community activity. Use deliberate sentence-order variety and accurate agreement.',
    core: { amount: '6 sentences', task: 'A school event: four verb-first and two subject-first sentences.', how: 'waṣala ṭ-ṭullābu · aṭ-ṭālibātu jahhazna.' },
    develop: { amount: '9 sentences', task: 'Add a question, two negatives and the future.', how: 'hal · lam yaḥḍur · lan yazūra.' },
    stretch: { amount: '120–140 words', task: 'Website final performance with the full checklist.', how: 'Finish with the four-pass edit.' },
  },
  frames: {
    core: [
      { en: 'The students arrived at … o’clock', ar: 'وَصَلَ الطُّلَّابُ فِي السَّاعَةِ ______ .' },
      { en: 'The girls prepared …', ar: 'جَهَّزَتِ الطَّالِبَاتُ ______ .' },
      { en: 'The boys played …', ar: 'الْأَوْلَادُ لَعِبُوا ______ .' },
      { en: 'The buses arrived …', ar: 'وَصَلَتِ الْحَافِلَاتُ ______ .' },
    ],
    develop: [
      { en: 'Did … visit …?', ar: 'هَلْ زَارَ ______ ______ ؟' },
      { en: 'The … did not attend', ar: 'لَمْ يَحْضُرِ ______ .' },
      { en: 'Ali …; as for his brother, he …', ar: 'عَلِيٌّ ______ ، أَمَّا أَخُوهُ فَقَدْ ______ .' },
      { en: 'Next week the students will not …', ar: 'فِي الْأُسْبُوعِ الْقَادِمِ لَنْ ______ الطُّلَّابُ ______ .' },
    ],
    bank: ['هَلْ', 'مَا', 'لَمْ', 'لَا', 'لَنْ', 'أَمَّا', 'ثُمَّ', 'لِأَنَّ', 'وَلَكِنَّ', 'أَمْسِ', 'غَدًا', 'بِعِنَايَةٍ', 'فِي الْمَوْعِدِ'],
  },
  stretchTask: {
    task: 'Website final verbal-sentence performance (120–140 words): a memorable day, school event, journey or community activity.',
    checklist: ['Six verb-first and four subject-first sentences.', 'Male and female human plurals, one dual, one non-human plural.', 'Past, present and future.', 'One question and two negatives.', 'Four-pass edit completed before you hand in.'],
    phrases: [['بَدَأَ الْيَوْمُ', 'the day began'], ['فِي الْمَوْعِدِ', 'on time'], ['أَمَّا … فَـ', 'as for …'], ['لِأَنَّ', 'because'], ['وَلَكِنَّ', 'but'], ['فِي النِّهَايَةِ', 'in the end']],
  },
  model: {
    text: 'كَانَ يَوْمُ الْعُلُومِ فِي مَدْرَسَتِنَا يَوْمًا لَا يُنْسَى. بَدَأَ الْيَوْمُ مُبَكِّرًا، وَوَصَلَ الطُّلَّابُ إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ الثَّامِنَةِ. الطَّالِبَاتُ جَهَّزْنَ الْقَاعَةَ الْكُبْرَى، أَمَّا الْمُعَلِّمُونَ فَرَاجَعُوا الْخُطَّةَ. عَرَضَ الطُّلَّابُ تَجَارِبَهُمْ عَلَى الطَّاوِلَاتِ، وَشَرَحَتِ الطَّالِبَتَانِ الْفَائِزَتَانِ مَشْرُوعَهُمَا عَنِ الطَّاقَةِ الشَّمْسِيَّةِ. سَأَلَنِي ضَيْفٌ: هَلْ صَنَعْتُمُ الرُّوبُوتَ بِأَنْفُسِكُمْ؟ فَقُلْتُ: نَعَمْ، صَنَعْنَاهُ فِي شَهْرَيْنِ. لَمْ تَصِلِ الْحَافِلَاتُ فِي الْمَوْعِدِ، فَلَمْ يَحْضُرْ بَعْضُ الْآبَاءِ فِي الصَّبَاحِ، وَلَكِنَّهُمْ جَاؤُوا بَعْدَ الظُّهْرِ. فِي النِّهَايَةِ وَزَّعَ الْمُدِيرُ الْجَوَائِزَ، وَصَفَّقَ الْجَمِيعُ طَوِيلًا. فِي السَّنَةِ الْقَادِمَةِ سَتُشَارِكُ مَدْرَسَتُنَا فِي مُسَابَقَةٍ وَطَنِيَّةٍ، وَلَنْ نَنْسَى هَذَا الْيَوْمَ أَبَدًا.',
    en: 'Science Day at our school was a day to remember. The day began early, and the students arrived at school at eight o’clock. The girls prepared the main hall; as for the teachers, they reviewed the plan. The students displayed their experiments on the tables, and the two winning girls explained their project on solar energy. A guest asked me: “Did you make the robot yourselves?” I said: “Yes, we made it in two months.” The buses did not arrive on time, so some parents did not come in the morning, but they came in the afternoon. In the end the head teacher handed out the prizes, and everyone applauded for a long time. Next year our school will take part in a national competition, and we will never forget this day.',
    find: ['verb first + plural subject', 'subject first + full agreement', 'question with hal', 'negative with lam or lan'],
    source: 'teacher model built on the website model lines',
  },
  selfCheck: [
    { route: 'core', text: 'Every verb has the right subject (pass 1).' },
    { route: 'core', text: 'Verb first → singular; subject first → full agreement (pass 2).' },
    { route: 'develop', text: 'After lam I used the present form: lam yaktub.' },
    { route: 'develop', text: 'My time words and verb forms match.' },
    { route: 'stretch', text: 'Every pronoun clearly refers to one noun (pass 4).' },
  ],
  exit: [
    W(/Final Mastery/, 1, { feedback: 'Girls first → fuzna.' }),
    W(/Final Mastery/, 3, { prompt: 'Transform to verb first: الْمُعَلِّمَتَانِ شَرَحَتَا الدَّرْسَ.', feedback: 'Singular feminine before the dual: sharaḥat.' }),
    W(/Final Mastery/, 5, { feedback: 'Lam + present form, past meaning.' }),
  ],
  mastery: false,
  prep: {
    words: [['الْجُمْلَةُ الِاسْمِيَّةُ', 'nominal sentence (no verb)', '—'], ['الْمُبْتَدَأُ', 'the topic (comes first)', '—'], ['الْخَبَرُ', 'the comment (information about it)', '—'], ['الْبَيْتُ كَبِيرٌ', 'the house is big', '—'], ['أَنَا طَالِبٌ', 'I am a student', '—']],
    questionEn: 'Arabic has no word for “is” in the present tense. How would you say “The weather is hot”?',
    questionAr: 'الطَّقْسُ ______ .',
    homework: {
      core: 'Build one sentence up the six-step ladder.',
      develop: 'Write five statements, then turn each into a question and a negative.',
      stretch: 'Website final performance (120–140 words), edited in four passes.',
    },
    wordsSource: 'The five words prepare GM-NVS-01 (website: simple non-verbal sentences).',
  },
  remember: 'Remember: choose the order for a reason (new event → verb first; known topic or contrast → subject first) · build one step at a time · hal, mā, lam, lā, lan keep the agreement rule · lam + present form · edit in four passes: roles → order → verb form → expansion.',
});

module.exports = { meta, slides };
