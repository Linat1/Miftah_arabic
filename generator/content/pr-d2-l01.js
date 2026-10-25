'use strict';
/* Practice Room · D2-L01 · Personality adjectives — what is he / she like? Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd2-l01',
  arShort: 'كَيْفَ شَخْصِيَّتُهُ؟',
  grammar: 'adjective agreement: masculine (ṣabūrun) · feminine with tāʾ marbūṭa (ṣabūratun) · plural (mujtahidūna / mujtahidātun); intensity: jiddan · nawʿan mā · laysa / laysat … ; evidence with li-annahu / li-annahā + a behaviour',
  focus: 'Students run their own speaking and writing practice describing personality: say the adjectives in masculine and feminine, act a short dialogue, answer question cards with evidence, do a role-play card choosing a team captain, give a one-minute talk about two people, then build, fix and write a description of a friend and a family member.',
  words1: 'Personality (1)', words2: 'Personality (2)',
  dialogue: {
    title: 'What is your new friend like?', ar: 'كَيْفَ صَدِيقَتُكِ الجَدِيدَةُ؟',
    lines: [
      ['A', 'كَيْفَ صَدِيقَتُكِ الجَدِيدَةُ؟', 'What is your new friend like?'],
      ['B', 'هِيَ وَدُودَةٌ جِدًّا وَمَرِحَةٌ.', 'She is very friendly and cheerful.'],
      ['A', 'لِمَاذَا تَقُولِينَ ذٰلِكَ؟', 'Why do you say that?'],
      ['B', 'لِأَنَّهَا تَبْتَسِمُ دَائِمًا، وَتُسَاعِدُ الطَّالِبَاتِ الجُدُدَ.', 'Because she always smiles and helps the new students.'],
      ['A', 'وَهَلْ هِيَ خَجُولَةٌ؟', 'And is she shy?'],
      ['B', 'نَوْعًا مَا فِي البِدَايَةِ، وَلٰكِنَّهَا وَاثِقَةٌ الآنَ.', 'A bit at the start, but she is confident now.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: talk about a BOY — change every adjective and every -hā to -hu.',
  },
  questions: [
    { q: 'كَيْفَ شَخْصِيَّتُكَ؟', en: 'What is your personality like?', start: 'أَنَا … وَ …', more: '… لِأَنَّنِي …' },
    { q: 'مَنْ أَكْثَرُ شَخْصٍ صَبُورٍ فِي عَائِلَتِكَ؟', en: 'Who is the most patient person in your family?', start: 'أُمِّي صَبُورَةٌ جِدًّا …', more: '… لِأَنَّهَا …' },
    { q: 'صِفْ صَدِيقَكَ المُقَرَّبَ.', en: 'Describe your close friend.', start: 'صَدِيقِي … وَ …', more: '… وَلٰكِنَّهُ أَحْيَانًا …' },
    { q: 'مَا الصِّفَةُ الَّتِي لَا تُحِبُّهَا؟', en: 'Which quality don’t you like?', start: 'لَا أُحِبُّ الشَّخْصَ الأَنَانِيَّ …', more: '… لِأَنَّ …' },
    { q: 'هَلْ مُعَلِّمُوكَ صَبُورُونَ؟', en: 'Are your teachers patient?', start: 'نَعَمْ، مُعَلِّمُونَا … / مُعَلِّمَاتُنَا …', more: '… عَلَى سَبِيلِ المِثَالِ …' },
  ],
  card: {
    title: 'Role-play card — choosing a team captain', ar: 'اخْتِيَارُ قَائِدِ الفَرِيقِ', you: 'a team member', them: 'the PE teacher',
    tasks: [
      { ex: 'مَنْ تَقْتَرِحُ قَائِدًا لِلْفَرِيقِ؟', task: 'Name + two qualities.', plan: 'مَنْ ← أَقْتَرِحُ … لِأَنَّهُ … وَ…', model: 'أَقْتَرِحُ سَامِرًا، لِأَنَّهُ وَاثِقٌ وَمُتَعَاوِنٌ.', modelEn: 'I suggest Samer, because he is confident and cooperative.' },
      { ex: 'أَعْطِنِي مِثَالًا.', task: 'Evidence: a behaviour.', plan: 'مِثَالٌ ← مَثَلًا، يُسَاعِدُ …', model: 'مَثَلًا، يُسَاعِدُ اللَّاعِبِينَ الجُدُدَ بَعْدَ كُلِّ تَدْرِيبٍ.', modelEn: 'For example, he helps the new players after every training session.' },
      { ex: 'وَمَا رَأْيُكَ فِي رِيمَ؟', task: 'Feminine + softened.', plan: '', model: 'رِيمُ مُجْتَهِدَةٌ جِدًّا، وَلٰكِنَّهَا خَجُولَةٌ نَوْعًا مَا.', modelEn: 'Reem is very hard-working, but she is a bit shy.' },
      { unexpected: true, ex: 'هَلْ عِنْدَ سَامِرٍ صِفَةٌ سَلْبِيَّةٌ؟', task: 'Answer the surprise question.', plan: '', model: 'أَحْيَانًا هُوَ عَصَبِيٌّ قَلِيلًا عِنْدَمَا نَخْسَرُ، لٰكِنَّهُ يَعْتَذِرُ دَائِمًا.', modelEn: 'Sometimes he is a bit irritable when we lose, but he always apologises.' },
    ],
    girl: 'تَقْتَرِحِينَ · رَأْيُكِ (the adjectives stay about Samer and Reem)',
    notes: 'Every quality needs evidence: li-annahu / li-annahā + a real behaviour.',
  },
  talk: {
    title: 'One minute: two people I admire', ar: 'شَخْصَانِ أُعْجَبُ بِهِمَا',
    text: 'Describe one male and one female person you admire for one minute: three qualities each, with evidence.',
    routes: {
      core: 'Three adjectives for him and three for her — with the right ending.',
      develop: 'Add جِدًّا / نَوْعًا مَا / لَيْسَ … and one لِأَنَّهُ / لِأَنَّهَا each.',
      stretch: 'Add a behaviour example for every quality and one plural (هُمْ كُرَمَاءُ …).',
    },
  },
  builder: [
    { en: 'My sister is very patient.', cols: [['أُخْتِي', 'أَخِي'], ['صَبُورَةٌ', 'صَبُورٌ'], ['جِدًّا.', 'جِدًّا جِدًّا.']], key: [0, 0, 0], why: 'Sister (f.) → صَبُورَةٌ.' },
    { en: 'He isn’t selfish, because he shares everything.', cols: [['لَيْسَ أَنَانِيًّا،', 'لَيْسَ أَنَانِيٌّ،'], ['لِأَنَّهُ', 'لِأَنَّهَا'], ['يُشَارِكُ كُلَّ شَيْءٍ.', 'تُشَارِكُ كُلَّ شَيْءٍ.']], key: [0, 0, 0], why: 'لَيْسَ + accusative (أَنَانِيًّا); he → لِأَنَّهُ يُ….' },
    { en: 'My classmates are hard-working and helpful.', cols: [['زُمَلَائِي', 'زَمِيلِي'], ['مُجْتَهِدُونَ', 'مُجْتَهِدٌ'], ['وَمُتَعَاوِنُونَ.', 'وَمُتَعَاوِنَةٌ.']], key: [0, 0, 0], why: 'Plural people → plural adjectives -ūna, both of them.' },
  ],
  errors: [
    { wrong: 'أُمِّي صَبُورٌ وَكَرِيمٌ.', hint: 'Mother → ?', right: 'أُمِّي صَبُورَةٌ وَكَرِيمَةٌ.', why: 'Feminine subject → add tāʾ marbūṭa.' },
    { wrong: 'لَيْسَتْ أُخْتِي خَجُولَةٌ.', hint: 'After لَيْسَ / لَيْسَتْ …', right: 'لَيْسَتْ أُخْتِي خَجُولَةً.', why: 'لَيْسَتْ makes the adjective accusative: خَجُولَةً.' },
    { wrong: 'صَدِيقِي مَرِحٌ لِأَنَّهَا تَضْحَكُ كَثِيرًا.', hint: 'Who laughs?', right: 'صَدِيقِي مَرِحٌ لِأَنَّهُ يَضْحَكُ كَثِيرًا.', why: 'He → لِأَنَّهُ + ya- verb.' },
  ],
  task: {
    title: 'Two people, two personalities', ar: 'شَخْصَانِ وَشَخْصِيَّتَانِ',
    text: 'Write a description (about 60–80 words) of a friend and a family member (one male, one female). Include: • three qualities for each, with correct agreement • one quality made stronger (جِدًّا) and one softer (نَوْعًا مَا) • a negative with لَيْسَ / لَيْسَتْ • evidence with لِأَنَّهُ / لِأَنَّهَا for at least two qualities.',
    phrases: [['هُوَ … جِدًّا · هِيَ … نَوْعًا مَا', 'he is very … · she is fairly …'], ['لَيْسَ … / لَيْسَتْ …', 'he isn’t … / she isn’t …'], ['لِأَنَّهُ يُسَاعِدُ … · لِأَنَّهَا تَسْمَعُ …', 'because he helps … · because she listens …'], ['وَلٰكِنَّهُ / وَلٰكِنَّهَا أَحْيَانًا …', 'but sometimes he / she …']],
    coreFrames: [
      { ar: 'صَدِيقِي / صَدِيقَتِي ______ وَ ______ .', en: 'My friend is … and …' },
      { ar: 'هُوَ / هِيَ ______ جِدًّا، لِأَنَّهُ / لِأَنَّهَا ______ .', en: 'He / she is very …, because …' },
      { ar: 'أَخِي / أُخْتِي ______ نَوْعًا مَا.', en: 'My brother / sister is fairly …' },
      { ar: 'لَيْسَ / لَيْسَتْ ______ .', en: 'He / she isn’t …' },
    ],
    developFrames: [
      { ar: '______ ، وَلٰكِنَّهُ / وَلٰكِنَّهَا أَحْيَانًا ______ .', en: '…, but sometimes he / she …' },
      { ar: 'مَثَلًا، ______ .', en: 'For example, …' },
    ],
    bank: ['وَدُودٌ · وَدُودَةٌ', 'صَبُورٌ · صَبُورَةٌ', 'مُجْتَهِدٌ · مُجْتَهِدَةٌ', 'كَرِيمٌ · كَرِيمَةٌ', 'خَجُولٌ · خَجُولَةٌ', 'جِدًّا · نَوْعًا مَا', 'لَيْسَ · لَيْسَتْ', 'لِأَنَّهُ · لِأَنَّهَا'],
    model: {
      text: 'صَدِيقِي يُوسُفُ مَرِحٌ وَصَادِقٌ وَكَرِيمٌ. هُوَ مَرِحٌ جِدًّا، لِأَنَّهُ يُضْحِكُنَا دَائِمًا فِي الاسْتِرَاحَةِ. وَهُوَ كَرِيمٌ، فَمَثَلًا يُشَارِكُ طَعَامَهُ مَعَ الجَمِيعِ. لَيْسَ أَنَانِيًّا أَبَدًا. أَمَّا جَدَّتِي فَهِيَ هَادِئَةٌ وَصَبُورَةٌ وَحَكِيمَةٌ. هِيَ صَبُورَةٌ لِأَنَّهَا تَسْمَعُ مُشْكِلَاتِي بِدُونِ مَلَلٍ، وَتُعْطِينِي نَصَائِحَ مُفِيدَةً. لَيْسَتْ عَصَبِيَّةً، وَلٰكِنَّهَا صَارِمَةٌ نَوْعًا مَا عِنْدَمَا نَتَأَخَّرُ عَنِ الصَّلَاةِ. أُحِبُّهُمَا كَثِيرًا، لِأَنَّهُمَا يَجْعَلَانِ حَيَاتِي أَجْمَلَ.',
      en: '“My friend Yusuf is cheerful, honest and generous. He is very cheerful, because he always makes us laugh at break. And he is generous — for example, he shares his food with everyone. He is never selfish. As for my grandmother, she is calm, patient and wise. She is patient because she listens to my problems without getting bored and gives me useful advice. She isn’t irritable, but she is fairly strict when we are late for prayer. I love them both, because they make my life more beautiful.”',
      find: ['مَرِحٌ جِدًّا، لِأَنَّهُ', 'لَيْسَ أَنَانِيًّا', 'صَبُورَةٌ لِأَنَّهَا', 'صَارِمَةٌ نَوْعًا مَا'],
    },
  },
  checkCore: 'make every adjective agree (m. / f. / pl.)?',
  checkDevelop: 'use لَيْسَ + -an, جِدًّا / نَوْعًا مَا and evidence with لِأَنَّهُ / لِأَنَّهَا?',
});
