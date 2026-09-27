'use strict';
/* AT-A-L11 · Reading — Travel and Tourism Texts — website: Advanced Topics › Topic A › Lesson 11 (lesson engine P3-L08).
   The engine is a Progression (B1+) reading lesson on إِذَا / لَوْ conditionals and the writer’s attitude. For this class the main You Do text
   is a teacher-written A2 travel account (evidence hunt: place, time, transport, opinion, problem + one inference, as the Topic A
   challenge asks); the website opinion text stays as the Stretch extension. The website listening (about conditionals) is FLEX. */
const T = require('./topic-common');
const D = require('./d-common');
const { q, translit } = D;

const meta = T.meta('A', 11, { fileTitle: 'Reading_Travel_and_Tourism_Texts', chip: 'Travel Reading', icon: 'FaMapLocationDot' });
const nx = T.nextOf('A', 11);

const TW = [['سَائِحٌ', 'a tourist', 'f. سَائِحَةٌ', 'سُيَّاحٌ'], ['فُنْدُقٌ', 'a hotel', 'm.', 'فَنَادِقُ'], ['مَعْلَمٌ', 'a landmark, a sight', 'm.', 'مَعَالِمُ'], ['شَاطِئٌ', 'a beach', 'm.', 'شَوَاطِئُ'], ['خَرِيطَةٌ', 'a map', 'f.', 'خَرَائِطُ'], ['رِحْلَةٌ', 'a trip, a journey', 'f.', 'رِحْلَاتٌ']];
const travelWords = {
  type: 'vocab', stage: 'teach', min: 2, eyebrow: 'Key words · Topic A · travel and tourism (website visual game)', title: 'On holiday', ar: 'فِي العُطْلَةِ',
  items: TW.map(([ar, en, tag, pl], i) => ({ n: 25 + i, ar, en, tr: translit(ar), core: true, tag: tag.startsWith('f. ') ? 'm · f · pl' : tag, forms: tag.startsWith('f. ') ? [{ l: 'pl.', ar: pl }, { l: 'f.', ar: tag.slice(3) }, { l: 'm.', ar }] : [{ l: 'pl.', ar: pl }, { l: tag, ar }] })),
  notes: 'TOPIC A KEY WORDS — travel nouns from the website P3-L08 visual game (السُّيَّاحُ، المَعَالِمُ، الشَّوَاطِئُ، الفَنَادِقُ، الخَرَائِطُ، رِحْلَاتٌ). These are CORE today; the website’s text-type and analysis words (groups 1–3) are FLEX for Stretch. Broken plurals: say singular → plural as a chant (funduq – fanādiq).',
};

