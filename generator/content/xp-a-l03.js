'use strict';
/* Exam-practice data · AT-A-L03 · Frequency, Sequencing and Communication (adverbs; connectors; before / after; عِنْدَمَا). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { n: 3, fileTitle: 'Frequency_Sequencing_and_Communication', title: 'Frequency, Sequencing and Communication', ar: 'التَّكْرَارُ وَالتَّرْتِيبُ وَالتَّوَاصُلُ', icon: 'FaListOl', grammar: 'frequency adverbs, connectors, قَبْلَ / بَعْدَ (أَنْ), عِنْدَمَا' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: say how often you do things, put events in order with before / after / when, and talk about how you keep in touch.',
  words: [
    w(1, 'دَائِمًا', 'always', null, { tag: 'frequency' }),
    w(2, 'غَالِبًا', 'often', null, { tag: 'frequency' }),
    w(3, 'أَحْيَانًا', 'sometimes', null, { tag: 'frequency' }),
    w(4, 'نَادِرًا', 'rarely', null, { tag: 'frequency' }),
    w(5, 'أَبَدًا', 'never (لَا … أَبَدًا)', null, { tag: 'frequency' }),
    w(6, 'مَرَّةً', 'once, one time', [['once', 'مَرَّةً'], ['twice', 'مَرَّتَيْنِ'], ['3 times', 'ثَلَاثَ مَرَّاتٍ']], { tag: 'how often' }),
    w(7, 'أَتَوَاصَلُ', 'I keep in touch', [['he', 'يَتَوَاصَلُ'], ['she', 'تَتَوَاصَلُ'], ['they', 'يَتَوَاصَلُونَ']]),
    w(8, 'أُرْسِلُ', 'I send', [['he', 'يُرْسِلُ'], ['she', 'تُرْسِلُ'], ['they', 'يُرْسِلُونَ']]),
    w(9, 'أَتَّصِلُ بِجَدِّي', 'I call (my grandfather)', [['he', 'يَتَّصِلُ'], ['she', 'تَتَّصِلُ'], ['they', 'يَتَّصِلُونَ']]),
    w(10, 'رِسَالَةٌ', 'a message, a letter', [['sg.', 'رِسَالَةٌ'], ['dual', 'رِسَالَتَانِ'], ['pl.', 'رَسَائِلُ']]),
    w(11, 'قَبْلَ أَنْ · بَعْدَ أَنْ', 'before · after (+ a verb)', null, { tag: 'sequence' }),
    w(12, 'عِنْدَمَا', 'when', null, { tag: 'connector' }),
  ],
  words1: { eyebrow: 'Language bank · how often?', title: 'Always, often, sometimes, never', ar: 'كَمْ مَرَّةً؟', notes: 'LANGUAGE BANK (2 min) — build a frequency ladder from دَائِمًا to لَا … أَبَدًا. Never: لَا أَتَأَخَّرُ أَبَدًا (the verb is negated with لَا). Once / twice / three times: مَرَّةً · مَرَّتَيْنِ · ثَلَاثَ مَرَّاتٍ.' },
  words2: { eyebrow: 'Language bank · keeping in touch (I · he · she · they) and connectors', title: 'Keep in touch — and link your ideas', ar: 'التَّوَاصُلُ وَالرَّبْطُ', notes: 'LANGUAGE BANK (2 min) — communication verbs with four persons. Connectors: قَبْلَ أَنْ / بَعْدَ أَنْ + a verb in -a (قَبْلَ أَنْ أَنَامَ); عِنْدَمَا + an ordinary present or past verb. (The verb اتَّصَلَ takes the preposition bi- joined to the person: أَتَّصِلُ بِجَدَّتِي.)' },
  checkCore: 'used a frequency word in most answers (dā’iman · aḥyānan …)',
  checkDevelop: 'linked ideas with thumma, qabla an, baʿda an or ʿindamā',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a survey at the youth club', title: 'Role play A — The youth-club survey', ar: 'اسْتِبْيَانُ نَادِي الشَّبَابِ', you: 'a member of the youth club', them: 'the club leader doing a survey',
      tasks: [
        { core: true, ex: 'كَمْ مَرَّةً تَأْتِي إِلَى النَّادِي فِي الأُسْبُوعِ؟', task: 'Say how often you come to the club.', help: 'آتِي … فِي الأُسْبُوعِ', model: 'آتِي إِلَى النَّادِي مَرَّتَيْنِ فِي الأُسْبُوعِ.', modelEn: 'I come to the club twice a week.' },
        { core: true, ex: 'مَاذَا تَفْعَلُ هُنَا عَادَةً؟', task: 'Say what you usually do there.', help: 'عَادَةً أَلْعَبُ …', model: 'عَادَةً أَلْعَبُ كُرَةَ الطَّاوِلَةِ مَعَ أَصْدِقَائِي.', modelEn: 'I usually play table tennis with my friends.' },
        { core: true, ex: 'هَلْ تَتَأَخَّرُ أَحْيَانًا؟', task: 'Say if you are ever late.', help: 'لَا، لَا أَتَأَخَّرُ أَبَدًا / نَادِرًا …', model: 'لَا، لَا أَتَأَخَّرُ أَبَدًا، لِأَنِّي أَسْكُنُ قَرِيبًا.', modelEn: 'No, I am never late, because I live nearby.' },
        { core: true, ex: 'كَيْفَ تَتَوَاصَلُ مَعَ أَصْدِقَائِكَ فِي النَّادِي؟', task: 'Say how you keep in touch with club friends.', help: 'أُرْسِلُ رَسَائِلَ …', model: 'أُرْسِلُ رَسَائِلَ عَلَى الهَاتِفِ كُلَّ يَوْمٍ.', modelEn: 'I send messages on my phone every day.' },
        { core: true, unexpected: true, ex: 'مَاذَا تَفْعَلُ بَعْدَ النَّادِي؟', task: 'Answer the unexpected question.', help: 'بَعْدَ النَّادِي أَرْجِعُ …', model: 'بَعْدَ النَّادِي أَرْجِعُ إِلَى البَيْتِ وَأَتَنَاوَلُ العَشَاءَ.', modelEn: 'After the club I go home and have dinner.' },
      ],
      girl: 'تَأْتِينَ · تَفْعَلِينَ · تَتَأَخَّرِينَ · تَتَوَاصَلِينَ · أَصْدِقَائِكِ',
      notes: 'Core: a frequency word in each answer. “Never” = لَا + verb + أَبَدًا.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a phone call with your grandmother', title: 'Role play B — Calling your grandmother', ar: 'مُكَالَمَةٌ مَعَ جَدَّتِي', you: 'a grandchild', them: 'your grandmother',
      tasks: [
        { core: true, ex: 'كَمْ مَرَّةً تَتَّصِلُ بِي فِي الشَّهْرِ؟', task: 'Say how often you call her.', help: 'أَتَّصِلُ بِكِ … فِي الشَّهْرِ', model: 'أَتَّصِلُ بِكِ مَرَّتَيْنِ فِي الشَّهْرِ، يَا جَدَّتِي.', modelEn: 'I call you twice a month, Grandma.' },
        { core: true, ex: 'مَاذَا تَفْعَلُ قَبْلَ أَنْ تَذْهَبَ إِلَى المَدْرَسَةِ؟', task: 'Say one thing you do before school.', help: 'قَبْلَ أَنْ أَذْهَبَ … أَتَنَاوَلُ …', model: 'قَبْلَ أَنْ أَذْهَبَ إِلَى المَدْرَسَةِ، أَتَنَاوَلُ الإِفْطَارَ مَعَ أُمِّي.', modelEn: 'Before I go to school, I have breakfast with my mother.' },
        { ex: 'وَمَاذَا تَفْعَلُ عِنْدَمَا تَرْجِعُ إِلَى البَيْتِ؟', task: 'Say what you do when you get home (two things in order).', help: 'عِنْدَمَا أَرْجِعُ … ثُمَّ …', model: 'عِنْدَمَا أَرْجِعُ إِلَى البَيْتِ، أَرْتَاحُ قَلِيلًا، ثُمَّ أُنْهِي وَاجِبَاتِي.', modelEn: 'When I get home, I rest a little, then I finish my homework.' },
        { ex: '… أُشَاهِدُ التِّلْفَازَ وَأَقْرَأُ القُرْآنَ.', task: 'ASK what she usually does in the evening (she then answers).', help: 'مَاذَا تَفْعَلِينَ …؟', model: 'وَأَنْتِ يَا جَدَّتِي، مَاذَا تَفْعَلِينَ فِي المَسَاءِ عَادَةً؟', modelEn: 'And you, Grandma, what do you usually do in the evening?' },
        { unexpected: true, ex: 'مَتَى سَتَزُورُنِي؟', task: 'Answer the unexpected question (future).', help: 'سَأَزُورُكِ …', model: 'سَأَزُورُكِ يَوْمَ السَّبْتِ القَادِمِ بَعْدَ الظُّهْرِ، إِنْ شَاءَ اللّٰهُ.', modelEn: 'I will visit you next Saturday afternoon, God willing.' },
      ],
      girl: 'تَتَّصِلِينَ بِي · تَفْعَلِينَ · تَذْهَبِي · تَرْجِعِينَ · سَتَزُورِينَنِي',
      notes: 'The grandmother is female, so the candidate uses the feminine “you”: بِكِ · تَفْعَلِينَ · سَأَزُورُكِ. قَبْلَ أَنْ + subjunctive (أَذْهَبَ).',
    },
    {
      id: 'C', level: 'Develop', setting: 'with a new classmate', title: 'Role play C — A new classmate', ar: 'زَمِيلٌ جَدِيدٌ فِي الصَّفِّ', you: 'a student helping a new classmate', them: 'the new classmate',
      tasks: [
        { ex: 'مَاذَا يَحْدُثُ فِي الصَّبَاحِ عِنْدَمَا نَصِلُ؟', task: 'Explain the morning routine in order.', help: 'أَوَّلًا … ثُمَّ … بَعْدَ ذٰلِكَ …', model: 'أَوَّلًا نَذْهَبُ إِلَى التَّسْجِيلِ، ثُمَّ تَبْدَأُ الحِصَّةُ الأُولَى، وَبَعْدَ ذٰلِكَ نَأْخُذُ اسْتِرَاحَةً قَصِيرَةً.', modelEn: 'First we go to registration, then the first lesson starts, and after that we have a short break.' },
        { ex: 'كَمْ مَرَّةً عِنْدَنَا وَاجِبٌ فِي العَرَبِيَّةِ؟', task: 'Say how often there is Arabic homework.', help: 'عِنْدَنَا وَاجِبٌ … مَرَّاتٍ', model: 'عِنْدَنَا وَاجِبٌ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ عَادَةً، وَأَحْيَانًا امْتِحَانٌ قَصِيرٌ.', modelEn: 'We usually have homework three times a week, and sometimes a short test.' },
        { ex: 'كَيْفَ تَتَوَاصَلُ مَعَ المُعَلِّمِ إِذَا كَانَ عِنْدَكَ سُؤَالٌ؟', task: 'Explain how you contact the teacher.', help: 'أُرْسِلُ رِسَالَةً … أَوْ …', model: 'أُرْسِلُ لَهُ رِسَالَةً عَلَى المَنَصَّةِ، أَوْ أَسْأَلُهُ بَعْدَ الحِصَّةِ.', modelEn: 'I send him a message on the platform, or I ask him after the lesson.' },
        { ex: '… فِي السَّاعَةِ الوَاحِدَةِ إِلَّا رُبْعًا.', task: 'ASK what time lunch is (the examiner then answers).', help: 'فِي أَيِّ سَاعَةٍ …؟', model: 'فِي أَيِّ سَاعَةٍ نَتَنَاوَلُ الغَدَاءَ؟', modelEn: 'What time do we have lunch?' },
        { unexpected: true, ex: 'مَاذَا تَفْعَلُ دَائِمًا قَبْلَ الامْتِحَانِ؟', task: 'Answer the unexpected question, with a reason.', help: 'قَبْلَ الامْتِحَانِ دَائِمًا … لِأَنَّ …', model: 'قَبْلَ الامْتِحَانِ دَائِمًا أُرَاجِعُ مُلَاحَظَاتِي وَأَنَامُ مُبَكِّرًا، لِأَنَّ النَّوْمَ يُسَاعِدُنِي عَلَى التَّرْكِيزِ.', modelEn: 'Before an exam I always revise my notes and sleep early, because sleep helps me concentrate.' },
      ],
      girl: 'تَتَوَاصَلِينَ · عِنْدَكِ · تَفْعَلِينَ (if the classmate is a girl)',
      notes: 'Develop: sequence words, frequency + a reason. “Quarter to one” = الوَاحِدَةُ إِلَّا رُبْعًا.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'an interview for a school-magazine article', title: 'Role play D — Screens and communication', ar: 'الشَّاشَاتُ وَالتَّوَاصُلُ', you: 'a student being interviewed', them: 'a school-magazine reporter',
      tasks: [
        { ex: 'كَمْ سَاعَةً تَسْتَعْمِلُ الهَاتِفَ يَوْمِيًّا؟ وَفِي أَيِّ أَوْقَاتٍ؟', task: 'Give a time and when you use it, with a connector.', help: 'عِنْدَمَا أَرْجِعُ … أَمَّا …', model: 'أَسْتَعْمِلُهُ سَاعَتَيْنِ تَقْرِيبًا؛ عِنْدَمَا أَرْجِعُ مِنَ المَدْرَسَةِ أُرْسِلُ رَسَائِلَ لِأَصْدِقَائِي، أَمَّا فِي اللَّيْلِ فَأُطْفِئُهُ.', modelEn: 'About two hours; when I get back from school I message my friends, but at night I switch it off.' },
        { ex: 'كَيْفَ كُنْتَ تَتَوَاصَلُ مَعَ أَقَارِبِكَ عِنْدَمَا كُنْتَ صَغِيرًا؟', task: 'Describe a past habit.', help: 'كُنْتُ أَتَّصِلُ …', model: 'عِنْدَمَا كُنْتُ صَغِيرًا، كُنْتُ أَتَّصِلُ بِجَدِّي بِالهَاتِفِ الأَرْضِيِّ مَرَّةً فِي الأُسْبُوعِ فَقَطْ.', modelEn: 'When I was little, I used to call my grandfather on the landline only once a week.' },
        { ex: 'هَلْ الرَّسَائِلُ أَفْضَلُ مِنَ المُكَالَمَاتِ فِي رَأْيِكَ؟', task: 'Give an opinion with a reason and a contrast.', help: 'فِي رَأْيِي … لٰكِنَّ …', model: 'فِي رَأْيِي الرَّسَائِلُ أَسْرَعُ، لٰكِنَّ المُكَالَمَاتِ أَدْفَأُ، لِأَنَّنَا نَسْمَعُ الصَّوْتَ وَنَفْهَمُ المَشَاعِرَ.', modelEn: 'In my opinion messages are quicker, but calls are warmer, because we hear the voice and understand the feelings.' },
        { ex: 'مَاذَا فَعَلْتَ أَمْسِ قَبْلَ أَنْ تَنَامَ؟', task: 'Say what you did yesterday before sleeping (past + qabla an).', help: 'قَبْلَ أَنْ أَنَامَ …', model: 'أَمْسِ، قَبْلَ أَنْ أَنَامَ، قَرَأْتُ كِتَابًا نِصْفَ سَاعَةٍ، وَلَمْ أَسْتَعْمِلِ الهَاتِفَ أَبَدًا.', modelEn: 'Yesterday, before I slept, I read a book for half an hour and did not use my phone at all.' },
        { unexpected: true, ex: 'مَا نَصِيحَتُكَ لِطَالِبٍ يَسْتَعْمِلُ الهَاتِفَ كَثِيرًا؟', task: 'Answer the unexpected question with advice.', help: 'أَنْصَحُهُ بِأَنْ …', model: 'أَنْصَحُهُ بِأَنْ يُطْفِئَ الهَاتِفَ سَاعَةً قَبْلَ النَّوْمِ، وَأَنْ يَتَّصِلَ بِأَصْدِقَائِهِ بَدَلًا مِنَ الرَّسَائِلِ الكَثِيرَةِ.', modelEn: 'I advise him to switch off his phone an hour before bed, and to call his friends instead of sending lots of messages.' },
      ],
      girl: 'تَسْتَعْمِلِينَ · كُنْتِ تَتَوَاصَلِينَ · رَأْيِكِ · فَعَلْتِ · تَنَامِي · نَصِيحَتُكِ',
      notes: 'Stretch: ʿindamā, ammā … fa-, past habit (kuntu + present), comparatives (أَسْرَعُ · أَدْفَأُ), لَمْ + jussive, and advice with أَنْ + subjunctive.',
      modelFoot: 'Stretch: connectors, a past habit, comparatives, a negative past (lam) and advice with an + verb in -a.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'كَمْ مَرَّةً؟', aim: 'one full sentence per question, with a frequency word',
      qs: [
        { q: 'كَمْ مَرَّةً تُمَارِسُ الرِّيَاضَةَ؟', en: 'How often do you do sport?', start: 'أُمَارِسُ الرِّيَاضَةَ …', model: 'أُمَارِسُ الرِّيَاضَةَ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ.', modelEn: 'I do sport three times a week.' },
        { q: 'هَلْ تَقْرَأُ الكُتُبَ؟', en: 'Do you read books?', start: 'نَعَمْ، أَقْرَأُ … أَحْيَانًا', model: 'نَعَمْ، أَقْرَأُ الكُتُبَ أَحْيَانًا فِي المَسَاءِ.', modelEn: 'Yes, I sometimes read books in the evening.' },
        { q: 'كَيْفَ تَتَوَاصَلُ مَعَ أَصْدِقَائِكَ؟', en: 'How do you keep in touch with friends?', start: 'أُرْسِلُ … / أَتَّصِلُ …', model: 'أُرْسِلُ رَسَائِلَ لِأَصْدِقَائِي كُلَّ يَوْمٍ.', modelEn: 'I send messages to my friends every day.' },
        { q: 'مَاذَا تَفْعَلُ قَبْلَ النَّوْمِ؟', en: 'What do you do before sleeping?', start: 'قَبْلَ النَّوْمِ …', model: 'قَبْلَ النَّوْمِ أُنَظِّفُ أَسْنَانِي وَأَقْرَأُ قَلِيلًا.', modelEn: 'Before sleeping I brush my teeth and read a little.' },
        { q: 'هَلْ تَتَأَخَّرُ عَنِ المَدْرَسَةِ؟', en: 'Are you ever late for school?', start: 'لَا، … أَبَدًا / نَادِرًا', model: 'نَادِرًا مَا أَتَأَخَّرُ عَنِ المَدْرَسَةِ.', modelEn: 'I am rarely late for school.' },
      ],
      foot: 'Core: one full sentence for every question — and a frequency word in each.',
      modelFoot: 'Full sentence + a frequency word = a secure Core answer. Note: nādiran mā + verb = rarely.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'التَّرْتِيبُ وَالتَّوَاصُلُ', aim: 'two or three sentences, with connectors and a reason',
      qs: [
        { q: 'صِفْ مَاذَا تَفْعَلُ بَعْدَ المَدْرَسَةِ بِالتَّرْتِيبِ.', en: 'Describe what you do after school, in order.', start: 'عِنْدَمَا أَرْجِعُ … ثُمَّ …', model: 'عِنْدَمَا أَرْجِعُ مِنَ المَدْرَسَةِ أَتَنَاوَلُ الغَدَاءَ، ثُمَّ أُنْهِي وَاجِبَاتِي، وَبَعْدَ ذٰلِكَ أَلْعَبُ مَعَ أَخِي.', modelEn: 'When I get back from school I have lunch, then I finish my homework, and after that I play with my brother.' },
        { q: 'كَمْ مَرَّةً تَتَّصِلُ بِأَقَارِبِكَ؟ لِمَاذَا؟', en: 'How often do you call relatives? Why?', start: 'أَتَّصِلُ بِـ… لِأَنَّ …', model: 'أَتَّصِلُ بِخَالَتِي مَرَّةً فِي الأُسْبُوعِ، لِأَنَّهَا تَسْكُنُ فِي بَاكِسْتَانَ وَنَشْتَاقُ إِلَيْهَا.', modelEn: 'I call my aunt once a week, because she lives in Pakistan and we miss her.' },
        { q: 'مَاذَا تَفْعَلُ عَادَةً قَبْلَ أَنْ تَذْهَبَ إِلَى المَدْرَسَةِ؟', en: 'What do you usually do before going to school?', start: 'قَبْلَ أَنْ أَذْهَبَ …', model: 'قَبْلَ أَنْ أَذْهَبَ إِلَى المَدْرَسَةِ، أُرَتِّبُ حَقِيبَتِي وَأَتَنَاوَلُ الإِفْطَارَ بِسُرْعَةٍ.', modelEn: 'Before I go to school, I pack my bag and have breakfast quickly.' },
        { q: 'مَا الشَّيْءُ الَّذِي لَا تَفْعَلُهُ أَبَدًا؟', en: 'What is something you never do?', start: 'لَا … أَبَدًا، لِأَنَّ …', model: 'لَا أَشْرَبُ المَشْرُوبَاتِ الغَازِيَّةَ أَبَدًا، لِأَنَّهَا غَيْرُ صِحِّيَّةٍ.', modelEn: 'I never drink fizzy drinks, because they are unhealthy.' },
        { q: 'مَاذَا فَعَلْتَ أَمْسِ بَعْدَ أَنْ رَجَعْتَ إِلَى البَيْتِ؟', en: 'What did you do yesterday after getting home?', start: 'بَعْدَ أَنْ رَجَعْتُ …', model: 'بَعْدَ أَنْ رَجَعْتُ إِلَى البَيْتِ، اتَّصَلْتُ بِصَدِيقِي، ثُمَّ ذَاكَرْنَا مَعًا عَلَى الإِنْتَرْنِتِ.', modelEn: 'After I got home, I called my friend, then we studied together online.' },
      ],
      foot: 'Develop: two or three sentences — ʿindamā · qabla an · baʿda an · thumma — and a reason.',
      modelFoot: 'baʿda an + PAST verb (rajaʿtu); qabla an + verb in -a (adhhaba).',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'التَّوَاصُلُ اليَوْمَ', aim: 'a developed answer: opinion, comparison, reason and more than one time frame',
      qs: [
        { q: 'كَيْفَ تَغَيَّرَ التَّوَاصُلُ بَيْنَ النَّاسِ فِي رَأْيِكَ؟', en: 'How has communication between people changed?', start: 'فِي المَاضِي كَانَ … أَمَّا اليَوْمَ فَـ…', model: 'فِي المَاضِي كَانَ النَّاسُ يَكْتُبُونَ رَسَائِلَ وَرَقِيَّةً، أَمَّا اليَوْمَ فَنَتَوَاصَلُ فَوْرًا بِالهَاتِفِ وَالإِنْتَرْنِتِ.', modelEn: 'In the past people wrote paper letters; today we communicate instantly by phone and internet.' },
        { q: 'هَلْ يَقْضِي الشَّبَابُ وَقْتًا طَوِيلًا عَلَى الشَّاشَاتِ؟', en: 'Do young people spend too long on screens?', start: 'أَعْتَقِدُ أَنَّ … لِأَنَّ …', model: 'أَعْتَقِدُ أَنَّ كَثِيرًا مِنَ الشَّبَابِ يَقْضُونَ وَقْتًا طَوِيلًا عَلَيْهَا، لِأَنَّهُمْ يَدْرُسُونَ وَيَلْعَبُونَ وَيَتَوَاصَلُونَ بِهَا.', modelEn: 'I think many young people spend a long time on them, because they study, play and communicate with them.' },
        { q: 'مَا الَّذِي تَفْعَلُهُ دَائِمًا لِتُنَظِّمَ يَوْمَكَ؟', en: 'What do you always do to organise your day?', start: 'دَائِمًا أَكْتُبُ … قَبْلَ أَنْ …', model: 'دَائِمًا أَكْتُبُ قَائِمَةً بِالمَهَامِّ قَبْلَ أَنْ أَنَامَ، وَعِنْدَمَا أَسْتَيْقِظُ أَبْدَأُ بِأَصْعَبِهَا.', modelEn: 'I always write a to-do list before I sleep, and when I wake up I start with the hardest task.' },
        { q: 'صِفْ مُكَالَمَةً مُهِمَّةً أَجْرَيْتَهَا.', en: 'Describe an important call you made.', start: 'فِي العِيدِ اتَّصَلْتُ بِجَدِّي …', model: 'فِي العِيدِ المَاضِي اتَّصَلْتُ بِجَدِّي فِي مِصْرَ بِالفِيدْيُو، فَرَأَى أُسْرَتَنَا كُلَّهَا وَفَرِحَ كَثِيرًا.', modelEn: 'Last Eid I video-called my grandfather in Egypt; he saw our whole family and was very happy.' },
        { q: 'لَوْ لَمْ يَكُنْ هُنَاكَ هَاتِفٌ، كَيْفَ تَتَوَاصَلُ؟', en: 'If there were no phones, how would you communicate?', start: 'لَوْ لَمْ يَكُنْ … لَـ…', model: 'لَوْ لَمْ يَكُنْ هُنَاكَ هَاتِفٌ، لَكَتَبْتُ رَسَائِلَ لِأَصْدِقَائِي، وَلَزُرْتُهُمْ أَكْثَرَ.', modelEn: 'If there were no phone, I would write letters to my friends and visit them more.' },
      ],
      foot: 'Stretch: past vs present (ammā … fa-), opinion, connectors and a conditional (law lam … la-).',
      modelFoot: 'Stretch: kāna + present for past habits, ammā … fa-, qabla an / ʿindamā, and law lam yakun … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered every role-play task in a full sentence.' },
    { route: 'core', text: 'I used frequency words (dā’iman, aḥyānan, lā … abadan).' },
    { route: 'develop', text: 'I linked ideas with ʿindamā, qabla an or baʿda an.' },
    { route: 'develop', text: 'I asked a question in the role play.' },
    { route: 'stretch', text: 'I compared past and present, with an opinion and a reason.' },
  ],
};
speak.CONV[2].qs[0].start = 'فِي المَاضِي كَانَ … أَمَّا اليَوْمَ فَنَتَوَاصَلُ …';
speak.CONV[2].qs[4].start = 'لَوْ لَمْ يَكُنْ هُنَاكَ هَاتِفٌ، لَكَتَبْتُ …';
speak.CONV[1].qs[1].start = 'أَتَّصِلُ بِخَالَتِي … لِأَنَّ …';
speak.RP[1].tasks[0].help = 'أَتَّصِلُ بِكِ … فِي الشَّهْرِ';

const Q2_CORE = `مَرْحَبًا يَا خَالَتِي،
كَيْفَ حَالُكِ؟ أُرِيدُ أَنْ أُخْبِرَكِ عَنْ أُسْبُوعِي. أَذْهَبُ إِلَى المَدْرَسَةِ كُلَّ يَوْمٍ، وَأَلْعَبُ كُرَةَ القَدَمِ مَرَّتَيْنِ فِي الأُسْبُوعِ. قَبْلَ أَنْ أَنَامَ أَقْرَأُ كِتَابًا. أَتَوَاصَلُ مَعَ أَصْدِقَائِي بِالرَّسَائِلِ كُلَّ يَوْمٍ، وَأَتَّصِلُ بِجَدَّتِي يَوْمَ الجُمُعَةِ. أَمْسِ ذَهَبْتُ إِلَى المَكْتَبَةِ بَعْدَ المَدْرَسَةِ، ثُمَّ رَجَعْتُ إِلَى البَيْتِ. فِي العُطْلَةِ سَأَزُورُكِ مَعَ أُمِّي، إِنْ شَاءَ اللّٰهُ.
مَعَ حُبِّي،
آدَمُ`;
const Q2_FULL = `مَرْحَبًا يَا خَالَتِي،
كَيْفَ حَالُكِ؟ أَشْتَاقُ إِلَيْكِ كَثِيرًا. أُرِيدُ أَنْ أُخْبِرَكِ عَنْ أُسْبُوعِي. أَذْهَبُ إِلَى المَدْرَسَةِ خَمْسَةَ أَيَّامٍ، وَأَلْعَبُ كُرَةَ القَدَمِ مَرَّتَيْنِ فِي الأُسْبُوعِ، وَلَا أَتَأَخَّرُ عَنِ التَّدْرِيبِ أَبَدًا. عِنْدَمَا أَرْجِعُ إِلَى البَيْتِ أُنْهِي وَاجِبَاتِي، وَقَبْلَ أَنْ أَنَامَ أَقْرَأُ قَلِيلًا. وَأَحْيَانًا أَلْعَبُ مَعَ أَخِي فِي الحَدِيقَةِ. أَتَوَاصَلُ مَعَ أَصْدِقَائِي بِالرَّسَائِلِ يَوْمِيًّا، لٰكِنَّنِي أُفَضِّلُ المُكَالَمَاتِ لِأَنَّهَا أَقْرَبُ. أَمْسِ، بَعْدَ أَنْ رَجَعْتُ مِنَ المَدْرَسَةِ، ذَهَبْتُ إِلَى المَكْتَبَةِ مَعَ صَدِيقِي يُوسُفَ وَاسْتَعَرْتُ كِتَابًا جَدِيدًا. فِي العُطْلَةِ القَادِمَةِ سَأَزُورُكِ مَعَ أُمِّي، وَسَنَقْضِي يَوْمًا كَامِلًا مَعًا.
مَعَ حُبِّي،
آدَمُ`;
const Q3A_CORE = `أُسْبُوعِي مُنَظَّمٌ جِدًّا. أَذْهَبُ إِلَى المَدْرَسَةِ مِنَ الإِثْنَيْنِ إِلَى الجُمُعَةِ، وَأَسْتَيْقِظُ دَائِمًا فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ. أَلْعَبُ كُرَةَ السَّلَّةِ مَرَّتَيْنِ فِي الأُسْبُوعِ، يَوْمَ الثُّلَاثَاءِ وَيَوْمَ الخَمِيسِ. أَحْيَانًا أَذْهَبُ إِلَى المَكْتَبَةِ بَعْدَ المَدْرَسَةِ، وَنَادِرًا مَا أُشَاهِدُ التِّلْفَازَ. وَفِي نِهَايَةِ الأُسْبُوعِ أَزُورُ جَدِّي دَائِمًا.
عِنْدَمَا أَرْجِعُ إِلَى البَيْتِ أَتَنَاوَلُ الغَدَاءَ، ثُمَّ أُنْهِي وَاجِبَاتِي. وَفِي المَسَاءِ أَتَنَاوَلُ العَشَاءَ مَعَ أُسْرَتِي. قَبْلَ أَنْ أَنَامَ أُرَتِّبُ حَقِيبَتِي وَأَقْرَأُ كِتَابًا.
أَتَوَاصَلُ مَعَ أَصْدِقَائِي بِالرَّسَائِلِ كُلَّ يَوْمٍ، وَأَتَّصِلُ بِجَدَّتِي مَرَّةً فِي الأُسْبُوعِ. وَأَحْيَانًا نَلْعَبُ مَعًا عَلَى الإِنْتَرْنِتِ. أُحِبُّ المُكَالَمَاتِ لِأَنِّي أَسْمَعُ صَوْتَ جَدَّتِي.
الأُسْبُوعَ المَاضِيَ كَانَ عِنْدِي امْتِحَانٌ فِي العُلُومِ، فَذَاكَرْتُ كُلَّ يَوْمٍ سَاعَةً، وَحَصَلْتُ عَلَى دَرَجَةٍ جَيِّدَةٍ، وَكَانَ المُعَلِّمُ سَعِيدًا جِدًّا.
فِي المُسْتَقْبَلِ سَأَلْعَبُ الرِّيَاضَةَ أَكْثَرَ، وَسَأَسْتَعْمِلُ الهَاتِفَ أَقَلَّ.`;
const Q3A_FULL = `يَمُرُّ أُسْبُوعِي عَادَةً بِنِظَامٍ وَاضِحٍ. أَسْتَيْقِظُ دَائِمًا فِي السَّادِسَةِ وَالنِّصْفِ، وَقَبْلَ أَنْ أَخْرُجَ مِنَ البَيْتِ أُرَتِّبُ حَقِيبَتِي وَأَتَنَاوَلُ الإِفْطَارَ. أَتَدَرَّبُ عَلَى كُرَةِ السَّلَّةِ مَرَّتَيْنِ فِي الأُسْبُوعِ، وَأَزُورُ المَكْتَبَةَ أَحْيَانًا، أَمَّا التِّلْفَازُ فَنَادِرًا مَا أُشَاهِدُهُ. وَفِي نِهَايَةِ الأُسْبُوعِ أَقْضِي وَقْتًا أَطْوَلَ مَعَ أُسْرَتِي.
عِنْدَمَا أَرْجِعُ إِلَى البَيْتِ أَرْتَاحُ قَلِيلًا، ثُمَّ أُنْهِي وَاجِبَاتِي قَبْلَ أَنْ أَتَوَاصَلَ مَعَ أَصْدِقَائِي. أُرْسِلُ لَهُمْ رَسَائِلَ يَوْمِيًّا، لٰكِنَّنِي أَتَّصِلُ بِجَدَّتِي فِي بَاكِسْتَانَ كُلَّ يَوْمِ جُمُعَةٍ، لِأَنَّ صَوْتَهَا يُفْرِحُنِي؛ فَعِنْدَمَا أَسْمَعُهَا أَشْعُرُ أَنَّهَا قَرِيبَةٌ مِنِّي.
فِي رَأْيِي، الرَّسَائِلُ سَرِيعَةٌ وَعَمَلِيَّةٌ، غَيْرَ أَنَّ المُكَالَمَاتِ أَدْفَأُ وَأَقْرَبُ إِلَى القَلْبِ.
الأُسْبُوعَ المَاضِيَ كَانَ مُخْتَلِفًا؛ فَبَعْدَ أَنْ عَرَفْتُ مَوْعِدَ امْتِحَانِ العُلُومِ، أَطْفَأْتُ هَاتِفِي كُلَّ مَسَاءٍ وَذَاكَرْتُ سَاعَتَيْنِ، فَحَصَلْتُ عَلَى دَرَجَةٍ مُمْتَازَةٍ، وَشَعَرْتُ بِالفَخْرِ لِأَنَّ تَعَبِي لَمْ يَضِعْ.
فِي الشَّهْرِ القَادِمِ سَأُخَصِّصُ وَقْتًا ثَابِتًا لِلْقِرَاءَةِ قَبْلَ أَنْ أَنَامَ، وَلَوْ نَجَحْتُ فِي ذٰلِكَ، لَقَرَأْتُ كِتَابًا كُلَّ أُسْبُوعٍ.`;
const Q3B_FULL = `تَغَيَّرَ التَّوَاصُلُ بَيْنَ النَّاسِ كَثِيرًا فِي السَّنَوَاتِ الأَخِيرَةِ. فِي المَاضِي كَانَ جَدِّي يَكْتُبُ رِسَالَةً وَرَقِيَّةً إِلَى أَخِيهِ مَرَّةً فِي الشَّهْرِ، وَيَنْتَظِرُ الرَّدَّ أَسَابِيعَ، فَكَانَتْ كُلُّ رِسَالَةٍ حَدَثًا مُهِمًّا فِي البَيْتِ، أَمَّا اليَوْمَ فَنُرْسِلُ الرَّسَائِلَ وَنَسْتَقْبِلُهَا فِي ثَوَانٍ.
أَنَا أَتَوَاصَلُ مَعَ أَصْدِقَائِي يَوْمِيًّا بِالتَّطْبِيقَاتِ، وَأَتَّصِلُ بِأَقَارِبِي بِالفِيدْيُو فِي المُنَاسَبَاتِ. فِي العِيدِ المَاضِي، مَثَلًا، اتَّصَلْنَا بِعَمِّي فِي كَنَدَا، فَرَأَيْنَا أَطْفَالَهُ وَتَحَدَّثْنَا سَاعَةً كَامِلَةً. وَأَحْيَانًا أَكْتُبُ بِطَاقَاتٍ وَرَقِيَّةً فِي المُنَاسَبَاتِ الكَبِيرَةِ، لِأَنَّ جَدَّتِي تُحِبُّهَا.
صَحِيحٌ أَنَّ التِّكْنُولُوجِيَا قَرَّبَتِ البَعِيدَ، غَيْرَ أَنَّهَا أَبْعَدَتِ القَرِيبَ أَحْيَانًا؛ فَكَثِيرًا مَا نَجْلِسُ مَعًا فِي غُرْفَةٍ وَاحِدَةٍ وَكُلُّ وَاحِدٍ يَنْظُرُ إِلَى هَاتِفِهِ، وَلَا نَتَحَدَّثُ إِلَّا قَلِيلًا.
لِذٰلِكَ قَرَّرْتُ أَنْ أُطْفِئَ هَاتِفِي سَاعَةً كُلَّ مَسَاءٍ، وَأَنْ أَتَحَدَّثَ مَعَ أُسْرَتِي وَأَلْعَبَ مَعَ إِخْوَتِي بَدَلًا مِنْهُ. وَلَوْ فَعَلَ كُلُّ النَّاسِ ذٰلِكَ، لَأَصْبَحَتْ عَلَاقَاتُنَا أَقْوَى وَأَجْمَلَ بِكَثِيرٍ. وَأَنْتُمْ، كَمْ سَاعَةً تَقْضُونَ عَلَى هَوَاتِفِكُمْ؟`;

const write = {
  ...base,
  focus: 'Paper 4 practice: complete a survey form about how often you do things, write an email linking events in order, and write an extended piece with connectors, frequency and three time frames.',
  lift: [
    { ar: 'دَائِمًا · أَحْيَانًا · لَا … أَبَدًا', en: 'always · sometimes · never' },
    { ar: 'قَبْلَ أَنْ أَنَامَ · بَعْدَ أَنْ رَجَعْتُ', en: 'before I sleep · after I came back' },
    { ar: 'عِنْدَمَا · ثُمَّ · أَمَّا … فَإِنَّ', en: 'when · then · as for …' },
  ],
  checkTip: 'Check: qabla an + verb in -a; baʿda an + past verb; “never” = lā + verb + abadan; and the right tense for each bullet.',
  FORM: {
    title: 'Youth-club survey', ar: 'اسْتِبْيَانُ نَادِي الشَّبَابِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Your name', model: 'آدَمُ حُسَيْنٌ', modelEn: 'Adam Hussain' },
      { core: true, ar: 'العُمْرُ', en: 'Your age', model: 'أَرْبَعَ عَشْرَةَ سَنَةً', modelEn: 'fourteen' },
      { core: true, ar: 'كَمْ مَرَّةً تُمَارِسُ الرِّيَاضَةَ؟', en: 'How often you do sport', model: 'ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ', modelEn: 'three times a week' },
      { core: true, ar: 'نَشَاطٌ تَفْعَلُهُ أَحْيَانًا', en: 'Something you sometimes do', model: 'الرَّسْمُ', modelEn: 'drawing' },
      { core: true, ar: 'شَيْءٌ لَا تَفْعَلُهُ أَبَدًا', en: 'Something you never do', model: 'التَّدْخِينُ', modelEn: 'smoking' },
      { core: true, ar: 'كَيْفَ تَتَوَاصَلُ مَعَ أَصْدِقَائِكَ؟', en: 'How you keep in touch with friends', model: 'بِالرَّسَائِلِ عَلَى الهَاتِفِ', modelEn: 'by messages on the phone' },
      { ar: 'مَتَى تَأْتِي إِلَى النَّادِي؟', en: 'When you come to the club', model: 'يَوْمَ الأَرْبِعَاءِ بَعْدَ المَدْرَسَةِ', modelEn: 'on Wednesday after school' },
      { ar: 'جُمْلَةٌ: مَاذَا تَفْعَلُ قَبْلَ أَنْ تَنَامَ؟', en: 'ONE sentence: what you do before sleeping', model: 'قَبْلَ أَنْ أَنَامَ أَقْرَأُ كِتَابًا وَأُطْفِئُ هَاتِفِي.', modelEn: 'Before I sleep I read a book and switch off my phone.' },
    ],
    foot: 'One word or a short phrase for each box — the last box needs a full sentence (qabla an anāma …).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 5 is a noun answer (التَّدْخِينُ / السَّهَرُ) — not a verb.',
  },
  Q2: {
    short: 'an email to a relative about your week', title: 'Question 2: an email to your aunt', ar: 'رِسَالَةٌ إِلَى خَالَتِي',
    task: 'Write an email in Arabic of about 80–90 words to a relative who lives abroad about your week. You must include: • what you do regularly and how often • what you do before or after school (in order) • how you keep in touch with friends and family • what you did yesterday and what you will do in the holidays.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing to a relative.', 'Frequency words and connectors (qabla an, ʿindamā, thumma).', 'Past (yesterday) AND future (the holidays).', 'About 80–90 words.'],
    phrases: [['أَشْتَاقُ إِلَيْكِ كَثِيرًا.', 'I miss you a lot. (to a woman)'], ['مَرَّتَيْنِ فِي الأُسْبُوعِ', 'twice a week'], ['عِنْدَمَا أَرْجِعُ إِلَى البَيْتِ …', 'when I get home …'], ['مَعَ حُبِّي،', 'With love, (closing)']],
    notes: 'Writing to an aunt (feminine): أُخْبِرَكِ · إِلَيْكِ · سَأَزُورُكِ. To an uncle: أُخْبِرَكَ · إِلَيْكَ · سَأَزُورُكَ.',
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلِكْتِرُونِيَّةً إِلَى قَرِيبٍ يَسْكُنُ فِي الخَارِجِ عَنْ أُسْبُوعِكَ (٨٠–٩٠ كَلِمَةً).', 'An email to a relative abroad about your week (80–90 words).'],
      ['1', 'مَاذَا تَفْعَلُ بِانْتِظَامٍ؟ وَكَمْ مَرَّةً؟', 'What you do regularly, and how often'],
      ['2', 'مَاذَا تَفْعَلُ قَبْلَ المَدْرَسَةِ أَوْ بَعْدَهَا؟', 'What you do before or after school'],
      ['3', 'كَيْفَ تَتَوَاصَلُ مَعَ أَصْدِقَائِكَ وَأُسْرَتِكَ؟', 'How you keep in touch'],
      ['4', 'مَاذَا فَعَلْتَ أَمْسِ، وَمَاذَا سَتَفْعَلُ فِي العُطْلَةِ؟', 'Yesterday, and the holidays'],
    ],
    qwords: 'مَاذَا (what) · كَمْ مَرَّةً (how often) · كَيْفَ (how) — and two tenses in bullet 4: فَعَلْتَ (past) · سَتَفْعَلُ (future)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'أَلْعَبُ ______ مَرَّتَيْنِ فِي الأُسْبُوعِ، وَأَحْيَانًا ______ .', 'I play … twice a week, and sometimes …'],
      ['2', 'قَبْلَ أَنْ أَنَامَ ______ . عِنْدَمَا أَرْجِعُ ______ .', 'Before I sleep … When I get home …'],
      ['3', 'أَتَوَاصَلُ مَعَ أَصْدِقَائِي بِـالرَّسَائِلِ ______ .', 'I keep in touch with my friends by messages …'],
      ['4', 'أَمْسِ ______ . فِي العُطْلَةِ سَوْفَ ______ .', 'Yesterday I … In the holiday I will …'],
      ['end', 'مَعَ حُبِّي، ______', 'With love, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Auntie, how are you? I want to tell you about my week. I go to school every day and play football twice a week. Before I sleep I read a book. I keep in touch with my friends by messages every day, and I call my grandmother on Friday. Yesterday I went to the library after school, then I went home. In the holidays I will visit you with my mother, God willing. With love, Adam.”',
      find: ['مَرَّتَيْنِ', 'قَبْلَ أَنْ أَنَامَ', 'أَتَوَاصَلُ', 'سَأَزُورُكِ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Hello Auntie, how are you? I miss you a lot. I want to tell you about my week. I go to school five days, play football twice a week, and I am never late for training. When I get home I finish my homework, and before I sleep I read a little. I keep in touch with my friends by messages every day, but I prefer calls because they feel closer. Yesterday, after I got back from school, I went to the library and borrowed a new book. In the next holiday I will visit you with my mother, and we will spend a whole day together. With love, Adam.”',
      find: ['لَا أَتَأَخَّرُ … أَبَدًا', 'عِنْدَمَا أَرْجِعُ', 'لٰكِنَّنِي أُفَضِّلُ', 'بَعْدَ أَنْ رَجَعْتُ'],
    },
  },
  Q3: {
    a: { title: 'أُسْبُوعِي: مَاذَا أَفْعَلُ وَكَمْ مَرَّةً؟', en: 'My week: what I do and how often', bullets: 'صِفْ نَشَاطَاتِكَ وَكَمْ مَرَّةً تَفْعَلُهَا · صِفْ مَا تَفْعَلُهُ بَعْدَ المَدْرَسَةِ بِالتَّرْتِيبِ · كَيْفَ تَتَوَاصَلُ مَعَ الآخَرِينَ وَمَا رَأْيُكَ؟ · مَاذَا فَعَلْتَ الأُسْبُوعَ المَاضِيَ، وَمَا خُطَطُكَ؟', bulletsEn: 'Activities and how often · after school, in order · how you keep in touch + opinion · last week and your plans' },
    b: { title: 'التَّوَاصُلُ بَيْنَ الأَمْسِ وَاليَوْمِ', en: 'Communication: then and now', bullets: 'كَيْفَ كَانَ النَّاسُ يَتَوَاصَلُونَ فِي المَاضِي؟ · كَيْفَ تَتَوَاصَلُ أَنْتَ اليَوْمَ؟ · مَا إِيجَابِيَّاتُ التِّكْنُولُوجِيَا وَسَلْبِيَّاتُهَا؟ · مَاذَا سَتُغَيِّرُ فِي عَادَاتِكَ؟', bulletsEn: 'How people communicated in the past · how you communicate today · pros and cons of technology · a habit you will change' },
    plan: [
      'Present — your week: frequency (dā’iman, marratayn, aḥyānan) and order (ʿindamā, thumma).',
      'Communication + opinion — fī ra’yī … li-anna …; Stretch: ṣaḥīḥun anna … ghayra anna.',
      'Past — last week / a past habit: kāna … yaktubu (used to write); baʿda an + past.',
      'Future — sa- …; Stretch: law … la- (a conditional).',
    ],
    frames: [
      { ar: 'أَتَّصِلُ بِجَدَّتِي مَرَّةً فِي الأُسْبُوعِ.', en: 'present: I call my grandmother once a week.' },
      { ar: 'فِي المَاضِي كَانَ جَدِّي يَكْتُبُ رَسَائِلَ.', en: 'past habit: my grandfather used to write letters.' },
      { ar: 'سَأُطْفِئُ هَاتِفِي سَاعَةً كُلَّ مَسَاءٍ.', en: 'future: I will switch off my phone for an hour each evening.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Present: an organised week — always up at 6:30, basketball twice a week, sometimes the library, rarely TV → order: when I get home, lunch, then homework; before bed, pack my bag and read → communication: messages every day, I call my grandmother once a week (I like hearing her voice) → past: last week a science test, I revised an hour a day → future: more sport, less phone.', find: ['دَائِمًا', 'مَرَّتَيْنِ', 'عِنْدَمَا أَرْجِعُ', 'قَبْلَ أَنْ أَنَامَ'], notes: 'Core model: simple sentences, frequency words in every paragraph, and three time frames.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Present: an orderly week; before leaving home I pack my bag; training twice a week, the library sometimes; as for TV, I rarely watch it → order: when I get home I rest, then homework before I contact friends; I call my grandmother in Pakistan every Friday → opinion: messages are quick, but calls are warmer → past: last week, after I learnt the test date, I switched my phone off and revised → future: fixed reading time; “if I manage it, I would read a book a week”.', find: ['قَبْلَ أَنْ أَخْرُجَ', 'أَمَّا التِّلْفَازُ فَنَادِرًا', 'غَيْرَ أَنَّ', 'لَوْ … لَقَرَأْتُ'], notes: 'Full-mark model: frequency, ammā … fa-, qabla an + subjunctive, baʿda an + past, a concession and a conditional.' },
      { which: 'ب', level: 'Full', subtitle: 'communication then and now', text: Q3B_FULL, en: 'Then: my grandfather wrote a paper letter to his brother once a month and waited weeks for a reply; as for today, messages arrive in seconds → now: apps every day, video calls on occasions (last Eid, a whole hour with my uncle in Canada) → opinion: technology brought the distant near, but sometimes pushed the near away → future: phone off for an hour each evening; “if everyone did that, our relationships would be stronger”.', find: ['كَانَ جَدِّي يَكْتُبُ', 'أَمَّا اليَوْمَ فَنُرْسِلُ', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّهَا', 'لَوْ … لَأَصْبَحَتْ'], notes: 'Full-mark model for the Stretch title: a past habit (kāna + present), contrast, an example, a concession, a decision with an + subjunctive and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; the last box as a full sentence.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: frequency words and connectors (qabla an · ʿindamā · thumma).' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: a past habit (kāna + verb), a concession or a conditional.' },
  ],
};
write.Q2.frames[3][1] = 'أَتَوَاصَلُ مَعَ أَصْدِقَائِي بِالرَّسَائِلِ ______ .';

module.exports = { speak, write };
