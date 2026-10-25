'use strict';
/* Practice Room · F3-L09 · Extended writing — my home and family. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f3-l09',
  arShort: 'بَيْتِي وَعَائِلَتِي',
  grammar: 'planning three paragraphs (family · home · opinion); connectors wa · ayḍan · lākinna · li-anna · li-dhālika; reviewing endings and agreement',
  focus: 'Students run their own speaking and writing practice to prepare an extended text: say the process words, rehearse a model plan aloud, answer planning questions, do a “buddy interview” card to collect ideas, give a 30-second oral draft, then build, fix and write a three-paragraph text about their home and family.',
  words1: 'The writing process', words2: 'Connectors',
  addWords: [['وَ · أَيْضًا', 'and · also'], ['لٰكِنَّ', 'but'], ['لِأَنَّ', 'because'], ['لِذٰلِكَ', 'so, that is why'], ['أَوَّلًا · ثُمَّ', 'first · then'], ['فِي رَأْيِي', 'in my opinion']],
  dialogue: {
    title: 'Say the plan out loud', ar: 'قُلِ الخُطَّةَ',
    lines: [
      ['1', 'الفِقْرَةُ الأُولَى: عَائِلَتِي.', 'Paragraph 1: my family.'],
      ['', 'فِي عَائِلَتِي خَمْسَةُ أَشْخَاصٍ. أَبِي طَوِيلٌ وَمُضْحِكٌ، وَأُمِّي لَطِيفَةٌ جِدًّا.', 'There are five people in my family. My dad is tall and funny, and my mum is very kind.'],
      ['2', 'الفِقْرَةُ الثَّانِيَةُ: بَيْتِي.', 'Paragraph 2: my home.'],
      ['', 'نَسْكُنُ فِي بَيْتٍ كَبِيرٍ فِيهِ أَرْبَعُ غُرَفٍ، وَعِنْدَنَا حَدِيقَةٌ جَمِيلَةٌ.', 'We live in a big house with four rooms, and we have a beautiful garden.'],
      ['3', 'الفِقْرَةُ الثَّالِثَةُ: رَأْيِي.', 'Paragraph 3: my opinion.'],
      ['', 'أُحِبُّ بَيْتِي لِأَنَّهُ قَرِيبٌ مِنْ مَدْرَسَتِي، لٰكِنَّ غُرْفَتِي صَغِيرَةٌ.', 'I love my home because it is near my school, but my room is small.'],
    ],
    foot: 'Take turns reading one paragraph each. Then each Speaker says THEIR OWN three-paragraph plan aloud in 30 seconds — one sentence per paragraph.',
    notes: 'Speaking the plan before writing it is the key move today: oral rehearsal makes the written draft faster and more accurate.',
  },
  questions: [
    { q: 'مَنْ فِي عَائِلَتِكَ؟', en: 'Who is in your family? (paragraph 1)', start: 'فِي عَائِلَتِي …', more: '… وَ… أَيْضًا' },
    { q: 'صِفْ شَخْصًا وَاحِدًا.', en: 'Describe one person. (paragraph 1)', start: 'أَبِي / أُمِّي / أَخِي … هُوَ / هِيَ …', more: '… وَشَعْرُهُ / وَشَعْرُهَا …' },
    { q: 'أَيْنَ تَسْكُنُ؟ صِفْ بَيْتَكَ.', en: 'Where do you live? Describe it. (paragraph 2)', start: 'نَسْكُنُ فِي …', more: '… فِيهِ … وَعِنْدَنَا …' },
    { q: 'صِفْ غُرْفَتَكَ.', en: 'Describe your room. (paragraph 2)', start: 'غُرْفَتِي …', more: '… فِيهَا …' },
    { q: 'مَا رَأْيُكَ فِي بَيْتِكَ؟', en: 'What do you think of your home? (paragraph 3)', start: 'فِي رَأْيِي بَيْتِي …', more: '… لِأَنَّ … لٰكِنَّ …' },
  ],
  qTitle: 'Plan by speaking: one question per paragraph',
  card: {
    title: 'Card — interview your buddy, then swap plans', ar: 'أُقَابِلُ زَمِيلِي', you: 'the interviewer', them: 'your buddy (the writer)',
    tasks: [
      { ex: 'كَمْ شَخْصًا فِي عَائِلَتِكَ؟', task: 'Buddy answers; you note the number.', plan: 'كَمْ ← فِي عَائِلَتِي … أَشْخَاصٍ', model: 'فِي عَائِلَتِي سِتَّةُ أَشْخَاصٍ.', modelEn: 'There are six people in my family.' },
      { ex: 'مَنْ أَكْثَرُ شَخْصٍ مُضْحِكٍ فِيهَا؟', task: 'Buddy describes one person.', plan: 'مَنْ ← … هُوَ / هِيَ … جِدًّا', model: 'أَخِي الصَّغِيرُ، هُوَ مُضْحِكٌ جِدًّا.', modelEn: 'My little brother — he is very funny.' },
      { ex: 'مَا أَجْمَلُ غُرْفَةٍ فِي بَيْتِكَ؟', task: 'Buddy names a room + why.', plan: 'مَا ← أَجْمَلُ غُرْفَةٍ … لِأَنَّ …', model: 'أَجْمَلُ غُرْفَةٍ غُرْفَةُ الجُلُوسِ، لِأَنَّهَا وَاسِعَةٌ.', modelEn: 'The nicest room is the living room, because it is spacious.' },
      { ex: 'مَاذَا لَا تُحِبُّ فِي بَيْتِكَ؟', task: 'Buddy gives a “but”.', plan: 'مَاذَا ← لَا أُحِبُّ … لِأَنَّ …', model: 'لَا أُحِبُّ المَطْبَخَ، لِأَنَّهُ صَغِيرٌ جِدًّا.', modelEn: 'I don’t like the kitchen, because it is very small.' },
    ],
    foot: 'Interviewer = asks and notes the answers in English keywords. Writer = answers in full Arabic sentences. Then give the notes to the writer — that is their plan for Step 8. Swap roles.',
    girl: 'عَائِلَتِكِ · بَيْتِكِ · تُحِبِّينَ',
    notes: 'Peer interview generates ideas for the extended writing; the notes become each writer’s plan.',
  },
  talk: {
    title: '30 seconds: my text, said aloud', ar: 'نَصِّي بِصَوْتٍ عَالٍ',
    text: 'Say your whole text aloud in 30 seconds BEFORE you write it: one or two sentences for family, home and opinion.',
    routes: {
      core: 'Three sentences — one per paragraph.',
      develop: 'Two sentences per paragraph, with وَ and لِأَنَّ.',
      stretch: 'Add لٰكِنَّ and لِذٰلِكَ, and one detail with a colour or a number.',
    },
  },
  builder: [
    { en: 'I love my house because it is big, but my room is small.', cols: [['أُحِبُّ بَيْتِي لِأَنَّهُ كَبِيرٌ،', 'أُحِبُّ بَيْتِي لِأَنَّهَا كَبِيرَةٌ،'], ['لٰكِنَّ', 'لِذٰلِكَ'], ['غُرْفَتِي صَغِيرَةٌ.', 'غُرْفَتِي صَغِيرٌ.']], key: [0, 0, 0], why: 'بَيْتٌ (m.) → لِأَنَّهُ كَبِيرٌ; but = لٰكِنَّ; غُرْفَةٌ (f.) → صَغِيرَةٌ.' },
    { en: 'My grandmother lives with us, so the house is busy.', cols: [['جَدَّتِي تَسْكُنُ مَعَنَا،', 'جَدَّتِي يَسْكُنُ مَعَنَا،'], ['لِذٰلِكَ', 'لِأَنَّ'], ['البَيْتُ مُزْدَحِمٌ.', 'البَيْتُ مُزْدَحِمَةٌ.']], key: [0, 0, 0], why: 'She → تَسْكُنُ; so = لِذٰلِكَ; بَيْتٌ is masculine.' },
    { en: 'We also have a garden.', cols: [['وَعِنْدَنَا', 'وَعِنْدِي هُمْ'], ['حَدِيقَةٌ', 'حَدِيقَةً'], ['أَيْضًا.', 'جِدًّا.']], key: [0, 0, 0], why: 'We have = عِنْدَنَا; also = أَيْضًا (at the end).' },
  ],
  errors: [
    { wrong: 'أُحِبُّ بَيْتِي لِأَنَّ كَبِيرٌ.', hint: 'لِأَنَّ needs a pronoun.', right: 'أُحِبُّ بَيْتِي لِأَنَّهُ كَبِيرٌ.', why: 'لِأَنَّ + pronoun: لِأَنَّهُ (it, m.).' },
    { wrong: 'فِي عَائِلَتِي خَمْسُ شَخْصٍ.', hint: '3–10 + plural.', right: 'فِي عَائِلَتِي خَمْسَةُ أَشْخَاصٍ.', why: 'Plural أَشْخَاصٍ; شَخْصٌ is masculine → خَمْسَةُ.' },
    { wrong: 'أُمِّي طَوِيلَةٌ، لِأَنَّ أَبِي قَصِيرٌ.', hint: 'Is this a reason or a contrast?', right: 'أُمِّي طَوِيلَةٌ، لٰكِنَّ أَبِي قَصِيرٌ.', why: 'A contrast needs لٰكِنَّ (but), not لِأَنَّ.' },
  ],
  task: {
    title: 'My home and family — three paragraphs', ar: 'بَيْتِي وَعَائِلَتِي',
    text: 'Write a text of three short paragraphs (about 55–75 words) using your buddy’s notes as your plan. Paragraph 1: your family (who, and a description of one person). Paragraph 2: your home and your room. Paragraph 3: your opinion — what you like and don’t like, and why. Use at least four connectors.',
    range: [40, 85],
    phrases: [['فِي عَائِلَتِي … أَشْخَاصٍ', 'there are … people in my family'], ['نَسْكُنُ فِي … فِيهِ …', 'we live in … which has …'], ['أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', 'I love … because it …'], ['لٰكِنَّ … · لِذٰلِكَ …', 'but … · so …']],
    coreFrames: [
      { ar: 'فِي عَائِلَتِي ______ أَشْخَاصٍ. ______ اسْمُهُ / اسْمُهَا ______ ، وَهُوَ / وَهِيَ ______ .', en: 'There are … people in my family. My … is called …, and he / she is …' },
      { ar: 'نَسْكُنُ فِي ______ ، وَفِيهِ ______ .', en: 'We live in a …, and it has …' },
      { ar: 'غُرْفَتِي ______ ، وَفِيهَا ______ .', en: 'My room is …, and it has …' },
      { ar: 'أُحِبُّ بَيْتِي لِأَنَّهُ ______ ، لٰكِنَّ ______ .', en: 'I love my home because it is …, but …' },
    ],
    developFrames: [
      { ar: '______ يَسْكُنُ / تَسْكُنُ مَعَنَا، لِذٰلِكَ ______ .', en: '… lives with us, so …' },
      { ar: 'أَجْمَلُ غُرْفَةٍ فِي بَيْتِنَا ______ لِأَنَّهَا ______ .', en: 'The nicest room in our home is … because it is …' },
    ],
    bank: ['فِي عَائِلَتِي', 'نَسْكُنُ فِي', 'عِنْدَنَا · فِيهِ · فِيهَا', 'هُوَ · هِيَ', 'وَ · أَيْضًا', 'لٰكِنَّ', 'لِأَنَّهُ · لِأَنَّهَا', 'لِذٰلِكَ'],
    model: {
      text: `فِي عَائِلَتِي سِتَّةُ أَشْخَاصٍ: أَبِي وَأُمِّي وَأَخَوَايَ وَأُخْتِي وَأَنَا. أَخِي الصَّغِيرُ اسْمُهُ آدَمُ، وَهُوَ مُضْحِكٌ جِدًّا، وَشَعْرُهُ أَسْوَدُ قَصِيرٌ.
نَسْكُنُ فِي بَيْتٍ كَبِيرٍ فِي لِيسْتَرَ، وَفِيهِ أَرْبَعُ غُرَفِ نَوْمٍ وَمَطْبَخٌ وَاسِعٌ. غُرْفَتِي صَغِيرَةٌ، وَفِيهَا سَرِيرٌ أَزْرَقُ وَمَكْتَبٌ.
أُحِبُّ بَيْتِي لِأَنَّهُ قَرِيبٌ مِنَ المَسْجِدِ، وَعِنْدَنَا حَدِيقَةٌ أَيْضًا. لٰكِنَّ جَدَّتِي تَسْكُنُ بَعِيدًا، لِذٰلِكَ نَزُورُهَا مَرَّةً فِي الشَّهْرِ.`,
      en: '“There are six people in my family: my father, mother, two brothers, sister and me. My little brother is called Adam; he is very funny, and his hair is short and black. / We live in a big house in Leicester, with four bedrooms and a spacious kitchen. My room is small, with a blue bed and a desk. / I love my home because it is near the mosque, and we have a garden too. But my grandmother lives far away, so we visit her once a month.”',
      find: ['فِي عَائِلَتِي سِتَّةُ أَشْخَاصٍ', 'نَسْكُنُ فِي بَيْتٍ كَبِيرٍ', 'لِأَنَّهُ قَرِيبٌ', 'لِذٰلِكَ نَزُورُهَا'],
    },
  },
  checkCore: 'write three paragraphs: family · home · opinion?',
  checkDevelop: 'use at least four connectors (وَ · أَيْضًا · لٰكِنَّ · لِأَنَّ · لِذٰلِكَ)?',
});
