'use strict';
/* Practice Room · D5-L01 · Hobbies and free time — the right verb, how often, and why. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd5-l01',
  arShort: 'الهِوَايَاتُ',
  grammar: 'the right verb for each hobby: yalʿabu (games, ball sports) · yumārisu (sport in general) · yaʿzifu ʿalā (an instrument) · yastamiʿu ilā (music) · yaqraʾu · yarsumu; frequency (marratan · marratayni · thalātha marrātin fī al-usbūʿ); preference: ufaḍḍilu … ʿalā … li-anna …',
  focus: 'Students run their own speaking and writing practice about hobbies: say each hobby with its verb, act a short dialogue, answer question cards, do a role-play card joining a youth club, give a one-minute talk about free time, then build, fix and write a profile for a pen-pal website.',
  words1: 'Hobbies (1)', words2: 'Hobbies (2)',
  dialogue: {
    title: 'What do you do in your free time?', ar: 'مَاذَا تَفْعَلِينَ فِي وَقْتِ فَرَاغِكِ؟',
    lines: [
      ['A', 'مَاذَا تَفْعَلِينَ فِي وَقْتِ فَرَاغِكِ؟', 'What do you do in your free time?'],
      ['B', 'أَعْزِفُ عَلَى العُودِ، وَأَسْتَمِعُ إِلَى المُوسِيقَى العَرَبِيَّةِ.', 'I play the oud, and I listen to Arabic music.'],
      ['A', 'كَمْ مَرَّةً تَتَدَرَّبِينَ؟', 'How often do you practise?'],
      ['B', 'ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ، مَعَ مُعَلِّمَتِي.', 'Three times a week, with my teacher.'],
      ['A', 'وَهَلْ تُمَارِسِينَ الرِّيَاضَةَ؟', 'And do you do sport?'],
      ['B', 'نَعَمْ، أَلْعَبُ كُرَةَ الطَّائِرَةِ، وَلٰكِنْ أُفَضِّلُ المُوسِيقَى عَلَى الرِّيَاضَةِ لِأَنَّهَا تُرِيحُنِي.', 'Yes, I play volleyball, but I prefer music to sport because it relaxes me.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give YOUR hobbies — change the questions for a boy (تَفْعَلُ · تَتَدَرَّبُ).',
  },
  questions: [
    { q: 'مَا هِوَايَاتُكَ؟', en: 'What are your hobbies?', start: 'أَلْعَبُ … / أَرْسُمُ … / أَقْرَأُ …', more: '… وَأُحِبُّ أَيْضًا …' },
    { q: 'هَلْ تَعْزِفُ عَلَى آلَةٍ مُوسِيقِيَّةٍ؟', en: 'Do you play an instrument?', start: 'نَعَمْ، أَعْزِفُ عَلَى … / لَا، وَلٰكِنْ أَسْتَمِعُ إِلَى …', more: '…' },
    { q: 'كَمْ مَرَّةً تُمَارِسُ الرِّيَاضَةَ؟', en: 'How often do you do sport?', start: 'أُمَارِسُ الرِّيَاضَةَ … مَرَّاتٍ فِي الأُسْبُوعِ', more: '… عَادَةً فِي …' },
    { q: 'مَا الهِوَايَةُ الَّتِي لَا تُحِبُّهَا؟', en: 'Which hobby don’t you like?', start: 'لَا أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', more: '…' },
    { q: 'أَيُّهُمَا تُفَضِّلُ: القِرَاءَةَ أَمِ الأَلْعَابَ الإِلِكْتِرُونِيَّةَ؟', en: 'Reading or video games?', start: 'أُفَضِّلُ … عَلَى … لِأَنَّ …', more: '… وَلٰكِنْ …' },
  ],
  card: {
    title: 'Role-play card — joining a youth club', ar: 'فِي نَادِي الشَّبَابِ', you: 'a new member', them: 'the club leader',
    tasks: [
      { ex: 'مَرْحَبًا! مَا هِوَايَاتُكَ؟', task: 'Two hobbies, right verbs.', plan: 'هِوَايَاتِي ← أَلْعَبُ … وَأَرْسُمُ …', model: 'أَلْعَبُ الشِّطْرَنْجَ، وَأَرْسُمُ بِالأَلْوَانِ المَائِيَّةِ.', modelEn: 'I play chess, and I paint with watercolours.' },
      { ex: 'كَمْ مَرَّةً تَلْعَبُ الشِّطْرَنْجَ؟', task: 'Frequency.', plan: 'كَمْ ← … مَرَّاتٍ فِي الأُسْبُوعِ', model: 'مَرَّتَيْنِ فِي الأُسْبُوعِ، عَادَةً مَعَ جَدِّي.', modelEn: 'Twice a week, usually with my grandfather.' },
      { ex: 'عِنْدَنَا نَادِي المُوسِيقَى وَنَادِي الرِّيَاضَةِ. أَيُّهُمَا تُفَضِّلُ؟', task: 'Preference + reason.', plan: '', model: 'أُفَضِّلُ نَادِي المُوسِيقَى عَلَى نَادِي الرِّيَاضَةِ، لِأَنَّنِي أُرِيدُ أَنْ أَتَعَلَّمَ العَزْفَ عَلَى النَّايِ.', modelEn: 'I prefer the music club to the sports club, because I want to learn to play the nay.' },
      { unexpected: true, ex: 'مَتَى عِنْدَكَ وَقْتُ فَرَاغٍ؟', task: 'Answer the surprise question.', plan: '', model: 'عِنْدِي وَقْتُ فَرَاغٍ يَوْمَ الأَرْبِعَاءِ بَعْدَ الرَّابِعَةِ، وَفِي نِهَايَةِ الأُسْبُوعِ.', modelEn: 'I am free on Wednesday after four, and at the weekend.' },
    ],
    girl: 'leader to a girl: هِوَايَاتُكِ · تَلْعَبِينَ · تُفَضِّلِينَ · عِنْدَكِ',
    notes: 'yalʿabu + game · yaʿzifu ʿalā + instrument · ufaḍḍilu X ʿalā Y.',
  },
  talk: {
    title: 'One minute: my free time', ar: 'وَقْتُ فَرَاغِي',
    text: 'Talk for one minute about four hobbies: what, how often, with whom, and which you prefer.',
    routes: {
      core: 'Four hobbies with the right verb.',
      develop: 'Add frequency (مَرَّتَيْنِ / ثَلَاثَ مَرَّاتٍ) and with whom.',
      stretch: 'Add أُفَضِّلُ … عَلَى … لِأَنَّ … and a hobby you want to try.',
    },
  },
  builder: [
    { en: 'I play the oud twice a week.', cols: [['أَعْزِفُ', 'أَلْعَبُ'], ['عَلَى العُودِ', 'العُودَ'], ['مَرَّتَيْنِ فِي الأُسْبُوعِ.', 'مَرَّتَانِ فِي الأُسْبُوعِ.']], key: [0, 0, 0], why: 'Instrument → أَعْزِفُ عَلَى; twice = مَرَّتَيْنِ.' },
    { en: 'My brother listens to the radio.', cols: [['يَسْتَمِعُ أَخِي', 'يَسْتَمِعُ أَخُو'], ['إِلَى', 'عَلَى'], ['الرَّادْيُو.', 'بِالرَّادْيُو.']], key: [0, 0, 0], why: 'يَسْتَمِعُ إِلَى …' },
    { en: 'I prefer swimming to running.', cols: [['أُفَضِّلُ', 'أُفَضِّلَ'], ['السِّبَاحَةَ', 'السِّبَاحَةُ'], ['عَلَى الجَرْيِ.', 'مِنَ الجَرْيِ.']], key: [0, 0, 0], why: 'أُفَضِّلُ X (-a) عَلَى Y.' },
  ],
  errors: [
    { wrong: 'أَلْعَبُ عَلَى الجِيتَارِ.', hint: 'Instruments take another verb.', right: 'أَعْزِفُ عَلَى الجِيتَارِ.', why: 'يَعْزِفُ عَلَى + instrument.' },
    { wrong: 'أَسْتَمِعُ المُوسِيقَى كُلَّ يَوْمٍ.', hint: 'Missing preposition.', right: 'أَسْتَمِعُ إِلَى المُوسِيقَى كُلَّ يَوْمٍ.', why: 'يَسْتَمِعُ إِلَى …' },
    { wrong: 'أَسْبَحُ ثَلَاثَةَ مَرَّاتٍ.', hint: 'مَرَّةٌ is feminine.', right: 'أَسْبَحُ ثَلَاثَ مَرَّاتٍ.', why: 'Feminine counted noun → ثَلَاثَ.' },
  ],
  task: {
    title: 'A pen-pal profile: my hobbies', ar: 'مَلَفِّي: هِوَايَاتِي',
    text: 'Write a profile (about 60–80 words) for a pen-pal website. Include: • four hobbies, each with the right verb • frequency for two of them • who you do them with • one preference (أُفَضِّلُ … عَلَى … لِأَنَّ …) • a hobby you don’t like and why.',
    phrases: [['أَلْعَبُ … · أُمَارِسُ …', 'I play … · I do (sport) …'], ['أَعْزِفُ عَلَى … · أَسْتَمِعُ إِلَى …', 'I play (instrument) … · I listen to …'], ['مَرَّتَيْنِ / ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ', 'twice / three times a week'], ['أُفَضِّلُ … عَلَى … لِأَنَّ …', 'I prefer … to … because …']],
    coreFrames: [
      { ar: 'فِي وَقْتِ فَرَاغِي أَلْعَبُ ______ .', en: 'In my free time I play …' },
      { ar: 'أَعْزِفُ عَلَى ______ / أَسْتَمِعُ إِلَى ______ .', en: 'I play … / I listen to …' },
      { ar: 'أُمَارِسُ ______ ______ فِي الأُسْبُوعِ مَعَ ______ .', en: 'I do … … times a week with …' },
      { ar: 'لَا أُحِبُّ ______ ، لِأَنَّ ______ .', en: 'I don’t like …, because …' },
    ],
    developFrames: [
      { ar: 'أُفَضِّلُ ______ عَلَى ______ ، لِأَنَّ ______ .', en: 'I prefer … to …, because …' },
      { ar: 'أُرِيدُ أَنْ أُجَرِّبَ ______ فِي المُسْتَقْبَلِ.', en: 'I want to try … in future.' },
    ],
    bank: ['هِوَايَةٌ · هِوَايَاتٌ', 'وَقْتُ الفَرَاغِ', 'أَلْعَبُ · أُمَارِسُ', 'أَعْزِفُ عَلَى', 'أَسْتَمِعُ إِلَى', 'أَسْبَحُ · أَرْسُمُ', 'مَرَّتَيْنِ · ثَلَاثَ مَرَّاتٍ', 'أُفَضِّلُ … عَلَى …'],
    model: {
      text: 'مَرْحَبًا! اسْمِي حَمْزَةُ، وَعِنْدِي هِوَايَاتٌ كَثِيرَةٌ. فِي وَقْتِ فَرَاغِي أَلْعَبُ كُرَةَ القَدَمِ مَعَ أَصْدِقَائِي ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ. أَعْزِفُ عَلَى العُودِ مَرَّتَيْنِ فِي الأُسْبُوعِ مَعَ خَالِي، وَأَسْتَمِعُ إِلَى المُوسِيقَى قَبْلَ النَّوْمِ. كَمَا أَنَّنِي أَرْسُمُ أَحْيَانًا فِي نِهَايَةِ الأُسْبُوعِ. أُفَضِّلُ كُرَةَ القَدَمِ عَلَى الرَّسْمِ، لِأَنَّهَا جَمَاعِيَّةٌ وَمُمْتِعَةٌ. لَا أُحِبُّ الأَلْعَابَ الإِلِكْتِرُونِيَّةَ كَثِيرًا، لِأَنَّهَا تُتْعِبُ عَيْنَيَّ. وَأَنْتَ، مَا هِوَايَاتُكَ؟',
      en: '“Hi! My name is Hamza, and I have lots of hobbies. In my free time I play football with my friends three times a week. I play the oud twice a week with my uncle, and I listen to music before bed. I also sometimes draw at the weekend. I prefer football to drawing, because it is a team game and fun. I don’t like video games much, because they tire my eyes. And you, what are your hobbies?”',
      find: ['ثَلَاثَ مَرَّاتٍ', 'أَعْزِفُ عَلَى العُودِ', 'وَأَسْتَمِعُ إِلَى', 'أُفَضِّلُ كُرَةَ القَدَمِ عَلَى'],
    },
  },
  checkCore: 'use the right verb for every hobby (أَلْعَبُ · أَعْزِفُ عَلَى · أَسْتَمِعُ إِلَى)?',
  checkDevelop: 'give frequencies and a preference with عَلَى and a reason?',
});
