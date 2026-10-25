'use strict';
/* Guided Practice Rooms · TB-L08 · Hobbies, Sport and Free Time. New tasks. Teacher-made. */
const XP = require('./xp-b-l08');

const base = { topic: 'B', n: 8, short: 'Hobbies, Sport and Free Time', arShort: 'الهِوَايَاتُ وَوَقْتُ الفَرَاغِ', fileTitle: 'Hobbies_Sport_and_Free_Time', title: 'Hobbies, Sport and Free Time', icon: 'FaFutbol', grammar: 'present tense of activity verbs; verbal nouns (al-qirāʾa, as-sibāḥa, ar-rasm); frequency (marratan fī al-usbūʿ); astaṭīʿu an + verb in -a; reasons' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (joining a climbing club, choosing an activity week), a topic conversation with A-R-E-T, and a one-minute talk about their favourite hobby.',
  words: XP.speak.words,
  words1: { title: 'What I do in my free time', ar: 'مَاذَا أَفْعَلُ فِي وَقْتِ الفَرَاغِ' },
  words2: { title: 'How often, where, and why', ar: 'كَمْ مَرَّةً وَأَيْنَ وَلِمَاذَا' },
  ladder: {
    q: 'مَا هِوَايَتُكَ المُفَضَّلَةُ؟', qEn: 'What is your favourite hobby?',
    rungs: [
      { ar: 'هِوَايَتِي المُفَضَّلَةُ هِيَ الرَّسْمُ.', en: 'My favourite hobby is drawing.' },
      { ar: 'هِوَايَتِي المُفَضَّلَةُ هِيَ الرَّسْمُ، لِأَنَّهُ يُرِيحُنِي بَعْدَ الدِّرَاسَةِ.', en: '… because it relaxes me after studying.' },
      { ar: '… أَرْسُمُ مَرَّتَيْنِ فِي الأُسْبُوعِ فِي غُرْفَتِي، وَأَحْيَانًا فِي الحَدِيقَةِ.', en: '… I draw twice a week in my room, and sometimes in the park.' },
      { ar: '… وَفِي الصَّيْفِ المَاضِي شَارَكْتُ فِي مُسَابَقَةٍ، وَفِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَدْرُسَ الفَنَّ.', en: '… last summer I took part in a competition, and in the future I want to study art.' },
    ],
  },
  ladderQs: [
    { q: 'كَمْ مَرَّةً تُمَارِسُ الرِّيَاضَةَ؟', l1: 'أُمَارِسُ الرِّيَاضَةَ …', l2: '… لِأَنَّ …', l3: '… مَعَ … / فِي …' },
    { q: 'هَلْ تَسْتَطِيعُ أَنْ تَسْبَحَ؟', l1: 'نَعَمْ، أَسْتَطِيعُ … / لَا، …', l2: '… لِأَنَّ …', l3: '… تَعَلَّمْتُ … / سَأَتَعَلَّمُ …' },
    { q: 'مَاذَا تَقْرَأُ فِي وَقْتِ الفَرَاغِ؟', l1: 'أَقْرَأُ …', l2: '… لِأَنَّهَا …', l3: '… آخِرُ كِتَابٍ قَرَأْتُهُ …' },
    { q: 'هَلْ أَنْتَ فِي فَرِيقٍ؟', l1: 'نَعَمْ، أَنَا فِي فَرِيقِ … / لَا، …', l2: '… لِأَنَّ …', l3: '… وَفِي المُبَارَاةِ القَادِمَةِ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a climbing centre reception', title: 'Role play 1 — Joining a climbing club', ar: 'نَادِي التَّسَلُّقِ', you: 'a teenager who wants to join', them: 'the club coach',
      tasks: [
        { ex: 'أَهْلًا! هَلْ مَارَسْتَ التَّسَلُّقَ مِنْ قَبْلُ؟', task: 'Say if you have climbed before.', plan: 'هَلْ ← نَعَمْ / لَا، …', model: 'لَا، هٰذِهِ أَوَّلُ مَرَّةٍ.', modelEn: 'No, this is the first time.' },
        { ex: 'أَيَّ رِيَاضَةٍ تُمَارِسُ؟', task: 'Say what sport you do.', plan: 'أَيَّ ← أُمَارِسُ …', model: 'أُمَارِسُ السِّبَاحَةَ وَكُرَةَ السَّلَّةِ.', modelEn: 'I do swimming and basketball.' },
        { ex: 'كَمْ مَرَّةً فِي الأُسْبُوعِ تَسْتَطِيعُ أَنْ تَأْتِيَ؟', task: 'Say how often you can come.', plan: 'كَمْ مَرَّةً ← أَسْتَطِيعُ أَنْ آتِيَ …', model: 'أَسْتَطِيعُ أَنْ آتِيَ مَرَّتَيْنِ فِي الأُسْبُوعِ.', modelEn: 'I can come twice a week.' },
        { ex: 'التَّدْرِيبُ يَوْمَ الثُّلَاثَاءِ وَيَوْمَ السَّبْتِ.', task: 'Ask what time training starts.', plan: 'مَتَى ← فِي أَيِّ سَاعَةٍ يَبْدَأُ …؟', model: 'فِي أَيِّ سَاعَةٍ يَبْدَأُ التَّدْرِيبُ؟', modelEn: 'What time does training start?' },
        { unexpected: true, ex: 'لِمَاذَا تُرِيدُ أَنْ تَتَسَلَّقَ؟', task: 'Answer the unexpected question.', plan: 'لِمَاذَا ← لِأَنَّ …', model: 'لِأَنَّ التَّسَلُّقَ مُمْتِعٌ، وَأُرِيدُ أَنْ أَكُونَ أَقْوَى.', modelEn: 'Because climbing is fun, and I want to be stronger.' },
      ],
      girl: 'مَارَسْتِ · تُمَارِسِينَ · تَسْتَطِيعِينَ · تَأْتِي · تُرِيدِينَ · تَتَسَلَّقِي',
      notes: 'Language: verbal nouns (at-tasalluq, as-sibāḥa) · marratayni fī al-usbūʿ · astaṭīʿu an āti̇ya (verb in -a) · fī ayyi sāʿatin …?',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'an activity-week meeting', title: 'Role play 2 — Choosing your activity week', ar: 'أُسْبُوعُ الأَنْشِطَةِ', you: 'a student choosing an activity', them: 'the activities coordinator',
      tasks: [
        { ex: 'أَيَّ نَشَاطٍ تَخْتَارُ: الطَّبْخَ أَمِ الإِبْحَارَ أَمِ المَسْرَحَ؟', task: 'Choose and give two reasons.', model: 'أَخْتَارُ الإِبْحَارَ، لِأَنِّي أُحِبُّ البَحْرَ، وَلِأَنَّهُ تَجْرِبَةٌ جَدِيدَةٌ لِي.', modelEn: 'I choose sailing, because I love the sea and it’s a new experience for me.' },
        { ex: 'هَلْ عِنْدَكَ خِبْرَةٌ فِي الرِّيَاضَاتِ المَائِيَّةِ؟', task: 'Describe past experience.', model: 'نَعَمْ، فِي العُطْلَةِ المَاضِيَةِ جَرَّبْتُ التَّجْدِيفَ مَعَ أَبِي، وَكَانَ صَعْبًا لٰكِنَّهُ رَائِعٌ.', modelEn: 'Yes, last holiday I tried rowing with my dad — hard but amazing.' },
        { ex: 'الإِبْحَارُ أَغْلَى مِنَ الأَنْشِطَةِ الأُخْرَى.', task: 'Compare and respond.', model: 'صَحِيحٌ أَنَّهُ أَغْلَى، لٰكِنَّهُ أَكْثَرُ فَائِدَةً، لِأَنِّي سَأَتَعَلَّمُ مَهَارَةً لِلْحَيَاةِ.', modelEn: 'It’s more expensive, but more useful — I’ll learn a skill for life.' },
        { ex: 'سَيَكُونُ النَّشَاطُ فِي شَهْرِ يُونْيُو.', task: 'ASK two practical questions.', model: 'مَاذَا يَجِبُ أَنْ آخُذَ مَعِي؟ وَهَلْ سَنَنَامُ هُنَاكَ؟', modelEn: 'What should I take with me? And will we sleep there?' },
        { unexpected: true, ex: 'لَوْ كَانَ الطَّقْسُ سَيِّئًا جِدًّا، مَاذَا تَفْعَلُ بَدَلًا مِنْهُ؟', task: 'Answer the unexpected question (law … la-).', model: 'لَوْ كَانَ الطَّقْسُ سَيِّئًا، لَاخْتَرْتُ المَسْرَحَ، لِأَنِّي أُحِبُّ التَّمْثِيلَ أَيْضًا.', modelEn: 'If the weather were very bad, I would choose drama, because I like acting too.' },
      ],
      girl: 'تَخْتَارِينَ · عِنْدَكِ · تَفْعَلِينَ',
      notes: 'Language: two reasons (li-annī … wa-li-annahu) · past experience (jarrabtu) · comparatives (aghlā, akthar fāʾida) · ṣaḥīḥun anna … lākinna · yajibu an ākhudha · law … la-.',
    },
  ],
  convAr: 'هِوَايَاتِي',
  conv: [
    { route: 'Core', q: 'مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ؟', en: 'What do you do after school?', push: 'كَمْ مَرَّةً؟' },
    { route: 'Core', q: 'مَا رِيَاضَتُكَ المُفَضَّلَةُ؟', en: 'What is your favourite sport?', push: 'لِمَاذَا؟' },
    { route: 'Develop', q: 'كَيْفَ قَضَيْتَ وَقْتَ فَرَاغِكَ فِي نِهَايَةِ الأُسْبُوعِ المَاضِي؟', en: 'How did you spend your free time last weekend?', push: 'مَعَ مَنْ؟' },
    { route: 'Develop', q: 'مَا الهِوَايَةُ الجَدِيدَةُ الَّتِي تُرِيدُ أَنْ تُجَرِّبَهَا؟', en: 'Which new hobby would you like to try?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'هَلْ يَقْضِي الشَّبَابُ وَقْتًا طَوِيلًا عَلَى الأَلْعَابِ الإِلِكْتْرُونِيَّةِ؟', en: 'Do young people spend too long on video games?', push: 'مَا الحَلُّ؟' },
    { route: 'Stretch', q: 'هَلْ يَجِبُ أَنْ تَكُونَ الرِّيَاضَةُ إِجْبَارِيَّةً فِي المَدَارِسِ؟', en: 'Should sport be compulsory in schools?', push: 'لِمَاذَا؟' },
  ],
  convModels: [
    { q: 'كَيْفَ قَضَيْتَ وَقْتَ فَرَاغِكَ فِي نِهَايَةِ الأُسْبُوعِ المَاضِي؟', model: 'لَعِبْتُ مُبَارَاةَ كُرَةِ قَدَمٍ مَعَ فَرِيقِي يَوْمَ السَّبْتِ، وَفُزْنَا بِثَلَاثَةِ أَهْدَافٍ؛ وَيَوْمَ الأَحَدِ قَرَأْتُ رِوَايَةً، لِأَنِّي كُنْتُ مُتْعَبًا، وَالأُسْبُوعَ القَادِمَ سَنَلْعَبُ النِّهَائِيَّ.', modelEn: 'A: a football match on Saturday — we won by three goals · E: a novel on Sunday · R: I was tired · T: next week we play the final.' },
    { q: 'مَا الهِوَايَةُ الجَدِيدَةُ الَّتِي تُرِيدُ أَنْ تُجَرِّبَهَا؟', model: 'أُرِيدُ أَنْ أُجَرِّبَ التَّصْوِيرَ، لِأَنِّي أُحِبُّ الطَّبِيعَةَ؛ عَمِّي مُصَوِّرٌ، وَأَعْطَانِي كَامِيرَا قَدِيمَةً، وَفِي العُطْلَةِ سَأُصَوِّرُ الطُّيُورَ فِي الحَدِيقَةِ.', modelEn: 'A: photography · R: I love nature · E: my uncle is a photographer and gave me an old camera · T: in the holidays I’ll photograph birds.' },
    { q: 'هَلْ يَقْضِي الشَّبَابُ وَقْتًا طَوِيلًا عَلَى الأَلْعَابِ الإِلِكْتْرُونِيَّةِ؟', model: 'صَحِيحٌ أَنَّ الأَلْعَابَ مُمْتِعَةٌ، وَتُعَلِّمُنَا التَّفْكِيرَ السَّرِيعَ، غَيْرَ أَنَّ بَعْضَ أَصْدِقَائِي يَلْعَبُونَ خَمْسَ سَاعَاتٍ يَوْمِيًّا؛ فِي رَأْيِي يَجِبُ أَنْ نُحَدِّدَ سَاعَةً وَاحِدَةً فَقَطْ.', modelEn: 'Concession: games are fun and teach quick thinking, but some friends play five hours a day · opinion: we should limit it to one hour.' },
  ],
  talk: {
    title: 'One minute: my favourite hobby', ar: 'هِوَايَتِي المُفَضَّلَةُ',
    text: 'Talk for one minute about your favourite hobby: what, where, when and how often, who with, why you like it — and a special moment with this hobby.',
    routes: {
      core: '30 seconds: the hobby (a verbal noun), where, how often, and one reason.',
      develop: '60 seconds: add who with, a special moment (past), and أَسْتَطِيعُ أَنْ …',
      stretch: '90 seconds: compare two hobbies, give an opinion and a future goal.',
    },
    phrases: [['هِوَايَتِي المُفَضَّلَةُ هِيَ …', 'my favourite hobby is …'], ['أُمَارِسُهَا مَرَّتَيْنِ فِي الأُسْبُوعِ', 'I do it twice a week'], ['أَسْتَطِيعُ أَنْ …', 'I can …'], ['فِي المُسْتَقْبَلِ أُرِيدُ أَنْ …', 'in the future I want to …']],
  },
  checkCore: 'named hobbies with verbal nouns (القِرَاءَةُ · السِّبَاحَةُ) and said how often',
  checkDevelop: 'used أَسْتَطِيعُ أَنْ + a verb in -a and gave reasons',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (an email about a sports competition), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Leisure centre membership', ar: 'الاشْتِرَاكُ فِي المَرْكَزِ التَّرْفِيهِيِّ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'العُمُرُ', en: 'Age', tip: 'خَمْسَ عَشْرَةَ سَنَةً' },
      { core: true, ar: 'النَّشَاطُ المَطْلُوبُ', en: 'Activity wanted', tip: 'A verbal noun: السِّبَاحَةُ' },
      { core: true, ar: 'المُسْتَوَى', en: 'Level', tip: 'مُبْتَدِئٌ · مُتَوَسِّطٌ · مُتَقَدِّمٌ' },
      { core: true, ar: 'الأَيَّامُ المُنَاسِبَةُ', en: 'Days that suit you', tip: 'السَّبْتُ وَالأَرْبِعَاءُ' },
      { ar: 'جُمْلَةٌ: هَدَفُكَ مِنَ النَّشَاطِ', en: 'ONE sentence: your goal', tip: 'أُرِيدُ أَنْ أَسْتَطِيعَ أَنْ …' },
    ],
  },
  Q2: {
    title: 'Question 2: my first competition', ar: 'أَوَّلُ مُسَابَقَةٍ لِي',
    task: 'You took part in a competition (sport, chess, art, music …). Write an email in Arabic to your friend of about 80–90 words. You must include: • what the competition was, where and when • how you prepared for it and how often you practised • what happened on the day and the result • what you will do next with this hobby.',
    phrases: [['شَارَكْتُ فِي مُسَابَقَةِ …', 'I took part in a … competition'], ['تَدَرَّبْتُ … مَرَّاتٍ فِي الأُسْبُوعِ', 'I trained … times a week'], ['فِي يَوْمِ المُسَابَقَةِ …', 'on the day of the competition …'], ['فِي المُسْتَقْبَلِ أُرِيدُ أَنْ …', 'in the future I want to …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ مُسَابَقَةٍ شَارَكْتَ فِيهَا (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about a competition you took part in (80–90 words).'],
      ['1', 'مَا المُسَابَقَةُ؟ وَأَيْنَ وَمَتَى كَانَتْ؟', 'What, where and when'],
      ['2', 'كَيْفَ اسْتَعْدَدْتَ؟ وَكَمْ مَرَّةً تَدَرَّبْتَ؟', 'How you prepared; how often'],
      ['3', 'مَاذَا حَدَثَ فِي ذٰلِكَ اليَوْمِ؟ وَمَا النَّتِيجَةُ؟', 'What happened and the result'],
      ['4', 'مَاذَا سَتَفْعَلُ بَعْدَ ذٰلِكَ مَعَ هٰذِهِ الهِوَايَةِ؟', 'Your next step with this hobby'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'مَا · أَيْنَ · مَتَى كَانَتْ → PAST + place + date', 'كَيْفَ اسْتَعْدَدْتَ · كَمْ مَرَّةً → PAST + frequency', 'مَاذَا حَدَثَ · النَّتِيجَةُ → PAST, in order', 'سَتَفْعَلُ → FUTURE (sa-) or أُرِيدُ أَنْ'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'شَارَكْتُ فِي مُسَابَقَةِ ______ فِي ______ يَوْمَ ______ .', en: '1 · I took part in a … competition in … on …' },
      { ar: 'تَدَرَّبْتُ ______ مَرَّاتٍ فِي الأُسْبُوعِ مَعَ ______ .', en: '2 · I trained … times a week with …' },
      { ar: 'فِي يَوْمِ المُسَابَقَةِ ______ ، وَفُزْتُ بِالمَرْكَزِ ______ .', en: '3 · On the day …, and I won …' },
      { ar: 'فِي المُسْتَقْبَلِ أُرِيدُ أَنْ ______ .', en: '4 · In the future I want to …' },
    ],
    developFrames: [
      { ar: 'نَظَّمَتْ مَدْرَسَتُنَا مُسَابَقَةً ______ ، وَشَارَكَ فِيهَا ______ طَالِبًا.', en: '1 · Our school organised a … competition, with … students.' },
      { ar: 'كُنْتُ أَتَدَرَّبُ كُلَّ ______ ، لِأَنَّ ______ .', en: '2 · I used to train every …, because …' },
      { ar: 'فِي البِدَايَةِ ______ ، لٰكِنْ فِي النِّهَايَةِ ______ .', en: '3 · At first …, but in the end …' },
      { ar: 'السَّنَةَ القَادِمَةَ سَأُشَارِكُ فِي ______ ، وَأَتَمَنَّى أَنْ ______ .', en: '4 · Next year I will enter …, and I hope …' },
    ],
    bank: ['شَارَكْتُ فِي', 'مُسَابَقَةٌ', 'تَدَرَّبْتُ', 'مَرَّةً · مَرَّتَيْنِ', 'فُزْتُ · خَسِرْتُ', 'المَرْكَزُ الأَوَّلُ · الثَّانِي', 'مُتَوَتِّرٌ · فَخُورٌ', 'فَرِيقٌ'],
    model: {
      text: `مَرْحَبًا يَا سَامِي،
كَيْفَ حَالُكَ؟ يَوْمَ السَّبْتِ المَاضِي شَارَكْتُ فِي أَوَّلِ مُسَابَقَةِ شِطْرَنْجٍ فِي حَيَاتِي، فِي مَكْتَبَةِ المَدِينَةِ، وَشَارَكَ فِيهَا ثَلَاثُونَ لَاعِبًا مِنْ مَدَارِسَ مُخْتَلِفَةٍ. قَبْلَ المُسَابَقَةِ كُنْتُ أَتَدَرَّبُ مَعَ جَدِّي ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ، وَأَلْعَبُ عَلَى الإِنْتَرْنِتْ كُلَّ مَسَاءٍ. فِي البِدَايَةِ كُنْتُ مُتَوَتِّرًا جِدًّا، فَخَسِرْتُ أَوَّلَ مُبَارَاةٍ، لٰكِنْ بَعْدَ ذٰلِكَ فُزْتُ بِأَرْبَعِ مُبَارَيَاتٍ، وَحَصَلْتُ عَلَى المَرْكَزِ الثَّالِثِ! كَانَ جَدِّي فَخُورًا بِي كَثِيرًا. السَّنَةَ القَادِمَةَ سَأُشَارِكُ فِي مُسَابَقَةِ المَدَارِسِ الوَطَنِيَّةِ، وَأُرِيدُ أَنْ أُؤَسِّسَ نَادِيًا لِلشِّطْرَنْجِ فِي مَدْرَسَتِنَا. هَلْ تُحِبُّ أَنْ تَنْضَمَّ إِلَيْهِ؟
إِلَى اللِّقَاءِ،
أَنَسٌ`,
      en: '“Hi Sami, how are you? Last Saturday I took part in my first ever chess competition, at the city library, with thirty players from different schools. Before the competition I trained with my grandfather three times a week and played online every evening. At first I was very nervous, so I lost my first game, but then I won four games and came third! My grandfather was very proud of me. Next year I will enter the national schools’ competition, and I want to start a chess club at our school. Would you like to join? See you, Anas.”',
      find: ['شَارَكْتُ فِي أَوَّلِ مُسَابَقَةِ', 'ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ', 'فِي البِدَايَةِ … لٰكِنْ', 'وَأُرِيدُ أَنْ أُؤَسِّسَ'],
    },
  },
  upgrade: [
    { ar: 'أَلْعَبُ التِّنِسَ.', en: 'I play tennis.' },
    { ar: 'أَلْعَبُ التِّنِسَ مَعَ أَخِي فِي النَّادِي مَرَّتَيْنِ فِي الأُسْبُوعِ.', en: '… with my brother at the club twice a week.' },
    { ar: 'أَلْعَبُ التِّنِسَ مَعَ أَخِي فِي النَّادِي، لِأَنَّهُ يُحَسِّنُ سُرْعَتِي وَتَرْكِيزِي.', en: '… because it improves my speed and concentration.' },
    { ar: '… وَفِي رَأْيِي هُوَ أَصْعَبُ مِنْ كُرَةِ القَدَمِ، لٰكِنَّهُ أَمْتَعُ!', en: '… in my opinion it is harder than football — but more fun!' },
  ],
  builder: [
    { en: 'I can swim very well.', cols: [['أَسْتَطِيعُ', 'تَسْتَطِيعُ'], ['أَنْ أَسْبَحَ', 'أَنْ أَسْبَحُ'], ['جَيِّدًا جِدًّا', 'جَيِّدٌ جِدًّا']], key: [0, 0, 0], why: 'I can = أَسْتَطِيعُ أَنْ + a verb in -a.' },
    { en: 'Reading is my favourite hobby.', cols: [['القِرَاءَةُ', 'أَقْرَأُ'], ['هِوَايَتِي', 'هِوَايَتُهُ'], ['المُفَضَّلَةُ', 'المُفَضَّلُ']], key: [0, 0, 0], why: 'Use the verbal noun القِرَاءَةُ; هِوَايَة is feminine → المُفَضَّلَةُ.' },
    { en: 'We train three times a week.', cols: [['نَتَدَرَّبُ', 'تَدَرَّبْنَا'], ['ثَلَاثَ مَرَّاتٍ', 'ثَلَاثَةَ مَرَّاتٍ'], ['فِي الأُسْبُوعِ', 'فِي الأُسْبُوعِ المَاضِي']], key: [0, 0, 0], why: 'Habit → present; مَرَّة is feminine → ثَلَاثَ مَرَّاتٍ.' },
  ],
  errors: [
    { wrong: 'هِوَايَتِي هِيَ أَسْبَحُ.', hint: 'A hobby is a noun.', right: 'هِوَايَتِي هِيَ السِّبَاحَةُ.', why: 'Use the verbal noun: السِّبَاحَةُ.' },
    { wrong: 'أَسْتَطِيعُ أَلْعَبُ الشِّطْرَنْجَ.', hint: 'Something is missing after أَسْتَطِيعُ.', right: 'أَسْتَطِيعُ أَنْ أَلْعَبَ الشِّطْرَنْجَ.', why: 'أَسْتَطِيعُ أَنْ + a verb in -a.' },
    { wrong: 'أَتَدَرَّبُ أَرْبَعَةَ مَرَّاتٍ.', hint: 'Is مَرَّة masculine or feminine?', right: 'أَتَدَرَّبُ أَرْبَعَ مَرَّاتٍ.', why: 'مَرَّة is feminine → أَرْبَعَ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: how I started my hobby', ar: 'كَيْفَ بَدَأَتْ هِوَايَتِي',
    task: 'Full Q3 title: “My free time”. Today write ONLY the past paragraph: how you started your favourite hobby — when, who introduced you to it, your first experience, and how you felt.',
    formula: [
      { ar: 'بَدَأْتُ السِّبَاحَةَ عِنْدَمَا كُنْتُ فِي السَّادِسَةِ.', en: 'T · I started swimming when I was six.' },
      { ar: 'أَخَذَنِي أَبِي إِلَى المَسْبَحِ كُلَّ يَوْمِ سَبْتٍ.', en: 'D · My dad took me to the pool every Saturday.' },
      { ar: 'بَدَأْتُ لِأَنِّي كُنْتُ أَخَافُ مِنَ المَاءِ.', en: 'R · I started because I was afraid of water.' },
      { ar: 'الآنَ أَشْعُرُ بِالحُرِّيَّةِ فِي المَاءِ.', en: 'F · Now I feel free in the water.' },
    ],
    phrases: [['بَدَأْتُ … عِنْدَمَا كُنْتُ …', 'I started … when I was …'], ['عَلَّمَنِي … كَيْفَ …', '… taught me how to …'], ['فِي أَوَّلِ مَرَّةٍ …', 'the first time …'], ['كُنْتُ أَخَافُ مِنْ …', 'I used to be afraid of …'], ['الآنَ أَسْتَطِيعُ أَنْ …', 'now I can …']],
    model: {
      text: 'بَدَأْتُ هِوَايَةَ الطَّبْخِ عِنْدَمَا كُنْتُ فِي العَاشِرَةِ مِنْ عُمْرِي. فِي ذٰلِكَ الوَقْتِ كَانَتْ جَدَّتِي تَسْكُنُ مَعَنَا، وَكَانَتْ تَطْبُخُ كُلَّ يَوْمٍ أَطْبَاقًا سُورِيَّةً لَذِيذَةً. فِي أَوَّلِ مَرَّةٍ طَلَبَتْ مِنِّي أَنْ أُسَاعِدَهَا فِي الكُبَّةِ، فَأَحْرَقْتُ نِصْفَهَا، وَضَحِكْنَا كَثِيرًا! لٰكِنَّهَا عَلَّمَتْنِي بِصَبْرٍ، لِأَنَّهَا كَانَتْ تَقُولُ إِنَّ الطَّبْخَ حُبٌّ. الآنَ أَسْتَطِيعُ أَنْ أَطْبُخَ وَجَبَاتٍ كَامِلَةً لِعَائِلَتِي، وَأَشْعُرُ بِالسَّعَادَةِ عِنْدَمَا يَأْكُلُونَهَا. وَفِي المُسْتَقْبَلِ سَأَكْتُبُ كِتَابًا فِيهِ وَصَفَاتُ جَدَّتِي.',
      en: 'T: I started cooking when I was ten · D: at that time my grandmother lived with us and cooked delicious Syrian dishes every day; the first time she asked me to help with kibbeh, I burnt half of it and we laughed a lot · R: but she taught me patiently, because she used to say cooking is love · F: now I can cook full meals for my family and I feel happy when they eat them; in the future I will write a book of my grandmother’s recipes.',
      find: ['بَدَأْتُ هِوَايَةَ الطَّبْخِ', 'فِي أَوَّلِ مَرَّةٍ', 'لِأَنَّهَا كَانَتْ تَقُولُ', 'الآنَ أَسْتَطِيعُ أَنْ'],
    },
  },
};

module.exports = { speak, write };
