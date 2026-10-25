'use strict';
/* Practice Room · D6-L02 · Cultural customs — traditions, greetings and social norms. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd6-l02',
  arShort: 'العَادَاتُ وَالتَّقَالِيدُ',
  grammar: 'custom verbs with their prepositions: yaʿtādu ʿalā · yatamassaku bi- · yaḥtafilu bi- · yaḥrisu ʿalā; values (al-ḍiyāfa · al-karam · iḥtirām al-kibār · ṣilat al-raḥim); comparing with baynamā; accurate claims (fī baʿḍi al-ʿāʾilāt · ghāliban · laysa kullu …) — never “all Arabs”',
  focus: 'Students run their own speaking and writing practice about customs: say the custom words and verbs, act a dialogue about hospitality, answer question cards, do a role-play card advising a visitor before a family visit, give a one-minute comparison of customs, then build, fix and write a fair comparison of customs in two cultures.',
  words1: 'Customs and values', words2: 'Custom verbs',
  dialogue: {
    title: 'Visiting a family for the first time', ar: 'زِيَارَةٌ عَائِلِيَّةٌ أُولَى',
    lines: [
      ['A', 'سَأَزُورُ عَائِلَةَ صَدِيقِي العَرَبِيِّ. مَاذَا أَفْعَلُ؟', 'I’m visiting my Arab friend’s family. What should I do?'],
      ['B', 'فِي كَثِيرٍ مِنَ العَائِلَاتِ، يُقَدِّمُونَ القَهْوَةَ لِلضَّيْفِ أَوَّلًا. هٰذَا مِنَ الكَرَمِ.', 'In many families they serve the guest coffee first. That’s part of generosity.'],
      ['A', 'وَكَيْفَ أُسَلِّمُ؟', 'And how do I greet?'],
      ['B', 'غَالِبًا يُسَلِّمُ الضَّيْفُ عَلَى الكِبَارِ أَوَّلًا، احْتِرَامًا لَهُمْ.', 'Often the guest greets the elders first, out of respect.'],
      ['A', 'هَلْ كُلُّ العَائِلَاتِ هٰكَذَا؟', 'Are all families like this?'],
      ['B', 'لَا، تَخْتَلِفُ العَادَاتُ مِنْ بَلَدٍ إِلَى بَلَدٍ، وَمِنْ عَائِلَةٍ إِلَى أُخْرَى.', 'No — customs differ from country to country, and from family to family.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe a custom in YOUR family — and add a fair limit (فِي بَعْضِ …).',
  },
  questions: [
    { q: 'مَا العَادَةُ الَّتِي تَتَمَسَّكُ بِهَا عَائِلَتُكَ؟', en: 'Which custom does your family hold on to?', start: 'تَتَمَسَّكُ عَائِلَتِي بِ…', more: '… لِأَنَّ …' },
    { q: 'كَيْفَ تَسْتَقْبِلُونَ الضُّيُوفَ؟', en: 'How do you welcome guests?', start: 'نُقَدِّمُ لَهُمْ … / نُرَحِّبُ بِهِمْ …', more: '… هٰذَا مِنَ الضِّيَافَةِ' },
    { q: 'كَيْفَ تُظْهِرُ احْتِرَامَ الكِبَارِ؟', en: 'How do you show respect for elders?', start: 'أَقِفُ عِنْدَمَا … / أُقَبِّلُ يَدَ …', more: '…' },
    { q: 'بِمَاذَا تَحْتَفِلُ عَائِلَتُكَ؟', en: 'What does your family celebrate?', start: 'نَحْتَفِلُ بِ…', more: '… وَعَادَةً …' },
    { q: 'مَا الفَرْقُ بَيْنَ عَادَاتِ بَلَدَيْنِ تَعْرِفُهُمَا؟', en: 'Difference between customs of two countries you know?', start: 'فِي … ، بَيْنَمَا فِي …', more: '… وَلٰكِنْ لَيْسَ دَائِمًا' },
  ],
  card: {
    title: 'Role-play card — advising a British friend before a family visit', ar: 'نَصِيحَةٌ قَبْلَ الزِّيَارَةِ', you: 'yourself', them: 'a British friend visiting your family',
    tasks: [
      { ex: 'هَلْ أُحْضِرُ هَدِيَّةً؟', task: 'Advice + reason.', plan: 'نَصِيحَةٌ ← نَعَمْ، … لِأَنَّ …', model: 'نَعَمْ، فِي عَائِلَتِي نُحِبُّ الحَلْوَى أَوِ الفَاكِهَةَ، لِأَنَّهَا تُعَبِّرُ عَنِ الاحْتِرَامِ.', modelEn: 'Yes, in my family we like sweets or fruit, because they show respect.' },
      { ex: 'هَلْ أَخْلَعُ حِذَائِي؟', task: 'A custom with يَعْتَادُ عَلَى.', plan: 'العَادَةُ ← نَعْتَادُ عَلَى …', model: 'نَعَمْ، نَعْتَادُ عَلَى خَلْعِ الأَحْذِيَةِ عِنْدَ البَابِ.', modelEn: 'Yes, we are used to taking off shoes at the door.' },
      { ex: 'وَإِذَا قَدَّمُوا لِي طَعَامًا كَثِيرًا؟', task: 'Explain hospitality.', plan: '', model: 'هٰذَا مِنَ الكَرَمِ؛ جَدَّتِي تَحْرِصُ عَلَى أَنْ يَشْبَعَ كُلُّ ضَيْفٍ!', modelEn: 'That’s generosity — my grandmother makes sure every guest is full!' },
      { unexpected: true, ex: 'هَلْ هٰذِهِ عَادَاتُ كُلِّ العَرَبِ؟', task: 'A fair answer.', plan: '', model: 'لَيْسَ بِالضَّرُورَةِ؛ هٰذِهِ عَادَاتُ عَائِلَتِي، وَتَخْتَلِفُ مِنْ عَائِلَةٍ إِلَى أُخْرَى.', modelEn: 'Not necessarily — these are my family’s customs, and they vary from family to family.' },
    ],
    girl: 'no changes needed — the friend’s questions use “I” (أُحْضِرُ · أَخْلَعُ)',
    notes: 'Verb + preposition as one unit: naʿtādu ʿalā · natamassaku bi- · naḥrisu ʿalā.',
  },
  talk: {
    title: 'One minute: customs compared', ar: 'عَادَاتٌ مُقَارَنَةٌ',
    text: 'Compare two customs (greetings, hospitality, meals, family) in two cultures you know for one minute — fairly.',
    routes: {
      core: 'Two customs with بَيْنَمَا.',
      develop: 'Add two custom verbs with prepositions (نَتَمَسَّكُ بِ… · نَعْتَادُ عَلَى …).',
      stretch: 'Add hedges (فِي بَعْضِ العَائِلَاتِ · غَالِبًا · لَيْسَ دَائِمًا) and your opinion.',
    },
  },
  builder: [
    { en: 'My family holds on to its traditions.', cols: [['تَتَمَسَّكُ عَائِلَتِي', 'يَتَمَسَّكُ عَائِلَتِي'], ['بِ', 'عَلَى'], ['تَقَالِيدِهَا.', 'تَقَالِيدُهَا.']], key: [0, 0, 0], why: 'تَتَمَسَّكُ بِ + genitive.' },
    { en: 'In some families, they eat together every day.', cols: [['فِي بَعْضِ العَائِلَاتِ', 'فِي كُلِّ العَرَبِ'], ['يَأْكُلُونَ', 'يَأْكُلُ'], ['مَعًا كُلَّ يَوْمٍ.', 'مَعًا كُلُّ يَوْمٍ.']], key: [0, 0, 0], why: 'A fair hedge; they → -ūna.' },
    { en: 'We are used to welcoming guests.', cols: [['نَعْتَادُ', 'نَعْتَادَ'], ['عَلَى', 'بِ'], ['اسْتِقْبَالِ الضُّيُوفِ.', 'اسْتِقْبَالُ الضُّيُوفِ.']], key: [0, 0, 0], why: 'يَعْتَادُ عَلَى + maṣdar in the genitive.' },
  ],
  errors: [
    { wrong: 'كُلُّ العَرَبِ يَشْرَبُونَ القَهْوَةَ العَرَبِيَّةَ.', hint: 'Too general.', right: 'كَثِيرٌ مِنَ العَائِلَاتِ تُقَدِّمُ القَهْوَةَ العَرَبِيَّةَ لِلضُّيُوفِ.', why: 'Keep claims accurate — كَثِيرٌ مِنْ / بَعْضُ.' },
    { wrong: 'نَحْتَفِلُ العِيدَ مَعَ أَقَارِبِنَا.', hint: 'Missing preposition.', right: 'نَحْتَفِلُ بِالعِيدِ مَعَ أَقَارِبِنَا.', why: 'يَحْتَفِلُ بِ…' },
    { wrong: 'يَتَمَسَّكُ جَدِّي عَلَى عَادَاتِهِ.', hint: 'Which preposition?', right: 'يَتَمَسَّكُ جَدِّي بِعَادَاتِهِ.', why: 'يَتَمَسَّكُ بِ…' },
  ],
  task: {
    title: 'Customs in two cultures — a fair comparison', ar: 'عَادَاتٌ فِي ثَقَافَتَيْنِ',
    text: 'Write a comparison (about 60–80 words) of customs in two cultures you know (e.g. your family’s and British culture). Include: • two customs in each culture • two custom verbs with prepositions • a comparison with بَيْنَمَا • at least two hedges (فِي بَعْضِ … / غَالِبًا / لَيْسَ دَائِمًا) • which custom you value most and why.',
    phrases: [['فِي عَائِلَتِي نَتَمَسَّكُ بِ…', 'in my family we hold on to …'], ['نَعْتَادُ عَلَى … · نَحْرِصُ عَلَى …', 'we are used to … · we make sure to …'], ['… بَيْنَمَا فِي … غَالِبًا …', '… whereas in … usually …'], ['أُقَدِّرُ … كَثِيرًا لِأَنَّ …', 'I really value … because …']],
    coreFrames: [
      { ar: 'فِي عَائِلَتِي نَتَمَسَّكُ بِ______ .', en: 'In my family we hold on to …' },
      { ar: 'نَعْتَادُ عَلَى ______ .', en: 'We are used to …' },
      { ar: '______ ، بَيْنَمَا فِي ______ ______ .', en: '…, whereas in … …' },
      { ar: 'أُقَدِّرُ ______ كَثِيرًا، لِأَنَّ ______ .', en: 'I really value …, because …' },
    ],
    developFrames: [
      { ar: 'فِي بَعْضِ العَائِلَاتِ ______ ، وَلٰكِنْ لَيْسَ دَائِمًا.', en: 'In some families …, but not always.' },
      { ar: 'تَخْتَلِفُ العَادَاتُ مِنْ ______ إِلَى ______ .', en: 'Customs differ from … to …' },
    ],
    bank: ['عَادَةٌ · عَادَاتٌ', 'تَقْلِيدٌ · تَقَالِيدُ', 'ضِيَافَةٌ · كَرَمٌ', 'احْتِرَامُ الكِبَارِ', 'صِلَةُ الرَّحِمِ', 'يَعْتَادُ عَلَى', 'يَتَمَسَّكُ بِ…', 'فِي بَعْضِ العَائِلَاتِ'],
    model: {
      text: 'فِي عَائِلَتِي الصُّومَالِيَّةِ نَتَمَسَّكُ بِصِلَةِ الرَّحِمِ، فَنَزُورُ أَقَارِبَنَا كُلَّ جُمُعَةٍ. نَعْتَادُ عَلَى تَقْدِيمِ الشَّايِ بِالهَيْلِ لِكُلِّ ضَيْفٍ، وَنَحْرِصُ عَلَى احْتِرَامِ الكِبَارِ. أَمَّا فِي الثَّقَافَةِ البِرِيطَانِيَّةِ فَالزِّيَارَاتُ غَالِبًا بِمَوْعِدٍ مُسْبَقٍ، بَيْنَمَا نَزُورُ نَحْنُ بِدُونِ مَوْعِدٍ أَحْيَانًا. فِي بَعْضِ العَائِلَاتِ البِرِيطَانِيَّةِ يَأْكُلُ الجَمِيعُ مَعًا يَوْمَ الأَحَدِ، وَلٰكِنْ لَيْسَ دَائِمًا. تَخْتَلِفُ العَادَاتُ مِنْ عَائِلَةٍ إِلَى أُخْرَى. أُقَدِّرُ صِلَةَ الرَّحِمِ كَثِيرًا، لِأَنَّهَا تَجْعَلُنِي قَرِيبًا مِنْ جَدَّتِي.',
      en: '“In my Somali family we hold on to family ties, so we visit our relatives every Friday. We are used to serving cardamom tea to every guest, and we make sure to respect elders. In British culture, visits are usually arranged in advance, whereas we sometimes visit without an appointment. In some British families everyone eats together on Sunday, but not always. Customs differ from family to family. I really value family ties, because they keep me close to my grandmother.”',
      find: ['نَتَمَسَّكُ بِصِلَةِ الرَّحِمِ', 'نَعْتَادُ عَلَى تَقْدِيمِ', 'بَيْنَمَا نَزُورُ', 'فِي بَعْضِ العَائِلَاتِ'],
    },
  },
  checkCore: 'use custom verbs with the right preposition?',
  checkDevelop: 'compare fairly with بَيْنَمَا and at least two hedges?',
});
