'use strict';
/* Apply Workshop · F3-W06 · F3-L11 (F3 consolidation) + F3-L12 (unit assessment: my family and home). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f3-w06', pair: ['f3-l11', 'f3-l12'],
  title: 'Family Home Exchange', arShort: 'تَبَادُلُ البُيُوتِ',
  focus: 'Students use all of F3 for one real purpose: a family wants to swap homes for a holiday, so students present their family, describe the home room by room with colours and furniture, explain what is near and far, and write a home-exchange advert.',
  sortTitle: 'Family or home?', sortCats: ['My family — people', 'My home — places and things'],
  sort: [
    { ar: 'جَدَّتِي لَطِيفَةٌ', cat: 0 }, { ar: 'خَالِي مُجْتَهِدٌ', cat: 0 }, { ar: 'شَعْرُهَا أَسْوَدُ', cat: 0 }, { ar: 'ابْنُ عَمِّي مُضْحِكٌ', cat: 0 },
    { ar: 'تُوجَدُ خِزَانَةٌ زَرْقَاءُ', cat: 1 }, { ar: 'غُرْفَةُ الجُلُوسِ وَاسِعَةٌ', cat: 1 }, { ar: 'المَسْجِدُ قَرِيبٌ', cat: 1 }, { ar: 'يُوجَدُ كُرْسِيٌّ أَبْيَضُ', cat: 1 },
  ],
  dialogue: {
    title: 'Two families plan an exchange', ar: 'عَائِلَتَانِ تَتَبَادَلَانِ البَيْتَ',
    lines: [
      ['A', 'مَنْ فِي عَائِلَتِكُمْ؟', 'Who is in your family?'],
      ['B', 'أَبِي وَأُمِّي وَأَخِي وَأَنَا. أَخِي صَغِيرٌ وَمُضْحِكٌ جِدًّا.', 'My father, my mother, my brother and me. My brother is young and very funny.'],
      ['A', 'كَيْفَ بَيْتُكُمْ؟', 'What is your home like?'],
      ['B', 'بَيْتُنَا كَبِيرٌ، فِيهِ أَرْبَعُ غُرَفٍ وَحَدِيقَةٌ. غُرْفَةُ الجُلُوسِ خَضْرَاءُ.', 'Our house is big; it has four rooms and a garden. The living room is green.'],
      ['A', 'هَلِ البَيْتُ قَرِيبٌ مِنَ البَحْرِ؟', 'Is the house near the sea?'],
      ['B', 'نَعَمْ، هُوَ قَرِيبٌ مِنَ البَحْرِ، لٰكِنَّهُ بَعِيدٌ عَنِ المَدِينَةِ.', 'Yes, it is near the sea, but it is far from the town.'],
    ],
    notes: 'Everything here is F3 language: family and adjectives (L01–L02), rooms and colours (L03–L05), near / far (L07). F3-L11 and F3-L12 bring it all together — this workshop gives it a real purpose.',
  },
  card: {
    title: 'Role-play card — the home-exchange video call', ar: 'مُكَالَمَةُ التَّبَادُلِ', you: 'your family’s spokesperson', them: 'the other family',
    mix: 'the key F3 decisions (F3-L11: هٰذَا / هٰذِهِ, agreement, يُوجَدُ / تُوجَدُ, near / far) under the assessment-style conditions of F3-L12',
    tasks: [
      { ex: 'مَنْ فِي عَائِلَتِكُمْ؟', task: 'Say who is in your family; describe one person.', plan: 'مَنْ ← فِي عَائِلَتِي … ، … هُوَ / هِيَ …', model: 'فِي عَائِلَتِي أَرْبَعَةُ أَشْخَاصٍ. أُمِّي طَوِيلَةٌ وَكَرِيمَةٌ جِدًّا.', modelEn: 'There are four people in my family. My mother is tall and very generous.' },
      { ex: 'كَمْ غُرْفَةً فِي بَيْتِكُمْ؟', task: 'Number of rooms + two rooms.', plan: 'كَمْ ← فِي بَيْتِنَا … غُرَفٍ: …', model: 'فِي بَيْتِنَا خَمْسُ غُرَفٍ: ثَلَاثُ غُرَفِ نَوْمٍ، وَغُرْفَةُ جُلُوسٍ، وَمَطْبَخٌ.', modelEn: 'There are five rooms in our house: three bedrooms, a living room and a kitchen.' },
      { ex: 'مَاذَا يُوجَدُ فِي غُرْفَةِ الضُّيُوفِ؟', task: 'Two items with colours that agree.', plan: 'مَاذَا ← يُوجَدُ … وَتُوجَدُ …', model: 'يُوجَدُ سَرِيرٌ أَبْيَضُ، وَتُوجَدُ خِزَانَةٌ بُنِّيَّةٌ.', modelEn: 'There is a white bed, and there is a brown wardrobe.' },
      { ex: 'مَاذَا يُوجَدُ قَرِيبًا مِنَ البَيْتِ؟', task: 'One place near, one place far.', plan: 'مَاذَا ← … قَرِيبٌ مِنْ … ، وَ… بَعِيدٌ عَنْ …', model: 'المَسْجِدُ قَرِيبٌ مِنَ البَيْتِ، وَالمَحَطَّةُ بَعِيدَةٌ عَنْهُ.', modelEn: 'The mosque is near the house, and the station is far from it.' },
      { unexpected: true, ex: 'لِمَاذَا تُحِبُّونَ بَيْتَكُمْ؟', task: 'Give an opinion with a reason.', plan: 'لِمَاذَا ← نُحِبُّهُ لِأَنَّهُ …', model: 'نُحِبُّهُ لِأَنَّهُ هَادِئٌ وَمُرِيحٌ، وَالحَدِيقَةُ جَمِيلَةٌ.', modelEn: 'We like it because it is quiet and comfortable, and the garden is lovely.' },
    ],
    girl: 'the questions use “you all” (-kum), so they stay the same for a girl; she says: أَنَا … وَأُحِبُّ …',
  },
  talk: {
    title: 'Come and stay in our home!', ar: 'تَعَالَوْا إِلَى بَيْتِنَا!',
    text: 'Talk for 30–45 seconds to “sell” your home to the other family: your family in one or two sentences, the rooms, one room in detail with colours, what is near and far, and why they will like it.',
    routes: {
      core: 'فِي عَائِلَتِي … · فِي بَيْتِنَا … · يُوجَدُ …',
      develop: 'Add colours that agree and near / far: قَرِيبٌ مِنْ · بَعِيدٌ عَنْ.',
      stretch: 'Persuade: سَتُحِبُّونَ … لِأَنَّ … — and add a “but” (لٰكِنَّ).',
    },
    phrases: [['فِي بَيْتِنَا … غُرَفٍ', 'there are … rooms in our home'], ['يُوجَدُ … أَبْيَضُ · تُوجَدُ … بَيْضَاءُ', 'there is a white … (m. · f.)'], ['… قَرِيبٌ مِنْ … · بَعِيدٌ عَنْ …', '… near … · far from …'], ['سَتُحِبُّونَ … لِأَنَّ …', 'you (all) will like … because …']],
  },
  task: {
    title: 'Our home-exchange advert', ar: 'إِعْلَانُ تَبَادُلِ البَيْتِ',
    text: 'Write an advert (about 45–65 words) for a home-exchange website. Include: • who is in your family, with two people described (a man and a woman) • your home: the rooms • one room in detail with three items and colours • one place near and one place far • why the other family will like it.',
    range: [40, 90],
    phrases: [['نَحْنُ عَائِلَةٌ مِنْ … أَشْخَاصٍ', 'we are a family of … people'], ['فِي بَيْتِنَا … ، وَفِيهِ …', 'in our home … and it has …'], ['… قَرِيبٌ مِنْ … ، وَ… بَعِيدٌ عَنْ …', '… is near … and … is far from …'], ['سَتُحِبُّونَ بَيْتَنَا لِأَنَّ …', 'you will like our home because …']],
    coreFrames: [
      { ar: 'نَحْنُ عَائِلَةٌ مِنْ ______ أَشْخَاصٍ.', en: 'We are a family of … people.' },
      { ar: 'أَبِي ______ ، وَأُمِّي ______ .', en: 'My father is … and my mother is …' },
      { ar: 'فِي بَيْتِنَا ______ غُرَفٍ.', en: 'There are … rooms in our home.' },
      { ar: 'فِي غُرْفَةِ الجُلُوسِ يُوجَدُ ______ وَتُوجَدُ ______ .', en: 'In the living room there is … and …' },
      { ar: '______ قَرِيبٌ مِنَ البَيْتِ.', en: '… is near the house.' },
    ],
    developFrames: [
      { ar: 'لٰكِنَّ ______ بَعِيدٌ / بَعِيدَةٌ عَنْهُ.', en: 'But … is far from it.' },
      { ar: 'سَتُحِبُّونَ بَيْتَنَا لِأَنَّ ______ .', en: 'You will like our home because …' },
    ],
    bank: ['أَبِي · أُمِّي · جَدَّتِي', 'طَوِيلٌ · لَطِيفَةٌ', 'غُرْفَةُ الجُلُوسِ', 'يُوجَدُ · تُوجَدُ', 'أَبْيَضُ · خَضْرَاءُ', 'بِجَانِبِ · مُقَابِلَ', 'قَرِيبٌ مِنْ · بَعِيدٌ عَنْ', 'لِأَنَّ · لٰكِنَّ'],
    model: {
      text: 'نَحْنُ عَائِلَةٌ مِنْ خَمْسَةِ أَشْخَاصٍ. أَبِي طَوِيلٌ وَهَادِئٌ، وَأُمِّي لَطِيفَةٌ وَمُضْحِكَةٌ. فِي بَيْتِنَا سِتُّ غُرَفٍ وَحَدِيقَةٌ كَبِيرَةٌ. فِي غُرْفَةِ الجُلُوسِ يُوجَدُ تِلْفَازٌ أَسْوَدُ، وَتُوجَدُ سَجَّادَةٌ حَمْرَاءُ وَطَاوِلَةٌ بَيْضَاءُ. البَيْتُ قَرِيبٌ مِنَ البَحْرِ، وَالمَسْجِدُ بِجَانِبِهِ، لٰكِنَّ المَحَطَّةَ بَعِيدَةٌ عَنْهُ. سَتُحِبُّونَ بَيْتَنَا لِأَنَّهُ وَاسِعٌ وَمُرِيحٌ.',
      en: '“We are a family of five. My father is tall and calm, and my mother is kind and funny. Our home has six rooms and a big garden. In the living room there is a black television, and there is a red rug and a white table. The house is near the sea, and the mosque is next to it, but the station is far from it. You will like our home because it is spacious and comfortable.”',
      find: ['لَطِيفَةٌ وَمُضْحِكَةٌ', 'سَجَّادَةٌ حَمْرَاءُ', 'قَرِيبٌ مِنَ البَحْرِ', 'بَعِيدَةٌ عَنْهُ'],
    },
  },
});
