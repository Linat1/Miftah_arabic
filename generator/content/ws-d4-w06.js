'use strict';
/* Apply Workshop · D4-W06 · D4-L11 (D4 consolidation: range and speaking preparation) + D4-L12 (review and unit assessment). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd4-w06', pair: ['d4-l11', 'd4-l12'],
  title: 'Our Planet: Youth Magazine Special', arShort: 'كَوْكَبُنَا',
  focus: 'Students use all of D4 for one real purpose: a youth magazine is publishing a special issue, “Our Planet”, so they build the full chain — climate → problem → cause and effect → solutions → a qualified judgement — speak it under test conditions with recovery phrases, and write the exam-style article.',
  sortTitle: 'Cause and effect, or solution and judgement?', sortCats: ['Cause and effect', 'Solutions and judgement'],
  sort: [
    { ar: 'بِسَبَبِ التَّلَوُّثِ', cat: 0 }, { ar: 'يُؤَدِّي إِلَى …', cat: 0 }, { ar: 'مِمَّا يُسَبِّبُ …', cat: 0 }, { ar: 'تُقْطَعُ الأَشْجَارُ', cat: 0 },
    { ar: 'يَنْبَغِي أَنْ نُقَلِّلَ …', cat: 1 }, { ar: 'يَجِبُ عَلَى الحُكُومَةِ أَنْ …', cat: 1 }, { ar: 'إِلَى حَدٍّ مَا', cat: 1 }, { ar: 'بِشَرْطِ أَنْ …', cat: 1 },
  ],
  dialogue: {
    title: 'The full chain in one answer', ar: 'السِّلْسِلَةُ الكَامِلَةُ',
    lines: [
      ['A', 'مَا أَكْبَرُ تَحَدٍّ بِيئِيٍّ فِي العَالَمِ؟', 'What is the biggest environmental challenge in the world?'],
      ['B', 'أَكْبَرُ تَحَدٍّ هُوَ تَغَيُّرُ المَنَاخِ؛ تَرْتَفِعُ دَرَجَاتُ الحَرَارَةِ كُلَّ عَامٍ.', 'The biggest challenge is climate change; temperatures rise every year.'],
      ['A', 'وَمَا سَبَبُهُ؟', 'And what causes it?'],
      ['B', 'بِسَبَبِ حَرْقِ الوَقُودِ، مِمَّا يُؤَدِّي إِلَى ذَوَبَانِ الجَلِيدِ — لِأُصَحِّحْ ذٰلِكَ: يُؤَدِّي إِلَى تَلَوُّثِ الهَوَاءِ وَذَوَبَانِ الجَلِيدِ.', 'Because of burning fuel, which leads to melting ice — let me correct that: it leads to air pollution and melting ice.'],
      ['A', 'وَمَا الحَلُّ؟', 'And what is the solution?'],
      ['B', 'يَجِبُ عَلَى الحُكُومَاتِ أَنْ تَسْتَثْمِرَ فِي الطَّاقَةِ الشَّمْسِيَّةِ، وَالحُلُولُ سَتَنْجَحُ إِلَى حَدٍّ مَا، بِشَرْطِ أَنْ نَتَعَاوَنَ.', 'Governments must invest in solar energy, and the solutions will succeed to some extent, provided that we co-operate.'],
    ],
    notes: 'The one-chain answer and recovery phrases (لِأُصَحِّحْ ذٰلِكَ · أَقْصِدُ أَنَّ …) come from D4-L11; all the D4 structures under review from D4-L12. Remind: an + -a (أَنْ تَسْتَثْمِرَ · أَنْ نَتَعَاوَنَ).',
  },
  card: {
    title: 'Speaking card — the five-question chain', ar: 'أَسْئِلَةُ السِّلْسِلَةِ', you: 'the candidate', them: 'the examiner',
    mix: 'the D4 chain answered under pressure with recovery phrases (D4-L11), covering every D4 structure (D4-L12)',
    tasks: [
      { ex: 'كَيْفَ المَنَاخُ وَالطَّقْسُ حَيْثُ تَسْكُنُ؟', task: 'Climate + a weather phrase.', plan: 'كَيْفَ ← يَسُودُ مَنَاخٌ … · يَسْقُطُ المَطَرُ …', model: 'يَسُودُ مَنَاخٌ مُعْتَدِلٌ، وَيَسْقُطُ المَطَرُ كَثِيرًا فِي الخَرِيفِ.', modelEn: 'A mild climate prevails, and it rains a lot in autumn.' },
      { ex: 'مَا المُشْكِلَةُ البِيئِيَّةُ الأَكْبَرُ عِنْدَكُمْ؟', task: 'A problem as a maṣdar + a passive.', plan: 'مَا ← … هِيَ … · تُرْمَى …', model: 'المُشْكِلَةُ الأَكْبَرُ هِيَ التَّلَوُّثُ البِلَاسْتِيكِيُّ؛ تُرْمَى النُّفَايَاتُ فِي الأَنْهَارِ.', modelEn: 'The biggest problem is plastic pollution; rubbish is thrown into rivers.' },
      { ex: 'مَا سَبَبُهَا وَنَتِيجَتُهَا؟', task: 'A cause-and-effect chain.', plan: '______________', model: 'بِسَبَبِ الاسْتِهْلَاكِ الكَبِيرِ، مِمَّا يُؤَدِّي إِلَى مَوْتِ الكَائِنَاتِ البَحْرِيَّةِ.', modelEn: 'Because of high consumption, which leads to the death of sea creatures.' },
      { ex: 'مَا الحَلُّ؟', task: 'Two solutions: one for the government, one for young people.', plan: '______________', model: 'يَجِبُ عَلَى الحُكُومَةِ أَنْ تَمْنَعَ الأَكْيَاسَ البِلَاسْتِيكِيَّةَ، وَيَنْبَغِي أَنْ يَسْتَخْدِمَ الشَّبَابُ قَوَارِيرَ قَابِلَةً لِإِعَادَةِ الاسْتِخْدَامِ.', modelEn: 'The government must ban plastic bags, and young people should use reusable bottles.' },
      { unexpected: true, ex: 'هَلْ تَسْتَطِيعُ التِّكْنُولُوجِيَا أَنْ تُسَاعِدَ؟', task: 'A qualified judgement; recover if you slip.', plan: '______________', model: 'إِلَى حَدٍّ مَا؛ بِعِبَارَةٍ أُخْرَى، تُسَاعِدُ بِشَرْطِ أَنْ نُغَيِّرَ عَادَاتِنَا.', modelEn: 'To some extent; in other words, it helps provided that we change our habits.' },
    ],
    girl: 'حَيْثُ تَسْكُنِينَ · هَلْ تَسْتَطِيعِينَ …؟ — and recovery: لِأُصَحِّحْ ذٰلِكَ · أَقْصِدُ أَنَّ …',
  },
  talk: {
    title: 'The exam chain in one minute', ar: 'السِّلْسِلَةُ فِي دَقِيقَةٍ',
    text: 'Answer the exam question for one minute without notes: “What is the biggest environmental challenge, and how do we face it?” Use the full chain: context → problem → cause and effect → two solutions → a qualified judgement. If you make a mistake, recover with a phrase and carry on.',
    routes: {
      core: 'أَكْبَرُ تَحَدٍّ هُوَ … · بِسَبَبِ … · يَجِبُ أَنْ …',
      develop: 'Add يُؤَدِّي إِلَى … مِمَّا يُسَبِّبُ … and a passive.',
      stretch: 'Add the -ū form for “they”, إِلَى حَدٍّ مَا · بِشَرْطِ أَنْ … and a recovery phrase.',
    },
  },
  task: {
    title: 'Exam-style article: our planet', ar: 'كَوْكَبُنَا',
    text: 'Write an article (about 60–85 words) for a youth magazine. Answer ALL four bullets: • the climate and weather where you live • one environmental problem, with causes and effects • two solutions (one for the government, one for young people) • can technology help? Give a qualified judgement. Use at least one passive and one إِذَا sentence.',
    range: [50, 105],
    phrases: [['يَسُودُ مَنَاخٌ … · يُتَوَقَّعُ أَنْ …', 'a … climate prevails · it is expected that …'], ['بِسَبَبِ … مِمَّا يُؤَدِّي إِلَى …', 'because of …, which leads to …'], ['يَجِبُ عَلَى … أَنْ … · يَنْبَغِي أَنْ …', '… must … · we should …'], ['إِلَى حَدٍّ مَا · بِشَرْطِ أَنْ …', 'to some extent · provided that …']],
    coreFrames: [
      { ar: 'فِي بِلَادِي يَسُودُ مَنَاخٌ ______ .', en: '• In my country a … climate prevails.' },
      { ar: 'أَكْبَرُ مُشْكِلَةٍ هِيَ ______ بِسَبَبِ ______ .', en: '• The biggest problem is … because of …' },
      { ar: 'يُؤَدِّي ذٰلِكَ إِلَى ______ .', en: '• This leads to …' },
      { ar: 'يَجِبُ عَلَى الحُكُومَةِ أَنْ ______ .', en: '• The government must …' },
      { ar: 'وَيَنْبَغِي أَنْ ______ .', en: '• And we should …' },
    ],
    developFrames: [
      { ar: 'إِذَا لَمْ ______ ، فَسَوْفَ ______ .', en: 'If we don’t …, … will …' },
      { ar: 'التِّكْنُولُوجِيَا مُفِيدَةٌ إِلَى حَدٍّ مَا، بِشَرْطِ أَنْ ______ .', en: 'Technology is useful to some extent, provided that …' },
    ],
    bank: ['يَسُودُ · يُتَوَقَّعُ أَنْ', 'بِسَبَبِ · يُؤَدِّي إِلَى', 'مِمَّا يُسَبِّبُ', 'تُرْمَى · تُقْطَعُ', 'يَنْبَغِي أَنْ · يَجِبُ عَلَى', 'إِذَا لَمْ … فَسَوْفَ', 'تُحَوِّلُ … إِلَى', 'إِلَى حَدٍّ مَا · بِشَرْطِ أَنْ'],
    model: {
      text: 'فِي بِرِيطَانِيَا يَسُودُ مَنَاخٌ مُعْتَدِلٌ، وَيَسْقُطُ المَطَرُ كَثِيرًا، وَلٰكِنْ يُتَوَقَّعُ أَنْ تَرْتَفِعَ دَرَجَاتُ الحَرَارَةِ فِي المُسْتَقْبَلِ. أَكْبَرُ مُشْكِلَةٍ هِيَ التَّلَوُّثُ البِلَاسْتِيكِيُّ؛ تُرْمَى النُّفَايَاتُ فِي الأَنْهَارِ بِسَبَبِ الاسْتِهْلَاكِ الكَبِيرِ، مِمَّا يُؤَدِّي إِلَى مَوْتِ الأَسْمَاكِ. يَجِبُ عَلَى الحُكُومَةِ أَنْ تَمْنَعَ الأَكْيَاسَ البِلَاسْتِيكِيَّةَ، وَيَنْبَغِي أَنْ يُعِيدَ الشَّبَابُ تَدْوِيرَ نُفَايَاتِهِمْ. إِذَا لَمْ نَتَحَرَّكِ الآنَ، فَسَوْفَ يَزْدَادُ التَّلَوُّثُ. التِّكْنُولُوجِيَا مُفِيدَةٌ إِلَى حَدٍّ مَا، بِشَرْطِ أَنْ نُغَيِّرَ عَادَاتِنَا أَيْضًا.',
      en: '“In Britain a mild climate prevails and it rains a lot, but temperatures are expected to rise in future. The biggest problem is plastic pollution; rubbish is thrown into rivers because of high consumption, which leads to the death of fish. The government must ban plastic bags, and young people should recycle their rubbish. If we don’t act now, pollution will increase. Technology is useful to some extent, provided that we change our habits too.”',
      find: ['يَسُودُ مَنَاخٌ مُعْتَدِلٌ', 'تُرْمَى النُّفَايَاتُ', 'مِمَّا يُؤَدِّي إِلَى', 'إِذَا لَمْ نَتَحَرَّكِ'],
    },
  },
});
