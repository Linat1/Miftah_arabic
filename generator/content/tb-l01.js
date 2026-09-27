'use strict';
/* TB-L01 · Identity and Personal Profiles — website: Advanced Topics › Topic B › Lesson 1 (lesson engine F2-L10). */
const T = require('./topic-common');

const meta = T.meta('B', 1, { fileTitle: 'Identity_and_Personal_Profiles', chip: 'Identity and Profiles', icon: 'FaIdCard' });
const slides = T.reuse('B', 1, require('./f2-l10'), {
  prepWordsFrom: require('./d2-l01'),
  challenge: {
    steps: [
      'Each student writes six clues about themselves or an invented person (in the chat, privately to the teacher).',
      'Teacher reads one profile aloud WITHOUT the name.',
      'The class guesses who it is, then checks the gender agreement (-a / -iyya).',
      'Two more rounds; the class picks the clearest clue.',
    ],
    routes: {
      core: 'Three clues: name → age → one language (ismī / ‘umrī / atakallamu).',
      develop: 'Six clues in the third person: he / she (-hu / -hā, ya- / ta-).',
      stretch: 'Six clues including personality and study, with a “but” (lākinna).',
    },
    phrases: [['عُمْرُهُ / عُمْرُهَا …', 'he / she is … years old'], ['هُوَ مِصْرِيٌّ / هِيَ مِصْرِيَّةٌ', 'he / she is Egyptian'], ['يَتَكَلَّمُ / تَتَكَلَّمُ …', 'he / she speaks …'], ['يَدْرُسُ / تَدْرُسُ …', 'he / she studies …']],
    notes: 'Website Topic B challenge “Identity mystery”: name, age, place, language, study and personality — the partner identifies the person and checks gender agreement. Privacy: invented people are always fine; never share addresses or photos.',
  },
});
module.exports = { meta, slides };
