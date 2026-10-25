'use strict';
/* Practice Room · D6-L08 · Reading — what cultural texts imply. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd6-l08',
  arShort: 'مَا يَقْصِدُهُ الكَاتِبُ',
  grammar: 'reading for implication: attitude in word choice (nābiḍun bi-l-ḥayāt vs muzdaḥimun wa-ṣākhib); what the tense signals (izdaharat qadīman = finished history · tazdaharu al-yawm = still true); tone (iʿjāb · ḥiyād · taḥayyuz); what the text leaves out; evidence (al-dalīlu kalimatu …)',
  focus: 'Students run their own reading-and-speaking practice: read short cultural texts aloud, decide the writer’s attitude from word choice, read the tense for meaning, name the tone and spot what is missing — always with evidence. They do a role-play card comparing two travel reviews, give a one-minute tone analysis, then build, fix and write two versions of the same place in different tones.',
  words1: 'Tone and attitude', words2: 'Evidence words',
  dialogue: {
    title: 'Same city, two writers', ar: 'مَدِينَةٌ وَاحِدَةٌ وَكَاتِبَانِ',
    lines: [
      ['A', 'الكَاتِبُ الأَوَّلُ يَقُولُ: «سُوقُ المَدِينَةِ نَابِضٌ بِالحَيَاةِ».', 'Writer 1 says: “The city market is bursting with life.”'],
      ['B', '«نَابِضٌ بِالحَيَاةِ» = إِعْجَابٌ. مَوْقِفُهُ إِيجَابِيٌّ.', '“Bursting with life” = admiration. His attitude is positive.'],
      ['A', 'وَالثَّانِي يَقُولُ: «السُّوقُ مُزْدَحِمٌ وَصَاخِبٌ».', 'And Writer 2 says: “The market is crowded and noisy.”'],
      ['B', 'نَفْسُ المَكَانِ، وَلٰكِنَّ الكَلِمَاتِ سَلْبِيَّةٌ؛ هُنَاكَ تَحَيُّزٌ.', 'Same place, but the words are negative — there is bias.'],
      ['A', '«ازْدَهَرَتِ التِّجَارَةُ هُنَا قَدِيمًا.» — هَلْ هِيَ مُزْدَهِرَةٌ الآنَ؟', '“Trade flourished here in the past.” — Is it flourishing now?'],
      ['B', 'لَا نَعْرِفُ! الفِعْلُ مَاضٍ وَ«قَدِيمًا» تَدُلُّ عَلَى تَارِيخٍ انْتَهَى. النَّصُّ لَا يَذْكُرُ اليَوْمَ.', 'We don’t know! The verb is past and “in the past” signals finished history. The text doesn’t mention today.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A describes a place positively; B rewrites it negatively — same facts.',
  },
  qTitle: 'Read between the lines — attitude, tense, tone, gaps',
  questions: [
    { q: '«حَيٌّ هَادِئٌ وَآمِنٌ، يُنَاسِبُ العَائِلَاتِ.» — مَا مَوْقِفُ الكَاتِبِ؟', en: '“A calm, safe district, good for families.” — Attitude?', start: 'مَوْقِفُهُ إِيجَابِيٌّ؛ الدَّلِيلُ …', more: '… «آمِنٌ» وَ«يُنَاسِبُ»' },
    { q: '«كَانَتِ القَرْيَةُ مَشْهُورَةً بِالفَخَّارِ.» — هَلْ مَا زَالَتْ مَشْهُورَةً؟', en: '“The village was famous for pottery.” — Still famous?', start: 'لَا نَعْرِفُ، لِأَنَّ …', more: '… «كَانَتْ» = المَاضِي' },
    { q: '«يَحْتَفِلُ السُّكَّانُ بِالمِهْرَجَانِ كُلَّ عَامٍ.» — هَلْ هٰذَا صَحِيحٌ اليَوْمَ؟', en: '“Residents celebrate the festival every year.” — True today?', start: 'نَعَمْ، لِأَنَّ الفِعْلَ مُضَارِعٌ …', more: '… وَ«كُلَّ عَامٍ»' },
    { q: 'نَصٌّ يَذْكُرُ الشَّوَاطِئَ فَقَطْ. — مَا الَّذِي لَا يَذْكُرُهُ؟', en: 'A text mentions only beaches. — What does it leave out?', start: 'لَا يَذْكُرُ …', more: '… مِثْلَ الأَسْعَارِ أَوِ الزِّحَامِ' },
    { q: 'مَا الفَرْقُ بَيْنَ الحِيَادِ وَالتَّحَيُّزِ؟', en: 'Difference between neutrality and bias?', start: 'الحِيَادُ … بَيْنَمَا التَّحَيُّزُ …', more: '…' },
  ],
  card: {
    title: 'Role-play card — comparing two travel reviews', ar: 'مُقَارَنَةُ مُرَاجَعَتَيْنِ', you: 'a reader', them: 'a friend planning a trip',
    tasks: [
      { ex: 'قَرَأْتُ مُرَاجَعَتَيْنِ عَنْ مَرَّاكُشَ. أَيُّهُمَا أُصَدِّقُ؟', task: 'Identify tone 1.', plan: 'النَّبْرَةُ ← الأُولَى … ؛ الدَّلِيلُ …', model: 'الأُولَى فِيهَا إِعْجَابٌ كَبِيرٌ؛ الدَّلِيلُ كَلِمَاتٌ مِثْلُ «سَاحِرَةٌ» وَ«لَا تُنْسَى».', modelEn: 'The first is full of admiration — evidence: words like “magical” and “unforgettable”.' },
      { ex: 'وَالثَّانِيَةُ؟', task: 'Identify tone 2.', plan: 'النَّبْرَةُ ← الثَّانِيَةُ … ؛ الدَّلِيلُ …', model: 'الثَّانِيَةُ سَلْبِيَّةٌ؛ تَقُولُ «مُرْهِقَةٌ» وَ«غَالِيَةٌ».', modelEn: 'The second is negative — it says “exhausting” and “expensive”.' },
      { ex: 'إِذَنْ مَاذَا أَفْعَلُ؟', task: 'A balanced reading.', plan: '', model: 'اقْرَأْ مُرَاجَعَةً مُحَايِدَةً أَيْضًا، لِأَنَّ الكَاتِبَيْنِ مُتَحَيِّزَانِ قَلِيلًا.', modelEn: 'Read a neutral review too, because both writers are a bit biased.' },
      { unexpected: true, ex: 'وَهَلْ تَذْكُرُ المُرَاجَعَتَانِ الطَّقْسَ؟', task: 'Spot the gap.', plan: '', model: 'لَا، لَا تَذْكُرَانِهِ أَبَدًا؛ يَجِبُ أَنْ تَبْحَثَ عَنْهُ بِنَفْسِكَ.', modelEn: 'No, they never mention it — you must look it up yourself.' },
    ],
    girl: 'to a girl friend: اقْرَئِي · تَبْحَثِي بِنَفْسِكِ',
    notes: 'Attitude = word choice; tense = time meaning; gaps = what is missing.',
  },
  talk: {
    title: 'One minute: analyse the tone', ar: 'أُحَلِّلُ النَّبْرَةَ',
    text: 'The Leader reads two short descriptions of the same place (one positive, one negative — invent them). Analyse them for one minute: attitude, evidence words, tense, and what is missing.',
    routes: {
      core: 'Name each attitude with one evidence word.',
      develop: 'Add a tense comment (كَانَ … = المَاضِي).',
      stretch: 'Add what both texts leave out and your neutral version.',
    },
  },
  builder: [
    { en: 'The writer’s tone is admiring.', cols: [['نَبْرَةُ الكَاتِبِ', 'نَبْرَةَ الكَاتِبُ'], ['فِيهَا', 'فِيهِ'], ['إِعْجَابٌ.', 'إِعْجَابًا.']], key: [0, 0, 0], why: 'نَبْرَةٌ (f.) → فِيهَا; subject إِعْجَابٌ.' },
    { en: 'The evidence is the word “noisy”.', cols: [['الدَّلِيلُ', 'الدَّلِيلَ'], ['كَلِمَةُ', 'كَلِمَةَ'], ['«صَاخِبٌ».', '«صَاخِبًا».']], key: [0, 0, 0], why: 'Nominal sentence: both -u.' },
    { en: 'The text does not mention prices.', cols: [['لَا يَذْكُرُ', 'لَمْ يَذْكُرُ'], ['النَّصُّ', 'النَّصَّ'], ['الأَسْعَارَ.', 'الأَسْعَارُ.']], key: [0, 0, 0], why: 'لَا + present; object in -a.' },
  ],
  errors: [
    { wrong: '«ازْدَهَرَتِ الصِّنَاعَةُ قَدِيمًا» ← الصِّنَاعَةُ مُزْدَهِرَةٌ اليَوْمَ.', hint: 'Look at the tense.', right: 'كَانَتْ مُزْدَهِرَةً فِي المَاضِي؛ النَّصُّ لَا يَذْكُرُ اليَوْمَ.', why: 'Past verb + قَدِيمًا = finished history.' },
    { wrong: 'الكَاتِبُ يُحِبُّ المَدِينَةَ.', hint: 'Prove it!', right: 'الكَاتِبُ يُحِبُّ المَدِينَةَ؛ الدَّلِيلُ أَنَّهُ يَصِفُهَا بِأَنَّهَا «سَاحِرَةٌ».', why: 'Every attitude claim needs an evidence word.' },
    { wrong: 'النَّصُّ مُحَايِدٌ لِأَنَّهُ يَقُولُ «أَجْمَلُ مَدِينَةٍ فِي العَالَمِ».', hint: 'Is that neutral?', right: 'النَّصُّ مُتَحَيِّزٌ؛ «أَجْمَلُ مَدِينَةٍ فِي العَالَمِ» مُبَالَغَةٌ.', why: 'Superlatives and strong adjectives show bias, not neutrality.' },
  ],
  task: {
    title: 'One place, two tones', ar: 'مَكَانٌ وَاحِدٌ بِنَبْرَتَيْنِ',
    text: 'Write two short descriptions (about 55–80 words in total) of the same place (a market, a festival, a city). Version 1: admiring. Version 2: critical. Keep the same facts — change only the words. Then add one sentence that names the evidence words and one thing both versions leave out.',
    range: [50, 95],
    phrases: [['نَابِضٌ بِالحَيَاةِ · سَاحِرٌ · لَا يُنْسَى', 'bursting with life · magical · unforgettable'], ['مُزْدَحِمٌ · صَاخِبٌ · مُرْهِقٌ', 'crowded · noisy · exhausting'], ['الدَّلِيلُ كَلِمَةُ …', 'the evidence is the word …'], ['لَا يَذْكُرُ النَّصَّانِ …', 'neither text mentions …']],
    coreFrames: [
      { ar: '١) ______ نَابِضٌ بِالحَيَاةِ، وَ ______ .', en: '1) … is bursting with life, and …' },
      { ar: '٢) ______ مُزْدَحِمٌ وَصَاخِبٌ، وَ ______ .', en: '2) … is crowded and noisy, and …' },
      { ar: 'الدَّلِيلُ فِي النَّصِّ الأَوَّلِ كَلِمَةُ « ______ ».', en: 'The evidence in text 1 is the word “…”.' },
      { ar: 'لَا يَذْكُرُ النَّصَّانِ ______ .', en: 'Neither text mentions …' },
    ],
    developFrames: [
      { ar: 'كَانَ ______ قَدِيمًا، وَاليَوْمَ ______ .', en: '… used to be … in the past, and today …' },
      { ar: 'النَّصُّ الأَوَّلُ فِيهِ إِعْجَابٌ، بَيْنَمَا الثَّانِي فِيهِ تَحَيُّزٌ ضِدَّ ______ .', en: 'Text 1 shows admiration, whereas text 2 is biased against …' },
    ],
    bank: ['مَنْظُورٌ ثَقَافِيٌّ', 'مَوْقِفٌ ضِمْنِيٌّ', 'نَبْرَةُ الكَاتِبِ', 'حِيَادٌ · تَحَيُّزٌ', 'إِعْجَابٌ', 'نَابِضٌ بِالحَيَاةِ', 'مُزْدَحِمٌ وَصَاخِبٌ', 'دَلِيلٌ مِنَ النَّصِّ'],
    model: {
      text: `١) سُوقُ الحَمِيدِيَّةِ فِي دِمَشْقَ نَابِضٌ بِالحَيَاةِ؛ تَمْتَلِئُ مَمَرَّاتُهُ القَدِيمَةُ بِرَوَائِحِ التَّوَابِلِ وَأَصْوَاتِ البَاعَةِ الكُرَمَاءِ. زِيَارَتُهُ تَجْرِبَةٌ لَا تُنْسَى.
٢) سُوقُ الحَمِيدِيَّةِ مُزْدَحِمٌ وَصَاخِبٌ؛ تَمْتَلِئُ مَمَرَّاتُهُ الضَّيِّقَةُ بِالرَّوَائِحِ القَوِيَّةِ وَصُرَاخِ البَاعَةِ. زِيَارَتُهُ مُرْهِقَةٌ.
التَّحْلِيلُ: الحَقَائِقُ نَفْسُهَا، وَلٰكِنَّ الكَلِمَاتِ تُغَيِّرُ المَوْقِفَ: «نَابِضٌ» وَ«الكُرَمَاءِ» إِعْجَابٌ، بَيْنَمَا «صَاخِبٌ» وَ«مُرْهِقَةٌ» نَقْدٌ. لَا يَذْكُرُ النَّصَّانِ تَارِيخَ السُّوقِ.`,
      en: '“1) Al-Hamidiyya market in Damascus is bursting with life; its old alleys are full of the smell of spices and the voices of generous traders. A visit is unforgettable. 2) Al-Hamidiyya market is crowded and noisy; its narrow alleys are full of strong smells and the shouting of traders. A visit is exhausting. Analysis: the facts are the same, but the words change the attitude — “bursting” and “generous” show admiration, whereas “noisy” and “exhausting” are criticism. Neither text mentions the market’s history.”',
      find: ['نَابِضٌ بِالحَيَاةِ', 'مُزْدَحِمٌ وَصَاخِبٌ', 'بَيْنَمَا «صَاخِبٌ»', 'لَا يَذْكُرُ النَّصَّانِ'],
    },
  },
  checkCore: 'name each writer’s attitude with an evidence word?',
  checkDevelop: 'read the tense for meaning and spot what the text leaves out?',
});
