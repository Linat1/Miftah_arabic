'use strict';
/* Guided Practice Rooms · TB-L03 · Appearance and Personality. New tasks. Teacher-made. */
const XP = require('./xp-b-l03');

const base = { topic: 'B', n: 3, short: 'Appearance and Personality', arShort: 'المَظْهَرُ وَالشَّخْصِيَّةُ', fileTitle: 'Appearance_and_Personality', title: 'Appearance and Personality', icon: 'FaUserTie', grammar: 'adjective agreement (m. · f. · pl.); describing features (shaʿruhu aswadu, ʿaynāhā bunniyyatāni); relative pronouns (alladhī · allatī); laysa + accusative' };

const speak = {
  ...base,
  focus: 'Students run their own speaking practice in breakout rooms: a word warm-up, the answer ladder, two new role plays (describing a lost little brother at a shopping centre, choosing a class representative), a topic conversation with A-R-E-T, and a one-minute talk describing a person they admire.',
  words: XP.speak.words,
  words1: { title: 'What people look like', ar: 'المَظْهَرُ' },
  words2: { title: 'What people are like', ar: 'الشَّخْصِيَّةُ' },
  ladder: {
    q: 'صِفْ أُمَّكَ.', qEn: 'Describe your mother.',
    rungs: [
      { ar: 'أُمِّي طَوِيلَةٌ، وَشَعْرُهَا أَسْوَدُ.', en: 'My mother is tall, and her hair is black.' },
      { ar: 'أُمِّي طَوِيلَةٌ وَشَعْرُهَا أَسْوَدُ، وَهِيَ صَبُورَةٌ جِدًّا، لِأَنَّهَا تَسْمَعُنَا دَائِمًا.', en: '… and she is very patient, because she always listens to us.' },
      { ar: '… مَثَلًا عِنْدَمَا أَتَأَخَّرُ فِي وَاجِبَاتِي، لَا تَغْضَبُ، بَلْ تُسَاعِدُنِي.', en: '… for example when I am behind with homework she doesn’t get angry — she helps me.' },
      { ar: '… وَأَتَمَنَّى أَنْ أُصْبِحَ صَبُورًا مِثْلَهَا فِي المُسْتَقْبَلِ؛ فَهِيَ فِي رَأْيِي أَفْضَلُ قُدْوَةٍ.', en: '… I hope to become patient like her — in my opinion she is the best role model.' },
    ],
  },
  ladderQs: [
    { q: 'كَيْفَ يَبْدُو أَعَزُّ أَصْدِقَائِكَ؟', l1: 'هُوَ … وَشَعْرُهُ …', l2: '… وَعَيْنَاهُ …', l3: '… وَيَلْبَسُ … دَائِمًا' },
    { q: 'مَا صِفَاتُكَ الإِيجَابِيَّةُ؟', l1: 'أَنَا …', l2: '… لِأَنِّي …', l3: '… مَثَلًا أَمْسِ …' },
    { q: 'مَا الصِّفَةُ الَّتِي لَا تُحِبُّهَا فِي النَّاسِ؟', l1: 'لَا أُحِبُّ النَّاسَ الَّذِينَ …', l2: '… لِأَنَّ …', l3: '… مَرَّةً …' },
    { q: 'هَلْ تَغَيَّرَتْ شَخْصِيَّتُكَ؟', l1: 'نَعَمْ / لَا، …', l2: '… كُنْتُ … أَمَّا الآنَ …', l3: '… وَفِي المُسْتَقْبَلِ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'a shopping-centre information desk', title: 'Role play 1 — My little brother is lost!', ar: 'أَخِي الصَّغِيرُ ضَاعَ!', you: 'an older brother or sister', them: 'the security officer',
      tasks: [
        { ex: 'لَا تَقْلَقْ. كَمْ عُمْرُ أَخِيكَ؟', task: 'Say his age.', plan: 'كَمْ ← عُمْرُهُ … سَنَوَاتٍ', model: 'عُمْرُهُ سِتُّ سَنَوَاتٍ.', modelEn: 'He is six.' },
        { ex: 'صِفْ لِي شَكْلَهُ.', task: 'Describe his height and hair.', plan: 'صِفْ ← هُوَ … وَشَعْرُهُ …', model: 'هُوَ قَصِيرٌ، وَشَعْرُهُ بُنِّيٌّ وَمُجَعَّدٌ.', modelEn: 'He is short, and his hair is brown and curly.' },
        { ex: 'وَمَاذَا يَلْبَسُ؟', task: 'Say what he is wearing.', plan: 'مَاذَا ← يَلْبَسُ …', model: 'يَلْبَسُ قَمِيصًا أَحْمَرَ وَحِذَاءً أَبْيَضَ.', modelEn: 'He is wearing a red shirt and white shoes.' },
        { ex: 'هَلْ هُوَ خَجُولٌ؟', task: 'Describe his personality.', plan: 'هَلْ ← نَعَمْ / لَا، هُوَ …', model: 'لَا، لَيْسَ خَجُولًا، بَلْ هُوَ اجْتِمَاعِيٌّ جِدًّا.', modelEn: 'No, he is not shy — he is very sociable.' },
        { unexpected: true, ex: 'أَيْنَ رَأَيْتَهُ آخِرَ مَرَّةٍ؟', task: 'Answer the unexpected question.', plan: 'أَيْنَ ← رَأَيْتُهُ فِي …', model: 'رَأَيْتُهُ قُرْبَ مَحَلِّ الأَلْعَابِ قَبْلَ عَشْرِ دَقَائِقَ.', modelEn: 'I saw him near the toy shop ten minutes ago.' },
      ],
      girl: 'لَا تَقْلَقِي · أَخِيكِ · صِفِي · رَأَيْتِهِ',
      notes: 'Language: describing features (shaʿruhu bunniyyun) · colour agreement (qamīṣan aḥmara, ḥidhāʾan abyaḍa) · laysa khajūlan, bal … · past (raʾaytuhu).',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a class meeting', title: 'Role play 2 — Choosing a class representative', ar: 'نَخْتَارُ مُمَثِّلَ الصَّفِّ', you: 'a student who nominates a friend', them: 'the form tutor',
      tasks: [
        { ex: 'مَنْ تَقْتَرِحُ لِيَكُونَ مُمَثِّلَ الصَّفِّ؟', task: 'Name a classmate and describe them briefly.', model: 'أَقْتَرِحُ زَمِيلَتِي سَارَةَ؛ هِيَ الطَّالِبَةُ الَّتِي تَجْلِسُ فِي الصَّفِّ الأَوَّلِ.', modelEn: 'I suggest my classmate Sara — she’s the student who sits in the front row.' },
        { ex: 'لِمَاذَا هِيَ مُنَاسِبَةٌ؟', task: 'Give two qualities with examples.', model: 'لِأَنَّهَا مَسْؤُولَةٌ وَعَادِلَةٌ؛ مَثَلًا، سَاعَدَتِ الطُّلَّابَ الجُدُدَ فِي أَوَّلِ أُسْبُوعٍ.', modelEn: 'Because she is responsible and fair — for example, she helped the new students in the first week.' },
        { ex: 'هَلْ عِنْدَهَا صِفَةٌ سَلْبِيَّةٌ؟', task: 'Admit a weakness, then balance it.', model: 'هِيَ عَنِيدَةٌ قَلِيلًا أَحْيَانًا، لٰكِنَّهَا تَسْمَعُ رَأْيَ الآخَرِينَ فِي النِّهَايَةِ.', modelEn: 'She is a little stubborn sometimes, but in the end she listens to others.' },
        { ex: 'سَنُصَوِّتُ يَوْمَ الجُمُعَةِ.', task: 'ASK a question about the vote.', model: 'وَهَلْ يُمْكِنُ أَنْ تَتَكَلَّمَ سَارَةُ أَمَامَ الصَّفِّ قَبْلَ التَّصْوِيتِ؟', modelEn: 'And can Sara speak in front of the class before the vote?' },
        { unexpected: true, ex: 'وَأَنْتَ، لِمَاذَا لَا تُرِيدُ أَنْ تَكُونَ المُمَثِّلَ؟', task: 'Answer the unexpected question (yourself + reason).', model: 'لِأَنِّي خَجُولٌ قَلِيلًا أَمَامَ النَّاسِ، وَلَوْ كُنْتُ أَكْثَرَ ثِقَةً، لَتَرَشَّحْتُ!', modelEn: 'Because I am a bit shy in front of people — if I were more confident, I would stand!' },
      ],
      girl: 'تَقْتَرِحِينَ · أَنْتِ · تُرِيدِينَ — and the Speaker says خَجُولَةٌ',
      notes: 'Language: relative allatī · feminine adjectives (masʾūla, ʿādila, ʿanīda) · example with mathalan + past · lākinna to balance · law … la- (Stretch).',
    },
  ],
  convAr: 'المَظْهَرُ وَالشَّخْصِيَّةُ',
  conv: [
    { route: 'Core', q: 'صِفْ نَفْسَكَ.', en: 'Describe yourself.', push: 'وَشَعْرُكَ؟' },
    { route: 'Core', q: 'مَنْ أَطْوَلُ شَخْصٍ فِي عَائِلَتِكَ؟', en: 'Who is the tallest person in your family?', push: 'وَالأَقْصَرُ؟' },
    { route: 'Develop', q: 'مَا الصِّفَاتُ الَّتِي تُحِبُّهَا فِي الصَّدِيقِ؟', en: 'What qualities do you like in a friend?', push: 'مَثَلًا؟' },
    { route: 'Develop', q: 'صِفْ مُعَلِّمًا أَعْجَبَكَ.', en: 'Describe a teacher you liked.', push: 'لِمَاذَا أَعْجَبَكَ؟' },
    { route: 'Stretch', q: 'هَلِ المَظْهَرُ مُهِمٌّ أَكْثَرَ مِنَ اللَّازِمِ اليَوْمَ؟', en: 'Does appearance matter too much today?', push: 'وَعَلَى الإِنْتَرْنِتْ؟' },
    { route: 'Stretch', q: 'مَنِ الشَّخْصُ الَّذِي تُرِيدُ أَنْ تُشْبِهَهُ؟', en: 'Who would you like to be like?', push: 'لِمَاذَا؟' },
  ],
  convModels: [
    { q: 'مَا الصِّفَاتُ الَّتِي تُحِبُّهَا فِي الصَّدِيقِ؟', model: 'أُحِبُّ الصَّدِيقَ الصَّادِقَ وَالمَرِحَ، لِأَنِّي أَثِقُ بِهِ وَأَضْحَكُ مَعَهُ؛ مَثَلًا صَدِيقِي عَلِيٌّ قَالَ لِي الحَقِيقَةَ مَرَّةً عِنْدَمَا أَخْطَأْتُ، وَسَأَبْقَى صَدِيقَهُ دَائِمًا.', modelEn: 'A: honest and fun · R: I trust him and laugh with him · E: Ali once told me the truth when I was wrong · T: I will always stay his friend.' },
    { q: 'صِفْ مُعَلِّمًا أَعْجَبَكَ.', model: 'أَعْجَبَتْنِي مُعَلِّمَةُ الرِّيَاضِيَّاتِ فِي الصَّفِّ السَّابِعِ؛ كَانَتْ قَصِيرَةً وَتَلْبَسُ نَظَّارَةً، وَكَانَتْ صَارِمَةً لٰكِنَّهَا عَادِلَةٌ، لِذٰلِكَ أَحْبَبْتُ الرِّيَاضِيَّاتِ.', modelEn: 'A: my Year 7 maths teacher · E: short, wore glasses · R: strict but fair — so I came to love maths.' },
    { q: 'هَلِ المَظْهَرُ مُهِمٌّ أَكْثَرَ مِنَ اللَّازِمِ اليَوْمَ؟', model: 'فِي رَأْيِي نَعَمْ، لِأَنَّ الشَّبَابَ يُقَارِنُونَ أَنْفُسَهُمْ بِالصُّوَرِ عَلَى الإِنْتَرْنِتْ؛ صَحِيحٌ أَنَّ المَظْهَرَ مُهِمٌّ فِي المُقَابَلَاتِ، غَيْرَ أَنَّ الشَّخْصِيَّةَ أَهَمُّ بِكَثِيرٍ.', modelEn: 'Opinion: yes · R: young people compare themselves with online photos · concession: appearance matters in interviews, but personality matters far more.' },
  ],
  talk: {
    title: 'One minute: a person I admire', ar: 'شَخْصٌ أُعْجَبُ بِهِ',
    text: 'Talk for one minute about a person you admire: what they look like, their personality with examples, something they did — and why they inspire you.',
    routes: {
      core: '30 seconds: three appearance details and two personality adjectives (with agreement).',
      develop: '60 seconds: add an example of their personality (past) and الَّذِي / الَّتِي.',
      stretch: '90 seconds: add a weakness (لَيْسَ … بَلْ …), an opinion and how you want to be like them.',
    },
    phrases: [['أُعْجَبُ بِـ … لِأَنَّ …', 'I admire … because …'], ['هُوَ / هِيَ … وَشَعْرُهُ / شَعْرُهَا …', 'he / she is … and his / her hair is …'], ['مَثَلًا، مَرَّةً …', 'for example, once …'], ['أُرِيدُ أَنْ أَكُونَ مِثْلَهُ', 'I want to be like him']],
  },
  checkCore: 'made adjectives agree (طَوِيلٌ / طَوِيلَةٌ · أَحْمَرُ / حَمْرَاءُ)',
  checkDevelop: 'used الَّذِي / الَّتِي or لَيْسَ … بَلْ …',
};
speak.talk.phrases[0] = ['أُعْجَبُ بِأَخِي لِأَنَّ …', 'I admire my brother because …'];

