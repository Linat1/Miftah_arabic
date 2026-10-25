'use strict';
/* Guided Practice Rooms · TB-L05 · Furniture, Furnishings and Appliances. New tasks. Teacher-made. */
const XP = require('./xp-b-l05');

const base = { topic: 'B', n: 5, short: 'Furniture and Appliances', arShort: 'الأَثَاثُ وَالأَجْهِزَةُ', fileTitle: 'Furniture_Furnishings_and_Appliances', title: 'Furniture, Furnishings and Appliances', icon: 'FaCouch', grammar: 'iḍāfa (khizānatu al-malābis); attached pronouns as objects (nastaʿmiluhu / nastaʿmiluhā); relative clauses (alladhī · allatī); describing condition (muʿaṭṭal, jadīd, qadīm)' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (a broken washing machine, choosing furniture for a new bedroom), a topic conversation with A-R-E-T, and a one-minute talk describing their bedroom in detail.',
  words: XP.speak.words,
  words1: { title: 'Furniture in my home', ar: 'الأَثَاثُ' },
  words2: { title: 'Appliances — and what we use them for', ar: 'الأَجْهِزَةُ وَاسْتِعْمَالُهَا' },
  ladder: {
    q: 'مَا الجِهَازُ الَّذِي تَسْتَعْمِلُهُ أَكْثَرَ فِي البَيْتِ؟', qEn: 'Which appliance do you use most at home?',
    rungs: [
      { ar: 'أَسْتَعْمِلُ الثَّلَّاجَةَ أَكْثَرَ.', en: 'I use the fridge most.' },
      { ar: 'أَسْتَعْمِلُ الثَّلَّاجَةَ أَكْثَرَ، لِأَنِّي آخُذُ مِنْهَا العَصِيرَ وَالفَوَاكِهَ دَائِمًا.', en: '… because I always take juice and fruit from it.' },
      { ar: '… وَهِيَ ثَلَّاجَةٌ كَبِيرَةٌ رَمَادِيَّةٌ، نَسْتَعْمِلُهَا لِحِفْظِ الطَّعَامِ.', en: '… it is a big grey fridge we use to keep food.' },
      { ar: '… وَفِي الأُسْبُوعِ المَاضِي تَعَطَّلَتْ يَوْمَيْنِ، فَعَرَفْتُ أَنَّهَا أَهَمُّ جِهَازٍ فِي رَأْيِي!', en: '… last week it broke for two days, so I learnt it is the most important appliance, in my opinion!' },
    ],
  },
  ladderQs: [
    { q: 'مَاذَا يُوجَدُ فِي غُرْفَةِ الجُلُوسِ؟', l1: 'يُوجَدُ … وَ…', l2: '… وَنَسْتَعْمِلُهُ لِـ …', l3: '… بِجَانِبِ … / أَمَامَ …' },
    { q: 'هَلْ تُسَاعِدُ فِي البَيْتِ؟', l1: 'نَعَمْ، أَسْتَعْمِلُ …', l2: '… لِأَنَّ …', l3: '… أَمْسِ …' },
    { q: 'مَا الشَّيْءُ القَدِيمُ فِي بَيْتِكُمْ؟', l1: '… قَدِيمٌ جِدًّا', l2: '… لِأَنَّهُ …', l3: '… وَسَنَشْتَرِي …' },
    { q: 'أَيُّ جِهَازٍ لَا تَسْتَطِيعُ أَنْ تَعِيشَ بِدُونِهِ؟', l1: 'لَا أَسْتَطِيعُ أَنْ أَعِيشَ بِدُونِ …', l2: '… لِأَنَّ …', l3: '… مَثَلًا …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a phone call to a repair company', title: 'Role play 1 — The washing machine is broken', ar: 'الغَسَّالَةُ مُعَطَّلَةٌ', you: 'a teenager at home', them: 'the repair company’s receptionist',
      tasks: [
        { ex: 'شَرِكَةُ التَّصْلِيحِ، كَيْفَ أُسَاعِدُكَ؟', task: 'Say which appliance is broken.', plan: 'كَيْفَ ← الغَسَّالَةُ مُعَطَّلَةٌ …', model: 'الغَسَّالَةُ فِي بَيْتِنَا مُعَطَّلَةٌ.', modelEn: 'The washing machine in our house is broken.' },
        { ex: 'مُنْذُ مَتَى؟', task: 'Say since when.', plan: 'مُنْذُ مَتَى ← مُنْذُ …', model: 'مُنْذُ يَوْمِ الأَحَدِ.', modelEn: 'Since Sunday.' },
        { ex: 'كَمْ عُمْرُ الغَسَّالَةِ؟', task: 'Say how old it is.', plan: 'كَمْ ← عُمْرُهَا … سَنَوَاتٍ', model: 'عُمْرُهَا خَمْسُ سَنَوَاتٍ.', modelEn: 'It is five years old.' },
        { ex: 'أَيْنَ هِيَ فِي البَيْتِ؟', task: 'Say where it is.', plan: 'أَيْنَ ← هِيَ فِي … بِجَانِبِ …', model: 'هِيَ فِي المَطْبَخِ، بِجَانِبِ الثَّلَّاجَةِ.', modelEn: 'It is in the kitchen, next to the fridge.' },
        { unexpected: true, ex: 'هَلْ يُنَاسِبُكُمْ يَوْمُ الخَمِيسِ صَبَاحًا؟', task: 'Answer the unexpected question.', plan: 'هَلْ ← نَعَمْ / لَا، … أَفْضَلُ', model: 'لَا، يَوْمُ الجُمُعَةِ أَفْضَلُ، لِأَنَّ أُمِّي فِي البَيْتِ.', modelEn: 'No, Friday is better, because my mum is at home.' },
      ],
      girl: 'أُسَاعِدُكِ',
      notes: 'Language: muʿaṭṭalatun (feminine — al-ghassāla) · mundhu · ʿumruhā + years (her = the machine) · bi-jānibi · afḍalu.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a furniture shop', title: 'Role play 2 — Furnishing a new bedroom', ar: 'أَثَاثٌ لِغُرْفَةٍ جَدِيدَةٍ', you: 'a teenager choosing furniture', them: 'the shop assistant',
      tasks: [
        { ex: 'مَاذَا تَبْحَثُ عَنْهُ؟', task: 'Say what you need and why.', model: 'أَبْحَثُ عَنْ مَكْتَبٍ وَرَفٍّ لِلْكُتُبِ، لِأَنِّي سَأَبْدَأُ الامْتِحَانَاتِ قَرِيبًا.', modelEn: 'I am looking for a desk and a bookshelf, because I will start my exams soon.' },
        { ex: 'هٰذَا المَكْتَبُ الخَشَبِيُّ جَمِيلٌ جِدًّا.', task: 'Compare two items and choose.', model: 'هٰذَا المَكْتَبُ جَمِيلٌ، لٰكِنَّهُ أَكْبَرُ مِنْ غُرْفَتِي؛ أُفَضِّلُ المَكْتَبَ الأَبْيَضَ الَّذِي بِجَانِبِهِ.', modelEn: 'This desk is lovely, but it is bigger than my room; I prefer the white desk next to it.' },
        { ex: 'كَيْفَ كَانَتْ غُرْفَتُكَ القَدِيمَةُ؟', task: 'Describe your old room (past).', model: 'كَانَتْ صَغِيرَةً وَمُظْلِمَةً، وَكُنْتُ أَكْتُبُ وَاجِبَاتِي عَلَى السَّرِيرِ، لِأَنَّهُ لَمْ يَكُنْ عِنْدِي مَكْتَبٌ.', modelEn: 'It was small and dark, and I did homework on the bed, because I had no desk.' },
        { ex: 'عِنْدَنَا خِزَانَةٌ رَخِيصَةٌ أَيْضًا.', task: 'ASK two questions about it.', model: 'مَا لَوْنُهَا؟ وَهَلْ تُوصِلُونَهَا إِلَى البَيْتِ؟', modelEn: 'What colour is it? And do you deliver it to the house?' },
        { unexpected: true, ex: 'لَوْ كَانَ عِنْدَكَ مَالٌ أَكْثَرُ، مَاذَا تَشْتَرِي لِغُرْفَتِكَ؟', task: 'Answer the unexpected question (law … la-).', model: 'لَوْ كَانَ عِنْدِي مَالٌ أَكْثَرُ، لَاشْتَرَيْتُ كُرْسِيًّا مُرِيحًا لِلْقِرَاءَةِ وَسِتَارَةً زَرْقَاءَ.', modelEn: 'If I had more money, I would buy a comfortable reading chair and a blue curtain.' },
      ],
      girl: 'تَبْحَثِينَ · غُرْفَتُكِ · عِنْدَكِ · تَشْتَرِينَ · لِغُرْفَتِكِ',
      notes: 'Language: abḥathu ʿan · comparatives akbaru min · relative alladhī bi-jānibihi · kāna + description; lam yakun ʿindī · object pronoun tūṣilūnahā · law … la- (Stretch).',
    },
  ],
  convAr: 'الأَثَاثُ وَالأَجْهِزَةُ',
  conv: [
    { route: 'Core', q: 'مَا لَوْنُ سَرِيرِكَ؟', en: 'What colour is your bed?', push: 'وَالجُدْرَانُ؟' },
    { route: 'Core', q: 'كَمْ تِلْفَازًا فِي بَيْتِكُمْ؟', en: 'How many TVs are in your home?', push: 'أَيْنَ هُوَ؟' },
    { route: 'Develop', q: 'مَا الجِهَازُ الَّذِي تَسْتَعْمِلُهُ كُلَّ صَبَاحٍ؟', en: 'Which appliance do you use every morning?', push: 'لِمَاذَا؟' },
    { route: 'Develop', q: 'صِفْ أَثَاثَ غُرْفَةِ الجُلُوسِ.', en: 'Describe the living-room furniture.', push: 'وَمَا أَقْدَمُ قِطْعَةٍ؟' },
    { route: 'Stretch', q: 'هَلْ عِنْدَنَا أَجْهِزَةٌ أَكْثَرُ مِنَ اللَّازِمِ؟', en: 'Do we have more appliances than we need?', push: 'وَمَا رَأْيُكَ فِي البِيئَةِ؟' },
    { route: 'Stretch', q: 'كَيْفَ سَتَكُونُ البُيُوتُ بَعْدَ خَمْسِينَ سَنَةً؟', en: 'What will homes be like in fifty years?', push: 'وَهَلْ هٰذَا جَيِّدٌ؟' },
  ],
  convModels: [
    { q: 'مَا الجِهَازُ الَّذِي تَسْتَعْمِلُهُ كُلَّ صَبَاحٍ؟', model: 'أَسْتَعْمِلُ الغَلَّايَةَ كُلَّ صَبَاحٍ، لِأَنِّي أَشْرَبُ الشَّايَ مَعَ الفُطُورِ؛ هِيَ غَلَّايَةٌ قَدِيمَةٌ، وَسَنَشْتَرِي وَاحِدَةً جَدِيدَةً فِي الشَّهْرِ القَادِمِ.', modelEn: 'A: the kettle · R: I drink tea with breakfast · E: it’s an old kettle · T: we’ll buy a new one next month.' },
    { q: 'صِفْ أَثَاثَ غُرْفَةِ الجُلُوسِ.', model: 'فِي غُرْفَةِ الجُلُوسِ أَرِيكَةٌ كَبِيرَةٌ رَمَادِيَّةٌ، وَأَمَامَهَا طَاوِلَةٌ خَشَبِيَّةٌ صَنَعَهَا جَدِّي بِيَدِهِ قَبْلَ ثَلَاثِينَ سَنَةً؛ لِذٰلِكَ هِيَ أَغْلَى قِطْعَةٍ عِنْدَنَا، لَيْسَ بِالمَالِ بَلْ بِالذِّكْرَيَاتِ.', modelEn: 'A: a big grey sofa with a wooden table my grandfather made by hand thirty years ago · R: so it’s our most precious piece — not for money but for memories.' },
    { q: 'هَلْ عِنْدَنَا أَجْهِزَةٌ أَكْثَرُ مِنَ اللَّازِمِ؟', model: 'فِي رَأْيِي نَعَمْ، لِأَنَّ كَثِيرًا مِنَ النَّاسِ يَشْتَرُونَ أَجْهِزَةً جَدِيدَةً كُلَّ سَنَةٍ، مِمَّا يَضُرُّ البِيئَةَ؛ كَانَتْ جَدَّتِي تَطْبُخُ بِدُونِ آلَاتٍ كَثِيرَةٍ، وَكَانَ طَعَامُهَا أَلَذَّ!', modelEn: 'Opinion: yes · R: many buy new appliances every year, which harms the environment · past: grandma cooked without many machines — and her food was tastier!' },
  ],
  talk: {
    title: 'One minute: my bedroom in detail', ar: 'غُرْفَتِي بِالتَّفْصِيلِ',
    text: 'Talk for one minute describing your bedroom in detail: the furniture and where each piece is, colours, what you use things for — and what you would change.',
    routes: {
      core: '30 seconds: five pieces of furniture with a colour or a preposition each.',
      develop: '60 seconds: add what you use them for (نَسْتَعْمِلُهُ لِـ …) and something that broke (past).',
      stretch: '90 seconds: add الَّذِي / الَّتِي, an opinion and لَوْ … لَـ for your dream room.',
    },
    phrases: [['فِي غُرْفَتِي يُوجَدُ …', 'in my room there is …'], ['أَسْتَعْمِلُهُ لِلدِّرَاسَةِ', 'I use it for studying'], ['السَّرِيرُ الَّذِي …', 'the bed that …'], ['أُرِيدُ أَنْ أُغَيِّرَ …', 'I want to change …']],
  },
  checkCore: 'named furniture and appliances correctly, with agreement',
  checkDevelop: 'used an object pronoun (أَسْتَعْمِلُهُ · أَسْتَعْمِلُهَا) or الَّذِي / الَّتِي',
};
speak.talk.routes.develop = '60 seconds: add what you use them for (أَسْتَعْمِلُهُ لِلدِّرَاسَةِ …) and something that broke (past).';
speak.talk.routes.stretch = '90 seconds: add الَّذِي / الَّتِي, an opinion and law … la- for your dream room.';
speak.ladderQs[0].l2 = '… وَنَسْتَعْمِلُهُ لِلْجُلُوسِ …';

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (selling old furniture online), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Online advert: sell an item', ar: 'إِعْلَانٌ عَلَى الإِنْتَرْنِتْ: بَيْعُ غَرَضٍ',
    fields: [
      { core: true, ar: 'اسْمُ الغَرَضِ', en: 'Name of the item', tip: 'مَكْتَبٌ · ثَلَّاجَةٌ صَغِيرَةٌ' },
      { core: true, ar: 'اللَّوْنُ', en: 'Colour', tip: 'Agree with the item: مَكْتَبٌ أَبْيَضُ · خِزَانَةٌ بَيْضَاءُ' },
      { core: true, ar: 'العُمُرُ', en: 'Age', tip: 'سَنَتَانِ' },
      { core: true, ar: 'الحَالَةُ', en: 'Condition', tip: 'جَيِّدَةٌ · مِثْلُ الجَدِيدِ' },
      { core: true, ar: 'السِّعْرُ', en: 'Price', tip: 'ثَلَاثُونَ جُنَيْهًا' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تَبِيعُهُ؟', en: 'ONE sentence: why are you selling it?', tip: 'أَبِيعُهُ لِأَنَّ …' },
    ],
  },
  Q2: {
    title: 'Question 2: changing my bedroom', ar: 'غَيَّرْتُ غُرْفَتِي',
    task: 'You have just redecorated your bedroom. Write an email in Arabic to your friend of about 80–90 words. You must include: • what your room was like before • the new furniture and colours, and where things are • which piece you like most, and why • what you did with the old furniture.',
    phrases: [['كَانَتْ غُرْفَتِي …', 'my room was …'], ['الآنَ يُوجَدُ … بِجَانِبِ …', 'now there is … next to …'], ['أَكْثَرُ شَيْءٍ أُحِبُّهُ هُوَ … الَّذِي …', 'what I like most is the … that …'], ['أَعْطَيْنَا الأَثَاثَ القَدِيمَ لِـ …', 'we gave the old furniture to …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ غُرْفَتِكَ الجَدِيدَةِ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about your new-look room (80–90 words).'],
      ['1', 'كَيْفَ كَانَتْ غُرْفَتُكَ قَبْلَ ذٰلِكَ؟', 'What your room was like before'],
      ['2', 'صِفِ الأَثَاثَ الجَدِيدَ وَالأَلْوَانَ وَأَمَاكِنَ الأَشْيَاءِ.', 'New furniture, colours, where things are'],
      ['3', 'مَا القِطْعَةُ الَّتِي تُحِبُّهَا أَكْثَرَ؟ وَلِمَاذَا؟', 'Your favourite piece, and why'],
      ['4', 'مَاذَا فَعَلْتَ بِالأَثَاثِ القَدِيمِ؟', 'What you did with the old furniture'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'كَيْفَ كَانَتْ → PAST description (كَانَتْ + adjective)', 'صِفْ → PRESENT: يُوجَدُ / تُوجَدُ + colours + prepositions', 'مَا … الَّتِي … وَلِمَاذَا → a relative clause + a reason', 'مَاذَا فَعَلْتَ → PAST'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'كَانَتْ غُرْفَتِي ______ وَ ______ .', en: '1 · My room was … and …' },
      { ar: 'الآنَ يُوجَدُ فِيهَا ______ ، وَالجُدْرَانُ ______ .', en: '2 · Now it has …, and the walls are …' },
      { ar: 'أُحِبُّ ______ أَكْثَرَ، لِأَنَّ ______ .', en: '3 · I like … most, because …' },
      { ar: 'أَعْطَيْنَا الأَثَاثَ القَدِيمَ لِـ ______ .', en: '4 · We gave the old furniture to …' },
    ],
    developFrames: [
      { ar: 'كَانَتْ غُرْفَتِي مُظْلِمَةً، وَكَانَ فِيهَا ______ قَدِيمٌ.', en: '1 · My room was dark, and it had an old …' },
      { ar: 'اشْتَرَيْنَا ______ ، وَوَضَعْنَاهُ ______ .', en: '2 · We bought …, and put it …' },
      { ar: 'أَكْثَرُ شَيْءٍ أُحِبُّهُ هُوَ ______ الَّذِي ______ .', en: '3 · What I like most is the … that …' },
      { ar: 'بِعْنَا ______ عَلَى الإِنْتَرْنِتْ، وَ ______ .', en: '4 · We sold … online, and …' },
    ],
    bank: ['سَرِيرٌ · مَكْتَبٌ', 'خِزَانَةُ المَلَابِسِ', 'رَفٌّ', 'سِتَارَةٌ · سَجَّادَةٌ', 'أَبْيَضُ · بَيْضَاءُ', 'بِجَانِبِ · تَحْتَ', 'الَّذِي · الَّتِي', 'قَدِيمٌ · جَدِيدٌ'],
    model: {
      text: `مَرْحَبًا يَا حَمْزَةُ،
كَيْفَ حَالُكَ؟ غَيَّرْتُ غُرْفَتِي فِي العُطْلَةِ! كَانَتْ غُرْفَتِي مُظْلِمَةً وَمُزْدَحِمَةً، وَكَانَ فِيهَا سَرِيرٌ قَدِيمٌ وَخِزَانَةٌ مَكْسُورَةٌ. الآنَ الجُدْرَانُ زَرْقَاءُ فَاتِحَةٌ، وَيُوجَدُ سَرِيرٌ جَدِيدٌ تَحْتَ النَّافِذَةِ، وَبِجَانِبِهِ مَكْتَبٌ أَبْيَضُ وَرَفٌّ لِلْكُتُبِ. أَكْثَرُ شَيْءٍ أُحِبُّهُ هُوَ الكُرْسِيُّ الأَخْضَرُ الَّذِي اخْتَارَهُ أَبِي، لِأَنَّهُ مُرِيحٌ جِدًّا، وَأَقْرَأُ عَلَيْهِ كُلَّ لَيْلَةٍ قَبْلَ النَّوْمِ. أَمَّا الأَثَاثُ القَدِيمُ فَأَعْطَيْنَاهُ لِجَمْعِيَّةٍ خَيْرِيَّةٍ، لِأَنَّهُ مَا زَالَ مُفِيدًا لِلْعَائِلَاتِ الفَقِيرَةِ. تَعَالَ وَزُرْنِي قَرِيبًا لِتَرَى الغُرْفَةَ، وَسَنَلْعَبُ فِيهَا أَلْعَابَ الفِيدْيُو مَعًا!
إِلَى اللِّقَاءِ،
عِيسَى`,
      en: '“Hi Hamza, how are you? I changed my room in the holidays! It was dark and cluttered, with an old bed and a broken wardrobe. Now the walls are light blue, there is a new bed under the window, and next to it a white desk and a bookshelf. What I like most is the green chair my dad chose, because it is very comfortable and I read in it every night before bed. As for the old furniture, we gave it to a charity, because it is still useful for poor families. Come and visit soon to see the room — we will play video games in it together! See you, Isa.”',
      find: ['كَانَتْ غُرْفَتِي مُظْلِمَةً', 'وَيُوجَدُ سَرِيرٌ جَدِيدٌ', 'الكُرْسِيُّ الأَخْضَرُ الَّذِي', 'أَمَّا الأَثَاثُ القَدِيمُ فَأَعْطَيْنَاهُ'],
    },
  },
  upgrade: [
    { ar: 'عِنْدِي مَكْتَبٌ.', en: 'I have a desk.' },
    { ar: 'عِنْدِي مَكْتَبٌ خَشَبِيٌّ بُنِّيٌّ تَحْتَ النَّافِذَةِ فِي غُرْفَتِي.', en: '… a brown wooden desk under the window in my room.' },
    { ar: 'عِنْدِي مَكْتَبٌ خَشَبِيٌّ تَحْتَ النَّافِذَةِ، أَسْتَعْمِلُهُ لِلدِّرَاسَةِ لِأَنَّ الضَّوْءَ هُنَاكَ جَيِّدٌ.', en: '… I use it for studying because the light there is good.' },
    { ar: '… وَهُوَ المَكْتَبُ الَّذِي كَانَ لِأَبِي عِنْدَمَا كَانَ طَالِبًا، لِذٰلِكَ أُحِبُّهُ كَثِيرًا.', en: '… it is the desk that belonged to my dad when he was a student — so I love it.' },
  ],
  builder: [
    { en: 'We use the oven for cooking.', cols: [['نَسْتَعْمِلُ', 'يَسْتَعْمِلُ'], ['الفُرْنَ', 'الفُرْنُ'], ['لِلطَّبْخِ', 'فِي الطَّبْخِ']], key: [0, 0, 0], why: 'We → نَسْتَعْمِلُ; the object → الفُرْنَ; “for” = li-: لِلطَّبْخِ.' },
    { en: 'The wardrobe that is in my room is white.', cols: [['الخِزَانَةُ الَّتِي', 'الخِزَانَةُ الَّذِي'], ['فِي غُرْفَتِي', 'فِي غُرْفَتُهَا'], ['بَيْضَاءُ', 'أَبْيَضُ']], key: [0, 0, 0], why: 'خِزَانَة is feminine → الَّتِي and بَيْضَاءُ.' },
    { en: 'The fridge is broken, so we will buy a new one.', cols: [['الثَّلَّاجَةُ مُعَطَّلَةٌ', 'الثَّلَّاجَةُ مُعَطَّلٌ'], ['لِذٰلِكَ سَنَشْتَرِي', 'لِأَنَّ سَنَشْتَرِي'], ['وَاحِدَةً جَدِيدَةً', 'وَاحِدًا جَدِيدًا']], key: [0, 0, 0], why: 'Feminine noun → مُعَطَّلَةٌ … وَاحِدَةً جَدِيدَةً; so = لِذٰلِكَ.' },
  ],
  errors: [
    { wrong: 'الخِزَانَةُ المَلَابِسِ كَبِيرَةٌ.', hint: 'Look at the iḍāfa.', right: 'خِزَانَةُ المَلَابِسِ كَبِيرَةٌ.', why: 'In an iḍāfa the first word has no al-.' },
    { wrong: 'الغَسَّالَةُ؟ نَسْتَعْمِلُهُ كُلَّ يَوْمٍ.', hint: 'Which pronoun for a feminine object?', right: 'الغَسَّالَةُ؟ نَسْتَعْمِلُهَا كُلَّ يَوْمٍ.', why: 'Feminine object → -hā: نَسْتَعْمِلُهَا.' },
    { wrong: 'السِّتَارَةُ أَزْرَقُ.', hint: 'Colour agreement.', right: 'السِّتَارَةُ زَرْقَاءُ.', why: 'Feminine noun → feminine colour: زَرْقَاءُ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: an object with a story', ar: 'غَرَضٌ لَهُ قِصَّةٌ',
    task: 'Full Q3 title: “Things that matter in my home”. Today write ONLY the past paragraph: an object in your home with a story (a gift, something old, something you made) — where it came from, what happened, why it matters and how you feel about it.',
    formula: [
      { ar: 'فِي غُرْفَتِي سَاعَةٌ قَدِيمَةٌ لَهَا قِصَّةٌ.', en: 'T · In my room there is an old clock with a story.' },
      { ar: 'أَعْطَانِي إِيَّاهَا جَدِّي قَبْلَ أَنْ يُسَافِرَ.', en: 'D · My grandfather gave it to me before he travelled.' },
      { ar: 'هِيَ مُهِمَّةٌ لِأَنَّهَا كَانَتْ لِأَبِيهِ.', en: 'R · It matters because it belonged to his father.' },
      { ar: 'أَشْعُرُ بِالحَنِينِ عِنْدَمَا أَنْظُرُ إِلَيْهَا.', en: 'F · I feel nostalgic when I look at it.' },
    ],
    phrases: [['فِي بَيْتِنَا … لَهُ قِصَّةٌ', 'in our house there is … with a story'], ['أَعْطَانِي … فِي …', '… gave me … in …'], ['كَانَ … لِـ جَدِّي', 'it belonged to my grandfather'], ['هُوَ مُهِمٌّ لِأَنَّ …', 'it matters because …'], ['أَشْعُرُ بِـ … عِنْدَمَا …', 'I feel … when …']],
    model: {
      text: 'فِي غُرْفَةِ الجُلُوسِ عِنْدَنَا سَجَّادَةٌ حَمْرَاءُ قَدِيمَةٌ لَهَا قِصَّةٌ جَمِيلَةٌ. صَنَعَتْهَا جَدَّتِي بِيَدِهَا فِي قَرْيَتِهَا فِي تُرْكِيَا قَبْلَ خَمْسِينَ سَنَةً، وَأَعْطَتْهَا لِأُمِّي يَوْمَ زِفَافِهَا. عِنْدَمَا انْتَقَلْنَا إِلَى بِرِيطَانِيَا، حَمَلَتْهَا أُمِّي فِي حَقِيبَتِهَا، لِأَنَّهَا لَمْ تُرِدْ أَنْ تَتْرُكَهَا. كُنْتُ أَلْعَبُ عَلَيْهَا مَعَ أَخِي عِنْدَمَا كُنَّا صِغَارًا. السَّجَّادَةُ مُهِمَّةٌ لَنَا، لِأَنَّهَا تُذَكِّرُنَا بِجَدَّتِي الَّتِي تُوُفِّيَتْ. أَشْعُرُ بِالدِّفْءِ عِنْدَمَا أَجْلِسُ عَلَيْهَا، وَفِي المُسْتَقْبَلِ سَأَحْفَظُهَا فِي بَيْتِي.',
      en: 'T: in our living room there is an old red rug with a lovely story · D: my grandmother made it by hand in her village in Turkey fifty years ago and gave it to my mum on her wedding day; when we moved to Britain, mum carried it in her suitcase because she didn’t want to leave it; my brother and I played on it when we were small · R: it matters because it reminds us of my grandmother, who has passed away · F: I feel warmth when I sit on it, and in the future I will keep it in my own home.',
      find: ['لَهَا قِصَّةٌ جَمِيلَةٌ', 'صَنَعَتْهَا جَدَّتِي بِيَدِهَا', 'لِأَنَّهَا تُذَكِّرُنَا', 'أَشْعُرُ بِالدِّفْءِ'],
    },
  },
};
write.Q2.phrases[3] = ['أَعْطَيْنَا الأَثَاثَ القَدِيمَ لِجَمْعِيَّةٍ …', 'we gave the old furniture to a charity …'];
write.Q2.coreFrames[4] = { ar: 'أَعْطَيْنَا الأَثَاثَ القَدِيمَ لِـ ______ .'.replace('لِـ ', 'إِلَى '), en: '4 · We gave the old furniture to …' };
write.Q3.phrases[2] = ['كَانَ لِجَدِّي', 'it belonged to my grandfather'];
write.Q3.phrases[4] = ['أَشْعُرُ بِالدِّفْءِ عِنْدَمَا …', 'I feel warm when …'];

module.exports = { speak, write };
