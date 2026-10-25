'use strict';
/* Practice Room · D6-L01 · Countries, nationalities and languages of the Arab world. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd6-l01',
  arShort: 'الدُّوَلُ وَالجِنْسِيَّاتُ',
  grammar: 'nationality (nisba): miṣr → miṣriyyun · miṣriyyatun · miṣriyyūna; diptote country names after min / fī (min lubnāna · fī filasṭīna — no tanwīn, -a in the genitive); gender of countries (most f., but al-ʿirāq · al-urdunn · al-maghrib · lubnān m.); languages described accurately (al-fuṣḥā · al-lahajāt · al-amāzīghiyya · al-kurdiyya)',
  focus: 'Students run their own speaking and writing practice about the Arab world: say countries and nationalities in three forms, act an introductions dialogue, answer question cards, do a role-play card at an international student welcome, give a one-minute talk about a country, then build, fix and write a fact-file about an Arab country and its languages.',
  words1: 'Countries', words2: 'Nationalities and languages',
  dialogue: {
    title: 'Where are you from?', ar: 'مِنْ أَيْنَ أَنْتِ؟',
    lines: [
      ['A', 'مِنْ أَيْنَ أَنْتِ يَا رِيمُ؟', 'Where are you from, Reem?'],
      ['B', 'أَنَا مِنْ لُبْنَانَ؛ أَنَا لُبْنَانِيَّةٌ، وَأَبِي فِلَسْطِينِيٌّ.', 'I’m from Lebanon — I’m Lebanese, and my father is Palestinian.'],
      ['A', 'وَمَا اللُّغَاتُ فِي لُبْنَانَ؟', 'And what are the languages in Lebanon?'],
      ['B', 'العَرَبِيَّةُ هِيَ اللُّغَةُ الرَّسْمِيَّةُ، وَكَثِيرٌ مِنَ النَّاسِ يَتَكَلَّمُونَ الفَرَنْسِيَّةَ أَيْضًا.', 'Arabic is the official language, and many people speak French too.'],
      ['A', 'وَهَلْ كُلُّ النَّاسِ فِي المَغْرِبِ يَتَكَلَّمُونَ العَرَبِيَّةَ فَقَطْ؟', 'And does everyone in Morocco speak only Arabic?'],
      ['B', 'لَا، فِي المَغْرِبِ يَتَكَلَّمُ كَثِيرُونَ الأَمَازِيغِيَّةَ أَيْضًا، وَهِيَ لُغَةٌ رَسْمِيَّةٌ هُنَاكَ.', 'No — in Morocco many people speak Amazigh too, and it is an official language there.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: talk about YOUR family’s countries — nationality in m. and f.',
  },
  questions: [
    { q: 'مِنْ أَيْنَ عَائِلَتُكَ؟', en: 'Where is your family from?', start: 'عَائِلَتِي مِنْ … ؛ نَحْنُ مِصْرِيُّونَ / …', more: '… أَبِي مِصْرِيٌّ وَأُمِّي …' },
    { q: 'مَا جِنْسِيَّةُ شَخْصٍ مِنَ العِرَاقِ؟ وَامْرَأَةٍ مِنْ مِصْرَ؟', en: 'Nationality of a man from Iraq? A woman from Egypt?', start: 'هُوَ عِرَاقِيٌّ، وَهِيَ مِصْرِيَّةٌ', more: '… وَهُمْ …' },
    { q: 'مَا اللُّغَاتُ فِي العَالَمِ العَرَبِيِّ؟', en: 'What languages are in the Arab world?', start: 'العَرَبِيَّةُ الفُصْحَى، وَاللَّهَجَاتُ، وَ…', more: '… مِثْلُ الأَمَازِيغِيَّةِ وَالكُرْدِيَّةِ' },
    { q: 'مَا الدَّوْلَةُ العَرَبِيَّةُ الَّتِي تُرِيدُ أَنْ تَزُورَهَا؟', en: 'Which Arab country do you want to visit?', start: 'أُرِيدُ أَنْ أَزُورَ … لِأَنَّ …', more: '…' },
    { q: 'مَا الفَرْقُ بَيْنَ الفُصْحَى وَاللَّهْجَةِ؟', en: 'Difference between fuṣḥā and dialect?', start: 'الفُصْحَى لُغَةُ … بَيْنَمَا اللَّهْجَةُ …', more: '…' },
  ],
  card: {
    title: 'Role-play card — the international students’ welcome', ar: 'تَرْحِيبٌ بِالطُّلَّابِ الدُّوَلِيِّينَ', you: 'a student guide', them: 'a new international student',
    tasks: [
      { ex: 'أَهْلًا! أَنَا مِنَ الجَزَائِرِ. وَأَنْتَ؟', task: 'Your origin + nationality.', plan: 'أَنَا ← أَنَا مِنْ … ؛ أَنَا أُرْدُنِيٌّ / …', model: 'أَهْلًا وَسَهْلًا! أَنَا مِنَ الأُرْدُنِّ؛ أَنَا أُرْدُنِيٌّ.', modelEn: 'Welcome! I’m from Jordan — I’m Jordanian.' },
      { ex: 'هَلْ فِي صَفِّنَا طُلَّابٌ عَرَبٌ آخَرُونَ؟', task: 'Plural nationalities.', plan: 'الطُّلَّابُ ← نَعَمْ، هُنَاكَ … وَ…', model: 'نَعَمْ، هُنَاكَ طَالِبَانِ مِصْرِيَّانِ، وَثَلَاثُ طَالِبَاتٍ سُورِيَّاتٍ.', modelEn: 'Yes, there are two Egyptian boys and three Syrian girls.' },
      { ex: 'وَهَلْ يَتَكَلَّمُونَ لَهْجَتِي؟', task: 'Accurate answer on dialects.', plan: '', model: 'لِكُلِّ بَلَدٍ لَهْجَتُهُ، وَلٰكِنَّنَا نَفْهَمُ بَعْضَنَا بِالفُصْحَى.', modelEn: 'Each country has its own dialect, but we understand each other in fuṣḥā.' },
      { unexpected: true, ex: 'وَهَلْ تَتَكَلَّمُ الأَمَازِيغِيَّةَ؟', task: 'Answer the surprise question.', plan: '', model: 'لَا، وَلٰكِنَّ صَدِيقِي مِنَ المَغْرِبِ يَتَكَلَّمُهَا مَعَ جَدَّتِهِ.', modelEn: 'No, but my friend from Morocco speaks it with his grandmother.' },
    ],
    girl: 'if the guide is a girl: أَنَا أُرْدُنِيَّةٌ · تَتَكَلَّمِينَ',
    notes: 'nisba: -iyyun / -iyyatun / -iyyūna; min + al- → mina (mina al-urdunn).',
  },
  talk: {
    title: 'One minute: an Arab country', ar: 'دَوْلَةٌ عَرَبِيَّةٌ',
    text: 'Choose an Arab country. Talk for one minute: where it is, its capital, the nationality (m. / f. / pl.), its languages, and why you would like to visit.',
    routes: {
      core: 'Country + capital + nationality (m. and f.).',
      develop: 'Add the plural nationality and its languages (accurately).',
      stretch: 'Add a comparison with another country and a reason to visit.',
    },
  },
  builder: [
    { en: 'My mother is Moroccan.', cols: [['أُمِّي', 'أَبِي'], ['مَغْرِبِيَّةٌ', 'مَغْرِبِيٌّ'], ['مِنَ الرِّبَاطِ.', 'مِنْ الرِّبَاطِ.']], key: [0, 0, 0], why: 'She → -iyyatun; min + al- → مِنَ.' },
    { en: 'We are Iraqis from Baghdad.', cols: [['نَحْنُ', 'هُمْ'], ['عِرَاقِيُّونَ', 'عِرَاقِيٌّ'], ['مِنْ بَغْدَادَ.', 'مِنْ بَغْدَادٍ.']], key: [0, 0, 0], why: 'Plural -iyyūna; بَغْدَادُ is diptote → بَغْدَادَ.' },
    { en: 'Kurdish is spoken in the north of Iraq.', cols: [['تُتَحَدَّثُ', 'يَتَحَدَّثُ'], ['الكُرْدِيَّةُ', 'الكُرْدِيَّةَ'], ['فِي شَمَالِ العِرَاقِ.', 'فِي شَمَالُ العِرَاقِ.']], key: [0, 0, 0], why: 'Passive + subject (f.); فِي + genitive.' },
  ],
  errors: [
    { wrong: 'أَنَا مِنْ لُبْنَانٍ.', hint: 'Diptote name.', right: 'أَنَا مِنْ لُبْنَانَ.', why: 'لُبْنَانُ takes no tanwīn; genitive ends in -a.' },
    { wrong: 'أُخْتِي سُورِيٌّ.', hint: 'Sister → ?', right: 'أُخْتِي سُورِيَّةٌ.', why: 'Feminine nisba: -iyyatun.' },
    { wrong: 'كُلُّ العَرَبِ يَتَكَلَّمُونَ لَهْجَةً وَاحِدَةً.', hint: 'Accurate?', right: 'لِكُلِّ بَلَدٍ عَرَبِيٍّ لَهْجَتُهُ، وَالفُصْحَى تَجْمَعُهُمْ.', why: 'Describe the region accurately — many dialects, one fuṣḥā.' },
  ],
  task: {
    title: 'A fact file: an Arab country', ar: 'بِطَاقَةُ مَعْلُومَاتٍ: دَوْلَةٌ عَرَبِيَّةٌ',
    text: 'Write a fact file (about 60–80 words) about an Arab country for a class display. Include: • where it is and its capital • the nationality in three forms (m. · f. · pl.) • its languages, described accurately (official language, dialect, any other languages) • one famous place • why you would like to visit.',
    phrases: [['تَقَعُ … فِي … ، وَعَاصِمَتُهَا …', '… is in …, and its capital is …'], ['الرَّجُلُ مِصْرِيٌّ · المَرْأَةُ مِصْرِيَّةٌ · النَّاسُ مِصْرِيُّونَ', 'the man · the woman · the people (Egyptian)'], ['اللُّغَةُ الرَّسْمِيَّةُ … ، وَيَتَكَلَّمُ بَعْضُ النَّاسِ …', 'the official language is …, and some people speak …'], ['أُرِيدُ أَنْ أَزُورَهَا لِأَنَّ …', 'I want to visit it because …']],
    coreFrames: [
      { ar: 'تَقَعُ ______ فِي ______ ، وَعَاصِمَتُهَا ______ .', en: '… is in …, and its capital is …' },
      { ar: 'الرَّجُلُ ______ ، وَالمَرْأَةُ ______ ، وَالنَّاسُ ______ .', en: 'The man is …, the woman …, the people …' },
      { ar: 'اللُّغَةُ الرَّسْمِيَّةُ ______ .', en: 'The official language is …' },
      { ar: 'أُرِيدُ أَنْ أَزُورَ ______ ، لِأَنَّ ______ .', en: 'I want to visit …, because …' },
    ],
    developFrames: [
      { ar: 'يَتَكَلَّمُ النَّاسُ لَهْجَةً ______ ، وَيَتَكَلَّمُ بَعْضُهُمْ ______ .', en: 'People speak a … dialect, and some speak …' },
      { ar: 'مِنْ أَشْهَرِ أَمَاكِنِهَا ______ .', en: 'One of its most famous places is …' },
    ],
    bank: ['مِصْرُ · مِصْرِيٌّ · مِصْرِيَّةٌ', 'العِرَاقُ · عِرَاقِيُّونَ', 'لُبْنَانُ · مِنْ لُبْنَانَ', 'فِلَسْطِينُ · فِلَسْطِينِيٌّ', 'الفُصْحَى · اللَّهْجَةُ', 'الأَمَازِيغِيَّةُ', 'الكُرْدِيَّةُ', 'لُغَةٌ رَسْمِيَّةٌ'],
    model: {
      text: 'تَقَعُ الجَزَائِرُ فِي شَمَالِ أَفْرِيقْيَا، وَعَاصِمَتُهَا مَدِينَةُ الجَزَائِرِ. هِيَ أَكْبَرُ دَوْلَةٍ عَرَبِيَّةٍ مِنْ حَيْثُ المِسَاحَةُ. الرَّجُلُ جَزَائِرِيٌّ، وَالمَرْأَةُ جَزَائِرِيَّةٌ، وَالنَّاسُ جَزَائِرِيُّونَ. اللُّغَتَانِ الرَّسْمِيَّتَانِ هُمَا العَرَبِيَّةُ وَالأَمَازِيغِيَّةُ، وَيَتَكَلَّمُ النَّاسُ لَهْجَةً جَزَائِرِيَّةً، كَمَا يَتَكَلَّمُ كَثِيرٌ مِنْهُمُ الفَرَنْسِيَّةَ. مِنْ أَشْهَرِ أَمَاكِنِهَا الصَّحْرَاءُ الكُبْرَى وَمَدِينَةُ قُسَنْطِينَةَ ذَاتُ الجُسُورِ. أُرِيدُ أَنْ أَزُورَهَا، لِأَنَّ صَدِيقِي جَزَائِرِيٌّ، وَيَحْكِي لِي عَنْهَا دَائِمًا، وَلِأَنَّنِي أُحِبُّ الطَّبِيعَةَ وَالتَّارِيخَ.',
      en: '“Algeria is in North Africa, and its capital is Algiers. It is the largest Arab country by area. The man is Algerian, the woman Algerian, and the people Algerians. The two official languages are Arabic and Amazigh; people speak an Algerian dialect, and many also speak French. Its most famous places include the Sahara and Constantine, the city of bridges. I want to visit it, because my friend is Algerian and always tells me about it, and because I love nature and history.”',
      find: ['جَزَائِرِيَّةٌ', 'جَزَائِرِيُّونَ', 'العَرَبِيَّةُ وَالأَمَازِيغِيَّةُ', 'أُرِيدُ أَنْ أَزُورَهَا'],
    },
  },
  checkCore: 'form nationalities in m. / f. / pl. correctly?',
  checkDevelop: 'use diptote names after مِنْ / فِي and describe languages accurately?',
});
