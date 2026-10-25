'use strict';
/* Practice Room · D6-L06 · Arabic around the world — the language’s global reach. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd6-l06',
  arShort: 'العَرَبِيَّةُ حَوْلَ العَالَمِ',
  grammar: 'status: tuʿaddu min akthari al-lughāti intishāran · iḥdā lughāti al-umami al-muttaḥida; numbers: yablughu ʿadadu al-mutaḥaddithīna … · malāyīn; words Arabic gave the world (al-jabr · sukkar · ṣifr · qahwa); what it does for me (taftaḥu lī abwāban · tarbuṭunī bi- …); a supported argument',
  focus: 'Students run their own speaking and writing practice arguing for Arabic: say the status and numbers phrases, act a dialogue about why learn Arabic, answer question cards, do a role-play card persuading a younger student to choose Arabic, give a one-minute persuasive talk, then build, fix and write a persuasive paragraph for an options evening.',
  words1: 'Status and numbers', words2: 'Arabic in the world',
  dialogue: {
    title: 'Why learn Arabic?', ar: 'لِمَاذَا نَتَعَلَّمُ العَرَبِيَّةَ؟',
    lines: [
      ['A', 'لِمَاذَا تَدْرُسُ العَرَبِيَّةَ؟', 'Why do you study Arabic?'],
      ['B', 'لِأَنَّهَا تُعَدُّ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارًا فِي العَالَمِ.', 'Because it is counted among the most widespread languages in the world.'],
      ['A', 'كَمْ عَدَدُ المُتَحَدِّثِينَ بِهَا؟', 'How many speakers does it have?'],
      ['B', 'يَبْلُغُ عَدَدُهُمْ أَكْثَرَ مِنْ أَرْبَعِمِئَةِ مِلْيُونٍ، وَهِيَ إِحْدَى لُغَاتِ الأُمَمِ المُتَّحِدَةِ.', 'There are more than four hundred million, and it is one of the UN languages.'],
      ['A', 'وَهَلْ أَخَذَتِ الإِنْجِلِيزِيَّةُ كَلِمَاتٍ مِنْهَا؟', 'And did English take words from it?'],
      ['B', 'نَعَمْ! «الجَبْرُ» وَ«سُكَّرٌ» وَ«قَهْوَةٌ» كَلِمَاتٌ عَرَبِيَّةُ الأَصْلِ. وَهِيَ تَرْبِطُنِي بِعَائِلَتِي وَبِلُغَةِ القُرْآنِ.', 'Yes! “algebra”, “sugar” and “coffee” come from Arabic. And it connects me to my family and the language of the Qur’an.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: give YOUR three reasons for learning Arabic.',
  },
  questions: [
    { q: 'لِمَاذَا تُعَدُّ العَرَبِيَّةُ لُغَةً مُهِمَّةً؟', en: 'Why is Arabic considered important?', start: 'لِأَنَّهَا تُعَدُّ مِنْ …', more: '… وَهِيَ إِحْدَى …' },
    { q: 'كَمْ بَلَدًا تَكُونُ العَرَبِيَّةُ فِيهِ لُغَةً رَسْمِيَّةً؟', en: 'In how many countries is Arabic official?', start: 'هِيَ لُغَةٌ رَسْمِيَّةٌ فِي أَكْثَرَ مِنْ عِشْرِينَ بَلَدًا', more: '…' },
    { q: 'اذْكُرْ ثَلَاثَ كَلِمَاتٍ إِنْجِلِيزِيَّةٍ عَرَبِيَّةِ الأَصْلِ.', en: 'Name three English words of Arabic origin.', start: '«الجَبْرُ» وَ… وَ…', more: '… وَهٰذَا يَدُلُّ عَلَى …' },
    { q: 'كَيْفَ تُسَاعِدُكَ العَرَبِيَّةُ فِي المُسْتَقْبَلِ؟', en: 'How will Arabic help you in future?', start: 'تَفْتَحُ لِي أَبْوَابًا فِي …', more: '… لِأَنَّ …' },
    { q: 'مَا أَصْعَبُ شَيْءٍ فِي العَرَبِيَّةِ؟ وَمَا أَجْمَلُهُ؟', en: 'The hardest and most beautiful things about Arabic?', start: 'أَصْعَبُ شَيْءٍ … ، وَأَجْمَلُ شَيْءٍ …', more: '…' },
  ],
  card: {
    title: 'Role-play card — persuading a younger student to choose Arabic', ar: 'أُقْنِعُ طَالِبًا بِالعَرَبِيَّةِ', you: 'a Year 11 student', them: 'a Year 9 student choosing options',
    tasks: [
      { ex: 'لِمَاذَا أَخْتَارُ العَرَبِيَّةَ؟', task: 'Status argument.', plan: 'الحُجَّةُ ← لِأَنَّهَا تُعَدُّ مِنْ …', model: 'لِأَنَّهَا تُعَدُّ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارًا، وَهِيَ إِحْدَى لُغَاتِ الأُمَمِ المُتَّحِدَةِ السِّتِّ.', modelEn: 'Because it is among the most widespread languages, and one of the six UN languages.' },
      { ex: 'وَهَلْ هِيَ مُفِيدَةٌ لِلْعَمَلِ؟', task: 'Career argument.', plan: 'العَمَلُ ← تَفْتَحُ لَكَ أَبْوَابًا فِي …', model: 'نَعَمْ، تَفْتَحُ لَكَ أَبْوَابًا فِي الصَّحَافَةِ وَالدِّبْلُومَاسِيَّةِ وَالأَعْمَالِ.', modelEn: 'Yes, it opens doors for you in journalism, diplomacy and business.' },
      { ex: 'وَلٰكِنَّهَا صَعْبَةٌ، أَلَيْسَ كَذٰلِكَ؟', task: 'Honest + encouraging.', plan: '', model: 'فِي البِدَايَةِ نَعَمْ، وَلٰكِنْ بَعْدَ سَنَةٍ قَرَأْتُ قِصَصًا كَامِلَةً بِنَفْسِي!', modelEn: 'At first, yes — but after a year I was reading whole stories by myself!' },
      { unexpected: true, ex: 'هَلْ هُنَاكَ كَلِمَاتٌ عَرَبِيَّةٌ أَعْرِفُهَا الآنَ؟', task: 'Surprise them.', plan: '', model: 'طَبْعًا! «سُكَّرٌ» وَ«قُطْنٌ» وَ«صِفْرٌ» — كُلُّهَا جَاءَتْ مِنَ العَرَبِيَّةِ.', modelEn: 'Of course! “sugar”, “cotton” and “zero” all came from Arabic.' },
    ],
    girl: 'to a girl: لَكِ · أَعْرِفُهَا (same)',
    notes: 'tuʿaddu min akthari … + tamyīz in -an (intishāran); iḥdā + plural.',
  },
  talk: {
    title: 'One minute: the case for Arabic', ar: 'لِمَاذَا العَرَبِيَّةُ؟',
    text: 'Make a one-minute persuasive case for Arabic: its status, its numbers, words it gave the world, and what it means to you.',
    routes: {
      core: 'Three reasons with لِأَنَّ.',
      develop: 'Add تُعَدُّ مِنْ … and a number with يَبْلُغُ …',
      stretch: 'Add borrowed words as evidence and a personal reason (تَرْبِطُنِي بِ…).',
    },
  },
  builder: [
    { en: 'Arabic is counted among the most widespread languages.', cols: [['تُعَدُّ العَرَبِيَّةُ', 'يُعَدُّ العَرَبِيَّةُ'], ['مِنْ أَكْثَرِ اللُّغَاتِ', 'مِنْ أَكْثَرُ اللُّغَاتِ'], ['انْتِشَارًا.', 'انْتِشَارٌ.']], key: [0, 0, 0], why: 'f. → تُعَدُّ; مِنْ + genitive; tamyīz in -an.' },
    { en: 'The number of speakers reaches 400 million.', cols: [['يَبْلُغُ', 'تَبْلُغُ'], ['عَدَدُ المُتَحَدِّثِينَ', 'عَدَدَ المُتَحَدِّثُونَ'], ['أَرْبَعَمِئَةِ مِلْيُونٍ.', 'أَرْبَعُمِئَةِ مِلْيُونٍ.']], key: [0, 0, 0], why: 'عَدَدٌ (m.) subject; object of يَبْلُغُ in -a.' },
    { en: 'Arabic connects me to my family.', cols: [['تَرْبِطُنِي', 'يَرْبِطُنِي'], ['العَرَبِيَّةُ', 'العَرَبِيَّةَ'], ['بِعَائِلَتِي.', 'مَعَ عَائِلَتِي.']], key: [0, 0, 0], why: 'تَرْبِطُ X بِ Y.' },
  ],
  errors: [
    { wrong: 'العَرَبِيَّةُ أَحَدُ لُغَاتِ الأُمَمِ المُتَّحِدَةِ.', hint: 'لُغَةٌ is feminine.', right: 'العَرَبِيَّةُ إِحْدَى لُغَاتِ الأُمَمِ المُتَّحِدَةِ.', why: 'Feminine → إِحْدَى.' },
    { wrong: 'تُعَدُّ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارٌ.', hint: 'Tamyīz ending.', right: 'تُعَدُّ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارًا.', why: 'After أَكْثَرُ the noun is accusative: انْتِشَارًا.' },
    { wrong: 'العَرَبِيَّةُ أَهَمُّ لُغَةٍ فِي العَالَمِ.', hint: 'Prove the claim.', right: 'العَرَبِيَّةُ مُهِمَّةٌ؛ فَهِيَ لُغَةٌ رَسْمِيَّةٌ فِي أَكْثَرَ مِنْ عِشْرِينَ بَلَدًا.', why: 'A supported argument uses evidence, not exaggeration.' },
  ],
  task: {
    title: 'A persuasive paragraph for options evening', ar: 'فِقْرَةٌ لِإِقْنَاعِ الطُّلَّابِ',
    text: 'Write a persuasive paragraph (about 60–80 words) for the options-evening leaflet: “Choose Arabic!” Include: • its status (تُعَدُّ مِنْ … / إِحْدَى …) • one number (يَبْلُغُ …) • two words English took from Arabic as evidence • what it opens for the future • what it means to you • a final call to action.',
    phrases: [['تُعَدُّ العَرَبِيَّةُ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارًا', 'Arabic is among the most widespread languages'], ['يَبْلُغُ عَدَدُ المُتَحَدِّثِينَ …', 'the number of speakers reaches …'], ['أَخَذَتِ الإِنْجِلِيزِيَّةُ كَلِمَاتٍ مِثْلَ …', 'English took words like …'], ['تَفْتَحُ لَكَ أَبْوَابًا فِي …', 'it opens doors for you in …']],
    coreFrames: [
      { ar: 'تُعَدُّ العَرَبِيَّةُ مِنْ ______ .', en: 'Arabic is counted among …' },
      { ar: 'يَبْلُغُ عَدَدُ المُتَحَدِّثِينَ بِهَا ______ .', en: 'The number of its speakers reaches …' },
      { ar: 'تَفْتَحُ لَكَ أَبْوَابًا فِي ______ .', en: 'It opens doors for you in …' },
      { ar: 'اخْتَرِ العَرَبِيَّةَ، لِأَنَّ ______ !', en: 'Choose Arabic, because …!' },
    ],
    developFrames: [
      { ar: 'أَخَذَتِ الإِنْجِلِيزِيَّةُ مِنْهَا كَلِمَاتٍ مِثْلَ ______ وَ ______ .', en: 'English took words from it like … and …' },
      { ar: 'بِالنِّسْبَةِ لِي، تَرْبِطُنِي العَرَبِيَّةُ بِ______ .', en: 'For me, Arabic connects me to …' },
    ],
    bank: ['لُغَةٌ رَسْمِيَّةٌ', 'لُغَةُ الأُمَمِ المُتَّحِدَةِ', 'مُتَحَدِّثٌ · مُتَحَدِّثُونَ', 'يُعَدُّ مِنْ · تُعَدُّ مِنْ', 'يَبْلُغُ', 'إِحْدَى', 'الجَبْرُ · سُكَّرٌ · صِفْرٌ', 'تَفْتَحُ أَبْوَابًا'],
    model: {
      text: 'اخْتَرِ العَرَبِيَّةَ! تُعَدُّ العَرَبِيَّةُ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارًا فِي العَالَمِ، وَهِيَ إِحْدَى اللُّغَاتِ الرَّسْمِيَّةِ السِّتِّ فِي الأُمَمِ المُتَّحِدَةِ. يَبْلُغُ عَدَدُ المُتَحَدِّثِينَ بِهَا أَكْثَرَ مِنْ أَرْبَعِمِئَةِ مِلْيُونِ شَخْصٍ. وَقَدْ أَخَذَتِ الإِنْجِلِيزِيَّةُ مِنْهَا كَلِمَاتٍ كَثِيرَةً، مِثْلَ «الجَبْرِ» وَ«الصِّفْرِ» وَ«القَهْوَةِ». تَفْتَحُ لَكَ هٰذِهِ اللُّغَةُ أَبْوَابًا فِي الصَّحَافَةِ وَالطِّبِّ وَالأَعْمَالِ. بِالنِّسْبَةِ لِي، تَرْبِطُنِي العَرَبِيَّةُ بِجَدَّتِي وَبِلُغَةِ القُرْآنِ الكَرِيمِ. اخْتَرْهَا، وَلَنْ تَنْدَمَ!',
      en: '“Choose Arabic! Arabic is among the most widespread languages in the world, and one of the six official UN languages. More than four hundred million people speak it. English has taken many words from it, like “algebra”, “zero” and “coffee”. This language opens doors for you in journalism, medicine and business. For me, Arabic connects me to my grandmother and to the language of the Holy Qur’an. Choose it — you won’t regret it!”',
      find: ['تُعَدُّ العَرَبِيَّةُ مِنْ', 'إِحْدَى اللُّغَاتِ', 'يَبْلُغُ عَدَدُ', 'تَفْتَحُ لَكَ'],
    },
  },
  checkCore: 'support the case with status and one number?',
  checkDevelop: 'use تُعَدُّ مِنْ أَكْثَرِ … + -an, إِحْدَى and evidence words?',
});
