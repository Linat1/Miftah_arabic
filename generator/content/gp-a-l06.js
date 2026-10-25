'use strict';
/* Guided Practice Rooms · AT-A-L06 · Healthy Eating and Lifestyle Choices. New tasks (not the Exam_Practice workshop ones). Teacher-made. */
const XP = require('./xp-a-l06');

const base = { topic: 'A', n: 6, short: 'A Healthy Lifestyle', arShort: 'نَمَطُ الحَيَاةِ الصِّحِّيُّ', fileTitle: 'Healthy_Eating_and_Lifestyle_Choices', title: 'Healthy Eating and Lifestyle Choices', icon: 'FaHeartPulse', grammar: 'food, sport and sleep vocabulary; advice with يَجِبُ / يَنْبَغِي أَنْ + verb in -a; reasons; past and future' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (a healthy canteen menu, a personal trainer), a topic conversation with A-R-E-T, and a one-minute talk about their healthy week.',
  words: XP.speak.words,
  words1: { title: 'Healthy habits and advice', ar: 'العَادَاتُ الصِّحِّيَّةُ' },
  words2: { title: 'Healthy, active — and what to avoid', ar: 'التَّغْذِيَةُ' },
  ladder: {
    q: 'كَيْفَ تُحَافِظُ عَلَى صِحَّتِكَ؟', qEn: 'How do you look after your health?',
    rungs: [
      { ar: 'أُحَافِظُ عَلَى صِحَّتِي بِالرِّيَاضَةِ.', en: 'I look after my health with sport.' },
      { ar: 'أُحَافِظُ عَلَى صِحَّتِي بِالرِّيَاضَةِ، لِأَنَّهَا تُعْطِينِي طَاقَةً.', en: '… because it gives me energy.' },
      { ar: '… لِأَنَّهَا تُعْطِينِي طَاقَةً، وَأَرْكُضُ فِي الحَدِيقَةِ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ.', en: '… and I run in the park three times a week.' },
      { ar: '… وَفِي الصَّيْفِ القَادِمِ سَأَتَعَلَّمُ السِّبَاحَةَ، فَهِيَ فِي رَأْيِي أَفْضَلُ رِيَاضَةٍ.', en: '… and next summer I will learn to swim — in my opinion it is the best sport.' },
    ],
    notes: 'Point at what each level ADDS: لِأَنَّ (reason) · ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ (frequency) · سَأَتَعَلَّمُ (future) + فِي رَأْيِي (opinion).',
  },
  ladderQs: [
    { q: 'مَاذَا تَأْكُلُ فِي الغَدَاءِ عَادَةً؟', l1: 'آكُلُ …', l2: '… لِأَنَّهُ / لِأَنَّهَا …', l3: '… فِي المَدْرَسَةِ / كُلَّ يَوْمٍ' },
    { q: 'هَلْ تَنَامُ جَيِّدًا؟', l1: 'نَعَمْ، أَنَامُ … سَاعَاتٍ', l2: '… لِأَنِّي …', l3: '… وَأَمْسِ نِمْتُ …' },
    { q: 'مَا الرِّيَاضَةُ الَّتِي تُفَضِّلُهَا؟', l1: 'أُفَضِّلُ …', l2: '… لِأَنَّهَا …', l3: '… أُمَارِسُهَا مَعَ … / سَوْفَ …' },
    { q: 'مَا العَادَةُ غَيْرُ الصِّحِّيَّةِ عِنْدَكَ؟', l1: 'عِنْدِي عَادَةٌ … : …', l2: '… لِأَنَّ …', l3: '… وَمِنَ الآنَ سَأَتَجَنَّبُ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a school-council meeting', title: 'Role play 1 — A healthy menu for the canteen', ar: 'قَائِمَةُ طَعَامٍ صِحِّيَّةٌ', you: 'a student on the school council', them: 'the canteen manager',
      tasks: [
        { ex: 'مَاذَا يُحِبُّ الطُّلَّابُ أَنْ يَأْكُلُوا؟', task: 'Say what students like to eat.', plan: 'مَاذَا ← يُحِبُّ الطُّلَّابُ …', model: 'يُحِبُّ الطُّلَّابُ البِيتْزَا وَالمَعْكَرُونَةَ.', modelEn: 'Students like pizza and pasta.' },
        { ex: 'وَمَا الطَّعَامُ الصِّحِّيُّ الَّذِي تَقْتَرِحُهُ؟', task: 'Suggest one healthy dish.', plan: 'مَا ← أَقْتَرِحُ …', model: 'أَقْتَرِحُ سَلَطَةَ الدَّجَاجِ مَعَ الأَرُزِّ.', modelEn: 'I suggest chicken salad with rice.' },
        { ex: 'كَمْ يَوْمًا فِي الأُسْبُوعِ نُقَدِّمُ الفَوَاكِهَ؟', task: 'Say how many days to serve fruit.', plan: 'كَمْ ← رَقْمٌ + أَيَّامٍ', model: 'خَمْسَةَ أَيَّامٍ فِي الأُسْبُوعِ، كُلَّ يَوْمٍ دِرَاسِيٍّ.', modelEn: 'Five days a week — every school day.' },
        { ex: 'وَمَاذَا نَبِيعُ بَدَلَ المَشْرُوبَاتِ الغَازِيَّةِ؟', task: 'Suggest drinks instead of fizzy drinks.', plan: 'مَاذَا ← نَبِيعُ … وَ…', model: 'نَبِيعُ المَاءَ وَعَصِيرَ البُرْتُقَالِ الطَّبِيعِيَّ.', modelEn: 'We sell water and natural orange juice.' },
        { unexpected: true, ex: 'هَلْ تَأْكُلُ فِي المَقْصَفِ كُلَّ يَوْمٍ؟', task: 'Answer the unexpected question.', plan: 'هَلْ ← نَعَمْ / لَا + جُمْلَةٌ كَامِلَةٌ', model: 'لَا، آكُلُ فِي المَقْصَفِ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ فَقَطْ.', modelEn: 'No, I only eat in the canteen three times a week.' },
      ],
      girl: 'تَقْتَرِحِينَ · تَأْكُلِينَ',
      notes: 'Language: يُحِبُّ الطُّلَّابُ أَنْ يَأْكُلُوا (they like to eat) · أَقْتَرِحُ (I suggest) · numbers 3–10 + plural: خَمْسَةَ أَيَّامٍ · بَدَلَ (instead of).',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a sports centre', title: 'Role play 2 — Your first session with a personal trainer', ar: 'مَعَ المُدَرِّبِ الشَّخْصِيِّ', you: 'someone who wants to get fit', them: 'the personal trainer',
      tasks: [
        { ex: 'مَا الرِّيَاضَةُ الَّتِي مَارَسْتَهَا فِي المَاضِي؟', task: 'Say what sport you used to do (past).', model: 'كُنْتُ أَلْعَبُ كُرَةَ السَّلَّةِ فِي المَدْرَسَةِ الابْتِدَائِيَّةِ، لٰكِنِّي تَوَقَّفْتُ.', modelEn: 'I used to play basketball at primary school, but I stopped.' },
        { ex: 'لِمَاذَا تَوَقَّفْتَ؟', task: 'Give a reason.', model: 'تَوَقَّفْتُ لِأَنِّي كُنْتُ مَشْغُولًا جِدًّا بِالدِّرَاسَةِ وَالوَاجِبَاتِ.', modelEn: 'I stopped because I was very busy with studying and homework.' },
        { ex: 'كَيْفَ يَوْمُكَ عَادَةً؟', task: 'Describe your usual day: food and sleep.', model: 'أَسْتَيْقِظُ مُبَكِّرًا، وَآكُلُ فُطُورًا خَفِيفًا، وَأَنَامُ فِي السَّاعَةِ الحَادِيَةَ عَشْرَةَ.', modelEn: 'I get up early, eat a light breakfast and go to bed at eleven.' },
        { ex: 'يَجِبُ أَنْ تَتَدَرَّبَ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ.', task: 'ASK a question about the training plan.', model: 'كَمْ دَقِيقَةً يَنْبَغِي أَنْ أَتَدَرَّبَ كُلَّ مَرَّةٍ؟', modelEn: 'How many minutes should I train each time?' },
        { unexpected: true, ex: 'مَا هَدَفُكَ بَعْدَ ثَلَاثَةِ أَشْهُرٍ؟', task: 'Answer the unexpected question (future).', model: 'بَعْدَ ثَلَاثَةِ أَشْهُرٍ سَأَرْكُضُ خَمْسَةَ كِيلُومِتْرَاتٍ دُونَ تَوَقُّفٍ.', modelEn: 'In three months I will run five kilometres without stopping.' },
      ],
      girl: 'مَارَسْتِهَا · تَوَقَّفْتِ · يَوْمُكِ · تَتَدَرَّبِي · هَدَفُكِ — and the Speaker says مَشْغُولَةً',
      notes: 'Language: كُنْتُ + present (used to) · لِأَنِّي كُنْتُ … · a daily-routine sequence · the Speaker ASKS with يَنْبَغِي أَنْ + verb in -a · future with sa-.',
    },
  ],
  convAr: 'صِحَّتِي وَعَادَاتِي',
  conv: [
    { route: 'Core', q: 'مَا وَجْبَتُكَ المُفَضَّلَةُ؟', en: 'What is your favourite meal?', push: 'لِمَاذَا؟' },
    { route: 'Core', q: 'كَمْ سَاعَةً تَنَامُ عَادَةً؟', en: 'How many hours do you usually sleep?', push: 'وَأَمْسِ؟' },
    { route: 'Develop', q: 'هَلْ تَأْكُلُ الوَجَبَاتِ السَّرِيعَةَ؟', en: 'Do you eat fast food?', push: 'كَمْ مَرَّةً؟' },
    { route: 'Develop', q: 'مَاذَا فَعَلْتَ فِي نِهَايَةِ الأُسْبُوعِ المَاضِي لِتَكُونَ نَشِيطًا؟', en: 'What did you do last weekend to be active?', push: 'وَفِي نِهَايَةِ الأُسْبُوعِ القَادِمِ؟' },
    { route: 'Stretch', q: 'هَلِ الشَّبَابُ اليَوْمَ أَقَلُّ نَشَاطًا مِنَ المَاضِي؟', en: 'Are young people less active today than in the past?', push: 'لِمَاذَا فِي رَأْيِكَ؟' },
    { route: 'Stretch', q: 'مَا النَّصِيحَةُ الَّتِي تُعْطِيهَا لِطَالِبٍ جَدِيدٍ عَنِ الصِّحَّةِ؟', en: 'What health advice would you give a new student?', push: 'وَمَاذَا يَجِبُ أَنْ يَتَجَنَّبَ؟' },
  ],
  convModels: [
    { q: 'مَا وَجْبَتُكَ المُفَضَّلَةُ؟', model: 'وَجْبَتِي المُفَضَّلَةُ السَّمَكُ مَعَ الخُضَارِ، لِأَنَّهَا لَذِيذَةٌ وَصِحِّيَّةٌ؛ تَطْبُخُهَا أُمِّي كُلَّ يَوْمِ جُمُعَةٍ، وَفِي المُسْتَقْبَلِ سَأَتَعَلَّمُ أَنْ أَطْبُخَهَا.', modelEn: 'A: fish with vegetables · R: tasty and healthy · E: mum cooks it every Friday · T: I will learn to cook it.' },
    { q: 'مَاذَا فَعَلْتَ فِي نِهَايَةِ الأُسْبُوعِ المَاضِي لِتَكُونَ نَشِيطًا؟', model: 'مَشَيْتُ مَعَ أَبِي إِلَى الحَدِيقَةِ سَاعَةً كَامِلَةً، لِأَنَّ الجَوَّ كَانَ جَمِيلًا؛ ثُمَّ لَعِبْنَا كُرَةَ القَدَمِ، وَفِي نِهَايَةِ الأُسْبُوعِ القَادِمِ سَنَرْكَبُ الدَّرَّاجَاتِ.', modelEn: 'A: walked to the park for an hour · R: the weather was lovely · E: then we played football · T: next weekend we will cycle.' },
    { q: 'هَلِ الشَّبَابُ اليَوْمَ أَقَلُّ نَشَاطًا مِنَ المَاضِي؟', model: 'صَحِيحٌ أَنَّ الشَّبَابَ يَجْلِسُونَ أَمَامَ الشَّاشَاتِ كَثِيرًا، لِذٰلِكَ هُمْ أَقَلُّ نَشَاطًا؛ فِي المَاضِي كَانَ الأَطْفَالُ يَلْعَبُونَ فِي الشَّارِعِ، وَلٰكِنْ فِي رَأْيِي تُسَاعِدُنَا تَطْبِيقَاتُ الرِّيَاضَةِ اليَوْمَ.', modelEn: 'A + R: yes — screens, so less active · E/T: in the past children played in the street · opinion: sports apps can help us today.' },
  ],
  talk: {
    title: 'One minute: my healthy week', ar: 'أُسْبُوعِي الصِّحِّيُّ',
    text: 'Talk for one minute about your week: what you eat and drink, the sport you do, how you sleep — and one change you will make.',
    routes: {
      core: '30 seconds: three sentences — food, sport, sleep (present tense).',
      develop: '60 seconds: add reasons and how often, and one past sentence (فِي نِهَايَةِ الأُسْبُوعِ المَاضِي …).',
      stretch: '90 seconds: all three time frames, some advice (يَجِبُ أَنْ …) and an opinion.',
    },
    phrases: [['سَأَتَكَلَّمُ عَنْ …', 'I am going to talk about …'], ['أَوَّلًا … ثُمَّ …', 'first … then …'], ['فِي الأُسْبُوعِ المَاضِي …', 'last week …'], ['فِي الخِتَامِ …', 'to finish …']],
  },
  checkCore: 'used the topic words (food, sport, sleep) with the right I / he / she endings',
  checkDevelop: 'gave advice with يَجِبُ أَنْ / يَنْبَغِي أَنْ + a verb in -a',
  selfCheck: [
    { route: 'core', text: 'I answered every role-play task in a full sentence.' },
    { route: 'core', text: 'I planned my first words from the question word.' },
    { route: 'develop', text: 'I climbed to level 3: answer + reason + detail.' },
    { route: 'develop', text: 'I gave advice with yajibu an / yanbaghī an + a verb in -a.' },
    { route: 'stretch', text: 'I used all four A-R-E-T links and spoke for 90 seconds.' },
  ],
};

