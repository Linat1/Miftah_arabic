'use strict';
/* Apply Workshop · D2-W05 · D2-L09 (topic conversation) + D2-L10 (describing people: the one-minute portrait). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd2-w05', pair: ['d2-l09', 'd2-l10'],
  title: 'Speaking Test Rehearsal: Someone Who Matters', arShort: 'تَدْرِيبٌ عَلَى اخْتِبَارِ التَّحَدُّثِ',
  focus: 'Students rehearse the speaking test with both lessons: a one-minute, six-stage portrait of someone who matters to them, followed by a topic conversation in which every answer is built (direct answer → reason → past example → comparison), with repair phrases and a question back — then they write the script.',
  sortTitle: 'Portrait stage or conversation move?', sortCats: ['Building a conversation answer · D2-L09', 'Portrait stages · D2-L10'],
  sort: [
    { ar: 'مَثَلًا، أَمْسِ …', cat: 0 }, { ar: 'وَأَنْتَ؟', cat: 0 }, { ar: 'هَلْ تَقْصِدُ …؟', cat: 0 }, { ar: 'أَكْثَرُ مِنْ …', cat: 0 },
    { ar: 'سَأَصِفُ …', cat: 1 }, { ar: 'هِيَ طَوِيلَةُ القَامَةِ', cat: 1 }, { ar: 'أَحْتَرِمُهَا لِأَنَّ …', cat: 1 }, { ar: 'أَخِيرًا، فِي رَأْيِي …', cat: 1 },
  ],
  dialogue: {
    title: 'Examiner and candidate', ar: 'المُمْتَحِنُ وَالطَّالِبُ',
    lines: [
      ['A', 'صِفْ شَخْصًا مُهِمًّا فِي حَيَاتِكَ.', 'Describe an important person in your life.'],
      ['B', 'سَأَصِفُ جَدَّتِي، لِأَنَّهَا عَلَّمَتْنِي الكَثِيرَ. هِيَ قَصِيرَةُ القَامَةِ، وَعَيْنَاهَا سَوْدَاوَانِ.', 'I will describe my grandmother, because she taught me a lot. She is short, and her eyes are black.'],
      ['A', 'كَيْفَ عَلَاقَتُكَ بِهَا؟', 'What is your relationship with her like?'],
      ['B', 'أَحْتَرِمُهَا كَثِيرًا. مَثَلًا، فِي الصَّيْفِ المَاضِي طَبَخْنَا مَعًا كُلَّ يَوْمٍ.', 'I respect her a lot. For example, last summer we cooked together every day.'],
      ['A', 'مَا أُسْلُوبُهَا؟', 'What is her style?'],
      ['B', 'عَفْوًا، هَلْ تَقْصِدُ مَلَابِسَهَا؟ … تَرْتَدِي مَلَابِسَ تَقْلِيدِيَّةً، وَهِيَ أَكْثَرُ أَنَاقَةً مِنْ كُلِّ أَفْرَادِ عَائِلَتِي! وَأَنْتَ، مَنْ شَخْصُكَ المُهِمُّ؟', 'Sorry, do you mean her clothes? … She wears traditional clothes, and she is more elegant than everyone in my family! And you, who is your important person?'],
    ],
    notes: 'The six-stage portrait (who → appearance → qualities → relationship → style → opinion) comes from D2-L10; building each answer with a past example, a comparison and a question back (وَأَنْتَ؟) from D2-L09. Line 6 models a repair moment (هَلْ تَقْصِدُ …؟).',
  },
  card: {
    title: 'Speaking card — the topic conversation', ar: 'بِطَاقَةُ المُحَادَثَةِ', you: 'the candidate', them: 'the examiner',
    mix: 'the six portrait stages (D2-L10), each answer built with reason → past example → comparison and repair if needed (D2-L09)',
    tasks: [
      { ex: 'مَنِ الشَّخْصُ الَّذِي تُرِيدُ أَنْ تَصِفَهُ؟ وَلِمَاذَا؟', task: 'Who + why you chose them.', plan: 'مَنْ ← سَأَصِفُ … لِأَنَّ …', model: 'سَأَصِفُ خَالِي عُمَرَ، لِأَنَّهُ قُدْوَتِي.', modelEn: 'I will describe my uncle Omar, because he is my role model.' },
      { ex: 'كَيْفَ يَبْدُو؟', task: 'Two appearance details (hair masculine, eyes dual).', plan: 'كَيْفَ ← هُوَ … القَامَةِ · شَعْرُهُ … · عَيْنَاهُ …', model: 'هُوَ طَوِيلُ القَامَةِ، وَشَعْرُهُ رَمَادِيٌّ قَصِيرٌ، وَلَهُ لِحْيَةٌ.', modelEn: 'He is tall, his hair is short and grey, and he has a beard.' },
      { ex: 'كَيْفَ شَخْصِيَّتُهُ؟', task: 'Two qualities with evidence.', plan: '______________', model: 'هُوَ كَرِيمٌ وَصَبُورٌ؛ مَثَلًا، يُسَاعِدُ الجِيرَانَ دَائِمًا.', modelEn: 'He is generous and patient; for example, he always helps the neighbours.' },
      { ex: 'كَيْفَ عَلَاقَتُكَ بِهِ؟', task: 'A past example + an object suffix.', plan: '______________', model: 'أَحْتَرِمُهُ كَثِيرًا؛ الأُسْبُوعَ المَاضِيَ عَلَّمَنِي كَيْفَ أُصْلِحُ دَرَّاجَتِي.', modelEn: 'I respect him a lot; last week he taught me how to fix my bike.' },
      { unexpected: true, ex: 'مَا أُسْلُوبُهُ فِي المَلَابِسِ؟ وَهَلْ هُوَ مِثْلُكَ؟', task: 'Style + comparison + a question back.', plan: '______________', model: 'يَرْتَدِي مَلَابِسَ رَسْمِيَّةً، بَيْنَمَا أَنَا أُفَضِّلُ المَلَابِسَ الرِّيَاضِيَّةَ. وَأَنْتَ، مَا أُسْلُوبُكَ؟', modelEn: 'He wears formal clothes, whereas I prefer sportswear. And you, what is your style?' },
    ],
    girl: 'مَنِ الشَّخْصُ الَّذِي تُرِيدِينَ أَنْ تَصِفِيهِ؟ · كَيْفَ عَلَاقَتُكِ بِهِ / بِهَا؟',
  },
  talk: {
    title: 'The one-minute portrait — under test conditions', ar: 'الصُّورَةُ فِي دَقِيقَةٍ',
    text: 'Give your one-minute portrait under test conditions: all six stages in order, linked with أَوَّلًا · بَعْدَ ذٰلِكَ · أَخِيرًا. Your partner times you, ticks the stages, and then asks ONE follow-up question that you answer with a reason and a past example.',
    routes: {
      core: 'سَأَصِفُ … · هُوَ / هِيَ … القَامَةِ · هُوَ / هِيَ … وَ…',
      develop: 'All six stages, with eyes as a dual and an object suffix.',
      stretch: 'Add a comparison and a superlative, and answer the follow-up without notes.',
    },
  },
  task: {
    title: 'The script of my best speaking answers', ar: 'نَصُّ أَفْضَلِ أَجْوِبَتِي',
    text: 'Write the script (about 60–80 words) of your portrait and one conversation answer. Include: • who and why • two appearance details (hair masculine, eyes dual) • two qualities with evidence • your relationship with a past example • style and a comparison • a final opinion with a superlative • one question back to the examiner.',
    range: [50, 100],
    phrases: [['سَأَصِفُ … لِأَنَّ …', 'I will describe … because …'], ['عَيْنَاهُ / عَيْنَاهَا … · لَهُ / لَهَا …', 'his / her eyes … · he / she has …'], ['مَثَلًا، فِي الصَّيْفِ المَاضِي …', 'for example, last summer …'], ['أَخِيرًا، فِي رَأْيِي هُوَ / هِيَ أَفْضَلُ …', 'finally, in my opinion he / she is the best …']],
    coreFrames: [
      { ar: 'سَأَصِفُ ______ لِأَنَّ ______ .', en: 'I will describe … because …' },
      { ar: 'هُوَ / هِيَ ______ القَامَةِ، وَشَعْرُهُ / شَعْرُهَا ______ .', en: 'He / she is …, and his / her hair is …' },
      { ar: 'هُوَ / هِيَ ______ وَ ______ ؛ مَثَلًا ______ .', en: 'He / she is … and …; for example …' },
      { ar: 'أَحْتَرِمُهُ / أَحْتَرِمُهَا لِأَنَّ ______ .', en: 'I respect him / her because …' },
      { ar: 'وَأَنْتَ / وَأَنْتِ، ______ ؟', en: 'And you, …?' },
    ],
    developFrames: [
      { ar: 'فِي الصَّيْفِ المَاضِي ______ .', en: 'Last summer …' },
      { ar: 'أَخِيرًا، فِي رَأْيِي هُوَ / هِيَ أَفْضَلُ ______ .', en: 'Finally, in my opinion he / she is the best …' },
    ],
    bank: ['سَأَصِفُ', 'القَامَةِ · شَعْرُهُ · عَيْنَاهُ', 'لَهُ لِحْيَةٌ · لَهَا', 'مَثَلًا', 'أَحْتَرِمُهُ · يَدْعَمُنِي', 'يَرْتَدِي · تَرْتَدِي', 'بَيْنَمَا · أَكْثَرُ مِنْ', 'أَفْضَلُ · أَجْمَلُ'],
    model: {
      text: 'سَأَصِفُ جَدَّتِي فَاطِمَةَ، لِأَنَّهَا عَلَّمَتْنِي الكَثِيرَ. هِيَ قَصِيرَةُ القَامَةِ، وَشَعْرُهَا أَبْيَضُ، وَعَيْنَاهَا سَوْدَاوَانِ. هِيَ كَرِيمَةٌ وَصَبُورَةٌ؛ مَثَلًا، تَطْبُخُ لِلْجِيرَانِ كُلَّ جُمُعَةٍ. أَحْتَرِمُهَا كَثِيرًا، وَفِي الصَّيْفِ المَاضِي طَبَخْنَا مَعًا كُلَّ يَوْمٍ. تَرْتَدِي مَلَابِسَ تَقْلِيدِيَّةً، بَيْنَمَا أَنَا أُفَضِّلُ المَلَابِسَ العَصْرِيَّةَ. أَخِيرًا، فِي رَأْيِي هِيَ أَطْيَبُ شَخْصٍ فِي عَائِلَتِنَا. وَأَنْتَ، مَنْ أَهَمُّ شَخْصٍ فِي حَيَاتِكَ؟',
      en: '“I will describe my grandmother Fatima, because she taught me a lot. She is short, her hair is white, and her eyes are black. She is generous and patient; for example, she cooks for the neighbours every Friday. I respect her a lot, and last summer we cooked together every day. She wears traditional clothes, whereas I prefer modern clothes. Finally, in my opinion she is the kindest person in our family. And you, who is the most important person in your life?”',
      find: ['سَأَصِفُ جَدَّتِي', 'عَيْنَاهَا سَوْدَاوَانِ', 'فِي الصَّيْفِ المَاضِي', 'أَطْيَبُ شَخْصٍ'],
    },
  },
});
