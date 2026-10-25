'use strict';
/* Practice Room · F3-L10 · Speaking: my family and home. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f3-l10',
  arShort: 'أَتَحَدَّثُ عَنْ عَائِلَتِي وَبَيْتِي',
  grammar: 'decoding the question word (man · maʿa man · ayna · kam · li-mādhā · ṣif); two connected sentences per answer; repair phrases',
  focus: 'Students run their own speaking practice for the family-and-home conversation: decode question words, act a model exchange, answer two-sentence question cards with follow-ups, do an interview card, speak for 45–60 seconds, then write their best spoken answers as a short text.',
  words1: 'Question words', words2: 'Speaking skills and repair phrases',
  dialogue: {
    title: 'Two sentences for every answer', ar: 'جُمْلَتَانِ لِكُلِّ جَوَابٍ',
    lines: [
      ['A', 'مَعَ مَنْ تَسْكُنُ؟', 'Who do you live with?'],
      ['B', 'أَسْكُنُ مَعَ أَبِي وَأُمِّي وَأُخْتِي. أُخْتِي صَغِيرَةٌ وَمُضْحِكَةٌ.', 'I live with my father, mother and sister. My sister is small and funny.'],
      ['A', 'صِفْ بَيْتَكَ.', 'Describe your home.'],
      ['B', 'نَسْكُنُ فِي شَقَّةٍ فِي الطَّابِقِ الثَّالِثِ. فِيهَا ثَلَاثُ غُرَفٍ وَشُرْفَةٌ صَغِيرَةٌ.', 'We live in a flat on the third floor. It has three rooms and a small balcony.'],
      ['A', 'لِمَاذَا تُحِبُّ غُرْفَتَكَ؟', 'Why do you like your room?'],
      ['B', 'دَعْنِي أُفَكِّرُ قَلِيلًا … أُحِبُّهَا لِأَنَّهَا هَادِئَةٌ. أَدْرُسُ فِيهَا كُلَّ مَسَاءٍ.', 'Let me think a little … I like it because it is quiet. I study there every evening.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: answer with YOUR facts — always TWO sentences. Use a repair phrase if you need time.',
  },
  questions: [
    { q: 'كَمْ شَخْصًا فِي عَائِلَتِكَ؟', en: 'How many people are in your family?', start: 'فِي عَائِلَتِي …', more: '+ sentence 2: … هُوَ / هِيَ …' },
    { q: 'مَنْ أَكْبَرُ شَخْصٍ فِي عَائِلَتِكَ؟', en: 'Who is the oldest person in your family?', start: 'أَكْبَرُ شَخْصٍ … ← جَدِّي', more: '+ عُمْرُهُ … وَهُوَ …' },
    { q: 'أَيْنَ تَسْكُنُ؟', en: 'Where do you live?', start: 'أَسْكُنُ فِي …', more: '+ فِيهِ / فِيهَا …' },
    { q: 'صِفْ غُرْفَةَ الجُلُوسِ.', en: 'Describe the living room.', start: 'غُرْفَةُ الجُلُوسِ …', more: '+ يُوجَدُ … وَتُوجَدُ …' },
    { q: 'لِمَاذَا تُحِبُّ حَيَّكَ؟', en: 'Why do you like your area?', start: 'أُحِبُّ حَيِّي لِأَنَّ …', more: '+ لٰكِنَّ …' },
  ],
  qTitle: 'Decode the question word — answer in TWO sentences',
  card: {
    title: 'Card — the speaking test: a short interview', ar: 'اخْتِبَارُ التَّحَدُّثِ', you: 'the candidate', them: 'the examiner',
    tasks: [
      { ex: 'حَدِّثْنِي عَنْ عَائِلَتِكَ.', task: 'Two sentences about your family.', plan: 'حَدِّثْنِي ← فِي عَائِلَتِي … + هُوَ / هِيَ …', model: 'فِي عَائِلَتِي أَرْبَعَةُ أَشْخَاصٍ. أُمِّي مُعَلِّمَةٌ، وَهِيَ لَطِيفَةٌ جِدًّا.', modelEn: 'There are four people in my family. My mum is a teacher, and she is very kind.' },
      { ex: 'مَعَ مَنْ تَقْضِي وَقْتًا كَثِيرًا؟', task: 'Who + what you do together.', plan: 'مَعَ مَنْ ← مَعَ … + نَلْعَبُ / نَقْرَأُ …', model: 'مَعَ أَخِي الكَبِيرِ. نَلْعَبُ كُرَةَ القَدَمِ فِي الحَدِيقَةِ.', modelEn: 'With my older brother. We play football in the garden.' },
      { ex: 'صِفْ بَيْتَكَ.', task: 'Two sentences about your home.', plan: 'صِفْ ← نَسْكُنُ فِي … + فِيهِ …', model: 'نَسْكُنُ فِي بَيْتٍ صَغِيرٍ. فِيهِ ثَلَاثُ غُرَفٍ وَحَدِيقَةٌ.', modelEn: 'We live in a small house. It has three rooms and a garden.' },
      { ex: 'هَلْ تُحِبُّ بَيْتَكَ؟ لِمَاذَا؟', task: 'Opinion + reason.', plan: 'لِمَاذَا ← نَعَمْ، لِأَنَّهُ … + لٰكِنَّ …', model: 'نَعَمْ، لِأَنَّهُ قَرِيبٌ مِنَ المَدْرَسَةِ، لٰكِنَّ غُرْفَتِي صَغِيرَةٌ.', modelEn: 'Yes, because it is near the school, but my room is small.' },
    ],
    girl: 'عَائِلَتِكِ · تَقْضِينَ · صِفِي بَيْتَكِ · تُحِبِّينَ',
    notes: 'Exam-style: the examiner asks; the candidate gives two connected sentences per task.',
  },
  talk: {
    title: '45–60 seconds: my family and my home', ar: 'عَائِلَتِي وَبَيْتِي',
    text: 'Speak for 45–60 seconds about your family and your home, then answer two follow-up questions from the Leader (لِمَاذَا؟ · مَعَ مَنْ؟).',
    head: 'Talk for 45–60 seconds — then two follow-ups',
    routes: {
      core: '30 seconds: family (2 sentences) + home (2 sentences).',
      develop: '45 seconds: add descriptions with agreement and لِأَنَّ.',
      stretch: '60 seconds: add لٰكِنَّ, positions and an opinion — and answer both follow-ups in two sentences.',
    },
  },
  builder: [
    { en: 'I live with my grandmother. She is calm and kind.', cols: [['أَسْكُنُ مَعَ جَدَّتِي.', 'تَسْكُنُ مَعَ جَدَّتِي.'], ['هِيَ', 'هُوَ'], ['هَادِئَةٌ وَلَطِيفَةٌ.', 'هَادِئٌ وَلَطِيفٌ.']], key: [0, 0, 0], why: 'I → أَسْكُنُ; grandmother → هِيَ + feminine adjectives.' },
    { en: 'Our flat is small, but it is comfortable.', cols: [['شَقَّتُنَا', 'شَقَّتِي هُمْ'], ['صَغِيرَةٌ،', 'صَغِيرٌ،'], ['لٰكِنَّهَا مُرِيحَةٌ.', 'لِأَنَّهُ مُرِيحٌ.']], key: [0, 0, 0], why: 'Flat (f.) → صَغِيرَةٌ … لٰكِنَّهَا مُرِيحَةٌ.' },
    { en: 'With whom? — With my cousins.', cols: [['مَعَ مَنْ؟', 'مَنْ مَعَ؟'], ['—', '—'], ['مَعَ أَبْنَاءِ عَمِّي.', 'أَبْنَاءُ عَمِّي مَعَ.']], key: [0, 0, 0], why: 'Answer the question word: مَعَ مَنْ؟ → مَعَ + person.' },
  ],
  errors: [
    { wrong: 'كَمْ غُرْفَةً فِي بَيْتِكَ؟ — بَيْتِي جَمِيلٌ.', hint: 'Did it answer the question word?', right: 'فِي بَيْتِي خَمْسُ غُرَفٍ.', why: 'كَمْ = how many → answer with a number.' },
    { wrong: 'أَيْنَ تَسْكُنُ؟ — أَسْكُنُ مَعَ أُمِّي.', hint: 'أَيْنَ = where.', right: 'أَسْكُنُ فِي مَانْشِسْتَرَ.', why: 'أَيْنَ → a place (فِي …), not a person.' },
    { wrong: 'لِمَاذَا تُحِبُّ حَيَّكَ؟ — نَعَمْ.', hint: 'لِمَاذَا = why.', right: 'أُحِبُّهُ لِأَنَّهُ هَادِئٌ.', why: 'لِمَاذَا → a reason with لِأَنَّ.' },
  ],
  task: {
    title: 'My best spoken answers — written down', ar: 'أَفْضَلُ أَجْوِبَتِي مَكْتُوبَةً',
    text: 'Write your answers to four questions from today (about 45–65 words), two sentences each: • كَمْ شَخْصًا فِي عَائِلَتِكَ؟ • صِفْ شَخْصًا فِي عَائِلَتِكَ. • أَيْنَ تَسْكُنُ؟ صِفْ بَيْتَكَ. • هَلْ تُحِبُّ بَيْتَكَ؟ لِمَاذَا؟',
    phrases: [['فِي عَائِلَتِي … أَشْخَاصٍ', 'there are … people in my family'], ['… هُوَ / هِيَ … وَ…', '… he / she is … and …'], ['نَسْكُنُ فِي … ، فِيهِ / فِيهَا …', 'we live in …, it has …'], ['أُحِبُّهُ لِأَنَّهُ … ، لٰكِنَّ …', 'I like it because …, but …']],
    coreFrames: [
      { ar: 'فِي عَائِلَتِي ______ أَشْخَاصٍ. ______ .', en: 'There are … people in my family. …' },
      { ar: '______ ، هُوَ / هِيَ ______ وَ ______ .', en: 'My …: he / she is … and …' },
      { ar: 'نَسْكُنُ فِي ______ . فِيهِ / فِيهَا ______ .', en: 'We live in … It has …' },
      { ar: 'أُحِبُّ بَيْتِي لِأَنَّهُ ______ .', en: 'I like my home because it …' },
    ],
    developFrames: [
      { ar: '… لٰكِنَّ ______ .', en: '… but …' },
      { ar: 'نَقْضِي وَقْتًا مَعًا فِي ______ ، وَ ______ .', en: 'We spend time together in …, and …' },
    ],
    bank: ['مَنْ · مَعَ مَنْ', 'أَيْنَ · كَمْ', 'لِمَاذَا · صِفْ', 'فِي عَائِلَتِي', 'نَسْكُنُ فِي', 'فِيهِ · فِيهَا', 'لِأَنَّ', 'لٰكِنَّ'],
    model: {
      text: 'فِي عَائِلَتِي خَمْسَةُ أَشْخَاصٍ. أَنَا الأَخُ الأَكْبَرُ. أَبِي طَبِيبٌ، وَهُوَ هَادِئٌ وَكَرِيمٌ جِدًّا. نَسْكُنُ فِي بَيْتٍ قَدِيمٍ فِي شِيفِيلْدَ. فِيهِ أَرْبَعُ غُرَفٍ، وَخَلْفَهُ حَدِيقَةٌ كَبِيرَةٌ. أُحِبُّ بَيْتِي لِأَنَّهُ قَرِيبٌ مِنْ أَصْدِقَائِي، وَالحَدِيقَةُ جَمِيلَةٌ. لٰكِنَّ المَطْبَخَ صَغِيرٌ، لِذٰلِكَ نَأْكُلُ فِي غُرْفَةِ الجُلُوسِ.',
      en: '“There are five people in my family. I am the oldest brother. My father is a doctor; he is very calm and generous. We live in an old house in Sheffield. It has four rooms, and behind it there is a big garden. I like my home because it is near my friends, and the garden is beautiful. But the kitchen is small, so we eat in the living room.”',
      find: ['فِي عَائِلَتِي خَمْسَةُ أَشْخَاصٍ', 'وَهُوَ هَادِئٌ وَكَرِيمٌ', 'فِيهِ أَرْبَعُ غُرَفٍ', 'لِأَنَّهُ قَرِيبٌ'],
    },
  },
  checkCore: 'answer the question word that was asked (كَمْ → number · أَيْنَ → place)?',
  checkDevelop: 'give two connected sentences for every answer?',
});
