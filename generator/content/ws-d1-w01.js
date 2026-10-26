'use strict';
/* Apply Workshop · D1-W01 · D1-L01 (my morning routine) + D1-L02 (telling the time). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd1-w01', pair: ['d1-l01', 'd1-l02'],
  title: 'Morning Plans with a Visiting Pen-Friend', arShort: 'صَبَاحٌ مَعَ صَدِيقِي الزَّائِرِ',
  focus: 'Students join the morning routine with precise clock times: a pen-friend from Morocco is staying for a week, so they plan the school morning minute by minute — waking, praying, breakfast, travel, the first lesson — with fractions of the hour and durations, then write a morning plan for the guest.',
  dialogue: {
    title: 'What time do we get up?', ar: 'مَتَى نَسْتَيْقِظُ؟',
    lines: [
      ['A', 'مَتَى نَسْتَيْقِظُ غَدًا؟', 'What time do we get up tomorrow?'],
      ['B', 'أَسْتَيْقِظُ عَادَةً فِي السَّادِسَةِ وَالنِّصْفِ، ثُمَّ أُصَلِّي الفَجْرَ.', 'I usually wake up at half past six, then I pray Fajr.'],
      ['A', 'وَمَتَى نَتَنَاوَلُ الفُطُورَ؟', 'And when do we have breakfast?'],
      ['B', 'فِي السَّابِعَةِ إِلَّا الرُّبْعَ. يَسْتَمِرُّ الفُطُورُ عِشْرِينَ دَقِيقَةً تَقْرِيبًا.', 'At a quarter to seven. Breakfast lasts about twenty minutes.'],
      ['A', 'وَكَيْفَ نَذْهَبُ إِلَى المَدْرَسَةِ؟', 'And how do we go to school?'],
      ['B', 'نَخْرُجُ فِي السَّابِعَةِ وَالثُّلُثِ وَنَذْهَبُ بِالحَافِلَةِ، لِأَنَّ الحِصَّةَ الأُولَى تَبْدَأُ فِي الثَّامِنَةِ.', 'We leave at twenty past seven and go by bus, because the first lesson starts at eight.'],
    ],
    notes: 'The morning sequence (أَسْتَيْقِظُ · أُصَلِّي · نَخْرُجُ) comes from D1-L01; feminine ordinals with fractions (السَّابِعَةِ إِلَّا الرُّبْعَ · وَالثُّلُثِ) and يَسْتَمِرُّ from D1-L02.',
  },
  card: {
    title: 'Role-play card — the guest’s first morning', ar: 'الصَّبَاحُ الأَوَّلُ لِلضَّيْفِ', you: 'the host', them: 'the visiting pen-friend',
    mix: 'morning actions in sequence and opinions (D1-L01) with exact times, fractions of the hour and durations (D1-L02)',
    tasks: [
      { ex: 'مَتَى تَسْتَيْقِظُ يَوْمَ المَدْرَسَةِ؟', task: 'Give the exact time and your first action.', plan: 'مَتَى ← أَسْتَيْقِظُ فِي … ، وَأَوَّلًا …', model: 'أَسْتَيْقِظُ فِي السَّادِسَةِ وَالرُّبْعِ، وَأَوَّلًا أَغْسِلُ وَجْهِي وَأُصَلِّي.', modelEn: 'I wake up at a quarter past six, and first I wash my face and pray.' },
      { ex: 'كَمْ يَسْتَمِرُّ الفُطُورُ عِنْدَكُمْ؟', task: 'Give a duration and what you eat.', plan: 'كَمْ ← يَسْتَمِرُّ … ، آكُلُ …', model: 'يَسْتَمِرُّ رُبْعَ سَاعَةٍ؛ آكُلُ خُبْزًا وَبَيْضًا وَأَشْرَبُ الحَلِيبَ.', modelEn: 'It lasts a quarter of an hour; I eat bread and eggs and drink milk.' },
      { ex: 'مَتَى نَخْرُجُ مِنَ البَيْتِ؟ وَلِمَاذَا فِي هٰذَا الوَقْتِ؟', task: 'Give a time with a fraction and a reason.', plan: 'مَتَى ← فِي … لِأَنَّ …', model: 'نَخْرُجُ فِي السَّابِعَةِ وَالثُّلُثِ، لِأَنَّ الحَافِلَةَ تَأْتِي فِي السَّابِعَةِ وَالنِّصْفِ.', modelEn: 'We leave at twenty past seven, because the bus comes at half past seven.' },
      { ex: 'مَتَى تَبْدَأُ الحِصَّةُ الأُولَى وَمَتَى تَنْتَهِي؟', task: 'Start, finish and duration.', plan: '______________', model: 'تَبْدَأُ فِي الثَّامِنَةِ، وَتَنْتَهِي فِي التَّاسِعَةِ إِلَّا عَشْرَ دَقَائِقَ؛ تَسْتَمِرُّ خَمْسِينَ دَقِيقَةً.', modelEn: 'It starts at eight and ends at ten to nine; it lasts fifty minutes.' },
      { unexpected: true, ex: 'هَلْ تُحِبُّ الصَّبَاحَ؟ لِمَاذَا؟', task: 'Give an opinion with a reason and a contrast.', plan: '______________', model: 'لَا أُحِبُّ الاسْتِيقَاظَ مُبَكِّرًا، لٰكِنِّي أُحِبُّ الصَّبَاحَ لِأَنَّهُ هَادِئٌ.', modelEn: 'I don’t like waking up early, but I like the morning because it is quiet.' },
    ],
    girl: 'مَتَى تَسْتَيْقِظِينَ؟ · هَلْ تُحِبِّينَ الصَّبَاحَ؟',
  },
  talk: {
    title: 'My morning in one minute', ar: 'صَبَاحِي فِي دَقِيقَةٍ',
    text: 'Talk for one minute about your school-day morning, from waking up to the first lesson: at least five actions in order, four exact times (one with إِلَّا, one with وَالثُّلُثِ or وَالرُّبْعِ), one duration and your opinion of mornings with a reason.',
    routes: {
      core: 'أَسْتَيْقِظُ فِي … · ثُمَّ … · أَذْهَبُ إِلَى المَدْرَسَةِ فِي …',
      develop: 'Add fractions of the hour and a duration: يَسْتَمِرُّ / تَسْتَمِرُّ …',
      stretch: 'Add “he / she” for one family member and a contrast: أَمَّا أَخِي فَ…',
    },
  },
  task: {
    title: 'A morning plan for our guest', ar: 'خُطَّةُ الصَّبَاحِ لِضَيْفِنَا',
    text: 'Write a message (about 70–90 words) for your pen-friend, explaining the plan for a school morning during the visit. Include: • when you wake up and what you do first • breakfast: when, what and how long it lasts • when and how you leave for school, with a reason • when the first lesson starts and ends • at least five exact times (with fractions) • your opinion of mornings and one tip for the guest.',
    range: [60, 110],
    phrases: [['أَسْتَيْقِظُ فِي … ، وَأَوَّلًا …', 'I wake up at … and first …'], ['فِي السَّابِعَةِ إِلَّا الرُّبْعَ · وَالثُّلُثِ', 'at a quarter to seven · twenty past'], ['يَسْتَمِرُّ الفُطُورُ … دَقِيقَةً', 'breakfast lasts … minutes'], ['نَخْرُجُ فِي … لِأَنَّ …', 'we leave at … because …']],
    coreFrames: [
      { ar: 'أَسْتَيْقِظُ فِي ______ ، وَأَوَّلًا ______ .', en: 'I wake up at … and first I …' },
      { ar: 'نَتَنَاوَلُ الفُطُورَ فِي ______ ، وَيَسْتَمِرُّ ______ .', en: 'We have breakfast at …, and it lasts …' },
      { ar: 'نَخْرُجُ فِي ______ وَنَذْهَبُ ______ لِأَنَّ ______ .', en: 'We leave at … and go … because …' },
      { ar: 'تَبْدَأُ الحِصَّةُ الأُولَى فِي ______ وَتَنْتَهِي فِي ______ .', en: 'The first lesson starts at … and ends at …' },
    ],
    developFrames: [
      { ar: 'فِي رَأْيِي الصَّبَاحُ ______ لِأَنَّ ______ .', en: 'In my opinion the morning is … because …' },
      { ar: 'نَصِيحَتِي لَكَ: ______ .', en: 'My tip for you: …' },
      { ar: 'أَمَّا أُمِّي فَ ______ .', en: 'As for my mother, she …' },
    ],
    bank: ['أَسْتَيْقِظُ · أُصَلِّي', 'أَغْسِلُ · أَلْبَسُ', 'أَتَنَاوَلُ الفُطُورَ', 'وَالرُّبْعِ · وَالثُّلُثِ · وَالنِّصْفِ', 'إِلَّا الرُّبْعَ', 'يَسْتَمِرُّ · تَسْتَمِرُّ', 'أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ', 'لِأَنَّ · لٰكِنَّ'],
    model: {
      text: 'أَهْلًا يَا يُوسُفُ! فِي أَيَّامِ المَدْرَسَةِ أَسْتَيْقِظُ فِي السَّادِسَةِ وَالرُّبْعِ، وَأَوَّلًا أَغْسِلُ وَجْهِي وَأُصَلِّي الفَجْرَ. ثُمَّ نَتَنَاوَلُ الفُطُورَ فِي السَّابِعَةِ إِلَّا الرُّبْعَ، وَيَسْتَمِرُّ عِشْرِينَ دَقِيقَةً تَقْرِيبًا؛ عَادَةً آكُلُ خُبْزًا وَبَيْضًا. بَعْدَ ذٰلِكَ نَخْرُجُ فِي السَّابِعَةِ وَالثُّلُثِ وَنَذْهَبُ بِالحَافِلَةِ، لِأَنَّ المَدْرَسَةَ بَعِيدَةٌ. تَبْدَأُ الحِصَّةُ الأُولَى فِي الثَّامِنَةِ، وَتَنْتَهِي فِي التَّاسِعَةِ إِلَّا عَشْرَ دَقَائِقَ. فِي رَأْيِي الصَّبَاحُ صَعْبٌ قَلِيلًا، لٰكِنَّهُ هَادِئٌ وَجَمِيلٌ. نَصِيحَتِي لَكَ: نَمْ مُبَكِّرًا!',
      en: '“Hello, Yusuf! On school days I wake up at a quarter past six, and first I wash my face and pray Fajr. Then we have breakfast at a quarter to seven, and it lasts about twenty minutes; I usually eat bread and eggs. After that we leave at twenty past seven and go by bus, because the school is far. The first lesson starts at eight and ends at ten to nine. In my opinion the morning is a little hard, but it is calm and lovely. My tip for you: go to bed early!”',
      find: ['فِي السَّادِسَةِ وَالرُّبْعِ', 'السَّابِعَةِ إِلَّا الرُّبْعَ', 'وَيَسْتَمِرُّ عِشْرِينَ دَقِيقَةً', 'لِأَنَّ المَدْرَسَةَ بَعِيدَةٌ'],
    },
  },
});
