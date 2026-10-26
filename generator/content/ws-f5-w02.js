'use strict';
/* Apply Workshop · F5-W02 · F5-L03 (likes, dislikes and preferences) + F5-L04 (giving reasons: taste and health). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f5-w02', pair: ['f5-l03', 'f5-l04'],
  title: 'The Class Food Awards', arShort: 'جَوَائِزُ الطَّعَامِ فِي الصَّفِّ',
  focus: 'Students join preferences with reasons of taste and health: they vote in the class food awards (tastiest dish, healthiest snack, best drink), say what they prefer and why with adjectives that agree, report a partner’s choices and write their award nominations.',
  dialogue: {
    title: 'Which one wins?', ar: 'مَنِ الفَائِزُ؟',
    lines: [
      ['A', 'أَيُّهُمَا تُفَضِّلُ: الشَّايَ أَمِ العَصِيرَ؟', 'Which do you prefer: tea or juice?'],
      ['B', 'أُفَضِّلُ العَصِيرَ عَلَى الشَّايِ لِأَنَّهُ حُلْوٌ وَطَازَجٌ.', 'I prefer juice to tea because it is sweet and fresh.'],
      ['A', 'وَمَا طَعَامُكَ المُفَضَّلُ؟', 'And what is your favourite food?'],
      ['B', 'طَعَامِي المُفَضَّلُ الكَبْسَةُ لِأَنَّهَا لَذِيذَةٌ وَحَارَّةٌ قَلِيلًا.', 'My favourite food is kabsa because it is delicious and a little spicy.'],
      ['A', 'هَلْ تُحِبُّ البَطَاطِسَ المَقْلِيَّةَ؟', 'Do you like chips?'],
      ['B', 'نَعَمْ، لٰكِنْ فِي رَأْيِي هِيَ لَيْسَتْ صِحِّيَّةً، لِذٰلِكَ أُحِبُّ السَّلَطَةَ أَكْثَرَ.', 'Yes, but in my opinion they are not healthy, so I like salad more.'],
    ],
    notes: 'أُفَضِّلُ … عَلَى … and أُحِبُّ … أَكْثَرَ come from F5-L03; لِأَنَّهُ / لِأَنَّهَا + taste and health adjectives from F5-L04. Point out: البَطَاطِسُ (non-human plural) → هِيَ … صِحِّيَّةٌ.',
  },
  card: {
    title: 'Role-play card — the food awards interview', ar: 'مُقَابَلَةُ الجَوَائِزِ', you: 'a voter', them: 'the awards presenter',
    mix: 'preferences and comparisons (F5-L03) with taste and health reasons that agree with the food (F5-L04)',
    tasks: [
      { ex: 'مَا أَلَذُّ طَبَقٍ فِي رَأْيِكَ؟', task: 'Name a dish and give a taste reason.', plan: 'مَا ← … لِأَنَّهُ / لِأَنَّهَا لَذِيذٌ / لَذِيذَةٌ …', model: 'الحُمُّصُ، لِأَنَّهُ لَذِيذٌ وَطَازَجٌ.', modelEn: 'Hummus, because it is delicious and fresh.' },
      { ex: 'مَا أَصَحُّ وَجْبَةٍ خَفِيفَةٍ؟', task: 'Name a healthy snack and give a reason.', plan: 'مَا ← … لِأَنَّهُ / لِأَنَّهَا صِحِّيٌّ / صِحِّيَّةٌ …', model: 'المَوْزُ، لِأَنَّهُ صِحِّيٌّ وَمُفِيدٌ.', modelEn: 'Bananas, because they are healthy and good for you.' },
      { ex: 'أَيُّهُمَا تُفَضِّلُ: الأَرُزَّ أَمِ الخُبْزَ؟', task: 'Prefer one and give a reason.', plan: 'أَيُّهُمَا ← أُفَضِّلُ … عَلَى … لِأَنَّ …', model: 'أُفَضِّلُ الأَرُزَّ عَلَى الخُبْزِ لِأَنَّهُ خَفِيفٌ.', modelEn: 'I prefer rice to bread because it is light.' },
      { ex: 'مَاذَا لَا تُحِبُّ؟ لِمَاذَا؟', task: 'Name a food you dislike, with a reason.', plan: 'مَاذَا ← لَا أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا … جِدًّا', model: 'لَا أُحِبُّ القَهْوَةَ لِأَنَّهَا مُرَّةٌ جِدًّا.', modelEn: 'I don’t like coffee because it is very bitter.' },
      { unexpected: true, ex: 'وَمَاذَا يُفَضِّلُ أَخُوكَ أَوْ أُخْتُكَ؟', task: 'Report a family member’s preference.', plan: 'مَاذَا ← هُوَ يُفَضِّلُ … / هِيَ تُفَضِّلُ …', model: 'أُخْتِي تُفَضِّلُ الحَلْوَيَاتِ عَلَى الفَاكِهَةِ، لٰكِنَّهَا لَيْسَتْ صِحِّيَّةً!', modelEn: 'My sister prefers sweets to fruit, but they are not healthy!' },
    ],
    girl: 'مَا أَلَذُّ طَبَقٍ فِي رَأْيِكِ؟ · أَيُّهُمَا تُفَضِّلِينَ؟ · مَاذَا لَا تُحِبِّينَ؟',
  },
  talk: {
    title: 'My awards: the best and the worst', ar: 'جَوَائِزِي',
    text: 'Talk for 30–45 seconds and give your own food awards: the tastiest dish, the healthiest food, the best drink and the food you like least — each with a reason that agrees (لِأَنَّهُ / لِأَنَّهَا).',
    routes: {
      core: 'طَعَامِي المُفَضَّلُ … · أُفَضِّلُ … عَلَى …',
      develop: 'A reason for each award: لِأَنَّهُ لَذِيذٌ · لِأَنَّهَا صِحِّيَّةٌ.',
      stretch: 'Add أُحِبُّ … أَكْثَرَ مِنْ … and an opinion with فِي رَأْيِي … وَلٰكِنْ …',
    },
    phrases: [['أُفَضِّلُ … عَلَى …', 'I prefer … to …'], ['أُحِبُّ … أَكْثَرَ مِنْ …', 'I like … more than …'], ['لِأَنَّهُ لَذِيذٌ · لِأَنَّهَا طَازَجَةٌ', 'because it is delicious · fresh'], ['فِي رَأْيِي … وَلٰكِنْ …', 'in my opinion … but …']],
  },
  task: {
    title: 'My food award nominations', ar: 'تَرْشِيحَاتِي',
    text: 'Write your nominations (about 45–65 words) for the class food awards. Include: • the tastiest dish, with a reason • the healthiest food, with a reason • one preference with أُفَضِّلُ … عَلَى … • one comparison with أَكْثَرَ مِنْ • a food you don’t like, with a reason • what a family member prefers.',
    range: [40, 85],
    phrases: [['أَلَذُّ طَبَقٍ … لِأَنَّهُ / لِأَنَّهَا …', 'the tastiest dish is … because it …'], ['أَصَحُّ طَعَامٍ … لِأَنَّهُ صِحِّيٌّ وَمُفِيدٌ', 'the healthiest food is … because it is healthy and good for you'], ['أُفَضِّلُ … عَلَى … · أُحِبُّ … أَكْثَرَ مِنْ …', 'I prefer … to … · I like … more than …'], ['لَا أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا … جِدًّا', 'I don’t like … because it is very …']],
    coreFrames: [
      { ar: 'أَلَذُّ طَبَقٍ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'The tastiest dish is … because it is …' },
      { ar: 'أَصَحُّ طَعَامٍ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'The healthiest food is … because it is …' },
      { ar: 'أُفَضِّلُ ______ عَلَى ______ .', en: 'I prefer … to …' },
      { ar: 'لَا أُحِبُّ ______ لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'I don’t like … because it is …' },
    ],
    developFrames: [
      { ar: 'أُحِبُّ ______ أَكْثَرَ مِنْ ______ .', en: 'I like … more than …' },
      { ar: 'أَبِي يُفَضِّلُ / أُمِّي تُفَضِّلُ ______ .', en: 'My father / mother prefers …' },
      { ar: 'فِي رَأْيِي ______ ، وَلٰكِنْ ______ .', en: 'In my opinion …, but …' },
    ],
    bank: ['لَذِيذٌ · لَذِيذَةٌ', 'حُلْوٌ · حُلْوَةٌ', 'مَالِحٌ · حَارٌّ', 'طَازَجٌ · طَازَجَةٌ', 'صِحِّيٌّ · صِحِّيَّةٌ', 'أُفَضِّلُ … عَلَى …', 'أَكْثَرَ مِنْ', 'لِأَنَّهُ · لِأَنَّهَا'],
    model: {
      text: 'أَلَذُّ طَبَقٍ فِي رَأْيِي الكَبْسَةُ لِأَنَّهَا لَذِيذَةٌ وَحَارَّةٌ قَلِيلًا. أَصَحُّ طَعَامٍ السَّلَطَةُ لِأَنَّهَا طَازَجَةٌ وَمُفِيدَةٌ. أُفَضِّلُ العَصِيرَ عَلَى الشَّايِ لِأَنَّهُ حُلْوٌ، وَأُحِبُّ السَّمَكَ أَكْثَرَ مِنَ الدَّجَاجِ. لَا أُحِبُّ القَهْوَةَ لِأَنَّهَا مُرَّةٌ جِدًّا. أَبِي يُفَضِّلُ الحُمُّصَ، وَأُخْتِي تُفَضِّلُ الحَلْوَيَاتِ، وَلٰكِنَّهَا لَيْسَتْ صِحِّيَّةً!',
      en: '“The tastiest dish, in my opinion, is kabsa because it is delicious and a little spicy. The healthiest food is salad because it is fresh and good for you. I prefer juice to tea because it is sweet, and I like fish more than chicken. I don’t like coffee because it is very bitter. My father prefers hummus, and my sister prefers sweets — but they are not healthy!”',
      find: ['لِأَنَّهَا لَذِيذَةٌ', 'أُفَضِّلُ العَصِيرَ عَلَى الشَّايِ', 'أَكْثَرَ مِنَ الدَّجَاجِ', 'مُرَّةٌ جِدًّا'],
    },
  },
});
