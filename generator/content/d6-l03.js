'use strict';
/* D6-L03 · Islamic Celebrations — Eid, Ramadan and Religious Occasions — website: Pathways › Development › D6 › D6-L03 (the cultural present passive
 * يُزَيِّنُ → يُزَيَّنُ · يُوَزِّعُ → تُوَزَّعُ with a nominative subject; present for the general custom, past for personal memory صُمْتُ; hedging regional customs).
 * Website vocabulary, rules, quiz, sorter, mistakes, listening, reading, speaking, writing and visual game used as published. In this lesson the
 * quiz options that differ only in vowels test the passive and case endings themselves, so they are kept; English added to the patterns and speaking model. */
const D = require('./d-common');
const { q } = D;

const meta = D.meta('D6')({
  n: 3, fileTitle: 'Islamic_Celebrations_Eid_and_Ramadan', chip: 'Culture',
  title: 'Islamic Celebrations — Eid, Ramadan and Religious Occasions', arabic: 'المُنَاسَبَاتُ الإِسْلَامِيَّةُ — العِيدَانِ وَرَمَضَانُ',
  focus: 'Describe Ramadan and the two Eids: the general custom in the present (يَصُومُ المُسْلِمُونَ), what is done with the passive (تُزَيَّنُ الشَّوَارِعُ · تُوَزَّعُ الحَلْوَى · تُتَبَادَلُ التَّهَانِي), your own memory in the past (صُمْتُ لِأَوَّلِ مَرَّةٍ) — and a hedge for regional customs.',
  icon: 'FaMoon', iconSet: 'fa6',
});

