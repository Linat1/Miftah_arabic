'use strict';
/* TB-L10 · Topic B Listening and Reading Workshop — website: Advanced Topics › Topic B › Lesson 10 (lesson engine D2-L08). */
const T = require('./topic-common');

const meta = T.meta('B', 10, { fileTitle: 'Topic_B_Listening_and_Reading_Workshop', chip: 'Listening and Reading', icon: 'FaHeadphones' });
const slides = T.reuse('B', 10, require('./d2-l08'), {
  challenge: {
    steps: [
      'Teacher reads three short Topic B messages twice (script in the notes).',
      'For each: find evidence for identity, relationship, opinion and time frame.',
      'Then reject ONE distractor and say why it is wrong.',
      'Share one piece of evidence per group on the mic.',
    ],
    routes: {
      core: 'Message 1 only: who is it and what is the relationship?',
      develop: 'All three messages: identity, relationship and opinion with evidence.',
      stretch: 'Add the time frame (past / now / future) and explain the distractor.',
    },
    phrases: [['مَنْ؟ · مَا العَلَاقَةُ؟', 'who? · what relationship?'], ['رَأْيُهُ / رَأْيُهَا', 'his / her opinion'], ['المَاضِي · الآنَ · المُسْتَقْبَلُ', 'past · now · future'], ['الدَّلِيلُ: « … »', 'the evidence: “…”']],
    notes: `Website Topic B challenge “Profile evidence hunt”. Teacher-written messages (Topic B language):
1. أَنَا سَارَةُ، أُخْتُ أَحْمَدَ الكُبْرَى. أَخِي هَادِئٌ وَلَكِنَّهُ مَرِحٌ مَعَ أَصْدِقَائِهِ. (identity: Sarah · relationship: Ahmad’s older sister · opinion: calm but cheerful · now)
2. زُرْنَا جَدَّتِي فِي الصَّيْفِ المَاضِي، وَكَانَ بَيْتُهَا كَبِيرًا وَجَمِيلًا. (relationship: grandmother · opinion: big and beautiful · past)
3. سَأَشْتَرِي فُسْتَانًا أَزْرَقَ لِحَفْلَةِ صَدِيقَتِي، لِأَنَّ الأَحْمَرَ غَالٍ جِدًّا. (relationship: friend · opinion: the red one is too expensive · future — distractor: “red” is mentioned but not bought)`,
  },
});
module.exports = { meta, slides };
