'use strict';
/* Apply Workshop · D1-W04 · D1-L07 (asking about daily routine) + D1-L08 (weekend routine). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd1-w04', pair: ['d1-l07', 'd1-l08'],
  title: 'The Weekend Interview', arShort: 'مُقَابَلَةُ نِهَايَةِ الأُسْبُوعِ',
  focus: 'Students join question forms with the weekend: as reporters for the school website they interview classmates (to a boy, a girl or a group) about their weekends, ask follow-up questions, handle “Plan B” answers with إِذَا, and write up the interview with a third-person summary.',
  dialogue: {
    title: 'Reporter and guest', ar: 'المُرَاسِلُ وَالضَّيْفَةُ',
    lines: [
      ['A', 'مَاذَا تَفْعَلِينَ فِي نِهَايَةِ الأُسْبُوعِ؟', 'What do you do at the weekend? (to a girl)'],
      ['B', 'فِي أَيَّامِ الدِّرَاسَةِ أَسْتَيْقِظُ مُبَكِّرًا، أَمَّا يَوْمَ السَّبْتِ فَأَنَامُ حَتَّى التَّاسِعَةِ.', 'On school days I wake up early, but on Saturday I sleep until nine.'],
      ['A', 'وَمَعَ مَنْ تَقْضِينَ يَوْمَ الأَحَدِ؟', 'And who do you spend Sunday with?'],
      ['B', 'مَعَ عَائِلَتِي. غَالِبًا مَا نَزُورُ جَدَّتِي.', 'With my family. We often visit my grandmother.'],
      ['A', 'وَمَاذَا تَفْعَلُونَ إِذَا كَانَ الجَوُّ مُمْطِرًا؟', 'And what do you (all) do if the weather is rainy?'],
      ['B', 'إِذَا كَانَ الجَوُّ مُمْطِرًا، نَبْقَى فِي البَيْتِ وَنَطْبُخُ مَعًا.', 'If the weather is rainy, we stay at home and cook together.'],
    ],
    notes: 'Question forms to a girl (تَفْعَلِينَ · تَقْضِينَ) and to a group (تَفْعَلُونَ) come from D1-L07; أَمَّا … فَ… · غَالِبًا مَا · إِذَا كَانَ … from D1-L08.',
  },
  card: {
    title: 'Interview card — the school website reporter', ar: 'بِطَاقَةُ المُرَاسِلِ', you: 'the classmate being interviewed', them: 'the reporter',
    mix: 'questions to a boy, a girl and a group, with follow-ups (D1-L07) and the weekend with contrast, frequency and إِذَا (D1-L08)',
    tasks: [
      { ex: 'مَتَى تَسْتَيْقِظُ يَوْمَ السَّبْتِ؟', task: 'Give the time and contrast it with school days.', plan: 'مَتَى ← فِي … ، أَمَّا فِي أَيَّامِ الدِّرَاسَةِ فَ…', model: 'أَسْتَيْقِظُ فِي التَّاسِعَةِ، أَمَّا فِي أَيَّامِ الدِّرَاسَةِ فَأَسْتَيْقِظُ فِي السَّادِسَةِ وَالنِّصْفِ.', modelEn: 'I wake up at nine, whereas on school days I wake up at half past six.' },
      { ex: 'مَاذَا تَفْعَلُ غَالِبًا فِي نِهَايَةِ الأُسْبُوعِ؟', task: 'Two activities with frequency.', plan: 'مَاذَا ← غَالِبًا مَا … · فِي بَعْضِ الأَحْيَانِ …', model: 'غَالِبًا مَا أَلْعَبُ كُرَةَ القَدَمِ، وَفِي بَعْضِ الأَحْيَانِ أَذْهَبُ إِلَى السُّوقِ.', modelEn: 'I often play football, and sometimes I go to the market.' },
      { ex: 'مَعَ مَنْ؟ وَلِمَاذَا مَعَهُمْ؟', task: 'Say who with and why.', plan: 'مَعَ مَنْ ← مَعَ … لِأَنَّ …', model: 'مَعَ أَبْنَاءِ عَمِّي، لِأَنَّهُمْ يَسْكُنُونَ قَرِيبًا مِنَّا.', modelEn: 'With my cousins, because they live near us.' },
      { ex: 'وَإِذَا كَانَ الجَوُّ بَارِدًا جِدًّا؟', task: 'Give a Plan B with إِذَا.', plan: 'إِذَا ← إِذَا كَانَ … ، …', model: 'إِذَا كَانَ الجَوُّ بَارِدًا جِدًّا، أَقْرَأُ أَوْ أَلْعَبُ أَلْعَابًا مَعَ أُخْتِي.', modelEn: 'If the weather is very cold, I read or play games with my sister.' },
      { unexpected: true, ex: 'وَالآنَ اسْأَلْنِي أَنْتَ: سُؤَالَيْنِ عَنْ نِهَايَةِ أُسْبُوعِي.', task: 'Ask the reporter two questions (correct form for a boy or a girl).', plan: 'اسْأَلْ ← مَاذَا تَفْعَلُ / تَفْعَلِينَ …؟ · مَعَ مَنْ …؟', model: 'مَاذَا تَفْعَلِينَ يَوْمَ الأَحَدِ؟ وَهَلْ تَسْتَيْقِظِينَ مُبَكِّرًا؟', modelEn: 'What do you do on Sunday? And do you wake up early? (to a female reporter)' },
    ],
    girl: 'to a girl the reporter asks: مَتَى تَسْتَيْقِظِينَ؟ · مَاذَا تَفْعَلِينَ؟ — to a group: تَفْعَلُونَ',
  },
  talk: {
    title: 'My weekend vs my school week', ar: 'أُسْبُوعِي وَنِهَايَتُهُ',
    text: 'Talk for one minute about your weekend compared with the school week: four activities with times or frequency, who you spend it with, a Plan B with إِذَا, and whether your week is balanced. Then your partner asks you two follow-up questions.',
    routes: {
      core: 'فِي نِهَايَةِ الأُسْبُوعِ … · أَسْتَيْقِظُ فِي …',
      develop: 'Add أَمَّا … فَ… and غَالِبًا مَا · فِي بَعْضِ الأَحْيَانِ.',
      stretch: 'Add إِذَا كَانَ … and a judgement with a reason; answer follow-ups without notes.',
    },
  },
  task: {
    title: 'Interview write-up for the school website', ar: 'المُقَابَلَةُ عَلَى مَوْقِعِ المَدْرَسَةِ',
    text: 'Write up your interview (about 70–90 words): five questions with different question words, each with a full answer about the weekend — using the correct form for a boy or a girl. Then add a short summary in the third person (هُوَ … / هِيَ …) with one أَمَّا … فَ… and one إِذَا sentence.',
    range: [60, 110],
    phrases: [['مَاذَا تَفْعَلُ / تَفْعَلِينَ …؟', 'what do you do …? (boy / girl)'], ['مَعَ مَنْ … ؟ · لِمَاذَا … ؟', 'with whom …? · why …?'], ['أَمَّا فِي نِهَايَةِ الأُسْبُوعِ فَ…', 'but at the weekend …'], ['إِذَا كَانَ الجَوُّ … ، …', 'if the weather is …, …']],
    coreFrames: [
      { ar: 'س: مَتَى تَسْتَيْقِظِينَ يَوْمَ السَّبْتِ؟ ج: ______ .', en: 'Q: When do you wake up on Saturday? A: …' },
      { ar: 'س: مَاذَا تَفْعَلِينَ غَالِبًا؟ ج: ______ .', en: 'Q: What do you often do? A: …' },
      { ar: 'س: مَعَ مَنْ؟ ج: ______ لِأَنَّ ______ .', en: 'Q: With whom? A: … because …' },
      { ar: 'بِاخْتِصَارٍ، هِيَ / هُوَ ______ .', en: 'In short, she / he …' },
    ],
    developFrames: [
      { ar: 'أَمَّا فِي أَيَّامِ الدِّرَاسَةِ فَ ______ .', en: 'But on school days …' },
      { ar: 'إِذَا كَانَ الجَوُّ مُمْطِرًا، ______ .', en: 'If the weather is rainy, …' },
    ],
    bank: ['مَاذَا · مَتَى · مَعَ مَنْ', 'كَمْ مَرَّةً · لِمَاذَا', 'تَفْعَلُ · تَفْعَلِينَ · تَفْعَلُونَ', 'غَالِبًا مَا', 'فِي بَعْضِ الأَحْيَانِ', 'أَمَّا … فَ…', 'إِذَا كَانَ …', 'بِاخْتِصَارٍ'],
    model: {
      text: `س: مَتَى تَسْتَيْقِظِينَ يَوْمَ السَّبْتِ؟ ج: فِي التَّاسِعَةِ، لِأَنِّي أَتْعَبُ فِي الأُسْبُوعِ.
س: مَاذَا تَفْعَلِينَ غَالِبًا؟ ج: غَالِبًا مَا أَذْهَبُ إِلَى النَّادِي لِلسِّبَاحَةِ.
س: مَعَ مَنْ تَقْضِينَ يَوْمَ الأَحَدِ؟ ج: مَعَ عَائِلَتِي؛ نَزُورُ جَدَّتِي.
س: كَمْ مَرَّةً تَقْرَئِينَ؟ ج: كُلَّ مَسَاءٍ تَقْرِيبًا.
س: وَإِذَا كَانَ الجَوُّ مُمْطِرًا؟ ج: إِذَا كَانَ مُمْطِرًا، نَطْبُخُ مَعًا.
بِاخْتِصَارٍ، هِيَ تَسْتَرِيحُ فِي نِهَايَةِ الأُسْبُوعِ، أَمَّا فِي أَيَّامِ الدِّرَاسَةِ فَتَعْمَلُ كَثِيرًا.`,
      en: '“Q: When do you wake up on Saturday? A: At nine, because I get tired during the week. Q: What do you often do? A: I often go to the club to swim. Q: Who do you spend Sunday with? A: With my family; we visit my grandmother. Q: How often do you read? A: Almost every evening. Q: And if it is rainy? A: If it is rainy, we cook together. In short, she rests at the weekend, but on school days she works a lot.”',
      find: ['غَالِبًا مَا', 'مَعَ مَنْ تَقْضِينَ', 'إِذَا كَانَ مُمْطِرًا', 'أَمَّا فِي أَيَّامِ الدِّرَاسَةِ'],
    },
  },
});
