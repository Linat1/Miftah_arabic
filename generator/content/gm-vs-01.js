'use strict';
/* GM-VS-01 · Word Order and Sentence Roles — website: Mastery & Revision › Grammar › Verbal Sentences › Lesson 1 (the three roles:
 * verb, subject, direct object; verb-first VSO in past / present / future; subject-first SVO and topic focus — traditionally a nominal
 * sentence with a verbal predicate; the subject hidden inside the verb ending; expanding the core with time, place, manner and reason;
 * proofreading clinic). Website vowelling corrected in the clinic: الطَّالِبُ كَتَبَتْ الرِّسَالَةَ → كَتَبَتِ الرِّسَالَةَ (linking kasra).
 * Quizzes are the website’s (Entry, Role, VSO Builder, Focus, Expansion, Final Mastery) plus the website game; the Expansion item with a
 * “only” option is skipped. Colour code for this area: teal = verb, blue = subject (doer), pink = object. Sorter, I-do, transformation
 * table, reading, frames and the extended model are teacher-made on the website content. */
const G = require('./gm-common');
const { q } = G;

const KEY = 'grammar__10-verbal-sentences__grammar-mastery-01-word-order-roles';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-VS-01', fileTitle: 'Word_Order_Roles', title: 'Word Order and Sentence Roles', arabic: 'تَرْتِيبُ الْجُمْلَةِ الْفِعْلِيَّةِ وَأَرْكَانُهَا',
  focus: 'Every verbal sentence has a verb (what happened), a subject (who did it) and often an object (what received it): kataba ṭ-ṭālibu r-risālata. Verb first tells the event; subject first puts the person in focus.',
  icon: 'FaSignsPost',
});

