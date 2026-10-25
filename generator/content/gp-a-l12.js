'use strict';
/* Guided Practice Rooms · AT-A-L12 · Topic A Review — mock exam practice. New tasks across all of Topic A. Teacher-made. */
const XP = require('./xp-a-l12');

const base = { topic: 'A', n: 12, short: 'Topic A Review', arShort: 'مُرَاجَعَةُ المِحْوَرِ الأَوَّلِ', fileTitle: 'Topic_A_Review_and_Assessment', title: 'Topic A Review — mock exam practice', icon: 'FaClipboardCheck', grammar: 'all of Topic A: routine and time, food, health and advice, transport and travel; three time frames, comparisons, idhā and law … la-' };

const speak = {
  ...base,
  focus: 'The last Topic A practice room before the mock: students run their own speaking practice using everything from the topic — a word warm-up, the answer ladder, two mixed role plays (a summer-camp interview, at a train-station café), a conversation with A-R-E-T across all of Topic A, and a one-minute talk.',
  words: XP.speak.words,
  words1: { title: 'Topic A: routine, food and health', ar: 'الرُّوتِينُ وَالطَّعَامُ وَالصِّحَّةُ' },
  words2: { title: 'Topic A: travel and top-band structures', ar: 'السَّفَرُ وَالجُمَلُ المُتَقَدِّمَةُ' },
  ladder: {
    q: 'كَيْفَ تَعِيشُ حَيَاةً صِحِّيَّةً؟', qEn: 'How do you live a healthy life?',
    rungs: [
      { ar: 'آكُلُ طَعَامًا صِحِّيًّا وَأُمَارِسُ الرِّيَاضَةَ.', en: 'I eat healthy food and do sport.' },
      { ar: 'آكُلُ طَعَامًا صِحِّيًّا وَأُمَارِسُ الرِّيَاضَةَ، لِأَنِّي أُرِيدُ أَنْ أَكُونَ نَشِيطًا.', en: '… because I want to be active.' },
      { ar: '… مَثَلًا أَمْشِي إِلَى المَدْرَسَةِ كُلَّ يَوْمٍ، وَأَشْرَبُ ثَمَانِيَةَ أَكْوَابٍ مِنَ المَاءِ.', en: '… for example I walk to school every day and drink eight glasses of water.' },
      { ar: '… عِنْدَمَا كُنْتُ صَغِيرًا كُنْتُ آكُلُ الحَلَوِيَّاتِ كَثِيرًا، أَمَّا الآنَ فَأَتَجَنَّبُهَا؛ وَلَوْ كَانَ عِنْدِي وَقْتٌ أَكْثَرُ، لَسَبَحْتُ كُلَّ يَوْمٍ.', en: '… when I was little I ate lots of sweets, but now I avoid them; if I had more time, I would swim every day.' },
    ],
  },
  ladderQs: [
    { q: 'صِفْ يَوْمًا عَادِيًّا فِي حَيَاتِكَ.', l1: 'أَسْتَيْقِظُ فِي …', l2: '… ثُمَّ … لِأَنَّ …', l3: '… وَأَمْسِ … / غَدًا …' },
    { q: 'مَا أَفْضَلُ وَجْبَةٍ أَكَلْتَهَا؟', l1: 'أَفْضَلُ وَجْبَةٍ كَانَتْ …', l2: '… لِأَنَّهَا …', l3: '… وَسَأَطْبُخُهَا …' },
    { q: 'مَاذَا تَفْعَلُ عِنْدَمَا تَكُونُ مَرِيضًا؟', l1: 'عِنْدَمَا أَكُونُ مَرِيضًا …', l2: '… لِأَنَّ …', l3: '… آخِرَ مَرَّةٍ …' },
    { q: 'أَيْنَ تُرِيدُ أَنْ تُسَافِرَ؟', l1: 'أُرِيدُ أَنْ أُسَافِرَ إِلَى …', l2: '… لِأَنَّ …', l3: '… إِذَا … / لَوْ … لَسَافَرْتُ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'an interview for a summer-camp helper', title: 'Role play 1 — Helper at a summer camp', ar: 'مُسَاعِدٌ فِي المُخَيَّمِ الصَّيْفِيِّ', you: 'a student applying to help', them: 'the camp leader',
      tasks: [
        { ex: 'مَتَى تَسْتَيْقِظُ عَادَةً؟', task: 'Say when you usually wake up.', plan: 'مَتَى ← أَسْتَيْقِظُ عَادَةً فِي …', model: 'أَسْتَيْقِظُ عَادَةً فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ.', modelEn: 'I usually wake up at half past six.' },
        { ex: 'هَلْ تَسْتَطِيعُ أَنْ تَطْبُخَ؟', task: 'Say what you can cook.', plan: 'هَلْ ← نَعَمْ، أَسْتَطِيعُ أَنْ أَطْبُخَ …', model: 'نَعَمْ، أَسْتَطِيعُ أَنْ أَطْبُخَ المَعْكَرُونَةَ وَالشُّورْبَةَ.', modelEn: 'Yes, I can cook pasta and soup.' },
        { ex: 'مَاذَا تَفْعَلُ إِذَا مَرِضَ طِفْلٌ؟', task: 'Say what you would do.', plan: 'مَاذَا ← أَتَّصِلُ بِـ … / آخُذُهُ إِلَى …', model: 'أَتَّصِلُ بِالمُمَرِّضَةِ فَوْرًا، وَأَبْقَى مَعَهُ.', modelEn: 'I call the nurse at once and stay with him.' },
        { ex: 'كَيْفَ سَتَأْتِي إِلَى المُخَيَّمِ؟', task: 'Say how you will come.', plan: 'كَيْفَ + سَتَأْتِي ← سَآتِي بِالقِطَارِ …', model: 'سَآتِي بِالقِطَارِ، ثُمَّ بِالحَافِلَةِ.', modelEn: 'I will come by train, then by bus.' },
        { unexpected: true, ex: 'لِمَاذَا تُرِيدُ هٰذَا العَمَلَ؟', task: 'Answer the unexpected question with a reason.', plan: 'لِمَاذَا ← لِأَنِّي أُحِبُّ …', model: 'لِأَنِّي أُحِبُّ الأَطْفَالَ، وَأُرِيدُ أَنْ أَكْتَسِبَ خِبْرَةً.', modelEn: 'Because I like children, and I want to gain experience.' },
      ],
      girl: 'تَسْتَيْقِظِينَ · تَسْتَطِيعِينَ · تَطْبُخِي · تَفْعَلِينَ · سَتَأْتِينَ · تُرِيدِينَ',
      notes: 'Topic A mix: routine (time), food (cooking), health (illness), transport (future) and a reason. Every answer is a short, complete sentence.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a café at a busy train station', title: 'Role play 2 — A delayed train and a café', ar: 'قِطَارٌ مُتَأَخِّرٌ وَمَقْهًى', you: 'a traveller whose train is delayed', them: 'a friendly café owner',
      tasks: [
        { ex: 'تَبْدُو مُتْعَبًا! مَاذَا حَدَثَ؟', task: 'Explain what happened to your train (past).', model: 'كُنْتُ مُسَافِرًا إِلَى لَنْدَنَ، لٰكِنَّ القِطَارَ تَأَخَّرَ سَاعَتَيْنِ بِسَبَبِ الثَّلْجِ.', modelEn: 'I was travelling to London, but the train was two hours late because of the snow.' },
        { ex: 'مَاذَا تُحِبُّ أَنْ تَأْكُلَ أَوْ تَشْرَبَ؟', task: 'Order politely, with a preference.', model: 'أُرِيدُ شَايًا بِالنَّعْنَاعِ وَسَنْدَوِيشَ دَجَاجٍ؛ أُفَضِّلُ الطَّعَامَ السَّاخِنَ فِي الشِّتَاءِ.', modelEn: 'I’d like mint tea and a chicken sandwich — I prefer hot food in winter.' },
        { ex: 'هَلْ تُسَافِرُ كَثِيرًا بِالقِطَارِ؟', task: 'Compare the train with another transport.', model: 'نَعَمْ، لِأَنَّ القِطَارَ أَسْرَعُ مِنَ الحَافِلَةِ وَأَكْثَرُ رَاحَةً، لٰكِنَّهُ أَغْلَى.', modelEn: 'Yes, because the train is faster and more comfortable than the bus, but more expensive.' },
        { ex: 'عِنْدِي دَوَاءٌ لِلصُّدَاعِ إِذَا أَرَدْتَ.', task: 'ASK for advice about your health.', model: 'شُكْرًا، وَهَلْ يَجِبُ أَنْ آكُلَ قَبْلَ أَنْ آخُذَهُ؟', modelEn: 'Thank you — should I eat before I take it?' },
        { unexpected: true, ex: 'لَوْ كَانَ عِنْدَكَ يَوْمٌ حُرٌّ هُنَا، مَاذَا تَفْعَلُ؟', task: 'Answer the unexpected question (law … la-).', model: 'لَوْ كَانَ عِنْدِي يَوْمٌ حُرٌّ، لَزُرْتُ القَلْعَةَ القَدِيمَةَ، وَلَأَكَلْتُ فِي مَطْعَمِكَ مَرَّةً ثَانِيَةً!', modelEn: 'If I had a free day, I would visit the old castle — and eat in your café again!' },
      ],
      girl: 'تَبْدِينَ مُتْعَبَةً · تُحِبِّينَ · تَأْكُلِي · تَشْرَبِي · تُسَافِرِينَ · أَرَدْتِ · عِنْدَكِ',
      notes: 'Topic A mix at Stretch level: kuntu musāfiran · bi-sababi · ufaḍḍilu · comparatives (asraʿu, akthar rāḥa, aghlā) · qabla an + verb in -a · law … la-.',
    },
  ],
  convAr: 'مُحَادَثَةٌ عَنْ كُلِّ المِحْوَرِ',
  conv: [
    { route: 'Core', q: 'مَتَى تَنَامُ فِي أَيَّامِ المَدْرَسَةِ؟', en: 'When do you go to bed on school days?', push: 'وَفِي العُطْلَةِ؟' },
    { route: 'Core', q: 'مَا طَعَامُكَ المُفَضَّلُ؟', en: 'What is your favourite food?', push: 'لِمَاذَا؟' },
    { route: 'Develop', q: 'كَيْفَ تُحَافِظُ عَلَى صِحَّتِكَ؟', en: 'How do you keep healthy?', push: 'مِثْلَ مَاذَا؟' },
    { route: 'Develop', q: 'صِفْ رِحْلَةً قُمْتَ بِهَا مَعَ عَائِلَتِكَ.', en: 'Describe a trip with your family.', push: 'وَكَيْفَ سَافَرْتُمْ؟' },
    { route: 'Stretch', q: 'هَلْ حَيَاةُ الشَّبَابِ اليَوْمَ أَصَحُّ مِنَ المَاضِي؟', en: 'Are young people’s lives healthier than in the past?', push: 'لِمَاذَا فِي رَأْيِكَ؟' },
    { route: 'Stretch', q: 'لَوْ اسْتَطَعْتَ أَنْ تُغَيِّرَ شَيْئًا فِي رُوتِينِكَ، مَاذَا تُغَيِّرُ؟', en: 'If you could change one thing in your routine, what would it be?', push: 'وَلِمَاذَا؟' },
  ],
  convModels: [
    { q: 'كَيْفَ تُحَافِظُ عَلَى صِحَّتِكَ؟', model: 'أُحَافِظُ عَلَى صِحَّتِي بِالنَّوْمِ الجَيِّدِ، لِأَنَّ النَّوْمَ يُسَاعِدُنِي عَلَى التَّرْكِيزِ؛ أَنَامُ ثَمَانِيَ سَاعَاتٍ، وَفِي الشَّهْرِ القَادِمِ سَأَبْدَأُ دُرُوسَ السِّبَاحَةِ.', modelEn: 'A: by sleeping well · R: sleep helps me concentrate · E: eight hours · T: next month I’ll start swimming lessons.' },
    { q: 'صِفْ رِحْلَةً قُمْتَ بِهَا مَعَ عَائِلَتِكَ.', model: 'فِي عِيدِ الأَضْحَى سَافَرْنَا بِالسَّيَّارَةِ إِلَى بَيْتِ جَدِّي فِي الرِّيفِ، وَاسْتَغْرَقَتِ الرِّحْلَةُ أَرْبَعَ سَاعَاتٍ؛ أَكَلْنَا الكَثِيرَ مِنَ اللَّحْمِ، وَلَعِبْتُ مَعَ أَبْنَاءِ عَمِّي فِي الحُقُولِ.', modelEn: 'A: at Eid al-Adha we drove to grandpa’s in the countryside — four hours · E: lots of meat, and I played with my cousins in the fields.' },
    { q: 'هَلْ حَيَاةُ الشَّبَابِ اليَوْمَ أَصَحُّ مِنَ المَاضِي؟', model: 'صَحِيحٌ أَنَّنَا نَعْرِفُ اليَوْمَ أَكْثَرَ عَنِ الطَّعَامِ الصِّحِّيِّ، غَيْرَ أَنَّنَا نَجْلِسُ أَكْثَرَ؛ كَانَ جَدِّي يَمْشِي سَاعَتَيْنِ كُلَّ يَوْمٍ، أَمَّا نَحْنُ فَنَذْهَبُ بِالسَّيَّارَةِ إِلَى كُلِّ مَكَانٍ.', modelEn: 'Concession: we know more about healthy food today, but we sit more · past/contrast: grandpa walked two hours a day, whereas we drive everywhere.' },
  ],
  talk: {
    title: 'One minute: my life in Topic A', ar: 'حَيَاتِي فِي المِحْوَرِ الأَوَّلِ',
    text: 'Talk for one minute linking all of Topic A: your daily routine, what you eat, how you stay healthy, how you travel — and a trip you remember.',
    routes: {
      core: '30 seconds: one sentence for each theme (routine · food · health · transport).',
      develop: '60 seconds: add reasons, comparisons and a past trip.',
      stretch: '90 seconds: three time frames, a concession (صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …) and law … la-.',
    },
  },
  checkCore: 'answered with Topic A vocabulary in full sentences',
  checkDevelop: 'used past, present and future in the same conversation',
};

