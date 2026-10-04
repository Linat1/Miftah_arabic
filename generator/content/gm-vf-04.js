'use strict';
/* GM-VF-04 · Form IV: Causing and Bringing About — website: Mastery & Revision › Grammar › Arabic Verb Forms › Form IV (hamza prefix
 * in the past: afʿala; present yufʿilu — the hamza is not kept after the present prefix; kharaja “go out” vs akhraja “take out”: a common
 * causative link, but many Form IV meanings are lexical; family adkhala, akhraja, aʿlana; clinic: not every verb starting with alif is
 * Form IV — aktubu is Form I “I write”; apply: a message about organising a meeting). Website self-check items used via W. Pattern
 * extras, conjugation, contrast, sorter, reading and model are teacher-written on the website content. */
const G = require('./gm-common');
const V = require('./gm-vf-common');
const { q } = G;

const KEY = 'grammar__07a-verb-forms__form-04';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-VF-04', fileTitle: 'Form_IV', title: 'Form IV: Causing and Bringing About', arabic: 'الْوَزْنُ الرَّابِعُ',
  focus: 'Form IV adds a- at the front of the past: kharaja (go out) → akhraja (take out). In the present the a- disappears: yukhriju. It often means “make something happen” — but learn each verb.',
  icon: 'FaPaperPlane',
});

