'use strict';
/* Exam-practice data · TC-L03 · Climate, Seasons and Weather (weather verbs that agree; comparatives; the future forecast). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'C', n: 3, short: 'Climate, Seasons and Weather', arShort: 'الطَّقْسُ وَالفُصُولُ', fileTitle: 'Climate_Seasons_Weather', title: 'Climate, Seasons and Weather', ar: 'المُنَاخُ وَالفُصُولُ وَالطَّقْسُ', icon: 'FaCloudSun', grammar: 'weather verbs that agree (tasquṭu al-amṭār); comparatives (akthar ḥarāratan min); the future forecast (sa- / sawfa)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: talk about the weather today, the seasons in your country and abroad, compare climates (أَبْرَدُ مِنْ · أَكْثَرُ حَرَارَةً مِنْ) and give a forecast in the future.',
  words: [
    w(1, 'الطَّقْسُ · الجَوُّ', 'the weather', [['how is it?', 'كَيْفَ الجَوُّ؟'], ['the climate', 'المُنَاخُ']]),
    w(2, 'مُشْمِسٌ', 'sunny', [['f.', 'مُشْمِسَةٌ'], ['the sun shines', 'تُشْرِقُ الشَّمْسُ']]),
    w(3, 'مُمْطِرٌ', 'rainy', [['f.', 'مُمْطِرَةٌ'], ['it rains', 'تَسْقُطُ الأَمْطَارُ']]),
    w(4, 'غَائِمٌ', 'cloudy', [['f.', 'غَائِمَةٌ'], ['clouds', 'غُيُومٌ · سُحُبٌ']]),
    w(5, 'حَارٌّ · بَارِدٌ', 'hot · cold', [['f.', 'حَارَّةٌ · بَارِدَةٌ'], ['comp.', 'أَحَرُّ · أَبْرَدُ']]),
    w(6, 'مُعْتَدِلٌ', 'mild', [['f.', 'مُعْتَدِلَةٌ'], ['pl. (non-hum.)', 'مُعْتَدِلَةٌ']]),
    w(7, 'ثَلْجٌ', 'snow', [['pl.', 'ثُلُوجٌ'], ['it snows', 'تَسْقُطُ الثُّلُوجُ']]),
    w(8, 'رِيحٌ', 'wind', [['pl.', 'رِيَاحٌ'], ['strong winds blow', 'تَهُبُّ رِيَاحٌ قَوِيَّةٌ']]),
    w(9, 'دَرَجَةُ الحَرَارَةِ', 'the temperature', [['pl.', 'دَرَجَاتُ الحَرَارَةِ'], ['30 degrees', 'ثَلَاثُونَ دَرَجَةً']]),
    w(10, 'فَصْلٌ', 'a season', [['pl.', 'فُصُولٌ'], ['the four seasons', 'الفُصُولُ الأَرْبَعَةُ']]),
    w(11, 'الصَّيْفُ · الشِّتَاءُ', 'summer · winter', [['spring · autumn', 'الرَّبِيعُ · الخَرِيفُ']]),
    w(12, 'النَّشْرَةُ الجَوِّيَّةُ', 'the weather forecast', [['pl.', 'النَّشَرَاتُ الجَوِّيَّةُ'], ['expected', 'مِنَ المُتَوَقَّعِ أَنْ …']]),
  ],
  words1: { eyebrow: 'Language bank · weather (m. · f. · verb)', title: 'Sunny, rainy, cold', ar: 'كَيْفَ الجَوُّ؟', notes: 'LANGUAGE BANK (2 min) — al-jaww is masculine: al-jawwu ḥārr; al-ayyām (non-human pl.) → mushmisa. Weather verbs are feminine because the subjects are non-human plurals: تَسْقُطُ الأَمْطَارُ · تَهُبُّ الرِّيَاحُ.' },
  words2: { eyebrow: 'Language bank · seasons and forecasts', title: 'Seasons and the forecast', ar: 'الفُصُولُ وَالنَّشْرَةُ الجَوِّيَّةُ', notes: 'LANGUAGE BANK (2 min) — comparatives: أَحَرُّ مِنْ · أَبْرَدُ مِنْ · أَكْثَرُ مَطَرًا مِنْ. Future: سَيَكُونُ الجَوُّ … · سَتَسْقُطُ الأَمْطَارُ · مِنَ المُتَوَقَّعِ أَنْ تَرْتَفِعَ دَرَجَاتُ الحَرَارَةِ.' },
  checkCore: 'described today’s weather and named a season',
  checkDevelop: 'compared two climates (aḥarru min / akthar … min)',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a phone call', title: 'Role play A — A phone call: how is the weather?', ar: 'مُكَالَمَةٌ عَنِ الطَّقْسِ', you: 'a student in the UK', them: 'your cousin in Dubai',
      tasks: [
        { core: true, ex: 'كَيْفَ الجَوُّ عِنْدَكُمُ اليَوْمَ؟', task: 'Describe today’s weather.', help: 'الجَوُّ اليَوْمَ … وَ…', model: 'الجَوُّ اليَوْمَ بَارِدٌ وَغَائِمٌ.', modelEn: 'The weather today is cold and cloudy.' },
        { core: true, ex: 'هَلْ تَسْقُطُ الأَمْطَارُ؟', task: 'Say if it is raining.', help: 'نَعَمْ، تَسْقُطُ … / لَا، …', model: 'نَعَمْ، تَسْقُطُ الأَمْطَارُ مُنْذُ الصَّبَاحِ.', modelEn: 'Yes, it has been raining since the morning.' },
        { core: true, ex: 'كَمْ دَرَجَةُ الحَرَارَةِ؟', task: 'Give the temperature.', help: 'دَرَجَةُ الحَرَارَةِ … دَرَجَاتٍ', model: 'دَرَجَةُ الحَرَارَةِ خَمْسُ دَرَجَاتٍ فَقَطْ.', modelEn: 'The temperature is only five degrees.' },
        { core: true, ex: 'عِنْدَنَا الجَوُّ حَارٌّ جِدًّا!', task: 'Ask how hot it is.', help: 'كَمْ …؟', model: 'كَمْ دَرَجَةُ الحَرَارَةِ عِنْدَكُمْ؟', modelEn: 'What’s the temperature where you are?' },
        { core: true, unexpected: true, ex: 'مَا فَصْلُكَ المُفَضَّلُ؟', task: 'Answer the unexpected question.', help: 'فَصْلِي المُفَضَّلُ … لِأَنَّ …', model: 'فَصْلِيَ المُفَضَّلُ الرَّبِيعُ، لِأَنَّ الجَوَّ مُعْتَدِلٌ.', modelEn: 'My favourite season is spring, because the weather is mild.' },
      ],
      girl: 'عِنْدَكِ · فَصْلُكِ',
      notes: 'Core: al-jaww (m.) bārid wa-ghāʾim; tasquṭu al-amṭār (non-human pl. → f. verb); 3–10 take a plural (khamsu darajātin).',
    },
    {
      id: 'B', level: 'Core+', setting: 'packing for a trip', title: 'Role play B — Packing for a holiday', ar: 'حَقِيبَةُ السَّفَرِ', you: 'a traveller', them: 'a parent helping you pack',
      tasks: [
        { core: true, ex: 'إِلَى أَيْنَ تُسَافِرُ؟ وَكَيْفَ الجَوُّ هُنَاكَ؟', task: 'Say where and what the weather is like.', help: 'أُسَافِرُ إِلَى … الجَوُّ هُنَاكَ …', model: 'أُسَافِرُ إِلَى تُونِسَ، وَالجَوُّ هُنَاكَ حَارٌّ وَمُشْمِسٌ.', modelEn: 'I’m travelling to Tunisia, and the weather there is hot and sunny.' },
        { core: true, ex: 'مَاذَا سَتَأْخُذُ مِنْ مَلَابِسَ؟', task: 'Say two items you will take.', help: 'سَآخُذُ … وَ…', model: 'سَآخُذُ قُمْصَانًا خَفِيفَةً وَنَظَّارَةً شَمْسِيَّةً.', modelEn: 'I’ll take light shirts and sunglasses.' },
        { ex: 'لٰكِنْ قَدْ تَتَغَيَّرُ الأَحْوَالُ الجَوِّيَّةُ.', task: 'ASK about the forecast.', help: 'مَاذَا تَقُولُ …؟', model: 'مَاذَا تَقُولُ النَّشْرَةُ الجَوِّيَّةُ عَنِ الأُسْبُوعِ القَادِمِ؟', modelEn: 'What does the forecast say about next week?' },
        { ex: 'سَتَهُبُّ رِيَاحٌ قَوِيَّةٌ فِي اللَّيْلِ.', task: 'Say what else you’ll pack, and why.', help: 'إِذَنْ سَآخُذُ … لِأَنَّ …', model: 'إِذَنْ سَآخُذُ سُتْرَةً، لِأَنَّ اللَّيَالِيَ سَتَكُونُ أَبْرَدَ مِنَ الأَيَّامِ.', modelEn: 'Then I’ll take a jacket, because the nights will be colder than the days.' },
        { unexpected: true, ex: 'هَلْ تُحِبُّ الجَوَّ الحَارَّ أَكْثَرَ مِنَ الجَوِّ البَارِدِ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ / لَا، أُحِبُّ … أَكْثَرَ، لِأَنَّ …', model: 'نَعَمْ، أُحِبُّ الجَوَّ الحَارَّ أَكْثَرَ، لِأَنِّي أَسْتَطِيعُ أَنْ أَسْبَحَ فِي البَحْرِ.', modelEn: 'Yes, I like hot weather more, because I can swim in the sea.' },
      ],
      girl: 'تُسَافِرِينَ · سَتَأْخُذِينَ · تُحِبِّينَ',
      notes: 'Core+: the future with sa-; non-human plurals (qumṣānan khafīfa, al-layālī … abrad); the CANDIDATE asks about the forecast (task 3).',
    },
    {
      id: 'C', level: 'Develop', setting: 'a holiday that went wrong', title: 'Role play C — When the weather spoiled the trip', ar: 'عِنْدَمَا أَفْسَدَ الطَّقْسُ الرِّحْلَةَ', you: 'a student', them: 'your Arabic teacher',
      tasks: [
        { ex: 'كَيْفَ كَانَتْ رِحْلَتُكَ إِلَى اسْكُتْلَنْدَا؟', task: 'Say how it was (past).', help: 'كَانَتْ … لِأَنَّ …', model: 'كَانَتْ صَعْبَةً قَلِيلًا، لِأَنَّ الطَّقْسَ تَغَيَّرَ فَجْأَةً.', modelEn: 'It was a bit difficult, because the weather suddenly changed.' },
        { ex: 'مَاذَا حَدَثَ بِالضَّبْطِ؟', task: 'Describe the weather that day.', help: 'فِي الصَّبَاحِ … ثُمَّ …', model: 'فِي الصَّبَاحِ كَانَتِ الشَّمْسُ مُشْرِقَةً، ثُمَّ هَبَّتْ رِيَاحٌ قَوِيَّةٌ وَسَقَطَتِ الثُّلُوجُ.', modelEn: 'In the morning the sun was shining, then strong winds blew and snow fell.' },
        { ex: 'وَمَاذَا فَعَلْتُمْ؟', task: 'Say what you did.', help: 'رَجَعْنَا … وَ…', model: 'رَجَعْنَا إِلَى الفُنْدُقِ، وَلَعِبْنَا أَلْعَابًا جَمَاعِيَّةً حَتَّى المَسَاءِ.', modelEn: 'We went back to the hotel and played group games until evening.' },
        { ex: 'هَلْ جَوُّ اسْكُتْلَنْدَا مِثْلُ جَوِّ بِلَادِكَ الأَصْلِيَّةِ؟', task: 'Compare two climates.', help: '… أَبْرَدُ / أَكْثَرُ … مِنْ …', model: 'لَا، جَوُّ اسْكُتْلَنْدَا أَبْرَدُ وَأَكْثَرُ مَطَرًا مِنْ جَوِّ مِصْرَ بِكَثِيرٍ.', modelEn: 'No, Scotland’s climate is much colder and rainier than Egypt’s.' },
        { unexpected: true, ex: 'مَتَى سَتَعُودُ إِلَى هُنَاكَ؟', task: 'Answer the unexpected question (future).', help: 'سَأَعُودُ فِي … لِأَنَّ …', model: 'سَأَعُودُ فِي الصَّيْفِ، لِأَنَّ الجَوَّ سَيَكُونُ أَدْفَأَ.', modelEn: 'I’ll go back in summer, because the weather will be warmer.' },
      ],
      girl: 'رِحْلَتُكِ · بِلَادِكِ · سَتَعُودِينَ',
      notes: 'Develop: kānat + accusative, past weather verbs (habbat, saqaṭat), sequence (thumma, ḥattā), a comparison with bi-kathīr, the future.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a radio interview', title: 'Role play D — Is our climate changing?', ar: 'هَلْ يَتَغَيَّرُ المُنَاخُ؟', you: 'a student who runs the school weather station', them: 'a local radio presenter',
      tasks: [
        { ex: 'لِمَاذَا أَنْشَأْتُمْ مَحَطَّةً لِلطَّقْسِ فِي المَدْرَسَةِ؟', task: 'Explain the purpose.', help: 'أَنْشَأْنَاهَا لِكَيْ …', model: 'أَنْشَأْنَاهَا لِكَيْ نُسَجِّلَ دَرَجَاتِ الحَرَارَةِ وَالأَمْطَارَ كُلَّ يَوْمٍ، وَنُقَارِنَهَا بِالسَّنَوَاتِ المَاضِيَةِ.', modelEn: 'We set it up to record temperatures and rain every day and compare them with past years.' },
        { ex: 'وَمَاذَا لَاحَظْتُمْ؟', task: 'Report a change with evidence.', help: 'لَاحَظْنَا أَنَّ … فَمَثَلًا …', model: 'لَاحَظْنَا أَنَّ الشِّتَاءَ أَصْبَحَ أَدْفَأَ؛ فَمَثَلًا لَمْ تَسْقُطِ الثُّلُوجُ هُنَا مُنْذُ ثَلَاثِ سَنَوَاتٍ.', modelEn: 'We noticed winter has become warmer — for example, it hasn’t snowed here for three years.' },
        { ex: 'كَيْفَ كَانَ الطَّقْسُ أَيَّامَ أَجْدَادِكُمْ؟', task: 'Compare past and present.', help: 'كَانَتِ … تَسْقُطُ … أَمَّا الآنَ …', model: 'يَقُولُ جَدِّي إِنَّ الثُّلُوجَ كَانَتْ تُغَطِّي الشَّوَارِعَ كُلَّ شِتَاءٍ، أَمَّا الآنَ فَالفَيَضَانَاتُ أَكْثَرُ مِنَ الثُّلُوجِ.', modelEn: 'My grandfather says snow covered the streets every winter; now floods are more common than snow.' },
        { ex: 'يَقُولُ بَعْضُ النَّاسِ إِنَّ هٰذَا طَبِيعِيٌّ.', task: 'Concede and disagree politely.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الطَّقْسَ يَتَغَيَّرُ دَائِمًا، غَيْرَ أَنَّ العُلَمَاءَ يُؤَكِّدُونَ أَنَّ التَّغَيُّرَ اليَوْمَ أَسْرَعُ مِنْ أَيِّ وَقْتٍ مَضَى.', modelEn: 'It is true the weather always changes, but scientists stress that today’s change is faster than ever.' },
        { unexpected: true, ex: 'كَيْفَ سَيَكُونُ الطَّقْسُ بَعْدَ خَمْسِينَ سَنَةً؟', task: 'Answer the unexpected question (future + condition).', help: 'مِنَ المُتَوَقَّعِ أَنْ … وَإِذَا لَمْ … فَسَتَزْدَادُ …', model: 'مِنَ المُتَوَقَّعِ أَنْ تَرْتَفِعَ دَرَجَاتُ الحَرَارَةِ، وَإِذَا لَمْ نُخَفِّفِ التَّلَوُّثَ، فَسَتَزْدَادُ العَوَاصِفُ وَالفَيَضَانَاتُ.', modelEn: 'Temperatures are expected to rise, and if we don’t cut pollution, storms and floods will increase.' },
      ],
      girl: 'أَنْشَأْتُنَّ / أَنْشَأْتُمْ · لَاحَظْتُنَّ / لَاحَظْتُمْ',
      notes: 'Stretch: li-kay + subjunctive, lāḥaẓnā anna + evidence, reported speech (yaqūlu … inna), kānat + present vs ammā … fa-, a concession, min al-mutawaqqaʿ an, idhā lam … fa-sa-.',
      modelFoot: 'Stretch: purpose, evidence, past vs present, ṣaḥīḥun anna … ghayra anna and a conditional forecast.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'الطَّقْسُ اليَوْمَ', aim: 'one full sentence per question',
      qs: [
        { q: 'كَيْفَ الجَوُّ اليَوْمَ؟', en: 'What is the weather like today?', start: 'الجَوُّ اليَوْمَ …', model: 'الجَوُّ اليَوْمَ مُشْمِسٌ وَلٰكِنَّهُ بَارِدٌ.', modelEn: 'The weather today is sunny but cold.' },
        { q: 'مَا فَصْلُكَ المُفَضَّلُ؟ وَلِمَاذَا؟', en: 'What is your favourite season, and why?', start: 'فَصْلِي المُفَضَّلُ … لِأَنَّ …', model: 'فَصْلِيَ المُفَضَّلُ الصَّيْفُ، لِأَنَّ الأَيَّامَ طَوِيلَةٌ وَمُشْمِسَةٌ.', modelEn: 'My favourite season is summer, because the days are long and sunny.' },
        { q: 'كَيْفَ الطَّقْسُ فِي الشِّتَاءِ فِي بَرِيطَانْيَا؟', en: 'What is the weather like in winter in Britain?', start: 'فِي الشِّتَاءِ … وَتَسْقُطُ …', model: 'فِي الشِّتَاءِ الجَوُّ بَارِدٌ، وَتَسْقُطُ الأَمْطَارُ كَثِيرًا.', modelEn: 'In winter it is cold, and it rains a lot.' },
        { q: 'مَاذَا تَلْبَسُ عِنْدَمَا يَكُونُ الجَوُّ بَارِدًا؟', en: 'What do you wear when it is cold?', start: 'أَلْبَسُ …', model: 'أَلْبَسُ مِعْطَفًا ثَقِيلًا وَقُبَّعَةً صُوفِيَّةً.', modelEn: 'I wear a heavy coat and a woolly hat.' },
        { q: 'مَاذَا تَفْعَلُ عِنْدَمَا تُمْطِرُ؟', en: 'What do you do when it rains?', start: 'عِنْدَمَا تُمْطِرُ، …', model: 'عِنْدَمَا تُمْطِرُ، أَبْقَى فِي البَيْتِ وَأَقْرَأُ.', modelEn: 'When it rains, I stay at home and read.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a weather adjective that agrees = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'المُنَاخُ هُنَا وَهُنَاكَ', aim: 'two or three sentences, with a comparison and a past detail',
      qs: [
        { q: 'قَارِنْ بَيْنَ الطَّقْسِ فِي بَرِيطَانْيَا وَفِي بَلَدٍ عَرَبِيٍّ.', en: 'Compare the weather in Britain and in an Arab country.', start: 'الطَّقْسُ فِي … أَبْرَدُ / أَحَرُّ مِنْ …', model: 'الطَّقْسُ فِي بَرِيطَانْيَا أَبْرَدُ وَأَكْثَرُ مَطَرًا، أَمَّا فِي السُّعُودِيَّةِ فَالصَّيْفُ حَارٌّ جِدًّا وَالأَمْطَارُ قَلِيلَةٌ.', modelEn: 'Britain is colder and rainier; in Saudi Arabia the summer is very hot and rain is scarce.' },
        { q: 'صِفْ يَوْمًا كَانَ فِيهِ الطَّقْسُ سَيِّئًا جِدًّا.', en: 'Describe a day when the weather was very bad.', start: 'فِي الشِّتَاءِ المَاضِي هَبَّتْ … فَأُغْلِقَتْ …', model: 'فِي الشِّتَاءِ المَاضِي هَبَّتْ عَاصِفَةٌ قَوِيَّةٌ، فَأُغْلِقَتِ المَدْرَسَةُ، وَبَقِينَا فِي البَيْتِ يَوْمَيْنِ.', modelEn: 'Last winter a strong storm blew, so school was closed and we stayed home for two days.' },
        { q: 'هَلْ يُؤَثِّرُ الطَّقْسُ فِي مِزَاجِكَ؟', en: 'Does the weather affect your mood?', start: 'نَعَمْ، عِنْدَمَا … أَشْعُرُ بِالنَّشَاطِ …', model: 'نَعَمْ، عِنْدَمَا تُشْرِقُ الشَّمْسُ أَشْعُرُ بِالنَّشَاطِ، أَمَّا الأَيَّامُ الرَّمَادِيَّةُ فَتَجْعَلُنِي كَسُولًا.', modelEn: 'Yes — sunshine makes me energetic, but grey days make me lazy.' },
        { q: 'مَا الأَنْشِطَةُ المُنَاسِبَةُ لِكُلِّ فَصْلٍ؟', en: 'Which activities suit each season?', start: 'فِي الصَّيْفِ … وَفِي الشِّتَاءِ …', model: 'فِي الصَّيْفِ نَسْبَحُ وَنُخَيِّمُ، وَفِي الشِّتَاءِ نَتَزَلَّجُ أَوْ نَبْقَى قُرْبَ المِدْفَأَةِ.', modelEn: 'In summer we swim and camp; in winter we ski or stay by the heater.' },
        { q: 'كَيْفَ سَيَكُونُ الطَّقْسُ فِي عُطْلَةِ نِهَايَةِ الأُسْبُوعِ؟', en: 'What will the weather be like at the weekend?', start: 'حَسَبَ النَّشْرَةِ الجَوِّيَّةِ، سَيَكُونُ …', model: 'حَسَبَ النَّشْرَةِ الجَوِّيَّةِ، سَيَكُونُ الجَوُّ مُعْتَدِلًا، وَسَتَسْقُطُ أَمْطَارٌ خَفِيفَةٌ يَوْمَ الأَحَدِ.', modelEn: 'According to the forecast, it will be mild, with light rain on Sunday.' },
      ],
      foot: 'Develop: two or three sentences — a comparison, a past event and a forecast in the future.',
      modelFoot: 'Comparison + past + future = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'تَغَيُّرُ المُنَاخِ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلْ تَعْتَقِدُ أَنَّ المُنَاخَ يَتَغَيَّرُ فِعْلًا؟', en: 'Do you think the climate really is changing?', start: 'أَعْتَقِدُ أَنَّ … بِدَلِيلِ أَنَّ …', model: 'أَعْتَقِدُ ذٰلِكَ، بِدَلِيلِ أَنَّ الصَّيْفَ المَاضِيَ كَانَ أَحَرَّ صَيْفٍ فِي تَارِيخِ بَرِيطَانْيَا.', modelEn: 'I think so — last summer was the hottest summer in British history.' },
        { q: 'كَيْفَ يُؤَثِّرُ المُنَاخُ فِي حَيَاةِ النَّاسِ فِي البِلَادِ الحَارَّةِ؟', en: 'How does climate affect life in hot countries?', start: 'بِسَبَبِ الحَرَارَةِ … مِمَّا …', model: 'بِسَبَبِ الحَرَارَةِ الشَّدِيدَةِ، يَعْمَلُ النَّاسُ فِي الصَّبَاحِ البَاكِرِ، مِمَّا يَجْعَلُ الحَيَاةَ تَنْشَطُ فِي اللَّيْلِ.', modelEn: 'Because of the intense heat, people work early in the morning, which makes life lively at night.' },
        { q: 'أَيُّهُمَا أَصْعَبُ: الحَرُّ الشَّدِيدُ أَمِ البَرْدُ الشَّدِيدُ؟', en: 'Which is harder: extreme heat or extreme cold?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ البَرْدَ مُزْعِجٌ، غَيْرَ أَنَّ الحَرَّ الشَّدِيدَ أَخْطَرُ؛ فَنَسْتَطِيعُ أَنْ نَلْبَسَ مَلَابِسَ أَكْثَرَ، لٰكِنْ لَا نَسْتَطِيعُ الهُرُوبَ مِنَ الحَرِّ بِسُهُولَةٍ.', modelEn: 'Cold is annoying, but extreme heat is more dangerous: we can add clothes, but can’t escape heat easily.' },
        { q: 'كَيْفَ كَانَ الطَّقْسُ فِي طُفُولَةِ وَالِدَيْكَ؟', en: 'What was the weather like in your parents’ childhood?', start: 'تَقُولُ أُمِّي إِنَّ … كَانَ …', model: 'تَقُولُ أُمِّي إِنَّ الشِّتَاءَ كَانَ أَطْوَلَ، وَإِنَّهَا كَانَتْ تَصْنَعُ رَجُلَ الثَّلْجِ كُلَّ سَنَةٍ.', modelEn: 'My mum says winters were longer, and she used to build a snowman every year.' },
        { q: 'لَوْ كُنْتَ تَسْتَطِيعُ أَنْ تَخْتَارَ مُنَاخَ بِلَادِكَ، مَاذَا تَخْتَارُ؟', en: 'If you could choose your country’s climate, what would you choose?', start: 'لَوْ كُنْتُ أَسْتَطِيعُ، لَاخْتَرْتُ …', model: 'لَوْ كُنْتُ أَسْتَطِيعُ، لَاخْتَرْتُ مُنَاخًا مُعْتَدِلًا كَمُنَاخِ المَغْرِبِ: شَمْسٌ دَافِئَةٌ، وَأَمْطَارٌ قَلِيلَةٌ فِي الشِّتَاءِ.', modelEn: 'If I could, I’d choose a mild climate like Morocco’s: warm sun and a little winter rain.' },
      ],
      foot: 'Stretch: evidence (bi-dalīli anna), bi-sababi … mimmā, a concession, reported speech and law … la-.',
      modelFoot: 'Stretch: evidence, cause and effect, ṣaḥīḥun anna … ghayra anna, reported speech, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I described the weather with adjectives that agree.' },
    { route: 'core', text: 'I named the seasons and my favourite one.' },
    { route: 'develop', text: 'I compared two climates (aḥarru / abradu / akthar … min).' },
    { route: 'develop', text: 'I used a past weather verb and a future forecast.' },
    { route: 'stretch', text: 'I used a concession, cause and effect or law … la-.' },
  ],
};
speak.RP[3].tasks[4].help = 'مِنَ المُتَوَقَّعِ أَنْ … وَإِذَا لَمْ … فَسَتَزْدَادُ …';
speak.CONV[1].qs[1].start = 'فِي الشِّتَاءِ المَاضِي هَبَّتْ … فَأُغْلِقَتْ …';
speak.CONV[1].qs[2].start = 'نَعَمْ، عِنْدَمَا … أَشْعُرُ بِالنَّشَاطِ …';

const Q2_CORE = `مَرْحَبًا يَا عُمَرُ،
كَيْفَ حَالُكَ؟ أَنَا الآنَ فِي إِسْطَنْبُولَ مَعَ أُسْرَتِي. الجَوُّ هُنَا مُعْتَدِلٌ وَمُشْمِسٌ، وَدَرَجَةُ الحَرَارَةِ عِشْرُونَ دَرَجَةً. أَمْسِ تَغَيَّرَ الطَّقْسُ فَجْأَةً، وَسَقَطَتْ أَمْطَارٌ غَزِيرَةٌ، فَبَقِينَا فِي المَتْحَفِ سَاعَتَيْنِ. أُحِبُّ هٰذَا الجَوَّ، لِأَنَّهُ أَدْفَأُ مِنْ جَوِّ لَنْدَنَ وَلَيْسَ حَارًّا جِدًّا. حَسَبَ النَّشْرَةِ الجَوِّيَّةِ، سَتُشْرِقُ الشَّمْسُ غَدًا، فَسَنَرْكَبُ قَارِبًا فِي البَحْرِ، وَسَنَأْكُلُ السَّمَكَ.
إِلَى اللِّقَاءِ،
يُوسُفُ`;
const Q2_FULL = `عَزِيزِي عُمَرُ،
تَحِيَّةً دَافِئَةً مِنْ إِسْطَنْبُولَ! وَصَلْنَا قَبْلَ ثَلَاثَةِ أَيَّامٍ، وَالجَوُّ هُنَا رَبِيعِيٌّ رَائِعٌ: سَمَاءٌ زَرْقَاءُ صَافِيَةٌ، وَنَسِيمٌ لَطِيفٌ يَأْتِي مِنَ البَحْرِ، وَدَرَجَاتُ حَرَارَةٍ لَا تَتَجَاوَزُ اثْنَتَيْنِ وَعِشْرِينَ دَرَجَةً. أَمَّا أَمْسِ فَكَانَ مُخْتَلِفًا تَمَامًا؛ فَبَيْنَمَا كُنَّا نَتَجَوَّلُ فِي السُّوقِ، تَلَبَّدَتِ السَّمَاءُ بِالغُيُومِ، وَسَقَطَتْ أَمْطَارٌ غَزِيرَةٌ، فَاحْتَمَيْنَا فِي مَقْهًى قَدِيمٍ، وَشَرِبْنَا الشَّايَ التُّرْكِيَّ السَّاخِنَ حَتَّى تَوَقَّفَ المَطَرُ. فِي رَأْيِي، هٰذَا الجَوُّ أَفْضَلُ مِنْ صَيْفِ الخَلِيجِ الحَارِّ وَمِنْ شِتَاءِ لَنْدَنَ الرَّمَادِيِّ. وَمِنَ المُتَوَقَّعِ أَنْ يَكُونَ الغَدُ مُشْمِسًا، فَسَنَقُومُ بِجَوْلَةٍ فِي البُوسْفُورِ.
مَعَ أَطْيَبِ التَّحِيَّاتِ،
يُوسُفُ`;
const Q3A_CORE = `فِي بَرِيطَانْيَا أَرْبَعَةُ فُصُولٍ، لٰكِنَّ الطَّقْسَ يَتَغَيَّرُ كَثِيرًا. فِي يَوْمٍ وَاحِدٍ، قَدْ تُشْرِقُ الشَّمْسُ فِي الصَّبَاحِ، ثُمَّ تَسْقُطُ الأَمْطَارُ فِي المَسَاءِ. لِذٰلِكَ آخُذُ مِظَلَّةً مَعِي دَائِمًا.
فَصْلِيَ المُفَضَّلُ هُوَ الصَّيْفُ. فِي الصَّيْفِ الجَوُّ دَافِئٌ، وَالأَيَّامُ طَوِيلَةٌ وَمُشْمِسَةٌ. أَلْعَبُ كُرَةَ القَدَمِ فِي الحَدِيقَةِ مَعَ أَصْدِقَائِي، وَنَأْكُلُ المُثَلَّجَاتِ. لَا أُحِبُّ الشِّتَاءَ، لِأَنَّهُ بَارِدٌ وَمُظْلِمٌ، وَتَغْرُبُ الشَّمْسُ فِيهِ قَبْلَ السَّاعَةِ الخَامِسَةِ.
فِي العُطْلَةِ المَاضِيَةِ سَافَرْتُ إِلَى مِصْرَ لِزِيَارَةِ جَدَّتِي. كَانَ الجَوُّ حَارًّا جِدًّا، وَكَانَتْ دَرَجَةُ الحَرَارَةِ أَرْبَعِينَ دَرَجَةً. كُنَّا نَخْرُجُ فِي المَسَاءِ فَقَطْ، لِأَنَّ الشَّمْسَ قَوِيَّةٌ فِي النَّهَارِ.
فِي رَأْيِي، جَوُّ مِصْرَ أَحَرُّ مِنْ جَوِّ بَرِيطَانْيَا، لٰكِنَّهُ أَجْمَلُ فِي الشِّتَاءِ. فِي المُسْتَقْبَلِ سَأَزُورُ كَنَدَا، لِأَنِّي أُرِيدُ أَنْ أَرَى الثُّلُوجَ الكَثِيرَةَ، وَسَأَتَعَلَّمُ التَّزَلُّجَ هُنَاكَ.`;
const Q3A_FULL = `يَقُولُ البَرِيطَانِيُّونَ مَازِحِينَ إِنَّ بِلَادَهُمْ تَعِيشُ الفُصُولَ الأَرْبَعَةَ فِي يَوْمٍ وَاحِدٍ، وَهُمْ عَلَى حَقٍّ! فَالشَّمْسُ تُشْرِقُ فِي الصَّبَاحِ، ثُمَّ تَهُبُّ رِيَاحٌ بَارِدَةٌ، وَقَبْلَ المَسَاءِ تَسْقُطُ الأَمْطَارُ، وَلِهٰذَا لَا يَخْرُجُ أَحَدٌ دُونَ مِظَلَّةٍ.
أَمَّا فَصْلِيَ المُفَضَّلُ فَهُوَ الخَرِيفُ؛ إِذْ تَتَحَوَّلُ أَوْرَاقُ الأَشْجَارِ إِلَى أَلْوَانٍ ذَهَبِيَّةٍ وَحَمْرَاءَ، وَيُصْبِحُ الجَوُّ مُنْعِشًا، لَا حَارًّا كَالصَّيْفِ وَلَا قَاسِيًا كَالشِّتَاءِ. وَأَجْمَلُ مَا فِيهِ المَشْيُ فِي الحَدِيقَةِ وَصَوْتُ الأَوْرَاقِ اليَابِسَةِ تَحْتَ قَدَمَيَّ.
وَقَدْ عِشْتُ تَجْرِبَةً مُخْتَلِفَةً تَمَامًا فِي الصَّيْفِ المَاضِي، عِنْدَمَا زُرْتُ أَقَارِبِي فِي الرِّيَاضِ؛ فَقَدْ وَصَلَتْ دَرَجَةُ الحَرَارَةِ إِلَى سِتٍّ وَأَرْبَعِينَ دَرَجَةً، وَكَانَتِ الشَّوَارِعُ شِبْهَ فَارِغَةٍ فِي النَّهَارِ، بَيْنَمَا تَمْتَلِئُ المَقَاهِي وَالحَدَائِقُ بِالعَائِلَاتِ بَعْدَ مُنْتَصَفِ اللَّيْلِ.
صَحِيحٌ أَنَّ المُنَاخَ يُؤَثِّرُ فِي طَرِيقَةِ حَيَاتِنَا، غَيْرَ أَنَّ الإِنْسَانَ قَادِرٌ عَلَى التَّكَيُّفِ مَعَ أَيِّ طَقْسٍ. وَلَوْ خُيِّرْتُ بَيْنَ حَرِّ الرِّيَاضِ وَمَطَرِ لَنْدَنَ، لَاخْتَرْتُ المَطَرَ، لِأَنِّي أَعْشَقُ رَائِحَةَ الأَرْضِ بَعْدَهُ.`;
const Q3B_FULL = `لَمْ يَعُدْ تَغَيُّرُ المُنَاخِ مَوْضُوعًا نَقْرَأُ عَنْهُ فِي الكُتُبِ فَقَطْ، بَلْ أَصْبَحَ وَاقِعًا نَعِيشُهُ؛ فَالصَّيْفُ يَزْدَادُ حَرَارَةً سَنَةً بَعْدَ سَنَةٍ، وَالعَوَاصِفُ أَصْبَحَتْ أَقْوَى وَأَكْثَرَ تَكْرَارًا مِنْ قَبْلُ.
تَقُولُ جَدَّتِي إِنَّ الثُّلُوجَ كَانَتْ تُغَطِّي قَرْيَتَهَا فِي لُبْنَانَ ثَلَاثَةَ أَشْهُرٍ كُلَّ شِتَاءٍ، أَمَّا الآنَ فَلَا تَبْقَى أَكْثَرَ مِنْ أُسْبُوعٍ أَوْ أُسْبُوعَيْنِ، مِمَّا يُقَلِّلُ مِيَاهَ الأَنْهَارِ فِي الصَّيْفِ وَيُضِرُّ بِالمَزَارِعِ.
وَفِي الشِّتَاءِ المَاضِي رَأَيْتُ أَثَرَ هٰذَا التَّغَيُّرِ بِعَيْنَيَّ؛ فَقَدْ فَاضَ النَّهْرُ القَرِيبُ مِنْ مَدِينَتِنَا بَعْدَ أَمْطَارٍ لَمْ تَتَوَقَّفْ أُسْبُوعًا كَامِلًا، فَأُغْلِقَتِ الطُّرُقُ، وَاضْطُرَّتْ عَائِلَاتٌ كَثِيرَةٌ إِلَى تَرْكِ بُيُوتِهَا، وَتَطَوَّعَ طُلَّابُ مَدْرَسَتِنَا لِجَمْعِ البَطَّانِيَّاتِ وَالطَّعَامِ لِلْمُتَضَرِّرِينَ.
صَحِيحٌ أَنَّ الطَّقْسَ تَغَيَّرَ دَائِمًا عَبْرَ التَّارِيخِ، غَيْرَ أَنَّ العُلَمَاءَ يُؤَكِّدُونَ أَنَّ سُرْعَةَ التَّغَيُّرِ اليَوْمَ سَبَبُهَا الإِنْسَانُ. وَإِذَا اسْتَمَرَّتْ دَرَجَاتُ الحَرَارَةِ فِي الارْتِفَاعِ، فَسَتُعَانِي الأَجْيَالُ القَادِمَةُ أَكْثَرَ مِنَّا بِكَثِيرٍ؛ وَلِذٰلِكَ يَجِبُ أَنْ نَتَحَرَّكَ الآنَ، أَفْرَادًا وَحُكُومَاتٍ، لَا غَدًا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a school-trip weather form, write a holiday email comparing the weather, and write an extended piece about the seasons in your life or about climate change.',
  lift: [
    { ar: 'سَقَطَتْ أَمْطَارٌ غَزِيرَةٌ', en: 'heavy rain fell' },
    { ar: 'هٰذَا الجَوُّ أَدْفَأُ مِنْ جَوِّ لَنْدَنَ', en: 'this weather is warmer than London’s' },
    { ar: 'مِنَ المُتَوَقَّعِ أَنْ يَكُونَ الغَدُ مُشْمِسًا', en: 'tomorrow is expected to be sunny' },
  ],
  checkTip: 'Check: weather verbs agree (tasquṭu al-amṭār, tahubbu ar-riyāḥ, yakūnu al-jaww); kāna / sa-yakūnu + accusative (kāna al-jawwu ḥārran); comparatives do not change for gender (al-ṣayfu aḥarru · al-madīnatu aḥarru).',
  FORM: {
    title: 'School trip weather and kit form', ar: 'اسْتِمَارَةُ الرِّحْلَةِ: الطَّقْسُ وَالمَلَابِسُ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'يُوسُفُ أَحْمَدُ', modelEn: 'Yusuf Ahmed' },
      { core: true, ar: 'مَكَانُ الرِّحْلَةِ', en: 'Trip destination', model: 'جِبَالُ اسْكُتْلَنْدَا', modelEn: 'the Scottish mountains' },
      { core: true, ar: 'الفَصْلُ', en: 'Season', model: 'الخَرِيفُ', modelEn: 'autumn' },
      { core: true, ar: 'الطَّقْسُ المُتَوَقَّعُ', en: 'Expected weather', model: 'بَارِدٌ وَمُمْطِرٌ', modelEn: 'cold and rainy' },
      { core: true, ar: 'دَرَجَةُ الحَرَارَةِ', en: 'Temperature', model: 'ثَمَانِي دَرَجَاتٍ', modelEn: 'eight degrees' },
      { core: true, ar: 'مَلَابِسُ مُنَاسِبَةٌ (اثْنَتَانِ)', en: 'Suitable clothes (two)', model: 'مِعْطَفٌ وَحِذَاءٌ مُضَادٌّ لِلْمَاءِ', modelEn: 'a coat and waterproof boots' },
      { ar: 'نَشَاطٌ إِذَا كَانَ الجَوُّ مُشْمِسًا', en: 'An activity if it is sunny', model: 'تَسَلُّقُ الجَبَلِ', modelEn: 'climbing the mountain' },
      { ar: 'جُمْلَةٌ: مَاذَا سَتَفْعَلُ إِذَا أَمْطَرَتْ؟', en: 'ONE sentence: what you will do if it rains', model: 'إِذَا أَمْطَرَتْ، فَسَنَزُورُ المَتْحَفَ لِأَنَّهُ أَدْفَأُ مِنَ الجَبَلِ.', modelEn: 'If it rains, we’ll visit the museum because it is warmer than the mountain.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with idhā … fa-sa- and a comparative.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 5: thamānī darajātin (3–10 + plural). Box 8: idhā + past, fa-sa- + present.',
  },
  Q2: {
    short: 'a holiday email about the weather', title: 'Question 2: holiday weather email', ar: 'رِسَالَةٌ عَنِ الطَّقْسِ فِي العُطْلَةِ',
    task: 'You are on holiday abroad. Write an email in Arabic to your friend of about 80–90 words. You must include: • where you are and what the weather is like • something that happened because of the weather yesterday • a comparison with the weather at home • your plans for tomorrow, according to the forecast.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Weather verbs and adjectives that agree.', 'A comparative (adfaʾu / abradu … min).', 'About 80–90 words.'],
    phrases: [['الجَوُّ هُنَا … وَدَرَجَةُ الحَرَارَةِ …', 'the weather here is … and the temperature …'], ['أَمْسِ سَقَطَتْ … فَبَقِينَا …', 'yesterday … fell, so we stayed …'], ['هٰذَا الجَوُّ أَدْفَأُ مِنْ …', 'this weather is warmer than …'], ['حَسَبَ النَّشْرَةِ الجَوِّيَّةِ، سَتُشْرِقُ … وَسَنَزُورُ …', 'according to the forecast, … will …']],
    rubric: [
      ['task', 'أَنْتَ فِي عُطْلَةٍ خَارِجَ بِلَادِكَ. اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ (٨٠–٩٠ كَلِمَةً).', 'You are on holiday abroad: write to your friend (80–90 words).'],
      ['1', 'أَيْنَ أَنْتَ؟ وَكَيْفَ الطَّقْسُ؟', 'Where you are; what the weather is like'],
      ['2', 'مَاذَا حَدَثَ أَمْسِ بِسَبَبِ الطَّقْسِ؟', 'What happened yesterday because of the weather'],
      ['3', 'قَارِنْ بَيْنَ الطَّقْسِ هُنَاكَ وَالطَّقْسِ فِي بَلَدِكَ.', 'Compare it with the weather at home'],
      ['4', 'مَاذَا سَتَفْعَلُ غَدًا حَسَبَ النَّشْرَةِ الجَوِّيَّةِ؟', 'Your plans for tomorrow, according to the forecast'],
    ],
    qwords: 'أَيْنَ (where) · كَيْفَ (what … like) · مَاذَا حَدَثَ (what happened) · قَارِنْ (compare) · حَسَبَ (according to) — bullet 2 is PAST, bullet 4 is FUTURE',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'أَنَا الآنَ فِي ______ . الجَوُّ هُنَا ______ ، وَدَرَجَةُ الحَرَارَةِ ______ .', 'I am now in … The weather here is …, and the temperature …'],
      ['2', 'أَمْسِ سَقَطَتْ ______ ، فَبَقِينَا ______ .', 'Yesterday … fell, so we stayed …'],
      ['3', 'أُحِبُّ هٰذَا الجَوَّ، لِأَنَّهُ أَدْفَأُ مِنْ ______ .', 'I like this weather, because it is warmer than …'],
      ['4', 'حَسَبَ النَّشْرَةِ الجَوِّيَّةِ، سَتُشْرِقُ الشَّمْسُ غَدًا، وَسَنَزُورُ ______ .', 'According to the forecast, the sun will shine tomorrow, and we will visit …'],
      ['end', 'إِلَى اللِّقَاءِ، ______', 'See you, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Omar, how are you? I’m in Istanbul with my family. The weather here is mild and sunny, and it’s twenty degrees. Yesterday the weather suddenly changed and heavy rain fell, so we stayed in the museum for two hours. I like this weather because it is warmer than London’s and not too hot. According to the forecast, the sun will shine tomorrow, so we’ll take a boat on the sea and eat fish. See you, Yusuf.”',
      find: ['الجَوُّ هُنَا مُعْتَدِلٌ', 'سَقَطَتْ أَمْطَارٌ غَزِيرَةٌ', 'أَدْفَأُ مِنْ جَوِّ لَنْدَنَ', 'سَتُشْرِقُ الشَّمْسُ غَدًا'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Omar, warm greetings from Istanbul! We arrived three days ago, and the weather is wonderfully spring-like: a clear blue sky, a gentle breeze from the sea, and temperatures no higher than twenty-two degrees. Yesterday was completely different: while we were wandering in the market, the sky clouded over and heavy rain fell, so we sheltered in an old café and drank hot Turkish tea until the rain stopped. In my opinion, this weather is better than the hot Gulf summer and the grey London winter. Tomorrow is expected to be sunny, so we’ll take a tour of the Bosphorus. Best wishes, Yusuf.”',
      find: ['لَا تَتَجَاوَزُ اثْنَتَيْنِ وَعِشْرِينَ', 'بَيْنَمَا كُنَّا نَتَجَوَّلُ', 'أَفْضَلُ مِنْ صَيْفِ الخَلِيجِ', 'مِنَ المُتَوَقَّعِ أَنْ يَكُونَ'],
    },
  },
  Q3: {
    a: { title: 'الفُصُولُ وَالطَّقْسُ فِي حَيَاتِي', en: 'Seasons and weather in my life', bullets: 'الطَّقْسُ فِي بَلَدِكَ · فَصْلُكَ المُفَضَّلُ وَلِمَاذَا · رِحْلَةٌ إِلَى بَلَدٍ مُنَاخُهُ مُخْتَلِفٌ · رَأْيُكَ وَخِطَطُكَ', bulletsEn: 'The weather in your country · your favourite season and why · a trip to a country with a different climate · your opinion and plans' },
    b: { title: 'تَغَيُّرُ المُنَاخِ: هَلْ نَشْعُرُ بِهِ؟', en: 'Climate change: can we feel it?', bullets: 'مَا الَّذِي تَغَيَّرَ؟ · المَاضِي وَالحَاضِرُ · حَدَثٌ عِشْتَهُ · رَأْيُكَ وَالمُسْتَقْبَلُ', bulletsEn: 'What has changed? · past and present · an event you lived through · your opinion and the future' },
    plan: [
      'The weather where you live — tasquṭu al-amṭār, tushriqu ash-shams; qad + present for “may”.',
      'Your favourite season — adjectives that agree; Stretch: lā … ka- wa-lā … ka-.',
      'Past — a trip to a different climate: kāna al-jawwu ḥārran, kānat darajatu al-ḥarāra …; kunnā + present for habits.',
      'Comparison + future — aḥarru / abradu min, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'قَدْ تُشْرِقُ الشَّمْسُ فِي الصَّبَاحِ، ثُمَّ تَسْقُطُ الأَمْطَارُ.', en: 'present: the sun may shine in the morning, then rain falls.' },
      { ar: 'كَانَ الجَوُّ حَارًّا جِدًّا، وَكُنَّا نَخْرُجُ فِي المَسَاءِ.', en: 'past: it was very hot, and we used to go out in the evening.' },
      { ar: 'سَأَزُورُ كَنَدَا، لِأَنِّي أُرِيدُ أَنْ أَرَى الثُّلُوجَ.', en: 'future: I will visit Canada, because I want to see the snow.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Britain has four seasons, but the weather changes a lot: sun in the morning, rain in the evening, so I always take an umbrella → my favourite season is summer: warm, long sunny days; football in the park and ice cream; I don’t like winter, it’s cold and dark and the sun sets before five o’clock → last holiday I visited my grandmother in Egypt: very hot, forty degrees; we only went out in the evening because the sun is strong by day → Egypt is hotter than Britain but nicer in winter; in future I’ll visit Canada to see lots of snow and learn to ski there.', find: ['قَدْ تُشْرِقُ الشَّمْسُ', 'الأَيَّامُ طَوِيلَةٌ وَمُشْمِسَةٌ', 'كَانَ الجَوُّ حَارًّا', 'أَحَرُّ مِنْ جَوِّ بَرِيطَانْيَا'], notes: 'Core model: weather verbs that agree, non-human plural agreement (al-ayyām … mushmisa), kāna + accusative, kunnā + present, a comparison and a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'The British joke that their country has four seasons in one day — and they’re right: sun in the morning, cold wind, then rain before evening, so nobody goes out without an umbrella → as for my favourite season, it is autumn: leaves turn gold and red, the air is fresh, neither hot like summer nor harsh like winter; best of all is walking in the park with dry leaves crunching underfoot → last summer in Riyadh it reached forty-six degrees; the streets were almost empty by day, while cafés and parks filled with families after midnight → it is true climate shapes our way of life, but people can adapt to any weather; “if I had to choose between Riyadh’s heat and London’s rain, I’d choose the rain, because I love the smell of the earth after it”.', find: ['يَقُولُ … إِنَّ', 'لَا حَارًّا كَالصَّيْفِ وَلَا قَاسِيًا', 'بَيْنَمَا تَمْتَلِئُ', 'لَوْ خُيِّرْتُ … لَاخْتَرْتُ'], notes: 'Full-mark model: reported speech with inna, a sequence of weather verbs, ammā … fa-, idh for explanation, lā … wa-lā …, bayna-mā contrast, a concession and law + passive (khuyyirtu) … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'can we feel it?', text: Q3B_FULL, en: 'Climate change is no longer something we only read about; summers get hotter year after year and storms are stronger and more frequent → my grandmother says snow covered her village in Lebanon for three months each winter; now it lasts no more than a week or two, which reduces river water in summer and harms farms → last winter I saw it with my own eyes: the river near our town flooded after a week of non-stop rain, roads closed and many families had to leave their homes, and students at our school volunteered to collect blankets and food for those affected → it is true weather has always changed, but scientists stress today’s speed is caused by humans; “if temperatures keep rising, future generations will suffer far more than us — so we must act now, as individuals and governments, not tomorrow”.', find: ['لَمْ يَعُدْ … بَلْ أَصْبَحَ', 'أَمَّا الآنَ فَلَا تَبْقَى', 'مِمَّا يُقَلِّلُ', 'إِذَا اسْتَمَرَّتْ … فَسَتُعَانِي'], notes: 'Full-mark model for the Stretch title: lam yaʿud … bal, reported speech, kānat + present vs ammā … fa-, mimmā, a passive (ughliqat, uḍṭurrat), a concession, idhā … fa-sa- and a lā … closing.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; numbers with the right plural (thamānī darajātin).' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: a comparative and a forecast in the future.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames, with kāna + accusative.' },
    { route: 'stretch', text: 'Q3: reported speech, a concession and law … la- or idhā … fa-sa-.' },
  ],
};

module.exports = { speak, write };