const write = {
  ...base,
  focus: 'Students learn and practise a repeatable writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (a healthy-week challenge), upgrading sentences, writing with a buddy, spotting and fixing errors, and writing one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Fitness club: new member form', ar: 'اسْتِمَارَةُ نَادِي اللِّيَاقَةِ',
    fields: [
      { core: true, ar: 'الاسْمُ الكَامِلُ', en: 'Full name', tip: 'First name + family name.' },
      { core: true, ar: 'العُمُرُ', en: 'Age', tip: 'A number + سَنَةً: خَمْسَ عَشْرَةَ سَنَةً' },
      { core: true, ar: 'الرِّيَاضَةُ المُفَضَّلَةُ', en: 'Favourite sport', tip: 'With al-: السِّبَاحَةُ' },
      { core: true, ar: 'كَمْ مَرَّةً تَتَدَرَّبُ؟', en: 'How often you train', tip: 'مَرَّتَيْنِ فِي الأُسْبُوعِ' },
      { core: true, ar: 'طَعَامٌ تَتَجَنَّبُهُ', en: 'A food you avoid', tip: 'السُّكَّرُ · الوَجَبَاتُ السَّرِيعَةُ' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ أَنْ تَشْتَرِكَ؟', en: 'ONE sentence: why do you want to join?', tip: 'أُرِيدُ أَنْ + a verb in -a: أُرِيدُ أَنْ أَكُونَ نَشِيطًا' },
    ],
  },
  Q2: {
    title: 'Question 2: the healthy-week challenge', ar: 'تَحَدِّي الأُسْبُوعِ الصِّحِّيِّ',
    task: 'Your school ran a “healthy week” challenge. Write an email in Arabic to your friend of about 80–90 words. You must include: • what the challenge was • what you did during the week • what was difficult, and why • what you will carry on doing in the future.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Past (bullets 1–3) and future (bullet 4).', 'At least one reason with لِأَنَّ.', 'About 80–90 words.'],
    phrases: [['كَانَ التَّحَدِّي أَنْ …', 'the challenge was to …'], ['فِي الأُسْبُوعِ المَاضِي …', 'last week …'], ['كَانَ صَعْبًا لِأَنَّ …', 'it was hard because …'], ['سَأَسْتَمِرُّ فِي …', 'I will carry on …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ تَحَدِّي الأُسْبُوعِ الصِّحِّيِّ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about the healthy-week challenge (80–90 words).'],
      ['1', 'مَا كَانَ التَّحَدِّي؟', 'What the challenge was'],
      ['2', 'مَاذَا فَعَلْتَ خِلَالَ الأُسْبُوعِ؟', 'What you did during the week'],
      ['3', 'مَا الشَّيْءُ الصَّعْبُ؟ وَلِمَاذَا؟', 'What was difficult, and why'],
      ['4', 'مَاذَا سَتَسْتَمِرُّ فِي فِعْلِهِ فِي المُسْتَقْبَلِ؟', 'What you will carry on doing'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'مَا كَانَ → PAST (kāna)', 'مَاذَا فَعَلْتَ → PAST (faʿaltu)', 'مَا … وَلِمَاذَا → PAST + a reason (لِأَنَّ)', 'سَتَسْتَمِرُّ → FUTURE (sa- / sawfa)'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'كَانَ التَّحَدِّي أَنْ ______ كُلَّ يَوْمٍ.', en: '1 · The challenge was to … every day.' },
      { ar: 'أَكَلْتُ ______ وَمَارَسْتُ ______ .', en: '2 · I ate … and did …' },
      { ar: 'كَانَ ______ صَعْبًا لِأَنَّ ______ .', en: '3 · … was hard because …' },
      { ar: 'فِي المُسْتَقْبَلِ سَأَسْتَمِرُّ فِي ______ .', en: '4 · In the future I will keep …' },
      { ar: 'وَأَنْتَ؟ إِلَى اللِّقَاءِ.', en: 'And you? See you.' },
    ],
    developFrames: [
      { ar: 'كَانَ الهَدَفُ أَنْ ______ وَأَنْ ______ .', en: '1 · The aim was to … and to …' },
      { ar: 'كُلَّ صَبَاحٍ ______ ، ثُمَّ ______ .', en: '2 · Every morning …, then …' },
      { ar: 'أَصْعَبُ شَيْءٍ كَانَ ______ ، لِأَنِّي ______ .', en: '3 · The hardest thing was …, because I …' },
      { ar: 'لٰكِنِّي شَعَرْتُ أَنِّي ______ أَكْثَرَ.', en: '3 · But I felt more …' },
      { ar: 'لِذٰلِكَ سَأَسْتَمِرُّ فِي ______ وَسَأُحَاوِلُ أَنْ ______ .', en: '4 · So I will keep … and try to …' },
    ],
    bank: ['شَرِبْتُ المَاءَ', 'الخُضَارُ وَالفَوَاكِهُ', 'مَشَيْتُ', 'نِمْتُ مُبَكِّرًا', 'تَجَنَّبْتُ السُّكَّرَ', 'الحَلَوِيَّاتُ', 'نَشِيطٌ / نَشِيطَةٌ', 'صِحِّيٌّ'],
    model: {
      text: `مَرْحَبًا يَا عُمَرُ،
كَيْفَ حَالُكَ؟ فِي الأُسْبُوعِ المَاضِي نَظَّمَتْ مَدْرَسَتِي "أُسْبُوعَ الصِّحَّةِ"، وَكَانَ التَّحَدِّي أَنْ نَأْكُلَ خَمْسَ حِصَصٍ مِنَ الخُضَارِ وَالفَوَاكِهِ كُلَّ يَوْمٍ، وَأَنْ نَمْشِيَ عَشْرَةَ آلَافِ خُطْوَةٍ. كُلَّ صَبَاحٍ شَرِبْتُ كُوبَيْنِ مِنَ المَاءِ، ثُمَّ مَشَيْتُ إِلَى المَدْرَسَةِ مَعَ أَخِي. أَصْعَبُ شَيْءٍ كَانَ تَرْكَ الحَلَوِيَّاتِ، لِأَنِّي أُحِبُّ الشُّوكُولَاتَةَ كَثِيرًا! لٰكِنِّي شَعَرْتُ أَنِّي أَنْشَطُ، وَأَنَامُ أَفْضَلَ. لِذٰلِكَ سَأَسْتَمِرُّ فِي المَشْيِ كُلَّ يَوْمٍ، وَسَأُحَاوِلُ أَنْ آكُلَ الحَلَوِيَّاتِ مَرَّةً وَاحِدَةً فِي الأُسْبُوعِ فَقَطْ. وَأَنْتَ، هَلْ جَرَّبْتَ تَحَدِّيًا مِثْلَ هٰذَا؟
إِلَى اللِّقَاءِ،
يُوسُفُ`,
      en: '“Hi Omar, how are you? Last week my school organised a “health week”: the challenge was to eat five portions of vegetables and fruit every day and to walk ten thousand steps. Every morning I drank two glasses of water, then walked to school with my brother. The hardest thing was giving up sweets, because I love chocolate! But I felt more active and slept better. So I will keep walking every day and try to eat sweets only once a week. And you, have you tried a challenge like this? See you, Yusuf.”',
      find: ['كَانَ التَّحَدِّي أَنْ', 'كُلَّ صَبَاحٍ … ثُمَّ', 'لِأَنِّي أُحِبُّ', 'سَأَسْتَمِرُّ فِي'],
    },
  },
  upgrade: [
    { ar: 'أَشْرَبُ المَاءَ.', en: 'I drink water.' },
    { ar: 'أَشْرَبُ ثَمَانِيَةَ أَكْوَابٍ مِنَ المَاءِ كُلَّ يَوْمٍ.', en: 'I drink eight glasses of water every day.' },
    { ar: 'أَشْرَبُ ثَمَانِيَةَ أَكْوَابٍ مِنَ المَاءِ كُلَّ يَوْمٍ، لِأَنَّ المَاءَ يُسَاعِدُنِي عَلَى التَّرْكِيزِ.', en: '… because water helps me concentrate.' },
    { ar: '… وَفِي رَأْيِي هُوَ أَفْضَلُ مِنَ المَشْرُوبَاتِ الغَازِيَّةِ، لٰكِنِّي أَنْسَى أَحْيَانًا!', en: '… in my opinion it is better than fizzy drinks — but sometimes I forget!' },
  ],
  builder: [
    { en: 'We must eat vegetables every day.', cols: [['يَجِبُ أَنْ', 'يَجِبُ'], ['نَأْكُلَ الخُضَارَ', 'نَأْكُلُ الخُضَارَ'], ['كُلَّ يَوْمٍ', 'أَمْسِ']], key: [0, 0, 0], why: 'After أَنْ the verb ends in -a: نَأْكُلَ.' },
    { en: 'My sister is active because she runs in the morning.', cols: [['أُخْتِي نَشِيطٌ', 'أُخْتِي نَشِيطَةٌ'], ['لِأَنَّهَا تَرْكُضُ', 'لِأَنَّهُ يَرْكُضُ'], ['فِي الصَّبَاحِ', 'فِي المَسَاءِ']], key: [1, 0, 0], why: 'A girl → نَشِيطَةٌ and لِأَنَّهَا تَرْكُضُ.' },
    { en: 'Last week I avoided fast food.', cols: [['فِي الأُسْبُوعِ المَاضِي', 'فِي الأُسْبُوعِ القَادِمِ'], ['تَجَنَّبْتُ', 'أَتَجَنَّبُ'], ['الوَجَبَاتِ السَّرِيعَةَ', 'الوَجَبَاتُ السَّرِيعَةُ']], key: [0, 0, 0], why: 'Past time → past verb; the food is the object → -a / -i endings.' },
  ],
  errors: [
    { wrong: 'يَجِبُ أَنْ نَشْرَبُ المَاءَ.', hint: 'Look at the verb after أَنْ.', right: 'يَجِبُ أَنْ نَشْرَبَ المَاءَ.', why: 'After أَنْ the verb ends in -a: نَشْرَبَ.' },
    { wrong: 'أَكَلْتُ وَجَبَاتٍ سَرِيعٍ أَمْسِ.', hint: 'Agreement with a non-human plural.', right: 'أَكَلْتُ وَجَبَاتٍ سَرِيعَةً أَمْسِ.', why: 'Non-human plural → feminine singular adjective: سَرِيعَةً.' },
    { wrong: 'غَدًا أَمْشِي إِلَى المَدْرَسَةِ.', hint: 'Which time? Which tense?', right: 'غَدًا سَأَمْشِي إِلَى المَدْرَسَةِ.', why: 'Future time → sa- + present: سَأَمْشِي.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a healthy change in my life', ar: 'تَغْيِيرٌ صِحِّيٌّ فِي حَيَاتِي',
    task: 'Full Q3 title: “A healthy change in my life”. Today write ONLY the past paragraph: the day you decided to change one unhealthy habit — what the habit was, what happened, why you decided, and how you felt.',
    formula: [
      { ar: 'قَبْلَ سَنَةٍ قَرَّرْتُ أَنْ أُغَيِّرَ عَادَةً سَيِّئَةً.', en: 'T · A year ago I decided to change a bad habit.' },
      { ar: 'كُنْتُ أَشْرَبُ المَشْرُوبَاتِ الغَازِيَّةَ كُلَّ يَوْمٍ.', en: 'D · I used to drink fizzy drinks every day.' },
      { ar: 'قَرَّرْتُ ذٰلِكَ لِأَنَّ طَبِيبَ الأَسْنَانِ نَصَحَنِي.', en: 'R · because the dentist advised me.' },
      { ar: 'الآنَ أَشْعُرُ أَنِّي أَقْوَى، وَسَأَسْتَمِرُّ.', en: 'F · Now I feel stronger, and I will keep going.' },
    ],
    phrases: [['قَبْلَ … قَرَّرْتُ أَنْ …', '… ago I decided to …'], ['كُنْتُ … كُلَّ يَوْمٍ', 'I used to … every day'], ['نَصَحَنِي … أَنْ …', '… advised me to …'], ['فِي البِدَايَةِ كَانَ صَعْبًا، لٰكِنْ …', 'at first it was hard, but …'], ['شَعَرْتُ بِالفَخْرِ', 'I felt proud']],
    model: {
      text: 'قَبْلَ سِتَّةِ أَشْهُرٍ قَرَّرْتُ أَنْ أُغَيِّرَ عَادَةً سَيِّئَةً جِدًّا. كُنْتُ أَسْهَرُ أَمَامَ الهَاتِفِ حَتَّى السَّاعَةِ الوَاحِدَةِ لَيْلًا، فَكُنْتُ أَذْهَبُ إِلَى المَدْرَسَةِ مُتْعَبًا. وَفِي يَوْمٍ مِنَ الأَيَّامِ نِمْتُ فِي حِصَّةِ الرِّيَاضِيَّاتِ، فَنَصَحَتْنِي مُعَلِّمَتِي أَنْ أَتْرُكَ الهَاتِفَ خَارِجَ غُرْفَتِي. فِي البِدَايَةِ كَانَ ذٰلِكَ صَعْبًا، لٰكِنِّي الآنَ أَنَامُ ثَمَانِيَ سَاعَاتٍ، وَأَشْعُرُ بِالفَخْرِ لِأَنِّي نَجَحْتُ. وَفِي المُسْتَقْبَلِ سَأُحَافِظُ عَلَى هٰذِهِ العَادَةِ الجَدِيدَةِ.',
      en: 'T: six months ago I decided to change a very bad habit · D: I used to stay up on my phone until 1 a.m., so I went to school tired; one day I fell asleep in maths and my teacher advised me to leave my phone outside my room · R/F: at first it was hard, but now I sleep eight hours and feel proud because I succeeded · future: I will keep this new habit.',
      find: ['قَبْلَ سِتَّةِ أَشْهُرٍ قَرَّرْتُ', 'كُنْتُ أَسْهَرُ', 'فَنَصَحَتْنِي … أَنْ', 'أَشْعُرُ بِالفَخْرِ لِأَنِّي'],
    },
  },
  selfCheck: [
    { route: 'core', text: 'I decoded every bullet: question word and tense.' },
    { route: 'core', text: 'My Q2 answers all four bullets, with a greeting and a closing.' },
    { route: 'develop', text: 'I upgraded my sentences: detail + reason in every bullet.' },
    { route: 'develop', text: 'My buddy checked my work and I fixed one mistake.' },
    { route: 'stretch', text: 'My Q3 paragraph has T, D, R and F, with past and future.' },
  ],
};

module.exports = { speak, write };
