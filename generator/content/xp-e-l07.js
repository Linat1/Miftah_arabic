'use strict';
/* Exam-practice data · TE-L07 · National Festivals and Traditions (the passive: yuḥtafalu bihi, turfaʿu al-aʿlām, tuṭlaqu al-alʿāb an-nāriyya; time frames past / present / future; comparatives: akbar min, akthar … min). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'E', n: 7, short: 'National Festivals and Traditions', arShort: 'الأَعْيَادُ الوَطَنِيَّةُ وَالتَّقَالِيدُ', fileTitle: 'National_Festivals_and_Traditions', title: 'National Festivals and Traditions', ar: 'الأَعْيَادُ الوَطَنِيَّةُ وَالتَّقَالِيدُ الشَّعْبِيَّةُ', icon: 'FaMasksTheater', grammar: 'the passive (yuḥtafalu bihi, turfaʿu al-aʿlām, tuzayyanu ash-shawāriʿ, tuṭlaqu al-alʿāb an-nāriyya); time frames (iḥtafalnā / naḥtafilu / sa-naḥtafilu); comparatives (akbaru min, akthar ḥamāsan min)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: describe national days and folk traditions in Arab countries and in Britain — what is done (passive: تُرْفَعُ الأَعْلَامُ · تُطْلَقُ الأَلْعَابُ النَّارِيَّةُ), what you did and will do (three time frames), and how celebrations compare (أَكْبَرُ مِنْ · أَكْثَرُ حَمَاسًا مِنْ).',
  words: [
    w(1, 'اليَوْمُ الوَطَنِيُّ', 'national day', [['independence day', 'عِيدُ الاسْتِقْلَالِ'], ['national (f.)', 'وَطَنِيَّةٌ']], { tag: 'occasion' }),
    w(2, 'تَقْلِيدٌ شَعْبِيٌّ', 'a folk tradition', [['traditions', 'تَقَالِيدُ'], ['heritage', 'تُرَاثٌ']], { tag: 'noun' }),
    w(3, 'يُحْتَفَلُ بِهِ', 'it is celebrated (m.)', [['f.', 'يُحْتَفَلُ بِهَا'], ['we celebrate', 'نَحْتَفِلُ']], { tag: 'passive' }),
    w(4, 'تُرْفَعُ الأَعْلَامُ', 'flags are raised', [['a flag', 'عَلَمٌ'], ['raise (act.)', 'نَرْفَعُ']], { tag: 'passive' }),
    w(5, 'تُطْلَقُ الأَلْعَابُ النَّارِيَّةُ', 'fireworks are let off', [['fireworks', 'أَلْعَابٌ نَارِيَّةٌ'], ['bonfire', 'نَارٌ كَبِيرَةٌ']], { tag: 'passive' }),
    w(6, 'تُزَيَّنُ الشَّوَارِعُ', 'the streets are decorated', [['decorations', 'زِينَةٌ'], ['lights', 'أَضْوَاءٌ']], { tag: 'passive' }),
    w(7, 'اسْتِعْرَاضٌ', 'a parade', [['parades', 'اسْتِعْرَاضَاتٌ'], ['carnival', 'كَرْنَفَالٌ']], { tag: 'noun' }),
    w(8, 'رَقْصَةٌ شَعْبِيَّةٌ', 'a folk dance', [['dabke', 'الدَّبْكَةُ'], ['sword dance', 'العَرْضَةُ']], { tag: 'noun' }),
    w(9, 'مِهْرَجَانٌ', 'a festival (event)', [['festivals', 'مِهْرَجَانَاتٌ'], ['spring festival', 'شَمُّ النَّسِيمِ']], { tag: 'noun' }),
    w(10, 'أَكْبَرُ مِنْ', 'bigger than', [['more exciting', 'أَكْثَرُ حَمَاسًا مِنْ'], ['the biggest', 'أَكْبَرُ … فِي']], { tag: 'comparative' }),
    w(11, 'يَعُودُ إِلَى', 'dates back to', [['since', 'مُنْذُ'], ['century', 'قَرْنٌ']], { tag: 'history' }),
    w(12, 'فَخْرٌ وَطَنِيٌّ', 'national pride', [['proud (m. · f.)', 'فَخُورٌ · فَخُورَةٌ'], ['belonging', 'الانْتِمَاءُ']], { tag: 'feelings' }),
  ],
  words1: { eyebrow: 'Language bank · the passive', title: 'What is done on the day', ar: 'المَبْنِيُّ لِلْمَجْهُولِ', notes: 'LANGUAGE BANK (2 min) — the passive hides who does it: نَرْفَعُ الأَعْلَامَ → تُرْفَعُ الأَعْلَامُ. Pattern: yufʿalu / tufʿalu (present), fuʿila (past). With a preposition the verb stays masculine: يُحْتَفَلُ بِاليَوْمِ الوَطَنِيِّ · يُحْتَفَلُ بِهَا.' },
  words2: { eyebrow: 'Language bank · comparing celebrations', title: 'Bigger, louder, older', ar: 'المُقَارَنَةُ بَيْنَ الاحْتِفَالَاتِ', notes: 'LANGUAGE BANK (2 min) — afʿal min (أَكْبَرُ مِنْ · أَقْدَمُ مِنْ) does not change for gender; for longer ideas use أَكْثَرُ + noun (acc.): أَكْثَرُ حَمَاسًا · أَكْثَرُ تَنْظِيمًا. Time frames: احْتَفَلْنَا (last year) · نَحْتَفِلُ (every year) · سَنَحْتَفِلُ (next year).' },
  checkCore: 'described a national day with at least one passive verb',
  checkDevelop: 'compared two celebrations and used two time frames',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a tourist office in Muscat', title: 'Role play A — Oman National Day', ar: 'اليَوْمُ الوَطَنِيُّ فِي عُمَانَ', you: 'a young tourist', them: 'an employee at the tourist office',
      tasks: [
        { core: true, ex: 'أَهْلًا! مِنْ أَيْنَ أَنْتَ؟', task: 'Say where you are from.', help: 'أَنَا مِنْ …', model: 'أَنَا مِنْ بَرِيطَانْيَا، مِنْ مَدِينَةِ لَنْدَنَ.', modelEn: 'I’m from Britain, from London.' },
        { core: true, ex: 'جِئْتَ فِي وَقْتٍ جَمِيلٍ! غَدًا اليَوْمُ الوَطَنِيُّ.', task: 'Ask what happens.', help: 'مَاذَا يَحْدُثُ …؟', model: 'رَائِعٌ! مَاذَا يَحْدُثُ فِي اليَوْمِ الوَطَنِيِّ؟', modelEn: 'Great! What happens on National Day?' },
        { core: true, ex: 'تُرْفَعُ الأَعْلَامُ، وَتُطْلَقُ الأَلْعَابُ النَّارِيَّةُ.', task: 'Ask when the fireworks are.', help: 'مَتَى …؟', model: 'مَتَى تُطْلَقُ الأَلْعَابُ النَّارِيَّةُ؟', modelEn: 'When are the fireworks?' },
        { core: true, ex: 'فِي السَّاعَةِ التَّاسِعَةِ عَلَى الشَّاطِئِ.', task: 'Say what you will do.', help: 'سَأَذْهَبُ … مَعَ …', model: 'سَأَذْهَبُ إِلَى الشَّاطِئِ مَعَ أُسْرَتِي.', modelEn: 'I’ll go to the beach with my family.' },
        { core: true, unexpected: true, ex: 'هَلْ عِنْدَكُمْ يَوْمٌ وَطَنِيٌّ فِي بَرِيطَانْيَا؟', task: 'Answer the unexpected question.', help: 'لَيْسَ عِنْدَنَا … لٰكِنْ …', model: 'لَيْسَ عِنْدَنَا يَوْمٌ كَبِيرٌ، لٰكِنْ نَحْتَفِلُ بِلَيْلَةِ الأَلْعَابِ النَّارِيَّةِ.', modelEn: 'Not a big one, but we celebrate Bonfire Night.' },
      ],
      girl: 'أَنْتِ · جِئْتِ · عِنْدَكُنَّ / عِنْدَكُمْ (same)',
      notes: 'Core: passive verbs heard (turfaʿu, tuṭlaqu) and reused in a question, sa- + maʿa, laysa ʿindanā … lākin.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a British street in November', title: 'Role play B — Explaining Bonfire Night', ar: 'لَيْلَةُ الأَلْعَابِ النَّارِيَّةِ', you: 'a British student', them: 'a visitor from Jordan',
      tasks: [
        { core: true, ex: 'لِمَاذَا يُطْلِقُ النَّاسُ الأَلْعَابَ النَّارِيَّةَ اللَّيْلَةَ؟', task: 'Name the celebration and the date.', help: 'لِأَنَّهَا … ؛ يُحْتَفَلُ بِهَا فِي …', model: 'لِأَنَّهَا لَيْلَةُ الأَلْعَابِ النَّارِيَّةِ؛ يُحْتَفَلُ بِهَا فِي الخَامِسِ مِنْ نُوفَمْبِرَ.', modelEn: 'Because it’s Bonfire Night — it’s celebrated on 5 November.' },
        { core: true, ex: 'وَمَاذَا يَفْعَلُ النَّاسُ؟', task: 'Describe two traditions (passive).', help: 'تُشْعَلُ … وَيُؤْكَلُ …', model: 'تُشْعَلُ نَارٌ كَبِيرَةٌ فِي الحَدِيقَةِ، وَيُؤْكَلُ الحَسَاءُ السَّاخِنُ.', modelEn: 'A big bonfire is lit in the park, and hot soup is eaten.' },
        { ex: 'هَلْ هُوَ تَقْلِيدٌ قَدِيمٌ؟', task: 'Give the history briefly.', help: 'نَعَمْ، يَعُودُ إِلَى …', model: 'نَعَمْ، يَعُودُ إِلَى سَنَةِ أَلْفٍ وَسِتِّمِئَةٍ وَخَمْسٍ، أَيْ أَكْثَرَ مِنْ أَرْبَعِمِئَةِ سَنَةٍ.', modelEn: 'Yes, it dates back to 1605 — more than four hundred years.' },
        { ex: 'عِنْدَنَا فِي الأُرْدُنِّ عِيدُ الاسْتِقْلَالِ.', task: 'ASK two questions about it.', help: 'مَتَى …؟ وَهَلْ …؟', model: 'مَتَى يُحْتَفَلُ بِهِ؟ وَهَلْ هُوَ أَكْبَرُ مِنْ هٰذَا الاحْتِفَالِ؟', modelEn: 'When is it celebrated? And is it bigger than this one?' },
        { unexpected: true, ex: 'فِي أَيَّارَ، وَنَعَمْ، أَكْبَرُ بِكَثِيرٍ! أَيُّ احْتِفَالٍ تُفَضِّلُ؟', task: 'Answer the unexpected question (comparison + reason).', help: 'أُفَضِّلُ … لِأَنَّهُ أَكْثَرُ … مِنْ …', model: 'أُفَضِّلُ عِيدَ الاسْتِقْلَالِ، لِأَنَّهُ أَكْثَرُ فَرَحًا، وَفِيهِ مُوسِيقَى وَرَقْصٌ أَكْثَرُ مِنْ لَيْلَتِنَا البَارِدَةِ!', modelEn: 'Independence Day — it’s more joyful, with more music and dancing than our cold night!' },
      ],
      girl: 'تُفَضِّلِينَ',
      notes: 'Core+: yuḥtafalu bihā + a date, two passives (tushʿalu, yuʾkalu), yaʿūdu ilā + a year, the CANDIDATE asks with yuḥtafalu bihi and akbar min, akthar faraḥan.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a school podcast', title: 'Role play C — Sham el-Nessim in Egypt', ar: 'شَمُّ النَّسِيمِ فِي مِصْرَ', you: 'a student who spent the spring holiday in Egypt', them: 'the podcast host',
      tasks: [
        { ex: 'مَا هُوَ شَمُّ النَّسِيمِ؟', task: 'Explain it with the passive.', help: 'هُوَ عِيدُ … يُحْتَفَلُ بِهِ … مُنْذُ …', model: 'هُوَ عِيدُ الرَّبِيعِ فِي مِصْرَ، يُحْتَفَلُ بِهِ كُلَّ عَامٍ مُنْذُ أَيَّامِ الفَرَاعِنَةِ، وَيَحْتَفِلُ بِهِ المُسْلِمُونَ وَالمَسِيحِيُّونَ مَعًا.', modelEn: 'Egypt’s spring festival, celebrated every year since Pharaonic times, by Muslims and Christians together.' },
        { ex: 'كَيْفَ احْتَفَلْتَ بِهِ هٰذِهِ السَّنَةَ؟', task: 'Narrate your day (past + sequence).', help: 'خَرَجْنَا … ثُمَّ … وَأَكَلْنَا …', model: 'خَرَجْنَا مُبَكِّرًا إِلَى حَدِيقَةٍ عَلَى النِّيلِ، ثُمَّ لَوَّنَّا البَيْضَ مَعَ أَبْنَاءِ خَالِي، وَأَكَلْنَا السَّمَكَ المُمَلَّحَ وَالبَصَلَ الأَخْضَرَ.', modelEn: 'We went early to a Nile park, coloured eggs with my cousins, and ate salted fish and spring onions.' },
        { ex: 'هَلْ يُشْبِهُ أَيَّ احْتِفَالٍ فِي بَرِيطَانْيَا؟', task: 'Compare carefully.', help: 'يُشْبِهُ … فِي … ، لٰكِنَّهُ أَكْثَرُ … مِنْ …', model: 'يُشْبِهُ عُطْلَةَ الرَّبِيعِ هُنَا فِي تَلْوِينِ البَيْضِ، لٰكِنَّهُ أَكْثَرُ ازْدِحَامًا، فَكُلُّ الحَدَائِقِ تَمْتَلِئُ بِالعَائِلَاتِ.', modelEn: 'Like the spring holiday here in egg-colouring, but far busier — every park fills with families.' },
        { ex: 'مَا الشَّيْءُ الَّذِي أَعْجَبَكَ أَكْثَرَ؟', task: 'Give an opinion with a reason and example.', help: 'أَعْجَبَنِي … لِأَنَّ … ؛ مَثَلًا …', model: 'أَعْجَبَنِي أَنَّ العِيدَ لِلْجَمِيعِ؛ مَثَلًا، جَلَسَتْ بِجَانِبِنَا عَائِلَةٌ مَسِيحِيَّةٌ، فَتَبَادَلْنَا الطَّعَامَ وَالضَّحِكَ.', modelEn: 'That it’s for everyone: a Christian family sat next to us and we shared food and laughter.' },
        { unexpected: true, ex: 'هَلْ سَتَحْتَفِلُ بِهِ فِي بَرِيطَانْيَا؟', task: 'Answer the unexpected question (future + condition).', help: 'إِذَا … فَسَـ…', model: 'إِذَا كَانَ الجَوُّ جَمِيلًا، فَسَنَخْرُجُ إِلَى الحَدِيقَةِ مَعَ أَصْدِقَائِي المِصْرِيِّينَ، وَسَأُحْضِرُ البَيْضَ المُلَوَّنَ.', modelEn: 'If the weather’s nice, we’ll go to the park with my Egyptian friends — and I’ll bring coloured eggs.' },
      ],
      girl: 'احْتَفَلْتِ · أَعْجَبَكِ · سَتَحْتَفِلِينَ',
      notes: 'Develop: yuḥtafalu bihi + mundhu, a past sequence (kharajnā, thumma lawwannā), yushbihu … fī … lākinnahu akthar izdiḥāman, aʿjabanī anna + mathalan, idhā … fa-sa-.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a youth council meeting', title: 'Role play D — Should the city fund a big celebration?', ar: 'هَلْ تُمَوِّلُ المَدِينَةُ احْتِفَالًا كَبِيرًا؟', you: 'a youth council member', them: 'the council chair',
      tasks: [
        { ex: 'يُقْتَرَحُ أَنْ يُنْفَقَ مِلْيُونُ جُنَيْهٍ عَلَى احْتِفَالٍ وَطَنِيٍّ. مَا رَأْيُكَ؟', task: 'Give a balanced opening.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تَجْمَعُ هٰذِهِ الاحْتِفَالَاتُ النَّاسَ وَتُقَوِّي الانْتِمَاءَ، وَمِنْ نَاحِيَةٍ أُخْرَى، المَبْلَغُ كَبِيرٌ فِي وَقْتٍ تُغْلَقُ فِيهِ المَكْتَبَاتُ.', modelEn: 'They bring people together and strengthen belonging, but the sum is large at a time when libraries are being closed.' },
        { ex: 'كَيْفَ كَانَ الاحْتِفَالُ فِي السَّنَةِ المَاضِيَةِ؟', task: 'Evaluate the past event (passive + result).', help: 'نُظِّمَ … وَحَضَرَهُ … غَيْرَ أَنَّ …', model: 'نُظِّمَ فِي وَسَطِ المَدِينَةِ، وَحَضَرَهُ أَكْثَرُ مِنْ عِشْرِينَ أَلْفَ شَخْصٍ، غَيْرَ أَنَّ الأَحْيَاءَ الفَقِيرَةَ لَمْ تُشَارِكْ فِيهِ.', modelEn: 'It was held in the centre and attended by 20,000+, but poorer areas didn’t take part.' },
        { ex: 'إِذَنْ مَاذَا تَقْتَرِحُ؟', task: 'Propose with comparison.', help: 'أَقْتَرِحُ أَنْ … لِأَنَّ ذٰلِكَ أَقَلُّ … وَأَكْثَرُ …', model: 'أَقْتَرِحُ أَنْ تُقَامَ احْتِفَالَاتٌ صَغِيرَةٌ فِي كُلِّ حَيٍّ، لِأَنَّ ذٰلِكَ أَقَلُّ تَكْلِفَةً وَأَكْثَرُ عَدْلًا.', modelEn: 'Small celebrations in every area — cheaper and fairer.' },
        { ex: 'لٰكِنَّ الاحْتِفَالَ الكَبِيرَ يَجْذِبُ السُّيَّاحَ.', task: 'Concede and counter.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهُ يَجْذِبُ السُّيَّاحَ، غَيْرَ أَنَّ هَدَفَ العِيدِ الوَطَنِيِّ أَنْ يَشْعُرَ كُلُّ مُوَاطِنٍ بِأَنَّهُ جُزْءٌ مِنْهُ، لَا أَنْ يَتَفَرَّجَ مِنْ بَعِيدٍ.', modelEn: 'It attracts tourists, but a national day’s aim is for every citizen to feel part of it, not watch from afar.' },
        { unexpected: true, ex: 'لَوْ كُنْتَ رَئِيسَ البَلَدِيَّةِ، كَيْفَ تَحْتَفِلُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ كُنْتُ …، لَـ…', model: 'لَوْ كُنْتُ رَئِيسَ البَلَدِيَّةِ، لَحَوَّلْتُ العِيدَ إِلَى يَوْمِ تَطَوُّعٍ، تُزْرَعُ فِيهِ الأَشْجَارُ وَتُزَيَّنُ المَدَارِسُ، ثُمَّ نَحْتَفِلُ مَعًا فِي المَسَاءِ.', modelEn: 'I’d turn the day into a volunteering day — trees planted, schools decorated — then celebrate together in the evening.' },
      ],
      girl: 'رَأْيُكِ · تَقْتَرِحِينَ · كُنْتِ رَئِيسَةَ البَلَدِيَّةِ · تَحْتَفِلِينَ',
      notes: 'Stretch: passives throughout (yuqtaraḥu, yunfaqa, tughlaqu, nuẓẓima, tuqāma, tuzraʿu, tuzayyanu), a balanced opening, akthar min + a number, aqall taklifatan wa-akthar ʿadlan, a concession with an … lā an, law … la-.',
      modelFoot: 'Stretch: a council debate in formal Arabic — passives, comparison, a concession and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'الأَعْيَادُ الوَطَنِيَّةُ', aim: 'one full sentence per question',
      qs: [
        { q: 'مَا اليَوْمُ الوَطَنِيُّ لِبَلَدِ أُسْرَتِكَ؟', en: 'What is your family’s country’s national day?', start: 'اليَوْمُ الوَطَنِيُّ … فِي …', model: 'اليَوْمُ الوَطَنِيُّ لِلسُّعُودِيَّةِ فِي الثَّالِثِ وَالعِشْرِينَ مِنْ سِبْتَمْبِرَ.', modelEn: 'Saudi National Day is on 23 September.' },
        { q: 'مَاذَا يَحْدُثُ فِي ذٰلِكَ اليَوْمِ؟', en: 'What happens on that day?', start: 'تُرْفَعُ … وَتُطْلَقُ …', model: 'تُرْفَعُ الأَعْلَامُ، وَتُطْلَقُ الأَلْعَابُ النَّارِيَّةُ.', modelEn: 'Flags are raised and fireworks let off.' },
        { q: 'هَلْ تُحِبُّ الأَلْعَابَ النَّارِيَّةَ؟', en: 'Do you like fireworks?', start: 'نَعَمْ / لَا، … لِأَنَّ …', model: 'نَعَمْ، أُحِبُّهَا لِأَنَّهَا جَمِيلَةٌ.', modelEn: 'Yes, they’re beautiful.' },
        { q: 'مَا رَقْصَتُكُمُ الشَّعْبِيَّةُ؟', en: 'What is your folk dance?', start: 'رَقْصَتُنَا الشَّعْبِيَّةُ …', model: 'رَقْصَتُنَا الشَّعْبِيَّةُ الدَّبْكَةُ.', modelEn: 'The dabke.' },
        { q: 'أَيُّ احْتِفَالٍ بَرِيطَانِيٍّ تُحِبُّ؟', en: 'Which British celebration do you like?', start: 'أُحِبُّ …', model: 'أُحِبُّ كَرْنَفَالَ نُوتِنْغ هِيل، لِأَنَّ فِيهِ مُوسِيقَى.', modelEn: 'Notting Hill Carnival — there’s music.' },
      ],
      foot: 'Core: one full sentence for every question — try one passive verb (تُرْفَعُ · تُطْلَقُ). If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a date or a passive = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'تَقَالِيدُنَا وَاحْتِفَالَاتُنَا', aim: 'two or three sentences, with a passive, a comparison and two time frames',
      qs: [
        { q: 'صِفْ احْتِفَالًا وَطَنِيًّا حَضَرْتَهُ.', en: 'Describe a national celebration you attended.', start: 'حَضَرْتُ … ؛ كَانَتِ الشَّوَارِعُ … وَ…', model: 'حَضَرْتُ اليَوْمَ الوَطَنِيَّ فِي دُبَيّ؛ كَانَتِ الشَّوَارِعُ مُزَيَّنَةً بِالأَعْلَامِ، وَرَقَصَ الرِّجَالُ العَيَّالَةَ أَمَامَ النَّاسِ.', modelEn: 'National Day in Dubai: streets decorated with flags, and men performed the ayyala dance.' },
        { q: 'قَارِنْ بَيْنَ احْتِفَالٍ عَرَبِيٍّ وَاحْتِفَالٍ بَرِيطَانِيٍّ.', en: 'Compare an Arab and a British celebration.', start: '… أَكْبَرُ / أَكْثَرُ … مِنْ … بَيْنَمَا …', model: 'اليَوْمُ الوَطَنِيُّ هُنَاكَ أَكْبَرُ مِنْ أَيِّ احْتِفَالٍ هُنَا، بَيْنَمَا الاحْتِفَالَاتُ البَرِيطَانِيَّةُ أَقْدَمُ تَارِيخًا وَأَكْثَرُ هُدُوءًا.', modelEn: 'National Day there is bigger than anything here, while British celebrations are older and calmer.' },
        { q: 'مَا التَّقْلِيدُ الشَّعْبِيُّ الَّذِي تُحِبُّهُ أَكْثَرَ؟', en: 'Which folk tradition do you love most?', start: 'التَّقْلِيدُ الَّذِي … هُوَ … لِأَنَّ …', model: 'التَّقْلِيدُ الَّذِي أُحِبُّهُ هُوَ القَهْوَةُ العَرَبِيَّةُ، لِأَنَّهَا تُقَدَّمُ لِكُلِّ ضَيْفٍ، وَتُصَبُّ بِطَرِيقَةٍ خَاصَّةٍ.', modelEn: 'Arabic coffee — it is served to every guest and poured in a special way.' },
        { q: 'كَيْفَ كَانَتْ هٰذِهِ الأَعْيَادُ فِي طُفُولَةِ وَالِدَيْكَ؟', en: 'How were these festivals in your parents’ childhood?', start: 'كَانَتْ … أَمَّا الآنَ فَـ…', model: 'كَانَتْ أَبْسَطَ، يَحْتَفِلُ بِهَا النَّاسُ فِي الحَيِّ، أَمَّا الآنَ فَتُنَظِّمُهَا الحُكُومَةُ وَتُبَثُّ عَلَى التِّلْفَازِ.', modelEn: 'Simpler, celebrated in the neighbourhood; now the government organises them and they’re broadcast on TV.' },
        { q: 'أَيُّ احْتِفَالٍ تَتَمَنَّى أَنْ تَحْضُرَهُ؟', en: 'Which celebration would you love to attend?', start: 'أَتَمَنَّى أَنْ أَحْضُرَ … لِأَنَّ …', model: 'أَتَمَنَّى أَنْ أَحْضُرَ مِهْرَجَانَ الجَنَادِرِيَّةِ، لِأَنَّ التُّرَاثَ السُّعُودِيَّ يُعْرَضُ فِيهِ بِكُلِّ أَشْكَالِهِ.', modelEn: 'The Janadriyah festival, where Saudi heritage is displayed in all its forms.' },
      ],
      foot: 'Develop: two or three sentences — a passive, a comparison and a past or future detail.',
      modelFoot: 'Passive + comparison + two time frames = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الوَطَنُ وَالتَّقَالِيدُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ تَسْتَحِقُّ الاحْتِفَالَاتُ الوَطَنِيَّةُ أَمْوَالَهَا الكَبِيرَةَ؟', en: 'Are national celebrations worth their high cost?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا مُكْلِفَةٌ، غَيْرَ أَنَّ الشُّعُورَ بِالانْتِمَاءِ لَا يُقَدَّرُ بِثَمَنٍ؛ وَمَعَ ذٰلِكَ يَنْبَغِي أَلَّا تُنْفَقَ الأَمْوَالُ عَلَى حِسَابِ الخِدْمَاتِ.', modelEn: 'They’re costly, but belonging is priceless; still, money shouldn’t be spent at the expense of services.' },
        { q: 'كَيْفَ نُحَافِظُ عَلَى التَّقَالِيدِ الشَّعْبِيَّةِ؟', en: 'How do we preserve folk traditions?', start: 'يَجِبُ أَنْ … ؛ فَإِذَا … فَـ…', model: 'يَجِبُ أَنْ تُعَلَّمَ فِي المَدَارِسِ؛ فَإِذَا تَعَلَّمَ الأَطْفَالُ الدَّبْكَةَ وَالأَغَانِيَ الشَّعْبِيَّةَ، فَلَنْ تَخْتَفِيَ مَعَ الأَجْدَادِ.', modelEn: 'Teach them at school: if children learn the dabke and folk songs, they won’t vanish with the grandparents.' },
        { q: 'هَلْ يُمْكِنُ أَنْ يَحْتَفِلَ الإِنْسَانُ بِيَوْمَيْنِ وَطَنِيَّيْنِ؟', en: 'Can someone celebrate two national days?', start: 'أَرَى أَنَّ … لِأَنَّ … ؛ مَثَلًا …', model: 'أَرَى أَنَّ ذٰلِكَ مُمْكِنٌ وَطَبِيعِيٌّ، لِأَنَّ الانْتِمَاءَ لَيْسَ قِطْعَةً وَاحِدَةً؛ مَثَلًا، أَرْفَعُ العَلَمَ السُّعُودِيَّ فِي سِبْتَمْبِرَ، وَأَحْتَفِلُ مَعَ جِيرَانِي فِي المُنَاسَبَاتِ البَرِيطَانِيَّةِ.', modelEn: 'Possible and natural — belonging isn’t one piece: I raise the Saudi flag in September and celebrate British occasions with neighbours.' },
        { q: 'مَا الفَرْقُ بَيْنَ الفَخْرِ الوَطَنِيِّ وَالتَّعَصُّبِ؟', en: 'What is the difference between national pride and fanaticism?', start: 'الفَخْرُ … أَمَّا التَّعَصُّبُ فَـ…', model: 'الفَخْرُ أَنْ تُحِبَّ وَطَنَكَ وَتَخْدُمَهُ، أَمَّا التَّعَصُّبُ فَأَنْ تَحْتَقِرَ أَوْطَانَ الآخَرِينَ؛ الأَوَّلُ يَبْنِي، وَالثَّانِي يَهْدِمُ.', modelEn: 'Pride is loving and serving your country; fanaticism is despising others’ — the first builds, the second destroys.' },
        { q: 'لَوْ اخْتَرَعْتَ عِيدًا جَدِيدًا لِمَدِينَتِكَ، كَيْفَ يَكُونُ؟', en: 'If you invented a new festival for your city, what would it be like?', start: 'لَوِ اخْتَرَعْتُهُ، لَـ…', model: 'لَوِ اخْتَرَعْتُهُ، لَسَمَّيْتُهُ "عِيدَ الجِيرَانِ"، تُغْلَقُ فِيهِ الشَّوَارِعُ أَمَامَ السَّيَّارَاتِ، وَتُوضَعُ فِيهَا مَوَائِدُ طَوِيلَةٌ، وَيُحْضِرُ كُلُّ بَيْتٍ طَبَقًا مِنْ بَلَدِ أَصْلِهِ.', modelEn: '“Neighbours’ Day”: streets closed to cars, long tables set out, every home bringing a dish from its country of origin.' },
      ],
      foot: 'Stretch: a concession, passive verbs, a dual (yawmayni waṭaniyyayni), a contrast with ammā … fa- and law … la-.',
      modelFoot: 'Stretch: lā yuqaddaru bi-thaman, allā tunfaqa, tuʿallama, laysa qiṭʿatan wāḥidatan, al-awwal … wa-th-thānī and law … la- with three passives — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I named a national day or tradition and when it happens.' },
    { route: 'core', text: 'I used a passive verb (turfaʿu, tuṭlaqu, yuḥtafalu bihi).' },
    { route: 'develop', text: 'I compared two celebrations (akbar min / akthar … min).' },
    { route: 'develop', text: 'I used past and present (or future) in one answer.' },
    { route: 'stretch', text: 'I discussed pride or cost with a concession and law … la-.' },
  ],
};
speak.RP[2].tasks[1].help = 'خَرَجْنَا … ثُمَّ لَوَّنَّا … وَأَكَلْنَا …';
speak.RP[2].tasks[4].help = 'إِذَا … فَسَنَخْرُجُ …';
speak.RP[3].tasks[4].help = 'لَوْ كُنْتُ …، لَحَوَّلْتُ …';
speak.CONV[1].qs[3].start = 'كَانَتْ … أَمَّا الآنَ فَتُنَظِّمُهَا …';
speak.CONV[2].qs[1].start = 'يَجِبُ أَنْ … ؛ فَإِذَا … فَلَنْ …';
speak.CONV[2].qs[3].start = 'الفَخْرُ … أَمَّا التَّعَصُّبُ فَأَنْ …';
speak.CONV[2].qs[4].start = 'لَوِ اخْتَرَعْتُهُ، لَسَمَّيْتُهُ …';

const Q2_CORE = `مَرْحَبًا يَا فَيْصَلُ،
كَيْفَ حَالُكَ؟ أَنَا الآنَ فِي دُبَيّ عِنْدَ خَالِي، وَحَضَرْتُ أَمْسِ اليَوْمَ الوَطَنِيَّ لِلْإِمَارَاتِ. يُحْتَفَلُ بِهِ فِي الثَّانِي مِنْ دِيسَمْبِرَ كُلَّ سَنَةٍ. فِي الصَّبَاحِ رُفِعَتِ الأَعْلَامُ فِي كُلِّ مَكَانٍ، وَزُيِّنَتِ الشَّوَارِعُ بِالأَضْوَاءِ. ثُمَّ شَاهَدْنَا اسْتِعْرَاضًا كَبِيرًا وَرَقْصَةً شَعْبِيَّةً. فِي اللَّيْلِ أُطْلِقَتْ أَلْعَابٌ نَارِيَّةٌ رَائِعَةٌ. هٰذَا الاحْتِفَالُ أَكْبَرُ مِنْ لَيْلَةِ الأَلْعَابِ النَّارِيَّةِ عِنْدَنَا، وَأَكْثَرُ حَمَاسًا. أَعْجَبَنِي كَثِيرًا، لِأَنَّ النَّاسَ كَانُوا سُعَدَاءَ جِدًّا. فِي السَّنَةِ القَادِمَةِ سَأَحْضُرُهُ مَرَّةً أُخْرَى. وَأَنْتَ، هَلْ حَضَرْتَ احْتِفَالًا وَطَنِيًّا؟
إِلَى اللِّقَاءِ،
خَالِدٌ`;
const Q2_FULL = `عَزِيزِي فَيْصَلُ،
أَكْتُبُ إِلَيْكَ مِنْ دُبَيّ، حَيْثُ أَقْضِي عُطْلَتِي عِنْدَ خَالِي، وَقَدْ صَادَفَتْ زِيَارَتِي اليَوْمَ الوَطَنِيَّ لِلْإِمَارَاتِ، الَّذِي يُحْتَفَلُ بِهِ فِي الثَّانِي مِنْ دِيسَمْبِرَ إِحْيَاءً لِذِكْرَى قِيَامِ الاتِّحَادِ. مُنْذُ الصَّبَاحِ زُيِّنَتِ الأَبْرَاجُ بِأَلْوَانِ العَلَمِ، وَخَرَجَتِ العَائِلَاتُ بِسَيَّارَاتٍ مُزَيَّنَةٍ، ثُمَّ أُقِيمَ اسْتِعْرَاضٌ رَقَصَ فِيهِ الرِّجَالُ العَيَّالَةَ بِالعِصِيِّ. وَحِينَ أُطْلِقَتِ الأَلْعَابُ النَّارِيَّةُ فَوْقَ البَحْرِ، شَعَرْتُ أَنَّهَا أَضْخَمُ بِكَثِيرٍ مِنْ أَيِّ احْتِفَالٍ رَأَيْتُهُ فِي لَنْدَنَ. صَحِيحٌ أَنَّ الزِّحَامَ كَانَ شَدِيدًا، غَيْرَ أَنَّ فَرْحَةَ النَّاسِ عَوَّضَتْ كُلَّ شَيْءٍ. وَإِذَا سَمَحَ لِي أَبِي، فَسَأَعُودُ فِي العَامِ القَادِمِ. أَلَا تَأْتِي مَعِي؟
مَعَ تَحِيَّاتِي،
خَالِدٌ`;
const Q3A_CORE = `أَصْلُ أُسْرَتِي مِنَ السُّعُودِيَّةِ، وَأَعِيشُ فِي بَرِيطَانْيَا. التَّقْلِيدُ الوَطَنِيُّ الَّذِي أُحِبُّهُ أَكْثَرَ هُوَ اليَوْمُ الوَطَنِيُّ السُّعُودِيُّ. يُحْتَفَلُ بِهِ فِي الثَّالِثِ وَالعِشْرِينَ مِنْ سِبْتَمْبِرَ كُلَّ عَامٍ.
فِي هٰذَا اليَوْمِ تُرْفَعُ الأَعْلَامُ الخَضْرَاءُ، وَتُزَيَّنُ الشَّوَارِعُ وَالبُيُوتُ بِالأَضْوَاءِ. يَلْبَسُ النَّاسُ المَلَابِسَ التَّقْلِيدِيَّةَ، وَيَرْقُصُ الرِّجَالُ العَرْضَةَ بِالسُّيُوفِ. فِي اللَّيْلِ تُطْلَقُ الأَلْعَابُ النَّارِيَّةُ فِي كُلِّ المُدُنِ، وَتَمْتَلِئُ السَّمَاءُ بِالأَلْوَانِ.
فِي السَّنَةِ المَاضِيَةِ احْتَفَلْتُ بِهِ فِي الرِّيَاضِ مَعَ جَدِّي. ذَهَبْنَا إِلَى حَدِيقَةٍ كَبِيرَةٍ، وَشَاهَدْنَا عَرْضًا لِلطَّائِرَاتِ، وَأَكَلْنَا الكَبْسَةَ مَعَ أَقَارِبِي فِي المَسَاءِ. كَانَ الجَوُّ حَارًّا، وَمَعَ ذٰلِكَ كَانَ اليَوْمُ رَائِعًا.
أَظُنُّ أَنَّ هٰذَا الاحْتِفَالَ أَكْبَرُ مِنْ لَيْلَةِ الأَلْعَابِ النَّارِيَّةِ فِي بَرِيطَانْيَا، وَأَكْثَرُ حَمَاسًا. لٰكِنَّ الاحْتِفَالَ البَرِيطَانِيَّ أَقْدَمُ، لِأَنَّهُ يَعُودُ إِلَى أَكْثَرَ مِنْ أَرْبَعِمِئَةِ سَنَةٍ. فِي المُسْتَقْبَلِ سَأَحْتَفِلُ بِهِ مَعَ أَوْلَادِي، لِأَنَّهُ جُزْءٌ مِنْ هُوِيَّتِي.`;
const Q3A_FULL = `فِي كُلِّ ثَالِثٍ وَعِشْرِينَ مِنْ سِبْتَمْبِرَ، يَتَحَوَّلُ بَيْتُنَا فِي بَرْمِنْغْهَامَ إِلَى قِطْعَةٍ صَغِيرَةٍ مِنَ السُّعُودِيَّةِ؛ فَتُرْفَعُ الأَعْلَامُ الخَضْرَاءُ عَلَى النَّوَافِذِ، وَتُقَدَّمُ القَهْوَةُ وَالتَّمْرُ لِكُلِّ مَنْ يَزُورُنَا مِنَ الجِيرَانِ وَالأَصْدِقَاءِ، وَتُرْفَعُ أَصْوَاتُ الأَغَانِي الوَطَنِيَّةِ.
وَيُحْتَفَلُ بِاليَوْمِ الوَطَنِيِّ إِحْيَاءً لِذِكْرَى تَوْحِيدِ المَمْلَكَةِ سَنَةَ أَلْفٍ وَتِسْعِمِئَةٍ وَاثْنَتَيْنِ وَثَلَاثِينَ. وَفِيهِ تُزَيَّنُ المُدُنُ بِالأَضْوَاءِ، وَتُقَامُ عُرُوضُ العَرْضَةِ، وَتُطْلَقُ الأَلْعَابُ النَّارِيَّةُ مِنْ أَعْلَى الأَبْرَاجِ، فَتُضِيءُ السَّمَاءَ سَاعَةً كَامِلَةً.
غَيْرَ أَنَّ أَجْمَلَ احْتِفَالٍ عِشْتُهُ كَانَ فِي الرِّيَاضِ العَامَ المَاضِيَ؛ إِذْ أَخَذَنِي جَدِّي إِلَى سَاحَةٍ قَدِيمَةٍ، وَأَمْسَكَ بِيَدِي وَنَحْنُ نَرْقُصُ العَرْضَةَ مَعَ رِجَالِ الحَيِّ عَلَى إِيقَاعِ الطُّبُولِ. يَوْمَهَا لَمْ أَشْعُرْ بِأَنَّنِي ضَيْفٌ، بَلْ بِأَنَّنِي أَعُودُ إِلَى مَكَانٍ يَعْرِفُنِي، وَيَنْتَظِرُ عَوْدَتِي كُلَّ عَامٍ.
وَحِينَ أُقَارِنُهُ بِلَيْلَةِ الأَلْعَابِ النَّارِيَّةِ البَرِيطَانِيَّةِ، أَجِدُهُ أَكْثَرَ صَخَبًا وَبَهْجَةً، بَيْنَمَا تِلْكَ أَقْدَمُ تَارِيخًا وَأَهْدَأُ وَأَكْثَرُ بُرُودَةً. وَلَوْ سُئِلْتُ أَيَّهُمَا أُفَضِّلُ، لَقُلْتُ إِنَّنِي مَحْظُوظٌ لِأَنَّنِي لَا أَحْتَاجُ إِلَى الاخْتِيَارِ بَيْنَهُمَا.`;
const Q3B_FULL = `تُنْفِقُ بَعْضُ الدُّوَلِ مَلَايِينَ الجُنَيْهَاتِ عَلَى احْتِفَالَاتِهَا الوَطَنِيَّةِ: أَلْعَابٌ نَارِيَّةٌ لِدَقَائِقَ مَعْدُودَةٍ، وَاسْتِعْرَاضَاتٌ ضَخْمَةٌ، وَحَفَلَاتٌ تُبَثُّ عَلَى الهَوَاءِ لِمَلَايِينِ المُشَاهِدِينَ. فَهَلْ تَسْتَحِقُّ هٰذِهِ الاحْتِفَالَاتُ كُلَّ هٰذِهِ الأَمْوَالِ؟
مِنْ نَاحِيَةٍ، تُقَوِّي هٰذِهِ المُنَاسَبَاتُ الشُّعُورَ بِالانْتِمَاءِ، وَتَجْمَعُ النَّاسَ مِنْ كُلِّ الأَعْمَارِ وَالخَلْفِيَّاتِ، كَمَا أَنَّهَا تَجْذِبُ السُّيَّاحَ، مِمَّا يُنْعِشُ الاقْتِصَادَ وَيُوَفِّرُ فُرَصَ عَمَلٍ مُؤَقَّتَةً لِلشَّبَابِ. وَمِنْ نَاحِيَةٍ أُخْرَى، يَرَى كَثِيرُونَ أَنَّ هٰذِهِ الأَمْوَالَ يُمْكِنُ أَنْ تُنْفَقَ عَلَى المُسْتَشْفَيَاتِ وَالمَدَارِسِ، بَدَلًا مِنْ أَنْ تَحْتَرِقَ فِي السَّمَاءِ خِلَالَ دَقَائِقَ وَتُلَوِّثَ الهَوَاءَ.
وَقَدْ رَأَيْتُ حَلًّا ذَكِيًّا فِي مَدِينَتِي؛ فَفِي العَامِ المَاضِي، أُلْغِيَتِ الأَلْعَابُ النَّارِيَّةُ، وَاسْتُبْدِلَ بِهَا عَرْضٌ لِلْأَضْوَاءِ أَقَلُّ تَكْلِفَةً، وَتُبُرِّعَ بِالفَرْقِ لِبَنْكِ الطَّعَامِ. وَمَعَ ذٰلِكَ، كَانَ الحُضُورُ أَكْبَرَ مِنَ السَّنَوَاتِ السَّابِقَةِ، وَكَانَتِ العَائِلَاتُ أَكْثَرَ سَعَادَةً.
لِذٰلِكَ أَرَى أَنَّ الاحْتِفَالَ ضَرُورِيٌّ، غَيْرَ أَنَّ قِيمَتَهُ لَا تُقَاسُ بِتَكْلِفَتِهِ. فَإِذَا أَنْفَقَتِ الحُكُومَاتُ بِحِكْمَةٍ وَشَفَافِيَةٍ، فَسَيَفْرَحُ النَّاسُ وَيَسْتَفِيدُ المُجْتَمَعُ مَعًا، وَيَبْقَى العِيدُ عِيدًا لِلْجَمِيعِ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a festival-volunteer form, write an email about a national day you attended abroad, and write an extended piece about a national celebration you love or about whether national celebrations are worth their cost — with passive verbs and comparisons.',
  lift: [
    { ar: 'رُفِعَتِ الأَعْلَامُ، وَزُيِّنَتِ الشَّوَارِعُ بِالأَضْوَاءِ', en: 'flags were raised and the streets were decorated with lights' },
    { ar: 'يُحْتَفَلُ بِهِ فِي الثَّانِي مِنْ دِيسَمْبِرَ', en: 'it is celebrated on 2 December' },
    { ar: 'هٰذَا الاحْتِفَالُ أَكْبَرُ مِنْ … وَأَكْثَرُ حَمَاسًا', en: 'this celebration is bigger than … and more exciting' },
  ],
  checkTip: 'Check passive forms: present tufʿalu (turfaʿu, tuzayyanu), past fuʿilat (rufiʿat, zuyyinat, uṭliqat); with bi- the verb stays masculine (yuḥtafalu bihi / bihā); afʿal min never changes (al-iḥtifālu akbaru min …, al-laylatu akbaru min …); akthar + accusative noun (akthar ḥamāsan); dates with ordinals (ath-thānī min dīsambir).',
  FORM: {
    title: 'Festival-volunteer form', ar: 'اسْتِمَارَةُ التَّطَوُّعِ فِي المِهْرَجَانِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'خَالِدٌ العُتَيْبِيُّ', modelEn: 'Khalid Al-Otaibi' },
      { core: true, ar: 'العُمْرُ', en: 'Age', model: 'خَمْسَ عَشْرَةَ سَنَةً', modelEn: 'fifteen' },
      { core: true, ar: 'المِهْرَجَانُ', en: 'Festival', model: 'مِهْرَجَانُ التُّرَاثِ العَرَبِيِّ', modelEn: 'the Arab Heritage Festival' },
      { core: true, ar: 'التَّارِيخُ', en: 'Date', model: 'الثَّالِثُ وَالعِشْرُونَ مِنْ سِبْتَمْبِرَ', modelEn: '23 September' },
      { core: true, ar: 'المَهَمَّةُ المُفَضَّلَةُ', en: 'Preferred task', model: 'تَزْيِينُ المَكَانِ', modelEn: 'decorating the venue' },
      { core: true, ar: 'مَهَارَةٌ تَقْلِيدِيَّةٌ', en: 'A traditional skill', model: 'رَقْصَةُ العَرْضَةِ', modelEn: 'the ardah dance' },
      { ar: 'احْتِفَالٌ حَضَرْتَهُ', en: 'A celebration you attended', model: 'اليَوْمُ الوَطَنِيُّ فِي الرِّيَاضِ', modelEn: 'National Day in Riyadh' },
      { ar: 'جُمْلَةٌ: مَاذَا يُعْرَضُ فِي المِهْرَجَانِ؟', en: 'ONE sentence: what is shown at the festival', model: 'تُعْرَضُ الأَزْيَاءُ التَّقْلِيدِيَّةُ، وَتُقَدَّمُ القَهْوَةُ العَرَبِيَّةُ لِلزُّوَّارِ.', modelEn: 'Traditional costumes are displayed, and Arabic coffee is served to visitors.' },
    ],
    foot: 'One word or a short phrase for each box — box 4 is a date with an ordinal; the last box is a full sentence with two passive verbs.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 5 takes a verbal noun (tazyīn). Box 8: tuʿraḍu, tuqaddamu (passive). A girl writes حَضَرْتِهِ in the box-7 heading.',
  },
  Q2: {
    short: 'an email about a national day abroad', title: 'Question 2: a national day I attended', ar: 'يَوْمٌ وَطَنِيٌّ حَضَرْتُهُ',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • where you are and which national day you attended, and when it is celebrated • what was done on the day (use the passive) • a comparison with a celebration in your country • your opinion and your plans, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Two passive verbs.', 'A comparison (akbar min / akthar … min).', 'About 80–90 words.'],
    phrases: [['حَضَرْتُ أَمْسِ اليَوْمَ الوَطَنِيَّ لِلْإِمَارَاتِ', 'yesterday I attended UAE National Day'], ['رُفِعَتِ الأَعْلَامُ، وَزُيِّنَتِ الشَّوَارِعُ', 'flags were raised and streets decorated'], ['هٰذَا الاحْتِفَالُ أَكْبَرُ مِنْ …', 'this celebration is bigger than …'], ['فِي السَّنَةِ القَادِمَةِ سَأَحْضُرُهُ …', 'next year I will attend it …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ يَوْمٍ وَطَنِيٍّ حَضَرْتَهُ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about a national day you attended (80–90 words).'],
      ['1', 'أَيْنَ أَنْتَ؟ وَمَا اليَوْمُ الوَطَنِيُّ؟ وَمَتَى يُحْتَفَلُ بِهِ؟', 'Where you are; which national day; when it is celebrated'],
      ['2', 'مَاذَا حَدَثَ فِي ذٰلِكَ اليَوْمِ؟', 'What happened on the day'],
      ['3', 'قَارِنْ بَيْنَهُ وَبَيْنَ احْتِفَالٍ فِي بَلَدِكَ.', 'Compare it with a celebration in your country'],
      ['4', 'مَا رَأْيُكَ؟ وَمَا خِطَطُكَ؟ وَاسْأَلْ صَدِيقَكَ سُؤَالًا.', 'Your opinion; your plans; a question'],
    ],
    qwords: 'مَتَى يُحْتَفَلُ بِهِ (when is it celebrated — PASSIVE) · مَاذَا حَدَثَ (what happened — PAST) · قَارِنْ (compare!) · خِطَطُكَ (plans — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، أَنَا الآنَ فِي ______ .', 'Hello …, I’m now in …'],
      ['1', 'حَضَرْتُ اليَوْمَ الوَطَنِيَّ فِي ______ ؛ يُحْتَفَلُ بِهِ فِي ______ .', 'I attended National Day in …; on …'],
      ['2', 'رُفِعَتِ ______ ، وَأُطْلِقَتْ ______ .', '… were raised, and … were let off.'],
      ['3', 'هٰذَا الاحْتِفَالُ أَكْبَرُ مِنْ ______ .', 'This celebration is bigger than …'],
      ['4', 'أَعْجَبَنِي لِأَنَّ ______ . سَأَ______ .', 'I liked it because … I will …'],
      ['end', 'وَأَنْتَ، ______ ؟ إِلَى اللِّقَاءِ.', 'And you, …? See you.'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Faisal, how are you? I’m in Dubai at my uncle’s, and yesterday I attended UAE National Day. It is celebrated on 2 December every year. In the morning flags were raised everywhere and the streets were decorated with lights. Then we watched a big parade and a folk dance. At night amazing fireworks were let off. This celebration is bigger than our Bonfire Night, and more exciting. I liked it a lot, because people were so happy. Next year I’ll attend it again. And you, have you been to a national celebration? See you, Khalid.”',
      find: ['يُحْتَفَلُ بِهِ', 'رُفِعَتِ الأَعْلَامُ', 'أُطْلِقَتْ', 'أَكْبَرُ مِنْ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Faisal, I’m writing from Dubai, where I’m spending my holiday at my uncle’s, and my visit coincided with UAE National Day, celebrated on 2 December to commemorate the founding of the Union. From the morning the towers were decorated in the flag’s colours, families drove out in decorated cars, then a parade was held in which men performed the ayyala with canes. When the fireworks were let off over the sea, I felt they were far bigger than any celebration I’ve seen in London. The crowds were heavy, but people’s joy made up for everything. If my dad lets me, I’ll come back next year. Won’t you come with me? Best wishes, Khalid.”',
      find: ['صَادَفَتْ زِيَارَتِي', 'إِحْيَاءً لِذِكْرَى', 'أُقِيمَ اسْتِعْرَاضٌ رَقَصَ فِيهِ', 'أَضْخَمُ بِكَثِيرٍ مِنْ'],
    },
  },
  Q3: {
    a: { title: 'احْتِفَالٌ وَطَنِيٌّ أُحِبُّهُ', en: 'A national celebration I love', bullets: 'مَا الاحْتِفَالُ وَمَتَى يُحْتَفَلُ بِهِ · مَاذَا يُفْعَلُ فِيهِ · احْتِفَالٌ حَضَرْتَهُ · مُقَارَنَةٌ وَخُطَطُكَ', bulletsEn: 'Which celebration and when · what is done · a time you attended · a comparison and your plans' },
    b: { title: 'هَلْ تَسْتَحِقُّ الاحْتِفَالَاتُ الوَطَنِيَّةُ كُلَّ هٰذِهِ الأَمْوَالِ؟', en: 'Are national celebrations worth all this money?', bullets: 'المَوْضُوعُ · الفَوَائِدُ وَالتَّكَالِيفُ · مِثَالٌ مِنْ مَدِينَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · benefits and costs · an example from your town · your opinion' },
    plan: [
      'The celebration — at-taqlīdu alladhī uḥibbuhu …; yuḥtafalu bihi fī …',
      'What is done — turfaʿu al-aʿlāmu, tuzayyanu ash-shawāriʿu, tuṭlaqu …; yalbasu an-nās …',
      'A time I attended — fī as-sanati al-māḍiya iḥtafaltu bihi fī … maʿa …; kāna …, wa-maʿa dhālika …',
      'Comparison + future — aẓunnu anna … akbaru min … wa-akthar ḥamāsan; lākinna … aqdam; sa-aḥtafilu …; Stretch: laysa … bal, law … la-.',
    ],
    frames: [
      { ar: 'تُرْفَعُ الأَعْلَامُ، وَتُطْلَقُ الأَلْعَابُ النَّارِيَّةُ.', en: 'passive: flags raised, fireworks let off.' },
      { ar: 'احْتَفَلْتُ بِهِ فِي الرِّيَاضِ مَعَ جَدِّي.', en: 'past: I celebrated it in Riyadh with grandpa.' },
      { ar: 'هٰذَا الاحْتِفَالُ أَكْبَرُ وَأَكْثَرُ حَمَاسًا.', en: 'comparison: bigger and more exciting.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'My family is Saudi; I live in Britain; my favourite is Saudi National Day, celebrated on 23 September → green flags are raised, streets lit, traditional clothes, the ardah with swords, fireworks at night → last year in Riyadh with grandpa: a big park and an air show; hot, yet wonderful → bigger and more exciting than Bonfire Night, though that is older; I’ll celebrate it with my children.', find: ['يُحْتَفَلُ بِهِ', 'تُرْفَعُ الأَعْلَامُ', 'وَمَعَ ذٰلِكَ', 'أَكْبَرُ مِنْ'], notes: 'Core model: yuḥtafalu bihi + a date, three present passives (turfaʿu, tuzayyanu, tuṭlaqu), a past paragraph (iḥtafaltu, dhahabnā, shāhadnā), afʿal min (akbaru, aqdamu) and akthar ḥamāsan, sa- + li-annahu.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Every 23 September our Birmingham home becomes a small piece of Saudi Arabia: green flags in the windows, coffee and dates for neighbours and friends, and national songs playing → the day commemorates the kingdom’s unification in 1932: cities are lit, ardah performances held, fireworks launched from the towers, lighting the sky for an hour → but the best celebration I lived was in Riyadh last year: grandpa took me to an old square and held my hand as we danced the ardah with the local men to the beat of drums; I felt not like a guest but like someone returning to a place that knows me and awaits my return each year → compared with Bonfire Night, ours is louder and more joyful, theirs older, calmer and colder; “asked which I prefer, I’d say I’m lucky not to have to choose”.', find: ['يَتَحَوَّلُ … إِلَى', 'إِحْيَاءً لِذِكْرَى', 'لَمْ أَشْعُرْ … بَلْ', 'لَوْ سُئِلْتُ … لَقُلْتُ'], notes: 'Full-mark model: a vivid present hook, four passives (turfaʿu, tuqaddamu, tuzayyanu, tuqāmu), a year in words, idh + a ḥāl (wa-naḥnu narquṣu), lam ashʿur … bal, akthar ṣakhaban wa-bahjatan vs aqdamu taʾrīkhan wa-ahdaʾ, and a passive law suʾiltu … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'worth the money?', text: Q3B_FULL, en: 'Some states spend millions on national celebrations — fireworks for a few minutes, huge parades, concerts broadcast live to millions — are they worth it? → they strengthen belonging, bring together all ages and backgrounds, and attract tourists, boosting the economy and creating temporary jobs for young people; yet many think the money could go to hospitals and schools instead of burning in the sky in minutes and polluting the air → my city found a clever solution: last year the fireworks were cancelled, replaced by a cheaper light show, and the difference was donated to the food bank — and attendance was bigger than ever and families happier → celebration is necessary, but its value isn’t measured by its cost; “if governments spend wisely and transparently, people will rejoice and society will benefit together, and the day will stay a day for everyone”.', find: ['تُبَثُّ عَلَى الهَوَاءِ', 'مِمَّا يُنْعِشُ', 'اسْتُبْدِلَ بِهَا', 'لَا تُقَاسُ بِتَكْلِفَتِهِ'], notes: 'Full-mark model for the Stretch title: a list hook with a passive (tubaththu), a balanced view with kamā anna + mimmā, an tunfaqa + badalan min an, three past passives (ulghiyat, ustubdila, tubburriʿa), akbar min, lā tuqāsu and idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, with a date and two passives.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: two passive verbs and a comparison.' },
    { route: 'develop', text: 'Q3: present for every year, past for one visit, future at the end.' },
    { route: 'stretch', text: 'Q3: laysa … bal, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
