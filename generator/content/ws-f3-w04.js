'use strict';
/* Apply Workshop · F3-W04 · F3-L07 (my neighbourhood) + F3-L08 (describing my bedroom). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f3-w04', pair: ['f3-l07', 'f3-l08'],
  title: 'Welcome, Exchange Student!', arShort: 'أَهْلًا بِالطَّالِبِ الضَّيْفِ',
  focus: 'Students join the neighbourhood and the bedroom: an exchange student is coming to stay, so they explain the way from the station, say what is near and far, describe the room the guest will share, and write a welcome email that uses both lessons.',
  dialogue: {
    title: 'The guest arrives', ar: 'وَصَلَ الضَّيْفُ',
    lines: [
      ['A', 'هَلِ البَيْتُ قَرِيبٌ مِنَ المَحَطَّةِ؟', 'Is the house near the station?'],
      ['B', 'نَعَمْ، امْشِ فِي الشَّارِعِ، ثُمَّ خُذْ أَوَّلَ شَارِعٍ عَلَى اليَمِينِ.', 'Yes — walk along the street, then take the first street on the right.'],
      ['A', 'مَاذَا يُوجَدُ فِي الحَيِّ؟', 'What is there in the neighbourhood?'],
      ['B', 'يُوجَدُ مَسْجِدٌ بِجَانِبِ البَيْتِ، وَالحَدِيقَةُ العَامَّةُ مُقَابِلَ المَدْرَسَةِ.', 'There is a mosque next to the house, and the park is opposite the school.'],
      ['A', 'وَكَيْفَ غُرْفَتُكَ؟', 'And what is your room like?'],
      ['B', 'غُرْفَتِي وَاسِعَةٌ وَمُضِيئَةٌ. فِيهَا سَرِيرَانِ وَخِزَانَةٌ زَرْقَاءُ.', 'My room is spacious and bright. In it there are two beds and a blue wardrobe.'],
    ],
    notes: 'Places, positions and directions come from F3-L07; the bedroom with feminine adjectives and colours from F3-L08.',
  },
  card: {
    title: 'Role-play card — a phone call before the visit', ar: 'مُكَالَمَةٌ قَبْلَ الزِّيَارَةِ', you: 'the host student', them: 'the exchange student',
    mix: 'places near and far, positions and directions (F3-L07) with the bedroom: adjectives, colours and positions (F3-L08)',
    tasks: [
      { ex: 'هَلْ بَيْتُكَ قَرِيبٌ مِنَ المَحَطَّةِ؟', task: 'Say near or far.', plan: 'هَلْ ← نَعَمْ، بَيْتِي قَرِيبٌ مِنْ … / لَا، بَعِيدٌ عَنْ …', model: 'نَعَمْ، بَيْتِي قَرِيبٌ مِنَ المَحَطَّةِ.', modelEn: 'Yes, my house is near the station.' },
      { ex: 'كَيْفَ أَصِلُ إِلَى بَيْتِكَ؟', task: 'Give two directions.', plan: 'كَيْفَ ← امْشِ … ثُمَّ خُذْ …', model: 'امْشِ مُسْتَقِيمًا، ثُمَّ خُذِ الشَّارِعَ الثَّانِيَ عَلَى اليَسَارِ.', modelEn: 'Walk straight on, then take the second street on the left.' },
      { ex: 'مَاذَا يُوجَدُ قَرِيبًا مِنْ بَيْتِكَ؟', task: 'Name two places and where they are.', plan: 'مَاذَا ← يُوجَدُ … بِجَانِبِ … وَ… مُقَابِلَ …', model: 'تُوجَدُ صَيْدَلِيَّةٌ بِجَانِبِ البَيْتِ، وَمَكْتَبَةٌ مُقَابِلَ المَسْجِدِ.', modelEn: 'There is a pharmacy next to the house, and a library opposite the mosque.' },
      { ex: 'كَيْفَ غُرْفَتُكَ؟', task: 'Describe the room with three adjectives.', plan: 'كَيْفَ ← غُرْفَتِي … وَ… ، لٰكِنَّهَا …', model: 'غُرْفَتِي مُرِيحَةٌ وَنَظِيفَةٌ، لٰكِنَّهَا صَغِيرَةٌ قَلِيلًا.', modelEn: 'My room is comfortable and clean, but it is a little small.' },
      { unexpected: true, ex: 'أَيْنَ أَضَعُ حَقِيبَتِي؟', task: 'Say where the guest can put the bag.', plan: 'أَيْنَ ← ضَعْهَا … تَحْتَ / بِجَانِبِ …', model: 'ضَعْهَا بِجَانِبِ الخِزَانَةِ، تَحْتَ النَّافِذَةِ.', modelEn: 'Put it next to the wardrobe, under the window.' },
    ],
    girl: 'هَلْ بَيْتُكِ قَرِيبٌ …؟ · كَيْفَ غُرْفَتُكِ؟ — directions to a girl: امْشِي · خُذِي',
  },
  talk: {
    title: 'From my street to my room', ar: 'مِنْ شَارِعِي إِلَى غُرْفَتِي',
    text: 'Talk for 30–45 seconds: name three places in your neighbourhood and where they are, say one place that is near and one that is far, then describe your bedroom (size, two adjectives, three objects with colours).',
    routes: {
      core: 'فِي حَيِّي يُوجَدُ … · غُرْفَتِي … وَ…',
      develop: 'Use positions: بِجَانِبِ · مُقَابِلَ · أَمَامَ — and colours that agree.',
      stretch: 'Add a direction (امْشِ … ثُمَّ …) and what you do in your room (أَنَامُ · أَدْرُسُ · أَقْرَأُ).',
    },
    phrases: [['فِي حَيِّي يُوجَدُ … وَتُوجَدُ …', 'in my area there is …'], ['… قَرِيبٌ مِنْ … · بَعِيدٌ عَنْ …', '… near … · far from …'], ['غُرْفَتِي وَاسِعَةٌ وَمُضِيئَةٌ', 'my room is spacious and bright'], ['خِزَانَةٌ زَرْقَاءُ · سَرِيرٌ أَبْيَضُ', 'a blue wardrobe · a white bed']],
  },
  task: {
    title: 'A welcome email to the exchange student', ar: 'رِسَالَةُ تَرْحِيبٍ',
    text: 'Write an email (about 45–65 words) to the exchange student. Include: • a greeting • three places in your neighbourhood and where they are • one place near and one place far • the way from the station • your bedroom: size, two adjectives, three objects with colours • a polite closing.',
    range: [40, 85],
    phrases: [['فِي حَيِّي يُوجَدُ … وَتُوجَدُ …', 'in my area there is … and there is …'], ['البَيْتُ قَرِيبٌ مِنْ … ، لٰكِنَّهُ بَعِيدٌ عَنْ …', 'the house is near … but far from …'], ['مِنَ المَحَطَّةِ: امْشِ … ثُمَّ خُذْ …', 'from the station: walk … then take …'], ['غُرْفَتِي … وَ… ، وَفِيهَا …', 'my room is … and …, and in it there is …']],
    coreFrames: [
      { ar: 'أَهْلًا يَا ______ !', en: 'Hello, …!' },
      { ar: 'فِي حَيِّي يُوجَدُ ______ ، وَتُوجَدُ ______ .', en: 'In my area there is … and there is …' },
      { ar: 'البَيْتُ قَرِيبٌ مِنْ ______ .', en: 'The house is near …' },
      { ar: 'غُرْفَتِي ______ وَ ______ .', en: 'My room is … and …' },
      { ar: 'فِيهَا سَرِيرٌ ______ وَخِزَانَةٌ ______ .', en: 'In it there is a … bed and a … wardrobe.' },
    ],
    developFrames: [
      { ar: 'مِنَ المَحَطَّةِ: امْشِ ______ ، ثُمَّ خُذْ ______ .', en: 'From the station: walk …, then take …' },
      { ar: '______ بِجَانِبِ / مُقَابِلَ ______ .', en: '… is next to / opposite …' },
      { ar: 'لٰكِنَّ ______ بَعِيدٌ عَنِ البَيْتِ.', en: 'But … is far from the house.' },
    ],
    bank: ['مَسْجِدٌ · مَكْتَبَةٌ', 'صَيْدَلِيَّةٌ · مَحَطَّةٌ', 'بِجَانِبِ · مُقَابِلَ · أَمَامَ', 'قَرِيبٌ مِنْ · بَعِيدٌ عَنْ', 'امْشِ · خُذْ · ثُمَّ', 'وَاسِعَةٌ · مُرِيحَةٌ', 'نَظِيفَةٌ · مُضِيئَةٌ', 'أَزْرَقُ · زَرْقَاءُ'],
    model: {
      text: 'أَهْلًا يَا سَامِي! بَيْتِي قَرِيبٌ مِنَ المَحَطَّةِ: امْشِ مُسْتَقِيمًا، ثُمَّ خُذْ أَوَّلَ شَارِعٍ عَلَى اليَمِينِ. فِي حَيِّي يُوجَدُ مَسْجِدٌ بِجَانِبِ البَيْتِ، وَتُوجَدُ مَكْتَبَةٌ مُقَابِلَ المَدْرَسَةِ، لٰكِنَّ المُسْتَشْفَى بَعِيدٌ. غُرْفَتِي وَاسِعَةٌ وَمُضِيئَةٌ. فِيهَا سَرِيرَانِ أَبْيَضَانِ، وَخِزَانَةٌ زَرْقَاءُ، وَسَجَّادَةٌ حَمْرَاءُ تَحْتَ النَّافِذَةِ. إِلَى اللِّقَاءِ قَرِيبًا!',
      en: '“Hello, Sami! My house is near the station: walk straight on, then take the first street on the right. In my area there is a mosque next to the house, and there is a library opposite the school, but the hospital is far. My room is spacious and bright. In it there are two white beds, a blue wardrobe and a red rug under the window. See you soon!”',
      find: ['قَرِيبٌ مِنَ المَحَطَّةِ', 'مُقَابِلَ المَدْرَسَةِ', 'وَاسِعَةٌ وَمُضِيئَةٌ', 'خِزَانَةٌ زَرْقَاءُ'],
    },
  },
});
