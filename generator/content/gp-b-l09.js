'use strict';
/* Guided Practice Rooms · TB-L09 · Invitations, Holidays and Past Experiences. New tasks. Teacher-made. */
const XP = require('./xp-b-l09');

const base = { topic: 'B', n: 9, short: 'Invitations and Past Experiences', arShort: 'الدَّعَوَاتُ وَالتَّجَارِبُ', fileTitle: 'Invitations_Holidays_and_Past_Experiences', title: 'Invitations, Holidays and Past Experiences', icon: 'FaEnvelopeOpenText', grammar: 'the past tense for events; future plans with sa-; sequencing (awwalan, thumma, baʿda dhālika, akhīran); polite accepting and declining (bi-kulli surūr · āsif, lā astaṭīʿu li-anna …)' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (an invitation to an Eid lunch, politely declining an invitation and suggesting another day), a topic conversation with A-R-E-T, and a one-minute talk about a celebration.',
  words: XP.speak.words,
  words1: { title: 'Inviting, accepting, declining', ar: 'الدَّعْوَةُ وَالقَبُولُ وَالاعْتِذَارُ' },
  words2: { title: 'Telling a story in order', ar: 'نَحْكِي قِصَّةً بِالتَّرْتِيبِ' },
  ladder: {
    q: 'كَيْفَ احْتَفَلْتَ بِالعِيدِ المَاضِي؟', qEn: 'How did you celebrate last Eid?',
    rungs: [
      { ar: 'احْتَفَلْتُ بِالعِيدِ مَعَ عَائِلَتِي.', en: 'I celebrated Eid with my family.' },
      { ar: 'احْتَفَلْتُ بِالعِيدِ مَعَ عَائِلَتِي فِي بَيْتِ جَدِّي، لِأَنَّهُ أَكْبَرُ بَيْتٍ.', en: '… at my grandfather’s house, because it is the biggest.' },
      { ar: '… أَوَّلًا صَلَّيْنَا فِي المَسْجِدِ، ثُمَّ أَكَلْنَا الفُطُورَ، وَبَعْدَ ذٰلِكَ زُرْنَا الأَقَارِبَ.', en: '… first we prayed at the mosque, then had breakfast, and after that visited relatives.' },
      { ar: '… وَفِي العِيدِ القَادِمِ سَنَدْعُو جِيرَانَنَا؛ فَالعِيدُ فِي رَأْيِي أَجْمَلُ مَعَ النَّاسِ.', en: '… next Eid we will invite our neighbours — in my opinion Eid is better with people.' },
    ],
  },
  ladderQs: [
    { q: 'مَتَى ذَهَبْتَ إِلَى حَفْلَةٍ آخِرَ مَرَّةٍ؟', l1: 'ذَهَبْتُ إِلَى حَفْلَةٍ …', l2: '… وَكَانَتْ … لِأَنَّ …', l3: '… أَوَّلًا … ثُمَّ …' },
    { q: 'كَيْفَ تَعْتَذِرُ عَنْ دَعْوَةٍ؟', l1: 'أَقُولُ: آسِفٌ …', l2: '… لِأَنِّي …', l3: '… وَأَقْتَرِحُ …' },
    { q: 'مَا أَجْمَلُ مُفَاجَأَةٍ حَدَثَتْ لَكَ؟', l1: 'أَجْمَلُ مُفَاجَأَةٍ …', l2: '… لِأَنَّ …', l3: '… وَلَا أَنْسَى …' },
    { q: 'مَاذَا سَتَفْعَلُ فِي عِيدِ مِيلَادِكَ القَادِمِ؟', l1: 'سَأَ …', l2: '… لِأَنَّ …', l3: '… وَسَأَدْعُو …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a phone call from your friend’s mother', title: 'Role play 1 — An invitation to Eid lunch', ar: 'دَعْوَةٌ إِلَى غَدَاءِ العِيدِ', you: 'a friend of the family', them: 'your friend’s mother',
      tasks: [
        { ex: 'عِيدُكَ مُبَارَكٌ! أَدْعُوكَ إِلَى الغَدَاءِ يَوْمَ العِيدِ.', task: 'Accept the invitation politely.', plan: 'أَدْعُوكَ ← بِكُلِّ سُرُورٍ! شُكْرًا …', model: 'بِكُلِّ سُرُورٍ! شُكْرًا جَزِيلًا عَلَى الدَّعْوَةِ.', modelEn: 'With pleasure! Thank you very much for the invitation.' },
        { ex: 'هَلْ تَأْتِي مَعَ أَحَدٍ؟', task: 'Say who will come with you.', plan: 'هَلْ ← سَآتِي مَعَ …', model: 'سَآتِي مَعَ أُخْتِي الصَّغِيرَةِ.', modelEn: 'I will come with my little sister.' },
        { ex: 'فِي أَيِّ سَاعَةٍ تَسْتَطِيعَانِ أَنْ تَأْتِيَا؟', task: 'Give a time.', plan: 'أَيِّ سَاعَةٍ ← فِي السَّاعَةِ …', model: 'فِي السَّاعَةِ الوَاحِدَةِ، بَعْدَ زِيَارَةِ جَدَّتِي.', modelEn: 'At one o’clock, after visiting my grandmother.' },
        { ex: 'هَلْ هُنَاكَ طَعَامٌ لَا تَأْكُلَانِهِ؟', task: 'Mention a food you don’t eat.', plan: 'هَلْ ← لَا … / نَعَمْ، أُخْتِي لَا تَأْكُلُ …', model: 'أُخْتِي لَا تَأْكُلُ المُكَسَّرَاتِ، لِأَنَّ عِنْدَهَا حَسَاسِيَّةً.', modelEn: 'My sister doesn’t eat nuts, because she has an allergy.' },
        { unexpected: true, ex: 'مَاذَا فَعَلْتَ فِي العِيدِ المَاضِي؟', task: 'Answer the unexpected question (past).', plan: 'مَاذَا فَعَلْتَ ← زُرْتُ … / أَكَلْتُ …', model: 'زُرْتُ أَقَارِبِي فِي لَنْدَنَ، وَأَكَلْنَا الكَثِيرَ مِنَ الحَلَوِيَّاتِ.', modelEn: 'I visited my relatives in London, and we ate lots of sweets.' },
      ],
      girl: 'عِيدُكِ · أَدْعُوكِ · تَأْتِينَ · فَعَلْتِ',
      notes: 'Language: bi-kulli surūrin · sa-ātī maʿa · the dual (tastaṭīʿāni an taʾtiyā) for the Leader · ʿindahā ḥasāsiyya · past: zurtu, akalnā.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a call with a friend', title: 'Role play 2 — Sorry, I can’t come!', ar: 'آسِفٌ، لَا أَسْتَطِيعُ!', you: 'a friend who must decline', them: 'your friend, who is having a party',
      tasks: [
        { ex: 'حَفْلَتِي يَوْمَ الجُمُعَةِ! سَتَأْتِي، أَلَيْسَ كَذٰلِكَ؟', task: 'Decline politely, with a reason.', model: 'آسِفٌ جِدًّا، لَا أَسْتَطِيعُ أَنْ آتِيَ يَوْمَ الجُمُعَةِ، لِأَنَّ عِنْدِي زِفَافَ ابْنِ عَمِّي.', modelEn: 'I’m very sorry, I can’t come on Friday, because I have my cousin’s wedding.' },
        { ex: 'يَا خَسَارَةُ! مَاذَا فَعَلْتَ فِي آخِرِ زِفَافٍ؟', task: 'Describe a past wedding in order.', model: 'أَوَّلًا رَقَصْنَا الدَّبْكَةَ، ثُمَّ أَكَلْنَا المَنْسَفَ، وَأَخِيرًا رَجَعْنَا إِلَى البَيْتِ بَعْدَ مُنْتَصَفِ اللَّيْلِ.', modelEn: 'First we danced the dabke, then ate mansaf, and finally got home after midnight.' },
        { ex: 'وَمَتَى نَحْتَفِلُ مَعًا إِذَنْ؟', task: 'Suggest another day and an activity.', model: 'مَا رَأْيُكَ أَنْ نَلْتَقِيَ يَوْمَ الأَحَدِ؟ سَأُحْضِرُ لَكَ هَدِيَّتَكَ، وَنَذْهَبُ إِلَى السِّينِمَا.', modelEn: 'How about Sunday? I’ll bring your present, and we’ll go to the cinema.' },
        { ex: 'فِكْرَةٌ جَيِّدَةٌ!', task: 'ASK about the party (two questions).', model: 'مَنْ سَيَأْتِي إِلَى الحَفْلَةِ؟ وَهَلْ سَيَكُونُ عِنْدَكُمْ مُفَاجَأَةٌ؟', modelEn: 'Who is coming to the party? And will there be a surprise?' },
        { unexpected: true, ex: 'لَوْ لَمْ يَكُنْ عِنْدَكَ زِفَافٌ، مَاذَا كُنْتَ سَتُحْضِرُ إِلَى الحَفْلَةِ؟', task: 'Answer the unexpected question (law … la-).', model: 'لَوْ لَمْ يَكُنْ عِنْدِي زِفَافٌ، لَأَحْضَرْتُ كَعْكَةً صَنَعْتُهَا بِنَفْسِي، وَلَغَنَّيْتُ لَكَ!', modelEn: 'If I didn’t have a wedding, I would have brought a cake I made myself — and sung for you!' },
      ],
      girl: 'سَتَأْتِينَ · فَعَلْتِ · رَأْيُكِ · لَكِ · عِنْدَكِ · كُنْتِ سَتُحْضِرِينَ — and the Speaker says آسِفَةٌ',
      notes: 'Language: declining (āsifun, lā astaṭīʿu an āti̇ya li-anna …) · sequencing (awwalan, thumma, akhīran) · suggesting (mā raʾyuka an …) · law … la- (Stretch).',
    },
  ],
  convAr: 'المُنَاسَبَاتُ وَالتَّجَارِبُ',
  conv: [
    { route: 'Core', q: 'مَتَى عِيدُ مِيلَادِكَ؟', en: 'When is your birthday?', push: 'وَكَيْفَ تَحْتَفِلُ؟' },
    { route: 'Core', q: 'هَلْ تُحِبُّ الحَفَلَاتِ؟', en: 'Do you like parties?', push: 'لِمَاذَا؟' },
    { route: 'Develop', q: 'صِفْ أَجْمَلَ يَوْمٍ فِي عُطْلَتِكَ الأَخِيرَةِ.', en: 'Describe the best day of your last holiday.', push: 'ثُمَّ مَاذَا؟' },
    { route: 'Develop', q: 'مَتَى رَفَضْتَ دَعْوَةً؟ وَلِمَاذَا؟', en: 'When did you decline an invitation, and why?', push: 'وَمَاذَا قُلْتَ؟' },
    { route: 'Stretch', q: 'هَلْ تُكَلِّفُ الحَفَلَاتُ اليَوْمَ أَكْثَرَ مِنَ اللَّازِمِ؟', en: 'Do celebrations cost too much today?', push: 'مَا رَأْيُكَ؟' },
    { route: 'Stretch', q: 'مَا التَّجْرِبَةُ الَّتِي غَيَّرَتْ رَأْيَكَ فِي شَيْءٍ؟', en: 'What experience changed your mind about something?', push: 'كَيْفَ؟' },
  ],
  convModels: [
    { q: 'صِفْ أَجْمَلَ يَوْمٍ فِي عُطْلَتِكَ الأَخِيرَةِ.', model: 'أَجْمَلُ يَوْمٍ كَانَ عِنْدَمَا زُرْنَا جَزِيرَةً صَغِيرَةً بِالقَارِبِ؛ أَوَّلًا سَبَحْنَا، ثُمَّ أَكَلْنَا السَّمَكَ المَشْوِيَّ عَلَى الشَّاطِئِ، وَكَانَ رَائِعًا لِأَنَّ الجَزِيرَةَ كَانَتْ هَادِئَةً جِدًّا.', modelEn: 'A: when we visited a small island by boat · E: first we swam, then ate grilled fish on the beach · R: wonderful because the island was so quiet.' },
    { q: 'مَتَى رَفَضْتَ دَعْوَةً؟ وَلِمَاذَا؟', model: 'فِي الشَّهْرِ المَاضِي رَفَضْتُ دَعْوَةَ صَدِيقِي إِلَى السِّينِمَا، لِأَنَّ عِنْدِي امْتِحَانًا مُهِمًّا؛ قُلْتُ لَهُ: "آسِفٌ، لٰكِنْ سَنَذْهَبُ بَعْدَ الامْتِحَانِ"، وَذَهَبْنَا فِعْلًا.', modelEn: 'A: last month I turned down a cinema invitation · R: I had an important exam · E: I said “sorry, we’ll go after the exam” — and we did.' },
    { q: 'هَلْ تُكَلِّفُ الحَفَلَاتُ اليَوْمَ أَكْثَرَ مِنَ اللَّازِمِ؟', model: 'صَحِيحٌ أَنَّ الحَفَلَاتِ الكَبِيرَةَ جَمِيلَةٌ، غَيْرَ أَنَّ بَعْضَ العَائِلَاتِ تَصْرِفُ مَالًا كَثِيرًا جِدًّا؛ فِي رَأْيِي الحَفْلَةُ البَسِيطَةُ فِي البَيْتِ أَدْفَأُ، كَمَا كَانَتْ حَفَلَاتُ أَجْدَادِنَا.', modelEn: 'Concession: big parties are nice, but some families spend far too much · opinion: a simple party at home is warmer — like our grandparents’ parties.' },
  ],
  talk: {
    title: 'One minute: a celebration I remember', ar: 'مُنَاسَبَةٌ أَتَذَكَّرُهَا',
    text: 'Talk for one minute about a celebration you remember (a wedding, Eid, a birthday, a graduation): when, where, who was there, what happened in order — and your next celebration.',
    routes: {
      core: '30 seconds: what, when, where, and three past verbs.',
      develop: '60 seconds: tell it in order (أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ · أَخِيرًا) and give your feelings.',
      stretch: '90 seconds: add a surprise or problem, an opinion, and your next celebration (future).',
    },
    phrases: [['فِي … احْتَفَلْنَا بِـ …', 'in … we celebrated …'], ['أَوَّلًا … ثُمَّ … أَخِيرًا …', 'first … then … finally …'], ['لَا أَنْسَى عِنْدَمَا …', 'I won’t forget when …'], ['فِي المُنَاسَبَةِ القَادِمَةِ سَـ …', 'at the next occasion I will …']],
  },
  checkCore: 'accepted or declined politely (بِكُلِّ سُرُورٍ · آسِفٌ، لَا أَسْتَطِيعُ …)',
  checkDevelop: 'told events in order (أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ · أَخِيرًا) in the past',
};
speak.talk.phrases[0] = ['فِي الصَّيْفِ احْتَفَلْنَا بِزِفَافِ …', 'in the summer we celebrated …’s wedding'];
speak.talk.phrases[3] = ['فِي المُنَاسَبَةِ القَادِمَةِ سَأَدْعُو …', 'at the next occasion I will invite …'];

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (a surprise party you organised), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Party invitation: reply slip', ar: 'رَدٌّ عَلَى دَعْوَةٍ إِلَى حَفْلَةٍ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'سَتَحْضُرُ؟', en: 'Will you attend?', tip: 'نَعَمْ، بِكُلِّ سُرُورٍ · لَا، آسِفٌ' },
      { core: true, ar: 'عَدَدُ الضُّيُوفِ مَعَكَ', en: 'Number of guests with you', tip: 'شَخْصٌ وَاحِدٌ · شَخْصَانِ' },
      { core: true, ar: 'طَعَامٌ لَا تَأْكُلُهُ', en: 'A food you don’t eat', tip: 'السَّمَكُ · لَا يُوجَدُ' },
      { core: true, ar: 'وَقْتُ الوُصُولِ', en: 'Arrival time', tip: 'السَّابِعَةُ مَسَاءً' },
      { ar: 'جُمْلَةٌ: رِسَالَةٌ قَصِيرَةٌ لِلْمُضِيفِ', en: 'ONE sentence: a short message to the host', tip: 'شُكْرًا عَلَى الدَّعْوَةِ، وَ …' },
    ],
  },
  Q2: {
    title: 'Question 2: the surprise party', ar: 'الحَفْلَةُ المُفَاجِئَةُ',
    task: 'You organised a surprise party for someone in your family. Write an email in Arabic to your friend of about 80–90 words. You must include: • who the party was for and why • how you prepared, in order • what happened when the person arrived • what you will organise next time.',
    phrases: [['نَظَّمْتُ حَفْلَةً مُفَاجِئَةً لِـ …', 'I organised a surprise party for …'], ['أَوَّلًا … ثُمَّ … وَبَعْدَ ذٰلِكَ …', 'first … then … after that …'], ['عِنْدَمَا دَخَلَ / دَخَلَتْ …', 'when he / she came in …'], ['فِي المَرَّةِ القَادِمَةِ سَأُنَظِّمُ …', 'next time I will organise …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ حَفْلَةٍ مُفَاجِئَةٍ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about a surprise party (80–90 words).'],
      ['1', 'لِمَنْ كَانَتِ الحَفْلَةُ؟ وَلِمَاذَا؟', 'Who it was for, and why'],
      ['2', 'كَيْفَ اسْتَعْدَدْتَ؟', 'How you prepared, in order'],
      ['3', 'مَاذَا حَدَثَ عِنْدَمَا وَصَلَ الشَّخْصُ؟', 'What happened when they arrived'],
      ['4', 'مَاذَا سَتُنَظِّمُ فِي المَرَّةِ القَادِمَةِ؟', 'What you will organise next time'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'لِمَنْ كَانَتْ … وَلِمَاذَا → PAST + a reason', 'كَيْفَ اسْتَعْدَدْتَ → PAST, in order (أَوَّلًا · ثُمَّ)', 'مَاذَا حَدَثَ عِنْدَمَا → PAST + feelings', 'سَتُنَظِّمُ → FUTURE (sa-)'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'نَظَّمْتُ حَفْلَةً مُفَاجِئَةً لِأُمِّي، لِأَنَّ ______ .', en: '1 · I organised a surprise party for my mum, because …' },
      { ar: 'أَوَّلًا ______ ، ثُمَّ ______ .', en: '2 · First …, then …' },
      { ar: 'عِنْدَمَا دَخَلَتْ ______ ، وَ ______ .', en: '3 · When she came in, …, and …' },
      { ar: 'فِي المَرَّةِ القَادِمَةِ سَأُنَظِّمُ ______ .', en: '4 · Next time I will organise …' },
    ],
    developFrames: [
      { ar: 'كَانَ عِيدُ مِيلَادِ ______ الخَمْسِينَ، فَقَرَّرْتُ أَنْ ______ .', en: '1 · It was …’s 50th birthday, so I decided to …' },
      { ar: 'دَعَوْتُ ______ سِرًّا، وَطَلَبْتُ مِنْ ______ أَنْ ______ .', en: '2 · I secretly invited …, and asked … to …' },
      { ar: 'أَطْفَأْنَا الأَضْوَاءَ، وَعِنْدَمَا ______ صَرَخْنَا ______ .', en: '3 · We turned off the lights, and when … we shouted …' },
      { ar: 'السَّنَةَ القَادِمَةَ سَـ ______ ، لِأَنَّ ______ .', en: '4 · Next year we will …, because …' },
    ],
    bank: ['حَفْلَةٌ مُفَاجِئَةٌ', 'دَعَوْتُ', 'سِرًّا', 'أَوَّلًا · ثُمَّ · أَخِيرًا', 'كَعْكَةٌ · هَدِيَّةٌ', 'تَفَاجَأَتْ · بَكَتْ مِنَ الفَرَحِ', 'احْتَفَلْنَا', 'سَأُنَظِّمُ'],
    model: {
      text: `مَرْحَبًا يَا لَيْلَى،
كَيْفَ حَالُكِ؟ يَوْمَ السَّبْتِ المَاضِي نَظَّمْتُ مَعَ إِخْوَتِي حَفْلَةً مُفَاجِئَةً لِأُمِّي، لِأَنَّهُ كَانَ عِيدَ مِيلَادِهَا الخَمْسِينَ. أَوَّلًا دَعَوْنَا خَالَاتِي وَصَدِيقَاتِهَا سِرًّا، ثُمَّ زَيَّنَّا غُرْفَةَ الجُلُوسِ بِالبَالُونَاتِ الذَّهَبِيَّةِ، وَبَعْدَ ذٰلِكَ صَنَعْنَا كَعْكَةً كَبِيرَةً بِالفَرَاوِلَةِ. أَخَذَهَا أَبِي إِلَى السُّوقِ حَتَّى نَنْتَهِيَ مِنَ التَّحْضِيرِ. عِنْدَمَا دَخَلَتِ البَيْتَ أَطْفَأْنَا الأَضْوَاءَ، ثُمَّ صَرَخْنَا: "مُفَاجَأَةٌ!"، فَبَكَتْ أُمِّي مِنَ الفَرَحِ، وَضَحِكَ الجَمِيعُ، وَأَكَلْنَا الكَعْكَةَ مَعًا. فِي المَرَّةِ القَادِمَةِ سَأُنَظِّمُ حَفْلَةً لِأَبِي فِي حَدِيقَةٍ عَامَّةٍ، لِأَنَّهُ يُحِبُّ الطَّبِيعَةَ وَالشِّوَاءَ!
مَعَ مَحَبَّتِي،
سُمَيَّةُ`,
      en: '“Hi Layla, how are you? Last Saturday my brothers and I organised a surprise party for my mum, because it was her fiftieth birthday. First we secretly invited my aunts and her friends, then we decorated the living room with gold balloons, and after that we made a big strawberry cake. My dad took her to the market until we finished preparing. When she came in we turned off the lights, then shouted “Surprise!”, and my mum cried with joy while everyone laughed, and we ate the cake together. Next time I will organise a party for my dad in a park, because he loves nature and barbecues! Love, Sumayya.”',
      find: ['نَظَّمْتُ … حَفْلَةً مُفَاجِئَةً', 'أَوَّلًا … ثُمَّ … وَبَعْدَ ذٰلِكَ', 'عِنْدَمَا دَخَلَتِ', 'سَأُنَظِّمُ حَفْلَةً'],
    },
  },
  upgrade: [
    { ar: 'ذَهَبْتُ إِلَى زِفَافٍ.', en: 'I went to a wedding.' },
    { ar: 'ذَهَبْتُ إِلَى زِفَافِ خَالِي فِي عَمَّانَ فِي الصَّيْفِ المَاضِي.', en: '… my uncle’s wedding in Amman last summer.' },
    { ar: 'ذَهَبْتُ إِلَى زِفَافِ خَالِي فِي عَمَّانَ، وَكَانَ رَائِعًا لِأَنَّ كُلَّ العَائِلَةِ اجْتَمَعَتْ.', en: '… it was wonderful because the whole family gathered.' },
    { ar: '… وَفِي رَأْيِي كَانَ أَجْمَلَ زِفَافٍ رَأَيْتُهُ، لٰكِنَّهُ كَانَ طَوِيلًا جِدًّا!', en: '… in my opinion the best wedding I’ve seen — but it was very long!' },
  ],
  builder: [
    { en: 'Sorry, I can’t come because I am ill.', cols: [['آسِفٌ', 'بِكُلِّ سُرُورٍ'], ['لَا أَسْتَطِيعُ أَنْ آتِيَ', 'لَا أَسْتَطِيعُ أَنْ آتِي'], ['لِأَنِّي مَرِيضٌ', 'لِذٰلِكَ مَرِيضٌ']], key: [0, 0, 0], why: 'Declining = آسِفٌ; after أَنْ → آتِيَ; because = لِأَنِّي.' },
    { en: 'First we ate, then we danced.', cols: [['أَوَّلًا', 'أَخِيرًا'], ['أَكَلْنَا', 'نَأْكُلُ'], ['ثُمَّ رَقَصْنَا', 'ثُمَّ نَرْقُصُ']], key: [0, 0, 0], why: 'A past story → past verbs; first = أَوَّلًا.' },
    { en: 'Next week we will celebrate my sister’s success.', cols: [['الأُسْبُوعَ القَادِمَ', 'الأُسْبُوعَ المَاضِي'], ['سَنَحْتَفِلُ', 'احْتَفَلْنَا'], ['بِنَجَاحِ أُخْتِي', 'نَجَاحِ أُخْتِي']], key: [0, 0, 0], why: 'Future → سَنَحْتَفِلُ; celebrate = احْتَفَلَ + bi-: بِنَجَاحِ.' },
  ],
  errors: [
    { wrong: 'أَمْسِ نَحْتَفِلُ بِالعِيدِ.', hint: 'Which time? Which tense?', right: 'أَمْسِ احْتَفَلْنَا بِالعِيدِ.', why: 'Yesterday → past: احْتَفَلْنَا.' },
    { wrong: 'آسِفٌ، لَا أَسْتَطِيعُ آتِي.', hint: 'Something is missing after أَسْتَطِيعُ.', right: 'آسِفٌ، لَا أَسْتَطِيعُ أَنْ آتِيَ.', why: 'أَسْتَطِيعُ أَنْ + a verb in -a.' },
    { wrong: 'أَدْعُوكَ إِلَى حَفْلَتِي يَوْمُ السَّبْتِ.', hint: '“On Saturday” has a special ending.', right: 'أَدْعُوكَ إِلَى حَفْلَتِي يَوْمَ السَّبْتِ.', why: '“On (day)” = يَوْمَ (with -a).' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a day full of surprises', ar: 'يَوْمٌ مَلِيءٌ بِالمُفَاجَآتِ',
    task: 'Full Q3 title: “Celebrations and special days”. Today write ONLY the past paragraph: a special day with a surprise (good or bad) — what happened in order, who was there, why it was special and how you felt.',
    formula: [
      { ar: 'كَانَ يَوْمُ تَخَرُّجِ أَخِي يَوْمًا مَلِيئًا بِالمُفَاجَآتِ.', en: 'T · My brother’s graduation was a day full of surprises.' },
      { ar: 'أَوَّلًا تَأَخَّرْنَا، ثُمَّ فَازَ أَخِي بِجَائِزَةٍ.', en: 'D · First we were late, then my brother won a prize.' },
      { ar: 'كَانَ مُمَيَّزًا لِأَنَّهُ أَوَّلُ مَنْ يَتَخَرَّجُ فِي عَائِلَتِنَا.', en: 'R · Special: he is the first in our family to graduate.' },
      { ar: 'شَعَرْنَا بِالفَخْرِ، وَسَنَحْتَفِلُ بِتَخَرُّجِي أَيْضًا!', en: 'F · We felt proud — and we will celebrate my graduation too!' },
    ],
    phrases: [['كَانَ … يَوْمًا لَا يُنْسَى', '… was an unforgettable day'], ['أَوَّلًا … ثُمَّ … أَخِيرًا …', 'first … then … finally …'], ['فَجْأَةً …', 'suddenly …'], ['كَانَ مُمَيَّزًا لِأَنَّ …', 'it was special because …'], ['شَعَرْنَا بِالفَخْرِ', 'we felt proud']],
    model: {
      text: 'كَانَ يَوْمُ تَخَرُّجِ أَخِي مِنَ الجَامِعَةِ يَوْمًا مَلِيئًا بِالمُفَاجَآتِ. أَوَّلًا تَعَطَّلَتْ سَيَّارَتُنَا فِي الطَّرِيقِ، فَوَصَلْنَا مُتَأَخِّرِينَ نِصْفَ سَاعَةٍ، وَكُنَّا قَلِقِينَ جِدًّا. ثُمَّ فَجْأَةً سَمِعْنَا اسْمَ أَخِي، لِأَنَّهُ فَازَ بِجَائِزَةِ أَفْضَلِ طَالِبٍ فِي قِسْمِهِ! بَعْدَ ذٰلِكَ احْتَفَلْنَا فِي مَطْعَمٍ قَرِيبٍ مَعَ أَصْدِقَائِهِ. كَانَ ذٰلِكَ اليَوْمُ مُمَيَّزًا، لِأَنَّ أَخِي أَوَّلُ مَنْ يَتَخَرَّجُ مِنَ الجَامِعَةِ فِي عَائِلَتِنَا. بَكَى أَبِي مِنَ الفَرَحِ، وَشَعَرْنَا كُلُّنَا بِالفَخْرِ، وَقَرَّرْتُ أَنْ أَدْرُسَ بِجِدٍّ مِثْلَهُ.',
      en: 'T: my brother’s university graduation was a day full of surprises · D: first our car broke down on the way, so we arrived half an hour late and were very worried; then suddenly we heard my brother’s name — he had won the prize for best student in his department; after that we celebrated with his friends in a nearby restaurant · R: special because he is the first in our family to graduate · F: my dad cried with joy, we all felt proud, and I decided to study hard like him.',
      find: ['يَوْمًا مَلِيئًا بِالمُفَاجَآتِ', 'أَوَّلًا … ثُمَّ فَجْأَةً', 'كَانَ … مُمَيَّزًا لِأَنَّ', 'شَعَرْنَا كُلُّنَا بِالفَخْرِ'],
    },
  },
};
write.Q2.developFrames[3] = { ar: 'السَّنَةَ القَادِمَةَ سَنَحْتَفِلُ ______ ، لِأَنَّ ______ .', en: '4 · Next year we will celebrate …, because …' };
write.Q2.phrases[0] = ['نَظَّمْتُ حَفْلَةً مُفَاجِئَةً لِأَخِي …', 'I organised a surprise party for my brother …'];

module.exports = { speak, write };
