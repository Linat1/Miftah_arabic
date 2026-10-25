'use strict';
/* Practice Room · D5-L08 · Reading — leisure, sport and past-experience texts. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd5-l08',
  arShort: 'أَقْرَأُ نُصُوصَ المَاضِي',
  grammar: 'verb endings reveal the text type (fāza / fāzat = a biography in the third person · ḥajaztu / aqamnā = a personal review); sequence markers (fī al-bidāya · baʿda dhālika · thumma · akhīran); the nearest time marker decides the tense; proving every answer from the Arabic (al-dalīlu fī …)',
  focus: 'Students run their own reading-and-speaking practice with past-tense texts: read short texts aloud, say what type of text each is from the verb endings, put events in order, choose the tense from the nearest time marker, and prove every answer. They do a role-play card at a book club, give a one-minute summary, then build, fix and write a short biography.',
  words1: 'Text types', words2: 'Reading for evidence',
  dialogue: {
    title: 'What kind of text is this?', ar: 'مَا نَوْعُ هٰذَا النَّصِّ؟',
    lines: [
      ['A', '«وُلِدَتْ فِي القَاهِرَةِ، وَفَازَتْ بِأَوَّلِ مِيدَالْيَةٍ وَهِيَ فِي الخَامِسَةَ عَشْرَةَ.»', '“She was born in Cairo, and won her first medal at fifteen.”'],
      ['B', 'فَازَتْ = هِيَ. هٰذِهِ سِيرَةٌ ذَاتِيَّةٌ عَنْ رِيَاضِيَّةٍ.', 'fāzat = she. This is a biography of a sportswoman.'],
      ['A', '«حَجَزْنَا الفُنْدُقَ عَلَى الإِنْتَرْنِت، وَأَقَمْنَا فِيهِ ثَلَاثَ لَيَالٍ.»', '“We booked the hotel online, and stayed three nights.”'],
      ['B', 'حَجَزْنَا وَأَقَمْنَا = نَحْنُ. هٰذِهِ مُرَاجَعَةٌ شَخْصِيَّةٌ.', 'ḥajaznā and aqamnā = we. This is a personal review.'],
      ['A', '«فِي البِدَايَةِ تَدَرَّبَ وَحْدَهُ، ثُمَّ انْضَمَّ إِلَى فَرِيقٍ، وَأَخِيرًا أَصْبَحَ قَائِدًا.»', '“At first he trained alone, then joined a team, and finally became captain.”'],
      ['B', 'التَّسَلْسُلُ: وَحْدَهُ ← فَرِيقٌ ← قَائِدٌ. الدَّلِيلُ: «فِي البِدَايَةِ · ثُمَّ · أَخِيرًا».', 'The sequence: alone → team → captain. The evidence: “at first · then · finally”.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: A reads one sentence from any text; B names the person, the type and the evidence.',
  },
  qTitle: 'Text detective — type, order, tense, proof',
  questions: [
    { q: '«سَافَرْتُ إِلَى جِدَّةَ، وَاسْتَمْتَعْتُ بِالبَحْرِ.» — مَنْ يَتَكَلَّمُ؟', en: '“I travelled to Jeddah and enjoyed the sea.” — Who is speaking?', start: 'المُتَكَلِّمُ نَفْسُهُ؛ الدَّلِيلُ …', more: '… التَّاءُ فِي «سَافَرْتُ»' },
    { q: '«أَمْسِ لَعِبَ أَخِي، وَغَدًا سَيَلْعَبُ مَرَّةً أُخْرَى.» — مَتَى سَيَلْعَبُ مَرَّةً أُخْرَى؟', en: '“Yesterday my brother played; tomorrow he will play again.” — When again?', start: 'غَدًا …', more: 'الدَّلِيلُ: «سَيَلْعَبُ»' },
    { q: '«بَعْدَ ذٰلِكَ زَارُوا المَتْحَفَ، وَقَبْلَ ذٰلِكَ أَكَلُوا.» — مَاذَا فَعَلُوا أَوَّلًا؟', en: '“After that they visited the museum, and before that they ate.” — What first?', start: 'أَكَلُوا أَوَّلًا …', more: 'Trap: «بَعْدَ ذٰلِكَ» جَاءَ أَوَّلًا فِي النَّصِّ' },
    { q: '«كَانَتِ الرِّحْلَةُ طَوِيلَةً، وَلٰكِنَّ الفُنْدُقَ كَانَ مُمْتَازًا.» — مَا رَأْيُ الكَاتِبِ فِي الفُنْدُقِ؟', en: '“The trip was long, but the hotel was excellent.” — View of the hotel?', start: 'رَأْيُهُ إِيجَابِيٌّ …', more: 'الدَّلِيلُ: «مُمْتَازًا»' },
    { q: 'مَا الفِكْرَةُ الرَّئِيسِيَّةُ فِي سِيرَةِ رِيَاضِيٍّ؟', en: 'The main idea of an athlete’s biography?', start: 'تَتَحَدَّثُ عَنْ …', more: '… وَكَيْفَ نَجَحَ …' },
  ],
  card: {
    title: 'Role-play card — the book club: a sports biography', ar: 'نَادِي الكِتَابِ', you: 'a reader who finished the book', them: 'the club leader',
    tasks: [
      { ex: 'عَنْ مَنْ يَتَحَدَّثُ الكِتَابُ؟', task: 'Person + type.', plan: 'الكِتَابُ ← سِيرَةٌ ذَاتِيَّةٌ عَنْ …', model: 'هُوَ سِيرَةٌ ذَاتِيَّةٌ عَنْ عَدَّاءٍ مَغْرِبِيٍّ مَشْهُورٍ.', modelEn: 'It is a biography of a famous Moroccan runner.' },
      { ex: 'مَاذَا حَدَثَ فِي بِدَايَةِ حَيَاتِهِ؟', task: 'Early events in order.', plan: 'البِدَايَةُ ← فِي البِدَايَةِ … ثُمَّ …', model: 'فِي البِدَايَةِ كَانَ يَرْكُضُ إِلَى المَدْرَسَةِ كُلَّ يَوْمٍ، ثُمَّ اكْتَشَفَهُ مُدَرِّبٌ.', modelEn: 'At first he used to run to school every day, then a coach discovered him.' },
      { ex: 'وَمَا أَهَمُّ إِنْجَازٍ؟', task: 'Achievement + evidence.', plan: '', model: 'فَازَ بِمِيدَالْيَةٍ ذَهَبِيَّةٍ؛ الدَّلِيلُ فِي الفَصْلِ الأَخِيرِ.', modelEn: 'He won a gold medal — the evidence is in the last chapter.' },
      { unexpected: true, ex: 'هَلْ تَنْصَحُ بِهٰذَا الكِتَابِ؟', task: 'Recommend + reason.', plan: '', model: 'نَعَمْ، لِأَنَّهُ يُبَيِّنُ أَنَّ الصَّبْرَ يُؤَدِّي إِلَى النَّجَاحِ.', modelEn: 'Yes, because it shows that patience leads to success.' },
    ],
    girl: 'leader to a girl: تَنْصَحِينَ',
    notes: 'Every answer = statement + al-dalīlu … (quote or chapter).',
  },
  talk: {
    title: 'One minute: summarise a story or biography', ar: 'أُلَخِّصُ قِصَّةً',
    text: 'Summarise for one minute a story, film or biography you know: who, what happened in order, and the main idea.',
    routes: {
      core: 'Who + three events in the past.',
      develop: 'Add sequence markers (فِي البِدَايَةِ · ثُمَّ · بَعْدَ ذٰلِكَ · أَخِيرًا).',
      stretch: 'Add the main idea (الفِكْرَةُ الرَّئِيسِيَّةُ …) and a recommendation.',
    },
  },
  builder: [
    { en: 'At first she trained alone.', cols: [['فِي البِدَايَةِ', 'فِي النِّهَايَةِ'], ['تَدَرَّبَتْ', 'تَدَرَّبْتُ'], ['وَحْدَهَا.', 'وَحْدَهُ.']], key: [0, 0, 0], why: 'She → -at; her → -hā.' },
    { en: 'The evidence is in the second line.', cols: [['الدَّلِيلُ', 'الدَّلِيلَ'], ['فِي السَّطْرِ', 'فِي السَّطْرُ'], ['الثَّانِي.', 'الثَّانِيَةِ.']], key: [0, 0, 0], why: 'سَطْرٌ (m.) → الثَّانِي.' },
    { en: 'The text refers to a famous trip.', cols: [['يُشِيرُ', 'تُشِيرُ'], ['النَّصُّ', 'النَّصَّ'], ['إِلَى رِحْلَةٍ مَشْهُورَةٍ.', 'عَلَى رِحْلَةٍ مَشْهُورَةٍ.']], key: [0, 0, 0], why: 'نَصٌّ (m.) → يُشِيرُ إِلَى.' },
  ],
  errors: [
    { wrong: '«فَازَتْ بِالكَأْسِ» ← هٰذِهِ مُرَاجَعَةٌ شَخْصِيَّةٌ.', hint: 'Look at the ending.', right: 'هٰذِهِ سِيرَةٌ ذَاتِيَّةٌ عَنْهَا.', why: 'فَازَتْ = she → a text about someone else.' },
    { wrong: '«بَعْدَ ذٰلِكَ سَبَحْنَا، وَقَبْلَ ذٰلِكَ أَكَلْنَا» ← سَبَحُوا أَوَّلًا.', hint: 'Follow the markers, not the order of the words.', right: 'أَكَلُوا أَوَّلًا، ثُمَّ سَبَحُوا.', why: 'قَبْلَ ذٰلِكَ = earlier.' },
    { wrong: 'الكَاتِبُ أَحَبَّ الفُنْدُقَ.', hint: 'Prove it!', right: 'الكَاتِبُ أَحَبَّ الفُنْدُقَ؛ الدَّلِيلُ أَنَّهُ قَالَ «كَانَ مُمْتَازًا».', why: 'Every answer needs evidence from the text.' },
  ],
  task: {
    title: 'A short biography', ar: 'سِيرَةٌ ذَاتِيَّةٌ قَصِيرَةٌ',
    text: 'Write a short biography (about 60–80 words) of a person you admire (a family member, an athlete, an artist). Write in the third person (-a / -at). Include: • where they were born and grew up • four events in order with sequence markers • one achievement • what they do now • the main idea of their life (in one sentence).',
    phrases: [['وُلِدَ / وُلِدَتْ فِي …', 'he / she was born in …'], ['فِي البِدَايَةِ … ثُمَّ … بَعْدَ ذٰلِكَ … أَخِيرًا …', 'at first … then … after that … finally …'], ['فَازَ / فَازَتْ بِ… · أَصْبَحَ / أَصْبَحَتْ …', 'won … · became …'], ['الفِكْرَةُ الرَّئِيسِيَّةُ أَنَّ …', 'the main idea is that …']],
    coreFrames: [
      { ar: 'وُلِدَ / وُلِدَتْ ______ فِي ______ عَامَ ______ .', en: '… was born in … in (year) …' },
      { ar: 'فِي البِدَايَةِ ______ .', en: 'At first …' },
      { ar: 'ثُمَّ ______ ، وَبَعْدَ ذٰلِكَ ______ .', en: 'Then …, and after that …' },
      { ar: 'أَخِيرًا أَصْبَحَ / أَصْبَحَتْ ______ .', en: 'Finally he / she became …' },
    ],
    developFrames: [
      { ar: 'أَهَمُّ إِنْجَازٍ لَهُ / لَهَا ______ .', en: 'His / her greatest achievement …' },
      { ar: 'الفِكْرَةُ الرَّئِيسِيَّةُ فِي حَيَاتِهِ / حَيَاتِهَا أَنَّ ______ .', en: 'The main idea of his / her life is that …' },
    ],
    bank: ['سِيرَةٌ ذَاتِيَّةٌ', 'مُرَاجَعَةٌ · تَقْرِيرٌ', 'تَسَلْسُلُ الأَحْدَاثِ', 'دَلِيلٌ مِنَ النَّصِّ', 'الفِكْرَةُ الرَّئِيسِيَّةُ', 'وُلِدَ · وُلِدَتْ', 'فِي البِدَايَةِ · أَخِيرًا', 'أَصْبَحَ · أَصْبَحَتْ'],
    model: {
      text: 'وُلِدَتْ خَالَتِي فَاطِمَةُ فِي قَرْيَةٍ صَغِيرَةٍ فِي بَاكِسْتَانَ عَامَ ١٩٨٥. فِي البِدَايَةِ دَرَسَتْ فِي مَدْرَسَةِ القَرْيَةِ، وَكَانَتْ تَمْشِي سَاعَةً كُلَّ يَوْمٍ. ثُمَّ انْتَقَلَتْ مَعَ عَائِلَتِهَا إِلَى بِرْمِنْغْهَامَ، وَتَعَلَّمَتِ الإِنْجِلِيزِيَّةَ بِسُرْعَةٍ. بَعْدَ ذٰلِكَ دَرَسَتِ الصَّيْدَلَةَ فِي الجَامِعَةِ. أَهَمُّ إِنْجَازٍ لَهَا أَنَّهَا فَتَحَتْ صَيْدَلِيَّتَهَا الخَاصَّةَ. أَخِيرًا أَصْبَحَتْ مُدِيرَةً لِثَلَاثِ صَيْدَلِيَّاتٍ. الفِكْرَةُ الرَّئِيسِيَّةُ فِي حَيَاتِهَا أَنَّ العَمَلَ الجَادَّ يُغَيِّرُ المُسْتَقْبَلَ.',
      en: '“My aunt Fatima was born in a small village in Pakistan in 1985. At first she studied at the village school, and used to walk an hour every day. Then she moved with her family to Birmingham, and learned English quickly. After that she studied pharmacy at university. Her greatest achievement is that she opened her own pharmacy. Finally she became the manager of three pharmacies. The main idea of her life is that hard work changes the future.”',
      find: ['وُلِدَتْ', 'فِي البِدَايَةِ', 'بَعْدَ ذٰلِكَ', 'أَخِيرًا أَصْبَحَتْ'],
    },
  },
  checkCore: 'tell the life in order in the third person (-a / -at)?',
  checkDevelop: 'use sequence markers and give the main idea in one sentence?',
});
