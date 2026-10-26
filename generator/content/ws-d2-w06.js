'use strict';
/* Apply Workshop · D2-W06 · D2-L11 (writing: people, relationships and style) + D2-L12 (review and unit assessment). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd2-w06', pair: ['d2-l11', 'd2-l12'],
  title: 'A Special Person: Magazine Feature', arShort: 'شَخْصٌ مُمَيَّزٌ',
  focus: 'Students use all of D2 for one real purpose: the school magazine is running a “special people” feature, so they interview each other about someone important (appearance, personality with evidence, relationship, style, opinion), then plan and write a three-paragraph feature, checking agreement, references and connectors.',
  sortTitle: 'Agreement or connector?', sortCats: ['Agreement: m. · f. · plural', 'Connectors and concession'],
  sort: [
    { ar: 'صَبُورَةٌ', cat: 0 }, { ar: 'مُجْتَهِدُونَ', cat: 0 }, { ar: 'شَعْرُهَا طَوِيلٌ', cat: 0 }, { ar: 'عَيْنَاهُ زَرْقَاوَانِ', cat: 0 },
    { ar: 'وَلٰكِنَّ', cat: 1 }, { ar: 'بَيْنَمَا', cat: 1 }, { ar: 'كَمَا أَنَّ', cat: 1 }, { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ', cat: 1 },
  ],
  dialogue: {
    title: 'Interview for the magazine', ar: 'مُقَابَلَةٌ لِلْمَجَلَّةِ',
    lines: [
      ['A', 'أُرِيدُ أَنْ أَكْتُبَ عَنْ شَخْصٍ مُمَيَّزٍ فِي حَيَاتِكَ. مَنْ هُوَ؟', 'I want to write about a special person in your life. Who is it?'],
      ['B', 'خَالَتِي مَرْيَمُ. هِيَ طَبِيبَةٌ، وَهِيَ طَوِيلَةُ القَامَةِ وَشَعْرُهَا أَسْوَدُ.', 'My aunt Maryam. She is a doctor, and she is tall and her hair is black.'],
      ['A', 'كَيْفَ شَخْصِيَّتُهَا؟', 'What is her personality like?'],
      ['B', 'هِيَ صَبُورَةٌ وَكَرِيمَةٌ، كَمَا أَنَّهَا مَرِحَةٌ؛ مَثَلًا، تَزُورُ المَرْضَى فِي العُطْلَةِ.', 'She is patient and generous, and she is also cheerful; for example, she visits patients in the holidays.'],
      ['A', 'وَمَا رَأْيُكَ فِي أُسْلُوبِهَا؟', 'And what do you think of her style?'],
      ['B', 'عَلَى الرَّغْمِ مِنْ أَنَّ مَلَابِسَهَا بَسِيطَةٌ، فَإِنَّهَا أَنِيقَةٌ دَائِمًا.', 'Although her clothes are simple, she is always elegant.'],
    ],
    notes: 'The three-paragraph content (person + appearance · personality + relationship · style + opinion) and كَمَا أَنَّ come from D2-L11; all the D2 structures under review (agreement, evidence, concession) from D2-L12.',
  },
  card: {
    title: 'Role-play card — the magazine interview', ar: 'مُقَابَلَةُ المَجَلَّةِ', you: 'the interviewee', them: 'the magazine reporter',
    mix: 'every D2 structure under review (D2-L12) in the order of the three-paragraph plan (D2-L11)',
    tasks: [
      { ex: 'مَنِ الشَّخْصُ المُمَيَّزُ فِي حَيَاتِكَ؟ وَكَيْفَ يَبْدُو؟', task: 'Who + two appearance details.', plan: 'مَنْ ← … هُوَ / هِيَ … القَامَةِ · شَعْرُهُ / شَعْرُهَا …', model: 'أَخِي الكَبِيرُ حَسَنٌ. هُوَ طَوِيلُ القَامَةِ، وَعَيْنَاهُ بُنِّيَّتَانِ.', modelEn: 'My older brother Hasan. He is tall, and his eyes are brown.' },
      { ex: 'كَيْفَ شَخْصِيَّتُهُ؟ مَا الدَّلِيلُ؟', task: 'Two qualities with evidence.', plan: 'كَيْفَ ← هُوَ … كَمَا أَنَّهُ … ؛ مَثَلًا …', model: 'هُوَ مُجْتَهِدٌ، كَمَا أَنَّهُ صَبُورٌ؛ مَثَلًا، يُسَاعِدُنِي فِي الرِّيَاضِيَّاتِ.', modelEn: 'He is hard-working, and he is also patient; for example, he helps me with maths.' },
      { ex: 'كَيْفَ عَلَاقَتُكُمَا؟ اذْكُرْ شَيْئًا فَعَلْتُمَاهُ مَعًا.', task: 'Relationship + a past example.', plan: '______________', model: 'نَتَفَاهَمُ جَيِّدًا؛ فِي الصَّيْفِ المَاضِي سَافَرْنَا مَعًا إِلَى المَغْرِبِ.', modelEn: 'We get on well; last summer we travelled together to Morocco.' },
      { ex: 'مَا أُسْلُوبُهُ فِي المَلَابِسِ؟', task: 'Style + comparison.', plan: '______________', model: 'يُفَضِّلُ المَلَابِسَ الرِّيَاضِيَّةَ، بَيْنَمَا أَنَا أُحِبُّ المَلَابِسَ الرَّسْمِيَّةَ أَكْثَرَ.', modelEn: 'He prefers sportswear, whereas I like formal clothes more.' },
      { unexpected: true, ex: 'هَلِ المَظْهَرُ مُهِمٌّ فِي رَأْيِكَ؟', task: 'A balanced opinion with a concession.', plan: '______________', model: 'عَلَى الرَّغْمِ مِنْ أَنَّ المَظْهَرَ مُهِمٌّ قَلِيلًا، فَإِنَّ الشَّخْصِيَّةَ أَهَمُّ بِكَثِيرٍ.', modelEn: 'Although appearance is a little important, personality is much more important.' },
    ],
    girl: 'مَنِ الشَّخْصُ المُمَيَّزُ فِي حَيَاتِكِ؟ · كَيْفَ عَلَاقَتُكُمَا؟ · هَلِ المَظْهَرُ مُهِمٌّ فِي رَأْيِكِ؟',
  },
  talk: {
    title: 'My special person — the spoken feature', ar: 'شَخْصِي المُمَيَّزُ',
    text: 'Talk for one minute in three parts, like the three paragraphs you will write: (1) who and what they look like, (2) personality with evidence and your relationship with a past example, (3) style and a balanced opinion with a concession.',
    routes: {
      core: 'هُوَ / هِيَ … · شَعْرُهُ / شَعْرُهَا … · أُحِبُّهُ / أُحِبُّهَا لِأَنَّ …',
      develop: 'Add كَمَا أَنَّ … and a past example (فِي الصَّيْفِ المَاضِي …).',
      stretch: 'Add بَيْنَمَا, a superlative and عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …',
    },
  },
  task: {
    title: 'Magazine feature: a special person', ar: 'شَخْصٌ مُمَيَّزٌ فِي حَيَاتِي',
    text: 'Write a magazine feature (about 60–80 words) in three paragraphs. ¶1 who they are and what they look like (hair masculine, eyes dual). ¶2 personality with evidence, and your relationship with something you did together. ¶3 their style and your balanced opinion with a concession. Then check agreement, references (-hu / -hā) and connectors with your buddy.',
    range: [50, 100],
    phrases: [['سَأَكْتُبُ عَنْ … لِأَنَّ …', 'I will write about … because …'], ['هُوَ / هِيَ … ، كَمَا أَنَّهُ / أَنَّهَا …', 'he / she is …, and he / she is also …'], ['مَثَلًا، فِي الصَّيْفِ المَاضِي …', 'for example, last summer …'], ['عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …', 'although …, …']],
    coreFrames: [
      { ar: 'سَأَكْتُبُ عَنْ ______ لِأَنَّ ______ .', en: '¶1 I will write about … because …' },
      { ar: 'هُوَ / هِيَ ______ القَامَةِ، وَشَعْرُهُ / شَعْرُهَا ______ .', en: '¶1 He / she is …, and his / her hair is …' },
      { ar: 'هُوَ / هِيَ ______ ، كَمَا أَنَّهُ / أَنَّهَا ______ .', en: '¶2 He / she is …, and also …' },
      { ar: 'فِي الصَّيْفِ المَاضِي ______ مَعًا.', en: '¶2 Last summer we … together.' },
      { ar: 'يَرْتَدِي / تَرْتَدِي ______ .', en: '¶3 He / she wears …' },
    ],
    developFrames: [
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .', en: '¶3 Although …, …' },
      { ar: 'فِي رَأْيِي هُوَ / هِيَ أَطْيَبُ / أَكْرَمُ شَخْصٍ أَعْرِفُهُ.', en: '¶3 In my opinion he / she is the kindest / most generous person I know.' },
    ],
    bank: ['القَامَةِ · شَعْرُهُ · شَعْرُهَا', 'عَيْنَاهُ · عَيْنَاهَا', 'صَبُورٌ · كَرِيمَةٌ', 'كَمَا أَنَّ', 'مَثَلًا', 'نَتَفَاهَمُ · أَحْتَرِمُهُ', 'بَيْنَمَا · وَلٰكِنَّ', 'عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّ …'],
    model: {
      text: `سَأَكْتُبُ عَنْ خَالَتِي مَرْيَمَ، لِأَنَّهَا قُدْوَتِي. هِيَ طَبِيبَةٌ، وَهِيَ طَوِيلَةُ القَامَةِ، وَشَعْرُهَا أَسْوَدُ، وَعَيْنَاهَا بُنِّيَّتَانِ.
هِيَ صَبُورَةٌ وَكَرِيمَةٌ، كَمَا أَنَّهَا مَرِحَةٌ؛ مَثَلًا، تَزُورُ المَرْضَى فِي العُطْلَةِ. نَتَفَاهَمُ جَيِّدًا، وَفِي الصَّيْفِ المَاضِي زُرْنَا المَتْحَفَ مَعًا.
تَرْتَدِي مَلَابِسَ بَسِيطَةً. عَلَى الرَّغْمِ مِنْ أَنَّ مَلَابِسَهَا لَيْسَتْ غَالِيَةً، فَإِنَّهَا أَنِيقَةٌ دَائِمًا. فِي رَأْيِي هِيَ أَطْيَبُ شَخْصٍ أَعْرِفُهُ.`,
      en: '“I will write about my aunt Maryam, because she is my role model. She is a doctor; she is tall, her hair is black and her eyes are brown. / She is patient and generous, and she is also cheerful; for example, she visits patients in the holidays. We get on well, and last summer we visited the museum together. / She wears simple clothes. Although her clothes are not expensive, she is always elegant. In my opinion she is the kindest person I know.”',
      find: ['عَيْنَاهَا بُنِّيَّتَانِ', 'كَمَا أَنَّهَا مَرِحَةٌ', 'فِي الصَّيْفِ المَاضِي', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
    },
  },
});
