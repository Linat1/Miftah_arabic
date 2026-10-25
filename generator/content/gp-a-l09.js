'use strict';
/* Guided Practice Rooms · AT-A-L09 · Travel and Transport for Everyday Journeys. New tasks. Teacher-made. */
const XP = require('./xp-a-l09');

const base = { topic: 'A', n: 9, short: 'Everyday Journeys', arShort: 'المُوَاصَلَاتُ اليَوْمِيَّةُ', fileTitle: 'Travel_and_Transport_for_Everyday_Journeys', title: 'Travel and Transport for Everyday Journeys', icon: 'FaBus', grammar: 'travel verbs with bi- (bi-l-ḥāfila); prepositions of place; journey time (tastaghriqu ar-riḥla …); comparatives (asraʿu min, arkhaṣu min); directions (imperatives)' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (asking for directions to the station, a bus that never came), a topic conversation with A-R-E-T, and a one-minute talk about their journey to school.',
  words: XP.speak.words,
  words1: { title: 'Getting around', ar: 'التَّنَقُّلُ' },
  words2: { title: 'Comparing transport and giving directions', ar: 'المُقَارَنَةُ وَالاتِّجَاهَاتُ' },
  ladder: {
    q: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', qEn: 'How do you get to school?',
    rungs: [
      { ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ.', en: 'I go to school by bus.' },
      { ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ، لِأَنَّهَا أَرْخَصُ مِنَ القِطَارِ.', en: '… because it is cheaper than the train.' },
      { ar: '… وَتَسْتَغْرِقُ الرِّحْلَةُ عِشْرِينَ دَقِيقَةً، لٰكِنَّ الحَافِلَةَ تَكُونُ مُزْدَحِمَةً فِي الصَّبَاحِ.', en: '… the journey takes twenty minutes, but the bus is crowded in the morning.' },
      { ar: '… وَفِي السَّنَةِ القَادِمَةِ سَأَذْهَبُ بِالدَّرَّاجَةِ، فَهِيَ فِي رَأْيِي أَسْرَعُ وَأَصَحُّ.', en: '… next year I will cycle — in my opinion it is quicker and healthier.' },
    ],
  },
  ladderQs: [
    { q: 'كَمْ دَقِيقَةً تَسْتَغْرِقُ رِحْلَتُكَ إِلَى المَدْرَسَةِ؟', l1: 'تَسْتَغْرِقُ …', l2: '… لِأَنَّ …', l3: '… وَأَمْسِ اسْتَغْرَقَتْ …' },
    { q: 'مَا وَسِيلَةُ المُوَاصَلَاتِ الَّتِي تُفَضِّلُهَا؟', l1: 'أُفَضِّلُ …', l2: '… لِأَنَّهُ أَسْرَعُ مِنْ …', l3: '… وَفِي المُسْتَقْبَلِ …' },
    { q: 'هَلِ المُوَاصَلَاتُ فِي مَدِينَتِكَ جَيِّدَةٌ؟', l1: 'نَعَمْ / لَا، …', l2: '… لِأَنَّ …', l3: '… مَثَلًا …' },
    { q: 'كَيْفَ ذَهَبْتَ إِلَى البَحْرِ آخِرَ مَرَّةٍ؟', l1: 'ذَهَبْتُ بِـ …', l2: '… لِأَنَّ …', l3: '… وَاسْتَغْرَقَتِ الرِّحْلَةُ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a street in Amman', title: 'Role play 1 — Asking the way to the station', ar: 'أَيْنَ المَحَطَّةُ؟', you: 'a tourist', them: 'a passer-by',
      tasks: [
        { ex: 'نَعَمْ؟ هَلْ تَحْتَاجُ إِلَى مُسَاعَدَةٍ؟', task: 'Ask where the bus station is.', plan: 'أَيْنَ ← عَفْوًا، أَيْنَ مَحَطَّةُ …؟', model: 'عَفْوًا، أَيْنَ مَحَطَّةُ الحَافِلَاتِ، مِنْ فَضْلِكَ؟', modelEn: 'Excuse me, where is the bus station, please?' },
        { ex: 'اذْهَبْ إِلَى الأَمَامِ، ثُمَّ انْعَطِفْ يَسَارًا.', task: 'Ask if it is far.', plan: 'هَلْ ← هَلْ هِيَ بَعِيدَةٌ؟', model: 'هَلْ هِيَ بَعِيدَةٌ مِنْ هُنَا؟', modelEn: 'Is it far from here?' },
        { ex: 'لَا، عَشْرُ دَقَائِقَ مَشْيًا. إِلَى أَيْنَ تُسَافِرُ؟', task: 'Say where you are going.', plan: 'إِلَى أَيْنَ ← أُسَافِرُ إِلَى …', model: 'أُسَافِرُ إِلَى البَتْرَاءِ.', modelEn: 'I am travelling to Petra.' },
        { ex: 'جَمِيلٌ! كَيْفَ وَصَلْتَ إِلَى عَمَّانَ؟', task: 'Say how you arrived (past).', plan: 'كَيْفَ + وَصَلْتَ ← وَصَلْتُ بِـالطَّائِرَةِ', model: 'وَصَلْتُ بِالطَّائِرَةِ مِنْ لَنْدَنَ.', modelEn: 'I arrived by plane from London.' },
        { unexpected: true, ex: 'هَلْ تُرِيدُ أَنْ تَأْخُذَ سَيَّارَةَ أُجْرَةٍ؟', task: 'Answer the unexpected question with a reason.', plan: 'هَلْ ← لَا، شُكْرًا، لِأَنَّ …', model: 'لَا، شُكْرًا، لِأَنَّ المَشْيَ أَرْخَصُ وَالطَّقْسَ جَمِيلٌ.', modelEn: 'No thanks, because walking is cheaper and the weather is nice.' },
      ],
      girl: 'تَحْتَاجِينَ · اذْهَبِي · انْعَطِفِي · تُسَافِرِينَ · وَصَلْتِ · تُرِيدِينَ',
      notes: 'Language: understanding directions (idhhab, inʿaṭif yasāran) · hal hiya baʿīdatun? · bi- + transport · comparatives arkhaṣu. Task 4: the Speaker says وَصَلْتُ بِالطَّائِرَةِ.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a bus company help desk', title: 'Role play 2 — The bus that never came', ar: 'الحَافِلَةُ الَّتِي لَمْ تَأْتِ', you: 'a passenger', them: 'the customer-service officer',
      tasks: [
        { ex: 'كَيْفَ أَسْتَطِيعُ أَنْ أُسَاعِدَكَ؟', task: 'Explain what happened this morning (past).', model: 'انْتَظَرْتُ الحَافِلَةَ رَقْمَ ٢٥ أَرْبَعِينَ دَقِيقَةً هٰذَا الصَّبَاحَ، لٰكِنَّهَا لَمْ تَأْتِ.', modelEn: 'I waited forty minutes for the number 25 bus this morning, but it never came.' },
        { ex: 'آسِفٌ جِدًّا. مَاذَا حَدَثَ بَعْدَ ذٰلِكَ؟', task: 'Say what you did and the result.', model: 'أَخَذْتُ سَيَّارَةَ أُجْرَةٍ، فَدَفَعْتُ خَمْسَةَ عَشَرَ جُنَيْهًا وَوَصَلْتُ مُتَأَخِّرًا إِلَى الامْتِحَانِ.', modelEn: 'I took a taxi, paid fifteen pounds and arrived late for my exam.' },
        { ex: 'هَلْ تَسْتَعْمِلُ هٰذِهِ الحَافِلَةَ كَثِيرًا؟', task: 'Say how often and compare with another option.', model: 'نَعَمْ، كُلَّ يَوْمٍ، لِأَنَّهَا أَرْخَصُ مِنَ القِطَارِ، لٰكِنَّهَا أَبْطَأُ.', modelEn: 'Yes, every day, because it is cheaper than the train, but slower.' },
        { ex: 'سَنَتَحَقَّقُ مِنَ المُشْكِلَةِ.', task: 'ASK about compensation or a timetable.', model: 'هَلْ يُمْكِنُ أَنْ تُرْجِعُوا لِي ثَمَنَ سَيَّارَةِ الأُجْرَةِ؟', modelEn: 'Could you refund me the taxi fare?' },
        { unexpected: true, ex: 'مَا الَّذِي يَجِبُ أَنْ نُغَيِّرَهُ فِي خِدْمَتِنَا؟', task: 'Answer the unexpected question (advice + reason).', model: 'يَجِبُ أَنْ تُرْسِلُوا رِسَالَةً إِلَى الرُّكَّابِ عِنْدَمَا تَتَأَخَّرُ الحَافِلَةُ، لِكَيْ يُخَطِّطُوا لِرِحْلَتِهِمْ.', modelEn: 'You should send passengers a message when a bus is late, so they can plan their journey.' },
      ],
      girl: 'أُسَاعِدَكِ · تَسْتَعْمِلِينَ',
      notes: 'Language: past narrative (intaẓartu, akhadhtu, dafaʿtu) · lam taʾti · comparatives arkhaṣu / abṭaʾu · hal yumkinu an turjiʿū · yajibu an + li-kay (Stretch).',
    },
  ],
  convAr: 'رِحْلَاتِي اليَوْمِيَّةُ',
  conv: [
    { route: 'Core', q: 'كَيْفَ تَذْهَبُ إِلَى بَيْتِ جَدَّتِكَ؟', en: 'How do you get to your grandmother’s house?', push: 'كَمْ دَقِيقَةً؟' },
    { route: 'Core', q: 'هَلْ تُحِبُّ القِطَارَ؟', en: 'Do you like the train?', push: 'لِمَاذَا؟' },
    { route: 'Develop', q: 'صِفْ رِحْلَةً صَعْبَةً قُمْتَ بِهَا.', en: 'Describe a difficult journey you made.', push: 'مَاذَا حَدَثَ؟' },
    { route: 'Develop', q: 'مَا الأَسْرَعُ فِي مَدِينَتِكَ: الحَافِلَةُ أَمِ القِطَارُ؟', en: 'What is quicker in your town: bus or train?', push: 'وَالأَرْخَصُ؟' },
    { route: 'Stretch', q: 'هَلْ يَجِبُ أَنْ تَكُونَ المُوَاصَلَاتُ العَامَّةُ مَجَّانِيَّةً لِلطُّلَّابِ؟', en: 'Should public transport be free for students?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'كَيْفَ سَيَتَنَقَّلُ النَّاسُ بَعْدَ عِشْرِينَ سَنَةً؟', en: 'How will people travel in twenty years?', push: 'وَهَلْ هٰذَا أَفْضَلُ؟' },
  ],
  convModels: [
    { q: 'هَلْ تُحِبُّ القِطَارَ؟', model: 'نَعَمْ، أُحِبُّهُ كَثِيرًا، لِأَنَّهُ مُرِيحٌ وَأَسْرَعُ مِنَ السَّيَّارَةِ؛ فِي الصَّيْفِ المَاضِي سَافَرْنَا بِالقِطَارِ إِلَى إِدِنْبَرَةَ، وَقَرَأْتُ كِتَابًا كَامِلًا فِي الطَّرِيقِ.', modelEn: 'A: yes, a lot · R: comfortable, faster than the car · E/T: last summer we took the train to Edinburgh and I read a whole book on the way.' },
    { q: 'صِفْ رِحْلَةً صَعْبَةً قُمْتَ بِهَا.', model: 'فِي الشِّتَاءِ المَاضِي تَأَخَّرَ القِطَارُ سَاعَتَيْنِ بِسَبَبِ الثَّلْجِ، فَانْتَظَرْنَا فِي المَحَطَّةِ البَارِدَةِ؛ وَصَلْنَا إِلَى البَيْتِ فِي مُنْتَصَفِ اللَّيْلِ، وَكُنْتُ مُتْعَبًا جِدًّا.', modelEn: 'A: last winter the train was two hours late because of snow · E: we waited in the cold station and got home at midnight · I was very tired.' },
    { q: 'هَلْ يَجِبُ أَنْ تَكُونَ المُوَاصَلَاتُ العَامَّةُ مَجَّانِيَّةً لِلطُّلَّابِ؟', model: 'فِي رَأْيِي نَعَمْ، لِأَنَّ كَثِيرًا مِنَ العَائِلَاتِ لَا تَسْتَطِيعُ أَنْ تَدْفَعَ كُلَّ يَوْمٍ؛ صَحِيحٌ أَنَّ ذٰلِكَ غَالٍ لِلْحُكُومَةِ، غَيْرَ أَنَّهُ يُقَلِّلُ السَّيَّارَاتِ فِي الشَّوَارِعِ.', modelEn: 'Opinion: yes · R: many families cannot pay every day · concession: it’s expensive for the government, but it reduces cars on the roads.' },
  ],
  talk: {
    title: 'One minute: my journey to school', ar: 'رِحْلَتِي إِلَى المَدْرَسَةِ',
    text: 'Talk for one minute about your journey to school: how you go, how long it takes, what you see, what is good or bad about it — and how you would like to travel in the future.',
    routes: {
      core: '30 seconds: how you go (bi- + transport), how long, and one adjective (مُزْدَحِمٌ · سَرِيعٌ).',
      develop: '60 seconds: add a comparison (أَسْرَعُ مِنْ / أَرْخَصُ مِنْ) and a journey that went wrong.',
      stretch: '90 seconds: three time frames, a comparison and an opinion about transport in your town.',
    },
    phrases: [['أَذْهَبُ بِـالحَافِلَةِ / مَشْيًا', 'I go by bus / on foot'], ['تَسْتَغْرِقُ الرِّحْلَةُ …', 'the journey takes …'], ['فِي الطَّرِيقِ أَرَى …', 'on the way I see …'], ['أَتَمَنَّى أَنْ …', 'I hope to …']],
  },
  checkCore: 'used بِـ + transport and said how long the journey takes',
  checkDevelop: 'used a comparative (أَسْرَعُ مِنْ · أَرْخَصُ مِنْ) with a reason',
};
speak.RP[0].tasks[3].plan = 'كَيْفَ ← وَصَلْتُ بِالطَّائِرَةِ …';
speak.talk.phrases[0] = ['أَذْهَبُ بِالحَافِلَةِ / مَشْيًا', 'I go by bus / on foot'];
speak.checkCore = 'used bi- + transport (بِالحَافِلَةِ) and said how long the journey takes';
speak.ladderQs[3].l1 = 'ذَهَبْتُ بِالسَّيَّارَةِ …';

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (directions for a friend coming to your party), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Student travel card: application', ar: 'طَلَبُ بِطَاقَةِ مُوَاصَلَاتٍ لِلطُّلَّابِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'المَدْرَسَةُ', en: 'School', tip: 'The name of your school.' },
      { core: true, ar: 'وَسِيلَةُ المُوَاصَلَاتِ', en: 'Type of transport', tip: 'الحَافِلَةُ · القِطَارُ' },
      { core: true, ar: 'مِنْ … إِلَى …', en: 'From … to …', tip: 'مِنَ البَيْتِ إِلَى المَدْرَسَةِ' },
      { core: true, ar: 'مُدَّةُ الرِّحْلَةِ', en: 'Journey time', tip: 'نِصْفُ سَاعَةٍ' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تَحْتَاجُ البِطَاقَةَ؟', en: 'ONE sentence: why you need the card', tip: 'أَحْتَاجُهَا لِأَنَّ …' },
    ],
  },
  Q2: {
    title: 'Question 2: how to get to my party', ar: 'كَيْفَ تَصِلُ إِلَى حَفْلَتِي',
    task: 'Your friend is coming to your birthday party but does not know your area. Write an email in Arabic of about 80–90 words. You must include: • the best way to come (transport) and why • how long the journey takes and how much it costs • directions from the station to your house • what happened when another friend got lost last year.',
    phrases: [['أَفْضَلُ طَرِيقَةٍ هِيَ …', 'the best way is …'], ['تَسْتَغْرِقُ الرِّحْلَةُ … وَثَمَنُ التَّذْكِرَةِ …', 'the journey takes … and the ticket costs …'], ['اخْرُجْ مِنَ المَحَطَّةِ، ثُمَّ انْعَطِفْ …', 'leave the station, then turn …'], ['فِي السَّنَةِ المَاضِيَةِ ضَاعَ …', 'last year … got lost']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنِ الطَّرِيقِ إِلَى حَفْلَتِكَ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about the way to your party (80–90 words).'],
      ['1', 'مَا أَفْضَلُ وَسِيلَةٍ لِلْمَجِيءِ؟ وَلِمَاذَا؟', 'The best transport, and why'],
      ['2', 'كَمْ تَسْتَغْرِقُ الرِّحْلَةُ؟ وَكَمْ ثَمَنُهَا؟', 'Journey time and cost'],
      ['3', 'صِفِ الطَّرِيقَ مِنَ المَحَطَّةِ إِلَى بَيْتِكَ.', 'Directions from the station'],
      ['4', 'مَاذَا حَدَثَ عِنْدَمَا ضَاعَ صَدِيقٌ آخَرُ فِي السَّنَةِ المَاضِيَةِ؟', 'When another friend got lost last year'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'مَا أَفْضَلُ … وَلِمَاذَا → PRESENT + comparative + reason', 'كَمْ … كَمْ ثَمَنُهَا → PRESENT + numbers', 'صِفِ الطَّرِيقَ → IMPERATIVES: اذْهَبْ · انْعَطِفْ · امْشِ', 'مَاذَا حَدَثَ … ضَاعَ → PAST'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'أَفْضَلُ طَرِيقَةٍ هِيَ ______ ، لِأَنَّ ______ .', en: '1 · The best way is …, because …' },
      { ar: 'تَسْتَغْرِقُ الرِّحْلَةُ ______ ، وَثَمَنُ التَّذْكِرَةِ ______ .', en: '2 · The journey takes …, and the ticket costs …' },
      { ar: 'اخْرُجْ مِنَ المَحَطَّةِ، ثُمَّ انْعَطِفْ ______ .', en: '3 · Leave the station, then turn …' },
      { ar: 'فِي السَّنَةِ المَاضِيَةِ ضَاعَ ______ ، لِأَنَّ ______ .', en: '4 · Last year … got lost, because …' },
    ],
    developFrames: [
      { ar: 'القِطَارُ ______ مِنَ الحَافِلَةِ، لٰكِنَّ ______ .', en: '1 · The train is …er than the bus, but …' },
      { ar: 'يَنْطَلِقُ القِطَارُ كُلَّ ______ ، وَيَصِلُ بَعْدَ ______ .', en: '2 · The train leaves every …, and arrives after …' },
      { ar: 'امْشِ إِلَى الأَمَامِ حَتَّى ______ ، وَبَيْتِي ______ .', en: '3 · Walk straight on until …, and my house is …' },
      { ar: 'نَزَلَ فِي المَحَطَّةِ الخَطَأِ، فَ ______ .', en: '4 · He got off at the wrong station, so …' },
    ],
    bank: ['بِالقِطَارِ · بِالحَافِلَةِ', 'مَحَطَّةٌ', 'تَذْكِرَةٌ', 'أَسْرَعُ مِنْ', 'يَمِينًا · يَسَارًا', 'إِلَى الأَمَامِ', 'مُقَابِلَ · بِجَانِبِ', 'ضَاعَ'],
    model: {
      text: `مَرْحَبًا يَا حَسَنُ،
أَنَا سَعِيدٌ لِأَنَّكَ سَتَأْتِي إِلَى حَفْلَتِي يَوْمَ السَّبْتِ! أَفْضَلُ طَرِيقَةٍ هِيَ القِطَارُ، لِأَنَّهُ أَسْرَعُ مِنَ الحَافِلَةِ، وَلَا يَتَأَخَّرُ كَثِيرًا. تَسْتَغْرِقُ الرِّحْلَةُ نِصْفَ سَاعَةٍ فَقَطْ، وَثَمَنُ التَّذْكِرَةِ أَرْبَعَةُ جُنَيْهَاتٍ لِلطُّلَّابِ. عِنْدَمَا تَخْرُجُ مِنَ المَحَطَّةِ، انْعَطِفْ يَمِينًا، ثُمَّ امْشِ إِلَى الأَمَامِ خَمْسَ دَقَائِقَ حَتَّى المَسْجِدِ، وَبَيْتِي مُقَابِلَهُ، وَبَابُهُ أَزْرَقُ، وَأَمَامَهُ شَجَرَةٌ كَبِيرَةٌ. فِي السَّنَةِ المَاضِيَةِ ضَاعَ صَدِيقِي سَامِي، لِأَنَّهُ نَزَلَ فِي المَحَطَّةِ الخَطَأِ، فَوَصَلَ بَعْدَ أَنْ أَكَلْنَا الكَعْكَةَ كُلَّهَا! لِذٰلِكَ اتَّصِلْ بِي إِذَا ضِعْتَ.
إِلَى اللِّقَاءِ،
بِلَالٌ`,
      en: '“Hi Hassan, I’m happy you’re coming to my party on Saturday! The best way is the train, because it is faster than the bus and is rarely late. The journey takes only half an hour, and a student ticket costs four pounds. When you leave the station, turn right, then walk straight on for five minutes to the mosque; my house is opposite it, with a blue door and a big tree in front. Last year my friend Sami got lost because he got off at the wrong station, so he arrived after we had eaten all the cake! So call me if you get lost. See you, Bilal.”',
      find: ['أَسْرَعُ مِنَ الحَافِلَةِ', 'تَسْتَغْرِقُ الرِّحْلَةُ', 'انْعَطِفْ يَمِينًا، ثُمَّ امْشِ', 'لِأَنَّهُ نَزَلَ فِي المَحَطَّةِ الخَطَأِ'],
    },
  },
  upgrade: [
    { ar: 'أَذْهَبُ بِالقِطَارِ.', en: 'I go by train.' },
    { ar: 'أَذْهَبُ إِلَى المَدِينَةِ بِالقِطَارِ كُلَّ يَوْمِ سَبْتٍ، وَتَسْتَغْرِقُ الرِّحْلَةُ سَاعَةً.', en: '… to town every Saturday, and the journey takes an hour.' },
    { ar: 'أَذْهَبُ إِلَى المَدِينَةِ بِالقِطَارِ كُلَّ يَوْمِ سَبْتٍ، لِأَنَّهُ أَسْرَعُ مِنَ الحَافِلَةِ.', en: '… because it is faster than the bus.' },
    { ar: '… وَفِي رَأْيِي القِطَارُ مُرِيحٌ، لٰكِنَّ التَّذَاكِرَ غَالِيَةٌ جِدًّا!', en: '… in my opinion the train is comfortable, but tickets are very expensive!' },
  ],
  builder: [
    { en: 'The train is faster than the bus.', cols: [['القِطَارُ', 'قِطَارٌ'], ['أَسْرَعُ', 'سَرِيعٌ'], ['مِنَ الحَافِلَةِ', 'لِلْحَافِلَةِ']], key: [0, 0, 0], why: 'Comparison = أَفْعَلُ + مِنْ: أَسْرَعُ مِنَ الحَافِلَةِ.' },
    { en: 'Turn left, then walk straight on.', cols: [['انْعَطِفْ', 'يَنْعَطِفُ'], ['يَسَارًا', 'يَمِينًا'], ['ثُمَّ امْشِ إِلَى الأَمَامِ', 'ثُمَّ يَمْشِي إِلَى الأَمَامِ']], key: [0, 0, 0], why: 'Directions use imperatives: انْعَطِفْ · امْشِ.' },
    { en: 'The journey took two hours yesterday.', cols: [['اسْتَغْرَقَتِ الرِّحْلَةُ', 'اسْتَغْرَقَ الرِّحْلَةُ'], ['سَاعَتَيْنِ', 'سَاعَتَانِ'], ['أَمْسِ', 'غَدًا']], key: [0, 0, 0], why: 'الرِّحْلَةُ is feminine → اسْتَغْرَقَتْ; two hours as the object = سَاعَتَيْنِ.' },
  ],
  errors: [
    { wrong: 'أَذْهَبُ فِي الحَافِلَةِ إِلَى المَدْرَسَةِ.', hint: 'Which little word means “by”?', right: 'أَذْهَبُ بِالحَافِلَةِ إِلَى المَدْرَسَةِ.', why: 'By + transport = bi-: بِالحَافِلَةِ.' },
    { wrong: 'القِطَارُ أَسْرَعُ الحَافِلَةِ.', hint: 'Comparisons need one more word.', right: 'القِطَارُ أَسْرَعُ مِنَ الحَافِلَةِ.', why: 'Comparative + مِنْ (than).' },
    { wrong: 'تَسْتَغْرِقُ الرِّحْلَةُ ثَلَاثَةَ سَاعَاتٍ.', hint: 'Is سَاعَة masculine or feminine?', right: 'تَسْتَغْرِقُ الرِّحْلَةُ ثَلَاثَ سَاعَاتٍ.', why: 'سَاعَة is feminine → ثَلَاثَ سَاعَاتٍ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a journey that went wrong', ar: 'رِحْلَةٌ لَمْ تَسِرْ كَمَا خَطَّطْنَا',
    task: 'Full Q3 title: “Getting around”. Today write ONLY the past paragraph: a journey that went wrong — where you were going, how, what happened, how you solved it and how you felt.',
    formula: [
      { ar: 'فِي الصَّيْفِ المَاضِي سَافَرْنَا بِالسَّيَّارَةِ إِلَى البَحْرِ.', en: 'T · Last summer we drove to the sea.' },
      { ar: 'فِي الطَّرِيقِ تَعَطَّلَتِ السَّيَّارَةُ، فَانْتَظَرْنَا سَاعَتَيْنِ.', en: 'D · On the way the car broke down; we waited two hours.' },
      { ar: 'حَدَثَ ذٰلِكَ لِأَنَّ السَّيَّارَةَ كَانَتْ قَدِيمَةً.', en: 'R · because the car was old.' },
      { ar: 'كُنَّا غَاضِبِينَ، لٰكِنَّنَا ضَحِكْنَا فِي النِّهَايَةِ.', en: 'F · We were angry, but we laughed in the end.' },
    ],
    phrases: [['كُنَّا مُسَافِرِينَ إِلَى …', 'we were travelling to …'], ['فِي الطَّرِيقِ …', 'on the way …'], ['تَأَخَّرَ · تَعَطَّلَ · ضَاعَ', 'was late · broke down · got lost'], ['فِي النِّهَايَةِ وَصَلْنَا …', 'in the end we arrived …'], ['تَعَلَّمْتُ أَنْ …', 'I learnt to …']],
    model: {
      text: 'فِي العُطْلَةِ المَاضِيَةِ سَافَرْتُ مَعَ أُمِّي بِالقِطَارِ إِلَى مَانْشِسْتَرَ لِنَزُورَ خَالِي. فِي الطَّرِيقِ تَوَقَّفَ القِطَارُ فَجْأَةً بِسَبَبِ عُطْلٍ، وَانْتَظَرْنَا سَاعَةً كَامِلَةً بِدُونِ طَعَامٍ. بَعْدَ ذٰلِكَ نَزَلْنَا فِي مَحَطَّةٍ صَغِيرَةٍ، وَأَخَذْنَا حَافِلَةً بَطِيئَةً وَمُزْدَحِمَةً جِدًّا. وَصَلْنَا مُتَأَخِّرِينَ ثَلَاثَ سَاعَاتٍ، وَكُنْتُ جَائِعًا وَغَاضِبًا، لٰكِنَّ خَالِي اسْتَقْبَلَنَا بِعَشَاءٍ لَذِيذٍ، فَنَسِيتُ كُلَّ شَيْءٍ. تَعَلَّمْتُ أَنْ آخُذَ مَعِي طَعَامًا فِي كُلِّ رِحْلَةٍ.',
      en: 'T: last holiday I travelled with my mum by train to Manchester to visit my uncle · D: on the way the train suddenly stopped because of a fault; we waited a whole hour with no food, then got off at a small station and took a slow, very crowded bus · F: we arrived three hours late and I was hungry and angry, but my uncle welcomed us with a delicious dinner and I forgot everything · I learnt to take food on every journey.',
      find: ['فِي الطَّرِيقِ تَوَقَّفَ', 'بِسَبَبِ عُطْلٍ', 'وَصَلْنَا مُتَأَخِّرِينَ', 'تَعَلَّمْتُ أَنْ آخُذَ'],
    },
  },
};

module.exports = { speak, write };
