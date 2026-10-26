'use strict';
/* Apply Workshop · D5-W01 · D5-L01 (hobbies and free time) + D5-L02 (sport and famous athletes). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd5-w01', pair: ['d5-l01', 'd5-l02'],
  title: 'The Clubs Fair: Hobbies and Heroes', arShort: 'مَعْرِضُ الأَنْدِيَةِ',
  focus: 'Students join hobbies with sport: at the school clubs fair they recruit members — the right verb for each hobby, how often, preferences — and present a sporting hero (results with فَازَ بِ… / فَازَ عَلَى …, one rule of the sport, why they admire them), then write a club page.',
  dialogue: {
    title: 'At the football club stand', ar: 'عِنْدَ جَنَاحِ نَادِي كُرَةِ القَدَمِ',
    lines: [
      ['A', 'مَا هِوَايَاتُكِ؟', 'What are your hobbies?'],
      ['B', 'أَلْعَبُ كُرَةَ القَدَمِ مَرَّتَيْنِ فِي الأُسْبُوعِ، وَأَعْزِفُ عَلَى العُودِ.', 'I play football twice a week, and I play the oud.'],
      ['A', 'مَنِ اللَّاعِبُ الَّذِي تُعْجَبِينَ بِهِ؟', 'Which player do you admire?'],
      ['B', 'أُعْجَبُ بِلَاعِبَةٍ مَغْرِبِيَّةٍ؛ فَازَتْ بِجَوَائِزَ كَثِيرَةٍ مَعَ فَرِيقِهَا.', 'I admire a Moroccan player; she has won many awards with her team.'],
      ['A', 'وَهَلْ تُفَضِّلِينَ اللَّعِبَ أَمِ المُشَاهَدَةَ؟', 'And do you prefer playing or watching?'],
      ['B', 'أُفَضِّلُ اللَّعِبَ عَلَى المُشَاهَدَةِ، لِأَنَّهُ يُعْطِينِي طَاقَةً.', 'I prefer playing to watching, because it gives me energy.'],
    ],
    notes: 'The right hobby verb (أَلْعَبُ · أَعْزِفُ عَلَى) and frequency come from D5-L01; results with فَازَتْ بِـ and admiring an athlete (أُعْجَبُ بِ…) from D5-L02. Keep claims about real athletes general and checkable.',
  },
  card: {
    title: 'Role-play card — recruiting for your club', ar: 'نُسَجِّلُ أَعْضَاءً جُدُدًا', you: 'the club captain', them: 'a student at the fair',
    mix: 'hobby verbs, frequency and preferences (D5-L01) with results, rules and admiring an athlete (D5-L02)',
    tasks: [
      { ex: 'مَا نَادِيكَ؟ وَمَاذَا تَفْعَلُونَ فِيهِ؟', task: 'Your club + the right verb.', plan: 'مَا ← نَادِي … ؛ نُمَارِسُ / نَلْعَبُ / نَعْزِفُ عَلَى …', model: 'نَادِي كُرَةِ السَّلَّةِ؛ نَلْعَبُ مَرَّتَيْنِ فِي الأُسْبُوعِ، وَنُمَارِسُ تَمَارِينَ اللِّيَاقَةِ.', modelEn: 'The basketball club; we play twice a week, and we do fitness exercises.' },
      { ex: 'مَا قَوَاعِدُ اللُّعْبَةِ؟', task: 'Two rules.', plan: 'مَا ← يَجِبُ عَلَى اللَّاعِبِ أَنْ … · مَمْنُوعٌ أَنْ …', model: 'يَجِبُ عَلَى اللَّاعِبِ أَنْ يَحْتَرِمَ الحَكَمَ، وَمَمْنُوعٌ أَنْ يَدْفَعَ الآخَرِينَ.', modelEn: 'A player must respect the referee, and it is forbidden to push others.' },
      { ex: 'كَيْفَ كَانَتْ نَتِيجَةُ آخِرِ مُبَارَاةٍ؟', task: 'A result with فَازَ عَلَى / خَسِرَ / تَعَادَلَ.', plan: '______________', model: 'فَازَ فَرِيقُنَا عَلَى مَدْرَسَةِ النُّورِ بِنَتِيجَةِ خَمْسِينَ مُقَابِلَ أَرْبَعِينَ.', modelEn: 'Our team beat Al-Nour School fifty to forty.' },
      { ex: 'مَنِ الرِّيَاضِيُّ الَّذِي تُعْجَبُ بِهِ؟ لِمَاذَا؟', task: 'An athlete + an achievement + a reason.', plan: '______________', model: 'أُعْجَبُ بِلَاعِبٍ مِصْرِيٍّ مَشْهُورٍ؛ فَازَ بِجَوَائِزَ كَثِيرَةٍ، وَأُعْجَبُ بِهِ لِأَنَّهُ مُتَوَاضِعٌ.', modelEn: 'I admire a famous Egyptian player; he won many awards, and I admire him because he is humble.' },
      { unexpected: true, ex: 'أَنَا أُفَضِّلُ الرَّسْمَ. لِمَاذَا أَنْضَمُّ إِلَى نَادِيكُمْ؟', task: 'Persuade with a preference and a reason.', plan: '______________', model: 'الرَّسْمُ جَمِيلٌ، وَلٰكِنَّ الرِّيَاضَةَ أَكْثَرُ حَرَكَةً؛ تَعَالَ مَرَّةً وَاحِدَةً وَجَرِّبْ!', modelEn: 'Drawing is lovely, but sport has more movement; come once and try!' },
    ],
    girl: 'to a girl: تَعَالَيْ مَرَّةً وَاحِدَةً وَجَرِّبِي! · and she asks: لِمَاذَا أَنْضَمُّ …؟',
  },
  talk: {
    title: 'My hobbies and my sporting hero', ar: 'هِوَايَاتِي وَبَطَلِي الرِّيَاضِيُّ',
    text: 'Talk for one minute: three hobbies with the right verbs and how often, who you do them with, one preference with a reason, then a sporting hero — their sport, two results and why you admire them.',
    routes: {
      core: 'أَلْعَبُ … · أَعْزِفُ عَلَى … · أَسْتَمِعُ إِلَى …',
      develop: 'Add frequency (مَرَّتَيْنِ فِي الأُسْبُوعِ) and أُفَضِّلُ … عَلَى … لِأَنَّ …',
      stretch: 'Add فَازَ بِ… / فَازَ عَلَى … and أُعْجَبُ بِهِ / بِهَا لِأَنَّ …',
    },
  },
  task: {
    title: 'A page for our club', ar: 'صَفْحَةُ نَادِينَا',
    text: 'Write a page (about 60–80 words) for your club on the school website. Include: • what members do, with the right verbs and frequency • two rules • the result of the last match or event (فَازَ عَلَى / خَسِرَ / تَعَادَلَ) • a famous athlete or artist you admire, one achievement and why • why students should join (a preference with a reason).',
    range: [50, 100],
    phrases: [['نَلْعَبُ … · نُمَارِسُ … · نَعْزِفُ عَلَى …', 'we play … · we practise … · we play (an instrument)'], ['مَرَّتَيْنِ / ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ', 'twice / three times a week'], ['فَازَ فَرِيقُنَا عَلَى … · فَازَ بِ…', 'our team beat … · won …'], ['أُعْجَبُ بِهِ / بِهَا لِأَنَّ …', 'I admire him / her because …']],
    coreFrames: [
      { ar: 'فِي نَادِي ______ نَلْعَبُ / نُمَارِسُ ______ .', en: 'In the … club we play / practise …' },
      { ar: 'نَتَدَرَّبُ ______ فِي الأُسْبُوعِ.', en: 'We train … times a week.' },
      { ar: 'يَجِبُ عَلَى اللَّاعِبِ أَنْ ______ .', en: 'A player must …' },
      { ar: 'فَازَ فَرِيقُنَا عَلَى ______ .', en: 'Our team beat …' },
      { ar: 'أُعْجَبُ بِ ______ لِأَنَّ ______ .', en: 'I admire … because …' },
    ],
    developFrames: [
      { ar: 'فَازَ / فَازَتْ بِ ______ .', en: 'He / she won …' },
      { ar: 'انْضَمُّوا إِلَيْنَا لِأَنَّ ______ !', en: 'Join us because …!' },
    ],
    bank: ['أَلْعَبُ · أُمَارِسُ', 'أَعْزِفُ عَلَى · أَسْتَمِعُ إِلَى', 'مَرَّتَيْنِ فِي الأُسْبُوعِ', 'يَجِبُ عَلَى اللَّاعِبِ أَنْ', 'مَمْنُوعٌ أَنْ', 'فَازَ عَلَى · خَسِرَ · تَعَادَلَ', 'فَازَ بِجَائِزَةٍ', 'أُعْجَبُ بِهِ · بِهَا'],
    model: {
      text: 'فِي نَادِي كُرَةِ السَّلَّةِ نَلْعَبُ يَوْمَ الإِثْنَيْنِ وَيَوْمَ الخَمِيسِ، وَنُمَارِسُ تَمَارِينَ اللِّيَاقَةِ أَيْضًا. يَجِبُ عَلَى اللَّاعِبِ أَنْ يَحْتَرِمَ الحَكَمَ، وَمَمْنُوعٌ أَنْ يَدْفَعَ الآخَرِينَ. الأُسْبُوعَ المَاضِيَ فَازَ فَرِيقُنَا عَلَى مَدْرَسَةِ النُّورِ بِنَتِيجَةِ خَمْسِينَ مُقَابِلَ أَرْبَعِينَ. أُعْجَبُ بِلَاعِبَةِ سَلَّةٍ مَشْهُورَةٍ؛ فَازَتْ بِمِيدَالِيَّةٍ ذَهَبِيَّةٍ، وَأُعْجَبُ بِهَا لِأَنَّهَا مُجْتَهِدَةٌ. أُفَضِّلُ الرِّيَاضَةَ الجَمَاعِيَّةَ عَلَى الفَرْدِيَّةِ، لِأَنَّهَا تُعَلِّمُنَا التَّعَاوُنَ. انْضَمُّوا إِلَيْنَا!',
      en: '“In the basketball club we play on Monday and Thursday, and we also do fitness exercises. A player must respect the referee, and it is forbidden to push others. Last week our team beat Al-Nour School fifty to forty. I admire a famous basketball player; she won a gold medal, and I admire her because she is hard-working. I prefer team sports to individual ones, because they teach us co-operation. Join us!”',
      find: ['يَجِبُ عَلَى اللَّاعِبِ', 'فَازَ فَرِيقُنَا عَلَى', 'فَازَتْ بِمِيدَالِيَّةٍ', 'أُفَضِّلُ الرِّيَاضَةَ الجَمَاعِيَّةَ'],
    },
  },
});
