'use strict';
/* TE-L10 · International Life and Global Connections — website: Advanced Topics › Topic E › Lesson 10 (lesson engine P5-L05).
   Topic layer: the website Topic E challenge “Global headline classification”, the Topic game “Global Connections” (FLEX); preparation follows the next Topic lesson’s engine (Do Now words from the website D6-L10 preparation list). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('E', 10, { fileTitle: 'International_Life_and_Global_Connections', chip: 'Global Connections', icon: 'FaGlobe' });
const slides = T.reuse('E', 10, require('./p5-l05'), {
  prepWordsFrom: require('./d6-l10'),
  addGame: game('e10', { notes: 'TOPIC E GAME “Global Connections”: technology connects, study abroad, international cooperation.' }),
  challenge: {
    min: 5,
    steps: ["Sort 6 headlines by theme: culture · society · environment · technology (in the notes).", "For each, name the likely issue or viewpoint.", "Choose one story and connect it to your own life.", "Give a balanced opinion with a conditional."],
    routes: {
      core: 'Sort the headlines; one sentence: “hādhā al-khabar ʿan …”.',
      develop: 'Name the issue with a passive verb (tuʿqadu, yuṭlaqu).',
      stretch: 'A balanced opinion with a conditional (law / idhā) and a concession.',
    },
    phrases: [["هٰذَا الخَبَرُ عَنْ …", "this news is about …"], ["تُعْقَدُ قِمَّةٌ دَوْلِيَّةٌ", "an international summit is held"], ["إِذَا تَعَاوَنَتِ الدُّوَلُ، …", "if countries cooperate, …"], ["صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …", "it is true that … but …"]],
    notes: 'Website Topic E challenge “Global headline classification”. Headlines: قِمَّةٌ دَوْلِيَّةٌ لِلْمُنَاخِ · طُلَّابٌ عَرَبٌ يَدْرُسُونَ فِي الخَارِجِ · مِهْرَجَانٌ لِلثَّقَافَاتِ فِي لَنْدَنَ · تَطْبِيقٌ جَدِيدٌ لِلتَّرْجَمَةِ · حَمْلَةٌ لِمُسَاعَدَةِ اللَّاجِئِينَ · يَوْمُ اللُّغَةِ العَرَبِيَّةِ العَالَمِيُّ. NB: the engine is a P5 lesson on global justice; Core works from the headlines, Stretch from the engine texts.',
  },
  close: { remember: 'Remember: learn the 5 words for TE-L11.' },
});
module.exports = { meta, slides };
