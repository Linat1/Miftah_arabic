'use strict';
/* Apply Workshop · D1-W02 · D1-L03 (how often? frequency) + D1-L04 (before and after: sequencing). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd1-w02', pair: ['d1-l03', 'd1-l04'],
  title: 'The Wellbeing Week Survey', arShort: 'اسْتِبْيَانُ أُسْبُوعِ الرَّفَاهِيَةِ',
  focus: 'Students join frequency with sequencing: for the school’s wellbeing week they survey each other on how often they do healthy things and in what order (قَبْلَ / بَعْدَ + noun, قَبْلَ أَنْ / بَعْدَ أَنْ + verb), compare a busy day and a quiet day, and write a survey report.',
  dialogue: {
    title: 'The wellbeing survey', ar: 'اسْتِبْيَانُ الرَّفَاهِيَةِ',
    lines: [
      ['A', 'كَمْ مَرَّةً تُمَارِسُ الرِّيَاضَةَ فِي الأُسْبُوعِ؟', 'How many times a week do you do sport?'],
      ['B', 'ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ، عَادَةً بَعْدَ المَدْرَسَةِ.', 'Three times a week, usually after school.'],
      ['A', 'وَمَاذَا تَفْعَلُ قَبْلَ أَنْ تَنَامَ؟', 'And what do you do before you sleep?'],
      ['B', 'أَقْرَأُ قَلِيلًا، وَلَا أَسْتَعْمِلُ الهَاتِفَ أَبَدًا قَبْلَ النَّوْمِ.', 'I read a little, and I never use my phone before sleep.'],
      ['A', 'هَلْ يَوْمُ الإِثْنَيْنِ مِثْلُ يَوْمِ السَّبْتِ؟', 'Is Monday like Saturday?'],
      ['B', 'لَا! يَوْمُ الإِثْنَيْنِ مُزْدَحِمٌ، بَيْنَمَا يَوْمُ السَّبْتِ هَادِئٌ. بَعْدَ أَنْ أَسْتَيْقِظَ يَوْمَ السَّبْتِ، أَتَنَاوَلُ الفُطُورَ بِبُطْءٍ.', 'No! Monday is busy, whereas Saturday is quiet. After I wake up on Saturday, I have breakfast slowly.'],
    ],
    notes: 'Frequency (ثَلَاثَ مَرَّاتٍ · عَادَةً · لَا … أَبَدًا) and بَيْنَمَا come from D1-L03; قَبْلَ النَّوْمِ (noun) vs قَبْلَ أَنْ تَنَامَ / بَعْدَ أَنْ أَسْتَيْقِظَ (verb in -a) from D1-L04.',
  },
  card: {
    title: 'Role-play card — the wellbeing interview', ar: 'مُقَابَلَةُ الرَّفَاهِيَةِ', you: 'the student', them: 'the wellbeing officer',
    mix: 'frequency expressions and comparisons (D1-L03) with qabla / baʿda + noun and qabla an / baʿda an + verb in -a (D1-L04)',
    tasks: [
      { ex: 'كَمْ مَرَّةً تَأْكُلُ الفَاكِهَةَ؟', task: 'Give a frequency expression.', plan: 'كَمْ ← … مَرَّاتٍ فِي … / يَوْمِيًّا', model: 'آكُلُ الفَاكِهَةَ يَوْمِيًّا، عَادَةً بَعْدَ الغَدَاءِ.', modelEn: 'I eat fruit daily, usually after lunch.' },
      { ex: 'مَاذَا تَفْعَلُ قَبْلَ المَدْرَسَةِ؟', task: 'Two actions with قَبْلَ + noun.', plan: 'قَبْلَ ← قَبْلَ المَدْرَسَةِ … ثُمَّ …', model: 'قَبْلَ المَدْرَسَةِ أُصَلِّي، ثُمَّ أَمْشِي عَشْرَ دَقَائِقَ.', modelEn: 'Before school I pray, then I walk for ten minutes.' },
      { ex: 'وَمَاذَا تَفْعَلُ بَعْدَ أَنْ تَرْجِعَ إِلَى البَيْتِ؟', task: 'Answer with بَعْدَ أَنْ + verb in -a.', plan: 'بَعْدَ أَنْ ← بَعْدَ أَنْ أَرْجِعَ …', model: 'بَعْدَ أَنْ أَرْجِعَ، أَسْتَرِيحُ نِصْفَ سَاعَةٍ، ثُمَّ أُكْمِلُ وَاجِبِي.', modelEn: 'After I get back, I rest for half an hour, then I finish my homework.' },
      { ex: 'مَا الَّذِي لَا تَفْعَلُهُ أَبَدًا؟', task: 'Never + a reason.', plan: 'مَا ← لَا … أَبَدًا لِأَنَّ …', model: 'لَا أَشْرَبُ المَشْرُوبَاتِ الغَازِيَّةَ أَبَدًا لِأَنَّهَا غَيْرُ صِحِّيَّةٍ.', modelEn: 'I never drink fizzy drinks because they are unhealthy.' },
      { unexpected: true, ex: 'قَارِنْ يَوْمًا مُزْدَحِمًا بِيَوْمٍ هَادِئٍ.', task: 'Compare with بَيْنَمَا or أَمَّا … فَ…', plan: 'قَارِنْ ← يَوْمُ … مُزْدَحِمٌ، بَيْنَمَا …', model: 'يَوْمُ الثُّلَاثَاءِ مُزْدَحِمٌ، بَيْنَمَا يَوْمُ الأَحَدِ هَادِئٌ؛ أَمَّا يَوْمُ الجُمُعَةِ فَأُصَلِّي فِي المَسْجِدِ.', modelEn: 'Tuesday is busy, whereas Sunday is quiet; as for Friday, I pray at the mosque.' },
    ],
    girl: 'كَمْ مَرَّةً تَأْكُلِينَ …؟ · مَاذَا تَفْعَلِينَ بَعْدَ أَنْ تَرْجِعِي …؟',
  },
  talk: {
    title: 'How healthy is my week?', ar: 'هَلْ أُسْبُوعِي صِحِّيٌّ؟',
    text: 'Talk for one minute about your week: four healthy habits with how often you do them, the order of your evening (قَبْلَ أَنْ … · بَعْدَ أَنْ …), one thing you never do, and a comparison between a busy day and a quiet day.',
    routes: {
      core: 'عَادَةً … · أَحْيَانًا … · قَبْلَ المَدْرَسَةِ …',
      develop: 'Add قَبْلَ أَنْ / بَعْدَ أَنْ + verb in -a and لَا … أَبَدًا.',
      stretch: 'Add بَيْنَمَا and أَمَّا … فَ… and a judgement: هَلْ أُسْبُوعِي صِحِّيٌّ؟',
    },
  },
  task: {
    title: 'Our wellbeing survey report', ar: 'تَقْرِيرُ الاسْتِبْيَانِ',
    text: 'Write a report (about 60–80 words) for the wellbeing week about your own habits and a partner’s. Include: • five frequency expressions • two qabla / baʿda + noun and two qabla an / baʿda an + verb • one thing you never do • a comparison with بَيْنَمَا or أَمَّا … فَ… • a judgement: what will you change and why?',
    range: [50, 100],
    phrases: [['ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ · يَوْمِيًّا', 'three times a week · daily'], ['قَبْلَ النَّوْمِ · بَعْدَ الغَدَاءِ', 'before sleep · after lunch'], ['قَبْلَ أَنْ أَنَامَ · بَعْدَ أَنْ أَرْجِعَ', 'before I sleep · after I return'], ['بَيْنَمَا · أَمَّا … فَ…', 'whereas · as for … (then)']],
    coreFrames: [
      { ar: 'أُمَارِسُ الرِّيَاضَةَ ______ مَرَّاتٍ فِي الأُسْبُوعِ.', en: 'I do sport … times a week.' },
      { ar: 'قَبْلَ المَدْرَسَةِ ______ .', en: 'Before school I …' },
      { ar: 'بَعْدَ أَنْ أَرْجِعَ إِلَى البَيْتِ، ______ .', en: 'After I get home, I …' },
      { ar: 'لَا ______ أَبَدًا لِأَنَّ ______ .', en: 'I never … because …' },
    ],
    developFrames: [
      { ar: 'أَمَّا زَمِيلِي / زَمِيلَتِي فَ ______ .', en: 'As for my classmate, he / she …' },
      { ar: 'يَوْمُ ______ مُزْدَحِمٌ، بَيْنَمَا يَوْمُ ______ هَادِئٌ.', en: '… is busy, whereas … is quiet.' },
      { ar: 'سَأُحَاوِلُ أَنْ ______ لِأَنَّ ______ .', en: 'I will try to … because …' },
    ],
    bank: ['دَائِمًا · عَادَةً · غَالِبًا', 'أَحْيَانًا · نَادِرًا', 'لَا … أَبَدًا', 'مَرَّةً · مَرَّتَيْنِ', 'قَبْلَ النَّوْمِ · بَعْدَ الغَدَاءِ', 'قَبْلَ أَنْ · بَعْدَ أَنْ', 'بَيْنَمَا', 'أَمَّا … فَ…'],
    model: {
      text: 'أُمَارِسُ الرِّيَاضَةَ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ، وَآكُلُ الفَاكِهَةَ يَوْمِيًّا. قَبْلَ المَدْرَسَةِ أَمْشِي عَشْرَ دَقَائِقَ، وَبَعْدَ الغَدَاءِ أَشْرَبُ مَاءً كَثِيرًا. بَعْدَ أَنْ أَرْجِعَ إِلَى البَيْتِ أَسْتَرِيحُ قَلِيلًا، وَقَبْلَ أَنْ أَنَامَ أَقْرَأُ. لَا أَسْتَعْمِلُ الهَاتِفَ أَبَدًا فِي السَّرِيرِ. أَمَّا زَمِيلِي سَامِي فَيَلْعَبُ أَلْعَابَ الفِيدْيُو كَثِيرًا، وَنَادِرًا مَا يَمْشِي. يَوْمُ الإِثْنَيْنِ مُزْدَحِمٌ عِنْدِي، بَيْنَمَا يَوْمُ السَّبْتِ هَادِئٌ. سَأُحَاوِلُ أَنْ أَنَامَ مُبَكِّرًا لِأَنَّ النَّوْمَ مُهِمٌّ لِلصِّحَّةِ.',
      en: '“I do sport three times a week, and I eat fruit daily. Before school I walk for ten minutes, and after lunch I drink a lot of water. After I get home I rest a little, and before I sleep I read. I never use my phone in bed. As for my classmate Sami, he plays video games a lot and rarely walks. Monday is busy for me, whereas Saturday is quiet. I will try to sleep early because sleep is important for health.”',
      find: ['ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ', 'بَعْدَ أَنْ أَرْجِعَ', 'لَا أَسْتَعْمِلُ الهَاتِفَ أَبَدًا', 'بَيْنَمَا يَوْمُ السَّبْتِ'],
    },
  },
});
