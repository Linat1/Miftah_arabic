'use strict';
/* TD-L05 · Training, Qualifications and Skills — website: Advanced Topics › Topic D › Lesson 5 (lesson engine D3-L05).
   Topic layer: the website Topic D challenge “Qualification route map”, the Topic game “Qualification Route” (FLEX); preparation follows the next Topic lesson’s engine (Do Now words from the website D2-L12 preparation list). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('D', 5, { fileTitle: 'Training_Qualifications_and_Skills', chip: 'Qualifications', icon: 'FaCertificate' });
const slides = T.reuse('D', 5, require('./d3-l05'), {
  prepWordsFrom: require('./d2-l12'),
  addGame: game('d05', { notes: 'TOPIC D GAME “Qualification Route”: school → university, vocational training, an IT qualification.' }),
  challenge: {
    min: 5,
    steps: ["Match 4 courses / trainings to 4 future roles (cards in the notes).", "Choose one role and draw its route: school → study / training → job.", "Explain the route in 3–4 sentences with “thumma” and “baʿda”.", "A partner asks one question about the route."],
    routes: {
      core: 'Match the cards; one route sentence: “adrusu … thumma …”.',
      develop: 'A full route with masdars (ad-dirāsa, at-tadrīb) and “baʿda an …”.',
      stretch: 'A route with a relative clause and a reason (al-mahārāt allatī aḥtāju ilayhā …).',
    },
    phrases: [["أَدْرُسُ … ثُمَّ …", "I study … then …"], ["بَعْدَ الحُصُولِ عَلَى …", "after obtaining …"], ["التَّدْرِيبُ المِهْنِيُّ", "vocational training"], ["المَهَارَاتُ الَّتِي أَحْتَاجُ إِلَيْهَا", "the skills I need"]],
    notes: 'Website Topic D challenge “Qualification route map”. Cards: شَهَادَةٌ فِي التَّمْرِيضِ ↔ مُمَرِّضٌ · دَوْرَةٌ فِي البَرْمَجَةِ ↔ مُبَرْمِجٌ · تَدْرِيبٌ مِهْنِيٌّ فِي الكَهْرَبَاءِ ↔ كَهْرَبَائِيٌّ · شَهَادَةٌ جَامِعِيَّةٌ فِي التَّرْبِيَةِ ↔ مُعَلِّمٌ.',
  },
  close: { remember: 'Remember: learn the 5 words for TD-L06.' },
});
module.exports = { meta, slides };
