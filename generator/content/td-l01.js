'use strict';
/* TD-L01 · Learning Institutions and Stages of Education — website: Advanced Topics › Topic D › Lesson 1 (lesson engine P2-L01).
   Topic layer: the website Topic D challenge “Education-system comparison”, the Topic game “Education Journey” (FLEX), and preparation for
   TD-L02 (engine F4-L03), whose Do Now tests the F4-L02 home words. */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('D', 1, { fileTitle: 'Learning_Institutions_and_Stages_of_Education', chip: 'Education', icon: 'FaSchool', level: 'Topic D · A2 → B1+' });
const slides = T.reuse('D', 1, require('./p2-l01'), {
  prepWordsFrom: require('./f4-l02'),
  addGame: game('d01', { title: 'Match the education route to the sentence', notes: 'TOPIC D GAME “Education Journey”: the stages (primary → secondary → university) and the qualification at the end.' }),
  challenge: {
    min: 5,
    steps: [
      'Sort 8 cards into a learner journey: nursery → primary → secondary → university / training.',
      'Choose two school types or education systems (e.g. a UK school and a school in an Arab country).',
      'Compare them on facilities, rules and opportunities — three sentences.',
      'Share one comparison with the class; partners add one question.',
    ],
    routes: {
      core: 'Order the stages and say one comparison: “… akbar min …”.',
      develop: 'Three comparisons with nisba adjectives (madrasa ḥukūmiyya / khāṣṣa).',
      stretch: 'A balanced comparison with “bayna-mā” (whereas) and one opinion with a reason.',
    },
    phrases: [['المَرْحَلَةُ الابْتِدَائِيَّةُ / الثَّانَوِيَّةُ', 'the primary / secondary stage'], ['مَدْرَسَةٌ حُكُومِيَّةٌ / خَاصَّةٌ', 'a state / private school'], ['… أَكْبَرُ مِنْ …', '… is bigger than …'], ['بَيْنَمَا …', 'whereas …']],
    notes: 'Website Topic D challenge “Education-system comparison”: sort institutions and stages into a learner journey, then compare two systems or school types by facilities, rules and opportunities. Cards: رَوْضَةُ الأَطْفَالِ · المَدْرَسَةُ الابْتِدَائِيَّةُ · المَدْرَسَةُ المُتَوَسِّطَةُ · المَدْرَسَةُ الثَّانَوِيَّةُ · الجَامِعَةُ · المَعْهَدُ المِهْنِيُّ · الشَّهَادَةُ · التَّدْرِيبُ. Keep comparisons factual and respectful — no school is “bad”.',
  },
  close: { remember: 'Remember: 5 classroom words for TD-L02.' },
});
module.exports = { meta, slides };
