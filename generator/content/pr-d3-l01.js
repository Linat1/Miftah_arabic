'use strict';
/* Practice Room · D3-L01 · Jobs and professions — masculine, feminine and plural. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd3-l01',
  arShort: 'الوَظَائِفُ وَالمِهَنُ',
  grammar: 'professions in three forms (ṭabībun · ṭabībatun · aṭibbāʾu / ṭabībātun); place with fī (yaʿmalu fī mustashfā); “works as” with the accusative (yaʿmalu muḥāsiban · taʿmalu muhandisatan); a job I would like: urīdu an aʿmala … li-anna …',
  focus: 'Students run their own speaking and writing practice with jobs: say each job in masculine, feminine and plural, act a short dialogue about family jobs, answer question cards, do a role-play card at a careers fair, give a one-minute talk about jobs in their family, then build, fix and write a paragraph about family jobs and their own dream job.',
  words1: 'Jobs (m. / f.)', words2: 'Workplaces and linking',
  dialogue: {
    title: 'What do your parents do?', ar: 'مَاذَا يَعْمَلُ وَالِدَاكَ؟',
    lines: [
      ['A', 'مَاذَا يَعْمَلُ أَبُوكَ؟', 'What does your father do?'],
      ['B', 'أَبِي يَعْمَلُ مُحَاسِبًا فِي شَرِكَةٍ كَبِيرَةٍ.', 'My father works as an accountant in a big company.'],
      ['A', 'وَأُمُّكَ؟', 'And your mother?'],
      ['B', 'أُمِّي مُمَرِّضَةٌ؛ تَعْمَلُ فِي مُسْتَشْفَى الأَطْفَالِ.', 'My mother is a nurse; she works in the children’s hospital.'],
      ['A', 'وَأَنْتَ، مَاذَا تُرِيدُ أَنْ تَعْمَلَ؟', 'And you, what do you want to do?'],
      ['B', 'أُرِيدُ أَنْ أَعْمَلَ مُهَنْدِسًا، لِأَنَّنِي أُحِبُّ الرِّيَاضِيَّاتِ وَالبِنَاءَ.', 'I want to work as an engineer, because I love maths and building.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give YOUR family’s jobs — then change B into a girl (مُهَنْدِسَةً).',
  },
  questions: [
    { q: 'مَاذَا يَعْمَلُ أَحَدُ أَقَارِبِكَ؟', en: 'What does one of your relatives do?', start: 'خَالِي يَعْمَلُ … / خَالَتِي تَعْمَلُ …', more: '… فِي …' },
    { q: 'أَيْنَ يَعْمَلُ المُدَرِّسُونَ وَالمُمَرِّضَاتُ؟', en: 'Where do teachers and nurses work?', start: 'يَعْمَلُ المُدَرِّسُونَ فِي …', more: '… بَيْنَمَا تَعْمَلُ المُمَرِّضَاتُ فِي …' },
    { q: 'مَا الوَظِيفَةُ الصَّعْبَةُ فِي رَأْيِكَ؟', en: 'Which job is hard, in your opinion?', start: 'فِي رَأْيِي عَمَلُ … صَعْبٌ …', more: '… لِأَنَّ …' },
    { q: 'هَلْ تُرِيدُ أَنْ تَعْمَلَ فِي مَكْتَبٍ؟', en: 'Do you want to work in an office?', start: 'نَعَمْ / لَا، لِأَنَّ …', more: '… أُفَضِّلُ أَنْ أَعْمَلَ فِي …' },
    { q: 'مَا وَظِيفَةُ أَحْلَامِكَ؟', en: 'What is your dream job?', start: 'أُرِيدُ أَنْ أَعْمَلَ … ← طَبِيبًا / طَبِيبَةً', more: '… لِأَنَّنِي …' },
  ],
  card: {
    title: 'Role-play card — at a careers fair', ar: 'فِي مَعْرِضِ الوَظَائِفِ', you: 'a student visitor', them: 'a careers adviser',
    tasks: [
      { ex: 'أَهْلًا! مَاذَا يَعْمَلُ وَالِدَاكَ؟', task: 'Two family jobs.', plan: 'وَالِدَايَ ← أَبِي يَعْمَلُ … ، وَأُمِّي …', model: 'أَبِي يَعْمَلُ صَحَفِيًّا، وَأُمِّي طَبِيبَةُ أَسْنَانٍ.', modelEn: 'My father works as a journalist, and my mother is a dentist.' },
      { ex: 'أَيُّ مَجَالٍ يُعْجِبُكَ؟', task: 'A job + why.', plan: 'مَجَالٌ ← يُعْجِبُنِي عَمَلُ … لِأَنَّ …', model: 'يُعْجِبُنِي عَمَلُ المُبَرْمِجِ، لِأَنَّنِي أُحِبُّ الحَاسُوبَ.', modelEn: 'I like the programmer’s job, because I love computers.' },
      { ex: 'وَأَيْنَ تُرِيدُ أَنْ تَعْمَلَ؟', task: 'Workplace.', plan: '', model: 'أُرِيدُ أَنْ أَعْمَلَ فِي شَرِكَةٍ حَدِيثَةٍ، أَوْ مِنَ البَيْتِ.', modelEn: 'I want to work in a modern company, or from home.' },
      { unexpected: true, ex: 'هَلْ تُفَكِّرُ فِي عَمَلِ أُمِّكَ أَيْضًا؟', task: 'Answer the surprise question.', plan: '', model: 'لَا، لِأَنَّنِي لَا أُحِبُّ الدَّمَ! بَيْنَمَا أُخْتِي تُرِيدُ أَنْ تَعْمَلَ طَبِيبَةً.', modelEn: 'No, because I don’t like blood! Whereas my sister wants to work as a doctor.' },
    ],
    girl: 'adviser to a girl: وَالِدَاكِ · يُعْجِبُكِ · تُرِيدِينَ · أُمِّكِ',
    notes: 'yaʿmalu + job in the accusative (ṣaḥafiyyan) · ṭabībatu asnān = dentist (f.).',
  },
  talk: {
    title: 'One minute: jobs in my family', ar: 'الوَظَائِفُ فِي عَائِلَتِي',
    text: 'Talk for one minute about the jobs of four people in your family and the job you would like.',
    routes: {
      core: 'Four people + job + place (فِي …).',
      develop: 'Use يَعْمَلُ / تَعْمَلُ + job in the accusative, and one plural.',
      stretch: 'Add your dream job with two reasons and a comparison (بَيْنَمَا).',
    },
  },
  builder: [
    { en: 'My aunt works as an engineer.', cols: [['تَعْمَلُ خَالَتِي', 'يَعْمَلُ خَالَتِي'], ['مُهَنْدِسَةً', 'مُهَنْدِسَةٌ'], ['فِي شَرِكَةٍ.', 'فِي شَرِكَةٌ.']], key: [0, 0, 0], why: 'She → تَعْمَلُ; “as” → accusative مُهَنْدِسَةً.' },
    { en: 'The nurses (f.) work in the hospital.', cols: [['تَعْمَلُ', 'يَعْمَلُونَ'], ['المُمَرِّضَاتُ', 'المُمَرِّضُونَ'], ['فِي المُسْتَشْفَى.', 'إِلَى المُسْتَشْفَى.']], key: [0, 0, 0], why: 'A verb before its subject stays singular (feminine here); f. plural ends in -ātu.' },
    { en: 'I want to work as a journalist.', cols: [['أُرِيدُ أَنْ', 'أُرِيدُ'], ['أَعْمَلَ', 'أَعْمَلُ'], ['صَحَفِيًّا.', 'صَحَفِيٌّ.']], key: [0, 0, 0], why: 'أَنْ + -a; job after أَعْمَلَ → accusative.' },
  ],
  errors: [
    { wrong: 'أُمِّي طَبِيبٌ فِي المُسْتَشْفَى.', hint: 'Mother → ?', right: 'أُمِّي طَبِيبَةٌ فِي المُسْتَشْفَى.', why: 'Feminine job: طَبِيبَةٌ.' },
    { wrong: 'أَبِي يَعْمَلُ مُحَاسِبٌ.', hint: '“works as” …', right: 'أَبِي يَعْمَلُ مُحَاسِبًا.', why: 'يَعْمَلُ + job in the accusative.' },
    { wrong: 'المُهَنْدِسُونَ يَعْمَلُ فِي المَكْتَبِ.', hint: 'Subject first → verb agrees.', right: 'المُهَنْدِسُونَ يَعْمَلُونَ فِي المَكْتَبِ.', why: 'Plural subject before the verb → يَعْمَلُونَ.' },
  ],
  task: {
    title: 'Jobs in my family — and my dream job', ar: 'وَظَائِفُ عَائِلَتِي وَوَظِيفَةُ أَحْلَامِي',
    text: 'Write a paragraph (about 60–80 words) for a class display. Include: • the jobs and workplaces of three relatives (male and female) • one يَعْمَلُ / تَعْمَلُ + job in the accusative • one plural (e.g. أَعْمَامِي مُهَنْدِسُونَ) • your dream job with two reasons • a contrast with بَيْنَمَا.',
    phrases: [['يَعْمَلُ … مُحَاسِبًا فِي …', '… works as an accountant in …'], ['تَعْمَلُ … مُمَرِّضَةً فِي …', '… works as a nurse in …'], ['أُرِيدُ أَنْ أَعْمَلَ … لِأَنَّ …', 'I want to work as … because …'], ['… بَيْنَمَا …', '… whereas …']],
    coreFrames: [
      { ar: 'أَبِي يَعْمَلُ ______ فِي ______ .', en: 'My father works as … in …' },
      { ar: 'أُمِّي ______ ، وَتَعْمَلُ فِي ______ .', en: 'My mother is a …, and works in …' },
      { ar: '______ وَ ______ ______ .', en: '… and … are … (plural)' },
      { ar: 'أُرِيدُ أَنْ أَعْمَلَ ______ ، لِأَنَّ ______ .', en: 'I want to work as …, because …' },
    ],
    developFrames: [
      { ar: '______ ، بَيْنَمَا ______ .', en: '…, whereas …' },
      { ar: 'لَا أُرِيدُ أَنْ أَعْمَلَ ______ ، لِأَنَّ ______ .', en: 'I don’t want to work as …, because …' },
    ],
    bank: ['طَبِيبٌ · طَبِيبَةٌ', 'مُهَنْدِسٌ · مُهَنْدِسَةٌ', 'مُدَرِّسٌ · مُدَرِّسَةٌ', 'مُمَرِّضٌ · مُمَرِّضَةٌ', 'مُحَاسِبٌ · مُحَاسِبَةٌ', 'مُسْتَشْفًى · مَكْتَبٌ · شَرِكَةٌ', 'يَعْمَلُ / تَعْمَلُ + -an', 'بَيْنَمَا'],
    model: {
      text: 'فِي عَائِلَتِي وَظَائِفُ مُخْتَلِفَةٌ. أَبِي يَعْمَلُ مُحَاسِبًا فِي شَرِكَةٍ لِلسَّيَّارَاتِ، وَأُمِّي مُدَرِّسَةٌ فِي مَدْرَسَةٍ ابْتِدَائِيَّةٍ. عَمَّايَ مُهَنْدِسَانِ، وَيَعْمَلَانِ فِي مَشَارِيعِ البِنَاءِ. أَمَّا خَالَتِي فَتَعْمَلُ صَحَفِيَّةً فِي جَرِيدَةٍ مَشْهُورَةٍ. أُرِيدُ أَنْ أَعْمَلَ طَبِيبًا فِي المُسْتَقْبَلِ، لِأَنَّنِي أُحِبُّ العُلُومَ، وَلِأَنَّنِي أُرِيدُ أَنْ أُسَاعِدَ المَرْضَى. أَخِي يُحِبُّ الحَاسُوبَ كَثِيرًا، بَيْنَمَا أُحِبُّ أَنَا العَمَلَ مَعَ النَّاسِ. لَا أُرِيدُ أَنْ أَعْمَلَ فِي مَكْتَبٍ، لِأَنَّهُ مُمِلٌّ فِي رَأْيِي.',
      en: '“My family has different jobs. My father works as an accountant in a car company, and my mother is a teacher in a primary school. My two uncles are engineers and work on building projects. As for my aunt, she works as a journalist on a famous newspaper. I want to work as a doctor in the future, because I love science and I want to help sick people. My brother loves computers a lot, whereas I love working with people. I don’t want to work in an office, because I think it is boring.”',
      find: ['يَعْمَلُ مُحَاسِبًا', 'عَمَّايَ مُهَنْدِسَانِ', 'فَتَعْمَلُ صَحَفِيَّةً', 'بَيْنَمَا أُحِبُّ'],
    },
  },
  checkCore: 'give each job in the right form (m. / f. / pl.) with a workplace?',
  checkDevelop: 'use يَعْمَلُ / تَعْمَلُ + job in the accusative and justify your dream job?',
});
