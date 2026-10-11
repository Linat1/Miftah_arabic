'use strict';
/* TE-L03 · Culture and Personal Identity — website: Advanced Topics › Topic E › Lesson 3 (lesson engine D6-L09).
   Topic layer: the website Topic E challenge “Culture and identity layers”, the Topic game “Identity Layers” (FLEX); preparation follows the next Topic lesson’s engine (Do Now words from the website D6-L01 preparation list). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('E', 3, { fileTitle: 'Culture_and_Personal_Identity', chip: 'Identity', icon: 'FaLayerGroup' });
const slides = T.reuse('E', 3, require('./d6-l09'), {
  prepWordsFrom: require('./d6-l01'),
  addGame: game('e03', { notes: 'TOPIC E GAME “Identity Layers”: family, community and experience; language, food and celebrations; belonging to more than one culture.' }),
  challenge: {
    min: 5,
    steps: ["Sort 8 identity statements into layers: personal · family · local · national · international (in the notes).", "Choose two layers that matter to you.", "Explain how they can coexist (yumkinu an …).", "Share one sentence by invitation — invented examples are always fine."],
    routes: {
      core: 'Sort the cards; one sentence: “hawiyyatī … ”.',
      develop: 'Two layers with possessives and a reason (li-anna).',
      stretch: 'Two layers that coexist, with inna and an example (fa-mathalan …).',
    },
    phrases: [["تَتَأَثَّرُ هُوِيَّتِي بِأُسْرَتِي", "my identity is shaped by my family"], ["أَنْتَمِي إِلَى …", "I belong to …"], ["إِنَّ اللُّغَةَ جُزْءٌ مِنْ …", "language is part of …"], ["يُمْكِنُ أَنْ … فِي الوَقْتِ نَفْسِهِ", "it is possible to … at the same time"]],
    notes: 'Website Topic E challenge “Culture and identity layers”. Statements: أَتَكَلَّمُ الأُرْدِيَّةَ مَعَ أُسْرَتِي · أُشَجِّعُ فَرِيقَ مَدِينَتِي · أَحْمِلُ جِنْسِيَّتَيْنِ · أَتَعَلَّمُ العَرَبِيَّةَ · أُحِبُّ طَعَامَ جَدَّتِي · أَعِيشُ فِي بِرِيطَانْيَا · أُتَابِعُ أَخْبَارَ العَالَمِ · أُحِبُّ الرَّسْمَ. SENSITIVITY: identity is personal; never require disclosure.',
  },
  close: { remember: 'Remember: learn the 5 words for TE-L04.' },
});
module.exports = { meta, slides };
