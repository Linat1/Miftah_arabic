'use strict';
/* D3-L01 · Jobs and Professions — Vocabulary and Gender — website: Pathways › Development › D3 › D3-L01 (profession nouns m./f., equational sentences without “is”, يَعْمَلُ + profession in -an, workplace with فِي, a justified preference). */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D3')({
  n: 1, fileTitle: 'Jobs_and_Professions', chip: 'Jobs',
  title: 'Jobs and Professions — Vocabulary and Gender', arabic: 'الوَظَائِفُ وَالمِهَنُ — المُفْرَدَاتُ وَالتَّذْكِيرُ وَالتَّأْنِيثُ',
  focus: 'Name twelve professions in masculine, feminine and plural forms, say where people work (فِي), say what someone works as (يَعْمَلُ مُحَاسِبًا) and justify a job you would like.',
  icon: 'FaBriefcase', iconSet: 'fa6',
});

const PL = {
  'طَبِيبٌ': 'أَطِبَّاءُ', 'مُهَنْدِسٌ': 'مُهَنْدِسُونَ', 'مُدَرِّسٌ': 'مُدَرِّسُونَ', 'مُمَرِّضٌ': 'مُمَرِّضُونَ', 'مُحَامٍ': 'مُحَامُونَ', 'صَحَفِيٌّ': 'صَحَفِيُّونَ',
  'مُبَرْمِجٌ': 'مُبَرْمِجُونَ', 'مُحَاسِبٌ': 'مُحَاسِبُونَ', 'مُصَمِّمٌ': 'مُصَمِّمُونَ', 'طَيَّارٌ': 'طَيَّارُونَ', 'شُرْطِيٌّ': 'شُرْطِيُّونَ', 'طَبَّاخٌ': 'طَبَّاخُونَ',
};
const forms = {};
D.site('D3-L01').vocab[0].items.forEach((it) => {
  const [m, f] = it.ar.split(' / ');
  forms[it.ar] = { tag: 'm · f · pl', forms: [{ l: 'pl.', ar: PL[m] }, { l: 'f.', ar: f }, { l: 'm.', ar: m }] };
});