const write = {
  ...base,
  focus: 'The last Topic A writing room before the mock: a Q1 warm-up, decoding a new Q2 task (an exchange student’s first week), upgrading sentences, writing with a buddy, spotting and fixing the most common Topic A errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Exchange programme: student profile', ar: 'بَرْنَامَجُ التَّبَادُلِ: مَلَفُّ الطَّالِبِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'وَقْتُ الاسْتِيقَاظِ', en: 'Wake-up time', tip: 'السَّابِعَةُ' },
      { core: true, ar: 'طَعَامٌ لَا تَأْكُلُهُ', en: 'A food you don’t eat', tip: 'لَحْمُ الخِنْزِيرِ · السَّمَكُ' },
      { core: true, ar: 'مُشْكِلَةٌ صِحِّيَّةٌ', en: 'A health issue', tip: 'لَا تُوجَدُ · حَسَاسِيَّةٌ' },
      { core: true, ar: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ', en: 'How you get to school', tip: 'بِالحَافِلَةِ' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ أَنْ تُشَارِكَ؟', en: 'ONE sentence: why you want to take part', tip: 'أُرِيدُ أَنْ … لِأَنَّ …' },
    ],
  },
  Q2: {
    title: 'Question 2: my first week as an exchange student', ar: 'أُسْبُوعِي الأَوَّلُ فِي التَّبَادُلِ',
    task: 'You are on a school exchange in an Arab country. Write an email in Arabic to your family of about 80–90 words. You must include: • your daily routine at your host family’s house • the food and what you think of it • a small health problem you had this week and what you did • a trip you will take next weekend.',
    phrases: [['أَسْتَيْقِظُ هُنَا فِي …', 'here I wake up at …'], ['الطَّعَامُ هُنَا … أَكْثَرَ مِنْ …', 'the food here is more … than …'], ['كَانَ يُؤْلِمُنِي … فَذَهَبْتُ …', '… hurt, so I went …'], ['فِي نِهَايَةِ الأُسْبُوعِ القَادِمِ سَنَزُورُ …', 'next weekend we will visit …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى عَائِلَتِكَ عَنْ أُسْبُوعِكَ الأَوَّلِ (٨٠–٩٠ كَلِمَةً).', 'Write to your family about your first week (80–90 words).'],
      ['1', 'صِفْ رُوتِينَكَ اليَوْمِيَّ.', 'Your daily routine'],
      ['2', 'مَا رَأْيُكَ فِي الطَّعَامِ؟', 'The food and your opinion'],
      ['3', 'مَا المُشْكِلَةُ الصِّحِّيَّةُ الَّتِي حَدَثَتْ؟ وَمَاذَا فَعَلْتَ؟', 'A health problem and what you did'],
      ['4', 'أَيْنَ سَتَذْهَبُ فِي نِهَايَةِ الأُسْبُوعِ القَادِمِ؟', 'Next weekend’s trip'],
    ],
    decode: ['an email to your FAMILY → informal: أُمِّي وَأَبِي العَزِيزَانِ', 'صِفْ رُوتِينَكَ → PRESENT routine + times', 'رَأْيُكَ فِي الطَّعَامِ → PRESENT opinion + comparison', 'حَدَثَتْ · فَعَلْتَ → PAST', 'سَتَذْهَبُ → FUTURE + transport'],
    coreFrames: [
      { ar: 'أُمِّي وَأَبِي العَزِيزَانِ،', en: 'Dear Mum and Dad,' },
      { ar: 'أَسْتَيْقِظُ فِي السَّاعَةِ ______ ، ثُمَّ ______ .', en: '1 · I wake at …, then …' },
      { ar: 'الطَّعَامُ هُنَا ______ ، وَأُحِبُّ ______ .', en: '2 · The food here is …, and I like …' },
      { ar: 'يَوْمَ ______ كَانَ يُؤْلِمُنِي ______ ، فَـ ______ .', en: '3 · On … my … hurt, so …' },
      { ar: 'فِي نِهَايَةِ الأُسْبُوعِ القَادِمِ سَنَزُورُ ______ .', en: '4 · Next weekend we will visit …' },
    ],
    developFrames: [
      { ar: 'رُوتِينِي هُنَا مُخْتَلِفٌ: ______ ، بَيْنَمَا فِي البَيْتِ ______ .', en: '1 · My routine here is different: …, whereas at home …' },
      { ar: 'الطَّعَامُ ______ أَكْثَرَ مِنْ طَعَامِنَا، لٰكِنَّ ______ .', en: '2 · The food is more … than ours, but …' },
      { ar: 'نَصَحَتْنِي الأُسْرَةُ بِأَنْ ______ ، فَتَحَسَّنْتُ.', en: '3 · The family advised me to …, so I got better.' },
      { ar: 'سَنُسَافِرُ بِـالقِطَارِ إِلَى ______ ، وَإِذَا ______ .', en: '4 · We will travel by train to …, and if …' },
    ],
    bank: ['أَسْتَيْقِظُ', 'الأُسْرَةُ المُضِيفَةُ', 'حَارٌّ · لَذِيذٌ', 'أَكْثَرُ … مِنْ', 'يُؤْلِمُنِي بَطْنِي', 'صَيْدَلِيَّةٌ', 'نَصَحَنِي بِأَنْ', 'سَنَزُورُ'],
    model: {
      text: `أُمِّي وَأَبِي العَزِيزَانِ،
أَنَا بِخَيْرٍ فِي الأُرْدُنِّ! أَسْتَيْقِظُ هُنَا فِي السَّاعَةِ السَّادِسَةِ، لِأَنَّ المَدْرَسَةَ تَبْدَأُ مُبَكِّرًا، ثُمَّ أَتَنَاوَلُ الفُطُورَ مَعَ الأُسْرَةِ المُضِيفَةِ. الطَّعَامُ هُنَا أَلَذُّ مِنْ طَعَامِنَا، لٰكِنَّهُ حَارٌّ قَلِيلًا، وَأُحِبُّ الفَلَافِلَ وَالحُمُّصَ كَثِيرًا، خُصُوصًا مَعَ الخُبْزِ السَّاخِنِ. يَوْمَ الثُّلَاثَاءِ كَانَ يُؤْلِمُنِي بَطْنِي، لِأَنِّي أَكَلْتُ كَثِيرًا جِدًّا، فَنَصَحَتْنِي الأُمُّ المُضِيفَةُ بِأَنْ أَشْرَبَ الشَّايَ بِالنَّعْنَاعِ، وَأَنْ أَرْتَاحَ، فَتَحَسَّنْتُ بِسُرْعَةٍ. فِي نِهَايَةِ الأُسْبُوعِ القَادِمِ سَنُسَافِرُ بِالحَافِلَةِ إِلَى البَحْرِ المَيِّتِ، وَإِذَا كَانَ الجَوُّ جَمِيلًا، فَسَأَسْبَحُ فِيهِ. أَشْتَاقُ إِلَيْكُمْ كَثِيرًا!
ابْنُكُمَا،
طَارِقٌ`,
      en: '“Dear Mum and Dad, I am fine in Jordan! Here I wake up at six because school starts early, then I have breakfast with the host family. The food here is tastier than ours, but a bit spicy, and I really love falafel and hummus, especially with hot bread. On Tuesday my stomach hurt because I ate far too much, so my host mother advised me to drink mint tea and rest, and I got better quickly. Next weekend we will travel by bus to the Dead Sea, and if the weather is nice I will swim in it. I miss you a lot! Your son, Tariq.”',
      find: ['لِأَنَّ المَدْرَسَةَ تَبْدَأُ', 'أَلَذُّ مِنْ طَعَامِنَا', 'فَنَصَحَتْنِي … بِأَنْ', 'وَإِذَا كَانَ الجَوُّ جَمِيلًا'],
    },
  },
  upgrade: [
    { ar: 'سَافَرْنَا إِلَى البَحْرِ.', en: 'We travelled to the sea.' },
    { ar: 'سَافَرْنَا بِالقِطَارِ إِلَى البَحْرِ يَوْمَ السَّبْتِ، وَاسْتَغْرَقَتِ الرِّحْلَةُ سَاعَتَيْنِ.', en: '… by train on Saturday; it took two hours.' },
    { ar: 'سَافَرْنَا بِالقِطَارِ إِلَى البَحْرِ يَوْمَ السَّبْتِ، لِأَنَّهُ أَسْرَعُ مِنَ السَّيَّارَةِ.', en: '… because it is faster than the car.' },
    { ar: '… وَلَوْ كَانَ الجَوُّ أَدْفَأَ، لَسَبَحْنَا طُوَالَ اليَوْمِ!', en: '… and if the weather had been warmer, we would have swum all day!' },
  ],
  builder: [
    { en: 'Every morning I have breakfast at seven.', cols: [['كُلَّ صَبَاحٍ', 'أَمْسِ'], ['أَتَنَاوَلُ الفُطُورَ', 'تَنَاوَلْتُ الفُطُورَ'], ['فِي السَّاعَةِ السَّابِعَةِ', 'فِي السَّاعَةِ السَّابِعِ']], key: [0, 0, 0], why: 'Every morning → present; السَّاعَةُ is feminine → السَّابِعَةِ.' },
    { en: 'The doctor advised me to rest.', cols: [['نَصَحَنِي الطَّبِيبُ', 'نَصَحْتُ الطَّبِيبَ'], ['بِأَنْ أَرْتَاحَ', 'بِأَنْ أَرْتَاحُ'], ['فِي البَيْتِ', 'إِلَى البَيْتِ']], key: [0, 0, 0], why: 'He advised ME → نَصَحَنِي; after أَنْ → أَرْتَاحَ.' },
    { en: 'If I had time, I would cook every day.', cols: [['لَوْ كَانَ عِنْدِي وَقْتٌ', 'إِذَا كَانَ عِنْدِي وَقْتٌ'], ['لَطَبَخْتُ', 'سَأَطْبُخُ'], ['كُلَّ يَوْمٍ', 'أَمْسِ']], key: [0, 0, 0], why: 'Unreal wish → law … la- + past.' },
  ],
  errors: [
    { wrong: 'أُخْتِي يَأْكُلُ الفَطُورَ فِي السَّابِعَةِ.', hint: 'She … ?', right: 'أُخْتِي تَأْكُلُ الفُطُورَ فِي السَّابِعَةِ.', why: 'She → تَأْكُلُ (and the word is الفُطُورَ).' },
    { wrong: 'يَجِبُ أَنْ نَشْرَبُ المَاءَ وَنَنَامُ مُبَكِّرًا.', hint: 'Two verbs after أَنْ.', right: 'يَجِبُ أَنْ نَشْرَبَ المَاءَ وَنَنَامَ مُبَكِّرًا.', why: 'Both verbs after أَنْ end in -a.' },
    { wrong: 'لَوْ كُنْتُ غَنِيًّا، سَأُسَافِرُ إِلَى مِصْرَ.', hint: 'لَوْ needs a special answer.', right: 'لَوْ كُنْتُ غَنِيًّا، لَسَافَرْتُ إِلَى مِصْرَ.', why: 'لَوْ → la- + past.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a day that changed my habits', ar: 'يَوْمٌ غَيَّرَ عَادَاتِي',
    task: 'Full Q3 title: “My daily life — then and now”. Today write ONLY the past paragraph: a day or event that changed your habits (food, sleep, sport or travel) — what happened, why, and how you felt.',
    formula: [
      { ar: 'فِي الصَّيْفِ المَاضِي تَغَيَّرَتْ عَادَاتِي بَعْدَ رِحْلَةٍ إِلَى الجِبَالِ.', en: 'T · Last summer my habits changed after a mountain trip.' },
      { ar: 'لَمْ أَسْتَطِعْ أَنْ أَمْشِيَ كَثِيرًا، فَتَعِبْتُ بِسُرْعَةٍ.', en: 'D · I couldn’t walk much and got tired quickly.' },
      { ar: 'حَدَثَ ذٰلِكَ لِأَنِّي كُنْتُ لَا أُمَارِسُ الرِّيَاضَةَ.', en: 'R · because I never did sport.' },
      { ar: 'شَعَرْتُ بِالخَجَلِ، وَالآنَ أَرْكُضُ كُلَّ يَوْمٍ.', en: 'F · I felt embarrassed — now I run every day.' },
    ],
    phrases: [['تَغَيَّرَتْ عَادَاتِي بَعْدَ …', 'my habits changed after …'], ['كُنْتُ … أَمَّا الآنَ فَـ…', 'I used to … but now …'], ['حَدَثَ ذٰلِكَ لِأَنَّ …', 'that happened because …'], ['قَرَّرْتُ أَنْ …', 'I decided to …'], ['مُنْذُ ذٰلِكَ الوَقْتِ …', 'since then …']],
    model: {
      text: 'فِي الصَّيْفِ المَاضِي تَغَيَّرَتْ عَادَاتِي بَعْدَ رِحْلَةٍ مَدْرَسِيَّةٍ إِلَى الجِبَالِ. كُنْتُ أَقْضِي سَاعَاتٍ أَمَامَ الشَّاشَةِ، وَآكُلُ الوَجَبَاتِ السَّرِيعَةَ كُلَّ يَوْمٍ تَقْرِيبًا. فِي الرِّحْلَةِ مَشَيْنَا خَمْسَةَ كِيلُومِتْرَاتٍ، لٰكِنِّي تَعِبْتُ بَعْدَ نِصْفِ سَاعَةٍ، وَكَانَتْ رِجْلَايَ تُؤْلِمَانِنِي كَثِيرًا. شَعَرْتُ بِالخَجَلِ أَمَامَ أَصْدِقَائِي، فَقَرَّرْتُ أَنْ أُغَيِّرَ حَيَاتِي. مُنْذُ ذٰلِكَ الوَقْتِ أَمْشِي إِلَى المَدْرَسَةِ، وَأَطْبُخُ مَعَ أُمِّي طَعَامًا صِحِّيًّا، وَفِي الصَّيْفِ القَادِمِ سَأَصْعَدُ الجَبَلَ نَفْسَهُ!',
      en: 'T: last summer my habits changed after a school trip to the mountains · D: I used to spend hours in front of screens and eat fast food almost daily; on the trip we walked five kilometres, but I was tired after half an hour and my legs hurt a lot · F: I felt embarrassed in front of my friends, so I decided to change my life · since then I walk to school and cook healthy food with my mum, and next summer I will climb the same mountain!',
      find: ['تَغَيَّرَتْ عَادَاتِي', 'كُنْتُ أَقْضِي سَاعَاتٍ', 'فَقَرَّرْتُ أَنْ أُغَيِّرَ', 'مُنْذُ ذٰلِكَ الوَقْتِ'],
    },
  },
};
write.Q2.coreFrames[3] = { ar: 'يَوْمَ ______ كَانَ يُؤْلِمُنِي ______ ، فَذَهَبْتُ ______ .', en: '3 · On … my … hurt, so I went …' };
write.Q2.developFrames[3] = { ar: 'سَنُسَافِرُ بِالقِطَارِ إِلَى ______ ، وَإِذَا ______ .', en: '4 · We will travel by train to …, and if …' };
write.Q3.phrases[1] = ['كُنْتُ … أَمَّا الآنَ فَأَمْشِي …', 'I used to … but now I walk …'];
speak.RP[0].tasks[2].plan = 'مَاذَا ← أَتَّصِلُ بِالمُمَرِّضَةِ …';
speak.RP[0].tasks[3].plan = 'كَيْفَ ← سَآتِي بِالقِطَارِ …';

module.exports = { speak, write };
