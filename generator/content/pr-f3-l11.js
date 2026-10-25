'use strict';
/* Practice Room · F3-L11 · F3 consolidation — integrated skills review. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f3-l11',
  arShort: 'مُرَاجَعَةُ الوَحْدَةِ',
  grammar: 'F3 key decisions: hādhā / hādhihi; m. / f. adjectives; colour agreement; yūjadu / tūjadu; possessive endings; positions + genitive; qarībun min / baʿīdun ʿan',
  focus: 'Students run their own speaking and writing practice across F3: retrieve the key words, act a model exchange, answer mixed question cards, do an estate-agent role-play card, give a 30-second talk, then build, fix (the most common F3 errors) and write a short text that shows every key decision.',
  words1: 'F3 review: family and people', words2: 'F3 review: home and neighbourhood',
  dialogue: {
    title: 'A visit to a new family', ar: 'زِيَارَةُ عَائِلَةٍ جَدِيدَةٍ',
    lines: [
      ['A', 'هٰذَا بَيْتُكُمُ الجَدِيدُ؟ مَا شَاءَ اللّٰهُ!', 'Is this your new house? How lovely!'],
      ['B', 'نَعَمْ، فِيهِ أَرْبَعُ غُرَفٍ، وَتُوجَدُ حَدِيقَةٌ خَلْفَهُ.', 'Yes, it has four rooms, and there is a garden behind it.'],
      ['A', 'وَمَنْ هٰذِهِ فِي الصُّورَةِ؟', 'And who is this (f.) in the photo?'],
      ['B', 'هٰذِهِ خَالَتِي، هِيَ مُجْتَهِدَةٌ وَمُتَعَاوِنَةٌ جِدًّا.', 'This is my aunt; she is very hard-working and helpful.'],
      ['A', 'هَلِ البَيْتُ قَرِيبٌ مِنَ الحَدِيقَةِ العَامَّةِ؟', 'Is the house near the public park?'],
      ['B', 'نَعَمْ، قَرِيبٌ جِدًّا، لٰكِنَّهُ بَعِيدٌ عَنِ المَدْرَسَةِ.', 'Yes, very near, but it is far from the school.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: talk about YOUR home and one relative — check every agreement.',
  },
  questions: [
    { q: 'مَنْ هٰذَا؟ / مَنْ هٰذِهِ؟ (show a photo)', en: 'Who is this? (show a real or imagined photo)', start: 'هٰذَا … / هٰذِهِ …', more: '… اسْمُهُ / اسْمُهَا …' },
    { q: 'صِفْ أَحَدَ أَقَارِبِكَ.', en: 'Describe one of your relatives.', start: 'خَالِي / خَالَتِي …', more: '… وَشَعْرُهُ / وَشَعْرُهَا …' },
    { q: 'مَاذَا يُوجَدُ فِي مَطْبَخِكُمْ؟', en: 'What is in your kitchen?', start: 'يُوجَدُ … وَتُوجَدُ …', more: '… لَوْنُهَا …' },
    { q: 'مَا لَوْنُ خِزَانَتِكَ وَسَرِيرِكَ؟', en: 'What colour are your wardrobe and bed?', start: 'خِزَانَتِي … وَسَرِيرِي …', more: '… فَاتِحٌ / غَامِقٌ' },
    { q: 'هَلْ بَيْتُكَ قَرِيبٌ مِنَ المَسْجِدِ؟', en: 'Is your home near the mosque?', start: 'نَعَمْ، قَرِيبٌ مِنْ … / لَا، بَعِيدٌ عَنْ …', more: '… لٰكِنَّهُ …' },
  ],
  card: {
    title: 'Role-play card — finding a new home with an estate agent', ar: 'عِنْدَ الوَكِيلِ العَقَارِيِّ', you: 'a family member looking for a home', them: 'the estate agent',
    tasks: [
      { ex: 'كَمْ شَخْصًا فِي عَائِلَتِكَ؟', task: 'Say how many + who.', plan: 'كَمْ ← فِي عَائِلَتِي … : …', model: 'فِي عَائِلَتِي سِتَّةُ أَشْخَاصٍ: وَالِدَايَ وَإِخْوَتِي وَجَدَّتِي.', modelEn: 'There are six of us: my parents, my brothers and my grandmother.' },
      { ex: 'كَمْ غُرْفَةَ نَوْمٍ تُرِيدُونَ؟', task: 'Give a number of bedrooms.', plan: 'كَمْ ← نُرِيدُ … غُرَفِ نَوْمٍ', model: 'نُرِيدُ أَرْبَعَ غُرَفِ نَوْمٍ.', modelEn: 'We want four bedrooms.' },
      { ex: 'هَلْ تُرِيدُونَ حَدِيقَةً؟', task: 'Yes + why.', plan: 'هَلْ ← نَعَمْ … لِأَنَّ …', model: 'نَعَمْ، لِأَنَّ أَخِي الصَّغِيرَ يُحِبُّ اللَّعِبَ.', modelEn: 'Yes, because my little brother loves playing.' },
      { ex: 'أَيْنَ تُرِيدُونَ البَيْتَ؟', task: 'Say: near / far from places.', plan: 'أَيْنَ ← قَرِيبًا مِنْ … وَ…', model: 'قَرِيبًا مِنَ المَدْرَسَةِ وَالمَسْجِدِ، وَبَعِيدًا عَنِ الشَّارِعِ الكَبِيرِ.', modelEn: 'Near the school and the mosque, and far from the main road.' },
    ],
    girl: 'عَائِلَتِكِ',
    notes: 'Uses the whole unit: family members · numbers + rooms · reasons · qarīb min / baʿīd ʿan.',
  },
  talk: {
    title: '30 seconds: F3 in one talk', ar: 'الوَحْدَةُ كُلُّهَا',
    text: 'In 30 seconds: one family member (appearance + personality), your home (rooms + one colour), and one place near your home.',
    routes: {
      core: 'One sentence each: person · home · place.',
      develop: 'Two sentences each, with agreement checked.',
      stretch: 'Add positions, colours and an opinion with لِأَنَّ / لٰكِنَّ.',
    },
  },
  builder: [
    { en: 'This is my cousin (f.); her hair is long.', cols: [['هٰذِهِ بِنْتُ عَمِّي،', 'هٰذَا بِنْتُ عَمِّي،'], ['شَعْرُهَا', 'شَعْرُهُ'], ['طَوِيلٌ.', 'طَوِيلَةٌ.']], key: [0, 0, 0], why: 'A girl → هٰذِهِ … شَعْرُهَا; hair is masculine → طَوِيلٌ.' },
    { en: 'There is a yellow lamp next to the bed.', cols: [['يُوجَدُ مِصْبَاحٌ', 'تُوجَدُ مِصْبَاحٌ'], ['أَصْفَرُ', 'صَفْرَاءُ'], ['بِجَانِبِ السَّرِيرِ.', 'بِجَانِبِ السَّرِيرُ.']], key: [0, 0, 0], why: 'مِصْبَاحٌ (m.) → يُوجَدُ … أَصْفَرُ; بِجَانِبِ + genitive.' },
    { en: 'The library is far from our home.', cols: [['المَكْتَبَةُ', 'المَكْتَبَةَ'], ['بَعِيدَةٌ عَنْ', 'بَعِيدٌ مِنْ'], ['بَيْتِنَا.', 'بَيْتُنَا.']], key: [0, 0, 0], why: 'Library (f.) → بَعِيدَةٌ; far from = عَنْ + genitive.' },
  ],
  errors: [
    { wrong: 'هٰذَا جَدَّتِي، هِيَ كَرِيمٌ.', hint: 'Two words don’t match a woman.', right: 'هٰذِهِ جَدَّتِي، هِيَ كَرِيمَةٌ.', why: 'Woman → هٰذِهِ + كَرِيمَةٌ.' },
    { wrong: 'السَّجَّادَةُ أَحْمَرُ.', hint: 'Colour agreement.', right: 'السَّجَّادَةُ حَمْرَاءُ.', why: 'Feminine noun → حَمْرَاءُ.' },
    { wrong: 'يُوجَدُ ثَلَّاجَةٌ فِي المَطْبَخُ.', hint: 'Two mistakes.', right: 'تُوجَدُ ثَلَّاجَةٌ فِي المَطْبَخِ.', why: 'Feminine item → تُوجَدُ; فِي + genitive.' },
  ],
  task: {
    title: 'My F3 showcase', ar: 'أَفْضَلُ مَا عِنْدِي',
    text: 'Write a short text (about 45–65 words) that shows all the key F3 decisions. Include: • one male and one female relative, described • your home: rooms, with يُوجَدُ / تُوجَدُ • two objects with colours • one place near and one place far from your home • a reason with لِأَنَّ.',
    phrases: [['هٰذَا … وَهٰذِهِ …', 'this (m.) is … and this (f.) is …'], ['يُوجَدُ … وَتُوجَدُ …', 'there is … (m. / f.)'], ['… قَرِيبٌ مِنْ … · بَعِيدٌ عَنْ …', '… near … · far from …'], ['لِأَنَّهُ / لِأَنَّهَا …', 'because he / she / it …']],
    coreFrames: [
      { ar: 'عَمِّي ______ ، وَهُوَ ______ .', en: 'My uncle is …, and he is …' },
      { ar: 'عَمَّتِي ______ ، وَهِيَ ______ .', en: 'My aunt is …, and she is …' },
      { ar: 'فِي بَيْتِنَا يُوجَدُ ______ ، وَتُوجَدُ ______ .', en: 'In our home there is … and …' },
      { ar: '______ قَرِيبٌ مِنْ بَيْتِنَا، وَ ______ بَعِيدَةٌ عَنْهُ.', en: '… is near our home, and … is far from it.' },
    ],
    developFrames: [
      { ar: 'الكَنَبَةُ ______ ، وَالسَّرِيرُ ______ .', en: 'The sofa is … (colour), and the bed is …' },
      { ar: 'أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I love … because …' },
    ],
    bank: ['هٰذَا · هٰذِهِ', 'هُوَ · هِيَ', 'يُوجَدُ · تُوجَدُ', 'أَحْمَرُ · حَمْرَاءُ', 'بُنِّيٌّ · بُنِّيَّةٌ', 'قَرِيبٌ مِنْ', 'بَعِيدٌ عَنْ', 'لِأَنَّ'],
    model: {
      text: 'عَمِّي يُوسُفُ طَوِيلٌ، وَهُوَ مُجْتَهِدٌ وَمُضْحِكٌ. عَمَّتِي هِنْدُ قَصِيرَةٌ، وَهِيَ مُتَعَاوِنَةٌ جِدًّا. فِي بَيْتِنَا ثَلَاثُ غُرَفِ نَوْمٍ؛ يُوجَدُ مَطْبَخٌ وَاسِعٌ، وَتُوجَدُ غُرْفَةُ جُلُوسٍ مُرِيحَةٌ. الكَنَبَةُ رَمَادِيَّةٌ، وَالسَّجَّادَةُ حَمْرَاءُ. المَسْجِدُ قَرِيبٌ مِنْ بَيْتِنَا، وَالمَحَطَّةُ بَعِيدَةٌ عَنْهُ. أُحِبُّ حَيِّي لِأَنَّهُ هَادِئٌ وَنَظِيفٌ.',
      en: '“My uncle Yusuf is tall; he is hard-working and funny. My aunt Hind is short; she is very helpful. In our home there are three bedrooms; there is a spacious kitchen and a comfortable living room. The sofa is grey and the rug is red. The mosque is near our home, and the station is far from it. I love my area because it is quiet and clean.”',
      find: ['وَهِيَ مُتَعَاوِنَةٌ', 'يُوجَدُ مَطْبَخٌ … وَتُوجَدُ', 'السَّجَّادَةُ حَمْرَاءُ', 'بَعِيدَةٌ عَنْهُ'],
    },
  },
  checkCore: 'get هٰذَا / هٰذِهِ and يُوجَدُ / تُوجَدُ right every time?',
  checkDevelop: 'make every adjective and colour agree?',
});
