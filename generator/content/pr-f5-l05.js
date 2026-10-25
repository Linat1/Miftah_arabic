'use strict';
/* Practice Room · F5-L05 · Ordering food politely. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f5-l05',
  arShort: 'أَطْلُبُ الطَّعَامَ',
  grammar: 'urīdu … min faḍlika; hal ʿindakum …?; kami al-siʿru?; law samaḥta / law samaḥti; al-ḥisābu min faḍlika; polite replies (shukran · ʿafwan)',
  focus: 'Students run their own speaking and writing practice ordering food: say the café phrases, act a full café dialogue, answer waiter question cards, do a role-play card at a café in Amman, give a 30-second order, then build, fix and write a short review of a café visit.',
  words1: 'Polite phrases', words2: 'At the café or restaurant',
  dialogue: {
    title: 'At the café', ar: 'فِي المَقْهَى',
    lines: [
      ['A', 'أَهْلًا وَسَهْلًا! مَاذَا تُرِيدُ؟', 'Welcome! What would you like?'],
      ['B', 'أُرِيدُ شَطِيرَةَ دَجَاجٍ وَعَصِيرَ بُرْتُقَالٍ، مِنْ فَضْلِكَ.', 'I would like a chicken sandwich and an orange juice, please.'],
      ['A', 'تَفَضَّلْ. هَلْ تُرِيدُ شَيْئًا آخَرَ؟', 'Here you are. Would you like anything else?'],
      ['B', 'هَلْ عِنْدَكُمْ كَعْكٌ بِالشُّوكُولَاتَةِ؟', 'Do you have chocolate cake?'],
      ['A', 'نَعَمْ، عِنْدَنَا. سِعْرُهُ ثَلَاثَةُ دَنَانِيرَ.', 'Yes, we do. It costs three dinars.'],
      ['B', 'حَسَنًا، شُكْرًا. لَوْ سَمَحْتَ، الحِسَابُ مِنْ فَضْلِكَ.', 'OK, thank you. Excuse me, the bill please.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: order YOUR real favourite meal — and ask one question about the menu.',
  },
  questions: [
    { q: 'مَاذَا تُرِيدُ أَنْ تَأْكُلَ؟', en: 'What would you like to eat?', start: 'أُرِيدُ … مِنْ فَضْلِكَ', more: '… مَعَ …' },
    { q: 'وَمَاذَا تُرِيدُ أَنْ تَشْرَبَ؟', en: 'And what would you like to drink?', start: 'أُرِيدُ … ، مِنْ فَضْلِكَ', more: '… بِدُونِ سُكَّرٍ' },
    { q: 'هَلْ تُرِيدُ حَلْوَيَاتٍ؟', en: 'Would you like dessert?', start: 'نَعَمْ، أُرِيدُ … / لَا، شُكْرًا', more: '… هَلْ عِنْدَكُمْ …؟' },
    { q: 'هَلْ كُلُّ شَيْءٍ جَيِّدٌ؟', en: 'Is everything OK?', start: 'نَعَمْ، الطَّعَامُ … جِدًّا', more: '… شُكْرًا' },
    { q: 'كَيْفَ تَدْفَعُ؟', en: 'How are you paying?', start: 'أَدْفَعُ نَقْدًا / بِالبِطَاقَةِ', more: '… كَمِ المَجْمُوعُ؟' },
  ],
  qTitle: 'The waiter asks — answer politely',
  card: {
    title: 'Role-play card — ordering at a café in Amman', ar: 'فِي مَقْهًى فِي عَمَّانَ', you: 'a customer', them: 'the waiter or waitress',
    tasks: [
      { ex: 'مَسَاءَ الخَيْرِ! تَفَضَّلْ، هٰذِهِ قَائِمَةُ الطَّعَامِ.', task: 'Greet and thank.', plan: 'مَسَاءَ الخَيْرِ ← مَسَاءَ النُّورِ ، شُكْرًا', model: 'مَسَاءَ النُّورِ، شُكْرًا جَزِيلًا.', modelEn: 'Good evening, thank you very much.' },
      { ex: 'مَاذَا تُرِيدُ؟', task: 'Order a main dish.', plan: 'مَاذَا ← أُرِيدُ … مِنْ فَضْلِكَ', model: 'أُرِيدُ فَلَافِلَ وَحُمُّصًا، مِنْ فَضْلِكَ.', modelEn: 'I would like falafel and hummus, please.' },
      { ex: 'وَلِلشُّرْبِ؟', task: 'Order a drink.', plan: 'لِلشُّرْبِ ← … ، مِنْ فَضْلِكَ', model: 'عَصِيرَ لَيْمُونٍ بِالنَّعْنَاعِ، مِنْ فَضْلِكَ.', modelEn: 'A lemon and mint juice, please.' },
      { ex: 'هَلْ عِنْدَكَ سُؤَالٌ؟', task: 'Ask the price of something.', plan: 'سُؤَالٌ ← كَمْ سِعْرُ …؟', model: 'نَعَمْ، كَمْ سِعْرُ الكُنَافَةِ؟', modelEn: 'Yes, how much is the kunafa?' },
    ],
    girl: 'to a waitress the customer says: مِنْ فَضْلِكِ · لَوْ سَمَحْتِ; to a female customer the waiter says: تَفَضَّلِي · تُرِيدِينَ',
    notes: 'Language: urīdu + accusative · min faḍlika / -ki · kam siʿru + noun (genitive).',
  },
  talk: {
    title: '30 seconds: my perfect order', ar: 'طَلَبِي المِثَالِيُّ',
    text: 'In 30 seconds, order a full meal politely: greeting, a main dish, a drink, a dessert, a question about price, and the bill.',
    routes: {
      core: 'أُرِيدُ … مِنْ فَضْلِكَ (three times) + شُكْرًا.',
      develop: 'Add هَلْ عِنْدَكُمْ …؟ and كَمِ السِّعْرُ؟',
      stretch: 'Add لَوْ سَمَحْتَ / لَوْ سَمَحْتِ and a comment on the food.',
    },
  },
  builder: [
    { en: 'I would like a coffee, please.', cols: [['أُرِيدُ', 'تُرِيدُ'], ['قَهْوَةً', 'قَهْوَةٌ'], ['مِنْ فَضْلِكَ.', 'شُكْرًا.']], key: [0, 0, 0], why: 'I would like = أُرِيدُ + object in -an / -atan.' },
    { en: 'Do you have fish?', cols: [['هَلْ', 'مَا'], ['عِنْدَكُمْ', 'عِنْدِي'], ['سَمَكٌ؟', 'سَمَكًا؟']], key: [0, 0, 0], why: 'Do you (all) have = هَلْ عِنْدَكُمْ + noun (-un).' },
    { en: 'Excuse me, the bill please (to a waitress).', cols: [['لَوْ سَمَحْتِ،', 'لَوْ سَمَحْتَ،'], ['الحِسَابُ', 'الحِسَابَ'], ['مِنْ فَضْلِكِ.', 'مِنْ فَضْلِكَ.']], key: [0, 0, 0], why: 'To a woman → سَمَحْتِ · فَضْلِكِ.' },
  ],
  errors: [
    { wrong: 'أُرِيدُ شَايٌ مِنْ فَضْلِكَ.', hint: 'After أُرِيدُ the thing is the object.', right: 'أُرِيدُ شَايًا مِنْ فَضْلِكَ.', why: 'Object → -an: شَايًا.' },
    { wrong: 'كَمْ سِعْرُ الشُّورْبَةُ؟', hint: 'Look at the second noun.', right: 'كَمْ سِعْرُ الشُّورْبَةِ؟', why: 'سِعْرُ + noun in genitive (iḍāfa).' },
    { wrong: 'أَعْطِنِي المَاءَ!', hint: 'Too direct — make it polite.', right: 'أُرِيدُ المَاءَ، مِنْ فَضْلِكَ.', why: 'Polite ordering: أُرِيدُ … مِنْ فَضْلِكَ.' },
  ],
  task: {
    title: 'A café visit — a short review', ar: 'زِيَارَةُ مَقْهًى',
    text: 'Write a short review (about 40–60 words) of a visit to a café or restaurant (real or imagined). Include: • where and with whom • what you ordered to eat and drink • one question you asked the waiter • the price • your opinion of the food and the service.',
    phrases: [['ذَهَبْتُ مَعَ … إِلَى …', 'I went with … to …'], ['طَلَبْتُ … وَ…', 'I ordered … and …'], ['سَأَلْتُ النَّادِلَ: هَلْ عِنْدَكُمْ …؟', 'I asked the waiter: do you have …?'], ['كَانَ الطَّعَامُ … وَكَانَ النَّادِلُ …', 'the food was … and the waiter was …']],
    coreFrames: [
      { ar: 'ذَهَبْتُ مَعَ ______ إِلَى مَقْهَى ______ .', en: 'I went with … to … café.' },
      { ar: 'طَلَبْتُ ______ وَ ______ .', en: 'I ordered … and …' },
      { ar: 'كَانَ السِّعْرُ ______ .', en: 'The price was …' },
      { ar: 'كَانَ الطَّعَامُ ______ .', en: 'The food was …' },
    ],
    developFrames: [
      { ar: 'سَأَلْتُ النَّادِلَ: هَلْ عِنْدَكُمْ ______ ؟', en: 'I asked the waiter: do you have …?' },
      { ar: 'كَانَ النَّادِلُ ______ ، لٰكِنَّ ______ .', en: 'The waiter was …, but …' },
    ],
    bank: ['مَقْهًى · مَطْعَمٌ', 'نَادِلٌ · نَادِلَةٌ', 'قَائِمَةُ الطَّعَامِ', 'طَلَبْتُ', 'مِنْ فَضْلِكَ', 'هَلْ عِنْدَكُمْ …؟', 'السِّعْرُ · الحِسَابُ', 'لَذِيذٌ · لَطِيفٌ'],
    model: {
      text: 'يَوْمَ السَّبْتِ ذَهَبْتُ مَعَ عَائِلَتِي إِلَى مَطْعَمٍ لُبْنَانِيٍّ. طَلَبْتُ شَاوِرْمَا دَجَاجٍ وَعَصِيرَ مَانْجُو. سَأَلْتُ النَّادِلَ: هَلْ عِنْدَكُمْ كُنَافَةٌ؟ فَقَالَ: نَعَمْ! كَانَ المَجْمُوعُ أَرْبَعِينَ جُنَيْهًا لِأَرْبَعَةِ أَشْخَاصٍ. كَانَ الطَّعَامُ لَذِيذًا جِدًّا، وَكَانَ النَّادِلُ لَطِيفًا، لٰكِنَّ المَطْعَمَ كَانَ مُزْدَحِمًا.',
      en: '“On Saturday I went with my family to a Lebanese restaurant. I ordered a chicken shawarma and a mango juice. I asked the waiter: do you have kunafa? He said yes! The total was forty pounds for four people. The food was very delicious, and the waiter was kind, but the restaurant was crowded.”',
      find: ['طَلَبْتُ شَاوِرْمَا', 'هَلْ عِنْدَكُمْ كُنَافَةٌ؟', 'كَانَ المَجْمُوعُ', 'كَانَ الطَّعَامُ لَذِيذًا'],
    },
  },
  checkCore: 'order politely with أُرِيدُ … مِنْ فَضْلِكَ?',
  checkDevelop: 'ask a question (هَلْ عِنْدَكُمْ …؟ · كَمِ السِّعْرُ؟) and give the price?',
});
