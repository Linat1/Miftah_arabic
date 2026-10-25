'use strict';
/* Practice Room · D1-L09 · Reading routines and weekly schedules. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd1-l09',
  arShort: 'الجَدْوَلُ الأُسْبُوعِيُّ',
  grammar: 'reading a timetable: mawʿid al-badʾ · mawʿid al-intihāʾ · al-mudda; ḥasaba al-jadwal; 24-hour times; tracking WHO with prefixes and suffixes; matching numbers to events; turning a table into sentences',
  focus: 'Students run their own speaking and writing practice with weekly schedules: say the schedule words, act a dialogue reading a timetable, answer detective question cards, do a role-play card at a sports-centre reception, give a one-minute talk reading a schedule aloud, then build, fix and write an email explaining a schedule.',
  words1: 'Schedule words', words2: 'Reading for evidence',
  dialogue: {
    title: 'Reading the summer-club timetable', ar: 'جَدْوَلُ النَّادِي الصَّيْفِيِّ',
    lines: [
      ['A', 'حَسَبَ الجَدْوَلِ، مَتَى يَبْدَأُ نَشَاطُ السِّبَاحَةِ؟', 'According to the timetable, when does swimming start?'],
      ['B', 'مَوْعِدُ البَدْءِ فِي الثَّامِنَةِ وَالنِّصْفِ يَوْمَ الإِثْنَيْنِ.', 'The start time is half past eight on Monday.'],
      ['A', 'وَكَمِ المُدَّةُ؟', 'And how long is it?'],
      ['B', 'سَاعَةٌ وَنِصْفٌ؛ مَوْعِدُ الانْتِهَاءِ فِي العَاشِرَةِ.', 'An hour and a half; the finish time is ten.'],
      ['A', 'وَهَلِ الرَّسْمُ يَوْمَ الثُّلَاثَاءِ أَيْضًا؟', 'And is art on Tuesday too?'],
      ['B', 'لَا، الدَّلِيلُ هُنَا: الرَّسْمُ يَوْمَ الأَرْبِعَاءِ فَقَطْ، مِنَ ١٤:٠٠ إِلَى ١٥:٣٠.', 'No — the evidence is here: art is on Wednesday only, from 14:00 to 15:30.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: point to your own school timetable and ask about two different days.',
  },
  qTitle: 'Detective cards — find it, say it, prove it',
  questions: [
    { q: 'مَا أَوَّلُ حِصَّةٍ يَوْمَ الإِثْنَيْنِ فِي جَدْوَلِكَ؟', en: 'What is the first lesson on Monday in your timetable?', start: 'حَسَبَ الجَدْوَلِ، أَوَّلُ حِصَّةٍ …', more: '… تَبْدَأُ فِي …' },
    { q: 'كَمِ المُدَّةُ بَيْنَ الاسْتِرَاحَةِ وَالغَدَاءِ؟', en: 'How long is it between break and lunch?', start: 'المُدَّةُ …', more: '… لِأَنَّ الاسْتِرَاحَةَ تَنْتَهِي فِي …' },
    { q: 'فِي أَيِّ يَوْمٍ عِنْدَكَ أَكْثَرُ حِصَصٍ؟', en: 'Which day do you have the most lessons?', start: 'يَوْمَ … عِنْدِي … حِصَصٍ', more: '… بَيْنَمَا يَوْمَ …' },
    { q: 'مَا مَعْنَى ١٦:٤٥؟', en: 'What does 16:45 mean?', start: 'السَّاعَةُ الخَامِسَةُ إِلَّا الرُّبْعَ مَسَاءً', more: '… أَيِ السَّادِسَةَ عَشْرَةَ وَخَمْسًا وَأَرْبَعِينَ دَقِيقَةً' },
    { q: 'أَيْنَ الدَّلِيلُ؟', en: 'Where is the evidence?', start: 'الدَّلِيلُ فِي … ← فِي السَّطْرِ الثَّالِثِ', more: '… لِأَنَّهُ يَقُولُ …' },
  ],
  card: {
    title: 'Role-play card — at the sports-centre reception', ar: 'فِي مَكْتَبِ الاسْتِقْبَالِ', you: 'the receptionist, reading the schedule', them: 'a parent asking about classes',
    tasks: [
      { ex: 'مَتَى تَبْدَأُ دُرُوسُ الكَارَاتِيهِ؟', task: 'Read a start time.', plan: 'مَتَى ← حَسَبَ الجَدْوَلِ، تَبْدَأُ فِي …', model: 'حَسَبَ الجَدْوَلِ، تَبْدَأُ يَوْمَ الثُّلَاثَاءِ فِي الخَامِسَةِ مَسَاءً.', modelEn: 'According to the schedule, they start on Tuesday at five pm.' },
      { ex: 'وَكَمِ المُدَّةُ؟', task: 'Give the duration + finish time.', plan: 'كَمْ ← المُدَّةُ … ، وَتَنْتَهِي فِي …', model: 'المُدَّةُ سَاعَةٌ، وَتَنْتَهِي فِي السَّادِسَةِ.', modelEn: 'It lasts an hour and finishes at six.' },
      { ex: 'هَلْ هُنَاكَ دُرُوسٌ لِلْبَنَاتِ؟', task: 'Read another row.', plan: '', model: 'نَعَمْ، يَوْمَ الخَمِيسِ مِنَ ١٦:٣٠ إِلَى ١٧:٣٠، مَعَ المُدَرِّبَةِ هُدَى.', modelEn: 'Yes, on Thursday from 16:30 to 17:30, with coach Huda.' },
      { unexpected: true, ex: 'ابْنِي حُرٌّ يَوْمَ الثُّلَاثَاءِ بَعْدَ السَّادِسَةِ فَقَطْ. مَاذَا يُنَاسِبُهُ؟', task: 'Answer the surprise question.', plan: '', model: 'يُنَاسِبُهُ دَرْسُ السِّبَاحَةِ، لِأَنَّهُ يَبْدَأُ فِي السَّادِسَةِ وَالنِّصْفِ.', modelEn: 'The swimming class suits him, because it starts at half past six.' },
    ],
    girl: 'if the parent says ابْنَتِي: حُرَّةٌ · يُنَاسِبُهَا · لِأَنَّهُ يَبْدَأُ …',
    notes: 'The Leader writes a simple four-row schedule first, so the Speaker reads from it.',
  },
  talk: {
    title: 'One minute: read my week aloud', ar: 'أَقْرَأُ أُسْبُوعِي',
    text: 'Use your real timetable (or invent a club schedule). Read it aloud as full sentences for one minute: day, activity, start, finish, duration.',
    routes: {
      core: 'Four rows: يَبْدَأُ … فِي … وَيَنْتَهِي فِي …',
      develop: 'Add the duration (المُدَّةُ …) and 24-hour times read as words.',
      stretch: 'Add a comparison of two days and a recommendation (أَنْصَحُكَ بِنَشَاطِ …).',
    },
  },
  builder: [
    { en: 'According to the timetable, maths starts at nine.', cols: [['حَسَبَ الجَدْوَلِ،', 'حَسَبُ الجَدْوَلُ،'], ['تَبْدَأُ الرِّيَاضِيَّاتُ', 'يَبْدَأُ الرِّيَاضِيَّاتُ'], ['فِي التَّاسِعَةِ.', 'فِي تِسْعَةٍ.']], key: [0, 0, 0], why: 'حَسَبَ + genitive; plural subject (non-human) → feminine verb.' },
    { en: 'The finish time is half past four.', cols: [['مَوْعِدُ الانْتِهَاءِ', 'مَوْعِدَ الانْتِهَاءِ'], ['فِي الرَّابِعَةِ', 'فِي الرَّابِعَةُ'], ['وَالنِّصْفِ.', 'وَنِصْفٌ.']], key: [0, 0, 0], why: 'Subject → -u; time phrase after فِي.' },
    { en: 'The duration of the activity is two hours.', cols: [['مُدَّةُ', 'مُدَّةَ'], ['النَّشَاطِ', 'النَّشَاطُ'], ['سَاعَتَانِ.', 'سَاعَتَيْنِ.']], key: [0, 0, 0], why: 'Iḍāfa: مُدَّةُ النَّشَاطِ; predicate dual → سَاعَتَانِ.' },
  ],
  errors: [
    { wrong: 'حَسَبَ الجَدْوَلُ، الدَّرْسُ يَوْمَ الأَحَدِ.', hint: 'After حَسَبَ …', right: 'حَسَبَ الجَدْوَلِ، الدَّرْسُ يَوْمَ الأَحَدِ.', why: 'حَسَبَ + genitive.' },
    { wrong: 'يَبْدَأُ فِي ١٤:٣٠ أَيِ الرَّابِعَةِ وَالنِّصْفِ.', hint: '14:30 = ?', right: 'يَبْدَأُ فِي ١٤:٣٠ أَيِ الثَّانِيَةِ وَالنِّصْفِ.', why: '14:30 is half past two (pm).' },
    { wrong: 'تَتَدَرَّبُ سَامِي يَوْمَ الخَمِيسِ.', hint: 'Who is Sami?', right: 'يَتَدَرَّبُ سَامِي يَوْمَ الخَمِيسِ.', why: 'Sami (he) → ya-.' },
  ],
  task: {
    title: 'An email explaining a schedule', ar: 'رِسَالَةٌ عَنْ جَدْوَلٍ',
    text: 'A new student is joining your after-school club. Write an email (about 60–80 words) explaining the weekly schedule. Include: • four activities with day, start time and finish time • two durations (المُدَّةُ …) • one 24-hour time written in words • which activity you recommend and why.',
    phrases: [['حَسَبَ الجَدْوَلِ …', 'according to the schedule …'], ['مَوْعِدُ البَدْءِ … · مَوْعِدُ الانْتِهَاءِ …', 'start time … · finish time …'], ['المُدَّةُ سَاعَةٌ وَنِصْفٌ', 'it lasts an hour and a half'], ['أَنْصَحُكَ بِنَشَاطِ … لِأَنَّ …', 'I recommend … because …']],
    coreFrames: [
      { ar: 'أَهْلًا بِكَ فِي نَادِي ______ !', en: 'Welcome to the … club!' },
      { ar: 'يَوْمَ ______ يَبْدَأُ ______ فِي ______ وَيَنْتَهِي فِي ______ .', en: 'On … … starts at … and ends at …' },
      { ar: 'المُدَّةُ ______ .', en: 'It lasts …' },
      { ar: 'أَنْصَحُكَ بِنَشَاطِ ______ ، لِأَنَّ ______ .', en: 'I recommend …, because …' },
    ],
    developFrames: [
      { ar: 'حَسَبَ الجَدْوَلِ، ______ فِي ______ ، أَيِ ______ مَسَاءً.', en: 'According to the schedule, … at … (in words) pm.' },
      { ar: 'يَوْمُ ______ مُزْدَحِمٌ، بَيْنَمَا ______ .', en: '… is busy, whereas …' },
    ],
    bank: ['جَدْوَلٌ أُسْبُوعِيٌّ', 'مَوْعِدُ البَدْءِ', 'مَوْعِدُ الانْتِهَاءِ', 'المُدَّةُ', 'النَّشَاطُ', 'حَسَبَ الجَدْوَلِ', 'أَيْ (= that is)', 'أَنْصَحُكَ'],
    model: {
      text: `أَهْلًا بِكَ يَا زَيْدُ فِي نَادِي المَدْرَسَةِ!
حَسَبَ الجَدْوَلِ، يَبْدَأُ نَشَاطُ كُرَةِ السَّلَّةِ يَوْمَ الإِثْنَيْنِ فِي ١٥:٣٠، أَيِ الثَّالِثَةِ وَالنِّصْفِ، وَيَنْتَهِي فِي الخَامِسَةِ. يَوْمَ الثُّلَاثَاءِ عِنْدَنَا نَادِي الشِّطْرَنْجِ، وَالمُدَّةُ سَاعَةٌ وَاحِدَةٌ. يَوْمَ الأَرْبِعَاءِ يَبْدَأُ الرَّسْمُ فِي الرَّابِعَةِ وَيَنْتَهِي فِي الخَامِسَةِ وَالنِّصْفِ. أَمَّا يَوْمُ الخَمِيسِ فَفِيهِ نَادِي القِرَاءَةِ، وَمُدَّتُهُ أَرْبَعُونَ دَقِيقَةً. أَنْصَحُكَ بِكُرَةِ السَّلَّةِ، لِأَنَّ المُدَرِّبَ مُمْتَازٌ وَالفَرِيقَ لَطِيفٌ.
صَدِيقُكَ، عُمَرُ`,
      en: '“Welcome to the school club, Zaid! According to the timetable, basketball starts on Monday at 15:30 — that is half past three — and finishes at five. On Tuesday we have chess club, which lasts one hour. On Wednesday art starts at four and finishes at half past five. As for Thursday, there is reading club, which lasts forty minutes. I recommend basketball, because the coach is excellent and the team is kind. Your friend, Omar.”',
      find: ['حَسَبَ الجَدْوَلِ', 'أَيِ الثَّالِثَةِ وَالنِّصْفِ', 'وَالمُدَّةُ سَاعَةٌ وَاحِدَةٌ', 'أَنْصَحُكَ بِكُرَةِ السَّلَّةِ'],
    },
  },
  checkCore: 'give day, start and finish time for four activities?',
  checkDevelop: 'give durations, read a 24-hour time in words and recommend with a reason?',
});
