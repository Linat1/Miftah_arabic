'use strict';
/* AT-A-L02 · Calendar, Dates and the School Week — website: Advanced Topics › Topic A › Lesson 2 (lesson engine D1-L02). */
const T = require('./topic-common');

const meta = T.meta('A', 2, { fileTitle: 'Calendar_Dates_and_the_School_Week', chip: 'Calendar and Dates', icon: 'FaCalendarDays' });
const slides = T.reuse('A', 2, require('./d1-l02'), {
  addGame: T.topicGame('a02', {
    title: 'Match the calendar to the sentence', flex: true,
    en: ['Today is Monday, the fourteenth of September.', 'Today is Thursday, the first of October.', 'The school week is from Sunday to Thursday.'],
    icons: [[['fa6', 'FaCalendarDay', '1D5FBF']], [['fa6', 'FaCalendarCheck', '1E7B4F']], [['fa6', 'FaSchool', 'C77700'], ['fa6', 'FaArrowRight', '6B4C9A']]],
    labels: ['Mon 14 Sept', 'Thu 1 Oct', 'Sun → Thu'],
    notes: 'FLEX: use it if the class is secure on dates; the ordinal الأَوَّلُ (the first) is the key point.',
  }),
  challenge: {
    steps: [
      'Students draw a 3×3 grid and write 9 items: days, months, times.',
      'Teacher reads 8 time or date expressions aloud (list in the notes).',
      'Tick a square you hear. Three in a row: type “BINGO” in the chat.',
      'Winner reads the line back. Everyone writes 2 clues of their own.',
    ],
    routes: {
      core: 'Grid of days only. Clue: a day + a time — e.g. yawm al-ithnayn, as-sā‘a ath-thāmina.',
      develop: 'Mix days, months and times. Two clues with a full date.',
      stretch: 'Clues with minutes past/to and a school-week fact (from … to …).',
    },
    phrases: [['يَوْمَ الأَحَدِ', 'on Sunday'], ['فِي شَهْرِ مَايُو', 'in May'], ['السَّاعَةُ الثَّامِنَةُ وَالنِّصْفُ', 'half past eight'], ['مِنَ … إِلَى …', 'from … to …']],
    notes: 'Teacher calls (read each twice): يَوْمُ الثُّلَاثَاءِ · شَهْرُ يَنَايِرَ · السَّاعَةُ السَّابِعَةُ وَالرُّبْعُ · يَوْمُ الجُمُعَةِ · شَهْرُ رَمَضَانَ · السَّاعَةُ الثَّالِثَةُ إِلَّا الرُّبْعَ · الأَوَّلُ مِنْ سِبْتَمْبَرَ · يَوْمُ الخَمِيسِ.',
  },
});
module.exports = { meta, slides };
