'use strict';
/* Practice Room · F5-L11 · Speaking and writing about food and health. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f5-l11',
  arShort: 'طَعَامِي وَصِحَّتِي',
  grammar: 'the whole F5 system: food and meals, preferences + li-annahu / li-annahā, ordering, the body, illness with ʿindī … mundhu, advice; connectors awwalan · thumma · baʿda dhālika · ayḍan · lākinna · li-anna · li-dhālika · akhīran · mathalan',
  focus: 'Students run their own speaking and writing practice bringing F5 together: say the connectors, act a model exchange, answer six topic questions with developed answers, do a role-play card on a health survey, give a one-minute talk, then build, fix and write an article: طَعَامِي وَصِحَّتِي.',
  words1: 'Connectors for developed answers', words2: 'Repair phrases and examples',
  dialogue: {
    title: 'Developed answers: food and health', ar: 'أَجْوِبَةٌ مُطَوَّرَةٌ',
    lines: [
      ['A', 'مَاذَا تَأْكُلُ فِي الفُطُورِ؟', 'What do you eat for breakfast?'],
      ['B', 'أَوَّلًا أَشْرَبُ الحَلِيبَ، ثُمَّ آكُلُ الشُّوفَانَ مَعَ المَوْزِ، لِأَنَّهُ صِحِّيٌّ.', 'First I drink milk, then I eat porridge with banana, because it is healthy.'],
      ['A', 'هَلْ تُحِبُّ الحَلْوَيَاتِ؟', 'Do you like sweets?'],
      ['B', 'نَعَمْ، أُحِبُّهَا كَثِيرًا، وَلٰكِنْ لَا آكُلُهَا كُلَّ يَوْمٍ. مَثَلًا، آكُلُ الكَعْكَ يَوْمَ الجُمُعَةِ فَقَطْ.', 'Yes, I love them, but I don’t eat them every day. For example, I eat cake only on Friday.'],
      ['A', 'كَيْفَ تُحَافِظُ عَلَى صِحَّتِكَ؟', 'How do you stay healthy?'],
      ['B', 'أَمْشِي كَثِيرًا، وَأَنَامُ مُبَكِّرًا، لِذٰلِكَ أَشْعُرُ بِالنَّشَاطِ فِي المَدْرَسَةِ.', 'I walk a lot and sleep early, so I feel energetic at school.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap. Round 3: answer with YOUR facts — every answer needs a connector + a reason or example.',
  },
  questions: [
    { q: 'مَا طَعَامُكَ المُفَضَّلُ؟ لِمَاذَا؟', en: 'Favourite food? Why?', start: 'طَعَامِي المُفَضَّلُ … لِأَنَّهُ / لِأَنَّهَا …', more: '… مَثَلًا …' },
    { q: 'صِفْ وَجَبَاتِكَ فِي يَوْمٍ عَادِيٍّ.', en: 'Describe your meals on a normal day.', start: 'أَوَّلًا … ثُمَّ …', more: '… وَأَخِيرًا …' },
    { q: 'مَاذَا تَطْلُبُ فِي المَطْعَمِ؟', en: 'What do you order at a restaurant?', start: 'عَادَةً أَطْلُبُ …', more: '… لٰكِنَّ أُخْتِي …' },
    { q: 'مَتَى كُنْتَ مَرِيضًا آخِرَ مَرَّةٍ؟', en: 'When were you last ill?', start: 'كُنْتُ مَرِيضًا … ؛ كَانَ عِنْدِي …', more: '… لِذٰلِكَ …' },
    { q: 'مَا نَصِيحَتُكَ لِحَيَاةٍ صِحِّيَّةٍ؟', en: 'Your advice for a healthy life?', start: 'يَجِبُ أَنْ … / مِنَ الأَفْضَلِ أَنْ …', more: '… لِأَنَّ …' },
  ],
  card: {
    title: 'Role-play card — a health survey interview', ar: 'اسْتِبْيَانٌ صِحِّيٌّ', you: 'a student', them: 'a researcher from a health charity',
    tasks: [
      { ex: 'كَمْ وَجْبَةً تَأْكُلُ فِي اليَوْمِ؟', task: 'Number + which meals.', plan: 'كَمْ ← آكُلُ … وَجَبَاتٍ : …', model: 'آكُلُ ثَلَاثَ وَجَبَاتٍ: الفُطُورَ وَالغَدَاءَ وَالعَشَاءَ.', modelEn: 'I eat three meals: breakfast, lunch and dinner.' },
      { ex: 'هَلْ تَأْكُلُ الخُضَارَ؟', task: 'Answer + example.', plan: 'هَلْ ← نَعَمْ ، مَثَلًا …', model: 'نَعَمْ، مَثَلًا آكُلُ الجَزَرَ وَالخِيَارَ مَعَ الغَدَاءِ.', modelEn: 'Yes, for example I eat carrots and cucumber with lunch.' },
      { ex: 'كَيْفَ تَشْعُرُ عِنْدَمَا تَسْهَرُ؟', task: 'Feeling + result.', plan: 'كَيْفَ ← أَشْعُرُ بِالتَّعَبِ ، لِذٰلِكَ …', model: 'أَشْعُرُ بِالتَّعَبِ فِي الصَّبَاحِ، لِذٰلِكَ لَا أَتَرَكَّزُ فِي الصَّفِّ.', modelEn: 'I feel tired in the morning, so I don’t concentrate in class.' },
      { unexpected: true, ex: 'مَا الشَّيْءُ الَّذِي سَتُغَيِّرُهُ فِي حَيَاتِكَ؟', task: 'Answer the surprise question.', plan: 'سَتُغَيِّرُ ← سَأَشْرَبُ / سَأَنَامُ …', model: 'سَأَشْرَبُ مَاءً أَكْثَرَ، وَسَأَشْرَبُ مَشْرُوبَاتٍ غَازِيَّةً أَقَلَّ.', modelEn: 'I will drink more water, and fewer fizzy drinks.' },
    ],
    girl: 'تَأْكُلِينَ · تَشْعُرِينَ · تَسْهَرِينَ · سَتُغَيِّرِينَهُ',
    notes: 'Developed answers: each task = answer + example / reason / result. Task ! is unexpected.',
  },
  talk: {
    title: 'One minute: my food and my health', ar: 'دَقِيقَةٌ: طَعَامِي وَصِحَّتِي',
    text: 'Deliver a ONE-MINUTE talk: your meals, your favourite food (with a reason), a time you were ill, and your healthy-living advice. Use at least five connectors.',
    head: 'Talk for one minute — no stopping',
    routes: {
      core: '30 seconds: one sentence on each part.',
      develop: '45 seconds with لِأَنَّ · مَثَلًا · ثُمَّ.',
      stretch: '60 seconds with لِذٰلِكَ · وَلٰكِنْ · أَخِيرًا and a past illness.',
    },
  },
  builder: [
    { en: 'I like fish, but my brother prefers meat.', cols: [['أُحِبُّ السَّمَكَ،', 'أُحِبُّ السَّمَكُ،'], ['وَلٰكِنَّ أَخِي', 'وَلٰكِنَّ أَخُو'], ['يُفَضِّلُ اللَّحْمَ.', 'تُفَضِّلُ اللَّحْمَ.']], key: [0, 0, 0], why: 'لٰكِنَّ + noun in -a (أَخِي); he → يُفَضِّلُ.' },
    { en: 'For example, I eat an apple every day.', cols: [['مَثَلًا،', 'لِذٰلِكَ،'], ['آكُلُ تُفَّاحَةً', 'آكُلُ تُفَّاحَةٌ'], ['كُلَّ يَوْمٍ.', 'كُلُّ يَوْمٍ.']], key: [0, 0, 0], why: 'For example = مَثَلًا; object → تُفَّاحَةً.' },
    { en: 'Finally, I sleep early.', cols: [['أَخِيرًا', 'أَوَّلًا'], ['أَنَامُ', 'يَنَامُ'], ['مُبَكِّرًا.', 'مُبَكِّرٌ.']], key: [0, 0, 0], why: 'Finally = أَخِيرًا; early = مُبَكِّرًا.' },
  ],
  errors: [
    { wrong: 'أُحِبُّ الحُمُّصَ لِأَنَّهَا لَذِيذَةٌ.', hint: 'حُمُّصٌ is masculine.', right: 'أُحِبُّ الحُمُّصَ لِأَنَّهُ لَذِيذٌ.', why: 'Masculine food → لِأَنَّهُ لَذِيذٌ.' },
    { wrong: 'عِنْدِي زُكَامٌ مِنْ يَوْمَيْنِ.', hint: '“for two days”', right: 'عِنْدِي زُكَامٌ مُنْذُ يَوْمَيْنِ.', why: 'Duration = مُنْذُ.' },
    { wrong: 'يَجِبُ أَنْ تَأْكُلُ الخُضَارَ.', hint: 'After أَنْ …', right: 'يَجِبُ أَنْ تَأْكُلَ الخُضَارَ.', why: 'أَنْ + verb in -a.' },
  ],
  task: {
    title: 'Article: my food and my health', ar: 'مَقَالَةٌ: طَعَامِي وَصِحَّتِي',
    text: 'Write an article (about 60–80 words) for the school magazine: طَعَامِي وَصِحَّتِي. Paragraph 1: your meals and favourite food (with reasons). Paragraph 2: a time you were ill and what you did. Paragraph 3: your healthy-living advice. Use at least five connectors, including مَثَلًا and لِذٰلِكَ.',
    range: [45, 95],
    phrases: [['أَوَّلًا … ثُمَّ … وَبَعْدَ ذٰلِكَ …', 'first … then … after that …'], ['مَثَلًا …', 'for example …'], ['كُنْتُ مَرِيضًا … ؛ كَانَ عِنْدِي …', 'I was ill …; I had …'], ['لِذٰلِكَ يَجِبُ أَنْ …', 'so you must …']],
    coreFrames: [
      { ar: 'فِي الفُطُورِ ______ ، ثُمَّ فِي الغَدَاءِ ______ .', en: 'For breakfast …, then for lunch …' },
      { ar: 'طَعَامِي المُفَضَّلُ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'My favourite food is … because …' },
      { ar: 'فِي الشِّتَاءِ كُنْتُ مَرِيضًا / مَرِيضَةً؛ كَانَ عِنْدِي ______ .', en: 'In winter I was ill; I had …' },
      { ar: 'يَجِبُ أَنْ ______ ، وَمِنَ الأَفْضَلِ أَنْ ______ .', en: 'You must …, and it is better to …' },
    ],
    developFrames: [
      { ar: 'أُحِبُّ الحَلْوَيَاتِ، وَلٰكِنْ ______ . مَثَلًا ______ .', en: 'I love sweets, but … For example …' },
      { ar: 'ذَهَبْتُ إِلَى الطَّبِيبِ، فَقَالَ: ______ ، لِذٰلِكَ ______ .', en: 'I went to the doctor, and he said: …, so …' },
    ],
    bank: ['أَوَّلًا · ثُمَّ', 'بَعْدَ ذٰلِكَ · أَخِيرًا', 'أَيْضًا · مَثَلًا', 'وَلٰكِنْ', 'لِأَنَّ · لِذٰلِكَ', 'كَانَ عِنْدِي', 'يَجِبُ أَنْ', 'مِنَ الأَفْضَلِ أَنْ'],
    model: {
      text: `طَعَامِي وَصِحَّتِي
فِي الفُطُورِ آكُلُ البَيْضَ، ثُمَّ فِي الغَدَاءِ آكُلُ الأَرُزَّ مَعَ السَّلَطَةِ. طَعَامِي المُفَضَّلُ المَقْلُوبَةُ، لِأَنَّهَا لَذِيذَةٌ وَتُذَكِّرُنِي بِجَدَّتِي. أُحِبُّ الحَلْوَيَاتِ أَيْضًا، وَلٰكِنْ لَا آكُلُهَا كَثِيرًا.
فِي الشِّتَاءِ كُنْتُ مَرِيضًا؛ كَانَ عِنْدِي زُكَامٌ وَحُمَّى. ذَهَبْتُ إِلَى الطَّبِيبِ، فَقَالَ: اسْتَرِحْ، لِذٰلِكَ بَقِيتُ فِي البَيْتِ ثَلَاثَةَ أَيَّامٍ.
نَصِيحَتِي: يَجِبُ أَنْ تَأْكُلَ الفَاكِهَةَ، مَثَلًا التُّفَّاحَ، وَمِنَ الأَفْضَلِ أَنْ تَنَامَ مُبَكِّرًا.`,
      en: '“My food and my health. For breakfast I eat eggs, then for lunch I eat rice with salad. My favourite food is maqluba, because it is delicious and reminds me of my grandmother. I like sweets too, but I don’t eat them a lot. / In winter I was ill; I had a cold and a fever. I went to the doctor and he said: rest, so I stayed at home for three days. / My advice: you must eat fruit, for example apples, and it is better to sleep early.”',
      find: ['ثُمَّ فِي الغَدَاءِ', 'لِأَنَّهَا لَذِيذَةٌ', 'لِذٰلِكَ بَقِيتُ', 'مَثَلًا التُّفَّاحَ'],
    },
  },
  checkCore: 'write three paragraphs: meals and food · illness · advice?',
  checkDevelop: 'use at least five connectors, including مَثَلًا and لِذٰلِكَ?',
});
