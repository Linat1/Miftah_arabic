'use strict';
/* Practice Room · F3-L12 · Unit assessment practice — my family and home. Speaking + writing. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f3-l12',
  arShort: 'تَدْرِيبٌ لِلتَّقْيِيمِ',
  grammar: 'all of F3 under assessment conditions: family words + possessives; describing people; rooms, furniture and colours; neighbourhood positions; connectors',
  focus: 'Assessment practice for F3: students run their own speaking and writing rehearsal in breakout rooms — a quick word check, a model exchange, exam-style question cards, a role-play card, a 45-second talk, then build, fix and write a timed 60-word text about their family and home.',
  words1: 'F3 check: family and people', words2: 'F3 check: home and area',
  addWords: [
    ['جَدٌّ · جَدَّةٌ', 'grandfather · grandmother'], ['عَمٌّ · خَالَةٌ', 'uncle · aunt'], ['ابْنُ عَمٍّ · بِنْتُ خَالٍ', 'cousin (m. · f.)'],
    ['طَوِيلٌ · قَصِيرَةٌ', 'tall (m.) · short (f.)'], ['لَطِيفٌ · مُضْحِكَةٌ', 'kind (m.) · funny (f.)'], ['شَعْرُهُ · عَيْنَاهَا', 'his hair · her eyes'],
    ['غُرْفَةُ النَّوْمِ', 'bedroom'], ['غُرْفَةُ الجُلُوسِ', 'living room'], ['يُوجَدُ · تُوجَدُ', 'there is (m. · f.)'],
    ['أَزْرَقُ · زَرْقَاءُ', 'blue (m. · f.)'], ['بِجَانِبِ · مُقَابِلَ', 'next to · opposite'], ['قَرِيبٌ مِنْ · بَعِيدٌ عَنْ', 'near · far from'],
  ],
  dialogue: {
    title: 'An exam-style exchange', ar: 'حِوَارٌ مِثْلَ الامْتِحَانِ',
    lines: [
      ['A', 'صِفْ شَخْصًا فِي عَائِلَتِكَ.', 'Describe someone in your family.'],
      ['B', 'جَدِّي كَبِيرٌ وَطَوِيلٌ، وَشَعْرُهُ أَبْيَضُ. هُوَ هَادِئٌ وَكَرِيمٌ.', 'My grandfather is old and tall, and his hair is white. He is calm and generous.'],
      ['A', 'أَيْنَ تَسْكُنُ؟', 'Where do you live?'],
      ['B', 'أَسْكُنُ فِي شَقَّةٍ فِي بِرْمِنْغْهَامَ. فِيهَا غُرْفَتَا نَوْمٍ وَمَطْبَخٌ صَغِيرٌ.', 'I live in a flat in Birmingham. It has two bedrooms and a small kitchen.'],
      ['A', 'مَاذَا يُوجَدُ قُرْبَ بَيْتِكَ؟', 'What is near your home?'],
      ['B', 'تُوجَدُ مَكْتَبَةٌ بِجَانِبِ بَيْتِي، وَالمَسْجِدُ مُقَابِلَ المَدْرَسَةِ.', 'There is a library next to my home, and the mosque is opposite the school.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap. Round 3: answer with your own facts under exam conditions — no slide, two sentences each.',
  },
  questions: [
    { q: 'مَنْ فِي عَائِلَتِكَ؟', en: 'Who is in your family?', start: 'فِي عَائِلَتِي …', more: '… وَعِنْدِي …' },
    { q: 'صِفْ أُمَّكَ أَوْ أَبَاكَ.', en: 'Describe your mother or father.', start: 'أُمِّي … / أَبِي …', more: '… وَشَعْرُهَا / وَشَعْرُهُ …' },
    { q: 'صِفْ غُرْفَتَكَ.', en: 'Describe your room.', start: 'غُرْفَتِي … ؛ فِيهَا …', more: '… لَوْنُهُ / لَوْنُهَا …' },
    { q: 'مَاذَا يُوجَدُ فِي حَيِّكَ؟', en: 'What is in your area?', start: 'يُوجَدُ … وَتُوجَدُ …', more: '… بِجَانِبِ / مُقَابِلَ …' },
    { q: 'مَا رَأْيُكَ فِي بَيْتِكَ؟', en: 'What do you think of your home?', start: 'فِي رَأْيِي …', more: '… لِأَنَّ … لٰكِنَّ …' },
  ],
  card: {
    title: 'Role-play card — a new friend visits your home', ar: 'صَدِيقٌ جَدِيدٌ فِي بَيْتِي', you: 'the host', them: 'a new friend',
    tasks: [
      { ex: 'مَنْ هٰذِهِ؟', task: 'Introduce your sister / aunt.', plan: 'مَنْ ← هٰذِهِ … ، اسْمُهَا …', model: 'هٰذِهِ أُخْتِي الكَبِيرَةُ، اسْمُهَا أَمَلُ.', modelEn: 'This is my older sister; her name is Amal.' },
      { ex: 'كَيْفَ هِيَ؟', task: 'Two adjectives.', plan: 'كَيْفَ ← هِيَ … وَ…', model: 'هِيَ ذَكِيَّةٌ وَمُضْحِكَةٌ جِدًّا.', modelEn: 'She is very clever and funny.' },
      { ex: 'أَيْنَ غُرْفَتُكَ؟', task: 'Give the location.', plan: 'أَيْنَ ← غُرْفَتِي … بِجَانِبِ …', model: 'غُرْفَتِي فِي الطَّابِقِ الأَوَّلِ، بِجَانِبِ الحَمَّامِ.', modelEn: 'My room is on the first floor, next to the bathroom.' },
      { unexpected: true, ex: 'مَا أَجْمَلُ شَيْءٍ فِي غُرْفَتِكَ؟', task: 'Answer the surprise question.', plan: 'مَا ← أَجْمَلُ شَيْءٍ … لِأَنَّ …', model: 'أَجْمَلُ شَيْءٍ السَّجَّادَةُ الزَّرْقَاءُ، لِأَنَّهَا هَدِيَّةٌ مِنْ جَدَّتِي.', modelEn: 'The nicest thing is the blue rug, because it is a present from my grandmother.' },
    ],
    girl: 'غُرْفَتُكِ',
    notes: 'Task ! is unexpected — the Leader reads it without warning, as in the exam.',
  },
  talk: {
    title: '45 seconds: my family and home', ar: 'عَائِلَتِي وَبَيْتِي',
    text: 'Speak for 45 seconds without stopping about your family, your home and your area — as in the assessment.',
    head: 'Talk for 45 seconds — no stopping',
    routes: {
      core: '30 seconds: three sentences about family, three about home.',
      develop: '45 seconds: with descriptions, colours and positions.',
      stretch: '45 seconds + opinions with لِأَنَّ / لٰكِنَّ and no errors in agreement.',
    },
  },
  builder: [
    { en: 'My aunt has two daughters; they are young.', cols: [['عِنْدَ خَالَتِي بِنْتَانِ،', 'عِنْدَ خَالَتِي بِنْتٌ،'], ['هُمَا', 'هِيَ'], ['صَغِيرَتَانِ.', 'صَغِيرَةٌ.']], key: [0, 0, 0], why: 'Two daughters = dual بِنْتَانِ; they two = هُمَا … صَغِيرَتَانِ.' },
    { en: 'There is a green sofa opposite the TV.', cols: [['تُوجَدُ كَنَبَةٌ', 'يُوجَدُ كَنَبَةٌ'], ['خَضْرَاءُ', 'أَخْضَرُ'], ['مُقَابِلَ التِّلْفَازِ.', 'مُقَابِلَ التِّلْفَازُ.']], key: [0, 0, 0], why: 'Sofa (f.) → تُوجَدُ … خَضْرَاءُ; مُقَابِلَ + genitive.' },
    { en: 'I love my home because it is near the park.', cols: [['أُحِبُّ بَيْتِي', 'تُحِبُّ بَيْتِي'], ['لِأَنَّهُ قَرِيبٌ', 'لِأَنَّهَا قَرِيبَةٌ'], ['مِنَ الحَدِيقَةِ.', 'عَنِ الحَدِيقَةِ.']], key: [0, 0, 0], why: 'Home (m.) → لِأَنَّهُ قَرِيبٌ مِنْ.' },
  ],
  errors: [
    { wrong: 'أَبِي شَعْرُهُ سَوْدَاءُ.', hint: 'Hair is masculine.', right: 'أَبِي شَعْرُهُ أَسْوَدُ.', why: 'شَعْرٌ (m.) → أَسْوَدُ.' },
    { wrong: 'فِي بَيْتِي أَرْبَعُ غُرْفَةٍ.', hint: '3–10 + plural.', right: 'فِي بَيْتِي أَرْبَعُ غُرَفٍ.', why: 'Plural غُرَفٍ after 3–10.' },
    { wrong: 'هٰذِهِ أَخِي، اسْمُهَا عَلِيٌّ.', hint: 'Ali is a boy.', right: 'هٰذَا أَخِي، اسْمُهُ عَلِيٌّ.', why: 'A boy → هٰذَا … اسْمُهُ.' },
  ],
  task: {
    title: 'Timed writing: my family and my home', ar: 'كِتَابَةٌ مُؤَقَّتَةٌ',
    text: 'Timed practice (10 minutes). Write about 50–70 words for an e-pal. Include: • who is in your family • a description of two people (a man and a woman) • your home and your room, with colours • your area: one place near and one place far • your opinion with a reason.',
    range: [40, 85],
    phrases: [['فِي عَائِلَتِي … أَشْخَاصٍ', 'there are … people in my family'], ['… هُوَ … · … هِيَ …', '… he is … · … she is …'], ['فِي غُرْفَتِي … أَزْرَقُ / زَرْقَاءُ', 'in my room … blue'], ['… قَرِيبٌ مِنْ … ، وَ… بَعِيدٌ عَنْ …', '… near …, and … far from …']],
    coreFrames: [
      { ar: 'فِي عَائِلَتِي ______ أَشْخَاصٍ.', en: 'There are … people in my family.' },
      { ar: '______ هُوَ ______ ، وَ ______ هِيَ ______ .', en: 'My … is …, and my … is …' },
      { ar: 'نَسْكُنُ فِي ______ ، وَغُرْفَتِي ______ .', en: 'We live in …, and my room is …' },
      { ar: '______ قَرِيبٌ مِنْ بَيْتِي.', en: '… is near my home.' },
    ],
    developFrames: [
      { ar: 'فِي غُرْفَتِي يُوجَدُ ______ ، وَتُوجَدُ ______ .', en: 'In my room there is … and …' },
      { ar: 'أُحِبُّ ______ لِأَنَّ ______ ، لٰكِنَّ ______ .', en: 'I love … because …, but …' },
    ],
    bank: ['فِي عَائِلَتِي', 'هُوَ · هِيَ', 'شَعْرُهُ · شَعْرُهَا', 'يُوجَدُ · تُوجَدُ', 'أَبْيَضُ · بَيْضَاءُ', 'بِجَانِبِ · مُقَابِلَ', 'قَرِيبٌ مِنْ · بَعِيدٌ عَنْ', 'لِأَنَّ · لٰكِنَّ'],
    model: {
      text: 'مَرْحَبًا! فِي عَائِلَتِي خَمْسَةُ أَشْخَاصٍ. أَبِي طَوِيلٌ وَهَادِئٌ، وَشَعْرُهُ رَمَادِيٌّ. أُمِّي قَصِيرَةٌ وَلَطِيفَةٌ جِدًّا. نَسْكُنُ فِي بَيْتٍ فِي لُوتُنَ، وَفِيهِ ثَلَاثُ غُرَفِ نَوْمٍ. غُرْفَتِي صَغِيرَةٌ وَمُرَتَّبَةٌ؛ فِيهَا سَرِيرٌ أَبْيَضُ وَخِزَانَةٌ بُنِّيَّةٌ. المَسْجِدُ قَرِيبٌ مِنْ بَيْتِي، لٰكِنَّ المَدْرَسَةَ بَعِيدَةٌ عَنْهُ. أُحِبُّ حَيِّي لِأَنَّ جِيرَانَنَا لُطَفَاءُ.',
      en: '“Hello! There are five people in my family. My father is tall and calm, and his hair is grey. My mother is short and very kind. We live in a house in Luton with three bedrooms. My room is small and tidy; it has a white bed and a brown wardrobe. The mosque is near my home, but the school is far from it. I love my area because our neighbours are kind.”',
      find: ['وَشَعْرُهُ رَمَادِيٌّ', 'أُمِّي قَصِيرَةٌ وَلَطِيفَةٌ', 'سَرِيرٌ أَبْيَضُ وَخِزَانَةٌ بُنِّيَّةٌ', 'قَرِيبٌ مِنْ … بَعِيدَةٌ عَنْهُ'],
    },
  },
  checkCore: 'cover every bullet point in full sentences within the time?',
  checkDevelop: 'get the agreements right (people, colours, يُوجَدُ / تُوجَدُ)?',
  remember: 'Remember: decode the question word, answer in full sentences, check every agreement.',
});
