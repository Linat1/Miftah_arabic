'use strict';
/* Practice Room · D1-L06 · He and she — describing someone else's routine. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd1-l06',
  arShort: 'رُوتِينُهُ وَرُوتِينُهَا',
  grammar: 'third person: ya- prefix for he (yastayqiẓu) and ta- for she (tastayqiẓu); possessive -hu / -hā on every noun (ḥaqībatuhu · ḥaqībatuhā); comparing with baynamā · amma … fa- · akthara min · mithla',
  focus: 'Students run their own speaking and writing practice describing another person’s routine: say the he / she verbs, act a short dialogue, answer cards about a family member, do a role-play card interviewing for a school magazine, give a one-minute he / she comparison, then build, fix and write a profile comparing two people’s days.',
  words1: 'His day', words2: 'Her day and comparing',
  dialogue: {
    title: 'Tell me about your brother’s day', ar: 'كَيْفَ يَوْمُ أَخِيكَ؟',
    lines: [
      ['A', 'مَتَى يَسْتَيْقِظُ أَخُوكَ؟', 'When does your brother wake up?'],
      ['B', 'يَسْتَيْقِظُ فِي السَّادِسَةِ، لِأَنَّ عَمَلَهُ بَعِيدٌ عَنِ البَيْتِ.', 'He wakes up at six, because his work is far from the house.'],
      ['A', 'وَأُخْتُكَ؟', 'And your sister?'],
      ['B', 'هِيَ تَسْتَيْقِظُ فِي السَّابِعَةِ وَالنِّصْفِ، وَتَمْشِي إِلَى جَامِعَتِهَا.', 'She wakes up at half past seven and walks to her university.'],
      ['A', 'مَنْ يَرْجِعُ إِلَى البَيْتِ أَوَّلًا؟', 'Who gets home first?'],
      ['B', 'أُخْتِي تَرْجِعُ فِي الثَّالِثَةِ، بَيْنَمَا يَرْجِعُ أَخِي فِي السَّابِعَةِ مَسَاءً.', 'My sister gets home at three, whereas my brother gets home at seven in the evening.'],
    ],
    foot: 'Round 1: read it in pairs. Round 2: swap letters. Round 3: talk about two REAL people in your family — check every verb: he or she?',
  },
  questions: [
    { q: 'مَتَى يَسْتَيْقِظُ أَبُوكَ؟', en: 'When does your father wake up?', start: 'يَسْتَيْقِظُ أَبِي فِي …', more: '… لِأَنَّ عَمَلَهُ …' },
    { q: 'مَاذَا تَفْعَلُ أُمُّكَ فِي الصَّبَاحِ؟', en: 'What does your mother do in the morning?', start: 'أُمِّي تُحَضِّرُ … / تَذْهَبُ …', more: '… ثُمَّ تَعْمَلُ …' },
    { q: 'كَيْفَ يَذْهَبُ صَدِيقُكَ إِلَى المَدْرَسَةِ؟', en: 'How does your friend go to school?', start: 'يَذْهَبُ مَشْيًا / بِالسَّيَّارَةِ', more: '… مَعَ أَخِيهِ' },
    { q: 'مَا رُوتِينُ أُخْتِكَ فِي المَسَاءِ؟', en: 'What is your sister’s evening routine?', start: 'فِي المَسَاءِ تُرَاجِعُ …', more: '… ثُمَّ تَنَامُ فِي …' },
    { q: 'قَارِنْ رُوتِينَكَ بِرُوتِينِ صَدِيقِكَ.', en: 'Compare your routine with your friend’s.', start: 'أَنَا أَسْتَيْقِظُ …، بَيْنَمَا هُوَ …', more: '… أَمَّا فِي المَسَاءِ فَ…' },
  ],
  card: {
    title: 'Role-play card — the school magazine: “A day with our caretaker”', ar: 'يَوْمٌ مَعَ حَارِسِ المَدْرَسَةِ', you: 'the student journalist', them: 'the editor of the magazine',
    tasks: [
      { ex: 'مَتَى يَبْدَأُ يَوْمُهُ؟', task: 'His start time.', plan: 'مَتَى ← يَبْدَأُ يَوْمُهُ فِي …', model: 'يَبْدَأُ يَوْمُهُ فِي الخَامِسَةِ وَالنِّصْفِ صَبَاحًا.', modelEn: 'His day starts at half past five in the morning.' },
      { ex: 'وَمَاذَا يَفْعَلُ أَوَّلًا؟', task: 'Two of his actions.', plan: 'مَاذَا ← يَفْتَحُ … ثُمَّ يُنَظِّفُ …', model: 'يَفْتَحُ الأَبْوَابَ، ثُمَّ يُنَظِّفُ السَّاحَةَ قَبْلَ وُصُولِ الطُّلَّابِ.', modelEn: 'He opens the doors, then cleans the yard before the students arrive.' },
      { ex: 'وَزَوْجَتُهُ تَعْمَلُ فِي المَدْرَسَةِ أَيْضًا؟', task: 'Her routine — change the verbs.', plan: '', model: 'نَعَمْ، هِيَ تَعْمَلُ فِي المَقْصَفِ، وَتَبْدَأُ عَمَلَهَا فِي التَّاسِعَةِ.', modelEn: 'Yes, she works in the canteen and starts her work at nine.' },
      { unexpected: true, ex: 'مَا أَصْعَبُ شَيْءٍ فِي يَوْمِهِ؟', task: 'Answer the surprise question.', plan: '', model: 'أَصْعَبُ شَيْءٍ أَنَّهُ يَعْمَلُ عَشْرَ سَاعَاتٍ، وَلَا يَرْجِعُ إِلَى بَيْتِهِ قَبْلَ السَّادِسَةِ.', modelEn: 'The hardest thing is that he works ten hours and doesn’t get home before six.' },
    ],
    girl: 'no changes — you are describing him and her',
    notes: 'Every verb about him starts ya-, about her ta-; every noun takes -hu / -hā.',
  },
  talk: {
    title: 'One minute: two people, two days', ar: 'شَخْصَانِ وَيَوْمَانِ',
    text: 'Choose one male and one female person you know. Describe and compare their routines for one minute with times.',
    routes: {
      core: 'Three sentences about him (ya- verbs: يَعْمَلُ) and three about her (ta- verbs: تَعْمَلُ).',
      develop: 'Add -hu / -hā on nouns (عَمَلُهُ · مَدْرَسَتُهَا) and بَيْنَمَا.',
      stretch: 'Add أَمَّا … فَ… (contrast), أَكْثَرُ مِنْ … and your opinion of whose day is harder.',
    },
  },
  builder: [
    { en: 'She revises her lessons every evening.', cols: [['تُرَاجِعُ', 'يُرَاجِعُ'], ['دُرُوسَهَا', 'دُرُوسَهُ'], ['كُلَّ مَسَاءٍ.', 'كُلُّ مَسَاءٍ.']], key: [0, 0, 0], why: 'She → ta- verb + -hā on the noun.' },
    { en: 'My father leaves his house at seven.', cols: [['يَخْرُجُ أَبِي', 'تَخْرُجُ أَبِي'], ['مِنْ بَيْتِهِ', 'مِنْ بَيْتِهَا'], ['فِي السَّابِعَةِ.', 'فِي سَبْعَةٍ.']], key: [0, 0, 0], why: 'Father → ya- + -hi; clock time = ordinal.' },
    { en: 'He sleeps early, whereas she stays up.', cols: [['يَنَامُ مُبَكِّرًا،', 'تَنَامُ مُبَكِّرًا،'], ['بَيْنَمَا', 'لِأَنَّ'], ['تَسْهَرُ هِيَ.', 'يَسْهَرُ هِيَ.']], key: [0, 0, 0], why: 'Whereas = بَيْنَمَا; she → تَسْهَرُ.' },
  ],
  errors: [
    { wrong: 'أُمِّي يَعْمَلُ فِي المُسْتَشْفَى.', hint: 'Who is the subject?', right: 'أُمِّي تَعْمَلُ فِي المُسْتَشْفَى.', why: 'She → ta-: تَعْمَلُ.' },
    { wrong: 'أَخِي يُرَاجِعُ دُرُوسَهَا.', hint: 'Whose lessons?', right: 'أَخِي يُرَاجِعُ دُرُوسَهُ.', why: 'His → -hu.' },
    { wrong: 'هِيَ تَذْهَبُ إِلَى مَدْرَسَتِي كُلَّ يَوْمٍ.', hint: 'It is HER school.', right: 'هِيَ تَذْهَبُ إِلَى مَدْرَسَتِهَا كُلَّ يَوْمٍ.', why: 'Her → -hā; keep the person the same.' },
  ],
  task: {
    title: 'A profile: two people, two routines', ar: 'رُوتِينُ شَخْصَيْنِ',
    text: 'Write a profile (about 60–80 words) comparing the daily routine of two people you know — one male, one female. Include: • at least three verbs for him and three for her, with times • -hu / -hā on at least four nouns • a comparison with بَيْنَمَا and one with أَمَّا … فَ… (contrast) • your opinion: whose day is busier and why?',
    phrases: [['يَسْتَيْقِظُ … · تَسْتَيْقِظُ …', 'he wakes up … · she wakes up …'], ['عَمَلُهُ · مَدْرَسَتُهَا', 'his work · her school'], ['… بَيْنَمَا هِيَ …', '… whereas she …'], ['فِي رَأْيِي يَوْمُهُ أَصْعَبُ لِأَنَّ …', 'in my opinion his day is harder because …']],
    coreFrames: [
      { ar: 'أُرِيدُ أَنْ أَصِفَ رُوتِينَ ______ وَ ______ .', en: 'I want to describe the routine of … and …' },
      { ar: 'يَسْتَيْقِظُ ______ فِي ______ ، ثُمَّ ______ .', en: 'He wakes up at …, then …' },
      { ar: 'تَسْتَيْقِظُ ______ فِي ______ ، وَ ______ .', en: 'She wakes up at …, and …' },
      { ar: 'فِي المَسَاءِ يُرَاجِعُ دُرُوسَهُ / تُرَاجِعُ دُرُوسَهَا ______ .', en: 'In the evening he / she revises …' },
    ],
    developFrames: [
      { ar: 'يَرْجِعُ ______ فِي ______ ، بَيْنَمَا تَرْجِعُ ______ .', en: 'He gets home at …, whereas she …' },
      { ar: 'فِي رَأْيِي يَوْمُ ______ أَصْعَبُ، لِأَنَّ ______ .', en: 'In my opinion …’s day is harder, because …' },
    ],
    bank: ['يَسْتَيْقِظُ · تَسْتَيْقِظُ', 'يَخْرُجُ · تَخْرُجُ', 'يَعْمَلُ · تَعْمَلُ', 'يَرْجِعُ · تَرْجِعُ', 'عَمَلُهُ · عَمَلُهَا', 'بَيْنَمَا', 'أَمَّا … فَ…', 'أَكْثَرُ مِنْ'],
    model: {
      text: 'أُرِيدُ أَنْ أَصِفَ رُوتِينَ خَالِي وَأُخْتِي. يَسْتَيْقِظُ خَالِي فِي الخَامِسَةِ، ثُمَّ يُصَلِّي وَيَذْهَبُ إِلَى مَخْبَزِهِ. تَسْتَيْقِظُ أُخْتِي فِي السَّابِعَةِ، وَتَتَنَاوَلُ إِفْطَارَهَا بِسُرْعَةٍ. يَعْمَلُ خَالِي حَتَّى الثَّالِثَةِ، بَيْنَمَا تَدْرُسُ أُخْتِي فِي جَامِعَتِهَا حَتَّى الخَامِسَةِ. أَمَّا فِي المَسَاءِ فَيَنَامُ خَالِي مُبَكِّرًا، وَتُرَاجِعُ أُخْتِي دُرُوسَهَا حَتَّى الحَادِيَةَ عَشْرَةَ. فِي رَأْيِي يَوْمُ أُخْتِي أَصْعَبُ، لِأَنَّهَا تَنَامُ أَقَلَّ مِنْ خَالِي.',
      en: '“I want to describe the routine of my uncle and my sister. My uncle wakes up at five, then prays and goes to his bakery. My sister wakes up at seven and has her breakfast quickly. My uncle works until three, whereas my sister studies at her university until five. As for the evening, my uncle sleeps early, and my sister revises her lessons until eleven. In my opinion my sister’s day is harder, because she sleeps less than my uncle.”',
      find: ['إِلَى مَخْبَزِهِ', 'تَسْتَيْقِظُ أُخْتِي', 'بَيْنَمَا تَدْرُسُ', 'أَمَّا فِي المَسَاءِ فَيَنَامُ'],
    },
  },
  checkCore: 'use ya- for him and ta- for her every time?',
  checkDevelop: 'put -hu / -hā on nouns and compare with بَيْنَمَا?',
});
