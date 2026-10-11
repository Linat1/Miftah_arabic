'use strict';
/* Exam-practice data · AT-A-L04 · Food and Drink — Meals and Preferences (idāfa; adjective agreement; plurals). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { n: 4, short: 'Food and Drink', arShort: 'الطَّعَامُ وَالشَّرَابُ', fileTitle: 'Food_and_Drink_Meals_and_Preferences', title: 'Food and Drink — Meals and Preferences', ar: 'الطَّعَامُ وَالشَّرَابُ — الوَجَبَاتُ وَالتَّفْضِيلَاتُ', icon: 'FaUtensils', grammar: 'idāfa, adjective agreement, plurals' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: say what you eat and drink, give preferences with reasons, describe meals and family food traditions.',
  words: [
    w(1, 'آكُلُ', 'I eat', [['he', 'يَأْكُلُ'], ['she', 'تَأْكُلُ'], ['they', 'يَأْكُلُونَ']]),
    w(2, 'أَشْرَبُ', 'I drink', [['he', 'يَشْرَبُ'], ['she', 'تَشْرَبُ'], ['they', 'يَشْرَبُونَ']]),
    w(3, 'أُفَضِّلُ', 'I prefer', [['he', 'يُفَضِّلُ'], ['she', 'تُفَضِّلُ'], ['they', 'يُفَضِّلُونَ']]),
    w(4, 'أَطْبُخُ', 'I cook', [['he', 'يَطْبُخُ'], ['she', 'تَطْبُخُ'], ['they', 'يَطْبُخُونَ']]),
    w(5, 'وَجْبَةٌ', 'a meal', [['sg.', 'وَجْبَةٌ'], ['dual', 'وَجْبَتَانِ'], ['pl.', 'وَجَبَاتٌ']]),
    w(6, 'طَبَقٌ', 'a dish, a plate', [['sg.', 'طَبَقٌ'], ['dual', 'طَبَقَانِ'], ['pl.', 'أَطْبَاقٌ']]),
    w(7, 'لَذِيذٌ', 'delicious', [['m.', 'لَذِيذٌ'], ['f.', 'لَذِيذَةٌ']]),
    w(8, 'حَارٌّ', 'spicy, hot', [['m.', 'حَارٌّ'], ['f.', 'حَارَّةٌ']]),
    w(9, 'صِحِّيٌّ', 'healthy', [['m.', 'صِحِّيٌّ'], ['f.', 'صِحِّيَّةٌ']]),
    w(10, 'فَاكِهَةٌ', 'fruit', [['sg.', 'فَاكِهَةٌ'], ['pl.', 'فَوَاكِهُ']]),
    w(11, 'عَصِيرُ البُرْتُقَالِ', 'orange juice (idāfa)', null, { tag: 'idāfa' }),
    w(12, 'الفُطُورُ · الغَدَاءُ · العَشَاءُ', 'breakfast · lunch · dinner', null, { tag: 'meals' }),
  ],
  words1: { eyebrow: 'Language bank · food verbs (I · he · she · they) and nouns (sg. · dual · pl.)', title: 'Eat, drink, prefer, cook', ar: 'أَفْعَالُ الطَّعَامِ', notes: 'LANGUAGE BANK (2 min) — four persons for each verb (آكُلُ → تَأْكُلُ). Plurals: وَجْبَةٌ → وَجَبَاتٌ (sound), طَبَقٌ → أَطْبَاقٌ (broken).' },
  words2: { eyebrow: 'Language bank · describing food (m. · f.), idāfa and meals', title: 'Describe it: delicious, spicy, healthy', ar: 'وَصْفُ الطَّعَامِ', notes: 'LANGUAGE BANK (2 min) — adjectives agree: طَبَقٌ لَذِيذٌ / وَجْبَةٌ لَذِيذَةٌ; non-human plurals take the feminine singular: أَطْبَاقٌ لَذِيذَةٌ. Idāfa: عَصِيرُ البُرْتُقَالِ (no “al” on the first word).' },
  checkCore: 'said what they eat / drink in full sentences, with correct verb endings',
  checkDevelop: 'gave a preference with a reason (ufaḍḍilu … li-anna …)',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'dinner at a friend’s house', title: 'Role play A — Dinner at a friend’s house', ar: 'العَشَاءُ عِنْدَ صَدِيقِي', you: 'a guest', them: 'your friend’s mother',
      tasks: [
        { core: true, ex: 'أَهْلًا بِكَ! مَاذَا تُحِبُّ أَنْ تَأْكُلَ؟', task: 'Say what you like to eat.', help: 'أُحِبُّ … وَ …', model: 'أُحِبُّ الدَّجَاجَ وَالأُرْزَ كَثِيرًا.', modelEn: 'I really like chicken and rice.' },
        { core: true, ex: 'هَلْ تَأْكُلُ السَّمَكَ؟', task: 'Say if you eat fish.', help: 'لَا، لَا آكُلُ … لٰكِنِّي …', model: 'لَا، لَا آكُلُ السَّمَكَ، لٰكِنِّي أُحِبُّ اللَّحْمَ.', modelEn: 'No, I don’t eat fish, but I like meat.' },
        { core: true, ex: 'مَاذَا تَشْرَبُ؟', task: 'Say what you would like to drink.', help: 'أَشْرَبُ …، مِنْ فَضْلِكِ', model: 'أَشْرَبُ عَصِيرَ البُرْتُقَالِ، مِنْ فَضْلِكِ.', modelEn: 'I’ll drink orange juice, please.' },
        { core: true, ex: 'مَا فَاكِهَتُكَ المُفَضَّلَةُ؟', task: 'Say your favourite fruit.', help: 'فَاكِهَتِي المُفَضَّلَةُ هِيَ …', model: 'فَاكِهَتِي المُفَضَّلَةُ هِيَ المَانْجُو.', modelEn: 'My favourite fruit is mango.' },
        { core: true, unexpected: true, ex: 'هَلْ أَعْجَبَكَ الطَّعَامُ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، الطَّعَامُ … جِدًّا', model: 'نَعَمْ، الطَّعَامُ لَذِيذٌ جِدًّا، شُكْرًا جَزِيلًا.', modelEn: 'Yes, the food is very delicious, thank you very much.' },
      ],
      girl: 'تُحِبِّينَ · تَأْكُلِينَ · تَشْرَبِينَ · فَاكِهَتُكِ · أَعْجَبَكِ — and the candidate says مِنْ فَضْلِكِ to the mother (feminine)',
      notes: 'Core: full sentences; “I don’t eat” = لَا آكُلُ. The examiner is a woman, so the candidate says مِنْ فَضْلِكِ.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a survey about the school canteen', title: 'Role play B — The canteen survey', ar: 'مَقْصَفُ المَدْرَسَةِ', you: 'a student', them: 'the canteen manager',
      tasks: [
        { core: true, ex: 'فِي أَيِّ سَاعَةٍ تَتَنَاوَلُ الغَدَاءَ؟', task: 'Say what time you have lunch.', help: 'أَتَنَاوَلُ الغَدَاءَ فِي …', model: 'أَتَنَاوَلُ الغَدَاءَ فِي السَّاعَةِ الوَاحِدَةِ إِلَّا رُبْعًا.', modelEn: 'I have lunch at quarter to one.' },
        { core: true, ex: 'مَاذَا تَأْكُلُ عَادَةً فِي المَقْصَفِ؟', task: 'Say what you usually eat there.', help: 'عَادَةً آكُلُ شَطِيرَةَ …', model: 'عَادَةً آكُلُ شَطِيرَةَ جُبْنٍ وَتُفَّاحَةً.', modelEn: 'I usually eat a cheese sandwich and an apple.' },
        { ex: 'مَا رَأْيُكَ فِي طَعَامِ المَقْصَفِ؟', task: 'Give your opinion, with a “but”.', help: '… لَذِيذٌ، لٰكِنَّهُ …', model: 'طَعَامُ المَقْصَفِ لَذِيذٌ، لٰكِنَّهُ غَالٍ قَلِيلًا.', modelEn: 'The canteen food is tasty, but it is a bit expensive.' },
        { ex: '… نَعَمْ، عِنْدَنَا شُورْبَةُ العَدَسِ كُلَّ يَوْمٍ.', task: 'ASK if there are vegetarian dishes (the examiner then answers).', help: 'هَلْ عِنْدَكُمْ أَطْبَاقٌ …؟', model: 'هَلْ عِنْدَكُمْ أَطْبَاقٌ نَبَاتِيَّةٌ؟', modelEn: 'Do you have vegetarian dishes?' },
        { unexpected: true, ex: 'مَاذَا تُرِيدُ أَنْ نُضِيفَ إِلَى القَائِمَةِ؟', task: 'Answer the unexpected question.', help: 'أُرِيدُ أَنْ تُضِيفُوا …', model: 'أُرِيدُ أَنْ تُضِيفُوا سَلَطَةَ فَوَاكِهَ طَازَجَةً، لِأَنَّهَا صِحِّيَّةٌ.', modelEn: 'I would like you to add a fresh fruit salad, because it is healthy.' },
      ],
      girl: 'تَتَنَاوَلِينَ · تَأْكُلِينَ · رَأْيُكِ · تُرِيدِينَ',
      notes: 'Task 4: the CANDIDATE asks. Idāfa in every task: شَطِيرَةُ جُبْنٍ · طَعَامُ المَقْصَفِ · شُورْبَةُ العَدَسِ · سَلَطَةُ فَوَاكِهَ. غَالٍ = expensive (like قَاضٍ).',
    },
    {
      id: 'C', level: 'Develop', setting: 'with your exchange partner', title: 'Role play C — Food at home', ar: 'الطَّعَامُ فِي بَيْتِي', you: 'a host student', them: 'your exchange partner from Jordan',
      tasks: [
        { ex: 'كَمْ وَجْبَةً تَتَنَاوَلُ فِي اليَوْمِ؟ وَمَتَى؟', task: 'Describe your meals and when you eat them.', help: 'ثَلَاثَ وَجَبَاتٍ: الفُطُورَ فِي …', model: 'أَتَنَاوَلُ ثَلَاثَ وَجَبَاتٍ: الفُطُورَ فِي السَّابِعَةِ، وَالغَدَاءَ فِي المَدْرَسَةِ، وَالعَشَاءَ مَعَ أُسْرَتِي.', modelEn: 'I have three meals: breakfast at seven, lunch at school and dinner with my family.' },
        { ex: 'مَا الطَّبَقُ المُفَضَّلُ فِي أُسْرَتِكَ؟', task: 'Name the family’s favourite dish and why.', help: 'الطَّبَقُ المُفَضَّلُ … لِأَنَّ …', model: 'الطَّبَقُ المُفَضَّلُ فِي أُسْرَتِي هُوَ البِرْيَانِي، لِأَنَّ أُمِّي تَطْبُخُهُ بِبَهَارَاتٍ لَذِيذَةٍ.', modelEn: 'My family’s favourite dish is biryani, because my mother cooks it with delicious spices.' },
        { ex: 'هَلْ تُسَاعِدُ فِي المَطْبَخِ؟', task: 'Say how you help in the kitchen (two things).', help: 'أُسَاعِدُ … أَغْسِلُ … وَأُحَضِّرُ …', model: 'نَعَمْ، أُسَاعِدُ أُمِّي أَحْيَانًا؛ أَغْسِلُ الخُضَارَ وَأُحَضِّرُ السَّلَطَةَ.', modelEn: 'Yes, I sometimes help my mother: I wash the vegetables and make the salad.' },
        { ex: '… المَنْسَفُ: لَحْمٌ مَعَ أُرْزٍ وَلَبَنٍ.', task: 'ASK what the famous dish in Jordan is (the examiner then answers).', help: 'مَا الأَكْلَةُ المَشْهُورَةُ …؟', model: 'مَا الأَكْلَةُ المَشْهُورَةُ فِي بَلَدِكُمْ؟', modelEn: 'What is the famous dish in your country?' },
        { unexpected: true, ex: 'مَا الطَّعَامُ الَّذِي لَا تُحِبُّهُ؟ لِمَاذَا؟', task: 'Answer the unexpected question, with a reason.', help: 'لَا أُحِبُّ … لِأَنَّ …', model: 'لَا أُحِبُّ البَصَلَ النِّيءَ، لِأَنَّ طَعْمَهُ قَوِيٌّ جِدًّا.', modelEn: 'I don’t like raw onion, because its taste is very strong.' },
      ],
      girl: 'تَتَنَاوَلِينَ · أُسْرَتِكِ · تُسَاعِدِينَ · تُحِبِّينَهُ',
      notes: 'Develop: numbers with nouns (ثَلَاثَ وَجَبَاتٍ), relative clauses (الطَّعَامُ الَّذِي …), reasons. Any family dish is welcome.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a radio programme about food and culture', title: 'Role play D — Food, family and culture', ar: 'الطَّعَامُ وَالثَّقَافَةُ', you: 'a student guest', them: 'the radio presenter',
      tasks: [
        { ex: 'صِفْ عَادَاتِ أُسْرَتِكَ فِي الطَّعَامِ.', task: 'Describe your family’s food habits, with a preference.', help: 'نُفَضِّلُ … عَلَى …', model: 'نَتَنَاوَلُ العَشَاءَ مَعًا كُلَّ مَسَاءٍ، وَنُفَضِّلُ الأَطْبَاقَ البَيْتِيَّةَ عَلَى الوَجَبَاتِ السَّرِيعَةِ.', modelEn: 'We have dinner together every evening, and we prefer home-made dishes to fast food.' },
        { ex: 'مَاذَا أَكَلْتُمْ فِي آخِرِ مُنَاسَبَةٍ عَائِلِيَّةٍ؟', task: 'Describe food at a recent family occasion (past).', help: 'فِي … أَكَلْنَا … وَحَضَّرَتْ …', model: 'فِي العِيدِ المَاضِي أَكَلْنَا لَحْمَ الخَرُوفِ مَعَ الأُرْزِ، وَحَضَّرَتْ جَدَّتِي حَلَوِيَّاتٍ كَثِيرَةً.', modelEn: 'Last Eid we ate lamb with rice, and my grandmother made lots of sweets.' },
        { ex: 'هَلْ تُفَضِّلُ الطَّعَامَ التَّقْلِيدِيَّ أَمِ الحَدِيثَ؟ لِمَاذَا؟', task: 'Give a preference, a reason and a contrast.', help: 'أُفَضِّلُ … لِأَنَّهُ … لٰكِنِّي …', model: 'أُفَضِّلُ الطَّعَامَ التَّقْلِيدِيَّ لِأَنَّهُ يُذَكِّرُنِي بِبَلَدِ أَجْدَادِي، لٰكِنِّي أُحِبُّ تَجْرِبَةَ أَطْبَاقٍ جَدِيدَةٍ أَيْضًا.', modelEn: 'I prefer traditional food because it reminds me of my grandparents’ country, but I also like trying new dishes.' },
        { ex: 'قَارِنْ بَيْنَ الطَّعَامِ فِي بَلَدَيْنِ تَعْرِفُهُمَا.', task: 'Compare food in two countries.', help: 'بَيْنَمَا … يُفَضِّلُ …', model: 'بَيْنَمَا يُحِبُّ البِرِيطَانِيُّونَ السَّمَكَ وَالبَطَاطَا، يُفَضِّلُ النَّاسُ فِي بَاكِسْتَانَ الأَطْعِمَةَ الحَارَّةَ بِالبَهَارَاتِ.', modelEn: 'While British people like fish and chips, people in Pakistan prefer spicy food with spices.' },
        { unexpected: true, ex: 'لَوْ كُنْتَ طَبَّاخًا، مَاذَا تُحَضِّرُ لِضُيُوفِكَ؟', task: 'Answer the unexpected question (a conditional).', help: 'لَوْ كُنْتُ طَبَّاخًا، لَحَضَّرْتُ …', model: 'لَوْ كُنْتُ طَبَّاخًا، لَحَضَّرْتُ لَهُمْ شُورْبَةً سَاخِنَةً، ثُمَّ دَجَاجًا مَشْوِيًّا مَعَ الأُرْزِ.', modelEn: 'If I were a chef, I would make them a hot soup, then grilled chicken with rice.' },
      ],
      girl: 'أُسْرَتِكِ · تُفَضِّلِينَ · كُنْتِ طَبَّاخَةً · ضُيُوفِكِ',
      notes: 'Stretch: نُفَضِّلُ … عَلَى …, a past occasion, a contrast, a comparison with baynamā and a conditional. Any family occasion is welcome (Eid, a wedding, a birthday).',
      modelFoot: 'Stretch: preference with ʿalā, past narrative, contrast, baynamā and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'طَعَامِي', aim: 'one full sentence per question',
      qs: [
        { q: 'مَاذَا تَأْكُلُ فِي الفُطُورِ؟', en: 'What do you eat for breakfast?', start: 'آكُلُ …', model: 'آكُلُ الخُبْزَ وَالبَيْضَ فِي الفُطُورِ.', modelEn: 'I eat bread and eggs for breakfast.' },
        { q: 'مَا طَعَامُكَ المُفَضَّلُ؟', en: 'What is your favourite food?', start: 'طَعَامِي المُفَضَّلُ هُوَ …', model: 'طَعَامِي المُفَضَّلُ هُوَ البِيتْزَا.', modelEn: 'My favourite food is pizza.' },
        { q: 'مَاذَا تَشْرَبُ عَادَةً؟', en: 'What do you usually drink?', start: 'أَشْرَبُ … عَادَةً', model: 'أَشْرَبُ المَاءَ وَالحَلِيبَ عَادَةً.', modelEn: 'I usually drink water and milk.' },
        { q: 'هَلْ تُحِبُّ الخُضَارَ؟', en: 'Do you like vegetables?', start: 'نَعَمْ، أُحِبُّ … / لَا …', model: 'نَعَمْ، أُحِبُّ الجَزَرَ وَالخِيَارَ.', modelEn: 'Yes, I like carrots and cucumber.' },
        { q: 'أَيْنَ تَتَنَاوَلُ الغَدَاءَ؟', en: 'Where do you have lunch?', start: 'أَتَنَاوَلُ الغَدَاءَ فِي …', model: 'أَتَنَاوَلُ الغَدَاءَ فِي مَقْصَفِ المَدْرَسَةِ.', modelEn: 'I have lunch in the school canteen.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + the food word = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'وَجَبَاتِي', aim: 'two or three sentences, with a reason and some detail',
      qs: [
        { q: 'صِفْ وَجْبَةَ العَشَاءِ فِي بَيْتِكَ.', en: 'Describe dinner at your home.', start: 'نَتَنَاوَلُ العَشَاءَ فِي … عَادَةً نَأْكُلُ …', model: 'نَتَنَاوَلُ العَشَاءَ فِي السَّابِعَةِ؛ عَادَةً نَأْكُلُ الأُرْزَ وَالدَّجَاجَ وَالسَّلَطَةَ، ثُمَّ نَأْكُلُ الفَاكِهَةَ.', modelEn: 'We have dinner at seven: we usually eat rice, chicken and salad, then fruit.' },
        { q: 'مَا الطَّعَامُ الَّذِي لَا تُحِبُّهُ؟ لِمَاذَا؟', en: 'What food don’t you like? Why?', start: 'لَا أُحِبُّ … لِأَنَّ …', model: 'لَا أُحِبُّ السَّمَكَ، لِأَنَّ رَائِحَتَهُ قَوِيَّةٌ.', modelEn: 'I don’t like fish, because its smell is strong.' },
        { q: 'مَنْ يَطْبُخُ فِي بَيْتِكَ؟', en: 'Who cooks in your house?', start: 'تَطْبُخُ … غَالِبًا، وَأَحْيَانًا …', model: 'تَطْبُخُ أُمِّي غَالِبًا، وَأَحْيَانًا يَطْبُخُ أَبِي فِي نِهَايَةِ الأُسْبُوعِ.', modelEn: 'My mother usually cooks, and sometimes my father cooks at the weekend.' },
        { q: 'مَاذَا أَكَلْتَ أَمْسِ؟', en: 'What did you eat yesterday?', start: 'أَمْسِ أَكَلْتُ …', model: 'أَمْسِ أَكَلْتُ مَعْكَرُونَةً بِالطَّمَاطِمِ فِي الغَدَاءِ، وَشُورْبَةَ عَدَسٍ فِي العَشَاءِ.', modelEn: 'Yesterday I ate pasta with tomatoes for lunch and lentil soup for dinner.' },
        { q: 'مَا الأَكْلَةُ الَّتِي تُرِيدُ أَنْ تَتَعَلَّمَ طَبْخَهَا؟', en: 'Which dish would you like to learn to cook?', start: 'أُرِيدُ أَنْ أَتَعَلَّمَ طَبْخَ … لِأَنَّ …', model: 'أُرِيدُ أَنْ أَتَعَلَّمَ طَبْخَ البِرْيَانِي، لِأَنَّهُ طَبَقُ أُسْرَتِي المُفَضَّلُ.', modelEn: 'I want to learn to cook biryani, because it is my family’s favourite dish.' },
      ],
      foot: 'Develop: two or three sentences — a frequency word, an idāfa (shūrbat ʿadas) and a reason (li-anna).',
      modelFoot: 'Detail + reason + one past sentence = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'عَادَاتُ الأَكْلِ', aim: 'a developed answer: opinion, comparison, example and more than one time frame',
      qs: [
        { q: 'هَلْ تَأْكُلُ أُسْرَتُكَ مَعًا؟ مَا أَهَمِّيَّةُ ذٰلِكَ؟', en: 'Does your family eat together? Why does it matter?', start: 'نَعَمْ … وَهٰذَا مُهِمٌّ لِأَنَّ …', model: 'نَعَمْ، نَأْكُلُ مَعًا كُلَّ مَسَاءٍ، وَهٰذَا مُهِمٌّ لِأَنَّنَا نَتَحَدَّثُ عَنْ يَوْمِنَا وَنَشْعُرُ بِالقُرْبِ.', modelEn: 'Yes, we eat together every evening; it matters because we talk about our day and feel close.' },
        { q: 'كَيْفَ تَغَيَّرَتْ عَادَاتُ الأَكْلِ فِي رَأْيِكَ؟', en: 'How have eating habits changed?', start: 'فِي المَاضِي كَانَ النَّاسُ … أَمَّا اليَوْمَ فَيَطْلُبُونَ …', model: 'فِي المَاضِي كَانَ النَّاسُ يَطْبُخُونَ فِي البَيْتِ دَائِمًا، أَمَّا اليَوْمَ فَيَطْلُبُونَ الوَجَبَاتِ السَّرِيعَةَ كَثِيرًا.', modelEn: 'In the past people always cooked at home; today they order fast food a lot.' },
        { q: 'صِفْ أَكْلَةً تَقْلِيدِيَّةً مِنْ بَلَدِ أُسْرَتِكَ.', en: 'Describe a traditional dish from your family’s country.', start: '… أَكْلَةٌ مَشْهُورَةٌ، تُطْبَخُ بِالخُضَارِ …', model: 'الكُسْكُسِي أَكْلَةٌ مَغْرِبِيَّةٌ مَشْهُورَةٌ، تُطْبَخُ بِالخُضَارِ وَاللَّحْمِ، وَنَأْكُلُهَا يَوْمَ الجُمُعَةِ عَادَةً.', modelEn: 'Couscous is a famous Moroccan dish, cooked with vegetables and meat, and we usually eat it on Fridays.' },
        { q: 'مَا أَجْمَلُ وَجْبَةٍ تَتَذَكَّرُهَا؟', en: 'What is the best meal you remember?', start: 'أَجْمَلُ وَجْبَةٍ أَتَذَكَّرُهَا كَانَتْ …', model: 'أَجْمَلُ وَجْبَةٍ أَتَذَكَّرُهَا كَانَتْ فِي مَطْعَمٍ عَلَى البَحْرِ؛ أَكَلْنَا سَمَكًا مَشْوِيًّا وَضَحِكْنَا كَثِيرًا.', modelEn: 'The best meal I remember was in a restaurant by the sea: we ate grilled fish and laughed a lot.' },
        { q: 'لَوْ فَتَحْتَ مَطْعَمًا، مَاذَا تُقَدِّمُ فِيهِ؟', en: 'If you opened a restaurant, what would you serve?', start: 'لَوْ فَتَحْتُ مَطْعَمًا، لَقَدَّمْتُ …', model: 'لَوْ فَتَحْتُ مَطْعَمًا، لَقَدَّمْتُ أَطْبَاقًا مِنْ بُلْدَانٍ مُخْتَلِفَةٍ، لِكَيْ يَتَعَرَّفَ النَّاسُ عَلَى ثَقَافَاتٍ جَدِيدَةٍ.', modelEn: 'If I opened a restaurant, I would serve dishes from different countries, so that people get to know new cultures.' },
      ],
      foot: 'Stretch: opinion + reason, past vs present (ammā … fa-), a passive (tuṭbakhu) and a conditional (law … la-).',
      modelFoot: 'Stretch: kāna + present, ammā … fa-, a passive verb, a superlative and law … la- with likay — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered every role-play task in a full sentence.' },
    { route: 'core', text: 'I used food verbs correctly (ākulu · ashrabu · ufaḍḍilu).' },
    { route: 'develop', text: 'I made adjectives agree and used an idāfa.' },
    { route: 'develop', text: 'I asked a question in the role play.' },
    { route: 'stretch', text: 'I compared, described the past and used a conditional.' },
  ],
};

const Q2_CORE = `مَرْحَبًا يَا سَلْمَى،
أَنَا مَرْيَمُ، وَسَأَزُورُكُمْ قَرِيبًا. فِي الفُطُورِ آكُلُ الخُبْزَ وَالجُبْنَ وَأَشْرَبُ الحَلِيبَ، وَفِي الغَدَاءِ آكُلُ شَطِيرَةً فِي المَدْرَسَةِ، وَفِي العَشَاءِ آكُلُ الأُرْزَ مَعَ أُسْرَتِي. طَبَقِي المُفَضَّلُ هُوَ الدَّجَاجُ بِالأُرْزِ لِأَنَّهُ لَذِيذٌ جِدًّا. لَا آكُلُ السَّمَكَ، وَلَا آكُلُ إِلَّا اللَّحْمَ الحَلَالَ. أَمْسِ أَكَلْتُ البِيتْزَا مَعَ صَدِيقَاتِي فِي المَطْعَمِ. فِي الأُرْدُنِّ أُرِيدُ أَنْ آكُلَ المَنْسَفَ.
مَعَ السَّلَامَةِ،
مَرْيَمُ`;
const Q2_FULL = `مَرْحَبًا يَا سَلْمَى،
كَيْفَ حَالُكِ؟ أَنَا سَعِيدَةٌ جِدًّا لِأَنِّي سَأَزُورُكُمْ قَرِيبًا. فِي الفُطُورِ آكُلُ الخُبْزَ وَالجُبْنَ عَادَةً وَأَشْرَبُ الشَّايَ بِالحَلِيبِ، وَفِي الغَدَاءِ آكُلُ شَطِيرَةً فِي المَدْرَسَةِ، أَمَّا العَشَاءُ فَأَتَنَاوَلُهُ مَعَ أُسْرَتِي فِي السَّابِعَةِ. طَبَقِي المُفَضَّلُ هُوَ الدَّجَاجُ بِالأُرْزِ، لِأَنَّ أُمِّي تَطْبُخُهُ بِبَهَارَاتٍ لَذِيذَةٍ. لَا آكُلُ السَّمَكَ لِأَنَّ عِنْدِي حَسَاسِيَّةً مِنْهُ، وَلَا آكُلُ إِلَّا اللَّحْمَ الحَلَالَ. أَمْسِ أَكَلْتُ البِيتْزَا مَعَ صَدِيقَاتِي فِي مَطْعَمٍ إِيطَالِيٍّ قَرِيبٍ بِمُنَاسَبَةِ عِيدِ مِيلَادِ إِحْدَاهُنَّ. فِي الأُرْدُنِّ أُرِيدُ أَنْ أُجَرِّبَ المَنْسَفَ، لِأَنِّي سَمِعْتُ أَنَّهُ لَذِيذٌ جِدًّا. وَأَنْتِ، مَا طَبَقُكِ المُفَضَّلُ؟
مَعَ تَحِيَّاتِي،
مَرْيَمُ`;
const Q3A_CORE = `أَتَنَاوَلُ ثَلَاثَ وَجَبَاتٍ كُلَّ يَوْمٍ. فِي الفُطُورِ آكُلُ البَيْضَ وَالخُبْزَ، وَأَشْرَبُ الحَلِيبَ. فِي الغَدَاءِ آكُلُ فِي مَقْصَفِ المَدْرَسَةِ، وَعَادَةً آكُلُ شَطِيرَةً وَتُفَّاحَةً، وَأَشْرَبُ عَصِيرَ التُّفَّاحِ. فِي العَشَاءِ آكُلُ مَعَ أُسْرَتِي فِي البَيْتِ. تَطْبُخُ أُمِّي الأُرْزَ وَالدَّجَاجَ وَالخُضَارَ، وَالطَّعَامُ دَائِمًا لَذِيذٌ.
طَعَامِي المُفَضَّلُ هُوَ البِرْيَانِي، لِأَنَّهُ حَارٌّ قَلِيلًا وَلَذِيذٌ. لَا أُحِبُّ السَّمَكَ، لِأَنَّ رَائِحَتَهُ قَوِيَّةٌ. أَشْرَبُ المَاءَ كَثِيرًا، وَلَا أَشْرَبُ المَشْرُوبَاتِ الغَازِيَّةَ. وَأُحِبُّ الفَوَاكِهَ كَثِيرًا، خَاصَّةً المَانْجُو وَالمَوْزَ.
يَوْمَ السَّبْتِ المَاضِي ذَهَبْنَا إِلَى مَطْعَمٍ تُرْكِيٍّ مَعَ أُسْرَتِي. أَكَلْتُ الكَبَابَ وَالأُرْزَ، وَشَرِبْتُ عَصِيرَ البُرْتُقَالِ. ثُمَّ أَكَلْنَا البَقْلَاوَةَ مَعَ الشَّايِ. كَانَ الطَّعَامُ لَذِيذًا جِدًّا.
فِي المُسْتَقْبَلِ سَأَتَعَلَّمُ الطَّبْخَ مَعَ أُمِّي، وَسَأَطْبُخُ البِرْيَانِي لِأُسْرَتِي، وَسَآكُلُ الفَوَاكِهَ كُلَّ يَوْمٍ. أَعْتَقِدُ أَنَّ الطَّعَامَ الصِّحِّيَّ مُهِمٌّ لِكُلِّ النَّاسِ.`;
const Q3A_FULL = `أَتَنَاوَلُ ثَلَاثَ وَجَبَاتٍ يَوْمِيًّا، وَأَحْرِصُ عَلَى أَلَّا أَتْرُكَ الفُطُورَ، لِأَنَّهُ يُعْطِينِي الطَّاقَةَ لِلدِّرَاسَةِ، وَأَشْرَبُ مَعَهُ كُوبًا مِنَ الحَلِيبِ. فِي الغَدَاءِ آكُلُ فِي مَقْصَفِ المَدْرَسَةِ، أَمَّا العَشَاءُ فَهُوَ أَهَمُّ وَجْبَةٍ فِي بَيْتِنَا، إِذْ نَجْتَمِعُ حَوْلَ المَائِدَةِ وَنَتَحَدَّثُ عَنْ يَوْمِنَا.
أُفَضِّلُ الأَطْبَاقَ البَيْتِيَّةَ عَلَى الوَجَبَاتِ السَّرِيعَةِ، فَطَبَقِي المُفَضَّلُ هُوَ البِرْيَانِي الَّذِي تَطْبُخُهُ أُمِّي بِبَهَارَاتٍ حَارَّةٍ وَلَذِيذَةٍ، وَتُقَدِّمُهُ مَعَ اللَّبَنِ وَالسَّلَطَةِ. صَحِيحٌ أَنَّ البِيتْزَا سَرِيعَةٌ وَشَهِيَّةٌ، غَيْرَ أَنَّهَا لَيْسَتْ صِحِّيَّةً إِذَا أَكَلْنَاهَا كَثِيرًا.
فِي نِهَايَةِ الأُسْبُوعِ المَاضِي احْتَفَلْنَا بِعِيدِ مِيلَادِ أَبِي فِي مَطْعَمٍ تُرْكِيٍّ؛ طَلَبْنَا أَطْبَاقًا مُتَنَوِّعَةً، وَأَكَلْتُ الكَبَابَ لِأَوَّلِ مَرَّةٍ، ثُمَّ تَنَاوَلْنَا حَلْوَى البَقْلَاوَةِ مَعَ الشَّايِ. كَانَتْ أُمْسِيَةً رَائِعَةً، فَالطَّعَامُ لَذِيذٌ وَالخِدْمَةُ مُمْتَازَةٌ.
فِي المُسْتَقْبَلِ سَأَتَعَلَّمُ طَبْخَ الأَطْبَاقِ التَّقْلِيدِيَّةِ مِنْ جَدَّتِي، لِكَيْ أُحَافِظَ عَلَى وَصَفَاتِ أُسْرَتِنَا. وَلَوْ كَانَ عِنْدِي وَقْتٌ أَكْثَرُ، لَطَبَخْتُ العَشَاءَ لِأُسْرَتِي مَرَّةً فِي الأُسْبُوعِ عَلَى الأَقَلِّ، لِأَنَّ ذٰلِكَ يُسْعِدُ أُمِّي.`;
const Q3B_FULL = `تَخْتَلِفُ عَادَاتُ الأَكْلِ اليَوْمَ كَثِيرًا عَمَّا كَانَتْ عَلَيْهِ فِي المَاضِي. كَانَتْ جَدَّتِي تَطْبُخُ كُلَّ يَوْمٍ أَطْبَاقًا تَقْلِيدِيَّةً بِالخُضَارِ الطَّازَجَةِ، وَكَانَتِ الأُسْرَةُ كُلُّهَا تَأْكُلُ مَعًا، أَمَّا اليَوْمَ فَكَثِيرٌ مِنَ النَّاسِ يَطْلُبُونَ الوَجَبَاتِ السَّرِيعَةَ عَلَى الهَاتِفِ، وَيَأْكُلُونَ أَمَامَ الشَّاشَاتِ.
لِلْوَجَبَاتِ السَّرِيعَةِ بَعْضُ المَزَايَا؛ فَهِيَ سَهْلَةٌ وَرَخِيصَةٌ وَتُوَفِّرُ الوَقْتَ. غَيْرَ أَنَّهَا تَحْتَوِي عَلَى الدُّهُونِ وَالسُّكَّرِ، وَقَدْ تُسَبِّبُ السُّمْنَةَ إِذَا أَكَلْنَاهَا كَثِيرًا، كَمَا أَنَّ الأَطْفَالَ لَا يَعْرِفُونَ مِنْ أَيْنَ يَأْتِي طَعَامُهُمْ. أَمَّا الطَّعَامُ التَّقْلِيدِيُّ فَصِحِّيٌّ وَلَذِيذٌ، وَيَجْمَعُ الأُسْرَةَ حَوْلَ المَائِدَةِ.
فِي العُطْلَةِ المَاضِيَةِ قَضَيْتُ أُسْبُوعًا عِنْدَ جَدَّتِي، فَعَلَّمَتْنِي كَيْفَ أَطْبُخُ الكُسْكُسِي؛ قَطَّعْنَا الخُضَارَ مَعًا، وَطَبَخْنَا اللَّحْمَ سَاعَتَيْنِ، ثُمَّ أَكَلْنَاهُ مَعَ العَائِلَةِ كُلِّهَا. كَانَ أَلَذَّ طَعَامٍ أَكَلْتُهُ فِي حَيَاتِي.
فِي رَأْيِي، يَجِبُ أَنْ نُوَازِنَ بَيْنَ الاثْنَيْنِ: لَا بَأْسَ بِالوَجَبَاتِ السَّرِيعَةِ أَحْيَانًا، لٰكِنَّ الطَّبْخَ فِي البَيْتِ أَفْضَلُ. وَلَوْ تَعَلَّمَ كُلُّ الشَّبَابِ الطَّبْخَ، لَأَصْبَحَ المُجْتَمَعُ أَكْثَرَ صِحَّةً، وَلَقَلَّتِ الأَمْرَاضُ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a food-festival form, write an email about your meals and preferences, and write an extended piece with idāfa, agreement, preferences and three time frames.',
  lift: [
    { ar: 'أُفَضِّلُ … عَلَى …', en: 'I prefer … to …' },
    { ar: 'عَصِيرُ البُرْتُقَالِ · طَبَقٌ لَذِيذٌ', en: 'idāfa · noun + adjective' },
    { ar: 'لَا آكُلُ … لِأَنَّ …', en: 'I don’t eat … because …' },
  ],
  checkTip: 'Check: adjective agreement (wajba ladhīdha), non-human plurals + feminine singular (aṭbāq ladhīdha), idāfa without “al” on the first word.',
  FORM: {
    title: 'International food festival — volunteer form', ar: 'اسْتِمَارَةُ مِهْرَجَانِ الطَّعَامِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Your name', model: 'مَرْيَمُ حَسَنٌ', modelEn: 'Maryam Hasan' },
      { core: true, ar: 'العُمْرُ', en: 'Your age', model: 'خَمْسَ عَشْرَةَ سَنَةً', modelEn: 'fifteen' },
      { core: true, ar: 'وَجْبَتُكَ المُفَضَّلَةُ', en: 'Your favourite meal / dish', model: 'الدَّجَاجُ بِالأُرْزِ', modelEn: 'chicken with rice' },
      { core: true, ar: 'مَشْرُوبُكَ المُفَضَّلُ', en: 'Your favourite drink', model: 'عَصِيرُ البُرْتُقَالِ', modelEn: 'orange juice' },
      { core: true, ar: 'طَعَامٌ لَا تَأْكُلُهُ', en: 'A food you don’t eat', model: 'الفُولُ السُّودَانِيُّ', modelEn: 'peanuts (allergy)' },
      { core: true, ar: 'طَبَقٌ مِنْ بَلَدِ أُسْرَتِكَ', en: 'A dish from your family’s country', model: 'البِرْيَانِي', modelEn: 'biryani' },
      { ar: 'كَمْ وَجْبَةً تَأْكُلُ يَوْمِيًّا؟', en: 'How many meals a day', model: 'ثَلَاثُ وَجَبَاتٍ', modelEn: 'three meals' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُحِبُّ الطَّبْخَ؟', en: 'ONE sentence: why you like cooking', model: 'أُحِبُّ الطَّبْخَ لِأَنَّهُ مُمْتِعٌ وَمُفِيدٌ لِأُسْرَتِي.', modelEn: 'I like cooking because it is fun and useful for my family.' },
    ],
    foot: 'One word or a short phrase for each box — the last box needs a full sentence with a reason (li-anna).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Idāfa answers (عَصِيرُ البُرْتُقَالِ) are good; numbers in box 7 take the plural genitive (ثَلَاثُ وَجَبَاتٍ).',
  },
  Q2: {
    short: 'an email about your food', title: 'Question 2: an email to your host family', ar: 'رِسَالَةٌ إِلَى الأُسْرَةِ المُضِيفَةِ',
    task: 'You are going to stay with a family in Jordan. Write an email in Arabic of about 80–90 words to your host sister. You must include: • what you usually eat for your meals • your favourite dish and why • food you do not eat • what you ate recently and a dish you would like to try in Jordan.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Adjectives agree; idāfa used correctly.', 'Past (recently) AND a wish for the future.', 'About 80–90 words.'],
    phrases: [['فِي الفُطُورِ آكُلُ …', 'for breakfast I eat …'], ['طَبَقِي المُفَضَّلُ هُوَ …', 'my favourite dish is …'], ['لَا آكُلُ إِلَّا اللَّحْمَ الحَلَالَ.', 'I only eat halal meat.'], ['أُرِيدُ أَنْ أُجَرِّبَ …', 'I would like to try …']],
    notes: 'Food restrictions are personal (allergies, halal, vegetarian); students write what is true for them or invent.',
    rubric: [
      ['task', 'سَتَسْكُنُ عِنْدَ أُسْرَةٍ فِي الأُرْدُنِّ. اكْتُبْ رِسَالَةً إِلِكْتِرُونِيَّةً إِلَى أُخْتِكَ المُضِيفَةِ (٨٠–٩٠ كَلِمَةً).', 'You will stay with a family in Jordan: email your host sister (80–90 words).'],
      ['1', 'مَاذَا تَأْكُلُ عَادَةً فِي وَجَبَاتِكَ؟', 'What you usually eat at your meals'],
      ['2', 'مَا طَبَقُكَ المُفَضَّلُ؟ وَلِمَاذَا؟', 'Your favourite dish, and why'],
      ['3', 'مَا الطَّعَامُ الَّذِي لَا تَأْكُلُهُ؟', 'Food you do not eat'],
      ['4', 'مَاذَا أَكَلْتَ مُؤَخَّرًا، وَمَاذَا تُرِيدُ أَنْ تُجَرِّبَ فِي الأُرْدُنِّ؟', 'What you ate recently; what you want to try in Jordan'],
    ],
    qwords: 'مَاذَا (what) · مَا (what) · لِمَاذَا (why) — and the tenses in bullet 4: أَكَلْتَ (past) · تُرِيدُ أَنْ تُجَرِّبَ (a wish)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، أَنَا ______ .', 'Hello …, I am …'],
      ['1', 'فِي الفُطُورِ آكُلُ ______ ، وَفِي العَشَاءِ آكُلُ ______ .', 'For breakfast I eat …, and for dinner I eat …'],
      ['2', 'طَبَقِي المُفَضَّلُ هُوَ ______ لِأَنَّهُ ______ .', 'My favourite dish is … because it is …'],
      ['3', 'لَا آكُلُ ______ .', 'I don’t eat …'],
      ['4', 'أَمْسِ أَكَلْتُ ______ . فِي الأُرْدُنِّ أُرِيدُ أَنْ آكُلَ ______ .', 'Yesterday I ate … In Jordan I want to eat …'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Salma, I am Maryam and I will visit you soon. For breakfast I eat bread and cheese and drink milk, for lunch a sandwich at school, and for dinner rice with my family. My favourite dish is chicken with rice because it is very tasty. I don’t eat fish, and I only eat halal meat. Yesterday I ate pizza with my friends in a restaurant. In Jordan I want to eat mansaf. Goodbye, Maryam.”',
      find: ['فِي الفُطُورِ', 'لِأَنَّهُ لَذِيذٌ', 'لَا آكُلُ', 'أُرِيدُ أَنْ آكُلَ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Hello Salma, how are you? I am very happy because I will visit you soon. For breakfast I usually eat bread and cheese and drink tea with milk, for lunch a sandwich at school; as for dinner, I have it with my family at seven. My favourite dish is chicken with rice, because my mother cooks it with delicious spices. I don’t eat fish because I am allergic to it, and I only eat halal meat. Yesterday I ate pizza with my friends in a nearby Italian restaurant for a friend’s birthday. In Jordan I would like to try mansaf, because I have heard it is delicious. And you — what is your favourite dish? With my greetings, Maryam.”',
      find: ['أَمَّا العَشَاءُ فَأَتَنَاوَلُهُ', 'بِبَهَارَاتٍ لَذِيذَةٍ', 'لِأَنَّ عِنْدِي حَسَاسِيَّةً', 'أُرِيدُ أَنْ أُجَرِّبَ'],
    },
  },
  Q3: {
    a: { title: 'طَعَامِي وَعَادَاتِي فِي الأَكْلِ', en: 'My food and eating habits', bullets: 'صِفْ وَجَبَاتِكَ اليَوْمِيَّةَ · مَا الطَّعَامُ الَّذِي تُحِبُّهُ وَالَّذِي لَا تُحِبُّهُ؟ وَلِمَاذَا؟ · صِفْ وَجْبَةً خَاصَّةً أَكَلْتَهَا مُؤَخَّرًا · مَاذَا سَتُغَيِّرُ فِي عَادَاتِكَ؟', bulletsEn: 'Daily meals · food you like and dislike, and why · a special meal you had recently · what you will change' },
    b: { title: 'الطَّعَامُ التَّقْلِيدِيُّ وَالوَجَبَاتُ السَّرِيعَةُ', en: 'Traditional food and fast food', bullets: 'كَيْفَ تَغَيَّرَتْ عَادَاتُ الأَكْلِ؟ · مَا مَزَايَا الوَجَبَاتِ السَّرِيعَةِ وَعُيُوبُهَا؟ · صِفْ تَجْرِبَةً مَعَ طَعَامٍ تَقْلِيدِيٍّ · مَا رَأْيُكَ؟ وَمَاذَا تَقْتَرِحُ؟', bulletsEn: 'How eating habits have changed · pros and cons of fast food · an experience with traditional food · your opinion and a suggestion' },
    plan: [
      'Present — your meals: what, when, with whom (fī al-fuṭūr ākulu …).',
      'Preferences — ufaḍḍilu … ʿalā … li-anna …; Stretch: ṣaḥīḥun anna … ghayra anna.',
      'Past — a special meal: dhahabnā … akaltu … kāna aṭ-ṭaʿāmu ladhīdhan.',
      'Future — sa-ataʿallamu …; Stretch: law … la- (a conditional).',
    ],
    frames: [
      { ar: 'فِي الفُطُورِ آكُلُ البَيْضَ وَالخُبْزَ.', en: 'present: for breakfast I eat eggs and bread.' },
      { ar: 'أَمْسِ أَكَلْنَا فِي مَطْعَمٍ تُرْكِيٍّ.', en: 'past: yesterday we ate in a Turkish restaurant.' },
      { ar: 'سَأَتَعَلَّمُ الطَّبْخَ مَعَ أُمِّي.', en: 'future: I will learn to cook with my mother.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Present: three meals — eggs and bread, a sandwich and an apple in the canteen, rice, chicken and vegetables at home → preferences: biryani (a little spicy, tasty); not fish (strong smell); water, no fizzy drinks → past: a Turkish restaurant with my family last Saturday — kebab, rice, orange juice, then baklava with tea → future: learn to cook with my mother; healthy food matters for everyone.', find: ['ثَلَاثَ وَجَبَاتٍ', 'لِأَنَّهُ حَارٌّ', 'ذَهَبْنَا إِلَى مَطْعَمٍ', 'سَأَتَعَلَّمُ'], notes: 'Core model: simple sentences, adjective agreement and three time frames.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Present: three meals; I make sure not to skip breakfast (energy for study); as for dinner, it is the most important meal, when we gather round the table → preference: home-made over fast food; biryani with hot, tasty spices; it is true pizza is quick, but not healthy if eaten often → past: Dad’s birthday in a Turkish restaurant — kebab for the first time, baklava and tea → future: learn traditional dishes from my grandmother so as to keep the family recipes; “if I had more time, I would cook dinner once a week”.', find: ['أَلَّا أَتْرُكَ الفُطُورَ', 'أَمَّا العَشَاءُ فَهُوَ', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّهَا', 'لَوْ كَانَ … لَطَبَخْتُ'], notes: 'Full-mark model: an + lā (allā) + subjunctive, ammā … fa-, a superlative, a relative clause, a concession, likay and a conditional.' },
      { which: 'ب', level: 'Full', subtitle: 'traditional food and fast food', text: Q3B_FULL, en: 'Then: my grandmother cooked traditional dishes daily and the family ate together; today many order fast food by phone → pros and cons: easy, cheap, saves time — but fat and sugar can cause obesity; traditional food is healthy and brings families together → past: a week at my grandmother’s learning to cook couscous → opinion: balance the two; “if all young people learnt to cook, society would be healthier”.', find: ['كَانَتْ جَدَّتِي تَطْبُخُ', 'غَيْرَ أَنَّهَا تَحْتَوِي', 'أَمَّا الطَّعَامُ التَّقْلِيدِيُّ فَصِحِّيٌّ', 'لَوْ … لَأَصْبَحَ'], notes: 'Full-mark model for the Stretch title: past habits, advantages and disadvantages, a past narrative, an opinion with yajibu an and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; the last box as a full sentence.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: adjectives agree and an idāfa is used correctly.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: a preference with ʿalā, a concession or a conditional.' },
  ],
};

module.exports = { speak, write };
