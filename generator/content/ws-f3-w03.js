'use strict';
/* Apply Workshop · F3-W03 · F3-L05 (colours and agreement) + F3-L06 (appliances and daily routines). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f3-w03', pair: ['f3-l05', 'f3-l06'],
  title: 'Our New Kitchen', arShort: 'مَطْبَخُنَا الجَدِيدُ',
  focus: 'Students join colours that agree with appliances and household routines: they plan a new kitchen, choose colours for the walls and appliances, say what each appliance is for and who uses it, and write a description of the kitchen and the family’s routine.',
  dialogue: {
    title: 'Planning the new kitchen', ar: 'نُخَطِّطُ لِلْمَطْبَخِ',
    lines: [
      ['A', 'مَا لَوْنُ الجُدْرَانِ فِي المَطْبَخِ الجَدِيدِ؟', 'What colour are the walls in the new kitchen?'],
      ['B', 'الجُدْرَانُ صَفْرَاءُ فَاتِحَةٌ.', 'The walls are light yellow.'],
      ['A', 'وَالثَّلَّاجَةُ؟', 'And the fridge?'],
      ['B', 'الثَّلَّاجَةُ بَيْضَاءُ، وَالفُرْنُ أَسْوَدُ.', 'The fridge is white, and the oven is black.'],
      ['A', 'مَنْ يَسْتَعْمِلُ الفُرْنَ؟', 'Who uses the oven?'],
      ['B', 'أُمِّي تَسْتَعْمِلُهُ كُلَّ يَوْمٍ، وَأَنَا أُشَغِّلُ الغَلَّايَةَ فِي الصَّبَاحِ.', 'My mother uses it every day, and I switch on the kettle in the morning.'],
    ],
    notes: 'Colours that agree (صَفْرَاءُ · بَيْضَاءُ · أَسْوَدُ) come from F3-L05; appliances, use and frequency from F3-L06. Remind: الجُدْرَانُ (non-human plural) → صَفْرَاءُ (feminine singular).',
  },
  card: {
    title: 'Role-play card — at the kitchen showroom', ar: 'فِي مَعْرِضِ المَطَابِخِ', you: 'the customer', them: 'the shop assistant',
    mix: 'colours that agree with masculine and feminine nouns (F3-L05) with appliances, what they are for and how often we use them (F3-L06)',
    tasks: [
      { ex: 'أَهْلًا! أَيَّ لَوْنٍ تُرِيدُ لِلثَّلَّاجَةِ؟', task: 'Choose a colour for the fridge (feminine).', plan: 'أَيَّ ← أُرِيدُ ثَلَّاجَةً …', model: 'أُرِيدُ ثَلَّاجَةً بَيْضَاءَ، مِنْ فَضْلِكَ.', modelEn: 'I would like a white fridge, please.' },
      { ex: 'وَالفُرْنُ؟', task: 'Choose a colour for the oven (masculine).', plan: 'وَ ← أُرِيدُ فُرْنًا …', model: 'أُرِيدُ فُرْنًا أَسْوَدَ.', modelEn: 'I would like a black oven.' },
      { ex: 'لِمَاذَا تَسْتَعْمِلُونَ المِيكْرُوويفَ؟', task: 'Say what you use it for.', plan: 'لِمَاذَا ← نَسْتَعْمِلُهُ لِتَسْخِينِ …', model: 'نَسْتَعْمِلُهُ لِتَسْخِينِ الطَّعَامِ.', modelEn: 'We use it to heat up food.' },
      { ex: 'كَمْ مَرَّةً تُشَغِّلُونَ غَسَّالَةَ الصُّحُونِ؟', task: 'Give a frequency.', plan: 'كَمْ ← نُشَغِّلُهَا كُلَّ … / مَرَّةً فِي …', model: 'نُشَغِّلُهَا كُلَّ يَوْمٍ فِي المَسَاءِ.', modelEn: 'We switch it on every day in the evening.' },
      { unexpected: true, ex: 'مَا لَوْنُكَ المُفَضَّلُ لِلْجُدْرَانِ؟ وَلِمَاذَا؟', task: 'Give a colour and a reason.', plan: 'مَا ← أُحِبُّ … لِأَنَّهُ …', model: 'أُحِبُّ الأَخْضَرَ الفَاتِحَ لِأَنَّهُ هَادِئٌ.', modelEn: 'I like light green because it is calm.' },
    ],
    girl: 'أَيَّ لَوْنٍ تُرِيدِينَ؟ · مَا لَوْنُكِ المُفَضَّلُ؟',
    notes: 'Watch the object forms: ثَلَّاجَةً بَيْضَاءَ · فُرْنًا أَسْوَدَ (accusative after أُرِيدُ). Accept the nominative from Core students — the colour agreement is the target.',
  },
  talk: {
    title: 'My dream kitchen', ar: 'مَطْبَخُ أَحْلَامِي',
    text: 'Talk for 30–45 seconds about your dream kitchen: the colour of the walls, three appliances with colours, what you use two of them for, and who does what at home and how often.',
    routes: {
      core: 'الجُدْرَانُ … · الثَّلَّاجَةُ … · الفُرْنُ …',
      develop: 'Add use and frequency: نَسْتَعْمِلُهُ لِلطَّبْخِ · كُلَّ يَوْمٍ · أَحْيَانًا.',
      stretch: 'Add a shade (فَاتِحٌ / غَامِقٌ) and your opinion of housework with a reason.',
    },
    phrases: [['الجُدْرَانُ صَفْرَاءُ / زَرْقَاءُ', 'the walls are yellow / blue'], ['ثَلَّاجَةٌ بَيْضَاءُ · فُرْنٌ أَسْوَدُ', 'a white fridge · a black oven'], ['نَسْتَعْمِلُهُ لِلطَّبْخِ', 'we use it for cooking'], ['كُلَّ يَوْمٍ · أَحْيَانًا · مَرَّةً فِي الأُسْبُوعِ', 'every day · sometimes · once a week']],
  },
  task: {
    title: 'Our kitchen and who does what', ar: 'مَطْبَخُنَا وَأَعْمَالُ البَيْتِ',
    text: 'Write a description (about 45–65 words) of your kitchen (real or dream) for a home magazine. Include: • the colour of the walls • four appliances or items, each with a colour that agrees • what two appliances are for • who uses them and how often • your opinion of housework, with a reason.',
    range: [40, 80],
    phrases: [['الجُدْرَانُ … فَاتِحَةٌ / غَامِقَةٌ', 'the walls are light / dark …'], ['يُوجَدُ فُرْنٌ أَسْوَدُ · تُوجَدُ ثَلَّاجَةٌ بَيْضَاءُ', 'there is a black oven · a white fridge'], ['نَسْتَعْمِلُ الثَّلَّاجَةَ لِحِفْظِ الطَّعَامِ', 'we use the fridge to keep food'], ['فِي رَأْيِي العَمَلُ فِي البَيْتِ …', 'in my opinion housework is …']],
    coreFrames: [
      { ar: 'فِي مَطْبَخِنَا الجُدْرَانُ ______ .', en: 'In our kitchen the walls are …' },
      { ar: 'يُوجَدُ فُرْنٌ ______ ، وَتُوجَدُ ثَلَّاجَةٌ ______ .', en: 'There is a … oven and a … fridge.' },
      { ar: 'نَسْتَعْمِلُ الثَّلَّاجَةَ لِحِفْظِ ______ .', en: 'We use the fridge to keep …' },
      { ar: 'أُمِّي / أَبِي ______ كُلَّ يَوْمٍ.', en: 'My mother / father … every day.' },
      { ar: 'أَنَا أُشَغِّلُ ______ ______ .', en: 'I switch on … (how often).' },
    ],
    developFrames: [
      { ar: 'وَتُوجَدُ غَلَّايَةٌ ______ أَيْضًا.', en: 'And there is a … kettle too.' },
      { ar: 'فِي رَأْيِي العَمَلُ فِي البَيْتِ ______ لِأَنَّ ______ .', en: 'In my opinion housework is … because …' },
    ],
    bank: ['أَبْيَضُ · بَيْضَاءُ', 'أَسْوَدُ · سَوْدَاءُ', 'أَحْمَرُ · حَمْرَاءُ', 'رَمَادِيٌّ · رَمَادِيَّةٌ', 'فَاتِحٌ · غَامِقٌ', 'لِلطَّبْخِ · لِحِفْظِ الطَّعَامِ', 'أُشَغِّلُ · أُطْفِئُ', 'كُلَّ يَوْمٍ · أَحْيَانًا'],
    model: {
      text: 'فِي مَطْبَخِنَا الجُدْرَانُ صَفْرَاءُ فَاتِحَةٌ. يُوجَدُ فُرْنٌ أَسْوَدُ، وَتُوجَدُ ثَلَّاجَةٌ بَيْضَاءُ وَغَسَّالَةُ صُحُونٍ رَمَادِيَّةٌ. نَسْتَعْمِلُ الثَّلَّاجَةَ لِحِفْظِ الطَّعَامِ، وَنَسْتَعْمِلُ الفُرْنَ لِلطَّبْخِ. أُمِّي تَطْبُخُ كُلَّ يَوْمٍ، وَأَبِي يُشَغِّلُ غَسَّالَةَ الصُّحُونِ فِي المَسَاءِ. أَنَا أُشَغِّلُ الغَلَّايَةَ فِي الصَّبَاحِ. فِي رَأْيِي العَمَلُ فِي البَيْتِ مُهِمٌّ لِأَنَّنَا عَائِلَةٌ وَاحِدَةٌ.',
      en: '“In our kitchen the walls are light yellow. There is a black oven, and there is a white fridge and a grey dishwasher. We use the fridge to keep food, and we use the oven for cooking. My mother cooks every day, and my father switches on the dishwasher in the evening. I switch on the kettle in the morning. In my opinion housework is important because we are one family.”',
      find: ['صَفْرَاءُ فَاتِحَةٌ', 'ثَلَّاجَةٌ بَيْضَاءُ', 'لِحِفْظِ الطَّعَامِ', 'كُلَّ يَوْمٍ'],
    },
  },
});
