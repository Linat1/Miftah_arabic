'use strict';
/* AT-A-L03 · Frequency, Sequencing and Communication — website: Advanced Topics › Topic A › Lesson 3 (lesson engine D1-L03).
   Preparation now points to AT-A-L04 (engine F5-L01): five food and drink words from the website F5-L01 vocabulary. */
const T = require('./topic-common');

const meta = T.meta('A', 3, { fileTitle: 'Frequency_Sequencing_and_Communication', chip: 'Frequency and Sequencing', icon: 'FaRepeat' });
const slides = T.reuse('A', 3, require('./d1-l03'), {
  challenge: {
    steps: [
      'Ladder on screen: دَائِمًا · غَالِبًا · أَحْيَانًا · نَادِرًا · أَبَدًا.',
      'Each student places 4 activities on the ladder (type in the chat).',
      'Justify two choices: “… because …” (li’anna).',
      'Join two with qabla, ba‘da or ‘indamā into a mini-routine; two students read aloud.',
    ],
    routes: {
      core: 'Place 3 activities on the ladder and say one sentence: “I always …”.',
      develop: 'Four activities, two reasons with li’anna, one sentence with qabla or ba‘da.',
      stretch: 'A 5-sentence mini-routine using ‘indamā and a negative: lā … abadan.',
    },
    phrases: [['دَائِمًا', 'always'], ['أَحْيَانًا', 'sometimes'], ['لَا … أَبَدًا', 'never'], ['قَبْلَ / بَعْدَ', 'before / after'], ['عِنْدَمَا', 'when']],
  },
  prep: {
    words: [['خُبْزٌ', 'bread', ''], ['أَرُزٌّ', 'rice', ''], ['دَجَاجٌ', 'chicken', ''], ['مَاءٌ', 'water', ''], ['عَصِيرٌ', 'juice', '']],
    questionEn: 'Write two things you eat and one thing you drink every day, in Arabic.',
    questionAr: 'مَاذَا تَأْكُلُ كُلَّ يَوْمٍ؟',
    homework: {
      core: 'Learn the five food and drink words with their pictures (website F5-L01 vocabulary tab).',
      develop: 'Write 4 sentences: what you eat and drink, and how often (always, sometimes, never).',
      stretch: 'Write 6 sentences about a family meal using frequency words and before / after.',
    },
    wordsSource: 'The five words come from the website F5-L01 vocabulary (the AT-A-L04 lesson engine).',
  },
  close: { remember: 'Remember: 5 food and drink words + one frequency sentence.' },
});
module.exports = { meta, slides };
