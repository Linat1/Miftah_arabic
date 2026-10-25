'use strict';
/* Practice Room · D3-L11 · Consolidation — error analysis and assessment preparation. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd3-l11',
  arShort: 'تَحْلِيلُ الأَخْطَاءِ',
  grammar: 'four audits: (1) agreement — job m. / f. / pl., adjectives, non-human plural; (2) verb + preposition — yaḥtāju ilā · ḥaṣala ʿalā · yaʿmalu fī · aṭmaḥu ilā; (3) future — sa- / sawfa / lan + -a; (4) evidence — every claim needs mathalan / li-anna; routine: diagnose → explain the rule → repair',
  focus: 'Students run their own consolidation of the whole D3 unit: say the jobs in all forms, act a “spot my mistake” dialogue, run the four audits on spoken answers, do a role-play card as examiner and candidate, give a one-minute talk that the Coach audits, then build, fix and write an improved version of a weak student text.',
  words1: 'Jobs (m. / f.) (1)', words2: 'Jobs (m. / f.) (2)',
  dialogue: {
    title: 'Diagnose, explain, repair', ar: 'شَخِّصْ، اشْرَحْ، صَحِّحْ',
    lines: [
      ['A', 'جُمْلَتِي: «أُمِّي مُهَنْدِسٌ فِي شَرِكَةٍ كَبِيرٍ».', 'My sentence: “My mum is an engineer (m.) in a big (m.) company.”'],
      ['B', 'تَشْخِيصٌ: خَطَآنِ فِي التَّطَابُقِ.', 'Diagnosis: two agreement errors.'],
      ['A', 'لِمَاذَا؟', 'Why?'],
      ['B', 'لِأَنَّ الأُمَّ مُؤَنَّثَةٌ، وَالشَّرِكَةَ مُؤَنَّثَةٌ أَيْضًا.', 'Because the mother is feminine, and the company is feminine too.'],
      ['A', 'إِذَنْ: «أُمِّي مُهَنْدِسَةٌ فِي شَرِكَةٍ كَبِيرَةٍ».', 'So: “My mum is an engineer (f.) in a big (f.) company.”'],
      ['B', 'مُمْتَازٌ! وَالآنَ أَضِفْ دَلِيلًا: «… لِأَنَّهَا تُصَمِّمُ الجُسُورَ».', 'Excellent! Now add evidence: “… because she designs bridges.”'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A says a sentence with ONE hidden error; B diagnoses, explains and repairs.',
  },
  qTitle: 'Audit cards — answer, then your partner audits',
  questions: [
    { q: 'مَاذَا يَعْمَلُ أَفْرَادُ عَائِلَتِكَ؟ (Audit 1: agreement)', en: 'What do your family members do?', start: 'أَبِي … / أُمِّي … / عَمَّايَ …', more: 'Coach: m. / f. / pl. all correct?' },
    { q: 'إِلَامَ تَحْتَاجُ وَظِيفَةُ أَحْلَامِكَ؟ (Audit 2: prepositions)', en: 'What does your dream job need?', start: 'تَحْتَاجُ إِلَى …', more: 'Coach: إِلَى · عَلَى · فِي?' },
    { q: 'مَا خُطَطُكَ بَعْدَ المَدْرَسَةِ؟ (Audit 3: future)', en: 'Your plans after school?', start: 'سَأَدْرُسُ … / سَوْفَ … / لَنْ …', more: 'Coach: لَنْ + -a?' },
    { q: 'هَلْ أَنْتَ شَخْصٌ مَسْؤُولٌ؟ (Audit 4: evidence)', en: 'Are you a responsible person?', start: 'نَعَمْ؛ مَثَلًا …', more: 'Coach: is there real evidence?' },
    { q: 'مَا رَأْيُكَ فِي العَمَلِ مِنَ البَيْتِ؟ (All four)', en: 'What do you think of working from home?', start: 'فِي رَأْيِي …', more: '… عَلَى الرَّغْمِ مِنْ أَنَّ …' },
  ],
  card: {
    title: 'Role-play card — the D3 speaking test (practice)', ar: 'اخْتِبَارُ المُحَادَثَةِ', you: 'the candidate', them: 'the examiner',
    tasks: [
      { ex: 'مَا الوَظِيفَةُ الَّتِي تُرِيدُهَا؟ وَلِمَاذَا؟', task: 'Job + two reasons.', plan: 'الوَظِيفَةُ ← أُرِيدُ أَنْ أُصْبِحَ … لِأَنَّ … وَ …', model: 'أُرِيدُ أَنْ أُصْبِحَ مُبَرْمِجًا، لِأَنَّنِي أُحِبُّ الحَاسُوبَ، وَلِأَنَّ الرَّاتِبَ جَيِّدٌ.', modelEn: 'I want to become a programmer, because I love computers and the salary is good.' },
      { ex: 'مَا المَهَارَاتُ الَّتِي يَحْتَاجُ إِلَيْهَا؟', task: 'Skills + evidence.', plan: 'المَهَارَاتُ ← يَحْتَاجُ إِلَى … ؛ وَأَنَا …', model: 'يَحْتَاجُ إِلَى حَلِّ المُشْكِلَاتِ، وَأَنَا قَوِيٌّ فِيهِ؛ مَثَلًا، صَمَّمْتُ لُعْبَةً صَغِيرَةً.', modelEn: 'It needs problem-solving, and I’m strong at it — for example, I designed a small game.' },
      { ex: 'كَيْفَ سَتَصِلُ إِلَى هَدَفِكَ؟', task: 'Route in the future.', plan: '', model: 'سَأَدْرُسُ عُلُومَ الحَاسُوبِ، ثُمَّ سَأَتَدَرَّبُ فِي شَرِكَةٍ، وَلَنْ أَتَوَقَّفَ عَنِ التَّعَلُّمِ.', modelEn: 'I will study computer science, then train at a company, and I won’t stop learning.' },
      { unexpected: true, ex: 'وَمَا التَّحَدِّي الأَكْبَرُ؟', task: 'Challenge + concession.', plan: '', model: 'المُنَافَسَةُ كَبِيرَةٌ، وَلٰكِنْ عَلَى الرَّغْمِ مِنْ ذٰلِكَ، فَإِنَّنِي وَاثِقٌ مِنْ نَفْسِي.', modelEn: 'The competition is big, but despite that, I am confident in myself.' },
    ],
    girl: 'examiner to a girl: تُرِيدِينَهَا · سَتَصِلِينَ · هَدَفِكِ · مُبَرْمِجَةً · قَوِيَّةٌ · وَاثِقَةٌ',
    notes: 'The Coach runs all four audits on the candidate’s answers.',
  },
  talk: {
    title: 'One minute — audited!', ar: 'دَقِيقَةٌ مَعَ التَّدْقِيقِ',
    text: 'Talk for one minute about work and your future. The Coach keeps four columns (agreement · prepositions · future · evidence) and ticks or crosses each sentence.',
    routes: {
      core: 'Zero agreement errors.',
      develop: 'Zero errors in agreement and future.',
      stretch: 'All four audits clean — and evidence for every claim.',
    },
  },
  builder: [
    { en: 'My two sisters are nurses in the hospital.', cols: [['أُخْتَايَ', 'أُخْتِي'], ['مُمَرِّضَتَانِ', 'مُمَرِّضَاتٌ'], ['فِي المُسْتَشْفَى.', 'فِي المُسْتَشْفَى الكَبِيرَةِ.']], key: [0, 0, 0], why: 'Two sisters → dual مُمَرِّضَتَانِ; مُسْتَشْفًى is masculine.' },
    { en: 'I got a scholarship.', cols: [['حَصَلْتُ', 'أَحْصُلُ'], ['عَلَى', 'إِلَى'], ['مِنْحَةٍ دِرَاسِيَّةٍ.', 'مِنْحَةٌ دِرَاسِيَّةٌ.']], key: [0, 0, 0], why: 'حَصَلَ عَلَى + genitive.' },
    { en: 'I won’t travel, because my family needs me.', cols: [['لَنْ أُسَافِرَ،', 'لَنْ أُسَافِرُ،'], ['لِأَنَّ', 'لِكَيْ'], ['أُسْرَتِي تَحْتَاجُ إِلَيَّ.', 'أُسْرَتِي يَحْتَاجُ إِلَيَّ.']], key: [0, 0, 0], why: 'لَنْ + -a; أُسْرَةٌ (f.) → تَحْتَاجُ.' },
  ],
  errors: [
    { wrong: 'خَالَتِي تَعْمَلُ مُحَامِيٌ فِي مَكْتَبٍ صَغِيرَةٍ.', hint: 'Audit 1 — two errors.', right: 'خَالَتِي تَعْمَلُ مُحَامِيَةً فِي مَكْتَبٍ صَغِيرٍ.', why: 'Job: f. + accusative; مَكْتَبٌ (m.) → صَغِيرٍ.' },
    { wrong: 'يَحْتَاجُ الطَّبِيبُ الصَّبْرَ وَسَوْفَ لَا أَعْمَلُ فِي البَنْكِ.', hint: 'Audits 2 and 3.', right: 'يَحْتَاجُ الطَّبِيبُ إِلَى الصَّبْرِ، وَلَنْ أَعْمَلَ فِي البَنْكِ.', why: 'يَحْتَاجُ إِلَى; won’t = لَنْ + -a.' },
    { wrong: 'أَنَا مُجْتَهِدٌ وَمَسْؤُولٌ وَمُنَظَّمٌ.', hint: 'Audit 4.', right: 'أَنَا مُجْتَهِدٌ؛ مَثَلًا، أُرَاجِعُ كُلَّ يَوْمٍ سَاعَتَيْنِ.', why: 'One quality with evidence beats three without.' },
  ],
  task: {
    title: 'Upgrade a weak text', ar: 'حَسِّنِ النَّصَّ',
    text: 'Weak text: «أُمِّي طَبِيبٌ. هِيَ تَعْمَلُ مُسْتَشْفًى. أَنَا سَوْفَ لَا أَعْمَلُ طَبِيبٌ. أُرِيدُ مُهَنْدِسٌ لِأَنَّهُ جَيِّدٌ. أَنَا ذَكِيٌّ.» Rewrite it (about 60–80 words) about YOUR family and plans: fix all four audits, add reasons and evidence, a future route, and a concession.',
    phrases: [['تَعْمَلُ … فِي …', 'she works as … in …'], ['لَنْ أَعْمَلَ … لِأَنَّ …', 'I won’t work as … because …'], ['أُرِيدُ أَنْ أُصْبِحَ … ؛ مَثَلًا …', 'I want to become …; for example …'], ['عَلَى الرَّغْمِ مِنْ أَنَّ … فَإِنَّنِي …', 'although …, I …']],
    coreFrames: [
      { ar: '______ تَعْمَلُ / يَعْمَلُ ______ فِي ______ .', en: '… works as … in …' },
      { ar: 'لَنْ أَعْمَلَ ______ ، لِأَنَّ ______ .', en: 'I won’t work as …, because …' },
      { ar: 'أُرِيدُ أَنْ أُصْبِحَ ______ ، لِأَنَّ ______ .', en: 'I want to become …, because …' },
      { ar: 'أَنَا ______ ؛ مَثَلًا، ______ .', en: 'I am …; for example, …' },
    ],
    developFrames: [
      { ar: 'سَأَدْرُسُ ______ ، ثُمَّ سَوْفَ ______ .', en: 'I will study …, then I will …' },
      { ar: 'عَلَى الرَّغْمِ مِنْ أَنَّ ______ ، فَإِنَّنِي ______ .', en: 'Although …, I …' },
    ],
    bank: ['طَبِيبٌ · طَبِيبَةٌ', 'مُهَنْدِسٌ · مُهَنْدِسَةٌ', 'مُحَامٍ · مُحَامِيَةٌ', 'مُبَرْمِجٌ · مُبَرْمِجَةٌ', 'يَحْتَاجُ إِلَى · حَصَلَ عَلَى', 'سَأَدْرُسُ · سَوْفَ · لَنْ أَعْمَلَ', 'مَثَلًا · لِأَنَّ', 'عَلَى الرَّغْمِ مِنْ أَنَّ'],
    model: {
      text: 'أُمِّي طَبِيبَةٌ، وَتَعْمَلُ فِي مُسْتَشْفًى كَبِيرٍ فِي مَدِينَتِنَا. هِيَ تُحِبُّ عَمَلَهَا، وَلٰكِنَّ سَاعَاتِهَا طَوِيلَةٌ جِدًّا. لِذٰلِكَ لَنْ أَعْمَلَ طَبِيبًا، لِأَنَّنِي أُرِيدُ وَقْتًا أَكْثَرَ مَعَ أُسْرَتِي. أُرِيدُ أَنْ أُصْبِحَ مُهَنْدِسًا مَدَنِيًّا، لِأَنَّنِي أُحِبُّ الرِّيَاضِيَّاتِ وَالبِنَاءَ. أَنَا دَقِيقٌ؛ مَثَلًا، بَنَيْتُ نَمُوذَجَ جِسْرٍ لِمَشْرُوعِ العُلُومِ وَحَصَلْتُ عَلَى جَائِزَةٍ. سَأَدْرُسُ الهَنْدَسَةَ فِي الجَامِعَةِ، ثُمَّ سَوْفَ أَتَدَرَّبُ فِي شَرِكَةِ بِنَاءٍ. عَلَى الرَّغْمِ مِنْ أَنَّ الدِّرَاسَةَ صَعْبَةٌ، فَإِنَّنِي مُسْتَعِدٌّ.',
      en: '“My mother is a doctor and works in a big hospital in our city. She loves her job, but her hours are very long. So I won’t work as a doctor, because I want more time with my family. I want to become a civil engineer, because I love maths and building. I am precise; for example, I built a model bridge for my science project and won a prize. I will study engineering at university, then I will train at a construction company. Although the course is hard, I am ready.”',
      find: ['أُمِّي طَبِيبَةٌ', 'لَنْ أَعْمَلَ طَبِيبًا', 'وَحَصَلْتُ عَلَى جَائِزَةٍ', 'فَإِنَّنِي مُسْتَعِدٌّ'],
    },
  },
  checkCore: 'fix every agreement error (job, adjective, verb)?',
  checkDevelop: 'pass all four audits — prepositions, future and evidence too?',
});
