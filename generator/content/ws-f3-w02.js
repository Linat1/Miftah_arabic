'use strict';
/* Apply Workshop · F3-W02 · F3-L03 (rooms and parts of the house) + F3-L04 (furniture and household items). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f3-w02', pair: ['f3-l03', 'f3-l04'],
  title: 'A Video Tour of My Home', arShort: 'جَوْلَةٌ فِي بَيْتِي',
  focus: 'Students join rooms and furniture: they give a pen-friend a video tour of their home, say what is on each floor, what is in each room and where things are, give a short talk and write a home-tour script that uses both lessons.',
  dialogue: {
    title: 'On a video call', ar: 'فِي مُكَالَمَةِ فِيدْيُو',
    lines: [
      ['A', 'أَيْنَ أَنْتَ الآنَ؟', 'Where are you now?'],
      ['B', 'أَنَا فِي غُرْفَةِ الجُلُوسِ. هِيَ فِي الطَّابِقِ الأَرْضِيِّ.', 'I am in the living room. It is on the ground floor.'],
      ['A', 'مَاذَا يُوجَدُ فِي الغُرْفَةِ؟', 'What is there in the room?'],
      ['B', 'يُوجَدُ تِلْفَازٌ كَبِيرٌ، وَتُوجَدُ سَجَّادَةٌ جَمِيلَةٌ.', 'There is a big television, and there is a beautiful rug.'],
      ['A', 'وَأَيْنَ غُرْفَةُ نَوْمِكَ؟', 'And where is your bedroom?'],
      ['B', 'فِي الطَّابِقِ الأَوَّلِ. فِيهَا سَرِيرٌ، وَبِجَانِبِ السَّرِيرِ مِصْبَاحٌ.', 'On the first floor. In it there is a bed, and next to the bed there is a lamp.'],
    ],
    notes: 'Rooms and floors (غُرْفَةُ الجُلُوسِ · الطَّابِقُ الأَرْضِيُّ) come from F3-L03; يُوجَدُ / تُوجَدُ + furniture and positions from F3-L04.',
  },
  card: {
    title: 'Role-play card — the home tour', ar: 'جَوْلَةٌ فِي البَيْتِ', you: 'the host', them: 'a visiting pen-friend',
    mix: 'house or flat, rooms and floors (F3-L03) with furniture, يُوجَدُ / تُوجَدُ and positions (F3-L04)',
    tasks: [
      { ex: 'هَلْ تَسْكُنُ فِي بَيْتٍ أَمْ فِي شَقَّةٍ؟', task: 'Say house or flat, and where.', plan: 'هَلْ ← أَسْكُنُ فِي … فِي …', model: 'أَسْكُنُ فِي بَيْتٍ صَغِيرٍ فِي لِيسْتَر.', modelEn: 'I live in a small house in Leicester.' },
      { ex: 'مَاذَا يُوجَدُ فِي الطَّابِقِ الأَرْضِيِّ؟', task: 'Name two or three rooms.', plan: 'مَاذَا ← فِي الطَّابِقِ الأَرْضِيِّ … وَ…', model: 'فِي الطَّابِقِ الأَرْضِيِّ المَطْبَخُ وَغُرْفَةُ الجُلُوسِ وَالحَمَّامُ.', modelEn: 'On the ground floor there are the kitchen, the living room and the bathroom.' },
      { ex: 'مَاذَا يُوجَدُ فِي المَطْبَخِ؟', task: 'Name two items with يُوجَدُ / تُوجَدُ.', plan: 'مَاذَا ← يُوجَدُ … وَتُوجَدُ …', model: 'يُوجَدُ فُرْنٌ، وَتُوجَدُ ثَلَّاجَةٌ كَبِيرَةٌ وَطَاوِلَةٌ.', modelEn: 'There is an oven, and there is a big fridge and a table.' },
      { ex: 'أَيْنَ المِرْآةُ؟', task: 'Say where it is.', plan: 'أَيْنَ ← المِرْآةُ عَلَى / بِجَانِبِ …', model: 'المِرْآةُ عَلَى الحَائِطِ، بِجَانِبِ البَابِ.', modelEn: 'The mirror is on the wall, next to the door.' },
      { unexpected: true, ex: 'مَا غُرْفَتُكَ المُفَضَّلَةُ؟ وَلِمَاذَا؟', task: 'Name your favourite room and give a reason.', plan: 'مَا ← غُرْفَتِي المُفَضَّلَةُ … لِأَنَّهَا …', model: 'غُرْفَتِي المُفَضَّلَةُ غُرْفَةُ الجُلُوسِ لِأَنَّهَا وَاسِعَةٌ وَفِيهَا تِلْفَازٌ.', modelEn: 'My favourite room is the living room because it is spacious and has a television.' },
    ],
    girl: 'هَلْ تَسْكُنِينَ فِي بَيْتٍ أَمْ فِي شَقَّةٍ؟ · مَا غُرْفَتُكِ المُفَضَّلَةُ؟',
  },
  talk: {
    title: 'Room by room', ar: 'غُرْفَةً غُرْفَةً',
    text: 'Talk for 30–45 seconds as if you are walking through your home with a camera: start at the door, name the rooms on each floor, say two things in one room and where they are, and finish in your favourite room.',
    routes: {
      core: 'هٰذَا المَطْبَخُ · فِيهِ … · هٰذِهِ غُرْفَةُ النَّوْمِ · فِيهَا …',
      develop: 'Use يُوجَدُ / تُوجَدُ and one position: عَلَى · تَحْتَ · بِجَانِبِ · أَمَامَ.',
      stretch: 'Add floors (فِي الطَّابِقِ الأَوَّلِ …) and a reason for your favourite room.',
    },
    phrases: [['فِي الطَّابِقِ الأَرْضِيِّ …', 'on the ground floor …'], ['يُوجَدُ … · تُوجَدُ …', 'there is … (m. · f.)'], ['… عَلَى · تَحْتَ · بِجَانِبِ …', '… on · under · next to …'], ['غُرْفَتِي المُفَضَّلَةُ … لِأَنَّهَا …', 'my favourite room … because it …']],
  },
  task: {
    title: 'My home-tour script', ar: 'نَصُّ الجَوْلَةِ',
    text: 'Write the script for a short video tour of your home (about 45–65 words). Include: • house or flat, and where • the rooms on each floor • four items in two rooms with يُوجَدُ / تُوجَدُ • where two items are • your favourite room and why.',
    range: [40, 80],
    phrases: [['أَسْكُنُ فِي بَيْتٍ / شَقَّةٍ فِي …', 'I live in a house / flat in …'], ['فِي الطَّابِقِ الأَرْضِيِّ … ، وَفِي الطَّابِقِ الأَوَّلِ …', 'on the ground floor … and on the first floor …'], ['فِي … يُوجَدُ … وَتُوجَدُ …', 'in … there is … and there is …'], ['غُرْفَتِي المُفَضَّلَةُ … لِأَنَّهَا …', 'my favourite room is … because it …']],
    coreFrames: [
      { ar: 'أَسْكُنُ فِي ______ فِي ______ .', en: 'I live in a … in …' },
      { ar: 'فِي الطَّابِقِ الأَرْضِيِّ ______ وَ ______ .', en: 'On the ground floor there are … and …' },
      { ar: 'فِي المَطْبَخِ يُوجَدُ ______ وَتُوجَدُ ______ .', en: 'In the kitchen there is … and …' },
      { ar: 'فِي غُرْفَةِ نَوْمِي يُوجَدُ ______ .', en: 'In my bedroom there is …' },
      { ar: '______ بِجَانِبِ ______ .', en: '… is next to …' },
    ],
    developFrames: [
      { ar: 'وَفِي الطَّابِقِ الأَوَّلِ ______ .', en: 'And on the first floor …' },
      { ar: 'غُرْفَتِي المُفَضَّلَةُ ______ لِأَنَّهَا ______ .', en: 'My favourite room is … because it is …' },
      { ar: 'عِنْدَنَا ______ أَيْضًا.', en: 'We also have …' },
    ],
    bank: ['غُرْفَةُ النَّوْمِ', 'غُرْفَةُ الجُلُوسِ', 'المَطْبَخُ · الحَمَّامُ', 'يُوجَدُ · تُوجَدُ', 'سَرِيرٌ · طَاوِلَةٌ', 'مِصْبَاحٌ · مِرْآةٌ', 'عَلَى · تَحْتَ · بِجَانِبِ', 'لِأَنَّهَا'],
    model: {
      text: 'أَهْلًا! أَسْكُنُ فِي بَيْتٍ فِي لِيسْتَر. فِي الطَّابِقِ الأَرْضِيِّ المَطْبَخُ وَغُرْفَةُ الجُلُوسِ. فِي المَطْبَخِ يُوجَدُ فُرْنٌ، وَتُوجَدُ ثَلَّاجَةٌ وَطَاوِلَةٌ. وَفِي الطَّابِقِ الأَوَّلِ ثَلَاثُ غُرَفِ نَوْمٍ وَحَمَّامٌ. فِي غُرْفَةِ نَوْمِي يُوجَدُ سَرِيرٌ، وَبِجَانِبِ السَّرِيرِ مِصْبَاحٌ. المِرْآةُ عَلَى الحَائِطِ. غُرْفَتِي المُفَضَّلَةُ غُرْفَةُ الجُلُوسِ لِأَنَّهَا وَاسِعَةٌ وَمُرِيحَةٌ.',
      en: '“Hello! I live in a house in Leicester. On the ground floor there are the kitchen and the living room. In the kitchen there is an oven, and there is a fridge and a table. And on the first floor there are three bedrooms and a bathroom. In my bedroom there is a bed, and next to the bed there is a lamp. The mirror is on the wall. My favourite room is the living room because it is spacious and comfortable.”',
      find: ['فِي الطَّابِقِ الأَرْضِيِّ', 'وَتُوجَدُ ثَلَّاجَةٌ', 'بِجَانِبِ السَّرِيرِ', 'لِأَنَّهَا وَاسِعَةٌ'],
    },
  },
});
