'use strict';
/* TB-L07 · Clothes, Accessories and Shopping — website: Advanced Topics › Topic B › Lesson 7 (lesson engine D2-L03).
   Preparation points to TB-L08 (engine D5-L01): five hobby words from the website D5-L01 vocabulary. */
const T = require('./topic-common');

const meta = T.meta('B', 7, { fileTitle: 'Clothes_Accessories_and_Shopping', chip: 'Clothes and Shopping', icon: 'FaBagShopping' });
const slides = T.reuse('B', 7, require('./d2-l03'), {
  challenge: {
    steps: [
      'Pairs: A is the customer, B the shop assistant (then swap).',
      'Customer asks for an item by size, colour and material.',
      'Assistant offers two alternatives with prices; customer compares them.',
      'Customer decides and explains the choice. Two pairs perform on the mic.',
    ],
    routes: {
      core: 'Ask for one item with a colour: “urīdu qamīṣan azraq, min faḍlika”.',
      develop: 'Add size and price: “bi-kam hādhā?” and compare two items.',
      stretch: 'Compare with a comparative (arkhaṣu min, a‘jabu) and justify the decision.',
    },
    phrases: [['أُرِيدُ … مِنْ فَضْلِكَ', 'I would like …, please'], ['مَقَاسٌ كَبِيرٌ / صَغِيرٌ', 'a large / small size'], ['بِكَمْ هٰذَا؟ / بِكَمْ هٰذِهِ؟', 'how much is this? (m. / f.)'], ['هٰذَا أَرْخَصُ مِنْ ذٰلِكَ', 'this is cheaper than that']],
    notes: 'Website Topic B challenge “Clothes-shop role-play” (comparatives, numbers, demonstratives, object pronouns). Reuses AT-A-L05 café politeness (مِنْ فَضْلِكَ / كِ). Stretch object pronoun: سَآخُذُهُ / سَآخُذُهَا (I will take it — m. / f.).',
  },
  prep: {
    words: [['هِوَايَةٌ', 'a hobby', 'pl. هِوَايَاتٌ'], ['وَقْتُ الفَرَاغِ', 'free time', ''], ['يُمَارِسُ الرِّيَاضَةَ', 'he does sport', 'I: أُمَارِسُ'], ['يَلْعَبُ كُرَةَ القَدَمِ', 'he plays football', 'I: أَلْعَبُ'], ['يَسْتَمِعُ إِلَى المُوسِيقَى', 'he listens to music', 'I: أَسْتَمِعُ']],
    questionEn: 'What do you do in your free time? Write one sentence in Arabic.',
    questionAr: 'مَاذَا تَفْعَلُ فِي وَقْتِ فَرَاغِكَ؟',
    homework: {
      core: 'Website D2-L03: the picture game and the vocabulary tab — learn 8 clothes words.',
      develop: 'Write a 6-line shop dialogue with size, colour and price.',
      stretch: 'Website writing task on clothes and shopping, with a comparison and a decision.',
    },
    wordsSource: 'The five words come from the website D5-L01 vocabulary (the TB-L08 lesson engine).',
  },
  close: { remember: 'Remember: 5 free-time words + your hobby.' },
});
module.exports = { meta, slides };
