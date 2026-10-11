'use strict';
/* TD-L09 · Applications and Interviews — website: Advanced Topics › Topic D › Lesson 9 (lesson engine D3-L06).
   Topic layer: the website Topic D challenge “CV-to-interview challenge”, the Topic game “Interview Choice” (FLEX); preparation follows the next Topic lesson’s engine (Do Now words from the website D3-L03 preparation list). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('D', 9, { fileTitle: 'Applications_and_Interviews', chip: 'Interviews', icon: 'FaFileLines' });
const slides = T.reuse('D', 9, require('./d3-l06'), {
  prepWordsFrom: require('./d3-l03'),
  addGame: game('d09', { notes: 'TOPIC D GAME “Interview Choice”: why this job, two years’ experience, a strength.' }),
  challenge: {
    min: 5,
    steps: ["Read the vacancy and the candidate profile (in the notes).", "Underline the two strongest pieces of evidence for the application.", "Pairs role-play two interview questions: interviewer → candidate.", "Swap roles; the interviewer gives one piece of feedback."],
    routes: {
      core: 'Answer “limādhā turīdu hādhihi al-waẓīfa?” with one reason.',
      develop: 'Two answers with past experience (ʿamiltu …) and an object pronoun.',
      stretch: 'Two answers with evidence, a strength and a future plan (urīdu an ataṭawwara).',
    },
    phrases: [["لِمَاذَا تُرِيدُ هٰذِهِ الوَظِيفَةَ؟", "why do you want this job?"], ["عَمِلْتُ فِي … لِمُدَّةِ …", "I worked in … for …"], ["مِنْ نِقَاطِ قُوَّتِي …", "one of my strengths …"], ["أُرِيدُ أَنْ أَتَطَوَّرَ", "I want to develop"]],
    notes: 'Website Topic D challenge “CV-to-interview challenge”. Vacancy: مَطْلُوبٌ مُوَظَّفُ خِدْمَةِ عُمَلَاءَ يَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ. Candidate: خِبْرَةُ سَنَتَيْنِ فِي مَتْجَرٍ، يَتَكَلَّمُ لُغَتَيْنِ، مُنَظَّمٌ. Second interview question: مَا نِقَاطُ قُوَّتِكَ؟',
  },
  close: { remember: 'Remember: learn the 5 words for TD-L10.' },
});
module.exports = { meta, slides };
