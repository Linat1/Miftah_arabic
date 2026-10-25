'use strict';
/* Practice Room · D4-L09 · Writing — an environment and technology article with a clear position. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd4-l09',
  arShort: 'مَقَالٌ بِرَأْيٍ وَاضِحٍ',
  grammar: 'article structure: introduction + thesis (aʿtaqidu anna …) · main argument + specific example · counterargument (yarā al-baʿḍu anna … , maʿa dhālika …) · conclusion that synthesises (fī al-khitām …); connectors only where they add meaning (ʿilāwatan ʿalā dhālika · maʿa dhālika · ʿalā al-raghmi min anna)',
  focus: 'Students run their own writing workshop, with speaking first: say the article toolkit, act a debate dialogue, plan each paragraph aloud with cards, do a role-play card as a newspaper editor giving feedback, rehearse their argument for one minute, then build, fix and write a four-paragraph opinion article.',
  words1: 'Article structure', words2: 'Connectors',
  dialogue: {
    title: 'Should cars be banned from city centres?', ar: 'هَلْ نَمْنَعُ السَّيَّارَاتِ فِي وَسَطِ المَدِينَةِ؟',
    lines: [
      ['A', 'مَا رَأْيُكِ فِي مَنْعِ السَّيَّارَاتِ فِي وَسَطِ المَدِينَةِ؟', 'What do you think about banning cars in the city centre?'],
      ['B', 'أَعْتَقِدُ أَنَّهُ قَرَارٌ صَحِيحٌ، لِأَنَّهُ يُقَلِّلُ التَّلَوُّثَ.', 'I think it is the right decision, because it reduces pollution.'],
      ['A', 'هَلْ عِنْدَكِ دَلِيلٌ؟', 'Do you have evidence?'],
      ['B', 'نَعَمْ، فِي أُوسْلُو انْخَفَضَ التَّلَوُّثُ بَعْدَ المَنْعِ بِشَكْلٍ كَبِيرٍ.', 'Yes — in Oslo pollution fell a lot after the ban.'],
      ['A', 'وَلٰكِنَّ أَصْحَابَ المَحَلَّاتِ يَخَافُونَ مِنْ قِلَّةِ الزَّبَائِنِ.', 'But shop owners fear fewer customers.'],
      ['B', 'هٰذِهِ حُجَّةٌ مُهِمَّةٌ. مَعَ ذٰلِكَ، إِذَا تَحَسَّنَ النَّقْلُ العَامُّ، فَسَيَأْتِي الزَّبَائِنُ بِالحَافِلَةِ.', 'That’s an important argument. Nevertheless, if public transport improves, customers will come by bus.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: debate ANOTHER topic (phones in school, flights, fast fashion).',
  },
  qTitle: 'Plan aloud — one card per paragraph',
  questions: [
    { q: '¶١ مَا مَوْقِفُكَ؟ (المُقَدِّمَةُ)', en: '¶1 What is your position?', start: 'أَعْتَقِدُ أَنَّ …', more: '… لِسَبَبَيْنِ: …' },
    { q: '¶٢ مَا حُجَّتُكَ الرَّئِيسِيَّةُ وَمِثَالُكَ؟', en: '¶2 Your main argument and example?', start: 'أَوَّلًا … ؛ فَعَلَى سَبِيلِ المِثَالِ …', more: '… عِلَاوَةً عَلَى ذٰلِكَ …' },
    { q: '¶٣ مَا الحُجَّةُ المُضَادَّةُ؟', en: '¶3 The counterargument?', start: 'يَرَى البَعْضُ أَنَّ …', more: '… مَعَ ذٰلِكَ …' },
    { q: '¶٤ كَيْفَ تَخْتِمُ؟', en: '¶4 How do you conclude?', start: 'فِي الخِتَامِ …', more: '… لِذٰلِكَ يَجِبُ أَنْ …' },
    { q: 'مَا الفَرْقُ بَيْنَ الحُجَّةِ وَالدَّلِيلِ؟', en: 'Difference between an argument and evidence?', start: 'الحُجَّةُ رَأْيٌ … وَالدَّلِيلُ …', more: '… مِثْلَ رَقْمٍ أَوْ مِثَالٍ' },
  ],
  card: {
    title: 'Role-play card — the newspaper editor’s feedback', ar: 'مُلَاحَظَاتُ رَئِيسِ التَّحْرِيرِ', you: 'the editor', them: 'a young writer',
    tasks: [
      { ex: 'هَلْ مُقَدِّمَتِي جَيِّدَةٌ؟', task: 'Check the thesis.', plan: 'المُقَدِّمَةُ ← المَوْقِفُ وَاضِحٌ / غَيْرُ وَاضِحٍ …', model: 'المَوْقِفُ وَاضِحٌ، وَلٰكِنْ أَضِفْ سَبَبَيْنِ فِي الجُمْلَةِ الأُولَى.', modelEn: 'The position is clear, but add two reasons in the first sentence.' },
      { ex: 'وَالفِقْرَةُ الثَّانِيَةُ؟', task: 'Ask for a specific example.', plan: 'المِثَالُ ← تَحْتَاجُ إِلَى مِثَالٍ مُحَدَّدٍ …', model: 'تَحْتَاجُ إِلَى مِثَالٍ مُحَدَّدٍ، مِثْلَ رَقْمٍ أَوِ اسْمِ مَدِينَةٍ.', modelEn: 'It needs a specific example, like a figure or a city name.' },
      { ex: 'هَلْ يَجِبُ أَنْ أَكْتُبَ عَنِ الرَّأْيِ الآخَرِ؟', task: 'Explain why.', plan: '', model: 'نَعَمْ، لِأَنَّ الحُجَّةَ المُضَادَّةَ تَجْعَلُ مَقَالَكَ أَقْوَى وَأَكْثَرَ تَوَازُنًا.', modelEn: 'Yes, because a counterargument makes your article stronger and more balanced.' },
      { unexpected: true, ex: 'اسْتَخْدَمْتُ «عِلَاوَةً عَلَى ذٰلِكَ» خَمْسَ مَرَّاتٍ!', task: 'Advise on connectors.', plan: '', model: 'هٰذَا كَثِيرٌ. اسْتَخْدِمِ الرَّوَابِطَ فَقَطْ عِنْدَمَا تُضِيفُ مَعْنًى.', modelEn: 'That’s too many. Use connectors only when they add meaning.' },
    ],
    girl: 'editor to a girl writer: مَقَالَكِ · اسْتَخْدِمِي · تُضِيفِينَ',
    notes: 'Thesis · example · counterargument · synthesis. Range only where it adds meaning.',
  },
  talk: {
    title: 'One minute: argue your position', ar: 'أُدَافِعُ عَنْ رَأْيِي',
    text: 'Choose a topic. Argue your position for one minute: thesis, one argument with a specific example, a counterargument, and a conclusion.',
    routes: {
      core: 'Thesis + one argument with لِأَنَّ.',
      develop: 'Add a specific example and a counterargument (يَرَى البَعْضُ أَنَّ …).',
      stretch: 'Answer the counterargument (مَعَ ذٰلِكَ …) and conclude with a synthesis.',
    },
  },
  builder: [
    { en: 'I believe that solar energy is the solution.', cols: [['أَعْتَقِدُ', 'أَعْتَقِدَ'], ['أَنَّ الطَّاقَةَ الشَّمْسِيَّةَ', 'أَنَّ الطَّاقَةُ الشَّمْسِيَّةُ'], ['هِيَ الحَلُّ.', 'هِيَ الحَلَّ.']], key: [0, 0, 0], why: 'أَنَّ + noun in -a.' },
    { en: 'Some think that it is expensive; nevertheless, it saves money.', cols: [['يَرَى البَعْضُ أَنَّهَا غَالِيَةٌ؛', 'يَرَى البَعْضَ أَنَّهَا غَالِيَةً؛'], ['مَعَ ذٰلِكَ،', 'لِذٰلِكَ،'], ['فَهِيَ تُوَفِّرُ المَالَ.', 'فَهِيَ تُوَفِّرَ المَالَ.']], key: [0, 0, 0], why: 'Nevertheless = مَعَ ذٰلِكَ (so = لِذٰلِكَ).' },
    { en: 'In conclusion, we must act now.', cols: [['فِي الخِتَامِ،', 'فِي البِدَايَةِ،'], ['يَجِبُ أَنْ', 'يَجِبُ'], ['نَتَحَرَّكَ الآنَ.', 'نَتَحَرَّكُ الآنَ.']], key: [0, 0, 0], why: 'أَنْ + -a.' },
  ],
  errors: [
    { wrong: 'أَعْتَقِدُ أَنَّ التِّكْنُولُوجِيَا مُفِيدَةٌ. (and nothing else)', hint: 'A thesis needs reasons.', right: 'أَعْتَقِدُ أَنَّ التِّكْنُولُوجِيَا مُفِيدَةٌ لِلْبِيئَةِ لِسَبَبَيْنِ: الطَّاقَةُ وَالنَّقْلُ.', why: 'Thesis + preview of reasons.' },
    { wrong: 'عِلَاوَةً عَلَى ذٰلِكَ … عِلَاوَةً عَلَى ذٰلِكَ … عِلَاوَةً عَلَى ذٰلِكَ …', hint: 'Too much!', right: 'أَوَّلًا … ، كَمَا أَنَّ … ، وَأَخِيرًا …', why: 'Vary connectors; use them only when they add meaning.' },
    { wrong: 'فِي الخِتَامِ، السَّيَّارَاتُ كَثِيرَةٌ. (new point)', hint: 'A conclusion doesn’t add new points.', right: 'فِي الخِتَامِ، مَنْعُ السَّيَّارَاتِ مُفِيدٌ إِذَا تَحَسَّنَ النَّقْلُ العَامُّ.', why: 'Synthesise both sides.' },
  ],
  task: {
    title: 'An opinion article in four paragraphs', ar: 'مَقَالُ رَأْيٍ فِي أَرْبَعِ فِقْرَاتٍ',
    text: 'Write an article (about 70–90 words) for the school magazine: “Can technology save the environment?” ¶1 thesis. ¶2 main argument + a specific example. ¶3 counterargument + your answer (مَعَ ذٰلِكَ …). ¶4 a conclusion that brings both sides together.',
    range: [65, 110],
    phrases: [['أَعْتَقِدُ أَنَّ …', 'I believe that …'], ['عَلَى سَبِيلِ المِثَالِ … · عِلَاوَةً عَلَى ذٰلِكَ …', 'for example … · in addition …'], ['يَرَى البَعْضُ أَنَّ … ؛ مَعَ ذٰلِكَ …', 'some think that …; nevertheless …'], ['فِي الخِتَامِ …', 'in conclusion …']],
    coreFrames: [
      { ar: '¶١ أَعْتَقِدُ أَنَّ ______ ، لِأَنَّ ______ .', en: '¶1 I believe that …, because …' },
      { ar: '¶٢ أَوَّلًا ______ ؛ عَلَى سَبِيلِ المِثَالِ، ______ .', en: '¶2 First …; for example, …' },
      { ar: '¶٣ يَرَى البَعْضُ أَنَّ ______ .', en: '¶3 Some think that …' },
      { ar: '¶٤ فِي الخِتَامِ، ______ .', en: '¶4 In conclusion, …' },
    ],
    developFrames: [
      { ar: 'مَعَ ذٰلِكَ، ______ .', en: 'Nevertheless, …' },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .', en: 'Although …, …' },
    ],
    bank: ['مُقَدِّمَةٌ · خَاتِمَةٌ', 'حُجَّةٌ رَئِيسِيَّةٌ', 'دَلِيلٌ · مِثَالٌ مُحَدَّدٌ', 'حُجَّةٌ مُضَادَّةٌ', 'أَعْتَقِدُ أَنَّ', 'عِلَاوَةً عَلَى ذٰلِكَ', 'مَعَ ذٰلِكَ', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
    model: {
      text: `أَعْتَقِدُ أَنَّ التِّكْنُولُوجِيَا تَسْتَطِيعُ أَنْ تُنْقِذَ البِيئَةَ، بِشَرْطِ أَنْ نَسْتَخْدِمَهَا بِذَكَاءٍ.
أَوَّلًا، تُقَدِّمُ التِّكْنُولُوجِيَا طَاقَةً نَظِيفَةً؛ عَلَى سَبِيلِ المِثَالِ، تُنْتِجُ الدَّنْمَارْكُ نِصْفَ كَهْرَبَائِهَا مِنَ الرِّيَاحِ. عِلَاوَةً عَلَى ذٰلِكَ، تُقَلِّلُ السَّيَّارَاتُ الكَهْرَبَائِيَّةُ التَّلَوُّثَ فِي المُدُنِ.
يَرَى البَعْضُ أَنَّ صِنَاعَةَ الأَجْهِزَةِ تُلَوِّثُ البِيئَةَ أَيْضًا. مَعَ ذٰلِكَ، فَإِنَّ إِعَادَةَ تَدْوِيرِ الأَجْهِزَةِ القَدِيمَةِ تُخَفِّفُ هٰذِهِ المُشْكِلَةَ، كَمَا أَنَّ الشَّرِكَاتِ تَصْنَعُ أَجْهِزَةً تَعِيشُ سَنَوَاتٍ أَطْوَلَ.
فِي الخِتَامِ، التِّكْنُولُوجِيَا لَيْسَتْ حَلًّا سِحْرِيًّا، وَلٰكِنَّهَا أَدَاةٌ قَوِيَّةٌ إِذَا غَيَّرْنَا عَادَاتِنَا مَعَهَا.`,
      en: '“I believe technology can save the environment, on condition that we use it intelligently. First, technology offers clean energy; for example, Denmark produces half its electricity from wind. In addition, electric cars reduce pollution in cities. Some think that making devices also pollutes the environment. Nevertheless, recycling old devices reduces this problem, and companies are also making devices that last longer. In conclusion, technology is not a magic solution, but it is a powerful tool if we change our habits with it.”',
      find: ['أَعْتَقِدُ أَنَّ', 'عَلَى سَبِيلِ المِثَالِ', 'يَرَى البَعْضُ أَنَّ', 'فِي الخِتَامِ'],
    },
  },
  checkCore: 'write four paragraphs with a clear thesis and conclusion?',
  checkDevelop: 'give a specific example and answer a counterargument?',
});
