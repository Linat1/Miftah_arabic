'use strict';
/* Apply Workshop · F5-W06 · F5-L11 (speaking and writing about food and health) + F5-L12 (review and unit assessment). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f5-w06', pair: ['f5-l11', 'f5-l12'],
  title: 'Our Food and Health Podcast', arShort: 'بُودْكَاسْتُ الطَّعَامِ وَالصِّحَّةِ',
  focus: 'Students use all of F5 for one real purpose: they record an episode of a class podcast — meals and favourite foods with reasons, a time they were ill, and advice for a healthy life — then write it up as a three-paragraph magazine article with connectors.',
  sortTitle: 'Food or health?', sortCats: ['Food and meals', 'Health and the body'],
  sort: [
    { ar: 'أُفَضِّلُ الأَرُزَّ', cat: 0 }, { ar: 'فِي الغَدَاءِ', cat: 0 }, { ar: 'لِأَنَّهَا لَذِيذَةٌ', cat: 0 }, { ar: 'أُرِيدُ حُمُّصًا', cat: 0 },
    { ar: 'عِنْدِي صُدَاعٌ', cat: 1 }, { ar: 'عَيْنَانِ · يَدَانِ', cat: 1 }, { ar: 'مُنْذُ أَمْسِ', cat: 1 }, { ar: 'يَجِبُ أَنْ تَسْتَرِيحَ', cat: 1 },
  ],
  dialogue: {
    title: 'Podcast episode 1', ar: 'الحَلْقَةُ الأُولَى',
    lines: [
      ['A', 'أَهْلًا بِكُمْ فِي بُودْكَاسْتِنَا! مَا طَعَامُكِ المُفَضَّلُ يَا نُورُ؟', 'Welcome to our podcast! What is your favourite food, Nour?'],
      ['B', 'طَعَامِي المُفَضَّلُ السَّمَكُ لِأَنَّهُ لَذِيذٌ وَصِحِّيٌّ. مَثَلًا، آكُلُهُ مَعَ الأَرُزِّ.', 'My favourite food is fish because it is tasty and healthy. For example, I eat it with rice.'],
      ['A', 'مَتَى كُنْتِ مَرِيضَةً آخِرَ مَرَّةٍ؟', 'When were you last ill?'],
      ['B', 'فِي الشِّتَاءِ. كَانَ عِنْدِي زُكَامٌ وَحُمَّى، لِذٰلِكَ ذَهَبْتُ إِلَى الطَّبِيبِ.', 'In winter. I had a cold and a fever, so I went to the doctor.'],
      ['A', 'وَمَا نَصِيحَتُكِ لِلْمُسْتَمِعِينَ؟', 'And what is your advice for the listeners?'],
      ['B', 'أَوَّلًا، يَجِبُ أَنْ نَشْرَبَ مَاءً كَافِيًا، وَأَخِيرًا مِنَ الأَفْضَلِ أَنْ نَنَامَ مُبَكِّرًا.', 'Firstly, we must drink enough water, and finally it is better to sleep early.'],
    ],
    notes: 'The connectors (مَثَلًا · لِذٰلِكَ · أَوَّلًا · أَخِيرًا) and the three-part answer come from F5-L11; the content revises the whole unit, as in F5-L12.',
  },
  card: {
    title: 'Role-play card — the podcast guest', ar: 'ضَيْفُ البُودْكَاسْتِ', you: 'the podcast guest', them: 'the presenter',
    mix: 'the whole F5 system (F5-L12 review) in connected spoken answers with connectors and examples (F5-L11)',
    tasks: [
      { ex: 'صِفْ وَجَبَاتِكَ فِي يَوْمٍ عَادِيٍّ.', task: 'Two meals with what you eat.', plan: 'صِفْ ← فِي الفُطُورِ … وَفِي الغَدَاءِ …', model: 'فِي الفُطُورِ آكُلُ خُبْزًا وَبَيْضًا، وَفِي الغَدَاءِ آكُلُ دَجَاجًا وَسَلَطَةً.', modelEn: 'For breakfast I eat bread and eggs, and for lunch I eat chicken and salad.' },
      { ex: 'أَيُّهُمَا تُفَضِّلُ: الشَّايَ أَمِ القَهْوَةَ؟', task: 'Prefer one with a reason that agrees.', plan: 'أَيُّهُمَا ← أُفَضِّلُ … عَلَى … لِأَنَّهُ / لِأَنَّهَا …', model: 'أُفَضِّلُ الشَّايَ عَلَى القَهْوَةِ لِأَنَّ القَهْوَةَ مُرَّةٌ.', modelEn: 'I prefer tea to coffee because coffee is bitter.' },
      { ex: 'مَاذَا تَطْلُبُ فِي المَطْعَمِ؟', task: 'Say what you order, politely.', plan: 'مَاذَا ← أَقُولُ: أُرِيدُ … مِنْ فَضْلِكَ', model: 'أَقُولُ: أُرِيدُ شَاوَرْمَا وَعَصِيرًا، مِنْ فَضْلِكَ.', modelEn: 'I say: I would like shawarma and a juice, please.' },
      { ex: 'مَتَى كُنْتَ مَرِيضًا آخِرَ مَرَّةٍ؟', task: 'What you had and what you did.', plan: 'مَتَى ← كَانَ عِنْدِي … ، لِذٰلِكَ …', model: 'الشَّهْرَ المَاضِيَ كَانَ عِنْدِي أَلَمٌ فِي الحَلْقِ، لِذٰلِكَ شَرِبْتُ شَايًا بِالعَسَلِ.', modelEn: 'Last month I had a sore throat, so I drank tea with honey.' },
      { unexpected: true, ex: 'مَا نَصِيحَتُكَ لِحَيَاةٍ صِحِّيَّةٍ؟', task: 'Two pieces of advice with connectors.', plan: 'مَا ← أَوَّلًا يَجِبُ أَنْ … وَأَخِيرًا …', model: 'أَوَّلًا يَجِبُ أَنْ نَأْكُلَ الفَاكِهَةَ، وَأَخِيرًا مِنَ الأَفْضَلِ أَنْ نَمْشِيَ كُلَّ يَوْمٍ.', modelEn: 'Firstly we must eat fruit, and finally it is better to walk every day.' },
    ],
    girl: 'صِفِي وَجَبَاتِكِ · أَيُّهُمَا تُفَضِّلِينَ؟ · مَتَى كُنْتِ مَرِيضَةً؟ · مَا نَصِيحَتُكِ؟',
  },
  talk: {
    title: 'My one-minute podcast slot', ar: 'فَقْرَتِي فِي البُودْكَاسْتِ',
    text: 'Record your podcast slot (30–45 seconds) in three parts: (1) your meals and favourite food with a reason, (2) a time you were ill and what you did, (3) one piece of advice for a healthy life. Use مَثَلًا and لِذٰلِكَ.',
    routes: {
      core: 'طَعَامِي المُفَضَّلُ … لِأَنَّهُ … · كَانَ عِنْدِي … · يَجِبُ أَنْ …',
      develop: 'Use four connectors: أَوَّلًا · ثُمَّ · لِذٰلِكَ · أَخِيرًا.',
      stretch: 'Add an example (مَثَلًا …), a preference (أُفَضِّلُ … عَلَى …) and مُنْذُ.',
    },
    phrases: [['أَوَّلًا … ثُمَّ … أَخِيرًا …', 'firstly … then … finally …'], ['مَثَلًا …', 'for example …'], ['كَانَ عِنْدِي … ، لِذٰلِكَ …', 'I had …, so …'], ['يَجِبُ أَنْ · مِنَ الأَفْضَلِ أَنْ', 'we must · it is better to']],
  },
  task: {
    title: 'Article: my food and my health', ar: 'طَعَامِي وَصِحَّتِي',
    text: 'Write your podcast as a magazine article (about 50–70 words) in three paragraphs. Paragraph 1: your meals and favourite food, with a reason and a preference. Paragraph 2: a time you were ill — what you had, since when, what you did. Paragraph 3: two pieces of advice for a healthy life. Use at least five connectors, including مَثَلًا and لِذٰلِكَ.',
    range: [45, 90],
    phrases: [['فِي الفُطُورِ … وَفِي الغَدَاءِ …', 'for breakfast … and for lunch …'], ['أُفَضِّلُ … عَلَى … لِأَنَّهُ / لِأَنَّهَا …', 'I prefer … to … because it …'], ['كَانَ عِنْدِي … مُنْذُ … ، لِذٰلِكَ …', 'I had … for …, so …'], ['أَوَّلًا يَجِبُ أَنْ … وَأَخِيرًا …', 'firstly we must … and finally …']],
    coreFrames: [
      { ar: 'فِي الفُطُورِ آكُلُ ______ ، وَفِي الغَدَاءِ ______ .', en: '¶1 For breakfast I eat …, and for lunch …' },
      { ar: 'طَعَامِي المُفَضَّلُ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: '¶1 My favourite food is … because it is …' },
      { ar: 'كَانَ عِنْدِي ______ ، لِذٰلِكَ ______ .', en: '¶2 I had …, so …' },
      { ar: 'أَوَّلًا يَجِبُ أَنْ ______ .', en: '¶3 Firstly we must …' },
      { ar: 'وَأَخِيرًا مِنَ الأَفْضَلِ أَنْ ______ .', en: '¶3 And finally it is better to …' },
    ],
    developFrames: [
      { ar: 'مَثَلًا، ______ .', en: 'For example, …' },
      { ar: 'أُفَضِّلُ ______ عَلَى ______ .', en: 'I prefer … to …' },
      { ar: 'مُنْذُ ______ .', en: 'For / since …' },
    ],
    bank: ['أَوَّلًا · ثُمَّ', 'بَعْدَ ذٰلِكَ · أَخِيرًا', 'مَثَلًا', 'لِأَنَّ · لِذٰلِكَ', 'لَذِيذٌ · صِحِّيٌّ', 'عِنْدِي … مُنْذُ …', 'يَجِبُ أَنْ', 'مِنَ الأَفْضَلِ أَنْ'],
    model: {
      text: `فِي الفُطُورِ آكُلُ خُبْزًا وَجُبْنًا، وَفِي الغَدَاءِ آكُلُ أَرُزًّا وَسَمَكًا. طَعَامِي المُفَضَّلُ السَّمَكُ لِأَنَّهُ لَذِيذٌ وَصِحِّيٌّ، وَأُفَضِّلُ العَصِيرَ عَلَى المَشْرُوبَاتِ الغَازِيَّةِ.
فِي الشِّتَاءِ كَانَ عِنْدِي زُكَامٌ وَحُمَّى مُنْذُ ثَلَاثَةِ أَيَّامٍ، لِذٰلِكَ ذَهَبْتُ إِلَى الطَّبِيبِ.
أَوَّلًا، يَجِبُ أَنْ نَأْكُلَ طَعَامًا مُتَوَازِنًا، مَثَلًا الفَاكِهَةَ وَالخَضْرَوَاتِ. وَأَخِيرًا، مِنَ الأَفْضَلِ أَنْ نَنَامَ مُبَكِّرًا.`,
      en: '“For breakfast I eat bread and cheese, and for lunch I eat rice and fish. My favourite food is fish because it is tasty and healthy, and I prefer juice to fizzy drinks. / In winter I had a cold and a fever for three days, so I went to the doctor. / Firstly, we must eat a balanced diet, for example fruit and vegetables. And finally, it is better to sleep early.”',
      find: ['لِأَنَّهُ لَذِيذٌ وَصِحِّيٌّ', 'لِذٰلِكَ ذَهَبْتُ', 'مَثَلًا الفَاكِهَةَ', 'وَأَخِيرًا'],
    },
  },
});
