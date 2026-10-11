'use strict';
/* TD-L07 · The Workplace and Working Conditions — website: Advanced Topics › Topic D › Lesson 7 (lesson engine D3-L02).
   Topic layer: the website Topic D challenge “Workplace comparison”, the Topic game “Workplace Match” (FLEX). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('D', 7, { fileTitle: 'The_Workplace_and_Working_Conditions', chip: 'Workplace', icon: 'FaBuilding' });
const slides = T.reuse('D', 7, require('./d3-l02'), {
  addGame: game('d07', { notes: 'TOPIC D GAME “Workplace Match”: office hours, working from home, an evening shift.' }),
  challenge: {
    min: 5,
    steps: ["Teacher shows two workplace profiles (office vs hospital — in the notes).", "Pairs compare them: hours, environment, responsibilities, conditions.", "Read a worker profile (a student who needs flexible hours).", "Decide which workplace suits the worker and say why."],
    routes: {
      core: 'One comparison: “… aṭwal min …”.',
      develop: 'Three comparisons + a decision with a reason.',
      stretch: 'A decision with “kāna” for past experience and a balanced comparison (baynamā).',
    },
    phrases: [["سَاعَاتُ العَمَلِ أَطْوَلُ فِي …", "working hours are longer in …"], ["البِيئَةُ هَادِئَةٌ / مُزْدَحِمَةٌ", "the environment is quiet / busy"], ["يُنَاسِبُهُ … لِأَنَّ …", "… suits him because …"], ["بَيْنَمَا …", "whereas …"]],
    notes: 'Website Topic D challenge “Workplace comparison”. Profiles: المَكْتَبُ: مِنَ التَّاسِعَةِ إِلَى الخَامِسَةِ، هَادِئٌ، رَاتِبٌ ثَابِتٌ · المُسْتَشْفَى: نَوْبَاتٌ لَيْلِيَّةٌ، مُزْدَحِمٌ، عَمَلٌ مُهِمٌّ. Worker: طَالِبٌ جَامِعِيٌّ يَدْرُسُ فِي الصَّبَاحِ وَيُرِيدُ عَمَلًا مَسَائِيًّا.',
  },
  close: { remember: 'Remember: learn the 5 words for TD-L08.' },
});
module.exports = { meta, slides };
