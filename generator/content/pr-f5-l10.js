'use strict';
/* Practice Room · F5-L10 · Healthy habits and advice. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f5-l10',
  arShort: 'العَادَاتُ الصِّحِّيَّةُ',
  grammar: 'habits with he / she verbs (yashrabu · yaʾkulu · yumārisu · yanāmu); advice: yajibu an (strong) · min al-afḍali an (gentle) · lā yajibu an (negative); li-anna · li-dhālika',
  focus: 'Students run their own speaking and writing practice about healthy habits: say the habit phrases, act a short dialogue, answer question cards, do a role-play card as a health coach, give a 30-second talk, then build, fix and write a short advice leaflet.',
  words1: 'Healthy habits', words2: 'Unhealthy habits',
  dialogue: {
    title: 'Is your lifestyle healthy?', ar: 'هَلْ حَيَاتُكَ صِحِّيَّةٌ؟',
    lines: [
      ['A', 'هَلْ تَعِيشُ حَيَاةً صِحِّيَّةً؟', 'Do you live a healthy life?'],
      ['B', 'نَعَمْ، أَشْرَبُ مَاءً كَافِيًا، وَأَمْشِي إِلَى المَدْرَسَةِ كُلَّ يَوْمٍ.', 'Yes, I drink enough water, and I walk to school every day.'],
      ['A', 'وَهَلْ تَأْكُلُ سُكَّرًا كَثِيرًا؟', 'And do you eat a lot of sugar?'],
      ['B', 'أَحْيَانًا… وَأَسْهَرُ كَثِيرًا أَيْضًا!', 'Sometimes… and I stay up late a lot too!'],
      ['A', 'مِنَ الأَفْضَلِ أَنْ تَنَامَ مُبَكِّرًا، لِأَنَّ النَّوْمَ مُهِمٌّ لِلدِّرَاسَةِ.', 'It is better to sleep early, because sleep is important for studying.'],
      ['B', 'صَحِيحٌ. وَلَا يَجِبُ أَنْ أَشْرَبَ المَشْرُوبَاتِ الغَازِيَّةَ، لِذٰلِكَ سَأَشْرَبُ العَصِيرَ.', 'True. And I shouldn’t drink fizzy drinks, so I’ll drink juice.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: talk about YOUR real habits — one healthy, one unhealthy, and one piece of advice.',
  },
  questions: [
    { q: 'كَمْ سَاعَةً تَنَامُ؟', en: 'How many hours do you sleep?', start: 'أَنَامُ … سَاعَاتٍ', more: '… وَهٰذَا كَافٍ / لَيْسَ كَافِيًا' },
    { q: 'هَلْ تُمَارِسُ الرِّيَاضَةَ؟', en: 'Do you do exercise?', start: 'نَعَمْ، أُمَارِسُ … / لَا، …', more: '… مَرَّتَيْنِ فِي الأُسْبُوعِ' },
    { q: 'مَا العَادَةُ غَيْرُ الصِّحِّيَّةِ عِنْدَكَ؟', en: 'What is your unhealthy habit?', start: 'أَسْهَرُ / آكُلُ … كَثِيرًا', more: '… لِذٰلِكَ …' },
    { q: 'مَاذَا يَجِبُ أَنْ نَأْكُلَ كُلَّ يَوْمٍ؟', en: 'What should we eat every day?', start: 'يَجِبُ أَنْ نَأْكُلَ …', more: '… لِأَنَّهَا مُفِيدَةٌ' },
    { q: 'مَا نَصِيحَتُكَ لِصَدِيقٍ يَجْلِسُ طَوِيلًا أَمَامَ الشَّاشَةِ؟', en: 'Your advice to a friend who sits too long in front of a screen?', start: 'مِنَ الأَفْضَلِ أَنْ …', more: '… لِأَنَّ …' },
  ],
  card: {
    title: 'Role-play card — the school health coach', ar: 'مُدَرِّبُ الصِّحَّةِ', you: 'the student health coach', them: 'a younger student',
    tasks: [
      { ex: 'أَنَا تَعْبَانُ كُلَّ صَبَاحٍ. مَاذَا أَفْعَلُ؟', task: 'Give strong advice about sleep.', plan: 'مَاذَا ← يَجِبُ أَنْ تَنَامَ …', model: 'يَجِبُ أَنْ تَنَامَ مُبَكِّرًا، قَبْلَ السَّاعَةِ العَاشِرَةِ.', modelEn: 'You must sleep early, before ten o’clock.' },
      { ex: 'أَشْرَبُ مَشْرُوبَاتٍ غَازِيَّةً كُلَّ يَوْمٍ.', task: 'Give negative advice + reason.', plan: 'لَا يَجِبُ ← لَا يَجِبُ أَنْ تَشْرَبَ … لِأَنَّ …', model: 'لَا يَجِبُ أَنْ تَشْرَبَهَا كَثِيرًا، لِأَنَّ فِيهَا سُكَّرًا كَثِيرًا.', modelEn: 'You shouldn’t drink them a lot, because they have lots of sugar.' },
      { ex: 'لَا أُحِبُّ الخُضَارَ.', task: 'Give gentle advice.', plan: 'مِنَ الأَفْضَلِ ← مِنَ الأَفْضَلِ أَنْ تَأْكُلَ …', model: 'مِنَ الأَفْضَلِ أَنْ تَأْكُلَ قَلِيلًا مِنَ السَّلَطَةِ مَعَ الغَدَاءِ.', modelEn: 'It’s better to eat a little salad with lunch.' },
      { ex: 'وَالرِّيَاضَةُ؟', task: 'Suggest exercise + frequency.', plan: 'الرِّيَاضَةُ ← امْشِ … مَرَّاتٍ فِي الأُسْبُوعِ', model: 'امْشِ أَوِ العَبْ كُرَةَ القَدَمِ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ.', modelEn: 'Walk or play football three times a week.' },
    ],
    girl: 'if the younger student is a girl: تَنَامِي · تَشْرَبِيهَا · تَأْكُلِي · امْشِي · العَبِي',
    notes: 'Three strengths of advice: yajibu an · min al-afḍali an · lā yajibu an — each + verb in -a.',
  },
  talk: {
    title: '30 seconds: my healthy plan', ar: 'خُطَّتِي الصِّحِّيَّةُ',
    text: 'Talk for 30 seconds: two healthy things you do, one unhealthy habit, and three pieces of advice you will follow.',
    routes: {
      core: 'Two habits + one يَجِبُ أَنْ …',
      develop: 'Add مِنَ الأَفْضَلِ أَنْ … and لِأَنَّ.',
      stretch: 'Add لَا يَجِبُ أَنْ … and a plan with لِذٰلِكَ سَأَنَامُ … (so I will …).',
    },
  },
  builder: [
    { en: 'It is better to walk to school.', cols: [['مِنَ الأَفْضَلِ', 'الأَفْضَلُ مِنْ'], ['أَنْ تَمْشِيَ', 'أَنْ تَمْشِي'], ['إِلَى المَدْرَسَةِ.', 'المَدْرَسَةَ.']], key: [0, 0, 0], why: 'Gentle advice = مِنَ الأَفْضَلِ أَنْ + verb in -a (تَمْشِيَ).' },
    { en: 'He eats a balanced diet, so he is healthy.', cols: [['يَأْكُلُ طَعَامًا مُتَوَازِنًا،', 'يَأْكُلُ طَعَامٌ مُتَوَازِنٌ،'], ['لِذٰلِكَ', 'لِأَنَّ'], ['هُوَ بِصِحَّةٍ جَيِّدَةٍ.', 'هُوَ بِصِحَّةٌ جَيِّدَةٌ.']], key: [0, 0, 0], why: 'Object → -an; so = لِذٰلِكَ.' },
    { en: 'We should not stay up late.', cols: [['لَا يَجِبُ', 'يَجِبُ لَا'], ['أَنْ نَسْهَرَ', 'أَنْ نَسْهَرُ'], ['كَثِيرًا.', 'كَثِيرٌ.']], key: [0, 0, 0], why: 'Negative advice = لَا يَجِبُ أَنْ + verb in -a.' },
  ],
  errors: [
    { wrong: 'يَجِبُ أَنْ نَشْرَبُ مَاءً كَافِيًا.', hint: 'After أَنْ …', right: 'يَجِبُ أَنْ نَشْرَبَ مَاءً كَافِيًا.', why: 'أَنْ + verb ending in -a.' },
    { wrong: 'أَخِي تَأْكُلُ سُكَّرًا كَثِيرًا.', hint: 'My brother = he.', right: 'أَخِي يَأْكُلُ سُكَّرًا كَثِيرًا.', why: 'He → يَأْكُلُ.' },
    { wrong: 'أَنَامُ مُبَكِّرًا لِذٰلِكَ النَّوْمُ مُهِمٌّ.', hint: 'Reason or result?', right: 'أَنَامُ مُبَكِّرًا لِأَنَّ النَّوْمَ مُهِمٌّ.', why: 'A reason → لِأَنَّ (+ noun in -a).' },
  ],
  task: {
    title: 'A healthy-habits leaflet', ar: 'نَشْرَةُ العَادَاتِ الصِّحِّيَّةِ',
    text: 'Write a short leaflet (about 40–60 words) for younger students. Include: • two healthy habits you have • one unhealthy habit and why it is bad • three pieces of advice: يَجِبُ أَنْ … · مِنَ الأَفْضَلِ أَنْ … · لَا يَجِبُ أَنْ … • a reason with لِأَنَّ and a result with لِذٰلِكَ.',
    phrases: [['أَشْرَبُ … وَأَمْشِي …', 'I drink … and I walk …'], ['يَجِبُ أَنْ …', 'you must …'], ['مِنَ الأَفْضَلِ أَنْ …', 'it is better to …'], ['لَا يَجِبُ أَنْ … لِأَنَّ …', 'you shouldn’t … because …']],
    coreFrames: [
      { ar: 'أَنَا ______ وَ ______ كُلَّ يَوْمٍ.', en: 'I … and … every day.' },
      { ar: 'يَجِبُ أَنْ ______ .', en: 'You must …' },
      { ar: 'مِنَ الأَفْضَلِ أَنْ ______ .', en: 'It is better to …' },
      { ar: 'لَا يَجِبُ أَنْ ______ .', en: 'You shouldn’t …' },
    ],
    developFrames: [
      { ar: '______ لَيْسَ صِحِّيًّا لِأَنَّ ______ .', en: '… is not healthy because …' },
      { ar: 'النَّوْمُ مُهِمٌّ، لِذٰلِكَ ______ .', en: 'Sleep is important, so …' },
    ],
    bank: ['يَشْرَبُ مَاءً كَافِيًا', 'يَأْكُلُ الفَاكِهَةَ وَالخُضَارَ', 'يُمَارِسُ الرِّيَاضَةَ', 'يَنَامُ مُبَكِّرًا', 'يَسْهَرُ · سُكَّرٌ كَثِيرٌ', 'يَجِبُ أَنْ', 'مِنَ الأَفْضَلِ أَنْ', 'لِأَنَّ · لِذٰلِكَ'],
    model: {
      text: 'كَيْفَ تَعِيشُ حَيَاةً صِحِّيَّةً؟ أَنَا أَشْرَبُ مَاءً كَافِيًا، وَأَلْعَبُ كُرَةَ السَّلَّةِ مَرَّتَيْنِ فِي الأُسْبُوعِ. لٰكِنِّي أَسْهَرُ أَحْيَانًا، وَهٰذَا لَيْسَ صِحِّيًّا لِأَنَّ الجِسْمَ يَحْتَاجُ إِلَى النَّوْمِ. يَجِبُ أَنْ تَأْكُلَ الفَاكِهَةَ كُلَّ يَوْمٍ. مِنَ الأَفْضَلِ أَنْ تَمْشِيَ إِلَى المَدْرَسَةِ. لَا يَجِبُ أَنْ تَجْلِسَ طَوِيلًا أَمَامَ الشَّاشَةِ، لِذٰلِكَ أَغْلِقْ هَاتِفَكَ فِي المَسَاءِ!',
      en: '“How do you live a healthy life? I drink enough water, and I play basketball twice a week. But I sometimes stay up late, and that is not healthy because the body needs sleep. You must eat fruit every day. It is better to walk to school. You shouldn’t sit for a long time in front of a screen, so switch off your phone in the evening!”',
      find: ['لِأَنَّ الجِسْمَ يَحْتَاجُ', 'يَجِبُ أَنْ تَأْكُلَ', 'مِنَ الأَفْضَلِ أَنْ تَمْشِيَ', 'لِذٰلِكَ أَغْلِقْ'],
    },
  },
  checkCore: 'give advice with يَجِبُ أَنْ + verb in -a?',
  checkDevelop: 'use three strengths of advice and both لِأَنَّ and لِذٰلِكَ?',
});
