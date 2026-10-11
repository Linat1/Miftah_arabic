'use strict';
/* TD-L02 · The Classroom and Learning Tools — website: Advanced Topics › Topic D › Lesson 2 (lesson engine F4-L03).
   Topic layer: the website Topic D challenge “Classroom bag detective”, the Topic game “Classroom Tool Match” (FLEX); preparation follows the next Topic lesson’s engine (Do Now words from the website F3-L12 preparation list). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('D', 2, { fileTitle: 'The_Classroom_and_Learning_Tools', chip: 'Classroom', icon: 'FaPencil' });
const slides = T.reuse('D', 2, require('./f4-l03'), {
  prepWordsFrom: require('./f3-l12'),
  addGame: game('d02', { notes: 'TOPIC D GAME “Classroom Tool Match”: book + pen, computer + mouse, the ruler in maths.' }),
  challenge: {
    min: 5,
    steps: ["Each student secretly chooses one learning tool from the lesson.", "Describe it in three clues WITHOUT its name: colour / size, where it is used, what you do with it.", "Partners guess, then say where it is used (fī ṣaff …).", "The guesser adds one classroom instruction with the tool (e.g. “open your book”)."],
    routes: {
      core: 'Two clues with “huwa / hiya” and one place (fī al-ḥaqība).',
      develop: 'Three clues with yūjad / tūjad and a demonstrative (hādhā / hādhihi).',
      stretch: 'Three clues with a relative clause (alladhī / allatī nastaʿmiluhu …) and an imperative instruction.',
    },
    phrases: [["هُوَ / هِيَ … فِي الحَقِيبَةِ", "it (m. / f.) is … in the bag"], ["نَسْتَعْمِلُهُ فِي دَرْسِ …", "we use it in the … lesson"], ["الَّذِي / الَّتِي …", "which (m. / f.) …"], ["اِفْتَحْ كِتَابَكَ!", "open your book!"]],
    notes: 'Website Topic D challenge “Classroom bag detective”: describe learning tools without naming them; partners identify each object, say where it is used and add one classroom instruction involving it. Gender check: كِتَابٌ / قَلَمٌ = huwa; مِسْطَرَةٌ / حَقِيبَةٌ = hiya.',
  },
  close: { remember: 'Remember: learn the 5 words for TD-L03.' },
});
module.exports = { meta, slides };
