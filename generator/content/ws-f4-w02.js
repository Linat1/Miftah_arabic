'use strict';
/* Apply Workshop · F4-W02 · F4-L03 (classroom objects) + F4-L04 (likes, dislikes and preferences). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f4-w02', pair: ['f4-l03', 'f4-l04'],
  title: 'At the School Stationery Shop', arShort: 'فِي مَكْتَبَةِ المَدْرَسَةِ',
  focus: 'Students join classroom objects with likes and preferences: they check what is in their bag, buy what they don’t have at the school shop, choose between two items and explain why, then write a back-to-school post about their bag and their preferences.',
  dialogue: {
    title: 'What do you need?', ar: 'مَاذَا تَحْتَاجُ؟',
    lines: [
      ['A', 'مَاذَا فِي حَقِيبَتِكَ؟', 'What is in your bag?'],
      ['B', 'فِي حَقِيبَتِي كِتَابٌ وَدَفْتَرٌ وَمِقْلَمَةٌ، لٰكِنْ لَيْسَ عِنْدِي مِسْطَرَةٌ.', 'In my bag there is a book, a notebook and a pencil case, but I don’t have a ruler.'],
      ['A', 'تَفَضَّلْ، هٰذِهِ مِسْطَرَةٌ زَرْقَاءُ، وَهٰذِهِ حَمْرَاءُ.', 'Here you are — this is a blue ruler, and this one is red.'],
      ['B', 'أُفَضِّلُ الزَّرْقَاءَ عَلَى الحَمْرَاءِ.', 'I prefer the blue one to the red one.'],
      ['A', 'لِمَاذَا؟', 'Why?'],
      ['B', 'لِأَنِّي أُحِبُّ اللَّوْنَ الأَزْرَقَ كَثِيرًا. وَأُرِيدُ قَلَمَيْنِ أَيْضًا، مِنْ فَضْلِكَ.', 'Because I like blue a lot. And I want two pens too, please.'],
    ],
    notes: 'Objects, لَيْسَ عِنْدِي and duals (قَلَمَيْنِ) come from F4-L03; أُحِبُّ … كَثِيرًا and أُفَضِّلُ … عَلَى … from F4-L04.',
  },
  card: {
    title: 'Role-play card — at the school shop', ar: 'فِي المَكْتَبَةِ', you: 'the student', them: 'the shop assistant',
    mix: 'classroom objects, عِنْدِي / لَيْسَ عِنْدِي and duals (F4-L03) with likes, dislikes and أُفَضِّلُ … عَلَى … (F4-L04)',
    tasks: [
      { ex: 'أَهْلًا! مَاذَا تُرِيدُ؟', task: 'Say one thing you don’t have and ask for it.', plan: 'مَاذَا ← لَيْسَ عِنْدِي … ، أُرِيدُ …', model: 'لَيْسَ عِنْدِي مِمْحَاةٌ، أُرِيدُ مِمْحَاةً، مِنْ فَضْلِكَ.', modelEn: 'I don’t have a rubber; I would like a rubber, please.' },
      { ex: 'كَمْ قَلَمًا تُرِيدُ؟', task: 'Ask for two (a dual).', plan: 'كَمْ ← أُرِيدُ قَلَمَيْنِ', model: 'أُرِيدُ قَلَمَيْنِ: أَزْرَقَ وَأَسْوَدَ.', modelEn: 'I want two pens: a blue one and a black one.' },
      { ex: 'هٰذَا دَفْتَرٌ كَبِيرٌ، وَهٰذَا صَغِيرٌ. أَيُّهُمَا تُفَضِّلُ؟', task: 'Choose and give a reason.', plan: 'أَيُّهُمَا ← أُفَضِّلُ … عَلَى … لِأَنَّ …', model: 'أُفَضِّلُ الكَبِيرَ عَلَى الصَّغِيرِ لِأَنِّي أَكْتُبُ كَثِيرًا.', modelEn: 'I prefer the big one to the small one because I write a lot.' },
      { ex: 'هَلْ تُحِبُّ القَوَامِيسَ الإِلِكْتُرُونِيَّةَ؟', task: 'Give an opinion with جِدًّا / قَلِيلًا / لَا.', plan: 'هَلْ ← أُحِبُّ … قَلِيلًا / لَا أُحِبُّ …', model: 'أُحِبُّهَا قَلِيلًا، لٰكِنِّي أُفَضِّلُ القَامُوسَ العَادِيَّ.', modelEn: 'I like them a little, but I prefer an ordinary dictionary.' },
      { unexpected: true, ex: 'مَا أَهَمُّ شَيْءٍ فِي حَقِيبَتِكَ؟', task: 'Name your most important object and why.', plan: 'مَا ← أَهَمُّ شَيْءٍ … لِأَنَّهُ / لِأَنَّهَا …', model: 'أَهَمُّ شَيْءٍ الآلَةُ الحَاسِبَةُ لِأَنَّهَا مُفِيدَةٌ فِي الرِّيَاضِيَّاتِ.', modelEn: 'The most important thing is the calculator because it is useful in maths.' },
    ],
    girl: 'مَاذَا تُرِيدِينَ؟ · أَيُّهُمَا تُفَضِّلِينَ؟ · هَلْ تُحِبِّينَ …؟',
  },
  talk: {
    title: 'My bag — and what I prefer', ar: 'حَقِيبَتِي وَمَا أُفَضِّلُ',
    text: 'Talk for 30–45 seconds: what is in your bag today (five things), one thing you don’t have, your favourite object and why, and one preference between two school things.',
    routes: {
      core: 'فِي حَقِيبَتِي … وَ… · لَيْسَ عِنْدِي …',
      develop: 'Add a dual (قَلَمَانِ · كِتَابَانِ) and أُحِبُّ … كَثِيرًا لِأَنَّهُ / لِأَنَّهَا …',
      stretch: 'Add أُفَضِّلُ … عَلَى … لِأَنَّ … and a position (عَلَى · تَحْتَ · بِجَانِبِ).',
    },
    phrases: [['فِي حَقِيبَتِي … وَ… وَ…', 'in my bag there is …'], ['لَيْسَ عِنْدِي …', 'I don’t have …'], ['أُحِبُّ … كَثِيرًا / قَلِيلًا', 'I like … a lot / a little'], ['أُفَضِّلُ … عَلَى … لِأَنَّ …', 'I prefer … to … because …']],
  },
  task: {
    title: 'Back to school: my bag and my choices', ar: 'العَوْدَةُ إِلَى المَدْرَسَةِ',
    text: 'Write a back-to-school post (about 45–65 words). Include: • what is in your bag (at least five things, one dual) • one thing you don’t have and will buy • where two things are on your desk • your favourite object and why • one preference between two things, with a reason.',
    range: [40, 85],
    phrases: [['فِي حَقِيبَتِي … وَ… وَ…', 'in my bag there is … and …'], ['لَيْسَ عِنْدِي … ، لِذٰلِكَ سَأَشْتَرِي …', 'I don’t have …, so I will buy …'], ['أُحِبُّ … كَثِيرًا لِأَنَّهُ / لِأَنَّهَا …', 'I like … a lot because it …'], ['أُفَضِّلُ … عَلَى … لِأَنَّ …', 'I prefer … to … because …']],
    coreFrames: [
      { ar: 'فِي حَقِيبَتِي ______ وَ ______ وَ ______ .', en: 'In my bag there is … and … and …' },
      { ar: 'وَعِنْدِي قَلَمَانِ / ______ أَيْضًا.', en: 'And I have two pens / two … too.' },
      { ar: 'لَيْسَ عِنْدِي ______ .', en: 'I don’t have …' },
      { ar: '______ عَلَى المَكْتَبِ.', en: '… is on the desk.' },
      { ar: 'أُحِبُّ ______ كَثِيرًا لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I like … a lot because it is …' },
    ],
    developFrames: [
      { ar: 'أُفَضِّلُ ______ عَلَى ______ لِأَنَّ ______ .', en: 'I prefer … to … because …' },
      { ar: '… ، لِذٰلِكَ سَأَشْتَرِي ______ .', en: '…, so I will buy …' },
    ],
    bank: ['كِتَابٌ · دَفْتَرٌ', 'مِقْلَمَةٌ · مِسْطَرَةٌ', 'قَلَمَانِ · كِتَابَانِ', 'لَيْسَ عِنْدِي', 'عَلَى · تَحْتَ · بِجَانِبِ', 'أُحِبُّ · لَا أُحِبُّ', 'أُفَضِّلُ … عَلَى …', 'كَثِيرًا · قَلِيلًا'],
    model: {
      text: 'فِي حَقِيبَتِي كِتَابَانِ وَدَفْتَرٌ وَمِقْلَمَةٌ وَآلَةٌ حَاسِبَةٌ. فِي المِقْلَمَةِ قَلَمَانِ وَمِمْحَاةٌ. لَيْسَ عِنْدِي مِسْطَرَةٌ، لِذٰلِكَ سَأَشْتَرِي مِسْطَرَةً زَرْقَاءَ. عَلَى مَكْتَبِي قَامُوسٌ، وَبِجَانِبِهِ مِصْبَاحٌ. أُحِبُّ مِقْلَمَتِي كَثِيرًا لِأَنَّهَا كَبِيرَةٌ وَجَمِيلَةٌ. أُفَضِّلُ الدَّفْتَرَ عَلَى الحَاسُوبِ فِي الصَّفِّ لِأَنِّي أَتَذَكَّرُ أَكْثَرَ عِنْدَمَا أَكْتُبُ بِيَدِي.',
      en: '“In my bag there are two books, a notebook, a pencil case and a calculator. In the pencil case there are two pens and a rubber. I don’t have a ruler, so I will buy a blue ruler. On my desk there is a dictionary, and next to it a lamp. I like my pencil case a lot because it is big and pretty. I prefer a notebook to a computer in class because I remember more when I write by hand.”',
      find: ['كِتَابَانِ', 'لَيْسَ عِنْدِي مِسْطَرَةٌ', 'لِأَنَّهَا كَبِيرَةٌ', 'أُفَضِّلُ الدَّفْتَرَ عَلَى'],
    },
  },
});
