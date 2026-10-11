'use strict';
/* TE-L02 · Multilingual Life and Communication — website: Advanced Topics › Topic E › Lesson 2 (lesson engine D6-L06).
   Topic layer: the website Topic E challenge “Multilingual mingle”, the Topic game “Multilingual Life” (FLEX); preparation follows the next Topic lesson’s engine (Do Now words from the website D6-L08 preparation list). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('E', 2, { fileTitle: 'Multilingual_Life_and_Communication', chip: 'Multilingual Life', icon: 'FaLanguage' });
const slides = T.reuse('E', 2, require('./d6-l06'), {
  prepWordsFrom: require('./d6-l08'),
  addGame: game('e02', { notes: 'TOPIC E GAME “Multilingual Life”: which language where and with whom; learning an extra language.' }),
  challenge: {
    min: 5,
    steps: ["Interview three classmates (chat or mic): which languages do you speak, study or use?", "Ask: where and with whom? (fī al-bayt / maʿa jaddatī …)", "Note one similarity and one difference.", "Report one communication challenge someone mentioned."],
    routes: {
      core: 'Ask and answer: “ayy lughāt tatakallamu?”',
      develop: 'Report with verbal nouns: taʿallum al-lugha, istiʿmāl …',
      stretch: 'Report with a relative clause and a contrast (baynamā) + one challenge.',
    },
    phrases: [["أَيَّ لُغَاتٍ تَتَكَلَّمُ؟", "which languages do you speak?"], ["أَسْتَعْمِلُ … مَعَ …", "I use … with …"], ["تَعَلُّمُ اللُّغَاتِ يُسَاعِدُ عَلَى …", "learning languages helps with …"], ["بَيْنَمَا يَتَكَلَّمُ زَمِيلِي …", "whereas my classmate speaks …"]],
    notes: 'Website Topic E challenge “Multilingual mingle”: interview classmates about languages spoken, studied or used in different situations, then report similarities, differences and one communication challenge. Many students are bilingual (Urdu / English / Arabic) — celebrate it.',
  },
  close: { remember: 'Remember: learn the 5 words for TE-L03.' },
});
module.exports = { meta, slides };
