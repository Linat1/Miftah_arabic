'use strict';
/* Exam-practice data · TC-L06 · Digital World and Communication (verbs with fixed prepositions; verbal nouns; a balanced view). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'C', n: 6, short: 'Digital World and Communication', arShort: 'العَالَمُ الرَّقْمِيُّ', fileTitle: 'Digital_World_Communication', title: 'Digital World and Communication', ar: 'العَالَمُ الرَّقْمِيُّ وَالتَّوَاصُلُ', icon: 'FaLaptop', grammar: 'verbs with fixed prepositions (atafāʿalu maʿa, uʿalliqu ʿalā, ataṣaffaḥu); verbal nouns (istikhdām, tawāṣul); min nāḥiya … wa-min nāḥiya ukhrā' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: talk about phones, apps, social media and online learning — use verbs with their fixed prepositions (أَتَوَاصَلُ مَعَ · أُعَلِّقُ عَلَى), verbal nouns, and give a balanced view (مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى).',
  words: [
    w(1, 'هَاتِفٌ ذَكِيٌّ', 'a smartphone', [['pl.', 'هَوَاتِفُ ذَكِيَّةٌ'], ['a screen', 'شَاشَةٌ · شَاشَاتٌ']]),
    w(2, 'تَطْبِيقٌ', 'an app', [['pl.', 'تَطْبِيقَاتٌ'], ['useful (non-hum. pl.)', 'تَطْبِيقَاتٌ مُفِيدَةٌ']]),
    w(3, 'وَسَائِلُ التَّوَاصُلِ الاجْتِمَاعِيِّ', 'social media', [['a platform', 'مِنَصَّةٌ · مِنَصَّاتٌ']]),
    w(4, 'أَتَوَاصَلُ مَعَ …', 'I keep in touch with …', [['he', 'يَتَوَاصَلُ مَعَ'], ['she', 'تَتَوَاصَلُ مَعَ'], ['noun', 'التَّوَاصُلُ']], { tag: 'verb + maʿa' }),
    w(5, 'أُعَلِّقُ عَلَى …', 'I comment on …', [['he', 'يُعَلِّقُ عَلَى'], ['a comment', 'تَعْلِيقٌ · تَعْلِيقَاتٌ']], { tag: 'verb + ʿalā' }),
    w(6, 'أَتَصَفَّحُ', 'I browse', [['he', 'يَتَصَفَّحُ'], ['the internet', 'الإِنْتَرْنِتُ'], ['a website', 'مَوْقِعٌ · مَوَاقِعُ']]),
    w(7, 'أُحَمِّلُ', 'I download', [['he', 'يُحَمِّلُ'], ['downloading', 'تَحْمِيلٌ']]),
    w(8, 'أَنْشُرُ', 'I post, publish', [['he', 'يَنْشُرُ'], ['a post', 'مَنْشُورٌ · مَنْشُورَاتٌ']]),
    w(9, 'أَبْحَثُ عَنْ …', 'I search for …', [['he', 'يَبْحَثُ عَنْ'], ['a search', 'بَحْثٌ']], { tag: 'verb + ʿan' }),
    w(10, 'اسْتِخْدَامٌ', 'use (verbal noun)', [['verb', 'أَسْتَخْدِمُ · يَسْتَخْدِمُ'], ['excessive use', 'الاسْتِخْدَامُ المُفْرِطُ']]),
    w(11, 'خُصُوصِيَّةٌ · أَمَانٌ', 'privacy · safety', [['safe (m. · f.)', 'آمِنٌ · آمِنَةٌ'], ['a password', 'كَلِمَةُ السِّرِّ']]),
    w(12, 'إِدْمَانٌ', 'addiction', [['addicted (m. · f.)', 'مُدْمِنٌ · مُدْمِنَةٌ'], ['on screens', 'عَلَى الشَّاشَاتِ']]),
  ],
  words1: { eyebrow: 'Language bank · devices and platforms', title: 'Phones, apps, social media', ar: 'الأَجْهِزَةُ وَالتَّطْبِيقَاتُ', notes: 'LANGUAGE BANK (2 min) — non-human plurals: تَطْبِيقَاتٌ مُفِيدَةٌ · هَوَاتِفُ ذَكِيَّةٌ. Verbal nouns turn verbs into topics: أَسْتَخْدِمُ → اسْتِخْدَامُ الهَاتِفِ · أَتَوَاصَلُ → التَّوَاصُلُ.' },
  words2: { eyebrow: 'Language bank · verbs and their prepositions', title: 'With, on, for', ar: 'الأَفْعَالُ وَحُرُوفُ الجَرِّ', notes: 'LANGUAGE BANK (2 min) — learn the verb WITH its preposition: أَتَوَاصَلُ مَعَ · أَتَفَاعَلُ مَعَ · أُعَلِّقُ عَلَى · أَبْحَثُ عَنْ · أَحْصُلُ عَلَى · أَعْتَمِدُ عَلَى.' },
  checkCore: 'said which apps or devices they use and how often',
  checkDevelop: 'used verbs with the right preposition and a verbal noun',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a phone shop', title: 'Role play A — Buying a new phone', ar: 'فِي مَحَلِّ الهَوَاتِفِ', you: 'a customer', them: 'the shop assistant',
      tasks: [
        { core: true, ex: 'أَهْلًا! كَيْفَ أُسَاعِدُكَ؟', task: 'Say what you want.', help: 'أُرِيدُ …', model: 'أُرِيدُ هَاتِفًا ذَكِيًّا جَدِيدًا.', modelEn: 'I want a new smartphone.' },
        { core: true, ex: 'لِمَاذَا تَسْتَخْدِمُ الهَاتِفَ عَادَةً؟', task: 'Say two uses.', help: 'أَسْتَخْدِمُهُ لِـ … وَ…', model: 'أَسْتَخْدِمُهُ لِلتَّوَاصُلِ مَعَ أَصْدِقَائِي، وَلِلدِّرَاسَةِ.', modelEn: 'I use it to keep in touch with friends, and to study.' },
        { core: true, ex: 'هَلْ تُحِبُّ التَّصْوِيرَ؟', task: 'Say what you need.', help: 'نَعَمْ، أَحْتَاجُ إِلَى …', model: 'نَعَمْ، أَحْتَاجُ إِلَى كَامِيرَا جَيِّدَةٍ.', modelEn: 'Yes, I need a good camera.' },
        { core: true, ex: 'هٰذَا الهَاتِفُ مُمْتَازٌ.', task: 'Ask the price.', help: 'كَمْ …؟', model: 'كَمْ ثَمَنُهُ مِنْ فَضْلِكَ؟', modelEn: 'How much is it, please?' },
        { core: true, unexpected: true, ex: 'كَمْ سَاعَةً تَسْتَخْدِمُ الهَاتِفَ كُلَّ يَوْمٍ؟', task: 'Answer the unexpected question.', help: 'أَسْتَخْدِمُهُ … سَاعَاتٍ', model: 'أَسْتَخْدِمُهُ ثَلَاثَ سَاعَاتٍ تَقْرِيبًا.', modelEn: 'I use it for about three hours.' },
      ],
      girl: 'أُسَاعِدُكِ · تَسْتَخْدِمِينَ · تُحِبِّينَ',
      notes: 'Core: verbal nouns after li- (lit-tawāṣuli, lid-dirāsa), aḥtāju ilā + genitive, thalātha sāʿātin (3–10 + plural).',
    },
    {
      id: 'B', level: 'Core+', setting: 'a family rule', title: 'Role play B — No phones at dinner?', ar: 'الهَاتِفُ عَلَى المَائِدَةِ', you: 'a teenager', them: 'your parent',
      tasks: [
        { core: true, ex: 'لِمَاذَا تَنْظُرُ إِلَى هَاتِفِكَ طُولَ الوَقْتِ؟', task: 'Explain what you are doing.', help: 'أَتَوَاصَلُ مَعَ … / أَبْحَثُ عَنْ …', model: 'أَتَوَاصَلُ مَعَ صَدِيقِي عَنِ الوَاجِبِ.', modelEn: 'I’m messaging my friend about the homework.' },
        { core: true, ex: 'مِنَ اليَوْمِ: لَا هَوَاتِفَ عَلَى المَائِدَةِ!', task: 'Give your opinion.', help: 'هٰذِهِ فِكْرَةٌ … لِأَنَّ …', model: 'هٰذِهِ فِكْرَةٌ جَيِّدَةٌ، لِأَنَّنَا نَتَكَلَّمُ أَكْثَرَ.', modelEn: 'That’s a good idea, because we talk more.' },
        { ex: 'وَأَنْتَ تَسْهَرُ عَلَى الهَاتِفِ أَيْضًا.', task: 'ASK for a compromise.', help: 'هَلْ يُمْكِنُ أَنْ …؟', model: 'هَلْ يُمْكِنُ أَنْ أَسْتَخْدِمَهُ حَتَّى السَّاعَةِ التَّاسِعَةِ فَقَطْ؟', modelEn: 'Could I use it only until nine o’clock?' },
        { ex: 'لِمَاذَا تَحْتَاجُ إِلَيْهِ فِي المَسَاءِ؟', task: 'Give two reasons (verbal nouns).', help: 'لِلـ … وَلِلـ …', model: 'لِمُرَاجَعَةِ الدُّرُوسِ عَلَى مِنَصَّةِ المَدْرَسَةِ، وَلِلتَّوَاصُلِ مَعَ مَجْمُوعَةِ المَشْرُوعِ.', modelEn: 'To revise on the school platform, and to keep in touch with my project group.' },
        { unexpected: true, ex: 'مَاذَا فَعَلْتَ عَلَى الهَاتِفِ أَمْسِ؟', task: 'Answer the unexpected question (past).', help: 'أَمْسِ … وَ…', model: 'أَمْسِ شَاهَدْتُ دَرْسًا فِي الرِّيَاضِيَّاتِ، وَعَلَّقْتُ عَلَى صُوَرِ ابْنِ عَمِّي.', modelEn: 'Yesterday I watched a maths lesson and commented on my cousin’s photos.' },
      ],
      girl: 'تَنْظُرِينَ · هَاتِفِكِ · تَسْهَرِينَ · تَحْتَاجِينَ · فَعَلْتِ',
      notes: 'Core+: atawāṣalu maʿa, lā hawātifa (lā of absolute negation), the CANDIDATE asks for a compromise (hal yumkinu an …?), verbal nouns, ʿallaqtu ʿalā in the past.',
    },
    {
      id: 'C', level: 'Develop', setting: 'online learning', title: 'Role play C — Learning online', ar: 'التَّعَلُّمُ عَنْ بُعْدٍ', you: 'an online student', them: 'a researcher from a newspaper',
      tasks: [
        { ex: 'مُنْذُ مَتَى تَدْرُسُ عَلَى الإِنْتَرْنِتِ؟', task: 'Say since when and how.', help: 'أَدْرُسُ … مُنْذُ … عَنْ طَرِيقِ …', model: 'أَدْرُسُ فِي مَدْرَسَةٍ إِلِكْتْرُونِيَّةٍ مُنْذُ سَنَتَيْنِ، عَنْ طَرِيقِ دُرُوسٍ مُبَاشِرَةٍ.', modelEn: 'I have studied at an online school for two years, through live lessons.' },
        { ex: 'كَيْفَ تَتَفَاعَلُ مَعَ المُعَلِّمِ وَالطُّلَّابِ؟', task: 'Describe how you interact.', help: 'أَتَفَاعَلُ مَعَ … عَنْ طَرِيقِ …', model: 'أَتَفَاعَلُ مَعَهُمْ عَنْ طَرِيقِ المُحَادَثَةِ وَالغُرَفِ الجَانِبِيَّةِ، وَأُشَارِكُ الشَّاشَةَ أَحْيَانًا.', modelEn: 'I interact through the chat and breakout rooms, and sometimes share my screen.' },
        { ex: 'مَا أَكْبَرُ فَائِدَةٍ؟', task: 'Give an advantage with an example.', help: 'أَكْبَرُ فَائِدَةٍ … فَمَثَلًا …', model: 'أَكْبَرُ فَائِدَةٍ هِيَ المُرُونَةُ؛ فَمَثَلًا أَسْتَطِيعُ أَنْ أُشَاهِدَ الدَّرْسَ مَرَّةً ثَانِيَةً إِذَا لَمْ أَفْهَمْ.', modelEn: 'The biggest benefit is flexibility — I can rewatch a lesson if I don’t understand.' },
        { ex: 'وَهَلْ هُنَاكَ صُعُوبَاتٌ؟', task: 'Describe a past difficulty.', help: 'فِي البِدَايَةِ … لٰكِنْ …', model: 'فِي البِدَايَةِ شَعَرْتُ بِالوَحْدَةِ، وَانْقَطَعَ الإِنْتَرْنِتُ مَرَّاتٍ، لٰكِنِّي تَعَوَّدْتُ بَعْدَ شَهْرٍ.', modelEn: 'At first I felt lonely and the internet cut out several times, but I got used to it after a month.' },
        { unexpected: true, ex: 'هَلْ سَتَدْرُسُ فِي الجَامِعَةِ عَلَى الإِنْتَرْنِتِ أَيْضًا؟', task: 'Answer the unexpected question (future).', help: 'لَا / نَعَمْ، سَأَدْرُسُ … لِأَنَّ …', model: 'لَا، سَأَدْرُسُ فِي الجَامِعَةِ حُضُورِيًّا، لِأَنِّي أُرِيدُ أَنْ أَتَعَرَّفَ عَلَى أَصْدِقَاءَ جُدُدٍ.', modelEn: 'No, I’ll study at university in person, because I want to meet new friends.' },
      ],
      girl: 'تَدْرُسِينَ · تَتَفَاعَلِينَ · سَتَدْرُسِينَ',
      notes: 'Develop: mundhu + present, ʿan ṭarīqi, atafāʿalu maʿa, an example with fa-mathalan, idhā lam + jussive, a past difficulty, the future with a reason.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a radio phone-in', title: 'Role play D — Should under-16s use social media?', ar: 'وَسَائِلُ التَّوَاصُلِ وَالمُرَاهِقُونَ', you: 'a teenage caller', them: 'the radio presenter',
      tasks: [
        { ex: 'تَقْتَرِحُ الحُكُومَةُ مَنْعَ وَسَائِلِ التَّوَاصُلِ عَمَّنْ هُمْ دُونَ السَّادِسَةَ عَشْرَةَ. مَا رَأْيُكَ؟', task: 'Give a balanced view.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، أَفْهَمُ القَلَقَ مِنَ الإِدْمَانِ وَالتَّنَمُّرِ، وَمِنْ نَاحِيَةٍ أُخْرَى، هِيَ وَسِيلَتُنَا لِلتَّعَلُّمِ وَالتَّعْبِيرِ عَنْ أَنْفُسِنَا.', modelEn: 'On one hand, I understand the worry about addiction and bullying; on the other, it is our way of learning and expressing ourselves.' },
        { ex: 'هَلْ تَعَرَّضْتَ أَنْتَ لِمَوْقِفٍ سَيِّئٍ؟', task: 'Describe an experience and what you did.', help: 'نَعَمْ، مَرَّةً … فَـ…', model: 'نَعَمْ، مَرَّةً كَتَبَ شَخْصٌ مَجْهُولٌ تَعْلِيقًا مُسِيئًا عَلَى صُورَتِي، فَحَظَرْتُهُ، وَأَخْبَرْتُ أُمِّي وَالمَدْرَسَةَ.', modelEn: 'Yes, once a stranger wrote a nasty comment on my photo, so I blocked them and told my mum and the school.' },
        { ex: 'أَلَيْسَ المَنْعُ أَسْهَلَ؟', task: 'Concede and counter.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهُ أَسْهَلُ، غَيْرَ أَنَّ المُرَاهِقِينَ سَيَجِدُونَ طُرُقًا لِلالْتِفَافِ عَلَيْهِ، وَلَنْ يَتَعَلَّمُوا كَيْفَ يَحْمُونَ أَنْفُسَهُمْ.', modelEn: 'It is true it’s easier, but teenagers will find ways round it and won’t learn how to protect themselves.' },
        { ex: 'إِذَنْ مَا البَدِيلُ؟', task: 'Propose two measures.', help: 'يَجِبُ عَلَى … أَنْ … وَعَلَى … أَنْ …', model: 'يَجِبُ عَلَى المَدَارِسِ أَنْ تُعَلِّمَ الأَمَانَ الرَّقْمِيَّ، وَعَلَى الشَّرِكَاتِ أَنْ تَحْذِفَ التَّعْلِيقَاتِ المُسِيئَةَ بِسُرْعَةٍ.', modelEn: 'Schools must teach digital safety, and companies must delete abusive comments quickly.' },
        { unexpected: true, ex: 'لَوْ عِشْتَ بِلَا إِنْتَرْنِتٍ أُسْبُوعًا، كَيْفَ تَكُونُ حَيَاتُكَ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ عِشْتُ …، لَـ…', model: 'لَوْ عِشْتُ بِلَا إِنْتَرْنِتٍ أُسْبُوعًا، لَقَرَأْتُ أَكْثَرَ وَنِمْتُ أَفْضَلَ، لٰكِنِّي لَاشْتَقْتُ إِلَى أَصْدِقَائِي فِي الخَارِجِ.', modelEn: 'If I lived a week without the internet, I’d read more and sleep better — but I’d miss my friends abroad.' },
      ],
      girl: 'رَأْيُكِ · تَعَرَّضْتِ · عِشْتِ · حَيَاتُكِ',
      notes: 'Stretch: a balanced view, verbal nouns (al-idmān, at-tanammur, at-taʿbīr), an incident → fa- actions, a concession with lan, yajibu ʿalā … an … wa-ʿalā … an, law … la-.',
      modelFoot: 'Stretch: balance, a real experience, ṣaḥīḥun anna … ghayra anna, two measures and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَنَا وَالتِّكْنُولُوجْيَا', aim: 'one full sentence per question',
      qs: [
        { q: 'هَلْ عِنْدَكَ هَاتِفٌ ذَكِيٌّ؟', en: 'Do you have a smartphone?', start: 'نَعَمْ، عِنْدِي …', model: 'نَعَمْ، عِنْدِي هَاتِفٌ ذَكِيٌّ وَحَاسُوبٌ مَحْمُولٌ.', modelEn: 'Yes, I have a smartphone and a laptop.' },
        { q: 'مَا تَطْبِيقُكَ المُفَضَّلُ؟', en: 'What is your favourite app?', start: 'تَطْبِيقِي المُفَضَّلُ … لِأَنَّ …', model: 'تَطْبِيقِيَ المُفَضَّلُ تَطْبِيقُ خَرَائِطَ، لِأَنَّهُ مُفِيدٌ جِدًّا.', modelEn: 'My favourite app is a maps app, because it is very useful.' },
        { q: 'مَعَ مَنْ تَتَوَاصَلُ عَلَى الإِنْتَرْنِتِ؟', en: 'Who do you keep in touch with online?', start: 'أَتَوَاصَلُ مَعَ …', model: 'أَتَوَاصَلُ مَعَ أَصْدِقَائِي وَأَقَارِبِي فِي مِصْرَ.', modelEn: 'I keep in touch with my friends and relatives in Egypt.' },
        { q: 'كَمْ سَاعَةً تَسْتَخْدِمُ الشَّاشَاتِ يَوْمِيًّا؟', en: 'How many hours a day do you use screens?', start: 'أَسْتَخْدِمُهَا …', model: 'أَسْتَخْدِمُهَا أَرْبَعَ سَاعَاتٍ تَقْرِيبًا، مَعَ الدِّرَاسَةِ.', modelEn: 'About four hours, including studying.' },
        { q: 'هَلْ تَقْرَأُ الأَخْبَارَ عَلَى الإِنْتَرْنِتِ؟', en: 'Do you read the news online?', start: 'نَعَمْ / لَا، …', model: 'نَعَمْ، أَقْرَأُ الأَخْبَارَ عَلَى مَوْقِعٍ إِخْبَارِيٍّ كُلَّ صَبَاحٍ.', modelEn: 'Yes, I read the news on a news website every morning.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + the right preposition = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'الحَيَاةُ الرَّقْمِيَّةُ', aim: 'two or three sentences, with a reason and a past detail',
      qs: [
        { q: 'كَيْفَ تَسْتَخْدِمُ الإِنْتَرْنِتَ فِي الدِّرَاسَةِ؟', en: 'How do you use the internet for studying?', start: 'أَبْحَثُ عَنْ … وَأُشَاهِدُ …', model: 'أَبْحَثُ عَنِ المَعْلُومَاتِ لِلْمَشَارِيعِ، وَأُشَاهِدُ دُرُوسًا قَصِيرَةً عِنْدَمَا لَا أَفْهَمُ شَيْئًا.', modelEn: 'I search for information for projects and watch short lessons when I don’t understand something.' },
        { q: 'مَا رَأْيُكَ فِي وَسَائِلِ التَّوَاصُلِ الاجْتِمَاعِيِّ؟', en: 'What do you think of social media?', start: 'أَرَاهَا مُفِيدَةً لِـ… لٰكِنَّ …', model: 'أَرَاهَا مُفِيدَةً لِلتَّوَاصُلِ وَمَعْرِفَةِ الأَخْبَارِ، لٰكِنَّهَا تُضَيِّعُ الوَقْتَ إِذَا لَمْ نَنْتَبِهْ.', modelEn: 'I find it useful for keeping in touch and news, but it wastes time if we’re not careful.' },
        { q: 'كَيْفَ كَانَ التَّوَاصُلُ فِي أَيَّامِ وَالِدَيْكَ؟', en: 'How did people communicate in your parents’ day?', start: 'كَانُوا يَكْتُبُونَ … أَمَّا نَحْنُ …', model: 'كَانُوا يَكْتُبُونَ الرَّسَائِلَ وَيَتَّصِلُونَ مِنَ الهَاتِفِ الأَرْضِيِّ، أَمَّا نَحْنُ فَنُرْسِلُ رِسَالَةً صَوْتِيَّةً فِي ثَانِيَةٍ.', modelEn: 'They wrote letters and used landlines; we send a voice note in a second.' },
        { q: 'كَيْفَ تَحْمِي نَفْسَكَ عَلَى الإِنْتَرْنِتِ؟', en: 'How do you protect yourself online?', start: 'لَا أَنْشُرُ … وَأَسْتَخْدِمُ …', model: 'لَا أَنْشُرُ عُنْوَانِي أَوْ رَقْمَ هَاتِفِي، وَأَسْتَخْدِمُ كَلِمَاتِ سِرٍّ قَوِيَّةً.', modelEn: 'I don’t post my address or phone number, and I use strong passwords.' },
        { q: 'صِفْ مَرَّةً سَاعَدَتْكَ فِيهَا التِّكْنُولُوجْيَا.', en: 'Describe a time technology helped you.', start: 'مَرَّةً … فَسَاعَدَنِي …', model: 'مَرَّةً ضِعْتُ فِي مَدِينَةٍ جَدِيدَةٍ، فَسَاعَدَنِي تَطْبِيقُ الخَرَائِطِ عَلَى الوُصُولِ إِلَى الفُنْدُقِ.', modelEn: 'Once I got lost in a new city, and the maps app helped me reach the hotel.' },
      ],
      foot: 'Develop: two or three sentences — verbs with prepositions, a verbal noun and a past example.',
      modelFoot: 'Preposition + verbal noun + past = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'التِّكْنُولُوجْيَا وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ قَرَّبَتِ التِّكْنُولُوجْيَا بَيْنَ النَّاسِ أَمْ أَبْعَدَتْهُمْ؟', en: 'Has technology brought people closer or pushed them apart?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، قَرَّبَتِ البَعِيدَ؛ فَأَرَى جَدَّتِي فِي المَغْرِبِ كُلَّ أُسْبُوعٍ، وَمِنْ نَاحِيَةٍ أُخْرَى، أَبْعَدَتِ القَرِيبَ؛ فَقَدْ يَجْلِسُ أَفْرَادُ الأُسْرَةِ مَعًا وَكُلٌّ مِنْهُمْ يَنْظُرُ إِلَى شَاشَتِهِ.', modelEn: 'It brought the distant near — I see my grandmother in Morocco weekly — but pushed the near away: a family can sit together, each staring at a screen.' },
        { q: 'هَلْ يَجِبُ أَنْ تُمْنَعَ الهَوَاتِفُ فِي المَدَارِسِ؟', en: 'Should phones be banned in schools?', start: 'أَرَى أَنَّهُ … لِأَنَّ …', model: 'أَرَى أَنَّهُ يَجِبُ أَنْ تُمْنَعَ أَثْنَاءَ الحِصَصِ، لِأَنَّهَا تُشَتِّتُ الانْتِبَاهَ، أَمَّا فِي الاسْتِرَاحَةِ فَيُمْكِنُ السَّمَاحُ بِهَا.', modelEn: 'They should be banned in lessons because they distract, but allowed at break.' },
        { q: 'كَيْفَ تَعْرِفُ أَنَّ المَعْلُومَةَ عَلَى الإِنْتَرْنِتِ صَحِيحَةٌ؟', en: 'How do you know online information is true?', start: 'أَتَأَكَّدُ مِنْ … وَأُقَارِنُ …', model: 'أَتَأَكَّدُ مِنْ مَصْدَرِهَا، وَأُقَارِنُهَا بِمَوَاقِعَ مَوْثُوقَةٍ، لِأَنَّ الأَخْبَارَ الكَاذِبَةَ تَنْتَشِرُ أَسْرَعَ مِنَ الصَّحِيحَةِ.', modelEn: 'I check its source and compare it with reliable sites, because fake news spreads faster than true news.' },
        { q: 'هَلِ الشَّبَابُ مُدْمِنُونَ عَلَى الشَّاشَاتِ؟', en: 'Are young people addicted to screens?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ بَعْضَهُمْ يَقْضِي سَاعَاتٍ طَوِيلَةً أَمَامَهَا، غَيْرَ أَنَّ الكِبَارَ لَيْسُوا أَفْضَلَ حَالًا؛ فَأَبِي لَا يَتْرُكُ هَاتِفَهُ حَتَّى فِي العُطْلَةِ!', modelEn: 'Some spend long hours on them, but adults are no better — my dad doesn’t leave his phone even on holiday!' },
        { q: 'كَيْفَ سَيَكُونُ التَّوَاصُلُ بَعْدَ عِشْرِينَ سَنَةً؟', en: 'What will communication be like in twenty years?', start: 'مِنَ المُتَوَقَّعِ أَنْ … وَإِذَا …، فَـ…', model: 'مِنَ المُتَوَقَّعِ أَنْ نَتَوَاصَلَ عَنْ طَرِيقِ النَّظَّارَاتِ الذَّكِيَّةِ، وَإِذَا لَمْ نَضَعْ حُدُودًا، فَقَدْ نَنْسَى كَيْفَ نَتَحَدَّثُ وَجْهًا لِوَجْهٍ.', modelEn: 'We’ll probably communicate through smart glasses, and if we set no limits, we may forget how to talk face to face.' },
      ],
      foot: 'Stretch: a balanced view, a passive (tumnaʿa), evidence, a concession and a conditional.',
      modelFoot: 'Stretch: min nāḥiya …, passive, a reason with a comparison, ṣaḥīḥun anna … ghayra anna, idhā lam … fa-qad — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I said which devices and apps I use, and how often.' },
    { route: 'core', text: 'I used atawāṣalu maʿa correctly.' },
    { route: 'develop', text: 'I used verbs with their prepositions (ʿalā, ʿan, maʿa).' },
    { route: 'develop', text: 'I used a verbal noun (al-istikhdām, at-tawāṣul).' },
    { route: 'stretch', text: 'I gave a balanced view, a concession or a conditional.' },
  ],
};
speak.RP[0].tasks[1].help = 'أَسْتَخْدِمُهُ لِلتَّوَاصُلِ مَعَ … وَلِلدِّرَاسَةِ';
speak.RP[1].tasks[3].help = 'لِمُرَاجَعَةِ … وَلِلتَّوَاصُلِ مَعَ …';
speak.RP[3].tasks[1].help = 'نَعَمْ، مَرَّةً … فَحَظَرْتُهُ …';
speak.RP[3].tasks[4].help = 'لَوْ عِشْتُ …، لَقَرَأْتُ …';
speak.CONV[1].qs[1].start = 'أَرَاهَا مُفِيدَةً لِلتَّوَاصُلِ … لٰكِنَّهَا …';
speak.CONV[2].qs[4].start = 'مِنَ المُتَوَقَّعِ أَنْ … وَإِذَا لَمْ …، فَقَدْ …';

const Q2_CORE = `مَرْحَبًا يَا خَالِدُ،
كَيْفَ حَالُكَ؟ أُرِيدُ أَنْ أُخْبِرَكَ عَنْ حَيَاتِي الرَّقْمِيَّةِ. أَسْتَخْدِمُ هَاتِفِي كُلَّ يَوْمٍ ثَلَاثَ سَاعَاتٍ تَقْرِيبًا. أَتَوَاصَلُ مَعَ أَصْدِقَائِي، وَأُشَاهِدُ دُرُوسًا عَلَى الإِنْتَرْنِتِ. تَطْبِيقِيَ المُفَضَّلُ تَطْبِيقٌ لِتَعَلُّمِ اللُّغَاتِ، لِأَنَّهُ سَهْلٌ وَمُمْتِعٌ. فِي الأُسْبُوعِ المَاضِي نَسِيتُ هَاتِفِي فِي البَيْتِ يَوْمًا كَامِلًا، وَشَعَرْتُ بِالمَلَلِ فِي البِدَايَةِ، لٰكِنِّي قَرَأْتُ كِتَابًا جَمِيلًا. فِي رَأْيِي، الإِنْتَرْنِتُ مُفِيدٌ، لٰكِنْ يَجِبُ أَنْ نُنَظِّمَ الوَقْتَ. فِي المُسْتَقْبَلِ سَأَسْتَخْدِمُ الهَاتِفَ أَقَلَّ.
إِلَى اللِّقَاءِ،
سَامِي`;
const Q2_FULL = `عَزِيزِي خَالِدُ،
سَأَلْتَنِي فِي رِسَالَتِكَ عَنْ حَيَاتِي الرَّقْمِيَّةِ، فَإِلَيْكَ الحَقِيقَةَ: أَقْضِي أَمَامَ الشَّاشَاتِ نَحْوَ أَرْبَعِ سَاعَاتٍ يَوْمِيًّا، نِصْفُهَا لِلدِّرَاسَةِ عَلَى مِنَصَّةِ المَدْرَسَةِ، وَالنِّصْفُ الآخَرُ لِلتَّوَاصُلِ مَعَ الأَصْدِقَاءِ. وَأَكْثَرُ تَطْبِيقٍ أَعْتَمِدُ عَلَيْهِ تَطْبِيقٌ لِلْمُرَاجَعَةِ يَخْتَبِرُنِي فِي المُفْرَدَاتِ كُلَّ مَسَاءٍ، وَقَدْ حَسَّنَ دَرَجَاتِي كَثِيرًا. لٰكِنْ حَدَثَ شَيْءٌ غَرِيبٌ الأُسْبُوعَ المَاضِي؛ فَقَدْ تَعَطَّلَ هَاتِفِي ثَلَاثَةَ أَيَّامٍ، فَاكْتَشَفْتُ كَمْ مِنَ الوَقْتِ كُنْتُ أُضَيِّعُ! مِنْ نَاحِيَةٍ، لَا أَسْتَطِيعُ الاسْتِغْنَاءَ عَنِ الإِنْتَرْنِتِ، وَمِنْ نَاحِيَةٍ أُخْرَى، أَحْتَاجُ إِلَى حُدُودٍ؛ لِذٰلِكَ سَأُطْفِئُ هَاتِفِي بَعْدَ السَّاعَةِ التَّاسِعَةِ.
مَعَ تَحِيَّاتِي،
سَامِي`;
const Q3A_CORE = `التِّكْنُولُوجْيَا مُهِمَّةٌ جِدًّا فِي حَيَاتِي. عِنْدِي هَاتِفٌ ذَكِيٌّ وَحَاسُوبٌ مَحْمُولٌ. أَسْتَخْدِمُ الحَاسُوبَ لِلدِّرَاسَةِ، لِأَنِّي أَدْرُسُ فِي مَدْرَسَةٍ عَلَى الإِنْتَرْنِتِ. أَحْضُرُ الدُّرُوسَ كُلَّ صَبَاحٍ، وَأَتَفَاعَلُ مَعَ المُعَلِّمِينَ وَالطُّلَّابِ.
أَسْتَخْدِمُ الهَاتِفَ لِلتَّوَاصُلِ مَعَ أَصْدِقَائِي وَأُسْرَتِي. جَدَّتِي تَسْكُنُ فِي الأُرْدُنِّ، وَأَتَكَلَّمُ مَعَهَا بِالفِيدْيُو كُلَّ يَوْمِ جُمُعَةٍ، وَهِيَ سَعِيدَةٌ جِدًّا بِذٰلِكَ. أُحِبُّ أَيْضًا تَطْبِيقَاتِ الأَلْعَابِ وَالمُوسِيقَى، لٰكِنِّي لَا أَلْعَبُ كَثِيرًا، لِأَنَّ وَقْتِي مَشْغُولٌ بِالوَاجِبَاتِ وَالرِّيَاضَةِ.
فِي السَّنَةِ المَاضِيَةِ عَمِلْتُ مَشْرُوعًا عَنِ الحَيَوَانَاتِ. بَحَثْتُ عَنِ المَعْلُومَاتِ عَلَى الإِنْتَرْنِتِ، وَشَاهَدْتُ أَفْلَامًا وَثَائِقِيَّةً، ثُمَّ صَنَعْتُ عَرْضًا جَمِيلًا. حَصَلْتُ عَلَى دَرَجَةٍ عَالِيَةٍ، وَكُنْتُ سَعِيدًا جِدًّا.
فِي رَأْيِي، الإِنْتَرْنِتُ مُفِيدٌ، لٰكِنَّ الاسْتِخْدَامَ الكَثِيرَ يَضُرُّ بِالعُيُونِ وَبِالنَّوْمِ. لِذٰلِكَ سَأُغْلِقُ هَاتِفِي قَبْلَ النَّوْمِ بِسَاعَةٍ، وَسَأَمْشِي فِي الحَدِيقَةِ أَكْثَرَ. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَعْمَلَ مُبَرْمِجًا.`;
const Q3A_FULL = `لَا أَسْتَطِيعُ أَنْ أَتَخَيَّلَ يَوْمًا وَاحِدًا بِلَا تِكْنُولُوجْيَا؛ فَهِيَ مَدْرَسَتِي وَمَكْتَبَتِي وَنَافِذَتِي عَلَى العَالَمِ. وَبِمَا أَنِّي أَدْرُسُ فِي مَدْرَسَةٍ إِلِكْتْرُونِيَّةٍ، فَأَنَا أَتَفَاعَلُ مَعَ مُعَلِّمِينَ وَزُمَلَاءَ مِنْ عَشْرِ دُوَلٍ مُخْتَلِفَةٍ دُونَ أَنْ أُغَادِرَ غُرْفَتِي. وَحِينَ أَحْتَاجُ إِلَى مَعْلُومَةٍ، أَبْحَثُ عَنْهَا فِي ثَوَانٍ بَدَلًا مِنْ سَاعَاتٍ فِي المَكْتَبَةِ.
أَمَّا خَارِجَ الدِّرَاسَةِ، فَأَسْتَخْدِمُ وَسَائِلَ التَّوَاصُلِ لِلتَّوَاصُلِ مَعَ أَقَارِبِي المُنْتَشِرِينَ بَيْنَ لَنْدَنَ وَعَمَّانَ وَدُبَيّ، وَأُعَلِّقُ عَلَى صُوَرِهِمْ وَأَخْبَارِهِمْ كَأَنَّنَا نَعِيشُ فِي بَيْتٍ وَاحِدٍ.
غَيْرَ أَنَّ تَجْرِبَةً عِشْتُهَا فِي الصَّيْفِ المَاضِي غَيَّرَتْ نَظْرَتِي؛ فَقَدْ قَضَيْتُ أُسْبُوعًا فِي مُخَيَّمٍ كَشْفِيٍّ بِلَا إِنْتَرْنِتٍ. فِي اليَوْمِ الأَوَّلِ شَعَرْتُ بِالقَلَقِ، لٰكِنِّي بَعْدَ ذٰلِكَ اكْتَشَفْتُ مُتْعَةَ الحَدِيثِ حَوْلَ النَّارِ، وَنِمْتُ أَعْمَقَ مِمَّا نِمْتُ مُنْذُ سَنَوَاتٍ.
صَحِيحٌ أَنَّ التِّكْنُولُوجْيَا نِعْمَةٌ كَبِيرَةٌ، غَيْرَ أَنَّ الإِفْرَاطَ فِي اسْتِخْدَامِهَا يَسْرِقُ مِنَّا الوَقْتَ وَالتَّرْكِيزَ. وَلَوْ خَصَّصَ كُلُّ وَاحِدٍ مِنَّا سَاعَةً يَوْمِيًّا بِلَا شَاشَاتٍ، لَشَعَرْنَا بِفَرْقٍ كَبِيرٍ فِي صِحَّتِنَا وَعَلَاقَاتِنَا.`;
const Q3B_FULL = `أَصْبَحَتْ وَسَائِلُ التَّوَاصُلِ الاجْتِمَاعِيِّ جُزْءًا لَا يَتَجَزَّأُ مِنْ حَيَاةِ المُرَاهِقِينَ؛ فَمُعْظَمُنَا يَفْتَحُ هَاتِفَهُ قَبْلَ أَنْ يَفْتَحَ عَيْنَيْهِ تَمَامًا فِي الصَّبَاحِ. فَهَلْ هِيَ صَدِيقٌ مُفِيدٌ أَمْ عَدُوٌّ خَفِيٌّ؟
مِنْ نَاحِيَةٍ، تُتِيحُ لَنَا هٰذِهِ الوَسَائِلُ التَّعَلُّمَ وَالتَّعْبِيرَ عَنْ آرَائِنَا، وَتَجْمَعُنَا بِأَشْخَاصٍ يُشَارِكُونَنَا الهِوَايَاتِ نَفْسَهَا، كَمَا تُسَاعِدُ المُبْدِعِينَ الصِّغَارَ عَلَى نَشْرِ أَعْمَالِهِمْ. وَمِنْ نَاحِيَةٍ أُخْرَى، تُؤَدِّي المُقَارَنَةُ الدَّائِمَةُ بِالصُّوَرِ المِثَالِيَّةِ إِلَى القَلَقِ وَقِلَّةِ الثِّقَةِ بِالنَّفْسِ، فَضْلًا عَنِ التَّنَمُّرِ الإِلِكْتْرُونِيِّ.
وَقَدْ عَرَفْتُ ذٰلِكَ مِنْ تَجْرِبَةِ صَدِيقَةٍ لِي، كَانَتْ تَنْشُرُ صُوَرَهَا كُلَّ يَوْمٍ وَتَنْتَظِرُ الإِعْجَابَاتِ بِقَلَقٍ. وَعِنْدَمَا كَتَبَ لَهَا أَحَدُهُمْ تَعْلِيقًا جَارِحًا، حَزِنَتْ أَيَّامًا، إِلَى أَنْ قَرَّرَتْ حَذْفَ التَّطْبِيقِ شَهْرًا كَامِلًا، فَعَادَتْ إِلَيْهَا ابْتِسَامَتُهَا، وَأَصْبَحَتْ تَقْضِي وَقْتَهَا فِي الرَّسْمِ وَالقِرَاءَةِ.
صَحِيحٌ أَنَّ المَنْعَ لَيْسَ حَلًّا، غَيْرَ أَنَّ الاسْتِخْدَامَ الوَاعِيَ ضَرُورِيٌّ. وَإِذَا تَعَلَّمْنَا مُنْذُ الصِّغَرِ كَيْفَ نَحْمِي أَنْفُسَنَا، فَسَتُصْبِحُ هٰذِهِ الوَسَائِلُ أَدَاةً بِأَيْدِينَا، لَا قُيُودًا حَوْلَ أَعْنَاقِنَا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a school online-safety form, write an email about your digital life, and write an extended piece about technology in your life or about social media and teenagers.',
  lift: [
    { ar: 'أَتَوَاصَلُ مَعَ أَقَارِبِي وَأُعَلِّقُ عَلَى صُوَرِهِمْ', en: 'I keep in touch with my relatives and comment on their photos' },
    { ar: 'الإِفْرَاطُ فِي اسْتِخْدَامِهَا', en: 'overusing it (lit. excess in its use)' },
    { ar: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', en: 'on one hand … on the other …' },
  ],
  checkTip: 'Check: each verb keeps its preposition (atawāṣalu maʿa, uʿalliqu ʿalā, abḥathu ʿan, aʿtamidu ʿalā); a verbal noun after li- is genitive (lid-dirāsati); non-human plurals take feminine singular (at-taṭbīqāt mufīda).',
  FORM: {
    title: 'Online-safety pledge form', ar: 'اسْتِمَارَةُ الأَمَانِ الرَّقْمِيِّ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالصَّفُّ', en: 'Name and class', model: 'سَامِي خَلِيلٌ، الصَّفُّ العَاشِرُ', modelEn: 'Sami Khalil, Year 10' },
      { core: true, ar: 'الأَجْهِزَةُ الَّتِي تَسْتَخْدِمُهَا', en: 'Devices you use', model: 'هَاتِفٌ ذَكِيٌّ وَحَاسُوبٌ', modelEn: 'a smartphone and a computer' },
      { core: true, ar: 'عَدَدُ السَّاعَاتِ يَوْمِيًّا', en: 'Hours per day', model: 'ثَلَاثُ سَاعَاتٍ', modelEn: 'three hours' },
      { core: true, ar: 'تَطْبِيقُكَ المُفَضَّلُ', en: 'Your favourite app', model: 'تَطْبِيقُ خَرَائِطَ', modelEn: 'a maps app' },
      { core: true, ar: 'لِمَاذَا تَسْتَخْدِمُ الإِنْتَرْنِتَ؟', en: 'What you use the internet for', model: 'لِلدِّرَاسَةِ وَالتَّوَاصُلِ', modelEn: 'studying and keeping in touch' },
      { core: true, ar: 'مَعَ مَنْ تَتَوَاصَلُ؟', en: 'Who you keep in touch with', model: 'مَعَ أَصْدِقَائِي وَأَقَارِبِي', modelEn: 'with my friends and relatives' },
      { ar: 'قَاعِدَةٌ لِلْأَمَانِ تَتْبَعُهَا', en: 'A safety rule you follow', model: 'لَا أَنْشُرُ عُنْوَانِي', modelEn: 'I don’t post my address' },
      { ar: 'جُمْلَةٌ: مَاذَا تَفْعَلُ إِذَا رَأَيْتَ تَعْلِيقًا مُسِيئًا؟', en: 'ONE sentence: what you do if you see an abusive comment', model: 'إِذَا رَأَيْتُ تَعْلِيقًا مُسِيئًا، فَأَحْظُرُ صَاحِبَهُ وَأُخْبِرُ مُعَلِّمِي.', modelEn: 'If I see an abusive comment, I block the person and tell my teacher.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with idhā … fa-.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 5: li- + verbal nouns (lid-dirāsati wat-tawāṣul). Box 6: maʿa — the verb’s preposition.',
  },
  Q2: {
    short: 'an email about your digital life', title: 'Question 2: my digital life', ar: 'حَيَاتِي الرَّقْمِيَّةُ',
    task: 'Your Arabic-speaking friend asked about how you use technology. Write an email in Arabic of about 80–90 words. You must include: • how long and what for you use your phone • your favourite app and why • something that happened recently related to technology • your opinion and what you will change.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Verbs with the right preposition.', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['أَسْتَخْدِمُ هَاتِفِي … سَاعَاتٍ', 'I use my phone for … hours'], ['أَتَوَاصَلُ مَعَ …', 'I keep in touch with …'], ['فِي الأُسْبُوعِ المَاضِي نَسِيتُ / تَعَطَّلَ …', 'last week I forgot / … broke down'], ['فِي المُسْتَقْبَلِ سَأَسْتَخْدِمُ … أَقَلَّ', 'in future I will use … less']],
    rubric: [
      ['task', 'سَأَلَكَ صَدِيقُكَ عَنِ اسْتِخْدَامِكَ لِلتِّكْنُولُوجْيَا. اكْتُبْ رِسَالَةً (٨٠–٩٠ كَلِمَةً).', 'Your friend asked how you use technology: write an email (80–90 words).'],
      ['1', 'كَمْ سَاعَةً تَسْتَخْدِمُ الهَاتِفَ؟ وَلِمَاذَا؟', 'How long and what for you use your phone'],
      ['2', 'مَا تَطْبِيقُكَ المُفَضَّلُ؟ وَلِمَاذَا؟', 'Your favourite app and why'],
      ['3', 'مَاذَا حَدَثَ مُؤَخَّرًا لَهُ عَلَاقَةٌ بِالتِّكْنُولُوجْيَا؟', 'Something recent related to technology'],
      ['4', 'مَا رَأْيُكَ؟ وَمَاذَا سَتُغَيِّرُ؟', 'Your opinion and what you will change'],
    ],
    qwords: 'كَمْ سَاعَةً (how many hours) · لِمَاذَا (why) · مَاذَا حَدَثَ (what happened — PAST) · سَتُغَيِّرُ (will change — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'أَسْتَخْدِمُ هَاتِفِي ______ سَاعَاتٍ، وَأَتَوَاصَلُ مَعَ ______ .', 'I use my phone … hours, and keep in touch with …'],
      ['2', 'تَطْبِيقِيَ المُفَضَّلُ ______ ، لِأَنَّهُ ______ .', 'My favourite app is …, because it is …'],
      ['3', 'فِي الأُسْبُوعِ المَاضِي ______ .', 'Last week …'],
      ['4', 'فِي رَأْيِي ______ . فِي المُسْتَقْبَلِ سَأَسْتَخْدِمُ ______ أَقَلَّ.', 'In my opinion … In future I will use … less.'],
      ['end', 'إِلَى اللِّقَاءِ، ______', 'See you, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Khalid, how are you? I want to tell you about my digital life. I use my phone about three hours a day. I keep in touch with my friends and watch lessons online. My favourite app is a language-learning app, because it is easy and fun. Last week I forgot my phone at home for a whole day; I was bored at first, but I read a lovely book. In my opinion the internet is useful, but we must organise our time. In future I will use my phone less. See you, Sami.”',
      find: ['أَتَوَاصَلُ مَعَ', 'تَطْبِيقٌ لِتَعَلُّمِ', 'نَسِيتُ هَاتِفِي', 'سَأَسْتَخْدِمُ … أَقَلَّ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Khalid, you asked about my digital life, so here’s the truth: I spend about four hours a day on screens — half studying on the school platform, half keeping in touch with friends. The app I rely on most is a revision app that tests my vocabulary every evening, and it has really improved my marks. But something strange happened last week: my phone broke for three days, and I discovered how much time I used to waste! On one hand, I can’t do without the internet; on the other, I need limits — so I’ll switch my phone off after nine. Best wishes, Sami.”',
      find: ['نِصْفُهَا لِلدِّرَاسَةِ', 'أَعْتَمِدُ عَلَيْهِ', 'كُنْتُ أُضَيِّعُ', 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى'],
    },
  },
  Q3: {
    a: { title: 'التِّكْنُولُوجْيَا فِي حَيَاتِي', en: 'Technology in my life', bullets: 'الأَجْهِزَةُ الَّتِي تَسْتَخْدِمُهَا وَكَيْفَ · التَّوَاصُلُ مَعَ الآخَرِينَ · تَجْرِبَةٌ مَعَ التِّكْنُولُوجْيَا · رَأْيُكَ وَخِطَطُكَ', bulletsEn: 'The devices you use and how · keeping in touch with others · an experience with technology · your opinion and plans' },
    b: { title: 'وَسَائِلُ التَّوَاصُلِ الاجْتِمَاعِيِّ: صَدِيقٌ أَمْ عَدُوٌّ؟', en: 'Social media: friend or enemy?', bullets: 'مَكَانَتُهَا فِي حَيَاةِ الشَّبَابِ · فَوَائِدُهَا وَأَضْرَارُهَا · مِثَالٌ مِنَ الوَاقِعِ · رَأْيُكَ', bulletsEn: 'Its place in young people’s lives · benefits and harms · a real example · your opinion' },
    plan: [
      'Devices and study — asta khdimu … lid-dirāsa, atafāʿalu maʿa …; present tense.',
      'Keeping in touch — atawāṣalu maʿa, uʿalliqu ʿalā; Stretch: ka-annanā …',
      'Past — a project or an experience: baḥathtu ʿan, ḥaṣaltu ʿalā, shaʿartu bi-; the result.',
      'Opinion + future — al-istikhdām al-kathīr yaḍurru bi-, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'أَتَفَاعَلُ مَعَ المُعَلِّمِينَ وَالطُّلَّابِ.', en: 'present: I interact with the teachers and students.' },
      { ar: 'بَحَثْتُ عَنِ المَعْلُومَاتِ، وَحَصَلْتُ عَلَى دَرَجَةٍ عَالِيَةٍ.', en: 'past: I searched for information and got a high mark.' },
      { ar: 'سَأُغْلِقُ هَاتِفِي قَبْلَ النَّوْمِ بِسَاعَةٍ.', en: 'future: I will switch my phone off an hour before bed.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Technology is very important in my life: I have a smartphone and a laptop; I use the laptop to study because I attend an online school — lessons every morning, interacting with teachers and students → I use my phone to keep in touch with friends and family; my grandmother lives in Jordan and I video-call her every Friday, and she is very happy about it; I like game and music apps but don’t play much because I’m busy with homework and sport → last year I did a project on animals: I searched online, watched documentaries, then made a nice presentation; I got a high mark and was very happy → the internet is useful, but too much use harms eyes and sleep, so I’ll switch my phone off an hour before bed and walk in the park more; in future I want to be a programmer.', find: ['أَتَفَاعَلُ مَعَ', 'لِلتَّوَاصُلِ مَعَ', 'بَحَثْتُ عَنِ', 'حَصَلْتُ عَلَى'], notes: 'Core model: verbs with fixed prepositions (maʿa, ʿan, ʿalā), li- + verbal noun, a past paragraph with sequence (thumma), a verbal noun as subject (al-istikhdām), a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'I can’t imagine a single day without technology: it is my school, my library and my window on the world; since I study at an online school, I interact with teachers and classmates from ten countries without leaving my room; when I need information, I find it in seconds instead of hours in a library → outside study, I use social media to keep in touch with relatives spread between London, Amman and Dubai, commenting on their photos as if we lived in one house → but last summer changed my view: a week at a scout camp with no internet; on day one I was anxious, then discovered the joy of talking round the fire and slept more deeply than I had for years → technology is a great blessing, but overusing it steals our time and focus; “if each of us kept one screen-free hour a day, we’d feel a big difference in our health and relationships”.', find: ['بِمَا أَنِّي', 'كَأَنَّنَا نَعِيشُ', 'نِمْتُ أَعْمَقَ مِمَّا', 'لَوْ خَصَّصَ … لَشَعَرْنَا'], notes: 'Full-mark model: a triple metaphor, bi-mā anna … fa-, dūna an, ammā … fa-, ka-annanā, ghayra anna as a turn, a comparative with mimmā, al-ifrāṭ fī + verbal noun, law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'friend or enemy?', text: Q3B_FULL, en: 'Social media has become an inseparable part of teenagers’ lives — most of us open our phones before fully opening our eyes; so is it a useful friend or a hidden enemy? → on one hand, it lets us learn and express our views, and connects us with people who share our hobbies, and helps young creators share their work; on the other, constant comparison with perfect images leads to anxiety and low self-confidence, not to mention cyberbullying → I saw this through a friend who posted photos daily and waited anxiously for likes; when someone wrote her a hurtful comment she was sad for days, until she deleted the app for a month and got her smile back, spending her time drawing and reading instead → banning is not the answer, but mindful use is essential; “if we learn from childhood how to protect ourselves, these tools will be in our hands, not chains round our necks”.', find: ['جُزْءًا لَا يَتَجَزَّأُ', 'تُؤَدِّي المُقَارَنَةُ … إِلَى', 'فَضْلًا عَنْ', 'إِذَا تَعَلَّمْنَا … فَسَتُصْبِحُ'], notes: 'Full-mark model for the Stretch title: an idiom, a rhetorical question, a balanced view with verbal nouns, faḍlan ʿan, ilā an, a concession and idhā … fa-sa- with a lā … contrast.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; the right preposition in box 6.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: verbs with prepositions, a past event and a future change.' },
    { route: 'develop', text: 'Q3: four paragraphs with verbal nouns and three time frames.' },
    { route: 'stretch', text: 'Q3: a balanced view, a concession and a conditional.' },
  ],
};
write.Q3.plan[0] = 'Devices and study — astakhdimu … lid-dirāsa, atafāʿalu maʿa …; present tense.';

module.exports = { speak, write };
