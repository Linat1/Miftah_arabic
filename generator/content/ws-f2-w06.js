'use strict';
/* Apply Workshop · F2-W06 · F2-L11 (form + short introduction) + F2-L12 (F2 review). Teacher-made. */
module.exports = require('./ws-common').workshop({
  key: 'f2-w06', pair: ['f2-l11', 'f2-l12'],
  title: 'Pen-Friend Application', arShort: 'طَلَبُ صَدِيقٍ بِالمُرَاسَلَةِ',
  focus: 'Students use the whole of F2 for one real purpose: they fill in a pen-friend application form, answer a club coordinator’s questions, give a full introduction with a friend, and write a connected introduction with linking words and a reason.',
  sortTitle: 'Question or answer?', sortCats: ['Questions — you ASK', 'Answers — you TELL'],
  sort: [
    { ar: 'مَا اسْمُكِ؟', cat: 0 }, { ar: 'كَمْ عُمْرُكَ؟', cat: 0 }, { ar: 'مِنْ أَيْنَ أَنْتَ؟', cat: 0 }, { ar: 'أَيَّ لُغَاتٍ تَتَكَلَّمُ؟', cat: 0 },
    { ar: 'عُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً', cat: 1 }, { ar: 'أَنَا مِنْ لِيبِيَا', cat: 1 }, { ar: 'أَتَكَلَّمُ العَرَبِيَّةَ أَيْضًا', cat: 1 }, { ar: 'اسْمِي هِنْدٌ', cat: 1 },
  ],
  dialogue: {
    title: 'At the pen-friend club', ar: 'فِي نَادِي المُرَاسَلَةِ',
    lines: [
      ['A', 'السَّلَامُ عَلَيْكُمْ! كَيْفَ حَالُكَ؟', 'Peace be upon you! How are you?'],
      ['B', 'وَعَلَيْكُمُ السَّلَامُ! بِخَيْرٍ، الحَمْدُ لِلّٰهِ.', 'And upon you be peace! Fine, praise be to God.'],
      ['A', 'مَا اسْمُكَ، وَكَمْ عُمْرُكَ؟', 'What is your name, and how old are you?'],
      ['B', 'اسْمِي حَمْزَةُ، وَعُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً.', 'My name is Hamza, and I am thirteen.'],
      ['A', 'لِمَاذَا تَتَعَلَّمُ العَرَبِيَّةَ؟', 'Why do you learn Arabic?'],
      ['B', 'أَتَعَلَّمُ العَرَبِيَّةَ لِأَنِّي أُحِبُّ القُرْآنَ، وَلِأَنَّ جَدِّي مِنَ الأُرْدُنِّ.', 'I learn Arabic because I love the Qur’an, and because my grandfather is from Jordan.'],
    ],
    notes: 'Greetings, names and ages revise the whole of F2 (F2-L12); the reason with لِأَنِّي / لِأَنَّ is the F2-L11 writing target.',
  },
  card: {
    title: 'Role-play card — the pen-friend coordinator', ar: 'مُنَسِّقُ النَّادِي', you: 'a new member', them: 'the coordinator',
    mix: 'the form facts and linking words (F2-L11) with greetings, questions and he / she forms from the whole unit (F2-L12)',
    tasks: [
      { ex: 'أَهْلًا! مَا اسْمُكَ، وَكَمْ عُمْرُكَ؟', task: 'Give your name and age in one sentence.', plan: 'مَا / كَمْ ← اسْمِي … ، وَعُمْرِي …', model: 'اسْمِي دَاوُدُ، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.', modelEn: 'My name is Dawud, and I am fourteen.' },
      { ex: 'مَا جِنْسِيَّتُكَ، وَأَيْنَ تَسْكُنُ؟', task: 'Give your nationality and city.', plan: 'مَا / أَيْنَ ← أَنَا … ، وَأَسْكُنُ فِي …', model: 'أَنَا بِرِيطَانِيٌّ، لٰكِنَّ عَائِلَتِي مِنَ السُّودَانِ، وَأَسْكُنُ فِي كَارْدِيف.', modelEn: 'I am British, but my family is from Sudan, and I live in Cardiff.' },
      { ex: 'أَيَّ لُغَاتٍ تَتَكَلَّمُ؟', task: 'Name your languages with أَيْضًا.', plan: 'أَيَّ ← أَتَكَلَّمُ … ، وَ… أَيْضًا', model: 'أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ، وَالعَرَبِيَّةَ أَيْضًا.', modelEn: 'I speak English, and Arabic too.' },
      { ex: 'حَدِّثْنِي عَنْ صَدِيقٍ أَوْ صَدِيقَةٍ.', task: 'Describe a friend: name, age, city, one adjective.', plan: 'حَدِّثْنِي ← صَدِيقِي اسْمُهُ … ، عُمْرُهُ … ، هُوَ …', model: 'صَدِيقِي اسْمُهُ بِلَالٌ، عُمْرُهُ ثَلَاثَ عَشْرَةَ سَنَةً، يَسْكُنُ فِي كَارْدِيف، وَهُوَ لَطِيفٌ جِدًّا.', modelEn: 'My friend is called Bilal; he is thirteen, he lives in Cardiff, and he is very kind.' },
      { unexpected: true, ex: 'لِمَاذَا تُرِيدُ صَدِيقًا بِالمُرَاسَلَةِ؟', task: 'Give a reason with لِأَنِّي.', plan: 'لِمَاذَا ← أُرِيدُ … لِأَنِّي …', model: 'أُرِيدُ صَدِيقًا بِالمُرَاسَلَةِ لِأَنِّي أُحِبُّ اللُّغَةَ العَرَبِيَّةَ.', modelEn: 'I want a pen-friend because I love the Arabic language.' },
    ],
    girl: 'مَا اسْمُكِ؟ · أَيْنَ تَسْكُنِينَ؟ · أَيَّ لُغَاتٍ تَتَكَلَّمِينَ؟ · لِمَاذَا تُرِيدِينَ …؟ — she answers أَنَا بِرِيطَانِيَّةٌ',
  },
  talk: {
    title: 'My full introduction — and a friend', ar: 'تَعْرِيفٌ كَامِلٌ',
    text: 'Talk for 30–45 seconds: greet, give your name, age, nationality, city and languages, say why you learn Arabic, then add a friend (name, age, city). Use at least three linking words.',
    routes: {
      core: 'السَّلَامُ عَلَيْكُمْ · اسْمِي … · عُمْرِي … · أَنَا … · أَسْكُنُ فِي …',
      develop: 'Add a friend and link with وَ · أَيْضًا · ثُمَّ.',
      stretch: 'Add a reason (لِأَنِّي …) and a contrast (لٰكِنَّ عَائِلَتِي مِنْ …).',
    },
    phrases: [['اسْمِي … ، وَعُمْرِي … سَنَةً', 'my name is … and I am …'], ['أَنَا … ، لٰكِنَّ عَائِلَتِي مِنْ …', 'I am …, but my family is from …'], ['أَتَعَلَّمُ العَرَبِيَّةَ لِأَنِّي …', 'I learn Arabic because I …'], ['صَدِيقِي اسْمُهُ … ، وَهُوَ …', 'my friend is called … and he is …']],
  },
  task: {
    title: 'My pen-friend application', ar: 'طَلَبُ العُضْوِيَّةِ',
    size: 'form + about 50–70 words', text: 'Part 1: fill in the five form boxes with short answers — name · age · nationality · place of residence · languages. Part 2: write your introduction (about 50–70 words): • a greeting • name, age, nationality, city • languages • a friend: name, age, city, one adjective • why you want a pen-friend (give a reason) • a polite closing. Use at least four linking words.',
    range: [45, 85],
    phrases: [['الاسْمُ: … · العُمْرُ: … · الجِنْسِيَّةُ: …', 'name: … · age: … · nationality: …'], ['أَنَا … ، لٰكِنَّ عَائِلَتِي مِنْ …', 'I am …, but my family is from …'], ['صَدِيقِي اسْمُهُ … ، وَعُمْرُهُ …', 'my friend is called … and he is …'], ['أُرِيدُ صَدِيقًا بِالمُرَاسَلَةِ لِأَنِّي …', 'I want a pen-friend because I …']],
    coreFrames: [
      { ar: 'السَّلَامُ عَلَيْكُمْ! اسْمِي ______ ، وَعُمْرِي ______ سَنَةً.', en: 'Peace be upon you! My name is … and I am …' },
      { ar: 'أَنَا ______ ، وَأَسْكُنُ فِي ______ .', en: 'I am (nationality) and I live in …' },
      { ar: 'أَتَكَلَّمُ ______ ، وَ ______ أَيْضًا.', en: 'I speak …, and … too.' },
      { ar: 'صَدِيقِي / صَدِيقَتِي اسْمُهُ / اسْمُهَا ______ .', en: 'My friend is called …' },
      { ar: 'شُكْرًا، وَمَعَ السَّلَامَةِ!', en: 'Thank you, and goodbye!' },
    ],
    developFrames: [
      { ar: '… ، لٰكِنَّ عَائِلَتِي مِنْ ______ .', en: '…, but my family is from …' },
      { ar: 'أُرِيدُ صَدِيقًا بِالمُرَاسَلَةِ لِأَنِّي ______ .', en: 'I want a pen-friend because I …' },
      { ar: 'وَهُوَ / وَهِيَ ______ جِدًّا.', en: 'And he / she is very …' },
    ],
    bank: ['وَ', 'أَيْضًا', 'ثُمَّ', 'لِأَنَّ · لِأَنِّي', 'لٰكِنَّ', 'جِدًّا', 'اسْمُهُ · اسْمُهَا', 'يَسْكُنُ · تَسْكُنُ'],
    model: {
      text: 'السَّلَامُ عَلَيْكُمْ! اسْمِي هِنْدٌ، وَعُمْرِي ثَلَاثَ عَشْرَةَ سَنَةً. أَنَا بِرِيطَانِيَّةٌ، لٰكِنَّ عَائِلَتِي مِنْ لِيبِيَا، وَأَسْكُنُ فِي مَانْشِسْتَرَ. أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ، وَالعَرَبِيَّةَ أَيْضًا. صَدِيقَتِي اسْمُهَا آمِنَةُ، وَعُمْرُهَا أَرْبَعَ عَشْرَةَ سَنَةً، وَهِيَ لَطِيفَةٌ جِدًّا. أُرِيدُ صَدِيقَةً بِالمُرَاسَلَةِ لِأَنِّي أُحِبُّ اللُّغَةَ العَرَبِيَّةَ، وَأُرِيدُ أَنْ أَتَكَلَّمَ كَثِيرًا. شُكْرًا، وَمَعَ السَّلَامَةِ!',
      en: '“Peace be upon you! My name is Hind, and I am thirteen. I am British, but my family is from Libya, and I live in Manchester. I speak English, and Arabic too. My friend is called Amina; she is fourteen, and she is very kind. I want a (girl) pen-friend because I love the Arabic language, and I want to speak a lot. Thank you, and goodbye!”',
      find: ['لٰكِنَّ عَائِلَتِي مِنْ لِيبِيَا', 'وَالعَرَبِيَّةَ أَيْضًا', 'اسْمُهَا آمِنَةُ', 'لِأَنِّي أُحِبُّ'],
    },
  },
});
