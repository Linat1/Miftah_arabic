'use strict';
/* GM-VF-07 · Form VII: Change of State — website: Mastery & Revision › Grammar › Arabic Verb Forms › Form VII (prefix in- before the
 * root: infaʿala; present yanfaʿilu; the first alif is hamzat al-waṣl; kasara “break something” vs inkasara “break / become broken”;
 * family infataḥa, inqaṭaʿa, inṣarafa; clinic: Form VII is not the grammatical passive — kusira and inkasara are different forms;
 * apply: an account of a minor problem). Website correction: kaʾs (glass) is normally feminine — اِنْكَسَرَتِ الْكَأْسُ; the website
 * writes it masculine, so the deck uses al-kūb (cup, masculine) and skips the self-check item built on it. Pattern extras, conjugation,
 * contrast, sorter, reading and model are teacher-written on the website content. */
const G = require('./gm-common');
const V = require('./gm-vf-common');
const { q } = G;

const KEY = 'grammar__07a-verb-forms__form-07';
const S = G.site(KEY);
const W = (re, i, patch = {}) => G.fq({ ...G.quiz(S, re)[i], ...patch });

const meta = G.meta({
  code: 'GM-VF-07', fileTitle: 'Form_VII', title: 'Form VII: Change of State', arabic: 'الْوَزْنُ السَّابِعُ',
  focus: 'Form VII puts in- before the root: kasara (break something) → inkasara (break / get broken). Present: yankasiru. It describes what happens to the subject — no doer, no object.',
  icon: 'FaBolt',
});

