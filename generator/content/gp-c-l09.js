'use strict';
/* Guided Practice Rooms · TC-L09 · Shopping, prices and consumer choices. New tasks. Teacher-made. */
const XP = require('./xp-c-l09');

const base = { topic: 'C', n: 9, short: 'Shopping, Prices and Consumer Choices', arShort: 'التَّسَوُّقُ وَالأَسْعَارُ', fileTitle: 'Shopping_Prices_Consumer_Choices', title: 'Shopping, prices and consumer choices', icon: 'FaBagShopping', grammar: 'demonstratives (hādhā · hādhihi · hāʾulāʾi); asking prices (kam thamanuhu / thamanuhā?); numbers with currencies; rakhīṣun / ghālin + comparatives (arkhaṣu · aghlā); polite requests (hal yumkinu an …); complaints (maksūrun · maʿībun)' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up on shopping and prices, the answer ladder, two new role plays (buying a present at a souq, returning a faulty online order), a topic conversation with A-R-E-T, and a one-minute talk about their shopping habits.',
  words: XP.speak.words,
  words1: { title: 'In the shop', ar: 'فِي المَحَلِّ' },
  words2: { title: 'Paying, returning and shopping online', ar: 'الدَّفْعُ وَالإِرْجَاعُ وَالتَّسَوُّقُ عَلَى الإِنْتَرْنِتِ' },
  ladder: {
    q: 'أَيْنَ تُحِبُّ أَنْ تَتَسَوَّقَ؟', qEn: 'Where do you like to shop?',
    rungs: [
      { ar: 'أُحِبُّ أَنْ أَتَسَوَّقَ فِي السُّوقِ.', en: 'I like shopping at the market.' },
      { ar: 'أُحِبُّ أَنْ أَتَسَوَّقَ فِي السُّوقِ، لِأَنَّ الأَسْعَارَ أَرْخَصُ مِنَ المَحَلَّاتِ.', en: '… because prices are cheaper than in shops.' },
      { ar: '… وَأَسْتَطِيعُ أَنْ أُفَاصِلَ؛ مَثَلًا، اشْتَرَيْتُ أَمْسِ قَمِيصًا بِعَشَرَةِ جُنَيْهَاتٍ بَدَلًا مِنْ خَمْسَةَ عَشَرَ.', en: '… and I can bargain — yesterday I bought a shirt for £10 instead of £15.' },
      { ar: '… صَحِيحٌ أَنَّ التَّسَوُّقَ عَلَى الإِنْتَرْنِتِ أَسْهَلُ، غَيْرَ أَنِّي أُحِبُّ أَنْ أَلْمِسَ المَلَابِسَ قَبْلَ أَنْ أَشْتَرِيَهَا.', en: '… it’s true online is easier, but I like to touch clothes before I buy them.' },
    ],
  },
  ladderQs: [
    { q: 'كَمْ مَصْرُوفُكَ فِي الأُسْبُوعِ؟', l1: 'مَصْرُوفِي … جُنَيْهَاتٍ', l2: '… وَأَشْتَرِي بِهِ …', l3: '… وَأُوَفِّرُ … لِكَيْ …' },
    { q: 'مَا آخِرُ شَيْءٍ اشْتَرَيْتَهُ؟', l1: 'اشْتَرَيْتُ …', l2: '… بِـ … جُنَيْهًا', l3: '… وَكَانَ أَغْلَى / أَرْخَصُ مِنْ …' },
    { q: 'هَلْ تُحِبُّ التَّخْفِيضَاتِ؟', l1: 'نَعَمْ / لَا، …', l2: '… لِأَنَّ …', l3: '… وَفِي آخِرِ تَخْفِيضَاتٍ …' },
    { q: 'هَلْ أَرْجَعْتَ شَيْئًا إِلَى مَحَلٍّ؟', l1: 'نَعَمْ، أَرْجَعْتُ …', l2: '… لِأَنَّهُ كَانَ …', l3: '… فَأَعْطَوْنِي …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a souq in Marrakesh', title: 'Role play 1 — Buying a present at the souq', ar: 'شِرَاءُ هَدِيَّةٍ فِي السُّوقِ', you: 'a tourist', them: 'the shopkeeper',
      tasks: [
        { ex: 'أَهْلًا! مَاذَا تُرِيدُ؟', task: 'Say what you want and for whom.', plan: 'مَاذَا ← أُرِيدُ هَدِيَّةً لِأُمِّي / لِأَبِي', model: 'أُرِيدُ هَدِيَّةً لِأُمِّي.', modelEn: 'I want a present for my mum.' },
        { ex: 'عِنْدَنَا هٰذِهِ الحَقِيبَةُ الجِلْدِيَّةُ.', task: 'Ask the price.', plan: 'اسْأَلْ ← كَمْ ثَمَنُ … ؟', model: 'جَمِيلَةٌ! كَمْ ثَمَنُهَا؟', modelEn: 'Lovely! How much is it?' },
        { ex: 'ثَمَنُهَا ثَلَاثُمِئَةِ دِرْهَمٍ.', task: 'Say it is expensive and offer a price.', plan: 'غَالِيَةٌ ← هٰذَا غَالٍ! … مِئَتَيْ دِرْهَمٍ؟', model: 'هٰذَا غَالٍ جِدًّا! هَلْ تَقْبَلُ مِئَتَيْ دِرْهَمٍ؟', modelEn: 'That’s very expensive! Will you accept 200 dirhams?' },
        { ex: 'أَيَّ لَوْنٍ تُفَضِّلُ؟', task: 'Choose a colour.', plan: 'لَوْنٌ ← أُفَضِّلُ الحَقِيبَةَ … ← الحَمْرَاءَ / البُنِّيَّةَ', model: 'أُفَضِّلُ الحَقِيبَةَ البُنِّيَّةَ.', modelEn: 'I prefer the brown bag.' },
        { unexpected: true, ex: 'هَلْ تَدْفَعُ نَقْدًا أَمْ بِالبِطَاقَةِ؟', task: 'Answer the unexpected question.', plan: 'أَمْ ← أَدْفَعُ … لِأَنَّ …', model: 'أَدْفَعُ نَقْدًا، لِأَنَّ بِطَاقَتِي لَا تَعْمَلُ هُنَا.', modelEn: 'I’ll pay cash, because my card doesn’t work here.' },
      ],
      girl: 'تُرِيدِينَ · تُفَضِّلِينَ · تَدْفَعِينَ — and the Speaker says to a female seller: هَلْ تَقْبَلِينَ',
      notes: 'Language: urīdu hadiyyatan li- · kam thamanuhā (f. noun) · ghālin · miʾatay dirhamin (dual in iḍāfa) · colour agreement (al-bunniyyata) · naqdan / bi-l-biṭāqa.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a call to an online shop', title: 'Role play 2 — Returning a faulty order', ar: 'إِرْجَاعُ طَلَبٍ مَعِيبٍ', you: 'a customer', them: 'the customer-service agent',
      tasks: [
        { ex: 'خِدْمَةُ العُمَلَاءِ، كَيْفَ أُسَاعِدُكَ؟', task: 'Explain what you ordered and when (past).', model: 'طَلَبْتُ سَمَّاعَاتٍ لَاسِلْكِيَّةً مِنْ مَوْقِعِكُمْ يَوْمَ الإِثْنَيْنِ، وَوَصَلَتْ أَمْسِ.', modelEn: 'I ordered wireless headphones from your site on Monday, and they arrived yesterday.' },
        { ex: 'مَا المُشْكِلَةُ بِالضَّبْطِ؟', task: 'Describe two faults.', model: 'العُلْبَةُ كَانَتْ مَكْسُورَةً، وَالسَّمَّاعَةُ اليُسْرَى لَا تَعْمَلُ أَبَدًا.', modelEn: 'The box was broken, and the left earphone doesn’t work at all.' },
        { ex: 'هَلْ عِنْدَكَ الإِيصَالُ؟', task: 'Answer and say what you want.', model: 'نَعَمْ، عِنْدِي الإِيصَالُ الإِلِكْتْرُونِيُّ. أُرِيدُ أَنْ تُرْجِعُوا لِي المَالَ، لَا أَنْ تُبَدِّلُوهَا.', modelEn: 'Yes, I have the e-receipt. I want a refund, not an exchange.' },
        { ex: 'سَيَصِلُكَ المَالُ بَعْدَ أُسْبُوعَيْنِ.', task: 'React and ASK a question.', model: 'أُسْبُوعَانِ؟ هٰذَا طَوِيلٌ! هَلْ يُمْكِنُ أَنْ يَكُونَ أَسْرَعَ؟', modelEn: 'Two weeks? That’s long! Can it be faster?' },
        { unexpected: true, ex: 'لِمَاذَا تَتَسَوَّقُ عَلَى الإِنْتَرْنِتِ إِذَا كَانَتْ هُنَاكَ مَشَاكِلُ؟', task: 'Answer the unexpected question (concession).', model: 'صَحِيحٌ أَنَّ هُنَاكَ مَشَاكِلَ أَحْيَانًا، غَيْرَ أَنَّ الأَسْعَارَ أَرْخَصُ، وَالاخْتِيَارَ أَكْبَرُ، وَلَا أَحْتَاجُ إِلَى المُوَاصَلَاتِ.', modelEn: 'It’s true there are problems sometimes, but prices are cheaper, the choice is bigger, and I don’t need transport.' },
      ],
      girl: 'أُسَاعِدُكِ · عِنْدَكِ · سَيَصِلُكِ · تَتَسَوَّقِينَ',
      notes: 'Stretch language: ṭalabtu … wa-waṣalat (non-human plural → f.) · maksūratun · urīdu an … lā an … · dual usbūʿāni · ṣaḥīḥun anna … ghayra anna + comparatives.',
    },
  ],
  convAr: 'التَّسَوُّقُ',
  conv: [
    { route: 'Core', q: 'مَعَ مَنْ تَتَسَوَّقُ عَادَةً؟', en: 'Who do you usually shop with?', push: 'وَأَيْنَ؟' },
    { route: 'Core', q: 'كَمْ ثَمَنُ حِذَائِكَ؟', en: 'How much were your shoes?', push: 'هَلْ هٰذَا غَالٍ؟' },
    { route: 'Develop', q: 'صِفْ آخِرَ مَرَّةٍ ذَهَبْتَ فِيهَا لِلتَّسَوُّقِ.', en: 'Describe the last time you went shopping.', push: 'مَاذَا اشْتَرَيْتَ؟' },
    { route: 'Develop', q: 'هَلْ تُفَضِّلُ المَحَلَّاتِ أَمِ التَّسَوُّقَ عَلَى الإِنْتَرْنِتِ؟', en: 'Do you prefer shops or shopping online?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'هَلْ يَشْتَرِي الشَّبَابُ أَكْثَرَ مِنَ اللَّازِمِ؟', en: 'Do young people buy too much?', push: 'وَالسَّبَبُ؟' },
    { route: 'Stretch', q: 'هَلْ مِنَ المُهِمِّ أَنْ نَشْتَرِيَ مُنْتَجَاتٍ صَدِيقَةً لِلْبِيئَةِ؟', en: 'Is it important to buy eco-friendly products?', push: 'حَتَّى لَوْ كَانَتْ أَغْلَى؟' },
  ],
  convModels: [
    { q: 'صِفْ آخِرَ مَرَّةٍ ذَهَبْتَ فِيهَا لِلتَّسَوُّقِ.', model: 'ذَهَبْتُ يَوْمَ السَّبْتِ مَعَ أُخْتِي إِلَى المَرْكَزِ التِّجَارِيِّ، لِأَنَّنَا أَرَدْنَا مَلَابِسَ لِلْعِيدِ؛ اشْتَرَيْتُ ثَوْبًا أَخْضَرَ بِثَلَاثِينَ جُنَيْهًا، وَسَأَلْبَسُهُ فِي صَلَاةِ العِيدِ.', modelEn: 'A: Saturday with my sister at the shopping centre · R: we wanted Eid clothes · E: a green thobe for £30 · T: I’ll wear it for Eid prayer.' },
    { q: 'هَلْ تُفَضِّلُ المَحَلَّاتِ أَمِ التَّسَوُّقَ عَلَى الإِنْتَرْنِتِ؟', model: 'أُفَضِّلُ الإِنْتَرْنِتَ لِلْكُتُبِ وَالأَلْعَابِ، لِأَنَّهُ أَرْخَصُ وَأَسْرَعُ؛ أَمَّا المَلَابِسُ فَأَشْتَرِيهَا مِنَ المَحَلَّاتِ، لِأَنَّ المَقَاسَ لَمْ يَكُنْ مُنَاسِبًا مَرَّتَيْنِ عِنْدَمَا طَلَبْتُهَا عَلَى الإِنْتَرْنِتِ.', modelEn: 'A: online for books and games · R: cheaper and faster · contrast/E: clothes in shops — twice the size was wrong when I ordered online.' },
    { q: 'هَلْ يَشْتَرِي الشَّبَابُ أَكْثَرَ مِنَ اللَّازِمِ؟', model: 'فِي رَأْيِي نَعَمْ، لِأَنَّ الإِعْلَانَاتِ عَلَى وَسَائِلِ التَّوَاصُلِ تُشَجِّعُهُمْ؛ مَثَلًا، اشْتَرَيْتُ مَرَّةً حِذَاءً غَالِيًا لِأَنَّ كُلَّ أَصْدِقَائِي اشْتَرَوْهُ، ثُمَّ لَبِسْتُهُ مَرَّتَيْنِ فَقَطْ!', modelEn: 'Opinion: yes · R: social media adverts push them · E: I once bought expensive trainers because all my friends did — then wore them only twice!' },
  ],
  talk: {
    title: 'One minute: me and shopping', ar: 'أَنَا وَالتَّسَوُّقُ',
    text: 'Talk for one minute about your shopping habits: where and with whom, what you buy, how much you spend, a good or bad shopping experience — and your opinion on online shopping.',
    routes: {
      core: '30 seconds: where you shop, two things you buy, one price.',
      develop: '60 seconds: add a comparison (أَرْخَصُ · أَغْلَى مِنْ) and a past purchase.',
      stretch: '90 seconds: add a problem you had and an opinion with a concession.',
    },
  },
  checkCore: 'used هٰذَا / هٰذِهِ and asked prices correctly (ثَمَنُهُ / ثَمَنُهَا)',
  checkDevelop: 'used comparatives (أَرْخَصُ · أَغْلَى مِنْ) with prices',
};
speak.ladderQs[1].l2 = '… بِعِشْرِينَ جُنَيْهًا';

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up order form, decoding a new Q2 task (a complaint email to a shop), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Online order form', ar: 'اسْتِمَارَةُ الطَّلَبِ عَلَى الإِنْتَرْنِتِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'المُنْتَجُ', en: 'Product', tip: 'قَمِيصٌ · حَقِيبَةٌ' },
      { core: true, ar: 'المَقَاسُ', en: 'Size', tip: 'صَغِيرٌ · وَسَطٌ · كَبِيرٌ' },
      { core: true, ar: 'اللَّوْنُ', en: 'Colour', tip: 'Agree with the product: أَزْرَقُ / زَرْقَاءُ' },
      { core: true, ar: 'طَرِيقَةُ الدَّفْعِ', en: 'Payment method', tip: 'بِالبِطَاقَةِ' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تَشْتَرِي هٰذَا المُنْتَجَ؟', en: 'ONE sentence: why you are buying it', tip: 'أَشْتَرِيهِ لِأَنَّ …' },
    ],
  },
  Q2: {
    title: 'Question 2: a complaint to a shop', ar: 'رِسَالَةُ شَكْوَى إِلَى مَحَلٍّ',
    task: 'You bought something that has a problem. Write an email in Arabic to the shop of about 80–90 words. You must include: • what you bought, when, and the price • what the problem is • what happened when you tried to use it • what you want the shop to do, and why.',
    phrases: [['اشْتَرَيْتُ مِنْ مَحَلِّكُمْ … بِـ …', 'I bought … from your shop for …'], ['المُشْكِلَةُ أَنَّ …', 'the problem is that …'], ['عِنْدَمَا … ، اكْتَشَفْتُ أَنَّ …', 'when I …, I discovered that …'], ['أُرِيدُ أَنْ تُبَدِّلُوا / تُرْجِعُوا …', 'I would like you to exchange / refund …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةَ شَكْوَى إِلَى المَحَلِّ (٨٠–٩٠ كَلِمَةً).', 'Write a complaint to the shop (80–90 words).'],
      ['1', 'مَاذَا اشْتَرَيْتَ؟ وَمَتَى؟ وَبِكَمْ؟', 'What, when, how much'],
      ['2', 'مَا المُشْكِلَةُ؟', 'The problem'],
      ['3', 'مَاذَا حَدَثَ عِنْدَمَا اسْتَعْمَلْتَهُ؟', 'What happened when you used it'],
      ['4', 'مَاذَا تُرِيدُ مِنَ المَحَلِّ؟ وَلِمَاذَا؟', 'What you want and why'],
    ],
    decode: ['a FORMAL complaint → السَّادَةُ … المُحْتَرَمُونَ and a polite closing', 'مَاذَا · مَتَى · بِكَمْ → PAST + date + price (بِـ + number)', 'مَا المُشْكِلَةُ → PRESENT description (مَكْسُورٌ · مَعِيبٌ · لَا يَعْمَلُ)', 'مَاذَا حَدَثَ → PAST, in order', 'مَاذَا تُرِيدُ · لِمَاذَا → أُرِيدُ أَنْ + لِأَنَّ'],
    coreFrames: [
      { ar: 'السَّادَةُ فِي مَحَلِّ ______ المُحْتَرَمُونَ،', en: 'Dear … shop,' },
      { ar: 'اشْتَرَيْتُ مِنْ مَحَلِّكُمْ ______ يَوْمَ ______ بِ ______ جُنَيْهًا.', en: '1 · I bought … from your shop on … for £…' },
      { ar: 'المُشْكِلَةُ أَنَّ ______ مَكْسُورٌ / لَا يَعْمَلُ.', en: '2 · The problem is that … is broken / doesn’t work.' },
      { ar: 'عِنْدَمَا ______ ، ______ .', en: '3 · When I …, …' },
      { ar: 'أُرِيدُ أَنْ ______ ، لِأَنَّ ______ .', en: '4 · I would like …, because …' },
    ],
    developFrames: [
      { ar: 'اشْتَرَيْتُ ______ لِ ______ ، وَكَانَ ثَمَنُهُ ______ .', en: '1 · I bought … for …, and it cost …' },
      { ar: 'لِلْأَسَفِ ______ ، بِالإِضَافَةِ إِلَى أَنَّ ______ .', en: '2 · Unfortunately …, in addition to the fact that …' },
      { ar: 'فِي اليَوْمِ الأَوَّلِ ______ ، فَ ______ .', en: '3 · On the first day …, so …' },
      { ar: 'أَرْجُو أَنْ ______ ، وَإِلَّا فَ ______ .', en: '4 · Please …, otherwise …' },
    ],
    bank: ['اشْتَرَيْتُ', 'بِـ … جُنَيْهًا', 'مَكْسُورٌ · مَعِيبٌ', 'لَا يَعْمَلُ', 'الإِيصَالُ', 'أُبَدِّلُ', 'تُرْجِعُوا المَالَ', 'أَرْجُو أَنْ'],
    model: {
      text: `السَّادَةُ فِي مَحَلِّ النُّورِ لِلْإِلِكْتْرُونِيَّاتِ المُحْتَرَمُونَ،
فِي الأُسْبُوعِ المَاضِي، اشْتَرَيْتُ مِنْ مَحَلِّكُمْ سَاعَةً ذَكِيَّةً سَوْدَاءَ هَدِيَّةً لِأَخِي، وَكَانَ ثَمَنُهَا تِسْعِينَ جُنَيْهًا، وَهٰذَا غَالٍ بِالنِّسْبَةِ لِي. لِلْأَسَفِ، الشَّاشَةُ مَكْسُورَةٌ قَلِيلًا، بِالإِضَافَةِ إِلَى أَنَّ البَطَّارِيَّةَ لَا تَعْمَلُ أَكْثَرَ مِنْ سَاعَةٍ. فِي يَوْمِ عِيدِ مِيلَادِهِ، فَتَحَ أَخِي العُلْبَةَ بِسَعَادَةٍ، لٰكِنَّ السَّاعَةَ تَوَقَّفَتْ بَعْدَ دَقَائِقَ قَلِيلَةٍ، فَحَزِنَ كَثِيرًا. أَرْجُو أَنْ تُرْجِعُوا لِي المَالَ كَامِلًا، لِأَنِّي لَا أُرِيدُ سَاعَةً أُخْرَى مِنَ النَّوْعِ نَفْسِهِ، وَعِنْدِي الإِيصَالُ وَالعُلْبَةُ الأَصْلِيَّةُ مَعَ الشَّاحِنِ.
مَعَ الشُّكْرِ،
سَارَةُ حُسَيْنٌ`,
      en: '“Dear Al-Nour Electronics, last week I bought a black smartwatch from your shop as a present for my brother; it cost £90, which is expensive for me. Unfortunately, the screen is slightly broken, and in addition the battery doesn’t last more than an hour. On his birthday my brother opened the box happily, but the watch stopped after a few minutes, and he was very sad. Please give me a full refund, because I don’t want another watch of the same kind; I have the receipt and the original box with the charger. With thanks, Sara Hussain.”',
      find: ['وَكَانَ ثَمَنُهَا تِسْعِينَ جُنَيْهًا', 'الشَّاشَةُ مَكْسُورَةٌ', 'بِالإِضَافَةِ إِلَى أَنَّ', 'أَرْجُو أَنْ تُرْجِعُوا لِي المَالَ'],
    },
  },
  upgrade: [
    { ar: 'اشْتَرَيْتُ حِذَاءً.', en: 'I bought shoes.' },
    { ar: 'اشْتَرَيْتُ حِذَاءً رِيَاضِيًّا أَبْيَضَ بِخَمْسِينَ جُنَيْهًا.', en: 'I bought white trainers for £50.' },
    { ar: '… فِي التَّخْفِيضَاتِ، لِذٰلِكَ كَانَ أَرْخَصَ بِعِشْرِينَ جُنَيْهًا مِنَ السِّعْرِ العَادِيِّ.', en: '… in the sales, so it was £20 cheaper than the normal price.' },
    { ar: '… لٰكِنَّ المَقَاسَ كَانَ صَغِيرًا، فَأَرْجَعْتُهُ، وَبَدَّلْتُهُ بِمَقَاسٍ أَكْبَرَ.', en: '… but the size was small, so I took it back and exchanged it for a bigger size.' },
  ],
  builder: [
    { en: 'How much is this bag?', cols: [['كَمْ ثَمَنُ', 'كَمْ ثَمَنًا'], ['هٰذِهِ', 'هٰذَا'], ['الحَقِيبَةِ', 'حَقِيبَةٌ']], key: [0, 0, 0], why: 'كَمْ ثَمَنُ + هٰذِهِ (feminine) + الحَقِيبَةِ (genitive in iḍāfa).' },
    { en: 'This shirt is cheaper than that one.', cols: [['هٰذَا القَمِيصُ', 'هٰذِهِ القَمِيصُ'], ['أَرْخَصُ', 'رَخِيصَةٌ'], ['مِنْ ذٰلِكَ', 'ذٰلِكَ']], key: [0, 0, 0], why: 'قَمِيصٌ is masculine → هٰذَا; comparative أَرْخَصُ + مِنْ.' },
    { en: 'I paid twenty pounds.', cols: [['دَفَعْتُ', 'أَدْفَعُ'], ['عِشْرِينَ', 'عِشْرُونَ'], ['جُنَيْهًا', 'جُنَيْهَاتٍ']], key: [0, 0, 0], why: 'Object → عِشْرِينَ; 11–99 + singular accusative: جُنَيْهًا.' },
  ],
  errors: [
    { wrong: 'هٰذَا الحَقِيبَةُ غَالِيَةٌ.', hint: 'حَقِيبَةٌ is feminine.', right: 'هٰذِهِ الحَقِيبَةُ غَالِيَةٌ.', why: 'Feminine noun → هٰذِهِ.' },
    { wrong: 'اشْتَرَيْتُ القَمِيصَ بِعَشْرُ جُنَيْهَاتٍ.', hint: 'Look after the little word bi- (for).', right: 'اشْتَرَيْتُ القَمِيصَ بِعَشَرَةِ جُنَيْهَاتٍ.', why: 'After bi- → genitive; 3–10 take the opposite gender: عَشَرَةِ جُنَيْهَاتٍ.' },
    { wrong: 'الهَاتِفُ مَكْسُورَةٌ.', hint: 'Agreement.', right: 'الهَاتِفُ مَكْسُورٌ.', why: 'هَاتِفٌ is masculine → مَكْسُورٌ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a shopping trip to remember', ar: 'رِحْلَةُ تَسَوُّقٍ لَا أَنْسَاهَا',
    task: 'Full Q3 title: “Shopping: then and now”. Today write ONLY the past paragraph: a shopping trip you remember — where, with whom, what you bought and for how much, what went well or badly, and how you felt.',
    formula: [
      { ar: 'قَبْلَ العِيدِ ذَهَبْتُ مَعَ جَدَّتِي إِلَى سُوقِ المَدِينَةِ.', en: 'T · Before Eid I went with my grandmother to the city market.' },
      { ar: 'اشْتَرَيْنَا ثِيَابًا وَحَلْوَى، وَفَاصَلَتْ جَدَّتِي كَثِيرًا.', en: 'D · We bought clothes and sweets, and grandma bargained a lot.' },
      { ar: 'أَتَذَكَّرُهَا لِأَنَّ جَدَّتِي عَلَّمَتْنِي كَيْفَ أُفَاصِلُ.', en: 'R · I remember it because grandma taught me how to bargain.' },
      { ar: 'كَانَ يَوْمًا مُمْتِعًا جِدًّا.', en: 'F · It was a very enjoyable day.' },
    ],
    phrases: [['ذَهَبْتُ مَعَ … إِلَى …', 'I went with … to …'], ['اشْتَرَيْتُ … بِـ … جُنَيْهًا', 'I bought … for £…'], ['كَانَ أَغْلَى / أَرْخَصَ مِمَّا تَوَقَّعْتُ', 'it was more expensive / cheaper than I expected'], ['فَاصَلْتُ · أَرْجَعْتُ', 'I bargained · I returned'], ['شَعَرْتُ بِالسَّعَادَةِ / بِالنَّدَمِ', 'I felt happy / regretful']],
    model: {
      text: 'قَبْلَ عِيدِ الفِطْرِ المَاضِي، ذَهَبْتُ مَعَ جَدَّتِي إِلَى سُوقِ خَانِ الخَلِيلِيِّ فِي القَاهِرَةِ. كَانَ السُّوقُ مُزْدَحِمًا جِدًّا، وَكَانَتْ رَائِحَةُ التَّوَابِلِ فِي كُلِّ مَكَانٍ. أَعْجَبَنِي فَانُوسٌ نُحَاسِيٌّ جَمِيلٌ، وَكَانَ ثَمَنُهُ أَرْبَعَمِئَةِ جُنَيْهٍ، لٰكِنَّ جَدَّتِي فَاصَلَتِ البَائِعَ عَشْرَ دَقَائِقَ، فَاشْتَرَيْنَاهُ بِنِصْفِ الثَّمَنِ! بَعْدَ ذٰلِكَ شَرِبْنَا عَصِيرَ القَصَبِ فِي مَقْهًى قَدِيمٍ. أَتَذَكَّرُ هٰذَا اليَوْمَ لِأَنَّ جَدَّتِي عَلَّمَتْنِي أَنْ أَكُونَ صَبُورًا، وَالفَانُوسُ مَازَالَ فِي غُرْفَتِي.',
      en: 'T: before last Eid al-Fitr I went with my grandmother to the Khan el-Khalili market in Cairo · D: the market was very crowded and the smell of spices was everywhere; I loved a beautiful copper lantern costing 400 pounds, but grandma bargained with the seller for ten minutes and we bought it for half price! Then we drank sugar-cane juice in an old café · R/F: I remember this day because grandma taught me to be patient, and the lantern is still in my room.',
      find: ['كَانَ السُّوقُ مُزْدَحِمًا', 'وَكَانَ ثَمَنُهُ', 'فَاشْتَرَيْنَاهُ بِنِصْفِ الثَّمَنِ', 'أَتَذَكَّرُ هٰذَا اليَوْمَ لِأَنَّ'],
    },
  },
};
write.Q2.phrases[0] = ['اشْتَرَيْتُ مِنْ مَحَلِّكُمْ … بِخَمْسِينَ جُنَيْهًا', 'I bought … from your shop for £50'];
write.Q2.coreFrames[1] = { ar: 'اشْتَرَيْتُ مِنْ مَحَلِّكُمْ ______ يَوْمَ ______ ، وَكَانَ ثَمَنُهُ ______ جُنَيْهًا.', en: '1 · I bought … from your shop on …, and it cost £…' };
write.Q2.developFrames[0] = { ar: 'اشْتَرَيْتُ ______ هَدِيَّةً لِ ______ ، وَكَانَ ثَمَنُهُ ______ .', en: '1 · I bought … as a present for …, and it cost …' };
write.Q2.developFrames[2] = { ar: 'فِي اليَوْمِ الأَوَّلِ ______ ، لِذٰلِكَ ______ .', en: '3 · On the first day …, so …' };
write.Q2.developFrames[3] = { ar: 'أَرْجُو أَنْ ______ ، لِأَنَّ ______ .', en: '4 · Please …, because …' };
write.Q2.bank[1] = 'بِخَمْسِينَ جُنَيْهًا';
write.Q2.decode[1] = 'مَاذَا · مَتَى · بِكَمْ → PAST + date + price (bi- + number: بِخَمْسِينَ)';
write.Q3.phrases[1] = ['اشْتَرَيْتُ … بِعِشْرِينَ جُنَيْهًا', 'I bought … for £20'];

module.exports = { speak, write };
