'use strict';
/* Practice Room · F5-L04 · Giving reasons — taste and health. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f5-l04',
  arShort: 'المَذَاقُ وَالصِّحَّةُ',
  grammar: 'li-annahu + masculine adjective (al-shāy → ḥulwun) / li-annahā + feminine adjective (al-salaṭa → ṭāzajatun); non-human plurals → feminine singular; fī raʾyī; wa-lākin',
  focus: 'Students run their own speaking and writing practice giving food opinions with reasons: say the taste and health adjectives, act a short dialogue, answer question cards, do a role-play card as a food critic, give a 30-second talk, then build, fix and write a short food review.',
  words1: 'Taste', words2: 'Health and giving reasons',
  dialogue: {
    title: 'Why do you like it?', ar: 'لِمَاذَا تُحِبُّهُ؟',
    lines: [
      ['A', 'هَلْ تُحِبُّ الحُمُّصَ؟', 'Do you like hummus?'],
      ['B', 'نَعَمْ، أُحِبُّهُ لِأَنَّهُ لَذِيذٌ وَصِحِّيٌّ.', 'Yes, I like it because it is delicious and healthy.'],
      ['A', 'وَالشُّوكُولَاتَةُ؟', 'And chocolate?'],
      ['B', 'أُحِبُّهَا لِأَنَّهَا حُلْوَةٌ، وَلٰكِنْ فِي رَأْيِي هِيَ لَيْسَتْ صِحِّيَّةً.', 'I like it because it is sweet, but in my opinion it is not healthy.'],
      ['A', 'هَلْ تُحِبُّ الطَّعَامَ الحَارَّ؟', 'Do you like spicy food?'],
      ['B', 'لَا، لَا أُحِبُّهُ لِأَنَّهُ حَارٌّ جِدًّا!', 'No, I don’t like it because it is too spicy!'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give YOUR real opinions — check لِأَنَّهُ / لِأَنَّهَا every time.',
  },
  questions: [
    { q: 'لِمَاذَا تُحِبُّ الفَاكِهَةَ؟', en: 'Why do you like fruit?', start: 'لِأَنَّهَا …', more: '… وَمُفِيدَةٌ لِلْجِسْمِ' },
    { q: 'مَا رَأْيُكَ فِي القَهْوَةِ؟', en: 'What do you think of coffee?', start: 'فِي رَأْيِي هِيَ …', more: '… لِذٰلِكَ لَا أَشْرَبُهَا' },
    { q: 'هَلِ البَطَاطِسُ المَقْلِيَّةُ صِحِّيَّةٌ؟', en: 'Are chips healthy?', start: 'لَا، لَيْسَتْ صِحِّيَّةً …', more: '… لٰكِنَّهَا لَذِيذَةٌ' },
    { q: 'مَا الطَّعَامُ الَّذِي لَا تُحِبُّهُ؟ لِمَاذَا؟', en: 'Which food don’t you like? Why?', start: 'لَا أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', more: '… مَالِحٌ / مُرٌّ …' },
    { q: 'مَا أَصَحُّ وَجْبَةٍ فِي رَأْيِكَ؟', en: 'What is the healthiest meal in your opinion?', start: 'فِي رَأْيِي …', more: '… لِأَنَّ فِيهَا …' },
  ],
  card: {
    title: 'Role-play card — the school food critic', ar: 'نَاقِدُ الطَّعَامِ', you: 'the student food critic', them: 'the canteen manager',
    tasks: [
      { ex: 'مَا رَأْيُكَ فِي الشُّورْبَةِ؟', task: 'Opinion + reason (f.).', plan: 'رَأْيُكَ ← أُحِبُّهَا لِأَنَّهَا …', model: 'أُحِبُّهَا لِأَنَّهَا سَاخِنَةٌ وَلَذِيذَةٌ.', modelEn: 'I like it because it is hot and delicious.' },
      { ex: 'وَالأَرُزُّ؟', task: 'Opinion + reason (m.).', plan: 'الأَرُزُّ ← هُوَ … لِأَنَّهُ …', model: 'لَا أُحِبُّهُ كَثِيرًا لِأَنَّهُ مَالِحٌ جِدًّا.', modelEn: 'I don’t like it much because it is very salty.' },
      { ex: 'هَلِ السَّلَطَةُ طَازَجَةٌ؟', task: 'Answer about freshness.', plan: 'هَلْ ← نَعَمْ، هِيَ … / لَا، هِيَ لَيْسَتْ …', model: 'نَعَمْ، هِيَ طَازَجَةٌ وَصِحِّيَّةٌ.', modelEn: 'Yes, it is fresh and healthy.' },
      { ex: 'مَاذَا نُغَيِّرُ فِي القَائِمَةِ؟', task: 'Suggest one change + reason.', plan: 'مَاذَا ← فِي رَأْيِي … لِأَنَّ …', model: 'فِي رَأْيِي نُضِيفُ الفَاكِهَةَ، لِأَنَّهَا صِحِّيَّةٌ وَحُلْوَةٌ.', modelEn: 'In my opinion we should add fruit, because it is healthy and sweet.' },
    ],
    girl: 'رَأْيُكِ',
    notes: 'Language: li-annahā for al-shūrba / al-salaṭa; li-annahu for al-aruzz · laysat + accusative.',
  },
  talk: {
    title: '30 seconds: tasty or healthy?', ar: 'لَذِيذٌ أَمْ صِحِّيٌّ؟',
    text: 'Talk for 30 seconds about three foods: one tasty, one healthy, one you don’t like — each with a reason.',
    routes: {
      core: 'Three foods with لِأَنَّهُ / لِأَنَّهَا.',
      develop: 'Add فِي رَأْيِي and a taste + health adjective.',
      stretch: 'Add وَلٰكِنْ to balance: لَذِيذٌ وَلٰكِنْ لَيْسَ صِحِّيًّا.',
    },
  },
  builder: [
    { en: 'I like salad because it is fresh.', cols: [['أُحِبُّ السَّلَطَةَ', 'أُحِبُّ السَّلَطَةُ'], ['لِأَنَّهَا', 'لِأَنَّهُ'], ['طَازَجَةٌ.', 'طَازَجٌ.']], key: [0, 0, 0], why: 'سَلَطَةٌ (f.) → لِأَنَّهَا طَازَجَةٌ.' },
    { en: 'Tea is sweet but not healthy.', cols: [['الشَّايُ حُلْوٌ', 'الشَّايُ حُلْوَةٌ'], ['وَلٰكِنَّهُ', 'وَلِأَنَّهُ'], ['لَيْسَ صِحِّيًّا.', 'لَيْسَ صِحِّيٌّ.']], key: [0, 0, 0], why: 'شَايٌ (m.); after لَيْسَ → accusative صِحِّيًّا.' },
    { en: 'Vegetables are useful for the body.', cols: [['الخُضَارُ', 'الخُضَارَ'], ['مُفِيدَةٌ', 'مُفِيدُونَ'], ['لِلْجِسْمِ.', 'الجِسْمَ.']], key: [0, 0, 0], why: 'Non-human plural → feminine singular مُفِيدَةٌ.' },
  ],
  errors: [
    { wrong: 'أُحِبُّ البُرْتُقَالَ لِأَنَّهَا حُلْوَةٌ.', hint: 'بُرْتُقَالٌ is masculine.', right: 'أُحِبُّ البُرْتُقَالَ لِأَنَّهُ حُلْوٌ.', why: 'Masculine → لِأَنَّهُ حُلْوٌ.' },
    { wrong: 'الحَلْوَيَاتُ لَذِيذُونَ.', hint: 'Desserts are not people.', right: 'الحَلْوَيَاتُ لَذِيذَةٌ.', why: 'Non-human plural → feminine singular.' },
    { wrong: 'الشُّوكُولَاتَةُ لَيْسَتْ صِحِّيَّةٌ.', hint: 'After لَيْسَتْ …', right: 'الشُّوكُولَاتَةُ لَيْسَتْ صِحِّيَّةً.', why: 'لَيْسَ / لَيْسَتْ + accusative (-an / -atan).' },
  ],
  task: {
    title: 'A short food review', ar: 'تَقْيِيمُ الطَّعَامِ',
    text: 'Write a short review (about 40–60 words) of the food at your school canteen or at a family meal. Include: • two dishes you like, with taste reasons • one dish you don’t like, with a reason • one healthy food • your overall opinion with وَلٰكِنْ.',
    phrases: [['أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', 'I like … because it is …'], ['لَا أُحِبُّ … لِأَنَّهُ … جِدًّا', 'I don’t like … because it is very …'], ['… صِحِّيٌّ / صِحِّيَّةٌ وَمُفِيدٌ / مُفِيدَةٌ', '… is healthy and good for you'], ['فِي رَأْيِي … وَلٰكِنْ …', 'in my opinion … but …']],
    coreFrames: [
      { ar: 'أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I like … because it is …' },
      { ar: 'أُحِبُّ ______ أَيْضًا لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I also like … because it is …' },
      { ar: 'لَا أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I don’t like … because it is …' },
      { ar: 'فِي رَأْيِي الطَّعَامُ ______ .', en: 'In my opinion the food is …' },
    ],
    developFrames: [
      { ar: '______ صِحِّيٌّ / صِحِّيَّةٌ وَمُفِيدٌ / مُفِيدَةٌ لِلْجِسْمِ.', en: '… is healthy and good for the body.' },
      { ar: 'الطَّعَامُ لَذِيذٌ، وَلٰكِنْ ______ .', en: 'The food is tasty, but …' },
    ],
    bank: ['لَذِيذٌ · لَذِيذَةٌ', 'حُلْوٌ · حُلْوَةٌ', 'مَالِحٌ · مَالِحَةٌ', 'حَارٌّ · حَارَّةٌ', 'طَازَجٌ · طَازَجَةٌ', 'صِحِّيٌّ · صِحِّيَّةٌ', 'لِأَنَّهُ · لِأَنَّهَا', 'وَلٰكِنْ'],
    model: {
      text: 'أُحِبُّ الطَّعَامَ فِي مَقْصَفِ المَدْرَسَةِ. أُحِبُّ الشُّورْبَةَ لِأَنَّهَا سَاخِنَةٌ وَلَذِيذَةٌ، وَأُحِبُّ الدَّجَاجَ أَيْضًا لِأَنَّهُ طَازَجٌ. لَا أُحِبُّ البِيتْزَا هُنَاكَ، لِأَنَّهَا مَالِحَةٌ جِدًّا. السَّلَطَةُ صِحِّيَّةٌ وَمُفِيدَةٌ لِلْجِسْمِ. فِي رَأْيِي الطَّعَامُ جَيِّدٌ، وَلٰكِنْ يَجِبُ أَنْ تَكُونَ هُنَاكَ فَاكِهَةٌ أَكْثَرُ.',
      en: '“I like the food in the school canteen. I like the soup because it is hot and delicious, and I like the chicken too because it is fresh. I don’t like the pizza there, because it is very salty. The salad is healthy and good for the body. In my opinion the food is good, but there should be more fruit.”',
      find: ['لِأَنَّهَا سَاخِنَةٌ وَلَذِيذَةٌ', 'لِأَنَّهُ طَازَجٌ', 'لِأَنَّهَا مَالِحَةٌ', 'وَلٰكِنْ يَجِبُ'],
    },
  },
  checkCore: 'give a reason for every opinion with لِأَنَّهُ / لِأَنَّهَا?',
  checkDevelop: 'make every adjective agree with the food (including plurals)?',
});