const site = D.site('D6-L03');
const P = (a, b) => ({ ar: a, sub: b });
const slides = D.devLesson('D6-L03', {
  support: `• Core: Ramadan and Eid words + six present-tense sentences (يَصُومُ المُسْلِمُونَ فِي رَمَضَانَ). Develop: two passive verbs with nominative subjects (تُزَيَّنُ الشَّوَارِعُ). Stretch: the website 80–90-word description with a personal memory in the past (صُمْتُ …) and a hedge.
• This is a lesson students know from the inside: draw on their own Ramadan and Eid experiences, family customs and countries of origin. The hedge (فِي بَعْضِ البُلْدَانِ) is about CUSTOMS (lanterns, sweets, Eid money) — the acts of worship (fasting, Eid prayer, zakat al-Fitr) are shared.
• Grammar links: hollow verbs (D5: صَامَ → صُمْتُ like زَارَ → زُرْتُ), diptotes (D6-L01: فِي رَمَضَانَ), passive (D4-L03 / L06).`,
  teach: 'The cultural passive; present for custom, past for memory.',
  wedo: 'Sort Ramadan / Eid / passive, fix slips, then a family’s Ramadan and Eid.',
  next: { nextCode: 'D6-L04', nextTitle: 'Cultural Celebrations Beyond Islam in the Arab World', nextAr: 'الاحْتِفَالَاتُ الثَّقَافِيَّةُ فِي العَالَمِ العَرَبِيِّ' },
  objectives: ['Name the customs of Ramadan and the two Eids.', 'Form the present passive (يُزَيَّنُ · تُوَزَّعُ) with a nominative subject.', 'Use the present for general customs and the past for a personal memory (صُمْتُ).', 'Hedge customs that differ between countries.'],
  rulesAr: 'المَبْنِيُّ لِلْمَجْهُولِ فِي الوَصْفِ الثَّقَافِيِّ',
  flexGroups: [],
  doNow: {
    questions: [
      q('What does السَّحُورُ mean?', ['the pre-dawn meal', 'the evening meal', 'the crescent'], 'Prepared at home (D6-L02).'),
      q('What does عِيدِيَّةٌ mean?', ['Eid money for children', 'Eid prayer', 'Eid sweets'], 'Prepared at home (D6-L02).'),
      q('What does الإِفْطَارُ mean?', ['iftar, the evening meal', 'fasting', 'the night prayer'], 'Prepared at home (D6-L02).'),
      q('Complete: تَحْتَفِلُ العَائِلَةُ ___ العِيدِ.', ['بِـ', 'عَلَى', 'إِلَى'], 'D6-L02: yaḥtafilu bi-.'),
      q('Choose the “I” past of زَارَ.', ['زُرْتُ', 'زَارْتُ', 'أَزُورُ'], 'D5: hollow verbs (صَامَ works the same way).'),
    ],
    keyIdea: { text: 'The passive puts the CUSTOM first — the doer disappears.', ar: 'يُزَيِّنُ النَّاسُ الشَّوَارِعَ ← {k|تُزَيَّنُ} {e|الشَّوَارِعُ}' },
    retrieves: 'Questions 1–3 test three of the five words prepared at home at the end of D6-L02. Questions 4–5 retrieve D6-L02 (يَحْتَفِلُ بِـ) and the D5 hollow-verb rule (صُمْتُ like زُرْتُ).',
  },
  routes: {
    core: ['I can name Ramadan and Eid customs.', 'I can describe them in the present.'],
    develop: ['I can use two passive verbs with a nominative subject.', 'I can say صُمْتُ / صُمْنَا correctly.'],
    stretch: ['I can add a personal memory in the past.', 'I can hedge a regional custom.'],
  },
  bridge: [
    { ar: 'رَمَضَانُ · صَوْمٌ', urdu: 'رمضان · روزہ', tr: 'rōza', en: 'Ramadan · fasting (Urdu roza is Persian)' },
    { ar: 'الإِفْطَارُ · السَّحُورُ', urdu: 'افطار · سحری', tr: 'iftār · sehrī', en: 'iftar · suhoor' },
    { ar: 'عِيدِيَّةٌ', urdu: 'عیدی', tr: 'ʿīdī', en: 'Eid money' },
    { ar: 'صَدَقَةٌ · زَكَاةُ الفِطْرِ', urdu: 'صدقہ · فطرانہ', tr: 'fiṭrāna', en: 'charity · zakat al-Fitr' },
    { ar: 'التَّرَاوِيحُ · لَيْلَةُ القَدْرِ', urdu: 'تراویح · شبِ قدر', tr: 'shab-e-qadr', en: 'Tarawih · Laylat al-Qadr' },
  ],
  bridgeNotes: 'URDU BRIDGE: almost every word today is shared — افطار، سحری، عیدی، صدقہ، تراویح. Urdu shab-e-qadr = Arabic لَيْلَةُ القَدْرِ (Persian شب = night = Arabic لَيْلَةٌ). Urdu roza = Arabic صَوْمٌ / صِيَامٌ.',
  core: ['رَمَضَانُ', 'الصِّيَامُ / الصَّوْمُ', 'يَصُومُ / صَامَ', 'الإِفْطَارُ', 'السَّحُورُ', 'الهِلَالُ', 'عِيدُ الفِطْرِ', 'عِيدُ الأَضْحَى', 'صَلَاةُ العِيدِ', 'زَكَاةُ الفِطْرِ', 'عِيدِيَّةٌ', 'تُتَبَادَلُ'],
  forms: {
    'يَصُومُ / صَامَ': { tag: 'I · we · she', forms: [{ l: 'she', ar: 'صَامَتْ' }, { l: 'we', ar: 'صُمْنَا' }, { l: 'I', ar: 'صُمْتُ' }] },
    'يُفْطِرُ': { tag: 'past · we', forms: [{ l: 'we', ar: 'أَفْطَرْنَا' }, { l: 'past', ar: 'أَفْطَرَ' }] },
    'يَتَصَدَّقُ': { tag: 'past · we', forms: [{ l: 'we', ar: 'تَصَدَّقْنَا' }, { l: 'past', ar: 'تَصَدَّقَ' }] },
    'يُزَيَّنُ': { tag: 'active · f.', forms: [{ l: 'f.', ar: 'تُزَيَّنُ' }, { l: 'active', ar: 'يُزَيِّنُ' }] },
    'تُوَزَّعُ': { tag: 'active · m.', forms: [{ l: 'm.', ar: 'يُوَزَّعُ' }, { l: 'active', ar: 'يُوَزِّعُ' }] },
    'تُتَبَادَلُ': { tag: 'active', forms: [{ l: 'active', ar: 'يَتَبَادَلُ' }] },
    'تُقَامُ': { tag: 'active', forms: [{ l: 'active', ar: 'يُقِيمُ' }] },
  },
  vocabNotes: {
    0: 'Ramadan. رَمَضَانُ is a diptote: فِي رَمَضَانَ (never رَمَضَانٍ). صَامَ is hollow: صُمْتُ · صُمْنَا.',
    1: 'The two Eids: the acts of worship (Eid prayer, takbirs, zakat al-Fitr) and the family customs (Eid money, sweets, visits).',
    2: 'The cultural passive: cards show the active verb too. The doer disappears; the custom becomes the subject.',
  },
  grammar: [
    {
      type: 'formsTable', stage: 'teach', min: 4, eyebrow: 'Grammar focus · Part 1 · the present passive (website rules 1–2)', title: 'Who does it? It doesn’t matter', ar: 'المَبْنِيُّ لِلْمَجْهُولِ',
      cols: [{ label: 'Active', w: 2.4, size: 24 }, { label: 'Passive', w: 2.4, size: 24 }, { label: 'Example (website)', w: 7.53, size: 22 }],
      rows: [
        { core: true, cells: ['يُزَيِّنُ', '{k|يُزَيَّنُ}', P('{k|يُزَيَّنُ} {e|الشَّارِعُ} بِالفَوَانِيسِ.', 'The street is decorated with lanterns.')] },
        { core: true, cells: ['يُوَزِّعُ', '{k|تُوَزَّعُ}', P('{k|تُوَزَّعُ} {e|الحَلْوَى} عَلَى الجِيرَانِ.', 'Sweets are handed out to the neighbours.')] },
        { cells: ['يَتَبَادَلُ', '{k|تُتَبَادَلُ}', P('{k|تُتَبَادَلُ} {e|التَّهَانِي} وَالهَدَايَا.', 'Greetings and gifts are exchanged.')] },
        { cells: ['يُقِيمُ', '{k|تُقَامُ}', P('{k|تُقَامُ} {e|صَلَاةُ} العِيدِ صَبَاحًا.', 'The Eid prayer is held in the morning.')] },
        { cells: ['يُعِدُّ', '{k|تُعَدُّ}', P('{k|تُعَدُّ} {e|المَائِدَةُ} قَبْلَ المَغْرِبِ.', 'The table is prepared before sunset.')] },
      ],
      ltr: true,
      foot: 'Passive: u on the prefix, a before the last letter — and the noun after it is the SUBJECT (-u).',
      notes: `GRAMMAR PART 1 — website rules “Forming the present passive” (يُفَعِّلُ → يُفَعَّلُ: the prefix takes a ḍamma and the letter before the ending a fatḥa; no extra word) and “The passive verb agrees with the thing affected” (the former object becomes the nominative subject; the verb agrees with it in gender). Website teaching point: “The passive changes the vowels, not the letters.”
Website mistake: يُزَيَّنُ الشَّارِعَ ✗ → الشَّارِعُ. Note الحَلْوَى is feminine → تُوَزَّعُ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · present, past and the hedge (website rules 3–4) · Develop / Stretch', title: 'Every year — or the year I was seven?', ar: 'العَادَةُ وَالذِّكْرَى',
      cards: [
        { chip: 'GENERAL CUSTOM · CORE', color: '1E6B52', head: 'يَصُومُ · يَتَصَدَّقُ', big: 'يَصُومُ المُسْلِمُونَ فِي رَمَضَانَ.', en: 'Muslims fast in Ramadan.', clue: 'Every year: present.' },
        { chip: 'MY MEMORY · DEVELOP', color: '1D5FBF', head: 'صُمْتُ · زُرْنَا', big: 'صُمْتُ لِأَوَّلِ مَرَّةٍ عِنْدَمَا كُنْتُ فِي السَّابِعَةِ.', en: 'I fasted for the first time when I was seven.', clue: 'ṣāma → ṣum-tu.' },
        { chip: 'REGIONAL CUSTOM · STRETCH', color: '6B4C9A', head: 'فِي بَعْضِ البُلْدَانِ', big: 'فِي بَعْضِ البُلْدَانِ تُزَيَّنُ الشَّوَارِعُ بِالفَوَانِيسِ.', en: 'In some countries the streets are decorated with lanterns.', clue: 'Hedge customs.' },
      ],
      error: { text: 'Website mistake: ṣāma is hollow — shorten the stem.', pairs: [['صُمْتُ لِأَوَّلِ مَرَّةٍ', 'صَامْتُ لِأَوَّلِ مَرَّةٍ']] },
      notes: `GRAMMAR PART 2 — website rules “Present for the general custom” (add a hedge where the custom is regional) and “Past for personal experience” (صَامَ is hollow: صُمْتُ، صُمْنَا). Website teaching point: “General custom in the present, personal memory in the past.”
Website mistake 3: فِي رَمَضَانٍ ✗ → فِي رَمَضَانَ (diptote, D6-L01).`,
    },
  ],
  quick: [0, 1, 3, 4],
  rest: [2, 5, 6, 7],
  ido: {
    title: 'Watch me describe Ramadan and Eid',
    steps: [
      { head: 'Custom', ar: '{w|يَصُومُ} المُسْلِمُونَ فِي رَمَضَانَ', think: 'General: present.' },
      { head: 'Passive', ar: '{k|تُعَدُّ} المَائِدَةُ', think: 'What is done.' },
      { head: 'Hedge', ar: '{e|فِي بَعْضِ البُلْدَانِ} تُزَيَّنُ الشَّوَارِعُ', think: 'Regional.' },
      { head: 'Memory', ar: '{w|زُرْنَا} الأَقَارِبَ فِي العِيدِ', think: 'Mine: past.' },
    ],
    legend: ['w', 'k', 'e'], legendLabels: { w: 'TENSE CHOICE', k: 'PASSIVE', e: 'HEDGE' },
    model: '{w|يَصُومُ} المُسْلِمُونَ شَهْرَ رَمَضَانَ مِنَ الفَجْرِ إِلَى المَغْرِبِ. وَفِي المَسَاءِ {k|تُعَدُّ} المَائِدَةُ وَيَجْتَمِعُ الأَقَارِبُ عَلَى الإِفْطَارِ. {e|وَفِي بَعْضِ البُلْدَانِ} {k|تُزَيَّنُ} الشَّوَارِعُ بِالفَوَانِيسِ. وَفِي عِيدِ الفِطْرِ {k|تُقَامُ} صَلَاةُ العِيدِ صَبَاحًا، وَقَدْ {w|زُرْنَا} الأَقَارِبَ فِي أَوَّلِ أَيَّامِ العِيدِ.',
    modelEn: 'Muslims fast the month of Ramadan from dawn to sunset. In the evening the table is prepared and relatives gather for iftar. In some countries the streets are decorated with lanterns. On Eid al-Fitr the Eid prayer is held in the morning, and we visited our relatives on the first day of Eid.',
    notes: 'I DO (3 min) — from the website writing model. Think aloud at each verb: “Every year or my memory? Who does it — does it matter? Then the passive.” Students add one sentence about their own family.',
  },
  patternEn: ['the street is decorated with lanterns', 'Muslims fast in Ramadan', 'I fasted for the first time'],
  game: {
    title: 'Which occasion? Match the picture',
    pick: [0, 1, 4],
    en: ['Muslims celebrate Eid al-Fitr after Ramadan.', 'Eid al-Adha is an Islamic occasion.', 'The family gathers to celebrate.'],
    icons: [[['fa6', 'FaMoon', 'C77700'], ['fa6', 'FaStar', 'E0A100']], [['fa6', 'FaKaaba', '1E2B3C'], ['fa6', 'FaMosque', '1E6B52']], [['fa6', 'FaPeopleRoof', '1D5FBF'], ['fa6', 'FaGift', 'C0386B']]],
    labels: ['crescent and star', 'the Kaaba and a mosque', 'family and gifts'],
    order: [1, 2, 0],
    notes: 'Website visual game (3 of 6: the two Eids and the family). Then turn each into a passive: تُقَامُ صَلَاةُ العِيدِ · تُتَبَادَلُ الهَدَايَا. The other website cards (a birthday, a graduation, gifts) lead into D6-L04.',
  },
  sorterNotes: 'Then make one passive sentence about YOUR family’s Ramadan or Eid.',
  patch: {
    speaking: {
      model: [
        ['A', 'صِفْ مَا يَحْدُثُ عَادَةً فِي رَمَضَانَ.', 'Describe what usually happens in Ramadan.'],
        ['B', 'يَصُومُ المُسْلِمُونَ مِنَ الفَجْرِ إِلَى المَغْرِبِ، وَفِي بَعْضِ البُلْدَانِ تُزَيَّنُ الشَّوَارِعُ بِالفَوَانِيسِ.', 'Muslims fast from dawn to sunset, and in some countries the streets are decorated with lanterns.'],
        ['A', 'وَهَلْ حَضَرْتَ مُنَاسَبَةً بِنَفْسِكَ؟', 'And have you attended an occasion yourself?'],
        ['B', 'نَعَمْ، صُمْتُ لِأَوَّلِ مَرَّةٍ وَأَنَا صَغِيرٌ، وَزُرْنَا الأَقَارِبَ فِي أَوَّلِ أَيَّامِ العِيدِ.', 'Yes, I fasted for the first time when I was little, and we visited relatives on the first day of Eid.'],
      ],
    },
  },
  patchNote: 'English added to the patterns and speaking model (quiz items that differ only in vowels test the passive and case endings themselves, so they are kept).',
  hints: ['Passive: the noun ends in -u!', 'ṣāma + -tu: which stem?', 'Ramaḍān: tanwīn or not?'],
  coreTip: 'Listen twice. Core: questions 1, 4 and 5.\nRamadan first, then Eid.',
  listenRoutes: 'Core: questions 1, 4 and 5. Develop / Stretch: all 5 — and list the passive verbs you hear.',
  gloss: [
    ['فِي رَمَضَانَ يَصُومُ المُسْلِمُونَ مِنَ الفَجْرِ إِلَى المَغْرِبِ، ثُمَّ يُفْطِرُونَ مَعًا.', 'In Ramadan Muslims fast from dawn to sunset, then break their fast together.'],
    ['عِنْدَنَا تُعَدُّ المَائِدَةُ قَبْلَ المَغْرِبِ بِقَلِيلٍ، وَيَجْتَمِعُ الأَقَارِبُ وَالجِيرَانُ.', 'At ours the table is prepared shortly before sunset, and relatives and neighbours gather.'],
    ['وَفِي بَعْضِ البُلْدَانِ تُزَيَّنُ الشَّوَارِعُ بِالفَوَانِيسِ، وَلٰكِنْ لَيْسَ دَائِمًا؛ فَالعَادَاتُ تَخْتَلِفُ.', 'In some countries the streets are decorated with lanterns, but not always — customs differ.'],
    ['أَنَا صُمْتُ لِأَوَّلِ مَرَّةٍ عِنْدَمَا كُنْتُ فِي السَّابِعَةِ، وَكَانَتْ تَجْرِبَةً لَا تُنْسَى.', 'I fasted for the first time when I was seven, and it was an unforgettable experience.'],
    ['وَفِي عِيدِ الفِطْرِ تُقَامُ صَلَاةُ العِيدِ صَبَاحًا، وَتُتَبَادَلُ التَّهَانِي، وَتُوَزَّعُ الحَلْوَى عَلَى الجِيرَانِ، وَيَأْخُذُ الأَطْفَالُ العِيدِيَّةَ.', 'On Eid al-Fitr the Eid prayer is held in the morning, greetings are exchanged, sweets are handed out to neighbours, and children receive Eid money.'],
  ],
  speak: {
    prompts: [
      { route: 'core', ar: 'صِفْ مَا يَحْدُثُ عَادَةً فِي رَمَضَانَ. اِسْتَعْمِلْ فِعْلًا مَبْنِيًّا لِلْمَجْهُولِ.' },
      { route: 'develop', ar: 'هَلْ تَخْتَلِفُ العَادَاتُ مِنْ بَلَدٍ إِلَى بَلَدٍ؟ أَعْطِ مِثَالًا.' },
      { route: 'stretch', ar: 'صِفْ مُنَاسَبَةً حَضَرْتَهَا بِنَفْسِكَ، مُسْتَعْمِلًا الفِعْلَ المَاضِيَ.' },
    ],
    stems: [
      { route: 'core', ar: 'فِي رَمَضَانَ يَصُومُ المُسْلِمُونَ ، وَتُعَدُّ ______ .' },
      { route: 'develop', ar: 'فِي بَعْضِ البُلْدَانِ ______ ، بَيْنَمَا ______ .' },
      { route: 'stretch', ar: 'فِي العِيدِ المَاضِي ______ ، وَكَانَ يَوْمًا ______ .' },
    ],
    modelEn: ['Describe what usually happens in Ramadan.', 'Muslims fast from dawn to sunset, and in some countries the streets are decorated with lanterns.'],
    notes: 'Website prompts and model: general custom (present + passive + hedge) → personal memory (past, hollow verb). Invite students to compare Ramadan in their family’s country of origin with Ramadan here. To a girl: صِفِي · أَعْطِي · حَضَرْتِهَا · مُسْتَعْمِلَةً.',
  },
  write: {
    core: { amount: '6 sentences', how: 'Ramadan and Eid customs in the present tense.' },
    develop: { amount: '60–70 words', how: 'Add two passive verbs with a nominative subject.' },
    stretch: { amount: '80–90 words', how: 'Website task: present custom · 2 passives · a past memory · a hedge.' },
  },
  frames: {
    core: [
      { en: 'In Ramadan Muslims fast from … to …', ar: 'فِي رَمَضَانَ يَصُومُ المُسْلِمُونَ مِنَ ______ إِلَى ______ .' },
      { en: 'In the evening we break our fast with …', ar: 'فِي المَسَاءِ نُفْطِرُ مَعَ ______ .' },
      { en: 'On Eid morning we …', ar: 'فِي صَبَاحِ العِيدِ ______ .' },
      { en: 'Children receive …', ar: 'يَأْخُذُ الأَطْفَالُ ______ .' },
    ],
    develop: [
      { en: '… is prepared before sunset.', ar: 'تُعَدُّ ______ قَبْلَ المَغْرِبِ.' },
      { en: '… are exchanged.', ar: 'تُتَبَادَلُ ______ .' },
      { en: 'In some countries … are decorated with …', ar: 'فِي بَعْضِ البُلْدَانِ تُزَيَّنُ ______ بِـ ______ .' },
      { en: 'I fasted for the first time when …', ar: 'صُمْتُ لِأَوَّلِ مَرَّةٍ عِنْدَمَا ______ .' },
    ],
    bank: ['يَصُومُ', 'صُمْتُ · صُمْنَا', 'يُفْطِرُ', 'الإِفْطَارُ', 'السَّحُورُ', 'تُعَدُّ', 'تُزَيَّنُ', 'تُتَبَادَلُ', 'تُوَزَّعُ', 'تُقَامُ', 'صَلَاةُ العِيدِ', 'فِي بَعْضِ البُلْدَانِ'],
  },
  stretch: [
    ['يَبْدَأُ الشَّهْرُ عِنْدَ رُؤْيَةِ الهِلَالِ', 'the month begins when the crescent is sighted'],
    ['يَزْدَادُ التَّضَامُنُ المُجْتَمَعِيُّ', 'community solidarity increases'],
    ['تُوَزَّعُ الوَجَبَاتُ عَلَى المُحْتَاجِينَ', 'meals are distributed to those in need'],
    ['فَلِكُلِّ مُجْتَمَعٍ طَرِيقَتُهُ', 'each community has its own way'],
    ['وَكَانَ يَوْمًا جَمِيلًا', 'and it was a beautiful day'],
  ],
  modelEn: 'Muslims fast the month of Ramadan from dawn to sunset, and the month begins when the crescent is sighted. In the evening the table is prepared and relatives gather for iftar. Community solidarity increases: people give charity and meals are distributed to those in need. In some countries the streets are decorated with lanterns, but not always — customs differ from place to place. On Eid al-Fitr the Eid prayer is held in the morning, greetings are exchanged and children receive Eid money. We visited our relatives on the first day of Eid, and it was a beautiful day.',
  find: ['a present general custom', 'two passive verbs', 'a past memory', 'a hedge'],
  modelNotes: 'Website writing model. Evidence: يَصُومُ · يَبْدَأُ · تُعَدُّ · تُوَزَّعُ · تُزَيَّنُ · تُقَامُ · تُتَبَادَلُ (passives) · فِي بَعْضِ البُلْدَانِ … لَيْسَ دَائِمًا · زُرْنَا … وَكَانَ يَوْمًا جَمِيلًا.',
  selfCheck: [
    { route: 'core', text: 'General customs are in the present.' },
    { route: 'core', text: 'رَمَضَانَ has no tanwīn.' },
    { route: 'develop', text: 'After my passive verb the noun ends in -u.' },
    { route: 'develop', text: 'My passive verb agrees in gender (تُزَيَّنُ الشَّوَارِعُ).' },
    { route: 'stretch', text: 'I added a past memory (صُمْتُ) and a hedge.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['رُؤْيَةِ الهِلَالِ', 'the sighting of the crescent'], ['التَّضَامُنُ المُجْتَمَعِيُّ', 'community solidarity'], ['يَتَصَدَّقُ', 'gives charity'], ['وَجَبَاتُ الإِفْطَارِ', 'iftar meals'], ['المُحْتَاجِينَ', 'those in need'],
    ['أَبْسَطَ وَأَهْدَأَ', 'simpler and calmer'], ['تُقَامُ', 'is held'], ['تُتَبَادَلُ التَّهَانِي', 'greetings are exchanged'], ['تُزَارُ الأَقَارِبُ', 'relatives are visited'], ['نَتَصَوَّرَ', 'we imagine'],
  ],
  prep: {
    words: [['عِيدُ المِيلَادِ', 'Christmas', '—'], ['كَنِيسَةٌ', 'a church', 'pl. كَنَائِسُ'], ['مِهْرَجَانٌ', 'a festival', 'pl. مِهْرَجَانَاتٌ'], ['العَيْشُ المُشْتَرَكُ', 'coexistence', '—'], ['يَحْتَرِمُ الاخْتِلَافَ', 'he respects difference', 'تَحْتَرِمُ she']],
    questionEn: 'Which other communities live in your town or in Arab countries, and what do they celebrate?',
    questionAr: 'فِي مَدِينَتِي يَعِيشُ … وَيَحْتَفِلُونَ بِـ …',
    homework: {
      core: 'Learn 12 Ramadan and Eid words; write six present-tense sentences.',
      develop: 'A 60–70-word description with two passive verbs.',
      stretch: 'Website writing task: 80–90 words with a memory and a hedge.',
    },
    wordsSource: 'The five words come from the website D6-L04 vocabulary (celebrations of other communities and coexistence).',
  },
  remember: 'Remember: custom → present (يَصُومُ) · what is done → passive + noun in -u (تُزَيَّنُ الشَّوَارِعُ) · my memory → past (صُمْتُ) · regional custom → hedge.',
});

module.exports = { meta, slides };
