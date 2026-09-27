'use strict';
/*
 * F2-L11 · Writing a Short Personal Introduction
 * Website: Pathways › Foundation › F2 › Lesson 11. The writer’s route (read the field → plan → connect → check → improve),
 * form fields, connectives (وَ، أَيْضًا، ثُمَّ، لِأَنَّ، وَلَكِنْ), draft → improved model (Yusuf), Paragraph Order Mission,
 * editor’s lens, Salma dictation, Layla model profile, read-aloud editing, polished introduction, writing checkpoint.
 */
const F = require('./f2-common');
const { q, bank, banks } = F;

const meta = F.meta({
  n: 11, fileTitle: 'Writing_Introduction', chip: 'Writing',
  title: 'Writing a Short Personal Introduction', arabic: 'كِتَابَةُ تَعْرِيفٍ شَخْصِيٍّ قَصِيرٍ',
  focus: 'Turn personal facts into accurate form answers and a polished Arabic introduction: plan first, connect ideas with وَ، أَيْضًا، ثُمَّ، لِأَنَّ, check the detail, and improve the draft before you finish.',
  icon: 'FaPenNib', iconSet: 'fa6',
});
const NEXT = { nextCode: 'F2-L12', nextTitle: 'Review and Unit Assessment', nextAr: 'مُرَاجَعَةُ الوَحْدَةِ وَتَقْيِيمُهَا' };
const order = banks.l11.orderItems;
const scramble = [3, 6, 1, 5, 0, 4, 2]; // teacher-set scramble of the seven website cards
const L = 'ABCDEFG';

const site = {
  speaking: {
    context: 'Read your writing aloud to test it',
    model: [
      ['يُوسُفُ', 'السَّلَامُ عَلَيْكُمْ. اِسْمِي يُوسُفُ، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.', 'Peace be upon you. My name is Yusuf, and I am fourteen.'],
      ['يُوسُفُ', 'أَنَا مِنْ بَرِيطَانِيَا، وَأَسْكُنُ فِي لَنْدَنَ.', 'I am from Britain, and I live in London.'],
    ],
  },
  writing: {
    prompt: 'Website writing task: your polished personal introduction (real information only if you are comfortable; a fictional identity is equally valid): greeting · name and age · origin and residence · nationality and languages · interest and reason · polite close.',
    checklist: ['Content: all six parts are there.', 'Connection: وَ accurate + أَيْضًا، ثُمَّ or لِأَنَّ.', 'Accuracy: age + سَنَةً, nationality gender, “I” verbs, punctuation.', 'Improvement: one repeated opening replaced, one detail added.'],
    model: 'السَّلَامُ عَلَيْكُمْ! اِسْمِي يُوسُفُ، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً. أَنَا مِنْ بَرِيطَانِيَا، وَأَسْكُنُ فِي لَنْدَنَ. أَنَا طَالِبٌ، وَأَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالعَرَبِيَّةَ أَيْضًا. أُحِبُّ القِرَاءَةَ لِأَنَّهَا مُفِيدَةٌ. شُكْرًا، وَإِلَى اللِّقَاءِ!',
  },
  differentiation: {
    core: 'Complete the form, then four to six accurate lines using the model.',
    develop: 'Five or six connected sentences with at least three connectives.',
    stretch: '50–70 words, a reason with لِأَنَّ, and independent editing.',
  },
  mistakes: [
    { wrong: 'عُمْرِي ثَلَاثَ عَشْرَةَ.', right: 'عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً.', why: 'The complete age chunk ends with “year”.' },
    { wrong: 'سَلْمَى: جِنْسِيَّتِي سُورِيٌّ.', right: 'سَلْمَى: جِنْسِيَّتِي سُورِيَّةٌ.', why: 'Nationality agrees: -iyya (and جِنْسِيَّة is feminine anyway).' },
    { wrong: 'أُحِبُّ الرَّسْمَ لِأَنَّ.', right: 'أُحِبُّ الرَّسْمَ لِأَنَّهُ جَمِيلٌ.', why: '“Because” must be followed by a reason.' },
  ],
  listening: {
    title: 'Salma’s profile dictation',
    script: 'السَّلَامُ عَلَيْكُمْ. اِسْمِي سَلْمَى، وَعُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً. أَنَا مِنْ سُورِيَا، وَأَسْكُنُ فِي مَانْشِسْتَرَ. جِنْسِيَّتِي سُورِيَّةٌ، وَأَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ أَيْضًا. أَنَا طَالِبَةٌ، وَأُحِبُّ الرَّسْمَ لِأَنَّهُ جَمِيلٌ. شُكْرًا، وَإِلَى اللِّقَاءِ.',
    questions: bank(11, 'listeningQuiz', [1, 3, 4, 5, 6]).map((x) => ({ prompt: x.prompt, options: x.options, answer: 0, feedback: x.why })),
  },
};

