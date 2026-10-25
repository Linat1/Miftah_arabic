'use strict';
/* Practice Room · F3-L06 · Household appliances and daily routines. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f3-l06',
  arShort: 'الأَجْهِزَةُ وَالرُّوتِينُ',
  grammar: 'nastaʿmilu … li- (we use … for); ushghilu / uṭfiʾu (switch on / off); frequency (kulla yawmin · marratan fī al-usbūʿi · aḥyānan); awwalan · thumma',
  focus: 'Students run their own speaking and writing practice about appliances and routines at home: say the appliance words, act a short dialogue, answer question cards, do a role-play card helping a younger cousin with chores, give a 30-second routine talk, then build, fix and write about who does what at home.',
  words1: 'Kitchen appliances', words2: 'Other appliances at home',
  dialogue: {
    title: 'Who uses the washing machine?', ar: 'مَنْ يَسْتَعْمِلُ الغَسَّالَةَ؟',
    lines: [
      ['A', 'مَنْ يَسْتَعْمِلُ غَسَّالَةَ المَلَابِسِ فِي بَيْتِكُمْ؟', 'Who uses the washing machine in your house?'],
      ['B', 'أُمِّي تَسْتَعْمِلُهَا مَرَّتَيْنِ فِي الأُسْبُوعِ.', 'My mum uses it twice a week.'],
      ['A', 'وَأَنْتَ؟ مَاذَا تَفْعَلُ؟', 'And you? What do you do?'],
      ['B', 'أُشَغِّلُ غَسَّالَةَ الصُّحُونِ كُلَّ مَسَاءٍ.', 'I switch on the dishwasher every evening.'],
      ['A', 'وَمَتَى تَسْتَعْمِلُ المِكْنَسَةَ الكَهْرَبَائِيَّةَ؟', 'And when do you use the vacuum cleaner?'],
      ['B', 'يَوْمَ السَّبْتِ: أَوَّلًا أُرَتِّبُ غُرْفَتِي، ثُمَّ أُنَظِّفُهَا بِالمِكْنَسَةِ.', 'On Saturday: first I tidy my room, then I clean it with the vacuum.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: say what really happens in YOUR home — who, which appliance, how often.',
  },
  questions: [
    { q: 'مَاذَا يُوجَدُ فِي مَطْبَخِكُمْ؟', en: 'What appliances are in your kitchen?', start: 'تُوجَدُ … وَيُوجَدُ …', more: '… وَلَا يُوجَدُ …' },
    { q: 'لِمَاذَا نَسْتَعْمِلُ الثَّلَّاجَةَ؟', en: 'Why do we use the fridge?', start: 'نَسْتَعْمِلُهَا لِحِفْظِ الطَّعَامِ …', more: '… بَارِدًا' },
    { q: 'مَتَى تُشَغِّلُ الغَلَّايَةَ؟', en: 'When do you switch on the kettle?', start: 'أُشَغِّلُهَا فِي …', more: '… لِأَنَّ …' },
    { q: 'مَنْ يُنَظِّفُ البَيْتَ فِي عَائِلَتِكَ؟', en: 'Who cleans the house in your family?', start: 'أُمِّي / أَبِي / أَنَا …', more: '… مَرَّةً فِي الأُسْبُوعِ' },
    { q: 'مَا الجِهَازُ الَّذِي تَسْتَعْمِلُهُ كَثِيرًا؟', en: 'Which device do you use a lot?', start: 'أَسْتَعْمِلُ … كَثِيرًا', more: '… كُلَّ يَوْمٍ لِأَنَّ …' },
  ],
  card: {
    title: 'Role-play card — helping your little cousin with chores', ar: 'أُسَاعِدُ ابْنَ عَمِّي', you: 'an older cousin', them: 'your younger cousin',
    tasks: [
      { ex: 'كَيْفَ أُشَغِّلُ غَسَّالَةَ الصُّحُونِ؟', task: 'Explain: first … then …', plan: 'كَيْفَ ← أَوَّلًا … ثُمَّ …', model: 'أَوَّلًا ضَعِ الصُّحُونَ، ثُمَّ اضْغَطْ عَلَى هٰذَا الزِّرِّ.', modelEn: 'First put the dishes in, then press this button.' },
      { ex: 'أَيْنَ نَضَعُ الحَلِيبَ؟', task: 'Say: in the fridge.', plan: 'أَيْنَ ← فِي الثَّلَّاجَةِ', model: 'نَضَعُ الحَلِيبَ فِي الثَّلَّاجَةِ.', modelEn: 'We put the milk in the fridge.' },
      { ex: 'هَلْ أُطْفِئُ التِّلْفَازَ؟', task: 'Say yes + why.', plan: 'هَلْ ← نَعَمْ، أَطْفِئْهُ لِأَنَّ …', model: 'نَعَمْ، أَطْفِئْهُ، لِأَنَّنَا لَا نُشَاهِدُهُ.', modelEn: 'Yes, switch it off, because we are not watching it.' },
      { ex: 'كَمْ مَرَّةً تُنَظِّفُ غُرْفَتَكَ؟', task: 'Give the frequency.', plan: 'كَمْ مَرَّةً ← … فِي الأُسْبُوعِ', model: 'أُنَظِّفُ غُرْفَتِي مَرَّةً فِي الأُسْبُوعِ، يَوْمَ السَّبْتِ.', modelEn: 'I clean my room once a week, on Saturday.' },
    ],
    girl: 'if your cousin is a girl, the commands change: ضَعِي · اضْغَطِي · أَطْفِئِيهِ',
    notes: 'Language: imperatives (ḍaʿ · iḍghaṭ · aṭfiʾhu) · fī + genitive · frequency phrases.',
  },
  talk: {
    title: '30 seconds: my jobs at home', ar: 'مَهَامِّي فِي البَيْتِ',
    text: 'Talk for 30 seconds about the appliances you use and your jobs at home: what, when and how often.',
    routes: {
      core: 'Three sentences: أَسْتَعْمِلُ … · أُشَغِّلُ … · أُنَظِّفُ …',
      develop: 'Add frequency (كُلَّ يَوْمٍ · مَرَّةً فِي الأُسْبُوعِ) and أَوَّلًا · ثُمَّ.',
      stretch: 'Add what another family member does (أُمِّي تَسْتَعْمِلُ …) and an opinion.',
    },
  },
  builder: [
    { en: 'I switch on the kettle every morning.', cols: [['أُشَغِّلُ', 'تُشَغِّلُ'], ['الغَلَّايَةَ', 'الغَلَّايَةُ'], ['كُلَّ صَبَاحٍ.', 'أَمْسِ.']], key: [0, 0, 0], why: 'I → u- (أُشَغِّلُ); the object takes -a; a habit → كُلَّ صَبَاحٍ.' },
    { en: 'My dad uses the iron once a week.', cols: [['أَبِي يَسْتَعْمِلُ', 'أَبِي تَسْتَعْمِلُ'], ['المِكْوَاةَ', 'المِكْوَاةُ'], ['مَرَّةً فِي الأُسْبُوعِ.', 'مَرَّةً الأُسْبُوعُ.']], key: [0, 0, 0], why: 'He → ya- (يَسْتَعْمِلُ); once a week = مَرَّةً فِي الأُسْبُوعِ.' },
    { en: 'First I tidy my room, then I clean it.', cols: [['أَوَّلًا أُرَتِّبُ غُرْفَتِي،', 'أَوَّلًا يُرَتِّبُ غُرْفَتِي،'], ['ثُمَّ', 'لِأَنَّ'], ['أُنَظِّفُهَا.', 'أُنَظِّفُهُ.']], key: [0, 0, 0], why: 'Then = ثُمَّ; a room is feminine → أُنَظِّفُهَا.' },
  ],
  errors: [
    { wrong: 'أُمِّي يَسْتَعْمِلُ الفُرْنَ.', hint: 'My mother = she.', right: 'أُمِّي تَسْتَعْمِلُ الفُرْنَ.', why: 'She → ta-: تَسْتَعْمِلُ.' },
    { wrong: 'نَضَعُ الطَّعَامَ فِي الثَّلَّاجَةُ.', hint: 'Look after فِي.', right: 'نَضَعُ الطَّعَامَ فِي الثَّلَّاجَةِ.', why: 'فِي + genitive (-i).' },
    { wrong: 'أُنَظِّفُ غُرْفَتِي مَرَّةً الأُسْبُوعَ.', hint: 'Once a week…', right: 'أُنَظِّفُ غُرْفَتِي مَرَّةً فِي الأُسْبُوعِ.', why: 'Frequency: مَرَّةً فِي الأُسْبُوعِ.' },
  ],
  task: {
    title: 'Who does what at home?', ar: 'مَنْ يَفْعَلُ مَاذَا فِي البَيْتِ؟',
    text: 'Write a short text (about 40–60 words) for a class survey. Include: • three appliances in your home and what they are for • what you do at home and how often • what one family member does • your opinion of housework.',
    phrases: [['فِي بَيْتِنَا … ، نَسْتَعْمِلُهَا لِ…', 'in our house there is …; we use it for …'], ['أُشَغِّلُ … كُلَّ …', 'I switch on … every …'], ['أَبِي / أُمِّي يَسْتَعْمِلُ / تَسْتَعْمِلُ …', 'my dad / mum uses …'], ['فِي رَأْيِي العَمَلُ فِي البَيْتِ …', 'in my opinion housework is …']],
    coreFrames: [
      { ar: 'فِي بَيْتِنَا ______ وَ ______ وَ ______ .', en: 'In our house there is …, … and …' },
      { ar: 'أُشَغِّلُ ______ كُلَّ ______ .', en: 'I switch on … every …' },
      { ar: 'أُنَظِّفُ ______ مَرَّةً فِي الأُسْبُوعِ.', en: 'I clean … once a week.' },
      { ar: 'أُمِّي / أَبِي ______ .', en: 'My mum / dad …' },
    ],
    developFrames: [
      { ar: 'نَسْتَعْمِلُ ______ لِ ______ .', en: 'We use … for …' },
      { ar: 'فِي رَأْيِي العَمَلُ فِي البَيْتِ ______ لِأَنَّ ______ .', en: 'In my opinion housework is … because …' },
    ],
    bank: ['ثَلَّاجَةٌ · فُرْنٌ', 'غَسَّالَةُ الصُّحُونِ', 'غَسَّالَةُ المَلَابِسِ', 'مِكْنَسَةٌ كَهْرَبَائِيَّةٌ', 'أُشَغِّلُ · أُطْفِئُ', 'أُنَظِّفُ · أُرَتِّبُ', 'كُلَّ يَوْمٍ', 'مَرَّةً فِي الأُسْبُوعِ'],
    model: {
      text: 'فِي بَيْتِنَا ثَلَّاجَةٌ كَبِيرَةٌ وَفُرْنٌ وَغَسَّالَةٌ لِلصُّحُونِ. نَسْتَعْمِلُ الثَّلَّاجَةَ لِحِفْظِ الطَّعَامِ. أَنَا أُشَغِّلُ غَسَّالَةَ الصُّحُونِ كُلَّ مَسَاءٍ، وَأُنَظِّفُ غُرْفَتِي بِالمِكْنَسَةِ مَرَّةً فِي الأُسْبُوعِ. أُخْتِي الكَبِيرَةُ تَسْتَعْمِلُ المِكْوَاةَ يَوْمَ الأَحَدِ. فِي رَأْيِي العَمَلُ فِي البَيْتِ مُمِلٌّ قَلِيلًا، لٰكِنَّهُ مُهِمٌّ لِأَنَّنَا عَائِلَةٌ وَاحِدَةٌ.',
      en: '“In our house there is a big fridge, an oven and a dishwasher. We use the fridge to keep food. I switch on the dishwasher every evening, and I vacuum my room once a week. My big sister uses the iron on Sunday. In my opinion housework is a bit boring, but it is important because we are one family.”',
      find: ['نَسْتَعْمِلُ الثَّلَّاجَةَ لِحِفْظِ', 'كُلَّ مَسَاءٍ', 'مَرَّةً فِي الأُسْبُوعِ', 'فِي رَأْيِي'],
    },
  },
  checkCore: 'say what you do with the right “I” verb (أُشَغِّلُ · أُنَظِّفُ)?',
  checkDevelop: 'add how often (كُلَّ … · مَرَّةً فِي الأُسْبُوعِ)?',
});
