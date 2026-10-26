'use strict';
/* Apply Workshop · D4-W05 · D4-L09 (writing: environment and technology article) + D4-L10 (listening: environment and technology news). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd4-w05', pair: ['d4-l09', 'd4-l10'],
  title: 'The Eco News Desk, Then the Article', arShort: 'نَشْرَةُ الأَخْبَارِ البِيئِيَّةِ',
  focus: 'Students join news listening with opinion writing: at a school news desk they listen to environment and technology news (who said what, the final detail after بَدَلًا مِنْ, exact figures), use one news item as evidence, and write a four-paragraph opinion article: “Can technology save the environment?”',
  sortTitle: 'News report or article move?', sortCats: ['Article moves · D4-L09', 'News reporting · D4-L10'],
  sort: [
    { ar: 'أَعْتَقِدُ أَنَّ …', cat: 0 }, { ar: 'يَرَى البَعْضُ أَنَّ …', cat: 0 }, { ar: 'عِلَاوَةً عَلَى ذٰلِكَ', cat: 0 }, { ar: 'فِي الخِتَامِ', cat: 0 },
    { ar: 'أَعْلَنَ الوَزِيرُ أَنَّ …', cat: 1 }, { ar: 'حَذَّرَ الخَبِيرُ مِنْ …', cat: 1 }, { ar: 'بَدَلًا مِنْ …', cat: 1 }, { ar: 'ارْتَفَعَ مِنْ … إِلَى …', cat: 1 },
  ],
  dialogue: {
    title: 'News desk briefing', ar: 'اجْتِمَاعُ غُرْفَةِ الأَخْبَارِ',
    lines: [
      ['A', 'مَا الخَبَرُ الأَوَّلُ؟', 'What is the first news item?'],
      ['B', 'أَعْلَنَتِ البَلَدِيَّةُ أَنَّ الحَافِلَاتِ الكَهْرَبَائِيَّةَ سَتَبْدَأُ فِي الخَرِيفِ، بَدَلًا مِنَ الصَّيْفِ.', 'The council announced that the electric buses will start in autumn, instead of summer.'],
      ['A', 'وَمَاذَا قَالَ الخَبِيرُ؟', 'And what did the expert say?'],
      ['B', 'حَذَّرَ مِنْ تَلَوُّثِ الهَوَاءِ، وَأَضَافَ أَنَّ عَدَدَ السَّيَّارَاتِ ارْتَفَعَ مِنْ أَلْفٍ إِلَى أَلْفَيْنِ.', 'He warned of air pollution, and added that the number of cars rose from one thousand to two thousand.'],
      ['A', 'هٰذَا دَلِيلٌ جَيِّدٌ لِمَقَالَتِنَا.', 'This is good evidence for our article.'],
      ['B', 'نَعَمْ! أَعْتَقِدُ أَنَّ التِّكْنُولُوجِيَا تُسَاعِدُ، وَلٰكِنْ يَرَى البَعْضُ أَنَّهَا غَالِيَةٌ؛ مَعَ ذٰلِكَ …', 'Yes! I think technology helps, but some people think it is expensive; however …'],
    ],
    notes: 'Reporting verbs (أَعْلَنَ · حَذَّرَ مِنْ · أَضَافَ أَنَّ), the final detail after بَدَلًا مِنْ and figures (مِنْ … إِلَى …) come from D4-L10; thesis, counterargument and مَعَ ذٰلِكَ from D4-L09.',
  },
  card: {
    title: 'Listening card — the eco news bulletin', ar: 'النَّشْرَةُ البِيئِيَّةُ', you: 'the listener', them: 'the newsreader',
    mix: 'who said what, the final detail and exact figures in the news (D4-L10), then using one item as evidence in an argument (D4-L09)',
    tasks: [
      { ex: '«أَكَّدَ الوَزِيرُ أَنَّ المَشْرُوعَ سَيَبْدَأُ فِي الصَّيْفِ، بَدَلًا مِنَ الرَّبِيعِ.» — مَتَى يَبْدَأُ؟', task: 'The final detail after بَدَلًا مِنْ.', plan: 'مَتَى ← فِي … (لَيْسَ فِي …)', model: 'فِي الصَّيْفِ، لَيْسَ فِي الرَّبِيعِ.', modelEn: 'In summer, not in spring.' },
      { ex: '«حَذَّرَتْ خَبِيرَةٌ مِنْ نَقْصِ المِيَاهِ.» — مَنْ حَذَّرَ؟ وَمِمَّ؟', task: 'Who said it and what about.', plan: 'مَنْ ← خَبِيرَةٌ · مِمَّ ← مِنْ …', model: 'خَبِيرَةٌ حَذَّرَتْ مِنْ نَقْصِ المِيَاهِ.', modelEn: 'An expert (woman) warned of a water shortage.' },
      { ex: '«ارْتَفَعَ عَدَدُ الدَّرَّاجَاتِ فِي المَدِينَةِ مِنْ خَمْسِمِئَةٍ إِلَى أَلْفٍ.» — كَمْ عَدَدُهَا الآنَ؟', task: 'The exact figure.', plan: '______________', model: 'أَلْفُ دَرَّاجَةٍ؛ تَضَاعَفَ العَدَدُ.', modelEn: 'A thousand bikes; the number has doubled.' },
      { ex: 'كَيْفَ تَسْتَخْدِمُ هٰذَا الخَبَرَ فِي مَقَالَتِكَ؟', task: 'Turn a news item into evidence.', plan: '______________', model: 'عَلَى سَبِيلِ المِثَالِ، ارْتَفَعَ عَدَدُ الدَّرَّاجَاتِ إِلَى أَلْفٍ، مِمَّا يَعْنِي أَنَّ النَّاسَ يُغَيِّرُونَ عَادَاتِهِمْ.', modelEn: 'For example, the number of bikes rose to a thousand, which means people are changing their habits.' },
      { unexpected: true, ex: 'وَمَا رَأْيُ مَنْ يُخَالِفُكَ؟ وَكَيْفَ تَرُدُّ؟', task: 'Counterargument + your answer.', plan: '______________', model: 'يَرَى البَعْضُ أَنَّ التِّكْنُولُوجِيَا غَالِيَةٌ؛ مَعَ ذٰلِكَ، تُوَفِّرُ المَالَ عَلَى المَدَى الطَّوِيلِ.', modelEn: 'Some think technology is expensive; however, it saves money in the long run.' },
    ],
    foot: 'Partner A reads each news line twice. Answer with the exact detail first (who · when · how many), then a full sentence. Tasks 4 and ! prepare your article. Then swap.',
    girl: 'كَيْفَ تَسْتَخْدِمِينَ هٰذَا الخَبَرَ؟ · وَكَيْفَ تَرُدِّينَ؟',
  },
  talk: {
    title: 'Read the news — then give your view', ar: 'اقْرَأِ الخَبَرَ ثُمَّ أَبْدِ رَأْيَكَ',
    text: 'Speak for one minute as a newsreader and then a commentator: read one eco news item (a reporting verb, a figure that rises or falls, a change with بَدَلًا مِنْ), then give your thesis, one argument with this item as evidence, a counterargument and your answer.',
    routes: {
      core: 'أَعْلَنَ … أَنَّ … · أَعْتَقِدُ أَنَّ …',
      develop: 'Add ارْتَفَعَ مِنْ … إِلَى … and عَلَى سَبِيلِ المِثَالِ …',
      stretch: 'Add بَدَلًا مِنْ, يَرَى البَعْضُ أَنَّ … ؛ مَعَ ذٰلِكَ … and a conclusion.',
    },
  },
  task: {
    title: 'Opinion article: can technology save the environment?', ar: 'هَلْ تُنْقِذُ التِّكْنُولُوجِيَا البِيئَةَ؟',
    text: 'Write an article (about 60–80 words) in four paragraphs for the school magazine. ¶1 your thesis. ¶2 your main argument, with a news item from today as evidence (who said it, a figure). ¶3 a counterargument and your answer (مَعَ ذٰلِكَ …). ¶4 a conclusion that brings both sides together.',
    range: [50, 100],
    phrases: [['أَعْتَقِدُ أَنَّ …', 'I believe that …'], ['أَعْلَنَ … أَنَّ … · ارْتَفَعَ مِنْ … إِلَى …', '… announced that … · rose from … to …'], ['يَرَى البَعْضُ أَنَّ … ؛ مَعَ ذٰلِكَ …', 'some think that … ; however …'], ['فِي الخِتَامِ …', 'in conclusion …']],
    coreFrames: [
      { ar: 'أَعْتَقِدُ أَنَّ التِّكْنُولُوجِيَا ______ .', en: '¶1 I believe that technology …' },
      { ar: 'عَلَى سَبِيلِ المِثَالِ، أَعْلَنَ ______ أَنَّ ______ .', en: '¶2 For example, … announced that …' },
      { ar: 'ارْتَفَعَ / انْخَفَضَ ______ مِنْ ______ إِلَى ______ .', en: '¶2 … rose / fell from … to …' },
      { ar: 'يَرَى البَعْضُ أَنَّ ______ ؛ مَعَ ذٰلِكَ، ______ .', en: '¶3 Some think that …; however, …' },
      { ar: 'فِي الخِتَامِ، ______ .', en: '¶4 In conclusion, …' },
    ],
    developFrames: [
      { ar: 'عِلَاوَةً عَلَى ذٰلِكَ، ______ .', en: 'Moreover, …' },
      { ar: 'مِمَّا يَعْنِي أَنَّ ______ .', en: 'which means that …' },
    ],
    bank: ['أَعْتَقِدُ أَنَّ', 'أَعْلَنَ · أَكَّدَ · حَذَّرَ مِنْ', 'أَضَافَ أَنَّ', 'بَدَلًا مِنْ', 'ارْتَفَعَ · انْخَفَضَ', 'عِلَاوَةً عَلَى ذٰلِكَ', 'يَرَى البَعْضُ أَنَّ · مَعَ ذٰلِكَ', 'فِي الخِتَامِ'],
    model: {
      text: `أَعْتَقِدُ أَنَّ التِّكْنُولُوجِيَا تَسْتَطِيعُ أَنْ تُسَاعِدَ البِيئَةَ كَثِيرًا.
عَلَى سَبِيلِ المِثَالِ، أَعْلَنَتِ البَلَدِيَّةُ أَنَّ الحَافِلَاتِ الكَهْرَبَائِيَّةَ سَتَبْدَأُ فِي الخَرِيفِ، وَارْتَفَعَ عَدَدُ الدَّرَّاجَاتِ مِنْ خَمْسِمِئَةٍ إِلَى أَلْفٍ، مِمَّا يَعْنِي أَنَّ الهَوَاءَ سَيَكُونُ أَنْظَفَ.
يَرَى البَعْضُ أَنَّ هٰذِهِ التِّكْنُولُوجِيَا غَالِيَةٌ؛ مَعَ ذٰلِكَ، تُوَفِّرُ المَالَ عَلَى المَدَى الطَّوِيلِ.
فِي الخِتَامِ، التِّكْنُولُوجِيَا مُفِيدَةٌ، وَلٰكِنَّهَا تَحْتَاجُ إِلَى تَغْيِيرِ عَادَاتِنَا أَيْضًا.`,
      en: '“I believe that technology can help the environment a lot. / For example, the council announced that electric buses will start in autumn, and the number of bikes rose from five hundred to a thousand, which means the air will be cleaner. / Some think this technology is expensive; however, it saves money in the long run. / In conclusion, technology is useful, but it also needs us to change our habits.”',
      find: ['أَعْتَقِدُ أَنَّ', 'أَعْلَنَتِ البَلَدِيَّةُ', 'يَرَى البَعْضُ أَنَّ', 'فِي الخِتَامِ'],
    },
  },
});
