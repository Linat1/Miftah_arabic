'use strict';
/* TD-L10 · Career Plans, Ambitions and Choices — website: Advanced Topics › Topic D › Lesson 10 (lesson engine D3-L04).
   Topic layer: the website Topic D challenge “Career pathway pitch”, the Topic game “Career Plan” (FLEX); preparation follows the next Topic lesson’s engine (Do Now words from the website D3-L10 preparation list). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('D', 10, { fileTitle: 'Career_Plans_Ambitions_and_Choices', chip: 'Career Plans', icon: 'FaRoute' });
const slides = T.reuse('D', 10, require('./d3-l04'), {
  prepWordsFrom: require('./d3-l10'),
  addGame: game('d10', { notes: 'TOPIC D GAME “Career Plan”: study → doctor (li + subjunctive), web development, languages.' }),
  challenge: {
    min: 5,
    steps: ["Plan a one-minute pitch: ambition → study / qualification → reason.", "Present it to a partner (on the mic, by invitation, or recorded).", "The partner asks: “And if that does not work?” (wa-idhā lam …?)", "Answer with an alternative route using a conditional."],
    routes: {
      core: 'Two sentences: “urīdu an aṣbaḥa …” + one reason.',
      develop: 'Future with sa- / sawfa and a purpose (li-uṣbiḥa …).',
      stretch: 'A pitch with a hope (aṭmaḥu ilā …) and a conditional alternative (idhā lam … fa-sa- …).',
    },
    phrases: [["أَطْمَحُ إِلَى …", "I aspire to …"], ["سَأَدْرُسُ … لِأُصْبِحَ …", "I will study … to become …"], ["إِذَا لَمْ أَنْجَحْ فِي …", "if I do not succeed in …"], ["فَسَأَخْتَارُ …", "then I will choose …"]],
    notes: 'Website Topic D challenge “Career pathway pitch”. Purpose: لِ + subjunctive (لِأُصْبِحَ). Conditional with a negative: إِذَا لَمْ + jussive (أَنْجَحْ), result with فَسَـ.',
  },
  close: { remember: 'Remember: revise the Topic D words for the workshop.' },
});
module.exports = { meta, slides };
