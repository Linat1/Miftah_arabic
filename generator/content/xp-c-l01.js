'use strict';
/* Exam-practice data · TC-L01 · People, Places, Continents and Compass Points (countries; nisba nationalities; compass points). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'C', n: 1, short: 'Countries and Compass Points', arShort: 'البُلْدَانُ وَالاتِّجَاهَاتُ', fileTitle: 'People_Places_Compass_Points', title: 'People, Places, Continents and Compass Points', ar: 'النَّاسُ وَالأَمَاكِنُ وَالقَارَّاتُ وَالاتِّجَاهَاتُ', icon: 'FaGlobe', grammar: 'countries and nisba nationalities (-iyy / -iyya); compass points (fī shamāli …); comparing places' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: say where countries and cities are (fī janūbi …, sharqa …), give nationalities with the nisba (miṣriyy / miṣriyya), and compare places you know.',
  words: [
    w(1, 'شَمَالٌ · جَنُوبٌ', 'north · south', [['in the north of', 'فِي شَمَالِ'], ['adj.', 'شَمَالِيٌّ · جَنُوبِيٌّ']], { tag: 'compass' }),
    w(2, 'شَرْقٌ · غَرْبٌ', 'east · west', [['in the east of', 'فِي شَرْقِ'], ['adj.', 'شَرْقِيٌّ · غَرْبِيٌّ']], { tag: 'compass' }),
    w(3, 'بَلَدٌ', 'a country', [['sg.', 'بَلَدٌ'], ['pl.', 'بُلْدَانٌ'], ['my', 'بَلَدِي']]),
    w(4, 'قَارَّةٌ', 'a continent', [['sg.', 'قَارَّةٌ'], ['pl.', 'قَارَّاتٌ']]),
    w(5, 'عَاصِمَةٌ', 'a capital city', [['sg.', 'عَاصِمَةٌ'], ['pl.', 'عَوَاصِمُ']]),
    w(6, 'يَقَعُ · تَقَعُ', 'is located (m. · f.)', [['m.', 'يَقَعُ لُبْنَانُ'], ['f.', 'تَقَعُ مِصْرُ']], { tag: 'location' }),
    w(7, 'مِصْرِيٌّ', 'Egyptian', [['m.', 'مِصْرِيٌّ'], ['f.', 'مِصْرِيَّةٌ'], ['pl.', 'مِصْرِيُّونَ']], { tag: 'nisba' }),
    w(8, 'مَغْرِبِيٌّ', 'Moroccan', [['m.', 'مَغْرِبِيٌّ'], ['f.', 'مَغْرِبِيَّةٌ'], ['pl.', 'مَغَارِبَةٌ']], { tag: 'nisba' }),
    w(9, 'سُعُودِيٌّ', 'Saudi', [['m.', 'سُعُودِيٌّ'], ['f.', 'سُعُودِيَّةٌ'], ['pl.', 'سُعُودِيُّونَ']], { tag: 'nisba' }),
    w(10, 'عَلَى حُدُودِ …', 'on the border of …', [['between', 'بَيْنَ … وَ…'], ['near', 'قَرِيبٌ مِنْ']], { tag: 'location' }),
    w(11, 'أَكْبَرُ مِنْ · أَصْغَرُ مِنْ', 'bigger than · smaller than', [['the biggest', 'أَكْبَرُ بَلَدٍ']], { tag: 'comparison' }),
    w(12, 'سُكَّانٌ', 'inhabitants, population', [['number of', 'عَدَدُ السُّكَّانِ'], ['its people', 'سُكَّانُهَا']]),
  ],
  words1: { eyebrow: 'Language bank · places and compass points', title: 'Where is it?', ar: 'أَيْنَ يَقَعُ؟', notes: 'LANGUAGE BANK (2 min) — compass + iḍāfa: فِي شَمَالِ إِفْرِيقْيَا · فِي جَنُوبِ غَرْبِ آسْيَا. يَقَعُ for masculine places (لُبْنَانُ، العِرَاقُ), تَقَعُ for feminine (مِصْرُ، السُّعُودِيَّةُ، المُدُنُ).' },
  words2: { eyebrow: 'Language bank · nationalities (m. · f. · pl.)', title: 'Where are you from?', ar: 'مِنْ أَيْنَ أَنْتَ؟', notes: 'LANGUAGE BANK (2 min) — the nisba: drop al- and add -iyy / -iyya: المَغْرِبُ → مَغْرِبِيٌّ / مَغْرِبِيَّةٌ. Some plurals are broken: مَغَارِبَةٌ. Countries are mostly feminine: مِصْرُ كَبِيرَةٌ.' },
  checkCore: 'said where places are with a compass point and gave nationalities',
  checkDevelop: 'used the right gender (yaqaʿu / taqaʿu, -iyy / -iyya) and compared two places',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'an international camp', title: 'Role play A — Meeting at an international youth camp', ar: 'فِي المُخَيَّمِ الدَّوْلِيِّ', you: 'a camper', them: 'a camp leader',
      tasks: [
        { core: true, ex: 'أَهْلًا! مِنْ أَيْنَ أَنْتَ؟', task: 'Say where you are from.', help: 'أَنَا مِنْ … أَنَا …', model: 'أَنَا مِنْ بِرِيطَانِيَا، أَنَا بِرِيطَانِيٌّ.', modelEn: 'I am from Britain; I am British.' },
        { core: true, ex: 'وَأَيْنَ تَسْكُنُ بِالضَّبْطِ؟', task: 'Give your city and where it is.', help: 'أَسْكُنُ فِي … فِي شَمَالِ / جَنُوبِ …', model: 'أَسْكُنُ فِي مَانْشِسْتَرَ، فِي شَمَالِ غَرْبِ إِنْجِلْتِرَا.', modelEn: 'I live in Manchester, in the north-west of England.' },
        { core: true, ex: 'هَلْ زُرْتَ بَلَدًا عَرَبِيًّا؟', task: 'Say which and where it is.', help: 'نَعَمْ، زُرْتُ … وَهِيَ تَقَعُ فِي …', model: 'نَعَمْ، زُرْتُ مِصْرَ، وَهِيَ تَقَعُ فِي شَمَالِ شَرْقِ إِفْرِيقْيَا.', modelEn: 'Yes, I visited Egypt; it is in north-east Africa.' },
        { core: true, ex: 'هٰذِهِ صَدِيقَتُكَ الجَدِيدَةُ مِنْ تُونِسَ.', task: 'Greet her and say her nationality.', help: 'أَهْلًا! أَنْتِ …', model: 'أَهْلًا وَسَهْلًا! إِذَنْ أَنْتِ تُونِسِيَّةٌ.', modelEn: 'Welcome! So you are Tunisian.' },
        { core: true, unexpected: true, ex: 'مَا عَاصِمَةُ بَلَدِكَ؟', task: 'Answer the unexpected question.', help: 'عَاصِمَةُ … هِيَ …', model: 'عَاصِمَةُ بِرِيطَانِيَا هِيَ لَنْدَنُ، وَهِيَ فِي جَنُوبِ شَرْقِ إِنْجِلْتِرَا.', modelEn: 'The capital of Britain is London, in the south-east of England.' },
      ],
      girl: 'مِنْ أَيْنَ أَنْتِ · تَسْكُنِينَ · زُرْتِ · بَلَدِكِ — she answers: أَنَا بِرِيطَانِيَّةٌ',
      notes: 'Core: nisba with gender, compass points in iḍāfa (fī shamāli gharbi …), taqaʿu for a feminine country (Miṣr).',
    },
    {
      id: 'B', level: 'Core+', setting: 'a travel agent', title: 'Role play B — Where shall we go?', ar: 'فِي وَكَالَةِ السَّفَرِ', you: 'a customer', them: 'the travel agent',
      tasks: [
        { core: true, ex: 'إِلَى أَيِّ بَلَدٍ تُرِيدُ أَنْ تُسَافِرَ؟', task: 'Choose an Arab country.', help: 'أُرِيدُ أَنْ أُسَافِرَ إِلَى …', model: 'أُرِيدُ أَنْ أُسَافِرَ إِلَى الأُرْدُنِّ.', modelEn: 'I want to travel to Jordan.' },
        { core: true, ex: 'لِمَاذَا الأُرْدُنُّ؟', task: 'Give a reason.', help: 'لِأَنَّ … فِيهِ …', model: 'لِأَنَّ فِيهِ البَتْرَاءَ وَالبَحْرَ المَيِّتَ، وَأُحِبُّ التَّارِيخَ.', modelEn: 'Because it has Petra and the Dead Sea, and I love history.' },
        { ex: 'البَتْرَاءُ فِي الجَنُوبِ، وَالبَحْرُ المَيِّتُ فِي الغَرْبِ.', task: 'ASK how far Petra is from the capital.', help: 'كَمْ تَبْعُدُ … عَنْ …؟', model: 'كَمْ تَبْعُدُ البَتْرَاءُ عَنْ عَمَّانَ؟', modelEn: 'How far is Petra from Amman?' },
        { ex: 'ثَلَاثَ سَاعَاتٍ بِالسَّيَّارَةِ جَنُوبًا.', task: 'Compare with another place and decide.', help: '… أَقْرَبُ مِنْ … إِذَنْ …', model: 'البَحْرُ المَيِّتُ أَقْرَبُ مِنَ البَتْرَاءِ، إِذَنْ سَنَزُورُهُ أَوَّلًا.', modelEn: 'The Dead Sea is closer than Petra, so we will visit it first.' },
        { unexpected: true, ex: 'مَا البُلْدَانُ المُجَاوِرَةُ لِلْأُرْدُنِّ؟', task: 'Answer the unexpected question.', help: 'فِي الشَّمَالِ … وَفِي الشَّرْقِ …', model: 'فِي الشَّمَالِ سُورِيَا، وَفِي الشَّرْقِ العِرَاقُ، وَفِي الجَنُوبِ السُّعُودِيَّةُ.', modelEn: 'To the north Syria, to the east Iraq and to the south Saudi Arabia.' },
      ],
      girl: 'تُرِيدِينَ أَنْ تُسَافِرِي',
      notes: 'Core+: a reason with fīhi, the CANDIDATE asks with kam tabʿudu … ʿan, a comparative (aqrab min), compass points for neighbours.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a geography project', title: 'Role play C — Presenting an Arab country', ar: 'مَشْرُوعُ الجُغْرَافْيَا', you: 'a student presenting', them: 'your teacher asking questions',
      tasks: [
        { ex: 'أَيَّ بَلَدٍ اخْتَرْتَ؟ وَلِمَاذَا؟', task: 'Name the country and give a reason.', help: 'اخْتَرْتُ … لِأَنَّ …', model: 'اخْتَرْتُ المَغْرِبَ، لِأَنَّ جَدَّتِي مَغْرِبِيَّةٌ، وَلِأَنَّهُ بَلَدٌ مُتَنَوِّعٌ جِدًّا.', modelEn: 'I chose Morocco, because my grandmother is Moroccan and it is a very diverse country.' },
        { ex: 'أَيْنَ يَقَعُ بِالضَّبْطِ؟', task: 'Locate it with two details.', help: 'يَقَعُ فِي … عَلَى …', model: 'يَقَعُ فِي شَمَالِ غَرْبِ إِفْرِيقْيَا، عَلَى البَحْرِ الأَبْيَضِ المُتَوَسِّطِ وَالمُحِيطِ الأَطْلَسِيِّ.', modelEn: 'It is in north-west Africa, on the Mediterranean and the Atlantic Ocean.' },
        { ex: 'قَارِنْهُ بِبِرِيطَانِيَا.', task: 'Compare size, people or weather.', help: '… أَكْبَرُ مِنْ … لٰكِنَّ …', model: 'المَغْرِبُ أَكْبَرُ مِنْ بِرِيطَانِيَا، لٰكِنَّ عَدَدَ سُكَّانِهِ أَقَلُّ، وَجَوُّهُ أَدْفَأُ بِكَثِيرٍ.', modelEn: 'Morocco is bigger than Britain, but has fewer people, and its weather is much warmer.' },
        { ex: 'مَا اللُّغَاتُ الَّتِي يَتَكَلَّمُهَا المَغَارِبَةُ؟', task: 'Answer with a plural nationality.', help: 'يَتَكَلَّمُ المَغَارِبَةُ … وَ…', model: 'يَتَكَلَّمُ المَغَارِبَةُ العَرَبِيَّةَ وَالأَمَازِيغِيَّةَ، وَكَثِيرٌ مِنْهُمْ يَتَكَلَّمُ الفَرَنْسِيَّةَ أَيْضًا.', modelEn: 'Moroccans speak Arabic and Amazigh, and many also speak French.' },
        { unexpected: true, ex: 'هَلْ زُرْتَهُ؟ وَمَاذَا رَأَيْتَ؟', task: 'Answer the unexpected question (past).', help: 'نَعَمْ، زُرْتُ … وَرَأَيْتُ …', model: 'نَعَمْ، زُرْتُ مَدِينَةَ فَاسَ فِي الصَّيْفِ، وَرَأَيْتُ أَقْدَمَ جَامِعَةٍ فِي العَالَمِ.', modelEn: 'Yes, I visited Fez in the summer and saw the oldest university in the world.' },
      ],
      girl: 'اخْتَرْتِ · قَارِنِيهِ · زُرْتِهِ · رَأَيْتِ',
      notes: 'Develop: two reasons, precise location, comparatives with bi-kathīr, a broken plural nationality (al-maghāriba), a superlative in the past.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a global-citizenship panel', title: 'Role play D — Why learn about other countries?', ar: 'لِمَاذَا نَتَعَرَّفُ عَلَى البُلْدَانِ؟', you: 'a young panellist', them: 'the panel chair',
      tasks: [
        { ex: 'لِمَاذَا يَجِبُ أَنْ يَتَعَلَّمَ الطُّلَّابُ عَنْ بُلْدَانٍ أُخْرَى؟', task: 'Give two reasons.', help: 'لِأَنَّ … وَلِأَنَّ …', model: 'لِأَنَّ العَالَمَ أَصْبَحَ قَرْيَةً صَغِيرَةً، وَلِأَنَّ فِي صَفِّنَا طُلَّابًا مِنْ أَكْثَرَ مِنْ عِشْرِينَ بَلَدًا.', modelEn: 'Because the world has become a small village, and because our class has students from over twenty countries.' },
        { ex: 'هَلْ كَانَ النَّاسُ يَعْرِفُونَ العَالَمَ فِي المَاضِي؟', task: 'Compare past and present.', help: 'كَانَ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَ أَغْلَبُ النَّاسِ لَا يُسَافِرُونَ أَبْعَدَ مِنْ قُرَاهُمْ، أَمَّا اليَوْمَ فَنَرَى العَالَمَ كُلَّهُ عَلَى شَاشَةِ الهَاتِفِ.', modelEn: 'Most people used not to travel beyond their village; today we see the whole world on a phone screen.' },
        { ex: 'هَلْ يَكْفِي الإِنْتَرْنِتُ لِنَعْرِفَ البُلْدَانَ؟', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهُ يُعْطِينَا مَعْلُومَاتٍ كَثِيرَةً، غَيْرَ أَنَّ السَّفَرَ وَالحَدِيثَ مَعَ النَّاسِ يُعَلِّمَانِنَا أَكْثَرَ.', modelEn: 'It is true it gives us lots of information, but travel and talking to people teach us more.' },
        { ex: 'أَعْطِنَا مِثَالًا مِنْ تَجْرِبَتِكَ.', task: 'Tell a short past story.', help: 'عِنْدَمَا … اكْتَشَفْتُ أَنَّ …', model: 'عِنْدَمَا زُرْتُ صَدِيقِي العُمَانِيَّ، اكْتَشَفْتُ أَنَّ عُمَانَ فِيهَا جِبَالٌ خَضْرَاءُ، لَا صَحْرَاءُ فَقَطْ كَمَا كُنْتُ أَظُنُّ.', modelEn: 'When I visited my Omani friend, I discovered Oman has green mountains, not only desert as I used to think.' },
        { unexpected: true, ex: 'لَوِ اسْتَطَعْتَ أَنْ تَعِيشَ فِي أَيِّ بَلَدٍ، أَيْنَ تَعِيشُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوِ اسْتَطَعْتُ، لَعِشْتُ فِي … لِأَنَّ …', model: 'لَوِ اسْتَطَعْتُ، لَعِشْتُ فِي تُونِسَ، لِأَنَّهَا تَجْمَعُ بَيْنَ البَحْرِ وَالصَّحْرَاءِ وَالتَّارِيخِ.', modelEn: 'If I could, I would live in Tunisia, because it combines sea, desert and history.' },
      ],
      girl: 'تَجْرِبَتِكِ · اسْتَطَعْتِ أَنْ تَعِيشِي · زُرْتُ صَدِيقَتِي العُمَانِيَّةَ',
      notes: 'Stretch: two reasons, kāna + negative present vs ammā … fa-, a dual verb (yuʿallimāninā), ʿindamā … iktashaftu anna, kamā kuntu aẓunnu, law … la-.',
      modelFoot: 'Stretch: reasons, past vs present, a concession, a discovery story and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'بَلَدِي وَالعَالَمُ', aim: 'one full sentence per question',
      qs: [
        { q: 'مِنْ أَيْنَ أَنْتَ؟', en: 'Where are you from?', start: 'أَنَا مِنْ … أَنَا …', model: 'أَنَا مِنْ لَنْدَنَ، وَأَصْلِي مِنَ العِرَاقِ.', modelEn: 'I am from London, and my family is from Iraq.' },
        { q: 'أَيْنَ تَقَعُ مَدِينَتُكَ؟', en: 'Where is your town?', start: 'تَقَعُ فِي … مِنْ …', model: 'تَقَعُ مَدِينَتِي فِي جَنُوبِ إِنْجِلْتِرَا، قَرِيبَةً مِنَ البَحْرِ.', modelEn: 'My town is in the south of England, near the sea.' },
        { q: 'مَا البَلَدُ العَرَبِيُّ الَّذِي تُحِبُّهُ؟', en: 'Which Arab country do you like?', start: 'أُحِبُّ … لِأَنَّ …', model: 'أُحِبُّ لُبْنَانَ، لِأَنَّ طَبِيعَتَهُ جَمِيلَةٌ وَأَكْلَهُ لَذِيذٌ.', modelEn: 'I like Lebanon, because its nature is beautiful and its food is tasty.' },
        { q: 'مَا عَاصِمَةُ مِصْرَ؟', en: 'What is the capital of Egypt?', start: 'عَاصِمَةُ مِصْرَ هِيَ …', model: 'عَاصِمَةُ مِصْرَ هِيَ القَاهِرَةُ، وَهِيَ عَلَى نَهْرِ النِّيلِ.', modelEn: 'The capital of Egypt is Cairo, on the Nile.' },
        { q: 'هَلْ عِنْدَكَ أَصْدِقَاءُ مِنْ بُلْدَانٍ أُخْرَى؟', en: 'Do you have friends from other countries?', start: 'نَعَمْ، عِنْدِي صَدِيقٌ … وَصَدِيقَةٌ …', model: 'نَعَمْ، عِنْدِي صَدِيقٌ سُورِيٌّ، وَصَدِيقَةٌ بَاكِسْتَانِيَّةٌ.', modelEn: 'Yes, I have a Syrian friend (m.) and a Pakistani friend (f.).' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a compass point or a nisba = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'الأَمَاكِنُ وَالنَّاسُ', aim: 'two or three sentences, with comparison and a past detail',
      qs: [
        { q: 'قَارِنْ بَيْنَ مَدِينَتَيْنِ تَعْرِفُهُمَا.', en: 'Compare two cities you know.', start: '… أَكْبَرُ مِنْ … لٰكِنَّ …', model: 'لَنْدَنُ أَكْبَرُ مِنْ مَانْشِسْتَرَ وَأَغْلَى، لٰكِنَّ مَانْشِسْتَرَ أَهْدَأُ وَأَهْلَهَا أَكْثَرُ لُطْفًا.', modelEn: 'London is bigger and dearer than Manchester, but Manchester is calmer and its people friendlier.' },
        { q: 'صِفْ رِحْلَةً إِلَى بَلَدٍ آخَرَ.', en: 'Describe a trip to another country.', start: 'سَافَرْتُ إِلَى … فِي … وَهُوَ / هِيَ تَقَعُ …', model: 'سَافَرْتُ إِلَى تُرْكِيَا فِي الصَّيْفِ، وَهِيَ تَقَعُ بَيْنَ أُورُوبَّا وَآسْيَا، وَزُرْتُ إِسْطَنْبُولَ.', modelEn: 'I travelled to Turkey in the summer; it lies between Europe and Asia, and I visited Istanbul.' },
        { q: 'مَا البَلَدُ الَّذِي تُرِيدُ أَنْ تَزُورَهُ؟ وَلِمَاذَا؟', en: 'Which country do you want to visit, and why?', start: 'أُرِيدُ أَنْ أَزُورَ … لِأَنَّ …', model: 'أُرِيدُ أَنْ أَزُورَ اليَابَانَ، لِأَنَّ ثَقَافَتَهَا مُخْتَلِفَةٌ، وَأُحِبُّ أَكْلَهَا.', modelEn: 'I want to visit Japan, because its culture is different and I love its food.' },
        { q: 'هَلْ مِنَ المُهِمِّ أَنْ نَعْرِفَ الجُغْرَافْيَا؟', en: 'Is it important to know geography?', start: 'نَعَمْ، لِأَنَّ … مَثَلًا …', model: 'نَعَمْ، لِأَنَّهَا تُسَاعِدُنَا عَلَى فَهْمِ الأَخْبَارِ؛ مَثَلًا لَا نَفْهَمُ مُشْكِلَةَ المَاءِ فِي الشَّرْقِ الأَوْسَطِ بِدُونِ خَرِيطَةٍ.', modelEn: 'Yes, because it helps us understand the news — we can’t understand the Middle East water problem without a map.' },
        { q: 'مِنْ أَيْنَ أَصْلُ عَائِلَتِكَ؟ صِفْ ذٰلِكَ المَكَانَ.', en: 'Where is your family from? Describe that place.', start: 'أَصْلُ عَائِلَتِي مِنْ … فِي شَمَالِ / جَنُوبِ …', model: 'أَصْلُ عَائِلَتِي مِنْ قَرْيَةٍ فِي جَنُوبِ لُبْنَانَ، قَرِيبَةٍ مِنَ البَحْرِ، وَفِيهَا أَشْجَارُ زَيْتُونٍ كَثِيرَةٌ.', modelEn: 'My family is from a village in south Lebanon, near the sea, with many olive trees.' },
      ],
      foot: 'Develop: two or three sentences — location, comparison, a reason, an example and a past trip.',
      modelFoot: 'Location + comparison + reason + a past detail = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'العَالَمُ قَرْيَةٌ صَغِيرَةٌ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلْ أَصْبَحَ العَالَمُ «قَرْيَةً صَغِيرَةً»؟', en: 'Has the world become a “small village”?', start: 'إِلَى حَدٍّ كَبِيرٍ، لِأَنَّ … غَيْرَ أَنَّ …', model: 'إِلَى حَدٍّ كَبِيرٍ، لِأَنَّنَا نَتَوَاصَلُ مَعَ أَيِّ بَلَدٍ فِي ثَوَانٍ، غَيْرَ أَنَّ الفُرُوقَ بَيْنَ الأَغْنِيَاءِ وَالفُقَرَاءِ مَا زَالَتْ كَبِيرَةً.', modelEn: 'Largely, because we can reach any country in seconds — but the gaps between rich and poor are still large.' },
        { q: 'مَا الَّذِي يَجْمَعُ البُلْدَانَ العَرَبِيَّةَ فِي رَأْيِكَ؟', en: 'What unites the Arab countries?', start: 'تَجْمَعُهَا … وَ… رَغْمَ أَنَّ …', model: 'تَجْمَعُهَا اللُّغَةُ وَالتَّارِيخُ وَكَثِيرٌ مِنَ العَادَاتِ، رَغْمَ أَنَّ لِكُلِّ بَلَدٍ لَهْجَتَهُ وَأَكْلَهُ وَمَلَابِسَهُ.', modelEn: 'Language, history and many customs unite them, although each country has its own dialect, food and dress.' },
        { q: 'كَيْفَ تَغَيَّرَتِ الخَرَائِطُ وَطُرُقُ مَعْرِفَةِ الأَمَاكِنِ؟', en: 'How have maps and ways of finding places changed?', start: 'كَانَ النَّاسُ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَ المُسَافِرُونَ يَعْتَمِدُونَ عَلَى النُّجُومِ وَالخَرَائِطِ الوَرَقِيَّةِ، أَمَّا اليَوْمَ فَيُخْبِرُنَا الهَاتِفُ بِكُلِّ مُنْعَطَفٍ.', modelEn: 'Travellers used to rely on the stars and paper maps; today the phone tells us every turn.' },
        { q: 'هَلِ الجِنْسِيَّةُ تُحَدِّدُ هُوِيَّةَ الإِنْسَانِ؟', en: 'Does nationality define a person’s identity?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الجِنْسِيَّةَ جُزْءٌ مِنْ هُوِيَّتِنَا، غَيْرَ أَنَّ كَثِيرًا مِنَّا يَحْمِلُ أَكْثَرَ مِنْ ثَقَافَةٍ، فَأَنَا بِرِيطَانِيٌّ وَعِرَاقِيٌّ مَعًا.', modelEn: 'It is true nationality is part of our identity, but many of us carry more than one culture — I am British and Iraqi at once.' },
        { q: 'لَوْ رَسَمْتَ خَرِيطَةً لِحَيَاتِكَ، مَا الأَمَاكِنُ الَّتِي تَضَعُهَا؟', en: 'If you drew a map of your life, which places would you put on it?', start: 'لَوْ رَسَمْتُ …، لَوَضَعْتُ …', model: 'لَوْ رَسَمْتُ خَرِيطَةً لِحَيَاتِي، لَوَضَعْتُ بَغْدَادَ فِي وَسَطِهَا، ثُمَّ لَنْدَنَ، ثُمَّ مَكَّةَ الَّتِي أَحْلُمُ بِزِيَارَتِهَا.', modelEn: 'If I drew a map of my life, I would put Baghdad in the middle, then London, then Mecca, which I dream of visiting.' },
      ],
      foot: 'Stretch: ghayra anna, raghma anna, kāna + present vs ammā … fa-, a concession and law … la- with a relative clause.',
      modelFoot: 'Stretch: concessions (ghayra anna · raghma anna), past vs present, identity, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I located places with compass points (fī shamāli …).' },
    { route: 'core', text: 'I gave nationalities with the right ending (-iyy / -iyya).' },
    { route: 'develop', text: 'I used yaqaʿu / taqaʿu correctly.' },
    { route: 'develop', text: 'I compared two places with a comparative.' },
    { route: 'stretch', text: 'I used a concession, ammā … fa- or law … la-.' },
  ],
};
speak.RP[3].tasks[1].help = 'كَانَ … أَمَّا اليَوْمَ فَنَرَى …';
speak.CONV[2].qs[2].start = 'كَانَ المُسَافِرُونَ … أَمَّا اليَوْمَ فَيُخْبِرُنَا …';
speak.CONV[2].qs[4].start = 'لَوْ رَسَمْتُ …، لَوَضَعْتُ …';

const Q2_CORE = `مَرْحَبًا يَا كَرِيمُ،
كَيْفَ حَالُكَ؟ أَنَا الآنَ فِي مُخَيَّمٍ دَوْلِيٍّ فِي اسْكُتْلَنْدَا، فِي شَمَالِ بِرِيطَانِيَا. فِي المُخَيَّمِ شَبَابٌ مِنْ عِشْرِينَ بَلَدًا. صَدِيقِي الجَدِيدُ اسْمُهُ أَمِينٌ، وَهُوَ مَغْرِبِيٌّ مِنْ مَدِينَةِ الرِّبَاطِ، وَهِيَ عَاصِمَةُ المَغْرِبِ. عِنْدِي صَدِيقَةٌ مِصْرِيَّةٌ أَيْضًا اسْمُهَا سَلْمَى. أَمْسِ رَسَمْنَا خَرِيطَةً كَبِيرَةً لِلْعَالَمِ، وَوَضَعَ كُلُّ وَاحِدٍ بَلَدَهُ عَلَيْهَا. المُخَيَّمُ مُمْتِعٌ جِدًّا. فِي الصَّيْفِ القَادِمِ سَأَزُورُ أَمِينًا فِي المَغْرِبِ!
مَعَ السَّلَامَةِ،
آدَمُ`;
const Q2_FULL = `عَزِيزِي كَرِيمٌ،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَأَنَا أَكْتُبُ إِلَيْكَ مِنْ مُخَيَّمٍ دَوْلِيٍّ لِلشَّبَابِ فِي جِبَالِ اسْكُتْلَنْدَا، فِي أَقْصَى شَمَالِ بِرِيطَانِيَا. يَجْمَعُ المُخَيَّمُ أَكْثَرَ مِنْ مِئَةِ شَابٍّ مِنْ عِشْرِينَ بَلَدًا، وَقَدْ تَعَرَّفْتُ عَلَى أَمِينٍ، وَهُوَ مَغْرِبِيٌّ مِنَ الرِّبَاطِ، وَعَلَى سَلْمَى، وَهِيَ مِصْرِيَّةٌ مِنَ الإِسْكَنْدَرِيَّةِ. أَمْسِ رَسَمْنَا خَرِيطَةً ضَخْمَةً لِلْعَالَمِ، ثُمَّ حَكَى كُلُّ وَاحِدٍ عَنْ بَلَدِهِ، فَاكْتَشَفْتُ أَنَّ المَغْرِبَ أَكْبَرُ مِنْ بِرِيطَانِيَا، لٰكِنَّ عَدَدَ سُكَّانِهِ أَقَلُّ. صَحِيحٌ أَنَّ الجَوَّ هُنَا بَارِدٌ وَمُمْطِرٌ، غَيْرَ أَنَّ الأَصْدِقَاءَ يُدَفِّئُونَ كُلَّ شَيْءٍ. وَإِذَا سَمَحَ لِي وَالِدَايَ، فَسَأَزُورُ أَمِينًا فِي الصَّيْفِ القَادِمِ.
مَعَ تَحِيَّاتِي،
آدَمُ`;
const Q3A_CORE = `أَسْكُنُ فِي مَدِينَةِ بِرْمِنْغْهَامَ، وَهِيَ تَقَعُ فِي وَسَطِ إِنْجِلْتِرَا. مَدِينَتِي كَبِيرَةٌ، وَسُكَّانُهَا مِنْ بُلْدَانٍ كَثِيرَةٍ. فِي صَفِّي طُلَّابٌ بَاكِسْتَانِيُّونَ وَصُومَالِيُّونَ وَيَمَنِيُّونَ وَبُولَنْدِيُّونَ، وَنَتَكَلَّمُ أَكْثَرَ مِنْ عَشْرِ لُغَاتٍ!
أَنَا بِرِيطَانِيٌّ، لٰكِنَّ أَصْلَ عَائِلَتِي مِنَ اليَمَنِ. اليَمَنُ يَقَعُ فِي جَنُوبِ شِبْهِ الجَزِيرَةِ العَرَبِيَّةِ، وَعَاصِمَتُهُ صَنْعَاءُ. فِي الشَّمَالِ تَقَعُ السُّعُودِيَّةُ، وَفِي الشَّرْقِ تَقَعُ عُمَانُ، وَفِي الغَرْبِ البَحْرُ الأَحْمَرُ.
فِي الصَّيْفِ المَاضِي سَافَرْتُ مَعَ أَبِي إِلَى عُمَانَ، لِأَنَّ اليَمَنَ صَعْبٌ الآنَ. زُرْنَا مَسْقَطَ، وَهِيَ عَاصِمَةُ عُمَانَ، وَرَأَيْنَا البَحْرَ وَالجِبَالَ. كَانَ الجَوُّ حَارًّا جِدًّا، لٰكِنَّ النَّاسَ كَانُوا لُطَفَاءَ، وَأَكَلْنَا المَنْدِيَ وَالحَلْوَى العُمَانِيَّةَ.
فِي رَأْيِي، مِنَ المُهِمِّ أَنْ نَعْرِفَ بُلْدَانَ العَالَمِ. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَزُورَ اليَمَنَ، وَسَأَرَى قَرْيَةَ جَدِّي فِي الجِبَالِ، لِأَنَّ أَبِي يَتَكَلَّمُ عَنْهَا دَائِمًا.`;
const Q3A_FULL = `عَلَى جِدَارِ غُرْفَتِي خَرِيطَةٌ كَبِيرَةٌ لِلْعَالَمِ، وَعَلَيْهَا دَبَابِيسُ حَمْرَاءُ فِي كُلِّ مَكَانٍ زُرْتُهُ، وَدَبَابِيسُ زَرْقَاءُ فِي الأَمَاكِنِ الَّتِي أَحْلُمُ بِزِيَارَتِهَا. وَأَهَمُّ دَبُّوسٍ فِيهَا هُوَ الَّذِي وَضَعْتُهُ عَلَى صَنْعَاءَ، فِي جَنُوبِ شِبْهِ الجَزِيرَةِ العَرَبِيَّةِ.
أَنَا بِرِيطَانِيٌّ وُلِدْتُ فِي بِرْمِنْغْهَامَ، فِي وَسَطِ إِنْجِلْتِرَا، أَمَّا أَبِي فَيَمَنِيٌّ جَاءَ إِلَى بِرِيطَانِيَا قَبْلَ عِشْرِينَ سَنَةً. وَلِذٰلِكَ أَشْعُرُ أَنَّ لِي مَدِينَتَيْنِ: وَاحِدَةً أَعِيشُ فِيهَا، وَأُخْرَى أَسْمَعُ عَنْهَا فِي قِصَصِ أَبِي كُلَّ مَسَاءٍ.
فِي الصَّيْفِ المَاضِي اقْتَرَبْتُ مِنْهَا أَكْثَرَ مِنْ أَيِّ وَقْتٍ مَضَى؛ فَقَدْ سَافَرْنَا إِلَى عُمَانَ، الَّتِي تَقَعُ شَرْقَ اليَمَنِ، وَهُنَاكَ الْتَقَيْتُ بِأَعْمَامِي لِأَوَّلِ مَرَّةٍ. فُوجِئْتُ بِأَنَّ لَهَجَاتِنَا مُخْتَلِفَةٌ، لٰكِنَّ ضَحَكَاتِنَا مُتَشَابِهَةٌ تَمَامًا.
صَحِيحٌ أَنِّي لَمْ أَزُرْ صَنْعَاءَ بَعْدُ، غَيْرَ أَنَّ الخَرِيطَةَ عَلَّمَتْنِي أَنَّ المَسَافَاتِ لَا تَقْطَعُ الجُذُورَ. وَلَوْ سَمَحَتِ الظُّرُوفُ فِي المُسْتَقْبَلِ، لَكَانَتْ أَوَّلُ رِحْلَةٍ أَقُومُ بِهَا وَحْدِي إِلَى قَرْيَةِ جَدِّي فِي الجِبَالِ، لِأَضَعَ دَبُّوسًا أَحْمَرَ أَخِيرًا.`;
const Q3B_FULL = `يُقَالُ إِنَّ العَالَمَ أَصْبَحَ قَرْيَةً صَغِيرَةً، وَهٰذَا صَحِيحٌ إِلَى حَدٍّ كَبِيرٍ؛ فَنَسْتَطِيعُ أَنْ نُكَلِّمَ صَدِيقًا فِي أُسْتُرَالْيَا، وَنَشْتَرِيَ مُنْتَجًا مِنَ الصِّينِ، وَنُشَاهِدَ أَخْبَارَ المَغْرِبِ، وَنَحْنُ جَالِسُونَ فِي غُرْفَتِنَا، وَكُلُّ ذٰلِكَ فِي أَقَلَّ مِنْ سَاعَةٍ.
فِي المَاضِي كَانَ أَغْلَبُ النَّاسِ يَعِيشُونَ وَيَمُوتُونَ فِي المِنْطَقَةِ الَّتِي وُلِدُوا فِيهَا، وَلَا يَعْرِفُونَ عَنِ البُلْدَانِ البَعِيدَةِ إِلَّا القَلِيلَ، أَمَّا اليَوْمَ فَيَجْلِسُ فِي صَفٍّ وَاحِدٍ طُلَّابٌ مِنْ خَمْسِ قَارَّاتٍ، يَتَكَلَّمُونَ لُغَاتٍ مُخْتَلِفَةً فِي بُيُوتِهِمْ.
وَأَنَا أَرَى ذٰلِكَ كُلَّ يَوْمٍ؛ فَفِي العَامِ المَاضِي نَظَّمَتْ مَدْرَسَتِي «يَوْمَ الخَرِيطَةِ»، فَوَضَعَ كُلُّ طَالِبٍ دَبُّوسًا عَلَى بَلَدِ عَائِلَتِهِ، فَوَجَدْنَا أَكْثَرَ مِنْ أَرْبَعِينَ بَلَدًا، مِنْ شَمَالِ أُورُوبَّا إِلَى جَنُوبِ إِفْرِيقْيَا، ثُمَّ تَذَوَّقْنَا أَطْبَاقًا مِنْ كُلِّ قَارَّةٍ.
صَحِيحٌ أَنَّ هٰذَا التَّقَارُبَ يُسَهِّلُ التِّجَارَةَ وَالتَّعَلُّمَ، غَيْرَ أَنَّهُ قَدْ يَجْعَلُ الثَّقَافَاتِ المَحَلِّيَّةَ وَاللُّغَاتِ الصَّغِيرَةَ تَخْتَفِي. وَلَوْ تَعَلَّمَ كُلُّ طَالِبٍ لُغَةَ بَلَدٍ آخَرَ، لَأَصْبَحَتْ هٰذِهِ القَرْيَةُ أَكْثَرَ تَفَاهُمًا وَاحْتِرَامًا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in an international-camp form, write an email about people from different countries, and write an extended piece about your roots or about the world as a “small village”.',
  lift: [
    { ar: 'يَقَعُ اليَمَنُ فِي جَنُوبِ شِبْهِ الجَزِيرَةِ العَرَبِيَّةِ', en: 'Yemen is in the south of the Arabian Peninsula' },
    { ar: 'هُوَ مَغْرِبِيٌّ، وَهِيَ مِصْرِيَّةٌ', en: 'he is Moroccan, and she is Egyptian' },
    { ar: 'المَغْرِبُ أَكْبَرُ مِنْ بِرِيطَانِيَا، لٰكِنَّ …', en: 'Morocco is bigger than Britain, but …' },
  ],
  checkTip: 'Check: compass points in iḍāfa (fī shamāli …, no al- on shamāl); yaqaʿu (m.) / taqaʿu (f. — most countries and all cities); nisba agrees (miṣriyy / miṣriyya / miṣriyyūn); comparatives with min.',
  FORM: {
    title: 'International youth camp registration', ar: 'التَّسْجِيلُ فِي المُخَيَّمِ الدَّوْلِيِّ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'آدَمُ سَعِيدٌ', modelEn: 'Adam Said' },
      { core: true, ar: 'الجِنْسِيَّةُ', en: 'Nationality', model: 'بِرِيطَانِيٌّ', modelEn: 'British' },
      { core: true, ar: 'البَلَدُ وَالمَدِينَةُ', en: 'Country and city', model: 'إِنْجِلْتِرَا، بِرْمِنْغْهَامُ', modelEn: 'England, Birmingham' },
      { core: true, ar: 'أَيْنَ تَقَعُ مَدِينَتُكَ؟', en: 'Where your city is', model: 'فِي وَسَطِ إِنْجِلْتِرَا', modelEn: 'in the middle of England' },
      { core: true, ar: 'أَصْلُ العَائِلَةِ', en: 'Family origin', model: 'اليَمَنُ', modelEn: 'Yemen' },
      { core: true, ar: 'اللُّغَاتُ', en: 'Languages', model: 'الإِنْجِلِيزِيَّةُ وَالعَرَبِيَّةُ', modelEn: 'English and Arabic' },
      { ar: 'بَلَدٌ زُرْتَهُ', en: 'A country you have visited', model: 'عُمَانُ، فِي شَرْقِ شِبْهِ الجَزِيرَةِ العَرَبِيَّةِ', modelEn: 'Oman, in the east of the Arabian Peninsula' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ أَنْ تُشَارِكَ؟', en: 'ONE sentence: why you want to take part', model: 'أُرِيدُ أَنْ أُشَارِكَ لِكَيْ أَتَعَرَّفَ عَلَى شَبَابٍ مِنْ قَارَّاتٍ مُخْتَلِفَةٍ.', modelEn: 'I want to take part to meet young people from different continents.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with likay + verb in -a.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 2: a girl writes biriṭāniyya. Boxes 4 and 7: compass points in iḍāfa.',
  },
  Q2: {
    short: 'an email from an international camp', title: 'Question 2: friends from around the world', ar: 'رِسَالَةٌ مِنَ المُخَيَّمِ الدَّوْلِيِّ',
    task: 'You are at an international youth camp. Write an email in Arabic to your friend of about 80–90 words. You must include: • where the camp is (use a compass point) • two new friends: their nationalities and where they are from • what you did yesterday • your opinion of the camp and a future plan.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'A compass point and two nationalities that agree.', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['أَنَا فِي … فِي شَمَالِ …', 'I am in … in the north of …'], ['هُوَ مَغْرِبِيٌّ مِنْ …', 'he is Moroccan from …'], ['هِيَ مِصْرِيَّةٌ مِنْ …', 'she is Egyptian from …'], ['سَأَزُورُهُ فِي …', 'I will visit him in …']],
    rubric: [
      ['task', 'أَنْتَ فِي مُخَيَّمٍ دَوْلِيٍّ لِلشَّبَابِ. اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ (٨٠–٩٠ كَلِمَةً).', 'You are at an international camp: write to your friend (80–90 words).'],
      ['1', 'أَيْنَ يَقَعُ المُخَيَّمُ؟', 'Where the camp is'],
      ['2', 'صِفْ صَدِيقَيْنِ جَدِيدَيْنِ: جِنْسِيَّتُهُمَا وَبَلَدُهُمَا.', 'Two new friends: nationalities and countries'],
      ['3', 'مَاذَا فَعَلْتَ أَمْسِ؟', 'What you did yesterday'],
      ['4', 'مَا رَأْيُكَ فِي المُخَيَّمِ؟ وَمَا خُطَّتُكَ لِلْمُسْتَقْبَلِ؟', 'Your opinion; a future plan'],
    ],
    qwords: 'أَيْنَ (where) · صِفْ (describe) · مَاذَا (what) · مَا رَأْيُكَ (your opinion) — bullet 2 is a DUAL: ṣadīqayni jadīdayni, jinsiyyatuhumā',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'أَنَا الآنَ فِي مُخَيَّمٍ فِي ______ ، فِي شَمَالِ / جَنُوبِ ______ .', 'I am now at a camp in …, in the north / south of …'],
      ['2', 'صَدِيقِي الجَدِيدُ ______ ، وَهُوَ ______ . وَصَدِيقَتِي ______ ، وَهِيَ ______ .', 'My new friend …, he is … And my friend …, she is …'],
      ['3', 'أَمْسِ ______ مَعًا.', 'Yesterday we … together.'],
      ['4', 'المُخَيَّمُ ______ . فِي المُسْتَقْبَلِ سَأَزُورُ ______ .', 'The camp is … In future I will visit …'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Karim, how are you? I am now at an international camp in Scotland, in the north of Britain. There are young people from twenty countries. My new friend is called Amin; he is Moroccan, from Rabat, the capital of Morocco. I also have an Egyptian friend called Salma. Yesterday we drew a big world map, and everyone put their country on it. The camp is great fun. Next summer I will visit Amin in Morocco! Goodbye, Adam.”',
      find: ['فِي شَمَالِ بِرِيطَانِيَا', 'وَهُوَ مَغْرِبِيٌّ', 'صَدِيقَةٌ مِصْرِيَّةٌ', 'سَأَزُورُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Karim, greetings. I’m writing from an international youth camp in the Scottish mountains, in the far north of Britain. The camp brings together over a hundred young people from twenty countries; I’ve met Amin, a Moroccan from Rabat, and Salma, an Egyptian from Alexandria. Yesterday we drew a huge world map, then each person talked about their country, and I discovered that Morocco is bigger than Britain but has fewer people. It is true the weather here is cold and rainy, but friends warm everything up. And if my parents let me, I’ll visit Amin next summer. Best wishes, Adam.”',
      find: ['فِي أَقْصَى شَمَالِ', 'وَهِيَ مِصْرِيَّةٌ', 'أَكْبَرُ مِنْ … لٰكِنَّ', 'إِذَا سَمَحَ … فَسَأَزُورُ'],
    },
  },
  Q3: {
    a: { title: 'جُذُورِي عَلَى الخَرِيطَةِ', en: 'My roots on the map', bullets: 'أَيْنَ تَسْكُنُ؟ وَأَيْنَ تَقَعُ مَدِينَتُكَ؟ · أَصْلُ عَائِلَتِكَ وَمَكَانُهُ · رِحْلَةٌ إِلَى بَلَدٍ آخَرَ · رَأْيُكَ وَأَحْلَامُكَ', bulletsEn: 'Where you live and where your town is · your family’s origin and where it is · a trip to another country · your opinion and dreams' },
    b: { title: 'العَالَمُ قَرْيَةٌ صَغِيرَةٌ', en: 'The world is a small village', bullets: 'كَيْفَ أَصْبَحَ العَالَمُ أَقْرَبَ؟ · المَاضِي وَالحَاضِرُ · تَجْرِبَةٌ فِي مَدْرَسَتِكَ أَوْ حَيِّكَ · الإِيجَابِيَّاتُ وَالسَّلْبِيَّاتُ وَاقْتِرَاحُكَ', bulletsEn: 'How the world has become closer · past and present · an experience at your school or in your area · pros, cons and your suggestion' },
    plan: [
      'Where you live — your town and where it lies (fī wasaṭi …, fī shamāli …); nationalities in your class.',
      'Your roots — country, capital, neighbours by compass point (fī sh-shamāli taqaʿu …).',
      'Past — a trip: safartu, zurnā, raʾaynā; a comparison (akbar min / aḥarr min).',
      'Opinion + future — fī raʾyī …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'تَقَعُ مَدِينَتِي فِي وَسَطِ إِنْجِلْتِرَا.', en: 'present: my town is in the middle of England.' },
      { ar: 'زُرْنَا مَسْقَطَ، وَهِيَ عَاصِمَةُ عُمَانَ.', en: 'past: we visited Muscat, the capital of Oman.' },
      { ar: 'سَأَزُورُ قَرْيَةَ جَدِّي فِي الجِبَالِ.', en: 'future: I will visit my grandfather’s village in the mountains.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Birmingham, in the middle of England: a big city with people from many countries; Pakistani, Somali, Yemeni and Polish classmates — over ten languages! → British with Yemeni roots: Yemen is in the south of the Arabian Peninsula, capital Sanaa; Saudi Arabia to the north, Oman to the east, the Red Sea to the west → last summer to Oman with Dad (Yemen is hard now): Muscat, the capital; sea and mountains; very hot but kind people; we ate mandi and Omani halwa → it is important to know the world’s countries; I want to visit Yemen and will see my grandfather’s village in the mountains, because Dad always talks about it.', find: ['تَقَعُ فِي وَسَطِ', 'يَمَنِيُّونَ', 'فِي الشَّمَالِ تَقَعُ', 'سَأَرَى'], notes: 'Core model: compass points, plural nisba (yamaniyyūn), yaqaʿu / taqaʿu, capitals, a past trip with kāna, an opinion and a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'A big world map on my wall: red pins where I’ve been, blue where I dream of going; the most important pin is on Sanaa, in the south of the Arabian Peninsula → born British in Birmingham, in the middle of England; as for my father, he is Yemeni and came twenty years ago; so I feel I have two cities — one I live in, one I hear about in his stories every evening → last summer I came closer than ever: we travelled to Oman, east of Yemen, where I met my uncles for the first time; our dialects were different but our laughter was exactly the same → it is true I haven’t visited Sanaa yet, but the map taught me distance doesn’t cut roots; “if circumstances allowed in future, my first trip alone would be to my grandfather’s village in the mountains, to finally place a red pin”.', find: ['الَّتِي أَحْلُمُ بِزِيَارَتِهَا', 'أَمَّا أَبِي فَيَمَنِيٌّ', 'الَّتِي تَقَعُ شَرْقَ اليَمَنِ', 'لَوْ سَمَحَتِ … لَكَانَتْ'], notes: 'Full-mark model: a visual hook, relative clauses, ammā … fa-, a dual (madīnatayn), aktharu min ayyi waqtin maḍā, a passive (fūjiʾtu), lam azur … baʿdu, a concession and law … la-kānat.' },
      { which: 'ب', level: 'Full', subtitle: 'a small village', text: Q3B_FULL, en: 'They say the world has become a small village, and largely it has: we talk to a friend in Australia, buy a product from China and watch Moroccan news while sitting in our room — all in under an hour → in the past most people lived and died in the area where they were born and knew little of distant countries; as for today, students from five continents sit in one class, speaking different languages at home → I see it every day: last year my school held a “map day”; every student put a pin on their family’s country, and we found over forty countries, from northern Europe to southern Africa, then tasted dishes from every continent → it is true this closeness eases trade and learning, but it may make local cultures and small languages disappear; “if every student learned another country’s language, this village would be more understanding and respectful”.', find: ['وَنَحْنُ جَالِسُونَ', 'أَمَّا اليَوْمَ فَيَجْلِسُ', 'مِنْ شَمَالِ أُورُوبَّا إِلَى جَنُوبِ', 'لَوْ تَعَلَّمَ … لَأَصْبَحَتْ'], notes: 'Full-mark model for the Stretch title: yuqālu inna, three parallel verbs + a ḥāl, kāna + present vs ammā … fa-, lā … illā, compass points across continents, a concession and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; nationality agrees with me.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: a compass point, two nationalities and a comparison.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: ammā … fa-, a concession or law … la-.' },
  ],
};

module.exports = { speak, write };
