'use strict';
/* Apply Workshop · F6-W01 · F6-L01 (places in town) + F6-L02 (locating places: maps, distance and position). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f6-w01', pair: ['f6-l01', 'f6-l02'],
  title: 'At the Tourist Information Desk', arShort: 'فِي مَكْتَبِ الاسْتِعْلَامَاتِ السِّيَاحِيَّةِ',
  focus: 'Students join places in town with positions and distance: at a tourist information desk they say what there is (and isn’t) in the town, where each place is on the map, what is near and far, and then write a visitor’s guide to their town centre.',
  dialogue: {
    title: 'A visitor asks', ar: 'يَسْأَلُ الزَّائِرُ',
    lines: [
      ['A', 'لَوْ سَمَحْتِ، هَلْ يُوجَدُ مَتْحَفٌ فِي المَدِينَةِ؟', 'Excuse me, is there a museum in the town?'],
      ['B', 'نَعَمْ، يُوجَدُ مَتْحَفٌ فِي وَسَطِ المَدِينَةِ، مُقَابِلَ المَكْتَبَةِ.', 'Yes, there is a museum in the town centre, opposite the library.'],
      ['A', 'هَلْ هُوَ قَرِيبٌ مِنَ المَحَطَّةِ؟', 'Is it near the station?'],
      ['B', 'نَعَمْ، هُوَ قَرِيبٌ جِدًّا، بَيْنَ المَحَطَّةِ وَالسُّوقِ.', 'Yes, it is very near, between the station and the market.'],
      ['A', 'وَهَلْ يُوجَدُ مَطَارٌ؟', 'And is there an airport?'],
      ['B', 'لَا، لَا يُوجَدُ مَطَارٌ هُنَا. المَطَارُ بَعِيدٌ عَنِ المَدِينَةِ.', 'No, there is no airport here. The airport is far from the town.'],
    ],
    notes: 'Places with يُوجَدُ / تُوجَدُ / لَا يُوجَدُ come from F6-L01; positions + genitive (مُقَابِلَ المَكْتَبَةِ · بَيْنَ … وَ…) and قَرِيبٌ مِنْ / بَعِيدٌ عَنْ from F6-L02.',
  },
  card: {
    title: 'Role-play card — at the information desk', ar: 'فِي مَكْتَبِ الاسْتِعْلَامَاتِ', you: 'the information officer', them: 'a tourist',
    mix: 'places with يُوجَدُ / تُوجَدُ / لَا يُوجَدُ (F6-L01) with positions, near / far and agreement (F6-L02)',
    tasks: [
      { ex: 'مَاذَا يُوجَدُ فِي وَسَطِ المَدِينَةِ؟', task: 'Name three places.', plan: 'مَاذَا ← يُوجَدُ … وَتُوجَدُ … وَ…', model: 'يُوجَدُ مَتْحَفٌ وَسُوقٌ، وَتُوجَدُ مَكْتَبَةٌ كَبِيرَةٌ.', modelEn: 'There is a museum and a market, and there is a big library.' },
      { ex: 'أَيْنَ الصَّيْدَلِيَّةُ؟', task: 'Give a position.', plan: 'أَيْنَ ← الصَّيْدَلِيَّةُ بِجَانِبِ / مُقَابِلَ …', model: 'الصَّيْدَلِيَّةُ بِجَانِبِ المُسْتَشْفَى، عَلَى يَمِينِ البَنْكِ.', modelEn: 'The pharmacy is next to the hospital, to the right of the bank.' },
      { ex: 'هَلِ الحَدِيقَةُ العَامَّةُ قَرِيبَةٌ مِنْ هُنَا؟', task: 'Say near or far (feminine agreement).', plan: 'هَلْ ← نَعَمْ، هِيَ قَرِيبَةٌ … / لَا، هِيَ بَعِيدَةٌ …', model: 'لَا، هِيَ بَعِيدَةٌ قَلِيلًا، خَارِجَ وَسَطِ المَدِينَةِ.', modelEn: 'No, it is a little far, outside the town centre.' },
      { ex: 'هَلْ يُوجَدُ مَطْعَمٌ عَرَبِيٌّ؟', task: 'Answer and say where.', plan: 'هَلْ ← نَعَمْ، يُوجَدُ … بَيْنَ … وَ…', model: 'نَعَمْ، يُوجَدُ مَطْعَمٌ لُبْنَانِيٌّ بَيْنَ السُّوقِ وَالمَحَطَّةِ.', modelEn: 'Yes, there is a Lebanese restaurant between the market and the station.' },
      { unexpected: true, ex: 'مَا أَجْمَلُ مَكَانٍ فِي المَدِينَةِ؟', task: 'Recommend a place with a reason.', plan: 'مَا ← … لِأَنَّ …', model: 'المَتْحَفُ، لِأَنَّهُ قَدِيمٌ وَجَمِيلٌ، وَالدُّخُولُ مَجَّانِيٌّ.', modelEn: 'The museum, because it is old and beautiful, and entry is free.' },
    ],
    girl: 'when the tourist is a girl the officer says: لَوْ سَمَحْتِ … هَلْ تُرِيدِينَ خَرِيطَةً؟',
  },
  talk: {
    title: 'A map of my town centre', ar: 'خَرِيطَةُ مَدِينَتِي',
    text: 'Talk for 30–45 seconds as if you are showing a map of your town centre: five places, where they are (use three different position words), one place that is not there, and one place near and one far from the station.',
    routes: {
      core: 'فِي مَدِينَتِي يُوجَدُ … وَتُوجَدُ … · لَا يُوجَدُ …',
      develop: 'Use three positions: بِجَانِبِ · مُقَابِلَ · بَيْنَ … وَ…',
      stretch: 'Add قَرِيبٌ / قَرِيبَةٌ مِنْ · بَعِيدٌ / بَعِيدَةٌ عَنْ with the right agreement, and your favourite place.',
    },
    phrases: [['فِي مَدِينَتِي يُوجَدُ … وَتُوجَدُ …', 'in my town there is …'], ['لَا يُوجَدُ …', 'there is no …'], ['… بَيْنَ … وَ… · مُقَابِلَ …', '… between … and … · opposite …'], ['قَرِيبَةٌ مِنْ · بَعِيدَةٌ عَنْ', 'near · far from (f.)']],
  },
  task: {
    title: 'A visitor’s guide to my town centre', ar: 'دَلِيلُ الزَّائِرِ',
    text: 'Write a short visitor’s guide (about 45–65 words). Include: • the name of your town and whether it is a city, town or village • five places with يُوجَدُ / تُوجَدُ • one place that is not there • where three places are, with different position words • one place near and one far from the station • the place you recommend and why.',
    range: [40, 85],
    phrases: [['أَهْلًا بِكُمْ فِي مَدِينَةِ …', 'welcome to the town of …'], ['فِي وَسَطِ المَدِينَةِ يُوجَدُ … وَتُوجَدُ …', 'in the town centre there is …'], ['… بَيْنَ … وَ… · … مُقَابِلَ …', '… between … and … · … opposite …'], ['أَنْصَحُكُمْ بِزِيَارَةِ … لِأَنَّ …', 'I advise you to visit … because …']],
    coreFrames: [
      { ar: 'أَهْلًا بِكُمْ فِي مَدِينَةِ ______ !', en: 'Welcome to the town of …!' },
      { ar: 'فِي وَسَطِ المَدِينَةِ يُوجَدُ ______ وَتُوجَدُ ______ .', en: 'In the town centre there is … and …' },
      { ar: 'لَا يُوجَدُ ______ .', en: 'There is no …' },
      { ar: '______ بِجَانِبِ ______ .', en: '… is next to …' },
      { ar: '______ قَرِيبٌ مِنَ المَحَطَّةِ.', en: '… is near the station.' },
    ],
    developFrames: [
      { ar: '______ بَيْنَ ______ وَ ______ .', en: '… is between … and …' },
      { ar: 'لٰكِنَّ ______ بَعِيدٌ / بَعِيدَةٌ عَنْهَا.', en: 'But … is far from it.' },
      { ar: 'أَنْصَحُكُمْ بِزِيَارَةِ ______ لِأَنَّ ______ .', en: 'I advise you to visit … because …' },
    ],
    bank: ['مَتْحَفٌ · سُوقٌ', 'مَكْتَبَةٌ · صَيْدَلِيَّةٌ', 'مَحَطَّةٌ · مَطَارٌ', 'يُوجَدُ · تُوجَدُ · لَا يُوجَدُ', 'بِجَانِبِ · مُقَابِلَ', 'بَيْنَ … وَ…', 'فِي وَسَطِ', 'قَرِيبٌ مِنْ · بَعِيدٌ عَنْ'],
    model: {
      text: 'أَهْلًا بِكُمْ فِي مَدِينَةِ يُورْك! هِيَ مَدِينَةٌ تَارِيخِيَّةٌ. فِي وَسَطِ المَدِينَةِ يُوجَدُ مَتْحَفٌ كَبِيرٌ وَسُوقٌ، وَتُوجَدُ مَكْتَبَةٌ جَمِيلَةٌ. المَتْحَفُ مُقَابِلَ المَكْتَبَةِ، وَالسُّوقُ بَيْنَ المَحَطَّةِ وَالمَسْجِدِ. لَا يُوجَدُ مَطَارٌ فِي المَدِينَةِ. المَحَطَّةُ قَرِيبَةٌ مِنَ المَتْحَفِ، لٰكِنَّ الحَدِيقَةَ العَامَّةَ بَعِيدَةٌ عَنْهَا. أَنْصَحُكُمْ بِزِيَارَةِ المَتْحَفِ لِأَنَّهُ قَدِيمٌ وَمُمْتِعٌ.',
      en: '“Welcome to the city of York! It is a historic city. In the city centre there is a big museum and a market, and there is a beautiful library. The museum is opposite the library, and the market is between the station and the mosque. There is no airport in the city. The station is near the museum, but the public park is far from it. I advise you to visit the museum because it is old and interesting.”',
      find: ['يُوجَدُ مَتْحَفٌ كَبِيرٌ', 'مُقَابِلَ المَكْتَبَةِ', 'لَا يُوجَدُ مَطَارٌ', 'بَعِيدَةٌ عَنْهَا'],
    },
  },
});
