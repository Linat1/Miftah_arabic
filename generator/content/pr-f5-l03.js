'use strict';
/* Practice Room · F5-L03 · Food likes, dislikes and preferences. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f5-l03',
  arShort: 'مَا أُحِبُّ مِنَ الطَّعَامِ',
  grammar: 'ufaḍḍilu … ʿalā …; uḥibbu … akthara min …; ṭaʿāmī al-mufaḍḍalu; intensity (jiddan · kathīran · qalīlan); hal tuḥibbu / tuḥibbīna?; huwa yufaḍḍilu / hiya tufaḍḍilu',
  focus: 'Students run their own speaking and writing practice with food preferences: say the opinion words, act a short dialogue, answer question cards, do a role-play card choosing a family takeaway, give a 30-second talk, then build, fix and write a short food-preferences profile.',
  words1: 'Liking and preferring', words2: 'Asking and reporting preferences',
  dialogue: {
    title: 'Pizza or kabsa?', ar: 'البِيتْزَا أَمِ الكَبْسَةُ؟',
    lines: [
      ['A', 'مَا طَعَامُكَ المُفَضَّلُ؟', 'What is your favourite food?'],
      ['B', 'طَعَامِي المُفَضَّلُ الكَبْسَةُ، أُحِبُّهَا جِدًّا!', 'My favourite food is kabsa — I love it!'],
      ['A', 'أَيُّهُمَا تُفَضِّلُ: الكَبْسَةَ أَمِ البِيتْزَا؟', 'Which do you prefer: kabsa or pizza?'],
      ['B', 'أُفَضِّلُ الكَبْسَةَ عَلَى البِيتْزَا. وَأَنْتِ، هَلْ تُحِبِّينَ البِيتْزَا؟', 'I prefer kabsa to pizza. And you, do you like pizza?'],
      ['A', 'نَعَمْ، أُحِبُّهَا كَثِيرًا، لٰكِنِّي أُحِبُّ السَّمَكَ أَكْثَرَ مِنْهَا.', 'Yes, I like it a lot, but I like fish more than it.'],
      ['B', 'أَخِي يُفَضِّلُ الدَّجَاجَ، وَأُخْتِي تُفَضِّلُ السَّلَطَةَ.', 'My brother prefers chicken, and my sister prefers salad.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: compare YOUR two real favourite foods.',
  },
  questions: [
    { q: 'مَا طَعَامُكَ المُفَضَّلُ؟', en: 'What is your favourite food?', start: 'طَعَامِي المُفَضَّلُ …', more: '… أُحِبُّهُ / أُحِبُّهَا جِدًّا' },
    { q: 'أَيُّهُمَا تُفَضِّلُ: الشَّايَ أَمِ العَصِيرَ؟', en: 'Which do you prefer: tea or juice?', start: 'أُفَضِّلُ …', more: '… عَلَى …' },
    { q: 'هَلْ تُحِبُّ الحَلْوَيَاتِ؟', en: 'Do you like sweets / desserts?', start: 'نَعَمْ، أُحِبُّهَا … / لَا، …', more: '… كَثِيرًا / قَلِيلًا' },
    { q: 'مَاذَا تُحِبُّ أَكْثَرَ: الأَرُزَّ أَمِ البَطَاطِسَ؟', en: 'What do you like more: rice or potatoes?', start: 'أُحِبُّ … أَكْثَرَ مِنْ …', more: '…' },
    { q: 'مَاذَا يُفَضِّلُ أَبُوكَ؟', en: 'What does your father prefer?', start: 'أَبِي يُفَضِّلُ …', more: '… وَأُمِّي تُفَضِّلُ …' },
  ],
  card: {
    title: 'Role-play card — choosing a takeaway for the family', ar: 'نَخْتَارُ العَشَاءَ', you: 'yourself', them: 'your older brother or sister',
    tasks: [
      { ex: 'مَاذَا تُرِيدُ لِلْعَشَاءِ؟', task: 'Give your choice.', plan: 'مَاذَا ← أُرِيدُ …', model: 'أُرِيدُ الفَلَافِلَ وَالحُمُّصَ.', modelEn: 'I want falafel and hummus.' },
      { ex: 'أَيُّهُمَا تُفَضِّلُ: البِيتْزَا أَمِ الدَّجَاجَ؟', task: 'Choose.', plan: 'أَيُّهُمَا ← أُفَضِّلُ …', model: 'أُفَضِّلُ الدَّجَاجَ عَلَى البِيتْزَا.', modelEn: 'I prefer chicken to pizza.' },
      { ex: 'وَمَاذَا تُحِبُّ أُمِّي؟', task: 'Report mum’s preference.', plan: 'مَاذَا ← أُمِّي تُحِبُّ …', model: 'أُمِّي تُحِبُّ السَّمَكَ أَكْثَرَ مِنَ الدَّجَاجِ.', modelEn: 'Mum likes fish more than chicken.' },
      { ex: 'وَأَبِي؟', task: 'Report dad’s preference.', plan: 'أَبِي ← أَبِي يُفَضِّلُ …', model: 'أَبِي يُفَضِّلُ الكَبْسَةَ دَائِمًا!', modelEn: 'Dad always prefers kabsa!' },
    ],
    girl: 'تُرِيدِينَ · تُفَضِّلِينَ',
    notes: 'Language: ufaḍḍilu X ʿalā Y · akthara min + genitive · reporting he / she preferences.',
  },
  talk: {
    title: '30 seconds: my food favourites', ar: 'طَعَامِي المُفَضَّلُ',
    text: 'Talk for 30 seconds about your favourite food and drink, one preference between two foods, and what someone in your family prefers.',
    routes: {
      core: 'طَعَامِي المُفَضَّلُ … · أُفَضِّلُ … · لَا أُحِبُّ …',
      develop: 'Add intensity (جِدًّا · كَثِيرًا · قَلِيلًا) and أَكْثَرَ مِنْ.',
      stretch: 'Report two family members (هُوَ يُفَضِّلُ · هِيَ تُفَضِّلُ).',
    },
  },
  builder: [
    { en: 'I prefer tea to coffee.', cols: [['أُفَضِّلُ', 'تُفَضِّلُ'], ['الشَّايَ', 'الشَّايُ'], ['عَلَى القَهْوَةِ.', 'مِنَ القَهْوَةُ.']], key: [0, 0, 0], why: 'I prefer X to Y = أُفَضِّلُ X عَلَى Y.' },
    { en: 'I like fish more than meat.', cols: [['أُحِبُّ السَّمَكَ', 'أُحِبُّ السَّمَكُ'], ['أَكْثَرَ', 'كَثِيرٌ'], ['مِنَ اللَّحْمِ.', 'اللَّحْمَ.']], key: [0, 0, 0], why: 'more than = أَكْثَرَ مِنْ + genitive.' },
    { en: 'My sister prefers salad.', cols: [['أُخْتِي', 'أَخِي'], ['تُفَضِّلُ', 'يُفَضِّلُ'], ['السَّلَطَةَ.', 'السَّلَطَةُ.']], key: [0, 0, 0], why: 'She → تُفَضِّلُ; object -a.' },
  ],
  errors: [
    { wrong: 'أُفَضِّلُ الأَرُزَّ مِنَ الخُبْزِ.', hint: 'Prefer X TO Y …', right: 'أُفَضِّلُ الأَرُزَّ عَلَى الخُبْزِ.', why: 'أُفَضِّلُ … عَلَى …' },
    { wrong: 'طَعَامِي المُفَضَّلَةُ الدَّجَاجُ.', hint: 'طَعَامٌ is masculine.', right: 'طَعَامِي المُفَضَّلُ الدَّجَاجُ.', why: 'Masculine → المُفَضَّلُ.' },
    { wrong: 'أَبِي تُفَضِّلُ السَّمَكَ.', hint: 'My father = he.', right: 'أَبِي يُفَضِّلُ السَّمَكَ.', why: 'He → يُفَضِّلُ.' },
  ],
  task: {
    title: 'My food preferences profile', ar: 'مَلَفُّ طَعَامِي المُفَضَّلِ',
    text: 'Write a food profile (about 40–60 words) for a cooking club. Include: • your favourite food and drink • one preference (أُفَضِّلُ … عَلَى …) • one comparison (أُحِبُّ … أَكْثَرَ مِنْ …) • a food you like a little or don’t like • two family members’ preferences.',
    phrases: [['طَعَامِي المُفَضَّلُ …', 'my favourite food is …'], ['أُفَضِّلُ … عَلَى …', 'I prefer … to …'], ['أُحِبُّ … أَكْثَرَ مِنْ …', 'I like … more than …'], ['هُوَ يُفَضِّلُ … · هِيَ تُفَضِّلُ …', 'he prefers … · she prefers …']],
    coreFrames: [
      { ar: 'طَعَامِي المُفَضَّلُ ______ ، وَشَرَابِي المُفَضَّلُ ______ .', en: 'My favourite food is …, and my favourite drink is …' },
      { ar: 'أُفَضِّلُ ______ عَلَى ______ .', en: 'I prefer … to …' },
      { ar: 'لَا أُحِبُّ ______ .', en: 'I don’t like …' },
      { ar: 'أَبِي يُفَضِّلُ ______ .', en: 'My dad prefers …' },
    ],
    developFrames: [
      { ar: 'أُحِبُّ ______ أَكْثَرَ مِنْ ______ .', en: 'I like … more than …' },
      { ar: 'أُمِّي تُحِبُّ ______ جِدًّا، لٰكِنِّي ______ .', en: 'My mum loves …, but I …' },
    ],
    bank: ['طَعَامِي المُفَضَّلُ', 'أُفَضِّلُ … عَلَى', 'أَكْثَرَ مِنْ', 'جِدًّا · كَثِيرًا · قَلِيلًا', 'يُفَضِّلُ · تُفَضِّلُ', 'يُحِبُّ · تُحِبُّ', 'لٰكِنَّ', 'خُصُوصًا'],
    model: {
      text: 'طَعَامِي المُفَضَّلُ المَنْسَفُ، وَشَرَابِي المُفَضَّلُ عَصِيرُ المَانْجُو. أُفَضِّلُ الأَرُزَّ عَلَى المَعْكَرُونَةِ، وَأُحِبُّ الدَّجَاجَ أَكْثَرَ مِنَ السَّمَكِ. أُحِبُّ الخُضَارَ قَلِيلًا، لٰكِنِّي لَا أُحِبُّ البَصَلَ أَبَدًا. أَبِي يُفَضِّلُ القَهْوَةَ العَرَبِيَّةَ، وَأُمِّي تُحِبُّ الحَلْوَيَاتِ جِدًّا، خُصُوصًا الكُنَافَةَ.',
      en: '“My favourite food is mansaf, and my favourite drink is mango juice. I prefer rice to pasta, and I like chicken more than fish. I like vegetables a little, but I don’t like onions at all. My dad prefers Arabic coffee, and my mum loves desserts very much, especially kunafa.”',
      find: ['طَعَامِي المُفَضَّلُ', 'أُفَضِّلُ الأَرُزَّ عَلَى', 'أَكْثَرَ مِنَ السَّمَكِ', 'أَبِي يُفَضِّلُ'],
    },
  },
  checkCore: 'use أُفَضِّلُ … عَلَى … correctly?',
  checkDevelop: 'compare with أَكْثَرَ مِنْ and report he / she preferences?',
});
