'use strict';
/* TD-L06 · Jobs and Professions — website: Advanced Topics › Topic D › Lesson 6 (lesson engine D3-L01).
   Topic layer: the website Topic D challenge “Jobs taboo”, the Topic game “Guess the Job” (FLEX). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('D', 6, { fileTitle: 'Jobs_and_Professions', chip: 'Jobs', icon: 'FaBriefcase' });
const slides = T.reuse('D', 6, require('./d3-l01'), {
  addGame: game('d06', { notes: 'TOPIC D GAME “Guess the Job”: doctor (f.), teacher (m.), software developer (f.) — job + workplace + gender agreement.' }),
  challenge: {
    min: 5,
    steps: ["Each student picks a job card (privately, in the chat to the teacher).", "Describe it: duties, workplace, skills — without saying the job.", "Partners guess (huwa / hiya …).", "The guesser gives one advantage or disadvantage of the job."],
    routes: {
      core: 'Two clues: workplace + one duty (yaʿmalu fī … / yusāʿidu …).',
      develop: 'Three clues with an active participle and m. / f. agreement.',
      stretch: 'Three clues + one advantage and one disadvantage (mīza / ʿayb).',
    },
    phrases: [["يَعْمَلُ / تَعْمَلُ فِي …", "he / she works in …"], ["يُسَاعِدُ النَّاسَ", "he helps people"], ["مِنْ مَزَايَا هٰذِهِ المِهْنَةِ …", "one advantage of this job …"], ["لٰكِنَّ عَيْبَهَا …", "but its disadvantage …"]],
    notes: 'Website Topic D challenge “Jobs taboo”. Job cards: طَبِيبٌ / طَبِيبَةٌ · مُهَنْدِسٌ · مُمَرِّضَةٌ · طَبَّاخٌ · مُحَامٍ · شُرْطِيٌّ · صَحَفِيَّةٌ · مُزَارِعٌ. Check gender agreement every time.',
  },
  close: { remember: 'Remember: learn the 5 words for TD-L07.' },
});
module.exports = { meta, slides };