// teacher-written A2 travel account for the evidence hunt (Core main text)
const petra = {
  reading: {
    title: 'My trip to Petra',
    text: 'فِي الصَّيْفِ المَاضِي سَافَرْتُ مَعَ أُسْرَتِي إِلَى الأُرْدُنِّ بِالطَّائِرَةِ. وَصَلْنَا إِلَى عَمَّانَ فِي المَسَاءِ، وَفِي اليَوْمِ التَّالِي رَكِبْنَا الحَافِلَةَ إِلَى البَتْرَاءِ. كَانَتِ الرِّحْلَةُ طَوِيلَةً: ثَلَاثَ سَاعَاتٍ تَقْرِيبًا. مَشَيْنَا فِي المَدِينَةِ القَدِيمَةِ مِنَ الصَّبَاحِ إِلَى العَصْرِ، وَالْتَقَطْنَا صُوَرًا كَثِيرَةً. كَانَ الجَوُّ حَارًّا جِدًّا، وَنَسِيَ أَخِي قُبَّعَتَهُ فِي الفُنْدُقِ، فَأَصَابَهُ صُدَاعٌ. فِي المَسَاءِ أَكَلْنَا طَعَامًا أُرْدُنِّيًّا لَذِيذًا. إِذَا زُرْتَ البَتْرَاءَ، سَتُحِبُّهَا، وَلٰكِنْ خُذْ مَعَكَ مَاءً كَثِيرًا وَقُبَّعَةً!',
    questions: [
      { prompt: 'PLACE — Which country did the family visit?', options: ['Jordan', 'Egypt', 'Oman'], answer: 0, feedback: 'سَافَرْتُ … إِلَى الأُرْدُنِّ.' },
      { prompt: 'TRANSPORT — How did they get to Petra?', options: ['by bus', 'by plane', 'by car'], answer: 0, feedback: 'رَكِبْنَا الحَافِلَةَ إِلَى البَتْرَاءِ.' },
      { prompt: 'TIME — How long was the bus journey?', options: ['about three hours', 'about one hour', 'all day'], answer: 0, feedback: 'ثَلَاثَ سَاعَاتٍ تَقْرِيبًا.' },
      { prompt: 'PROBLEM — What happened to the brother?', options: ['he got a headache', 'he lost his camera', 'he missed the bus'], answer: 0, feedback: 'فَأَصَابَهُ صُدَاعٌ.' },
      { prompt: 'OPINION — What does the writer think of Petra?', options: ['you will love it', 'it is boring', 'it is too far'], answer: 0, feedback: 'إِذَا زُرْتَ البَتْرَاءَ، سَتُحِبُّهَا.' },
      { prompt: 'INFER — Why did the brother get a headache? (not stated)', options: ['it was very hot and he had no hat', 'he ate too much', 'the bus was slow'], answer: 0, feedback: 'الجَوُّ حَارًّا جِدًّا + نَسِيَ قُبَّعَتَهُ — two clues together.' },
    ],
  },
};
const petraGloss = [['الصَّيْفِ المَاضِي', 'last summer'], ['سَافَرْتُ', 'I travelled'], ['وَصَلْنَا', 'we arrived'], ['فِي اليَوْمِ التَّالِي', 'the next day'], ['رَكِبْنَا', 'we rode / took'], ['تَقْرِيبًا', 'about'], ['مَشَيْنَا', 'we walked'], ['العَصْرِ', 'the afternoon'], ['نَسِيَ', 'he forgot'], ['قُبَّعَتَهُ', 'his hat']];
const petraSlides = D.readingSlides(petra, petraGloss, {
  readMin: 3, qMin: 4,
  notes: `YOU DO — READING (3 min read + 4 min questions + 2 min answers). Teacher-written A2 travel account for the Topic A evidence hunt (it recycles AT-A-L02 time, AT-A-L04 food, AT-A-L07 health and AT-A-L09 transport). Every question is labelled with the detail type the website challenge names: place, time, transport, opinion, problem — and one INFERENCE.
TIME FRAMES (Topic A grammar): the story is in the past (سَافَرْتُ، وَصَلْنَا، رَكِبْنَا، مَشَيْنَا); the last sentence switches to advice for the future (إِذَا زُرْتَ … سَتُحِبُّهَا · خُذْ …). Ask: which sentence is not about the past?
Core: questions 1–4 with the glossary. Develop: all 6. Stretch: the website opinion text (extension at the end).`,
}).map((sp) => ({ ...sp, eyebrow: sp.eyebrow.replace('You do · reading', 'You do · reading · Topic A text') }));

