'use strict';
/* GM-CP-04 · Core Conjunctions and Logical Links — website: Mastery & Revision › Grammar › Conjunctions and Prepositions › Lesson 4
 * (connector logic map: wa addition, aw choice, thumma ordered later step, fa- immediate next step / result, lākin contrast, li-anna
 * reason, li-dhālika / li-dhā result; wa-lākinna + pronoun or noun (inna family) as Stretch; li-anna needs a subject — li-annanī,
 * li-annahu; range is not random variety; clinic). Quizzes are the website’s (Entry, Logic, Sequence, Reason–Result, Final Mastery) plus
 * the website game; one Sequence item with the misvowelled al-mutḥaf and Final items with “only” labels are skipped. Sorter, I-do,
 * frames, reading and model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__08-conjunctions-prepositions__grammar-mastery-04-core-conjunctions';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-CP-04', fileTitle: 'Core_Conjunctions', title: 'Core Conjunctions and Logical Links', arabic: 'حُرُوفُ الْعَطْفِ وَالرَّبْطِ',
  focus: 'Stop joining everything with wa. Choose the link that shows the real relationship: aw (or), thumma (then, later), fa- (so / straight after), lākin (but), li-anna (because), li-dhālika (so, therefore).',
  icon: 'FaLink',
});

const slides = G.gmLesson({
  code: 'GM-CP-04', site: KEY,
  support: `• Core: وَ · أَوْ · ثُمَّ · لَكِنْ · لِأَنَّ with short sentences about routines and opinions. Develop: ثُمَّ vs فَـ, and reason vs result (لِأَنَّ / لِذَلِكَ). Stretch: وَلَكِنَّهُ · وَلَكِنَّهَا · لِأَنَّنِي as chunks (inna family), and a 90–110-word comparison.
• Website warning: range is not random variety — replacing every wa with a formal word can make the logic worse. Accuracy first.
• Li-anna needs a subject: لِأَنَّنِي · لِأَنَّهُ · لِأَنَّ الطَّقْسَ … — never li-anna + a bare verb.`,
  teach: 'Logic map; thumma vs fa-; contrast; reason vs result.',
  wedo: 'Name the relationship; sort reason / result; repair.',
  next: { nextCode: 'GM-CP-05', nextTitle: 'Clause Linkers and Paragraph Cohesion', nextAr: 'رَوَابِطُ الْجُمَلِ وَتَمَاسُكُ الْفِقْرَةِ' },
  doNow: {
    pick: [0, 1, 2, 3, 4],
    fb: { 0: 'Wa adds or coordinates.', 1: 'Aw means or.', 2: 'Thumma marks an ordered later step.', 3: 'Lākin turns to an opposing point.', 4: 'Li-anna introduces the cause.' },
    keyIdea: { text: 'Name the relationship first — add, choose, sequence, contrast, reason, result — then choose the link.', ar: '{k|لِأَنَّ} : لِمَاذَا؟ ‖ {e|لِذَلِكَ} : مَاذَا حَدَثَ؟' },
    retrieves: 'The website Entry Check (questions 1–5) — the GM-CP-03 prep words wa, thumma, fa-, aw, lākinna.',
  },
  objectives: ['Choose a connector by its logical job.', 'Tell thumma from fa-.', 'Show contrast with lākin.', 'Link cause and result with li-anna and li-dhālika.'],
  routes: {
    core: ['I join ideas with wa, aw, thumma and lākin.', 'I give a reason with li-anna.'],
    develop: ['I use fa- for an immediate result.', 'I use li-dhālika for a consequence.'],
    stretch: ['I use wa-lākinnahu and li-annanī as chunks.', 'I write a linked 90–110-word comparison.'],
  },
  terms: {
    items: [
      { ar: 'حَرْفُ الْعَطْفِ', en: 'conjunction (linking word)', note: 'وَ · أَوْ · ثُمَّ' },
      { ar: 'الْإِضَافَةُ', en: 'addition', note: 'وَ' },
      { ar: 'التَّرْتِيبُ', en: 'sequence', note: 'ثُمَّ · فَـ' },
      { ar: 'الِاسْتِدْرَاكُ', en: 'contrast', note: 'لَكِنْ · وَلَكِنَّ' },
      { ar: 'السَّبَبُ', en: 'reason', note: 'لِأَنَّ' },
      { ar: 'النَّتِيجَةُ', en: 'result', note: 'لِذَلِكَ · لِذَا' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 1 · the connector logic map (website table)', title: 'One job per connector', ar: 'خَرِيطَةُ الرَّوَابِطِ', ltr: true,
      cols: [{ label: 'Function', w: 2.8 }, { label: 'Connector', w: 2.4, size: 26 }, { label: 'Model (website)', w: 7.13, size: 22 }],
      rows: [
        { core: true, cells: ['addition', 'وَ', 'أُحِبُّ الْقِرَاءَةَ وَالْكِتَابَةَ.'] },
        { core: true, cells: ['alternative', 'أَوْ', 'هَلْ تُفَضِّلُ الْقِطَارَ أَوِ الْحَافِلَةَ؟'] },
        { core: true, cells: ['ordered next step', 'ثُمَّ', 'تَنَاوَلْتُ الْفَطُورَ، ثُمَّ خَرَجْتُ.'] },
        { cells: ['immediate step / result', 'فَـ', 'وَصَلَتِ الْحَافِلَةُ فَرَكِبْتُهَا.'] },
        { core: true, cells: ['contrast', 'لَكِنْ', 'الطَّقْسُ بَارِدٌ، لَكِنْ سَأَخْرُجُ.'] },
        { core: true, cells: ['reason', 'لِأَنَّ', 'أَدْرُسُ الْعَرَبِيَّةَ لِأَنَّهَا مُهِمَّةٌ.'] },
        { cells: ['result', 'لِذَلِكَ · لِذَا', 'كَانَ الطَّرِيقُ مُغْلَقًا، لِذَلِكَ تَأَخَّرْنَا.'] },
      ],
      foot: 'Website: a varied paragraph is not one with many different linkers — it is one where each linker expresses the intended relationship.',
      notes: 'PART 1 (4 min) — website “The connector logic map”. Hand signals: + (wa), ? (aw), → (thumma), ⚡ (fa-), ✋ (lākin), ← why (li-anna), → so (li-dhālika).',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 2 · sequence: thumma vs fa- (website)', title: 'Later — or straight after?', ar: 'ثُمَّ أَمْ فَـ؟', ltr: true,
      cols: [{ label: 'Link', w: 2.4, size: 26 }, { label: 'Model (website)', w: 6.0, size: 22 }, { label: 'Relationship', w: 3.93 }],
      rows: [
        { core: true, cells: ['ثُمَّ', 'غَسَلْتُ وَجْهِي، ثُمَّ تَنَاوَلْتُ الْفَطُورَ.', 'ordered later step'] },
        { core: true, cells: ['فَـ', 'دَقَّ الْجَرَسُ فَدَخَلَ الطُّلَّابُ.', 'immediate next action'] },
        { cells: ['فَـ', 'دَرَسْتُ بِجِدٍّ فَنَجَحْتُ.', 'result'] },
        { cells: ['sequence chain', 'أَوَّلًا خَطَّطْتُ، ثُمَّ كَتَبْتُ، وَأَخِيرًا رَاجَعْتُ.', 'first · then · finally'] },
      ],
      foot: 'Website: natural usage overlaps — for learners, use thumma for a clearly ordered later step and fa- when the next action or result follows closely. Fa- is written joined to the next word.',
      notes: 'PART 2 (3 min) — website “Sequence: thumma versus fa-”.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · contrast, reason and result (website) · Develop / Stretch', title: 'But · because · so', ar: 'الِاسْتِدْرَاكُ وَالسَّبَبُ وَالنَّتِيجَةُ', ltr: true,
      cols: [{ label: 'Link', w: 2.6, size: 24 }, { label: 'Model (website)', w: 6.4, size: 22 }, { label: 'Notice', w: 3.33 }],
      rows: [
        { core: true, cells: ['لَكِنْ', 'الْمَدْرَسَةُ بَعِيدَةٌ، لَكِنْ أُحِبُّهَا.', 'simple contrast'] },
        { cells: ['وَلَكِنَّهُ', 'الْفِلْمُ طَوِيلٌ، وَلَكِنَّهُ مُثِيرٌ.', 'inna family: + pronoun'] },
        { core: true, cells: ['لِأَنَّنِي', 'لَمْ أَذْهَبْ لِأَنَّنِي كُنْتُ مَرِيضًا.', 'reason: answers why'] },
        { cells: ['لِأَنَّهُ', 'أُحِبُّ التَّعَلُّمَ عَنْ بُعْدٍ لِأَنَّهُ مَرِنٌ.', 'li-anna + pronoun'] },
        { core: true, cells: ['لِذَلِكَ', 'كُنْتُ مَرِيضًا، لِذَلِكَ لَمْ أَذْهَبْ.', 'result: cause first'] },
        { cells: ['لِذَا', 'الطَّقْسُ جَمِيلٌ، لِذَا سَنَخْرُجُ.', 'result (shorter)'] },
      ],
      foot: 'Website: a reason answers “why?”; a result states what happened because of the earlier cause. After li-anna use a noun or attached pronoun as the subject (li-annanī, li-anna ṭ-ṭaqsa …).',
      notes: 'PART 3 (3 min) — website “Contrast with lākin and wa-lākinna” and “Reason and result”. Full inna behaviour returns in GM-NVS.',
    },
  ],
  quick: [
    W(/Logic Check/, 0, { prompt: 'The bus arrived; I boarded it immediately.', feedback: 'Fa- expresses the immediate next action.' }),
    W(/Logic Check/, 1, { prompt: 'I like sport, but I do not play every day.', feedback: 'The second idea contrasts with the first.' }),
    W(/Logic Check/, 2, { prompt: 'I stayed home because I was ill.', feedback: 'Li-annanī introduces the reason.' }),
    W(/Logic Check/, 3, { prompt: 'The train was cancelled, so we travelled by bus.', feedback: 'Li-dhālika introduces the consequence.' }),
  ],
  quickNote: 'website Logic checks.',
  ido: {
    title: 'Watch me upgrade a chain of wa',
    steps: [
      { head: 'Weak', ar: 'كَانَ الطَّقْسُ سَيِّئًا وَبَقِينَا', think: 'Is it really addition?' },
      { head: 'Result', ar: 'لِذَلِكَ', think: 'Bad weather → so we stayed.' },
      { head: 'Later step', ar: 'ثُمَّ', think: 'Then we watched a film.' },
      { head: 'Opinion + reason', ar: 'لِأَنَّنِي · لَكِنَّ', think: 'Why? But …' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'SEQUENCE / RESULT', e: 'REASON / CONTRAST' },
    model: 'كَانَ الطَّقْسُ سَيِّئًا، {k|لِذَلِكَ} بَقِينَا فِي الْبَيْتِ، {k|ثُمَّ} شَاهَدْنَا فِلْمًا. أُفَضِّلُ التَّعَلُّمَ فِي الْفَصْلِ {e|لِأَنَّنِي} أَتَفَاعَلُ مَعَ الْمُعَلِّمِ، {e|لَكِنَّ} التَّعَلُّمَ عَنْ بُعْدٍ أَكْثَرُ مُرُونَةً.',
    modelEn: 'The weather was bad, so we stayed at home, then we watched a film. I prefer learning in class because I interact with the teacher, but distance learning is more flexible.',
    notes: 'Website skills-workshop models (website prints marūna; corrected to murūna — flexibility).',
  },
  models: [
    { ar: 'هَلْ تُفَضِّلُ الْقِطَارَ أَوِ الْحَافِلَةَ؟', en: 'Do you prefer the train or the bus?', tip: 'aw (aw-i before al-).' },
    { ar: 'دَقَّ الْجَرَسُ فَدَخَلَ الطُّلَّابُ.', en: 'The bell rang and the students went in.', tip: 'fa- immediate.' },
    { ar: 'الْفِلْمُ طَوِيلٌ، وَلَكِنَّهُ مُثِيرٌ.', en: 'The film is long, but it is exciting.', tip: 'wa-lākinnahu.' },
    { ar: 'الطَّقْسُ جَمِيلٌ، لِذَا سَنَخْرُجُ.', en: 'The weather is nice, so we will go out.', tip: 'li-dhā.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · name the relationship, choose the link (website game)', title: 'Which link fits?', ar: 'اِخْتَرِ الرَّابِطَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Sentence', w: 6.0, size: 22 }, { label: 'Link', w: 2.4, size: 24 }, { label: 'Relationship', w: 3.93 }],
      rows: [
        { core: true, cells: ['أُحِبُّ الْقِرَاءَةَ … الْكِتَابَةَ.', 'وَ', 'addition'] },
        { core: true, cells: ['بِالْقِطَارِ … بِالْحَافِلَةِ؟', 'أَوْ', 'alternative'] },
        { core: true, cells: ['الطَّقْسُ بَارِدٌ، … سَأَخْرُجُ.', 'لَكِنْ', 'contrast'] },
        { cells: ['بَقِيتُ فِي الْبَيْتِ … نِي مَرِيضٌ.', 'لِأَنَّ', 'reason (li-annanī)'] },
        { cells: ['كَانَ الطَّرِيقُ مُغْلَقًا، … تَأَخَّرْنَا.', 'لِذَلِكَ', 'result'] },
        { cells: ['دَرَسْتُ بِجِدٍّ، … نَجَحْتُ.', 'لِذَلِكَ / فَـ', 'cause first, result second'] },
      ],
      foot: 'Website game: identify the logical relationship, then choose the connector that expresses it.',
      notes: 'WE DO (3 min) — website game items. Students show the hand signal before saying the Arabic.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · reason or result?', title: 'Why — or so what?', ar: 'سَبَبٌ أَمْ نَتِيجَةٌ؟',
      categories: ['Reason (li-anna)', 'Result (li-dhālika / fa-)'],
      items: [['لِأَنَّنِي مَرِيضٌ', 0], ['لِأَنَّهَا مُهِمَّةٌ', 0], ['لِأَنَّ الطَّقْسَ بَارِدٌ', 0], ['لِأَنَّهُ مَرِنٌ', 0], ['لِذَلِكَ تَأَخَّرْنَا', 1], ['لِذَا سَنَخْرُجُ', 1], ['فَنَجَحْتُ', 1], ['لِذَلِكَ بَقِينَا', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Students build one full sentence for each card.',
    },
  ],
  mistakes: [
    { wrong: 'أُحِبُّ السَّفَرَ وَهُوَ مُكْلِفٌ', right: 'أُحِبُّ السَّفَرَ، لَكِنَّهُ مُكْلِفٌ', why: 'Contrast, not simple addition (website clinic).' },
    { wrong: 'لَمْ أَذْهَبْ لِأَنَّ كُنْتُ مَرِيضًا', right: 'لَمْ أَذْهَبْ لِأَنَّنِي كُنْتُ مَرِيضًا', why: 'Build the li-anna clause with its subject (website clinic).' },
    { wrong: 'دَخَلْتُ ثُمَّ وَجَدْتُهُ أَمَامِي فَوْرًا', right: 'دَخَلْتُ فَوَجَدْتُهُ أَمَامِي فَوْرًا', why: 'An immediate next event suits fa- (website clinic).' },
  ],
  hints: ['Add or contrast?', 'Who is the subject after li-anna?', 'Later or immediately?'],
  practice: [
    W(/Sequence Check/, 0, { prompt: 'The alarm rang and I woke up immediately.', feedback: 'An immediate response suits fa-.' }),
    W(/Reason–Result/, 0, { prompt: 'Choose a reason for studying Arabic.', feedback: 'Li-annahā introduces the reason.' }),
    W(/Reason–Result/, 2, { prompt: 'Complete: “I did not go out ___ the weather was bad.”', feedback: 'The clause explains why.' }),
    W(/Final Mastery/, 7, { prompt: 'Correct form: “because I …”', feedback: 'Attach -nī to li-anna.' }),
  ],
  practiceLabel: 'website Sequence, Reason–Result and Final Mastery checks',
  read: {
    title: 'Online or in class?', label: 'website skills workshop (teacher-written opinion)',
    text: 'يُفَضِّلُ بَعْضُ الطُّلَّابِ التَّعَلُّمَ عَنْ بُعْدٍ، وَيُفَضِّلُ آخَرُونَ الْفَصْلَ. أَنَا أُحِبُّ الْفَصْلَ لِأَنَّنِي أَسْأَلُ الْمُعَلِّمَ مُبَاشَرَةً. لَكِنَّ أُخْتِي تَعِيشُ بَعِيدًا عَنِ الْجَامِعَةِ، لِذَلِكَ تَدْرُسُ عَبْرَ الْإِنْتَرْنِتِ. تَسْتَيْقِظُ مُتَأَخِّرَةً، ثُمَّ تَفْتَحُ حَاسُوبَهَا. أَمْسِ انْقَطَعَ الْإِنْتَرْنِتُ فَفَاتَهَا الدَّرْسُ! هَلْ تُفَضِّلُ أَنْتَ الْفَصْلَ أَمِ الشَّاشَةَ؟',
    glossary: [['عَنْ بُعْدٍ', 'remotely / online'], ['مُبَاشَرَةً', 'directly'], ['عَبْرَ', 'via'], ['فَفَاتَهَا', 'so she missed'], ['الشَّاشَةَ', 'the screen']],
    task: 'Website: annotate the function above each connector (addition, contrast, reason, result, sequence).',
    questions: [
      q('Why does the writer like class?', ['to ask the teacher directly', 'to wake up late', 'because it is online'], 'Li-annanī asʾalu l-muʿallim.'),
      q('Why does the sister study online?', ['she lives far from the university', 'she wakes up late', 'the internet is fast'], 'Li-dhālika shows the result of living far away.'),
      q('Which link shows an immediate result?', ['فَفَاتَهَا', 'ثُمَّ', 'لِأَنَّنِي'], 'Fa-: the connection dropped, so she missed it.'),
      q('Which word introduces contrast?', ['لَكِنَّ', 'لِذَلِكَ', 'وَ'], 'Lākinna + ukhtī.'),
    ],
    qNote: 'Teacher-written opinion text for the website skills workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: opinion, reason, contrast, result', source: 'website communication target',
    prompts: [
      { route: 'core', ar: 'هَلْ تُحِبُّ الرِّيَاضَةَ؟ لِمَاذَا؟' },
      { route: 'develop', ar: 'مَاذَا تَفْعَلُ بَعْدَ الْمَدْرَسَةِ؟ (أَوَّلًا … ثُمَّ …)' },
      { route: 'stretch', ar: 'أَيُّهُمَا أَفْضَلُ: السَّفَرُ بِالطَّائِرَةِ أَمْ بِالْقِطَارِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'نَعَمْ، أُحِبُّهَا لِأَنَّ ______ ، لَكِنْ ______ .' },
      { route: 'develop', ar: 'أَوَّلًا ______ ، ثُمَّ ______ ، وَأَخِيرًا ______ .' },
      { route: 'stretch', ar: 'أُفَضِّلُ ______ لِأَنَّهُ ______ ، وَلَكِنَّ ______ ، لِذَلِكَ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'أَيُّهُمَا تُفَضِّلِينَ: الْقِرَاءَةُ أَمِ الْأَفْلَامُ؟', en: 'Which do you prefer: reading or films? (to a girl)' },
      { who: 'B', ar: 'أُفَضِّلُ الْقِرَاءَةَ لِأَنَّهَا تُنَمِّي خَيَالِي، لَكِنَّ الْأَفْلَامَ مُمْتِعَةٌ أَيْضًا. لِذَلِكَ أَقْرَأُ فِي الْأُسْبُوعِ، ثُمَّ أُشَاهِدُ فِلْمًا يَوْمَ السَّبْتِ.', en: 'I prefer reading because it develops my imagination, but films are fun too. So I read during the week, then I watch a film on Saturday.' },
    ],
    notes: 'Website target: an opinion, a reason, a contrasting point and a consequence in one connected answer.',
  },
  write: {
    siteTask: 'Write 90–110 Arabic words comparing two ways of travelling, learning, shopping or spending free time.',
    core: { amount: '5 sentences', task: 'Two hobbies: which I like and why.', how: 'wa · aw · lākin · li-anna.' },
    develop: { amount: '7 sentences', task: 'Add a sequence and a result.', how: 'thumma or fa- · li-dhālika.' },
    stretch: { amount: '90–110 words', task: 'Website comparison with annotated connectors.', how: 'wa-lākinnahu · li-annanī.' },
  },
  frames: {
    core: [
      { en: 'I like … and …', ar: 'أُحِبُّ ______ وَ ______ .' },
      { en: 'Do you prefer … or …?', ar: 'هَلْ تُفَضِّلُ ______ أَوْ ______ ؟' },
      { en: 'I like … because …', ar: 'أُحِبُّ ______ لِأَنَّ ______ .' },
      { en: '… is good, but …', ar: '______ جَيِّدٌ، لَكِنْ ______ .' },
    ],
    develop: [
      { en: 'First … then …', ar: 'أَوَّلًا ______ ، ثُمَّ ______ .' },
      { en: '…, so we …', ar: '______ ، لِذَلِكَ ______ .' },
      { en: 'I worked hard, so I …', ar: 'اِجْتَهَدْتُ، لِذَا ______ .' },
      { en: 'It is …, but it is …', ar: 'هُوَ ______ ، وَلَكِنَّهُ ______ .' },
    ],
    bank: ['وَ', 'أَوْ', 'ثُمَّ', 'فَـ', 'لَكِنْ', 'وَلَكِنَّهُ', 'لِأَنَّ', 'لِأَنَّنِي', 'لِأَنَّهُ', 'لِذَلِكَ', 'لِذَا', 'أَوَّلًا', 'وَأَخِيرًا'],
  },
  stretchTask: {
    task: 'Website upgrade task: compare two ways of travelling, learning, shopping or spending free time (90–110 words).',
    checklist: ['wa and aw only where logical.', 'thumma or fa- for sequence.', 'lākin / wa-lākinnahu for contrast.', 'li-anna + subject for a reason.', 'li-dhālika or li-dhā for a consequence.'],
    phrases: [['مِنْ نَاحِيَةٍ', 'on the one hand'], ['مِنْ نَاحِيَةٍ أُخْرَى', 'on the other hand'], ['أُفَضِّلُ', 'I prefer'], ['أَكْثَرُ … مِنْ', 'more … than'], ['فِي رَأْيِي', 'in my opinion'], ['فِي النِّهَايَةِ', 'in the end']],
  },
  model: {
    text: 'يُسَافِرُ النَّاسُ بِالطَّائِرَةِ أَوْ بِالْقِطَارِ. فِي رَأْيِي الطَّائِرَةُ أَسْرَعُ، وَلَكِنَّهَا أَغْلَى. أُفَضِّلُ الْقِطَارَ لِأَنَّنِي أَرَى الطَّبِيعَةَ مِنَ النَّافِذَةِ، وَأَقْرَأُ بِهُدُوءٍ. فِي الصَّيْفِ الْمَاضِي سَافَرْنَا إِلَى إِسْكُتْلَنْدَا بِالْقِطَارِ؛ أَوَّلًا رَكِبْنَا مِنْ لَنْدَنَ، ثُمَّ غَيَّرْنَا الْقِطَارَ فِي يُورْك. تَأَخَّرَ الْقِطَارُ الثَّانِي سَاعَةً، لِذَلِكَ وَصَلْنَا لَيْلًا، فَنِمْنَا فَوْرًا! لَكِنْ كَانَتِ الرِّحْلَةُ جَمِيلَةً، لِذَا سَأُسَافِرُ بِالْقِطَارِ مَرَّةً أُخْرَى.',
    en: 'People travel by plane or by train. In my opinion the plane is faster, but it is more expensive. I prefer the train because I see nature from the window and read quietly. Last summer we travelled to Scotland by train; first we got on in London, then we changed trains in York. The second train was an hour late, so we arrived at night, and we slept straight away! But the journey was beautiful, so I will travel by train again.',
    find: ['addition / choice', 'sequence', 'contrast', 'reason / result'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'I used wa and aw only where they fit.' },
    { route: 'core', text: 'I gave a reason with li-anna.' },
    { route: 'develop', text: 'I chose thumma or fa- by timing.' },
    { route: 'develop', text: 'My result follows its cause (li-dhālika).' },
    { route: 'stretch', text: 'After li-anna / lākinna I used a subject (-nī, -hu, a noun).' },
  ],
  exit: [
    W(/Final Mastery/, 4, { prompt: 'Which is the contrast connector?', feedback: 'Lākin contrasts.' }),
    W(/Final Mastery/, 6, { prompt: 'Which is the result connector?', feedback: 'Li-dhālika introduces the consequence.' }),
    W(/Final Mastery/, 9, { prompt: 'Which sentence is well linked?', feedback: 'The cause and result are explicit.' }),
  ],
  mastery: false,
  prep: {
    words: [['عِنْدَمَا', 'when', 'عِنْدَمَا وَصَلْتُ'], ['قَبْلَ أَنْ', 'before (+ verb)', 'قَبْلَ أَنْ أَنَامَ'], ['بَعْدَ أَنْ', 'after (+ verb)', 'بَعْدَ أَنْ أَكَلْتُ'], ['بَيْنَمَا', 'while', '—'], ['أَوَّلًا · أَخِيرًا', 'first · finally', '—']],
    questionEn: 'Qabla d-dars = before the lesson. How do you think you say “before I sleep”?',
    questionAr: '______ أَنَامَ',
    homework: {
      core: 'Write six sentences, each with a different connector.',
      develop: 'Rewrite a chain of wa sentences with the correct links.',
      stretch: 'Website comparison (90–110 words).',
    },
    wordsSource: 'The five words prepare GM-CP-05 (website: clause linkers and paragraph cohesion).',
  },
  remember: 'Remember: wa add · aw or · thumma then (later) · fa- so / straight after · lākin but · li-anna because (+ subject) · li-dhālika therefore · choose by meaning, not variety.',
});

module.exports = { meta, slides };
