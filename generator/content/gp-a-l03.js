'use strict';
/* Guided Practice Rooms · AT-A-L03 · Frequency, Sequencing and Communication. New tasks. Teacher-made. */
const XP = require('./xp-a-l03');

const base = { topic: 'A', n: 3, short: 'Frequency and Communication', arShort: 'التَّكْرَارُ وَالتَّوَاصُلُ', fileTitle: 'Frequency_Sequencing_and_Communication', title: 'Frequency, Sequencing and Communication', icon: 'FaComments', grammar: 'frequency adverbs (dāʾiman, ghāliban, aḥyānan, nādiran, abadan); qabla an / baʿda an + verb in -a; ʿindamā' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (a phone call to a relative abroad, a survey about screen time), a topic conversation with A-R-E-T, and a one-minute talk about how they keep in touch.',
  words: XP.speak.words,
  words1: { title: 'How often? Frequency words', ar: 'كَمْ مَرَّةً؟' },
  words2: { title: 'Keeping in touch — and in what order', ar: 'التَّوَاصُلُ وَالتَّرْتِيبُ' },
  ladder: {
    q: 'كَيْفَ تَتَوَاصَلُ مَعَ أَصْدِقَائِكَ؟', qEn: 'How do you keep in touch with your friends?',
    rungs: [
      { ar: 'أَتَوَاصَلُ مَعَ أَصْدِقَائِي بِالهَاتِفِ.', en: 'I keep in touch with my friends by phone.' },
      { ar: 'أَتَوَاصَلُ مَعَ أَصْدِقَائِي بِالهَاتِفِ، لِأَنَّهُ سَرِيعٌ وَسَهْلٌ.', en: '… because it is quick and easy.' },
      { ar: '… وَغَالِبًا أُرْسِلُ رِسَالَةً قَبْلَ أَنْ أَنَامَ.', en: '… and I often send a message before I go to sleep.' },
      { ar: '… لٰكِنْ أَمْسِ اتَّصَلْتُ بِصَدِيقِي مُبَاشَرَةً، فَفِي رَأْيِي الصَّوْتُ أَفْضَلُ مِنَ الرَّسَائِلِ.', en: '… but yesterday I called my friend directly — in my opinion a voice is better than messages.' },
    ],
  },
  ladderQs: [
    { q: 'كَمْ مَرَّةً تَتَّصِلُ بِجَدِّكَ؟', l1: 'أَتَّصِلُ بِجَدِّي …', l2: '… لِأَنَّهُ …', l3: '… عِنْدَمَا … / آخِرَ مَرَّةٍ …' },
    { q: 'مَاذَا تَفْعَلُ قَبْلَ أَنْ تَنَامَ؟', l1: 'قَبْلَ أَنْ أَنَامَ …', l2: '… لِأَنَّ …', l3: '… وَأَحْيَانًا …' },
    { q: 'هَلْ تُرْسِلُ رَسَائِلَ كَثِيرَةً؟', l1: 'نَعَمْ / لَا، أُرْسِلُ …', l2: '… لِأَنِّي …', l3: '… مَثَلًا أَمْسِ …' },
    { q: 'مَاذَا تَفْعَلُ بَعْدَ أَنْ تَصِلَ إِلَى البَيْتِ؟', l1: 'بَعْدَ أَنْ أَصِلَ …', l2: '… ثُمَّ …', l3: '… وَنَادِرًا مَا …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a video call to your aunt in Egypt', title: 'Role play 1 — A video call to your aunt abroad', ar: 'مُكَالَمَةٌ مَعَ خَالَتِي', you: 'a nephew or niece', them: 'your aunt in Egypt',
      tasks: [
        { ex: 'أَهْلًا يَا حَبِيبِي! كَيْفَ حَالُكَ؟', task: 'Greet her and say how you are.', plan: 'كَيْفَ ← أَنَا بِخَيْرٍ …', model: 'أَهْلًا يَا خَالَتِي! أَنَا بِخَيْرٍ، وَالحَمْدُ لِلّٰهِ.', modelEn: 'Hello auntie! I am fine, thank God.' },
        { ex: 'كَمْ مَرَّةً تَتَكَلَّمُ مَعَ جَدَّتِكَ؟', task: 'Say how often you talk to your grandmother.', plan: 'كَمْ مَرَّةً ← أَتَكَلَّمُ مَعَهَا …', model: 'أَتَكَلَّمُ مَعَهَا مَرَّتَيْنِ فِي الأُسْبُوعِ.', modelEn: 'I talk to her twice a week.' },
        { ex: 'وَمَتَى تَتَّصِلُ بِهَا عَادَةً؟', task: 'Say when you usually call.', plan: 'مَتَى ← بَعْدَ أَنْ …', model: 'أَتَّصِلُ بِهَا بَعْدَ أَنْ أَصِلَ مِنَ المَدْرَسَةِ.', modelEn: 'I call her after I get back from school.' },
        { ex: 'هَلْ تَكْتُبُ الرَّسَائِلَ بِالعَرَبِيَّةِ؟', task: 'Say if you write messages in Arabic.', plan: 'هَلْ ← أَحْيَانًا / نَادِرًا …', model: 'أَحْيَانًا أَكْتُبُ بِالعَرَبِيَّةِ، لٰكِنْ غَالِبًا بِالإِنْجِلِيزِيَّةِ.', modelEn: 'Sometimes I write in Arabic, but usually in English.' },
        { unexpected: true, ex: 'مَتَى سَتَزُورُنَا فِي مِصْرَ؟', task: 'Answer the unexpected question (future).', plan: 'مَتَى ← سَأَزُورُكُمْ فِي …', model: 'سَأَزُورُكُمْ فِي الصَّيْفِ القَادِمِ، إِنْ شَاءَ اللّٰهُ.', modelEn: 'I will visit you next summer, God willing.' },
      ],
      girl: 'يَا حَبِيبَتِي · حَالُكِ · تَتَكَلَّمِينَ · جَدَّتِكِ · تَتَّصِلِينَ · تَكْتُبِينَ · سَتَزُورِينَنَا',
      notes: 'Language: frequency (marratayni fī al-usbūʿ, aḥyānan, ghāliban) · baʿda an + verb in -a (an aṣila) · ittaṣala bi- (call) · sa- for the future.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a school survey', title: 'Role play 2 — A survey about screens and communication', ar: 'اسْتِطْلَاعٌ عَنِ الشَّاشَاتِ', you: 'a student taking part in the survey', them: 'the student researcher',
      tasks: [
        { ex: 'كَمْ سَاعَةً تَقْضِي أَمَامَ الشَّاشَةِ كُلَّ يَوْمٍ؟', task: 'Say how long and when (sequence).', model: 'أَقْضِي سَاعَتَيْنِ تَقْرِيبًا، غَالِبًا بَعْدَ أَنْ أَنْتَهِيَ مِنَ الوَاجِبَاتِ.', modelEn: 'About two hours, usually after I finish my homework.' },
        { ex: 'مَا التَّطْبِيقُ الَّذِي تَسْتَعْمِلُهُ أَكْثَرَ؟ وَلِمَاذَا؟', task: 'Name an app and give a reason.', model: 'أَسْتَعْمِلُ تَطْبِيقَ الرَّسَائِلِ أَكْثَرَ، لِأَنِّي أَتَوَاصَلُ مَعَ عَائِلَتِي فِي الخَارِجِ.', modelEn: 'I use the messaging app most, because I keep in touch with my family abroad.' },
        { ex: 'هَلْ تَسْتَعْمِلُ الهَاتِفَ عِنْدَمَا تَأْكُلُ؟', task: 'Answer with a frequency word + a rule at home.', model: 'لَا، أَبَدًا، لِأَنَّ أَبِي يَقُولُ: لَا هَوَاتِفَ عَلَى المَائِدَةِ!', modelEn: 'No, never — my dad says: no phones at the table!' },
        { ex: 'كَثِيرٌ مِنَ الطُّلَّابِ يَسْهَرُونَ مَعَ هَوَاتِفِهِمْ.', task: 'ASK the researcher a question about the survey.', model: 'وَمَتَى سَتَنْشُرُونَ نَتَائِجَ الاسْتِطْلَاعِ؟', modelEn: 'And when will you publish the survey results?' },
        { unexpected: true, ex: 'كَيْفَ كَانَ النَّاسُ يَتَوَاصَلُونَ قَبْلَ الهَوَاتِفِ؟', task: 'Answer the unexpected question (the past + opinion).', model: 'كَانُوا يَكْتُبُونَ الرَّسَائِلَ بِاليَدِ، وَفِي رَأْيِي كَانَتْ أَجْمَلَ، لٰكِنَّهَا كَانَتْ بَطِيئَةً جِدًّا.', modelEn: 'They wrote letters by hand — in my opinion they were nicer, but very slow.' },
      ],
      girl: 'تَقْضِينَ · تَسْتَعْمِلِينَهُ · تَسْتَعْمِلِينَ · تَأْكُلِينَ',
      notes: 'Language: baʿda an anṭahiya · relative alladhī · ʿindamā · abadan · the CANDIDATE asks with sa- · kānū yaktubūna (used to).',
    },
  ],
  convAr: 'التَّوَاصُلُ فِي حَيَاتِي',
  conv: [
    { route: 'Core', q: 'كَمْ مَرَّةً تُرْسِلُ رِسَالَةً فِي اليَوْمِ؟', en: 'How many messages do you send a day?', push: 'لِمَنْ؟' },
    { route: 'Core', q: 'هَلْ تَتَّصِلُ بِجَدِّكَ وَجَدَّتِكَ؟', en: 'Do you call your grandparents?', push: 'مَتَى؟' },
    { route: 'Develop', q: 'مَاذَا تَفْعَلُ بَعْدَ أَنْ تَسْتَيْقِظَ؟', en: 'What do you do after you wake up?', push: 'ثُمَّ مَاذَا؟' },
    { route: 'Develop', q: 'مَتَى اسْتَعْمَلْتَ هَاتِفَكَ آخِرَ مَرَّةٍ؟', en: 'When did you last use your phone?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'هَلِ الرَّسَائِلُ أَفْضَلُ مِنَ المُكَالَمَاتِ؟', en: 'Are messages better than calls?', push: 'وَلٰكِنْ …؟' },
    { route: 'Stretch', q: 'كَيْفَ سَيَتَوَاصَلُ النَّاسُ فِي المُسْتَقْبَلِ؟', en: 'How will people communicate in the future?', push: 'هَلْ هٰذَا جَيِّدٌ؟' },
  ],
  convModels: [
    { q: 'هَلْ تَتَّصِلُ بِجَدِّكَ وَجَدَّتِكَ؟', model: 'نَعَمْ، أَتَّصِلُ بِهِمَا كُلَّ يَوْمِ جُمُعَةٍ، لِأَنَّهُمَا يَعِيشَانِ فِي المَغْرِبِ؛ عَادَةً نَتَكَلَّمُ نِصْفَ سَاعَةٍ، وَفِي العُطْلَةِ سَأَزُورُهُمَا.', modelEn: 'A: yes, every Friday · R: they live in Morocco · E: we usually talk for half an hour · T: in the holiday I will visit them.' },
    { q: 'مَاذَا تَفْعَلُ بَعْدَ أَنْ تَسْتَيْقِظَ؟', model: 'بَعْدَ أَنْ أَسْتَيْقِظَ أُصَلِّي، ثُمَّ أَتَنَاوَلُ الفُطُورَ، وَلَا أَنْظُرُ إِلَى هَاتِفِي أَبَدًا قَبْلَ أَنْ أَلْبَسَ؛ أَمْسِ نَسِيتُ ذٰلِكَ فَتَأَخَّرْتُ!', modelEn: 'A: I pray, then have breakfast · R/E: I never look at my phone before I get dressed · T: yesterday I forgot and was late!' },
    { q: 'هَلِ الرَّسَائِلُ أَفْضَلُ مِنَ المُكَالَمَاتِ؟', model: 'فِي رَأْيِي الرَّسَائِلُ أَسْرَعُ، لِأَنِّي أَكْتُبُهَا فِي أَيِّ وَقْتٍ، لٰكِنَّ المُكَالَمَاتِ أَقْرَبُ إِلَى القَلْبِ؛ عِنْدَمَا كُنْتُ مَرِيضًا اتَّصَلَ بِي صَدِيقِي، فَشَعَرْتُ بِالسَّعَادَةِ.', modelEn: 'Opinion: messages are quicker · R: I write them any time · contrast: calls are closer to the heart · E/T: when I was ill my friend called and I felt happy.' },
  ],
  talk: {
    title: 'One minute: how I keep in touch', ar: 'كَيْفَ أَتَوَاصَلُ',
    text: 'Talk for one minute about how you keep in touch with family and friends: who, how, how often, when — and a time a message or a call made you happy.',
    routes: {
      core: '30 seconds: three people, three frequency words (دَائِمًا · أَحْيَانًا · نَادِرًا).',
      develop: '60 seconds: add قَبْلَ أَنْ / بَعْدَ أَنْ and one past example.',
      stretch: '90 seconds: compare messages and calls, give an opinion, and say how it will change.',
    },
    phrases: [['أَتَوَاصَلُ مَعَ … بِـالهَاتِفِ', 'I keep in touch with … by phone'], ['غَالِبًا · أَحْيَانًا · نَادِرًا', 'often · sometimes · rarely'], ['عِنْدَمَا …', 'when …'], ['آخِرَ مَرَّةٍ …', 'the last time …']],
  },
  checkCore: 'used frequency words (دَائِمًا · غَالِبًا · أَحْيَانًا · نَادِرًا · أَبَدًا)',
  checkDevelop: 'used قَبْلَ أَنْ / بَعْدَ أَنْ + a verb in -a, or عِنْدَمَا',
};
speak.talk.phrases[0] = ['أَتَوَاصَلُ مَعَ … بِالهَاتِفِ', 'I keep in touch with … by phone'];

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (a message to a new pen-friend), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Pen-friend club: registration', ar: 'نَادِي المُرَاسَلَةِ: التَّسْجِيلُ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'البَلَدُ', en: 'Country', tip: 'بِرِيطَانِيَا' },
      { core: true, ar: 'اللُّغَاتُ', en: 'Languages', tip: 'الإِنْجِلِيزِيَّةُ وَالعَرَبِيَّةُ' },
      { core: true, ar: 'كَيْفَ تُفَضِّلُ أَنْ تَتَوَاصَلَ؟', en: 'How you prefer to keep in touch', tip: 'بِالبَرِيدِ الإِلِكْتْرُونِيِّ' },
      { core: true, ar: 'كَمْ مَرَّةً تَكْتُبُ؟', en: 'How often you will write', tip: 'مَرَّةً فِي الأُسْبُوعِ' },
      { ar: 'جُمْلَةٌ: مَا هِوَايَتُكَ؟', en: 'ONE sentence: your hobby', tip: 'أُحِبُّ … لِأَنَّ …' },
    ],
  },
  Q2: {
    title: 'Question 2: a first message to a pen-friend', ar: 'رِسَالَةٌ أُولَى إِلَى صَدِيقٍ بِالمُرَاسَلَةِ',
    task: 'You have a new Arabic-speaking pen-friend. Write an email in Arabic of about 80–90 words. You must include: • how you keep in touch with your family and how often • what you do after school, in order • a message or call that made you happy recently • how often you will write to your pen-friend, and a question.',
    phrases: [['أَتَوَاصَلُ مَعَ … مَرَّةً فِي …', 'I keep in touch with … once a …'], ['بَعْدَ أَنْ أَصِلَ إِلَى البَيْتِ …', 'after I get home …'], ['فِي الأُسْبُوعِ المَاضِي اتَّصَلَ بِي …', 'last week … called me'], ['سَأَكْتُبُ لَكَ …', 'I will write to you …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً أُولَى إِلَى صَدِيقِكَ الجَدِيدِ بِالمُرَاسَلَةِ (٨٠–٩٠ كَلِمَةً).', 'Write a first message to your new pen-friend (80–90 words).'],
      ['1', 'كَيْفَ تَتَوَاصَلُ مَعَ عَائِلَتِكَ؟ وَكَمْ مَرَّةً؟', 'How and how often you keep in touch with family'],
      ['2', 'مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ؟', 'What you do after school, in order'],
      ['3', 'صِفْ رِسَالَةً أَوْ مُكَالَمَةً جَعَلَتْكَ سَعِيدًا.', 'A message or call that made you happy'],
      ['4', 'كَمْ مَرَّةً سَتَكْتُبُ إِلَيْهِ؟ وَاسْأَلْهُ سُؤَالًا.', 'How often you will write; a question'],
    ],
    decode: ['a first message to a pen-friend → greeting, introduce yourself, closing', 'كَيْفَ · كَمْ مَرَّةً → PRESENT + a frequency word', 'مَاذَا تَفْعَلُ → PRESENT, in order (ثُمَّ · بَعْدَ أَنْ)', 'صِفْ … جَعَلَتْكَ → PAST + a feeling', 'سَتَكْتُبُ → FUTURE + a question (هَلْ …؟)'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، اسْمِي ______ .', en: 'Hello …, my name is …' },
      { ar: 'أَتَوَاصَلُ مَعَ ______ بِـالهَاتِفِ ______ .', en: '1 · I keep in touch with … by phone …' },
      { ar: 'بَعْدَ المَدْرَسَةِ ______ ، ثُمَّ ______ .', en: '2 · After school I …, then …' },
      { ar: 'فِي الأُسْبُوعِ المَاضِي اتَّصَلَ بِي ______ ، فَشَعَرْتُ ______ .', en: '3 · Last week … called me, and I felt …' },
      { ar: 'سَأَكْتُبُ لَكَ ______ . هَلْ ______ ؟', en: '4 · I will write to you … Do you …?' },
    ],
    developFrames: [
      { ar: 'غَالِبًا ______ ، لٰكِنْ نَادِرًا مَا ______ .', en: '1 · I often …, but I rarely …' },
      { ar: 'بَعْدَ أَنْ أَصِلَ إِلَى البَيْتِ ______ ، وَقَبْلَ أَنْ أَنَامَ ______ .', en: '2 · After I get home …, and before I sleep …' },
      { ar: 'لَنْ أَنْسَى رِسَالَةً مِنْ ______ ، لِأَنَّ ______ .', en: '3 · I won’t forget a message from …, because …' },
      { ar: 'سَأَكْتُبُ إِلَيْكَ كُلَّ ______ ، وَأَتَمَنَّى أَنْ ______ .', en: '4 · I will write to you every …, and I hope …' },
    ],
    bank: ['أَتَوَاصَلُ مَعَ', 'أَتَّصِلُ بِ…', 'أُرْسِلُ رِسَالَةً', 'دَائِمًا · أَحْيَانًا', 'مَرَّةً فِي الأُسْبُوعِ', 'بَعْدَ أَنْ · قَبْلَ أَنْ', 'عِنْدَمَا', 'سَعِيدٌ / سَعِيدَةٌ'],
    model: {
      text: `مَرْحَبًا يَا خَالِدُ،
اسْمِي عُمَرُ، وَأَنَا مِنْ لَنْدَنَ. أَتَوَاصَلُ مَعَ عَائِلَتِي فِي الأُرْدُنِّ بِالفِيدْيُو مَرَّتَيْنِ فِي الأُسْبُوعِ، وَأُرْسِلُ رَسَائِلَ إِلَى جَدِّي كُلَّ يَوْمٍ تَقْرِيبًا. بَعْدَ أَنْ أَصِلَ إِلَى البَيْتِ أَتَنَاوَلُ وَجْبَةً خَفِيفَةً، ثُمَّ أَكْتُبُ وَاجِبَاتِي، وَقَبْلَ أَنْ أَنَامَ أَقْرَأُ قَلِيلًا. فِي الأُسْبُوعِ المَاضِي اتَّصَلَتْ بِي جَدَّتِي فِي عِيدِ مِيلَادِي، وَغَنَّتْ لِي أُغْنِيَةً جَمِيلَةً، فَشَعَرْتُ بِسَعَادَةٍ كَبِيرَةٍ. سَأَكْتُبُ إِلَيْكَ كُلَّ يَوْمِ سَبْتٍ، لِأَنِّي أَكُونُ أَقَلَّ انْشِغَالًا. وَأَنْتَ، كَيْفَ تَتَوَاصَلُ مَعَ أَصْدِقَائِكَ؟ وَمَا هِوَايَتُكَ المُفَضَّلَةُ؟
مَعَ تَحِيَّاتِي،
عُمَرُ`,
      en: '“Hi Khalid, my name is Omar and I am from London. I keep in touch with my family in Jordan by video twice a week, and I send messages to my grandfather almost every day. After I get home I have a snack, then I do my homework, and before I sleep I read a little. Last week my grandmother called me on my birthday and sang me a lovely song, so I felt very happy. I will write to you every Saturday, because I am less busy then. And you, how do you keep in touch with your friends? And what is your favourite hobby? Best wishes, Omar.”',
      find: ['مَرَّتَيْنِ فِي الأُسْبُوعِ', 'بَعْدَ أَنْ أَصِلَ', 'وَقَبْلَ أَنْ أَنَامَ', 'سَأَكْتُبُ إِلَيْكَ'],
    },
  },
  upgrade: [
    { ar: 'أَتَّصِلُ بِجَدِّي.', en: 'I call my grandfather.' },
    { ar: 'أَتَّصِلُ بِجَدِّي دَائِمًا يَوْمَ الجُمُعَةِ بَعْدَ أَنْ أَرْجِعَ مِنَ المَسْجِدِ.', en: '… always on Friday, after I come back from the mosque.' },
    { ar: 'أَتَّصِلُ بِجَدِّي دَائِمًا يَوْمَ الجُمُعَةِ، لِأَنَّهُ يَعِيشُ وَحْدَهُ فِي القَرْيَةِ.', en: '… because he lives alone in the village.' },
    { ar: '… وَفِي رَأْيِي المُكَالَمَةُ تُفْرِحُهُ كَثِيرًا، لٰكِنَّهُ يُفَضِّلُ الزِّيَارَاتِ!', en: '… in my opinion the call makes him very happy — but he prefers visits!' },
  ],
  builder: [
    { en: 'I always read before I go to sleep.', cols: [['دَائِمًا', 'أَبَدًا'], ['أَقْرَأُ', 'قَرَأْتُ'], ['قَبْلَ أَنْ أَنَامَ', 'قَبْلَ أَنْ أَنَامُ']], key: [0, 0, 0], why: 'Always → present; after أَنْ the verb ends in -a: أَنَامَ.' },
    { en: 'When I arrive home, I call my mother.', cols: [['عِنْدَمَا أَصِلُ', 'عِنْدَمَا وَصَلَ'], ['إِلَى البَيْتِ', 'مِنَ البَيْتِ'], ['أَتَّصِلُ بِأُمِّي', 'تَتَّصِلُ بِأُمِّي']], key: [0, 0, 0], why: 'I → أَصِلُ · أَتَّصِلُ; arrive TO = إِلَى.' },
    { en: 'My brother rarely sends messages.', cols: [['أَخِي', 'أُخْتِي'], ['نَادِرًا مَا', 'دَائِمًا'], ['يُرْسِلُ رَسَائِلَ', 'تُرْسِلُ رَسَائِلَ']], key: [0, 0, 0], why: 'He → يُرْسِلُ; rarely = نَادِرًا مَا.' },
  ],
  errors: [
    { wrong: 'بَعْدَ أَنْ أَصِلُ إِلَى البَيْتِ أَتَنَاوَلُ الغَدَاءَ.', hint: 'Look at the verb after أَنْ.', right: 'بَعْدَ أَنْ أَصِلَ إِلَى البَيْتِ أَتَنَاوَلُ الغَدَاءَ.', why: 'After أَنْ the verb ends in -a: أَصِلَ.' },
    { wrong: 'أَتَّصِلُ جَدَّتِي كُلَّ يَوْمٍ.', hint: 'Which little word does this verb need?', right: 'أَتَّصِلُ بِجَدَّتِي كُلَّ يَوْمٍ.', why: 'اتَّصَلَ always takes بِ: أَتَّصِلُ بِجَدَّتِي.' },
    { wrong: 'أَبَدًا أُرْسِلُ رَسَائِلَ فِي اللَّيْلِ.', hint: '“Never” needs a negative.', right: 'لَا أُرْسِلُ رَسَائِلَ فِي اللَّيْلِ أَبَدًا.', why: 'Never = لَا + verb … أَبَدًا.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a call I will never forget', ar: 'مُكَالَمَةٌ لَا أَنْسَاهَا',
    task: 'Full Q3 title: “Communication in my life”. Today write ONLY the past paragraph: a call or message you will never forget — who it was from, when, what was said, why it mattered and how you felt.',
    formula: [
      { ar: 'لَنْ أَنْسَى مُكَالَمَةً مِنْ خَالِي فِي الشِّتَاءِ المَاضِي.', en: 'T · I won’t forget a call from my uncle last winter.' },
      { ar: 'اتَّصَلَ بِي فِي اللَّيْلِ، وَأَخْبَرَنِي بِخَبَرٍ رَائِعٍ.', en: 'D · He called at night and told me great news.' },
      { ar: 'كَانَتْ مُهِمَّةً لِأَنَّهُ دَعَانِي إِلَى زِفَافِهِ.', en: 'R · It mattered because he invited me to his wedding.' },
      { ar: 'شَعَرْتُ بِالفَرَحِ، وَسَأَتَّصِلُ بِهِ أَكْثَرَ.', en: 'F · I felt happy, and I will call him more.' },
    ],
    phrases: [['لَنْ أَنْسَى مُكَالَمَةً مِنْ …', 'I won’t forget a call from …'], ['اتَّصَلَ بِي / اتَّصَلَتْ بِي', 'he / she called me'], ['أَخْبَرَنِي أَنَّ …', 'he told me that …'], ['فِي البِدَايَةِ … ثُمَّ …', 'at first … then …'], ['مُنْذُ ذٰلِكَ اليَوْمِ …', 'since that day …']],
    model: {
      text: 'لَنْ أَنْسَى مُكَالَمَةً مِنْ أَبِي فِي الشِّتَاءِ المَاضِي. كَانَ يَعْمَلُ فِي الخَارِجِ مُنْذُ سِتَّةِ أَشْهُرٍ، وَكُنْتُ أَشْتَاقُ إِلَيْهِ كَثِيرًا. فِي لَيْلَةٍ بَارِدَةٍ رَنَّ الهَاتِفُ، فَقَالَ لِي إِنَّهُ سَيَرْجِعُ إِلَى البَيْتِ قَبْلَ العِيدِ بِأُسْبُوعٍ. فِي البِدَايَةِ لَمْ أُصَدِّقْ، ثُمَّ صَرَخْتُ مِنَ الفَرَحِ، وَرَكَضْتُ إِلَى أُمِّي. كَانَتْ تِلْكَ المُكَالَمَةُ مُهِمَّةً، لِأَنَّهَا أَنْهَتْ شُهُورًا مِنَ الانْتِظَارِ. مُنْذُ ذٰلِكَ اليَوْمِ أَتَّصِلُ بِأَبِي دَائِمًا عِنْدَمَا يُسَافِرُ.',
      en: 'T: I won’t forget a call from my dad last winter · D: he had been working abroad for six months and I missed him; one cold night the phone rang and he said he would come home a week before Eid; at first I didn’t believe it, then I shouted with joy and ran to my mum · R: the call mattered because it ended months of waiting · since then I always call my dad when he travels.',
      find: ['لَنْ أَنْسَى مُكَالَمَةً', 'كُنْتُ أَشْتَاقُ', 'فِي البِدَايَةِ … ثُمَّ', 'مُنْذُ ذٰلِكَ اليَوْمِ'],
    },
  },
};
write.Q2.coreFrames[1] = { ar: 'أَتَوَاصَلُ مَعَ ______ بِالهَاتِفِ ______ .', en: '1 · I keep in touch with … by phone …' };
write.Q2.bank[1] = 'أَتَّصِلُ بِجَدِّي';

module.exports = { speak, write };
