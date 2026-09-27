'use strict';
/* F5-L09 · At the Doctor and Pharmacy — website: Pathways › Foundation › F5 › F5-L09 (healthcare people and places, يَجِبُ أَنْ + verb, imperatives m/f, أُرِيدُ دَوَاءً لِـ …, مَرَّتَيْنِ فِي اليَوْمِ, the consultation dialogue). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('F5')({
  n: 9, fileTitle: 'At_the_Doctor_and_Pharmacy', chip: 'Doctor and Pharmacy',
  title: 'At the Doctor and Pharmacy', arabic: 'عِنْدَ الطَّبِيبِ وَفِي الصَّيْدَلِيَّةِ',
  focus: 'Take part in a simple consultation: explain the problem, understand advice with يَجِبُ أَنْ and imperatives, ask for medicine or an appointment and how often to take it.',
  icon: 'FaUserDoctor', iconSet: 'fa6',
});

const P = (a, b) => ({ ar: a, sub: b });
const mfp = (m, f, pl) => ({ tag: 'm · f · pl', forms: [{ l: 'm.', ar: m }, { l: 'f.', ar: f }, { l: 'pl.', ar: pl }] });
const slides = D.devLesson('F5-L09', {
  support: `• Core: complete a doctor dialogue from the phrase bank and identify three instructions (اِفْتَحْ فَمَكَ · اِسْتَرِحْ · اِشْرَبِ المَاءَ).
• Develop: a role play with symptom, duration, examination and advice (يَجِبُ أَنْ …).
• Stretch: switch between doctor and pharmacy and handle an unplanned follow-up question (مَتَى آخُذُ الدَّوَاءَ؟ بَعْدَ الأَكْلِ؟).
• Website: “The doctor or pharmacist needs specific information: symptom, location, duration and any relevant cause. Give one detail at a time.”
• Safeguarding (website): “Advice in this lesson is language practice and deliberately general. It does not replace professional medical assessment.” Use invented role cards only.
• Imperatives change for a female patient: اِسْتَرِحْ → اِسْتَرِيحِي، خُذْ → خُذِي — a great listening check.`,
  teach: 'People, places and treatment words, then advice: you should … / take … twice a day.',
  wedo: 'Picture match, where should they go?, fix the mistakes and listen to a consultation.',
  next: { nextCode: 'F5-L10', nextTitle: 'Healthy Habits and Advice', nextAr: 'العَادَاتُ الصِّحِّيَّةُ وَالنَّصِيحَةُ' },
  doNow: {
    questions: [
      q('What does صَيْدَلِيَّةٌ mean?', ['a pharmacy', 'a hospital', 'a doctor'], 'Prepared at home (F5-L08).'),
      q('What does دَوَاءٌ mean?', ['medicine', 'an appointment', 'a bandage'], 'Prepared at home (F5-L08).'),
      q('Choose “I have pain in my back.”', ['عِنْدِي أَلَمٌ فِي ظَهْرِي.', 'عِنْدِي أَلَمٌ عَلَى ظَهْرِي.', 'أَشْرَبُ أَلَمًا فِي ظَهْرِي.'], 'F5-L08: pain is located with fī.'),
      q('Which phrase means “since yesterday”?', ['مُنْذُ أَمْسِ', 'مُنْذُ أُسْبُوعٍ', 'مُنْذُ مَتَى؟'], 'F5-L08: mundhu + time.'),
      q('Complete: أَشْعُرُ ____ التَّعَبِ.', ['بِـ', 'فِي', 'إِلَى'], 'F5-L08: ashʿuru bi-.'),
    ],
    keyIdea: { text: 'Patient: what + where + since when. Doctor: you should … and take … twice a day.', ar: '{w|يَجِبُ أَنْ} تَسْتَرِيحَ · {k|خُذْ} الدَّوَاءَ {m|مَرَّتَيْنِ} فِي اليَوْمِ' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of F5-L08. Questions 3–5 retrieve F5-L08 (pain + fī, mundhu, ashʿuru bi-).',
  },
  routes: {
    core: ['I can explain a simple health problem.', 'I can understand three instructions.'],
    develop: ['I can ask for medicine or an appointment politely.', 'I can give advice with يَجِبُ أَنْ.'],
    stretch: ['I can switch between doctor and pharmacy.', 'I can handle an unexpected follow-up question.'],
  },
  bridge: [
    { ar: 'طَبِيبٌ', urdu: 'طبیب', tr: 'tabīb', en: 'doctor' },
    { ar: 'دَوَاءٌ', urdu: 'دوا', tr: 'dawā', en: 'medicine' },
    { ar: 'مُسْتَشْفًى', urdu: 'شفا', tr: 'shifā', en: 'healing → hospital' },
    { ar: 'عِيَادَةٌ', urdu: 'عیادت', tr: 'iyādat', en: 'visiting the sick → clinic' },
    { ar: 'مَوْعِدٌ', urdu: 'وعدہ', tr: 'vaʿda', en: 'a promise → an appointment' },
  ],
  bridgeNotes: 'URDU BRIDGE: طبیب (as in Unani medicine) and دوا are identical. شفا (healing) → مُسْتَشْفًى “the place where healing is sought” (and شفاخانہ). عیادت (visiting the sick — a sunnah) → عِيَادَةٌ (clinic). وعدہ (promise) shares its root with مَوْعِدٌ (an appointment: a “promised” time).',
  core: ['طَبِيبٌ / طَبِيبَةٌ', 'طَبِيبُ أَسْنَانٍ', 'مُسْتَشْفًى', 'عِيَادَةٌ', 'صَيْدَلِيَّةٌ', 'دَوَاءٌ', 'مَوْعِدٌ طِبِّيٌّ', 'حُبُوبٌ', 'يَجِبُ أَنْ ...', 'اِسْتَرِحْ / اِسْتَرِيحِي', 'اِشْرَبْ / اِشْرَبِي', 'خُذْ / خُذِي'],
  forms: {
    'طَبِيبٌ / طَبِيبَةٌ': mfp('طَبِيبٌ', 'طَبِيبَةٌ', 'أَطِبَّاءُ'),
    'مُمَرِّضٌ / مُمَرِّضَةٌ': mfp('مُمَرِّضٌ', 'مُمَرِّضَةٌ', 'مُمَرِّضُونَ'),
    'صَيْدَلَانِيٌّ / صَيْدَلَانِيَّةٌ': mfp('صَيْدَلَانِيٌّ', 'صَيْدَلَانِيَّةٌ', 'صَيَادِلَةٌ'),
    'مُسْتَشْفًى': { tag: 'sg · pl', forms: [{ l: 'one', ar: 'مُسْتَشْفًى' }, { l: 'pl.', ar: 'مُسْتَشْفَيَاتٌ' }] },
    'اِسْتَرِحْ / اِسْتَرِيحِي': mfp('اِسْتَرِحْ', 'اِسْتَرِيحِي', 'اِسْتَرِيحُوا'),
    'اِشْرَبْ / اِشْرَبِي': mfp('اِشْرَبْ', 'اِشْرَبِي', 'اِشْرَبُوا'),
    'خُذْ / خُذِي': mfp('خُذْ', 'خُذِي', 'خُذُوا'),
  },
  vocabSlides: 4,
  skipGroups: [3],
  vocabNotes: {
    0: 'People have m / f / pl forms on the cards. Places: مُسْتَشْفًى (hospital), عِيَادَةٌ (clinic), صَيْدَلِيَّةٌ (pharmacy).',
    2: 'FLEX: imperatives (commands) for a boy / a girl / a group. The girl form adds -ī: اِشْرَبِي، خُذِي، اِسْتَرِيحِي. They are also on the grammar slide.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · advice (website rules 1 and 2)', title: 'You should … · take …', ar: 'يَجِبُ أَنْ · الأَمْرُ',
      cols: [{ label: 'To a boy', w: 4.6, size: 24 }, { label: 'To a girl', w: 4.6, size: 24 }, { label: 'English', w: 3.13 }],
      rows: [
        { core: true, cells: [P('{w|يَجِبُ أَنْ} تَسْتَرِيحَ.', ''), P('{w|يَجِبُ أَنْ} تَسْتَرِيحِي.', ''), 'You should rest.'] },
        { core: true, cells: [P('{w|يَجِبُ أَنْ} تَشْرَبَ المَاءَ.', ''), P('{w|يَجِبُ أَنْ} تَشْرَبِي المَاءَ.', ''), 'You should drink water.'] },
        { cells: [P('يَجِبُ أَنْ تَسْتَرِيحَ {w|وَأَنْ} تَنَامَ مُبَكِّرًا.', ''), P('يَجِبُ أَنْ تَسْتَرِيحِي {w|وَأَنْ} تَنَامِي مُبَكِّرًا.', ''), '… and sleep early.'] },
        { core: true, cells: [P('{k|خُذْ} هٰذَا الدَّوَاءَ.', ''), P('{k|خُذِي} هٰذَا الدَّوَاءَ.', ''), 'Take this medicine.'] },
        { cells: [P('{k|اِفْتَحْ} فَمَكَ.', ''), P('{k|اِفْتَحِي} فَمَكِ.', ''), 'Open your mouth.'] },
      ],
      foot: 'Learn the advice as whole chunks: yajibu an tastarīḥa. To a girl the verb ends in -ī.',
      notes: `GRAMMAR PART 1 — website rules “Give essential advice” (يَجِبُ أَنْ + verb) and “Join two actions” (repeat أَنْ: يَجِبُ أَنْ تَسْتَرِيحَ وَأَنْ تَنَامَ مُبَكِّرًا).
Website pattern tip: “After أَنْ, use the appropriate subjunctive form; at Foundation, learn the whole advice chunk.”
Website common error: يَجِبُ أَنْ تَسْتَرِيحُ ✗ → تَسْتَرِيحَ ✓ (the F4-L06 rule from school rules — same structure!).
Imperatives: اِسْتَرِحْ / اِسْتَرِيحِي · اِشْرَبْ / اِشْرَبِي · خُذْ / خُذِي · اِفْتَحْ / اِفْتَحِي · تَنَفَّسْ / تَنَفَّسِي بِعُمْقٍ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · medicine and how often (website rules 3 and 4)', title: 'Medicine for … twice a day', ar: 'دَوَاءٌ لِـ · مَرَّتَيْنِ',
      cards: [
        { chip: 'MEDICINE FOR …', color: '1D5FBF', head: 'دَوَاءً لِـ …', big: 'أُرِيدُ دَوَاءً لِلصُّدَاعِ، مِنْ فَضْلِكَ.', en: 'I would like medicine for a headache, please.', clue: 'li- = for.' },
        { chip: 'APPOINTMENT', color: '6B4C9A', head: 'أَحْجِزَ مَوْعِدًا', big: 'أُرِيدُ أَنْ أَحْجِزَ مَوْعِدًا مَعَ طَبِيبِ الأَسْنَانِ.', en: 'I would like to book an appointment with the dentist.', clue: 'A complete, useful chunk.' },
        { chip: 'HOW OFTEN?', color: '1E7B4F', head: 'كَمْ مَرَّةً؟ · مَرَّتَيْنِ', big: 'كَمْ مَرَّةً آخُذُ الدَّوَاءَ؟ — مَرَّتَيْنِ فِي اليَوْمِ.', en: 'How often do I take it? — Twice a day.', clue: 'marratan once · marratayni twice.' },
      ],
      error: { text: 'Website common error: “twice” is marratayni.', pairs: [['خُذْ هٰذَا الدَّوَاءَ مَرَّتَيْنِ.', 'خُذْ هٰذَا الدَّوَاءَ مَرَّةَانِ.']] },
      notes: `GRAMMAR PART 2 — website rules “Request medicine” (أُرِيدُ دَوَاءً لِـ … — the medicine is the object, -an; لِـ gives the purpose) and “Give dosage frequency” (مَرَّةً / مَرَّتَيْنِ فِي اليَوْمِ).
Website mistake: أُرِيدُ دَوَاءٌ ✗ → أُرِيدُ دَوَاءً ✓ (F5-L05: the item after أُرِيدُ takes -an).
Three times a day: ثَلَاثَ مَرَّاتٍ فِي اليَوْمِ (Stretch).`,
    },
  ],
  quick: [1, 2, 3, 5],
  rest: [4, 7],
  ido: {
    title: 'Watch me model a consultation',
    steps: [
      { head: '1 · Problem', ar: 'المَرِيضُ: عِنْدِي سُعَالٌ وَأَلَمٌ فِي الحَلْقِ مُنْذُ يَوْمَيْنِ.', think: 'What + where + since when.' },
      { head: '2 · Examine', ar: 'الطَّبِيبُ: {k|اِفْتَحْ} فَمَكَ وَ{k|تَنَفَّسْ} بِعُمْقٍ.', think: 'Two instructions.' },
      { head: '3 · Advice', ar: 'الطَّبِيبُ: {w|يَجِبُ أَنْ} تَسْتَرِيحَ {w|وَأَنْ} تَشْرَبَ المَاءَ.', think: 'Repeat an.' },
      { head: '4 · How often?', ar: 'المَرِيضُ: كَمْ مَرَّةً آخُذُهُ؟ — الطَّبِيبُ: {m|مَرَّتَيْنِ} فِي اليَوْمِ.', think: 'Twice a day.' },
    ],
    legend: ['k', 'w', 'm'], legendLabels: { k: 'INSTRUCTION', w: 'ADVICE', m: 'HOW OFTEN' },
    model: 'الطَّبِيبُ: مَا المُشْكِلَةُ؟ — المَرِيضُ: عِنْدِي سُعَالٌ وَأَلَمٌ فِي الحَلْقِ مُنْذُ يَوْمَيْنِ. — هَلْ عِنْدَكَ حُمَّى؟ — نَعَمْ، وَأَشْعُرُ بِالتَّعَبِ. — {k|اِفْتَحْ} فَمَكَ وَ{k|تَنَفَّسْ} بِعُمْقٍ. {w|يَجِبُ أَنْ} تَسْتَرِيحَ {w|وَأَنْ} تَشْرَبَ المَاءَ. {k|خُذْ} هٰذَا الدَّوَاءَ. — كَمْ مَرَّةً آخُذُهُ؟ — {m|مَرَّتَيْنِ} فِي اليَوْمِ. — شُكْرًا جَزِيلًا.',
    modelEn: 'Doctor: What is the problem? — Patient: I have had a cough and a sore throat for two days. — Do you have a fever? — Yes, and I feel tired. — Open your mouth and breathe deeply. You should rest and drink water. Take this medicine. — How often do I take it? — Twice a day. — Thank you very much.',
    notes: 'I DO (3 min) — the website 10-line model consultation. Perform it with a confident student (you are the doctor), then repeat with a “female patient” so the class hears اِفْتَحِي فَمَكِ، يَجِبُ أَنْ تَسْتَرِيحِي، خُذِي.',
  },
  game: {
    title: 'Health care: match the picture',
    pick: [0, 2, 4],
    en: ['I go to the (female) doctor.', 'I take the medicine twice a day.', 'I buy the medicine from the pharmacy.'],
    icons: [[['fa6', 'FaUserDoctor', '1D5FBF'], ['fa6', 'FaStethoscope', '1E7B4F']], [['fa6', 'FaPills', 'C0386B'], ['fa6', 'FaClock', 'C77700']], [['fa6', 'FaPills', 'C0386B'], ['fa6', 'FaStore', '1E7B4F']]],
    labels: ['doctor', 'medicine · clock', 'pharmacy'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Other website items: هُوَ فِي المُسْتَشْفَى · يَجِبُ أَنْ تَرْتَاحَ وَتَشْرَبَ المَاءَ (تَرْتَاحَ = تَسْتَرِيحَ, both mean rest) · يَضَعُ ضِمَادًا عَلَى يَدِهِ.',
  },
  sorterNotes: 'Ask “why?” for each: a broken arm or a high fever needs a clinic or hospital; medicine for a headache or a bandage comes from the pharmacy.',
  hints: ['Which ending after أَنْ?', 'The item after أُرِيدُ ends in …?', 'How do we say “twice”?'],
  coreTip: 'Listen twice. Core: questions 1, 2 and 5.\nListen for: مُنْذُ · فِي الحَلْقِ · مَرَّتَيْنِ.',
  listenRoutes: 'Core: questions 1, 2 and 5. Develop / Stretch: all 5, then list the doctor’s four instructions.',
  gloss: [
    ['الطَّبِيبَةُ: مَا المُشْكِلَةُ؟', 'Doctor (f.): What is the problem?'],
    ['المَرِيضُ: عِنْدِي حُمَّى وَسُعَالٌ مُنْذُ يَوْمَيْنِ، وَأَشْعُرُ بِأَلَمٍ فِي الحَلْقِ.', 'Patient: I have had a fever and a cough for two days, and I feel pain in my throat.'],
    ['الطَّبِيبَةُ: سَأَفْحَصُ دَرَجَةَ حَرَارَتِكَ. اِفْتَحْ فَمَكَ وَتَنَفَّسْ بِعُمْقٍ.', 'I will check your temperature. Open your mouth and breathe deeply.'],
    ['يَجِبُ أَنْ تَسْتَرِيحَ وَأَنْ تَشْرَبَ مَاءً كَثِيرًا.', 'You should rest and drink lots of water.'],
    ['خُذْ هٰذَا الدَّوَاءَ مَرَّتَيْنِ فِي اليَوْمِ.', 'Take this medicine twice a day.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا المُشْكِلَةُ؟ وَمُنْذُ مَتَى؟' },
      { route: 'develop', ar: 'أَيْنَ الأَلَمُ؟ كَيْفَ تَشْعُرُ؟' },
      { route: 'develop', ar: 'كَرِّرْ نَصِيحَةً وَاحِدَةً مِنَ الطَّبِيبِ.' },
      { route: 'stretch', ar: 'اِسْأَلْ: كَمْ مَرَّةً آخُذُ الدَّوَاءَ؟ ثُمَّ اُشْكُرْ وَاخْتِمْ.' },
    ],
    stems: [
      { route: 'core', ar: 'عِنْدِي ______ مُنْذُ ______ .' },
      { route: 'develop', ar: 'عِنْدِي أَلَمٌ فِي ______ · أَشْعُرُ بِـ ______ .' },
      { route: 'develop', ar: 'يَجِبُ أَنْ أَسْتَرِيحَ / أَشْرَبَ المَاءَ.' },
      { route: 'stretch', ar: 'كَمْ مَرَّةً آخُذُهُ؟ … شُكْرًا جَزِيلًا.' },
    ],
    modelEn: ['What is the problem?', 'I have had a headache and a fever since yesterday.'],
    notes: `Website “Doctor or pharmacy role play” — the five website prompts (English on the website): state the problem and duration · answer where the pain is / how you feel · understand and repeat one instruction · ask how often to take the medicine · thank and close.
Website model (female doctor, female patient): مَا المُشْكِلَةُ؟ — عِنْدِي صُدَاعٌ وَحُمَّى مُنْذُ أَمْسِ. — يَجِبُ أَنْ تَسْتَرِيحِي وَأَنْ تَشْرَبِي المَاءَ. — شُكْرًا. كَمْ مَرَّةً آخُذُ الدَّوَاءَ؟`,
  },
  write: {
    core: { amount: '6 lines', how: 'Problem, since when, one instruction, one piece of advice, thanks — from the phrase bank.' },
    develop: { amount: '10 lines', how: 'Website task: symptoms, duration, an examination instruction, two pieces of advice and frequency.' },
    stretch: { amount: '12+ lines', how: 'Doctor THEN pharmacy, with an unplanned follow-up question.' },
  },
  frames: {
    core: [
      { en: 'What is the problem?', ar: 'مَا المُشْكِلَةُ؟' },
      { en: 'I have … since …', ar: 'عِنْدِي ______ مُنْذُ ______ .' },
      { en: 'Open your mouth.', ar: 'اِفْتَحْ فَمَكَ. / اِفْتَحِي فَمَكِ.' },
      { en: 'You should rest.', ar: 'يَجِبُ أَنْ تَسْتَرِيحَ / تَسْتَرِيحِي.' },
      { en: 'Thank you very much.', ar: 'شُكْرًا جَزِيلًا.' },
    ],
    develop: [
      { en: 'I would like medicine for …, please.', ar: 'أُرِيدُ دَوَاءً لِـ ______ ، مِنْ فَضْلِكَ.' },
      { en: 'Take this medicine twice a day.', ar: 'خُذْ هٰذَا الدَّوَاءَ مَرَّتَيْنِ فِي اليَوْمِ.' },
      { en: 'How often do I take it?', ar: 'كَمْ مَرَّةً آخُذُهُ؟' },
      { en: 'You should rest and drink water.', ar: 'يَجِبُ أَنْ تَسْتَرِيحَ وَأَنْ تَشْرَبَ المَاءَ.' },
      { en: 'I would like to book an appointment.', ar: 'أُرِيدُ أَنْ أَحْجِزَ مَوْعِدًا.' },
    ],
    bank: ['طَبِيبٌ', 'طَبِيبَةٌ', 'صَيْدَلِيَّةٌ', 'دَوَاءٌ', 'حُبُوبٌ', 'مَوْعِدٌ', 'يَجِبُ أَنْ', 'خُذْ / خُذِي', 'اِشْرَبْ / اِشْرَبِي', 'مَرَّتَيْنِ', 'فِي اليَوْمِ', 'مُنْذُ'],
  },
  stretch: [
    ['خُذْ حَبَّةً وَاحِدَةً بَعْدَ الفُطُورِ', 'take one tablet after breakfast'],
    ['لَا تَأْخُذِ الدَّوَاءَ عَلَى مَعِدَةٍ فَارِغَةٍ', 'don’t take the medicine on an empty stomach'],
    ['إِذَا لَمْ تَتَحَسَّنْ', 'if you don’t get better'],
    ['فَتَحَدَّثْ مَعَ الطَّبِيبِ', 'then talk to the doctor'],
    ['اِقْرَأِ التَّعْلِيمَاتِ عَلَى العُلْبَةِ', 'read the instructions on the box'],
  ],
  modelEn: 'Doctor: What is the problem? Patient: I have had a cough and a sore throat for two days. Doctor: Do you have a fever? Patient: Yes, and I feel tired. Doctor: Open your mouth and breathe deeply. Patient: OK. Doctor: You should rest and drink water. Take this medicine. Patient: How often do I take it? Doctor: Twice a day. Patient: Thank you very much.',
  find: ['symptom + since', 'an instruction', 'advice', 'twice a day'],
  modelNotes: 'Evidence: عِنْدِي سُعَالٌ … مُنْذُ يَوْمَيْنِ · اِفْتَحْ فَمَكَ · يَجِبُ أَنْ تَسْتَرِيحَ وَأَنْ تَشْرَبَ · مَرَّتَيْنِ فِي اليَوْمِ.',
  selfCheck: [
    { route: 'core', text: 'The patient gives what, where and since when.' },
    { route: 'core', text: 'The doctor gives one instruction.' },
    { route: 'develop', text: 'Advice: يَجِبُ أَنْ + verb ending in -a.' },
    { route: 'develop', text: 'Commands change for a girl (-ī).' },
    { route: 'stretch', text: 'I added a pharmacy scene and a follow-up.' },
  ],
  exit: [0, 1, 5],
  glossary: [
    ['هٰذَا الدَّوَاءُ لِـ', 'this medicine is for'], ['حَبَّةً وَاحِدَةً', 'one tablet'], ['بَعْدَ الفُطُورِ', 'after breakfast'], ['حَبَّةً أُخْرَى', 'another tablet'], ['لَا تَأْخُذْ', 'don’t take'],
    ['مَعِدَةٍ فَارِغَةٍ', 'an empty stomach'], ['إِذَا لَمْ تَتَحَسَّنْ', 'if you don’t get better'], ['فَتَحَدَّثْ', 'then talk'], ['التَّعْلِيمَاتِ', 'the instructions'], ['العُلْبَةِ', 'the box'],
  ],
  prep: {
    words: [['رِيَاضَةٌ', 'sport / exercise', '—'], ['نَوْمٌ', 'sleep', '—'], ['عَادَةٌ صِحِّيَّةٌ', 'a healthy habit', 'pl. عَادَاتٌ صِحِّيَّةٌ'], ['نَصِيحَةٌ', 'a piece of advice', 'pl. نَصَائِحُ'], ['تَجَنَّبْ', 'avoid! (m.)', 'f. تَجَنَّبِي']],
    questionEn: 'Write one healthy habit you already have (in English or Arabic).',
    questionAr: 'عَادَتِي الصِّحِّيَّةُ …',
    homework: {
      core: 'Website F5-L09: the vocabulary tab and the “Where should the person go?” sorter.',
      develop: 'Website writing task: a 10-line consultation with advice and frequency.',
      stretch: 'Add a pharmacy scene with an unplanned follow-up question.',
    },
    wordsSource: 'The five words come from the website F5-L10 lesson (healthy habits and advice).',
  },
  remember: 'Remember: يَجِبُ أَنْ + verb (-a) · to a girl -ī · دَوَاءً لِـ … · مَرَّتَيْنِ فِي اليَوْمِ.',
});

module.exports = { meta, slides };
