'use strict';
/* AT-A-L01 · Time and Daily Routine — website: Advanced Topics › Topic A › Lesson 1 (lesson engine D1-L01). */
const T = require('./topic-common');

const meta = T.meta('A', 1, { fileTitle: 'Time_and_Daily_Routine', chip: 'Time and Daily Routine', icon: 'FaSun' });
const slides = T.reuse('A', 1, require('./d1-l01'), {
  challenge: {
    steps: [
      'Teacher posts 6 mixed routine cards (Arabic verbs) in the chat.',
      '60s: everyone types the order 1–6 and adds one realistic time.',
      'Two students retell the day on the mic with أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ.',
      'Class checks the verbs: I / he / she endings.',
    ],
    routes: {
      core: 'Order the cards, then read 3 of them aloud as “I” sentences with a time.',
      develop: 'Retell 5 steps with times and 3 sequencing words.',
      stretch: 'Retell the day about a brother or sister (يَـ / تَـ) and add one frequency word.',
    },
    phrases: [['أَوَّلًا', 'first'], ['ثُمَّ', 'then'], ['بَعْدَ ذٰلِكَ', 'after that'], ['فِي السَّاعَةِ السَّابِعَةِ', 'at seven o’clock'], ['أَخِيرًا', 'finally']],
    notes: 'Cards to paste (mixed order): أَتَنَاوَلُ الإِفْطَارَ · أَسْتَيْقِظُ · أَرْتَدِي مَلَابِسِي · أَغْتَسِلُ · أَذْهَبُ إِلَى المَدْرَسَةِ · أُنَظِّفُ أَسْنَانِي. One sensible order: wake · wash · brush teeth · dress · breakfast · school (accept any order students can justify).',
  },
});
module.exports = { meta, slides };
