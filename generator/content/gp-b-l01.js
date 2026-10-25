'use strict';
/* Guided Practice Rooms · TB-L01 · Identity and Personal Profiles. New tasks. Teacher-made. */
const XP = require('./xp-b-l01');

const base = { topic: 'B', n: 1, short: 'Identity and Personal Profiles', arShort: 'الهُوِيَّةُ', fileTitle: 'Identity_and_Personal_Profiles', title: 'Identity and Personal Profiles', icon: 'FaIdCard', grammar: 'pronouns and nominal sentences; nationality adjectives (nisba: brīṭāniyy · brīṭāniyya); wulidtu fī; aṣlī min; age (ʿumrī … sanatan)' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (registering at a language summer school, a welcome interview for the school website), a topic conversation with A-R-E-T, and a one-minute talk introducing themselves.',
  words: XP.speak.words,
  words1: { title: 'Who I am', ar: 'مَنْ أَنَا' },
  words2: { title: 'Nationality, origin and languages', ar: 'الجِنْسِيَّةُ وَالأَصْلُ وَاللُّغَاتُ' },
  ladder: {
    q: 'عَرِّفْنَا بِنَفْسِكَ.', qEn: 'Tell us about yourself.',
    rungs: [
      { ar: 'اسْمِي آدَمُ، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً.', en: 'My name is Adam, and I am fifteen.' },
      { ar: 'اسْمِي آدَمُ، وَأَنَا بِرِيطَانِيٌّ، لٰكِنَّ أَصْلِي مِنْ مِصْرَ، لِأَنَّ أَبِي مِصْرِيٌّ.', en: '… I am British, but my origin is Egypt, because my dad is Egyptian.' },
      { ar: '… وُلِدْتُ فِي بِرْمِنْغْهَامَ، وَأَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالعَرَبِيَّةَ فِي البَيْتِ.', en: '… I was born in Birmingham, and I speak English and Arabic at home.' },
      { ar: '… وَفِي المُسْتَقْبَلِ سَأَتَعَلَّمُ الفَرَنْسِيَّةَ، فَاللُّغَاتُ فِي رَأْيِي جُزْءٌ مِنْ هُوِيَّتِي.', en: '… in the future I will learn French — in my opinion languages are part of my identity.' },
    ],
  },
  ladderQs: [
    { q: 'أَيْنَ وُلِدْتَ؟', l1: 'وُلِدْتُ فِي …', l2: '… لِأَنَّ …', l3: '… وَالآنَ أَسْكُنُ فِي …' },
    { q: 'مَتَى عِيدُ مِيلَادِكَ؟', l1: 'عِيدُ مِيلَادِي فِي …', l2: '… وَأُحِبُّهُ لِأَنَّ …', l3: '… وَالسَّنَةَ القَادِمَةَ سَوْفَ …' },
    { q: 'كَمْ لُغَةً تَتَكَلَّمُ؟', l1: 'أَتَكَلَّمُ …', l2: '… لِأَنَّ …', l3: '… وَعِنْدَمَا كُنْتُ صَغِيرًا …' },
    { q: 'مِنْ أَيْنَ أَصْلُ عَائِلَتِكَ؟', l1: 'أَصْلُ عَائِلَتِي مِنْ …', l2: '… وَأَنَا فَخُورٌ لِأَنَّ …', l3: '… زُرْتُ … / سَأَزُورُ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a language summer school in Rabat', title: 'Role play 1 — Registering at a summer school', ar: 'التَّسْجِيلُ فِي مَدْرَسَةٍ صَيْفِيَّةٍ', you: 'a new student', them: 'the receptionist',
      tasks: [
        { ex: 'أَهْلًا! مَا اسْمُكَ الكَامِلُ؟', task: 'Give your full name.', plan: 'مَا ← اسْمِي …', model: 'اسْمِي سَامِي يُوسُفُ.', modelEn: 'My name is Sami Yusuf.' },
        { ex: 'كَمْ عُمْرُكَ؟', task: 'Say your age.', plan: 'كَمْ ← عُمْرِي … سَنَةً', model: 'عُمْرِي سِتَّ عَشْرَةَ سَنَةً.', modelEn: 'I am sixteen.' },
        { ex: 'مَا جِنْسِيَّتُكَ؟', task: 'Give your nationality.', plan: 'مَا ← أَنَا …', model: 'أَنَا بِرِيطَانِيٌّ.', modelEn: 'I am British.' },
        { ex: 'أَيَّ لُغَاتٍ تَتَكَلَّمُ؟', task: 'Say which languages you speak.', plan: 'أَيَّ ← أَتَكَلَّمُ … وَ…', model: 'أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَقَلِيلًا مِنَ العَرَبِيَّةِ.', modelEn: 'I speak English and a little Arabic.' },
        { unexpected: true, ex: 'لِمَاذَا تُرِيدُ أَنْ تَتَعَلَّمَ العَرَبِيَّةَ؟', task: 'Answer the unexpected question.', plan: 'لِمَاذَا ← لِأَنِّي أُرِيدُ أَنْ …', model: 'لِأَنِّي أُرِيدُ أَنْ أَتَكَلَّمَ مَعَ عَائِلَةِ أُمِّي.', modelEn: 'Because I want to talk with my mother’s family.' },
      ],
      girl: 'اسْمُكِ · عُمْرُكِ · جِنْسِيَّتُكِ · تَتَكَلَّمِينَ · تُرِيدِينَ · تَتَعَلَّمِي — and the Speaker says بِرِيطَانِيَّةٌ',
      notes: 'Language: ʿumrī sitta ʿashrata sanatan (age) · nisba agreement (brīṭāniyyun / brīṭāniyyatun) · atakallamu + languages · li-annī urīdu an + verb in -a.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'the school website', title: 'Role play 2 — A profile interview for the school website', ar: 'مُقَابَلَةٌ لِمَوْقِعِ المَدْرَسَةِ', you: 'a new student', them: 'the website editor (a Year 11 student)',
      tasks: [
        { ex: 'مِنْ أَيْنَ أَنْتَ؟ وَأَيْنَ وُلِدْتَ؟', task: 'Explain your origin and birthplace.', model: 'وُلِدْتُ فِي مَانْشِسْتَرَ، لٰكِنَّ أَصْلِي مِنَ السُّودَانِ، لِأَنَّ وَالِدَيَّ سُودَانِيَّانِ.', modelEn: 'I was born in Manchester, but my origin is Sudan, because my parents are Sudanese.' },
        { ex: 'كَيْفَ تَصِفُ نَفْسَكَ؟', task: 'Describe yourself with an example.', model: 'أَنَا شَخْصٌ اجْتِمَاعِيٌّ وَمَرِحٌ؛ مَثَلًا، أَتَعَرَّفُ عَلَى النَّاسِ بِسُرْعَةٍ.', modelEn: 'I am sociable and cheerful — for example, I get to know people quickly.' },
        { ex: 'لِمَاذَا انْتَقَلْتَ إِلَى مَدْرَسَتِنَا؟', task: 'Give a past reason.', model: 'انْتَقَلْنَا إِلَى هٰذِهِ المَدِينَةِ فِي الصَّيْفِ، لِأَنَّ أُمِّي وَجَدَتْ عَمَلًا جَدِيدًا هُنَا.', modelEn: 'We moved to this city in the summer, because my mum found a new job here.' },
        { ex: 'سَنَكْتُبُ عَنْكَ فِي المَوْقِعِ.', task: 'ASK a question about the website or the school.', model: 'وَهَلْ يُمْكِنُ أَنْ أَكْتُبَ مَقَالَةً لِلْمَوْقِعِ أَيْضًا؟', modelEn: 'And could I write an article for the website too?' },
        { unexpected: true, ex: 'مَا الَّذِي يَجْعَلُكَ فَخُورًا بِهُوِيَّتِكَ؟', task: 'Answer the unexpected question (opinion + reason).', model: 'أَنَا فَخُورٌ لِأَنِّي أَعِيشُ بَيْنَ ثَقَافَتَيْنِ، فَأَفْهَمُ النَّاسَ بِطَرِيقَةٍ أَوْسَعَ.', modelEn: 'I am proud because I live between two cultures, so I understand people more widely.' },
      ],
      girl: 'أَنْتِ · وُلِدْتِ · تَصِفِينَ نَفْسَكِ · انْتَقَلْتِ · عَنْكِ · يَجْعَلُكِ فَخُورَةً · هُوِيَّتِكِ',
      notes: 'Language: wulidtu fī … lākinna aṣlī min · the dual (wālidayya sūdāniyyāni) · past reason · hal yumkinu an aktuba · thaqāfatayni (Stretch).',
    },
  ],
  convAr: 'هُوِيَّتِي',
  conv: [
    { route: 'Core', q: 'أَيْنَ تَسْكُنُ؟', en: 'Where do you live?', push: 'هَلْ تُحِبُّهَا؟' },
    { route: 'Core', q: 'مَا لُغَتُكَ الأُولَى؟', en: 'What is your first language?', push: 'وَفِي البَيْتِ؟' },
    { route: 'Develop', q: 'صِفْ نَفْسَكَ بِثَلَاثِ كَلِمَاتٍ.', en: 'Describe yourself in three words.', push: 'مَثَلًا؟' },
    { route: 'Develop', q: 'كَيْفَ احْتَفَلْتَ بِعِيدِ مِيلَادِكَ الأَخِيرِ؟', en: 'How did you celebrate your last birthday?', push: 'مَعَ مَنْ؟' },
    { route: 'Stretch', q: 'هَلِ الهُوِيَّةُ هِيَ المَكَانُ الَّذِي وُلِدْتَ فِيهِ؟', en: 'Is identity the place where you were born?', push: 'لِمَاذَا فِي رَأْيِكَ؟' },
    { route: 'Stretch', q: 'لَوْ عِشْتَ فِي بَلَدٍ آخَرَ، كَيْفَ تَتَغَيَّرُ حَيَاتُكَ؟', en: 'If you lived in another country, how would your life change?', push: 'وَمَا الَّذِي لَا يَتَغَيَّرُ؟' },
  ],
  convModels: [
    { q: 'مَا لُغَتُكَ الأُولَى؟', model: 'لُغَتِي الأُولَى هِيَ الإِنْجِلِيزِيَّةُ، لِأَنِّي وُلِدْتُ فِي لَنْدَنَ، لٰكِنْ نَتَكَلَّمُ الأُورْدِيَّةَ فِي البَيْتِ؛ وَفِي المُسْتَقْبَلِ سَأَتَكَلَّمُ العَرَبِيَّةَ بِطَلَاقَةٍ.', modelEn: 'A: English · R: born in London · E: Urdu at home · T: in the future I’ll speak Arabic fluently.' },
    { q: 'كَيْفَ احْتَفَلْتَ بِعِيدِ مِيلَادِكَ الأَخِيرِ؟', model: 'احْتَفَلْتُ مَعَ أُسْرَتِي فِي مَطْعَمٍ تُرْكِيٍّ، لِأَنَّهُ مَكَانِي المُفَضَّلُ؛ أَعْطَتْنِي أُخْتِي كِتَابًا، وَفِي عِيدِ مِيلَادِي القَادِمِ سَأَدْعُو أَصْدِقَائِي إِلَى البَيْتِ.', modelEn: 'A: with my family in a Turkish restaurant · R: my favourite place · E: my sister gave me a book · T: next birthday I’ll invite friends home.' },
    { q: 'هَلِ الهُوِيَّةُ هِيَ المَكَانُ الَّذِي وُلِدْتَ فِيهِ؟', model: 'فِي رَأْيِي لَا، لِأَنَّ الهُوِيَّةَ أَكْبَرُ مِنْ مَكَانٍ وَاحِدٍ؛ صَحِيحٌ أَنِّي وُلِدْتُ فِي بِرِيطَانِيَا، غَيْرَ أَنَّ لُغَةَ جَدَّتِي وَطَعَامَهَا جُزْءٌ مِنِّي أَيْضًا.', modelEn: 'Opinion: no · R: identity is bigger than one place · concession: I was born in Britain, but my grandmother’s language and food are part of me too.' },
  ],
  talk: {
    title: 'One minute: this is me', ar: 'هٰذَا أَنَا',
    text: 'Talk for one minute introducing yourself: name, age, birthday, where you were born and live, nationality and origin, languages — and one thing that makes you proud.',
    routes: {
      core: '30 seconds: five facts — name, age, city, nationality, languages.',
      develop: '60 seconds: add origin, a reason, and your last birthday (past).',
      stretch: '90 seconds: add an opinion about identity and a future plan with a reason.',
    },
    phrases: [['اسْمِي … وَعُمْرِي …', 'my name is … and I am …'], ['وُلِدْتُ فِي … لٰكِنَّ أَصْلِي مِنْ …', 'I was born in … but my origin is …'], ['أَتَكَلَّمُ …', 'I speak …'], ['أَنَا فَخُورٌ بِـأَنِّي …', 'I am proud that I …']],
  },
  checkCore: 'gave personal details in full sentences (اسْمِي · عُمْرِي · أَسْكُنُ فِي)',
  checkDevelop: 'made nationality adjectives agree (بِرِيطَانِيٌّ / بِرِيطَانِيَّةٌ)',
};
speak.talk.phrases[3] = ['أَنَا فَخُورٌ بِأَنِّي …', 'I am proud that I …'];

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (a profile for an international pen-pal site), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'International youth camp: registration', ar: 'المُخَيَّمُ الدَّوْلِيُّ لِلشَّبَابِ: التَّسْجِيلُ',
    fields: [
      { core: true, ar: 'الاسْمُ الكَامِلُ', en: 'Full name', tip: 'First name + family name.' },
      { core: true, ar: 'تَارِيخُ المِيلَادِ', en: 'Date of birth', tip: 'الثَّانِي مِنْ يُونْيُو' },
      { core: true, ar: 'مَكَانُ المِيلَادِ', en: 'Place of birth', tip: 'لِيدْز، بِرِيطَانِيَا' },
      { core: true, ar: 'الجِنْسِيَّةُ', en: 'Nationality', tip: 'Agree: بِرِيطَانِيٌّ / بِرِيطَانِيَّةٌ' },
      { core: true, ar: 'اللُّغَاتُ', en: 'Languages', tip: 'الإِنْجِلِيزِيَّةُ وَالعَرَبِيَّةُ' },
      { ar: 'جُمْلَةٌ: صِفْ نَفْسَكَ', en: 'ONE sentence: describe yourself', tip: 'أَنَا … وَ… لِأَنِّي …' },
    ],
  },
  Q2: {
    title: 'Question 2: my profile for a pen-pal website', ar: 'مَلَفِّي فِي مَوْقِعِ المُرَاسَلَةِ',
    task: 'You are joining an international pen-pal website. Write your profile in Arabic in about 80–90 words. You must include: • your name, age, nationality and where you live • your family’s origin and the languages you speak • how you celebrated your last birthday • what kind of pen-pal you want, and why.',
    phrases: [['اسْمِي … وَأَنَا …', 'my name is … and I am …'], ['أَصْلُ عَائِلَتِي مِنْ …', 'my family’s origin is …'], ['فِي عِيدِ مِيلَادِي الأَخِيرِ …', 'on my last birthday …'], ['أَبْحَثُ عَنْ صَدِيقٍ …', 'I am looking for a friend who …']],
    rubric: [
      ['task', 'اكْتُبْ مَلَفَّكَ الشَّخْصِيَّ لِمَوْقِعِ المُرَاسَلَةِ (٨٠–٩٠ كَلِمَةً).', 'Write your profile for the pen-pal website (80–90 words).'],
      ['1', 'مَا اسْمُكَ وَعُمْرُكَ وَجِنْسِيَّتُكَ؟ وَأَيْنَ تَسْكُنُ؟', 'Name, age, nationality, where you live'],
      ['2', 'مِنْ أَيْنَ أَصْلُ عَائِلَتِكَ؟ وَأَيَّ لُغَاتٍ تَتَكَلَّمُ؟', 'Family origin; languages'],
      ['3', 'كَيْفَ احْتَفَلْتَ بِعِيدِ مِيلَادِكَ الأَخِيرِ؟', 'How you celebrated your last birthday'],
      ['4', 'أَيَّ نَوْعٍ مِنَ الأَصْدِقَاءِ تُرِيدُ؟ وَلِمَاذَا؟', 'What kind of pen-pal you want, and why'],
    ],
    decode: ['a PROFILE (not a letter) → no greeting needed; first person (I)', 'مَا · أَيْنَ → PRESENT facts (nominal sentences)', 'مِنْ أَيْنَ · أَيَّ → PRESENT origin + languages', 'كَيْفَ احْتَفَلْتَ → PAST', 'تُرِيدُ … وَلِمَاذَا → PRESENT wish + a reason'],
    coreFrames: [
      { ar: 'اسْمِي ______ ، وَعُمْرِي ______ سَنَةً.', en: '1 · My name is …, and I am … years old.' },
      { ar: 'أَنَا ______ ، وَأَسْكُنُ فِي ______ .', en: '1 · I am (nationality) …, and I live in …' },
      { ar: 'أَصْلُ عَائِلَتِي مِنْ ______ ، وَأَتَكَلَّمُ ______ .', en: '2 · My family is from …, and I speak …' },
      { ar: 'فِي عِيدِ مِيلَادِي الأَخِيرِ ______ .', en: '3 · On my last birthday I …' },
      { ar: 'أُرِيدُ صَدِيقًا ______ ، لِأَنَّ ______ .', en: '4 · I want a friend who is …, because …' },
    ],
    developFrames: [
      { ar: 'وُلِدْتُ فِي ______ ، لٰكِنِّي أَسْكُنُ الآنَ فِي ______ .', en: '1 · I was born in …, but now I live in …' },
      { ar: 'أَبِي ______ وَأُمِّي ______ ، لِذٰلِكَ ______ .', en: '2 · My dad is … and my mum is …, so …' },
      { ar: 'احْتَفَلْتُ بِعِيدِ مِيلَادِي فِي ______ مَعَ ______ .', en: '3 · I celebrated my birthday in … with …' },
      { ar: 'أَبْحَثُ عَنْ صَدِيقٍ يُحِبُّ ______ ، لِكَيْ ______ .', en: '4 · I want a friend who likes …, so that …' },
    ],
    bank: ['بِرِيطَانِيٌّ / بِرِيطَانِيَّةٌ', 'عَرَبِيٌّ', 'وُلِدْتُ فِي', 'أَصْلِي مِنْ', 'أَتَكَلَّمُ', 'عِيدُ مِيلَادِي', 'اجْتِمَاعِيٌّ · مَرِحٌ', 'أَبْحَثُ عَنْ'],
    model: {
      text: `مَرْحَبًا! اسْمِي لَيْلَى، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً. أَنَا بِرِيطَانِيَّةٌ، وَأَسْكُنُ فِي مَدِينَةِ لِيدْزَ فِي شَمَالِ إِنْجِلْتِرَا مَعَ عَائِلَتِي، وَعِنْدِي أَخَوَانِ صَغِيرَانِ وَقِطَّةٌ بَيْضَاءُ. أَصْلُ أَبِي مِنَ المَغْرِبِ، وَأُمِّي مِنْ بَاكِسْتَانَ، لِذٰلِكَ أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالعَرَبِيَّةَ وَقَلِيلًا مِنَ الأُورْدِيَّةِ. فِي عِيدِ مِيلَادِي الأَخِيرِ فِي شَهْرِ مَارِسَ احْتَفَلْتُ مَعَ صَدِيقَاتِي فِي حَدِيقَةٍ كَبِيرَةٍ، وَأَكَلْنَا كَعْكَةً بِالشُّوكُولَاتَةِ، وَلَعِبْنَا كُرَةَ السَّلَّةِ حَتَّى المَسَاءِ. أَبْحَثُ عَنْ صَدِيقَةٍ مِنْ بَلَدٍ عَرَبِيٍّ تُحِبُّ القِرَاءَةَ وَالرِّيَاضَةَ، لِكَيْ أُمَارِسَ العَرَبِيَّةَ مَعَهَا، وَأَتَعَلَّمَ عَنْ ثَقَافَتِهَا. أَنْتَظِرُ رِسَالَتَكِ!`,
      en: '“Hello! My name is Layla and I am fourteen. I am British, and I live in Leeds in the north of England with my family; I have two little brothers and a white cat. My dad’s origin is Morocco and my mum is from Pakistan, so I speak English, Arabic and a little Urdu. On my last birthday in March I celebrated with my friends in a big park; we ate chocolate cake and played basketball until the evening. I am looking for a friend from an Arab country who likes reading and sport, so that I can practise Arabic with her and learn about her culture. I look forward to your message!”',
      find: ['أَنَا بِرِيطَانِيَّةٌ', 'لِذٰلِكَ أَتَكَلَّمُ', 'احْتَفَلْتُ مَعَ صَدِيقَاتِي', 'لِكَيْ أُمَارِسَ'],
    },
  },
  upgrade: [
    { ar: 'أَنَا عَرَبِيٌّ.', en: 'I am Arab.' },
    { ar: 'أَنَا عَرَبِيٌّ مِنَ العِرَاقِ، وَأَسْكُنُ فِي لَنْدَنَ مُنْذُ خَمْسِ سَنَوَاتٍ.', en: '… from Iraq, and I have lived in London for five years.' },
    { ar: 'أَنَا عَرَبِيٌّ مِنَ العِرَاقِ، وَأَسْكُنُ فِي لَنْدَنَ، لِأَنَّ أَبِي يَعْمَلُ هُنَا.', en: '… because my dad works here.' },
    { ar: '… وَفِي رَأْيِي أَنَا مَحْظُوظٌ، لِأَنِّي أَعِيشُ بَيْنَ ثَقَافَتَيْنِ، لٰكِنِّي أَشْتَاقُ إِلَى بَغْدَادَ!', en: '… in my opinion I am lucky to live between two cultures — but I miss Baghdad!' },
  ],
  builder: [
    { en: 'My sister is British.', cols: [['أُخْتِي', 'أَخِي'], ['بِرِيطَانِيَّةٌ', 'بِرِيطَانِيٌّ'], ['أَيْضًا', 'أَمْسِ']], key: [0, 0, 0], why: 'A girl → feminine nisba: بِرِيطَانِيَّةٌ.' },
    { en: 'I am fifteen years old.', cols: [['عُمْرِي', 'عُمْرُهُ'], ['خَمْسَ عَشْرَةَ', 'خَمْسَةَ عَشَرَ'], ['سَنَةً', 'سَنَوَاتٍ']], key: [0, 0, 0], why: 'سَنَة is feminine → خَمْسَ عَشْرَةَ سَنَةً (singular after 11–99).' },
    { en: 'I was born in Cairo, but I live in Leeds.', cols: [['وُلِدْتُ فِي القَاهِرَةِ', 'أُولَدُ فِي القَاهِرَةِ'], ['لٰكِنِّي', 'لِأَنِّي'], ['أَسْكُنُ فِي لِيدْزَ', 'سَكَنْتُ فِي لِيدْزَ']], key: [0, 0, 0], why: 'Born = past وُلِدْتُ; but = لٰكِنِّي; live (now) = present أَسْكُنُ.' },
  ],
  errors: [
    { wrong: 'أُمِّي مِصْرِيٌّ.', hint: 'Agreement.', right: 'أُمِّي مِصْرِيَّةٌ.', why: 'A woman → feminine nisba: مِصْرِيَّةٌ.' },
    { wrong: 'عُمْرِي خَمْسَةَ عَشَرَ سَنَوَاتٍ.', hint: 'Numbers 11–99 take a singular noun.', right: 'عُمْرِي خَمْسَ عَشْرَةَ سَنَةً.', why: '11–99 + singular accusative; سَنَة is feminine → خَمْسَ عَشْرَةَ سَنَةً.' },
    { wrong: 'أَنَا وُلِدْتُ فِي بِرِيطَانِيَا وَأَصْلِي سُورِيَا.', hint: 'Origin needs a small word.', right: 'وُلِدْتُ فِي بِرِيطَانِيَا، وَأَصْلِي مِنْ سُورِيَا.', why: 'Origin = أَصْلِي مِنْ …' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a moment that shaped who I am', ar: 'لَحْظَةٌ شَكَّلَتْ هُوِيَّتِي',
    task: 'Full Q3 title: “Who am I?”. Today write ONLY the past paragraph: a moment or event that shaped your identity (a trip to your family’s country, a festival, a new school …) — what happened, why it mattered, and how you felt.',
    formula: [
      { ar: 'عِنْدَمَا كُنْتُ فِي العَاشِرَةِ زُرْتُ قَرْيَةَ جَدِّي فِي اليَمَنِ.', en: 'T · When I was ten I visited my grandfather’s village in Yemen.' },
      { ar: 'تَعَرَّفْتُ عَلَى أَقَارِبِي، وَتَعَلَّمْتُ كَلِمَاتٍ كَثِيرَةً.', en: 'D · I met my relatives and learnt many words.' },
      { ar: 'كَانَتْ مُهِمَّةً لِأَنِّي فَهِمْتُ قِصَّةَ عَائِلَتِي.', en: 'R · It mattered because I understood my family’s story.' },
      { ar: 'شَعَرْتُ بِالفَخْرِ، وَسَأَرْجِعُ إِلَى هُنَاكَ.', en: 'F · I felt proud, and I will go back.' },
    ],
    phrases: [['عِنْدَمَا كُنْتُ فِي … مِنْ عُمْرِي', 'when I was … years old'], ['تَعَرَّفْتُ عَلَى …', 'I got to know …'], ['فَهِمْتُ أَنَّ …', 'I understood that …'], ['شَعَرْتُ بِالفَخْرِ', 'I felt proud'], ['مُنْذُ ذٰلِكَ اليَوْمِ …', 'since that day …']],
    model: {
      text: 'عِنْدَمَا كُنْتُ فِي العَاشِرَةِ مِنْ عُمْرِي، زُرْتُ قَرْيَةَ جَدِّي فِي اليَمَنِ لِأَوَّلِ مَرَّةٍ. فِي البِدَايَةِ كُنْتُ خَجُولًا جِدًّا، لِأَنِّي لَمْ أَفْهَمْ لَهْجَةَ أَقَارِبِي. لٰكِنَّ ابْنَ عَمِّي عَلَّمَنِي كَلِمَاتٍ جَدِيدَةً كُلَّ يَوْمٍ، وَأَخَذَنِي إِلَى السُّوقِ وَالجِبَالِ. فِي آخِرِ يَوْمٍ حَكَى لِي جَدِّي قِصَّةَ عَائِلَتِنَا، فَفَهِمْتُ لِمَاذَا جَاءَ أَبِي إِلَى بِرِيطَانِيَا. شَعَرْتُ بِالفَخْرِ بِأَصْلِي، وَمُنْذُ ذٰلِكَ اليَوْمِ أَدْرُسُ العَرَبِيَّةَ بِحَمَاسٍ، وَسَأَرْجِعُ إِلَى هُنَاكَ بَعْدَ الامْتِحَانَاتِ.',
      en: 'T: when I was ten, I visited my grandfather’s village in Yemen for the first time · D: at first I was very shy because I didn’t understand my relatives’ dialect, but my cousin taught me new words every day and took me to the market and the mountains · R: on the last day my grandfather told me our family’s story, so I understood why my dad came to Britain · F: I felt proud of my origins; since then I study Arabic eagerly, and I will go back after the exams.',
      find: ['عِنْدَمَا كُنْتُ فِي العَاشِرَةِ', 'لِأَنِّي لَمْ أَفْهَمْ', 'فَفَهِمْتُ لِمَاذَا', 'شَعَرْتُ بِالفَخْرِ'],
    },
  },
};

module.exports = { speak, write };
