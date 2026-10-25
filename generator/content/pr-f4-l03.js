'use strict';
/* Practice Room · F4-L03 · Classroom objects — what is in your bag? Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f4-l03',
  arShort: 'مَاذَا فِي حَقِيبَتِكَ؟',
  grammar: 'hādhā / hādhihi by gender; ʿindī / laysa ʿindī; fī ḥaqībatī; positions (ʿalā · taḥta · fī · bi-jānibi); duals (qalamāni · mimḥātāni)',
  focus: 'Students run their own speaking and writing practice about classroom objects: say the object words, act a short dialogue, answer question cards, do a role-play card borrowing and lending in class, give a 30-second “what’s in my bag” talk, then build, fix and write about their school bag and desk.',
  words1: 'In my bag', words2: 'In the classroom',
  dialogue: {
    title: 'What is in your bag?', ar: 'مَاذَا فِي حَقِيبَتِكَ؟',
    lines: [
      ['A', 'مَاذَا فِي حَقِيبَتِكَ؟', 'What is in your bag?'],
      ['B', 'فِي حَقِيبَتِي كِتَابٌ وَدَفْتَرَانِ وَمِقْلَمَةٌ.', 'In my bag there is a book, two exercise books and a pencil case.'],
      ['A', 'هَلْ عِنْدَكَ مِسْطَرَةٌ؟', 'Do you have a ruler?'],
      ['B', 'لَا، لَيْسَ عِنْدِي مِسْطَرَةٌ، لٰكِنْ عِنْدِي آلَةٌ حَاسِبَةٌ.', 'No, I don’t have a ruler, but I have a calculator.'],
      ['A', 'مَا هٰذِهِ عَلَى المَكْتَبِ؟', 'What is this (f.) on the desk?'],
      ['B', 'هٰذِهِ مِمْحَاتِي، وَهٰذَا قَلَمِي.', 'This is my rubber, and this is my pen.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: open your REAL bag or pencil case and say what is in it.',
  },
  questions: [
    { q: 'مَاذَا فِي مِقْلَمَتِكَ؟', en: 'What is in your pencil case?', start: 'فِي مِقْلَمَتِي …', more: '… وَ… أَيْضًا' },
    { q: 'هَلْ عِنْدَكَ قَامُوسٌ؟', en: 'Do you have a dictionary?', start: 'نَعَمْ، عِنْدِي … / لَا، لَيْسَ عِنْدِي …', more: '… لٰكِنْ عِنْدِي …' },
    { q: 'مَا هٰذَا؟ / مَا هٰذِهِ؟ (hold up an object)', en: 'What is this? (show an object)', start: 'هٰذَا … / هٰذِهِ …', more: '… لَوْنُهُ / لَوْنُهَا …' },
    { q: 'أَيْنَ قَلَمُكَ؟', en: 'Where is your pen?', start: 'قَلَمِي عَلَى / فِي / تَحْتَ …', more: '… بِجَانِبِ …' },
    { q: 'كَمْ كِتَابًا فِي حَقِيبَتِكَ اليَوْمَ؟', en: 'How many books are in your bag today?', start: 'فِي حَقِيبَتِي … كُتُبٍ', more: '… لِأَنَّ عِنْدِي …' },
  ],
  card: {
    title: 'Role-play card — borrowing things in class', ar: 'أَسْتَعِيرُ أَغْرَاضًا', you: 'a student', them: 'a classmate',
    tasks: [
      { ex: 'مَاذَا تَبْحَثُ عَنْهُ؟', task: 'Say you need a ruler.', plan: 'مَاذَا ← أَحْتَاجُ إِلَى …', model: 'أَحْتَاجُ إِلَى مِسْطَرَةٍ، مِنْ فَضْلِكَ.', modelEn: 'I need a ruler, please.' },
      { ex: 'أَلَيْسَ عِنْدَكَ مِسْطَرَةٌ؟', task: 'Explain you forgot it.', plan: 'أَلَيْسَ ← لَا، نَسِيتُهَا فِي …', model: 'لَا، نَسِيتُهَا فِي البَيْتِ.', modelEn: 'No, I forgot it at home.' },
      { ex: 'تَفَضَّلْ. هَلْ تَحْتَاجُ إِلَى شَيْءٍ آخَرَ؟', task: 'Thank + ask for one more thing.', plan: 'شَيْءٍ آخَرَ ← شُكْرًا! هَلْ عِنْدَكَ …؟', model: 'شُكْرًا جَزِيلًا! هَلْ عِنْدَكَ مِمْحَاةٌ أَيْضًا؟', modelEn: 'Thank you very much! Do you have a rubber too?' },
      { ex: 'نَعَمْ، هِيَ فِي مِقْلَمَتِي.', task: 'Say where you will return them.', plan: 'أَرُدُّهَا ← سَأَضَعُهَا عَلَى …', model: 'شُكْرًا! سَأَضَعُهُمَا عَلَى مَكْتَبِكَ بَعْدَ الحِصَّةِ.', modelEn: 'Thanks! I’ll put them both on your desk after the lesson.' },
    ],
    girl: 'تَبْحَثِينَ · عِنْدَكِ · تَفَضَّلِي · تَحْتَاجِينَ — and the Speaker says to a girl: مَكْتَبِكِ',
    notes: 'Language: aḥtāju ilā + genitive · nasītuhā · laysa ʿindī · sa-aḍaʿuhumā (dual).',
  },
  talk: {
    title: '30 seconds: what’s in my bag', ar: 'مَاذَا فِي حَقِيبَتِي',
    text: 'Show and tell for 30 seconds: what is in your bag or pencil case, what you don’t have, and where three things are on your desk.',
    routes: {
      core: 'Five objects with عِنْدِي / فِي حَقِيبَتِي.',
      develop: 'Add لَيْسَ عِنْدِي … and هٰذَا / هٰذِهِ.',
      stretch: 'Add duals (قَلَمَانِ · دَفْتَرَانِ), colours and positions.',
    },
  },
  builder: [
    { en: 'This is my calculator.', cols: [['هٰذِهِ', 'هٰذَا'], ['آلَتِي', 'آلَتِيَ'], ['الحَاسِبَةُ.', 'الحَاسِبُ.']], key: [0, 0, 0], why: 'آلَةٌ is feminine → هٰذِهِ … الحَاسِبَةُ.' },
    { en: 'I don’t have a dictionary.', cols: [['لَيْسَ', 'لَا'], ['عِنْدِي', 'عِنْدَهَا'], ['قَامُوسٌ.', 'قَامُوسًا.']], key: [0, 0, 0], why: 'I don’t have = لَيْسَ عِنْدِي + noun.' },
    { en: 'There are two pens in my pencil case.', cols: [['فِي مِقْلَمَتِي', 'مِقْلَمَتِي فِي'], ['قَلَمَانِ', 'قَلَمٌ اثْنَانِ'], ['أَزْرَقَانِ.', 'أَزْرَقُ.']], key: [0, 0, 0], why: 'Two = the dual: قَلَمَانِ أَزْرَقَانِ.' },
  ],
  errors: [
    { wrong: 'هٰذَا مِسْطَرَةٌ.', hint: 'مِسْطَرَةٌ ends in ة.', right: 'هٰذِهِ مِسْطَرَةٌ.', why: 'Feminine → هٰذِهِ.' },
    { wrong: 'عِنْدِي لَيْسَ قَلَمٌ.', hint: 'Word order.', right: 'لَيْسَ عِنْدِي قَلَمٌ.', why: 'لَيْسَ comes first: لَيْسَ عِنْدِي.' },
    { wrong: 'الكِتَابُ عَلَى المَكْتَبُ.', hint: 'Look after عَلَى.', right: 'الكِتَابُ عَلَى المَكْتَبِ.', why: 'عَلَى + genitive.' },
  ],
  task: {
    title: 'My bag and my desk', ar: 'حَقِيبَتِي وَمَكْتَبِي',
    text: 'Write a short text (about 40–60 words) for a “back to school” post. Include: • what is in your bag (at least five things) • one thing you don’t have • where three things are on your desk • your favourite object and why.',
    phrases: [['فِي حَقِيبَتِي … وَ… وَ…', 'in my bag there is …, … and …'], ['لَيْسَ عِنْدِي …', 'I don’t have …'], ['… عَلَى / تَحْتَ / بِجَانِبِ …', '… on / under / next to …'], ['أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', 'I love … because it …']],
    coreFrames: [
      { ar: 'فِي حَقِيبَتِي ______ وَ ______ وَ ______ .', en: 'In my bag there is …, … and …' },
      { ar: 'لَيْسَ عِنْدِي ______ .', en: 'I don’t have …' },
      { ar: '______ عَلَى المَكْتَبِ.', en: '… is on the desk.' },
      { ar: 'هٰذَا / هٰذِهِ ______ المُفَضَّلُ / المُفَضَّلَةُ.', en: 'This is my favourite …' },
    ],
    developFrames: [
      { ar: 'عِنْدِي قَلَمَانِ / دَفْتَرَانِ وَ ______ .', en: 'I have two pens / two exercise books and …' },
      { ar: 'أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I love … because it is …' },
    ],
    bank: ['كِتَابٌ · دَفْتَرٌ', 'قَلَمٌ · مِسْطَرَةٌ', 'مِمْحَاةٌ · مِقْلَمَةٌ', 'آلَةٌ حَاسِبَةٌ', 'عِنْدِي · لَيْسَ عِنْدِي', 'هٰذَا · هٰذِهِ', 'عَلَى · تَحْتَ', 'بِجَانِبِ'],
    model: {
      text: 'فِي حَقِيبَتِي كِتَابَانِ وَثَلَاثَةُ دَفَاتِرَ وَمِقْلَمَةٌ زَرْقَاءُ. فِي المِقْلَمَةِ قَلَمَانِ وَمِسْطَرَةٌ وَمِمْحَاةٌ. لَيْسَ عِنْدِي آلَةٌ حَاسِبَةٌ، لِذٰلِكَ أَسْتَعِيرُهَا مِنْ صَدِيقِي. عَلَى مَكْتَبِي حَاسُوبٌ، وَبِجَانِبِهِ قَامُوسٌ عَرَبِيٌّ. هٰذَا القَامُوسُ هُوَ شَيْئِي المُفَضَّلُ، لِأَنَّهُ هَدِيَّةٌ مِنْ جَدِّي.',
      en: '“In my bag there are two books, three exercise books and a blue pencil case. In the pencil case there are two pens, a ruler and a rubber. I don’t have a calculator, so I borrow one from my friend. On my desk there is a computer, and next to it an Arabic dictionary. This dictionary is my favourite thing, because it is a present from my grandfather.”',
      find: ['كِتَابَانِ', 'لَيْسَ عِنْدِي آلَةٌ حَاسِبَةٌ', 'وَبِجَانِبِهِ قَامُوسٌ', 'لِأَنَّهُ هَدِيَّةٌ'],
    },
  },
  checkCore: 'use هٰذَا / هٰذِهِ correctly and لَيْسَ عِنْدِي?',
  checkDevelop: 'give positions with the genitive and use a dual?',
});
