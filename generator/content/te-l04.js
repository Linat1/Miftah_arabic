'use strict';
/* TE-L04 · Customs, Etiquette and Hospitality — website: Advanced Topics › Topic E › Lesson 4 (lesson engine D6-L02).
   Topic layer: the website Topic E challenge “Customs and etiquette sort”, the Topic game “Hospitality & Etiquette” (FLEX). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('E', 4, { fileTitle: 'Customs_Etiquette_and_Hospitality', chip: 'Customs', icon: 'FaMugHot' });
const slides = T.reuse('E', 4, require('./d6-l02'), {
  addGame: game('e04', { notes: 'TOPIC E GAME “Hospitality & Etiquette”: greeting at a visit, thanking the host, asking respectfully about a custom.' }),
  challenge: {
    min: 5,
    steps: ["Sort 8 behaviours by situation: greeting · visiting · eating · leaving (in the notes).", "Mark each: do / avoid / ask about.", "Write advice for a respectful visitor (imperatives).", "Compare one custom with your own family custom."],
    routes: {
      core: 'Sort the cards; two imperatives: “sallim! / ishkur!”.',
      develop: 'Advice with “yanbaghī an” and “lā + jussive”.',
      stretch: 'Advice + a respectful comparison (fī baʿḍ al-buldān … ammā fī …).',
    },
    phrases: [["سَلِّمْ عَلَى الكِبَارِ أَوَّلًا", "greet the elders first"], ["اشْكُرِ المُضِيفَ", "thank the host"], ["لَا تَرْفُضِ الضِّيَافَةَ مُبَاشَرَةً", "do not refuse hospitality straight away"], ["إِذَا لَمْ تَعْرِفْ، اسْأَلْ بِأَدَبٍ", "if you do not know, ask politely"]],
    notes: 'Website Topic E challenge “Customs and etiquette sort”. Behaviours: خَلْعُ الحِذَاءِ عِنْدَ البَابِ · المُصَافَحَةُ · تَقْدِيمُ القَهْوَةِ لِلضَّيْفِ · الأَكْلُ بِاليَدِ اليُمْنَى · رَفْضُ الطَّعَامِ · إِحْضَارُ هَدِيَّةٍ · الحَدِيثُ بِصَوْتٍ عَالٍ · الانْصِرَافُ بَعْدَ القَهْوَةِ. Hedge: customs differ between families and countries — avoid “all Arabs …”.',
  },
  close: { remember: 'Remember: learn the 5 words for TE-L05.' },
});
module.exports = { meta, slides };
