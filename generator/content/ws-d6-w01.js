'use strict';
/* Apply Workshop · D6-W01 · D6-L01 (countries, nationalities and languages) + D6-L02 (cultural customs). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd6-w01', pair: ['d6-l01', 'd6-l02'],
  title: 'The Arab World Culture Fair', arShort: 'مَعْرِضُ ثَقَافَاتِ العَالَمِ العَرَبِيِّ',
  focus: 'Students join countries and nationalities with customs: at a school culture fair each pair runs a country stand — location, capital, nationality in three forms, languages described accurately — and presents two customs fairly (custom verbs + prepositions, hedges, بَيْنَمَا), then writes the stand’s information card.',
  dialogue: {
    title: 'At the Jordan stand', ar: 'فِي جَنَاحِ الأُرْدُنِّ',
    lines: [
      ['A', 'أَيْنَ يَقَعُ الأُرْدُنُّ؟', 'Where is Jordan?'],
      ['B', 'يَقَعُ فِي غَرْبِ آسْيَا، وَعَاصِمَتُهُ عَمَّانُ. الرَّجُلُ أُرْدُنِّيٌّ، وَالمَرْأَةُ أُرْدُنِّيَّةٌ.', 'It is in western Asia, and its capital is Amman. A man is Jordanian (m.), and a woman is Jordanian (f.).'],
      ['A', 'مَا اللُّغَةُ هُنَاكَ؟', 'What is the language there?'],
      ['B', 'اللُّغَةُ الرَّسْمِيَّةُ العَرَبِيَّةُ، وَيَتَكَلَّمُ كَثِيرٌ مِنَ النَّاسِ الإِنْجِلِيزِيَّةَ أَيْضًا.', 'The official language is Arabic, and many people speak English too.'],
      ['A', 'وَمَا العَادَاتُ المُهِمَّةُ؟', 'And what are the important customs?'],
      ['B', 'فِي كَثِيرٍ مِنَ العَائِلَاتِ يَحْرِصُونَ عَلَى الضِّيَافَةِ، وَيُقَدِّمُونَ القَهْوَةَ لِلضُّيُوفِ.', 'In many families they take care to be hospitable, and they serve coffee to guests.'],
    ],
    notes: 'Country, capital and nisba (أُرْدُنِّيٌّ · أُرْدُنِّيَّةٌ) come from D6-L01 — note الأُرْدُنُّ is masculine (يَقَعُ · عَاصِمَتُهُ). Custom verbs with prepositions (يَحْرِصُونَ عَلَى) and the hedge (فِي كَثِيرٍ مِنَ العَائِلَاتِ) from D6-L02.',
  },
  card: {
    title: 'Role-play card — visitors at your country stand', ar: 'زُوَّارُ الجَنَاحِ', you: 'the stand presenter', them: 'a visitor to the fair',
    mix: 'location, capital, nationality and languages described accurately (D6-L01) with customs, values, comparisons and hedges (D6-L02)',
    tasks: [
      { ex: 'أَيْنَ تَقَعُ هٰذِهِ الدَّوْلَةُ؟ وَمَا عَاصِمَتُهَا؟', task: 'Location + capital (watch the gender of the country).', plan: 'أَيْنَ ← تَقَعُ … فِي … ، وَعَاصِمَتُهَا …', model: 'تَقَعُ تُونِسُ فِي شَمَالِ إِفْرِيقْيَا، وَعَاصِمَتُهَا مَدِينَةُ تُونِسَ.', modelEn: 'Tunisia is in North Africa, and its capital is the city of Tunis.' },
      { ex: 'مَا جِنْسِيَّةُ النَّاسِ هُنَاكَ؟', task: 'The nationality in three forms.', plan: 'مَا ← الرَّجُلُ … · المَرْأَةُ … · النَّاسُ …', model: 'الرَّجُلُ تُونِسِيٌّ، وَالمَرْأَةُ تُونِسِيَّةٌ، وَالنَّاسُ تُونِسِيُّونَ.', modelEn: 'A man is Tunisian, a woman is Tunisian, and the people are Tunisians.' },
      { ex: 'مَا اللُّغَاتُ فِيهَا؟', task: 'Describe the languages accurately.', plan: '______________', model: 'اللُّغَةُ الرَّسْمِيَّةُ العَرَبِيَّةُ، وَلِلنَّاسِ لَهْجَةٌ تُونِسِيَّةٌ، وَيَتَكَلَّمُ كَثِيرٌ مِنْهُمُ الفَرَنْسِيَّةَ.', modelEn: 'The official language is Arabic, people have a Tunisian dialect, and many of them speak French.' },
      { ex: 'مَا عَادَةٌ مُهِمَّةٌ هُنَاكَ؟', task: 'A custom with a verb + preposition and a hedge.', plan: '______________', model: 'فِي بَعْضِ العَائِلَاتِ يَحْرِصُونَ عَلَى زِيَارَةِ الأَقَارِبِ يَوْمَ الجُمُعَةِ.', modelEn: 'In some families they make a point of visiting relatives on Friday.' },
      { unexpected: true, ex: 'هَلْ هٰذَا مِثْلُ بِرِيطَانِيَا؟', task: 'A fair comparison with بَيْنَمَا.', plan: '______________', model: 'لَيْسَ دَائِمًا؛ هُنَاكَ يَزُورُونَ الأَقَارِبَ كَثِيرًا، بَيْنَمَا فِي بِرِيطَانِيَا يَلْتَقِي النَّاسُ فِي العُطَلِ غَالِبًا.', modelEn: 'Not always; there they visit relatives often, whereas in Britain people often meet in the holidays.' },
    ],
    girl: 'when the presenter is a girl, the visitor says: هَلْ يُمْكِنُكِ أَنْ تُخْبِرِينِي …؟',
  },
  talk: {
    title: 'My country stand in one minute', ar: 'جَنَاحِي فِي دَقِيقَةٍ',
    text: 'Present your country stand for one minute: where the country is and its capital, the nationality in three forms, its languages (accurately), one famous place, two customs with custom verbs and hedges, and a fair comparison with Britain.',
    routes: {
      core: 'تَقَعُ … فِي … · عَاصِمَتُهَا … · الرَّجُلُ … وَالمَرْأَةُ …',
      develop: 'Add the languages accurately and نَحْرِصُ عَلَى … / يَتَمَسَّكُونَ بِ…',
      stretch: 'Add hedges (فِي بَعْضِ العَائِلَاتِ · لَيْسَ دَائِمًا) and بَيْنَمَا.',
    },
  },
  task: {
    title: 'Our stand’s information card', ar: 'بِطَاقَةُ الجَنَاحِ',
    text: 'Write the information card (about 60–80 words) for your country stand. Include: • where it is and its capital • the nationality in three forms • its languages, described accurately • one famous place • two customs with custom verbs and prepositions • a fair comparison with بَيْنَمَا • at least two hedges.',
    range: [50, 100],
    phrases: [['تَقَعُ … فِي … ، وَعَاصِمَتُهَا …', '… is in …, and its capital is …'], ['الرَّجُلُ مِصْرِيٌّ · المَرْأَةُ مِصْرِيَّةٌ · النَّاسُ مِصْرِيُّونَ', 'nationality: m. · f. · plural'], ['اللُّغَةُ الرَّسْمِيَّةُ … ، وَيَتَكَلَّمُ بَعْضُ النَّاسِ …', 'the official language is …, and some people speak …'], ['فِي بَعْضِ العَائِلَاتِ … · بَيْنَمَا …', 'in some families … · whereas …']],
    coreFrames: [
      { ar: 'تَقَعُ ______ فِي ______ ، وَعَاصِمَتُهَا ______ .', en: '… is in …, and its capital is …' },
      { ar: 'الرَّجُلُ ______ ، وَالمَرْأَةُ ______ ، وَالنَّاسُ ______ .', en: 'A man is …, a woman is …, and the people are …' },
      { ar: 'اللُّغَةُ الرَّسْمِيَّةُ ______ .', en: 'The official language is …' },
      { ar: 'فِي بَعْضِ العَائِلَاتِ يَحْرِصُونَ عَلَى ______ .', en: 'In some families they make a point of …' },
    ],
    developFrames: [
      { ar: 'مِنْ أَشْهَرِ الأَمَاكِنِ ______ .', en: 'One of the most famous places is …' },
      { ar: '______ ، بَيْنَمَا فِي بِرِيطَانِيَا ______ .', en: '…, whereas in Britain …' },
    ],
    bank: ['تَقَعُ · عَاصِمَتُهَا', 'مِصْرِيٌّ · مِصْرِيَّةٌ · مِصْرِيُّونَ', 'اللُّغَةُ الرَّسْمِيَّةُ', 'لَهْجَةٌ', 'نَتَمَسَّكُ بِ… · نَحْرِصُ عَلَى', 'نَعْتَادُ عَلَى · نَحْتَفِلُ بِ…', 'فِي بَعْضِ العَائِلَاتِ', 'بَيْنَمَا · لَيْسَ دَائِمًا'],
    model: {
      text: 'تَقَعُ تُونِسُ فِي شَمَالِ إِفْرِيقْيَا، وَعَاصِمَتُهَا مَدِينَةُ تُونِسَ. الرَّجُلُ تُونِسِيٌّ، وَالمَرْأَةُ تُونِسِيَّةٌ، وَالنَّاسُ تُونِسِيُّونَ. اللُّغَةُ الرَّسْمِيَّةُ العَرَبِيَّةُ، وَلِلنَّاسِ لَهْجَةٌ خَاصَّةٌ، وَيَتَكَلَّمُ كَثِيرٌ مِنْهُمُ الفَرَنْسِيَّةَ. مِنْ أَشْهَرِ الأَمَاكِنِ مَدِينَةُ قَرْطَاجَ القَدِيمَةُ. فِي كَثِيرٍ مِنَ العَائِلَاتِ يَحْرِصُونَ عَلَى الضِّيَافَةِ، وَيَتَمَسَّكُونَ بِزِيَارَةِ الأَقَارِبِ فِي العِيدِ. هُنَاكَ يَتَنَاوَلُ النَّاسُ العَشَاءَ مُتَأَخِّرًا غَالِبًا، بَيْنَمَا فِي بِرِيطَانِيَا يَتَنَاوَلُونَهُ مُبَكِّرًا، وَلٰكِنْ لَيْسَ دَائِمًا.',
      en: '“Tunisia is in North Africa, and its capital is the city of Tunis. A man is Tunisian, a woman is Tunisian, and the people are Tunisians. The official language is Arabic, people have their own dialect, and many of them speak French. One of the most famous places is the ancient city of Carthage. In many families they make a point of hospitality, and they hold on to visiting relatives at Eid. There people often have dinner late, whereas in Britain they have it early — but not always.”',
      find: ['تَقَعُ تُونِسُ', 'وَالنَّاسُ تُونِسِيُّونَ', 'يَحْرِصُونَ عَلَى', 'بَيْنَمَا فِي بِرِيطَانِيَا'],
    },
  },
});
