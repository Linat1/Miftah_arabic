'use strict';
/* Exam-practice data · TB-L01 · Identity and Personal Profiles (pronouns; nominal sentences; gender; nisba adjectives). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'B', n: 1, short: 'Identity and Personal Profiles', arShort: 'الهُوِيَّةُ', fileTitle: 'Identity_and_Personal_Profiles', title: 'Identity and Personal Profiles', ar: 'الهُوِيَّةُ وَالمَلَفَّاتُ الشَّخْصِيَّةُ', icon: 'FaIdCard', grammar: 'pronouns; nominal sentences; gender; nationality adjectives (nisba)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: introduce yourself fully — name, age, birthday, nationality, home, languages — and talk about who you are, in all three time frames.',
  words: [
    w(1, 'اسْمِي …', 'my name is …', [['his', 'اسْمُهُ'], ['her', 'اسْمُهَا'], ['your (m./f.)', 'اسْمُكَ · اسْمُكِ']]),
    w(2, 'أَسْكُنُ فِي …', 'I live in …', [['he', 'يَسْكُنُ'], ['she', 'تَسْكُنُ'], ['they', 'يَسْكُنُونَ']]),
    w(3, 'وُلِدْتُ فِي …', 'I was born in …', [['he', 'وُلِدَ'], ['she', 'وُلِدَتْ'], ['they', 'وُلِدُوا']]),
    w(4, 'أَتَكَلَّمُ', 'I speak (a language)', [['he', 'يَتَكَلَّمُ'], ['she', 'تَتَكَلَّمُ'], ['they', 'يَتَكَلَّمُونَ']]),
    w(5, 'عُمْرِي … سَنَةً', 'I am … years old', [['his', 'عُمْرُهُ'], ['her', 'عُمْرُهَا'], ['your', 'عُمْرُكَ · عُمْرُكِ']]),
    w(6, 'عِيدُ مِيلَادِي', 'my birthday', [['his', 'عِيدُ مِيلَادِهِ'], ['her', 'عِيدُ مِيلَادِهَا']]),
    w(7, 'بِرِيطَانِيٌّ', 'British', [['m.', 'بِرِيطَانِيٌّ'], ['f.', 'بِرِيطَانِيَّةٌ'], ['pl.', 'بِرِيطَانِيُّونَ']], { tag: 'nisba: m. · f. · pl.' }),
    w(8, 'مِصْرِيٌّ', 'Egyptian', [['m.', 'مِصْرِيٌّ'], ['f.', 'مِصْرِيَّةٌ'], ['pl.', 'مِصْرِيُّونَ']], { tag: 'nisba: m. · f. · pl.' }),
    w(9, 'عَرَبِيٌّ', 'Arab, Arabic', [['m.', 'عَرَبِيٌّ'], ['f.', 'عَرَبِيَّةٌ'], ['pl.', 'عَرَبٌ']]),
    w(10, 'طَالِبٌ', 'a student', [['m.', 'طَالِبٌ'], ['f.', 'طَالِبَةٌ'], ['pl.', 'طُلَّابٌ · طَالِبَاتٌ']]),
    w(11, 'أَصْلِي مِنْ …', 'my family comes from …', [['his', 'أَصْلُهُ'], ['her', 'أَصْلُهَا']], { tag: 'origin' }),
    w(12, 'لُغَةٌ', 'a language', [['sg.', 'لُغَةٌ'], ['pl.', 'لُغَاتٌ']]),
  ],
  words1: { eyebrow: 'Language bank · me, him, her (I · he · she · they)', title: 'Who am I?', ar: 'مَنْ أَنَا؟', notes: 'LANGUAGE BANK (2 min) — attached pronouns: -ī (my), -hu (his), -hā (her), -ka / -ki (your m. / f.). Nominal sentences need no verb “to be”: أَنَا طَالِبٌ · هِيَ مِصْرِيَّةٌ.' },
  words2: { eyebrow: 'Language bank · nationality and identity (m. · f. · pl.)', title: 'Where are you from?', ar: 'مِنْ أَيْنَ أَنْتَ؟', notes: 'LANGUAGE BANK (2 min) — the nisba: country + -iyy (m.) / -iyya (f.): مِصْرُ → مِصْرِيٌّ / مِصْرِيَّةٌ. Plural of people: مِصْرِيُّونَ. A girl always uses the feminine: أَنَا بِرِيطَانِيَّةٌ وَطَالِبَةٌ.' },
  checkCore: 'gave name, age, nationality and home in full sentences',
  checkDevelop: 'used the right gender (ṭālib / ṭāliba, -iyy / -iyya) and added a detail',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'joining a club', title: 'Role play A — Registering at a youth club', ar: 'فِي نَادِي الشَّبَابِ', you: 'a new member', them: 'the club secretary',
      tasks: [
        { core: true, ex: 'أَهْلًا! مَا اسْمُكَ الكَامِلُ؟', task: 'Give your full name.', help: 'اسْمِي …', model: 'اسْمِي آدَمُ يُوسُفُ عَلِيٌّ.', modelEn: 'My name is Adam Yusuf Ali.' },
        { core: true, ex: 'كَمْ عُمْرُكَ؟', task: 'Say how old you are.', help: 'عُمْرِي … سَنَةً', model: 'عُمْرِي خَمْسَ عَشْرَةَ سَنَةً.', modelEn: 'I am fifteen years old.' },
        { core: true, ex: 'مَتَى عِيدُ مِيلَادِكَ؟', task: 'Give the date of your birthday.', help: 'عِيدُ مِيلَادِي فِي …', model: 'عِيدُ مِيلَادِي فِي العَاشِرِ مِنْ مَارِسَ.', modelEn: 'My birthday is on the tenth of March.' },
        { core: true, ex: 'أَيْنَ تَسْكُنُ؟', task: 'Say where you live.', help: 'أَسْكُنُ فِي …', model: 'أَسْكُنُ فِي بَرْمِنْغْهَامَ، فِي شَارِعٍ قَرِيبٍ مِنَ النَّادِي.', modelEn: 'I live in Birmingham, on a street near the club.' },
        { core: true, unexpected: true, ex: 'مَا جِنْسِيَّتُكَ؟', task: 'Answer the unexpected question.', help: 'أَنَا … وَأَصْلِي مِنْ …', model: 'أَنَا بِرِيطَانِيٌّ، وَأَصْلِي مِنَ اليَمَنِ.', modelEn: 'I am British, and my family is from Yemen.' },
      ],
      girl: 'مَا اسْمُكِ · كَمْ عُمْرُكِ · مِيلَادِكِ · تَسْكُنِينَ · جِنْسِيَّتُكِ — and she answers: أَنَا بِرِيطَانِيَّةٌ',
      notes: 'Core: nominal sentences (no verb “to be”), numbers 11–19 + sana in the accusative, dates with ordinals, nisba with the right gender.',
    },
    {
      id: 'B', level: 'Core+', setting: 'first day at school', title: 'Role play B — Meeting a new classmate', ar: 'زَمِيلٌ جَدِيدٌ', you: 'a student', them: 'a new student in your class',
      tasks: [
        { core: true, ex: 'مَرْحَبًا، أَنَا جَدِيدٌ هُنَا. مَا اسْمُكَ؟', task: 'Give your name and welcome him.', help: 'أَهْلًا! اسْمِي …', model: 'أَهْلًا وَسَهْلًا! اسْمِي سَلْمَى، وَأَنَا فِي هٰذَا الصَّفِّ مُنْذُ سَنَتَيْنِ.', modelEn: 'Welcome! My name is Salma, and I have been in this class for two years.' },
        { core: true, ex: 'مِنْ أَيْنَ أَنْتِ؟', task: 'Say where you are from.', help: 'أَنَا مِنْ … وَوُلِدْتُ فِي …', model: 'أَنَا مِنْ لَنْدَنَ، لٰكِنِّي وُلِدْتُ فِي القَاهِرَةِ.', modelEn: 'I am from London, but I was born in Cairo.' },
        { ex: '… أَنَا مِنْ تُونِسَ.', task: 'ASK him which languages he speaks.', help: 'أَيَّ لُغَاتٍ …؟', model: 'رَائِعٌ! أَيَّ لُغَاتٍ تَتَكَلَّمُ؟', modelEn: 'Great! Which languages do you speak?' },
        { ex: 'العَرَبِيَّةَ وَالفَرَنْسِيَّةَ. وَأَنْتِ؟', task: 'Say which languages you speak and how well.', help: 'أَتَكَلَّمُ … جَيِّدًا وَ… قَلِيلًا', model: 'أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ جَيِّدًا، وَالعَرَبِيَّةَ قَلِيلًا، لٰكِنِّي أَتَعَلَّمُهَا الآنَ.', modelEn: 'I speak English well and Arabic a little, but I am learning it now.' },
        { unexpected: true, ex: 'مَنْ مُعَلِّمُ العَرَبِيَّةِ؟', task: 'Answer the unexpected question (describe a person).', help: 'اسْمُهُ / اسْمُهَا … وَهُوَ / هِيَ …', model: 'اسْمُهَا الأُسْتَاذَةُ مَرْيَمُ، وَهِيَ لَطِيفَةٌ وَصَبُورَةٌ جِدًّا.', modelEn: 'Her name is Ms Maryam, and she is very kind and patient.' },
      ],
      girl: 'if the new student is a girl: أَنَا جَدِيدَةٌ · مِنْ أَيْنَ أَنْتِ · تَتَكَلَّمِينَ',
      notes: 'Task 3: the CANDIDATE asks. Task 5 needs he / she agreement: هُوَ لَطِيفٌ · هِيَ لَطِيفَةٌ.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a video call', title: 'Role play C — A video call with an exchange partner', ar: 'مُكَالَمَةٌ مَعَ شَرِيكِ التَّبَادُلِ', you: 'a student', them: 'your new exchange partner in Jordan',
      tasks: [
        { ex: 'أَهْلًا! حَدِّثْنِي عَنْ نَفْسِكَ.', task: 'Introduce yourself in two or three sentences.', help: 'اسْمِي … عُمْرِي … أَسْكُنُ …', model: 'اسْمِي عُمَرُ، عُمْرِي سِتَّ عَشْرَةَ سَنَةً، وَأَسْكُنُ مَعَ أُسْرَتِي فِي مَانْشِسْتَرَ.', modelEn: 'My name is Omar, I am sixteen, and I live with my family in Manchester.' },
        { ex: 'هَلْ وُلِدْتَ فِي بِرِيطَانِيَا؟', task: 'Say where you were born and when you moved (past).', help: 'لَا، وُلِدْتُ فِي … وَجِئْنَا إِلَى … عِنْدَمَا …', model: 'لَا، وُلِدْتُ فِي بَغْدَادَ، وَجِئْنَا إِلَى بِرِيطَانِيَا عِنْدَمَا كَانَ عُمْرِي خَمْسَ سَنَوَاتٍ.', modelEn: 'No, I was born in Baghdad, and we came to Britain when I was five.' },
        { ex: 'هَلْ تَشْعُرُ أَنَّكَ بِرِيطَانِيٌّ أَمْ عِرَاقِيٌّ؟', task: 'Give your view with a reason.', help: 'أَشْعُرُ أَنِّي … لِأَنَّ …', model: 'أَشْعُرُ أَنِّي الِاثْنَانِ مَعًا، لِأَنِّي أُحِبُّ ثَقَافَةَ البَلَدَيْنِ.', modelEn: 'I feel I am both, because I love the culture of both countries.' },
        { ex: '… أَنَا اسْمِي لَيْثٌ.', task: 'ASK him two questions about himself.', help: 'كَمْ …؟ وَمَاذَا …؟', model: 'كَمْ عُمْرُكَ يَا لَيْثُ؟ وَمَاذَا تُحِبُّ أَنْ تَفْعَلَ فِي وَقْتِ الفَرَاغِ؟', modelEn: 'How old are you, Laith? And what do you like doing in your free time?' },
        { unexpected: true, ex: 'مَاذَا تُرِيدُ أَنْ تَعْمَلَ فِي المُسْتَقْبَلِ؟', task: 'Answer the unexpected question (future + reason).', help: 'أُرِيدُ أَنْ أَكُونَ … لِأَنَّ …', model: 'أُرِيدُ أَنْ أَكُونَ مُهَنْدِسًا، لِأَنِّي أُحِبُّ الرِّيَاضِيَّاتِ وَالتَّصْمِيمَ.', modelEn: 'I want to be an engineer, because I love maths and design.' },
      ],
      girl: 'حَدِّثِينِي · وُلِدْتِ · تَشْعُرِينَ أَنَّكِ بِرِيطَانِيَّةٌ أَمْ عِرَاقِيَّةٌ · تُرِيدِينَ — she answers مُهَنْدِسَةً',
      notes: 'Develop: a three-part introduction, a past sentence with ʿindamā, anna + pronoun (annī, annaka), two questions, the future.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a youth-ambassador interview', title: 'Role play D — Applying to be a youth ambassador', ar: 'سَفِيرُ الشَّبَابِ', you: 'an applicant', them: 'the interview panel',
      tasks: [
        { ex: 'عَرِّفْنَا بِنَفْسِكَ بِاخْتِصَارٍ.', task: 'Introduce yourself with one detail that makes you special.', help: 'أَنَا … وَمَا يُمَيِّزُنِي أَنِّي …', model: 'أَنَا يُوسُفُ، طَالِبٌ فِي السَّنَةِ الحَادِيَةَ عَشْرَةَ، وَمَا يُمَيِّزُنِي أَنِّي أَتَكَلَّمُ ثَلَاثَ لُغَاتٍ.', modelEn: 'I am Yusuf, a Year 11 student, and what makes me stand out is that I speak three languages.' },
        { ex: 'كَيْفَ أَثَّرَتْ أُسْرَتُكَ فِي شَخْصِيَّتِكَ؟', task: 'Explain an influence from the past.', help: 'عِنْدَمَا كُنْتُ صَغِيرًا كَانَ … فَتَعَلَّمْتُ …', model: 'عِنْدَمَا كُنْتُ صَغِيرًا، كَانَ جَدِّي يَحْكِي لِي قِصَصًا عَنْ فِلَسْطِينَ، فَتَعَلَّمْتُ أَنْ أَعْتَزَّ بِأَصْلِي.', modelEn: 'When I was small, my grandfather told me stories about Palestine, so I learned to be proud of my roots.' },
        { ex: 'هَلْ مِنَ الصَّعْبِ أَنْ تَعِيشَ بَيْنَ ثَقَافَتَيْنِ؟', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ ذٰلِكَ صَعْبٌ أَحْيَانًا، غَيْرَ أَنَّهُ يُعْطِينِي نَظْرَتَيْنِ إِلَى العَالَمِ بَدَلًا مِنْ نَظْرَةٍ وَاحِدَةٍ.', modelEn: 'It is true that it is sometimes hard, but it gives me two views of the world instead of one.' },
        { ex: 'مَا الَّذِي سَتَفْعَلُهُ إِذَا اخْتَرْنَاكَ؟', task: 'Say what you will do (idhā + future).', help: 'إِذَا اخْتَرْتُمُونِي، سَـ…', model: 'إِذَا اخْتَرْتُمُونِي، سَأُنَظِّمُ يَوْمًا ثَقَافِيًّا يُعَرِّفُ الطُّلَّابَ بِبُلْدَانِ زُمَلَائِهِمْ.', modelEn: 'If you choose me, I will organise a culture day that introduces students to their classmates’ countries.' },
        { unexpected: true, ex: 'لَوِ اسْتَطَعْتَ أَنْ تُغَيِّرَ شَيْئًا فِي نَظْرَةِ النَّاسِ إِلَى الشَّبَابِ، فَمَاذَا يَكُونُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوِ اسْتَطَعْتُ، لَـ…', model: 'لَوِ اسْتَطَعْتُ، لَجَعَلْتُ النَّاسَ يَسْمَعُونَ آرَاءَ الشَّبَابِ قَبْلَ أَنْ يَحْكُمُوا عَلَيْهِمْ.', modelEn: 'If I could, I would make people listen to young people’s views before judging them.' },
      ],
      girl: 'عَرِّفِينَا بِنَفْسِكِ · شَخْصِيَّتِكِ · تَعِيشِي · اخْتَرْنَاكِ · اسْتَطَعْتِ — she answers طَالِبَةٌ · صَغِيرَةً · اخْتَرْتُمُونِي (same)',
      notes: 'Stretch: mā yumayyizunī annī …, kāna + present (past habit), a concession, idhā … sa-, law … la-.',
      modelFoot: 'Stretch: annī + nominal sentence, kāna yaḥkī, ṣaḥīḥun anna … ghayra anna, idhā … sa- and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَنَا', aim: 'one full sentence per question',
      qs: [
        { q: 'مَا اسْمُكَ؟ وَكَمْ عُمْرُكَ؟', en: 'What is your name, and how old are you?', start: 'اسْمِي … وَعُمْرِي …', model: 'اسْمِي زَيْنَبُ، وَعُمْرِي أَرْبَعَ عَشْرَةَ سَنَةً.', modelEn: 'My name is Zainab and I am fourteen.' },
        { q: 'أَيْنَ وُلِدْتَ؟', en: 'Where were you born?', start: 'وُلِدْتُ فِي …', model: 'وُلِدْتُ فِي لِيدْزَ، فِي شَمَالِ إِنْجِلْتِرَا.', modelEn: 'I was born in Leeds, in the north of England.' },
        { q: 'مَا جِنْسِيَّتُكَ؟', en: 'What is your nationality?', start: 'أَنَا … / أَنَا … وَأَصْلِي مِنْ …', model: 'أَنَا بِرِيطَانِيَّةٌ، وَأَصْلِي مِنْ بَاكِسْتَانَ.', modelEn: 'I am British, and my family is from Pakistan.' },
        { q: 'أَيَّ لُغَاتٍ تَتَكَلَّمُ؟', en: 'Which languages do you speak?', start: 'أَتَكَلَّمُ … وَ…', model: 'أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالأُرْدِيَّةَ، وَأَتَعَلَّمُ العَرَبِيَّةَ.', modelEn: 'I speak English and Urdu, and I am learning Arabic.' },
        { q: 'صِفْ نَفْسَكَ بِكَلِمَتَيْنِ.', en: 'Describe yourself in two words.', start: 'أَنَا … وَ…', model: 'أَنَا نَشِيطَةٌ وَمَرِحَةٌ.', modelEn: 'I am active and cheerful.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + the right gender = a secure Core answer (models here are a girl’s answers).',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'هُوِيَّتِي', aim: 'two or three sentences, with a reason or a past detail',
      qs: [
        { q: 'حَدِّثْنَا عَنْ مَدِينَتِكَ.', en: 'Tell us about your town.', start: 'أَسْكُنُ فِي … وَهِيَ … فِيهَا …', model: 'أَسْكُنُ فِي بِرِسْتُولَ، وَهِيَ مَدِينَةٌ كَبِيرَةٌ وَجَمِيلَةٌ، فِيهَا نَهْرٌ وَجُسُورٌ قَدِيمَةٌ.', modelEn: 'I live in Bristol; it is a big, beautiful city with a river and old bridges.' },
        { q: 'مَتَى بَدَأْتَ تَتَعَلَّمُ العَرَبِيَّةَ؟ وَلِمَاذَا؟', en: 'When did you start learning Arabic, and why?', start: 'بَدَأْتُ … لِأَنَّ …', model: 'بَدَأْتُ قَبْلَ ثَلَاثِ سَنَوَاتٍ، لِأَنِّي أُرِيدُ أَنْ أَفْهَمَ القُرْآنَ وَأَتَكَلَّمَ مَعَ أَقَارِبِي.', modelEn: 'I started three years ago, because I want to understand the Qur’an and talk to my relatives.' },
        { q: 'مَنْ أَهَمُّ شَخْصٍ فِي حَيَاتِكَ؟', en: 'Who is the most important person in your life?', start: 'أَهَمُّ شَخْصٍ هُوَ / هِيَ … لِأَنَّ …', model: 'أَهَمُّ شَخْصٍ هِيَ أُمِّي، لِأَنَّهَا تُسَاعِدُنِي دَائِمًا وَتُشَجِّعُنِي.', modelEn: 'The most important person is my mum, because she always helps and encourages me.' },
        { q: 'كَيْفَ تُعَرِّفُ نَفْسَكَ عَلَى الإِنْتَرْنِتِ؟', en: 'How do you introduce yourself online?', start: 'أَكْتُبُ … وَلَا أَكْتُبُ …', model: 'أَكْتُبُ اسْمِيَ الأَوَّلَ وَهِوَايَاتِي فَقَطْ، وَلَا أَكْتُبُ عُنْوَانِي، لِأَنَّ ذٰلِكَ خَطِيرٌ.', modelEn: 'I only write my first name and hobbies, and I don’t write my address, because that is dangerous.' },
        { q: 'كَيْفَ تَغَيَّرْتَ مُنْذُ كُنْتَ صَغِيرًا؟', en: 'How have you changed since you were small?', start: 'كُنْتُ … أَمَّا الآنَ فَأَنَا …', model: 'كُنْتُ خَجُولًا جِدًّا، أَمَّا الآنَ فَأَنَا أَكْثَرُ ثِقَةً، وَأَتَكَلَّمُ أَمَامَ الصَّفِّ.', modelEn: 'I used to be very shy; now I am more confident and speak in front of the class.' },
      ],
      foot: 'Develop: two or three sentences — description, a reason (li-anna), a past sentence and a contrast.',
      modelFoot: 'Description + reason + a past detail = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الهُوِيَّةُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'مَا الَّذِي يَصْنَعُ هُوِيَّةَ الإِنْسَانِ فِي رَأْيِكَ؟', en: 'What makes a person’s identity?', start: 'أَعْتَقِدُ أَنَّ … أَهَمُّ مِنْ …', model: 'أَعْتَقِدُ أَنَّ القِيَمَ وَاللُّغَةَ أَهَمُّ مِنَ المَكَانِ الَّذِي وُلِدْنَا فِيهِ، لِأَنَّهَا تَبْقَى مَعَنَا أَيْنَمَا ذَهَبْنَا.', modelEn: 'I think values and language matter more than where we were born, because they stay with us wherever we go.' },
        { q: 'هَلْ يُمْكِنُ أَنْ يَكُونَ لِلْإِنْسَانِ هُوِيَّتَانِ؟', en: 'Can a person have two identities?', start: 'نَعَمْ، فَأَنَا مَثَلًا …', model: 'نَعَمْ، فَأَنَا مَثَلًا أُشَجِّعُ المُنْتَخَبَ الإِنْجِلِيزِيَّ، وَأَطْبُخُ مَعَ أُمِّي الأَكْلَ السُّودَانِيَّ، وَلَا أَرَى تَنَاقُضًا فِي ذٰلِكَ.', modelEn: 'Yes — I, for example, support the England team and cook Sudanese food with my mum, and I see no contradiction.' },
        { q: 'هَلْ تُعْطِي وَسَائِلُ التَّوَاصُلِ صُورَةً حَقِيقِيَّةً عَنَّا؟', en: 'Does social media give a true picture of us?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا تُظْهِرُ جُزْءًا مِنْ حَيَاتِنَا، غَيْرَ أَنَّ النَّاسَ يَنْشُرُونَ أَجْمَلَ اللَّحَظَاتِ فَقَطْ، فَتَبْدُو حَيَاتُهُمْ مِثَالِيَّةً.', modelEn: 'It is true it shows part of our lives, but people post only their best moments, so their lives look perfect.' },
        { q: 'كَيْفَ كَانَتْ حَيَاةُ وَالِدَيْكَ عِنْدَمَا كَانَا فِي عُمْرِكَ؟', en: 'What was your parents’ life like at your age?', start: 'كَانَ أَبِي … أَمَّا أَنَا فَـ…', model: 'كَانَ أَبِي يَعِيشُ فِي قَرْيَةٍ صَغِيرَةٍ، وَيُسَاعِدُ جَدِّي فِي المَزْرَعَةِ، أَمَّا أَنَا فَأَعِيشُ فِي مَدِينَةٍ كَبِيرَةٍ، وَأَقْضِي وَقْتِي فِي الدِّرَاسَةِ.', modelEn: 'My father lived in a small village and helped my grandfather on the farm; I live in a big city and spend my time studying.' },
        { q: 'لَوْ وُلِدْتَ فِي بَلَدٍ آخَرَ، كَيْفَ تَكُونُ حَيَاتُكَ؟', en: 'If you had been born in another country, what would your life be like?', start: 'لَوْ وُلِدْتُ فِي …، لَـ…', model: 'لَوْ وُلِدْتُ فِي المَغْرِبِ، لَتَكَلَّمْتُ العَرَبِيَّةَ وَالفَرَنْسِيَّةَ بِطَلَاقَةٍ، وَلَكَانَ البَحْرُ قَرِيبًا مِنْ بَيْتِي.', modelEn: 'If I had been born in Morocco, I would speak Arabic and French fluently, and the sea would be near my home.' },
      ],
      foot: 'Stretch: comparatives, a relative clause (alladhī wulidnā fīhi), a concession, kāna + present vs ammā … fa- and law … la-.',
      modelFoot: 'Stretch: ahammu min, aynamā, ṣaḥīḥun anna … ghayra anna, kāna + present, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I gave my name, age, birthday, nationality and home.' },
    { route: 'core', text: 'I used the right gender: ṭālib / ṭāliba, -iyy / -iyya.' },
    { route: 'develop', text: 'I used attached pronouns: ismī, ismuhu, ismuhā.' },
    { route: 'develop', text: 'I added a past sentence (wulidtu, jiʾnā) and a reason.' },
    { route: 'stretch', text: 'I used a concession, ammā … fa- or law … la-.' },
  ],
};
speak.RP[3].tasks[3].help = 'إِذَا اخْتَرْتُمُونِي، سَأُنَظِّمُ …';
speak.RP[3].tasks[4].help = 'لَوِ اسْتَطَعْتُ، لَجَعَلْتُ …';
speak.CONV[2].qs[3].start = 'كَانَ أَبِي … أَمَّا أَنَا فَأَعِيشُ …';
speak.CONV[2].qs[4].start = 'لَوْ وُلِدْتُ فِي …، لَتَكَلَّمْتُ …';

const Q2_CORE = `مَرْحَبًا يَا سَارَةُ،
أَنَا صَدِيقَتُكِ الجَدِيدَةُ مِنْ بِرِيطَانِيَا. اسْمِي مَرْيَمُ، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً. عِيدُ مِيلَادِي فِي الخَامِسِ مِنْ يُونْيُو. أَسْكُنُ فِي مَدِينَةِ لِيسْتَرَ مَعَ أُسْرَتِي. أَنَا بِرِيطَانِيَّةٌ، وَأَصْلِي مِنَ الصُّومَالِ. أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ وَالصُّومَالِيَّةَ، وَأَتَعَلَّمُ العَرَبِيَّةَ فِي المَدْرَسَةِ. أَنَا طَالِبَةٌ مَرِحَةٌ وَنَشِيطَةٌ، وَأُحِبُّ القِرَاءَةَ. فِي المُسْتَقْبَلِ سَأَزُورُكِ فِي عَمَّانَ. وَأَنْتِ، كَمْ عُمْرُكِ؟
مَعَ السَّلَامَةِ،
مَرْيَمُ`;
const Q2_FULL = `عَزِيزَتِي سَارَةُ،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَأَنَا سَعِيدَةٌ جِدًّا لِأَنَّنَا سَنَكُونُ صَدِيقَتَيْنِ بِالمُرَاسَلَةِ. اسْمِي مَرْيَمُ، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً، وَأَسْكُنُ مَعَ وَالِدَيَّ وَأَخَوَيَّ فِي لِيسْتَرَ، وَهِيَ مَدِينَةٌ مُتَنَوِّعَةٌ فِي وَسَطِ إِنْجِلْتِرَا. وُلِدْتُ فِي مُقَدِيشُو، وَجِئْنَا إِلَى بِرِيطَانِيَا عِنْدَمَا كَانَ عُمْرِي ثَلَاثَ سَنَوَاتٍ، لِذٰلِكَ أَشْعُرُ أَنِّي بِرِيطَانِيَّةٌ وَصُومَالِيَّةٌ مَعًا. أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ بِطَلَاقَةٍ، وَالصُّومَالِيَّةَ فِي البَيْتِ، وَبَدَأْتُ أَتَعَلَّمُ العَرَبِيَّةَ قَبْلَ سَنَتَيْنِ. يَقُولُ أَصْدِقَائِي إِنِّي مَرِحَةٌ وَصَبُورَةٌ، وَأُحِبُّ القِرَاءَةَ وَالسِّبَاحَةَ. إِذَا زُرْتُ الأُرْدُنَّ فِي الصَّيْفِ، فَسَأَتَّصِلُ بِكِ لِنَلْتَقِيَ. حَدِّثِينِي عَنْ نَفْسِكِ!
مَعَ مَحَبَّتِي،
مَرْيَمُ`;
const Q3A_CORE = `اسْمِي آدَمُ، وَعُمْرِي سِتَّ عَشْرَةَ سَنَةً. أَنَا طَالِبٌ فِي السَّنَةِ الحَادِيَةَ عَشْرَةَ. أَسْكُنُ فِي لَنْدَنَ مَعَ أَبِي وَأُمِّي وَأُخْتِي الصَّغِيرَةِ. بَيْتُنَا قَرِيبٌ مِنَ المَدْرَسَةِ وَالمَسْجِدِ، فَأَمْشِي إِلَى المَدْرَسَةِ كُلَّ يَوْمٍ.
أَنَا بِرِيطَانِيٌّ، وَأَصْلِي مِنَ المَغْرِبِ. أَتَكَلَّمُ الإِنْجِلِيزِيَّةَ جَيِّدًا، وَأَتَكَلَّمُ الدَّارِجَةَ مَعَ جَدَّتِي. أَدْرُسُ العَرَبِيَّةَ الفُصْحَى فِي المَدْرَسَةِ، وَهِيَ صَعْبَةٌ لٰكِنَّهَا جَمِيلَةٌ.
وُلِدْتُ فِي مَدِينَةِ فَاسَ، وَجِئْنَا إِلَى لَنْدَنَ عِنْدَمَا كَانَ عُمْرِي أَرْبَعَ سَنَوَاتٍ. فِي الصَّيْفِ المَاضِي زُرْتُ فَاسَ مَعَ أُسْرَتِي، وَرَأَيْتُ البَيْتَ الَّذِي وُلِدْتُ فِيهِ. كَانَتِ الزِّيَارَةُ رَائِعَةً، وَتَعَرَّفْتُ إِلَى أَوْلَادِ عَمِّي، وَلَعِبْنَا مَعًا فِي الحَدِيقَةِ كُلَّ مَسَاءٍ.
أَنَا شَخْصٌ هَادِئٌ وَمُجْتَهِدٌ، وَأُحِبُّ كُرَةَ القَدَمِ وَالرَّسْمَ، وَعِنْدِي أَصْدِقَاءُ مِنْ بُلْدَانٍ كَثِيرَةٍ. فِي رَأْيِي، أَنَا مَغْرِبِيٌّ وَبِرِيطَانِيٌّ مَعًا. فِي المُسْتَقْبَلِ سَأَدْرُسُ الهَنْدَسَةَ فِي الجَامِعَةِ، وَسَأَزُورُ المَغْرِبَ كُلَّ سَنَةٍ.`;
const Q3A_FULL = `إِذَا سَأَلَنِي أَحَدٌ «مَنْ أَنْتَ؟» فَلَا أَسْتَطِيعُ أَنْ أُجِيبَ بِكَلِمَةٍ وَاحِدَةٍ. اسْمِي آدَمُ، وَعُمْرِي سِتَّ عَشْرَةَ سَنَةً، وَأَنَا طَالِبٌ فِي مَدْرَسَةٍ ثَانَوِيَّةٍ فِي لَنْدَنَ، لٰكِنَّ قِصَّتِي بَدَأَتْ بَعِيدًا مِنْ هُنَا، فِي أَزِقَّةِ فَاسَ القَدِيمَةِ.
وُلِدْتُ هُنَاكَ، وَجِئْنَا إِلَى بِرِيطَانِيَا عِنْدَمَا كَانَ عُمْرِي أَرْبَعَ سَنَوَاتٍ. كَانَتْ جَدَّتِي تُكَلِّمُنِي بِالدَّارِجَةِ كُلَّ مَسَاءٍ عَلَى الهَاتِفِ، فَلَمْ أَنْسَ لُغَتِي، أَمَّا أَصْدِقَائِي فِي المَدْرَسَةِ فَعَلَّمُونِي لَهْجَةَ لَنْدَنَ وَحُبَّ الكْرِيكِيتِ! وَهٰكَذَا كَبِرْتُ بِلُغَتَيْنِ وَعَادَاتٍ مِنْ عَالَمَيْنِ.
فِي الصَّيْفِ المَاضِي زُرْتُ فَاسَ لِأَوَّلِ مَرَّةٍ مُنْذُ سَنَوَاتٍ، فَشَعَرْتُ أَنِّي فِي بَيْتِي وَغَرِيبٌ فِي الوَقْتِ نَفْسِهِ؛ فَالنَّاسُ رَحَّبُوا بِي بِحَرَارَةٍ، لٰكِنَّهُمْ ضَحِكُوا مِنْ لَهْجَتِيَ الإِنْجِلِيزِيَّةِ، وَسَمَّوْنِي «الإِنْجِلِيزِيَّ» طُولَ الرِّحْلَةِ.
صَحِيحٌ أَنَّ العَيْشَ بَيْنَ ثَقَافَتَيْنِ مُرْبِكٌ أَحْيَانًا، غَيْرَ أَنَّهُ جَعَلَنِي أَكْثَرَ انْفِتَاحًا وَتَفَهُّمًا لِلْآخَرِينَ. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَدْرُسَ العَرَبِيَّةَ فِي الجَامِعَةِ، وَلَوْ أَصْبَحْتُ مُعَلِّمًا، لَعَلَّمْتُ طُلَّابِي أَنَّ الهُوِيَّةَ جِسْرٌ لَا جِدَارٌ.`;
const Q3B_FULL = `يَعِيشُ مَلَايِينُ الشَّبَابِ اليَوْمَ بَيْنَ ثَقَافَتَيْنِ؛ فَهُمْ يَتَكَلَّمُونَ لُغَةً فِي البَيْتِ، وَلُغَةً أُخْرَى فِي المَدْرَسَةِ، وَيَحْتَفِلُونَ بِأَعْيَادٍ مِنْ ثَقَافَتَيْنِ مُخْتَلِفَتَيْنِ. وَيَسْأَلُ كَثِيرٌ مِنْهُمْ: إِلَى أَيِّ مَكَانٍ أَنْتَمِي؟
فِي المَاضِي كَانَ النَّاسُ يَقْضُونَ حَيَاتَهُمْ كُلَّهَا فِي المَدِينَةِ الَّتِي وُلِدُوا فِيهَا، فَكَانَتْ هُوِيَّتُهُمْ وَاضِحَةً، أَمَّا اليَوْمَ فَتَنْتَقِلُ الأُسَرُ بَيْنَ البُلْدَانِ، وَيَكْبُرُ الأَطْفَالُ وَهُمْ يَحْمِلُونَ أَكْثَرَ مِنْ ثَقَافَةٍ، وَأَحْيَانًا أَكْثَرَ مِنْ جَوَازِ سَفَرٍ.
أَنَا مِثَالٌ عَلَى ذٰلِكَ؛ وُلِدْتُ فِي بِرِيطَانِيَا لِأَبٍ مِصْرِيٍّ وَأُمٍّ بَاكِسْتَانِيَّةٍ. فِي البِدَايَةِ كُنْتُ أَشْعُرُ أَنِّي لَا أَنْتَمِي إِلَى أَيِّ مَكَانٍ، لٰكِنْ عِنْدَمَا شَارَكْتُ فِي يَوْمٍ ثَقَافِيٍّ فِي مَدْرَسَتِي، وَقَدَّمْتُ أَطْبَاقًا مِنَ البَلَدَيْنِ، اكْتَشَفْتُ أَنَّ هٰذَا التَّنَوُّعَ كَنْزٌ، فَقَدْ جَاءَ عَشَرَاتُ الطُّلَّابِ يَسْأَلُونَ عَنْ بَلَدَيَّ وَعَادَاتِهِمَا.
صَحِيحٌ أَنَّ الهُوِيَّةَ المُزْدَوِجَةَ قَدْ تُسَبِّبُ حَيْرَةً، غَيْرَ أَنَّهَا تَفْتَحُ أَبْوَابًا كَثِيرَةً لِلتَّعَلُّمِ وَالصَّدَاقَةِ. وَلَوْ تَعَلَّمَ كُلُّ طَالِبٍ شَيْئًا عَنْ ثَقَافَاتِ زُمَلَائِهِ، لَأَصْبَحَتْ مَدَارِسُنَا أَكْثَرَ احْتِرَامًا وَتَفَاهُمًا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a course registration form, write an email introducing yourself to a pen friend, and write an extended piece about who you are or about living between two cultures.',
  lift: [
    { ar: 'وُلِدْتُ فِي … وَجِئْنَا إِلَى … عِنْدَمَا …', en: 'I was born in … and we came to … when …' },
    { ar: 'أَشْعُرُ أَنِّي بِرِيطَانِيَّةٌ وَصُومَالِيَّةٌ مَعًا', en: 'I feel I am British and Somali at the same time' },
    { ar: 'يَقُولُ أَصْدِقَائِي إِنِّي …', en: 'my friends say that I am …' },
  ],
  checkTip: 'Check: the gender of every adjective and nisba that describes you; numbers + sana (khamsa ʿashrata sanatan); no verb “to be” in the present.',
  FORM: {
    title: 'Arabic summer-course registration', ar: 'التَّسْجِيلُ فِي الدَّوْرَةِ الصَّيْفِيَّةِ',
    fields: [
      { core: true, ar: 'الاسْمُ الأَوَّلُ وَاسْمُ العَائِلَةِ', en: 'First name and surname', model: 'مَرْيَمُ حَسَنٌ', modelEn: 'Maryam Hassan' },
      { core: true, ar: 'العُمْرُ', en: 'Age', model: 'خَمْسَ عَشْرَةَ سَنَةً', modelEn: 'fifteen' },
      { core: true, ar: 'تَارِيخُ المِيلَادِ', en: 'Date of birth', model: 'الخَامِسُ مِنْ يُونْيُو', modelEn: '5 June' },
      { core: true, ar: 'مَكَانُ المِيلَادِ', en: 'Place of birth', model: 'مُقَدِيشُو', modelEn: 'Mogadishu' },
      { core: true, ar: 'الجِنْسِيَّةُ', en: 'Nationality', model: 'بِرِيطَانِيَّةٌ', modelEn: 'British' },
      { core: true, ar: 'اللُّغَاتُ الَّتِي تَتَكَلَّمُهَا', en: 'Languages you speak', model: 'الإِنْجِلِيزِيَّةُ وَالصُّومَالِيَّةُ', modelEn: 'English and Somali' },
      { ar: 'صِفَتَانِ تَصِفَانِكَ', en: 'Two adjectives that describe you', model: 'مَرِحَةٌ وَصَبُورَةٌ', modelEn: 'cheerful and patient' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تَتَعَلَّمُ العَرَبِيَّةَ؟', en: 'ONE sentence: why you are learning Arabic', model: 'أَتَعَلَّمُ العَرَبِيَّةَ لِكَيْ أَفْهَمَ القُرْآنَ وَأُسَافِرَ إِلَى البُلْدَانِ العَرَبِيَّةِ.', modelEn: 'I am learning Arabic so that I can understand the Qur’an and travel to Arab countries.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with likay + verb in -a.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Boxes 5 and 7: a girl writes the feminine (biriṭāniyya, maraḥa).',
  },
  Q2: {
    short: 'an email introducing yourself', title: 'Question 2: introduce yourself to a pen friend', ar: 'رِسَالَةُ تَعَارُفٍ',
    task: 'You have a new Arabic-speaking pen friend. Write an email in Arabic of about 80–90 words. You must include: • your name, age and birthday • where you live and your nationality • the languages you speak • your personality, and a plan to meet in the future.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Correct gender for every adjective.', 'A future sentence (sa-).', 'About 80–90 words.'],
    phrases: [['اسْمِي … وَعُمْرِي …', 'my name is … and I am …'], ['أَنَا بِرِيطَانِيَّةٌ وَأَصْلِي مِنْ …', 'I am British and my family is from …'], ['أَتَكَلَّمُ … وَأَتَعَلَّمُ …', 'I speak … and I am learning …'], ['أَنَا … وَ… ', 'I am … and …']],
    rubric: [
      ['task', 'عِنْدَكِ صَدِيقَةٌ جَدِيدَةٌ بِالمُرَاسَلَةِ. اكْتُبِي لَهَا رِسَالَةً (٨٠–٩٠ كَلِمَةً).', 'You have a new pen friend: write to her (80–90 words).'],
      ['1', 'مَا اسْمُكِ؟ وَكَمْ عُمْرُكِ؟ وَمَتَى عِيدُ مِيلَادِكِ؟', 'Name, age, birthday'],
      ['2', 'أَيْنَ تَسْكُنِينَ؟ وَمَا جِنْسِيَّتُكِ؟', 'Where you live; nationality'],
      ['3', 'أَيَّ لُغَاتٍ تَتَكَلَّمِينَ؟', 'Languages you speak'],
      ['4', 'صِفِي شَخْصِيَّتَكِ. وَمَتَى سَتَلْتَقِيَانِ؟', 'Your personality; a plan to meet'],
    ],
    qwords: 'مَا (what) · كَمْ (how many) · مَتَى (when) · أَيْنَ (where) · أَيَّ (which) · صِفِي (describe) — bullet 4 ends with a FUTURE plan',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ،', 'Hello …,'],
      ['1', 'اسْمِي ______ ، وَعُمْرِي ______ . عِيدُ مِيلَادِي فِي ______ .', 'My name is …, I am … My birthday is on …'],
      ['2', 'أَسْكُنُ فِي ______ . أَنَا ______ ، وَأَصْلِي مِنْ ______ .', 'I live in … I am …, and my family is from …'],
      ['3', 'أَتَكَلَّمُ ______ وَ ______ .', 'I speak … and …'],
      ['4', 'أَنَا ______ وَ ______ . فِي المُسْتَقْبَلِ سَأَزُورُكِ فِي ______ .', 'I am … and … In future I will visit you in …'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Sara, I am your new friend from Britain. My name is Maryam and I am fifteen. My birthday is on the fifth of June. I live in Leicester with my family. I am British, and my family is from Somalia. I speak English and Somali, and I am learning Arabic at school. I am a cheerful, active student and I love reading. In the future I will visit you in Amman. And you — how old are you? Goodbye, Maryam.”',
      find: ['عُمْرِي خَمْسَ عَشْرَةَ سَنَةً', 'أَنَا بِرِيطَانِيَّةٌ', 'أَتَكَلَّمُ', 'سَأَزُورُكِ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Sara, greetings. I am very happy that we will be pen friends. My name is Maryam, I am fifteen, and I live with my parents and two brothers in Leicester, a diverse city in the middle of England. I was born in Mogadishu and we came to Britain when I was three, so I feel I am British and Somali at the same time. I speak English fluently and Somali at home, and I started learning Arabic two years ago. My friends say I am cheerful and patient, and I love reading and swimming. If I visit Jordan in the summer, I will call you so we can meet. Tell me about yourself! With love, Maryam.”',
      find: ['وَالِدَيَّ وَأَخَوَيَّ', 'وَجِئْنَا … عِنْدَمَا', 'أَشْعُرُ أَنِّي', 'إِذَا زُرْتُ … فَسَأَتَّصِلُ'],
    },
  },
  Q3: {
    a: { title: 'مَنْ أَنَا؟', en: 'Who am I?', bullets: 'مَعْلُومَاتُكَ الشَّخْصِيَّةُ · أَصْلُكَ وَلُغَاتُكَ · ذِكْرَى أَوْ حَدَثٌ مُهِمٌّ فِي حَيَاتِكَ · شَخْصِيَّتُكَ وَأَحْلَامُكَ', bulletsEn: 'Your personal details · your origins and languages · an important memory or event · your personality and dreams' },
    b: { title: 'الشَّبَابُ بَيْنَ ثَقَافَتَيْنِ', en: 'Young people between two cultures', bullets: 'كَيْفَ يَعِيشُ الشَّبَابُ بَيْنَ ثَقَافَتَيْنِ؟ · المَاضِي وَالحَاضِرُ · تَجْرِبَةٌ شَخْصِيَّةٌ · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'How young people live between two cultures · past and present · a personal experience · your opinion and suggestion' },
    plan: [
      'Present — name, age, school, home, nationality: nominal sentences, the right gender.',
      'Origins + languages — aṣlī min …, atakallamu …; Stretch: ammā … fa-.',
      'Past — wulidtu, jiʾnā … ʿindamā kāna ʿumrī …; a visit or memory.',
      'Personality + future — anā … , sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'أَنَا طَالِبٌ فِي السَّنَةِ الحَادِيَةَ عَشْرَةَ.', en: 'present: I am a student in Year 11.' },
      { ar: 'وُلِدْتُ فِي فَاسَ، وَجِئْنَا إِلَى لَنْدَنَ.', en: 'past: I was born in Fez, and we came to London.' },
      { ar: 'سَأَدْرُسُ الهَنْدَسَةَ فِي الجَامِعَةِ.', en: 'future: I will study engineering at university.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Adam, 16, Year 11; lives in London with Mum, Dad and little sister, near school and the mosque, so he walks to school → British with Moroccan roots; good English, Darija with Grandma, Standard Arabic at school (hard but beautiful) → born in Fez, came to London aged four; last summer visited Fez and saw the house he was born in; met his cousins and played in the garden every evening → calm and hard-working, loves football and drawing, has friends from many countries; feels Moroccan and British together; will study engineering and visit Morocco every year.', find: ['أَنَا طَالِبٌ', 'أَصْلِي مِنَ المَغْرِبِ', 'وُلِدْتُ فِي مَدِينَةِ فَاسَ', 'سَأَدْرُسُ'], notes: 'Core model: clear nominal sentences, nisba agreement, a past paragraph with a relative clause, an opinion and two future plans.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'If someone asks “who are you?”, I can’t answer in one word: Adam, 16, a London secondary student — but my story began in the alleys of old Fez → born there, came to Britain at four; Grandma spoke Darija to me every evening on the phone, so I never forgot my language; as for my school friends, they taught me London slang and a love of cricket! — so I grew up with two languages and customs from two worlds → last summer, back in Fez for the first time in years: at home and a stranger at once — warm welcome, but they laughed at my English accent and called me “the Englishman” all trip → it is true living between two cultures is sometimes confusing, but it made me more open; I want to study Arabic at university; “if I became a teacher, I would teach my students that identity is a bridge, not a wall”.', find: ['إِذَا سَأَلَنِي … فَلَا', 'كَانَتْ جَدَّتِي تُكَلِّمُنِي', 'أَمَّا أَصْدِقَائِي … فَعَلَّمُونِي', 'لَوْ أَصْبَحْتُ … لَعَلَّمْتُ'], notes: 'Full-mark model: idhā … fa-, kāna + present, lam ansa, ammā … fa-, a vivid past paragraph, a concession and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'between two cultures', text: Q3B_FULL, en: 'Millions of young people live between two cultures — one language at home, another at school, festivals from both — and ask “where do I belong?” → in the past people spent their whole life in their birthplace, so identity was clear; as for today, families move between countries and children grow up with more than one culture, sometimes more than one passport → I was born in Britain to an Egyptian father and a Pakistani mother; at first I felt I belonged nowhere, but at my school’s culture day, serving dishes from both countries, I found this diversity is a treasure — dozens of students came asking about both countries → it is true a double identity can confuse, but it opens doors to learning and friendship; “if every student learned about classmates’ cultures, our schools would be more respectful”.', find: ['يَتَكَلَّمُونَ لُغَةً … وَلُغَةً أُخْرَى', 'أَمَّا اليَوْمَ فَتَنْتَقِلُ', 'وُلِدْتُ … لِأَبٍ مِصْرِيٍّ وَأُمٍّ', 'لَوْ تَعَلَّمَ … لَأَصْبَحَتْ'], notes: 'Full-mark model for the Stretch title: a question to the reader, kāna + present vs ammā … fa-, a ḥāl (wa-hum yaḥmilūna), a personal example, a concession and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; age written correctly (… sanatan).' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: every adjective agrees with me (m. / f.).' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: ammā … fa-, a concession or law … la-.' },
  ],
};
write.Q2.phrases[3] = ['يَقُولُ أَصْدِقَائِي إِنِّي …', 'my friends say I am …'];

module.exports = { speak, write };
