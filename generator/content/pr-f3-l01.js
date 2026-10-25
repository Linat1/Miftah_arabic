'use strict';
/* Practice Room · F3-L01 · My family — members and relationships. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f3-l01',
  arShort: 'عَائِلَتِي',
  grammar: 'family words; possessive endings (-ī · -ka · -ki · -hu · -hā); hādhā / hādhihi; ismuhu / ismuhā',
  focus: 'Students run their own speaking and writing practice about their family: say the family words, act a short dialogue, answer question cards, do a role-play card about a family photo, give a 30-second talk, then build, fix and write a short text about their family.',
  words1: 'Close family', words2: 'Grandparents, uncles and aunts',
  dialogue: {
    title: 'Who is this in the photo?', ar: 'مَنْ هٰذَا فِي الصُّورَةِ؟',
    lines: [
      ['A', 'مَنْ هٰذَا فِي الصُّورَةِ؟', 'Who is this (m.) in the photo?'],
      ['B', 'هٰذَا أَبِي، اسْمُهُ عُمَرُ.', 'This is my father; his name is Omar.'],
      ['A', 'وَمَنْ هٰذِهِ؟', 'And who is this (f.)?'],
      ['B', 'هٰذِهِ أُخْتِي الصَّغِيرَةُ، اسْمُهَا مَرْيَمُ.', 'This is my little sister; her name is Maryam.'],
      ['A', 'كَمْ أَخًا عِنْدَكَ؟', 'How many brothers do you have?'],
      ['B', 'عِنْدِي أَخٌ وَاحِدٌ، وَهُوَ كَبِيرٌ.', 'I have one brother, and he is older.'],
    ],
  },
  questions: [
    { q: 'مَا اسْمُ أَبِيكَ؟', en: 'What is your father’s name?', start: 'اسْمُ أَبِي …', more: '… وَهُوَ …' },
    { q: 'مَا اسْمُ أُمِّكَ؟', en: 'What is your mother’s name?', start: 'اسْمُ أُمِّي …', more: '… وَهِيَ …' },
    { q: 'كَمْ أَخًا وَأُخْتًا عِنْدَكَ؟', en: 'How many brothers and sisters do you have?', start: 'عِنْدِي …', more: '… اسْمُهُ / اسْمُهَا …' },
    { q: 'أَيْنَ يَسْكُنُ جَدُّكَ؟', en: 'Where does your grandfather live?', start: 'يَسْكُنُ جَدِّي فِي …', more: '… وَجَدَّتِي …' },
    { q: 'مَنْ تُحِبُّ فِي عَائِلَتِكَ؟ لِمَاذَا؟', en: 'Who do you love in your family? Why?', start: 'أُحِبُّ …', more: '… لِأَنَّهُ / لِأَنَّهَا …' },
  ],
  card: {
    title: 'Role-play card — showing a family photo', ar: 'صُورَةُ عَائِلَتِي', you: 'a student showing a photo', them: 'a new friend at school',
    tasks: [
      { ex: 'هٰذِهِ صُورَةٌ جَمِيلَةٌ! مَنْ هٰذَا؟', task: 'Say who the man is.', plan: 'مَنْ ← هٰذَا … ، اسْمُهُ …', model: 'هٰذَا جَدِّي، اسْمُهُ حَسَنٌ.', modelEn: 'This is my grandfather; his name is Hassan.' },
      { ex: 'وَمَنْ هٰذِهِ؟', task: 'Say who the woman is.', plan: 'مَنْ ← هٰذِهِ … ، اسْمُهَا …', model: 'هٰذِهِ عَمَّتِي، اسْمُهَا فَاطِمَةُ.', modelEn: 'This is my aunt; her name is Fatima.' },
      { ex: 'كَمْ شَخْصًا فِي عَائِلَتِكَ؟', task: 'Say how many people.', plan: 'كَمْ ← فِي عَائِلَتِي … أَشْخَاصٍ', model: 'فِي عَائِلَتِي خَمْسَةُ أَشْخَاصٍ.', modelEn: 'There are five people in my family.' },
      { ex: 'هَلْ عِنْدَكَ ابْنُ عَمٍّ؟', task: 'Answer yes or no + a name.', plan: 'هَلْ ← نَعَمْ، عِنْدِي … اسْمُهُ …', model: 'نَعَمْ، عِنْدِي ابْنُ عَمٍّ، اسْمُهُ يُوسُفُ.', modelEn: 'Yes, I have a cousin; his name is Yusuf.' },
    ],
    girl: 'عَائِلَتِكِ · عِنْدَكِ',
    notes: 'Language: hādhā (a man) / hādhihi (a woman) · ismuhu / ismuhā · kam + singular accusative · ʿindī.',
  },
  talk: {
    title: '30 seconds: my family', ar: 'عَائِلَتِي',
    text: 'Talk for 30 seconds about your family: who is in it, their names, and one person you love — and why.',
    routes: {
      core: 'Three sentences: عِنْدِي … · اسْمُ أَبِي … · اسْمُ أُمِّي …',
      develop: 'Add grandparents or an uncle / aunt with اسْمُهُ / اسْمُهَا.',
      stretch: 'Add who you love most and a reason with لِأَنَّ.',
    },
  },
  builder: [
    { en: 'This is my kind mother.', cols: [['هٰذِهِ', 'هٰذَا'], ['أُمِّي', 'أُمُّكَ'], ['اللَّطِيفَةُ', 'اللَّطِيفُ']], key: [0, 0, 0], why: 'A mother is feminine → هٰذِهِ … اللَّطِيفَةُ; my mother = أُمِّي.' },
    { en: 'His name is Ali, and he is tall.', cols: [['اسْمُهُ', 'اسْمُهَا'], ['عَلِيٌّ', 'عَلِيًّا'], ['وَهُوَ طَوِيلٌ', 'وَهِيَ طَوِيلَةٌ']], key: [0, 0, 0], why: 'His name → اسْمُهُ (-hu); a man → هُوَ طَوِيلٌ.' },
    { en: 'I have two little sisters.', cols: [['عِنْدِي', 'عِنْدَهُ'], ['أُخْتَانِ', 'أُخْتٌ'], ['صَغِيرَتَانِ', 'صَغِيرٌ']], key: [0, 0, 0], why: 'I have = عِنْدِي; two sisters = the dual أُخْتَانِ, and the adjective is dual too.' },
  ],
  errors: [
    { wrong: 'هٰذَا أُخْتِي.', hint: 'Is a sister masculine or feminine?', right: 'هٰذِهِ أُخْتِي.', why: 'A sister is feminine → هٰذِهِ.' },
    { wrong: 'هٰذِهِ عَمِّي، اسْمُهُ خَالِدٌ.', hint: 'An uncle is a man.', right: 'هٰذَا عَمِّي، اسْمُهُ خَالِدٌ.', why: 'An uncle is masculine → هٰذَا.' },
    { wrong: 'جَدَّتِي اسْمُهُ نُورٌ.', hint: 'Whose name?', right: 'جَدَّتِي اسْمُهَا نُورٌ.', why: 'Her name → اسْمُهَا (-hā).' },
  ],
  task: {
    title: 'Write about my family', ar: 'أَكْتُبُ عَنْ عَائِلَتِي',
    text: 'Write a short text (about 40–60 words) about your family, for a new pen-friend. Include: • who is in your family • the names of two people (اسْمُهُ / اسْمُهَا) • your grandparents or an uncle / aunt • one person you love, and why.',
    phrases: [['فِي عَائِلَتِي … أَشْخَاصٍ', 'there are … people in my family'], ['اسْمُ أَبِي … وَاسْمُ أُمِّي …', 'my father’s name is … and my mother’s name is …'], ['عِنْدِي أَخٌ اسْمُهُ … / أُخْتٌ اسْمُهَا …', 'I have a brother called … / a sister called …'], ['أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', 'I love … because he / she …']],
    coreFrames: [
      { ar: 'فِي عَائِلَتِي ______ أَشْخَاصٍ.', en: 'There are … people in my family.' },
      { ar: 'اسْمُ أَبِي ______ ، وَاسْمُ أُمِّي ______ .', en: 'My father’s name is …, and my mother’s name is …' },
      { ar: 'عِنْدِي ______ ، اسْمُهُ / اسْمُهَا ______ .', en: 'I have a …; his / her name is …' },
      { ar: 'أُحِبُّ ______ كَثِيرًا.', en: 'I love … a lot.' },
    ],
    developFrames: [
      { ar: 'يَسْكُنُ جَدِّي وَجَدَّتِي فِي ______ .', en: 'My grandfather and grandmother live in …' },
      { ar: 'عِنْدِي عَمٌّ اسْمُهُ ______ ، وَخَالَةٌ اسْمُهَا ______ .', en: 'I have an uncle called … and an aunt called …' },
      { ar: 'أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I love … because he / she …' },
    ],
    bank: ['أَبِي · أُمِّي', 'أَخِي · أُخْتِي', 'جَدِّي · جَدَّتِي', 'عَمِّي · خَالَتِي', 'هٰذَا · هٰذِهِ', 'اسْمُهُ · اسْمُهَا', 'عِنْدِي', 'لِأَنَّ'],
    model: {
      text: `مَرْحَبًا! اسْمِي سَارَةُ، وَفِي عَائِلَتِي خَمْسَةُ أَشْخَاصٍ. اسْمُ أَبِي أَحْمَدُ، وَاسْمُ أُمِّي هِنْدٌ. عِنْدِي أَخٌ كَبِيرٌ اسْمُهُ عَلِيٌّ، وَأُخْتٌ صَغِيرَةٌ اسْمُهَا لَيْلَى. يَسْكُنُ جَدِّي وَجَدَّتِي فِي مِصْرَ، وَعِنْدِي عَمٌّ فِي لَنْدَنَ اسْمُهُ خَالِدٌ. أُحِبُّ جَدَّتِي كَثِيرًا لِأَنَّهَا لَطِيفَةٌ جِدًّا.`,
      en: '“Hello! My name is Sara, and there are five people in my family. My father’s name is Ahmed and my mother’s name is Hind. I have an older brother called Ali and a little sister called Layla. My grandfather and grandmother live in Egypt, and I have an uncle in London called Khalid. I love my grandmother a lot because she is very kind.”',
      find: ['فِي عَائِلَتِي خَمْسَةُ أَشْخَاصٍ', 'أَخٌ كَبِيرٌ اسْمُهُ', 'أُخْتٌ صَغِيرَةٌ اسْمُهَا', 'لِأَنَّهَا لَطِيفَةٌ'],
    },
  },
  checkCore: 'use هٰذَا for a man and هٰذِهِ for a woman?',
  checkDevelop: 'use اسْمُهُ / اسْمُهَا and my-endings (أَبِي · أُمِّي) correctly?',
});
