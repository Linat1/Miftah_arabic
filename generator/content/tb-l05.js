'use strict';
/* TB-L05 · Furniture, Furnishings and Appliances — website: Advanced Topics › Topic B › Lesson 5 (lesson engine F3-L04). */
const T = require('./topic-common');

const meta = T.meta('B', 5, { fileTitle: 'Furniture_Furnishings_and_Appliances', chip: 'Furniture', icon: 'FaCouch' });
const slides = T.reuse('B', 5, require('./f3-l04'), {
  challenge: {
    steps: [
      'Each student chooses one room to redesign (bedroom, study or living room).',
      'Choose 5 items and say where each one goes.',
      'Justify ONE change with “so that” or “which”.',
      'Two students present on the mic; the class votes for the best room.',
    ],
    routes: {
      core: 'Five items with yūjadu / tūjadu (or fī ghurfatī …).',
      develop: 'Five items + positions (‘alā, bi-jānibi, fawqa).',
      stretch: 'One justified change with a relative clause (alladhī / allatī) or purpose (li-).',
    },
    phrases: [['سَأَضَعُ … بِجَانِبِ …', 'I will put … next to …'], ['مَكْتَبٌ جَدِيدٌ لِلدِّرَاسَةِ', 'a new desk for studying'], ['الخِزَانَةُ الَّتِي …', 'the wardrobe which …'], ['لِأَنَّ الغُرْفَةَ صَغِيرَةٌ', 'because the room is small']],
    notes: 'Website Topic B challenge “Household redesign” (iḍāfa, attached pronouns and relative clauses). Model (Stretch): سَأَضَعُ المَكْتَبَ بِجَانِبِ النَّافِذَةِ لِلدِّرَاسَةِ، وَسَأُغَيِّرُ الخِزَانَةَ الَّتِي فِي الزَّاوِيَةِ لِأَنَّهَا كَبِيرَةٌ جِدًّا.',
  },
});
module.exports = { meta, slides };