const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D3-L01', {
  support: `• NEW UNIT (D3 · Work and Careers). Core: 8 professions in BOTH forms + “He is … and works in …” (four accurate sentences). Develop: يَعْمَلُ + profession in -an and a reason for a job preference. Stretch: contrast two jobs (بَيْنَمَا / عَلَى الرَّغْمِ مِنْ أَنَّ) with one disadvantage.
• The D2 agreement habit carries straight over: هِيَ → profession + ـةٌ. NEW: after يَعْمَلُ / تَعْمَلُ the profession takes -an (مُحَاسِبًا / مُدَرِّسَةً).
• Careful: طَيَّارَةٌ is a female pilot but also means “aeroplane” (more often طَائِرَةٌ) — context decides.
• Sensitivity: some students’ parents may not work or may work in jobs not on the list — let them describe an invented family or “a person I know”.`,
  teach: 'Professions m. / f. / pl., then “is a …”, “works as a …” and “works in …”.',
  wedo: 'Picture match, sort profession / workplace, fix and listen.',
  next: { nextCode: 'D3-L02', nextTitle: 'The Workplace — Environments and Work Conditions', nextAr: 'بِيئَةُ العَمَلِ' },
  objectives: ['Name twelve professions in masculine, feminine and plural forms.', 'Say what someone is and where they work without adding “is”.', 'Use يَعْمَلُ / تَعْمَلُ + profession accurately.', 'Give a justified job preference in connected Arabic.'],
  flexGroups: [2],
  doNow: {
    questions: [
      q('What does هَدَفٌ mean?', ['a target', 'a strength', 'a review'], 'Prepared at home (D2-L12).'),
      q('What does أَتَدَرَّبُ mean?', ['I practise / train', 'I improve', 'I review'], 'Prepared at home (D2-L12).'),
      q('Choose the accurate sentence about a girl.', ['هِيَ مُجْتَهِدَةٌ.', 'هِيَ مُجْتَهِدٌ.', 'هُوَ مُجْتَهِدَةٌ.'], 'D2-L01: she → -atun.'),
      q('Which means “because she helps”?', ['لِأَنَّهَا تُسَاعِدُ', 'لِأَنَّهُ يُسَاعِدُ', 'لِذٰلِكَ تُسَاعِدُ'], 'D2 evidence connector.'),
      q('Which word means “school”?', ['مَدْرَسَةٌ', 'مُدَرِّسَةٌ', 'دِرَاسَةٌ'], 'Same root d-r-s: the place, the teacher, studying.'),
    ],
    keyIdea: { text: 'No “is” in Arabic: my father (is) an engineer. A woman’s job takes -atun.', ar: 'أَبِي {w|مُهَنْدِسٌ} · أُمِّي {e|مُهَنْدِسَةٌ} · تَعْمَلُ {k|مُدَرِّسَةً}' },
    retrieves: 'Questions 1–2 test two of the five words prepared at home at the end of D2-L12. Questions 3–4 retrieve D2-L01 (agreement, evidence). Question 5 previews today: the root d-r-s gives school, teacher and studying.',
  },
  routes: {
    core: ['I can name eight jobs for a man and a woman.', 'I can say where someone works.'],
    develop: ['I can say what someone works as (yaʿmalu muḥāsiban).', 'I can explain a job preference.'],
    stretch: ['I can compare two jobs with a contrast.', 'I can give one disadvantage of my chosen job.'],
  },
  bridge: [
    { ar: 'طَبِيبٌ', urdu: 'طبیب', tr: 'tabīb', en: 'doctor (as in tibb)' },
    { ar: 'مُحَاسِبٌ', urdu: 'محاسب / حساب', tr: 'hisāb', en: 'account → accountant' },
    { ar: 'مُدَرِّسٌ', urdu: 'مدرس / مدرسہ', tr: 'mudarris', en: 'teacher (madrasa = school)' },
    { ar: 'صَحَفِيٌّ', urdu: 'صحافی', tr: 'sahāfī', en: 'journalist' },
    { ar: 'مِهْنَةٌ', urdu: 'پیشہ', tr: 'pesha', en: 'profession (meaning only)' },
  ],
  bridgeNotes: 'URDU BRIDGE: طبیب (and طب = medicine), حساب / محاسب, مدرس / مدرسہ and صحافی / صحافت (journalism) are all shared. مِهْنَةٌ has no Urdu cognate — link it to پیشہ by meaning. Ask: what Urdu words do you know from the root ṭ-b-b, ḥ-s-b, d-r-s?',
  core: ['طَبِيبٌ / طَبِيبَةٌ', 'مُهَنْدِسٌ / مُهَنْدِسَةٌ', 'مُدَرِّسٌ / مُدَرِّسَةٌ', 'مُمَرِّضٌ / مُمَرِّضَةٌ', 'مُحَاسِبٌ / مُحَاسِبَةٌ', 'صَحَفِيٌّ / صَحَفِيَّةٌ', 'مُسْتَشْفًى', 'مَدْرَسَةٌ', 'مَكْتَبٌ', 'شَرِكَةٌ', 'لِأَنَّ', 'بَيْنَمَا'],
  forms,
  vocabNotes: {
    0: 'Every card shows m. · f. · pl. Most feminines add ـةٌ. Note: مُحَامٍ → مُحَامِيَةٌ (the hidden yāʾ comes back); طَبِيبٌ has a broken plural أَطِبَّاءُ.',
    1: 'Workplaces: the word AFTER فِي. عَنْ بُعْدٍ (remotely) and فِي الهَوَاءِ الطَّلْقِ (outdoors) answer “where?” without a building.',
    2: 'Connectors (FLEX): the same list repeats through D3 — the website lists them every lesson.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · profession gender (website rule 1 + table)', title: 'He is … She is … They are …', ar: 'هُوَ · هِيَ · هُمْ',
      cols: [{ label: 'He · هُوَ', w: 3.0, size: 26 }, { label: 'She · هِيَ', w: 3.2, size: 26 }, { label: 'They · هُمْ', w: 3.2, size: 26 }, { label: 'Meaning', w: 2.93 }],
      rows: [
        { core: true, cells: [{ ar: 'مُهَنْدِسٌ' }, { ar: 'مُهَنْدِسَ{e|ةٌ}' }, { ar: 'مُهَنْدِسُ{k|ونَ}' }, 'engineer'] },
        { core: true, cells: [{ ar: 'مُمَرِّضٌ' }, { ar: 'مُمَرِّضَ{e|ةٌ}' }, { ar: 'مُمَرِّضُ{k|ونَ}' }, 'nurse'] },
        { core: true, cells: [{ ar: 'صَحَفِيٌّ' }, { ar: 'صَحَفِيَّ{e|ةٌ}' }, { ar: 'صَحَفِيُّ{k|ونَ}' }, 'journalist'] },
        { cells: [{ ar: 'مُحَامٍ' }, { ar: 'مُحَامِيَةٌ' }, { ar: 'مُحَامُونَ' }, 'lawyer (yāʾ returns)'] },
        { cells: [{ ar: 'طَبِيبٌ' }, { ar: 'طَبِيبَ{e|ةٌ}' }, { ar: 'أَطِبَّاءُ' }, 'doctor (broken plural)'] },
      ],
      foot: 'No “is” in the present: أَبِي طَبِيبٌ = My father is a doctor. Never add yakūnu.',
      notes: `GRAMMAR PART 1 — website rules “Profession gender” (مُهَنْدِسٌ ← مُهَنْدِسَةٌ: most profession nouns form the feminine with ة) and “Equational sentences” (المُبْتَدَأُ + الخَبَرُ: no “is” between a person and a profession). The plural column is teacher-added (the m / f / pl routine) — Core needs m. and f.
Website common error: “Do not insert يكون as ‘is’ in a present profession sentence.” (أَبِي يَكُونُ طَبِيبٌ ✗ → أَبِي طَبِيبٌ ✓)
Quick-fire: say a family member (أَخِي / أُخْتِي / عَمِّي / خَالَتِي) + a job; students say the correct form.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · works as / works in (website rules 3–4) · Develop / Stretch', title: 'Works AS a … · works IN a …', ar: 'يَعْمَلُ مُحَاسِبًا فِي شَرِكَةٍ',
      cards: [
        { chip: 'IS · CORE', color: '1D5FBF', head: 'أُخْتِي صَحَفِيَّةٌ', big: 'أُخْتِي صَحَفِيَّةٌ.', en: 'My sister is a journalist.', clue: 'No “is”, ending -un.' },
        { chip: 'WORKS AS · DEVELOP', color: '6B4C9A', head: 'يَعْمَلُ + -ًا', big: 'تَعْمَلُ خَالَتِي مُدَرِّسَةً.', en: 'My aunt works as a teacher.', clue: 'After yaʿmalu: -an / -atan.' },
        { chip: 'WORKS IN · CORE', color: '1E7B4F', head: 'فِي + مَكَانٍ', big: 'يَعْمَلُ الطَّبِيبُ فِي المُسْتَشْفَى.', en: 'The doctor works in the hospital.', clue: 'fī before the PLACE only.' },
      ],
      error: { text: 'Website mistake: fī goes before the workplace, not the job.', pairs: [['يَعْمَلُ أَخِي مُحَاسِبًا فِي شَرِكَةٍ.', 'يَعْمَلُ أَخِي فِي مُحَاسِبٍ.']] },
      notes: `GRAMMAR PART 2 — website rules “Working as” (يَعْمَلُ / تَعْمَلُ + مِهْنَةً: “Use the indefinite profession after يعمل as a circumstantial description” — a ḥāl, so it takes the accusative -an) and “Workplace with في” (فِي before the workplace, not before the profession).
Examples (website): يَعْمَلُ عَمِّي مُحَاسِبًا. · تَعْمَلُ خَالَتِي مُدَرِّسَةً. · تَعْمَلُ المُحَامِيَةُ فِي المَحْكَمَةِ.
Core can avoid the -an form completely: هُوَ مُحَاسِبٌ وَيَعْمَلُ فِي شَرِكَةٍ (website target pattern 1).`,
    },
  ],
  rulesTitle: 'Gender and profession sentences',
  rulesAr: 'التَّذْكِيرُ وَالتَّأْنِيثُ فِي أَسْمَاءِ المِهَنِ',
  quick: [0, 1, 6, 5],
  rest: [2, 4, 7], // quiz 4 (ṣaḥafiyyatan / ṣaḥafiyyatun) differs only in the final vowel — practised orally
  ido: {
    title: 'Watch me describe my family’s jobs',
    steps: [
      { head: 'Is', ar: 'أَبِي {w|مُهَنْدِسٌ}.', think: 'No “is”. Masculine.' },
      { head: 'Works in', ar: 'وَيَعْمَلُ {k|فِي} شَرِكَةِ بِنَاءٍ.', think: 'fī + the place.' },
      { head: 'Works as', ar: 'تَعْمَلُ أُمِّي {e|مُحَاسِبَةً}.', think: 'Woman → -a; after taʿmalu → -tan.' },
      { head: 'Me + reason', ar: 'أُرِيدُ أَنْ أُصْبِحَ صَحَفِيًّا {k|لِأَنَّنِي} أُحِبُّ الكِتَابَةَ.', think: 'Preference + proof.' },
    ],
    legend: ['w', 'e', 'k'], legendLabels: { w: 'HE', e: 'SHE', k: 'PLACE / REASON' },
    model: 'فِي عَائِلَتِي مِهَنٌ مُتَنَوِّعَةٌ. وَالِدِي {w|مُهَنْدِسٌ} وَيَعْمَلُ {k|فِي} شَرِكَةِ بِنَاءٍ، بَيْنَمَا وَالِدَتِي {e|مُدَرِّسَةٌ} {k|فِي} مَدْرَسَةٍ قَرِيبَةٍ. أُخْتِي الكُبْرَى {e|مُحَاسِبَةٌ}، وَهِيَ تُحِبُّ عَمَلَهَا لِأَنَّهُ يَحْتَاجُ إِلَى الدِّقَّةِ. أَمَّا أَنَا فَأُرِيدُ أَنْ أُصْبِحَ صَحَفِيًّا {k|لِأَنَّنِي} أَسْتَمْتِعُ بِالكِتَابَةِ وَمُقَابَلَةِ النَّاسِ.',
    modelEn: 'There are varied professions in my family. My father is an engineer and works in a building company, whereas my mother is a teacher in a nearby school. My older sister is an accountant, and she loves her work because it needs precision. As for me, I want to become a journalist because I enjoy writing and meeting people.',
    notes: 'I DO (3 min) — the website writing model (first four sentences), built with a think-aloud: “Man or woman? Is / works as / works in? Where is my reason?” Note أَنْ أُصْبِحَ صَحَفِيًّا: after أُصْبِحَ (become) the job also takes -an — same as after يَعْمَلُ.',
  },
  patterns: [
    { ar: 'هُوَ مُهَنْدِسٌ وَيَعْمَلُ فِي شَرِكَةٍ.', en: 'He is an engineer and works in a company.', tip: 'Job, then fī + workplace.' },
    { ar: 'هِيَ مُمَرِّضَةٌ وَتَعْمَلُ فِي مُسْتَشْفًى.', en: 'She is a nurse and works in a hospital.', tip: 'Feminine job and ta- verb.' },
    { ar: 'تَعْمَلُ خَالَتِي مُدَرِّسَةً.', en: 'My aunt works as a teacher.', tip: 'After taʿmalu: -atan.' },
    { ar: 'أُفَضِّلُ مِهْنَةَ الطِّبِّ لِأَنَّهَا تُسَاعِدُ النَّاسَ.', en: 'I prefer medicine because it helps people.', tip: 'Preference + reason.' },
  ],
  game: {
    title: 'Who works where? Match the picture',
    pick: [0, 2, 3],
    en: ['She is a doctor and works in a hospital.', 'She is a programmer and works on the computer.', 'He is a cook and works in a restaurant.'],
    icons: [[['fa6', 'FaUserDoctor', '1D5FBF'], ['fa6', 'FaHospital', 'B83227']], [['fa6', 'FaLaptopCode', '6B4C9A'], ['fa6', 'FaComputer', '5A6472']], [['fa6', 'FaKitchenSet', 'C77700'], ['fa6', 'FaUtensils', '1E7B4F']]],
    labels: ['doctor · hospital', 'programmer · computer', 'cook · restaurant'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6). Ask: which word shows it is a WOMAN? (ـةٌ AND تَعْمَلُ). Other website cards: هُوَ مُعَلِّمٌ وَيَعْمَلُ فِي مَدْرَسَةٍ (مُعَلِّمٌ = مُدَرِّسٌ, both “teacher”), هِيَ مُحَامِيَةٌ, هُوَ مِيكَانِيكِيٌّ (mechanic).',
  },
  sorterCats: ['Profession', 'Workplace'],
  sorterNotes: 'Then pair each profession with its workplace aloud: المُهَنْدِسُ … فِي … · المُحَاسِبَةُ … فِي … · الصَّحَفِيُّ … فِي …',
  mistakes: [
    { wrong: 'هِيَ مُهَنْدِسٌ.', right: 'هِيَ مُهَنْدِسَةٌ.', why: 'The profession agrees with a feminine subject.' },
    { wrong: 'أَبِي يَكُونُ طَبِيبٌ.', right: 'أَبِي طَبِيبٌ.', why: 'No present-tense “is” in Arabic.' },
    { wrong: 'يَعْمَلُ أَخِي فِي مُحَاسِبٍ.', right: 'يَعْمَلُ أَخِي مُحَاسِبًا فِي شَرِكَةٍ.', why: 'Job after yaʿmalu (-an); fī + the place.' },
  ],
  hints: ['She → which ending?', 'Do we need “is”?', 'fī before the job or the place?'],
  coreTip: 'Listen twice. Core: questions 1, 3 and 5.\nListen for: مُهَنْدِسٌ · مُحَاسِبَةٌ · مُمَرِّضَةً.',
  listenRoutes: 'Core: questions 1, 3 and 5. Develop / Stretch: all 6.',
  gloss: [
    ['أَنَا لَيْلَى. أَبِي مُهَنْدِسٌ وَيَعْمَلُ فِي شَرِكَةِ بِنَاءٍ،', 'I am Layla. My father is an engineer and works in a building company,'],
    ['وَأُمِّي مُحَاسِبَةٌ فِي مَكْتَبٍ كَبِيرٍ.', 'and my mother is an accountant in a big office.'],
    ['أَخِي الأَكْبَرُ يُرِيدُ أَنْ يُصْبِحَ طَيَّارًا،', 'My older brother wants to become a pilot,'],
    ['أَمَّا أُخْتِي فَهِيَ تَتَدَرَّبُ لِتُصْبِحَ مُمَرِّضَةً.', 'as for my sister, she is training to become a nurse.'],
    ['فِي رَأْيِي، عَمَلُ أُمِّي دَقِيقٌ وَلٰكِنَّهُ مُجْهِدٌ.', 'In my opinion, my mother’s work is precise but tiring.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'مَا مِهْنَةُ أَحَدِ أَفْرَادِ عَائِلَتِكَ؟' },
      { route: 'core', ar: 'أَيْنَ يَعْمَلُ؟' },
      { route: 'develop', ar: 'مَا المِهْنَةُ الَّتِي تُفَضِّلُهَا؟ وَلِمَاذَا؟' },
      { route: 'stretch', ar: 'مَا المِهْنَةُ الَّتِي لَا تُنَاسِبُكَ؟' },
    ],
    stems: [
      { route: 'core', ar: 'أَبِي / أُمِّي ______ .' },
      { route: 'core', ar: 'يَعْمَلُ / تَعْمَلُ فِي ______ .' },
      { route: 'develop', ar: 'أُفَضِّلُ مِهْنَةَ ______ لِأَنَّ ______ .' },
      { route: 'stretch', ar: 'لَا تُنَاسِبُنِي مِهْنَةُ ______ لِأَنَّنِي ______ .' },
    ],
    modelEn: ['What is your mother’s job?', 'My mother is a teacher and works in a secondary school.'],
    notes: 'Website prompts and model. Model continues: A: هَلْ تُحِبُّ عَمَلَهَا؟ (Does she like her work?) B: نَعَمْ، لِأَنَّهُ مُجْزٍ وَيُسَاعِدُ الطُّلَّابَ. (Yes, because it is rewarding and helps students.) Students may describe an invented family. To a girl: مَا المِهْنَةُ الَّتِي تُفَضِّلِينَهَا؟',
  },
  write: {
    core: { amount: '4 sentences', how: 'Four accurate sentences with the frames: two family members, their jobs and workplaces.' },
    develop: { amount: '80–100 words', how: 'Four professions, m. and f. forms, workplaces with fī, and a justified preference.' },
    stretch: { amount: '100–120 words', how: 'Website task: add a contrast between two jobs and one disadvantage of your choice.' },
  },
  frames: {
    core: [
      { en: 'My father / mother is a …', ar: 'أَبِي / أُمِّي ______ .' },
      { en: 'He works in …', ar: 'يَعْمَلُ فِي ______ .' },
      { en: 'My sister is a … (f.: -atun)', ar: 'أُخْتِي ______ .' },
      { en: 'She works in …', ar: 'تَعْمَلُ فِي ______ .' },
    ],
    develop: [
      { en: 'My uncle works as a … (-an) in a …', ar: 'يَعْمَلُ عَمِّي ______ فِي ______ .' },
      { en: 'whereas my aunt is a …', ar: 'بَيْنَمَا خَالَتِي ______ .' },
      { en: 'I want to become a … because …', ar: 'أُرِيدُ أَنْ أُصْبِحَ ______ لِأَنَّنِي ______ .' },
      { en: 'Although it is tiring, …', ar: 'عَلَى الرَّغْمِ مِنْ أَنَّهَا مُجْهِدَةٌ، ______ .' },
    ],
    bank: ['طَبِيبٌ / طَبِيبَةٌ', 'مُهَنْدِسٌ', 'مُدَرِّسَةٌ', 'مُحَاسِبٌ', 'صَحَفِيَّةٌ', 'مُبَرْمِجٌ', 'مُسْتَشْفًى', 'شَرِكَةٌ', 'مَكْتَبٌ', 'لِأَنَّ', 'بَيْنَمَا', 'إِضَافَةً إِلَى ذٰلِكَ'],
  },
  stretch: [
    ['جَدِّي طَبِيبٌ مُتَقَاعِدٌ', 'my grandfather is a retired doctor'],
    ['يَعْمَلُ عَنْ بُعْدٍ', 'he works remotely'],
    ['عَمَلُهُ مُرِنٌ، لٰكِنَّهُ يَحْتَاجُ إِلَى تَرْكِيزٍ', 'his work is flexible but needs concentration'],
    ['أَمِيلُ إِلَى الصَّحَافَةِ', 'I am drawn to journalism'],
    ['مِهْنَةٌ مُثِيرَةٌ وَمُهِمَّةٌ', 'an exciting and important profession'],
  ],
  modelEn: 'There are varied professions in my family. My father is an engineer and works in a building company, whereas my mother is a teacher in a nearby school. My older sister is an accountant; she loves her work because it needs precision. As for me, I want to become a journalist because I enjoy writing and meeting people. Although journalism can be tiring, it is an exciting and important profession.',
  find: ['four professions', 'a feminine profession', 'a workplace with fī', 'a justified preference'],
  modelNotes: 'Evidence: مُهَنْدِسٌ، مُدَرِّسَةٌ، مُحَاسِبَةٌ، صَحَفِيًّا · فِي شَرِكَةِ بِنَاءٍ، فِي مَدْرَسَةٍ · لِأَنَّنِي أَسْتَمْتِعُ بِالكِتَابَةِ · عَلَى الرَّغْمِ مِنْ أَنَّ الصَّحَافَةَ قَدْ تَكُونُ مُجْهِدَةً (the disadvantage).',
  selfCheck: [
    { route: 'core', text: 'Women’s jobs end in -atun.' },
    { route: 'core', text: 'No “is” (yakūnu) in my sentences.' },
    { route: 'develop', text: 'fī comes before the workplace only.' },
    { route: 'develop', text: 'My preference has a reason.' },
    { route: 'stretch', text: 'I contrasted two jobs and gave a disadvantage.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['أَفْرَادُ عَائِلَتِي', 'my family members'], ['مِهَنٍ مُخْتَلِفَةٍ', 'different professions'], ['مُتَقَاعِدٌ', 'retired'], ['مُدَرِّسَةُ عُلُومٍ', 'a science teacher'], ['ثَانَوِيَّةٍ', 'secondary'],
    ['ابْنُ خَالِي', 'my cousin'], ['شَرِكَةٍ دَوْلِيَّةٍ', 'an international company'], ['مُرِنٌ', 'flexible'], ['تَرْكِيزٍ طَوِيلٍ', 'long concentration'], ['أَمِيلُ إِلَى', 'I am inclined towards'],
  ],
  prep: {
    words: [['دَوَامٌ كَامِلٌ', 'full-time work', 'دَوَامٌ جُزْئِيٌّ part-time'], ['رَاتِبٌ', 'a salary', 'pl. رَوَاتِبُ'], ['مُجْهِدٌ', 'tiring', 'f. مُجْهِدَةٌ'], ['مُجْزٍ', 'rewarding', 'f. مُجْزِيَةٌ'], ['فَرِيقُ عَمَلٍ', 'a work team', 'pl. فِرَقُ عَمَلٍ']],
    questionEn: 'Think of one job: is it tiring, rewarding, or both? Write one sentence.',
    questionAr: 'عَمَلُ الطَّبِيبِ مُجْهِدٌ وَلٰكِنَّهُ …',
    homework: {
      core: 'Website D3-L01: redo the mission and sorter; learn 8 professions in m. and f.',
      develop: 'Write 6 sentences about your family’s (or an invented family’s) jobs and workplaces.',
      stretch: 'Website writing task: 100–120 words with a contrast and a disadvantage.',
    },
    wordsSource: 'The five words come from the website D3-L02 vocabulary (work conditions and benefits).',
  },
  remember: 'Remember: no “is” — a woman’s job takes -atun — fī goes before the place.',
});

module.exports = { meta, slides };
