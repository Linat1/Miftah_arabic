'use strict';
/* Practice Room · D5-L04 · Past tense — plural forms (we · you all · they) and irregular verbs. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd5-l04',
  arShort: 'المَاضِي — الجَمْعُ',
  grammar: 'plural past endings: -nā (we: laʿibnā) · -tum (you all: laʿibtum) · -ū (they: laʿibū); hollow verbs shorten before a consonant ending (qāla → qulnā · nāma → nimnā · zāra → zurnā); weak verbs (mashā → mashaynā · raʾā → raʾaynā); fix the stem, then add the ending',
  focus: 'Students run their own speaking and writing practice telling group stories in the past: say the plural and irregular forms, act a trip-story dialogue, answer question cards, do a role-play card reporting a class trip to the head teacher, give a one-minute group story, then build, fix and write a class-trip report.',
  words1: 'We · you all · they', words2: 'Irregular stems',
  dialogue: {
    title: 'What did you all do on the trip?', ar: 'مَاذَا فَعَلْتُمْ فِي الرِّحْلَةِ؟',
    lines: [
      ['A', 'مَاذَا فَعَلْتُمْ فِي رِحْلَةِ المَدْرَسَةِ؟', 'What did you all do on the school trip?'],
      ['B', 'ذَهَبْنَا إِلَى الجَبَلِ، وَمَشَيْنَا سَاعَتَيْنِ.', 'We went to the mountain and walked for two hours.'],
      ['A', 'وَمَاذَا رَأَيْتُمْ؟', 'And what did you see?'],
      ['B', 'رَأَيْنَا شَلَّالًا رَائِعًا، وَزُرْنَا قَرْيَةً قَدِيمَةً.', 'We saw a wonderful waterfall, and visited an old village.'],
      ['A', 'وَالمُعَلِّمُونَ؟', 'And the teachers?'],
      ['B', 'قَالُوا إِنَّهَا أَفْضَلُ رِحْلَةٍ! وَفِي اللَّيْلِ نِمْنَا فِي الخِيَامِ.', 'They said it was the best trip! And at night we slept in tents.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: tell about a REAL group outing — every verb must be “we” or “they”.',
  },
  questions: [
    { q: 'مَاذَا فَعَلْتُمْ فِي آخِرِ عُطْلَةٍ عَائِلِيَّةٍ؟', en: 'What did you all do on your last family holiday?', start: 'سَافَرْنَا … / زُرْنَا …', more: '… ثُمَّ …' },
    { q: 'مَاذَا فَعَلَ أَصْدِقَاؤُكَ فِي نِهَايَةِ الأُسْبُوعِ؟', en: 'What did your friends do at the weekend?', start: 'لَعِبُوا … / ذَهَبُوا …', more: '…' },
    { q: 'أَيْنَ نِمْتُمْ فِي الرِّحْلَةِ؟', en: 'Where did you all sleep on the trip?', start: 'نِمْنَا فِي …', more: '… لِأَنَّ …' },
    { q: 'مَاذَا قَالَ المُعَلِّمُونَ عَنِ الامْتِحَانِ؟', en: 'What did the teachers say about the exam?', start: 'قَالُوا إِنَّ …', more: '…' },
    { q: 'مَا الَّذِي رَأَيْتُمُوهُ فِي المَتْحَفِ؟', en: 'What did you all see in the museum?', start: 'رَأَيْنَا …', more: '… وَتَعَلَّمْنَا …' },
  ],
  card: {
    title: 'Role-play card — reporting the class trip to the head teacher', ar: 'تَقْرِيرٌ عَنِ الرِّحْلَةِ', you: 'the class representative', them: 'the head teacher',
    tasks: [
      { ex: 'أَيْنَ ذَهَبْتُمْ؟', task: 'Where + how (we).', plan: 'أَيْنَ ← ذَهَبْنَا إِلَى … بِ…', model: 'ذَهَبْنَا إِلَى المَتْحَفِ الوَطَنِيِّ بِالحَافِلَةِ.', modelEn: 'We went to the National Museum by bus.' },
      { ex: 'وَمَاذَا فَعَلْتُمْ هُنَاكَ؟', task: 'Two actions (we).', plan: 'فَعَلْنَا ← زُرْنَا … وَرَأَيْنَا …', model: 'زُرْنَا قَاعَةَ الفَرَاعِنَةِ، وَرَأَيْنَا مُومْيَاءَ حَقِيقِيَّةً.', modelEn: 'We visited the Pharaohs’ hall, and saw a real mummy.' },
      { ex: 'وَهَلْ أَحَبَّ الطُّلَّابُ الرِّحْلَةَ؟', task: 'They + quote.', plan: '', model: 'نَعَمْ، أَحَبُّوهَا كَثِيرًا، وَقَالُوا إِنَّهَا مُفِيدَةٌ جِدًّا.', modelEn: 'Yes, they loved it, and said it was very useful.' },
      { unexpected: true, ex: 'هَلْ حَدَثَتْ أَيُّ مُشْكِلَةٍ؟', task: 'A problem in the past.', plan: '', model: 'تَأَخَّرَتِ الحَافِلَةُ، فَمَشَيْنَا إِلَى المَقْهَى وَانْتَظَرْنَا نِصْفَ سَاعَةٍ.', modelEn: 'The bus was late, so we walked to the café and waited half an hour.' },
    ],
    girl: 'no changes needed (we / they forms)',
    notes: 'Hollow verbs: zāra → zurnā · qāla → qālū (they keep the long ā). Weak: mashā → mashaynā.',
  },
  talk: {
    title: 'One minute: a group story', ar: 'قِصَّةٌ جَمَاعِيَّةٌ',
    text: 'Tell a group story for one minute (a trip, a party, a match): what “we” did, what “they” did, and what someone said.',
    routes: {
      core: 'Five “we” verbs (-nā).',
      develop: 'Add three “they” verbs (-ū) and one “you all” question (-tum).',
      stretch: 'Add three irregular verbs (زُرْنَا · نِمْنَا · قَالُوا · مَشَيْنَا).',
    },
  },
  builder: [
    { en: 'We visited our grandmother.', cols: [['زُرْنَا', 'زَارْنَا'], ['جَدَّتَنَا', 'جَدَّتُنَا'], ['يَوْمَ الجُمُعَةِ.', 'يَوْمُ الجُمُعَةِ.']], key: [0, 0, 0], why: 'Hollow verb: زَارَ → زُرْنَا (short vowel before -nā).' },
    { en: 'They said that the film was long.', cols: [['قَالُوا', 'قُلْنَا'], ['إِنَّ الفِيلْمَ', 'أَنَّ الفِيلْمُ'], ['كَانَ طَوِيلًا.', 'كَانَ طَوِيلٌ.']], key: [0, 0, 0], why: 'They → قَالُوا; قَالَ + إِنَّ; كَانَ + -an.' },
    { en: 'Did you all walk to school?', cols: [['هَلْ', 'كَيْفَ'], ['مَشَيْتُمْ', 'مَشَوْا'], ['إِلَى المَدْرَسَةِ؟', 'إِلَى المَدْرَسَةُ؟']], key: [0, 0, 0], why: 'You all → -tum: مَشَيْتُمْ.' },
  ],
  errors: [
    { wrong: 'قَالْنَا لِلْمُعَلِّمِ «شُكْرًا».', hint: 'Hollow verb + -nā.', right: 'قُلْنَا لِلْمُعَلِّمِ «شُكْرًا».', why: 'قَالَ → قُلْنَا.' },
    { wrong: 'أَصْدِقَائِي لَعِبْنَا كُرَةَ القَدَمِ.', hint: 'Who played?', right: 'أَصْدِقَائِي لَعِبُوا كُرَةَ القَدَمِ.', why: 'They → -ū.' },
    { wrong: 'مَشَانَا عَلَى الشَّاطِئِ.', hint: 'Weak verb stem.', right: 'مَشَيْنَا عَلَى الشَّاطِئِ.', why: 'مَشَى → مَشَيْنَا.' },
  ],
  task: {
    title: 'A class-trip report', ar: 'تَقْرِيرٌ عَنْ رِحْلَةِ الصَّفِّ',
    text: 'Write a report (about 60–80 words) for the school newsletter about a class trip. Include: • where, when and how you went (we) • four “we” actions, two of them irregular (زُرْنَا · رَأَيْنَا · مَشَيْنَا · نِمْنَا) • two “they” actions (the teachers / the guide) • something someone said (قَالُوا إِنَّ …) • your opinion.',
    phrases: [['ذَهَبْنَا إِلَى … بِ…', 'we went to … by …'], ['زُرْنَا … · رَأَيْنَا … · مَشَيْنَا …', 'we visited … · we saw … · we walked …'], ['شَرَحَ المُرْشِدُ … · سَاعَدَنَا المُعَلِّمُونَ …', 'the guide explained … · the teachers helped us …'], ['قَالُوا إِنَّ …', 'they said that …']],
    coreFrames: [
      { ar: 'يَوْمَ ______ ذَهَبْنَا إِلَى ______ بِ______ .', en: 'On … we went to … by …' },
      { ar: 'أَوَّلًا زُرْنَا ______ ، ثُمَّ رَأَيْنَا ______ .', en: 'First we visited …, then we saw …' },
      { ar: 'المُعَلِّمُونَ ______ وَ ______ .', en: 'The teachers … and …' },
      { ar: 'فِي رَأْيِي كَانَتِ الرِّحْلَةُ ______ .', en: 'In my opinion the trip was …' },
    ],
    developFrames: [
      { ar: 'بَعْدَ الغَدَاءِ مَشَيْنَا ______ ، وَ ______ .', en: 'After lunch we walked …, and …' },
      { ar: 'قَالَ الطُّلَّابُ إِنَّ ______ .', en: 'The students said that …' },
    ],
    bank: ['ذَهَبْنَا · خَرَجْنَا', 'زُرْنَا · رَأَيْنَا', 'مَشَيْنَا · نِمْنَا', 'قُلْنَا · قَالُوا', 'لَعِبُوا · أَكَلُوا', 'فَعَلْتُمْ؟', 'مَعًا · فَجْأَةً', 'قَالُوا إِنَّ'],
    model: {
      text: 'يَوْمَ الخَمِيسِ ذَهَبْنَا إِلَى مَدِينَةِ يُورْك بِالقِطَارِ. أَوَّلًا زُرْنَا المَتْحَفَ الإِسْلَامِيَّ، وَرَأَيْنَا مَخْطُوطَاتٍ قَدِيمَةً جِدًّا. شَرَحَ المُرْشِدُ تَارِيخَ الخَطِّ العَرَبِيِّ، وَسَاعَدَنَا المُعَلِّمُونَ فِي الأَسْئِلَةِ. بَعْدَ الغَدَاءِ مَشَيْنَا عَلَى سُورِ المَدِينَةِ، وَالْتَقَطْنَا صُوَرًا كَثِيرَةً. فَجْأَةً سَقَطَ المَطَرُ، فَرَكَضْنَا إِلَى المَقْهَى! قَالَ الطُّلَّابُ إِنَّهَا أَجْمَلُ رِحْلَةٍ هٰذِهِ السَّنَةَ. فِي رَأْيِي كَانَتِ الرِّحْلَةُ مُمْتِعَةً وَمُفِيدَةً، لِأَنَّنَا تَعَلَّمْنَا كَثِيرًا عَنْ تَارِيخِنَا.',
      en: '“On Thursday we went to York by train. First we visited the Islamic museum, and saw very old manuscripts. The guide explained the history of Arabic calligraphy, and the teachers helped us with the questions. After lunch we walked on the city wall and took lots of photos. Suddenly it rained, so we ran to the café! The students said it was the best trip this year. In my opinion the trip was fun and useful, because we learned a lot about our history.”',
      find: ['زُرْنَا المَتْحَفَ', 'وَرَأَيْنَا', 'مَشَيْنَا عَلَى', 'قَالَ الطُّلَّابُ إِنَّهَا'],
    },
  },
  checkCore: 'use -nā for “we” in every group action?',
  checkDevelop: 'fix irregular stems first (زُرْنَا · مَشَيْنَا) and use -ū for “they”?',
});
