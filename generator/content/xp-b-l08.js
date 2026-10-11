'use strict';
/* Exam-practice data · TB-L08 · Hobbies, Sport and Free Time (present tense; verbal nouns; frequency; reasons). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'B', n: 8, short: 'Hobbies, Sport and Free Time', arShort: 'الهِوَايَاتُ وَوَقْتُ الفَرَاغِ', fileTitle: 'Hobbies_Sport_and_Free_Time', title: 'Hobbies, Sport and Free Time', ar: 'الهِوَايَاتُ وَالرِّيَاضَةُ وَوَقْتُ الفَرَاغِ', icon: 'FaFutbol', grammar: 'present tense; verbal nouns (al-qirāʾa, as-sibāḥa); frequency; reasons' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: talk about what you do in your free time, how often and why — with verbal nouns (uḥibbu s-sibāḥa), frequency words, ability (astaṭīʿu an …) and the value of leisure.',
  words: [
    w(1, 'أَلْعَبُ', 'I play', [['he', 'يَلْعَبُ'], ['she', 'تَلْعَبُ'], ['we', 'نَلْعَبُ']]),
    w(2, 'أُمَارِسُ', 'I do (a sport / hobby)', [['he', 'يُمَارِسُ'], ['she', 'تُمَارِسُ'], ['they', 'يُمَارِسُونَ']]),
    w(3, 'أَسْتَطِيعُ أَنْ …', 'I can … (+ verb in -a)', [['he', 'يَسْتَطِيعُ'], ['she', 'تَسْتَطِيعُ'], ['not', 'لَا أَسْتَطِيعُ']], { tag: 'ability' }),
    w(4, 'أَقْضِي وَقْتِي فِي …', 'I spend my time …', [['he', 'يَقْضِي'], ['she', 'تَقْضِي'], ['we', 'نَقْضِي']]),
    w(5, 'القِرَاءَةُ · الرَّسْمُ', 'reading · drawing', [['I read', 'أَقْرَأُ'], ['I draw', 'أَرْسُمُ']], { tag: 'verbal nouns' }),
    w(6, 'السِّبَاحَةُ · الطَّبْخُ', 'swimming · cooking', [['I swim', 'أَسْبَحُ'], ['I cook', 'أَطْبُخُ']], { tag: 'verbal nouns' }),
    w(7, 'هِوَايَةٌ', 'a hobby', [['sg.', 'هِوَايَةٌ'], ['pl.', 'هِوَايَاتٌ'], ['my', 'هِوَايَتِي']]),
    w(8, 'نَادٍ', 'a club', [['the', 'النَّادِي'], ['pl.', 'أَنْدِيَةٌ']]),
    w(9, 'دَائِمًا · غَالِبًا · نَادِرًا', 'always · often · rarely', null, { tag: 'frequency' }),
    w(10, 'مَرَّةً · مَرَّتَيْنِ فِي الأُسْبُوعِ', 'once · twice a week', [['3×', 'ثَلَاثَ مَرَّاتٍ']], { tag: 'frequency' }),
    w(11, 'مُمْتِعٌ · مُفِيدٌ', 'fun · useful', [['f.', 'مُمْتِعَةٌ · مُفِيدَةٌ'], ['more fun', 'أَمْتَعُ']]),
    w(12, 'فَرِيقٌ', 'a team', [['sg.', 'فَرِيقٌ'], ['pl.', 'فِرَقٌ'], ['my', 'فَرِيقِي']]),
  ],
  words1: { eyebrow: 'Language bank · free-time verbs (I · he · she · they)', title: 'What do you do in your free time?', ar: 'مَاذَا تَفْعَلُ فِي وَقْتِ فَرَاغِكَ؟', notes: 'LANGUAGE BANK (2 min) — a verb OR a verbal noun: أَسْبَحُ (I swim) · أُحِبُّ السِّبَاحَةَ (I like swimming). After أَسْتَطِيعُ أَنْ the verb ends in -a: أَسْتَطِيعُ أَنْ أَعْزِفَ.' },
  words2: { eyebrow: 'Language bank · hobbies, how often, why', title: 'How often — and why?', ar: 'كَمْ مَرَّةً؟ وَلِمَاذَا؟', notes: 'LANGUAGE BANK (2 min) — frequency: دَائِمًا · غَالِبًا · أَحْيَانًا · نَادِرًا · لَا … أَبَدًا. Numbers of times: مَرَّةً · مَرَّتَيْنِ · ثَلَاثَ مَرَّاتٍ. نَادٍ → النَّادِي (al- restores the yāʾ).' },
  checkCore: 'named hobbies with a verb or verbal noun and said how often',
  checkDevelop: 'gave a reason (li-anna) and used astaṭīʿu an + verb in -a',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'joining a sports centre', title: 'Role play A — Signing up at the sports centre', ar: 'فِي المَرْكَزِ الرِّيَاضِيِّ', you: 'a new member', them: 'the receptionist',
      tasks: [
        { core: true, ex: 'أَهْلًا، أَيَّ رِيَاضَةٍ تُرِيدُ أَنْ تُمَارِسَ؟', task: 'Say which sport.', help: 'أُرِيدُ أَنْ أُمَارِسَ …', model: 'أُرِيدُ أَنْ أُمَارِسَ السِّبَاحَةَ وَكُرَةَ السَّلَّةِ.', modelEn: 'I want to do swimming and basketball.' },
        { core: true, ex: 'كَمْ مَرَّةً فِي الأُسْبُوعِ؟', task: 'Say how often.', help: '… مَرَّاتٍ / مَرَّتَيْنِ', model: 'ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ، بَعْدَ المَدْرَسَةِ.', modelEn: 'Three times a week, after school.' },
        { core: true, ex: 'هَلْ تَسْتَطِيعُ أَنْ تَسْبَحَ جَيِّدًا؟', task: 'Say how well you can do it.', help: 'نَعَمْ، أَسْتَطِيعُ … / لَا، …', model: 'نَعَمْ، أَسْتَطِيعُ أَنْ أَسْبَحَ جَيِّدًا، لٰكِنِّي أُرِيدُ أَنْ أَكُونَ أَسْرَعَ.', modelEn: 'Yes, I can swim well, but I want to be faster.' },
        { core: true, ex: 'أَيَّ يَوْمٍ يُنَاسِبُكَ؟', task: 'Choose days and a time.', help: 'يَوْمَ … فِي السَّاعَةِ …', model: 'يَوْمَ الإِثْنَيْنِ وَالأَرْبِعَاءِ وَالجُمُعَةِ، فِي السَّاعَةِ الخَامِسَةِ.', modelEn: 'Monday, Wednesday and Friday, at five o’clock.' },
        { core: true, unexpected: true, ex: 'لِمَاذَا تُحِبُّ السِّبَاحَةَ؟', task: 'Answer the unexpected question.', help: 'لِأَنَّهَا …', model: 'لِأَنَّهَا مُفِيدَةٌ لِلصِّحَّةِ، وَمُرِيحَةٌ بَعْدَ يَوْمٍ طَوِيلٍ.', modelEn: 'Because it is good for your health, and relaxing after a long day.' },
      ],
      girl: 'تُرِيدِينَ أَنْ تُمَارِسِي · تَسْتَطِيعِينَ أَنْ تَسْبَحِي · يُنَاسِبُكِ · تُحِبِّينَ',
      notes: 'Core: an + subjunctive (an umārisa, an asbaḥa), frequency (thalātha marrāt), days, a reason with li-annahā (sibāḥa is feminine).',
    },
    {
      id: 'B', level: 'Core+', setting: 'a new friend', title: 'Role play B — Finding a shared hobby', ar: 'هِوَايَةٌ مُشْتَرَكَةٌ', you: 'a student', them: 'a new friend at school',
      tasks: [
        { core: true, ex: 'مَاذَا تَفْعَلُ فِي وَقْتِ فَرَاغِكَ؟', task: 'Say two hobbies.', help: 'أُحِبُّ … وَ…', model: 'أُحِبُّ القِرَاءَةَ وَالرَّسْمَ، وَأَلْعَبُ كُرَةَ القَدَمِ أَحْيَانًا.', modelEn: 'I like reading and drawing, and I sometimes play football.' },
        { core: true, ex: 'مَاذَا تَقْرَأُ؟', task: 'Say what kind of books.', help: 'أَقْرَأُ … لِأَنَّهَا …', model: 'أَقْرَأُ القِصَصَ البُولِيسِيَّةَ، لِأَنَّهَا مُشَوِّقَةٌ.', modelEn: 'I read detective stories, because they are exciting.' },
        { ex: '… أَنَا أُحِبُّ الشِّطْرَنْجَ كَثِيرًا.', task: 'ASK where and how often he plays.', help: 'أَيْنَ …؟ وَكَمْ مَرَّةً …؟', model: 'أَيْنَ تَلْعَبُهُ؟ وَكَمْ مَرَّةً فِي الأُسْبُوعِ؟', modelEn: 'Where do you play it? And how many times a week?' },
        { ex: 'فِي نَادِي المَدْرَسَةِ، يَوْمَ الخَمِيسِ. هَلْ تَأْتِي؟', task: 'Accept and say what you can do.', help: 'نَعَمْ، لٰكِنِّي لَا أَسْتَطِيعُ أَنْ …', model: 'نَعَمْ، سَآتِي، لٰكِنِّي لَا أَسْتَطِيعُ أَنْ أَلْعَبَ جَيِّدًا، فَهَلْ تُعَلِّمُنِي؟', modelEn: 'Yes, I’ll come, but I can’t play well — will you teach me?' },
        { unexpected: true, ex: 'مَاذَا فَعَلْتَ فِي نِهَايَةِ الأُسْبُوعِ المَاضِي؟', task: 'Answer the unexpected question (past).', help: 'ذَهَبْتُ … / لَعِبْتُ …', model: 'ذَهَبْتُ إِلَى المَكْتَبَةِ، وَاسْتَعَرْتُ ثَلَاثَةَ كُتُبٍ جَدِيدَةٍ.', modelEn: 'I went to the library and borrowed three new books.' },
      ],
      girl: 'تَفْعَلِينَ · فَرَاغِكِ · تَقْرَئِينَ · تَأْتِينَ · فَعَلْتِ',
      notes: 'Task 3: the CANDIDATE asks — the pronoun -hu for ash-shiṭranj (talʿabuhu). Task 4: lā astaṭīʿu an + subjunctive.',
    },
    {
      id: 'C', level: 'Develop', setting: 'too busy?', title: 'Role play C — Too many activities', ar: 'أَنْشِطَةٌ كَثِيرَةٌ', you: 'a busy student', them: 'your form tutor',
      tasks: [
        { ex: 'تَبْدُو مُتْعَبًا. مَا بِكَ؟', task: 'Explain your busy week.', help: 'عِنْدِي … يَوْمَ … وَ… يَوْمَ …', model: 'عِنْدِي تَدْرِيبُ كُرَةِ القَدَمِ يَوْمَ الإِثْنَيْنِ وَالخَمِيسِ، وَدَرْسُ بِيَانُو يَوْمَ الثُّلَاثَاءِ، وَنَادِي العُلُومِ يَوْمَ الأَرْبِعَاءِ.', modelEn: 'I have football training on Monday and Thursday, piano on Tuesday and science club on Wednesday.' },
        { ex: 'وَمَتَى تَدْرُسُ؟', task: 'Say when, and admit a problem.', help: 'أَدْرُسُ … لٰكِنِّي …', model: 'أَدْرُسُ فِي اللَّيْلِ بَعْدَ العَشَاءِ، لٰكِنِّي أَنَامُ مُتَأَخِّرًا جِدًّا.', modelEn: 'I study at night after dinner, but I go to bed very late.' },
        { ex: 'أَيُّ نَشَاطٍ أَهَمُّ لَكَ؟', task: 'Choose one and give two reasons.', help: '… لِأَنَّهُ … وَلِأَنَّ …', model: 'كُرَةُ القَدَمِ، لِأَنَّهَا تُفْرِغُ طَاقَتِي، وَلِأَنَّ أَصْدِقَائِي فِي الفَرِيقِ.', modelEn: 'Football, because it burns off my energy, and because my friends are on the team.' },
        { ex: 'رُبَّمَا يَجِبُ أَنْ تَتْرُكَ نَشَاطًا.', task: 'ASK for advice about which one.', help: 'أَيَّ نَشَاطٍ تَنْصَحُنِي أَنْ …؟', model: 'أَيَّ نَشَاطٍ تَنْصَحُنِي أَنْ أَتْرُكَهُ فِي رَأْيِكَ؟', modelEn: 'Which activity would you advise me to drop?' },
        { unexpected: true, ex: 'كَيْفَ كَانَ وَقْتُ فَرَاغِكَ عِنْدَمَا كُنْتَ صَغِيرًا؟', task: 'Answer the unexpected question (past habit).', help: 'كُنْتُ … كُلَّ يَوْمٍ', model: 'كُنْتُ أَلْعَبُ فِي الحَدِيقَةِ مَعَ أَخِي كُلَّ يَوْمٍ، وَلَمْ تَكُنْ عِنْدِي أَنْشِطَةٌ كَثِيرَةٌ.', modelEn: 'I used to play in the garden with my brother every day, and I didn’t have many activities.' },
      ],
      girl: 'تَبْدِينَ مُتْعَبَةً · مَا بِكِ · تَدْرُسِينَ · لَكِ · تَتْرُكِي · كُنْتِ صَغِيرَةً',
      notes: 'Develop: days + activities (iḍāfa: tadrību kurati l-qadam), lākinnī, two reasons, a question with tanṣaḥunī an, kuntu + present.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a debate', title: 'Role play D — Screens or sport?', ar: 'الشَّاشَاتُ أَمِ الرِّيَاضَةُ؟', you: 'a student speaker', them: 'the debate chair',
      tasks: [
        { ex: 'كَيْفَ يَقْضِي الشَّبَابُ وَقْتَ فَرَاغِهِمْ اليَوْمَ؟', task: 'Describe with a statistic or example.', help: 'يَقْضِي أَغْلَبُهُمْ … مِثْلًا …', model: 'يَقْضِي أَغْلَبُهُمْ سَاعَاتٍ أَمَامَ الشَّاشَاتِ؛ فَمَثَلًا يَلْعَبُ أَخِي أَلْعَابَ الفِيدْيُو أَرْبَعَ سَاعَاتٍ يَوْمِيًّا.', modelEn: 'Most of them spend hours on screens — my brother, for example, plays video games four hours a day.' },
        { ex: 'هَلْ أَلْعَابُ الفِيدْيُو مُضِرَّةٌ دَائِمًا؟', task: 'Give a balanced answer.', help: 'لَيْسَتْ دَائِمًا … فَبَعْضُهَا … لٰكِنَّ …', model: 'لَيْسَتْ مُضِرَّةً دَائِمًا؛ فَبَعْضُهَا يُنَمِّي التَّفْكِيرَ، لٰكِنَّ الإِفْرَاطَ فِيهَا يُؤَثِّرُ فِي النَّوْمِ وَالدِّرَاسَةِ.', modelEn: 'Not always — some develop thinking, but overdoing them affects sleep and study.' },
        { ex: 'كَيْفَ كَانَ الشَّبَابُ يَقْضُونَ وَقْتَهُمْ فِي المَاضِي؟', task: 'Compare past and present.', help: 'كَانُوا … أَمَّا اليَوْمَ فَـ…', model: 'كَانُوا يَلْعَبُونَ فِي الشَّوَارِعِ وَيَصْنَعُونَ أَلْعَابَهُمْ بِأَيْدِيهِمْ، أَمَّا اليَوْمَ فَيَجْلِسُونَ وَحْدَهُمْ فِي غُرَفِهِمْ.', modelEn: 'They used to play in the streets and make their own toys; today they sit alone in their rooms.' },
        { ex: 'لٰكِنَّ الأَلْعَابَ الإِلِكْتِرُونِيَّةَ اجْتِمَاعِيَّةٌ أَيْضًا!', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّنَا نَلْعَبُ مَعَ أَصْدِقَاءَ عَلَى الإِنْتَرْنِتِ، غَيْرَ أَنَّ اللِّقَاءَ وَجْهًا لِوَجْهٍ أَعْمَقُ وَأَصْدَقُ.', modelEn: 'It is true we play with friends online, but meeting face to face is deeper and truer.' },
        { unexpected: true, ex: 'لَوْ كَانَ عِنْدَكَ يَوْمٌ حُرٌّ تَمَامًا، كَيْفَ تَقْضِيهِ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ كَانَ عِنْدِي …، لَـ…', model: 'لَوْ كَانَ عِنْدِي يَوْمٌ حُرٌّ، لَتَسَلَّقْتُ جَبَلًا مَعَ أَصْدِقَائِي، ثُمَّ لَطَبَخْنَا عَشَاءً عَلَى النَّارِ.', modelEn: 'If I had a completely free day, I would climb a mountain with my friends and then cook dinner over a fire.' },
      ],
      girl: 'عِنْدَكِ · تَقْضِينَهُ',
      notes: 'Stretch: an example with mathalan, laysat … fa-baʿḍuhā …, kānū + present vs ammā … fa-, a concession and law … la-.',
      modelFoot: 'Stretch: an example, a balanced view, past vs present, ṣaḥīḥun anna … ghayra anna and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'هِوَايَاتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'مَا هِوَايَتُكَ المُفَضَّلَةُ؟', en: 'What is your favourite hobby?', start: 'هِوَايَتِي المُفَضَّلَةُ …', model: 'هِوَايَتِيَ المُفَضَّلَةُ الرَّسْمُ.', modelEn: 'My favourite hobby is drawing.' },
        { q: 'كَمْ مَرَّةً تُمَارِسُ الرِّيَاضَةَ؟', en: 'How often do you do sport?', start: 'أُمَارِسُ الرِّيَاضَةَ …', model: 'أُمَارِسُ الرِّيَاضَةَ مَرَّتَيْنِ فِي الأُسْبُوعِ.', modelEn: 'I do sport twice a week.' },
        { q: 'هَلْ تَسْتَطِيعُ أَنْ تَعْزِفَ عَلَى آلَةٍ مُوسِيقِيَّةٍ؟', en: 'Can you play an instrument?', start: 'نَعَمْ، أَسْتَطِيعُ … / لَا، لَا أَسْتَطِيعُ …', model: 'نَعَمْ، أَسْتَطِيعُ أَنْ أَعْزِفَ عَلَى العُودِ قَلِيلًا.', modelEn: 'Yes, I can play the oud a little.' },
        { q: 'مَاذَا تَفْعَلُ يَوْمَ السَّبْتِ؟', en: 'What do you do on Saturdays?', start: 'يَوْمَ السَّبْتِ …', model: 'يَوْمَ السَّبْتِ أَلْعَبُ كُرَةَ القَدَمِ مَعَ فَرِيقِي فِي الصَّبَاحِ.', modelEn: 'On Saturdays I play football with my team in the morning.' },
        { q: 'هَلْ تُحِبُّ القِرَاءَةَ؟', en: 'Do you like reading?', start: 'نَعَمْ / لَا، …', model: 'نَعَمْ، أُحِبُّهَا كَثِيرًا، وَأَقْرَأُ كُلَّ لَيْلَةٍ قَبْلَ النَّوْمِ.', modelEn: 'Yes, I love it, and I read every night before bed.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a frequency word = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'وَقْتُ الفَرَاغِ', aim: 'two or three sentences, with a reason or a past detail',
      qs: [
        { q: 'كَيْفَ بَدَأْتَ هِوَايَتَكَ؟', en: 'How did you start your hobby?', start: 'بَدَأْتُ … عِنْدَمَا …', model: 'بَدَأْتُ الرَّسْمَ عِنْدَمَا أَهْدَتْنِي خَالَتِي أَلْوَانًا مَائِيَّةً فِي عِيدِ مِيلَادِي العَاشِرِ.', modelEn: 'I started drawing when my aunt gave me watercolours for my tenth birthday.' },
        { q: 'هَلْ تُفَضِّلُ الرِّيَاضَةَ الجَمَاعِيَّةَ أَمِ الفَرْدِيَّةَ؟', en: 'Team sports or individual sports?', start: 'أُفَضِّلُ … لِأَنَّ …', model: 'أُفَضِّلُ الرِّيَاضَةَ الجَمَاعِيَّةَ، لِأَنِّي أُحِبُّ العَمَلَ مَعَ الآخَرِينَ، وَالفَوْزُ مَعًا أَمْتَعُ.', modelEn: 'I prefer team sports, because I like working with others, and winning together is more fun.' },
        { q: 'مَاذَا تَفْعَلُ عِنْدَمَا يَكُونُ الجَوُّ مُمْطِرًا؟', en: 'What do you do when it rains?', start: 'عِنْدَمَا … أَبْقَى … وَ…', model: 'عِنْدَمَا يَكُونُ الجَوُّ مُمْطِرًا، أَبْقَى فِي البَيْتِ، وَأَطْبُخُ مَعَ أُمِّي أَوْ أُشَاهِدُ فِيلْمًا.', modelEn: 'When it rains, I stay home and cook with my mum or watch a film.' },
        { q: 'لِمَاذَا تُعْتَبَرُ الهِوَايَاتُ مُهِمَّةً؟', en: 'Why are hobbies important?', start: 'لِأَنَّهَا … وَ…', model: 'لِأَنَّهَا تُرِيحُنَا مِنْ ضَغْطِ الدِّرَاسَةِ، وَتُعَلِّمُنَا مَهَارَاتٍ جَدِيدَةً، وَتُعَرِّفُنَا بِأَصْدِقَاءَ جُدُدٍ.', modelEn: 'Because they relieve study stress, teach us new skills and introduce us to new friends.' },
        { q: 'أَيَّ هِوَايَةٍ جَدِيدَةٍ تُرِيدُ أَنْ تُجَرِّبَهَا؟', en: 'Which new hobby would you like to try?', start: 'أُرِيدُ أَنْ أُجَرِّبَ … لِأَنَّ …', model: 'أُرِيدُ أَنْ أُجَرِّبَ التَّصْوِيرَ، لِأَنِّي أُحِبُّ الطَّبِيعَةَ، وَسَأَشْتَرِي كَامِيرَا بِمَالِي.', modelEn: 'I want to try photography, because I love nature, and I will buy a camera with my own money.' },
      ],
      foot: 'Develop: two or three sentences — a past start, a preference with a reason, ʿindamā and a future plan.',
      modelFoot: 'Hobby + frequency + reason + a past detail = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الوَقْتُ الحُرُّ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلْ عِنْدَ الشَّبَابِ وَقْتُ فَرَاغٍ كَافٍ اليَوْمَ؟', en: 'Do young people have enough free time today?', start: 'لَا أَظُنُّ ذٰلِكَ، لِأَنَّ …', model: 'لَا أَظُنُّ ذٰلِكَ، لِأَنَّ الوَاجِبَاتِ وَالدُّرُوسَ الإِضَافِيَّةَ تَأْخُذُ أَغْلَبَ وَقْتِهِمْ، حَتَّى فِي نِهَايَةِ الأُسْبُوعِ.', modelEn: 'I don’t think so, because homework and extra lessons take most of their time, even at weekends.' },
        { q: 'هَلْ يَجِبُ أَنْ تَكُونَ الأَنْدِيَةُ الرِّيَاضِيَّةُ مَجَّانِيَّةً؟', en: 'Should sports clubs be free?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الأَنْدِيَةَ تَحْتَاجُ إِلَى المَالِ، غَيْرَ أَنَّ الرِّيَاضَةَ حَقٌّ لِكُلِّ طِفْلٍ، غَنِيًّا كَانَ أَمْ فَقِيرًا.', modelEn: 'It is true clubs need money, but sport is every child’s right, rich or poor.' },
        { q: 'مَا الفَرْقُ بَيْنَ هِوَايَاتِكَ وَهِوَايَاتِ وَالِدَيْكَ؟', en: 'How do your hobbies differ from your parents’?', start: 'كَانَ أَبِي … أَمَّا أَنَا فَـ…', model: 'كَانَ أَبِي يَجْمَعُ الطَّوَابِعَ وَيُرَاسِلُ أَصْدِقَاءَ مِنْ بُلْدَانٍ أُخْرَى، أَمَّا أَنَا فَأُصَمِّمُ أَلْعَابًا عَلَى الحَاسُوبِ.', modelEn: 'My father collected stamps and wrote to pen friends abroad; I design games on the computer.' },
        { q: 'صِفْ إِنْجَازًا حَقَّقْتَهُ فِي هِوَايَتِكَ.', en: 'Describe an achievement in your hobby.', start: 'فِي … شَارَكْتُ فِي … فَـ…', model: 'فِي السَّنَةِ المَاضِيَةِ شَارَكْتُ فِي مُسَابَقَةٍ لِلرَّسْمِ، فَفُزْتُ بِالمَرْكَزِ الثَّانِي، وَعُرِضَتْ لَوْحَتِي فِي مَكْتَبَةِ المَدِينَةِ.', modelEn: 'Last year I entered a drawing competition, came second, and my painting was shown in the town library.' },
        { q: 'لَوْ أَصْبَحَتْ هِوَايَتُكَ عَمَلَكَ، هَلْ تَبْقَى مُمْتِعَةً؟', en: 'If your hobby became your job, would it stay fun?', start: 'لَوْ أَصْبَحَتْ …، لَـ…', model: 'لَوْ أَصْبَحَ الرَّسْمُ عَمَلِي، لَفَقَدَ جُزْءًا مِنْ مُتْعَتِهِ، لِأَنِّي سَأَرْسُمُ مَا يُرِيدُهُ الزَّبَائِنُ لَا مَا أُرِيدُهُ أَنَا.', modelEn: 'If drawing became my job, it would lose some of its fun, because I’d draw what customers want, not what I want.' },
      ],
      foot: 'Stretch: reasons with ḥattā, a concession with … kāna am …, kāna + present vs ammā … fa-, a passive (ʿuriḍat) and law … la-.',
      modelFoot: 'Stretch: reasons, a concession, past vs present, a passive verb, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I named my hobbies with a verb or a verbal noun.' },
    { route: 'core', text: 'I said how often (marratayn, thalātha marrāt, aḥyānan).' },
    { route: 'develop', text: 'I used astaṭīʿu an + verb in -a.' },
    { route: 'develop', text: 'I gave a reason and a past detail.' },
    { route: 'stretch', text: 'I compared past and present, conceded or used law … la-.' },
  ],
};
speak.RP[3].tasks[2].help = 'كَانُوا … أَمَّا اليَوْمَ فَيَجْلِسُونَ …';
speak.RP[3].tasks[4].help = 'لَوْ كَانَ عِنْدِي …، لَتَسَلَّقْتُ …';
speak.RP[2].tasks[2].help = 'كُرَةُ القَدَمِ، لِأَنَّهَا … وَلِأَنَّ …';
speak.CONV[2].qs[2].start = 'كَانَ أَبِي … أَمَّا أَنَا فَأُصَمِّمُ …';
speak.CONV[2].qs[3].start = 'فِي … شَارَكْتُ فِي … فَفُزْتُ …';
speak.CONV[2].qs[4].start = 'لَوْ أَصْبَحَ … عَمَلِي، لَفَقَدَ …';

const Q2_CORE = `مَرْحَبًا يَا زَيْدُ،
كَيْفَ حَالُكَ؟ سَأَلْتَنِي عَنْ هِوَايَاتِي. أُحِبُّ كُرَةَ القَدَمِ كَثِيرًا، وَأَلْعَبُهَا مَعَ فَرِيقِ المَدْرَسَةِ مَرَّتَيْنِ فِي الأُسْبُوعِ. أُحِبُّ القِرَاءَةَ أَيْضًا، وَأَقْرَأُ كُلَّ لَيْلَةٍ قَبْلَ النَّوْمِ. لَا أَسْتَطِيعُ أَنْ أَسْبَحَ جَيِّدًا، لٰكِنِّي أَتَعَلَّمُ الآنَ. أَمْسِ لَعِبْنَا مُبَارَاةً، وَفَازَ فَرِيقُنَا ثَلَاثَةً مُقَابِلَ وَاحِدٍ! الرِّيَاضَةُ مُهِمَّةٌ، لِأَنَّهَا مُفِيدَةٌ لِلصِّحَّةِ. فِي الصَّيْفِ سَأَتَعَلَّمُ التَّصْوِيرَ. وَأَنْتَ، مَا هِوَايَتُكَ؟
مَعَ السَّلَامَةِ،
سَامِي`;
const Q2_FULL = `عَزِيزِي زَيْدٌ،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَقَدْ سَأَلْتَنِي كَيْفَ أَقْضِي وَقْتَ فَرَاغِي. أَنَا مَشْغُولٌ جِدًّا؛ أَلْعَبُ كُرَةَ القَدَمِ مَعَ فَرِيقِ المَدْرَسَةِ مَرَّتَيْنِ فِي الأُسْبُوعِ، وَأَتَعَلَّمُ العَزْفَ عَلَى العُودِ يَوْمَ السَّبْتِ مَعَ أُسْتَاذٍ سُورِيٍّ. أَمَّا فِي المَسَاءِ فَأُحِبُّ قِرَاءَةَ الرِّوَايَاتِ البُولِيسِيَّةِ، لِأَنَّهَا تُنْسِينِي ضَغْطَ الدِّرَاسَةِ. أَمْسِ كَانَ يَوْمًا رَائِعًا؛ فَازَ فَرِيقُنَا فِي نِصْفِ نِهَائِيِّ البُطُولَةِ، وَسَجَّلْتُ الهَدَفَ الثَّالِثَ بِرَأْسِي! صَحِيحٌ أَنَّ أَنْشِطَتِي كَثِيرَةٌ، غَيْرَ أَنِّي أُنَظِّمُ وَقْتِي جَيِّدًا. فِي العُطْلَةِ الصَّيْفِيَّةِ سَأُجَرِّبُ هِوَايَةً جَدِيدَةً، وَهِيَ التَّصْوِيرُ. وَأَنْتَ، هَلْ تُمَارِسُ أَيَّ رِيَاضَةٍ؟
مَعَ تَحِيَّاتِي،
سَامِي`;
const Q3A_CORE = `عِنْدِي هِوَايَاتٌ كَثِيرَةٌ، لٰكِنَّ هِوَايَتِيَ المُفَضَّلَةَ هِيَ الرَّسْمُ. أَرْسُمُ كُلَّ يَوْمٍ تَقْرِيبًا بَعْدَ الوَاجِبَاتِ. أَرْسُمُ الطَّبِيعَةَ وَالحَيَوَانَاتِ، وَأَسْتَعْمِلُ الأَلْوَانَ المَائِيَّةَ. أُحِبُّ الرَّسْمَ، لِأَنَّهُ يُرِيحُنِي وَيَجْعَلُنِي سَعِيدَةً، وَأُعَلِّقُ لَوْحَاتِي عَلَى جُدْرَانِ غُرْفَتِي.
أُمَارِسُ الرِّيَاضَةَ أَيْضًا. أَسْبَحُ مَرَّتَيْنِ فِي الأُسْبُوعِ فِي النَّادِي، وَأَمْشِي مَعَ أُمِّي فِي الحَدِيقَةِ يَوْمَ الجُمُعَةِ. لَا أُحِبُّ كُرَةَ القَدَمِ، لٰكِنِّي أُحِبُّ كُرَةَ الطَّائِرَةِ، وَأَلْعَبُهَا مَعَ صَدِيقَاتِي فِي المَدْرَسَةِ.
بَدَأْتُ الرَّسْمَ عِنْدَمَا كُنْتُ فِي الثَّامِنَةِ مِنْ عُمْرِي. فِي السَّنَةِ المَاضِيَةِ شَارَكْتُ فِي مُسَابَقَةٍ فِي المَدْرَسَةِ، وَرَسَمْتُ شَجَرَةً كَبِيرَةً فِي الخَرِيفِ. فُزْتُ بِالمَرْكَزِ الأَوَّلِ، وَكَانَتْ أُسْرَتِي فَخُورَةً بِي، وَعَلَّقَتِ المُعَلِّمَةُ لَوْحَتِي فِي مَكْتَبَةِ المَدْرَسَةِ.
فِي رَأْيِي، الهِوَايَاتُ مُهِمَّةٌ جِدًّا، لِأَنَّهَا تُعَلِّمُنَا الصَّبْرَ. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَدْرُسَ الفَنَّ، وَسَأَرْسُمُ لَوْحَاتٍ كَبِيرَةً لِلْمَعَارِضِ.`;
const Q3A_FULL = `قَبْلَ ثَلَاثِ سَنَوَاتٍ كُنْتُ أَقْضِي وَقْتَ فَرَاغِي كُلَّهُ أَمَامَ الهَاتِفِ، أَتَنَقَّلُ مِنْ فِيدْيُو إِلَى آخَرَ دُونَ هَدَفٍ. ثُمَّ أَهْدَانِي خَالِي كَامِيرَا قَدِيمَةً، فَتَغَيَّرَ كُلُّ شَيْءٍ؛ فَقَدْ بَدَأْتُ أَرَى الأَشْيَاءَ مِنْ حَوْلِي بِعُيُونٍ جَدِيدَةٍ.
اليَوْمَ أَصْبَحَ التَّصْوِيرُ هِوَايَتِيَ المُفَضَّلَةَ؛ أَخْرُجُ كُلَّ يَوْمِ سَبْتٍ مَعَ مَجْمُوعَةٍ مِنَ المُصَوِّرِينَ الشَّبَابِ، فَنَمْشِي سَاعَاتٍ فِي الحَدَائِقِ وَالأَسْوَاقِ بَحْثًا عَنِ اللَّقْطَةِ المِثَالِيَّةِ. أَمَّا فِي أَيَّامِ الدِّرَاسَةِ فَأَسْبَحُ مَرَّتَيْنِ فِي الأُسْبُوعِ، لِأَنَّ السِّبَاحَةَ تُصَفِّي ذِهْنِي، وَتُسَاعِدُنِي عَلَى النَّوْمِ جَيِّدًا قَبْلَ الامْتِحَانَاتِ.
أَكْثَرُ لَحْظَةٍ فَخَرْتُ بِهَا كَانَتْ فِي الرَّبِيعِ المَاضِي، عِنْدَمَا شَارَكْتُ بِصُورَةٍ لِجَدِّي وَهُوَ يَعْمَلُ فِي حَدِيقَتِهِ فِي مُسَابَقَةٍ وَطَنِيَّةٍ لِلشَّبَابِ، فَاخْتَارَتْهَا اللَّجْنَةُ ضِمْنَ أَفْضَلِ عَشْرِ صُوَرٍ، وَعُرِضَتْ فِي مَعْرِضٍ فِي لَنْدَنَ.
صَحِيحٌ أَنَّ الهِوَايَاتِ تَأْخُذُ وَقْتًا كَانَ يُمْكِنُ أَنْ أَدْرُسَ فِيهِ، غَيْرَ أَنَّهَا عَلَّمَتْنِي الصَّبْرَ وَالمُلَاحَظَةَ. وَلَوْ لَمْ يُهْدِنِي خَالِي تِلْكَ الكَامِيرَا، لَكُنْتُ مَا زِلْتُ أُضَيِّعُ وَقْتِي أَمَامَ الشَّاشَةِ.`;
const Q3B_FULL = `تَغَيَّرَتْ طَرِيقَةُ قَضَاءِ وَقْتِ الفَرَاغِ تَغَيُّرًا كَبِيرًا فِي السَّنَوَاتِ الأَخِيرَةِ. فَتُشِيرُ الدِّرَاسَاتُ إِلَى أَنَّ المُرَاهِقَ يَقْضِي أَكْثَرَ مِنْ سِتِّ سَاعَاتٍ يَوْمِيًّا أَمَامَ الشَّاشَاتِ، بَيْنَمَا تَقِلُّ الأَنْشِطَةُ الرِّيَاضِيَّةُ وَالفَنِّيَّةُ عَامًا بَعْدَ عَامٍ.
فِي المَاضِي كَانَ الأَطْفَالُ يَلْعَبُونَ فِي الشَّوَارِعِ وَالسَّاحَاتِ، وَيَصْنَعُونَ أَلْعَابَهُمْ بِأَيْدِيهِمْ، أَمَّا اليَوْمَ فَيَجْلِسُ كُلُّ وَاحِدٍ فِي غُرْفَتِهِ مَعَ هَاتِفِهِ، حَتَّى عِنْدَمَا يَزُورُهُ أَصْدِقَاؤُهُ، فَيَجْلِسُونَ مَعًا وَكُلٌّ مِنْهُمْ يَنْظُرُ إِلَى شَاشَتِهِ.
لَاحَظْتُ ذٰلِكَ فِي أُسْرَتِي؛ فَأَخِي الصَّغِيرُ كَانَ يَقْضِي عُطَلَهُ كُلَّهَا فِي أَلْعَابِ الفِيدْيُو، حَتَّى سَجَّلَهُ أَبِي فِي نَادٍ لِكُرَةِ السَّلَّةِ. فِي البِدَايَةِ رَفَضَ، لٰكِنَّهُ الآنَ يَنْتَظِرُ التَّدْرِيبَ بِشَوْقٍ، وَأَصْبَحَ لَهُ أَصْدِقَاءُ جُدُدٌ، وَتَحَسَّنَ نَوْمُهُ كَثِيرًا.
صَحِيحٌ أَنَّ بَعْضَ الأَلْعَابِ الإِلِكْتِرُونِيَّةِ مُفِيدَةٌ لِلتَّفْكِيرِ، غَيْرَ أَنَّ الجِسْمَ يَحْتَاجُ إِلَى الحَرَكَةِ، وَالرُّوحَ تَحْتَاجُ إِلَى النَّاسِ وَالضَّحِكِ وَالهَوَاءِ الطَّلْقِ. وَلَوْ وَفَّرَتِ المَدَارِسُ أَنْشِطَةً مَجَّانِيَّةً بَعْدَ الدَّوَامِ، لَوَجَدَ كُلُّ طَالِبٍ هِوَايَةً تُبْعِدُهُ عَنِ الشَّاشَةِ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in an after-school club form, write an email about your hobbies, and write an extended piece about your favourite hobby or about how young people spend free time.',
  lift: [
    { ar: 'أَلْعَبُهَا مَعَ فَرِيقِ المَدْرَسَةِ مَرَّتَيْنِ فِي الأُسْبُوعِ', en: 'I play it with the school team twice a week' },
    { ar: 'لَا أَسْتَطِيعُ أَنْ أَسْبَحَ جَيِّدًا، لٰكِنِّي أَتَعَلَّمُ', en: 'I can’t swim well, but I am learning' },
    { ar: 'لِأَنَّهَا تُنْسِينِي ضَغْطَ الدِّرَاسَةِ', en: 'because it makes me forget the pressure of school' },
  ],
  checkTip: 'Check: verbal nouns with al- (uḥibbu r-rasma); astaṭīʿu an + verb in -a; frequency (marratayn, thalātha marrāt); -hā for a feminine sport (kura → alʿabuhā).',
  FORM: {
    title: 'After-school club registration', ar: 'التَّسْجِيلُ فِي نَشَاطٍ بَعْدَ المَدْرَسَةِ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالصَّفُّ', en: 'Name and class', model: 'سَامِي يُوسُفُ، الصَّفُّ التَّاسِعُ', modelEn: 'Sami Yusuf, Year 9' },
      { core: true, ar: 'النَّشَاطُ', en: 'The activity', model: 'نَادِي الشِّطْرَنْجِ', modelEn: 'chess club' },
      { core: true, ar: 'الأَيَّامُ المُنَاسِبَةُ', en: 'Days that suit you', model: 'الإِثْنَيْنُ وَالخَمِيسُ', modelEn: 'Monday and Thursday' },
      { core: true, ar: 'مُسْتَوَاكَ', en: 'Your level', model: 'مُبْتَدِئٌ', modelEn: 'beginner' },
      { core: true, ar: 'هِوَايَةٌ أُخْرَى عِنْدَكَ', en: 'Another hobby you have', model: 'القِرَاءَةُ', modelEn: 'reading' },
      { core: true, ar: 'كَمْ سَاعَةً فِي الأُسْبُوعِ تُمَارِسُ الرِّيَاضَةَ؟', en: 'Hours of sport per week', model: 'ثَلَاثُ سَاعَاتٍ', modelEn: 'three hours' },
      { ar: 'مَهَارَةٌ تَسْتَطِيعُ أَنْ تُعَلِّمَهَا لِلْآخَرِينَ', en: 'A skill you could teach others', model: 'الرَّسْمُ بِالأَلْوَانِ المَائِيَّةِ', modelEn: 'watercolour painting' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ أَنْ تُشَارِكَ؟', en: 'ONE sentence: why you want to join', model: 'أُرِيدُ أَنْ أُشَارِكَ لِأَنَّ الشِّطْرَنْجَ يُعَلِّمُنِي التَّفْكِيرَ وَالصَّبْرَ.', modelEn: 'I want to join because chess teaches me to think and be patient.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with urīdu an + verb in -a and a reason.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Boxes 5 and 7 are verbal nouns (al-qirāʾa, ar-rasm).',
  },
  Q2: {
    short: 'an email about your hobbies', title: 'Question 2: my free time', ar: 'رِسَالَةٌ عَنْ هِوَايَاتِي',
    task: 'Your Arabic-speaking friend has asked how you spend your free time. Write an email in Arabic of about 80–90 words. You must include: • your hobbies and how often you do them • something you can or can’t do well • what you did in your free time yesterday • a new hobby you will try, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Frequency words.', 'astaṭīʿu an / lā astaṭīʿu an + verb in -a.', 'A past AND a future sentence.'],
    phrases: [['أَلْعَبُ … مَرَّتَيْنِ فِي الأُسْبُوعِ', 'I play … twice a week'], ['لَا أَسْتَطِيعُ أَنْ … لٰكِنِّي …', 'I can’t … but I …'], ['أَمْسِ لَعِبْنَا / فَازَ فَرِيقُنَا', 'yesterday we played / our team won'], ['سَأُجَرِّبُ هِوَايَةً جَدِيدَةً', 'I will try a new hobby']],
    rubric: [
      ['task', 'سَأَلَكَ صَدِيقُكَ عَنْ وَقْتِ فَرَاغِكَ. اكْتُبْ لَهُ رِسَالَةً (٨٠–٩٠ كَلِمَةً).', 'Your friend asked about your free time: write to him (80–90 words).'],
      ['1', 'مَا هِوَايَاتُكَ؟ وَكَمْ مَرَّةً تُمَارِسُهَا؟', 'Your hobbies; how often'],
      ['2', 'مَاذَا تَسْتَطِيعُ / لَا تَسْتَطِيعُ أَنْ تَفْعَلَ جَيِّدًا؟', 'Something you can / can’t do well'],
      ['3', 'مَاذَا فَعَلْتَ فِي وَقْتِ فَرَاغِكَ أَمْسِ؟', 'What you did in your free time yesterday'],
      ['4', 'مَا الهِوَايَةُ الجَدِيدَةُ الَّتِي سَتُجَرِّبُهَا؟ اسْأَلْ صَدِيقَكَ سُؤَالًا.', 'A new hobby you will try; ask a question'],
    ],
    qwords: 'مَا (what) · كَمْ مَرَّةً (how often) · مَاذَا (what) — bullet 2 is about ABILITY, bullet 3 is PAST, bullet 4 is FUTURE + a question',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'أُحِبُّ ______ ، وَأُمَارِسُهَا ______ .', 'I like …, and I do it …'],
      ['2', 'أَسْتَطِيعُ أَنْ ______ ، لٰكِنِّي لَا أَسْتَطِيعُ أَنْ ______ .', 'I can …, but I can’t …'],
      ['3', 'أَمْسِ ______ مَعَ ______ .', 'Yesterday I … with …'],
      ['4', 'فِي الصَّيْفِ سَأُجَرِّبُ ______ . وَأَنْتَ، ______ ؟', 'In summer I will try … And you, …?'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Zaid, how are you? You asked about my hobbies. I love football and play it with the school team twice a week. I like reading too, and read every night before bed. I can’t swim well, but I am learning now. Yesterday we played a match and our team won three–one! Sport is important because it is good for your health. In the summer I will learn photography. And you — what is your hobby? Goodbye, Sami.”',
      find: ['أَلْعَبُهَا … مَرَّتَيْنِ', 'لَا أَسْتَطِيعُ أَنْ أَسْبَحَ', 'فَازَ فَرِيقُنَا', 'سَأَتَعَلَّمُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Zaid, greetings. You asked how I spend my free time. I am very busy: I play football with the school team twice a week, and learn the oud on Saturdays with a Syrian teacher. As for the evenings, I love reading detective novels, because they make me forget the pressure of school. Yesterday was a great day: our team won the tournament semi-final, and I scored the third goal with a header! It is true I have a lot of activities, but I organise my time well. In the summer holiday I’ll try a new hobby — photography. And you, do you do any sport? Best wishes, Sami.”',
      find: ['وَأَتَعَلَّمُ العَزْفَ', 'أَمَّا فِي المَسَاءِ فَأُحِبُّ', 'سَجَّلْتُ الهَدَفَ', 'صَحِيحٌ أَنَّ … غَيْرَ أَنِّي'],
    },
  },
  Q3: {
    a: { title: 'هِوَايَتِي المُفَضَّلَةُ', en: 'My favourite hobby', bullets: 'مَا هِوَايَتُكَ؟ وَكَمْ مَرَّةً تُمَارِسُهَا؟ · هِوَايَاتٌ وَرِيَاضَاتٌ أُخْرَى · كَيْفَ بَدَأْتَ؟ وَإِنْجَازٌ أَوْ ذِكْرَى · لِمَاذَا هِيَ مُهِمَّةٌ؟ وَخُطَطُكَ', bulletsEn: 'Your hobby and how often · other hobbies and sports · how you started; an achievement or memory · why it matters; your plans' },
    b: { title: 'وَقْتُ الفَرَاغِ: بَيْنَ الشَّاشَةِ وَالحَيَاةِ', en: 'Free time: between the screen and real life', bullets: 'كَيْفَ يَقْضِي الشَّبَابُ وَقْتَ فَرَاغِهِمْ؟ · المَاضِي وَالحَاضِرُ · تَجْرِبَةٌ مِنْ أُسْرَتِكَ أَوْ مَدْرَسَتِكَ · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'How young people spend free time · past and present · an experience from your family or school · your opinion and suggestion' },
    plan: [
      'Present — your hobby with a verbal noun and frequency (kulla yawm, marratayn …).',
      'Other activities — astaṭīʿu an … / lā astaṭīʿu an …; Stretch: ammā … fa-.',
      'Past — how you started (ʿindamā …) and an achievement (shāraktu, fuztu …).',
      'Why it matters + future — li-annahā …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'أَسْبَحُ مَرَّتَيْنِ فِي الأُسْبُوعِ.', en: 'present: I swim twice a week.' },
      { ar: 'بَدَأْتُ الرَّسْمَ عِنْدَمَا كُنْتُ فِي الثَّامِنَةِ.', en: 'past: I started drawing when I was eight.' },
      { ar: 'سَأُجَرِّبُ التَّصْوِيرَ فِي الصَّيْفِ.', en: 'future: I will try photography in the summer.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Many hobbies, but drawing is my favourite: almost every day after homework, nature and animals in watercolour; it relaxes me and makes me happy, and I hang my pictures on my bedroom walls → sport too: swimming twice a week at the club, walking with Mum on Fridays; not football, but I love volleyball and play it with my friends at school → started drawing at eight; last year a school competition — a big autumn tree — first place, and my family was proud, and the teacher hung my picture in the school library → hobbies matter because they teach patience; I want to study art and will paint big pictures for exhibitions.', find: ['أَرْسُمُ كُلَّ يَوْمٍ', 'مَرَّتَيْنِ فِي الأُسْبُوعِ', 'بَدَأْتُ الرَّسْمَ عِنْدَمَا', 'سَأَرْسُمُ'], notes: 'Core model (a girl writing — saʿīda): verbal nouns, frequency, lā uḥibbu … lākinnī, a past achievement, an opinion and a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Three years ago I spent all my free time on my phone, moving aimlessly from video to video; then my uncle gave me an old camera and everything changed — I began to see things around me with new eyes → today photography is my favourite hobby: every Saturday with a group of young photographers, walking for hours through parks and markets in search of the perfect shot; as for school days, I swim twice a week because it clears my mind and helps me sleep well before exams → my proudest moment: last spring I entered a photo of my grandfather working in his garden in a national youth competition; the judges chose it among the top ten and it was shown at an exhibition in London → it is true hobbies take time I could spend studying, but they taught me patience and observation; “if my uncle hadn’t given me that camera, I would still be wasting my time in front of a screen”.', find: ['كُنْتُ أَقْضِي … أَتَنَقَّلُ', 'بَحْثًا عَنِ', 'وَعُرِضَتْ فِي مَعْرِضٍ', 'لَوْ لَمْ يُهْدِنِي … لَكُنْتُ'], notes: 'Full-mark model: kuntu + present + ḥāl, fa- result, baḥthan ʿan, ammā … fa-, a superlative (akthar laḥẓa), wa-huwa yaʿmalu (ḥāl), a passive verb, a concession and law lam … la-kuntu.' },
      { which: 'ب', level: 'Full', subtitle: 'screens or real life?', text: Q3B_FULL, en: 'Free time has changed greatly: studies say a teenager spends over six hours a day on screens, while sports and arts activities fall year after year → in the past children played in streets and squares and made their own toys; as for today, each one sits in their room with their phone, even when friends visit, sitting together each looking at their own screen → in my family: my little brother spent whole holidays on video games until Dad signed him up for a basketball club; at first he refused, but now he looks forward to training, has new friends and sleeps much better → it is true some games are good for thinking, but the body needs movement and the soul needs people, laughter and fresh air; “if schools offered free after-school activities, every student would find a hobby that keeps them away from the screen”.', find: ['بَيْنَمَا تَقِلُّ', 'أَمَّا اليَوْمَ فَيَجْلِسُ', 'حَتَّى سَجَّلَهُ أَبِي', 'لَوْ وَفَّرَتِ … لَوَجَدَ'], notes: 'Full-mark model for the Stretch title: tushīru ilā anna, baynamā, ʿāman baʿda ʿām, kāna + present vs ammā … fa-, ḥattā, a family example, a concession and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; hobbies as verbal nouns.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: frequency + astaṭīʿu an + verb in -a.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: ammā … fa-, a concession or law … la-.' },
  ],
};

module.exports = { speak, write };
