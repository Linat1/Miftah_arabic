'use strict';
/* AT-A-L08 · Doctor, Pharmacy and Advice — website: Advanced Topics › Topic A › Lesson 8 (lesson engine F5-L09 “At the Doctor and Pharmacy”).
   Topic layer: imperatives to a man / woman / group and negative commands (لَا تَأْخُذْ …) — Topic A grammar “imperatives, negative commands and advice”. */
const T = require('./topic-common');
const D = require('./d-common');
const { q } = D;

const meta = T.meta('A', 8, { fileTitle: 'Doctor_Pharmacy_and_Advice', chip: 'Doctor and Pharmacy', icon: 'FaUserDoctor' });
const nx = T.nextOf('A', 8);

const MFP = (m, f, pl, lab = ['to m.', 'to f.', 'to pl.']) => ({ tag: 'm · f · pl', forms: [{ l: lab[2], ar: pl }, { l: lab[1], ar: f }, { l: lab[0], ar: m }] });
const forms = {
  'طَبِيبٌ / طَبِيبَةٌ': MFP('طَبِيبٌ', 'طَبِيبَةٌ', 'أَطِبَّاءُ', ['m.', 'f.', 'pl.']),
  'مُمَرِّضٌ / مُمَرِّضَةٌ': MFP('مُمَرِّضٌ', 'مُمَرِّضَةٌ', 'مُمَرِّضُونَ', ['m.', 'f.', 'pl.']),
  'صَيْدَلَانِيٌّ / صَيْدَلَانِيَّةٌ': MFP('صَيْدَلَانِيٌّ', 'صَيْدَلَانِيَّةٌ', 'صَيَادِلَةٌ', ['m.', 'f.', 'pl.']),
  'اِسْتَرِحْ / اِسْتَرِيحِي': MFP('اِسْتَرِحْ', 'اِسْتَرِيحِي', 'اِسْتَرِيحُوا'),
  'اِشْرَبْ / اِشْرَبِي': MFP('اِشْرَبْ', 'اِشْرَبِي', 'اِشْرَبُوا'),
  'خُذْ / خُذِي': MFP('خُذْ', 'خُذِي', 'خُذُوا'),
  'اِسْتَلْقِ': MFP('اِسْتَلْقِ', 'اِسْتَلْقِي', 'اِسْتَلْقُوا'),
  'اِفْتَحْ فَمَكَ / فَمَكِ': MFP('اِفْتَحْ فَمَكَ', 'اِفْتَحِي فَمَكِ', 'اِفْتَحُوا أَفْوَاهَكُمْ'),
  'تَنَفَّسْ بِعُمْقٍ': MFP('تَنَفَّسْ', 'تَنَفَّسِي', 'تَنَفَّسُوا'),
  'دَوَاءٌ': { tag: 'm.', forms: [{ l: 'pl.', ar: 'أَدْوِيَةٌ' }, { l: 'm.', ar: 'دَوَاءٌ' }] },
  'مَوْعِدٌ طِبِّيٌّ': { tag: 'm.', forms: [{ l: 'pl.', ar: 'مَوَاعِيدُ' }, { l: 'm.', ar: 'مَوْعِدٌ' }] },
};

