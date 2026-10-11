'use strict';
/* Exam-practice data · TC-L05 · Environmental Solutions and Responsibility (advice; obligation; purpose; conditionals). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'C', n: 5, short: 'Environmental Solutions', arShort: 'حُلُولٌ لِلْبِيئَةِ', fileTitle: 'Environmental_Solutions', title: 'Environmental Solutions and Responsibility', ar: 'الحُلُولُ البِيئِيَّةُ وَالمَسْؤُولِيَّةُ', icon: 'FaRecycle', grammar: 'advice (yanbaghī an); obligation (yajibu ʿalā … an); purpose (li-kay / li-); conditionals (idhā … fa-, law … la-)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: suggest solutions — recycling, saving water and energy, public transport — give advice (يَنْبَغِي أَنْ), say who is responsible (يَجِبُ عَلَى … أَنْ), explain purpose (لِكَيْ) and use conditionals.',
  words: [
    w(1, 'يُعِيدُ التَّدْوِيرَ', 'recycles', [['f.', 'تُعِيدُ التَّدْوِيرَ'], ['recycling', 'إِعَادَةُ التَّدْوِيرِ'], ['recyclable', 'قَابِلٌ لِلتَّدْوِيرِ']], { tag: 'verb + noun' }),
    w(2, 'يُوَفِّرُ', 'saves (water, energy)', [['f.', 'تُوَفِّرُ'], ['we', 'نُوَفِّرُ'], ['saving', 'تَوْفِيرٌ']]),
    w(3, 'يُقَلِّلُ مِنْ …', 'reduces …', [['f.', 'تُقَلِّلُ'], ['we', 'نُقَلِّلُ']]),
    w(4, 'يَحْمِي', 'protects', [['f.', 'تَحْمِي'], ['we', 'نَحْمِي'], ['protection', 'حِمَايَةٌ']]),
    w(5, 'يَزْرَعُ', 'plants', [['f.', 'تَزْرَعُ'], ['they', 'يَزْرَعُونَ'], ['a tree', 'شَجَرَةٌ · أَشْجَارٌ']]),
    w(6, 'الطَّاقَةُ', 'energy', [['solar energy', 'الطَّاقَةُ الشَّمْسِيَّةُ'], ['renewable (f.)', 'مُتَجَدِّدَةٌ']]),
    w(7, 'المُوَاصَلَاتُ العَامَّةُ', 'public transport', [['bus · train', 'الحَافِلَةُ · القِطَارُ'], ['a bicycle', 'دَرَّاجَةٌ']]),
    w(8, 'يَنْبَغِي أَنْ …', 'we should …', [['we should reduce', 'يَنْبَغِي أَنْ نُقَلِّلَ'], ['you (m.) should', 'يَنْبَغِي أَنْ تُطْفِئَ']], { tag: 'advice' }),
    w(9, 'يَجِبُ عَلَى … أَنْ', '… must …', [['the government', 'يَجِبُ عَلَى الحُكُومَةِ أَنْ'], ['us', 'يَجِبُ عَلَيْنَا أَنْ']], { tag: 'obligation' }),
    w(10, 'لِكَيْ …', 'so that, in order to …', [['so that we protect', 'لِكَيْ نَحْمِيَ'], ['also', 'لِنَحْمِيَ']], { tag: 'purpose' }),
    w(11, 'مَسْؤُولٌ عَنْ …', 'responsible for …', [['f.', 'مَسْؤُولَةٌ'], ['responsibility', 'مَسْؤُولِيَّةٌ']]),
    w(12, 'حَمْلَةٌ', 'a campaign', [['pl.', 'حَمَلَاتٌ'], ['an awareness campaign', 'حَمْلَةُ تَوْعِيَةٍ']]),
  ],
  words1: { eyebrow: 'Language bank · actions (he · she · we)', title: 'Recycle, save, protect', ar: 'نَحْمِي البِيئَةَ', notes: 'LANGUAGE BANK (2 min) — after أَنْ and لِكَيْ the verb takes fatḥa (subjunctive): نُقَلِّلُ → أَنْ نُقَلِّلَ · نَحْمِي → لِكَيْ نَحْمِيَ. Recycling: نُعِيدُ تَدْوِيرَ البْلَاسْتِيكِ.' },
  words2: { eyebrow: 'Language bank · advice, duty and purpose', title: 'Should, must, so that', ar: 'النَّصِيحَةُ وَالمَسْؤُولِيَّةُ', notes: 'LANGUAGE BANK (2 min) — advice: يَنْبَغِي أَنْ. Duty: يَجِبُ عَلَى + person + أَنْ. Purpose: لِكَيْ. Condition: إِذَا + past, فَـ + result: إِذَا أَطْفَأْنَا الأَضْوَاءَ، فَسَنُوَفِّرُ الطَّاقَةَ.' },
  checkCore: 'suggested a solution with yanbaghī an or yajibu an',
  checkDevelop: 'said who is responsible (yajibu ʿalā …) and gave a purpose (li-kay)',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'an eco-club meeting', title: 'Role play A — Joining the eco-club', ar: 'فِي نَادِي البِيئَةِ', you: 'a new member', them: 'the club leader',
      tasks: [
        { core: true, ex: 'أَهْلًا! لِمَاذَا تُرِيدُ أَنْ تَنْضَمَّ إِلَى النَّادِي؟', task: 'Give a reason.', help: 'لِأَنِّي أُرِيدُ أَنْ …', model: 'لِأَنِّي أُرِيدُ أَنْ أَحْمِيَ البِيئَةَ.', modelEn: 'Because I want to protect the environment.' },
        { core: true, ex: 'مَاذَا تَفْعَلُ فِي البَيْتِ لِلْبِيئَةِ؟', task: 'Say one thing you do.', help: 'أُعِيدُ … / أُطْفِئُ …', model: 'أُطْفِئُ الأَضْوَاءَ عِنْدَمَا أَخْرُجُ مِنَ الغُرْفَةِ.', modelEn: 'I switch off the lights when I leave the room.' },
        { core: true, ex: 'مَا فِكْرَتُكَ لِلْمَدْرَسَةِ؟', task: 'Suggest one idea.', help: 'يَنْبَغِي أَنْ …', model: 'يَنْبَغِي أَنْ نَضَعَ سَلَّاتٍ لِإِعَادَةِ التَّدْوِيرِ فِي كُلِّ صَفٍّ.', modelEn: 'We should put recycling bins in every classroom.' },
        { core: true, ex: 'نَجْتَمِعُ كُلَّ أُسْبُوعٍ.', task: 'Ask when and where.', help: 'مَتَى … وَأَيْنَ …؟', model: 'مَتَى وَأَيْنَ نَجْتَمِعُ؟', modelEn: 'When and where do we meet?' },
        { core: true, unexpected: true, ex: 'هَلْ تَزْرَعُ شَيْئًا فِي البَيْتِ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، أَزْرَعُ … / لَا، …', model: 'نَعَمْ، أَزْرَعُ الطَّمَاطِمَ وَالنَّعْنَاعَ فِي الحَدِيقَةِ.', modelEn: 'Yes, I grow tomatoes and mint in the garden.' },
      ],
      girl: 'تُرِيدِينَ · تَفْعَلِينَ · فِكْرَتُكِ · تَزْرَعِينَ',
      notes: 'Core: an aḥmiya (subjunctive), yanbaghī an naḍaʿa, li-iʿādati at-tadwīr (purpose with li- + noun).',
    },
    {
      id: 'B', level: 'Core+', setting: 'at home', title: 'Role play B — A greener family', ar: 'أُسْرَةٌ صَدِيقَةٌ لِلْبِيئَةِ', you: 'a teenager', them: 'your father or mother',
      tasks: [
        { core: true, ex: 'فَاتُورَةُ الكَهْرَبَاءِ غَالِيَةٌ جِدًّا هٰذَا الشَّهْرَ!', task: 'Suggest a way to save energy.', help: 'يَنْبَغِي أَنْ نُطْفِئَ …', model: 'يَنْبَغِي أَنْ نُطْفِئَ الأَجْهِزَةَ فِي اللَّيْلِ.', modelEn: 'We should switch the devices off at night.' },
        { core: true, ex: 'وَالمَاءُ؟', task: 'Suggest a way to save water.', help: 'نَسْتَطِيعُ أَنْ …', model: 'نَسْتَطِيعُ أَنْ نَسْتَحِمَّ فِي خَمْسِ دَقَائِقَ فَقَطْ.', modelEn: 'We can shower in only five minutes.' },
        { ex: 'فِكْرَةٌ جَيِّدَةٌ، لٰكِنَّ إِخْوَتَكَ لَا يَسْمَعُونَ!', task: 'ASK for a family meeting.', help: 'هَلْ يُمْكِنُ أَنْ …؟', model: 'هَلْ يُمْكِنُ أَنْ نَعْقِدَ اجْتِمَاعًا عَائِلِيًّا يَوْمَ الجُمُعَةِ؟', modelEn: 'Could we hold a family meeting on Friday?' },
        { ex: 'وَمَاذَا عَنِ السَّيَّارَةِ؟ نَسْتَخْدِمُهَا كُلَّ يَوْمٍ.', task: 'Suggest an alternative and its purpose.', help: 'نَسْتَطِيعُ أَنْ … لِكَيْ …', model: 'نَسْتَطِيعُ أَنْ نَمْشِيَ إِلَى السُّوقِ، لِكَيْ نُقَلِّلَ مِنَ التَّلَوُّثِ وَنُحَافِظَ عَلَى صِحَّتِنَا.', modelEn: 'We can walk to the shops, to reduce pollution and keep healthy.' },
        { unexpected: true, ex: 'هَلْ سَتُسَاعِدُ فِي فَرْزِ النُّفَايَاتِ؟', task: 'Answer the unexpected question (future).', help: 'نَعَمْ، سَأَفْرِزُ … وَ…', model: 'نَعَمْ، سَأَفْرِزُ الوَرَقَ وَالبْلَاسْتِيكَ كُلَّ أُسْبُوعٍ.', modelEn: 'Yes, I’ll sort the paper and plastic every week.' },
      ],
      girl: 'إِخْوَتَكِ · سَتُسَاعِدِينَ',
      notes: 'Core+: yanbaghī an + subjunctive, nastaṭīʿu an, the CANDIDATE asks (hal yumkinu an …?), li-kay nuqallila.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a project report', title: 'Role play C — Our recycling project', ar: 'مَشْرُوعُ إِعَادَةِ التَّدْوِيرِ', you: 'the project leader', them: 'a teacher on the judging panel',
      tasks: [
        { ex: 'حَدِّثْنَا عَنْ مَشْرُوعِكُمْ.', task: 'Say what you did (past).', help: 'جَمَعْنَا … وَصَنَعْنَا …', model: 'جَمَعْنَا الزُّجَاجَاتِ البْلَاسْتِيكِيَّةَ مِنَ المَدْرَسَةِ، وَصَنَعْنَا مِنْهَا حَدِيقَةً عَمُودِيَّةً.', modelEn: 'We collected plastic bottles from school and made a vertical garden from them.' },
        { ex: 'كَمْ زُجَاجَةً جَمَعْتُمْ؟', task: 'Give a number and a time.', help: 'جَمَعْنَا … فِي …', model: 'جَمَعْنَا أَكْثَرَ مِنْ خَمْسِمِئَةِ زُجَاجَةٍ فِي شَهْرٍ وَاحِدٍ.', modelEn: 'We collected more than five hundred bottles in one month.' },
        { ex: 'لِمَاذَا اخْتَرْتُمْ هٰذَا المَشْرُوعَ؟', task: 'Explain the purpose.', help: 'لِكَيْ … وَلِكَيْ …', model: 'لِكَيْ نُقَلِّلَ النُّفَايَاتِ، وَلِكَيْ نُعَلِّمَ الطُّلَّابَ أَنَّ البْلَاسْتِيكَ لَهُ حَيَاةٌ ثَانِيَةٌ.', modelEn: 'To reduce waste, and to teach students that plastic has a second life.' },
        { ex: 'مَا الصُّعُوبَاتُ الَّتِي وَاجَهْتُمُوهَا؟', task: 'Describe a difficulty and how you solved it.', help: 'فِي البِدَايَةِ … لٰكِنَّنَا …', model: 'فِي البِدَايَةِ لَمْ يَهْتَمَّ الطُّلَّابُ، لٰكِنَّنَا عَمِلْنَا مُسَابَقَةً بَيْنَ الصُّفُوفِ، فَتَحَمَّسَ الجَمِيعُ.', modelEn: 'At first students weren’t interested, but we ran a competition between classes, and everyone got excited.' },
        { unexpected: true, ex: 'لَوْ فُزْتُمْ بِالجَائِزَةِ، مَاذَا تَفْعَلُونَ بِالمَالِ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ فُزْنَا، لَاشْتَرَيْنَا …', model: 'لَوْ فُزْنَا، لَاشْتَرَيْنَا أَلْوَاحًا شَمْسِيَّةً لِسَقْفِ المَدْرَسَةِ.', modelEn: 'If we won, we would buy solar panels for the school roof.' },
      ],
      girl: '(same words — the teacher may be a woman: حَدِّثِينَا is not needed; the teacher speaks)',
      notes: 'Develop: past (jamaʿnā, ṣanaʿnā), numbers (khamsimiʾati zujājatin), purpose with li-kay ×2, a problem → solution (fa-), law … la- with a past verb.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a youth climate summit', title: 'Role play D — Who should act first?', ar: 'مَنْ يَجِبُ أَنْ يَبْدَأَ؟', you: 'a student delegate', them: 'a city councillor',
      tasks: [
        { ex: 'مَنِ المَسْؤُولُ عَنْ حِمَايَةِ البِيئَةِ فِي رَأْيِكَ؟', task: 'Give a clear opinion with a reason.', help: 'أَرَى أَنَّ … لِأَنَّ …', model: 'أَرَى أَنَّ المَسْؤُولِيَّةَ مُشْتَرَكَةٌ، لِأَنَّ الحُكُومَاتِ تَضَعُ القَوَانِينَ، لٰكِنَّ الأَفْرَادَ هُمُ الَّذِينَ يُطَبِّقُونَهَا.', modelEn: 'I think the responsibility is shared: governments make laws, but individuals apply them.' },
        { ex: 'مَاذَا يَجِبُ عَلَى البَلَدِيَّةِ أَنْ تَفْعَلَ؟', task: 'Make two demands.', help: 'يَجِبُ عَلَيْهَا أَنْ … وَأَنْ …', model: 'يَجِبُ عَلَيْهَا أَنْ تُخَفِّضَ أَسْعَارَ الحَافِلَاتِ لِلطُّلَّابِ، وَأَنْ تُنْشِئَ مَمَرَّاتٍ آمِنَةً لِلدَّرَّاجَاتِ.', modelEn: 'It must lower bus fares for students, and build safe cycle lanes.' },
        { ex: 'هٰذَا مُكْلِفٌ جِدًّا!', task: 'Concede and counter.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهُ مُكْلِفٌ فِي البِدَايَةِ، غَيْرَ أَنَّهُ سَيُوَفِّرُ مَلَايِينَ الجُنَيْهَاتِ مِنْ تَكَالِيفِ العِلَاجِ وَالطُّرُقِ.', modelEn: 'It is costly at first, but it will save millions of pounds in health and road costs.' },
        { ex: 'هَلْ رَأَيْتَ هٰذِهِ الحُلُولَ تَنْجَحُ فِي مَكَانٍ آخَرَ؟', task: 'Give an example from another place.', help: 'نَعَمْ، فِي … حَيْثُ …', model: 'نَعَمْ، فِي أَمْسْتِرْدَامَ حَيْثُ يَذْهَبُ أَكْثَرُ مِنْ نِصْفِ السُّكَّانِ إِلَى العَمَلِ بِالدَّرَّاجَةِ، فَأَصْبَحَ الهَوَاءُ أَنْظَفَ بِكَثِيرٍ.', modelEn: 'Yes, in Amsterdam, where over half the people cycle to work, and the air has become much cleaner.' },
        { unexpected: true, ex: 'وَإِذَا لَمْ تُوَافِقِ البَلَدِيَّةُ؟', task: 'Answer the unexpected question (condition + future).', help: 'إِذَا لَمْ … فَسَـ…', model: 'إِذَا لَمْ تُوَافِقْ، فَسَنُطْلِقُ حَمْلَةَ تَوْقِيعَاتٍ، وَسَنَكْتُبُ إِلَى الصُّحُفِ المَحَلِّيَّةِ.', modelEn: 'If it doesn’t agree, we’ll launch a petition and write to the local papers.' },
      ],
      girl: 'رَأْيِكِ · رَأَيْتِ',
      notes: 'Stretch: arā anna, alladhīna, yajibu ʿalayhā an … wa-an, a concession with sa-, ḥaythu + example, idhā lam … fa-sa-.',
      modelFoot: 'Stretch: a shared-responsibility opinion, two demands, a concession, a real-world example and a conditional plan.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَنَا وَالبِيئَةُ', aim: 'one full sentence per question',
      qs: [
        { q: 'هَلْ تُعِيدُ التَّدْوِيرَ فِي البَيْتِ؟', en: 'Do you recycle at home?', start: 'نَعَمْ، نُعِيدُ تَدْوِيرَ …', model: 'نَعَمْ، نُعِيدُ تَدْوِيرَ الوَرَقِ وَالبْلَاسْتِيكِ.', modelEn: 'Yes, we recycle paper and plastic.' },
        { q: 'كَيْفَ تُوَفِّرُ المَاءَ؟', en: 'How do you save water?', start: 'أُغْلِقُ … عِنْدَمَا …', model: 'أُغْلِقُ الحَنَفِيَّةَ عِنْدَمَا أُنَظِّفُ أَسْنَانِي.', modelEn: 'I turn off the tap when I brush my teeth.' },
        { q: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', en: 'How do you get to school?', start: 'أَذْهَبُ … بِالحَافِلَةِ / مَشْيًا', model: 'أَذْهَبُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ.', modelEn: 'I go to school by bus.' },
        { q: 'مَاذَا يَنْبَغِي أَنْ نَفْعَلَ لِلْبِيئَةِ؟', en: 'What should we do for the environment?', start: 'يَنْبَغِي أَنْ …', model: 'يَنْبَغِي أَنْ نَزْرَعَ أَشْجَارًا كَثِيرَةً.', modelEn: 'We should plant lots of trees.' },
        { q: 'هَلْ تَسْتَخْدِمُ أَكْيَاسَ البْلَاسْتِيكِ؟', en: 'Do you use plastic bags?', start: 'لَا، أَسْتَخْدِمُ …', model: 'لَا، أَسْتَخْدِمُ حَقِيبَةً مِنَ القُمَاشِ.', modelEn: 'No, I use a cloth bag.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + yanbaghī an = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'حُلُولٌ عَمَلِيَّةٌ', aim: 'two or three sentences, with a purpose and a past detail',
      qs: [
        { q: 'مَاذَا تَفْعَلُ مَدْرَسَتُكَ لِحِمَايَةِ البِيئَةِ؟', en: 'What does your school do to protect the environment?', start: 'تُنَظِّمُ مَدْرَسَتِي … وَ…', model: 'تُنَظِّمُ مَدْرَسَتِي يَوْمًا لِلتَّنْظِيفِ كُلَّ شَهْرٍ، وَعِنْدَنَا أَلْوَاحٌ شَمْسِيَّةٌ عَلَى السَّقْفِ.', modelEn: 'My school organises a clean-up day every month, and we have solar panels on the roof.' },
        { q: 'مَا الَّذِي غَيَّرْتَهُ فِي عَادَاتِكَ لِلْبِيئَةِ؟', en: 'What have you changed in your habits for the environment?', start: 'فِي الماضي كُنْتُ … أَمَّا الآنَ …', model: 'كُنْتُ أَشْتَرِي زُجَاجَةَ مَاءٍ كُلَّ يَوْمٍ، أَمَّا الآنَ فَأَحْمِلُ زُجَاجَتِي الخَاصَّةَ.', modelEn: 'I used to buy a bottle of water every day; now I carry my own bottle.' },
        { q: 'لِمَاذَا يَنْبَغِي أَنْ نَسْتَخْدِمَ المُوَاصَلَاتِ العَامَّةَ؟', en: 'Why should we use public transport?', start: 'لِكَيْ نُقَلِّلَ … وَ…', model: 'لِكَيْ نُقَلِّلَ مِنْ زَحْمَةِ المُرُورِ وَالتَّلَوُّثِ، وَلِأَنَّهَا أَرْخَصُ مِنَ السَّيَّارَةِ.', modelEn: 'To reduce traffic and pollution, and because it is cheaper than a car.' },
        { q: 'هَلْ شَارَكْتَ فِي حَمْلَةٍ بِيئِيَّةٍ؟', en: 'Have you taken part in an environmental campaign?', start: 'نَعَمْ، شَارَكْتُ فِي … حَيْثُ …', model: 'نَعَمْ، شَارَكْتُ فِي حَمْلَةٍ لِزِرَاعَةِ الأَشْجَارِ، حَيْثُ زَرَعْنَا خَمْسِينَ شَجَرَةً فِي يَوْمٍ وَاحِدٍ.', modelEn: 'Yes, in a tree-planting campaign, where we planted fifty trees in one day.' },
        { q: 'إِذَا أَطْفَأْنَا الأَجْهِزَةَ، مَاذَا يَحْدُثُ؟', en: 'If we switch off devices, what happens?', start: 'إِذَا أَطْفَأْنَا …، فَسَنُوَفِّرُ …', model: 'إِذَا أَطْفَأْنَا الأَجْهِزَةَ، فَسَنُوَفِّرُ الطَّاقَةَ وَالمَالَ مَعًا.', modelEn: 'If we switch off devices, we will save energy and money together.' },
      ],
      foot: 'Develop: two or three sentences — a purpose (li-kay), a past change and a condition.',
      modelFoot: 'Purpose + past + condition = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'مَسْؤُولِيَّةُ مَنْ؟', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ يَجِبُ عَلَى الحُكُومَةِ أَنْ تَمْنَعَ أَكْيَاسَ البْلَاسْتِيكِ؟', en: 'Should the government ban plastic bags?', start: 'أَرَى أَنَّهُ يَجِبُ … لِأَنَّ …', model: 'أَرَى أَنَّهُ يَجِبُ عَلَيْهَا ذٰلِكَ، لِأَنَّ التَّجْرِبَةَ أَثْبَتَتْ أَنَّ النَّاسَ يَتَعَوَّدُونَ عَلَى البَدَائِلِ بِسُرْعَةٍ.', modelEn: 'I think it should, because experience has shown people get used to alternatives quickly.' },
        { q: 'هَلْ يَسْتَطِيعُ فَرْدٌ وَاحِدٌ أَنْ يُغَيِّرَ شَيْئًا؟', en: 'Can one person change anything?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ تَأْثِيرَ الفَرْدِ صَغِيرٌ، غَيْرَ أَنَّ مَلَايِينَ الأَفْرَادِ يَصْنَعُونَ فَرْقًا كَبِيرًا، كَمَا أَنَّ المِثَالَ الجَيِّدَ يَنْتَشِرُ.', modelEn: 'One person’s impact is small, but millions make a big difference — and a good example spreads.' },
        { q: 'مَا رَأْيُكَ فِي السَّيَّارَاتِ الكَهْرَبَائِيَّةِ؟', en: 'What do you think of electric cars?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، لَا تُخْرِجُ دُخَانًا فِي المَدِينَةِ، وَمِنْ نَاحِيَةٍ أُخْرَى، مَا زَالَتْ غَالِيَةً، وَتَحْتَاجُ بَطَّارِيَّاتُهَا إِلَى مَعَادِنَ نَادِرَةٍ.', modelEn: 'On one hand, no fumes in the city; on the other, they are still expensive and their batteries need rare metals.' },
        { q: 'كَيْفَ يُمْكِنُ أَنْ نُقْنِعَ الكِبَارَ بِتَغْيِيرِ عَادَاتِهِمْ؟', en: 'How can we persuade adults to change their habits?', start: 'يُمْكِنُ أَنْ … لِكَيْ …', model: 'يُمْكِنُ أَنْ نُبَيِّنَ لَهُمْ كَمْ سَيُوَفِّرُونَ مِنَ المَالِ، لِكَيْ يَرَوْا الفَائِدَةَ بِأَعْيُنِهِمْ.', modelEn: 'We can show them how much money they’ll save, so they see the benefit for themselves.' },
        { q: 'لَوْ كُنْتَ وَزِيرًا لِلْبِيئَةِ، مَاذَا تَفْعَلُ أَوَّلًا؟', en: 'If you were environment minister, what would you do first?', start: 'لَوْ كُنْتُ وَزِيرًا، لَـ…', model: 'لَوْ كُنْتُ وَزِيرًا لِلْبِيئَةِ، لَجَعَلْتُ المُوَاصَلَاتِ العَامَّةَ مَجَّانِيَّةً لِلطُّلَّابِ، وَلَزَرَعْتُ غَابَةً حَوْلَ كُلِّ مَدِينَةٍ.', modelEn: 'If I were environment minister, I’d make public transport free for students and plant a forest round every city.' },
      ],
      foot: 'Stretch: arā anna, a concession, a balanced view, li-kay and law … la-.',
      modelFoot: 'Stretch: evidence, ṣaḥīḥun anna … ghayra anna, min nāḥiya …, purpose and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I suggested solutions with yanbaghī an or nastaṭīʿu an.' },
    { route: 'core', text: 'I said what I do at home to help the environment.' },
    { route: 'develop', text: 'I gave a purpose with li-kay and the right verb ending.' },
    { route: 'develop', text: 'I said who must act (yajibu ʿalā … an).' },
    { route: 'stretch', text: 'I used a concession, a balanced view or law … la-.' },
  ],
};
speak.RP[2].girl = 'مَشْرُوعِكُنَّ / مَشْرُوعِكُمْ · جَمَعْتُنَّ / جَمَعْتُمْ';
speak.RP[3].tasks[4].help = 'إِذَا لَمْ تُوَافِقْ، فَسَنُطْلِقُ …';
speak.CONV[1].qs[1].start = 'كُنْتُ … أَمَّا الآنَ فَأَحْمِلُ …';
speak.CONV[2].qs[4].start = 'لَوْ كُنْتُ وَزِيرًا، لَجَعَلْتُ …';

const Q2_CORE = `إِلَى مُحَرِّرِ مَجَلَّةِ المَدْرَسَةِ،
أُرِيدُ أَنْ أُشَارِكَ أَفْكَارِي عَنْ حِمَايَةِ البِيئَةِ. أَكْبَرُ مُشْكِلَةٍ فِي مَدْرَسَتِنَا هِيَ الوَرَقُ وَالبْلَاسْتِيكُ؛ نَرْمِي كَمِّيَّاتٍ كَبِيرَةً كُلَّ يَوْمٍ. فِي رَأْيِي، يَنْبَغِي أَنْ نَضَعَ سَلَّاتٍ لِإِعَادَةِ التَّدْوِيرِ فِي كُلِّ صَفٍّ، وَيَجِبُ عَلَى الطُّلَّابِ أَنْ يَحْمِلُوا زُجَاجَاتِ مَاءٍ خَاصَّةً. فِي السَّنَةِ المَاضِيَةِ زَرَعْنَا عِشْرِينَ شَجَرَةً فِي المَلْعَبِ، وَكَانَتْ تَجْرِبَةً رَائِعَةً. فِي الشَّهْرِ القَادِمِ سَنُنَظِّمُ حَمْلَةَ تَوْعِيَةٍ، لِكَيْ يَعْرِفَ الجَمِيعُ أَهَمِّيَّةَ البِيئَةِ.
مَعَ الشُّكْرِ،
آدَمُ`;
const Q2_FULL = `إِلَى مُحَرِّرِ مَجَلَّةِ المَدْرَسَةِ المُحْتَرَمِ،
أَكْتُبُ إِلَيْكُمْ لِأَنِّي أُؤْمِنُ بِأَنَّ مَدْرَسَتَنَا تَسْتَطِيعُ أَنْ تَكُونَ قُدْوَةً فِي حِمَايَةِ البِيئَةِ. فَمَا زِلْنَا نَرْمِي يَوْمِيًّا أَكْيَاسًا مِنَ الأَوْرَاقِ وَالزُّجَاجَاتِ الَّتِي يُمْكِنُ إِعَادَةُ تَدْوِيرِهَا. لِذٰلِكَ أَقْتَرِحُ أَنْ تُوضَعَ سَلَّاتٌ مُلَوَّنَةٌ لِلْفَرْزِ فِي كُلِّ مَمَرٍّ، كَمَا يَجِبُ عَلَى المَقْصَفِ أَنْ يَتَوَقَّفَ عَنْ بَيْعِ الأَكْوَابِ البْلَاسْتِيكِيَّةِ. وَقَدْ أَثْبَتَتْ تَجْرِبَتُنَا العَامَ المَاضِي، حِينَ زَرَعْنَا عِشْرِينَ شَجَرَةً، أَنَّ الطُّلَّابَ مُتَحَمِّسُونَ لِلتَّغْيِيرِ. وَإِذَا دَعَمَتِ الإِدَارَةُ فِكْرَتَنَا، فَسَنُطْلِقُ الشَّهْرَ القَادِمَ حَمْلَةً بِعُنْوَانِ "مَدْرَسَةٌ بِلَا بْلَاسْتِيكٍ".
وَتَفَضَّلُوا بِقَبُولِ فَائِقِ الاحْتِرَامِ،
آدَمُ`;
const Q3A_CORE = `أَنَا أُحِبُّ البِيئَةَ، وَأُحَاوِلُ أَنْ أَحْمِيَهَا كُلَّ يَوْمٍ. فِي البَيْتِ نُعِيدُ تَدْوِيرَ الوَرَقِ وَالبْلَاسْتِيكِ وَالزُّجَاجِ، وَأُطْفِئُ الأَضْوَاءَ عِنْدَمَا أَخْرُجُ مِنَ الغُرْفَةِ. أُغْلِقُ الحَنَفِيَّةَ أَيْضًا عِنْدَمَا أُنَظِّفُ أَسْنَانِي، لِكَيْ أُوَفِّرَ المَاءَ. وَأَحْمِلُ حَقِيبَةً مِنَ القُمَاشِ إِلَى السُّوقِ.
فِي المَدْرَسَةِ عِنْدَنَا نَادٍ لِلْبِيئَةِ. نَجْتَمِعُ كُلَّ يَوْمِ أَرْبِعَاءَ، وَنَتَكَلَّمُ عَنِ الحُلُولِ. فِي رَأْيِي، يَنْبَغِي أَنْ نَذْهَبَ إِلَى المَدْرَسَةِ مَشْيًا أَوْ بِالدَّرَّاجَةِ، لِأَنَّ السَّيَّارَاتِ تُلَوِّثُ الهَوَاءَ.
فِي السَّنَةِ المَاضِيَةِ شَارَكْتُ فِي حَمْلَةٍ لِزِرَاعَةِ الأَشْجَارِ. ذَهَبْنَا إِلَى حَدِيقَةٍ كَبِيرَةٍ، وَزَرَعْنَا خَمْسِينَ شَجَرَةً صَغِيرَةً. كَانَ العَمَلُ مُتْعِبًا، لٰكِنِّي كُنْتُ فَخُورًا جِدًّا. الآنَ أَصْبَحَتِ الأَشْجَارُ أَكْبَرَ، وَتَعِيشُ فِيهَا الطُّيُورُ.
يَجِبُ عَلَى الحُكُومَةِ أَنْ تُسَاعِدَنَا أَيْضًا. وَيَجِبُ عَلَى المَصَانِعِ أَنْ تُقَلِّلَ الدُّخَانَ. فِي المُسْتَقْبَلِ سَأُرَكِّبُ أَلْوَاحًا شَمْسِيَّةً عَلَى بَيْتِي، وَسَأَشْتَرِي سَيَّارَةً كَهْرَبَائِيَّةً، لِكَيْ أُسَاعِدَ البِيئَةَ.`;
const Q3A_FULL = `كَثِيرًا مَا نَسْمَعُ عَنِ المَشَاكِلِ البِيئِيَّةِ حَتَّى نَشْعُرَ بِأَنَّهُ لَا أَمَلَ، لٰكِنِّي تَعَلَّمْتُ أَنَّ الحُلُولَ الحَقِيقِيَّةَ تَبْدَأُ مِنَ البَيْتِ. فَأُسْرَتِي تَفْرِزُ النُّفَايَاتِ مُنْذُ سَنَتَيْنِ، وَنَحْرِصُ عَلَى إِطْفَاءِ الأَجْهِزَةِ قَبْلَ النَّوْمِ، مِمَّا خَفَّضَ فَاتُورَةَ الكَهْرَبَاءِ بِشَكْلٍ مَلْحُوظٍ.
أَمَّا فِي المَدْرَسَةِ، فَقَدْ أَسَّسْتُ مَعَ زُمَلَائِي نَادِيًا لِلْبِيئَةِ. وَكَانَ أَوَّلُ مَشَارِيعِنَا جَمْعَ الزُّجَاجَاتِ البْلَاسْتِيكِيَّةِ لِصُنْعِ حَدِيقَةٍ عَمُودِيَّةٍ عَلَى جِدَارِ المَلْعَبِ. فِي البِدَايَةِ لَمْ يَهْتَمَّ أَحَدٌ، لٰكِنَّنَا نَظَّمْنَا مُسَابَقَةً بَيْنَ الصُّفُوفِ، فَجَمَعْنَا أَكْثَرَ مِنْ أَلْفِ زُجَاجَةٍ فِي شَهْرٍ وَاحِدٍ، وَزَرَعْنَا فِيهَا الزُّهُورَ وَالأَعْشَابَ.
وَمَعَ ذٰلِكَ، أَعْتَقِدُ أَنَّ جُهُودَ الأَفْرَادِ وَحْدَهَا لَا تَكْفِي؛ إِذْ يَجِبُ عَلَى الحُكُومَاتِ أَنْ تَفْرِضَ قَوَانِينَ عَلَى المَصَانِعِ، وَأَنْ تَجْعَلَ المُوَاصَلَاتِ العَامَّةَ أَرْخَصَ لِكَيْ يَتْرُكَ النَّاسُ سَيَّارَاتِهِمْ.
صَحِيحٌ أَنَّ الطَّرِيقَ طَوِيلٌ، غَيْرَ أَنَّ كُلَّ خُطْوَةٍ صَغِيرَةٍ تُقَرِّبُنَا مِنَ الهَدَفِ. وَلَوْ أَصْبَحَتْ كُلُّ مَدْرَسَةٍ قُدْوَةً كَمَدْرَسَتِنَا، لَنَشَأَ جِيلٌ كَامِلٌ يَحْتَرِمُ الأَرْضَ وَيَحْمِيهَا.`;
const Q3B_FULL = `عِنْدَمَا نَتَحَدَّثُ عَنْ حِمَايَةِ البِيئَةِ، يُلْقِي كُلُّ طَرَفٍ المَسْؤُولِيَّةَ عَلَى الآخَرِ؛ فَالمُوَاطِنُونَ يَلُومُونَ الحُكُومَاتِ وَالشَّرِكَاتِ الكُبْرَى، وَالحُكُومَاتُ تَطْلُبُ مِنَ المُوَاطِنِينَ أَنْ يُغَيِّرُوا عَادَاتِهِمْ، بَيْنَمَا تَسْتَمِرُّ المُشْكِلَةُ فِي التَّفَاقُمِ يَوْمًا بَعْدَ يَوْمٍ. فَمَنِ المَسْؤُولُ حَقًّا؟
مِنْ نَاحِيَةٍ، تَمْلِكُ الحُكُومَاتُ القُوَّةَ لِتَغْيِيرِ الوَاقِعِ بِسُرْعَةٍ؛ فَقَانُونٌ وَاحِدٌ يَمْنَعُ الأَكْيَاسَ البْلَاسْتِيكِيَّةَ يُوقِفُ اسْتِخْدَامَ مَلَايِينِ الأَكْيَاسِ. وَمِنْ نَاحِيَةٍ أُخْرَى، لَا يَنْجَحُ أَيُّ قَانُونٍ إِذَا لَمْ يَقْتَنِعْ بِهِ النَّاسُ وَيُطَبِّقُوهُ فِي حَيَاتِهِمُ اليَوْمِيَّةِ.
وَقَدْ رَأَيْتُ مِثَالًا رَائِعًا عَلَى التَّعَاوُنِ حِينَ زُرْتُ أَقَارِبِي فِي رُوَانْدَا، الَّتِي مَنَعَتِ البْلَاسْتِيكَ مُنْذُ سَنَوَاتٍ؛ فَالشَّوَارِعُ هُنَاكَ نَظِيفَةٌ بِشَكْلٍ مُدْهِشٍ، وَيُشَارِكُ السُّكَّانُ جَمِيعًا فِي يَوْمِ تَنْظِيفٍ شَهْرِيٍّ، حَتَّى الوُزَرَاءُ أَنْفُسُهُمْ. وَقَدْ أَدْهَشَنِي أَنَّ أَحَدًا لَا يَشْكُو، بَلْ يَعْتَبِرُونَهُ وَاجِبًا وَطَنِيًّا.
لِذٰلِكَ أَرَى أَنَّ المَسْؤُولِيَّةَ مُشْتَرَكَةٌ: يَجِبُ عَلَى الحُكُومَاتِ أَنْ تَضَعَ القَوَانِينَ، وَيَنْبَغِي عَلَيْنَا أَنْ نُغَيِّرَ سُلُوكَنَا. وَإِذَا عَمِلَ الطَّرَفَانِ مَعًا، فَسَنَحْمِي كَوْكَبَنَا لِلْأَجْيَالِ القَادِمَةِ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a green-pledge form, write a letter to the school magazine suggesting solutions, and write an extended piece about what you do for the environment or about who is responsible.',
  lift: [
    { ar: 'يَنْبَغِي أَنْ نَضَعَ سَلَّاتٍ لِإِعَادَةِ التَّدْوِيرِ', en: 'we should put out recycling bins' },
    { ar: 'يَجِبُ عَلَى الحُكُومَاتِ أَنْ تَفْرِضَ قَوَانِينَ', en: 'governments must impose laws' },
    { ar: 'لِكَيْ يَتْرُكَ النَّاسُ سَيَّارَاتِهِمْ', en: 'so that people leave their cars' },
  ],
  checkTip: 'Check: after an / li-kay / li- the verb is subjunctive (naḍaʿa, nuqallila, naḥmiya); yajibu ʿalā + the person + an + verb agreeing with that person (yajibu ʿalā al-ḥukūmati an tafriḍa).',
  FORM: {
    title: 'Green pledge form', ar: 'اسْتِمَارَةُ التَّعَهُّدِ الأَخْضَرِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'آدَمُ يُوسُفُ', modelEn: 'Adam Yusuf' },
      { core: true, ar: 'المَدْرَسَةُ وَالصَّفُّ', en: 'School and class', model: 'مَدْرَسَةُ المَدِينَةِ، الصَّفُّ الحَادِي عَشَرَ', modelEn: 'Al Madina School, Year 11' },
      { core: true, ar: 'وَسِيلَةُ الذَّهَابِ إِلَى المَدْرَسَةِ', en: 'How you get to school', model: 'بِالحَافِلَةِ', modelEn: 'by bus' },
      { core: true, ar: 'مَا تُعِيدُ تَدْوِيرَهُ', en: 'What you recycle', model: 'الوَرَقُ وَالبْلَاسْتِيكُ', modelEn: 'paper and plastic' },
      { core: true, ar: 'كَيْفَ تُوَفِّرُ المَاءَ؟', en: 'How you save water', model: 'دُشٌّ قَصِيرٌ', modelEn: 'a short shower' },
      { core: true, ar: 'كَيْفَ تُوَفِّرُ الطَّاقَةَ؟', en: 'How you save energy', model: 'أُطْفِئُ الأَضْوَاءَ', modelEn: 'I switch off the lights' },
      { ar: 'تَعَهُّدُكَ لِهٰذَا الشَّهْرِ', en: 'Your pledge for this month', model: 'لَا أَكْيَاسَ بْلَاسْتِيكِيَّةً', modelEn: 'no plastic bags' },
      { ar: 'جُمْلَةٌ: لِمَاذَا هٰذَا التَّعَهُّدُ؟', en: 'ONE sentence: why this pledge?', model: 'أَتَعَهَّدُ بِذٰلِكَ لِكَيْ أُقَلِّلَ النُّفَايَاتِ الَّتِي تَصِلُ إِلَى البَحْرِ.', modelEn: 'I pledge this to reduce the waste that reaches the sea.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with li-kay + subjunctive.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 7: lā + accusative (lā akyāsa). Box 8: li-kay uqallila (fatḥa).',
  },
  Q2: {
    short: 'a letter to the school magazine', title: 'Question 2: letter with solutions', ar: 'رِسَالَةٌ إِلَى مَجَلَّةِ المَدْرَسَةِ',
    task: 'Your school magazine is asking for ideas to make the school greener. Write a letter in Arabic of about 80–90 words. You must include: • the biggest environmental problem at your school • what students and the school should do • something your school did in the past • what you will organise, and why.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Advice and obligation (yanbaghī an / yajibu ʿalā … an).', 'A past AND a future sentence, with li-kay.', 'About 80–90 words.'],
    phrases: [['أَكْبَرُ مُشْكِلَةٍ فِي مَدْرَسَتِنَا هِيَ …', 'the biggest problem in our school is …'], ['يَنْبَغِي أَنْ … وَيَجِبُ عَلَى … أَنْ …', 'we should … and … must …'], ['فِي السَّنَةِ المَاضِيَةِ زَرَعْنَا …', 'last year we planted …'], ['سَنُنَظِّمُ … لِكَيْ …', 'we will organise … so that …']],
    rubric: [
      ['task', 'تَطْلُبُ مَجَلَّةُ المَدْرَسَةِ أَفْكَارًا لِمَدْرَسَةٍ خَضْرَاءَ. اكْتُبْ رِسَالَةً (٨٠–٩٠ كَلِمَةً).', 'The magazine wants ideas for a greener school: write a letter (80–90 words).'],
      ['1', 'مَا أَكْبَرُ مُشْكِلَةٍ بِيئِيَّةٍ فِي مَدْرَسَتِكَ؟', 'The biggest environmental problem at your school'],
      ['2', 'مَاذَا يَنْبَغِي أَنْ يَفْعَلَ الطُّلَّابُ وَالمَدْرَسَةُ؟', 'What students and the school should do'],
      ['3', 'مَاذَا فَعَلَتْ مَدْرَسَتُكَ فِي المَاضِي؟', 'Something your school did in the past'],
      ['4', 'مَاذَا سَتُنَظِّمُ؟ وَلِمَاذَا؟', 'What you will organise, and why'],
    ],
    qwords: 'مَا (what) · يَنْبَغِي (should) · فَعَلَتْ (did — PAST) · سَتُنَظِّمُ (will organise — FUTURE) · لِمَاذَا (why)',
    frames: [
      ['start', 'إِلَى مُحَرِّرِ مَجَلَّةِ المَدْرَسَةِ،', 'To the editor of the school magazine,'],
      ['1', 'أَكْبَرُ مُشْكِلَةٍ فِي مَدْرَسَتِنَا هِيَ ______ .', 'The biggest problem in our school is …'],
      ['2', 'يَنْبَغِي أَنْ ______ ، وَيَجِبُ عَلَى الطُّلَّابِ أَنْ ______ .', 'We should …, and students must …'],
      ['3', 'فِي السَّنَةِ المَاضِيَةِ ______ .', 'Last year …'],
      ['4', 'سَنُنَظِّمُ ______ ، لِكَيْ ______ .', 'We will organise …, so that …'],
      ['end', 'مَعَ الشُّكْرِ، ______', 'With thanks, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“To the editor of the school magazine, I want to share my ideas about protecting the environment. The biggest problem in our school is paper and plastic: we throw away large amounts every day. In my opinion, we should put recycling bins in every classroom, and students must carry their own water bottles. Last year we planted twenty trees in the playground, and it was a wonderful experience. Next month we will organise an awareness campaign, so that everyone knows how important the environment is. With thanks, Adam.”',
      find: ['أَكْبَرُ مُشْكِلَةٍ', 'يَنْبَغِي أَنْ نَضَعَ', 'يَجِبُ عَلَى الطُّلَّابِ أَنْ', 'لِكَيْ يَعْرِفَ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Editor, I am writing because I believe our school can be a model in protecting the environment. We still throw away bags of paper and bottles every day that could be recycled. I therefore suggest colour-coded sorting bins be placed in every corridor, and the canteen must stop selling plastic cups. Our experience last year, when we planted twenty trees, proved students are keen for change. If the management supports our idea, next month we will launch a campaign called “A school without plastic”. Yours respectfully, Adam.”',
      find: ['أُؤْمِنُ بِأَنَّ', 'أَقْتَرِحُ أَنْ تُوضَعَ', 'يَجِبُ عَلَى المَقْصَفِ أَنْ', 'إِذَا دَعَمَتْ … فَسَنُطْلِقُ'],
    },
  },
  Q3: {
    a: { title: 'مَاذَا أَفْعَلُ لِأَحْمِيَ البِيئَةَ؟', en: 'What I do to protect the environment', bullets: 'فِي البَيْتِ · فِي المَدْرَسَةِ · حَمْلَةٌ أَوْ مَشْرُوعٌ شَارَكْتَ فِيهِ · رَأْيُكَ وَخِطَطُكَ', bulletsEn: 'At home · at school · a campaign or project you took part in · your opinion and plans' },
    b: { title: 'حِمَايَةُ البِيئَةِ: مَسْؤُولِيَّةُ الحُكُومَاتِ أَمِ الأَفْرَادِ؟', en: 'Protecting the environment: governments or individuals?', bullets: 'المُشْكِلَةُ · دَوْرُ الحُكُومَاتِ وَدَوْرُ الأَفْرَادِ · مِثَالٌ رَأَيْتَهُ · رَأْيُكَ', bulletsEn: 'The issue · the role of governments and of individuals · an example you saw · your opinion' },
    plan: [
      'Home — we recycle, I switch off …, li-kay uwaffira; present tense.',
      'School — the eco-club, yanbaghī an + subjunctive; a reason with li-anna.',
      'Past — a campaign or project: shāraktu, zaraʿnā, kāna al-ʿamalu mutʿiban; then the result (aṣbaḥat).',
      'Responsibility + future — yajibu ʿalā al-ḥukūma an …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'نُعِيدُ تَدْوِيرَ الوَرَقِ، لِكَيْ نُقَلِّلَ النُّفَايَاتِ.', en: 'present: we recycle paper to reduce waste.' },
      { ar: 'شَارَكْتُ فِي حَمْلَةٍ، وَزَرَعْنَا خَمْسِينَ شَجَرَةً.', en: 'past: I took part in a campaign, and we planted fifty trees.' },
      { ar: 'سَأُرَكِّبُ أَلْوَاحًا شَمْسِيَّةً عَلَى بَيْتِي.', en: 'future: I will install solar panels on my house.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'I love the environment and try to protect it every day: at home we recycle paper, plastic and glass; I switch off lights and turn off the tap when brushing my teeth to save water, and I take a cloth bag to the shops → at school we have an eco-club that meets every Wednesday; we should walk or cycle to school because cars pollute the air → last year I joined a tree-planting campaign: we planted fifty small trees in a big park; the work was tiring but I was very proud; now the trees are bigger and birds live in them → the government must help us too, and factories must reduce their fumes; in future I will put solar panels on my house and buy an electric car to help the environment.', find: ['لِكَيْ أُوَفِّرَ', 'يَنْبَغِي أَنْ نَذْهَبَ', 'كَانَ العَمَلُ مُتْعِبًا', 'يَجِبُ عَلَى الحُكُومَةِ أَنْ'], notes: 'Core model: li-kay + subjunctive, yanbaghī an, a past paragraph with kāna + accusative and aṣbaḥat, yajibu ʿalā … an, a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'We hear so much about environmental problems that we feel there is no hope, but I’ve learnt real solutions start at home: my family has sorted its waste for two years and we switch devices off before bed, which has noticeably cut our bill → at school I founded an eco-club with friends; our first project was collecting plastic bottles for a vertical garden on the playground wall; at first nobody cared, but we ran a competition between classes and collected over a thousand bottles in a month, and planted flowers and herbs in them → yet individual effort alone is not enough: governments must impose laws on factories and make public transport cheaper so people leave their cars → it is true the road is long, but every small step brings us closer; “if every school became a model like ours, a whole generation would grow up respecting and protecting the earth”.', find: ['مِمَّا خَفَّضَ', 'أَمَّا فِي المَدْرَسَةِ، فَقَدْ', 'يَجِبُ عَلَى الحُكُومَاتِ أَنْ', 'لَوْ أَصْبَحَتْ … لَنَشَأَ'], notes: 'Full-mark model: kathīran mā … ḥattā, mimmā, ammā … fa-qad, a problem → solution (fa-), wa-maʿa dhālika, idh, yajibu ʿalā … an … wa-an … li-kay, a concession and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'governments or individuals?', text: Q3B_FULL, en: 'When we talk about protecting the environment, each side blames the other: citizens blame governments and big companies, and governments ask citizens to change their habits, while the problem keeps getting worse day by day — so who is really responsible? → on one hand, governments have the power to change things quickly: one law banning plastic bags stops millions of bags; on the other, no law works if people aren’t convinced and don’t apply it in daily life → I saw a great example of cooperation visiting relatives in Rwanda, which banned plastic years ago: the streets are amazingly clean and all residents join a monthly clean-up day, even ministers; it amazed me that nobody complains — they see it as a national duty → so responsibility is shared: governments must make laws and we should change our behaviour; “if both sides work together, we will protect our planet for future generations”.', find: ['يُلْقِي كُلُّ طَرَفٍ', 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى', 'إِذَا لَمْ يَقْتَنِعْ', 'إِذَا عَمِلَ … فَسَنَحْمِي'], notes: 'Full-mark model for the Stretch title: a rhetorical question, a balanced view, idhā lam + jussive, a relative clause (allatī manaʿat), arā anna, yajibu ʿalā … wa-yanbaghī ʿalaynā, idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; the pledge sentence uses li-kay.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: yanbaghī an and yajibu ʿalā … an with subjunctive verbs.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: a balanced view, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
