'use strict';
/* D3-L10 · Listening — Work and Career Conversations — website: Pathways › Development › D3 › D3-L10 (reported statement قَالَ إِنَّهُ / قَالَتْ إِنَّهَا, change of plan كَانَ سَـ … وَلٰكِنَّهُ قَرَّرَ, correction لَا / لَيْسَ … بَلْ …, attitude verbs يُفَضِّلُ / يَشْكُو مِنْ / يَشْعُرُ بِـ).
 * Website vocabulary, grammar rules, listening script (three speakers) and strategy text used as published; the quiz, listening and
 * reading questions, sorter, mistakes, speaking prompts, writing model, mission and final check are generic placeholders on the website
 * for this lesson, so those items are teacher-written from the website’s own script, text and rules. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D3')({
  n: 10, fileTitle: 'Listening_Work_and_Career_Conversations', chip: 'Listening Skills',
  title: 'Listening — Work and Career Conversations', arabic: 'الاِسْتِمَاعُ — مُحَادَثَاتُ العَمَلِ وَالمَسِيرَةِ المِهَنِيَّةِ',
  focus: 'Listen like an examiner: track WHO is speaking, catch the FINAL plan after a change of mind (كُنْتُ سَأَ … ثُمَّ غَيَّرْتُ رَأْيِي), the corrected detail after لَا / بَلْ, and the speaker’s attitude.',
  icon: 'FaHeadphones', iconSet: 'fa6',
});

const T1 = 'المُتَحَدِّثُ الأَوَّلُ: كُنْتُ أَعْمَلُ فِي مَتْجَرٍ بَعْدَ المَدْرَسَةِ، لٰكِنَّنِي بَدَأْتُ تَدْرِيبًا فِي مَكْتَبِ مُحَاسَبَةٍ هٰذَا الشَّهْرَ. العَمَلُ أَصْعَبُ، وَلٰكِنَّهُ أَكْثَرُ فَائِدَةً لِخُطَّتِي.';
const T2 = 'المُتَحَدِّثَةُ الثَّانِيَةُ: كُنْتُ سَأَدْرُسُ القَانُونَ، ثُمَّ غَيَّرْتُ رَأْيِي وَقَرَّرْتُ دِرَاسَةَ الصَّحَافَةِ لِأَنَّنِي أُحِبُّ الكِتَابَةَ.';
const T3 = 'المُتَحَدِّثُ الثَّالِثُ: أَعْمَلُ مِنَ المَنْزِلِ ثَلَاثَةَ أَيَّامٍ، لَا أَرْبَعَةَ، وَهٰذَا يُسَاعِدُنِي عَلَى تَوْفِيرِ الوَقْتِ.';
const L = (prompt, options, feedback) => ({ prompt, options, answer: 0, feedback });
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D3-L10', {
  support: `• This is a LISTENING-SKILLS lesson: the website listening has three short speakers. Do them as three cycles: predict → listen twice → read the script → answers.
• Core: label each question (place · job · reason · number) and answer the first-detail questions. Develop: all questions + the FINAL detail after a change (ثُمَّ غَيَّرْتُ رَأْيِي · لَا أَرْبَعَةَ). Stretch: reconstruct the three speakers in notes (website writing task) and name each distractor.
• Read each text yourself at natural speed. Do NOT show the script until after the second listening.
• Same strategy family as D1-L10 and F6-L10; NEW traps today: “I used to … but now …”, “I was going to … then I changed my mind”, “three, not four”.`,
  teach: 'Who said it? What changed? What is the final detail?',
  wedo: 'Sort first plan / final plan, fix listening habits, then three short listening cycles.',
  next: { nextCode: 'D3-L11', nextTitle: 'D3 Consolidation — Error Analysis and Assessment Preparation', nextAr: 'تَرْسِيخُ الوَحْدَةِ — تَحْلِيلُ الأَخْطَاءِ' },
  objectives: ['Predict the type of detail before listening.', 'Track who is speaking and report it (قَالَ إِنَّهُ / قَالَتْ إِنَّهَا).', 'Catch the final plan after a change of mind or a correction.', 'Identify the speaker’s attitude from verbs and adjectives.'],
  skipGroups: [0],
  flexGroups: [1],
  doNow: {
    questions: [
      q('What is a مُشَتِّتٌ in a listening test?', ['a distractor', 'a key word', 'the script'], 'Prepared at home (D3-L09).'),
      q('What does أَسْتَبْعِدُ mean?', ['I eliminate', 'I predict', 'I check'], 'Prepared at home (D3-L09).'),
      q('Which word starts the first step of a plan?', ['أَوَّلًا', 'أَخِيرًا', 'لِذٰلِكَ'], 'D3-L09.'),
      q('Which means “I will study”?', ['سَأَدْرُسُ', 'دَرَسْتُ', 'كُنْتُ أَدْرُسُ'], 'D3-L04: future.'),
      q('Which is NOT required in the advert: لَا تُشْتَرَطُ الخِبْرَةُ?', ['experience', 'organisation', 'computer skills'], 'D3-L08: lā = not.'),
    ],
    keyIdea: { text: 'The first thing you hear is often NOT the answer. Wait for the change.', ar: 'كُنْتُ سَأَدْرُسُ القَانُونَ، {k|ثُمَّ غَيَّرْتُ رَأْيِي} · ثَلَاثَةَ أَيَّامٍ، {e|لَا أَرْبَعَةَ}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D3-L09. Questions 3–5 retrieve D3-L09 (sequence), D3-L04 (future vs past) and D3-L08 (negation in adverts).',
  },
  routes: {
    core: ['I can label what each question asks for.', 'I can catch a place, a job and a number.'],
    develop: ['I can catch the final plan after a change.', 'I can report what a speaker said.'],
    stretch: ['I can name each distractor and why it is wrong.', 'I can reconstruct three speakers in notes.'],
  },
  bridge: [
    { ar: 'رَأْيٌ', urdu: 'رائے', tr: 'rāy', en: 'opinion' },
    { ar: 'غَيَّرْتُ', urdu: 'تغیر / تبدیلی', tr: 'taghayyur', en: 'change → I changed' },
    { ar: 'قَرَارٌ / قَرَّرْتُ', urdu: 'قرار', tr: 'qarār', en: 'decision → I decided' },
    { ar: 'فَائِدَةٌ', urdu: 'فائدہ', tr: 'fāʾida', en: 'benefit' },
    { ar: 'تَوْفِيرٌ', urdu: 'وافر', tr: 'wāfir', en: 'plenty → saving' },
  ],
  bridgeNotes: 'URDU BRIDGE: رائے، تغیر، قرار (as in قرارداد, a resolution), فائدہ are all shared. Today’s key phrase غَيَّرْتُ رَأْيِي = “I changed my opinion” = Urdu میں نے اپنی رائے بدل دی.',
  core: ['سَأَدْرُسُ', 'أُرِيدُ أَنْ أُصْبِحَ', 'أَنْوِي أَنْ', 'أُخَطِّطُ لِـ', 'لِأَنَّ', 'وَلٰكِنَّ', 'بَيْنَمَا', 'فِي رَأْيِي', 'نَتِيجَةً لِذٰلِكَ'],
  vocabNotes: {
    1: 'Plans (FLEX): review from D3-L04. In listening, contrast سَأَدْرُسُ (I will study) with كُنْتُ سَأَدْرُسُ (I was going to study — a plan that changed).',
    2: 'Attitude and change signals: وَلٰكِنَّ and بَيْنَمَا often come just before the real answer.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · the trap and the answer (website rules 2–3)', title: 'First you hear … then the answer', ar: 'التَّغْيِيرُ وَالتَّصْحِيحُ',
      cols: [{ label: 'Example (website script)', w: 6.6, size: 21 }, { label: 'Trap', w: 2.9 }, { label: 'Answer', w: 2.83 }],
      rows: [
        { core: true, cells: [P('{e|كُنْتُ أَعْمَلُ} فِي مَتْجَرٍ، {k|لٰكِنَّنِي بَدَأْتُ} تَدْرِيبًا فِي مَكْتَبِ مُحَاسَبَةٍ.', 'I used to work in a shop, but I started training in an accounting office.'), 'shop (past)', 'accounting office'] },
        { core: true, cells: [P('{e|كُنْتُ سَأَدْرُسُ} القَانُونَ، {k|ثُمَّ غَيَّرْتُ رَأْيِي} وَقَرَّرْتُ دِرَاسَةَ الصَّحَافَةِ.', 'I was going to study law, then I changed my mind and decided to study journalism.'), 'law (old plan)', 'journalism'] },
        { cells: [P('أَعْمَلُ مِنَ المَنْزِلِ ثَلَاثَةَ أَيَّامٍ، {e|لَا أَرْبَعَةَ}.', 'I work from home three days, not four.'), 'four', 'three'] },
        { cells: [P('لَا يَعْمَلُ يَوْمَ الجُمُعَةِ {k|بَلْ} يَوْمَ السَّبْتِ.', 'He does not work on Friday but on Saturday.'), 'Friday', 'Saturday (after bal)'] },
      ],
      ltr: true,
      foot: 'kuntu + present = “I used to …”; kuntu sa- + present = “I was going to …” — both are NOT the final answer.',
      notes: `GRAMMAR PART 1 — website rules “Change of plan” (كَانَ سَـ … وَلٰكِنَّهُ قَرَّرَ أَنْ …: listen for the final decision, not the abandoned first plan) and “Exact detail” (لَيْسَ … بَلْ …: the correction after بل is the detail to record). Website example: كَانَ سَيَدْرُسُ القَانُونَ، وَلٰكِنَّهُ قَرَّرَ أَنْ يَدْرُسَ الإِعْلَامَ · لَا يَعْمَلُ يَوْمَ الجُمُعَةِ بَلْ يَوْمَ السَّبْتِ. Rows 1–3 are the three speakers of today’s website listening.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · reporting and attitude (website rules 1 and 4) · Develop / Stretch', title: 'Who said it — and how did they feel?', ar: 'قَالَ إِنَّهُ · يُفَضِّلُ · يَشْكُو',
      cards: [
        { chip: 'HE SAID · DEVELOP', color: '1D5FBF', head: 'قَالَ إِنَّهُ', big: 'قَالَ إِنَّهُ يَعْمَلُ فِي مَكْتَبٍ.', en: 'He said that he works in an office.', clue: 'inna + -hu = that he.' },
        { chip: 'SHE SAID · DEVELOP', color: 'C0386B', head: 'قَالَتْ إِنَّهَا', big: 'قَالَتْ إِنَّهَا سَتَدْرُسُ الصَّحَافَةَ.', en: 'She said that she will study journalism.', clue: 'qālat + innahā.' },
        { chip: 'ATTITUDE · STRETCH', color: '6B4C9A', head: 'يُفَضِّلُ · يَشْكُو مِنْ', big: 'يُفَضِّلُ السَّاعَاتِ المَرِنَةَ، وَيَشْكُو مِنْ طُولِ الطَّرِيقِ.', en: 'He prefers flexible hours and complains about the long journey.', clue: 'Verbs show feelings.' },
      ],
      error: { text: 'Report a girl with qālat innahā.', pairs: [['قَالَتْ إِنَّهَا تُحِبُّ الكِتَابَةَ.', 'قَالَ إِنَّهُ تُحِبُّ الكِتَابَةَ.']] },
      notes: `GRAMMAR PART 2 — website rules “Reported statement” (قَالَ إِنَّهُ / قَالَتْ إِنَّهَا: use the attached pronoun to retain speaker reference) and “Attitude signal” (يُفَضِّلُ / يَشْكُو مِنْ / يَشْعُرُ بِـ reveal the speaker’s evaluation). Website examples as shown.
After قَالَ use إِنَّ (with kasra), not أَنَّ — a fixed rule of reported speech.`,
    },
  ],
  rulesTitle: 'Listening discrimination and reported detail',
  quick: [0, 1, 2, 3],
  rest: [4, 5, 6, 7],
  ido: {
    title: 'Watch me beat a change-of-plan distractor',
    steps: [
      { head: '1 · Predict', ar: 'مَاذَا قَرَّرَتْ أَنْ تَدْرُسَ؟', think: 'A SUBJECT — her FINAL choice.' },
      { head: '2 · Listen', ar: '{e|كُنْتُ سَأَدْرُسُ القَانُونَ}، {k|ثُمَّ غَيَّرْتُ رَأْيِي}', think: 'Two subjects!' },
      { head: '3 · Reject', ar: '{e|القَانُونَ}', think: 'Old plan: distractor.' },
      { head: '4 · Verify', ar: 'وَ{k|قَرَّرْتُ دِرَاسَةَ الصَّحَافَةِ}', think: '“I decided” = final.' },
    ],
    legend: ['e', 'k'], legendLabels: { e: 'DISTRACTOR', k: 'EVIDENCE' },
    model: 'السُّؤَالُ يَطْلُبُ قَرَارَهَا النِّهَائِيَّ. سَمِعْتُ «{e|القَانُونَ}» وَ«{k|الصَّحَافَةِ}». اِسْتَبْعَدْتُ القَانُونَ لِأَنَّهَا قَالَتْ «{k|غَيَّرْتُ رَأْيِي}». قَالَتْ إِنَّهَا سَتَدْرُسُ الصَّحَافَةَ لِأَنَّهَا تُحِبُّ الكِتَابَةَ.',
    modelEn: 'The question asks for her final decision. I heard “law” and “journalism”. I eliminated law because she said “I changed my mind”. She said that she will study journalism because she loves writing.',
    notes: 'I DO (3 min) — think aloud on speaker 2 BEFORE students hear it, using only the slide. The model uses today’s reporting structure (قَالَتْ إِنَّهَا …) and the D3-L09 prep word أَسْتَبْعِدُ.',
  },
  patterns: [
    { ar: 'قَالَ إِنَّهُ يَعْمَلُ فِي مَكْتَبٍ.', en: 'He said that he works in an office.', tip: 'Report: qāla innahu.' },
    { ar: 'كَانَتْ سَتَدْرُسُ القَانُونَ، وَلٰكِنَّهَا قَرَّرَتْ دِرَاسَةَ الصَّحَافَةِ.', en: 'She was going to study law, but decided to study journalism.', tip: 'Final decision after but.' },
    { ar: 'يَعْمَلُ مِنَ المَنْزِلِ ثَلَاثَةَ أَيَّامٍ، لَا أَرْبَعَةَ.', en: 'He works from home three days, not four.', tip: 'Correction after lā.' },
    { ar: 'يُفَضِّلُ السَّاعَاتِ المَرِنَةَ.', en: 'He prefers flexible hours.', tip: 'Attitude verb.' },
  ],
  sorterCats: ['First / old plan (distractor)', 'Final plan (answer)'],
  sorterNotes: 'Then report each final plan aloud: قَالَ إِنَّهُ … / قَالَتْ إِنَّهَا …',
  patch: {
    mission: null,
    listening: {
      questions: [
        L('Where did speaker 1 work before?', ['in a shop', 'in an office', 'in a school'], 'كُنْتُ أَعْمَلُ فِي مَتْجَرٍ'),
        L('Where is his new placement?', ['an accounting office', 'a shop', 'a bank'], 'فِي مَكْتَبِ مُحَاسَبَةٍ'),
        L('Why is it better for him?', ['it is more useful for his plan', 'it is easier', 'it pays more'], 'أَكْثَرُ فَائِدَةً لِخُطَّتِي'),
        L('What was speaker 2 going to study first?', ['law', 'journalism', 'medicine'], 'كُنْتُ سَأَدْرُسُ القَانُونَ'),
        L('What is her final choice?', ['journalism', 'law', 'design'], 'قَرَّرْتُ دِرَاسَةَ الصَّحَافَةِ'),
        L('How many days does speaker 3 work from home?', ['three', 'four', 'five'], 'ثَلَاثَةَ أَيَّامٍ، لَا أَرْبَعَةَ'),
      ],
    },
    sorter: {
      title: 'Old plan or final plan?', instructions: 'From the three speakers: is it the first (abandoned) detail or the final one?',
      categories: ['First / old plan (distractor)', 'Final plan (answer)'],
      items: [
        { label: 'كُنْتُ أَعْمَلُ فِي مَتْجَرٍ', answer: 0 }, { label: 'كُنْتُ سَأَدْرُسُ القَانُونَ', answer: 0 }, { label: 'أَرْبَعَةَ أَيَّامٍ', answer: 0 },
        { label: 'تَدْرِيبٌ فِي مَكْتَبِ مُحَاسَبَةٍ', answer: 1 }, { label: 'قَرَّرْتُ دِرَاسَةَ الصَّحَافَةِ', answer: 1 }, { label: 'ثَلَاثَةَ أَيَّامٍ', answer: 1 },
      ],
    },
    mistakes: [
      { wrong: 'سَتَدْرُسُ المُتَحَدِّثَةُ القَانُونَ.', right: 'سَتَدْرُسُ المُتَحَدِّثَةُ الصَّحَافَةَ.', why: 'She changed her mind: the final plan counts.' },
      { wrong: 'يَعْمَلُ مِنَ المَنْزِلِ أَرْبَعَةَ أَيَّامٍ.', right: 'يَعْمَلُ مِنَ المَنْزِلِ ثَلَاثَةَ أَيَّامٍ.', why: '“Three, not four”: the correction counts.' },
      { wrong: 'قَالَتْ إِنَّهُ تُحِبُّ الكِتَابَةَ.', right: 'قَالَتْ إِنَّهَا تُحِبُّ الكِتَابَةَ.', why: 'A female speaker → innahā.' },
    ],
    grammar: {
      common_error: 'Do not choose the first detail you hear: wait for لٰكِنَّ, ثُمَّ غَيَّرْتُ رَأْيِي, لَا or بَلْ, and record the final detail (website reading strategy text; the website common error is generic).',
      quiz: [
        L('In كُنْتُ أَعْمَلُ فِي مَتْجَرٍ, is the shop his job now?', ['no — it was his old job', 'yes', 'we cannot know'], 'kuntu aʿmalu = I used to work.'),
        L('What does غَيَّرْتُ رَأْيِي mean?', ['I changed my mind', 'I gave my opinion', 'I decided early'], 'Change signal.'),
        L('Complete: قَالَتْ ___ سَتَدْرُسُ الصَّحَافَةَ.', ['إِنَّهَا', 'إِنَّهُ', 'أَنَا'], 'She said that she …'),
        L('In ثَلَاثَةَ أَيَّامٍ، لَا أَرْبَعَةَ, which number is the answer?', ['three', 'four', 'seven'], 'The detail before “not four”.'),
        L('In لَا يَعْمَلُ يَوْمَ الجُمُعَةِ بَلْ يَوْمَ السَّبْتِ, which day does he work?', ['Saturday', 'Friday', 'neither'], 'After bal.'),
        L('Which verb shows a complaint?', ['يَشْكُو مِنْ', 'يُفَضِّلُ', 'يَعْمَلُ'], 'yashkū min = complains about.'),
        L('What should you do in the second listening?', ['check change words, numbers and times', 'ignore the questions', 'write every word'], 'Website strategy text.'),
        L('Which phrase signals the FINAL decision?', ['قَرَّرْتُ', 'كُنْتُ سَأَ…', 'كُنْتُ أَعْمَلُ'], 'qarrartu = I decided.'),
      ],
    },
    final: [
      L('Complete: قَالَ ___ يَعْمَلُ فِي مَكْتَبٍ.', ['إِنَّهُ', 'إِنَّهَا', 'أَنَّنِي'], 'He said that he …'),
      L('Which word often introduces the real answer?', ['بَلْ', 'وَ', 'فِي'], 'bal = but rather.'),
      L('What does كُنْتُ سَأَدْرُسُ mean?', ['I was going to study', 'I will study', 'I study'], 'An old plan.'),
      L('What should you NOT do?', ['choose the first word you hear', 'read the questions first', 'listen for “but”'], 'Website strategy text.'),
    ],
    reading: {
      questions: [
        L('What should you identify before listening?', ['the type of detail needed', 'the speaker’s name', 'every new word'], 'نَوْعَ التَّفْصِيلِ المَطْلُوبِ'),
        L('What is the first listening for?', ['the speaker and the general idea', 'numbers only', 'spelling'], 'المُتَحَدِّثِ وَالفِكْرَةِ العَامَّةِ'),
        L('What is the second listening for?', ['change words, numbers and times', 'the speaker’s accent', 'nothing new'], 'كَلِمَاتِ التَّغْيِيرِ … وَالأَرْقَامِ وَالأَوْقَاتِ'),
        L('Which two change signals are named?', ['لٰكِنْ and بَلْ', 'وَ and ثُمَّ', 'فِي and عَلَى'], '«لٰكِنْ» وَ«بَلْ»'),
        L('Why not choose the first word you hear?', ['the speaker may correct it later', 'it is always wrong', 'it is too short'], 'إِذَا صَحَّحَهَا المُتَحَدِّثُ'),
        L('What is the purpose of the text?', ['to give listening strategies', 'to advertise a job', 'to describe a career'], 'Strategy notes.'),
      ],
    },
    speaking: {
      context: 'Explain your listening evidence',
      model: [
        ['A', 'مَاذَا قَرَّرَتِ المُتَحَدِّثَةُ الثَّانِيَةُ أَنْ تَدْرُسَ؟', 'What did the second speaker decide to study?'],
        ['B', 'قَالَتْ إِنَّهَا سَتَدْرُسُ الصَّحَافَةَ.', 'She said that she will study journalism.'],
        ['A', 'وَمَا المُشَتِّتُ؟', 'And what was the distractor?'],
        ['B', 'القَانُونُ، لِأَنَّهَا غَيَّرَتْ رَأْيَهَا.', 'Law, because she changed her mind.'],
      ],
    },
    writing: {
      prompt: 'Write concise notes reconstructing the speakers’ final jobs, plans, reasons and changed details.',
      model: 'المُتَحَدِّثُ الأَوَّلُ: كَانَ يَعْمَلُ فِي مَتْجَرٍ، وَلٰكِنَّهُ الآنَ يَتَدَرَّبُ فِي مَكْتَبِ مُحَاسَبَةٍ. قَالَ إِنَّ العَمَلَ أَصْعَبُ وَلٰكِنَّهُ أَكْثَرُ فَائِدَةً لِخُطَّتِهِ. المُتَحَدِّثَةُ الثَّانِيَةُ: كَانَتْ سَتَدْرُسُ القَانُونَ، ثُمَّ قَرَّرَتْ دِرَاسَةَ الصَّحَافَةِ لِأَنَّهَا تُحِبُّ الكِتَابَةَ. المُتَحَدِّثُ الثَّالِثُ: يَعْمَلُ مِنَ المَنْزِلِ ثَلَاثَةَ أَيَّامٍ، لَا أَرْبَعَةَ، وَيَقُولُ إِنَّ هٰذَا يُوَفِّرُ الوَقْتَ. المُشَتِّتَاتُ: المَتْجَرُ، القَانُونُ، أَرْبَعَةُ أَيَّامٍ.',
    },
  },
  hints: ['Which plan is final?', '“Three, not four”: which counts?', 'A female speaker: innahu or innahā?'],
  listenParts: [
    {
      title: 'Speaker 1: a new placement', script: T1, q: [0, 1, 2], min: 3,
      extra: [L('How does he describe the new work?', ['harder but more useful', 'easier and shorter', 'boring but well paid'], 'العَمَلُ أَصْعَبُ، وَلٰكِنَّهُ أَكْثَرُ فَائِدَةً')],
      tip: 'Label first: place? place? reason?\nTwo workplaces are heard: which is NOW?',
      routes: 'Core: questions 1 and 2. Develop/Stretch: all four.',
      gloss: [
        ['كُنْتُ أَعْمَلُ فِي مَتْجَرٍ بَعْدَ المَدْرَسَةِ،', 'I used to work in a shop after school,'],
        ['لٰكِنَّنِي بَدَأْتُ تَدْرِيبًا فِي مَكْتَبِ مُحَاسَبَةٍ هٰذَا الشَّهْرَ.', 'but I started a placement in an accounting office this month.'],
        ['العَمَلُ أَصْعَبُ، وَلٰكِنَّهُ أَكْثَرُ فَائِدَةً لِخُطَّتِي.', 'The work is harder, but more useful for my plan.'],
      ],
    },
    {
      title: 'Speaker 2: a change of plan', script: T2, q: [3, 4], min: 3,
      extra: [L('Why did she choose it?', ['she loves writing', 'it is easier', 'her friend studies it'], 'لِأَنَّنِي أُحِبُّ الكِتَابَةَ')],
      tip: 'Two subjects are heard.\nWait for “I changed my mind”.',
      routes: 'Core: question 1 (her first plan). Develop/Stretch: all three — question 2 is her FINAL choice.',
      gloss: [
        ['كُنْتُ سَأَدْرُسُ القَانُونَ،', 'I was going to study law,'],
        ['ثُمَّ غَيَّرْتُ رَأْيِي وَقَرَّرْتُ دِرَاسَةَ الصَّحَافَةِ', 'then I changed my mind and decided to study journalism'],
        ['لِأَنَّنِي أُحِبُّ الكِتَابَةَ.', 'because I love writing.'],
      ],
    },
    {
      title: 'Speaker 3: working from home', script: T3, q: [5], min: 2,
      extra: [L('How does it help him?', ['it saves time', 'it saves money', 'it is quieter'], 'يُسَاعِدُنِي عَلَى تَوْفِيرِ الوَقْتِ')],
      tip: 'Two numbers are heard.\nWhich one does he correct?',
      routes: 'Core: question 2. Develop/Stretch: both — question 1 is the corrected number.',
      gloss: [
        ['أَعْمَلُ مِنَ المَنْزِلِ ثَلَاثَةَ أَيَّامٍ، لَا أَرْبَعَةَ،', 'I work from home three days, not four,'],
        ['وَهٰذَا يُسَاعِدُنِي عَلَى تَوْفِيرِ الوَقْتِ.', 'and this helps me save time.'],
      ],
    },
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'أَيْنَ يَعْمَلُ المُتَحَدِّثُ الأَوَّلُ الآنَ؟' },
      { route: 'develop', ar: 'مَاذَا قَرَّرَتِ المُتَحَدِّثَةُ الثَّانِيَةُ؟ وَلِمَاذَا؟' },
      { route: 'develop', ar: 'كَمْ يَوْمًا يَعْمَلُ المُتَحَدِّثُ الثَّالِثُ مِنَ المَنْزِلِ؟' },
      { route: 'stretch', ar: 'مَا المُشَتِّتُ فِي كُلِّ نَصٍّ؟' },
    ],
    stems: [
      { route: 'core', ar: 'يَعْمَلُ الآنَ فِي ______ .' },
      { route: 'develop', ar: 'قَالَتْ إِنَّهَا سَتَدْرُسُ ______ لِأَنَّ ______ .' },
      { route: 'develop', ar: 'يَعْمَلُ مِنَ المَنْزِلِ ______ ، لَا ______ .' },
      { route: 'stretch', ar: 'المُشَتِّتُ ______ لِأَنَّ ______ .' },
    ],
    modelEn: ['What did the second speaker decide to study?', 'She said that she will study journalism.'],
    notes: 'Teacher-written prompts and model (the website prompts are generic). Students explain HOW they listened. Model continues: A: وَمَا المُشَتِّتُ؟ B: القَانُونُ، لِأَنَّهَا غَيَّرَتْ رَأْيَهَا.',
  },
  write: {
    core: { amount: '3 notes', how: 'One note per speaker: the FINAL job / plan / number.' },
    develop: { amount: '6 sentences', how: 'Report each speaker (qāla innahu / qālat innahā) with the final detail and one reason.' },
    stretch: { amount: '80–100 words', how: 'Website task: concise notes on all three speakers + the distractor in each text.' },
  },
  frames: {
    core: [
      { en: 'Speaker 1 now trains in …', ar: 'المُتَحَدِّثُ الأَوَّلُ يَتَدَرَّبُ الآنَ فِي ______ .' },
      { en: 'Speaker 2 will study …', ar: 'المُتَحَدِّثَةُ الثَّانِيَةُ سَتَدْرُسُ ______ .' },
      { en: 'Speaker 3 works from home … days.', ar: 'المُتَحَدِّثُ الثَّالِثُ يَعْمَلُ مِنَ المَنْزِلِ ______ أَيَّامٍ.' },
    ],
    develop: [
      { en: 'He said that the work is …', ar: 'قَالَ إِنَّ العَمَلَ ______ .' },
      { en: 'She was going to study … but …', ar: 'كَانَتْ سَتَدْرُسُ ______ ، وَلٰكِنَّهَا ______ .' },
      { en: 'She said that she …', ar: 'قَالَتْ إِنَّهَا ______ .' },
      { en: 'The distractor was … because …', ar: 'كَانَ المُشَتِّتُ ______ لِأَنَّ ______ .' },
    ],
    bank: ['قَالَ إِنَّهُ', 'قَالَتْ إِنَّهَا', 'كَانَ يَعْمَلُ', 'كَانَتْ سَتَدْرُسُ', 'غَيَّرَتْ رَأْيَهَا', 'قَرَّرَتْ', 'لَا … بَلْ', 'مَكْتَبُ مُحَاسَبَةٍ', 'الصَّحَافَةُ', 'ثَلَاثَةُ أَيَّامٍ', 'مُشَتِّتٌ', 'أَسْتَبْعِدُ'],
  },
  stretch: [
    ['كَانَ يَعْمَلُ … وَلٰكِنَّهُ الآنَ …', 'he used to work … but now …'],
    ['غَيَّرَتْ رَأْيَهَا', 'she changed her mind'],
    ['أَكْثَرُ فَائِدَةً لِخُطَّتِهِ', 'more useful for his plan'],
    ['يُسَاعِدُهُ عَلَى تَوْفِيرِ الوَقْتِ', 'it helps him save time'],
    ['اِسْتَبْعَدْتُ … لِأَنَّ …', 'I eliminated … because …'],
  ],
  modelEn: 'Speaker 1: he used to work in a shop, but now he is training in an accounting office. He said the work is harder but more useful for his plan. Speaker 2: she was going to study law, then decided to study journalism because she loves writing. Speaker 3: he works from home three days, not four, and says this saves time. Distractors: the shop, law, four days.',
  find: ['an old plan vs a final plan', 'qāla innahu / qālat innahā', 'a corrected number', 'the distractors'],
  modelNotes: 'Teacher-written model notes (the website model for this lesson is a placeholder). Evidence: كَانَ يَعْمَلُ … وَلٰكِنَّهُ الآنَ · قَالَ إِنَّ … · كَانَتْ سَتَدْرُسُ … ثُمَّ قَرَّرَتْ · ثَلَاثَةَ أَيَّامٍ، لَا أَرْبَعَةَ · المُشَتِّتَاتُ.',
  selfCheck: [
    { route: 'core', text: 'I labelled each question before listening.' },
    { route: 'core', text: 'My answers are the FINAL details.' },
    { route: 'develop', text: 'I reported with qāla innahu / qālat innahā.' },
    { route: 'develop', text: 'I caught the correction after lā / bal.' },
    { route: 'stretch', text: 'I named a distractor in each text.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['قَبْلَ الاِسْتِمَاعِ', 'before listening'], ['حَدِّدْ', 'identify'], ['نَوْعَ التَّفْصِيلِ', 'the type of detail'], ['رَكِّزْ عَلَى', 'focus on'], ['الفِكْرَةِ العَامَّةِ', 'the general idea'],
    ['اِنْتَبِهْ إِلَى', 'pay attention to'], ['كَلِمَاتِ التَّغْيِيرِ', 'change words'], ['الأَرْقَامِ وَالأَوْقَاتِ', 'numbers and times'], ['لَا تَخْتَرْ', 'do not choose'], ['صَحَّحَهَا', 'corrected it'],
  ],
  prep: {
    words: [['مُرَاجَعَةٌ شَامِلَةٌ', 'a complete review', 'pl. مُرَاجَعَاتٌ'], ['تَحْلِيلُ الأَخْطَاءِ', 'error analysis', 'sing. خَطَأٌ'], ['أَوْلَوِيَّةٌ', 'a priority', 'pl. أَوْلَوِيَّاتٌ'], ['نُقْطَةُ قُوَّةٍ', 'a strength', 'pl. نِقَاطُ قُوَّةٍ'], ['أُحَسِّنُ', 'I improve', 'يُحَسِّنُ he']],
    questionEn: 'Look back at D3-L01 to D3-L10: which grammar point do you find hardest? Bring one mistake you made.',
    questionAr: 'أَصْعَبُ قَاعِدَةٍ لِي هِيَ …',
    homework: {
      core: 'Website D3-L10: redo the listening; learn the five review words.',
      develop: 'Report the three speakers in 6 sentences (qāla innahu / qālat innahā).',
      stretch: 'Website writing task: concise reconstruction notes with distractors (80–100 words).',
    },
    wordsSource: 'The five words prepare the D3-L11 review lesson (error analysis and assessment preparation).',
  },
  remember: 'Remember: the first detail is often a trap — wait for “but”, “then I changed my mind”, “not” and “bal”.',
});

module.exports = { meta, slides };
