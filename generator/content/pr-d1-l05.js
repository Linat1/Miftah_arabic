'use strict';
/* Practice Room · D1-L05 · After school and evening routine. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd1-l05',
  arShort: 'بَعْدَ المَدْرَسَةِ وَالمَسَاءُ',
  grammar: 'three phases (afternoon · early evening · night); li-muddati + duration; purpose with li-kay / ḥattā + verb in -a; possessive and object suffixes (ghurfatī · usāʿiduhā · urattibuhā)',
  focus: 'Students run their own speaking and writing practice about their afternoon and evening: say the evening verbs, act a short dialogue, answer question cards, do a role-play card arranging a study session, give a one-minute three-phase talk, then build, fix and write a detailed evening routine.',
  words1: 'After school', words2: 'Evening and bedtime',
  dialogue: {
    title: 'How long do you study?', ar: 'كَمْ مِنَ الوَقْتِ تُرَاجِعُ؟',
    lines: [
      ['A', 'مَاذَا تَفْعَلُ عِنْدَمَا تَرْجِعُ إِلَى البَيْتِ؟', 'What do you do when you get home?'],
      ['B', 'أُغَيِّرُ مَلَابِسِي، ثُمَّ أَتَنَاوَلُ وَجْبَةً خَفِيفَةً.', 'I change my clothes, then I have a snack.'],
      ['A', 'وَكَمْ مِنَ الوَقْتِ تُرَاجِعُ؟', 'And how long do you revise for?'],
      ['B', 'أُرَاجِعُ دُرُوسِي لِمُدَّةِ سَاعَةٍ، لِكَيْ أَسْتَعِدَّ لِلِامْتِحَانَاتِ.', 'I revise for an hour, to prepare for the exams.'],
      ['A', 'وَبَعْدَ العَشَاءِ؟', 'And after dinner?'],
      ['B', 'أُرَتِّبُ غُرْفَتِي وَأُحَضِّرُ حَقِيبَتِي، حَتَّى لَا أَنْسَى شَيْئًا فِي الصَّبَاحِ.', 'I tidy my room and prepare my bag, so that I don’t forget anything in the morning.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give YOUR real evening — add a duration (لِمُدَّةِ …) and a purpose (لِكَيْ …).',
  },
  questions: [
    { q: 'مَتَى تَرْجِعُ إِلَى البَيْتِ؟', en: 'When do you get home?', start: 'أَرْجِعُ فِي …', more: '… وَأَوَّلُ شَيْءٍ أَفْعَلُهُ …' },
    { q: 'كَمْ مِنَ الوَقْتِ تَسْتَرِيحُ؟', en: 'How long do you rest?', start: 'أَسْتَرِيحُ لِمُدَّةِ …', more: '… لِكَيْ …' },
    { q: 'كَيْفَ تُسَاعِدُ أُسْرَتَكَ؟', en: 'How do you help your family?', start: 'أُسَاعِدُ أُمِّي / أَبِي فِي …', more: '… أُسَاعِدُهَا / أُسَاعِدُهُ لِأَنَّ …' },
    { q: 'مَاذَا تَفْعَلُ لِكَيْ تَسْتَعِدَّ لِلْغَدِ؟', en: 'What do you do to get ready for tomorrow?', start: 'أُحَضِّرُ … لِكَيْ …', more: '… حَتَّى لَا …' },
    { q: 'مَتَى تَذْهَبُ إِلَى الفِرَاشِ؟', en: 'When do you go to bed?', start: 'أَذْهَبُ إِلَى الفِرَاشِ فِي …', more: '… بَعْدَ أَنْ …' },
  ],
  card: {
    title: 'Role-play card — arranging an evening study session', ar: 'جَلْسَةُ مُرَاجَعَةٍ', you: 'yourself', them: 'a classmate on a call',
    tasks: [
      { ex: 'هَلْ أَنْتَ حُرٌّ بَعْدَ المَدْرَسَةِ؟', task: 'Say what you do first.', plan: 'هَلْ ← أَوَّلًا أَرْجِعُ … وَ…', model: 'أَوَّلًا أَرْجِعُ إِلَى البَيْتِ وَأَتَنَاوَلُ وَجْبَةً خَفِيفَةً.', modelEn: 'First I go home and have a snack.' },
      { ex: 'مَتَى نَبْدَأُ المُرَاجَعَةَ؟', task: 'Suggest a time + duration.', plan: 'مَتَى ← فِي … لِمُدَّةِ …', model: 'فِي الخَامِسَةِ، لِمُدَّةِ سَاعَةٍ وَنِصْفٍ.', modelEn: 'At five, for an hour and a half.' },
      { ex: 'لِمَاذَا لَا نَبْدَأُ فِي الرَّابِعَةِ؟', task: 'Give a reason with your family.', plan: '', model: 'لِأَنَّنِي أُسَاعِدُ أُمِّي فِي الرَّابِعَةِ، فَهِيَ تَحْتَاجُنِي لِكَيْ أَعْتَنِيَ بِأَخِي.', modelEn: 'Because I help my mum at four — she needs me to look after my brother.' },
      { unexpected: true, ex: 'وَمَاذَا نُرَاجِعُ أَوَّلًا؟', task: 'Answer the surprise question.', plan: '', model: 'نُرَاجِعُ العُلُومَ أَوَّلًا، لِأَنَّ الامْتِحَانَ يَوْمَ الإِثْنَيْنِ، ثُمَّ العَرَبِيَّةَ.', modelEn: 'We revise science first, because the test is on Monday, then Arabic.' },
    ],
    girl: 'هَلْ أَنْتِ حُرَّةٌ',
    notes: 'li-muddati + duration · li-kay + verb in -a · object suffixes (taḥtājunī).',
  },
  talk: {
    title: 'One minute: my afternoon and evening', ar: 'بَعْدَ الظُّهْرِ وَالمَسَاءُ',
    text: 'Describe your afternoon and evening in THREE phases (after school · early evening · bedtime) for one minute, with times, durations and purposes.',
    routes: {
      core: 'Two actions per phase with times.',
      develop: 'Add لِمُدَّةِ … twice and لِكَيْ once.',
      stretch: 'Add object suffixes (أُسَاعِدُهَا · أُرَتِّبُهَا) and حَتَّى لَا …',
    },
  },
  builder: [
    { en: 'I revise for an hour to prepare for the exam.', cols: [['أُرَاجِعُ لِمُدَّةِ سَاعَةٍ', 'أُرَاجِعُ لِمُدَّةُ سَاعَةٌ'], ['لِكَيْ', 'لِأَنَّ'], ['أَسْتَعِدَّ لِلِامْتِحَانِ.', 'أَسْتَعِدُّ لِلِامْتِحَانِ.']], key: [0, 0, 0], why: 'لِمُدَّةِ + genitive; لِكَيْ + verb in -a (أَسْتَعِدَّ).' },
    { en: 'I tidy my room and clean it every evening.', cols: [['أُرَتِّبُ غُرْفَتِي', 'أُرَتِّبُ غُرْفَتُكَ'], ['وَأُنَظِّفُهَا', 'وَأُنَظِّفُهُ'], ['كُلَّ مَسَاءٍ.', 'كُلُّ مَسَاءٌ.']], key: [0, 0, 0], why: 'غُرْفَةٌ (f.) → object pronoun -hā: أُنَظِّفُهَا; every evening = كُلَّ مَسَاءٍ.' },
    { en: 'I prepare my bag so that I don’t forget anything.', cols: [['أُحَضِّرُ حَقِيبَتِي', 'أُحَضِّرُ حَقِيبَتِيَ'], ['حَتَّى لَا', 'حَتَّى لَمْ'], ['أَنْسَى شَيْئًا.', 'أَنْسَى شَيْءٌ.']], key: [0, 0, 0], why: 'So that … not = حَتَّى لَا + verb; object → شَيْئًا.' },
  ],
  errors: [
    { wrong: 'أُرَاجِعُ لِكَيْ أَنْجَحُ.', hint: 'After لِكَيْ …', right: 'أُرَاجِعُ لِكَيْ أَنْجَحَ.', why: 'لِكَيْ + verb ending in -a.' },
    { wrong: 'أُسَاعِدُ أُمِّي وَأُسَاعِدُهُ كُلَّ يَوْمٍ.', hint: 'My mother → which pronoun?', right: 'أُسَاعِدُ أُمِّي، أُسَاعِدُهَا كُلَّ يَوْمٍ.', why: 'Her → -hā.' },
    { wrong: 'أَسْتَرِيحُ لِمُدَّةُ نِصْفِ سَاعَةٍ.', hint: 'لِ + …', right: 'أَسْتَرِيحُ لِمُدَّةِ نِصْفِ سَاعَةٍ.', why: 'li- + genitive: لِمُدَّةِ.' },
  ],
  task: {
    title: 'My evening, in three phases', ar: 'مَسَائِي فِي ثَلَاثِ مَرَاحِلَ',
    text: 'Write about your afternoon and evening (about 60–80 words) for a wellbeing project. Organise it in three phases. Include: • at least six actions with times • two durations (لِمُدَّةِ …) • two purposes (لِكَيْ … · حَتَّى لَا …) • two object pronouns (أُسَاعِدُهَا …) • your opinion: is your evening balanced?',
    phrases: [['بَعْدَ المَدْرَسَةِ … ، ثُمَّ …', 'after school …, then …'], ['أُرَاجِعُ لِمُدَّةِ …', 'I revise for …'], ['لِكَيْ … · حَتَّى لَا …', 'so that … · so that … not'], ['فِي رَأْيِي مَسَائِي مُتَوَازِنٌ لِأَنَّ …', 'in my opinion my evening is balanced because …']],
    coreFrames: [
      { ar: 'أَرْجِعُ إِلَى البَيْتِ فِي ______ ، وَ ______ .', en: 'I get home at …, and …' },
      { ar: 'أُرَاجِعُ دُرُوسِي لِمُدَّةِ ______ .', en: 'I revise for …' },
      { ar: 'بَعْدَ العَشَاءِ ______ .', en: 'After dinner I …' },
      { ar: 'أَذْهَبُ إِلَى الفِرَاشِ فِي ______ .', en: 'I go to bed at …' },
    ],
    developFrames: [
      { ar: 'أُسَاعِدُ ______ ، أُسَاعِدُهُ / أُسَاعِدُهَا لِكَيْ ______ .', en: 'I help …; I help him / her so that …' },
      { ar: 'أُحَضِّرُ ______ حَتَّى لَا ______ .', en: 'I prepare … so that I don’t …' },
    ],
    bank: ['أَرْجِعُ · أُغَيِّرُ مَلَابِسِي', 'وَجْبَةٌ خَفِيفَةٌ', 'أَسْتَرِيحُ قَلِيلًا', 'أُرَاجِعُ · أُكْمِلُ وَاجِبِي', 'أُرَتِّبُ · أُحَضِّرُ', 'لِمُدَّةِ', 'لِكَيْ · حَتَّى لَا', 'أُسَاعِدُهُ · أُسَاعِدُهَا'],
    model: {
      text: 'أَرْجِعُ إِلَى البَيْتِ فِي الثَّالِثَةِ وَالنِّصْفِ، وَأُغَيِّرُ مَلَابِسِي، ثُمَّ أَسْتَرِيحُ لِمُدَّةِ نِصْفِ سَاعَةٍ. فِي المَسَاءِ أُرَاجِعُ دُرُوسِي لِمُدَّةِ سَاعَةٍ لِكَيْ أَسْتَعِدَّ لِلِامْتِحَانَاتِ. بَعْدَ ذٰلِكَ أُسَاعِدُ أُخْتِي الصَّغِيرَةَ فِي وَاجِبِهَا؛ أُسَاعِدُهَا لِأَنَّ الرِّيَاضِيَّاتِ صَعْبَةٌ عَلَيْهَا. بَعْدَ العَشَاءِ أُرَتِّبُ غُرْفَتِي وَأُحَضِّرُ حَقِيبَتِي حَتَّى لَا أَنْسَى شَيْئًا. أَذْهَبُ إِلَى الفِرَاشِ فِي العَاشِرَةِ. فِي رَأْيِي مَسَائِي مُتَوَازِنٌ، لٰكِنَّهُ مُزْدَحِمٌ قَلِيلًا.',
      en: '“I get home at half past three, change my clothes, then rest for half an hour. In the evening I revise for an hour to prepare for the exams. After that I help my little sister with her homework — I help her because maths is hard for her. After dinner I tidy my room and prepare my bag so that I don’t forget anything. I go to bed at ten. In my opinion my evening is balanced, but a bit busy.”',
      find: ['لِمُدَّةِ نِصْفِ سَاعَةٍ', 'لِكَيْ أَسْتَعِدَّ', 'أُسَاعِدُهَا لِأَنَّ', 'حَتَّى لَا أَنْسَى'],
    },
  },
  checkCore: 'give at least six evening actions with times?',
  checkDevelop: 'use لِمُدَّةِ · لِكَيْ (+ -a) and object pronouns correctly?',
});
