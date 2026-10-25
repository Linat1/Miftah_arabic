'use strict';
/* Practice Room · D2-L09 · Topic conversation — people, relationships and personal style. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd2-l09',
  arShort: 'مُحَادَثَةٌ مَوْضُوعِيَّةٌ',
  grammar: 'answer directly, then build: reason (li-anna) → example (mathalan) → comparison (baynamā / akthar min); ask a follow-up (wa-anta? · limādhā?); repair: ʿafwan, mā maʿnā …? · hal tuqṣidu …? · aʿid min faḍlik; tenses: present habits, past example, future plan',
  focus: 'Students run their own exam-style topic conversation about people, relationships and style: practise the build-up of an answer, act a model conversation, take turns with the examiner cards, do a role-play card, keep talking for one minute with follow-up questions, then build, fix and write the script of their best conversation.',
  words1: 'Relationships and linking', words2: 'Qualities and style',
  pick: [0, 1, 3, 5, 9, 10, 13, 14, 22, 26, 30, 34],
  dialogue: {
    title: 'A topic conversation — with a repair', ar: 'مُحَادَثَةٌ مَعَ تَصْحِيحٍ',
    lines: [
      ['A', 'صِفْ لِي صَدِيقًا مُقَرَّبًا.', 'Describe a close friend to me.'],
      ['B', 'صَدِيقِي زِيَادٌ صَادِقٌ وَمَرِحٌ، لِأَنَّهُ يَقُولُ الحَقِيقَةَ دَائِمًا وَيُضْحِكُنِي.', 'My friend Ziad is honest and fun, because he always tells the truth and makes me laugh.'],
      ['A', 'هَلْ تَخْتَلِفَانِ أَحْيَانًا؟', 'Do you two sometimes disagree?'],
      ['B', 'عَفْوًا، مَا مَعْنَى «تَخْتَلِفَانِ»؟', 'Sorry, what does “takhtalifāni” mean?'],
      ['A', 'يَعْنِي: لَيْسَ عِنْدَكُمَا نَفْسُ الرَّأْيِ.', 'It means: you don’t have the same opinion.'],
      ['B', 'آهِ، نَعَمْ! مَثَلًا أَمْسِ اخْتَلَفْنَا عَلَى فِيلْمٍ، وَلٰكِنَّنَا تَصَالَحْنَا. وَأَنْتَ، هَلْ تَخْتَلِفُ مَعَ أَصْدِقَائِكَ؟', 'Ah, yes! For example, yesterday we disagreed about a film, but we made up. And you — do you disagree with your friends?'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: answer about YOUR friend — use the repair phrase once and end with a question back.',
  },
  qTitle: 'Examiner cards — answer, build, ask back',
  questions: [
    { q: 'صِفْ شَخْصًا مُهِمًّا فِي حَيَاتِكَ.', en: 'Describe an important person in your life.', start: '… هُوَ / هِيَ … لِأَنَّ …', more: 'مَثَلًا … · وَأَنْتَ؟' },
    { q: 'كَيْفَ عَلَاقَتُكَ بِإِخْوَتِكَ؟', en: 'How is your relationship with your siblings?', start: 'أَتَفَاهَمُ مَعَ … ، بَيْنَمَا …', more: '… أَمْسِ / الأُسْبُوعَ المَاضِيَ …' },
    { q: 'مَا أُسْلُوبُكَ فِي المَلَابِسِ؟', en: 'What is your clothing style?', start: 'أُفَضِّلُ المَلَابِسَ … لِأَنَّهَا …', more: '… أَكْثَرُ رَاحَةً مِنْ …' },
    { q: 'مَا الصِّفَاتُ المُهِمَّةُ فِي الصَّدِيقِ؟', en: 'What qualities matter in a friend?', start: 'فِي رَأْيِي الصِّدْقُ وَ …', more: '… عَلَى الرَّغْمِ مِنْ أَنَّ …' },
    { q: 'مَاذَا سَتَلْبَسُ فِي حَفْلَةِ العِيدِ القَادِمَةِ؟', en: 'What will you wear at the next Eid party?', start: 'سَأَلْبَسُ …', more: '… لِأَنَّ …' },
  ],
  card: {
    title: 'Role-play card — a new student asks about your class', ar: 'طَالِبٌ جَدِيدٌ يَسْأَلُ', you: 'yourself', them: 'a new student',
    tasks: [
      { ex: 'كَيْفَ الطُّلَّابُ فِي صَفِّكَ؟', task: 'Describe the class.', plan: 'الصَّفُّ ← الطُّلَّابُ … وَ … لِأَنَّهُمْ …', model: 'الطُّلَّابُ وَدُودُونَ وَمُتَعَاوِنُونَ، لِأَنَّهُمْ يُسَاعِدُونَ الجُدُدَ.', modelEn: 'The students are friendly and helpful, because they help new people.' },
      { ex: 'وَمَنْ أَقْرَبُ صَدِيقٍ لَكَ؟', task: 'One person + example.', plan: 'صَدِيقِي ← … ، مَثَلًا …', model: 'أَحْمَدُ. مَثَلًا، سَاعَدَنِي فِي الرِّيَاضِيَّاتِ قَبْلَ الامْتِحَانِ.', modelEn: 'Ahmad. For example, he helped me with maths before the exam.' },
      { ex: 'هَلِ الزِّيُّ المَدْرَسِيُّ مُرِيحٌ؟', task: 'Opinion + contrast.', plan: '', model: 'القَمِيصُ مُرِيحٌ، وَلٰكِنَّ السُّتْرَةَ ضَيِّقَةٌ قَلِيلًا.', modelEn: 'The shirt is comfortable, but the blazer is a bit tight.' },
      { unexpected: true, ex: 'مَا مَعْنَى «مُتَعَاوِنٌ»؟', task: 'Explain a word.', plan: '', model: 'يَعْنِي شَخْصًا يُسَاعِدُ الآخَرِينَ وَيَعْمَلُ مَعَهُمْ فِي فَرِيقٍ.', modelEn: 'It means a person who helps others and works with them in a team.' },
    ],
    girl: 'new student to a girl: صَفِّكِ · لَكِ',
    notes: 'Answer → build → ask back. Explaining a word in Arabic is a key exam skill.',
  },
  talk: {
    title: 'One minute: keep the conversation going', ar: 'لَا تَتَوَقَّفْ!',
    text: 'The Leader asks one question from the cards. The Speaker answers for one minute, then asks the Leader a follow-up question. Swap.',
    head: 'Talk for one minute — then ask back',
    routes: {
      core: 'Answer + reason + one question back (وَأَنْتَ؟).',
      develop: 'Add an example in the past and a comparison.',
      stretch: 'Add a concession and a future plan, and use one repair phrase naturally.',
    },
  },
  builder: [
    { en: 'For example, last week my sister supported me.', cols: [['مَثَلًا،', 'لِذٰلِكَ،'], ['الأُسْبُوعَ المَاضِيَ', 'الأُسْبُوعُ المَاضِي'], ['دَعَمَتْنِي أُخْتِي.', 'تَدْعَمُنِي أُخْتِي.']], key: [0, 0, 0], why: 'Past example → past verb (دَعَمَتْنِي).' },
    { en: 'Sorry, do you mean “honest”?', cols: [['عَفْوًا،', 'شُكْرًا،'], ['هَلْ تَقْصِدُ', 'هَلْ يَقْصِدُ'], ['«صَادِقٌ»؟', '«صَادِقَةٌ»؟']], key: [0, 0, 0], why: 'Repair to “you” → تَقْصِدُ.' },
    { en: 'I get on with my cousin more than my brother.', cols: [['أَتَفَاهَمُ مَعَ ابْنِ عَمِّي', 'أَتَفَاهَمُ ابْنَ عَمِّي'], ['أَكْثَرَ', 'أَكْثَرُ'], ['مِنْ أَخِي.', 'مِنْ أَخِيَ.']], key: [0, 0, 0], why: 'مَعَ is needed; أَكْثَرَ as an adverb (-a).' },
  ],
  errors: [
    { wrong: 'صَدِيقِي صَادِقٌ.', hint: 'Too short for the exam.', right: 'صَدِيقِي صَادِقٌ، لِأَنَّهُ يَقُولُ الحَقِيقَةَ دَائِمًا؛ مَثَلًا …', why: 'Build: reason + example.' },
    { wrong: 'أَمْسِ نَتَصَالَحُ.', hint: 'Time word.', right: 'أَمْسِ تَصَالَحْنَا.', why: 'أَمْسِ → past.' },
    { wrong: 'لَا أَفْهَمُ…', hint: 'Repair politely.', right: 'عَفْوًا، أَعِدِ السُّؤَالَ مِنْ فَضْلِكَ.', why: 'Ask for repetition in Arabic, then answer.' },
  ],
  task: {
    title: 'The script of my best conversation', ar: 'نَصُّ أَفْضَلِ مُحَادَثَةٍ', 
    text: 'Write the script (about 60–80 words) of your best answers from today: answer two examiner questions about a person, a relationship or style. For each answer: • a direct answer • a reason • an example (past) • a comparison or contrast. End with one question back to the examiner.',
    phrases: [['… لِأَنَّ …', '… because …'], ['مَثَلًا، أَمْسِ / الأُسْبُوعَ المَاضِيَ …', 'for example, yesterday / last week …'], ['… بَيْنَمَا … · أَكْثَرُ مِنْ …', '… whereas … · more than …'], ['وَأَنْتَ / وَأَنْتِ، …؟', 'and you, …?']],
    coreFrames: [
      { ar: 'س١: ______ ؟', en: 'Q1: …?' },
      { ar: 'ج: ______ ، لِأَنَّ ______ .', en: 'A: …, because …' },
      { ar: 'مَثَلًا، ______ .', en: 'For example, …' },
      { ar: 'وَأَنْتَ / وَأَنْتِ، ______ ؟', en: 'And you, …?' },
    ],
    developFrames: [
      { ar: '______ ، بَيْنَمَا ______ .', en: '…, whereas …' },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .', en: 'Although …, …' },
    ],
    bank: ['أَتَفَاهَمُ مَعَ', 'أَخْتَلِفُ مَعَ', 'يَدْعَمُنِي · تَدْعَمُنِي', 'لِأَنَّ · مَثَلًا', 'بَيْنَمَا', 'أَكْثَرُ … مِنْ', 'عَفْوًا، هَلْ تَقْصِدُ …؟', 'وَأَنْتَ؟'],
    model: {
      text: `س١: صِفْ شَخْصًا مُهِمًّا فِي حَيَاتِكَ.
ج: أَهَمُّ شَخْصٍ فِي حَيَاتِي خَالَتِي، لِأَنَّهَا صَبُورَةٌ وَتَدْعَمُنِي دَائِمًا. مَثَلًا، الشَّهْرَ المَاضِيَ سَاعَدَتْنِي فِي مَشْرُوعِ العُلُومِ لِمُدَّةِ أُسْبُوعٍ.
س٢: مَا أُسْلُوبُكَ فِي المَلَابِسِ؟
ج: أُفَضِّلُ المَلَابِسَ البَسِيطَةَ وَالمُرِيحَةَ، بَيْنَمَا يُحِبُّ أَخِي المَوْضَةَ وَالأَلْوَانَ. مَثَلًا، فِي العِيدِ لَبِسْتُ قَمِيصًا أَبْيَضَ فَقَطْ. عَلَى الرَّغْمِ مِنْ أَنَّ أُسْلُوبِي بَسِيطٌ، فَإِنَّهُ أَنِيقٌ. وَأَنْتَ، مَا أُسْلُوبُكَ؟`,
      en: '“Q1: Describe an important person in your life. A: The most important person in my life is my aunt, because she is patient and always supports me. For example, last month she helped me with my science project for a week. Q2: What is your clothing style? A: I prefer simple, comfortable clothes, whereas my brother loves fashion and colours. For example, at Eid I just wore a white shirt. Although my style is simple, it is smart. And you, what is your style?”',
      find: ['لِأَنَّهَا صَبُورَةٌ', 'مَثَلًا، الشَّهْرَ المَاضِيَ', 'بَيْنَمَا يُحِبُّ أَخِي', 'وَأَنْتَ'],
    },
  },
  checkCore: 'answer directly, give a reason, and ask a question back?',
  checkDevelop: 'add a past example and a comparison to every answer?',
});
