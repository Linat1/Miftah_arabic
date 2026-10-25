'use strict';
/* Guided Practice Rooms · TC-L11 · Integrated communication workshop — the world around us. New tasks. Teacher-made. */
const XP = require('./xp-c-l11');

const base = { topic: 'C', n: 11, short: 'Integrated Communication Workshop', arShort: 'وَرْشَةُ التَّوَاصُلِ المُتَكَامِلِ', fileTitle: 'Integrated_Communication_Workshop', title: 'Integrated communication workshop — the world around us', icon: 'FaComments', grammar: 'cohesion for extended answers (awwalan · thāniyan · bi-l-iḍāfati ilā dhālika · maʿa dhālika · min nāḥiyatin … wa-min nāḥiyatin ukhrā); kuntu + present (used to); law kuntu … la-; ṣaḥīḥun anna … ghayra anna; mixing tenses' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms, linking all of Topic C in extended answers: a word warm-up on linking words, the answer ladder, two new role plays (a city-vs-countryside interview, a youth climate panel), a mixed-topic conversation with A-R-E-T, and a one-minute talk with balanced arguments.',
  words: XP.speak.words,
  words1: { title: 'Linking and balancing words', ar: 'كَلِمَاتُ الرَّبْطِ وَالمُوَازَنَةِ' },
  words2: { title: 'Topic C themes and top-band structures', ar: 'مَوَاضِيعُ المِحْوَرِ الثَّالِثِ' },
  ladder: {
    q: 'هَلْ تُفَضِّلُ الحَيَاةَ فِي المَدِينَةِ أَمْ فِي الرِّيفِ؟', qEn: 'Do you prefer life in the city or the countryside?',
    rungs: [
      { ar: 'أُفَضِّلُ الحَيَاةَ فِي المَدِينَةِ.', en: 'I prefer city life.' },
      { ar: 'أُفَضِّلُ الحَيَاةَ فِي المَدِينَةِ، لِأَنَّ فِيهَا خِدْمَاتٍ وَمُوَاصَلَاتٍ أَكْثَرَ.', en: '… because there are more services and transport.' },
      { ar: '… مِنْ نَاحِيَةٍ، المَدِينَةُ مُزْدَحِمَةٌ وَمُلَوَّثَةٌ، وَمِنْ نَاحِيَةٍ أُخْرَى، فِيهَا جَامِعَاتٌ وَمَتَاحِفُ وَمَلَاعِبُ.', en: '… on one hand it’s crowded and polluted, on the other it has universities, museums and pitches.' },
      { ar: '… كُنْتُ أَزُورُ قَرْيَةَ جَدِّي كُلَّ صَيْفٍ وَأُحِبُّ هُدُوءَهَا؛ وَمَعَ ذٰلِكَ، لَوْ كُنْتُ أَسْكُنُ هُنَاكَ، لَشَعَرْتُ بِالمَلَلِ بَعْدَ أُسْبُوعٍ!', en: '… I used to visit grandad’s village every summer and loved its calm; even so, if I lived there, I’d be bored after a week!' },
    ],
  },
  ladderQs: [
    { q: 'كَيْفَ يُؤَثِّرُ الطَّقْسُ فِي حَيَاتِكَ؟', l1: 'أَوَّلًا …', l2: '… بِالإِضَافَةِ إِلَى ذٰلِكَ …', l3: '… مَعَ ذٰلِكَ …' },
    { q: 'هَلِ التِّكْنُولُوجْيَا تُسَاعِدُ البِيئَةَ؟', l1: 'مِنْ نَاحِيَةٍ …', l2: '… وَمِنْ نَاحِيَةٍ أُخْرَى …', l3: '… فِي رَأْيِي …' },
    { q: 'كَيْفَ كَانَتْ مَدِينَتُكَ عِنْدَمَا كُنْتَ صَغِيرًا؟', l1: 'كَانَتْ …', l2: '… كُنْتُ أَذْهَبُ …', l3: '… أَمَّا الآنَ …' },
    { q: 'أَيْنَ تُرِيدُ أَنْ تَعِيشَ فِي المُسْتَقْبَلِ؟', l1: 'أُرِيدُ أَنْ أَعِيشَ فِي …', l2: '… لِأَنَّ … وَ…', l3: '… لَوْ كُنْتُ غَنِيًّا لَاخْتَرْتُ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a school podcast', title: 'Role play 1 — City or countryside? A podcast interview', ar: 'المَدِينَةُ أَمِ الرِّيفُ؟', you: 'a guest student', them: 'the podcast host',
      tasks: [
        { ex: 'أَيْنَ تَسْكُنُ؟', task: 'Say where you live and locate it.', plan: 'أَيْنَ ← أَسْكُنُ فِي … الَّتِي تَقَعُ فِي …', model: 'أَسْكُنُ فِي بِرِسْتُولَ الَّتِي تَقَعُ فِي جَنُوبِ غَرْبِ إِنْجِلْتِرَا.', modelEn: 'I live in Bristol, which is in the south-west of England.' },
        { ex: 'مَاذَا يُوجَدُ فِي مَدِينَتِكَ؟', task: 'Name two places.', plan: 'مَاذَا ← يُوجَدُ … وَتُوجَدُ …', model: 'يُوجَدُ مِينَاءٌ قَدِيمٌ، وَتُوجَدُ حَدَائِقُ كَثِيرَةٌ.', modelEn: 'There is an old harbour, and there are many parks.' },
        { ex: 'كَيْفَ الطَّقْسُ هُنَاكَ؟', task: 'Describe the weather.', plan: 'الطَّقْسُ ← الجَوُّ … وَتَسْقُطُ …', model: 'الجَوُّ مُعْتَدِلٌ، وَتَسْقُطُ الأَمْطَارُ كَثِيرًا.', modelEn: 'The weather is mild, and it rains a lot.' },
        { ex: 'مَا أَكْبَرُ مُشْكِلَةٍ فِيهَا؟', task: 'Give a problem with a cause.', plan: 'مُشْكِلَةٌ ← … بِسَبَبِ …', model: 'زَحْمَةُ المُرُورِ، بِسَبَبِ السَّيَّارَاتِ الكَثِيرَةِ.', modelEn: 'Traffic, because of the many cars.' },
        { unexpected: true, ex: 'هَلْ تُرِيدُ أَنْ تَسْكُنَ فِي الرِّيفِ يَوْمًا مَا؟', task: 'Answer the unexpected question with a reason.', plan: 'هَلْ ← نَعَمْ / لَا، لِأَنَّ …', model: 'لَا، لِأَنَّ الرِّيفَ هَادِئٌ جِدًّا، وَأُحِبُّ الحَرَكَةَ.', modelEn: 'No, because the countryside is too quiet, and I like activity.' },
      ],
      girl: 'تَسْكُنِينَ · مَدِينَتِكِ · تُرِيدِينَ · تَسْكُنِي',
      notes: 'Topic C mix: allatī taqaʿu fī (L01) · yūjadu / tūjadu (L08) · weather (L03) · bi-sababi (L04) · urīdu an + verb in -a.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a youth climate panel on local TV', title: 'Role play 2 — The youth climate panel', ar: 'لَجْنَةُ الشَّبَابِ لِلْمُنَاخِ', you: 'a student panellist', them: 'the TV presenter',
      tasks: [
        { ex: 'هَلْ تَغَيَّرَ المُنَاخُ فِي بَلَدِكَ؟', task: 'Compare past and present (kāna / kuntu + present).', model: 'نَعَمْ، كُنَّا نَرَى الثَّلْجَ كُلَّ شِتَاءٍ عِنْدَمَا كُنْتُ صَغِيرًا، أَمَّا الآنَ فَالشِّتَاءُ أَدْفَأُ، وَالفَيَضَانَاتُ أَكْثَرُ.', modelEn: 'Yes, we used to see snow every winter when I was little, but now winters are warmer and floods are more common.' },
        { ex: 'مَا الأَسْبَابُ فِي رَأْيِكَ؟', task: 'Give two causes with linking words.', model: 'أَوَّلًا، دُخَانُ المَصَانِعِ وَالسَّيَّارَاتِ، وَثَانِيًا، قَطْعُ الغَابَاتِ، مِمَّا يُؤَدِّي إِلَى الاحْتِبَاسِ الحَرَارِيِّ.', modelEn: 'First, factory and car fumes; second, cutting down forests — which leads to global warming.' },
        { ex: 'هَلْ تُسَاعِدُ التِّكْنُولُوجْيَا أَمْ تَزِيدُ المُشْكِلَةَ؟', task: 'Give a balanced answer.', model: 'مِنْ نَاحِيَةٍ، تُسَاعِدُنَا الطَّاقَةُ الشَّمْسِيَّةُ، وَمِنْ نَاحِيَةٍ أُخْرَى، نَشْتَرِي هَوَاتِفَ جَدِيدَةً كُلَّ سَنَةٍ، وَهٰذَا يَزِيدُ النُّفَايَاتِ.', modelEn: 'On one hand solar energy helps; on the other, we buy new phones every year, which adds to waste.' },
        { ex: 'مَاذَا فَعَلْتَ أَنْتَ؟', task: 'Give a past action and ASK the panel a question.', model: 'فِي السَّنَةِ المَاضِيَةِ نَظَّمْتُ حَمْلَةً لِلدَّرَّاجَاتِ فِي مَدْرَسَتِي. وَأَنْتُمْ، كَيْفَ تَسْتَطِيعُ البَلَدِيَّةُ أَنْ تُسَاعِدَنَا؟', modelEn: 'Last year I organised a cycling campaign at school. And you — how can the council help us?' },
        { unexpected: true, ex: 'لَوْ كُنْتَ رَئِيسَ الوُزَرَاءِ لِيَوْمٍ وَاحِدٍ، مَاذَا تَفْعَلُ؟', task: 'Answer the unexpected question (law … la- + concession).', model: 'لَوْ كُنْتُ رَئِيسَ الوُزَرَاءِ، لَجَعَلْتُ المُوَاصَلَاتِ العَامَّةَ مَجَّانِيَّةً؛ صَحِيحٌ أَنَّ ذٰلِكَ غَالٍ، غَيْرَ أَنَّهُ سَيُقَلِّلُ مِنَ التَّلَوُّثِ كَثِيرًا.', modelEn: 'If I were PM, I would make public transport free — it’s expensive, but it would greatly reduce pollution.' },
      ],
      girl: 'بَلَدِكِ · رَأْيِكِ · فَعَلْتِ · كُنْتِ رَئِيسَةَ الوُزَرَاءِ · تَفْعَلِينَ',
      notes: 'Integrated Stretch: kunnā narā (used to) + ammā al-āna fa- · awwalan … thāniyan … mimmā yuʾaddī ilā · min nāḥiyatin … wa-min nāḥiyatin ukhrā · law kuntu … la- + ṣaḥīḥun anna … ghayra anna.',
    },
  ],
  convAr: 'مُحَادَثَةٌ مُتَكَامِلَةٌ',
  conv: [
    { route: 'Core', q: 'مَا فَصْلُكَ المُفَضَّلُ؟', en: 'What is your favourite season?', push: 'لِمَاذَا؟' },
    { route: 'Core', q: 'مَاذَا يُوجَدُ قُرْبَ بَيْتِكَ؟', en: 'What is near your home?', push: 'وَمَا النَّاقِصُ؟' },
    { route: 'Develop', q: 'صِفْ رِحْلَةً إِلَى مَكَانٍ طَبِيعِيٍّ.', en: 'Describe a trip to a natural place.', push: 'كَيْفَ كَانَ الطَّقْسُ؟' },
    { route: 'Develop', q: 'كَيْفَ تَسْتَعْمِلُ هَاتِفَكَ لِتُنَظِّمَ حَيَاتَكَ؟', en: 'How do you use your phone to organise your life?', push: 'مَثَلًا؟' },
    { route: 'Stretch', q: 'هَلِ التَّسَوُّقُ عَلَى الإِنْتَرْنِتِ يَضُرُّ البِيئَةَ؟', en: 'Does online shopping harm the environment?', push: 'وَمَا الحَلُّ؟' },
    { route: 'Stretch', q: 'كَيْفَ سَيَكُونُ العَالَمُ حَوْلَنَا بَعْدَ ثَلَاثِينَ سَنَةً؟', en: 'What will the world around us be like in thirty years?', push: 'هَلْ أَنْتَ مُتَفَائِلٌ؟' },
  ],
  convModels: [
    { q: 'صِفْ رِحْلَةً إِلَى مَكَانٍ طَبِيعِيٍّ.', model: 'فِي الرَّبِيعِ ذَهَبْنَا إِلَى جِبَالِ وِيلْزَ، لِأَنَّ أَبِي يُحِبُّ المَشْيَ؛ أَوَّلًا كَانَ الجَوُّ مُشْمِسًا، وَمَعَ ذٰلِكَ هَبَّتْ رِيَاحٌ قَوِيَّةٌ عَلَى القِمَّةِ، وَسَنَرْجِعُ فِي الصَّيْفِ لِنُخَيِّمَ هُنَاكَ.', modelEn: 'A: the Welsh mountains in spring · R: dad loves walking · E: sunny at first, yet strong winds on the summit · T: we’ll go back to camp in summer.' },
    { q: 'كَيْفَ تَسْتَعْمِلُ هَاتِفَكَ لِتُنَظِّمَ حَيَاتَكَ؟', model: 'أَسْتَعْمِلُهُ لِكَيْ أَحْجِزَ التَّذَاكِرَ وَأَعْرِفَ النَّشْرَةَ الجَوِّيَّةَ، لِأَنَّهُ أَسْرَعُ؛ بِالإِضَافَةِ إِلَى ذٰلِكَ، عِنْدِي تَطْبِيقٌ لِلْوَاجِبَاتِ، فَلَمْ أَنْسَ أَيَّ وَاجِبٍ هٰذَا الفَصْلَ.', modelEn: 'A: booking tickets and checking the forecast · R: it’s faster · E: in addition a homework app — I haven’t forgotten any homework this term.' },
    { q: 'هَلِ التَّسَوُّقُ عَلَى الإِنْتَرْنِتِ يَضُرُّ البِيئَةَ؟', model: 'مِنْ نَاحِيَةٍ، يُوَفِّرُ الوَقْتَ وَالبَنْزِينَ، وَمِنْ نَاحِيَةٍ أُخْرَى، تُرْسَلُ الطَّلَبَاتُ فِي عُلَبٍ كَبِيرَةٍ وَبْلَاسْتِيكٍ كَثِيرٍ؛ مَثَلًا، طَلَبْتُ قَلَمًا فَوَصَلَ فِي عُلْبَةٍ بِحَجْمِ الحِذَاءِ! لِذٰلِكَ يَجِبُ أَنْ تُغَيِّرَ الشَّرِكَاتُ ذٰلِكَ.', modelEn: 'Balance: it saves time and fuel, but orders are sent in big boxes with lots of plastic · E: I ordered a pen and it came in a shoe-sized box! · so companies must change.' },
  ],
  talk: {
    title: 'One minute: the world around me — then and now', ar: 'العَالَمُ حَوْلِي بَيْنَ المَاضِي وَالحَاضِرِ',
    text: 'Talk for one minute linking Topic C: where you live, the weather and nature, an environmental problem, technology and shopping — how things were (كُنْتُ / كَانَ …) and how they are now — with a balanced opinion.',
    routes: {
      core: '30 seconds: four facts linked with أَوَّلًا · ثَانِيًا · لِذٰلِكَ.',
      develop: '60 seconds: add كُنْتُ + present and أَمَّا الآنَ …',
      stretch: '90 seconds: add مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى … and a لَوْ كُنْتُ … sentence.',
    },
    phrases: [['أَوَّلًا … ثَانِيًا …', 'first … second …'], ['مَعَ ذٰلِكَ …', 'even so …'], ['مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', 'on one hand … on the other …'], ['فِي الخِتَامِ …', 'to conclude …']],
  },
  checkCore: 'linked ideas with أَوَّلًا · ثَانِيًا · بِالإِضَافَةِ إِلَى ذٰلِكَ',
  checkDevelop: 'balanced an answer with مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms with an integrated Topic C task: a Q1 warm-up form, decoding a new Q2 task (a blog post about how your area has changed), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Youth survey: my area', ar: 'اسْتِبْيَانُ الشَّبَابِ: مِنْطَقَتِي',
    fields: [
      { core: true, ar: 'المَدِينَةُ', en: 'Town', tip: 'نُوتِنْغْهَامُ' },
      { core: true, ar: 'أَيْنَ تَقَعُ؟', en: 'Where it is', tip: 'فِي وَسَطِ إِنْجِلْتِرَا' },
      { core: true, ar: 'الطَّقْسُ عَادَةً', en: 'Usual weather', tip: 'مُمْطِرٌ · مُعْتَدِلٌ' },
      { core: true, ar: 'خِدْمَةٌ مُمْتَازَةٌ', en: 'An excellent service', tip: 'المَكْتَبَةُ العَامَّةُ' },
      { core: true, ar: 'مُشْكِلَةٌ بِيئِيَّةٌ', en: 'An environmental problem', tip: 'النُّفَايَاتُ' },
      { ar: 'جُمْلَةٌ: مَاذَا تُغَيِّرُ لَوْ كُنْتَ مَسْؤُولًا؟', en: 'ONE sentence: what you would change if you were in charge', tip: 'لَوْ كُنْتُ مَسْؤُولًا لَبَنَيْتُ …' },
    ],
  },
  Q2: {
    title: 'Question 2: my area — then and now', ar: 'مِنْطَقَتِي بَيْنَ الأَمْسِ وَاليَوْمِ',
    task: 'Write a blog post in Arabic of about 80–90 words about how your area has changed. You must include: • where your area is and what it is like now • how it was in the past • one advantage and one disadvantage of the changes • what you would like to change in the future, and why.',
    phrases: [['تَقَعُ مِنْطَقَتِي فِي … ، وَهِيَ الآنَ …', 'my area is in …, and now it is …'], ['فِي المَاضِي كَانَتْ … وَكُنَّا …', 'in the past it was … and we used to …'], ['مِنْ نَاحِيَةٍ … ، وَمِنْ نَاحِيَةٍ أُخْرَى …', 'on one hand …, on the other …'], ['لَوْ كُنْتُ مَسْؤُولًا، لَزَرَعْتُ …', 'if I were in charge, I would plant …']],
    rubric: [
      ['task', 'اكْتُبْ مُدَوَّنَةً عَنْ تَغَيُّرِ مِنْطَقَتِكَ (٨٠–٩٠ كَلِمَةً).', 'Write a blog post about how your area has changed (80–90 words).'],
      ['1', 'أَيْنَ تَقَعُ مِنْطَقَتُكَ؟ وَكَيْفَ هِيَ الآنَ؟', 'Where it is; what it’s like now'],
      ['2', 'كَيْفَ كَانَتْ فِي المَاضِي؟', 'How it was in the past'],
      ['3', 'فَائِدَةٌ وَعَيْبٌ لِلتَّغْيِيرَاتِ.', 'One advantage, one disadvantage'],
      ['4', 'مَاذَا تُرِيدُ أَنْ تُغَيِّرَ؟ وَلِمَاذَا؟', 'What you’d change; why'],
    ],
    decode: ['a BLOG POST → a title, chatty tone, speak to readers', 'أَيْنَ · كَيْفَ هِيَ الآنَ → تَقَعُ + PRESENT description (يُوجَدُ · تُوجَدُ)', 'كَيْفَ كَانَتْ → PAST: كَانَ / كَانَتْ + كُنَّا + present (used to)', 'فَائِدَةٌ وَعَيْبٌ → مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى', 'مَاذَا تُرِيدُ أَنْ تُغَيِّرَ → FUTURE / wish + لَوْ كُنْتُ … (la- + past) + لِأَنَّ'],
    coreFrames: [
      { ar: 'مِنْطَقَتِي بَيْنَ الأَمْسِ وَاليَوْمِ', en: 'Title: My area — then and now' },
      { ar: 'تَقَعُ مِنْطَقَتِي فِي ______ ، وَفِيهَا الآنَ ______ .', en: '1 · My area is in …, and now it has …' },
      { ar: 'فِي المَاضِي كَانَتْ ______ ، وَكُنَّا ______ .', en: '2 · In the past it was …, and we used to …' },
      { ar: 'التَّغْيِيرُ جَيِّدٌ لِأَنَّ ______ ، لٰكِنَّ ______ .', en: '3 · The change is good because …, but …' },
      { ar: 'أُرِيدُ أَنْ ______ ، لِأَنَّ ______ .', en: '4 · I want to …, because …' },
    ],
    developFrames: [
      { ar: 'أَصْبَحَتْ مِنْطَقَتِي ______ ، بِسَبَبِ ______ .', en: '1 · My area has become …, because of …' },
      { ar: 'عِنْدَمَا كُنْتُ صَغِيرًا، كَانَتْ هُنَاكَ ______ ، وَلَمْ يَكُنْ هُنَاكَ ______ .', en: '2 · When I was little there was …, and there was no …' },
      { ar: 'مِنْ نَاحِيَةٍ ______ ، وَمِنْ نَاحِيَةٍ أُخْرَى ______ .', en: '3 · On one hand …, on the other …' },
      { ar: 'لَوْ كُنْتُ مَسْؤُولًا، لَبَنَيْتُ ______ ، لِكَيْ ______ .', en: '4 · If I were in charge, I would build …, so that …' },
    ],
    bank: ['أَوَّلًا · ثَانِيًا', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'مَعَ ذٰلِكَ', 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى', 'كُنَّا نَلْعَبُ', 'أَصْبَحَ · أَصْبَحَتْ', 'بِسَبَبِ', 'لَوْ كُنْتُ … لَبَنَيْتُ'],
    model: {
      text: `مِنْطَقَتِي بَيْنَ الأَمْسِ وَاليَوْمِ
تَقَعُ مِنْطَقَتِي فِي شَمَالِ مَدِينَةِ مَانْشِسْتَرَ، وَفِيهَا الآنَ مَرْكَزٌ تِجَارِيٌّ ضَخْمٌ وَمَحَطَّةُ تْرَامٍ حَدِيثَةٌ. عِنْدَمَا كُنْتُ صَغِيرًا، كَانَتْ هُنَاكَ حُقُولٌ خَضْرَاءُ خَلْفَ بَيْتِنَا، وَكُنَّا نَلْعَبُ فِيهَا كُلَّ مَسَاءٍ، وَلَمْ يَكُنْ هُنَاكَ إِلَّا دُكَّانٌ صَغِيرٌ. مِنْ نَاحِيَةٍ، أَصْبَحَتِ الحَيَاةُ أَسْهَلَ، لِأَنَّ المُوَاصَلَاتِ أَسْرَعُ وَالخِدْمَاتِ أَكْثَرُ، وَمِنْ نَاحِيَةٍ أُخْرَى، أَصْبَحَ الهَوَاءُ أَكْثَرَ تَلَوُّثًا بِسَبَبِ زَحْمَةِ المُرُورِ. مَعَ ذٰلِكَ، أُحِبُّ مِنْطَقَتِي. لَوْ كُنْتُ مَسْؤُولًا، لَزَرَعْتُ أَشْجَارًا فِي كُلِّ شَارِعٍ، وَلَبَنَيْتُ حَدِيقَةً لِلْأَطْفَالِ، لِكَيْ يَلْعَبُوا كَمَا كُنَّا نَلْعَبُ.
إِبْرَاهِيمُ`,
      en: '“My area — then and now. My area is in the north of Manchester, and now it has a huge shopping centre and a modern tram stop. When I was little there were green fields behind our house where we played every evening, and there was only a small corner shop. On one hand, life has become easier, because transport is faster and there are more services; on the other, the air has become more polluted because of the traffic. Even so, I love my area. If I were in charge, I would plant trees in every street and build a children’s park, so they could play as we used to. Ibrahim.”',
      find: ['كَانَتْ هُنَاكَ حُقُولٌ … وَكُنَّا نَلْعَبُ', 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى', 'بِسَبَبِ زَحْمَةِ المُرُورِ', 'لَوْ كُنْتُ مَسْؤُولًا، لَزَرَعْتُ'],
    },
  },
  upgrade: [
    { ar: 'مَدِينَتِي جَمِيلَةٌ.', en: 'My town is beautiful.' },
    { ar: 'مَدِينَتِي جَمِيلَةٌ، لِأَنَّهَا تَقَعُ بَيْنَ الجِبَالِ وَالبَحْرِ.', en: '… because it lies between the mountains and the sea.' },
    { ar: '… بِالإِضَافَةِ إِلَى ذٰلِكَ، فِيهَا خِدْمَاتٌ مُمْتَازَةٌ؛ وَمَعَ ذٰلِكَ، الشِّتَاءُ فِيهَا بَارِدٌ وَمُمْطِرٌ جِدًّا.', en: '… in addition it has excellent services; even so, winter there is very cold and wet.' },
    { ar: '… كُنْتُ أَكْرَهُ المَطَرَ، أَمَّا الآنَ فَأُحِبُّ أَنْ أَمْشِيَ تَحْتَهُ، لِأَنَّهُ يَجْعَلُ كُلَّ شَيْءٍ أَخْضَرَ.', en: '… I used to hate the rain, but now I like walking in it, because it makes everything green.' },
  ],
  builder: [
    { en: 'We used to play in the park.', cols: [['كُنَّا', 'كُنَّا لَعِبْنَا'], ['نَلْعَبُ', 'لَعِبْنَا'], ['فِي الحَدِيقَةِ', 'الحَدِيقَةَ فِي']], key: [0, 0, 0], why: '“Used to” = كَانَ (past) + PRESENT verb: كُنَّا نَلْعَبُ.' },
    { en: 'If I were rich, I would travel.', cols: [['لَوْ كُنْتُ', 'إِذَا أَكُونُ'], ['غَنِيًّا', 'غَنِيٌّ'], ['لَسَافَرْتُ', 'أُسَافِرُ']], key: [0, 0, 0], why: 'لَوْ + past, then la- + past; after كُنْتُ → accusative غَنِيًّا.' },
    { en: 'Even so, I love my city.', cols: [['مَعَ ذٰلِكَ', 'لِذٰلِكَ'], ['أُحِبُّ', 'أَحْبَبْتُ'], ['مَدِينَتِي', 'مَدِينَةٌ']], key: [0, 0, 0], why: '“Even so” = مَعَ ذٰلِكَ; “so / therefore” = لِذٰلِكَ.' },
  ],
  errors: [
    { wrong: 'عِنْدَمَا كُنْتُ صَغِيرًا كُنْتُ لَعِبْتُ فِي الشَّارِعِ.', hint: '“Used to” = past + which tense?', right: 'عِنْدَمَا كُنْتُ صَغِيرًا كُنْتُ أَلْعَبُ فِي الشَّارِعِ.', why: 'كُنْتُ + PRESENT verb: كُنْتُ أَلْعَبُ.' },
    { wrong: 'لَوْ كُنْتُ رَئِيسًا، أَبْنِي مَسْبَحًا.', hint: 'The second half of لَوْ needs a partner.', right: 'لَوْ كُنْتُ رَئِيسًا، لَبَنَيْتُ مَسْبَحًا.', why: 'لَوْ … then la- + past verb: لَبَنَيْتُ.' },
    { wrong: 'مِنْ نَاحِيَةٍ المَدِينَةُ مُزْدَحِمَةٌ، وَمِنْ نَاحِيَةٍ هِيَ مُمْتِعَةٌ.', hint: 'The second half needs one more word.', right: 'مِنْ نَاحِيَةٍ المَدِينَةُ مُزْدَحِمَةٌ، وَمِنْ نَاحِيَةٍ أُخْرَى هِيَ مُمْتِعَةٌ.', why: 'The pair is مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a place that changed', ar: 'مَكَانٌ تَغَيَّرَ',
    task: 'Full Q3 title: “The world around us is changing”. Today write ONLY the past paragraph: a place you know well that has changed (a park, a beach, a village…) — how it was, what you used to do there, what happened, and how you feel about it. Use at least three linking words.',
    formula: [
      { ar: 'عِنْدَمَا كُنْتُ صَغِيرًا، كَانَ الشَّاطِئُ قُرْبَ بَيْتِ خَالِي نَظِيفًا.', en: 'T · When I was little, the beach near my uncle’s house was clean.' },
      { ar: 'كُنَّا نَسْبَحُ فِيهِ، وَنَجْمَعُ الأَصْدَافَ.', en: 'D · We used to swim there and collect shells.' },
      { ar: 'تَغَيَّرَ بِسَبَبِ الفَنَادِقِ الجَدِيدَةِ.', en: 'R · It changed because of the new hotels.' },
      { ar: 'مَعَ ذٰلِكَ، مَا زِلْتُ أُحِبُّهُ.', en: 'F · Even so, I still love it.' },
    ],
    phrases: [['عِنْدَمَا كُنْتُ صَغِيرًا …', 'when I was little …'], ['كُنَّا نَـ + present ← كُنَّا نَسْبَحُ', 'we used to swim'], ['بِسَبَبِ … ، أَصْبَحَ …', 'because of …, it became …'], ['مَعَ ذٰلِكَ …', 'even so …'], ['لَوْ … لَـ …', 'if … I would …']],
    model: {
      text: 'عِنْدَمَا كُنْتُ صَغِيرًا، كَانَتْ قَرْيَةُ جَدَّتِي فِي جَنُوبِ تُونُسَ هَادِئَةً وَخَضْرَاءَ. كُنَّا نَقْضِي فِيهَا كُلَّ صَيْفٍ، وَكُنْتُ أَجْمَعُ التَّمْرَ مَعَ أَبْنَاءِ خَالَتِي تَحْتَ النَّخِيلِ. لٰكِنْ فِي السَّنَوَاتِ الأَخِيرَةِ، قَلَّتِ الأَمْطَارُ كَثِيرًا، وَأَصْبَحَ الجَوُّ أَحَرَّ، لِذٰلِكَ جَفَّتْ بِئْرُ القَرْيَةِ، وَانْتَقَلَ كَثِيرٌ مِنَ الشَّبَابِ إِلَى المُدُنِ. بِالإِضَافَةِ إِلَى ذٰلِكَ، مَاتَتْ نَخَلَاتٌ كَثِيرَةٌ. مَعَ ذٰلِكَ، مَا زِلْتُ أُحِبُّ القَرْيَةَ، وَلَوْ كُنْتُ مُهَنْدِسًا، لَسَاعَدْتُ أَهْلَهَا.',
      en: 'T: when I was little, my grandmother’s village in southern Tunisia was calm and green · D: we spent every summer there, and I used to pick dates with my cousins under the palm trees; but in recent years the rain has fallen much less and it has become hotter, so the village well dried up and many young people moved to the cities; in addition, many palm trees died · F: even so, I still love the village, and if I were an engineer, I would help its people.',
      find: ['وَكُنْتُ أَجْمَعُ', 'لِذٰلِكَ جَفَّتْ', 'بِالإِضَافَةِ إِلَى ذٰلِكَ', 'لَوْ كُنْتُ مُهَنْدِسًا، لَسَاعَدْتُ'],
    },
  },
};
write.Q3.phrases[1] = ['كُنَّا نَسْبَحُ · كُنْتُ أَلْعَبُ', 'we used to swim · I used to play'];
write.Q3.phrases[4] = ['لَوْ كُنْتُ … لَسَاعَدْتُ …', 'if I were … I would help …'];
speak.ladderQs[3].l3 = '… لَوْ كُنْتُ غَنِيًّا لَاخْتَرْتُ …';

module.exports = { speak, write };
