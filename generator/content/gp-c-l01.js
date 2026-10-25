'use strict';
/* Guided Practice Rooms · TC-L01 · People, places and compass points. New tasks. Teacher-made. */
const XP = require('./xp-c-l01');

const base = { topic: 'C', n: 1, short: 'People, Places and Compass Points', arShort: 'النَّاسُ وَالأَمَاكِنُ وَالجِهَاتُ', fileTitle: 'People_Places_Compass_Points', title: 'People, places and compass points', icon: 'FaCompass', grammar: 'compass points (fī shamāli … · shamāliyyun); yaqaʿu / taqaʿu (m. / f. countries); nisba adjectives (m. · f. · pl.); ʿalā ḥudūdi; comparatives (akbaru min)' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up on countries and compass points, the answer ladder, two new role plays (a tourist information desk, a geography podcast about your family’s country), a topic conversation with A-R-E-T, and a one-minute talk about a country they know.',
  words: XP.speak.words,
  words1: { title: 'Compass points and countries', ar: 'الجِهَاتُ وَالبُلْدَانُ' },
  words2: { title: 'Nationalities and comparing places', ar: 'الجِنْسِيَّاتُ وَالمُقَارَنَةُ' },
  ladder: {
    q: 'أَيْنَ يَقَعُ بَلَدُ عَائِلَتِكَ؟', qEn: 'Where is your family’s country located?',
    rungs: [
      { ar: 'تَقَعُ مِصْرُ فِي شَمَالِ إِفْرِيقْيَا.', en: 'Egypt is in North Africa.' },
      { ar: 'تَقَعُ مِصْرُ فِي شَمَالِ إِفْرِيقْيَا، عَلَى حُدُودِ لِيبْيَا وَالسُّودَانِ.', en: '… on the border of Libya and Sudan.' },
      { ar: '… عَاصِمَتُهَا القَاهِرَةُ، وَهِيَ أَكْبَرُ مَدِينَةٍ فِي العَالَمِ العَرَبِيِّ.', en: '… its capital is Cairo, the biggest city in the Arab world.' },
      { ar: '… جَدِّي مِصْرِيٌّ مِنَ الجَنُوبِ، وَفِي الصَّيْفِ القَادِمِ سَنَزُورُ قَرْيَتَهُ فِي أَسْوَانَ.', en: '… my grandad is Egyptian from the south, and next summer we will visit his village in Aswan.' },
    ],
  },
  ladderQs: [
    { q: 'مِنْ أَيِّ بَلَدٍ أَنْتَ؟', l1: 'أَنَا … مِنْ …', l2: '… وَأَصْلُ عَائِلَتِي …', l3: '… وَلِذٰلِكَ أَتَكَلَّمُ …' },
    { q: 'أَيْنَ تَقَعُ مَدِينَتُكَ؟', l1: 'تَقَعُ فِي … بَرِيطَانِيَا', l2: '… قَرِيبَةٌ مِنْ …', l3: '… وَهِيَ أَصْغَرُ مِنْ …' },
    { q: 'أَيُّ بَلَدٍ عَرَبِيٍّ تُرِيدُ أَنْ تَزُورَ؟', l1: 'أُرِيدُ أَنْ أَزُورَ …', l2: '… لِأَنَّ …', l3: '… وَلَوْ زُرْتُهُ لَرَأَيْتُ …' },
    { q: 'هَلْ عِنْدَكَ أَصْدِقَاءُ مِنْ بُلْدَانٍ أُخْرَى؟', l1: 'نَعَمْ، صَدِيقِي …', l2: '… وَصَدِيقَتِي …', l3: '… تَعَرَّفْتُ عَلَيْهِمْ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a tourist information desk in Amman', title: 'Role play 1 — At the tourist information desk', ar: 'فِي مَكْتَبِ السِّيَاحَةِ', you: 'a visitor from Britain', them: 'the tourist information officer',
      tasks: [
        { ex: 'أَهْلًا! مِنْ أَيْنَ أَنْتَ؟', task: 'Give your nationality and city.', plan: 'مِنْ أَيْنَ ← أَنَا بِرِيطَانِيٌّ مِنْ …', model: 'أَنَا بِرِيطَانِيٌّ مِنْ مَانْشِسْتَرَ.', modelEn: 'I am British, from Manchester.' },
        { ex: 'أَيْنَ تَقَعُ مَانْشِسْتَرُ؟', task: 'Say where your city is (compass point).', plan: 'أَيْنَ ← تَقَعُ فِي شَمَالِ … إِنْجِلْتِرَا', model: 'تَقَعُ فِي شَمَالِ غَرْبِ إِنْجِلْتِرَا.', modelEn: 'It is in the north-west of England.' },
        { ex: 'مَاذَا تُرِيدُ أَنْ تَزُورَ فِي الأُرْدُنِّ؟', task: 'Name a place you want to visit.', plan: 'مَاذَا ← أُرِيدُ أَنْ أَزُورَ …', model: 'أُرِيدُ أَنْ أَزُورَ البَتْرَاءَ وَالبَحْرَ المَيِّتَ.', modelEn: 'I want to visit Petra and the Dead Sea.' },
        { ex: 'البَتْرَاءُ فِي الجَنُوبِ.', task: 'ASK how far it is.', plan: 'اسْأَلْ ← كَمْ كِيلُومِتْرًا … ؟', model: 'كَمْ كِيلُومِتْرًا بَيْنَ عَمَّانَ وَالبَتْرَاءِ؟', modelEn: 'How many kilometres between Amman and Petra?' },
        { unexpected: true, ex: 'هَلْ زُرْتَ بَلَدًا عَرَبِيًّا آخَرَ؟', task: 'Answer the unexpected question.', plan: 'هَلْ ← نَعَمْ، زُرْتُ … / لَا، لٰكِنْ …', model: 'نَعَمْ، زُرْتُ المَغْرِبَ، وَهُوَ يَقَعُ فِي غَرْبِ شَمَالِ إِفْرِيقْيَا.', modelEn: 'Yes, I visited Morocco, which is in the west of North Africa.' },
      ],
      girl: 'أَنْتِ · تُرِيدِينَ · زُرْتِ — and the Speaker says بِرِيطَانِيَّةٌ',
      notes: 'Language: nisba (barīṭāniyyun / -iyyatun) · taqaʿu fī shamāli … · urīdu an azūra · kam + accusative singular (kīlūmitran) · past zurtu.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a school geography podcast', title: 'Role play 2 — A podcast about your family’s country', ar: 'بُودْكَاسْتُ الجُغْرَافِيَا', you: 'a guest on the podcast', them: 'the podcast presenter',
      tasks: [
        { ex: 'حَدِّثْنَا عَنْ بَلَدِ عَائِلَتِكَ: أَيْنَ يَقَعُ؟', task: 'Locate the country (region + two borders).', model: 'يَقَعُ لُبْنَانُ فِي غَرْبِ آسِيَا عَلَى البَحْرِ الأَبْيَضِ المُتَوَسِّطِ، وَعَلَى حُدُودِ سُورِيَا وَفِلَسْطِينَ.', modelEn: 'Lebanon is in western Asia on the Mediterranean, on the border of Syria and Palestine.' },
        { ex: 'هَلْ هُوَ بَلَدٌ كَبِيرٌ؟', task: 'Compare its size with Britain.', model: 'لَا، هُوَ أَصْغَرُ مِنْ بِرِيطَانِيَا بِكَثِيرٍ، وَسُكَّانُهُ أَقَلُّ مِنْ سُكَّانِ لَنْدَنَ.', modelEn: 'No, it is much smaller than Britain, and its population is smaller than London’s.' },
        { ex: 'مَاذَا يُمَيِّزُ النَّاسَ هُنَاكَ؟', task: 'Describe the people (plural nisba + adjective).', model: 'اللُّبْنَانِيُّونَ كُرَمَاءُ وَيُحِبُّونَ الضُّيُوفَ، وَيَتَكَلَّمُ كَثِيرٌ مِنْهُمْ ثَلَاثَ لُغَاتٍ.', modelEn: 'The Lebanese are generous and love guests, and many speak three languages.' },
        { ex: 'هَلْ زُرْتَهُ؟', task: 'Tell a past visit (two details).', model: 'نَعَمْ، زُرْتُ بَيْرُوتَ قَبْلَ سَنَتَيْنِ، وَصَعِدْنَا إِلَى الجِبَالِ فِي الشَّمَالِ، فَرَأَيْنَا الثَّلْجَ فِي الرَّبِيعِ!', modelEn: 'Yes, I visited Beirut two years ago and we went up to the mountains in the north — we saw snow in spring!' },
        { unexpected: true, ex: 'لَوْ سَكَنْتَ هُنَاكَ، أَيْنَ تَسْكُنُ: فِي الشَّمَالِ أَمْ فِي الجَنُوبِ؟', task: 'Answer the unexpected question (law … la- + reason).', model: 'لَوْ سَكَنْتُ هُنَاكَ، لَاخْتَرْتُ الشَّمَالَ، لِأَنَّ الجَوَّ أَبْرَدُ، وَلِأَنَّ عَائِلَةَ أُمِّي تَسْكُنُ فِي طَرَابُلُسَ.', modelEn: 'If I lived there, I would choose the north, because it is cooler and my mum’s family live in Tripoli.' },
      ],
      girl: 'عَائِلَتِكِ · زُرْتِهِ · سَكَنْتِ · تَسْكُنِينَ',
      notes: 'Stretch language: yaqaʿu fī gharbi … ʿalā ḥudūdi · aṣgharu min … bi-kathīrin · plural nisba (al-lubnāniyyūna) + broken plural adjective (kuramāʾu) · law … la-.',
    },
  ],
  convAr: 'النَّاسُ وَالأَمَاكِنُ',
  conv: [
    { route: 'Core', q: 'مَا جِنْسِيَّتُكَ؟', en: 'What is your nationality?', push: 'وَجِنْسِيَّةُ وَالِدَيْكَ؟' },
    { route: 'Core', q: 'مَا عَاصِمَةُ بَلَدِكَ؟', en: 'What is your country’s capital?', push: 'هَلْ زُرْتَهَا؟' },
    { route: 'Develop', q: 'صِفْ مَكَانَ مَدِينَتِكَ عَلَى الخَرِيطَةِ.', en: 'Describe where your town is on the map.', push: 'وَمَا القَرِيبُ مِنْهَا؟' },
    { route: 'Develop', q: 'أَيُّ بَلَدٍ زُرْتَهُ أَعْجَبَكَ أَكْثَرَ؟', en: 'Which country you have visited did you like most?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'هَلْ مِنَ المُهِمِّ أَنْ نَعْرِفَ بَلَدَ أَجْدَادِنَا؟', en: 'Is it important to know our grandparents’ country?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'مَا فَوَائِدُ العَيْشِ فِي مَدِينَةٍ فِيهَا نَاسٌ مِنْ بُلْدَانٍ كَثِيرَةٍ؟', en: 'What are the benefits of living in a city with people from many countries?', push: 'وَالصُّعُوبَاتُ؟' },
  ],
  convModels: [
    { q: 'صِفْ مَكَانَ مَدِينَتِكَ عَلَى الخَرِيطَةِ.', model: 'تَقَعُ بِرْمِنْغْهَامُ فِي وَسَطِ إِنْجِلْتِرَا، شَمَالَ غَرْبِ لَنْدَنَ؛ هِيَ ثَانِي أَكْبَرِ مَدِينَةٍ فِي بِرِيطَانِيَا، لِذٰلِكَ فِيهَا مَحَطَّاتٌ كَثِيرَةٌ، وَسَأَدْرُسُ فِي جَامِعَتِهَا إِنْ شَاءَ اللّٰهُ.', modelEn: 'A: Birmingham is in central England, north-west of London · R/E: the second-biggest city in Britain, so it has many stations · T: I will study at its university, God willing.' },
    { q: 'أَيُّ بَلَدٍ زُرْتَهُ أَعْجَبَكَ أَكْثَرَ؟', model: 'أَعْجَبَتْنِي تُونُسُ أَكْثَرَ، لِأَنَّ النَّاسَ هُنَاكَ لُطَفَاءُ؛ تَقَعُ فِي شَمَالِ إِفْرِيقْيَا عَلَى البَحْرِ، وَسَبَحْنَا فِيهِ كُلَّ يَوْمٍ، وَأَتَمَنَّى أَنْ أَرْجِعَ إِلَيْهَا قَرِيبًا.', modelEn: 'A: Tunisia · R: the people are kind · E: in North Africa on the sea, we swam every day · T: I hope to go back soon.' },
    { q: 'هَلْ مِنَ المُهِمِّ أَنْ نَعْرِفَ بَلَدَ أَجْدَادِنَا؟', model: 'فِي رَأْيِي نَعَمْ، لِأَنَّهُ جُزْءٌ مِنْ هُوِيَّتِنَا؛ مَثَلًا، عِنْدَمَا زُرْتُ قَرْيَةَ جَدِّي فِي جَنُوبِ المَغْرِبِ، فَهِمْتُ لِمَاذَا يُحِبُّ الشَّايَ وَالضُّيُوفَ كَثِيرًا.', modelEn: 'Opinion: yes · R: it is part of our identity · E: when I visited grandad’s village in southern Morocco I understood why he loves tea and guests so much.' },
  ],
  talk: {
    title: 'One minute: a country I know', ar: 'بَلَدٌ أَعْرِفُهُ',
    text: 'Talk for one minute about a country you know: where it is (compass points and borders), its capital, its size compared with Britain, the people — and a visit you made or would like to make.',
    routes: {
      core: '30 seconds: where it is, the capital, one adjective for the people.',
      develop: '60 seconds: add borders, a comparison (أَكْبَرُ مِنْ · أَصْغَرُ مِنْ) and a past visit.',
      stretch: '90 seconds: add an opinion and a لَوْ … sentence about living there.',
    },
  },
  checkCore: 'used يَقَعُ / تَقَعُ correctly (m. / f. country)',
  checkDevelop: 'made nisba adjectives agree (مِصْرِيٌّ · مِصْرِيَّةٌ · مِصْرِيُّونَ)',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up form, decoding a new Q2 task (an email about a pen-friend’s country), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'International youth camp: registration', ar: 'المُخَيَّمُ الدَّوْلِيُّ لِلشَّبَابِ: التَّسْجِيلُ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'الجِنْسِيَّةُ', en: 'Nationality', tip: 'Agree: بِرِيطَانِيٌّ / بِرِيطَانِيَّةٌ' },
      { core: true, ar: 'المَدِينَةُ', en: 'City', tip: 'لِيدْزُ · كَارْدِيفُ' },
      { core: true, ar: 'أَيْنَ تَقَعُ مَدِينَتُكَ؟', en: 'Where your city is', tip: 'فِي شَمَالِ إِنْجِلْتِرَا' },
      { core: true, ar: 'اللُّغَاتُ', en: 'Languages', tip: 'العَرَبِيَّةُ · الإِنْجِلِيزِيَّةُ' },
      { ar: 'جُمْلَةٌ: بَلَدٌ تُرِيدُ أَنْ تَزُورَهُ وَلِمَاذَا', en: 'ONE sentence: a country you want to visit and why', tip: 'أُرِيدُ أَنْ أَزُورَ … لِأَنَّ …' },
    ],
  },
  Q2: {
    title: 'Question 2: my country and my city', ar: 'بَلَدِي وَمَدِينَتِي',
    task: 'Your new pen-friend in Jordan wants to know about where you live. Write an email in Arabic of about 80–90 words. You must include: • where your city is in your country • a comparison between your city and another place • the people who live there (nationalities) • a place in the Arab world you would like to visit and why.',
    phrases: [['تَقَعُ مَدِينَتِي فِي … بَرِيطَانِيَا', 'my city is in the … of Britain'], ['هِيَ أَكْبَرُ / أَصْغَرُ مِنْ …', 'it is bigger / smaller than …'], ['يَسْكُنُ فِيهَا نَاسٌ مِنْ …', 'people from … live there'], ['أَتَمَنَّى أَنْ أَزُورَ … لِأَنَّ …', 'I hope to visit … because …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ فِي الأُرْدُنِّ (٨٠–٩٠ كَلِمَةً).', 'Write to your pen-friend in Jordan (80–90 words).'],
      ['1', 'أَيْنَ تَقَعُ مَدِينَتُكَ؟', 'Where your city is'],
      ['2', 'قَارِنْ بَيْنَ مَدِينَتِكَ وَمَكَانٍ آخَرَ.', 'A comparison with another place'],
      ['3', 'مَنْ يَسْكُنُ فِيهَا؟', 'The people who live there'],
      ['4', 'أَيْنَ تُرِيدُ أَنْ تُسَافِرَ فِي العَالَمِ العَرَبِيِّ؟ وَلِمَاذَا؟', 'A place you would like to visit and why'],
    ],
    decode: ['an email to a PEN-FRIEND → informal greeting and closing', 'أَيْنَ تَقَعُ → تَقَعُ (a city is feminine) + compass point', 'قَارِنْ → comparative + مِنْ (أَكْبَرُ مِنْ)', 'مَنْ يَسْكُنُ → PRESENT + PLURAL nisba (مِصْرِيُّونَ · صُومَالِيُّونَ)', 'تُرِيدُ … وَلِمَاذَا → FUTURE / wish + لِأَنَّ'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'أَسْكُنُ فِي ______ ، وَهِيَ تَقَعُ فِي ______ بَرِيطَانِيَا.', en: '1 · I live in …, which is in the … of Britain.' },
      { ar: 'مَدِينَتِي ______ مِنْ لَنْدَنَ.', en: '2 · My city is … than London.' },
      { ar: 'يَسْكُنُ فِيهَا ______ وَ ______ .', en: '3 · … and … live there.' },
      { ar: 'أُرِيدُ أَنْ أَزُورَ ______ ، لِأَنَّ ______ .', en: '4 · I want to visit …, because …' },
    ],
    developFrames: [
      { ar: 'تَقَعُ ______ فِي ______ ، عَلَى بُعْدِ ______ مِنْ ______ .', en: '1 · … is in the …, … away from …' },
      { ar: 'صَحِيحٌ أَنَّهَا أَصْغَرُ مِنْ ______ ، غَيْرَ أَنَّهَا ______ .', en: '2 · It is true it is smaller than …, but it is …' },
      { ar: 'فِي حَيِّي جِيرَانٌ ______ وَ ______ ، لِذٰلِكَ ______ .', en: '3 · In my area there are … and … neighbours, so …' },
      { ar: 'لَوْ سَافَرْتُ إِلَى ______ ، لَزُرْتُ ______ .', en: '4 · If I travelled to …, I would visit …' },
    ],
    bank: ['فِي شَمَالِ · فِي جَنُوبِ', 'فِي شَرْقِ · فِي غَرْبِ', 'تَقَعُ · يَقَعُ', 'عَلَى حُدُودِ', 'أَكْبَرُ مِنْ · أَصْغَرُ مِنْ', 'سُكَّانٌ', 'مِصْرِيُّونَ · بَاكِسْتَانِيُّونَ', 'عَاصِمَةٌ'],
    model: {
      text: `مَرْحَبًا يَا سَلْمَى،
كَيْفَ حَالُكِ؟ أَسْكُنُ فِي مَدِينَةِ لِيدْزَ، وَهِيَ تَقَعُ فِي شَمَالِ إِنْجِلْتِرَا، عَلَى بُعْدِ ثَلَاثِ سَاعَاتٍ بِالقِطَارِ مِنْ لَنْدَنَ. صَحِيحٌ أَنَّ لِيدْزَ أَصْغَرُ مِنْ لَنْدَنَ بِكَثِيرٍ، غَيْرَ أَنَّهَا أَهْدَأُ وَأَرْخَصُ، وَحَوْلَهَا جِبَالٌ خَضْرَاءُ جَمِيلَةٌ. يَسْكُنُ فِيهَا نَاسٌ مِنْ بُلْدَانٍ كَثِيرَةٍ؛ جِيرَانُنَا بَاكِسْتَانِيُّونَ وَبُولَنْدِيُّونَ، وَصَدِيقَتِي المُفَضَّلَةُ صُومَالِيَّةٌ. لِذٰلِكَ أَسْمَعُ لُغَاتٍ مُخْتَلِفَةً كُلَّ يَوْمٍ فِي الشَّارِعِ. أَتَمَنَّى أَنْ أَزُورَ الأُرْدُنَّ فِي الصَّيْفِ القَادِمِ، لِأَنِّي أُرِيدُ أَنْ أَرَى البَتْرَاءَ فِي الجَنُوبِ، وَأَنْ أَسْبَحَ فِي البَحْرِ المَيِّتِ مَعَكِ.
مَعَ تَحِيَّاتِي،
مَرْيَمُ`,
      en: '“Hi Salma, how are you? I live in Leeds, which is in the north of England, three hours by train from London. It’s true Leeds is much smaller than London, but it is calmer and cheaper, and there are beautiful green hills around it. People from many countries live there: our neighbours are Pakistani and Polish, and my best friend is Somali, so I hear different languages in the street every day. I hope to visit Jordan next summer, because I want to see Petra in the south and swim in the Dead Sea with you. Best wishes, Maryam.”',
      find: ['تَقَعُ فِي شَمَالِ إِنْجِلْتِرَا', 'أَصْغَرُ مِنْ لَنْدَنَ بِكَثِيرٍ', 'بَاكِسْتَانِيُّونَ وَبُولَنْدِيُّونَ', 'أَتَمَنَّى أَنْ أَزُورَ'],
    },
  },
  upgrade: [
    { ar: 'تَقَعُ مِصْرُ فِي إِفْرِيقْيَا.', en: 'Egypt is in Africa.' },
    { ar: 'تَقَعُ مِصْرُ فِي شَمَالِ شَرْقِ إِفْرِيقْيَا، وَعَاصِمَتُهَا القَاهِرَةُ.', en: '… in the north-east of Africa, and its capital is Cairo.' },
    { ar: 'تَقَعُ مِصْرُ فِي شَمَالِ شَرْقِ إِفْرِيقْيَا عَلَى حُدُودِ لِيبْيَا، وَهِيَ أَكْبَرُ مِنْ بِرِيطَانِيَا بِأَرْبَعِ مَرَّاتٍ.', en: '… on the border of Libya, and it is four times bigger than Britain.' },
    { ar: '… لِذٰلِكَ سَافَرْنَا مِنَ الشَّمَالِ إِلَى الجَنُوبِ بِالقِطَارِ فِي يَوْمٍ كَامِلٍ!', en: '… so we travelled from north to south by train in a whole day!' },
  ],
  builder: [
    { en: 'Morocco is in the west of North Africa.', cols: [['يَقَعُ المَغْرِبُ', 'تَقَعُ المَغْرِبُ'], ['فِي غَرْبِ', 'غَرْبِيٌّ'], ['شَمَالِ إِفْرِيقْيَا', 'شَمَالِيٌّ إِفْرِيقْيَا']], key: [0, 0, 0], why: 'المَغْرِبُ is masculine → يَقَعُ; “in the west of” = فِي غَرْبِ + iḍāfa.' },
    { en: 'My aunt is Saudi.', cols: [['خَالَتِي', 'خَالِي'], ['سُعُودِيَّةٌ', 'سُعُودِيٌّ'], ['مِنَ الرِّيَاضِ', 'فِي الرِّيَاضِ مِنْ']], key: [0, 0, 0], why: 'A woman → feminine nisba: سُعُودِيَّةٌ.' },
    { en: 'London is bigger than Leeds.', cols: [['لَنْدَنُ', 'فِي لَنْدَنَ'], ['أَكْبَرُ', 'كَبِيرَةٌ'], ['مِنْ لِيدْزَ', 'لِيدْزُ']], key: [0, 0, 0], why: 'Comparative أَكْبَرُ never changes for feminine; it needs مِنْ.' },
  ],
  errors: [
    { wrong: 'يَقَعُ سُورِيَا فِي غَرْبِ آسِيَا.', hint: 'Is سُورِيَا masculine or feminine?', right: 'تَقَعُ سُورِيَا فِي غَرْبِ آسِيَا.', why: 'Most countries are feminine → تَقَعُ.' },
    { wrong: 'جِيرَانِي مِصْرِيٌّ.', hint: 'How many neighbours?', right: 'جِيرَانِي مِصْرِيُّونَ.', why: 'Human plural → plural nisba: مِصْرِيُّونَ.' },
    { wrong: 'القَاهِرَةُ أَكْبَرَةٌ مِنْ لَنْدَنَ.', hint: 'Comparatives don’t take a feminine ending.', right: 'القَاهِرَةُ أَكْبَرُ مِنْ لَنْدَنَ.', why: 'أَفْعَلُ + مِنْ stays the same: أَكْبَرُ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a journey across a country', ar: 'رِحْلَةٌ عَبْرَ بَلَدٍ',
    task: 'Full Q3 title: “Places and people around the world”. Today write ONLY the past paragraph: a journey you made through a country — where you went (north, south…), what the places and people were like, one thing that happened, and why you remember it.',
    formula: [
      { ar: 'فِي الصَّيْفِ المَاضِي سَافَرْنَا مِنْ شَمَالِ المَغْرِبِ إِلَى جَنُوبِهِ.', en: 'T · Last summer we travelled from the north of Morocco to the south.' },
      { ar: 'بَدَأْنَا فِي طَنْجَةَ، ثُمَّ زُرْنَا مُرَّاكُشَ.', en: 'D · We started in Tangier, then visited Marrakesh.' },
      { ar: 'أَتَذَكَّرُهَا لِأَنَّ النَّاسَ كَانُوا كُرَمَاءَ جِدًّا.', en: 'R · I remember it because the people were very generous.' },
      { ar: 'كَانَتْ أَجْمَلَ رِحْلَةٍ، وَسَأَرْجِعُ يَوْمًا مَا.', en: 'F · It was the best trip, and I will go back one day.' },
    ],
    phrases: [['سَافَرْنَا مِنْ … إِلَى …', 'we travelled from … to …'], ['فِي شَمَالِ / جَنُوبِ البَلَدِ …', 'in the north / south of the country …'], ['كَانَ النَّاسُ …', 'the people were …'], ['أَتَذَكَّرُ هٰذِهِ الرِّحْلَةَ لِأَنَّ …', 'I remember this trip because …'], ['كَانَتْ … أَكْثَرَ مِنْ …', 'it was more … than …']],
    model: {
      text: 'فِي الصَّيْفِ المَاضِي سَافَرْتُ مَعَ عَائِلَتِي مِنْ شَمَالِ مِصْرَ إِلَى جَنُوبِهَا. بَدَأْنَا فِي الإِسْكَنْدَرِيَّةِ عَلَى البَحْرِ، ثُمَّ رَكِبْنَا القِطَارَ إِلَى القَاهِرَةِ، وَبَعْدَ ذٰلِكَ إِلَى أَسْوَانَ. كَانَ الجَوُّ فِي الجَنُوبِ أَحَرَّ بِكَثِيرٍ مِنَ الشَّمَالِ، وَكَانَ النَّاسُ هُنَاكَ هَادِئِينَ وَكُرَمَاءَ. فِي أَسْوَانَ دَعَتْنَا عَائِلَةٌ نُوبِيَّةٌ إِلَى بَيْتِهَا، وَشَرِبْنَا الشَّايَ مَعَهَا عَلَى ضِفَّةِ النِّيلِ. أَتَذَكَّرُ هٰذِهِ الرِّحْلَةَ لِأَنِّي رَأَيْتُ بَلَدَ جَدَّتِي لِأَوَّلِ مَرَّةٍ.',
      en: 'T: last summer I travelled with my family from the north of Egypt to the south · D: we started in Alexandria on the sea, then took the train to Cairo and then Aswan; the south was much hotter than the north, and the people there were calm and generous; in Aswan a Nubian family invited us home and we drank tea with them on the bank of the Nile · R/F: I remember this trip because I saw my grandmother’s country for the first time.',
      find: ['مِنْ شَمَالِ مِصْرَ إِلَى جَنُوبِهَا', 'أَحَرَّ بِكَثِيرٍ مِنَ الشَّمَالِ', 'عَائِلَةٌ نُوبِيَّةٌ', 'أَتَذَكَّرُ هٰذِهِ الرِّحْلَةَ لِأَنِّي'],
    },
  },
};

module.exports = { speak, write };
