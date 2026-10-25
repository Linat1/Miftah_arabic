'use strict';
/* Practice Room · D1-L04 · Before and after — sequencing my day. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd1-l04',
  arShort: 'قَبْلَ وَبَعْدَ',
  grammar: 'qabla / baʿda + noun (genitive: qabla al-madrasati); qabla an / baʿda an + verb ending in -a (baʿda an ataghadda); ʿindamā · ḥīna · bi-mujarradi an · fawra an + verb',
  focus: 'Students run their own speaking and writing practice sequencing their day: say the sequencing words, act a short dialogue, answer “before / after” cards, do a role-play card on an exchange-visit schedule, give a one-minute sequenced talk, then build, fix and write a detailed account of a school day.',
  words1: 'Sequencing words', words2: 'Evening actions',
  dialogue: {
    title: 'What do you do after school?', ar: 'مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ؟',
    lines: [
      ['A', 'مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ؟', 'What do you do after school?'],
      ['B', 'بَعْدَ أَنْ أَرْجِعَ إِلَى البَيْتِ، أَسْتَرِيحُ نِصْفَ سَاعَةٍ.', 'After I get home, I rest for half an hour.'],
      ['A', 'وَمَتَى تُكْمِلُ وَاجِبَكَ؟', 'And when do you finish your homework?'],
      ['B', 'قَبْلَ العَشَاءِ. لَا أُشَاهِدُ التِّلْفَازَ قَبْلَ أَنْ أُكْمِلَ وَاجِبِي.', 'Before dinner. I don’t watch TV before I finish my homework.'],
      ['A', 'وَعِنْدَمَا تَنْتَهِي؟', 'And when you finish?'],
      ['B', 'بِمُجَرَّدِ أَنْ أَنْتَهِيَ، أُسَاعِدُ أُسْرَتِي فِي المَطْبَخِ.', 'As soon as I finish, I help my family in the kitchen.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe YOUR afternoon — every answer must use قَبْلَ / بَعْدَ.',
  },
  questions: [
    { q: 'مَاذَا تَفْعَلُ قَبْلَ المَدْرَسَةِ؟', en: 'What do you do before school?', start: 'قَبْلَ المَدْرَسَةِ …', more: '… وَقَبْلَ أَنْ أَخْرُجَ …' },
    { q: 'مَاذَا تَفْعَلُ بَعْدَ أَنْ تَتَغَدَّى؟', en: 'What do you do after you have lunch?', start: 'بَعْدَ أَنْ أَتَغَدَّى …', more: '… ثُمَّ …' },
    { q: 'مَتَى تُرَاجِعُ دُرُوسَكَ؟', en: 'When do you revise?', start: 'أُرَاجِعُ … قَبْلَ / بَعْدَ …', more: '… لِأَنَّ …' },
    { q: 'مَاذَا تَفْعَلُ عِنْدَمَا تَرْجِعُ إِلَى البَيْتِ؟', en: 'What do you do when you get home?', start: 'عِنْدَمَا أَرْجِعُ …', more: '… بِمُجَرَّدِ أَنْ …' },
    { q: 'مَاذَا تَفْعَلُ قَبْلَ أَنْ تَنَامَ؟', en: 'What do you do before you sleep?', start: 'قَبْلَ أَنْ أَنَامَ …', more: '… وَفِي النِّهَايَةِ …' },
  ],
  card: {
    title: 'Role-play card — the schedule for an exchange student', ar: 'جَدْوَلُ الطَّالِبِ الزَّائِرِ', you: 'the host student', them: 'the visiting student from Egypt',
    tasks: [
      { ex: 'مَاذَا نَفْعَلُ قَبْلَ المَدْرَسَةِ؟', task: 'Before school.', plan: 'قَبْلَ ← قَبْلَ المَدْرَسَةِ نَتَنَاوَلُ …', model: 'قَبْلَ المَدْرَسَةِ نَتَنَاوَلُ الإِفْطَارَ مَعَ أُمِّي.', modelEn: 'Before school we have breakfast with my mum.' },
      { ex: 'وَبَعْدَ الحِصَّةِ الأُولَى؟', task: 'After + noun.', plan: 'بَعْدَ ← بَعْدَ الحِصَّةِ الأُولَى …', model: 'بَعْدَ الحِصَّةِ الأُولَى عِنْدَنَا اسْتِرَاحَةٌ قَصِيرَةٌ.', modelEn: 'After the first lesson we have a short break.' },
      { ex: 'وَبَعْدَ أَنْ نَرْجِعَ إِلَى البَيْتِ؟', task: 'After + verb.', plan: '', model: 'بَعْدَ أَنْ نَرْجِعَ، نَسْتَرِيحُ قَلِيلًا ثُمَّ نَلْعَبُ فِي الحَدِيقَةِ.', modelEn: 'After we get back, we rest a little then play in the garden.' },
      { unexpected: true, ex: 'هَلْ يُمْكِنُ أَنْ أَتَّصِلَ بِعَائِلَتِي؟ مَتَى؟', task: 'Answer the surprise question.', plan: '', model: 'طَبْعًا! يُمْكِنُ أَنْ تَتَّصِلَ بِهِمْ قَبْلَ أَنْ نَتَعَشَّى، فِي السَّابِعَةِ.', modelEn: 'Of course! You can call them before we have dinner, at seven.' },
    ],
    girl: 'if the visitor is a girl: تَتَّصِلِي',
    notes: 'Contrast qabla + noun (genitive) with qabla an + verb in -a.',
  },
  talk: {
    title: 'One minute: my day in order', ar: 'يَوْمِي بِالتَّرْتِيبِ',
    text: 'Narrate your day for one minute using قَبْلَ / بَعْدَ at least FOUR times — twice with a noun and twice with a verb.',
    routes: {
      core: 'قَبْلَ / بَعْدَ + noun (twice) + ثُمَّ.',
      develop: 'Add قَبْلَ أَنْ / بَعْدَ أَنْ + verb in -a (twice).',
      stretch: 'Add عِنْدَمَا · بِمُجَرَّدِ أَنْ · فَوْرَ أَنْ and a reason.',
    },
  },
  builder: [
    { en: 'I revise before dinner.', cols: [['أُرَاجِعُ دُرُوسِي', 'أُرَاجِعُ دُرُوسِيَ'], ['قَبْلَ', 'قَبْلَ أَنْ'], ['العَشَاءِ.', 'العَشَاءُ.']], key: [0, 0, 0], why: 'قَبْلَ + noun → genitive: العَشَاءِ.' },
    { en: 'After I finish my homework, I rest.', cols: [['بَعْدَ أَنْ', 'بَعْدَ'], ['أُكْمِلَ وَاجِبِي،', 'أُكْمِلُ وَاجِبِي،'], ['أَسْتَرِيحُ.', 'أَسْتَرِيحَ.']], key: [0, 0, 0], why: 'بَعْدَ أَنْ + verb ending in -a (أُكْمِلَ); the main verb stays -u.' },
    { en: 'As soon as I wake up, I pray.', cols: [['بِمُجَرَّدِ أَنْ', 'بِمُجَرَّدِ'], ['أَسْتَيْقِظَ،', 'أَسْتَيْقِظُ،'], ['أُصَلِّي.', 'أُصَلِّيَ.']], key: [0, 0, 0], why: 'بِمُجَرَّدِ أَنْ + verb in -a.' },
  ],
  errors: [
    { wrong: 'قَبْلَ أَنْ أَنَامُ أَقْرَأُ.', hint: 'The verb after أَنْ …', right: 'قَبْلَ أَنْ أَنَامَ أَقْرَأُ.', why: 'أَنْ + verb ending in -a: أَنَامَ.' },
    { wrong: 'بَعْدَ أَنْ المَدْرَسَةِ أَلْعَبُ.', hint: 'Noun or verb?', right: 'بَعْدَ المَدْرَسَةِ أَلْعَبُ.', why: 'With a noun: بَعْدَ (no أَنْ).' },
    { wrong: 'قَبْلَ الفُطُورُ أَغْتَسِلُ.', hint: 'Look after قَبْلَ.', right: 'قَبْلَ الفُطُورِ أَغْتَسِلُ.', why: 'قَبْلَ + genitive.' },
  ],
  task: {
    title: 'A school day, in order', ar: 'يَوْمٌ مَدْرَسِيٌّ بِالتَّرْتِيبِ',
    text: 'Write a detailed account (about 60–80 words) of yesterday or a typical school day for a class blog. Include: • at least two قَبْلَ / بَعْدَ + noun • at least two قَبْلَ أَنْ / بَعْدَ أَنْ + verb • one عِنْدَمَا or بِمُجَرَّدِ أَنْ • times and a reason.',
    phrases: [['قَبْلَ المَدْرَسَةِ … · بَعْدَ الغَدَاءِ …', 'before school … · after lunch …'], ['قَبْلَ أَنْ أَخْرُجَ …', 'before I go out …'], ['بَعْدَ أَنْ أَرْجِعَ …', 'after I get back …'], ['بِمُجَرَّدِ أَنْ …', 'as soon as …']],
    coreFrames: [
      { ar: 'قَبْلَ المَدْرَسَةِ ______ .', en: 'Before school I …' },
      { ar: 'بَعْدَ الحِصَّةِ الثَّالِثَةِ ______ .', en: 'After the third lesson …' },
      { ar: 'بَعْدَ أَنْ أَرْجِعَ إِلَى البَيْتِ، ______ .', en: 'After I get home, I …' },
      { ar: 'قَبْلَ أَنْ أَنَامَ، ______ .', en: 'Before I sleep, I …' },
    ],
    developFrames: [
      { ar: 'عِنْدَمَا ______ ، ______ ، لِأَنَّ ______ .', en: 'When …, I …, because …' },
      { ar: 'بِمُجَرَّدِ أَنْ ______ ، ______ .', en: 'As soon as …, I …' },
    ],
    bank: ['قَبْلَ · بَعْدَ + noun', 'قَبْلَ أَنْ · بَعْدَ أَنْ + verb', 'عِنْدَمَا · حِينَ', 'بِمُجَرَّدِ أَنْ', 'أُرَاجِعُ دُرُوسِي', 'أُكْمِلُ وَاجِبِي', 'أُسَاعِدُ أُسْرَتِي', 'فِي النِّهَايَةِ'],
    model: {
      text: 'قَبْلَ المَدْرَسَةِ أُصَلِّي الفَجْرَ، وَقَبْلَ أَنْ أَخْرُجَ أَتَنَاوَلُ الإِفْطَارَ مَعَ أَبِي. بَعْدَ الحِصَّةِ الثَّالِثَةِ أَلْعَبُ مَعَ أَصْدِقَائِي فِي المَلْعَبِ. بَعْدَ أَنْ أَرْجِعَ إِلَى البَيْتِ فِي الرَّابِعَةِ، أَسْتَرِيحُ قَلِيلًا، ثُمَّ أُكْمِلُ وَاجِبِي. بِمُجَرَّدِ أَنْ أَنْتَهِيَ، أُسَاعِدُ أُمِّي فِي المَطْبَخِ، لِأَنَّهَا تَعْمَلُ طُولَ اليَوْمِ. وَقَبْلَ أَنْ أَنَامَ، أَقْرَأُ قِصَّةً قَصِيرَةً. فِي النِّهَايَةِ أَنَامُ فِي العَاشِرَةِ، لِأَنَّنِي أَسْتَيْقِظُ مُبَكِّرًا جِدًّا.',
      en: '“Before school I pray Fajr, and before I go out I have breakfast with my dad. After the third lesson I play with my friends in the playground. After I get home at four, I rest a little, then finish my homework. As soon as I finish, I help my mum in the kitchen, because she works all day. And before I sleep, I read a short story. Finally I sleep at ten, because I wake up very early.”',
      find: ['قَبْلَ أَنْ أَخْرُجَ', 'بَعْدَ الحِصَّةِ الثَّالِثَةِ', 'بَعْدَ أَنْ أَرْجِعَ', 'بِمُجَرَّدِ أَنْ أَنْتَهِيَ'],
    },
  },
  checkCore: 'use قَبْلَ / بَعْدَ + noun in the genitive?',
  checkDevelop: 'use قَبْلَ أَنْ / بَعْدَ أَنْ + verb ending in -a?',
});
