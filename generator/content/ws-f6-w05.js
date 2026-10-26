'use strict';
/* Apply Workshop · F6-W05 · F6-L09 (extended writing: my town and how I get around) + F6-L10 (listening: town and transport texts). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f6-w05', pair: ['f6-l09', 'f6-l10'],
  title: 'Day Trip: Listen, Then Blog', arShort: 'رِحْلَةُ يَوْمٍ: اسْتَمِعْ ثُمَّ اكْتُبْ',
  focus: 'Students join listening with extended writing: on a day trip they listen to station and bus announcements (predicting the answer type and avoiding distractors after لَيْسَ … بَلْ …), report the facts, and then write a three-paragraph travel blog about the town and the journey.',
  sortTitle: 'Listening question or blog phrase?', sortCats: ['Blog phrases · F6-L09', 'Listening questions · F6-L10'],
  sort: [
    { ar: 'بِصِفَةٍ عَامَّةٍ', cat: 0 }, { ar: 'أُوصِي بِزِيَارَةِ …', cat: 0 }, { ar: 'مِنْ مَزَايَاهَا أَنَّ …', cat: 0 }, { ar: 'تَتَمَيَّزُ بِالحَدَائِقِ', cat: 0 },
    { ar: 'مِنْ أَيِّ رَصِيفٍ؟', cat: 1 }, { ar: 'مَتَى يُغَادِرُ؟', cat: 1 }, { ar: 'كَمْ ثَمَنُ التَّذْكِرَةِ؟', cat: 1 }, { ar: 'لِمَاذَا هُوَ مُتَأَخِّرٌ؟', cat: 1 },
  ],
  dialogue: {
    title: 'Did you hear the announcement?', ar: 'هَلْ سَمِعْتَ الإِعْلَانَ؟',
    lines: [
      ['A', '«يَا رُكَّابُ: القِطَارُ إِلَى بَاث يُغَادِرُ مِنَ الرَّصِيفِ رَقْمِ ثَلَاثَةٍ، لَيْسَ مِنَ الرَّصِيفِ رَقْمِ اثْنَيْنِ».', '“Passengers: the train to Bath leaves from platform three, not from platform two.”'],
      ['B', 'مِنْ أَيِّ رَصِيفٍ؟ اثْنَيْنِ؟', 'Which platform? Two?'],
      ['A', 'لَا، اسْتَمِعْ: لَيْسَ مِنْ رَقْمِ اثْنَيْنِ بَلْ مِنْ رَقْمِ ثَلَاثَةٍ.', 'No, listen: not from two but from three.'],
      ['B', 'وَمَتَى يُغَادِرُ؟', 'And when does it leave?'],
      ['A', 'فِي السَّاعَةِ التَّاسِعَةِ وَالرُّبْعِ، وَتَسْتَغْرِقُ الرِّحْلَةُ سَاعَةً وَاحِدَةً.', 'At a quarter past nine, and the journey takes one hour.'],
      ['B', 'مُمْتَازٌ! سَأَكْتُبُ كُلَّ هٰذَا فِي مُدَوَّنَتِي.', 'Excellent! I will write all this in my blog.'],
    ],
    notes: 'Predicting the answer type and the distractor (لَيْسَ … بَلْ …) come from F6-L10; the facts become paragraph 2 of the F6-L09 blog.',
  },
  card: {
    title: 'Listening card — announcements at the station', ar: 'إِعْلَانَاتُ المَحَطَّةِ', you: 'the listener', them: 'the announcer',
    mix: 'listening for the answer type and ignoring distractors (F6-L10), then turning the facts into connected sentences for the blog (F6-L09)',
    tasks: [
      { ex: '«الحَافِلَةُ رَقْمُ سَبْعَةٍ تَقِفُ اليَوْمَ أَمَامَ المَكْتَبَةِ، لَيْسَ أَمَامَ المَسْجِدِ».', task: 'Where does bus 7 stop today?', plan: 'أَيْنَ ← مَكَانٌ: أَمَامَ …', model: 'تَقِفُ أَمَامَ المَكْتَبَةِ.', modelEn: 'It stops in front of the library.' },
      { ex: '«القِطَارُ إِلَى بَاث مُتَأَخِّرٌ عِشْرِينَ دَقِيقَةً بِسَبَبِ المَطَرِ».', task: 'Why is the train late, and by how much?', plan: 'لِمَاذَا ← بِسَبَبِ … · كَمْ ← … دَقِيقَةً', model: 'هُوَ مُتَأَخِّرٌ عِشْرِينَ دَقِيقَةً بِسَبَبِ المَطَرِ.', modelEn: 'It is twenty minutes late because of the rain.' },
      { ex: '«ثَمَنُ التَّذْكِرَةِ المُفْرَدَةِ ثَمَانِيَةُ جُنَيْهَاتٍ، بَيْنَمَا تَذْكِرَةُ الذَّهَابِ وَالإِيَابِ بِاثْنَيْ عَشَرَ جُنَيْهًا».', task: 'How much is a single ticket?', plan: 'كَمْ ← رَقْمٌ: … جُنَيْهَاتٍ', model: 'ثَمَانِيَةُ جُنَيْهَاتٍ.', modelEn: 'Eight pounds.' },
      { ex: '«يَا رُكَّابُ، اذْهَبُوا إِلَى المَخْرَجِ عَلَى اليَمِينِ».', task: 'Where must passengers go?', plan: 'أَيْنَ ← إِلَى … عَلَى …', model: 'إِلَى المَخْرَجِ عَلَى اليَمِينِ.', modelEn: 'To the exit on the right.' },
      { unexpected: true, ex: 'وَالآنَ أَخْبِرْنِي: كَيْفَ كَانَتْ رِحْلَتُكَ إِلَى بَاث؟', task: 'Retell in two connected sentences.', plan: 'كَيْفَ ← سَافَرْتُ بِالقِطَارِ … ، وَاسْتَغْرَقَتْ … لٰكِنَّ …', model: 'سَافَرْتُ بِالقِطَارِ، وَاسْتَغْرَقَتِ الرِّحْلَةُ سَاعَةً، لٰكِنَّ القِطَارَ كَانَ مُتَأَخِّرًا قَلِيلًا.', modelEn: 'I travelled by train, and the journey took an hour, but the train was a little late.' },
    ],
    foot: 'Partner A reads each announcement ONCE, then again. The listener answers with a short answer first (Core), then a full sentence (Develop). Task ! is a retell. Then swap.',
    girl: 'وَالآنَ أَخْبِرِينِي: كَيْفَ كَانَتْ رِحْلَتُكِ؟',
  },
  talk: {
    title: 'My day trip in three parts', ar: 'رِحْلَتِي فِي ثَلَاثَةِ أَجْزَاءٍ',
    text: 'Talk for 30–45 seconds about a day trip to a town (real or imagined), in three parts like your blog: (1) the town — places and one building, (2) the journey — transport, time, a delay, (3) your judgement — an advantage, a disadvantage and a recommendation.',
    routes: {
      core: 'فِي … يُوجَدُ … · سَافَرْتُ بِالقِطَارِ …',
      develop: 'Add تَسْتَغْرِقُ الرِّحْلَةُ … and an advantage: مِنْ مَزَايَاهَا أَنَّ …',
      stretch: 'Add بِصِفَةٍ عَامَّةٍ … and أُوصِي بِزِيَارَةِ … لِأَنَّ …',
    },
    phrases: [['تَسْتَغْرِقُ الرِّحْلَةُ …', 'the journey takes …'], ['مِنْ مَزَايَاهَا أَنَّ … · مِنْ عُيُوبِهَا أَنَّ …', 'one advantage is … · one disadvantage is …'], ['بِصِفَةٍ عَامَّةٍ …', 'overall …'], ['أُوصِي بِزِيَارَةِ …', 'I recommend visiting …']],
  },
  task: {
    title: 'My travel blog', ar: 'مُدَوَّنَةُ رِحْلَتِي',
    text: 'Write a travel blog post (about 55–75 words) in three paragraphs. Paragraph 1: the town — places, positions and one building with its material. Paragraph 2: the journey — transport, departure time, platform, duration and a delay (use the facts you heard). Paragraph 3: one advantage, one disadvantage, an overall judgement and a recommendation.',
    range: [45, 95],
    phrases: [['فِي … يُوجَدُ … وَتُوجَدُ …', 'in … there is …'], ['غَادَرَ القِطَارُ فِي … مِنَ الرَّصِيفِ …', 'the train left at … from platform …'], ['مِنْ مَزَايَاهَا أَنَّ … ، لٰكِنْ مِنْ عُيُوبِهَا أَنَّ …', 'an advantage is that …, but a disadvantage is that …'], ['بِصِفَةٍ عَامَّةٍ … · أُوصِي بِزِيَارَةِ …', 'overall … · I recommend visiting …']],
    coreFrames: [
      { ar: 'زُرْتُ مَدِينَةَ ______ . فِيهَا ______ وَ ______ .', en: '¶1 I visited … . It has … and …' },
      { ar: '______ مَبْنِيٌّ / مَبْنِيَّةٌ مِنَ ______ .', en: '¶1 … is built of …' },
      { ar: 'سَافَرْتُ بِالقِطَارِ، وَغَادَرَ فِي ______ .', en: '¶2 I travelled by train, and it left at …' },
      { ar: 'اسْتَغْرَقَتِ الرِّحْلَةُ ______ .', en: '¶2 The journey took …' },
      { ar: 'بِصِفَةٍ عَامَّةٍ ______ .', en: '¶3 Overall …' },
    ],
    developFrames: [
      { ar: 'كَانَ القِطَارُ مُتَأَخِّرًا ______ بِسَبَبِ ______ .', en: '¶2 The train was … late because of …' },
      { ar: 'مِنْ مَزَايَاهَا أَنَّ ______ ، وَمِنْ عُيُوبِهَا أَنَّ ______ .', en: '¶3 An advantage is that …, and a disadvantage is that …' },
      { ar: 'أُوصِي بِزِيَارَةِ ______ لِأَنَّ ______ .', en: '¶3 I recommend visiting … because …' },
    ],
    bank: ['زُرْتُ', 'يُوجَدُ · تُوجَدُ', 'مَبْنِيٌّ مِنَ', 'غَادَرَ · وَصَلَ', 'اسْتَغْرَقَتِ الرِّحْلَةُ', 'مُتَأَخِّرٌ', 'مِنْ مَزَايَاهَا أَنَّ', 'بِصِفَةٍ عَامَّةٍ'],
    model: {
      text: `زُرْتُ مَدِينَةَ بَاث يَوْمَ السَّبْتِ. فِيهَا حَمَّامَاتٌ رُومَانِيَّةٌ قَدِيمَةٌ، وَمُقَابِلَهَا كَنِيسَةٌ كَبِيرَةٌ مَبْنِيَّةٌ مِنَ الحَجَرِ.
سَافَرْتُ بِالقِطَارِ، وَغَادَرَ القِطَارُ فِي التَّاسِعَةِ وَالرُّبْعِ مِنَ الرَّصِيفِ رَقْمِ ثَلَاثَةٍ. كَانَ مُتَأَخِّرًا عِشْرِينَ دَقِيقَةً بِسَبَبِ المَطَرِ، وَاسْتَغْرَقَتِ الرِّحْلَةُ سَاعَةً.
مِنْ مَزَايَا بَاث أَنَّهَا جَمِيلَةٌ وَتَارِيخِيَّةٌ، وَمِنْ عُيُوبِهَا أَنَّهَا مُكْتَظَّةٌ. بِصِفَةٍ عَامَّةٍ، أُوصِي بِزِيَارَتِهَا!`,
      en: '“I visited the city of Bath on Saturday. It has old Roman baths, and opposite them a big church built of stone. / I travelled by train, and the train left at a quarter past nine from platform three. It was twenty minutes late because of the rain, and the journey took an hour. / One advantage of Bath is that it is beautiful and historic, and one disadvantage is that it is crowded. Overall, I recommend visiting it!”',
      find: ['مَبْنِيَّةٌ مِنَ الحَجَرِ', 'مِنَ الرَّصِيفِ رَقْمِ ثَلَاثَةٍ', 'بِسَبَبِ المَطَرِ', 'أُوصِي بِزِيَارَتِهَا'],
    },
  },
});
