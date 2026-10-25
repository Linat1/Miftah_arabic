'use strict';
/* Practice Room · D5-L10 · Listening — hearing the tense in sport and leisure talk. Partners read, partners catch. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd5-l10',
  arShort: 'أَسْمَعُ الزَّمَنَ',
  grammar: 'hear the TENSE: past = an ending (tadarrabtu) · present = a prefix (atadarrabu) · future = sa- / sawfa (sa-atadarrabu) · used to = kāna + present (kuntu atadarrabu); time markers (ams · ʿādatan · kulla yawmin · ghadan · al-usbūʿa al-qādim); distractors that keep the words but change the time',
  focus: 'Students run their own listening-and-speaking practice in pairs: one reads short sport and leisure monologues aloud, the other names the tense of each action and catches distractors that change the time. Then they do a role-play card as a radio sports reporter, give a one-minute talk mixing tenses, and build, fix and write a monologue with tense traps.',
  words1: 'Hearing the verb', words2: 'Time markers',
  dialogue: {
    title: 'Past, present or future?', ar: 'مَاضٍ أَمْ حَاضِرٌ أَمْ مُسْتَقْبَلٌ؟',
    lines: [
      ['A', 'تَدَرَّبْتُ أَمْسِ فِي المَسْبَحِ.', 'I trained yesterday at the pool.'],
      ['B', '«تَدَرَّبْتُ» — النِّهَايَةُ «تُ» = المَاضِي.', '“tadarrabtu” — the ending “-tu” = past.'],
      ['A', 'عَادَةً أَتَدَرَّبُ فِي الصَّبَاحِ.', 'I usually train in the morning.'],
      ['B', '«أَتَدَرَّبُ» — البِدَايَةُ «أَ» = الحَاضِرُ، وَ«عَادَةً» تُؤَكِّدُ ذٰلِكَ.', '“atadarrabu” — the prefix “a-” = present, and “usually” confirms it.'],
      ['A', 'وَغَدًا سَأَتَدَرَّبُ مَعَ الفَرِيقِ. وَكُنْتُ أَتَدَرَّبُ وَحْدِي فِي المَاضِي.', 'And tomorrow I will train with the team. And I used to train alone in the past.'],
      ['B', '«سَأَ…» = المُسْتَقْبَلُ؛ «كُنْتُ أَتَدَرَّبُ» = كَانَتْ عَادَةً فِي المَاضِي.', '“sa-” = future; “kuntu atadarrabu” = a habit in the past.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A says any verb in any tense; B names the tense in two seconds.',
  },
  qTitle: 'Catch the tense — the Leader reads, the Speaker answers',
  questions: [
    { q: 'شَارَكْتُ فِي سِبَاقٍ، وَسَأُشَارِكُ فِي سِبَاقٍ آخَرَ الشَّهْرَ القَادِمَ. — مَتَى السِّبَاقُ الثَّانِي؟', en: '“I took part in a race, and I’ll take part in another next month.” — When is the second race?', start: 'الشَّهْرَ القَادِمَ …', more: 'الدَّلِيلُ: «سَأُشَارِكُ»' },
    { q: 'كُنْتُ أَلْعَبُ التِّنِسَ، وَالآنَ أَلْعَبُ الغُولْفَ. — مَاذَا يَلْعَبُ الآنَ؟', en: '“I used to play tennis; now I play golf.” — What now?', start: 'الغُولْفَ …', more: 'Trap: التِّنِسُ = المَاضِي' },
    { q: 'شَاهَدْنَا المُبَارَاةَ أَمْسِ، وَسَنُشَاهِدُ النِّهَائِيَّ غَدًا. — مَاذَا سَيُشَاهِدُونَ غَدًا؟', en: '“We watched the match yesterday; we will watch the final tomorrow.” — Tomorrow?', start: 'النِّهَائِيَّ …', more: '…' },
    { q: 'أَخِي يَسْبَحُ كُلَّ يَوْمٍ، أَمَّا أَنَا فَسَبَحْتُ مَرَّةً وَاحِدَةً. — مَنْ يَسْبَحُ يَوْمِيًّا؟', en: '“My brother swims every day; I swam once.” — Who swims daily?', start: 'الأَخُ …', more: 'Trap: المُتَكَلِّمُ سَبَحَ مَرَّةً' },
    { q: 'لَمْ أَذْهَبْ إِلَى النَّادِي أَمْسِ، بَلْ ذَهَبْتُ إِلَى السِّينِمَا. — أَيْنَ ذَهَبَ؟', en: '“I didn’t go to the club yesterday, but to the cinema.” — Where?', start: 'إِلَى السِّينِمَا …', more: 'Key words: لَمْ · بَلْ' },
  ],
  card: {
    title: 'Role-play card — the radio sports reporter', ar: 'مُرَاسِلٌ رِيَاضِيٌّ', you: 'the reporter interviewing a player', them: 'a young player',
    tasks: [
      { ex: 'فُزْنَا أَمْسِ بِالمُبَارَاةِ!', task: 'Ask about the past (how?).', plan: 'سُؤَالٌ ← كَيْفَ … ؟ (مَاضٍ)', model: 'مَبْرُوكٌ! كَيْفَ فُزْتُمْ؟', modelEn: 'Congratulations! How did you win?' },
      { ex: 'تَدَرَّبْنَا كَثِيرًا الأُسْبُوعَ المَاضِيَ.', task: 'Ask about the present routine.', plan: 'سُؤَالٌ ← كَمْ مَرَّةً تَتَدَرَّبُونَ عَادَةً؟', model: 'وَكَمْ مَرَّةً تَتَدَرَّبُونَ عَادَةً؟', modelEn: 'And how often do you usually train?' },
      { ex: 'أَرْبَعَ مَرَّاتٍ فِي الأُسْبُوعِ.', task: 'Ask about the future.', plan: '', model: 'وَمَاذَا سَتَفْعَلُونَ قَبْلَ النِّهَائِيِّ؟', modelEn: 'And what will you do before the final?' },
      { unexpected: true, ex: 'وَأَنْتَ، هَلْ كُنْتَ تَلْعَبُ الكُرَةَ فِي صِغَرِكَ؟', task: 'Answer with “used to”.', plan: '', model: 'نَعَمْ، كُنْتُ أَلْعَبُ كُلَّ يَوْمٍ، وَلٰكِنَّنِي الآنَ أُفَضِّلُ أَنْ أَكْتُبَ عَنِ الرِّيَاضَةِ!', modelEn: 'Yes, I used to play every day, but now I prefer writing about sport!' },
    ],
    girl: 'player to a female reporter: كُنْتِ تَلْعَبِينَ · صِغَرِكِ',
    notes: 'The reporter must ask one question in each tense: past · present · future.',
  },
  talk: {
    title: 'One minute: my sport story in three tenses', ar: 'رِيَاضَتِي فِي ثَلَاثَةِ أَزْمِنَةٍ',
    text: 'Talk for one minute about a sport or hobby: what you used to do, what you did last week, what you do now, and what you will do. Your partner writes P / N / F / U (past · now · future · used to) for each verb.',
    head: 'Speak for one minute — your partner labels every verb',
    routes: {
      core: 'Two verbs in each of past, present and future.',
      develop: 'Add كُنْتُ + present (used to).',
      stretch: 'Add one trap (لَمْ … بَلْ …) and another person’s routine.',
    },
  },
  builder: [
    { en: 'I used to swim, but now I run.', cols: [['كُنْتُ أَسْبَحُ،', 'سَبَحْتُ،'], ['وَلٰكِنَّنِي الآنَ', 'وَلٰكِنَّنِي أَمْسِ'], ['أَرْكُضُ.', 'رَكَضْتُ.']], key: [0, 0, 0], why: 'Used to = كُنْتُ + present; now = present.' },
    { en: 'Next week we will take part in a race.', cols: [['الأُسْبُوعَ القَادِمَ', 'الأُسْبُوعَ المَاضِيَ'], ['سَنُشَارِكُ', 'شَارَكْنَا'], ['فِي سِبَاقٍ.', 'فِي سِبَاقٌ.']], key: [0, 0, 0], why: 'Next → future (sa-).' },
    { en: 'She trained yesterday.', cols: [['تَدَرَّبَتْ', 'تَتَدَرَّبُ'], ['أَمْسِ', 'غَدًا'], ['فِي النَّادِي.', 'فِي النَّادِي غَدًا.']], key: [0, 0, 0], why: 'Past ending -at + أَمْسِ.' },
  ],
  errors: [
    { wrong: '«كُنْتُ أَلْعَبُ التِّنِسَ» ← يَلْعَبُ التِّنِسَ الآنَ.', hint: 'كُنْتُ + present = ?', right: 'كَانَ يَلْعَبُ التِّنِسَ فِي المَاضِي.', why: 'كُنْتُ + present = used to (past habit).' },
    { wrong: '«سَأُسَافِرُ» ← سَافَرَ.', hint: 'The prefix sa- means …?', right: 'سَيُسَافِرُ (فِي المُسْتَقْبَلِ).', why: 'sa- = future.' },
    { wrong: '«أَمْسِ لَعِبْتُ، وَغَدًا سَأَلْعَبُ» ← سَيَلْعَبُ أَمْسِ.', hint: 'Match the time word to its verb.', right: 'لَعِبَ أَمْسِ، وَسَيَلْعَبُ غَدًا.', why: 'Each time marker goes with its own verb.' },
  ],
  task: {
    title: 'A monologue with tense traps', ar: 'حَدِيثٌ فِيهِ فِخَاخُ الأَزْمِنَةِ',
    text: 'Write a monologue (about 60–80 words) about sport or hobbies for a listening test. Include: • at least two verbs in each tense (past · present · future) • one “used to” (كُنْتُ + present) • one trap with لَمْ … بَلْ … • another person’s routine. Then write three questions and read it to your partner.',
    phrases: [['كُنْتُ أَلْعَبُ … فِي الطُّفُولَةِ', 'I used to play … as a child'], ['أَمْسِ … · الأُسْبُوعَ المَاضِيَ …', 'yesterday … · last week …'], ['عَادَةً … · كُلَّ يَوْمٍ …', 'usually … · every day …'], ['غَدًا سَأَرْكُضُ … · الأُسْبُوعَ القَادِمَ …', 'tomorrow I will run … · next week …']],
    coreFrames: [
      { ar: 'فِي الطُّفُولَةِ كُنْتُ ______ .', en: 'As a child I used to …' },
      { ar: 'الأُسْبُوعَ المَاضِيَ ______ .', en: 'Last week I …' },
      { ar: 'عَادَةً ______ ، أَمَّا أَخِي / أُخْتِي فَ______ .', en: 'Usually I …; as for my brother / sister, …' },
      { ar: 'غَدًا سَوْفَ ______ .', en: 'Tomorrow I will …' },
    ],
    developFrames: [
      { ar: 'لَمْ ______ أَمْسِ، بَلْ ______ .', en: 'I didn’t … yesterday, but …' },
      { ar: 'أَسْئِلَةٌ: ١) مَاذَا كَانَ يَفْعَلُ؟ ٢) مَاذَا يَفْعَلُ الآنَ؟ ٣) مَاذَا سَيَفْعَلُ؟', en: 'Questions: 1) What did he use to do? 2) Now? 3) Will?' },
    ],
    bank: ['أَمْسِ · الأُسْبُوعَ المَاضِيَ', 'عَادَةً · كُلَّ يَوْمٍ', 'غَدًا · الأُسْبُوعَ القَادِمَ', 'كُنْتُ أَتَدَرَّبُ', 'تَدَرَّبْتُ · أَتَدَرَّبُ', 'سَأَتَدَرَّبُ', 'شَارَكَ فِي', 'لَمْ … بَلْ …'],
    model: {
      text: `فِي الطُّفُولَةِ كُنْتُ أَلْعَبُ كُرَةَ القَدَمِ فِي الشَّارِعِ. الأُسْبُوعَ المَاضِيَ شَارَكْتُ فِي أَوَّلِ سِبَاقِ جَرْيٍ، وَفُزْتُ بِالمَرْكَزِ الثَّالِثِ! عَادَةً أَرْكُضُ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ، أَمَّا أُخْتِي فَتَسْبَحُ كُلَّ يَوْمٍ. لَمْ أَتَدَرَّبْ أَمْسِ، بَلِ اسْتَرَحْتُ. غَدًا سَأَرْكُضُ عَشَرَةَ كِيلُومِتْرَاتٍ مَعَ النَّادِي.
أَسْئِلَةٌ: ١) مَاذَا كَانَ يَلْعَبُ فِي الطُّفُولَةِ؟ ٢) مَنْ تَسْبَحُ كُلَّ يَوْمٍ؟ ٣) مَاذَا فَعَلَ أَمْسِ؟`,
      en: '“As a child I used to play football in the street. Last week I took part in my first running race, and came third! I usually run three times a week; as for my sister, she swims every day. I didn’t train yesterday, but rested. Tomorrow I will run ten kilometres with the club. Questions: 1) What did he use to play as a child? 2) Who swims every day? 3) What did he do yesterday?”',
      find: ['كُنْتُ أَلْعَبُ', 'شَارَكْتُ فِي', 'لَمْ أَتَدَرَّبْ', 'غَدًا سَأَرْكُضُ'],
    },
  },
  checkCore: 'name the tense of each verb from its ending or prefix?',
  checkDevelop: 'catch “used to” and distractors that change the time?',
});
