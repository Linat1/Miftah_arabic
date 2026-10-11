'use strict';
/* Exam-practice data · TC-L09 · Shopping, Prices and Consumer Choices (hādhā / hādhihi; thamanuhu / thamanuhā; numbers; comparatives; solving a problem). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'C', n: 9, short: 'Shopping, Prices and Consumer Choices', arShort: 'التَّسَوُّقُ وَالأَسْعَارُ', fileTitle: 'Shopping_Prices_Consumer_Choices', title: 'Shopping, Prices and Consumer Choices', ar: 'التَّسَوُّقُ وَالأَسْعَارُ وَاخْتِيَارَاتُ المُسْتَهْلِكِ', icon: 'FaCartShopping', grammar: 'hādhā / hādhihi; thamanuhu / thamanuhā (its price); numbers with prices; comparatives (arkhaṣu, aghlā); solving a problem in a shop' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: buy things and ask prices (كَمْ ثَمَنُ هٰذَا؟ · ثَمَنُهَا …), compare products (أَرْخَصُ · أَغْلَى · أَفْضَلُ), return or exchange an item, and discuss shopping habits online and in shops.',
  words: [
    w(1, 'هٰذَا · هٰذِهِ', 'this (m. · f.)', [['these (non-hum. pl.)', 'هٰذِهِ'], ['that (m. · f.)', 'ذٰلِكَ · تِلْكَ']], { tag: 'agreement' }),
    w(2, 'ثَمَنٌ · سِعْرٌ', 'a price', [['its price (m.)', 'ثَمَنُهُ'], ['its price (f.)', 'ثَمَنُهَا'], ['pl.', 'أَسْعَارٌ']]),
    w(3, 'رَخِيصٌ · غَالٍ', 'cheap · expensive', [['f.', 'رَخِيصَةٌ · غَالِيَةٌ'], ['comp.', 'أَرْخَصُ · أَغْلَى']]),
    w(4, 'جُنَيْهٌ · دِرْهَمٌ', 'a pound · a dirham', [['pl.', 'جُنَيْهَاتٌ · دَرَاهِمُ'], ['20 pounds', 'عِشْرُونَ جُنَيْهًا']]),
    w(5, 'تَخْفِيضَاتٌ', 'sales, discounts', [['a discount', 'خَصْمٌ'], ['half price', 'نِصْفُ الثَّمَنِ']]),
    w(6, 'مَقَاسٌ', 'a size', [['pl.', 'مَقَاسَاتٌ'], ['bigger · smaller', 'أَكْبَرُ · أَصْغَرُ']]),
    w(7, 'أَدْفَعُ', 'I pay', [['by card', 'بِالبِطَاقَةِ'], ['cash', 'نَقْدًا'], ['payment', 'الدَّفْعُ']]),
    w(8, 'أَشْتَرِي', 'I buy', [['past', 'اشْتَرَيْتُ'], ['future', 'سَأَشْتَرِي'], ['purchases', 'مُشْتَرَيَاتٌ']], { tag: 'all tenses' }),
    w(9, 'أُرْجِعُ · أُبَدِّلُ', 'I return · I exchange', [['past', 'أَرْجَعْتُ · بَدَّلْتُ'], ['a refund', 'اسْتِرْدَادُ المَالِ']]),
    w(10, 'إِيصَالٌ', 'a receipt', [['pl.', 'إِيصَالَاتٌ'], ['a guarantee', 'ضَمَانٌ']]),
    w(11, 'مَكْسُورٌ · مَعِيبٌ', 'broken · faulty', [['f.', 'مَكْسُورَةٌ · مَعِيبَةٌ'], ['it doesn’t work', 'لَا يَعْمَلُ · لَا تَعْمَلُ']]),
    w(12, 'التَّسَوُّقُ عَلَى الإِنْتَرْنِتِ', 'online shopping', [['delivery', 'التَّوْصِيلُ'], ['the consumer', 'المُسْتَهْلِكُ']]),
  ],
  words1: { eyebrow: 'Language bank · prices and agreement', title: 'This, its price, cheaper', ar: 'كَمْ ثَمَنُهُ؟', notes: 'LANGUAGE BANK (2 min) — هٰذَا القَمِيصُ · ثَمَنُهُ عِشْرُونَ جُنَيْهًا. هٰذِهِ الحَقِيبَةُ · ثَمَنُهَا … The pronoun follows the noun’s gender. Non-human plurals: هٰذِهِ الأَحْذِيَةُ · ثَمَنُهَا … Comparatives: أَرْخَصُ مِنْ · أَغْلَى مِنْ.' },
  words2: { eyebrow: 'Language bank · problems and choices', title: 'Return, exchange, refund', ar: 'مُشْكِلَةٌ فِي المَحَلِّ', notes: 'LANGUAGE BANK (2 min) — اشْتَرَيْتُ هٰذَا … أَمْسِ، لٰكِنَّهُ مَكْسُورٌ / لَا يَعْمَلُ. أُرِيدُ أَنْ أُبَدِّلَهُ / أَنْ أَسْتَرِدَّ ثَمَنَهُ. Numbers: 11–99 + singular accusative (عِشْرُونَ جُنَيْهًا).' },
  checkCore: 'asked a price and bought something politely',
  checkDevelop: 'compared two items and explained a problem with a purchase',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a clothes shop', title: 'Role play A — Buying a jumper', ar: 'فِي مَحَلِّ المَلَابِسِ', you: 'a customer', them: 'the shop assistant',
      tasks: [
        { core: true, ex: 'أَهْلًا، هَلْ أُسَاعِدُكَ؟', task: 'Say what you are looking for.', help: 'أَبْحَثُ عَنْ …', model: 'أَبْحَثُ عَنْ كَنْزَةٍ زَرْقَاءَ.', modelEn: 'I’m looking for a blue jumper.' },
        { core: true, ex: 'مَا مَقَاسُكَ؟', task: 'Give your size.', help: 'مَقَاسِي …', model: 'مَقَاسِي مُتَوَسِّطٌ.', modelEn: 'My size is medium.' },
        { core: true, ex: 'تَفَضَّلْ، هٰذِهِ الكَنْزَةُ جَمِيلَةٌ.', task: 'Ask the price.', help: 'كَمْ ثَمَنُهَا؟', model: 'كَمْ ثَمَنُهَا مِنْ فَضْلِكَ؟', modelEn: 'How much is it, please?' },
        { core: true, ex: 'ثَمَنُهَا ثَلَاثُونَ جُنَيْهًا.', task: 'Say it’s expensive and ask for a cheaper one.', help: 'هِيَ غَالِيَةٌ … هَلْ عِنْدَكَ … أَرْخَصُ؟', model: 'هِيَ غَالِيَةٌ قَلِيلًا. هَلْ عِنْدَكَ كَنْزَةٌ أَرْخَصُ؟', modelEn: 'It’s a bit expensive. Do you have a cheaper jumper?' },
        { core: true, unexpected: true, ex: 'كَيْفَ تُرِيدُ أَنْ تَدْفَعَ؟', task: 'Answer the unexpected question.', help: 'أَدْفَعُ بِـ … / نَقْدًا', model: 'سَأَدْفَعُ بِالبِطَاقَةِ، مِنْ فَضْلِكَ.', modelEn: 'I’ll pay by card, please.' },
      ],
      girl: 'أُسَاعِدُكِ · مَقَاسُكِ · عِنْدَكِ · تُرِيدِينَ',
      notes: 'Core: kanza zarqāʾ (f. colour), thamanuhā (f.), thalāthūna junayhan (singular accusative after 11–99), arkhaṣu (no change for f.).',
    },
    {
      id: 'B', level: 'Core+', setting: 'an electronics shop', title: 'Role play B — Choosing headphones', ar: 'اخْتِيَارُ سَمَّاعَاتٍ', you: 'a customer', them: 'a sales assistant',
      tasks: [
        { core: true, ex: 'نَعَمْ؟ مَاذَا تَحْتَاجُ؟', task: 'Say what you need and what for.', help: 'أَحْتَاجُ إِلَى … لِـ …', model: 'أَحْتَاجُ إِلَى سَمَّاعَاتٍ لِلدِّرَاسَةِ عَلَى الإِنْتَرْنِتِ.', modelEn: 'I need headphones for studying online.' },
        { core: true, ex: 'عِنْدَنَا هٰذِهِ بِأَرْبَعِينَ، وَهٰذِهِ بِسَبْعِينَ جُنَيْهًا.', task: 'Ask about the difference.', help: 'مَا الفَرْقُ بَيْنَهُمَا؟', model: 'مَا الفَرْقُ بَيْنَهُمَا؟', modelEn: 'What’s the difference between them?' },
        { ex: 'الغَالِيَةُ لَاسِلْكِيَّةٌ، وَصَوْتُهَا أَنْقَى.', task: 'ASK about the guarantee.', help: 'هَلْ … ضَمَانٌ؟ وَكَمْ …؟', model: 'هَلْ لَهَا ضَمَانٌ؟ وَكَمْ سَنَةً؟', modelEn: 'Do they have a guarantee? For how many years?' },
        { ex: 'سَنَتَانِ لِلْغَالِيَةِ، وَسَنَةٌ لِلرَّخِيصَةِ.', task: 'Choose and justify with a comparison.', help: 'سَآخُذُ … لِأَنَّهَا أَ… وَ…', model: 'سَآخُذُ الغَالِيَةَ، لِأَنَّهَا أَفْضَلُ وَأَطْوَلُ ضَمَانًا، وَسَأَسْتَخْدِمُهَا كُلَّ يَوْمٍ.', modelEn: 'I’ll take the expensive ones: they’re better with a longer guarantee, and I’ll use them every day.' },
        { unexpected: true, ex: 'هَلْ تَشْتَرِي الأَجْهِزَةَ عَلَى الإِنْتَرْنِتِ عَادَةً؟', task: 'Answer the unexpected question.', help: 'أَحْيَانًا، لٰكِنِّي أُفَضِّلُ … لِأَنَّ …', model: 'أَحْيَانًا، لٰكِنِّي أُفَضِّلُ المَحَلَّ، لِأَنِّي أَسْتَطِيعُ أَنْ أُجَرِّبَ قَبْلَ أَنْ أَشْتَرِيَ.', modelEn: 'Sometimes, but I prefer the shop, because I can try before I buy.' },
      ],
      girl: 'تَحْتَاجِينَ · تَشْتَرِينَ',
      notes: 'Core+: bi- + price, the dual baynahumā, the CANDIDATE asks about the guarantee, aṭwalu ḍamānan (comparative + tamyīz), qabla an + subjunctive.',
    },
    {
      id: 'C', level: 'Develop', setting: 'customer service', title: 'Role play C — Returning a faulty item', ar: 'إِرْجَاعُ بِضَاعَةٍ مَعِيبَةٍ', you: 'a customer', them: 'the customer-service manager',
      tasks: [
        { ex: 'تَفَضَّلْ، كَيْفَ أَخْدُمُكَ؟', task: 'Say what you bought and when (past).', help: 'اشْتَرَيْتُ … مِنْ هُنَا قَبْلَ …', model: 'اشْتَرَيْتُ هٰذِهِ السَّاعَةَ الذَّكِيَّةَ مِنْ هُنَا قَبْلَ ثَلَاثَةِ أَيَّامٍ.', modelEn: 'I bought this smartwatch here three days ago.' },
        { ex: 'وَمَا المُشْكِلَةُ؟', task: 'Explain the problem precisely.', help: 'الشَّاشَةُ … وَالبَطَّارِيَّةُ لَا …', model: 'الشَّاشَةُ تَنْطَفِئُ وَحْدَهَا، وَالبَطَّارِيَّةُ لَا تَدُومُ أَكْثَرَ مِنْ سَاعَتَيْنِ.', modelEn: 'The screen switches itself off, and the battery lasts no more than two hours.' },
        { ex: 'هَلْ مَعَكَ الإِيصَالُ؟', task: 'Answer and say how you paid.', help: 'نَعَمْ، تَفَضَّلْ. دَفَعْتُ …', model: 'نَعَمْ، تَفَضَّلْ. دَفَعْتُ بِالبِطَاقَةِ، وَالثَّمَنُ مَكْتُوبٌ هُنَا: تِسْعُونَ جُنَيْهًا.', modelEn: 'Yes, here you are. I paid by card; the price is written here: ninety pounds.' },
        { ex: 'نَسْتَطِيعُ أَنْ نُصْلِحَهَا فِي أُسْبُوعَيْنِ.', task: 'Refuse politely and ask for something else.', help: 'أُفَضِّلُ أَنْ … لِأَنَّ …', model: 'أُفَضِّلُ أَنْ أُبَدِّلَهَا بِسَاعَةٍ جَدِيدَةٍ، لِأَنِّي اشْتَرَيْتُهَا هَدِيَّةً لِعِيدِ مِيلَادِ أَخِي يَوْمَ السَّبْتِ.', modelEn: 'I’d rather exchange it for a new one, because I bought it as a present for my brother’s birthday on Saturday.' },
        { unexpected: true, ex: 'وَإِذَا لَمْ تَكُنْ عِنْدَنَا سَاعَةٌ أُخْرَى؟', task: 'Answer the unexpected question (condition).', help: 'إِذَا لَمْ … فَأُرِيدُ أَنْ …', model: 'إِذَا لَمْ تَكُنْ عِنْدَكُمْ، فَأُرِيدُ أَنْ أَسْتَرِدَّ ثَمَنَهَا كَامِلًا، مِنْ فَضْلِكَ.', modelEn: 'If you haven’t got one, I’d like a full refund, please.' },
      ],
      girl: 'أَخْدُمُكِ · مَعَكِ',
      notes: 'Develop: ishtaraytu + qabla thalāthati ayyām, al-baṭṭāriyya lā tadūmu (f. verb), tisʿūna junayhan, a polite refusal with ufaḍḍilu an, idhā lam … fa-.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a consumer-rights podcast', title: 'Role play D — Fast fashion: bargain or trap?', ar: 'المُوضَةُ السَّرِيعَةُ', you: 'a teenage guest', them: 'the podcast host',
      tasks: [
        { ex: 'لِمَاذَا يُحِبُّ المُرَاهِقُونَ المَلَابِسَ الرَّخِيصَةَ؟', task: 'Explain with two reasons.', help: 'لِأَنَّهَا … كَمَا أَنَّ …', model: 'لِأَنَّهَا تُنَاسِبُ مَصْرُوفَهُمُ القَلِيلَ، كَمَا أَنَّ المُوضَةَ تَتَغَيَّرُ بِسُرْعَةٍ عَلَى وَسَائِلِ التَّوَاصُلِ.', modelEn: 'Because they suit their small pocket money, and fashion changes fast on social media.' },
        { ex: 'وَمَا المُشْكِلَةُ فِي ذٰلِكَ؟', task: 'Give a cause → effect chain.', help: 'تُصْنَعُ … مِمَّا يُؤَدِّي إِلَى …', model: 'تُصْنَعُ بِكَمِّيَّاتٍ ضَخْمَةٍ وَتُرْمَى بَعْدَ أَشْهُرٍ، مِمَّا يُؤَدِّي إِلَى جِبَالٍ مِنَ النُّفَايَاتِ.', modelEn: 'They are made in huge quantities and thrown away after months, which leads to mountains of waste.' },
        { ex: 'هَلْ غَيَّرْتَ أَنْتَ عَادَاتِكَ؟', task: 'Compare your habits before and now.', help: 'كُنْتُ أَشْتَرِي … أَمَّا الآنَ فَـ…', model: 'كُنْتُ أَشْتَرِي قِطْعَةً جَدِيدَةً كُلَّ أُسْبُوعٍ، أَمَّا الآنَ فَأَشْتَرِي أَقَلَّ، وَأَخْتَارُ الجَوْدَةَ، أَوْ أَشْتَرِي مِنْ مَحَلَّاتِ المَلَابِسِ المُسْتَعْمَلَةِ.', modelEn: 'I used to buy something new every week; now I buy less, choose quality, or shop second-hand.' },
        { ex: 'لٰكِنَّ المَلَابِسَ الجَيِّدَةَ غَالِيَةٌ جِدًّا!', task: 'Concede and counter with a calculation.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ ثَمَنَهَا أَعْلَى، غَيْرَ أَنَّ مِعْطَفًا بِسِتِّينَ جُنَيْهًا يَدُومُ خَمْسَ سَنَوَاتٍ أَرْخَصُ مِنْ ثَلَاثَةِ مَعَاطِفَ رَخِيصَةٍ تَتَمَزَّقُ كُلَّ سَنَةٍ.', modelEn: 'True, they cost more, but a £60 coat lasting five years is cheaper than three cheap coats that tear every year.' },
        { unexpected: true, ex: 'لَوْ أُعْطِيتَ مِئَةَ جُنَيْهٍ الآنَ، فِيمَ تُنْفِقُهَا؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ أُعْطِيتُ …، لَـ…', model: 'لَوْ أُعْطِيتُ مِئَةَ جُنَيْهٍ، لَادَّخَرْتُ نِصْفَهَا، وَلَاشْتَرَيْتُ بِالبَاقِي حِذَاءً رِيَاضِيًّا جَيِّدًا يَدُومُ طَوِيلًا.', modelEn: 'If I were given £100, I’d save half and buy good trainers that last with the rest.' },
      ],
      girl: 'غَيَّرْتِ · عَادَاتِكِ · أُعْطِيتِ · تُنْفِقِينَهَا',
      notes: 'Stretch: kamā anna, passives (tuṣnaʿu, turmā, uʿṭītu), mimmā yuʾaddī ilā, kuntu + present vs ammā … fa-, a concession with a price calculation, law … la-.',
      modelFoot: 'Stretch: two reasons, a passive cause chain, a change in habits, a reasoned concession and law + passive … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَنَا وَالتَّسَوُّقُ', aim: 'one full sentence per question',
      qs: [
        { q: 'هَلْ تُحِبُّ التَّسَوُّقَ؟', en: 'Do you like shopping?', start: 'نَعَمْ / لَا، … لِأَنَّ …', model: 'نَعَمْ، أُحِبُّ التَّسَوُّقَ مَعَ أَصْدِقَائِي.', modelEn: 'Yes, I like shopping with my friends.' },
        { q: 'أَيْنَ تَشْتَرِي مَلَابِسَكَ؟', en: 'Where do you buy your clothes?', start: 'أَشْتَرِي مَلَابِسِي مِنْ …', model: 'أَشْتَرِي مَلَابِسِي مِنَ المَرْكَزِ التِّجَارِيِّ.', modelEn: 'I buy my clothes at the shopping centre.' },
        { q: 'مَاذَا اشْتَرَيْتَ آخِرَ مَرَّةٍ؟', en: 'What did you buy last time?', start: 'اشْتَرَيْتُ …', model: 'اشْتَرَيْتُ حِذَاءً رِيَاضِيًّا أَبْيَضَ.', modelEn: 'I bought white trainers.' },
        { q: 'كَمْ كَانَ ثَمَنُهُ؟', en: 'How much did it cost?', start: 'كَانَ ثَمَنُهُ …', model: 'كَانَ ثَمَنُهُ خَمْسِينَ جُنَيْهًا.', modelEn: 'It cost fifty pounds.' },
        { q: 'هَلْ تَشْتَرِي عَلَى الإِنْتَرْنِتِ؟', en: 'Do you shop online?', start: 'نَعَمْ، أَشْتَرِي … عَلَى الإِنْتَرْنِتِ', model: 'نَعَمْ، أَشْتَرِي الكُتُبَ عَلَى الإِنْتَرْنِتِ، لِأَنَّهَا أَرْخَصُ.', modelEn: 'Yes, I buy books online, because they are cheaper.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a price with the right number form = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'عَادَاتُ التَّسَوُّقِ', aim: 'two or three sentences, with a comparison and a past detail',
      qs: [
        { q: 'هَلْ تُفَضِّلُ التَّسَوُّقَ فِي المَحَلَّاتِ أَمْ عَلَى الإِنْتَرْنِتِ؟', en: 'Do you prefer shopping in shops or online?', start: 'أُفَضِّلُ … لِأَنَّهُ أَ… ، لٰكِنَّ …', model: 'أُفَضِّلُ الإِنْتَرْنِتَ، لِأَنَّهُ أَسْهَلُ وَأَرْخَصُ، لٰكِنَّنِي أَشْتَرِي المَلَابِسَ مِنَ المَحَلِّ لِأُجَرِّبَهَا.', modelEn: 'I prefer online — easier and cheaper — but I buy clothes in shops to try them on.' },
        { q: 'صِفْ آخِرَ مَرَّةٍ اشْتَرَيْتَ فِيهَا هَدِيَّةً.', en: 'Describe the last time you bought a present.', start: 'اشْتَرَيْتُ … لِـ … وَكَانَ ثَمَنُهَا …', model: 'اشْتَرَيْتُ عِطْرًا لِأُمِّي فِي عِيدِ الأُمِّ، وَكَانَ ثَمَنُهُ خَمْسَةً وَثَلَاثِينَ جُنَيْهًا، وَفَرِحَتْ بِهِ كَثِيرًا.', modelEn: 'I bought my mum perfume for Mother’s Day; it cost £35, and she was delighted.' },
        { q: 'هَلْ تَنْتَظِرُ التَّخْفِيضَاتِ؟', en: 'Do you wait for the sales?', start: 'نَعَمْ، لِأَنَّ … فَمَثَلًا …', model: 'نَعَمْ، لِأَنَّ الأَسْعَارَ تَنْخَفِضُ كَثِيرًا؛ فَمَثَلًا اشْتَرَيْتُ مِعْطَفِي بِنِصْفِ الثَّمَنِ.', modelEn: 'Yes, because prices drop a lot — I bought my coat at half price.' },
        { q: 'هَلْ حَدَثَتْ لَكَ مُشْكِلَةٌ عِنْدَ الشِّرَاءِ؟', en: 'Have you had a problem when buying something?', start: 'نَعَمْ، اشْتَرَيْتُ … لٰكِنَّهُ … فَـ…', model: 'نَعَمْ، اشْتَرَيْتُ قَمِيصًا عَلَى الإِنْتَرْنِتِ، لٰكِنَّ مَقَاسَهُ كَانَ صَغِيرًا، فَأَرْجَعْتُهُ بِالبَرِيدِ.', modelEn: 'Yes, I bought a shirt online but it was too small, so I returned it by post.' },
        { q: 'كَيْفَ تَصْرِفُ مَصْرُوفَكَ؟', en: 'How do you spend your pocket money?', start: 'أَصْرِفُ … عَلَى … وَأَدَّخِرُ …', model: 'أَصْرِفُ جُزْءًا عَلَى الطَّعَامِ وَالمُوَاصَلَاتِ، وَأَدَّخِرُ البَاقِيَ لِشِرَاءِ حَاسُوبٍ جَدِيدٍ.', modelEn: 'I spend some on food and transport and save the rest for a new computer.' },
      ],
      foot: 'Develop: two or three sentences — a comparison, a price and a past example.',
      modelFoot: 'Comparison + price + past = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'المُسْتَهْلِكُ الذَّكِيُّ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ يُؤَثِّرُ الإِعْلَانُ فِي اخْتِيَارَاتِنَا؟', en: 'Does advertising affect our choices?', start: 'بِلَا شَكٍّ؛ فَـ…', model: 'بِلَا شَكٍّ؛ فَالمُؤَثِّرُونَ عَلَى الإِنْتَرْنِتِ يُقْنِعُونَنَا بِأَنَّنَا نَحْتَاجُ إِلَى أَشْيَاءَ لَمْ نَكُنْ نُفَكِّرُ فِيهَا أَصْلًا.', modelEn: 'Without doubt: online influencers convince us we need things we weren’t even thinking about.' },
        { q: 'مَا مَزَايَا التَّسَوُّقِ عَلَى الإِنْتَرْنِتِ وَعُيُوبُهُ؟', en: 'What are the pros and cons of online shopping?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، يُوَفِّرُ الوَقْتَ وَيُتِيحُ مُقَارَنَةَ الأَسْعَارِ، وَمِنْ نَاحِيَةٍ أُخْرَى، يُضِرُّ بِالمَحَلَّاتِ الصَّغِيرَةِ، وَيَزِيدُ التَّغْلِيفَ وَالتَّوْصِيلَ.', modelEn: 'It saves time and lets us compare prices, but it hurts small shops and increases packaging and deliveries.' },
        { q: 'هَلِ الأَغْلَى دَائِمًا أَفْضَلُ؟', en: 'Is the most expensive always the best?', start: 'لَيْسَ بِالضَّرُورَةِ؛ فَـ…', model: 'لَيْسَ بِالضَّرُورَةِ؛ فَأَحْيَانًا نَدْفَعُ ثَمَنَ اسْمِ المَارْكَةِ فَقَطْ، وَالجَوْدَةُ مُتَشَابِهَةٌ.', modelEn: 'Not necessarily: sometimes we only pay for the brand name, and the quality is similar.' },
        { q: 'كَيْفَ تَغَيَّرَ التَّسَوُّقُ مُنْذُ أَيَّامِ وَالِدَيْكَ؟', en: 'How has shopping changed since your parents’ day?', start: 'كَانَ وَالِدَايَ … أَمَّا نَحْنُ فَـ…', model: 'كَانَ وَالِدَايَ يَشْتَرِيَانِ كُلَّ شَيْءٍ مِنَ السُّوقِ المَحَلِّيِّ وَيَعْرِفَانِ البَائِعِينَ، أَمَّا نَحْنُ فَنَطْلُبُ مِنْ شَرِكَاتٍ لَا نَعْرِفُ أَيْنَ تَقَعُ.', modelEn: 'My parents bought everything at the local market and knew the sellers; we order from companies we can’t even place.' },
        { q: 'لَوْ مُنِعَ التَّسَوُّقُ عَلَى الإِنْتَرْنِتِ، كَيْفَ تَتَغَيَّرُ حَيَاتُنَا؟', en: 'If online shopping were banned, how would our lives change?', start: 'لَوْ مُنِعَ …، لَـ…', model: 'لَوْ مُنِعَ، لَعَادَتِ الحَيَاةُ إِلَى الأَسْوَاقِ المَحَلِّيَّةِ، وَلَاشْتَرَيْنَا أَقَلَّ، لٰكِنَّ كِبَارَ السِّنِّ وَالمَرْضَى سَيُعَانُونَ.', modelEn: 'If it were banned, life would return to local markets and we’d buy less — but the elderly and sick would struggle.' },
      ],
      foot: 'Stretch: evidence, a balanced view, laysa bi-ḍ-ḍarūra, kāna + present vs ammā … fa-, and law + passive … la-.',
      modelFoot: 'Stretch: bi-lā shakk, balance, nuance, past vs present, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I asked prices with the right pronoun (thamanuhu / thamanuhā).' },
    { route: 'core', text: 'I said prices with the right number form (ʿishrūna junayhan).' },
    { route: 'develop', text: 'I compared items (arkhaṣu, aghlā, afḍalu min).' },
    { route: 'develop', text: 'I explained a problem with something I bought (past).' },
    { route: 'stretch', text: 'I gave a balanced view, a concession or law … la-.' },
  ],
};
speak.RP[0].tasks[4].help = 'سَأَدْفَعُ بِالبِطَاقَةِ / نَقْدًا';
speak.RP[1].tasks[0].help = 'أَحْتَاجُ إِلَى … لِلدِّرَاسَةِ';
speak.RP[2].tasks[4].help = 'إِذَا لَمْ تَكُنْ عِنْدَكُمْ، فَأُرِيدُ أَنْ …';
speak.RP[3].tasks[2].help = 'كُنْتُ أَشْتَرِي … أَمَّا الآنَ فَأَشْتَرِي …';
speak.RP[3].tasks[4].help = 'لَوْ أُعْطِيتُ …، لَادَّخَرْتُ …';
speak.CONV[1].qs[1].start = 'اشْتَرَيْتُ … لِأُمِّي … وَكَانَ ثَمَنُهُ …';
speak.CONV[1].qs[3].start = 'نَعَمْ، اشْتَرَيْتُ … لٰكِنَّ … فَأَرْجَعْتُهُ …';
speak.CONV[2].qs[0].start = 'بِلَا شَكٍّ؛ فَالمُؤَثِّرُونَ …';
speak.CONV[2].qs[2].start = 'لَيْسَ بِالضَّرُورَةِ؛ فَأَحْيَانًا …';
speak.CONV[2].qs[3].start = 'كَانَ وَالِدَايَ … أَمَّا نَحْنُ فَنَطْلُبُ …';
speak.CONV[2].qs[4].start = 'لَوْ مُنِعَ …، لَعَادَتِ …';

const Q2_CORE = `إِلَى قِسْمِ خِدْمَةِ العُمَلَاءِ،
اسْمِي رِيمُ حَسَنٌ. فِي الأُسْبُوعِ المَاضِي اشْتَرَيْتُ مِنْ مَوْقِعِكُمْ حَقِيبَةً مَدْرَسِيَّةً سَوْدَاءَ، وَكَانَ ثَمَنُهَا أَرْبَعِينَ جُنَيْهًا. وَصَلَتِ الحَقِيبَةُ أَمْسِ، لٰكِنَّ السَّحَّابَ مَكْسُورٌ، وَلَوْنَهَا رَمَادِيٌّ لَا أَسْوَدُ. أَنَا حَزِينَةٌ، لِأَنِّي أَحْتَاجُ إِلَيْهَا لِلْمَدْرَسَةِ يَوْمَ الاثْنَيْنِ. فِي رَأْيِي، الحَقِيبَةُ فِي الصُّورَةِ أَجْمَلُ بِكَثِيرٍ. أُرِيدُ أَنْ أُبَدِّلَهَا بِحَقِيبَةٍ جَدِيدَةٍ سَوْدَاءَ، أَوْ أَنْ أَسْتَرِدَّ ثَمَنَهَا. سَأُرْسِلُ لَكُمْ صُورَةً لِلْحَقِيبَةِ وَالإِيصَالِ.
مَعَ الشُّكْرِ،
رِيمُ حَسَنٌ`;
const Q2_FULL = `حَضْرَةَ مُدِيرِ خِدْمَةِ العُمَلَاءِ المُحْتَرَمِ،
أَكْتُبُ إِلَيْكُمْ بِخُصُوصِ طَلَبٍ رَقْمُهُ ٤٥٢٧، اشْتَرَيْتُ فِيهِ مِنْ مَوْقِعِكُمْ حَقِيبَةً جِلْدِيَّةً سَوْدَاءَ بِأَرْبَعِينَ جُنَيْهًا، وَكُنْتُ قَدِ اخْتَرْتُهَا لِأَنَّ التَّعْلِيقَاتِ عَلَيْهَا كَانَتْ مُمْتَازَةً. غَيْرَ أَنَّ الحَقِيبَةَ الَّتِي وَصَلَتْنِي أَمْسِ رَمَادِيَّةٌ لَا سَوْدَاءُ، وَسَحَّابُهَا الرَّئِيسِيُّ مَكْسُورٌ، مِمَّا يَجْعَلُهَا غَيْرَ صَالِحَةٍ لِلِاسْتِخْدَامِ. وَبِمَا أَنَّ الدِّرَاسَةَ تَبْدَأُ يَوْمَ الاثْنَيْنِ، فَأَرْجُو أَنْ تُرْسِلُوا لِي حَقِيبَةً بَدِيلَةً قَبْلَ نِهَايَةِ الأُسْبُوعِ. وَإِذَا لَمْ يَكُنْ ذٰلِكَ مُمْكِنًا، فَسَأَطْلُبُ اسْتِرْدَادَ المَبْلَغِ كَامِلًا. تَجِدُونَ مُرْفَقًا صُورَةَ الإِيصَالِ وَالعَيْبِ.
وَتَفَضَّلُوا بِقَبُولِ فَائِقِ الاحْتِرَامِ،
رِيمُ حَسَنٌ`;
const Q3A_CORE = `أُحِبُّ التَّسَوُّقَ كَثِيرًا، خُصُوصًا فِي نِهَايَةِ الأُسْبُوعِ. أَذْهَبُ مَعَ أُمِّي أَوْ أَصْدِقَائِي إِلَى المَرْكَزِ التِّجَارِيِّ الكَبِيرِ فِي مَدِينَتِنَا. هُنَاكَ مَحَلَّاتٌ كَثِيرَةٌ لِلْمَلَابِسِ وَالأَحْذِيَةِ وَالكُتُبِ، وَمَطَاعِمُ لَذِيذَةٌ أَيْضًا.
أَشْتَرِي أَيْضًا عَلَى الإِنْتَرْنِتِ، لِأَنَّ الأَسْعَارَ هُنَاكَ أَرْخَصُ أَحْيَانًا، وَالتَّوْصِيلُ سَرِيعٌ. لٰكِنِّي أُفَضِّلُ أَنْ أَشْتَرِيَ المَلَابِسَ مِنَ المَحَلِّ، لِأَنِّي أُرِيدُ أَنْ أُجَرِّبَ المَقَاسَ وَأَرَى اللَّوْنَ الحَقِيقِيَّ.
فِي الشَّهْرِ المَاضِي كَانَتْ هُنَاكَ تَخْفِيضَاتٌ كَبِيرَةٌ. اشْتَرَيْتُ مِعْطَفًا شَتْوِيًّا بِنِصْفِ الثَّمَنِ: كَانَ ثَمَنُهُ ثَمَانِينَ جُنَيْهًا، وَدَفَعْتُ أَرْبَعِينَ فَقَطْ! اشْتَرَيْتُ أَيْضًا هَدِيَّةً لِأُخْتِي، وَكَانَتْ سَعِيدَةً جِدًّا بِهَا. كَانَ يَوْمًا مُمْتِعًا وَمُفِيدًا.
فِي رَأْيِي، يَجِبُ أَنْ نُقَارِنَ الأَسْعَارَ قَبْلَ الشِّرَاءِ، وَأَلَّا نَشْتَرِيَ أَشْيَاءَ لَا نَحْتَاجُ إِلَيْهَا. فِي المُسْتَقْبَلِ سَأَدَّخِرُ جُزْءًا مِنْ مَصْرُوفِي كُلَّ شَهْرٍ، لِكَيْ أَشْتَرِيَ حَاسُوبًا جَدِيدًا لِلدِّرَاسَةِ.`;
const Q3A_FULL = `يَرَى بَعْضُ النَّاسِ أَنَّ التَّسَوُّقَ مُجَرَّدُ وَاجِبٍ مُمِلٍّ، أَمَّا أَنَا فَأَعْتَبِرُهُ فَنًّا يَحْتَاجُ إِلَى ذَكَاءٍ وَصَبْرٍ؛ فَقَبْلَ أَنْ أَشْتَرِيَ أَيَّ شَيْءٍ، أُقَارِنُ الأَسْعَارَ فِي ثَلَاثَةِ مَوَاقِعَ عَلَى الأَقَلِّ، وَأَقْرَأُ تَعْلِيقَاتِ المُشْتَرِينَ بِعِنَايَةٍ، ثُمَّ أَنْتَظِرُ يَوْمًا كَامِلًا لِأَتَأَكَّدَ أَنِّي أَحْتَاجُ إِلَيْهِ فِعْلًا.
وَمَعَ أَنَّ التَّسَوُّقَ عَلَى الإِنْتَرْنِتِ أَسْهَلُ وَأَرْخَصُ غَالِبًا، فَإِنِّي مَا زِلْتُ أُفَضِّلُ السُّوقَ الشَّعْبِيَّ فِي حَيِّنَا؛ إِذْ أَعْرِفُ البَائِعِينَ بِأَسْمَائِهِمْ، وَأَسْتَطِيعُ أَنْ أُفَاوِضَ عَلَى السِّعْرِ، وَهُوَ أَمْرٌ لَا يَسْمَحُ بِهِ أَيُّ مَوْقِعٍ.
وَقَدْ تَعَلَّمْتُ دَرْسًا مُهِمًّا فِي السَّنَةِ المَاضِيَةِ، عِنْدَمَا اشْتَرَيْتُ سَمَّاعَاتٍ رَخِيصَةً جِدًّا مِنْ مَوْقِعٍ مَجْهُولٍ؛ فَقَدْ تَعَطَّلَتْ بَعْدَ أُسْبُوعَيْنِ، وَلَمْ أَسْتَطِعْ إِرْجَاعَهَا، لِأَنَّ المَوْقِعَ اخْتَفَى! فَاضْطُرِرْتُ إِلَى شِرَاءِ سَمَّاعَاتٍ أُخْرَى، فَدَفَعْتُ الثَّمَنَ مَرَّتَيْنِ.
صَحِيحٌ أَنَّ الرَّخِيصَ يُغْرِينَا، غَيْرَ أَنَّ الجَوْدَةَ تُوَفِّرُ المَالَ عَلَى المَدَى البَعِيدِ. وَلَوْ فَكَّرَ كُلُّ مُسْتَهْلِكٍ قَبْلَ أَنْ يَضْغَطَ عَلَى زِرِّ الشِّرَاءِ، لَاشْتَرَيْنَا أَقَلَّ، وَلَعِشْنَا بِرَاحَةٍ أَكْبَرَ.`;
const Q3B_FULL = `تَمْتَلِئُ خَزَائِنُنَا بِمَلَابِسَ لَمْ نَلْبَسْهَا إِلَّا مَرَّةً أَوْ مَرَّتَيْنِ، وَمَعَ ذٰلِكَ نَشْتَرِي المَزِيدَ كُلَّ أُسْبُوعٍ. فَهَلْ أَصْبَحْنَا نَشْتَرِي لِأَنَّنَا نَحْتَاجُ، أَمْ لِأَنَّ الإِعْلَانَاتِ تُقْنِعُنَا بِأَنَّنَا نَحْتَاجُ؟
فِي المَاضِي كَانَتِ الأُسَرُ تَشْتَرِي مَلَابِسَ قَلِيلَةً ذَاتَ جَوْدَةٍ عَالِيَةٍ، وَتُصْلِحُهَا إِذَا تَمَزَّقَتْ، أَمَّا اليَوْمَ فَتُصْنَعُ المَلَابِسُ بِأَسْعَارٍ زَهِيدَةٍ، وَتُرْمَى بَعْدَ أَشْهُرٍ قَلِيلَةٍ، مِمَّا يُؤَدِّي إِلَى تَلَوُّثٍ هَائِلٍ وَإِلَى ظُرُوفِ عَمَلٍ قَاسِيَةٍ لِلْعُمَّالِ.
وَقَدْ أَدْرَكْتُ حَجْمَ المُشْكِلَةِ عِنْدَمَا شَارَكْتُ فِي حَمْلَةٍ لِجَمْعِ المَلَابِسِ المُسْتَعْمَلَةِ فِي مَدْرَسَتِي؛ فَقَدْ جَمَعْنَا مِنَ الطُّلَّابِ وَأُسَرِهِمْ فِي أُسْبُوعٍ وَاحِدٍ أَكْثَرَ مِنْ خَمْسِمِئَةِ قِطْعَةٍ، كَانَ كَثِيرٌ مِنْهَا جَدِيدًا لَمْ تُنْزَعْ عَنْهُ البِطَاقَةُ بَعْدُ! وَقَدْ تَبَرَّعْنَا بِهَا كُلِّهَا لِجَمْعِيَّةٍ خَيْرِيَّةٍ مَحَلِّيَّةٍ.
صَحِيحٌ أَنَّ لِكُلِّ شَخْصٍ الحَقَّ فِي أَنْ يَشْتَرِيَ مَا يُحِبُّ، غَيْرَ أَنَّ المُسْتَهْلِكَ الذَّكِيَّ يَسْأَلُ نَفْسَهُ قَبْلَ الشِّرَاءِ: هَلْ أَحْتَاجُ إِلَيْهِ حَقًّا؟ وَإِذَا اشْتَرَيْنَا أَقَلَّ وَاخْتَرْنَا أَفْضَلَ، فَسَنَحْمِي جُيُوبَنَا وَكَوْكَبَنَا مَعًا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in an online-order return form, write a complaint email about a faulty online purchase, and write an extended piece about your shopping habits or about consumerism.',
  lift: [
    { ar: 'كَانَ ثَمَنُهَا أَرْبَعِينَ جُنَيْهًا', en: 'it cost forty pounds' },
    { ar: 'التَّسَوُّقُ عَلَى الإِنْتَرْنِتِ أَسْهَلُ وَأَرْخَصُ', en: 'online shopping is easier and cheaper' },
    { ar: 'أُرِيدُ أَنْ أُبَدِّلَهَا أَوْ أَنْ أَسْتَرِدَّ ثَمَنَهَا', en: 'I want to exchange it or get a refund' },
  ],
  checkTip: 'Check: hādhā / hādhihi and thamanuhu / thamanuhā agree with the item; kāna thamanuhā arbaʿīna junayhan (kāna → accusative); 11–99 + singular accusative (khamsūna junayhan); comparatives do not change for gender.',
  FORM: {
    title: 'Online-order return form', ar: 'اسْتِمَارَةُ إِرْجَاعِ المُشْتَرَيَاتِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'رِيمُ حَسَنٌ', modelEn: 'Reem Hassan' },
      { core: true, ar: 'رَقْمُ الطَّلَبِ', en: 'Order number', model: '٤٥٢٧', modelEn: '4527' },
      { core: true, ar: 'المُنْتَجُ', en: 'Product', model: 'حَقِيبَةٌ مَدْرَسِيَّةٌ سَوْدَاءُ', modelEn: 'a black school bag' },
      { core: true, ar: 'الثَّمَنُ', en: 'Price', model: 'أَرْبَعُونَ جُنَيْهًا', modelEn: 'forty pounds' },
      { core: true, ar: 'تَارِيخُ الشِّرَاءِ', en: 'Date of purchase', model: '٢ سِبْتَمْبَر', modelEn: '2 September' },
      { core: true, ar: 'سَبَبُ الإِرْجَاعِ', en: 'Reason for return', model: 'السَّحَّابُ مَكْسُورٌ', modelEn: 'the zip is broken' },
      { ar: 'مَاذَا تُرِيدُ؟ (تَبْدِيلٌ / اسْتِرْدَادٌ)', en: 'What you want (exchange / refund)', model: 'تَبْدِيلٌ بِحَقِيبَةٍ جَدِيدَةٍ', modelEn: 'an exchange for a new bag' },
      { ar: 'جُمْلَةٌ: صِفِ المُشْكِلَةَ', en: 'ONE sentence: describe the problem', model: 'وَصَلَتِ الحَقِيبَةُ الَّتِي طَلَبْتُهَا رَمَادِيَّةً لَا سَوْدَاءَ، وَسَحَّابُهَا لَا يُغْلَقُ.', modelEn: 'The bag I ordered arrived grey, not black, and its zip doesn’t close.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with allatī and a passive.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 4: arbaʿūna junayhan (11–99 + singular accusative). Box 8: allatī ṭalabtuhā + lā yughlaqu (passive).',
  },
  Q2: {
    short: 'a complaint about an online purchase', title: 'Question 2: complaint email', ar: 'رِسَالَةُ شَكْوَى',
    task: 'You bought something online, but there is a problem. Write an email in Arabic to the company of about 80–90 words. You must include: • what you bought, when and the price • what the problem is • how you feel and why you need it • what you want the company to do.',
    checklist: ['All four bullet points, in order.', 'A formal greeting and closing.', 'A price with the right number form.', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['اشْتَرَيْتُ مِنْ مَوْقِعِكُمْ … وَكَانَ ثَمَنُهَا …', 'I bought … from your site, and it cost …'], ['لٰكِنَّ … مَكْسُورٌ / لَا يَعْمَلُ', 'but … is broken / doesn’t work'], ['أَنَا حَزِينَةٌ، لِأَنِّي أَحْتَاجُ إِلَيْهَا …', 'I am upset because I need it …'], ['أُرِيدُ أَنْ أُبَدِّلَهَا / أَنْ أَسْتَرِدَّ ثَمَنَهَا', 'I want to exchange it / get a refund']],
    rubric: [
      ['task', 'اشْتَرَيْتِ شَيْئًا عَلَى الإِنْتَرْنِتِ، وَهُنَاكَ مُشْكِلَةٌ. اكْتُبِي رِسَالَةً إِلَى الشَّرِكَةِ (٨٠–٩٠ كَلِمَةً).', 'You bought something online with a problem: write to the company (80–90 words).'],
      ['1', 'مَاذَا اشْتَرَيْتِ؟ وَمَتَى؟ وَكَمْ كَانَ ثَمَنُهُ؟', 'What you bought, when, and the price'],
      ['2', 'مَا المُشْكِلَةُ؟', 'What the problem is'],
      ['3', 'كَيْفَ تَشْعُرِينَ؟ وَلِمَاذَا تَحْتَاجِينَ إِلَيْهِ؟', 'How you feel and why you need it'],
      ['4', 'مَاذَا تُرِيدِينَ أَنْ تَفْعَلَ الشَّرِكَةُ؟', 'What you want the company to do'],
    ],
    qwords: 'مَاذَا (what) · مَتَى (when) · كَمْ (how much) · كَيْفَ (how) · لِمَاذَا (why) — bullet 1 is PAST, bullet 4 is a request',
    frames: [
      ['start', 'إِلَى قِسْمِ خِدْمَةِ العُمَلَاءِ،', 'To the customer service department,'],
      ['1', 'فِي الأُسْبُوعِ المَاضِي اشْتَرَيْتُ ______ ، وَكَانَ ثَمَنُهَا ______ .', 'Last week I bought …, and it cost …'],
      ['2', 'وَصَلَتْ أَمْسِ، لٰكِنَّ ______ .', 'It arrived yesterday, but …'],
      ['3', 'أَنَا حَزِينَةٌ، لِأَنِّي أَحْتَاجُ إِلَيْهَا ______ .', 'I am upset, because I need it …'],
      ['4', 'أُرِيدُ أَنْ ______ . سَأُرْسِلُ لَكُمْ ______ .', 'I want to … I will send you …'],
      ['end', 'مَعَ الشُّكْرِ، ______', 'With thanks, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“To customer services, my name is Reem Hassan. Last week I bought a black school bag from your website for forty pounds. It arrived yesterday, but the zip is broken and it is grey, not black. I am upset because I need it for school on Monday. In my opinion the bag in the photo is much nicer. I want to exchange it for a new black bag or get a refund. I will send you a photo of the bag and the receipt. With thanks, Reem Hassan.”',
      find: ['كَانَ ثَمَنُهَا أَرْبَعِينَ', 'السَّحَّابَ مَكْسُورٌ', 'أَحْتَاجُ إِلَيْهَا', 'أَنْ أَسْتَرِدَّ ثَمَنَهَا'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Customer Services Manager, I am writing about order no. 4527, in which I bought a black leather bag from your site for £40, chosen because its reviews were excellent. However, the bag that reached me yesterday is grey, not black, and its main zip is broken, which makes it unusable. Since school starts on Monday, please send me a replacement before the weekend. If that is not possible, I will request a full refund. Please find attached a photo of the receipt and the fault. Yours respectfully, Reem Hassan.”',
      find: ['بِخُصُوصِ طَلَبٍ', 'كُنْتُ قَدِ اخْتَرْتُهَا', 'مِمَّا يَجْعَلُهَا', 'إِذَا لَمْ يَكُنْ … فَسَأَطْلُبُ'],
    },
  },
  Q3: {
    a: { title: 'عَادَاتِي فِي التَّسَوُّقِ', en: 'My shopping habits', bullets: 'أَيْنَ وَمَتَى تَتَسَوَّقُ · المَحَلُّ أَمِ الإِنْتَرْنِتُ؟ · تَجْرِبَةُ شِرَاءٍ لَا تَنْسَاهَا · رَأْيُكَ وَخِطَطُكَ', bulletsEn: 'Where and when you shop · shops or online? · a buying experience you remember · your opinion and plans' },
    b: { title: 'نَشْتَرِي أَكْثَرَ مِمَّا نَحْتَاجُ', en: 'We buy more than we need', bullets: 'ظَاهِرَةُ الاسْتِهْلَاكِ · المَاضِي وَالحَاضِرُ · مِثَالٌ مِنْ تَجْرِبَتِكَ · رَأْيُكَ وَنَصِيحَتُكَ', bulletsEn: 'Consumerism · past and present · an example from your experience · your opinion and advice' },
    plan: [
      'Where and when — adhhabu ilā al-markaz at-tijārī …; hunāka maḥallātun kathīra (non-human plural).',
      'Shops vs online — arkhaṣu, asrau, ufaḍḍilu an … li-annī …',
      'Past — a sale or a problem: kāna thamanuhu … wa-dafaʿtu …; ishtaraytu …',
      'Opinion + future — yajibu an nuqārina …, sa-addakhiru … li-kay …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'الأَسْعَارُ عَلَى الإِنْتَرْنِتِ أَرْخَصُ أَحْيَانًا.', en: 'present: prices online are sometimes cheaper.' },
      { ar: 'كَانَ ثَمَنُهُ ثَمَانِينَ جُنَيْهًا، وَدَفَعْتُ أَرْبَعِينَ فَقَطْ.', en: 'past: it cost eighty pounds, and I paid only forty.' },
      { ar: 'سَأَدَّخِرُ جُزْءًا مِنْ مَصْرُوفِي كُلَّ شَهْرٍ.', en: 'future: I will save part of my pocket money each month.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'I love shopping, especially at weekends, with Mum or friends at the big shopping centre — lots of clothes, shoe and book shops, and good restaurants → I also shop online: sometimes cheaper, fast delivery; but I prefer buying clothes in shops to try the size and see the real colour → last month in the sales I bought a winter coat at half price — £80, I paid £40! — and a present my sister loved — a fun, useful day → we must compare prices and not buy what we don’t need; I’ll save part of my pocket money each month for a new study laptop.', find: ['هُنَاكَ مَحَلَّاتٌ كَثِيرَةٌ', 'الأَسْعَارَ هُنَاكَ أَرْخَصُ', 'كَانَ ثَمَنُهُ ثَمَانِينَ', 'لِكَيْ أَشْتَرِيَ'], notes: 'Core model: non-human plural agreement, comparatives, ufaḍḍilu an, kāna thamanuhu + accusative number, allā + subjunctive, li-kay and a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Some see shopping as a boring chore; I see it as an art needing intelligence and patience: before buying anything I compare prices on at least three sites and read reviews carefully, then wait a whole day to be sure I really need it → although online shopping is usually easier and cheaper, I still prefer our local market: I know the sellers by name and can haggle, which no website allows → I learnt a lesson last year buying very cheap headphones from an unknown site: they broke after two weeks and I couldn’t return them because the site had vanished! I had to buy another pair — I paid twice → cheap things tempt us, but quality saves money in the long run; “if every consumer thought before pressing ‘buy’, we would buy less and live more comfortably”.', find: ['أَمَّا أَنَا فَأَعْتَبِرُهُ', 'مَعَ أَنَّ … فَإِنِّي', 'لَا يَسْمَحُ بِهِ أَيُّ مَوْقِعٍ', 'لَوْ فَكَّرَ … لَاشْتَرَيْنَا'], notes: 'Full-mark model: ammā anā fa-, qabla an, maʿa anna … fa-innī, idh, a relative without alladhī, a narrated lesson with fa- chains, iḍṭurirtu ilā, a concession and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'we buy more than we need', text: Q3B_FULL, en: 'Our wardrobes are full of clothes worn once or twice, yet we buy more every week — do we buy because we need, or because adverts convince us we need? → in the past families bought few high-quality clothes and mended them; today clothes are made cheaply and thrown away within months, which leads to huge pollution and harsh conditions for workers → I realised the scale when I joined a second-hand clothes drive at school: in one week we collected from students and families over 500 items, many brand new with the tags still on! We gave them all to a local charity → everyone has the right to buy what they like, but a smart consumer asks first: do I really need it? “If we buy less and choose better, we will protect our pockets and our planet together.”', find: ['لَمْ نَلْبَسْهَا إِلَّا', 'أَمَّا اليَوْمَ فَتُصْنَعُ', 'لَمْ تُنْزَعْ … بَعْدُ', 'إِذَا اشْتَرَيْنَا … فَسَنَحْمِي'], notes: 'Full-mark model for the Stretch title: lam … illā, wa-maʿa dhālika, a rhetorical question, kāna + present vs ammā … fa- with passives, mimmā yuʾaddī ilā, a vivid statistic, lam … baʿdu, a concession and idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; the price uses the right number form.' },
    { route: 'core', text: 'Q2: all four bullet points, with a formal greeting and closing.' },
    { route: 'develop', text: 'Q2: thamanuhā agrees, and a clear request (urīdu an …).' },
    { route: 'develop', text: 'Q3: four paragraphs with comparatives and a past purchase.' },
    { route: 'stretch', text: 'Q3: a concession and law … la- or idhā … fa-sa-.' },
  ],
};
write.Q3.plan[3] = 'Opinion + future — yajibu an nuqārina …, sa-addakhiru … li-kay …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.';
write.Q3.plan[1] = 'Shops vs online — arkhaṣu, asraʿu, ufaḍḍilu an … li-annī …';

module.exports = { speak, write };
