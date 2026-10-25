'use strict';
/* Guided Practice Rooms · TB-L04 · My Home, Rooms and Garden. New tasks. Teacher-made. */
const XP = require('./xp-b-l04');

const base = { topic: 'B', n: 4, short: 'My Home, Rooms and Garden', arShort: 'بَيْتِي', fileTitle: 'My_Home_Rooms_and_Garden', title: 'My Home, Rooms and Garden', icon: 'FaHouse', grammar: 'yūjadu / tūjadu (there is); demonstratives (hādhā / hādhihi); prepositions of place (fawqa, taḥta, bi-jānibi, amāma, khalfa); adjective agreement' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (a home swap for a holiday, renting a flat for a family moving abroad), a topic conversation with A-R-E-T, and a one-minute tour of their home.',
  words: XP.speak.words,
  words1: { title: 'Where I live', ar: 'أَيْنَ أَسْكُنُ' },
  words2: { title: 'Where things are — and what they are like', ar: 'الأَمَاكِنُ وَالصِّفَاتُ' },
  ladder: {
    q: 'صِفْ بَيْتَكَ.', qEn: 'Describe your home.',
    rungs: [
      { ar: 'أَسْكُنُ فِي بَيْتٍ صَغِيرٍ فِي وَسَطِ المَدِينَةِ.', en: 'I live in a small house in the town centre.' },
      { ar: 'أَسْكُنُ فِي بَيْتٍ صَغِيرٍ فِي وَسَطِ المَدِينَةِ، وَأُحِبُّهُ لِأَنَّهُ مُرِيحٌ وَقَرِيبٌ مِنَ المَدْرَسَةِ.', en: '… and I love it because it is comfortable and near school.' },
      { ar: '… يُوجَدُ فِيهِ ثَلَاثُ غُرَفِ نَوْمٍ، وَتُوجَدُ خَلْفَهُ حَدِيقَةٌ صَغِيرَةٌ فِيهَا أَشْجَارٌ.', en: '… it has three bedrooms, and behind it there is a small garden with trees.' },
      { ar: '… كُنَّا نَسْكُنُ فِي شَقَّةٍ ضَيِّقَةٍ، أَمَّا الآنَ فَعِنْدِي غُرْفَتِي الخَاصَّةُ؛ وَفِي رَأْيِي هٰذَا أَجْمَلُ شَيْءٍ!', en: '… we used to live in a cramped flat, but now I have my own room — in my opinion that’s the best thing!' },
    ],
  },
  ladderQs: [
    { q: 'مَا غُرْفَتُكَ المُفَضَّلَةُ؟', l1: 'غُرْفَتِي المُفَضَّلَةُ …', l2: '… لِأَنَّهَا …', l3: '… وَفِيهَا … / بِجَانِبِ …' },
    { q: 'هَلْ تُوجَدُ حَدِيقَةٌ عِنْدَكُمْ؟', l1: 'نَعَمْ، تُوجَدُ … / لَا، …', l2: '… وَأُحِبُّ … لِأَنَّ …', l3: '… فِي الصَّيْفِ …' },
    { q: 'كَيْفَ حَيُّكَ؟', l1: 'حَيِّي …', l2: '… لِأَنَّ …', l3: '… وَقُرْبَ بَيْتِي يُوجَدُ …' },
    { q: 'أَيْنَ تُحِبُّ أَنْ تَسْكُنَ فِي المُسْتَقْبَلِ؟', l1: 'أُحِبُّ أَنْ أَسْكُنَ فِي …', l2: '… لِأَنَّ …', l3: '… وَسَيَكُونُ بَيْتِي …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a video call about a holiday home swap', title: 'Role play 1 — A holiday home swap', ar: 'تَبَادُلُ البُيُوتِ فِي العُطْلَةِ', you: 'a teenager whose family is swapping homes', them: 'the other family’s parent',
      tasks: [
        { ex: 'أَهْلًا! هَلْ تَسْكُنُونَ فِي بَيْتٍ أَمْ فِي شَقَّةٍ؟', task: 'Say what kind of home you live in.', plan: 'أَمْ ← نَسْكُنُ فِي …', model: 'نَسْكُنُ فِي بَيْتٍ كَبِيرٍ.', modelEn: 'We live in a big house.' },
        { ex: 'كَمْ غُرْفَةَ نَوْمٍ فِي البَيْتِ؟', task: 'Say how many bedrooms.', plan: 'كَمْ ← يُوجَدُ … غُرَفٍ', model: 'يُوجَدُ أَرْبَعُ غُرَفِ نَوْمٍ.', modelEn: 'There are four bedrooms.' },
        { ex: 'أَيْنَ المَطْبَخُ؟', task: 'Say where the kitchen is.', plan: 'أَيْنَ ← المَطْبَخُ فِي … بِجَانِبِ …', model: 'المَطْبَخُ فِي الطَّابِقِ الأَرْضِيِّ، بِجَانِبِ غُرْفَةِ الجُلُوسِ.', modelEn: 'The kitchen is on the ground floor, next to the living room.' },
        { ex: 'هَلْ تُوجَدُ حَدِيقَةٌ؟', task: 'Describe the garden.', plan: 'هَلْ ← نَعَمْ، تُوجَدُ حَدِيقَةٌ …', model: 'نَعَمْ، تُوجَدُ حَدِيقَةٌ وَاسِعَةٌ خَلْفَ البَيْتِ.', modelEn: 'Yes, there is a large garden behind the house.' },
        { unexpected: true, ex: 'هَلِ الحَيُّ هَادِئٌ؟', task: 'Answer the unexpected question.', plan: 'هَلْ ← نَعَمْ / لَا، الحَيُّ …', model: 'نَعَمْ، الحَيُّ هَادِئٌ جِدًّا فِي اللَّيْلِ.', modelEn: 'Yes, the area is very quiet at night.' },
      ],
      girl: 'the questions do not change for a girl here — the Speaker answers with نَحْنُ (we)',
      notes: 'Language: yūjadu + masculine / tūjadu + feminine · numbers: arbaʿu ghurafi nawmin · bi-jānibi, khalfa · aṭ-ṭābiq al-arḍiyy.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'an estate agent in Dubai', title: 'Role play 2 — Finding a flat for your family', ar: 'نَبْحَثُ عَنْ شَقَّةٍ', you: 'a teenager helping your parents (they don’t speak Arabic)', them: 'the estate agent',
      tasks: [
        { ex: 'أَيَّ نَوْعٍ مِنَ الشُّقَقِ تَبْحَثُونَ عَنْهُ؟', task: 'Describe what your family needs.', model: 'نَبْحَثُ عَنْ شَقَّةٍ فِيهَا ثَلَاثُ غُرَفِ نَوْمٍ، قَرِيبَةٍ مِنْ مَدْرَسَةٍ دَوْلِيَّةٍ.', modelEn: 'We are looking for a flat with three bedrooms, near an international school.' },
        { ex: 'هٰذِهِ الشَّقَّةُ فِي الطَّابِقِ العَاشِرِ.', task: 'Give your opinion with a reason.', model: 'هٰذِهِ الشَّقَّةُ جَمِيلَةٌ، لٰكِنَّهَا عَالِيَةٌ جِدًّا لِجَدَّتِي، لِأَنَّهَا لَا تُحِبُّ المَصَاعِدَ.', modelEn: 'This flat is lovely, but it’s too high for my grandmother — she doesn’t like lifts.' },
        { ex: 'كَيْفَ كَانَ بَيْتُكُمْ فِي بِرِيطَانِيَا؟', task: 'Describe your old home (past) and compare.', model: 'كَانَ بَيْتُنَا قَدِيمًا وَبَارِدًا، لٰكِنَّهُ كَانَ أَوْسَعَ مِنْ هٰذِهِ الشَّقَّةِ، وَكَانَتْ عِنْدَنَا حَدِيقَةٌ.', modelEn: 'Our house was old and cold, but it was bigger than this flat, and we had a garden.' },
        { ex: 'عِنْدَنَا شَقَّةٌ أُخْرَى فِي حَيٍّ هَادِئٍ.', task: 'ASK two questions about the other flat.', model: 'هَلْ تُوجَدُ فِيهَا شُرْفَةٌ؟ وَكَمْ إِيجَارُهَا فِي الشَّهْرِ؟', modelEn: 'Does it have a balcony? And how much is the rent per month?' },
        { unexpected: true, ex: 'لَوْ اخْتَرْتَ وَحْدَكَ، أَيَّ بَيْتٍ تَخْتَارُ؟', task: 'Answer the unexpected question (law … la-).', model: 'لَوِ اخْتَرْتُ وَحْدِي، لَاخْتَرْتُ بَيْتًا صَغِيرًا قُرْبَ البَحْرِ، لِأَنِّي أُحِبُّ السِّبَاحَةَ.', modelEn: 'If I chose alone, I would choose a small house near the sea, because I love swimming.' },
      ],
      girl: 'اخْتَرْتِ · تَخْتَارِينَ',
      notes: 'Language: relative description (shaqqa fīhā …) · lākinnahā + li-annahā · kāna + comparison awsaʿu min · hal tūjadu …? · law … la- (Stretch).',
    },
  ],
  convAr: 'بَيْتِي وَحَيِّي',
  conv: [
    { route: 'Core', q: 'كَمْ غُرْفَةً فِي بَيْتِكَ؟', en: 'How many rooms are in your home?', push: 'وَمَا أَكْبَرُهَا؟' },
    { route: 'Core', q: 'مَاذَا يُوجَدُ فِي غُرْفَتِكَ؟', en: 'What is in your bedroom?', push: 'وَأَيْنَ السَّرِيرُ؟' },
    { route: 'Develop', q: 'مَاذَا تَفْعَلُ فِي الحَدِيقَةِ؟', en: 'What do you do in the garden?', push: 'وَفِي الصَّيْفِ المَاضِي؟' },
    { route: 'Develop', q: 'مَا الَّذِي تُرِيدُ أَنْ تُغَيِّرَهُ فِي بَيْتِكَ؟', en: 'What would you like to change in your home?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'هَلِ الحَيَاةُ فِي شَقَّةٍ أَفْضَلُ مِنَ الحَيَاةِ فِي بَيْتٍ؟', en: 'Is life in a flat better than in a house?', push: 'وَلٰكِنْ …؟' },
    { route: 'Stretch', q: 'صِفْ بَيْتَ أَحْلَامِكَ.', en: 'Describe your dream home.', push: 'وَأَيْنَ سَيَكُونُ؟' },
  ],
  convModels: [
    { q: 'مَاذَا يُوجَدُ فِي غُرْفَتِكَ؟', model: 'يُوجَدُ فِي غُرْفَتِي سَرِيرٌ وَمَكْتَبٌ وَخِزَانَةٌ كَبِيرَةٌ، لِأَنِّي أُحِبُّ النِّظَامَ؛ المَكْتَبُ تَحْتَ النَّافِذَةِ، وَفِي الصَّيْفِ سَأَدْهُنُ الجُدْرَانَ بِاللَّوْنِ الأَزْرَقِ.', modelEn: 'A: a bed, a desk and a big wardrobe · R: I like order · E: the desk is under the window · T: in summer I’ll paint the walls blue.' },
    { q: 'مَا الَّذِي تُرِيدُ أَنْ تُغَيِّرَهُ فِي بَيْتِكَ؟', model: 'أُرِيدُ أَنْ يَكُونَ المَطْبَخُ أَكْبَرَ، لِأَنَّ عَائِلَتِي تُحِبُّ الطَّبْخَ مَعًا؛ فِي رَمَضَانَ المَاضِي كُنَّا نَأْكُلُ فِي غُرْفَةِ الجُلُوسِ، لِأَنَّ المَطْبَخَ ضَيِّقٌ.', modelEn: 'A: a bigger kitchen · R: my family loves cooking together · E: last Ramadan we ate in the living room because the kitchen is narrow.' },
    { q: 'هَلِ الحَيَاةُ فِي شَقَّةٍ أَفْضَلُ مِنَ الحَيَاةِ فِي بَيْتٍ؟', model: 'صَحِيحٌ أَنَّ الشَّقَّةَ أَرْخَصُ وَأَسْهَلُ فِي التَّنْظِيفِ، غَيْرَ أَنَّ البَيْتَ أَهْدَأُ، وَفِيهِ حَدِيقَةٌ لِلْأَطْفَالِ؛ لِذٰلِكَ أُفَضِّلُ البَيْتَ لِلْعَائِلَاتِ الكَبِيرَةِ.', modelEn: 'Concession: a flat is cheaper and easier to clean, but a house is quieter with a garden for children · conclusion: a house is better for big families.' },
  ],
  talk: {
    title: 'One minute: a tour of my home', ar: 'جَوْلَةٌ فِي بَيْتِي',
    text: 'Talk for one minute giving a tour of your home: the rooms on each floor, where things are, your favourite room and why — and how your home has changed or will change.',
    routes: {
      core: '30 seconds: four rooms with يُوجَدُ / تُوجَدُ and one preposition each.',
      develop: '60 seconds: add your favourite room with a reason, and your old home (past).',
      stretch: '90 seconds: compare two homes, give an opinion and describe your dream home.',
    },
    phrases: [['فِي الطَّابِقِ الأَرْضِيِّ يُوجَدُ …', 'on the ground floor there is …'], ['فِي الطَّابِقِ الأَوَّلِ …', 'on the first floor …'], ['بِجَانِبِ · أَمَامَ · خَلْفَ', 'next to · in front of · behind'], ['غُرْفَتِي المُفَضَّلَةُ هِيَ …', 'my favourite room is …']],
  },
  checkCore: 'used يُوجَدُ / تُوجَدُ correctly with masculine and feminine nouns',
  checkDevelop: 'used prepositions of place (بِجَانِبِ · أَمَامَ · خَلْفَ · فَوْقَ · تَحْتَ)',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (a family moving house), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Student accommodation: request form', ar: 'طَلَبُ سَكَنٍ لِلطُّلَّابِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'نَوْعُ السَّكَنِ', en: 'Type of accommodation', tip: 'شَقَّةٌ · غُرْفَةٌ فِي بَيْتٍ' },
      { core: true, ar: 'عَدَدُ الغُرَفِ', en: 'Number of rooms', tip: 'غُرْفَتَانِ' },
      { core: true, ar: 'الطَّابِقُ المُفَضَّلُ', en: 'Preferred floor', tip: 'الطَّابِقُ الأَرْضِيُّ' },
      { core: true, ar: 'شَيْءٌ ضَرُورِيٌّ', en: 'Something essential', tip: 'مَكْتَبٌ · إِنْتَرْنِتْ' },
      { ar: 'جُمْلَةٌ: صِفِ الحَيَّ المُنَاسِبَ لَكَ', en: 'ONE sentence: describe the area you want', tip: 'أُرِيدُ حَيًّا … قَرِيبًا مِنْ …' },
    ],
  },
  Q2: {
    title: 'Question 2: we moved house!', ar: 'انْتَقَلْنَا إِلَى بَيْتٍ جَدِيدٍ!',
    task: 'Your family has moved to a new home. Write an email in Arabic to your friend of about 80–90 words. You must include: • where the new home is and what the area is like • the rooms and your new bedroom • why your family moved, and how you felt on moving day • an invitation to visit, with what you will do together.',
    phrases: [['انْتَقَلْنَا إِلَى … فِي …', 'we moved to … in …'], ['يُوجَدُ فِي البَيْتِ … وَتُوجَدُ …', 'in the house there is … and there is …'], ['انْتَقَلْنَا لِأَنَّ …', 'we moved because …'], ['تَعَالَ وَزُرْنَا …', 'come and visit us …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ بَيْتِكَ الجَدِيدِ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about your new home (80–90 words).'],
      ['1', 'أَيْنَ البَيْتُ الجَدِيدُ؟ وَكَيْفَ الحَيُّ؟', 'Where the new home is; the area'],
      ['2', 'صِفِ الغُرَفَ وَغُرْفَتَكَ الجَدِيدَةَ.', 'The rooms and your new bedroom'],
      ['3', 'لِمَاذَا انْتَقَلْتُمْ؟ وَكَيْفَ شَعَرْتَ يَوْمَ الانْتِقَالِ؟', 'Why you moved; how you felt'],
      ['4', 'ادْعُ صَدِيقَكَ لِلزِّيَارَةِ، وَقُلْ مَاذَا سَتَفْعَلَانِ.', 'An invitation and your plans together'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'أَيْنَ · كَيْفَ → PRESENT description', 'صِفْ → يُوجَدُ / تُوجَدُ + prepositions + agreement', 'لِمَاذَا انْتَقَلْتُمْ · كَيْفَ شَعَرْتَ → PAST + a reason + a feeling', 'ادْعُ · سَتَفْعَلَانِ → an INVITATION + FUTURE'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'انْتَقَلْنَا إِلَى بَيْتٍ جَدِيدٍ فِي ______ ، وَالحَيُّ ______ .', en: '1 · We moved to a new home in …, and the area is …' },
      { ar: 'فِي البَيْتِ ______ غُرَفٍ، وَغُرْفَتِي ______ .', en: '2 · The house has … rooms, and my room is …' },
      { ar: 'انْتَقَلْنَا لِأَنَّ ______ ، وَشَعَرْتُ بِـ ______ .', en: '3 · We moved because …, and I felt …' },
      { ar: 'تَعَالَ وَزُرْنَا يَوْمَ ______ ، وَسَنَلْعَبُ ______ .', en: '4 · Come and visit us on …, and we will play …' },
    ],
    developFrames: [
      { ar: 'يَقَعُ بَيْتُنَا الجَدِيدُ ______ ، وَقُرْبَهُ يُوجَدُ ______ .', en: '1 · Our new home is …, and near it there is …' },
      { ar: 'غُرْفَتِي فِي الطَّابِقِ ______ ، وَفِيهَا ______ بِجَانِبِ ______ .', en: '2 · My room is on the … floor, with … next to …' },
      { ar: 'كَانَ بَيْتُنَا القَدِيمُ ______ ، أَمَّا هٰذَا البَيْتُ فَـ ______ .', en: '3 · Our old house was …, but this house is …' },
      { ar: 'إِذَا جِئْتَ فِي الصَّيْفِ، فَسَـ ______ .', en: '4 · If you come in the summer, we will …' },
    ],
    bank: ['بَيْتٌ · شَقَّةٌ', 'يُوجَدُ · تُوجَدُ', 'الطَّابِقُ الأَرْضِيُّ', 'وَاسِعٌ · ضَيِّقٌ', 'مُرِيحٌ', 'حَدِيقَةٌ', 'هَادِئٌ · مُزْدَحِمٌ', 'انْتَقَلْنَا'],
    model: {
      text: `مَرْحَبًا يَا سَلْمَى،
كَيْفَ حَالُكِ؟ انْتَقَلْنَا الأُسْبُوعَ المَاضِي إِلَى بَيْتٍ جَدِيدٍ فِي قَرْيَةٍ صَغِيرَةٍ قُرْبَ أُكْسْفُورْدَ، وَالحَيُّ هَادِئٌ وَأَخْضَرُ، وَتُوجَدُ فِيهِ مَكْتَبَةٌ وَمَسْجِدٌ صَغِيرٌ. فِي البَيْتِ خَمْسُ غُرَفٍ، وَتُوجَدُ خَلْفَهُ حَدِيقَةٌ وَاسِعَةٌ. غُرْفَتِي فِي الطَّابِقِ الأَوَّلِ، وَهِيَ مُرِيحَةٌ، وَفِيهَا مَكْتَبٌ أَبْيَضُ تَحْتَ النَّافِذَةِ. انْتَقَلْنَا لِأَنَّ أَبِي وَجَدَ عَمَلًا جَدِيدًا هُنَا، وَيَوْمَ الانْتِقَالِ شَعَرْتُ بِالحُزْنِ، لِأَنِّي تَرَكْتُ صَدِيقَاتِي فِي المَدِينَةِ، لٰكِنِّي الآنَ سَعِيدَةٌ. تَعَالَيْ وَزُورِينَا فِي العُطْلَةِ، وَسَنَأْكُلُ فِي الحَدِيقَةِ، وَنَرْكَبُ الدَّرَّاجَاتِ بَيْنَ الحُقُولِ!
مَعَ مَحَبَّتِي،
مَرْيَمُ`,
      en: '“Hi Salma, how are you? Last week we moved to a new house in a small village near Oxford; the area is quiet and green, with a library and a small mosque. The house has five rooms, and behind it there is a large garden. My room is on the first floor; it is comfortable, with a white desk under the window. We moved because my dad found a new job here; on moving day I felt sad because I left my friends in the city, but now I am happy. Come and visit us in the holidays — we will eat in the garden and cycle through the fields! Love, Maryam.”',
      find: ['انْتَقَلْنَا … إِلَى بَيْتٍ جَدِيدٍ', 'وَتُوجَدُ خَلْفَهُ حَدِيقَةٌ', 'انْتَقَلْنَا لِأَنَّ', 'تَعَالَيْ وَزُورِينَا'],
    },
  },
  upgrade: [
    { ar: 'عِنْدَنَا حَدِيقَةٌ.', en: 'We have a garden.' },
    { ar: 'تُوجَدُ خَلْفَ بَيْتِنَا حَدِيقَةٌ صَغِيرَةٌ فِيهَا وُرُودٌ حَمْرَاءُ.', en: 'Behind our house there is a small garden with red roses.' },
    { ar: '… وَأَجْلِسُ فِيهَا كُلَّ مَسَاءٍ، لِأَنَّهَا هَادِئَةٌ وَجَمِيلَةٌ.', en: '… and I sit in it every evening, because it is quiet and beautiful.' },
    { ar: '… وَفِي رَأْيِي هِيَ أَفْضَلُ مَكَانٍ لِلْمُرَاجَعَةِ، لٰكِنَّ أَخِي يُحِبُّ أَنْ يَلْعَبَ فِيهَا!', en: '… in my opinion it is the best place to revise — but my brother likes playing there!' },
  ],
  builder: [
    { en: 'There is a big kitchen on the ground floor.', cols: [['يُوجَدُ', 'تُوجَدُ'], ['مَطْبَخٌ كَبِيرٌ', 'مَطْبَخًا كَبِيرًا'], ['فِي الطَّابِقِ الأَرْضِيِّ', 'إِلَى الطَّابِقِ الأَرْضِيِّ']], key: [0, 0, 0], why: 'مَطْبَخ is masculine → يُوجَدُ مَطْبَخٌ.' },
    { en: 'This room is comfortable and spacious.', cols: [['هٰذِهِ الغُرْفَةُ', 'هٰذَا الغُرْفَةُ'], ['مُرِيحَةٌ', 'مُرِيحٌ'], ['وَوَاسِعَةٌ', 'وَوَاسِعٌ']], key: [0, 0, 0], why: 'غُرْفَة is feminine → هٰذِهِ … مُرِيحَةٌ وَوَاسِعَةٌ.' },
    { en: 'The garden is behind the house.', cols: [['الحَدِيقَةُ', 'حَدِيقَةٌ'], ['خَلْفَ', 'تَحْتَ'], ['البَيْتِ', 'البَيْتُ']], key: [0, 0, 0], why: 'Behind = خَلْفَ; the noun after it is genitive: البَيْتِ.' },
  ],
  errors: [
    { wrong: 'يُوجَدُ حَدِيقَةٌ كَبِيرَةٌ.', hint: 'Is حَدِيقَة masculine or feminine?', right: 'تُوجَدُ حَدِيقَةٌ كَبِيرَةٌ.', why: 'Feminine noun → تُوجَدُ.' },
    { wrong: 'هٰذَا غُرْفَتِي.', hint: 'Which “this”?', right: 'هٰذِهِ غُرْفَتِي.', why: 'غُرْفَة is feminine → هٰذِهِ.' },
    { wrong: 'المَكْتَبُ بِجَانِبِ النَّافِذَةُ.', hint: 'Look at the noun after the preposition.', right: 'المَكْتَبُ بِجَانِبِ النَّافِذَةِ.', why: 'After a preposition the noun ends in -i: النَّافِذَةِ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: the home where I grew up', ar: 'البَيْتُ الَّذِي كَبِرْتُ فِيهِ',
    task: 'Full Q3 title: “Home sweet home”. Today write ONLY the past paragraph: the home you lived in when you were younger — what it was like, a memory from it, why it was special, and how you feel about it now.',
    formula: [
      { ar: 'عِنْدَمَا كُنْتُ صَغِيرًا كُنَّا نَسْكُنُ فِي شَقَّةٍ فِي لَنْدَنَ.', en: 'T · When I was little we lived in a flat in London.' },
      { ar: 'كَانَتْ صَغِيرَةً، لٰكِنْ كَانَتْ فِيهَا شُرْفَةٌ جَمِيلَةٌ.', en: 'D · It was small, but it had a lovely balcony.' },
      { ar: 'كَانَتْ مُمَيَّزَةً لِأَنَّ جِيرَانَنَا كَانُوا مِثْلَ عَائِلَتِنَا.', en: 'R · Special because our neighbours were like family.' },
      { ar: 'أَشْتَاقُ إِلَيْهَا، وَسَأَزُورُ الحَيَّ قَرِيبًا.', en: 'F · I miss it, and I will visit the area soon.' },
    ],
    phrases: [['كُنَّا نَسْكُنُ فِي …', 'we used to live in …'], ['كَانَتْ فِيهِ / فِيهَا …', 'it had …'], ['أَتَذَكَّرُ عِنْدَمَا …', 'I remember when …'], ['كَانَ مُمَيَّزًا لِأَنَّ …', 'it was special because …'], ['أَشْتَاقُ إِلَى …', 'I miss …']],
    model: {
      text: 'عِنْدَمَا كُنْتُ صَغِيرًا كُنَّا نَسْكُنُ فِي شَقَّةٍ قَدِيمَةٍ فِي الطَّابِقِ الثَّالِثِ فِي وَسَطِ بِرْمِنْغْهَامَ. كَانَتْ صَغِيرَةً، وَكُنْتُ أَنَامُ مَعَ أَخِي فِي غُرْفَةٍ وَاحِدَةٍ، لٰكِنْ كَانَتْ فِيهَا شُرْفَةٌ تُطِلُّ عَلَى الحَدِيقَةِ. أَتَذَكَّرُ عِنْدَمَا كُنَّا نَجْلِسُ عَلَى الشُّرْفَةِ فِي رَمَضَانَ، وَنَنْتَظِرُ الأَذَانَ مَعَ جِيرَانِنَا. كَانَتْ تِلْكَ الشَّقَّةُ مُمَيَّزَةً، لِأَنَّ جِيرَانَنَا كَانُوا مِثْلَ عَائِلَتِنَا. الآنَ بَيْتُنَا أَكْبَرُ وَأَجْمَلُ، لٰكِنِّي أَشْتَاقُ إِلَى تِلْكَ الأَيَّامِ، وَسَأَزُورُ الحَيَّ القَدِيمَ فِي العِيدِ.',
      en: 'T: when I was little we lived in an old third-floor flat in central Birmingham · D: it was small and I shared a room with my brother, but it had a balcony overlooking the park; I remember sitting on the balcony in Ramadan, waiting for the call to prayer with our neighbours · R: that flat was special because our neighbours were like family · F: our home now is bigger and nicer, but I miss those days, and I will visit the old area at Eid.',
      find: ['كُنَّا نَسْكُنُ فِي شَقَّةٍ', 'كَانَتْ فِيهَا شُرْفَةٌ', 'أَتَذَكَّرُ عِنْدَمَا', 'لٰكِنِّي أَشْتَاقُ'],
    },
  },
};
write.Q2.coreFrames[3] = { ar: 'انْتَقَلْنَا لِأَنَّ ______ ، وَشَعَرْتُ بِالحُزْنِ / بِالفَرَحِ.', en: '3 · We moved because …, and I felt sad / happy.' };
write.Q2.developFrames[2] = { ar: 'كَانَ بَيْتُنَا القَدِيمُ ______ ، أَمَّا هٰذَا البَيْتُ فَهُوَ ______ .', en: '3 · Our old house was …, but this house is …' };
write.Q2.developFrames[3] = { ar: 'إِذَا جِئْتَ فِي الصَّيْفِ، فَسَنَذْهَبُ ______ .', en: '4 · If you come in the summer, we will go …' };

module.exports = { speak, write };
