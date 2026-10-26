'use strict';
/* Apply Workshop · D3-W03 · D3-L05 (education and training: routes to a career) + D3-L06 (applications and interviews). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd3-w03', pair: ['d3-l05', 'd3-l06'],
  title: 'Applying for a Summer Apprenticeship', arShort: 'نَتَقَدَّمُ لِتَدْرِيبٍ صَيْفِيٍّ',
  focus: 'Students join routes to a career with applying for a job: they apply for a summer apprenticeship at an engineering company — a formal interview (experience, strengths, why the apprenticeship route suits them, future plans), then a formal cover letter that compares routes and explains their choice.',
  dialogue: {
    title: 'The apprenticeship interview', ar: 'مُقَابَلَةُ التَّدْرِيبِ',
    lines: [
      ['A', 'أَهْلًا. لِمَاذَا تُرِيدُ هٰذَا التَّدْرِيبَ المِهْنِيَّ؟', 'Welcome. Why do you want this apprenticeship?'],
      ['B', 'يَسُرُّنِي أَنْ أَتَقَدَّمَ لَهُ، لِأَنَّ التَّدْرِيبَ أَكْثَرُ عَمَلِيَّةً مِنَ الجَامِعَةِ.', 'I am pleased to apply for it, because an apprenticeship is more practical than university.'],
      ['A', 'هَلْ لَدَيْكَ خِبْرَةٌ سَابِقَةٌ؟', 'Do you have previous experience?'],
      ['B', 'نَعَمْ، سَبَقَ لِي أَنْ سَاعَدْتُ أَبِي فِي وَرْشَتِهِ كُلَّ صَيْفٍ.', 'Yes, I have previously helped my father in his workshop every summer.'],
      ['A', 'وَمَاذَا سَتَفْعَلُ بَعْدَ التَّدْرِيبِ؟', 'And what will you do after the apprenticeship?'],
      ['B', 'إِذَا حَصَلْتُ عَلَى الشَّهَادَةِ، فَسَوْفَ أَعْمَلُ فَنِّيًّا فِي شَرِكَتِكُمْ.', 'If I get the certificate, I will work as a technician in your company.'],
    ],
    notes: 'Comparing routes (أَكْثَرُ عَمَلِيَّةً مِنَ …) and إِذَا حَصَلْتُ عَلَى … فَسَوْفَ … come from D3-L05; the formal phrases (يَسُرُّنِي أَنْ أَتَقَدَّمَ · سَبَقَ لِي أَنْ · لَدَيَّ خِبْرَةٌ) from D3-L06.',
  },
  card: {
    title: 'Role-play card — the formal interview', ar: 'المُقَابَلَةُ الرَّسْمِيَّةُ', you: 'the applicant', them: 'the company manager',
    mix: 'formal interview language, experience and strengths (D3-L06) with routes to a career, comparisons and conditions (D3-L05)',
    tasks: [
      { ex: 'عَرِّفْنَا بِنَفْسِكَ، مِنْ فَضْلِكَ.', task: 'Name, age, school and the post.', plan: 'عَرِّفْ ← اسْمِي … ، وَيَسُرُّنِي أَنْ أَتَقَدَّمَ لِهٰذَا …', model: 'اسْمِي يُوسُفُ، عُمْرِي سِتَّ عَشْرَةَ سَنَةً، وَيَسُرُّنِي أَنْ أَتَقَدَّمَ لِهٰذَا التَّدْرِيبِ.', modelEn: 'My name is Yusuf, I am sixteen, and I am pleased to apply for this apprenticeship.' },
      { ex: 'هَلْ لَدَيْكَ خِبْرَةٌ؟', task: 'Experience with سَبَقَ لِي أَنْ …', plan: 'هَلْ ← سَبَقَ لِي أَنْ … · لَدَيَّ خِبْرَةٌ فِي …', model: 'سَبَقَ لِي أَنْ أَصْلَحْتُ دَرَّاجَاتٍ فِي نَادِي الحَيِّ، وَلَدَيَّ خِبْرَةٌ فِي العَمَلِ الجَمَاعِيِّ.', modelEn: 'I have previously repaired bikes at the local club, and I have experience of teamwork.' },
      { ex: 'لِمَاذَا تُفَضِّلُ التَّدْرِيبَ عَلَى الجَامِعَةِ؟', task: 'Compare the routes with two comparatives.', plan: '______________', model: 'لِأَنَّهُ أَقْصَرُ وَأَرْخَصُ مِنَ الجَامِعَةِ، وَأَكْثَرُ عَمَلِيَّةً.', modelEn: 'Because it is shorter and cheaper than university, and more practical.' },
      { ex: 'مَا نُقْطَةُ قُوَّتِكَ؟ وَنُقْطَةُ ضَعْفِكَ؟', task: 'A strength with evidence and a weakness.', plan: '______________', model: 'أَنَا دَقِيقٌ؛ مَثَلًا، أُرَاجِعُ عَمَلِي مَرَّتَيْنِ. نُقْطَةُ ضَعْفِي أَنِّي خَجُولٌ، وَلٰكِنَّنِي أَتَحَسَّنُ.', modelEn: 'I am precise; for example, I check my work twice. My weakness is that I am shy, but I am improving.' },
      { unexpected: true, ex: 'أَيْنَ تَرَى نَفْسَكَ بَعْدَ خَمْسِ سَنَوَاتٍ؟', task: 'A future plan with a condition.', plan: '______________', model: 'إِذَا حَصَلْتُ عَلَى الشَّهَادَةِ، فَسَوْفَ أَعْمَلُ فَنِّيًّا، ثُمَّ سَأَدْرُسُ الهَنْدَسَةَ بِدَوَامٍ جُزْئِيٍّ.', modelEn: 'If I get the certificate, I will work as a technician, then I will study engineering part-time.' },
    ],
    girl: 'عَرِّفِينَا بِنَفْسِكِ · هَلْ لَدَيْكِ خِبْرَةٌ؟ · لِمَاذَا تُفَضِّلِينَ …؟ — she answers: أَعْتَقِدُ أَنَّنِي مُنَاسِبَةٌ',
  },
  talk: {
    title: 'Why I am the right person', ar: 'لِمَاذَا أَنَا مُنَاسِبٌ',
    text: 'Talk for one minute as an applicant: the post you are applying for, your experience, two strengths with evidence, why you chose this route (compare it with university), and your plan after the apprenticeship — with one condition.',
    routes: {
      core: 'يَسُرُّنِي أَنْ أَتَقَدَّمَ لِهٰذَا التَّدْرِيبِ · لَدَيَّ خِبْرَةٌ فِي …',
      develop: 'Add سَبَقَ لِي أَنْ … and two comparatives (أَقْصَرُ · أَكْثَرُ عَمَلِيَّةً).',
      stretch: 'Add أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ / مُنَاسِبَةٌ لِأَنَّ … and إِذَا حَصَلْتُ عَلَى … فَسَوْفَ …',
    },
  },
  task: {
    title: 'A formal cover letter for the apprenticeship', ar: 'رِسَالَةُ تَقْدِيمٍ رَسْمِيَّةٌ',
    text: 'Write a formal cover letter (about 60–80 words) for the summer apprenticeship. Include: • a formal opening and the post • your experience (سَبَقَ لِي أَنْ …) • two strengths with evidence • why this route suits you better than university (two comparatives) • your plan with a condition • a formal close.',
    range: [50, 100],
    phrases: [['حَضْرَةَ المُدِيرِ المُحْتَرَمِ،', 'Dear Sir / Madam (formal)'], ['يَسُرُّنِي أَنْ أَتَقَدَّمَ لِ…', 'I am pleased to apply for …'], ['التَّدْرِيبُ أَكْثَرُ عَمَلِيَّةً مِنَ الجَامِعَةِ', 'an apprenticeship is more practical than university'], ['مَعَ فَائِقِ الاحْتِرَامِ،', 'yours faithfully']],
    coreFrames: [
      { ar: 'حَضْرَةَ المُدِيرِ المُحْتَرَمِ،', en: 'Dear Sir / Madam,' },
      { ar: 'يَسُرُّنِي أَنْ أَتَقَدَّمَ لِ ______ .', en: 'I am pleased to apply for …' },
      { ar: 'سَبَقَ لِي أَنْ ______ .', en: 'I have previously …' },
      { ar: 'أَنَا ______ ؛ مَثَلًا، ______ .', en: 'I am …; for example, …' },
      { ar: 'مَعَ فَائِقِ الاحْتِرَامِ، ______', en: 'Yours faithfully, (name)' },
    ],
    developFrames: [
      { ar: 'أُفَضِّلُ التَّدْرِيبَ لِأَنَّهُ ______ مِنَ الجَامِعَةِ.', en: 'I prefer the apprenticeship because it is …-er than university.' },
      { ar: 'إِذَا حَصَلْتُ عَلَى ______ ، فَسَوْفَ ______ .', en: 'If I get …, I will …' },
      { ar: 'أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ / مُنَاسِبَةٌ لِأَنَّ ______ .', en: 'I believe I am suitable because …' },
    ],
    bank: ['حَضْرَةَ المُدِيرِ المُحْتَرَمِ', 'يَسُرُّنِي أَنْ أَتَقَدَّمَ', 'سَبَقَ لِي أَنْ', 'لَدَيَّ خِبْرَةٌ فِي', 'أَقْصَرُ · أَرْخَصُ مِنْ', 'أَكْثَرُ عَمَلِيَّةً', 'إِذَا حَصَلْتُ عَلَى … فَسَوْفَ', 'مَعَ فَائِقِ الاحْتِرَامِ'],
    model: {
      text: `حَضْرَةَ المُدِيرِ المُحْتَرَمِ،
يَسُرُّنِي أَنْ أَتَقَدَّمَ لِلتَّدْرِيبِ الصَّيْفِيِّ فِي شَرِكَتِكُمْ. سَبَقَ لِي أَنْ سَاعَدْتُ أَبِي فِي وَرْشَتِهِ، وَلَدَيَّ خِبْرَةٌ فِي العَمَلِ الجَمَاعِيِّ. أَنَا دَقِيقٌ وَمَسْؤُولٌ؛ مَثَلًا، أَصِلُ إِلَى النَّادِي فِي الوَقْتِ دَائِمًا. أُفَضِّلُ التَّدْرِيبَ لِأَنَّهُ أَقْصَرُ مِنَ الجَامِعَةِ وَأَكْثَرُ عَمَلِيَّةً. إِذَا حَصَلْتُ عَلَى الشَّهَادَةِ، فَسَوْفَ أَعْمَلُ فَنِّيًّا. أَعْتَقِدُ أَنَّنِي مُنَاسِبٌ لِهٰذَا التَّدْرِيبِ.
مَعَ فَائِقِ الاحْتِرَامِ، يُوسُفُ`,
      en: '“Dear Sir / Madam, I am pleased to apply for the summer apprenticeship in your company. I have previously helped my father in his workshop, and I have experience of teamwork. I am precise and responsible; for example, I always arrive at the club on time. I prefer an apprenticeship because it is shorter than university and more practical. If I get the certificate, I will work as a technician. I believe I am suitable for this apprenticeship. Yours faithfully, Yusuf”',
      find: ['يَسُرُّنِي أَنْ أَتَقَدَّمَ', 'سَبَقَ لِي أَنْ', 'أَقْصَرُ مِنَ الجَامِعَةِ', 'إِذَا حَصَلْتُ عَلَى الشَّهَادَةِ'],
    },
  },
});
