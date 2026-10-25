'use strict';
/* Practice Room · F6-L08 · Giving directions — signs, streets and maps. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'f6-l08',
  arShort: 'الاتِّجَاهَاتُ',
  grammar: 'kayfa adhhabu ilā …?; commands to a boy / girl / group (idhhab · idhhabī · idhhabū; inʿaṭif · inʿaṭifī · inʿaṭifū; uʿbur · uʿburī · uʿburū); mustaqīman · yamīnan · yasāran · ḥattā; signs (mamnūʿ al-dukhūl · madkhal · makhraj)',
  focus: 'Students run their own speaking and writing practice giving directions: say the direction words, act a short dialogue, answer route cards, do a role-play card guiding a group of visitors, give a 30-second route, then build, fix and write directions from school to a place in town.',
  words1: 'Direction commands', words2: 'Route words and signs',
  dialogue: {
    title: 'How do I get to the museum?', ar: 'كَيْفَ أَذْهَبُ إِلَى المَتْحَفِ؟',
    lines: [
      ['A', 'عَفْوًا، كَيْفَ أَذْهَبُ إِلَى المَتْحَفِ؟', 'Excuse me, how do I get to the museum?'],
      ['B', 'اذْهَبْ مُسْتَقِيمًا حَتَّى الدَّوَّارِ.', 'Go straight on until the roundabout.'],
      ['A', 'وَبَعْدَ الدَّوَّارِ؟', 'And after the roundabout?'],
      ['B', 'انْعَطِفْ يَمِينًا، ثُمَّ اعْبُرِ الشَّارِعَ.', 'Turn right, then cross the street.'],
      ['A', 'هَلْ هُوَ بَعِيدٌ؟', 'Is it far?'],
      ['B', 'لَا، المَتْحَفُ عَلَى اليَسَارِ، مُقَابِلَ البَنْكِ. المَدْخَلُ أَمَامَكَ.', 'No, the museum is on the left, opposite the bank. The entrance is in front of you.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give the same directions to a GIRL (اذْهَبِي · انْعَطِفِي · اعْبُرِي) and then to a GROUP (اذْهَبُوا …).',
  },
  questions: [
    { q: 'كَيْفَ أَذْهَبُ إِلَى المَحَطَّةِ؟ (to a boy)', en: 'How do I get to the station? (boy)', start: 'اذْهَبْ مُسْتَقِيمًا …', more: '… ثُمَّ انْعَطِفْ …' },
    { q: 'كَيْفَ أَذْهَبُ إِلَى الصَّيْدَلِيَّةِ؟ (to a girl)', en: 'How do I get to the pharmacy? (girl)', start: 'اذْهَبِي … ، ثُمَّ …', more: '… اعْبُرِي …' },
    { q: 'كَيْفَ نَذْهَبُ إِلَى الحَدِيقَةِ؟ (to a group)', en: 'How do we get to the park? (group)', start: 'اذْهَبُوا …', more: '… انْعَطِفُوا …' },
    { q: 'مَاذَا تَعْنِي «مَمْنُوعُ الدُّخُولِ»؟', en: 'What does مَمْنُوعُ الدُّخُولِ mean?', start: 'تَعْنِي: لَا يَجُوزُ أَنْ تَدْخُلَ', more: '…' },
    { q: 'أَيْنَ المَخْرَجُ؟', en: 'Where is the exit?', start: 'المَخْرَجُ عَلَى … / بِجَانِبِ …', more: '…' },
  ],
  card: {
    title: 'Role-play card — guiding a group of visitors', ar: 'أُرْشِدُ مَجْمُوعَةً مِنَ الزُّوَّارِ', you: 'a student volunteer', them: 'the leader of a visiting group',
    tasks: [
      { ex: 'نُرِيدُ أَنْ نَذْهَبَ إِلَى المَسْجِدِ. كَيْفَ نَذْهَبُ؟', task: 'First direction (group).', plan: 'كَيْفَ ← اذْهَبُوا مُسْتَقِيمًا …', model: 'اذْهَبُوا مُسْتَقِيمًا حَتَّى إِشَارَةِ المُرُورِ.', modelEn: 'Go straight on until the traffic lights.' },
      { ex: 'ثُمَّ؟', task: 'Turn (group).', plan: 'ثُمَّ ← انْعَطِفُوا يَمِينًا / يَسَارًا', model: 'ثُمَّ انْعَطِفُوا يَسَارًا.', modelEn: 'Then turn left.' },
      { ex: 'هَلْ نَعْبُرُ الشَّارِعَ؟', task: 'Cross + a landmark.', plan: 'هَلْ ← نَعَمْ، اعْبُرُوا … ، وَ…', model: 'نَعَمْ، اعْبُرُوا الشَّارِعَ أَمَامَ المَكْتَبَةِ.', modelEn: 'Yes, cross the street in front of the library.' },
      { ex: 'وَأَيْنَ المَسْجِدُ بِالضَّبْطِ؟', task: 'Exact location.', plan: 'أَيْنَ ← المَسْجِدُ عَلَى … ، مُقَابِلَ …', model: 'المَسْجِدُ عَلَى اليَمِينِ، مُقَابِلَ الحَدِيقَةِ.', modelEn: 'The mosque is on the right, opposite the park.' },
    ],
    foot: 'Speaker = a student volunteer · Leader = the group leader. Read the plan, hide it and speak. Round 2: the Leader asks for ONE person — change every command to اذْهَبْ / اذْهَبِي.',
    girl: 'commands to one girl: اذْهَبِي · انْعَطِفِي · اعْبُرِي',
    notes: 'Language: the three command endings — m. (sukūn), f. (-ī), group (-ū).',
  },
  talk: {
    title: '30 seconds: from school to …', ar: 'مِنَ المَدْرَسَةِ إِلَى …',
    text: 'Give the route in 30 seconds from your school (or home) to a place in town — at least four steps, with landmarks.',
    routes: {
      core: 'Three commands: اذْهَبْ · انْعَطِفْ · اعْبُرْ.',
      develop: 'Add مُسْتَقِيمًا · حَتَّى … · ثُمَّ and two landmarks.',
      stretch: 'Give it again to a group (-ū) and end with the exact location.',
    },
  },
  builder: [
    { en: 'Go straight on until the station. (to a girl)', cols: [['اذْهَبِي', 'اذْهَبْ'], ['مُسْتَقِيمًا', 'مُسْتَقِيمٌ'], ['حَتَّى المَحَطَّةِ.', 'حَتَّى المَحَطَّةُ.']], key: [0, 0, 0], why: 'To a girl → اذْهَبِي; حَتَّى + genitive.' },
    { en: 'Turn left, then cross the street. (to a group)', cols: [['انْعَطِفُوا يَسَارًا،', 'انْعَطِفْ يَسَارًا،'], ['ثُمَّ', 'لِأَنَّ'], ['اعْبُرُوا الشَّارِعَ.', 'اعْبُرْ الشَّارِعَ.']], key: [0, 0, 0], why: 'To a group → -ū on every command.' },
    { en: 'The entrance is on the right.', cols: [['المَدْخَلُ', 'المَخْرَجُ'], ['عَلَى', 'إِلَى'], ['اليَمِينِ.', 'يَمِينًا.']], key: [0, 0, 0], why: 'Entrance = المَدْخَلُ; on the right = عَلَى اليَمِينِ.' },
  ],
  errors: [
    { wrong: 'انْعَطِفْ يَمِينًا يَا مَرْيَمُ.', hint: 'Maryam is a girl.', right: 'انْعَطِفِي يَمِينًا يَا مَرْيَمُ.', why: 'To a girl → -ī.' },
    { wrong: 'اذْهَبُوا مُسْتَقِيمًا يَا عَلِيُّ.', hint: 'One boy, not a group.', right: 'اذْهَبْ مُسْتَقِيمًا يَا عَلِيُّ.', why: 'To one boy → اذْهَبْ.' },
    { wrong: 'اذْهَبْ حَتَّى الدَّوَّارُ.', hint: 'Look after حَتَّى.', right: 'اذْهَبْ حَتَّى الدَّوَّارِ.', why: 'حَتَّى + genitive.' },
  ],
  task: {
    title: 'Directions from school', ar: 'الطَّرِيقُ مِنَ المَدْرَسَةِ',
    text: 'Write directions (about 40–60 words) for a new classmate (a girl) from your school to a place in town (library, park, station …). Include: • at least five steps with commands to a girl • two landmarks • where the place is exactly • one sign she will see • how long it takes on foot.',
    phrases: [['اذْهَبِي مُسْتَقِيمًا حَتَّى …', 'go straight on until …'], ['انْعَطِفِي يَمِينًا / يَسَارًا', 'turn right / left'], ['اعْبُرِي الشَّارِعَ أَمَامَ …', 'cross the street in front of …'], ['… عَلَى اليَمِينِ، مُقَابِلَ …', '… on the right, opposite …']],
    coreFrames: [
      { ar: 'مِنَ المَدْرَسَةِ اذْهَبِي ______ حَتَّى ______ .', en: 'From school go … until …' },
      { ar: 'ثُمَّ انْعَطِفِي ______ .', en: 'Then turn …' },
      { ar: 'اعْبُرِي ______ .', en: 'Cross …' },
      { ar: '______ عَلَى ______ ، مُقَابِلَ ______ .', en: '… is on the …, opposite …' },
    ],
    developFrames: [
      { ar: 'سَتَرَيْنَ لَافِتَةً: « ______ ».', en: 'You will see a sign: “…”.' },
      { ar: 'الطَّرِيقُ يَسْتَغْرِقُ ______ دَقَائِقَ مَشْيًا.', en: 'The route takes … minutes on foot.' },
    ],
    bank: ['اذْهَبِي · اذْهَبْ · اذْهَبُوا', 'انْعَطِفِي · انْعَطِفْ', 'اعْبُرِي · اعْبُرْ', 'مُسْتَقِيمًا · يَمِينًا · يَسَارًا', 'حَتَّى · ثُمَّ', 'دَوَّارٌ · إِشَارَةُ المُرُورِ', 'مَدْخَلٌ · مَخْرَجٌ', 'مَمْنُوعُ الدُّخُولِ'],
    model: {
      text: 'أَهْلًا يَا رِيمُ! مِنْ بَابِ المَدْرَسَةِ اذْهَبِي يَسَارًا، ثُمَّ امْشِي مُسْتَقِيمًا حَتَّى إِشَارَةِ المُرُورِ. انْعَطِفِي يَمِينًا، وَاعْبُرِي الشَّارِعَ أَمَامَ الصَّيْدَلِيَّةِ. بَعْدَ ذٰلِكَ اذْهَبِي حَتَّى الدَّوَّارِ. سَتَرَيْنَ لَافِتَةً: «المَكْتَبَةُ العَامَّةُ». المَكْتَبَةُ عَلَى اليَمِينِ، مُقَابِلَ الحَدِيقَةِ. الطَّرِيقُ يَسْتَغْرِقُ عَشْرَ دَقَائِقَ مَشْيًا.',
      en: '“Hi Reem! From the school gate go left, then walk straight on until the traffic lights. Turn right, and cross the street in front of the pharmacy. After that go until the roundabout. You will see a sign: ‘Public Library’. The library is on the right, opposite the park. The route takes ten minutes on foot.”',
      find: ['اذْهَبِي يَسَارًا', 'حَتَّى إِشَارَةِ المُرُورِ', 'انْعَطِفِي يَمِينًا', 'عَلَى اليَمِينِ، مُقَابِلَ'],
    },
  },
  checkCore: 'give at least five steps with commands?',
  checkDevelop: 'use the right command ending for a girl (-ī) every time?',
});
