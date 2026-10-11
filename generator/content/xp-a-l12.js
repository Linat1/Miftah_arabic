'use strict';
/* Exam-practice data · AT-A-L12 · Topic A Review and Assessment — a full Topic A mock: routine and time, food and eating out,
   health and the doctor, transport and travel, across all three time frames. Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { n: 12, short: 'Topic A Mock Exam', arShort: 'امْتِحَانٌ تَجْرِيبِيٌّ', fileTitle: 'Topic_A_Review_and_Assessment', title: 'Topic A Review — mock exam practice', ar: 'مُرَاجَعَةُ المِحْوَرِ الأَوَّلِ', icon: 'FaClipboardCheck', grammar: 'all of Topic A: time and routine, food, health, transport and travel; three time frames, opinions, comparisons, conditionals' };

const speak = {
  ...base,
  focus: 'A full Paper 3 mock in breakout rooms: four role plays and a mixed topic conversation covering the whole of Topic A — daily routine, food, health and travel.',
  words: [
    w(1, 'أَسْتَيْقِظُ', 'I wake up', [['he', 'يَسْتَيْقِظُ'], ['past', 'اسْتَيْقَظْتُ'], ['future', 'سَأَسْتَيْقِظُ']], { tag: 'L01 routine' }),
    w(2, 'عَادَةً · أَحْيَانًا · أَبَدًا', 'usually · sometimes · never', null, { tag: 'L03 frequency' }),
    w(3, 'أَطْلُبُ', 'I order', [['he', 'يَطْلُبُ'], ['past', 'طَلَبْتُ'], ['we', 'نَطْلُبُ']], { tag: 'L05 eating out' }),
    w(4, 'لَذِيذٌ', 'tasty', [['m.', 'لَذِيذٌ'], ['f.', 'لَذِيذَةٌ'], ['tastier', 'أَلَذُّ']], { tag: 'L04 food' }),
    w(5, 'يَجِبُ أَنْ …', 'you must … (+ verb in -a)', [['not', 'يَجِبُ أَلَّا …'], ['should', 'يَنْبَغِي أَنْ …']], { tag: 'L06 advice' }),
    w(6, 'يُؤْلِمُنِي …', '… hurts me', [['f.', 'تُؤْلِمُنِي'], ['I have', 'عِنْدِي …']], { tag: 'L07 health' }),
    w(7, 'نَصَحَنِي بِأَنْ …', 'he advised me to …', [['she', 'نَصَحَتْنِي'], ['I advise you', 'أَنْصَحُكَ']], { tag: 'L08 doctor' }),
    w(8, 'تَسْتَغْرِقُ الرِّحْلَةُ …', 'the journey takes …', [['past', 'اسْتَغْرَقَتْ'], ['future', 'سَتَسْتَغْرِقُ']], { tag: 'L09 transport' }),
    w(9, 'أَسْرَعُ مِنْ …', 'faster than …', [['cheaper', 'أَرْخَصُ'], ['better', 'أَفْضَلُ']], { tag: 'comparatives' }),
    w(10, 'سَافَرْنَا · نَزَلْنَا · زُرْنَا', 'we travelled · stayed · visited', null, { tag: 'L11 travel' }),
    w(11, 'إِذَا … سَـ', 'if … will … (real)', null, { tag: 'conditionals' }),
    w(12, 'لَوْ … لَـ', 'if … would … (unreal)', null, { tag: 'conditionals' }),
  ],
  words1: { eyebrow: 'Language bank · one key structure from each part of Topic A', title: 'Topic A in twelve structures', ar: 'المِحْوَرُ الأَوَّلُ فِي اثْنَتَيْ عَشْرَةَ بِنْيَةً', notes: 'LANGUAGE BANK (2 min) — a revision map: each card is tagged with the lesson it comes from. Ask students to say one sentence with each card before the breakout rooms.' },
  words2: { eyebrow: 'Language bank · structures that lift a mark', title: 'Advice, comparisons and “if”', ar: 'بِنْيَاتٌ تَرْفَعُ الدَّرَجَةَ', notes: 'LANGUAGE BANK (2 min) — the structures examiners look for at the top: yajibu an + verb in -a, comparatives (afʿal min), idhā … sa- and law … la-. Every student should use at least one today.' },
  checkCore: 'answered every task in a full sentence, with times and places',
  checkDevelop: 'used past, present and future, and gave reasons or advice',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a host family', title: 'Role play A — Your first evening with a host family', ar: 'مَعَ الأُسْرَةِ المُضِيفَةِ', you: 'an exchange student', them: 'the host parent',
      tasks: [
        { core: true, ex: 'أَهْلًا وَسَهْلًا! فِي أَيِّ سَاعَةٍ تَسْتَيْقِظُ عَادَةً؟', task: 'Say when you usually get up.', help: 'أَسْتَيْقِظُ عَادَةً فِي السَّاعَةِ …', model: 'أَسْتَيْقِظُ عَادَةً فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ.', modelEn: 'I usually get up at half past six.' },
        { core: true, ex: 'مَاذَا تَأْكُلُ فِي الفُطُورِ؟', task: 'Say what you eat for breakfast.', help: 'آكُلُ … وَأَشْرَبُ …', model: 'آكُلُ الخُبْزَ مَعَ الجُبْنِ، وَأَشْرَبُ الشَّايَ بِالحَلِيبِ.', modelEn: 'I eat bread with cheese and drink tea with milk.' },
        { core: true, ex: 'هَلْ هُنَاكَ طَعَامٌ لَا تَأْكُلُهُ؟', task: 'Say what you don’t eat and why.', help: 'لَا آكُلُ … لِأَنَّ …', model: 'لَا آكُلُ السَّمَكَ، لِأَنِّي لَا أُحِبُّ طَعْمَهُ.', modelEn: 'I don’t eat fish, because I don’t like the taste.' },
        { core: true, ex: 'كَيْفَ كَانَتْ رِحْلَتُكَ إِلَى هُنَا؟', task: 'Describe your journey (past).', help: 'سَافَرْتُ بِـ… وَاسْتَغْرَقَتِ الرِّحْلَةُ …', model: 'سَافَرْتُ بِالطَّائِرَةِ، وَاسْتَغْرَقَتِ الرِّحْلَةُ خَمْسَ سَاعَاتٍ، لٰكِنَّهَا كَانَتْ مُرِيحَةً.', modelEn: 'I flew, and the journey took five hours, but it was comfortable.' },
        { core: true, unexpected: true, ex: 'مَاذَا تُرِيدُ أَنْ تَفْعَلَ غَدًا؟', task: 'Answer the unexpected question.', help: 'أُرِيدُ أَنْ أَزُورَ …', model: 'أُرِيدُ أَنْ أَزُورَ وَسَطَ المَدِينَةِ وَالسُّوقَ القَدِيمَ.', modelEn: 'I would like to visit the city centre and the old market.' },
      ],
      girl: 'تَسْتَيْقِظِينَ · تَأْكُلِينَ · رِحْلَتُكِ · تُرِيدِينَ أَنْ تَفْعَلِي',
      notes: 'Core: one task from each part of Topic A — routine (L01), food (L04), a reason, travel (L09/L11), the future.',
    },
    {
      id: 'B', level: 'Core+', setting: 'in a restaurant', title: 'Role play B — Ordering for a friend who is unwell', ar: 'فِي المَطْعَمِ', you: 'a customer', them: 'the waiter',
      tasks: [
        { core: true, ex: 'مَسَاءُ الخَيْرِ، طَاوِلَةٌ لِكَمْ شَخْصًا؟', task: 'Ask for a table and say for how many.', help: 'طَاوِلَةٌ لِـ … مِنْ فَضْلِكَ', model: 'طَاوِلَةٌ لِشَخْصَيْنِ، مِنْ فَضْلِكَ، بِجَانِبِ النَّافِذَةِ.', modelEn: 'A table for two, please, by the window.' },
        { core: true, ex: 'مَاذَا تَطْلُبُ؟', task: 'Order a main dish and a drink.', help: 'أُرِيدُ … وَ…', model: 'أُرِيدُ دَجَاجًا مَشْوِيًّا مَعَ الأُرْزِ، وَعَصِيرَ بُرْتُقَالٍ.', modelEn: 'I would like grilled chicken with rice, and an orange juice.' },
        { ex: 'وَصَدِيقُكَ؟', task: 'Explain your friend has a stomach ache and ASK for something light.', help: 'بَطْنُهُ يُؤْلِمُهُ … هَلْ عِنْدَكُمْ …؟', model: 'صَدِيقِي يُؤْلِمُهُ بَطْنُهُ، فَهَلْ عِنْدَكُمْ شُورْبَةٌ خَفِيفَةٌ؟', modelEn: 'My friend has a stomach ache, so do you have a light soup?' },
        { ex: 'عِنْدَنَا شُورْبَةُ خُضَارٍ. هَلْ تُرِيدُ حَلْوَى بَعْدَ ذٰلِكَ؟', task: 'Decline politely and give a reason.', help: 'لَا، شُكْرًا، لِأَنَّ …', model: 'لَا، شُكْرًا، لِأَنِّي أُحَاوِلُ أَنْ آكُلَ سُكَّرًا أَقَلَّ.', modelEn: 'No thank you, because I am trying to eat less sugar.' },
        { unexpected: true, ex: 'هَلْ أَكَلْتُمْ عِنْدَنَا مِنْ قَبْلُ؟', task: 'Answer the unexpected question (past + opinion).', help: 'نَعَمْ، فِي … وَكَانَ …', model: 'نَعَمْ، فِي الشَّهْرِ المَاضِي، وَكَانَ الأَكْلُ لَذِيذًا جِدًّا.', modelEn: 'Yes, last month, and the food was delicious.' },
      ],
      girl: 'تَطْلُبِينَ · صَدِيقَتُكِ — the candidate says صَدِيقَتِي تُؤْلِمُهَا بَطْنُهَا… (or: يُؤْلِمُهَا بَطْنُهَا)',
      notes: 'Task 3 mixes L05 (restaurant) with L07 (body + suffix): yuʾlimuhu baṭnuhu = his stomach hurts him. Task 4: L06 healthy choices.',
    },
    {
      id: 'C', level: 'Develop', setting: 'at the pharmacy abroad', title: 'Role play C — Ill on holiday', ar: 'مَرِيضٌ فِي العُطْلَةِ', you: 'a tourist', them: 'the pharmacist',
      tasks: [
        { ex: 'مَرْحَبًا، كَيْفَ أُسَاعِدُكَ؟', task: 'Describe two symptoms and how long.', help: 'عِنْدِي … وَ… مُنْذُ …', model: 'عِنْدِي صُدَاعٌ وَحَرَارَةٌ مُنْذُ أَمْسِ.', modelEn: 'I have had a headache and a temperature since yesterday.' },
        { ex: 'مَاذَا فَعَلْتَ أَمْسِ؟', task: 'Explain a likely cause (past).', help: 'قَضَيْتُ … تَحْتَ الشَّمْسِ وَلَمْ …', model: 'قَضَيْتُ اليَوْمَ كُلَّهُ عَلَى الشَّاطِئِ تَحْتَ الشَّمْسِ، وَلَمْ أَشْرَبْ مَاءً كَافِيًا.', modelEn: 'I spent the whole day on the beach in the sun and didn’t drink enough water.' },
        { ex: 'خُذْ حَبَّةً كُلَّ سِتِّ سَاعَاتٍ، وَاشْرَبْ مَاءً كَثِيرًا.', task: 'Repeat the instructions to check.', help: 'إِذَنْ، حَبَّةً كُلَّ … وَ…', model: 'إِذَنْ، حَبَّةً كُلَّ سِتِّ سَاعَاتٍ، وَأَشْرَبُ مَاءً كَثِيرًا. هَلْ آخُذُهَا بَعْدَ الأَكْلِ؟', modelEn: 'So, one tablet every six hours, and I drink lots of water. Do I take it after food?' },
        { ex: 'نَعَمْ. وَأَنْصَحُكَ بِأَلَّا تَخْرُجَ فِي الظُّهْرِ.', task: 'Say how you will change your plans (future).', help: 'سَأَبْقَى … وَسَأَزُورُ … بَدَلًا مِنْ …', model: 'حَسَنًا، سَأَبْقَى فِي الفُنْدُقِ فِي الظُّهْرِ، وَسَأَزُورُ المُتْحَفَ بَدَلًا مِنَ الشَّاطِئِ.', modelEn: 'OK, I will stay in the hotel at midday, and I’ll visit the museum instead of the beach.' },
        { unexpected: true, ex: 'مِنْ أَيْنَ أَنْتَ؟ وَهَلْ تُعْجِبُكَ مَدِينَتُنَا؟', task: 'Answer the unexpected question (opinion + comparison).', help: 'أَنَا مِنْ … مَدِينَتُكُمْ أَ… مِنْ …', model: 'أَنَا مِنْ مَانْشِسْتَرَ، وَمَدِينَتُكُمْ أَجْمَلُ وَأَدْفَأُ مِنْ مَدِينَتِي بِكَثِيرٍ!', modelEn: 'I am from Manchester, and your city is much prettier and warmer than mine!' },
      ],
      girl: 'أُسَاعِدُكِ · فَعَلْتِ · خُذِي · اشْرَبِي · أَنْصَحُكِ بِأَلَّا تَخْرُجِي · تُعْجِبُكِ',
      notes: 'Develop: L07 symptoms + mundhu, a past cause with lam + jussive, L08 checking instructions, L06 advice (allā), L11 travel plans with badalan min, a comparative.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a school debate', title: 'Role play D — Is modern life healthy?', ar: 'هَلْ حَيَاتُنَا اليَوْمَ صِحِّيَّةٌ؟', you: 'a student speaker', them: 'the debate chair',
      tasks: [
        { ex: 'هَلْ يَعِيشُ الشَّبَابُ اليَوْمَ حَيَاةً صِحِّيَّةً؟', task: 'Give your view with two reasons.', help: 'لَا أَظُنُّ ذٰلِكَ، لِأَنَّ … وَلِأَنَّ …', model: 'لَا أَظُنُّ ذٰلِكَ، لِأَنَّهُمْ يَنَامُونَ قَلِيلًا، وَلِأَنَّهُمْ يَأْكُلُونَ الوَجَبَاتِ السَّرِيعَةَ كَثِيرًا.', modelEn: 'I don’t think so, because they sleep little and eat fast food often.' },
        { ex: 'وَكَيْفَ كَانَتِ الحَيَاةُ فِي المَاضِي؟', task: 'Compare past and present.', help: 'كَانَ النَّاسُ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَ النَّاسُ يَمْشُونَ أَكْثَرَ وَيَطْبُخُونَ فِي البَيْتِ، أَمَّا اليَوْمَ فَنَرْكَبُ السَّيَّارَاتِ وَنَطْلُبُ الأَكْلَ بِالهَاتِفِ.', modelEn: 'People used to walk more and cook at home; today we drive and order food by phone.' },
        { ex: 'أَعْطِنَا مِثَالًا مِنْ حَيَاتِكَ.', task: 'Give a personal example of a change you made (past).', help: 'كُنْتُ … فَقَرَّرْتُ أَنْ …', model: 'كُنْتُ أَذْهَبُ إِلَى المَدْرَسَةِ بِالسَّيَّارَةِ، فَقَرَّرْتُ أَنْ أَمْشِيَ، وَالآنَ أَشْعُرُ بِنَشَاطٍ أَكْبَرَ.', modelEn: 'I used to go to school by car, so I decided to walk, and now I feel more energetic.' },
        { ex: 'لٰكِنَّ التِّكْنُولُوجْيَا تُسَاعِدُنَا أَيْضًا، أَلَيْسَ كَذٰلِكَ؟', task: 'Concede and keep your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ التَّطْبِيقَاتِ تُذَكِّرُنَا بِشُرْبِ المَاءِ، غَيْرَ أَنَّهَا لَا تَمْشِي عَنَّا!', modelEn: 'It is true that apps remind us to drink water, but they can’t walk for us!' },
        { unexpected: true, ex: 'لَوْ كَانَ لَكَ أَنْ تُغَيِّرَ شَيْئًا وَاحِدًا فِي مَدِينَتِكَ، فَمَاذَا يَكُونُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ كَانَ لِي …، لَـ…', model: 'لَوْ كَانَ لِي ذٰلِكَ، لَبَنَيْتُ مَلَاعِبَ مَجَّانِيَّةً قُرْبَ كُلِّ مَدْرَسَةٍ، وَلَمَنَعْتُ السَّيَّارَاتِ أَمَامَهَا صَبَاحًا.', modelEn: 'If I could, I would build free sports pitches near every school, and ban cars outside them in the morning.' },
      ],
      girl: 'حَيَاتِكِ · لَكِ أَنْ تُغَيِّرِي · مَدِينَتِكِ',
      notes: 'Stretch: the whole topic in one debate — reasons, kāna + present vs ammā … fa-, kuntu … fa-qarrartu an, a concession, law … la-.',
      modelFoot: 'Stretch: two reasons, ammā … fa-, kuntu + present, ṣaḥīḥun anna … ghayra anna and law … la- — all of Topic A.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'حَيَاتِي اليَوْمِيَّةُ', aim: 'one full sentence per question',
      qs: [
        { q: 'صِفْ يَوْمًا عَادِيًّا فِي حَيَاتِكَ.', en: 'Describe a normal day in your life.', start: 'أَسْتَيْقِظُ فِي … ثُمَّ …', model: 'أَسْتَيْقِظُ فِي السَّابِعَةِ، ثُمَّ أَذْهَبُ إِلَى المَدْرَسَةِ، وَأَرْجِعُ فِي الثَّالِثَةِ.', modelEn: 'I get up at seven, then go to school, and come back at three.' },
        { q: 'مَا طَعَامُكَ المُفَضَّلُ؟', en: 'What is your favourite food?', start: 'طَعَامِي المُفَضَّلُ …', model: 'طَعَامِي المُفَضَّلُ هُوَ المَقْلُوبَةُ الَّتِي تَطْبُخُهَا جَدَّتِي.', modelEn: 'My favourite food is the maqluba my grandmother cooks.' },
        { q: 'كَمْ مَرَّةً تُمَارِسُ الرِّيَاضَةَ؟', en: 'How often do you exercise?', start: 'أُمَارِسُ الرِّيَاضَةَ … مَرَّاتٍ', model: 'أُمَارِسُ الرِّيَاضَةَ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ.', modelEn: 'I exercise three times a week.' },
        { q: 'كَيْفَ تَذْهَبُ إِلَى المَدْرَسَةِ؟', en: 'How do you get to school?', start: 'أَذْهَبُ بِالحَافِلَةِ / أَمْشِي …', model: 'أَذْهَبُ بِالحَافِلَةِ، وَتَسْتَغْرِقُ الرِّحْلَةُ عِشْرِينَ دَقِيقَةً.', modelEn: 'I go by bus, and the journey takes twenty minutes.' },
        { q: 'أَيْنَ قَضَيْتَ عُطْلَتَكَ الأَخِيرَةَ؟', en: 'Where did you spend your last holiday?', start: 'قَضَيْتُ عُطْلَتِي فِي …', model: 'قَضَيْتُ عُطْلَتِي فِي بَيْتِ جَدِّي فِي القَرْيَةِ.', modelEn: 'I spent my holiday at my grandfather’s house in the village.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a time, a number or a detail = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'عَادَاتِي وَصِحَّتِي وَرِحْلَاتِي', aim: 'two or three sentences, mixing time frames',
      qs: [
        { q: 'مَاذَا فَعَلْتَ فِي نِهَايَةِ الأُسْبُوعِ المَاضِي؟', en: 'What did you do last weekend?', start: 'يَوْمَ السَّبْتِ … وَيَوْمَ الأَحَدِ …', model: 'يَوْمَ السَّبْتِ لَعِبْتُ مُبَارَاةً، وَيَوْمَ الأَحَدِ تَغَدَّيْنَا فِي مَطْعَمٍ لُبْنَانِيٍّ، وَكَانَ الأَكْلُ لَذِيذًا جِدًّا.', modelEn: 'On Saturday I played a match, and on Sunday we had lunch in a Lebanese restaurant; the food was delicious.' },
        { q: 'هَلْ أَكْلُكَ صِحِّيٌّ؟ لِمَاذَا؟', en: 'Is your diet healthy? Why?', start: 'إِلَى حَدٍّ مَا، لِأَنِّي … لٰكِنِّي …', model: 'إِلَى حَدٍّ مَا، لِأَنِّي آكُلُ الخُضَارَ كُلَّ يَوْمٍ، لٰكِنِّي أَشْرَبُ المَشْرُوبَاتِ الغَازِيَّةَ أَحْيَانًا.', modelEn: 'To some extent, because I eat vegetables every day, but I sometimes drink fizzy drinks.' },
        { q: 'مَا نَصِيحَتُكَ لِطَالِبٍ مُتْعَبٍ دَائِمًا؟', en: 'What advice for a student who is always tired?', start: 'يَجِبُ أَنْ … وَأَلَّا …', model: 'يَجِبُ أَنْ يَنَامَ ثَمَانِيَ سَاعَاتٍ، وَأَلَّا يَسْتَعْمِلَ الهَاتِفَ قَبْلَ النَّوْمِ.', modelEn: 'He must sleep eight hours and not use his phone before bed.' },
        { q: 'قَارِنْ بَيْنَ الحَافِلَةِ وَالدَّرَّاجَةِ.', en: 'Compare the bus and the bike.', start: 'الحَافِلَةُ أَ… مِنْ … لٰكِنَّ الدَّرَّاجَةَ …', model: 'الحَافِلَةُ أَسْرَعُ مِنَ الدَّرَّاجَةِ فِي المَطَرِ، لٰكِنَّ الدَّرَّاجَةَ أَرْخَصُ وَأَفْضَلُ لِلصِّحَّةِ.', modelEn: 'The bus is faster than the bike in the rain, but the bike is cheaper and healthier.' },
        { q: 'مَا خُطَطُكَ لِلصَّيْفِ القَادِمِ؟', en: 'What are your plans for next summer?', start: 'إِذَا … سَـ…', model: 'إِذَا نَجَحْتُ فِي الامْتِحَانَاتِ، سَنُسَافِرُ إِلَى المَغْرِبِ، وَسَأَتَعَلَّمُ رُكُوبَ الأَمْوَاجِ.', modelEn: 'If I pass my exams, we will travel to Morocco, and I will learn to surf.' },
      ],
      foot: 'Develop: two or three sentences — past, present and future, a comparison, advice and an idhā sentence.',
      modelFoot: 'Three time frames + advice + a comparison + idhā = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الحَيَاةُ العَصْرِيَّةُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلْ تَغَيَّرَ رُوتِينُ الشَّبَابِ اليَوْمِيُّ عَنِ المَاضِي؟', en: 'Has young people’s routine changed from the past?', start: 'كَانَ الشَّبَابُ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَ الشَّبَابُ يَنَامُونَ مُبَكِّرًا وَيَلْعَبُونَ فِي الخَارِجِ، أَمَّا اليَوْمَ فَيَسْهَرُونَ عَلَى الشَّاشَاتِ حَتَّى مُنْتَصَفِ اللَّيْلِ.', modelEn: 'Young people used to sleep early and play outside; today they stay up on screens until midnight.' },
        { q: 'مَا أَهَمُّ شَيْءٍ لِحَيَاةٍ صِحِّيَّةٍ فِي رَأْيِكَ؟', en: 'What matters most for a healthy life?', start: 'أَعْتَقِدُ أَنَّ أَهَمَّ شَيْءٍ … لِأَنَّ …', model: 'أَعْتَقِدُ أَنَّ أَهَمَّ شَيْءٍ هُوَ التَّوَازُنُ: نَوْمٌ كَافٍ، وَأَكْلٌ مُتَنَوِّعٌ، وَحَرَكَةٌ يَوْمِيَّةٌ، لِأَنَّ الجِسْمَ يَحْتَاجُ إِلَيْهَا كُلِّهَا.', modelEn: 'I think the most important thing is balance: enough sleep, varied food and daily movement, because the body needs them all.' },
        { q: 'هَلِ السَّفَرُ ضَرُورِيٌّ أَمْ رَفَاهِيَةٌ؟', en: 'Is travel a necessity or a luxury?', start: 'صَحِيحٌ أَنَّهُ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهُ غَالٍ أَحْيَانًا، غَيْرَ أَنَّهُ يُعَلِّمُنَا الصَّبْرَ وَاحْتِرَامَ الآخَرِينَ، وَهٰذَا ضَرُورِيٌّ لِكُلِّ إِنْسَانٍ.', modelEn: 'It is true it is sometimes expensive, but it teaches us patience and respect for others, which everyone needs.' },
        { q: 'مَا الدَّرْسُ الَّذِي تَعَلَّمْتَهُ مِنْ هٰذَا المِحْوَرِ؟', en: 'What lesson have you learned from this topic?', start: 'تَعَلَّمْتُ أَنَّ … وَلِذٰلِكَ سَـ…', model: 'تَعَلَّمْتُ أَنَّ عَادَاتِنَا الصَّغِيرَةَ تَصْنَعُ صِحَّتَنَا، وَلِذٰلِكَ سَأَمْشِي أَكْثَرَ وَأَنَامُ مُبَكِّرًا.', modelEn: 'I have learned that our small habits make our health, so I will walk more and sleep earlier.' },
        { q: 'لَوْ كَتَبْتَ يَوْمًا مِثَالِيًّا لِنَفْسِكَ، كَيْفَ يَكُونُ؟', en: 'If you wrote yourself a perfect day, what would it be like?', start: 'لَوْ كَتَبْتُ …، لَبَدَأْتُهُ بِـ… ثُمَّ …', model: 'لَوْ كَتَبْتُ يَوْمًا مِثَالِيًّا، لَبَدَأْتُهُ بِالسِّبَاحَةِ، ثُمَّ لَتَغَدَّيْتُ مَعَ أُسْرَتِي فِي مَطْعَمٍ عَلَى البَحْرِ، وَلَخَتَمْتُهُ بِكِتَابٍ جَيِّدٍ.', modelEn: 'If I wrote a perfect day, I would start it with a swim, then have lunch with my family by the sea, and end it with a good book.' },
      ],
      foot: 'Stretch: kāna + present vs ammā … fa-, a superlative, a concession, taʿallamtu anna … and law … la-.',
      modelFoot: 'Stretch: past vs present, ahammu shayʾ, ṣaḥīḥun anna … ghayra anna, li-dhālika sa-, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered every role-play task in a full sentence.' },
    { route: 'core', text: 'I gave times, food, transport and places correctly.' },
    { route: 'develop', text: 'I used past, present AND future in one conversation.' },
    { route: 'develop', text: 'I gave advice (yajibu an) or made a comparison (afʿal min).' },
    { route: 'stretch', text: 'I used ammā … fa-, a concession and law … la-.' },
  ],
};
// Whole-word helps (no prefixes on their own).
speak.words[10] = w(11, 'إِذَا نَجَحْتُ، سَأُسَافِرُ', 'if I pass, I will travel (real)', null, { tag: 'conditionals' });
speak.words[11] = w(12, 'لَوْ كَانَ عِنْدِي وَقْتٌ، لَسَافَرْتُ', 'if I had time, I would travel (unreal)', null, { tag: 'conditionals' });
speak.RP[0].tasks[3].help = 'سَافَرْتُ بِالطَّائِرَةِ … وَاسْتَغْرَقَتِ الرِّحْلَةُ …';
speak.RP[1].tasks[0].help = 'طَاوِلَةٌ لِشَخْصَيْنِ، مِنْ فَضْلِكَ';
speak.RP[2].tasks[4].help = 'أَنَا مِنْ … مَدِينَتُكُمْ أَجْمَلُ مِنْ …';
speak.RP[3].tasks[1].help = 'كَانَ النَّاسُ … أَمَّا اليَوْمَ فَنَرْكَبُ …';
speak.RP[3].tasks[4].help = 'لَوْ كَانَ لِي ذٰلِكَ، لَبَنَيْتُ …';
speak.CONV[1].qs[3].start = 'الحَافِلَةُ أَسْرَعُ مِنْ … لٰكِنَّ الدَّرَّاجَةَ …';
speak.CONV[1].qs[4].start = 'إِذَا نَجَحْتُ … سَنُسَافِرُ …';
speak.CONV[2].qs[0].start = 'كَانَ الشَّبَابُ … أَمَّا اليَوْمَ فَيَسْهَرُونَ …';
speak.CONV[2].qs[3].start = 'تَعَلَّمْتُ أَنَّ … وَلِذٰلِكَ سَأَمْشِي …';
speak.CONV[2].qs[4].start = 'لَوْ كَتَبْتُ …، لَبَدَأْتُهُ … ثُمَّ …';

const Q2_CORE = `عَزِيزَتِي السَّيِّدَةَ لَيْلَى،
أَنَا هَالَةُ، الطَّالِبَةُ الَّتِي سَتَسْكُنُ عِنْدَكُمْ فِي الصَّيْفِ. أَسْتَيْقِظُ عَادَةً فِي السَّاعَةِ السَّابِعَةِ، وَأَنَامُ فِي العَاشِرَةِ. أُحِبُّ الدَّجَاجَ وَالأُرْزَ وَالسَّلَطَةَ، لٰكِنِّي لَا آكُلُ السَّمَكَ. عِنْدِي حَسَاسِيَّةٌ مِنَ الفُولِ السُّودَانِيِّ. أَمْسِ اشْتَرَيْتُ تَذْكِرَةَ الطَّائِرَةِ، وَسَأَصِلُ يَوْمَ السَّبْتِ فِي السَّاعَةِ الرَّابِعَةِ. هَلْ يُمْكِنُ أَنْ تُخْبِرِينِي كَيْفَ أَصِلُ إِلَى بَيْتِكُمْ مِنَ المَطَارِ؟
مَعَ الشُّكْرِ،
هَالَةُ`;
const Q2_FULL = `عَزِيزَتِي السَّيِّدَةَ لَيْلَى،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَأَنَا هَالَةُ، الطَّالِبَةُ الَّتِي سَتَنْزِلُ عِنْدَكُمْ فِي بَرْنَامَجِ التَّبَادُلِ. أَسْتَيْقِظُ عَادَةً فِي السَّابِعَةِ، وَأُحِبُّ أَنْ أَمْشِيَ قَلِيلًا قَبْلَ الفُطُورِ، وَأَنَامُ عَادَةً فِي العَاشِرَةِ وَالنِّصْفِ. آكُلُ كُلَّ شَيْءٍ تَقْرِيبًا، وَأُحِبُّ الأَطْبَاقَ العَرَبِيَّةَ خُصُوصًا، غَيْرَ أَنَّ عِنْدِي حَسَاسِيَّةً شَدِيدَةً مِنَ الفُولِ السُّودَانِيِّ، فَأَرْجُو أَنْ تَنْتَبِهُوا لِذٰلِكَ. أَمْسِ حَجَزْتُ رِحْلَتِي؛ سَأَصِلُ يَوْمَ السَّبْتِ بَعْدَ الظُّهْرِ، وَإِذَا تَأَخَّرَتِ الطَّائِرَةُ، سَأَتَّصِلُ بِكُمْ فَوْرًا، وَسَأُرْسِلُ لَكُمْ رِسَالَةً عِنْدَ وُصُولِي. هَلْ مِنَ الأَفْضَلِ أَنْ آخُذَ القِطَارَ أَمْ سَيَّارَةَ أُجْرَةٍ إِلَى بَيْتِكُمْ؟
مَعَ خَالِصِ الشُّكْرِ،
هَالَةُ`;
const Q3A_CORE = `يَوْمِي المِثَالِيُّ يَكُونُ يَوْمَ الجُمُعَةِ. أَسْتَيْقِظُ فِي السَّاعَةِ الثَّامِنَةِ، لِأَنِّي لَا أَذْهَبُ إِلَى المَدْرَسَةِ. آكُلُ فُطُورًا كَبِيرًا مَعَ أُسْرَتِي: الفُولَ وَالبَيْضَ وَالخُبْزَ، وَأَشْرَبُ الشَّايَ. نَتَحَدَّثُ كَثِيرًا، لِأَنَّنَا لَا نَجْلِسُ مَعًا فِي الصَّبَاحِ أَيَّامَ المَدْرَسَةِ.
بَعْدَ ذٰلِكَ أَذْهَبُ إِلَى النَّادِي بِالدَّرَّاجَةِ، وَأَلْعَبُ كُرَةَ القَدَمِ سَاعَتَيْنِ. الرِّيَاضَةُ مُهِمَّةٌ لِلصِّحَّةِ، وَهِيَ تَجْعَلُنِي سَعِيدًا. فِي الظُّهْرِ نَأْكُلُ الغَدَاءَ فِي بَيْتِ جَدِّي، وَتَطْبُخُ جَدَّتِي المَقْلُوبَةَ اللَّذِيذَةَ.
فِي الجُمُعَةِ المَاضِيَةِ كَانَ يَوْمِي مُخْتَلِفًا. كُنْتُ مَرِيضًا، وَكَانَ عِنْدِي صُدَاعٌ وَحُمَّى. ذَهَبْتُ إِلَى الطَّبِيبِ، وَقَالَ: «يَجِبُ أَنْ تَرْتَاحَ». بَقِيتُ فِي السَّرِيرِ يَوْمَيْنِ، وَشَاهَدْتُ التِّلْفَازَ، وَشَرِبْتُ الشَّايَ بِالعَسَلِ. كَانَ يَوْمًا مُمِلًّا جِدًّا!
فِي رَأْيِي، اليَوْمُ المِثَالِيُّ فِيهِ أُسْرَةٌ وَرِيَاضَةٌ وَأَكْلٌ لَذِيذٌ. فِي المُسْتَقْبَلِ، إِذَا سَافَرْتُ إِلَى بَلَدٍ آخَرَ، سَأَزُورُ مَطَاعِمَهُ وَمَتَاحِفَهُ فِي يَوْمٍ وَاحِدٍ!`;
const Q3A_FULL = `لَوْ سَأَلَنِي أَحَدٌ عَنْ يَوْمِي المِثَالِيِّ، لَقُلْتُ إِنَّهُ يَوْمٌ بَسِيطٌ، لٰكِنَّهُ مُتَوَازِنٌ. أَسْتَيْقِظُ فِيهِ مَعَ شُرُوقِ الشَّمْسِ دُونَ مُنَبِّهٍ، وَأَمْشِي نِصْفَ سَاعَةٍ فِي الحَدِيقَةِ، ثُمَّ أَتَنَاوَلُ فُطُورًا صِحِّيًّا مِنَ الشُّوفَانِ وَالفَوَاكِهِ مَعَ أُسْرَتِي.
فِي الظُّهْرِ أَرْكَبُ القِطَارَ إِلَى وَسَطِ المَدِينَةِ، لِأَنَّهُ أَسْرَعُ مِنَ الحَافِلَةِ وَأَقَلُّ تَلْوِيثًا مِنَ السَّيَّارَةِ، وَأَلْتَقِي بِأَصْدِقَائِي فِي مَقْهًى صَغِيرٍ يُقَدِّمُ أَلَذَّ عَصِيرٍ فِي المَدِينَةِ. أَمَّا المَسَاءُ فَأَقْضِيهِ فِي قِرَاءَةِ كِتَابٍ جَيِّدٍ، ثُمَّ أَنَامُ فِي العَاشِرَةِ لِكَيْ أَسْتَيْقِظَ نَشِيطًا.
فِي الحَقِيقَةِ، لَمْ تَكُنْ أَيَّامِي هٰكَذَا دَائِمًا؛ فَفِي السَّنَةِ المَاضِيَةِ كُنْتُ أَسْهَرُ عَلَى الهَاتِفِ، وَآكُلُ الوَجَبَاتِ السَّرِيعَةَ، حَتَّى نَصَحَنِي الطَّبِيبُ بِأَنْ أُغَيِّرَ عَادَاتِي بَعْدَ صُدَاعٍ اسْتَمَرَّ أُسْبُوعَيْنِ، فَبَدَأْتُ أُغَيِّرُهَا خُطْوَةً خُطْوَةً.
صَحِيحٌ أَنَّ هٰذَا اليَوْمَ لَا يَتَكَرَّرُ كُلَّ أُسْبُوعٍ، غَيْرَ أَنِّي أُحَاوِلُ أَنْ أَعِيشَ جُزْءًا مِنْهُ كُلَّ يَوْمٍ. وَإِذَا نَجَحْتُ فِي امْتِحَانَاتِي، سَأُكَافِئُ نَفْسِي بِيَوْمٍ مِثَالِيٍّ كَامِلٍ عَلَى شَاطِئِ البَحْرِ.`;
const Q3B_FULL = `يَعْتَقِدُ كَثِيرٌ مِنَ النَّاسِ أَنَّ الحَيَاةَ العَصْرِيَّةَ أَسْهَلُ مِنْ حَيَاةِ أَجْدَادِنَا، وَهٰذَا صَحِيحٌ إِلَى حَدٍّ كَبِيرٍ؛ فَالمُوَاصَلَاتُ أَسْرَعُ، وَالطِّبُّ أَفْضَلُ، وَالطَّعَامُ مُتَوَفِّرٌ فِي كُلِّ وَقْتٍ، وَنَسْتَطِيعُ أَنْ نُسَافِرَ إِلَى أَيِّ بَلَدٍ فِي سَاعَاتٍ قَلِيلَةٍ. غَيْرَ أَنَّ السُّهُولَةَ لَا تَعْنِي دَائِمًا الصِّحَّةَ.
فِي المَاضِي كَانَ النَّاسُ يَمْشُونَ كَثِيرًا، وَيَأْكُلُونَ مَا يَزْرَعُونَهُ، وَيَنَامُونَ بَعْدَ المَغْرِبِ بِقَلِيلٍ، أَمَّا اليَوْمَ فَنَجْلِسُ سَاعَاتٍ أَمَامَ الشَّاشَاتِ، وَنَطْلُبُ الوَجَبَاتِ السَّرِيعَةَ بِضَغْطَةِ زِرٍّ، وَنَسْهَرُ حَتَّى مُنْتَصَفِ اللَّيْلِ.
لَاحَظْتُ ذٰلِكَ فِي أُسْرَتِي؛ فَقَبْلَ سَنَتَيْنِ كَانَ أَبِي يَذْهَبُ إِلَى عَمَلِهِ بِالسَّيَّارَةِ، وَيَشْكُو مِنْ أَلَمٍ فِي ظَهْرِهِ، فَنَصَحَهُ الطَّبِيبُ بِأَنْ يَمْشِيَ. فَصَارَ يَمْشِي إِلَى المَحَطَّةِ كُلَّ صَبَاحٍ، وَخَفَّ الأَلَمُ خِلَالَ شَهْرٍ، وَأَصْبَحَ يَنَامُ أَفْضَلَ مِنْ قَبْلُ.
فِي رَأْيِي، لَا يَجِبُ أَنْ نَرْفُضَ الحَيَاةَ العَصْرِيَّةَ، بَلْ أَنْ نَسْتَعْمِلَهَا بِحِكْمَةٍ. وَلَوْ أَخَذْنَا مِنَ المَاضِي عَادَاتِهِ الصِّحِّيَّةَ، وَمِنَ الحَاضِرِ تِكْنُولُوجْيَاهُ المُفِيدَةَ، لَعِشْنَا أَفْضَلَ حَيَاةٍ مُمْكِنَةٍ.`;

const write = {
  ...base,
  focus: 'A full Paper 4 mock on the whole of Topic A: an exchange-programme form, an email to a host family, and an extended piece on your ideal day or on modern life and health.',
  lift: [
    { ar: 'أَسْتَيْقِظُ عَادَةً فِي السَّابِعَةِ', en: 'I usually get up at seven' },
    { ar: 'نَصَحَنِي الطَّبِيبُ بِأَنْ أُغَيِّرَ عَادَاتِي', en: 'the doctor advised me to change my habits' },
    { ar: 'إِذَا نَجَحْتُ، سَأُكَافِئُ نَفْسِي …', en: 'if I pass, I will reward myself …' },
  ],
  checkTip: 'Check every Topic A structure you use: times (fī s-sābiʿa), frequency, an + verb in -a after advice, body + suffix (yuʾlimunī), bi- with transport, comparatives, idhā … sa- and law … la-.',
  FORM: {
    title: 'Exchange programme registration', ar: 'اسْتِمَارَةُ بَرْنَامَجِ التَّبَادُلِ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالعُمْرُ', en: 'Name and age', model: 'هَالَةُ سَعِيدٍ، سِتَّ عَشْرَةَ سَنَةً', modelEn: 'Hala Said, sixteen' },
      { core: true, ar: 'وَقْتُ الاسْتِيقَاظِ عَادَةً', en: 'Usual wake-up time', model: 'السَّابِعَةُ صَبَاحًا', modelEn: '7 a.m.' },
      { core: true, ar: 'طَعَامٌ تُحِبُّهُ', en: 'A food you like', model: 'المَقْلُوبَةُ', modelEn: 'maqluba' },
      { core: true, ar: 'طَعَامٌ لَا تَأْكُلُهُ', en: 'A food you don’t eat', model: 'الفُولُ السُّودَانِيُّ', modelEn: 'peanuts' },
      { core: true, ar: 'مُشْكِلَةٌ صِحِّيَّةٌ', en: 'A health problem', model: 'حَسَاسِيَّةٌ مِنَ الفُولِ السُّودَانِيِّ', modelEn: 'peanut allergy' },
      { core: true, ar: 'رِيَاضَتُكَ وَكَمْ مَرَّةً', en: 'Your sport and how often', model: 'السِّبَاحَةُ، مَرَّتَيْنِ فِي الأُسْبُوعِ', modelEn: 'swimming, twice a week' },
      { ar: 'كَيْفَ سَتُسَافِرُ؟', en: 'How you will travel', model: 'بِالطَّائِرَةِ ثُمَّ بِالقِطَارِ', modelEn: 'by plane, then by train' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدُ أَنْ تُشَارِكَ؟', en: 'ONE sentence: why you want to take part', model: 'أُرِيدُ أَنْ أُشَارِكَ لِكَيْ أُحَسِّنَ لُغَتِي العَرَبِيَّةَ وَأَتَعَرَّفَ إِلَى ثَقَافَةٍ جَدِيدَةٍ.', modelEn: 'I want to take part to improve my Arabic and get to know a new culture.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence (likay + verb in -a).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Every box recycles a different Topic A lesson: L01, L04, L07, L06, L09.',
  },
  Q2: {
    short: 'an email to your host family', title: 'Question 2: an email to your host family', ar: 'رِسَالَةٌ إِلَى الأُسْرَةِ المُضِيفَةِ',
    task: 'You will stay with an Arabic-speaking host family. Write an email in Arabic of about 80–90 words. You must include: • your daily routine • the food you like and don’t eat, and any health problem • what you did yesterday to prepare for the trip, and when you will arrive • one question about the journey to their house.',
    checklist: ['All four bullet points, in order.', 'A polite greeting and closing.', 'Times and frequency words.', 'A past AND a future sentence.', 'A polite question at the end.'],
    phrases: [['أَسْتَيْقِظُ عَادَةً فِي …', 'I usually get up at …'], ['عِنْدِي حَسَاسِيَّةٌ مِنْ …', 'I am allergic to …'], ['سَأَصِلُ يَوْمَ … فِي …', 'I will arrive on … at …'], ['هَلْ يُمْكِنُ أَنْ تُخْبِرِينِي …؟', 'could you tell me …?']],
    rubric: [
      ['task', 'سَتَسْكُنِينَ مَعَ أُسْرَةٍ عَرَبِيَّةٍ. اكْتُبِي لَهَا رِسَالَةً (٨٠–٩٠ كَلِمَةً).', 'You will stay with an Arab family: write to them (80–90 words).'],
      ['1', 'صِفِي رُوتِينَكِ اليَوْمِيَّ.', 'Describe your daily routine'],
      ['2', 'مَا الطَّعَامُ الَّذِي تُحِبِّينَهُ وَلَا تَأْكُلِينَهُ؟ وَهَلْ عِنْدَكِ مُشْكِلَةٌ صِحِّيَّةٌ؟', 'Food you like / don’t eat; any health problem'],
      ['3', 'مَاذَا فَعَلْتِ أَمْسِ لِتَسْتَعِدِّي؟ وَمَتَى سَتَصِلِينَ؟', 'What you did yesterday; when you will arrive'],
      ['4', 'اسْأَلِي سُؤَالًا عَنِ الطَّرِيقِ إِلَى البَيْتِ.', 'Ask one question about the journey'],
    ],
    qwords: 'صِفِي (describe) · مَا (what) · هَلْ (yes/no) · مَاذَا (what) · مَتَى (when) · اسْأَلِي (ask) — two instructions and four questions',
    frames: [
      ['start', 'عَزِيزَتِي السَّيِّدَةَ ______ ، أَنَا ______ .', 'Dear Mrs …, I am …'],
      ['1', 'أَسْتَيْقِظُ عَادَةً فِي ______ ، وَأَنَامُ فِي ______ .', 'I usually get up at … and go to bed at …'],
      ['2', 'أُحِبُّ ______ ، لٰكِنِّي لَا آكُلُ ______ . عِنْدِي ______ .', 'I like … but I don’t eat … I have …'],
      ['3', 'أَمْسِ ______ . سَأَصِلُ يَوْمَ ______ فِي ______ .', 'Yesterday I … I will arrive on … at …'],
      ['4', 'هَلْ يُمْكِنُ أَنْ تُخْبِرِينِي ______ ؟', 'Could you tell me …?'],
      ['end', 'مَعَ الشُّكْرِ، ______', 'With thanks, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Dear Mrs Layla, I am Hala, the student who will live with you in the summer. I usually get up at seven and go to bed at ten. I like chicken, rice and salad, but I don’t eat fish. I have a peanut allergy. Yesterday I bought my plane ticket, and I will arrive on Saturday at four o’clock. Could you tell me how to get to your house from the airport? With thanks, Hala.”',
      find: ['أَسْتَيْقِظُ عَادَةً', 'لٰكِنِّي لَا آكُلُ', 'عِنْدِي حَسَاسِيَّةٌ', 'سَأَصِلُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Mrs Layla, greetings. I am Hala, the student who will stay with you on the exchange programme. I usually get up at seven and like to walk a little before breakfast, and I usually go to bed at half past ten. I eat almost everything, and I especially love Arabic dishes, but I have a severe peanut allergy, so please be careful about that. Yesterday I booked my flight; I will arrive on Saturday afternoon, and if the plane is late, I will call you straight away, and I will message you when I arrive. Is it better to take the train or a taxi to your house? With sincere thanks, Hala.”',
      find: ['أُحِبُّ أَنْ أَمْشِيَ', 'غَيْرَ أَنَّ عِنْدِي', 'إِذَا تَأَخَّرَتْ … سَأَتَّصِلُ', 'القِطَارَ أَمْ سَيَّارَةَ أُجْرَةٍ'],
    },
  },
  Q3: {
    a: { title: 'يَوْمِي المِثَالِيُّ', en: 'My ideal day', bullets: 'مَتَى تَسْتَيْقِظُ؟ وَمَاذَا تَأْكُلُ؟ · الرِّيَاضَةُ وَالمُوَاصَلَاتُ وَالأَمَاكِنُ · يَوْمٌ مَاضٍ كَانَ مُخْتَلِفًا · رَأْيُكَ وَخُطَطُكَ', bulletsEn: 'When you get up; what you eat · sport, transport and places · a past day that was different · your opinion and plans' },
    b: { title: 'الحَيَاةُ العَصْرِيَّةُ وَالصِّحَّةُ', en: 'Modern life and health', bullets: 'هَلِ الحَيَاةُ اليَوْمَ أَسْهَلُ؟ · المَاضِي وَالحَاضِرُ: الأَكْلُ وَالحَرَكَةُ وَالنَّوْمُ · تَجْرِبَةٌ مِنْ أُسْرَتِكَ · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'Is life easier today? · past and present: food, movement, sleep · an experience in your family · your opinion and suggestion' },
    plan: [
      'Present — routine, food and drink: times, frequency, adjectives (L01–L05).',
      'Health + transport — exercise, advice, bi- + transport, comparatives (L06–L09).',
      'Past — a day or a change: kuntu + present, naṣaḥanī bi-an …, a duration (L07–L08, L11).',
      'Opinion + future — fī raʾyī …, idhā … sa-; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'أَسْتَيْقِظُ فِي الثَّامِنَةِ يَوْمَ الجُمُعَةِ.', en: 'present: I get up at eight on Fridays.' },
      { ar: 'كُنْتُ مَرِيضًا، فَذَهَبْتُ إِلَى الطَّبِيبِ.', en: 'past: I was ill, so I went to the doctor.' },
      { ar: 'إِذَا نَجَحْتُ، سَأُسَافِرُ إِلَى البَحْرِ.', en: 'future: if I pass, I will travel to the seaside.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'My ideal day is Friday: up at eight (no school); a big family breakfast — beans, eggs, bread, tea; we talk a lot, as we never sit together on school mornings → by bike to the club, two hours of football; sport is good for health and makes me happy; lunch at Grandad’s, where Grandma cooks a delicious maqluba → last Friday was different: ill with a headache and fever; the doctor: “you must rest”; two days in bed with TV and honey tea — very boring! → an ideal day has family, sport and tasty food; if I travel abroad, I’ll visit its restaurants and museums in one day!', find: ['أَسْتَيْقِظُ فِي السَّاعَةِ الثَّامِنَةِ', 'بِالدَّرَّاجَةِ', 'كَانَ عِنْدِي صُدَاعٌ', 'إِذَا سَافَرْتُ … سَأَزُورُ'], notes: 'Core model: every part of Topic A in simple sentences — routine, food, sport, transport, health, an opinion and an idhā sentence.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'If anyone asked about my ideal day, I would say it is simple but balanced: up at sunrise without an alarm, a half-hour walk, a healthy family breakfast → at noon the train to the centre (faster than the bus, cleaner than the car); friends at a small café with the tastiest juice in town; as for the evening, a good book, then bed at ten so I wake up energetic → my days weren’t always like this: last year I stayed up on my phone and ate fast food, until the doctor advised me to change after a two-week headache, so I changed step by step → it is true this day doesn’t happen every week, but I live part of it daily; if I pass my exams, I will reward myself with a whole perfect day at the beach.', find: ['لَوْ سَأَلَنِي … لَقُلْتُ', 'أَسْرَعُ مِنَ الحَافِلَةِ وَأَقَلُّ تَلْوِيثًا', 'نَصَحَنِي الطَّبِيبُ بِأَنْ', 'إِذَا نَجَحْتُ … سَأُكَافِئُ'], notes: 'Full-mark model: law … la-, comparatives and a superlative, ammā … fa-, lam takun + kuntu + present, advice with bi-an, a concession and idhā … sa-.' },
      { which: 'ب', level: 'Full', subtitle: 'modern life and health', text: Q3B_FULL, en: 'Modern life is easier — faster transport, better medicine, food at any time, travel anywhere in a few hours — but easy doesn’t always mean healthy → in the past people walked a lot, ate what they grew and slept soon after sunset; as for today, we sit at screens, order fast food at the press of a button and stay up till midnight → in my family: two years ago Dad drove to work and had back pain; the doctor advised walking; he now walks to the station and the pain eased within a month, and he sleeps better than before → we shouldn’t reject modern life but use it wisely; “if we took the past’s healthy habits and the present’s useful technology, we would live the best life possible”.', find: ['أَسْهَلُ مِنْ حَيَاةِ أَجْدَادِنَا', 'أَمَّا اليَوْمَ فَنَجْلِسُ', 'نَصَحَهُ الطَّبِيبُ بِأَنْ يَمْشِيَ', 'لَوْ أَخَذْنَا … لَعِشْنَا'], notes: 'Full-mark model for the Stretch title: a balanced opening, kāna + present vs ammā … fa-, a family example with advice, lā … bal, a superlative and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, using words from each Topic A lesson.' },
    { route: 'core', text: 'Q2: all four bullet points, with a polite greeting and closing.' },
    { route: 'develop', text: 'Q2: a past AND a future sentence, plus a polite question.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: idhā … sa-, law … la- and a concession.' },
  ],
};

module.exports = { speak, write };
