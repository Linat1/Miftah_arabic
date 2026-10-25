'use strict';
/* Practice Room · D3-L04 · The future — plans, ambitions and career goals. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd3-l04',
  arShort: 'خُطَطِي لِلْمُسْتَقْبَلِ',
  grammar: 'future with sa- (sa-adrusu) and sawfa (sawfa atadarrabu); negative future lan + verb in -a; ambition: aṭmaḥu ilā an · anwī an · urīdu an uṣbiḥa + noun in -an; purpose: li-kay / ḥattā + verb in -a; condition: idhā najaḥtu, fa-sa- …',
  focus: 'Students run their own speaking and writing practice about future plans: say the future phrases, act a short dialogue, answer question cards, do a role-play card with a careers adviser, give a one-minute “my next ten years” talk, then build, fix and write a career-plan post with purposes and conditions.',
  words1: 'Future plans (1)', words2: 'Future plans (2)',
  dialogue: {
    title: 'What will you do after school?', ar: 'مَاذَا سَتَفْعَلِينَ بَعْدَ المَدْرَسَةِ؟',
    lines: [
      ['A', 'مَاذَا سَتَفْعَلِينَ بَعْدَ المَدْرَسَةِ الثَّانَوِيَّةِ؟', 'What will you do after secondary school?'],
      ['B', 'سَأَدْرُسُ الصَّيْدَلَةَ فِي الجَامِعَةِ.', 'I will study pharmacy at university.'],
      ['A', 'لِمَاذَا الصَّيْدَلَةُ؟', 'Why pharmacy?'],
      ['B', 'لِأَنَّنِي أَطْمَحُ إِلَى أَنْ أُصْبِحَ صَيْدَلَانِيَّةً، لِكَيْ أُسَاعِدَ النَّاسَ.', 'Because I aspire to become a pharmacist, to help people.'],
      ['A', 'وَبَعْدَ التَّخَرُّجِ؟', 'And after graduation?'],
      ['B', 'إِذَا نَجَحْتُ، فَسَوْفَ أَعْمَلُ فِي صَيْدَلِيَّةٍ قَرِيبَةٍ، وَلَنْ أُسَافِرَ بَعِيدًا عَنْ أُسْرَتِي.', 'If I succeed, I will work in a nearby pharmacy, and I won’t travel far from my family.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give YOUR real plan — one sa-, one sawfa, one lan.',
  },
  questions: [
    { q: 'مَاذَا سَتَدْرُسُ فِي المُسْتَقْبَلِ؟', en: 'What will you study in the future?', start: 'سَأَدْرُسُ …', more: '… لِأَنَّ …' },
    { q: 'مَاذَا تُرِيدُ أَنْ تُصْبِحَ؟', en: 'What do you want to become?', start: 'أُرِيدُ أَنْ أُصْبِحَ … ← طَيَّارًا / طَيَّارَةً', more: '… لِكَيْ …' },
    { q: 'مَا الَّذِي لَنْ تَفْعَلَهُ أَبَدًا فِي عَمَلِكَ؟', en: 'What will you never do in your job?', start: 'لَنْ أَعْمَلَ …', more: '… لِأَنَّ …' },
    { q: 'مَاذَا سَتَفْعَلُ إِذَا نَجَحْتَ فِي امْتِحَانَاتِكَ؟', en: 'What will you do if you pass your exams?', start: 'إِذَا نَجَحْتُ، فَسَأُسَافِرُ / فَسَوْفَ …', more: '… مَعَ …' },
    { q: 'أَيْنَ سَتَكُونُ بَعْدَ عَشْرِ سَنَوَاتٍ؟', en: 'Where will you be in ten years?', start: 'سَأَكُونُ …', more: '… وَمِنَ المُحْتَمَلِ أَنْ …' },
  ],
  card: {
    title: 'Role-play card — meeting the careers adviser', ar: 'مَعَ مُسْتَشَارِ المِهَنِ', you: 'a Year 11 student', them: 'the careers adviser',
    tasks: [
      { ex: 'مَا طُمُوحُكَ؟', task: 'Ambition.', plan: 'طُمُوحِي ← أَطْمَحُ إِلَى أَنْ أُصْبِحَ …', model: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُهَنْدِسًا مِعْمَارِيًّا.', modelEn: 'I aspire to become an architect.' },
      { ex: 'وَمَا خُطَّتُكَ لِلسَّنَتَيْنِ القَادِمَتَيْنِ؟', task: 'Two future steps.', plan: 'خُطَّتِي ← سَأَدْرُسُ … ثُمَّ سَوْفَ …', model: 'سَأَدْرُسُ الرِّيَاضِيَّاتِ وَالفَنَّ، ثُمَّ سَوْفَ أَتَقَدَّمُ إِلَى الجَامِعَةِ.', modelEn: 'I will study maths and art, then I will apply to university.' },
      { ex: 'لِمَاذَا الفَنُّ؟', task: 'Purpose with لِكَيْ.', plan: '', model: 'لِكَيْ أَتَعَلَّمَ الرَّسْمَ وَالتَّصْمِيمَ، فَهُمَا مُهِمَّانِ لِلْمِعْمَارِيِّ.', modelEn: 'To learn drawing and design — they are important for an architect.' },
      { unexpected: true, ex: 'وَإِذَا لَمْ تَحْصُلْ عَلَى الدَّرَجَاتِ المَطْلُوبَةِ؟', task: 'Plan B.', plan: '', model: 'سَأَدْرُسُ فِي مَعْهَدٍ مِهَنِيٍّ أَوَّلًا، وَلَنْ أَسْتَسْلِمَ.', modelEn: 'I will study at a vocational college first, and I won’t give up.' },
    ],
    girl: 'to a girl: طُمُوحُكِ · خُطَّتُكِ · تَحْصُلِي · أُصْبِحَ مُهَنْدِسَةً مِعْمَارِيَّةً',
    notes: 'uṣbiḥa + job in -an; lan + verb in -a (lan astaslima).',
  },
  talk: {
    title: 'One minute: my next ten years', ar: 'السَّنَوَاتُ العَشْرُ القَادِمَةُ',
    text: 'Talk for one minute about your plans: study, training, job, where you will live — with at least five future verbs.',
    routes: {
      core: 'Five future verbs (sa- or سَوْفَ).',
      develop: 'Add أَطْمَحُ إِلَى أَنْ … and a purpose (لِكَيْ …).',
      stretch: 'Add إِذَا … فَسَوْفَ … , a negative future (لَنْ …) and مِنَ المُحْتَمَلِ أَنْ …',
    },
  },
  builder: [
    { en: 'I will study medicine so that I become a doctor.', cols: [['سَأَدْرُسُ الطِّبَّ', 'دَرَسْتُ الطِّبَّ'], ['لِكَيْ', 'لِأَنَّ'], ['أُصْبِحَ طَبِيبًا.', 'أُصْبِحُ طَبِيبٌ.']], key: [0, 0, 0], why: 'Future sa-; لِكَيْ + -a; أُصْبِحَ + -an.' },
    { en: 'I won’t work in an office.', cols: [['لَنْ', 'لَا'], ['أَعْمَلَ', 'أَعْمَلُ'], ['فِي مَكْتَبٍ.', 'فِي مَكْتَبٌ.']], key: [0, 0, 0], why: 'Negative future = لَنْ + verb in -a.' },
    { en: 'If I succeed, I will travel to Jordan.', cols: [['إِذَا نَجَحْتُ،', 'إِذَا أَنْجَحُ،'], ['فَسَوْفَ', 'سَوْفَ لَا'], ['أُسَافِرُ إِلَى الأُرْدُنِّ.', 'أُسَافِرَ إِلَى الأُرْدُنِّ.']], key: [0, 0, 0], why: 'إِذَا + past; answer with fa- + future.' },
  ],
  errors: [
    { wrong: 'سَوْفَ لَا أَعْمَلُ فِي البَنْكِ.', hint: 'Negative future.', right: 'لَنْ أَعْمَلَ فِي البَنْكِ.', why: 'Won’t = لَنْ + -a (not سَوْفَ لَا).' },
    { wrong: 'أُرِيدُ أَنْ أُصْبِحَ مُهَنْدِسٌ.', hint: 'After أُصْبِحَ …', right: 'أُرِيدُ أَنْ أُصْبِحَ مُهَنْدِسًا.', why: 'أُصْبِحَ + accusative.' },
    { wrong: 'أَطْمَحُ أَنْ أَدْرُسَ فِي الخَارِجِ.', hint: 'Missing preposition.', right: 'أَطْمَحُ إِلَى أَنْ أَدْرُسَ فِي الخَارِجِ.', why: 'أَطْمَحُ إِلَى أَنْ …' },
  ],
  task: {
    title: 'A post: my career plan', ar: 'مَنْشُورٌ: خُطَّتِي المِهَنِيَّةُ',
    text: 'Write a post (about 60–80 words) for a careers forum about your plans. Include: • your ambition (أَطْمَحُ إِلَى أَنْ …) • three future steps with sa- / سَوْفَ • two purposes (لِكَيْ / حَتَّى) • one negative (لَنْ …) • a condition (إِذَا … فَسَوْفَ …) or Plan B.',
    phrases: [['أَطْمَحُ إِلَى أَنْ أُصْبِحَ …', 'I aspire to become …'], ['سَأَدْرُسُ … ثُمَّ سَوْفَ …', 'I will study … then I will …'], ['لِكَيْ … · حَتَّى …', 'in order to … · so that …'], ['إِذَا نَجَحْتُ، فَسَأُ…', 'if I succeed, I will …']],
    coreFrames: [
      { ar: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ ______ .', en: 'I aspire to become …' },
      { ar: 'سَأَدْرُسُ ______ فِي ______ .', en: 'I will study … at …' },
      { ar: 'ثُمَّ سَوْفَ ______ لِكَيْ ______ .', en: 'Then I will … in order to …' },
      { ar: 'لَنْ ______ ، لِأَنَّ ______ .', en: 'I won’t …, because …' },
    ],
    developFrames: [
      { ar: 'إِذَا نَجَحْتُ، فَسَوْفَ ______ .', en: 'If I succeed, I will …' },
      { ar: 'وَإِذَا لَمْ أَنْجَحْ، ______ .', en: 'And if I don’t succeed, …' },
    ],
    bank: ['سَأَدْرُسُ', 'سَوْفَ أَتَدَرَّبُ', 'أُرِيدُ أَنْ أُصْبِحَ', 'أَطْمَحُ إِلَى أَنْ', 'أَنْوِي أَنْ', 'بَعْدَ التَّخَرُّجِ', 'لِكَيْ · حَتَّى', 'لَنْ + -a'],
    model: {
      text: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُبَرْمِجَةً فِي شَرِكَةٍ كَبِيرَةٍ. فِي السَّنَتَيْنِ القَادِمَتَيْنِ سَأَدْرُسُ الرِّيَاضِيَّاتِ وَعُلُومَ الحَاسُوبِ، لِكَيْ أَدْخُلَ كُلِّيَّةً جَيِّدَةً. بَعْدَ التَّخَرُّجِ سَوْفَ أَتَدَرَّبُ فِي شَرِكَةٍ مُدَّةَ سَنَةٍ، حَتَّى أَكْسِبَ خِبْرَةً عَمَلِيَّةً. أَنْوِي أَنْ أُصَمِّمَ تَطْبِيقَاتٍ تُسَاعِدُ الطُّلَّابَ. لَنْ أَعْمَلَ فِي وَظِيفَةٍ مُمِلَّةٍ، لِأَنَّنِي أُحِبُّ الإِبْدَاعَ. إِذَا نَجَحْتُ، فَسَوْفَ أَفْتَحُ شَرِكَتِي الخَاصَّةَ يَوْمًا مَا. وَإِذَا لَمْ أَنْجَحْ، سَأُحَاوِلُ مَرَّةً أُخْرَى!',
      en: '“I aspire to become a programmer in a big company. In the next two years I will study maths and computer science, so that I get into a good college. After graduating I will train in a company for a year, so that I gain practical experience. I intend to design apps that help students. I won’t work in a boring job, because I love creativity. If I succeed, I will open my own company one day. And if I don’t succeed, I will try again!”',
      find: ['أَطْمَحُ إِلَى أَنْ أُصْبِحَ', 'لِكَيْ أَدْخُلَ', 'لَنْ أَعْمَلَ', 'إِذَا نَجَحْتُ، فَسَوْفَ'],
    },
  },
  checkCore: 'use sa- / سَوْفَ for at least three plans?',
  checkDevelop: 'use لَنْ + -a, لِكَيْ + -a and an إِذَا condition correctly?',
});
