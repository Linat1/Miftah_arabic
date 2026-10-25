'use strict';
/* Practice Room · F5-L01 · Food and drinks. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f5-l01',
  arShort: 'الطَّعَامُ وَالشَّرَابُ',
  grammar: 'ākulu (I eat) · ashrabu (I drink) + food as object (-a); uḥibbu / lā uḥibbu; hal tuḥibbu / tuḥibbīna …?; food categories',
  focus: 'Students run their own speaking and writing practice about food and drinks: say the food words, act a short dialogue, answer question cards, do a role-play card planning a picnic, give a 30-second talk, then build, fix and write about what they eat and drink.',
  words1: 'Food', words2: 'Fruit, vegetables and drinks',
  dialogue: {
    title: 'What do you like to eat?', ar: 'مَاذَا تُحِبُّ أَنْ تَأْكُلَ؟',
    lines: [
      ['A', 'مَاذَا تُحِبُّ أَنْ تَأْكُلَ؟', 'What do you like to eat?'],
      ['B', 'أُحِبُّ الدَّجَاجَ وَالأَرُزَّ كَثِيرًا.', 'I like chicken and rice a lot.'],
      ['A', 'وَهَلْ تُحِبُّ السَّمَكَ؟', 'And do you like fish?'],
      ['B', 'لَا، لَا أُحِبُّ السَّمَكَ. وَأَنْتِ؟', 'No, I don’t like fish. And you (to a girl)?'],
      ['A', 'أَنَا أُحِبُّ السَّلَطَةَ وَالفَاكِهَةَ، خُصُوصًا المَوْزَ.', 'I like salad and fruit, especially bananas.'],
      ['B', 'وَمَاذَا تَشْرَبِينَ؟ — أَشْرَبُ المَاءَ وَالعَصِيرَ.', 'And what do you drink? — I drink water and juice.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give YOUR real food likes and dislikes.',
  },
  questions: [
    { q: 'مَاذَا تَأْكُلُ كَثِيرًا؟', en: 'What do you eat a lot?', start: 'آكُلُ … كَثِيرًا', more: '… وَ… أَيْضًا' },
    { q: 'مَاذَا تَشْرَبُ فِي الصَّبَاحِ؟', en: 'What do you drink in the morning?', start: 'أَشْرَبُ …', more: '… وَأَحْيَانًا …' },
    { q: 'هَلْ تُحِبُّ الخُضَارَ؟', en: 'Do you like vegetables?', start: 'نَعَمْ، أُحِبُّ … / لَا، لَا أُحِبُّ …', more: '… خُصُوصًا …' },
    { q: 'مَا الفَاكِهَةُ الَّتِي تُحِبُّهَا؟', en: 'Which fruit do you like?', start: 'أُحِبُّ … وَ…', more: '… لٰكِنْ لَا أُحِبُّ …' },
    { q: 'مَاذَا لَا تَأْكُلُ أَبَدًا؟', en: 'What do you never eat?', start: 'لَا آكُلُ … أَبَدًا', more: '… لِأَنَّهُ / لِأَنَّهَا …' },
  ],
  card: {
    title: 'Role-play card — planning a class picnic', ar: 'نُخَطِّطُ لِنُزْهَةٍ', you: 'a student', them: 'a classmate making the list',
    tasks: [
      { ex: 'مَاذَا نَأْكُلُ فِي النُّزْهَةِ؟', task: 'Suggest two foods.', plan: 'مَاذَا ← نَأْكُلُ … وَ…', model: 'نَأْكُلُ الخُبْزَ وَالجُبْنَ.', modelEn: 'We eat bread and cheese.' },
      { ex: 'وَمَاذَا نَشْرَبُ؟', task: 'Suggest two drinks.', plan: 'مَاذَا ← نَشْرَبُ … وَ…', model: 'نَشْرَبُ المَاءَ وَعَصِيرَ البُرْتُقَالِ.', modelEn: 'We drink water and orange juice.' },
      { ex: 'هَلْ تُحِبُّ الدَّجَاجَ؟', task: 'Answer yes / no.', plan: 'هَلْ ← نَعَمْ، أُحِبُّ … / لَا، …', model: 'نَعَمْ، أُحِبُّ الدَّجَاجَ كَثِيرًا.', modelEn: 'Yes, I like chicken a lot.' },
      { ex: 'هَلْ هُنَاكَ شَيْءٌ لَا تَأْكُلُهُ؟', task: 'Name one thing you don’t eat.', plan: 'هَلْ ← لَا آكُلُ …', model: 'نَعَمْ، لَا آكُلُ السَّمَكَ.', modelEn: 'Yes, I don’t eat fish.' },
    ],
    girl: 'تُحِبِّينَ · تَأْكُلِينَهُ',
    notes: 'Language: naʾkulu / nashrabu (we) · food as object with -a · lā ākulu.',
  },
  talk: {
    title: '30 seconds: what I eat and drink', ar: 'مَاذَا آكُلُ وَأَشْرَبُ',
    text: 'Talk for 30 seconds about what you eat and drink: favourites, things you don’t like, and what you never eat.',
    routes: {
      core: 'آكُلُ … · أَشْرَبُ … · أُحِبُّ …',
      develop: 'Add لَا أُحِبُّ … and كَثِيرًا / أَحْيَانًا.',
      stretch: 'Add خُصُوصًا … and a family member: أُمِّي تُحِبُّ …',
    },
  },
  builder: [
    { en: 'I eat rice and chicken.', cols: [['آكُلُ', 'يَأْكُلُ'], ['الأَرُزَّ', 'الأَرُزُّ'], ['وَالدَّجَاجَ.', 'وَالدَّجَاجُ.']], key: [0, 0, 0], why: 'I eat = آكُلُ; the food is the object → -a.' },
    { en: 'I don’t drink coffee.', cols: [['لَا', 'لَيْسَ'], ['أَشْرَبُ', 'تَشْرَبُ'], ['القَهْوَةَ.', 'القَهْوَةُ.']], key: [0, 0, 0], why: 'Negative of a verb = لَا + verb.' },
    { en: 'Do you like salad? (to a girl)', cols: [['هَلْ', 'مَا'], ['تُحِبِّينَ', 'تُحِبُّ'], ['السَّلَطَةَ؟', 'السَّلَطَةُ؟']], key: [0, 0, 0], why: 'To a girl → تُحِبِّينَ.' },
  ],
  errors: [
    { wrong: 'أَنَا يَأْكُلُ الخُبْزَ.', hint: 'Who eats?', right: 'أَنَا آكُلُ الخُبْزَ.', why: 'I eat = آكُلُ.' },
    { wrong: 'لَيْسَ أُحِبُّ السَّمَكَ.', hint: 'Negative with a verb.', right: 'لَا أُحِبُّ السَّمَكَ.', why: 'With a present verb use لَا.' },
    { wrong: 'هَلْ تُحِبُّ المَوْزَ يَا هُدَى؟', hint: 'Huda is a girl.', right: 'هَلْ تُحِبِّينَ المَوْزَ يَا هُدَى؟', why: 'To a girl: تُحِبِّينَ.' },
  ],
  task: {
    title: 'What I eat and drink', ar: 'مَاذَا آكُلُ وَأَشْرَبُ',
    text: 'Write a short text (about 35–55 words) for a class food survey. Include: • three foods you eat • two drinks • what you like a lot • what you don’t like • one thing a family member likes.',
    phrases: [['آكُلُ … وَ… وَ…', 'I eat …, … and …'], ['أَشْرَبُ … وَ…', 'I drink … and …'], ['أُحِبُّ … كَثِيرًا', 'I like … a lot'], ['لَا أُحِبُّ … · لَا آكُلُ …', 'I don’t like … · I don’t eat …']],
    coreFrames: [
      { ar: 'آكُلُ ______ وَ ______ وَ ______ .', en: 'I eat …, … and …' },
      { ar: 'أَشْرَبُ ______ وَ ______ .', en: 'I drink … and …' },
      { ar: 'أُحِبُّ ______ كَثِيرًا.', en: 'I like … a lot.' },
      { ar: 'لَا أُحِبُّ ______ .', en: 'I don’t like …' },
    ],
    developFrames: [
      { ar: 'أُحِبُّ الفَاكِهَةَ، خُصُوصًا ______ .', en: 'I like fruit, especially …' },
      { ar: 'أَبِي / أُمِّي يُحِبُّ / تُحِبُّ ______ .', en: 'My dad / mum likes …' },
    ],
    bank: ['آكُلُ · أَشْرَبُ', 'أُحِبُّ · لَا أُحِبُّ', 'خُبْزٌ · أَرُزٌّ', 'دَجَاجٌ · سَمَكٌ', 'سَلَطَةٌ · بَطَاطِسُ', 'مَاءٌ · عَصِيرٌ · شَايٌ', 'كَثِيرًا · أَحْيَانًا', 'خُصُوصًا'],
    model: {
      text: 'آكُلُ الخُبْزَ وَالأَرُزَّ وَالدَّجَاجَ كُلَّ أُسْبُوعٍ. أَشْرَبُ المَاءَ وَالحَلِيبَ، وَأَحْيَانًا الشَّايَ. أُحِبُّ الفَاكِهَةَ كَثِيرًا، خُصُوصًا المَوْزَ وَالبُرْتُقَالَ. لَا أُحِبُّ السَّمَكَ، وَلَا آكُلُ البَطَاطِسَ كَثِيرًا. أَبِي يُحِبُّ السَّلَطَةَ، وَأُمِّي تُحِبُّ العَصِيرَ.',
      en: '“I eat bread, rice and chicken every week. I drink water and milk, and sometimes tea. I like fruit a lot, especially bananas and oranges. I don’t like fish, and I don’t eat potatoes much. My dad likes salad, and my mum likes juice.”',
      find: ['آكُلُ الخُبْزَ', 'أَشْرَبُ المَاءَ', 'خُصُوصًا المَوْزَ', 'لَا أُحِبُّ السَّمَكَ'],
    },
  },
  checkCore: 'use آكُلُ / أَشْرَبُ with the food as object (-a)?',
  checkDevelop: 'use لَا before the verb to say what you don’t like or eat?',
});
