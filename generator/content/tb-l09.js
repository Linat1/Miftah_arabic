'use strict';
/* TB-L09 · Invitations, Holidays and Past Experiences — website: Advanced Topics › Topic B › Lesson 9 (lesson engine D5-L07
   “Holidays and Travel — Past and Future”): hollow travel verbs, fixed prepositions, a past holiday and a future plan.
   Topic layer: the Topic B page adds invitations and polite responses — teacher-written (the D5 website unit has no invitation bank).
   Preparation points to TB-L10 (engine D2-L08), whose Do Now tests the D2-L07 preparation words. */
const T = require('./topic-common');
const D = require('./d-common');
const { q } = D;

const meta = T.meta('B', 9, { fileTitle: 'Invitations_Holidays_and_Past_Experiences', chip: 'Invitations and Holidays', icon: 'FaPlaneDeparture' });
const nx = T.nextOf('B', 9);

const PV = (he, i, we) => ({ tag: 'he · I · we', forms: [{ l: 'we', ar: we }, { l: 'I', ar: i }, { l: 'he', ar: he }] });
const forms = {
  'سَافَرَ إِلَى': PV('سَافَرَ', 'سَافَرْتُ', 'سَافَرْنَا'),
  'زَارَ / زُرْتُ': PV('زَارَ', 'زُرْتُ', 'زُرْنَا'),
  'أَقَامَ فِي / أَقَمْتُ فِي': PV('أَقَامَ', 'أَقَمْتُ', 'أَقَمْنَا'),
  'حَجَزَ': PV('حَجَزَ', 'حَجَزْتُ', 'حَجَزْنَا'),
  'رَكِبَ': PV('رَكِبَ', 'رَكِبْتُ', 'رَكِبْنَا'),
  'اسْتَمْتَعَ بِـ': PV('اسْتَمْتَعَ', 'اسْتَمْتَعْتُ', 'اسْتَمْتَعْنَا'),
  'عَادَ / عُدْتُ': PV('عَادَ', 'عُدْتُ', 'عُدْنَا'),
  'اكْتَشَفَ': PV('اكْتَشَفَ', 'اكْتَشَفْتُ', 'اكْتَشَفْنَا'),
};

const invite = {
  type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Topic B · invitations and polite responses (teacher-written: Topic B lesson focus)', title: 'Would you like to come …?', ar: 'الدَّعْوَةُ وَالرَّدُّ',
  cards: [
    { chip: 'INVITE · CORE', color: '1D5FBF', head: 'هَلْ تُرِيدُ أَنْ …؟', big: 'هَلْ تُرِيدُ أَنْ تَأْتِيَ مَعِي إِلَى الشَّاطِئِ يَوْمَ السَّبْتِ؟', en: 'Would you like to come with me to the beach on Saturday?', clue: 'To a girl: turīdīna an ta’tiya.' },
    { chip: 'ACCEPT · CORE', color: '1E7B4F', head: 'بِكُلِّ سُرُورٍ', big: 'بِكُلِّ سُرُورٍ! فِي أَيِّ سَاعَةٍ؟', en: 'With pleasure! At what time?', clue: 'Add a question.' },
    { chip: 'DECLINE · DEVELOP', color: 'B83227', head: 'آسِفٌ، لَا أَسْتَطِيعُ', big: 'آسِفَةٌ، لَا أَسْتَطِيعُ لِأَنَّنِي سَأَزُورُ جَدَّتِي.', en: 'Sorry (f.), I can’t because I will visit my grandmother.', clue: 'Refuse + reason (future).' },
  ],
  error: { text: 'After “an” the verb ends in -a (as in AT-A-L08 advice).', pairs: [['هَلْ تُرِيدُ أَنْ تَأْتِيَ؟', 'هَلْ تُرِيدُ أَنْ تَأْتِي؟']] },
  notes: `TOPIC B LAYER (teacher-written) — the Topic B page lists “past tense; future plans; sequencing; polite responses” and the challenge begins with responding to an invitation; the D5 website unit has no invitation bank, so these frames are teacher-written (flag for the website editor).
Invite: هَلْ تُرِيدُ / تُرِيدِينَ أَنْ تَأْتِيَ مَعِي …؟ · مَا رَأْيُكَ فِي …؟ (what do you think of …?)
Accept: بِكُلِّ سُرُورٍ · فِكْرَةٌ رَائِعَةٌ! (great idea!) · مَتَى نَلْتَقِي؟ (when shall we meet?)
Decline politely: آسِفٌ / آسِفَةٌ، لَا أَسْتَطِيعُ لِأَنَّ … · شُكْرًا عَلَى الدَّعْوَةِ (thank you for the invitation).
The reason for declining naturally uses the FUTURE (سَأَزُورُ …) — the bridge to today’s website grammar.`,
};

