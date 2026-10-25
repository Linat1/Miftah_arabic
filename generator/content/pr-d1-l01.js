'use strict';
/* Practice Room · D1-L01 · My morning routine. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd1-l01',
  pick: [0, 2, 3, 4, 6, 8, 9, 10, 11, 12, 13, 14],
  arShort: 'رُوتِينِي الصَّبَاحِيُّ',
  grammar: 'present-tense “I” verbs (a- / u-); sequencing (awwalan · thumma · baʿda dhālika); times (fī al-sāʿati …); “he / she” forms for Stretch',
  focus: 'Students run their own speaking and writing practice about their morning routine: say the routine verbs, act a short dialogue, answer question cards, do a role-play card with a host family, give a one-minute talk, then build, fix and write a short email about their mornings.',
  words1: 'Getting up and getting ready', words2: 'Breakfast, leaving and sequencing',
  dialogue: {
    title: 'What time do you wake up?', ar: 'مَتَى تَسْتَيْقِظُ؟',
    lines: [
      ['A', 'مَتَى تَسْتَيْقِظُ فِي الصَّبَاحِ؟', 'When do you wake up in the morning?'],
      ['B', 'أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ.', 'I wake up at half past six.'],
      ['A', 'وَمَاذَا تَفْعَلُ بَعْدَ ذٰلِكَ؟', 'And what do you do after that?'],
      ['B', 'أَوَّلًا أَتَوَضَّأُ وَأُصَلِّي، ثُمَّ أَغْتَسِلُ وَأَرْتَدِي مَلَابِسِي.', 'First I do wudu and pray, then I shower and get dressed.'],
      ['A', 'هَلْ تَتَنَاوَلُ الإِفْطَارَ؟', 'Do you have breakfast?'],
      ['B', 'نَعَمْ، آكُلُ الخُبْزَ وَالبَيْضَ، ثُمَّ أَخْرُجُ مِنَ البَيْتِ فِي السَّابِعَةِ وَالرُّبْعِ.', 'Yes, I eat bread and eggs, then I leave the house at quarter past seven.'],
    ],
  },
  questions: [
    { q: 'مَتَى تَسْتَيْقِظُ يَوْمَ الإِثْنَيْنِ؟', en: 'When do you wake up on Monday?', start: 'أَسْتَيْقِظُ فِي السَّاعَةِ …', more: '… لِأَنَّ المَدْرَسَةَ …' },
    { q: 'مَاذَا تَفْعَلُ أَوَّلًا؟', en: 'What do you do first?', start: 'أَوَّلًا …', more: '… ثُمَّ … وَبَعْدَ ذٰلِكَ …' },
    { q: 'مَاذَا تَأْكُلُ فِي الإِفْطَارِ؟', en: 'What do you eat for breakfast?', start: 'آكُلُ … وَأَشْرَبُ …', more: '… لِأَنَّهُ لَذِيذٌ / صِحِّيٌّ' },
    { q: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', en: 'How do you go to school?', start: 'أَذْهَبُ بِالحَافِلَةِ / مَشْيًا …', more: '… وَأَصِلُ فِي …' },
    { q: 'هَلْ تُحِبُّ الصَّبَاحَ؟ لِمَاذَا؟', en: 'Do you like the morning? Why?', start: 'نَعَمْ / لَا، …', more: '… لِأَنَّنِي … ؛ أَمَّا أَخِي فَهُوَ …' },
  ],
  card: {
    title: 'Role-play card — morning plans with your host family', ar: 'مَعَ العَائِلَةِ المُضِيفَةِ', you: 'an exchange student in Jordan', them: 'your host mother or father',
    tasks: [
      { ex: 'صَبَاحَ الخَيْرِ! مَتَى تَسْتَيْقِظُ عَادَةً؟', task: 'Say what time you usually wake up.', plan: 'مَتَى ← أَسْتَيْقِظُ عَادَةً فِي …', model: 'صَبَاحَ النُّورِ! أَسْتَيْقِظُ عَادَةً فِي السَّاعَةِ السَّابِعَةِ.', modelEn: 'Good morning! I usually wake up at seven o’clock.' },
      { ex: 'مَاذَا تَأْكُلُ فِي الإِفْطَارِ؟', task: 'Say what you eat and drink.', plan: 'مَاذَا ← آكُلُ … وَأَشْرَبُ …', model: 'آكُلُ الخُبْزَ مَعَ الجُبْنِ، وَأَشْرَبُ الحَلِيبَ.', modelEn: 'I eat bread with cheese, and I drink milk.' },
      { ex: 'مَاذَا تَفْعَلُ قَبْلَ الإِفْطَارِ؟', task: 'Give two things in order.', plan: '', model: 'أَوَّلًا أُصَلِّي، ثُمَّ أَغْتَسِلُ وَأُنَظِّفُ أَسْنَانِي.', modelEn: 'First I pray, then I shower and brush my teeth.' },
      { unexpected: true, ex: 'الحَافِلَةُ تَأْتِي فِي السَّابِعَةِ. هَلْ هٰذَا مُنَاسِبٌ؟', task: 'React and ASK a question.', plan: '', model: 'نَعَمْ، لَا مُشْكِلَةَ. أَيْنَ تَقِفُ الحَافِلَةُ؟', modelEn: 'Yes, no problem. Where does the bus stop?' },
    ],
    girl: 'تَسْتَيْقِظِينَ · تَأْكُلِينَ · تَفْعَلِينَ',
    notes: 'Language: “I” verbs (asta-, a-, u-) · awwalan … thumma · fī al-sāʿati + ordinal (feminine) · asking with ayna.',
  },
  talk: {
    title: 'One minute: my school morning', ar: 'صَبَاحِي فِي يَوْمِ المَدْرَسَةِ',
    text: 'Talk for one minute about your school morning: when you wake up, what you do in order, breakfast, how you go to school — and whether you like mornings.',
    routes: {
      core: '30 seconds: four “I” verbs with أَوَّلًا · ثُمَّ.',
      develop: 'Add times (فِي السَّاعَةِ …) and a reason with لِأَنَّ.',
      stretch: 'Add how your weekend morning is different, or describe a family member’s morning (he / she verbs).',
    },
  },
  builder: [
    { en: 'I wake up at six o’clock.', cols: [['أَسْتَيْقِظُ', 'يَسْتَيْقِظُ'], ['فِي السَّاعَةِ', 'السَّاعَةُ'], ['السَّادِسَةِ', 'سِتَّةٌ']], key: [0, 0, 0], why: '“I” → أَسْتَيْقِظُ; the time = فِي السَّاعَةِ + feminine ordinal (السَّادِسَةِ).' },
    { en: 'First I shower, then I get dressed.', cols: [['أَوَّلًا أَغْتَسِلُ', 'أَوَّلًا تَغْتَسِلُ'], ['ثُمَّ', 'لِأَنَّ'], ['أَرْتَدِي مَلَابِسِي', 'يَرْتَدِي مَلَابِسَهُ']], key: [0, 0, 0], why: 'Both verbs are “I” verbs (a-); then = ثُمَّ.' },
    { en: 'My sister has breakfast at seven.', cols: [['تَتَنَاوَلُ أُخْتِي', 'أَتَنَاوَلُ أُخْتِي'], ['الإِفْطَارَ', 'الإِفْطَارُ'], ['فِي السَّابِعَةِ', 'فِي سَبْعَةٍ']], key: [0, 0, 0], why: '“She” → تَتَنَاوَلُ (ta-); time = فِي السَّابِعَةِ.' },
  ],
  errors: [
    { wrong: 'أَنَا يَسْتَيْقِظُ فِي السَّابِعَةِ.', hint: 'Who wakes up?', right: 'أَنَا أَسْتَيْقِظُ فِي السَّابِعَةِ.', why: '“I” verbs start with a- / u-: أَسْتَيْقِظُ.' },
    { wrong: 'أُخْتِي يَغْتَسِلُ فِي الصَّبَاحِ.', hint: 'My sister is a “she”.', right: 'أُخْتِي تَغْتَسِلُ فِي الصَّبَاحِ.', why: '“She” verbs start with ta-: تَغْتَسِلُ.' },
    { wrong: 'أَخْرُجُ مِنَ البَيْتِ فِي السَّاعَةِ سَبْعَةٍ.', hint: 'How do we say the time?', right: 'أَخْرُجُ مِنَ البَيْتِ فِي السَّاعَةِ السَّابِعَةِ.', why: 'Times use the feminine ordinal: السَّابِعَةِ.' },
  ],
  task: {
    title: 'An email: my morning routine', ar: 'رِسَالَةٌ عَنْ رُوتِينِي الصَّبَاحِيِّ',
    text: 'Your pen-friend in Morocco wants to know about your school mornings. Write an email of about 60–80 words. Include: • when you wake up and what you do first • what you eat for breakfast • how and when you go to school • your opinion of mornings, with a reason.',
    phrases: [['أَسْتَيْقِظُ فِي السَّاعَةِ …', 'I wake up at …'], ['أَوَّلًا … ثُمَّ … وَبَعْدَ ذٰلِكَ …', 'first … then … after that …'], ['آكُلُ … وَأَشْرَبُ …', 'I eat … and drink …'], ['فِي رَأْيِي الصَّبَاحُ … لِأَنَّ …', 'in my opinion the morning is … because …']],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ !', en: 'Hello …!' },
      { ar: 'أَسْتَيْقِظُ فِي السَّاعَةِ ______ .', en: 'I wake up at … o’clock.' },
      { ar: 'أَوَّلًا ______ ، ثُمَّ ______ .', en: 'First I …, then I …' },
      { ar: 'فِي الإِفْطَارِ آكُلُ ______ وَأَشْرَبُ ______ .', en: 'For breakfast I eat … and drink …' },
      { ar: 'أَذْهَبُ إِلَى المَدْرَسَةِ ______ .', en: 'I go to school …' },
    ],
    developFrames: [
      { ar: 'بَعْدَ ذٰلِكَ ______ ، وَأَخْرُجُ مِنَ البَيْتِ فِي ______ .', en: 'After that I …, and I leave the house at …' },
      { ar: 'أَصِلُ إِلَى المَدْرَسَةِ فِي ______ ، لِأَنَّ ______ .', en: 'I arrive at school at …, because …' },
      { ar: 'فِي رَأْيِي الصَّبَاحُ ______ ، لٰكِنَّ ______ .', en: 'In my opinion the morning is …, but …' },
    ],
    bank: ['أَسْتَيْقِظُ', 'أَغْتَسِلُ', 'أَتَوَضَّأُ · أُصَلِّي', 'أَرْتَدِي مَلَابِسِي', 'أَتَنَاوَلُ الإِفْطَارَ', 'أَخْرُجُ مِنَ البَيْتِ', 'أَوَّلًا · ثُمَّ', 'بَعْدَ ذٰلِكَ'],
    model: {
      text: `مَرْحَبًا يَا يَاسِينُ،
كَيْفَ حَالُكَ؟ فِي أَيَّامِ المَدْرَسَةِ أَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ. أَوَّلًا أَتَوَضَّأُ وَأُصَلِّي الفَجْرَ، ثُمَّ أَغْتَسِلُ وَأَرْتَدِي مَلَابِسِي. فِي الإِفْطَارِ آكُلُ الخُبْزَ مَعَ الجُبْنِ، وَأَشْرَبُ الشَّايَ بِالحَلِيبِ. بَعْدَ ذٰلِكَ أُنَظِّفُ أَسْنَانِي، وَأَخْرُجُ مِنَ البَيْتِ فِي السَّابِعَةِ وَالرُّبْعِ. أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ مَعَ أَصْدِقَائِي. فِي رَأْيِي الصَّبَاحُ صَعْبٌ قَلِيلًا لِأَنَّنِي أُحِبُّ النَّوْمَ، لٰكِنَّهُ هَادِئٌ وَجَمِيلٌ.
مَعَ السَّلَامَةِ،
إِلْيَاسُ`,
      en: '“Hi Yassin, how are you? On school days I wake up at half past six. First I do wudu and pray Fajr, then I shower and get dressed. For breakfast I eat bread with cheese and drink tea with milk. After that I brush my teeth and leave the house at quarter past seven. I go to school by bus with my friends. In my opinion the morning is a bit hard because I love sleeping, but it is calm and beautiful. Bye, Ilyas.”',
      find: ['أَسْتَيْقِظُ فِي السَّاعَةِ', 'أَوَّلًا … ثُمَّ', 'بَعْدَ ذٰلِكَ', 'فِي رَأْيِي … لِأَنَّنِي'],
    },
  },
  checkCore: 'use “I” verbs that start with a- / u- (أَسْتَيْقِظُ · أُصَلِّي)?',
  checkDevelop: 'put the routine in order with أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ and give times?',
});
