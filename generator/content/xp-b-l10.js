'use strict';
/* Exam-practice data · TB-L10 · Topic B Listening and Reading Workshop — the workshops apply the whole of Topic B
   (identity, family, appearance, home, furniture, colours, clothes, hobbies, invitations) to one theme: new neighbours. Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'B', n: 10, short: 'Mixed Topic B: New Neighbours', arShort: 'الجِيرَانُ الجُدُدُ', fileTitle: 'Topic_B_Listening_and_Reading_Workshop', title: 'Topic B mixed practice — new neighbours', ar: 'جِيرَانٌ جُدُدٌ', icon: 'FaPeopleGroup', grammar: 'mixed Topic B: profiles, family, description, home, hobbies, invitations; reference (-hu / -hā / -hum) and agreement' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms using all of Topic B: meet and describe new neighbours, their family, home and hobbies, and invite them — tracking who “he / she / they” refers to.',
  words: [
    w(1, 'جَارٌ', 'a neighbour', [['m.', 'جَارٌ'], ['f.', 'جَارَةٌ'], ['pl.', 'جِيرَانٌ']]),
    w(2, 'انْتَقَلُوا إِلَى …', 'they moved to …', [['he', 'انْتَقَلَ'], ['she', 'انْتَقَلَتْ'], ['we', 'انْتَقَلْنَا']]),
    w(3, 'يَبْدُو …', 'he seems / looks …', [['she', 'تَبْدُو'], ['they', 'يَبْدُونَ']], { tag: 'impressions' }),
    w(4, 'عِنْدَهُمْ …', 'they have …', [['he', 'عِنْدَهُ'], ['she', 'عِنْدَهَا'], ['we', 'عِنْدَنَا']], { tag: 'reference' }),
    w(5, 'أَوْلَادُهُمْ', 'their children', [['his', 'أَوْلَادُهُ'], ['her', 'أَوْلَادُهَا']], { tag: 'reference' }),
    w(6, 'مُرَحِّبٌ', 'welcoming', [['m.', 'مُرَحِّبٌ'], ['f.', 'مُرَحِّبَةٌ'], ['pl.', 'مُرَحِّبُونَ']]),
    w(7, 'أَهْلًا وَسَهْلًا بِكُمْ', 'welcome (to you all)', [['m.', 'بِكَ'], ['f.', 'بِكِ']], { tag: 'greeting' }),
    w(8, 'نَتَعَرَّفُ عَلَى …', 'we get to know …', [['I', 'أَتَعَرَّفُ'], ['past', 'تَعَرَّفْنَا']]),
    w(9, 'يُشْبِهُ', 'he looks like', [['she', 'تُشْبِهُ'], ['they', 'يُشْبِهُونَ']]),
    w(10, 'لَطِيفٌ', 'kind, nice', [['m.', 'لَطِيفٌ'], ['f.', 'لَطِيفَةٌ'], ['pl.', 'لُطَفَاءُ']]),
    w(11, 'مُسَاعَدَةٌ', 'help', [['I help', 'أُسَاعِدُ'], ['can I help?', 'هَلْ أُسَاعِدُكُمْ؟']]),
    w(12, 'تَفَضَّلُوا', 'please come in (pl.)', [['m.', 'تَفَضَّلْ'], ['f.', 'تَفَضَّلِي']], { tag: 'polite' }),
  ],
  words1: { eyebrow: 'Language bank · who is who? (he · she · they)', title: 'Tracking the people', ar: 'مَنْ هُوَ؟ مَنْ هِيَ؟', notes: 'LANGUAGE BANK (2 min) — the reading and listening skill: follow the pronouns. عِنْدَهُ (he has) · عِنْدَهَا (she has) · عِنْدَهُمْ (they have). Ask yourself after every -hu / -hā / -hum: who is it?' },
  words2: { eyebrow: 'Language bank · welcoming and describing (m. · f. · pl.)', title: 'Welcome to the street!', ar: 'أَهْلًا بِكُمْ!', notes: 'LANGUAGE BANK (2 min) — to a family use the plural: أَهْلًا وَسَهْلًا بِكُمْ · تَفَضَّلُوا. Plurals of people: جِيرَانٌ · لُطَفَاءُ · مُرَحِّبُونَ.' },
  checkCore: 'described people (family, looks, home) with the right pronouns',
  checkDevelop: 'kept track of he / she / they and gave an impression with a reason',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'meeting the new neighbour', title: 'Role play A — Welcoming the new neighbour', ar: 'جَارٌ جَدِيدٌ', you: 'a teenager', them: 'your new neighbour',
      tasks: [
        { core: true, ex: 'مَرْحَبًا، نَحْنُ الجِيرَانُ الجُدُدُ.', task: 'Welcome them and introduce yourself.', help: 'أَهْلًا وَسَهْلًا بِكُمْ! أَنَا …', model: 'أَهْلًا وَسَهْلًا بِكُمْ! أَنَا يُوسُفُ، وَأَسْكُنُ فِي البَيْتِ رَقْمِ عَشَرَةٍ.', modelEn: 'Welcome! I’m Yusuf, and I live at number ten.' },
        { core: true, ex: 'مَنْ يَسْكُنُ مَعَكَ؟', task: 'Say who is in your family.', help: 'أَسْكُنُ مَعَ … وَ…', model: 'أَسْكُنُ مَعَ أَبِي وَأُمِّي وَأُخْتِي الصَّغِيرَةِ.', modelEn: 'I live with my dad, my mum and my little sister.' },
        { core: true, ex: 'هَلْ يُوجَدُ مَسْجِدٌ قَرِيبٌ؟', task: 'Say where it is.', help: 'نَعَمْ، المَسْجِدُ … بِجَانِبِ …', model: 'نَعَمْ، المَسْجِدُ فِي آخِرِ الشَّارِعِ، بِجَانِبِ المَخْبَزِ.', modelEn: 'Yes, the mosque is at the end of the street, next to the bakery.' },
        { core: true, ex: 'ابْنِي عُمْرُهُ أَرْبَعَ عَشْرَةَ سَنَةً، وَيُحِبُّ كُرَةَ القَدَمِ.', task: 'Say what you and he could do together.', help: 'رَائِعٌ! نَسْتَطِيعُ أَنْ …', model: 'رَائِعٌ! نَسْتَطِيعُ أَنْ نَلْعَبَ مَعًا فِي الحَدِيقَةِ يَوْمَ السَّبْتِ.', modelEn: 'Great! We can play together in the park on Saturday.' },
        { core: true, unexpected: true, ex: 'هَلْ تُحِبُّ هٰذَا الشَّارِعَ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، لِأَنَّهُ …', model: 'نَعَمْ، لِأَنَّهُ هَادِئٌ، وَالجِيرَانُ لُطَفَاءُ جِدًّا.', modelEn: 'Yes, because it is quiet and the neighbours are very kind.' },
      ],
      girl: 'مَعَكِ · تُحِبِّينَ — if the neighbour has a daughter: ابْنَتِي عُمْرُهَا … وَتُحِبُّ …',
      notes: 'Core: TB-L01 (introduce yourself), L02 (family), L04 (location), L08 (hobbies) in one card. Plural greeting bikum.',
    },
    {
      id: 'B', level: 'Core+', setting: 'helping them move in', title: 'Role play B — Helping with the furniture', ar: 'نُسَاعِدُ الجِيرَانَ', you: 'a helpful neighbour', them: 'the new neighbour',
      tasks: [
        { core: true, ex: 'شُكْرًا لِأَنَّكَ جِئْتَ! أَيْنَ نَضَعُ هٰذِهِ الكَنَبَةَ؟', task: 'Suggest where to put it.', help: 'نَضَعُهَا فِي … أَمَامَ …', model: 'نَضَعُهَا فِي غُرْفَةِ الجُلُوسِ، أَمَامَ التِّلْفَازِ.', modelEn: 'Let’s put it in the living room, in front of the TV.' },
        { core: true, ex: 'وَهٰذِهِ الخِزَانَةُ الكَبِيرَةُ؟', task: 'Say where, and that it is heavy.', help: 'هِيَ ثَقِيلَةٌ … نَحْمِلُهَا إِلَى …', model: 'هِيَ ثَقِيلَةٌ جِدًّا! نَحْمِلُهَا مَعًا إِلَى غُرْفَةِ النَّوْمِ فِي الطَّابِقِ الأَوَّلِ.', modelEn: 'It’s very heavy! Let’s carry it together to the bedroom on the first floor.' },
        { ex: 'مَا رَأْيُكَ فِي لَوْنِ الجُدْرَانِ؟', task: 'Give an opinion on the colour.', help: 'اللَّوْنُ … لٰكِنَّ … أَفْضَلُ', model: 'اللَّوْنُ الأَصْفَرُ جَمِيلٌ، لٰكِنَّ الأَبْيَضَ أَفْضَلُ لِغُرْفَةٍ صَغِيرَةٍ.', modelEn: 'The yellow is nice, but white is better for a small room.' },
        { ex: '… الثَّلَّاجَةُ لَا تَعْمَلُ!', task: 'ASK what the problem is and offer help.', help: 'مَا المُشْكِلَةُ؟ هَلْ …؟', model: 'مَا المُشْكِلَةُ بِالضَّبْطِ؟ هَلْ تُرِيدُ رَقْمَ الفَنِّيِّ الَّذِي أَصْلَحَ ثَلَّاجَتَنَا؟', modelEn: 'What exactly is the problem? Do you want the number of the technician who fixed our fridge?' },
        { unexpected: true, ex: 'تَعَالَ نَشْرَبِ الشَّايَ!', task: 'Accept politely.', help: 'بِكُلِّ سُرُورٍ / شُكْرًا …', model: 'بِكُلِّ سُرُورٍ، شُكْرًا جَزِيلًا!', modelEn: 'With pleasure, thank you very much!' },
      ],
      girl: 'لِأَنَّكِ جِئْتِ · رَأْيُكِ · تُرِيدِينَ · تَعَالَيْ',
      notes: 'Core+: L05 furniture with -hā (naḍaʿuhā, naḥmiluhā), L04 floors, L06 colours as nouns, a relative clause (alladhī aṣlaḥa), L09 polite acceptance.',
    },
    {
      id: 'C', level: 'Develop', setting: 'telling your parent', title: 'Role play C — “What are the new neighbours like?”', ar: 'كَيْفَ الجِيرَانُ الجُدُدُ؟', you: 'a teenager', them: 'your parent, just home from work',
      tasks: [
        { ex: 'هَلْ رَأَيْتَ الجِيرَانَ الجُدُدَ؟', task: 'Say how many and who they are.', help: 'نَعَمْ، هُمْ … : أَبٌ وَأُمٌّ وَ…', model: 'نَعَمْ، هُمْ خَمْسَةٌ: أَبٌ وَأُمٌّ وَثَلَاثَةُ أَوْلَادٍ، وَجَاؤُوا مِنَ المَغْرِبِ.', modelEn: 'Yes, there are five of them: a father, a mother and three children; they came from Morocco.' },
        { ex: 'كَيْفَ شَكْلُ الأَبِ؟', task: 'Describe him (looks + personality).', help: 'هُوَ … وَشَعْرُهُ … وَيَبْدُو …', model: 'هُوَ طَوِيلٌ، وَشَعْرُهُ رَمَادِيٌّ، وَيَبْدُو هَادِئًا وَمُرَحِّبًا.', modelEn: 'He is tall with grey hair, and seems calm and welcoming.' },
        { ex: 'وَالأَوْلَادُ؟', task: 'Describe one child and a hobby.', help: 'ابْنَتُهُمُ الكُبْرَى … تُحِبُّ …', model: 'ابْنَتُهُمُ الكُبْرَى فِي عُمْرِي، وَتُحِبُّ الرَّسْمَ، وَسَتَدْرُسُ فِي مَدْرَسَتِي.', modelEn: 'Their eldest daughter is my age; she loves drawing and will study at my school.' },
        { ex: 'رَائِعٌ! مَاذَا نَفْعَلُ لِنُرَحِّبَ بِهِمْ؟', task: 'Suggest an idea with a reason.', help: 'مَا رَأْيُكَ أَنْ نَدْعُوَهُمْ … لِأَنَّ …', model: 'مَا رَأْيُكَ أَنْ نَدْعُوَهُمْ إِلَى العَشَاءِ يَوْمَ الجُمُعَةِ، لِأَنَّ مَطْبَخَهُمْ لَيْسَ جَاهِزًا بَعْدُ؟', modelEn: 'How about inviting them to dinner on Friday, because their kitchen isn’t ready yet?' },
        { unexpected: true, ex: 'هَلْ سَاعَدْتَهُمُ اليَوْمَ؟', task: 'Answer the unexpected question (past + sequence).', help: 'نَعَمْ، أَوَّلًا … ثُمَّ …', model: 'نَعَمْ، أَوَّلًا حَمَلْتُ الصَّنَادِيقَ مَعَ الأَبِ، ثُمَّ رَكَّبْتُ سَرِيرَ الوَلَدِ الصَّغِيرِ.', modelEn: 'Yes — first I carried boxes with the father, then I put together the little boy’s bed.' },
      ],
      girl: 'رَأَيْتِ · سَاعَدْتِهِمْ · مَا رَأْيُكِ (to a mother)',
      notes: 'Develop: pronoun tracking (shaʿruhu, ibnatuhum, maṭbakhahum, sāʿadtahum), yabdū + accusative, laysa … baʿdu, sequencing.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a community radio show', title: 'Role play D — What makes a good neighbourhood?', ar: 'الحَيُّ الجَيِّدُ', you: 'a young resident', them: 'a community-radio presenter',
      tasks: [
        { ex: 'مَا صِفَاتُ الجَارِ الجَيِّدِ فِي رَأْيِكَ؟', task: 'Give qualities with a relative clause.', help: 'الجَارُ الجَيِّدُ هُوَ الَّذِي …', model: 'الجَارُ الجَيِّدُ هُوَ الَّذِي يَحْتَرِمُ خُصُوصِيَّتَكَ، وَيُسَاعِدُكَ عِنْدَمَا تَحْتَاجُ إِلَيْهِ.', modelEn: 'A good neighbour is one who respects your privacy and helps you when you need them.' },
        { ex: 'هَلْ يَعْرِفُ النَّاسُ جِيرَانَهُمُ اليَوْمَ؟', task: 'Compare past and present.', help: 'كَانَ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَ الجِيرَانُ يَتَبَادَلُونَ الطَّعَامَ وَالزِّيَارَاتِ، أَمَّا اليَوْمَ فَكَثِيرٌ مِنَّا لَا يَعْرِفُ اسْمَ جَارِهِ.', modelEn: 'Neighbours used to exchange food and visits; today many of us don’t know our neighbour’s name.' },
        { ex: 'أَعْطِنَا مِثَالًا مِنْ حَيِّكَ.', task: 'Tell a short past story.', help: 'فِي … عِنْدَمَا … فَـ…', model: 'فِي الشِّتَاءِ المَاضِي، عِنْدَمَا انْقَطَعَتِ الكَهْرَبَاءُ، دَعَتْنَا جَارَتُنَا العَجُوزُ إِلَى بَيْتِهَا، فَتَعَشَّيْنَا عَلَى ضَوْءِ الشُّمُوعِ.', modelEn: 'Last winter, when the power went off, our elderly neighbour invited us to her home and we had dinner by candlelight.' },
        { ex: 'لٰكِنَّ الخُصُوصِيَّةَ مُهِمَّةٌ أَيْضًا!', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ لِكُلِّ أُسْرَةٍ خُصُوصِيَّتَهَا، غَيْرَ أَنَّ التَّحِيَّةَ وَالسُّؤَالَ عَنِ الجَارِ لَا يَضُرَّانِ أَحَدًا.', modelEn: 'It is true every family has its privacy, but greeting and asking after a neighbour harm no one.' },
        { unexpected: true, ex: 'لَوْ نَظَّمْتَ حَدَثًا لِحَيِّكَ، مَاذَا يَكُونُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ نَظَّمْتُ …، لَـ…', model: 'لَوْ نَظَّمْتُ حَدَثًا، لَأَقَمْتُ غَدَاءً فِي الشَّارِعِ، يُحْضِرُ فِيهِ كُلُّ بَيْتٍ طَبَقًا مِنْ بَلَدِهِ.', modelEn: 'If I organised an event, I would hold a street lunch where every house brings a dish from its country.' },
      ],
      girl: 'رَأْيِكِ · حَيِّكِ · نَظَّمْتِ',
      notes: 'Stretch: huwa alladhī, kāna + present vs ammā … fa-, a past story with ʿindamā … fa-, a dual verb (lā yaḍurrāni), law … la- with a relative clause.',
      modelFoot: 'Stretch: a relative clause, past vs present, a story, ṣaḥīḥun anna … ghayra anna and law … la- — all of Topic B.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَنَا وَجِيرَانِي', aim: 'one full sentence per question',
      qs: [
        { q: 'مَنْ جِيرَانُكَ؟', en: 'Who are your neighbours?', start: 'جِيرَانُنَا …', model: 'جِيرَانُنَا أُسْرَةٌ بَاكِسْتَانِيَّةٌ، عِنْدَهُمْ وَلَدَانِ.', modelEn: 'Our neighbours are a Pakistani family; they have two boys.' },
        { q: 'صِفْ أَحَدَ جِيرَانِكَ.', en: 'Describe one of your neighbours.', start: 'جَارُنَا / جَارَتُنَا … هُوَ / هِيَ …', model: 'جَارَتُنَا عَجُوزٌ لَطِيفَةٌ، وَشَعْرُهَا أَبْيَضُ.', modelEn: 'Our neighbour is a kind old lady with white hair.' },
        { q: 'مَا لَوْنُ بَيْتِكُمْ؟', en: 'What colour is your house?', start: 'بَيْتُنَا … وَبَابُهُ …', model: 'بَيْتُنَا أَبْيَضُ، وَبَابُهُ أَزْرَقُ.', modelEn: 'Our house is white, and its door is blue.' },
        { q: 'مَاذَا تَفْعَلُ مَعَ أَصْدِقَائِكَ فِي الحَيِّ؟', en: 'What do you do with friends in your area?', start: 'نَلْعَبُ … / نَذْهَبُ …', model: 'نَلْعَبُ كُرَةَ السَّلَّةِ فِي الحَدِيقَةِ بَعْدَ المَدْرَسَةِ.', modelEn: 'We play basketball in the park after school.' },
        { q: 'هَلْ دَعَوْتَ جِيرَانَكَ إِلَى بَيْتِكُمْ؟', en: 'Have you invited your neighbours home?', start: 'نَعَمْ، دَعَوْنَاهُمْ إِلَى …', model: 'نَعَمْ، دَعَوْنَاهُمْ إِلَى الإِفْطَارِ فِي رَمَضَانَ.', modelEn: 'Yes, we invited them to iftar in Ramadan.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + the right pronoun = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'حَيِّي وَالنَّاسُ فِيهِ', aim: 'two or three sentences, mixing Topic B',
      qs: [
        { q: 'صِفْ شَارِعَكَ وَبُيُوتَهُ.', en: 'Describe your street and its houses.', start: 'شَارِعِي … فِيهِ … البُيُوتُ …', model: 'شَارِعِي طَوِيلٌ وَهَادِئٌ، فِيهِ عِشْرُونَ بَيْتًا، وَالبُيُوتُ قَدِيمَةٌ وَمَصْنُوعَةٌ مِنَ الطُّوبِ الأَحْمَرِ.', modelEn: 'My street is long and quiet, with twenty houses — old ones, made of red brick.' },
        { q: 'هَلْ عِنْدَكَ صَدِيقٌ مِنْ جِيرَانِكَ؟ صِفْهُ.', en: 'Is one of your neighbours your friend? Describe them.', start: 'نَعَمْ، … اسْمُهُ … وَهُوَ …', model: 'نَعَمْ، ابْنُ جِيرَانِنَا اسْمُهُ عَلِيٌّ، وَهُوَ مَرِحٌ، وَنَلْعَبُ أَلْعَابَ الفِيدْيُو مَعًا أَحْيَانًا.', modelEn: 'Yes, our neighbours’ son is called Ali; he’s funny, and we sometimes play video games together.' },
        { q: 'كَيْفَ رَحَّبْتُمْ بِجِيرَانٍ جُدُدٍ؟', en: 'How did you welcome new neighbours?', start: 'أَوَّلًا … ثُمَّ …', model: 'أَوَّلًا أَخَذْنَا لَهُمْ كَعْكَةً، ثُمَّ سَاعَدْنَاهُمْ فِي نَقْلِ الأَثَاثِ.', modelEn: 'First we took them a cake, then helped them move the furniture.' },
        { q: 'مَا الَّذِي تُحِبُّهُ وَمَا الَّذِي لَا تُحِبُّهُ فِي حَيِّكَ؟', en: 'What do you like and dislike about your area?', start: 'أُحِبُّ … لٰكِنِّي لَا أُحِبُّ …', model: 'أُحِبُّ الحَدِيقَةَ وَالمَكْتَبَةَ القَرِيبَتَيْنِ، لٰكِنِّي لَا أُحِبُّ الضَّجِيجَ فِي اللَّيْلِ.', modelEn: 'I like the nearby park and library, but I don’t like the noise at night.' },
        { q: 'أَيْنَ تُرِيدُ أَنْ تَسْكُنَ فِي المُسْتَقْبَلِ؟', en: 'Where do you want to live in future?', start: 'أُرِيدُ أَنْ أَسْكُنَ فِي … لِأَنَّ …', model: 'أُرِيدُ أَنْ أَسْكُنَ فِي حَيٍّ قَرِيبٍ مِنْ أُسْرَتِي، لِأَنِّي أُرِيدُ أَنْ أَزُورَهُمْ كُلَّ أُسْبُوعٍ.', modelEn: 'I want to live in an area near my family, because I want to visit them every week.' },
      ],
      foot: 'Develop: two or three sentences — description, sequencing, a dual adjective (al-qarībatayn) and a reason.',
      modelFoot: 'Description + pronouns + reason + sequence = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الجِيرَةُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'لِمَاذَا يَقُولُ المَثَلُ «الجَارُ قَبْلَ الدَّارِ»؟', en: 'Why does the proverb say “the neighbour before the house”?', start: 'لِأَنَّ … فَمَهْمَا …', model: 'لِأَنَّ الجَارَ السَّيِّئَ يُفْسِدُ أَجْمَلَ بَيْتٍ، فَمَهْمَا كَانَ البَيْتُ وَاسِعًا، لَا تَرْتَاحُ إِذَا كَانَتْ بَيْنَكَ وَبَيْنَ جَارِكَ مَشَاكِلُ.', modelEn: 'Because a bad neighbour spoils the finest house — however spacious it is, you can’t relax if you have problems with your neighbour.' },
        { q: 'هَلِ المُدُنُ الكَبِيرَةُ تَجْعَلُ النَّاسَ أَكْثَرَ وَحْدَةً؟', en: 'Do big cities make people lonelier?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ النَّاسَ فِي المُدُنِ مَشْغُولُونَ، غَيْرَ أَنَّ المَسَاجِدَ وَالنَّوَادِيَ تَجْمَعُهُمْ إِذَا أَرَادُوا.', modelEn: 'It is true city people are busy, but mosques and clubs bring them together if they want.' },
        { q: 'كَيْفَ كَانَتِ العَلَاقَةُ بَيْنَ الجِيرَانِ فِي أَيَّامِ أَجْدَادِكَ؟', en: 'What were neighbour relations like in your grandparents’ day?', start: 'كَانَ الجِيرَانُ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَ الجِيرَانُ يُرَبُّونَ الأَطْفَالَ مَعًا، فَكُلُّ أُمٍّ فِي الحَيِّ أُمٌّ لِلْجَمِيعِ، أَمَّا اليَوْمَ فَتُغْلِقُ كُلُّ أُسْرَةٍ بَابَهَا.', modelEn: 'Neighbours used to raise children together — every mother was everyone’s mother; today each family closes its door.' },
        { q: 'صِفْ جَارًا أَثَّرَ فِي حَيَاتِكَ.', en: 'Describe a neighbour who influenced your life.', start: 'جَارُنَا … الَّذِي … عَلَّمَنِي …', model: 'جَارُنَا الأُسْتَاذُ حَسَنٌ، الَّذِي كَانَ مُعَلِّمًا قَبْلَ تَقَاعُدِهِ، عَلَّمَنِي الشِّطْرَنْجَ وَحُبَّ الكُتُبِ.', modelEn: 'Our neighbour Mr Hassan, who was a teacher before retiring, taught me chess and a love of books.' },
        { q: 'لَوِ انْتَقَلْتَ إِلَى بَلَدٍ جَدِيدٍ، كَيْفَ تَتَعَرَّفُ عَلَى جِيرَانِكَ؟', en: 'If you moved to a new country, how would you get to know your neighbours?', start: 'لَوِ انْتَقَلْتُ …، لَـ…', model: 'لَوِ انْتَقَلْتُ إِلَى بَلَدٍ جَدِيدٍ، لَطَرَقْتُ أَبْوَابَ جِيرَانِي، وَلَقَدَّمْتُ لَهُمْ حَلَوِيَّاتٍ مِنْ بَلَدِي.', modelEn: 'If I moved to a new country, I would knock on my neighbours’ doors and offer them sweets from my country.' },
      ],
      foot: 'Stretch: mahmā, a concession, kāna + present vs ammā … fa-, alladhī kāna, and law … la-.',
      modelFoot: 'Stretch: a proverb explained, ṣaḥīḥun anna … ghayra anna, past vs present, alladhī, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I described people, homes and hobbies in full sentences.' },
    { route: 'core', text: 'I used the plural to a family (bikum, tafaḍḍalū).' },
    { route: 'develop', text: 'I tracked he / she / they (-hu, -hā, -hum) correctly.' },
    { route: 'develop', text: 'I gave an impression (yabdū …) with a reason.' },
    { route: 'stretch', text: 'I compared past and present, conceded or used law … la-.' },
  ],
};
speak.RP[3].tasks[1].help = 'كَانَ … أَمَّا اليَوْمَ فَكَثِيرٌ مِنَّا …';
speak.RP[3].tasks[2].help = 'فِي … عِنْدَمَا … فَتَعَشَّيْنَا …';
speak.RP[3].tasks[4].help = 'لَوْ نَظَّمْتُ …، لَأَقَمْتُ …';
speak.CONV[2].qs[2].start = 'كَانَ الجِيرَانُ … أَمَّا اليَوْمَ فَتُغْلِقُ …';
speak.CONV[2].qs[4].start = 'لَوِ انْتَقَلْتُ …، لَطَرَقْتُ …';

const Q2_CORE = `مَرْحَبًا يَا نَادِيَةُ،
كَيْفَ حَالُكِ؟ عِنْدَنَا جِيرَانٌ جُدُدٌ! انْتَقَلُوا إِلَى البَيْتِ الَّذِي بِجَانِبِ بَيْتِنَا يَوْمَ السَّبْتِ. هُمْ أُسْرَةٌ مَغْرِبِيَّةٌ: أَبٌ وَأُمٌّ وَبِنْتَانِ. البِنْتُ الكُبْرَى اسْمُهَا لَيْلَى، وَهِيَ فِي عُمْرِي. هِيَ طَوِيلَةٌ، وَشَعْرُهَا أَسْوَدُ، وَتُحِبُّ الرَّسْمَ مِثْلِي. أَمْسِ سَاعَدْتُهُمْ فِي تَرْتِيبِ الأَثَاثِ، وَشَرِبْنَا الشَّايَ مَعًا. يَوْمَ الجُمُعَةِ سَنَدْعُوهُمْ إِلَى العَشَاءِ فِي بَيْتِنَا. هَلْ تَأْتِينَ أَنْتِ أَيْضًا؟
مَعَ السَّلَامَةِ،
مَرْيَمُ`;
const Q2_FULL = `عَزِيزَتِي نَادِيَةُ،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَعِنْدِي خَبَرٌ جَمِيلٌ: انْتَقَلَتْ أُسْرَةٌ مَغْرِبِيَّةٌ إِلَى البَيْتِ المُجَاوِرِ لَنَا، الَّذِي بَقِيَ فَارِغًا سَنَةً كَامِلَةً. تَتَكَوَّنُ الأُسْرَةُ مِنْ أَبٍ يَعْمَلُ طَبِيبًا، وَأُمٍّ لَطِيفَةٍ، وَبِنْتَيْنِ. أَمَّا الكُبْرَى، لَيْلَى، فَهِيَ فِي عُمْرِي تَقْرِيبًا؛ طَوِيلَةٌ، شَعْرُهَا أَسْوَدُ مُجَعَّدٌ، وَتَبْدُو خَجُولَةً قَلِيلًا، لٰكِنَّهَا ضَحِكَتْ كَثِيرًا عِنْدَمَا عَرَفَتْ أَنَّنَا نُحِبُّ الرَّسْمَ كِلْتَانَا. أَمْسِ قَضَيْتُ المَسَاءَ أُسَاعِدُهُمْ فِي تَرْتِيبِ غُرْفَتِهَا، ثُمَّ قَدَّمَتْ لَنَا أُمُّهَا شَايًا بِالنَّعْنَاعِ لَذِيذًا. سَنَدْعُوهُمْ إِلَى العَشَاءِ يَوْمَ الجُمُعَةِ، وَسَتَطْبُخُ أُمِّي المَقْلُوبَةَ، وَإِذَا جِئْتِ، فَسَتَتَعَرَّفِينَ عَلَيْهَا!
مَعَ مَحَبَّتِي،
مَرْيَمُ`;
const Q3A_CORE = `أَسْكُنُ فِي شَارِعٍ هَادِئٍ فِي شَمَالِ مَانْشِسْتَرَ. فِي شَارِعِنَا خَمْسَةَ عَشَرَ بَيْتًا، وَأَغْلَبُ البُيُوتِ قَدِيمَةٌ وَمَصْنُوعَةٌ مِنَ الطُّوبِ الأَحْمَرِ. بَيْتُنَا أَبْيَضُ، وَلَهُ حَدِيقَةٌ صَغِيرَةٌ أَمَامَهُ، فِيهَا أَزْهَارٌ حَمْرَاءُ وَصَفْرَاءُ.
جِيرَانُنَا مِنْ بُلْدَانٍ كَثِيرَةٍ. عَلَى اليَمِينِ تَسْكُنُ أُسْرَةٌ صُومَالِيَّةٌ، عِنْدَهُمْ أَرْبَعَةُ أَوْلَادٍ، وَأَلْعَبُ كُرَةَ القَدَمِ مَعَ ابْنِهِمُ الكَبِيرِ كُلَّ سَبْتٍ. عَلَى اليَسَارِ تَسْكُنُ جَارَتُنَا مَارْغَرِيتُ، وَهِيَ عَجُوزٌ لَطِيفَةٌ، شَعْرُهَا أَبْيَضُ، وَتُحِبُّ الزُّهُورَ، وَتَعِيشُ وَحْدَهَا مَعَ قِطَّتِهَا البَيْضَاءِ.
فِي الشِّتَاءِ المَاضِي مَرِضَتْ مَارْغَرِيتُ. أَوَّلًا ذَهَبْتُ إِلَى الصَّيْدَلِيَّةِ وَاشْتَرَيْتُ لَهَا الدَّوَاءَ، ثُمَّ طَبَخَتْ أُمِّي لَهَا الشُّورْبَةَ. كَانَتْ سَعِيدَةً جِدًّا، وَأَعْطَتْنِي كِتَابًا قَدِيمًا هَدِيَّةً. الآنَ أَزُورُهَا كُلَّ أُسْبُوعٍ.
فِي رَأْيِي، الجِيرَانُ مُهِمُّونَ جِدًّا، لِأَنَّهُمْ يُسَاعِدُونَنَا. فِي الصَّيْفِ القَادِمِ سَنُنَظِّمُ حَفْلَةً فِي الشَّارِعِ، وَسَنَدْعُو كُلَّ الجِيرَانِ.`;
const Q3A_FULL = `يَقُولُ المَثَلُ العَرَبِيُّ: «الجَارُ قَبْلَ الدَّارِ»، وَلَمْ أَفْهَمْ مَعْنَاهُ حَتَّى انْتَقَلْنَا إِلَى حَيِّنَا الحَالِيِّ قَبْلَ ثَلَاثِ سَنَوَاتٍ. بَيْتُنَا لَيْسَ كَبِيرًا، وَمَطْبَخُهُ ضَيِّقٌ، لٰكِنَّ جِيرَانَنَا جَعَلُوهُ أَجْمَلَ بَيْتٍ فِي العَالَمِ، وَأَصْبَحُوا جُزْءًا مِنْ حَيَاتِنَا اليَوْمِيَّةِ.
عَلَى يَمِينِنَا تَسْكُنُ أُسْرَةٌ سُورِيَّةٌ؛ الأَبُ نَجَّارٌ مَاهِرٌ صَنَعَ لِي رَفًّا لِكُتُبِي، أَمَّا الأُمُّ فَتُرْسِلُ لَنَا كُلَّ جُمُعَةٍ طَبَقًا مِنَ الكُبَّةِ. وَعَلَى يَسَارِنَا جَارٌ إِنْجِلِيزِيٌّ عَجُوزٌ، يَبْدُو صَارِمًا، لٰكِنَّهُ يَحْكِي لَنَا قِصَصًا مُضْحِكَةً عَنْ شَبَابِهِ، وَيُعَلِّمُ أَخِيَ الصَّغِيرَ الشِّطْرَنْجَ كُلَّ أَحَدٍ.
لَنْ أَنْسَى يَوْمَ وَصَلْنَا؛ كَانَ المَطَرُ شَدِيدًا، وَالأَثَاثُ مُبْتَلًّا فِي الشَّارِعِ، فَخَرَجَ الجِيرَانُ كُلُّهُمْ دُونَ أَنْ نَطْلُبَ، وَحَمَلُوا الصَّنَادِيقَ مَعَنَا حَتَّى آخِرِ قِطْعَةٍ، ثُمَّ دَعَوْنَا إِلَى العَشَاءِ.
صَحِيحٌ أَنَّ لِكُلِّ بَيْتٍ خُصُوصِيَّتَهُ، غَيْرَ أَنَّ الحَيَّ يُصْبِحُ عَائِلَةً كَبِيرَةً عِنْدَمَا يَهْتَمُّ النَّاسُ بِبَعْضِهِمْ. وَإِذَا جَاءَ جِيرَانٌ جُدُدٌ إِلَى شَارِعِنَا، فَسَأَكُونُ أَوَّلَ مَنْ يَطْرُقُ بَابَهُمْ لِيُرَحِّبَ بِهِمْ.`;
const Q3B_FULL = `فِي المُدُنِ الحَدِيثَةِ يَسْكُنُ النَّاسُ قَرِيبِينَ جِدًّا بَعْضُهُمْ مِنْ بَعْضٍ؛ فَقَدْ يَفْصِلُ بَيْنَكَ وَبَيْنَ جَارِكَ جِدَارٌ وَاحِدٌ، وَمَعَ ذٰلِكَ لَا تَعْرِفُ اسْمَهُ، وَلَا تَعْرِفُ إِنْ كَانَ مَرِيضًا أَوْ يَحْتَاجُ إِلَى مُسَاعَدَةٍ.
فِي المَاضِي كَانَ الجِيرَانُ يَتَبَادَلُونَ الطَّعَامَ وَالزِّيَارَاتِ، وَيَحْتَفِلُونَ بِالأَعْيَادِ مَعًا، وَكَانَ الأَطْفَالُ يَلْعَبُونَ فِي الشَّارِعِ تَحْتَ أَعْيُنِ كُلِّ الأُمَّهَاتِ، أَمَّا اليَوْمَ فَيَقْضِي أَغْلَبُنَا وَقْتَهُ خَلْفَ الأَبْوَابِ المُغْلَقَةِ وَأَمَامَ الشَّاشَاتِ.
غَيْرَ أَنَّ التَّغْيِيرَ مُمْكِنٌ. فِي الصَّيْفِ المَاضِي اقْتَرَحَ أَبِي أَنْ نُنَظِّمَ «غَدَاءَ الشَّارِعِ»، فَأَحْضَرَتْ كُلُّ أُسْرَةٍ طَبَقًا مِنْ بَلَدِهَا: بِرْيَانِي بَاكِسْتَانِيٌّ، وَكُسْكُسِي مَغْرِبِيٌّ، وَفَطَائِرُ إِنْجِلِيزِيَّةٌ. وَمُنْذُ ذٰلِكَ اليَوْمِ أَصْبَحَ الجِيرَانُ يُسَلِّمُونَ عَلَى بَعْضِهِمْ وَيَتَعَاوَنُونَ، وَيَحْرُسُ بَعْضُهُمْ بُيُوتَ بَعْضٍ فِي العُطَلِ.
صَحِيحٌ أَنَّ الحَيَاةَ الحَدِيثَةَ سَرِيعَةٌ وَمُتْعِبَةٌ، غَيْرَ أَنَّ ابْتِسَامَةً وَسُؤَالًا بَسِيطًا يُمْكِنُ أَنْ يَبْنِيَا صَدَاقَةً. وَلَوْ خَصَّصَ كُلُّ حَيٍّ يَوْمًا وَاحِدًا فِي السَّنَةِ لِلِقَاءِ الجِيرَانِ، لَأَصْبَحَتْ مُدُنُنَا أَكْثَرَ دِفْئًا وَأَمَانًا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice using all of Topic B: fill in a neighbourhood-welcome form, write an email about your new neighbours, and write an extended piece about your neighbours or about neighbours today.',
  lift: [
    { ar: 'انْتَقَلُوا إِلَى البَيْتِ الَّذِي بِجَانِبِ بَيْتِنَا', en: 'they moved into the house next to ours' },
    { ar: 'تَبْدُو خَجُولَةً، لٰكِنَّهَا …', en: 'she seems shy, but she …' },
    { ar: 'سَنَدْعُوهُمْ إِلَى العَشَاءِ', en: 'we will invite them to dinner' },
  ],
  checkTip: 'Check every pronoun: who is -hu, -hā, -hum? Adjectives agree (ṭawīla, ʿajūz laṭīfa); yabdū / tabdū + accusative; the dual for two daughters (bintāni / bintayni).',
  FORM: {
    title: 'Neighbourhood welcome form', ar: 'اسْتِمَارَةُ التَّرْحِيبِ بِالجِيرَانِ',
    fields: [
      { core: true, ar: 'اسْمُ الأُسْرَةِ الجَدِيدَةِ', en: 'New family’s name', model: 'أُسْرَةُ العَلَوِيِّ', modelEn: 'the Alawi family' },
      { core: true, ar: 'رَقْمُ البَيْتِ', en: 'House number', model: 'اثْنَا عَشَرَ', modelEn: 'twelve' },
      { core: true, ar: 'مِنْ أَيْنَ هُمْ؟', en: 'Where they are from', model: 'مِنَ المَغْرِبِ', modelEn: 'from Morocco' },
      { core: true, ar: 'عَدَدُ أَفْرَادِ الأُسْرَةِ', en: 'Number in the family', model: 'أَرْبَعَةٌ: أَبٌ وَأُمٌّ وَبِنْتَانِ', modelEn: 'four: father, mother, two daughters' },
      { core: true, ar: 'لُغَاتُهُمْ', en: 'Their languages', model: 'العَرَبِيَّةُ وَالفَرَنْسِيَّةُ', modelEn: 'Arabic and French' },
      { core: true, ar: 'هِوَايَةٌ يُحِبُّهَا أَحَدُهُمْ', en: 'A hobby one of them likes', model: 'الرَّسْمُ', modelEn: 'drawing' },
      { ar: 'شَيْءٌ يَحْتَاجُونَ إِلَيْهِ', en: 'Something they need', model: 'رَقْمُ فَنِّيٍّ لِلثَّلَّاجَةِ', modelEn: 'a fridge technician’s number' },
      { ar: 'جُمْلَةٌ: كَيْفَ سَتُرَحِّبُ بِهِمْ؟', en: 'ONE sentence: how you will welcome them', model: 'سَنَدْعُوهُمْ إِلَى العَشَاءِ يَوْمَ الجُمُعَةِ، لِأَنَّ مَطْبَخَهُمْ لَيْسَ جَاهِزًا بَعْدُ.', modelEn: 'We will invite them to dinner on Friday, because their kitchen isn’t ready yet.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with -hum (sanadʿūhum).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 4: the dual bintāni. Every box recycles a Topic B lesson.',
  },
  Q2: {
    short: 'an email about new neighbours', title: 'Question 2: our new neighbours', ar: 'رِسَالَةٌ عَنْ جِيرَانِنَا الجُدُدِ',
    task: 'A new family has moved in next door. Write an email in Arabic to your friend of about 80–90 words. You must include: • who they are and where they are from • a description of one family member (looks and personality) • what you did with them yesterday • your plan to welcome them, and an invitation to your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Agreement and the right pronouns.', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['انْتَقَلُوا إِلَى …', 'they moved to …'], ['هِيَ طَوِيلَةٌ، وَشَعْرُهَا …', 'she is tall, and her hair is …'], ['أَمْسِ سَاعَدْتُهُمْ فِي …', 'yesterday I helped them with …'], ['سَنَدْعُوهُمْ إِلَى …', 'we will invite them to …']],
    rubric: [
      ['task', 'انْتَقَلَتْ أُسْرَةٌ جَدِيدَةٌ إِلَى البَيْتِ المُجَاوِرِ. اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ (٨٠–٩٠ كَلِمَةً).', 'A new family moved in next door: write to your friend (80–90 words).'],
      ['1', 'مَنْ هُمْ؟ وَمِنْ أَيْنَ هُمْ؟', 'Who they are; where from'],
      ['2', 'صِفِي أَحَدَ أَفْرَادِ الأُسْرَةِ (الشَّكْلُ وَالشَّخْصِيَّةُ).', 'Describe one family member'],
      ['3', 'مَاذَا فَعَلْتِ مَعَهُمْ أَمْسِ؟', 'What you did with them yesterday'],
      ['4', 'كَيْفَ سَتُرَحِّبُونَ بِهِمْ؟ ادْعِي صَدِيقَتَكِ.', 'Your plan to welcome them; invite your friend'],
    ],
    qwords: 'مَنْ (who) · مِنْ أَيْنَ (from where) · صِفِي (describe) · مَاذَا (what) · كَيْفَ (how) · ادْعِي (invite) — watch the pronouns: hum · maʿahum · bihim',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'عِنْدَنَا جِيرَانٌ جُدُدٌ مِنْ ______ : ______ .', 'We have new neighbours from …: …'],
      ['2', '______ اسْمُهَا / اسْمُهُ ______ . هِيَ / هُوَ ______ ، وَ ______ .', '… is called … She / he is …, and …'],
      ['3', 'أَمْسِ سَاعَدْتُهُمْ فِي ______ ، ثُمَّ ______ .', 'Yesterday I helped them with …, then …'],
      ['4', 'سَنَدْعُوهُمْ إِلَى ______ . هَلْ تَأْتِينَ؟', 'We will invite them to … Will you come?'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Nadia, how are you? We have new neighbours! They moved into the house next to ours on Saturday. They are a Moroccan family: a father, a mother and two daughters. The elder daughter is called Layla and she is my age. She is tall with black hair, and she loves drawing like me. Yesterday I helped them arrange the furniture, and we drank tea together. On Friday we will invite them to dinner at our house. Will you come too? Goodbye, Maryam.”',
      find: ['الَّذِي بِجَانِبِ بَيْتِنَا', 'بِنْتَانِ', 'سَاعَدْتُهُمْ', 'سَنَدْعُوهُمْ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Nadia, greetings. I have lovely news: a Moroccan family has moved into the house next to ours, which had stood empty for a whole year. The family is a father who works as a doctor, a kind mother and two daughters. As for the elder, Layla, she is about my age: tall, with curly black hair; she seems a little shy, but she laughed a lot when she found out we both love drawing. Yesterday I spent the evening helping them arrange her room, then her mother served us delicious mint tea. We will invite them to dinner on Friday — Mum will cook maqluba — and if you come, you’ll get to know her! With love, Maryam.”',
      find: ['الَّذِي بَقِيَ فَارِغًا', 'أَمَّا الكُبْرَى … فَهِيَ', 'تَبْدُو خَجُولَةً', 'إِذَا جِئْتِ، فَسَتَتَعَرَّفِينَ'],
    },
  },
  Q3: {
    a: { title: 'جِيرَانِي', en: 'My neighbours', bullets: 'صِفْ شَارِعَكَ وَبَيْتَكَ · مَنْ جِيرَانُكَ؟ (الشَّكْلُ وَالشَّخْصِيَّةُ وَالهِوَايَاتُ) · مَوْقِفٌ مَعَ الجِيرَانِ لَا تَنْسَاهُ · رَأْيُكَ وَخُطَطُكَ', bulletsEn: 'Your street and home · who your neighbours are (looks, personality, hobbies) · a moment with neighbours you won’t forget · your opinion and plans' },
    b: { title: 'الجِيرَانُ فِي عَصْرِ المُدُنِ الكَبِيرَةِ', en: 'Neighbours in the age of big cities', bullets: 'هَلْ نَعْرِفُ جِيرَانَنَا؟ · المَاضِي وَالحَاضِرُ · مُبَادَرَةٌ أَوْ تَجْرِبَةٌ · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'Do we know our neighbours? · past and present · an initiative or experience · your opinion and suggestion' },
    plan: [
      'Your street and home — numbers, colours, materials (TB-L04–L06).',
      'The neighbours — family, looks, personality, hobbies (TB-L01–L03, L08); track -hu / -hā / -hum.',
      'A moment — a past story with sequencing (TB-L09): awwalan, thumma, …',
      'Opinion + future — fī raʾyī …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, idhā … fa-sa-, law … la-.',
    ],
    frames: [
      { ar: 'جَارَتُنَا عَجُوزٌ لَطِيفَةٌ، شَعْرُهَا أَبْيَضُ.', en: 'present: our neighbour is a kind old lady with white hair.' },
      { ar: 'أَوَّلًا اشْتَرَيْتُ لَهَا الدَّوَاءَ، ثُمَّ …', en: 'past: first I bought her medicine, then …' },
      { ar: 'سَنَدْعُو كُلَّ الجِيرَانِ.', en: 'future: we will invite all the neighbours.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'A quiet street in north Manchester: fifteen houses, mostly old red brick; ours is white with a small front garden with red and yellow flowers → neighbours from many countries: a Somali family with four children on the right — I play football with their eldest every Saturday; on the left Margaret, a kind old lady with white hair who loves flowers and lives alone with her white cat → last winter Margaret was ill: first I went to the pharmacy for her medicine, then Mum cooked her soup; she was very happy and gave me an old book; now I visit her every week → neighbours matter because they help us; next summer we’ll hold a street party and invite everyone.', find: ['خَمْسَةَ عَشَرَ بَيْتًا', 'عِنْدَهُمْ أَرْبَعَةُ أَوْلَادٍ', 'أَوَّلًا … ثُمَّ', 'سَنَدْعُو'], notes: 'Core model: every Topic B area — home, numbers, colours, materials, nationalities, appearance, a sequenced past story, an opinion and a future plan; pronouns -hum and -hā tracked.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'The proverb “the neighbour before the house” made no sense to me until we moved here three years ago: our house isn’t big and the kitchen is narrow, but our neighbours made it the best house in the world and became part of our daily life → on the right a Syrian family: the father, a skilled carpenter, made me a bookshelf; as for the mother, she sends us a plate of kibbeh every Friday; on the left an elderly Englishman who seems strict but tells us funny stories about his youth and teaches my little brother chess every Sunday → I’ll never forget the day we arrived: pouring rain, wet furniture in the street; every neighbour came out without being asked, carried boxes to the last piece, then invited us to dinner → it is true every house has its privacy, but a neighbourhood becomes a big family when people care; “if new neighbours come to our street, I’ll be the first to knock and welcome them”.', find: ['لَمْ أَفْهَمْ … حَتَّى', 'أَمَّا الأُمُّ فَتُرْسِلُ', 'دُونَ أَنْ نَطْلُبَ', 'إِذَا جَاءَ … فَسَأَكُونُ'], notes: 'Full-mark model: a proverb hook, lam + jussive + ḥattā, laysa + accusative, a relative-style description, ammā … fa-, yabdū + accusative, dūna an, a concession and idhā … fa-sa-.' },
      { which: 'ب', level: 'Full', subtitle: 'neighbours today', text: Q3B_FULL, en: 'In modern cities people live very close — one wall may separate you from your neighbour, yet you don’t know his name or whether he is ill or needs help → in the past neighbours exchanged food and visits, celebrated Eid together, and children played in the street under every mother’s eye; as for today, most of us spend our time behind closed doors and in front of screens → but change is possible: last summer Dad suggested a “street lunch”; every family brought a dish from its country — Pakistani biryani, Moroccan couscous, English pies; since then neighbours greet each other, cooperate and watch each other’s houses in the holidays → it is true modern life is fast and tiring, but a smile and a simple question can build a friendship; “if every area set aside one day a year to meet neighbours, our cities would be warmer and safer”.', find: ['وَمَعَ ذٰلِكَ لَا تَعْرِفُ', 'أَمَّا اليَوْمَ فَيَقْضِي', 'اقْتَرَحَ أَبِي أَنْ نُنَظِّمَ', 'لَوْ خَصَّصَ … لَأَصْبَحَتْ'], notes: 'Full-mark model for the Stretch title: maʿa dhālika, in kāna, kāna + present vs ammā … fa-, iqtaraḥa an + subjunctive, a dual verb (yabniyā), a concession and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, with words from all of Topic B.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: every pronoun (-hu / -hā / -hum) points to the right person.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: ammā … fa-, a concession and law … la- / idhā … fa-sa-.' },
  ],
};

module.exports = { speak, write };
