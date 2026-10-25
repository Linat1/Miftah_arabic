'use strict';
/* Practice Room · F3-L05 · Colours — full system and agreement. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f3-l05',
  arShort: 'الأَلْوَانُ',
  grammar: 'colour agreement: afʿalu → faʿlāʾu (aḥmaru · ḥamrāʾu); -iyyun → -iyyatun (bunniyyun · bunniyyatun); fātiḥ / ghāmiq; mā lawnu …?',
  focus: 'Students run their own speaking and writing practice with colours: say the colours in both forms, act a short dialogue, answer question cards, do a role-play card choosing colours for a bedroom makeover, give a 30-second colour description, then build, fix and write a description with every colour agreeing.',
  words1: 'Basic colours', words2: 'More colours and shades',
  dialogue: {
    title: 'What colour is it?', ar: 'مَا لَوْنُهُ؟',
    lines: [
      ['A', 'مَا لَوْنُ سَيَّارَتِكُمْ؟', 'What colour is your car?'],
      ['B', 'سَيَّارَتُنَا بَيْضَاءُ.', 'Our car is white.'],
      ['A', 'وَمَا لَوْنُ بَابِ البَيْتِ؟', 'And what colour is the front door?'],
      ['B', 'البَابُ أَخْضَرُ غَامِقٌ.', 'The door is dark green.'],
      ['A', 'وَغُرْفَتُكَ؟ مَا لَوْنُهَا؟', 'And your room? What colour is it?'],
      ['B', 'غُرْفَتِي زَرْقَاءُ فَاتِحَةٌ، وَسَرِيرِي رَمَادِيٌّ.', 'My room is light blue, and my bed is grey.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: use REAL things from your home — every colour must agree.',
  },
  questions: [
    { q: 'مَا لَوْنُكَ المُفَضَّلُ؟', en: 'What is your favourite colour?', start: 'لَوْنِي المُفَضَّلُ …', more: '… لِأَنَّهُ …' },
    { q: 'مَا لَوْنُ حَقِيبَتِكَ؟', en: 'What colour is your bag?', start: 'حَقِيبَتِي …', more: '… وَ… أَيْضًا' },
    { q: 'مَا لَوْنُ قَمِيصِكَ اليَوْمَ؟', en: 'What colour is your shirt today?', start: 'قَمِيصِي …', more: '… وَبِنْطَالِي …' },
    { q: 'مَا لَوْنُ جُدْرَانِ غُرْفَتِكَ؟', en: 'What colour are your bedroom walls?', start: 'الجُدْرَانُ …', more: '… فَاتِحَةٌ / غَامِقَةٌ' },
    { q: 'مَا اللَّوْنُ الَّذِي لَا تُحِبُّهُ؟', en: 'Which colour don’t you like?', start: 'لَا أُحِبُّ اللَّوْنَ …', more: '… لِأَنَّهُ …' },
  ],
  card: {
    title: 'Role-play card — a bedroom makeover', ar: 'غُرْفَةٌ جَدِيدَةٌ', you: 'a teenager', them: 'the decorator',
    tasks: [
      { ex: 'أَيَّ لَوْنٍ تُرِيدُ لِلْجُدْرَانِ؟', task: 'Choose a wall colour (+ light / dark).', plan: 'أَيَّ ← أُرِيدُ الجُدْرَانَ … فَاتِحَةً', model: 'أُرِيدُ الجُدْرَانَ زَرْقَاءَ فَاتِحَةً.', modelEn: 'I want the walls light blue.' },
      { ex: 'وَالسَّجَّادَةُ؟', task: 'Choose a colour for the rug.', plan: 'السَّجَّادَةُ ← سَجَّادَةٌ … ← رَمَادِيَّةٌ', model: 'أُرِيدُ سَجَّادَةً رَمَادِيَّةً.', modelEn: 'I want a grey rug.' },
      { ex: 'وَمَا لَوْنُ السَّرِيرِ؟', task: 'Choose a colour for the bed.', plan: 'السَّرِيرُ ← سَرِيرٌ … ← أَبْيَضُ', model: 'أُرِيدُ سَرِيرًا أَبْيَضَ.', modelEn: 'I want a white bed.' },
      { ex: 'لِمَاذَا تُحِبُّ هٰذِهِ الأَلْوَانَ؟', task: 'Give a reason.', plan: 'لِمَاذَا ← لِأَنَّهَا …', model: 'لِأَنَّهَا هَادِئَةٌ وَجَمِيلَةٌ.', modelEn: 'Because they are calm and beautiful.' },
    ],
    girl: 'تُرِيدِينَ · تُحِبِّينَ',
    notes: 'Language: colour after a feminine noun → the feminine colour; after urīdu the colour is accusative (zarqāʾa · abyaḍa).',
  },
  talk: {
    title: '30 seconds: colours around me', ar: 'الأَلْوَانُ حَوْلِي',
    text: 'In 30 seconds, describe the colours around you now: your clothes, your room, things on your desk. Every colour must agree with its noun.',
    routes: {
      core: 'Four items: قَمِيصِي … · حَقِيبَتِي …',
      develop: 'Add fātiḥ / ghāmiq: أَزْرَقُ فَاتِحٌ · زَرْقَاءُ فَاتِحَةٌ.',
      stretch: 'Add patterns or materials (مُخَطَّطٌ · ذَهَبِيٌّ) and your favourite colour with a reason.',
    },
  },
  builder: [
    { en: 'The car is red.', cols: [['السَّيَّارَةُ', 'السَّيَّارَةَ'], ['حَمْرَاءُ', 'أَحْمَرُ'], ['.', 'جِدًّا.']], key: [0, 0, 0], why: 'A feminine noun → حَمْرَاءُ (afʿalu → faʿlāʾu).' },
    { en: 'I have a brown bag.', cols: [['عِنْدِي', 'عِنْدَهُ'], ['حَقِيبَةٌ', 'حَقِيبَةً'], ['بُنِّيَّةٌ.', 'بُنِّيٌّ.']], key: [0, 0, 0], why: '-iyy colours add ة for feminine: بُنِّيَّةٌ.' },
    { en: 'His shirt is dark blue.', cols: [['قَمِيصُهُ', 'قَمِيصُهَا'], ['أَزْرَقُ', 'زَرْقَاءُ'], ['غَامِقٌ.', 'غَامِقَةٌ.']], key: [0, 0, 0], why: 'قَمِيصٌ is masculine → أَزْرَقُ غَامِقٌ.' },
  ],
  errors: [
    { wrong: 'الوَرْدَةُ أَصْفَرُ.', hint: 'الوَرْدَةُ is feminine.', right: 'الوَرْدَةُ صَفْرَاءُ.', why: 'أَصْفَرُ → صَفْرَاءُ for a feminine noun.' },
    { wrong: 'السَّجَّادَةُ رَمَادِيٌّ.', hint: 'An -iyy colour with a feminine noun.', right: 'السَّجَّادَةُ رَمَادِيَّةٌ.', why: '-iyyun → -iyyatun.' },
    { wrong: 'البَابُ خَضْرَاءُ.', hint: 'بَابٌ is masculine.', right: 'البَابُ أَخْضَرُ.', why: 'Masculine noun → أَخْضَرُ.' },
  ],
  task: {
    title: 'My dream bedroom', ar: 'غُرْفَةُ أَحْلَامِي',
    text: 'Write a description (about 40–60 words) of your dream bedroom. Include: • the colour of the walls • at least five items, each with a colour that agrees • one light or dark shade • your favourite colour and why.',
    phrases: [['الجُدْرَانُ … فَاتِحَةٌ / غَامِقَةٌ', 'the walls are light / dark …'], ['يُوجَدُ سَرِيرٌ أَبْيَضُ', 'there is a white bed'], ['تُوجَدُ سَجَّادَةٌ حَمْرَاءُ', 'there is a red rug'], ['لَوْنِي المُفَضَّلُ … لِأَنَّهُ …', 'my favourite colour is … because …']],
    coreFrames: [
      { ar: 'فِي غُرْفَةِ أَحْلَامِي، الجُدْرَانُ ______ .', en: 'In my dream room, the walls are …' },
      { ar: 'يُوجَدُ سَرِيرٌ ______ ، وَتُوجَدُ خِزَانَةٌ ______ .', en: 'There is a … bed and a … wardrobe.' },
      { ar: 'السَّجَّادَةُ ______ ، وَالمِصْبَاحُ ______ .', en: 'The rug is …, and the lamp is …' },
      { ar: 'لَوْنِي المُفَضَّلُ ______ .', en: 'My favourite colour is …' },
    ],
    developFrames: [
      { ar: 'السَّتَائِرُ ______ فَاتِحَةٌ / غَامِقَةٌ.', en: 'The curtains are light / dark …' },
      { ar: 'أُحِبُّ اللَّوْنَ ______ لِأَنَّهُ ______ .', en: 'I like … because it is …' },
    ],
    bank: ['أَحْمَرُ · حَمْرَاءُ', 'أَزْرَقُ · زَرْقَاءُ', 'أَبْيَضُ · بَيْضَاءُ', 'أَخْضَرُ · خَضْرَاءُ', 'بُنِّيٌّ · بُنِّيَّةٌ', 'رَمَادِيٌّ · رَمَادِيَّةٌ', 'فَاتِحٌ · غَامِقٌ', 'لَوْنٌ'],
    model: {
      text: 'فِي غُرْفَةِ أَحْلَامِي، الجُدْرَانُ خَضْرَاءُ فَاتِحَةٌ. يُوجَدُ سَرِيرٌ أَبْيَضُ كَبِيرٌ، وَتُوجَدُ خِزَانَةٌ بُنِّيَّةٌ. السَّجَّادَةُ رَمَادِيَّةٌ، وَالمِصْبَاحُ ذَهَبِيٌّ، وَالسَّتَائِرُ زَرْقَاءُ غَامِقَةٌ. عَلَى المَكْتَبِ حَاسُوبٌ فِضِّيٌّ. لَوْنِي المُفَضَّلُ الأَخْضَرُ، لِأَنَّهُ لَوْنُ الطَّبِيعَةِ، وَهُوَ هَادِئٌ.',
      en: '“In my dream room, the walls are light green. There is a big white bed and a brown wardrobe. The rug is grey, the lamp is gold and the curtains are dark blue. On the desk there is a silver computer. My favourite colour is green, because it is the colour of nature and it is calm.”',
      find: ['خَضْرَاءُ فَاتِحَةٌ', 'سَرِيرٌ أَبْيَضُ', 'خِزَانَةٌ بُنِّيَّةٌ', 'زَرْقَاءُ غَامِقَةٌ'],
    },
  },
  checkCore: 'make every colour agree with its noun?',
  checkDevelop: 'use both feminine patterns (حَمْرَاءُ · بُنِّيَّةٌ) and a shade (فَاتِحٌ / غَامِقٌ)?',
});
