'use strict';
/* Exam-practice data · TB-L04 · My Home, Rooms and Garden (يُوجَدُ / تُوجَدُ; demonstratives; locative prepositions). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'B', n: 4, short: 'My Home, Rooms and Garden', arShort: 'بَيْتِي', fileTitle: 'My_Home_Rooms_and_Garden', title: 'My Home, Rooms and Garden', ar: 'بَيْتِي وَغُرَفُهُ وَحَدِيقَتُهُ', icon: 'FaHouse', grammar: 'yūjadu / tūjadu; demonstratives (hādhā / hādhihi); locative prepositions' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: describe where you live, the rooms and the garden — what there is (yūjadu / tūjadu), where things are (fawqa, bijānibi, amāma) — and your dream home.',
  words: [
    w(1, 'أَسْكُنُ فِي …', 'I live in …', [['he', 'يَسْكُنُ'], ['she', 'تَسْكُنُ'], ['we', 'نَسْكُنُ']]),
    w(2, 'بَيْتٌ · شَقَّةٌ', 'a house · a flat', [['pl.', 'بُيُوتٌ · شُقَقٌ']]),
    w(3, 'غُرْفَةٌ', 'a room', [['sg.', 'غُرْفَةٌ'], ['pl.', 'غُرَفٌ'], ['my', 'غُرْفَتِي']]),
    w(4, 'يُوجَدُ · تُوجَدُ', 'there is (m. · f.)', [['m.', 'يُوجَدُ مَطْبَخٌ'], ['f.', 'تُوجَدُ حَدِيقَةٌ']], { tag: 'there is' }),
    w(5, 'هٰذَا · هٰذِهِ', 'this (m. · f.)', [['m.', 'هٰذَا'], ['f.', 'هٰذِهِ'], ['pl.', 'هٰؤُلَاءِ']], { tag: 'demonstratives' }),
    w(6, 'الطَّابِقُ الأَرْضِيُّ', 'the ground floor', [['first', 'الطَّابِقُ الأَوَّلُ'], ['second', 'الطَّابِقُ الثَّانِي']]),
    w(7, 'فَوْقَ · تَحْتَ', 'above · below', null, { tag: 'location' }),
    w(8, 'بِجَانِبِ · أَمَامَ · خَلْفَ', 'next to · in front of · behind', null, { tag: 'location' }),
    w(9, 'وَاسِعٌ', 'spacious', [['m.', 'وَاسِعٌ'], ['f.', 'وَاسِعَةٌ'], ['more', 'أَوْسَعُ']]),
    w(10, 'مُرِيحٌ', 'comfortable', [['m.', 'مُرِيحٌ'], ['f.', 'مُرِيحَةٌ'], ['pl.', 'مُرِيحَةٌ']], { tag: 'm. · f. · non-hum. pl.' }),
    w(11, 'حَدِيقَةٌ', 'a garden', [['sg.', 'حَدِيقَةٌ'], ['pl.', 'حَدَائِقُ']]),
    w(12, 'هَادِئٌ · مُزْدَحِمٌ', 'quiet · busy', [['f.', 'هَادِئَةٌ · مُزْدَحِمَةٌ']]),
  ],
  words1: { eyebrow: 'Language bank · home and rooms (sg. · pl. · my)', title: 'Where do you live?', ar: 'أَيْنَ تَسْكُنُ؟', notes: 'LANGUAGE BANK (2 min) — يُوجَدُ for masculine nouns, تُوجَدُ for feminine: يُوجَدُ فِي بَيْتِنَا مَطْبَخٌ كَبِيرٌ · تُوجَدُ حَدِيقَةٌ صَغِيرَةٌ. Floors use ordinals: فِي الطَّابِقِ الثَّانِي.' },
  words2: { eyebrow: 'Language bank · where things are, and describing words', title: 'Next to, above, behind', ar: 'أَيْنَ الأَشْيَاءُ؟', notes: 'LANGUAGE BANK (2 min) — prepositions take the genitive: بِجَانِبِ المَطْبَخِ · أَمَامَ البَيْتِ. Non-human plurals take the feminine singular: الغُرَفُ وَاسِعَةٌ وَمُرِيحَةٌ.' },
  checkCore: 'described the home and rooms with yūjadu / tūjadu',
  checkDevelop: 'said where rooms or things are with two prepositions and gave an opinion',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a new home', title: 'Role play A — Showing a friend your new flat', ar: 'شَقَّتُنَا الجَدِيدَةُ', you: 'a student', them: 'a friend visiting for the first time',
      tasks: [
        { core: true, ex: 'شَقَّةٌ جَمِيلَةٌ! كَمْ غُرْفَةً فِيهَا؟', task: 'Say how many rooms there are.', help: 'فِيهَا … غُرَفٍ', model: 'فِيهَا خَمْسُ غُرَفٍ: ثَلَاثُ غُرَفِ نَوْمٍ، وَغُرْفَةُ جُلُوسٍ، وَمَطْبَخٌ.', modelEn: 'It has five rooms: three bedrooms, a living room and a kitchen.' },
        { core: true, ex: 'فِي أَيِّ طَابِقٍ أَنْتُمْ؟', task: 'Say which floor.', help: 'نَحْنُ فِي الطَّابِقِ …', model: 'نَحْنُ فِي الطَّابِقِ الرَّابِعِ، وَيُوجَدُ مِصْعَدٌ.', modelEn: 'We are on the fourth floor, and there is a lift.' },
        { core: true, ex: 'أَيْنَ غُرْفَتُكَ؟', task: 'Say where your room is.', help: 'غُرْفَتِي بِجَانِبِ …', model: 'غُرْفَتِي بِجَانِبِ الحَمَّامِ، أَمَامَ غُرْفَةِ أُخْتِي.', modelEn: 'My room is next to the bathroom, opposite my sister’s room.' },
        { core: true, ex: 'مَاذَا يُوجَدُ فِي غُرْفَتِكَ؟', task: 'Say what is in your room.', help: 'يُوجَدُ … وَتُوجَدُ …', model: 'يُوجَدُ سَرِيرٌ وَمَكْتَبٌ، وَتُوجَدُ خِزَانَةٌ كَبِيرَةٌ.', modelEn: 'There is a bed and a desk, and there is a big wardrobe.' },
        { core: true, unexpected: true, ex: 'هَلْ تُحِبُّ هٰذِهِ الشَّقَّةَ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، لِأَنَّهَا … لٰكِنْ …', model: 'نَعَمْ، لِأَنَّهَا وَاسِعَةٌ وَمُرِيحَةٌ، لٰكِنْ لَيْسَتْ فِيهَا حَدِيقَةٌ.', modelEn: 'Yes, because it is spacious and comfortable, but it has no garden.' },
      ],
      girl: 'غُرْفَتُكِ · تُحِبِّينَ',
      notes: 'Core: numbers 3–10 + plural genitive (khamsu ghurafin), ordinals for floors, yūjadu vs tūjadu, prepositions + genitive.',
    },
    {
      id: 'B', level: 'Core+', setting: 'an estate agent', title: 'Role play B — Looking for a house to rent', ar: 'فِي مَكْتَبِ العَقَارَاتِ', you: 'someone looking for a house', them: 'the estate agent',
      tasks: [
        { core: true, ex: 'أَهْلًا، مَاذَا تَبْحَثُ عَنْهُ؟', task: 'Say what kind of home you want.', help: 'أَبْحَثُ عَنْ … فِيهِ / فِيهَا …', model: 'أَبْحَثُ عَنْ بَيْتٍ فِيهِ ثَلَاثُ غُرَفِ نَوْمٍ وَحَدِيقَةٌ.', modelEn: 'I’m looking for a house with three bedrooms and a garden.' },
        { core: true, ex: 'فِي أَيِّ مِنْطَقَةٍ؟', task: 'Say which area and why.', help: 'قَرِيبٌ مِنْ … لِأَنَّ …', model: 'قَرِيبٌ مِنَ المَدْرَسَةِ، لِأَنَّ أَوْلَادِي صِغَارٌ.', modelEn: 'Near the school, because my children are young.' },
        { ex: 'عِنْدَنَا هٰذَا البَيْتُ فِي شَارِعِ الوَرْدِ.', task: 'ASK two questions about the house.', help: 'هَلْ يُوجَدُ …؟ كَمْ …؟', model: 'هَلْ يُوجَدُ مَوْقِفٌ لِلسَّيَّارَةِ؟ وَكَمِ الإِيجَارُ فِي الشَّهْرِ؟', modelEn: 'Is there a parking space? And how much is the rent per month?' },
        { ex: 'يُوجَدُ مَوْقِفٌ، وَالإِيجَارُ أَلْفُ دِينَارٍ.', task: 'Compare with another house and decide.', help: 'هٰذَا أَغْلَى مِنْ … لٰكِنَّهُ …', model: 'هٰذَا أَغْلَى مِنَ البَيْتِ الآخَرِ، لٰكِنَّهُ أَوْسَعُ وَأَهْدَأُ، فَأُرِيدُ أَنْ أَرَاهُ.', modelEn: 'This one is dearer than the other house, but it is bigger and quieter, so I’d like to see it.' },
        { unexpected: true, ex: 'مَتَى تُرِيدُ أَنْ تَزُورَهُ؟', task: 'Answer the unexpected question.', help: 'يَوْمَ … فِي السَّاعَةِ …', model: 'يَوْمَ السَّبْتِ فِي السَّاعَةِ الحَادِيَةَ عَشْرَةَ، إِذَا كَانَ ذٰلِكَ مُنَاسِبًا.', modelEn: 'On Saturday at eleven, if that suits you.' },
      ],
      girl: 'تَبْحَثِينَ · تُرِيدِينَ أَنْ تَزُورِيهِ',
      notes: 'Task 3: the CANDIDATE asks two questions. Task 4: comparatives with hādhā (aghlā, awsaʿ, ahdaʾ).',
    },
    {
      id: 'C', level: 'Develop', setting: 'a room swap', title: 'Role play C — Sharing a room with your brother', ar: 'أَتَقَاسَمُ الغُرْفَةَ', you: 'a teenager', them: 'your parent',
      tasks: [
        { ex: 'جَدَّتُكَ سَتَسْكُنُ مَعَنَا، فَسَتَتَقَاسَمُ غُرْفَتَكَ مَعَ أَخِيكَ.', task: 'React politely and give a concern.', help: 'أَفْهَمُ، لٰكِنَّ غُرْفَتِي …', model: 'أَفْهَمُ يَا أَبِي، لٰكِنَّ غُرْفَتِي صَغِيرَةٌ جِدًّا، وَلَا يُوجَدُ فِيهَا مَكَانٌ لِسَرِيرَيْنِ.', modelEn: 'I understand, Dad, but my room is very small and there’s no room for two beds.' },
        { ex: 'مَا اقْتِرَاحُكَ؟', task: 'Suggest a solution.', help: 'مَا رَأْيُكَ أَنْ …؟', model: 'مَا رَأْيُكَ أَنْ نَنْقُلَ المَكْتَبَ إِلَى غُرْفَةِ الجُلُوسِ، وَنَضَعَ سَرِيرًا بِطَابِقَيْنِ؟', modelEn: 'How about moving the desk to the living room and putting in a bunk bed?' },
        { ex: 'فِكْرَةٌ جَيِّدَةٌ. وَأَيْنَ تَدْرُسُ إِذَنْ؟', task: 'Say where you will study and why.', help: 'سَأَدْرُسُ فِي … لِأَنَّهَا …', model: 'سَأَدْرُسُ فِي المَكْتَبَةِ بَعْدَ المَدْرَسَةِ، لِأَنَّهَا هَادِئَةٌ وَقَرِيبَةٌ مِنَ البَيْتِ.', modelEn: 'I will study in the library after school, because it is quiet and near home.' },
        { ex: '… أَخُوكَ يَتْرُكُ أَغْرَاضَهُ فِي كُلِّ مَكَانٍ!', task: 'ASK for a rule to keep the room tidy.', help: 'هَلْ يُمْكِنُ أَنْ …؟', model: 'هَلْ يُمْكِنُ أَنْ نَضَعَ قَاعِدَةً: كُلُّ وَاحِدٍ يُرَتِّبُ جِهَتَهُ كُلَّ مَسَاءٍ؟', modelEn: 'Could we make a rule: each of us tidies his side every evening?' },
        { unexpected: true, ex: 'كَيْفَ كَانَتْ غُرْفَتُكَ عِنْدَمَا كُنْتَ صَغِيرًا؟', task: 'Answer the unexpected question (past).', help: 'كَانَتْ … وَكَانَ فِيهَا …', model: 'كَانَتْ زَرْقَاءَ، وَكَانَ فِيهَا سَرِيرٌ عَلَى شَكْلِ سَيَّارَةٍ، وَكُنْتُ أُحِبُّهُ كَثِيرًا!', modelEn: 'It was blue, with a bed shaped like a car — I loved it!' },
      ],
      girl: 'جَدَّتُكِ · سَتَتَقَاسَمِينَ غُرْفَتَكِ مَعَ أُخْتِكِ · تَدْرُسِينَ · كُنْتِ صَغِيرَةً',
      notes: 'Develop: a polite objection (afhamu, lākinna …), mā raʾyuka an + subjunctive, a reason, a request, kāna + description.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a housing survey', title: 'Role play D — City flat or country house?', ar: 'شَقَّةٌ فِي المَدِينَةِ أَمْ بَيْتٌ فِي الرِّيفِ؟', you: 'a young resident', them: 'a university researcher',
      tasks: [
        { ex: 'أَيْنَ تُفَضِّلُ أَنْ تَسْكُنَ: فِي المَدِينَةِ أَمْ فِي الرِّيفِ؟', task: 'Give a preference with two reasons.', help: 'أُفَضِّلُ … لِأَنَّ … وَلِأَنَّ …', model: 'أُفَضِّلُ المَدِينَةَ، لِأَنَّ كُلَّ شَيْءٍ قَرِيبٌ، وَلِأَنَّ المُوَاصَلَاتِ سَهْلَةٌ.', modelEn: 'I prefer the city, because everything is close and transport is easy.' },
        { ex: 'وَمَا عُيُوبُ السَّكَنِ فِي المَدِينَةِ؟', task: 'Give a disadvantage and an example.', help: 'المُشْكِلَةُ أَنَّ … مَثَلًا …', model: 'المُشْكِلَةُ أَنَّ الشُّقَقَ صَغِيرَةٌ وَغَالِيَةٌ؛ مَثَلًا لَا تُوجَدُ فِي شَقَّتِنَا شُرْفَةٌ وَاحِدَةٌ.', modelEn: 'The problem is flats are small and expensive — ours, for example, doesn’t have a single balcony.' },
        { ex: 'كَيْفَ كَانَتِ البُيُوتُ فِي أَيَّامِ أَجْدَادِكَ؟', task: 'Compare past and present.', help: 'كَانَتْ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَتِ البُيُوتُ وَاسِعَةً، وَفِي وَسَطِهَا فِنَاءٌ تَجْلِسُ فِيهِ العَائِلَةُ، أَمَّا اليَوْمَ فَنَسْكُنُ فِي أَبْرَاجٍ عَالِيَةٍ.', modelEn: 'Houses used to be spacious, with a courtyard in the middle where the family sat; today we live in tall towers.' },
        { ex: 'هَلِ الحَدَائِقُ ضَرُورِيَّةٌ لِلْأَطْفَالِ؟', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الحَدَائِقَ العَامَّةَ مَوْجُودَةٌ، غَيْرَ أَنَّ الحَدِيقَةَ فِي البَيْتِ تُعْطِي الأَطْفَالَ حُرِّيَّةً وَأَمَانًا أَكْثَرَ.', modelEn: 'It is true public parks exist, but a garden at home gives children more freedom and safety.' },
        { unexpected: true, ex: 'لَوْ صَمَّمْتَ بَيْتَ أَحْلَامِكَ، كَيْفَ يَكُونُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ صَمَّمْتُ …، لَجَعَلْتُ …', model: 'لَوْ صَمَّمْتُ بَيْتَ أَحْلَامِي، لَجَعَلْتُهُ عَلَى شَاطِئِ البَحْرِ، وَلَوَضَعْتُ فِيهِ مَكْتَبَةً كَبِيرَةً تُطِلُّ عَلَى المَاءِ.', modelEn: 'If I designed my dream home, I would put it on the beach with a big library overlooking the water.' },
      ],
      girl: 'تُفَضِّلِينَ أَنْ تَسْكُنِي · أَجْدَادِكِ · صَمَّمْتِ · أَحْلَامِكِ',
      notes: 'Stretch: two reasons, al-mushkila anna, a negative tūjadu, kāna + present vs ammā … fa-, a concession, law … la-.',
      modelFoot: 'Stretch: reasons, an example, past vs present, ṣaḥīḥun anna … ghayra anna and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'بَيْتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'أَيْنَ تَسْكُنُ؟', en: 'Where do you live?', start: 'أَسْكُنُ فِي … فِي …', model: 'أَسْكُنُ فِي بَيْتٍ صَغِيرٍ فِي وَسَطِ المَدِينَةِ.', modelEn: 'I live in a small house in the town centre.' },
        { q: 'كَمْ غُرْفَةً فِي بَيْتِكَ؟', en: 'How many rooms are there in your house?', start: 'فِي بَيْتِي … غُرَفٍ', model: 'فِي بَيْتِي سِتُّ غُرَفٍ، وَحَمَّامَانِ.', modelEn: 'There are six rooms and two bathrooms in my house.' },
        { q: 'صِفْ غُرْفَتَكَ.', en: 'Describe your room.', start: 'غُرْفَتِي … يُوجَدُ فِيهَا …', model: 'غُرْفَتِي صَغِيرَةٌ وَمُرَتَّبَةٌ، وَيُوجَدُ فِيهَا سَرِيرٌ وَمَكْتَبٌ.', modelEn: 'My room is small and tidy, and has a bed and a desk.' },
        { q: 'هَلْ تُوجَدُ حَدِيقَةٌ؟', en: 'Is there a garden?', start: 'نَعَمْ، تُوجَدُ … / لَا، لَا تُوجَدُ …', model: 'نَعَمْ، تُوجَدُ حَدِيقَةٌ صَغِيرَةٌ خَلْفَ البَيْتِ، فِيهَا أَزْهَارٌ.', modelEn: 'Yes, there is a small garden behind the house with flowers.' },
        { q: 'مَا غُرْفَتُكَ المُفَضَّلَةُ؟', en: 'What is your favourite room?', start: 'غُرْفَتِي المُفَضَّلَةُ … لِأَنَّ …', model: 'غُرْفَتِي المُفَضَّلَةُ هِيَ المَطْبَخُ، لِأَنِّي أُحِبُّ الطَّبْخَ مَعَ أُمِّي.', modelEn: 'My favourite room is the kitchen, because I love cooking with my mum.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a number or a place = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'بَيْتِي وَحَيِّي', aim: 'two or three sentences, with locations and a reason',
      qs: [
        { q: 'صِفِ الطَّابِقَ الأَرْضِيَّ فِي بَيْتِكَ.', en: 'Describe the ground floor of your house.', start: 'فِي الطَّابِقِ الأَرْضِيِّ يُوجَدُ … بِجَانِبِ …', model: 'فِي الطَّابِقِ الأَرْضِيِّ يُوجَدُ مَطْبَخٌ كَبِيرٌ بِجَانِبِ غُرْفَةِ الطَّعَامِ، وَغُرْفَةُ الجُلُوسِ أَمَامَ البَابِ.', modelEn: 'On the ground floor there is a big kitchen next to the dining room, and the living room is opposite the door.' },
        { q: 'مَاذَا تُحِبُّ وَمَاذَا لَا تُحِبُّ فِي بَيْتِكَ؟', en: 'What do you like and dislike about your home?', start: 'أُحِبُّ … لٰكِنِّي لَا أُحِبُّ …', model: 'أُحِبُّ الحَدِيقَةَ لِأَنَّهَا هَادِئَةٌ، لٰكِنِّي لَا أُحِبُّ أَنَّ الحَمَّامَ وَاحِدٌ لِخَمْسَةِ أَشْخَاصٍ!', modelEn: 'I love the garden because it’s quiet, but I don’t like there being one bathroom for five people!' },
        { q: 'صِفِ الحَيَّ الَّذِي تَسْكُنُ فِيهِ.', en: 'Describe your neighbourhood.', start: 'حَيِّي … يُوجَدُ فِيهِ …', model: 'حَيِّي هَادِئٌ، يُوجَدُ فِيهِ مَسْجِدٌ وَمَخْبَزٌ وَحَدِيقَةٌ عَامَّةٌ قَرِيبَةٌ مِنْ بَيْتِنَا.', modelEn: 'My neighbourhood is quiet, with a mosque, a bakery and a park near our house.' },
        { q: 'مَاذَا تَفْعَلُ فِي الحَدِيقَةِ؟', en: 'What do you do in the garden?', start: 'فِي الصَّيْفِ … وَفِي …', model: 'فِي الصَّيْفِ نَأْكُلُ العَشَاءَ فِي الحَدِيقَةِ، وَفِي الرَّبِيعِ أُسَاعِدُ أَبِي فِي زِرَاعَةِ الأَزْهَارِ.', modelEn: 'In summer we have dinner in the garden, and in spring I help my dad plant flowers.' },
        { q: 'هَلْ سَكَنْتَ فِي بَيْتٍ آخَرَ مِنْ قَبْلُ؟', en: 'Have you lived in another house before?', start: 'نَعَمْ، كُنَّا نَسْكُنُ فِي … وَكَانَ …', model: 'نَعَمْ، كُنَّا نَسْكُنُ فِي شَقَّةٍ صَغِيرَةٍ فِي الطَّابِقِ العَاشِرِ، وَكَانَ المِصْعَدُ مُعَطَّلًا دَائِمًا!', modelEn: 'Yes, we used to live in a small tenth-floor flat, and the lift was always broken!' },
      ],
      foot: 'Develop: two or three sentences — locations (bijānibi, amāma), a reason, a past home and a contrast.',
      modelFoot: 'Location + opinion + reason + a past detail = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'السَّكَنُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'مَا الَّذِي يَجْعَلُ البَيْتَ «بَيْتًا» فِي رَأْيِكَ؟', en: 'What makes a house a “home”?', start: 'أَعْتَقِدُ أَنَّ … أَهَمُّ مِنْ …', model: 'أَعْتَقِدُ أَنَّ النَّاسَ الَّذِينَ يَسْكُنُونَ فِيهِ أَهَمُّ مِنْ حَجْمِهِ أَوْ أَثَاثِهِ، فَالحُبُّ يَجْعَلُ الغُرْفَةَ الصَّغِيرَةَ وَاسِعَةً.', modelEn: 'I think the people who live in it matter more than its size or furniture — love makes a small room spacious.' },
        { q: 'لِمَاذَا يَصْعُبُ عَلَى الشَّبَابِ شِرَاءُ بَيْتٍ اليَوْمَ؟', en: 'Why is it hard for young people to buy a home today?', start: 'لِأَنَّ … وَلِأَنَّ …', model: 'لِأَنَّ الأَسْعَارَ ارْتَفَعَتْ كَثِيرًا، وَلِأَنَّ الرَّوَاتِبَ لَمْ تَرْتَفِعْ بِالسُّرْعَةِ نَفْسِهَا.', modelEn: 'Because prices have risen a lot, and because salaries haven’t risen as fast.' },
        { q: 'هَلْ تُفَضِّلُ بَيْتًا قَدِيمًا أَمْ حَدِيثًا؟', en: 'Do you prefer an old house or a modern one?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ البُيُوتَ الحَدِيثَةَ مُرِيحَةٌ وَمُجَهَّزَةٌ، غَيْرَ أَنَّ البُيُوتَ القَدِيمَةَ لَهَا رُوحٌ وَتَارِيخٌ.', modelEn: 'It is true modern homes are comfortable and well-equipped, but old houses have soul and history.' },
        { q: 'صِفْ بَيْتًا زُرْتَهُ وَأَعْجَبَكَ.', en: 'Describe a house you visited and liked.', start: 'زُرْتُ … وَكَانَ فِيهِ … فَـ…', model: 'زُرْتُ بَيْتَ عَمِّي فِي القَرْيَةِ، وَكَانَ فِيهِ فِنَاءٌ وَاسِعٌ وَشَجَرَةُ لَيْمُونٍ، فَجَلَسْنَا تَحْتَهَا حَتَّى مُنْتَصَفِ اللَّيْلِ.', modelEn: 'I visited my uncle’s village house; it had a wide courtyard and a lemon tree, and we sat under it until midnight.' },
        { q: 'لَوْ سَكَنْتَ وَحْدَكَ، كَيْفَ تُرَتِّبُ بَيْتَكَ؟', en: 'If you lived alone, how would you arrange your home?', start: 'لَوْ سَكَنْتُ وَحْدِي، لَـ…', model: 'لَوْ سَكَنْتُ وَحْدِي، لَجَعَلْتُ غُرْفَةَ الجُلُوسِ مَكْتَبَةً، وَلَزَرَعْتُ نَبَاتَاتٍ فِي كُلِّ زَاوِيَةٍ.', modelEn: 'If I lived alone, I would turn the living room into a library and grow plants in every corner.' },
      ],
      foot: 'Stretch: alladhīna, two reasons with lam + jussive, a concession, a past visit with fa- and law … la-.',
      modelFoot: 'Stretch: ahammu min, lam tartafiʿ, ṣaḥīḥun anna … ghayra anna, a past description, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I described my home with yūjadu / tūjadu.' },
    { route: 'core', text: 'I gave numbers of rooms and floors correctly.' },
    { route: 'develop', text: 'I said where things are with two prepositions.' },
    { route: 'develop', text: 'I gave an opinion of my home with a reason.' },
    { route: 'stretch', text: 'I compared past and present, conceded, or used law … la-.' },
  ],
};
speak.RP[3].tasks[2].help = 'كَانَتِ البُيُوتُ … أَمَّا اليَوْمَ فَنَسْكُنُ …';
speak.CONV[2].qs[4].start = 'لَوْ سَكَنْتُ وَحْدِي، لَجَعَلْتُ …';
speak.CONV[2].qs[3].start = 'زُرْتُ … وَكَانَ فِيهِ … فَجَلَسْنَا …';

const Q2_CORE = `مَرْحَبًا يَا سَلِيمُ،
كَيْفَ حَالُكَ؟ انْتَقَلْنَا إِلَى بَيْتٍ جَدِيدٍ فِي الأُسْبُوعِ المَاضِي. البَيْتُ كَبِيرٌ وَجَمِيلٌ، وَفِيهِ طَابِقَانِ. فِي الطَّابِقِ الأَرْضِيِّ يُوجَدُ مَطْبَخٌ وَغُرْفَةُ جُلُوسٍ، وَفِي الطَّابِقِ الأَوَّلِ تُوجَدُ ثَلَاثُ غُرَفِ نَوْمٍ. غُرْفَتِي بِجَانِبِ غُرْفَةِ أَخِي، وَهِيَ وَاسِعَةٌ وَمُرِيحَةٌ. تُوجَدُ حَدِيقَةٌ كَبِيرَةٌ خَلْفَ البَيْتِ، وَأَمْسِ لَعِبْتُ فِيهَا كُرَةَ القَدَمِ. أُحِبُّ البَيْتَ، لٰكِنَّهُ بَعِيدٌ عَنِ المَدْرَسَةِ. فِي الصَّيْفِ سَتَزُورُنَا، إِنْ شَاءَ اللّٰهُ!
مَعَ السَّلَامَةِ،
فَارِسٌ`;
const Q2_FULL = `عَزِيزِي سَلِيمٌ،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَقَدِ انْتَقَلْنَا أَخِيرًا إِلَى بَيْتِنَا الجَدِيدِ فِي ضَاحِيَةٍ هَادِئَةٍ شَمَالَ المَدِينَةِ. البَيْتُ أَوْسَعُ بِكَثِيرٍ مِنْ شَقَّتِنَا القَدِيمَةِ؛ فَفِي الطَّابِقِ الأَرْضِيِّ يُوجَدُ مَطْبَخٌ حَدِيثٌ يُطِلُّ عَلَى الحَدِيقَةِ، وَفِي الطَّابِقِ الأَوَّلِ تُوجَدُ غُرَفُ النَّوْمِ. أَمَّا غُرْفَتِي فَهِيَ الأَصْغَرُ، لٰكِنَّهَا الأَجْمَلُ، لِأَنَّ نَافِذَتَهَا تُطِلُّ عَلَى شَجَرَةِ تُفَّاحٍ كَبِيرَةٍ. أَمْسِ قَضَيْتُ اليَوْمَ كُلَّهُ أُرَتِّبُ كُتُبِي وَأُعَلِّقُ الصُّوَرَ عَلَى الجُدْرَانِ. صَحِيحٌ أَنَّ البَيْتَ بَعِيدٌ عَنِ المَدْرَسَةِ، غَيْرَ أَنَّ الحَافِلَةَ تَقِفُ أَمَامَهُ. إِذَا زُرْتَنَا فِي الصَّيْفِ، فَسَنَنَامُ فِي خَيْمَةٍ فِي الحَدِيقَةِ!
مَعَ تَحِيَّاتِي،
فَارِسٌ`;
const Q3A_CORE = `أَسْكُنُ مَعَ أُسْرَتِي فِي بَيْتٍ قَدِيمٍ فِي وَسَطِ مَدِينَةِ يُورْكَ. البَيْتُ لَيْسَ كَبِيرًا، لٰكِنَّهُ مُرِيحٌ وَدَافِئٌ. فِيهِ ثَلَاثَةُ طَوَابِقَ.
فِي الطَّابِقِ الأَرْضِيِّ يُوجَدُ مَطْبَخٌ وَغُرْفَةُ جُلُوسٍ. المَطْبَخُ بِجَانِبِ الحَدِيقَةِ، وَنَأْكُلُ فِيهِ كُلَّ يَوْمٍ. فِي الطَّابِقِ الأَوَّلِ تُوجَدُ غُرْفَةُ وَالِدَيَّ وَالحَمَّامُ، وَغُرْفَتِي فِي الطَّابِقِ الثَّانِي تَحْتَ السَّقْفِ. فِي غُرْفَتِي سَرِيرٌ وَمَكْتَبٌ وَخِزَانَةٌ، وَعَلَى الجِدَارِ صُوَرٌ لِلَاعِبِي كُرَةِ القَدَمِ. أُحِبُّ غُرْفَتِي، لِأَنَّهَا هَادِئَةٌ وَدَافِئَةٌ، وَأَقْرَأُ فِيهَا كُلَّ مَسَاءٍ.
فِي الصَّيْفِ المَاضِي زَرَعْنَا أَزْهَارًا وَطَمَاطِمَ فِي الحَدِيقَةِ. أَبِي وَأَنَا عَمِلْنَا كُلَّ يَوْمٍ، وَكَانَتِ الحَدِيقَةُ جَمِيلَةً جِدًّا فِي آخِرِ الصَّيْفِ. أَكَلْنَا الطَّمَاطِمَ مِنْ حَدِيقَتِنَا!
فِي رَأْيِي، بَيْتِي جَمِيلٌ، لٰكِنَّهُ صَغِيرٌ قَلِيلًا لِخَمْسَةِ أَشْخَاصٍ. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَسْكُنَ فِي بَيْتٍ كَبِيرٍ قَرِيبٍ مِنَ البَحْرِ، فِيهِ حَدِيقَةٌ وَمَسْبَحٌ.`;
const Q3A_FULL = `لِكُلِّ بَيْتٍ رَائِحَةٌ، وَرَائِحَةُ بَيْتِنَا خَلِيطٌ مِنَ القَهْوَةِ وَالكُتُبِ القَدِيمَةِ. نَسْكُنُ فِي بَيْتٍ حَجَرِيٍّ عُمْرُهُ أَكْثَرُ مِنْ مِئَةِ سَنَةٍ، فِي شَارِعٍ ضَيِّقٍ قَرِيبٍ مِنْ وَسَطِ يُورْكَ، وَلِهٰذَا فَهُوَ لَيْسَ وَاسِعًا، لٰكِنَّ لِكُلِّ زَاوِيَةٍ فِيهِ قِصَّةً، وَلِكُلِّ بَابٍ صَوْتًا نَعْرِفُهُ جَمِيعًا.
فِي الطَّابِقِ الأَرْضِيِّ يُوجَدُ المَطْبَخُ، وَهُوَ قَلْبُ البَيْتِ؛ فَفِيهِ نَأْكُلُ وَنَدْرُسُ وَنَتَحَدَّثُ. أَمَّا غُرْفَتِي فَفِي الطَّابِقِ الثَّانِي تَحْتَ السَّقْفِ مُبَاشَرَةً، وَفِيهَا نَافِذَةٌ صَغِيرَةٌ أَرَى مِنْهَا أَبْرَاجَ الكَاتِدْرَائِيَّةِ القَدِيمَةِ، وَأَسْمَعُ أَجْرَاسَهَا كُلَّ صَبَاحٍ قَبْلَ أَنْ أَسْتَيْقِظَ.
لَمْ تَكُنِ الحَدِيقَةُ جَمِيلَةً عِنْدَمَا انْتَقَلْنَا؛ فَقَدْ كَانَتْ مَلِيئَةً بِالأَعْشَابِ وَالحِجَارَةِ. لٰكِنَّنَا قَضَيْنَا الصَّيْفَ المَاضِيَ كُلَّهُ نُنَظِّفُهَا، ثُمَّ زَرَعْنَا فِيهَا الوُرُودَ وَالنَّعْنَاعَ، حَتَّى أَصْبَحَتْ أَجْمَلَ مَكَانٍ فِي البَيْتِ.
صَحِيحٌ أَنَّ بَيْتَنَا صَغِيرٌ وَبَارِدٌ فِي الشِّتَاءِ، غَيْرَ أَنِّي لَا أَتَخَيَّلُ نَفْسِي فِي مَكَانٍ آخَرَ. وَلَوْ أَصْبَحَ عِنْدِي بَيْتٌ فِي المُسْتَقْبَلِ، لَجَعَلْتُ مَطْبَخَهُ كَبِيرًا مِثْلَ مَطْبَخِ أُمِّي، لِأَنَّ البَيْتَ يَبْدَأُ مِنْ حَوْلِ المَائِدَةِ.`;
const Q3B_FULL = `يَحْلُمُ كَثِيرٌ مِنَ النَّاسِ بِبَيْتٍ هَادِئٍ فِي الرِّيفِ، تُحِيطُ بِهِ الأَشْجَارُ، وَلَا يُسْمَعُ فِيهِ إِلَّا صَوْتُ العَصَافِيرِ، بَيْنَمَا يُفَضِّلُ آخَرُونَ شَقَّةً فِي قَلْبِ المَدِينَةِ، قَرِيبَةً مِنَ العَمَلِ وَالمَدَارِسِ وَالمَحَلَّاتِ.
فِي المَاضِي كَانَ أَغْلَبُ النَّاسِ يَسْكُنُونَ فِي القُرَى، وَكَانَتْ بُيُوتُهُمْ وَاسِعَةً وَفِيهَا فِنَاءٌ تَجْتَمِعُ فِيهِ العَائِلَةُ، أَمَّا اليَوْمَ فَيَنْتَقِلُ الشَّبَابُ إِلَى المُدُنِ بَحْثًا عَنِ العَمَلِ، فَيَسْكُنُونَ فِي شُقَقٍ صَغِيرَةٍ وَغَالِيَةٍ، وَلَا يَعْرِفُونَ أَحْيَانًا أَسْمَاءَ جِيرَانِهِمْ.
لَقَدْ جَرَّبْتُ الحَيَاتَيْنِ؛ فَفِي العُطْلَةِ الصَّيْفِيَّةِ قَضَيْتُ شَهْرًا فِي مَزْرَعَةِ خَالِي، فَكُنْتُ أَسْتَيْقِظُ مَعَ الشَّمْسِ، وَأُسَاعِدُهُ فِي الحَقْلِ وَفِي إِطْعَامِ الدَّجَاجِ، وَأَنَامُ مُبَكِّرًا بِدُونِ هَاتِفٍ. شَعَرْتُ بِالرَّاحَةِ، لٰكِنِّي اشْتَقْتُ إِلَى أَصْدِقَائِي وَإِلَى المَكْتَبَةِ القَرِيبَةِ مِنْ بَيْتِنَا.
صَحِيحٌ أَنَّ الرِّيفَ أَهْدَأُ وَأَنْظَفُ، غَيْرَ أَنَّ المَدِينَةَ تُقَدِّمُ فُرَصًا لِلتَّعْلِيمِ وَالعَمَلِ لَا تُوجَدُ فِي القُرَى. وَلَوْ وَصَلَتِ الخِدْمَاتُ الجَيِّدَةُ إِلَى الأَرْيَافِ، لَبَقِيَ كَثِيرٌ مِنَ الشَّبَابِ فِي قُرَاهُمْ، وَلَخَفَّ الازْدِحَامُ فِي المُدُنِ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a house-swap form, write an email about your new home, and write an extended piece about your home or about city versus country living.',
  lift: [
    { ar: 'فِي الطَّابِقِ الأَرْضِيِّ يُوجَدُ … وَتُوجَدُ …', en: 'on the ground floor there is … and there is …' },
    { ar: 'نَافِذَتُهَا تُطِلُّ عَلَى شَجَرَةٍ كَبِيرَةٍ', en: 'its window looks out over a big tree' },
    { ar: 'البَيْتُ أَوْسَعُ بِكَثِيرٍ مِنْ شَقَّتِنَا القَدِيمَةِ', en: 'the house is much bigger than our old flat' },
  ],
  checkTip: 'Check: yūjadu with masculine nouns, tūjadu with feminine; the genitive after every preposition (bijānibi l-maṭbakhi); hādhā / hādhihi agree; non-human plurals with feminine adjectives (al-ghurafu wāsiʿa).',
  FORM: {
    title: 'Holiday house-swap form', ar: 'اسْتِمَارَةُ تَبَادُلِ البُيُوتِ',
    fields: [
      { core: true, ar: 'نَوْعُ السَّكَنِ', en: 'Type of home', model: 'بَيْتٌ بِطَابِقَيْنِ', modelEn: 'a two-storey house' },
      { core: true, ar: 'المَدِينَةُ وَالحَيُّ', en: 'Town and area', model: 'يُورْكُ، وَسَطُ المَدِينَةِ', modelEn: 'York, city centre' },
      { core: true, ar: 'عَدَدُ غُرَفِ النَّوْمِ', en: 'Number of bedrooms', model: 'ثَلَاثُ غُرَفٍ', modelEn: 'three' },
      { core: true, ar: 'هَلْ تُوجَدُ حَدِيقَةٌ؟', en: 'Is there a garden?', model: 'نَعَمْ، حَدِيقَةٌ صَغِيرَةٌ خَلْفَ البَيْتِ', modelEn: 'yes, a small one behind the house' },
      { core: true, ar: 'مَكَانٌ قَرِيبٌ مِنَ البَيْتِ', en: 'A place near the home', model: 'مَحَطَّةُ القِطَارِ', modelEn: 'the train station' },
      { core: true, ar: 'غُرْفَتُكَ المُفَضَّلَةُ', en: 'Your favourite room', model: 'المَطْبَخُ', modelEn: 'the kitchen' },
      { ar: 'شَيْءٌ لَا يُوجَدُ فِي بَيْتِكَ', en: 'Something your home does not have', model: 'لَا يُوجَدُ مَوْقِفٌ لِلسَّيَّارَةِ', modelEn: 'there is no parking space' },
      { ar: 'جُمْلَةٌ: لِمَاذَا سَيُحِبُّ الضُّيُوفُ بَيْتَكَ؟', en: 'ONE sentence: why guests will like your home', model: 'سَيُحِبُّونَهُ لِأَنَّهُ هَادِئٌ وَقَرِيبٌ مِنَ المَعَالِمِ التَّارِيخِيَّةِ.', modelEn: 'They will like it because it is quiet and near the historic sights.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence in the future with a reason.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 7 is a negative: lā yūjadu …',
  },
  Q2: {
    short: 'an email about your new home', title: 'Question 2: our new home', ar: 'رِسَالَةٌ عَنْ بَيْتِنَا الجَدِيدِ',
    task: 'Your family has moved house. Write an email in Arabic to your friend of about 80–90 words. You must include: • where the new home is and what it is like • the rooms, and where your room is • what you did in the new home yesterday • one thing you don’t like, and an invitation to visit.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'yūjadu / tūjadu and two prepositions.', 'A past sentence AND a future sentence.', 'About 80–90 words.'],
    phrases: [['انْتَقَلْنَا إِلَى …', 'we have moved to …'], ['يُوجَدُ … وَتُوجَدُ …', 'there is … and there is …'], ['غُرْفَتِي بِجَانِبِ …', 'my room is next to …'], ['إِذَا زُرْتَنَا، فَسَنَنَامُ …', 'if you visit us, we will sleep …']],
    rubric: [
      ['task', 'انْتَقَلَتْ أُسْرَتُكَ إِلَى بَيْتٍ جَدِيدٍ. اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ (٨٠–٩٠ كَلِمَةً).', 'Your family has moved: write to your friend (80–90 words).'],
      ['1', 'أَيْنَ البَيْتُ الجَدِيدُ؟ وَكَيْفَ هُوَ؟', 'Where the new home is; what it is like'],
      ['2', 'صِفِ الغُرَفَ. أَيْنَ غُرْفَتُكَ؟', 'The rooms; where your room is'],
      ['3', 'مَاذَا فَعَلْتَ أَمْسِ فِي البَيْتِ الجَدِيدِ؟', 'What you did there yesterday'],
      ['4', 'مَا الشَّيْءُ الَّذِي لَا تُحِبُّهُ؟ ادْعُ صَدِيقَكَ لِلزِّيَارَةِ.', 'One thing you dislike; invite your friend'],
    ],
    qwords: 'أَيْنَ (where) · كَيْفَ (what … like) · صِفْ (describe) · مَاذَا (what) · ادْعُ (invite) — bullet 3 is PAST, bullet 4 ends with an INVITATION',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'انْتَقَلْنَا إِلَى ______ فِي ______ . البَيْتُ ______ .', 'We moved to … in … The house is …'],
      ['2', 'فِي الطَّابِقِ الأَرْضِيِّ يُوجَدُ ______ . غُرْفَتِي بِجَانِبِ ______ .', 'On the ground floor there is … My room is next to …'],
      ['3', 'أَمْسِ ______ فِي غُرْفَتِي / فِي الحَدِيقَةِ.', 'Yesterday I … in my room / in the garden.'],
      ['4', 'لَا أُحِبُّ ______ . فِي الصَّيْفِ سَتَزُورُنَا!', 'I don’t like … In summer you will visit us!'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Salim, how are you? We moved to a new house last week. The house is big and beautiful, with two floors. On the ground floor there is a kitchen and a living room, and on the first floor there are three bedrooms. My room is next to my brother’s; it is spacious and comfortable. There is a big garden behind the house, and yesterday I played football in it. I love the house, but it is far from school. In the summer you will visit us, God willing! Goodbye, Faris.”',
      find: ['فِيهِ طَابِقَانِ', 'يُوجَدُ مَطْبَخٌ', 'غُرْفَتِي بِجَانِبِ', 'خَلْفَ البَيْتِ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Salim, greetings. We have finally moved to our new house in a quiet suburb north of the city. The house is much more spacious than our old flat: on the ground floor there is a modern kitchen overlooking the garden, and the bedrooms are on the first floor. As for my room, it is the smallest but the prettiest, because its window looks out over a big apple tree. Yesterday I spent the whole day arranging my books and hanging pictures on the walls. It is true the house is far from school, but the bus stops right in front of it. If you visit us in the summer, we’ll sleep in a tent in the garden! Best wishes, Faris.”',
      find: ['أَوْسَعُ بِكَثِيرٍ مِنْ', 'أَمَّا غُرْفَتِي فَهِيَ الأَصْغَرُ', 'قَضَيْتُ اليَوْمَ كُلَّهُ أُرَتِّبُ', 'إِذَا زُرْتَنَا … فَسَنَنَامُ'],
    },
  },
  Q3: {
    a: { title: 'بَيْتِي', en: 'My home', bullets: 'أَيْنَ تَسْكُنُ؟ وَكَيْفَ بَيْتُكَ؟ · الغُرَفُ وَغُرْفَتُكَ · ذِكْرَى أَوْ عَمَلٌ قُمْتُمْ بِهِ فِي البَيْتِ · رَأْيُكَ وَبَيْتُ أَحْلَامِكَ', bulletsEn: 'Where you live; what your home is like · the rooms and your room · a memory or a job you did at home · your opinion and dream home' },
    b: { title: 'المَدِينَةُ أَمِ الرِّيفُ؟', en: 'City or countryside?', bullets: 'أَيْنَ يُفَضِّلُ النَّاسُ أَنْ يَسْكُنُوا؟ · المَاضِي وَالحَاضِرُ · تَجْرِبَةٌ شَخْصِيَّةٌ · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'Where people prefer to live · past and present · a personal experience · your opinion and suggestion' },
    plan: [
      'Where + what — askunu fī …, yūjadu / tūjadu …, adjectives that agree.',
      'Rooms — fī ṭ-ṭābiqi …, bijānibi / amāma / taḥta; Stretch: ammā ghurfatī fa- …',
      'Past — a job or memory: zaraʿnā, rattabnā …; lam takun … ʿindamā …',
      'Opinion + future — fī raʾyī …, urīdu an … / sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'يُوجَدُ فِي بَيْتِنَا مَطْبَخٌ كَبِيرٌ.', en: 'present: there is a big kitchen in our house.' },
      { ar: 'زَرَعْنَا الأَزْهَارَ فِي الحَدِيقَةِ.', en: 'past: we planted flowers in the garden.' },
      { ar: 'سَأَسْكُنُ فِي بَيْتٍ قَرِيبٍ مِنَ البَحْرِ.', en: 'future: I will live in a house near the sea.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'An old house in central York: not big but comfortable and warm, three floors → ground floor: kitchen (next to the garden, where we eat daily) and living room; first floor: my parents’ room and bathroom; my room on the second floor under the roof — bed, desk, wardrobe, football posters; I love it because it’s quiet and warm, and I read there every evening → last summer Dad and I planted flowers and tomatoes; the garden was beautiful by the end, and we ate our own tomatoes → nice but a bit small for five; in future I want a big house by the sea with a garden and pool.', find: ['لَيْسَ كَبِيرًا، لٰكِنَّهُ', 'يُوجَدُ مَطْبَخٌ', 'تَحْتَ السَّقْفِ', 'زَرَعْنَا'], notes: 'Core model: laysa + accusative, yūjadu / tūjadu, ordinals for floors, prepositions, a past paragraph, an opinion and a future wish.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Every house has a smell — ours is coffee and old books: a stone house over a hundred years old on a narrow street near central York; not spacious, but every corner has a story and every door a sound we all know → the ground-floor kitchen is the heart of the house: we eat, study and talk there; as for my room, it is right under the roof, with a small window onto the old cathedral towers, whose bells I hear every morning before I wake → the garden wasn’t beautiful when we moved — full of weeds and stones — but we spent last summer clearing it and planted roses and mint until it became the loveliest place in the house → it is true our house is small and cold in winter, but I can’t imagine living anywhere else; “if I had a house in future, I would make its kitchen big like my mother’s, because a home begins around the table”.', find: ['عُمْرُهُ أَكْثَرُ مِنْ مِئَةِ سَنَةٍ', 'أَمَّا غُرْفَتِي فَفِي', 'لَمْ تَكُنِ الحَدِيقَةُ جَمِيلَةً', 'لَوْ أَصْبَحَ … لَجَعَلْتُ'], notes: 'Full-mark model: a hook, laysa + accusative, ammā … fa-, lam takun … ʿindamā, qaḍaynā … nunaẓẓifuhā, ḥattā, a superlative, a concession and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'city or countryside?', text: Q3B_FULL, en: 'Many dream of a quiet country house surrounded by trees, with only birdsong, while others prefer a flat in the city centre near work, schools and shops → in the past most people lived in villages in spacious houses with a courtyard; as for today, young people move to cities for work and live in small, expensive flats, sometimes not knowing their neighbours’ names → I have tried both: a month on my uncle’s farm last summer — up with the sun, helping in the fields and feeding the hens, early nights without a phone; restful, but I missed my friends and our nearby library → it is true the countryside is quieter and cleaner, but the city offers education and jobs that villages lack; “if good services reached the countryside, many young people would stay in their villages and the cities would be less crowded”.', find: ['لَا يُسْمَعُ فِيهِ إِلَّا', 'أَمَّا اليَوْمَ فَيَنْتَقِلُ', 'فَكُنْتُ أَسْتَيْقِظُ', 'لَوْ وَصَلَتِ … لَبَقِيَ'], notes: 'Full-mark model for the Stretch title: lā … illā, baynamā, kāna + present vs ammā … fa-, baḥthan ʿan, a past experience with kuntu + present, a concession with lā tūjadu, and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; numbers of rooms correct.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: yūjadu / tūjadu and two prepositions + genitive.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: ammā … fa-, a concession or law … la-.' },
  ],
};

module.exports = { speak, write };
