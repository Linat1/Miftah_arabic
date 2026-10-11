'use strict';
/* TE-L07 · National Festivals and Traditions — website: Advanced Topics › Topic E › Lesson 7 (lesson engine D6-L04).
   Topic layer: the website Topic E challenge “Festival comparison”, the Topic game “Festival Match” (FLEX); preparation follows the next Topic lesson’s engine (Do Now words from the website P3-L06 preparation list). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('E', 7, { fileTitle: 'National_Festivals_and_Traditions', chip: 'Festivals', icon: 'FaMasksTheater' });
const slides = T.reuse('E', 7, require('./d6-l04'), {
  prepWordsFrom: require('./p3-l06'),
  addGame: game('e07', { notes: 'TOPIC E GAME “Festival Match”: public shows, music and dance, special clothes and traditional food.' }),
  challenge: {
    min: 5,
    steps: ["Choose two national or cultural festivals (examples in the notes).", "Compare them: purpose, customs, activities.", "Use the passive for what is done (tuqām, tuzayyan).", "Give one similarity and one difference, respectfully."],
    routes: {
      core: 'One fact per festival in the present.',
      develop: 'Two passive verbs + a comparison (akthar min / mithla).',
      stretch: 'A balanced comparison with time frames (past origin, present custom).',
    },
    phrases: [["يُحْتَفَلُ بِالعِيدِ الوَطَنِيِّ فِي …", "the national day is celebrated in …"], ["تُقَامُ عُرُوضٌ وَحَفَلَاتٌ", "shows and parties are held"], ["يَتَشَابَهُ المِهْرَجَانَانِ فِي …", "the two festivals are similar in …"], ["يَخْتَلِفَانِ فِي …", "they differ in …"]],
    notes: 'Website Topic E challenge “Festival comparison”. Examples: اليَوْمُ الوَطَنِيُّ السُّعُودِيُّ · مِهْرَجَانُ جَرَشَ فِي الأُرْدُنِّ · مِهْرَجَانُ الزُّهُورِ · يَوْمُ اللُّغَةِ العَرَبِيَّةِ (18 دِيسَمْبِر). Respectful language: describe, do not rank.',
  },
  close: { remember: 'Remember: learn the 5 words for TE-L08.' },
});
module.exports = { meta, slides };
