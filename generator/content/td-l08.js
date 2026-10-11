'use strict';
/* TD-L08 · Personal Qualities and Professional Skills — website: Advanced Topics › Topic D › Lesson 8 (lesson engine D3-L03).
   Topic layer: the website Topic D challenge “Candidate skills match”, the Topic game “Skill Match” (FLEX); preparation follows the next Topic lesson’s engine (Do Now words from the website D3-L05 preparation list). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('D', 8, { fileTitle: 'Personal_Qualities_and_Professional_Skills', chip: 'Skills', icon: 'FaHandshake' });
const slides = T.reuse('D', 8, require('./d3-l03'), {
  prepWordsFrom: require('./d3-l05'),
  addGame: game('d08', { notes: 'TOPIC D GAME “Skill Match”: teamwork, communication, organisation and punctuality.' }),
  challenge: {
    min: 5,
    steps: ["Read three short candidate profiles (in the notes).", "Match each candidate to one of three jobs.", "Justify each match with evidence from the profile (li-annahu / li-annahā …).", "Vote: which match has the strongest evidence?"],
    routes: {
      core: 'Match the cards; one reason: “li-annahu munaẓẓam”.',
      develop: 'Three matches, each with evidence and adjective agreement.',
      stretch: 'Matches with a relative clause and a counter-point (lākinnahu yaḥtāju ilā …).',
    },
    phrases: [["هُوَ / هِيَ مُنَاسِبٌ / مُنَاسِبَةٌ لِـ…", "he / she is suitable for …"], ["لِأَنَّهُ / لِأَنَّهَا …", "because he / she …"], ["الدَّلِيلُ عَلَى ذٰلِكَ أَنَّ …", "the evidence is that …"], ["يَحْتَاجُ إِلَى تَطْوِيرِ …", "he needs to develop …"]],
    notes: 'Website Topic D challenge “Candidate skills match”. Candidates: سَارَةُ: صَبُورَةٌ وَتُحِبُّ الأَطْفَالَ · يُوسُفُ: يُجِيدُ الحَاسُوبَ وَدَقِيقٌ · مَرْيَمُ: اجْتِمَاعِيَّةٌ وَتَتَكَلَّمُ ثَلَاثَ لُغَاتٍ. Jobs: مُعَلِّمَةٌ · مُبَرْمِجٌ · مُوَظَّفَةُ اسْتِقْبَالٍ فِي فُنْدُقٍ.',
  },
  close: { remember: 'Remember: learn the 5 words for TD-L09.' },
});
module.exports = { meta, slides };
