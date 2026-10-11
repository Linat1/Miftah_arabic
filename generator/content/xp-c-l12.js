'use strict';
/* Exam-practice data · TC-L12 · Topic C Review and Four-Skills Assessment — a full Topic C mock: countries and places, nature,
   weather, environmental problems and solutions, the digital world, documents and booking, town services, shopping, measurements. Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'C', n: 12, short: 'Topic C Mock Exam', arShort: 'امْتِحَانٌ تَجْرِيبِيٌّ', fileTitle: 'Review_Four_Skills_Assessment', title: 'Topic C Review — mock exam practice', ar: 'مُرَاجَعَةُ المِحْوَرِ ج', icon: 'FaClipboardCheck', grammar: 'all of Topic C: nisba and compass points, agreement with non-human plurals, weather verbs and comparatives, cause and effect, advice and obligation, verbs with prepositions, booking tenses, yūjadu / tūjadu, prices and measurements, the passive' };

const speak = {
  ...base,
  focus: 'A full Paper 3 mock in breakout rooms: four role plays and a mixed topic conversation covering the whole of Topic C — places, nature and weather, the environment, the digital world, bookings, town life, shopping and materials.',
  words: [
    w(1, 'يَقَعُ · تَقَعُ فِي …', 'is located in (m. · f.)', [['in the north of', 'فِي شَمَالِ'], ['nisba', 'مِصْرِيٌّ · مِصْرِيَّةٌ']], { tag: 'L01' }),
    w(2, 'جِبَالٌ عَالِيَةٌ', 'high mountains', [['non-hum. pl. → f. sg.', 'غَابَاتٌ كَثِيفَةٌ'], ['live (f.)', 'تَعِيشُ']], { tag: 'L02' }),
    w(3, 'تَسْقُطُ الأَمْطَارُ', 'it rains (rain falls)', [['colder than', 'أَبْرَدُ مِنْ'], ['it will be', 'سَيَكُونُ الجَوُّ …']], { tag: 'L03' }),
    w(4, 'بِسَبَبِ … مِمَّا يُسَبِّبُ …', 'because of … which causes …', [['leads to', 'يُؤَدِّي إِلَى'], ['passive', 'تُرْمَى · يُلَوَّثُ']], { tag: 'L04' }),
    w(5, 'يَجِبُ عَلَى … أَنْ', '… must …', [['we should', 'يَنْبَغِي أَنْ'], ['so that', 'لِكَيْ']], { tag: 'L05' }),
    w(6, 'أَتَوَاصَلُ مَعَ …', 'I keep in touch with …', [['I comment on', 'أُعَلِّقُ عَلَى'], ['I search for', 'أَبْحَثُ عَنْ']], { tag: 'L06' }),
    w(7, 'حَجَزْتُ · سَأَحْجِزُ', 'I booked · I will book', [['I stay in', 'أُقِيمُ فِي'], ['was sent', 'أُرْسِلَ']], { tag: 'L07' }),
    w(8, 'يُوجَدُ · تُوجَدُ', 'there is (m. · f.)', [['opposite', 'مُقَابِلَ'], ['built of', 'مَبْنِيٌّ مِنْ']], { tag: 'L08' }),
    w(9, 'كَمْ ثَمَنُهُ / ثَمَنُهَا؟', 'how much is it? (m. · f.)', [['cheaper', 'أَرْخَصُ'], ['20 pounds', 'عِشْرُونَ جُنَيْهًا']], { tag: 'L09' }),
    w(10, 'طُولُهُ مِتْرَانِ', 'it is two metres long', [['made of (f.)', 'مَصْنُوعَةٌ مِنْ'], ['round (f.)', 'دَائِرِيَّةٌ']], { tag: 'L10' }),
    w(11, 'أَوَّلًا · بِالإِضَافَةِ إِلَى ذٰلِكَ', 'firstly · in addition', [['however', 'مَعَ ذٰلِكَ'], ['therefore', 'لِذٰلِكَ']], { tag: 'L11' }),
    w(12, 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it is true that … but …', [['if … would', 'لَوْ كُنْتُ … لَاخْتَرْتُ'], ['if … will', 'إِذَا … فَسَوْفَ']], { tag: 'top band' }),
  ],
  words1: { eyebrow: 'Language bank · one key structure from each part of Topic C', title: 'Topic C in twelve structures', ar: 'المِحْوَرُ ج فِي اثْنَتَيْ عَشْرَةَ بِنْيَةً', notes: 'LANGUAGE BANK (2 min) — a revision map: each card recalls one lesson (L01–L11). Ask students to say ONE sentence with each structure before the role plays.' },
  words2: { eyebrow: 'Language bank · structures that lift a mark', title: 'Precise, linked, developed', ar: 'بِنْيَاتٌ تَرْفَعُ الدَّرَجَةَ', notes: 'LANGUAGE BANK (2 min) — top-band answers are precise (agreement, numbers, prepositions), linked (awwalan, li-dhālika, maʿa dhālika) and developed (a concession and a conditional).' },
  checkCore: 'completed every role-play task, including the unexpected one',
  checkDevelop: 'used three Topic C structures accurately and two time frames',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a train station', title: 'Role play A — At the train station abroad', ar: 'فِي مَحَطَّةِ القِطَارِ', you: 'a traveller', them: 'the ticket-office clerk',
      tasks: [
        { core: true, ex: 'صَبَاحَ الخَيْرِ، إِلَى أَيْنَ؟', task: 'Say where you want to go.', help: 'أُرِيدُ أَنْ أُسَافِرَ إِلَى …', model: 'أُرِيدُ أَنْ أُسَافِرَ إِلَى الإِسْكَنْدَرِيَّةِ.', modelEn: 'I want to travel to Alexandria.' },
        { core: true, ex: 'كَمْ تَذْكِرَةً؟', task: 'Say how many tickets.', help: 'أُرِيدُ … تَذَاكِرَ', model: 'أُرِيدُ ثَلَاثَ تَذَاكِرَ، مِنْ فَضْلِكَ.', modelEn: 'I want three tickets, please.' },
        { core: true, ex: 'ثَمَنُ التَّذْكِرَةِ خَمْسُونَ جُنَيْهًا.', task: 'Ask if there is a cheaper ticket.', help: 'هَلْ تُوجَدُ تَذْكِرَةٌ …؟', model: 'هَلْ تُوجَدُ تَذْكِرَةٌ أَرْخَصُ لِلطُّلَّابِ؟', modelEn: 'Is there a cheaper ticket for students?' },
        { core: true, ex: 'نَعَمْ، بِثَلَاثِينَ جُنَيْهًا.', task: 'Ask about the weather there.', help: 'كَيْفَ الجَوُّ فِي …؟', model: 'شُكْرًا. كَيْفَ الجَوُّ فِي الإِسْكَنْدَرِيَّةِ الآنَ؟', modelEn: 'Thanks. What is the weather like in Alexandria now?' },
        { core: true, unexpected: true, ex: 'أَيْنَ تَقَعُ مَدِينَتُكَ؟', task: 'Answer the unexpected question.', help: 'تَقَعُ مَدِينَتِي فِي … مِنْ …', model: 'تَقَعُ مَدِينَتِي فِي شَمَالِ بَرِيطَانْيَا.', modelEn: 'My city is in the north of Britain.' },
      ],
      girl: 'مَدِينَتُكِ',
      notes: 'Core: thalātha tadhākira (3–10 + pl.), tūjadu tadhkiratun arkhaṣu, prices with junayhan, a weather question, taqaʿu fī shamāli (L01).',
    },
    {
      id: 'B', level: 'Core+', setting: 'a sports shop', title: 'Role play B — Buying hiking boots', ar: 'حِذَاءٌ لِلْمَشْيِ فِي الجِبَالِ', you: 'a customer', them: 'a shop assistant',
      tasks: [
        { core: true, ex: 'أَهْلًا، مَاذَا تَحْتَاجُ؟', task: 'Say what you need and where you are going.', help: 'أَحْتَاجُ إِلَى … لِأَنِّي سَأَذْهَبُ إِلَى …', model: 'أَحْتَاجُ إِلَى حِذَاءٍ لِلْمَشْيِ، لِأَنِّي سَأَذْهَبُ إِلَى جِبَالِ اسْكُتْلَنْدَا.', modelEn: 'I need walking boots, because I’m going to the Scottish mountains.' },
        { core: true, ex: 'كَيْفَ الطَّقْسُ هُنَاكَ؟', task: 'Describe the weather.', help: 'الجَوُّ هُنَاكَ … وَتَسْقُطُ …', model: 'الجَوُّ هُنَاكَ بَارِدٌ، وَتَسْقُطُ الأَمْطَارُ كَثِيرًا.', modelEn: 'It’s cold there, and it rains a lot.' },
        { ex: 'هٰذَا الحِذَاءُ مُضَادٌّ لِلْمَاءِ.', task: 'ASK what it is made of and the price.', help: 'مِمَّ هُوَ مَصْنُوعٌ؟ وَكَمْ ثَمَنُهُ؟', model: 'مِمَّ هُوَ مَصْنُوعٌ؟ وَكَمْ ثَمَنُهُ؟', modelEn: 'What is it made of? And how much is it?' },
        { ex: 'مِنَ الجِلْدِ، وَثَمَنُهُ ثَمَانُونَ جُنَيْهًا.', task: 'Compare with another pair and choose.', help: 'هُوَ أَغْلَى مِنْ … لٰكِنَّهُ أَ…', model: 'هُوَ أَغْلَى مِنَ الحِذَاءِ الآخَرِ، لٰكِنَّهُ أَقْوَى وَأَخَفُّ، لِذٰلِكَ سَآخُذُهُ.', modelEn: 'It’s dearer than the other pair, but stronger and lighter, so I’ll take it.' },
        { unexpected: true, ex: 'هَلْ تُرِيدُ كِيسًا بْلَاسْتِيكِيًّا؟', task: 'Answer the unexpected question.', help: 'لَا، شُكْرًا، … لِأَنَّ …', model: 'لَا، شُكْرًا، عِنْدِي حَقِيبَةٌ مِنَ القُمَاشِ، لِأَنَّ البْلَاسْتِيكَ يُلَوِّثُ البِيئَةَ.', modelEn: 'No thanks, I have a cloth bag, because plastic pollutes the environment.' },
      ],
      girl: 'تَحْتَاجِينَ · تُرِيدِينَ',
      notes: 'Core+: aḥtāju ilā, weather (L03), mimma huwa maṣnūʿ? (L10), thamānūna junayhan (L09), comparatives + li-dhālika (L11), the environment (L04).',
    },
    {
      id: 'C', level: 'Develop', setting: 'a holiday report', title: 'Role play C — My eco-holiday', ar: 'عُطْلَةٌ صَدِيقَةٌ لِلْبِيئَةِ', you: 'a student', them: 'your Arabic teacher',
      tasks: [
        { ex: 'أَيْنَ قَضَيْتَ العُطْلَةَ؟ وَكَيْفَ حَجَزْتَ؟', task: 'Say where and how you booked (past).', help: 'قَضَيْتُهَا فِي … وَحَجَزْنَا … عَلَى الإِنْتَرْنِتِ', model: 'قَضَيْتُهَا فِي جِبَالِ الأَطْلَسِ فِي المَغْرِبِ، وَحَجَزْنَا بَيْتًا رِيفِيًّا صَغِيرًا عَلَى الإِنْتَرْنِتِ.', modelEn: 'In the Atlas Mountains in Morocco; we booked a small country house online.' },
        { ex: 'صِفْ لِي المَكَانَ.', task: 'Describe nature with agreement.', help: 'كَانَتِ الجِبَالُ … وَالوِدْيَانُ …', model: 'كَانَتِ الجِبَالُ عَالِيَةً، وَالوِدْيَانُ خَضْرَاءَ، وَالبَيْتُ مَبْنِيٌّ مِنَ الطِّينِ وَالحَجَرِ.', modelEn: 'The mountains were high, the valleys green, and the house built of mud and stone.' },
        { ex: 'لِمَاذَا تُسَمِّيهَا عُطْلَةً صَدِيقَةً لِلْبِيئَةِ؟', task: 'Give two reasons with linkers.', help: 'أَوَّلًا … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أَوَّلًا، سَافَرْنَا بِالقِطَارِ بَدَلًا مِنَ الطَّائِرَةِ؛ بِالإِضَافَةِ إِلَى ذٰلِكَ، كَانَ البَيْتُ يَعْمَلُ بِالطَّاقَةِ الشَّمْسِيَّةِ.', modelEn: 'Firstly, we went by train instead of plane; in addition, the house ran on solar power.' },
        { ex: 'وَهَلِ اسْتَخْدَمْتَ هَاتِفَكَ كَثِيرًا؟', task: 'Contrast then and now.', help: 'لَا، لِأَنَّ … أَمَّا فِي البَيْتِ فَـ…', model: 'لَا، لِأَنَّ الإِنْتَرْنِتَ كَانَ ضَعِيفًا، أَمَّا فِي البَيْتِ فَأَقْضِي سَاعَاتٍ أَمَامَ الشَّاشَةِ.', modelEn: 'No, the internet was weak; at home, though, I spend hours in front of the screen.' },
        { unexpected: true, ex: 'هَلْ سَتَعُودُ إِلَى هُنَاكَ؟', task: 'Answer the unexpected question (future + condition).', help: 'نَعَمْ، سَأَعُودُ … إِذَا …', model: 'نَعَمْ، سَأَعُودُ فِي الرَّبِيعِ إِذَا وَفَّرْتُ مِنْ مَصْرُوفِي، لِأَنَّ الجَوَّ سَيَكُونُ أَدْفَأَ.', modelEn: 'Yes, I’ll go back in spring if I save from my pocket money, because it will be warmer.' },
      ],
      girl: 'قَضَيْتِ · حَجَزْتِ · صِفِي · اسْتَخْدَمْتِ · سَتَعُودِينَ',
      notes: 'Develop: booking in the past (L07), kānat + accusative with non-human plurals (L02), mabnī min (L08), linkers (L11), kāna + present vs ammā … fa- (L06), a future with idhā (L03).',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a radio debate', title: 'Role play D — Technology: problem or solution for the planet?', ar: 'التِّكْنُولُوجْيَا وَالكَوْكَبُ', you: 'a student guest', them: 'the radio presenter',
      tasks: [
        { ex: 'هَلْ تُسَاعِدُ التِّكْنُولُوجْيَا البِيئَةَ أَمْ تَضُرُّهَا؟', task: 'Give a balanced view.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تُسَاعِدُنَا الأَلْوَاحُ الشَّمْسِيَّةُ وَالسَّيَّارَاتُ الكَهْرَبَائِيَّةُ، وَمِنْ نَاحِيَةٍ أُخْرَى، تُرْمَى مَلَايِينُ الأَجْهِزَةِ كُلَّ سَنَةٍ.', modelEn: 'Solar panels and electric cars help us, but millions of devices are thrown away every year.' },
        { ex: 'وَمَا نَتِيجَةُ رَمْيِ الأَجْهِزَةِ؟', task: 'Give a cause → effect chain.', help: 'تُرْمَى … مِمَّا يُؤَدِّي إِلَى …', model: 'تُرْمَى فِي مَكَبَّاتٍ بَعِيدَةٍ، مِمَّا يُؤَدِّي إِلَى تَلَوُّثِ التُّرْبَةِ وَالمِيَاهِ بِالمَعَادِنِ الضَّارَّةِ.', modelEn: 'They are dumped in distant landfills, which pollutes soil and water with harmful metals.' },
        { ex: 'هَلْ غَيَّرْتَ أَنْتَ شَيْئًا؟', task: 'Describe a past action with a result.', help: 'نَعَمْ، أَصْلَحْتُ … بَدَلًا مِنْ … فَـ…', model: 'نَعَمْ، أَصْلَحْتُ شَاشَةَ هَاتِفِي بَدَلًا مِنْ شِرَاءِ هَاتِفٍ جَدِيدٍ، فَوَفَّرْتُ مِئَتَيْ جُنَيْهٍ.', modelEn: 'Yes, I repaired my phone screen instead of buying a new phone, and saved £200.' },
        { ex: 'لٰكِنَّ الشَّرِكَاتِ تُرِيدُ أَنْ نَشْتَرِيَ دَائِمًا!', task: 'Concede and say who must act.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّهُ يَجِبُ عَلَى …', model: 'صَحِيحٌ أَنَّ لِلشَّرِكَاتِ مَصْلَحَةً فِي ذٰلِكَ، غَيْرَ أَنَّهُ يَجِبُ عَلَى الحُكُومَاتِ أَنْ تُلْزِمَهَا بِصِنَاعَةِ أَجْهِزَةٍ تَدُومُ أَطْوَلَ.', modelEn: 'Companies do profit from it, but governments must oblige them to make devices that last longer.' },
        { unexpected: true, ex: 'لَوْ عِشْتَ قَبْلَ مِئَةِ سَنَةٍ، مَاذَا كُنْتَ سَتَفْتَقِدُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ عِشْتُ …، لَافْتَقَدْتُ …', model: 'لَوْ عِشْتُ قَبْلَ مِئَةِ سَنَةٍ، لَافْتَقَدْتُ التَّوَاصُلَ مَعَ أَقَارِبِي فِي الخَارِجِ، لٰكِنِّي رُبَّمَا كُنْتُ سَأَتَنَفَّسُ هَوَاءً أَنْظَفَ.', modelEn: 'If I’d lived a hundred years ago, I’d miss contact with relatives abroad — but I might breathe cleaner air.' },
      ],
      girl: 'غَيَّرْتِ · عِشْتِ · كُنْتِ سَتَفْتَقِدِينَ',
      notes: 'Stretch: a balanced view with a passive (turmā), a cause chain (mimmā yuʾaddī ilā), a past action with badalan min + a number (miʾatay junayhin), a concession + yajibu ʿalā … an, law … la- with a twist.',
      modelFoot: 'Stretch: every Topic C skill in one card — balance, cause and effect, a measurable result, obligation, a concession and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'العَالَمُ مِنْ حَوْلِي', aim: 'one full sentence per question',
      qs: [
        { q: 'مِنْ أَيْنَ أَنْتَ؟ وَأَيْنَ تَقَعُ مَدِينَتُكَ؟', en: 'Where are you from, and where is your town?', start: 'أَنَا … وَتَقَعُ مَدِينَتِي فِي …', model: 'أَنَا بَرِيطَانِيٌّ، وَتَقَعُ مَدِينَتِي فِي جَنُوبِ إِنْجِلْتِرَا.', modelEn: 'I am British, and my town is in the south of England.' },
        { q: 'كَيْفَ الطَّقْسُ فِي الشِّتَاءِ عِنْدَكُمْ؟', en: 'What is your winter weather like?', start: 'فِي الشِّتَاءِ الجَوُّ … وَتَسْقُطُ …', model: 'فِي الشِّتَاءِ الجَوُّ بَارِدٌ، وَتَسْقُطُ الأَمْطَارُ كَثِيرًا.', modelEn: 'In winter it is cold, and it rains a lot.' },
        { q: 'مَاذَا يُوجَدُ قُرْبَ بَيْتِكَ؟', en: 'What is there near your home?', start: 'يُوجَدُ … وَتُوجَدُ …', model: 'يُوجَدُ مَسْجِدٌ، وَتُوجَدُ حَدِيقَةٌ صَغِيرَةٌ.', modelEn: 'There is a mosque and a small park.' },
        { q: 'كَمْ سَاعَةً تَسْتَخْدِمُ الإِنْتَرْنِتَ؟', en: 'How many hours do you use the internet?', start: 'أَسْتَخْدِمُهُ …', model: 'أَسْتَخْدِمُهُ ثَلَاثَ سَاعَاتٍ كُلَّ يَوْمٍ.', modelEn: 'I use it three hours a day.' },
        { q: 'مَاذَا تَفْعَلُ لِحِمَايَةِ البِيئَةِ؟', en: 'What do you do to protect the environment?', start: 'أُعِيدُ … / أُطْفِئُ …', model: 'أُعِيدُ تَدْوِيرَ البْلَاسْتِيكِ، وَأَمْشِي إِلَى المَدْرَسَةِ.', modelEn: 'I recycle plastic and walk to school.' },
      ],
      foot: 'Core: one full sentence for every question — each question comes from a different Topic C lesson. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + accurate agreement = a secure Core answer on every theme.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'أَنَا وَعَالَمِي', aim: 'two or three sentences, mixing time frames',
      qs: [
        { q: 'صِفْ مَكَانًا طَبِيعِيًّا جَمِيلًا زُرْتَهُ.', en: 'Describe a beautiful natural place you visited.', start: 'زُرْتُ … كَانَتِ … وَكَانَ …', model: 'زُرْتُ بُحَيْرَةً فِي شَمَالِ وِيلْزَ؛ كَانَتِ الجِبَالُ حَوْلَهَا عَالِيَةً، وَكَانَ المَاءُ صَافِيًا وَبَارِدًا جِدًّا.', modelEn: 'I visited a lake in North Wales: the mountains around were high and the water clear and very cold.' },
        { q: 'مَا أَكْبَرُ مُشْكِلَةٍ بِيئِيَّةٍ فِي مَدِينَتِكَ؟ وَمَا الحَلُّ؟', en: 'What is the biggest environmental problem in your town, and the solution?', start: 'أَكْبَرُ مُشْكِلَةٍ … بِسَبَبِ … لِذٰلِكَ يَنْبَغِي …', model: 'أَكْبَرُ مُشْكِلَةٍ تَلَوُّثُ الهَوَاءِ بِسَبَبِ السَّيَّارَاتِ، لِذٰلِكَ يَنْبَغِي أَنْ تُصْبِحَ الحَافِلَاتُ أَرْخَصَ.', modelEn: 'Air pollution from cars; so buses should become cheaper.' },
        { q: 'صِفْ آخِرَ شَيْءٍ اشْتَرَيْتَهُ.', en: 'Describe the last thing you bought.', start: 'اشْتَرَيْتُ … مَصْنُوعًا مِنْ … وَكَانَ ثَمَنُهُ …', model: 'اشْتَرَيْتُ حَقِيبَةَ ظَهْرٍ زَرْقَاءَ مَصْنُوعَةً مِنَ البْلَاسْتِيكِ المُعَادِ تَدْوِيرُهُ، وَكَانَ ثَمَنُهَا خَمْسَةً وَعِشْرِينَ جُنَيْهًا.', modelEn: 'A blue backpack made from recycled plastic; it cost £25.' },
        { q: 'كَيْفَ تَسْتَخْدِمُ التِّكْنُولُوجْيَا فِي السَّفَرِ؟', en: 'How do you use technology when travelling?', start: 'أَحْجِزُ … وَأَبْحَثُ عَنْ …', model: 'أَحْجِزُ التَّذَاكِرَ عَلَى الإِنْتَرْنِتِ، وَأَبْحَثُ عَنِ الطَّرِيقِ فِي تَطْبِيقِ الخَرَائِطِ، فَلَا أَضِيعُ أَبَدًا.', modelEn: 'I book tickets online and find my way with a maps app, so I never get lost.' },
        { q: 'أَيْنَ تُحِبُّ أَنْ تَسْكُنَ فِي المُسْتَقْبَلِ؟', en: 'Where would you like to live in future?', start: 'سَأَسْكُنُ فِي … لِأَنَّ …', model: 'سَأَسْكُنُ فِي مَدِينَةٍ صَغِيرَةٍ قُرْبَ البَحْرِ، لِأَنَّهَا أَهْدَأُ مِنَ العَاصِمَةِ، وَفِيهَا كُلُّ الخِدْمَاتِ.', modelEn: 'In a small town by the sea: quieter than the capital, with all the services.' },
      ],
      foot: 'Develop: two or three sentences — description, a reason, a past or future detail and linking words.',
      modelFoot: 'Agreement + a number or comparison + two time frames = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'العَالَمُ وَمُسْتَقْبَلُهُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ يَجِبُ أَنْ نُسَافِرَ أَقَلَّ لِنَحْمِيَ البِيئَةَ؟', en: 'Should we travel less to protect the environment?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الطَّائِرَاتِ تُلَوِّثُ الجَوَّ كَثِيرًا، غَيْرَ أَنَّ السَّفَرَ يُقَرِّبُ الشُّعُوبَ؛ لِذٰلِكَ أُفَضِّلُ القِطَارَ كُلَّمَا كَانَ مُمْكِنًا.', modelEn: 'Planes pollute a lot, but travel brings peoples together — so I choose the train whenever possible.' },
        { q: 'كَيْفَ تَغَيَّرَ العَالَمُ مُنْذُ طُفُولَةِ وَالِدَيْكَ؟', en: 'How has the world changed since your parents were children?', start: 'كَانَ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَ وَالِدَايَ يَكْتُبَانِ الرَّسَائِلَ وَيَشْتَرِيَانِ مِنَ السُّوقِ، أَمَّا اليَوْمَ فَنَفْعَلُ كُلَّ شَيْءٍ بِالهَاتِفِ، لٰكِنَّ الصَّيْفَ أَصْبَحَ أَحَرَّ.', modelEn: 'My parents wrote letters and shopped at the market; today we do everything by phone — but summers are hotter.' },
        { q: 'مَنِ المَسْؤُولُ عَنْ مُسْتَقْبَلِ المُدُنِ؟', en: 'Who is responsible for the future of cities?', start: 'أَرَى أَنَّ المَسْؤُولِيَّةَ … يَجِبُ عَلَى … وَعَلَى …', model: 'أَرَى أَنَّ المَسْؤُولِيَّةَ مُشْتَرَكَةٌ: يَجِبُ عَلَى البَلَدِيَّاتِ أَنْ تَبْنِيَ حَدَائِقَ وَمَمَرَّاتٍ لِلدَّرَّاجَاتِ، وَعَلَى السُّكَّانِ أَنْ يَسْتَخْدِمُوهَا.', modelEn: 'Shared: councils must build parks and cycle lanes, and residents must use them.' },
        { q: 'هَلِ التَّسَوُّقُ عَلَى الإِنْتَرْنِتِ يُفِيدُ المُسْتَهْلِكَ؟', en: 'Does online shopping benefit the consumer?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، يُتِيحُ مُقَارَنَةَ الأَسْعَارِ بِسُرْعَةٍ، وَمِنْ نَاحِيَةٍ أُخْرَى، يُشَجِّعُ عَلَى شِرَاءِ أَشْيَاءَ لَا نَحْتَاجُ إِلَيْهَا.', modelEn: 'It lets us compare prices fast, but encourages buying things we don’t need.' },
        { q: 'لَوْ صَمَّمْتَ مَدْرَسَةَ المُسْتَقْبَلِ، كَيْفَ تَكُونُ؟', en: 'If you designed the school of the future, what would it be like?', start: 'لَوْ صَمَّمْتُهَا، لَجَعَلْتُهَا …', model: 'لَوْ صَمَّمْتُهَا، لَجَعَلْتُهَا مَبْنِيَّةً مِنَ الخَشَبِ وَالزُّجَاجِ، بِأَلْوَاحٍ شَمْسِيَّةٍ، وَحَدِيقَةٍ يَزْرَعُ فِيهَا الطُّلَّابُ طَعَامَهُمْ.', modelEn: 'I’d make it of wood and glass, with solar panels and a garden where students grow their food.' },
      ],
      foot: 'Stretch: a concession, kāna + present vs ammā … fa-, shared responsibility, a balanced view and law … la-.',
      modelFoot: 'Stretch: ṣaḥīḥun anna … ghayra anna, past vs present, yajibu ʿalā … wa-ʿalā …, balance and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I completed every role-play task, including the unexpected one.' },
    { route: 'core', text: 'I answered in full sentences on at least three Topic C themes.' },
    { route: 'develop', text: 'I used numbers, prices or measurements accurately.' },
    { route: 'develop', text: 'I linked ideas and used two time frames in one answer.' },
    { route: 'stretch', text: 'I gave a balanced view, a concession and a conditional.' },
  ],
};
speak.RP[2].tasks[3].help = 'لَا، لِأَنَّ … أَمَّا فِي البَيْتِ فَأَقْضِي …';
speak.RP[3].tasks[2].help = 'نَعَمْ، أَصْلَحْتُ … بَدَلًا مِنْ … فَوَفَّرْتُ …';
speak.CONV[2].qs[1].start = 'كَانَ وَالِدَايَ … أَمَّا اليَوْمَ فَنَفْعَلُ …';

const Q2_CORE = `مَرْحَبًا يَا سَلْمَى،
كَيْفَ حَالُكِ؟ أَنَا الآنَ فِي مَدِينَةِ فَاسَ فِي المَغْرِبِ. حَجَزْنَا شَقَّةً قَدِيمَةً قُرْبَ السُّوقِ، وَهِيَ مَبْنِيَّةٌ مِنَ الحَجَرِ. المَدِينَةُ جَمِيلَةٌ؛ فِيهَا شَوَارِعُ ضَيِّقَةٌ وَمَسَاجِدُ قَدِيمَةٌ. الجَوُّ حَارٌّ وَمُشْمِسٌ، وَهُوَ أَحَرُّ مِنْ جَوِّ لَنْدَنَ بِكَثِيرٍ. أَمْسِ ذَهَبْتُ إِلَى السُّوقِ، وَاشْتَرَيْتُ حَقِيبَةً جِلْدِيَّةً حَمْرَاءَ، وَكَانَ ثَمَنُهَا عِشْرِينَ جُنَيْهًا فَقَطْ. فِي رَأْيِي، فَاسُ مَدِينَةٌ رَائِعَةٌ. غَدًا سَنَزُورُ جِبَالَ الأَطْلَسِ بِالحَافِلَةِ، وَسَأُرْسِلُ لَكِ صُوَرًا.
مَعَ السَّلَامَةِ،
هُدَى`;
const Q2_FULL = `عَزِيزَتِي سَلْمَى،
تَحِيَّةً مِنْ فَاسَ! وَصَلْنَا قَبْلَ يَوْمَيْنِ بَعْدَ رِحْلَةٍ طَوِيلَةٍ بِالقِطَارِ، وَنُقِيمُ فِي بَيْتٍ تَقْلِيدِيٍّ حَجَزْنَاهُ عَلَى الإِنْتَرْنِتِ، جُدْرَانُهُ مَبْنِيَّةٌ مِنَ الحَجَرِ، وَفِي وَسَطِهِ نَافُورَةٌ دَائِرِيَّةٌ. وَالمَدِينَةُ القَدِيمَةُ مَتَاهَةٌ مِنَ الأَزِقَّةِ الضَّيِّقَةِ الَّتِي لَا تَدْخُلُهَا السَّيَّارَاتُ، لِذٰلِكَ هَوَاؤُهَا أَنْظَفُ مِمَّا تَوَقَّعْتُ. أَمَّا الجَوُّ فَحَارٌّ نَهَارًا وَمُعْتَدِلٌ لَيْلًا. وَأَمْسِ ضِعْنَا فِي السُّوقِ سَاعَةً كَامِلَةً، حَتَّى سَاعَدَنَا بَائِعٌ لَطِيفٌ اشْتَرَيْتُ مِنْهُ حَقِيبَةً جِلْدِيَّةً بِعِشْرِينَ جُنَيْهًا. صَحِيحٌ أَنَّ المَدِينَةَ مُزْدَحِمَةٌ، غَيْرَ أَنَّ سِحْرَهَا لَا يُقَاوَمُ. وَإِذَا كَانَ الطَّقْسُ مُنَاسِبًا غَدًا، فَسَنَزُورُ جِبَالَ الأَطْلَسِ.
بِمَحَبَّةٍ،
هُدَى`;
const Q3A_CORE = `فِي الصَّيْفِ المَاضِي سَافَرْتُ مَعَ أُسْرَتِي إِلَى المَغْرِبِ. يَقَعُ المَغْرِبُ فِي شَمَالِ إِفْرِيقْيَا، وَهُوَ بَلَدٌ جَمِيلٌ جِدًّا. حَجَزْنَا التَّذَاكِرَ وَالفُنْدُقَ عَلَى الإِنْتَرْنِتِ، وَسَافَرْنَا بِالطَّائِرَةِ ثَلَاثَ سَاعَاتٍ. أُرْسِلَتِ التَّذَاكِرُ إِلَى هَاتِفِ أُمِّي.
أَوَّلًا، زُرْنَا مَدِينَةَ مَرَّاكُشَ. كَانَ الجَوُّ حَارًّا جِدًّا، وَكَانَتْ دَرَجَةُ الحَرَارَةِ أَرْبَعِينَ دَرَجَةً. فِي المَدِينَةِ تُوجَدُ أَسْوَاقٌ قَدِيمَةٌ وَمَسَاجِدُ جَمِيلَةٌ. اشْتَرَيْتُ مِنَ السُّوقِ صُنْدُوقًا خَشَبِيًّا صَغِيرًا، وَكَانَ ثَمَنُهُ عَشَرَةَ جُنَيْهَاتٍ، وَهُوَ أَرْخَصُ مِنْ لَنْدَنَ بِكَثِيرٍ.
بَعْدَ ذٰلِكَ، ذَهَبْنَا إِلَى جِبَالِ الأَطْلَسِ. كَانَتِ الجِبَالُ عَالِيَةً، وَالوِدْيَانُ خَضْرَاءَ، وَكَانَ الجَوُّ أَبْرَدَ مِنْ مَرَّاكُشَ. لٰكِنْ رَأَيْتُ نُفَايَاتٍ بْلَاسْتِيكِيَّةً قُرْبَ النَّهْرِ، فَحَزِنْتُ كَثِيرًا، وَجَمَعْتُهَا مَعَ أَخِي.
فِي رَأْيِي، المَغْرِبُ بَلَدٌ رَائِعٌ، لٰكِنْ يَجِبُ أَنْ نَحْمِيَ طَبِيعَتَهُ. فِي المُسْتَقْبَلِ سَأَعُودُ إِلَى هُنَاكَ، وَسَأُسَافِرُ بِالقِطَارِ، لِأَنَّهُ أَنْظَفُ لِلْبِيئَةِ.`;
const Q3A_FULL = `يَقُولُونَ إِنَّ السَّفَرَ يُعَلِّمُ مَا لَا تُعَلِّمُهُ الكُتُبُ، وَقَدْ عَرَفْتُ صِدْقَ هٰذَا القَوْلِ فِي رِحْلَتِي إِلَى المَغْرِبِ الصَّيْفَ المَاضِي؛ فَقَدْ نَظَّمْتُ مَعَ أَبِي كُلَّ شَيْءٍ بِأَنْفُسِنَا: قَارَنَّا الأَسْعَارَ، وَحَجَزْنَا بُيُوتًا تَقْلِيدِيَّةً بَدَلًا مِنَ الفَنَادِقِ الكَبِيرَةِ.
أَوَّلُ مَا أَدْهَشَنِي التَّنَوُّعُ؛ فَفِي أُسْبُوعٍ وَاحِدٍ انْتَقَلْنَا مِنْ حَرِّ مَرَّاكُشَ الَّذِي تَجَاوَزَ الأَرْبَعِينَ دَرَجَةً، إِلَى قِمَمِ الأَطْلَسِ الَّتِي تُغَطِّيهَا الثُّلُوجُ، ثُمَّ إِلَى شَوَاطِئِ الصُّوَيْرَةِ حَيْثُ تَهُبُّ الرِّيَاحُ القَوِيَّةُ طُولَ السَّنَةِ.
غَيْرَ أَنَّ أَكْثَرَ مَا بَقِيَ فِي ذَاكِرَتِي حِوَارٌ مَعَ شَابٍّ فِي قَرْيَةٍ جَبَلِيَّةٍ؛ فَقَدْ أَخْبَرَنِي أَنَّ النَّهْرَ الَّذِي كَانَ يَسْقِي حُقُولَهُمْ أَصْبَحَ يَجِفُّ كُلَّ صَيْفٍ، مِمَّا يَدْفَعُ الشَّبَابَ إِلَى الهِجْرَةِ إِلَى المُدُنِ.
صَحِيحٌ أَنَّ رِحْلَتِي كَانَتْ مُمْتِعَةً، غَيْرَ أَنَّهَا جَعَلَتْنِي أَرَى العَالَمَ بِعَيْنٍ مُخْتَلِفَةٍ. وَلَوْ سَافَرَ كُلُّ شَابٍّ وَاسْتَمَعَ إِلَى قِصَصِ النَّاسِ، لَفَهِمْنَا أَنَّ مَشَاكِلَ البِيئَةِ لَيْسَتْ أَرْقَامًا فِي الأَخْبَارِ، بَلْ حَيَاةُ بَشَرٍ حَقِيقِيِّينَ.`;
const Q3B_FULL = `نَعِيشُ فِي عَالَمٍ مُتَّصِلٍ أَكْثَرَ مِنْ أَيِّ وَقْتٍ مَضَى؛ فَبِضَغْطَةِ زِرٍّ نَحْجِزُ رِحْلَةً إِلَى قَارَّةٍ أُخْرَى، وَنَشْتَرِي مَلَابِسَ مَصْنُوعَةً فِي آسْيَا، وَنَتَوَاصَلُ مَعَ أَصْدِقَاءَ فِي كُلِّ مَكَانٍ. فَهَلْ هٰذَا العَالَمُ المُتَّصِلُ نِعْمَةٌ أَمْ عِبْءٌ عَلَى الكَوْكَبِ؟
مِنْ نَاحِيَةٍ، قَرَّبَتِ التِّكْنُولُوجْيَا بَيْنَ الشُّعُوبِ، وَسَهَّلَتِ التَّعَلُّمَ وَالعَمَلَ عَنْ بُعْدٍ، مِمَّا قَلَّلَ مِنْ رِحْلَاتٍ كَثِيرَةٍ لَمْ تَعُدْ ضَرُورِيَّةً. وَمِنْ نَاحِيَةٍ أُخْرَى، شَجَّعَتْ عَلَى الاسْتِهْلَاكِ السَّرِيعِ، فَأَصْبَحْنَا نَشْتَرِي أَكْثَرَ، وَنَرْمِي أَكْثَرَ، وَنُسَافِرُ لِأَسْبَابٍ بَسِيطَةٍ.
وَقَدْ لَاحَظْتُ هٰذَا التَّنَاقُضَ فِي حَيَاتِي؛ فَفِي العَامِ المَاضِي شَارَكْتُ فِي مَشْرُوعٍ إِلِكْتْرُونِيٍّ مَعَ طُلَّابٍ مِنَ الأُرْدُنِّ لِقِيَاسِ دَرَجَاتِ الحَرَارَةِ فِي مَدِينَتَيْنَا، فَتَعَلَّمْتُ الكَثِيرَ دُونَ أَنْ أُسَافِرَ، بَيْنَمَا كَانَ بَعْضُ زُمَلَائِي يَطْلُبُونَ مَلَابِسَ جَدِيدَةً كُلَّ أُسْبُوعٍ.
صَحِيحٌ أَنَّ العَوْلَمَةَ لَنْ تَتَوَقَّفَ، غَيْرَ أَنَّنَا نَسْتَطِيعُ أَنْ نَخْتَارَ كَيْفَ نَسْتَخْدِمُهَا. وَإِذَا جَعَلْنَا التِّكْنُولُوجْيَا وَسِيلَةً لِلتَّعَلُّمِ وَالتَّعَاوُنِ لَا لِلِاسْتِهْلَاكِ، فَسَنَتْرُكُ لِلْأَجْيَالِ القَادِمَةِ عَالَمًا أَنْظَفَ وَأَعْدَلَ.`;

const write = {
  ...base,
  focus: 'A full Paper 4 mock on the whole of Topic C: a travel-booking form, an email from abroad (places, weather, shopping, plans), and an extended piece about a journey or about our connected world.',
  lift: [
    { ar: 'بَيْتٌ تَقْلِيدِيٌّ حَجَزْنَاهُ عَلَى الإِنْتَرْنِتِ، جُدْرَانُهُ مَبْنِيَّةٌ مِنَ الحَجَرِ', en: 'a traditional house we booked online, its walls built of stone' },
    { ar: 'هَوَاؤُهَا أَنْظَفُ مِمَّا تَوَقَّعْتُ', en: 'its air is cleaner than I expected' },
    { ar: 'مِمَّا يَدْفَعُ الشَّبَابَ إِلَى الهِجْرَةِ', en: 'which pushes young people to migrate' },
  ],
  checkTip: 'Final check for Topic C: non-human plurals → feminine singular; numbers + nouns (thalātha sāʿātin, ʿishrūna junayhan); verbs with their prepositions; kāna + accusative; a passive where the doer is unknown; at least four linkers in Q3.',
  FORM: {
    title: 'Travel-booking form', ar: 'اسْتِمَارَةُ حَجْزِ رِحْلَةٍ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالجِنْسِيَّةُ', en: 'Name and nationality', model: 'هُدَى أَحْمَدُ، بَرِيطَانِيَّةٌ', modelEn: 'Huda Ahmed, British' },
      { core: true, ar: 'الوِجْهَةُ', en: 'Destination', model: 'فَاسُ، المَغْرِبُ', modelEn: 'Fes, Morocco' },
      { core: true, ar: 'تَارِيخُ السَّفَرِ', en: 'Travel date', model: '١٥ يُولْيُو', modelEn: '15 July' },
      { core: true, ar: 'عَدَدُ المُسَافِرِينَ', en: 'Number of travellers', model: 'أَرْبَعَةٌ', modelEn: 'four' },
      { core: true, ar: 'نَوْعُ السَّكَنِ', en: 'Type of accommodation', model: 'بَيْتٌ تَقْلِيدِيٌّ', modelEn: 'a traditional house' },
      { core: true, ar: 'وَسِيلَةُ المُوَاصَلَاتِ', en: 'Means of transport', model: 'القِطَارُ', modelEn: 'the train' },
      { ar: 'المِيزَانِيَّةُ', en: 'Budget', model: 'خَمْسُمِئَةِ جُنَيْهٍ', modelEn: 'five hundred pounds' },
      { ar: 'جُمْلَةٌ: لِمَاذَا اخْتَرْتَ هٰذِهِ الوِجْهَةَ؟', en: 'ONE sentence: why you chose this destination', model: 'اخْتَرْتُهَا لِأَنَّ فِيهَا مَدِينَةً قَدِيمَةً لَا تَدْخُلُهَا السَّيَّارَاتُ، وَجِبَالًا عَالِيَةً قَرِيبَةً.', modelEn: 'I chose it because it has an old city no cars enter, and high mountains nearby.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence. Every box recycles a Topic C lesson.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 1: nisba (f.) (L01). Box 7: khamsumiʾati junayhin (L09). Box 8: a relative without alladhī + non-human plural agreement (L02, L08).',
  },
  Q2: {
    short: 'an email from abroad', title: 'Question 2: a letter from my trip', ar: 'رِسَالَةٌ مِنَ السَّفَرِ',
    task: 'You are on holiday abroad. Write an email in Arabic to a friend of about 80–90 words. You must include: • where you are staying and what the place is like • the weather, with a comparison • something you bought or did yesterday • your opinion and your plans for tomorrow.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'A comparison and a price.', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['حَجَزْنَا … وَهِيَ مَبْنِيَّةٌ مِنْ …', 'we booked … and it is built of …'], ['الجَوُّ … وَهُوَ أَحَرُّ مِنْ …', 'the weather is … and hotter than …'], ['أَمْسِ اشْتَرَيْتُ … وَكَانَ ثَمَنُهَا …', 'yesterday I bought … and it cost …'], ['غَدًا سَنَزُورُ … وَسَأُرْسِلُ …', 'tomorrow we will visit … and I will send …']],
    rubric: [
      ['task', 'أَنْتِ فِي عُطْلَةٍ خَارِجَ بِلَادِكِ. اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ (٨٠–٩٠ كَلِمَةً).', 'You are on holiday abroad: write to your friend (80–90 words).'],
      ['1', 'أَيْنَ تُقِيمِينَ؟ وَكَيْفَ المَكَانُ؟', 'Where you are staying; what the place is like'],
      ['2', 'كَيْفَ الطَّقْسُ؟ قَارِنِيهِ بِطَقْسِ بَلَدِكِ.', 'The weather, compared with home'],
      ['3', 'مَاذَا اشْتَرَيْتِ أَوْ فَعَلْتِ أَمْسِ؟', 'What you bought or did yesterday'],
      ['4', 'مَا رَأْيُكِ؟ وَمَاذَا سَتَفْعَلِينَ غَدًا؟', 'Your opinion and tomorrow’s plans'],
    ],
    qwords: 'أَيْنَ (where) · كَيْفَ (what … like) · قَارِنِي (compare!) · اشْتَرَيْتِ / فَعَلْتِ (bought / did — PAST) · سَتَفْعَلِينَ (will do — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'أَنَا الآنَ فِي ______ . حَجَزْنَا ______ ، وَهِيَ مَبْنِيَّةٌ مِنْ ______ .', 'I am now in … We booked …, and it is built of …'],
      ['2', 'الجَوُّ ______ ، وَهُوَ أَ______ مِنْ جَوِّ ______ .', 'The weather is …, …er than in …'],
      ['3', 'أَمْسِ اشْتَرَيْتُ ______ ، وَكَانَ ثَمَنُهَا ______ .', 'Yesterday I bought …, and it cost …'],
      ['4', 'فِي رَأْيِي ______ . غَدًا سَنَزُورُ ______ .', 'In my opinion … Tomorrow we will visit …'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Salma, how are you? I’m in Fes in Morocco. We booked an old flat near the market, built of stone. The city is beautiful, with narrow streets and old mosques. It’s hot and sunny — much hotter than London. Yesterday I went to the market and bought a red leather bag for only twenty pounds. In my opinion Fes is a wonderful city. Tomorrow we’ll visit the Atlas Mountains by bus, and I’ll send you photos. Goodbye, Huda.”',
      find: ['مَبْنِيَّةٌ مِنَ الحَجَرِ', 'أَحَرُّ مِنْ جَوِّ لَنْدَنَ', 'كَانَ ثَمَنُهَا عِشْرِينَ', 'غَدًا سَنَزُورُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Salma, greetings from Fes! We arrived two days ago after a long train journey, and are staying in a traditional house we booked online: stone walls and a round fountain in the middle. The old city is a maze of narrow alleys that cars can’t enter, so its air is cleaner than I expected. As for the weather, it’s hot by day and mild at night. Yesterday we got lost in the market for a whole hour, until a kind seller helped us — I bought a leather bag from him for £20. The city is crowded, but its magic is irresistible. If the weather is right tomorrow, we’ll visit the Atlas Mountains. With love, Huda.”',
      find: ['حَجَزْنَاهُ عَلَى الإِنْتَرْنِتِ', 'أَنْظَفُ مِمَّا تَوَقَّعْتُ', 'حَتَّى سَاعَدَنَا', 'إِذَا كَانَ … فَسَنَزُورُ'],
    },
  },
  Q3: {
    a: { title: 'رِحْلَةٌ عَلَّمَتْنِي الكَثِيرَ', en: 'A journey that taught me a lot', bullets: 'أَيْنَ وَكَيْفَ سَافَرْتَ · الأَمَاكِنُ وَالطَّقْسُ · مَوْقِفٌ لَا تَنْسَاهُ · رَأْيُكَ وَخِطَطُكَ', bulletsEn: 'Where and how you travelled · places and weather · a moment you won’t forget · your opinion and plans' },
    b: { title: 'العَالَمُ المُتَّصِلُ: نِعْمَةٌ أَمْ عِبْءٌ عَلَى الكَوْكَبِ؟', en: 'Our connected world: blessing or burden for the planet?', bullets: 'عَالَمٌ مُتَّصِلٌ · الإِيجَابِيَّاتُ وَالسَّلْبِيَّاتُ · مِثَالٌ مِنْ حَيَاتِكَ · رَأْيُكَ', bulletsEn: 'A connected world · positives and negatives · an example from your life · your opinion' },
    plan: [
      'Where and how — yaqaʿu fī shamāli …, ḥajaznā … ʿalā al-intarnit, safarnā bi- … (L01, L07).',
      'Places and weather — tūjadu aswāqun qadīma; kāna al-jawwu ḥārran; abradu min … (L02, L03, L08).',
      'A moment — something you bought (kāna thamanuhu …) or saw (nufāyāt, mimmā …) (L04, L09).',
      'Opinion + future — yajibu an naḥmiya …, sa- … li-anna …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la- (L05, L11).',
    ],
    frames: [
      { ar: 'يَقَعُ المَغْرِبُ فِي شَمَالِ إِفْرِيقْيَا.', en: 'present: Morocco is in North Africa.' },
      { ar: 'كَانَتِ الجِبَالُ عَالِيَةً، وَكَانَ الجَوُّ أَبْرَدَ مِنْ مَرَّاكُشَ.', en: 'past: the mountains were high, and it was colder than Marrakech.' },
      { ar: 'سَأُسَافِرُ بِالقِطَارِ، لِأَنَّهُ أَنْظَفُ لِلْبِيئَةِ.', en: 'future: I will go by train, because it is cleaner for the environment.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Last summer my family went to Morocco, a beautiful country in North Africa; we booked tickets and a hotel online and flew three hours; the tickets were sent to Mum’s phone → first Marrakech: very hot, forty degrees; old markets and lovely mosques; I bought a small wooden box for ten pounds, much cheaper than in London → then the Atlas Mountains: high mountains, green valleys, colder than Marrakech; but I saw plastic rubbish by the river, which made me sad, so my brother and I collected it → Morocco is wonderful, but we must protect its nature; I’ll go back by train, because it is cleaner for the environment.', find: ['يَقَعُ المَغْرِبُ', 'تُوجَدُ أَسْوَاقٌ قَدِيمَةٌ', 'كَانَتِ الجِبَالُ عَالِيَةً', 'يَجِبُ أَنْ نَحْمِيَ'], notes: 'Core model: a mini-tour of Topic C — location (L01), booking (L07), weather (L03), tūjadu (L08), a price (L09), nature (L02), the environment (L04, L05) — with awwalan / baʿda dhālika.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'They say travel teaches what books can’t — I learnt this in Morocco last summer: Dad and I organised everything ourselves, comparing prices and booking traditional houses instead of big hotels → what amazed me first was the variety: in one week we went from Marrakech’s 40°+ heat to snow-capped Atlas peaks, then to the beaches of Essaouira where strong winds blow all year → but what stayed with me most was a talk with a young man in a mountain village: the river that watered their fields now dries up every summer, which pushes young people to migrate to the cities → my trip was fun, but it made me see the world differently; “if every young person travelled and listened to people’s stories, we’d understand environmental problems aren’t numbers in the news but real people’s lives”.', find: ['يَقُولُونَ إِنَّ', 'تَجَاوَزَ الأَرْبَعِينَ', 'مِمَّا يَدْفَعُ', 'لَوْ سَافَرَ … لَفَهِمْنَا'], notes: 'Full-mark model: reported speech, badalan min, a journey in three climates with relative clauses and ḥaythu, ghayra anna as a turn, reported speech with kāna + present, mimmā, a concession and law … la- with laysat … bal.' },
      { which: 'ب', level: 'Full', subtitle: 'a connected world', text: Q3B_FULL, en: 'We live in a more connected world than ever: at the click of a button we book a trip to another continent, buy clothes made in Asia and keep in touch with friends everywhere — is this a blessing or a burden for the planet? → on one hand, technology has brought peoples together and made remote learning and work easy, cutting many unnecessary journeys; on the other, it has encouraged fast consumption — we buy more, throw away more and travel for trivial reasons → I noticed this contradiction in my own life: last year I joined an online project with students in Jordan measuring temperatures in our two cities, learning a lot without travelling, while some classmates ordered new clothes every week → globalisation won’t stop, but we can choose how to use it; “if we make technology a tool for learning and cooperation, not consumption, we will leave future generations a cleaner, fairer world”.', find: ['أَكْثَرَ مِنْ أَيِّ وَقْتٍ مَضَى', 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى', 'دُونَ أَنْ أُسَافِرَ', 'إِذَا جَعَلْنَا … فَسَنَتْرُكُ'], notes: 'Full-mark model for the Stretch title: links all of Topic C (travel, shopping, technology, climate) — a triple hook, a rhetorical question, a balanced view with mimmā, a dual (madīnataynā), dūna an … baynamā, a concession with lan, idhā … fa-sa- with a lā … contrast.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; numbers and nisba adjectives are correct.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: a comparison, a price and two time frames.' },
    { route: 'develop', text: 'Q3: four paragraphs drawing on at least four Topic C lessons.' },
    { route: 'stretch', text: 'Q3: four linkers, a concession and a conditional — mock-ready!' },
  ],
};

module.exports = { speak, write };
