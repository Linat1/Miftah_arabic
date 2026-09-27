'use strict';
/* TB-L06 · Colours and Accurate Description — website: Advanced Topics › Topic B › Lesson 6 (lesson engine F3-L05).
   Preparation points to TB-L07 (engine D2-L03), whose Do Now tests the D2-L02 preparation words (clothes). */
const T = require('./topic-common');

const meta = T.meta('B', 6, { fileTitle: 'Colours_and_Accurate_Description', chip: 'Colours', icon: 'FaPalette' });
const slides = T.reuse('B', 6, require('./f3-l05'), {
  prepWordsFrom: require('./d2-l02'),
  challenge: {
    steps: [
      'Teacher posts 8 noun cards and 8 colour cards (m. and f. mixed).',
      '60 seconds: pairs make as many CORRECT noun + colour pairs as they can.',
      'Type your pairs in the chat; the class rejects any wrong agreement.',
      'Repair every rejected pair aloud.',
    ],
    routes: {
      core: 'Four pairs: noun first, colour second (bāb aḥmar).',
      develop: 'Six pairs using both patterns (ḥamrā’ and bunniyya).',
      stretch: 'Include a plural of things (satā’ir zarqā’) and a shade (fātiḥ / ghāmiq).',
    },
    phrases: [['بَابٌ / نَافِذَةٌ / سَرِيرٌ / أَرِيكَةٌ', 'nouns: door, window, bed, sofa'], ['مَكْتَبٌ / طَاوِلَةٌ / سَتَائِرُ / كَرَاسِي', 'nouns: desk, table, curtains, chairs'], ['أَحْمَرُ / حَمْرَاءُ / أَبْيَضُ / بَيْضَاءُ', 'colours (pattern 1)'], ['بُنِّيٌّ / بُنِّيَّةٌ / رَمَادِيٌّ / رَمَادِيَّةٌ', 'colours (pattern 2)']],
    notes: 'Website Topic B challenge “Colour-agreement snap”: keep only pairs with correct gender / number agreement and repair any rejected combination. Correct examples: بَابٌ أَحْمَرُ · نَافِذَةٌ بَيْضَاءُ · سَرِيرٌ بُنِّيٌّ · أَرِيكَةٌ رَمَادِيَّةٌ · طَاوِلَةٌ بُنِّيَّةٌ · سَتَائِرُ حَمْرَاءُ · كَرَاسِي بَيْضَاءُ (plurals of things → feminine singular).',
  },
});
module.exports = { meta, slides };
