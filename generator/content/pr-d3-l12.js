'use strict';
/* Practice Room · D3-L12 · Review — work and careers, the whole unit in one room. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd3-l12',
  arShort: 'مُرَاجَعَةُ الوَحْدَةِ',
  grammar: 'D3 review: jobs m. / f. / pl. and yaʿmalu + -an; workplace adjectives and min mazāyāhu anna; yaḥtāju ilā · yajibu an yakūna + -an · yastaṭīʿu an; future sa- / sawfa / lan + -a; li-kay; idhā … fa-sawfa; formal application phrases; proverbs with yaʿnī anna …',
  focus: 'Students run their own review of the whole D3 unit: recall twelve key D3 expressions, act a mixed dialogue, answer mixed exam-style cards, do a full role-play card, give a one-minute talk, then build, fix and write an exam-style email about work and plans — and set one target for D4.',
  words1: 'D3 key language (1)', words2: 'D3 key language (2)',
  addWords: [
    ['تَعْمَلُ مُهَنْدِسَةً', 'she works as an engineer'], ['سَاعَاتٌ مَرِنَةٌ', 'flexible hours'], ['مِنْ مَزَايَاهُ أَنَّ', 'one advantage is that'], ['يَحْتَاجُ إِلَى', 'he / it needs'], ['يَجِبُ أَنْ يَكُونَ صَبُورًا', 'he must be patient'], ['أَطْمَحُ إِلَى أَنْ', 'I aspire to'],
    ['لَنْ أَعْمَلَ', 'I won’t work'], ['لِكَيْ أُصْبِحَ', 'in order to become'], ['تَلْمَذَةٌ مِهَنِيَّةٌ', 'apprenticeship'], ['سَبَقَ لِي أَنْ', 'I have previously'], ['يُشْتَرَطُ · يُفَضَّلُ', 'required · preferred'], ['مَنْ جَدَّ وَجَدَ', 'whoever strives, succeeds'],
  ],
  dialogue: {
    title: 'Everything from D3 in one conversation', ar: 'كُلُّ الوَحْدَةِ فِي حِوَارٍ',
    lines: [
      ['A', 'مَاذَا تَعْمَلُ أُخْتُكَ؟', 'What does your sister do?'],
      ['B', 'تَعْمَلُ مُهَنْدِسَةً فِي شَرِكَةٍ حَدِيثَةٍ، وَمِنْ مَزَايَا عَمَلِهَا أَنَّ السَّاعَاتِ مَرِنَةٌ.', 'She works as an engineer in a modern company, and one advantage is that the hours are flexible.'],
      ['A', 'وَأَنْتَ؟ مَاذَا تُرِيدُ أَنْ تُصْبِحَ؟', 'And you? What do you want to become?'],
      ['B', 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُعَلِّمًا. يَحْتَاجُ هٰذَا العَمَلُ إِلَى الصَّبْرِ، وَأَنَا صَبُورٌ.', 'I aspire to become a teacher. This job needs patience, and I am patient.'],
      ['A', 'وَمَا خُطَّتُكَ؟', 'And your plan?'],
      ['B', 'سَأَدْرُسُ فِي الجَامِعَةِ لِكَيْ أَحْصُلَ عَلَى شَهَادَةٍ، وَلَنْ أَسْتَسْلِمَ — «مَنْ جَدَّ وَجَدَ»!', 'I will study at university to get a degree, and I won’t give up — “Whoever strives, succeeds”!'],
    ],
    foot: 'Round 1: read it. Round 2: swap letters. Round 3: answer with YOUR life — then ask your partner the same three questions.',
  },
  qTitle: 'Mixed exam cards — one from each part of D3',
  questions: [
    { q: 'صِفْ عَمَلَ أَحَدِ أَقَارِبِكَ وَمَكَانَ عَمَلِهِ.', en: 'Describe a relative’s job and workplace.', start: 'يَعْمَلُ … / تَعْمَلُ … فِي …', more: '… مِنْ مَزَايَاهُ أَنَّ …' },
    { q: 'مَا المَهَارَاتُ المُهِمَّةُ فِي العَمَلِ؟', en: 'What skills matter at work?', start: 'يَحْتَاجُ العَامِلُ إِلَى …', more: '… وَيَجِبُ أَنْ يَكُونَ …' },
    { q: 'مَا طُمُوحُكَ؟', en: 'What is your ambition?', start: 'أَطْمَحُ إِلَى أَنْ …', more: '… لِكَيْ …' },
    { q: 'الجَامِعَةُ أَمِ التَّدْرِيبُ المِهَنِيُّ؟', en: 'University or vocational training?', start: 'أُفَضِّلُ … لِأَنَّهُ / لِأَنَّهَا …', more: '… أَرْخَصُ / أَقْصَرُ …' },
    { q: 'مَا المَثَلُ الَّذِي يُعْجِبُكَ؟ لِمَاذَا؟', en: 'Which proverb do you like? Why?', start: '«…» يَعْنِي أَنَّ …', more: '… يَنْطَبِقُ عَلَى …' },
  ],
  card: {
    title: 'Role-play card — interview for a summer internship', ar: 'مُقَابَلَةُ تَدْرِيبٍ صَيْفِيٍّ', you: 'the applicant', them: 'the company manager',
    tasks: [
      { ex: 'لِمَاذَا تَقَدَّمْتَ لِهٰذَا التَّدْرِيبِ؟', task: 'Reason + ambition.', plan: 'لِمَاذَا ← لِأَنَّنِي أَطْمَحُ إِلَى أَنْ …', model: 'لِأَنَّنِي أَطْمَحُ إِلَى أَنْ أَعْمَلَ فِي التَّسْوِيقِ، وَأُرِيدُ خِبْرَةً عَمَلِيَّةً.', modelEn: 'Because I aspire to work in marketing, and I want practical experience.' },
      { ex: 'هَلْ لَدَيْكَ خِبْرَةٌ؟', task: 'Experience.', plan: 'خِبْرَةٌ ← سَبَقَ لِي أَنْ …', model: 'سَبَقَ لِي أَنْ صَمَّمْتُ إِعْلَانَاتٍ لِحَفْلَةِ المَدْرَسَةِ.', modelEn: 'I have previously designed adverts for the school event.' },
      { ex: 'مَا نُقْطَةُ قُوَّتِكَ؟', task: 'Strength + evidence.', plan: '', model: 'أَنَا مُبْدِعٌ؛ مَثَلًا، فَازَ مُلْصَقِي بِالجَائِزَةِ الأُولَى فِي مُسَابَقَةٍ.', modelEn: 'I am creative; for example, my poster won first prize in a competition.' },
      { unexpected: true, ex: 'أَيْنَ سَتَكُونُ بَعْدَ خَمْسِ سَنَوَاتٍ؟', task: 'Future + condition.', plan: '', model: 'إِذَا نَجَحْتُ فِي الجَامِعَةِ، فَسَوْفَ أَعْمَلُ فِي شَرِكَةٍ مِثْلِ شَرِكَتِكُمْ.', modelEn: 'If I succeed at university, I will work in a company like yours.' },
    ],
    girl: 'manager to a girl: تَقَدَّمْتِ · لَدَيْكِ · قُوَّتِكِ · سَتَكُونِينَ · أَنَا مُبْدِعَةٌ',
    notes: 'This card mixes every D3 structure; the Coach ticks each one heard.',
  },
  talk: {
    title: 'One minute: my D3 showcase', ar: 'أَعْرِضُ مَا تَعَلَّمْتُ',
    text: 'Talk for one minute about work and your future. The Coach ticks: job agreement · يَعْمَلُ + -an · advantage with أَنَّ · يَحْتَاجُ إِلَى · يَجِبُ أَنْ يَكُونَ · future · لَنْ · لِكَيْ · proverb.',
    routes: {
      core: 'Five structures from the list.',
      develop: 'Seven structures, with evidence for one quality.',
      stretch: 'All nine, including an إِذَا condition.',
    },
  },
  builder: [
    { en: 'My cousin (f.) works as a pilot.', cols: [['ابْنَةُ خَالِي', 'ابْنُ خَالِي'], ['تَعْمَلُ', 'يَعْمَلُ'], ['طَيَّارَةً.', 'طَيَّارَةٌ.']], key: [0, 0, 0], why: 'She → تَعْمَلُ + job in -an.' },
    { en: 'A doctor must be accurate.', cols: [['يَجِبُ أَنْ', 'يَجِبُ'], ['يَكُونَ الطَّبِيبُ', 'يَكُونُ الطَّبِيبُ'], ['دَقِيقًا.', 'دَقِيقٌ.']], key: [0, 0, 0], why: 'أَنْ يَكُونَ + adjective in -an.' },
    { en: 'I will train so that I gain experience.', cols: [['سَوْفَ أَتَدَرَّبُ', 'سَوْفَ لَا أَتَدَرَّبُ'], ['لِكَيْ', 'لِأَنَّ'], ['أَكْسِبَ خِبْرَةً.', 'أَكْسِبُ خِبْرَةٌ.']], key: [0, 0, 0], why: 'لِكَيْ + -a; object → خِبْرَةً.' },
  ],
  errors: [
    { wrong: 'أُمِّي تَعْمَلُ مُدَرِّسٌ فِي مَدْرَسَةٍ كَبِيرٍ.', hint: 'Two errors.', right: 'أُمِّي تَعْمَلُ مُدَرِّسَةً فِي مَدْرَسَةٍ كَبِيرَةٍ.', why: 'Job f. + -an; مَدْرَسَةٌ (f.) → كَبِيرَةٍ.' },
    { wrong: 'سَوْفَ لَا أَدْرُسُ الطِّبَّ لِأَنَّهُ يَحْتَاجُ الصَّبْرَ.', hint: 'Two errors.', right: 'لَنْ أَدْرُسَ الطِّبَّ لِأَنَّهُ يَحْتَاجُ إِلَى الصَّبْرِ.', why: 'لَنْ + -a; يَحْتَاجُ إِلَى.' },
    { wrong: 'يَسُرُّنِي أَنْ أَتَقَدَّمُ وَأَنَا مُنَاسِبٌ. (f. writer)', hint: 'Two errors.', right: 'يَسُرُّنِي أَنْ أَتَقَدَّمَ، وَأَنَا مُنَاسِبَةٌ.', why: 'أَنْ + -a; female writer → مُنَاسِبَةٌ.' },
  ],
  task: {
    title: 'Exam-style email: work and my future', ar: 'رِسَالَةٌ بِأُسْلُوبِ الامْتِحَانِ: العَمَلُ وَمُسْتَقْبَلِي',
    text: 'Your Arabic-speaking pen-friend asks about work and your future. Write an email (about 70–90 words). Answer ALL four bullets: • the job of someone in your family and where they work • the job you would like and the skills it needs • your plan to get there (study / training) • your opinion: is a high salary the most important thing?',
    range: [65, 105],
    phrases: [['يَعْمَلُ … / تَعْمَلُ … فِي …', '… works as … in …'], ['أَطْمَحُ إِلَى أَنْ … ؛ يَحْتَاجُ هٰذَا العَمَلُ إِلَى …', 'I aspire to …; this job needs …'], ['سَأَدْرُسُ … لِكَيْ … · لَنْ …', 'I will study … in order to … · I won’t …'], ['فِي رَأْيِي … عَلَى الرَّغْمِ مِنْ أَنَّ …', 'in my opinion … although …']],
    coreFrames: [
      { ar: '______ يَعْمَلُ / تَعْمَلُ ______ فِي ______ .', en: '… works as … in …' },
      { ar: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ ______ ، وَيَحْتَاجُ هٰذَا العَمَلُ إِلَى ______ .', en: 'I aspire to become …, and this job needs …' },
      { ar: 'سَأَدْرُسُ ______ لِكَيْ ______ .', en: 'I will study … in order to …' },
      { ar: 'فِي رَأْيِي الرَّاتِبُ ______ ، لِأَنَّ ______ .', en: 'In my opinion the salary is …, because …' },
    ],
    developFrames: [
      { ar: 'يَجِبُ أَنْ يَكُونَ ______ ، وَأَنَا ______ ؛ مَثَلًا ______ .', en: 'He / she must be …, and I am …; for example …' },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .', en: 'Although …, …' },
    ],
    bank: ['يَعْمَلُ / تَعْمَلُ + -an', 'مِنْ مَزَايَاهُ أَنَّ', 'يَحْتَاجُ إِلَى', 'يَجِبُ أَنْ يَكُونَ', 'أَطْمَحُ إِلَى أَنْ', 'سَأَدْرُسُ · لَنْ + -a', 'لِكَيْ · إِذَا', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
    model: {
      text: `مَرْحَبًا يَا عُمَرُ،
خَالِي يَعْمَلُ مُحَاسِبًا فِي بَنْكٍ كَبِيرٍ، وَمِنْ مَزَايَا عَمَلِهِ أَنَّ الرَّاتِبَ مُرْتَفِعٌ. أَمَّا أَنَا فَأَطْمَحُ إِلَى أَنْ أُصْبِحَ مُصَمِّمَ أَلْعَابٍ. يَحْتَاجُ هٰذَا العَمَلُ إِلَى الإِبْدَاعِ وَحَلِّ المُشْكِلَاتِ، وَأَنَا مُبْدِعٌ؛ مَثَلًا، صَمَّمْتُ لُعْبَةً لِمَشْرُوعِ المَدْرَسَةِ. سَأَدْرُسُ عُلُومَ الحَاسُوبِ لِكَيْ أَتَعَلَّمَ البَرْمَجَةَ، ثُمَّ سَأَتَدَرَّبُ فِي شَرِكَةٍ. فِي رَأْيِي الرَّاتِبُ مُهِمٌّ، وَلٰكِنَّهُ لَيْسَ الأَهَمَّ. عَلَى الرَّغْمِ مِنْ أَنَّ المَالَ ضَرُورِيٌّ، فَإِنَّ حُبَّ العَمَلِ أَهَمُّ.
صَدِيقُكَ، يَاسِرٌ`,
      en: '“Hi Omar, my uncle works as an accountant in a big bank, and one advantage of his job is that the salary is high. As for me, I aspire to become a game designer. This job needs creativity and problem-solving, and I am creative; for example, I designed a game for a school project. I will study computer science in order to learn programming, then I will train at a company. In my opinion the salary is important, but it isn’t the most important thing. Although money is necessary, loving your work matters more. Your friend, Yasser.”',
      find: ['يَعْمَلُ مُحَاسِبًا', 'يَحْتَاجُ هٰذَا العَمَلُ إِلَى', 'لِكَيْ أَتَعَلَّمَ', 'فَإِنَّ حُبَّ العَمَلِ'],
    },
  },
  checkCore: 'answer all four bullets with correct job forms?',
  checkDevelop: 'use يَحْتَاجُ إِلَى, future with لِكَيْ, evidence and a concession?',
  remember: 'Before you leave: write ONE target for D4 in your book, e.g. “I will write لَنْ + -a, never سَوْفَ لَا.”',
});
