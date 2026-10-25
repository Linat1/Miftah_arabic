'use strict';
/* Practice Room · D5-L03 · The past tense — singular forms (I · you m. · you f. · he · she). Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd5-l03',
  arShort: 'الفِعْلُ المَاضِي — المُفْرَدُ',
  grammar: 'one root, five endings: dhahabtu (I) · dhahabta (you m.) · dhahabti (you f.) · dhahaba (he) · dhahabat (she); opening with a past time expression (ams · al-usbūʿa al-māḍiya · mundhu usbūʿin · fī al-ʿuṭlati al-māḍiya); negative past with lam + jussive (lam adhhab)',
  focus: 'Students run their own speaking and writing practice with the past tense: say the past verbs and time phrases, act a “what did you do?” dialogue, answer question cards, do a role-play card reporting a lost-and-found day, give a one-minute past-weekend talk, then build, fix and write a diary entry about last weekend.',
  words1: 'Past verbs', words2: 'Past time expressions',
  dialogue: {
    title: 'What did you do yesterday?', ar: 'مَاذَا فَعَلْتَ أَمْسِ؟',
    lines: [
      ['A', 'مَاذَا فَعَلْتَ أَمْسِ؟', 'What did you do yesterday?'],
      ['B', 'ذَهَبْتُ إِلَى المَكْتَبَةِ، وَقَرَأْتُ كِتَابًا عَنِ الفَضَاءِ.', 'I went to the library and read a book about space.'],
      ['A', 'وَأُخْتُكَ؟', 'And your sister?'],
      ['B', 'هِيَ رَسَمَتْ لَوْحَةً جَمِيلَةً، ثُمَّ خَرَجَتْ مَعَ صَدِيقَتِهَا.', 'She painted a lovely picture, then went out with her friend.'],
      ['A', 'وَأَخُوكَ؟', 'And your brother?'],
      ['B', 'لَعِبَ كُرَةَ القَدَمِ، وَلَمْ يَكْتُبْ وَاجِبَهُ! وَأَنْتِ، مَاذَا فَعَلْتِ؟', 'He played football and didn’t write his homework! And you (f.), what did you do?'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: tell YOUR yesterday — then ask your partner with the right “you” (فَعَلْتَ / فَعَلْتِ).',
  },
  questions: [
    { q: 'مَاذَا فَعَلْتَ أَمْسِ بَعْدَ المَدْرَسَةِ؟', en: 'What did you do yesterday after school?', start: 'أَمْسِ … ← ذَهَبْتُ / لَعِبْتُ …', more: '… ثُمَّ …' },
    { q: 'مَاذَا أَكَلْتَ عَلَى العَشَاءِ؟', en: 'What did you eat for dinner?', start: 'أَكَلْتُ …', more: '… وَشَرِبْتُ …' },
    { q: 'مَاذَا فَعَلَ صَدِيقُكَ فِي نِهَايَةِ الأُسْبُوعِ؟', en: 'What did your friend do at the weekend?', start: 'صَدِيقِي … ← شَاهَدَ / خَرَجَ …', more: '…' },
    { q: 'مَاذَا فَعَلَتْ أُمُّكَ الأُسْبُوعَ المَاضِيَ؟', en: 'What did your mother do last week?', start: 'أُمِّي … ← طَبَخَتْ / زَارَتْ …', more: '…' },
    { q: 'مَا الَّذِي لَمْ تَفْعَلْهُ أَمْسِ؟', en: 'What didn’t you do yesterday?', start: 'لَمْ أَ… ← لَمْ أَكْتُبْ …', more: '… لِأَنَّنِي …' },
  ],
  card: {
    title: 'Role-play card — a lost bag at school', ar: 'حَقِيبَةٌ ضَائِعَةٌ', you: 'a student who lost a bag', them: 'the school receptionist',
    tasks: [
      { ex: 'مَتَى فَقَدْتَ الحَقِيبَةَ؟', task: 'When + where.', plan: 'مَتَى ← فَقَدْتُهَا … فِي …', model: 'فَقَدْتُهَا أَمْسِ بَعْدَ الظُّهْرِ فِي المَلْعَبِ.', modelEn: 'I lost it yesterday afternoon in the playground.' },
      { ex: 'مَاذَا فَعَلْتَ بَعْدَ ذٰلِكَ؟', task: 'Two past actions.', plan: 'بَعْدَ ذٰلِكَ ← بَحَثْتُ … ثُمَّ سَأَلْتُ …', model: 'بَحَثْتُ عَنْهَا فِي كُلِّ مَكَانٍ، ثُمَّ سَأَلْتُ المُدَرِّبَ.', modelEn: 'I looked for it everywhere, then asked the coach.' },
      { ex: 'هَلْ رَأَتْهَا صَدِيقَتُكَ؟', task: 'She + negative.', plan: '', model: 'لَا، لَمْ تَرَهَا، وَلٰكِنَّهَا سَاعَدَتْنِي فِي البَحْثِ.', modelEn: 'No, she didn’t see it, but she helped me look.' },
      { unexpected: true, ex: 'وَجَدَهَا عَامِلُ النَّظَافَةِ هٰذَا الصَّبَاحَ!', task: 'React in the past.', plan: '', model: 'الحَمْدُ لِلّٰهِ! شُكْرًا جَزِيلًا؛ أَيْنَ وَجَدَهَا؟', modelEn: 'Thank God! Thank you so much — where did he find it?' },
    ],
    girl: 'receptionist to a girl: فَقَدْتِ · فَعَلْتِ · صَدِيقَتُكِ',
    notes: 'Check the ending: -tu (I) · -ta (you m.) · -ti (you f.) · -a (he) · -at (she).',
  },
  talk: {
    title: 'One minute: last weekend', ar: 'نِهَايَةُ الأُسْبُوعِ المَاضِيَةُ',
    text: 'Talk for one minute about last weekend: what you did, what one male and one female person did, and one thing you didn’t do.',
    routes: {
      core: 'Five verbs with -tu (I).',
      develop: 'Add he (-a) and she (-at) and a time expression.',
      stretch: 'Add لَمْ + jussive and a question to your partner (فَعَلْتَ / فَعَلْتِ).',
    },
  },
  builder: [
    { en: 'Last week she wrote a story.', cols: [['الأُسْبُوعَ المَاضِيَ', 'الأُسْبُوعُ المَاضِي'], ['كَتَبَتْ', 'كَتَبْتُ'], ['قِصَّةً.', 'قِصَّةٌ.']], key: [0, 0, 0], why: 'She → -at; object → قِصَّةً.' },
    { en: 'Did you (f.) watch the film?', cols: [['هَلْ', 'مَاذَا'], ['شَاهَدْتِ', 'شَاهَدْتَ'], ['الفِيلْمَ؟', 'الفِيلْمُ؟']], key: [0, 0, 0], why: 'You (f.) → -ti.' },
    { en: 'I didn’t go out yesterday.', cols: [['لَمْ', 'لَا'], ['أَخْرُجْ', 'خَرَجْتُ'], ['أَمْسِ.', 'غَدًا.']], key: [0, 0, 0], why: 'Negative past = لَمْ + jussive (present stem).' },
  ],
  errors: [
    { wrong: 'أَمْسِ أَذْهَبُ إِلَى السُّوقِ.', hint: 'Time word!', right: 'أَمْسِ ذَهَبْتُ إِلَى السُّوقِ.', why: 'أَمْسِ → past.' },
    { wrong: 'أُخْتِي لَعِبَ التِّنِسَ.', hint: 'She → ?', right: 'أُخْتِي لَعِبَتِ التِّنِسَ.', why: 'She → -at (لَعِبَتِ before al-).' },
    { wrong: 'لَمْ ذَهَبْتُ إِلَى الحَفْلَةِ.', hint: 'لَمْ takes the present stem.', right: 'لَمْ أَذْهَبْ إِلَى الحَفْلَةِ.', why: 'لَمْ + jussive.' },
  ],
  task: {
    title: 'A diary entry: last weekend', ar: 'مُذَكِّرَاتِي: نِهَايَةُ الأُسْبُوعِ',
    text: 'Write a diary entry (about 60–80 words) about last weekend. Include: • two time expressions (أَمْسِ / يَوْمَ السَّبْتِ / فِي المَسَاءِ …) • at least five verbs with -tu (I) • one thing a male person did (-a) and one a female person did (-at) • one negative with لَمْ • how you felt.',
    phrases: [['يَوْمَ السَّبْتِ ذَهَبْتُ …', 'on Saturday I went …'], ['… ثُمَّ … · بَعْدَ ذٰلِكَ …', '… then … · after that …'], ['أَخِي لَعِبَ … · أُخْتِي رَسَمَتْ …', 'my brother played … · my sister drew …'], ['لَمْ أَ… لِأَنَّ …', 'I didn’t … because …']],
    coreFrames: [
      { ar: 'يَوْمَ السَّبْتِ ______ إِلَى ______ .', en: 'On Saturday I … to …' },
      { ar: 'ثُمَّ ______ وَ ______ .', en: 'Then I … and …' },
      { ar: 'أَخِي ______ ، وَأُخْتِي ______ .', en: 'My brother …, and my sister …' },
      { ar: 'لَمْ ______ ، لِأَنَّ ______ .', en: 'I didn’t …, because …' },
    ],
    developFrames: [
      { ar: 'يَوْمَ الأَحَدِ ______ ، وَبَعْدَ ذٰلِكَ ______ .', en: 'On Sunday …, and after that …' },
      { ar: 'كَانَتْ نِهَايَةُ أُسْبُوعٍ ______ ، لِأَنَّ ______ .', en: 'It was a … weekend, because …' },
    ],
    bank: ['ذَهَبْتُ · خَرَجْتُ', 'لَعِبْتُ · شَاهَدْتُ', 'أَكَلْتُ · شَرِبْتُ', 'كَتَبْتُ · قَرَأْتُ', 'رَسَمَ · رَسَمَتْ', 'أَمْسِ · يَوْمَ السَّبْتِ', 'الأُسْبُوعَ المَاضِيَ', 'لَمْ أَذْهَبْ'],
    model: {
      text: 'يَوْمَ السَّبْتِ اسْتَيْقَظْتُ مُتَأَخِّرًا، ثُمَّ ذَهَبْتُ إِلَى النَّادِي وَلَعِبْتُ كُرَةَ السَّلَّةِ مَعَ أَصْدِقَائِي. فِي المَسَاءِ شَاهَدْتُ فِيلْمًا مُضْحِكًا مَعَ عَائِلَتِي، وَأَكَلْنَا البِيتْزَا. يَوْمَ الأَحَدِ زَارَتْنَا جَدَّتِي، وَطَبَخَتْ لَنَا المَقْلُوبَةَ. أَخِي الصَّغِيرُ رَسَمَ صُورَةً لَهَا، فَفَرِحَتْ كَثِيرًا. بَعْدَ ذٰلِكَ كَتَبْتُ وَاجِبَ العُلُومِ، وَلٰكِنَّنِي لَمْ أُرَاجِعْ لِامْتِحَانِ الرِّيَاضِيَّاتِ، لِأَنَّنِي كُنْتُ مُتْعَبًا. كَانَتْ نِهَايَةُ أُسْبُوعٍ مُمْتِعَةً جِدًّا، وَلٰكِنَّهَا قَصِيرَةٌ كَالعَادَةِ!',
      en: '“On Saturday I woke up late, then went to the club and played basketball with my friends. In the evening I watched a funny film with my family, and we ate pizza. On Sunday my grandmother visited us and cooked maqluba for us. My little brother drew a picture for her, and she was very happy. After that I wrote my science homework, but I didn’t revise for the maths test, because I was tired. It was a really fun weekend — but short, as usual!”',
      find: ['ذَهَبْتُ إِلَى النَّادِي', 'وَطَبَخَتْ لَنَا', 'أَخِي الصَّغِيرُ رَسَمَ', 'لَمْ أُرَاجِعْ'],
    },
  },
  checkCore: 'use the past with -tu for yourself after a past time word?',
  checkDevelop: 'switch correctly between -tu · -a · -at and use لَمْ + jussive?',
});
