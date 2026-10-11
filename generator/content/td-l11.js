'use strict';
/* TD-L11 · Topic D Integrated Communication Workshop — website: Advanced Topics › Topic D › Lesson 11 (lesson engine D3-L11).
   Topic layer: the website Topic D challenge “Vacancy case study”, the Topic game “Shortlist the Candidate” (FLEX). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('D', 11, { fileTitle: 'Topic_D_Integrated_Communication_Workshop', chip: 'Workshop', icon: 'FaPeopleGroup' });
const slides = T.reuse('D', 11, require('./d3-l11'), {
  addGame: game('d11', { notes: 'TOPIC D GAME “Shortlist the Candidate”: languages, availability and experience as evidence.' }),
  challenge: {
    min: 5,
    steps: ["Read four documents: job advert, applicant profile, timetable, interview note (in the notes).", "Find evidence for and against the candidate.", "Decide: shortlist — yes or no?", "Defend the decision in 3–4 sentences; another pair challenges it."],
    routes: {
      core: 'One reason for and one against.',
      develop: 'A decision with two pieces of evidence and “lākinna”.',
      stretch: 'A defended decision with mixed tenses, formal register and a conditional.',
    },
    phrases: [["المُرَشَّحُ مُنَاسِبٌ لِأَنَّ …", "the candidate is suitable because …"], ["غَيْرُ مُنَاسِبٍ لِأَنَّهُ لَا يَسْتَطِيعُ …", "not suitable because he cannot …"], ["مِنْ جِهَةٍ … وَمِنْ جِهَةٍ أُخْرَى …", "on one hand … on the other …"], ["لِذٰلِكَ نَقْتَرِحُ …", "so we propose …"]],
    notes: 'Website Topic D challenge “Vacancy case study”. Advert: مُسَاعِدُ مُعَلِّمٍ، الدَّوَامُ مِنَ الثَّامِنَةِ، يُشْتَرَطُ خِبْرَةٌ مَعَ الأَطْفَالِ · Profile: طَالِبٌ جَامِعِيٌّ، تَطَوَّعَ فِي نَادٍ لِلْأَطْفَالِ سَنَةً · Timetable: مُحَاضَرَاتُهُ يَوْمَ الثُّلَاثَاءِ صَبَاحًا · Interview note: مُتَحَمِّسٌ وَصَبُورٌ. A fair answer: shortlist, but ask about Tuesday mornings.',
  },
  close: { remember: 'Remember: revise Topic D for the assessment.' },
});
module.exports = { meta, slides };
