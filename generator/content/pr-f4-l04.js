'use strict';
/* Practice Room · F4-L04 · Likes, dislikes and preferences. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f4-l04',
  arShort: 'مَا أُحِبُّ وَمَا أُفَضِّلُ',
  grammar: 'uḥibbu … jiddan / kathīran / qalīlan; lā uḥibbu; ufaḍḍilu … ʿalā …; tuḥibbu / tuḥibbīna (to a boy / girl); yuḥibbu / tuḥibbu (he / she reports)',
  focus: 'Students run their own speaking and writing practice with likes and preferences: say the opinion words, act a short dialogue, answer question cards, do a role-play card for a class survey, give a 30-second opinion talk, then build, fix and write a short opinion piece about subjects.',
  words1: 'Like, dislike, prefer', words2: 'Opinion adjectives',
  dialogue: {
    title: 'Which do you prefer?', ar: 'أَيُّهُمَا تُفَضِّلُ؟',
    lines: [
      ['A', 'هَلْ تُحِبُّ العُلُومَ؟', 'Do you like science?'],
      ['B', 'أُحِبُّهَا قَلِيلًا، لٰكِنِّي أُحِبُّ الفَنَّ كَثِيرًا.', 'I like it a little, but I like art a lot.'],
      ['A', 'أَيُّهُمَا تُفَضِّلِينَ: التَّارِيخَ أَمِ الجُغْرَافِيَا؟', 'Which do you prefer (to a girl): history or geography?'],
      ['C', 'أُفَضِّلُ التَّارِيخَ، لِأَنَّهُ مُثِيرٌ لِلِاهْتِمَامِ.', 'I prefer history, because it is interesting.'],
      ['A', 'وَمَاذَا لَا تُحِبِّينَ؟', 'And what don’t you like?'],
      ['C', 'لَا أُحِبُّ الرِّيَاضِيَّاتِ أَبَدًا! هِيَ مُعَقَّدَةٌ جِدًّا.', 'I don’t like maths at all! It is very complicated.'],
    ],
    foot: 'Read in threes (A asks, B is a boy, C is a girl). Round 2: swap letters. Round 3: give YOUR real opinions with جِدًّا · كَثِيرًا · قَلِيلًا.',
  },
  questions: [
    { q: 'مَا المَادَّةُ الَّتِي تُحِبُّهَا جِدًّا؟', en: 'Which subject do you like very much?', start: 'أُحِبُّ … جِدًّا', more: '… لِأَنَّهُ / لِأَنَّهَا …' },
    { q: 'أَيُّهُمَا تُفَضِّلُ: الفَنَّ أَمِ المُوسِيقَى؟', en: 'Which do you prefer: art or music?', start: 'أُفَضِّلُ …', more: '… لِأَنَّهُ / لِأَنَّهَا …' },
    { q: 'مَاذَا لَا تُحِبُّ فِي المَدْرَسَةِ؟', en: 'What don’t you like at school?', start: 'لَا أُحِبُّ …', more: '… لِأَنَّهُ / لِأَنَّهَا مُمِلٌّ / مُمِلَّةٌ' },
    { q: 'مَا رَأْيُكَ فِي التَّرْبِيَةِ البَدَنِيَّةِ؟', en: 'What do you think of PE?', start: 'فِي رَأْيِي هِيَ …', more: '… خُصُوصًا كُرَةُ السَّلَّةِ' },
    { q: 'مَاذَا يُحِبُّ صَدِيقُكَ؟', en: 'What does your friend like?', start: 'صَدِيقِي يُحِبُّ … / صَدِيقَتِي تُحِبُّ …', more: '… أَكْثَرَ مِنْ …' },
  ],
  card: {
    title: 'Role-play card — answering a class survey', ar: 'اسْتِبْيَانُ الصَّفِّ', you: 'a student', them: 'a classmate with a survey',
    tasks: [
      { ex: 'مَا مَادَّتُكَ المُفَضَّلَةُ؟', task: 'Name it + how much.', plan: 'مَا ← أُحِبُّ … جِدًّا', model: 'أُحِبُّ اللُّغَةَ العَرَبِيَّةَ جِدًّا.', modelEn: 'I like Arabic very much.' },
      { ex: 'لِمَاذَا؟', task: 'Give a reason.', plan: 'لِمَاذَا ← لِأَنَّهَا …', model: 'لِأَنَّهَا مُمْتِعَةٌ وَإِبْدَاعِيَّةٌ.', modelEn: 'Because it is enjoyable and creative.' },
      { ex: 'أَيُّهُمَا تُفَضِّلُ: العُلُومَ أَمِ الرِّيَاضِيَّاتِ؟', task: 'Choose + reason.', plan: 'أَيُّهُمَا ← أُفَضِّلُ … لِأَنَّهَا …', model: 'أُفَضِّلُ العُلُومَ، لِأَنَّهَا عَمَلِيَّةٌ.', modelEn: 'I prefer science, because it is practical.' },
      { ex: 'هَلْ هُنَاكَ مَادَّةٌ مُمِلَّةٌ فِي رَأْيِكَ؟', task: 'Name one politely.', plan: 'هَلْ ← فِي رَأْيِي … مُمِلٌّ / مُمِلَّةٌ قَلِيلًا', model: 'فِي رَأْيِي التَّارِيخُ مُمِلٌّ قَلِيلًا، لٰكِنَّهُ مُفِيدٌ.', modelEn: 'In my opinion history is a bit boring, but it is useful.' },
    ],
    girl: 'مَادَّتُكِ · تُفَضِّلِينَ · رَأْيِكِ',
    notes: 'Language: degrees of liking · ufaḍḍilu + li-annahā · polite criticism with qalīlan + lākinna.',
  },
  talk: {
    title: '30 seconds: what I love and what I don’t', ar: 'مَا أُحِبُّ وَمَا لَا أُحِبُّ',
    text: 'Talk for 30 seconds about your school likes and dislikes — use three different strengths (جِدًّا · كَثِيرًا · قَلِيلًا) and one preference.',
    routes: {
      core: 'أُحِبُّ … · لَا أُحِبُّ … · أُفَضِّلُ …',
      develop: 'Add strength words and لِأَنَّهُ / لِأَنَّهَا.',
      stretch: 'Add a comparison (أُحِبُّ … أَكْثَرَ مِنْ …) and a friend’s opinion.',
    },
  },
  builder: [
    { en: 'I prefer music because it is creative.', cols: [['أُفَضِّلُ المُوسِيقَى', 'يُفَضِّلُ المُوسِيقَى'], ['لِأَنَّهَا', 'لِأَنَّهُ'], ['إِبْدَاعِيَّةٌ.', 'إِبْدَاعِيٌّ.']], key: [0, 0, 0], why: 'المُوسِيقَى is feminine → لِأَنَّهَا إِبْدَاعِيَّةٌ.' },
    { en: 'Do you like history? (to a girl)', cols: [['هَلْ', 'مَا'], ['تُحِبِّينَ', 'تُحِبُّ'], ['التَّارِيخَ؟', 'التَّارِيخُ؟']], key: [0, 0, 0], why: 'To a girl → تُحِبِّينَ; the subject is the object → التَّارِيخَ.' },
    { en: 'I like art more than science.', cols: [['أُحِبُّ الفَنَّ', 'أُحِبُّ الفَنُّ'], ['أَكْثَرَ', 'كَثِيرٌ'], ['مِنَ العُلُومِ.', 'العُلُومَ.']], key: [0, 0, 0], why: 'more than = أَكْثَرَ مِنْ + genitive.' },
  ],
  errors: [
    { wrong: 'أَنَا لَا أُحِبُّ جِدًّا الرِّيَاضِيَّاتِ.', hint: 'Where does جِدًّا go?', right: 'أَنَا لَا أُحِبُّ الرِّيَاضِيَّاتِ كَثِيرًا.', why: 'Strength words go at the end; with لَا use كَثِيرًا.' },
    { wrong: 'هَلْ تُحِبُّ الفَنَّ يَا سَارَةُ؟', hint: 'Sara is a girl.', right: 'هَلْ تُحِبِّينَ الفَنَّ يَا سَارَةُ؟', why: 'To a girl: تُحِبِّينَ.' },
    { wrong: 'أُخْتِي يُحِبُّ الجُغْرَافِيَا.', hint: 'My sister = she.', right: 'أُخْتِي تُحِبُّ الجُغْرَافِيَا.', why: 'She → تُحِبُّ.' },
  ],
  task: {
    title: 'My opinions about school subjects', ar: 'رَأْيِي فِي المَوَادِّ',
    text: 'Write an opinion piece (about 40–60 words) for the school magazine. Include: • a subject you love very much, and why • a subject you like a little • a preference between two subjects • a friend’s opinion • a polite criticism with لٰكِنَّ.',
    phrases: [['أُحِبُّ … جِدًّا لِأَنَّهُ / لِأَنَّهَا …', 'I love … very much because …'], ['أُحِبُّ … قَلِيلًا', 'I like … a little'], ['أُفَضِّلُ … عَلَى … لِأَنَّ …', 'I prefer … to … because …'], ['… مُمِلٌّ قَلِيلًا، لٰكِنَّهُ مُفِيدٌ', '… is a bit boring, but useful']],
    coreFrames: [
      { ar: 'أُحِبُّ ______ جِدًّا.', en: 'I love … very much.' },
      { ar: 'أُحِبُّ ______ قَلِيلًا.', en: 'I like … a little.' },
      { ar: 'أُفَضِّلُ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I prefer … because it is …' },
      { ar: 'لَا أُحِبُّ ______ .', en: 'I don’t like …' },
    ],
    developFrames: [
      { ar: 'صَدِيقِي يُحِبُّ ______ أَكْثَرَ مِنْ ______ .', en: 'My friend likes … more than …' },
      { ar: 'فِي رَأْيِي ______ مُمِلٌّ قَلِيلًا، لٰكِنَّهُ ______ .', en: 'In my opinion … is a bit boring, but it is …' },
    ],
    bank: ['أُحِبُّ · لَا أُحِبُّ', 'أُفَضِّلُ', 'جِدًّا · كَثِيرًا · قَلِيلًا', 'أَكْثَرَ مِنْ', 'فِي رَأْيِي', 'إِبْدَاعِيٌّ · عَمَلِيٌّ', 'مُعَقَّدٌ · مُمِلٌّ', 'لٰكِنَّ'],
    model: {
      text: 'أُحِبُّ التَّرْبِيَةَ البَدَنِيَّةَ جِدًّا، لِأَنَّهَا مُمْتِعَةٌ وَعَمَلِيَّةٌ، خُصُوصًا كُرَةَ السَّلَّةِ. أُحِبُّ العُلُومَ قَلِيلًا. أُفَضِّلُ الفَنَّ عَلَى المُوسِيقَى، لِأَنَّهُ إِبْدَاعِيٌّ. صَدِيقَتِي مَرْيَمُ تُحِبُّ الرِّيَاضِيَّاتِ أَكْثَرَ مِنْ كُلِّ المَوَادِّ! فِي رَأْيِي الجُغْرَافِيَا مُمِلَّةٌ قَلِيلًا، لٰكِنَّهَا مُفِيدَةٌ.',
      en: '“I love PE very much, because it is enjoyable and practical, especially basketball. I like science a little. I prefer art to music, because it is creative. My friend Maryam likes maths more than any subject! In my opinion geography is a bit boring, but it is useful.”',
      find: ['أُحِبُّ … جِدًّا', 'أُحِبُّ العُلُومَ قَلِيلًا', 'أُفَضِّلُ الفَنَّ عَلَى', 'لٰكِنَّهَا مُفِيدَةٌ'],
    },
  },
  checkCore: 'use three different strengths (جِدًّا · كَثِيرًا · قَلِيلًا)?',
  checkDevelop: 'give a preference with a reason that agrees with the subject?',
});
