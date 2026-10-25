'use strict';
/* Guided Practice Rooms · AT-A-L04 · Food and Drink — Meals and Preferences. New tasks. Teacher-made. */
const XP = require('./xp-a-l04');

const base = { topic: 'A', n: 4, short: 'Food and Drink', arShort: 'الطَّعَامُ وَالشَّرَابُ', fileTitle: 'Food_and_Drink_Meals_and_Preferences', title: 'Food and Drink — Meals and Preferences', icon: 'FaBowlFood', grammar: 'iḍāfa (ʿaṣīru al-burtuqāli, ṭabaqu ar-ruzzi); adjective agreement (m. · f. · non-human plural); preferences with ufaḍḍilu … ʿalā …' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (a host family’s dinner, a cooking-club interview), a topic conversation with A-R-E-T, and a one-minute talk about their favourite dish.',
  words: XP.speak.words,
  words1: { title: 'Eating, drinking and preferring', ar: 'آكُلُ وَأَشْرَبُ وَأُفَضِّلُ' },
  words2: { title: 'Meals and how they taste', ar: 'الوَجَبَاتُ وَالطَّعْمُ' },
  ladder: {
    q: 'مَا طَبَقُكَ المُفَضَّلُ؟', qEn: 'What is your favourite dish?',
    rungs: [
      { ar: 'طَبَقِي المُفَضَّلُ هُوَ الكُسْكُسُ.', en: 'My favourite dish is couscous.' },
      { ar: 'طَبَقِي المُفَضَّلُ هُوَ الكُسْكُسُ، لِأَنَّهُ لَذِيذٌ وَصِحِّيٌّ.', en: '… because it is tasty and healthy.' },
      { ar: '… وَتَطْبُخُهُ أُمِّي مَعَ الخُضَارِ وَاللَّحْمِ كُلَّ يَوْمِ جُمُعَةٍ.', en: '… my mum cooks it with vegetables and meat every Friday.' },
      { ar: '… وَفِي المُسْتَقْبَلِ سَأَتَعَلَّمُ أَنْ أَطْبُخَهُ، فَهُوَ فِي رَأْيِي أَشْهَى طَبَقٍ فِي العَالَمِ!', en: '… in the future I will learn to cook it — in my opinion it is the tastiest dish in the world!' },
    ],
  },
  ladderQs: [
    { q: 'مَاذَا تَأْكُلُ فِي الفُطُورِ؟', l1: 'آكُلُ …', l2: '… لِأَنَّهُ …', l3: '… عَادَةً / فِي العُطْلَةِ …' },
    { q: 'هَلْ تُحِبُّ الطَّعَامَ الحَارَّ؟', l1: 'نَعَمْ / لَا، …', l2: '… لِأَنَّهُ …', l3: '… مَثَلًا أَمْسِ أَكَلْتُ …' },
    { q: 'مَا الفَاكِهَةُ الَّتِي تُفَضِّلُهَا؟', l1: 'أُفَضِّلُ …', l2: '… لِأَنَّهَا …', l3: '… أُفَضِّلُ … عَلَى …' },
    { q: 'مَنْ يَطْبُخُ فِي بَيْتِكُمْ؟', l1: '… يَطْبُخُ / تَطْبُخُ', l2: '… لِأَنَّ …', l3: '… وَسَوْفَ أُسَاعِدُ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'dinner with a host family in Morocco', title: 'Role play 1 — Dinner with your host family', ar: 'العَشَاءُ مَعَ الأُسْرَةِ المُضِيفَةِ', you: 'an exchange student', them: 'the host mother or father',
      tasks: [
        { ex: 'مَاذَا تُحِبُّ أَنْ تَأْكُلَ؟', task: 'Say what you like to eat.', plan: 'مَاذَا ← أُحِبُّ أَنْ آكُلَ …', model: 'أُحِبُّ أَنْ آكُلَ الدَّجَاجَ مَعَ الأَرُزِّ.', modelEn: 'I like to eat chicken with rice.' },
        { ex: 'هَلْ هُنَاكَ طَعَامٌ لَا تَأْكُلُهُ؟', task: 'Say a food you don’t eat.', plan: 'هَلْ ← لَا آكُلُ …', model: 'نَعَمْ، لَا آكُلُ السَّمَكَ، لِأَنِّي لَا أُحِبُّهُ.', modelEn: 'Yes, I don’t eat fish — I don’t like it.' },
        { ex: 'مَاذَا تَشْرَبُ مَعَ العَشَاءِ؟', task: 'Say what you drink with dinner.', plan: 'مَاذَا ← أَشْرَبُ …', model: 'أَشْرَبُ عَصِيرَ البُرْتُقَالِ أَوِ المَاءَ.', modelEn: 'I drink orange juice or water.' },
        { ex: 'تَفَضَّلْ، هٰذَا طَاجِينٌ مَغْرِبِيٌّ.', task: 'Give your opinion of the dish.', plan: 'رَأْيٌ ← الطَّاجِينُ … جِدًّا!', model: 'شُكْرًا! الطَّاجِينُ لَذِيذٌ جِدًّا!', modelEn: 'Thank you! The tagine is delicious!' },
        { unexpected: true, ex: 'مَاذَا تَأْكُلُونَ فِي بِرِيطَانِيَا يَوْمَ الأَحَدِ؟', task: 'Answer the unexpected question.', plan: 'مَاذَا ← نَأْكُلُ …', model: 'نَأْكُلُ اللَّحْمَ المَشْوِيَّ مَعَ البَطَاطِسِ وَالخُضَارِ.', modelEn: 'We eat roast meat with potatoes and vegetables.' },
      ],
      girl: 'تُحِبِّينَ · تَأْكُلِي · تَأْكُلِينَهُ · تَشْرَبِينَ · تَفَضَّلِي',
      notes: 'Language: uḥibbu an ākula (verb in -a after an) · lā ākulu … li-annī lā uḥibbuhu · iḍāfa ʿaṣīru al-burtuqāl · agreement: aṭ-ṭājīnu ladhīdhun.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a cooking-club interview', title: 'Role play 2 — Joining the school cooking club', ar: 'نَادِي الطَّبْخِ', you: 'a student who wants to join', them: 'the cooking-club leader',
      tasks: [
        { ex: 'هَلْ تَطْبُخُ فِي البَيْتِ؟', task: 'Say what you cook and how often.', model: 'نَعَمْ، أَطْبُخُ المَعْكَرُونَةَ بِالصَّلْصَةِ مَرَّةً فِي الأُسْبُوعِ.', modelEn: 'Yes, I cook pasta with sauce once a week.' },
        { ex: 'مَا الأَكْلُ الَّذِي تُفَضِّلُهُ: العَرَبِيُّ أَمِ الإِيطَالِيُّ؟', task: 'State a preference and give a reason.', model: 'أُفَضِّلُ الأَكْلَ العَرَبِيَّ عَلَى الإِيطَالِيِّ، لِأَنَّ فِيهِ تَوَابِلَ كَثِيرَةً.', modelEn: 'I prefer Arab food to Italian, because it has lots of spices.' },
        { ex: 'مَاذَا طَبَخْتَ آخِرَ مَرَّةٍ؟', task: 'Describe the last dish you made (past).', model: 'طَبَخْتُ شُورْبَةَ العَدَسِ لِعَائِلَتِي، وَأَضَفْتُ إِلَيْهَا اللَّيْمُونَ.', modelEn: 'I made lentil soup for my family, and added lemon.' },
        { ex: 'فِي النَّادِي نَطْبُخُ أَطْبَاقًا مِنْ بُلْدَانٍ مُخْتَلِفَةٍ.', task: 'ASK a question about the club.', model: 'وَهَلْ نَأْكُلُ مَا نَطْبُخُهُ فِي نِهَايَةِ الحِصَّةِ؟', modelEn: 'And do we eat what we cook at the end of the session?' },
        { unexpected: true, ex: 'لَوْ طَبَخْتَ لِلْمَدْرَسَةِ كُلِّهَا، مَاذَا تَطْبُخُ؟', task: 'Answer the unexpected question (law … la-).', model: 'لَوْ طَبَخْتُ لِلْمَدْرَسَةِ، لَطَبَخْتُ الأَرُزَّ بِالدَّجَاجِ، لِأَنَّ الجَمِيعَ يُحِبُّهُ.', modelEn: 'If I cooked for the school, I would make chicken and rice, because everyone loves it.' },
      ],
      girl: 'تَطْبُخِينَ · تُفَضِّلِينَهُ · طَبَخْتِ',
      notes: 'Language: ufaḍḍilu X ʿalā Y · relative alladhī · iḍāfa shūrbatu al-ʿadas · past cooking verbs · law … la- (Stretch).',
    },
  ],
  convAr: 'الطَّعَامُ فِي حَيَاتِي',
  conv: [
    { route: 'Core', q: 'مَا وَجْبَتُكَ المُفَضَّلَةُ: الفُطُورُ أَمِ الغَدَاءُ أَمِ العَشَاءُ؟', en: 'Which meal do you prefer?', push: 'لِمَاذَا؟' },
    { route: 'Core', q: 'مَاذَا تَشْرَبُ عِنْدَمَا تَكُونُ عَطْشَانَ؟', en: 'What do you drink when you are thirsty?', push: 'كَمْ كُوبًا؟' },
    { route: 'Develop', q: 'مَاذَا أَكَلْتَ أَمْسِ فِي العَشَاءِ؟', en: 'What did you eat for dinner yesterday?', push: 'وَهَلْ كَانَ لَذِيذًا؟' },
    { route: 'Develop', q: 'مَا الطَّعَامُ الَّذِي لَا تُحِبُّهُ؟', en: 'What food don’t you like?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'هَلِ الطَّعَامُ فِي بِلَادِكَ أَفْضَلُ مِنَ الطَّعَامِ العَرَبِيِّ؟', en: 'Is the food in your country better than Arab food?', push: 'مَثَلًا؟' },
    { route: 'Stretch', q: 'لَوْ فَتَحْتَ مَطْعَمًا، مَاذَا تُقَدِّمُ فِيهِ؟', en: 'If you opened a restaurant, what would you serve?', push: 'وَلِمَنْ؟' },
  ],
  convModels: [
    { q: 'مَا وَجْبَتُكَ المُفَضَّلَةُ: الفُطُورُ أَمِ الغَدَاءُ أَمِ العَشَاءُ؟', model: 'أُفَضِّلُ الفُطُورَ، لِأَنِّي أَكُونُ جَائِعًا جِدًّا فِي الصَّبَاحِ؛ عَادَةً آكُلُ البَيْضَ وَالخُبْزَ، وَيَوْمَ السَّبْتِ القَادِمِ سَنَأْكُلُ الفُطُورَ فِي مَقْهًى.', modelEn: 'A: breakfast · R: I am very hungry in the morning · E: eggs and bread · T: next Saturday we will have breakfast in a café.' },
    { q: 'مَاذَا أَكَلْتَ أَمْسِ فِي العَشَاءِ؟', model: 'أَكَلْتُ المَقْلُوبَةَ الَّتِي طَبَخَتْهَا جَدَّتِي، وَكَانَتْ لَذِيذَةً جِدًّا، لِأَنَّهَا تَضَعُ فِيهَا البَاذِنْجَانَ؛ وَبَعْدَ العَشَاءِ شَرِبْنَا الشَّايَ بِالنَّعْنَاعِ.', modelEn: 'A: maqluba my grandma made · R: delicious — she adds aubergine · E: after dinner we drank mint tea.' },
    { q: 'هَلِ الطَّعَامُ فِي بِلَادِكَ أَفْضَلُ مِنَ الطَّعَامِ العَرَبِيِّ؟', model: 'فِي رَأْيِي الطَّعَامُ العَرَبِيُّ أَشْهَى، لِأَنَّ فِيهِ تَوَابِلَ أَكْثَرَ، لٰكِنِّي أُحِبُّ السَّمَكَ مَعَ البَطَاطِسِ هُنَا؛ عِنْدَمَا زُرْتُ لُبْنَانَ أَكَلْتُ أَطْيَبَ حُمُّصٍ فِي حَيَاتِي.', modelEn: 'Opinion: Arab food is tastier · R: more spices · contrast: I like fish and chips here · E/past: in Lebanon I ate the best hummus of my life.' },
  ],
  talk: {
    title: 'One minute: my favourite dish', ar: 'طَبَقِي المُفَضَّلُ',
    text: 'Talk for one minute about your favourite dish: what is in it, who cooks it, when you eat it, why you like it — and the last time you ate it.',
    routes: {
      core: '30 seconds: the dish, three ingredients and one adjective (لَذِيذٌ · حَارٌّ · صِحِّيٌّ).',
      develop: '60 seconds: add who cooks it, when, a reason, and one past sentence.',
      stretch: '90 seconds: compare it with another dish (أَشْهَى مِنْ), give an opinion and a future plan.',
    },
    phrases: [['طَبَقِي المُفَضَّلُ هُوَ …', 'my favourite dish is …'], ['فِيهِ … وَ…', 'it has … and …'], ['آخِرَ مَرَّةٍ أَكَلْتُهُ …', 'the last time I ate it …'], ['أُفَضِّلُهُ عَلَى …', 'I prefer it to …']],
  },
  checkCore: 'made adjectives agree (لَذِيذٌ · لَذِيذَةٌ · non-human plural)',
  checkDevelop: 'used an iḍāfa (عَصِيرُ البُرْتُقَالِ) or أُفَضِّلُ … عَلَى …',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (a family celebration meal), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'School trip: meal choices', ar: 'رِحْلَةٌ مَدْرَسِيَّةٌ: اخْتِيَارُ الوَجَبَاتِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'الفُطُورُ', en: 'Breakfast choice', tip: 'بَيْضٌ · خُبْزٌ · جُبْنٌ' },
      { core: true, ar: 'الغَدَاءُ', en: 'Lunch choice', tip: 'دَجَاجٌ مَعَ الأَرُزِّ' },
      { core: true, ar: 'المَشْرُوبُ', en: 'Drink', tip: 'عَصِيرُ التُّفَّاحِ' },
      { core: true, ar: 'طَعَامٌ لَا تَأْكُلُهُ', en: 'A food you don’t eat', tip: 'السَّمَكُ · المُكَسَّرَاتُ' },
      { ar: 'جُمْلَةٌ: صِفْ طَبَقَكَ المُفَضَّلَ', en: 'ONE sentence: describe your favourite dish', tip: 'طَبَقِي المُفَضَّلُ … لِأَنَّهُ …' },
    ],
  },
  Q2: {
    title: 'Question 2: a family celebration meal', ar: 'وَجْبَةُ احْتِفَالٍ عَائِلِيَّةٌ',
    task: 'Write an email in Arabic to your friend of about 80–90 words about a family celebration meal. You must include: • what the celebration was and who was there • what you ate and drank • which dish you liked most, and why • what you will cook for your friend when they visit.',
    phrases: [['احْتَفَلْنَا بِـ …', 'we celebrated …'], ['أَكَلْنَا … وَشَرِبْنَا …', 'we ate … and drank …'], ['أَعْجَبَنِي … لِأَنَّهُ …', 'I liked … because it …'], ['عِنْدَمَا تَزُورُنِي سَأَطْبُخُ …', 'when you visit me I will cook …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ وَجْبَةِ احْتِفَالٍ عَائِلِيَّةٍ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about a family celebration meal (80–90 words).'],
      ['1', 'مَا المُنَاسَبَةُ؟ وَمَنْ كَانَ هُنَاكَ؟', 'The celebration and who was there'],
      ['2', 'مَاذَا أَكَلْتُمْ وَشَرِبْتُمْ؟', 'What you ate and drank'],
      ['3', 'أَيُّ طَبَقٍ أَعْجَبَكَ أَكْثَرَ؟ وَلِمَاذَا؟', 'Which dish you liked most, and why'],
      ['4', 'مَاذَا سَتَطْبُخُ لِصَدِيقِكَ عِنْدَمَا يَزُورُكَ؟', 'What you will cook for your friend'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'مَا … مَنْ كَانَ → PAST (كَانَ)', 'مَاذَا أَكَلْتُمْ → PAST, we-form (أَكَلْنَا)', 'أَيُّ … وَلِمَاذَا → PAST opinion + a reason', 'سَتَطْبُخُ → FUTURE (sa-)'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'احْتَفَلْنَا بِعِيدِ مِيلَادِ ______ ، وَكَانَتْ ______ هُنَاكَ.', en: '1 · We celebrated …’s birthday, and … was there.' },
      { ar: 'أَكَلْنَا ______ ، وَشَرِبْنَا ______ .', en: '2 · We ate …, and we drank …' },
      { ar: 'أَعْجَبَنِي ______ ، لِأَنَّهُ ______ .', en: '3 · I liked …, because it …' },
      { ar: 'عِنْدَمَا تَزُورُنِي سَأَطْبُخُ لَكَ ______ .', en: '4 · When you visit, I will cook you …' },
    ],
    developFrames: [
      { ar: 'فِي الأُسْبُوعِ المَاضِي اجْتَمَعَتْ عَائِلَتِي لِـ ______ .', en: '1 · Last week my family got together for …' },
      { ar: 'كَانَتِ المَائِدَةُ مَلِيئَةً بِـ ______ وَ ______ .', en: '2 · The table was full of … and …' },
      { ar: 'أَشْهَى طَبَقٍ كَانَ ______ ، لِأَنَّ ______ .', en: '3 · The tastiest dish was …, because …' },
      { ar: 'سَأَطْبُخُ لَكَ ______ ، وَأَتَمَنَّى أَنْ ______ .', en: '4 · I will cook you …, and I hope …' },
    ],
    bank: ['لَذِيذٌ / لَذِيذَةٌ', 'حَارٌّ', 'حُلْوٌ', 'طَبَقٌ', 'كَعْكَةٌ', 'عَصِيرُ المَانْجُو', 'أَطْبَاقٌ شَهِيَّةٌ', 'أُفَضِّلُ … عَلَى …'],
    model: {
      text: `مَرْحَبًا يَا سَارَةُ،
كَيْفَ حَالُكِ؟ فِي الأُسْبُوعِ المَاضِي احْتَفَلْنَا بِعِيدِ مِيلَادِ جَدِّي السَّبْعِينَ، وَاجْتَمَعَتْ كُلُّ العَائِلَةِ فِي بَيْتِ عَمِّي الكَبِيرِ، وَكَانَ عَدَدُنَا خَمْسَةً وَعِشْرِينَ شَخْصًا. كَانَتِ المَائِدَةُ مَلِيئَةً بِالأَطْبَاقِ الشَّهِيَّةِ: أَكَلْنَا المَنْسَفَ وَالسَّلَطَةَ وَالحُمُّصَ، وَشَرِبْنَا عَصِيرَ المَانْجُو البَارِدَ. أَشْهَى طَبَقٍ كَانَ الكُنَافَةَ، لِأَنَّ عَمَّتِي صَنَعَتْهَا بِالجُبْنِ وَالقَطْرِ، وَكَانَتْ سَاخِنَةً وَحُلْوَةً جِدًّا! عِنْدَمَا تَزُورِينَنِي فِي الصَّيْفِ سَأَطْبُخُ لَكِ المَقْلُوبَةَ، فَهِيَ أَفْضَلُ طَبَقٍ أَعْرِفُ أَنْ أَطْبُخَهُ. وَأَنْتِ، مَا طَبَقُكِ المُفَضَّلُ؟ وَهَلْ تُحِبِّينَ الحَلَوِيَّاتِ العَرَبِيَّةَ؟
مَعَ مَحَبَّتِي،
لَيْلَى`,
      en: '“Hi Sara, how are you? Last week we celebrated my grandfather’s seventieth birthday, and the whole family got together at my uncle’s big house — there were twenty-five of us. The table was full of tasty dishes: we ate mansaf, salad and hummus, and drank cold mango juice. The tastiest dish was the kunafa, because my aunt made it with cheese and syrup, and it was hot and very sweet! When you visit me in the summer I will cook you maqluba — it is the best dish I know how to cook. And you, what is your favourite dish? Do you like Arab sweets? Love, Layla.”',
      find: ['احْتَفَلْنَا بِعِيدِ مِيلَادِ', 'عَصِيرَ المَانْجُو البَارِدَ', 'أَشْهَى طَبَقٍ كَانَ', 'سَأَطْبُخُ لَكِ'],
    },
  },
  upgrade: [
    { ar: 'أُحِبُّ الحُمُّصَ.', en: 'I like hummus.' },
    { ar: 'أُحِبُّ الحُمُّصَ مَعَ الخُبْزِ السَّاخِنِ، وَآكُلُهُ كُلَّ صَبَاحٍ.', en: '… with hot bread, and I eat it every morning.' },
    { ar: 'أُحِبُّ الحُمُّصَ مَعَ الخُبْزِ السَّاخِنِ، لِأَنَّهُ صِحِّيٌّ وَيُشْبِعُنِي.', en: '… because it is healthy and fills me up.' },
    { ar: '… وَفِي رَأْيِي هُوَ أَطْيَبُ مِنَ الجُبْنِ، لٰكِنَّ أُخْتِي لَا تُحِبُّهُ!', en: '… in my opinion it is tastier than cheese — but my sister doesn’t like it!' },
  ],
  builder: [
    { en: 'The soup is hot and delicious.', cols: [['الشُّورْبَةُ', 'الشُّورْبَةَ'], ['سَاخِنَةٌ', 'سَاخِنٌ'], ['وَلَذِيذَةٌ', 'وَلَذِيذٌ']], key: [0, 0, 0], why: 'الشُّورْبَةُ is feminine → سَاخِنَةٌ وَلَذِيذَةٌ.' },
    { en: 'I drink apple juice every morning.', cols: [['أَشْرَبُ', 'شَرِبْتُ'], ['عَصِيرَ التُّفَّاحِ', 'العَصِيرَ التُّفَّاحِ'], ['كُلَّ صَبَاحٍ', 'أَمْسِ']], key: [0, 0, 0], why: 'Iḍāfa: the first word has no al-: عَصِيرَ التُّفَّاحِ.' },
    { en: 'The cakes were sweet.', cols: [['كَانَتِ الكَعَكَاتُ', 'كَانَ الكَعَكَاتُ'], ['حُلْوَةً', 'حُلْوَاتٌ'], ['جِدًّا', 'دَائِمًا']], key: [0, 0, 0], why: 'Non-human plural → feminine singular: كَانَتْ … حُلْوَةً.' },
  ],
  errors: [
    { wrong: 'أَشْرَبُ العَصِيرُ البُرْتُقَالِ.', hint: 'Look at the iḍāfa.', right: 'أَشْرَبُ عَصِيرَ البُرْتُقَالِ.', why: 'In an iḍāfa the first word has no al-: عَصِيرَ البُرْتُقَالِ.' },
    { wrong: 'السَّلَطَةُ لَذِيذٌ.', hint: 'Is سَلَطَة masculine or feminine?', right: 'السَّلَطَةُ لَذِيذَةٌ.', why: 'Feminine noun → feminine adjective: لَذِيذَةٌ.' },
    { wrong: 'الفَوَاكِهُ صِحِّيُّونَ.', hint: 'Non-human plural agreement.', right: 'الفَوَاكِهُ صِحِّيَّةٌ.', why: 'Non-human plural → feminine singular: صِحِّيَّةٌ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a meal I will never forget', ar: 'وَجْبَةٌ لَا أَنْسَاهَا',
    task: 'Full Q3 title: “Food in my life”. Today write ONLY the past paragraph: a meal you will never forget — where and when, what you ate, who was with you, why it was special and how you felt.',
    formula: [
      { ar: 'لَنْ أَنْسَى العَشَاءَ الأَوَّلَ فِي رَمَضَانَ المَاضِي.', en: 'T · I won’t forget the first iftar last Ramadan.' },
      { ar: 'أَكَلْنَا التَّمْرَ وَالشُّورْبَةَ مَعَ جِيرَانِنَا.', en: 'D · We ate dates and soup with our neighbours.' },
      { ar: 'كَانَ خَاصًّا لِأَنَّهُ أَوَّلُ صِيَامٍ لِأَخِي.', en: 'R · It was special because it was my brother’s first fast.' },
      { ar: 'شَعَرْتُ بِالفَخْرِ وَالسَّعَادَةِ.', en: 'F · I felt proud and happy.' },
    ],
    phrases: [['لَنْ أَنْسَى وَجْبَةً …', 'I won’t forget a meal …'], ['كَانَتِ المَائِدَةُ مَلِيئَةً بِ…', 'the table was full of …'], ['أَكَلْنَا … وَشَرِبْنَا …', 'we ate … and drank …'], ['كَانَ خَاصًّا لِأَنَّ …', 'it was special because …'], ['شَعَرْتُ بِالفَخْرِ', 'I felt proud']],
    model: {
      text: 'لَنْ أَنْسَى أَوَّلَ إِفْطَارٍ فِي رَمَضَانَ المَاضِي، لِأَنَّهُ كَانَ أَوَّلَ يَوْمٍ يَصُومُ فِيهِ أَخِي الصَّغِيرُ. دَعَوْنَا جِيرَانَنَا، وَطَبَخَتْ أُمِّي شُورْبَةَ العَدَسِ وَالدَّجَاجَ مَعَ الأَرُزِّ، وَصَنَعْتُ أَنَا السَّلَطَةَ. عِنْدَمَا سَمِعْنَا الأَذَانَ أَكَلْنَا التَّمْرَ، وَشَرِبْنَا اللَّبَنَ البَارِدَ. كَانَ أَخِي مُتْعَبًا، لٰكِنَّهُ كَانَ سَعِيدًا جِدًّا، فَشَعَرْنَا كُلُّنَا بِالفَخْرِ. فِي رَمَضَانَ القَادِمِ سَأَطْبُخُ الشُّورْبَةَ بِنَفْسِي.',
      en: 'T: I won’t forget the first iftar last Ramadan — my little brother’s first fast · D: we invited our neighbours; mum cooked lentil soup and chicken with rice and I made the salad; at the call to prayer we ate dates and drank cold laban · F: my brother was tired but very happy, and we all felt proud · future: next Ramadan I will cook the soup myself.',
      find: ['لَنْ أَنْسَى أَوَّلَ إِفْطَارٍ', 'لِأَنَّهُ كَانَ', 'عِنْدَمَا سَمِعْنَا', 'فَشَعَرْنَا … بِالفَخْرِ'],
    },
  },
};
write.Q2.phrases[0] = ['احْتَفَلْنَا بِعِيدٍ …', 'we celebrated a festival …'];
write.Q2.developFrames[0] = { ar: 'فِي الأُسْبُوعِ المَاضِي اجْتَمَعَتْ عَائِلَتِي فِي ______ .', en: '1 · Last week my family got together at …' };
write.Q2.developFrames[1] = { ar: 'كَانَتِ المَائِدَةُ مَلِيئَةً بِالأَطْبَاقِ: ______ وَ ______ .', en: '2 · The table was full of dishes: … and …' };

module.exports = { speak, write };
