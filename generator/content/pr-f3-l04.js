'use strict';
/* Practice Room · F3-L04 · Furniture and household items. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f3-l04',
  arShort: 'الأَثَاثُ',
  grammar: 'yūjadu (m.) / tūjadu (f.) + item; fī + room; positions (ʿalā · taḥta · bi-jānibi · amāma); useful plurals (karāsī · ṭāwilāt)',
  focus: 'Students run their own speaking and writing practice about furniture: say the furniture words, act a short dialogue, answer question cards, do a role-play card buying furniture for a new room, give a 30-second room description, then build, fix and write a description of one room.',
  words1: 'Furniture', words2: 'Household items and appliances',
  dialogue: {
    title: 'What is in the living room?', ar: 'مَاذَا يُوجَدُ فِي غُرْفَةِ الجُلُوسِ؟',
    lines: [
      ['A', 'مَاذَا يُوجَدُ فِي غُرْفَةِ الجُلُوسِ؟', 'What is there in the living room?'],
      ['B', 'يُوجَدُ تِلْفَازٌ كَبِيرٌ، وَتُوجَدُ سَجَّادَةٌ حَمْرَاءُ.', 'There is a big TV, and there is a red rug.'],
      ['A', 'وَأَيْنَ التِّلْفَازُ؟', 'And where is the TV?'],
      ['B', 'التِّلْفَازُ عَلَى الطَّاوِلَةِ، أَمَامَ الكَنَبَةِ.', 'The TV is on the table, in front of the sofa.'],
      ['A', 'وَمَاذَا يُوجَدُ فِي المَطْبَخِ؟', 'And what is there in the kitchen?'],
      ['B', 'تُوجَدُ ثَلَّاجَةٌ وَغَسَّالَةٌ، وَيُوجَدُ فُرْنٌ.', 'There is a fridge and a washing machine, and there is an oven.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe a room in YOUR home — check يُوجَدُ / تُوجَدُ for every item.',
  },
  questions: [
    { q: 'مَاذَا يُوجَدُ فِي غُرْفَةِ نَوْمِكَ؟', en: 'What is in your bedroom?', start: 'يُوجَدُ … / تُوجَدُ …', more: '… وَ…' },
    { q: 'أَيْنَ المِصْبَاحُ؟', en: 'Where is the lamp?', start: 'المِصْبَاحُ عَلَى …', more: '… بِجَانِبِ …' },
    { q: 'كَمْ كُرْسِيًّا فِي المَطْبَخِ؟', en: 'How many chairs are in the kitchen?', start: 'فِي المَطْبَخِ … كَرَاسٍ', more: '… حَوْلَ الطَّاوِلَةِ' },
    { q: 'هَلْ تُوجَدُ مِرْآةٌ فِي الحَمَّامِ؟', en: 'Is there a mirror in the bathroom?', start: 'نَعَمْ، تُوجَدُ … / لَا، …', more: '… فَوْقَ …' },
    { q: 'مَا قِطْعَةُ الأَثَاثِ المُفَضَّلَةُ عِنْدَكَ؟', en: 'What is your favourite piece of furniture?', start: 'أُحِبُّ … كَثِيرًا', more: '… لِأَنَّهُ / لِأَنَّهَا …' },
  ],
  card: {
    title: 'Role-play card — buying furniture for a new room', ar: 'فِي مَحَلِّ الأَثَاثِ', you: 'a customer', them: 'a shop assistant',
    tasks: [
      { ex: 'أَهْلًا! مَاذَا تُرِيدُ؟', task: 'Say what you want for your room.', plan: 'مَاذَا ← أُرِيدُ … لِغُرْفَتِي', model: 'أُرِيدُ سَرِيرًا وَخِزَانَةً لِغُرْفَتِي.', modelEn: 'I want a bed and a wardrobe for my room.' },
      { ex: 'هَلْ غُرْفَتُكَ كَبِيرَةٌ؟', task: 'Describe your room’s size.', plan: 'هَلْ ← لَا، غُرْفَتِي …', model: 'لَا، غُرْفَتِي صَغِيرَةٌ، لِذٰلِكَ أُرِيدُ سَرِيرًا صَغِيرًا.', modelEn: 'No, my room is small, so I want a small bed.' },
      { ex: 'عِنْدَنَا هٰذَا المَكْتَبُ. أَيْنَ تَضَعُهُ؟', task: 'Say where you will put it.', plan: 'أَيْنَ ← أَضَعُهُ بِجَانِبِ / تَحْتَ …', model: 'أَضَعُهُ تَحْتَ النَّافِذَةِ، بِجَانِبِ السَّرِيرِ.', modelEn: 'I’ll put it under the window, next to the bed.' },
      { ex: 'هَلْ تُرِيدُ شَيْئًا آخَرَ؟', task: 'Ask for one more item.', plan: 'شَيْئًا آخَرَ ← نَعَمْ، أُرِيدُ … ، مِنْ فَضْلِكَ', model: 'نَعَمْ، أُرِيدُ مِصْبَاحًا وَرَفًّا لِلْكُتُبِ، مِنْ فَضْلِكَ.', modelEn: 'Yes, I want a lamp and a bookshelf, please.' },
    ],
    girl: 'تُرِيدِينَ · غُرْفَتُكِ · تَضَعِينَهُ',
    notes: 'Language: urīdu + accusative (sarīran, khizānatan) · positions + genitive · li-dhālika.',
  },
  talk: {
    title: '30 seconds: one room in my home', ar: 'غُرْفَةٌ فِي بَيْتِي',
    text: 'Choose one room. In 30 seconds, say what is in it (at least five things) and where three of them are.',
    routes: {
      core: 'Five items with يُوجَدُ / تُوجَدُ.',
      develop: 'Add positions: عَلَى · تَحْتَ · بِجَانِبِ · أَمَامَ.',
      stretch: 'Add colours and sizes that agree (سَجَّادَةٌ زَرْقَاءُ كَبِيرَةٌ).',
    },
  },
  builder: [
    { en: 'There is a table in the kitchen.', cols: [['تُوجَدُ', 'يُوجَدُ'], ['طَاوِلَةٌ', 'طَاوِلَةً'], ['فِي المَطْبَخِ.', 'المَطْبَخُ.']], key: [0, 0, 0], why: 'طَاوِلَةٌ is feminine → تُوجَدُ.' },
    { en: 'There is a big bed in my room.', cols: [['يُوجَدُ', 'تُوجَدُ'], ['سَرِيرٌ كَبِيرٌ', 'سَرِيرٌ كَبِيرَةٌ'], ['فِي غُرْفَتِي.', 'غُرْفَتِي فِي.']], key: [0, 0, 0], why: 'سَرِيرٌ is masculine → يُوجَدُ … كَبِيرٌ.' },
    { en: 'The lamp is on the shelf.', cols: [['المِصْبَاحُ', 'مِصْبَاحٌ'], ['عَلَى', 'تَحْتَ'], ['الرَّفِّ.', 'الرَّفُّ.']], key: [0, 0, 0], why: 'on = عَلَى + genitive (الرَّفِّ).' },
  ],
  errors: [
    { wrong: 'يُوجَدُ ثَلَّاجَةٌ فِي المَطْبَخِ.', hint: 'ثَلَّاجَةٌ ends in ة.', right: 'تُوجَدُ ثَلَّاجَةٌ فِي المَطْبَخِ.', why: 'Feminine item → تُوجَدُ.' },
    { wrong: 'الكِتَابُ تَحْتَ السَّرِيرُ.', hint: 'Look after تَحْتَ.', right: 'الكِتَابُ تَحْتَ السَّرِيرِ.', why: 'تَحْتَ + genitive (-i).' },
    { wrong: 'فِي المَطْبَخِ أَرْبَعُ كُرْسِيٍّ.', hint: '3–10 + plural.', right: 'فِي المَطْبَخِ أَرْبَعَةُ كَرَاسٍ.', why: 'Plural كَرَاسٍ; كُرْسِيٌّ is masculine → أَرْبَعَةُ.' },
  ],
  task: {
    title: 'Describe one room', ar: 'أَصِفُ غُرْفَةً',
    text: 'Write a description (about 40–60 words) of one room in your home for an online “my home” project. Include: • which room and its size • at least five items with يُوجَدُ / تُوجَدُ • where three items are • what you like in the room and why.',
    phrases: [['فِي غُرْفَةِ … يُوجَدُ … وَتُوجَدُ …', 'in the … room there is … and …'], ['… عَلَى / تَحْتَ / بِجَانِبِ …', '… on / under / next to …'], ['أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', 'I like … because it …'], ['الغُرْفَةُ كَبِيرَةٌ / صَغِيرَةٌ', 'the room is big / small']],
    coreFrames: [
      { ar: 'هٰذِهِ ______ ، وَهِيَ ______ .', en: 'This is the …, and it is …' },
      { ar: 'فِي الغُرْفَةِ يُوجَدُ ______ ، وَتُوجَدُ ______ .', en: 'In the room there is … and …' },
      { ar: '______ عَلَى ______ .', en: '… is on …' },
      { ar: 'أُحِبُّ ______ .', en: 'I like …' },
    ],
    developFrames: [
      { ar: '______ بِجَانِبِ ______ ، وَ ______ تَحْتَ ______ .', en: '… is next to …, and … is under …' },
      { ar: 'أُحِبُّ هٰذِهِ الغُرْفَةَ لِأَنَّ ______ .', en: 'I like this room because …' },
    ],
    bank: ['يُوجَدُ · تُوجَدُ', 'سَرِيرٌ · كُرْسِيٌّ', 'طَاوِلَةٌ · خِزَانَةٌ', 'مِصْبَاحٌ · رَفٌّ', 'سَجَّادَةٌ · مِرْآةٌ', 'عَلَى · تَحْتَ', 'بِجَانِبِ · أَمَامَ', 'لِأَنَّ'],
    model: {
      text: 'هٰذِهِ غُرْفَةُ الجُلُوسِ، وَهِيَ كَبِيرَةٌ وَمُرِيحَةٌ. فِي الغُرْفَةِ تُوجَدُ كَنَبَةٌ رَمَادِيَّةٌ، وَيُوجَدُ تِلْفَازٌ كَبِيرٌ، وَتُوجَدُ سَجَّادَةٌ حَمْرَاءُ عَلَى الأَرْضِ. التِّلْفَازُ عَلَى طَاوِلَةٍ صَغِيرَةٍ، وَالمِصْبَاحُ بِجَانِبِ الكَنَبَةِ، وَهُنَاكَ رَفٌّ لِلْكُتُبِ تَحْتَ النَّافِذَةِ. أُحِبُّ هٰذِهِ الغُرْفَةَ لِأَنَّنَا نَجْلِسُ فِيهَا مَعًا كُلَّ مَسَاءٍ.',
      en: '“This is the living room, and it is big and comfortable. In the room there is a grey sofa, a big TV and a red rug on the floor. The TV is on a small table, the lamp is next to the sofa, and there is a bookshelf under the window. I like this room because we sit in it together every evening.”',
      find: ['تُوجَدُ كَنَبَةٌ رَمَادِيَّةٌ', 'وَيُوجَدُ تِلْفَازٌ', 'بِجَانِبِ الكَنَبَةِ', 'تَحْتَ النَّافِذَةِ'],
    },
  },
  checkCore: 'choose يُوجَدُ for masculine and تُوجَدُ for feminine items?',
  checkDevelop: 'give positions with the genitive (عَلَى الطَّاوِلَةِ)?',
});
