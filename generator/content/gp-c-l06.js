'use strict';
/* Guided Practice Rooms · TC-L06 · The digital world and communication. New tasks. Teacher-made. */
const XP = require('./xp-c-l06');

const base = { topic: 'C', n: 6, short: 'Digital World and Communication', arShort: 'العَالَمُ الرَّقْمِيُّ وَالتَّوَاصُلُ', fileTitle: 'Digital_World_Communication', title: 'The digital world and communication', icon: 'FaMobileScreen', grammar: 'present-tense habits with frequency (marratan fī …, ʿādatan); verbs + prepositions (atawāṣalu maʿa · uʿalliqu ʿalā · abḥathu ʿan); verbal nouns (istikhdām, idmān); advantages / disadvantages (min fawāʾidi … · min ʿuyūbi …); comparatives' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up on technology, the answer ladder, two new role plays (a phone-shop problem, a debate about a screen-free week), a topic conversation with A-R-E-T, and a one-minute talk about technology in their life.',
  words: XP.speak.words,
  words1: { title: 'Devices and apps', ar: 'الأَجْهِزَةُ وَالتَّطْبِيقَاتُ' },
  words2: { title: 'Online life: verbs and issues', ar: 'الحَيَاةُ عَلَى الإِنْتَرْنِتِ' },
  ladder: {
    q: 'كَيْفَ تَسْتَعْمِلُ هَاتِفَكَ؟', qEn: 'How do you use your phone?',
    rungs: [
      { ar: 'أَسْتَعْمِلُ هَاتِفِي كُلَّ يَوْمٍ.', en: 'I use my phone every day.' },
      { ar: 'أَسْتَعْمِلُ هَاتِفِي كُلَّ يَوْمٍ لِكَيْ أَتَوَاصَلَ مَعَ أَصْدِقَائِي.', en: '… to keep in touch with my friends.' },
      { ar: '… وَأَبْحَثُ عَنْ مَعْلُومَاتٍ لِلْوَاجِبَاتِ، وَأَسْمَعُ البُودْكَاسْتَ فِي الحَافِلَةِ.', en: '… I search for information for homework, and listen to podcasts on the bus.' },
      { ar: '… لٰكِنْ فِي الشَّهْرِ المَاضِي قَضَيْتُ سِتَّ سَاعَاتٍ يَوْمِيًّا عَلَيْهِ، لِذٰلِكَ أُغْلِقُهُ الآنَ فِي التَّاسِعَةِ مَسَاءً.', en: '… but last month I spent six hours a day on it, so now I switch it off at 9 p.m.' },
    ],
  },
  ladderQs: [
    { q: 'مَا تَطْبِيقُكَ المُفَضَّلُ؟', l1: 'تَطْبِيقِي المُفَضَّلُ …', l2: '… لِأَنَّهُ …', l3: '… وَأَمْسِ …' },
    { q: 'كَمْ سَاعَةً تَقْضِي عَلَى الإِنْتَرْنِتِ؟', l1: 'أَقْضِي … سَاعَاتٍ', l2: '… وَهٰذَا كَثِيرٌ / قَلِيلٌ لِأَنَّ …', l3: '… وَفِي العُطْلَةِ …' },
    { q: 'هَلْ تَنْشُرُ صُوَرًا عَلَى وَسَائِلِ التَّوَاصُلِ؟', l1: 'نَعَمْ / لَا، …', l2: '… لِأَنَّ الخُصُوصِيَّةَ …', l3: '… وَمَرَّةً …' },
    { q: 'كَيْفَ كَانَتِ الحَيَاةُ بِدُونِ إِنْتَرْنِتٍ؟', l1: 'كَانَ النَّاسُ …', l2: '… أَمَّا الآنَ فَـ …', l3: '… وَلَوْ … لَـ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a phone shop', title: 'Role play 1 — A problem with my new phone', ar: 'مُشْكِلَةٌ فِي هَاتِفِي الجَدِيدِ', you: 'a customer', them: 'the shop assistant',
      tasks: [
        { ex: 'أَهْلًا، كَيْفَ أُسَاعِدُكَ؟', task: 'Explain the problem.', plan: 'كَيْفَ ← اشْتَرَيْتُ … ، لٰكِنَّ …', model: 'اشْتَرَيْتُ هٰذَا الهَاتِفَ أَمْسِ، لٰكِنَّ الشَّاشَةَ لَا تَعْمَلُ.', modelEn: 'I bought this phone yesterday, but the screen doesn’t work.' },
        { ex: 'مَتَى اشْتَرَيْتَهُ؟', task: 'Say when.', plan: 'مَتَى ← اشْتَرَيْتُهُ يَوْمَ …', model: 'اشْتَرَيْتُهُ يَوْمَ السَّبْتِ صَبَاحًا.', modelEn: 'I bought it on Saturday morning.' },
        { ex: 'مَاذَا تَسْتَعْمِلُ فِيهِ أَكْثَرَ؟', task: 'Name two uses.', plan: 'مَاذَا ← أَسْتَعْمِلُهُ لِكَيْ …', model: 'أَسْتَعْمِلُهُ لِكَيْ أَتَوَاصَلَ مَعَ عَائِلَتِي وَأُحَمِّلَ الصُّوَرَ.', modelEn: 'I use it to keep in touch with my family and upload photos.' },
        { ex: 'هَلْ عِنْدَكَ الإِيصَالُ؟', task: 'Answer and ASK for a solution.', plan: 'هَلْ ← نَعَمْ، … هَلْ يُمْكِنُ أَنْ …؟', model: 'نَعَمْ، تَفَضَّلْ. هَلْ يُمْكِنُ أَنْ أُبَدِّلَهُ؟', modelEn: 'Yes, here you are. Can I exchange it?' },
        { unexpected: true, ex: 'هَلْ تُفَضِّلُ هَاتِفًا جَدِيدًا أَمْ أَنْ نُرْجِعَ لَكَ المَالَ؟', task: 'Answer the unexpected question with a reason.', plan: 'أَمْ ← أُفَضِّلُ … لِأَنَّ …', model: 'أُفَضِّلُ هَاتِفًا جَدِيدًا، لِأَنِّي أَحْتَاجُهُ لِلْمَدْرَسَةِ.', modelEn: 'I prefer a new phone, because I need it for school.' },
      ],
      girl: 'أُسَاعِدُكِ · اشْتَرَيْتِهِ · تَسْتَعْمِلِينَ · عِنْدَكِ · تُفَضِّلِينَ · لَكِ',
      notes: 'Language: ishtaraytu + lākinna · object pronoun -hu (ishtaraytuhu) · atawāṣalu maʿa · uḥammilu · hal yumkinu an + verb in -a.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a class debate', title: 'Role play 2 — A screen-free week?', ar: 'أُسْبُوعٌ بِلَا شَاشَاتٍ؟', you: 'a student giving your view', them: 'the debate chair',
      tasks: [
        { ex: 'تَقْتَرِحُ المَدْرَسَةُ أُسْبُوعًا بِلَا شَاشَاتٍ. مَا رَأْيُكَ؟', task: 'Give your opinion with a reason.', model: 'فِي رَأْيِي هِيَ فِكْرَةٌ جَيِّدَةٌ، لِأَنَّنَا نَقْضِي وَقْتًا طَوِيلًا جِدًّا أَمَامَ الشَّاشَاتِ.', modelEn: 'In my view it’s a good idea, because we spend far too long in front of screens.' },
        { ex: 'وَمَا فَوَائِدُ التِّكْنُولُوجْيَا؟', task: 'Give two advantages.', model: 'مِنْ فَوَائِدِهَا أَنَّنَا نَتَعَلَّمُ بِسُرْعَةٍ، وَنَتَوَاصَلُ مَعَ أَقَارِبِنَا فِي بُلْدَانٍ بَعِيدَةٍ.', modelEn: 'Among its benefits: we learn quickly and keep in touch with relatives in far-off countries.' },
        { ex: 'هَلْ حَاوَلْتَ أَنْ تَعِيشَ بِدُونِ هَاتِفٍ؟', task: 'Tell a past experience.', model: 'نَعَمْ، فِي المُخَيَّمِ الصَّيْفِيِّ لَمْ يَكُنْ عِنْدَنَا إِنْتَرْنِتٌ، فَتَكَلَّمْنَا أَكْثَرَ، وَنِمْتُ أَفْضَلَ.', modelEn: 'Yes, at summer camp we had no internet, so we talked more, and I slept better.' },
        { ex: 'بَعْضُ الطُّلَّابِ يَقُولُونَ إِنَّ هٰذَا مُسْتَحِيلٌ.', task: 'React and ASK the chair a question.', model: 'أَفْهَمُ ذٰلِكَ، لٰكِنْ كَيْفَ سَنَعْمَلُ الوَاجِبَاتِ الَّتِي تُرْسَلُ بِالإِنْتَرْنِتِ؟', modelEn: 'I understand, but how will we do the homework that is sent online?' },
        { unexpected: true, ex: 'لَوِ اخْتَفَى الإِنْتَرْنِتُ غَدًا، مَاذَا يَحْدُثُ؟', task: 'Answer the unexpected question (law … la- + concession).', model: 'لَوِ اخْتَفَى، لَتَوَقَّفَتْ بُنُوكٌ وَمُسْتَشْفَيَاتٌ كَثِيرَةٌ؛ صَحِيحٌ أَنَّنَا سَنَقْرَأُ أَكْثَرَ، غَيْرَ أَنَّ الحَيَاةَ سَتَكُونُ صَعْبَةً جِدًّا.', modelEn: 'If it vanished, many banks and hospitals would stop — we’d read more, but life would be very hard.' },
      ],
      girl: 'رَأْيُكِ · حَاوَلْتِ · تَعِيشِي',
      notes: 'Stretch language: min fawāʾidihā anna … · lam yakun ʿindanā + fa- result · passive tursalu · law … la- + ṣaḥīḥun anna … ghayra anna.',
    },
  ],
  convAr: 'التِّكْنُولُوجْيَا فِي حَيَاتِي',
  conv: [
    { route: 'Core', q: 'هَلْ عِنْدَكَ هَاتِفٌ ذَكِيٌّ؟', en: 'Do you have a smartphone?', push: 'مُنْذُ مَتَى؟' },
    { route: 'Core', q: 'مَعَ مَنْ تَتَوَاصَلُ كُلَّ يَوْمٍ؟', en: 'Who do you keep in touch with every day?', push: 'كَيْفَ؟' },
    { route: 'Develop', q: 'كَيْفَ تَسْتَعْمِلُ التِّكْنُولُوجْيَا فِي الدِّرَاسَةِ؟', en: 'How do you use technology for studying?', push: 'مَثَلًا أَمْسِ؟' },
    { route: 'Develop', q: 'مَا الفَرْقُ بَيْنَ اسْتِخْدَامِكَ لِلْهَاتِفِ وَاسْتِخْدَامِ وَالِدَيْكَ؟', en: 'How is your phone use different from your parents’?', push: 'مَنْ يَسْتَعْمِلُهُ أَكْثَرَ؟' },
    { route: 'Stretch', q: 'هَلْ وَسَائِلُ التَّوَاصُلِ الاجْتِمَاعِيِّ خَطِيرَةٌ عَلَى الشَّبَابِ؟', en: 'Is social media dangerous for young people?', push: 'وَمَا الحَلُّ؟' },
    { route: 'Stretch', q: 'كَيْفَ سَتَتَغَيَّرُ المَدَارِسُ بِسَبَبِ التِّكْنُولُوجْيَا؟', en: 'How will schools change because of technology?', push: 'هَلْ هٰذَا جَيِّدٌ؟' },
  ],
  convModels: [
    { q: 'كَيْفَ تَسْتَعْمِلُ التِّكْنُولُوجْيَا فِي الدِّرَاسَةِ؟', model: 'أَسْتَعْمِلُ الحَاسُوبَ لِكَيْ أَكْتُبَ الوَاجِبَاتِ وَأَبْحَثَ عَنِ المَعْلُومَاتِ، لِأَنَّهُ أَسْرَعُ مِنَ الكُتُبِ؛ أَمْسِ شَاهَدْتُ فِيدْيُو عَنِ الأَحْمَاضِ، وَسَأَسْتَعْمِلُ تَطْبِيقًا لِلْمُرَاجَعَةِ قَبْلَ الامْتِحَانِ.', modelEn: 'A: the computer for homework and research · R: faster than books · E: yesterday a video about acids · T: I’ll use a revision app before the exam.' },
    { q: 'مَا الفَرْقُ بَيْنَ اسْتِخْدَامِكَ لِلْهَاتِفِ وَاسْتِخْدَامِ وَالِدَيْكَ؟', model: 'أَنَا أَسْتَعْمِلُهُ لِلْأَلْعَابِ وَالفِيدْيُوهَاتِ، أَمَّا أَبِي فَيَسْتَعْمِلُهُ لِلْعَمَلِ فَقَطْ؛ لٰكِنَّ أُمِّي تَقْضِي وَقْتًا أَطْوَلَ مِنِّي عَلَيْهِ، لِأَنَّهَا تَتَكَلَّمُ مَعَ أَخَوَاتِهَا فِي العِرَاقِ كُلَّ مَسَاءٍ!', modelEn: 'A: I use it for games and videos, dad only for work · contrast: but mum spends longer than me · R: she talks to her sisters in Iraq every evening!' },
    { q: 'هَلْ وَسَائِلُ التَّوَاصُلِ الاجْتِمَاعِيِّ خَطِيرَةٌ عَلَى الشَّبَابِ؟', model: 'صَحِيحٌ أَنَّهَا تُسَاعِدُنَا عَلَى التَّوَاصُلِ، غَيْرَ أَنَّهَا قَدْ تُسَبِّبُ الإِدْمَانَ وَالقَلَقَ؛ مَثَلًا، صَدِيقَتِي كَانَتْ حَزِينَةً لِأَنَّ صُورَتَهَا لَمْ تَحْصُلْ عَلَى إِعْجَابَاتٍ، لِذٰلِكَ يَجِبُ أَنْ نَسْتَعْمِلَهَا بِحَذَرٍ.', modelEn: 'Concession: it helps us connect, but it can cause addiction and anxiety · E: my friend was upset when her photo got no likes · so we must use it carefully.' },
  ],
  talk: {
    title: 'One minute: technology in my life', ar: 'التِّكْنُولُوجْيَا فِي حَيَاتِي',
    text: 'Talk for one minute about technology in your life: the devices and apps you use, how often and why, one advantage and one disadvantage — a time technology helped (or annoyed) you — and your opinion.',
    routes: {
      core: '30 seconds: two devices or apps, how often, one reason.',
      develop: '60 seconds: add an advantage, a disadvantage and a past example.',
      stretch: '90 seconds: compare with your parents’ generation and add a concession.',
    },
  },
  checkCore: 'used verbs with the right preposition (أَتَوَاصَلُ مَعَ · أَبْحَثُ عَنْ)',
  checkDevelop: 'gave an advantage and a disadvantage (مِنْ فَوَائِدِ … · مِنْ عُيُوبِ …)',
};
speak.ladderQs[3].l2 = '… أَمَّا الآنَ فَنَحْنُ …';
speak.ladderQs[3].l3 = '… وَلَوْ عِشْتُ فِي ذٰلِكَ الوَقْتِ لَقَرَأْتُ …';

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up form, decoding a new Q2 task (a blog post about a digital detox), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'New app: create your profile', ar: 'تَطْبِيقٌ جَدِيدٌ: أَنْشِئْ مَلَفَّكَ',
    fields: [
      { core: true, ar: 'اسْمُ المُسْتَخْدِمِ', en: 'Username', tip: 'A made-up name — never your full name!' },
      { core: true, ar: 'العُمْرُ', en: 'Age', tip: 'خَمْسَ عَشْرَةَ سَنَةً' },
      { core: true, ar: 'الجِهَازُ', en: 'Device', tip: 'هَاتِفٌ ذَكِيٌّ · حَاسُوبٌ' },
      { core: true, ar: 'الاهْتِمَامَاتُ', en: 'Interests', tip: 'الأَلْعَابُ · الطَّبْخُ' },
      { core: true, ar: 'كَمْ سَاعَةً يَوْمِيًّا؟', en: 'Hours per day', tip: 'سَاعَتَانِ' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ هٰذَا التَّطْبِيقَ؟', en: 'ONE sentence: why you want this app', tip: 'أُرِيدُهُ لِكَيْ …' },
    ],
  },
  Q2: {
    title: 'Question 2: my week without a phone', ar: 'أُسْبُوعِي بِدُونِ هَاتِفٍ',
    task: 'You took part in a “digital detox” week. Write a blog post in Arabic of about 80–90 words. You must include: • how you normally use technology • what you did during the week without your phone • one advantage and one disadvantage of the experience • how you will use technology in the future.',
    phrases: [['عَادَةً أَسْتَعْمِلُ … لِكَيْ …', 'normally I use … to …'], ['خِلَالَ الأُسْبُوعِ …', 'during the week …'], ['مِنْ فَوَائِدِ التَّجْرِبَةِ … ، وَمِنْ عُيُوبِهَا …', 'one benefit of the experience … and one drawback …'], ['فِي المُسْتَقْبَلِ سَـ …', 'in the future I will …']],
    rubric: [
      ['task', 'اكْتُبْ مُدَوَّنَةً عَنْ أُسْبُوعِكَ بِدُونِ هَاتِفٍ (٨٠–٩٠ كَلِمَةً).', 'Write a blog post about your week without a phone (80–90 words).'],
      ['1', 'كَيْفَ تَسْتَعْمِلُ التِّكْنُولُوجْيَا عَادَةً؟', 'How you normally use technology'],
      ['2', 'مَاذَا فَعَلْتَ خِلَالَ الأُسْبُوعِ؟', 'What you did during the week'],
      ['3', 'فَائِدَةٌ وَعَيْبٌ لِلتَّجْرِبَةِ.', 'One advantage and one disadvantage'],
      ['4', 'كَيْفَ سَتَسْتَعْمِلُ التِّكْنُولُوجْيَا فِي المُسْتَقْبَلِ؟', 'How you will use technology in future'],
    ],
    decode: ['a BLOG POST → a title, a chatty tone, speak to readers', 'عَادَةً → PRESENT habits + frequency', 'مَاذَا فَعَلْتَ خِلَالَ الأُسْبُوعِ → PAST, in order', 'فَائِدَةٌ وَعَيْبٌ → مِنْ فَوَائِدِ … · مِنْ عُيُوبِ … (balance)', 'سَتَسْتَعْمِلُ → FUTURE (sa- + verb: سَأُغْلِقُ · سَأَحْذِفُ)'],
    coreFrames: [
      { ar: 'أُسْبُوعِي بِدُونِ هَاتِفٍ', en: 'Title: My week without a phone' },
      { ar: 'عَادَةً أَسْتَعْمِلُ هَاتِفِي ______ سَاعَاتٍ كُلَّ يَوْمٍ لِكَيْ ______ .', en: '1 · Normally I use my phone … hours a day to …' },
      { ar: 'خِلَالَ الأُسْبُوعِ ______ وَ ______ .', en: '2 · During the week I … and …' },
      { ar: 'كَانَتِ التَّجْرِبَةُ مُفِيدَةً لِأَنَّ ______ ، لٰكِنَّ ______ .', en: '3 · The experience was useful because …, but …' },
      { ar: 'فِي المُسْتَقْبَلِ سَ ______ .', en: '4 · In the future I will …' },
    ],
    developFrames: [
      { ar: 'أَتَوَاصَلُ مَعَ ______ ، وَأَبْحَثُ عَنْ ______ .', en: '1 · I keep in touch with …, and I search for …' },
      { ar: 'بَدَلًا مِنَ الهَاتِفِ ______ ، ثُمَّ ______ .', en: '2 · Instead of the phone I …, then …' },
      { ar: 'مِنْ فَوَائِدِ التَّجْرِبَةِ ______ ، وَمِنْ عُيُوبِهَا ______ .', en: '3 · One benefit was …, and one drawback was …' },
      { ar: 'قَرَّرْتُ أَنْ ______ ، لِكَيْ ______ .', en: '4 · I decided to …, so that …' },
    ],
    bank: ['هَاتِفٌ ذَكِيٌّ', 'تَطْبِيقٌ', 'وَسَائِلُ التَّوَاصُلِ الاجْتِمَاعِيِّ', 'أَتَوَاصَلُ مَعَ', 'أَتَصَفَّحُ', 'إِدْمَانٌ', 'مِنْ فَوَائِدِ', 'مِنْ عُيُوبِ'],
    model: {
      text: `أُسْبُوعِي بِدُونِ هَاتِفٍ
عَادَةً أَسْتَعْمِلُ هَاتِفِي حَوَالَيْ خَمْسِ سَاعَاتٍ كُلَّ يَوْمٍ، لِكَيْ أَتَوَاصَلَ مَعَ أَصْدِقَائِي، وَأَتَصَفَّحَ الفِيدْيُوهَاتِ، وَأَبْحَثَ عَنْ مَعْلُومَاتٍ لِلْوَاجِبَاتِ. فِي الأُسْبُوعِ المَاضِي أَعْطَيْتُ هَاتِفِي لِأُمِّي سَبْعَةَ أَيَّامٍ! بَدَلًا مِنْهُ قَرَأْتُ رِوَايَتَيْنِ، وَلَعِبْتُ كُرَةَ القَدَمِ مَعَ جِيرَانِي، وَطَبَخْتُ العَشَاءَ مَعَ جَدَّتِي مَرَّتَيْنِ. مِنْ فَوَائِدِ التَّجْرِبَةِ أَنِّي نِمْتُ أَفْضَلَ، وَشَعَرْتُ بِهُدُوءٍ أَكْثَرَ، وَمِنْ عُيُوبِهَا أَنِّي لَمْ أَعْرِفْ أَخْبَارَ أَصْدِقَائِي، فَشَعَرْتُ بِالوَحْدَةِ قَلِيلًا. فِي المُسْتَقْبَلِ سَأُغْلِقُ هَاتِفِي سَاعَةً قَبْلَ النَّوْمِ، وَسَأَحْذِفُ تَطْبِيقَيْنِ، لِكَيْ أَقْضِيَ وَقْتًا أَطْوَلَ مَعَ عَائِلَتِي.
نُورٌ`,
      en: '“My week without a phone. Normally I use my phone about five hours a day, to keep in touch with my friends, browse videos and search for homework information. Last week I gave my phone to my mum for seven days! Instead I read two novels, played football with my neighbours and cooked dinner with my grandmother twice. One benefit was that I slept better and felt calmer; one drawback was that I didn’t know my friends’ news, so I felt a bit lonely. In future I will switch off my phone an hour before bed and delete two apps, so that I spend longer with my family. Nour.”',
      find: ['لِكَيْ أَتَوَاصَلَ مَعَ', 'بَدَلًا مِنْهُ قَرَأْتُ', 'مِنْ فَوَائِدِ … وَمِنْ عُيُوبِهَا', 'سَأُغْلِقُ هَاتِفِي'],
    },
  },
  upgrade: [
    { ar: 'أُحِبُّ الإِنْتَرْنِتَ.', en: 'I like the internet.' },
    { ar: 'أُحِبُّ الإِنْتَرْنِتَ، لِأَنِّي أَتَعَلَّمُ مِنْهُ أَشْيَاءَ جَدِيدَةً كُلَّ يَوْمٍ.', en: '… because I learn new things from it every day.' },
    { ar: '… مَثَلًا، تَعَلَّمْتُ البَرْمَجَةَ مِنْ فِيدْيُوهَاتٍ مَجَّانِيَّةٍ فِي الصَّيْفِ المَاضِي.', en: '… for example, I learnt coding from free videos last summer.' },
    { ar: '… صَحِيحٌ أَنَّ الإِنْتَرْنِتَ مُفِيدٌ، غَيْرَ أَنَّ بَعْضَ المَعْلُومَاتِ فِيهِ غَيْرُ صَحِيحَةٍ، لِذٰلِكَ أَتَأَكَّدُ دَائِمًا.', en: '… it’s true the internet is useful, but some information on it is wrong, so I always check.' },
  ],
  builder: [
    { en: 'I keep in touch with my cousins.', cols: [['أَتَوَاصَلُ', 'أَتَوَاصَلْتُ'], ['مَعَ', 'عَلَى'], ['أَبْنَاءِ عَمِّي', 'أَبْنَاءُ عَمِّي']], key: [0, 0, 0], why: 'أَتَوَاصَلُ مَعَ + genitive.' },
    { en: 'I comment on my friend’s photos.', cols: [['أُعَلِّقُ', 'أُعَلِّمُ'], ['عَلَى', 'عَنْ'], ['صُوَرِ صَدِيقِي', 'الصُّوَرِ صَدِيقِي']], key: [0, 0, 0], why: 'أُعَلِّقُ عَلَى; “my friend’s photos” = iḍāfa صُوَرِ صَدِيقِي.' },
    { en: 'One of the drawbacks of phones is addiction.', cols: [['مِنْ عُيُوبِ', 'مِنْ فَوَائِدِ'], ['الهَوَاتِفِ', 'الهَوَاتِفُ'], ['الإِدْمَانُ', 'الإِدْمَانَ']], key: [0, 0, 0], why: 'مِنْ عُيُوبِ + genitive; the subject الإِدْمَانُ comes last.' },
  ],
  errors: [
    { wrong: 'أَبْحَثُ المَعْلُومَاتِ عَلَى الإِنْتَرْنِتِ.', hint: 'This verb needs a small word.', right: 'أَبْحَثُ عَنِ المَعْلُومَاتِ عَلَى الإِنْتَرْنِتِ.', why: 'أَبْحَثُ عَنْ + genitive.' },
    { wrong: 'أَقْضِي ثَلَاثَةَ سَاعَاتٍ عَلَى هَاتِفِي.', hint: 'سَاعَةٌ is feminine.', right: 'أَقْضِي ثَلَاثَ سَاعَاتٍ عَلَى هَاتِفِي.', why: '3–10: the number takes the opposite gender → ثَلَاثُ سَاعَاتٍ.' },
    { wrong: 'الهَاتِفُ الذَّكِيُّ مُفِيدَةٌ.', hint: 'Agreement.', right: 'الهَاتِفُ الذَّكِيُّ مُفِيدٌ.', why: 'هَاتِفٌ is masculine → مُفِيدٌ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: when technology helped me', ar: 'عِنْدَمَا سَاعَدَتْنِي التِّكْنُولُوجْيَا',
    task: 'Full Q3 title: “Technology: friend or enemy?”. Today write ONLY the past paragraph: a time technology really helped you (or caused a problem) — what happened, which device or app, why it mattered, and how you felt.',
    formula: [
      { ar: 'فِي السَّنَةِ المَاضِيَةِ سَاعَدَنِي هَاتِفِي فِي مَوْقِفٍ صَعْبٍ.', en: 'T · Last year my phone helped me in a difficult situation.' },
      { ar: 'ضِعْتُ فِي مَدِينَةٍ جَدِيدَةٍ، فَفَتَحْتُ تَطْبِيقَ الخَرَائِطِ.', en: 'D · I got lost in a new city, so I opened the maps app.' },
      { ar: 'كَانَ مُهِمًّا لِأَنَّ اللَّيْلَ كَانَ قَرِيبًا.', en: 'R · It mattered because night was close.' },
      { ar: 'شَعَرْتُ بِالرَّاحَةِ عِنْدَمَا وَصَلْتُ.', en: 'F · I felt relieved when I arrived.' },
    ],
    phrases: [['فِي يَوْمٍ مِنَ الأَيَّامِ …', 'one day …'], ['فَتَحْتُ تَطْبِيقَ …', 'I opened the … app'], ['بِفَضْلِ …', 'thanks to …'], ['لَوْلَا هَاتِفِي لَـ …', 'without my phone I would have …'], ['شَعَرْتُ بِالرَّاحَةِ / بِالقَلَقِ', 'I felt relieved / anxious']],
    model: {
      text: 'فِي الشِّتَاءِ المَاضِي، كَانَتْ جَدَّتِي فِي المُسْتَشْفَى فِي بَغْدَادَ، وَلَمْ نَسْتَطِعْ أَنْ نُسَافِرَ إِلَيْهَا بِسَبَبِ الامْتِحَانَاتِ. لِذٰلِكَ اتَّصَلْنَا بِهَا كُلَّ مَسَاءٍ بِالفِيدْيُو، وَكُنْتُ أَقْرَأُ لَهَا القُرْآنَ، وَأُرِيهَا صُوَرَ قِطَّتِنَا الجَدِيدَةِ. كَانَتْ تَضْحَكُ كَثِيرًا، وَقَالَ الطَّبِيبُ إِنَّ ذٰلِكَ سَاعَدَهَا. كَانَتْ هٰذِهِ المُكَالَمَاتُ مُهِمَّةً جِدًّا، لِأَنَّهَا جَعَلَتْنَا قَرِيبِينَ مِنْهَا. شَعَرْتُ بِالامْتِنَانِ لِلتِّكْنُولُوجْيَا، لِأَنَّهُ لَوْلَا الهَاتِفُ، لَمَا رَأَيْتُ وَجْهَهَا شَهْرَيْنِ.',
      en: 'T: last winter my grandmother was in hospital in Baghdad, and we couldn’t travel to her because of exams · D: so we video-called her every evening; I used to read Qur’an to her and show her photos of our new cat; she laughed a lot, and the doctor said it helped her · R: these calls mattered because they kept us close to her · F: I felt grateful for technology — without the phone, I wouldn’t have seen her face for two months.',
      find: ['لَمْ نَسْتَطِعْ أَنْ نُسَافِرَ', 'اتَّصَلْنَا بِهَا كُلَّ مَسَاءٍ', 'كُنْتُ أَقْرَأُ … وَأُرِيهَا', 'لَوْلَا الهَاتِفُ، لَمَا رَأَيْتُ'],
    },
  },
};
write.Q2.coreFrames[4] = { ar: 'فِي المُسْتَقْبَلِ سَأُغْلِقُ هَاتِفِي ______ .', en: '4 · In the future I will switch off my phone …' };
write.Q2.phrases[3] = ['فِي المُسْتَقْبَلِ سَأَسْتَعْمِلُ …', 'in the future I will use …'];
write.Q3.phrases[3] = ['لَوْلَا هَاتِفِي لَضِعْتُ', 'without my phone I would have got lost'];

module.exports = { speak, write };
