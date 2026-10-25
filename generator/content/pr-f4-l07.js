'use strict';
/* Practice Room · F4-L07 · A typical school day — narrating a sequence. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f4-l07',
  arShort: 'يَوْمٌ مَدْرَسِيٌّ',
  grammar: '“I” verbs (asta- · a- · u-); exact and approximate times (fī al-sāʿati … · ḥawālay …); connectors awwalan · thumma · baʿda dhālika · ʿindamā · fī al-nihāya',
  focus: 'Students run their own speaking and writing practice narrating a school day: say the action verbs, act a short dialogue, answer question cards, do a role-play card describing your day to a visiting student, give a 30-second narrative, then build, fix and write their typical school day in order.',
  words1: 'Morning and school', words2: 'Lunch, afternoon and home',
  dialogue: {
    title: 'What do you do at school?', ar: 'مَاذَا تَفْعَلُ فِي المَدْرَسَةِ؟',
    lines: [
      ['A', 'مَاذَا تَفْعَلُ عِنْدَمَا تَصِلُ إِلَى المَدْرَسَةِ؟', 'What do you do when you arrive at school?'],
      ['B', 'أَوَّلًا أَدْخُلُ الفَصْلَ، ثُمَّ أَجْلِسُ فِي مَكَانِي.', 'First I enter the classroom, then I sit in my place.'],
      ['A', 'وَأَيْنَ تَأْكُلُ الغَدَاءَ؟', 'And where do you eat lunch?'],
      ['B', 'آكُلُ فِي المَقْصَفِ حَوَالَيِ السَّاعَةِ الثَّانِيَةَ عَشْرَةَ وَالنِّصْفِ.', 'I eat in the canteen at about half past twelve.'],
      ['A', 'وَبَعْدَ الغَدَاءِ؟', 'And after lunch?'],
      ['B', 'بَعْدَ ذٰلِكَ أَلْعَبُ فِي المَلْعَبِ مَعَ زُمَلَائِي، ثُمَّ نَرْجِعُ إِلَى الصَّفِّ.', 'After that I play in the playground with my classmates, then we go back to class.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: tell YOUR real day — and add one time to every answer.',
  },
  questions: [
    { q: 'مَتَى تَسْتَيْقِظُ؟', en: 'When do you wake up?', start: 'أَسْتَيْقِظُ فِي السَّاعَةِ …', more: '… ثُمَّ أَتَنَاوَلُ الفُطُورَ' },
    { q: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', en: 'How do you go to school?', start: 'أَذْهَبُ بِالحَافِلَةِ / بِالسَّيَّارَةِ / مَشْيًا …', more: '… وَأَصِلُ حَوَالَيِ …' },
    { q: 'مَاذَا تَفْعَلُ فِي الاسْتِرَاحَةِ؟', en: 'What do you do at break?', start: 'أَتَحَدَّثُ مَعَ … / أَلْعَبُ …', more: '… وَآكُلُ …' },
    { q: 'مَتَى تَعُودُ إِلَى البَيْتِ؟', en: 'When do you return home?', start: 'أَعُودُ إِلَى البَيْتِ فِي …', more: '… ثُمَّ أَسْتَرِيحُ' },
    { q: 'مَاذَا تَفْعَلُ فِي المَسَاءِ؟', en: 'What do you do in the evening?', start: 'أُكْمِلُ وَاجِبِي …', more: '… وَفِي النِّهَايَةِ …' },
  ],
  card: {
    title: 'Role-play card — a visiting student asks about your day', ar: 'طَالِبٌ زَائِرٌ يَسْأَلُ', you: 'yourself', them: 'a visiting student from Jordan',
    tasks: [
      { ex: 'مَتَى تَبْدَأُ يَوْمَكَ؟', task: 'Wake-up time + first action.', plan: 'مَتَى ← أَسْتَيْقِظُ فِي … ، ثُمَّ …', model: 'أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ، ثُمَّ أُصَلِّي الفَجْرَ.', modelEn: 'I wake up at half past six, then I pray Fajr.' },
      { ex: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', task: 'Transport + arrival time.', plan: 'كَيْفَ ← أَذْهَبُ … ، وَأَصِلُ …', model: 'أَذْهَبُ بِالحَافِلَةِ، وَأَصِلُ حَوَالَيِ الثَّامِنَةِ.', modelEn: 'I go by bus, and I arrive at about eight.' },
      { ex: 'مَاذَا تَفْعَلُ فِي وَقْتِ الغَدَاءِ؟', task: 'Two actions in order.', plan: 'مَاذَا ← أَوَّلًا … ، ثُمَّ …', model: 'أَوَّلًا آكُلُ فِي المَقْصَفِ، ثُمَّ أَلْعَبُ كُرَةَ القَدَمِ.', modelEn: 'First I eat in the canteen, then I play football.' },
      { ex: 'وَبَعْدَ المَدْرَسَةِ؟', task: 'Afternoon + finally.', plan: 'بَعْدَ ← أَعُودُ … ، وَفِي النِّهَايَةِ …', model: 'أَعُودُ إِلَى البَيْتِ، وَأُكْمِلُ وَاجِبِي، وَفِي النِّهَايَةِ أَسْتَرِيحُ.', modelEn: 'I return home, finish my homework, and finally I rest.' },
    ],
    girl: 'يَوْمَكِ · تَذْهَبِينَ · تَفْعَلِينَ',
    notes: 'Language: a chain of “I” verbs with time words and connectors.',
  },
  talk: {
    title: '30 seconds: my school day', ar: 'يَوْمِي المَدْرَسِيُّ',
    text: 'Narrate your whole school day in 30 seconds — morning to evening — with at least four connectors and three times.',
    routes: {
      core: 'Six “I” verbs with أَوَّلًا · ثُمَّ.',
      develop: 'Add times (فِي السَّاعَةِ … · حَوَالَيِ …) and بَعْدَ ذٰلِكَ · عِنْدَمَا.',
      stretch: 'Add what is different on Friday, or a reason (لِأَنَّ) for one part of your day.',
    },
  },
  builder: [
    { en: 'When I arrive at school, I talk with my classmates.', cols: [['عِنْدَمَا أَصِلُ إِلَى المَدْرَسَةِ،', 'عِنْدَمَا يَصِلُ إِلَى المَدْرَسَةِ،'], ['أَتَحَدَّثُ', 'نَتَحَدَّثُ'], ['مَعَ زُمَلَائِي.', 'زُمَلَائِي.']], key: [0, 0, 0], why: 'Both verbs are “I” (a-); talk WITH = مَعَ.' },
    { en: 'At about one o’clock I eat in the canteen.', cols: [['حَوَالَيِ السَّاعَةِ', 'السَّاعَةُ حَوَالَيْ'], ['الوَاحِدَةِ', 'وَاحِدٍ'], ['آكُلُ فِي المَقْصَفِ.', 'أَكَلَ فِي المَقْصَفِ.']], key: [0, 0, 0], why: 'About = حَوَالَيِ; one o’clock = السَّاعَةُ الوَاحِدَةُ; I eat = آكُلُ.' },
    { en: 'Finally, I rest.', cols: [['وَفِي النِّهَايَةِ', 'وَفِي البِدَايَةِ'], ['أَسْتَرِيحُ', 'يَسْتَرِيحُ'], ['.', 'أَمْسِ.']], key: [0, 0, 0], why: 'Finally = فِي النِّهَايَةِ; I rest = أَسْتَرِيحُ.' },
  ],
  errors: [
    { wrong: 'أَوَّلًا أَسْتَيْقِظُ، أَوَّلًا آكُلُ، أَوَّلًا أَذْهَبُ.', hint: 'Vary the connectors.', right: 'أَوَّلًا أَسْتَيْقِظُ، ثُمَّ آكُلُ، وَبَعْدَ ذٰلِكَ أَذْهَبُ.', why: 'Use different connectors: أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ.' },
    { wrong: 'أَنَا يَعُودُ إِلَى البَيْتِ.', hint: 'Who returns?', right: 'أَنَا أَعُودُ إِلَى البَيْتِ.', why: '“I” → أَعُودُ.' },
    { wrong: 'أَصِلُ إِلَى المَدْرَسَةِ فِي السَّاعَةِ ثَمَانٍ.', hint: 'Clock times …', right: 'أَصِلُ إِلَى المَدْرَسَةِ فِي السَّاعَةِ الثَّامِنَةِ.', why: 'Clock time = feminine ordinal: الثَّامِنَةِ.' },
  ],
  task: {
    title: 'My typical school day', ar: 'يَوْمِي المَدْرَسِيُّ العَادِيُّ',
    text: 'Write your typical school day (about 45–65 words) for a pen-friend. Include: • the morning (wake up, breakfast, travel) • at school (lessons, break, lunch) • after school and the evening • at least four connectors and three times.',
    phrases: [['أَسْتَيْقِظُ فِي السَّاعَةِ …', 'I wake up at …'], ['أَوَّلًا … ثُمَّ … وَبَعْدَ ذٰلِكَ …', 'first … then … after that …'], ['عِنْدَمَا أَصِلُ إِلَى المَدْرَسَةِ …', 'when I arrive at school …'], ['وَفِي النِّهَايَةِ …', 'and finally …']],
    coreFrames: [
      { ar: 'أَسْتَيْقِظُ فِي السَّاعَةِ ______ .', en: 'I wake up at …' },
      { ar: 'أَوَّلًا ______ ، ثُمَّ ______ .', en: 'First I …, then I …' },
      { ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ ______ .', en: 'I go to school …' },
      { ar: 'أَعُودُ إِلَى البَيْتِ فِي ______ .', en: 'I return home at …' },
    ],
    developFrames: [
      { ar: 'عِنْدَمَا أَصِلُ إِلَى المَدْرَسَةِ، ______ .', en: 'When I arrive at school, I …' },
      { ar: 'بَعْدَ ذٰلِكَ ______ ، وَفِي النِّهَايَةِ ______ .', en: 'After that I …, and finally I …' },
    ],
    bank: ['أَسْتَيْقِظُ · أَتَنَاوَلُ الفُطُورَ', 'أَذْهَبُ · أَصِلُ', 'أَدْخُلُ الفَصْلَ', 'آكُلُ فِي المَقْصَفِ', 'أَعُودُ · أَسْتَرِيحُ', 'أَوَّلًا · ثُمَّ', 'بَعْدَ ذٰلِكَ · عِنْدَمَا', 'فِي النِّهَايَةِ'],
    model: {
      text: 'أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ. أَوَّلًا أَتَوَضَّأُ وَأُصَلِّي، ثُمَّ أَتَنَاوَلُ الفُطُورَ مَعَ عَائِلَتِي. أَذْهَبُ إِلَى المَدْرَسَةِ مَشْيًا، وَأَصِلُ حَوَالَيِ الثَّامِنَةِ. عِنْدَمَا أَصِلُ، أَتَحَدَّثُ مَعَ زُمَلَائِي، ثُمَّ أَدْخُلُ الفَصْلَ. فِي الثَّانِيَةَ عَشْرَةَ آكُلُ فِي المَقْصَفِ، وَبَعْدَ ذٰلِكَ أَلْعَبُ فِي المَلْعَبِ. أَعُودُ إِلَى البَيْتِ فِي الرَّابِعَةِ، وَأُكْمِلُ وَاجِبِي، وَفِي النِّهَايَةِ أَسْتَرِيحُ.',
      en: '“I wake up at half past six. First I do wudu and pray, then I have breakfast with my family. I walk to school and arrive at about eight. When I arrive, I talk with my classmates, then I go into the classroom. At twelve I eat in the canteen, and after that I play in the playground. I return home at four, finish my homework, and finally I rest.”',
      find: ['أَوَّلًا … ثُمَّ', 'حَوَالَيِ الثَّامِنَةِ', 'عِنْدَمَا أَصِلُ', 'وَفِي النِّهَايَةِ أَسْتَرِيحُ'],
    },
  },
  checkCore: 'use “I” verbs in order with at least two times?',
  checkDevelop: 'use four different connectors?',
});
