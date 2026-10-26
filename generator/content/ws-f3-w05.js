'use strict';
/* Apply Workshop · F3-W05 · F3-L09 (extended writing: home and family) + F3-L10 (speaking: family and home). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f3-w05', pair: ['f3-l09', 'f3-l10'],
  title: 'Speak It, Then Write It: Home and Family', arShort: 'تَكَلَّمْ ثُمَّ اكْتُبْ',
  focus: 'Students turn speaking into writing: they decode question words, give two connected sentences per answer in a family-and-home conversation, then plan and write three short paragraphs with connectors — the same ideas, spoken first and written second.',
  sortTitle: 'Question word or connector?', sortCats: ['Connectors · F3-L09', 'Question words · F3-L10'],
  sort: [
    { ar: 'لٰكِنَّ', cat: 0 }, { ar: 'لِأَنَّ', cat: 0 }, { ar: 'لِذٰلِكَ', cat: 0 }, { ar: 'أَيْضًا', cat: 0 },
    { ar: 'مَعَ مَنْ؟', cat: 1 }, { ar: 'كَمْ؟', cat: 1 }, { ar: 'لِمَاذَا؟', cat: 1 }, { ar: 'أَيْنَ؟', cat: 1 },
  ],
  dialogue: {
    title: 'A conversation in two sentences', ar: 'جُمْلَتَانِ فِي كُلِّ جَوَابٍ',
    lines: [
      ['A', 'مَعَ مَنْ تَسْكُنُ؟', 'Who do you live with?'],
      ['B', 'أَسْكُنُ مَعَ أَبِي وَأُمِّي وَأُخْتِي. أُخْتِي الكُبْرَى ذَكِيَّةٌ وَمُضْحِكَةٌ.', 'I live with my father, my mother and my sister. My older sister is clever and funny.'],
      ['A', 'أَيْنَ تَسْكُنُ؟', 'Where do you live?'],
      ['B', 'نَسْكُنُ فِي شَقَّةٍ فِي لَنْدَنَ. فِيهَا ثَلَاثُ غُرَفٍ وَشُرْفَةٌ صَغِيرَةٌ.', 'We live in a flat in London. It has three rooms and a small balcony.'],
      ['A', 'لِمَاذَا تُحِبُّ بَيْتَكَ؟', 'Why do you like your home?'],
      ['B', 'أُحِبُّهُ لِأَنَّهُ مُرِيحٌ، لٰكِنَّ غُرْفَتِي صَغِيرَةٌ، لِذٰلِكَ أَدْرُسُ فِي المَكْتَبَةِ.', 'I like it because it is comfortable, but my room is small, so I study in the library.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: answer with YOUR facts — always two sentences, always one connector.',
    notes: 'The question words and “two sentences per answer” come from F3-L10; the connectors (لِأَنَّ · لٰكِنَّ · لِذٰلِكَ) from F3-L09. Line 6 shows a speaking answer that is already a written paragraph.',
  },
  card: {
    title: 'Role-play card — the practice speaking test', ar: 'اخْتِبَارُ المُحَادَثَةِ', you: 'the candidate', them: 'the examiner',
    mix: 'decoding question words and two connected sentences (F3-L10) with connectors and opinions from the three-paragraph plan (F3-L09)',
    tasks: [
      { ex: 'كَمْ شَخْصًا فِي عَائِلَتِكَ؟', task: 'Number + who (two sentences).', plan: 'كَمْ ← فِي عَائِلَتِي … أَشْخَاصٍ. …', model: 'فِي عَائِلَتِي أَرْبَعَةُ أَشْخَاصٍ. أَبِي وَأُمِّي وَأَخِي الصَّغِيرُ وَأَنَا.', modelEn: 'There are four people in my family. My father, my mother, my little brother and me.' },
      { ex: 'صِفْ شَخْصًا فِي عَائِلَتِكَ.', task: 'Appearance + personality.', plan: 'صِفْ ← … هُوَ / هِيَ … وَ…', model: 'أُمِّي قَصِيرَةٌ، وَشَعْرُهَا بُنِّيٌّ. هِيَ لَطِيفَةٌ وَمُجْتَهِدَةٌ جِدًّا.', modelEn: 'My mother is short, and her hair is brown. She is very kind and hard-working.' },
      { ex: 'أَيْنَ تَسْكُنُ؟ صِفْ بَيْتَكَ.', task: 'Where + two rooms or features.', plan: 'أَيْنَ / صِفْ ← نَسْكُنُ فِي … ، فِيهِ …', model: 'نَسْكُنُ فِي بَيْتٍ فِي لُوتِن. فِيهِ مَطْبَخٌ كَبِيرٌ وَحَدِيقَةٌ جَمِيلَةٌ.', modelEn: 'We live in a house in Luton. It has a big kitchen and a lovely garden.' },
      { ex: 'مَا رَأْيُكَ فِي بَيْتِكَ؟', task: 'Opinion + reason + a “but”.', plan: 'مَا ← أُحِبُّهُ لِأَنَّ … ، لٰكِنَّ …', model: 'أُحِبُّهُ لِأَنَّ الحَدِيقَةَ كَبِيرَةٌ، لٰكِنَّ البَيْتَ بَعِيدٌ عَنِ المَدْرَسَةِ.', modelEn: 'I like it because the garden is big, but the house is far from school.' },
      { unexpected: true, ex: 'مَعَ مَنْ تُشَارِكُ غُرْفَتَكَ؟', task: 'Answer; if unsure, use a repair phrase first.', plan: 'مَعَ مَنْ ← مَرَّةً أُخْرَى … / أُشَارِكُهَا مَعَ …', model: 'مَرَّةً أُخْرَى، مِنْ فَضْلِكَ؟ … أُشَارِكُ غُرْفَتِي مَعَ أَخِي، لِذٰلِكَ هِيَ مُزْدَحِمَةٌ قَلِيلًا!', modelEn: 'Once more, please? … I share my room with my brother, so it is a little crowded!' },
    ],
    girl: 'كَمْ شَخْصًا فِي عَائِلَتِكِ؟ · صِفِي · أَيْنَ تَسْكُنِينَ؟ · مَا رَأْيُكِ؟ · مَعَ مَنْ تُشَارِكِينَ غُرْفَتَكِ؟',
  },
  talk: {
    title: 'One minute: my family and my home', ar: 'دَقِيقَةٌ عَنْ عَائِلَتِي وَبَيْتِي',
    text: 'Talk for 30–45 seconds without stopping, in three parts — like the three paragraphs you will write: (1) your family and one person described, (2) your home and your room, (3) your opinion with a reason and a “but”.',
    routes: {
      core: 'فِي عَائِلَتِي … · نَسْكُنُ فِي … · أُحِبُّ بَيْتِي لِأَنَّ …',
      develop: 'Two sentences in each part, joined with وَ · أَيْضًا.',
      stretch: 'Use لٰكِنَّ and لِذٰلِكَ, and a repair phrase if you need time: دَعْنِي أُفَكِّرُ قَلِيلًا …',
    },
    phrases: [['أَوَّلًا … ثُمَّ …', 'first … then …'], ['لِأَنَّ … · لٰكِنَّ …', 'because … · but …'], ['لِذٰلِكَ …', 'so, that is why …'], ['دَعْنِي أُفَكِّرُ قَلِيلًا …', 'let me think a little …']],
  },
  task: {
    title: 'My home and family: three paragraphs', ar: 'بَيْتِي وَعَائِلَتِي',
    text: 'Write three short paragraphs (about 45–65 words) using what you SAID today as your plan. Paragraph 1: your family — who, and one person described. Paragraph 2: your home and your room. Paragraph 3: your opinion — what you like and don’t like, and why. Use at least four connectors.',
    range: [40, 90],
    phrases: [['فِي عَائِلَتِي … أَشْخَاصٍ', 'there are … people in my family'], ['نَسْكُنُ فِي … ، فِيهِ / فِيهَا …', 'we live in …; it has …'], ['أُحِبُّ … لِأَنَّ …', 'I like … because …'], ['لٰكِنَّ … ، لِذٰلِكَ …', 'but …, so …']],
    coreFrames: [
      { ar: 'فِي عَائِلَتِي ______ أَشْخَاصٍ: ______ .', en: '¶1 There are … people in my family: …' },
      { ar: '______ هُوَ / هِيَ ______ وَ ______ .', en: '¶1 (person) is … and …' },
      { ar: 'نَسْكُنُ فِي ______ فِي ______ .', en: '¶2 We live in a … in …' },
      { ar: 'فِي غُرْفَتِي ______ وَ ______ .', en: '¶2 In my room there is … and …' },
      { ar: 'أُحِبُّ بَيْتِي لِأَنَّ ______ .', en: '¶3 I like my home because …' },
    ],
    developFrames: [
      { ar: 'لٰكِنَّ ______ ، لِذٰلِكَ ______ .', en: '¶3 But …, so …' },
      { ar: 'فِي رَأْيِي ______ .', en: '¶3 In my opinion …' },
      { ar: 'وَ ______ أَيْضًا.', en: 'And … too.' },
    ],
    bank: ['وَ · أَيْضًا', 'ثُمَّ', 'لِأَنَّ', 'لٰكِنَّ', 'لِذٰلِكَ', 'فِي رَأْيِي', 'فِيهِ · فِيهَا', 'هُوَ · هِيَ'],
    model: {
      text: `فِي عَائِلَتِي خَمْسَةُ أَشْخَاصٍ: أَبِي وَأُمِّي وَأُخْتَايَ وَأَنَا. أُخْتِي الكُبْرَى طَوِيلَةٌ، وَهِيَ ذَكِيَّةٌ وَمُضْحِكَةٌ.
نَسْكُنُ فِي شَقَّةٍ فِي لَنْدَنَ، فِيهَا ثَلَاثُ غُرَفٍ وَشُرْفَةٌ. فِي غُرْفَتِي سَرِيرٌ أَزْرَقُ وَمَكْتَبٌ صَغِيرٌ.
فِي رَأْيِي شَقَّتُنَا مُرِيحَةٌ، وَأُحِبُّهَا لِأَنَّهَا قَرِيبَةٌ مِنَ المَدْرَسَةِ. لٰكِنَّ غُرْفَتِي صَغِيرَةٌ، لِذٰلِكَ أَدْرُسُ فِي المَكْتَبَةِ أَحْيَانًا.`,
      en: '“There are five people in my family: my father, my mother, my two sisters and me. My older sister is tall, and she is clever and funny. / We live in a flat in London; it has three rooms and a balcony. In my room there is a blue bed and a small desk. / In my opinion our flat is comfortable, and I like it because it is near the school. But my room is small, so sometimes I study in the library.”',
      find: ['ذَكِيَّةٌ وَمُضْحِكَةٌ', 'فِيهَا ثَلَاثُ غُرَفٍ', 'لِأَنَّهَا قَرِيبَةٌ', 'لِذٰلِكَ أَدْرُسُ'],
    },
  },
});
