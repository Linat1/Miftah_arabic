'use strict';
/* TE-L09 · Comparing Cultures with Respect — website: Advanced Topics › Topic E › Lesson 9 (lesson engine D6-L05).
   Topic layer: the website Topic E challenge “Culture comparison Venn”, the Topic game “Compare Cultures” (FLEX); preparation follows the next Topic lesson’s engine (Do Now words from the website P5-L04 preparation list). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('E', 9, { fileTitle: 'Comparing_Cultures_with_Respect', chip: 'Comparing Cultures', icon: 'FaScaleBalanced' });
const slides = T.reuse('E', 9, require('./d6-l05'), {
  prepWordsFrom: require('./p5-l04'),
  addGame: game('e09', { notes: 'TOPIC E GAME “Compare Cultures”: a shared value (hospitality), a difference (the drink), comparing without judging.' }),
  challenge: {
    min: 5,
    steps: ["Draw a Venn diagram: culture A · culture B · shared.", "Add 6 practices (food, greetings, family, celebrations …).", "Turn the notes into a balanced comparison: one similarity, two differences.", "Check: no stereotype, no “better / worse”."],
    routes: {
      core: 'Fill the Venn; one sentence with “kilāhumā …”.',
      develop: 'A comparison with “baynamā” and “ammā … fa-”.',
      stretch: 'A balanced paragraph with a hedge (fī baʿḍ al-usar) and a conclusion.',
    },
    phrases: [["تَتَشَابَهُ الثَّقَافَتَانِ فِي …", "the two cultures are similar in …"], ["بَيْنَمَا …", "whereas …"], ["أَمَّا فِي بَاكِسْتَانَ فَيُقَدَّمُ الشَّايُ", "as for Pakistan, tea is served"], ["فِي بَعْضِ الأُسَرِ", "in some families"]],
    notes: 'Website Topic E challenge “Culture comparison Venn”. Frame reminder: أَمَّا … فَـ is ONE structure (as for … then …) — write the فَـ on the next word, e.g. أَمَّا فِي بَاكِسْتَانَ فَيُقَدَّمُ الشَّايُ.',
  },
  close: { remember: 'Remember: learn the 5 words for TE-L10.' },
});
module.exports = { meta, slides };
