'use strict';
/* Exam-practice data · TB-L09 · Invitations, Holidays and Past Experiences (past tense; future plans; sequencing; polite responses). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'B', n: 9, short: 'Invitations and Past Experiences', arShort: 'الدَّعَوَاتُ وَالتَّجَارِبُ', fileTitle: 'Invitations_Holidays_and_Past_Experiences', title: 'Invitations, Holidays and Past Experiences', ar: 'الدَّعَوَاتُ وَالعُطَلُ وَالتَّجَارِبُ المَاضِيَةُ', icon: 'FaEnvelopeOpenText', grammar: 'past tense; future plans (sa-); sequencing (awwalan, thumma, baʿda dhālika); polite accepting and declining' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: invite, accept and decline politely, make arrangements, and tell the story of a memorable occasion in the past with clear sequencing.',
  words: [
    w(1, 'أَدْعُوكَ إِلَى …', 'I invite you to … (m.)', [['f.', 'أَدْعُوكِ'], ['pl.', 'أَدْعُوكُمْ'], ['past', 'دَعَوْتُ']], { tag: 'inviting' }),
    w(2, 'بِكُلِّ سُرُورٍ!', 'with pleasure!', null, { tag: 'accepting' }),
    w(3, 'آسِفٌ، لَا أَسْتَطِيعُ لِأَنَّ …', 'sorry, I can’t because …', [['f.', 'آسِفَةٌ']], { tag: 'declining' }),
    w(4, 'حَفْلَةٌ', 'a party', [['sg.', 'حَفْلَةٌ'], ['pl.', 'حَفَلَاتٌ'], ['birthday', 'حَفْلَةُ عِيدِ مِيلَادٍ']]),
    w(5, 'زِفَافٌ · عُرْسٌ', 'a wedding', [['pl.', 'أَعْرَاسٌ']]),
    w(6, 'نَلْتَقِي', 'we meet', [['I', 'أَلْتَقِي'], ['past', 'الْتَقَيْنَا'], ['future', 'سَنَلْتَقِي']]),
    w(7, 'احْتَفَلْنَا بِالعِيدِ', 'we celebrated Eid', [['I', 'احْتَفَلْتُ'], ['he', 'احْتَفَلَ'], ['they', 'احْتَفَلُوا']]),
    w(8, 'قَضَيْنَا', 'we spent (time)', [['I', 'قَضَيْتُ'], ['she', 'قَضَتْ'], ['they', 'قَضَوْا']]),
    w(9, 'أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ · أَخِيرًا', 'first · then · after that · finally', null, { tag: 'sequencing' }),
    w(10, 'لَا أَنْسَى', 'I will never forget', [['past', 'لَمْ أَنْسَ'], ['future', 'لَنْ أَنْسَى']]),
    w(11, 'مُفَاجَأَةٌ', 'a surprise', [['sg.', 'مُفَاجَأَةٌ'], ['pl.', 'مُفَاجَآتٌ']]),
    w(12, 'رَائِعٌ', 'wonderful', [['m.', 'رَائِعٌ'], ['f.', 'رَائِعَةٌ'], ['pl.', 'رَائِعُونَ']]),
  ],
  words1: { eyebrow: 'Language bank · invite, accept, decline', title: 'Would you like to come?', ar: 'هَلْ تُحِبُّ أَنْ تَأْتِيَ؟', notes: 'LANGUAGE BANK (2 min) — inviting: أَدْعُوكَ إِلَى … / هَلْ تُحِبُّ أَنْ تَأْتِيَ؟ Accepting: بِكُلِّ سُرُورٍ · شُكْرًا عَلَى الدَّعْوَةِ. Declining politely: آسِفٌ جِدًّا، لَا أَسْتَطِيعُ لِأَنَّ … · إِنْ شَاءَ اللّٰهُ مَرَّةً أُخْرَى.' },
  words2: { eyebrow: 'Language bank · telling the story', title: 'First, then, finally', ar: 'أَوَّلًا … ثُمَّ … أَخِيرًا', notes: 'LANGUAGE BANK (2 min) — past “we” verbs end in -nā: احْتَفَلْنَا · قَضَيْنَا · الْتَقَيْنَا. Never forget: لَمْ أَنْسَ (past) · لَنْ أَنْسَى (future). Sequence every story: أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ · أَخِيرًا.' },
  checkCore: 'invited, accepted or declined politely, with a time and a place',
  checkDevelop: 'told a past event with sequencing words and gave a reason',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a birthday invitation', title: 'Role play A — Inviting a friend to your party', ar: 'دَعْوَةٌ إِلَى حَفْلَةٍ', you: 'a student', them: 'your friend',
      tasks: [
        { core: true, ex: 'أَهْلًا! مَا الأَخْبَارُ؟', task: 'Invite your friend to your party.', help: 'أَدْعُوكَ إِلَى حَفْلَةِ …', model: 'أَدْعُوكَ إِلَى حَفْلَةِ عِيدِ مِيلَادِي يَوْمَ السَّبْتِ!', modelEn: 'I’m inviting you to my birthday party on Saturday!' },
        { core: true, ex: 'رَائِعٌ! فِي أَيِّ سَاعَةٍ؟', task: 'Give the time.', help: 'فِي السَّاعَةِ …', model: 'فِي السَّاعَةِ الرَّابِعَةِ بَعْدَ الظُّهْرِ.', modelEn: 'At four in the afternoon.' },
        { core: true, ex: 'وَأَيْنَ؟', task: 'Give the place.', help: 'فِي … قَرِيبٌ مِنْ …', model: 'فِي بَيْتِي، وَهُوَ قَرِيبٌ مِنَ المَسْجِدِ الكَبِيرِ.', modelEn: 'At my house — it is near the big mosque.' },
        { core: true, ex: 'مَاذَا سَنَفْعَلُ فِي الحَفْلَةِ؟', task: 'Say two things you will do.', help: 'سَنَأْكُلُ … وَسَنَلْعَبُ …', model: 'سَنَأْكُلُ البِيتْزَا وَالكَعْكَ، وَسَنَلْعَبُ أَلْعَابًا فِي الحَدِيقَةِ.', modelEn: 'We’ll eat pizza and cake, and play games in the garden.' },
        { core: true, unexpected: true, ex: 'مَاذَا تُرِيدُ هَدِيَّةً؟', task: 'Answer the unexpected question.', help: 'لَا تُحْضِرْ شَيْئًا … / أُحِبُّ …', model: 'لَا شَيْءَ، أُرِيدُ أَنْ تَأْتِيَ فَقَطْ! لٰكِنِّي أُحِبُّ الكُتُبَ.', modelEn: 'Nothing, I just want you to come! But I do like books.' },
      ],
      girl: 'to a girl friend: أَدْعُوكِ · أُرِيدُ أَنْ تَأْتِيَ (same) — and she asks: مَاذَا تُرِيدِينَ هَدِيَّةً؟',
      notes: 'Core: inviting (adʿūka ilā), time, place, the future with sa- (we-forms), an an + subjunctive wish.',
    },
    {
      id: 'B', level: 'Core+', setting: 'declining politely', title: 'Role play B — Saying no to a wedding invitation', ar: 'أَعْتَذِرُ عَنِ الدَّعْوَةِ', you: 'a student', them: 'a family friend on the phone',
      tasks: [
        { core: true, ex: 'نَدْعُوكُمْ إِلَى زِفَافِ ابْنَتِنَا يَوْمَ الجُمُعَةِ.', task: 'Thank them and congratulate them.', help: 'شُكْرًا عَلَى … مَبْرُوكٌ!', model: 'شُكْرًا جَزِيلًا عَلَى الدَّعْوَةِ، وَأَلْفُ مَبْرُوكٍ!', modelEn: 'Thank you very much for the invitation, and many congratulations!' },
        { core: true, ex: 'هَلْ سَتَأْتُونَ؟', task: 'Decline politely with a reason.', help: 'آسِفٌ جِدًّا، لَا نَسْتَطِيعُ لِأَنَّ …', model: 'آسِفٌ جِدًّا، لَا نَسْتَطِيعُ أَنْ نَأْتِيَ، لِأَنَّنَا سَنُسَافِرُ إِلَى مِصْرَ يَوْمَ الخَمِيسِ.', modelEn: 'I’m very sorry, we can’t come, because we are travelling to Egypt on Thursday.' },
        { ex: 'لِلْأَسَفِ! وَمَتَى سَتَرْجِعُونَ؟', task: 'Say when you will return.', help: 'سَنَرْجِعُ بَعْدَ …', model: 'سَنَرْجِعُ بَعْدَ أُسْبُوعَيْنِ، فِي بِدَايَةِ الشَّهْرِ القَادِمِ.', modelEn: 'We will come back in two weeks, at the start of next month.' },
        { ex: 'لَا بَأْسَ، إِنْ شَاءَ اللّٰهُ تَزُورُونَنَا بَعْدَ ذٰلِكَ.', task: 'Suggest another meeting.', help: 'مَا رَأْيُكِ أَنْ …؟', model: 'بِكُلِّ سُرُورٍ! مَا رَأْيُكِ أَنْ نَزُورَكُمْ فِي أَوَّلِ جُمُعَةٍ بَعْدَ رُجُوعِنَا؟', modelEn: 'With pleasure! How about we visit you on the first Friday after we get back?' },
        { unexpected: true, ex: 'هَلْ حَضَرْتَ زِفَافًا عَرَبِيًّا مِنْ قَبْلُ؟', task: 'Answer the unexpected question (past).', help: 'نَعَمْ، حَضَرْتُ … وَكَانَ …', model: 'نَعَمْ، حَضَرْتُ زِفَافَ خَالِي فِي عَمَّانَ، وَكَانَ رَائِعًا، وَرَقَصْنَا الدَّبْكَةَ حَتَّى الفَجْرِ!', modelEn: 'Yes, I went to my uncle’s wedding in Amman — it was wonderful, and we danced the dabke till dawn!' },
      ],
      girl: 'the candidate (a girl): آسِفَةٌ جِدًّا · حَضَرْتِ (examiner)',
      notes: 'Task 2: lā nastaṭīʿu an + subjunctive, li-annanā + future. Task 4: mā raʾyuki an (to a woman). Polite formulae: alfu mabrūk · lā baʾs.',
    },
    {
      id: 'C', level: 'Develop', setting: 'after the holiday', title: 'Role play C — A memorable day', ar: 'يَوْمٌ لَا أَنْسَاهُ', you: 'a student', them: 'a classmate',
      tasks: [
        { ex: 'كَيْفَ كَانَتِ العُطْلَةُ؟', task: 'Give a general opinion with a reason.', help: 'كَانَتْ … لِأَنَّ …', model: 'كَانَتْ رَائِعَةً، لِأَنَّنَا احْتَفَلْنَا بِعِيدِ الفِطْرِ مَعَ كُلِّ العَائِلَةِ فِي بَيْتِ جَدِّي.', modelEn: 'It was wonderful, because we celebrated Eid al-Fitr with the whole family at my grandfather’s house.' },
        { ex: 'مَاذَا فَعَلْتُمْ يَوْمَ العِيدِ؟', task: 'Tell the day in order (three steps).', help: 'أَوَّلًا … ثُمَّ … بَعْدَ ذٰلِكَ …', model: 'أَوَّلًا صَلَّيْنَا صَلَاةَ العِيدِ، ثُمَّ زُرْنَا الأَقَارِبَ، وَبَعْدَ ذٰلِكَ تَغَدَّيْنَا مَعًا فِي الحَدِيقَةِ.', modelEn: 'First we prayed the Eid prayer, then we visited relatives, and after that we had lunch together in the garden.' },
        { ex: 'وَمَا أَجْمَلُ لَحْظَةٍ؟', task: 'Describe the best moment.', help: 'أَجْمَلُ لَحْظَةٍ كَانَتْ عِنْدَمَا …', model: 'أَجْمَلُ لَحْظَةٍ كَانَتْ عِنْدَمَا وَصَلَ عَمِّي مِنْ كَنَدَا مُفَاجَأَةً، وَلَمْ يَكُنْ أَحَدٌ يَعْرِفُ!', modelEn: 'The best moment was when my uncle arrived from Canada as a surprise — nobody knew!' },
        { ex: '… أَنَا بَقِيتُ فِي البَيْتِ.', task: 'ASK why, and show interest.', help: 'لِمَاذَا؟ هَلْ …؟', model: 'لِمَاذَا؟ هَلْ كُنْتَ مَرِيضًا؟', modelEn: 'Why? Were you ill?' },
        { unexpected: true, ex: 'مَاذَا سَتَفْعَلُ فِي العِيدِ القَادِمِ؟', task: 'Answer the unexpected question (future + invitation).', help: 'سَنَـ… هَلْ تُحِبُّ أَنْ …؟', model: 'سَنَحْتَفِلُ فِي بَيْتِنَا هٰذِهِ المَرَّةَ، فَهَلْ تُحِبُّ أَنْ تَأْتِيَ مَعَ أُسْرَتِكَ؟', modelEn: 'We will celebrate at our house this time — would you like to come with your family?' },
      ],
      girl: 'فَعَلْتُمْ (pl. same) · كُنْتِ مَرِيضَةً · تُحِبِّينَ أَنْ تَأْتِي مَعَ أُسْرَتِكِ',
      notes: 'Develop: kānat + accusative, sequencing, a superlative + ʿindamā, lam yakun, a follow-up question, the future + an invitation.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a culture podcast', title: 'Role play D — Celebrations then and now', ar: 'الاحْتِفَالَاتُ بَيْنَ الأَمْسِ وَاليَوْمِ', you: 'a young guest', them: 'a podcast host',
      tasks: [
        { ex: 'صِفْ لَنَا احْتِفَالًا عَائِلِيًّا لَا تَنْسَاهُ.', task: 'Tell a short story with sequencing.', help: 'لَنْ أَنْسَى … فَقَدْ … ثُمَّ …', model: 'لَنْ أَنْسَى زِفَافَ أُخْتِي؛ فَقَدِ اجْتَمَعَ أَكْثَرُ مِنْ مِئَتَيْ شَخْصٍ، ثُمَّ غَنَّتْ جَدَّتِي أُغْنِيَةً قَدِيمَةً فَبَكَى الجَمِيعُ.', modelEn: 'I will never forget my sister’s wedding: over two hundred people gathered, then my grandmother sang an old song and everyone cried.' },
        { ex: 'هَلْ تَغَيَّرَتِ الأَعْرَاسُ عَنِ المَاضِي؟', task: 'Compare past and present.', help: 'كَانَتْ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَتِ الأَعْرَاسُ تَسْتَمِرُّ سَبْعَةَ أَيَّامٍ فِي القَرْيَةِ، أَمَّا اليَوْمَ فَتَكُونُ لَيْلَةً وَاحِدَةً فِي قَاعَةٍ فَاخِرَةٍ.', modelEn: 'Weddings used to last seven days in the village; today they are one night in a luxury hall.' },
        { ex: 'هَلِ الحَفَلَاتُ الكَبِيرَةُ ضَرُورِيَّةٌ؟', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا تَجْمَعُ العَائِلَةَ، غَيْرَ أَنَّهَا مُكْلِفَةٌ جِدًّا، وَبَعْضُ الأُسَرِ تَقْتَرِضُ المَالَ لِأَجْلِهَا.', modelEn: 'It is true they bring the family together, but they are very costly, and some families borrow money for them.' },
        { ex: 'كَيْفَ تُغَيِّرُ وَسَائِلُ التَّوَاصُلِ احْتِفَالَاتِنَا؟', task: 'Give an effect with an example.', help: 'أَصْبَحَ النَّاسُ … فَمَثَلًا …', model: 'أَصْبَحَ النَّاسُ يُصَوِّرُونَ كُلَّ شَيْءٍ؛ فَمَثَلًا فِي آخِرِ عِيدِ مِيلَادٍ حَضَرْتُهُ، كَانَ الجَمِيعُ يَنْظُرُونَ إِلَى هَوَاتِفِهِمْ بَدَلًا مِنَ الكَعْكَةِ!', modelEn: 'People now film everything — at the last birthday I went to, everyone was looking at their phones instead of the cake!' },
        { unexpected: true, ex: 'لَوْ نَظَّمْتَ حَفْلَةً مِثَالِيَّةً، كَيْفَ تَكُونُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ نَظَّمْتُ …، لَـ…', model: 'لَوْ نَظَّمْتُ حَفْلَةً مِثَالِيَّةً، لَجَعَلْتُهَا فِي الهَوَاءِ الطَّلْقِ، وَلَطَلَبْتُ مِنَ الضُّيُوفِ أَنْ يَتْرُكُوا هَوَاتِفَهُمْ عِنْدَ البَابِ.', modelEn: 'If I organised a perfect party, I would hold it outdoors and ask guests to leave their phones at the door.' },
      ],
      girl: 'نَظَّمْتِ · تَنْسَيْنَهُ',
      notes: 'Stretch: lan ansā, fa-qad, sequencing, kāna + present vs ammā … fa-, a concession, an example, law … la- with ṭalabtu … an.',
      modelFoot: 'Stretch: a sequenced story, past vs present, ṣaḥīḥun anna … ghayra anna, badalan min and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'المُنَاسَبَاتُ', aim: 'one full sentence per question',
      qs: [
        { q: 'مَتَى عِيدُ مِيلَادِكَ؟ وَكَيْفَ تَحْتَفِلُ بِهِ؟', en: 'When is your birthday, and how do you celebrate?', start: 'عِيدُ مِيلَادِي فِي … وَ…', model: 'عِيدُ مِيلَادِي فِي مَايُو، وَنَأْكُلُ الكَعْكَ مَعَ الأُسْرَةِ.', modelEn: 'My birthday is in May, and we eat cake with the family.' },
        { q: 'أَيْنَ قَضَيْتَ عُطْلَتَكَ الأَخِيرَةَ؟', en: 'Where did you spend your last holiday?', start: 'قَضَيْتُ عُطْلَتِي فِي …', model: 'قَضَيْتُ عُطْلَتِي فِي وِيلْزَ مَعَ أُسْرَتِي.', modelEn: 'I spent my holiday in Wales with my family.' },
        { q: 'هَلْ تُحِبُّ الحَفَلَاتِ؟', en: 'Do you like parties?', start: 'نَعَمْ / لَا، لِأَنَّ …', model: 'نَعَمْ، أُحِبُّهَا، لِأَنِّي أَلْتَقِي بِأَصْدِقَائِي.', modelEn: 'Yes, I like them, because I meet my friends.' },
        { q: 'مَاذَا تَفْعَلُ فِي العِيدِ؟', en: 'What do you do at Eid?', start: 'فِي العِيدِ …', model: 'فِي العِيدِ نُصَلِّي، ثُمَّ نَزُورُ الأَقَارِبَ.', modelEn: 'At Eid we pray, then visit relatives.' },
        { q: 'مَاذَا سَتَفْعَلُ فِي العُطْلَةِ القَادِمَةِ؟', en: 'What will you do next holiday?', start: 'سَأَزُورُ … / سَأَذْهَبُ …', model: 'سَأَزُورُ جَدَّتِي فِي المَغْرِبِ.', modelEn: 'I will visit my grandmother in Morocco.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + the right time frame = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'تَجَارِبِي', aim: 'two or three sentences, with sequencing and a reason',
      qs: [
        { q: 'صِفْ آخِرَ حَفْلَةٍ ذَهَبْتَ إِلَيْهَا.', en: 'Describe the last party you went to.', start: 'ذَهَبْتُ إِلَى … أَوَّلًا … ثُمَّ …', model: 'ذَهَبْتُ إِلَى حَفْلَةِ صَدِيقِي؛ أَوَّلًا أَكَلْنَا، ثُمَّ لَعِبْنَا كُرَةَ القَدَمِ، وَأَخِيرًا قَطَعْنَا الكَعْكَةَ.', modelEn: 'I went to my friend’s party: first we ate, then played football, and finally cut the cake.' },
        { q: 'كَيْفَ تَعْتَذِرُ عَنْ دَعْوَةٍ بِأَدَبٍ؟', en: 'How do you decline an invitation politely?', start: 'أَشْكُرُهُ أَوَّلًا، ثُمَّ …', model: 'أَشْكُرُهُ أَوَّلًا عَلَى الدَّعْوَةِ، ثُمَّ أَشْرَحُ السَّبَبَ، وَأَقْتَرِحُ مَوْعِدًا آخَرَ.', modelEn: 'First I thank him for the invitation, then explain why, and suggest another time.' },
        { q: 'مَا أَجْمَلُ عُطْلَةٍ قَضَيْتَهَا؟ لِمَاذَا؟', en: 'What is the best holiday you have had? Why?', start: 'أَجْمَلُ عُطْلَةٍ كَانَتْ … لِأَنَّ …', model: 'أَجْمَلُ عُطْلَةٍ كَانَتْ فِي تُرْكِيَا، لِأَنَّنَا رَكِبْنَا مِنْطَادًا فَوْقَ الجِبَالِ فِي الفَجْرِ.', modelEn: 'The best holiday was in Turkey, because we rode a hot-air balloon over the mountains at dawn.' },
        { q: 'هَلْ حَدَثَتْ لَكَ مُفَاجَأَةٌ جَمِيلَةٌ؟', en: 'Has a nice surprise ever happened to you?', start: 'نَعَمْ، فِي … عِنْدَمَا …', model: 'نَعَمْ، فِي عِيدِ مِيلَادِي الرَّابِعَ عَشَرَ، نَظَّمَ أَصْدِقَائِي حَفْلَةً سِرِّيَّةً، وَلَمْ أَعْرِفْ شَيْئًا!', modelEn: 'Yes — on my fourteenth birthday my friends organised a secret party, and I knew nothing!' },
        { q: 'مَا خُطَطُكَ لِلصَّيْفِ؟', en: 'What are your plans for the summer?', start: 'أَوَّلًا سَـ… ثُمَّ …', model: 'أَوَّلًا سَأَعْمَلُ فِي مَحَلِّ عَمِّي، ثُمَّ سَنُسَافِرُ إِلَى الأُرْدُنِّ لِحُضُورِ زِفَافِ ابْنِ خَالِي.', modelEn: 'First I will work in my uncle’s shop, then we will travel to Jordan for my cousin’s wedding.' },
      ],
      foot: 'Develop: two or three sentences — sequencing, a superlative, a reason and future plans.',
      modelFoot: 'A sequenced story + a reason = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'المُنَاسَبَاتُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'لِمَاذَا تُعْتَبَرُ المُنَاسَبَاتُ العَائِلِيَّةُ مُهِمَّةً؟', en: 'Why are family occasions important?', start: 'لِأَنَّهَا … وَلِأَنَّ …', model: 'لِأَنَّهَا تَجْمَعُ أَفْرَادَ العَائِلَةِ الَّذِينَ يَعِيشُونَ بَعِيدًا، وَلِأَنَّهَا تَنْقُلُ التَّقَالِيدَ مِنْ جِيلٍ إِلَى جِيلٍ.', modelEn: 'Because they gather family members who live far away, and pass traditions from one generation to the next.' },
        { q: 'هَلِ الهَدَايَا الغَالِيَةُ أَفْضَلُ مِنَ البَسِيطَةِ؟', en: 'Are expensive presents better than simple ones?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الهَدَايَا الغَالِيَةَ جَمِيلَةٌ، غَيْرَ أَنَّ رِسَالَةً مَكْتُوبَةً بِاليَدِ قَدْ تَبْقَى فِي القَلْبِ أَطْوَلَ.', modelEn: 'It is true expensive presents are nice, but a handwritten letter may stay in the heart longer.' },
        { q: 'كَيْفَ كَانَ أَجْدَادُكَ يَحْتَفِلُونَ بِالعِيدِ؟', en: 'How did your grandparents celebrate Eid?', start: 'كَانُوا … أَمَّا نَحْنُ فَـ…', model: 'كَانُوا يَخْبِزُونَ الكَعْكَ مَعًا لَيْلَةَ العِيدِ، وَيَزُورُونَ كُلَّ بُيُوتِ القَرْيَةِ، أَمَّا نَحْنُ فَنَشْتَرِي الحَلَوِيَّاتِ وَنُرْسِلُ التَّهَانِيَ بِالهَاتِفِ.', modelEn: 'They baked biscuits together on Eid eve and visited every house in the village; we buy sweets and send greetings by phone.' },
        { q: 'صِفْ تَجْرِبَةً غَيَّرَتْ نَظْرَتَكَ إِلَى شَيْءٍ.', en: 'Describe an experience that changed your view of something.', start: 'عِنْدَمَا … فَهِمْتُ أَنَّ …', model: 'عِنْدَمَا تَطَوَّعْتُ فِي مَطْبَخٍ خَيْرِيٍّ فِي رَمَضَانَ، فَهِمْتُ أَنَّ العَطَاءَ يُفْرِحُ أَكْثَرَ مِنَ الأَخْذِ.', modelEn: 'When I volunteered in a charity kitchen in Ramadan, I understood that giving brings more joy than receiving.' },
        { q: 'لَوْ دَعَوْتَ ثَلَاثَةَ أَشْخَاصٍ مَشْهُورِينَ إِلَى العَشَاءِ، مَنْ تَدْعُو؟', en: 'If you invited three famous people to dinner, who would you invite?', start: 'لَوْ دَعَوْتُ …، لَدَعَوْتُ …', model: 'لَوْ دَعَوْتُ ثَلَاثَةَ أَشْخَاصٍ، لَدَعَوْتُ ابْنَ بَطُّوطَةَ وَمُحَمَّدَ صَلَاحٍ وَعَالِمَةَ فَضَاءٍ، لِأَسْمَعَ قِصَصَ رِحْلَاتِهِمْ.', modelEn: 'If I invited three people, I would invite Ibn Battuta, Mohamed Salah and a space scientist, to hear their travel stories.' },
      ],
      foot: 'Stretch: two reasons, a concession, kānū + present vs ammā … fa-, ʿindamā … fahimtu anna, and law … la-.',
      modelFoot: 'Stretch: alladhīna, ṣaḥīḥun anna … ghayra anna, past vs present, fahimtu anna, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I invited, accepted or declined politely.' },
    { route: 'core', text: 'I gave a day, a time and a place.' },
    { route: 'develop', text: 'I told a past event with awwalan … thumma … akhīran.' },
    { route: 'develop', text: 'I gave a reason for declining (li-anna …).' },
    { route: 'stretch', text: 'I compared past and present, conceded or used law … la-.' },
  ],
};
speak.words[8] = w(9, 'أَوَّلًا · ثُمَّ · بَعْدَ ذٰلِكَ · أَخِيرًا', 'first · then · after that · finally', null, { tag: 'sequencing' });
speak.words[0] = w(1, 'أَدْعُوكَ إِلَى حَفْلَتِي', 'I invite you to my party (m.)', [['f.', 'أَدْعُوكِ'], ['pl.', 'أَدْعُوكُمْ'], ['past', 'دَعَوْتُ']], { tag: 'inviting' });
speak.RP[0].tasks[0].help = 'أَدْعُوكَ إِلَى حَفْلَةِ عِيدِ مِيلَادِي …';
speak.RP[2].tasks[4].help = 'سَنَحْتَفِلُ … هَلْ تُحِبُّ أَنْ …؟';
speak.RP[3].tasks[1].help = 'كَانَتْ … أَمَّا اليَوْمَ فَتَكُونُ …';
speak.RP[3].tasks[4].help = 'لَوْ نَظَّمْتُ …، لَجَعَلْتُهَا …';
speak.CONV[1].qs[4].start = 'أَوَّلًا سَأَعْمَلُ … ثُمَّ …';
speak.CONV[2].qs[2].start = 'كَانُوا … أَمَّا نَحْنُ فَنَشْتَرِي …';
speak.CONV[2].qs[4].start = 'لَوْ دَعَوْتُ …، لَدَعَوْتُ …';

const Q2_CORE = `عَزِيزَتِي سَلْمَى،
كَيْفَ حَالُكِ؟ شُكْرًا جَزِيلًا عَلَى دَعْوَتِكِ إِلَى حَفْلَةِ عِيدِ مِيلَادِكِ يَوْمَ السَّبْتِ. أَنَا آسِفَةٌ جِدًّا، لَا أَسْتَطِيعُ أَنْ آتِيَ، لِأَنَّنَا سَنُسَافِرُ إِلَى لِيدْزَ لِزِفَافِ ابْنِ عَمِّي. فِي الأُسْبُوعِ المَاضِي اشْتَرَيْتُ فُسْتَانًا جَدِيدًا لِلزِّفَافِ، وَهُوَ أَخْضَرُ وَجَمِيلٌ. أَرْسَلْتُ لَكِ هَدِيَّةً صَغِيرَةً مَعَ أُخْتِي. مَا رَأْيُكِ أَنْ نَلْتَقِيَ فِي المَقْهَى يَوْمَ الثُّلَاثَاءِ؟ سَأَدْعُوكِ إِلَى كَعْكَةٍ كَبِيرَةٍ!
مَعَ مَحَبَّتِي،
هِنْدُ`;
const Q2_FULL = `عَزِيزَتِي سَلْمَى،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَقَدْ فَرِحْتُ كَثِيرًا بِدَعْوَتِكِ إِلَى حَفْلَةِ عِيدِ مِيلَادِكِ السَّادِسَ عَشَرَ، وَأَشْكُرُكِ عَلَيْهَا مِنْ قَلْبِي. لٰكِنِّي، لِلْأَسَفِ، لَا أَسْتَطِيعُ أَنْ أَحْضُرَهَا، لِأَنَّ أُسْرَتِي سَتُسَافِرُ يَوْمَ الجُمُعَةِ إِلَى لِيدْزَ لِحُضُورِ زِفَافِ ابْنِ عَمِّي، وَلَنْ نَرْجِعَ قَبْلَ يَوْمِ الإِثْنَيْنِ. فِي الأُسْبُوعِ المَاضِي قَضَيْنَا أَيَّامًا فِي التَّحْضِيرِ: أَوَّلًا اشْتَرَيْنَا المَلَابِسَ، ثُمَّ سَاعَدْتُ أُمِّي فِي تَغْلِيفِ الهَدَايَا. أَرْسَلْتُ لَكِ هَدِيَّةً صَغِيرَةً مَعَ أُخْتِي، وَأَتَمَنَّى أَنْ تُعْجِبَكِ. وَإِذَا كُنْتِ مُتَفَرِّغَةً يَوْمَ الثُّلَاثَاءِ، فَمَا رَأْيُكِ أَنْ نَحْتَفِلَ مَعًا فِي مَقْهَانَا المُفَضَّلِ؟
مَعَ أَطْيَبِ التَّمَنِّيَاتِ،
هِنْدُ`;
const Q3A_CORE = `لَنْ أَنْسَى يَوْمَ تَخَرُّجِ أُخْتِي مِنَ الجَامِعَةِ فِي الصَّيْفِ المَاضِي. كَانَ الحَفْلُ فِي لَنْدَنَ، وَذَهَبْنَا بِالقِطَارِ فِي الصَّبَاحِ البَاكِرِ. لَبِسْتُ مَلَابِسَ جَدِيدَةً، وَكُنْتُ سَعِيدًا جِدًّا. اسْتَغْرَقَتِ الرِّحْلَةُ سَاعَتَيْنِ، وَكَانَ القِطَارُ مُزْدَحِمًا.
أَوَّلًا دَخَلْنَا قَاعَةً كَبِيرَةً جِدًّا، وَجَلَسْنَا مَعَ عَائِلَاتٍ كَثِيرَةٍ. ثُمَّ سَمِعْنَا اسْمَ أُخْتِي، فَصَفَّقْنَا كَثِيرًا. بَعْدَ ذٰلِكَ أَخَذْنَا صُوَرًا أَمَامَ الجَامِعَةِ. أَخِيرًا تَعَشَّيْنَا فِي مَطْعَمٍ يَمَنِيٍّ، وَأَكَلْنَا المَنْدِيَ، ثُمَّ رَجَعْنَا إِلَى البَيْتِ مُتْعَبِينَ لٰكِنْ سُعَدَاءَ.
كَانَتْ أَجْمَلُ لَحْظَةٍ عِنْدَمَا بَكَتْ أُمِّي مِنَ الفَرَحِ. قَالَتْ: «أَنَا فَخُورَةٌ بِكِ». أَعْطَى أَبِي أُخْتِي سَاعَةً ذَهَبِيَّةً هَدِيَّةً، وَأَعْطَيْتُهَا أَنَا بِطَاقَةً كَتَبْتُ فِيهَا كَلِمَاتٍ جَمِيلَةً.
فِي رَأْيِي، هٰذِهِ المُنَاسَبَاتُ مُهِمَّةٌ، لِأَنَّهَا تَجْمَعُ العَائِلَةَ. فِي المُسْتَقْبَلِ سَأَدْرُسُ فِي الجَامِعَةِ أَيْضًا، وَسَأَدْعُو كُلَّ أُسْرَتِي إِلَى حَفْلِ تَخَرُّجِي.`;
const Q3A_FULL = `هُنَاكَ أَيَّامٌ تَبْقَى فِي الذَّاكِرَةِ كَأَنَّهَا حَدَثَتْ أَمْسِ، وَمِنْهَا يَوْمُ زِفَافِ خَالِي فِي عَمَّانَ قَبْلَ سَنَتَيْنِ. سَافَرْنَا قَبْلَ الزِّفَافِ بِأُسْبُوعٍ، فَوَجَدْنَا البَيْتَ مَلِيئًا بِالأَقَارِبِ القَادِمِينَ مِنْ كُلِّ مَكَانٍ: مِنَ الخَلِيجِ وَأَلْمَانْيَا وَأَمْرِيكَا، وَبَعْضُهُمْ لَمْ أَرَهُمْ مُنْذُ طُفُولَتِي.
قَضَيْنَا الأَيَّامَ الأُولَى فِي التَّحْضِيرِ؛ فَكَانَتِ النِّسَاءُ يَطْبُخْنَ المَنْسَفَ، أَمَّا نَحْنُ الشَّبَابَ فَعَلَّقْنَا الأَضْوَاءَ وَزَيَّنَّا السَّاحَةَ. وَفِي لَيْلَةِ الحِنَّاءِ رَقَصْنَا الدَّبْكَةَ حَتَّى مُنْتَصَفِ اللَّيْلِ، بَيْنَمَا كَانَ الكِبَارُ يُغَنُّونَ أَغَانِيَ قَدِيمَةً لَمْ أَسْمَعْهَا مِنْ قَبْلُ.
لٰكِنَّ اللَّحْظَةَ الَّتِي لَنْ أَنْسَاهَا حَدَثَتْ يَوْمَ الزِّفَافِ نَفْسِهِ؛ فَقَدْ وَقَفَ جَدِّي، وَهُوَ فِي الثَّمَانِينَ مِنْ عُمْرِهِ، وَأَلْقَى قَصِيدَةً كَتَبَهَا لِخَالِي، فَسَكَتَ الجَمِيعُ، ثُمَّ صَفَّقُوا طَوِيلًا وَالدُّمُوعُ فِي عُيُونِهِمْ.
صَحِيحٌ أَنَّ الرِّحْلَةَ كَانَتْ مُتْعِبَةً وَمُكْلِفَةً، غَيْرَ أَنَّهَا ذَكَّرَتْنِي بِأَنَّ جُذُورِي هُنَاكَ. وَإِذَا تَزَوَّجْتُ فِي يَوْمٍ مِنَ الأَيَّامِ، فَسَأُقِيمُ زِفَافِي فِي القَرْيَةِ نَفْسِهَا، وَلَوْ كَانَ جَدِّي مَا زَالَ حَيًّا، لَطَلَبْتُ مِنْهُ قَصِيدَةً أُخْرَى.`;
const Q3B_FULL = `تَغَيَّرَتْ طَرِيقَةُ احْتِفَالِنَا بِالمُنَاسَبَاتِ كَثِيرًا خِلَالَ جِيلٍ وَاحِدٍ. فَالأَعْرَاسُ الَّتِي كَانَتْ تَسْتَمِرُّ أُسْبُوعًا فِي القَرْيَةِ، وَيُشَارِكُ فِيهَا الجِيرَانُ كُلُّهُمْ، أَصْبَحَتْ لَيْلَةً وَاحِدَةً فِي قَاعَةٍ فَاخِرَةٍ مُكْلِفَةٍ، وَكَثِيرٌ مِنَ الضُّيُوفِ لَا يَعْرِفُونَ العَرُوسَيْنِ.
فِي المَاضِي كَانَ النَّاسُ يَطْبُخُونَ مَعًا، وَيَصْنَعُونَ الزِّينَةَ بِأَيْدِيهِمْ، وَيُغَنُّونَ أَغَانِيَ تَقْلِيدِيَّةً، أَمَّا اليَوْمَ فَنَشْتَرِي كُلَّ شَيْءٍ جَاهِزًا، وَنَقْضِي جُزْءًا كَبِيرًا مِنَ الحَفْلَةِ فِي تَصْوِيرِهَا لِوَسَائِلِ التَّوَاصُلِ، بَدَلًا مِنْ أَنْ نَعِيشَ اللَّحْظَةَ مَعَ مَنْ نُحِبُّ.
شَعَرْتُ بِهٰذَا الفَرْقِ فِي العِيدِ المَاضِي؛ فَقَدِ اقْتَرَحَتْ جَدَّتِي أَنْ نَخْبِزَ كَعْكَ العِيدِ بِأَنْفُسِنَا بَدَلًا مِنْ شِرَائِهِ. فِي البِدَايَةِ تَذَمَّرْنَا، لٰكِنَّنَا قَضَيْنَا لَيْلَةً كَامِلَةً نَضْحَكُ وَنَعْجِنُ وَنَسْمَعُ قِصَصَهَا، فَكَانَتْ أَجْمَلَ لَيْلَةٍ فِي العِيدِ كُلِّهِ.
صَحِيحٌ أَنَّ الحَيَاةَ الحَدِيثَةَ جَعَلَتِ التَّحْضِيرَ أَسْهَلَ، غَيْرَ أَنَّهَا أَخَذَتْ مِنَّا جُزْءًا مِنْ رُوحِ المُنَاسَبَاتِ. وَلَوْ أَعَدْنَا بَعْضَ التَّقَالِيدِ البَسِيطَةِ إِلَى احْتِفَالَاتِنَا، لَشَعَرْنَا بِقُرْبٍ أَكْبَرَ مِنْ عَائِلَاتِنَا وَمِنْ تُرَاثِنَا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in an RSVP card, write an email declining an invitation politely, and write an extended piece about a memorable occasion or about how celebrations have changed.',
  lift: [
    { ar: 'شُكْرًا جَزِيلًا عَلَى دَعْوَتِكِ', en: 'thank you very much for your invitation' },
    { ar: 'آسِفَةٌ جِدًّا، لَا أَسْتَطِيعُ أَنْ آتِيَ، لِأَنَّ …', en: 'I’m very sorry, I can’t come, because …' },
    { ar: 'أَوَّلًا … ثُمَّ … وَأَخِيرًا …', en: 'first … then … and finally …' },
  ],
  checkTip: 'Check: we-forms in the past end in -nā (qaḍaynā, iḥtafalnā); lā astaṭīʿu an + verb in -a; lan + verb in -a (lan narjiʿa); sequencing words; mā raʾyuki an + verb in -a.',
  FORM: {
    title: 'Wedding RSVP card', ar: 'بِطَاقَةُ الرَّدِّ عَلَى الدَّعْوَةِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Your name', model: 'هِنْدُ سَعِيدٍ', modelEn: 'Hind Said' },
      { core: true, ar: 'هَلْ سَتَحْضُرُ؟', en: 'Will you attend?', model: 'نَعَمْ، بِكُلِّ سُرُورٍ', modelEn: 'yes, with pleasure' },
      { core: true, ar: 'عَدَدُ الأَشْخَاصِ', en: 'Number of people', model: 'أَرْبَعَةُ أَشْخَاصٍ', modelEn: 'four people' },
      { core: true, ar: 'أَسْمَاؤُهُمْ', en: 'Their names', model: 'أَبِي وَأُمِّي وَأَخِي وَأَنَا', modelEn: 'my father, mother, brother and me' },
      { core: true, ar: 'طَعَامٌ لَا تَأْكُلُهُ', en: 'A food you don’t eat', model: 'السَّمَكُ', modelEn: 'fish' },
      { core: true, ar: 'كَيْفَ سَتَصِلُ؟', en: 'How you will get there', model: 'بِالسَّيَّارَةِ', modelEn: 'by car' },
      { ar: 'أُغْنِيَةٌ تَطْلُبُهَا', en: 'A song you would like', model: 'أُغْنِيَةٌ تُرَاثِيَّةٌ أُرْدُنِّيَّةٌ', modelEn: 'a traditional Jordanian song' },
      { ar: 'جُمْلَةٌ: رِسَالَةٌ قَصِيرَةٌ لِلْعَرُوسَيْنِ', en: 'ONE sentence: a short message to the couple', model: 'أَلْفُ مَبْرُوكٍ، وَنَتَمَنَّى لَكُمَا حَيَاةً سَعِيدَةً مَلِيئَةً بِالحُبِّ.', modelEn: 'Many congratulations — we wish you both a happy life full of love.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with a dual (lakumā).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 8 uses the dual lakumā (to you two). A girl writing box 2 may add: سَأَحْضُرُ مَعَ أُسْرَتِي.',
  },
  Q2: {
    short: 'an email declining an invitation', title: 'Question 2: sorry, I can’t come', ar: 'رِسَالَةُ اعْتِذَارٍ عَنْ دَعْوَةٍ',
    task: 'Your friend has invited you to her birthday party, but you cannot go. Write an email in Arabic of about 80–90 words. You must include: • thanks for the invitation • why you cannot come • what you did last week to prepare for your own family event • a suggestion to celebrate together another time.',
    checklist: ['All four bullet points, in order.', 'A polite greeting and closing.', 'A polite refusal with a reason.', 'A past paragraph with sequencing.', 'A suggestion (mā raʾyuki an …?).'],
    phrases: [['شُكْرًا جَزِيلًا عَلَى دَعْوَتِكِ', 'thank you for your invitation'], ['آسِفَةٌ، لَا أَسْتَطِيعُ … لِأَنَّ …', 'sorry, I can’t … because …'], ['أَوَّلًا … ثُمَّ …', 'first … then …'], ['مَا رَأْيُكِ أَنْ نَلْتَقِيَ …؟', 'how about we meet …?']],
    rubric: [
      ['task', 'دَعَتْكِ صَدِيقَتُكِ إِلَى حَفْلَةِ عِيدِ مِيلَادِهَا، لٰكِنَّكِ لَا تَسْتَطِيعِينَ الذَّهَابَ. اكْتُبِي لَهَا (٨٠–٩٠ كَلِمَةً).', 'Your friend invited you to her party but you can’t go: write to her (80–90 words).'],
      ['1', 'اشْكُرِيهَا عَلَى الدَّعْوَةِ.', 'Thank her for the invitation'],
      ['2', 'لِمَاذَا لَا تَسْتَطِيعِينَ الحُضُورَ؟', 'Why you can’t come'],
      ['3', 'مَاذَا فَعَلْتِ الأُسْبُوعَ المَاضِي لِتَسْتَعِدِّي لِمُنَاسَبَةِ أُسْرَتِكِ؟', 'What you did last week to prepare'],
      ['4', 'اقْتَرِحِي أَنْ تَحْتَفِلَا مَعًا فِي وَقْتٍ آخَرَ.', 'Suggest celebrating together another time'],
    ],
    qwords: 'اشْكُرِي (thank) · لِمَاذَا (why) · مَاذَا (what) · اقْتَرِحِي (suggest) — two instructions to a girl; bullet 4 uses the DUAL (taḥtafilā = you two celebrate)',
    frames: [
      ['start', 'عَزِيزَتِي ______ ، كَيْفَ حَالُكِ؟', 'Dear …, how are you?'],
      ['1', 'شُكْرًا جَزِيلًا عَلَى دَعْوَتِكِ إِلَى ______ .', 'Thank you very much for inviting me to …'],
      ['2', 'أَنَا آسِفَةٌ، لَا أَسْتَطِيعُ أَنْ آتِيَ، لِأَنَّ ______ .', 'I’m sorry, I can’t come, because …'],
      ['3', 'فِي الأُسْبُوعِ المَاضِي، أَوَّلًا ______ ، ثُمَّ ______ .', 'Last week, first I …, then I …'],
      ['4', 'مَا رَأْيُكِ أَنْ نَلْتَقِيَ يَوْمَ ______ فِي ______ ؟', 'How about we meet on … at …?'],
      ['end', 'مَعَ مَحَبَّتِي، ______', 'With love, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Dear Salma, how are you? Thank you very much for inviting me to your birthday party on Saturday. I’m very sorry, I can’t come, because we are travelling to Leeds for my cousin’s wedding. Last week I bought a new dress for the wedding — it’s green and pretty. I’ve sent you a small present with my sister. How about we meet at the café on Tuesday? I’ll treat you to a big cake! With love, Hind.”',
      find: ['شُكْرًا جَزِيلًا عَلَى دَعْوَتِكِ', 'لَا أَسْتَطِيعُ أَنْ آتِيَ', 'اشْتَرَيْتُ فُسْتَانًا', 'مَا رَأْيُكِ أَنْ نَلْتَقِيَ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Salma, greetings. I was delighted with your invitation to your sixteenth birthday party, and thank you from my heart. But unfortunately I can’t attend, because my family is travelling to Leeds on Friday for my cousin’s wedding, and we won’t be back before Monday. Last week we spent days preparing: first we bought the clothes, then I helped my mum wrap the presents. I’ve sent you a small present with my sister and hope you like it. And if you are free on Tuesday, how about we celebrate together in our favourite café? With best wishes, Hind.”',
      find: ['أَشْكُرُكِ عَلَيْهَا', 'وَلَنْ نَرْجِعَ قَبْلَ', 'أَوَّلًا … ثُمَّ', 'إِذَا كُنْتِ … فَمَا رَأْيُكِ'],
    },
  },
  Q3: {
    a: { title: 'مُنَاسَبَةٌ لَا أَنْسَاهَا', en: 'An occasion I will never forget', bullets: 'مَا المُنَاسَبَةُ؟ وَمَتَى وَأَيْنَ؟ · مَاذَا فَعَلْتُمْ؟ (بِالتَّرْتِيبِ) · أَجْمَلُ لَحْظَةٍ · لِمَاذَا هِيَ مُهِمَّةٌ؟ وَخُطَطُكَ', bulletsEn: 'What, when and where · what you did (in order) · the best moment · why it matters; your plans' },
    b: { title: 'احْتِفَالَاتُنَا بَيْنَ الأَمْسِ وَاليَوْمِ', en: 'Our celebrations, then and now', bullets: 'كَيْفَ تَغَيَّرَتِ الاحْتِفَالَاتُ؟ · المَاضِي وَالحَاضِرُ · تَجْرِبَةٌ شَخْصِيَّةٌ · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'How celebrations have changed · past and present · a personal experience · your opinion and suggestion' },
    plan: [
      'Set the scene — what, when, where, who; how you travelled (past).',
      'The day in order — awwalan, thumma, baʿda dhālika, akhīran; we-forms in -nā.',
      'The best moment — ajmalu laḥẓa kānat ʿindamā …; feelings.',
      'Why it matters + future — li-annahā …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, idhā … fa-sa-, law … la-.',
    ],
    frames: [
      { ar: 'المُنَاسَبَاتُ تَجْمَعُ العَائِلَةَ.', en: 'present: occasions bring the family together.' },
      { ar: 'أَوَّلًا صَلَّيْنَا، ثُمَّ زُرْنَا الأَقَارِبَ.', en: 'past: first we prayed, then we visited relatives.' },
      { ar: 'سَأَدْعُو كُلَّ أُسْرَتِي.', en: 'future: I will invite my whole family.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'My sister’s university graduation last summer in London: early train, new clothes, very happy; two hours on a crowded train → first a huge hall with many families; then we heard her name and clapped a lot; after that photos outside the university; finally dinner in a Yemeni restaurant (mandi), home tired but happy → the best moment: Mum crying with joy — “I’m proud of you”; Dad gave my sister a gold watch, and I gave her a card with kind words → these occasions matter because they bring the family together; I’ll go to university too and invite my whole family to my graduation.', find: ['لَنْ أَنْسَى', 'أَوَّلًا … ثُمَّ … بَعْدَ ذٰلِكَ … أَخِيرًا', 'أَجْمَلُ لَحْظَةٍ … عِنْدَمَا', 'سَأَدْعُو'], notes: 'Core model: lan ansā, clear sequencing with we-forms, a superlative + ʿindamā, direct speech, an opinion and a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Some days stay in memory as if they happened yesterday — like my uncle’s wedding in Amman two years ago: we arrived a week early to a house full of relatives from the Gulf, Germany and America, some I hadn’t seen since childhood → the first days were preparation: the women cooked mansaf; as for us young people, we hung the lights and decorated the square; on henna night we danced dabke till midnight while the elders sang old songs I had never heard → but the moment I’ll never forget came on the wedding day: my grandfather, in his eighties, stood and recited a poem he had written for my uncle; everyone fell silent, then clapped for a long time with tears in their eyes → it is true the trip was tiring and expensive, but it reminded me my roots are there; if I marry one day, I’ll hold my wedding in the same village, “and if my grandfather were still alive, I would ask him for another poem”.', find: ['كَأَنَّهَا حَدَثَتْ أَمْسِ', 'أَمَّا نَحْنُ الشَّبَابَ فَعَلَّقْنَا', 'وَهُوَ فِي الثَّمَانِينَ', 'لَوْ كَانَ … لَطَلَبْتُ'], notes: 'Full-mark model: kaʾanna, al-qādimīn min, feminine plural past habit (kānat an-nisāʾu yaṭbukhna), ammā … fa-, a ḥāl (wa-huwa …), a relative clause (allatī lan ansāhā), a concession, idhā … fa-sa- and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'celebrations then and now', text: Q3B_FULL, en: 'Celebrations have changed within one generation: week-long village weddings shared by all the neighbours have become one night in an expensive luxury hall where many guests don’t know the couple → in the past people cooked together, made decorations by hand and sang traditional songs; as for today, we buy everything ready-made and spend much of the party filming it for social media instead of living the moment with those we love → I felt the difference last Eid: Grandma suggested we bake the Eid biscuits ourselves instead of buying them; we grumbled at first, but spent a whole night laughing, kneading and hearing her stories — the best night of the whole Eid → it is true modern life made preparation easier, but it took part of the spirit of our occasions; “if we brought some simple traditions back into our celebrations, we would feel much closer to our families and our heritage”.', find: ['الَّتِي كَانَتْ تَسْتَمِرُّ', 'أَمَّا اليَوْمَ فَنَشْتَرِي', 'بَدَلًا مِنْ شِرَائِهِ', 'لَوْ أَعَدْنَا … لَشَعَرْنَا'], notes: 'Full-mark model for the Stretch title: a relative clause with kāna + present, kāna + present vs ammā … fa-, iqtaraḥat an + subjunctive, badalan min, a superlative, a concession and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; a polite reply.' },
    { route: 'core', text: 'Q2: all four bullet points, with a polite greeting and closing.' },
    { route: 'develop', text: 'Q2: lā astaṭīʿu an … li-anna … and a suggestion.' },
    { route: 'develop', text: 'Q3: a sequenced story (awwalan … thumma … akhīran).' },
    { route: 'stretch', text: 'Q3: ammā … fa-, a concession or law … la-.' },
  ],
};

module.exports = { speak, write };
