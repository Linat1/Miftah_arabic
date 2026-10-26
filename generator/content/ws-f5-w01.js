'use strict';
/* Apply Workshop · F5-W01 · F5-L01 (food and drinks) + F5-L02 (meals and eating routines). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f5-w01', pair: ['f5-l01', 'f5-l02'],
  title: 'My Food Diary Interview', arShort: 'يَوْمِيَّاتُ طَعَامِي',
  focus: 'Students join foods and drinks with meals and routines: they interview each other for a class food survey (what, when, where, with whom, how often), report a partner’s answers, give a short talk and write a one-day food diary that uses both lessons.',
  dialogue: {
    title: 'The food survey', ar: 'اسْتِبْيَانُ الطَّعَامِ',
    lines: [
      ['A', 'مَاذَا تَأْكُلُ فِي الفُطُورِ؟', 'What do you eat for breakfast?'],
      ['B', 'عَادَةً آكُلُ خُبْزًا وَجُبْنًا، وَأَشْرَبُ عَصِيرَ بُرْتُقَالٍ.', 'Usually I eat bread and cheese, and I drink orange juice.'],
      ['A', 'وَأَيْنَ تَتَنَاوَلُ الغَدَاءَ؟', 'And where do you have lunch?'],
      ['B', 'فِي المَدْرَسَةِ. آكُلُ أَرُزًّا وَدَجَاجًا أَحْيَانًا.', 'At school. I sometimes eat rice and chicken.'],
      ['A', 'مَعَ مَنْ تَأْكُلُ العَشَاءَ؟', 'Who do you eat dinner with?'],
      ['B', 'مَعَ عَائِلَتِي كُلَّ يَوْمٍ. أُحِبُّ السَّمَكَ كَثِيرًا، لٰكِنِّي لَا أُحِبُّ البَطَاطِسَ.', 'With my family every day. I like fish a lot, but I don’t like potatoes.'],
    ],
    notes: 'Foods as objects (خُبْزًا · جُبْنًا · أَرُزًّا) and likes come from F5-L01; meals, where, with whom and frequency (عَادَةً · أَحْيَانًا · كُلَّ يَوْمٍ) from F5-L02.',
  },
  card: {
    title: 'Role-play card — the class food survey', ar: 'اسْتِبْيَانُ الصَّفِّ', you: 'the student being surveyed', them: 'the survey leader',
    mix: 'food and drink as objects and likes (F5-L01) with meals, place, company and frequency (F5-L02)',
    tasks: [
      { ex: 'مَاذَا تَأْكُلُ وَتَشْرَبُ فِي الفُطُورِ؟', task: 'Name two foods and one drink.', plan: 'مَاذَا ← آكُلُ … وَ… ، وَأَشْرَبُ …', model: 'آكُلُ خُبْزًا وَبَيْضًا، وَأَشْرَبُ شَايًا.', modelEn: 'I eat bread and eggs, and I drink tea.' },
      { ex: 'مَتَى تَتَنَاوَلُ الفُطُورَ؟', task: 'Give a time and a frequency word.', plan: 'مَتَى ← عَادَةً … فِي السَّاعَةِ …', model: 'عَادَةً أَتَنَاوَلُ الفُطُورَ فِي السَّاعَةِ السَّابِعَةِ.', modelEn: 'I usually have breakfast at seven o’clock.' },
      { ex: 'أَيْنَ وَمَعَ مَنْ تَتَنَاوَلُ الغَدَاءَ؟', task: 'Give a place and a person.', plan: 'أَيْنَ / مَعَ مَنْ ← فِي … مَعَ …', model: 'أَتَنَاوَلُ الغَدَاءَ فِي المَقْصَفِ مَعَ أَصْدِقَائِي.', modelEn: 'I have lunch in the canteen with my friends.' },
      { ex: 'هَلْ تَأْكُلُ وَجْبَةً خَفِيفَةً بَعْدَ المَدْرَسَةِ؟', task: 'Answer with what and how often.', plan: 'هَلْ ← نَعَمْ، أَحْيَانًا آكُلُ …', model: 'نَعَمْ، أَحْيَانًا آكُلُ مَوْزًا أَوْ جُبْنًا.', modelEn: 'Yes, sometimes I eat a banana or some cheese.' },
      { unexpected: true, ex: 'مَاذَا لَا تَأْكُلُ أَبَدًا؟', task: 'Name a food you never eat, and one you love.', plan: 'مَاذَا ← لَا آكُلُ … أَبَدًا، لٰكِنِّي أُحِبُّ …', model: 'لَا آكُلُ السَّمَكَ أَبَدًا، لٰكِنِّي أُحِبُّ الدَّجَاجَ كَثِيرًا.', modelEn: 'I never eat fish, but I like chicken a lot.' },
    ],
    girl: 'مَاذَا تَأْكُلِينَ وَتَشْرَبِينَ؟ · مَتَى تَتَنَاوَلِينَ …؟ · هَلْ تَأْكُلِينَ …؟',
  },
  talk: {
    title: 'What I ate yesterday — and what I usually eat', ar: 'طَعَامِي فِي يَوْمٍ',
    text: 'Talk for 30–45 seconds about your meals on a normal day: breakfast, lunch, a snack and dinner — what you eat and drink, where, with whom and how often. Finish with a food you love and one you don’t.',
    routes: {
      core: 'فِي الفُطُورِ آكُلُ … · فِي الغَدَاءِ … · فِي العَشَاءِ …',
      develop: 'Add where, with whom and one frequency word.',
      stretch: 'Add a snack, a time and أُحِبُّ … كَثِيرًا، لٰكِنِّي لَا أُحِبُّ …',
    },
    phrases: [['فِي الفُطُورِ آكُلُ … وَأَشْرَبُ …', 'for breakfast I eat … and drink …'], ['أَتَنَاوَلُ الغَدَاءَ فِي …', 'I have lunch in …'], ['مَعَ عَائِلَتِي · مَعَ أَصْدِقَائِي', 'with my family · with my friends'], ['عَادَةً · أَحْيَانًا · كُلَّ يَوْمٍ', 'usually · sometimes · every day']],
  },
  task: {
    title: 'My food diary for one day', ar: 'يَوْمِيَّاتُ طَعَامِي',
    text: 'Write your food diary (about 45–65 words) for a normal school day. Include: • breakfast: what and when • lunch: what and where • a snack after school • dinner: what and with whom • one food you love and one you don’t • one frequency word in every meal.',
    range: [40, 85],
    phrases: [['فِي الفُطُورِ آكُلُ … وَأَشْرَبُ …', 'for breakfast I eat … and drink …'], ['أَتَنَاوَلُ الغَدَاءَ فِي …', 'I have lunch in …'], ['بَعْدَ المَدْرَسَةِ آكُلُ وَجْبَةً خَفِيفَةً', 'after school I eat a snack'], ['أُحِبُّ … كَثِيرًا، لٰكِنِّي لَا أُحِبُّ …', 'I like … a lot, but I don’t like …']],
    coreFrames: [
      { ar: 'فِي الفُطُورِ آكُلُ ______ وَأَشْرَبُ ______ .', en: 'For breakfast I eat … and drink …' },
      { ar: 'أَتَنَاوَلُ الغَدَاءَ فِي ______ .', en: 'I have lunch in …' },
      { ar: 'بَعْدَ المَدْرَسَةِ آكُلُ ______ .', en: 'After school I eat …' },
      { ar: 'فِي العَشَاءِ آكُلُ ______ مَعَ ______ .', en: 'For dinner I eat … with …' },
      { ar: 'أُحِبُّ ______ كَثِيرًا.', en: 'I like … a lot.' },
    ],
    developFrames: [
      { ar: 'عَادَةً / أَحْيَانًا / كُلَّ يَوْمٍ ______ .', en: 'Usually / sometimes / every day …' },
      { ar: 'لٰكِنِّي لَا أُحِبُّ ______ .', en: 'But I don’t like …' },
      { ar: 'فِي السَّاعَةِ ______ .', en: 'At … o’clock.' },
    ],
    bank: ['خُبْزًا · جُبْنًا', 'أَرُزًّا · دَجَاجًا', 'سَمَكًا · سَلَطَةً', 'مَاءً · عَصِيرًا · شَايًا', 'الفُطُورُ · الغَدَاءُ · العَشَاءُ', 'وَجْبَةٌ خَفِيفَةٌ', 'عَادَةً · أَحْيَانًا', 'كُلَّ يَوْمٍ'],
    model: {
      text: 'عَادَةً أَتَنَاوَلُ الفُطُورَ فِي السَّاعَةِ السَّابِعَةِ. آكُلُ خُبْزًا وَجُبْنًا، وَأَشْرَبُ عَصِيرَ بُرْتُقَالٍ. أَتَنَاوَلُ الغَدَاءَ فِي المَقْصَفِ مَعَ أَصْدِقَائِي، وَأَحْيَانًا آكُلُ أَرُزًّا وَدَجَاجًا. بَعْدَ المَدْرَسَةِ آكُلُ مَوْزًا. فِي العَشَاءِ آكُلُ سَمَكًا وَسَلَطَةً مَعَ عَائِلَتِي كُلَّ يَوْمٍ. أُحِبُّ السَّمَكَ كَثِيرًا، لٰكِنِّي لَا أُحِبُّ البَطَاطِسَ.',
      en: '“I usually have breakfast at seven o’clock. I eat bread and cheese, and I drink orange juice. I have lunch in the canteen with my friends, and sometimes I eat rice and chicken. After school I eat a banana. For dinner I eat fish and salad with my family every day. I like fish a lot, but I don’t like potatoes.”',
      find: ['آكُلُ خُبْزًا وَجُبْنًا', 'فِي المَقْصَفِ', 'مَعَ عَائِلَتِي كُلَّ يَوْمٍ', 'لٰكِنِّي لَا أُحِبُّ'],
    },
  },
});
