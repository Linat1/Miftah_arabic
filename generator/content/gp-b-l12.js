'use strict';
/* Guided Practice Rooms · TB-L12 · Topic B Review — mock exam practice. New tasks across all of Topic B. Teacher-made. */
const XP = require('./xp-b-l12');

const base = { topic: 'B', n: 12, short: 'Topic B Review', arShort: 'مُرَاجَعَةُ المِحْوَرِ الثَّانِي', fileTitle: 'Topic_B_Review_and_Four_Skills_Assessment', title: 'Topic B Review — mock exam practice', icon: 'FaClipboardCheck', grammar: 'all of Topic B: pronouns and agreement, iḍāfa and the dual, colours, yūjadu / tūjadu, comparatives, verbal nouns, the past and future, polite responses, concessions' };

const speak = {
  ...base,
  focus: 'The last Topic B practice room before the mock: students run their own speaking practice using everything from the topic — a word warm-up, the answer ladder, two mixed role plays (a homestay application, at a family wedding abroad), a conversation with A-R-E-T across all of Topic B, and a one-minute talk.',
  words: XP.speak.words,
  words1: { title: 'Topic B: me, my family, my home', ar: 'أَنَا وَعَائِلَتِي وَبَيْتِي' },
  words2: { title: 'Topic B: free time, invitations and top-band structures', ar: 'وَقْتُ الفَرَاغِ وَالجُمَلُ المُتَقَدِّمَةُ' },
  ladder: {
    q: 'مَنْ أَهَمُّ شَخْصٍ فِي حَيَاتِكَ؟', qEn: 'Who is the most important person in your life?',
    rungs: [
      { ar: 'أَهَمُّ شَخْصٍ فِي حَيَاتِي هُوَ جَدِّي.', en: 'The most important person in my life is my grandfather.' },
      { ar: 'أَهَمُّ شَخْصٍ فِي حَيَاتِي هُوَ جَدِّي، لِأَنَّهُ عَلَّمَنِي أَشْيَاءَ كَثِيرَةً.', en: '… because he taught me many things.' },
      { ar: '… هُوَ طَوِيلٌ وَشَعْرُهُ أَبْيَضُ، وَهُوَ صَبُورٌ وَمَرِحٌ؛ نَلْعَبُ الشِّطْرَنْجَ مَعًا كُلَّ أُسْبُوعٍ.', en: '… he is tall with white hair, patient and fun; we play chess together every week.' },
      { ar: '… صَحِيحٌ أَنَّهُ يَسْكُنُ بَعِيدًا، غَيْرَ أَنِّي أَتَّصِلُ بِهِ كُلَّ يَوْمٍ، وَفِي الصَّيْفِ سَأَزُورُهُ.', en: '… it’s true he lives far away, but I call him every day, and in summer I will visit him.' },
    ],
  },
  ladderQs: [
    { q: 'صِفْ بَيْتَكَ وَغُرْفَتَكَ.', l1: 'أَسْكُنُ فِي … ؛ يُوجَدُ …', l2: '… وَغُرْفَتِي … لِأَنَّ …', l3: '… كُنَّا نَسْكُنُ … / سَنَنْتَقِلُ …' },
    { q: 'مَاذَا تَفْعَلُ فِي وَقْتِ الفَرَاغِ؟', l1: 'فِي وَقْتِ الفَرَاغِ …', l2: '… لِأَنَّ …', l3: '… وَفِي نِهَايَةِ الأُسْبُوعِ المَاضِي …' },
    { q: 'مَا لَوْنُ مَلَابِسِكَ المُفَضَّلُ؟', l1: 'أُفَضِّلُ …', l2: '… لِأَنَّهُ …', l3: '… مَثَلًا اشْتَرَيْتُ …' },
    { q: 'كَيْفَ احْتَفَلْتَ بِآخِرِ مُنَاسَبَةٍ؟', l1: 'احْتَفَلْتُ بِعِيدِ …', l2: '… أَوَّلًا … ثُمَّ …', l3: '… وَفِي المُنَاسَبَةِ القَادِمَةِ …' },
  ],
  RP: [
    {
      id: '1', level: 'Core · Develop', setting: 'an online interview for a summer homestay', title: 'Role play 1 — A homestay application', ar: 'طَلَبُ إِقَامَةٍ عِنْدَ أُسْرَةٍ', you: 'a student applying', them: 'the homestay coordinator',
      tasks: [
        { ex: 'مَا اسْمُكَ وَمِنْ أَيْنَ أَنْتَ؟', task: 'Give your name and nationality.', plan: 'مَا · مِنْ أَيْنَ ← اسْمِي … وَأَنَا …', model: 'اسْمِي سَامِي، وَأَنَا بِرِيطَانِيٌّ مِنْ أَصْلٍ لِيبِيٍّ.', modelEn: 'My name is Sami, and I am British of Libyan origin.' },
        { ex: 'مَنْ فِي عَائِلَتِكَ؟', task: 'Describe your family briefly.', plan: 'مَنْ ← عِنْدِي … وَ…', model: 'عِنْدِي أَخٌ وَأُخْتَانِ، وَأَنَا الأَكْبَرُ.', modelEn: 'I have a brother and two sisters, and I am the eldest.' },
        { ex: 'صِفْ شَخْصِيَّتَكَ.', task: 'Give two qualities.', plan: 'صِفْ ← أَنَا … وَ…', model: 'أَنَا هَادِئٌ وَمُرَتَّبٌ.', modelEn: 'I am calm and tidy.' },
        { ex: 'مَاذَا تُحِبُّ أَنْ تَفْعَلَ فِي وَقْتِ الفَرَاغِ؟', task: 'Give your hobbies.', plan: 'مَاذَا ← أُحِبُّ …', model: 'أُحِبُّ السِّبَاحَةَ وَالرَّسْمَ.', modelEn: 'I like swimming and drawing.' },
        { unexpected: true, ex: 'هَلْ تُفَضِّلُ غُرْفَةً وَحْدَكَ أَمْ مَعَ طَالِبٍ آخَرَ؟', task: 'Answer the unexpected question with a reason.', plan: 'أَمْ ← أُفَضِّلُ … لِأَنَّ …', model: 'أُفَضِّلُ غُرْفَةً مَعَ طَالِبٍ آخَرَ، لِأَنِّي أُرِيدُ أَنْ أَتَكَلَّمَ العَرَبِيَّةَ أَكْثَرَ.', modelEn: 'I prefer a room with another student, because I want to speak more Arabic.' },
      ],
      girl: 'اسْمُكِ · أَنْتِ · عَائِلَتِكِ · صِفِي شَخْصِيَّتَكِ · تُحِبِّينَ · تَفْعَلِي · تُفَضِّلِينَ — and the Speaker says بِرِيطَانِيَّةٌ · الكُبْرَى · هَادِئَةٌ وَمُرَتَّبَةٌ',
      notes: 'Topic B mix: nationality + origin · family (the dual ukhtāni, al-akbar) · personality · verbal nouns for hobbies · preference + reason.',
    },
    {
      id: '2', level: 'Develop · Stretch', setting: 'a family wedding in Egypt', title: 'Role play 2 — At a family wedding abroad', ar: 'فِي زِفَافٍ عَائِلِيٍّ', you: 'a teenager from Britain', them: 'a relative you have just met',
      tasks: [
        { ex: 'أَهْلًا! أَنْتَ ابْنُ أُخْتِ العَرِيسِ، أَلَيْسَ كَذٰلِكَ؟', task: 'Explain the family relationship and introduce yourself.', model: 'نَعَمْ، أُمِّي أُخْتُ العَرِيسِ الكُبْرَى، وَأَنَا أَسْكُنُ فِي بِرِيطَانِيَا مُنْذُ وِلَادَتِي.', modelEn: 'Yes, my mother is the groom’s older sister, and I have lived in Britain since I was born.' },
        { ex: 'كَيْفَ تَجِدُ الزِّفَافَ؟', task: 'Describe the wedding (colours, music) with an opinion.', model: 'الزِّفَافُ رَائِعٌ! القَاعَةُ بَيْضَاءُ وَذَهَبِيَّةٌ، وَالمُوسِيقَى جَمِيلَةٌ، لٰكِنَّهَا عَالِيَةٌ قَلِيلًا.', modelEn: 'The wedding is wonderful! The hall is white and gold, and the music is lovely, but a bit loud.' },
        { ex: 'هَلْ حَضَرْتَ زِفَافًا فِي بِرِيطَانِيَا؟', task: 'Compare with a wedding you attended (past + comparison).', model: 'نَعَمْ، حَضَرْتُ زِفَافَ صَدِيقِ أَبِي، وَكَانَ أَصْغَرَ وَأَهْدَأَ مِنْ هٰذَا الزِّفَافِ.', modelEn: 'Yes, I attended my dad’s friend’s wedding — it was smaller and quieter than this one.' },
        { ex: 'سَنَزُورُ الأَهْرَامَاتِ غَدًا مَعَ العَائِلَةِ.', task: 'Accept and ASK a question.', model: 'بِكُلِّ سُرُورٍ! فِي أَيِّ سَاعَةٍ سَنَنْطَلِقُ؟', modelEn: 'With pleasure! What time will we set off?' },
        { unexpected: true, ex: 'لَوْ عِشْتَ فِي مِصْرَ، هَلْ تَتَغَيَّرُ حَيَاتُكَ؟', task: 'Answer the unexpected question (law … la- + concession).', model: 'لَوْ عِشْتُ هُنَا، لَرَأَيْتُ عَائِلَتِي أَكْثَرَ؛ صَحِيحٌ أَنَّ الطَّقْسَ حَارٌّ جِدًّا، غَيْرَ أَنَّ النَّاسَ كُرَمَاءُ وَقَرِيبُونَ.', modelEn: 'If I lived here I would see my family more — the weather is very hot, but people are generous and close.' },
      ],
      girl: 'أَنْتِ بِنْتُ أُخْتِ العَرِيسِ · تَجِدِينَ · حَضَرْتِ · عِشْتِ · حَيَاتُكِ',
      notes: 'Topic B mix at Stretch level: family relationships (iḍāfa chains) · colour agreement · comparison (aṣghar wa-ahdaʾ) · accepting · law … la- + ṣaḥīḥun anna … ghayra anna.',
    },
  ],
  convAr: 'مُحَادَثَةٌ عَنْ كُلِّ المِحْوَرِ',
  conv: [
    { route: 'Core', q: 'كَمْ أَخًا وَأُخْتًا عِنْدَكَ؟', en: 'How many brothers and sisters do you have?', push: 'كَمْ عُمْرُهُمْ؟' },
    { route: 'Core', q: 'صِفْ غُرْفَتَكَ.', en: 'Describe your room.', push: 'مَا لَوْنُ الجُدْرَانِ؟' },
    { route: 'Develop', q: 'كَيْفَ تَعَرَّفْتَ عَلَى أَعَزِّ أَصْدِقَائِكَ؟', en: 'How did you meet your best friend?', push: 'وَمَاذَا تَفْعَلَانِ مَعًا؟' },
    { route: 'Develop', q: 'مَاذَا لَبِسْتَ فِي آخِرِ حَفْلَةٍ؟', en: 'What did you wear at the last party?', push: 'وَمِنْ أَيْنَ اشْتَرَيْتَهُ؟' },
    { route: 'Stretch', q: 'هَلِ العَائِلَةُ أَهَمُّ مِنَ الأَصْدِقَاءِ فِي رَأْيِكَ؟', en: 'Is family more important than friends, in your opinion?', push: 'وَلٰكِنْ …؟' },
    { route: 'Stretch', q: 'لَوِ اسْتَطَعْتَ أَنْ تُغَيِّرَ شَيْئًا فِي نَفْسِكَ، مَاذَا تُغَيِّرُ؟', en: 'If you could change one thing about yourself, what would it be?', push: 'وَلِمَاذَا؟' },
  ],
  convModels: [
    { q: 'كَيْفَ تَعَرَّفْتَ عَلَى أَعَزِّ أَصْدِقَائِكَ؟', model: 'تَعَرَّفْتُ عَلَيْهِ فِي نَادِي السِّبَاحَةِ قَبْلَ ثَلَاثِ سَنَوَاتٍ، لِأَنَّنَا كُنَّا فِي المَجْمُوعَةِ نَفْسِهَا؛ الآنَ نَتَدَرَّبُ مَعًا مَرَّتَيْنِ فِي الأُسْبُوعِ، وَسَنُشَارِكُ فِي مُسَابَقَةٍ فِي الشَّهْرِ القَادِمِ.', modelEn: 'A: at swimming club three years ago · R: we were in the same group · E: now we train together twice a week · T: we’ll compete next month.' },
    { q: 'مَاذَا لَبِسْتَ فِي آخِرِ حَفْلَةٍ؟', model: 'لَبِسْتُ قَمِيصًا أَبْيَضَ وَبِنْطَالًا أَزْرَقَ غَامِقًا، لِأَنَّهَا كَانَتْ حَفْلَةَ تَخَرُّجِ أُخْتِي؛ اشْتَرَيْتُهُمَا مِنَ السُّوقِ، وَكَانَا أَرْخَصَ مِنَ المَحَلَّاتِ الكَبِيرَةِ.', modelEn: 'A: a white shirt and dark blue trousers · R: my sister’s graduation · E: bought at the market — cheaper than big shops.' },
    { q: 'هَلِ العَائِلَةُ أَهَمُّ مِنَ الأَصْدِقَاءِ فِي رَأْيِكَ؟', model: 'صَحِيحٌ أَنَّ الأَصْدِقَاءَ يَفْهَمُونَنَا، لِأَنَّهُمْ فِي عُمْرِنَا، غَيْرَ أَنَّ العَائِلَةَ تَبْقَى دَائِمًا؛ مَثَلًا عِنْدَمَا انْتَقَلْنَا إِلَى مَدِينَةٍ جَدِيدَةٍ، تَغَيَّرَ أَصْدِقَائِي، أَمَّا عَائِلَتِي فَبَقِيَتْ مَعِي.', modelEn: 'Concession: friends understand us because they’re our age, but family stays forever · E: when we moved city my friends changed, but my family stayed with me.' },
  ],
  talk: {
    title: 'One minute: me and my world', ar: 'أَنَا وَعَالَمِي',
    text: 'Talk for one minute linking all of Topic B: who you are, your family and friends, your home, your free time — and a celebration you remember.',
    routes: {
      core: '30 seconds: one sentence for each theme (me · family · home · hobbies).',
      develop: '60 seconds: add reasons, a description with agreement, and a past celebration.',
      stretch: '90 seconds: add كُنْتُ … أَمَّا الآنَ …, a concession and a future plan.',
    },
  },
  checkCore: 'answered with Topic B vocabulary and correct agreement',
  checkDevelop: 'used the past, present and future in the same conversation',
};