const slides = [
  F.titleSlide({
    n: 11,
    plan: '0–1 Welcome · 1–2 Lesson map · 2–9 Do Now + answers · 9–10 Objectives · 10–18 Form fields and connectives · 18–20 Quick check · 20–23 I Do (draft → improved) · 23–35 We Do (paragraph order, editor’s lens, dictation, reading) · 35–49 You Do (read-aloud + write) · 49–54 Feedback · 54–56 Preparation.',
    source: 'Website sections used: the writer’s route, the eight-question retrieval, the form and connected-writing vocabulary (with the recognition fields), the twelve-question form-language check, the form lab (Maryam’s fictional identity card), the connectives with examples and the ten-question connective workshop, the Paragraph Order Mission (7 cards), Draft 1 vs the improved model, the eight-question editor’s lens, Salma’s dictation (8 questions), Layla’s model profile (12 questions), the read-aloud editing routine, the polished-introduction task and the twelve-question writing checkpoint. The website visual game repeats the F2-L02 cards and is not used here.',
    support: `• This is a WRITING-PROCESS lesson: the product is a polished introduction that students will reuse in the F2-L12 writing assessment. Make the five-step writer’s route visible all lesson.
• Core: complete the form + four accurate sentences with the model. Develop: five or six sentences, three connectives. Stretch: 50–70 words, a reason with لِأَنَّ (as a modelled chunk: لِأَنَّهَا مُفِيدَةٌ / لِأَنَّهُ جَمِيلٌ), self-editing.
• Website Foundation rule: use لِأَنَّ as a complete modelled chunk — no analysis of attached pronouns yet.
• PRIVACY (website): never enter real contact details; fictional identities are equally valid.`,
  }),
  F.welcomeSlide(),
  F.journeySlide({ teach: 'Form fields, connectives and the writer’s route.', wedo: 'Order a paragraph, edit a draft, dictation and reading.', next: 'F2-L12' }),
  F.doNow({
    questions: [
      q('What does لِأَنَّ mean?', ['because', 'then', 'also'], 'Prepared at home.'),
      q('What does مَسَوَّدَةٌ mean?', ['a draft', 'a signature', 'a form'], 'Prepared at home.'),
      ...bank(11, 'retrievalQuiz', [1, 3, 4]),
    ],
    keyIdea: { text: 'A strong introduction is planned, connected, checked and improved — not written once and left.', ar: 'خَطِّطْ · اُكْتُبْ · رَاجِعْ · حَسِّنْ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home. Questions 3–5 are from the website “eight-question introduction retrieval” (age, residence, a female nationality).',
  }),
  F.objectivesSlide([
    'Understand and complete common Arabic form fields.',
    'Write a four- to six-line fully vowelled introduction.',
    'Join and improve sentences with وَ، أَيْضًا، ثُمَّ، لِأَنَّ.',
    'Check content, spelling, gender and punctuation before finishing.',
  ], {
    core: ['I can complete the form.', 'I can write four accurate sentences with the model.'],
    develop: ['I can write five or six connected sentences.', 'I can use at least three connectives.'],
    stretch: ['I can write 50–70 words with a reason.', 'I can edit my own work independently.'],
  }, 2, 'Website “By the end, I can …” (left) and the website challenge routes (right).'),
  F.keywordsSlide({
    text: 'Form fields, five connectives and three writing-process words — all from the website. Core: the six fields, وَ and أَيْضًا.',
    groups: [
      { head: 'GROUP 1', name: 'Form fields · 7' },
      { head: 'GROUP 2', name: 'Connectives · 5' },
      { head: 'GROUP 3', name: 'Writing process · 3' },
    ],
    bridge: [
      { ar: 'مَسَوَّدَةٌ', urdu: 'مسودہ', tr: 'musawwada', en: 'draft' },
      { ar: 'تَارِيخٌ', urdu: 'تاریخ', tr: 'tārīkh', en: 'date' },
      { ar: 'العُنْوَانُ', urdu: 'عنوان', tr: 'unwān', en: 'Urdu: title · Arabic: address' },
      { ar: 'اللَّقَبُ', urdu: 'لقب', tr: 'laqab', en: 'title, surname' },
      { ar: 'تَحْسِينٌ', urdu: 'تحسین', tr: 'tahsīn', en: 'Urdu: praise · Arabic: improvement' },
    ],
    notes: 'URDU BRIDGE: مسودہ (draft — the same word!), تاریخ (date → تَارِيخُ المِيلَادِ date of birth), عنوان (FALSE FRIEND: Urdu title/heading; Arabic address on a form), لقب, تحسین (Urdu praise; Arabic improvement — same root ḥ-s-n, “making good”).',
  }),
  {
    type: 'vocab', stage: 'teach', min: 3, eyebrow: 'Key words · Group 1 · the language of forms (website)', title: 'Read the field', ar: 'حُقُولُ الاِسْتِمَارَةِ',
    items: [
      { n: 1, ar: 'الاِسْمُ', en: 'name', tr: 'al-ism', tag: 'field', core: true, forms: [{ l: 'first', ar: 'الاِسْمُ الأَوَّلُ' }, { l: 'family', ar: 'اِسْمُ العَائِلَةِ' }, { l: 'surname', ar: 'اللَّقَبُ' }] },
      { n: 2, ar: 'العُمْرُ', en: 'age', tr: 'al-ʿumr', tag: 'field', core: true, note: 'العُمْرُ: ١٣ سَنَةً' },
      { n: 3, ar: 'الجِنْسِيَّةُ', en: 'nationality', tr: 'al-jin-siy-ya', tag: 'field', core: true, note: 'الجِنْسِيَّةُ: مِصْرِيَّةٌ' },
      { n: 4, ar: 'مَكَانُ السَّكَنِ', en: 'place of residence', tr: 'ma-kā-nu s-sa-kan', tag: 'field', core: true, note: 'Also: البَلَدُ · المَدِينَةُ · العُنْوَانُ' },
      { n: 5, ar: 'اللُّغَاتُ', en: 'languages', tr: 'al-lu-ghāt', tag: 'field', core: true, forms: [{ l: 'one', ar: 'اللُّغَةُ' }, { l: 'pl.', ar: 'اللُّغَاتُ' }, { l: 'first', ar: 'اللُّغَةُ الأُولَى' }] },
      { n: 6, ar: 'التَّوْقِيعُ', en: 'signature', tr: 'at-taw-qīʿ', tag: 'field', core: true, note: 'Recognise: تَارِيخُ المِيلَادِ · رَقْمُ الهَاتِفِ · البَرِيدُ الإِلِكْتُرُونِيُّ' },
    ],
    notes: `FORM FIELDS (website “Read the language of forms”). Website strategy: a form usually needs a word, short phrase or number — not a full paragraph. Scan the label → copy only the relevant detail → keep agreement accurate → check script and numerals (13 and ١٣ both appear).
Receptive extension (website): تَارِيخُ المِيلَادِ date of birth · رَقْمُ الهَاتِفِ telephone number · البَرِيدُ الإِلِكْتُرُونِيُّ email — FICTIONAL details only.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Key words · Group 2 · lift a list of facts into connected prose (website)', title: 'Five connectives', ar: 'اِرْبِطِ المَعْلُومَاتِ',
    cols: [{ label: 'Connective', w: 2.3, size: 26 }, { label: 'Job', w: 3.0 }, { label: 'Website example', w: 7.03, size: 20 }],
    rows: [
      { core: true, cells: [{ ar: 'وَ', sub: 'and' }, 'joins related information', { ar: 'أَنَا مِنْ سُورِيَا، {k|وَ}أَسْكُنُ فِي لَنْدَنَ.' }] },
      { core: true, cells: [{ ar: 'أَيْضًا', sub: 'also' }, 'adds another fact', { ar: 'أَفْهَمُ الفَرَنْسِيَّةَ {k|أَيْضًا}.' }] },
      { cells: [{ ar: 'ثُمَّ', sub: 'then' }, 'shows sequence', { ar: 'أَكْتُبُ مَسَوَّدَةً، {k|ثُمَّ} أُرَاجِعُهَا.' }] },
      { cells: [{ ar: 'لِأَنَّ', sub: 'because' }, 'introduces a reason', { ar: 'أُحِبُّ القِرَاءَةَ {k|لِأَنَّهَا} مُفِيدَةٌ.' }] },
      { cells: [{ ar: 'وَلَكِنْ', sub: 'but · Stretch' }, 'adds a contrast', { ar: 'أَتَكَلَّمُ العَرَبِيَّةَ، {k|وَلَكِنْ} كِتَابَتِي تَحْتَاجُ إِلَى تَدْرِيبٍ.' }] },
    ],
    notes: `CONNECTIVES (website section 4). Website Foundation rule: use لِأَنَّ as a complete modelled chunk (لِأَنَّهَا مُفِيدَةٌ · لِأَنَّهُ جَمِيلٌ); a fuller analysis of attached pronouns belongs in later grammar study.
Tip: لِأَنَّهَا for a feminine hobby (القِرَاءَةُ، السِّبَاحَةُ) and لِأَنَّهُ for a masculine one (الرَّسْمُ) — present as “copy the model”, not a rule.
Writing-process words (website): مَسَوَّدَةٌ draft · مُرَاجَعَةٌ checking · تَحْسِينٌ improvement.`,
  },
  {
    type: 'formsTable', stage: 'teach', min: 2, eyebrow: 'The writer’s route (website) · five steps', title: 'Plan, connect, check, improve', ar: 'طَرِيقُ الكَاتِبِ',
    cols: [{ label: 'Step', w: 4.2, size: 22 }, { label: 'What you do', w: 8.13 }],
    rows: [
      { core: true, cells: [{ ar: '١ · اِقْرَأِ الحَقْلَ', sub: 'Read the field' }, 'What does the form or task ask for? Give only that detail.'] },
      { core: true, cells: [{ ar: '٢ · خَطِّطِ المَعْلُومَاتِ', sub: 'Plan the facts' }, 'Six groups: greeting · name + age · origin + residence · nationality + languages · interest + reason · close.'] },
      { core: true, cells: [{ ar: '٣ · اِرْبِطِ الجُمَلَ', sub: 'Connect ideas' }, 'Join with وَ; add أَيْضًا, ثُمَّ or لِأَنَّ where useful.'] },
      { core: true, cells: [{ ar: '٤ · رَاجِعِ الدِّقَّةَ', sub: 'Check accuracy' }, 'Age + سَنَةً · nationality gender · “I” verbs · Arabic punctuation (، ؟ .).'] },
      { core: true, cells: [{ ar: '٥ · حَسِّنِ المَسَوَّدَةَ', sub: 'Improve' }, 'Replace one repeated opening, add one useful detail, read it aloud.'] },
    ],
    notes: 'THE WRITER’S ROUTE (website header + the four checking steps in section 10). Keep this slide visible (or pinned in chat) during You Do.',
  },
  F.quickCheck(bank(11, 'connectiveQuiz', [0, 1, 2, 3]), 'website “Ten-question connective workshop” questions 1–4.'),
  {
    type: 'formsTable', stage: 'ido', min: 3, eyebrow: 'I do · from the first draft to a stronger introduction (website)', title: 'Watch me improve a draft', ar: 'مِنَ المَسَوَّدَةِ إِلَى نَصٍّ أَفْضَلَ',
    cols: [{ label: 'Draft 1 · accurate but list-like', w: 5.2, size: 20 }, { label: 'Improved model', w: 5.4, size: 20 }, { label: 'What changed', w: 1.73 }],
    rows: [
      { cells: [{ ar: '—' }, { ar: '{k|السَّلَامُ عَلَيْكُمْ.}' }, 'greeting'] },
      { core: true, cells: [{ ar: 'اِسْمِي يُوسُفُ. عُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.' }, { ar: 'اِسْمِي يُوسُفُ، {k|وَ}عُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.' }, 'joined'] },
      { core: true, cells: [{ ar: 'أَنَا مِنْ بَرِيطَانِيَا. أَسْكُنُ فِي لَنْدَنَ.' }, { ar: 'أَنَا مِنْ بَرِيطَانِيَا، {k|وَ}أَسْكُنُ فِي لَنْدَنَ.' }, 'joined'] },
      { cells: [{ ar: 'أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ.' }, { ar: 'أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالعَرَبِيَّةَ {k|أَيْضًا}.' }, 'a detail'] },
      { cells: [{ ar: 'أُحِبُّ القِرَاءَةَ.' }, { ar: 'أُحِبُّ القِرَاءَةَ {k|لِأَنَّهَا مُفِيدَةٌ}.' }, 'a reason'] },
      { cells: [{ ar: '—' }, { ar: '{k|شُكْرًا، وَإِلَى اللِّقَاءِ.}' }, 'polite close'] },
    ],
    notes: `I DO (3 min) — website section 6: “The information may be correct in both versions. The stronger version connects ideas, adds a reason and closes politely.” Think aloud row by row, then students COPY the improved column.
Website craft labels: 👋 greeting (natural opening) · 🔗 connectives (relationships) · 💡 reason (explains an interest) · ✅ polite close (finishes clearly). The full website model also adds جِنْسِيَّتِي بَرِيطَانِيَّةٌ and أَنَا طَالِبٌ.`,
  },
  {
    type: 'formsTable', stage: 'wedo', min: 3, eyebrow: 'We do · website “Paragraph Order Mission” · put the seven cards in order', title: 'Build the paragraph in a logical order', ar: 'رَتِّبْ فِقْرَةَ التَّعْرِيفِ',
    cols: [{ label: 'Card', w: 1.4 }, { label: 'Sentence card', w: 10.93, size: 22 }],
    rows: scramble.map((idx, i) => ({ cells: [L[i], { ar: order[idx] }] })),
    foot: 'Type the order in the chat, e.g. E C … (open politely → facts → interest → close).',
    notes: `WE DO — website Paragraph Order Mission (3 min). “A strong introduction opens politely, gives connected information, adds an interest and closes politely.”
ANSWER: ${[...order.keys()].map((k) => L[scramble.indexOf(k)]).join(' ')} — i.e. greeting → name + age → origin + residence → nationality → languages → interest + reason → close.
Core: find the first and the last card only. Develop / Stretch: the whole order.`,
  },
  {
    type: 'formsTable', stage: 'wedo', min: 1, eyebrow: 'We do · Paragraph Order Mission · answer', title: 'The natural order', ar: 'التَّرْتِيبُ الصَّحِيحُ',
    cols: [{ label: 'Card', w: 1.4 }, { label: 'Sentence', w: 8.4, size: 22 }, { label: 'Part', w: 2.53 }],
    rows: order.map((s, k) => ({ core: k === 0 || k === 6, cells: [L[scramble.indexOf(k)], { ar: s }, ['greeting', 'name + age', 'origin + residence', 'nationality', 'languages', 'interest + reason', 'close'][k]] })),
    notes: 'ANSWER SLIDE. Students correct their order; then everyone reads the finished paragraph aloud together — it is the website’s improved Yusuf model.',
  },
  {
    type: 'mcq', stage: 'wedo', min: 3, eyebrow: 'We do · website “editor’s lens”', title: 'Which change makes it better?', ar: 'عَدَسَةُ المُحَرِّرِ',
    seed: 23,
    questions: bank(11, 'editQuiz', [0, 2, 3, 5, 7]),
    side: { kind: 'core', label: 'EDITOR’S QUESTIONS', text: 'Is there a greeting?\nIs the age complete (سَنَةً)?\nDoes the gender match?\nIs there a reason and a close?' },
    answerSlide: { min: 0, eyebrow: 'We do · editor’s lens answers', title: 'Editor’s lens: answers', ar: 'الإِجَابَاتُ' },
    notes: 'WE DO — 5 of the website’s 8 editor’s-lens decisions. Each one is an item on the final checklist — students will use exactly these questions on their own draft.',
    answerNotes: 'After each answer, ask: “Which step of the writer’s route is this?” (connect / check / improve).',
  },
  F.repairSlide(site, [
    'Is the age chunk complete?',
    'Salma is a girl. Check the nationality.',
    'Because … what?',
  ]),
  F.listening(site, {
    coreTip: 'Listen twice.\nEight boxes: name · age · origin · residence · nationality · languages · interest · close.\nStretch: full dictation.',
    routes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5; Stretch writes the full dictation.',
    gloss: [
      ['السَّلَامُ عَلَيْكُمْ. اِسْمِي سَلْمَى، وَعُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً.', 'Peace be upon you. My name is Salma, and I am thirteen.'],
      ['أَنَا مِنْ سُورِيَا، وَأَسْكُنُ فِي مَانْشِسْتَرَ.', 'I am from Syria, and I live in Manchester.'],
      ['جِنْسِيَّتِي سُورِيَّةٌ، وَأَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ أَيْضًا.', 'My nationality is Syrian, and I speak Arabic and English too.'],
      ['أَنَا طَالِبَةٌ، وَأُحِبُّ الرَّسْمَ لِأَنَّهُ جَمِيلٌ. شُكْرًا، وَإِلَى اللِّقَاءِ.', 'I am a student, and I like drawing because it is beautiful. Thank you, and see you.'],
    ],
  }),
  {
    type: 'glossed', stage: 'wedo', min: 2, eyebrow: 'We do · read as a writer · Layla’s model profile (website)', title: 'Study a complete introduction', ar: 'اِقْرَأْ تَعْرِيفًا شَخْصِيًّا كَامِلًا',
    lines: [
      ['مَرْحَبًا. اِسْمِي لَيْلَى حَسَن، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً.', 'greeting · full name · age'],
      ['أَنَا مِنَ المَغْرِبِ، وَلَكِنْ أَسْكُنُ فِي مَدِينَةِ لِيدْزَ فِي بَرِيطَانِيَا.', 'origin · CONTRAST · residence'],
      ['جِنْسِيَّتِي مَغْرِبِيَّةٌ، وَأَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ، وَأَفْهَمُ الفَرَنْسِيَّةَ أَيْضًا.', 'nationality · languages · an ADDED detail'],
      ['أَنَا طَالِبَةٌ مُجْتَهِدَةٌ، وَأُحِبُّ تَعَلُّمَ اللُّغَاتِ لِأَنَّهُ مُفِيدٌ وَمُمْتِعٌ.', 'description · interest + REASON'],
      ['تَشَرَّفْنَا، وَإِلَى اللِّقَاءِ.', 'polite close'],
    ],
    notes: 'READING (website section 8). Website: read for meaning first; then read again to notice form fields, connectives, gender agreement, a reason and the polite opening and close. The English column labels the WRITER’S CRAFT, not a translation — students find the connective in each line (وَ · وَلَكِنْ · أَيْضًا · لِأَنَّ).',
  },
  {
    type: 'mcq', stage: 'wedo', min: 2, eyebrow: 'We do · reading and writer’s craft check (website)', title: 'Find the information and the craft', ar: 'أَسْئِلَةُ القِرَاءَةِ',
    seed: 9,
    questions: bank(11, 'readingQuiz', [0, 3, 6, 9, 10]),
    side: { kind: 'info', head: 'READ AS A WRITER', fill: 'E9F5EE', line: '9CCFB0', color: '1E6B52', text: 'Find the fact. Then ask: which connective did Layla use, and why?' },
    answerSlide: { min: 0, eyebrow: 'We do · reading answers', title: 'Reading: answers', ar: 'الإِجَابَاتُ' },
    notes: 'Website reading questions 1, 4, 7, 10 and 11 (the other 7 are homework). Q5 (وَلَكِنْ) is the Stretch model: a contrast between origin and residence.',
    answerNotes: 'A student reads aloud the evidence (by invitation).',
  },
  F.speakingSlide(site, {
    prompts: [
      { route: 'core', ar: 'اِقْرَأْ نَمُوذَجَ يُوسُفَ بِصَوْتٍ مَسْمُوعٍ.' },
      { route: 'develop', ar: 'اِقْرَأْ تَعْرِيفَ لَيْلَى بِصَوْتٍ مَسْمُوعٍ.' },
      { route: 'develop', ar: 'اِقْرَأْ مَسَوَّدَتَكَ، ثُمَّ حَسِّنْ جُمْلَةً وَاحِدَةً.' },
      { route: 'stretch', ar: 'قَدِّمْ تَعْرِيفَكَ بِدُونِ قِرَاءَةِ كُلِّ كَلِمَةٍ.' },
    ],
    stems: [
      { route: 'core', ar: 'القِرَاءَةُ ١: المَعْنَى' },
      { route: 'develop', ar: 'القِرَاءَةُ ٢: الاِنْسِيَابُ (، · .)' },
      { route: 'stretch', ar: 'القِرَاءَةُ ٣: الدِّقَّةُ (سَنَةً · ـيَّةٌ)' },
      { route: 'sum', ar: 'حَسَّنْتُ … / حَسَّنْتُ …' },
    ],
    modelEn: ['Peace be upon you. My name is Yusuf, and I am fourteen.', 'I am from Britain, and I live in London.'],
    notes: `WEBSITE “READ YOUR WRITING ALOUD TO TEST IT” — reading aloud is an EDITING tool: it helps you hear missing words, repeated openings and where punctuation should create a pause.
Three readings (website, shown as the stems): 1 Meaning — can a listener identify name, age, origin, residence, languages and interest? · 2 Flow — pause at full stops and commas; make وَ، أَيْضًا، ثُمَّ، لِأَنَّ sound connected · 3 Accuracy — long vowels, final feminine forms, the age phrase ending سَنَةً.
Website rehearsal checklist (chat ticks): steady pace · paused at punctuation · age and nationality clear · made one improvement after listening to myself.`,
  }),
  F.routesSlide(site, {
    core: { amount: 'form + 4 lines', how: 'Fill the six fields, then four sentences using Yusuf’s model and your plan.' },
    develop: { amount: '5–6 sentences', how: 'Six-part plan; at least three connectives; a polite close.' },
    stretch: { amount: '50–70 words', how: 'Add a reason with لِأَنَّ and a contrast; edit with the four checks.' },
  }),
  F.framesSlide({
    core: [
      { en: 'Greeting', ar: 'السَّلَامُ عَلَيْكُمْ / مَرْحَبًا.' },
      { en: 'My name is …, and I am … years old.', ar: 'اِسْمِي ______ ، وَعُمْرِي ______ سَنَةً.' },
      { en: 'I am from …, and I live in …', ar: 'أَنَا مِنْ ______ ، وَأَسْكُنُ فِي ______ .' },
      { en: 'Polite close', ar: 'شُكْرًا، وَإِلَى اللِّقَاءِ.' },
    ],
    develop: [
      { en: 'My nationality is …', ar: 'جِنْسِيَّتِي ______ .' },
      { en: 'I speak … and … too.', ar: 'أَتَكَلَّمُ ______ وَ ______ أَيْضًا.' },
      { en: 'I like … because it is useful.', ar: 'أُحِبُّ ______ لِأَنَّهَا مُفِيدَةٌ.' },
      { en: 'I like … because it is beautiful.', ar: 'أُحِبُّ ______ لِأَنَّهُ جَمِيلٌ.' },
      { en: 'I am from …, but I live in …', ar: 'أَنَا مِنْ ______ ، وَلَكِنْ أَسْكُنُ فِي ______ .' },
    ],
    bank: ['وَ', 'أَيْضًا', 'ثُمَّ', 'لِأَنَّهَا', 'لِأَنَّهُ', 'وَلَكِنْ', 'مُفِيدَةٌ', 'جَمِيلٌ', 'القِرَاءَةَ', 'الرَّسْمَ', 'طَالِبٌ', 'طَالِبَةٌ', 'تَشَرَّفْنَا'],
  }),
  F.modelSlide(site,
    'Peace be upon you! My name is Yusuf, and I am fourteen. I am from Britain, and I live in London. I am a student, and I speak English and Arabic too. I like reading because it is useful. Thank you, and see you!',
    ['a greeting', 'three connectives', 'a reason', 'a polite close'],
    'This is the website “full-mark model” from the F2-L12 writing assessment — the standard students are aiming for next lesson.'),
  F.selfCheckSlide([
    { route: 'core', text: 'My introduction has a greeting and a polite close.' },
    { route: 'core', text: 'My age chunk ends with سَنَةً.' },
    { route: 'develop', text: 'I used three connectives (and, also, then, because).' },
    { route: 'develop', text: 'My nationality matches me (-iyy / -iyya).' },
    { route: 'stretch', text: 'I read it aloud and improved one sentence.' },
  ]),
  F.exitTicket(bank(11, 'finalQuiz', [0, 4, 7]), 12),
  F.prepSlide({
    ...NEXT,
    words: [['مُرَاجَعَةٌ', 'review, revision', ''], ['تَقْيِيمٌ', 'assessment', ''], ['دَرَجَةٌ', 'mark, grade', 'pl. دَرَجَاتٌ'], ['نُقْطَةُ قُوَّةٍ', 'a strength', ''], ['هَدَفٌ', 'a target, goal', 'pl. أَهْدَافٌ']],
    questionEn: 'Revise with the website F2 “language vault”. Bring your polished introduction — you will use it in the writing assessment.',
    questionAr: 'نُقْطَةُ قُوَّتِي … · هَدَفِي …',
    homework: {
      core: 'Website F2-L11: the form-language check (12) and the form lab.',
      develop: 'Finish your polished introduction (five or six connected sentences).',
      stretch: '50–70 words, edited; then the 12-question writing checkpoint (aim for 10/12).',
    },
    wordsSource: 'The five words are the website F2-L12 assessment vocabulary.',
  }),
  F.closeSlide({ ...NEXT, remember: 'Remember: revise all of F2 + bring your introduction.' }),
];

module.exports = { meta, slides };
