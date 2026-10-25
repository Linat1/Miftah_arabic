'use strict';
/* Practice Room · D6-L12 · Review — countries, cultures and celebrations, the whole unit in one room. Speaking + writing in one lesson. Teacher-made. */
module.exports = require('./pr-common').room({
  key: 'd6-l12',
  arShort: 'مُرَاجَعَةُ الوَحْدَةِ',
  grammar: 'D6 review: nisba nationalities (m. / f. / pl.) and diptote country names; cultural verbs + prepositions (naḥtafilu bi- · natamassaku bi- · antamī ilā · aʿtazzu bi- · aḥtafiẓu bi-); passives for customs (tuzayyanu · tuwazzaʿu); all tenses incl. kunnā + present and lan; tuʿaddu min akthari … + -an; hedges (fī baʿḍi … · ʿalā ḥaddi ʿilmī)',
  focus: 'Students run their own review of the whole D6 unit: recall twelve key D6 expressions, act a mixed dialogue, answer mixed exam-style cards, do a full role-play card, give a one-minute talk, then build, fix and write an exam-style article — and set one target for Progression P1.',
  words1: 'D6 key language (1)', words2: 'D6 key language (2)',
  addWords: [
    ['لُبْنَانِيٌّ · لُبْنَانِيَّةٌ', 'Lebanese (m. · f.)'], ['مِنْ لُبْنَانَ', 'from Lebanon'], ['نَتَمَسَّكُ بِعَادَاتِنَا', 'we hold on to our customs'], ['فِي بَعْضِ العَائِلَاتِ', 'in some families'], ['تُزَيَّنُ البُيُوتُ', 'homes are decorated'], ['صُمْتُ لِأَوَّلِ مَرَّةٍ', 'I fasted for the first time'],
    ['كَنِيسَةٌ · كَنِيسٌ', 'church · synagogue'], ['أَنْتَمِي إِلَى', 'I belong to'], ['أَعْتَزُّ بِ…', 'I am proud of'], ['تُعَدُّ مِنْ أَكْثَرِ اللُّغَاتِ', 'is among the most … languages'], ['كُنَّا نَحْتَفِلُ', 'we used to celebrate'], ['عَلَى حَدِّ عِلْمِي', 'as far as I know'],
  ],
  dialogue: {
    title: 'Everything from D6 in one conversation', ar: 'كُلُّ الوَحْدَةِ فِي حِوَارٍ',
    lines: [
      ['A', 'مِنْ أَيْنَ عَائِلَتُكِ؟', 'Where is your family from?'],
      ['B', 'أَبِي عِرَاقِيٌّ، وَأُمِّي لُبْنَانِيَّةٌ، وَأَنَا أَنْتَمِي إِلَى الثَّقَافَتَيْنِ وَإِلَى بِرِيطَانْيَا أَيْضًا.', 'My father is Iraqi, my mother Lebanese, and I belong to both cultures — and to Britain too.'],
      ['A', 'كَيْفَ تَحْتَفِلُونَ بِالعِيدِ؟', 'How do you celebrate Eid?'],
      ['B', 'كُنَّا نَحْتَفِلُ فِي بَغْدَادَ، أَمَّا الآنَ فَتُزَيَّنُ شُقَّتُنَا هُنَا وَنَدْعُو الجِيرَانَ.', 'We used to celebrate in Baghdad; now our flat here is decorated and we invite the neighbours.'],
      ['A', 'وَهَلْ تَتَكَلَّمِينَ العَرَبِيَّةَ دَائِمًا؟', 'And do you always speak Arabic?'],
      ['B', 'فِي البَيْتِ غَالِبًا. أَعْتَزُّ بِهَا، لِأَنَّهَا تُعَدُّ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارًا، وَلَنْ أَتَخَلَّى عَنْهَا.', 'At home, usually. I’m proud of it, because it’s among the most widespread languages, and I will never give it up.'],
    ],
    foot: 'Round 1: read it. Round 2: swap letters. Round 3: answer with YOUR life — then ask your partner the same three questions.',
  },
  qTitle: 'Mixed exam cards — one from each part of D6',
  questions: [
    { q: 'مِنْ أَيْنَ عَائِلَتُكَ؟ وَمَا جِنْسِيَّاتُهُمْ؟', en: 'Where is your family from? Their nationalities?', start: 'أَبِي مِصْرِيٌّ وَأُمِّي سُورِيَّةٌ …', more: '… وَنَحْنُ …' },
    { q: 'مَا العَادَاتُ الَّتِي تَتَمَسَّكُ بِهَا عَائِلَتُكَ؟', en: 'Which customs does your family keep?', start: 'نَتَمَسَّكُ بِ… وَ…', more: '… فِي بَعْضِ العَائِلَاتِ …' },
    { q: 'صِفِ العِيدَ فِي بَيْتِكُمْ.', en: 'Describe Eid at your home.', start: 'تُزَيَّنُ … وَتُوَزَّعُ …', more: '… وَأَتَذَكَّرُ …' },
    { q: 'إِلَى أَيِّ مَكَانٍ تَنْتَمِي؟ وَلِمَاذَا؟', en: 'Where do you belong? Why?', start: 'أَنْتَمِي إِلَى … لِأَنَّ …', more: '… أُوَازِنُ بَيْنَ …' },
    { q: 'لِمَاذَا تَتَعَلَّمُ العَرَبِيَّةَ؟', en: 'Why do you learn Arabic?', start: 'لِأَنَّهَا تُعَدُّ مِنْ …', more: '… وَتَرْبِطُنِي بِ…' },
  ],
  card: {
    title: 'Role-play card — the Culture Day interview', ar: 'يَوْمُ الثَّقَافَاتِ', you: 'a student presenting your culture', them: 'a visiting journalist',
    tasks: [
      { ex: 'مِنْ أَيْنَ أَنْتَ؟ وَمَا جِنْسِيَّتُكَ؟', task: 'Origin + nationality.', plan: 'أَنَا ← أَنَا مِنْ … ؛ أَنَا …', model: 'أَنَا مِنَ اليَمَنِ؛ أَنَا يَمَنِيٌّ، وَوُلِدْتُ فِي شِيفِيلْدَ.', modelEn: 'I’m from Yemen — I’m Yemeni, and I was born in Sheffield.' },
      { ex: 'مَا أَهَمُّ عَادَةٍ فِي ثَقَافَتِكَ؟', task: 'Custom + hedge.', plan: 'العَادَةُ ← نَتَمَسَّكُ بِ… ، وَفِي بَعْضِ …', model: 'نَتَمَسَّكُ بِالضِّيَافَةِ؛ فِي كَثِيرٍ مِنَ العَائِلَاتِ تُقَدَّمُ القَهْوَةُ وَالتَّمْرُ لِلضَّيْفِ.', modelEn: 'We hold on to hospitality — in many families coffee and dates are served to guests.' },
      { ex: 'كَيْفَ كُنْتُمْ تَحْتَفِلُونَ فِي اليَمَنِ؟', task: 'Used to + now.', plan: '', model: 'كُنَّا نَحْتَفِلُ مَعَ كُلِّ القَرْيَةِ، أَمَّا الآنَ فَنَحْتَفِلُ مَعَ الجَالِيَةِ هُنَا.', modelEn: 'We used to celebrate with the whole village; now we celebrate with the community here.' },
      { unexpected: true, ex: 'هَلْ سَتَحْتَفِظُ بِهٰذِهِ العَادَاتِ؟', task: 'Future + لَنْ.', plan: '', model: 'طَبْعًا؛ سَأَحْتَفِظُ بِهَا، وَلَنْ أَتَخَلَّى عَنْ لُغَتِي أَبَدًا.', modelEn: 'Of course — I will keep them, and I will never give up my language.' },
    ],
    girl: 'to a girl: أَنْتِ · جِنْسِيَّتُكِ · أَنَا يَمَنِيَّةٌ · ثَقَافَتِكِ · سَتَحْتَفِظِينَ',
    notes: 'This card mixes every D6 structure; the Coach ticks each one heard.',
  },
  talk: {
    title: 'One minute: my D6 showcase', ar: 'أَعْرِضُ مَا تَعَلَّمْتُ',
    text: 'Talk for one minute about your culture and identity. The Coach ticks: nationality · diptote country · custom verb + preposition · passive · كُنَّا + present · future / لَنْ · أَنْتَمِي إِلَى / أَعْتَزُّ بِ… · hedge.',
    routes: {
      core: 'Five structures from the list.',
      develop: 'Six structures, all prepositions correct.',
      stretch: 'All eight, with a supported opinion.',
    },
  },
  builder: [
    { en: 'My mother is Syrian, from Aleppo.', cols: [['أُمِّي سُورِيَّةٌ', 'أُمِّي سُورِيٌّ'], ['مِنْ', 'فِي'], ['حَلَبَ.', 'حَلَبٍ.']], key: [0, 0, 0], why: 'f. nisba; حَلَبُ is diptote → حَلَبَ.' },
    { en: 'In some families, sweets are handed out after the prayer.', cols: [['فِي بَعْضِ العَائِلَاتِ', 'فِي كُلِّ العَرَبِ'], ['تُوَزَّعُ الحَلْوَى', 'تُوَزِّعُ الحَلْوَى'], ['بَعْدَ الصَّلَاةِ.', 'بَعْدَ الصَّلَاةُ.']], key: [0, 0, 0], why: 'Hedge + passive تُوَزَّعُ.' },
    { en: 'I am proud of my identity and will never give it up.', cols: [['أَعْتَزُّ بِهُوِيَّتِي', 'أَعْتَزُّ هُوِيَّتِي'], ['وَلَنْ', 'وَلَمْ'], ['أَتَخَلَّى عَنْهَا أَبَدًا.', 'أَتَخَلَّى عَنْهُ أَبَدًا.']], key: [0, 0, 0], why: 'أَعْتَزُّ بِ…; لَنْ (future); هُوِيَّةٌ (f.) → عَنْهَا.' },
  ],
  errors: [
    { wrong: 'أُخْتِي مَغْرِبِيٌّ، وَهِيَ مِنْ مَرَّاكُشٍ.', hint: 'Two errors.', right: 'أُخْتِي مَغْرِبِيَّةٌ، وَهِيَ مِنْ مَرَّاكُشَ.', why: 'f. nisba; diptote city → مَرَّاكُشَ.' },
    { wrong: 'نَحْتَفِلُ العِيدَ وَنَتَمَسَّكُ عَلَى عَادَاتِنَا.', hint: 'Two prepositions.', right: 'نَحْتَفِلُ بِالعِيدِ وَنَتَمَسَّكُ بِعَادَاتِنَا.', why: 'يَحْتَفِلُ بِ… · يَتَمَسَّكُ بِ…' },
    { wrong: 'كُلُّ العَرَبِ يَحْتَفِلُونَ بِنَفْسِ الطَّرِيقَةِ.', hint: 'Fair?', right: 'تَخْتَلِفُ طُرُقُ الاحْتِفَالِ مِنْ بَلَدٍ إِلَى آخَرَ.', why: 'Every claim fair and hedged.' },
  ],
  task: {
    title: 'Exam-style article: culture and identity', ar: 'مَقَالٌ بِأُسْلُوبِ الامْتِحَانِ: الثَّقَافَةُ وَالهُوِيَّةُ',
    text: 'Write an article (about 70–90 words) for an online youth magazine. Answer ALL four bullets: • where your family is from (nationalities) • a celebration — how it used to be and how it is now • a custom you hold on to, described fairly • what Arabic and your culture mean to you, and your plans to keep them.',
    range: [60, 105],
    phrases: [['أَبِي مِصْرِيٌّ وَأُمِّي سُورِيَّةٌ', 'my father is Egyptian, my mother Syrian'], ['كُنَّا نَحْتَفِلُ … أَمَّا الآنَ فَ…', 'we used to celebrate …; as for now …'], ['نَتَمَسَّكُ بِ… · فِي بَعْضِ العَائِلَاتِ …', 'we hold on to … · in some families …'], ['أَعْتَزُّ بِ… · لَنْ أَتَخَلَّى عَنْ …', 'I am proud of … · I will never give up …']],
    coreFrames: [
      { ar: 'أَبِي ______ وَأُمِّي ______ ، وَأَنَا ______ .', en: 'My father is …, my mother …, and I …' },
      { ar: 'كُنَّا نَحْتَفِلُ بِ______ فِي ______ ، أَمَّا الآنَ فَ______ .', en: 'We used to celebrate … in …; now …' },
      { ar: 'نَتَمَسَّكُ بِ______ .', en: 'We hold on to …' },
      { ar: 'أَعْتَزُّ بِ______ ، وَلَنْ ______ .', en: 'I am proud of …, and I will never …' },
    ],
    developFrames: [
      { ar: 'فِي بَعْضِ العَائِلَاتِ ______ ، وَلٰكِنْ لَيْسَ دَائِمًا.', en: 'In some families …, but not always.' },
      { ar: 'تُعَدُّ العَرَبِيَّةُ مِنْ ______ ، وَتَرْبِطُنِي بِ______ .', en: 'Arabic is among …, and connects me to …' },
    ],
    bank: ['عِرَاقِيٌّ · لُبْنَانِيَّةٌ', 'مِنْ لُبْنَانَ · مِنْ حَلَبَ', 'نَحْتَفِلُ بِ… · نَتَمَسَّكُ بِ…', 'تُزَيَّنُ · تُوَزَّعُ', 'كُنَّا نَحْتَفِلُ', 'أَنْتَمِي إِلَى · أَعْتَزُّ بِ…', 'لَنْ أَتَخَلَّى عَنْ', 'فِي بَعْضِ العَائِلَاتِ'],
    model: {
      text: 'أَبِي فِلَسْطِينِيٌّ وَأُمِّي أُرْدُنِيَّةٌ، وَأَنَا وُلِدْتُ فِي مَانْشِسْتَرَ. كُنَّا نَحْتَفِلُ بِالعِيدِ فِي بَيْتِ جَدِّي فِي عَمَّانَ، أَمَّا الآنَ فَتُزَيَّنُ شُقَّتُنَا هُنَا، وَتُوَزَّعُ الحَلْوَى عَلَى الجِيرَانِ. نَتَمَسَّكُ بِصِلَةِ الرَّحِمِ؛ نَتَّصِلُ بِأَقَارِبِنَا كُلَّ أُسْبُوعٍ. فِي بَعْضِ العَائِلَاتِ يَجْتَمِعُ الجَمِيعُ كُلَّ جُمُعَةٍ، وَلٰكِنْ لَيْسَ دَائِمًا. تُعَدُّ العَرَبِيَّةُ مِنْ أَكْثَرِ اللُّغَاتِ انْتِشَارًا، وَتَرْبِطُنِي بِجَدَّتِي وَبِدِينِي. أَعْتَزُّ بِهُوِيَّتِي، وَلَنْ أَتَخَلَّى عَنْ لُغَتِي أَبَدًا؛ سَأُعَلِّمُهَا لِأَطْفَالِي.',
      en: '“My father is Palestinian and my mother Jordanian, and I was born in Manchester. We used to celebrate Eid at my grandfather’s house in Amman; now our flat here is decorated, and sweets are handed out to the neighbours. We hold on to family ties — we call our relatives every week. In some families everyone gathers every Friday, but not always. Arabic is among the most widespread languages, and it connects me to my grandmother and my faith. I am proud of my identity, and I will never give up my language — I will teach it to my children.”',
      find: ['كُنَّا نَحْتَفِلُ', 'فَتُزَيَّنُ شُقَّتُنَا', 'نَتَمَسَّكُ بِصِلَةِ الرَّحِمِ', 'وَلَنْ أَتَخَلَّى'],
    },
  },
  checkCore: 'answer all four bullets with correct nationalities and tenses?',
  checkDevelop: 'use verb + preposition units, a passive and a fair hedge?',
  remember: 'Before you leave: write ONE target for Progression P1 in your book, e.g. “I will say verb + preposition as one unit.”',
});
