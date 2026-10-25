'use strict';
/* Practice Room · D3-L07 · Arabic proverbs and values — work ethic and success. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd3-l07',
  arShort: 'الأَمْثَالُ وَالقِيَمُ',
  grammar: 'explaining a proverb: yaʿnī hādhā al-mathalu anna …; applying it: yanṭabiqu hādhā al-mathalu ʿalā …; advice with the imperative (ijtahid · iṣbir) and the prohibition lā + jussive (lā tuʾajjil · lā tastaslim); values nouns (al-muthābara · al-amāna · al-inḍibāṭ)',
  focus: 'Students run their own speaking and writing practice with six Arabic work proverbs: say each proverb and its meaning, act a short dialogue applying one, answer question cards, do a role-play card advising a friend before exams, give a one-minute talk on a proverb, then build, fix and write a short reflection on a proverb and a real situation.',
  words1: 'Six proverbs', words2: 'Work values',
  dialogue: {
    title: 'Which proverb fits?', ar: 'أَيُّ مَثَلٍ يُنَاسِبُ؟',
    lines: [
      ['A', 'أَخِي دَرَسَ كُلَّ يَوْمٍ لِمُدَّةِ سَنَةٍ، وَأَخِيرًا نَجَحَ فِي امْتِحَانِ القِيَادَةِ!', 'My brother studied every day for a year, and finally passed his driving test!'],
      ['B', 'هٰذَا مِثْلُ المَثَلِ: «مَنْ جَدَّ وَجَدَ».', 'That’s like the proverb: “Whoever strives, succeeds.”'],
      ['A', 'مَاذَا يَعْنِي بِالضَّبْطِ؟', 'What does it mean exactly?'],
      ['B', 'يَعْنِي هٰذَا المَثَلُ أَنَّ الإِنْسَانَ المُجْتَهِدَ يَصِلُ إِلَى هَدَفِهِ.', 'This proverb means that a hard-working person reaches their goal.'],
      ['A', 'وَأَنَا أُؤَجِّلُ وَاجِبَاتِي دَائِمًا…', 'And I always put off my homework…'],
      ['B', 'إِذَنْ: «لَا تُؤَجِّلْ عَمَلَ اليَوْمِ إِلَى الغَدِ»! ابْدَأِ الآنَ.', 'Then: “Don’t put off today’s work until tomorrow”! Start now.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A tells a REAL situation; B chooses the right proverb and explains it.',
  },
  qTitle: 'Proverb cards — explain it, apply it',
  questions: [
    { q: 'مَاذَا يَعْنِي «الصَّبْرُ مِفْتَاحُ الفَرَجِ»؟', en: 'What does “Patience is the key to relief” mean?', start: 'يَعْنِي هٰذَا المَثَلُ أَنَّ …', more: '… مَثَلًا …' },
    { q: 'مَتَى نَقُولُ «الاتِّحَادُ قُوَّةٌ»؟', en: 'When do we say “Unity is strength”?', start: 'نَقُولُهُ عِنْدَمَا …', more: '… مِثْلَ فَرِيقِ …' },
    { q: 'هَلْ يَنْطَبِقُ «العِلْمُ نُورٌ» عَلَى حَيَاتِكَ؟', en: 'Does “Knowledge is light” apply to your life?', start: 'نَعَمْ، يَنْطَبِقُ عَلَيَّ لِأَنَّ …', more: '…' },
    { q: 'أَيُّ قِيمَةٍ أَهَمُّ فِي العَمَلِ: الأَمَانَةُ أَمِ الانْضِبَاطُ؟', en: 'Which value matters more at work: honesty or discipline?', start: 'فِي رَأْيِي … أَهَمُّ …', more: '… لِأَنَّ …' },
    { q: 'انْصَحْ صَدِيقًا يُرِيدُ أَنْ يَسْتَسْلِمَ.', en: 'Advise a friend who wants to give up.', start: 'لَا تَسْتَسْلِمْ! …', more: '… تَذَكَّرْ: «مَنْ جَدَّ وَجَدَ»' },
  ],
  card: {
    title: 'Role-play card — a friend is stressed before exams', ar: 'صَدِيقٌ قَلِقٌ قَبْلَ الامْتِحَانَاتِ', you: 'a supportive friend', them: 'a stressed friend',
    tasks: [
      { ex: 'عِنْدِي خَمْسَةُ امْتِحَانَاتٍ وَلَمْ أَبْدَأِ المُرَاجَعَةَ!', task: 'Advice (imperative).', plan: 'نَصِيحَةٌ ← ابْدَأْ … ، وَلَا تُؤَجِّلْ …', model: 'ابْدَأِ اليَوْمَ، وَلَا تُؤَجِّلْ عَمَلَ اليَوْمِ إِلَى الغَدِ!', modelEn: 'Start today, and don’t put off today’s work until tomorrow!' },
      { ex: 'وَلٰكِنَّنِي مُتْعَبٌ جِدًّا.', task: 'A proverb + meaning.', plan: 'مَثَلٌ ← «الصَّبْرُ مِفْتَاحُ الفَرَجِ» يَعْنِي …', model: 'أَفْهَمُ. «الصَّبْرُ مِفْتَاحُ الفَرَجِ»: يَعْنِي أَنَّ التَّعَبَ سَيَنْتَهِي قَرِيبًا.', modelEn: 'I understand. “Patience is the key to relief” — it means the tiredness will end soon.' },
      { ex: 'كَيْفَ أُنَظِّمُ وَقْتِي؟', task: 'A practical plan.', plan: '', model: 'رَاجِعْ سَاعَتَيْنِ كُلَّ يَوْمٍ، وَخُذِ اسْتِرَاحَةً قَصِيرَةً بَعْدَ كُلِّ سَاعَةٍ.', modelEn: 'Revise two hours every day, and take a short break after every hour.' },
      { unexpected: true, ex: 'هَلْ نُرَاجِعُ مَعًا؟', task: 'Answer with a proverb.', plan: '', model: 'فِكْرَةٌ مُمْتَازَةٌ! «الاتِّحَادُ قُوَّةٌ» — نَلْتَقِي غَدًا فِي المَكْتَبَةِ.', modelEn: 'Excellent idea! “Unity is strength” — let’s meet tomorrow in the library.' },
    ],
    girl: 'to a girl friend: ابْدَئِي · لَا تُؤَجِّلِي · رَاجِعِي · خُذِي',
    notes: 'Imperative for advice; lā + jussive for “don’t” (lā tuʾajjil).',
  },
  talk: {
    title: 'One minute: my favourite proverb', ar: 'مَثَلِي المُفَضَّلُ',
    text: 'Choose one proverb. Talk for one minute: say it, explain what it means, apply it to a real situation, and give advice.',
    routes: {
      core: 'Say the proverb + يَعْنِي هٰذَا المَثَلُ أَنَّ …',
      develop: 'Add a real example (يَنْطَبِقُ عَلَى …).',
      stretch: 'Add advice with an imperative and a prohibition, and a value noun.',
    },
  },
  builder: [
    { en: 'This proverb means that patience is important.', cols: [['يَعْنِي هٰذَا المَثَلُ', 'يَعْنِي هٰذِهِ المَثَلُ'], ['أَنَّ الصَّبْرَ', 'أَنَّ الصَّبْرُ'], ['مُهِمٌّ.', 'مُهِمًّا.']], key: [0, 0, 0], why: 'مَثَلٌ (m.) → هٰذَا; أَنَّ + -a; predicate -un.' },
    { en: 'Don’t give up!', cols: [['لَا', 'لَنْ'], ['تَسْتَسْلِمْ', 'تَسْتَسْلِمُ'], ['أَبَدًا!', 'أَبَدٌ!']], key: [0, 0, 0], why: 'Prohibition = لَا + jussive (sukūn).' },
    { en: 'This proverb applies to my brother.', cols: [['يَنْطَبِقُ', 'تَنْطَبِقُ'], ['هٰذَا المَثَلُ', 'هٰذَا المَثَلَ'], ['عَلَى أَخِي.', 'مَعَ أَخِي.']], key: [0, 0, 0], why: 'يَنْطَبِقُ … عَلَى …' },
  ],
  errors: [
    { wrong: 'لَا تُؤَجِّلُ عَمَلَكَ.', hint: 'Prohibition ending.', right: 'لَا تُؤَجِّلْ عَمَلَكَ.', why: 'لَا (don’t) + jussive: تُؤَجِّلْ.' },
    { wrong: 'يَعْنِي المَثَلُ أَنَّ العِلْمُ نُورٌ.', hint: 'After أَنَّ …', right: 'يَعْنِي المَثَلُ أَنَّ العِلْمَ نُورٌ.', why: 'أَنَّ + noun in -a.' },
    { wrong: 'يَنْطَبِقُ المَثَلُ فِي أُخْتِي.', hint: 'Which preposition?', right: 'يَنْطَبِقُ المَثَلُ عَلَى أُخْتِي.', why: 'يَنْطَبِقُ عَلَى …' },
  ],
  task: {
    title: 'A proverb in real life', ar: 'مَثَلٌ فِي الحَيَاةِ',
    text: 'Write a reflection (about 60–80 words) for the school magazine’s “Values” page. Include: • one proverb and what it means (يَعْنِي هٰذَا المَثَلُ أَنَّ …) • a real situation it applies to (in the past) • one value (المُثَابَرَةُ / الأَمَانَةُ / الانْضِبَاطُ) and why it matters at work • advice with an imperative and a prohibition.',
    phrases: [['يَعْنِي هٰذَا المَثَلُ أَنَّ …', 'this proverb means that …'], ['يَنْطَبِقُ هٰذَا المَثَلُ عَلَى …', 'this proverb applies to …'], ['… مُهِمَّةٌ فِي العَمَلِ لِأَنَّ …', '… matters at work because …'], ['اجْتَهِدْ … وَلَا تَسْتَسْلِمْ', 'work hard … and don’t give up']],
    coreFrames: [
      { ar: 'مَثَلِي المُفَضَّلُ: « ______ ».', en: 'My favourite proverb: “…”' },
      { ar: 'يَعْنِي هٰذَا المَثَلُ أَنَّ ______ .', en: 'This proverb means that …' },
      { ar: 'يَنْطَبِقُ عَلَى ______ ، لِأَنَّ ______ .', en: 'It applies to …, because …' },
      { ar: 'نَصِيحَتِي: ______ ، وَلَا ______ .', en: 'My advice: …, and don’t …' },
    ],
    developFrames: [
      { ar: '______ مُهِمَّةٌ فِي العَمَلِ، لِأَنَّ ______ .', en: '… is important at work, because …' },
      { ar: 'فِي العَامِ المَاضِي ______ ، وَفِي النِّهَايَةِ ______ .', en: 'Last year …, and in the end …' },
    ],
    bank: ['مَنْ جَدَّ وَجَدَ', 'الصَّبْرُ مِفْتَاحُ الفَرَجِ', 'الاتِّحَادُ قُوَّةٌ', 'العِلْمُ نُورٌ', 'المُثَابَرَةُ · الأَمَانَةُ', 'الانْضِبَاطُ', 'اجْتَهِدْ · اصْبِرْ', 'لَا تُؤَجِّلْ · لَا تَسْتَسْلِمْ'],
    model: {
      text: 'مَثَلِي المُفَضَّلُ: «مَنْ جَدَّ وَجَدَ». يَعْنِي هٰذَا المَثَلُ أَنَّ الإِنْسَانَ الَّذِي يَعْمَلُ بِجِدٍّ يَصِلُ إِلَى هَدَفِهِ. يَنْطَبِقُ هٰذَا المَثَلُ عَلَى أُمِّي؛ فِي العَامِ المَاضِي دَرَسَتِ التَّمْرِيضَ فِي المَسَاءِ بَعْدَ عَمَلِهَا، وَفِي النِّهَايَةِ حَصَلَتْ عَلَى وَظِيفَةٍ جَدِيدَةٍ. المُثَابَرَةُ مُهِمَّةٌ فِي العَمَلِ، لِأَنَّ النَّجَاحَ لَا يَأْتِي بِسُرْعَةٍ. نَصِيحَتِي لِكُلِّ طَالِبٍ: اجْتَهِدْ وَنَظِّمْ وَقْتَكَ، وَلَا تُؤَجِّلْ عَمَلَ اليَوْمِ إِلَى الغَدِ، وَلَا تَسْتَسْلِمْ أَبَدًا.',
      en: '“My favourite proverb is “Whoever strives, succeeds.” This proverb means that a person who works hard reaches their goal. It applies to my mother: last year she studied nursing in the evenings after work, and in the end she got a new job. Perseverance matters at work, because success doesn’t come quickly. My advice to every student: work hard and organise your time, don’t put off today’s work until tomorrow, and never give up.”',
      find: ['يَعْنِي هٰذَا المَثَلُ أَنَّ', 'يَنْطَبِقُ هٰذَا المَثَلُ عَلَى', 'المُثَابَرَةُ مُهِمَّةٌ', 'وَلَا تَسْتَسْلِمْ'],
    },
  },
  checkCore: 'explain one proverb with يَعْنِي … أَنَّ + noun in -a?',
  checkDevelop: 'apply it to a real situation and advise with لَا + jussive?',
});
