'use strict';
/* Apply Workshop · D3-W01 · D3-L01 (jobs and professions) + D3-L02 (the workplace: environments and conditions). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'd3-w01', pair: ['d3-l01', 'd3-l02'],
  title: 'At the School Careers Fair', arShort: 'فِي مَعْرِضِ المِهَنِ',
  focus: 'Students join jobs (m. / f. / pl., يَعْمَلُ + job in the accusative) with workplaces and conditions: at a careers fair they visit stands, ask professionals about their work and workplace, weigh up advantages and disadvantages, and write a careers-fair report comparing two jobs.',
  dialogue: {
    title: 'At the hospital stand', ar: 'فِي جَنَاحِ المُسْتَشْفَى',
    lines: [
      ['A', 'مَاذَا تَعْمَلِينَ؟', 'What do you do (as a job)?'],
      ['B', 'أَعْمَلُ مُمَرِّضَةً فِي مُسْتَشْفًى كَبِيرٍ فِي المَدِينَةِ.', 'I work as a nurse in a big hospital in the city.'],
      ['A', 'كَيْفَ بِيئَةُ العَمَلِ؟', 'What is the work environment like?'],
      ['B', 'المَكَانُ حَدِيثٌ وَآمِنٌ، وَالزُّمَلَاءُ مُتَعَاوِنُونَ.', 'The place is modern and safe, and the colleagues are co-operative.'],
      ['A', 'وَمَا عُيُوبُ العَمَلِ؟', 'And what are the disadvantages of the job?'],
      ['B', 'مِنْ عُيُوبِهِ أَنَّ السَّاعَاتِ طَوِيلَةٌ، وَلٰكِنْ مِنْ مَزَايَاهُ أَنَّنِي أُسَاعِدُ النَّاسَ.', 'One disadvantage is that the hours are long, but one advantage is that I help people.'],
    ],
    notes: 'Jobs in the accusative after أَعْمَلُ (مُمَرِّضَةً) and plurals (مُتَعَاوِنُونَ) come from D3-L01; workplace adjectives and مِنْ مَزَايَاهُ / مِنْ عُيُوبِهِ أَنَّ … from D3-L02. Note non-human plural agreement: السَّاعَاتُ طَوِيلَةٌ.',
  },
  card: {
    title: 'Role-play card — interviewing a professional', ar: 'مُقَابَلَةُ مُوَظَّفٍ', you: 'the professional at the stand', them: 'a visiting student',
    mix: 'jobs in three forms and يَعْمَلُ + accusative (D3-L01) with workplace adjectives, advantages and disadvantages (D3-L02)',
    tasks: [
      { ex: 'مَاذَا تَعْمَلُ، وَأَيْنَ؟', task: 'Job (accusative) + workplace.', plan: 'مَاذَا ← أَعْمَلُ … فِي …', model: 'أَعْمَلُ مُهَنْدِسًا فِي شَرِكَةٍ لِلطَّاقَةِ الشَّمْسِيَّةِ.', modelEn: 'I work as an engineer in a solar-energy company.' },
      { ex: 'صِفْ مَكَانَ عَمَلِكَ.', task: 'Two adjectives that agree.', plan: 'صِفْ ← مَكْتَبِي … وَ… · السَّاعَاتُ …', model: 'مَكْتَبِي وَاسِعٌ وَهَادِئٌ، وَالسَّاعَاتُ مَرِنَةٌ.', modelEn: 'My office is spacious and quiet, and the hours are flexible.' },
      { ex: 'مَا مَزَايَا عَمَلِكَ؟', task: 'Two advantages.', plan: '______________', model: 'مِنْ مَزَايَاهُ أَنَّ الرَّاتِبَ جَيِّدٌ، وَأَنَّ العَمَلَ مُفِيدٌ لِلْبِيئَةِ.', modelEn: 'Its advantages are that the salary is good and that the work is useful for the environment.' },
      { ex: 'وَمَا عُيُوبُهُ؟', task: 'One disadvantage + a contrast.', plan: '______________', model: 'مِنْ عُيُوبِهِ أَنَّنِي أُسَافِرُ كَثِيرًا، وَلٰكِنَّنِي أُحِبُّ ذٰلِكَ.', modelEn: 'One disadvantage is that I travel a lot, but I like that.' },
      { unexpected: true, ex: 'وَمَاذَا يَعْمَلُ أَفْرَادُ عَائِلَتِكَ؟', task: 'Two relatives, one plural.', plan: '______________', model: 'أُخْتِي مُعَلِّمَةٌ، وَأَعْمَامِي مُحَاسِبُونَ فِي بَنْكٍ.', modelEn: 'My sister is a teacher, and my uncles are accountants in a bank.' },
    ],
    girl: 'when the professional is a woman: أَعْمَلُ مُهَنْدِسَةً … · مَكْتَبِي … — the student asks: مَاذَا تَعْمَلِينَ؟',
  },
  talk: {
    title: 'Two jobs I saw at the fair', ar: 'وَظِيفَتَانِ فِي المَعْرِضِ',
    text: 'Talk for one minute about two jobs from the careers fair (or from your family): who does them, where, what the workplace is like, one advantage and one disadvantage of each, and which one you would prefer and why.',
    routes: {
      core: 'يَعْمَلُ … فِي … · تَعْمَلُ … فِي …',
      develop: 'Add workplace adjectives and مِنْ مَزَايَاهُ أَنَّ … / مِنْ عُيُوبِهِ أَنَّ …',
      stretch: 'Add بَيْنَمَا, a plural (مُهَنْدِسُونَ · مُعَلِّمَاتٌ) and أُرِيدُ أَنْ أَعْمَلَ … لِأَنَّ …',
    },
  },
  task: {
    title: 'Careers fair report: two jobs compared', ar: 'تَقْرِيرٌ عَنْ مَعْرِضِ المِهَنِ',
    text: 'Write a report (about 60–80 words) for the school careers blog. Include: • two professionals you met (one male, one female) — job in the accusative and workplace • the workplace of each with agreeing adjectives • two advantages and one disadvantage • a contrast with بَيْنَمَا • which job you would like and why (أُرِيدُ أَنْ أَعْمَلَ …).',
    range: [50, 100],
    phrases: [['يَعْمَلُ مُهَنْدِسًا · تَعْمَلُ مُمَرِّضَةً', 'he works as an engineer · she works as a nurse'], ['مَكَانُ العَمَلِ حَدِيثٌ وَآمِنٌ', 'the workplace is modern and safe'], ['مِنْ مَزَايَاهُ أَنَّ … · مِنْ عُيُوبِهِ أَنَّ …', 'an advantage is that … · a disadvantage is that …'], ['أُرِيدُ أَنْ أَعْمَلَ … لِأَنَّ …', 'I want to work as … because …']],
    coreFrames: [
      { ar: 'فِي المَعْرِضِ تَكَلَّمْتُ مَعَ ______ ؛ يَعْمَلُ ______ فِي ______ .', en: 'At the fair I spoke with …; he works as … in …' },
      { ar: 'وَتَكَلَّمْتُ مَعَ ______ ؛ تَعْمَلُ ______ فِي ______ .', en: 'And I spoke with …; she works as … in …' },
      { ar: 'مَكَانُ عَمَلِهِ ______ وَ ______ .', en: 'His workplace is … and …' },
      { ar: 'مِنْ مَزَايَا عَمَلِهَا أَنَّ ______ .', en: 'An advantage of her job is that …' },
      { ar: 'أُرِيدُ أَنْ أَعْمَلَ ______ لِأَنَّ ______ .', en: 'I want to work as … because …' },
    ],
    developFrames: [
      { ar: 'مِنْ عُيُوبِهِ أَنَّ ______ .', en: 'A disadvantage is that …' },
      { ar: '______ ، بَيْنَمَا ______ .', en: '…, whereas …' },
    ],
    bank: ['طَبِيبٌ · طَبِيبَةٌ · أَطِبَّاءُ', 'مُهَنْدِسًا · مُمَرِّضَةً', 'مَكْتَبٌ · مُسْتَشْفًى · شَرِكَةٌ', 'حَدِيثٌ · آمِنٌ · مَرِنٌ', 'مُجْهِدٌ · مُمْتِعٌ', 'مِنْ مَزَايَاهُ أَنَّ', 'مِنْ عُيُوبِهِ أَنَّ', 'بَيْنَمَا · وَلٰكِنَّ'],
    model: {
      text: 'فِي المَعْرِضِ تَكَلَّمْتُ مَعَ السَّيِّدِ كَرِيمٍ؛ يَعْمَلُ مُهَنْدِسًا فِي شَرِكَةٍ لِلطَّاقَةِ الشَّمْسِيَّةِ. مَكْتَبُهُ حَدِيثٌ وَهَادِئٌ، وَمِنْ مَزَايَا عَمَلِهِ أَنَّ الرَّاتِبَ جَيِّدٌ. وَتَكَلَّمْتُ مَعَ السَّيِّدَةِ هُدَى؛ تَعْمَلُ مُمَرِّضَةً فِي مُسْتَشْفًى كَبِيرٍ. مِنْ مَزَايَا عَمَلِهَا أَنَّهَا تُسَاعِدُ النَّاسَ، وَلٰكِنْ مِنْ عُيُوبِهِ أَنَّ السَّاعَاتِ طَوِيلَةٌ. عَمَلُ المُهَنْدِسِ مُرِيحٌ، بَيْنَمَا عَمَلُ المُمَرِّضَةِ مُجْهِدٌ. أُرِيدُ أَنْ أَعْمَلَ مُهَنْدِسًا لِأَنِّي أُحِبُّ العُلُومَ وَالبِيئَةَ.',
      en: '“At the fair I spoke with Mr Karim; he works as an engineer in a solar-energy company. His office is modern and quiet, and one advantage of his job is that the salary is good. And I spoke with Mrs Huda; she works as a nurse in a big hospital. An advantage of her job is that she helps people, but a disadvantage is that the hours are long. The engineer’s job is comfortable, whereas the nurse’s job is tiring. I want to work as an engineer because I love science and the environment.”',
      find: ['يَعْمَلُ مُهَنْدِسًا', 'تَعْمَلُ مُمَرِّضَةً', 'مِنْ مَزَايَا عَمَلِهَا', 'بَيْنَمَا عَمَلُ المُمَرِّضَةِ'],
    },
  },
});
