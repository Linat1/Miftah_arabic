'use strict';
/* Apply Workshop · D3-W06 · D3-L11 (D3 consolidation: error analysis) + D3-L12 (review and unit assessment: work and careers). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd3-w06', pair: ['d3-l11', 'd3-l12'],
  title: 'Careers Week: Audit and Exam Email', arShort: 'أُسْبُوعُ المِهَنِ',
  focus: 'Students use all of D3 under assessment conditions: they audit sentences for the four D3 traps (agreement, verb + preposition, future, evidence), interview each other about work in their family, skills and plans, and write the exam-style email about work and their future.',
  sortTitle: 'Correct, or needs fixing?', sortCats: ['Correct', 'Needs fixing'],
  sort: [
    { ar: 'أُمِّي طَبِيبَةٌ', cat: 0 }, { ar: 'يَحْتَاجُ إِلَى الصَّبْرِ', cat: 0 }, { ar: 'لَنْ أَعْمَلَ فِي مَكْتَبٍ', cat: 0 }, { ar: 'تَعْمَلُ مُمَرِّضَةً', cat: 0 },
    { ar: 'أُمِّي طَبِيبٌ', cat: 1 }, { ar: 'يَحْتَاجُ الصَّبْرَ', cat: 1 }, { ar: 'سَوْفَ لَا أَعْمَلُ', cat: 1 }, { ar: 'تَعْمَلُ مُسْتَشْفًى', cat: 1 },
  ],
  dialogue: {
    title: 'A full exam-style answer', ar: 'جَوَابٌ كَامِلٌ',
    lines: [
      ['A', 'صِفْ عَمَلَ أَحَدِ أَقَارِبِكَ وَمَكَانَ عَمَلِهِ.', 'Describe a relative’s job and workplace.'],
      ['B', 'خَالَتِي تَعْمَلُ مُحَامِيَةً فِي مَكْتَبٍ حَدِيثٍ فِي وَسَطِ المَدِينَةِ.', 'My aunt works as a lawyer in a modern office in the city centre.'],
      ['A', 'مَا المَهَارَاتُ الَّتِي يَحْتَاجُ إِلَيْهَا عَمَلُهَا؟', 'What skills does her job need?'],
      ['B', 'يَحْتَاجُ إِلَى الذَّكَاءِ وَالصَّبْرِ؛ مَثَلًا، تَقْرَأُ مِئَاتِ الصَّفَحَاتِ كُلَّ أُسْبُوعٍ.', 'It needs intelligence and patience; for example, she reads hundreds of pages every week.'],
      ['A', 'وَأَنْتَ، مَا طُمُوحُكَ؟', 'And you, what is your ambition?'],
      ['B', 'لَنْ أَعْمَلَ فِي القَانُونِ؛ سَأَدْرُسُ الصَّيْدَلَةَ لِكَيْ أُسَاعِدَ المَرْضَى.', 'I will not work in law; I will study pharmacy so that I can help patients.'],
    ],
    notes: 'Each line passes one D3-L11 audit: agreement (مُحَامِيَةً), verb + preposition (يَحْتَاجُ إِلَى), future (لَنْ أَعْمَلَ · سَأَدْرُسُ) and evidence (مَثَلًا). The content is the D3-L12 review.',
  },
  card: {
    title: 'Role-play card — the careers-week interview', ar: 'مُقَابَلَةُ أُسْبُوعِ المِهَنِ', you: 'the student', them: 'the careers adviser',
    mix: 'the four D3 audits (D3-L11) applied to every D3 structure under assessment conditions (D3-L12)',
    tasks: [
      { ex: 'مَاذَا يَعْمَلُ أَفْرَادُ عَائِلَتِكَ؟', task: 'Two relatives: jobs that agree, one plural.', plan: 'مَاذَا ← أَبِي يَعْمَلُ … · أَخَوَاتِي …', model: 'أَبِي يَعْمَلُ سَائِقًا، وَأَخَوَاتِي مُعَلِّمَاتٌ فِي مَدْرَسَةٍ ابْتِدَائِيَّةٍ.', modelEn: 'My father works as a driver, and my sisters are teachers in a primary school.' },
      { ex: 'إِلَامَ تَحْتَاجُ وَظِيفَةُ أَحْلَامِكَ؟', task: 'Verb + preposition + what the worker must be.', plan: 'إِلَامَ ← تَحْتَاجُ إِلَى … · يَجِبُ أَنْ يَكُونَ …', model: 'تَحْتَاجُ إِلَى الإِبْدَاعِ؛ يَجِبُ أَنْ يَكُونَ المُصَمِّمُ صَبُورًا وَدَقِيقًا.', modelEn: 'It needs creativity; a designer must be patient and precise.' },
      { ex: 'مَا خُطَطُكَ بَعْدَ المَدْرَسَةِ؟', task: 'Future with سَوْفَ and one لَنْ.', plan: '______________', model: 'سَأَدْرُسُ الفَنَّ فِي الكُلِّيَّةِ، وَسَوْفَ أَتَدَرَّبُ فِي شَرِكَةٍ، وَلَنْ أَتْرُكَ الرَّسْمَ أَبَدًا.', modelEn: 'I will study art at college, and I will train at a company, and I will never stop drawing.' },
      { ex: 'هَلْ أَنْتَ شَخْصٌ مُبْدِعٌ؟ أَثْبِتْ ذٰلِكَ.', task: 'A claim with evidence.', plan: '______________', model: 'نَعَمْ؛ مَثَلًا، صَمَّمْتُ مُلْصَقَ المَدْرَسَةِ لِأُسْبُوعِ المِهَنِ.', modelEn: 'Yes; for example, I designed the school poster for careers week.' },
      { unexpected: true, ex: 'هَلِ الرَّاتِبُ العَالِي أَهَمُّ شَيْءٍ فِي العَمَلِ؟', task: 'A balanced opinion with a concession.', plan: '______________', model: 'عَلَى الرَّغْمِ مِنْ أَنَّ الرَّاتِبَ مُهِمٌّ، فَإِنَّنِي أَرَى أَنَّ السَّعَادَةَ فِي العَمَلِ أَهَمُّ.', modelEn: 'Although salary is important, I think that being happy at work matters more.' },
    ],
    girl: 'مَاذَا تَعْمَلُ أُسْرَتُكِ؟ · مَا خُطَطُكِ؟ · هَلْ أَنْتِ مُبْدِعَةٌ؟',
  },
  talk: {
    title: 'Work and my future — the exam answer', ar: 'العَمَلُ وَمُسْتَقْبَلِي',
    text: 'Speak for one minute under test conditions, covering the four exam bullets: a family member’s job and workplace, the job you would like and the skills it needs, your plan to get there, and your opinion on salary versus happiness. Your partner listens for the four audits.',
    routes: {
      core: 'يَعْمَلُ / تَعْمَلُ … فِي … · أُرِيدُ أَنْ أُصْبِحَ … · سَأَدْرُسُ …',
      develop: 'Add يَحْتَاجُ إِلَى … , evidence (مَثَلًا) and لِكَيْ.',
      stretch: 'Add لَنْ + -a, إِذَا … فَسَوْفَ … and a concession — no notes.',
    },
  },
  task: {
    title: 'Exam-style email: work and my future', ar: 'العَمَلُ وَمُسْتَقْبَلِي',
    text: 'Your Arabic-speaking pen-friend asks about work and your future. Write an email (about 60–80 words). Answer ALL four bullets: • the job of someone in your family and where they work • the job you would like and the skills it needs • your plan to get there (study / training) • your opinion: is a high salary the most important thing? Then audit your email for the four traps.',
    range: [50, 100],
    phrases: [['يَعْمَلُ … / تَعْمَلُ … فِي …', 'he / she works as … in …'], ['أَطْمَحُ إِلَى أَنْ … ؛ يَحْتَاجُ هٰذَا العَمَلُ إِلَى …', 'I aspire to … ; this job needs …'], ['سَأَدْرُسُ … لِكَيْ … · لَنْ …', 'I will study … so that … · I will not …'], ['فِي رَأْيِي … عَلَى الرَّغْمِ مِنْ أَنَّ …', 'in my opinion … although …']],
    coreFrames: [
      { ar: '______ يَعْمَلُ / تَعْمَلُ ______ فِي ______ .', en: '• … works as … in …' },
      { ar: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ ______ .', en: '• I aspire to become …' },
      { ar: 'يَحْتَاجُ هٰذَا العَمَلُ إِلَى ______ .', en: '• This job needs …' },
      { ar: 'سَأَدْرُسُ ______ لِكَيْ ______ .', en: '• I will study … so that …' },
      { ar: 'فِي رَأْيِي الرَّاتِبُ ______ .', en: '• In my opinion salary is …' },
    ],
    developFrames: [
      { ar: 'أَنَا ______ ؛ مَثَلًا، ______ .', en: 'I am …; for example, …' },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّ ______ .', en: 'Although …, …' },
    ],
    bank: ['يَعْمَلُ · تَعْمَلُ + مُعَلِّمَةً', 'فِي مُسْتَشْفًى · فِي شَرِكَةٍ', 'يَحْتَاجُ إِلَى', 'يَجِبُ أَنْ يَكُونَ', 'سَأَدْرُسُ · سَوْفَ', 'لَنْ أَعْمَلَ', 'لِكَيْ · إِذَا … فَسَوْفَ', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
    model: {
      text: 'أَهْلًا يَا سَلْمَى! خَالَتِي تَعْمَلُ مُحَامِيَةً فِي مَكْتَبٍ حَدِيثٍ فِي لَنْدَنَ. أَمَّا أَنَا فَأَطْمَحُ إِلَى أَنْ أُصْبِحَ صَيْدَلَانِيَّةً، لِأَنِّي أُحِبُّ الكِيمْيَاءَ. يَحْتَاجُ هٰذَا العَمَلُ إِلَى الدِّقَّةِ وَالصَّبْرِ، وَأَنَا دَقِيقَةٌ؛ مَثَلًا، لَا أَنْسَى وَاجِبَاتِي أَبَدًا. سَأَدْرُسُ العُلُومَ، ثُمَّ سَأَلْتَحِقُ بِالجَامِعَةِ لِكَيْ أَحْصُلَ عَلَى شَهَادَةٍ. فِي رَأْيِي الرَّاتِبُ مُهِمٌّ، وَلٰكِنَّهُ لَيْسَ أَهَمَّ شَيْءٍ؛ عَلَى الرَّغْمِ مِنْ أَنَّ المَالَ مُفِيدٌ، فَإِنَّ السَّعَادَةَ أَهَمُّ.',
      en: '“Hello, Salma! My aunt works as a lawyer in a modern office in London. As for me, I aspire to become a pharmacist, because I love chemistry. This job needs precision and patience, and I am precise; for example, I never forget my homework. I will study science, then go to university so that I get a degree. In my opinion salary is important, but it is not the most important thing; although money is useful, happiness matters more.”',
      find: ['تَعْمَلُ مُحَامِيَةً', 'يَحْتَاجُ هٰذَا العَمَلُ إِلَى', 'لِكَيْ أَحْصُلَ عَلَى', 'لَيْسَ أَهَمَّ شَيْءٍ'],
    },
  },
});
