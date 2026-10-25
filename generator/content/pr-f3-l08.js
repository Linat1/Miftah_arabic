'use strict';
/* Practice Room · F3-L08 · Describing my bedroom. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f3-l08',
  arShort: 'غُرْفَتِي',
  grammar: 'ghurfatī + feminine adjectives (wāsiʿa · murattaba · muḍīʾa); colours and sizes that agree; positions; simple actions (anāmu · adrusu · aqraʾu fī …)',
  focus: 'Students run their own speaking and writing practice describing their bedroom: say the bedroom words, act a short dialogue, answer question cards, do a role-play card on a video call with a cousin, give a 30-second bedroom tour, then build, fix and write a connected description of their room.',
  words1: 'Bedroom objects', words2: 'Describing a room',
  dialogue: {
    title: 'Show me your room!', ar: 'أَرِنِي غُرْفَتَكَ!',
    lines: [
      ['A', 'أَرِنِي غُرْفَتَكَ! هَلْ هِيَ كَبِيرَةٌ؟', 'Show me your room! Is it big?'],
      ['B', 'لَا، غُرْفَتِي صَغِيرَةٌ، لٰكِنَّهَا مُرِيحَةٌ وَمُضِيئَةٌ.', 'No, my room is small, but it is comfortable and bright.'],
      ['A', 'مَاذَا يُوجَدُ فِيهَا؟', 'What is in it?'],
      ['B', 'يُوجَدُ سَرِيرٌ أَزْرَقُ، وَتُوجَدُ خِزَانَةٌ بَيْضَاءُ بِجَانِبِ البَابِ.', 'There is a blue bed, and a white wardrobe next to the door.'],
      ['A', 'هَلْ غُرْفَتُكَ مُرَتَّبَةٌ؟', 'Is your room tidy?'],
      ['B', 'أَحْيَانًا! أُرَتِّبُهَا كُلَّ يَوْمِ سَبْتٍ.', 'Sometimes! I tidy it every Saturday.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe YOUR real bedroom — size, two objects with colours, tidy or not.',
  },
  questions: [
    { q: 'كَيْفَ غُرْفَتُكَ؟', en: 'What is your room like?', start: 'غُرْفَتِي … وَ…', more: '… لٰكِنَّهَا …' },
    { q: 'مَا لَوْنُ سَرِيرِكَ؟', en: 'What colour is your bed?', start: 'سَرِيرِي …', more: '… وَالبِطَّانِيَّةُ …' },
    { q: 'أَيْنَ المِرْآةُ فِي غُرْفَتِكَ؟', en: 'Where is the mirror in your room?', start: 'المِرْآةُ … ← عَلَى الحَائِطِ', more: '… بِجَانِبِ / فَوْقَ …' },
    { q: 'مَاذَا تَفْعَلُ فِي غُرْفَتِكَ؟', en: 'What do you do in your room?', start: 'أَنَامُ / أَدْرُسُ / أَقْرَأُ …', more: '… كُلَّ مَسَاءٍ' },
    { q: 'هَلْ تُشَارِكُ غُرْفَتَكَ مَعَ أَحَدٍ؟', en: 'Do you share your room with someone?', start: 'نَعَمْ، مَعَ … / لَا، …', more: '… وَهٰذَا …' },
  ],
  card: {
    title: 'Role-play card — a video call with your cousin abroad', ar: 'مُكَالَمَةُ فِيدْيُو', you: 'yourself, in your room', them: 'your cousin in Egypt',
    tasks: [
      { ex: 'أَيْنَ أَنْتَ الآنَ؟', task: 'Say you are in your room.', plan: 'أَيْنَ ← أَنَا فِي …', model: 'أَنَا فِي غُرْفَتِي الآنَ.', modelEn: 'I am in my room now.' },
      { ex: 'هَلْ غُرْفَتُكَ كَبِيرَةٌ؟', task: 'Give size + one more adjective.', plan: 'هَلْ ← غُرْفَتِي … وَ…', model: 'غُرْفَتِي مُتَوَسِّطَةٌ وَمُرِيحَةٌ.', modelEn: 'My room is medium-sized and comfortable.' },
      { ex: 'مَاذَا يُوجَدُ عَلَى الحَائِطِ؟', task: 'Name two things on the wall.', plan: 'مَاذَا ← عَلَى الحَائِطِ … وَ…', model: 'عَلَى الحَائِطِ مِرْآةٌ وَصُورَةٌ لِعَائِلَتِي.', modelEn: 'On the wall there is a mirror and a photo of my family.' },
      { ex: 'هَلْ تُحِبُّ غُرْفَتَكَ؟', task: 'Answer + reason.', plan: 'هَلْ ← نَعَمْ، أُحِبُّهَا لِأَنَّهَا …', model: 'نَعَمْ، أُحِبُّهَا لِأَنَّهَا هَادِئَةٌ وَمُضِيئَةٌ.', modelEn: 'Yes, I love it because it is quiet and bright.' },
    ],
    girl: 'أَنْتِ · غُرْفَتُكِ · تُحِبِّينَ',
    notes: 'Language: ghurfatī + feminine adjectives · ʿalā al-ḥāʾiṭi · uḥibbuhā li-annahā.',
  },
  talk: {
    title: '30 seconds: a tour of my bedroom', ar: 'جَوْلَةٌ فِي غُرْفَتِي',
    text: 'Give a 30-second tour of your bedroom: its size and feel, five objects with colours and positions, what you do there — and whether it is tidy!',
    routes: {
      core: 'غُرْفَتِي … · يُوجَدُ … · تُوجَدُ …',
      develop: 'Add colours that agree and two positions.',
      stretch: 'Add what you do there (أَدْرُسُ · أَقْرَأُ) and what you would like to change.',
    },
  },
  builder: [
    { en: 'My room is spacious and bright.', cols: [['غُرْفَتِي', 'غُرْفَتُكَ'], ['وَاسِعَةٌ', 'وَاسِعٌ'], ['وَمُضِيئَةٌ.', 'وَمُضِيءٌ.']], key: [0, 0, 0], why: 'غُرْفَةٌ is feminine → both adjectives with ة.' },
    { en: 'There is a white pillow on the bed.', cols: [['تُوجَدُ', 'يُوجَدُ'], ['وِسَادَةٌ بَيْضَاءُ', 'وِسَادَةٌ أَبْيَضُ'], ['عَلَى السَّرِيرِ.', 'عَلَى السَّرِيرُ.']], key: [0, 0, 0], why: 'وِسَادَةٌ is feminine → تُوجَدُ … بَيْضَاءُ.' },
    { en: 'I study at my desk every evening.', cols: [['أَدْرُسُ', 'يَدْرُسُ'], ['عَلَى مَكْتَبِي', 'فِي مَكْتَبُ'], ['كُلَّ مَسَاءٍ.', 'أَمْسِ مَسَاءً.']], key: [0, 0, 0], why: 'I → أَدْرُسُ; a habit → كُلَّ مَسَاءٍ.' },
  ],
  errors: [
    { wrong: 'غُرْفَتِي مُرَتَّبٌ.', hint: 'غُرْفَةٌ is feminine.', right: 'غُرْفَتِي مُرَتَّبَةٌ.', why: 'Feminine noun → مُرَتَّبَةٌ.' },
    { wrong: 'الخِزَانَةُ أَبْيَضُ.', hint: 'Colour agreement.', right: 'الخِزَانَةُ بَيْضَاءُ.', why: 'Feminine → بَيْضَاءُ.' },
    { wrong: 'أُحِبُّ غُرْفَتِي لِأَنَّهُ هَادِئٌ.', hint: 'It = the room (f.).', right: 'أُحِبُّ غُرْفَتِي لِأَنَّهَا هَادِئَةٌ.', why: 'Room is feminine → لِأَنَّهَا هَادِئَةٌ.' },
  ],
  task: {
    title: 'My bedroom', ar: 'غُرْفَتِي',
    text: 'Write a description of your bedroom (about 45–65 words) for a “my space” display. Include: • size and three adjectives • at least five objects with colours • where three objects are • what you do there • why you like it (or what you would change).',
    phrases: [['غُرْفَتِي … وَ… ، لٰكِنَّهَا …', 'my room is … and …, but it is …'], ['يُوجَدُ … أَزْرَقُ · تُوجَدُ … زَرْقَاءُ', 'there is a blue … (m. / f.)'], ['… بِجَانِبِ / تَحْتَ / فَوْقَ …', '… next to / under / above …'], ['أُحِبُّهَا لِأَنَّهَا …', 'I love it because it is …']],
    coreFrames: [
      { ar: 'غُرْفَتِي ______ وَ ______ .', en: 'My room is … and …' },
      { ar: 'فِيهَا سَرِيرٌ ______ وَخِزَانَةٌ ______ .', en: 'It has a … bed and a … wardrobe.' },
      { ar: '______ عَلَى ______ .', en: '… is on …' },
      { ar: 'أُحِبُّ غُرْفَتِي لِأَنَّهَا ______ .', en: 'I love my room because it is …' },
    ],
    developFrames: [
      { ar: 'فِي غُرْفَتِي أَنَامُ وَ ______ وَ ______ .', en: 'In my room I sleep, … and …' },
      { ar: 'أُرِيدُ أَنْ أُغَيِّرَ ______ لِأَنَّ ______ .', en: 'I want to change … because …' },
    ],
    bank: ['سَرِيرٌ · خِزَانَةٌ', 'مِرْآةٌ · وِسَادَةٌ', 'بِطَّانِيَّةٌ · لِحَافٌ', 'مُرَتَّبَةٌ · نَظِيفَةٌ', 'وَاسِعَةٌ · ضَيِّقَةٌ', 'مُرِيحَةٌ · مُضِيئَةٌ', 'بِجَانِبِ · تَحْتَ · فَوْقَ', 'لِأَنَّهَا'],
    model: {
      text: 'غُرْفَتِي صَغِيرَةٌ، لٰكِنَّهَا مُرِيحَةٌ وَمُضِيئَةٌ، لِأَنَّ فِيهَا نَافِذَةً كَبِيرَةً. فِيهَا سَرِيرٌ رَمَادِيٌّ وَبِطَّانِيَّةٌ زَرْقَاءُ، وَخِزَانَةٌ بَيْضَاءُ بِجَانِبِ البَابِ. مَكْتَبِي تَحْتَ النَّافِذَةِ، وَعَلَى الحَائِطِ مِرْآةٌ وَصُوَرٌ لِأَصْدِقَائِي. فِي غُرْفَتِي أَنَامُ وَأَدْرُسُ وَأَقْرَأُ القِصَصَ. أُحِبُّ غُرْفَتِي، لٰكِنِّي أُرِيدُ أَنْ أُغَيِّرَ لَوْنَ الجُدْرَانِ، لِأَنَّهَا قَدِيمَةٌ.',
      en: '“My room is small, but comfortable and bright, because it has a big window. It has a grey bed and a blue blanket, and a white wardrobe next to the door. My desk is under the window, and on the wall there is a mirror and photos of my friends. In my room I sleep, study and read stories. I love my room, but I want to change the colour of the walls, because they are old.”',
      find: ['لٰكِنَّهَا مُرِيحَةٌ وَمُضِيئَةٌ', 'بِطَّانِيَّةٌ زَرْقَاءُ', 'تَحْتَ النَّافِذَةِ', 'أُرِيدُ أَنْ أُغَيِّرَ'],
    },
  },
  checkCore: 'use feminine adjectives for the room (غُرْفَتِي … ة)?',
  checkDevelop: 'give colours that agree and at least two positions?',
});
