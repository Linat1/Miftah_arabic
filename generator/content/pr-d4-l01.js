'use strict';
/* Practice Room · D4-L01 · The natural world — environment and climate vocabulary. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd4-l01',
  arShort: 'العَالَمُ الطَّبِيعِيُّ',
  grammar: 'natural features with agreeing adjectives (ṣaḥrāʾu wāsiʿatun · jibālun ʿāliyatun); formal verbs: yasūdu (prevails) · yattasimu bi- (is characterised by) · tatamayyazu bi- (is distinguished by); fī al-shamāli / al-janūbi; mild · dry · humid',
  focus: 'Students run their own speaking and writing practice describing landscapes and climate: say the nature words, act a short dialogue, answer question cards, do a role-play card as a tour guide, give a one-minute talk about a country, then build, fix and write a formal fact-file paragraph about a country’s geography and climate.',
  words1: 'Landscape', words2: 'Climate',
  dialogue: {
    title: 'What is the climate like?', ar: 'كَيْفَ المَنَاخُ؟',
    lines: [
      ['A', 'كَيْفَ الطَّبِيعَةُ فِي المَغْرِبِ؟', 'What is nature like in Morocco?'],
      ['B', 'يَتَمَيَّزُ المَغْرِبُ بِجِبَالٍ عَالِيَةٍ وَسَاحِلٍ طَوِيلٍ.', 'Morocco is distinguished by high mountains and a long coast.'],
      ['A', 'وَهَلْ فِيهِ صَحْرَاءُ؟', 'And is there desert?'],
      ['B', 'نَعَمْ، فِي جَنُوبِهِ صَحْرَاءُ وَاسِعَةٌ وَجَافَّةٌ.', 'Yes, in the south there is a vast, dry desert.'],
      ['A', 'وَالمَنَاخُ؟', 'And the climate?'],
      ['B', 'يَسُودُ مَنَاخٌ مُعْتَدِلٌ عَلَى السَّاحِلِ، بَيْنَمَا يَتَّسِمُ الجَنُوبُ بِالحَرَارَةِ الشَّدِيدَةِ.', 'A mild climate prevails on the coast, whereas the south is characterised by intense heat.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe ANOTHER country you know (the UK, Egypt, Pakistan …).',
  },
  questions: [
    { q: 'كَيْفَ الطَّبِيعَةُ فِي بَلَدِكَ؟', en: 'What is nature like in your country?', start: 'فِي بَلَدِي … وَ …', more: '… فِي الشَّمَالِ / الجَنُوبِ …' },
    { q: 'كَيْفَ المَنَاخُ فِي الصَّيْفِ وَالشِّتَاءِ؟', en: 'What is the climate like in summer and winter?', start: 'فِي الصَّيْفِ … بَيْنَمَا فِي الشِّتَاءِ …', more: '… رَطْبٌ / جَافٌّ' },
    { q: 'هَلْ تُفَضِّلُ الجِبَالَ أَمِ البَحْرَ؟', en: 'Mountains or the sea?', start: 'أُفَضِّلُ … لِأَنَّ …', more: '… الهَوَاءَ نَقِيٌّ …' },
    { q: 'مَا البَلَدُ الَّذِي يَتَمَيَّزُ بِالغَابَاتِ؟', en: 'Which country is distinguished by forests?', start: '… يَتَمَيَّزُ بِالغَابَاتِ', more: '… مِثْلُ كَنَدَا' },
    { q: 'صِفْ صَحْرَاءَ.', en: 'Describe a desert.', start: 'الصَّحْرَاءُ وَاسِعَةٌ وَ …', more: '… يَسُودُهَا مَنَاخٌ …' },
  ],
  card: {
    title: 'Role-play card — a tour guide in Oman', ar: 'مُرْشِدٌ سِيَاحِيٌّ فِي عُمَانَ', you: 'the tour guide', them: 'a visiting tourist',
    tasks: [
      { ex: 'بِمَاذَا تَتَمَيَّزُ عُمَانُ؟', task: 'Two natural features.', plan: 'تَتَمَيَّزُ ← تَتَمَيَّزُ عُمَانُ بِجِبَالٍ … وَ…', model: 'تَتَمَيَّزُ عُمَانُ بِجِبَالٍ عَالِيَةٍ وَشَوَاطِئَ جَمِيلَةٍ.', modelEn: 'Oman is distinguished by high mountains and beautiful beaches.' },
      { ex: 'وَكَيْفَ المَنَاخُ الآنَ؟', task: 'Climate now.', plan: 'المَنَاخُ ← يَسُودُ مَنَاخٌ … فِي …', model: 'يَسُودُ مَنَاخٌ حَارٌّ وَرَطْبٌ عَلَى السَّاحِلِ فِي الصَّيْفِ.', modelEn: 'A hot, humid climate prevails on the coast in summer.' },
      { ex: 'أَيْنَ أَجِدُ الصَّحْرَاءَ؟', task: 'Location + description.', plan: '', model: 'فِي الدَّاخِلِ؛ صَحْرَاءُ الرُّبْعِ الخَالِي وَاسِعَةٌ وَجَافَّةٌ جِدًّا.', modelEn: 'Inland — the Empty Quarter is vast and very dry.' },
      { unexpected: true, ex: 'مَا أَفْضَلُ وَقْتٍ لِلزِّيَارَةِ؟', task: 'Advise + reason.', plan: '', model: 'أَفْضَلُ وَقْتٍ هُوَ الشِّتَاءُ، لِأَنَّ الطَّقْسَ مُعْتَدِلٌ وَمُشْمِسٌ.', modelEn: 'The best time is winter, because the weather is mild and sunny.' },
    ],
    girl: 'if the guide is a woman: no changes (the verbs describe Oman)',
    notes: 'tatamayyazu bi- + genitive; yasūdu + the climate as subject.',
  },
  talk: {
    title: 'One minute: a country’s landscape and climate', ar: 'طَبِيعَةُ بَلَدٍ وَمَنَاخُهُ',
    text: 'Choose a country. Talk for one minute: its natural features (north / south / coast / inland) and its climate in two seasons.',
    routes: {
      core: 'Four features with agreeing adjectives.',
      develop: 'Add يَسُودُ … and يَتَمَيَّزُ / تَتَمَيَّزُ بِ…',
      stretch: 'Add a contrast between two regions (بَيْنَمَا) and a recommendation.',
    },
  },
  builder: [
    { en: 'Egypt is distinguished by a long river.', cols: [['تَتَمَيَّزُ مِصْرُ', 'يَتَمَيَّزُ مِصْرُ'], ['بِنَهْرٍ', 'بِنَهْرٌ'], ['طَوِيلٍ.', 'طَوِيلَةٍ.']], key: [0, 0, 0], why: 'Most countries are feminine (مِصْرُ) → تَتَمَيَّزُ; but المَغْرِبُ, العِرَاقُ, الأُرْدُنُّ are masculine. بِ + genitive.' },
    { en: 'A dry climate prevails in the south.', cols: [['يَسُودُ', 'تَسُودُ'], ['مَنَاخٌ جَافٌّ', 'مَنَاخًا جَافًّا'], ['فِي الجَنُوبِ.', 'فِي الجَنُوبُ.']], key: [0, 0, 0], why: 'مَنَاخٌ (m.) is the subject → يَسُودُ مَنَاخٌ.' },
    { en: 'The mountains are high and the forests are green.', cols: [['الجِبَالُ عَالِيَةٌ،', 'الجِبَالُ عَالِيُونَ،'], ['وَالغَابَاتُ', 'وَالغَابَةُ'], ['خَضْرَاءُ.', 'أَخْضَرُ.']], key: [0, 0, 0], why: 'Non-human plurals → feminine singular adjectives.' },
  ],
  errors: [
    { wrong: 'الصَّحْرَاءُ وَاسِعٌ وَجَافٌّ.', hint: 'صَحْرَاءُ is …', right: 'الصَّحْرَاءُ وَاسِعَةٌ وَجَافَّةٌ.', why: 'صَحْرَاءُ is feminine.' },
    { wrong: 'يَتَمَيَّزُ البَلَدُ الجِبَالَ.', hint: 'Missing preposition.', right: 'يَتَمَيَّزُ البَلَدُ بِالجِبَالِ.', why: 'يَتَمَيَّزُ بِ + genitive.' },
    { wrong: 'الأَنْهَارُ طَوِيلُونَ.', hint: 'Rivers are not people.', right: 'الأَنْهَارُ طَوِيلَةٌ.', why: 'Non-human plural → f. singular.' },
  ],
  task: {
    title: 'A fact file: a country’s geography and climate', ar: 'بِطَاقَةُ مَعْلُومَاتٍ: جُغْرَافِيَا بَلَدٍ وَمَنَاخُهُ',
    text: 'Write a formal fact-file paragraph (about 60–80 words) about a country for a geography display. Include: • four natural features with agreeing adjectives • where they are (فِي الشَّمَالِ / عَلَى السَّاحِلِ …) • the climate with يَسُودُ … • one يَتَّسِمُ / تَتَمَيَّزُ بِ… • a contrast between two regions • the best time to visit.',
    phrases: [['تَتَمَيَّزُ … بِ…', '… is distinguished by …'], ['يَسُودُ مَنَاخٌ … فِي …', 'a … climate prevails in …'], ['يَتَّسِمُ … بِ…', '… is characterised by …'], ['أَفْضَلُ وَقْتٍ لِلزِّيَارَةِ …', 'the best time to visit …']],
    coreFrames: [
      { ar: 'تَقَعُ ______ فِي ______ .', en: '… is located in …' },
      { ar: 'تَتَمَيَّزُ بِ______ وَ ______ .', en: 'It is distinguished by … and …' },
      { ar: 'فِي الشَّمَالِ ______ ، وَفِي الجَنُوبِ ______ .', en: 'In the north …, and in the south …' },
      { ar: 'يَسُودُ مَنَاخٌ ______ فِي ______ .', en: 'A … climate prevails in …' },
    ],
    developFrames: [
      { ar: 'يَتَّسِمُ ______ بِ______ ، بَيْنَمَا ______ .', en: '… is characterised by …, whereas …' },
      { ar: 'أَفْضَلُ وَقْتٍ لِلزِّيَارَةِ ______ ، لِأَنَّ ______ .', en: 'The best time to visit is …, because …' },
    ],
    bank: ['الصَّحْرَاءُ · الغَابَةُ', 'الجِبَالُ · البَحْرُ', 'الأَنْهَارُ · السَّاحِلُ', 'الجَزِيرَةُ', 'جَافٌّ · رَطْبٌ', 'مُعْتَدِلٌ · حَارٌّ', 'يَسُودُ', 'يَتَّسِمُ بِ… · تَتَمَيَّزُ بِ…'],
    model: {
      text: 'تَقَعُ تُرْكِيَا بَيْنَ قَارَّتَيْ آسْيَا وَأُورُوبَّا، وَتَتَمَيَّزُ بِطَبِيعَةٍ مُتَنَوِّعَةٍ. فِي الشَّمَالِ غَابَاتٌ خَضْرَاءُ وَجِبَالٌ عَالِيَةٌ، وَفِي الجَنُوبِ سَاحِلٌ طَوِيلٌ وَشَوَاطِئُ جَمِيلَةٌ. كَمَا أَنَّ فِيهَا أَنْهَارًا كَثِيرَةً وَبُحَيْرَاتٍ وَاسِعَةً. يَسُودُ مَنَاخٌ مُعْتَدِلٌ عَلَى السَّاحِلِ، بَيْنَمَا يَتَّسِمُ الوَسَطُ بِشِتَاءٍ بَارِدٍ وَثُلُوجٍ كَثِيفَةٍ. أَمَّا الصَّيْفُ فَحَارٌّ وَجَافٌّ فِي أَغْلَبِ المَنَاطِقِ. أَفْضَلُ وَقْتٍ لِلزِّيَارَةِ هُوَ الرَّبِيعُ، لِأَنَّ الطَّقْسَ دَافِئٌ وَالطَّبِيعَةَ خَضْرَاءُ.',
      en: '“Turkey lies between Asia and Europe, and is distinguished by varied nature. In the north there are green forests and high mountains, and in the south a long coast and beautiful beaches. It also has many rivers and wide lakes. A mild climate prevails on the coast, whereas the centre is characterised by a cold winter and heavy snow. As for summer, it is hot and dry in most regions. The best time to visit is spring, because the weather is warm and nature is green.”',
      find: ['وَتَتَمَيَّزُ بِطَبِيعَةٍ', 'جِبَالٌ عَالِيَةٌ', 'يَسُودُ مَنَاخٌ مُعْتَدِلٌ', 'يَتَّسِمُ الوَسَطُ'],
    },
  },
  checkCore: 'describe four features with agreeing adjectives (incl. non-human plurals)?',
  checkDevelop: 'use يَسُودُ and يَتَّسِمُ / يَتَمَيَّزُ بِ… correctly?',
});
