'use strict';
/* Practice Room · D5-L06 · Music, arts and Arabic culture. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd5-l06',
  arShort: 'المُوسِيقَى وَالفُنُونُ',
  grammar: 'what art does: yuʿabbiru ʿan · yuʾaththiru fī · yulhimu; describing arts (al-khaṭṭu al-ʿarabiyyu · al-zakhrafa · al-ʿūd · al-nāy); fair cultural description: fī baʿḍi al-buldān · aḥyānan · laysa dāʾiman · yakhtalifu min baladin ilā ākhar; past experience (zurtu maʿriḍan · ḥaḍartu ḥaflatan)',
  focus: 'Students run their own speaking and writing practice about Arabic arts: say the arts words, act a short dialogue at an exhibition, answer question cards, do a role-play card as a museum guide, give a one-minute talk about an art form, then build, fix and write a review of an exhibition or concert.',
  words1: 'Instruments and arts', words2: 'What art does',
  dialogue: {
    title: 'At the calligraphy exhibition', ar: 'فِي مَعْرِضِ الخَطِّ العَرَبِيِّ',
    lines: [
      ['A', 'مَا رَأْيُكِ فِي هٰذِهِ اللَّوْحَةِ؟', 'What do you think of this painting?'],
      ['B', 'رَائِعَةٌ! الخَطُّ العَرَبِيُّ يُعَبِّرُ عَنِ الجَمَالِ وَالرُّوحِ.', 'Wonderful! Arabic calligraphy expresses beauty and spirit.'],
      ['A', 'وَهٰذِهِ الزَّخْرَفَةُ؟', 'And this arabesque?'],
      ['B', 'تُلْهِمُنِي كَثِيرًا. أُحِبُّ الأَشْكَالَ الهَنْدَسِيَّةَ.', 'It inspires me a lot. I love the geometric shapes.'],
      ['A', 'هَلْ يَتَعَلَّمُ كُلُّ العَرَبِ الخَطَّ؟', 'Do all Arabs learn calligraphy?'],
      ['B', 'لَيْسَ دَائِمًا؛ يَخْتَلِفُ ذٰلِكَ مِنْ بَلَدٍ إِلَى آخَرَ، وَفِي بَعْضِ المَدَارِسِ فَقَطْ.', 'Not always — it varies from country to country, and only in some schools.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: talk about MUSIC (the oud or the nay) the same way.',
  },
  questions: [
    { q: 'هَلْ تَسْتَمِعُ إِلَى المُوسِيقَى العَرَبِيَّةِ؟', en: 'Do you listen to Arabic music?', start: 'نَعَمْ / أَحْيَانًا / لَا …', more: '… لِأَنَّهَا تُعَبِّرُ عَنْ …' },
    { q: 'مَا الفَنُّ الَّذِي يُلْهِمُكَ؟', en: 'Which art inspires you?', start: 'يُلْهِمُنِي … لِأَنَّ …', more: '…' },
    { q: 'هَلْ زُرْتَ مَعْرِضًا أَوْ حَضَرْتَ حَفْلَةً مُوسِيقِيَّةً؟', en: 'Have you visited an exhibition or attended a concert?', start: 'نَعَمْ، زُرْتُ / حَضَرْتُ …', more: '… وَكَانَ …' },
    { q: 'كَيْفَ يُؤَثِّرُ الفَنُّ فِي النَّاسِ؟', en: 'How does art influence people?', start: 'يُؤَثِّرُ الفَنُّ فِي … لِأَنَّهُ …', more: '…' },
    { q: 'هَلِ الفُنُونُ التَّقْلِيدِيَّةُ مُهِمَّةٌ اليَوْمَ؟', en: 'Are traditional arts important today?', start: 'فِي رَأْيِي …', more: '… وَلٰكِنْ لَيْسَ دَائِمًا …' },
  ],
  card: {
    title: 'Role-play card — a young museum guide', ar: 'مُرْشِدٌ فِي المَتْحَفِ', you: 'a young volunteer guide', them: 'a visitor',
    tasks: [
      { ex: 'مَا هٰذِهِ الآلَةُ؟', task: 'Name + describe.', plan: 'الآلَةُ ← هٰذَا … ، وَهُوَ آلَةٌ …', model: 'هٰذَا العُودُ، وَهُوَ آلَةٌ وَتَرِيَّةٌ قَدِيمَةٌ جِدًّا.', modelEn: 'This is the oud — a very old string instrument.' },
      { ex: 'وَمَاذَا يُعَبِّرُ صَوْتُهُ؟', task: 'What it expresses.', plan: 'التَّعْبِيرُ ← يُعَبِّرُ عَنْ …', model: 'يُعَبِّرُ عَنِ الحُزْنِ وَالفَرَحِ، وَيُؤَثِّرُ فِي القَلْبِ.', modelEn: 'It expresses sadness and joy, and moves the heart.' },
      { ex: 'هَلْ يَعْزِفُ عَلَيْهِ كُلُّ النَّاسِ فِي البِلَادِ العَرَبِيَّةِ؟', task: 'A fair answer.', plan: '', model: 'لَيْسَ دَائِمًا؛ هُوَ مَشْهُورٌ فِي بَعْضِ البُلْدَانِ أَكْثَرَ مِنْ غَيْرِهَا.', modelEn: 'Not always — it is more popular in some countries than others.' },
      { unexpected: true, ex: 'هَلْ تَعْزِفُ أَنْتَ؟', task: 'Personal answer in the past.', plan: '', model: 'تَعَلَّمْتُ قَلِيلًا الصَّيْفَ المَاضِيَ مَعَ جَدِّي، وَمَا زِلْتُ أَتَدَرَّبُ.', modelEn: 'I learned a little last summer with my grandfather, and I’m still practising.' },
    ],
    girl: 'visitor to a girl: تَعْزِفِينَ',
    notes: 'yuʿabbiru ʿan · yuʾaththiru fī · yulhimu + object; avoid generalising (laysa dāʾiman · fī baʿḍi al-buldān).',
  },
  talk: {
    title: 'One minute: an Arabic art form', ar: 'فَنٌّ عَرَبِيٌّ',
    text: 'Choose one art (calligraphy, arabesque, the oud, the nay, the duff). Talk for one minute: what it is, what it expresses, your experience of it, and a fair cultural comment.',
    routes: {
      core: 'What it is + يُعَبِّرُ عَنْ …',
      develop: 'Add يُؤَثِّرُ فِي / يُلْهِمُ and a past experience (زُرْتُ / حَضَرْتُ).',
      stretch: 'Add a fair generalisation (فِي بَعْضِ البُلْدَانِ · لَيْسَ دَائِمًا) and your opinion.',
    },
  },
  builder: [
    { en: 'Music expresses feelings.', cols: [['تُعَبِّرُ', 'يُعَبِّرُ'], ['المُوسِيقَى', 'المُوسِيقِيُّ'], ['عَنِ المَشَاعِرِ.', 'المَشَاعِرَ.']], key: [0, 0, 0], why: 'Music = المُوسِيقَى (f.) → تُعَبِّرُ عَنْ (المُوسِيقِيُّ = the musician).' },
    { en: 'Calligraphy inspires young artists.', cols: [['يُلْهِمُ', 'تُلْهِمُ'], ['الخَطُّ العَرَبِيُّ', 'الخَطَّ العَرَبِيَّ'], ['الفَنَّانِينَ الشَّبَابَ.', 'الفَنَّانُونَ الشَّبَابُ.']], key: [0, 0, 0], why: 'Subject خَطٌّ (m.); object in the accusative (-īna).' },
    { en: 'Last year I attended a concert.', cols: [['فِي العَامِ المَاضِي', 'فِي العَامُ المَاضِي'], ['حَضَرْتُ', 'أَحْضُرُ'], ['حَفْلَةً مُوسِيقِيَّةً.', 'حَفْلَةٌ مُوسِيقِيَّةٌ.']], key: [0, 0, 0], why: 'Past time → past verb; object -an.' },
  ],
  errors: [
    { wrong: 'الفَنُّ يُؤَثِّرُ النَّاسَ.', hint: 'Missing preposition.', right: 'الفَنُّ يُؤَثِّرُ فِي النَّاسِ.', why: 'يُؤَثِّرُ فِي …' },
    { wrong: 'كُلُّ العَرَبِ يَعْزِفُونَ عَلَى العُودِ.', hint: 'Too general!', right: 'بَعْضُ العَرَبِ يَعْزِفُونَ عَلَى العُودِ.', why: 'Describe cultures fairly: بَعْضُ / أَحْيَانًا.' },
    { wrong: 'تُعَبِّرُ اللَّوْحَةُ الحُزْنَ.', hint: 'Missing preposition.', right: 'تُعَبِّرُ اللَّوْحَةُ عَنِ الحُزْنِ.', why: 'يُعَبِّرُ عَنْ …' },
  ],
  task: {
    title: 'A review: an exhibition or concert', ar: 'تَقْيِيمُ مَعْرِضٍ أَوْ حَفْلَةٍ',
    text: 'Write a review (about 60–80 words) of an exhibition or concert you attended (real or imagined). Include: • where and when (past) • what you saw or heard (two arts words) • what it expressed (يُعَبِّرُ عَنْ …) and how it affected you (أَثَّرَ فِيَّ / أَلْهَمَنِي) • one fair cultural comment • a rating.',
    phrases: [['زُرْتُ مَعْرِضًا … · حَضَرْتُ حَفْلَةً …', 'I visited an exhibition … · I attended a concert …'], ['… تُعَبِّرُ عَنْ …', '… expresses …'], ['أَثَّرَ فِيَّ … · أَلْهَمَنِي …', 'it moved me … · it inspired me …'], ['فِي بَعْضِ البُلْدَانِ … · لَيْسَ دَائِمًا …', 'in some countries … · not always …']],
    coreFrames: [
      { ar: 'فِي ______ زُرْتُ / حَضَرْتُ ______ فِي ______ .', en: 'In … I visited / attended … in …' },
      { ar: 'رَأَيْتُ / سَمِعْتُ ______ .', en: 'I saw / heard …' },
      { ar: '______ تُعَبِّرُ / يُعَبِّرُ عَنْ ______ .', en: '… expresses …' },
      { ar: 'تَقْيِيمِي ______ مِنْ خَمْسَةٍ.', en: 'My rating is … out of five.' },
    ],
    developFrames: [
      { ar: 'أَثَّرَ فِيَّ ______ ، لِأَنَّ ______ .', en: '… moved me, because …' },
      { ar: 'فِي بَعْضِ البُلْدَانِ ______ ، وَلٰكِنْ لَيْسَ دَائِمًا.', en: 'In some countries …, but not always.' },
    ],
    bank: ['العُودُ · النَّايُ · الدُّفُّ', 'الخَطُّ العَرَبِيُّ', 'زَخْرَفَةٌ', 'مَعْرِضٌ · حَفْلَةٌ مُوسِيقِيَّةٌ', 'فَنَّانٌ · فَنَّانَةٌ', 'يُعَبِّرُ عَنْ', 'يُؤَثِّرُ فِي · يُلْهِمُ', 'فِي بَعْضِ البُلْدَانِ'],
    model: {
      text: 'فِي الشَّهْرِ المَاضِي حَضَرْتُ حَفْلَةً مُوسِيقِيَّةً فِي مَرْكَزِ الثَّقَافَةِ العَرَبِيَّةِ فِي لَنْدَنَ. عَزَفَتْ فِرْقَةٌ مِنْ تُونِسَ عَلَى العُودِ وَالنَّايِ وَالدُّفِّ. كَانَتِ المُوسِيقَى تُعَبِّرُ عَنِ الحَنِينِ إِلَى الوَطَنِ، وَأَثَّرَتْ فِيَّ كَثِيرًا، لِأَنَّهَا ذَكَّرَتْنِي بِجَدَّتِي. فِي الاسْتِرَاحَةِ رَأَيْتُ مَعْرِضًا صَغِيرًا لِلْخَطِّ العَرَبِيِّ، وَأَلْهَمَنِي أَنْ أَتَعَلَّمَهُ. هٰذِهِ المُوسِيقَى مَشْهُورَةٌ فِي بَعْضِ البُلْدَانِ أَكْثَرَ مِنْ غَيْرِهَا، وَلٰكِنَّهَا جَمِيلَةٌ لِلْجَمِيعِ. تَقْيِيمِي خَمْسَةٌ مِنْ خَمْسَةٍ!',
      en: '“Last month I attended a concert at the Arab Cultural Centre in London. A band from Tunisia played the oud, the nay and the duff. The music expressed longing for home, and it moved me a lot, because it reminded me of my grandmother. In the interval I saw a small calligraphy exhibition, and it inspired me to learn it. This music is more popular in some countries than others, but it is beautiful for everyone. My rating: five out of five!”',
      find: ['حَضَرْتُ حَفْلَةً', 'تُعَبِّرُ عَنِ الحَنِينِ', 'وَأَثَّرَتْ فِيَّ', 'فِي بَعْضِ البُلْدَانِ'],
    },
  },
  checkCore: 'use يُعَبِّرُ عَنْ / يُؤَثِّرُ فِي with the right prepositions?',
  checkDevelop: 'describe a past experience and make a fair, not general, cultural comment?',
});
