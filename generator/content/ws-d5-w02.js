'use strict';
/* Apply Workshop · D5-W02 · D5-L03 (past tense: Form I singular) + D5-L04 (past tense: plural forms and irregular verbs). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd5-w02', pair: ['d5-l03', 'd5-l04'],
  title: 'Sports Day: What Happened?', arShort: 'اليَوْمُ الرِّيَاضِيُّ: مَاذَا حَدَثَ؟',
  focus: 'Students join every past-tense person in one real event: after the school sports day they tell what they did (-tu), what a boy and a girl did (-a / -at), what “we” and “they” did (-nā / -ū) — including irregular stems (مَشَيْنَا · رَأَيْنَا · قَالُوا) and one negative with لَمْ — and write the sports-day report.',
  dialogue: {
    title: 'The day after sports day', ar: 'بَعْدَ اليَوْمِ الرِّيَاضِيِّ',
    lines: [
      ['A', 'مَاذَا فَعَلْتِ فِي اليَوْمِ الرِّيَاضِيِّ؟', 'What did you do on sports day?'],
      ['B', 'رَكَضْتُ فِي سِبَاقِ مِئَةِ مِتْرٍ، وَفُزْتُ بِالمِيدَالِيَّةِ الفِضِّيَّةِ!', 'I ran in the hundred-metre race, and I won the silver medal!'],
      ['A', 'وَمَاذَا فَعَلَ صَفُّكُمْ؟', 'And what did your class do?'],
      ['B', 'لَعِبْنَا كُرَةَ القَدَمِ، وَرَأَيْنَا سِبَاقَ المُعَلِّمِينَ. مَشَيْنَا إِلَى المَلْعَبِ مَعًا.', 'We played football, and we saw the teachers’ race. We walked to the field together.'],
      ['A', 'وَهَلْ شَارَكَتْ أُخْتُكِ؟', 'And did your sister take part?'],
      ['B', 'نَعَمْ، قَفَزَتْ وَرَمَتِ الكُرَةَ بَعِيدًا، أَمَّا أَخِي فَلَمْ يُشَارِكْ؛ قَالَ المُعَلِّمُونَ إِنَّهُ كَانَ مَرِيضًا.', 'Yes, she jumped and threw the ball far, but my brother did not take part; the teachers said he was ill.'],
    ],
    notes: 'Singular past endings (رَكَضْتُ · قَفَزَتْ) and لَمْ + jussive (لَمْ يُشَارِكْ) come from D5-L03; plural endings (لَعِبْنَا · قَالُوا) and irregular stems (فُزْتُ · رَأَيْنَا · مَشَيْنَا · رَمَتْ) from D5-L04.',
  },
  card: {
    title: 'Role-play card — the school newsletter reporter', ar: 'مُرَاسِلُ النَّشْرَةِ المَدْرَسِيَّةِ', you: 'a student who took part', them: 'the newsletter reporter',
    mix: 'singular past endings and لَمْ + jussive (D5-L03) with “we” and “they” endings and irregular stems (D5-L04)',
    tasks: [
      { ex: 'مَاذَا فَعَلْتَ فِي اليَوْمِ الرِّيَاضِيِّ؟', task: 'Three “I” actions in order.', plan: 'مَاذَا ← أَوَّلًا رَكَضْتُ … ، ثُمَّ …', model: 'أَوَّلًا رَكَضْتُ فِي السِّبَاقِ، ثُمَّ قَفَزْتُ، وَبَعْدَ ذٰلِكَ شَرِبْتُ مَاءً كَثِيرًا!', modelEn: 'First I ran in the race, then I jumped, and after that I drank a lot of water!' },
      { ex: 'وَمَاذَا فَعَلْتُمْ كَصَفٍّ؟', task: 'Two “we” actions, one irregular.', plan: 'مَاذَا ← لَعِبْنَا … · مَشَيْنَا / رَأَيْنَا …', model: 'لَعِبْنَا شَدَّ الحَبْلِ، وَرَأَيْنَا سِبَاقَ المُعَلِّمِينَ.', modelEn: 'We played tug-of-war, and we saw the teachers’ race.' },
      { ex: 'مَنْ فَازَ بِسِبَاقِ البَنَاتِ؟', task: 'A “she” action.', plan: '______________', model: 'فَازَتْ زَمِيلَتِي سَارَةُ؛ رَكَضَتْ بِسُرْعَةٍ كَبِيرَةٍ.', modelEn: 'My classmate Sara won; she ran very fast.' },
      { ex: 'وَمَاذَا فَعَلَ المُعَلِّمُونَ؟', task: 'Two “they” actions, one irregular.', plan: '______________', model: 'نَظَّمُوا الأَلْعَابَ، وَقَالُوا إِنَّ اليَوْمَ كَانَ نَاجِحًا.', modelEn: 'They organised the games, and they said the day was a success.' },
      { unexpected: true, ex: 'هَلْ هُنَاكَ شَيْءٌ لَمْ تَفْعَلْهُ؟ لِمَاذَا؟', task: 'A negative past with لَمْ + a reason.', plan: '______________', model: 'لَمْ أُشَارِكْ فِي سِبَاقِ الحَوَاجِزِ، لِأَنَّ رِجْلِي كَانَتْ تُؤْلِمُنِي.', modelEn: 'I did not take part in the hurdles, because my leg was hurting.' },
    ],
    girl: 'مَاذَا فَعَلْتِ؟ · هَلْ هُنَاكَ شَيْءٌ لَمْ تَفْعَلِيهِ؟ — she answers with the same -tu endings',
  },
  talk: {
    title: 'Sports day in one minute', ar: 'اليَوْمُ الرِّيَاضِيُّ فِي دَقِيقَةٍ',
    text: 'Tell the story of a sports day (real or imagined) for one minute: what you did, what a boy and a girl did, what your class did, what the teachers did and said, and one thing you did not do — with at least two irregular verbs.',
    routes: {
      core: 'رَكَضْتُ · لَعِبْتُ · فَازَ … · فَازَتْ …',
      develop: 'Add “we” and “they” endings (لَعِبْنَا · نَظَّمُوا) and لَمْ + jussive.',
      stretch: 'Add three irregular stems (مَشَيْنَا · رَأَيْنَا · قَالُوا · فُزْتُ) and time markers.',
    },
  },
  task: {
    title: 'The sports-day report', ar: 'تَقْرِيرُ اليَوْمِ الرِّيَاضِيِّ',
    text: 'Write a report (about 60–80 words) for the school newsletter about sports day. Include: • when and where (a time marker) • three things you did (-tu) • one thing a boy did (-a) and one a girl did (-at) • two “we” actions and two “they” actions, at least two irregular • one negative with لَمْ • how the day ended.',
    range: [50, 100],
    phrases: [['يَوْمَ الجُمُعَةِ المَاضِي …', 'last Friday …'], ['رَكَضْتُ · فُزْتُ · قَفَزَتْ', 'I ran · I won · she jumped'], ['لَعِبْنَا · مَشَيْنَا · رَأَيْنَا', 'we played · we walked · we saw'], ['نَظَّمُوا … · قَالُوا إِنَّ …', 'they organised … · they said that …']],
    coreFrames: [
      { ar: 'يَوْمَ ______ المَاضِي كَانَ اليَوْمُ الرِّيَاضِيُّ فِي ______ .', en: 'Last … was sports day at …' },
      { ar: 'رَكَضْتُ فِي ______ ، ثُمَّ ______ .', en: 'I ran in …, then I …' },
      { ar: 'فَازَ ______ ، وَفَازَتْ ______ .', en: '… won, and … won.' },
      { ar: 'لَعِبْنَا ______ ، وَرَأَيْنَا ______ .', en: 'We played …, and we saw …' },
      { ar: 'لَمْ ______ لِأَنَّ ______ .', en: 'I did not … because …' },
    ],
    developFrames: [
      { ar: 'نَظَّمَ المُعَلِّمُونَ ______ ، وَقَالُوا إِنَّ ______ .', en: 'The teachers organised …, and they said that …' },
      { ar: 'فِي النِّهَايَةِ ______ .', en: 'In the end …' },
    ],
    bank: ['رَكَضْتُ · قَفَزْتُ', 'فُزْتُ · خَسِرْتُ', 'فَازَ · فَازَتْ', 'لَعِبْنَا · مَشَيْنَا', 'رَأَيْنَا · شَجَّعْنَا', 'نَظَّمُوا · قَالُوا', 'لَمْ أُشَارِكْ', 'أَمْسِ · يَوْمَ الجُمُعَةِ المَاضِي'],
    model: {
      text: 'يَوْمَ الجُمُعَةِ المَاضِي كَانَ اليَوْمُ الرِّيَاضِيُّ فِي مَلْعَبِ المَدْرَسَةِ. مَشَيْنَا إِلَى المَلْعَبِ فِي الصَّبَاحِ. رَكَضْتُ فِي سِبَاقِ مِئَةِ مِتْرٍ، وَفُزْتُ بِالمِيدَالِيَّةِ الفِضِّيَّةِ، ثُمَّ شَرِبْتُ مَاءً كَثِيرًا! فَازَ زَمِيلِي عُمَرُ بِسِبَاقِ الأَوْلَادِ، وَقَفَزَتْ زَمِيلَتِي هُدَى أَعْلَى مِنَ الجَمِيعِ. لَعِبْنَا شَدَّ الحَبْلِ، وَرَأَيْنَا سِبَاقَ المُعَلِّمِينَ. نَظَّمَ المُعَلِّمُونَ الأَلْعَابَ، وَقَالُوا إِنَّ اليَوْمَ كَانَ نَاجِحًا. لَمْ أُشَارِكْ فِي سِبَاقِ الحَوَاجِزِ لِأَنِّي كُنْتُ مُتْعَبًا. فِي النِّهَايَةِ رَجَعْنَا سُعَدَاءَ.',
      en: '“Last Friday was sports day on the school field. We walked to the field in the morning. I ran in the hundred-metre race and won the silver medal, then I drank a lot of water! My classmate Omar won the boys’ race, and my classmate Huda jumped higher than everyone. We played tug-of-war, and we saw the teachers’ race. The teachers organised the games, and they said the day was a success. I did not take part in the hurdles because I was tired. In the end we went back happy.”',
      find: ['فُزْتُ بِالمِيدَالِيَّةِ', 'وَقَفَزَتْ زَمِيلَتِي', 'وَرَأَيْنَا سِبَاقَ', 'وَقَالُوا إِنَّ'],
    },
  },
});
