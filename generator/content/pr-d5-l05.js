'use strict';
/* Practice Room · D5-L05 · Storytelling — narrative connectors and kāna description. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd5-l05',
  arShort: 'رِوَايَةُ القِصَصِ',
  grammar: 'story shape: setting (kāna al-ṭaqsu jamīlan — kāna + adjective in -an) → background / used to (kāna yalʿabu · kuntu aqraʾu) → the turn (fajʾatan · fī tilka al-laḥẓa) → ending (fī al-nihāya · li-l-asaf) → reflection (mā ziltu atadhakkaru …)',
  focus: 'Students run their own speaking and writing practice telling stories: say the story connectors, act a short story dialogue, answer question cards about a memory, do a role-play card telling a friend about a surprising day, give a one-minute story with a twist, then build, fix and write a short memory story.',
  words1: 'Story connectors', words2: 'kāna and memories',
  dialogue: {
    title: 'A day I will never forget', ar: 'يَوْمٌ لَنْ أَنْسَاهُ',
    lines: [
      ['A', 'احْكِ لِي عَنْ يَوْمٍ لَا تَنْسَاهُ.', 'Tell me about a day you won’t forget.'],
      ['B', 'كُنْتُ فِي العَاشِرَةِ، وَكَانَ الطَّقْسُ جَمِيلًا. كُنَّا فِي حَدِيقَةِ الحَيَوَانَاتِ.', 'I was ten, and the weather was lovely. We were at the zoo.'],
      ['A', 'وَمَاذَا حَدَثَ؟', 'And what happened?'],
      ['B', 'كَانَ أَخِي يَأْكُلُ الآيِسْ كِرِيم، وَفَجْأَةً خَطَفَهُ قِرْدٌ مِنْ يَدِهِ!', 'My brother was eating an ice cream, and suddenly a monkey snatched it from his hand!'],
      ['A', 'وَفِي النِّهَايَةِ؟', 'And in the end?'],
      ['B', 'فِي النِّهَايَةِ ضَحِكْنَا كُلُّنَا، وَمَا زِلْتُ أَتَذَكَّرُ وَجْهَ أَخِي حَتَّى الآنَ!', 'In the end we all laughed, and I still remember my brother’s face to this day!'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: tell YOUR memory with the same five steps.',
  },
  qTitle: 'Story cards — one step per card',
  questions: [
    { q: '١) مَتَى وَأَيْنَ كُنْتَ؟', en: '1) When and where were you?', start: 'كُنْتُ فِي … ، وَكَانَ الطَّقْسُ …', more: '… كُنَّا …' },
    { q: '٢) مَاذَا كُنْتُمْ تَفْعَلُونَ؟', en: '2) What were you doing?', start: 'كُنَّا نَلْعَبُ / كَانَ أَبِي يَقْرَأُ …', more: '…' },
    { q: '٣) مَاذَا حَدَثَ فَجْأَةً؟', en: '3) What suddenly happened?', start: 'فَجْأَةً …', more: '… فِي تِلْكَ اللَّحْظَةِ …' },
    { q: '٤) كَيْفَ انْتَهَتِ القِصَّةُ؟', en: '4) How did the story end?', start: 'فِي النِّهَايَةِ … / لِلْأَسَفِ …', more: '…' },
    { q: '٥) لِمَاذَا تَتَذَكَّرُ هٰذَا اليَوْمَ؟', en: '5) Why do you remember this day?', start: 'مَا زِلْتُ أَتَذَكَّرُهُ لِأَنَّ …', more: '…' },
  ],
  card: {
    title: 'Role-play card — telling a friend about a surprising day', ar: 'يَوْمٌ مُفَاجِئٌ', you: 'the storyteller', them: 'a curious friend',
    tasks: [
      { ex: 'كَيْفَ كَانَ يَوْمُ السَّبْتِ؟', task: 'Set the scene.', plan: 'المَشْهَدُ ← كَانَ الجَوُّ … وَكُنْتُ …', model: 'كَانَ الجَوُّ بَارِدًا، وَكُنْتُ فِي البَيْتِ وَحْدِي.', modelEn: 'The weather was cold, and I was at home alone.' },
      { ex: 'وَمَاذَا كُنْتَ تَفْعَلُ؟', task: 'Background (was …-ing).', plan: 'الخَلْفِيَّةُ ← كُنْتُ أُشَاهِدُ …', model: 'كُنْتُ أُشَاهِدُ مُبَارَاةً عَلَى التِّلْفَازِ.', modelEn: 'I was watching a match on TV.' },
      { ex: 'ثُمَّ؟', task: 'The twist.', plan: '', model: 'فَجْأَةً رَنَّ الجَرَسُ، وَفِي تِلْكَ اللَّحْظَةِ رَأَيْتُ خَالِي مِنْ أَمْرِيكَا!', modelEn: 'Suddenly the doorbell rang, and at that moment I saw my uncle from America!' },
      { unexpected: true, ex: 'وَكَيْفَ شَعَرْتَ؟', task: 'Feeling + reflection.', plan: '', model: 'فَرِحْتُ جِدًّا، لِأَنَّنِي لَمْ أَرَهُ مُنْذُ خَمْسِ سَنَوَاتٍ. مَا زِلْتُ أَتَذَكَّرُ ذٰلِكَ اليَوْمَ.', modelEn: 'I was so happy, because I hadn’t seen him for five years. I still remember that day.' },
    ],
    girl: 'friend to a girl: كُنْتِ تَفْعَلِينَ · شَعَرْتِ · كُنْتُ وَحْدِي (no change)',
    notes: 'kāna + adjective in -an for the scene; kuntu + present verb for “was …-ing”.',
  },
  talk: {
    title: 'One minute: a story with a twist', ar: 'قِصَّةٌ فِيهَا مُفَاجَأَةٌ',
    text: 'Tell a true or invented story for one minute with the five steps: scene → background → twist → ending → reflection.',
    routes: {
      core: 'Scene with كَانَ + -an and three past verbs.',
      develop: 'Add كُنْتُ / كَانَ + present verb (was …-ing) and فَجْأَةً.',
      stretch: 'Add فِي تِلْكَ اللَّحْظَةِ, لِلْأَسَفِ and مَا زِلْتُ أَتَذَكَّرُ …',
    },
  },
  builder: [
    { en: 'The weather was hot.', cols: [['كَانَ', 'كَانَتْ'], ['الطَّقْسُ', 'الطَّقْسَ'], ['حَارًّا.', 'حَارٌّ.']], key: [0, 0, 0], why: 'كَانَ + subject (-u) + adjective (-an).' },
    { en: 'We were playing when suddenly it rained.', cols: [['كُنَّا نَلْعَبُ', 'كُنَّا لَعِبْنَا'], ['عِنْدَمَا', 'لِأَنَّ'], ['سَقَطَ المَطَرُ فَجْأَةً.', 'يَسْقُطُ المَطَرُ فَجْأَةً.']], key: [0, 0, 0], why: 'Background = كُنَّا + present; the event = past.' },
    { en: 'I still remember that trip.', cols: [['مَا زِلْتُ', 'مَا زَالَ'], ['أَتَذَكَّرُ', 'تَذَكَّرْتُ'], ['تِلْكَ الرِّحْلَةَ.', 'ذٰلِكَ الرِّحْلَةَ.']], key: [0, 0, 0], why: 'مَا زِلْتُ + present; رِحْلَةٌ (f.) → تِلْكَ.' },
  ],
  errors: [
    { wrong: 'كَانَ الجَوُّ جَمِيلٌ.', hint: 'After كَانَ …', right: 'كَانَ الجَوُّ جَمِيلًا.', why: 'كَانَ + adjective in -an.' },
    { wrong: 'كُنْتُ لَعِبْتُ فِي الحَدِيقَةِ عِنْدَمَا …', hint: 'Was …-ing.', right: 'كُنْتُ أَلْعَبُ فِي الحَدِيقَةِ عِنْدَمَا …', why: 'كُنْتُ + present verb.' },
    { wrong: 'كَانَ أُمِّي تَطْبُخُ.', hint: 'Mother → ?', right: 'كَانَتْ أُمِّي تَطْبُخُ.', why: 'She → كَانَتْ.' },
  ],
  task: {
    title: 'A memory story', ar: 'قِصَّةٌ مِنْ ذِكْرَيَاتِي',
    text: 'Write a short story (about 60–80 words) about a memory for a class anthology. Follow the five steps: scene (كَانَ + -an) → background (كُنْتُ / كَانَ + present) → twist (فَجْأَةً) → ending (فِي النِّهَايَةِ / لِلْأَسَفِ) → reflection (مَا زِلْتُ أَتَذَكَّرُ …).',
    phrases: [['كَانَ الطَّقْسُ … · كُنْتُ فِي …', 'the weather was … · I was in …'], ['كُنَّا نَ… / كَانَ أَبِي يَ…', 'we were …-ing / my dad was …-ing'], ['فَجْأَةً … · فِي تِلْكَ اللَّحْظَةِ …', 'suddenly … · at that moment …'], ['مَا زِلْتُ أَتَذَكَّرُ …', 'I still remember …']],
    coreFrames: [
      { ar: 'كُنْتُ فِي ______ مِنْ عُمُرِي، وَكَانَ ______ .', en: 'I was … years old, and … was …' },
      { ar: 'كُنَّا ______ فِي ______ .', en: 'We were …-ing in …' },
      { ar: 'فَجْأَةً ______ .', en: 'Suddenly …' },
      { ar: 'فِي النِّهَايَةِ ______ .', en: 'In the end …' },
    ],
    developFrames: [
      { ar: 'فِي تِلْكَ اللَّحْظَةِ ______ ، وَ ______ .', en: 'At that moment …, and …' },
      { ar: 'مَا زِلْتُ أَتَذَكَّرُ ______ ، لِأَنَّ ______ .', en: 'I still remember …, because …' },
    ],
    bank: ['فِي البِدَايَةِ', 'ثُمَّ', 'فَجْأَةً', 'فِي تِلْكَ اللَّحْظَةِ', 'لِلْأَسَفِ', 'فِي النِّهَايَةِ', 'كَانَ · كَانَتْ · كُنْتُ', 'مَا زِلْتُ أَتَذَكَّرُ'],
    model: {
      text: 'كُنْتُ فِي الثَّامِنَةِ مِنْ عُمُرِي، وَكَانَ اليَوْمُ أَوَّلَ أَيَّامِ العِيدِ. كَانَ الجَوُّ مُشْمِسًا، وَكُنَّا نَلْعَبُ فِي حَدِيقَةِ جَدِّي. كَانَتْ أُمِّي تُحَضِّرُ الحَلْوَى، وَكَانَ أَبِي يُصَوِّرُنَا. فَجْأَةً سَقَطْتُ فِي بِرْكَةِ المَاءِ بِمَلَابِسِ العِيدِ الجَدِيدَةِ! فِي تِلْكَ اللَّحْظَةِ بَكَيْتُ كَثِيرًا. وَلٰكِنْ فِي النِّهَايَةِ أَعْطَانِي جَدِّي قَمِيصَهُ الكَبِيرَ، فَضَحِكَ الجَمِيعُ. مَا زِلْتُ أَتَذَكَّرُ ذٰلِكَ اليَوْمَ، لِأَنَّهُ كَانَ مُضْحِكًا وَدَافِئًا.',
      en: '“I was eight years old, and it was the first day of Eid. The weather was sunny, and we were playing in my grandfather’s garden. My mum was preparing sweets, and my dad was filming us. Suddenly I fell into the pond in my new Eid clothes! At that moment I cried a lot. But in the end my grandfather gave me his big shirt, and everyone laughed. I still remember that day, because it was funny and warm.”',
      find: ['كَانَ الجَوُّ مُشْمِسًا', 'وَكُنَّا نَلْعَبُ', 'فَجْأَةً سَقَطْتُ', 'مَا زِلْتُ أَتَذَكَّرُ'],
    },
  },
  checkCore: 'set the scene with كَانَ + -an and tell events in the past?',
  checkDevelop: 'use كُنْتُ + present for background, a twist and a reflection?',
});
