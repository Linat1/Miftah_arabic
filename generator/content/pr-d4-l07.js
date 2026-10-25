'use strict';
/* Practice Room · D4-L07 · Resources and sustainability — when resources run out. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd4-l07',
  arShort: 'المَوَارِدُ وَالاسْتِدَامَةُ',
  grammar: 'predicting: idhā istamarra + noun, fa-sawfa + verb; negative condition: idhā lam + jussive (idhā lam nurashshidi al-miyāha …); resources run out (yanḍabu) or become scarce (yashiḥḥu); moving to sustainable sources (al-intiqāl ilā …)',
  focus: 'Students run their own speaking and writing practice about resources: say the resource words, act a short “what if?” dialogue, answer prediction cards, do a role-play card at a youth climate summit, give a one-minute “if we don’t act …” talk, then build, fix and write a prediction-and-action paragraph.',
  words1: 'Resources', words2: 'Predicting',
  dialogue: {
    title: 'What if we don’t change?', ar: 'مَاذَا لَوْ لَمْ نَتَغَيَّرْ؟',
    lines: [
      ['A', 'هَلْ سَيَنْضَبُ النِّفْطُ يَوْمًا مَا؟', 'Will oil run out one day?'],
      ['B', 'نَعَمْ. إِذَا اسْتَمَرَّ الاسْتِهْلَاكُ بِهٰذَا الشَّكْلِ، فَسَوْفَ يَنْضَبُ خِلَالَ خَمْسِينَ سَنَةً.', 'Yes. If consumption continues like this, it will run out within fifty years.'],
      ['A', 'وَالمَاءُ؟', 'And water?'],
      ['B', 'إِذَا لَمْ نُرَشِّدِ المِيَاهَ، فَسَوْفَ تَشِحُّ فِي بِلَادٍ كَثِيرَةٍ.', 'If we don’t conserve water, it will become scarce in many countries.'],
      ['A', 'إِذَنْ مَا الحَلُّ؟', 'So what is the solution?'],
      ['B', 'يَجِبُ أَنْ نَنْتَقِلَ إِلَى الطَّاقَةِ المُتَجَدِّدَةِ، وَأَنْ نُقَلِّلَ مِنَ الاسْتِهْلَاكِ.', 'We must move to renewable energy and reduce consumption.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: make predictions about ANOTHER resource (forests, fish, groundwater).',
  },
  questions: [
    { q: 'مَاذَا سَيَحْدُثُ إِذَا اسْتَمَرَّ التَّلَوُّثُ؟', en: 'What will happen if pollution continues?', start: 'إِذَا اسْتَمَرَّ التَّلَوُّثُ، فَسَوْفَ …', more: '… مِمَّا يُؤَدِّي إِلَى …' },
    { q: 'مَاذَا سَيَحْدُثُ إِذَا لَمْ نُرَشِّدِ الطَّاقَةَ؟', en: 'What if we don’t save energy?', start: 'إِذَا لَمْ نُرَشِّدِ الطَّاقَةَ، فَسَوْفَ …', more: '…' },
    { q: 'لِمَاذَا يَشِحُّ المَاءُ فِي بَعْضِ البِلَادِ؟', en: 'Why is water scarce in some countries?', start: 'بِسَبَبِ …', more: '… وَالاسْتِهْلَاكِ الكَبِيرِ' },
    { q: 'كَيْفَ نَنْتَقِلُ إِلَى مَصَادِرَ مُسْتَدَامَةٍ؟', en: 'How do we move to sustainable sources?', start: 'يَجِبُ أَنْ نَسْتَخْدِمَ …', more: '… بَدَلًا مِنَ الوَقُودِ الأُحْفُورِيِّ' },
    { q: 'مَا الَّذِي تَفْعَلُهُ أَنْتَ لِتُرَشِّدَ الاسْتِهْلَاكَ؟', en: 'What do YOU do to cut consumption?', start: 'أُطْفِئُ … / أَسْتَخْدِمُ …', more: '… لِكَيْ …' },
  ],
  card: {
    title: 'Role-play card — the youth climate summit', ar: 'قِمَّةُ الشَّبَابِ لِلْمَنَاخِ', you: 'a youth delegate', them: 'the summit chair',
    tasks: [
      { ex: 'مَا المَوْرِدُ الَّذِي يُقْلِقُكَ أَكْثَرَ؟', task: 'Name a resource + why.', plan: 'المَوْرِدُ ← يُقْلِقُنِي … لِأَنَّ …', model: 'تُقْلِقُنِي المِيَاهُ الجَوْفِيَّةُ، لِأَنَّهَا تَنْضَبُ بِسُرْعَةٍ فِي بَلَدِي.', modelEn: 'Groundwater worries me, because it is running out fast in my country.' },
      { ex: 'مَاذَا سَيَحْدُثُ إِذَا لَمْ نَفْعَلْ شَيْئًا؟', task: 'Prediction.', plan: 'التَّوَقُّعُ ← إِذَا لَمْ … فَسَوْفَ …', model: 'إِذَا لَمْ نُرَشِّدِ الاسْتِهْلَاكَ، فَسَوْفَ يَشِحُّ المَاءُ خِلَالَ عِشْرِينَ سَنَةً.', modelEn: 'If we don’t cut consumption, water will become scarce within twenty years.' },
      { ex: 'وَمَا اقْتِرَاحُكَ؟', task: 'Action.', plan: '', model: 'يَجِبُ أَنْ نُعِيدَ اسْتِخْدَامَ المِيَاهِ فِي الزِّرَاعَةِ، وَأَنْ نَبْنِيَ مَحَطَّاتٍ لِتَحْلِيَةِ مِيَاهِ البَحْرِ.', modelEn: 'We must reuse water in farming and build desalination plants.' },
      { unexpected: true, ex: 'وَمَاذَا يَسْتَطِيعُ الشَّبَابُ أَنْ يَفْعَلُوا؟', task: 'Answer the surprise question.', plan: '', model: 'يَسْتَطِيعُونَ أَنْ يَنْشُرُوا الوَعْيَ عَلَى الإِنْتَرْنِت، وَأَنْ يُغَيِّرُوا عَادَاتِهِمْ.', modelEn: 'They can raise awareness online and change their habits.' },
    ],
    girl: 'chair to a girl: يُقْلِقُكِ · اقْتِرَاحُكِ',
    notes: 'idhā lam + jussive (nurashshid → nurashshidi before al-); fa-sawfa + verb.',
  },
  talk: {
    title: 'One minute: “If we don’t act …”', ar: 'إِذَا لَمْ نَتَحَرَّكْ …',
    text: 'Choose a resource. Talk for one minute: why it is at risk, two predictions, and two actions.',
    routes: {
      core: 'Two predictions with إِذَا اسْتَمَرَّ … فَسَوْفَ …',
      develop: 'Add إِذَا لَمْ + jussive and يَنْضَبُ / يَشِحُّ.',
      stretch: 'Add two actions (يَجِبُ أَنْ نَنْتَقِلَ إِلَى …) and a final judgement.',
    },
  },
  builder: [
    { en: 'If consumption continues, oil will run out.', cols: [['إِذَا اسْتَمَرَّ الاسْتِهْلَاكُ،', 'إِذَا يَسْتَمِرُّ الاسْتِهْلَاكُ،'], ['فَسَوْفَ', 'سَوْفَ لَا'], ['يَنْضَبُ النِّفْطُ.', 'يَنْضَبَ النِّفْطُ.']], key: [0, 0, 0], why: 'إِذَا + past; fa-sawfa + present.' },
    { en: 'If we don’t conserve water, it will become scarce.', cols: [['إِذَا لَمْ', 'إِذَا لَا'], ['نُرَشِّدِ المِيَاهَ،', 'نُرَشِّدُ المِيَاهَ،'], ['فَسَوْفَ تَشِحُّ.', 'فَسَوْفَ يَشِحُّونَ.']], key: [0, 0, 0], why: 'لَمْ + jussive (vowel -i before al-); مِيَاهٌ → feminine verb.' },
    { en: 'We must move to renewable energy.', cols: [['يَجِبُ أَنْ', 'يَجِبُ'], ['نَنْتَقِلَ', 'نَنْتَقِلُ'], ['إِلَى الطَّاقَةِ المُتَجَدِّدَةِ.', 'إِلَى الطَّاقَةُ المُتَجَدِّدَةُ.']], key: [0, 0, 0], why: 'أَنْ + -a; إِلَى + genitive.' },
  ],
  errors: [
    { wrong: 'إِذَا لَا نُرَشِّدُ المَاءَ …', hint: 'Negative condition.', right: 'إِذَا لَمْ نُرَشِّدِ المَاءَ …', why: 'إِذَا لَمْ + jussive.' },
    { wrong: 'إِذَا اسْتَمَرَّ التَّلَوُّثُ، سَيَنْضَبُ … (no fa-)', hint: 'Join the result.', right: 'إِذَا اسْتَمَرَّ التَّلَوُّثُ، فَسَوْفَ يَنْضَبُ …', why: 'Result with سَوْفَ takes fa-.' },
    { wrong: 'يَنْضَبُ المِيَاهُ الجَوْفِيَّةُ.', hint: 'مِيَاهٌ is plural.', right: 'تَنْضَبُ المِيَاهُ الجَوْفِيَّةُ.', why: 'Non-human plural → feminine verb.' },
  ],
  task: {
    title: 'Predictions and actions', ar: 'تَوَقُّعَاتٌ وَحُلُولٌ',
    text: 'Write a paragraph (about 60–80 words) for an environmental campaign about one resource. Include: • why it is at risk (بِسَبَبِ …) • two predictions (إِذَا اسْتَمَرَّ … فَسَوْفَ … / إِذَا لَمْ … فَسَوْفَ …) • يَنْضَبُ or يَشِحُّ • two actions with يَجِبُ أَنْ … • a final message.',
    phrases: [['إِذَا اسْتَمَرَّ … ، فَسَوْفَ …', 'if … continues, … will …'], ['إِذَا لَمْ نُ… ، فَسَوْفَ …', 'if we don’t …, … will …'], ['يَنْضَبُ · يَشِحُّ', 'runs out · becomes scarce'], ['يَجِبُ أَنْ نَنْتَقِلَ إِلَى …', 'we must move to …']],
    coreFrames: [
      { ar: '______ فِي خَطَرٍ بِسَبَبِ ______ .', en: '… is at risk because of …' },
      { ar: 'إِذَا اسْتَمَرَّ ______ ، فَسَوْفَ ______ .', en: 'If … continues, … will …' },
      { ar: 'يَجِبُ أَنْ ______ .', en: 'We must …' },
      { ar: 'رِسَالَتِي: ______ !', en: 'My message: …!' },
    ],
    developFrames: [
      { ar: 'إِذَا لَمْ ______ ، فَسَوْفَ يَشِحُّ / يَنْضَبُ ______ .', en: 'If we don’t …, … will become scarce / run out.' },
      { ar: 'يَجِبُ أَنْ نَنْتَقِلَ إِلَى ______ بَدَلًا مِنْ ______ .', en: 'We must move to … instead of …' },
    ],
    bank: ['المَوَارِدُ', 'الاسْتِدَامَةُ', 'شُحُّ المِيَاهِ', 'الوَقُودُ الأُحْفُورِيُّ', 'المِيَاهُ الجَوْفِيَّةُ', 'الاسْتِهْلَاكُ', 'يَنْضَبُ · يَشِحُّ', 'إِذَا لَمْ + jussive'],
    model: {
      text: 'المِيَاهُ العَذْبَةُ فِي خَطَرٍ بِسَبَبِ الاسْتِهْلَاكِ الكَبِيرِ وَالاحْتِبَاسِ الحَرَارِيِّ. إِذَا اسْتَمَرَّ هٰذَا الاسْتِهْلَاكُ، فَسَوْفَ تَنْضَبُ المِيَاهُ الجَوْفِيَّةُ فِي بِلَادٍ كَثِيرَةٍ. وَإِذَا لَمْ نُرَشِّدِ المِيَاهَ فِي بُيُوتِنَا، فَسَوْفَ يَشِحُّ المَاءُ حَتَّى فِي المُدُنِ الكَبِيرَةِ، مِمَّا يُؤَدِّي إِلَى مُشْكِلَاتٍ صِحِّيَّةٍ. لِذٰلِكَ يَجِبُ أَنْ نُصْلِحَ الأَنَابِيبَ المَكْسُورَةَ، وَيَجِبُ أَنْ نَنْتَقِلَ إِلَى الرَّيِّ الذَّكِيِّ فِي الزِّرَاعَةِ بَدَلًا مِنَ الطُّرُقِ القَدِيمَةِ. رِسَالَتِي: كُلُّ قَطْرَةٍ مُهِمَّةٌ!',
      en: '“Fresh water is at risk because of heavy consumption and global warming. If this consumption continues, groundwater will run out in many countries. And if we don’t conserve water at home, water will become scarce even in big cities, which leads to health problems. So we must repair broken pipes, and we must move to smart irrigation in farming instead of old methods. My message: every drop counts!”',
      find: ['إِذَا اسْتَمَرَّ هٰذَا الاسْتِهْلَاكُ', 'إِذَا لَمْ نُرَشِّدِ', 'يَشِحُّ المَاءُ', 'يَجِبُ أَنْ نَنْتَقِلَ إِلَى'],
    },
  },
  checkCore: 'make two predictions with إِذَا … فَسَوْفَ …?',
  checkDevelop: 'use إِذَا لَمْ + jussive and يَنْضَبُ / يَشِحُّ correctly?',
});