const raw = D.devLesson('D5-L07', {
  siteRef: 'Advanced Topics › Topic B › Lesson 9 (TB-L09), lesson engine Pathways › Development › D5 › D5-L07',
  patchNote: 'the website D5-L07 model patterns have no English translation and the sorter has no title, so the deck adds teacher-written translations and a title (the Arabic and categories are the website’s). The invitation frames are also teacher-written (Topic B focus).',
  support: `• Three parts, one story: an invitation (Topic B), a past holiday or day out (website engine) and a future plan. Core: 6 past travel verbs in the “I” form + one future sentence with سَأَ…. Develop: hollow verbs (زُرْتُ، أَقَمْتُ، عُدْتُ), fixed prepositions (سَافَرْتُ إِلَى، أَقَمْتُ فِي، اسْتَمْتَعْتُ بِـ) and an evaluation. Stretch: a clean past → future switch and a past habit (كُنَّا نَمْشِي).
• Invitations and polite refusals are teacher-written frames (Topic B lesson focus).
• Sensitivity: a “holiday” can be a day out, a family visit or an imagined trip — no student needs to have travelled abroad.
• Links: AT-A-L09 transport (بِالقِطَارِ), AT-A-L11 past travel account (Petra), TB-L08 hobbies.`,
  teach: 'Invitations, past travel verbs (zurtu!), then the future with sa-.',
  wedo: 'Picture match, sort past / future / evaluation, fix and listen.',
  next: nx,
  flexGroups: [1, 2],
  kwText: '28 holiday words from the website in 3 groups. Core: the 10 past travel verbs. Places and evaluation words are FLEX (many are known from Topic A).',
  doNow: {
    questions: [
      q('What does زُرْتُ mean?', ['I visited', 'I travelled', 'I stayed'], 'Prepared at home (TB-L08).'),
      q('What does سَأَزُورُ mean?', ['I will visit', 'I visited', 'I am visiting'], 'Prepared at home (TB-L08).'),
      q('Choose “I play the oud.”', ['أَعْزِفُ عَلَى العُودِ.', 'أَلْعَبُ العُودَ.', 'أُمَارِسُ العُودَ.'], 'TB-L08: instrument → ‘alā.'),
      q('Choose “twice a week”.', ['مَرَّتَيْنِ فِي الأُسْبُوعِ', 'مَرَّتَانِ فِي الأُسْبُوعِ', 'اثْنَانِ مَرَّةً'], 'TB-L08: the dual.'),
      q('Choose “I travelled by train.”', ['سَافَرْتُ بِالقِطَارِ.', 'سَافَرْتُ عَلَى القِطَارِ.', 'سَافَرْتُ القِطَارَ.'], 'AT-A-L09: bi- with vehicles.'),
    ],
    keyIdea: { text: 'Hollow verbs lose their long vowel before -tu: zāra → zurtu, aqāma → aqamtu. For the future, stick sa- on the present verb.', ar: 'زَارَ ← {w|زُرْتُ} · أَقَامَ ← {w|أَقَمْتُ} · {k|سَ}أَزُورُ' },
    retrieves: 'Questions 1–2 test two of the five travel words prepared at home at the end of TB-L08. Questions 3–5 retrieve TB-L08 (collocation, frequency) and AT-A-L09 (transport).',
  },
  routes: {
    core: ['I can invite someone and answer an invitation.', 'I can say where I went and what I visited.'],
    develop: ['I can use hollow verbs and their prepositions.', 'I can add a future plan with sa-.'],
    stretch: ['I can switch cleanly from past to future.', 'I can evaluate a trip (kānat min ajmali …).'],
  },
  bridge: [
    { ar: 'سَافَرَ', urdu: 'سفر', tr: 'sāfara', en: 'travelled' },
    { ar: 'زِيَارَةٌ / زَارَ', urdu: 'زیارت', tr: 'zāra', en: 'visited (Urdu: pilgrimage visit)' },
    { ar: 'أَقَامَ', urdu: 'قیام / اقامت', tr: 'aqāma', en: 'stayed (Urdu: stay, residence)' },
    { ar: 'دَعْوَةٌ', urdu: 'دعوت', tr: 'da‘wa', en: 'an invitation' },
    { ar: 'تَجْرِبَةٌ', urdu: 'تجربہ', tr: 'tajriba', en: 'an experience' },
  ],
  bridgeNotes: 'URDU BRIDGE: سفر، زیارت، قیام، دعوت and تجربہ are all Arabic in origin — a strong bridge today. زیارت in Urdu is often a religious visit; Arabic زَارَ is any visit (a museum, a grandmother).',
  core: ['سَافَرَ إِلَى', 'زَارَ / زُرْتُ', 'أَقَامَ فِي / أَقَمْتُ فِي', 'حَجَزَ', 'رَكِبَ', 'اسْتَمْتَعَ بِـ', 'عَادَ / عُدْتُ'],
  forms,
  vocabNotes: {
    0: 'Every verb card shows he · I · we. Hollow verbs (زَارَ، أَقَامَ، عَادَ) SHORTEN in the I / we forms: زُرْتُ، أَقَمْنَا، عُدْنَا.',
    1: 'FLEX: places and travel items — most are known from AT-A-L09 and AT-A-L11.',
    2: 'FLEX: evaluation and the future — taught on the grammar slides (سَـ، سَوْفَ، كَانَ مِنْ أَجْمَلِ).',
  },
  patch: {
    patterns: [
      { ar: 'زُرْتُ المَعَالِمَ السِّيَاحِيَّةَ', en: 'I visited the tourist attractions', tip: 'zāra shortens to zur- before -tu.' },
      { ar: 'أَقَمْنَا فِي فُنْدُقٍ صَغِيرٍ', en: 'we stayed in a small hotel', tip: 'aqāma shortens to aqam- and takes fī.' },
      { ar: 'سَأَزُورُ مَرَّةً أُخْرَى', en: 'I will visit again', tip: 'sa- sticks to the present verb.' },
      { ar: 'كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ.', en: 'It was one of the most beautiful trips.', tip: 'Evaluation: min + superlative.' },
    ],
  },
  grammar: [
    invite,
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · past travel verbs (website table)', title: 'I travelled, visited, stayed …', ar: 'سَرْدُ المَاضِي',
      cols: [{ label: 'He', w: 2.4, size: 24 }, { label: 'I', w: 2.6, size: 24 }, { label: 'We', w: 2.6, size: 24 }, { label: '+ partner', w: 1.9, size: 22 }, { label: 'Meaning', w: 2.83 }],
      rows: [
        { core: true, cells: [{ ar: 'سَافَرَ' }, { ar: 'سَافَرْ{w|تُ}' }, { ar: 'سَافَرْ{w|نَا}' }, { ar: '{k|إِلَى}' }, 'travelled to'] },
        { core: true, cells: [{ ar: 'زَ{p|ا}رَ' }, { ar: 'زُرْ{w|تُ}' }, { ar: 'زُرْ{w|نَا}' }, { ar: '—' }, 'visited (hollow!)'] },
        { core: true, cells: [{ ar: 'أَقَ{p|ا}مَ' }, { ar: 'أَقَمْ{w|تُ}' }, { ar: 'أَقَمْ{w|نَا}' }, { ar: '{k|فِي}' }, 'stayed in (hollow!)'] },
        { cells: [{ ar: 'اسْتَمْتَعَ' }, { ar: 'اسْتَمْتَعْ{w|تُ}' }, { ar: 'اسْتَمْتَعْ{w|نَا}' }, { ar: '{k|بِـ}' }, 'enjoyed'] },
        { cells: [{ ar: 'عَ{p|ا}دَ' }, { ar: 'عُدْ{w|تُ}' }, { ar: 'عُدْ{w|نَا}' }, { ar: '{k|إِلَى}' }, 'returned (hollow!)'] },
      ],
      foot: 'Hollow verbs: the long ā disappears before -tu / -nā (zāra → zurtu).',
      notes: `GRAMMAR PART 1 — website rules “Hollow verbs in the past” (زَارَ → زُرْتُ · أَقَامَ → أَقَمْتُ · عَادَ → عُدْنَا) and “Fixed prepositions on travel verbs” (سَافَرَ إِلَى · أَقَامَ فِي · نَزَلَ فِي · اسْتَمْتَعَ بِـ), with the website table.
Website common error: زَارْتُ / أَقَامْتُ keeps the long vowel that Arabic drops.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 2, eyebrow: 'Grammar focus · Part 2 · the future and evaluating (website)', title: 'I will … It was one of the best …', ar: 'المُسْتَقْبَلُ وَالتَّقْيِيمُ',
      cards: [
        { chip: 'FUTURE · CORE', color: '1D5FBF', head: 'سَـ …', big: 'سَأَزُورُ المَدِينَةَ مَرَّةً أُخْرَى.', en: 'I will visit the city again.', clue: 'sa- sticks to the verb.' },
        { chip: 'FUTURE · DEVELOP', color: '6B4C9A', head: 'سَوْفَ …', big: 'سَوْفَ نَحْجِزُ مُبَكِّرًا.', en: 'We will book early.', clue: 'Separate word, more emphatic.' },
        { chip: 'EVALUATE · STRETCH', color: 'C77700', head: 'كَانَ مِنْ أَجْمَلِ …', big: 'كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ.', en: 'It was one of the most beautiful trips.', clue: 'Or: riḥlatun lā tunsā.' },
      ],
      error: { text: 'Website common mistake: sa- never goes on a past verb.', pairs: [['سَأَزُورُ المَدِينَةَ غَدًا.', 'سَزُرْتُ المَدِينَةَ غَدًا.']] },
      notes: `GRAMMAR PART 2 — website rules “Marking the future” (سَـ / سَوْفَ + present verb) and “Evaluating the trip” (كَانَ مِنْ أَجْمَلِ + genitive plural). Website teaching point: “One account, two tenses — examiners reward the contrast only when each tense stays where it belongs.”
Sequencing (Topic B focus): أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ · فِي النِّهَايَةِ (from Topic A).`,
    },
  ],
  quick: [0, 1, 2, 4],
  rest: [3, 5, 6, 7],
  ido: {
    title: 'Watch me accept, remember and plan',
    steps: [
      { head: 'Invitation', ar: 'بِكُلِّ سُرُورٍ! أُحِبُّ البَحْرَ.', think: 'Accept + a reason.' },
      { head: 'Past', ar: 'فِي الصَّيْفِ المَاضِي {w|سَافَرْتُ} إِلَى مَدِينَةٍ سَاحِلِيَّةٍ، وَ{w|أَقَمْتُ} فِي فُنْدُقٍ صَغِيرٍ.', think: 'Hollow: aqamtu.' },
      { head: 'Evaluate', ar: '{w|زُرْتُ} المَعَالِمَ، وَكَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ.', think: 'zurtu + min ajmali.' },
      { head: 'Future', ar: '{k|سَ}أَزُورُهَا مَرَّةً أُخْرَى فِي المُسْتَقْبَلِ.', think: 'Switch: sa- + present.' },
    ],
    legend: ['w', 'k'], legendLabels: { w: 'PAST', k: 'FUTURE' },
    model: 'بِكُلِّ سُرُورٍ! أُحِبُّ البَحْرَ. فِي الصَّيْفِ المَاضِي {w|سَافَرْتُ} إِلَى مَدِينَةٍ سَاحِلِيَّةٍ، وَ{w|أَقَمْتُ} فِي فُنْدُقٍ صَغِيرٍ. {w|زُرْتُ} المَعَالِمَ السِّيَاحِيَّةَ، وَ{w|اسْتَمْتَعْتُ} بِالشَّاطِئِ كَثِيرًا. كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ، وَ{k|سَ}أَزُورُهَا مَرَّةً أُخْرَى.',
    modelEn: 'With pleasure! I love the sea. Last summer I travelled to a coastal city, and I stayed in a small hotel. I visited the tourist attractions and I enjoyed the beach a lot. It was one of the most beautiful trips, and I will visit it again.',
    notes: 'I DO (3 min) — accept an invitation to the beach, then tell a past trip (website speaking model and listening) and switch to the future. Think aloud at each verb: “past or future? hollow? which partner word?”',
  },
  game: {
    title: 'Where did they go? Match the picture',
    pick: [0, 3, 4],
    en: ['I spent the holiday on the beach.', 'I travelled by plane.', 'I stayed in a hotel.'],
    icons: [[['fa6', 'FaUmbrellaBeach', 'C77700']], [['fa6', 'FaPlane', '1D5FBF'], ['fa6', 'FaSuitcaseRolling', '6B4C9A']], [['fa6', 'FaHotel', '1E7B4F'], ['fa6', 'FaBed', '5A6472']]],
    labels: ['a beach', 'a plane, a suitcase', 'a hotel'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Find the hollow verb: أَقَمْتُ. Other cards for homework: ذَهَبْتُ إِلَى الجِبَالِ، زُرْتُ مَدِينَةً جَدِيدَةً، زُرْتُ أَمَاكِنَ سِيَاحِيَّةً.',
  },
  sorterTitle: 'Past, future or evaluation?',
  sorterCats: ['Past narrative', 'Future plan', 'Evaluation'],
  sorterNotes: 'Website sorter (the title is teacher-written). Then build one three-sentence account: one card from each column.',
  hints: ['Hollow verb before -tu: long or short?', 'Enjoyed + which partner word?', 'sa- goes on a past or a present verb?'],
  coreTip: 'Listen twice. Core: questions 2 and 5.\nListen for: أَقَمْنَا فِي · سَأَزُورُ · سَوْفَ.',
  listenRoutes: 'Core: questions 2 and 5. Develop / Stretch: all 5.',
  gloss: [
    ['فِي الصَّيْفِ المَاضِي سَافَرْنَا إِلَى مَدِينَةٍ سَاحِلِيَّةٍ. حَجَزْنَا التَّذَاكِرَ قَبْلَ شَهْرٍ، ثُمَّ رَكِبْنَا القِطَارَ مِنَ المَحَطَّةِ.', 'Last summer we travelled to a coastal city. We booked the tickets a month before, then took the train from the station.'],
    ['أَقَمْنَا فِي فُنْدُقٍ صَغِيرٍ قَرِيبٍ مِنَ الشَّاطِئِ. فِي اليَوْمِ الأَوَّلِ زُرْنَا المَعَالِمَ السِّيَاحِيَّةَ وَاكْتَشَفْنَا سُوقًا قَدِيمًا جَمِيلًا.', 'We stayed in a small hotel near the beach. On the first day we visited the sights and discovered a beautiful old market.'],
    ['اسْتَمْتَعْتُ بِالرِّحْلَةِ كَثِيرًا، وَكَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ.', 'I enjoyed the trip a lot, and it was one of the most beautiful trips.'],
    ['لِلْأَسَفِ نَسِيتُ حَقِيبَةَ السَّفَرِ فِي المَحَطَّةِ، وَلٰكِنْ لِحُسْنِ الحَظِّ وَجَدْنَاهَا.', 'Unfortunately I forgot the suitcase at the station, but luckily we found it.'],
    ['فِي المُسْتَقْبَلِ سَأَزُورُ تِلْكَ المَدِينَةَ مَرَّةً أُخْرَى، وَسَوْفَ نَحْجِزُ مُبَكِّرًا.', 'In the future I will visit that city again, and we will book early.'],
  ],
  speak: {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'هَلْ تُرِيدُ أَنْ تَأْتِيَ مَعِي إِلَى الحَدِيقَةِ يَوْمَ السَّبْتِ؟' },
      { route: 'develop', ar: 'أَيْنَ سَافَرْتَ فِي الإِجَازَةِ المَاضِيَةِ؟ وَأَيْنَ أَقَمْتَ؟' },
      { route: 'develop', ar: 'مَاذَا زُرْتَ هُنَاكَ؟ وَبِمَاذَا اسْتَمْتَعْتَ؟' },
      { route: 'stretch', ar: 'أَيْنَ سَتُسَافِرُ فِي المُسْتَقْبَلِ؟ وَلِمَاذَا؟' },
    ],
    stems: [
      { route: 'core', ar: 'بِكُلِّ سُرُورٍ! / آسِفٌ، لَا أَسْتَطِيعُ لِأَنَّ ______ .' },
      { route: 'develop', ar: 'سَافَرْتُ إِلَى ______ ، وَأَقَمْتُ فِي ______ .' },
      { route: 'develop', ar: 'زُرْتُ ______ ، وَاسْتَمْتَعْتُ بِـ ______ .' },
      { route: 'stretch', ar: 'فِي المُسْتَقْبَلِ سَأُسَافِرُ إِلَى ______ لِأَنَّ ______ .' },
    ],
    modelEn: ['Where did you travel in the last holiday?', 'I travelled to a coastal city, and I stayed in a small hotel.'],
    notes: 'Website prompts 2–4 (a holiday, then a plan); the Core invitation prompt is teacher-made (Topic B focus). A day out or a family visit counts as a “holiday”.',
  },
  write: {
    core: { amount: '6 sentences', task: 'Website Core: six past sentences about a trip or a day out.', how: 'Travel verbs with their partner words: safartu ilā, zurtu, aqamtu fī, istamta‘tu bi-.' },
    develop: { amount: '8 sentences', task: 'Website Develop: add an evaluation and a future sentence with sa-.', how: 'Begin with a reply to an invitation, then the past trip, then the plan.' },
    stretch: { amount: '90–100 words', task: 'Website task: a holiday account with a future plan.', how: 'Past habit (kunnā namshī), every hollow stem accurate, a clean switch to the future.' },
  },
  frames: {
    core: [
      { en: 'With pleasure!', ar: 'بِكُلِّ سُرُورٍ!' },
      { en: 'Sorry, I can’t because …', ar: 'آسِفٌ / آسِفَةٌ، لَا أَسْتَطِيعُ لِأَنَّ ______ .' },
      { en: 'Last summer I travelled to …', ar: 'فِي الصَّيْفِ المَاضِي سَافَرْتُ إِلَى ______ .' },
      { en: 'I visited …', ar: 'زُرْتُ ______ .' },
      { en: 'I stayed in …', ar: 'أَقَمْتُ فِي ______ .' },
    ],
    develop: [
      { en: 'I enjoyed … a lot.', ar: 'اسْتَمْتَعْتُ بِـ ______ كَثِيرًا.' },
      { en: 'First …, then …, after that …', ar: 'أَوَّلًا ______ ، ثُمَّ ______ ، وَبَعْدَ ذٰلِكَ ______ .' },
      { en: 'It was one of the most beautiful trips.', ar: 'كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ.' },
      { en: 'In the future I will visit …', ar: 'فِي المُسْتَقْبَلِ سَأَزُورُ ______ .' },
      { en: 'I recommend visiting …', ar: 'أَنْصَحُ بِزِيَارَةِ ______ .' },
    ],
    bank: ['سَافَرْتُ', 'زُرْتُ', 'أَقَمْتُ', 'حَجَزْتُ', 'رَكِبْتُ', 'اسْتَمْتَعْتُ بِـ', 'عُدْتُ', 'الشَّاطِئُ', 'الفُنْدُقُ', 'سَأَزُورُ', 'سَوْفَ', 'بِكُلِّ سُرُورٍ'],
  },
  stretch: [
    ['كُنَّا نَمْشِي عَلَى الشَّاطِئِ كُلَّ صَبَاحٍ', 'we used to walk on the beach every morning'],
    ['لِلْأَسَفِ … وَلٰكِنْ لِحُسْنِ الحَظِّ …', 'unfortunately … but luckily …'],
    ['رِحْلَةٌ لَا تُنْسَى', 'an unforgettable trip'],
    ['سَوْفَ أُقِيمُ هُنَاكَ أُسْبُوعَيْنِ', 'I will stay there for two weeks'],
    ['أَتَمَنَّى أَنْ أَعُودَ', 'I hope to return'],
  ],
  modelEn: 'Last summer I travelled with my family to a beautiful coastal city. We booked the tickets and the hotel a month before, then took the train from the station. We stayed in a simple hotel near the beach. Every morning we used to walk on the beach, and in the evening we visited the sights and discovered an old market. I enjoyed the trip a lot; it was one of the most beautiful trips. Unfortunately I forgot my bag on the train, but luckily I found it. In the future I will return to that city, and I will stay there for two weeks.',
  find: ['two hollow verbs (zurnā, aqamnā)', 'istamta‘tu bi-', 'kānat min ajmali …', 'the future with sa- / sawfa'],
  modelNotes: 'Evidence: أَقَمْنَا · زُرْنَا · اسْتَمْتَعْتُ بِالرِّحْلَةِ · كَانَتْ مِنْ أَجْمَلِ الرِّحْلَاتِ · سَأَعُودُ … سَوْفَ أُقِيمُ. Stretch: كُنَّا نَمْشِي (past habit).',
  selfCheck: [
    { route: 'core', text: 'I answered the invitation politely.' },
    { route: 'core', text: 'I used three past travel verbs.' },
    { route: 'develop', text: 'Hollow verbs are short: zurtu, aqamtu, ‘udtu.' },
    { route: 'develop', text: 'Each verb has its partner word (ilā, fī, bi-).' },
    { route: 'stretch', text: 'My past and future are clearly separated.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['فِي الرَّبِيعِ المَاضِي', 'last spring'], ['مَعَ صَدِيقَيْنِ', 'with two friends'], ['عَبْرَ الإِنْتِرْنِتْ', 'online'], ['نَزَلْنَا فِي', 'we stayed in'], ['بَسِيطَةٍ وَنَظِيفَةٍ', 'simple and clean'],
    ['بَعِيدًا قَلِيلًا', 'a little far'], ['سَرِيعًا وَرَخِيصًا', 'fast and cheap'], ['كُنَّا نَمْشِي', 'we used to walk'], ['الجَوِّ الهَادِئِ', 'the calm atmosphere'], ['أَنْصَحُ بِزِيَارَتِهَا', 'I recommend visiting it'],
  ],
  prep: {
    words: [['يَقْرَأُ', 'he reads', 'I: أَقْرَأُ'], ['يَسْمَعُ', 'he hears', 'I: أَسْمَعُ'], ['يَفْهَمُ', 'he understands', 'I: أَفْهَمُ'], ['سُؤَالٌ', 'a question', 'pl. أَسْئِلَةٌ'], ['جَوَابٌ', 'an answer', 'pl. أَجْوِبَةٌ']],
    questionEn: 'See the TB-L10 preparation question.',
    questionAr: 'سُؤَالٌ',
    homework: {
      core: 'Website D5-L07: the picture game and the sorter — learn the 10 past travel verbs.',
      develop: 'Write an invitation reply + 6 sentences about a trip or day out + 1 future plan.',
      stretch: 'Website writing task: 90–100 words, past then future.',
    },
    wordsSource: 'The five words come from the website D2-L07 preparation list (tested in the TB-L10 Do Now).',
  },
  remember: 'Remember: zāra → zurtu · sa- + present for the future.',
});
const slides = T.wrap('B', 9, 'D5-L07', raw, {
  prepWordsFrom: require('./d2-l07'),
  challenge: {
    steps: [
      'Teacher posts an invitation in the chat (to the park, the beach or a family meal).',
      'Everyone replies: accept or decline politely, with a reason.',
      'Then build a timeline on paper: a past outing (3 steps) → a future plan (1 step).',
      'Two students tell their timeline on the mic using time markers.',
    ],
    routes: {
      core: 'Reply to the invitation + two past sentences (zurtu, istamta‘tu bi-).',
      develop: 'Reply + three past steps with awwalan / thumma + one plan with sa-.',
      stretch: 'Full timeline: past habit (kunnā …), evaluation (min ajmali) and a plan with sawfa.',
    },
    phrases: [['بِكُلِّ سُرُورٍ', 'with pleasure'], ['آسِفٌ، لَا أَسْتَطِيعُ لِأَنَّ …', 'sorry, I can’t because …'], ['أَوَّلًا … ثُمَّ … فِي النِّهَايَةِ …', 'first … then … finally …'], ['فِي العُطْلَةِ القَادِمَةِ سَـ …', 'next holiday I will …']],
    notes: 'Website Topic B challenge “Invitation-to-memory timeline”: respond to an invitation, describe a past holiday or outing and finish with a future leisure plan using clear time markers and sequencing. Invitation to paste: هَلْ تُرِيدُ / تُرِيدِينَ أَنْ تَأْتِيَ مَعِي إِلَى الشَّاطِئِ يَوْمَ السَّبْتِ؟',
  },
});
module.exports = { meta, slides };
