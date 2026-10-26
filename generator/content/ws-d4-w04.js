'use strict';
/* Apply Workshop · D4-W04 · D4-L07 (resources and sustainability) + D4-L08 (reading environment and technology texts). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd4-w04', pair: ['d4-l07', 'd4-l08'],
  title: 'Our School Water Report', arShort: 'تَقْرِيرُ المَاءِ فِي مَدْرَسَتِنَا',
  focus: 'Students join reading statistics with predictions about resources: they read a short data report on the school’s water use (وَفْقًا لِ… · يَبْلُغُ · بِنِسْبَةِ …), separate claims from evidence, predict what will happen if things continue (إِذَا اسْتَمَرَّ … · إِذَا لَمْ …), and write their own report with data, predictions and actions.',
  dialogue: {
    title: 'Reading the water data', ar: 'نَقْرَأُ بَيَانَاتِ المَاءِ',
    lines: [
      ['A', 'وَفْقًا لِبَيَانَاتِ المَدْرَسَةِ، يَبْلُغُ اسْتِهْلَاكُ المَاءِ عِشْرِينَ أَلْفَ لِتْرٍ فِي الأُسْبُوعِ.', 'According to the school’s data, water use reaches twenty thousand litres a week.'],
      ['B', 'وَمَا الَّذِي يُمَثِّلُ أَكْبَرَ نِسْبَةٍ؟', 'And what represents the largest share?'],
      ['A', 'الحَمَّامَاتُ تُمَثِّلُ سِتِّينَ فِي المِئَةِ مِنَ الاسْتِهْلَاكِ.', 'The toilets represent sixty per cent of the use.'],
      ['B', 'إِذَا اسْتَمَرَّ هٰذَا الاسْتِهْلَاكُ، فَسَوْفَ تَرْتَفِعُ الفَاتُورَةُ كَثِيرًا.', 'If this use continues, the bill will rise a lot.'],
      ['A', 'وَيُشَارُ إِلَى أَنَّ المَاءَ يَشِحُّ فِي الصَّيْفِ.', 'And it is reported that water becomes scarce in summer.'],
      ['B', 'إِذَا لَمْ نُرَشِّدِ المَاءَ، فَسَوْفَ نُوَاجِهُ مُشْكِلَةً كَبِيرَةً.', 'If we don’t use water wisely, we will face a big problem.'],
    ],
    notes: 'Statistics and reporting (وَفْقًا لِ… · يَبْلُغُ · يُمَثِّلُ · يُشَارُ إِلَى أَنَّ) come from D4-L08; predictions with إِذَا اسْتَمَرَّ … فَسَوْفَ … and إِذَا لَمْ + jussive (نُرَشِّدِ) and يَشِحُّ from D4-L07.',
  },
  card: {
    title: 'Reading card — the water report', ar: 'بِطَاقَةُ القِرَاءَةِ', you: 'the reader', them: 'the eco-club leader',
    mix: 'reading statistics, reporting and telling claim from evidence (D4-L08) with predictions and conditions about a resource (D4-L07)',
    tasks: [
      { ex: '«انْخَفَضَ اسْتِهْلَاكُ المَاءِ بِنِسْبَةِ عَشَرَةٍ فِي المِئَةِ بَعْدَ تَرْكِيبِ صَنَابِيرَ ذَكِيَّةٍ.» — مَاذَا حَدَثَ؟', task: 'Report the statistic.', plan: 'مَاذَا ← انْخَفَضَ … بِنِسْبَةِ …', model: 'انْخَفَضَ الاسْتِهْلَاكُ بِنِسْبَةِ عَشَرَةٍ فِي المِئَةِ بِسَبَبِ الصَّنَابِيرِ الذَّكِيَّةِ.', modelEn: 'Use fell by ten per cent because of the smart taps.' },
      { ex: '«المَاءُ لَنْ يَنْضَبَ أَبَدًا فِي بِرِيطَانِيَا.» — هٰذَا ادِّعَاءٌ أَمْ دَلِيلٌ؟', task: 'Claim or evidence? Why?', plan: 'ادِّعَاءٌ ← لَا أَرْقَامَ …', model: 'هٰذَا ادِّعَاءٌ، لِأَنَّهُ لَيْسَ فِيهِ أَرْقَامٌ وَلَا مَصْدَرٌ.', modelEn: 'This is a claim, because it has no figures and no source.' },
      { ex: 'مَاذَا سَيَحْدُثُ إِذَا اسْتَمَرَّ الاسْتِهْلَاكُ؟', task: 'A prediction with إِذَا اسْتَمَرَّ.', plan: '______________', model: 'إِذَا اسْتَمَرَّ الاسْتِهْلَاكُ، فَسَوْفَ يَشِحُّ المَاءُ فِي الصَّيْفِ.', modelEn: 'If use continues, water will become scarce in summer.' },
      { ex: 'وَإِذَا لَمْ نَفْعَلْ شَيْئًا؟', task: 'A prediction with إِذَا لَمْ + jussive.', plan: '______________', model: 'إِذَا لَمْ نُصْلِحِ الصَّنَابِيرَ المَكْسُورَةَ، فَسَوْفَ نُضَيِّعُ آلَافَ اللِّتْرَاتِ.', modelEn: 'If we don’t fix the broken taps, we will waste thousands of litres.' },
      { unexpected: true, ex: 'مَا الحَلُّ الأَفْضَلُ فِي رَأْيِكَ؟', task: 'An action + a move to a sustainable source.', plan: '______________', model: 'يَجِبُ أَنْ نَجْمَعَ مَاءَ المَطَرِ، وَأَنْ نَنْتَقِلَ إِلَى صَنَابِيرَ ذَكِيَّةٍ فِي كُلِّ المَدْرَسَةِ.', modelEn: 'We must collect rainwater, and move to smart taps across the whole school.' },
    ],
    foot: 'Partner A reads each line of the report and asks. Answer with the figure or the reason from the text, then a full sentence. Task ! is your view. Then swap.',
    girl: 'مَا الحَلُّ الأَفْضَلُ فِي رَأْيِكِ؟',
  },
  talk: {
    title: 'The water figures — and what they mean', ar: 'أَرْقَامُ المَاءِ وَمَعْنَاهَا',
    text: 'Present the school water report for one minute: two statistics with their source, one claim you do not trust and why, two predictions (إِذَا اسْتَمَرَّ … / إِذَا لَمْ …), and two actions for the school.',
    routes: {
      core: 'وَفْقًا لِبَيَانَاتِ … · يَبْلُغُ … · يَجِبُ أَنْ …',
      develop: 'Add بِنِسْبَةِ … and إِذَا اسْتَمَرَّ … فَسَوْفَ …',
      stretch: 'Add يُشَارُ إِلَى أَنَّ …, إِذَا لَمْ + jussive and claim vs evidence.',
    },
  },
  task: {
    title: 'Our school water report', ar: 'تَقْرِيرُنَا عَنِ المَاءِ',
    text: 'Write a short report (about 60–80 words) for the school website (you may invent realistic data). Include: • the source (وَفْقًا لِ…) • three statistics (يَبْلُغُ · يُمَثِّلُ · بِنِسْبَةِ …) • why water is at risk • two predictions (إِذَا اسْتَمَرَّ … فَسَوْفَ … / إِذَا لَمْ … فَسَوْفَ …) • two actions, one moving to a sustainable solution.',
    range: [50, 100],
    phrases: [['وَفْقًا لِبَيَانَاتِ المَدْرَسَةِ …', 'according to the school’s data …'], ['يَبْلُغُ … · يُمَثِّلُ … · بِنِسْبَةِ …', 'reaches … · represents … · by … per cent'], ['إِذَا اسْتَمَرَّ … ، فَسَوْفَ …', 'if … continues, … will …'], ['إِذَا لَمْ نُرَشِّدِ المَاءَ ، فَسَوْفَ …', 'if we don’t use water wisely, …']],
    coreFrames: [
      { ar: 'وَفْقًا لِبَيَانَاتِ ______ ، يَبْلُغُ اسْتِهْلَاكُ المَاءِ ______ .', en: 'According to … data, water use reaches …' },
      { ar: '______ تُمَثِّلُ ______ فِي المِئَةِ.', en: '… represent … per cent.' },
      { ar: 'إِذَا اسْتَمَرَّ ______ ، فَسَوْفَ ______ .', en: 'If … continues, … will …' },
      { ar: 'يَجِبُ أَنْ ______ .', en: 'We must …' },
    ],
    developFrames: [
      { ar: 'إِذَا لَمْ ______ ، فَسَوْفَ ______ .', en: 'If we don’t …, … will …' },
      { ar: 'يُشَارُ إِلَى أَنَّ ______ .', en: 'It is reported that …' },
      { ar: 'يَجِبُ أَنْ نَنْتَقِلَ إِلَى ______ .', en: 'We must move to …' },
    ],
    bank: ['وَفْقًا لِبَيَانَاتِ', 'يَبْلُغُ · يُمَثِّلُ', 'بِنِسْبَةِ … فِي المِئَةِ', 'ارْتَفَعَ · انْخَفَضَ', 'يُشَارُ إِلَى أَنَّ', 'إِذَا اسْتَمَرَّ … فَسَوْفَ', 'إِذَا لَمْ + نُرَشِّدْ', 'يَشِحُّ · يَنْضَبُ'],
    model: {
      text: 'وَفْقًا لِبَيَانَاتِ المَدْرَسَةِ، يَبْلُغُ اسْتِهْلَاكُ المَاءِ عِشْرِينَ أَلْفَ لِتْرٍ فِي الأُسْبُوعِ، وَتُمَثِّلُ الحَمَّامَاتُ سِتِّينَ فِي المِئَةِ مِنْهُ. وَقَدِ ارْتَفَعَ الاسْتِهْلَاكُ بِنِسْبَةِ خَمْسَةَ عَشَرَ فِي المِئَةِ هٰذَا العَامَ. يُشَارُ إِلَى أَنَّ المَاءَ يَشِحُّ فِي الصَّيْفِ بِسَبَبِ قِلَّةِ المَطَرِ. إِذَا اسْتَمَرَّ هٰذَا الاسْتِهْلَاكُ، فَسَوْفَ تَرْتَفِعُ الفَاتُورَةُ كَثِيرًا، وَإِذَا لَمْ نُصْلِحِ الصَّنَابِيرَ، فَسَوْفَ نُضَيِّعُ آلَافَ اللِّتْرَاتِ. لِذٰلِكَ يَجِبُ أَنْ نَجْمَعَ مَاءَ المَطَرِ، وَأَنْ نَنْتَقِلَ إِلَى صَنَابِيرَ ذَكِيَّةٍ.',
      en: '“According to the school’s data, water use reaches twenty thousand litres a week, and the toilets represent sixty per cent of it. Use has risen by fifteen per cent this year. It is reported that water becomes scarce in summer because of the lack of rain. If this use continues, the bill will rise a lot, and if we don’t fix the taps, we will waste thousands of litres. So we must collect rainwater and move to smart taps.”',
      find: ['وَفْقًا لِبَيَانَاتِ', 'بِنِسْبَةِ خَمْسَةَ عَشَرَ', 'إِذَا اسْتَمَرَّ', 'وَإِذَا لَمْ نُصْلِحِ'],
    },
  },
});
