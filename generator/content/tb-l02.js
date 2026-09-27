'use strict';
/* TB-L02 · Family, Friends and Relationships — website: Advanced Topics › Topic B › Lesson 2 (lesson engine D2-L02). */
const T = require('./topic-common');

const meta = T.meta('B', 2, { fileTitle: 'Family_Friends_and_Relationships', chip: 'Family and Friends', icon: 'FaPeopleGroup' });
const slides = T.reuse('B', 2, require('./d2-l02'), {
  prepWordsFrom: require('./d2-l05'),
  challenge: {
    steps: [
      'Teacher posts 5 clues about an invented family (in Arabic, in the chat).',
      'Students draw the mini family tree in their books (2 minutes).',
      'Then explain four relationships WITHOUT pointing: “Ahmad is Salma’s brother”.',
      'Show the tree to the camera; the class checks it.',
    ],
    routes: {
      core: 'Name two relationships with “my” (akhī, ukhtī, ummī).',
      develop: 'Four relationships with iḍāfa (akhū Salmā) or -hu / -hā.',
      stretch: 'Four relationships + one sentence about how two people get on (yatafāhamāni).',
    },
    phrases: [['أَخُو سَلْمَى', 'Salma’s brother'], ['أُخْتُهُ / أُخْتُهَا', 'his / her sister'], ['جَدُّهُمَا', 'their (two) grandfather'], ['يَتَفَاهَمَانِ جَيِّدًا', 'they (two) get on well']],
    notes: 'Clues to paste: خَالِدٌ وَمَرْيَمُ زَوْجَانِ. لَهُمَا ابْنٌ اسْمُهُ أَحْمَدُ وَبِنْتٌ اسْمُهَا سَلْمَى. أَحْمَدُ أَكْبَرُ مِنْ سَلْمَى. جَدَّةُ أَحْمَدَ اسْمُهَا فَاطِمَةُ، وَهِيَ أُمُّ خَالِدٍ. سَلْمَى تَتَفَاهَمُ مَعَ جَدَّتِهَا جَيِّدًا. → Tree: Fatima → Khalid + Maryam → Ahmad (older), Salma. Website Topic B challenge “Family-tree challenge” (possessive endings or iḍāfa).',
  },
});
module.exports = { meta, slides };
