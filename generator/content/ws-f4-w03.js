'use strict';
/* Apply Workshop · F4-W03 · F4-L05 (giving reasons) + F4-L06 (school rules: must and must not). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f4-w03', pair: ['f4-l05', 'f4-l06'],
  title: 'The School Council Meeting', arShort: 'اجْتِمَاعُ مَجْلِسِ الطُّلَّابِ',
  focus: 'Students join rules and reasons: as the school council they say what students must, must not and may do, and give a reason for every rule (لِأَنَّهُ / لِأَنَّهَا · لِأَنَّنِي · لِأَنَّ + noun), then present their ideas and write a council proposal.',
  dialogue: {
    title: 'A rule — and a reason', ar: 'قَاعِدَةٌ وَسَبَبٌ',
    lines: [
      ['A', 'مَا أَهَمُّ قَاعِدَةٍ فِي رَأْيِكَ؟', 'What is the most important rule, in your opinion?'],
      ['B', 'يَجِبُ أَنْ نَصِلَ فِي الوَقْتِ.', 'We must arrive on time.'],
      ['A', 'لِمَاذَا؟', 'Why?'],
      ['B', 'لِأَنَّ الحِصَّةَ الأُولَى مُهِمَّةٌ جِدًّا.', 'Because the first lesson is very important.'],
      ['A', 'وَهَلْ يُمْكِنُ أَنْ نَسْتَعْمِلَ الهَاتِفَ فِي الصَّفِّ؟', 'And may we use the phone in class?'],
      ['B', 'لَا، لَا يَجُوزُ أَنْ نَسْتَعْمِلَهُ، لِأَنَّهُ يُضَيِّعُ الوَقْتَ.', 'No, we must not use it, because it wastes time.'],
    ],
    notes: 'يَجِبُ أَنْ · لَا يَجُوزُ أَنْ · يُمْكِنُ أَنْ come from F4-L06; لِمَاذَا؟ → لِأَنَّ + noun / لِأَنَّهُ from F4-L05. Remind: after أَنْ the verb ends in -a (نَصِلَ · نَسْتَعْمِلَ).',
  },
  card: {
    title: 'Role-play card — the council interview', ar: 'مُقَابَلَةُ المَجْلِسِ', you: 'a council member', them: 'the head teacher',
    mix: 'must / must not / may + verb in -a (F4-L06) with a reason for every answer in three forms (F4-L05)',
    tasks: [
      { ex: 'مَاذَا يَجِبُ أَنْ يَلْبَسَ الطُّلَّابُ؟', task: 'Give a uniform rule.', plan: 'مَاذَا ← يَجِبُ أَنْ نَلْبَسَ …', model: 'يَجِبُ أَنْ نَلْبَسَ اللِّبَاسَ المَدْرَسِيَّ كُلَّ يَوْمٍ.', modelEn: 'We must wear the school uniform every day.' },
      { ex: 'لِمَاذَا؟', task: 'Give a reason with لِأَنَّهُ.', plan: 'لِمَاذَا ← لِأَنَّهُ …', model: 'لِأَنَّهُ مُرَتَّبٌ وَعَمَلِيٌّ.', modelEn: 'Because it is smart and practical.' },
      { ex: 'مَاذَا لَا يَجُوزُ فِي المَقْصَفِ؟', task: 'Give a “must not” rule.', plan: 'مَاذَا ← لَا يَجُوزُ أَنْ …', model: 'لَا يَجُوزُ أَنْ نَرْكُضَ فِي المَقْصَفِ.', modelEn: 'We must not run in the canteen.' },
      { ex: 'هَلْ يُمْكِنُ أَنْ نَأْكُلَ فِي الصَّفِّ؟', task: 'Answer and give a reason with لِأَنَّ + noun.', plan: 'هَلْ ← لَا … لِأَنَّ الصَّفَّ …', model: 'لَا، لِأَنَّ الصَّفَّ يَجِبُ أَنْ يَكُونَ نَظِيفًا.', modelEn: 'No, because the classroom must be clean.' },
      { unexpected: true, ex: 'لِمَاذَا تُرِيدُ أَنْ تَكُونَ فِي المَجْلِسِ؟', task: 'Give a reason with لِأَنَّنِي.', plan: 'لِمَاذَا ← لِأَنَّنِي أُرِيدُ أَنْ …', model: 'لِأَنَّنِي أُرِيدُ أَنْ أُسَاعِدَ زُمَلَائِي.', modelEn: 'Because I want to help my classmates.' },
    ],
    girl: 'لِمَاذَا تُرِيدِينَ …؟ — and she answers: لِأَنَّنِي أُرِيدُ أَنْ …',
  },
  talk: {
    title: 'Three rules for a better school', ar: 'ثَلَاثُ قَوَاعِدَ لِمَدْرَسَةٍ أَفْضَلَ',
    text: 'Talk for 30–45 seconds as a council member: one thing students must do, one thing they must not do and one thing they may do — with a reason for each.',
    routes: {
      core: 'يَجِبُ أَنْ … · لَا يَجُوزُ أَنْ … · يُمْكِنُ أَنْ …',
      develop: 'A reason for each rule: لِأَنَّهُ / لِأَنَّهَا …',
      stretch: 'Use all three reason forms (لِأَنَّهُ · لِأَنَّنِي · لِأَنَّ + noun) and one imperative: احْتَرِمُوا …!',
    },
    phrases: [['يَجِبُ أَنْ …', 'we must …'], ['لَا يَجُوزُ أَنْ …', 'we must not …'], ['يُمْكِنُ أَنْ …', 'we may …'], ['لِأَنَّهُ · لِأَنَّنِي · لِأَنَّ …', 'because it · because I · because …']],
  },
  task: {
    title: 'Our school council proposal', ar: 'اقْتِرَاحُ مَجْلِسِ الطُّلَّابِ',
    text: 'Write a proposal (about 45–65 words) to the head teacher. Include: • a polite greeting • two things students must do • two things students must not do • one thing students may do • a reason for every rule, using at least three different reason forms • a polite closing.',
    range: [40, 85],
    phrases: [['يَجِبُ أَنْ … لِأَنَّهُ / لِأَنَّهَا …', 'we must … because it …'], ['لَا يَجُوزُ أَنْ … لِأَنَّ …', 'we must not … because …'], ['يُمْكِنُ أَنْ …', 'we may …'], ['نَقْتَرِحُ هٰذِهِ القَوَاعِدَ لِأَنَّنَا …', 'we suggest these rules because we …']],
    coreFrames: [
      { ar: 'السَّلَامُ عَلَيْكُمْ يَا ______ .', en: 'Peace be upon you, (head teacher).' },
      { ar: 'يَجِبُ أَنْ ______ لِأَنَّ ______ .', en: 'We must … because …' },
      { ar: 'لَا يَجُوزُ أَنْ ______ لِأَنَّهُ ______ .', en: 'We must not … because it …' },
      { ar: 'يُمْكِنُ أَنْ ______ .', en: 'We may …' },
      { ar: 'شُكْرًا جَزِيلًا.', en: 'Thank you very much.' },
    ],
    developFrames: [
      { ar: 'نَقْتَرِحُ هٰذِهِ القَوَاعِدَ لِأَنَّنَا ______ .', en: 'We suggest these rules because we …' },
      { ar: 'وَأَيْضًا يَجِبُ أَنْ ______ .', en: 'And also we must …' },
    ],
    bank: ['يَجِبُ أَنْ', 'لَا يَجُوزُ أَنْ', 'يُمْكِنُ أَنْ', 'نَصِلَ فِي الوَقْتِ', 'نَحْتَرِمَ', 'نَلْبَسَ', 'لِأَنَّهُ · لِأَنَّهَا', 'لِأَنَّنِي · لِأَنَّنَا'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ يَا حَضْرَةَ المُدِيرِ. يَجِبُ أَنْ نَصِلَ فِي الوَقْتِ لِأَنَّ الحِصَّةَ الأُولَى مُهِمَّةٌ. وَيَجِبُ أَنْ نَحْتَرِمَ المُعَلِّمِينَ لِأَنَّهُمْ يُسَاعِدُونَنَا. لَا يَجُوزُ أَنْ نَسْتَعْمِلَ الهَاتِفَ فِي الصَّفِّ لِأَنَّهُ يُضَيِّعُ الوَقْتَ، وَلَا يَجُوزُ أَنْ نَأْكُلَ فِي المَكْتَبَةِ. يُمْكِنُ أَنْ نَقْرَأَ فِي الاِسْتِرَاحَةِ. نَقْتَرِحُ هٰذِهِ القَوَاعِدَ لِأَنَّنَا نُحِبُّ مَدْرَسَتَنَا. شُكْرًا جَزِيلًا.',
      en: '“Peace be upon you, Head Teacher. We must arrive on time because the first lesson is important. And we must respect the teachers because they help us. We must not use the phone in class because it wastes time, and we must not eat in the library. We may read at break time. We suggest these rules because we love our school. Thank you very much.”',
      find: ['يَجِبُ أَنْ نَصِلَ', 'لِأَنَّهُمْ يُسَاعِدُونَنَا', 'لَا يَجُوزُ أَنْ نَسْتَعْمِلَ', 'لِأَنَّنَا نُحِبُّ'],
    },
  },
});
