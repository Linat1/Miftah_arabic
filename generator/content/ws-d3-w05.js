'use strict';
/* Apply Workshop · D3-W05 · D3-L09 (writing: career-plans article) + D3-L10 (listening: work and career conversations). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd3-w05', pair: ['d3-l09', 'd3-l10'],
  title: 'The Careers Podcast and Article', arShort: 'بُودْكَاسْتُ المِهَنِ وَالمَقَالَةُ',
  focus: 'Students join listening and extended writing: they listen to young people talking about career plans (catching the FINAL plan after a change of mind, corrections with بَلْ, who is speaking, attitude), then record their own plan and turn it into a four-paragraph careers-magazine article.',
  sortTitle: 'Listening trap or article connector?', sortCats: ['Article connectors · D3-L09', 'Listening traps · D3-L10'],
  sort: [
    { ar: 'إِضَافَةً إِلَى ذٰلِكَ', cat: 0 }, { ar: 'نَتِيجَةً لِذٰلِكَ', cat: 0 }, { ar: 'بَعْدَ التَّخَرُّجِ', cat: 0 }, { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ', cat: 0 },
    { ar: 'ثُمَّ غَيَّرْتُ رَأْيِي', cat: 1 }, { ar: 'لَيْسَ … بَلْ …', cat: 1 }, { ar: 'أَمَّا أُخْتِي فَ…', cat: 1 }, { ar: 'أَنَا مُتَرَدِّدٌ', cat: 1 },
  ],
  dialogue: {
    title: 'What did Rami say?', ar: 'مَاذَا قَالَ رَامِي؟',
    lines: [
      ['A', 'فِي البُودْكَاسْتِ قَالَ رَامِي: «كُنْتُ سَأَدْرُسُ الطِّبَّ، ثُمَّ غَيَّرْتُ رَأْيِي».', 'In the podcast Rami said: “I was going to study medicine, then I changed my mind.”'],
      ['B', 'إِذَنْ مَاذَا سَيَدْرُسُ الآنَ؟', 'So what will he study now?'],
      ['A', '«سَأَدْرُسُ الهَنْدَسَةَ، لَا فِي لَنْدَنَ بَلْ فِي مَانْشِسْتَرَ».', '“I will study engineering, not in London but in Manchester.”'],
      ['B', 'وَهَلْ هُوَ مُتَحَمِّسٌ؟', 'And is he excited?'],
      ['A', 'نَعَمْ، مُتَحَمِّسٌ جِدًّا، أَمَّا أُخْتُهُ فَمُتَرَدِّدَةٌ.', 'Yes, very excited, whereas his sister is undecided.'],
      ['B', 'سَأَكْتُبُ مَقَالَتِي هٰكَذَا: أَوَّلًا الطُّمُوحُ، ثُمَّ المَهَارَاتُ، ثُمَّ الخُطُوَاتُ، وَأَخِيرًا التَّحَدِّي.', 'I will write my article like this: first the ambition, then the skills, then the steps, and finally the challenge.'],
    ],
    notes: 'The final plan after a change of mind, لَا … بَلْ …, a different speaker (أَمَّا أُخْتُهُ فَ…) and attitude words come from D3-L10; the four-paragraph plan from D3-L09.',
  },
  card: {
    title: 'Listening card — career voices', ar: 'أَصْوَاتٌ عَنِ المِهَنِ', you: 'the listener', them: 'the person reading the clips aloud',
    mix: 'catching the final plan, corrections, the speaker and the attitude (D3-L10), then reporting it in connected written style (D3-L09)',
    tasks: [
      { ex: '«كُنْتُ سَأَعْمَلُ فِي مَقْهًى هٰذَا الصَّيْفَ، ثُمَّ وَجَدْتُ عَمَلًا فِي مَكْتَبَةٍ».', task: 'Where will she work? (the final plan)', plan: 'أَيْنَ ← فِي … (لَيْسَ فِي …)', model: 'فِي مَكْتَبَةٍ، لَيْسَ فِي مَقْهًى.', modelEn: 'In a library, not in a café.' },
      { ex: '«المُقَابَلَةُ لَيْسَتْ يَوْمَ الإِثْنَيْنِ، بَلْ يَوْمَ الأَرْبِعَاءِ».', task: 'When is the interview?', plan: 'مَتَى ← بَلْ ← يَوْمَ …', model: 'يَوْمَ الأَرْبِعَاءِ.', modelEn: 'On Wednesday.' },
      { ex: '«أَخِي يُرِيدُ أَنْ يُصْبِحَ طَيَّارًا، أَمَّا أَنَا فَأُحِبُّ الطَّبْخَ».', task: 'Who wants to be a pilot? What does the speaker want?', plan: '______________', model: 'أَخُوهُ يُرِيدُ أَنْ يُصْبِحَ طَيَّارًا، وَالمُتَكَلِّمُ يُرِيدُ أَنْ يَعْمَلَ طَبَّاخًا.', modelEn: 'His brother wants to be a pilot; the speaker wants to work as a chef.' },
      { ex: '«لَا أَعْرِفُ: الجَامِعَةُ مُكْلِفَةٌ، وَلٰكِنَّ التَّدْرِيبَ قَصِيرٌ…»', task: 'What is her attitude? Give the clue.', plan: '______________', model: 'هِيَ مُتَرَدِّدَةٌ؛ الدَّلِيلُ: «لَا أَعْرِفُ».', modelEn: 'She is undecided; the clue: “I don’t know.”' },
      { unexpected: true, ex: 'وَأَنْتَ: هَلْ غَيَّرْتَ رَأْيَكَ عَنْ مِهْنَتِكَ يَوْمًا؟', task: 'Your own change of mind and final plan.', plan: '______________', model: 'نَعَمْ، كُنْتُ سَأُصْبِحُ لَاعِبَ كُرَةٍ، ثُمَّ غَيَّرْتُ رَأْيِي؛ الآنَ أُرِيدُ أَنْ أُصْبِحَ مُدَرِّبًا.', modelEn: 'Yes, I was going to be a footballer, then I changed my mind; now I want to become a coach.' },
    ],
    foot: 'Partner A reads each clip twice. Give the FINAL answer and name the trap (غَيَّرْتُ رَأْيِي · بَلْ · أَمَّا … فَ… · attitude word). Task ! is yours. Then swap.',
    girl: 'وَأَنْتِ: هَلْ غَيَّرْتِ رَأْيَكِ؟ — she answers: كُنْتُ سَأُصْبِحُ … ثُمَّ غَيَّرْتُ رَأْيِي',
  },
  talk: {
    title: 'My podcast clip: my career plan', ar: 'مَقْطَعِي فِي البُودْكَاسْتِ',
    text: 'Record a one-minute podcast clip about your career plan in four parts (ambition · skills · route · challenge). Include ONE change of mind and ONE correction with بَلْ as a trap. Your partner listens and reports your FINAL plan.',
    routes: {
      core: 'أَطْمَحُ إِلَى أَنْ … · سَأَدْرُسُ …',
      develop: 'Add كُنْتُ سَأَدْرُسُ … ثُمَّ غَيَّرْتُ رَأْيِي and an attitude word (مُتَحَمِّسٌ · قَلِقٌ).',
      stretch: 'Add إِضَافَةً إِلَى ذٰلِكَ · بَعْدَ التَّخَرُّجِ · عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّنِي …',
    },
  },
  task: {
    title: 'A career-plan article in four paragraphs', ar: 'مَقَالَةٌ عَنْ خُطَّتِي',
    text: 'Turn your podcast clip into an article (about 60–80 words) in four paragraphs for a careers magazine. ¶1 ambition + two reasons (and one change of mind). ¶2 two skills with evidence. ¶3 your route in order (first … then … after graduating …). ¶4 a challenge + a concession, and a condition to finish.',
    range: [50, 100],
    phrases: [['كُنْتُ سَأَدْرُسُ … ثُمَّ غَيَّرْتُ رَأْيِي', 'I was going to … then I changed my mind'], ['إِضَافَةً إِلَى ذٰلِكَ …', 'in addition …'], ['أَوَّلًا … ثُمَّ … بَعْدَ التَّخَرُّجِ …', 'first … then … after graduating …'], ['عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّنِي …', 'although …, I …']],
    coreFrames: [
      { ar: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ ______ لِأَنَّ ______ .', en: '¶1 I aspire to become … because …' },
      { ar: 'أَنَا ______ ؛ عَلَى سَبِيلِ المِثَالِ، ______ .', en: '¶2 I am …; for example, …' },
      { ar: 'أَوَّلًا سَأَدْرُسُ ______ ، ثُمَّ ______ .', en: '¶3 First I will study …, then …' },
      { ar: 'بَعْدَ التَّخَرُّجِ ______ .', en: '¶3 After graduating …' },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّنِي ______ .', en: '¶4 Although …, I …' },
    ],
    developFrames: [
      { ar: 'كُنْتُ سَأُصْبِحُ ______ ، ثُمَّ غَيَّرْتُ رَأْيِي.', en: '¶1 I was going to become …, then I changed my mind.' },
      { ar: 'إِضَافَةً إِلَى ذٰلِكَ، ______ .', en: '¶2 In addition, …' },
      { ar: 'إِذَا ______ ، فَسَوْفَ ______ .', en: '¶4 If …, I will …' },
    ],
    bank: ['أَطْمَحُ إِلَى أَنْ', 'غَيَّرْتُ رَأْيِي', 'عَلَى سَبِيلِ المِثَالِ', 'إِضَافَةً إِلَى ذٰلِكَ', 'أَوَّلًا · ثُمَّ', 'بَعْدَ التَّخَرُّجِ', 'نَتِيجَةً لِذٰلِكَ', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
    model: {
      text: `أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُهَنْدِسَةً، لِأَنِّي أُحِبُّ الرِّيَاضِيَّاتِ وَأُرِيدُ أَنْ أَبْنِيَ جُسُورًا. كُنْتُ سَأَدْرُسُ الطِّبَّ، ثُمَّ غَيَّرْتُ رَأْيِي.
أَنَا دَقِيقَةٌ؛ عَلَى سَبِيلِ المِثَالِ، أُرَاجِعُ حِسَابَاتِي مَرَّتَيْنِ. إِضَافَةً إِلَى ذٰلِكَ، أُحِبُّ العَمَلَ الجَمَاعِيَّ.
أَوَّلًا سَأَدْرُسُ الفِيزْيَاءَ، ثُمَّ سَأَلْتَحِقُ بِالجَامِعَةِ. بَعْدَ التَّخَرُّجِ سَأَعْمَلُ فِي شَرِكَةٍ كَبِيرَةٍ.
عَلَى الرَّغْمِ مِنْ أَنَّ الدِّرَاسَةَ صَعْبَةٌ، فَإِنَّنِي مُتَحَمِّسَةٌ. إِذَا اجْتَهَدْتُ، فَسَوْفَ أَنْجَحُ.`,
      en: '“I aspire to become an engineer, because I love maths and want to build bridges. I was going to study medicine, then I changed my mind. / I am precise; for example, I check my calculations twice. In addition, I like teamwork. / First I will study physics, then I will go to university. After graduating I will work in a big company. / Although the studies are hard, I am excited. If I work hard, I will succeed.”',
      find: ['ثُمَّ غَيَّرْتُ رَأْيِي', 'إِضَافَةً إِلَى ذٰلِكَ', 'بَعْدَ التَّخَرُّجِ', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
    },
  },
});
