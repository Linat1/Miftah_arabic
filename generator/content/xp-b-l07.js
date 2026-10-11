'use strict';
/* Exam-practice data · TB-L07 · Clothes, Accessories and Shopping (comparatives; numbers and prices; demonstratives; object pronouns). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'B', n: 7, short: 'Clothes and Shopping', arShort: 'المَلَابِسُ وَالتَّسَوُّقُ', fileTitle: 'Clothes_Accessories_and_Shopping', title: 'Clothes, Accessories and Shopping', ar: 'المَلَابِسُ وَالإِكْسِسْوَارَاتُ وَالتَّسَوُّقُ', icon: 'FaShirt', grammar: 'comparatives (arkhaṣu min); prices and numbers; hādhā / hādhihi; object pronouns (ujarribuhu)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: buy, try on, compare and return clothes — size, colour, material, price — with comparatives, demonstratives and object pronouns.',
  words: [
    w(1, 'قَمِيصٌ · بِنْطَالٌ', 'a shirt · trousers', [['pl.', 'قُمْصَانٌ · بَنَاطِيلُ']]),
    w(2, 'فُسْتَانٌ · تَنُّورَةٌ', 'a dress · a skirt', [['pl.', 'فَسَاتِينُ · تَنَانِيرُ']]),
    w(3, 'حِذَاءٌ', 'a pair of shoes', [['sg.', 'حِذَاءٌ'], ['pl.', 'أَحْذِيَةٌ']]),
    w(4, 'مِعْطَفٌ · سُتْرَةٌ', 'a coat · a jacket', [['pl.', 'مَعَاطِفُ · سُتَرٌ']]),
    w(5, 'قُبَّعَةٌ · نَظَّارَةٌ شَمْسِيَّةٌ', 'a hat · sunglasses', [['pl.', 'قُبَّعَاتٌ']], { tag: 'accessories' }),
    w(6, 'مَقَاسٌ', 'a size', [['sg.', 'مَقَاسٌ'], ['pl.', 'مَقَاسَاتٌ'], ['my', 'مَقَاسِي']]),
    w(7, 'أُجَرِّبُهُ', 'I try it on (m.)', [['f.', 'أُجَرِّبُهَا'], ['can I?', 'هَلْ يُمْكِنُ أَنْ أُجَرِّبَهُ؟']], { tag: 'object pronoun' }),
    w(8, 'هٰذَا · هٰذِهِ', 'this (m. · f.)', [['that m.', 'ذٰلِكَ'], ['that f.', 'تِلْكَ']], { tag: 'demonstratives' }),
    w(9, 'أَرْخَصُ مِنْ · أَغْلَى مِنْ', 'cheaper than · dearer than', [['bigger', 'أَكْبَرُ'], ['smaller', 'أَصْغَرُ']], { tag: 'comparatives' }),
    w(10, 'بِكَمْ …؟', 'how much is …?', [['m.', 'بِكَمْ هٰذَا؟'], ['f.', 'بِكَمْ هٰذِهِ؟']], { tag: 'price' }),
    w(11, 'ضَيِّقٌ · وَاسِعٌ', 'tight · loose', [['f.', 'ضَيِّقَةٌ · وَاسِعَةٌ'], ['too', 'ضَيِّقٌ جِدًّا عَلَيَّ']]),
    w(12, 'أُرْجِعُ', 'I return (an item)', [['past', 'أَرْجَعْتُ'], ['he', 'يُرْجِعُ'], ['we', 'نُرْجِعُ']]),
  ],
  words1: { eyebrow: 'Language bank · clothes and accessories (sg. · pl.)', title: 'What are you wearing?', ar: 'مَاذَا تَلْبَسُ؟', notes: 'LANGUAGE BANK (2 min) — broken plurals: قُمْصَانٌ · فَسَاتِينُ · أَحْذِيَةٌ · مَعَاطِفُ. Gender drives agreement: قَمِيصٌ أَبْيَضُ (m.) · تَنُّورَةٌ سَوْدَاءُ (f.).' },
  words2: { eyebrow: 'Language bank · in the shop: this, it, cheaper, how much', title: 'Can I try it on?', ar: 'هَلْ يُمْكِنُ أَنْ أُجَرِّبَهُ؟', notes: 'LANGUAGE BANK (2 min) — object pronouns: أُجَرِّبُهُ (the shirt) · أُجَرِّبُهَا (the dress) · سَآخُذُهُ. Comparatives do not change for gender: هٰذِهِ أَرْخَصُ مِنْ تِلْكَ. Prices 11–99 take a singular accusative noun: خَمْسَةٌ وَعِشْرُونَ دِينَارًا.' },
  checkCore: 'asked for an item, a size and a colour, and asked the price',
  checkDevelop: 'compared two items (arkhaṣu min) and used an object pronoun (-hu / -hā)',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'in a clothes shop', title: 'Role play A — Buying a jacket', ar: 'أَشْتَرِي سُتْرَةً', you: 'a customer', them: 'the shop assistant',
      tasks: [
        { core: true, ex: 'أَهْلًا، كَيْفَ أُسَاعِدُكَ؟', task: 'Say what you are looking for.', help: 'أَبْحَثُ عَنْ …', model: 'أَبْحَثُ عَنْ سُتْرَةٍ لِلشِّتَاءِ، مِنْ فَضْلِكَ.', modelEn: 'I am looking for a winter jacket, please.' },
        { core: true, ex: 'أَيَّ لَوْنٍ تُرِيدُ؟', task: 'Say which colour.', help: 'أُرِيدُ سُتْرَةً …', model: 'أُرِيدُ سُتْرَةً سَوْدَاءَ أَوْ زَرْقَاءَ غَامِقَةً.', modelEn: 'I would like a black or dark blue jacket.' },
        { core: true, ex: 'مَا مَقَاسُكَ؟', task: 'Give your size.', help: 'مَقَاسِي …', model: 'مَقَاسِي مُتَوَسِّطٌ.', modelEn: 'My size is medium.' },
        { core: true, ex: 'تَفَضَّلْ، هٰذِهِ السُّتْرَةُ الزَّرْقَاءُ.', task: 'Ask to try it on, then ask the price.', help: 'هَلْ يُمْكِنُ أَنْ أُجَرِّبَهَا؟ بِكَمْ …؟', model: 'هَلْ يُمْكِنُ أَنْ أُجَرِّبَهَا؟ وَبِكَمْ هِيَ؟', modelEn: 'Can I try it on? And how much is it?' },
        { core: true, unexpected: true, ex: 'كَيْفَ تَدْفَعُ؟', task: 'Answer the unexpected question.', help: 'بِالبِطَاقَةِ / نَقْدًا', model: 'سَأَدْفَعُ بِالبِطَاقَةِ، مِنْ فَضْلِكَ.', modelEn: 'I will pay by card, please.' },
      ],
      girl: 'أُسَاعِدُكِ · تُرِيدِينَ · مَقَاسُكِ · تَفَضَّلِي · تَدْفَعِينَ',
      notes: 'Core: suttra is feminine → sawdāʾ, zarqāʾ ghāmiqa, ujarribuhā, hiya. Sizes: ṣaghīr · mutawassiṭ · kabīr.',
    },
    {
      id: 'B', level: 'Core+', setting: 'comparing two items', title: 'Role play B — Which trainers?', ar: 'أَيُّ حِذَاءٍ رِيَاضِيٍّ؟', you: 'a customer', them: 'a shop assistant',
      tasks: [
        { core: true, ex: 'عِنْدَنَا هٰذَا الحِذَاءُ الأَبْيَضُ، وَذٰلِكَ الحِذَاءُ الأَحْمَرُ.', task: 'Ask the price of both.', help: 'بِكَمْ هٰذَا؟ وَبِكَمْ ذٰلِكَ؟', model: 'بِكَمْ هٰذَا الأَبْيَضُ؟ وَبِكَمْ ذٰلِكَ الأَحْمَرُ؟', modelEn: 'How much is this white one? And that red one?' },
        { core: true, ex: 'الأَبْيَضُ بِسِتِّينَ، وَالأَحْمَرُ بِخَمْسَةٍ وَأَرْبَعِينَ.', task: 'Compare the prices.', help: 'الأَحْمَرُ أَرْخَصُ مِنْ …', model: 'الأَحْمَرُ أَرْخَصُ مِنَ الأَبْيَضِ بِخَمْسَةَ عَشَرَ دِينَارًا.', modelEn: 'The red one is fifteen dinars cheaper than the white one.' },
        { ex: 'لٰكِنَّ الأَبْيَضَ أَخَفُّ وَأَقْوَى.', task: 'ASK which is better for running.', help: 'أَيُّهُمَا أَفْضَلُ لِلْجَرْيِ؟', model: 'أَيُّهُمَا أَفْضَلُ لِلْجَرْيِ؟ لِأَنِّي أَجْرِي كُلَّ صَبَاحٍ.', modelEn: 'Which of the two is better for running? Because I run every morning.' },
        { ex: 'الأَبْيَضُ بِالتَّأْكِيدِ.', task: 'Decide and give a reason.', help: 'إِذَنْ سَآخُذُ … لِأَنَّ …', model: 'إِذَنْ سَآخُذُ الأَبْيَضَ، لِأَنَّ الجَوْدَةَ أَهَمُّ مِنَ السِّعْرِ.', modelEn: 'Then I’ll take the white ones, because quality matters more than price.' },
        { unexpected: true, ex: 'هَلْ تُرِيدُ جَوَارِبَ أَيْضًا؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، … / لَا، شُكْرًا، عِنْدِي …', model: 'لَا، شُكْرًا، عِنْدِي جَوَارِبُ كَثِيرَةٌ فِي البَيْتِ.', modelEn: 'No thanks, I have lots of socks at home.' },
      ],
      girl: 'تُرِيدِينَ',
      notes: 'Task 1: hādhā (near) vs dhālika (far). Task 2: a comparative with bi- + amount. Task 3: the CANDIDATE asks (ayyuhumā). Note jawāribu (diptote) after ʿindī.',
    },
    {
      id: 'C', level: 'Develop', setting: 'returning an item', title: 'Role play C — Returning a present', ar: 'أُرْجِعُ هَدِيَّةً', you: 'a customer', them: 'the customer-service assistant',
      tasks: [
        { ex: 'مَا المُشْكِلَةُ؟', task: 'Say what you want to return and why.', help: 'أُرِيدُ أَنْ أُرْجِعَ … لِأَنَّهُ …', model: 'أُرِيدُ أَنْ أُرْجِعَ هٰذَا القَمِيصَ، لِأَنَّهُ ضَيِّقٌ جِدًّا عَلَيَّ.', modelEn: 'I want to return this shirt, because it is much too tight on me.' },
        { ex: 'مَتَى اشْتَرَيْتَهُ؟', task: 'Explain (past + someone else bought it).', help: 'اشْتَرَتْهُ … قَبْلَ …', model: 'اشْتَرَتْهُ لِي خَالَتِي هَدِيَّةً قَبْلَ أُسْبُوعٍ، وَهٰذَا هُوَ الإِيصَالُ.', modelEn: 'My aunt bought it for me as a present a week ago, and here is the receipt.' },
        { ex: 'هَلْ تُرِيدُ مَقَاسًا أَكْبَرَ أَمْ نُقُودَكَ؟', task: 'Choose and explain.', help: 'أُفَضِّلُ … لِأَنَّ …', model: 'أُفَضِّلُ مَقَاسًا أَكْبَرَ، لِأَنَّ اللَّوْنَ يُعْجِبُنِي كَثِيرًا.', modelEn: 'I’d prefer a bigger size, because I really like the colour.' },
        { ex: '… لِلْأَسَفِ لَيْسَ عِنْدَنَا مَقَاسٌ أَكْبَرُ بِهٰذَا اللَّوْنِ.', task: 'ASK about another colour or item.', help: 'هَلْ عِنْدَكُمْ …؟', model: 'هَلْ عِنْدَكُمْ هٰذَا القَمِيصُ نَفْسُهُ بِاللَّوْنِ الأَخْضَرِ؟', modelEn: 'Do you have this same shirt in green?' },
        { unexpected: true, ex: 'مَاذَا سَتَقُولُ لِخَالَتِكَ؟', task: 'Answer the unexpected question (future).', help: 'سَأَشْكُرُهَا … وَسَأَقُولُ …', model: 'سَأَشْكُرُهَا عَلَى الهَدِيَّةِ، وَسَأَلْبَسُ القَمِيصَ الجَدِيدَ عِنْدَمَا أَزُورُهَا.', modelEn: 'I will thank her for the present and wear the new shirt when I visit her.' },
      ],
      girl: 'اشْتَرَيْتِهِ · تُرِيدِينَ · نُقُودَكِ · سَتَقُولِينَ · لِخَالَتِكِ — she may return a بُلُوزَةٌ: لِأَنَّهَا ضَيِّقَةٌ',
      notes: 'Develop: an + subjunctive (an urjiʿa), object pronouns on past verbs (ishtaraythu), a preference + reason, a question, a future with -hā.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a radio debate', title: 'Role play D — Fast fashion', ar: 'المُوضَةُ السَّرِيعَةُ', you: 'a young guest', them: 'a radio presenter',
      tasks: [
        { ex: 'لِمَاذَا يَشْتَرِي الشَّبَابُ مَلَابِسَ كَثِيرَةً؟', task: 'Give two reasons.', help: 'لِأَنَّهَا … وَلِأَنَّ …', model: 'لِأَنَّهَا رَخِيصَةٌ جِدًّا، وَلِأَنَّ وَسَائِلَ التَّوَاصُلِ تَعْرِضُ مُوضَةً جَدِيدَةً كُلَّ أُسْبُوعٍ.', modelEn: 'Because they are very cheap, and because social media shows a new trend every week.' },
        { ex: 'مَا المُشْكِلَةُ فِي ذٰلِكَ؟', task: 'Explain an effect.', help: 'المُشْكِلَةُ أَنَّ … مِمَّا …', model: 'المُشْكِلَةُ أَنَّنَا نَرْمِي المَلَابِسَ بَعْدَ أَشْهُرٍ قَلِيلَةٍ، مِمَّا يَمْلَأُ الأَرْضَ بِالنُّفَايَاتِ.', modelEn: 'The problem is we throw clothes away after a few months, which fills the earth with waste.' },
        { ex: 'هَلْ غَيَّرْتَ عَادَاتِكَ؟', task: 'Describe a change (past → present).', help: 'كُنْتُ … أَمَّا الآنَ فَـ…', model: 'كُنْتُ أَشْتَرِي قَمِيصًا كُلَّ أُسْبُوعٍ، أَمَّا الآنَ فَأَشْتَرِي أَقَلَّ وَأَخْتَارُ المَلَابِسَ المُسْتَعْمَلَةَ أَحْيَانًا.', modelEn: 'I used to buy a shirt every week; now I buy less and sometimes choose second-hand clothes.' },
        { ex: 'لٰكِنَّ المَلَابِسَ الجَيِّدَةَ غَالِيَةٌ!', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا أَغْلَى، غَيْرَ أَنَّهَا تَبْقَى سَنَوَاتٍ، فَهِيَ فِي النِّهَايَةِ أَرْخَصُ.', modelEn: 'It is true they are dearer, but they last for years, so in the end they are cheaper.' },
        { unexpected: true, ex: 'لَوْ كُنْتَ مُدِيرَ شَرِكَةِ مَلَابِسَ، مَاذَا تُغَيِّرُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ كُنْتُ …، لَـ…', model: 'لَوْ كُنْتُ مُدِيرَ شَرِكَةٍ، لَصَنَعْتُ مَلَابِسَ مِنْ مَوَادَّ مُعَادَةِ التَّدْوِيرِ، وَلَأَصْلَحْتُ المَلَابِسَ القَدِيمَةَ مَجَّانًا.', modelEn: 'If I ran a clothing company, I would make clothes from recycled materials and repair old clothes for free.' },
      ],
      girl: 'غَيَّرْتِ عَادَاتِكِ · كُنْتِ مُدِيرَةَ شَرِكَةٍ',
      notes: 'Stretch: two reasons, al-mushkila anna … mimmā, kuntu + present vs ammā … fa-, a concession with a comparative, law … la-.',
      modelFoot: 'Stretch: reasons, mimmā, a personal change, ṣaḥīḥun anna … ghayra anna and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'مَلَابِسِي', aim: 'one full sentence per question',
      qs: [
        { q: 'مَاذَا تَلْبَسُ الآنَ؟', en: 'What are you wearing now?', start: 'أَلْبَسُ … وَ…', model: 'أَلْبَسُ قَمِيصًا أَبْيَضَ وَبِنْطَالًا أَسْوَدَ.', modelEn: 'I am wearing a white shirt and black trousers.' },
        { q: 'مَا مَلَابِسُكَ المُفَضَّلَةُ؟', en: 'What are your favourite clothes?', start: 'أُحِبُّ … لِأَنَّ …', model: 'أُحِبُّ المَلَابِسَ الرِّيَاضِيَّةَ، لِأَنَّهَا مُرِيحَةٌ.', modelEn: 'I like sportswear, because it is comfortable.' },
        { q: 'أَيْنَ تَشْتَرِي مَلَابِسَكَ؟', en: 'Where do you buy your clothes?', start: 'أَشْتَرِيهَا مِنْ …', model: 'أَشْتَرِيهَا مِنَ المَرْكَزِ التِّجَارِيِّ مَعَ أُمِّي.', modelEn: 'I buy them at the shopping centre with my mum.' },
        { q: 'هَلْ تُحِبُّ التَّسَوُّقَ؟', en: 'Do you like shopping?', start: 'نَعَمْ / لَا، …', model: 'لَا، لَا أُحِبُّهُ كَثِيرًا، لِأَنَّهُ مُتْعِبٌ.', modelEn: 'No, I don’t like it much, because it is tiring.' },
        { q: 'مَاذَا تَلْبَسُ فِي الأَعْيَادِ؟', en: 'What do you wear at Eid?', start: 'أَلْبَسُ … جَدِيدًا', model: 'أَلْبَسُ ثَوْبًا جَدِيدًا أَبْيَضَ، وَحِذَاءً أَسْوَدَ.', modelEn: 'I wear a new white thobe and black shoes.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a colour that agrees = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'التَّسَوُّقُ', aim: 'two or three sentences, with a comparison or a past purchase',
      qs: [
        { q: 'صِفْ آخِرَ شَيْءٍ اشْتَرَيْتَهُ.', en: 'Describe the last thing you bought.', start: 'اشْتَرَيْتُ … بِـ… وَكَانَ …', model: 'اشْتَرَيْتُ مِعْطَفًا رَمَادِيًّا بِسَبْعِينَ جُنَيْهًا، وَكَانَ أَرْخَصَ مِمَّا تَوَقَّعْتُ بِسَبَبِ التَّخْفِيضَاتِ.', modelEn: 'I bought a grey coat for seventy pounds — cheaper than I expected because of the sales.' },
        { q: 'هَلْ تُفَضِّلُ التَّسَوُّقَ فِي المَحَلَّاتِ أَمْ عَلَى الإِنْتَرْنِتِ؟', en: 'Shops or online?', start: 'أُفَضِّلُ … لِأَنَّ … أَمَّا …', model: 'أُفَضِّلُ المَحَلَّاتِ، لِأَنِّي أُجَرِّبُ المَلَابِسَ قَبْلَ أَنْ أَشْتَرِيَهَا، أَمَّا الإِنْتَرْنِتُ فَأَسْرَعُ لٰكِنَّهُ مُخَاطَرَةٌ.', modelEn: 'I prefer shops, because I try clothes on before buying; online is quicker but a risk.' },
        { q: 'هَلْ يَجِبُ أَنْ يَلْبَسَ الطُّلَّابُ زِيًّا مَدْرَسِيًّا؟', en: 'Should students wear uniform?', start: 'نَعَمْ / لَا، لِأَنَّ …', model: 'نَعَمْ، لِأَنَّ الزِّيَّ يَجْعَلُ الجَمِيعَ مُتَسَاوِينَ، وَلَا يُفَكِّرُ أَحَدٌ فِي المُوضَةِ.', modelEn: 'Yes, because uniform makes everyone equal, and nobody thinks about fashion.' },
        { q: 'مَاذَا تَلْبَسُ فِي حَفْلَةٍ؟', en: 'What do you wear to a party?', start: 'أَلْبَسُ … مَعَ …', model: 'أَلْبَسُ فُسْتَانًا طَوِيلًا أَخْضَرَ، مَعَ حِذَاءٍ ذَهَبِيٍّ وَحَقِيبَةٍ صَغِيرَةٍ.', modelEn: 'I wear a long green dress with gold shoes and a small bag.' },
        { q: 'مَاذَا سَتَشْتَرِي لِلْعِيدِ القَادِمِ؟', en: 'What will you buy for the next Eid?', start: 'سَأَشْتَرِي … لِأَنَّ …', model: 'سَأَشْتَرِي حِذَاءً جَدِيدًا، لِأَنَّ حِذَائِيَ القَدِيمَ أَصْبَحَ ضَيِّقًا عَلَيَّ.', modelEn: 'I will buy new shoes, because my old ones have become too tight.' },
      ],
      foot: 'Develop: two or three sentences — prices, comparisons, an object pronoun, a reason and the future.',
      modelFoot: 'Description + price + comparison + reason = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'المُوضَةُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلْ تَعْكِسُ المَلَابِسُ شَخْصِيَّةَ الإِنْسَانِ؟', en: 'Do clothes reflect personality?', start: 'إِلَى حَدٍّ مَا، فَمَثَلًا …', model: 'إِلَى حَدٍّ مَا، فَمَثَلًا الشَّخْصُ الَّذِي يَلْبَسُ أَلْوَانًا زَاهِيَةً يَكُونُ غَالِبًا جَرِيئًا وَمَرِحًا.', modelEn: 'To some extent — someone who wears bright colours, for example, is often bold and cheerful.' },
        { q: 'كَيْفَ تَغَيَّرَتِ المُوضَةُ مُنْذُ أَيَّامِ وَالِدَيْكَ؟', en: 'How has fashion changed since your parents’ day?', start: 'كَانَتْ أُمِّي تَلْبَسُ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَتْ أُمِّي تَخِيطُ مَلَابِسَهَا بِنَفْسِهَا، أَمَّا اليَوْمَ فَنَشْتَرِي كُلَّ شَيْءٍ جَاهِزًا وَرَخِيصًا.', modelEn: 'My mother used to sew her own clothes; today we buy everything ready-made and cheap.' },
        { q: 'هَلِ المَلَابِسُ المُسْتَعْمَلَةُ فِكْرَةٌ جَيِّدَةٌ؟', en: 'Are second-hand clothes a good idea?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ بَعْضَ النَّاسِ يَخْجَلُونَ مِنْهَا، غَيْرَ أَنَّهَا تُوَفِّرُ المَالَ وَتَحْمِي البِيئَةَ مَعًا.', modelEn: 'It is true some people are embarrassed by them, but they save money and protect the environment at once.' },
        { q: 'صِفْ تَجْرِبَةَ تَسَوُّقٍ سَيِّئَةً.', en: 'Describe a bad shopping experience.', start: 'اشْتَرَيْتُ … عَلَى الإِنْتَرْنِتِ، فَلَمَّا وَصَلَ …', model: 'اشْتَرَيْتُ حِذَاءً عَلَى الإِنْتَرْنِتِ، فَلَمَّا وَصَلَ وَجَدْتُهُ أَصْغَرَ بِمَقَاسَيْنِ، وَاسْتَغْرَقَ إِرْجَاعُهُ شَهْرًا كَامِلًا.', modelEn: 'I bought shoes online; when they arrived they were two sizes too small, and returning them took a whole month.' },
        { q: 'لَوْ أَعْطَوْكَ مِئَةَ جُنَيْهٍ لِلتَّسَوُّقِ، كَيْفَ تُنْفِقُهَا؟', en: 'If you were given £100 to shop, how would you spend it?', start: 'لَوْ أَعْطَوْنِي …، لَاشْتَرَيْتُ …', model: 'لَوْ أَعْطَوْنِي مِئَةَ جُنَيْهٍ، لَاشْتَرَيْتُ مِعْطَفًا جَيِّدًا وَاحِدًا بَدَلًا مِنْ خَمْسَةِ قُمْصَانٍ رَخِيصَةٍ.', modelEn: 'If I were given £100, I would buy one good coat instead of five cheap shirts.' },
      ],
      foot: 'Stretch: a relative clause, kāna + present vs ammā … fa-, a concession, lammā … and law … la-.',
      modelFoot: 'Stretch: alladhī yalbasu, past vs present, ṣaḥīḥun anna … ghayra anna, lammā, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I asked for a size, a colour and the price.' },
    { route: 'core', text: 'Colours agreed with the clothes (m. / f.).' },
    { route: 'develop', text: 'I compared two items with arkhaṣu min / aghlā min.' },
    { route: 'develop', text: 'I used -hu / -hā (ujarribuhu, sa-ākhudhuhā).' },
    { route: 'stretch', text: 'I used a concession, ammā … fa- or law … la-.' },
  ],
};
speak.RP[3].tasks[2].help = 'كُنْتُ … أَمَّا الآنَ فَأَشْتَرِي …';
speak.RP[3].tasks[4].help = 'لَوْ كُنْتُ …، لَصَنَعْتُ …';
speak.CONV[2].qs[1].start = 'كَانَتْ أُمِّي … أَمَّا اليَوْمَ فَنَشْتَرِي …';
speak.CONV[1].qs[0].start = 'اشْتَرَيْتُ … بِسَبْعِينَ … وَكَانَ …';

const Q2_CORE = `مَرْحَبًا يَا يُوسُفُ،
كَيْفَ حَالُكَ؟ أَمْسِ ذَهَبْتُ إِلَى المَرْكَزِ التِّجَارِيِّ مَعَ أَبِي، لِأَنَّ عِنْدِي حَفْلَةً فِي نِهَايَةِ الأُسْبُوعِ. اشْتَرَيْتُ قَمِيصًا أَبْيَضَ وَبِنْطَالًا أَزْرَقَ غَامِقًا. جَرَّبْتُ سُتْرَةً سَوْدَاءَ أَيْضًا، لٰكِنَّهَا كَانَتْ ضَيِّقَةً. القَمِيصُ بِعِشْرِينَ جُنَيْهًا، وَالبِنْطَالُ بِثَلَاثِينَ. البِنْطَالُ أَغْلَى مِنَ القَمِيصِ، لٰكِنَّهُ جَمِيلٌ جِدًّا. أُفَضِّلُ التَّسَوُّقَ فِي المَحَلَّاتِ، لِأَنِّي أُجَرِّبُ المَلَابِسَ. سَأَلْبَسُهَا فِي الحَفْلَةِ يَوْمَ السَّبْتِ.
مَعَ السَّلَامَةِ،
آدَمُ`;
const Q2_FULL = `عَزِيزِي يُوسُفُ،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَقَدْ قَضَيْتُ صَبَاحَ أَمْسِ فِي المَرْكَزِ التِّجَارِيِّ أَبْحَثُ عَنْ مَلَابِسَ لِحَفْلَةِ زِفَافِ ابْنِ عَمِّي. اشْتَرَيْتُ قَمِيصًا أَبْيَضَ مِنَ القُطْنِ، وَبِنْطَالًا كُحْلِيًّا أَنِيقًا، وَرَبْطَةَ عُنُقٍ حَمْرَاءَ اخْتَارَتْهَا أُخْتِي. جَرَّبْتُ أَيْضًا سُتْرَةً جِلْدِيَّةً أَعْجَبَتْنِي كَثِيرًا، غَيْرَ أَنَّهَا كَانَتْ أَغْلَى مِنْ كُلِّ المَلَابِسِ الأُخْرَى مَعًا، فَتَرَكْتُهَا. فِي رَأْيِي، المَحَلَّاتُ أَفْضَلُ مِنَ الإِنْتَرْنِتِ، لِأَنَّنِي أَسْتَطِيعُ أَنْ أُجَرِّبَ المَلَابِسَ وَأَلْمِسَ القُمَاشَ قَبْلَ أَنْ أَدْفَعَ. سَأَلْبَسُهَا كُلَّهَا فِي الزِّفَافِ يَوْمَ الجُمُعَةِ، وَسَأَلْتَقِطُ صُوَرًا كَثِيرَةً، وَإِذَا أَعْجَبَتْكَ، فَسَأُرْسِلُ لَكَ اسْمَ المَحَلِّ!
مَعَ تَحِيَّاتِي،
آدَمُ`;
const Q3A_CORE = `أُحِبُّ المَلَابِسَ المُرِيحَةَ. فِي البَيْتِ أَلْبَسُ قَمِيصًا رِيَاضِيًّا وَبِنْطَالًا وَاسِعًا. فِي المَدْرَسَةِ أَلْبَسُ الزِّيَّ المَدْرَسِيَّ: قَمِيصًا أَبْيَضَ، وَبِنْطَالًا رَمَادِيًّا، وَسُتْرَةً زَرْقَاءَ. لَا أُحِبُّ الزِّيَّ كَثِيرًا، لِأَنَّهُ لَيْسَ مُرِيحًا، وَلِأَنَّ لَوْنَهُ مُمِلٌّ.
أَذْهَبُ لِلتَّسَوُّقِ مَرَّةً فِي الشَّهْرِ مَعَ أُمِّي. نَذْهَبُ إِلَى المَرْكَزِ التِّجَارِيِّ فِي وَسَطِ المَدِينَةِ. المَحَلَّاتُ هُنَاكَ كَثِيرَةٌ، لٰكِنَّهَا غَالِيَةٌ. السُّوقُ الشَّعْبِيُّ أَرْخَصُ مِنَ المَرْكَزِ التِّجَارِيِّ، وَفِيهِ مَلَابِسُ جَمِيلَةٌ أَيْضًا. أُحِبُّ السُّوقَ، لِأَنَّهُ مُزْدَحِمٌ وَمُمْتِعٌ، وَفِيهِ مَطَاعِمُ صَغِيرَةٌ.
فِي الشَّهْرِ المَاضِي اشْتَرَيْتُ مِعْطَفًا جَدِيدًا لِلشِّتَاءِ. جَرَّبْتُ ثَلَاثَةَ مَعَاطِفَ، وَاخْتَرْتُ مِعْطَفًا أَسْوَدَ طَوِيلًا. كَانَ بِسِتِّينَ جُنَيْهًا. أُحِبُّهُ كَثِيرًا، لِأَنَّهُ دَافِئٌ وَجَمِيلٌ، وَأَلْبَسُهُ كُلَّ يَوْمٍ إِلَى المَدْرَسَةِ.
فِي رَأْيِي، لَا يَجِبُ أَنْ نَشْتَرِيَ مَلَابِسَ كَثِيرَةً. فِي المُسْتَقْبَلِ سَأَشْتَرِي مَلَابِسَ أَقَلَّ، لٰكِنْ أَفْضَلَ، وَسَأُعْطِي مَلَابِسِيَ القَدِيمَةَ لِلْفُقَرَاءِ.`;
const Q3A_FULL = `لَمْ أَكُنْ أَهْتَمُّ بِالمَلَابِسِ عِنْدَمَا كُنْتُ صَغِيرًا؛ فَقَدْ كَانَتْ أُمِّي تَخْتَارُ لِي كُلَّ شَيْءٍ، وَكُنْتُ أَلْبَسُ مَا تَشْتَرِيهِ دُونَ أَنْ أَعْتَرِضَ. أَمَّا الآنَ فَأَصْبَحَ لِي ذَوْقٌ خَاصٌّ: أُفَضِّلُ الأَلْوَانَ الهَادِئَةَ كَالأَزْرَقِ الغَامِقِ وَالرَّمَادِيِّ وَالأَخْضَرِ الزَّيْتُونِيِّ، وَالمَلَابِسَ القُطْنِيَّةَ المُرِيحَةَ.
أَذْهَبُ لِلتَّسَوُّقِ مَرَّةً كُلَّ شَهْرَيْنِ تَقْرِيبًا، وَأُفَضِّلُ المَحَلَّاتِ عَلَى الإِنْتَرْنِتِ، لِأَنِّي أُحِبُّ أَنْ أُجَرِّبَ القِطْعَةَ قَبْلَ أَنْ أَشْتَرِيَهَا. وَصَحِيحٌ أَنَّ المَرْكَزَ التِّجَارِيَّ أَغْلَى مِنَ السُّوقِ الشَّعْبِيِّ، غَيْرَ أَنَّ الجَوْدَةَ فِيهِ أَفْضَلُ عَادَةً.
فِي الشِّتَاءِ المَاضِي تَعَلَّمْتُ دَرْسًا مُهِمًّا؛ اشْتَرَيْتُ مِنَ الإِنْتَرْنِتِ سُتْرَةً بَدَتْ رَائِعَةً فِي الصُّورَةِ، فَلَمَّا وَصَلَتْ وَجَدْتُهَا رَقِيقَةً وَلَوْنُهَا مُخْتَلِفٌ تَمَامًا، وَلَمْ أَسْتَطِعْ أَنْ أُرْجِعَهَا. مُنْذُ ذٰلِكَ اليَوْمِ لَا أَشْتَرِي شَيْئًا قَبْلَ أَنْ أَقْرَأَ آرَاءَ المُشْتَرِينَ وَأَتَأَكَّدَ مِنَ المَقَاسِ.
فِي المُسْتَقْبَلِ سَأَشْتَرِي مَلَابِسَ أَقَلَّ وَأَجْوَدَ، وَلَوْ كَانَ عِنْدِي وَقْتٌ أَكْثَرُ، لَتَعَلَّمْتُ الخِيَاطَةَ مِنْ جَدَّتِي، لِأُصْلِحَ مَلَابِسِي بِنَفْسِي بَدَلًا مِنْ أَنْ أَرْمِيَهَا.`;
const Q3B_FULL = `أَصْبَحَتِ المَلَابِسُ اليَوْمَ أَرْخَصَ مِنْ أَيِّ وَقْتٍ مَضَى، فَيُمْكِنُ أَنْ تَشْتَرِيَ قَمِيصًا بِثَمَنِ فِنْجَانِ قَهْوَةٍ. وَتَعْرِضُ المَحَلَّاتُ مُوضَةً جَدِيدَةً كُلَّ أُسْبُوعٍ، فَيَشْعُرُ الشَّبَابُ بِأَنَّ مَلَابِسَهُمْ أَصْبَحَتْ قَدِيمَةً بَعْدَ أَشْهُرٍ قَلِيلَةٍ، حَتَّى لَوْ كَانَتْ فِي حَالَةٍ مُمْتَازَةٍ.
فِي المَاضِي كَانَتِ الأُسَرُ تَشْتَرِي مَلَابِسَ جَدِيدَةً فِي الأَعْيَادِ فَقَطْ، وَكَانَتِ الأُمَّهَاتُ يُصْلِحْنَ المَلَابِسَ المُمَزَّقَةَ، وَيُعْطِينَهَا لِلْأَطْفَالِ الأَصْغَرِ، أَمَّا اليَوْمَ فَنَرْمِي المَلَابِسَ بِسُهُولَةٍ، مِمَّا يَمْلَأُ مَكَبَّاتِ النُّفَايَاتِ وَيُلَوِّثُ المِيَاهَ.
فِي السَّنَةِ المَاضِيَةِ نَظَّمَ صَفِّي «سُوقَ تَبَادُلٍ»؛ أَحْضَرَ كُلُّ طَالِبٍ مَلَابِسَ لَا يَلْبَسُهَا، وَأَخَذَ مَكَانَهَا مَلَابِسَ أُخْرَى مَجَّانًا. شَارَكَ أَكْثَرُ مِنْ مِئَةِ طَالِبٍ، وَتَبَادَلْنَا مِئَاتِ القِطَعِ بَدَلًا مِنْ أَنْ نَرْمِيَهَا، ثُمَّ أَعْطَيْنَا مَا بَقِيَ لِجَمْعِيَّةٍ خَيْرِيَّةٍ.
صَحِيحٌ أَنَّ المُوضَةَ السَّرِيعَةَ تُتِيحُ لِلْجَمِيعِ أَنْ يَلْبَسُوا مَلَابِسَ جَدِيدَةً، غَيْرَ أَنَّ ثَمَنَهَا الحَقِيقِيَّ تَدْفَعُهُ البِيئَةُ. وَلَوِ اشْتَرَى كُلُّ وَاحِدٍ مِنَّا قِطْعَةً وَاحِدَةً جَيِّدَةً بَدَلًا مِنْ ثَلَاثٍ رَخِيصَةٍ، لَقَلَّتِ النُّفَايَاتُ كَثِيرًا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a click-and-collect order form, write an email about a shopping trip, and write an extended piece about your clothes and shopping or about fast fashion.',
  lift: [
    { ar: 'جَرَّبْتُهَا، لٰكِنَّهَا كَانَتْ ضَيِّقَةً', en: 'I tried it on, but it was tight' },
    { ar: 'كَانَتْ أَغْلَى مِنْ كُلِّ المَلَابِسِ الأُخْرَى', en: 'it was dearer than all the other clothes' },
    { ar: 'أُجَرِّبُ القِطْعَةَ قَبْلَ أَنْ أَشْتَرِيَهَا', en: 'I try the item on before I buy it' },
  ],
  checkTip: 'Check: colours agree with each item; prices with numbers (bi-ʿishrīna junayhan); comparatives with min; -hu for masculine items, -hā for feminine items AND for “clothes” (al-malābis → albasuhā).',
  FORM: {
    title: 'Online click-and-collect order', ar: 'طَلَبُ شِرَاءٍ عَلَى الإِنْتَرْنِتِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'آدَمُ عَلِيٌّ', modelEn: 'Adam Ali' },
      { core: true, ar: 'القِطْعَةُ', en: 'Item', model: 'سُتْرَةٌ شَتَوِيَّةٌ', modelEn: 'a winter jacket' },
      { core: true, ar: 'اللَّوْنُ', en: 'Colour', model: 'زَرْقَاءُ غَامِقَةٌ', modelEn: 'dark blue' },
      { core: true, ar: 'المَقَاسُ', en: 'Size', model: 'مُتَوَسِّطٌ', modelEn: 'medium' },
      { core: true, ar: 'العَدَدُ', en: 'Quantity', model: 'وَاحِدَةٌ', modelEn: 'one' },
      { core: true, ar: 'المَحَلُّ الَّذِي تَسْتَلِمُ مِنْهُ', en: 'Store to collect from', model: 'مَحَلُّ وَسَطِ المَدِينَةِ', modelEn: 'the city-centre store' },
      { ar: 'المَادَّةُ المُفَضَّلَةُ', en: 'Preferred material', model: 'الصُّوفُ', modelEn: 'wool' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تَحْتَاجُهَا؟', en: 'ONE sentence: why you need it', model: 'أَحْتَاجُهَا لِأَنَّ سُتْرَتِيَ القَدِيمَةَ أَصْبَحَتْ صَغِيرَةً عَلَيَّ.', modelEn: 'I need it because my old jacket has become too small for me.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with -hā (aḥtājuhā).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. suttra is feminine → zarqāʾ ghāmiqa, wāḥida, aḥtājuhā.',
  },
  Q2: {
    short: 'an email about a shopping trip', title: 'Question 2: a shopping trip', ar: 'رِسَالَةٌ عَنْ رِحْلَةِ تَسَوُّقٍ',
    task: 'You went clothes shopping yesterday. Write an email in Arabic to your friend of about 80–90 words. You must include: • where you went, with whom and why • what you bought (colours and prices) • something you tried on but did not buy, and why • whether you prefer shops or online shopping, and when you will wear your new clothes.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Prices and a comparative.', 'An object pronoun (-hu / -hā).', 'A past AND a future sentence.'],
    phrases: [['ذَهَبْتُ إِلَى … لِأَنَّ …', 'I went to … because …'], ['اشْتَرَيْتُ … بِعِشْرِينَ جُنَيْهًا', 'I bought … for twenty pounds'], ['جَرَّبْتُ … لٰكِنَّهَا كَانَتْ …', 'I tried on … but it was …'], ['سَأَلْبَسُهَا فِي …', 'I will wear them at …']],
    rubric: [
      ['task', 'ذَهَبْتَ لِتَشْتَرِيَ مَلَابِسَ أَمْسِ. اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ (٨٠–٩٠ كَلِمَةً).', 'You went clothes shopping yesterday: write to your friend (80–90 words).'],
      ['1', 'أَيْنَ ذَهَبْتَ؟ وَمَعَ مَنْ؟ وَلِمَاذَا؟', 'Where, with whom and why'],
      ['2', 'مَاذَا اشْتَرَيْتَ؟ (الأَلْوَانُ وَالأَسْعَارُ)', 'What you bought (colours, prices)'],
      ['3', 'مَاذَا جَرَّبْتَ وَلَمْ تَشْتَرِهِ؟ وَلِمَاذَا؟', 'Something you tried on but didn’t buy'],
      ['4', 'هَلْ تُفَضِّلُ المَحَلَّاتِ أَمِ الإِنْتَرْنِتَ؟ وَمَتَى سَتَلْبَسُ مَلَابِسَكَ الجَدِيدَةَ؟', 'Shops or online; when you will wear them'],
    ],
    qwords: 'أَيْنَ (where) · مَعَ مَنْ (with whom) · لِمَاذَا (why) · مَاذَا (what) · هَلْ … أَمْ (… or …) · مَتَى (when) — bullet 3: lam tashtarihi = you did NOT buy it',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'أَمْسِ ذَهَبْتُ إِلَى ______ مَعَ ______ ، لِأَنَّ ______ .', 'Yesterday I went to … with …, because …'],
      ['2', 'اشْتَرَيْتُ ______ ______ ، وَكَانَ ثَمَنُهُ ______ جُنَيْهًا.', 'I bought a … …, and it cost … pounds.'],
      ['3', 'جَرَّبْتُ ______ ، لٰكِنَّهَا كَانَتْ ______ .', 'I tried on …, but it was …'],
      ['4', 'أُفَضِّلُ ______ لِأَنَّ ______ . سَأَلْبَسُهَا فِي ______ .', 'I prefer … because … I will wear them at …'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Yusuf, how are you? Yesterday I went to the shopping centre with my dad, because I have a party at the weekend. I bought a white shirt and dark blue trousers. I tried on a black jacket too, but it was tight. The shirt was twenty pounds and the trousers thirty. The trousers are dearer than the shirt, but very nice. I prefer shopping in shops, because I can try clothes on. I will wear them at the party on Saturday. Goodbye, Adam.”',
      find: ['قَمِيصًا أَبْيَضَ', 'لٰكِنَّهَا كَانَتْ ضَيِّقَةً', 'أَغْلَى مِنَ القَمِيصِ', 'سَأَلْبَسُهَا'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Yusuf, greetings. I spent yesterday morning at the shopping centre looking for clothes for my cousin’s wedding. I bought a white cotton shirt, smart navy trousers, and a red tie my sister chose. I also tried on a leather jacket I really liked, but it was dearer than all the other clothes put together, so I left it. In my opinion shops are better than online, because I can try clothes on and feel the fabric before paying. I will wear them all at the wedding on Friday and take lots of photos, and if you like them, I’ll send you the shop’s name! Best wishes, Adam.”',
      find: ['رَبْطَةَ عُنُقٍ حَمْرَاءَ اخْتَارَتْهَا', 'أَغْلَى مِنْ كُلِّ المَلَابِسِ', 'قَبْلَ أَنْ أَدْفَعَ', 'إِذَا أَعْجَبَتْكَ، فَسَأُرْسِلُ'],
    },
  },
  Q3: {
    a: { title: 'مَلَابِسِي وَالتَّسَوُّقُ', en: 'My clothes and shopping', bullets: 'مَاذَا تَلْبَسُ عَادَةً؟ · أَيْنَ وَكَيْفَ تَتَسَوَّقُ؟ · تَجْرِبَةُ شِرَاءٍ لَا تَنْسَاهَا · رَأْيُكَ وَعَادَاتُكَ فِي المُسْتَقْبَلِ', bulletsEn: 'What you usually wear · where and how you shop · a purchase you won’t forget · your opinion and future habits' },
    b: { title: 'المُوضَةُ السَّرِيعَةُ: مَنْ يَدْفَعُ الثَّمَنَ؟', en: 'Fast fashion: who pays the price?', bullets: 'لِمَاذَا أَصْبَحَتِ المَلَابِسُ رَخِيصَةً؟ · المَاضِي وَالحَاضِرُ · مُبَادَرَةٌ أَوْ تَجْرِبَةٌ · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'Why clothes have become cheap · past and present · an initiative or experience · your opinion and suggestion' },
    plan: [
      'What you wear — at home, at school, at Eid: colours that agree.',
      'Shopping — where, how often, with whom; a comparative (arkhaṣu min); Stretch: uffaḍḍilu … ʿalā …',
      'Past — a purchase: ishtaraytu, jarrabtu, wajadtuhā …; lammā …',
      'Opinion + future — fī raʾyī …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'السُّوقُ أَرْخَصُ مِنَ المَرْكَزِ التِّجَارِيِّ.', en: 'present: the market is cheaper than the shopping centre.' },
      { ar: 'جَرَّبْتُ ثَلَاثَةَ مَعَاطِفَ، وَاخْتَرْتُ الأَسْوَدَ.', en: 'past: I tried on three coats and chose the black one.' },
      { ar: 'سَأَشْتَرِي مَلَابِسَ أَقَلَّ وَأَفْضَلَ.', en: 'future: I will buy fewer, better clothes.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'I like comfy clothes: a sports top and loose trousers at home; uniform at school — white shirt, grey trousers, blue jacket; I don’t like uniform much because it isn’t comfortable and its colour is boring → shopping once a month with Mum at the city-centre mall: many shops but expensive; the local market is cheaper and has nice clothes too; I love it — busy, fun, with little restaurants → last month a new winter coat: tried three, chose a long black one for sixty pounds; I love it — warm and nice, and I wear it to school every day → we shouldn’t buy too many clothes; in future I’ll buy fewer but better ones and give my old clothes to the poor.', find: ['سُتْرَةً زَرْقَاءَ', 'أَرْخَصُ مِنَ المَرْكَزِ', 'جَرَّبْتُ ثَلَاثَةَ مَعَاطِفَ', 'سَأُعْطِي'], notes: 'Core model: uniform with colours that agree, laysa + accusative, a comparative, a past purchase with a price, an opinion and two future plans.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'As a child I didn’t care about clothes — Mum chose everything and I wore it without complaint; as for now, I have my own taste: calm colours like navy, grey and olive green, comfy cotton → shopping every two months or so; I prefer shops to online because I like trying items on; it is true the mall is dearer than the market, but the quality is usually better → a lesson last winter: an online jacket looked great in the photo, but when it arrived it was thin and a completely different colour, and I couldn’t return it; since then I read buyers’ reviews and check the size first → I’ll buy fewer, better clothes; “if I had more time, I would learn sewing from my grandmother, to mend my clothes myself instead of throwing them away”.', find: ['لَمْ أَكُنْ أَهْتَمُّ', 'أُفَضِّلُ المَحَلَّاتِ عَلَى', 'فَلَمَّا وَصَلَتْ وَجَدْتُهَا', 'لَوْ كَانَ … لَتَعَلَّمْتُ'], notes: 'Full-mark model: lam akun + present, dūna an, ammā … fa-, uffaḍḍilu … ʿalā, qabla an, a concession, lammā, lam astaṭiʿ, a superlative-style comparative and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'fast fashion', text: Q3B_FULL, en: 'Clothes are cheaper than ever — a shirt for the price of a coffee — and shops show new trends weekly, so young people feel their clothes are old after a few months, even in perfect condition → in the past families bought new clothes only for Eid; mothers mended torn clothes and passed them to younger children; as for today, we throw clothes away easily, filling landfills and polluting water → last year my class ran a “swap market”: each student brought unworn clothes and took others free; over a hundred students joined and we swapped hundreds of items instead of throwing them away, then gave the rest to a charity → it is true fast fashion lets everyone wear new clothes, but the environment pays the real price; “if each of us bought one good item instead of three cheap ones, waste would fall greatly”.', find: ['أَرْخَصَ مِنْ أَيِّ وَقْتٍ مَضَى', 'كَانَتِ الأُمَّهَاتُ يُصْلِحْنَ', 'مِمَّا يَمْلَأُ', 'لَوِ اشْتَرَى … لَقَلَّتِ'], notes: 'Full-mark model for the Stretch title: a superlative comparison, kāna + present (feminine plural yuṣliḥna), ammā … fa-, mimmā, a class initiative, badalan min an, a concession and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; colour and size agree with the item.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: prices, a comparative and -hu / -hā.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: lammā, a concession or law … la-.' },
  ],
};

module.exports = { speak, write };
