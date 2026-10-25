'use strict';
/* Guided Practice Rooms · TB-L07 · Clothes, Accessories and Shopping. New tasks. Teacher-made. */
const XP = require('./xp-b-l07');

const base = { topic: 'B', n: 7, short: 'Clothes and Shopping', arShort: 'المَلَابِسُ وَالتَّسَوُّقُ', fileTitle: 'Clothes_Accessories_and_Shopping', title: 'Clothes, Accessories and Shopping', icon: 'FaShirt', grammar: 'comparatives (arkhaṣu min, aghlā min); prices and numbers (bi-kam …?); hādhā / hādhihi; object pronouns (ujarribuhu, ujarribuhā); sizes (maqās)' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (buying clothes for a wedding, returning trainers that are too small), a topic conversation with A-R-E-T, and a one-minute talk about what they wear.',
  words: XP.speak.words,
  words1: { title: 'Clothes and accessories', ar: 'المَلَابِسُ وَالإِكْسِسْوَارَاتُ' },
  words2: { title: 'In the shop — sizes, prices and returns', ar: 'فِي المَحَلِّ' },
  ladder: {
    q: 'مَاذَا تَلْبَسُ فِي نِهَايَةِ الأُسْبُوعِ؟', qEn: 'What do you wear at the weekend?',
    rungs: [
      { ar: 'أَلْبَسُ بِنْطَالَ جِينْزٍ وَقَمِيصًا رِيَاضِيًّا.', en: 'I wear jeans and a sports top.' },
      { ar: 'أَلْبَسُ بِنْطَالَ جِينْزٍ وَقَمِيصًا رِيَاضِيًّا، لِأَنَّهُمَا مُرِيحَانِ.', en: '… because they are comfortable.' },
      { ar: '… وَعِنْدَمَا يَكُونُ الجَوُّ بَارِدًا أَلْبَسُ مِعْطَفًا أَسْوَدَ وَقُبَّعَةً صُوفِيَّةً.', en: '… when it’s cold I wear a black coat and a woolly hat.' },
      { ar: '… لٰكِنْ فِي حَفْلَةِ أُخْتِي الأُسْبُوعَ القَادِمَ سَأَلْبَسُ بَدْلَةً، فَالمُنَاسَبَاتُ فِي رَأْيِي تَحْتَاجُ إِلَى مَلَابِسَ أَنِيقَةٍ.', en: '… but at my sister’s party next week I’ll wear a suit — in my opinion occasions need smart clothes.' },
    ],
  },
  ladderQs: [
    { q: 'أَيْنَ تَشْتَرِي مَلَابِسَكَ؟', l1: 'أَشْتَرِي مَلَابِسِي مِنْ …', l2: '… لِأَنَّهُ أَرْخَصُ مِنْ …', l3: '… آخِرَ مَرَّةٍ اشْتَرَيْتُ …' },
    { q: 'مَا لَوْنُ مَلَابِسِكَ المُفَضَّلُ؟', l1: 'أُفَضِّلُ …', l2: '… لِأَنَّهُ …', l3: '… مَثَلًا …' },
    { q: 'هَلْ تُحِبُّ التَّسَوُّقَ؟', l1: 'نَعَمْ / لَا، …', l2: '… لِأَنَّ …', l3: '… وَفِي العُطْلَةِ سَوْفَ …' },
    { q: 'مَاذَا تَلْبَسُ فِي العِيدِ؟', l1: 'فِي العِيدِ أَلْبَسُ …', l2: '… لِأَنَّ …', l3: '… وَفِي العِيدِ المَاضِي …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a clothes shop before a family wedding', title: 'Role play 1 — Clothes for a wedding', ar: 'مَلَابِسُ لِلزِّفَافِ', you: 'a customer', them: 'the shop assistant',
      tasks: [
        { ex: 'أَهْلًا! كَيْفَ أُسَاعِدُكَ؟', task: 'Say what you are looking for.', plan: 'كَيْفَ ← أَبْحَثُ عَنْ …', model: 'أَبْحَثُ عَنْ قَمِيصٍ أَبْيَضَ لِحَفْلَةِ زِفَافٍ.', modelEn: 'I am looking for a white shirt for a wedding.' },
        { ex: 'مَا مَقَاسُكَ؟', task: 'Give your size.', plan: 'مَا ← مَقَاسِي …', model: 'مَقَاسِي مُتَوَسِّطٌ.', modelEn: 'My size is medium.' },
        { ex: 'تَفَضَّلْ، هٰذَا القَمِيصُ.', task: 'Ask to try it on.', plan: 'هَلْ ← هَلْ يُمْكِنُ أَنْ أُجَرِّبَهُ؟', model: 'هَلْ يُمْكِنُ أَنْ أُجَرِّبَهُ، مِنْ فَضْلِكَ؟', modelEn: 'Can I try it on, please?' },
        { ex: 'طَبْعًا. هَلْ هُوَ مُنَاسِبٌ؟', task: 'Say it is too tight.', plan: 'هَلْ ← لَا، هُوَ ضَيِّقٌ …', model: 'لَا، هُوَ ضَيِّقٌ قَلِيلًا. هَلْ عِنْدَكُمْ مَقَاسٌ أَكْبَرُ؟', modelEn: 'No, it is a bit tight. Do you have a bigger size?' },
        { unexpected: true, ex: 'نَعَمْ. وَهَلْ تُرِيدُ رَبْطَةَ عُنُقٍ أَيْضًا؟', task: 'Answer the unexpected question.', plan: 'هَلْ ← نَعَمْ / لَا، شُكْرًا …', model: 'نَعَمْ، أُرِيدُ رَبْطَةً زَرْقَاءَ. بِكَمْ هِيَ؟', modelEn: 'Yes, I’d like a blue tie. How much is it?' },
      ],
      girl: 'أُسَاعِدُكِ · مَقَاسُكِ · تَفَضَّلِي · تُرِيدِينَ — a girl might ask for فُسْتَانٍ instead of قَمِيصٍ',
      notes: 'Language: abḥathu ʿan · maqāsī · hal yumkinu an ujarribahu (object pronoun) · ḍayyiq · akbaru · bi-kam hiya?',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a sports shop customer-service desk', title: 'Role play 2 — Returning trainers', ar: 'إِرْجَاعُ حِذَاءٍ رِيَاضِيٍّ', you: 'a customer with a receipt', them: 'the customer-service manager',
      tasks: [
        { ex: 'مَا المُشْكِلَةُ؟', task: 'Explain what you bought and when (past).', model: 'اشْتَرَيْتُ هٰذَا الحِذَاءَ الرِّيَاضِيَّ يَوْمَ السَّبْتِ المَاضِي، لٰكِنَّهُ صَغِيرٌ جِدًّا.', modelEn: 'I bought these trainers last Saturday, but they are too small.' },
        { ex: 'هَلْ لَبِسْتَهُ؟', task: 'Explain what happened.', model: 'لَبِسْتُهُ مَرَّةً وَاحِدَةً فِي البَيْتِ فَقَطْ، فَآلَمَتْنِي رِجْلِي بَعْدَ عَشْرِ دَقَائِقَ.', modelEn: 'I wore them once only at home, and my foot hurt after ten minutes.' },
        { ex: 'عِنْدَنَا الحِذَاءُ نَفْسُهُ بِمَقَاسٍ أَكْبَرَ، لٰكِنْ بِاللَّوْنِ الأَحْمَرِ فَقَطْ.', task: 'Compare and decide.', model: 'الأَحْمَرُ جَمِيلٌ، لٰكِنِّي أُفَضِّلُ الأَسْوَدَ، لِأَنَّهُ يُنَاسِبُ زِيَّ فَرِيقِي.', modelEn: 'Red is nice, but I prefer black, because it matches my team kit.' },
        { ex: 'يُمْكِنُ أَنْ نُرْجِعَ لَكَ المَالَ.', task: 'ASK about the refund.', model: 'شُكْرًا، وَهَلْ سَيَرْجِعُ المَالُ إِلَى بِطَاقَتِي؟ وَمَتَى؟', modelEn: 'Thank you — will the money go back to my card? And when?' },
        { unexpected: true, ex: 'هَلْ تَشْتَرِي المَلَابِسَ عَلَى الإِنْتَرْنِتْ؟', task: 'Answer the unexpected question (opinion + comparison).', model: 'أَحْيَانًا، لِأَنَّهَا أَرْخَصُ، لٰكِنِّي أُفَضِّلُ المَحَلَّاتِ، لِأَنِّي أَسْتَطِيعُ أَنْ أُجَرِّبَ المَقَاسَ.', modelEn: 'Sometimes, because it’s cheaper, but I prefer shops because I can try the size.' },
      ],
      girl: 'لَبِسْتِهِ · لَكِ · تَشْتَرِينَ',
      notes: 'Language: past narrative (ishtaraytu, labistuhu) · comparison and preference (ufaḍḍilu … li-annahu) · object pronouns · arkhaṣu · hal sa-yarjiʿu …?',
    },
  ],
  convAr: 'المَلَابِسُ وَالتَّسَوُّقُ',
  conv: [
    { route: 'Core', q: 'مَاذَا تَلْبَسُ الآنَ؟', en: 'What are you wearing now?', push: 'مَا لَوْنُهُ؟' },
    { route: 'Core', q: 'مَا مَحَلُّكَ المُفَضَّلُ؟', en: 'What is your favourite shop?', push: 'لِمَاذَا؟' },
    { route: 'Develop', q: 'صِفْ آخِرَ شَيْءٍ اشْتَرَيْتَهُ.', en: 'Describe the last thing you bought.', push: 'بِكَمْ؟' },
    { route: 'Develop', q: 'هَلْ تُحِبُّ الزِّيَّ المَدْرَسِيَّ؟', en: 'Do you like school uniform?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'هَلْ تُهِمُّ المَارْكَاتُ الشَّبَابَ أَكْثَرَ مِنَ اللَّازِمِ؟', en: 'Do brands matter too much to young people?', push: 'وَمَا رَأْيُكَ؟' },
    { route: 'Stretch', q: 'هَلْ يَجِبُ أَنْ نَشْتَرِيَ مَلَابِسَ أَقَلَّ لِحِمَايَةِ البِيئَةِ؟', en: 'Should we buy fewer clothes to protect the environment?', push: 'كَيْفَ؟' },
  ],
  convModels: [
    { q: 'صِفْ آخِرَ شَيْءٍ اشْتَرَيْتَهُ.', model: 'اشْتَرَيْتُ مِعْطَفًا رَمَادِيًّا لِلشِّتَاءِ بِأَرْبَعِينَ جُنَيْهًا، لِأَنَّ مِعْطَفِي القَدِيمَ أَصْبَحَ صَغِيرًا؛ جَرَّبْتُ ثَلَاثَةَ مَعَاطِفَ، وَهٰذَا كَانَ أَدْفَأَهَا.', modelEn: 'A: a grey winter coat for £40 · R: my old one got too small · E: I tried three — this was the warmest.' },
    { q: 'هَلْ تُحِبُّ الزِّيَّ المَدْرَسِيَّ؟', model: 'لَا أُحِبُّهُ كَثِيرًا، لِأَنَّ السُّتْرَةَ ضَيِّقَةٌ، لٰكِنَّهُ مُفِيدٌ، لِأَنَّنَا لَا نُفَكِّرُ فِي المَلَابِسِ كُلَّ صَبَاحٍ؛ وَفِي الصَّفِّ الثَّانِيَ عَشَرَ سَنَلْبَسُ مَلَابِسَنَا العَادِيَّةَ.', modelEn: 'A: not much — the blazer is tight · contrast: but useful — no thinking about clothes every morning · T: in Year 12 we’ll wear our own clothes.' },
    { q: 'هَلْ يَجِبُ أَنْ نَشْتَرِيَ مَلَابِسَ أَقَلَّ لِحِمَايَةِ البِيئَةِ؟', model: 'فِي رَأْيِي نَعَمْ، لِأَنَّ صُنْعَ المَلَابِسِ يَسْتَهْلِكُ مَاءً كَثِيرًا؛ صَحِيحٌ أَنَّ المَلَابِسَ الجَدِيدَةَ جَمِيلَةٌ، غَيْرَ أَنَّنَا نَسْتَطِيعُ أَنْ نَشْتَرِيَ المُسْتَعْمَلَةَ، كَمَا فَعَلْتُ الشَّهْرَ المَاضِي.', modelEn: 'Opinion: yes · R: making clothes uses lots of water · concession: new clothes are nice, but we can buy second-hand — as I did last month.' },
  ],
  talk: {
    title: 'One minute: what I wear', ar: 'مَا أَلْبَسُهُ',
    text: 'Talk for one minute about clothes: what you wear to school, at the weekend and on special days, where you shop and how much things cost — and your best buy ever.',
    routes: {
      core: '30 seconds: three outfits with colours (agreement!).',
      develop: '60 seconds: add where you shop, a price, and a comparison (أَرْخَصُ مِنْ).',
      stretch: '90 seconds: add an opinion on brands or the environment, and a past shopping story.',
    },
    phrases: [['فِي المَدْرَسَةِ أَلْبَسُ …', 'at school I wear …'], ['أَشْتَرِي مَلَابِسِي مِنْ …', 'I buy my clothes from …'], ['اشْتَرَيْتُ … بِـخَمْسِينَ جُنَيْهًا', 'I bought … for fifty pounds'], ['… أَرْخَصُ مِنْ …', '… is cheaper than …']],
  },
  checkCore: 'named clothes with correct colour agreement',
  checkDevelop: 'used prices (بِكَمْ …؟) and a comparative (أَرْخَصُ مِنْ · أَغْلَى مِنْ)',
};
speak.talk.phrases[2] = ['اشْتَرَيْتُ … بِخَمْسِينَ جُنَيْهًا', 'I bought … for fifty pounds'];

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (a complaint about an online order), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Online clothes order', ar: 'طَلَبُ مَلَابِسَ عَلَى الإِنْتَرْنِتْ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'القِطْعَةُ', en: 'Item', tip: 'سُتْرَةٌ · فُسْتَانٌ' },
      { core: true, ar: 'اللَّوْنُ', en: 'Colour', tip: 'Agree: سُتْرَةٌ زَرْقَاءُ' },
      { core: true, ar: 'المَقَاسُ', en: 'Size', tip: 'صَغِيرٌ · مُتَوَسِّطٌ · كَبِيرٌ' },
      { core: true, ar: 'الكَمِّيَّةُ', en: 'Quantity', tip: 'قِطْعَتَانِ' },
      { ar: 'جُمْلَةٌ: مُلَاحَظَةٌ لِلْمَحَلِّ', en: 'ONE sentence: a note for the shop', tip: 'أُرِيدُهُ قَبْلَ … لِأَنَّ …' },
    ],
  },
  Q2: {
    title: 'Question 2: my online order went wrong', ar: 'مُشْكِلَةٌ فِي طَلَبِي',
    task: 'You ordered clothes online and there was a problem. Write an email in Arabic to the shop of about 80–90 words. You must include: • what you ordered, when, and the price • what arrived and what is wrong (colour, size …) • why you need the item, and by when • what you would like the shop to do.',
    phrases: [['طَلَبْتُ … يَوْمَ … بِـ …', 'I ordered … on … for …'], ['لٰكِنْ وَصَلَ … بَدَلًا مِنْ …', 'but … arrived instead of …'], ['أَحْتَاجُهُ قَبْلَ … لِأَنَّ …', 'I need it before … because …'], ['أَرْجُو أَنْ …', 'I would ask you to …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى المَحَلِّ عَنْ مُشْكِلَةٍ فِي طَلَبِكَ (٨٠–٩٠ كَلِمَةً).', 'Write to the shop about a problem with your order (80–90 words).'],
      ['1', 'مَاذَا طَلَبْتَ؟ وَمَتَى؟ وَبِكَمْ؟', 'What, when, the price'],
      ['2', 'مَاذَا وَصَلَ؟ وَمَا المُشْكِلَةُ؟', 'What arrived and what is wrong'],
      ['3', 'لِمَاذَا تَحْتَاجُهُ؟ وَمَتَى؟', 'Why and by when you need it'],
      ['4', 'مَاذَا تُرِيدُ مِنَ المَحَلِّ أَنْ يَفْعَلَ؟', 'What you want the shop to do'],
    ],
    decode: ['an email to a SHOP → FORMAL: السَّادَةُ … المُحْتَرَمُونَ / مَعَ الشُّكْرِ', 'مَاذَا طَلَبْتَ · مَتَى · بِكَمْ → PAST + a date + a price', 'مَاذَا وَصَلَ → PAST + description (colour, size)', 'لِمَاذَا تَحْتَاجُهُ → PRESENT + a reason + a date', 'مَاذَا تُرِيدُ … أَنْ يَفْعَلَ → a polite request (أَرْجُو أَنْ …)'],
    coreFrames: [
      { ar: 'السَّادَةُ فِي مَحَلِّ ______ المُحْتَرَمُونَ،', en: 'Dear … shop,' },
      { ar: 'طَلَبْتُ ______ يَوْمَ ______ بِـ ______ جُنَيْهًا.', en: '1 · I ordered … on … for … pounds.' },
      { ar: 'لٰكِنْ وَصَلَ ______ ، وَهُوَ ______ .', en: '2 · But … arrived, and it is …' },
      { ar: 'أَحْتَاجُهُ قَبْلَ ______ ، لِأَنَّ ______ .', en: '3 · I need it before …, because …' },
      { ar: 'أَرْجُو أَنْ تُرْسِلُوا لِي ______ .', en: '4 · Please send me …' },
      { ar: 'مَعَ الشُّكْرِ،', en: 'With thanks,' },
    ],
    developFrames: [
      { ar: 'فِي ______ مِنْ ______ طَلَبْتُ مِنْ مَوْقِعِكُمْ ______ .', en: '1 · On … of … I ordered … from your website.' },
      { ar: 'طَلَبْتُ المَقَاسَ ______ ، لٰكِنَّ الَّذِي وَصَلَ ______ .', en: '2 · I ordered size …, but what arrived was …' },
      { ar: 'سَأَلْبَسُهُ فِي ______ ، لِذٰلِكَ ______ .', en: '3 · I will wear it at …, so …' },
      { ar: 'إِذَا لَمْ يَكُنْ عِنْدَكُمُ المَقَاسُ، فَـ ______ .', en: '4 · If you don’t have the size, then …' },
    ],
    bank: ['طَلَبْتُ', 'وَصَلَ · وَصَلَتْ', 'المَقَاسُ', 'ضَيِّقٌ · وَاسِعٌ', 'بَدَلًا مِنْ', 'أُرْجِعُ · أُبَدِّلُ', 'إِيصَالٌ', 'أَرْجُو أَنْ'],
    model: {
      text: `السَّادَةُ فِي مَحَلِّ "أَنَاقَةٍ" المُحْتَرَمُونَ،
فِي الثَّالِثِ مِنْ نُوفَمْبِرَ طَلَبْتُ مِنْ مَوْقِعِكُمْ سُتْرَةً سَوْدَاءَ بِالمَقَاسِ المُتَوَسِّطِ، وَدَفَعْتُ خَمْسَةً وَأَرْبَعِينَ جُنَيْهًا. لٰكِنْ أَمْسِ وَصَلَتْ سُتْرَةٌ بُنِّيَّةٌ، وَهِيَ بِالمَقَاسِ الصَّغِيرِ، فَهِيَ ضَيِّقَةٌ جِدًّا عَلَيَّ، وَالأَكْمَامُ قَصِيرَةٌ. أَحْتَاجُ السُّتْرَةَ قَبْلَ العِشْرِينَ مِنْ هٰذَا الشَّهْرِ، لِأَنِّي سَأَلْبَسُهَا فِي حَفْلَةِ تَخَرُّجِ أَخِي الكَبِيرِ. أَرْجُو أَنْ تُرْسِلُوا لِي السُّتْرَةَ السَّوْدَاءَ بِالمَقَاسِ الصَّحِيحِ بِسُرْعَةٍ، وَإِذَا لَمْ تَكُنْ عِنْدَكُمْ، فَأَرْجُو أَنْ تُرْجِعُوا لِي المَالَ كَامِلًا. سَأُرْسِلُ السُّتْرَةَ البُنِّيَّةَ بِالبَرِيدِ مَعَ الإِيصَالِ.
مَعَ الشُّكْرِ،
زَيْنَبُ أَحْمَدُ`,
      en: '“Dear Anaqa shop, on 3 November I ordered a black jacket in medium from your website and paid £45. But yesterday a brown jacket arrived in small; it is far too tight for me and the sleeves are short. I need the jacket before the 20th of this month, because I will wear it at my older brother’s graduation party. Please send me the black jacket in the right size quickly, and if you don’t have it, please refund the full amount. I will post the brown jacket back with the receipt. With thanks, Zainab Ahmad.”',
      find: ['طَلَبْتُ مِنْ مَوْقِعِكُمْ', 'لٰكِنْ أَمْسِ وَصَلَتْ', 'لِأَنِّي سَأَلْبَسُهَا', 'أَرْجُو أَنْ تُرْسِلُوا'],
    },
  },
  upgrade: [
    { ar: 'اشْتَرَيْتُ حِذَاءً.', en: 'I bought shoes.' },
    { ar: 'اشْتَرَيْتُ حِذَاءً رِيَاضِيًّا أَبْيَضَ بِسِتِّينَ جُنَيْهًا مِنَ السُّوقِ.', en: '… white trainers for £60 from the market.' },
    { ar: 'اشْتَرَيْتُ حِذَاءً رِيَاضِيًّا أَبْيَضَ، لِأَنَّ حِذَائِي القَدِيمَ كَانَ مَكْسُورًا.', en: '… because my old shoes were broken.' },
    { ar: '… وَهُوَ أَغْلَى مِنَ القَدِيمِ، لٰكِنَّهُ أَكْثَرُ رَاحَةً بِكَثِيرٍ!', en: '… they are more expensive than the old ones, but much more comfortable!' },
  ],
  builder: [
    { en: 'This dress is cheaper than that one.', cols: [['هٰذَا الفُسْتَانُ', 'هٰذِهِ الفُسْتَانُ'], ['أَرْخَصُ', 'رَخِيصٌ'], ['مِنْ ذٰلِكَ', 'لِذٰلِكَ']], key: [0, 0, 0], why: 'فُسْتَان is masculine → هٰذَا; comparison = أَرْخَصُ مِنْ.' },
    { en: 'How much is this skirt?', cols: [['بِكَمْ', 'كَمْ'], ['هٰذِهِ', 'هٰذَا'], ['التَّنُّورَةُ؟', 'التَّنُّورَةَ؟']], key: [0, 0, 0], why: 'Price question = بِكَمْ …؟; تَنُّورَة is feminine → هٰذِهِ.' },
    { en: 'I tried it on, but it was tight.', cols: [['جَرَّبْتُهُ', 'أُجَرِّبُهُ'], ['لٰكِنَّهُ كَانَ', 'لِأَنَّهُ كَانَ'], ['ضَيِّقًا', 'ضَيِّقٌ']], key: [0, 0, 0], why: 'Past → جَرَّبْتُهُ; after كَانَ → ضَيِّقًا.' },
  ],
  errors: [
    { wrong: 'هٰذَا السُّتْرَةُ جَمِيلَةٌ.', hint: 'Which “this”?', right: 'هٰذِهِ السُّتْرَةُ جَمِيلَةٌ.', why: 'سُتْرَة is feminine → هٰذِهِ.' },
    { wrong: 'القَمِيصُ أَرْخَصُ القَمِيصِ الآخَرِ.', hint: 'Comparison needs one more word.', right: 'القَمِيصُ أَرْخَصُ مِنَ القَمِيصِ الآخَرِ.', why: 'Comparative + مِنْ.' },
    { wrong: 'اشْتَرَيْتُ ثَلَاثَةَ قُبَّعَاتٍ.', hint: 'Is قُبَّعَة masculine or feminine?', right: 'اشْتَرَيْتُ ثَلَاثَ قُبَّعَاتٍ.', why: 'قُبَّعَة is feminine → ثَلَاثَ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a shopping trip I remember', ar: 'رِحْلَةُ تَسَوُّقٍ أَتَذَكَّرُهَا',
    task: 'Full Q3 title: “Fashion and shopping”. Today write ONLY the past paragraph: a shopping trip you remember (for Eid, a wedding, a new school year) — where, with whom, what you bought, one thing that happened and how you felt.',
    formula: [
      { ar: 'قَبْلَ العِيدِ المَاضِي ذَهَبْتُ مَعَ أُمِّي إِلَى السُّوقِ.', en: 'T · Before last Eid I went to the market with my mum.' },
      { ar: 'جَرَّبْتُ فَسَاتِينَ كَثِيرَةً، وَاخْتَرْتُ فُسْتَانًا أَخْضَرَ.', en: 'D · I tried many dresses and chose a green one.' },
      { ar: 'كَانَ مُمَيَّزًا لِأَنِّي دَفَعْتُ مِنْ مَالِي.', en: 'R · Special because I paid with my own money.' },
      { ar: 'شَعَرْتُ بِالفَخْرِ فِي العِيدِ.', en: 'F · I felt proud at Eid.' },
    ],
    phrases: [['قَبْلَ … ذَهَبْتُ إِلَى …', 'before … I went to …'], ['جَرَّبْتُ … وَاخْتَرْتُ …', 'I tried … and chose …'], ['كَانَ … أَغْلَى مِنْ …', '… was more expensive than …'], ['دَفَعْتُ … مِنْ مَالِي', 'I paid … with my own money'], ['شَعَرْتُ بِالفَخْرِ', 'I felt proud']],
    model: {
      text: 'قَبْلَ عِيدِ الفِطْرِ المَاضِي ذَهَبْتُ مَعَ أُمِّي وَأُخْتِي إِلَى سُوقٍ كَبِيرٍ فِي وَسَطِ المَدِينَةِ. كَانَ السُّوقُ مُزْدَحِمًا جِدًّا، لِأَنَّ الجَمِيعَ يَشْتَرُونَ مَلَابِسَ العِيدِ. جَرَّبْتُ أَكْثَرَ مِنْ عَشَرَةِ أَحْذِيَةٍ، وَفِي النِّهَايَةِ اخْتَرْتُ حِذَاءً بُنِّيًّا مِنَ الجِلْدِ، وَكَانَ أَغْلَى مِنْ كُلِّ أَحْذِيَتِي القَدِيمَةِ. كَانَ ذٰلِكَ اليَوْمُ مُمَيَّزًا لِأَنِّي دَفَعْتُ نِصْفَ الثَّمَنِ مِنَ المَالِ الَّذِي وَفَّرْتُهُ. شَعَرْتُ بِالفَخْرِ يَوْمَ العِيدِ عِنْدَمَا لَبِسْتُهُ، وَمُنْذُ ذٰلِكَ الوَقْتِ أُوَفِّرُ قَلِيلًا كُلَّ شَهْرٍ.',
      en: 'T: before last Eid al-Fitr I went with my mum and sister to a big market in the town centre · D: it was very crowded because everyone buys Eid clothes; I tried more than ten pairs of shoes and finally chose brown leather ones, more expensive than all my old shoes · R: special because I paid half the price with money I had saved · F: I felt proud on Eid when I wore them, and since then I save a little every month.',
      find: ['ذَهَبْتُ مَعَ أُمِّي', 'جَرَّبْتُ أَكْثَرَ مِنْ', 'أَغْلَى مِنْ', 'شَعَرْتُ بِالفَخْرِ'],
    },
  },
};
write.Q2.phrases[0] = ['طَلَبْتُ … يَوْمَ … بِعِشْرِينَ جُنَيْهًا', 'I ordered … on … for £20'];
write.Q2.coreFrames[1] = { ar: 'طَلَبْتُ ______ يَوْمَ ______ ، وَدَفَعْتُ ______ جُنَيْهًا.', en: '1 · I ordered … on …, and paid … pounds.' };
write.Q2.developFrames[3] = { ar: 'إِذَا لَمْ يَكُنْ عِنْدَكُمُ المَقَاسُ، فَأَرْجُو أَنْ ______ .', en: '4 · If you don’t have the size, please …' };

module.exports = { speak, write };
