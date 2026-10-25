'use strict';
/* Practice Room · F3-L03 · My home — rooms and parts of the house. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f3-l03',
  arShort: 'بَيْتِي',
  grammar: 'room names as iḍāfa (ghurfatu al-nawm · ghurfatu al-julūs); fī baytī …; hunāka; ʿindanā; numbers + rooms; fawqa / taḥta (upstairs / downstairs)',
  focus: 'Students run their own speaking and writing practice about their home: say the rooms and house parts, act a short dialogue, answer question cards, do a role-play card showing a guest around, give a 30-second home tour, then build, fix and write a short description of their home.',
  words1: 'The house and its parts', words2: 'The rooms',
  dialogue: {
    title: 'What is in your house?', ar: 'مَاذَا فِي بَيْتِكَ؟',
    lines: [
      ['A', 'هَلْ تَسْكُنُ فِي بَيْتٍ أَمْ فِي شَقَّةٍ؟', 'Do you live in a house or a flat?'],
      ['B', 'أَسْكُنُ فِي بَيْتٍ كَبِيرٍ.', 'I live in a big house.'],
      ['A', 'كَمْ غُرْفَةً فِي بَيْتِكَ؟', 'How many rooms are there in your house?'],
      ['B', 'فِي بَيْتِي ثَلَاثُ غُرَفِ نَوْمٍ، وَمَطْبَخٌ، وَحَمَّامَانِ.', 'In my house there are three bedrooms, a kitchen and two bathrooms.'],
      ['A', 'هَلْ عِنْدَكُمْ حَدِيقَةٌ؟', 'Do you have a garden?'],
      ['B', 'نَعَمْ، عِنْدَنَا حَدِيقَةٌ صَغِيرَةٌ، وَهُنَاكَ مَرْآبٌ أَيْضًا.', 'Yes, we have a small garden, and there is a garage too.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe YOUR real home — change the numbers and rooms.',
  },
  questions: [
    { q: 'أَيْنَ تَسْكُنُ؟', en: 'Where do you live?', start: 'أَسْكُنُ فِي بَيْتٍ / شَقَّةٍ …', more: '… فِي مَدِينَةِ …' },
    { q: 'كَمْ غُرْفَةَ نَوْمٍ فِي بَيْتِكَ؟', en: 'How many bedrooms are in your home?', start: 'فِي بَيْتِي …', more: '… وَغُرْفَتِي …' },
    { q: 'مَاذَا يُوجَدُ فِي الطَّابِقِ الأَرْضِيِّ؟', en: 'What is on the ground floor?', start: 'فِي الطَّابِقِ الأَرْضِيِّ …', more: '… وَفِي الطَّابِقِ الأَوَّلِ …' },
    { q: 'مَا غُرْفَتُكَ المُفَضَّلَةُ؟', en: 'What is your favourite room?', start: 'غُرْفَتِي المُفَضَّلَةُ …', more: '… لِأَنَّهَا …' },
    { q: 'هَلْ عِنْدَكُمْ حَدِيقَةٌ أَوْ شُرْفَةٌ؟', en: 'Do you have a garden or a balcony?', start: 'نَعَمْ، عِنْدَنَا … / لَا، …', more: '… وَهُنَاكَ …' },
  ],
  card: {
    title: 'Role-play card — showing a guest around your home', ar: 'أُرِي الضَّيْفَ البَيْتَ', you: 'the host', them: 'a guest visiting for the first time',
    tasks: [
      { ex: 'بَيْتُكُمْ جَمِيلٌ! هَلْ هُوَ كَبِيرٌ؟', task: 'Say if it is big or small.', plan: 'هَلْ ← نَعَمْ / لَا، بَيْتُنَا …', model: 'شُكْرًا! لَا، بَيْتُنَا صَغِيرٌ، لٰكِنَّهُ مُرِيحٌ.', modelEn: 'Thank you! No, our house is small, but it is comfortable.' },
      { ex: 'أَيْنَ المَطْبَخُ؟', task: 'Say where the kitchen is.', plan: 'أَيْنَ ← المَطْبَخُ هُنَاكَ ، بِجَانِبِ …', model: 'المَطْبَخُ هُنَاكَ، بِجَانِبِ غُرْفَةِ الجُلُوسِ.', modelEn: 'The kitchen is there, next to the living room.' },
      { ex: 'كَمْ غُرْفَةَ نَوْمٍ عِنْدَكُمْ؟', task: 'Give the number of bedrooms.', plan: 'كَمْ ← عِنْدَنَا … غُرَفِ نَوْمٍ', model: 'عِنْدَنَا ثَلَاثُ غُرَفِ نَوْمٍ فِي الطَّابِقِ الأَوَّلِ.', modelEn: 'We have three bedrooms on the first floor.' },
      { ex: 'وَأَيْنَ الحَمَّامُ، مِنْ فَضْلِكَ؟', task: 'Give the bathroom location politely.', plan: 'أَيْنَ ← تَفَضَّلْ ، الحَمَّامُ …', model: 'تَفَضَّلْ، الحَمَّامُ فَوْقُ، أَمَامَ غُرْفَتِي.', modelEn: 'Here you are — the bathroom is upstairs, opposite my room.' },
    ],
    girl: 'to a female guest: تَفَضَّلِي',
    notes: 'Language: iḍāfa room names (ghurfatu al-julūs) · bi-jānibi / amāma + genitive · numbers 3–10 + plural genitive.',
  },
  talk: {
    title: '30 seconds: a tour of my home', ar: 'جَوْلَةٌ فِي بَيْتِي',
    text: 'Give a 30-second tour of your home: house or flat, how many rooms, what is on each floor, your favourite room — and why.',
    routes: {
      core: 'أَسْكُنُ فِي … · فِي بَيْتِي … · عِنْدَنَا …',
      develop: 'Add the floors (الطَّابِقُ الأَرْضِيُّ / الأَوَّلُ) and your favourite room.',
      stretch: 'Add positions (بِجَانِبِ · أَمَامَ) and a reason with لِأَنَّ.',
    },
  },
  builder: [
    { en: 'In my house there is a big kitchen.', cols: [['فِي بَيْتِي', 'بَيْتِي فِي'], ['مَطْبَخٌ', 'المَطْبَخُ'], ['كَبِيرٌ.', 'كَبِيرَةٌ.']], key: [0, 0, 0], why: '“There is a …” = فِي + place + indefinite noun; مَطْبَخٌ is masculine.' },
    { en: 'My bedroom is next to the bathroom.', cols: [['غُرْفَةُ نَوْمِي', 'غُرْفَةٌ نَوْمِي'], ['بِجَانِبِ', 'فِي'], ['الحَمَّامِ.', 'الحَمَّامُ.']], key: [0, 0, 0], why: 'My bedroom = غُرْفَةُ نَوْمِي (iḍāfa); بِجَانِبِ + genitive.' },
    { en: 'We have a small garden.', cols: [['عِنْدَنَا', 'عِنْدِي هُمْ'], ['حَدِيقَةٌ', 'حَدِيقَةً'], ['صَغِيرَةٌ.', 'صَغِيرٌ.']], key: [0, 0, 0], why: 'We have = عِنْدَنَا; a garden is feminine → صَغِيرَةٌ.' },
  ],
  errors: [
    { wrong: 'فِي بَيْتِي غُرْفَةُ الجُلُوسِ كَبِيرٌ.', hint: 'غُرْفَةٌ is feminine.', right: 'فِي بَيْتِي غُرْفَةُ جُلُوسٍ كَبِيرَةٌ.', why: 'The room is feminine → كَبِيرَةٌ.' },
    { wrong: 'عِنْدَنَا ثَلَاثُ غُرْفَةٍ.', hint: '3–10 + plural.', right: 'عِنْدَنَا ثَلَاثُ غُرَفٍ.', why: 'After 3–10 use the plural: غُرَفٍ.' },
    { wrong: 'المَطْبَخُ بِجَانِبِ الحَدِيقَةُ.', hint: 'Look after بِجَانِبِ.', right: 'المَطْبَخُ بِجَانِبِ الحَدِيقَةِ.', why: 'Place words + genitive (-i).' },
  ],
  task: {
    title: 'My home', ar: 'بَيْتِي',
    text: 'Write a short description of your home (about 40–60 words) for a pen-friend. Include: • house or flat, and where • the rooms on each floor • the garden, balcony or garage • your favourite room and why.',
    phrases: [['أَسْكُنُ فِي بَيْتٍ / شَقَّةٍ فِي …', 'I live in a house / flat in …'], ['فِي الطَّابِقِ الأَرْضِيِّ …', 'on the ground floor …'], ['عِنْدَنَا … وَهُنَاكَ … أَيْضًا', 'we have … and there is … too'], ['غُرْفَتِي المُفَضَّلَةُ … لِأَنَّهَا …', 'my favourite room is … because it …']],
    coreFrames: [
      { ar: 'أَسْكُنُ فِي ______ فِي ______ .', en: 'I live in a … in …' },
      { ar: 'فِي بَيْتِي ______ غُرَفٍ.', en: 'In my home there are … rooms.' },
      { ar: 'عِنْدَنَا ______ وَ ______ .', en: 'We have … and …' },
      { ar: 'غُرْفَتِي المُفَضَّلَةُ ______ .', en: 'My favourite room is …' },
    ],
    developFrames: [
      { ar: 'فِي الطَّابِقِ الأَرْضِيِّ ______ ، وَفِي الطَّابِقِ الأَوَّلِ ______ .', en: 'On the ground floor …, and on the first floor …' },
      { ar: 'أُحِبُّ ______ لِأَنَّهَا ______ .', en: 'I love the … because it is …' },
    ],
    bank: ['بَيْتٌ · شَقَّةٌ', 'غُرْفَةُ النَّوْمِ', 'غُرْفَةُ الجُلُوسِ', 'المَطْبَخُ · الحَمَّامُ', 'حَدِيقَةٌ · شُرْفَةٌ', 'الطَّابِقُ الأَرْضِيُّ', 'عِنْدَنَا · هُنَاكَ', 'كَبِيرٌ · صَغِيرٌ'],
    model: {
      text: 'أَسْكُنُ فِي بَيْتٍ مُتَوَسِّطٍ فِي مَدِينَةِ بِرْمِنْغْهَامَ. فِي الطَّابِقِ الأَرْضِيِّ مَطْبَخٌ كَبِيرٌ، وَغُرْفَةُ جُلُوسٍ، وَحَمَّامٌ صَغِيرٌ. وَفِي الطَّابِقِ الأَوَّلِ ثَلَاثُ غُرَفِ نَوْمٍ وَحَمَّامٌ. عِنْدَنَا حَدِيقَةٌ خَلْفَ البَيْتِ، وَهُنَاكَ مَرْآبٌ أَيْضًا. غُرْفَتِي المُفَضَّلَةُ المَطْبَخُ، لِأَنَّهُ وَاسِعٌ، وَنَأْكُلُ فِيهِ مَعًا.',
      en: '“I live in a medium-sized house in Birmingham. On the ground floor there is a big kitchen, a living room and a small bathroom. On the first floor there are three bedrooms and a bathroom. We have a garden behind the house, and there is a garage too. My favourite room is the kitchen, because it is spacious and we eat there together.”',
      find: ['فِي الطَّابِقِ الأَرْضِيِّ', 'ثَلَاثُ غُرَفِ نَوْمٍ', 'وَهُنَاكَ مَرْآبٌ', 'لِأَنَّهُ وَاسِعٌ'],
    },
  },
  checkCore: 'name at least five rooms or parts of the house?',
  checkDevelop: 'make the adjectives match the room (غُرْفَةٌ كَبِيرَةٌ · مَطْبَخٌ كَبِيرٌ)?',
});
