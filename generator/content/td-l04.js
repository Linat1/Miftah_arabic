'use strict';
/* TD-L04 · Studying, Exams and Learning Strategies — website: Advanced Topics › Topic D › Lesson 4 (lesson engine P2-L05).
   Topic layer: the website Topic D challenge “Revision-strategy ranking”, the Topic game “Study Strategy” (FLEX); preparation follows the next Topic lesson’s engine (Do Now words from the website D3-L04 preparation list). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('D', 4, { fileTitle: 'Studying_Exams_and_Learning_Strategies', chip: 'Study Skills', icon: 'FaBookOpen' });
const slides = T.reuse('D', 4, require('./p2-l05'), {
  prepWordsFrom: require('./d3-l04'),
  addGame: game('d04', { notes: 'TOPIC D GAME “Study Strategy”: a study–rest cycle, a summary after revising, the phone put away (yanbaghī an + -a).' }),
  challenge: {
    min: 5,
    steps: ["Pairs get 6 revision methods (list in the notes).", "Rank them from most to least useful.", "Justify the top two and the bottom one (li-anna …).", "Give one piece of advice to a student before an exam (yanbaghī an …)."],
    routes: {
      core: 'Rank the cards; one reason with “li-anna”.',
      develop: 'Justify three choices; advice with “yanbaghī an + -a”.',
      stretch: 'Advice with “min al-mufīd an …” and a conditional (idhā … sa- …).',
    },
    phrases: [["مِنَ المُفِيدِ أَنْ …", "it is useful to …"], ["يَنْبَغِي أَنْ تُرَاجِعَ …", "you should revise …"], ["لِأَنَّ ذٰلِكَ يُسَاعِدُ عَلَى …", "because that helps with …"], ["إِذَا … سَتَنْجَحُ", "if … you will succeed"]],
    notes: 'Website Topic D challenge “Revision-strategy ranking”. Methods: كِتَابَةُ مُلَخَّصٍ · الدِّرَاسَةُ مَعَ زَمِيلٍ · حَلُّ امْتِحَانَاتٍ سَابِقَةٍ · إِعَادَةُ القِرَاءَةِ فَقَطْ · الدِّرَاسَةُ لَيْلَةَ الامْتِحَانِ · الاسْتِرَاحَةُ كُلَّ خَمْسٍ وَعِشْرِينَ دَقِيقَةً. Any order is fine if justified. NB: the engine is a P2 lesson on aspirations and the future of work; the Topic focus (study and exams) is carried by this challenge and the game.',
  },
  close: { remember: 'Remember: learn the 5 words for TD-L05.' },
});
module.exports = { meta, slides };
