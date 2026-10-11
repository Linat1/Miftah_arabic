'use strict';
/* Exam-practice data · AT-A-L05 · Eating Out — Café, Menu and Prices (requests; imperatives; attached pronouns; numbers). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { n: 5, short: 'Eating Out', arShort: 'فِي المَطْعَمِ وَالمَقْهَى', fileTitle: 'Eating_Out_Cafe_Menu_and_Prices', title: 'Eating Out — Café, Menu and Prices', ar: 'الأَكْلُ خَارِجَ البَيْتِ — المَقْهَى وَالقَائِمَةُ وَالأَسْعَارُ', icon: 'FaMugSaucer', grammar: 'requests, imperatives, attached pronouns, numbers and prices' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: order politely, ask about prices, book a table, sort out a problem — then develop with opinions, experiences and plans.',
  words: [
    w(1, 'أَطْلُبُ', 'I order', [['he', 'يَطْلُبُ'], ['she', 'تَطْلُبُ'], ['they', 'يَطْلُبُونَ']]),
    w(2, 'أَدْفَعُ', 'I pay', [['he', 'يَدْفَعُ'], ['she', 'تَدْفَعُ'], ['they', 'يَدْفَعُونَ']]),
    w(3, 'أَحْجِزُ', 'I book, reserve', [['he', 'يَحْجِزُ'], ['she', 'تَحْجِزُ'], ['they', 'يَحْجِزُونَ']]),
    w(4, 'أَعْطِنِي …', 'give me … (imperative)', [['to m.', 'أَعْطِنِي'], ['to f.', 'أَعْطِينِي'], ['to pl.', 'أَعْطُونِي']], { tag: 'm. · f. · pl.' }),
    w(5, 'نَادِلٌ', 'a waiter', [['m.', 'نَادِلٌ'], ['f.', 'نَادِلَةٌ'], ['pl.', 'نُدُلٌ']]),
    w(6, 'مَطْعَمٌ', 'a restaurant', [['sg.', 'مَطْعَمٌ'], ['dual', 'مَطْعَمَانِ'], ['pl.', 'مَطَاعِمُ']]),
    w(7, 'قَائِمَةُ الطَّعَامِ', 'the menu (idāfa)', null, { tag: 'idāfa' }),
    w(8, 'الحِسَابُ · الفَاتُورَةُ', 'the bill', [['sg.', 'فَاتُورَةٌ'], ['pl.', 'فَوَاتِيرُ']], { tag: 'sg. · pl.' }),
    w(9, 'كَمْ ثَمَنُ …؟', 'how much is …?', null, { tag: 'question' }),
    w(10, 'دِينَارٌ', 'a dinar', [['1', 'دِينَارٌ'], ['2', 'دِينَارَانِ'], ['3–10', 'دَنَانِيرُ']], { tag: 'numbers' }),
    w(11, 'رَخِيصٌ', 'cheap', [['m.', 'رَخِيصٌ'], ['f.', 'رَخِيصَةٌ']]),
    w(12, 'غَالٍ', 'expensive', [['m.', 'غَالٍ'], ['f.', 'غَالِيَةٌ']]),
  ],
  words1: { eyebrow: 'Language bank · in the café (I · he · she · they) and polite imperatives', title: 'Order, pay, book — politely', ar: 'فِي المَقْهَى', notes: 'LANGUAGE BANK (2 min) — four persons for each verb. The imperative changes with the person you speak to: أَعْطِنِي (to a man), أَعْطِينِي (to a woman), أَعْطُونِي (to a group). Always add مِنْ فَضْلِكَ / مِنْ فَضْلِكِ.' },
  words2: { eyebrow: 'Language bank · menu, bill and prices (m. · f. · numbers)', title: 'How much is it?', ar: 'الأَسْعَارُ', notes: 'LANGUAGE BANK (2 min) — دِينَارٌ (1) · دِينَارَانِ (2) · ثَلَاثَةُ دَنَانِيرَ (3–10) · عِشْرُونَ دِينَارًا (11+). Adjectives agree: الطَّبَقُ غَالٍ / الوَجْبَةُ غَالِيَةٌ. Attached pronoun: كَمْ ثَمَنُهُ؟ (how much is it?).' },
  checkCore: 'made polite requests (urīdu … min faḍlika) with full sentences',
  checkDevelop: 'used numbers and prices correctly, and gave a reason',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'in a café in Amman', title: 'Role play A — Ordering in a café', ar: 'فِي مَقْهًى فِي عَمَّانَ', you: 'a customer', them: 'the waiter',
      tasks: [
        { core: true, ex: 'أَهْلًا وَسَهْلًا! مَاذَا تَطْلُبُ؟', task: 'Order a drink and something to eat.', help: 'أُرِيدُ … وَ …، مِنْ فَضْلِكَ', model: 'أُرِيدُ فِنْجَانَ شَايٍ وَقِطْعَةَ كَعْكٍ، مِنْ فَضْلِكَ.', modelEn: 'I would like a cup of tea and a piece of cake, please.' },
        { core: true, ex: 'هَلْ تُرِيدُ السُّكَّرَ؟', task: 'Say yes or no, politely.', help: 'نَعَمْ، مِلْعَقَةً وَاحِدَةً …', model: 'نَعَمْ، مِلْعَقَةً وَاحِدَةً، مِنْ فَضْلِكَ.', modelEn: 'Yes, one spoonful, please.' },
        { core: true, ex: '… دِينَارَانِ.', task: 'ASK how much the cake is (the examiner then answers).', help: 'كَمْ ثَمَنُ …؟', model: 'كَمْ ثَمَنُ الكَعْكَةِ؟', modelEn: 'How much is the cake?' },
        { core: true, ex: 'هَلْ تَجْلِسُ فِي الدَّاخِلِ أَمْ فِي الخَارِجِ؟', task: 'Say where you want to sit, and why.', help: 'أَجْلِسُ فِي … لِأَنَّ …', model: 'أَجْلِسُ فِي الخَارِجِ، لِأَنَّ الجَوَّ جَمِيلٌ.', modelEn: 'I’ll sit outside, because the weather is lovely.' },
        { core: true, unexpected: true, ex: 'هَلْ تُرِيدُ شَيْئًا آخَرَ؟', task: 'Answer the unexpected question.', help: 'لَا، شُكْرًا. الحِسَابُ …', model: 'لَا، شُكْرًا. الحِسَابُ، مِنْ فَضْلِكَ.', modelEn: 'No, thank you. The bill, please.' },
      ],
      girl: 'تَطْلُبِينَ · تُرِيدِينَ · تَجْلِسِينَ',
      notes: 'Core: polite requests. Task 3: the candidate ASKS. Idāfa: فِنْجَانُ شَايٍ (a cup of tea), قِطْعَةُ كَعْكٍ (a piece of cake).',
    },
    {
      id: 'B', level: 'Core+', setting: 'a phone call to a restaurant', title: 'Role play B — Booking a table', ar: 'حَجْزُ طَاوِلَةٍ', you: 'a customer', them: 'the restaurant employee',
      tasks: [
        { core: true, ex: 'مَطْعَمُ النَّخِيلِ، تَفَضَّلْ.', task: 'Say you want to book a table.', help: 'أُرِيدُ أَنْ أَحْجِزَ …', model: 'أُرِيدُ أَنْ أَحْجِزَ طَاوِلَةً، مِنْ فَضْلِكَ.', modelEn: 'I would like to book a table, please.' },
        { core: true, ex: 'لِكَمْ شَخْصًا؟', task: 'Say how many people.', help: 'لِـخَمْسَةِ أَشْخَاصٍ', model: 'لِخَمْسَةِ أَشْخَاصٍ.', modelEn: 'For five people.' },
        { ex: 'فِي أَيِّ يَوْمٍ، وَفِي أَيِّ سَاعَةٍ؟', task: 'Give the day and the time.', help: 'يَوْمَ … فِي السَّاعَةِ …', model: 'يَوْمَ الجُمُعَةِ، فِي السَّاعَةِ الثَّامِنَةِ مَسَاءً.', modelEn: 'On Friday, at eight in the evening.' },
        { ex: '… نَعَمْ، عِنْدَنَا قَائِمَةٌ خَاصَّةٌ لِلْأَطْفَالِ.', task: 'ASK if they have dishes for children (the examiner then answers).', help: 'هَلْ عِنْدَكُمْ …؟', model: 'هَلْ عِنْدَكُمْ أَطْبَاقٌ لِلْأَطْفَالِ؟', modelEn: 'Do you have dishes for children?' },
        { unexpected: true, ex: 'مَا الاسْمُ، مِنْ فَضْلِكَ؟', task: 'Answer the unexpected question.', help: 'الحَجْزُ بِاسْمِ …', model: 'الحَجْزُ بِاسْمِ آدَمَ حُسَيْنٍ، شُكْرًا لَكَ.', modelEn: 'The booking is in the name of Adam Hussain, thank you.' },
      ],
      girl: 'تَفَضَّلِي · مِنْ فَضْلِكِ',
      notes: 'Numbers 3–10 take the opposite gender and a plural genitive: خَمْسَةُ أَشْخَاصٍ. لِكَمْ شَخْصًا = for how many people. The model help writes the preposition as one word with the number: لِخَمْسَةِ.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a problem in a restaurant', title: 'Role play C — A problem with the order', ar: 'مُشْكِلَةٌ فِي المَطْعَمِ', you: 'a customer', them: 'the waiter',
      tasks: [
        { ex: 'كَيْفَ الطَّعَامُ؟', task: 'Explain the problem politely.', help: 'عَفْوًا، … بَارِدَةٌ، وَأَنَا طَلَبْتُ …', model: 'عَفْوًا، الشُّورْبَةُ بَارِدَةٌ، وَأَنَا طَلَبْتُ شُورْبَةً سَاخِنَةً.', modelEn: 'Excuse me, the soup is cold, and I ordered a hot soup.' },
        { ex: 'أَعْتَذِرُ! مَاذَا تُرِيدُ أَنْ أَفْعَلَ؟', task: 'Say what you would like him to do.', help: 'أَرْجُو أَنْ تُسَخِّنَهَا …', model: 'أَرْجُو أَنْ تُسَخِّنَهَا، أَوْ أَنْ تُحْضِرَ لِي طَبَقًا آخَرَ.', modelEn: 'Please heat it up, or bring me another dish.' },
        { ex: 'مَاذَا طَلَبْتَ أَيْضًا؟', task: 'Say what else you ordered (past).', help: 'طَلَبْتُ … مَعَ … وَ …', model: 'طَلَبْتُ دَجَاجًا مَشْوِيًّا مَعَ الأُرْزِ، وَعَصِيرَ لَيْمُونٍ.', modelEn: 'I ordered grilled chicken with rice, and a lemon juice.' },
        { ex: '… نَعَمْ، عَشَرَةٌ فِي المِئَةِ.', task: 'ASK if service is included in the bill (the examiner then answers).', help: 'هَلِ الخِدْمَةُ …؟', model: 'هَلِ الخِدْمَةُ مَحْسُوبَةٌ فِي الفَاتُورَةِ؟', modelEn: 'Is service included in the bill?' },
        { unexpected: true, ex: 'هَلْ سَتَرْجِعُ إِلَى مَطْعَمِنَا؟', task: 'Answer the unexpected question, with a reason.', help: 'نَعَمْ، سَأَرْجِعُ لِأَنَّ …', model: 'نَعَمْ، سَأَرْجِعُ، لِأَنَّ الطَّعَامَ لَذِيذٌ وَالخِدْمَةَ سَرِيعَةٌ.', modelEn: 'Yes, I will come back, because the food is tasty and the service is quick.' },
      ],
      girl: 'تُرِيدِينَ · طَلَبْتِ · سَتَرْجِعِينَ',
      notes: 'Develop: a polite complaint, أَرْجُو أَنْ + subjunctive, an attached pronoun (تُسَخِّنَهَا = heat IT up, referring to the soup), past and future.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'planning an end-of-year class meal', title: 'Role play D — The class meal', ar: 'وَجْبَةُ نِهَايَةِ السَّنَةِ', you: 'the class representative', them: 'the restaurant manager',
      tasks: [
        { ex: 'كَمْ طَالِبًا سَيَأْتِي، وَمَا مِيزَانِيَّتُكُمْ؟', task: 'Give the number of students and the budget.', help: 'سَيَأْتِي … طَالِبًا، وَمِيزَانِيَّتُنَا …', model: 'سَيَأْتِي عِشْرُونَ طَالِبًا، وَمِيزَانِيَّتُنَا مِئَتَا دِينَارٍ تَقْرِيبًا.', modelEn: 'Twenty students will come, and our budget is about two hundred dinars.' },
        { ex: 'مَاذَا تُفَضِّلُونَ: الوَجَبَاتِ السَّرِيعَةَ أَمِ الأَطْبَاقَ العَرَبِيَّةَ؟', task: 'Give a preference with two reasons.', help: 'نُفَضِّلُ … لِأَنَّهَا … وَلِأَنَّ …', model: 'نُفَضِّلُ الأَطْبَاقَ العَرَبِيَّةَ، لِأَنَّهَا أَصَحُّ، وَلِأَنَّ بَعْضَ زُمَلَائِنَا لَا يَأْكُلُونَ الوَجَبَاتِ السَّرِيعَةَ.', modelEn: 'We prefer Arabic dishes, because they are healthier, and because some classmates don’t eat fast food.' },
        { ex: 'هَلْ أَكَلْتُمْ مَعًا فِي مَطْعَمٍ مِنْ قَبْلُ؟', task: 'Describe a past class meal.', help: 'فِي السَّنَةِ المَاضِيَةِ تَنَاوَلْنَا …', model: 'نَعَمْ، فِي السَّنَةِ المَاضِيَةِ تَنَاوَلْنَا الغَدَاءَ فِي مَطْعَمٍ لُبْنَانِيٍّ، وَكَانَتِ التَّجْرِبَةُ رَائِعَةً.', modelEn: 'Yes, last year we had lunch in a Lebanese restaurant, and it was a great experience.' },
        { ex: 'مَا الَّذِي يَجْعَلُ المَطْعَمَ جَيِّدًا فِي رَأْيِكَ؟', task: 'Give an opinion with a comparison.', help: 'فِي رَأْيِي، … أَهَمُّ مِنْ …', model: 'فِي رَأْيِي، الطَّعَامُ الطَّازَجُ وَالأَسْعَارُ المَعْقُولَةُ أَهَمُّ مِنَ الدِّيكُورِ الفَاخِرِ.', modelEn: 'In my opinion, fresh food and reasonable prices matter more than luxurious decor.' },
        { unexpected: true, ex: 'لَوْ كَانَتِ المِيزَانِيَّةُ أَكْبَرَ، مَاذَا تَطْلُبُونَ؟', task: 'Answer the unexpected question (a conditional).', help: 'لَوْ كَانَتِ … لَطَلَبْنَا …', model: 'لَوْ كَانَتِ المِيزَانِيَّةُ أَكْبَرَ، لَطَلَبْنَا حَلْوَى خَاصَّةً وَكَعْكَةً كَبِيرَةً لِلِاحْتِفَالِ.', modelEn: 'If the budget were bigger, we would order a special dessert and a big cake to celebrate.' },
      ],
      girl: 'رَأْيِكِ (the questions here are mostly to “you all”: تُفَضِّلُونَ · أَكَلْتُمْ · تَطْلُبُونَ)',
      notes: 'Stretch: numbers 11+ (عِشْرُونَ طَالِبًا), the dual مِئَتَا, comparatives (أَصَحُّ · أَهَمُّ مِنْ), a past narrative and a conditional.',
      modelFoot: 'Stretch: large numbers, comparatives, past narrative and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'فِي المَطْعَمِ', aim: 'one full sentence per question',
      qs: [
        { q: 'هَلْ تَذْهَبُ إِلَى المَطْعَمِ كَثِيرًا؟', en: 'Do you go to restaurants often?', start: 'نَعَمْ، أَذْهَبُ … مَرَّةً فِي …', model: 'نَعَمْ، أَذْهَبُ إِلَى المَطْعَمِ مَرَّةً فِي الشَّهْرِ.', modelEn: 'Yes, I go to a restaurant once a month.' },
        { q: 'مَاذَا تَطْلُبُ عَادَةً فِي المَقْهَى؟', en: 'What do you usually order in a café?', start: 'أَطْلُبُ عَادَةً …', model: 'أَطْلُبُ عَادَةً عَصِيرَ فَرَاوِلَةٍ وَكَعْكَةً.', modelEn: 'I usually order a strawberry juice and a cake.' },
        { q: 'مَا مَطْعَمُكَ المُفَضَّلُ؟', en: 'What is your favourite restaurant?', start: 'مَطْعَمِي المُفَضَّلُ …', model: 'مَطْعَمِي المُفَضَّلُ مَطْعَمٌ إِيطَالِيٌّ قَرِيبٌ مِنْ بَيْتِي.', modelEn: 'My favourite restaurant is an Italian restaurant near my house.' },
        { q: 'مَعَ مَنْ تَذْهَبُ؟', en: 'Who do you go with?', start: 'أَذْهَبُ مَعَ …', model: 'أَذْهَبُ مَعَ أُسْرَتِي أَوْ مَعَ أَصْدِقَائِي.', modelEn: 'I go with my family or my friends.' },
        { q: 'هَلِ المَطَاعِمُ غَالِيَةٌ؟', en: 'Are restaurants expensive?', start: 'نَعَمْ، بَعْضُ المَطَاعِمِ …', model: 'نَعَمْ، بَعْضُ المَطَاعِمِ غَالِيَةٌ جِدًّا.', modelEn: 'Yes, some restaurants are very expensive.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + one detail (how often, with whom, which food) = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'الأَكْلُ خَارِجَ البَيْتِ', aim: 'two or three sentences, with a reason, a price or a past event',
      qs: [
        { q: 'صِفْ مَطْعَمَكَ المُفَضَّلَ.', en: 'Describe your favourite restaurant.', start: 'مَطْعَمِي المُفَضَّلُ … وَالطَّعَامُ فِيهِ …', model: 'مَطْعَمِي المُفَضَّلُ صَغِيرٌ وَهَادِئٌ، وَالطَّعَامُ فِيهِ لَذِيذٌ، وَالأَسْعَارُ مَعْقُولَةٌ.', modelEn: 'My favourite restaurant is small and quiet; the food is tasty and the prices are reasonable.' },
        { q: 'مَاذَا تَطْلُبُ فِي مَطْعَمٍ عَرَبِيٍّ؟', en: 'What do you order in an Arabic restaurant?', start: 'أَطْلُبُ … أَوَّلًا، ثُمَّ …', model: 'أَطْلُبُ الحُمُّصَ وَالفَلَافِلَ أَوَّلًا، ثُمَّ أَطْلُبُ المَشَاوِيَ.', modelEn: 'I order hummus and falafel first, then grilled meats.' },
        { q: 'هَلْ تُفَضِّلُ الأَكْلَ فِي المَطْعَمِ أَمْ فِي البَيْتِ؟', en: 'Do you prefer eating out or at home?', start: 'أُفَضِّلُ … لِأَنَّهُ … لٰكِنَّ …', model: 'أُفَضِّلُ الأَكْلَ فِي البَيْتِ لِأَنَّهُ أَرْخَصُ وَأَصَحُّ، لٰكِنَّ المَطْعَمَ مُمْتِعٌ فِي المُنَاسَبَاتِ.', modelEn: 'I prefer eating at home because it is cheaper and healthier, but restaurants are fun on special occasions.' },
        { q: 'مَتَى ذَهَبْتَ إِلَى مَطْعَمٍ آخِرَ مَرَّةٍ؟', en: 'When did you last go to a restaurant?', start: 'ذَهَبْتُ … وَأَكَلْتُ …', model: 'ذَهَبْتُ الأُسْبُوعَ المَاضِيَ مَعَ أُسْرَتِي، وَأَكَلْتُ سَمَكًا مَشْوِيًّا.', modelEn: 'I went last week with my family and ate grilled fish.' },
        { q: 'كَمْ تَدْفَعُ عَادَةً فِي المَقْهَى؟', en: 'How much do you usually pay in a café?', start: 'أَدْفَعُ عَادَةً … جُنَيْهَاتٍ', model: 'أَدْفَعُ عَادَةً خَمْسَةَ جُنَيْهَاتٍ تَقْرِيبًا ثَمَنَ عَصِيرٍ وَكَعْكَةٍ.', modelEn: 'I usually pay about five pounds for a juice and a cake.' },
      ],
      foot: 'Develop: two or three sentences — a comparison (arkhaṣ, aṣaḥḥ), a price, a reason (li-anna).',
      modelFoot: 'Description + preference + reason + one past sentence = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'ثَقَافَةُ المَطَاعِمِ', aim: 'a developed answer: opinion, comparison, an experience and a conditional',
      qs: [
        { q: 'مَا الَّذِي يَجْعَلُ المَطْعَمَ نَاجِحًا فِي رَأْيِكَ؟', en: 'What makes a restaurant successful?', start: 'أَعْتَقِدُ أَنَّ … أَهَمُّ مِنْ … لِأَنَّ …', model: 'أَعْتَقِدُ أَنَّ الطَّعَامَ الطَّازَجَ وَالخِدْمَةَ اللَّطِيفَةَ أَهَمُّ مِنَ المَكَانِ الفَاخِرِ، لِأَنَّ الزَّبُونَ يَرْجِعُ إِذَا شَعَرَ بِالتَّرْحِيبِ.', modelEn: 'I think fresh food and friendly service matter more than a luxurious place, because customers come back if they feel welcome.' },
        { q: 'قَارِنْ بَيْنَ المَقَاهِي هُنَا وَفِي البُلْدَانِ العَرَبِيَّةِ.', en: 'Compare cafés here and in Arab countries.', start: 'بَيْنَمَا يَشْرَبُ النَّاسُ هُنَا … يَجْلِسُ …', model: 'بَيْنَمَا يَشْرَبُ النَّاسُ هُنَا القَهْوَةَ بِسُرْعَةٍ قَبْلَ العَمَلِ، يَجْلِسُ النَّاسُ فِي المَقَاهِي العَرَبِيَّةِ سَاعَاتٍ يَتَحَدَّثُونَ وَيَلْعَبُونَ.', modelEn: 'While people here drink coffee quickly before work, people in Arab cafés sit for hours talking and playing games.' },
        { q: 'صِفْ مُشْكِلَةً حَدَثَتْ لَكَ فِي مَطْعَمٍ.', en: 'Describe a problem you had in a restaurant.', start: 'مَرَّةً طَلَبْتُ … فَأَحْضَرَ …', model: 'مَرَّةً طَلَبْتُ طَبَقًا نَبَاتِيًّا، فَأَحْضَرَ النَّادِلُ طَبَقًا بِاللَّحْمِ، فَشَرَحْتُ لَهُ بِأَدَبٍ، وَغَيَّرَهُ بِسُرْعَةٍ.', modelEn: 'Once I ordered a vegetarian dish and the waiter brought one with meat; I explained politely and he changed it quickly.' },
        { q: 'هَلْ يَجِبُ أَنْ نَتْرُكَ إِكْرَامِيَّةً لِلنَّادِلِ؟', en: 'Should we leave a tip for the waiter?', start: 'أَرَى أَنَّ … إِذَا … لِأَنَّ …', model: 'أَرَى أَنَّ الإِكْرَامِيَّةَ فِكْرَةٌ جَيِّدَةٌ إِذَا كَانَتِ الخِدْمَةُ مُمْتَازَةً، لِأَنَّ النُّدُلَ يَعْمَلُونَ سَاعَاتٍ طَوِيلَةً.', modelEn: 'I think a tip is a good idea if the service is excellent, because waiters work long hours.' },
        { q: 'لَوْ فَتَحْتَ مَقْهًى، كَيْفَ تَجْعَلُهُ مُمَيَّزًا؟', en: 'If you opened a café, how would you make it special?', start: 'لَوْ فَتَحْتُ مَقْهًى، لَجَعَلْتُهُ …', model: 'لَوْ فَتَحْتُ مَقْهًى، لَجَعَلْتُهُ مَكَانًا هَادِئًا لِلْقِرَاءَةِ، وَلَقَدَّمْتُ مَشْرُوبَاتٍ صِحِّيَّةً بِأَسْعَارٍ رَخِيصَةٍ.', modelEn: 'If I opened a café, I would make it a quiet place for reading and serve healthy drinks at low prices.' },
      ],
      foot: 'Stretch: opinion with a comparison, baynamā, a past narrative with fa- and a conditional (law … la-).',
      modelFoot: 'Stretch: comparatives, baynamā, a past story, idhā for a condition and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered every role-play task in a full sentence.' },
    { route: 'core', text: 'I made polite requests (urīdu … · min faḍlika).' },
    { route: 'develop', text: 'I asked about a price and used numbers correctly.' },
    { route: 'develop', text: 'I explained a problem politely (arjū an …).' },
    { route: 'stretch', text: 'I compared, told a past story and used a conditional.' },
  ],
};
speak.RP[1].tasks[1].help = 'لِخَمْسَةِ أَشْخَاصٍ';

const Q2_CORE = `مَرْحَبًا يَا يُوسُفُ،
كَيْفَ حَالُكَ؟ يَوْمَ السَّبْتِ ذَهَبْتُ إِلَى مَطْعَمٍ لُبْنَانِيٍّ جَدِيدٍ مَعَ أُسْرَتِي. طَلَبْتُ الحُمُّصَ وَالدَّجَاجَ المَشْوِيَّ، وَأَكَلْتُ الخُبْزَ العَرَبِيَّ، وَشَرِبْتُ عَصِيرَ لَيْمُونٍ. دَفَعْنَا خَمْسِينَ جُنَيْهًا لِأَرْبَعَةِ أَشْخَاصٍ، وَكَانَتِ الأَسْعَارُ مَعْقُولَةً. الطَّعَامُ كَانَ لَذِيذًا جِدًّا، وَالنَّادِلُ كَانَ لَطِيفًا. لٰكِنَّ المَطْعَمَ كَانَ مُزْدَحِمًا. سَأَرْجِعُ إِلَى المَطْعَمِ قَرِيبًا، وَسَأَطْلُبُ الفَلَافِلَ فِي المَرَّةِ القَادِمَةِ.
إِلَى اللِّقَاءِ،
آدَمُ`;
const Q2_FULL = `مَرْحَبًا يَا يُوسُفُ،
كَيْفَ حَالُكَ؟ أُرِيدُ أَنْ أُخْبِرَكَ عَنْ مَطْعَمٍ رَائِعٍ. يَوْمَ السَّبْتِ المَاضِي ذَهَبْتُ مَعَ أُسْرَتِي إِلَى مَطْعَمٍ لُبْنَانِيٍّ جَدِيدٍ فِي وَسَطِ المَدِينَةِ، بِمُنَاسَبَةِ نَجَاحِ أُخْتِي. طَلَبْتُ الحُمُّصَ وَالدَّجَاجَ المَشْوِيَّ مَعَ الأُرْزِ، وَشَرِبْتُ عَصِيرَ لَيْمُونٍ بِالنَّعْنَاعِ. دَفَعْنَا خَمْسِينَ جُنَيْهًا لِأَرْبَعَةِ أَشْخَاصٍ، وَهٰذَا سِعْرٌ مَعْقُولٌ. وَأَكَلْنَا الكُنَافَةَ فِي النِّهَايَةِ. فِي رَأْيِي كَانَ الطَّعَامُ طَازَجًا وَلَذِيذًا جِدًّا، وَكَانَ النَّادِلُ لَطِيفًا وَسَرِيعًا، لٰكِنَّ المَكَانَ كَانَ مُزْدَحِمًا وَصَاخِبًا قَلِيلًا. سَأَرْجِعُ إِلَيْهِ بِالتَّأْكِيدِ، وَفِي المَرَّةِ القَادِمَةِ سَأُجَرِّبُ الفَلَافِلَ. هَلْ تُرِيدُ أَنْ تَأْتِيَ مَعَنَا؟
مَعَ تَحِيَّاتِي،
آدَمُ`;
const Q3A_CORE = `فِي الشَّهْرِ المَاضِي ذَهَبْتُ إِلَى مَطْعَمٍ تُرْكِيٍّ مَعَ أُسْرَتِي، بِمُنَاسَبَةِ عِيدِ مِيلَادِ أُمِّي. ذَهَبْنَا يَوْمَ الجُمُعَةِ فِي السَّاعَةِ السَّابِعَةِ مَسَاءً. كُنَّا سِتَّةَ أَشْخَاصٍ. المَطْعَمُ كَبِيرٌ وَجَمِيلٌ، وَهُوَ قَرِيبٌ مِنْ بَيْتِنَا.
طَلَبْتُ الكَبَابَ مَعَ الأُرْزِ وَالسَّلَطَةِ، وَطَلَبَتْ أُخْتِي البِيتْزَا. شَرِبْنَا عَصِيرَ البُرْتُقَالِ، وَشَرِبَتْ أُمِّي الشَّايَ. بَعْدَ ذٰلِكَ أَكَلْنَا البَقْلَاوَةَ، وَكَانَتْ حُلْوَةً جِدًّا. دَفَعْنَا سِتِّينَ جُنَيْهًا، وَهٰذَا غَالٍ قَلِيلًا.
كَانَ الطَّعَامُ لَذِيذًا جِدًّا، وَكَانَ النَّادِلُ لَطِيفًا. لٰكِنَّ الطَّعَامَ وَصَلَ مُتَأَخِّرًا، لِأَنَّ المَطْعَمَ كَانَ مُزْدَحِمًا، وَانْتَظَرْنَا نِصْفَ سَاعَةٍ. فِي النِّهَايَةِ أَحْضَرَ النَّادِلُ كَعْكَةً لِأُمِّي، فَفَرِحَتْ كَثِيرًا. كَانَتْ لَيْلَةً جَمِيلَةً وَمُمْتِعَةً.
أَنْصَحُ أَصْدِقَائِي بِهٰذَا المَطْعَمِ، لِأَنَّ الطَّعَامَ لَذِيذٌ وَالمَكَانَ جَمِيلٌ وَالأَسْعَارَ مَعْقُولَةٌ. سَنَرْجِعُ إِلَيْهِ فِي عِيدِ مِيلَادِ أَبِي، وَسَأَطْلُبُ طَبَقًا جَدِيدًا، مِثْلَ السَّمَكِ المَشْوِيِّ.`;
const Q3A_FULL = `فِي الشَّهْرِ المَاضِي احْتَفَلْنَا بِعِيدِ مِيلَادِ أُمِّي فِي مَطْعَمٍ تُرْكِيٍّ يَقَعُ فِي وَسَطِ المَدِينَةِ. كَانَ أَبِي قَدْ حَجَزَ طَاوِلَةً لِسِتَّةِ أَشْخَاصٍ قَبْلَ أُسْبُوعٍ، لِأَنَّ المَطْعَمَ مَشْهُورٌ وَمُزْدَحِمٌ دَائِمًا فِي نِهَايَةِ الأُسْبُوعِ. ذَهَبْنَا بِالسَّيَّارَةِ فِي السَّابِعَةِ مَسَاءً.
بَدَأْنَا بِالمُقَبِّلَاتِ، ثُمَّ طَلَبْتُ طَبَقَ الكَبَابِ المَشْوِيِّ مَعَ الأُرْزِ، أَمَّا أُخْتِي فَاخْتَارَتْ طَبَقًا نَبَاتِيًّا، وَشَرِبْنَا عَصِيرَ الرُّمَّانِ الطَّازَجَ، وَخَتَمْنَا الوَجْبَةَ بِالبَقْلَاوَةِ وَالشَّايِ التُّرْكِيِّ اللَّذِيذِ. دَفَعْنَا تِسْعِينَ جُنَيْهًا، وَهُوَ سِعْرٌ مُرْتَفِعٌ قَلِيلًا، لٰكِنَّهُ مَعْقُولٌ لِأَنَّ الطَّعَامَ كَانَ طَازَجًا.
حَدَثَتْ مُشْكِلَةٌ صَغِيرَةٌ؛ فَقَدْ أَحْضَرَ النَّادِلُ لِأُخْتِي طَبَقًا بِاللَّحْمِ، فَشَرَحْنَا لَهُ بِأَدَبٍ، فَاعْتَذَرَ وَغَيَّرَهُ بِسُرْعَةٍ، ثُمَّ قَدَّمَ لِأُمِّي كَعْكَةً صَغِيرَةً هَدِيَّةً مِنَ المَطْعَمِ، فَضَحِكْنَا جَمِيعًا وَشَكَرْنَاهُ. كَانَتْ مُفَاجَأَةً جَمِيلَةً.
فِي رَأْيِي، تُهِمُّ الخِدْمَةُ الجَيِّدَةُ بِقَدْرِ مَا يُهِمُّ الطَّعَامُ اللَّذِيذُ، لِأَنَّ الزَّبُونَ يَتَذَكَّرُ المُعَامَلَةَ الطَّيِّبَةَ طَوِيلًا، لِذٰلِكَ أَنْصَحُ بِهٰذَا المَطْعَمِ بِالتَّأْكِيدِ. وَلَوْ كَانَتِ الأَسْعَارُ أَرْخَصَ قَلِيلًا، لَزُرْنَاهُ كُلَّ شَهْرٍ.`;
const Q3B_FULL = `يَخْتَلِفُ النَّاسُ فِي آرَائِهِمْ: هَلِ الأَكْلُ فِي المَطَاعِمِ أَفْضَلُ أَمِ الأَكْلُ فِي البَيْتِ؟ فِي أُسْرَتِي نَأْكُلُ فِي البَيْتِ عَادَةً، وَنَذْهَبُ إِلَى المَطْعَمِ مَرَّةً أَوْ مَرَّتَيْنِ فِي الشَّهْرِ فَقَطْ، لِأَنَّ أُمِّي تُحِبُّ الطَّبْخَ.
لِلْمَطَاعِمِ مَزَايَا كَثِيرَةٌ؛ فَهِيَ تُرِيحُنَا مِنَ الطَّبْخِ، وَتُتِيحُ لَنَا تَجْرِبَةَ أَطْبَاقٍ مِنْ ثَقَافَاتٍ مُخْتَلِفَةٍ. غَيْرَ أَنَّهَا غَالِيَةٌ، وَلَا نَعْرِفُ دَائِمًا كَمْ مِنَ الزَّيْتِ وَالمِلْحِ فِي الطَّعَامِ. أَمَّا الأَكْلُ فِي البَيْتِ فَأَرْخَصُ وَأَصَحُّ، وَيَجْمَعُ الأُسْرَةَ حَوْلَ المَائِدَةِ.
فِي العُطْلَةِ المَاضِيَةِ قَرَّرْنَا أَنْ نَطْبُخَ وَجْبَةً لُبْنَانِيَّةً فِي البَيْتِ بَدَلًا مِنَ المَطْعَمِ؛ حَضَّرْنَا الحُمُّصَ وَالتَّبُّولَةَ وَالدَّجَاجَ المَشْوِيَّ مَعًا، فَكَانَتِ الوَجْبَةُ لَذِيذَةً، وَكَلَّفَتْنَا نِصْفَ سِعْرِ المَطْعَمِ، وَشَعَرْنَا بِالفَخْرِ لِأَنَّنَا طَبَخْنَا بِأَنْفُسِنَا.
لِذٰلِكَ أَرَى أَنَّ الحَلَّ هُوَ التَّوَازُنُ: نَأْكُلُ فِي البَيْتِ أَغْلَبَ الأَيَّامِ، وَنَذْهَبُ إِلَى المَطْعَمِ فِي المُنَاسَبَاتِ. وَلَوْ تَعَلَّمَ الشَّبَابُ الطَّبْخَ، لَوَفَّرُوا مَالًا كَثِيرًا وَعَاشُوا حَيَاةً أَصَحَّ. وَأَنْتُمْ، أَيْنَ تُفَضِّلُونَ أَنْ تَأْكُلُوا؟`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a restaurant feedback form, write an email about a meal out, and write an extended piece with requests, prices, opinions and three time frames.',
  lift: [
    { ar: 'كَمْ ثَمَنُ …؟ · دَفَعْنَا خَمْسِينَ جُنَيْهًا', en: 'how much …? · we paid fifty pounds' },
    { ar: 'أَرْجُو أَنْ … · أَنْصَحُ بِـهٰذَا المَطْعَمِ', en: 'please … · I recommend this restaurant' },
    { ar: 'أَرْخَصُ · أَصَحُّ · أَهَمُّ مِنْ', en: 'cheaper · healthier · more important than' },
  ],
  checkTip: 'Check: numbers with nouns (khamsūna junayhan · arbaʿatu ashkhāṣin), adjective agreement, and the right tense for each bullet.',
  FORM: {
    title: 'Restaurant feedback form', ar: 'اسْتِمَارَةُ رَأْيِ الزَّبَائِنِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Your name', model: 'سَارَةُ عَلِيٌّ', modelEn: 'Sara Ali' },
      { core: true, ar: 'تَارِيخُ الزِّيَارَةِ', en: 'Date of your visit', model: 'الخَامِسُ مِنْ مَايُو', modelEn: '5 May' },
      { core: true, ar: 'عَدَدُ الأَشْخَاصِ', en: 'Number of people', model: 'أَرْبَعَةُ أَشْخَاصٍ', modelEn: 'four people' },
      { core: true, ar: 'مَاذَا طَلَبْتَ؟', en: 'What you ordered', model: 'دَجَاجٌ مَشْوِيٌّ مَعَ الأُرْزِ', modelEn: 'grilled chicken with rice' },
      { core: true, ar: 'مَاذَا شَرِبْتَ؟', en: 'What you drank', model: 'عَصِيرُ لَيْمُونٍ', modelEn: 'lemon juice' },
      { core: true, ar: 'كَمْ دَفَعْتَ؟', en: 'How much you paid', model: 'ثَلَاثُونَ جُنَيْهًا', modelEn: 'thirty pounds' },
      { ar: 'رَأْيُكَ فِي الخِدْمَةِ (كَلِمَةٌ)', en: 'Your opinion of the service (one word)', model: 'مُمْتَازَةٌ', modelEn: 'excellent (f., agrees with al-khidma)' },
      { ar: 'جُمْلَةٌ: هَلْ سَتَرْجِعُ؟ وَلِمَاذَا؟', en: 'ONE sentence: will you come back, and why?', model: 'نَعَمْ، سَأَرْجِعُ لِأَنَّ الطَّعَامَ لَذِيذٌ وَالأَسْعَارَ مَعْقُولَةٌ.', modelEn: 'Yes, I will come back because the food is tasty and the prices are reasonable.' },
    ],
    foot: 'One word or a short phrase for each box — box 7 must agree (al-khidma → mumtāza); box 8 is a full sentence.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Numbers: أَرْبَعَةُ أَشْخَاصٍ (3–10), ثَلَاثُونَ جُنَيْهًا (11+).',
  },
  Q2: {
    short: 'an email about a meal out', title: 'Question 2: an email about a restaurant', ar: 'رِسَالَةٌ عَنْ مَطْعَمٍ',
    task: 'Write an email in Arabic of about 80–90 words to a friend about a meal you had in a restaurant. You must include: • where you went, when and with whom • what you ordered and how much you paid • your opinion of the food and the service • whether you will go back and what you will order next time.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Past tense for the visit; numbers and a price.', 'An opinion with a “but”; a future sentence.', 'About 80–90 words.'],
    phrases: [['ذَهَبْتُ إِلَى مَطْعَمٍ … مَعَ …', 'I went to a … restaurant with …'], ['طَلَبْتُ … وَشَرِبْتُ …', 'I ordered … and drank …'], ['دَفَعْنَا … جُنَيْهًا', 'we paid … pounds'], ['فِي المَرَّةِ القَادِمَةِ سَأُجَرِّبُ …', 'next time I will try …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلِكْتِرُونِيَّةً إِلَى صَدِيقٍ عَنْ وَجْبَةٍ تَنَاوَلْتَهَا فِي مَطْعَمٍ (٨٠–٩٠ كَلِمَةً).', 'An email to a friend about a meal in a restaurant (80–90 words).'],
      ['1', 'أَيْنَ ذَهَبْتَ، وَمَتَى، وَمَعَ مَنْ؟', 'Where, when and with whom'],
      ['2', 'مَاذَا طَلَبْتَ، وَكَمْ دَفَعْتَ؟', 'What you ordered; how much you paid'],
      ['3', 'مَا رَأْيُكَ فِي الطَّعَامِ وَالخِدْمَةِ؟', 'Your opinion of the food and service'],
      ['4', 'هَلْ سَتَرْجِعُ؟ وَمَاذَا سَتَطْلُبُ فِي المَرَّةِ القَادِمَةِ؟', 'Will you go back; what you will order next time'],
    ],
    qwords: 'أَيْنَ (where) · مَتَى (when) · مَعَ مَنْ (with whom) · كَمْ (how much) — bullets 1–3 are in the PAST, bullet 4 in the FUTURE',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'يَوْمَ ______ ذَهَبْتُ إِلَى مَطْعَمٍ ______ مَعَ ______ .', 'On … I went to a … restaurant with …'],
      ['2', 'طَلَبْتُ ______ وَشَرِبْتُ ______ . دَفَعْنَا ______ جُنَيْهًا.', 'I ordered … and drank … We paid … pounds.'],
      ['3', 'كَانَ الطَّعَامُ ______ ، لٰكِنَّ ______ .', 'The food was …, but …'],
      ['4', 'سَأَرْجِعُ قَرِيبًا، وَسَأَطْلُبُ ______ .', 'I will go back soon, and I will order …'],
      ['end', 'إِلَى اللِّقَاءِ، ______', 'See you soon, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Yusuf, how are you? On Saturday I went to a new Lebanese restaurant with my family. I ordered hummus and grilled chicken and drank a lemon juice. We paid fifty pounds. The food was very tasty and the waiter was kind, but the restaurant was crowded. I will go back to the restaurant soon, and next time I will order falafel. See you soon, Adam.”',
      find: ['ذَهَبْتُ', 'طَلَبْتُ', 'دَفَعْنَا', 'سَأَرْجِعُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Hello Yusuf, how are you? I want to tell you about a wonderful restaurant. Last Saturday I went with my family to a new Lebanese restaurant in the town centre to celebrate my sister’s success. I ordered hummus and grilled chicken with rice, and drank lemon juice with mint. We paid fifty pounds for four people, which is a reasonable price. In my opinion the food was fresh and very tasty, and the waiter was kind and quick, but the place was crowded and a bit noisy. I will definitely go back, and next time I will try the falafel. Would you like to come with us? With my greetings, Adam.”',
      find: ['بِمُنَاسَبَةِ', 'لِأَرْبَعَةِ أَشْخَاصٍ', 'لٰكِنَّ المَكَانَ', 'سَأُجَرِّبُ'],
    },
  },
  Q3: {
    a: { title: 'زِيَارَةٌ إِلَى مَطْعَمٍ', en: 'A visit to a restaurant', bullets: 'أَيْنَ وَمَتَى وَمَعَ مَنْ؟ · مَاذَا طَلَبْتُمْ وَكَمْ دَفَعْتُمْ؟ · صِفْ مُشْكِلَةً أَوْ مُفَاجَأَةً · هَلْ تَنْصَحُ بِالمَطْعَمِ؟ وَهَلْ سَتَرْجِعُ؟', bulletsEn: 'Where, when, with whom · what you ordered and paid · a problem or a surprise · would you recommend it; will you go back?' },
    b: { title: 'الأَكْلُ فِي المَطْعَمِ أَمْ فِي البَيْتِ؟', en: 'Eating out or eating at home?', bullets: 'عَادَاتُ أُسْرَتِكَ · مَزَايَا المَطَاعِمِ وَعُيُوبُهَا · صِفْ تَجْرِبَةً حَدِيثَةً · مَا رَأْيُكَ؟ وَمَاذَا تَقْتَرِحُ؟', bulletsEn: 'Your family’s habits · pros and cons of restaurants · a recent experience · your opinion and a suggestion' },
    plan: [
      'Past — the visit: when, where, with whom; booking (kāna abī qad ḥajaza …).',
      'Past — the meal: ordered, drank, paid (numbers + prices).',
      'Past — a problem or a surprise: fa- to tell the story in order.',
      'Opinion + future — anṣaḥu bi- … / sa-narjiʿu …; Stretch: law … la-.',
    ],
    frames: [
      { ar: 'طَلَبْتُ الكَبَابَ مَعَ الأُرْزِ.', en: 'past: I ordered kebab with rice.' },
      { ar: 'أَنْصَحُ بِهٰذَا المَطْعَمِ لِأَنَّ …', en: 'present opinion: I recommend this restaurant because …' },
      { ar: 'سَنَرْجِعُ إِلَيْهِ فِي العِيدِ.', en: 'future: we will go back there at Eid.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Past: a Turkish restaurant last month for my mother’s birthday, Friday at seven; big, pretty, near home → the meal: kebab with rice and salad, my sister’s pizza, orange juice, baklava; sixty pounds (a bit expensive) → a problem: the food arrived late (crowded), but the waiter brought a cake for my mother → opinion and future: I recommend it; we will go back for my father’s birthday.', find: ['ذَهَبْتُ', 'دَفَعْنَا سِتِّينَ جُنَيْهًا', 'لٰكِنَّ الطَّعَامَ وَصَلَ', 'سَنَرْجِعُ'], notes: 'Core model: simple sentences, past tense throughout the visit, a price, a “but” and a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Past: Mum’s birthday in a Turkish restaurant in the centre; Dad had booked a table for six a week before (always crowded) → the meal: starters, then grilled kebab with rice; as for my sister, she chose a vegetarian dish; ninety pounds — a bit high but reasonable → a problem: a meat dish for my sister; we explained politely; he apologised, changed it and gave Mum a small cake from the restaurant — a lovely surprise → opinion: good service matters as much as good food; “if prices were a little lower, we would visit every month”.', find: ['كَانَ أَبِي قَدْ حَجَزَ', 'أَمَّا أُخْتِي فَاخْتَارَتْ', 'فَاعْتَذَرَ وَغَيَّرَهُ', 'لَوْ كَانَتِ … لَزُرْنَاهُ'], notes: 'Full-mark model: the past perfect (kāna qad), ammā … fa-, a story told with fa-, numbers, a comparison of importance and a conditional.' },
      { which: 'ب', level: 'Full', subtitle: 'eating out or at home', text: Q3B_FULL, en: 'Habits: we usually eat at home and go out once or twice a month → pros and cons: restaurants save cooking and let us try other cultures’ dishes, but they are expensive and we don’t know how much oil and salt is used; as for home food, it is cheaper and healthier and brings the family together → past: last holiday we cooked a Lebanese meal at home together — tasty, and half the price → opinion: balance; “if young people learnt to cook, they would save a lot of money and live healthier lives”.', find: ['غَيْرَ أَنَّهَا غَالِيَةٌ', 'أَمَّا الأَكْلُ فِي البَيْتِ فَأَرْخَصُ', 'قَرَّرْنَا أَنْ نَطْبُخَ', 'لَوْ … لَوَفَّرُوا'], notes: 'Full-mark model for the Stretch title: advantages and disadvantages, comparatives, a past decision with an + subjunctive, an opinion and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; numbers and prices correct.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: past tense for the visit and a future sentence at the end.' },
    { route: 'develop', text: 'Q3: four paragraphs telling the story in order.' },
    { route: 'stretch', text: 'Q3: comparatives, kāna qad, ammā … fa- or a conditional.' },
  ],
};
write.lift[1].ar = 'أَرْجُو أَنْ … · أَنْصَحُ بِهٰذَا المَطْعَمِ';

module.exports = { speak, write };
