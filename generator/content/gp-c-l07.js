'use strict';
/* Guided Practice Rooms · TC-L07 · Documents, texts and digital information. New tasks. Teacher-made. */
const XP = require('./xp-c-l07');

const base = { topic: 'C', n: 7, short: 'Documents, Texts and Digital Information', arShort: 'الوَثَائِقُ وَالمَعْلُومَاتُ', fileTitle: 'Documents_Texts_Digital_Information', title: 'Documents, texts and digital information', icon: 'FaPassport', grammar: 'relative pronouns (alladhī · allatī · alladhīna); imperatives on forms (sajjil · aḥḍir · iktub); the passive (yursalu · tursalu · muʾakkadun); booking verbs (aḥjizu · uqīmu fī); dates and times' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up on bookings, forms and documents, the answer ladder, two new role plays (checking in at a hotel, a lost-passport problem at the airport), a topic conversation with A-R-E-T, and a one-minute talk about organising a trip.',
  words: XP.speak.words,
  words1: { title: 'Bookings and documents', ar: 'الحَجْزُ وَالوَثَائِقُ' },
  words2: { title: 'Forms, instructions and messages', ar: 'الاسْتِمَارَاتُ وَالتَّعْلِيمَاتُ' },
  ladder: {
    q: 'كَيْفَ تَحْجِزُ رِحْلَةً؟', qEn: 'How do you book a trip?',
    rungs: [
      { ar: 'أَحْجِزُ التَّذَاكِرَ عَلَى الإِنْتَرْنِتِ.', en: 'I book the tickets online.' },
      { ar: 'أَحْجِزُ التَّذَاكِرَ عَلَى الإِنْتَرْنِتِ، لِأَنَّهَا أَرْخَصُ وَأَسْرَعُ.', en: '… because it is cheaper and quicker.' },
      { ar: '… أَوَّلًا أَمْلَأُ الاسْتِمَارَةَ، ثُمَّ أَدْفَعُ، وَبَعْدَ ذٰلِكَ تُرْسَلُ التَّذْكِرَةُ إِلَى بَرِيدِي الإِلِكْتْرُونِيِّ.', en: '… first I fill in the form, then I pay, and then the ticket is sent to my email.' },
      { ar: '… مَرَّةً كَتَبْتُ تَارِيخًا خَطَأً، فَوَصَلْنَا إِلَى الفُنْدُقِ قَبْلَ الحَجْزِ بِيَوْمٍ! لِذٰلِكَ أَتَأَكَّدُ الآنَ مَرَّتَيْنِ.', en: '… once I typed a wrong date and we arrived a day before the booking! So now I check twice.' },
    ],
  },
  ladderQs: [
    { q: 'مَاذَا تَحْتَاجُ عِنْدَمَا تُسَافِرُ إِلَى الخَارِجِ؟', l1: 'أَحْتَاجُ إِلَى …', l2: '… وَ… الَّذِي …', l3: '… وَفِي آخِرِ رِحْلَةٍ نَسِيتُ …' },
    { q: 'هَلْ تَمْلَأُ الاسْتِمَارَاتِ بِنَفْسِكَ؟', l1: 'نَعَمْ / لَا، …', l2: '… لِأَنَّ …', l3: '… مَثَلًا أَمْسِ …' },
    { q: 'كَيْفَ تُرْسِلُ الوَاجِبَاتِ إِلَى المُعَلِّمِ؟', l1: 'أُرْسِلُهَا …', l2: '… لِأَنَّ …', l3: '… وَفِي المَاضِي كَانَ الطُّلَّابُ …' },
    { q: 'أَيْنَ أَقَمْتَ فِي آخِرِ عُطْلَةٍ؟', l1: 'أَقَمْتُ فِي …', l2: '… الَّذِي / الَّتِي …', l3: '… وَفِي العُطْلَةِ القَادِمَةِ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a hotel reception in Muscat', title: 'Role play 1 — Checking in at a hotel', ar: 'فِي اسْتِقْبَالِ الفُنْدُقِ', you: 'a guest', them: 'the receptionist',
      tasks: [
        { ex: 'مَسَاءَ الخَيْرِ! هَلْ عِنْدَكَ حَجْزٌ؟', task: 'Say you have a booking and give your name.', plan: 'حَجْزٌ ← نَعَمْ، حَجَزْتُ … بِاسْمِ …', model: 'نَعَمْ، حَجَزْتُ غُرْفَةً بِاسْمِ أَحْمَدَ خَانٍ.', modelEn: 'Yes, I booked a room in the name of Ahmed Khan.' },
        { ex: 'لِكَمْ لَيْلَةً؟', task: 'Say how many nights.', plan: 'كَمْ ← لِـ … لَيَالٍ', model: 'لِثَلَاثِ لَيَالٍ، مِنَ الأَحَدِ إِلَى الأَرْبِعَاءِ.', modelEn: 'For three nights, from Sunday to Wednesday.' },
        { ex: 'جَوَازُ السَّفَرِ، مِنْ فَضْلِكَ.', task: 'Hand it over politely.', plan: 'جَوَازٌ ← تَفَضَّلْ، هٰذَا …', model: 'تَفَضَّلْ، هٰذَا جَوَازُ سَفَرِي.', modelEn: 'Here you are, this is my passport.' },
        { ex: 'اكْتُبْ رَقْمَ هَاتِفِكَ هُنَا.', task: 'Give your number and ASK about breakfast.', plan: 'رَقْمٌ ← رَقْمِي … ؛ مَتَى … الفُطُورُ؟', model: 'رَقْمِي صِفْرٌ سَبْعَةٌ سَبْعَةٌ. مَتَى يَبْدَأُ الفُطُورُ؟', modelEn: 'My number is 077… When does breakfast start?' },
        { unexpected: true, ex: 'لِلْأَسَفِ الغُرْفَةُ الَّتِي حَجَزْتَهَا غَيْرُ جَاهِزَةٍ.', task: 'Answer the unexpected problem.', plan: 'مُشْكِلَةٌ ← لَا بَأْسَ، هَلْ يُمْكِنُ أَنْ …؟', model: 'لَا بَأْسَ، هَلْ يُمْكِنُ أَنْ أَتْرُكَ حَقِيبَتِي هُنَا؟', modelEn: 'No problem, can I leave my bag here?' },
      ],
      girl: 'عِنْدَكِ · فَضْلِكِ · اكْتُبِي · هَاتِفِكِ · حَجَزْتِهَا — and the Speaker says تَفَضَّلِي to a female receptionist',
      notes: 'Language: ḥajaztu ghurfatan bi-smi · li- + number + layālin · tafaḍḍal · numbers for phones · allatī ḥajaztahā (relative + -hā).',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'the airport information desk', title: 'Role play 2 — My passport is lost!', ar: 'ضَاعَ جَوَازُ سَفَرِي!', you: 'a traveller', them: 'an airport officer',
      tasks: [
        { ex: 'مَا المُشْكِلَةُ؟', task: 'Explain what happened (past).', model: 'ضَاعَ جَوَازُ سَفَرِي! وَضَعْتُهُ فِي الحَقِيبَةِ الصَّغِيرَةِ الَّتِي كَانَتْ مَعِي فِي المَقْهَى.', modelEn: 'My passport is lost! I put it in the small bag that was with me in the café.' },
        { ex: 'صِفِ الحَقِيبَةَ.', task: 'Describe the bag and its contents.', model: 'هِيَ حَقِيبَةٌ زَرْقَاءُ مِنَ الجِلْدِ، وَفِيهَا جَوَازُ السَّفَرِ وَتَذْكِرَةُ الطَّائِرَةِ وَهَاتِفِي.', modelEn: 'It’s a blue leather bag with my passport, plane ticket and phone in it.' },
        { ex: 'مَتَى رِحْلَتُكَ؟', task: 'Give the flight details and explain the urgency.', model: 'رِحْلَتِي إِلَى لَنْدَنَ فِي السَّاعَةِ الثَّامِنَةِ مَسَاءً، أَيْ بَعْدَ ثَلَاثِ سَاعَاتٍ فَقَطْ.', modelEn: 'My flight to London is at 8 p.m., only three hours from now.' },
        { ex: 'امْلَأْ هٰذِهِ الاسْتِمَارَةَ مِنْ فَضْلِكَ.', task: 'Agree and ASK two questions.', model: 'طَبْعًا. هَلْ تُرْسَلُ الاسْتِمَارَةُ إِلَى الشُّرْطَةِ؟ وَمَاذَا أَفْعَلُ إِذَا لَمْ يُوجَدِ الجَوَازُ؟', modelEn: 'Of course. Is the form sent to the police? And what do I do if the passport isn’t found?' },
        { unexpected: true, ex: 'لَوْ كُنْتَ مَكَانِي، مَاذَا تَنْصَحُ المُسَافِرِينَ؟', task: 'Answer the unexpected question (advice + law … la-).', model: 'لَوْ كُنْتُ مَكَانَكَ، لَنَصَحْتُهُمْ بِأَنْ يُصَوِّرُوا جَوَازَاتِهِمْ عَلَى الهَاتِفِ، وَأَلَّا يَتْرُكُوا حَقَائِبَهُمْ أَبَدًا.', modelEn: 'If I were you, I would advise them to photograph their passports on their phone and never leave their bags.' },
      ],
      girl: 'رِحْلَتُكِ · امْلَئِي · فَضْلِكِ · كُنْتِ · تَنْصَحِينَ',
      notes: 'Stretch language: allatī kānat maʿī · colour agreement (zarqāʾu) · ay (that is) · passive tursalu / lam yūjad · law kuntu makānaka la- · an / allā + verb.',
    },
  ],
  convAr: 'الحَجْزُ وَالوَثَائِقُ',
  conv: [
    { route: 'Core', q: 'هَلْ عِنْدَكَ جَوَازُ سَفَرٍ؟', en: 'Do you have a passport?', push: 'مَا جِنْسِيَّتُهُ؟' },
    { route: 'Core', q: 'كَمْ رِسَالَةً إِلِكْتْرُونِيَّةً تُرْسِلُ فِي اليَوْمِ؟', en: 'How many emails do you send a day?', push: 'لِمَنْ؟' },
    { route: 'Develop', q: 'صِفْ آخِرَ مَرَّةٍ حَجَزْتَ فِيهَا شَيْئًا.', en: 'Describe the last time you booked something.', push: 'هَلْ كَانَ سَهْلًا؟' },
    { route: 'Develop', q: 'هَلْ تُفَضِّلُ الكُتُبَ الوَرَقِيَّةَ أَمِ الإِلِكْتْرُونِيَّةَ؟', en: 'Do you prefer paper or e-books?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'هَلْ مِنَ الآمِنِ أَنْ نُعْطِيَ مَعْلُومَاتِنَا الشَّخْصِيَّةَ عَلَى الإِنْتَرْنِتِ؟', en: 'Is it safe to give our personal information online?', push: 'كَيْفَ نَحْمِيهَا؟' },
    { route: 'Stretch', q: 'هَلْ سَتَخْتَفِي الوَثَائِقُ الوَرَقِيَّةُ فِي المُسْتَقْبَلِ؟', en: 'Will paper documents disappear in future?', push: 'هَلْ هٰذَا جَيِّدٌ؟' },
  ],
  convModels: [
    { q: 'صِفْ آخِرَ مَرَّةٍ حَجَزْتَ فِيهَا شَيْئًا.', model: 'فِي الشَّهْرِ المَاضِي حَجَزْتُ تَذَاكِرَ لِمُبَارَاةِ كُرَةِ القَدَمِ، لِأَنَّ أَبِي أَرَادَ مُفَاجَأَةَ أَخِي؛ مَلَأْتُ الاسْتِمَارَةَ وَدَفَعْنَا بِالبِطَاقَةِ، وَسَنَذْهَبُ يَوْمَ السَّبْتِ القَادِمِ.', modelEn: 'A: last month I booked football tickets · R: dad wanted to surprise my brother · E: I filled in the form and we paid by card · T: we go next Saturday.' },
    { q: 'هَلْ تُفَضِّلُ الكُتُبَ الوَرَقِيَّةَ أَمِ الإِلِكْتْرُونِيَّةَ؟', model: 'أُفَضِّلُ الكُتُبَ الوَرَقِيَّةَ، لِأَنَّ الشَّاشَةَ تُتْعِبُ عَيْنَيَّ؛ لٰكِنْ فِي السَّفَرِ أَسْتَعْمِلُ الكِتَابَ الإِلِكْتْرُونِيَّ، لِأَنَّهُ أَخَفُّ، وَفِيهِ مِئَاتُ الكُتُبِ.', modelEn: 'A: paper books · R: screens tire my eyes · contrast/E: but when travelling I use an e-reader — lighter, with hundreds of books.' },
    { q: 'هَلْ مِنَ الآمِنِ أَنْ نُعْطِيَ مَعْلُومَاتِنَا الشَّخْصِيَّةَ عَلَى الإِنْتَرْنِتِ؟', model: 'صَحِيحٌ أَنَّ المَوَاقِعَ الرَّسْمِيَّةَ آمِنَةٌ عَادَةً، غَيْرَ أَنَّ هُنَاكَ رَسَائِلَ مُزَيَّفَةً كَثِيرَةً؛ مَثَلًا، وَصَلَتْ أُمِّي رِسَالَةٌ تَطْلُبُ رَقْمَ بِطَاقَتِهَا، فَحَذَفْتُهَا فَوْرًا.', modelEn: 'Concession: official sites are usually safe, but there are many fake messages · E: mum got a message asking for her card number, so I deleted it at once.' },
  ],
  talk: {
    title: 'One minute: organising a trip', ar: 'أُنَظِّمُ رِحْلَةً',
    text: 'Talk for one minute about how you organise a trip: what you book and how, the documents you need, a form you filled in — and a problem that happened once.',
    routes: {
      core: '30 seconds: three things you book or take, with أَحْتَاجُ إِلَى …',
      develop: '60 seconds: add the steps in order (أَوَّلًا · ثُمَّ) and a past problem.',
      stretch: '90 seconds: add a passive verb (تُرْسَلُ · يُؤَكَّدُ) and advice with لَوْ كُنْتُ …',
    },
  },
  checkCore: 'used الَّذِي / الَّتِي correctly',
  checkDevelop: 'used a passive verb (تُرْسَلُ · مُؤَكَّدٌ)',
};
speak.RP[0].tasks[1].plan = 'كَمْ ← لِثَلَاثِ لَيَالٍ، مِنْ … إِلَى …';

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up booking form, decoding a new Q2 task (an email to a hotel), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Hotel booking form', ar: 'اسْتِمَارَةُ حَجْزِ الفُنْدُقِ',
    fields: [
      { core: true, ar: 'الاسْمُ الكَامِلُ', en: 'Full name', tip: 'As in your passport.' },
      { core: true, ar: 'تَارِيخُ الوُصُولِ', en: 'Arrival date', tip: 'يَوْمُ الجُمُعَةِ ١٢ يُولْيُو' },
      { core: true, ar: 'عَدَدُ اللَّيَالِي', en: 'Number of nights', tip: 'أَرْبَعُ لَيَالٍ' },
      { core: true, ar: 'نَوْعُ الغُرْفَةِ', en: 'Room type', tip: 'غُرْفَةٌ لِشَخْصَيْنِ' },
      { core: true, ar: 'البَرِيدُ الإِلِكْتْرُونِيُّ', en: 'Email', tip: 'Write it carefully.' },
      { ar: 'جُمْلَةٌ: طَلَبٌ خَاصٌّ', en: 'ONE sentence: a special request', tip: 'أُرِيدُ غُرْفَةً تُطِلُّ عَلَى …' },
    ],
  },
  Q2: {
    title: 'Question 2: an email to a hotel', ar: 'رِسَالَةٌ إِلَى فُنْدُقٍ',
    task: 'You stayed in a hotel last month and left something behind. Write an email in Arabic to the hotel of about 80–90 words. You must include: • when you stayed and in which room • what you left and a description of it • why it is important to you • how they should send it back, and a question.',
    phrases: [['أَقَمْتُ فِي فُنْدُقِكُمْ مِنْ … إِلَى …', 'I stayed in your hotel from … to …'], ['نَسِيتُ … الَّذِي / الَّتِي …', 'I forgot the … which …'], ['هُوَ / هِيَ مُهِمٌّ / مُهِمَّةٌ لِي لِأَنَّ …', 'it is important to me because …'], ['أَرْجُو أَنْ تُرْسِلُوهُ إِلَى …', 'please send it to …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى الفُنْدُقِ (٨٠–٩٠ كَلِمَةً).', 'Write an email to the hotel (80–90 words).'],
      ['1', 'مَتَى أَقَمْتَ فِي الفُنْدُقِ؟ وَفِي أَيِّ غُرْفَةٍ؟', 'When you stayed; which room'],
      ['2', 'مَاذَا نَسِيتَ؟ صِفْهُ.', 'What you left; describe it'],
      ['3', 'لِمَاذَا هُوَ مُهِمٌّ لَكَ؟', 'Why it matters'],
      ['4', 'كَيْفَ يُرْسِلُونَهُ؟ وَاسْأَلْ سُؤَالًا.', 'How to send it; a question'],
    ],
    decode: ['a FORMAL email → السَّادَةُ … المُحْتَرَمُونَ and مَعَ الشُّكْرِ', 'مَتَى أَقَمْتَ → PAST + dates (مِنْ … إِلَى …)', 'صِفْهُ → colour / material + الَّذِي / الَّتِي', 'لِمَاذَا مُهِمٌّ → لِأَنَّ + a past story (هَدِيَّةٌ مِنْ …)', 'كَيْفَ يُرْسِلُونَهُ → polite request (أَرْجُو أَنْ …) + a question'],
    coreFrames: [
      { ar: 'السَّادَةُ فِي فُنْدُقِ ______ المُحْتَرَمُونَ،', en: 'Dear … Hotel,' },
      { ar: 'أَقَمْتُ فِي فُنْدُقِكُمْ مِنْ ______ إِلَى ______ فِي الغُرْفَةِ رَقْمِ ______ .', en: '1 · I stayed in your hotel from … to … in room number …' },
      { ar: 'نَسِيتُ ______ ______ فِي ______ .', en: '2 · I left a … (colour) in the …' },
      { ar: 'هِيَ مُهِمَّةٌ لِي، لِأَنَّ ______ .', en: '3 · It is important to me, because …' },
      { ar: 'أَرْجُو أَنْ تُرْسِلُوهَا إِلَى عُنْوَانِي. كَمْ ______ ؟', en: '4 · Please send it to my address. How much …?' },
    ],
    developFrames: [
      { ar: 'حَجَزْتُ غُرْفَةً ______ ، وَكَانَتْ إِقَامَتِي ______ .', en: '1 · I booked a … room, and my stay was …' },
      { ar: 'نَسِيتُ ______ الَّتِي ______ ، وَهِيَ مَصْنُوعَةٌ مِنْ ______ .', en: '2 · I forgot the … which …, and it is made of …' },
      { ar: 'أَعْطَتْنِي جَدَّتِي ______ قَبْلَ ______ ، لِذٰلِكَ ______ .', en: '3 · My grandmother gave me … before …, so …' },
      { ar: 'إِذَا وَجَدْتُمُوهَا، فَأَرْجُو ______ . هَلْ ______ ؟', en: '4 · If you find it, please … Do …?' },
    ],
    bank: ['أَقَمْتُ فِي', 'حَجَزْتُ', 'الغُرْفَةُ رَقْمُ', 'الَّذِي · الَّتِي', 'مَصْنُوعٌ مِنْ', 'أَرْجُو أَنْ', 'تُرْسَلُ بِالبَرِيدِ', 'مَعَ الشُّكْرِ'],
    model: {
      text: `السَّادَةُ فِي فُنْدُقِ النَّخِيلِ المُحْتَرَمُونَ،
أَقَمْتُ مَعَ عَائِلَتِي فِي فُنْدُقِكُمْ مِنْ ٣ إِلَى ٧ أَغُسْطُسَ، فِي الغُرْفَةِ رَقْمِ ٢١٤ الَّتِي تُطِلُّ عَلَى البَحْرِ، وَكَانَتْ إِقَامَتُنَا مُمْتَازَةً. لِلْأَسَفِ نَسِيتُ سَاعَةً فِضِّيَّةً صَغِيرَةً فِي دُرْجِ الطَّاوِلَةِ الَّتِي بِجَانِبِ السَّرِيرِ. هٰذِهِ السَّاعَةُ مُهِمَّةٌ جِدًّا لِي، لِأَنَّ جَدِّي أَعْطَانِي إِيَّاهَا قَبْلَ وَفَاتِهِ، وَمَكْتُوبٌ عَلَيْهَا اسْمِي بِالعَرَبِيَّةِ. إِذَا وَجَدْتُمُوهَا، فَأَرْجُو أَنْ تُرْسِلُوهَا بِالبَرِيدِ المُسَجَّلِ إِلَى عُنْوَانِي فِي بِرْمِنْغْهَامَ، وَسَأَدْفَعُ ثَمَنَ البَرِيدِ طَبْعًا. كَمْ يَوْمًا تَحْتَاجُ الرِّسَالَةُ لِكَيْ تَصِلَ؟
مَعَ الشُّكْرِ،
يُوسُفُ عَلِيٌّ`,
      en: '“Dear Palm Hotel, I stayed with my family in your hotel from 3 to 7 August, in room 214 overlooking the sea, and our stay was excellent. Unfortunately I left a small silver watch in the drawer of the bedside table. This watch is very important to me, because my grandfather gave it to me before he passed away, and my name is written on it in Arabic. If you find it, please send it by registered post to my address in Birmingham — I will of course pay the postage. How many days does it take to arrive? With thanks, Yusuf Ali.”',
      find: ['الَّتِي تُطِلُّ عَلَى البَحْرِ', 'سَاعَةً فِضِّيَّةً صَغِيرَةً', 'وَمَكْتُوبٌ عَلَيْهَا اسْمِي', 'أَرْجُو أَنْ تُرْسِلُوهَا'],
    },
  },
  upgrade: [
    { ar: 'حَجَزْتُ تَذْكِرَةً.', en: 'I booked a ticket.' },
    { ar: 'حَجَزْتُ تَذْكِرَةَ قِطَارٍ إِلَى إِدِنْبَرَةَ عَلَى الإِنْتَرْنِتِ.', en: 'I booked a train ticket to Edinburgh online.' },
    { ar: '… وَأُرْسِلَتِ التَّذْكِرَةُ إِلَى بَرِيدِي الإِلِكْتْرُونِيِّ بَعْدَ دَقِيقَةٍ، فَطَبَعْتُهَا.', en: '… and the ticket was sent to my email a minute later, so I printed it.' },
    { ar: '… لٰكِنَّ القِطَارَ الَّذِي حَجَزْتُهُ أُلْغِيَ، لِذٰلِكَ تَعَلَّمْتُ أَنْ أَتَأَكَّدَ مِنَ المَوْقِعِ قَبْلَ السَّفَرِ.', en: '… but the train I booked was cancelled, so I learnt to check the website before travelling.' },
  ],
  builder: [
    { en: 'The ticket that I booked is confirmed.', cols: [['التَّذْكِرَةُ', 'تَذْكِرَةٌ'], ['الَّتِي حَجَزْتُهَا', 'الَّذِي حَجَزْتُهُ'], ['مُؤَكَّدَةٌ', 'مُؤَكَّدٌ']], key: [0, 0, 0], why: 'A definite feminine noun → الَّتِي … -هَا, and the adjective agrees: مُؤَكَّدَةٌ.' },
    { en: 'The form is sent by email.', cols: [['تُرْسَلُ', 'تُرْسِلُ'], ['الاسْتِمَارَةُ', 'الاسْتِمَارَةَ'], ['بِالبَرِيدِ الإِلِكْتْرُونِيِّ', 'البَرِيدَ الإِلِكْتْرُونِيَّ']], key: [0, 0, 0], why: 'Passive: tursalu (tu-…-a-); the form becomes the subject.' },
    { en: 'Bring your passport, please.', cols: [['أَحْضِرْ', 'تُحْضِرُ'], ['جَوَازَ سَفَرِكَ', 'جَوَازُ سَفَرِكَ'], ['مِنْ فَضْلِكَ', 'لِأَنَّ']], key: [0, 0, 0], why: 'An instruction → imperative أَحْضِرْ; the object is accusative.' },
  ],
  errors: [
    { wrong: 'الفُنْدُقُ الَّتِي أَقَمْتُ فِيهِ جَمِيلٌ.', hint: 'Is فُنْدُقٌ masculine or feminine?', right: 'الفُنْدُقُ الَّذِي أَقَمْتُ فِيهِ جَمِيلٌ.', why: 'Masculine noun → الَّذِي.' },
    { wrong: 'حَجَزْتُ غُرْفَةً الَّتِي تُطِلُّ عَلَى البَحْرِ.', hint: 'غُرْفَةً is indefinite.', right: 'حَجَزْتُ غُرْفَةً تُطِلُّ عَلَى البَحْرِ.', why: 'Indefinite noun → no الَّذِي / الَّتِي.' },
    { wrong: 'التَّذْكِرَةُ يُرْسَلُ إِلَى هَاتِفِكَ.', hint: 'Agreement in the passive.', right: 'التَّذْكِرَةُ تُرْسَلُ إِلَى هَاتِفِكَ.', why: 'Feminine subject → تُرْسَلُ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a travel problem I solved', ar: 'مُشْكِلَةٌ فِي السَّفَرِ حَلَلْتُهَا',
    task: 'Full Q3 title: “Planning and travelling”. Today write ONLY the past paragraph: a problem with a booking, ticket or document — what happened, what you did, who helped, and what you learnt.',
    formula: [
      { ar: 'فِي العُطْلَةِ المَاضِيَةِ أُلْغِيَتْ رِحْلَتُنَا فَجْأَةً.', en: 'T · Last holiday our flight was suddenly cancelled.' },
      { ar: 'انْتَظَرْنَا فِي المَطَارِ، ثُمَّ حَجَزْنَا فُنْدُقًا قَرِيبًا.', en: 'D · We waited at the airport, then booked a nearby hotel.' },
      { ar: 'كَانَ صَعْبًا لِأَنَّ أُخْتِي الصَّغِيرَةَ كَانَتْ مَرِيضَةً.', en: 'R · It was hard because my little sister was ill.' },
      { ar: 'تَعَلَّمْتُ أَنْ أَبْقَى هَادِئًا.', en: 'F · I learnt to stay calm.' },
    ],
    phrases: [['أُلْغِيَتْ · تَأَخَّرَتْ', 'was cancelled · was delayed'], ['اكْتَشَفْتُ أَنَّ …', 'I discovered that …'], ['سَاعَدَنِي … الَّذِي …', '… who … helped me'], ['فِي النِّهَايَةِ …', 'in the end …'], ['تَعَلَّمْتُ أَنْ …', 'I learnt to …']],
    model: {
      text: 'فِي الصَّيْفِ المَاضِي، عِنْدَمَا وَصَلْنَا إِلَى مَطَارِ القَاهِرَةِ، اكْتَشَفْتُ أَنَّ تَذْكِرَتِي لَمْ تُطْبَعْ، وَأَنَّ هَاتِفِي بِدُونِ شَحْنٍ. شَعَرْتُ بِالخَوْفِ، لِأَنَّ الرِّحْلَةَ كَانَتْ بَعْدَ سَاعَةٍ وَاحِدَةٍ. ذَهَبْتُ إِلَى مَكْتَبِ الشَّرِكَةِ، فَسَاعَدَتْنِي مُوَظَّفَةٌ لَطِيفَةٌ؛ طَلَبَتْ جَوَازَ سَفَرِي، وَوَجَدَتِ الحَجْزَ بِاسْمِي، ثُمَّ طَبَعَتْ لِي تَذْكِرَةً جَدِيدَةً. فِي النِّهَايَةِ وَصَلْتُ إِلَى الطَّائِرَةِ قَبْلَ إِغْلَاقِ البَابِ بِدَقَائِقَ. تَعَلَّمْتُ أَنْ أَحْمِلَ نُسْخَةً وَرَقِيَّةً دَائِمًا.',
      en: 'T: last summer, when we got to Cairo airport, I discovered my ticket hadn’t been printed and my phone was dead · D: I was scared, because the flight was in one hour; I went to the airline desk and a kind employee helped me — she asked for my passport, found the booking in my name and printed me a new ticket; in the end I reached the plane minutes before the door closed · F: I learnt always to carry a paper copy.',
      find: ['اكْتَشَفْتُ أَنَّ تَذْكِرَتِي لَمْ تُطْبَعْ', 'فَسَاعَدَتْنِي مُوَظَّفَةٌ', 'فِي النِّهَايَةِ', 'تَعَلَّمْتُ أَنْ أَحْمِلَ'],
    },
  },
};

module.exports = { speak, write };
