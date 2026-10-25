'use strict';
/* Practice Room · D3-L06 · Job applications and interviews. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd3-l06',
  arShort: 'طَلَبُ العَمَلِ وَالمُقَابَلَةُ',
  grammar: 'formal opening: yasurrunī an ataqaddama li-waẓīfati …; experience: ladayya khibratun fī … · sabaqa lī an + verb in -a; suitability: aʿtaqidu annanī munāsibun / munāsibatun li-hādhihi al-waẓīfa li-anna …; a strength with evidence; a formal close: maʿa fāʾiqi al-iḥtirām',
  focus: 'Students run their own speaking and writing practice for job applications: say the application phrases, act a short interview, answer interview cards, do a role-play card for a Saturday job interview, give a one-minute “why me?” pitch, then build, fix and write a formal cover letter.',
  words1: 'Applying for a job', words2: 'Interview language',
  dialogue: {
    title: 'A short interview', ar: 'مُقَابَلَةٌ قَصِيرَةٌ',
    lines: [
      ['A', 'أَهْلًا وَسَهْلًا. لِمَاذَا تَقَدَّمْتِ لِهٰذِهِ الوَظِيفَةِ؟', 'Welcome. Why did you apply for this job?'],
      ['B', 'لِأَنَّنِي أُحِبُّ الكُتُبَ، وَأَعْتَقِدُ أَنَّنِي مُنَاسِبَةٌ لِلْعَمَلِ فِي المَكْتَبَةِ.', 'Because I love books, and I think I am suitable for working in the library.'],
      ['A', 'هَلْ لَدَيْكِ خِبْرَةٌ سَابِقَةٌ؟', 'Do you have previous experience?'],
      ['B', 'نَعَمْ، سَبَقَ لِي أَنْ تَطَوَّعْتُ فِي مَكْتَبَةِ المَدْرَسَةِ سَنَةً كَامِلَةً.', 'Yes, I have previously volunteered in the school library for a whole year.'],
      ['A', 'مَا نُقْطَةُ قُوَّتِكِ؟', 'What is your strength?'],
      ['B', 'أَنَا مُنَظَّمَةٌ جِدًّا؛ مَثَلًا، رَتَّبْتُ كُتُبَ المَكْتَبَةِ كُلَّهَا حَسَبَ المَوْضُوعِ.', 'I am very organised; for example, I arranged all the library books by subject.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: the applicant is a BOY — change every -ki and every feminine adjective.',
  },
  qTitle: 'Interview cards — answer formally',
  questions: [
    { q: 'عَرِّفْنَا بِنَفْسِكَ.', en: 'Introduce yourself.', start: 'اسْمِي … وَعُمْرِي … ، وَأَدْرُسُ …', more: '… وَأَهْتَمُّ بِالرِّيَاضَةِ / بِالقِرَاءَةِ' },
    { q: 'لِمَاذَا تُرِيدُ هٰذِهِ الوَظِيفَةَ؟', en: 'Why do you want this job?', start: 'لِأَنَّنِي …', more: '… وَأُرِيدُ أَنْ أَكْسِبَ خِبْرَةً' },
    { q: 'هَلْ لَدَيْكَ خِبْرَةٌ سَابِقَةٌ؟', en: 'Do you have previous experience?', start: 'نَعَمْ، سَبَقَ لِي أَنْ …', more: '… لِمُدَّةِ …' },
    { q: 'مَا نُقْطَةُ قُوَّتِكَ وَنُقْطَةُ ضَعْفِكَ؟', en: 'Your strength and your weakness?', start: 'نُقْطَةُ قُوَّتِي … ؛ مَثَلًا …', more: '… أَمَّا نُقْطَةُ ضَعْفِي فَ…' },
    { q: 'أَيْنَ تَرَى نَفْسَكَ بَعْدَ خَمْسِ سَنَوَاتٍ؟', en: 'Where do you see yourself in five years?', start: 'سَأَكُونُ …', more: '… لِأَنَّنِي أَطْمَحُ إِلَى أَنْ …' },
  ],
  card: {
    title: 'Role-play card — a Saturday job at a sports shop', ar: 'عَمَلٌ يَوْمَ السَّبْتِ', you: 'the applicant', them: 'the shop manager',
    tasks: [
      { ex: 'لِمَاذَا تَقَدَّمْتَ لِهٰذَا العَمَلِ؟', task: 'Reason + interest.', plan: 'لِمَاذَا ← لِأَنَّنِي أُحِبُّ … وَأَعْتَقِدُ أَنَّنِي …', model: 'لِأَنَّنِي أُحِبُّ الرِّيَاضَةَ، وَأَعْتَقِدُ أَنَّنِي مُنَاسِبٌ لِهٰذَا العَمَلِ.', modelEn: 'Because I love sport, and I believe I am suitable for this job.' },
      { ex: 'هَلْ عَمِلْتَ مَعَ الزَّبَائِنِ مِنْ قَبْلُ؟', task: 'Experience.', plan: 'خِبْرَةٌ ← سَبَقَ لِي أَنْ …', model: 'نَعَمْ، سَبَقَ لِي أَنْ عَمِلْتُ فِي سُوقِ المَدْرَسَةِ الخَيْرِيِّ.', modelEn: 'Yes, I have worked at the school charity market before.' },
      { ex: 'مَا مَهَارَاتُكَ؟', task: 'Two skills + evidence.', plan: '', model: 'عِنْدِي مَهَارَةُ التَّوَاصُلِ، وَأُجِيدُ اللُّغَتَيْنِ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ.', modelEn: 'I have communication skills, and I speak Arabic and English well.' },
      { unexpected: true, ex: 'هَلْ تَسْتَطِيعُ أَنْ تَعْمَلَ يَوْمَ الأَحَدِ أَيْضًا؟', task: 'Answer politely.', plan: '', model: 'لِلْأَسَفِ لَا، لِأَنَّنِي أُرَاجِعُ دُرُوسِي يَوْمَ الأَحَدِ، وَلٰكِنَّنِي مُتَاحٌ فِي العُطَلِ.', modelEn: 'Unfortunately not, because I revise on Sundays, but I am available in the holidays.' },
    ],
    girl: 'manager to a girl: تَقَدَّمْتِ · عَمِلْتِ · مَهَارَاتُكِ · تَسْتَطِيعِينَ · مُنَاسِبَةٌ · مُتَاحَةٌ',
    notes: 'Formal register: ladayya / sabaqa lī an / aʿtaqidu annanī …',
  },
  talk: {
    title: 'One minute: “Why me?”', ar: 'لِمَاذَا أَنَا؟',
    text: 'Pitch yourself for a job of your choice for one minute: who you are, why this job, experience, two strengths with evidence, and your plans.',
    routes: {
      core: 'Who you are + why this job + one strength.',
      develop: 'Add سَبَقَ لِي أَنْ … and أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ / مُنَاسِبَةٌ …',
      stretch: 'Add evidence for two strengths, a weakness you are improving, and a future plan.',
    },
  },
  builder: [
    { en: 'I am pleased to apply for the job of assistant.', cols: [['يَسُرُّنِي', 'يَسُرُّنِيَ'], ['أَنْ أَتَقَدَّمَ', 'أَنْ أَتَقَدَّمُ'], ['لِوَظِيفَةِ مُسَاعِدٍ.', 'لِوَظِيفَةُ مُسَاعِدٌ.']], key: [0, 0, 0], why: 'أَنْ + -a; لِ + genitive.' },
    { en: 'I have previously worked in a café.', cols: [['سَبَقَ', 'سَوْفَ'], ['لِي أَنْ', 'لِي'], ['عَمِلْتُ فِي مَقْهًى.', 'أَعْمَلُ فِي مَقْهًى.']], key: [0, 0, 0], why: 'سَبَقَ لِي أَنْ + past = I have done … before.' },
    { en: 'I think I am suitable (f.) for this job.', cols: [['أَعْتَقِدُ', 'أَعْتَقِدَ'], ['أَنَّنِي مُنَاسِبَةٌ', 'أَنَّنِي مُنَاسِبٌ'], ['لِهٰذِهِ الوَظِيفَةِ.', 'لِهٰذَا الوَظِيفَةِ.']], key: [0, 0, 0], why: 'Female speaker → مُنَاسِبَةٌ; وَظِيفَةٌ (f.) → هٰذِهِ.' },
  ],
  errors: [
    { wrong: 'يَسُرُّنِي أَنْ أَتَقَدَّمُ لِلْوَظِيفَةِ.', hint: 'After أَنْ …', right: 'يَسُرُّنِي أَنْ أَتَقَدَّمَ لِلْوَظِيفَةِ.', why: 'أَنْ + -a.' },
    { wrong: 'لَدَيَّ خِبْرَةٌ مَعَ الحَاسُوبِ.', hint: 'Experience IN …', right: 'لَدَيَّ خِبْرَةٌ فِي الحَاسُوبِ.', why: 'خِبْرَةٌ فِي …' },
    { wrong: 'أَنَا مُنَظَّمٌ.', hint: 'Prove it.', right: 'أَنَا مُنَظَّمٌ؛ مَثَلًا، أُخَطِّطُ أُسْبُوعِي كُلَّ أَحَدٍ.', why: 'Every strength needs evidence.' },
  ],
  task: {
    title: 'A formal cover letter', ar: 'رِسَالَةُ تَغْطِيَةٍ رَسْمِيَّةٌ',
    text: 'You saw an advert for a summer job at a children’s club. Write a formal cover letter (about 60–80 words). Include: • a formal opening and the job you are applying for • your experience (سَبَقَ لِي أَنْ …) • two skills or strengths with evidence • why you are suitable (أَعْتَقِدُ أَنَّنِي …) • your availability and a formal close.',
    phrases: [['حَضْرَةَ المُدِيرِ المُحْتَرَمِ،', 'Dear Manager,'], ['يَسُرُّنِي أَنْ أَتَقَدَّمَ لِوَظِيفَةِ …', 'I am pleased to apply for the job of …'], ['سَبَقَ لِي أَنْ … · لَدَيَّ خِبْرَةٌ فِي …', 'I have previously … · I have experience in …'], ['مَعَ فَائِقِ الاحْتِرَامِ،', 'Yours faithfully,']],
    coreFrames: [
      { ar: 'حَضْرَةَ المُدِيرِ المُحْتَرَمِ،', en: 'Dear Manager,' },
      { ar: 'يَسُرُّنِي أَنْ أَتَقَدَّمَ لِوَظِيفَةِ ______ .', en: 'I am pleased to apply for the job of …' },
      { ar: 'سَبَقَ لِي أَنْ ______ .', en: 'I have previously …' },
      { ar: 'أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ / مُنَاسِبَةٌ لِأَنَّ ______ .', en: 'I believe I am suitable because …' },
    ],
    developFrames: [
      { ar: 'نُقْطَةُ قُوَّتِي ______ ؛ مَثَلًا، ______ .', en: 'My strength is …; for example, …' },
      { ar: 'أَنَا مُتَاحٌ / مُتَاحَةٌ ______ ، وَأَتَطَلَّعُ إِلَى ______ .', en: 'I am available …, and I look forward to …' },
    ],
    bank: ['سِيرَةٌ ذَاتِيَّةٌ', 'رِسَالَةُ تَغْطِيَةٍ', 'خِبْرَةٌ سَابِقَةٌ', 'نُقْطَةُ قُوَّةٍ', 'يَسُرُّنِي أَنْ أَتَقَدَّمَ', 'سَبَقَ لِي أَنْ', 'أَعْتَقِدُ أَنَّنِي', 'مَعَ فَائِقِ الاحْتِرَامِ'],
    model: {
      text: `حَضْرَةَ المُدِيرِ المُحْتَرَمِ،
يَسُرُّنِي أَنْ أَتَقَدَّمَ لِوَظِيفَةِ مُسَاعِدٍ فِي نَادِي الأَطْفَالِ الصَّيْفِيِّ. سَبَقَ لِي أَنْ تَطَوَّعْتُ فِي حَضَانَةٍ قَرِيبَةٍ مِنْ بَيْتِي لِمُدَّةِ سِتَّةِ أَشْهُرٍ. لَدَيَّ مَهَارَةُ التَّوَاصُلِ، وَأَنَا صَبُورٌ جِدًّا؛ مَثَلًا، أُسَاعِدُ إِخْوَتِي الصِّغَارَ فِي وَاجِبَاتِهِمْ كُلَّ يَوْمٍ. أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ لِهٰذِهِ الوَظِيفَةِ، لِأَنَّنِي نَشِيطٌ وَمَسْؤُولٌ وَأُحِبُّ الأَلْعَابَ الجَمَاعِيَّةَ. أَنَا مُتَاحٌ طُوَالَ شَهْرَيْ يُولْيُو وَأُغُسْطُسَ، وَأَتَطَلَّعُ إِلَى المُقَابَلَةِ.
مَعَ فَائِقِ الاحْتِرَامِ،
بِلَالٌ أَحْمَدُ`,
      en: '“Dear Manager, I am pleased to apply for the job of assistant at the children’s summer club. I have previously volunteered at a nursery near my home for six months. I have communication skills, and I am very patient; for example, I help my younger siblings with their homework every day. I believe I am suitable for this job, because I am energetic, responsible and love team games. I am available throughout July and August, and I look forward to the interview. Yours faithfully, Bilal Ahmed.”',
      find: ['يَسُرُّنِي أَنْ أَتَقَدَّمَ', 'سَبَقَ لِي أَنْ تَطَوَّعْتُ', 'أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ', 'مَعَ فَائِقِ الاحْتِرَامِ'],
    },
  },
  checkCore: 'use a formal opening and close, and say which job you want?',
  checkDevelop: 'use سَبَقَ لِي أَنْ, أَعْتَقِدُ أَنَّنِي … and evidence for each strength?',
});
