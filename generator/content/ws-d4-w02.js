'use strict';
/* Apply Workshop · D4-W02 · D4-L03 (environmental problems: causes and effects) + D4-L04 (environmental solutions). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd4-w02', pair: ['d4-l03', 'd4-l04'],
  title: 'The Eco-Council Meeting', arShort: 'اجْتِمَاعُ المَجْلِسِ البِيئِيِّ',
  focus: 'Students join problems with solutions: at the school eco-council they present a local problem (a maṣdar, causes with بِسَبَبِ, a cause-and-effect chain, a passive), then propose solutions for us, for the council and for “them” (يَنْبَغِي أَنْ · يَجِبُ عَلَى … أَنْ … · -ū forms · لِكَيْ), and write a persuasive council proposal.',
  dialogue: {
    title: 'The problem — and the solution', ar: 'المُشْكِلَةُ وَالحَلُّ',
    lines: [
      ['A', 'مَا أَكْبَرُ مُشْكِلَةٍ بِيئِيَّةٍ قُرْبَ مَدْرَسَتِنَا؟', 'What is the biggest environmental problem near our school?'],
      ['B', 'تَلَوُّثُ الهَوَاءِ، بِسَبَبِ السَّيَّارَاتِ الَّتِي تَنْتَظِرُ أَمَامَ البَوَّابَةِ.', 'Air pollution, because of the cars that wait in front of the gate.'],
      ['A', 'وَمَا نَتِيجَتُهُ؟', 'And what is its result?'],
      ['B', 'يُؤَدِّي إِلَى هَوَاءٍ مُلَوَّثٍ، مِمَّا يُسَبِّبُ مَشَاكِلَ فِي التَّنَفُّسِ.', 'It leads to polluted air, which causes breathing problems.'],
      ['A', 'مَا الحَلُّ؟', 'What is the solution?'],
      ['B', 'يَنْبَغِي أَنْ نَمْشِيَ إِلَى المَدْرَسَةِ، وَيَجِبُ عَلَى الأَهْلِ أَنْ يُطْفِئُوا مُحَرِّكَاتِ السَّيَّارَاتِ لِكَيْ يَنْظُفَ الهَوَاءُ.', 'We should walk to school, and parents must switch off car engines so that the air becomes clean.'],
    ],
    notes: 'The problem as a maṣdar (تَلَوُّثُ) and the chain بِسَبَبِ … يُؤَدِّي إِلَى … مِمَّا يُسَبِّبُ … come from D4-L03; يَنْبَغِي أَنْ · يَجِبُ عَلَى … أَنْ … with the -ū form (يُطْفِئُوا) and لِكَيْ from D4-L04.',
  },
  card: {
    title: 'Role-play card — presenting to the eco-council', ar: 'العَرْضُ أَمَامَ المَجْلِسِ', you: 'the student representative', them: 'the eco-council chair',
    mix: 'naming the problem, causes, effects and passives (D4-L03) with solutions for us, for others and for “them” with purposes (D4-L04)',
    tasks: [
      { ex: 'مَا المُشْكِلَةُ الَّتِي تُرِيدُ أَنْ تَعْرِضَهَا؟', task: 'Name the problem with a maṣdar.', plan: 'مَا ← أَكْبَرُ مُشْكِلَةٍ هِيَ … (تَلَوُّثُ / إِزَالَةُ …)', model: 'أَكْبَرُ مُشْكِلَةٍ هِيَ تَلَوُّثُ النَّهْرِ القَرِيبِ مِنَ المَدْرَسَةِ.', modelEn: 'The biggest problem is the pollution of the river near the school.' },
      { ex: 'مَا أَسْبَابُهَا؟', task: 'Two causes, one with a passive.', plan: 'مَا ← بِسَبَبِ … · تُرْمَى …', model: 'بِسَبَبِ المَصَانِعِ، وَلِأَنَّ النُّفَايَاتِ تُرْمَى فِي المَاءِ.', modelEn: 'Because of the factories, and because rubbish is thrown into the water.' },
      { ex: 'وَمَا نَتَائِجُهَا؟', task: 'A cause-and-effect chain.', plan: '______________', model: 'يُؤَدِّي التَّلَوُّثُ إِلَى مَوْتِ الأَسْمَاكِ، مِمَّا يُسَبِّبُ مَشَاكِلَ لِلطُّيُورِ أَيْضًا.', modelEn: 'Pollution leads to the death of fish, which causes problems for birds too.' },
      { ex: 'مَاذَا يَنْبَغِي أَنْ نَفْعَلَ نَحْنُ الطُّلَّابَ؟', task: 'A solution for us + a purpose.', plan: '______________', model: 'يَنْبَغِي أَنْ نُنَظِّمَ يَوْمًا لِتَنْظِيفِ النَّهْرِ لِكَيْ نَحْمِيَ الحَيَوَانَاتِ.', modelEn: 'We should organise a day to clean the river so that we protect the animals.' },
      { unexpected: true, ex: 'وَالمَصَانِعُ؟ مَاذَا يَجِبُ عَلَيْهَا؟', task: 'A rule for “them” (the -ū form) + a purpose.', plan: '______________', model: 'يَجِبُ عَلَى أَصْحَابِ المَصَانِعِ أَنْ يُعَالِجُوا مِيَاهَهُمْ قَبْلَ رَمْيِهَا، لِكَيْ يَبْقَى النَّهْرُ نَظِيفًا.', modelEn: 'Factory owners must treat their water before disposing of it, so that the river stays clean.' },
    ],
    girl: 'مَا المُشْكِلَةُ الَّتِي تُرِيدِينَ أَنْ تَعْرِضِيهَا؟',
  },
  talk: {
    title: 'One problem, three solutions', ar: 'مُشْكِلَةٌ وَاحِدَةٌ وَثَلَاثَةُ حُلُولٍ',
    text: 'Speak for one minute to the eco-council: name one local problem, give two causes and one cause-and-effect chain, then propose three solutions — one for us, one for the council or government, one for “them” — each with a purpose. End with a call to action.',
    routes: {
      core: 'أَكْبَرُ مُشْكِلَةٍ هِيَ … · بِسَبَبِ … · يَنْبَغِي أَنْ …',
      develop: 'Add يُؤَدِّي إِلَى … مِمَّا يُسَبِّبُ … and يَجِبُ عَلَى … أَنْ …',
      stretch: 'Add a passive, the -ū form for “they” and two purposes with لِكَيْ.',
    },
  },
  task: {
    title: 'A proposal to the eco-council', ar: 'اقْتِرَاحٌ لِلْمَجْلِسِ البِيئِيِّ',
    text: 'Write a persuasive proposal (about 60–80 words). Include: • the problem as a maṣdar • two causes (one with a passive verb) • a chain: يُؤَدِّي إِلَى … مِمَّا يُسَبِّبُ … • three solutions: one with يَنْبَغِي أَنْ, one with يَجِبُ عَلَى … أَنْ …, one for “they” with the -ū form • two purposes with لِكَيْ • a call to action.',
    range: [50, 100],
    phrases: [['أَكْبَرُ مُشْكِلَةٍ هِيَ تَلَوُّثُ …', 'the biggest problem is the pollution of …'], ['بِسَبَبِ … · تُرْمَى النُّفَايَاتُ …', 'because of … · rubbish is thrown …'], ['يُؤَدِّي إِلَى … مِمَّا يُسَبِّبُ …', 'it leads to …, which causes …'], ['يَنْبَغِي أَنْ نُقَلِّلَ … لِكَيْ … · هَيَّا نَبْدَأُ!', 'we should reduce … so that … · let’s start!']],
    coreFrames: [
      { ar: 'أَيُّهَا الزُّمَلَاءُ، أَكْبَرُ مُشْكِلَةٍ هِيَ ______ .', en: 'Dear colleagues, the biggest problem is …' },
      { ar: 'بِسَبَبِ ______ .', en: 'Because of …' },
      { ar: 'يُؤَدِّي ______ إِلَى ______ .', en: '… leads to …' },
      { ar: 'يَنْبَغِي أَنْ ______ لِكَيْ ______ .', en: 'We should … so that …' },
      { ar: 'هَيَّا نَبْدَأُ اليَوْمَ!', en: 'Let’s start today!' },
    ],
    developFrames: [
      { ar: 'يَجِبُ عَلَى ______ أَنْ ______ .', en: '… must …' },
      { ar: 'مِمَّا يُسَبِّبُ ______ .', en: 'which causes …' },
      { ar: 'يَجِبُ عَلَى الأَهْلِ أَنْ يُطْفِئُوا / يَمْشُوا ______ .', en: 'Parents must switch off / walk … (-ū form).' },
    ],
    bank: ['تَلَوُّثٌ · إِزَالَةُ الغَابَاتِ', 'بِسَبَبِ', 'يُؤَدِّي إِلَى', 'مِمَّا يُسَبِّبُ', 'تُرْمَى · يُلَوَّثُ', 'يَنْبَغِي أَنْ نُقَلِّلَ', 'يَجِبُ عَلَى … أَنْ', 'لِكَيْ · هَيَّا'],
    model: {
      text: 'أَيُّهَا الزُّمَلَاءُ، أَكْبَرُ مُشْكِلَةٍ قُرْبَ مَدْرَسَتِنَا هِيَ تَلَوُّثُ الهَوَاءِ، بِسَبَبِ السَّيَّارَاتِ الكَثِيرَةِ فِي الصَّبَاحِ. كَذٰلِكَ تُرْمَى النُّفَايَاتُ البِلَاسْتِيكِيَّةُ فِي الشَّارِعِ. يُؤَدِّي التَّلَوُّثُ إِلَى هَوَاءٍ غَيْرِ صِحِّيٍّ، مِمَّا يُسَبِّبُ مَشَاكِلَ فِي التَّنَفُّسِ. يَنْبَغِي أَنْ نَمْشِيَ إِلَى المَدْرَسَةِ لِكَيْ نُقَلِّلَ التَّلَوُّثَ، وَيَجِبُ عَلَى البَلَدِيَّةِ أَنْ تَضَعَ صَنَادِيقَ لِإِعَادَةِ التَّدْوِيرِ. وَيَجِبُ عَلَى الأَهْلِ أَنْ يُطْفِئُوا مُحَرِّكَاتِ سَيَّارَاتِهِمْ لِكَيْ يَنْظُفَ الهَوَاءُ. هَيَّا نَبْدَأُ اليَوْمَ!',
      en: '“Dear colleagues, the biggest problem near our school is air pollution, because of the many cars in the morning. Also, plastic rubbish is thrown in the street. Pollution leads to unhealthy air, which causes breathing problems. We should walk to school so that we reduce pollution, and the council must put out recycling bins. And parents must switch off their car engines so that the air becomes clean. Let’s start today!”',
      find: ['تَلَوُّثُ الهَوَاءِ', 'تُرْمَى النُّفَايَاتُ', 'مِمَّا يُسَبِّبُ', 'أَنْ يُطْفِئُوا'],
    },
  },
});
