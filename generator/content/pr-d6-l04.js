'use strict';
/* Practice Room · D6-L04 · Cultural celebrations beyond Islam in the Arab world. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd6-l04',
  arShort: 'احْتِفَالَاتٌ مُتَنَوِّعَةٌ',
  grammar: 'precise vocabulary for a multi-faith region (kanīsa · kanīs yahūdī · quddās · ṭāʾifa · aqalliyya); festivals (mihrajān · ʿurūḍ · zayy taqlīdī); a festival you attended (ḥaḍartu · shāhadtu); a balanced paragraph: min nāḥiyatin … wa-min nāḥiyatin ukhrā … · ʿalā al-raghmi min anna …',
  focus: 'Students run their own speaking and writing practice about the Arab world as a multi-faith, multi-cultural region: say the vocabulary precisely, act a dialogue about Christmas in Lebanon, answer question cards, do a role-play card reporting on a cultural festival, give a one-minute balanced talk, then build, fix and write a balanced paragraph on celebrating diversity.',
  words1: 'Faith communities', words2: 'Festivals',
  dialogue: {
    title: 'Christmas in Beirut', ar: 'عِيدُ المِيلَادِ فِي بَيْرُوتَ',
    lines: [
      ['A', 'هَلْ يُحْتَفَلُ بِعِيدِ المِيلَادِ فِي لُبْنَانَ؟', 'Is Christmas celebrated in Lebanon?'],
      ['B', 'نَعَمْ، فِي لُبْنَانَ طَوَائِفُ مَسِيحِيَّةٌ كَثِيرَةٌ، وَيَذْهَبُ النَّاسُ إِلَى القُدَّاسِ فِي الكَنِيسَةِ.', 'Yes, Lebanon has many Christian communities, and people go to mass at church.'],
      ['A', 'وَهَلْ يَحْتَفِلُ المُسْلِمُونَ أَيْضًا؟', 'Do Muslims celebrate too?'],
      ['B', 'بَعْضُهُمْ يُهَنِّئُونَ جِيرَانَهُمُ المَسِيحِيِّينَ، وَتُزَيَّنُ بَعْضُ الشَّوَارِعِ.', 'Some congratulate their Christian neighbours, and some streets are decorated.'],
      ['A', 'وَهَلْ هُنَاكَ مِهْرَجَانَاتٌ ثَقَافِيَّةٌ أُخْرَى؟', 'Are there other cultural festivals?'],
      ['B', 'نَعَمْ، مِثْلُ مِهْرَجَانِ بَعْلَبَكَّ؛ حَضَرْتُهُ مَعَ عَائِلَتِي، وَشَاهَدْنَا عُرُوضًا رَائِعَةً.', 'Yes, like the Baalbek festival — I attended it with my family, and we watched wonderful performances.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe ANOTHER festival you know (a cultural or national one).',
  },
  questions: [
    { q: 'مَا الطَّوَائِفُ الدِّينِيَّةُ فِي العَالَمِ العَرَبِيِّ؟', en: 'What faith communities are in the Arab world?', start: 'هُنَاكَ مُسْلِمُونَ وَمَسِيحِيُّونَ وَ…', more: '… وَأَقَلِّيَّاتٌ أُخْرَى' },
    { q: 'أَيْنَ يُصَلِّي المَسِيحِيُّونَ؟ وَاليَهُودُ؟', en: 'Where do Christians pray? And Jews?', start: 'يُصَلِّي المَسِيحِيُّونَ فِي الكَنِيسَةِ …', more: '… وَاليَهُودُ فِي الكَنِيسِ' },
    { q: 'هَلْ حَضَرْتَ مِهْرَجَانًا ثَقَافِيًّا؟', en: 'Have you attended a cultural festival?', start: 'نَعَمْ، حَضَرْتُ … / لَا، وَلٰكِنْ …', more: '… وَشَاهَدْتُ …' },
    { q: 'لِمَاذَا تُعْتَبَرُ المِهْرَجَانَاتُ مُهِمَّةً؟', en: 'Why are festivals important?', start: 'لِأَنَّهَا …', more: '… وَتَجْمَعُ النَّاسَ' },
    { q: 'كَيْفَ نَحْتَرِمُ احْتِفَالَاتِ الآخَرِينَ؟', en: 'How do we respect others’ celebrations?', start: 'نُهَنِّئُهُمْ … / نَتَعَرَّفُ عَلَى …', more: '…' },
  ],
  card: {
    title: 'Role-play card — reporting on a cultural festival', ar: 'تَقْرِيرٌ عَنْ مِهْرَجَانٍ', you: 'a young reporter who attended', them: 'the editor of the school magazine',
    tasks: [
      { ex: 'أَيَّ مِهْرَجَانٍ حَضَرْتَ؟', task: 'Name + place.', plan: 'المِهْرَجَانُ ← حَضَرْتُ مِهْرَجَانَ … فِي …', model: 'حَضَرْتُ مِهْرَجَانَ جَرَشَ لِلثَّقَافَةِ وَالفُنُونِ فِي الأُرْدُنِّ.', modelEn: 'I attended the Jerash Festival of Culture and Arts in Jordan.' },
      { ex: 'مَاذَا شَاهَدْتَ؟', task: 'Two past details.', plan: 'شَاهَدْتُ ← شَاهَدْتُ … وَسَمِعْتُ …', model: 'شَاهَدْتُ عُرُوضًا رَاقِصَةً بِالزِّيِّ التَّقْلِيدِيِّ، وَسَمِعْتُ فِرْقَةً مِنْ تُونِسَ.', modelEn: 'I watched dance performances in traditional dress, and heard a band from Tunisia.' },
      { ex: 'مَنْ كَانَ هُنَاكَ؟', task: 'Diversity, precisely.', plan: '', model: 'كَانَ هُنَاكَ أُرْدُنِيُّونَ مِنْ كُلِّ الطَّوَائِفِ، وَسُيَّاحٌ مِنْ بُلْدَانٍ كَثِيرَةٍ.', modelEn: 'There were Jordanians of every community, and tourists from many countries.' },
      { unexpected: true, ex: 'مَا رَأْيُكَ فِي المِهْرَجَانِ؟', task: 'Balanced judgement.', plan: '', model: 'مِنْ نَاحِيَةٍ كَانَ مُزْدَحِمًا، وَمِنْ نَاحِيَةٍ أُخْرَى كَانَ فُرْصَةً رَائِعَةً لِلتَّعَارُفِ.', modelEn: 'On one hand it was crowded; on the other, it was a wonderful chance to meet people.' },
    ],
    girl: 'editor to a girl: حَضَرْتِ · شَاهَدْتِ · رَأْيُكِ',
    notes: 'Precise, respectful vocabulary: kanīsa (church) · kanīs (synagogue) · quddās (mass) · ṭāʾifa (community).',
  },
  talk: {
    title: 'One minute: a diverse region', ar: 'مِنْطَقَةٌ مُتَنَوِّعَةٌ',
    text: 'Talk for one minute about diversity in the Arab world: faith communities, one celebration beyond Islam, one cultural festival, and a balanced view.',
    routes: {
      core: 'Name two communities and one celebration accurately.',
      develop: 'Add a festival you attended or read about (past).',
      stretch: 'Add مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى … and عَلَى الرَّغْمِ مِنْ أَنَّ …',
    },
  },
  builder: [
    { en: 'Christians in Egypt celebrate Christmas in January.', cols: [['يَحْتَفِلُ المَسِيحِيُّونَ فِي مِصْرَ', 'يَحْتَفِلُونَ المَسِيحِيُّونَ فِي مِصْرَ'], ['بِعِيدِ المِيلَادِ', 'عِيدَ المِيلَادِ'], ['فِي شَهْرِ يَنَايِرَ.', 'فِي شَهْرُ يَنَايِرَ.']], key: [0, 0, 0], why: 'يَحْتَفِلُ بِ…; verb first stays singular.' },
    { en: 'I attended a festival and watched performances.', cols: [['حَضَرْتُ مِهْرَجَانًا', 'حَضَرْتُ مِهْرَجَانٌ'], ['وَشَاهَدْتُ', 'وَأُشَاهِدُ'], ['عُرُوضًا رَائِعَةً.', 'عُرُوضٌ رَائِعَةٌ.']], key: [0, 0, 0], why: 'Past narration; objects in -an.' },
    { en: 'Although the communities are different, they live together.', cols: [['عَلَى الرَّغْمِ مِنْ أَنَّ', 'عَلَى الرَّغْمِ'], ['الطَّوَائِفَ مُخْتَلِفَةٌ،', 'الطَّوَائِفُ مُخْتَلِفَةٌ،'], ['فَإِنَّهَا تَعِيشُ مَعًا.', 'فَإِنَّهُمْ تَعِيشُ مَعًا.']], key: [0, 0, 0], why: 'أَنَّ + -a; non-human plural → هَا + f. verb.' },
  ],
  errors: [
    { wrong: 'يُصَلِّي اليَهُودُ فِي الكَنِيسَةِ.', hint: 'Precise vocabulary.', right: 'يُصَلِّي اليَهُودُ فِي الكَنِيسِ.', why: 'كَنِيسٌ = synagogue; كَنِيسَةٌ = church.' },
    { wrong: 'كُلُّ العَرَبِ مُسْلِمُونَ.', hint: 'Accurate?', right: 'أَغْلَبُ العَرَبِ مُسْلِمُونَ، وَهُنَاكَ مَسِيحِيُّونَ وَأَقَلِّيَّاتٌ أُخْرَى.', why: 'The region is multi-faith.' },
    { wrong: 'حَضَرْتُ المِهْرَجَانَ وَأُشَاهِدُ العُرُوضَ.', hint: 'Keep one tense.', right: 'حَضَرْتُ المِهْرَجَانَ وَشَاهَدْتُ العُرُوضَ.', why: 'A past story stays in the past.' },
  ],
  task: {
    title: 'Celebrating diversity — a balanced paragraph', ar: 'نَحْتَفِلُ بِالتَّنَوُّعِ',
    text: 'Write a balanced paragraph (about 60–80 words) for the school’s Diversity Week. Include: • two faith communities in the Arab world, named precisely • one celebration beyond Islam • one festival you attended or read about (past) • مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى … • your view on why diversity matters.',
    phrases: [['فِي العَالَمِ العَرَبِيِّ طَوَائِفُ مُخْتَلِفَةٌ، مِثْلُ …', 'there are different communities in the Arab world, like …'], ['يَحْتَفِلُ … بِ… فِي …', '… celebrate … in …'], ['حَضَرْتُ / قَرَأْتُ عَنْ مِهْرَجَانِ …', 'I attended / read about the … festival'], ['مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', 'on one hand … on the other …']],
    coreFrames: [
      { ar: 'فِي العَالَمِ العَرَبِيِّ ______ وَ ______ .', en: 'In the Arab world there are … and …' },
      { ar: 'يَحْتَفِلُ ______ بِ______ فِي ______ .', en: '… celebrate … in …' },
      { ar: 'حَضَرْتُ ______ ، وَشَاهَدْتُ ______ .', en: 'I attended …, and watched …' },
      { ar: 'فِي رَأْيِي التَّنَوُّعُ مُهِمٌّ، لِأَنَّ ______ .', en: 'In my opinion diversity matters, because …' },
    ],
    developFrames: [
      { ar: 'مِنْ نَاحِيَةٍ ______ ، وَمِنْ نَاحِيَةٍ أُخْرَى ______ .', en: 'On one hand …, on the other …' },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .', en: 'Although …, …' },
    ],
    bank: ['عِيدُ المِيلَادِ', 'كَنِيسَةٌ · قُدَّاسٌ', 'كَنِيسٌ يَهُودِيٌّ', 'طَائِفَةٌ · أَقَلِّيَّةٌ', 'مِهْرَجَانٌ · عُرُوضٌ', 'زِيٌّ تَقْلِيدِيٌّ', 'مِنْ نَاحِيَةٍ أُخْرَى', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
    model: {
      text: 'فِي العَالَمِ العَرَبِيِّ يَعِيشُ مُسْلِمُونَ وَمَسِيحِيُّونَ، وَهُنَاكَ أَيْضًا أَقَلِّيَّاتٌ صَغِيرَةٌ. يَحْتَفِلُ المَسِيحِيُّونَ فِي مِصْرَ بِعِيدِ المِيلَادِ فِي يَنَايِرَ، وَيَذْهَبُونَ إِلَى القُدَّاسِ فِي الكَنِيسَةِ. فِي الصَّيْفِ المَاضِي حَضَرْتُ مِهْرَجَانَ جَرَشَ فِي الأُرْدُنِّ، وَشَاهَدْتُ عُرُوضًا بِالزِّيِّ التَّقْلِيدِيِّ. مِنْ نَاحِيَةٍ، تَخْتَلِفُ الطَّوَائِفُ فِي عَادَاتِهَا، وَمِنْ نَاحِيَةٍ أُخْرَى، يُهَنِّئُ الجِيرَانُ بَعْضُهُمْ بَعْضًا فِي الأَعْيَادِ. فِي رَأْيِي التَّنَوُّعُ مُهِمٌّ، لِأَنَّهُ يُعَلِّمُنَا الاحْتِرَامَ وَيَجْعَلُ ثَقَافَتَنَا أَغْنَى.',
      en: '“In the Arab world Muslims and Christians live together, and there are also small minorities. Christians in Egypt celebrate Christmas in January and go to mass at church. Last summer I attended the Jerash Festival in Jordan, and watched performances in traditional dress. On one hand, communities differ in their customs; on the other hand, neighbours congratulate each other at festivals. In my opinion diversity matters, because it teaches us respect and makes our culture richer.”',
      find: ['يَحْتَفِلُ المَسِيحِيُّونَ', 'حَضَرْتُ مِهْرَجَانَ', 'وَمِنْ نَاحِيَةٍ أُخْرَى', 'فِي رَأْيِي التَّنَوُّعُ'],
    },
  },
  checkCore: 'name communities and places of worship precisely?',
  checkDevelop: 'narrate a festival in the past and give a balanced view?',
});
