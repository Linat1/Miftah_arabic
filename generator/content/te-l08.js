'use strict';
/* TE-L08 · Travel, Cultural Exchange and Understanding — website: Advanced Topics › Topic E › Lesson 8 (lesson engine P3-L07).
   Topic layer: the website Topic E challenge “Respectful visitor role-play”, the Topic game “Respectful Visitor” (FLEX); preparation follows the next Topic lesson’s engine (Do Now words from the website D6-L04 preparation list). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('E', 8, { fileTitle: 'Travel_Cultural_Exchange_and_Understanding', chip: 'Cultural Exchange', icon: 'FaSuitcaseRolling' });
const slides = T.reuse('E', 8, require('./p3-l07'), {
  prepWordsFrom: require('./d6-l04'),
  addGame: game('e08', { notes: 'TOPIC E GAME “Respectful Visitor”: respecting customs, asking the host, no photos where forbidden.' }),
  challenge: {
    min: 5,
    steps: ["Pairs get a scenario card: greeting, invitation or local custom (in the notes).", "Role-play it: the visitor ASKS rather than assumes.", "Agree the most respectful response.", "Explain it to the class with a reason (li-anna …)."],
    routes: {
      core: 'Ask one polite question: “hal yumkinu an …?”',
      develop: 'Role-play + explain with past experience (zurtu … wa-taʿallamtu …).',
      stretch: 'Role-play + cause and result (fa-li-dhālika …) and a future intention.',
    },
    phrases: [["هَلْ يُمْكِنُ أَنْ …؟", "is it possible to …?"], ["مَا العَادَةُ هُنَا؟", "what is the custom here?"], ["احْتِرَامًا لِلْعَادَاتِ", "out of respect for the customs"], ["لِذٰلِكَ سَأَسْأَلُ أَوَّلًا", "so I will ask first"]],
    notes: 'Website Topic E challenge “Respectful visitor role-play”. Scenarios: ① دَعَاكَ صَدِيقٌ إِلَى الغَدَاءِ وَلَا تَعْرِفُ هَلْ تَخْلَعُ حِذَاءَكَ · ② تُرِيدُ أَنْ تَلْتَقِطَ صُورَةً فِي سُوقٍ تَقْلِيدِيٍّ · ③ قَدَّمَ لَكَ المُضِيفُ قَهْوَةً وَأَنْتَ لَا تَشْرَبُهَا.',
  },
  close: { remember: 'Remember: learn the 5 words for TE-L09.' },
});
module.exports = { meta, slides };
