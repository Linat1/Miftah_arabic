'use strict';
/* Practice Room · D3-L10 · Listening — work and career conversations. Partners read, partners catch. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd3-l10',
  arShort: 'أَسْتَمِعُ إِلَى خُطَطِ العَمَلِ',
  grammar: 'listening traps in career talk: a change of mind (kuntu sa-… thumma ghayyartu raʾyī) — the FINAL plan counts; corrections after lā / bal; WHO is speaking (anā / akhī / ukhtī); attitude words (mutaḥammis · qaliq · mutaraddid); future vs past',
  focus: 'Students run their own listening-and-speaking practice in pairs: one reads a short career monologue aloud, the other catches the final plan after a change of mind, the corrected detail after بَلْ, who is speaking, and the speaker’s attitude. Then they build, fix and write a monologue with traps for a partner.',
  words1: 'Plans and ambitions', words2: 'Linking and attitude',
  dialogue: {
    title: 'The final plan', ar: 'الخُطَّةُ النِّهَائِيَّةُ',
    lines: [
      ['A', 'كُنْتُ سَأَدْرُسُ الهَنْدَسَةَ، ثُمَّ غَيَّرْتُ رَأْيِي، وَسَأَدْرُسُ الطِّبَّ.', 'I was going to study engineering, then I changed my mind — I will study medicine.'],
      ['B', 'إِذَنِ الخُطَّةُ النِّهَائِيَّةُ: الطِّبُّ، لَا الهَنْدَسَةُ.', 'So the final plan is medicine, not engineering.'],
      ['A', 'وَلَنْ أَدْرُسَ فِي لَنْدَنَ، بَلْ فِي مَانْشِسْتَرَ.', 'And I won’t study in London, but in Manchester.'],
      ['B', '«بَلْ» = التَّصْحِيحُ: مَانْشِسْتَرُ.', '“bal” = the correction: Manchester.'],
      ['A', 'أَخِي يُرِيدُ أَنْ يَعْمَلَ طَيَّارًا، أَمَّا أَنَا فَمُتَرَدِّدٌ قَلِيلًا.', 'My brother wants to be a pilot; as for me, I’m a bit undecided.'],
      ['B', 'الطَّيَّارُ هُوَ الأَخُ، وَمَوْقِفُ المُتَكَلِّمِ: مُتَرَدِّدٌ.', 'The pilot is the brother, and the speaker’s attitude: undecided.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A invents a change of mind; B must catch the FINAL plan.',
  },
  qTitle: 'Catch it — the Leader reads, the Speaker answers',
  questions: [
    { q: 'كُنْتُ سَأَعْمَلُ فِي مَقْهًى هٰذَا الصَّيْفَ، ثُمَّ وَجَدْتُ عَمَلًا فِي مَكْتَبَةٍ. — أَيْنَ سَيَعْمَلُ؟', en: '“I was going to work in a café, then found a job in a library.” — Where will he work?', start: 'فِي المَكْتَبَةِ …', more: 'Trap: المَقْهَى = الخُطَّةُ القَدِيمَةُ' },
    { q: 'المُقَابَلَةُ لَيْسَتْ يَوْمَ الإِثْنَيْنِ، بَلْ يَوْمَ الأَرْبِعَاءِ. — مَتَى المُقَابَلَةُ؟', en: '“The interview isn’t Monday, but Wednesday.” — When?', start: 'يَوْمَ …', more: 'Key word: بَلْ' },
    { q: 'أُخْتِي مُتَحَمِّسَةٌ لِلْجَامِعَةِ، بَيْنَمَا أَنَا قَلِقٌ. — كَيْفَ يَشْعُرُ المُتَكَلِّمُ؟', en: '“My sister is excited about university, whereas I am worried.” — How does the speaker feel?', start: 'هُوَ …', more: 'Trap: المُتَحَمِّسَةُ = الأُخْتُ' },
    { q: 'عَمِلْتُ سَنَتَيْنِ فِي البَنْكِ، وَالآنَ سَأَبْدَأُ دِرَاسَةَ التَّصْمِيمِ. — مَاذَا سَيَفْعَلُ الآنَ؟', en: '“I worked two years in a bank; now I will start studying design.” — What now?', start: 'سَيَدْرُسُ …', more: 'Past vs future' },
    { q: 'الرَّاتِبُ مُرْتَفِعٌ، وَلٰكِنَّ السَّاعَاتِ طَوِيلَةٌ جِدًّا، لِذٰلِكَ رَفَضْتُ. — هَلْ قَبِلَ العَمَلَ؟', en: '“The salary is high, but the hours are very long, so I refused.” — Did he accept?', start: 'لَا، …', more: '… السَّبَبُ …' },
  ],
  card: {
    title: 'Role-play card — the careers podcast', ar: 'بُودْكَاسْتُ المِهَنِ', you: 'the listener who summarises', them: 'the podcast guest',
    tasks: [
      { ex: 'كُنْتُ أُرِيدُ أَنْ أَعْمَلَ مُحَامِيًا، ثُمَّ اكْتَشَفْتُ حُبِّي لِلطَّبْخِ.', task: 'Summarise the change.', plan: 'التَّغْيِيرُ ← غَيَّرَ رَأْيَهُ مِنْ … إِلَى …', model: 'غَيَّرَ رَأْيَهُ مِنَ المُحَامَاةِ إِلَى الطَّبْخِ.', modelEn: 'He changed his mind from law to cooking.' },
      { ex: 'دَرَسْتُ فِي مَعْهَدٍ لِلطَّبْخِ، لَا فِي الجَامِعَةِ.', task: 'Catch the correction.', plan: 'التَّصْحِيحُ ← دَرَسَ فِي … لَا …', model: 'دَرَسَ فِي مَعْهَدٍ لِلطَّبْخِ، لَا فِي الجَامِعَةِ.', modelEn: 'He studied at a cookery institute, not at university.' },
      { ex: 'الآنَ أَعْمَلُ فِي فُنْدُقٍ، وَفِي المُسْتَقْبَلِ سَأَفْتَحُ مَطْعَمِي.', task: 'Now vs future.', plan: '', model: 'يَعْمَلُ الآنَ فِي فُنْدُقٍ، وَسَيَفْتَحُ مَطْعَمَهُ فِي المُسْتَقْبَلِ.', modelEn: 'He works in a hotel now, and will open his own restaurant in future.' },
      { unexpected: true, ex: 'مَا شُعُورُ الضَّيْفِ فِي رَأْيِكَ؟', task: 'Attitude + evidence.', plan: '', model: 'هُوَ مُتَحَمِّسٌ جِدًّا، وَالدَّلِيلُ أَنَّهُ يَتَكَلَّمُ عَنْ «حُبِّهِ» لِلطَّبْخِ.', modelEn: 'He is very enthusiastic — the evidence is that he talks about his “love” of cooking.' },
    ],
    girl: 'if the guest is a woman: غَيَّرَتْ رَأْيَهَا · دَرَسَتْ · تَعْمَلُ · سَتَفْتَحُ مَطْعَمَهَا · هِيَ مُتَحَمِّسَةٌ',
    notes: 'Report in the third person: change every verb to ya- / ta- and every -ī to -hu / -hā.',
  },
  talk: {
    title: 'One minute: my plan — with a change of mind', ar: 'خُطَّتِي مَعَ تَغْيِيرٍ',
    text: 'Talk for one minute about your career plans. Include one change of mind and one correction. The Leader writes the FINAL plan and names the traps.',
    head: 'Speak for one minute — your partner catches the final plan',
    routes: {
      core: 'Three future plans; the Leader writes them.',
      develop: 'Add كُنْتُ سَأَدْرُسُ … ثُمَّ غَيَّرْتُ رَأْيِي …',
      stretch: 'Add a بَلْ correction, another person’s plan, and your attitude.',
    },
  },
  builder: [
    { en: 'I was going to study law, then I changed my mind.', cols: [['كُنْتُ سَأَدْرُسُ', 'سَأَدْرُسُ كُنْتُ'], ['القَانُونَ،', 'القَانُونُ،'], ['ثُمَّ غَيَّرْتُ رَأْيِي.', 'ثُمَّ أُغَيِّرُ رَأْيِي.']], key: [0, 0, 0], why: 'Was going to = كُنْتُ + sa- verb; then a past verb.' },
    { en: 'The meeting isn’t at nine, but at ten.', cols: [['لَيْسَ الاجْتِمَاعُ', 'لَيْسَتِ الاجْتِمَاعُ'], ['فِي التَّاسِعَةِ،', 'فِي تِسْعَةٍ،'], ['بَلْ فِي العَاشِرَةِ.', 'لٰكِنْ فِي عَشَرَةٍ.']], key: [0, 0, 0], why: 'اجْتِمَاعٌ (m.) → لَيْسَ; correction with بَلْ.' },
    { en: 'He is excited, whereas his sister is worried.', cols: [['هُوَ مُتَحَمِّسٌ،', 'هُوَ مُتَحَمِّسَةٌ،'], ['بَيْنَمَا', 'لِذٰلِكَ'], ['أُخْتُهُ قَلِقَةٌ.', 'أُخْتُهُ قَلِقٌ.']], key: [0, 0, 0], why: 'Each attitude word agrees with its own person.' },
  ],
  errors: [
    { wrong: '«كُنْتُ سَأَعْمَلُ فِي بَنْكٍ، ثُمَّ اخْتَرْتُ التَّعْلِيمَ.» ← سَيَعْمَلُ فِي بَنْكٍ.', hint: 'Old plan or final plan?', right: 'سَيَعْمَلُ فِي التَّعْلِيمِ.', why: 'The plan after ثُمَّ غَيَّرْتُ / اخْتَرْتُ is the final one.' },
    { wrong: '«أَخِي سَيُصْبِحُ مُمَرِّضًا، وَأَنَا مُهَنْدِسًا.» ← المُتَكَلِّمُ مُمَرِّضٌ.', hint: 'Who is أَنَا?', right: 'المُتَكَلِّمُ سَيُصْبِحُ مُهَنْدِسًا.', why: 'أَنَا = the speaker.' },
    { wrong: '«عَمِلْتُ فِي مَطْعَمٍ.» ← سَيَعْمَلُ فِي مَطْعَمٍ.', hint: 'Tense!', right: 'عَمِلَ فِي مَطْعَمٍ (فِي المَاضِي).', why: 'Past ≠ future — check the verb form.' },
  ],
  task: {
    title: 'A career monologue with traps', ar: 'حَدِيثٌ عَنِ المِهْنَةِ فِيهِ فِخَاخٌ',
    text: 'Write a short monologue (about 60–80 words) about your career plans for a listening test. Include: • one change of mind (كُنْتُ سَأَدْرُسُ … ثُمَّ غَيَّرْتُ رَأْيِي) • one correction with بَلْ • one other person’s plan • past experience and future plans • your attitude (مُتَحَمِّسٌ / قَلِقٌ / مُتَرَدِّدٌ). Then write three questions. Read it to your partner.',
    phrases: [['كُنْتُ سَأَعْمَلُ … ثُمَّ غَيَّرْتُ رَأْيِي', 'I was going to work … then changed my mind'], ['لَيْسَ … بَلْ …', 'not … but …'], ['أَمَّا أَخِي / أُخْتِي فَ…', 'as for my brother / sister …'], ['أَنَا مُتَحَمِّسٌ / مُتَحَمِّسَةٌ لِأَنَّ …', 'I am excited because …']],
    coreFrames: [
      { ar: 'كُنْتُ سَأَدْرُسُ ______ ، ثُمَّ غَيَّرْتُ رَأْيِي، وَسَأَدْرُسُ ______ .', en: 'I was going to study …, then changed my mind — I will study …' },
      { ar: 'لَنْ ______ فِي ______ ، بَلْ فِي ______ .', en: 'I won’t … in …, but in …' },
      { ar: 'أَمَّا ______ فَيُرِيدُ / فَتُرِيدُ أَنْ ______ .', en: 'As for …, he / she wants to …' },
      { ar: 'أَنَا ______ ، لِأَنَّ ______ .', en: 'I am … (attitude), because …' },
    ],
    developFrames: [
      { ar: 'فِي المَاضِي عَمِلْتُ ______ ، وَالآنَ ______ .', en: 'In the past I worked …, and now …' },
      { ar: 'أَسْئِلَةٌ: ١) مَاذَا سَيَدْرُسُ؟ ٢) أَيْنَ؟ ٣) كَيْفَ يَشْعُرُ؟', en: 'Questions: 1) What will he study? 2) Where? 3) How does he feel?' },
    ],
    bank: ['كُنْتُ سَأَدْرُسُ', 'غَيَّرْتُ رَأْيِي', 'لَيْسَ … بَلْ …', 'أَمَّا … فَ…', 'بَيْنَمَا', 'مُتَحَمِّسٌ · قَلِقٌ', 'مُتَرَدِّدٌ', 'نَتِيجَةً لِذٰلِكَ'],
    model: {
      text: `كُنْتُ سَأَدْرُسُ المُحَاسَبَةَ، ثُمَّ غَيَّرْتُ رَأْيِي، وَسَأَدْرُسُ التَّصْمِيمَ الجِرَافِيكِيَّ. لَنْ أَدْرُسَ فِي الجَامِعَةِ، بَلْ فِي مَعْهَدٍ مِهَنِيٍّ قَرِيبٍ. فِي الصَّيْفِ المَاضِي عَمِلْتُ فِي مَطْبَعَةِ عَمِّي، وَنَتِيجَةً لِذٰلِكَ أَحْبَبْتُ التَّصْمِيمَ. أَمَّا أُخْتِي فَتُرِيدُ أَنْ تُصْبِحَ مُحَاسِبَةً. أَنَا مُتَحَمِّسٌ جِدًّا، وَلٰكِنَّ أَبِي قَلِقٌ قَلِيلًا.
أَسْئِلَةٌ: ١) مَاذَا سَيَدْرُسُ؟ ٢) أَيْنَ سَيَدْرُسُ؟ ٣) مَنْ يُرِيدُ أَنْ يُصْبِحَ مُحَاسِبًا؟`,
      en: '“I was going to study accountancy, then I changed my mind — I will study graphic design. I won’t study at university, but at a nearby vocational college. Last summer I worked at my uncle’s print shop, and as a result I fell in love with design. As for my sister, she wants to become an accountant. I am very excited, but my father is a bit worried. Questions: 1) What will he study? 2) Where will he study? 3) Who wants to become an accountant?”',
      find: ['ثُمَّ غَيَّرْتُ رَأْيِي', 'بَلْ فِي مَعْهَدٍ', 'أَمَّا أُخْتِي فَتُرِيدُ', 'أَنَا مُتَحَمِّسٌ'],
    },
  },
  checkCore: 'catch the FINAL plan, not the first one heard?',
  checkDevelop: 'catch corrections with بَلْ, who is speaking and the attitude?',
});
