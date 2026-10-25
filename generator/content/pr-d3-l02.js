'use strict';
/* Practice Room · D3-L02 · The workplace — environments and work conditions. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd3-l02',
  arShort: 'بِيئَةُ العَمَلِ',
  grammar: 'noun + agreeing adjective (maktabun ḥadīthun · bīʾatun āminatun · sāʿātun marinatun); alladhī / allatī for the job or place; advantages and disadvantages: min mazāyā … anna … · min ʿuyūbi … anna …; contrast with wa-lākinna / baynamā',
  focus: 'Students run their own speaking and writing practice about work conditions: say the conditions words, act a short dialogue, answer question cards, do a role-play card comparing two summer jobs, give a one-minute advantages-and-disadvantages talk, then build, fix and write a comparison of two jobs.',
  words1: 'Work conditions', words2: 'Workplaces',
  dialogue: {
    title: 'Is your job good?', ar: 'هَلْ عَمَلُكِ جَيِّدٌ؟',
    lines: [
      ['A', 'أَيْنَ تَعْمَلُ أُخْتُكَ؟', 'Where does your sister work?'],
      ['B', 'تَعْمَلُ فِي مَكْتَبٍ حَدِيثٍ فِي وَسَطِ المَدِينَةِ.', 'She works in a modern office in the city centre.'],
      ['A', 'وَهَلْ تُحِبُّ عَمَلَهَا؟', 'And does she like her job?'],
      ['B', 'نَعَمْ، مِنْ مَزَايَاهُ أَنَّ السَّاعَاتِ مَرِنَةٌ وَالرَّاتِبَ مُرْتَفِعٌ.', 'Yes — one advantage is that the hours are flexible and the salary is high.'],
      ['A', 'وَهَلْ لَهُ عُيُوبٌ؟', 'Does it have disadvantages?'],
      ['B', 'مِنْ عُيُوبِهِ أَنَّهُ مُجْهِدٌ، وَلٰكِنَّ فَرِيقَ العَمَلِ لَطِيفٌ جِدًّا.', 'One disadvantage is that it’s tiring, but the team is very nice.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: describe a REAL job of someone you know — one advantage, one disadvantage.',
  },
  questions: [
    { q: 'أَيْنَ يَعْمَلُ أَحَدُ وَالِدَيْكَ؟ كَيْفَ المَكَانُ؟', en: 'Where does one of your parents work? What is the place like?', start: 'يَعْمَلُ / تَعْمَلُ فِي … ، وَالمَكَانُ …', more: '… وَفِيهِ / وَفِيهَا …' },
    { q: 'هَلْ تُفَضِّلُ دَوَامًا كَامِلًا أَمْ جُزْئِيًّا؟', en: 'Full-time or part-time?', start: 'أُفَضِّلُ دَوَامًا … لِأَنَّ …', more: '… وَلٰكِنَّ …' },
    { q: 'مَا الأَهَمُّ: الرَّاتِبُ أَمْ بِيئَةُ العَمَلِ؟', en: 'What matters more: salary or environment?', start: 'فِي رَأْيِي … أَهَمُّ …', more: '… لِأَنَّ …' },
    { q: 'صِفْ عَمَلًا مُجْهِدًا.', en: 'Describe a tiring job.', start: 'عَمَلُ … مُجْهِدٌ …', more: '… لِأَنَّ السَّاعَاتِ …' },
    { q: 'مَا الوَظِيفَةُ الَّتِي فِيهَا سَاعَاتٌ مَرِنَةٌ؟', en: 'Which job has flexible hours?', start: 'الوَظِيفَةُ الَّتِي …', more: '… مِثْلُ …' },
  ],
  card: {
    title: 'Role-play card — choosing a summer job', ar: 'عَمَلٌ صَيْفِيٌّ', you: 'yourself', them: 'a friend choosing with you',
    tasks: [
      { ex: 'هُنَاكَ عَمَلَانِ: فِي مَقْهًى أَوْ فِي مَكْتَبَةٍ. مَا رَأْيُكَ؟', task: 'Choose + reason.', plan: 'أُفَضِّلُ ← أُفَضِّلُ العَمَلَ فِي … لِأَنَّ …', model: 'أُفَضِّلُ العَمَلَ فِي المَكْتَبَةِ، لِأَنَّ البِيئَةَ هَادِئَةٌ.', modelEn: 'I prefer working in the library, because the environment is quiet.' },
      { ex: 'وَلٰكِنَّ المَقْهَى يَدْفَعُ أَكْثَرَ.', task: 'Agree + a disadvantage.', plan: 'صَحِيحٌ ← صَحِيحٌ، وَلٰكِنَّ العَمَلَ فِيهِ …', model: 'صَحِيحٌ، وَلٰكِنَّ العَمَلَ فِيهِ مُجْهِدٌ وَالسَّاعَاتِ طَوِيلَةٌ.', modelEn: 'True, but the work there is tiring and the hours are long.' },
      { ex: 'كَمْ سَاعَةً تُرِيدُ أَنْ تَعْمَلَ؟', task: 'Part-time + reason.', plan: '', model: 'أُرِيدُ دَوَامًا جُزْئِيًّا، عِشْرِينَ سَاعَةً فَقَطْ، لِكَيْ أُرَاجِعَ أَيْضًا.', modelEn: 'I want part-time, only twenty hours, so I can revise too.' },
      { unexpected: true, ex: 'مَاذَا سَتَفْعَلُ بِالرَّاتِبِ؟', task: 'Answer the surprise question.', plan: '', model: 'سَأَدَّخِرُ نِصْفَهُ، وَسَأَشْتَرِي حَاسُوبًا جَدِيدًا بِالبَاقِي.', modelEn: 'I will save half, and buy a new computer with the rest.' },
    ],
    girl: 'to a girl: رَأْيُكِ · تُرِيدِينَ · سَتَفْعَلِينَ',
    notes: 'Advantage / disadvantage with anna: al-ʿamala fīhi mujhidun.',
  },
  talk: {
    title: 'One minute: pros and cons of a job', ar: 'مَزَايَا وَعُيُوبٌ',
    text: 'Choose one job. Talk for one minute about the workplace, two advantages and two disadvantages, then your verdict.',
    routes: {
      core: 'Place + two agreeing adjectives + one advantage.',
      develop: 'Add مِنْ مَزَايَاهُ أَنَّ … / مِنْ عُيُوبِهِ أَنَّ …',
      stretch: 'Add a contrast (بَيْنَمَا) with a second job and a verdict.',
    },
  },
  builder: [
    { en: 'She works in a safe environment.', cols: [['تَعْمَلُ', 'يَعْمَلُ'], ['فِي بِيئَةٍ', 'فِي بِيئَةٌ'], ['آمِنَةٍ.', 'آمِنٍ.']], key: [0, 0, 0], why: 'بِيئَةٌ (f.) → آمِنَةٍ, genitive after فِي.' },
    { en: 'One advantage is that the hours are flexible.', cols: [['مِنْ مَزَايَاهُ', 'مِنْ مَزَايَاهَا'], ['أَنَّ السَّاعَاتِ', 'أَنَّ السَّاعَاتُ'], ['مَرِنَةٌ.', 'مَرِنُونَ.']], key: [0, 0, 0], why: 'العَمَلُ (m.) → مَزَايَاهُ; أَنَّ + -a; non-human plural → f. sg.' },
    { en: 'The salary is high, but the work is tiring.', cols: [['الرَّاتِبُ مُرْتَفِعٌ،', 'الرَّاتِبُ مُرْتَفِعَةٌ،'], ['وَلٰكِنَّ', 'لِأَنَّ'], ['العَمَلَ مُجْهِدٌ.', 'العَمَلُ مُجْهِدٌ.']], key: [0, 0, 0], why: 'وَلٰكِنَّ + noun in -a.' },
  ],
  errors: [
    { wrong: 'يَعْمَلُ فِي مَكْتَبٍ حَدِيثَةٍ.', hint: 'مَكْتَبٌ is …', right: 'يَعْمَلُ فِي مَكْتَبٍ حَدِيثٍ.', why: 'Masculine noun → masculine adjective.' },
    { wrong: 'مِنْ عُيُوبِهِ أَنَّ الرَّاتِبُ مُنْخَفِضٌ.', hint: 'After أَنَّ …', right: 'مِنْ عُيُوبِهِ أَنَّ الرَّاتِبَ مُنْخَفِضٌ.', why: 'أَنَّ + noun in -a.' },
    { wrong: 'الوَظِيفَةُ الَّذِي أُحِبُّهَا …', hint: 'وَظِيفَةٌ is …', right: 'الوَظِيفَةُ الَّتِي أُحِبُّهَا …', why: 'Feminine → الَّتِي.' },
  ],
  task: {
    title: 'Two jobs compared', ar: 'مُقَارَنَةٌ بَيْنَ وَظِيفَتَيْنِ',
    text: 'Write a comparison (about 60–80 words) of two jobs or workplaces for a careers blog. Include: • the workplace of each, with agreeing adjectives • two advantages (مِنْ مَزَايَاهُ أَنَّ …) • two disadvantages (مِنْ عُيُوبِهِ أَنَّ …) • a contrast with بَيْنَمَا • which job you prefer and why.',
    phrases: [['يَعْمَلُ … فِي مَكَانٍ …', '… works in a … place'], ['مِنْ مَزَايَاهُ أَنَّ …', 'one advantage is that …'], ['مِنْ عُيُوبِهِ أَنَّ …', 'one disadvantage is that …'], ['أُفَضِّلُ … لِأَنَّ …', 'I prefer … because …']],
    coreFrames: [
      { ar: 'يَعْمَلُ الطَّبِيبُ فِي ______ ______ .', en: 'A doctor works in a … …' },
      { ar: 'مِنْ مَزَايَا عَمَلِهِ أَنَّ ______ .', en: 'One advantage of his job is that …' },
      { ar: 'مِنْ عُيُوبِهِ أَنَّ ______ .', en: 'One disadvantage is that …' },
      { ar: 'أُفَضِّلُ ______ ، لِأَنَّ ______ .', en: 'I prefer …, because …' },
    ],
    developFrames: [
      { ar: '______ ، بَيْنَمَا ______ .', en: '…, whereas …' },
      { ar: 'العَمَلُ الَّذِي أُرِيدُهُ ______ .', en: 'The job I want is …' },
    ],
    bank: ['دَوَامٌ كَامِلٌ · جُزْئِيٌّ', 'سَاعَاتٌ مَرِنَةٌ', 'رَاتِبٌ مُرْتَفِعٌ · مُنْخَفِضٌ', 'عَمَلٌ مُجْهِدٌ · مُجْزٍ', 'بِيئَةٌ آمِنَةٌ', 'فَرِيقُ عَمَلٍ', 'مِنْ مَزَايَاهُ أَنَّ', 'مِنْ عُيُوبِهِ أَنَّ'],
    model: {
      text: 'سَأُقَارِنُ بَيْنَ عَمَلِ المُمَرِّضِ وَعَمَلِ المُبَرْمِجِ. يَعْمَلُ المُمَرِّضُ فِي مُسْتَشْفًى كَبِيرٍ وَمُزْدَحِمٍ. مِنْ مَزَايَا عَمَلِهِ أَنَّهُ مُجْزٍ جِدًّا، لِأَنَّهُ يُسَاعِدُ المَرْضَى. وَلٰكِنْ مِنْ عُيُوبِهِ أَنَّ السَّاعَاتِ طَوِيلَةٌ وَالعَمَلَ مُجْهِدٌ. أَمَّا المُبَرْمِجُ فَيَعْمَلُ فِي مَكْتَبٍ حَدِيثٍ هَادِئٍ، وَمِنْ مَزَايَا عَمَلِهِ أَنَّ السَّاعَاتِ مَرِنَةٌ وَالرَّاتِبَ مُرْتَفِعٌ. المُمَرِّضُ يَتَحَرَّكُ طُولَ اليَوْمِ، بَيْنَمَا يَجْلِسُ المُبَرْمِجُ أَمَامَ الحَاسُوبِ. أُفَضِّلُ عَمَلَ المُبَرْمِجِ، لِأَنَّنِي أُحِبُّ التِّكْنُولُوجِيَا وَالهُدُوءَ.',
      en: '“I will compare a nurse’s job and a programmer’s job. A nurse works in a big, busy hospital. One advantage of the job is that it is very rewarding, because he helps patients. But one disadvantage is that the hours are long and the work is tiring. As for the programmer, he works in a quiet, modern office, and the advantages are that the hours are flexible and the salary is high. The nurse moves all day, whereas the programmer sits in front of a computer. I prefer the programmer’s job, because I love technology and calm.”',
      find: ['مِنْ مَزَايَا عَمَلِهِ أَنَّهُ', 'مِنْ عُيُوبِهِ أَنَّ', 'مَكْتَبٍ حَدِيثٍ هَادِئٍ', 'بَيْنَمَا يَجْلِسُ'],
    },
  },
  checkCore: 'make every adjective agree with its noun?',
  checkDevelop: 'give advantages and disadvantages with أَنَّ + noun in -a?',
});
