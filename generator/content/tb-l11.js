'use strict';
/* TB-L11 · Topic B Speaking and Writing Workshop — website: Advanced Topics › Topic B › Lesson 11 (lesson engine D2-L09).
   Preparation points to TB-L12 (engine D2-L12), whose Do Now tests the D2-L11 preparation words. */
const T = require('./topic-common');

const meta = T.meta('B', 11, { fileTitle: 'Topic_B_Speaking_and_Writing_Workshop', chip: 'Speaking and Writing', icon: 'FaComments' });
const slides = T.reuse('B', 11, require('./d2-l09'), {
  prepWordsFrom: require('./d2-l11'),
  challenge: {
    steps: [
      'Choose a Topic B question (family, home, clothes or free time).',
      '30 seconds: answer it aloud (muted rehearsal, then two on the mic).',
      'Upgrade: add ONE comparison and ONE reason.',
      'Write the upgraded answer as a connected paragraph (continues into the writing task).',
    ],
    routes: {
      core: 'Three sentences: an answer, one detail and a reason (li’anna).',
      develop: 'Add a comparison (akbaru min / aktharu min) and a connector.',
      stretch: 'Mix time frames: now, last year, next year — each clearly marked.',
    },
    phrases: [['أَكْبَرُ مِنْ / أَجْمَلُ مِنْ', 'bigger than / more beautiful than'], ['لِأَنَّ … / لِذٰلِكَ …', 'because … / so …'], ['فِي العَامِ المَاضِي …', 'last year …'], ['فِي المُسْتَقْبَلِ سَـ …', 'in the future I will …']],
    notes: 'Website Topic B challenge “Speak–upgrade–write”. Questions to offer: كَيْفَ تَقْضِي وَقْتَ فَرَاغِكَ؟ · صِفْ غُرْفَتَكَ المُفَضَّلَةَ. · مَنْ أَقْرَبُ شَخْصٍ إِلَيْكَ فِي عَائِلَتِكَ؟ · مَاذَا لَبِسْتَ فِي آخِرِ عِيدٍ؟',
  },
});
module.exports = { meta, slides };
