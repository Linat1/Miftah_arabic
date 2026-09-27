'use strict';
/* TB-L04 · My Home, Rooms and Garden — website: Advanced Topics › Topic B › Lesson 4 (lesson engine F3-L03). */
const T = require('./topic-common');

const meta = T.meta('B', 4, { fileTitle: 'My_Home_Rooms_and_Garden', chip: 'My Home', icon: 'FaHouse' });
const slides = T.reuse('B', 4, require('./f3-l03'), {
  challenge: {
    steps: [
      'Pairs: A describes a room, a floor or a garden (real or invented) in 4 sentences.',
      'B sketches the layout on paper while listening — no questions yet.',
      'B shows the sketch to the camera; A checks it against the description.',
      'Swap roles. Fix one location phrase each time.',
    ],
    routes: {
      core: 'Describe three things: “fī … yūjadu / tūjadu …” with a word bank.',
      develop: 'Add location phrases: next to, in front of, above (bi-jānibi, amāma, fawqa).',
      stretch: 'A whole floor: rooms, positions and one demonstrative (hādhihi / hādhā).',
    },
    phrases: [['يُوجَدُ / تُوجَدُ …', 'there is … (m. / f.)'], ['بِجَانِبِ …', 'next to …'], ['أَمَامَ … / خَلْفَ …', 'in front of … / behind …'], ['فِي الطَّابِقِ الأَوَّلِ', 'on the first floor']],
    notes: 'Website Topic B challenge “Room detective” (يوجد/توجد, demonstratives and locative prepositions). يُوجَدُ / تُوجَدُ is taught fully in the next lesson (TB-L05) — today Core may use فِي بَيْتِي … instead. Privacy: an invented or dream home is always fine.',
  },
});
module.exports = { meta, slides };
