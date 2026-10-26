'use strict';
/* Apply Workshop · F3-W01 · F3-L01 (family members) + F3-L02 (describing family members). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f3-w01', pair: ['f3-l01', 'f3-l02'],
  title: 'Our Family Photo Album', arShort: 'أَلْبُومُ صُوَرِ العَائِلَةِ',
  focus: 'Students join family words and descriptions: they show a family photo, say who each person is and describe them (appearance and personality), give a short talk about two relatives and write a photo-album page that uses both lessons.',
  dialogue: {
    title: 'Who is in the photo?', ar: 'مَنْ فِي الصُّورَةِ؟',
    lines: [
      ['A', 'مَنْ هٰذَا فِي الصُّورَةِ؟', 'Who is this in the photo?'],
      ['B', 'هٰذَا جَدِّي، اسْمُهُ إِبْرَاهِيمُ.', 'This is my grandfather; his name is Ibrahim.'],
      ['A', 'كَيْفَ هُوَ؟', 'What is he like?'],
      ['B', 'هُوَ طَوِيلٌ، وَشَعْرُهُ أَبْيَضُ. هُوَ كَرِيمٌ جِدًّا.', 'He is tall, and his hair is white. He is very generous.'],
      ['A', 'وَمَنْ هٰذِهِ؟', 'And who is this?'],
      ['B', 'هٰذِهِ عَمَّتِي سُعَادُ. هِيَ قَصِيرَةٌ وَمُضْحِكَةٌ، وَأُحِبُّهَا كَثِيرًا.', 'This is my aunt Suad. She is short and funny, and I love her a lot.'],
    ],
    notes: 'Family words and هٰذَا / هٰذِهِ come from F3-L01; appearance and personality adjectives that agree from F3-L02. Ask: why مُضْحِكَةٌ but كَرِيمٌ?',
  },
  card: {
    title: 'Role-play card — showing photos to a new friend', ar: 'صُوَرُ عَائِلَتِي', you: 'the photo owner', them: 'a new friend',
    mix: 'family members and possessive endings (F3-L01) with descriptions that agree, hair and personality (F3-L02)',
    tasks: [
      { ex: 'كَمْ شَخْصًا فِي عَائِلَتِكَ؟', task: 'Say how many people and who they are.', plan: 'كَمْ ← فِي عَائِلَتِي … أَشْخَاصٍ: …', model: 'فِي عَائِلَتِي خَمْسَةُ أَشْخَاصٍ: أَبِي وَأُمِّي وَأَخِي وَأُخْتِي وَأَنَا.', modelEn: 'There are five people in my family: my father, my mother, my brother, my sister and me.' },
      { ex: 'مَنْ هٰذَا؟', task: 'Say who he is and give his name.', plan: 'مَنْ ← هٰذَا … ، اسْمُهُ …', model: 'هٰذَا أَخِي الأَكْبَرُ، اسْمُهُ طَارِقٌ.', modelEn: 'This is my older brother; his name is Tariq.' },
      { ex: 'كَيْفَ يَبْدُو أَخُوكَ؟', task: 'Describe his appearance: height and hair.', plan: 'كَيْفَ ← هُوَ … ، وَشَعْرُهُ …', model: 'هُوَ طَوِيلٌ وَنَحِيفٌ، وَشَعْرُهُ أَسْوَدُ.', modelEn: 'He is tall and slim, and his hair is black.' },
      { ex: 'وَمَنْ هٰذِهِ؟ كَيْفَ شَخْصِيَّتُهَا؟', task: 'Introduce a woman and give two personality adjectives.', plan: 'مَنْ / كَيْفَ ← هٰذِهِ … ، هِيَ … وَ…', model: 'هٰذِهِ خَالَتِي مَرْيَمُ، هِيَ لَطِيفَةٌ وَهَادِئَةٌ.', modelEn: 'This is my aunt Maryam; she is kind and calm.' },
      { unexpected: true, ex: 'مَنْ تُحِبُّ كَثِيرًا فِي عَائِلَتِكَ؟ لِمَاذَا؟', task: 'Name one person and give a reason.', plan: 'مَنْ ← أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', model: 'أُحِبُّ جَدَّتِي كَثِيرًا لِأَنَّهَا كَرِيمَةٌ وَمُضْحِكَةٌ.', modelEn: 'I love my grandmother a lot because she is generous and funny.' },
    ],
    girl: 'كَمْ شَخْصًا فِي عَائِلَتِكِ؟ · كَيْفَ يَبْدُو أَخُوكِ؟ · مَنْ تُحِبِّينَ؟',
  },
  talk: {
    title: 'Two people in my family photo', ar: 'شَخْصَانِ فِي صُورَتِي',
    text: 'Talk for 30–45 seconds about two people in your family (or an imaginary photo): who they are, their names, what they look like and what they are like. Finish with who you love most and why.',
    routes: {
      core: 'هٰذَا … اسْمُهُ … هُوَ … · هٰذِهِ … اسْمُهَا … هِيَ …',
      develop: 'Add hair and two personality adjectives for each person.',
      stretch: 'Compare: أَخِي أَطْوَلُ مِنِّي … and give a reason with لِأَنَّهُ / لِأَنَّهَا.',
    },
    phrases: [['هٰذَا جَدِّي · هٰذِهِ عَمَّتِي', 'this is my grandfather · my aunt'], ['هُوَ طَوِيلٌ · هِيَ قَصِيرَةٌ', 'he is tall · she is short'], ['شَعْرُهُ / شَعْرُهَا …', 'his / her hair is …'], ['أُحِبُّهُ / أُحِبُّهَا لِأَنَّ …', 'I love him / her because …']],
  },
  task: {
    title: 'A page in our family photo album', ar: 'صَفْحَةٌ مِنْ أَلْبُومِ العَائِلَةِ',
    text: 'Write a page (about 45–65 words) for your family photo album. Include: • who is in your family • one man (relation, name, appearance, personality) • one woman (relation, name, appearance, personality) • one person you love a lot, and why.',
    range: [40, 80],
    phrases: [['فِي عَائِلَتِي … أَشْخَاصٍ', 'there are … people in my family'], ['هٰذَا … ، اسْمُهُ … ، هُوَ … وَ…', 'this is …; his name is …; he is … and …'], ['هٰذِهِ … ، اسْمُهَا … ، شَعْرُهَا …', 'this is …; her name is …; her hair is …'], ['أُحِبُّهُ / أُحِبُّهَا لِأَنَّهُ / لِأَنَّهَا …', 'I love him / her because he / she …']],
    coreFrames: [
      { ar: 'فِي عَائِلَتِي ______ أَشْخَاصٍ.', en: 'There are … people in my family.' },
      { ar: 'هٰذَا ______ ، اسْمُهُ ______ .', en: 'This is my …; his name is …' },
      { ar: 'هُوَ ______ وَ ______ ، وَشَعْرُهُ ______ .', en: 'He is … and …, and his hair is …' },
      { ar: 'هٰذِهِ ______ ، اسْمُهَا ______ .', en: 'This is my …; her name is …' },
      { ar: 'هِيَ ______ وَ ______ جِدًّا.', en: 'She is … and very …' },
    ],
    developFrames: [
      { ar: 'أُحِبُّ ______ كَثِيرًا لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I love … a lot because he / she is …' },
      { ar: 'عَيْنَاهُ / عَيْنَاهَا ______ .', en: 'His / her eyes are …' },
    ],
    bank: ['جَدِّي · جَدَّتِي', 'عَمِّي · عَمَّتِي · خَالَتِي', 'طَوِيلٌ · قَصِيرَةٌ', 'شَعْرُهُ · شَعْرُهَا', 'لَطِيفٌ · لَطِيفَةٌ', 'مُضْحِكٌ · مُضْحِكَةٌ', 'كَرِيمٌ · كَرِيمَةٌ', 'لِأَنَّهُ · لِأَنَّهَا'],
    model: {
      text: 'فِي عَائِلَتِي سِتَّةُ أَشْخَاصٍ. هٰذَا جَدِّي، اسْمُهُ إِبْرَاهِيمُ. هُوَ طَوِيلٌ، وَشَعْرُهُ أَبْيَضُ، وَهُوَ هَادِئٌ وَكَرِيمٌ. وَهٰذِهِ عَمَّتِي، اسْمُهَا سُعَادُ. هِيَ قَصِيرَةٌ، وَشَعْرُهَا أَسْوَدُ، وَهِيَ مُضْحِكَةٌ جِدًّا. وَهٰذَا أَخِي الأَكْبَرُ طَارِقٌ، هُوَ مُجْتَهِدٌ. أُحِبُّ جَدِّي كَثِيرًا لِأَنَّهُ لَطِيفٌ، وَيَحْكِي قِصَصًا جَمِيلَةً.',
      en: '“There are six people in my family. This is my grandfather; his name is Ibrahim. He is tall, his hair is white, and he is calm and generous. And this is my aunt; her name is Suad. She is short, her hair is black, and she is very funny. And this is my older brother Tariq; he is hard-working. I love my grandfather a lot because he is kind and tells lovely stories.”',
      find: ['هٰذَا جَدِّي', 'شَعْرُهُ أَبْيَضُ', 'هِيَ مُضْحِكَةٌ جِدًّا', 'لِأَنَّهُ لَطِيفٌ'],
    },
  },
});
