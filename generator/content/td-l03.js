'use strict';
/* TD-L03 · Subjects, Timetables and Preferences — website: Advanced Topics › Topic D › Lesson 3 (lesson engine F4-L01).
   Topic layer: the website Topic D challenge “Timetable puzzle”, the Topic game “Timetable Challenge” (FLEX); preparation follows the next Topic lesson’s engine (Do Now words from the website P2-L04 preparation list). */
const T = require('./topic-common');
const { game } = require('./topic-de-games');

const meta = T.meta('D', 3, { fileTitle: 'Subjects_Timetables_and_Preferences', chip: 'Subjects', icon: 'FaCalendarDays' });
const slides = T.reuse('D', 3, require('./f4-l01'), {
  prepWordsFrom: require('./p2-l04'),
  addGame: game('d03', { notes: 'TOPIC D GAME “Timetable Challenge”: subject + time, and a preference with a reason (li-annahā).' }),
  challenge: {
    min: 5,
    steps: ["Teacher shows six clues about a school day (in the notes).", "Pairs rebuild the timetable: subject + time for each lesson.", "Check: say each lesson aloud with “fī as-sāʿa …”.", "Discuss: favourite and most difficult subject, with a reason and one comparison."],
    routes: {
      core: 'Rebuild the timetable; one favourite subject with “uḥibbu …”.',
      develop: 'Favourite and difficult subject with “li-anna …” (because).',
      stretch: 'A preference with a reason, a contrast (lākin) and a comparison (… asʿab min …).',
    },
    phrases: [["عِنْدِي … فِي السَّاعَةِ …", "I have … at … o’clock"], ["أُفَضِّلُ … لِأَنَّهَا …", "I prefer … because it is …"], ["… أَصْعَبُ مِنْ …", "… is harder than …"], ["لٰكِنَّ …", "but …"]],
    notes: 'Website Topic D challenge “Timetable puzzle”. Clues: 1 الرِّيَاضِيَّاتُ أَوَّلُ دَرْسٍ فِي التَّاسِعَةِ · 2 العُلُومُ بَعْدَ الرِّيَاضِيَّاتِ · 3 الاسْتِرَاحَةُ فِي الحَادِيَةَ عَشْرَةَ · 4 الجُغْرَافِيَا بَعْدَ الاسْتِرَاحَةِ · 5 اللُّغَةُ العَرَبِيَّةُ قَبْلَ الغَدَاءِ · 6 الرِّيَاضَةُ آخِرُ دَرْسٍ. NB this lesson’s engine is a Foundation lesson: Develop and Stretch push the reasons and comparisons the Topic asks for.',
  },
  close: { remember: 'Remember: learn the 5 words for TD-L04.' },
});
module.exports = { meta, slides };
