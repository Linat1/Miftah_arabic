'use strict';
/* Apply Workshop · D6-W04 · D6-L07 (D6 grammar: all tenses together) + D6-L08 (reading: implication, tone and attitude). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd6-w04', pair: ['d6-l07', 'd6-l08'],
  title: 'One Tradition, Three Generations', arShort: 'تَقْلِيدٌ وَاحِدٌ وَثَلَاثَةُ أَجْيَالٍ',
  focus: 'Students join the whole tense system with reading for tone: they read two short texts about the same Eid market (one admiring, one critical), find the evidence words and what the tense signals, then tell and write the story of a family tradition across three generations — past habit, present, future and لَنْ, with one relative clause and one passive.',
  sortTitle: 'Admiring or critical?', sortCats: ['Admiring words', 'Critical words'],
  sort: [
    { ar: 'نَابِضٌ بِالحَيَاةِ', cat: 0 }, { ar: 'سَاحِرٌ', cat: 0 }, { ar: 'لَا يُنْسَى', cat: 0 }, { ar: 'دَافِئٌ وَكَرِيمٌ', cat: 0 },
    { ar: 'مُزْدَحِمٌ', cat: 1 }, { ar: 'صَاخِبٌ', cat: 1 }, { ar: 'مُرْهِقٌ', cat: 1 }, { ar: 'غَالٍ جِدًّا', cat: 1 },
  ],
  dialogue: {
    title: 'Grandmother’s tradition', ar: 'تَقْلِيدُ جَدَّتِي',
    lines: [
      ['A', 'مَا التَّقْلِيدُ الَّذِي تُحِبُّهُ فِي عَائِلَتِكَ؟', 'What tradition do you love in your family?'],
      ['B', 'كَعْكُ العِيدِ؛ كَانَتْ جَدَّتِي تَخْبِزُهُ بِيَدَيْهَا كُلَّ سَنَةٍ.', 'Eid biscuits; my grandmother used to bake them with her own hands every year.'],
      ['A', 'وَالآنَ؟', 'And now?'],
      ['B', 'الآنَ تَخْبِزُهُ أُمِّي، وَيُحَضَّرُ فِي لَيْلَةِ العِيدِ، وَهُوَ أَطْيَبُ مِنْ كَعْكِ المَحَلَّاتِ.', 'Now my mother bakes them; they are prepared on the night before Eid, and they are tastier than shop biscuits.'],
      ['A', 'وَفِي المُسْتَقْبَلِ؟', 'And in the future?'],
      ['B', 'سَأَتَعَلَّمُ الوَصْفَةَ، وَلَنْ نَتَخَلَّى عَنْ هٰذَا التَّقْلِيدِ؛ عِلَاوَةً عَلَى ذٰلِكَ سَأُعَلِّمُهُ لِأَوْلَادِي.', 'I will learn the recipe, and we will not give up this tradition; moreover, I will teach it to my children.'],
    ],
    notes: 'All tenses in one text (كَانَتْ تَخْبِزُ · تَخْبِزُ · سَأَتَعَلَّمُ · لَنْ نَتَخَلَّى), a relative clause (الَّذِي), a passive (يُحَضَّرُ), a comparative and a formal connector come from D6-L07; reading the tone and what the tense signals from D6-L08.',
  },
  card: {
    title: 'Reading card — two texts, one Eid market', ar: 'نَصَّانِ عَنْ سُوقِ العِيدِ', you: 'the reader', them: 'the person reading the texts aloud',
    mix: 'reading for attitude, evidence words and what the tense signals (D6-L08) and then producing every tense yourself (D6-L07)',
    tasks: [
      { ex: 'النَّصُّ ١: «سُوقُ العِيدِ نَابِضٌ بِالحَيَاةِ، وَالأَضْوَاءُ سَاحِرَةٌ.» — مَا مَوْقِفُ الكَاتِبِ؟', task: 'Attitude + the evidence words.', plan: 'مَا ← مُعْجَبٌ · الدَّلِيلُ: …', model: 'الكَاتِبُ مُعْجَبٌ بِالسُّوقِ؛ الدَّلِيلُ: «نَابِضٌ بِالحَيَاةِ» وَ«سَاحِرَةٌ».', modelEn: 'The writer admires the market; the evidence: “full of life” and “magical”.' },
      { ex: 'النَّصُّ ٢: «السُّوقُ مُزْدَحِمٌ وَصَاخِبٌ، وَالأَسْعَارُ مُرْهِقَةٌ.» — وَهٰذَا الكَاتِبُ؟', task: 'Same facts, different tone.', plan: 'وَ ← نَاقِدٌ · الدَّلِيلُ: …', model: 'هٰذَا الكَاتِبُ نَاقِدٌ؛ الدَّلِيلُ: «مُزْدَحِمٌ» وَ«صَاخِبٌ» وَ«مُرْهِقَةٌ».', modelEn: 'This writer is critical; the evidence: “crowded”, “noisy” and “exhausting”.' },
      { ex: '«كَانَ السُّوقُ مَشْهُورًا بِالحَلْوَى.» — هَلْ مَا زَالَ مَشْهُورًا؟', task: 'What does the tense signal?', plan: '______________', model: 'لَا نَعْرِفُ؛ «كَانَ» تَدُلُّ عَلَى المَاضِي، وَالنَّصُّ لَا يَذْكُرُ الحَاضِرَ.', modelEn: 'We don’t know; “kāna” points to the past, and the text does not mention the present.' },
      { ex: 'مَا التَّقْلِيدُ الَّذِي كَانَتْ عَائِلَتُكَ تَتَمَسَّكُ بِهِ؟', task: 'A past habit + a relative clause.', plan: '______________', model: 'التَّقْلِيدُ الَّذِي أُحِبُّهُ هُوَ زِيَارَةُ الأَقَارِبِ؛ كَانَ جَدِّي يَزُورُهُمْ كُلَّ عِيدٍ.', modelEn: 'The tradition I love is visiting relatives; my grandfather used to visit them every Eid.' },
      { unexpected: true, ex: 'هَلْ سَتَتَمَسَّكُ بِهِ فِي المُسْتَقْبَلِ؟', task: 'Future + لَنْ + a formal connector.', plan: '______________', model: 'نَعَمْ، لَنْ أَتَخَلَّى عَنْهُ؛ عِلَاوَةً عَلَى ذٰلِكَ، سَأُعَلِّمُهُ لِإِخْوَتِي الصِّغَارِ.', modelEn: 'Yes, I will not give it up; moreover, I will teach it to my younger siblings.' },
    ],
    foot: 'Partner A reads the texts twice. Name the attitude and quote the evidence words; say what the tense tells you. Tasks 4 and ! are your tradition. Then swap.',
    girl: 'هَلْ سَتَتَمَسَّكِينَ بِهِ؟ · مَا التَّقْلِيدُ الَّذِي كَانَتْ عَائِلَتُكِ …؟',
  },
  talk: {
    title: 'A tradition across three generations', ar: 'تَقْلِيدٌ عَبْرَ الأَجْيَالِ',
    text: 'Talk for one minute about one family tradition across three generations: how it used to be (كَانَ / كَانَتْ + present), how it is now (with a passive), and what will happen to it (a future and a لَنْ sentence). Add one relative clause, one comparative and one formal connector — and say it once admiringly, once critically.',
    routes: {
      core: 'كَانَتْ جَدَّتِي تَخْبِزُ … · الآنَ … · سَأَتَعَلَّمُ …',
      develop: 'Add a passive (يُحَضَّرُ · تُزَيَّنُ) and التَّقْلِيدُ الَّذِي …',
      stretch: 'Add لَنْ نَتَخَلَّى عَنْ …, a comparative and عِلَاوَةً عَلَى ذٰلِكَ; then switch the tone.',
    },
  },
  task: {
    title: 'One tradition, the whole grammar system', ar: 'تَقْلِيدٌ وَاحِدٌ',
    text: 'Write a paragraph (about 60–80 words) about a family tradition across three generations. Include and underline: • a past habit (كَانَ / كَانَتْ + present) • a present-tense sentence • a future and a لَنْ sentence • ONE relative clause • ONE passive • ONE comparative • ONE formal connector. Then add one sentence that rewrites a fact in a critical tone.',
    range: [45, 100],
    phrases: [['كَانَتْ جَدَّتِي تَخْبِزُ …', 'my grandmother used to bake …'], ['التَّقْلِيدُ الَّذِي … · العَادَةُ الَّتِي …', 'the tradition that … · the custom that …'], ['يُحَضَّرُ … · تُزَيَّنُ …', '… is prepared · … is decorated'], ['لَنْ نَتَخَلَّى عَنْ … · عِلَاوَةً عَلَى ذٰلِكَ …', 'we will not give up … · moreover …']],
    coreFrames: [
      { ar: 'التَّقْلِيدُ الَّذِي أُحِبُّهُ هُوَ ______ .', en: 'The tradition I love is …' },
      { ar: 'كَانَتْ جَدَّتِي / كَانَ جَدِّي ______ .', en: 'My grandmother / grandfather used to …' },
      { ar: 'الآنَ ______ ، وَيُحَضَّرُ / تُحَضَّرُ ______ .', en: 'Now …, and … is prepared …' },
      { ar: 'سَوْفَ ______ ، وَلَنْ نَتَخَلَّى عَنْ ______ .', en: 'I will …, and we will not give up …' },
    ],
    developFrames: [
      { ar: '______ أَطْيَبُ / أَجْمَلُ مِنْ ______ .', en: '… is tastier / more beautiful than …' },
      { ar: 'عِلَاوَةً عَلَى ذٰلِكَ، ______ .', en: 'Moreover, …' },
      { ar: 'وَبِنَبْرَةٍ نَاقِدَةٍ: ______ .', en: 'And in a critical tone: …' },
    ],
    bank: ['كَانَتْ تَخْبِزُ · كَانَ يَزُورُ', 'الَّذِي · الَّتِي', 'يُحَضَّرُ · تُزَيَّنُ', 'سَأَتَعَلَّمُ · سَنُعَلِّمُ', 'لَنْ نَتَخَلَّى عَنْ', 'أَطْيَبُ مِنْ', 'عِلَاوَةً عَلَى ذٰلِكَ', 'نَابِضٌ · مُزْدَحِمٌ'],
    model: {
      text: 'التَّقْلِيدُ الَّذِي أُحِبُّهُ هُوَ كَعْكُ العِيدِ. كَانَتْ جَدَّتِي تَخْبِزُهُ بِيَدَيْهَا، وَكَانَ الجِيرَانُ يَأْتُونَ لِيُسَاعِدُوهَا. الآنَ تَخْبِزُهُ أُمِّي، وَيُحَضَّرُ فِي لَيْلَةِ العِيدِ، وَهُوَ أَطْيَبُ مِنْ كَعْكِ المَحَلَّاتِ. سَأَتَعَلَّمُ الوَصْفَةَ هٰذِهِ السَّنَةَ، وَلَنْ نَتَخَلَّى عَنْ هٰذَا التَّقْلِيدِ أَبَدًا؛ عِلَاوَةً عَلَى ذٰلِكَ، سَأُعَلِّمُهُ لِأَوْلَادِي. وَبِنَبْرَةٍ نَاقِدَةٍ: لَيْلَةُ الخَبْزِ مُرْهِقَةٌ، وَالمَطْبَخُ مُزْدَحِمٌ جِدًّا!',
      en: '“The tradition I love is Eid biscuits. My grandmother used to bake them with her own hands, and the neighbours used to come to help her. Now my mother bakes them; they are prepared on the night before Eid, and they are tastier than shop biscuits. I will learn the recipe this year, and we will never give up this tradition; moreover, I will teach it to my children. And in a critical tone: baking night is exhausting, and the kitchen is very crowded!”',
      find: ['التَّقْلِيدُ الَّذِي', 'كَانَتْ جَدَّتِي تَخْبِزُهُ', 'وَيُحَضَّرُ', 'لَنْ نَتَخَلَّى'],
    },
  },
});
