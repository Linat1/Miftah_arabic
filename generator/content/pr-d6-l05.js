'use strict';
/* Practice Room · D6-L05 · Comparing countries — global connections and the Arab diaspora. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd6-l05',
  arShort: 'بَيْنَ بَلَدَيْنِ',
  grammar: 'belonging verbs with their prepositions: antamī ilā · atakayyafu maʿa · aḥtafiẓu bi- · uwāzinu bayna … wa- …; comparing two cities with ONE comparative at a time (akbaru min · akthar hudūʾan min); feelings (ḥanīn · iʿtizāz); identity words (huwiyya muzdawaja · al-jīl al-thānī · jāliya)',
  focus: 'Students run their own speaking and writing practice about belonging to two places: say the belonging words, act a dialogue between two second-generation teens, answer question cards, do a role-play card on a radio show about dual identity, give a one-minute comparison of two cities, then build, fix and write a reflective paragraph about their two homes.',
  words1: 'Belonging and identity', words2: 'Comparing places',
  dialogue: {
    title: 'Two homes', ar: 'بَيْتَانِ',
    lines: [
      ['A', 'إِلَى أَيِّ بَلَدٍ تَنْتَمِي؟', 'Which country do you belong to?'],
      ['B', 'أَنْتَمِي إِلَى بِرِيطَانْيَا وَالسُّودَانِ مَعًا؛ عِنْدِي هُوِيَّةٌ مُزْدَوَجَةٌ.', 'I belong to Britain and Sudan together — I have a dual identity.'],
      ['A', 'هَلْ كَانَ صَعْبًا أَنْ تَتَكَيَّفَ مَعَ الحَيَاةِ هُنَا؟', 'Was it hard to adapt to life here?'],
      ['B', 'تَكَيَّفَ وَالِدَايَ بِصُعُوبَةٍ، أَمَّا أَنَا فَوُلِدْتُ هُنَا؛ أَنَا مِنَ الجِيلِ الثَّانِي.', 'My parents adapted with difficulty; as for me, I was born here — I’m second generation.'],
      ['A', 'وَبِمَاذَا تَحْتَفِظُ مِنْ ثَقَافَتِكَ؟', 'And what do you keep from your culture?'],
      ['B', 'أَحْتَفِظُ بِاللُّغَةِ وَالطَّعَامِ، وَأُوَازِنُ بَيْنَ الثَّقَافَتَيْنِ. الخَرْطُومُ أَحَرُّ مِنْ لَنْدَنَ، وَلٰكِنَّهَا أَكْثَرُ دِفْئًا فِي القُلُوبِ!', 'I keep the language and the food, and I balance the two cultures. Khartoum is hotter than London — but warmer in people’s hearts!'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: answer about YOUR two places (or one place and a place you love).',
  },
  questions: [
    { q: 'إِلَى أَيِّ مَكَانٍ تَنْتَمِي؟', en: 'Where do you belong?', start: 'أَنْتَمِي إِلَى …', more: '… لِأَنَّ …' },
    { q: 'بِمَاذَا تَحْتَفِظُ مِنْ ثَقَافَةِ عَائِلَتِكَ؟', en: 'What do you keep from your family’s culture?', start: 'أَحْتَفِظُ بِ…', more: '… مِثْلَ …' },
    { q: 'كَيْفَ تُوَازِنُ بَيْنَ ثَقَافَتَيْنِ؟', en: 'How do you balance two cultures?', start: 'أُوَازِنُ بَيْنَ … وَ … عِنْدَمَا …', more: '…' },
    { q: 'قَارِنْ بَيْنَ مَدِينَتَيْنِ تَعْرِفُهُمَا.', en: 'Compare two cities you know.', start: '… أَكْبَرُ مِنْ … ، وَ… أَكْثَرُ هُدُوءًا مِنْ …', more: '…' },
    { q: 'هَلْ تَشْعُرُ بِالحَنِينِ؟ إِلَى مَاذَا؟', en: 'Do you feel nostalgia? For what?', start: 'أَشْعُرُ بِالحَنِينِ إِلَى …', more: '… خُصُوصًا فِي …' },
  ],
  card: {
    title: 'Role-play card — a radio show: “Growing up between two cultures”', ar: 'بَيْنَ ثَقَافَتَيْنِ', you: 'a young guest', them: 'the radio presenter',
    tasks: [
      { ex: 'عَرِّفْنَا بِنَفْسِكَ.', task: 'Who + belonging.', plan: 'أَنَا ← أَنَا … ، وَأَنْتَمِي إِلَى … وَ…', model: 'أَنَا يُوسُفُ، وُلِدْتُ فِي مَانْشِسْتَرَ، وَأَنْتَمِي إِلَى اليَمَنِ وَبِرِيطَانْيَا.', modelEn: 'I’m Yusuf, I was born in Manchester, and I belong to Yemen and Britain.' },
      { ex: 'هَلْ تَتَكَلَّمُ العَرَبِيَّةَ فِي البَيْتِ؟', task: 'What you keep.', plan: 'أَحْتَفِظُ ← نَعَمْ، أَحْتَفِظُ بِ…', model: 'نَعَمْ، أَحْتَفِظُ بِالعَرَبِيَّةِ لِأَنَّ جَدَّتِي لَا تَتَكَلَّمُ الإِنْجِلِيزِيَّةَ.', modelEn: 'Yes, I keep Arabic because my grandmother doesn’t speak English.' },
      { ex: 'مَا الصَّعْبُ فِي ذٰلِكَ؟', task: 'A challenge + balance.', plan: '', model: 'أَحْيَانًا أَشْعُرُ أَنَّنِي غَرِيبٌ فِي البَلَدَيْنِ، وَلٰكِنَّنِي أَتَعَلَّمُ أَنْ أُوَازِنَ بَيْنَهُمَا.', modelEn: 'Sometimes I feel like a stranger in both countries, but I’m learning to balance them.' },
      { unexpected: true, ex: 'أَيُّ مَدِينَةٍ تُفَضِّلُ: صَنْعَاءَ أَمْ مَانْشِسْتَرَ؟', task: 'One comparative at a time.', plan: '', model: 'صَنْعَاءُ أَقْدَمُ، وَمَانْشِسْتَرُ أَكْثَرُ تَنَوُّعًا؛ أُحِبُّهُمَا بِطَرِيقَتَيْنِ مُخْتَلِفَتَيْنِ.', modelEn: 'Sanaa is older, and Manchester more diverse — I love them in two different ways.' },
    ],
    girl: 'presenter to a girl: عَرِّفِينَا بِنَفْسِكِ · تَتَكَلَّمِينَ · تُفَضِّلِينَ · غَرِيبَةٌ',
    notes: 'antamī ilā · aḥtafiẓu bi- · atakayyafu maʿa · uwāzinu bayna … wa- … — say verb + preposition as one unit.',
  },
  talk: {
    title: 'One minute: two cities, one me', ar: 'مَدِينَتَانِ',
    text: 'Compare two cities or countries that matter to you for one minute, using ONE comparative per sentence, then say how you feel about each.',
    routes: {
      core: 'Three comparatives (أَكْبَرُ · أَقْدَمُ · أَبْرَدُ …).',
      develop: 'Add أَكْثَرُ + noun (أَكْثَرُ هُدُوءًا) and أَنْتَمِي إِلَى …',
      stretch: 'Add أَحْتَفِظُ بِ… , أُوَازِنُ بَيْنَ … and a feeling (حَنِينٌ · اعْتِزَازٌ).',
    },
  },
  builder: [
    { en: 'I belong to two cultures.', cols: [['أَنْتَمِي', 'أَنْتَمِيَ'], ['إِلَى', 'فِي'], ['ثَقَافَتَيْنِ.', 'ثَقَافَتَانِ.']], key: [0, 0, 0], why: 'أَنْتَمِي إِلَى + genitive dual (-ayni).' },
    { en: 'Cairo is more crowded than Leeds.', cols: [['القَاهِرَةُ', 'القَاهِرَةَ'], ['أَكْثَرُ ازْدِحَامًا', 'أَكْثَرُ مُزْدَحِمَةٌ'], ['مِنْ لِيدْزَ.', 'مِنْ لِيدْزُ.']], key: [0, 0, 0], why: 'أَكْثَرُ + maṣdar in -an (one comparative).' },
    { en: 'I keep my language and balance the two cultures.', cols: [['أَحْتَفِظُ بِلُغَتِي', 'أَحْتَفِظُ لُغَتِي'], ['وَأُوَازِنُ', 'وَأُوَازِنَ'], ['بَيْنَ الثَّقَافَتَيْنِ.', 'بَيْنَ الثَّقَافَتَانِ.']], key: [0, 0, 0], why: 'أَحْتَفِظُ بِ…; بَيْنَ + genitive dual.' },
  ],
  errors: [
    { wrong: 'أَنْتَمِي بِرِيطَانْيَا.', hint: 'Missing preposition.', right: 'أَنْتَمِي إِلَى بِرِيطَانْيَا.', why: 'أَنْتَمِي إِلَى …' },
    { wrong: 'لَنْدَنُ أَكْبَرُ وَأَكْثَرُ أَغْلَى مِنْ دُبَيٍّ.', hint: 'One comparative at a time.', right: 'لَنْدَنُ أَكْبَرُ مِنْ دُبَيٍّ، وَهِيَ أَغْلَى أَيْضًا.', why: 'Never أَكْثَرُ + أَفْعَلُ together.' },
    { wrong: 'أَتَكَيَّفُ عَلَى الحَيَاةِ الجَدِيدَةِ.', hint: 'Which preposition?', right: 'أَتَكَيَّفُ مَعَ الحَيَاةِ الجَدِيدَةِ.', why: 'يَتَكَيَّفُ مَعَ …' },
  ],
  task: {
    title: 'My two homes — a reflection', ar: 'بَيْتَايَ',
    text: 'Write a reflective paragraph (about 60–80 words) about belonging to two places (or about a place you love and where you live). Include: • أَنْتَمِي إِلَى … • two things you keep (أَحْتَفِظُ بِ…) • how you or your family adapted (تَكَيَّفَ مَعَ …) • two comparatives, one at a time • how you balance the two (أُوَازِنُ بَيْنَ …) and how you feel.',
    phrases: [['أَنْتَمِي إِلَى … وَ…', 'I belong to … and …'], ['أَحْتَفِظُ بِ…', 'I keep …'], ['تَكَيَّفَ / تَكَيَّفَتْ عَائِلَتِي مَعَ …', 'my family adapted to …'], ['أُوَازِنُ بَيْنَ … وَ…', 'I balance … and …']],
    coreFrames: [
      { ar: 'أَنْتَمِي إِلَى ______ وَ ______ .', en: 'I belong to … and …' },
      { ar: 'أَحْتَفِظُ بِ______ وَ ______ .', en: 'I keep … and …' },
      { ar: '______ أَكْبَرُ / أَقْدَمُ مِنْ ______ .', en: '… is bigger / older than …' },
      { ar: 'أَشْعُرُ بِ______ ، لِأَنَّ ______ .', en: 'I feel …, because …' },
    ],
    developFrames: [
      { ar: 'تَكَيَّفَ ______ مَعَ ______ بِسُهُولَةٍ / بِصُعُوبَةٍ.', en: '… adapted to … easily / with difficulty.' },
      { ar: 'أُوَازِنُ بَيْنَ ______ وَ ______ عِنْدَمَا ______ .', en: 'I balance … and … when …' },
    ],
    bank: ['جَالِيَةٌ عَرَبِيَّةٌ', 'مُهَاجِرٌ · مُهَاجِرَةٌ', 'الجِيلُ الثَّانِي', 'هُوِيَّةٌ مُزْدَوَجَةٌ', 'حَنِينٌ · اعْتِزَازٌ', 'أَنْتَمِي إِلَى', 'أَحْتَفِظُ بِ…', 'أُوَازِنُ بَيْنَ'],
    model: {
      text: 'أَنْتَمِي إِلَى بِرِيطَانْيَا وَالعِرَاقِ؛ وُلِدْتُ فِي بِرْمِنْغْهَامَ، وَوُلِدَ وَالِدَايَ فِي البَصْرَةِ. تَكَيَّفَتْ أُمِّي مَعَ الحَيَاةِ هُنَا بِصُعُوبَةٍ فِي البِدَايَةِ، لِأَنَّ الطَّقْسَ وَاللُّغَةَ كَانَا جَدِيدَيْنِ. أَحْتَفِظُ بِاللُّغَةِ العَرَبِيَّةِ وَبِطَبْخِ جَدَّتِي. البَصْرَةُ أَحَرُّ مِنْ بِرْمِنْغْهَامَ، وَبِرْمِنْغْهَامُ أَكْثَرُ تَنَوُّعًا. أُوَازِنُ بَيْنَ الثَّقَافَتَيْنِ: أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ فِي المَدْرَسَةِ، وَالعَرَبِيَّةَ فِي البَيْتِ. أَشْعُرُ بِالحَنِينِ إِلَى العِرَاقِ أَحْيَانًا، وَلٰكِنَّنِي أَعْتَزُّ بِهُوِيَّتِي المُزْدَوَجَةِ.',
      en: '“I belong to Britain and Iraq — I was born in Birmingham, and my parents were born in Basra. My mum adapted to life here with difficulty at first, because the weather and the language were new. I keep the Arabic language and my grandmother’s cooking. Basra is hotter than Birmingham, and Birmingham is more diverse. I balance the two cultures: I speak English at school and Arabic at home. I sometimes feel nostalgia for Iraq, but I am proud of my dual identity.”',
      find: ['أَنْتَمِي إِلَى', 'تَكَيَّفَتْ أُمِّي مَعَ', 'أَحْتَفِظُ بِاللُّغَةِ', 'أُوَازِنُ بَيْنَ'],
    },
  },
  checkCore: 'use belonging verbs with the right prepositions?',
  checkDevelop: 'compare with one comparative at a time and reflect on feelings?',
});
