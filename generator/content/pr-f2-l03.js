'use strict';
/* Practice Room · F2-L03 · How old are you? Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f2-l03',
  arShort: 'كَمْ عُمْرُكَ؟',
  grammar: 'kam ʿumruka / ʿumruki; ʿumrī … sanatan (11–20); ʿumruhu / ʿumruhā; numbers 11–20',
  focus: 'Students run their own speaking and writing practice with ages: say the age phrases and numbers, act a short dialogue, answer age cards, do a role-play card at a sports-club desk, give a 30-second talk about ages in their family, then build, fix and write a short profile with names and ages.',
  words1: 'Asking and giving ages', words2: 'Numbers 11–20',
  addWords: [['أَحَدَ عَشَرَ', 'eleven (11)'], ['اثْنَا عَشَرَ', 'twelve (12)'], ['ثَلَاثَ عَشْرَةَ', 'thirteen (13)'], ['أَرْبَعَ عَشْرَةَ', 'fourteen (14)'], ['خَمْسَ عَشْرَةَ', 'fifteen (15)'], ['عِشْرُونَ', 'twenty (20)']],
  dialogue: {
    title: 'How old are you?', ar: 'كَمْ عُمْرُكَ؟',
    lines: [
      ['A', 'مَا اسْمُكَ؟', 'What is your name?'],
      ['B', 'اسْمِي آدَمُ.', 'My name is Adam.'],
      ['A', 'كَمْ عُمْرُكَ يَا آدَمُ؟', 'How old are you, Adam?'],
      ['B', 'عُمْرِي اثْنَتَا عَشْرَةَ سَنَةً. وَأَنْتِ، كَمْ عُمْرُكِ؟', 'I am twelve years old. And you, how old are you?'],
      ['A', 'عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً.', 'I am thirteen years old.'],
      ['B', 'وَأَخُوكِ؟ — عُمْرُهُ خَمْسُ سَنَوَاتٍ.', 'And your brother? — He is five years old.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: use your REAL ages and a real brother, sister or cousin.',
  },
  questions: [
    { q: 'كَمْ عُمْرُكَ؟ / كَمْ عُمْرُكِ؟', en: 'How old are you? (boy / girl)', start: 'عُمْرِي … سَنَةً.', more: '… وَأَنْتَ؟' },
    { q: 'كَمْ عُمْرُ أَخِيكَ؟', en: 'How old is your brother?', start: 'عُمْرُهُ …', more: '… وَاسْمُهُ …' },
    { q: 'كَمْ عُمْرُ أُخْتِكَ؟', en: 'How old is your sister?', start: 'عُمْرُهَا …', more: '… وَاسْمُهَا …' },
    { q: 'كَمْ عُمْرُ صَدِيقِكَ؟', en: 'How old is your friend?', start: 'عُمْرُ صَدِيقِي …', more: '… أَيْضًا' },
    { q: 'مَنْ أَكْبَرُ: أَنْتَ أَمْ صَدِيقُكَ؟', en: 'Who is older: you or your friend?', start: 'أَنَا … / صَدِيقِي …', more: '… عُمْرِي … وَعُمْرُهُ …' },
  ],
  card: {
    title: 'Role-play card — joining a swimming club', ar: 'فِي نَادِي السِّبَاحَةِ', you: 'a new member', them: 'the receptionist',
    tasks: [
      { ex: 'أَهْلًا! مَا اسْمُكَ؟', task: 'Give your name.', plan: 'مَا ← اسْمِي …', model: 'اسْمِي مَرْيَمُ.', modelEn: 'My name is Maryam.' },
      { ex: 'كَمْ عُمْرُكِ؟', task: 'Give your age.', plan: 'كَمْ ← عُمْرِي … سَنَةً', model: 'عُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.', modelEn: 'I am fourteen years old.' },
      { ex: 'هَلْ مَعَكِ أَخٌ أَوْ أُخْتٌ؟', task: 'Say yes + name and age.', plan: 'هَلْ ← نَعَمْ، أُخْتِي … عُمْرُهَا …', model: 'نَعَمْ، أُخْتِي هُدَى، عُمْرُهَا إِحْدَى عَشْرَةَ سَنَةً.', modelEn: 'Yes, my sister Huda; she is eleven years old.' },
      { ex: 'شُكْرًا! أَهْلًا وَسَهْلًا فِي النَّادِي.', task: 'Thank and say goodbye.', plan: 'شُكْرًا ← شُكْرًا … مَعَ السَّلَامَةِ', model: 'شُكْرًا جَزِيلًا! مَعَ السَّلَامَةِ.', modelEn: 'Thank you very much! Goodbye.' },
    ],
    girl: 'this card is written for a girl (-ki); to a boy say: كَمْ عُمْرُكَ؟ · هَلْ مَعَكَ …؟',
    notes: 'Language: ʿumrī … sanatan · ʿumruhu / ʿumruhā · 11–20 + sanatan (accusative singular).',
  },
  talk: {
    title: '30 seconds: ages in my family', ar: 'الأَعْمَارُ فِي عَائِلَتِي',
    text: 'Talk for 30 seconds: your name and age, then the names and ages of two people in your family or two friends.',
    routes: {
      core: 'اسْمِي … · عُمْرِي … سَنَةً.',
      develop: 'Add a boy (عُمْرُهُ …) and a girl (عُمْرُهَا …).',
      stretch: 'Add who is older (أَكْبَرُ) or younger (أَصْغَرُ) and a number under 10 (… سَنَوَاتٍ).',
    },
    phrases: [['عُمْرِي … سَنَةً', 'I am … years old'], ['عُمْرُهُ · عُمْرُهَا', 'he is · she is … old'], ['أَخِي · أُخْتِي', 'my brother · my sister'], ['وَ · أَيْضًا', 'and · also']],
  },
  builder: [
    { en: 'I am twelve years old.', cols: [['عُمْرِي', 'عُمْرُكَ'], ['اثْنَتَا عَشْرَةَ', 'اثْنَا عَشَرَ يَوْمًا'], ['سَنَةً.', 'سَنَوَاتٍ.']], key: [0, 0, 0], why: 'I am … = عُمْرِي; 11–20 + سَنَةً (singular).' },
    { en: 'How old are you, Layla?', cols: [['كَمْ', 'مَا'], ['عُمْرُكِ', 'عُمْرُكَ'], ['يَا لَيْلَى؟', 'لَيْلَى.']], key: [0, 0, 0], why: 'How old = كَمْ عُمْرُ…; to a girl -ki.' },
    { en: 'My brother is five years old.', cols: [['أَخِي', 'أُخْتِي'], ['عُمْرُهُ', 'عُمْرُهَا'], ['خَمْسُ سَنَوَاتٍ.', 'خَمْسُ سَنَةً.']], key: [0, 0, 0], why: 'A brother → عُمْرُهُ; 3–10 + سَنَوَاتٍ (plural).' },
  ],
  errors: [
    { wrong: 'عُمْرِي خَمْسَ عَشْرَةَ سَنَوَاتٍ.', hint: '11–20 take which form?', right: 'عُمْرِي خَمْسَ عَشْرَةَ سَنَةً.', why: '11–20 + singular سَنَةً.' },
    { wrong: 'أُخْتِي عُمْرُهُ عَشْرُ سَنَوَاتٍ.', hint: 'Whose age?', right: 'أُخْتِي عُمْرُهَا عَشْرُ سَنَوَاتٍ.', why: 'Her age → عُمْرُهَا (-hā).' },
    { wrong: 'كَمْ عُمْرُكَ يَا لَيْلَى؟', hint: 'Layla is a girl.', right: 'كَمْ عُمْرُكِ يَا لَيْلَى؟', why: 'To a girl: عُمْرُكِ (-ki).' },
  ],
  task: {
    title: 'My profile: names and ages', ar: 'بِطَاقَتِي: الأَسْمَاءُ وَالأَعْمَارُ',
    text: 'Write a short profile (about 30–45 words) for a pen-friend website. Include: • a greeting and your name • your age • a brother, sister or cousin: name and age • a friend: name and age • a closing.',
    range: [20, 60],
    phrases: [['اسْمِي … وَعُمْرِي … سَنَةً', 'my name is … and I am … years old'], ['عِنْدِي أَخٌ اسْمُهُ … ، عُمْرُهُ …', 'I have a brother called …; he is …'], ['عِنْدِي أُخْتٌ اسْمُهَا … ، عُمْرُهَا …', 'I have a sister called …; she is …'], ['صَدِيقِي … عُمْرُهُ … أَيْضًا', 'my friend … is … too']],
    coreFrames: [
      { ar: 'السَّلَامُ عَلَيْكُمْ! اسْمِي ______ .', en: 'Peace be upon you! My name is …' },
      { ar: 'عُمْرِي ______ سَنَةً.', en: 'I am … years old.' },
      { ar: 'أَخِي / أُخْتِي اسْمُهُ / اسْمُهَا ______ ، وَعُمْرُهُ / عُمْرُهَا ______ .', en: 'My brother / sister is called … and is …' },
      { ar: 'مَعَ السَّلَامَةِ!', en: 'Goodbye!' },
    ],
    developFrames: [
      { ar: 'صَدِيقِي ______ ، عُمْرُهُ ______ سَنَةً أَيْضًا.', en: 'My friend …; he is … too.' },
      { ar: 'ابْنُ عَمِّي ______ صَغِيرٌ، عُمْرُهُ ______ سَنَوَاتٍ.', en: 'My cousin … is young; he is … years old.' },
      { ar: 'وَأَنْتَ، كَمْ ______ ؟', en: 'And you, how old …?' },
    ],
    bank: ['عُمْرِي', 'عُمْرُهُ · عُمْرُهَا', 'سَنَةً (11–20)', 'سَنَوَاتٍ (3–10)', 'أَخِي · أُخْتِي', 'صَدِيقِي · صَدِيقَتِي', 'كَمْ عُمْرُكَ؟', 'أَيْضًا'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ! اسْمِي عُمَرُ، وَعُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً. عِنْدِي أُخْتٌ اسْمُهَا سَارَةُ، وَعُمْرُهَا سَبْعَ عَشْرَةَ سَنَةً. وَأَخِي الصَّغِيرُ اسْمُهُ آدَمُ، وَعُمْرُهُ سِتُّ سَنَوَاتٍ. صَدِيقِي يُوسُفُ عُمْرُهُ ثَلَاثَ عَشْرَةَ سَنَةً أَيْضًا. وَأَنْتَ، كَمْ عُمْرُكَ؟ مَعَ السَّلَامَةِ!',
      en: '“Peace be upon you! My name is Omar and I am thirteen. I have a sister called Sara; she is seventeen. And my little brother is called Adam; he is six. My friend Yusuf is thirteen too. And you, how old are you? Goodbye!”',
      find: ['عُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً', 'عُمْرُهَا سَبْعَ عَشْرَةَ', 'عُمْرُهُ سِتُّ سَنَوَاتٍ', 'كَمْ عُمْرُكَ؟'],
    },
  },
  checkCore: 'write عُمْرِي … سَنَةً with a number 11–20?',
  checkDevelop: 'use عُمْرُهُ for a boy and عُمْرُهَا for a girl?',
});