const raw = D.devLesson('P3-L08', {
  siteRef: 'Advanced Topics › Topic A › Lesson 11 (AT-A-L11), lesson engine Pathways › Progression › P3 › P3-L08',
  support: `• The website engine is a Progression (B1+) lesson: reading إِذَا (real) and لَوْ (not real) conditionals as a clue to the writer’s attitude. For this class: Core reads a short teacher-written travel account and hunts for evidence (place, time, transport, opinion, problem); Develop adds the inference question and “if” sentences (إِذَا … سَـ); Stretch reads the website opinion text and names the writer’s attitude from لَوْ.
• Main You Do = reading (Topic A text), then the evidence-hunt challenge, then a short writing task (6 min). The website listening (a talk about conditionals) is FLEX.
• Topic A links: the travel text recycles transport (AT-A-L09), health (AT-A-L07), food (AT-A-L04) and time (AT-A-L02).
• Urdu bridge: سیاح / سیاحت، ہوٹل (English) / فُنْدُقٌ، نقشہ (Persian) / خَرِيطَةٌ، ساحل.`,
  teach: 'Travel words, then “if” (real) and “if only” (not real), then how to find evidence.',
  wedo: 'Picture match, sort the conditionals, fix the sentences.',
  next: nx,
  flexGroups: [0, 1, 2],
  kwText: '24 reading-analysis words from the website (FLEX, for Stretch) + 6 Topic A travel words (CORE).',
  doNow: {
    questions: [
      q('What does مُشَتِّتٌ mean?', ['a distractor', 'a key word', 'a detail'], 'Prepared at home (AT-A-L09).'),
      q('What does أَتَوَقَّعُ mean?', ['I predict', 'I focus', 'I travel'], 'Prepared at home (AT-A-L09).'),
      q('Choose “I go by train.”', ['أَذْهَبُ بِالقِطَارِ.', 'أَذْهَبُ عَلَى القِطَارِ.', 'أَذْهَبُ مَشْيًا القِطَارَ.'], 'AT-A-L09: bi- with vehicles.'),
      q('Usually by bus, but today on foot. How does he go TODAY?', ['on foot', 'by bus', 'by train'], 'AT-A-L10: the distractor is “usually”.', { ar: 'عَادَةً بِالحَافِلَةِ، وَلٰكِنْ اليَوْمَ مَشْيًا.' }),
      q('Which verb is in the PAST?', ['سَافَرْتُ', 'أُسَافِرُ', 'سَأُسَافِرُ'], 'Time frames — needed today.'),
    ],
    keyIdea: { text: 'Every answer needs evidence: find the exact Arabic words. Check the time frame: past (safartu), now (usāfiru) or future (sa-usāfiru).', ar: '{w|سَافَرْتُ} · {k|أُسَافِرُ} · {e|سَ}أُسَافِرُ' },
    retrieves: 'Questions 1–2 test two of the five strategy words prepared at home. Questions 3–4 retrieve AT-A-L09 (transport) and AT-A-L10 (distractors). Question 5 previews today’s time-frame check.',
  },
  routes: {
    core: ['I can find place, time and transport in a travel text.', 'I can copy the Arabic evidence for my answer.'],
    develop: ['I can work out one meaning that is not stated (inference).', 'I can tell a real “if” (idhā) from an “if only” (law).'],
    stretch: ['I can explain what “law” shows about the writer’s attitude.', 'I can state the purpose of a text.'],
  },
  bridge: [
    { ar: 'سَائِحٌ', urdu: 'سیاح', tr: 'sā’iḥ', en: 'a tourist (Urdu: سیاحت = tourism)' },
    { ar: 'سَاحِلٌ', urdu: 'ساحل', tr: 'sāḥil', en: 'coast' },
    { ar: 'سَفَرٌ', urdu: 'سفر', tr: 'safar', en: 'travel' },
    { ar: 'خَرِيطَةٌ', urdu: 'نقشہ', tr: 'kharīṭa', en: 'map (not cognate)' },
    { ar: 'فُنْدُقٌ', urdu: 'ہوٹل', tr: 'funduq', en: 'hotel (not cognate)' },
  ],
  bridgeNotes: 'URDU BRIDGE: سیاح، ساحل and سفر are shared. CAREFUL: Urdu uses نقشہ (Persian) for a map and ہوٹل (English) for a hotel — Arabic has خَرِيطَةٌ and فُنْدُقٌ.',
  core: [],
  vocabNotes: { 0: 'FLEX (Stretch): text types — useful for R4 “purpose” questions.', 1: 'FLEX (Stretch): conditional reading terms.', 2: 'FLEX (Stretch): reading verbs — يَدُلُّ عَلَى، يَكْشِفُ عَنْ.' },
  grammar: [
    travelWords,
    {
      type: 'formsTable', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 1 · two kinds of “if” (website table)', title: 'If … (real) and if only … (not real)', ar: 'إِذَا · لَوْ',
      cols: [{ label: 'If …', w: 1.6, size: 26 }, { label: 'Type', w: 2.2, size: 20 }, { label: 'Example', w: 5.4, size: 22 }, { label: 'What it shows', w: 3.13 }],
      rows: [
        { core: true, cells: [{ ar: '{w|إِذَا}' }, 'real (Type 1)', { ar: '{w|إِذَا} زُرْتَ البَتْرَاءَ، {w|سَ}تُحِبُّهَا.' }, 'advice: it can really happen'] },
        { cells: [{ ar: '{e|لَوْ}' }, 'not real (Type 2)', { ar: '{e|لَوْ} نُظِّمَتِ الزِّيَارَاتُ، {e|لَ}كَانَ أَفْضَلَ.' }, 'it did not happen → criticism'] },
        { cells: [{ ar: '{w|سَـ}' }, 'result, Type 1', { ar: 'إِذَا حَجَزْتَ مُبَكِّرًا، {w|سَ}تُوَفِّرُ.' }, 'goes with idhā'] },
        { cells: [{ ar: '{e|لَـ}' }, 'result, Type 2', { ar: 'لَوْ حَجَزْتَ مُبَكِّرًا، {e|لَ}وَفَّرْتَ.' }, 'goes with law'] },
      ],
      foot: 'Core: idhā = if (real advice). Develop: match sa- with idhā and la- with law. Stretch: law → the writer is criticising.',
      notes: `GRAMMAR PART 1 — website rules “Classify by particle” (إِذَا real · لَوْ hypothetical), “Match the result marker” (إِذَا … سَـ · لَوْ … لَـ) and the website table. Row 1 uses the Petra text so Core meets إِذَا in context.
English: If you visit Petra, you will love it. · If the visits had been organised, it would have been better. · If you book early, you will save. · If you had booked early, you would have saved.
Website common error: reading a لَوْ sentence as a genuine recommendation, or using سَـ after لَوْ.`,
    },
    {
      type: 'ruleCards', stage: 'teach', min: 3, eyebrow: 'Grammar focus · Part 2 · reading like a detective (Topic A: evidence, inference, time frames)', title: 'Find it, infer it, date it', ar: 'الدَّلِيلُ · الاِسْتِنْتَاجُ · الزَّمَنُ',
      cards: [
        { chip: 'FIND · CORE', color: '1E7B4F', head: 'exact words', big: 'رَكِبْنَا الحَافِلَةَ إِلَى البَتْرَاءِ.', en: 'We took the bus to Petra.', clue: 'Transport? → copy these words.' },
        { chip: 'INFER · DEVELOP', color: '1D5FBF', head: 'two clues', big: 'الجَوُّ حَارٌّ + نَسِيَ قُبَّعَتَهُ', en: 'hot weather + forgot his hat', clue: '→ why the headache (not stated).' },
        { chip: 'TIME FRAME · DEVELOP', color: 'C77700', head: 'past · advice', big: 'سَافَرْتُ … سَتُحِبُّهَا', en: 'I travelled (past) … you will love it (future)', clue: 'Story in the past, advice for the future.' },
      ],
      error: { text: 'Website common error: after law the result takes la-, not sa-.', pairs: [['لَوْ حَجَزْتَ مُبَكِّرًا، لَوَفَّرْتَ.', 'لَوْ حَجَزْتَ مُبَكِّرًا، سَتُوَفِّرُ.']] },
      notes: `GRAMMAR PART 2 — the Topic A page lists “reading inference; vocabulary in context; time frames”. The three moves:
• FIND: the answer is the exact Arabic words (website success criterion: “I locate the exact phrase that proves each answer”).
• INFER: join two clues to reach an idea the text does not say — the website “infer one unstated meaning from context”.
• TIME FRAME: past verbs (سَافَرْتُ، رَكِبْنَا) vs. present / future advice (إِذَا زُرْتَ … سَتُحِبُّهَا · خُذْ). Links to AT-A-L10 distractors (“usually” vs. “today”).
Stretch: website rule “Reading verbs” — يَدُلُّ عَلَى (indicates), يَكْشِفُ عَنْ (reveals).`,
    },
  ],
  quick: [0, 1, 3, 4],
  rest: [2, 5, 6, 7],
  ido: {
    title: 'Watch me hunt for evidence',
    steps: [
      { head: 'Question', ar: 'كَيْفَ ذَهَبُوا إِلَى البَتْرَاءِ؟', think: 'Transport word? Look for a vehicle.' },
      { head: 'Scan', ar: 'رَكِبْنَا {k|الحَافِلَةَ} إِلَى البَتْرَاءِ.', think: 'The key word is in sentence 2.' },
      { head: 'Check time', ar: '{w|سَافَرْتُ} … {w|بِالطَّائِرَةِ}', think: 'Plane was to Jordan — not to Petra (distractor).' },
      { head: 'Answer', ar: 'بِالحَافِلَةِ — الدَّلِيلُ: رَكِبْنَا الحَافِلَةَ.', think: 'Answer + evidence.' },
    ],
    legend: ['k', 'w'], legendLabels: { k: 'EVIDENCE', w: 'DISTRACTOR' },
    model: 'السُّؤَالُ: كَيْفَ ذَهَبُوا إِلَى البَتْرَاءِ؟ الجَوَابُ: بِالحَافِلَةِ. الدَّلِيلُ: «رَكِبْنَا {k|الحَافِلَةَ} إِلَى البَتْرَاءِ». لَيْسَ بِالطَّائِرَةِ، لِأَنَّ {w|الطَّائِرَةَ} كَانَتْ إِلَى الأُرْدُنِّ.',
    modelEn: 'Question: how did they get to Petra? Answer: by bus. Evidence: “we took the bus to Petra”. Not by plane, because the plane was to Jordan.',
    notes: 'I DO (3 min) — model the evidence hunt on the Topic A text before students read it in full: question → key word → scan → check the distractor (AT-A-L10) → answer + evidence. Students copy the four-line answer frame.',
  },
  game: {
    title: 'Tourism scenes: match the picture',
    pick: [0, 1, 2],
    en: ['Tourists visit the historic landmarks.', 'The region is famous for its beaches.', 'Tourists stay in hotels.'],
    icons: [[['fa6', 'FaLandmark', '8A5A2B'], ['fa6', 'FaCamera', '5A6472']], [['fa6', 'FaUmbrellaBeach', 'C77700'], ['fa6', 'FaSun', 'C77700']], [['fa6', 'FaHotel', '1D5FBF'], ['fa6', 'FaSuitcaseRolling', '6B4C9A']]],
    labels: ['landmarks, camera', 'beach, sun', 'hotel, suitcase'],
    order: [2, 0, 1],
    notes: 'Website visual game (3 of 6). Ask: find the plural in each sentence (السُّيَّاحُ، المَعَالِمُ، الشَّوَاطِئُ، الفَنَادِقُ). Other cards for homework: يَسْتَخْدِمُ الزُّوَّارُ الخَرَائِطَ، يُجَرِّبُ السَّائِحُ الطَّعَامَ المَحَلِّيَّ.',
  },
  sorterTitle: 'Real, not real, or a reading term?',
  sorterCats: ['Real (idhā … sa-)', 'Not real (law … la-)', 'Reading terms'],
  sorterNotes: 'The website sorter has no title on the page; the title here is teacher-written. Core: sort by the first word only (إِذَا or لَوْ).',
  hints: ['Idhā takes which result marker?', 'Law takes which result marker?', 'Indicates + which preposition?'],
  coreTip: 'FLEX listening. Core: questions 1 and 5.',
  listenRoutes: 'FLEX — Develop / Stretch: all 5.',
  gloss: [
    ['عِنْدَمَا تَقْرَأُ نَصًّا سِيَاحِيًّا، لَا تَنْظُرْ إِلَى المَعْلُومَةِ فَقَطْ، بَلْ إِلَى نَوْعِ الشَّرْطِ.', 'When you read a tourism text, don’t look only at the information, but at the type of “if”.'],
    ['«إِذَا زُرْتَ الأُرْدُنَّ، لَنْ تَنْدَمَ» — يَرَى الزِّيَارَةَ إِمْكَانًا حَقِيقِيًّا وَيَنْصَحُ بِهَا.', '“If you visit Jordan, you won’t regret it” — he sees the visit as a real possibility and recommends it.'],
    ['«لَوْ نُظِّمَتِ الزِّيَارَاتُ مُبَكِّرًا، لَكَانَتِ المَوَاقِعُ أَفْضَلَ» — يَصِفُ أَمْرًا لَمْ يَحْدُثْ،', '“If the visits had been organised early, the sites would be better” — he describes something that did not happen,'],
    ['وَيُلَمِّحُ إِلَى نَقْدٍ لِلسِّيَاسَةِ الحَالِيَّةِ.', 'and hints at criticism of the current policy.'],
    ['طَابِقِ العَلَامَةَ مَعَ الأَدَاةِ: سَـ مَعَ إِذَا، وَلَـ مَعَ لَوْ.', 'Match the marker to the particle: sa- with idhā, la- with law.'],
  ],
  speak: {
    coreMade: true,
    prompts: [
      { route: 'core', ar: 'أَيْنَ سَافَرَتِ الأُسْرَةُ؟ كَيْفَ؟' },
      { route: 'develop', ar: 'مَا المُشْكِلَةُ فِي الرِّحْلَةِ؟ وَلِمَاذَا حَدَثَتْ؟' },
      { route: 'develop', ar: 'مَا نَوْعُ الشَّرْطِ فِي هٰذِهِ الجُمْلَةِ؟ حَقِيقِيٌّ أَمِ افْتِرَاضِيٌّ؟' },
      { route: 'stretch', ar: 'مَاذَا يَكْشِفُ اخْتِيَارُ لَوْ عَنْ مَوْقِفِ الكَاتِبِ؟' },
    ],
    stems: [
      { route: 'core', ar: 'سَافَرَتْ إِلَى ______ بِـ ______ .' },
      { route: 'develop', ar: 'أَصَابَهُ صُدَاعٌ لِأَنَّ ______ .' },
      { route: 'develop', ar: 'هٰذَا شَرْطٌ ______ لِأَنَّ فِيهِ ______ .' },
      { route: 'stretch', ar: 'يَكْشِفُ اخْتِيَارُ لَوْ عَنْ ______ .' },
    ],
    modelEn: ['What type of conditional is “law nuẓẓimat az-ziyārāt, la-kāna afḍal”?', 'A hypothetical Type 2 conditional: “law … la-” describes something that did not happen.'],
    notes: 'Prompts 1–2 are teacher-made on the Topic A text; prompts 3–4 are the website prompts.',
  },
  write: {
    core: { amount: '4 sentences', task: 'Answer 4 questions about the Petra text with evidence.', how: 'Answer in English or Arabic, then copy the Arabic evidence words.' },
    develop: { amount: '5–6 sentences', task: 'Write a short trip account like the Petra text.', how: 'Past verbs (safartu, rakibtu, akaltu), place, transport, one problem, one piece of advice with idhā … sa-.' },
    stretch: { amount: '80–90 words', task: 'Website task: analyse the website opinion text (extension).', how: 'One idhā and one law sentence, what law reveals, and the purpose of the text.' },
  },
  frames: {
    core: [
      { en: 'Last summer I travelled to …', ar: 'فِي الصَّيْفِ المَاضِي سَافَرْتُ إِلَى ______ .' },
      { en: 'We took the bus / the train.', ar: 'رَكِبْنَا الحَافِلَةَ / القِطَارَ.' },
      { en: 'We visited …', ar: 'زُرْنَا ______ .' },
      { en: 'The weather was hot / cold.', ar: 'كَانَ الجَوُّ حَارًّا / بَارِدًا.' },
      { en: 'The evidence is: “…”', ar: 'الدَّلِيلُ: « ______ ».' },
    ],
    develop: [
      { en: 'We stayed in a hotel near …', ar: 'أَقَمْنَا فِي فُنْدُقٍ قَرِيبٍ مِنْ ______ .' },
      { en: 'The problem was that …', ar: 'كَانَتِ المُشْكِلَةُ أَنَّ ______ .' },
      { en: 'If you visit …, you will …', ar: 'إِذَا زُرْتَ ______ ، سَـ ______ .' },
      { en: 'Take … with you!', ar: 'خُذْ مَعَكَ ______ !' },
      { en: 'This shows that …', ar: 'يَدُلُّ هٰذَا عَلَى أَنَّ ______ .' },
    ],
    bank: ['سَافَرْتُ', 'رَكِبْنَا', 'زُرْنَا', 'أَكَلْنَا', 'فُنْدُقٌ', 'مَعَالِمُ', 'شَاطِئٌ', 'خَرِيطَةٌ', 'إِذَا … سَـ', 'لَوْ … لَـ', 'يَدُلُّ عَلَى', 'الدَّلِيلُ'],
  },
  stretch: [
    ['السِّيَاحَةُ نِعْمَةٌ وَنِقْمَةٌ فِي آنٍ وَاحِدٍ', 'tourism is a blessing and a curse at the same time'],
    ['تُلْحِقُ الضَّرَرَ بِالمَوَاقِعِ الهَشَّةِ', 'it damages fragile sites'],
    ['يَكْشِفُ عَنْ نَقْدٍ ضِمْنِيٍّ', 'it reveals an implicit criticism'],
    ['سِيَاحَةٌ مُسْتَدَامَةٌ', 'sustainable tourism'],
    ['الغَرَضُ مِنَ النَّصِّ إِقْنَاعُ القَارِئِ', 'the purpose of the text is to persuade the reader'],
  ],
  modelEn: 'The text reveals its writer’s attitude through the type of conditional. The sentence “if tourists respect the rules, the sites will remain” is a real conditional that the writer recommends and sees as possible. The sentence “if governments had cared early, the sites would not have deteriorated” is a hypothetical Type 2 conditional. Choosing “law” indicates an implicit criticism, because the condition was not met, so the writer finds current policy inadequate. The purpose of the text is to persuade the reader that regulation is necessary. So I read the text aware of the conditional type and the writer’s attitude.',
  find: ['a real conditional (idhā)', 'a hypothetical conditional (law)', 'yadullu ‘alā', 'the purpose'],
  modelNotes: 'This is the website model for the STRETCH task (analysing the website opinion text). Core and Develop compare their Petra answers with the reading answer slide instead.',
  selfCheck: [
    { route: 'core', text: 'Each answer has the exact Arabic evidence.' },
    { route: 'core', text: 'I used past verbs for my trip.' },
    { route: 'develop', text: 'I joined two clues for an inference.' },
    { route: 'develop', text: 'idhā → sa-; law → la-.' },
    { route: 'stretch', text: 'I explained what law reveals about the writer.' },
  ],
  exit: [0, 1, 2],
  glossary: [
    ['كَاتِبُ المَقَالِ', 'the article’s writer'], ['نِعْمَةٌ وَنِقْمَةٌ', 'a blessing and a curse'], ['تُسْهِمُ فِي', 'contributes to'], ['غَيْرَ أَنَّ', 'however'], ['المَوَاقِعِ الهَشَّةِ', 'fragile sites'],
    ['القَوَاعِدَ', 'the rules'], ['لِلْأَجْيَالِ القَادِمَةِ', 'for future generations'], ['التَّدَهْوُرِ', 'deterioration'], ['يُوصِي بِـ', 'recommends'], ['سُلُوكِهِ', 'his behaviour'],
  ],
  prep: {
    words: [['أَسْتَيْقِظُ فِي السَّاعَةِ …', 'I wake up at … o’clock', 'AT-A-L01–L02'], ['أُرِيدُ … مِنْ فَضْلِكَ', 'I would like …, please', 'AT-A-L05'], ['عِنْدِي أَلَمٌ فِي … مُنْذُ …', 'I have pain in … since …', 'AT-A-L07'], ['يَجِبُ أَنْ تَسْتَرِيحَ', 'you should rest', 'AT-A-L08'], ['أَذْهَبُ بِالحَافِلَةِ', 'I go by bus', 'AT-A-L09']],
    questionEn: 'Revise Topic A: which TWO subtopics do you find hardest? Write one correct sentence for each.',
    questionAr: 'مَا أَصْعَبُ مَوْضُوعٍ فِي المِحْوَرِ أ؟',
    homework: {
      core: 'Learn the five Topic A structures on this slide and write one sentence with each.',
      develop: 'Website P3-L08: the picture game and the sorter; write a 6-sentence trip account.',
      stretch: 'Website writing task: 80–90 words analysing the opinion text (idhā / law).',
    },
    wordsSource: 'The five “words” are the five highest-value Topic A structures for the AT-A-L12 review and assessment (one from each key subtopic).',
  },
  remember: 'Remember: 5 Topic A structures — one from each subtopic.',
});
const fitPlan = (slides) => {
  const out = slides.map((sp) => {
    if (sp.type === 'mcq' && /· listening ·/.test(sp.eyebrow || '')) return { ...sp, min: undefined, flex: true, eyebrow: `${sp.eyebrow} · FLEX` };
    if (sp.type === 'routes') return { ...sp, min: 6, eyebrow: 'You do · independent practice · 6 minutes' };
    return sp;
  });
  out.splice(out.findIndex((sp) => sp.type === 'challenge'), 0, ...petraSlides);
  return out;
};
const slides = T.wrap('A', 11, 'P3-L08', raw, {
  patch: [fitPlan],
  challenge: {
    min: 3,
    steps: [
      'Pairs take the Petra text and make an evidence table in the chat.',
      'Five rows: place · time · transport · opinion · problem (Arabic evidence).',
      'Then ONE inference: something the text does not say. Justify it with two clues.',
      'Two pairs share their inference on the mic; the class agrees or challenges.',
    ],
    routes: {
      core: 'Place, time and transport rows only — copy the Arabic words.',
      develop: 'All five rows + one inference with two clues.',
      stretch: 'Inference + the time frame of the last sentence (advice: idhā … sa-, khudh …).',
    },
    phrases: [['المَكَانُ', 'place'], ['الزَّمَانُ', 'time'], ['وَسِيلَةُ النَّقْلِ', 'transport'], ['الرَّأْيُ · المُشْكِلَةُ', 'opinion · problem']],
    notes: 'Website Topic A challenge “Travel evidence hunt”. Model table: المَكَانُ = الأُرْدُنُّ / البَتْرَاءُ · الزَّمَانُ = فِي الصَّيْفِ المَاضِي، ثَلَاثَ سَاعَاتٍ · النَّقْلُ = بِالطَّائِرَةِ، الحَافِلَةَ · الرَّأْيُ = سَتُحِبُّهَا · المُشْكِلَةُ = الجَوُّ حَارٌّ، نَسِيَ قُبَّعَتَهُ، صُدَاعٌ. Inference ideas: the family is not from Jordan (they flew there); they were tired (a long day walking in the heat); Petra is far from Amman (three hours by bus).',
  },
});
module.exports = { meta, slides };
