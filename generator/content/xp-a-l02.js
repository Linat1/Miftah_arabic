'use strict';
/* Exam-practice data · AT-A-L02 · Calendar, Dates and the School Week (ordinal numbers; clock expressions; prepositions of time). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { n: 2, short: 'Calendar and the School Week', arShort: 'التَّقْوِيمُ وَالأُسْبُوعُ الدِّرَاسِيُّ', fileTitle: 'Calendar_Dates_and_the_School_Week', title: 'Calendar, Dates and the School Week', ar: 'التَّقْوِيمُ وَالتَّوَارِيخُ وَالأُسْبُوعُ الدِّرَاسِيُّ', icon: 'FaCalendarDays', grammar: 'ordinal numbers, clock expressions, prepositions of time' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: book, arrange and describe things with days, dates and times — then develop with reasons, past events and plans.',
  words: [
    w(1, 'يَوْمٌ', 'a day', [['sg.', 'يَوْمٌ'], ['dual', 'يَوْمَانِ'], ['pl.', 'أَيَّامٌ']]),
    w(2, 'أُسْبُوعٌ', 'a week', [['sg.', 'أُسْبُوعٌ'], ['dual', 'أُسْبُوعَانِ'], ['pl.', 'أَسَابِيعُ']]),
    w(3, 'شَهْرٌ', 'a month', [['sg.', 'شَهْرٌ'], ['dual', 'شَهْرَانِ'], ['pl.', 'أَشْهُرٌ']]),
    w(4, 'سَاعَةٌ', 'an hour; o’clock', [['sg.', 'سَاعَةٌ'], ['dual', 'سَاعَتَانِ'], ['pl.', 'سَاعَاتٌ']]),
    w(5, 'حِصَّةٌ', 'a lesson (period)', [['sg.', 'حِصَّةٌ'], ['dual', 'حِصَّتَانِ'], ['pl.', 'حِصَصٌ']]),
    w(6, 'عُطْلَةٌ', 'a holiday', [['sg.', 'عُطْلَةٌ'], ['dual', 'عُطْلَتَانِ'], ['pl.', 'عُطَلٌ']]),
    w(7, 'الأَوَّلُ', 'the first', [['m.', 'الأَوَّلُ'], ['f.', 'الأُولَى']]),
    w(8, 'الثَّانِي', 'the second', [['m.', 'الثَّانِي'], ['f.', 'الثَّانِيَةُ']]),
    w(9, 'الثَّالِثُ', 'the third', [['m.', 'الثَّالِثُ'], ['f.', 'الثَّالِثَةُ']]),
    w(10, 'تَارِيخٌ', 'a date', [['sg.', 'تَارِيخٌ'], ['pl.', 'تَوَارِيخُ']]),
    w(11, 'مَوْعِدٌ', 'an appointment', [['sg.', 'مَوْعِدٌ'], ['pl.', 'مَوَاعِيدُ']]),
    w(12, 'صَبَاحًا · مَسَاءً', 'in the morning · in the evening', null, { tag: 'time' }),
  ],
  words1: { eyebrow: 'Language bank · time words (sg. · dual · pl.)', title: 'Days, weeks, months, lessons', ar: 'كَلِمَاتُ الوَقْتِ', notes: 'LANGUAGE BANK (2 min) — singular, dual and plural: the dual is common with time (سَاعَتَانِ · أُسْبُوعَانِ). Chant sg → dual → pl for each word.' },
  words2: { eyebrow: 'Language bank · ordinals and dates (m. · f.)', title: 'First, second, third — and dates', ar: 'الأَعْدَادُ التَّرْتِيبِيَّةُ', notes: 'LANGUAGE BANK (2 min) — ordinals agree with the noun: اليَوْمُ الأَوَّلُ / الحِصَّةُ الأُولَى. Dates: فِي الخَامِسِ مِنْ مَايُو (on the fifth of May). Clock times use the feminine ordinal: السَّاعَةُ الثَّالِثَةُ.' },
  checkCore: 'gave days, dates and times correctly (fī as-sāʿa …, yawma …)',
  checkDevelop: 'added a reason, a sequence word or a second time detail',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'at the sports centre', title: 'Role play A — Booking a lesson', ar: 'فِي المَرْكَزِ الرِّيَاضِيِّ', you: 'a student booking a tennis lesson', them: 'the receptionist',
      tasks: [
        { core: true, ex: 'صَبَاحَ الخَيْرِ! مَا اسْمُكَ؟', task: 'Say your full name.', help: 'اسْمِي …', model: 'اسْمِي يُوسُفُ عَلِيٌّ.', modelEn: 'My name is Yusuf Ali.' },
        { core: true, ex: 'أَيَّ يَوْمٍ تُرِيدُ الدَّرْسَ؟', task: 'Say which day you want the lesson.', help: 'أُرِيدُ الدَّرْسَ يَوْمَ …', model: 'أُرِيدُ الدَّرْسَ يَوْمَ السَّبْتِ، مِنْ فَضْلِكَ.', modelEn: 'I would like the lesson on Saturday, please.' },
        { core: true, ex: 'فِي أَيِّ سَاعَةٍ؟', task: 'Say what time.', help: 'فِي السَّاعَةِ … صَبَاحًا', model: 'فِي السَّاعَةِ العَاشِرَةِ صَبَاحًا.', modelEn: 'At ten o’clock in the morning.' },
        { core: true, ex: 'مَا تَارِيخُ مِيلَادِكَ؟', task: 'Give your date of birth.', help: 'تَارِيخُ مِيلَادِي … مِنْ …', model: 'تَارِيخُ مِيلَادِي هُوَ الخَامِسُ مِنْ مَايُو.', modelEn: 'My date of birth is the fifth of May.' },
        { core: true, unexpected: true, ex: 'هَلْ يُنَاسِبُكَ الأُسْبُوعُ القَادِمُ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، يُنَاسِبُنِي …', model: 'نَعَمْ، يُنَاسِبُنِي الأُسْبُوعُ القَادِمُ، شُكْرًا.', modelEn: 'Yes, next week suits me, thank you.' },
      ],
      girl: 'تُرِيدِينَ · يُنَاسِبُكِ · مِيلَادِكِ',
      notes: 'Core: one full sentence per task. Day names after يَوْمَ take the genitive: يَوْمَ السَّبْتِ. Clock times use feminine ordinals: العَاشِرَةِ.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a phone call with a friend', title: 'Role play B — Planning a birthday party', ar: 'حَفْلَةُ عِيدِ المِيلَادِ', you: 'a student planning a party', them: 'your friend',
      tasks: [
        { core: true, ex: 'مَتَى عِيدُ مِيلَادِكَ؟', task: 'Say the date of your birthday.', help: 'عِيدُ مِيلَادِي فِي … مِنْ …', model: 'عِيدُ مِيلَادِي فِي العَاشِرِ مِنْ نُوفَمْبَرَ.', modelEn: 'My birthday is on the tenth of November.' },
        { core: true, ex: 'فِي أَيِّ يَوْمٍ الحَفْلَةُ؟', task: 'Say which day the party is.', help: 'الحَفْلَةُ يَوْمَ …', model: 'الحَفْلَةُ يَوْمَ الجُمُعَةِ بَعْدَ المَدْرَسَةِ.', modelEn: 'The party is on Friday after school.' },
        { ex: 'مَتَى تَبْدَأُ، وَمَتَى تَنْتَهِي؟', task: 'Say when it starts and finishes.', help: 'تَبْدَأُ فِي … وَتَنْتَهِي فِي …', model: 'تَبْدَأُ فِي السَّاعَةِ الرَّابِعَةِ، وَتَنْتَهِي فِي السَّابِعَةِ.', modelEn: 'It starts at four and finishes at seven.' },
        { ex: '… نَعَمْ، أَنَا مُتَفَرِّغٌ بَعْدَ العَصْرِ.', task: 'ASK if your friend is free on Friday (the examiner then answers).', help: 'هَلْ أَنْتَ مُتَفَرِّغٌ …؟', model: 'هَلْ أَنْتَ مُتَفَرِّغٌ يَوْمَ الجُمُعَةِ؟', modelEn: 'Are you free on Friday?' },
        { unexpected: true, ex: 'مَاذَا سَنَفْعَلُ فِي الحَفْلَةِ؟', task: 'Answer the unexpected question (future).', help: 'سَنَأْكُلُ … وَنَلْعَبُ …', model: 'سَنَأْكُلُ الكَعْكَةَ، وَنَلْعَبُ أَلْعَابًا مُمْتِعَةً فِي الحَدِيقَةِ.', modelEn: 'We will eat cake and play fun games in the garden.' },
      ],
      girl: 'مِيلَادِكِ · and the candidate asks a girl: هَلْ أَنْتِ مُتَفَرِّغَةٌ؟',
      notes: 'Task 4: the CANDIDATE asks; the examiner replies with the line shown. Dates: فِي + ordinal in the genitive (فِي العَاشِرِ) + مِنْ + month.',
    },
    {
      id: 'C', level: 'Develop', setting: 'talking to a visiting teacher', title: 'Role play C — My school week', ar: 'أُسْبُوعِي الدِّرَاسِيُّ', you: 'a student', them: 'a visiting teacher from Jordan',
      tasks: [
        { ex: 'كَمْ يَوْمًا تَدْرُسُ فِي الأُسْبُوعِ؟', task: 'Say how many days you study, and which days.', help: 'أَدْرُسُ … أَيَّامٍ، مِنْ … إِلَى …', model: 'أَدْرُسُ خَمْسَةَ أَيَّامٍ، مِنَ الإِثْنَيْنِ إِلَى الجُمُعَةِ.', modelEn: 'I study five days, from Monday to Friday.' },
        { ex: 'مَتَى يَبْدَأُ اليَوْمُ الدِّرَاسِيُّ، وَمَتَى يَنْتَهِي؟', task: 'Give start and finish times.', help: 'يَبْدَأُ فِي … وَالرُّبْعِ', model: 'يَبْدَأُ فِي الثَّامِنَةِ وَالرُّبْعِ، وَيَنْتَهِي فِي الثَّالِثَةِ وَالنِّصْفِ.', modelEn: 'It starts at quarter past eight and finishes at half past three.' },
        { ex: 'كَمْ حِصَّةً عِنْدَكَ فِي اليَوْمِ؟', task: 'Say how many lessons, and how long each lasts.', help: 'عِنْدِي … حِصَصٍ، وَكُلُّ حِصَّةٍ …', model: 'عِنْدِي سِتُّ حِصَصٍ، وَكُلُّ حِصَّةٍ خَمْسُونَ دَقِيقَةً.', modelEn: 'I have six lessons, and each lesson is fifty minutes.' },
        { ex: '… تَبْدَأُ فِي أَوَّلِ يُولْيُو.', task: 'ASK when the summer holiday starts in Jordan (the examiner then answers).', help: 'مَتَى تَبْدَأُ العُطْلَةُ …؟', model: 'مَتَى تَبْدَأُ العُطْلَةُ الصَّيْفِيَّةُ عِنْدَكُمْ؟', modelEn: 'When does the summer holiday start for you?' },
        { unexpected: true, ex: 'مَا يَوْمُكَ المُفَضَّلُ فِي الأُسْبُوعِ؟ وَلِمَاذَا؟', task: 'Answer the unexpected question, with a reason.', help: 'يَوْمِي المُفَضَّلُ … لِأَنَّ …', model: 'يَوْمِي المُفَضَّلُ هُوَ الخَمِيسُ، لِأَنَّ عِنْدِي حِصَّتَيْنِ مِنَ الرِّيَاضَةِ.', modelEn: 'My favourite day is Thursday, because I have two PE lessons.' },
      ],
      girl: 'تَدْرُسِينَ · عِنْدَكِ · يَوْمُكِ',
      notes: 'Develop: numbers with nouns — خَمْسَةَ أَيَّامٍ (3–10: opposite gender, plural genitive), خَمْسُونَ دَقِيقَةً (11+: singular accusative), the dual حِصَّتَيْنِ.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'an interview for the school council', title: 'Role play D — Changing the school week?', ar: 'مَجْلِسُ الطُّلَّابِ', you: 'a student representative', them: 'the head of the school council',
      tasks: [
        { ex: 'صِفْ أُسْبُوعَكَ الدِّرَاسِيَّ بِاخْتِصَارٍ.', task: 'Describe your week briefly, with a comparison.', help: 'أَطْوَلُ يَوْمٍ … وَأَقْصَرُهُ …', model: 'أَدْرُسُ مِنَ الإِثْنَيْنِ إِلَى الجُمُعَةِ؛ أَطْوَلُ يَوْمٍ هُوَ الثُّلَاثَاءُ لِأَنَّ عِنْدِي سَبْعَ حِصَصٍ، وَأَقْصَرُهُ الجُمُعَةُ.', modelEn: 'I study Monday to Friday; the longest day is Tuesday because I have seven lessons, and the shortest is Friday.' },
        { ex: 'مَاذَا فَعَلْتَ فِي العُطْلَةِ الأَخِيرَةِ؟', task: 'Say what you did in the last holiday (past, with a date).', help: 'فِي شَهْرِ … سَافَرْتُ …', model: 'فِي العُطْلَةِ الأَخِيرَةِ، فِي شَهْرِ أَبْرِيلَ، سَافَرْتُ إِلَى مِصْرَ، وَزُرْتُ أَقَارِبِي أُسْبُوعَيْنِ.', modelEn: 'In the last holiday, in April, I travelled to Egypt and visited my relatives for two weeks.' },
        { ex: 'هَلْ تُفَضِّلُ أَنْ يَبْدَأَ اليَوْمُ مُبَكِّرًا أَمْ مُتَأَخِّرًا؟ لِمَاذَا؟', task: 'Give a preference and a reason.', help: 'أُفَضِّلُ أَنْ يَبْدَأَ … لِأَنَّ …', model: 'أُفَضِّلُ أَنْ يَبْدَأَ فِي التَّاسِعَةِ، لِأَنَّ الطُّلَّابَ يَكُونُونَ أَكْثَرَ تَرْكِيزًا بَعْدَ النَّوْمِ الكَافِي.', modelEn: 'I prefer it to start at nine, because students concentrate better after enough sleep.' },
        { ex: 'مَا أَهَمُّ تَارِيخٍ فِي سَنَتِكَ؟ وَلِمَاذَا؟', task: 'Name an important date and explain why.', help: 'أَهَمُّ تَارِيخٍ عِنْدِي … لِأَنَّ …', model: 'أَهَمُّ تَارِيخٍ عِنْدِي هُوَ أَوَّلُ يَوْمٍ مِنَ العِيدِ، لِأَنَّ الأُسْرَةَ كُلَّهَا تَجْتَمِعُ.', modelEn: 'My most important date is the first day of Eid, because the whole family gets together.' },
        { unexpected: true, ex: 'كَيْفَ سَتُنَظِّمُ وَقْتَكَ فِي الشَّهْرِ القَادِمِ؟', task: 'Answer the unexpected question (future).', help: 'سَأَكْتُبُ … وَسَأُرَاجِعُ …', model: 'سَأَكْتُبُ مَوَاعِيدَ الامْتِحَانَاتِ فِي تَقْوِيمِي، وَسَأُرَاجِعُ سَاعَةً كُلَّ يَوْمٍ.', modelEn: 'I will write the exam dates in my calendar and revise for an hour every day.' },
      ],
      girl: 'صِفِي · فَعَلْتِ · تُفَضِّلِينَ · سَنَتِكِ · سَتُنَظِّمِينَ',
      notes: 'Stretch: superlatives (أَطْوَلُ يَوْمٍ · أَهَمُّ تَارِيخٍ), the dual (أُسْبُوعَيْنِ), أَنْ + subjunctive (أَنْ يَبْدَأَ) and three time frames. Any important date is welcome (a birthday, a national day, Eid, the first day at a new school).',
      modelFoot: 'Stretch: superlatives, a dual, an + verb in -a, and past, present and future in one role play.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'التَّوَارِيخُ', aim: 'one full sentence per question, with a day, a date or a time',
      qs: [
        { q: 'مَا تَارِيخُ اليَوْمِ؟', en: 'What is the date today?', start: 'اليَوْمُ … مِنْ …', model: 'اليَوْمُ هُوَ الخَامِسُ مِنْ أُكْتُوبَرَ.', modelEn: 'Today is the fifth of October.' },
        { q: 'مَتَى عِيدُ مِيلَادِكَ؟', en: 'When is your birthday?', start: 'عِيدُ مِيلَادِي فِي …', model: 'عِيدُ مِيلَادِي فِي الثَّالِثِ مِنْ مَارِسَ.', modelEn: 'My birthday is on the third of March.' },
        { q: 'كَمْ يَوْمًا تَدْرُسُ فِي الأُسْبُوعِ؟', en: 'How many days do you study a week?', start: 'أَدْرُسُ … أَيَّامٍ', model: 'أَدْرُسُ خَمْسَةَ أَيَّامٍ فِي الأُسْبُوعِ.', modelEn: 'I study five days a week.' },
        { q: 'مَتَى تَبْدَأُ المَدْرَسَةُ؟', en: 'When does school start?', start: 'تَبْدَأُ المَدْرَسَةُ فِي …', model: 'تَبْدَأُ المَدْرَسَةُ فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ.', modelEn: 'School starts at half past eight.' },
        { q: 'مَا شَهْرُكَ المُفَضَّلُ؟', en: 'What is your favourite month?', start: 'شَهْرِي المُفَضَّلُ …', model: 'شَهْرِي المُفَضَّلُ هُوَ أُغُسْطُسُ، لِأَنَّهُ فِي العُطْلَةِ.', modelEn: 'My favourite month is August, because it is in the holidays.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + the right date or time = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'أُسْبُوعِي', aim: 'two or three sentences, with times, sequence words and a reason',
      qs: [
        { q: 'صِفْ يَوْمَ الإِثْنَيْنِ فِي مَدْرَسَتِكَ.', en: 'Describe Monday at your school.', start: 'يَوْمُ الإِثْنَيْنِ … ثُمَّ …', model: 'يَوْمُ الإِثْنَيْنِ طَوِيلٌ؛ تَبْدَأُ الحِصَّةُ الأُولَى فِي الثَّامِنَةِ، ثُمَّ عِنْدِي الرِّيَاضِيَّاتُ وَالعُلُومُ، وَأَرْجِعُ إِلَى البَيْتِ فِي الرَّابِعَةِ.', modelEn: 'Monday is long: the first lesson starts at eight, then I have maths and science, and I get home at four.' },
        { q: 'أَيَّ يَوْمٍ تُحِبُّ أَكْثَرَ؟ لِمَاذَا؟', en: 'Which day do you like most? Why?', start: 'أُحِبُّ يَوْمَ … لِأَنَّ …', model: 'أُحِبُّ يَوْمَ الأَرْبِعَاءِ أَكْثَرَ، لِأَنَّ عِنْدِي حِصَّةَ الفَنِّ وَحِصَّةَ الرِّيَاضَةِ.', modelEn: 'I like Wednesday most, because I have art and PE.' },
        { q: 'مَاذَا تَفْعَلُ فِي نِهَايَةِ الأُسْبُوعِ عَادَةً؟', en: 'What do you usually do at the weekend?', start: 'عَادَةً … يَوْمَ السَّبْتِ …', model: 'عَادَةً أَزُورُ جَدَّتِي يَوْمَ السَّبْتِ، وَأُرَاجِعُ دُرُوسِي يَوْمَ الأَحَدِ.', modelEn: 'I usually visit my grandmother on Saturday and revise on Sunday.' },
        { q: 'مَتَى تَبْدَأُ العُطْلَةُ القَادِمَةُ؟ وَمَاذَا سَتَفْعَلُ؟', en: 'When does the next holiday start? What will you do?', start: 'تَبْدَأُ فِي … وَسَأَزُورُ …', model: 'تَبْدَأُ فِي العِشْرِينَ مِنْ دِيسَمْبَرَ، وَسَأَزُورُ أَقَارِبِي فِي مَانْشِسْتَرَ.', modelEn: 'It starts on the twentieth of December, and I will visit my relatives in Manchester.' },
        { q: 'مَاذَا فَعَلْتَ يَوْمَ السَّبْتِ المَاضِي؟', en: 'What did you do last Saturday?', start: 'يَوْمَ السَّبْتِ المَاضِي …', model: 'يَوْمَ السَّبْتِ المَاضِي ذَهَبْتُ إِلَى المَكْتَبَةِ فِي العَاشِرَةِ، ثُمَّ لَعِبْتُ كُرَةَ القَدَمِ.', modelEn: 'Last Saturday I went to the library at ten, then I played football.' },
      ],
      foot: 'Develop: two or three sentences — a time or date, a sequence word (thumma) and a reason (li-anna).',
      modelFoot: 'Times + sequence + reason + one past and one future sentence = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الوَقْتُ وَالتَّقْوِيمُ', aim: 'a developed answer: comparison, opinion, reason and more than one time frame',
      qs: [
        { q: 'قَارِنْ بَيْنَ أُسْبُوعِكَ الدِّرَاسِيِّ وَأُسْبُوعِ طَالِبٍ فِي بَلَدٍ عَرَبِيٍّ.', en: 'Compare your school week with a student’s in an Arab country.', start: 'بَيْنَمَا نَدْرُسُ … يَدْرُسُ …', model: 'بَيْنَمَا نَدْرُسُ مِنَ الإِثْنَيْنِ إِلَى الجُمُعَةِ، يَدْرُسُ الطُّلَّابُ فِي بَعْضِ البُلْدَانِ العَرَبِيَّةِ مِنَ الأَحَدِ إِلَى الخَمِيسِ، لِأَنَّ الجُمُعَةَ عُطْلَةٌ هُنَاكَ.', modelEn: 'While we study Monday to Friday, students in some Arab countries study Sunday to Thursday, because Friday is a holiday there.' },
        { q: 'هَلْ العُطْلَةُ الصَّيْفِيَّةُ طَوِيلَةٌ بِمَا يَكْفِي فِي رَأْيِكَ؟', en: 'Is the summer holiday long enough, in your opinion?', start: 'أَعْتَقِدُ أَنَّهَا … لٰكِنَّ …', model: 'أَعْتَقِدُ أَنَّهَا مُنَاسِبَةٌ، لِأَنَّهَا سِتَّةُ أَسَابِيعَ، لٰكِنَّ بَعْضَ الطُّلَّابِ يَنْسَوْنَ دُرُوسَهُمْ فِيهَا.', modelEn: 'I think it is about right, because it is six weeks, but some students forget their lessons in it.' },
        { q: 'كَيْفَ تُنَظِّمُ مَوَاعِيدَكَ وَوَاجِبَاتِكَ؟', en: 'How do you organise your appointments and homework?', start: 'أَكْتُبُ كُلَّ مَوْعِدٍ فِي …', model: 'أَكْتُبُ كُلَّ مَوْعِدٍ فِي تَقْوِيمٍ عَلَى هَاتِفِي، وَأُنْهِي الوَاجِبَ فِي اليَوْمِ نَفْسِهِ.', modelEn: 'I write every appointment in a calendar on my phone, and finish homework on the same day.' },
        { q: 'كَيْفَ كَانَ أُسْبُوعُكَ فِي المَدْرَسَةِ الابْتِدَائِيَّةِ؟', en: 'What was your week like in primary school?', start: 'فِي المَدْرَسَةِ الابْتِدَائِيَّةِ كَانَ …', model: 'فِي المَدْرَسَةِ الابْتِدَائِيَّةِ كَانَ اليَوْمُ أَقْصَرَ، وَكُنْتُ أَلْعَبُ أَكْثَرَ وَأَدْرُسُ أَقَلَّ.', modelEn: 'In primary school the day was shorter, and I used to play more and study less.' },
        { q: 'لَوْ كَانَ عِنْدَكَ يَوْمٌ إِضَافِيٌّ فِي الأُسْبُوعِ، مَاذَا تَفْعَلُ؟', en: 'If you had an extra day each week, what would you do?', start: 'لَوْ كَانَ عِنْدِي … لَتَعَلَّمْتُ …', model: 'لَوْ كَانَ عِنْدِي يَوْمٌ إِضَافِيٌّ، لَتَعَلَّمْتُ لُغَةً جَدِيدَةً، وَلَزُرْتُ أَصْدِقَائِي.', modelEn: 'If I had an extra day, I would learn a new language and visit my friends.' },
      ],
      foot: 'Stretch: a comparison (baynamā), an opinion with “but”, a past habit (kāna / kuntu) and a conditional (law … la-).',
      modelFoot: 'Stretch: comparison, opinion + contrast, past habit and a conditional — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered every role-play task in a full sentence.' },
    { route: 'core', text: 'I gave days, dates and times correctly (yawma as-sabti · fī as-sāʿa …).' },
    { route: 'develop', text: 'I used ordinals and numbers with the right noun (khamsata ayyāmin).' },
    { route: 'develop', text: 'I asked a question in the role play.' },
    { route: 'stretch', text: 'I used a superlative, a comparison or a conditional.' },
  ],
};

const Q2_CORE = `مَرْحَبًا يَا عَلِيُّ،
كَيْفَ حَالُكَ؟ أُرِيدُ أَنْ أُخْبِرَكَ عَنْ أُسْبُوعِي. أَدْرُسُ خَمْسَةَ أَيَّامٍ، مِنَ الإِثْنَيْنِ إِلَى الجُمُعَةِ. يَبْدَأُ اليَوْمُ فِي الثَّامِنَةِ وَالنِّصْفِ، وَيَنْتَهِي فِي الثَّالِثَةِ. يَوْمِي المُفَضَّلُ هُوَ الأَرْبِعَاءُ لِأَنَّ عِنْدِي حِصَّةَ الرِّيَاضَةِ، وَأُحِبُّهَا كَثِيرًا. فِي نِهَايَةِ الأُسْبُوعِ المَاضِي زُرْتُ جَدَّتِي وَلَعِبْتُ كُرَةَ القَدَمِ. تَبْدَأُ العُطْلَةُ فِي العِشْرِينَ مِنْ دِيسَمْبَرَ، وَسَوْفَ أُسَافِرُ إِلَى مِصْرَ مَعَ أُسْرَتِي.
إِلَى اللِّقَاءِ،
يُوسُفُ`;
const Q2_FULL = `مَرْحَبًا يَا عَلِيُّ،
كَيْفَ حَالُكَ؟ أُرِيدُ أَنْ أُخْبِرَكَ عَنْ أُسْبُوعِي فِي المَدْرَسَةِ. أَدْرُسُ خَمْسَةَ أَيَّامٍ، مِنَ الإِثْنَيْنِ إِلَى الجُمُعَةِ. يَبْدَأُ اليَوْمُ الدِّرَاسِيُّ فِي الثَّامِنَةِ وَالنِّصْفِ، وَيَنْتَهِي فِي الثَّالِثَةِ وَالرُّبْعِ، وَأَتَنَاوَلُ الغَدَاءَ فِي المَدْرَسَةِ مَعَ أَصْدِقَائِي. يَوْمِي المُفَضَّلُ هُوَ الأَرْبِعَاءُ، لِأَنَّ عِنْدِي حِصَّتَيْنِ مِنَ الرِّيَاضَةِ، لٰكِنَّ يَوْمَ الثُّلَاثَاءِ مُتْعِبٌ جِدًّا. فِي نِهَايَةِ الأُسْبُوعِ المَاضِي زُرْتُ جَدَّتِي يَوْمَ السَّبْتِ، وَلَعِبْتُ كُرَةَ القَدَمِ يَوْمَ الأَحَدِ. سَتَبْدَأُ العُطْلَةُ القَادِمَةُ فِي العِشْرِينَ مِنْ دِيسَمْبَرَ، وَسَأُسَافِرُ إِلَى مِصْرَ مَعَ أُسْرَتِي أُسْبُوعَيْنِ. وَأَنْتَ، مَتَى تَبْدَأُ عُطْلَتُكَ؟
مَعَ تَحِيَّاتِي،
يُوسُفُ`;
const Q3A_CORE = `أَدْرُسُ فِي مَدْرَسَةٍ كَبِيرَةٍ فِي لَنْدَنَ. أَذْهَبُ إِلَى المَدْرَسَةِ خَمْسَةَ أَيَّامٍ فِي الأُسْبُوعِ، مِنَ الإِثْنَيْنِ إِلَى الجُمُعَةِ. يَبْدَأُ اليَوْمُ فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ، وَيَنْتَهِي فِي السَّاعَةِ الثَّالِثَةِ. عِنْدِي سِتُّ حِصَصٍ كُلَّ يَوْمٍ. يَوْمَ الإِثْنَيْنِ أَدْرُسُ الرِّيَاضِيَّاتِ وَالعَرَبِيَّةَ، وَيَوْمَ الأَرْبِعَاءِ عِنْدِي الرِّيَاضَةُ وَالفَنُّ. فِي الاسْتِرَاحَةِ أَتَنَاوَلُ الغَدَاءَ مَعَ أَصْدِقَائِي.
اليَوْمُ الأَصْعَبُ هُوَ الثُّلَاثَاءُ، لِأَنَّ عِنْدِي امْتِحَانًا قَصِيرًا كُلَّ أُسْبُوعٍ، وَأَرْجِعُ إِلَى البَيْتِ مُتَأَخِّرًا.
فِي شَهْرِ أُكْتُوبَرَ ذَهَبْنَا فِي رِحْلَةٍ مَدْرَسِيَّةٍ إِلَى المَتْحَفِ. كَانَ يَوْمًا جَمِيلًا، وَتَعَلَّمْتُ أَشْيَاءَ كَثِيرَةً، وَأَكَلْتُ مَعَ أَصْدِقَائِي فِي الحَدِيقَةِ، ثُمَّ رَجَعْنَا إِلَى المَدْرَسَةِ فِي السَّاعَةِ الثَّالِثَةِ.
فِي الفَصْلِ القَادِمِ سَأُرَاجِعُ دُرُوسِي كُلَّ يَوْمٍ، وَسَأَشْتَرِكُ فِي نَادِي الشِّطْرَنْجِ يَوْمَ الخَمِيسِ، وَسَأَنَامُ مُبَكِّرًا قَبْلَ الامْتِحَانَاتِ. أُحِبُّ مَدْرَسَتِي كَثِيرًا لِأَنَّ المُعَلِّمِينَ لُطَفَاءُ وَالطُّلَّابَ أَصْدِقَائِي.`;
const Q3A_FULL = `أَدْرُسُ فِي مَدْرَسَةٍ ثَانَوِيَّةٍ، وَيَمْتَدُّ أُسْبُوعِي الدِّرَاسِيُّ مِنَ الإِثْنَيْنِ إِلَى الجُمُعَةِ. يَبْدَأُ اليَوْمُ فِي الثَّامِنَةِ وَالنِّصْفِ بِالتَّسْجِيلِ، ثُمَّ نَدْرُسُ سِتَّ حِصَصٍ، مُدَّةُ كُلٍّ مِنْهَا خَمْسُونَ دَقِيقَةً، وَيَنْتَهِي فِي الثَّالِثَةِ وَالرُّبْعِ. وَفِي الاسْتِرَاحَةِ الطَّوِيلَةِ نَتَنَاوَلُ الغَدَاءَ وَنَلْعَبُ فِي السَّاحَةِ نِصْفَ سَاعَةٍ.
فِي رَأْيِي، أَصْعَبُ يَوْمٍ هُوَ الثُّلَاثَاءُ، لِأَنَّ الحِصَصَ الأَرْبَعَ الأُولَى عِلْمِيَّةٌ، وَبَعْدَهَا أَبْقَى فِي نَادِي الرُّوبُوتَاتِ حَتَّى الخَامِسَةِ، فَأَشْعُرُ بِالتَّعَبِ فِي المَسَاءِ. أَمَّا الجُمُعَةُ فَهِيَ أَسْهَلُ يَوْمٍ، لِأَنَّنَا نَخْرُجُ مُبَكِّرًا.
فِي السَّادِسِ مِنْ أُكْتُوبَرَ ذَهَبْنَا فِي رِحْلَةٍ إِلَى مَتْحَفِ العُلُومِ؛ شَاهَدْنَا تَجَارِبَ مُدْهِشَةً، وَكَتَبْتُ تَقْرِيرًا عَنْهَا فِي اليَوْمِ التَّالِي، فَحَصَلْتُ عَلَى دَرَجَةٍ مُمْتَازَةٍ. كَانَ ذٰلِكَ اليَوْمُ مِنْ أَجْمَلِ أَيَّامِ السَّنَةِ.
فِي الفَصْلِ القَادِمِ سَأُنَظِّمُ وَقْتِي أَفْضَلَ، وَسَأَكْتُبُ مَوَاعِيدَ الوَاجِبَاتِ وَالامْتِحَانَاتِ فِي تَقْوِيمِي، لِكَيْ لَا أَنْسَى شَيْئًا، وَسَأُرَاجِعُ كُلَّ مَادَّةٍ مَرَّتَيْنِ فِي الأُسْبُوعِ. وَلَوْ كَانَ القَرَارُ بِيَدِي، لَجَعَلْتُ يَوْمَ الأَرْبِعَاءِ نِصْفَ يَوْمٍ لِلرَّاحَةِ وَالأَنْشِطَةِ!`;
const Q3B_FULL = `أَهَمُّ تَارِيخٍ فِي حَيَاتِي هُوَ الخَامِسَ عَشَرَ مِنْ مَارِسَ، لِأَنَّهُ يَوْمُ مِيلَادِ أُخْتِي الصَّغِيرَةِ سَلْمَى. وُلِدَتْ فِي مُسْتَشْفًى قَرِيبٍ مِنْ بَيْتِنَا فِي السَّاعَةِ الثَّالِثَةِ فَجْرًا، وَكُنْتُ وَقْتَهَا فِي السَّابِعَةِ مِنْ عُمْرِي. قَبْلَ وِلَادَتِهَا كُنْتُ الطِّفْلَ الوَحِيدَ فِي البَيْتِ، أَمَّا الآنَ فَعِنْدِي صَدِيقَةٌ تَلْعَبُ مَعِي كُلَّ يَوْمٍ.
فِي السَّنَةِ المَاضِيَةِ احْتَفَلْنَا بِعِيدِ مِيلَادِهَا يَوْمَ السَّبْتِ؛ زَيَّنَّا البَيْتَ بِالبَالُونَاتِ المُلَوَّنَةِ فِي الصَّبَاحِ، وَجَاءَ أَقَارِبُنَا فِي الرَّابِعَةِ، وَأَكَلْنَا كَعْكَةً كَبِيرَةً، ثُمَّ لَعِبْنَا حَتَّى المَسَاءِ. وَقَدَّمْتُ لَهَا هَدِيَّةً جَمِيلَةً، فَفَرِحَتْ كَثِيرًا.
فِي رَأْيِي، هٰذِهِ المُنَاسَبَاتُ مُهِمَّةٌ لِأَنَّهَا تَجْمَعُ الأُسْرَةَ، غَيْرَ أَنَّ بَعْضَ النَّاسِ يُنْفِقُونَ أَمْوَالًا كَثِيرَةً عَلَيْهَا، وَهٰذَا غَيْرُ ضَرُورِيٍّ؛ فَالأَهَمُّ مِنَ الهَدَايَا هُوَ الوَقْتُ الَّذِي نَقْضِيهِ مَعًا.
فِي السَّنَةِ القَادِمَةِ سَأُخَطِّطُ لِحَفْلَةٍ بَسِيطَةٍ فِي الحَدِيقَةِ، وَسَأَدْعُو صَدِيقَاتِهَا مِنَ المَدْرَسَةِ، وَسَأَصْنَعُ لَهَا بِطَاقَةً بِيَدِي. وَلَوْ كَانَ عِنْدِي مَالٌ كَافٍ، لَأَخَذْتُهَا إِلَى حَدِيقَةِ الحَيَوَانَاتِ، لِأَنَّهَا تُحِبُّ الحَيَوَانَاتِ كَثِيرًا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: complete a club form with dates and times, write an email about your school week, and write an extended piece with ordinals, dates and three time frames.',
  lift: [
    { ar: 'فِي الخَامِسِ مِنْ مَايُو', en: 'on the fifth of May' },
    { ar: 'مِنَ الإِثْنَيْنِ إِلَى الجُمُعَةِ', en: 'from Monday to Friday' },
    { ar: 'يَوْمَ السَّبْتِ المَاضِي · الأُسْبُوعَ القَادِمَ', en: 'last Saturday · next week' },
  ],
  checkTip: 'Check: ordinals agree (al-ḥiṣṣa al-ūlā), numbers + nouns (khamsata ayyāmin), and the right tense for each bullet.',
  FORM: {
    title: 'School-club membership form', ar: 'اسْتِمَارَةُ الاشْتِرَاكِ فِي النَّادِي',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Your name', model: 'يُوسُفُ عَلِيٌّ', modelEn: 'Yusuf Ali' },
      { core: true, ar: 'تَارِيخُ المِيلَادِ', en: 'Date of birth (day + month)', model: 'الثَّانِيَ عَشَرَ مِنْ يُونْيُو', modelEn: '12 June' },
      { core: true, ar: 'الصَّفُّ', en: 'Your school year', model: 'الصَّفُّ العَاشِرُ', modelEn: 'Year 10' },
      { core: true, ar: 'الأَيَّامُ المُنَاسِبَةُ', en: 'The days that suit you', model: 'الثُّلَاثَاءُ وَالخَمِيسُ', modelEn: 'Tuesday and Thursday' },
      { core: true, ar: 'الوَقْتُ المُنَاسِبُ', en: 'The time that suits you', model: 'السَّاعَةُ الرَّابِعَةُ', modelEn: 'four o’clock' },
      { core: true, ar: 'النَّادِي الَّذِي تَخْتَارُهُ', en: 'The club you choose', model: 'نَادِي الشِّطْرَنْجِ', modelEn: 'the chess club' },
      { ar: 'كَمْ سَاعَةً فِي الأُسْبُوعِ؟', en: 'How many hours a week?', model: 'سَاعَتَانِ', modelEn: 'two hours' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ الاشْتِرَاكَ؟', en: 'ONE sentence: why you want to join', model: 'أُرِيدُ الاشْتِرَاكَ لِأَنِّي أُحِبُّ التَّفْكِيرَ وَالتَّحَدِّيَ.', modelEn: 'I want to join because I love thinking and challenges.' },
    ],
    foot: 'One word or a short phrase for each box — the last box needs a full sentence with a reason (li-anna).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Watch the dual in box 7 (سَاعَتَانِ) and ordinals in dates (الثَّانِيَ عَشَرَ).',
  },
  Q2: {
    short: 'an email about your school week', title: 'Question 2: an email about your school week', ar: 'رِسَالَةٌ عَنْ أُسْبُوعِي',
    task: 'Write an email in Arabic of about 80–90 words to an Arabic-speaking friend about your school week. You must include: • how many days you study and when the day starts and ends • your favourite day and why • what you did last weekend • when the next holiday starts and what you will do.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Days, dates and times written correctly.', 'Past (last weekend) AND future (the holiday).', 'About 80–90 words.'],
    phrases: [['أُرِيدُ أَنْ أُخْبِرَكَ عَنْ …', 'I want to tell you about …'], ['يَبْدَأُ اليَوْمُ فِي … وَيَنْتَهِي فِي …', 'the day starts at … and ends at …'], ['فِي نِهَايَةِ الأُسْبُوعِ المَاضِي …', 'last weekend …'], ['سَتَبْدَأُ العُطْلَةُ فِي …', 'the holiday will start on …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلِكْتِرُونِيَّةً إِلَى صَدِيقٍ عَنْ أُسْبُوعِكَ الدِّرَاسِيِّ (٨٠–٩٠ كَلِمَةً).', 'An email to a friend about your school week (80–90 words).'],
      ['1', 'كَمْ يَوْمًا تَدْرُسُ، وَمَتَى يَبْدَأُ اليَوْمُ وَيَنْتَهِي؟', 'How many days; when the day starts and ends'],
      ['2', 'مَا يَوْمُكَ المُفَضَّلُ؟ وَلِمَاذَا؟', 'Your favourite day, and why'],
      ['3', 'مَاذَا فَعَلْتَ فِي نِهَايَةِ الأُسْبُوعِ المَاضِي؟', 'What you did last weekend'],
      ['4', 'مَتَى تَبْدَأُ العُطْلَةُ القَادِمَةُ، وَمَاذَا سَتَفْعَلُ؟', 'When the next holiday starts; what you will do'],
    ],
    qwords: 'كَمْ (how many) · مَتَى (when) · مَا (what) · لِمَاذَا (why) · مَاذَا (what) — and notice the tense: فَعَلْتَ (past) · سَتَفْعَلُ (future)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'أَدْرُسُ ______ أَيَّامٍ. يَبْدَأُ اليَوْمُ فِي ______ وَيَنْتَهِي فِي ______ .', 'I study … days. The day starts at … and ends at …'],
      ['2', 'يَوْمِي المُفَضَّلُ هُوَ ______ لِأَنَّ ______ .', 'My favourite day is … because …'],
      ['3', 'فِي نِهَايَةِ الأُسْبُوعِ المَاضِي ______ .', 'Last weekend I …'],
      ['4', 'تَبْدَأُ العُطْلَةُ فِي ______ ، وَسَوْفَ ______ .', 'The holiday starts on …, and I will …'],
      ['end', 'إِلَى اللِّقَاءِ، ______', 'See you soon, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Ali, how are you? I study five days, from Monday to Friday. The day starts at half past eight and ends at three. My favourite day is Wednesday because I have PE. Last weekend I visited my grandmother and played football. The holiday starts on the twentieth of December, and I will travel to Egypt with my family. See you soon, Yusuf.”',
      find: ['خَمْسَةَ أَيَّامٍ', 'لِأَنَّ', 'زُرْتُ', 'وَسَوْفَ أُسَافِرُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Hello Ali, how are you? I want to tell you about my week at school. I study five days, Monday to Friday. The school day starts at half past eight and ends at quarter past three. My favourite day is Wednesday, because I have two PE lessons, but Tuesday is very tiring. Last weekend I visited my grandmother on Saturday and played football on Sunday. The next holiday will start on the twentieth of December, and I will travel to Egypt with my family for two weeks. And you — when does your holiday start? With my greetings, Yusuf.”',
      find: ['وَالرُّبْعِ', 'حِصَّتَيْنِ', 'لٰكِنَّ', 'أُسْبُوعَيْنِ'],
    },
  },
  Q3: {
    a: { title: 'أُسْبُوعٌ فِي مَدْرَسَتِي', en: 'A week at my school', bullets: 'صِفْ أُسْبُوعَكَ الدِّرَاسِيَّ · مَا أَصْعَبُ يَوْمٍ وَلِمَاذَا؟ · صِفْ يَوْمًا مُمَيَّزًا فِي المَدْرَسَةِ هٰذِهِ السَّنَةَ · مَا خُطَطُكَ لِلْفَصْلِ القَادِمِ؟', bulletsEn: 'Your school week · the hardest day and why · a special school day this year · plans for next term' },
    b: { title: 'تَارِيخٌ مُهِمٌّ فِي حَيَاتِي', en: 'An important date in my life', bullets: 'مَا التَّارِيخُ، وَلِمَاذَا هُوَ مُهِمٌّ؟ · كَيْفَ احْتَفَلْتَ بِهِ آخِرَ مَرَّةٍ؟ · مَا رَأْيُكَ فِي هٰذِهِ المُنَاسَبَاتِ؟ · كَيْفَ سَتَحْتَفِلُ بِهِ فِي المُسْتَقْبَلِ؟', bulletsEn: 'The date and why it matters · how you marked it last time · your opinion · how you will mark it in future' },
    plan: [
      'Present — the week: days, times, lessons (yabda’u … wa-yantahī …).',
      'Opinion — the hardest / most important day, with a reason; Stretch: ammā … fa-.',
      'Past — a special day: fī as-sādisi min uktūbar dhahabnā …',
      'Future — sa-unaẓẓimu …; Stretch: law … la- (a conditional).',
    ],
    frames: [
      { ar: 'يَبْدَأُ اليَوْمُ فِي الثَّامِنَةِ وَالنِّصْفِ.', en: 'present: the day starts at half past eight.' },
      { ar: 'فِي السَّادِسِ مِنْ أُكْتُوبَرَ ذَهَبْنَا …', en: 'past: on the sixth of October we went …' },
      { ar: 'فِي الفَصْلِ القَادِمِ سَأُنَظِّمُ وَقْتِي.', en: 'future: next term I will organise my time.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Present: a school in London, Monday to Friday, 8:30–3:00, six lessons, the subjects → opinion: Tuesday is hardest (a weekly test, home late) → past: an October trip to the museum, lunch in the park → future: revise every day, join the chess club on Thursday; I love my school because the teachers are kind.', find: ['خَمْسَةَ أَيَّامٍ', 'اليَوْمُ الأَصْعَبُ', 'ذَهَبْنَا', 'سَأَشْتَرِكُ'], notes: 'Core model: simple sentences, but all four points and three time frames.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Present: the week, registration at 8:30, six 50-minute lessons → opinion: Tuesday hardest (four science lessons + robotics club); as for Friday, it is the easiest → past: a science-museum trip on 6 October, a report and an excellent mark → future: organise time with a calendar so as not to forget; “if it were up to me, I would make Wednesday a half day”.', find: ['مُدَّةُ كُلٍّ مِنْهَا', 'أَمَّا الجُمُعَةُ فَهِيَ', 'لِكَيْ لَا أَنْسَى', 'لَوْ كَانَ … لَجَعَلْتُ'], notes: 'Full-mark model: numbers and ordinals used accurately, ammā … fa-, likay lā + subjunctive, and a conditional.' },
      { which: 'ب', level: 'Full', subtitle: 'an important date', text: Q3B_FULL, en: 'The date: 15 March, my little sister’s birthday (before, I was the only child; as for now, I have a friend) → past: last year’s party on Saturday, step by step → opinion: such occasions bring families together, but some people spend too much → future: a simple garden party and a handmade card; “if I had enough money, I would take her to the zoo”.', find: ['الخَامِسَ عَشَرَ مِنْ مَارِسَ', 'كُنْتُ … أَمَّا الآنَ فَـعِنْدِي', 'غَيْرَ أَنَّ', 'لَوْ … لَأَخَذْتُهَا'], notes: 'Full-mark model for the Stretch title: a compound ordinal date, a past contrast, a concession and a conditional. Any important date is welcome.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, with dates and times written correctly.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: a past sentence (last weekend) and a future sentence (the holiday).' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: ordinals, ammā … fa- or a conditional used accurately.' },
  ],
};
write.Q3.models[2].find[1] = 'أَمَّا الآنَ فَعِنْدِي';

module.exports = { speak, write };
