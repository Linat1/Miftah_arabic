'use strict';
/* Guided Practice Rooms · TB-L10 · Topic B mixed practice — new neighbours. New tasks. Teacher-made. */
const XP = require('./xp-b-l10');

const base = { topic: 'B', n: 10, short: 'Mixed Topic B: New Neighbours', arShort: 'الجِيرَانُ الجُدُدُ', fileTitle: 'Topic_B_Listening_and_Reading_Workshop', title: 'Topic B mixed practice — new neighbours', icon: 'FaPeopleArrows', grammar: 'mixed Topic B: profiles, family, description, home and hobbies; reference with attached pronouns (-hu / -hā / -hum); agreement; welcoming phrases' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms using all of Topic B: a word warm-up, the answer ladder, two new role plays (welcoming a new neighbour, a neighbourhood street party), a topic conversation with A-R-E-T, and a one-minute talk about the people who live near them.',
  words: XP.speak.words,
  words1: { title: 'Neighbours and welcomes', ar: 'الجِيرَانُ وَالتَّرْحِيبُ' },
  words2: { title: 'Describing and helping', ar: 'الوَصْفُ وَالمُسَاعَدَةُ' },
  ladder: {
    q: 'صِفْ جِيرَانَكَ.', qEn: 'Describe your neighbours.',
    rungs: [
      { ar: 'جِيرَانُنَا عَائِلَةٌ لَطِيفَةٌ.', en: 'Our neighbours are a kind family.' },
      { ar: 'جِيرَانُنَا عَائِلَةٌ لَطِيفَةٌ، لِأَنَّهُمْ يُسَاعِدُونَنَا دَائِمًا.', en: '… because they always help us.' },
      { ar: '… عِنْدَهُمْ وَلَدَانِ، وَأَلْعَبُ مَعَهُمَا كُرَةَ القَدَمِ فِي الشَّارِعِ.', en: '… they have two boys, and I play football with them in the street.' },
      { ar: '… وَعِنْدَمَا كُنَّا مُسَافِرِينَ، سَقَوْا حَدِيقَتَنَا؛ فَالجَارُ الطَّيِّبُ فِي رَأْيِي مِثْلُ الأَخِ.', en: '… when we were away they watered our garden — in my opinion a good neighbour is like a brother.' },
    ],
  },
  ladderQs: [
    { q: 'مُنْذُ مَتَى تَسْكُنُ فِي حَيِّكَ؟', l1: 'أَسْكُنُ هُنَا مُنْذُ …', l2: '… وَأُحِبُّهُ لِأَنَّ …', l3: '… قَبْلَ ذٰلِكَ كُنَّا …' },
    { q: 'هَلْ تَعْرِفُ جِيرَانَكَ جَيِّدًا؟', l1: 'نَعَمْ / لَا، …', l2: '… لِأَنَّ …', l3: '… مَرَّةً …' },
    { q: 'كَيْفَ تُرَحِّبُ بِجَارٍ جَدِيدٍ؟', l1: 'أَقُولُ لَهُ: …', l2: '… وَأُعْطِيهِ …', l3: '… وَسَأَدْعُوهُ إِلَى …' },
    { q: 'مَاذَا يُوجَدُ فِي حَيِّكَ لِلشَّبَابِ؟', l1: 'يُوجَدُ … / لَا يُوجَدُ …', l2: '… لِذٰلِكَ …', l3: '… وَأَتَمَنَّى أَنْ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'your front door', title: 'Role play 1 — Welcoming a new neighbour', ar: 'نُرَحِّبُ بِجَارَتِنَا الجَدِيدَةِ', you: 'a teenager next door', them: 'a new neighbour (a woman who has just moved in)',
      tasks: [
        { ex: 'مَرْحَبًا! أَنَا جَارَتُكُمُ الجَدِيدَةُ.', task: 'Welcome her and introduce yourself.', plan: 'مَرْحَبًا ← أَهْلًا وَسَهْلًا! اسْمِي …', model: 'أَهْلًا وَسَهْلًا بِكِ! اسْمِي يُوسُفُ، وَأَسْكُنُ فِي البَيْتِ رَقْمَ ١٢.', modelEn: 'Welcome! My name is Yusuf, and I live at number 12.' },
        { ex: 'هَلْ تَسْكُنُ هُنَا مَعَ عَائِلَتِكَ؟', task: 'Describe your family briefly.', plan: 'هَلْ ← نَعَمْ، أَسْكُنُ مَعَ …', model: 'نَعَمْ، أَسْكُنُ مَعَ وَالِدَيَّ وَأُخْتَيَّ.', modelEn: 'Yes, I live with my parents and my two sisters.' },
        { ex: 'أَيْنَ أَقْرَبُ سُوقٍ؟', task: 'Give directions to the shop.', plan: 'أَيْنَ ← السُّوقُ … بِجَانِبِ …', model: 'السُّوقُ فِي آخِرِ الشَّارِعِ، بِجَانِبِ المَسْجِدِ.', modelEn: 'The shop is at the end of the street, next to the mosque.' },
        { ex: 'عِنْدِي ابْنٌ عُمْرُهُ أَرْبَعَ عَشْرَةَ سَنَةً.', task: 'Suggest an activity with her son.', plan: 'اقْتِرَاحٌ ← يُمْكِنُ أَنْ نَلْعَبَ …', model: 'رَائِعٌ! يُمْكِنُ أَنْ نَلْعَبَ كُرَةَ السَّلَّةِ مَعًا فِي النَّادِي.', modelEn: 'Great! We can play basketball together at the club.' },
        { unexpected: true, ex: 'هَلْ تَعْرِفُ طَبِيبًا جَيِّدًا هُنَا؟', task: 'Answer the unexpected question.', plan: 'هَلْ ← نَعَمْ، … / لَا، لٰكِنْ …', model: 'نَعَمْ، الدُّكْتُورَةُ سَارَةُ لَطِيفَةٌ جِدًّا، وَعِيَادَتُهَا قَرِيبَةٌ.', modelEn: 'Yes, Dr Sara is very kind, and her clinic is close.' },
      ],
      girl: 'تَسْكُنِينَ · عَائِلَتِكِ · تَعْرِفِينَ',
      notes: 'Topic B mix: welcoming (ahlan wa-sahlan biki — to a woman) · family (wālidayya, ukhtayya — dual + my) · places (bi-jānibi) · hobbies · description and agreement.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a planning meeting with neighbours', title: 'Role play 2 — Planning a street party', ar: 'حَفْلَةُ الشَّارِعِ', you: 'a young volunteer', them: 'the neighbourhood organiser',
      tasks: [
        { ex: 'نُرِيدُ أَنْ نُنَظِّمَ حَفْلَةً لِلْجِيرَانِ. مَا رَأْيُكَ؟', task: 'Give your opinion and a reason.', model: 'فِكْرَةٌ مُمْتَازَةٌ، لِأَنَّ كَثِيرًا مِنَ الجِيرَانِ لَا يَعْرِفُونَ بَعْضَهُمْ.', modelEn: 'An excellent idea, because many neighbours don’t know each other.' },
        { ex: 'مَاذَا تَسْتَطِيعُ أَنْ تَفْعَلَ؟', task: 'Offer two things, linked to your hobbies.', model: 'أَسْتَطِيعُ أَنْ أَرْسُمَ المُلْصَقَاتِ، لِأَنَّ الرَّسْمَ هِوَايَتِي، وَأَنْ أُنَظِّمَ الأَلْعَابَ لِلْأَطْفَالِ.', modelEn: 'I can draw the posters, because drawing is my hobby, and organise games for the children.' },
        { ex: 'هَلْ حَضَرْتَ حَفْلَةً مِثْلَهَا مِنْ قَبْلُ؟', task: 'Tell a past experience.', model: 'نَعَمْ، فِي حَيِّنَا القَدِيمِ أَكَلْنَا مَعًا فِي الشَّارِعِ، وَتَعَرَّفْتُ عَلَى أَعَزِّ أَصْدِقَائِي هُنَاكَ.', modelEn: 'Yes, in our old area we ate together in the street, and I met my best friend there.' },
        { ex: 'سَتَكُونُ الحَفْلَةُ يَوْمَ السَّبْتِ.', task: 'ASK two practical questions.', model: 'فِي أَيِّ سَاعَةٍ تَبْدَأُ؟ وَمَاذَا يُحْضِرُ كُلُّ بَيْتٍ؟', modelEn: 'What time does it start? And what does each house bring?' },
        { unexpected: true, ex: 'لَوْ رَفَضَ بَعْضُ الجِيرَانِ، مَاذَا تَقُولُ لَهُمْ؟', task: 'Answer the unexpected question (law … la-).', model: 'لَوْ رَفَضُوا، لَقُلْتُ لَهُمْ إِنَّ الحَفْلَةَ فُرْصَةٌ لِنَتَعَارَفَ، وَلَدَعَوْتُهُمْ مَرَّةً ثَانِيَةً بِلُطْفٍ.', modelEn: 'If they refused, I would tell them the party is a chance to get to know each other, and invite them again kindly.' },
      ],
      girl: 'رَأْيُكِ · تَسْتَطِيعِينَ · تَفْعَلِي · حَضَرْتِ · تَقُولِينَ',
      notes: 'Topic B mix at Stretch level: opinions with reasons · astaṭīʿu an … wa-an … · hobbies (verbal nouns) · past experience · law … la-.',
    },
  ],
  convAr: 'كُلُّ مَوَاضِيعِ المِحْوَرِ الثَّانِي',
  conv: [
    { route: 'Core', q: 'مَنْ يَسْكُنُ بِجَانِبِ بَيْتِكَ؟', en: 'Who lives next to your home?', push: 'كَيْفَ هُمْ؟' },
    { route: 'Core', q: 'مَا هِوَايَتُكَ؟', en: 'What is your hobby?', push: 'كَمْ مَرَّةً؟' },
    { route: 'Develop', q: 'صِفْ شَخْصًا فِي عَائِلَتِكَ.', en: 'Describe someone in your family.', push: 'وَشَخْصِيَّتُهُ؟' },
    { route: 'Develop', q: 'كَيْفَ قَضَيْتَ عُطْلَتَكَ الأَخِيرَةَ؟', en: 'How did you spend your last holiday?', push: 'مَعَ مَنْ؟' },
    { route: 'Stretch', q: 'هَلْ يَعْرِفُ النَّاسُ جِيرَانَهُمُ اليَوْمَ أَقَلَّ مِنَ المَاضِي؟', en: 'Do people know their neighbours less than in the past?', push: 'لِمَاذَا؟' },
    { route: 'Stretch', q: 'كَيْفَ تَجْعَلُ حَيَّكَ مَكَانًا أَفْضَلَ؟', en: 'How would you make your area a better place?', push: 'وَمَنِ المَسْؤُولُ؟' },
  ],
  convModels: [
    { q: 'صِفْ شَخْصًا فِي عَائِلَتِكَ.', model: 'خَالِي طَوِيلٌ وَشَعْرُهُ رَمَادِيٌّ، وَهُوَ مَرِحٌ جِدًّا، لِأَنَّهُ يَحْكِي النُّكَتَ دَائِمًا؛ يَعْمَلُ طَبَّاخًا، وَفِي الصَّيْفِ القَادِمِ سَيُعَلِّمُنِي كَيْفَ أَطْبُخُ الكُسْكُسَ.', modelEn: 'A: my uncle is tall with grey hair, and very funny · R: always telling jokes · E: he is a cook · T: next summer he’ll teach me couscous.' },
    { q: 'كَيْفَ قَضَيْتَ عُطْلَتَكَ الأَخِيرَةَ؟', model: 'قَضَيْتُهَا فِي البَيْتِ، لِأَنَّ أُمِّي كَانَتْ مَرِيضَةً؛ لٰكِنِّي رَسَمْتُ كَثِيرًا، وَقَرَأْتُ ثَلَاثَ رِوَايَاتٍ، وَزَارَنَا جِيرَانُنَا كُلَّ يَوْمٍ، فَلَمْ أَشْعُرْ بِالمَلَلِ.', modelEn: 'A: at home · R: my mum was ill · E: I drew a lot, read three novels and our neighbours visited daily — I wasn’t bored.' },
    { q: 'هَلْ يَعْرِفُ النَّاسُ جِيرَانَهُمُ اليَوْمَ أَقَلَّ مِنَ المَاضِي؟', model: 'فِي رَأْيِي نَعَمْ، لِأَنَّ النَّاسَ مَشْغُولُونَ وَيَنْتَقِلُونَ كَثِيرًا؛ كَانَ جَدِّي يَعْرِفُ كُلَّ الحَيِّ، أَمَّا نَحْنُ فَنَعْرِفُ جَارَيْنِ فَقَطْ، وَهٰذَا مُؤْسِفٌ.', modelEn: 'Opinion: yes · R: people are busy and move often · contrast: grandpa knew the whole area, whereas we know only two neighbours — a pity.' },
  ],
  talk: {
    title: 'One minute: the people near me', ar: 'النَّاسُ حَوْلِي',
    text: 'Talk for one minute about the people who live near you: who they are, what they look like and are like, what you do together — and a time a neighbour helped you.',
    routes: {
      core: '30 seconds: two neighbours — who, one appearance detail, one personality adjective each.',
      develop: '60 seconds: add what you do together and a past story.',
      stretch: '90 seconds: compare your area now and in the past, and give an opinion.',
    },
  },
  checkCore: 'used Topic B language: family, description, home and hobbies',
  checkDevelop: 'referred back with pronouns (مَعَهُ · مَعَهَا · مَعَهُمْ) and made agreements',
};

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms using all of Topic B: a Q1 warm-up, decoding a new Q2 task (an email about new neighbours), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Neighbourhood club: new member', ar: 'نَادِي الحَيِّ: عُضْوٌ جَدِيدٌ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'العُنْوَانُ', en: 'Address', tip: 'شَارِعُ … ، رَقْمُ …' },
      { core: true, ar: 'عَدَدُ أَفْرَادِ الأُسْرَةِ', en: 'Family members', tip: 'أَرْبَعَةُ أَفْرَادٍ' },
      { core: true, ar: 'الهِوَايَاتُ', en: 'Hobbies', tip: 'الرَّسْمُ · كُرَةُ القَدَمِ' },
      { core: true, ar: 'كَيْفَ تَسْتَطِيعُ أَنْ تُسَاعِدَ؟', en: 'How you can help', tip: 'أَسْتَطِيعُ أَنْ أُعَلِّمَ …' },
      { ar: 'جُمْلَةٌ: صِفْ نَفْسَكَ', en: 'ONE sentence: describe yourself', tip: 'أَنَا … وَأُحِبُّ …' },
    ],
  },
  Q2: {
    title: 'Question 2: our new neighbours', ar: 'جِيرَانُنَا الجُدُدُ',
    task: 'A new family has moved in next door. Write an email in Arabic to your friend of about 80–90 words. You must include: • who the family are and where they come from • what they look like and what they are like • how your family welcomed them • what you will do with them in the future.',
    phrases: [['انْتَقَلَتْ إِلَى البَيْتِ المُجَاوِرِ عَائِلَةٌ …', 'a … family moved in next door'], ['الأَبُ … وَالأُمُّ … وَأَوْلَادُهُمْ …', 'the father … the mother … and their children …'], ['رَحَّبْنَا بِهِمْ وَ…', 'we welcomed them and …'], ['سَنَدْعُوهُمْ إِلَى …', 'we will invite them to …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ جِيرَانِكَ الجُدُدِ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about your new neighbours (80–90 words).'],
      ['1', 'مَنْ هُمْ؟ وَمِنْ أَيْنَ هُمْ؟', 'Who they are; where from'],
      ['2', 'كَيْفَ يَبْدُونَ؟ وَكَيْفَ شَخْصِيَّاتُهُمْ؟', 'Appearance and personality'],
      ['3', 'كَيْفَ رَحَّبَتْ عَائِلَتُكَ بِهِمْ؟', 'How your family welcomed them'],
      ['4', 'مَاذَا سَتَفْعَلُ مَعَهُمْ فِي المُسْتَقْبَلِ؟', 'What you will do with them'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'مَنْ · مِنْ أَيْنَ → PRESENT + nationality (nisba) agreement', 'كَيْفَ يَبْدُونَ → description: adjectives agree (m. · f. · pl.)', 'كَيْفَ رَحَّبَتْ → PAST, in order', 'سَتَفْعَلُ → FUTURE + with them (مَعَهُمْ)'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'انْتَقَلَتْ إِلَى البَيْتِ المُجَاوِرِ عَائِلَةٌ مِنْ ______ .', en: '1 · A family from … moved in next door.' },
      { ar: 'الأَبُ ______ ، وَالأُمُّ ______ ، وَعِنْدَهُمْ ______ .', en: '2 · The father is …, the mother is …, and they have …' },
      { ar: 'رَحَّبْنَا بِهِمْ، وَأَعْطَيْنَاهُمْ ______ .', en: '3 · We welcomed them and gave them …' },
      { ar: 'سَنَلْعَبُ مَعَهُمْ ______ .', en: '4 · We will play … with them.' },
    ],
    developFrames: [
      { ar: 'جَاؤُوا مِنْ ______ ، لِأَنَّ ______ .', en: '1 · They came from …, because …' },
      { ar: 'ابْنُهُمْ ______ وَ ______ ، أَمَّا بِنْتُهُمْ فَـ ______ .', en: '2 · Their son is … and …, as for their daughter, she is …' },
      { ar: 'أَوَّلًا ______ ، ثُمَّ دَعَوْنَاهُمْ إِلَى ______ .', en: '3 · First …, then we invited them to …' },
      { ar: 'إِذَا ______ ، فَسَنَذْهَبُ مَعَهُمْ ______ .', en: '4 · If …, we will go with them …' },
    ],
    bank: ['جِيرَانٌ جُدُدٌ', 'البَيْتُ المُجَاوِرُ', 'لَطِيفٌ · لَطِيفَةٌ · لُطَفَاءُ', 'شَعْرُهَا · شَعْرُهُ', 'عِنْدَهُمْ', 'رَحَّبْنَا بِهِمْ', 'مَعَهُمْ', 'أَهْلًا وَسَهْلًا بِكُمْ'],
    model: {
      text: `مَرْحَبًا يَا نَادِيَةُ،
كَيْفَ حَالُكِ؟ انْتَقَلَتْ إِلَى البَيْتِ المُجَاوِرِ لَنَا عَائِلَةٌ جَدِيدَةٌ مِنْ تُونُسَ، لِأَنَّ الأَبَ يَعْمَلُ طَبِيبًا فِي مُسْتَشْفَى المَدِينَةِ. الأَبُ طَوِيلٌ وَهَادِئٌ، وَالأُمُّ مَرِحَةٌ وَشَعْرُهَا أَسْوَدُ قَصِيرٌ، وَعِنْدَهُمْ بِنْتٌ فِي عُمْرِي اسْمُهَا رِيمُ، وَهِيَ ذَكِيَّةٌ وَخَجُولَةٌ قَلِيلًا. فِي أَوَّلِ يَوْمٍ رَحَّبْنَا بِهِمْ، وَأَعْطَتْهُمْ أُمِّي كَعْكَةً بِالتَّمْرِ، ثُمَّ دَعَوْنَاهُمْ إِلَى العَشَاءِ يَوْمَ الجُمُعَةِ، فَتَكَلَّمْنَا كَثِيرًا عَنْ تُونُسَ وَبِرِيطَانِيَا. رِيمُ تُحِبُّ الرَّسْمَ مِثْلِي، لِذٰلِكَ سَنَذْهَبُ مَعًا إِلَى نَادِي الفَنِّ كُلَّ يَوْمِ سَبْتٍ، وَسَأُعَرِّفُهَا عَلَى صَدِيقَاتِي.
مَعَ مَحَبَّتِي،
آمِنَةُ`,
      en: '“Hi Nadia, how are you? A new family from Tunisia has moved in next door, because the father works as a doctor at the city hospital. The father is tall and calm, the mother is cheerful with short black hair, and they have a daughter my age called Reem, who is clever and a bit shy. On the first day we welcomed them and my mum gave them a date cake; then we invited them to dinner on Friday and talked a lot about Tunisia and Britain. Reem loves drawing like me, so we will go to art club together every Saturday, and I will introduce her to my friends. Love, Amina.”',
      find: ['انْتَقَلَتْ إِلَى البَيْتِ المُجَاوِرِ', 'وَعِنْدَهُمْ بِنْتٌ', 'رَحَّبْنَا بِهِمْ', 'سَنَذْهَبُ مَعًا'],
    },
  },
  upgrade: [
    { ar: 'جَارُنَا لَطِيفٌ.', en: 'Our neighbour is kind.' },
    { ar: 'جَارُنَا العَجُوزُ لَطِيفٌ، وَيَسْكُنُ وَحْدَهُ مَعَ قِطَّتِهِ البَيْضَاءِ.', en: 'Our elderly neighbour is kind, and lives alone with his white cat.' },
    { ar: 'جَارُنَا العَجُوزُ لَطِيفٌ، لِأَنَّهُ يُعْطِينَا الخُضَارَ مِنْ حَدِيقَتِهِ كُلَّ أُسْبُوعٍ.', en: '… because he gives us vegetables from his garden every week.' },
    { ar: '… لِذٰلِكَ أُسَاعِدُهُ فِي التَّسَوُّقِ، وَفِي رَأْيِي هُوَ مِثْلُ جَدٍّ لِي.', en: '… so I help him with his shopping — in my opinion he is like a grandfather to me.' },
  ],
  builder: [
    { en: 'They have two daughters.', cols: [['عِنْدَهُمْ', 'عِنْدَهُ'], ['بِنْتَانِ', 'بِنْتَيْنِ'], ['صَغِيرَتَانِ', 'صَغِيرٌ']], key: [0, 0, 0], why: 'They have = عِنْدَهُمْ; two daughters = the dual (subject) + agreeing adjective.' },
    { en: 'Their mother is Moroccan and very kind.', cols: [['أُمُّهُمْ', 'أُمُّهُ'], ['مَغْرِبِيَّةٌ', 'مَغْرِبِيٌّ'], ['وَلَطِيفَةٌ جِدًّا', 'وَلَطِيفٌ جِدًّا']], key: [0, 0, 0], why: 'Their = -hum; a woman → feminine adjectives.' },
    { en: 'We play with them at the weekend.', cols: [['نَلْعَبُ', 'لَعِبْنَا'], ['مَعَهُمْ', 'مَعَهُ'], ['فِي نِهَايَةِ الأُسْبُوعِ', 'فِي الأُسْبُوعِ المَاضِي']], key: [0, 0, 0], why: 'A habit → present; with them = مَعَهُمْ.' },
  ],
  errors: [
    { wrong: 'الجِيرَانُ الجُدُدُ لَطِيفٌ.', hint: 'People in the plural.', right: 'الجِيرَانُ الجُدُدُ لُطَفَاءُ.', why: 'Human plural → plural adjective: لُطَفَاءُ.' },
    { wrong: 'بِنْتُهُمْ اسْمُهُ رِيمُ.', hint: 'Whose name?', right: 'بِنْتُهُمْ اسْمُهَا رِيمُ.', why: 'Her name → اسْمُهَا.' },
    { wrong: 'رَحَّبْنَا هُمْ.', hint: 'This verb needs a small word + a pronoun.', right: 'رَحَّبْنَا بِهِمْ.', why: 'رَحَّبَ + bi- + attached pronoun: بِهِمْ.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: a neighbour I will never forget', ar: 'جَارٌ لَا أَنْسَاهُ',
    task: 'Full Q3 title: “People who matter to me”. Today write ONLY the past paragraph: a neighbour (or another person) you will never forget — who they were, what they looked like and were like, one thing that happened, and why they mattered.',
    formula: [
      { ar: 'عِنْدَمَا كُنْتُ صَغِيرًا كَانَتْ جَارَتُنَا أُمُّ عَلِيٍّ مِثْلَ جَدَّتِي.', en: 'T · When I was little our neighbour Umm Ali was like a grandmother.' },
      { ar: 'كَانَتْ قَصِيرَةً وَمَرِحَةً، وَكَانَتْ تَحْكِي لِي القِصَصَ.', en: 'D · She was short and cheerful, and told me stories.' },
      { ar: 'كَانَتْ مُهِمَّةً لِأَنَّ أُمِّي كَانَتْ تَعْمَلُ.', en: 'R · She mattered because my mum was working.' },
      { ar: 'أَشْتَاقُ إِلَيْهَا، وَسَأَزُورُهَا فِي العِيدِ.', en: 'F · I miss her, and I will visit her at Eid.' },
    ],
    phrases: [['عِنْدَمَا كُنْتُ صَغِيرًا …', 'when I was little …'], ['كَانَ / كَانَتْ … وَ…', 'he / she was … and …'], ['كَانَ يَحْكِي لِي … · كَانَتْ تَطْبُخُ لَنَا …', 'he used to tell me … · she used to cook for us …'], ['كَانَ مُهِمًّا لِأَنَّ …', 'he mattered because …'], ['أَشْتَاقُ إِلَيْهِ', 'I miss him']],
    model: {
      text: 'عِنْدَمَا كُنْتُ فِي المَدْرَسَةِ الابْتِدَائِيَّةِ، كَانَ جَارُنَا العَمُّ حَسَنٌ أَهَمَّ شَخْصٍ فِي حَيِّنَا. كَانَ رَجُلًا عَجُوزًا قَصِيرًا، شَعْرُهُ أَبْيَضُ وَعَيْنَاهُ زَرْقَاوَانِ، وَكَانَ صَبُورًا وَكَرِيمًا جِدًّا. كُلَّ يَوْمٍ بَعْدَ المَدْرَسَةِ كَانَ يَجْلِسُ أَمَامَ بَيْتِهِ، وَيُعَلِّمُنِي الشِّطْرَنْجَ، وَيَحْكِي لِي عَنْ حَيَاتِهِ فِي فِلَسْطِينَ. فِي يَوْمٍ مِنَ الأَيَّامِ سَقَطْتُ عَنْ دَرَّاجَتِي، فَحَمَلَنِي إِلَى بَيْتِنَا. كَانَ مُهِمًّا لِي لِأَنَّهُ عَلَّمَنِي الصَّبْرَ. انْتَقَلَ إِلَى بَيْتِ ابْنِهِ قَبْلَ سَنَتَيْنِ، وَأَنَا أَشْتَاقُ إِلَيْهِ كَثِيرًا.',
      en: 'T: when I was at primary school, our neighbour Uncle Hassan was the most important person in our area · D: an old, short man with white hair and blue eyes, very patient and generous; every day after school he sat outside his house, taught me chess and told me about his life in Palestine; one day I fell off my bike and he carried me home · R: he mattered because he taught me patience · F: he moved to his son’s house two years ago, and I miss him a lot.',
      find: ['كَانَ جَارُنَا', 'شَعْرُهُ أَبْيَضُ وَعَيْنَاهُ', 'كَانَ يَجْلِسُ … وَيُعَلِّمُنِي', 'أَشْتَاقُ إِلَيْهِ'],
    },
  },
};
write.Q2.developFrames[1] = { ar: 'ابْنُهُمْ ______ وَ ______ ، أَمَّا بِنْتُهُمْ فَهِيَ ______ .', en: '2 · Their son is … and …, as for their daughter, she is …' };

module.exports = { speak, write };
