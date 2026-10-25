'use strict';
/* Practice Room · F5-L02 · Meals and eating routines. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f5-l02',
  arShort: 'وَجَبَاتُ اليَوْمِ',
  grammar: 'fī al-fuṭūri / al-ghadāʾi / al-ʿashāʾi + ākulu · ashrabu · atanāwalu; times and frequency (ʿādatan · aḥyānan · kulla yawmin); maʿa man?',
  focus: 'Students run their own speaking and writing practice about meals: say the meal and routine words, act a short dialogue, answer question cards, do a role-play card on a homestay with an Arab family, give a 30-second talk, then build, fix and write about their meals in a day.',
  words1: 'Meals and times of day', words2: 'Eating verbs and frequency',
  dialogue: {
    title: 'What do you have for breakfast?', ar: 'مَاذَا تَأْكُلُ فِي الفُطُورِ؟',
    lines: [
      ['A', 'مَاذَا تَأْكُلُ فِي الفُطُورِ عَادَةً؟', 'What do you usually eat for breakfast?'],
      ['B', 'عَادَةً آكُلُ الخُبْزَ مَعَ الجُبْنِ، وَأَشْرَبُ الحَلِيبَ.', 'Usually I eat bread with cheese, and I drink milk.'],
      ['A', 'وَمَتَى تَتَنَاوَلُ الغَدَاءَ؟', 'And when do you have lunch?'],
      ['B', 'أَتَنَاوَلُ الغَدَاءَ فِي المَدْرَسَةِ فِي الثَّانِيَةَ عَشْرَةَ وَالنِّصْفِ.', 'I have lunch at school at half past twelve.'],
      ['A', 'وَالعَشَاءُ؟ مَعَ مَنْ تَأْكُلُ؟', 'And dinner? Who do you eat with?'],
      ['B', 'آكُلُ العَشَاءَ مَعَ عَائِلَتِي فِي السَّابِعَةِ، وَأَحْيَانًا مَعَ جَدَّتِي.', 'I eat dinner with my family at seven, and sometimes with my grandmother.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe YOUR real meals — what, when and with whom.',
  },
  questions: [
    { q: 'مَاذَا تَأْكُلُ فِي الفُطُورِ؟', en: 'What do you eat for breakfast?', start: 'فِي الفُطُورِ آكُلُ …', more: '… وَأَشْرَبُ …' },
    { q: 'أَيْنَ تَتَنَاوَلُ الغَدَاءَ؟', en: 'Where do you have lunch?', start: 'أَتَنَاوَلُ الغَدَاءَ فِي …', more: '… فِي السَّاعَةِ …' },
    { q: 'مَعَ مَنْ تَأْكُلُ العَشَاءَ؟', en: 'Who do you eat dinner with?', start: 'آكُلُ العَشَاءَ مَعَ …', more: '… فِي …' },
    { q: 'هَلْ تَأْكُلُ وَجْبَةً خَفِيفَةً بَعْدَ المَدْرَسَةِ؟', en: 'Do you have a snack after school?', start: 'نَعَمْ، آكُلُ … / لَا، …', more: '… أَحْيَانًا' },
    { q: 'مَا وَجْبَتُكَ المُفَضَّلَةُ؟', en: 'What is your favourite meal?', start: 'وَجْبَتِي المُفَضَّلَةُ …', more: '… لِأَنَّ …' },
  ],
  card: {
    title: 'Role-play card — staying with an Arab host family', ar: 'مَعَ العَائِلَةِ المُضِيفَةِ', you: 'an exchange student', them: 'the host mother',
    tasks: [
      { ex: 'مَاذَا تَأْكُلُ فِي الفُطُورِ عَادَةً؟', task: 'Your usual breakfast.', plan: 'مَاذَا ← عَادَةً آكُلُ …', model: 'عَادَةً آكُلُ البَيْضَ وَالخُبْزَ.', modelEn: 'Usually I eat eggs and bread.' },
      { ex: 'وَمَاذَا تَشْرَبُ؟', task: 'Your drink.', plan: 'مَاذَا ← أَشْرَبُ …', model: 'أَشْرَبُ الشَّايَ بِالحَلِيبِ.', modelEn: 'I drink tea with milk.' },
      { ex: 'مَتَى تَتَنَاوَلُونَ العَشَاءَ فِي بِرِيطَانِيَا؟', task: 'Give the time.', plan: 'مَتَى ← نَتَنَاوَلُ العَشَاءَ فِي …', model: 'نَتَنَاوَلُ العَشَاءَ فِي السَّاعَةِ السَّادِسَةِ.', modelEn: 'We have dinner at six o’clock.' },
      { ex: 'هَلْ تَأْكُلُ وَجْبَةً خَفِيفَةً فِي المَسَاءِ؟', task: 'Yes / no + what.', plan: 'هَلْ ← أَحْيَانًا آكُلُ …', model: 'أَحْيَانًا آكُلُ تُفَّاحَةً قَبْلَ النَّوْمِ.', modelEn: 'Sometimes I eat an apple before bed.' },
    ],
    girl: 'تَأْكُلِينَ · تَشْرَبِينَ',
    notes: 'Language: frequency words before the verb (ʿādatan ākulu …) · natanāwalu (we) · fī al-sāʿati.',
  },
  talk: {
    title: '30 seconds: my meals in a day', ar: 'وَجَبَاتِي فِي يَوْمٍ',
    text: 'Talk for 30 seconds about your meals on a school day: breakfast, lunch, snack and dinner — what, when and with whom.',
    routes: {
      core: 'One sentence for each meal.',
      develop: 'Add times and frequency (عَادَةً · أَحْيَانًا).',
      stretch: 'Add who you eat with and how the weekend is different.',
    },
  },
  builder: [
    { en: 'For breakfast I usually eat eggs.', cols: [['فِي الفُطُورِ', 'الفُطُورُ فِي'], ['عَادَةً آكُلُ', 'عَادَةً أَكَلَ'], ['البَيْضَ.', 'البَيْضُ.']], key: [0, 0, 0], why: 'For breakfast = فِي الفُطُورِ; usually I eat = عَادَةً آكُلُ.' },
    { en: 'I have lunch at school.', cols: [['أَتَنَاوَلُ', 'تَتَنَاوَلُ'], ['الغَدَاءَ', 'الغَدَاءُ'], ['فِي المَدْرَسَةِ.', 'فِي المَدْرَسَةُ.']], key: [0, 0, 0], why: 'I have = أَتَنَاوَلُ; object -a; فِي + genitive.' },
    { en: 'We eat dinner with my grandmother.', cols: [['نَأْكُلُ العَشَاءَ', 'آكُلُ العَشَاءَ نَحْنُ'], ['مَعَ', 'فِي'], ['جَدَّتِي.', 'جَدَّتُنَا هِيَ.']], key: [0, 0, 0], why: 'We eat = نَأْكُلُ; with = مَعَ.' },
  ],
  errors: [
    { wrong: 'آكُلُ فِي الفُطُورُ الخُبْزَ.', hint: 'Look after فِي.', right: 'آكُلُ فِي الفُطُورِ الخُبْزَ.', why: 'فِي + genitive: الفُطُورِ.' },
    { wrong: 'أَتَنَاوَلُ العَشَاءَ فِي سَبْعَةٍ.', hint: 'Clock time.', right: 'أَتَنَاوَلُ العَشَاءَ فِي السَّاعَةِ السَّابِعَةِ.', why: 'Clock time = فِي السَّاعَةِ + ordinal.' },
    { wrong: 'نَحْنُ يَأْكُلُ مَعًا.', hint: 'We …', right: 'نَحْنُ نَأْكُلُ مَعًا.', why: 'We → na-: نَأْكُلُ.' },
  ],
  task: {
    title: 'My meals in a day', ar: 'وَجَبَاتِي فِي يَوْمٍ',
    text: 'Write a short text (about 40–60 words) for a “food diary” project. Include: • breakfast (what and when) • lunch (where) • a snack • dinner (with whom) • your favourite meal and why.',
    phrases: [['فِي الفُطُورِ آكُلُ … وَأَشْرَبُ …', 'for breakfast I eat … and drink …'], ['أَتَنَاوَلُ الغَدَاءَ فِي …', 'I have lunch at / in …'], ['عَادَةً · أَحْيَانًا · كُلَّ يَوْمٍ', 'usually · sometimes · every day'], ['وَجْبَتِي المُفَضَّلَةُ … لِأَنَّ …', 'my favourite meal is … because …']],
    coreFrames: [
      { ar: 'فِي الفُطُورِ آكُلُ ______ وَأَشْرَبُ ______ .', en: 'For breakfast I eat … and drink …' },
      { ar: 'أَتَنَاوَلُ الغَدَاءَ فِي ______ .', en: 'I have lunch at …' },
      { ar: 'آكُلُ العَشَاءَ مَعَ ______ .', en: 'I eat dinner with …' },
      { ar: 'وَجْبَتِي المُفَضَّلَةُ ______ .', en: 'My favourite meal is …' },
    ],
    developFrames: [
      { ar: 'بَعْدَ المَدْرَسَةِ آكُلُ وَجْبَةً خَفِيفَةً: ______ .', en: 'After school I eat a snack: …' },
      { ar: 'أُحِبُّ ______ لِأَنَّ ______ .', en: 'I love … because …' },
    ],
    bank: ['فُطُورٌ · غَدَاءٌ · عَشَاءٌ', 'وَجْبَةٌ خَفِيفَةٌ', 'آكُلُ · أَشْرَبُ', 'أَتَنَاوَلُ', 'فِي السَّاعَةِ …', 'عَادَةً · أَحْيَانًا', 'مَعَ عَائِلَتِي', 'لِأَنَّ'],
    model: {
      text: 'فِي الفُطُورِ عَادَةً آكُلُ الخُبْزَ مَعَ الجُبْنِ، وَأَشْرَبُ الحَلِيبَ فِي السَّابِعَةِ. أَتَنَاوَلُ الغَدَاءَ فِي المَدْرَسَةِ، وَآكُلُ الأَرُزَّ أَوِ المَعْكَرُونَةَ. بَعْدَ المَدْرَسَةِ آكُلُ وَجْبَةً خَفِيفَةً: تُفَّاحَةً أَوْ مَوْزَةً. آكُلُ العَشَاءَ مَعَ عَائِلَتِي فِي السَّاعَةِ السَّادِسَةِ. وَجْبَتِي المُفَضَّلَةُ العَشَاءُ، لِأَنَّنَا نَأْكُلُ مَعًا وَنَتَكَلَّمُ.',
      en: '“For breakfast I usually eat bread with cheese and drink milk at seven. I have lunch at school, and I eat rice or pasta. After school I eat a snack: an apple or a banana. I eat dinner with my family at six o’clock. My favourite meal is dinner, because we eat together and talk.”',
      find: ['فِي الفُطُورِ عَادَةً', 'أَتَنَاوَلُ الغَدَاءَ', 'وَجْبَةً خَفِيفَةً', 'لِأَنَّنَا نَأْكُلُ مَعًا'],
    },
  },
  checkCore: 'write about every meal with فِي الفُطُورِ / الغَدَاءِ / العَشَاءِ?',
  checkDevelop: 'add times and frequency words?',
});
