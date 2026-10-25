'use strict';
/* Practice Room · F4-L02 · The school timetable — days and times. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f4-l02',
  arShort: 'الجَدْوَلُ المَدْرَسِيُّ',
  grammar: 'days (yawma al-aḥadi …); times fī al-sāʿati + feminine ordinal (al-thāniya · al-thālitha …) + wa-l-rubʿ / wa-l-niṣf / illā rubʿan; yabdaʾu / yantahī; kam ḥiṣṣatan',
  focus: 'Students run their own speaking and writing practice about their timetable: say the days and time words, act a short dialogue, answer timetable question cards, do a role-play card planning a revision timetable, give a 30-second talk about their school week, then build, fix and write about their favourite school day.',
  words1: 'Days of the week', words2: 'Times and periods',
  dialogue: {
    title: 'When does school start?', ar: 'مَتَى تَبْدَأُ المَدْرَسَةُ؟',
    lines: [
      ['A', 'مَتَى تَبْدَأُ المَدْرَسَةُ؟', 'When does school start?'],
      ['B', 'تَبْدَأُ فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ.', 'It starts at half past eight.'],
      ['A', 'وَمَتَى تَنْتَهِي؟', 'And when does it finish?'],
      ['B', 'تَنْتَهِي فِي السَّاعَةِ الثَّالِثَةِ إِلَّا رُبْعًا.', 'It finishes at quarter to three.'],
      ['A', 'كَمْ حِصَّةً عِنْدَكَ يَوْمَ الأَرْبِعَاءِ؟', 'How many lessons do you have on Wednesday?'],
      ['B', 'عِنْدِي سِتُّ حِصَصٍ، وَالحِصَّةُ الأُولَى رِيَاضِيَّاتٌ.', 'I have six lessons, and the first lesson is maths.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: use YOUR real school times and timetable.',
  },
  questions: [
    { q: 'مَتَى تَبْدَأُ المَدْرَسَةُ؟', en: 'When does school start?', start: 'تَبْدَأُ فِي السَّاعَةِ …', more: '… وَتَنْتَهِي فِي …' },
    { q: 'مَتَى الاسْتِرَاحَةُ؟', en: 'When is break?', start: 'الاسْتِرَاحَةُ فِي السَّاعَةِ …', more: '… وَوَقْتُ الغَدَاءِ فِي …' },
    { q: 'مَاذَا تَدْرُسُ يَوْمَ الثُّلَاثَاءِ؟', en: 'What do you study on Tuesday?', start: 'يَوْمَ الثُّلَاثَاءِ أَدْرُسُ …', more: '… وَالحِصَّةُ الأُولَى …' },
    { q: 'كَمْ حِصَّةً عِنْدَكَ فِي اليَوْمِ؟', en: 'How many lessons a day?', start: 'عِنْدِي … حِصَصٍ', more: '… كُلُّ حِصَّةٍ سَاعَةٌ' },
    { q: 'مَا يَوْمُكَ المُفَضَّلُ فِي المَدْرَسَةِ؟', en: 'What is your favourite school day?', start: 'يَوْمِي المُفَضَّلُ …', more: '… لِأَنَّ عِنْدِي …' },
  ],
  card: {
    title: 'Role-play card — booking a revision session', ar: 'حَجْزُ حِصَّةِ مُرَاجَعَةٍ', you: 'a student', them: 'the school librarian',
    tasks: [
      { ex: 'أَيَّ يَوْمٍ تُرِيدُ؟', task: 'Choose a day.', plan: 'أَيَّ ← يَوْمَ …', model: 'يَوْمَ الخَمِيسِ، مِنْ فَضْلِكَ.', modelEn: 'Thursday, please.' },
      { ex: 'فِي أَيِّ سَاعَةٍ؟', task: 'Choose a time.', plan: 'أَيِّ سَاعَةٍ ← فِي السَّاعَةِ … وَالنِّصْفِ', model: 'فِي السَّاعَةِ الثَّالِثَةِ وَالنِّصْفِ، بَعْدَ المَدْرَسَةِ.', modelEn: 'At half past three, after school.' },
      { ex: 'لِأَيِّ مَادَّةٍ؟', task: 'Name the subject + why.', plan: 'لِأَيِّ ← لِلرِّيَاضِيَّاتِ / لِلْعُلُومِ … لِأَنَّ …', model: 'لِلرِّيَاضِيَّاتِ، لِأَنَّ عِنْدِي امْتِحَانًا يَوْمَ الإِثْنَيْنِ.', modelEn: 'For maths, because I have a test on Monday.' },
      { ex: 'الحِصَّةُ سَاعَةٌ وَاحِدَةٌ.', task: 'Ask when it ends.', plan: 'اسْأَلْ ← مَتَى تَنْتَهِي …؟', model: 'حَسَنًا. إِذَنْ تَنْتَهِي فِي السَّاعَةِ الرَّابِعَةِ وَالنِّصْفِ؟', modelEn: 'OK. So it ends at half past four?' },
    ],
    girl: 'تُرِيدِينَ',
    notes: 'Language: yawma + day · fī al-sāʿati + feminine ordinal · li- + subject · tantahī.',
  },
  talk: {
    title: '30 seconds: my school week', ar: 'أُسْبُوعِي المَدْرَسِيُّ',
    text: 'Talk for 30 seconds: when school starts and finishes, how many lessons, what you study on two days — and your favourite day.',
    routes: {
      core: 'Start time, finish time, one day’s subjects.',
      develop: 'Add break / lunch times and two days.',
      stretch: 'Add your favourite day and a reason with لِأَنَّ.',
    },
  },
  builder: [
    { en: 'School starts at quarter past eight.', cols: [['تَبْدَأُ المَدْرَسَةُ', 'يَبْدَأُ المَدْرَسَةُ'], ['فِي السَّاعَةِ الثَّامِنَةِ', 'فِي السَّاعَةِ ثَمَانِيَةٍ'], ['وَالرُّبْعِ.', 'إِلَّا رُبْعًا.']], key: [0, 0, 0], why: 'School (f.) → تَبْدَأُ; times use the feminine ordinal; quarter past = وَالرُّبْعِ.' },
    { en: 'On Friday I have five lessons.', cols: [['يَوْمَ الجُمُعَةِ', 'فِي الجُمُعَةُ'], ['عِنْدِي', 'عِنْدَهُ'], ['خَمْسُ حِصَصٍ.', 'خَمْسَةُ حِصَّةٍ.']], key: [0, 0, 0], why: 'On + day = يَوْمَ …; 3–10 + plural: خَمْسُ حِصَصٍ (حِصَّةٌ is f. → خَمْسُ).' },
    { en: 'Lunch is at half past twelve.', cols: [['وَقْتُ الغَدَاءِ', 'الغَدَاءُ وَقْتُ'], ['فِي السَّاعَةِ الثَّانِيَةَ عَشْرَةَ', 'فِي السَّاعَةِ اثْنَا عَشَرَ'], ['وَالنِّصْفِ.', 'وَالرُّبْعِ.']], key: [0, 0, 0], why: 'Half past = وَالنِّصْفِ; twelve o’clock = السَّاعَةُ الثَّانِيَةَ عَشْرَةَ.' },
  ],
  errors: [
    { wrong: 'المَدْرَسَةُ تَبْدَأُ فِي السَّاعَةِ ثَمَانِيَةٌ.', hint: 'Times use a different number form.', right: 'المَدْرَسَةُ تَبْدَأُ فِي السَّاعَةِ الثَّامِنَةِ.', why: 'Clock time = feminine ordinal: الثَّامِنَةِ.' },
    { wrong: 'فِي الأَحَدِ أَدْرُسُ العُلُومَ.', hint: 'On Sunday …', right: 'يَوْمَ الأَحَدِ أَدْرُسُ العُلُومَ.', why: 'On + day = يَوْمَ + day.' },
    { wrong: 'عِنْدِي سِتَّةُ حِصَّةٍ.', hint: 'حِصَّةٌ is feminine; 3–10 + plural.', right: 'عِنْدِي سِتُّ حِصَصٍ.', why: 'Feminine noun → سِتُّ; plural حِصَصٍ.' },
  ],
  task: {
    title: 'My favourite school day', ar: 'يَوْمِي المَدْرَسِيُّ المُفَضَّلُ',
    text: 'Write a short text (about 40–60 words) for a class poster. Include: • your favourite school day • when school starts and finishes • the lessons that day, in order, with one time • break or lunch • why it is your favourite day.',
    phrases: [['يَوْمِي المُفَضَّلُ يَوْمُ …', 'my favourite day is …'], ['تَبْدَأُ المَدْرَسَةُ فِي السَّاعَةِ …', 'school starts at …'], ['الحِصَّةُ الأُولَى … ، ثُمَّ …', 'the first lesson is …, then …'], ['أُحِبُّ هٰذَا اليَوْمَ لِأَنَّ …', 'I love this day because …']],
    coreFrames: [
      { ar: 'يَوْمِي المُفَضَّلُ يَوْمُ ______ .', en: 'My favourite day is …' },
      { ar: 'تَبْدَأُ المَدْرَسَةُ فِي السَّاعَةِ ______ .', en: 'School starts at …' },
      { ar: 'الحِصَّةُ الأُولَى ______ ، ثُمَّ ______ .', en: 'The first lesson is …, then …' },
      { ar: 'تَنْتَهِي المَدْرَسَةُ فِي السَّاعَةِ ______ .', en: 'School finishes at …' },
    ],
    developFrames: [
      { ar: 'الاسْتِرَاحَةُ فِي السَّاعَةِ ______ ، وَوَقْتُ الغَدَاءِ ______ .', en: 'Break is at …, and lunch …' },
      { ar: 'أُحِبُّ هٰذَا اليَوْمَ لِأَنَّ ______ .', en: 'I love this day because …' },
    ],
    bank: ['يَوْمَ الأَحَدِ · الإِثْنَيْنِ', 'الثُّلَاثَاءِ · الأَرْبِعَاءِ', 'الخَمِيسِ · الجُمُعَةِ', 'فِي السَّاعَةِ …', 'وَالرُّبْعِ · وَالنِّصْفِ', 'إِلَّا رُبْعًا', 'حِصَّةٌ · حِصَصٌ', 'تَبْدَأُ · تَنْتَهِي'],
    model: {
      text: 'يَوْمِي المُفَضَّلُ يَوْمُ الأَرْبِعَاءِ. تَبْدَأُ المَدْرَسَةُ فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ. الحِصَّةُ الأُولَى لُغَةٌ عَرَبِيَّةٌ، ثُمَّ رِيَاضِيَّاتٌ. الاسْتِرَاحَةُ فِي السَّاعَةِ العَاشِرَةِ وَالنِّصْفِ، وَبَعْدَهَا عِنْدِي فَنٌّ وَعُلُومٌ. وَقْتُ الغَدَاءِ فِي الثَّانِيَةَ عَشْرَةَ وَالنِّصْفِ، وَتَنْتَهِي المَدْرَسَةُ فِي الثَّالِثَةِ. أُحِبُّ هٰذَا اليَوْمَ لِأَنَّ عِنْدِي تَرْبِيَةً بَدَنِيَّةً فِي آخِرِ اليَوْمِ.',
      en: '“My favourite day is Wednesday. School starts at half past eight. The first lesson is Arabic, then maths. Break is at half past ten, and after it I have art and science. Lunch is at half past twelve, and school finishes at three. I love this day because I have PE at the end of the day.”',
      find: ['يَوْمِي المُفَضَّلُ يَوْمُ الأَرْبِعَاءِ', 'فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ', 'الحِصَّةُ الأُولَى', 'وَتَنْتَهِي المَدْرَسَةُ'],
    },
  },
  checkCore: 'give clock times with فِي السَّاعَةِ + ordinal?',
  checkDevelop: 'use يَوْمَ + day and put the lessons in order?',
});
