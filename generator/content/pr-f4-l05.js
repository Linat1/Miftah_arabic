'use strict';
/* Practice Room · F4-L05 · Giving reasons — why? Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f4-l05',
  arShort: 'لِمَاذَا؟',
  grammar: 'li-mādhā? → li-annahu / li-annahā + adjective that agrees with the subject; li-annanī + verb (because I …); li-anna + noun',
  focus: 'Students run their own speaking and writing practice giving reasons: say the reason adjectives, act a short dialogue, answer “why?” cards, do a role-play card persuading a parent about an after-school club, give a 30-second talk with three reasons, then build, fix and write a short text full of reasons.',
  words1: 'Positive reasons', words2: 'More reasons — positive and negative',
  dialogue: {
    title: 'Why do you like it?', ar: 'لِمَاذَا تُحِبُّهَا؟',
    lines: [
      ['A', 'لِمَاذَا تُحِبُّ اللُّغَةَ العَرَبِيَّةَ؟', 'Why do you like Arabic?'],
      ['B', 'لِأَنَّهَا مُفِيدَةٌ، وَلِأَنَّنِي أُرِيدُ أَنْ أَقْرَأَ القُرْآنَ.', 'Because it is useful, and because I want to read the Qur’an.'],
      ['A', 'وَلِمَاذَا لَا تُحِبُّ التَّارِيخَ؟', 'And why don’t you like history?'],
      ['B', 'لِأَنَّهُ مُمِلٌّ قَلِيلًا، وَفِيهِ تَوَارِيخُ كَثِيرَةٌ.', 'Because it is a bit boring, and it has lots of dates.'],
      ['A', 'وَالعُلُومُ؟', 'And science?'],
      ['B', 'أُحِبُّهَا لِأَنَّ التَّجَارِبَ شَيِّقَةٌ، وَالمُعَلِّمَ وَاضِحٌ.', 'I like it because the experiments are engaging and the teacher is clear.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give YOUR real reasons — try all three types: لِأَنَّهُ / لِأَنَّهَا · لِأَنَّنِي · لِأَنَّ + noun.',
  },
  questions: [
    { q: 'لِمَاذَا تُحِبُّ مَادَّتَكَ المُفَضَّلَةَ؟', en: 'Why do you like your favourite subject?', start: 'لِأَنَّهُ / لِأَنَّهَا …', more: '… وَلِأَنَّنِي …' },
    { q: 'لِمَاذَا الرِّيَاضِيَّاتُ مُهِمَّةٌ؟', en: 'Why is maths important?', start: 'لِأَنَّهَا …', more: '… وَنَسْتَعْمِلُهَا كُلَّ يَوْمٍ' },
    { q: 'لِمَاذَا تَدْرُسُ العَرَبِيَّةَ؟', en: 'Why do you study Arabic?', start: 'لِأَنَّنِي أُرِيدُ أَنْ …', more: '… وَلِأَنَّ عَائِلَتِي …' },
    { q: 'لِمَاذَا لَا تُحِبُّ … ؟ (the Leader chooses a subject)', en: 'Why don’t you like …? (Leader picks)', start: 'لِأَنَّهُ / لِأَنَّهَا صَعْبٌ / صَعْبَةٌ …', more: '… لٰكِنَّ …' },
    { q: 'لِمَاذَا تُحِبُّ مَدْرَسَتَكَ؟', en: 'Why do you like your school?', start: 'لِأَنَّ المُعَلِّمِينَ …', more: '… وَلِأَنَّ أَصْدِقَائِي …' },
  ],
  qTitle: 'Every answer starts with a reason',
  card: {
    title: 'Role-play card — persuading your parent about a club', ar: 'أُقْنِعُ أُمِّي', you: 'yourself', them: 'your mother or father',
    tasks: [
      { ex: 'أَيَّ نَادٍ تُرِيدُ؟', task: 'Name the club.', plan: 'أَيَّ ← أُرِيدُ نَادِيَ …', model: 'أُرِيدُ نَادِيَ العُلُومِ بَعْدَ المَدْرَسَةِ.', modelEn: 'I want the science club after school.' },
      { ex: 'لِمَاذَا؟', task: 'Reason 1: it is …', plan: 'لِمَاذَا ← لِأَنَّهُ …', model: 'لِأَنَّهُ مُمْتِعٌ وَمُفِيدٌ.', modelEn: 'Because it is enjoyable and useful.' },
      { ex: 'لٰكِنَّ عِنْدَكَ وَاجِبَاتٍ كَثِيرَةً!', task: 'Reason 2: because I …', plan: 'لٰكِنَّ ← لِأَنَّنِي …', model: 'أَعْرِفُ، لٰكِنَّنِي أَعْمَلُ وَاجِبَاتِي يَوْمَ الأَحَدِ.', modelEn: 'I know, but I do my homework on Sunday.' },
      { ex: 'وَمَتَى يَنْتَهِي النَّادِي؟', task: 'Give the time + one more reason.', plan: 'مَتَى ← فِي السَّاعَةِ … ، وَصَدِيقِي …', model: 'فِي السَّاعَةِ الرَّابِعَةِ، وَصَدِيقِي يَذْهَبُ أَيْضًا، لِذٰلِكَ نَرْجِعُ مَعًا.', modelEn: 'At four o’clock, and my friend goes too, so we come back together.' },
    ],
    girl: 'تُرِيدِينَ · عِنْدَكِ',
    notes: 'Language: three ways to give a reason: li-annahu + adj · li-annanī + verb · li-anna + noun.',
  },
  talk: {
    title: '30 seconds: three reasons', ar: 'ثَلَاثَةُ أَسْبَابٍ',
    text: 'Choose one subject (or your school). Give three different reasons in 30 seconds why you like it — or don’t.',
    routes: {
      core: 'Two reasons with لِأَنَّهُ / لِأَنَّهَا.',
      develop: 'Three reasons, including لِأَنَّنِي + verb.',
      stretch: 'Three reasons + لِأَنَّ + noun + a “but” (لٰكِنَّ).',
    },
  },
  builder: [
    { en: 'I like geography because it is interesting.', cols: [['أُحِبُّ الجُغْرَافِيَا', 'أُحِبُّ الجُغْرَافِيَا هُوَ'], ['لِأَنَّهَا', 'لِأَنَّهُ'], ['مُثِيرَةٌ لِلِاهْتِمَامِ.', 'مُثِيرٌ لِلِاهْتِمَامِ.']], key: [0, 0, 0], why: 'الجُغْرَافِيَا is feminine → لِأَنَّهَا مُثِيرَةٌ.' },
    { en: 'I study Arabic because I love the language.', cols: [['أَدْرُسُ العَرَبِيَّةَ', 'تَدْرُسُ العَرَبِيَّةَ'], ['لِأَنَّنِي', 'لِأَنَّ'], ['أُحِبُّ اللُّغَةَ.', 'أُحِبُّ اللُّغَةُ.']], key: [0, 0, 0], why: 'Because I + verb = لِأَنَّنِي أُحِبُّ.' },
    { en: 'I like PE because the teacher is kind.', cols: [['أُحِبُّ التَّرْبِيَةَ البَدَنِيَّةَ', 'أُحِبُّ التَّرْبِيَةُ البَدَنِيَّةُ'], ['لِأَنَّ المُعَلِّمَ', 'لِأَنَّ المُعَلِّمُ'], ['لَطِيفٌ.', 'لَطِيفًا.']], key: [0, 0, 0], why: 'After لِأَنَّ the noun takes -a (المُعَلِّمَ); the adjective stays -un.' },
  ],
  errors: [
    { wrong: 'أُحِبُّ الفَنَّ لِأَنَّهَا مُمْتِعَةٌ.', hint: 'الفَنُّ is masculine.', right: 'أُحِبُّ الفَنَّ لِأَنَّهُ مُمْتِعٌ.', why: 'Masculine subject → لِأَنَّهُ مُمْتِعٌ.' },
    { wrong: 'أَدْرُسُ كَثِيرًا لِأَنَّ أُرِيدُ النَّجَاحَ.', hint: 'Because I …', right: 'أَدْرُسُ كَثِيرًا لِأَنَّنِي أُرِيدُ النَّجَاحَ.', why: 'Before a verb: لِأَنَّنِي.' },
    { wrong: 'لِمَاذَا تُحِبُّ العُلُومَ؟ — نَعَمْ، أُحِبُّهَا.', hint: 'Did it answer “why”?', right: 'أُحِبُّهَا لِأَنَّهَا عَمَلِيَّةٌ.', why: 'لِمَاذَا → always a reason with لِأَنَّ.' },
  ],
  task: {
    title: 'Why I like my school', ar: 'لِمَاذَا أُحِبُّ مَدْرَسَتِي',
    text: 'Write a short text (about 40–60 words) for the school prospectus: why you like (or don’t like) your school and your subjects. Include at least FOUR reasons, using all three forms: لِأَنَّهُ / لِأَنَّهَا · لِأَنَّنِي · لِأَنَّ + noun.',
    phrases: [['أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', 'I like … because it …'], ['… لِأَنَّنِي أُرِيدُ أَنْ …', '… because I want to …'], ['… لِأَنَّ المُعَلِّمِينَ …', '… because the teachers …'], ['لٰكِنَّ …', 'but …']],
    coreFrames: [
      { ar: 'أُحِبُّ مَدْرَسَتِي لِأَنَّهَا ______ .', en: 'I like my school because it is …' },
      { ar: 'مَادَّتِي المُفَضَّلَةُ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'My favourite subject is … because it is …' },
      { ar: 'أَدْرُسُ ______ لِأَنَّنِي ______ .', en: 'I study … because I …' },
      { ar: 'لَا أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I don’t like … because it is …' },
    ],
    developFrames: [
      { ar: 'أُحِبُّ ______ لِأَنَّ المُعَلِّمَ / المُعَلِّمَةَ ______ .', en: 'I like … because the teacher is …' },
      { ar: '______ صَعْبٌ، لٰكِنَّنِي ______ .', en: '… is difficult, but I …' },
    ],
    bank: ['لِأَنَّهُ · لِأَنَّهَا', 'لِأَنَّنِي', 'لِأَنَّ + noun', 'سَهْلٌ · صَعْبٌ', 'مُهِمٌّ · مُفِيدٌ', 'وَاضِحٌ · مُنَظَّمٌ', 'شَيِّقٌ · مُمِلٌّ', 'لٰكِنَّ'],
    model: {
      text: 'أُحِبُّ مَدْرَسَتِي لِأَنَّهَا كَبِيرَةٌ وَمُنَظَّمَةٌ. مَادَّتِي المُفَضَّلَةُ الكِيمْيَاءُ، لِأَنَّهَا عَمَلِيَّةٌ وَشَيِّقَةٌ. أَدْرُسُ العَرَبِيَّةَ لِأَنَّنِي أُرِيدُ أَنْ أَزُورَ مِصْرَ. أُحِبُّ التَّرْبِيَةَ البَدَنِيَّةَ أَيْضًا، لِأَنَّ المُعَلِّمَ مُضْحِكٌ. لَا أُحِبُّ الرِّيَاضِيَّاتِ كَثِيرًا لِأَنَّهَا صَعْبَةٌ، لٰكِنَّنِي أَعْمَلُ بِجِدٍّ.',
      en: '“I like my school because it is big and organised. My favourite subject is chemistry, because it is practical and engaging. I study Arabic because I want to visit Egypt. I like PE too, because the teacher is funny. I don’t like maths much because it is difficult, but I work hard.”',
      find: ['لِأَنَّهَا كَبِيرَةٌ', 'لِأَنَّنِي أُرِيدُ', 'لِأَنَّ المُعَلِّمَ', 'لٰكِنَّنِي أَعْمَلُ'],
    },
  },
  checkCore: 'answer every “why” with لِأَنَّ?',
  checkDevelop: 'use all three reason types (لِأَنَّهُ / لِأَنَّهَا · لِأَنَّنِي · لِأَنَّ + noun)?',
});
