'use strict';
/* Practice Room · F3-L02 · Describing family members. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f3-l02',
  arShort: 'وَصْفُ العَائِلَةِ',
  grammar: 'adjective agreement (m. / f.); shaʿruhu / shaʿruhā + colour; ʿaynāhu / ʿaynāhā; huwa / hiya + two adjectives; jiddan',
  focus: 'Students run their own speaking and writing practice describing family members: say the description words, act a short dialogue, answer question cards, do a role-play card describing a relative you are meeting at the airport, give a 30-second description, then build, fix and write a short description of two family members.',
  words1: 'Appearance', words2: 'Personality',
  dialogue: {
    title: 'What does your brother look like?', ar: 'كَيْفَ يَبْدُو أَخُوكَ؟',
    lines: [
      ['A', 'كَيْفَ يَبْدُو أَخُوكَ؟', 'What does your brother look like?'],
      ['B', 'هُوَ طَوِيلٌ وَنَحِيفٌ، وَشَعْرُهُ أَسْوَدُ قَصِيرٌ.', 'He is tall and slim, and his hair is short and black.'],
      ['A', 'وَكَيْفَ شَخْصِيَّتُهُ؟', 'And what is his personality like?'],
      ['B', 'هُوَ مُضْحِكٌ وَكَرِيمٌ جِدًّا.', 'He is very funny and generous.'],
      ['A', 'وَأُخْتُكَ؟', 'And your sister?'],
      ['B', 'هِيَ قَصِيرَةٌ وَهَادِئَةٌ، وَشَعْرُهَا بُنِّيٌّ طَوِيلٌ.', 'She is short and calm, and her hair is long and brown.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe a REAL brother, sister or cousin — change every adjective.',
  },
  questions: [
    { q: 'هَلْ أَبُوكَ طَوِيلٌ أَمْ قَصِيرٌ؟', en: 'Is your father tall or short?', start: 'أَبِي …', more: '… وَشَعْرُهُ …' },
    { q: 'كَيْفَ تَبْدُو أُمُّكَ؟', en: 'What does your mother look like?', start: 'أُمِّي …', more: '… وَعَيْنَاهَا …' },
    { q: 'مَنْ أَكْثَرُ شَخْصٍ مُضْحِكٍ فِي عَائِلَتِكَ؟', en: 'Who is the funniest person in your family?', start: '… ← أَخِي / خَالِي … مُضْحِكٌ جِدًّا', more: '… لِأَنَّهُ …' },
    { q: 'صِفْ جَدَّكَ أَوْ جَدَّتَكَ.', en: 'Describe your grandfather or grandmother.', start: 'جَدِّي … / جَدَّتِي …', more: '… وَهُوَ / وَهِيَ …' },
    { q: 'كَيْفَ شَخْصِيَّتُكَ أَنْتَ؟', en: 'What is your personality like?', start: 'أَنَا …', more: '… لٰكِنِّي …' },
  ],
  card: {
    title: 'Role-play card — meeting your aunt at the airport', ar: 'فِي المَطَارِ', you: 'a student waiting for your aunt', them: 'an airport helper',
    tasks: [
      { ex: 'مَنْ تَنْتَظِرُ؟', task: 'Say who you are waiting for.', plan: 'مَنْ ← أَنْتَظِرُ … اسْمُهَا …', model: 'أَنْتَظِرُ عَمَّتِي، اسْمُهَا سُعَادُ.', modelEn: 'I am waiting for my aunt; her name is Suad.' },
      { ex: 'هَلْ هِيَ طَوِيلَةٌ؟', task: 'Describe her height and build.', plan: 'هَلْ ← نَعَمْ / لَا، هِيَ …', model: 'لَا، هِيَ قَصِيرَةٌ وَنَحِيفَةٌ.', modelEn: 'No, she is short and slim.' },
      { ex: 'مَا لَوْنُ شَعْرِهَا؟', task: 'Describe her hair.', plan: 'مَا ← شَعْرُهَا …', model: 'شَعْرُهَا أَسْوَدُ، وَهِيَ تَلْبَسُ حِجَابًا أَزْرَقَ.', modelEn: 'Her hair is black, and she wears a blue hijab.' },
      { ex: 'كَيْفَ شَخْصِيَّتُهَا؟', task: 'Describe her personality.', plan: 'كَيْفَ ← هِيَ … وَ… جِدًّا', model: 'هِيَ لَطِيفَةٌ وَمُضْحِكَةٌ جِدًّا.', modelEn: 'She is very kind and funny.' },
    ],
    girl: 'تَنْتَظِرِينَ',
    notes: 'Language: every adjective about the aunt ends in -a (ة); shaʿruhā + masculine colour (hair is masculine).',
  },
  talk: {
    title: '30 seconds: the person I love most', ar: 'أَحَبُّ شَخْصٍ إِلَيَّ',
    text: 'Describe one family member for 30 seconds: who they are, what they look like (height, hair, eyes) and what they are like.',
    routes: {
      core: 'Three sentences: who · one appearance adjective · one personality adjective.',
      develop: 'Add hair or eye colour (شَعْرُهُ / شَعْرُهَا …) and جِدًّا.',
      stretch: 'Describe two people (a man and a woman) and compare them: هُوَ … ، أَمَّا هِيَ فَهِيَ …',
    },
  },
  builder: [
    { en: 'My sister is tall and clever.', cols: [['أُخْتِي', 'أَخِي'], ['طَوِيلَةٌ', 'طَوِيلٌ'], ['وَذَكِيَّةٌ', 'وَذَكِيٌّ']], key: [0, 0, 0], why: 'A sister → every adjective feminine: طَوِيلَةٌ وَذَكِيَّةٌ.' },
    { en: 'His hair is short and brown.', cols: [['شَعْرُهُ', 'شَعْرُهَا'], ['قَصِيرٌ', 'قَصِيرَةٌ'], ['وَبُنِّيٌّ', 'وَبُنِّيَّةٌ']], key: [0, 0, 0], why: 'His → -hu; hair (شَعْرٌ) is masculine → قَصِيرٌ وَبُنِّيٌّ.' },
    { en: 'My grandfather is very generous.', cols: [['جَدِّي', 'جَدَّتِي'], ['كَرِيمٌ', 'كَرِيمَةٌ'], ['جِدًّا', 'أَيْضًا']], key: [0, 0, 0], why: 'A man → كَرِيمٌ; very = جِدًّا (after the adjective).' },
  ],
  errors: [
    { wrong: 'أُمِّي طَوِيلٌ وَلَطِيفٌ.', hint: 'A mother is feminine.', right: 'أُمِّي طَوِيلَةٌ وَلَطِيفَةٌ.', why: 'Both adjectives need ة for a woman.' },
    { wrong: 'شَعْرُهَا طَوِيلَةٌ.', hint: 'The hair is the subject — is شَعْرٌ masculine or feminine?', right: 'شَعْرُهَا طَوِيلٌ.', why: 'شَعْرٌ is masculine → طَوِيلٌ, even for a woman’s hair.' },
    { wrong: 'أَخِي جِدًّا مُضْحِكٌ.', hint: 'Where does جِدًّا go?', right: 'أَخِي مُضْحِكٌ جِدًّا.', why: 'جِدًّا comes AFTER the adjective.' },
  ],
  task: {
    title: 'Two people in my family', ar: 'شَخْصَانِ مِنْ عَائِلَتِي',
    text: 'Write a short description (about 40–60 words) of two family members — a man and a woman. For each: • who they are and their name • appearance (height, hair, eyes) • personality (two adjectives) • one reason you like them.',
    phrases: [['أَبِي / خَالِي … طَوِيلٌ وَ…', 'my father / uncle … is tall and …'], ['شَعْرُهُ / شَعْرُهَا …', 'his / her hair is …'], ['هِيَ لَطِيفَةٌ وَ… جِدًّا', 'she is very kind and …'], ['أُحِبُّهُ / أُحِبُّهَا لِأَنَّهُ / لِأَنَّهَا …', 'I love him / her because …']],
    coreFrames: [
      { ar: '______ اسْمُهُ ______ . هُوَ ______ وَ ______ .', en: 'My … is called … He is … and …' },
      { ar: 'شَعْرُهُ ______ .', en: 'His hair is …' },
      { ar: '______ اسْمُهَا ______ . هِيَ ______ وَ ______ .', en: 'My … is called … She is … and …' },
      { ar: 'شَعْرُهَا ______ .', en: 'Her hair is …' },
    ],
    developFrames: [
      { ar: 'عَيْنَاهُ / عَيْنَاهَا ______ .', en: 'His / her eyes are …' },
      { ar: 'أُحِبُّهُ / أُحِبُّهَا لِأَنَّهُ / لِأَنَّهَا ______ جِدًّا.', en: 'I love him / her because he / she is very …' },
    ],
    bank: ['طَوِيلٌ · طَوِيلَةٌ', 'قَصِيرٌ · قَصِيرَةٌ', 'نَحِيفٌ · نَحِيفَةٌ', 'شَعْرُهُ · شَعْرُهَا', 'لَطِيفٌ · لَطِيفَةٌ', 'مُضْحِكٌ · مُضْحِكَةٌ', 'هَادِئٌ · هَادِئَةٌ', 'جِدًّا'],
    model: {
      text: 'خَالِي اسْمُهُ مَحْمُودٌ. هُوَ طَوِيلٌ وَقَوِيٌّ، وَشَعْرُهُ أَسْوَدُ قَصِيرٌ. هُوَ مُضْحِكٌ وَكَرِيمٌ جِدًّا، وَأُحِبُّهُ لِأَنَّهُ يَلْعَبُ مَعِي. جَدَّتِي اسْمُهَا عَائِشَةُ. هِيَ قَصِيرَةٌ وَنَحِيفَةٌ، وَشَعْرُهَا أَبْيَضُ، وَعَيْنَاهَا بُنِّيَّتَانِ. هِيَ هَادِئَةٌ وَلَطِيفَةٌ جِدًّا، وَأُحِبُّهَا لِأَنَّهَا تَحْكِي لِي قِصَصًا جَمِيلَةً.',
      en: '“My uncle is called Mahmoud. He is tall and strong, and his hair is short and black. He is very funny and generous, and I love him because he plays with me. My grandmother is called Aisha. She is short and slim, her hair is white, and her eyes are brown. She is very calm and kind, and I love her because she tells me beautiful stories.”',
      find: ['هُوَ طَوِيلٌ وَقَوِيٌّ', 'شَعْرُهُ أَسْوَدُ', 'هِيَ قَصِيرَةٌ وَنَحِيفَةٌ', 'لِأَنَّهَا تَحْكِي'],
    },
  },
  checkCore: 'make every adjective match the person (ة for a woman)?',
  checkDevelop: 'use شَعْرُهُ / شَعْرُهَا with a masculine colour?',
});
