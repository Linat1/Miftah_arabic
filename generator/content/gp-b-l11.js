'use strict';
/* Guided Practice Rooms · TB-L11 · Topic B mixed practice — all about me. New tasks. Teacher-made. */
const XP = require('./xp-b-l11');

const base = { topic: 'B', n: 11, short: 'Mixed Topic B: All About Me', arShort: 'هٰذَا أَنَا', fileTitle: 'Topic_B_Speaking_and_Writing_Workshop', title: 'Topic B mixed practice — all about me', icon: 'FaUserPen', grammar: 'cohesion (li-anna, li-dhālika, lākinna, ammā … fa-, bi-l-iḍāfati ilā dhālika); mixed tenses; developing answers; ṣaḥīḥun anna … ghayra anna …; law … la-' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms, practising how to develop and link answers about themselves: a word warm-up, the answer ladder, two new role plays (a youth-ambassador interview, a video message to a host family), a conversation with A-R-E-T, and a one-minute talk.',
  words: XP.speak.words,
  words1: { title: 'Linking words that develop an answer', ar: 'كَلِمَاتُ الرَّبْطِ' },
  words2: { title: 'Top-band structures', ar: 'جُمَلٌ مُتَقَدِّمَةٌ' },
  ladder: {
    q: 'كَيْفَ تَصِفُ نَفْسَكَ؟', qEn: 'How would you describe yourself?',
    rungs: [
      { ar: 'أَنَا شَخْصٌ هَادِئٌ.', en: 'I am a calm person.' },
      { ar: 'أَنَا شَخْصٌ هَادِئٌ، لِأَنِّي أُحِبُّ أَنْ أُفَكِّرَ قَبْلَ أَنْ أَتَكَلَّمَ.', en: '… because I like to think before I speak.' },
      { ar: '… بِالإِضَافَةِ إِلَى ذٰلِكَ أَنَا مُنَظَّمٌ؛ مَثَلًا، أَكْتُبُ قَائِمَةً كُلَّ صَبَاحٍ.', en: '… in addition I am organised — for example, I write a list every morning.' },
      { ar: '… عِنْدَمَا كُنْتُ صَغِيرًا كُنْتُ خَجُولًا، أَمَّا الآنَ فَأَتَكَلَّمُ أَمَامَ الصَّفِّ بِثِقَةٍ.', en: '… when I was little I was shy, but now I speak in front of the class confidently.' },
    ],
  },
  ladderQs: [
    { q: 'مَا أَكْثَرُ شَيْءٍ تُحِبُّهُ فِي حَيَاتِكَ؟', l1: 'أَكْثَرُ شَيْءٍ أُحِبُّهُ …', l2: '… لِأَنَّ … · لِذٰلِكَ …', l3: '… بِالإِضَافَةِ إِلَى ذٰلِكَ …' },
    { q: 'كَيْفَ تَغَيَّرْتَ فِي السَّنَوَاتِ الأَخِيرَةِ؟', l1: 'تَغَيَّرْتُ كَثِيرًا …', l2: '… كُنْتُ … أَمَّا الآنَ …', l3: '… وَفِي المُسْتَقْبَلِ …' },
    { q: 'مَا الشَّيْءُ الَّذِي تَفْخَرُ بِهِ؟', l1: 'أَفْخَرُ بِأَنِّي …', l2: '… لِأَنَّ …', l3: '… مَثَلًا فِي السَّنَةِ المَاضِيَةِ …' },
    { q: 'مَاذَا تُرِيدُ أَنْ تَفْعَلَ بَعْدَ المَدْرَسَةِ؟', l1: 'أُرِيدُ أَنْ …', l2: '… لِأَنِّي …', l3: '… وَلَوْ … لَـدَرَسْتُ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'an interview for “youth ambassador”', title: 'Role play 1 — Becoming a youth ambassador', ar: 'سَفِيرُ الشَّبَابِ', you: 'a student applying', them: 'the interview panel',
      tasks: [
        { ex: 'عَرِّفْنَا بِنَفْسِكَ.', task: 'Introduce yourself (name, age, school).', plan: 'عَرِّفْ ← اسْمِي … وَعُمْرِي … وَأَدْرُسُ فِي …', model: 'اسْمِي عُمَرُ، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً، وَأَدْرُسُ فِي مَدْرَسَةِ المَدِينَةِ.', modelEn: 'My name is Omar, I am fifteen, and I study at Al Madina School.' },
        { ex: 'صِفْ شَخْصِيَّتَكَ.', task: 'Give two qualities with a link word.', plan: 'صِفْ ← أَنَا … وَ… ؛ لِذٰلِكَ …', model: 'أَنَا اجْتِمَاعِيٌّ وَصَبُورٌ، لِذٰلِكَ أُسَاعِدُ الطُّلَّابَ الجُدُدَ.', modelEn: 'I am sociable and patient, so I help new students.' },
        { ex: 'مَا هِوَايَاتُكَ؟', task: 'Give your hobbies.', plan: 'مَا ← أُحِبُّ … وَ…', model: 'أُحِبُّ القِرَاءَةَ وَكُرَةَ السَّلَّةِ.', modelEn: 'I like reading and basketball.' },
        { ex: 'هَلْ تَتَكَلَّمُ لُغَاتٍ أُخْرَى؟', task: 'Say your languages.', plan: 'هَلْ ← نَعَمْ، أَتَكَلَّمُ …', model: 'نَعَمْ، أَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ وَقَلِيلًا مِنَ الفَرَنْسِيَّةِ.', modelEn: 'Yes, I speak Arabic, English and a little French.' },
        { unexpected: true, ex: 'لِمَاذَا تُرِيدُ أَنْ تَكُونَ سَفِيرًا لِلشَّبَابِ؟', task: 'Answer the unexpected question with a reason.', plan: 'لِمَاذَا ← لِأَنِّي أُرِيدُ أَنْ …', model: 'لِأَنِّي أُرِيدُ أَنْ أُسَاعِدَ الشَّبَابَ فِي مَدِينَتِي.', modelEn: 'Because I want to help young people in my city.' },
      ],
      girl: 'عَرِّفِينَا بِنَفْسِكِ · صِفِي شَخْصِيَّتَكِ · هِوَايَاتُكِ · تَتَكَلَّمِينَ · تُرِيدِينَ — and the Speaker says اجْتِمَاعِيَّةٌ وَصَبُورَةٌ · سَفِيرَةً',
      notes: 'Language: a complete self-introduction · li-dhālika (so) to link · verbal nouns for hobbies · li-annī urīdu an + verb in -a.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a video message before an exchange', title: 'Role play 2 — A video call with your host family', ar: 'مُكَالَمَةٌ مَعَ الأُسْرَةِ المُضِيفَةِ', you: 'an exchange student', them: 'the host mother or father in Oman',
      tasks: [
        { ex: 'كَيْفَ يَبْدُو يَوْمُكَ العَادِيُّ؟', task: 'Describe your day with linking words.', model: 'أَوَّلًا أَذْهَبُ إِلَى المَدْرَسَةِ، ثُمَّ أَتَدَرَّبُ فِي النَّادِي، وَبِالإِضَافَةِ إِلَى ذٰلِكَ أُسَاعِدُ أُمِّي فِي المَسَاءِ.', modelEn: 'First I go to school, then I train at the club, and in addition I help my mum in the evening.' },
        { ex: 'مَا الطَّعَامُ الَّذِي لَا تُحِبُّهُ؟', task: 'Answer with a contrast.', model: 'آكُلُ كُلَّ شَيْءٍ تَقْرِيبًا، لٰكِنِّي لَا أُحِبُّ الطَّعَامَ الحَارَّ جِدًّا.', modelEn: 'I eat almost everything, but I don’t like very spicy food.' },
        { ex: 'هَلْ سَافَرْتَ وَحْدَكَ مِنْ قَبْلُ؟', task: 'Tell a past experience and what you learnt.', model: 'نَعَمْ، فِي الصَّيْفِ المَاضِي ذَهَبْتُ إِلَى مُخَيَّمٍ، فَتَعَلَّمْتُ أَنْ أَعْتَمِدَ عَلَى نَفْسِي.', modelEn: 'Yes, last summer I went to a camp and learnt to rely on myself.' },
        { ex: 'عِنْدَنَا ابْنٌ فِي عُمْرِكَ.', task: 'ASK two questions about him.', model: 'مَا هِوَايَاتُهُ؟ وَهَلْ يَتَكَلَّمُ الإِنْجِلِيزِيَّةَ؟', modelEn: 'What are his hobbies? And does he speak English?' },
        { unexpected: true, ex: 'مَا الَّذِي يُقْلِقُكَ فِي هٰذِهِ الرِّحْلَةِ؟', task: 'Answer the unexpected question (concession).', model: 'صَحِيحٌ أَنِّي مُتَحَمِّسٌ جِدًّا، غَيْرَ أَنِّي قَلِقٌ قَلِيلًا مِنَ الحَرِّ، لِأَنِّي لَمْ أَعِشْ فِي بَلَدٍ حَارٍّ مِنْ قَبْلُ.', modelEn: 'It’s true I’m very excited, but I’m a little worried about the heat, because I have never lived in a hot country.' },
      ],
      girl: 'يَوْمُكِ · تُحِبِّينَهُ · سَافَرْتِ · عُمْرِكِ · يُقْلِقُكِ — and the Speaker says مُتَحَمِّسَةٌ · قَلِقَةٌ',
      notes: 'Language: cohesion (awwalan, thumma, bi-l-iḍāfati ilā dhālika, lākinna) · past experience + fa-taʿallamtu an · questions about a third person (-hu) · ṣaḥīḥun anna … ghayra anna …',
    },
  ],
  convAr: 'كُلُّ شَيْءٍ عَنِّي',
  conv: [
    { route: 'Core', q: 'مِنْ أَيْنَ أَنْتَ؟', en: 'Where are you from?', push: 'وَأَصْلُ عَائِلَتِكَ؟' },
    { route: 'Core', q: 'مَا الشَّيْءُ الَّذِي تُحِبُّهُ فِي غُرْفَتِكَ؟', en: 'What do you like in your room?', push: 'لِمَاذَا؟' },
    { route: 'Develop', q: 'كَيْفَ تَقْضِي يَوْمَ الأَحَدِ؟', en: 'How do you spend Sunday?', push: 'وَيَوْمَ الأَحَدِ المَاضِي؟' },
    { route: 'Develop', q: 'مَنْ يُشْبِهُكَ فِي عَائِلَتِكَ؟', en: 'Who in your family is like you?', push: 'كَيْفَ؟' },
    { route: 'Stretch', q: 'هَلْ تَتَغَيَّرُ شَخْصِيَّتُنَا مَعَ العُمُرِ؟', en: 'Does our personality change with age?', push: 'مَثَلًا؟' },
    { route: 'Stretch', q: 'لَوْ كَتَبْتَ كِتَابًا عَنْ حَيَاتِكَ، مَاذَا يَكُونُ عُنْوَانُهُ؟', en: 'If you wrote a book about your life, what would its title be?', push: 'لِمَاذَا؟' },
  ],
  convModels: [
    { q: 'كَيْفَ تَقْضِي يَوْمَ الأَحَدِ؟', model: 'عَادَةً أَنَامُ مُتَأَخِّرًا، ثُمَّ أُسَاعِدُ أَبِي فِي الحَدِيقَةِ، لِأَنَّهُ يُحِبُّ الزِّرَاعَةَ؛ لٰكِنْ يَوْمَ الأَحَدِ المَاضِي ذَهَبْنَا إِلَى الشَّاطِئِ، وَكَانَ أَجْمَلَ بِكَثِيرٍ!', modelEn: 'A: I usually sleep late, then help dad in the garden · R: he loves gardening · contrast/T: but last Sunday we went to the beach — much better!' },
    { q: 'مَنْ يُشْبِهُكَ فِي عَائِلَتِكَ؟', model: 'تُشْبِهُنِي أُخْتِي الكُبْرَى كَثِيرًا، فَنَحْنُ طَوِيلَتَانِ وَنُحِبُّ القِرَاءَةَ؛ بِالإِضَافَةِ إِلَى ذٰلِكَ نَضْحَكُ عَلَى الأَشْيَاءِ نَفْسِهَا، لٰكِنَّهَا أَكْثَرُ صَبْرًا مِنِّي!', modelEn: 'A: my older sister · E: we’re both tall and love reading · in addition: we laugh at the same things · contrast: but she is more patient than me!' },
    { q: 'هَلْ تَتَغَيَّرُ شَخْصِيَّتُنَا مَعَ العُمُرِ؟', model: 'صَحِيحٌ أَنَّ بَعْضَ الصِّفَاتِ تَبْقَى، غَيْرَ أَنَّ التَّجَارِبَ تُغَيِّرُنَا؛ مَثَلًا كُنْتُ أَغْضَبُ بِسُرْعَةٍ، أَمَّا بَعْدَ أَنْ دَرَّبْتُ فَرِيقَ الصِّغَارِ، فَأَصْبَحْتُ أَكْثَرَ هُدُوءًا.', modelEn: 'Concession: some qualities stay, but experiences change us · E: I used to get angry quickly, but after coaching the juniors I became calmer.' },
  ],
  talk: {
    title: 'One minute: all about me', ar: 'كُلُّ شَيْءٍ عَنِّي',
    text: 'Talk for one minute about yourself, linking everything from Topic B: who you are, family, personality, home, hobbies — and how you have changed. Use at least four linking words.',
    routes: {
      core: '30 seconds: five facts linked with وَ · لِأَنَّ · لٰكِنَّ.',
      develop: '60 seconds: add بِالإِضَافَةِ إِلَى ذٰلِكَ · مَثَلًا and one past example.',
      stretch: '90 seconds: add كُنْتُ … أَمَّا الآنَ فَـ …, a concession and لَوْ … لَـ.',
    },
    phrases: [['بِالإِضَافَةِ إِلَى ذٰلِكَ …', 'in addition …'], ['مَثَلًا …', 'for example …'], ['أَمَّا أَنَا فَأُحِبُّ …', 'as for me, I like …'], ['فِي الخِتَامِ …', 'to finish …']],
  },
  checkCore: 'linked sentences with وَ · لِأَنَّ · لٰكِنَّ · لِذٰلِكَ',
  checkDevelop: 'developed answers with مَثَلًا and بِالإِضَافَةِ إِلَى ذٰلِكَ',
};
speak.ladderQs[3].l3 = '… وَلَوْ … لَدَرَسْتُ …';
speak.talk.routes.stretch = '90 seconds: add كُنْتُ … أَمَّا الآنَ …, a concession and law … la-.';

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms, focusing on cohesion and accuracy: a Q1 warm-up, decoding a new Q2 task (a letter to your future self), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Summer exchange: student profile', ar: 'التَّبَادُلُ الصَّيْفِيُّ: مَلَفُّ الطَّالِبِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'الجِنْسِيَّةُ', en: 'Nationality', tip: 'Agree: بِرِيطَانِيٌّ / بِرِيطَانِيَّةٌ' },
      { core: true, ar: 'ثَلَاثُ صِفَاتٍ', en: 'Three qualities', tip: 'مَرِحٌ · مُنَظَّمٌ · صَبُورٌ' },
      { core: true, ar: 'الهِوَايَاتُ', en: 'Hobbies', tip: 'Verbal nouns: الرَّسْمُ · السِّبَاحَةُ' },
      { core: true, ar: 'طَعَامٌ لَا تَأْكُلُهُ', en: 'A food you don’t eat', tip: 'السَّمَكُ · لَا يُوجَدُ' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ أَنْ تُشَارِكَ؟', en: 'ONE sentence: why you want to take part', tip: 'أُرِيدُ أَنْ … ، لِذٰلِكَ …' },
    ],
  },
  Q2: {
    title: 'Question 2: a letter to myself in five years', ar: 'رِسَالَةٌ إِلَى نَفْسِي بَعْدَ خَمْسِ سَنَوَاتٍ',
    task: 'Write a letter in Arabic to yourself in five years’ time, of about 80–90 words. You must include: • who you are now (age, family, personality) • your hobbies and how you spend your free time • something you are proud of from this year • what you hope you will be doing in five years.',
    phrases: [['عُمْرِي الآنَ … ، وَأَنَا …', 'I am now … and I am …'], ['فِي وَقْتِ الفَرَاغِ أُحِبُّ … ، لِذٰلِكَ …', 'in my free time I like …, so …'], ['هٰذِهِ السَّنَةَ أَفْخَرُ بِأَنِّي …', 'this year I am proud that I …'], ['أَتَمَنَّى أَنْ تَكُونَ …', 'I hope you will be …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى نَفْسِكَ بَعْدَ خَمْسِ سَنَوَاتٍ (٨٠–٩٠ كَلِمَةً).', 'Write a letter to yourself in five years (80–90 words).'],
      ['1', 'مَنْ أَنْتَ الآنَ؟', 'Who you are now'],
      ['2', 'مَا هِوَايَاتُكَ؟ وَكَيْفَ تَقْضِي وَقْتَ فَرَاغِكَ؟', 'Hobbies and free time'],
      ['3', 'مَا الشَّيْءُ الَّذِي تَفْخَرُ بِهِ هٰذِهِ السَّنَةَ؟', 'Something you are proud of this year'],
      ['4', 'مَاذَا تَتَمَنَّى أَنْ تَفْعَلَ بَعْدَ خَمْسِ سَنَوَاتٍ؟', 'What you hope to be doing in five years'],
    ],
    decode: ['a letter to YOURSELF → informal: إِلَى نَفْسِي العَزِيزَةِ', 'مَنْ أَنْتَ الآنَ → PRESENT facts + description', 'مَا هِوَايَاتُكَ · كَيْفَ → PRESENT habits + linking words', 'مَا … تَفْخَرُ بِهِ → a PAST event + a reason', 'تَتَمَنَّى … بَعْدَ خَمْسِ سَنَوَاتٍ → FUTURE / hopes (أَتَمَنَّى أَنْ …)'],
    coreFrames: [
      { ar: 'إِلَى نَفْسِي بَعْدَ خَمْسِ سَنَوَاتٍ،', en: 'To myself in five years,' },
      { ar: 'عُمْرِي الآنَ ______ سَنَةً، وَأَنَا ______ وَ ______ .', en: '1 · I am now … years old, and I am … and …' },
      { ar: 'أُحِبُّ ______ ، لِذٰلِكَ ______ .', en: '2 · I love …, so …' },
      { ar: 'هٰذِهِ السَّنَةَ ______ ، وَأَنَا فَخُورٌ بِذٰلِكَ.', en: '3 · This year I …, and I am proud of it.' },
      { ar: 'أَتَمَنَّى أَنْ ______ ، لِأَنَّ ______ .', en: '4 · I hope that …, because …' },
    ],
    developFrames: [
      { ar: 'أَسْكُنُ مَعَ ______ فِي ______ ، وَأَنَا ______ ، لٰكِنِّي ______ .', en: '1 · I live with … in …; I am …, but I …' },
      { ar: 'بِالإِضَافَةِ إِلَى ذٰلِكَ ______ ؛ مَثَلًا ______ .', en: '2 · In addition …; for example …' },
      { ar: 'أَفْخَرُ بِأَنِّي ______ ، لِأَنِّي كُنْتُ ______ .', en: '3 · I am proud that I …, because I used to be …' },
      { ar: 'بَعْدَ خَمْسِ سَنَوَاتٍ سَأَكُونُ ______ ، وَلَوْ ______ لَـ ______ .', en: '4 · In five years I will be …, and if …, I would …' },
    ],
    bank: ['لِأَنَّ · لِذٰلِكَ', 'لٰكِنَّ', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'مَثَلًا', 'أَمَّا … فَـ …', 'كُنْتُ … أَمَّا الآنَ', 'أَفْخَرُ بِأَنِّي', 'أَتَمَنَّى أَنْ'],
    model: {
      text: `إِلَى نَفْسِي بَعْدَ خَمْسِ سَنَوَاتٍ،
عُمْرُكَ الآنَ خَمْسَ عَشْرَةَ سَنَةً، وَتَسْكُنُ مَعَ وَالِدَيْكَ وَأَخِيكَ فِي لَنْدَنَ. أَنْتَ مَرِحٌ وَمُنَظَّمٌ، لٰكِنَّكَ تَنْسَى المَفَاتِيحَ دَائِمًا! تُحِبُّ كُرَةَ القَدَمِ وَالقِرَاءَةَ، لِذٰلِكَ تَقْضِي يَوْمَ السَّبْتِ فِي النَّادِي، وَيَوْمَ الأَحَدِ فِي المَكْتَبَةِ. بِالإِضَافَةِ إِلَى ذٰلِكَ، تَتَعَلَّمُ العَرَبِيَّةَ بِجِدٍّ. هٰذِهِ السَّنَةَ أَفْخَرُ بِأَنِّي قَدَّمْتُ عَرْضًا بِالعَرَبِيَّةِ أَمَامَ المَدْرَسَةِ كُلِّهَا، لِأَنِّي كُنْتُ خَجُولًا جِدًّا مِنْ قَبْلُ. بَعْدَ خَمْسِ سَنَوَاتٍ أَتَمَنَّى أَنْ تَكُونَ طَالِبًا فِي الجَامِعَةِ تَدْرُسُ الطِّبَّ، وَلَوْ كَانَ عِنْدَكَ وَقْتٌ، لَتَطَوَّعْتَ فِي مُسْتَشْفًى فِي بَلَدٍ عَرَبِيٍّ. لَا تَنْسَ أَحْلَامَكَ!
صَدِيقُكَ،
أَنْتَ`,
      en: '“To myself in five years: you are fifteen now and live with your parents and brother in London. You are cheerful and organised, but you always forget your keys! You love football and reading, so you spend Saturday at the club and Sunday at the library; in addition, you are learning Arabic seriously. This year I am proud that I gave a presentation in Arabic in front of the whole school, because I used to be very shy. In five years I hope you will be a university student studying medicine, and if you have time, you would volunteer in a hospital in an Arab country. Don’t forget your dreams! Your friend — you.”',
      find: ['لٰكِنَّكَ تَنْسَى', 'لِذٰلِكَ تَقْضِي', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'لِأَنِّي كُنْتُ خَجُولًا'],
    },
  },
  upgrade: [
    { ar: 'أُحِبُّ الرِّيَاضَةَ.', en: 'I like sport.' },
    { ar: 'أُحِبُّ الرِّيَاضَةَ، خُصُوصًا كُرَةَ السَّلَّةِ، وَأَلْعَبُهَا مَرَّتَيْنِ فِي الأُسْبُوعِ.', en: '… especially basketball, and I play it twice a week.' },
    { ar: 'أُحِبُّ كُرَةَ السَّلَّةِ، لِأَنَّهَا سَرِيعَةٌ، وَبِالإِضَافَةِ إِلَى ذٰلِكَ أَلْعَبُهَا مَعَ أَصْدِقَائِي.', en: '… because it’s fast — in addition, I play it with my friends.' },
    { ar: '… صَحِيحٌ أَنِّي لَسْتُ طَوِيلًا، غَيْرَ أَنِّي أَسْرَعُ لَاعِبٍ فِي الفَرِيقِ!', en: '… it’s true I’m not tall, but I am the fastest player in the team!' },
  ],
  builder: [
    { en: 'I like drawing, so I go to art club.', cols: [['أُحِبُّ الرَّسْمَ', 'أُحِبُّ أَرْسُمُ'], ['لِذٰلِكَ', 'لِأَنَّ'], ['أَذْهَبُ إِلَى نَادِي الفَنِّ', 'ذَهَبْتُ إِلَى نَادِي الفَنِّ']], key: [0, 0, 0], why: 'Like + verbal noun (الرَّسْمَ); so = لِذٰلِكَ.' },
    { en: 'As for my brother, he prefers football.', cols: [['أَمَّا أَخِي', 'أَمَّا أُخْتِي'], ['فَيُفَضِّلُ', 'يُفَضِّلُ'], ['كُرَةَ القَدَمِ', 'كُرَةُ القَدَمِ']], key: [0, 0, 0], why: 'أَمَّا … needs فَـ on the next word: فَيُفَضِّلُ.' },
    { en: 'It’s true that I am shy, but I am brave.', cols: [['صَحِيحٌ أَنِّي', 'صَحِيحٌ أَنَا'], ['خَجُولٌ', 'خَجُولًا'], ['غَيْرَ أَنِّي شُجَاعٌ', 'لِأَنِّي شُجَاعٌ']], key: [0, 0, 0], why: 'صَحِيحٌ أَنَّ + pronoun (أَنِّي); “but” = غَيْرَ أَنِّي.' },
  ],
  errors: [
    { wrong: 'أَمَّا أَنَا أُحِبُّ القِرَاءَةَ.', hint: 'أَمَّا needs a partner.', right: 'أَمَّا أَنَا فَأُحِبُّ القِرَاءَةَ.', why: 'أَمَّا … فَـ: add fa- to the next part.' },
    { wrong: 'أُحِبُّ السِّبَاحَةَ، لِأَنَّ أَسْبَحُ كُلَّ يَوْمٍ.', hint: 'لِأَنَّ needs a noun or pronoun after it.', right: 'أُحِبُّ السِّبَاحَةَ، لِأَنِّي أَسْبَحُ كُلَّ يَوْمٍ.', why: 'لِأَنَّ + pronoun: لِأَنِّي (because I).' },
    { wrong: 'كُنْتُ خَجُولٌ، أَمَّا الآنَ فَأَنَا شُجَاعٌ.', hint: 'Look after كُنْتُ.', right: 'كُنْتُ خَجُولًا، أَمَّا الآنَ فَأَنَا شُجَاعٌ.', why: 'After كَانَ / كُنْتُ → accusative: خَجُولًا.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: the year I changed', ar: 'السَّنَةُ الَّتِي تَغَيَّرْتُ فِيهَا',
    task: 'Full Q3 title: “This is me”. Today write ONLY the past paragraph: a year or experience that changed you — what you were like before, what happened, why it changed you and how you feel now. Use at least four linking words.',
    formula: [
      { ar: 'السَّنَةُ المَاضِيَةُ غَيَّرَتْ شَخْصِيَّتِي كَثِيرًا.', en: 'T · Last year changed my personality a lot.' },
      { ar: 'كُنْتُ خَجُولًا، ثُمَّ انْضَمَمْتُ إِلَى نَادِي المَسْرَحِ.', en: 'D · I was shy, then I joined the drama club.' },
      { ar: 'تَغَيَّرْتُ لِأَنِّي وَقَفْتُ أَمَامَ النَّاسِ كُلَّ أُسْبُوعٍ.', en: 'R · I changed because I stood in front of people every week.' },
      { ar: 'أَمَّا الآنَ فَأَنَا أَكْثَرُ ثِقَةً.', en: 'F · But now I am more confident.' },
    ],
    phrases: [['كُنْتُ … ، أَمَّا الآنَ فَأَنَا …', 'I used to be …, but now I am …'], ['فِي البِدَايَةِ … ثُمَّ …', 'at first … then …'], ['بِالإِضَافَةِ إِلَى ذٰلِكَ …', 'in addition …'], ['صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it is true that … but …'], ['لِذٰلِكَ …', 'so …']],
    model: {
      text: 'السَّنَةُ المَاضِيَةُ غَيَّرَتْ شَخْصِيَّتِي كَثِيرًا. فِي البِدَايَةِ كُنْتُ خَجُولًا جِدًّا، وَلَمْ أَكُنْ أَتَكَلَّمُ فِي الصَّفِّ أَبَدًا، لِذٰلِكَ اقْتَرَحَتْ مُعَلِّمَتِي أَنْ أَنْضَمَّ إِلَى نَادِي المَسْرَحِ. صَحِيحٌ أَنِّي كُنْتُ خَائِفًا فِي أَوَّلِ تَدْرِيبٍ، غَيْرَ أَنَّ الطُّلَّابَ الآخَرِينَ كَانُوا لُطَفَاءَ جِدًّا. بِالإِضَافَةِ إِلَى ذٰلِكَ، أَعْطَانِي المُعَلِّمُ دَوْرًا صَغِيرًا، ثُمَّ دَوْرًا أَكْبَرَ فِي المَسْرَحِيَّةِ الأَخِيرَةِ. تَغَيَّرْتُ لِأَنِّي وَقَفْتُ أَمَامَ النَّاسِ كُلَّ أُسْبُوعٍ. أَمَّا الآنَ فَأَنَا أَكْثَرُ ثِقَةً، وَأُشَارِكُ فِي النِّقَاشَاتِ بِسُهُولَةٍ.',
      en: 'T: last year changed my personality a lot · D: at first I was very shy and never spoke in class, so my teacher suggested I join the drama club; I was afraid at the first rehearsal, but the other students were very kind; in addition, the teacher gave me a small part, then a bigger one in the last play · R: I changed because I stood in front of people every week · F: now I am more confident and join discussions easily.',
      find: ['فِي البِدَايَةِ كُنْتُ', 'لِذٰلِكَ اقْتَرَحَتْ', 'صَحِيحٌ أَنِّي … غَيْرَ أَنَّ', 'أَمَّا الآنَ فَأَنَا'],
    },
  },
};
write.Q2.developFrames[3] = { ar: 'بَعْدَ خَمْسِ سَنَوَاتٍ سَأَكُونُ ______ ، وَلَوْ ______ لَسَافَرْتُ ______ .', en: '4 · In five years I will be …, and if …, I would travel …' };
write.builder[1].why = 'أَمَّا … needs fa- on the next word: فَيُفَضِّلُ.';
write.errors[0].why = 'أَمَّا … then add fa- to the next part: فَأُحِبُّ.';
write.Q2.bank[4] = 'أَمَّا … فَأُحِبُّ …';

module.exports = { speak, write };
