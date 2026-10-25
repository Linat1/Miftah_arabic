'use strict';
/* Practice Room · D4-L04 · Environmental solutions — what can be done? Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd4-l04',
  arShort: 'الحُلُولُ البِيئِيَّةُ',
  grammar: 'should / must: yanbaghī an nuqallila · yajibu ʿalā al-ḥukūmati an + verb in -a; purpose: li-kay + -a; “they / you all” in the subjunctive: -ūna → -ū (yajibu an yastakhdimū · ʿalaykum an tuʿīdū); solutions as maṣdars (iʿādat al-tadwīr · al-tashjīr · tarshīd al-miyāh)',
  focus: 'Students run their own speaking and writing practice about solutions: say the solutions, act a short dialogue, answer question cards, do a role-play card at a school eco-council meeting, give a one-minute “three solutions” talk, then build, fix and write a persuasive speech for the eco-council.',
  words1: 'Solutions', words2: 'Actions',
  dialogue: {
    title: 'What should we do?', ar: 'مَاذَا يَنْبَغِي أَنْ نَفْعَلَ؟',
    lines: [
      ['A', 'مَدْرَسَتُنَا تَرْمِي كَثِيرًا مِنَ الوَرَقِ. مَاذَا يَنْبَغِي أَنْ نَفْعَلَ؟', 'Our school throws away a lot of paper. What should we do?'],
      ['B', 'يَنْبَغِي أَنْ نُعِيدَ تَدْوِيرَهُ، لِكَيْ نُقَلِّلَ مِنَ النُّفَايَاتِ.', 'We should recycle it, to reduce waste.'],
      ['A', 'وَمَاذَا عَنِ الطَّاقَةِ؟', 'And what about energy?'],
      ['B', 'يَجِبُ عَلَى المَدْرَسَةِ أَنْ تَسْتَخْدِمَ الطَّاقَةَ الشَّمْسِيَّةَ.', 'The school must use solar energy.'],
      ['A', 'وَالطُّلَّابُ؟', 'And the students?'],
      ['B', 'يَجِبُ أَنْ يُطْفِئُوا الأَنْوَارَ، وَأَنْ يَأْتُوا بِالحَافِلَةِ أَوْ مَشْيًا.', 'They must switch off the lights, and come by bus or on foot.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: propose solutions for YOUR school — one for “we”, one for the school, one for “they”.',
  },
  questions: [
    { q: 'كَيْفَ نُقَلِّلُ مِنَ النُّفَايَاتِ البِلَاسْتِيكِيَّةِ؟', en: 'How do we reduce plastic waste?', start: 'يَنْبَغِي أَنْ نَسْتَخْدِمَ …', more: '… لِكَيْ …' },
    { q: 'مَاذَا يَجِبُ عَلَى الحُكُومَةِ أَنْ تَفْعَلَ؟', en: 'What must the government do?', start: 'يَجِبُ عَلَى الحُكُومَةِ أَنْ …', more: '… مِثْلَ …' },
    { q: 'مَا فَائِدَةُ التَّشْجِيرِ؟', en: 'What is the benefit of planting trees?', start: 'التَّشْجِيرُ يُسَاعِدُ عَلَى …', more: '… لِأَنَّ الأَشْجَارَ …' },
    { q: 'كَيْفَ تُرَشِّدُ المَاءَ فِي بَيْتِكَ؟', en: 'How do you save water at home?', start: 'أُغْلِقُ … / أَسْتَحِمُّ …', more: '… لِكَيْ …' },
    { q: 'مَاذَا يَجِبُ أَنْ يَفْعَلَ الشَّبَابُ؟', en: 'What must young people do?', start: 'يَجِبُ أَنْ يَسْتَخْدِمُوا …', more: '… وَأَنْ …' },
  ],
  card: {
    title: 'Role-play card — the school eco-council', ar: 'المَجْلِسُ البِيئِيُّ', you: 'a council member', them: 'the head of the eco-council',
    tasks: [
      { ex: 'مَا المُشْكِلَةُ الأُولَى فِي مَدْرَسَتِنَا؟', task: 'Name the problem.', plan: 'المُشْكِلَةُ ← نَسْتَهْلِكُ … كَثِيرًا', model: 'نَسْتَهْلِكُ الكَهْرَبَاءَ كَثِيرًا، خُصُوصًا فِي الشِّتَاءِ.', modelEn: 'We consume a lot of electricity, especially in winter.' },
      { ex: 'وَمَا الحَلُّ؟', task: 'Solution + purpose.', plan: 'الحَلُّ ← يَنْبَغِي أَنْ … لِكَيْ …', model: 'يَنْبَغِي أَنْ نُرَكِّبَ أَلْوَاحًا شَمْسِيَّةً لِكَيْ نُوَفِّرَ الطَّاقَةَ.', modelEn: 'We should install solar panels to save energy.' },
      { ex: 'وَمَاذَا يَفْعَلُ الطُّلَّابُ؟', task: 'They must … (-ū).', plan: '', model: 'يَجِبُ أَنْ يُطْفِئُوا الحَوَاسِيبَ بَعْدَ الحِصَصِ، وَأَنْ يُغْلِقُوا النَّوَافِذَ.', modelEn: 'They must switch off computers after lessons and close the windows.' },
      { unexpected: true, ex: 'وَلٰكِنَّ الأَلْوَاحَ غَالِيَةٌ!', task: 'Answer the objection.', plan: '', model: 'صَحِيحٌ، وَلٰكِنَّهَا تُوَفِّرُ المَالَ بَعْدَ سَنَوَاتٍ قَلِيلَةٍ.', modelEn: 'True, but they save money after a few years.' },
    ],
    girl: 'no changes needed (the speaker talks about “we” and “they”)',
    notes: 'yanbaghī an nu-… · yajibu ʿalā X an … · they: -ūna → -ū after an.',
  },
  talk: {
    title: 'One minute: three solutions', ar: 'ثَلَاثَةُ حُلُولٍ',
    text: 'Choose one problem. Propose three solutions for one minute: one for “we”, one for the government, one for “they” — each with a purpose.',
    routes: {
      core: 'Three solutions with يَنْبَغِي أَنْ …',
      develop: 'Add يَجِبُ عَلَى … أَنْ … and لِكَيْ + -a.',
      stretch: 'Add the -ū form (يَجِبُ أَنْ يَسْتَخْدِمُوا) and answer an objection.',
    },
  },
  builder: [
    { en: 'We should use public transport.', cols: [['يَنْبَغِي', 'يَنْبَغِيَ'], ['أَنْ نَسْتَخْدِمَ', 'أَنْ نَسْتَخْدِمُ'], ['النَّقْلَ العَامَّ.', 'النَّقْلُ العَامُّ.']], key: [0, 0, 0], why: 'أَنْ + -a; object in -a.' },
    { en: 'The government must plant trees to reduce pollution.', cols: [['يَجِبُ عَلَى الحُكُومَةِ', 'يَجِبُ الحُكُومَةَ'], ['أَنْ تَزْرَعَ الأَشْجَارَ', 'أَنْ يَزْرَعَ الأَشْجَارَ'], ['لِكَيْ تُقَلِّلَ مِنَ التَّلَوُّثِ.', 'لِكَيْ تُقَلِّلُ مِنَ التَّلَوُّثِ.']], key: [0, 0, 0], why: 'يَجِبُ عَلَى X أَنْ; government (f.) → تَزْرَعَ; لِكَيْ + -a.' },
    { en: 'Citizens must recycle.', cols: [['يَجِبُ عَلَى المُوَاطِنِينَ', 'يَجِبُ عَلَى المُوَاطِنُونَ'], ['أَنْ يُعِيدُوا', 'أَنْ يُعِيدُونَ'], ['التَّدْوِيرَ.', 'التَّدْوِيرُ.']], key: [0, 0, 0], why: 'عَلَى + genitive (-īna); after أَنْ: -ūna → -ū.' },
  ],
  errors: [
    { wrong: 'يَجِبُ أَنْ يَسْتَخْدِمُونَ الدَّرَّاجَاتِ.', hint: 'They + أَنْ …', right: 'يَجِبُ أَنْ يَسْتَخْدِمُوا الدَّرَّاجَاتِ.', why: 'After أَنْ: -ūna → -ū.' },
    { wrong: 'يَنْبَغِي أَنْ نُقَلِّلُ مِنَ البِلَاسْتِيكِ.', hint: 'After أَنْ …', right: 'يَنْبَغِي أَنْ نُقَلِّلَ مِنَ البِلَاسْتِيكِ.', why: 'أَنْ + -a.' },
    { wrong: 'يَجِبُ الحُكُومَةُ أَنْ تَمْنَعَ الأَكْيَاسَ.', hint: 'Missing preposition.', right: 'يَجِبُ عَلَى الحُكُومَةِ أَنْ تَمْنَعَ الأَكْيَاسَ.', why: 'يَجِبُ عَلَى + genitive.' },
  ],
  task: {
    title: 'A speech for the eco-council', ar: 'خِطَابٌ لِلْمَجْلِسِ البِيئِيِّ',
    text: 'Write a persuasive speech (about 60–80 words) for the school eco-council. Include: • the problem in one sentence • three solutions: one with يَنْبَغِي أَنْ نَ…, one with يَجِبُ عَلَى … أَنْ …, one for “they” with the -ū form • two purposes with لِكَيْ • a call to action at the end.',
    phrases: [['أَيُّهَا الزُّمَلَاءُ، …', 'dear classmates, …'], ['يَنْبَغِي أَنْ نُ… لِكَيْ …', 'we should … in order to …'], ['يَجِبُ عَلَى … أَنْ …', '… must …'], ['هَيَّا نَبْدَأُ اليَوْمَ!', 'let’s start today!']],
    coreFrames: [
      { ar: 'أَيُّهَا الزُّمَلَاءُ، مُشْكِلَتُنَا هِيَ ______ .', en: 'Dear classmates, our problem is …' },
      { ar: 'أَوَّلًا، يَنْبَغِي أَنْ ______ لِكَيْ ______ .', en: 'First, we should … in order to …' },
      { ar: 'ثَانِيًا، يَجِبُ عَلَى ______ أَنْ ______ .', en: 'Second, … must …' },
      { ar: 'هَيَّا نَبْدَأُ ______ !', en: 'Let’s start …!' },
    ],
    developFrames: [
      { ar: 'ثَالِثًا، يَجِبُ عَلَى الطُّلَّابِ أَنْ ______ .', en: 'Third, students must … (-ū)' },
      { ar: 'إِذَا فَعَلْنَا ذٰلِكَ، فَسَوْفَ ______ .', en: 'If we do that, we will …' },
    ],
    bank: ['إِعَادَةُ التَّدْوِيرِ', 'الطَّاقَةُ الشَّمْسِيَّةُ', 'التَّشْجِيرُ', 'تَرْشِيدُ المِيَاهِ', 'النَّقْلُ العَامُّ', 'نُقَلِّلُ مِنْ · نَزْرَعُ', 'يَنْبَغِي أَنْ · يَجِبُ عَلَى', 'لِكَيْ نُقَلِّلَ'],
    model: {
      text: 'أَيُّهَا الزُّمَلَاءُ، مُشْكِلَتُنَا هِيَ أَنَّ مَدْرَسَتَنَا تَرْمِي كَمِّيَّاتٍ كَبِيرَةً مِنَ البِلَاسْتِيكِ كُلَّ يَوْمٍ. أَوَّلًا، يَنْبَغِي أَنْ نُحْضِرَ زُجَاجَاتٍ قَابِلَةً لِلِاسْتِعْمَالِ لِكَيْ نُقَلِّلَ مِنَ النُّفَايَاتِ. ثَانِيًا، يَجِبُ عَلَى الإِدَارَةِ أَنْ تَضَعَ صَنَادِيقَ لِإِعَادَةِ التَّدْوِيرِ فِي كُلِّ مَمَرٍّ. ثَالِثًا، يَجِبُ عَلَى طُلَّابِ المَقْصَفِ أَنْ يَرْفُضُوا الأَكْيَاسَ البِلَاسْتِيكِيَّةَ، لِكَيْ يَكُونُوا قُدْوَةً لِلْآخَرِينَ. إِذَا فَعَلْنَا ذٰلِكَ، فَسَوْفَ تُصْبِحُ مَدْرَسَتُنَا أَنْظَفَ وَأَجْمَلَ. هَيَّا نَبْدَأُ اليَوْمَ!',
      en: '“Dear classmates, our problem is that our school throws away large amounts of plastic every day. First, we should bring reusable bottles in order to reduce waste. Second, the management must put recycling bins in every corridor. Third, students at the canteen must refuse plastic bags, so that they are a model for others. If we do that, our school will become cleaner and more beautiful. Let’s start today!”',
      find: ['يَنْبَغِي أَنْ نُحْضِرَ', 'يَجِبُ عَلَى الإِدَارَةِ أَنْ تَضَعَ', 'أَنْ يَرْفُضُوا', 'لِكَيْ يَكُونُوا'],
    },
  },
  checkCore: 'propose three solutions with أَنْ + verb in -a?',
  checkDevelop: 'use يَجِبُ عَلَى … أَنْ …, لِكَيْ and the -ū form for “they”?',
});
