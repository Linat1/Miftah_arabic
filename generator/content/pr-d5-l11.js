'use strict';
/* Practice Room · D5-L11 · Consolidation — past-tense mastery and speaking preparation. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd5-l11',
  arShort: 'إِتْقَانُ المَاضِي',
  grammar: 'answer a past question in the past (kayfa badaʾta? — badaʾtu …); fix the stem before the suffix (zāra → zurtu · mashā → mashaytu · nāma → nimtu); extend every answer with a reason and an example; buy time or repair in Arabic (daʿnī ufakkiru · ʿafwan, aqṣidu … · fī al-ḥaqīqa …)',
  focus: 'Students run their own consolidation of the whole D5 unit: say the speaking-strategy phrases, act a dialogue with a hesitation and a repair, answer past-tense examiner cards, do a role-play card as examiner and candidate, give a one-minute extended past answer under pressure, then build, fix and write a polished answer to an exam-style question.',
  words1: 'Accuracy and fluency', words2: 'Buying time and repairing',
  dialogue: {
    title: 'Let me think …', ar: 'دَعْنِي أُفَكِّرُ …',
    lines: [
      ['A', 'كَيْفَ بَدَأْتَ هِوَايَتَكَ؟', 'How did you start your hobby?'],
      ['B', 'دَعْنِي أُفَكِّرُ… بَدَأْتُ الرَّسْمَ عِنْدَمَا كُنْتُ فِي السَّابِعَةِ.', 'Let me think… I started drawing when I was seven.'],
      ['A', 'وَمَنْ شَجَّعَكَ؟', 'And who encouraged you?'],
      ['B', 'شَجَّعَتْنِي أُخْتِي، لِأَنَّهَا… عَفْوًا، أَقْصِدُ: لِأَنَّهُ — لَا، أُخْتِي! لِأَنَّهَا فَنَّانَةٌ.', 'My sister encouraged me, because she… sorry, I mean: because he — no, my sister! Because she is an artist.'],
      ['A', 'هَلْ زُرْتَ مَعْرِضًا؟', 'Have you visited an exhibition?'],
      ['B', 'نَعَمْ، زُرْتُ مَعْرِضًا فِي لَنْدَنَ. فِي الحَقِيقَةِ، كَانَ أَجْمَلَ يَوْمٍ فِي السَّنَةِ.', 'Yes, I visited an exhibition in London. In fact, it was the best day of the year.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: answer about YOUR hobby — use دَعْنِي أُفَكِّرُ once and عَفْوًا، أَقْصِدُ once.',
  },
  qTitle: 'Examiner cards — past question, past answer, extended',
  questions: [
    { q: 'مَاذَا فَعَلْتَ فِي العُطْلَةِ المَاضِيَةِ؟', en: 'What did you do last holiday?', start: 'فِي العُطْلَةِ المَاضِيَةِ زُرْتُ / سَافَرْتُ …', more: '… لِأَنَّ … · عَلَى سَبِيلِ المِثَالِ …' },
    { q: 'كَيْفَ بَدَأْتَ رِيَاضَتَكَ المُفَضَّلَةَ؟', en: 'How did you start your favourite sport?', start: 'بَدَأْتُ … عِنْدَمَا كُنْتُ …', more: '… ثُمَّ …' },
    { q: 'أَيْنَ ذَهَبْتُمْ فِي آخِرِ رِحْلَةٍ مَدْرَسِيَّةٍ؟', en: 'Where did you all go on the last school trip?', start: 'ذَهَبْنَا إِلَى …', more: '… وَرَأَيْنَا …' },
    { q: 'مَا الهِوَايَةُ الَّتِي كُنْتَ تُمَارِسُهَا فِي الصِّغَرِ؟', en: 'Which hobby did you use to do as a child?', start: 'كُنْتُ أُمَارِسُ …', more: '… أَمَّا الآنَ فَ…' },
    { q: 'صِفْ يَوْمًا رِيَاضِيًّا لَا تَنْسَاهُ.', en: 'Describe a sports day you won’t forget.', start: 'كَانَ الجَوُّ … وَفَجْأَةً …', more: '… مَا زِلْتُ أَتَذَكَّرُ …' },
  ],
  card: {
    title: 'Role-play card — the D5 speaking test (practice)', ar: 'اخْتِبَارُ المُحَادَثَةِ', you: 'the candidate', them: 'the examiner',
    tasks: [
      { ex: 'مَاذَا فَعَلْتَ فِي نِهَايَةِ الأُسْبُوعِ المَاضِيَةِ؟', task: 'Two past actions + reason.', plan: 'المَاضِي ← … ثُمَّ … لِأَنَّ …', model: 'لَعِبْتُ مُبَارَاةً مَعَ فَرِيقِي، ثُمَّ زُرْتُ جَدِّي لِأَنَّهُ كَانَ مَرِيضًا.', modelEn: 'I played a match with my team, then visited my grandfather because he was ill.' },
      { ex: 'وَمَاذَا فَعَلَ أَصْدِقَاؤُكَ؟', task: 'They (-ū).', plan: 'هُمْ ← ذَهَبُوا … وَشَاهَدُوا …', model: 'ذَهَبُوا إِلَى السِّينِمَا، وَشَاهَدُوا فِيلْمًا جَدِيدًا.', modelEn: 'They went to the cinema and watched a new film.' },
      { ex: 'هَلْ كَانَتْ نِهَايَةُ أُسْبُوعٍ جَيِّدَةً؟', task: 'Judgement + example.', plan: '', model: 'فِي الحَقِيقَةِ نَعَمْ؛ عَلَى سَبِيلِ المِثَالِ، سَجَّلْتُ هَدَفَيْنِ!', modelEn: 'In fact yes — for example, I scored two goals!' },
      { unexpected: true, ex: 'وَمَاذَا سَتَفْعَلُ نِهَايَةَ الأُسْبُوعِ القَادِمَةَ؟', task: 'Switch to the future.', plan: '', model: 'دَعْنِي أُفَكِّرُ… سَأُرَاجِعُ لِلِامْتِحَانَاتِ، وَسَأَلْعَبُ مُبَارَاةً أُخْرَى يَوْمَ الأَحَدِ.', modelEn: 'Let me think… I will revise for exams, and play another match on Sunday.' },
    ],
    girl: 'examiner to a girl: فَعَلْتِ · أَصْدِقَاؤُكِ · سَتَفْعَلِينَ',
    notes: 'Past question → past answer; then switch tense when the question does.',
  },
  talk: {
    title: 'One minute under pressure: a past answer', ar: 'دَقِيقَةٌ تَحْتَ الضَّغْطِ',
    text: 'The Leader asks a past question from the cards with no warning. Answer for one minute in the past, with a reason and an example. The Coach counts stem errors and rewards one smooth repair.',
    routes: {
      core: 'Five past verbs, no stem errors.',
      develop: 'Add one irregular verb (زُرْتُ · مَشَيْتُ · نِمْتُ) and a reason.',
      stretch: 'Add كَانَ + -an, a used-to and a smooth repair (عَفْوًا، أَقْصِدُ …).',
    },
  },
  builder: [
    { en: 'I slept early because I was tired.', cols: [['نِمْتُ', 'نَامْتُ'], ['مُبَكِّرًا', 'مُبَكِّرٌ'], ['لِأَنَّنِي كُنْتُ مُتْعَبًا.', 'لِأَنَّنِي كُنْتُ مُتْعَبٌ.']], key: [0, 0, 0], why: 'نَامَ → نِمْتُ; كُنْتُ + -an.' },
    { en: 'We walked to the stadium.', cols: [['مَشَيْنَا', 'مَشَانَا'], ['إِلَى', 'فِي'], ['المَلْعَبِ.', 'المَلْعَبُ.']], key: [0, 0, 0], why: 'مَشَى → مَشَيْنَا.' },
    { en: 'Sorry, I mean she won the match.', cols: [['عَفْوًا، أَقْصِدُ', 'شُكْرًا، أَقْصِدُ'], ['أَنَّهَا فَازَتْ', 'أَنَّهَا فَازَ'], ['بِالمُبَارَاةِ.', 'بِالمُبَارَاةُ.']], key: [0, 0, 0], why: 'She → فَازَتْ; repair phrase = عَفْوًا، أَقْصِدُ.' },
  ],
  errors: [
    { wrong: 'كَيْفَ بَدَأْتَ؟ — أَبْدَأُ فِي السَّابِعَةِ.', hint: 'Past question → ?', right: 'بَدَأْتُ فِي السَّابِعَةِ.', why: 'Answer a past question in the past.' },
    { wrong: 'زَارْتُ عَمِّي أَمْسِ.', hint: 'Fix the stem first.', right: 'زُرْتُ عَمِّي أَمْسِ.', why: 'زَارَ → زُرْتُ.' },
    { wrong: 'لَعِبْتُ.', hint: 'Too short — extend!', right: 'لَعِبْتُ التِّنِسَ مَعَ أَبِي، لِأَنَّ الجَوَّ كَانَ جَمِيلًا.', why: 'Every answer: verb + detail + reason.' },
  ],
  task: {
    title: 'A polished exam answer', ar: 'إِجَابَةٌ مُتْقَنَةٌ',
    text: 'Exam question: «صِفْ أَفْضَلَ يَوْمٍ فِي حَيَاتِكَ.» Write a polished answer (about 60–80 words). Include: • the scene (كَانَ + -an) • five past verbs, two of them irregular • a “we” action and a “they” action • a reason and an example • a reflection (مَا زِلْتُ أَتَذَكَّرُ …). Then check every stem with your buddy.',
    phrases: [['كَانَ ذٰلِكَ اليَوْمُ …', 'that day was …'], ['زُرْنَا … · نِمْنَا … · قَالُوا …', 'we visited … · we slept … · they said …'], ['عَلَى سَبِيلِ المِثَالِ … · فِي الحَقِيقَةِ …', 'for example … · in fact …'], ['مَا زِلْتُ أَتَذَكَّرُ …', 'I still remember …']],
    coreFrames: [
      { ar: 'أَفْضَلُ يَوْمٍ فِي حَيَاتِي كَانَ ______ .', en: 'The best day of my life was …' },
      { ar: 'كَانَ الجَوُّ ______ ، وَكُنَّا فِي ______ .', en: 'The weather was …, and we were in …' },
      { ar: 'أَوَّلًا ______ ، ثُمَّ ______ .', en: 'First …, then …' },
      { ar: 'مَا زِلْتُ أَتَذَكَّرُ ______ ، لِأَنَّ ______ .', en: 'I still remember …, because …' },
    ],
    developFrames: [
      { ar: 'فِي الحَقِيقَةِ ______ ؛ عَلَى سَبِيلِ المِثَالِ ______ .', en: 'In fact …; for example …' },
      { ar: 'قَالَ / قَالَتْ / قَالُوا إِنَّ ______ .', en: 'He / she / they said that …' },
    ],
    bank: ['زُرْتُ · زُرْنَا', 'نِمْتُ · نِمْنَا', 'مَشَيْتُ · مَشَيْنَا', 'قُلْتُ · قَالُوا', 'كَانَ الجَوُّ جَمِيلًا', 'عَلَى سَبِيلِ المِثَالِ', 'فِي الحَقِيقَةِ', 'مَا زِلْتُ أَتَذَكَّرُ'],
    model: {
      text: 'أَفْضَلُ يَوْمٍ فِي حَيَاتِي كَانَ يَوْمَ فَازَ فَرِيقُ مَدْرَسَتِنَا بِالكَأْسِ. كَانَ الجَوُّ بَارِدًا، وَكُنَّا فِي مَلْعَبِ المَدِينَةِ. أَوَّلًا مَشَيْنَا مَعَ المُدَرِّبِ إِلَى المَلْعَبِ، ثُمَّ لَعِبْنَا مُبَارَاةً صَعْبَةً جِدًّا. فِي الحَقِيقَةِ كُنَّا خَائِفِينَ؛ عَلَى سَبِيلِ المِثَالِ، خَسِرْنَا الشَّوْطَ الأَوَّلَ. وَلٰكِنْ فِي النِّهَايَةِ سَجَّلْتُ هَدَفَ الفَوْزِ! قَالَ أَصْدِقَائِي إِنَّنِي بَطَلُ اليَوْمِ. فِي تِلْكَ اللَّيْلَةِ لَمْ أَنَمْ مِنَ الفَرَحِ. مَا زِلْتُ أَتَذَكَّرُ ذٰلِكَ اليَوْمَ، لِأَنَّهُ عَلَّمَنِي أَلَّا أَسْتَسْلِمَ.',
      en: '“The best day of my life was the day our school team won the cup. The weather was cold, and we were at the city stadium. First we walked with the coach to the stadium, then played a very hard match. In fact we were scared; for example, we lost the first half. But in the end I scored the winning goal! My friends said I was the hero of the day. That night I couldn’t sleep from happiness. I still remember that day, because it taught me never to give up.”',
      find: ['كَانَ الجَوُّ بَارِدًا', 'مَشَيْنَا', 'قَالَ أَصْدِقَائِي إِنَّنِي', 'لَمْ أَنَمْ'],
    },
  },
  checkCore: 'answer past questions in the past with correct stems?',
  checkDevelop: 'extend with a reason and an example, and repair smoothly?',
});