const write = {
  ...base,
  focus: 'Students practise the writing process in breakout rooms: a Q1 warm-up, decoding a new Q2 task (describing a new classmate to a friend), upgrading sentences, writing with a buddy, spotting and fixing errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Drama club audition form', ar: 'اسْتِمَارَةُ تَجْرِبَةِ الأَدَاءِ فِي نَادِي المَسْرَحِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'الطُّولُ', en: 'Height', tip: 'طَوِيلٌ · مُتَوَسِّطُ الطُّولِ' },
      { core: true, ar: 'لَوْنُ الشَّعْرِ', en: 'Hair colour', tip: 'أَسْوَدُ · بُنِّيٌّ · أَشْقَرُ' },
      { core: true, ar: 'لَوْنُ العَيْنَيْنِ', en: 'Eye colour', tip: 'بُنِّيَّتَانِ · زَرْقَاوَانِ' },
      { core: true, ar: 'ثَلَاثُ صِفَاتٍ لِشَخْصِيَّتِكَ', en: 'Three personality adjectives', tip: 'مَرِحٌ · شُجَاعٌ · صَبُورٌ' },
      { ar: 'جُمْلَةٌ: أَيَّ دَوْرٍ تُرِيدُ؟ وَلِمَاذَا؟', en: 'ONE sentence: which role and why?', tip: 'أُرِيدُ دَوْرَ … لِأَنِّي …' },
    ],
  },
  Q2: {
    title: 'Question 2: a new student in my class', ar: 'طَالِبٌ جَدِيدٌ فِي صَفِّي',
    task: 'A new student has joined your class. Write an email in Arabic to your friend of about 80–90 words. You must include: • where the new student is from and what they look like • what their personality is like, with an example • what happened on their first day • whether you think you will become friends, and why.',
    phrases: [['انْضَمَّ إِلَى صَفِّنَا طَالِبٌ جَدِيدٌ …', 'a new student joined our class …'], ['شَعْرُهُ … وَعَيْنَاهُ …', 'his hair is … and his eyes are …'], ['هُوَ لَيْسَ … بَلْ …', 'he is not … but rather …'], ['أَظُنُّ أَنَّنَا سَنُصْبِحُ …', 'I think we will become …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ طَالِبٍ جَدِيدٍ فِي صَفِّكَ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about a new student (80–90 words).'],
      ['1', 'مِنْ أَيْنَ هُوَ؟ وَكَيْفَ يَبْدُو؟', 'Where from; what they look like'],
      ['2', 'كَيْفَ شَخْصِيَّتُهُ؟ أَعْطِ مِثَالًا.', 'Personality, with an example'],
      ['3', 'مَاذَا حَدَثَ فِي يَوْمِهِ الأَوَّلِ؟', 'What happened on the first day'],
      ['4', 'هَلْ سَتُصْبِحَانِ صَدِيقَيْنِ؟ وَلِمَاذَا؟', 'Will you become friends, and why'],
    ],
    decode: ['an email to a FRIEND → informal greeting and closing', 'مِنْ أَيْنَ · كَيْفَ يَبْدُو → PRESENT description + agreement', 'كَيْفَ شَخْصِيَّتُهُ · أَعْطِ مِثَالًا → adjectives + an example (مَثَلًا)', 'مَاذَا حَدَثَ → PAST', 'سَتُصْبِحَانِ … وَلِمَاذَا → FUTURE + a reason'],
    coreFrames: [
      { ar: 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', en: 'Hello …, how are you?' },
      { ar: 'فِي صَفِّي طَالِبٌ جَدِيدٌ مِنْ ______ ، اسْمُهُ ______ .', en: '1 · In my class there is a new student from …, called …' },
      { ar: 'هُوَ ______ ، وَشَعْرُهُ ______ .', en: '1 · He is …, and his hair is …' },
      { ar: 'هُوَ ______ جِدًّا؛ مَثَلًا ______ .', en: '2 · He is very …; for example …' },
      { ar: 'فِي يَوْمِهِ الأَوَّلِ ______ .', en: '3 · On his first day …' },
      { ar: 'أَظُنُّ أَنَّنَا سَنُصْبِحُ صَدِيقَيْنِ، لِأَنَّ ______ .', en: '4 · I think we will become friends, because …' },
    ],
    developFrames: [
      { ar: 'انْضَمَّ إِلَى صَفِّنَا طَالِبٌ جَدِيدٌ وَصَلَ مِنْ ______ ، وَهُوَ ______ .', en: '1 · A new student who came from … joined our class; he is …' },
      { ar: 'لَيْسَ ______ ، بَلْ ______ .', en: '2 · He is not …, but rather …' },
      { ar: 'عِنْدَمَا دَخَلَ الصَّفَّ، ______ ، ثُمَّ ______ .', en: '3 · When he came into class, …, then …' },
      { ar: 'نُحِبُّ الأَشْيَاءَ نَفْسَهَا، مِثْلَ ______ ، لِذٰلِكَ ______ .', en: '4 · We like the same things, like …, so …' },
    ],
    bank: ['طَوِيلٌ · قَصِيرٌ', 'شَعْرُهُ أَسْوَدُ', 'عَيْنَاهُ بُنِّيَّتَانِ', 'يَلْبَسُ نَظَّارَةً', 'خَجُولٌ · لَطِيفٌ', 'ذَكِيٌّ', 'الَّذِي · الَّتِي', 'لَيْسَ … بَلْ …'],
    model: {
      text: `مَرْحَبًا يَا عُمَرُ،
انْضَمَّ إِلَى صَفِّنَا هٰذَا الأُسْبُوعَ طَالِبٌ جَدِيدٌ اسْمُهُ كَرِيمٌ، وَهُوَ مِنَ الجَزَائِرِ. كَرِيمٌ طَوِيلٌ وَنَحِيفٌ، وَشَعْرُهُ أَسْوَدُ وَقَصِيرٌ، وَعَيْنَاهُ خَضْرَاوَانِ، وَيَلْبَسُ نَظَّارَةً. فِي البِدَايَةِ ظَنَنْتُهُ مَغْرُورًا، لٰكِنَّهُ لَيْسَ مَغْرُورًا، بَلْ خَجُولٌ قَلِيلًا؛ مَثَلًا، لَا يَتَكَلَّمُ كَثِيرًا فِي الصَّفِّ، لٰكِنَّهُ يُسَاعِدُ الجَمِيعَ فِي الرِّيَاضِيَّاتِ. فِي يَوْمِهِ الأَوَّلِ ضَاعَ فِي المَدْرَسَةِ، فَأَخَذْتُهُ إِلَى المَقْصَفِ، وَأَكَلْنَا الغَدَاءَ مَعًا، وَتَكَلَّمْنَا عَنْ كُرَةِ القَدَمِ. أَظُنُّ أَنَّنَا سَنُصْبِحُ صَدِيقَيْنِ، لِأَنَّنَا نُحِبُّ الفَرِيقَ نَفْسَهُ، وَسَنَلْعَبُ مَعًا يَوْمَ السَّبْتِ!
إِلَى اللِّقَاءِ،
يُوسُفُ`,
      en: '“Hi Omar, this week a new student called Karim joined our class; he is from Algeria. Karim is tall and thin, with short black hair and green eyes, and he wears glasses. At first I thought he was arrogant, but he isn’t — he is a bit shy; for example, he doesn’t talk much in class, but he helps everyone with maths. On his first day he got lost in the school, so I took him to the canteen, we had lunch together and talked about football. I think we will become friends, because we support the same team, and we will play together on Saturday! See you, Yusuf.”',
      find: ['انْضَمَّ إِلَى صَفِّنَا', 'عَيْنَاهُ خَضْرَاوَانِ', 'لَيْسَ مَغْرُورًا، بَلْ', 'أَظُنُّ أَنَّنَا سَنُصْبِحُ'],
    },
  },
  upgrade: [
    { ar: 'أُخْتِي لَطِيفَةٌ.', en: 'My sister is kind.' },
    { ar: 'أُخْتِي الكُبْرَى لَطِيفَةٌ وَمَرِحَةٌ، وَشَعْرُهَا طَوِيلٌ وَبُنِّيٌّ.', en: 'My older sister is kind and fun, with long brown hair.' },
    { ar: 'أُخْتِي الكُبْرَى لَطِيفَةٌ، لِأَنَّهَا تُسَاعِدُنِي دَائِمًا فِي وَاجِبَاتِي.', en: '… because she always helps me with homework.' },
    { ar: '… وَهِيَ لَيْسَتْ صَارِمَةً مِثْلَ أَبِي، بَلْ صَبُورَةٌ جِدًّا!', en: '… and she isn’t strict like my dad — she is very patient!' },
  ],
  builder: [
    { en: 'Her eyes are blue.', cols: [['عَيْنَاهَا', 'عَيْنَاهُ'], ['زَرْقَاوَانِ', 'أَزْرَقُ'], ['وَجَمِيلَتَانِ', 'وَجَمِيلٌ']], key: [0, 0, 0], why: 'Her → -hā; two eyes → dual feminine adjectives: زَرْقَاوَانِ وَجَمِيلَتَانِ.' },
    { en: 'He is not shy, but sociable.', cols: [['هُوَ لَيْسَ', 'هِيَ لَيْسَتْ'], ['خَجُولًا', 'خَجُولٌ'], ['بَلْ اجْتِمَاعِيٌّ', 'لِأَنَّهُ اجْتِمَاعِيٌّ']], key: [0, 0, 0], why: 'لَيْسَ + accusative: خَجُولًا; “but rather” = بَلْ.' },
    { en: 'The girl who wears glasses is my cousin.', cols: [['البِنْتُ الَّتِي', 'البِنْتُ الَّذِي'], ['تَلْبَسُ نَظَّارَةً', 'يَلْبَسُ نَظَّارَةً'], ['بِنْتُ عَمِّي', 'ابْنُ عَمِّي']], key: [0, 0, 0], why: 'A girl → الَّتِي and تَلْبَسُ.' },
  ],
  errors: [
    { wrong: 'أُمِّي طَوِيلٌ وَصَبُورٌ.', hint: 'Agreement with a woman.', right: 'أُمِّي طَوِيلَةٌ وَصَبُورَةٌ.', why: 'A woman → feminine adjectives.' },
    { wrong: 'هُوَ لَيْسَ طَوِيلٌ.', hint: 'لَيْسَ changes the ending.', right: 'هُوَ لَيْسَ طَوِيلًا.', why: 'After لَيْسَ the adjective is accusative: طَوِيلًا.' },
    { wrong: 'الوَلَدُ الَّتِي يَجْلِسُ هُنَاكَ أَخِي.', hint: 'Which relative pronoun for a boy?', right: 'الوَلَدُ الَّذِي يَجْلِسُ هُنَاكَ أَخِي.', why: 'A boy → الَّذِي.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: someone who changed my opinion', ar: 'شَخْصٌ غَيَّرَ رَأْيِي',
    task: 'Full Q3 title: “People in my life”. Today write ONLY the past paragraph: someone you first judged by their appearance, then discovered their real personality — what happened, what you learnt, and how you felt.',
    formula: [
      { ar: 'فِي السَّنَةِ المَاضِيَةِ جَاءَ إِلَى حَيِّنَا جَارٌ جَدِيدٌ.', en: 'T · Last year a new neighbour came to our area.' },
      { ar: 'كَانَ يَبْدُو صَارِمًا، لٰكِنَّهُ سَاعَدَنَا كَثِيرًا.', en: 'D · He looked strict, but he helped us a lot.' },
      { ar: 'تَغَيَّرَ رَأْيِي لِأَنِّي عَرَفْتُ قَلْبَهُ.', en: 'R · My opinion changed because I got to know his heart.' },
      { ar: 'تَعَلَّمْتُ أَلَّا أَحْكُمَ عَلَى النَّاسِ بِسُرْعَةٍ.', en: 'F · I learnt not to judge people quickly.' },
    ],
    phrases: [['فِي البِدَايَةِ ظَنَنْتُ أَنَّهُ …', 'at first I thought he was …'], ['كَانَ يَبْدُو …', 'he looked …'], ['لٰكِنْ فِي يَوْمٍ مِنَ الأَيَّامِ …', 'but one day …'], ['اكْتَشَفْتُ أَنَّهُ …', 'I discovered that he …'], ['تَعَلَّمْتُ أَلَّا …', 'I learnt not to …']],
    model: {
      text: 'فِي السَّنَةِ المَاضِيَةِ جَاءَتْ إِلَى مَدْرَسَتِنَا مُعَلِّمَةُ عُلُومٍ جَدِيدَةٌ، وَكَانَتْ تَبْدُو صَارِمَةً جِدًّا، لِأَنَّهَا لَا تَبْتَسِمُ أَبَدًا. فِي البِدَايَةِ ظَنَنْتُ أَنَّهَا لَا تُحِبُّ الطُّلَّابَ، فَكُنْتُ أَخَافُ مِنْهَا. لٰكِنْ فِي يَوْمٍ مِنَ الأَيَّامِ رَسَبْتُ فِي امْتِحَانٍ، فَبَقِيَتْ مَعِي بَعْدَ المَدْرَسَةِ سَاعَةً كَامِلَةً، وَشَرَحَتْ لِي الدَّرْسَ بِصَبْرٍ. اكْتَشَفْتُ أَنَّهَا لَطِيفَةٌ وَكَرِيمَةٌ، لٰكِنَّهَا خَجُولَةٌ فَقَطْ. تَعَلَّمْتُ أَلَّا أَحْكُمَ عَلَى النَّاسِ مِنْ مَظْهَرِهِمْ، وَالآنَ هِيَ مُعَلِّمَتِي المُفَضَّلَةُ.',
      en: 'T: last year a new science teacher came to our school; she looked very strict because she never smiled · D: at first I thought she didn’t like students, so I was afraid of her; but one day I failed a test and she stayed with me after school for a whole hour, explaining the lesson patiently · R: I discovered she was kind and generous — just shy · F: I learnt not to judge people by their appearance; now she is my favourite teacher.',
      find: ['كَانَتْ تَبْدُو صَارِمَةً', 'فِي البِدَايَةِ ظَنَنْتُ', 'اكْتَشَفْتُ أَنَّهَا', 'تَعَلَّمْتُ أَلَّا أَحْكُمَ'],
    },
  },
};
write.builder[1].cols[2] = ['بَلِ اجْتِمَاعِيٌّ', 'لِأَنَّهُ اجْتِمَاعِيٌّ'];

module.exports = { speak, write };
