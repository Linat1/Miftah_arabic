'use strict';
/* Practice Room · D4-L06 · Green technology — AI, solar energy and smart cities. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd4-l06',
  arShort: 'التِّقْنِيَّةُ الخَضْرَاءُ',
  grammar: 'how it works: tuḥawwilu X ilā Y · tuwallidu …; what it is used for: yustakhdamu / tustakhdamu li- + maṣdar; what it helps with: tusāʿidu ʿalā + maṣdar; evaluation: min ahammi al-fawāʾidi anna … · min abrazi al-taḥaddiyāti anna …',
  focus: 'Students run their own speaking and writing practice about green technology: say the technology words, act a short explainer dialogue, answer question cards, do a role-play card presenting a smart-city idea to the mayor, give a one-minute explainer, then build, fix and write an explainer-and-evaluation paragraph about one green technology.',
  words1: 'Green technology', words2: 'How it works',
  dialogue: {
    title: 'How do solar panels work?', ar: 'كَيْفَ تَعْمَلُ الأَلْوَاحُ الشَّمْسِيَّةُ؟',
    lines: [
      ['A', 'كَيْفَ تَعْمَلُ الأَلْوَاحُ الشَّمْسِيَّةُ؟', 'How do solar panels work?'],
      ['B', 'تُحَوِّلُ الأَلْوَاحُ ضَوْءَ الشَّمْسِ إِلَى كَهْرَبَاءَ.', 'The panels convert sunlight into electricity.'],
      ['A', 'وَلِمَاذَا تُسْتَخْدَمُ؟', 'And what are they used for?'],
      ['B', 'تُسْتَخْدَمُ لِتَشْغِيلِ البُيُوتِ وَالمَدَارِسِ، وَتُسَاعِدُ عَلَى تَقْلِيلِ البَصْمَةِ الكَرْبُونِيَّةِ.', 'They are used to power homes and schools, and help reduce the carbon footprint.'],
      ['A', 'وَهَلْ لَهَا عُيُوبٌ؟', 'Do they have drawbacks?'],
      ['B', 'مِنْ أَبْرَزِ التَّحَدِّيَاتِ أَنَّهَا غَالِيَةٌ، وَأَنَّهَا لَا تَعْمَلُ جَيِّدًا فِي الطَّقْسِ الغَائِمِ.', 'One of the main challenges is that they are expensive and don’t work well in cloudy weather.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: explain WIND TURBINES the same way (تُحَوِّلُ … إِلَى …).',
  },
  questions: [
    { q: 'كَيْفَ تَعْمَلُ تُورْبِينَاتُ الرِّيَاحِ؟', en: 'How do wind turbines work?', start: 'تُحَوِّلُ طَاقَةَ الرِّيَاحِ إِلَى …', more: '… وَتُوَلِّدُ …' },
    { q: 'لِمَاذَا يُسْتَخْدَمُ الذَّكَاءُ الاصْطِنَاعِيُّ فِي المُدُنِ الذَّكِيَّةِ؟', en: 'What is AI used for in smart cities?', start: 'يُسْتَخْدَمُ لِتَنْظِيمِ …', more: '… مِثْلَ إِشَارَاتِ المُرُورِ' },
    { q: 'كَيْفَ يُسَاعِدُ المَبْنَى المُسْتَدَامُ عَلَى حِمَايَةِ البِيئَةِ؟', en: 'How does a sustainable building help the environment?', start: 'يُسَاعِدُ عَلَى تَوْفِيرِ …', more: '… لِأَنَّهُ …' },
    { q: 'مَا أَهَمُّ فَائِدَةٍ لِلتِّقْنِيَّةِ الخَضْرَاءِ؟', en: 'What is the main benefit of green technology?', start: 'مِنْ أَهَمِّ الفَوَائِدِ أَنَّ …', more: '…' },
    { q: 'هَلْ تُرِيدُ أَنْ تَعِيشَ فِي مَدِينَةٍ ذَكِيَّةٍ؟', en: 'Would you like to live in a smart city?', start: 'نَعَمْ / لَا، لِأَنَّ …', more: '… مِنْ أَبْرَزِ التَّحَدِّيَاتِ …' },
  ],
  card: {
    title: 'Role-play card — pitching a green idea to the mayor', ar: 'فِكْرَةٌ خَضْرَاءُ لِلْعُمْدَةِ', you: 'a young inventor', them: 'the city mayor',
    tasks: [
      { ex: 'مَا فِكْرَتُكَ؟', task: 'Name the technology.', plan: 'الفِكْرَةُ ← أَقْتَرِحُ … فِي …', model: 'أَقْتَرِحُ إِنَارَةً ذَكِيَّةً فِي الشَّوَارِعِ تَعْمَلُ بِالطَّاقَةِ الشَّمْسِيَّةِ.', modelEn: 'I propose smart street lighting powered by solar energy.' },
      { ex: 'كَيْفَ تَعْمَلُ؟', task: 'How it works.', plan: 'تَعْمَلُ ← تُحَوِّلُ … إِلَى … وَتُضِيءُ عِنْدَمَا …', model: 'تُحَوِّلُ ضَوْءَ النَّهَارِ إِلَى كَهْرَبَاءَ، وَتُضِيءُ فَقَطْ عِنْدَمَا يَمُرُّ شَخْصٌ.', modelEn: 'It converts daylight into electricity and only lights up when someone passes.' },
      { ex: 'وَمَا فَائِدَتُهَا لِلْمَدِينَةِ؟', task: 'Benefit with أَنَّ.', plan: '', model: 'مِنْ أَهَمِّ الفَوَائِدِ أَنَّهَا تُوَفِّرُ الطَّاقَةَ وَتُسَاعِدُ عَلَى تَقْلِيلِ الفَوَاتِيرِ.', modelEn: 'One of the main benefits is that it saves energy and helps reduce bills.' },
      { unexpected: true, ex: 'وَمَا التَّحَدِّي؟', task: 'Challenge + answer.', plan: '', model: 'مِنْ أَبْرَزِ التَّحَدِّيَاتِ تَكْلِفَةُ التَّرْكِيبِ، وَلٰكِنَّهَا تُسْتَرْجَعُ خِلَالَ خَمْسِ سَنَوَاتٍ.', modelEn: 'A main challenge is the installation cost, but it is recovered within five years.' },
    ],
    girl: 'mayor to a girl: فِكْرَتُكِ',
    notes: 'tuḥawwilu X ilā Y · tustakhdamu li- + maṣdar · tusāʿidu ʿalā + maṣdar.',
  },
  talk: {
    title: 'One minute: explain a green technology', ar: 'أَشْرَحُ تِقْنِيَةً خَضْرَاءَ',
    text: 'Choose one technology (solar panels, wind turbines, a smart city, an electric bus). Explain it for one minute: how it works, what it is used for, one benefit, one challenge.',
    routes: {
      core: 'How it works with تُحَوِّلُ … إِلَى …',
      develop: 'Add يُسْتَخْدَمُ / تُسْتَخْدَمُ لِ… and تُسَاعِدُ عَلَى …',
      stretch: 'Add مِنْ أَهَمِّ الفَوَائِدِ أَنَّ … and مِنْ أَبْرَزِ التَّحَدِّيَاتِ أَنَّ … , then a verdict.',
    },
  },
  builder: [
    { en: 'Turbines convert wind into electricity.', cols: [['تُحَوِّلُ التُّورْبِينَاتُ', 'يُحَوِّلُ التُّورْبِينَاتُ'], ['الرِّيَاحَ', 'الرِّيَاحُ'], ['إِلَى كَهْرَبَاءَ.', 'إِلَى كَهْرَبَاءُ.']], key: [0, 0, 0], why: 'Non-human plural → تُحَوِّلُ; object in -a; إِلَى + genitive.' },
    { en: 'AI is used to organise traffic.', cols: [['يُسْتَخْدَمُ', 'يَسْتَخْدِمُ'], ['الذَّكَاءُ الاصْطِنَاعِيُّ', 'الذَّكَاءَ الاصْطِنَاعِيَّ'], ['لِتَنْظِيمِ المُرُورِ.', 'لِتَنْظِيمُ المُرُورِ.']], key: [0, 0, 0], why: 'Passive يُسْتَخْدَمُ + subject in -u; لِ + maṣdar (genitive).' },
    { en: 'Green buildings help to save water.', cols: [['تُسَاعِدُ المَبَانِي الخَضْرَاءُ', 'يُسَاعِدُونَ المَبَانِي الخَضْرَاءُ'], ['عَلَى', 'فِي'], ['تَوْفِيرِ المِيَاهِ.', 'تَوْفِيرُ المِيَاهِ.']], key: [0, 0, 0], why: 'تُسَاعِدُ عَلَى + maṣdar in the genitive.' },
  ],
  errors: [
    { wrong: 'تُحَوِّلُ الأَلْوَاحُ ضَوْءَ الشَّمْسِ كَهْرَبَاءَ.', hint: 'Into …', right: 'تُحَوِّلُ الأَلْوَاحُ ضَوْءَ الشَّمْسِ إِلَى كَهْرَبَاءَ.', why: 'تُحَوِّلُ X إِلَى Y.' },
    { wrong: 'تُسَاعِدُ عَلَى نُقَلِّلُ التَّلَوُّثَ.', hint: 'After عَلَى use a …', right: 'تُسَاعِدُ عَلَى تَقْلِيلِ التَّلَوُّثِ.', why: 'عَلَى + maṣdar, not a conjugated verb.' },
    { wrong: 'مِنْ أَهَمِّ الفَوَائِدِ أَنَّ الطَّاقَةُ نَظِيفَةٌ.', hint: 'After أَنَّ …', right: 'مِنْ أَهَمِّ الفَوَائِدِ أَنَّ الطَّاقَةَ نَظِيفَةٌ.', why: 'أَنَّ + noun in -a.' },
  ],
  task: {
    title: 'Explain and evaluate a green technology', ar: 'أَشْرَحُ وَأُقَيِّمُ',
    text: 'Write an explainer (about 60–80 words) about one green technology for a science magazine. Include: • how it works (تُحَوِّلُ … إِلَى … / تُوَلِّدُ …) • what it is used for (يُسْتَخْدَمُ لِ… + maṣdar) • what it helps with (تُسَاعِدُ عَلَى …) • two benefits and one challenge with أَنَّ • your verdict.',
    phrases: [['تُحَوِّلُ … إِلَى …', 'converts … into …'], ['تُسْتَخْدَمُ لِ…', 'is used for …'], ['تُسَاعِدُ عَلَى …', 'helps to …'], ['مِنْ أَهَمِّ الفَوَائِدِ أَنَّ … · مِنْ أَبْرَزِ التَّحَدِّيَاتِ أَنَّ …', 'a key benefit is that … · a main challenge is that …']],
    coreFrames: [
      { ar: '______ تِقْنِيَةٌ خَضْرَاءُ مُهِمَّةٌ.', en: '… is an important green technology.' },
      { ar: 'تُحَوِّلُ ______ إِلَى ______ .', en: 'It converts … into …' },
      { ar: 'تُسْتَخْدَمُ لِ______ .', en: 'It is used for …' },
      { ar: 'مِنْ أَهَمِّ الفَوَائِدِ أَنَّ ______ .', en: 'A key benefit is that …' },
    ],
    developFrames: [
      { ar: 'تُسَاعِدُ عَلَى ______ وَ ______ .', en: 'It helps to … and …' },
      { ar: 'مِنْ أَبْرَزِ التَّحَدِّيَاتِ أَنَّ ______ ، وَلٰكِنَّ ______ .', en: 'A main challenge is that …, but …' },
    ],
    bank: ['الأَلْوَاحُ الشَّمْسِيَّةُ', 'تُورْبِينَاتُ الرِّيَاحِ', 'مَبْنًى مُسْتَدَامٌ', 'مَدِينَةٌ ذَكِيَّةٌ', 'بَصْمَةٌ كَرْبُونِيَّةٌ', 'تُحَوِّلُ · تُوَلِّدُ', 'تُسْتَخْدَمُ لِ…', 'تُسَاعِدُ عَلَى'],
    model: {
      text: 'تُورْبِينَاتُ الرِّيَاحِ تِقْنِيَةٌ خَضْرَاءُ مُهِمَّةٌ. تُحَوِّلُ هٰذِهِ التُّورْبِينَاتُ حَرَكَةَ الرِّيَاحِ إِلَى كَهْرَبَاءَ نَظِيفَةٍ، وَتُوجَدُ عَادَةً فِي البَحْرِ أَوْ عَلَى التِّلَالِ. تُسْتَخْدَمُ لِتَشْغِيلِ آلَافِ البُيُوتِ، وَتُسَاعِدُ عَلَى تَقْلِيلِ البَصْمَةِ الكَرْبُونِيَّةِ. مِنْ أَهَمِّ الفَوَائِدِ أَنَّ الرِّيَاحَ لَا تَنْضَبُ أَبَدًا، وَأَنَّ الطَّاقَةَ لَا تُلَوِّثُ الهَوَاءَ. وَمِنْ أَبْرَزِ التَّحَدِّيَاتِ أَنَّ التُّورْبِينَاتِ لَا تَعْمَلُ عِنْدَمَا يَهْدَأُ الجَوُّ، وَلٰكِنَّ البَطَّارِيَّاتِ الحَدِيثَةَ تَحُلُّ هٰذِهِ المُشْكِلَةَ. فِي رَأْيِي هِيَ جُزْءٌ أَسَاسِيٌّ مِنَ المُسْتَقْبَلِ.',
      en: '“Wind turbines are an important green technology. These turbines convert the movement of the wind into clean electricity, and are usually found at sea or on hills. They are used to power thousands of homes, and help to reduce the carbon footprint. A key benefit is that wind never runs out, and that the energy doesn’t pollute the air. A main challenge is that turbines don’t work when the air is still, but modern batteries solve this problem. In my opinion they are an essential part of the future.”',
      find: ['تُحَوِّلُ هٰذِهِ التُّورْبِينَاتُ', 'تُسْتَخْدَمُ لِتَشْغِيلِ', 'وَتُسَاعِدُ عَلَى', 'مِنْ أَبْرَزِ التَّحَدِّيَاتِ أَنَّ'],
    },
  },
  checkCore: 'explain how it works with تُحَوِّلُ … إِلَى …?',
  checkDevelop: 'use تُسْتَخْدَمُ لِ… / تُسَاعِدُ عَلَى + maṣdar and evaluate with أَنَّ?',
});
