'use strict';
/* Practice Room · D1-L07 · Asking about daily routine — interviews. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd1-l07',
  arShort: 'مَاذَا تَفْعَلُ؟',
  grammar: 'question words (mādhā · matā · kam marratan · kayfa · limādhā · maʿa man · ayna); addressing a boy (tafʿalu), a girl (tafʿalīna) or a group (tafʿalūna); hal for yes / no; follow-up questions to keep an interview going',
  focus: 'Students run their own speaking and writing practice asking about routines: say the question words, act a short interview, ask and answer question cards, do a role-play card interviewing a young athlete, give a one-minute interview round, then build, fix and write interview questions with a summary of the answers.',
  words1: 'Question words', words2: 'Routine questions',
  dialogue: {
    title: 'An interview with a new student', ar: 'مُقَابَلَةٌ مَعَ طَالِبَةٍ جَدِيدَةٍ',
    lines: [
      ['A', 'أَهْلًا يَا لَيْلَى! مَتَى تَسْتَيْقِظِينَ فِي أَيَّامِ الدِّرَاسَةِ؟', 'Welcome, Layla! When do you wake up on school days?'],
      ['B', 'أَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ.', 'I wake up at half past six.'],
      ['A', 'وَكَيْفَ تَذْهَبِينَ إِلَى المَدْرَسَةِ؟ وَمَعَ مَنْ؟', 'And how do you go to school? With whom?'],
      ['B', 'أَذْهَبُ بِالحَافِلَةِ مَعَ أَخِي الصَّغِيرِ.', 'I go by bus with my little brother.'],
      ['A', 'لِمَاذَا لَا تَمْشِينَ؟', 'Why don’t you walk?'],
      ['B', 'لِأَنَّ المَدْرَسَةَ بَعِيدَةٌ؛ تَبْعُدُ أَرْبَعَةَ كِيلُومِتْرَاتٍ.', 'Because the school is far; it is four kilometres away.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters — if your partner is a boy, change the verbs (تَسْتَيْقِظُ · تَذْهَبُ). Round 3: add two follow-up questions of your own.',
  },
  qTitle: 'Ask — then ask again (follow-up)',
  questions: [
    { q: 'مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ؟ (to a boy)', en: 'What do you do after school? (boy)', start: 'أَلْعَبُ / أُرَاجِعُ …', more: 'Follow-up: مَعَ مَنْ؟' },
    { q: 'مَاذَا تَفْعَلِينَ بَعْدَ المَدْرَسَةِ؟ (to a girl)', en: 'What do you do after school? (girl)', start: 'أَقْرَأُ / أُسَاعِدُ …', more: 'Follow-up: لِمَاذَا؟' },
    { q: 'مَاذَا تَفْعَلُونَ فِي الاسْتِرَاحَةِ؟ (to a group)', en: 'What do you (all) do at break?', start: 'نَلْعَبُ / نَأْكُلُ …', more: 'Follow-up: أَيْنَ؟' },
    { q: 'كَمْ مَرَّةً تَزُورُ جَدَّكَ؟', en: 'How often do you visit your grandfather?', start: 'أَزُورُهُ … ← مَرَّةً فِي الأُسْبُوعِ', more: 'Follow-up: مَاذَا تَفْعَلَانِ مَعًا؟' },
    { q: 'هَلْ تَسْتَيْقِظُ مُبَكِّرًا فِي نِهَايَةِ الأُسْبُوعِ؟', en: 'Do you wake up early at the weekend?', start: 'نَعَمْ، … / لَا، …', more: 'Follow-up: مَتَى بِالضَّبْطِ؟' },
  ],
  card: {
    title: 'Role-play card — interviewing a young swimmer', ar: 'مُقَابَلَةٌ مَعَ سَبَّاحَةٍ شَابَّةٍ', you: 'the swimmer (answer as her or him)', them: 'a reporter for the school website',
    tasks: [
      { ex: 'مَتَى تَسْتَيْقِظِينَ لِلتَّدْرِيبِ؟', task: 'Your wake-up time.', plan: 'مَتَى ← أَسْتَيْقِظُ فِي …', model: 'أَسْتَيْقِظُ فِي الخَامِسَةِ صَبَاحًا، حَتَّى فِي الشِّتَاءِ!', modelEn: 'I wake up at five in the morning, even in winter!' },
      { ex: 'كَمْ مَرَّةً تَتَدَرَّبِينَ فِي الأُسْبُوعِ؟', task: 'How often + how long.', plan: 'كَمْ مَرَّةً ← … مَرَّاتٍ، لِمُدَّةِ …', model: 'أَتَدَرَّبُ سِتَّ مَرَّاتٍ فِي الأُسْبُوعِ، لِمُدَّةِ سَاعَتَيْنِ.', modelEn: 'I train six times a week, for two hours.' },
      { ex: 'وَمَتَى تُرَاجِعِينَ دُرُوسَكِ؟', task: 'When you study.', plan: '', model: 'أُرَاجِعُ بَعْدَ العَشَاءِ، لِأَنَّنِي أَكُونُ مُتْعَبَةً بَعْدَ التَّدْرِيبِ.', modelEn: 'I revise after dinner, because I am tired after training.' },
      { unexpected: true, ex: 'وَأَنْتِ، هَلْ عِنْدَكِ سُؤَالٌ لِي؟', task: 'Ask the reporter a routine question.', plan: '', model: 'نَعَمْ! وَأَنْتَ، مَتَى تَكْتُبُ مَقَالَاتِكَ عَادَةً؟', modelEn: 'Yes! And you, when do you usually write your articles?' },
    ],
    girl: 'if the swimmer is a boy, the reporter says: تَسْتَيْقِظُ · تَتَدَرَّبُ · تُرَاجِعُ · دُرُوسَكَ',
    notes: 'The reporter must change every verb and suffix to match the speaker: -īna / -ki for a girl.',
  },
  talk: {
    title: 'One minute: the quick-fire interview', ar: 'مُقَابَلَةٌ سَرِيعَةٌ',
    text: 'In one minute, ask your partner as many DIFFERENT routine questions as you can — use at least six question words. Your partner answers in full sentences.',
    head: 'Interview for one minute — no repeats',
    routes: {
      core: 'Six questions with six different question words.',
      develop: 'Use the correct form for a boy / girl / group and add follow-ups.',
      stretch: 'Then report back: “هُوَ يَسْتَيْقِظُ … / هِيَ تَذْهَبُ …”.',
    },
  },
  builder: [
    { en: 'When do you (girl) go to bed?', cols: [['مَتَى', 'كَمْ'], ['تَذْهَبِينَ', 'تَذْهَبُ'], ['إِلَى الفِرَاشِ؟', 'إِلَى الفِرَاشُ؟']], key: [0, 0, 0], why: 'To a girl → تَذْهَبِينَ.' },
    { en: 'With whom do you (group) eat lunch?', cols: [['مَعَ مَنْ', 'مَعَ مَاذَا'], ['تَتَغَدَّوْنَ', 'تَتَغَدَّى'], ['فِي المَدْرَسَةِ؟', 'فِي المَدْرَسَةَ؟']], key: [0, 0, 0], why: 'With whom = مَعَ مَنْ; to a group → -ūna (تَتَغَدَّوْنَ).' },
    { en: 'Why do you (boy) wake up early?', cols: [['لِمَاذَا', 'لِأَنَّ'], ['تَسْتَيْقِظُ', 'يَسْتَيْقِظُ'], ['مُبَكِّرًا؟', 'مُبَكِّرٌ؟']], key: [0, 0, 0], why: 'Why = لِمَاذَا; “you” (boy) → ta-.' },
  ],
  errors: [
    { wrong: 'يَا سَارَةُ، مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ؟', hint: 'Sara is a girl.', right: 'يَا سَارَةُ، مَاذَا تَفْعَلِينَ بَعْدَ المَدْرَسَةِ؟', why: 'To a girl → -īna.' },
    { wrong: 'كَيْفَ تَذْهَبُ؟ — فِي السَّابِعَةِ.', hint: 'Does the answer match the question word?', right: 'مَتَى تَذْهَبُ؟ — فِي السَّابِعَةِ.', why: 'A time answers مَتَى; كَيْفَ asks how.' },
    { wrong: 'يَا شَبَابُ، مَتَى تَرْجِعُ إِلَى البَيْتِ؟', hint: 'You are asking a group.', right: 'يَا شَبَابُ، مَتَى تَرْجِعُونَ إِلَى البَيْتِ؟', why: 'Group → -ūna.' },
  ],
  task: {
    title: 'An interview for the school website', ar: 'مُقَابَلَةٌ لِمَوْقِعِ المَدْرَسَةِ',
    text: 'Write an interview (about 60–80 words) with a classmate about their routine: six questions with different question words, each with a full answer. Then add one sentence summarising their day in the third person (هُوَ … / هِيَ …). Use the correct form for a boy or a girl throughout.',
    phrases: [['مَتَى تَسْتَيْقِظُ / تَسْتَيْقِظِينَ؟', 'when do you wake up?'], ['مَعَ مَنْ …؟ · لِمَاذَا …؟', 'with whom …? · why …?'], ['كَمْ مَرَّةً …؟', 'how often …?'], ['بِاخْتِصَارٍ، هُوَ / هِيَ …', 'in short, he / she …']],
    coreFrames: [
      { ar: 'س: مَتَى ______ ؟ — ج: ______ .', en: 'Q: When …? — A: …' },
      { ar: 'س: كَيْفَ ______ ؟ — ج: ______ .', en: 'Q: How …? — A: …' },
      { ar: 'س: مَعَ مَنْ ______ ؟ — ج: ______ .', en: 'Q: With whom …? — A: …' },
      { ar: 'س: لِمَاذَا ______ ؟ — ج: لِأَنَّ ______ .', en: 'Q: Why …? — A: Because …' },
    ],
    developFrames: [
      { ar: 'س: كَمْ مَرَّةً ______ ؟ — ج: ______ مَرَّاتٍ فِي ______ .', en: 'Q: How often …? — A: … times a …' },
      { ar: 'بِاخْتِصَارٍ، ______ يَوْمَهُ / يَوْمَهَا ______ .', en: 'In short, … his / her day …' },
    ],
    bank: ['مَاذَا · مَتَى', 'كَيْفَ · أَيْنَ', 'لِمَاذَا · مَعَ مَنْ', 'كَمْ مَرَّةً', 'هَلْ', 'تَفْعَلُ · تَفْعَلِينَ', 'تَفْعَلُونَ', 'بِاخْتِصَارٍ'],
    model: {
      text: `س: مَتَى تَسْتَيْقِظِينَ يَا مَرْيَمُ؟ — ج: فِي السَّادِسَةِ وَالرُّبْعِ.
س: كَيْفَ تَذْهَبِينَ إِلَى المَدْرَسَةِ؟ — ج: أَمْشِي مَعَ جَارَتِي.
س: مَاذَا تَفْعَلِينَ فِي الاسْتِرَاحَةِ؟ — ج: أَقْرَأُ فِي المَكْتَبَةِ.
س: لِمَاذَا؟ — ج: لِأَنَّ المَكَانَ هَادِئٌ.
س: كَمْ مَرَّةً تَتَدَرَّبِينَ؟ — ج: ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ.
س: مَتَى تَنَامِينَ؟ — ج: فِي العَاشِرَةِ.
بِاخْتِصَارٍ، تَبْدَأُ مَرْيَمُ يَوْمَهَا مُبَكِّرًا، وَتُحِبُّ الهُدُوءَ وَالرِّيَاضَةَ.`,
      en: '“Q: When do you wake up, Maryam? — A: At quarter past six. Q: How do you go to school? — A: I walk with my neighbour. Q: What do you do at break? — A: I read in the library. Q: Why? — A: Because it is quiet. Q: How often do you train? — A: Three times a week. Q: When do you sleep? — A: At ten. In short, Maryam starts her day early and loves calm and sport.”',
      find: ['تَسْتَيْقِظِينَ', 'كَيْفَ تَذْهَبِينَ', 'كَمْ مَرَّةً', 'تَبْدَأُ مَرْيَمُ يَوْمَهَا'],
    },
  },
  checkCore: 'use six different question words that match the answers?',
  checkDevelop: 'change the verb correctly for a boy, a girl or a group?',
});
