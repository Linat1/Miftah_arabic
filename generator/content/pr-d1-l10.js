'use strict';
/* Practice Room · D1-L10 · Listening for routine and time details — partners read, partners catch. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd1-l10',
  arShort: 'أَسْتَمِعُ وَأَلْتَقِطُ',
  grammar: 'listening traps in routine texts: a time corrected after lākin / bal; negation (lā · laysa · lam); the person changing (ya- / ta- / na-); fractions of the hour; predicting the answer type before listening; checking on the second listening',
  focus: 'Students run their own listening-and-speaking practice in pairs: one partner reads a short routine script aloud, the other catches the exact detail and proves it. They act a dialogue full of distractors, answer “catch the detail” cards, do a role-play card taking a phone message, give a one-minute talk with a planted trap, then build, fix and write a voicemail with distractors for a partner to test.',
  words1: 'Listening strategies', words2: 'Routine details to catch',
  pick: [1, 2, 4, 5, 8, 10, 14, 15, 19, 20, 21, 23],
  dialogue: {
    title: 'Catch the change!', ar: 'انْتَبِهْ لِلتَّغْيِيرِ!',
    lines: [
      ['A', 'يَبْدَأُ التَّدْرِيبُ عَادَةً فِي الرَّابِعَةِ، لٰكِنْ هٰذَا الأُسْبُوعَ يَبْدَأُ فِي الخَامِسَةِ.', 'Training usually starts at four, but this week it starts at five.'],
      ['B', 'إِذَنِ الجَوَابُ: الخَامِسَةُ، لَا الرَّابِعَةُ.', 'So the answer is five, not four.'],
      ['A', 'صَحِيحٌ. وَلَا نَتَدَرَّبُ يَوْمَ الأَرْبِعَاءِ، بَلْ يَوْمَ الخَمِيسِ.', 'Right. And we don’t train on Wednesday, but on Thursday.'],
      ['B', 'كَلِمَةُ «بَلْ» مُهِمَّةٌ! الجَوَابُ: الخَمِيسُ.', 'The word “bal” is important! The answer is Thursday.'],
      ['A', 'وَالمُدَرِّبُ لَيْسَ أُسْتَاذَ سَمِيرٍ، هِيَ أُسْتَاذَةُ رِيمٍ.', 'And the coach isn’t Mr Samir — it is Ms Reem.'],
      ['B', 'تَغَيَّرَ الشَّخْصُ أَيْضًا! أَكْتُبُ: أُسْتَاذَةُ رِيمٍ.', 'The person changed too! I write: Ms Reem.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A invents three new traps (لٰكِنْ · بَلْ · لَيْسَ); B must catch each one.',
  },
  qTitle: 'Catch the detail — the Leader reads, the Speaker answers',
  questions: [
    { q: 'أَسْتَيْقِظُ فِي السَّابِعَةِ إِلَّا الرُّبْعَ، لَا فِي السَّابِعَةِ. — مَتَى يَسْتَيْقِظُ؟', en: '“I wake up at quarter to seven, not seven.” — When?', start: 'فِي … ← السَّابِعَةِ إِلَّا الرُّبْعَ', more: 'Prove it: «لَا» تَسْتَبْعِدُ …' },
    { q: 'أُخْتِي تَذْهَبُ بِالحَافِلَةِ، أَمَّا أَنَا فَأَمْشِي. — كَيْفَ يَذْهَبُ المُتَكَلِّمُ؟', en: '“My sister goes by bus; as for me, I walk.” — How does the speaker go?', start: 'يَمْشِي …', more: 'Trap: الحَافِلَةُ لِلْأُخْتِ' },
    { q: 'الحِصَّةُ تَسْتَمِرُّ أَرْبَعِينَ دَقِيقَةً، وَالاسْتِرَاحَةُ عِشْرِينَ. — كَمْ تَسْتَمِرُّ الحِصَّةُ؟', en: '“The lesson lasts forty minutes, the break twenty.” — How long is the lesson?', start: 'أَرْبَعِينَ دَقِيقَةً …', more: 'Trap: ٢٠ = الاسْتِرَاحَةُ' },
    { q: 'لَمْ أَزُرْ جَدِّي يَوْمَ السَّبْتِ، بَلْ يَوْمَ الأَحَدِ. — مَتَى زَارَهُ؟', en: '“I didn’t visit grandpa on Saturday, but Sunday.” — When?', start: 'يَوْمَ …', more: 'Key word: … ← بَلْ' },
    { q: 'نَتَنَاوَلُ العَشَاءَ فِي الثَّامِنَةِ، لٰكِنْ أَبِي يَتَعَشَّى فِي التَّاسِعَةِ. — مَتَى يَتَعَشَّى الأَبُ؟', en: '“We have dinner at eight, but dad eats at nine.” — When does dad eat?', start: 'فِي …', more: 'Who? نَتَنَاوَلُ = we · يَتَعَشَّى = he' },
  ],
  card: {
    title: 'Role-play card — taking a phone message', ar: 'رِسَالَةٌ هَاتِفِيَّةٌ', you: 'the person taking the message (you repeat and check)', them: 'a caller from the swimming club',
    tasks: [
      { ex: 'تَغَيَّرَ مَوْعِدُ السِّبَاحَةِ يَوْمَ الإِثْنَيْنِ.', task: 'Ask for the new time.', plan: 'سُؤَالٌ ← مَا المَوْعِدُ الجَدِيدُ؟', model: 'حَسَنًا، مَا المَوْعِدُ الجَدِيدُ مِنْ فَضْلِكَ؟', modelEn: 'OK — what is the new time, please?' },
      { ex: 'لَيْسَ فِي الرَّابِعَةِ، بَلْ فِي الرَّابِعَةِ وَالنِّصْفِ.', task: 'Repeat to check.', plan: 'أَتَثَبَّتُ ← إِذَنْ فِي …، صَحِيحٌ؟', model: 'إِذَنْ فِي الرَّابِعَةِ وَالنِّصْفِ، لَا فِي الرَّابِعَةِ، صَحِيحٌ؟', modelEn: 'So at half past four, not four — right?' },
      { ex: 'نَعَمْ، وَيَسْتَمِرُّ سَاعَةً، لَا سَاعَةً وَنِصْفًا.', task: 'Note the duration + finish time.', plan: '', model: 'فَهِمْتُ: سَاعَةٌ وَاحِدَةٌ، يَعْنِي يَنْتَهِي فِي الخَامِسَةِ وَالنِّصْفِ.', modelEn: 'Understood: one hour, which means it finishes at half past five.' },
      { unexpected: true, ex: 'وَهَلْ تَعْرِفُ مَنِ المُدَرِّبُ الجَدِيدُ؟', task: 'Answer the surprise question.', plan: '', model: 'لَا أَعْرِفُ. هَلْ يُمْكِنُ أَنْ تُكَرِّرَ اسْمَهُ مِنْ فَضْلِكَ؟', modelEn: 'I don’t know. Could you repeat his name, please?' },
    ],
    girl: 'to a female caller: تَعْرِفِينَ · تُكَرِّرِي',
    notes: 'Repeating to check (idhan … ṣaḥīḥ?) is a listening strategy AND a speaking strategy.',
  },
  talk: {
    title: 'One minute: my day — with one trap', ar: 'يَوْمِي مَعَ فَخٍّ',
    text: 'Describe your day for one minute with at least six times. Hide ONE trap (a corrected time with لٰكِنْ / بَلْ). The Leader listens and writes the six times, then names the trap.',
    head: 'Speak for one minute — your partner catches the times',
    routes: {
      core: 'Six clock times; the Leader writes them.',
      develop: 'One trap with لٰكِنْ or بَلْ; the Leader names it.',
      stretch: 'Two traps, including a person change (أَخِي … / أَنَا …).',
    },
  },
  builder: [
    { en: 'The match isn’t on Friday, but on Saturday.', cols: [['لَيْسَتِ المُبَارَاةُ', 'لَيْسَ المُبَارَاةُ'], ['يَوْمَ الجُمُعَةِ،', 'يَوْمُ الجُمُعَةِ،'], ['بَلْ يَوْمَ السَّبْتِ.', 'بَلْ يَوْمُ السَّبْتِ.']], key: [0, 0, 0], why: 'مُبَارَاةٌ (f.) → لَيْسَتْ; time adverb يَوْمَ in the accusative.' },
    { en: 'I usually leave at eight, but today at nine.', cols: [['أَخْرُجُ عَادَةً', 'خَرَجْتُ عَادَةً'], ['فِي الثَّامِنَةِ،', 'فِي ثَمَانِيَةٍ،'], ['لٰكِنِ اليَوْمَ فِي التَّاسِعَةِ.', 'لِأَنَّ اليَوْمَ فِي التَّاسِعَةِ.']], key: [0, 0, 0], why: 'Usual → present; contrast with لٰكِنْ.' },
    { en: 'So the answer is Tuesday, not Monday.', cols: [['إِذَنِ الجَوَابُ', 'إِذَنِ الجَوَابَ'], ['الثُّلَاثَاءُ،', 'الثُّلَاثَاءَ،'], ['لَا الإِثْنَيْنُ.', 'لَيْسَ الإِثْنَيْنُ.']], key: [0, 0, 0], why: 'Nominal sentence: both -u; “not X” = لَا + X.' },
  ],
  errors: [
    { wrong: 'يَبْدَأُ فِي الرَّابِعَةِ، لٰكِنِ اليَوْمَ فِي الخَامِسَةِ. ← الجَوَابُ: الرَّابِعَةُ.', hint: 'Listen after لٰكِنْ.', right: 'الجَوَابُ: الخَامِسَةُ.', why: 'The information after لٰكِنْ / بَلْ replaces the first.' },
    { wrong: 'أَخِي يَنَامُ فِي العَاشِرَةِ وَأَنَا فِي التَّاسِعَةِ. ← مَتَى يَنَامُ المُتَكَلِّمُ؟ فِي العَاشِرَةِ.', hint: 'Who is the speaker?', right: 'يَنَامُ المُتَكَلِّمُ فِي التَّاسِعَةِ.', why: '“أَنَا” = the speaker; العَاشِرَةُ is the brother.' },
    { wrong: 'لَيْسَ المُدَرِّبَةُ هُنَا.', hint: 'Agreement with لَيْسَ.', right: 'لَيْسَتِ المُدَرِّبَةُ هُنَا.', why: 'Feminine subject → لَيْسَتْ.' },
  ],
  task: {
    title: 'A voicemail with traps', ar: 'رِسَالَةٌ صَوْتِيَّةٌ فِيهَا فِخَاخٌ',
    text: 'Write the script of a voicemail (about 60–80 words) to a friend about changes to your weekly plans. Include: • four times or days • TWO traps (a correction with لٰكِنْ / بَلْ, and a negation with لَا / لَيْسَ) • one duration • one other person (أَخِي / أُخْتِي …). Then write three questions. Swap: your partner listens as you read it, and answers.',
    phrases: [['عَادَةً … لٰكِنْ هٰذَا الأُسْبُوعَ …', 'usually … but this week …'], ['لَيْسَ يَوْمَ … بَلْ يَوْمَ …', 'not on … but on …'], ['يَسْتَمِرُّ … · المُدَّةُ …', 'it lasts …'], ['أَمَّا أَخِي فَ…', 'as for my brother, …']],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، أَنَا ______ .', en: 'Hi …, it’s …' },
      { ar: 'عَادَةً ______ فِي ______ ، لٰكِنْ هٰذَا الأُسْبُوعَ ______ .', en: 'Usually … at …, but this week …' },
      { ar: 'لَيْسَ يَوْمَ ______ ، بَلْ يَوْمَ ______ .', en: 'Not on …, but on …' },
      { ar: 'يَسْتَمِرُّ ______ .', en: 'It lasts …' },
    ],
    developFrames: [
      { ar: 'أَمَّا ______ فَ ______ فِي ______ .', en: 'As for …, (he / she) … at …' },
      { ar: 'أَسْئِلَةٌ: ١) مَتَى …؟ ٢) أَيُّ يَوْمٍ …؟ ٣) مَنْ …؟', en: 'Questions: 1) When …? 2) Which day …? 3) Who …?' },
    ],
    bank: ['لٰكِنْ', 'بَلْ', 'لَا · لَيْسَ · لَمْ', 'عَادَةً · هٰذَا الأُسْبُوعَ', 'وَالرُّبْعُ · إِلَّا الرُّبْعَ', 'يَسْتَمِرُّ', 'أَمَّا … فَ…', 'إِذَنْ'],
    model: {
      text: `مَرْحَبًا يَا هَادِي، أَنَا سَلِيمٌ. عِنْدِي تَغْيِيرَاتٌ لِهٰذَا الأُسْبُوعِ. عَادَةً أَتَدَرَّبُ فِي الرَّابِعَةِ، لٰكِنْ هٰذَا الأُسْبُوعَ أَتَدَرَّبُ فِي الخَامِسَةِ إِلَّا الرُّبْعَ، وَيَسْتَمِرُّ التَّدْرِيبُ سَاعَةً وَنِصْفًا. دَرْسُ الحَاسُوبِ لَيْسَ يَوْمَ الثُّلَاثَاءِ، بَلْ يَوْمَ الأَرْبِعَاءِ. أَمَّا أَخِي فَيَرْجِعُ مِنَ السَّفَرِ يَوْمَ الخَمِيسِ فِي السَّابِعَةِ مَسَاءً. هَلْ نَلْتَقِي يَوْمَ الجُمُعَةِ؟ اتَّصِلْ بِي!
أَسْئِلَةٌ: ١) مَتَى يَتَدَرَّبُ سَلِيمٌ هٰذَا الأُسْبُوعَ؟ ٢) أَيُّ يَوْمٍ دَرْسُ الحَاسُوبِ؟ ٣) مَنْ يَرْجِعُ يَوْمَ الخَمِيسِ؟`,
      en: '“Hi Hadi, it’s Salim. I have changes for this week. I usually train at four, but this week I train at quarter to five, and training lasts an hour and a half. The computer lesson isn’t on Tuesday, but on Wednesday. As for my brother, he returns from his trip on Thursday at seven pm. Shall we meet on Friday? Call me! Questions: 1) When does Salim train this week? 2) Which day is the computer lesson? 3) Who returns on Thursday?”',
      find: ['لٰكِنْ هٰذَا الأُسْبُوعَ', 'لَيْسَ يَوْمَ الثُّلَاثَاءِ، بَلْ', 'وَيَسْتَمِرُّ التَّدْرِيبُ', 'أَمَّا أَخِي فَيَرْجِعُ'],
    },
  },
  checkCore: 'catch the exact time / day, not the first one heard?',
  checkDevelop: 'hide and catch traps with لٰكِنْ · بَلْ · لَيْسَ and a person change?',
});
