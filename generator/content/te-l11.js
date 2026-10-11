'use strict';
/* TE-L11 · Topic E Integrated Communication Workshop — website: Advanced Topics › Topic E › Lesson 11 (lesson engine D6-L11).
   Topic layer: the website Topic E challenge “International fair information gap”, the Topic game “International Fair Relay” (FLEX). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('E', 11, { fileTitle: 'Topic_E_Integrated_Communication_Workshop', chip: 'Workshop', icon: 'FaPeopleGroup' });
const slides = T.reuse('E', 11, require('./d6-l11'), {
  addGame: game('e11', { notes: 'TOPIC E GAME “International Fair Relay”: a country–language stand, a hospitality stand, a traditions stand.' }),
  challenge: {
    min: 5,
    steps: ["Groups get one country and five clue cards: language, custom, festival, food, travel tip.", "Prepare a 1-minute information stand (3–5 sentences).", "Other groups ask two questions each.", "Vote for the clearest and most respectful stand."],
    routes: {
      core: 'Two sentences: country + language.',
      develop: 'Five sentences across the clue cards, mixed tenses.',
      stretch: 'A cohesive stand talk + answers to unprepared questions.',
    },
    phrases: [["أَهْلًا بِكُمْ فِي جَنَاحِ …", "welcome to the … stand"], ["تُسْتَعْمَلُ فِيهَا …", "… is used there"], ["مِنْ أَشْهَرِ احْتِفَالَاتِهَا …", "one of its best-known celebrations …"], ["نَنْصَحُ الزَّائِرَ بِأَنْ …", "we advise the visitor to …"]],
    notes: 'Website Topic E challenge “International fair information gap”: combine country, language, custom, festival and travel clues into a short information stand, then answer questions from another group. Suggested countries: المَغْرِبُ · عُمَانُ · مَالِيزْيَا · تُرْكِيَا · مِصْرُ.',
  },
  close: { remember: 'Remember: revise Topic E for the assessment.' },
});
module.exports = { meta, slides };