const raw = D.devLesson('F5-L09', {
  siteRef: 'Advanced Topics › Topic A › Lesson 8 (AT-A-L08), lesson engine Pathways › Foundation › F5 › F5-L09',
  support: `• A consultation lesson. Core: say the problem + duration (AT-A-L07) and understand 3 instructions (rest, drink, take). Develop: advice with يَجِبُ أَنْ + verb, medicine “for” (دَوَاءٌ لِلصُّدَاعِ), and how often (مَرَّتَيْنِ فِي اليَوْمِ). Stretch (Topic A grammar): imperatives to a man / woman / group and a negative command (لَا تَأْخُذْ …).
• The instructions change with the listener, exactly like “please” in AT-A-L05: اِشْرَبْ (man) · اِشْرَبِي (woman) · اِشْرَبُوا (group).
• Safety note (website): advice is general language practice — professionals diagnose. Invented patients only.
• Urdu bridge: طبیب، دوا، مریض، ہسپتال (English) / مُسْتَشْفًى، علاج، نسخہ (Persian) / وَصْفَةٌ.`,
  teach: 'Advice with “you should”, instructions to a man / woman, how often.',
  wedo: 'Picture match, where to go, fix and listen.',
  next: nx,
  flexGroups: [0, 1, 3],
  kwText: '27 health-care words from the website in 4 groups. People, places and treatment were prepared at home (FLEX check). Core today: the advice and instructions group.',
  doNow: {
    questions: [
      q('What does صَيْدَلِيَّةٌ mean?', ['pharmacy', 'hospital', 'clinic'], 'Prepared at home (AT-A-L07).'),
      q('What does دَوَاءٌ mean?', ['medicine', 'doctor', 'appointment'], 'Prepared at home (AT-A-L07).'),
      q('Choose “I have a headache.”', ['عِنْدِي صُدَاعٌ.', 'عِنْدَهُ صُدَاعٌ.', 'أَنَا صُدَاعٌ.'], 'AT-A-L07: ‘indī.'),
      q('What does مُنْذُ يَوْمَيْنِ mean?', ['for two days', 'in two days', 'two days a week'], 'AT-A-L07: duration.'),
      q('Choose “This is my hand.”', ['هٰذِهِ يَدِي.', 'هٰذَا يَدِي.', 'هٰذِهِ يَدُكَ.'], 'AT-A-L07: feminine body part.'),
    ],
    keyIdea: { text: 'Advice: “you should” + a verb. Instructions change with the listener: to a man -Ø, to a woman -ī, to a group -ū.', ar: 'يَجِبُ أَنْ تَسْتَرِيحَ  ·  اِشْرَبْ · اِشْرَبِ{e|ي} · اِشْرَبُ{k|وا}' },
    retrieves: 'Questions 1–2 test two of the five health-care words prepared at home at the end of AT-A-L07. Questions 3–5 retrieve AT-A-L07 (symptoms, duration, this + body part).',
  },
  routes: {
    core: ['I can explain a problem and how long.', 'I can understand three instructions from a doctor.'],
    develop: ['I can give advice with “you should …”.', 'I can ask for medicine and how often to take it.'],
    stretch: ['I can give instructions to a man, a woman and a group.', 'I can use a negative command: don’t take …'],
  },
  bridge: [
    { ar: 'طَبِيبٌ', urdu: 'طبیب', tr: 'ṭabīb', en: 'doctor' },
    { ar: 'دَوَاءٌ', urdu: 'دوا', tr: 'dawā’', en: 'medicine' },
    { ar: 'مَرِيضٌ', urdu: 'مریض', tr: 'marīḍ', en: 'ill, a patient' },
    { ar: 'عِلَاجٌ', urdu: 'علاج', tr: '‘ilāj', en: 'treatment' },
    { ar: 'مُسْتَشْفًى', urdu: 'ہسپتال', tr: 'mustashfā', en: 'hospital (not cognate)' },
  ],
  bridgeNotes: 'URDU BRIDGE: طبیب، دوا، مریض and علاج are identical in meaning. CAREFUL: ہسپتال comes from English; Arabic is مُسْتَشْفًى (a place for getting well — root ش ف ي, like شفا). Urdu نسخہ (prescription) is Persian; Arabic is وَصْفَةٌ طِبِّيَّةٌ.',
  core: ['يَجِبُ أَنْ ...', 'اِسْتَرِحْ / اِسْتَرِيحِي', 'اِشْرَبْ / اِشْرَبِي', 'خُذْ / خُذِي', 'دَوَاءٌ', 'صَيْدَلِيَّةٌ', 'طَبِيبٌ / طَبِيبَةٌ'],
  forms,
  vocabNotes: {
    0: 'FLEX: prepared at home. Plurals: أَطِبَّاءُ (doctors), صَيَادِلَةٌ (pharmacists).',
    1: 'FLEX: treatment words — دَوَاءٌ and مَوْعِدٌ were prepared; the others appear in the listening and reading.',
    2: 'CORE: every instruction card shows to a man · to a woman · to a group. Say all three aloud: ishrab – ishrabī – ishrabū.',
    3: 'FLEX: جُرْعَةٌ (dose) and تَعْلِيمَاتٌ (instructions) are in the pharmacy reading.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · instructions (website vocabulary + Topic A imperatives)', title: 'Rest! Drink! Take!', ar: 'فِعْلُ الأَمْرِ',
      cols: [{ label: 'To a man', w: 2.9, size: 26 }, { label: 'To a woman', w: 2.9, size: 26 }, { label: 'To a group', w: 3.0, size: 26 }, { label: 'Don’t … (to a man)', w: 3.53, size: 22 }],
      rows: [
        { core: true, cells: [{ ar: 'اِسْتَرِحْ' }, { ar: 'اِسْتَرِيحِ{e|ي}' }, { ar: 'اِسْتَرِيحُ{k|وا}' }, { ar: '{p|لَا} تَخْرُجْ' }] },
        { core: true, cells: [{ ar: 'اِشْرَبْ' }, { ar: 'اِشْرَبِ{e|ي}' }, { ar: 'اِشْرَبُ{k|وا}' }, { ar: '{p|لَا} تَشْرَبْ' }] },
        { core: true, cells: [{ ar: 'خُذْ' }, { ar: 'خُذِ{e|ي}' }, { ar: 'خُذُ{k|وا}' }, { ar: '{p|لَا} تَأْخُذْ' }] },
        { cells: [{ ar: 'اِفْتَحْ فَمَكَ' }, { ar: 'اِفْتَحِ{e|ي} فَمَكِ' }, { ar: 'اِفْتَحُ{k|وا} أَفْوَاهَكُمْ' }, { ar: '{p|لَا} تَفْتَحْ' }] },
      ],
      foot: 'Woman: add -ī. Group: add -ū (written ـوا). Don’t: lā + the “you” verb with no ending vowel.',
      notes: `GRAMMAR PART 1 — the website “Advice and instructions” vocabulary gives each instruction to a man and to a woman (اِسْتَرِحْ / اِسْتَرِيحِي …). The group column and the negative column are the Topic A layer (“imperatives, negative commands and advice structures”). The negative command comes from the website reading: لَا تَأْخُذِ الدَّوَاءَ عَلَى مَعِدَةٍ فَارِغَةٍ.
English meanings: rest · drink · take · open your mouth. Negatives: don’t go out · don’t drink · don’t take · don’t open. Core only needs the first two columns to UNDERSTAND the doctor.
Quick-fire: say an instruction; students type m / f / pl.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · advice, medicine and how often (website rules)', title: 'You should … medicine for … twice a day', ar: 'يَجِبُ أَنْ · لِـ · مَرَّتَيْنِ',
      cards: [
        { chip: 'ADVICE · CORE', color: '1E7B4F', head: 'يَجِبُ أَنْ …', big: 'يَجِبُ أَنْ تَسْتَرِيحَ وَأَنْ تَشْرَبَ المَاءَ.', en: 'You should rest and drink water.', clue: 'Repeat an before the 2nd verb.' },
        { chip: 'REQUEST · DEVELOP', color: '1D5FBF', head: 'دَوَاءً لِـ …', big: 'أُرِيدُ دَوَاءً لِلصُّدَاعِ، مِنْ فَضْلِكَ.', en: 'I would like medicine for a headache, please.', clue: 'li- = for (the purpose).' },
        { chip: 'HOW OFTEN · DEVELOP', color: 'C77700', head: 'مَرَّةً · مَرَّتَيْنِ', big: 'خُذِ الدَّوَاءَ مَرَّتَيْنِ فِي اليَوْمِ.', en: 'Take the medicine twice a day.', clue: 'marratayni = twice.' },
      ],
      error: { text: 'Website common error: keep the -a ending after “an”.', pairs: [['يَجِبُ أَنْ تَسْتَرِيحَ.', 'يَجِبُ أَنْ تَسْتَرِيحُ.']] },
      notes: `GRAMMAR PART 2 — website rules “Give essential advice” (يَجِبُ أَنْ + فِعْلٌ), “Join two actions” (… وَأَنْ …), “Request medicine” (أُرِيدُ دَوَاءً لِـ…) and “Give dosage frequency” (مَرَّةً / مَرَّتَيْنِ فِي اليَوْمِ).
Advice to a girl (website quiz): يَجِبُ أَنْ تَأْخُذِي الدَّوَاءَ — the same -ī as the imperative.
Link to AT-A-L06: يَجِبُ أَنْ and يُوصَى بِـ are both advice; يَجِبُ is personal and direct, يُوصَى is formal and impersonal.`,
    },
  ],
  quick: [0, 2, 5, 7],
  rest: [1, 3, 4, 6],
  ido: {
    title: 'Watch me run a consultation',
    steps: [
      { head: 'Patient', ar: 'عِنْدِي حُمَّى وَسُعَالٌ مُنْذُ يَوْمَيْنِ.', think: 'Problem + duration (AT-A-L07).' },
      { head: 'Examine', ar: 'اِفْتَحْ فَمَكَ وَتَنَفَّسْ بِعُمْقٍ.', think: 'Patient is a man → no ending.' },
      { head: 'Advice', ar: '{k|يَجِبُ أَنْ} تَسْتَرِيحَ {k|وَأَنْ} تَشْرَبَ مَاءً كَثِيرًا.', think: 'Two pieces of advice: an … wa-an …' },
      { head: 'Medicine', ar: 'خُذْ هٰذَا الدَّوَاءَ مَرَّتَيْنِ فِي اليَوْمِ، وَ{p|لَا} تَأْخُذْهُ عَلَى مَعِدَةٍ فَارِغَةٍ.', think: 'Do and don’t.' },
    ],
    legend: ['k', 'p'], legendLabels: { k: 'ADVICE', p: 'DON’T' },
    model: 'المَرِيضُ: عِنْدِي حُمَّى وَسُعَالٌ مُنْذُ يَوْمَيْنِ. الطَّبِيبَةُ: اِفْتَحْ فَمَكَ وَتَنَفَّسْ بِعُمْقٍ. {k|يَجِبُ أَنْ} تَسْتَرِيحَ {k|وَأَنْ} تَشْرَبَ مَاءً كَثِيرًا. خُذْ هٰذَا الدَّوَاءَ مَرَّتَيْنِ فِي اليَوْمِ، وَ{p|لَا} تَأْخُذْهُ عَلَى مَعِدَةٍ فَارِغَةٍ.',
    modelEn: 'Patient: I have had a fever and a cough for two days. Doctor: Open your mouth and breathe deeply. You should rest and drink a lot of water. Take this medicine twice a day, and don’t take it on an empty stomach.',
    notes: 'I DO (3 min) — the website listening script shortened, plus the negative command from the website pharmacy reading. Then re-say the doctor’s lines to a GIRL together: اِفْتَحِي فَمَكِ، تَنَفَّسِي، تَسْتَرِيحِي، تَشْرَبِي، خُذِي.',
  },
  game: {
    title: 'Where are they? Match the picture',
    pick: [0, 2, 4],
    en: ['I go to the (female) doctor.', 'I take the medicine twice a day.', 'I buy the medicine from the pharmacy.'],
    icons: [[['fa6', 'FaUserDoctor', '1D5FBF'], ['fa6', 'FaStethoscope', '5A6472']], [['fa6', 'FaPills', 'B83227'], ['fa6', 'FaClock', 'C77700']], [['fa6', 'FaPrescriptionBottleMedical', '1E7B4F'], ['fa6', 'FaStore', '6B4C9A']]],
    labels: ['doctor, stethoscope', 'tablets, clock', 'medicine, shop'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Ask: which word tells you the doctor is a woman? (الطَّبِيبَةِ). Other cards for homework: هُوَ فِي المُسْتَشْفَى، يَجِبُ أَنْ تَرْتَاحَ وَتَشْرَبَ المَاءَ، يَضَعُ ضِمَادًا عَلَى يَدِهِ.',
  },
  sorterCats: ['Clinic / hospital', 'Pharmacy', 'Dentist'],
  sorterNotes: 'Then: say where to go as advice — يَجِبُ أَنْ تَذْهَبَ إِلَى الصَّيْدَلِيَّةِ.',
  hints: ['After “an”: which ending?', 'Medicine is the object: which ending?', 'Twice: which form?'],
  coreTip: 'Listen twice. Core: questions 1, 4 and 5.\nListen for: مُنْذُ يَوْمَيْنِ · تَسْتَرِيحَ · مَرَّتَيْنِ.',
  listenRoutes: 'Core: questions 1, 4 and 5. Develop / Stretch: all 5.',
  gloss: [
    ['الطَّبِيبَةُ: مَا المُشْكِلَةُ؟', 'Doctor (f.): What is the problem?'],
    ['المَرِيضُ: عِنْدِي حُمَّى وَسُعَالٌ مُنْذُ يَوْمَيْنِ، وَأَشْعُرُ بِأَلَمٍ فِي الحَلْقِ.', 'Patient: I have had a fever and a cough for two days, and I feel pain in my throat.'],
    ['الطَّبِيبَةُ: سَأَفْحَصُ دَرَجَةَ حَرَارَتِكَ. اِفْتَحْ فَمَكَ وَتَنَفَّسْ بِعُمْقٍ.', 'Doctor: I will check your temperature. Open your mouth and breathe deeply.'],
    ['يَجِبُ أَنْ تَسْتَرِيحَ وَأَنْ تَشْرَبَ مَاءً كَثِيرًا.', 'You should rest and drink a lot of water.'],
    ['خُذْ هٰذَا الدَّوَاءَ مَرَّتَيْنِ فِي اليَوْمِ.', 'Take this medicine twice a day.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا المُشْكِلَةُ؟ مُنْذُ مَتَى؟' },
      { route: 'develop', ar: 'أَيْنَ الأَلَمُ؟ كَيْفَ تَشْعُرُ؟' },
      { route: 'develop', ar: 'كَمْ مَرَّةً آخُذُ الدَّوَاءَ؟' },
      { route: 'stretch', ar: 'بِمَاذَا تَنْصَحُنِي؟' },
    ],
    stems: [
      { route: 'core', ar: 'عِنْدِي ______ مُنْذُ ______ .' },
      { route: 'develop', ar: 'عِنْدِي أَلَمٌ فِي ______ . أَشْعُرُ بِالتَّعَبِ.' },
      { route: 'develop', ar: 'خُذْهُ / خُذِيهِ ______ فِي اليَوْمِ.' },
      { route: 'stretch', ar: 'يَجِبُ أَنْ ______ وَأَنْ ______ ، وَلَا ______ .' },
    ],
    modelEn: ['What is the problem?', 'I have a headache and fever since yesterday.'],
    notes: 'The website prompts are role-play steps in English (state the problem and duration · where it hurts · repeat one instruction · ask how often · thank and close); the Arabic questions here are the key line for each step.',
  },
  write: {
    core: { amount: '6 lines', task: 'Website Core: complete a doctor dialogue from the phrase bank.', how: 'Problem + duration → one instruction → one piece of advice → thanks.' },
    develop: { amount: '10 lines', task: 'Website task: a complete consultation.', how: 'Symptoms, duration, one examination instruction, two pieces of advice, how often.' },
    stretch: { amount: '10–12 lines', task: 'Website Stretch: doctor, then pharmacy.', how: 'The patient is a girl (all instructions with -ī) and the pharmacist adds a negative command.' },
  },
  frames: {
    core: [
      { en: 'What is the problem?', ar: 'مَا المُشْكِلَةُ؟' },
      { en: 'I have … for two days.', ar: 'عِنْدِي ______ مُنْذُ يَوْمَيْنِ.' },
      { en: 'You should rest.', ar: 'يَجِبُ أَنْ تَسْتَرِيحَ.' },
      { en: 'Take this medicine.', ar: 'خُذْ هٰذَا الدَّوَاءَ.' },
      { en: 'Thank you very much.', ar: 'شُكْرًا جَزِيلًا.' },
    ],
    develop: [
      { en: 'Open your mouth (to a girl).', ar: 'اِفْتَحِي فَمَكِ.' },
      { en: 'You should … and …', ar: 'يَجِبُ أَنْ ______ وَأَنْ ______ .' },
      { en: 'I would like medicine for …', ar: 'أُرِيدُ دَوَاءً لِـ ______ .' },
      { en: 'How many times do I take it?', ar: 'كَمْ مَرَّةً آخُذُهُ؟' },
      { en: 'Twice a day.', ar: 'مَرَّتَيْنِ فِي اليَوْمِ.' },
    ],
    bank: ['يَجِبُ أَنْ', 'تَسْتَرِيحَ', 'تَشْرَبَ', 'اِسْتَرِحْ / اِسْتَرِيحِي', 'اِشْرَبْ / اِشْرَبِي', 'خُذْ / خُذِي', 'دَوَاءٌ', 'مَرَّتَيْنِ', 'مُنْذُ', 'عِنْدِي', 'لَا تَأْخُذْ', 'صَيْدَلِيَّةٌ'],
  },
  stretch: [
    ['سَأَفْحَصُ دَرَجَةَ حَرَارَتِكَ', 'I will check your temperature'],
    ['لَا تَأْخُذِ الدَّوَاءَ عَلَى مَعِدَةٍ فَارِغَةٍ', 'don’t take the medicine on an empty stomach'],
    ['إِذَا لَمْ تَتَحَسَّنْ فَتَحَدَّثْ مَعَ الطَّبِيبِ', 'if you don’t improve, speak to the doctor'],
    ['أُرِيدُ أَنْ أَحْجِزَ مَوْعِدًا', 'I would like to book an appointment'],
    ['اِقْرَأِ التَّعْلِيمَاتِ عَلَى العُلْبَةِ', 'read the instructions on the box'],
  ],
  modelEn: 'Doctor: What is the problem? · Patient: I have had a cough and a sore throat for two days. · Doctor: Do you have a fever? · Patient: Yes, and I feel tired. · Doctor: Open your mouth and breathe deeply. · Patient: OK. · Doctor: You should rest and drink water. Take this medicine. · Patient: How many times do I take it? · Doctor: Twice a day. · Patient: Thank you very much.',
  find: ['a symptom with a duration', 'an examination instruction', 'advice with “you should”', 'how often'],
  modelNotes: 'Evidence: عِنْدِي سُعَالٌ … مُنْذُ يَوْمَيْنِ · اِفْتَحْ فَمَكَ وَتَنَفَّسْ بِعُمْقٍ · يَجِبُ أَنْ تَسْتَرِيحَ وَأَنْ تَشْرَبَ · مَرَّتَيْنِ فِي اليَوْمِ. Stretch: rewrite the doctor’s lines for a girl.',
  selfCheck: [
    { route: 'core', text: 'My patient says the problem and how long.' },
    { route: 'core', text: 'The doctor gives one instruction.' },
    { route: 'develop', text: 'After “an” the verb ends in -a.' },
    { route: 'develop', text: 'I asked how often (kam marratan?).' },
    { route: 'stretch', text: 'My instructions match the listener (-ī / -ū) and include a “don’t”.' },
  ],
  exit: [1, 2, 4],
  glossary: [
    ['لِلزُّكَامِ وَالسُّعَالِ', 'for a cold and a cough'], ['حَبَّةً وَاحِدَةً', 'one tablet'], ['بَعْدَ الفُطُورِ', 'after breakfast'], ['حَبَّةً أُخْرَى', 'another tablet'], ['بَعْدَ العَشَاءِ', 'after dinner'],
    ['لَا تَأْخُذْ', 'don’t take'], ['عَلَى مَعِدَةٍ فَارِغَةٍ', 'on an empty stomach'], ['إِذَا لَمْ تَتَحَسَّنْ', 'if you don’t get better'], ['فَتَحَدَّثْ مَعَ', 'then speak with'], ['العُلْبَةِ', 'the box'],
  ],
  prep: {
    words: [['حَافِلَةٌ', 'bus', 'pl. حَافِلَاتٌ'], ['قِطَارٌ', 'train', 'pl. قِطَارَاتٌ'], ['سَيَّارَةٌ', 'car', 'pl. سَيَّارَاتٌ'], ['دَرَّاجَةٌ', 'bicycle', 'pl. دَرَّاجَاتٌ'], ['مَشْيًا', 'on foot', '']],
    questionEn: 'How do you get to school or the mosque? Write one sentence.',
    questionAr: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟',
    homework: {
      core: 'Website F5-L09: the picture game and the advice vocabulary — learn rest / drink / take (m. and f.).',
      develop: 'Website writing task: a 10-line consultation.',
      stretch: 'Write a doctor-then-pharmacy dialogue for a girl patient, with one negative command.',
    },
    wordsSource: 'The five words come from the website F6-L03 vocabulary (the AT-A-L09 lesson engine).',
  },
  remember: 'Remember: 5 transport words + how you get to school.',
});
const slides = T.wrap('A', 8, 'F5-L09', raw, {
  challenge: {
    steps: [
      'Pairs: A is the patient, B the doctor (then swap: B the pharmacist).',
      'Patient: symptom + where + how long. Doctor: one question.',
      'Doctor: one instruction and one piece of advice. Patient repeats it.',
      'Patient asks how often and thanks. Two pairs perform on the mic.',
    ],
    routes: {
      core: 'Patient only: ‘indī … mundhu … — then repeat the doctor’s instruction.',
      develop: 'Doctor: examination instruction + advice with yajibu an … and how often.',
      stretch: 'Patient is a girl: all instructions with -ī; pharmacist adds a “don’t” (lā ta’khudh …).',
    },
    phrases: [['مَا المُشْكِلَةُ؟', 'what is the problem?'], ['يَجِبُ أَنْ تَسْتَرِيحَ', 'you should rest'], ['خُذِي الدَّوَاءَ', 'take the medicine (f.)'], ['كَمْ مَرَّةً؟', 'how many times?']],
    notes: 'Role cards (private chat): Patient 1 — سُعَالٌ وَحُمَّى مُنْذُ يَوْمَيْنِ. Patient 2 (girl) — صُدَاعٌ مُنْذُ أَمْسِ. Patient 3 — أَلَمٌ فِي المَعِدَةِ مُنْذُ الصَّبَاحِ. Pharmacist: دَوَاءٌ لِلسُّعَالِ، مَرَّتَيْنِ فِي اليَوْمِ، لَا تَأْخُذْهُ عَلَى مَعِدَةٍ فَارِغَةٍ.',
  },
});
module.exports = { meta, slides };
