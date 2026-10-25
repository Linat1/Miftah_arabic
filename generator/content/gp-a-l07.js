'use strict';
/* Guided Practice Rooms · AT-A-L07 · Body Parts and Health Problems. New tasks. Teacher-made. */
const XP = require('./xp-a-l07');

const base = { topic: 'A', n: 7, short: 'Body and Health Problems', arShort: 'الجِسْمُ وَالمَشَاكِلُ الصِّحِّيَّةُ', fileTitle: 'Body_Parts_and_Health_Problems', title: 'Body Parts and Health Problems', icon: 'FaUserDoctor', grammar: 'possessive suffixes (raʾsī, ẓahruhu); yuʾlimunī …; ʿindī + symptom; duration with mundhu' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (calling in sick to a sports coach, a sports injury at the school office), a topic conversation with A-R-E-T, and a one-minute talk about a time they were ill.',
  words: XP.speak.words,
  words1: { title: 'The body — and what hurts', ar: 'الجِسْمُ وَالأَلَمُ' },
  words2: { title: 'Symptoms and how long', ar: 'الأَعْرَاضُ وَالمُدَّةُ' },
  ladder: {
    q: 'مَتَى كُنْتَ مَرِيضًا آخِرَ مَرَّةٍ؟', qEn: 'When were you last ill?',
    rungs: [
      { ar: 'كُنْتُ مَرِيضًا فِي الشِّتَاءِ المَاضِي.', en: 'I was ill last winter.' },
      { ar: 'كُنْتُ مَرِيضًا فِي الشِّتَاءِ المَاضِي، لِأَنِّي لَعِبْتُ فِي المَطَرِ.', en: '… because I played in the rain.' },
      { ar: '… وَكَانَ عِنْدِي زُكَامٌ وَحُمَّى، وَبَقِيتُ فِي السَّرِيرِ ثَلَاثَةَ أَيَّامٍ.', en: '… I had a cold and a fever, and I stayed in bed for three days.' },
      { ar: '… وَمِنَ الآنَ سَأَلْبَسُ مِعْطَفًا دَائِمًا، فَالصِّحَّةُ فِي رَأْيِي أَهَمُّ مِنَ اللَّعِبِ!', en: '… from now on I will always wear a coat — in my opinion health matters more than play!' },
    ],
  },
  ladderQs: [
    { q: 'مَاذَا تَفْعَلُ عِنْدَمَا يُؤْلِمُكَ رَأْسُكَ؟', l1: 'عِنْدَمَا يُؤْلِمُنِي رَأْسِي …', l2: '… لِأَنَّ …', l3: '… مَثَلًا أَمْسِ …' },
    { q: 'هَلْ تَذْهَبُ إِلَى المَدْرَسَةِ عِنْدَمَا تَكُونُ مَرِيضًا؟', l1: 'نَعَمْ / لَا، …', l2: '… لِأَنَّ …', l3: '… آخِرَ مَرَّةٍ …' },
    { q: 'كَيْفَ تَشْعُرُ اليَوْمَ؟', l1: 'أَشْعُرُ …', l2: '… لِأَنِّي …', l3: '… مُنْذُ …' },
    { q: 'مَنْ يَعْتَنِي بِكَ عِنْدَمَا تَمْرَضُ؟', l1: '… تَعْتَنِي بِي', l2: '… لِأَنَّ …', l3: '… وَتُعْطِينِي …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a phone call to your football coach', title: 'Role play 1 — Calling your coach: you are ill', ar: 'أَتَّصِلُ بِالمُدَرِّبِ', you: 'a player who is ill', them: 'the football coach',
      tasks: [
        { ex: 'أَهْلًا! لِمَاذَا لَمْ تَأْتِ إِلَى التَّدْرِيبِ؟', task: 'Say you are ill.', plan: 'لِمَاذَا ← لِأَنِّي مَرِيضٌ …', model: 'آسِفٌ، لِأَنِّي مَرِيضٌ اليَوْمَ.', modelEn: 'Sorry, because I am ill today.' },
        { ex: 'مَا المُشْكِلَةُ؟', task: 'Say what hurts.', plan: 'مَا ← يُؤْلِمُنِي …', model: 'يُؤْلِمُنِي حَلْقِي، وَعِنْدِي سُعَالٌ.', modelEn: 'My throat hurts, and I have a cough.' },
        { ex: 'مُنْذُ مَتَى؟', task: 'Say since when.', plan: 'مُنْذُ مَتَى ← مُنْذُ …', model: 'مُنْذُ يَوْمَيْنِ.', modelEn: 'For two days.' },
        { ex: 'هَلْ ذَهَبْتَ إِلَى الطَّبِيبِ؟', task: 'Say if you saw a doctor.', plan: 'هَلْ ← نَعَمْ، ذَهَبْتُ …', model: 'نَعَمْ، ذَهَبْتُ أَمْسِ، وَأَعْطَانِي دَوَاءً.', modelEn: 'Yes, I went yesterday, and he gave me medicine.' },
        { unexpected: true, ex: 'هَلْ تَسْتَطِيعُ أَنْ تَلْعَبَ يَوْمَ السَّبْتِ؟', task: 'Answer the unexpected question.', plan: 'هَلْ ← نَعَمْ / لَا + أَظُنُّ …', model: 'أَظُنُّ ذٰلِكَ، إِذَا شَعَرْتُ بِتَحَسُّنٍ.', modelEn: 'I think so, if I feel better.' },
      ],
      girl: 'تَأْتِي · ذَهَبْتِ · تَسْتَطِيعِينَ — and the Speaker says مَرِيضَةٌ',
      notes: 'Language: yuʾlimunī ḥalqī (my throat hurts me) · ʿindī suʿālun · mundhu yawmayni (dual) · ʿaṭānī dawāʾan (past).',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'the school office after a PE injury', title: 'Role play 2 — An injury in the PE lesson', ar: 'إِصَابَةٌ فِي حِصَّةِ الرِّيَاضَةِ', you: 'an injured student', them: 'the school first-aider',
      tasks: [
        { ex: 'مَاذَا حَدَثَ؟', task: 'Explain what happened (past, sequence).', model: 'كُنْتُ أَرْكُضُ فِي المَلْعَبِ، ثُمَّ سَقَطْتُ عَلَى رِجْلِي اليُسْرَى.', modelEn: 'I was running on the pitch, then I fell on my left leg.' },
        { ex: 'أَيْنَ الأَلَمُ بِالضَّبْطِ؟', task: 'Describe the pain precisely.', model: 'يُؤْلِمُنِي كَاحِلِي كَثِيرًا، وَلَا أَسْتَطِيعُ أَنْ أَمْشِيَ جَيِّدًا.', modelEn: 'My ankle hurts a lot, and I can’t walk well.' },
        { ex: 'هَلْ حَدَثَ هٰذَا مِنْ قَبْلُ؟', task: 'Compare with a past injury.', model: 'نَعَمْ، فِي السَّنَةِ المَاضِيَةِ كَسَرْتُ يَدِي، لٰكِنَّ هٰذَا الأَلَمَ أَخَفُّ.', modelEn: 'Yes, last year I broke my hand, but this pain is lighter.' },
        { ex: 'سَأَضَعُ الثَّلْجَ عَلَى رِجْلِكَ.', task: 'ASK what you should do next.', model: 'شُكْرًا، وَهَلْ يَجِبُ أَنْ أَذْهَبَ إِلَى المُسْتَشْفَى؟', modelEn: 'Thank you — should I go to the hospital?' },
        { unexpected: true, ex: 'كَيْفَ سَتَرْجِعُ إِلَى البَيْتِ؟', task: 'Answer the unexpected question (future).', model: 'سَأَتَّصِلُ بِأُمِّي، وَسَتَأْتِي بِالسَّيَّارَةِ بَعْدَ نِصْفِ سَاعَةٍ.', modelEn: 'I will call my mum, and she will come by car in half an hour.' },
      ],
      girl: 'رِجْلِكِ · سَتَرْجِعِينَ',
      notes: 'Language: kuntu arkuḍu (was running) · possessive suffixes (kāḥilī, rijlī) · comparison akhaffu · hal yajibu an + verb in -a · future plan.',
    },
  ],
  convAr: 'صِحَّتِي',
  conv: [
    { route: 'Core', q: 'كَيْفَ حَالُكَ اليَوْمَ؟', en: 'How are you today?', push: 'وَأَمْسِ؟' },
    { route: 'Core', q: 'مَاذَا يُؤْلِمُكَ عِنْدَمَا تَكُونُ مُتْعَبًا؟', en: 'What hurts when you are tired?', push: 'وَمَاذَا تَفْعَلُ؟' },
    { route: 'Develop', q: 'صِفْ آخِرَ مَرَّةٍ كُنْتَ فِيهَا مَرِيضًا.', en: 'Describe the last time you were ill.', push: 'كَمْ يَوْمًا؟' },
    { route: 'Develop', q: 'مَاذَا تَأْكُلُ عِنْدَمَا يَكُونُ عِنْدَكَ زُكَامٌ؟', en: 'What do you eat when you have a cold?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'هَلْ يَذْهَبُ النَّاسُ إِلَى الطَّبِيبِ بِسُرْعَةٍ كَبِيرَةٍ؟', en: 'Do people go to the doctor too quickly?', push: 'وَمَا رَأْيُكَ؟' },
    { route: 'Stretch', q: 'كَيْفَ تَحْمِي نَفْسَكَ مِنَ الأَمْرَاضِ فِي الشِّتَاءِ؟', en: 'How do you protect yourself from illness in winter?', push: 'وَهَلْ تَنْجَحُ؟' },
  ],
  convModels: [
    { q: 'صِفْ آخِرَ مَرَّةٍ كُنْتَ فِيهَا مَرِيضًا.', model: 'فِي شَهْرِ يَنَايِرَ كَانَ عِنْدِي زُكَامٌ شَدِيدٌ، لِأَنَّ أَخِي الصَّغِيرَ كَانَ مَرِيضًا قَبْلِي؛ بَقِيتُ فِي البَيْتِ أَرْبَعَةَ أَيَّامٍ، وَشَرِبْتُ الشَّايَ بِالعَسَلِ كُلَّ يَوْمٍ.', modelEn: 'A: a bad cold in January · R: my little brother was ill before me · E: four days at home, tea with honey every day.' },
    { q: 'مَاذَا تَأْكُلُ عِنْدَمَا يَكُونُ عِنْدَكَ زُكَامٌ؟', model: 'آكُلُ شُورْبَةَ الدَّجَاجِ، لِأَنَّهَا سَاخِنَةٌ وَتُرِيحُ حَلْقِي؛ تَطْبُخُهَا جَدَّتِي دَائِمًا بِالثُّومِ وَالزَّنْجَبِيلِ، وَفِي المَرَّةِ القَادِمَةِ سَأَطْبُخُهَا أَنَا.', modelEn: 'A: chicken soup · R: it’s hot and soothes my throat · E: grandma always adds garlic and ginger · T: next time I’ll cook it myself.' },
    { q: 'هَلْ يَذْهَبُ النَّاسُ إِلَى الطَّبِيبِ بِسُرْعَةٍ كَبِيرَةٍ؟', model: 'فِي رَأْيِي بَعْضُ النَّاسِ يَذْهَبُونَ مِنْ أَجْلِ زُكَامٍ بَسِيطٍ، مِمَّا يَجْعَلُ العِيَادَاتِ مُزْدَحِمَةً؛ لٰكِنْ إِذَا كَانَتِ الحُمَّى قَوِيَّةً، فَيَجِبُ أَنْ نَذْهَبَ فَوْرًا.', modelEn: 'Opinion: some go for a simple cold, making clinics crowded · contrast/condition: but if the fever is high we must go at once.' },
  ],
  talk: {
    title: 'One minute: a time I was ill', ar: 'عِنْدَمَا كُنْتُ مَرِيضًا',
    text: 'Talk for one minute about a time you were ill or hurt: what happened, what hurt, how long it lasted, who helped you — and what you do now to stay well.',
    routes: {
      core: '30 seconds: three sentences — what hurt, عِنْدِي …, and how long (مُنْذُ / … أَيَّامٍ).',
      develop: '60 seconds: add how it happened (past), who helped, and a reason.',
      stretch: '90 seconds: past + present + future, and advice for others (يَجِبُ أَنْ …).',
    },
    phrases: [['فِي الشِّتَاءِ المَاضِي …', 'last winter …'], ['كَانَ يُؤْلِمُنِي …', '… was hurting me'], ['بَقِيتُ فِي البَيْتِ … أَيَّامٍ', 'I stayed at home for … days'], ['الآنَ أَحْرِصُ عَلَى …', 'now I make sure to …']],
  },
  checkCore: 'used يُؤْلِمُنِي … / عِنْدِي … with the right body part',
  checkDevelop: 'said how long with مُنْذُ and used a possessive ending (رَأْسِي · رِجْلُهُ)',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (an email to a teacher about missing school), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'School medical form', ar: 'اسْتِمَارَةٌ طِبِّيَّةٌ مَدْرَسِيَّةٌ',
    fields: [
      { core: true, ar: 'اسْمُ الطَّالِبِ', en: 'Student’s name', tip: 'First name + family name.' },
      { core: true, ar: 'العُمُرُ', en: 'Age', tip: 'أَرْبَعَ عَشْرَةَ سَنَةً' },
      { core: true, ar: 'الحَسَاسِيَّةُ', en: 'Allergies', tip: 'لَا تُوجَدُ · الفُولُ السُّودَانِيُّ' },
      { core: true, ar: 'مَا يُؤْلِمُكَ الآنَ', en: 'What hurts now', tip: 'رَأْسِي · بَطْنِي' },
      { core: true, ar: 'مُنْذُ مَتَى؟', en: 'Since when', tip: 'مُنْذُ أَمْسِ' },
      { ar: 'جُمْلَةٌ: صِفْ كَيْفَ تَشْعُرُ', en: 'ONE sentence: describe how you feel', tip: 'أَشْعُرُ بِالتَّعَبِ وَعِنْدِي …' },
    ],
  },
  Q2: {
    title: 'Question 2: an email to your teacher', ar: 'رِسَالَةٌ إِلَى مُعَلِّمِكَ',
    task: 'You missed school this week because you were ill. Write an email in Arabic to your Arabic teacher of about 80–90 words. You must include: • why you were absent and for how long • what was wrong (symptoms) • what the doctor told you to do • when you will return and a question about the homework.',
    phrases: [['لَمْ أَحْضُرْ إِلَى المَدْرَسَةِ لِأَنَّ …', 'I did not come to school because …'], ['كَانَ عِنْدِي … وَكَانَ يُؤْلِمُنِي …', 'I had … and my … hurt'], ['نَصَحَنِي الطَّبِيبُ بِأَنْ …', 'the doctor advised me to …'], ['سَأَرْجِعُ يَوْمَ …', 'I will be back on …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى مُعَلِّمِكَ عَنْ غِيَابِكَ (٨٠–٩٠ كَلِمَةً).', 'Write to your teacher about your absence (80–90 words).'],
      ['1', 'لِمَاذَا غِبْتَ؟ وَكَمْ يَوْمًا؟', 'Why you were absent, for how long'],
      ['2', 'مَاذَا كَانَ عِنْدَكَ؟', 'What was wrong (symptoms)'],
      ['3', 'بِمَاذَا نَصَحَكَ الطَّبِيبُ؟', 'What the doctor advised'],
      ['4', 'مَتَى سَتَرْجِعُ؟ وَاسْأَلْ عَنِ الوَاجِبِ.', 'When you will return; ask about homework'],
    ],
    decode: ['an email to a TEACHER → polite: أُسْتَاذِي العَزِيزُ / مَعَ الاحْتِرَامِ', 'لِمَاذَا غِبْتَ · كَمْ → PAST + a reason + a number of days', 'مَاذَا كَانَ عِنْدَكَ → PAST symptoms (كَانَ عِنْدِي)', 'بِمَاذَا نَصَحَكَ → PAST advice: نَصَحَنِي بِأَنْ …', 'سَتَرْجِعُ · اسْأَلْ → FUTURE + a polite question'],
    coreFrames: [
      { ar: 'أُسْتَاذِي العَزِيزُ،', en: 'Dear teacher,' },
      { ar: 'لَمْ أَحْضُرْ إِلَى المَدْرَسَةِ ______ أَيَّامٍ، لِأَنِّي كُنْتُ مَرِيضًا.', en: '1 · I missed school for … days because I was ill.' },
      { ar: 'كَانَ عِنْدِي ______ ، وَكَانَ يُؤْلِمُنِي ______ .', en: '2 · I had …, and my … hurt.' },
      { ar: 'نَصَحَنِي الطَّبِيبُ بِأَنْ ______ .', en: '3 · The doctor advised me to …' },
      { ar: 'سَأَرْجِعُ يَوْمَ ______ . مَا هُوَ الوَاجِبُ، مِنْ فَضْلِكَ؟', en: '4 · I will be back on … What is the homework, please?' },
      { ar: 'مَعَ الاحْتِرَامِ،', en: 'Respectfully,' },
    ],
    developFrames: [
      { ar: 'أَعْتَذِرُ عَنْ غِيَابِي مُنْذُ يَوْمِ ______ ، لِأَنَّ ______ .', en: '1 · I apologise for my absence since …, because …' },
      { ar: 'فِي البِدَايَةِ ______ ، ثُمَّ ______ .', en: '2 · At first …, then …' },
      { ar: 'قَالَ لِي الطَّبِيبُ إِنَّهُ يَجِبُ أَنْ ______ .', en: '3 · The doctor told me I must …' },
      { ar: 'إِنْ شَاءَ اللّٰهُ سَأَرْجِعُ ______ ، وَهَلْ يُمْكِنُ أَنْ ______ ؟', en: '4 · God willing I will return …, and could you …?' },
    ],
    bank: ['حُمَّى', 'زُكَامٌ', 'سُعَالٌ', 'صُدَاعٌ', 'يُؤْلِمُنِي حَلْقِي', 'أَرْتَاحُ', 'أَشْرَبُ السَّوَائِلَ', 'أَتَحَسَّنُ'],
    model: {
      text: `أُسْتَاذِي العَزِيزُ،
السَّلَامُ عَلَيْكُمْ. أَعْتَذِرُ عَنْ غِيَابِي عَنِ المَدْرَسَةِ ثَلَاثَةَ أَيَّامٍ هٰذَا الأُسْبُوعَ، لِأَنِّي كُنْتُ مَرِيضًا جِدًّا. فِي البِدَايَةِ كَانَ عِنْدِي صُدَاعٌ وَسُعَالٌ خَفِيفٌ، ثُمَّ ارْتَفَعَتْ حَرَارَتِي يَوْمَ الثُّلَاثَاءِ، وَكَانَ يُؤْلِمُنِي حَلْقِي كَثِيرًا. ذَهَبْتُ إِلَى الطَّبِيبِ، فَنَصَحَنِي بِأَنْ أَرْتَاحَ فِي البَيْتِ، وَأَنْ أَشْرَبَ السَّوَائِلَ السَّاخِنَةَ كَثِيرًا، وَأَعْطَانِي دَوَاءً لِلْحُمَّى، آخُذُهُ مَرَّتَيْنِ فِي اليَوْمِ بَعْدَ الأَكْلِ. الآنَ أَشْعُرُ بِتَحَسُّنٍ، وَإِنْ شَاءَ اللّٰهُ سَأَرْجِعُ إِلَى المَدْرَسَةِ يَوْمَ الاثْنَيْنِ القَادِمِ. هَلْ يُمْكِنُ أَنْ تُرْسِلَ لِي وَاجِبَ هٰذَا الأُسْبُوعِ، مِنْ فَضْلِكَ؟
مَعَ الاحْتِرَامِ،
طَالِبُكَ حَمْزَةُ`,
      en: '“Dear teacher, peace be upon you. I apologise for missing school for three days this week, because I was very ill. At first I had a headache and a slight cough, then my temperature went up on Tuesday and my throat hurt a lot. I went to the doctor, who advised me to rest at home and to drink plenty of hot drinks, and gave me medicine for the fever, which I take twice a day after meals. Now I feel better, and God willing I will return to school next Monday. Could you send me this week’s homework, please? Respectfully, your student Hamza.”',
      find: ['أَعْتَذِرُ عَنْ غِيَابِي', 'فِي البِدَايَةِ … ثُمَّ', 'فَنَصَحَنِي بِأَنْ أَرْتَاحَ', 'هَلْ يُمْكِنُ أَنْ تُرْسِلَ'],
    },
  },
  upgrade: [
    { ar: 'يُؤْلِمُنِي ظَهْرِي.', en: 'My back hurts.' },
    { ar: 'يُؤْلِمُنِي ظَهْرِي كَثِيرًا مُنْذُ ثَلَاثَةِ أَيَّامٍ.', en: '… a lot, for three days.' },
    { ar: 'يُؤْلِمُنِي ظَهْرِي مُنْذُ ثَلَاثَةِ أَيَّامٍ، لِأَنِّي حَمَلْتُ حَقِيبَةً ثَقِيلَةً جِدًّا.', en: '… because I carried a very heavy bag.' },
    { ar: '… وَفِي رَأْيِي الحَقَائِبُ المَدْرَسِيَّةُ ثَقِيلَةٌ، لِذٰلِكَ سَأَتْرُكُ بَعْضَ الكُتُبِ فِي الخِزَانَةِ.', en: '… in my opinion school bags are heavy, so I will leave some books in my locker.' },
  ],
  builder: [
    { en: 'His head hurts him.', cols: [['يُؤْلِمُهُ', 'يُؤْلِمُنِي'], ['رَأْسُهُ', 'رَأْسِي'], ['كَثِيرًا', 'أَمْسِ']], key: [0, 0, 0], why: 'His → -hu on both: يُؤْلِمُهُ رَأْسُهُ.' },
    { en: 'I have had a fever since yesterday.', cols: [['عِنْدِي', 'عِنْدَهُ'], ['حُمَّى', 'حُمَّاهُ'], ['مُنْذُ أَمْسِ', 'بَعْدَ أَمْسِ']], key: [0, 0, 0], why: 'Since = مُنْذُ; I have = عِنْدِي.' },
    { en: 'My sister was tired, so she stayed at home.', cols: [['كَانَتْ أُخْتِي', 'كَانَ أُخْتِي'], ['مُتْعَبَةً', 'مُتْعَبًا'], ['فَبَقِيَتْ فِي البَيْتِ', 'فَبَقِيتُ فِي البَيْتِ']], key: [0, 0, 0], why: 'She → كَانَتْ … مُتْعَبَةً · بَقِيَتْ.' },
  ],
  errors: [
    { wrong: 'يُؤْلِمُنِي رَأْسُهُ.', hint: 'Whose head? Check both endings.', right: 'يُؤْلِمُنِي رَأْسِي.', why: 'My head hurts me → both endings are “my”: يُؤْلِمُنِي رَأْسِي.' },
    { wrong: 'عِنْدِي زُكَامٌ مِنْ يَوْمَيْنِ.', hint: 'Which word means “for / since”?', right: 'عِنْدِي زُكَامٌ مُنْذُ يَوْمَيْنِ.', why: 'Duration = مُنْذُ: مُنْذُ يَوْمَيْنِ.' },
    { wrong: 'أُخْتِي مَرِيضٌ.', hint: 'Agreement.', right: 'أُخْتِي مَرِيضَةٌ.', why: 'A girl → feminine adjective: مَرِيضَةٌ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: an accident I remember', ar: 'حَادِثٌ أَتَذَكَّرُهُ',
    task: 'Full Q3 title: “Health and the body”. Today write ONLY the past paragraph: an accident or illness you remember — what happened, what hurt, who helped you, why it mattered and how you felt.',
    formula: [
      { ar: 'فِي العُطْلَةِ المَاضِيَةِ سَقَطْتُ عَنْ دَرَّاجَتِي.', en: 'T · Last holiday I fell off my bike.' },
      { ar: 'كَانَتْ يَدِي تُؤْلِمُنِي، فَذَهَبْنَا إِلَى المُسْتَشْفَى.', en: 'D · My hand hurt, so we went to hospital.' },
      { ar: 'حَدَثَ ذٰلِكَ لِأَنِّي لَمْ أَلْبَسِ الخُوذَةَ.', en: 'R · because I wasn’t wearing a helmet.' },
      { ar: 'شَعَرْتُ بِالخَوْفِ، وَالآنَ أَلْبَسُهَا دَائِمًا.', en: 'F · I was scared — now I always wear it.' },
    ],
    phrases: [['فِي … المَاضِي سَقَطْتُ …', 'last … I fell …'], ['كَانَ يُؤْلِمُنِي … كَثِيرًا', '… hurt me a lot'], ['أَخَذَنِي … إِلَى …', '… took me to …'], ['قَالَ الطَّبِيبُ إِنَّ …', 'the doctor said that …'], ['مُنْذُ ذٰلِكَ الوَقْتِ …', 'since then …']],
    model: {
      text: 'فِي العُطْلَةِ الصَّيْفِيَّةِ المَاضِيَةِ سَقَطْتُ عَنْ دَرَّاجَتِي فِي الحَدِيقَةِ، لِأَنِّي كُنْتُ أَرْكَبُهَا بِسُرْعَةٍ كَبِيرَةٍ. كَانَتْ يَدِي اليُمْنَى تُؤْلِمُنِي كَثِيرًا، فَأَخَذَنِي أَبِي إِلَى المُسْتَشْفَى فَوْرًا. قَالَ الطَّبِيبُ إِنَّ يَدِي مَكْسُورَةٌ، وَوَضَعَ عَلَيْهَا الجِبْسَ سِتَّةَ أَسَابِيعَ. فِي البِدَايَةِ شَعَرْتُ بِالحُزْنِ، لِأَنِّي لَمْ أَسْتَطِعْ أَنْ أَسْبَحَ مَعَ أَصْدِقَائِي، لٰكِنَّ إِخْوَتِي كَتَبُوا أَسْمَاءَهُمْ عَلَى الجِبْسِ، فَضَحِكْتُ. مُنْذُ ذٰلِكَ الوَقْتِ أَلْبَسُ الخُوذَةَ دَائِمًا، وَأَرْكَبُ بِبُطْءٍ.',
      en: 'T: last summer holiday I fell off my bike in the park, because I was riding very fast · D: my right hand hurt a lot, so my dad took me to hospital; the doctor said it was broken and put it in plaster for six weeks · F: at first I felt sad because I couldn’t swim with my friends, but my brothers wrote their names on the plaster and I laughed · since then I always wear a helmet and ride slowly.',
      find: ['سَقَطْتُ عَنْ دَرَّاجَتِي', 'لِأَنِّي كُنْتُ أَرْكَبُهَا', 'قَالَ الطَّبِيبُ إِنَّ', 'مُنْذُ ذٰلِكَ الوَقْتِ'],
    },
  },
};

module.exports = { speak, write };
