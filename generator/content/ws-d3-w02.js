'use strict';
/* Apply Workshop · D3-W02 · D3-L03 (skills and qualities) + D3-L04 (the future: plans and ambitions). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd3-w02', pair: ['d3-l03', 'd3-l04'],
  title: 'A Session with the Career Coach', arShort: 'جَلْسَةٌ مَعَ المُرْشِدِ المِهْنِيِّ',
  focus: 'Students join skills and qualities with future plans: in a session with the school career coach they say what their dream job needs (يَحْتَاجُ إِلَى · يَجِبُ أَنْ يَكُونَ …), prove their own skills with examples, set out future steps (سَأَدْرُسُ · سَوْفَ · لَنْ · لِكَيْ · إِذَا … فَسَوْفَ …), and write a personal career plan.',
  dialogue: {
    title: 'In the career coach’s office', ar: 'فِي مَكْتَبِ المُرْشِدِ',
    lines: [
      ['A', 'مَاذَا تُرِيدِينَ أَنْ تُصْبِحِي؟', 'What do you want to become?'],
      ['B', 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ طَبِيبَةَ أَطْفَالٍ.', 'I aspire to become a children’s doctor.'],
      ['A', 'إِلَامَ تَحْتَاجُ هٰذِهِ الوَظِيفَةُ؟', 'What does this job need?'],
      ['B', 'تَحْتَاجُ إِلَى الصَّبْرِ؛ يَجِبُ أَنْ تَكُونَ الطَّبِيبَةُ صَبُورَةً وَلَطِيفَةً. أَنَا أَسْتَطِيعُ أَنْ أَهْدَأَ عِنْدَمَا يَبْكِي أَخِي الصَّغِيرُ.', 'It needs patience; the doctor must be patient and kind. I can stay calm when my little brother cries.'],
      ['A', 'وَمَا خُطَّتُكِ؟', 'And what is your plan?'],
      ['B', 'سَأَدْرُسُ الأَحْيَاءَ وَالكِيمْيَاءَ لِكَيْ أَدْخُلَ كُلِّيَّةَ الطِّبِّ، وَلَنْ أَسْتَسْلِمَ أَبَدًا.', 'I will study biology and chemistry so that I can get into medical school, and I will never give up.'],
    ],
    notes: 'يَحْتَاجُ إِلَى · يَجِبُ أَنْ تَكُونَ + -an (صَبُورَةً) · أَسْتَطِيعُ أَنْ come from D3-L03; أَطْمَحُ إِلَى أَنْ · سَأَدْرُسُ · لِكَيْ · لَنْ + -a from D3-L04.',
  },
  card: {
    title: 'Role-play card — the career coach', ar: 'المُرْشِدُ المِهْنِيُّ', you: 'the student', them: 'the career coach',
    mix: 'needs, qualities and proven skills (D3-L03) with ambitions, future steps, purpose, negatives and conditions (D3-L04)',
    tasks: [
      { ex: 'مَا طُمُوحُكَ؟', task: 'Your ambition + a reason.', plan: 'مَا ← أَطْمَحُ إِلَى أَنْ أُصْبِحَ … لِأَنَّ …', model: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُبَرْمِجًا، لِأَنِّي أُحِبُّ الحَاسُوبَ.', modelEn: 'I aspire to become a programmer, because I love computers.' },
      { ex: 'إِلَامَ يَحْتَاجُ المُبَرْمِجُ؟', task: 'What the job needs + what the worker must be.', plan: 'إِلَامَ ← يَحْتَاجُ إِلَى … · يَجِبُ أَنْ يَكُونَ …', model: 'يَحْتَاجُ إِلَى التَّرْكِيزِ؛ يَجِبُ أَنْ يَكُونَ دَقِيقًا وَصَبُورًا.', modelEn: 'He needs concentration; he must be precise and patient.' },
      { ex: 'مَا مَهَارَاتُكَ؟ أَعْطِنِي دَلِيلًا.', task: 'Two skills with evidence.', plan: '______________', model: 'أَسْتَطِيعُ أَنْ أَحُلَّ المَشَاكِلَ؛ مَثَلًا، صَمَّمْتُ لُعْبَةً بَسِيطَةً فِي نَادِي الحَاسُوبِ.', modelEn: 'I can solve problems; for example, I designed a simple game in the computer club.' },
      { ex: 'مَا خُطُوَاتُكَ القَادِمَةُ؟', task: 'Two future steps + a purpose.', plan: '______________', model: 'سَأَدْرُسُ عِلْمَ الحَاسُوبِ، ثُمَّ سَوْفَ أَتَدَرَّبُ فِي شَرِكَةٍ لِكَيْ أَكْتَسِبَ خِبْرَةً.', modelEn: 'I will study computer science, then I will train in a company so that I gain experience.' },
      { unexpected: true, ex: 'وَإِذَا لَمْ تَنْجَحْ فِي الامْتِحَانِ؟', task: 'A Plan B with إِذَا and لَنْ.', plan: '______________', model: 'إِذَا لَمْ أَنْجَحْ، فَسَأُعِيدُ الامْتِحَانَ؛ لَنْ أَسْتَسْلِمَ.', modelEn: 'If I don’t pass, I will retake the exam; I will not give up.' },
    ],
    girl: 'مَا طُمُوحُكِ؟ · مَا مَهَارَاتُكِ؟ — and she answers: أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُبَرْمِجَةً',
  },
  talk: {
    title: 'My dream job and how I will get there', ar: 'وَظِيفَةُ أَحْلَامِي وَطَرِيقِي إِلَيْهَا',
    text: 'Talk for one minute: your dream job and why, what it needs and what the worker must be like, two skills you have with evidence, three future steps, one thing you will not do, and a Plan B.',
    routes: {
      core: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ … · يَحْتَاجُ إِلَى … · سَأَدْرُسُ …',
      develop: 'Add يَجِبُ أَنْ يَكُونَ / تَكُونَ + -an, أَسْتَطِيعُ أَنْ … and مَثَلًا.',
      stretch: 'Add لِكَيْ, لَنْ + -a and إِذَا … فَسَوْفَ …',
    },
  },
  task: {
    title: 'My personal career plan', ar: 'خُطَّتِي المِهْنِيَّةُ',
    text: 'Write a career plan (about 60–80 words) for your careers file. Include: • your ambition with a reason • what the job needs and what the worker must be • two skills or qualities you have, each with evidence • three future steps with سَوْفَ or the سَ prefix • one purpose (لِكَيْ) and one negative (لَنْ …) • a Plan B with إِذَا … فَسَوْفَ …',
    range: [50, 100],
    phrases: [['أَطْمَحُ إِلَى أَنْ أُصْبِحَ …', 'I aspire to become …'], ['يَحْتَاجُ هٰذَا العَمَلُ إِلَى … · يَجِبُ أَنْ يَكُونَ …', 'this job needs … · he must be …'], ['أَسْتَطِيعُ أَنْ … ؛ مَثَلًا …', 'I can … ; for example …'], ['سَأَدْرُسُ … لِكَيْ … · لَنْ أَسْتَسْلِمَ', 'I will study … so that … · I will not give up']],
    coreFrames: [
      { ar: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ ______ لِأَنَّ ______ .', en: 'I aspire to become … because …' },
      { ar: 'يَحْتَاجُ هٰذَا العَمَلُ إِلَى ______ .', en: 'This job needs …' },
      { ar: 'أَنَا ______ ؛ مَثَلًا، ______ .', en: 'I am …; for example, …' },
      { ar: 'سَأَدْرُسُ ______ ، ثُمَّ سَوْفَ ______ .', en: 'I will study …, then I will …' },
    ],
    developFrames: [
      { ar: '… لِكَيْ ______ .', en: '… so that …' },
      { ar: 'لَنْ ______ .', en: 'I will not …' },
      { ar: 'إِذَا لَمْ ______ ، فَسَوْفَ ______ .', en: 'If I don’t …, I will …' },
    ],
    bank: ['أَطْمَحُ إِلَى أَنْ', 'أُصْبِحَ', 'يَحْتَاجُ إِلَى', 'يَجِبُ أَنْ يَكُونَ صَبُورًا', 'أَسْتَطِيعُ أَنْ', 'سَأَدْرُسُ · سَوْفَ', 'لَنْ + أَسْتَسْلِمَ', 'لِكَيْ · إِذَا … فَسَوْفَ'],
    model: {
      text: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُبَرْمِجَةً، لِأَنِّي أُحِبُّ التِّكْنُولُوجِيَا. يَحْتَاجُ هٰذَا العَمَلُ إِلَى التَّرْكِيزِ، وَيَجِبُ أَنْ تَكُونَ المُبَرْمِجَةُ دَقِيقَةً وَصَبُورَةً. أَنَا مُنَظَّمَةٌ؛ مَثَلًا، أُخَطِّطُ لِدُرُوسِي كُلَّ أُسْبُوعٍ. وَأَسْتَطِيعُ أَنْ أَحُلَّ المَشَاكِلَ فِي نَادِي الحَاسُوبِ. سَأَدْرُسُ الرِّيَاضِيَّاتِ، ثُمَّ سَوْفَ أَدْرُسُ عِلْمَ الحَاسُوبِ فِي الجَامِعَةِ لِكَيْ أَعْمَلَ فِي شَرِكَةٍ كَبِيرَةٍ. لَنْ أَسْتَسْلِمَ أَبَدًا. إِذَا لَمْ أَدْخُلِ الجَامِعَةَ، فَسَأَتَدَرَّبُ فِي دَوْرَةٍ مِهْنِيَّةٍ.',
      en: '“I aspire to become a programmer, because I love technology. This job needs concentration, and a programmer must be precise and patient. I am organised; for example, I plan my lessons every week. And I can solve problems in the computer club. I will study maths, then I will study computer science at university so that I can work in a big company. I will never give up. If I don’t get into university, I will train on a vocational course.”',
      find: ['أَطْمَحُ إِلَى أَنْ أُصْبِحَ', 'يَحْتَاجُ هٰذَا العَمَلُ إِلَى', 'لِكَيْ أَعْمَلَ', 'لَنْ أَسْتَسْلِمَ'],
    },
  },
});