const slides = G.gmLesson({
  code: 'GM-VF-07', site: KEY,
  support: `• Core: اِنْكَسَرَ · يَنْكَسِرُ and the family اِنْفَتَحَ · اِنْقَطَعَ · اِنْصَرَفَ to report small problems. Develop: present forms (يَنْكَسِرُ · تَنْقَطِعُ · أَنْصَرِفُ) and the verbal noun اِنْفِعَالٌ (اِنْقِطَاعٌ · اِنْصِرَافٌ). Stretch: Form I → VII (كَسَرَ / اِنْكَسَرَ) and the website clinic: Form VII is not the passive (كُسِرَ vs اِنْكَسَرَ).
• Website point: the first alif is hamzat al-waṣl — it is not pronounced after a word: ثُمَّ انْقَطَعَ (thumma nqaṭaʿa).
• Form VII verbs have no object: the subject is the thing that changes.`,
  teach: 'Pattern card; family; conjugation; Form I vs VII vs passive.',
  wedo: 'Break → get broken; sort Form VII / passive; repair.',
  next: { nextCode: 'GM-VF-08', nextTitle: 'Form VIII: Meeting, Choosing and Acquiring', nextAr: 'الْوَزْنُ الثَّامِنُ' },
  doNow: {
    questions: [
      q('Which verb is Form VI?', ['تَعَاوَنَ', 'تَعَلَّمَ', 'عَاوَنَ'], 'ta- + ā (GM-VF-06).'),
      q('Kasara l-waladu l-kūba means …', ['the boy broke the cup', 'the cup broke', 'the boy was broken'], 'Form I with a doer and an object.'),
      q('Inkasara l-kūbu means …', ['the cup broke', 'the boy broke the cup', 'break the cup!'], 'The prep question.'),
      q('Choose the present of اِنْفَتَحَ.', ['يَنْفَتِحُ', 'يُنْفَتَحُ', 'يَفْتَحُ'], 'Form VII: ya- + n-.'),
      q('Inṣarafa means …', ['to leave', 'to arrive', 'to spend'], 'Prep word.'),
    ],
    keyIdea: { text: 'Form VII = in- + root (infaʿala). The subject is what changes — no doer, no object. Present: yanfaʿilu.', ar: '{k|كَسَرَ} الْوَلَدُ الْكُوبَ ‖ {e|اِنْكَسَرَ} الْكُوبُ' },
    retrieves: 'Teacher-written retrieval from GM-VF-06 and its prep words (inkasara, infataḥa, inqaṭaʿa, inṣarafa).',
  },
  objectives: ['Recognise Form VII by the in- before the root.', 'Form the present with yan-.', 'Report small problems with Form VII verbs.', 'Tell Form VII from the passive.'],
  routes: {
    core: ['I say the cup broke and the door opened.', 'I write one sentence about a problem.'],
    develop: ['I conjugate inṣarafa in past and present.', 'I use inqiṭāʿ (cut / interruption).'],
    stretch: ['I compare kasara, inkasara and kusira.', 'I explain why Form VII has no object.'],
  },
  terms: {
    items: [
      { ar: 'الْوَزْنُ السَّابِعُ', en: 'Form VII', note: 'اِنْفَعَلَ' },
      { ar: 'هَمْزَةُ الْوَصْلِ', en: 'linking alif (not pronounced mid-sentence)', note: 'ثُمَّ انْقَطَعَ' },
      { ar: 'الْفِعْلُ اللَّازِمُ', en: 'verb with no object', note: 'اِنْكَسَرَ' },
      { ar: 'الْمُطَاوَعَةُ', en: 'result happening to the subject', note: 'اِنْفَتَحَ' },
      { ar: 'اِنْفِعَالٌ', en: 'Form VII verbal noun', note: 'اِنْقِطَاعٌ' },
      { ar: 'الْمَبْنِيُّ لِلْمَجْهُولِ', en: 'passive (different!)', note: 'كُسِرَ' },
    ],
  },
  explain: [
    V.patternCard({
      roman: 'VII', title: 'in- before the root', ar: 'اِنْفَعَلَ · يَنْفَعِلُ',
      template: ['اِنْفَعَلَ', 'يَنْفَعِلُ', 'اِنْفِعَالٌ', 'مُنْفَعِلٌ', 'اِنْفَعِلْ'],
      model: ['اِنْكَسَرَ', 'يَنْكَسِرُ', 'اِنْكِسَارٌ', 'مُنْكَسِرٌ', '—'], meaning: 'to break (get broken)',
      more: [['to leave', 'اِنْصَرَفَ', 'يَنْصَرِفُ', 'اِنْصِرَافٌ', 'مُنْصَرِفٌ', 'اِنْصَرِفْ'], ['to set off', 'اِنْطَلَقَ', 'يَنْطَلِقُ', 'اِنْطِلَاقٌ', 'مُنْطَلِقٌ', 'اِنْطَلِقْ'], ['to be cut off', 'اِنْقَطَعَ', 'يَنْقَطِعُ', 'اِنْقِطَاعٌ', 'مُنْقَطِعٌ', '—']],
      foot: 'Website: the past contains the prefix in- and the present commonly follows yanfaʿilu. The initial alif is hamzat al-waṣl, not a written hamza.',
      notes: 'PART 1 (3 min) — website “Root and pattern”. Commands only exist where a person can do the action (inṣarif! leave!).',
    }),
    V.familyTable({
      roman: 'VII', title: 'The Form VII family', ar: 'أُسْرَةُ الْوَزْنِ السَّابِعِ',
      rows: [
        ['اِنْكَسَرَ · يَنْكَسِرُ', 'to break (get broken)', 'اِنْكَسَرَ الْكُوبُ أَمْسِ.'],
        ['اِنْفَتَحَ · يَنْفَتِحُ', 'to open (become open)', 'يَنْفَتِحُ الْبَابُ فِي السَّاعَةِ الثَّامِنَةِ.'],
        ['اِنْقَطَعَ · يَنْقَطِعُ', 'to be cut off', 'اِنْقَطَعَ الِاتِّصَالُ أَثْنَاءَ الدَّرْسِ.'],
        ['اِنْصَرَفَ · يَنْصَرِفُ', 'to leave', 'اِنْصَرَفَ الطُّلَّابُ بَعْدَ الْجَرَسِ.'],
        ['اِنْطَلَقَ · يَنْطَلِقُ', 'to set off', 'تَنْطَلِقُ الْحَافِلَةُ فِي السَّابِعَةِ.'],
        ['اِنْقَلَبَ · يَنْقَلِبُ', 'to overturn', 'اِنْقَلَبَتِ السَّيَّارَةُ فِي الثَّلْجِ.'],
      ],
      foot: 'Website: kasara means to break something; inkasara means to break or become broken — like a passive or a change of state, but Form VII is not the passive conjugation.',
      notes: 'PART 2 (4 min) — website “Learn the family” (website sentences 2–3; “the glass” changed to al-kūb — see file note).',
    }),
    V.conjTable({
      roman: 'VII', verb: 'inṣarafa', title: 'The i- disappears in the present', ar: 'تَصْرِيفُ «اِنْصَرَفَ»',
      rows: [
        ['أَنَا', 'اِنْصَرَفْتُ', 'أَنْصَرِفُ', 'a- + n-'],
        ['هُوَ', 'اِنْصَرَفَ', 'يَنْصَرِفُ', 'ya- + n-'],
        ['هِيَ', 'اِنْصَرَفَتْ', 'تَنْصَرِفُ', 'ta- + n-'],
        ['نَحْنُ', 'اِنْصَرَفْنَا', 'نَنْصَرِفُ', 'na- + n-'],
        ['هُمْ', 'اِنْصَرَفُوا', 'يَنْصَرِفُونَ', 'ya- … -ūna'],
        ['أَنْتُمْ', 'اِنْصَرَفْتُمْ', 'تَنْصَرِفُونَ', 'ta- … -ūna'],
      ],
      foot: 'The linking i- of the past disappears after the present prefix; the n- stays. Website “Look closely”: kasara l-waladu l-kūba (someone broke it) vs inkasara l-kūbu (what happened to it).',
      notes: 'PART 3 (3 min). Inṣarafa works well for people (we left); inkasara for things.',
    }),
  ],
  quick: [
    W(/Self-check/, 0, { feedback: 'The prefix in- identifies Form VII.' }),
    q('Choose “the connection was cut off”.', ['اِنْقَطَعَ الِاتِّصَالُ', 'قَطَعَ الِاتِّصَالُ', 'قَطَّعَ الِاتِّصَالَ'], 'Form VII: what happened to it.'),
    q('Choose “the bus sets off”.', ['تَنْطَلِقُ الْحَافِلَةُ', 'تُطْلِقُ الْحَافِلَةُ', 'اِنْطَلِقِ الْحَافِلَةَ'], 'ta- + n- (feminine subject).'),
    q('Choose “we left”.', ['اِنْصَرَفْنَا', 'نَنْصَرِفُ', 'صَرَفْنَا'], 'Past + -nā; ṣarafnā = we spent.'),
  ],
  quickNote: 'website Self-check item, plus three teacher items.',
  ido: {
    title: 'Watch me report a problem with Form VII',
    steps: [
      { head: 'Form I', ar: 'كَسَرَ', think: 'Someone broke it.' },
      { head: 'Form VII', ar: 'اِنْكَسَرَ', think: 'It broke.' },
      { head: 'Form VII', ar: 'اِنْقَطَعَ', think: 'It was cut off.' },
      { head: 'Fix', ar: 'أَصْلَحْنَا', think: 'Form IV: we fixed it.' },
    ],
    legend: ['k', 'e'], legendLabels: { k: 'FORM VII', e: 'OTHER' },
    model: '{k|اِنْكَسَرَ} الْكُوبُ أَمْسِ، ثُمَّ {k|انْقَطَعَ} الِاتِّصَالُ أَثْنَاءَ الدَّرْسِ. بَعْدَ ذَلِكَ {e|أَصْلَحْنَا} الْمُشْكِلَةَ وَ{e|عُدْنَا} إِلَى الْعَمَلِ.',
    modelEn: 'The cup broke yesterday, then the connection was cut off during the lesson. After that, we fixed the problem and went back to work.',
    notes: 'Website “Apply the form” model (glass → cup). Note thumma nqaṭaʿa — the linking alif is silent.',
  },
  models: [
    { ar: 'يَنْفَتِحُ الْبَابُ فِي السَّاعَةِ الثَّامِنَةِ.', en: 'The door opens at eight o’clock.', tip: 'Website.' },
    { ar: 'اِنْقَطَعَ الِاتِّصَالُ أَثْنَاءَ الدَّرْسِ.', en: 'The connection was cut off during the lesson.', tip: 'Website.' },
    { ar: 'اِنْصَرَفَ الضُّيُوفُ مُتَأَخِّرِينَ.', en: 'The guests left late.', tip: 'People.' },
    { ar: 'اِنْكَسَرَتْ نَظَّارَتِي.', en: 'My glasses broke.', tip: 'Feminine subject.' },
  ],
  wedoSlides: [
    V.contrastTable({
      roman: 'VII', title: 'Someone did it → it happened', ar: 'مِنَ الْأَوَّلِ إِلَى السَّابِعِ',
      rows: [
        ['كَسَرَ', 'to break something', 'اِنْكَسَرَ', 'to break / get broken'],
        ['فَتَحَ', 'to open something', 'اِنْفَتَحَ', 'to open / come open'],
        ['قَطَعَ', 'to cut something', 'اِنْقَطَعَ', 'to be cut off'],
        ['قَلَبَ', 'to turn something over', 'اِنْقَلَبَ', 'to overturn'],
        ['سَحَبَ', 'to pull something', 'اِنْسَحَبَ', 'to withdraw'],
      ],
      foot: 'Form I has a doer and an object; Form VII keeps only the thing that changes. Kasara l-waladu l-kūba → inkasara l-kūbu.',
      notes: 'WE DO (3 min). Students turn each Form I sentence into a Form VII sentence (the object moves to the subject).',
    }),
    {
      type: 'sorter', min: 2, eyebrow: 'We do · website clinic · Form VII is not the passive', title: 'Form VII, or passive?', ar: 'سَابِعٌ أَمْ مَجْهُولٌ؟',
      categories: ['Form VII (in-)', 'Passive (u–i, GM-V-11)'],
      items: [['اِنْكَسَرَ', 0], ['اِنْفَتَحَ', 0], ['اِنْقَطَعَ', 0], ['اِنْصَرَفَ', 0], ['كُسِرَ', 1], ['فُتِحَ', 1], ['قُطِعَ', 1], ['كُتِبَ', 1]].map(([ar, cat]) => ({ ar, cat })),
      answerSlide: { eyebrow: 'We do · sorter answers', title: 'Sorted', ar: 'الإِجَابَاتُ' },
      notes: 'WE DO (2 min). Website: compare fataḥa, infataḥa and futiḥa — active Form I, Form VII and the passive. Both may translate “was opened” in English.',
    },
  ],
  mistakes: [
    { wrong: 'اِنْكَسَرَ الْوَلَدُ الْكُوبَ', right: 'كَسَرَ الْوَلَدُ الْكُوبَ', why: 'Form VII has no object; with a doer use Form I.' },
    { wrong: 'يُنْكَسَرُ الْكُوبُ', right: 'يَنْكَسِرُ الْكُوبُ', why: 'Form VII present: ya- + n- + i before the last letter.' },
    { wrong: 'اِنْفُتِحَ الْبَابُ', right: 'اِنْفَتَحَ الْبَابُ', why: 'Do not mix Form VII with passive vowels (website clinic).' },
  ],
  hints: ['Is there an object?', 'yu- or ya-?', 'Form VII or passive vowels?'],
  practice: [
    W(/Self-check/, 2, { prompt: 'Which statement is accurate?', feedback: 'Form VII is commonly intransitive and different from the passive.' }),
    q('What is the verbal noun of اِنْقَطَعَ?', ['اِنْقِطَاعٌ', 'قَطْعٌ', 'تَقْطِيعٌ'], 'infiʿāl.'),
    q('Choose “the window broke”.', ['اِنْكَسَرَتِ النَّافِذَةُ', 'اِنْكَسَرَ النَّافِذَةُ', 'كَسَرَتِ النَّافِذَةُ'], 'Feminine subject: -at.'),
    q('Which is Form VII?', ['اِنْطَلَقَ', 'أَطْلَقَ', 'اِسْتَطْلَقَ'], 'in- before the root.'),
  ],
  practiceLabel: 'website Self-check item and teacher-written questions',
  read: {
    title: 'A bad start to the day', label: 'reading for Form VII (teacher-written account)',
    text: 'صَبَاحَ الْيَوْمِ انْقَطَعَتِ الْكَهْرَبَاءُ فِي بَيْتِنَا، فَلَمْ يَرِنَّ الْمُنَبِّهُ. خَرَجْتُ مُسْرِعًا، وَانْكَسَرَتْ نَظَّارَتِي عَلَى الدَّرَجِ! وَصَلْتُ إِلَى الْمَوْقِفِ، وَلَكِنِ انْطَلَقَتِ الْحَافِلَةُ قَبْلِي. فِي الْمَدْرَسَةِ انْقَطَعَ الْإِنْتَرْنِتُ أَيْضًا. اِنْصَرَفْتُ إِلَى الْبَيْتِ وَأَنَا أَضْحَكُ: يَوْمٌ غَرِيبٌ!',
    glossary: [['الْكَهْرَبَاءُ', 'electricity'], ['يَرِنَّ', 'ring'], ['مُسْرِعًا', 'in a hurry'], ['الدَّرَجِ', 'the stairs'], ['الْمَوْقِفِ', 'the bus stop']],
    task: 'Website: write about a minor problem. First, underline every Form VII verb here.',
    questions: [
      q('Why didn’t the alarm ring?', ['the electricity was cut off', 'it broke', 'the writer turned it off'], 'Inqaṭaʿati l-kahrabāʾ.'),
      q('What broke on the stairs?', ['the writer’s glasses', 'a cup', 'the alarm'], 'Inkasarat naẓẓāratī.'),
      q('What happened at the bus stop?', ['the bus had already set off', 'the bus broke down', 'the writer took the bus'], 'Inṭalaqati l-ḥāfila qablī.'),
      q('How many Form VII verbs are there?', ['five', 'three', 'two'], 'inqaṭaʿat · inkasarat · inṭalaqat · inqaṭaʿa · inṣaraftu.'),
    ],
    qNote: 'Teacher-written account for the website “Apply the form” task; questions teacher-written.',
  },
  speak: {
    title: 'Speaking: what went wrong?', source: 'website “Apply the form”',
    prompts: [
      { route: 'core', ar: 'هَلِ انْكَسَرَ شَيْءٌ فِي بَيْتِكَ هَذَا الْأُسْبُوعَ؟' },
      { route: 'develop', ar: 'مَاذَا تَفْعَلُ إِذَا انْقَطَعَ الْإِنْتَرْنِتُ؟' },
      { route: 'stretch', ar: 'اِحْكِ عَنْ يَوْمٍ سَيِّئٍ: مَاذَا انْكَسَرَ؟ وَمَاذَا انْقَطَعَ؟ وَمَتَى انْصَرَفْتَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'نَعَمْ، اِنْكَسَرَ ______ .' },
      { route: 'develop', ar: 'إِذَا انْقَطَعَ الْإِنْتَرْنِتُ ______ .' },
      { route: 'stretch', ar: 'اِنْكَسَرَ ______ ، ثُمَّ انْقَطَعَ ______ ، فَانْصَرَفْتُ ______ .' },
    ],
    model: [
      { who: 'A', ar: 'هَلِ انْكَسَرَ شَيْءٌ فِي بَيْتِكِ؟', en: 'Did anything break in your house? (to a girl)' },
      { who: 'B', ar: 'نَعَمْ، اِنْكَسَرَ صَحْنٌ فِي الْمَطْبَخِ، وَانْقَطَعَ الْمَاءُ سَاعَتَيْنِ. أَصْلَحَ أَبِي كُلَّ شَيْءٍ!', en: 'Yes, a plate broke in the kitchen, and the water was cut off for two hours. My father fixed everything!' },
    ],
    notes: 'Website: a broken item, an interrupted connection and what happened next. Practise the silent linking alif: wa-nqaṭaʿa.',
  },
  write: {
    siteTask: 'Write a short account of a minor problem at school or home. Include a broken item, an interrupted connection and a sentence explaining what happened next.',
    core: { amount: '3 sentences', task: 'Website task.', how: 'inkasara · inqaṭaʿa · then …' },
    develop: { amount: '6 sentences', task: 'Add inṭalaqa, inṣarafa and a feminine subject.', how: 'inkasarat · inṭalaqat.' },
    stretch: { amount: '8 sentences', task: 'A “bad day” story with five Form VII verbs and one Form I / VII pair.', how: 'kasartu … fa-nkasara.' },
  },
  frames: {
    core: [
      { en: '… broke yesterday', ar: 'اِنْكَسَرَ ______ أَمْسِ.' },
      { en: '… was cut off during …', ar: 'اِنْقَطَعَ ______ أَثْنَاءَ ______ .' },
      { en: 'The door opens at …', ar: 'يَنْفَتِحُ الْبَابُ فِي ______ .' },
      { en: 'We left after …', ar: 'اِنْصَرَفْنَا بَعْدَ ______ .' },
    ],
    develop: [
      { en: 'My … broke (feminine)', ar: 'اِنْكَسَرَتْ ______ .' },
      { en: 'The bus sets off at …', ar: 'تَنْطَلِقُ الْحَافِلَةُ فِي ______ .' },
      { en: 'After that we fixed …', ar: 'بَعْدَ ذَلِكَ أَصْلَحْنَا ______ .' },
      { en: 'The power cut lasted …', ar: 'اِسْتَمَرَّ الِانْقِطَاعُ ______ .' },
    ],
    bank: ['اِنْكَسَرَ · يَنْكَسِرُ', 'اِنْفَتَحَ · يَنْفَتِحُ', 'اِنْقَطَعَ · يَنْقَطِعُ', 'اِنْصَرَفَ · يَنْصَرِفُ', 'اِنْطَلَقَ · يَنْطَلِقُ', 'اِنْقِطَاعٌ', 'الْكَهْرَبَاءُ', 'الِاتِّصَالُ', 'أَصْلَحَ'],
  },
  stretchTask: {
    task: 'Write a “bad day” story with five Form VII verbs and one Form I / Form VII pair.',
    checklist: ['Five Form VII verbs (in-).', 'No objects after Form VII verbs.', 'One feminine subject (-at).', 'One verbal noun (inqiṭāʿ, inṭilāq).', 'One Form I / VII pair.'],
    phrases: [['صَبَاحَ الْيَوْمِ', 'this morning'], ['فَجْأَةً', 'suddenly'], ['لِحُسْنِ الْحَظِّ', 'luckily'], ['لِسُوءِ الْحَظِّ', 'unluckily'], ['بَعْدَ ذَلِكَ', 'after that'], ['فِي النِّهَايَةِ', 'in the end']],
  },
  model: {
    text: 'كَانَ يَوْمُ الْأَحَدِ يَوْمًا غَرِيبًا. فِي الصَّبَاحِ انْقَطَعَ الْمَاءُ، فَلَمْ أَسْتَحِمَّ. فِي الطَّرِيقِ انْقَلَبَتْ حَقِيبَتِي، وَانْكَسَرَ قَلَمِي الْمُفَضَّلُ. فِي الصَّفِّ انْفَتَحَتِ النَّافِذَةُ بِسَبَبِ الرِّيحِ، وَطَارَتْ أَوْرَاقِي! لِحُسْنِ الْحَظِّ سَاعَدَنِي زُمَلَائِي. بَعْدَ الظُّهْرِ انْطَلَقَتِ الرِّحْلَةُ مُتَأَخِّرَةً، وَانْصَرَفْنَا إِلَى بُيُوتِنَا فِي الْمَسَاءِ. أَتَمَنَّى أَلَّا يَنْكَسِرَ شَيْءٌ غَدًا!',
    en: 'Sunday was a strange day. In the morning the water was cut off, so I didn’t shower. On the way my bag turned over, and my favourite pen broke. In class the window blew open because of the wind, and my papers flew away! Luckily my classmates helped me. In the afternoon the trip set off late, and we went home in the evening. I hope nothing breaks tomorrow!',
    find: ['Form VII past', 'feminine subject', 'Form VII present', 'Form III verb'],
    source: 'teacher model on the website writing task',
  },
  selfCheck: [
    { route: 'core', text: 'My Form VII verbs start with in-.' },
    { route: 'core', text: 'My Form VII verbs have no object.' },
    { route: 'develop', text: 'My present forms use yan- / tan- / an- / nan-.' },
    { route: 'develop', text: 'Feminine subjects take -at (inkasarat).' },
    { route: 'stretch', text: 'I did not mix Form VII with passive vowels.' },
  ],
  exit: [
    q('Choose “the door opened”.', ['اِنْفَتَحَ الْبَابُ', 'فَتَحَ الْبَابَ', 'اِنْفُتِحَ الْبَابُ'], 'Form VII.'),
    q('Which is NOT Form VII?', ['كُسِرَ', 'اِنْكَسَرَ', 'اِنْصَرَفَ'], 'kusira is the passive.'),
    q('Choose “the students leave”.', ['يَنْصَرِفُ الطُّلَّابُ', 'يُصْرَفُ الطُّلَّابُ', 'اِنْصَرِفِ الطُّلَّابُ'], 'Form VII present.'),
  ],
  mastery: false,
  prep: {
    words: [['اِكْتَسَبَ · يَكْتَسِبُ', 'to acquire', '—'], ['اِجْتَمَعَ · يَجْتَمِعُ', 'to meet / gather', '—'], ['اِخْتَارَ · يَخْتَارُ', 'to choose', '—'], ['اِهْتَمَّ · يَهْتَمُّ', 'to be interested', '—'], ['كَسَبَ', 'to earn (Form I)', '—']],
    questionEn: 'Kasaba = to earn. Iktasaba = to acquire. Which letter was added inside the root?',
    questionAr: 'كَسَبَ · اِكْتَسَبَ',
    homework: {
      core: 'Write five sentences with inkasara, infataḥa and inqaṭaʿa.',
      develop: 'Turn five Form I sentences (someone did it) into Form VII (it happened).',
      stretch: 'A “bad day” story with five Form VII verbs.',
    },
    wordsSource: 'The five words prepare GM-VF-08 (website Verb Forms: Form VIII).',
  },
  remember: 'Remember: Form VII = in- + root (infaʿala) · present yanfaʿilu · what happens to the subject — no doer, no object · noun infiʿāl · Form VII is NOT the passive (kusira).',
});

module.exports = { meta, slides };