const slides = G.gmLesson({
  code: 'GM-VF-04', site: KEY,
  support: `• Core: أَرْسَلَ · يُرْسِلُ and the family أَدْخَلَ · أَخْرَجَ · أَعْلَنَ in messages and announcements. Develop: the present (أُرْسِلُ · تُغْلِقِينَ · يُعْلِنُونَ) and the verbal noun إِفْعَالٌ (إِرْسَالٌ · إِعْلَانٌ · إِغْلَاقٌ). Stretch: Form I → IV turns “go / come” verbs into “take / bring” verbs (خَرَجَ / أَخْرَجَ · دَخَلَ / أَدْخَلَ · حَضَرَ / أَحْضَرَ).
• Website warning: in أُرْسِلُ (I send), the a- / u- at the front is the person prefix — the Form IV a- of the past has gone. And أَكْتُبُ (I write) is Form I, not Form IV.
• Link: mughlaq (closed) from GM-V-12 is the Form IV passive participle of aghlaqa.`,
  teach: 'Pattern card; family; conjugation; Form I vs IV.',
  wedo: 'Go out → take out; sort Form IV past / Form I “I” present; repair.',
  next: { nextCode: 'GM-VF-05', nextTitle: 'Form V: Learning and Developing', nextAr: 'الْوَزْنُ الْخَامِسُ' },
  doNow: {
    questions: [
      q('Which verb is Form III?', ['سَاعَدَ', 'سَعِدَ', 'أَسْعَدَ'], 'Long ā after the first letter (GM-VF-03).'),
      q('Kharaja means to go out. Akhraja means …', ['to take out', 'to come in', 'to go out again'], 'The prep question.'),
      q('Arsala means …', ['to send', 'to receive', 'to write'], 'Prep word.'),
      q('Choose the present of أَرْسَلَ.', ['يُرْسِلُ', 'يَأْرُسُلُ', 'يَرْسُلُ'], 'The a- disappears: yu-.'),
      q('Aʿlana means …', ['to announce', 'to know', 'to teach'], 'Prep word.'),
    ],
    keyIdea: { text: 'Form IV = a- before the root in the past (afʿala). Present = yu- + root, with no a- (yufʿilu).', ar: '{k|خَرَجَ} ‖ {e|أَخْرَجَ} · {e|يُخْرِجُ}' },
    retrieves: 'Teacher-written retrieval from GM-VF-03 and its prep words (arsala, akhraja, adkhala, aʿlana).',
  },
  objectives: ['Recognise Form IV by the a- before the root in the past.', 'Form the present with yu- and no a-.', 'Use Form IV verbs for sending, announcing and bringing.', 'Tell Form IV from Form I “I” present verbs.'],
  routes: {
    core: ['I use arsala and aʿlana in sentences.', 'I write a short message with Form IV.'],
    develop: ['I conjugate arsala in past and present.', 'I use irsāl and iʿlān.'],
    stretch: ['I turn kharaja, dakhala and ḥaḍara into Form IV.', 'I explain why aktubu is not Form IV.'],
  },
  terms: {
    items: [
      { ar: 'الْوَزْنُ الرَّابِعُ', en: 'Form IV', note: 'أَفْعَلَ' },
      { ar: 'هَمْزَةُ الْوَزْنِ', en: 'the Form IV a- (past)', note: 'أَرْسَلَ' },
      { ar: 'حَرْفُ الْمُضَارَعَةِ', en: 'the present prefix', note: 'أُرْسِلُ' },
      { ar: 'الْفِعْلُ الْمُتَعَدِّي', en: 'verb with an object', note: 'أَخْرَجَ الْكِتَابَ' },
      { ar: 'إِفْعَالٌ', en: 'Form IV verbal noun', note: 'إِعْلَانٌ' },
      { ar: 'مُفْعِلٌ', en: 'Form IV doer', note: 'مُرْسِلٌ' },
    ],
  },
  explain: [
    V.patternCard({
      roman: 'IV', title: 'a- in front of the root', ar: 'أَفْعَلَ · يُفْعِلُ',
      template: ['أَفْعَلَ', 'يُفْعِلُ', 'إِفْعَالٌ', 'مُفْعِلٌ', 'أَفْعِلْ'],
      model: ['أَرْسَلَ', 'يُرْسِلُ', 'إِرْسَالٌ', 'مُرْسِلٌ', 'أَرْسِلْ'], meaning: 'to send',
      more: [['to take out', 'أَخْرَجَ', 'يُخْرِجُ', 'إِخْرَاجٌ', 'مُخْرِجٌ', 'أَخْرِجْ'], ['to announce', 'أَعْلَنَ', 'يُعْلِنُ', 'إِعْلَانٌ', 'مُعْلِنٌ', 'أَعْلِنْ'], ['to close', 'أَغْلَقَ', 'يُغْلِقُ', 'إِغْلَاقٌ', 'مُغْلِقٌ', 'أَغْلِقْ']],
      foot: 'Website: a hamza prefix is added in the past: afʿala. The common present is yufʿilu — the past hamza is not kept as an extra alif after the present prefix. Note: mukhrij = film director!',
      notes: 'PART 1 (3 min) — website “Root and pattern”. The Form IV command keeps the a-: arsil! (GM-V-07 link).',
    }),
    V.familyTable({
      roman: 'IV', title: 'The Form IV family', ar: 'أُسْرَةُ الْوَزْنِ الرَّابِعِ',
      rows: [
        ['أَرْسَلَ · يُرْسِلُ', 'to send', 'أُرْسِلُ رِسَالَةً إِلَى صَدِيقِي.'],
        ['أَدْخَلَ · يُدْخِلُ', 'to bring in', 'أَدْخَلَتِ الْمُعَلِّمَةُ الطُّلَّابَ إِلَى الْفَصْلِ.'],
        ['أَعْلَنَ · يُعْلِنُ', 'to announce', 'أَعْلَنَ الْمُدِيرُ مَوْعِدَ الِاجْتِمَاعِ.'],
        ['أَخْرَجَ · يُخْرِجُ', 'to take out', 'أَخْرَجْتُ الْكِتَابَ مِنَ الْحَقِيبَةِ.'],
        ['أَغْلَقَ · يُغْلِقُ', 'to close', 'أَغْلِقِ النَّافِذَةَ مِنْ فَضْلِكَ.'],
        ['أَكْمَلَ · يُكْمِلُ', 'to complete', 'أَكْمَلْنَا الْمَشْرُوعَ أَمْسِ.'],
      ],
      foot: 'Website: kharaja means to go out; akhraja can mean to take or bring something out — a common causative link, but many Form IV meanings are lexical.',
      notes: 'PART 2 (4 min) — website “Learn the family” (first three examples are the website sentences).',
    }),
    V.conjTable({
      roman: 'IV', verb: 'arsala', title: 'Where did the a- go?', ar: 'تَصْرِيفُ «أَرْسَلَ»',
      rows: [
        ['أَنَا', 'أَرْسَلْتُ', 'أُرْسِلُ', 'u- = I (not Form IV a-)'],
        ['هُوَ', 'أَرْسَلَ', 'يُرْسِلُ', 'yu-'],
        ['هِيَ', 'أَرْسَلَتْ', 'تُرْسِلُ', 'tu-'],
        ['أَنْتِ', 'أَرْسَلْتِ', 'تُرْسِلِينَ', 'tu- … -īna'],
        ['نَحْنُ', 'أَرْسَلْنَا', 'نُرْسِلُ', 'nu-'],
        ['هُمْ', 'أَرْسَلُوا', 'يُرْسِلُونَ', 'yu- … -ūna'],
      ],
      foot: 'Website “Look closely”: arsala → yursilu → ursilu. In ursilu (I send) the initial alif is the first-person prefix, not the Form IV hamza.',
      notes: 'PART 3 (3 min). The a- stays in the whole past column and disappears in the whole present column.',
    }),
  ],
  quick: [
    W(/Self-check/, 1, { prompt: 'Which form means “I send”?', feedback: 'Ursilu uses the first-person present prefix.' }),
    W(/Self-check/, 2, { prompt: 'Why is aktubu not Form IV?', feedback: 'Identify the root, the stem and the person separately.' }),
    q('Choose “she announced”.', ['أَعْلَنَتْ', 'تُعْلِنُ', 'عَلِمَتْ'], 'Past + -at; the a- stays.'),
    q('Choose “we close”.', ['نُغْلِقُ', 'نَغْلِقُ', 'أَغْلَقْنَا'], 'nu- and no a-.'),
  ],
  quickNote: 'website Self-check items, plus two teacher items.',
  ido: {
    title: 'Watch me write a meeting message with Form IV',
    steps: [
      { head: 'Past', ar: 'أَرْسَلْتُ', think: 'a- stays in the past.' },
      { head: 'Past', ar: 'أَعْلَنَ', think: 'He announced.' },
      { head: 'Future', ar: 'سَأُرْسِلُ', think: 'sa- + u- (no extra a-).' },
      { head: 'Noun', ar: 'الْإِعْلَانُ', think: 'ifʿāl.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'PAST', e: 'FUTURE' },
    model: '{k|أَرْسَلْتُ} رِسَالَةً إِلَى صَدِيقِي أَمْسِ. وَ{k|أَعْلَنَ} الْمُدِيرُ مَوْعِدَ الِاجْتِمَاعِ. {e|سَأُرْسِلُ} الْمَعْلُومَاتِ غَدًا.',
    modelEn: 'I sent a message to my friend yesterday. The head teacher announced the meeting time. I will send the information tomorrow.',
    notes: 'Website “Apply the form” model answer.',
  },
  models: [
    { ar: 'أَعْلَنَ الْمُدِيرُ مَوْعِدَ الِاجْتِمَاعِ.', en: 'The head teacher announced the meeting time.', tip: 'Website.' },
    { ar: 'أَدْخَلَتِ الْمُعَلِّمَةُ الطُّلَّابَ إِلَى الْفَصْلِ.', en: 'The teacher brought the students into the classroom.', tip: 'Bring in.' },
    { ar: 'أَحْضَرْتُ كُتُبِي.', en: 'I brought my books.', tip: 'ḥaḍara → aḥḍara.' },
    { ar: 'الْمَتْجَرُ مُغْلَقٌ.', en: 'The shop is closed.', tip: 'Form IV passive participle.' },
  ],
  wedoSlides: [
    V.contrastTable({
      roman: 'IV', title: 'Go out → take out', ar: 'مِنَ الْأَوَّلِ إِلَى الرَّابِعِ',
      rows: [
        ['خَرَجَ', 'to go out', 'أَخْرَجَ', 'to take something out'],
        ['دَخَلَ', 'to go in', 'أَدْخَلَ', 'to bring something in'],
        ['حَضَرَ', 'to attend / come', 'أَحْضَرَ', 'to bring'],
        ['جَلَسَ', 'to sit', 'أَجْلَسَ', 'to seat someone'],
        ['ضَحِكَ', 'to laugh', 'أَضْحَكَ', 'to make someone laugh'],
      ],
      foot: 'Website Stretch: Form IV often turns a verb with no object into one with an object — “I went out” → “I took the book out”.',
      notes: 'WE DO (3 min). Students make a sentence for each Form IV verb with an object.',
    }),
    {
      type: 'sorter', min: 2, eyebrow: 'We do · website clinic · not every alif is Form IV', title: 'Form IV past, or Form I “I …”?', ar: 'وَزْنٌ رَابِعٌ أَمْ «أَنَا»؟',
      categories: ['Form IV past (he …)', 'Form I present (I …)'],
      items: [['أَرْسَلَ', 0], ['أَخْرَجَ', 0], ['أَعْلَنَ', 0], ['أَغْلَقَ', 0], ['أَكْتُبُ', 1], ['أَدْرُسُ', 1], ['أَجْلِسُ', 1], ['أَفْهَمُ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Clue: Form IV past ends in -a (arsala); the Form I “I” present ends in -u (aktubu).',
    },
  ],
  mistakes: [
    { wrong: 'هُوَ يَرْسِلُ الرِّسَالَةَ', right: 'هُوَ يُرْسِلُ الرِّسَالَةَ', why: 'Form IV present: yu-.' },
    { wrong: 'سَأَأَرْسِلُ الصُّوَرَ', right: 'سَأُرْسِلُ الصُّوَرَ', why: 'The past a- is not kept after the prefix (website).' },
    { wrong: 'خَرَجْتُ الْكِتَابَ مِنَ الْحَقِيبَةِ', right: 'أَخْرَجْتُ الْكِتَابَ مِنَ الْحَقِيبَةِ', why: 'To take something out = Form IV akhraja.' },
  ],
  hints: ['ya- or yu-?', 'Two alifs?', 'Go out or take out?'],
  practice: [
    W(/Self-check/, 0, { prompt: 'Which pair is a Form IV past and present?', feedback: 'The normal Form IV present is yufʿilu.' }),
    q('What is the verbal noun of أَعْلَنَ?', ['إِعْلَانٌ', 'عِلْمٌ', 'مُعْلِنٌ'], 'ifʿāl.'),
    q('Choose “they brought the books in”.', ['أَدْخَلُوا الْكُتُبَ', 'دَخَلُوا الْكُتُبَ', 'يُدْخِلُونَ الْكُتُبَ'], 'Past Form IV + -ū.'),
    q('Choose “Close the door!” (to a boy).', ['أَغْلِقِ الْبَابَ', 'اُغْلُقِ الْبَابَ', 'تُغْلِقُ الْبَابَ'], 'Form IV command keeps the a-.'),
  ],
  practiceLabel: 'website Self-check item and teacher-written questions',
  read: {
    title: 'An email about the trip', label: 'reading for Form IV (teacher-written email)',
    text: 'أَعِزَّائِي الطُّلَّابَ، أَعْلَنَتِ الْمَدْرَسَةُ مَوْعِدَ الرِّحْلَةِ: يَوْمَ الْأَرْبِعَاءِ. سَأُرْسِلُ لَكُمُ الْبَرْنَامَجَ غَدًا. مِنْ فَضْلِكُمْ، أَحْضِرُوا الْمَاءَ وَالطَّعَامَ، وَأَكْمِلُوا الِاسْتِمَارَةَ قَبْلَ الْجُمُعَةِ. لَا تُخْرِجُوا الْهَوَاتِفَ فِي الْحَافِلَةِ. سَتُغْلَقُ الْأَبْوَابُ فِي الثَّامِنَةِ تَمَامًا!',
    glossary: [['أَعِزَّائِي', 'dear (pl.)'], ['الْبَرْنَامَجَ', 'the programme'], ['الِاسْتِمَارَةَ', 'the form'], ['تَمَامًا', 'exactly']],
    task: 'Website: write a message about organising an event. First, underline every Form IV verb here.',
    questions: [
      q('What will the teacher send tomorrow?', ['the programme', 'the form', 'the food'], 'Saʾursilu lakum al-barnāmaj.'),
      q('What must students bring?', ['water and food', 'phones', 'the programme'], 'Aḥḍirū l-māʾa wa-ṭ-ṭaʿām.'),
      q('What must not be taken out on the bus?', ['phones', 'water', 'the form'], 'Lā tukhrijū l-hawātif.'),
      q('Which verb is a Form IV command to a group?', ['أَكْمِلُوا', 'أَعْلَنَتْ', 'سَأُرْسِلُ'], 'akmilū = complete!'),
    ],
    qNote: 'Teacher-written email for the website “Apply the form” task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: organising an event', source: 'website “Apply the form”',
    prompts: [
      { route: 'core', ar: 'لِمَنْ أَرْسَلْتَ رِسَالَةً الْيَوْمَ؟' },
      { route: 'develop', ar: 'مَاذَا أَعْلَنَتِ الْمَدْرَسَةُ هَذَا الْأُسْبُوعَ؟' },
      { route: 'stretch', ar: 'نَظِّمْ حَفْلَةً: مَاذَا سَتُرْسِلُ؟ وَمَاذَا يَجِبُ أَنْ يُحْضِرَ الضُّيُوفُ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَرْسَلْتُ رِسَالَةً إِلَى ______ .' },
      { route: 'develop', ar: 'أَعْلَنَتِ الْمَدْرَسَةُ ______ .' },
      { route: 'stretch', ar: 'سَأُرْسِلُ ______ ، وَيَجِبُ أَنْ يُحْضِرَ الضُّيُوفُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'هَلْ أَرْسَلْتِ الدَّعَوَاتِ؟', en: 'Have you sent the invitations? (to a girl)' },
      { who: 'B', ar: 'نَعَمْ، أَرْسَلْتُهَا أَمْسِ، وَأَعْلَنْتُ الْمَوْعِدَ فِي الصَّفِّ. سَأُحْضِرُ الْكَعْكَةَ، وَسَيُكْمِلُ أَخِي الزِّينَةَ.', en: 'Yes, I sent them yesterday, and I announced the time in class. I will bring the cake, and my brother will finish the decorations.' },
    ],
    notes: 'Website: what you sent, what was announced, and what you will send tomorrow.',
  },
  write: {
    siteTask: 'Write a short message about organising a meeting. Explain what you sent, what the headteacher announced and what you will send tomorrow.',
    core: { amount: '3 sentences', task: 'Website task.', how: 'arsala · aʿlana · sa-ursilu.' },
    develop: { amount: '6 sentences', task: 'Add aḥḍara, akmala and aghlaqa.', how: 'Past keeps a-; present drops it.' },
    stretch: { amount: '8 sentences', task: 'An event email with Form IV commands and a verbal noun.', how: 'aḥḍirū · akmilū · iʿlān.' },
  },
  frames: {
    core: [
      { en: 'I sent … to …', ar: 'أَرْسَلْتُ ______ إِلَى ______ .' },
      { en: 'The head teacher announced …', ar: 'أَعْلَنَ الْمُدِيرُ ______ .' },
      { en: 'I will send … tomorrow', ar: 'سَأُرْسِلُ ______ غَدًا.' },
      { en: 'Close … please', ar: 'أَغْلِقِ ______ مِنْ فَضْلِكَ.' },
    ],
    develop: [
      { en: 'I brought …', ar: 'أَحْضَرْتُ ______ .' },
      { en: 'We completed …', ar: 'أَكْمَلْنَا ______ .' },
      { en: 'Bring (all of you) …', ar: 'أَحْضِرُوا ______ .' },
      { en: 'The announcement is about …', ar: 'الْإِعْلَانُ عَنْ ______ .' },
    ],
    bank: ['أَرْسَلَ · يُرْسِلُ', 'أَعْلَنَ · يُعْلِنُ', 'أَخْرَجَ · يُخْرِجُ', 'أَدْخَلَ · يُدْخِلُ', 'أَغْلَقَ · يُغْلِقُ', 'أَكْمَلَ · يُكْمِلُ', 'أَحْضَرَ · يُحْضِرُ', 'إِعْلَانٌ', 'إِرْسَالٌ'],
  },
  stretchTask: {
    task: 'Write an email organising an event with five Form IV verbs, two Form IV commands and a verbal noun.',
    checklist: ['Five Form IV verbs.', 'The a- kept in the past, dropped in the present.', 'Two Form IV commands (aḥḍirū, akmilū).', 'One verbal noun (iʿlān, irsāl).', 'One Form I / Form IV pair.'],
    phrases: [['أَعِزَّائِي', 'dear (all)'], ['مَوْعِدُ', 'the time / date of'], ['قَبْلَ يَوْمِ', 'before the day of'], ['مِنْ فَضْلِكُمْ', 'please (pl.)'], ['مَعَ التَّحِيَّةِ', 'with regards'], ['لَا تَنْسَوْا', 'don’t forget (pl.)']],
  },
  model: {
    text: 'أَعِزَّائِي أَعْضَاءَ النَّادِي، أَعْلَنَ الْمُدِيرُ أَمْسِ مَوْعِدَ الْحَفْلِ السَّنَوِيِّ: يَوْمَ السَّبْتِ فِي السَّاعَةِ الرَّابِعَةِ. أَرْسَلْتُ الدَّعَوَاتِ إِلَى الْآبَاءِ، وَسَأُرْسِلُ الْبَرْنَامَجَ غَدًا. مِنْ فَضْلِكُمْ، أَحْضِرُوا صُوَرًا مِنْ أَنْشِطَةِ السَّنَةِ، وَأَكْمِلُوا الْمَعْرِضَ قَبْلَ الْجُمُعَةِ. سَيُخْرِجُ أَحْمَدُ مَسْرَحِيَّةً قَصِيرَةً. لَا تَنْسَوْا أَنْ تُغْلِقُوا الْقَاعَةَ بَعْدَ الْحَفْلِ. مَعَ التَّحِيَّةِ، سَارَةُ.',
    en: 'Dear club members, yesterday the head teacher announced the date of the annual party: Saturday at four o’clock. I have sent the invitations to the parents, and I will send the programme tomorrow. Please bring photos of this year’s activities, and complete the exhibition before Friday. Aḥmad will direct a short play. Don’t forget to close the hall after the party. Regards, Sārah.',
    find: ['Form IV past', 'Form IV present / future', 'Form IV command', 'verbal noun'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My Form IV past verbs start with a-.' },
    { route: 'core', text: 'My present forms use yu- / u- with no extra a-.' },
    { route: 'develop', text: 'I used a verbal noun like iʿlān.' },
    { route: 'develop', text: 'My Form IV verbs have objects (send what? bring what?).' },
    { route: 'stretch', text: 'I did not confuse aktubu (I write) with Form IV.' },
  ],
  exit: [
    W(/Quick pattern/, 0, { prompt: 'Which pair is a Form IV past and present?', feedback: 'The normal Form IV present is yufʿilu.' }),
    q('Choose “I took the book out”.', ['أَخْرَجْتُ الْكِتَابَ', 'خَرَجْتُ الْكِتَابَ', 'أُخْرِجُ الْكِتَابَ'], 'Form IV past + -tu.'),
    q('Which word is Form IV?', ['أَعْلَنَ', 'أَعْلَمُ', 'عَلَّمَ'], 'aʿlamu = I know (Form I “I”).'),
  ],
  mastery: false,
  prep: {
    words: [['تَعَلَّمَ · يَتَعَلَّمُ', 'to learn', '—'], ['تَذَكَّرَ · يَتَذَكَّرُ', 'to remember', '—'], ['تَحَسَّنَ · يَتَحَسَّنُ', 'to improve', '—'], ['تَطَوَّرَ · يَتَطَوَّرُ', 'to develop', '—'], ['عَلَّمَ', 'to teach (Form II)', '—']],
    questionEn: 'ʿAllama = to teach. Add ta- at the front: taʿallama. What does it mean?',
    questionAr: 'عَلَّمَ · تَعَلَّمَ',
    homework: {
      core: 'Write five sentences with arsala, aʿlana and aghlaqa.',
      develop: 'Conjugate akhraja in past and present for six persons.',
      stretch: 'An event email with five Form IV verbs.',
    },
    wordsSource: 'The five words prepare GM-VF-05 (website Verb Forms: Form V).',
  },
  remember: 'Remember: Form IV = a- before the root in the past (afʿala) · present yu- with no a- (yursilu) · noun ifʿāl · command keeps a- (arsil!) · aktubu (I write) is NOT Form IV.',
});

module.exports = { meta, slides };