const slides = G.gmLesson({
  code: 'GM-VS-01', site: KEY,
  support: `• Core: find the verb, the subject (-u) and the object (-a) in short verb-first sentences; know that some verbs need no object (nāma ṭ-ṭifl). Develop: turn VSO into SVO and back (singular subjects only today) and choose the order for the question asked. Stretch: hidden subjects (katabtu, katabnāhā), two objects (aʿṭā … kitāban) and fronted time phrases (amsi kataba …).
• Website warning: SVO is not a free swap — with dual and plural subjects the verb changes. Keep today’s transformations singular; Lessons 2–3 teach the agreement contrast.
• Colour code used all through the Verbal Sentences area: teal = verb, blue = subject, pink = object. Recycles GM-V past / present / future verbs and GM-PRO attached pronouns.`,
  teach: 'Three roles; verb first; subject first; hidden subject; expanding.',
  wedo: 'Label the roles; turn it round; sort VSO / SVO; repair.',
  next: { nextCode: 'GM-VS-02', nextTitle: 'Subject-First Full Agreement', nextAr: 'الْمُطَابَقَةُ الْكَامِلَةُ عِنْدَ تَقَدُّمِ الْفَاعِلِ' },
  doNow: {
    questions: [
      W(/Entry Check/, 0, { prompt: 'Which word is the verb: كَتَبَ الطَّالِبُ الرِّسَالَةَ', feedback: 'Kataba is the action — what happened.' }),
      W(/Entry Check/, 1, { prompt: 'Who performs the action: شَرِبَتْ مَرْيَمُ الْمَاءَ', feedback: 'Maryam did the drinking — she is the subject.' }),
      W(/Entry Check/, 2, { prompt: 'What receives the action: قَرَأَ أَحْمَدُ الْكِتَابَ', feedback: 'The book is what was read — the object.' }),
      W(/Entry Check/, 3, { feedback: 'This one starts with the verb: VSO.' }),
      W(/Entry Check/, 4, { feedback: 'The ending -tu already means “I”.' }),
    ],
    keyIdea: { text: 'Ask three questions: What happened? (verb) · Who did it? (subject, usually -u) · What received it? (object, usually -a).', ar: '{k|كَتَبَ} {w|الطَّالِبُ} {e|الرِّسَالَةَ}' },
    retrieves: 'The website Entry Check (questions 1–5) — GM-V past-tense verbs and the GM-PRO subject endings -tu, -nā.',
  },
  objectives: ['Find the verb, subject and object.', 'Build a formal verb-first sentence.', 'Put the subject first for focus.', 'Expand the core with time, place and manner.'],
  routes: {
    core: ['I find the verb, subject and object.', 'I build three VSO sentences.'],
    develop: ['I turn VSO into SVO and back.', 'I choose the order that fits the question.'],
    stretch: ['I use hidden subjects and fronted time phrases.', 'I write 70–90 words with both orders.'],
  },
  terms: {
    items: [
      { ar: 'الْجُمْلَةُ الْفِعْلِيَّةُ', en: 'verbal sentence', note: 'كَتَبَ الطَّالِبُ' },
      { ar: 'الْفِعْلُ', en: 'verb — what happened', note: 'كَتَبَ · يَكْتُبُ' },
      { ar: 'الْفَاعِلُ', en: 'subject — who did it', note: 'الطَّالِبُ' },
      { ar: 'الْمَفْعُولُ بِهِ', en: 'object — what received it', note: 'الرِّسَالَةَ' },
      { ar: 'الضَّمِيرُ الْمُسْتَتِرُ', en: 'subject hidden in the verb', note: 'كَتَبْتُ · كَتَبْنَا' },
      { ar: 'التَّقْدِيمُ', en: 'putting first (for focus)', note: 'الطَّالِبُ كَتَبَ' },
    ],
  },
  explain: [
    {
      type: 'formsTable', min: 4, eyebrow: 'Grammar · part 1 · the three roles (website table)', title: 'What happened? Who? What?', ar: 'أَرْكَانُ الْجُمْلَةِ الْفِعْلِيَّةِ', ltr: true,
      cols: [{ label: 'Sentence', w: 4.4, size: 22 }, { label: 'Verb · what happened?', w: 2.6, size: 24 }, { label: 'Subject · who did it?', w: 2.6, size: 24 }, { label: 'Object · what received it?', w: 2.73, size: 24 }],
      rows: [
        { core: true, cells: ['كَتَبَ الطَّالِبُ الْوَاجِبَ.', 'كَتَبَ', 'الطَّالِبُ', 'الْوَاجِبَ'] },
        { core: true, cells: ['فَتَحَتْ سَلْمَى النَّافِذَةَ.', 'فَتَحَتْ', 'سَلْمَى', 'النَّافِذَةَ'] },
        { core: true, cells: ['نَامَ الطِّفْلُ.', 'نَامَ', 'الطِّفْلُ', 'none needed'] },
        { cells: ['سَافَرْنَا أَمْسِ.', 'سَافَرْنَا', 'hidden: we', 'none needed'] },
        { cells: ['أَعْطَى الْمُعَلِّمُ الطَّالِبَ كِتَابًا.', 'أَعْطَى', 'الْمُعَلِّمُ', 'two objects'] },
      ],
      foot: 'Ending clue: the subject usually ends in -u (ḍamma) and the object in -a (fatḥa). Not every verb needs an object — nāma (slept) and safara (travelled) are complete with a subject alone.',
      notes: 'PART 1 (4 min) — website “The three core roles” + its four examples. Say each sentence; students point: verb — subject — object. Core: rows 1–3. Row 5 (Stretch): the teacher gave the student a book — two objects, both with -a.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 2 · verb first — the formal VSO pattern (website table)', title: 'Verb · subject · object', ar: 'الْفِعْلُ ثُمَّ الْفَاعِلُ ثُمَّ الْمَفْعُولُ بِهِ', ltr: true,
      cols: [{ label: 'Time', w: 2.0 }, { label: 'V + S + O', w: 5.8, size: 24 }, { label: 'Meaning', w: 4.53 }],
      rows: [
        { core: true, cells: ['Past', 'كَتَبَ الطَّالِبُ الرِّسَالَةَ.', 'The student wrote the letter.'] },
        { core: true, cells: ['Present', 'يَكْتُبُ الطَّالِبُ الرِّسَالَةَ.', 'The student writes / is writing the letter.'] },
        { core: true, cells: ['Future', 'سَيَكْتُبُ الطَّالِبُ الرِّسَالَةَ.', 'The student will write the letter.'] },
        { cells: ['Past (f.)', 'كَتَبَتِ الطَّالِبَةُ الرِّسَالَةَ.', 'The student (f.) wrote the letter.'] },
        { cells: ['Present (f.)', 'تَكْتُبُ الطَّالِبَةُ الرِّسَالَةَ.', 'The student (f.) is writing the letter.'] },
      ],
      foot: 'Website focus: verb-first order presents the EVENT first. It is the natural order for stories, news and answers to “What happened?”. A feminine subject needs a feminine verb: katabat, taktubu.',
      notes: 'PART 2 (2 min) — website “Verb first”. Point out katabati ṭ-ṭāliba: the -t takes a kasra to join al-.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'Grammar · part 3 · subject first and focus (website table) · Develop', title: 'Which word comes first? It depends on the question', ar: 'مَاذَا نُقَدِّمُ؟', ltr: true,
      cols: [{ label: 'Question / context', w: 3.0 }, { label: 'Focus', w: 2.2 }, { label: 'Natural answer', w: 7.13, size: 22 }],
      rows: [
        { core: true, cells: ['What happened?', 'the event', 'كَتَبَ الطَّالِبُ الرِّسَالَةَ.'] },
        { core: true, cells: ['What did the student do?', 'the student', 'الطَّالِبُ كَتَبَ الرِّسَالَةَ.'] },
        { cells: ['And Maryam?', 'Maryam', 'مَرْيَمُ قَرَأَتِ الرِّسَالَةَ.'] },
        { cells: ['What happened at school?', 'the event', 'بَدَأَ الِاجْتِمَاعُ فِي الْمَدْرَسَةِ.'] },
        { cells: ['Ali, not his brother', 'contrast', 'عَلِيٌّ دَرَسَ، وَلَكِنَّ أَخَاهُ لَمْ يَدْرُسْ.'] },
      ],
      foot: 'Website: when the noun comes first, Arabic grammar calls it a nominal sentence whose predicate is a verbal clause. In practice we call it SVO. Warning: with two or more people the verb changes when the subject comes first (Lessons 2–3).',
      notes: 'PART 3 (3 min) — website “Subject first” + focus table; last row from the website Focus Check. Core students recognise SVO; Develop students choose it on purpose.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 4 · the subject can hide inside the verb (website table)', title: 'No separate “I” needed', ar: 'الْفَاعِلُ فِي الْفِعْلِ', ltr: true,
      cols: [{ label: 'Verb', w: 3.0, size: 26 }, { label: 'Hidden subject', w: 2.6, size: 26 }, { label: 'Meaning', w: 6.73 }],
      rows: [
        { core: true, cells: ['كَتَبْتُ', 'أَنَا', 'I wrote'] },
        { core: true, cells: ['كَتَبْنَا', 'نَحْنُ', 'we wrote'] },
        { cells: ['كَتَبْتِ', 'أَنْتِ', 'you (f.) wrote'] },
        { cells: ['كَتَبُوا', 'هُمْ', 'they (m. / mixed) wrote'] },
        { cells: ['كَتَبْنَ', 'هُنَّ', 'they (f.) wrote'] },
        { cells: ['كَتَبْتُهَا', 'أَنَا', 'I wrote it — the ending -hā is the object'] },
      ],
      foot: 'Website warning: do not add anā, naḥnu or hum before every verb just because English needs “I”, “we”, “they”. Use the pronoun only for emphasis or contrast.',
      notes: 'PART 4 (2 min) — website “The subject may be inside the verb”. Stretch: katabtuhā packs verb + subject + object into one word.',
    },
    {
      type: 'formsTable', min: 2, eyebrow: 'Grammar · part 5 · expanding the core (website table) · Stretch', title: 'Add details — keep the core clear', ar: 'وَسِّعِ الْجُمْلَةَ', ltr: true,
      cols: [{ label: 'Detail', w: 2.0 }, { label: 'Model', w: 7.6, size: 22 }, { label: 'Answers', w: 2.73 }],
      rows: [
        { core: true, cells: ['Time', 'كَتَبَ الطَّالِبُ الرِّسَالَةَ أَمْسِ.', 'when?'] },
        { cells: ['Time first', 'أَمْسِ كَتَبَ الطَّالِبُ الرِّسَالَةَ.', 'when? (set the scene)'] },
        { core: true, cells: ['Place', 'كَتَبَ الطَّالِبُ الرِّسَالَةَ فِي الْمَكْتَبَةِ.', 'where?'] },
        { cells: ['Manner', 'كَتَبَ الطَّالِبُ الرِّسَالَةَ بِعِنَايَةٍ.', 'how?'] },
        { cells: ['Reason', 'كَتَبَ الطَّالِبُ الرِّسَالَةَ لِأَنَّهُ مُشْتَاقٌ إِلَى جَدِّهِ.', 'why?'] },
      ],
      foot: 'Website sentence ladder: start with kataba ṭ-ṭālibu r-risālata, then add ONE accurate detail at a time. Time and place phrases can move; the verb–subject–object core stays together.',
      notes: 'PART 5 (2 min) — website “Expanding the sentence”. Reason row teacher-completed (the website row is cut off): “because he misses his grandfather”.',
    },
  ],
  quick: [
    W(/Role Check/, 0, { prompt: 'Identify the subject: زَارَتْ لَيْلَى الْمَتْحَفَ', feedback: 'Laylā did the visiting.' }),
    W(/Role Check/, 1, { prompt: 'Identify the object: أَكَلَ الْوَلَدُ التُّفَّاحَةَ', feedback: 'The apple was eaten — it receives the action.' }),
    W(/VSO Builder/, 1, { prompt: 'Build “The girl opens the door.”', feedback: 'A girl needs the feminine verb taftaḥu.' }),
    W(/Role Check/, 3, { prompt: 'Where is the subject: كَتَبْتُهَا', options: ['inside the ending -tu', 'inside the ending -hā', 'there is no subject'], feedback: '-tu = I (subject); -hā = it (object).' }),
  ],
  quickNote: 'website Role Check and VSO Builder.',
  ido: {
    title: 'Watch me label a short story',
    steps: [
      { head: 'Verb', ar: 'قَابَلَتْ', think: 'What happened? She met.' },
      { head: 'Subject', ar: 'سَلْمَى', think: 'Who met? Salmā.' },
      { head: 'Object', ar: 'صَدِيقَتَهَا', think: 'Whom? Her friend: -a.' },
      { head: 'Focus', ar: 'الطُّلَّابُ', think: 'Put the students first.' },
    ],
    legend: ['k', 'w', 'e'], legendLabels: { k: 'VERB', w: 'SUBJECT', e: 'OBJECT' },
    model: '{k|وَصَلَتْ} {w|سَلْمَى} إِلَى الْمَدْرَسَةِ مُبَكِّرًا، ثُمَّ {k|قَابَلَتْ} {e|صَدِيقَتَهَا}. {k|بَدَأَ} {w|الدَّرْسُ} فِي السَّاعَةِ الثَّامِنَةِ. {w|الطُّلَّابُ} {k|اسْتَمَعُوا} إِلَى الْمُعَلِّمَةِ بِعِنَايَةٍ، وَبَعْدَ الدَّرْسِ {k|كَتَبَتْ} {w|سَلْمَى} {e|الْوَاجِبَ}.',
    modelEn: 'Salmā arrived at school early, then she met her friend. The lesson began at eight o’clock. The students listened to the teacher carefully, and after the lesson Salmā wrote her homework.',
    notes: 'Built from the website skills-workshop lines. Think aloud: verb first = what happened; “the students” first = the focus is on them (and their verb ends in -ū — Lesson 2).',
  },
  models: [
    { ar: 'فَتَحَتْ سَلْمَى النَّافِذَةَ.', en: 'Salmā opened the window.', tip: 'V + S + O.' },
    { ar: 'نَامَ الطِّفْلُ.', en: 'The child slept.', tip: 'No object needed.' },
    { ar: 'سَافَرْنَا أَمْسِ.', en: 'We travelled yesterday.', tip: 'Subject inside: -nā.' },
    { ar: 'أَعْطَى الْمُعَلِّمُ الطَّالِبَ كِتَابًا.', en: 'The teacher gave the student a book.', tip: 'Two objects.' },
  ],
  wedoSlides: [
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · label the roles (website game and final check)', title: 'Verb, subject, object — or none?', ar: 'حَدِّدِ الْأَرْكَانَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Sentence', w: 4.4, size: 22 }, { label: 'Verb', w: 2.6, size: 24 }, { label: 'Subject', w: 2.6, size: 24 }, { label: 'Object', w: 2.73, size: 24 }],
      rows: [
        { core: true, cells: ['أَغْلَقَ الْحَارِسُ الْبَابَ.', 'أَغْلَقَ', 'الْحَارِسُ', 'الْبَابَ'] },
        { core: true, cells: ['قَرَأَتْ مَرْيَمُ الْخَبَرَ.', 'قَرَأَتْ', 'مَرْيَمُ', 'الْخَبَرَ'] },
        { core: true, cells: ['شَاهَدَ الطِّفْلُ الْفِلْمَ.', 'شَاهَدَ', 'الطِّفْلُ', 'الْفِلْمَ'] },
        { cells: ['خَرَجَ الْوَلَدُ.', 'خَرَجَ', 'الْوَلَدُ', 'none'] },
        { cells: ['كَتَبَتْ هِنْدٌ الْمَقَالَةَ.', 'كَتَبَتْ', 'هِنْدٌ', 'الْمَقَالَةَ'] },
        { cells: ['سَاعَدْتُهَا.', 'سَاعَدْتُ', 'hidden: I', 'her (-hā)'] },
      ],
      foot: 'Strategy (website): find the action first, then ask who did it and what received it. Never assume the first noun is the subject — check the endings.',
      notes: 'WE DO (3 min) — cover columns 2–4; students call out each role. Core: rows 1–3; Stretch: sāʿadtuhā = I helped her.',
    },
    {
      type: 'formsTable', min: 3, eyebrow: 'We do · turn it round (website Develop) · singular subjects only', title: 'Same meaning, new focus', ar: 'قَدِّمِ الْفَاعِلَ', ltr: true, stage: 'wedo',
      cols: [{ label: 'Verb first (event)', w: 5.1, size: 22 }, { label: 'Subject first (person)', w: 5.1, size: 22 }, { label: 'Watch', w: 2.13 }],
      rows: [
        { core: true, cells: ['شَرَحَ الْمُعَلِّمُ الدَّرْسَ.', 'الْمُعَلِّمُ شَرَحَ الدَّرْسَ.', 'same verb'] },
        { core: true, cells: ['وَصَلَ الْقِطَارُ مُبَكِّرًا.', 'الْقِطَارُ وَصَلَ مُبَكِّرًا.', 'no object'] },
        { cells: ['قَرَأَتْ مَرْيَمُ الْكِتَابَ.', 'مَرْيَمُ قَرَأَتِ الْكِتَابَ.', 'linking -i'] },
        { cells: ['زَارَتْ سَارَةُ جَدَّتَهَا.', 'سَارَةُ زَارَتْ جَدَّتَهَا.', 'feminine'] },
        { cells: ['أَجَابَ الطَّالِبُ عَنِ السُّؤَالِ.', 'الطَّالِبُ أَجَابَ عَنِ السُّؤَالِ.', 'preposition'] },
      ],
      foot: 'With ONE person, only the order changes. With two or more people the verb ending changes too — that is next lesson’s job.',
      notes: 'WE DO (3 min) — cover column 2; students say the SVO version aloud. Website Focus Check: SVO is acceptable; the analysis and agreement differ.',
    },
    {
      type: 'sorter', min: 2, eyebrow: 'We do · sort it · which word comes first?', title: 'Verb first or subject first?', ar: 'الْفِعْلُ أَوَّلًا أَمِ الْفَاعِلُ؟',
      categories: ['Verb first (VSO)', 'Subject first (SVO)'],
      items: [['نَامَ الطِّفْلُ.', 0], ['فَتَحَ عَلِيٌّ الْبَابَ.', 0], ['شَرِبَتْ هِنْدٌ الْمَاءَ.', 0], ['يَلْعَبُ أَخِي.', 0], ['الطِّفْلُ نَامَ.', 1], ['عَلِيٌّ فَتَحَ الْبَابَ.', 1], ['هِنْدٌ شَرِبَتِ الْمَاءَ.', 1], ['أَخِي يَلْعَبُ.', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Each pair has the same meaning — only the focus changes. Ask: which would you use to answer “What happened?”',
    },
  ],
  mistakes: [
    { wrong: 'كَتَبَ الْوَاجِبُ الطَّالِبَ.', right: 'كَتَبَ الطَّالِبُ الْوَاجِبَ.', why: 'The student does the writing (-u); the homework receives it (-a). Website clinic.' },
    { wrong: 'الطَّالِبُ كَتَبَتِ الرِّسَالَةَ.', right: 'الطَّالِبُ كَتَبَ الرِّسَالَةَ.', why: 'A masculine subject needs a masculine verb. Website clinic.' },
    { wrong: 'أَنَا كَتَبَ الرِّسَالَةَ.', right: 'كَتَبْتُ الرِّسَالَةَ.', why: '“I” lives in the ending -tu — no separate anā needed. Website clinic.' },
  ],
  hints: ['Who did the writing?', 'Is the student male or female?', 'Which ending means “I”?'],
  practice: [
    W(/Role Check/, 2, { feedback: 'Jalasa (sat) is complete with a subject alone.' }),
    W(/VSO Builder/, 0, { prompt: 'Build “The teacher explained the lesson.”', feedback: 'Verb, subject, object.' }),
    W(/Focus Check/, 0, { prompt: 'You are contrasting Ali with his brother. Best opening?', feedback: 'Ali first makes him the topic of the contrast.' }),
    W(/Expansion Check/, 0, { feedback: 'Time + verb + subject + object + manner: clear.' }),
  ],
  practiceLabel: 'website Role, VSO Builder, Focus and Expansion checks',
  read: {
    title: 'Our trip to the museum', label: 'website skills workshop (teacher-written account)',
    text: 'فِي الصَّبَاحِ رَكِبَ الصَّفُّ الْحَافِلَةَ إِلَى الْمَتْحَفِ. قَادَ السَّائِقُ الْحَافِلَةَ بِهُدُوءٍ. فِي الْمَتْحَفِ شَرَحَتِ الْمُرْشِدَةُ تَارِيخَ الْمَدِينَةِ. سَأَلَ يُوسُفُ سُؤَالًا ذَكِيًّا، فَأَجَابَتِ الْمُرْشِدَةُ عَنْهُ. وَمَرْيَمُ رَسَمَتْ صُورَةً لِلْقَصْرِ الْقَدِيمِ. ثُمَّ أَكَلْنَا الْغَدَاءَ فِي الْحَدِيقَةِ، وَرَجَعْنَا إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ الثَّالِثَةِ.',
    glossary: [['الْحَافِلَةَ', 'the bus'], ['قَادَ', 'he drove'], ['الْمُرْشِدَةُ', 'the guide (f.)'], ['رَسَمَتْ', 'she drew'], ['الْقَصْرِ', 'the palace']],
    task: 'Website: underline each verb once and circle its subject. Find one sentence with the subject first and one with a hidden subject.',
    questions: [
      q('Who drove the bus?', ['the driver', 'the guide', 'Yūsuf'], 'Qāda s-sāʾiqu l-ḥāfilata.'),
      q('What did the guide explain?', ['تَارِيخَ الْمَدِينَةِ', 'سُؤَالًا ذَكِيًّا', 'صُورَةً'], 'The object of sharaḥat.'),
      q('Which sentence puts the person first?', ['وَمَرْيَمُ رَسَمَتْ صُورَةً', 'سَأَلَ يُوسُفُ سُؤَالًا', 'قَادَ السَّائِقُ الْحَافِلَةَ'], 'Maryam comes before her verb: SVO.'),
      q('Who is the hidden subject in akalnā?', ['we', 'they', 'I'], 'The ending -nā = we.'),
    ],
    qNote: 'Teacher-written account for the website skills workshop; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: tell what happened', source: 'website skills workshop',
    prompts: [
      { route: 'core', ar: 'مَاذَا فَعَلْتَ أَمْسِ؟' },
      { route: 'develop', ar: 'مَاذَا حَدَثَ فِي الْمَدْرَسَةِ الْيَوْمَ؟' },
      { route: 'stretch', ar: 'قَارِنْ بَيْنَكَ وَبَيْنَ أَخِيكَ أَوْ صَدِيقِكَ.' },
    ],
    stems: [
      { route: 'core', ar: 'أَمْسِ قَرَأْتُ ______ ، وَأَكَلْتُ ______ .' },
      { route: 'develop', ar: 'بَدَأَ ______ ، ثُمَّ شَرَحَ الْمُعَلِّمُ ______ .' },
      { route: 'stretch', ar: 'أَنَا ______ ، وَلَكِنَّ أَخِي ______ .' },
    ],
    model: [
      { who: 'A', ar: 'مَاذَا حَدَثَ فِي الْمَدْرَسَةِ الْيَوْمَ؟', en: 'What happened at school today?' },
      { who: 'B', ar: 'بَدَأَ الِاجْتِمَاعُ مُبَكِّرًا، وَتَكَلَّمَ الْمُدِيرُ عَنِ الرِّحْلَةِ. أَنَا أُفَضِّلُ الْقِرَاءَةَ، وَلَكِنَّ أَخِي يُفَضِّلُ الرِّحْلَاتِ!', en: 'The assembly started early, and the head teacher talked about the trip. I prefer reading, but my brother prefers trips!' },
    ],
    notes: 'Website: describe an action clearly, then change the order to put the emphasis on the event or on the person.',
  },
  write: {
    siteTask: 'Write 70–90 Arabic words about something that happened at home, at school or on a journey. Use both verb-first and subject-first sentences on purpose.',
    core: { amount: '5 sentences', task: 'Your morning, each sentence starting with a verb.', how: 'istayqaẓtu · akaltu · dhahabtu.' },
    develop: { amount: '7 sentences', task: 'Add two subject-first sentences and two objects.', how: 'akhī laʿiba … · fataḥat ummī l-bāba.' },
    stretch: { amount: '70–90 words', task: 'Website event account: 4 VSO, 2 SVO, 3 objects, time / place / manner.', how: 'Label V, S and O above three sentences.' },
  },
  frames: {
    core: [
      { en: 'I woke up at …', ar: 'اِسْتَيْقَظْتُ فِي السَّاعَةِ ______ .' },
      { en: 'I ate …', ar: 'أَكَلْتُ ______ .' },
      { en: 'My father opened …', ar: 'فَتَحَ أَبِي ______ .' },
      { en: 'My sister read …', ar: 'قَرَأَتْ أُخْتِي ______ .' },
    ],
    develop: [
      { en: 'Yesterday … visited …', ar: 'أَمْسِ زَارَ ______ ______ .' },
      { en: 'The teacher (f.) explained … carefully', ar: 'شَرَحَتِ الْمُعَلِّمَةُ ______ بِعِنَايَةٍ.' },
      { en: 'My brother …, but I …', ar: 'أَخِي ______ ، وَلَكِنِّي ______ .' },
      { en: 'In the library I wrote …', ar: 'فِي الْمَكْتَبَةِ كَتَبْتُ ______ .' },
    ],
    bank: ['كَتَبَ', 'قَرَأَ', 'فَتَحَ', 'زَارَ', 'شَرَحَ', 'أَكَلَ', 'الرِّسَالَةَ', 'الْبَابَ', 'الدَّرْسَ', 'أَمْسِ', 'فِي الصَّبَاحِ', 'بِعِنَايَةٍ', 'بِسُرْعَةٍ'],
  },
  stretchTask: {
    task: 'Website event account (70–90 words): something that happened at home, at school or on a journey — with both orders used deliberately.',
    checklist: ['At least four verb-first sentences.', 'Two subject-first sentences (for focus or contrast).', 'Three clear objects ending in -a.', 'Time, place and manner details.', 'V, S and O labelled above three sentences.'],
    phrases: [['فِي الصَّبَاحِ', 'in the morning'], ['بَعْدَ ذَلِكَ', 'after that'], ['بِعِنَايَةٍ', 'carefully'], ['بِسُرْعَةٍ', 'quickly'], ['وَلَكِنَّ', 'but'], ['مُبَكِّرًا', 'early']],
  },
  model: {
    text: 'وَصَلْتُ إِلَى الْمَدْرَسَةِ مُبَكِّرًا يَوْمَ الِاثْنَيْنِ. بَدَأَ الدَّرْسُ الْأَوَّلُ فِي السَّاعَةِ الثَّامِنَةِ، وَالطُّلَّابُ اسْتَمَعُوا بِعِنَايَةٍ. شَرَحَتِ الْمُعَلِّمَةُ الدَّرْسَ بِوُضُوحٍ، ثُمَّ كَتَبْنَا الْأَسْئِلَةَ فِي دَفَاتِرِنَا. فِي الِاسْتِرَاحَةِ أَكَلْتُ شَطِيرَةً مَعَ صَدِيقِي. صَدِيقِي نَسِيَ طَعَامَهُ، فَأَعْطَيْتُهُ نِصْفَ شَطِيرَتِي. بَعْدَ الظُّهْرِ لَعِبَ فَرِيقُنَا مُبَارَاةً قَوِيَّةً، وَسَجَّلَ أَخِي هَدَفًا جَمِيلًا. رَجَعْنَا إِلَى الْبَيْتِ مَسْرُورِينَ.',
    en: 'I arrived at school early on Monday. The first lesson began at eight o’clock, and the students listened carefully. The teacher explained the lesson clearly, then we wrote the questions in our exercise books. At break I ate a sandwich with my friend. My friend had forgotten his food, so I gave him half my sandwich. In the afternoon our team played a hard match, and my brother scored a beautiful goal. We went home happy.',
    find: ['verb-first sentence', 'subject-first sentence', 'object ending in -a', 'hidden subject'],
    source: 'teacher model built on the website model lines',
  },
  selfCheck: [
    { route: 'core', text: 'Every sentence has a verb, and I can point to its subject.' },
    { route: 'core', text: 'My objects end in -a (fatḥa).' },
    { route: 'develop', text: 'I used subject-first order on purpose, for focus.' },
    { route: 'develop', text: 'Feminine subjects have feminine verbs.' },
    { route: 'stretch', text: 'I did not add anā / naḥnu before every verb.' },
  ],
  exit: [
    W(/Final Mastery/, 2, { feedback: 'Verb first, then subject, then object.' }),
    W(/Final Mastery/, 3, { feedback: 'The student comes first: he is the topic.' }),
    W(/Final Mastery/, 8, { prompt: 'Which sentence means “I helped her”?', feedback: '-tu = I and -hā = her.' }),
  ],
  mastery: false,
  prep: {
    words: [['الطَّالِبَانِ', 'two students (m.)', '—'], ['الطُّلَّابُ', 'students (m.)', '—'], ['الطَّالِبَاتُ', 'students (f.)', '—'], ['كَتَبُوا', 'they (m.) wrote', '—'], ['كَتَبْنَ', 'they (f.) wrote', '—']],
    questionEn: 'When the students come FIRST, the verb changes to match them. How do you think “The students wrote the letter” ends?',
    questionAr: 'الطُّلَّابُ ______ الرِّسَالَةَ.',
    homework: {
      core: 'Write five verb-first sentences about your weekend and label V, S and O.',
      develop: 'Rewrite your five sentences subject first (singular subjects only).',
      stretch: 'Website event account (70–90 words) with both orders.',
    },
    wordsSource: 'The five words prepare GM-VS-02 (website: subject-first full agreement).',
  },
  remember: 'Remember: verb = what happened · subject = who did it (-u) · object = what received it (-a) · verb first tells the event, subject first puts the person in focus · the subject can hide inside the verb (katabtu, katabnā).',
});

module.exports = { meta, slides };