const write = {
  ...base,
  focus: 'The last Topic B writing room before the mock: a Q1 warm-up, decoding a new Q2 task (an email to a host family), upgrading sentences, writing with a buddy, spotting and fixing the most common Topic B errors, and one Q3 paragraph with the T-D-R-F formula.',
  FORM: {
    title: 'Homestay: student information', ar: 'الإِقَامَةُ عِنْدَ أُسْرَةٍ: مَعْلُومَاتُ الطَّالِبِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', tip: 'First name + family name.' },
      { core: true, ar: 'الجِنْسِيَّةُ', en: 'Nationality', tip: 'Agree: بِرِيطَانِيٌّ / بِرِيطَانِيَّةٌ' },
      { core: true, ar: 'أَفْرَادُ العَائِلَةِ', en: 'Family members', tip: 'أَبِي وَأُمِّي وَأُخْتَانِ' },
      { core: true, ar: 'صِفَتَانِ لِشَخْصِيَّتِكَ', en: 'Two personality adjectives', tip: 'هَادِئٌ · مَرِحٌ' },
      { core: true, ar: 'الهِوَايَاتُ', en: 'Hobbies', tip: 'Verbal nouns: القِرَاءَةُ' },
      { ar: 'جُمْلَةٌ: صِفْ غُرْفَتَكَ فِي البَيْتِ', en: 'ONE sentence: describe your room at home', tip: 'غُرْفَتِي … وَيُوجَدُ فِيهَا …' },
    ],
  },
  Q2: {
    title: 'Question 2: an email to my host family', ar: 'رِسَالَةٌ إِلَى الأُسْرَةِ المُضِيفَةِ',
    task: 'You will stay with an Arabic-speaking host family this summer. Write an email in Arabic of about 80–90 words. You must include: • who you are and a description of yourself • your family and your home • your hobbies and how you spent last weekend • what you hope to do with the host family, and a question.',
    phrases: [['اسْمِي … ، وَأَنَا …', 'my name is …, and I am …'], ['أَسْكُنُ مَعَ … فِي … ؛ يُوجَدُ فِيهِ …', 'I live with … in …; it has …'], ['فِي نِهَايَةِ الأُسْبُوعِ المَاضِي …', 'last weekend …'], ['أَتَمَنَّى أَنْ … مَعَكُمْ', 'I hope to … with you']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى الأُسْرَةِ المُضِيفَةِ (٨٠–٩٠ كَلِمَةً).', 'Write to your host family (80–90 words).'],
      ['1', 'مَنْ أَنْتَ؟ صِفْ نَفْسَكَ.', 'Who you are; describe yourself'],
      ['2', 'صِفْ عَائِلَتَكَ وَبَيْتَكَ.', 'Your family and home'],
      ['3', 'مَا هِوَايَاتُكَ؟ وَكَيْفَ قَضَيْتَ نِهَايَةَ الأُسْبُوعِ المَاضِي؟', 'Hobbies; last weekend'],
      ['4', 'مَاذَا تَتَمَنَّى أَنْ تَفْعَلَ مَعَهُمْ؟ وَاسْأَلْ سُؤَالًا.', 'Your hopes; a question'],
    ],
    decode: ['an email to a HOST FAMILY → polite but warm: الأُسْرَةُ العَزِيزَةُ', 'مَنْ أَنْتَ · صِفْ → PRESENT + adjectives (agreement)', 'صِفْ عَائِلَتَكَ وَبَيْتَكَ → the dual, iḍāfa, يُوجَدُ / تُوجَدُ', 'هِوَايَاتُكَ · كَيْفَ قَضَيْتَ → PRESENT verbal nouns + PAST', 'تَتَمَنَّى · اسْأَلْ → hopes (أَتَمَنَّى أَنْ) + a question'],
    coreFrames: [
      { ar: 'الأُسْرَةُ العَزِيزَةُ،', en: 'Dear family,' },
      { ar: 'اسْمِي ______ ، وَعُمْرِي ______ سَنَةً، وَأَنَا ______ .', en: '1 · My name is …, I am …, and I am …' },
      { ar: 'أَسْكُنُ مَعَ ______ فِي ______ ، وَعِنْدَنَا ______ .', en: '2 · I live with … in …, and we have …' },
      { ar: 'أُحِبُّ ______ ، وَفِي نِهَايَةِ الأُسْبُوعِ المَاضِي ______ .', en: '3 · I like …, and last weekend I …' },
      { ar: 'أَتَمَنَّى أَنْ ______ مَعَكُمْ. هَلْ ______ ؟', en: '4 · I hope to … with you. Do …?' },
    ],
    developFrames: [
      { ar: 'أَنَا ______ وَ ______ ، لٰكِنِّي ______ قَلِيلًا.', en: '1 · I am … and …, but a little …' },
      { ar: 'بَيْتُنَا ______ ، وَتُوجَدُ خَلْفَهُ ______ .', en: '2 · Our house is …, and behind it there is …' },
      { ar: 'أَوَّلًا ______ ، ثُمَّ ______ ، لِأَنَّ ______ .', en: '3 · First …, then …, because …' },
      { ar: 'إِذَا كَانَ مُمْكِنًا، أُرِيدُ أَنْ ______ .', en: '4 · If possible, I would like to …' },
    ],
    bank: ['بِرِيطَانِيٌّ / بِرِيطَانِيَّةٌ', 'عِنْدِي أُخْتَانِ', 'ابْنُ عَمِّي', 'يُوجَدُ · تُوجَدُ', 'السِّبَاحَةُ · الرَّسْمُ', 'قَضَيْتُ', 'أَتَمَنَّى أَنْ', 'هَلْ عِنْدَكُمْ …؟'],
    model: {
      text: `الأُسْرَةُ العَزِيزَةُ،
السَّلَامُ عَلَيْكُمْ! اسْمِي هُدَى، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً، وَأَنَا بِرِيطَانِيَّةٌ مِنْ أَصْلٍ صُومَالِيٍّ. أَنَا مَرِحَةٌ وَاجْتِمَاعِيَّةٌ، لٰكِنِّي خَجُولَةٌ قَلِيلًا فِي البِدَايَةِ. أَسْكُنُ مَعَ وَالِدَيَّ وَأُخْتَيَّ الصَّغِيرَتَيْنِ فِي بَيْتٍ صَغِيرٍ فِي مَدِينَةِ لِيسْتَرَ، وَتُوجَدُ خَلْفَهُ حَدِيقَةٌ فِيهَا وُرُودٌ. أُحِبُّ الرَّسْمَ وَكُرَةَ السَّلَّةِ، وَفِي نِهَايَةِ الأُسْبُوعِ المَاضِي رَسَمْتُ لَوْحَةً لِجَدَّتِي، ثُمَّ لَعِبْتُ مُبَارَاةً مَعَ فَرِيقِي، فَفُزْنَا. أَتَمَنَّى أَنْ أَتَعَلَّمَ الطَّبْخَ العَرَبِيَّ مَعَكُمْ، وَأَنْ أَتَكَلَّمَ العَرَبِيَّةَ كُلَّ يَوْمٍ، لِأَنِّي أُرِيدُ أَنْ أُحَسِّنَ لُغَتِي. هَلْ عِنْدَكُمْ بِنْتٌ فِي عُمْرِي؟
مَعَ أَطْيَبِ التَّحِيَّاتِ،
هُدَى`,
      en: '“Dear family, peace be upon you! My name is Huda, I am fifteen, and I am British of Somali origin. I am cheerful and sociable, but a little shy at first. I live with my parents and my two little sisters in a small house in Leicester, with a garden full of roses behind it. I love drawing and basketball; last weekend I painted a picture for my grandmother, then played a match with my team, and we won. I hope to learn Arab cooking with you and to speak Arabic every day, because I want to improve my language. Do you have a daughter my age? Best wishes, Huda.”',
      find: ['أَنَا بِرِيطَانِيَّةٌ مِنْ أَصْلٍ', 'وَأُخْتَيَّ الصَّغِيرَتَيْنِ', 'وَتُوجَدُ خَلْفَهُ حَدِيقَةٌ', 'أَتَمَنَّى أَنْ أَتَعَلَّمَ'],
    },
  },
  upgrade: [
    { ar: 'عِنْدِي صَدِيقٌ.', en: 'I have a friend.' },
    { ar: 'عِنْدِي صَدِيقٌ مِصْرِيٌّ اسْمُهُ آدَمُ، وَهُوَ طَوِيلٌ وَمَرِحٌ.', en: '… an Egyptian friend called Adam, who is tall and fun.' },
    { ar: 'آدَمُ أَعَزُّ أَصْدِقَائِي، لِأَنَّهُ يُسَاعِدُنِي دَائِمًا، وَنَلْعَبُ التِّنِسَ مَعًا.', en: 'Adam is my best friend, because he always helps me, and we play tennis together.' },
    { ar: '… صَحِيحٌ أَنَّنَا تَشَاجَرْنَا مَرَّةً، غَيْرَ أَنَّ صَدَاقَتَنَا الآنَ أَقْوَى مِنْ قَبْلُ.', en: '… it’s true we argued once, but our friendship is now stronger than before.' },
  ],
  builder: [
    { en: 'My two sisters are tall.', cols: [['أُخْتَايَ', 'أُخْتِي'], ['طَوِيلَتَانِ', 'طَوِيلَةٌ'], ['جِدًّا', 'أَمْسِ']], key: [0, 0, 0], why: 'Two sisters + my = أُخْتَايَ; dual adjective: طَوِيلَتَانِ.' },
    { en: 'There is a red armchair in the living room.', cols: [['يُوجَدُ', 'تُوجَدُ'], ['كُرْسِيٌّ أَحْمَرُ', 'كُرْسِيٌّ حَمْرَاءُ'], ['فِي غُرْفَةِ الجُلُوسِ', 'فِي الغُرْفَةِ الجُلُوسِ']], key: [0, 0, 0], why: 'Masculine → يُوجَدُ … أَحْمَرُ; iḍāfa: غُرْفَةِ الجُلُوسِ.' },
    { en: 'Swimming is more fun than running.', cols: [['السِّبَاحَةُ', 'أَسْبَحُ'], ['أَمْتَعُ', 'مُمْتِعَةٌ'], ['مِنَ الجَرْيِ', 'لِلْجَرْيِ']], key: [0, 0, 0], why: 'Verbal noun السِّبَاحَةُ + comparative أَمْتَعُ مِنْ.' },
  ],
  errors: [
    { wrong: 'عِنْدِي اثْنَانِ إِخْوَةٌ.', hint: 'Two brothers → one word.', right: 'عِنْدِي أَخَوَانِ.', why: 'Two = the dual: أَخَوَانِ.' },
    { wrong: 'الحَقِيبَةُ أَحْمَرُ.', hint: 'Colour agreement.', right: 'الحَقِيبَةُ حَمْرَاءُ.', why: 'Feminine noun → حَمْرَاءُ.' },
    { wrong: 'أَدْعُوكَ إِلَى حَفْلَتِي. — آسِفٌ، لَا أَسْتَطِيعُ آتِي.', hint: 'Look at the verb after أَسْتَطِيعُ.', right: 'آسِفٌ، لَا أَسْتَطِيعُ أَنْ آتِيَ.', why: 'أَسْتَطِيعُ أَنْ + a verb in -a.' },
  ],
  Q3: {
    title: 'Question 3, one paragraph: the best day with my family', ar: 'أَجْمَلُ يَوْمٍ مَعَ عَائِلَتِي',
    task: 'Full Q3 title: “Family, friends and free time”. Today write ONLY the past paragraph: the best day you spent with family or friends — where, who, what you wore, did and ate, why it was special and how you felt. Use Topic B language.',
    formula: [
      { ar: 'أَجْمَلُ يَوْمٍ قَضَيْتُهُ مَعَ عَائِلَتِي كَانَ فِي عِيدِ الأَضْحَى.', en: 'T · The best day with my family was at Eid al-Adha.' },
      { ar: 'لَبِسْتُ ثَوْبًا أَبْيَضَ، وَزُرْنَا أَقَارِبَنَا.', en: 'D · I wore a white thobe and we visited relatives.' },
      { ar: 'كَانَ مُمَيَّزًا لِأَنَّ جَدِّي جَاءَ مِنْ فِلَسْطِينَ.', en: 'R · Special because my grandfather came from Palestine.' },
      { ar: 'شَعَرْتُ بِالسَّعَادَةِ، وَسَنَحْتَفِلُ مَعًا مَرَّةً أُخْرَى.', en: 'F · I felt happy, and we will celebrate together again.' },
    ],
    phrases: [['أَجْمَلُ يَوْمٍ قَضَيْتُهُ …', 'the best day I spent …'], ['لَبِسْتُ … أَبْيَضَ / بَيْضَاءَ', 'I wore a white …'], ['اجْتَمَعَتِ العَائِلَةُ فِي …', 'the family gathered at …'], ['كَانَ مُمَيَّزًا لِأَنَّ …', 'it was special because …'], ['صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it is true that … but …']],
    model: {
      text: 'أَجْمَلُ يَوْمٍ قَضَيْتُهُ مَعَ عَائِلَتِي كَانَ فِي عِيدِ الأَضْحَى المَاضِي. فِي الصَّبَاحِ لَبِسْتُ ثَوْبًا أَبْيَضَ جَدِيدًا، وَصَلَّيْنَا فِي المَسْجِدِ، ثُمَّ اجْتَمَعَتِ العَائِلَةُ كُلُّهَا فِي بَيْتِ عَمِّي الكَبِيرِ الَّذِي تُوجَدُ أَمَامَهُ حَدِيقَةٌ وَاسِعَةٌ. أَكَلْنَا الكَبْسَةَ، وَلَعِبْتُ كُرَةَ القَدَمِ مَعَ أَبْنَاءِ عَمِّي حَتَّى المَسَاءِ. كَانَ ذٰلِكَ اليَوْمُ مُمَيَّزًا لِأَنَّ جَدِّي جَاءَ مِنْ فِلَسْطِينَ لِأَوَّلِ مَرَّةٍ مُنْذُ خَمْسِ سَنَوَاتٍ. صَحِيحٌ أَنَّهُ تَعِبَ مِنَ السَّفَرِ، غَيْرَ أَنَّهُ ضَحِكَ كَثِيرًا مَعَنَا، وَشَعَرْتُ بِسَعَادَةٍ كَبِيرَةٍ.',
      en: 'T: the best day with my family was last Eid al-Adha · D: in the morning I wore a new white thobe and we prayed at the mosque, then the whole family gathered at my uncle’s big house, which has a large garden in front; we ate kabsa and I played football with my cousins until the evening · R: special because my grandfather came from Palestine for the first time in five years · F: he was tired from the journey, but he laughed a lot with us, and I felt very happy.',
      find: ['أَجْمَلُ يَوْمٍ قَضَيْتُهُ', 'لَبِسْتُ ثَوْبًا أَبْيَضَ', 'الَّذِي تُوجَدُ أَمَامَهُ', 'صَحِيحٌ أَنَّهُ … غَيْرَ أَنَّهُ'],
    },
  },
};

module.exports = { speak, write };
