'use strict';
/* Guided Practice Rooms · TB-L06 · Colours and Accurate Description. New tasks. Teacher-made. */
const XP = require('./xp-b-l06');

const base = { topic: 'B', n: 6, short: 'Colours and Accurate Description', arShort: 'الأَلْوَانُ وَالوَصْفُ', fileTitle: 'Colours_and_Accurate_Description', title: 'Colours and Accurate Description', icon: 'FaPalette', grammar: 'colour forms (aḥmar · ḥamrāʾ · ḥumr); regular colours in -iyy (bunniyy, ramādiyy); fātiḥ / ghāmiq; maṣnūʿ min; non-human plural agreement' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (reporting a lost bag at the airport, designing a school hoodie), a topic conversation with A-R-E-T, and a one-minute talk describing an object precisely.',
  words: XP.speak.words,
  words1: { title: 'Colours (m. · f. · pl.)', ar: 'الأَلْوَانُ' },
  words2: { title: 'Shades, patterns and materials', ar: 'الدَّرَجَاتُ وَالنُّقُوشُ وَالمَوَادُّ' },
  ladder: {
    q: 'مَا لَوْنُكَ المُفَضَّلُ؟', qEn: 'What is your favourite colour?',
    rungs: [
      { ar: 'لَوْنِي المُفَضَّلُ هُوَ الأَخْضَرُ.', en: 'My favourite colour is green.' },
      { ar: 'لَوْنِي المُفَضَّلُ هُوَ الأَخْضَرُ، لِأَنَّهُ يُذَكِّرُنِي بِالطَّبِيعَةِ.', en: '… because it reminds me of nature.' },
      { ar: '… مَثَلًا حَقِيبَتِي خَضْرَاءُ غَامِقَةٌ، وَجُدْرَانُ غُرْفَتِي خَضْرَاءُ فَاتِحَةٌ.', en: '… for example my bag is dark green, and my bedroom walls are light green.' },
      { ar: '… عِنْدَمَا كُنْتُ صَغِيرًا كُنْتُ أُحِبُّ الأَحْمَرَ، أَمَّا الآنَ فَأَرَى أَنَّ الأَخْضَرَ أَهْدَأُ.', en: '… when I was little I loved red, but now I think green is calmer.' },
    ],
  },
  ladderQs: [
    { q: 'مَا لَوْنُ عَيْنَيْكَ؟', l1: 'عَيْنَايَ …', l2: '… مِثْلُ …', l3: '… وَشَعْرِي …' },
    { q: 'صِفْ حَقِيبَتَكَ المَدْرَسِيَّةَ.', l1: 'حَقِيبَتِي …', l2: '… وَهِيَ مَصْنُوعَةٌ مِنْ …', l3: '… اشْتَرَيْتُهَا …' },
    { q: 'مَا الأَلْوَانُ الَّتِي لَا تُحِبُّهَا؟', l1: 'لَا أُحِبُّ …', l2: '… لِأَنَّهُ …', l3: '… لٰكِنْ أُخْتِي …' },
    { q: 'مَا لَوْنُ عَلَمِ بَلَدِكَ؟', l1: 'عَلَمُ … لَوْنُهُ …', l2: '… وَفِيهِ …', l3: '… وَيَعْنِي … فِي رَأْيِي' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'the lost-luggage desk at an airport', title: 'Role play 1 — My suitcase is lost!', ar: 'حَقِيبَتِي ضَاعَتْ!', you: 'a traveller', them: 'the airport employee',
      tasks: [
        { ex: 'مَا المُشْكِلَةُ؟', task: 'Say your suitcase is lost.', plan: 'مَا ← حَقِيبَتِي …', model: 'حَقِيبَتِي لَمْ تَصِلْ.', modelEn: 'My suitcase did not arrive.' },
        { ex: 'مَا لَوْنُهَا؟', task: 'Give the colour.', plan: 'مَا لَوْنُهَا ← هِيَ …', model: 'هِيَ زَرْقَاءُ غَامِقَةٌ.', modelEn: 'It is dark blue.' },
        { ex: 'هَلْ هِيَ كَبِيرَةٌ أَمْ صَغِيرَةٌ؟', task: 'Say the size.', plan: 'أَمْ ← هِيَ …', model: 'هِيَ كَبِيرَةٌ.', modelEn: 'It is big.' },
        { ex: 'مِمَّ هِيَ مَصْنُوعَةٌ؟', task: 'Say what it is made of.', plan: 'مِمَّ ← هِيَ مَصْنُوعَةٌ مِنْ …', model: 'هِيَ مَصْنُوعَةٌ مِنَ البْلَاسْتِيكِ القَوِيِّ.', modelEn: 'It is made of strong plastic.' },
        { unexpected: true, ex: 'هَلْ فِيهَا شَيْءٌ يُمَيِّزُهَا؟', task: 'Answer the unexpected question.', plan: 'هَلْ ← نَعَمْ، عَلَيْهَا …', model: 'نَعَمْ، عَلَيْهَا شَرِيطٌ أَصْفَرُ وَاسْمِي.', modelEn: 'Yes, it has a yellow ribbon and my name on it.' },
      ],
      girl: 'the examiner’s questions do not change (they are about the suitcase)',
      notes: 'Language: feminine colours for ḥaqība (zarqāʾu ghāmiqa) · maṣnūʿatun min · ʿalayhā sharīṭun aṣfaru (masculine colour for a masculine noun).',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a school-council design meeting', title: 'Role play 2 — Designing the Year 11 hoodie', ar: 'نُصَمِّمُ قَمِيصَ الصَّفِّ', you: 'a designer on the school council', them: 'the head of year',
      tasks: [
        { ex: 'أَيَّ لَوْنٍ تَقْتَرِحُ لِلْقَمِيصِ؟', task: 'Suggest a colour, with a reason.', model: 'أَقْتَرِحُ اللَّوْنَ الرَّمَادِيَّ الغَامِقَ، لِأَنَّهُ يُنَاسِبُ الجَمِيعَ وَلَا تَظْهَرُ عَلَيْهِ البُقَعُ.', modelEn: 'I suggest dark grey, because it suits everyone and stains don’t show.' },
        { ex: 'وَمَاذَا نَكْتُبُ عَلَيْهِ؟', task: 'Describe the writing and its colour.', model: 'نَكْتُبُ أَسْمَاءَ الطُّلَّابِ بِالحُرُوفِ البَيْضَاءِ عَلَى الظَّهْرِ، وَشِعَارَ المَدْرَسَةِ بِالذَّهَبِيِّ.', modelEn: 'We write students’ names in white letters on the back, and the school logo in gold.' },
        { ex: 'هَلْ كَانَ قَمِيصُ السَّنَةِ المَاضِيَةِ جَمِيلًا؟', task: 'Give an opinion of last year’s (past + comparison).', model: 'كَانَ أَحْمَرَ وَمُخَطَّطًا، لٰكِنَّهُ كَانَ رَقِيقًا جِدًّا؛ قَمِيصُنَا سَيَكُونُ أَدْفَأَ.', modelEn: 'It was red and striped, but very thin — ours will be warmer.' },
        { ex: 'القُطْنُ أَغْلَى مِنَ البُولِيسْتِر.', task: 'ASK about prices or materials.', model: 'كَمْ سَيَكُونُ ثَمَنُ القَمِيصِ القُطْنِيِّ؟ وَهَلْ يُوجَدُ خَصْمٌ لِلطُّلَّابِ؟', modelEn: 'How much will the cotton hoodie cost? And is there a student discount?' },
        { unexpected: true, ex: 'لَوْ رَفَضَ الطُّلَّابُ لَوْنَكَ، مَاذَا تَفْعَلُ؟', task: 'Answer the unexpected question (law … la-).', model: 'لَوْ رَفَضُوهُ، لَنَظَّمْتُ تَصْوِيتًا عَلَى الإِنْتَرْنِتْ، وَلَاخْتَرْنَا اللَّوْنَ الَّذِي يُحِبُّهُ أَكْثَرُ الطُّلَّابِ.', modelEn: 'If they rejected it, I would organise an online vote, and we would choose the colour most students like.' },
      ],
      girl: 'تَقْتَرِحِينَ · لَوْنَكِ · تَفْعَلِينَ',
      notes: 'Language: colour adjectives agreeing with nouns (al-ḥurūf al-bayḍāʾ — non-human plural → feminine singular) · patterns (mukhaṭṭaṭ) · materials · comparatives (adfaʾu, aghlā) · law … la-.',
    },
  ],
  convAr: 'الأَلْوَانُ وَالوَصْفُ',
  conv: [
    { route: 'Core', q: 'مَا لَوْنُ بَابِ بَيْتِكُمْ؟', en: 'What colour is your front door?', push: 'وَالنَّوَافِذُ؟' },
    { route: 'Core', q: 'مَا لَوْنُ زِيِّ مَدْرَسَتِكَ؟', en: 'What colour is your school uniform?', push: 'هَلْ تُحِبُّهُ؟' },
    { route: 'Develop', q: 'صِفْ شَيْئًا تُحِبُّهُ بِدِقَّةٍ.', en: 'Describe something you like precisely.', push: 'مِمَّ هُوَ مَصْنُوعٌ؟' },
    { route: 'Develop', q: 'هَلْ تُفَضِّلُ الأَلْوَانَ الفَاتِحَةَ أَمِ الغَامِقَةَ؟', en: 'Do you prefer light or dark colours?', push: 'وَفِي الشِّتَاءِ؟' },
    { route: 'Stretch', q: 'هَلْ تُؤَثِّرُ الأَلْوَانُ فِي مَشَاعِرِنَا؟', en: 'Do colours affect our feelings?', push: 'مَثَلًا؟' },
    { route: 'Stretch', q: 'لَوْ صَمَّمْتَ زِيًّا مَدْرَسِيًّا جَدِيدًا، كَيْفَ يَكُونُ؟', en: 'If you designed a new uniform, what would it be like?', push: 'وَلِمَاذَا؟' },
  ],
  convModels: [
    { q: 'مَا لَوْنُ زِيِّ مَدْرَسَتِكَ؟', model: 'زِيُّ مَدْرَسَتِي سُتْرَةٌ زَرْقَاءُ غَامِقَةٌ وَقَمِيصٌ أَبْيَضُ، وَلَا أُحِبُّهُ كَثِيرًا، لِأَنَّهُ يَتَّسِخُ بِسُرْعَةٍ؛ فِي السَّنَةِ القَادِمَةِ سَيَكُونُ القَمِيصُ رَمَادِيًّا.', modelEn: 'A: a dark blue blazer and a white shirt · R: I don’t love it — it gets dirty quickly · T: next year the shirt will be grey.' },
    { q: 'صِفْ شَيْئًا تُحِبُّهُ بِدِقَّةٍ.', model: 'أُحِبُّ سَاعَةَ يَدِي الَّتِي أَعْطَانِي إِيَّاهَا خَالِي؛ هِيَ دَائِرِيَّةٌ وَفِضِّيَّةٌ، وَحِزَامُهَا مِنَ الجِلْدِ البُنِّيِّ، وَأَلْبَسُهَا كُلَّ يَوْمٍ مُنْذُ سَنَتَيْنِ.', modelEn: 'A: the watch my uncle gave me · E: round and silver with a brown leather strap · T: I have worn it every day for two years.' },
    { q: 'هَلْ تُؤَثِّرُ الأَلْوَانُ فِي مَشَاعِرِنَا؟', model: 'فِي رَأْيِي نَعَمْ، لِأَنَّ الأَزْرَقَ يُهَدِّئُنِي بَيْنَمَا يُعْطِينِي الأَصْفَرُ طَاقَةً؛ مَثَلًا دَهَنَّا المَطْبَخَ بِالأَصْفَرِ فِي الصَّيْفِ المَاضِي، فَأَصْبَحَ أَكْثَرَ مَكَانٍ مُبْهِجٍ فِي البَيْتِ.', modelEn: 'Opinion: yes · R: blue calms me whereas yellow gives me energy · E: we painted the kitchen yellow last summer and it became the brightest place in the house.' },
  ],
  talk: {
    title: 'One minute: describe it exactly', ar: 'صِفْهُ بِدِقَّةٍ',
    text: 'Talk for one minute describing one object so precisely that your partner could draw it: colours (light or dark), size, shape, pattern, material — and its story.',
    routes: {
      core: '30 seconds: colour, size and material (مَصْنُوعٌ مِنْ …), with agreement.',
      develop: '60 seconds: add shades (فَاتِحٌ · غَامِقٌ), a pattern and where you got it (past).',
      stretch: '90 seconds: add a comparison with something similar, and why it matters to you.',
    },
    phrases: [['هُوَ / هِيَ … فَاتِحٌ · غَامِقٌ', 'it is light … · dark …'], ['مَصْنُوعٌ مِنَ الخَشَبِ', 'made of wood'], ['مُخَطَّطٌ · مُنَقَّطٌ', 'striped · spotted'], ['اشْتَرَيْتُهُ مِنْ …', 'I bought it from …']],
  },
  checkCore: 'made colours agree (أَحْمَرُ · حَمْرَاءُ) and gave a material',
  checkDevelop: 'used shades and patterns (فَاتِحٌ · غَامِقٌ · مُخَطَّطٌ)',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (describing a lost item in an email), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Lost property: report form', ar: 'المَفْقُودَاتُ: اسْتِمَارَةُ بَلَاغٍ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'الشَّيْءُ المَفْقُودُ', en: 'Lost item', tip: 'مِعْطَفٌ · حَقِيبَةٌ' },
      { core: true, ar: 'اللَّوْنُ', en: 'Colour', tip: 'Agree: مِعْطَفٌ أَسْوَدُ · حَقِيبَةٌ سَوْدَاءُ' },
      { core: true, ar: 'مَصْنُوعٌ مِنْ', en: 'Made of', tip: 'الجِلْدِ · القُطْنِ' },
      { core: true, ar: 'المَكَانُ', en: 'Where you lost it', tip: 'فِي الحَافِلَةِ رَقْمَ ١٢' },
      { ar: 'جُمْلَةٌ: صِفْهُ بِدِقَّةٍ', en: 'ONE sentence: describe it precisely', tip: 'هُوَ … فَاتِحٌ، وَعَلَيْهِ …' },
    ],
  },
  Q2: {
    title: 'Question 2: I left my jacket at your house', ar: 'نَسِيتُ سُتْرَتِي عِنْدَكَ',
    task: 'You stayed at a friend’s house and left some things there. Write an email in Arabic of about 80–90 words. You must include: • what you forgot and where you think it is • a precise description (colours, material, pattern) • why the item is important to you • how and when you will get it back.',
    phrases: [['نَسِيتُ … فِي …', 'I forgot … in …'], ['هِيَ … غَامِقَةٌ، مَصْنُوعَةٌ مِنْ …', 'it is dark …, made of …'], ['هِيَ مُهِمَّةٌ لِي لِأَنَّ …', 'it is important to me because …'], ['سَآتِي يَوْمَ … لِآخُذَهَا', 'I will come on … to take it']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ شَيْءٍ نَسِيتَهُ عِنْدَهُ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about something you left at their house (80–90 words).'],
      ['1', 'مَاذَا نَسِيتَ؟ وَأَيْنَ تَظُنُّ أَنَّهُ؟', 'What you forgot; where you think it is'],
      ['2', 'صِفْهُ بِدِقَّةٍ.', 'A precise description'],
      ['3', 'لِمَاذَا هُوَ مُهِمٌّ لَكَ؟', 'Why it is important to you'],
      ['4', 'كَيْفَ وَمَتَى سَتَأْخُذُهُ؟', 'How and when you will get it back'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'مَاذَا نَسِيتَ → PAST; أَيْنَ تَظُنُّ → PRESENT', 'صِفْهُ → colours + shades + material + pattern (agreement!)', 'لِمَاذَا → a reason (لِأَنَّ) — maybe its story (PAST)', 'كَيْفَ · مَتَى سَتَأْخُذُهُ → FUTURE'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، شُكْرًا عَلَى ______ !', en: 'Hello …, thanks for …!' },
      { ar: 'نَسِيتُ ______ فِي ______ .', en: '1 · I forgot … in …' },
      { ar: 'هِيَ ______ ، وَمَصْنُوعَةٌ مِنْ ______ .', en: '2 · It is …, and made of …' },
      { ar: 'هِيَ مُهِمَّةٌ لِي لِأَنَّ ______ .', en: '3 · It is important to me because …' },
      { ar: 'سَآتِي يَوْمَ ______ لِآخُذَهَا.', en: '4 · I will come on … to collect it.' },
    ],
    developFrames: [
      { ar: 'أَظُنُّ أَنِّي تَرَكْتُ ______ تَحْتَ ______ .', en: '1 · I think I left … under …' },
      { ar: 'لَوْنُهَا ______ غَامِقٌ، وَعَلَيْهَا ______ .', en: '2 · Its colour is dark …, and it has … on it.' },
      { ar: 'أَعْطَتْنِي ______ إِيَّاهَا فِي ______ .', en: '3 · … gave it to me in …' },
      { ar: 'هَلْ يُمْكِنُ أَنْ تُعْطِيَهَا لِـ ______ فِي المَدْرَسَةِ؟', en: '4 · Could you give it to … at school?' },
    ],
    bank: ['أَزْرَقُ · زَرْقَاءُ', 'غَامِقٌ · فَاتِحٌ', 'رَمَادِيٌّ · بُنِّيٌّ', 'مُخَطَّطٌ · مُنَقَّطٌ', 'مَصْنُوعٌ مِنْ', 'الصُّوفُ · الجِلْدُ', 'نَسِيتُ', 'هَدِيَّةٌ'],
    model: {
      text: `مَرْحَبًا يَا عُمَرُ،
شُكْرًا عَلَى نِهَايَةِ الأُسْبُوعِ الرَّائِعَةِ! لٰكِنْ عِنْدِي مُشْكِلَةٌ صَغِيرَةٌ: نَسِيتُ سُتْرَتِي عِنْدَكَ، وَأَظُنُّ أَنِّي تَرَكْتُهَا تَحْتَ السَّرِيرِ فِي غُرْفَةِ الضُّيُوفِ. السُّتْرَةُ زَرْقَاءُ غَامِقَةٌ وَمُخَطَّطَةٌ بِالأَبْيَضِ، وَهِيَ مَصْنُوعَةٌ مِنَ الصُّوفِ، وَعَلَى ظَهْرِهَا اسْمُ فَرِيقِي بِحُرُوفٍ صَفْرَاءَ. هِيَ مُهِمَّةٌ لِي جِدًّا، لِأَنَّ جَدَّتِي أَعْطَتْنِي إِيَّاهَا فِي عِيدِ مِيلَادِي، وَلِأَنِّي أَحْتَاجُهَا فِي المُبَارَاةِ يَوْمَ الأَحَدِ. سَآتِي إِلَى بَيْتِكُمْ مَعَ أَبِي يَوْمَ السَّبْتِ بَعْدَ الظُّهْرِ لِآخُذَهَا، وَإِذَا لَمْ تَكُنْ فِي البَيْتِ، فَأَعْطِهَا لِأَخِيكَ مِنْ فَضْلِكَ.
مَعَ الشُّكْرِ،
سَلِيمٌ`,
      en: '“Hi Omar, thanks for a wonderful weekend! But I have a small problem: I forgot my jacket at yours, and I think I left it under the bed in the guest room. It is dark blue with white stripes, made of wool, with my team’s name on the back in yellow letters. It is very important to me, because my grandmother gave it to me for my birthday, and because I need it for the match on Sunday. I will come to your house with my dad on Saturday afternoon to collect it, and if you are not at home, please give it to your brother. Thanks, Salim.”',
      find: ['نَسِيتُ سُتْرَتِي', 'زَرْقَاءُ غَامِقَةٌ وَمُخَطَّطَةٌ', 'مَصْنُوعَةٌ مِنَ الصُّوفِ', 'لِأَنَّ جَدَّتِي أَعْطَتْنِي'],
    },
  },
  upgrade: [
    { ar: 'عِنْدِي حِذَاءٌ.', en: 'I have shoes.' },
    { ar: 'عِنْدِي حِذَاءٌ رِيَاضِيٌّ أَبْيَضُ، عَلَيْهِ خُطُوطٌ حَمْرَاءُ.', en: '… white trainers with red stripes.' },
    { ar: 'عِنْدِي حِذَاءٌ رِيَاضِيٌّ أَبْيَضُ عَلَيْهِ خُطُوطٌ حَمْرَاءُ، أَلْبَسُهُ لِأَنَّهُ خَفِيفٌ وَمُرِيحٌ.', en: '… I wear them because they are light and comfortable.' },
    { ar: '… لٰكِنَّهُ لَمْ يَعُدْ أَبْيَضَ تَمَامًا، فَهُوَ الآنَ رَمَادِيٌّ فَاتِحٌ بَعْدَ المَطَرِ!', en: '… but they are no longer quite white — now they are light grey after the rain!' },
  ],
  builder: [
    { en: 'My bag is black and made of leather.', cols: [['حَقِيبَتِي', 'حَقِيبَتُهُ'], ['سَوْدَاءُ', 'أَسْوَدُ'], ['مَصْنُوعَةٌ مِنَ الجِلْدِ', 'مَصْنُوعٌ مِنَ الجِلْدِ']], key: [0, 0, 0], why: 'حَقِيبَة is feminine → سَوْدَاءُ · مَصْنُوعَةٌ.' },
    { en: 'The cars in our street are red.', cols: [['السَّيَّارَاتُ', 'السَّيَّارَةُ'], ['فِي شَارِعِنَا', 'مِنْ شَارِعِنَا'], ['حَمْرَاءُ', 'حُمْرٌ']], key: [0, 0, 0], why: 'Non-human plural → feminine singular colour: حَمْرَاءُ.' },
    { en: 'I prefer the light green shirt.', cols: [['أُفَضِّلُ', 'تُفَضِّلُ'], ['القَمِيصَ', 'القَمِيصُ'], ['الأَخْضَرَ الفَاتِحَ', 'الخَضْرَاءَ الفَاتِحَةَ']], key: [0, 0, 0], why: 'قَمِيص is masculine → الأَخْضَرَ الفَاتِحَ (object → -a).' },
  ],
  errors: [
    { wrong: 'السَّيَّارَةُ أَبْيَضُ.', hint: 'Colour agreement.', right: 'السَّيَّارَةُ بَيْضَاءُ.', why: 'Feminine noun → بَيْضَاءُ.' },
    { wrong: 'الكُتُبُ زُرْقٌ.', hint: 'Non-human plural.', right: 'الكُتُبُ زَرْقَاءُ.', why: 'Non-human plural → feminine singular: زَرْقَاءُ.' },
    { wrong: 'الطَّاوِلَةُ مَصْنُوعٌ الخَشَبُ.', hint: 'Two problems: agreement and a missing word.', right: 'الطَّاوِلَةُ مَصْنُوعَةٌ مِنَ الخَشَبِ.', why: 'Feminine → مَصْنُوعَةٌ; made OF = مِنْ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a place full of colour', ar: 'مَكَانٌ مَلِيءٌ بِالأَلْوَانِ',
    task: 'Full Q3 title: “Colours in my life”. Today write ONLY the past paragraph: a colourful place or event you remember (a market, a festival, a garden, a wedding) — what you saw, the colours, what happened and how you felt.',
    formula: [
      { ar: 'لَنْ أَنْسَى سُوقَ التَّوَابِلِ فِي مَرَّاكُشَ.', en: 'T · I will never forget the spice market in Marrakech.' },
      { ar: 'رَأَيْتُ تَوَابِلَ حَمْرَاءَ وَصَفْرَاءَ وَبُرْتُقَالِيَّةً.', en: 'D · I saw red, yellow and orange spices.' },
      { ar: 'كَانَ مُمَيَّزًا لِأَنَّ الأَلْوَانَ وَالرَّوَائِحَ كَانَتْ فِي كُلِّ مَكَانٍ.', en: 'R · Special because colours and smells were everywhere.' },
      { ar: 'شَعَرْتُ بِالدَّهْشَةِ، وَسَأَرْجِعُ إِلَيْهِ.', en: 'F · I was amazed, and I will go back.' },
    ],
    phrases: [['لَنْ أَنْسَى …', 'I will never forget …'], ['رَأَيْتُ … حَمْرَاءَ وَ…', 'I saw red … and …'], ['كَانَتِ الجُدْرَانُ …', 'the walls were …'], ['كَانَ مُمَيَّزًا لِأَنَّ …', 'it was special because …'], ['شَعَرْتُ بِالدَّهْشَةِ', 'I was amazed']],
    model: {
      text: 'لَنْ أَنْسَى سُوقَ التَّوَابِلِ فِي مَرَّاكُشَ الَّذِي زُرْتُهُ مَعَ عَائِلَتِي فِي الصَّيْفِ المَاضِي. دَخَلْنَا مِنْ بَابٍ أَخْضَرَ قَدِيمٍ، فَرَأَيْتُ أَكْيَاسًا كَبِيرَةً مِنَ التَّوَابِلِ الحَمْرَاءِ وَالصَّفْرَاءِ وَالبُرْتُقَالِيَّةِ، وَسَجَّادًا أَزْرَقَ مُعَلَّقًا عَلَى الجُدْرَانِ البُنِّيَّةِ. اشْتَرَتْ أُمِّي زَعْفَرَانًا، وَأَعْطَانِي البَائِعُ شَايًا بِالنَّعْنَاعِ مَجَّانًا. كَانَ ذٰلِكَ المَكَانُ مُمَيَّزًا لِأَنَّ الأَلْوَانَ وَالرَّوَائِحَ كَانَتْ فِي كُلِّ زَاوِيَةٍ. شَعَرْتُ بِالدَّهْشَةِ، وَلَوْ رَجَعْتُ إِلَى هُنَاكَ، لَاشْتَرَيْتُ مِصْبَاحًا مُلَوَّنًا لِغُرْفَتِي.',
      en: 'T: I will never forget the spice market in Marrakech that I visited with my family last summer · D: we entered through an old green door and I saw big sacks of red, yellow and orange spices and blue carpets hanging on the brown walls; my mum bought saffron and the seller gave me free mint tea · R: special because colours and smells were in every corner · F: I was amazed, and if I went back I would buy a colourful lamp for my room.',
      find: ['لَنْ أَنْسَى سُوقَ', 'التَّوَابِلِ الحَمْرَاءِ وَالصَّفْرَاءِ', 'كَانَ … مُمَيَّزًا لِأَنَّ', 'لَوْ رَجَعْتُ … لَاشْتَرَيْتُ'],
    },
  },
};
write.Q2.developFrames[3] = { ar: 'هَلْ يُمْكِنُ أَنْ تُعْطِيَهَا لِأَخِي فِي المَدْرَسَةِ؟', en: '4 · Could you give it to my brother at school?' };

module.exports = { speak, write };
