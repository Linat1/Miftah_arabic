'use strict';
/* Exam-practice data · AT-A-L06 · Healthy Eating and Lifestyle Choices (nutrition vocabulary; modal advice; reasons and healthy habits). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { n: 6, short: 'A Healthy Lifestyle', arShort: 'نَمَطُ الحَيَاةِ الصِّحِّيُّ', fileTitle: 'Healthy_Eating_and_Lifestyle_Choices', title: 'Healthy Eating and Lifestyle Choices', ar: 'الأَكْلُ الصِّحِّيُّ وَأُسْلُوبُ الحَيَاةِ', icon: 'FaHeartPulse', grammar: 'nutrition vocabulary, advice with يَجِبُ / يَنْبَغِي أَنْ, reasons' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: talk about food, exercise and sleep, give and ask for advice (yajibu an · yanbaghī an), and justify healthy choices.',
  words: [
    w(1, 'أُمَارِسُ الرِّيَاضَةَ', 'I do sport / exercise', [['he', 'يُمَارِسُ'], ['she', 'تُمَارِسُ'], ['they', 'يُمَارِسُونَ']]),
    w(2, 'أَنَامُ', 'I sleep', [['he', 'يَنَامُ'], ['she', 'تَنَامُ'], ['they', 'يَنَامُونَ']]),
    w(3, 'أُحَافِظُ عَلَى', 'I look after, keep up', [['he', 'يُحَافِظُ'], ['she', 'تُحَافِظُ'], ['they', 'يُحَافِظُونَ']]),
    w(4, 'أَتَجَنَّبُ', 'I avoid', [['he', 'يَتَجَنَّبُ'], ['she', 'تَتَجَنَّبُ'], ['they', 'يَتَجَنَّبُونَ']]),
    w(5, 'يَجِبُ أَنْ …', 'you must … (+ verb in -a)', null, { tag: 'advice' }),
    w(6, 'يَنْبَغِي أَنْ …', 'you should … (+ verb in -a)', null, { tag: 'advice' }),
    w(7, 'صِحِّيٌّ', 'healthy', [['m.', 'صِحِّيٌّ'], ['f.', 'صِحِّيَّةٌ'], ['pl.', 'صِحِّيَّةٌ']], { tag: 'm. · f. · non-hum. pl.' }),
    w(8, 'نَشِيطٌ', 'active, energetic', [['m.', 'نَشِيطٌ'], ['f.', 'نَشِيطَةٌ'], ['pl.', 'نَشِيطُونَ']]),
    w(9, 'خُضَارٌ وَفَوَاكِهُ', 'vegetables and fruit', null, { tag: 'food groups' }),
    w(10, 'السُّكَّرُ · الدُّهُونُ', 'sugar · fats', null, { tag: 'nutrition' }),
    w(11, 'عَادَةٌ', 'a habit', [['sg.', 'عَادَةٌ'], ['pl.', 'عَادَاتٌ']]),
    w(12, 'وَجْبَةٌ سَرِيعَةٌ', 'fast food (a quick meal)', [['sg.', 'وَجْبَةٌ سَرِيعَةٌ'], ['pl.', 'وَجَبَاتٌ سَرِيعَةٌ']]),
  ],
  words1: { eyebrow: 'Language bank · healthy verbs (I · he · she · they) and advice', title: 'Healthy habits — and how to give advice', ar: 'العَادَاتُ الصِّحِّيَّةُ', notes: 'LANGUAGE BANK (2 min) — four persons for each verb. Advice: يَجِبُ أَنْ / يَنْبَغِي أَنْ + a verb in -a: يَجِبُ أَنْ نَشْرَبَ المَاءَ. Negative advice: يَجِبُ أَلَّا نَأْكُلَ … (allā = an + lā).' },
  words2: { eyebrow: 'Language bank · nutrition words (m. · f. · pl.)', title: 'Healthy, active — and what to avoid', ar: 'التَّغْذِيَةُ', notes: 'LANGUAGE BANK (2 min) — non-human plurals take the feminine singular: عَادَاتٌ صِحِّيَّةٌ · وَجَبَاتٌ سَرِيعَةٌ. People: هُمْ نَشِيطُونَ.' },
  checkCore: 'described their habits (food, sport, sleep) in full sentences',
  checkDevelop: 'gave advice with yajibu an / yanbaghī an + verb in -a, and a reason',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'at the school nurse', title: 'Role play A — A health check with the school nurse', ar: 'عِنْدَ مُمَرِّضَةِ المَدْرَسَةِ', you: 'a student', them: 'the school nurse',
      tasks: [
        { core: true, ex: 'كَمْ سَاعَةً تَنَامُ فِي اللَّيْلِ؟', task: 'Say how many hours you sleep.', help: 'أَنَامُ … سَاعَاتٍ', model: 'أَنَامُ ثَمَانِيَ سَاعَاتٍ فِي اللَّيْلِ.', modelEn: 'I sleep eight hours a night.' },
        { core: true, ex: 'مَاذَا تَأْكُلُ فِي الفُطُورِ؟', task: 'Say what you eat for breakfast.', help: 'آكُلُ … وَأَشْرَبُ …', model: 'آكُلُ الشُّوفَانَ مَعَ المَوْزِ، وَأَشْرَبُ الحَلِيبَ.', modelEn: 'I eat oats with banana, and I drink milk.' },
        { core: true, ex: 'هَلْ تُمَارِسُ الرِّيَاضَةَ؟', task: 'Say if and how often you exercise.', help: 'نَعَمْ، أُمَارِسُ … مَرَّتَيْنِ …', model: 'نَعَمْ، أُمَارِسُ كُرَةَ القَدَمِ مَرَّتَيْنِ فِي الأُسْبُوعِ.', modelEn: 'Yes, I play football twice a week.' },
        { core: true, ex: 'كَمْ كُوبًا مِنَ المَاءِ تَشْرَبُ؟', task: 'Say how much water you drink.', help: 'أَشْرَبُ … أَكْوَابٍ', model: 'أَشْرَبُ خَمْسَةَ أَكْوَابٍ مِنَ المَاءِ كُلَّ يَوْمٍ.', modelEn: 'I drink five glasses of water every day.' },
        { core: true, unexpected: true, ex: 'هَلْ تَأْكُلُ الحَلَوِيَّاتِ كَثِيرًا؟', task: 'Answer the unexpected question.', help: 'لَا، آكُلُهَا أَحْيَانًا فَقَطْ …', model: 'لَا، آكُلُهَا أَحْيَانًا فَقَطْ، فِي نِهَايَةِ الأُسْبُوعِ.', modelEn: 'No, I only eat them sometimes, at the weekend.' },
      ],
      girl: 'تَنَامِينَ · تَأْكُلِينَ · تُمَارِسِينَ · تَشْرَبِينَ',
      notes: 'Core: habits in full sentences. Numbers 3–10 + plural genitive: ثَمَانِيَ سَاعَاتٍ · خَمْسَةَ أَكْوَابٍ. آكُلُهَا = I eat THEM (the sweets — non-human plural → hā).',
    },
    {
      id: 'B', level: 'Core+', setting: 'joining the gym', title: 'Role play B — Joining the sports centre', ar: 'فِي النَّادِي الرِّيَاضِيِّ', you: 'a new member', them: 'the trainer',
      tasks: [
        { core: true, ex: 'لِمَاذَا تُرِيدُ أَنْ تَشْتَرِكَ؟', task: 'Give a reason for joining.', help: 'أُرِيدُ أَنْ أَكُونَ …', model: 'أُرِيدُ أَنْ أَكُونَ نَشِيطًا وَصِحِّيًّا أَكْثَرَ.', modelEn: 'I want to be more active and healthy.' },
        { core: true, ex: 'أَيَّ رِيَاضَةٍ تُحِبُّ؟', task: 'Say which sport you like.', help: 'أُحِبُّ … لِأَنَّهَا …', model: 'أُحِبُّ السِّبَاحَةَ لِأَنَّهَا مُمْتِعَةٌ.', modelEn: 'I like swimming because it is fun.' },
        { ex: 'مَتَى تَسْتَطِيعُ أَنْ تَأْتِيَ؟', task: 'Say which days and times.', help: 'أَسْتَطِيعُ أَنْ آتِيَ يَوْمَ …', model: 'أَسْتَطِيعُ أَنْ آتِيَ يَوْمَ السَّبْتِ وَيَوْمَ الأَرْبِعَاءِ بَعْدَ المَدْرَسَةِ.', modelEn: 'I can come on Saturday and Wednesday after school.' },
        { ex: '… يَجِبُ أَنْ تَأْكُلَ قَبْلَ التَّدْرِيبِ بِسَاعَتَيْنِ.', task: 'ASK what you should eat before training (the examiner then answers).', help: 'مَاذَا يَنْبَغِي أَنْ …؟', model: 'مَاذَا يَنْبَغِي أَنْ آكُلَ قَبْلَ التَّدْرِيبِ؟', modelEn: 'What should I eat before training?' },
        { unexpected: true, ex: 'هَلْ عِنْدَكَ أَيُّ مُشْكِلَةٍ صِحِّيَّةٍ؟', task: 'Answer the unexpected question.', help: 'لَا، … / نَعَمْ، عِنْدِي …', model: 'لَا، لَيْسَ عِنْدِي أَيُّ مُشْكِلَةٍ، وَالحَمْدُ لِلّٰهِ.', modelEn: 'No, I have no problems, thank God.' },
      ],
      girl: 'تُرِيدِينَ · تُحِبِّينَ · تَسْتَطِيعِينَ · عِنْدَكِ — and the candidate says نَشِيطَةً وَصِحِّيَّةً',
      notes: 'Task 4: the CANDIDATE asks. أَنْ + subjunctive everywhere: أَنْ أَكُونَ · أَنْ آتِيَ · أَنْ آكُلَ.',
    },
    {
      id: 'C', level: 'Develop', setting: 'advising a friend', title: 'Role play C — A friend who feels tired', ar: 'صَدِيقٌ مُتْعَبٌ', you: 'a helpful friend', them: 'your friend who is always tired',
      tasks: [
        { ex: 'أَشْعُرُ بِالتَّعَبِ دَائِمًا. مَاذَا أَفْعَلُ؟', task: 'Give one piece of advice about sleep.', help: 'يَجِبُ أَنْ تَنَامَ …', model: 'يَجِبُ أَنْ تَنَامَ مُبَكِّرًا، ثَمَانِيَ سَاعَاتٍ عَلَى الأَقَلِّ.', modelEn: 'You must sleep early, at least eight hours.' },
        { ex: 'لٰكِنِّي أُحِبُّ الهَاتِفَ فِي اللَّيْلِ!', task: 'Advise him about the phone, with a reason.', help: 'يَنْبَغِي أَلَّا … لِأَنَّ …', model: 'يَنْبَغِي أَلَّا تَسْتَعْمِلَ الهَاتِفَ قَبْلَ النَّوْمِ، لِأَنَّ الضَّوْءَ يُبْعِدُ النَّوْمَ.', modelEn: 'You should not use your phone before bed, because the light keeps sleep away.' },
        { ex: 'وَمَاذَا عَنِ الأَكْلِ؟', task: 'Give advice about food (two things).', help: 'كُلْ … وَتَجَنَّبْ …', model: 'كُلِ الخُضَارَ وَالفَوَاكِهَ، وَتَجَنَّبِ الوَجَبَاتِ السَّرِيعَةَ وَالسُّكَّرَ.', modelEn: 'Eat vegetables and fruit, and avoid fast food and sugar.' },
        { ex: '… أَلْعَبُ أَلْعَابَ الفِيدْيُو فَقَطْ!', task: 'ASK what sport he does (the examiner then answers).', help: 'أَيَّ رِيَاضَةٍ …؟', model: 'وَأَيَّ رِيَاضَةٍ تُمَارِسُ؟', modelEn: 'And what sport do you do?' },
        { unexpected: true, ex: 'هَلْ تَأْتِي مَعِي إِلَى النَّادِي؟', task: 'Answer the unexpected question (future).', help: 'نَعَمْ، سَآتِي …', model: 'نَعَمْ، سَآتِي مَعَكَ يَوْمَ السَّبْتِ، وَسَنَمْشِي سَاعَةً فِي الحَدِيقَةِ بَعْدَ ذٰلِكَ.', modelEn: 'Yes, I will come with you on Saturday, and we will walk in the park for an hour afterwards.' },
      ],
      girl: 'to a girl friend: يَجِبُ أَنْ تَنَامِي · أَلَّا تَسْتَعْمِلِي · كُلِي · تَجَنَّبِي · تُمَارِسِينَ',
      notes: 'Develop: advice in three ways — يَجِبُ أَنْ, يَنْبَغِي أَلَّا, and the imperative (كُلْ · تَجَنَّبْ). Before “al-”, the imperative takes a kasra: كُلِ الخُضَارَ · تَجَنَّبِ الوَجَبَاتِ.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a health campaign interview', title: 'Role play D — The school health campaign', ar: 'حَمْلَةُ الصِّحَّةِ فِي المَدْرَسَةِ', you: 'a student leading a health campaign', them: 'a local-radio reporter',
      tasks: [
        { ex: 'مَا هَدَفُ حَمْلَتِكُمْ؟', task: 'Explain the aim of the campaign.', help: 'نُرِيدُ أَنْ … لِكَيْ …', model: 'نُرِيدُ أَنْ نُشَجِّعَ الطُّلَّابَ عَلَى الأَكْلِ الصِّحِّيِّ، لِكَيْ يَكُونُوا أَنْشَطَ فِي الدِّرَاسَةِ.', modelEn: 'We want to encourage students to eat healthily, so that they are more active in their studies.' },
        { ex: 'مَاذَا فَعَلْتُمْ حَتَّى الآنَ؟', task: 'Say what you have done so far (past).', help: 'نَظَّمْنَا … وَوَزَّعْنَا …', model: 'نَظَّمْنَا يَوْمًا لِلْفَوَاكِهِ فِي المَقْصَفِ، وَوَزَّعْنَا مَلْصَقَاتٍ عَنْ أَهَمِّيَّةِ المَاءِ.', modelEn: 'We organised a fruit day in the canteen and handed out posters about the importance of water.' },
        { ex: 'لِمَاذَا يَأْكُلُ الشَّبَابُ الوَجَبَاتِ السَّرِيعَةَ فِي رَأْيِكَ؟', task: 'Give an opinion with two reasons.', help: 'لِأَنَّهَا … وَلِأَنَّ …', model: 'لِأَنَّهَا رَخِيصَةٌ وَسَرِيعَةٌ، وَلِأَنَّ الإِعْلَانَاتِ تُشَجِّعُهُمْ عَلَيْهَا كُلَّ يَوْمٍ.', modelEn: 'Because it is cheap and quick, and because adverts encourage them every day.' },
        { ex: 'هَلْ الرِّيَاضَةُ أَهَمُّ مِنَ الأَكْلِ الصِّحِّيِّ؟', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الرِّيَاضَةَ مُهِمَّةٌ جِدًّا، غَيْرَ أَنَّهَا لَا تَكْفِي إِذَا كَانَ الطَّعَامُ غَيْرَ صِحِّيٍّ.', modelEn: 'It is true that sport is very important, but it is not enough if the food is unhealthy.' },
        { unexpected: true, ex: 'لَوْ كُنْتَ مُدِيرَ المَدْرَسَةِ، مَاذَا تُغَيِّرُ؟', task: 'Answer the unexpected question (a conditional).', help: 'لَوْ كُنْتُ …، لَمَنَعْتُ …', model: 'لَوْ كُنْتُ مُدِيرَ المَدْرَسَةِ، لَمَنَعْتُ المَشْرُوبَاتِ الغَازِيَّةَ، وَلَأَضَفْتُ حِصَّةَ رِيَاضَةٍ ثَالِثَةً.', modelEn: 'If I were the head teacher, I would ban fizzy drinks and add a third PE lesson.' },
      ],
      girl: 'رَأْيِكِ · كُنْتِ مُدِيرَةَ المَدْرَسَةِ · تُغَيِّرِينَ',
      notes: 'Stretch: likay + subjunctive, a comparative (أَنْشَطَ), past actions, two reasons, a concession and a conditional.',
      modelFoot: 'Stretch: purpose (likay), past, reasons, ṣaḥīḥun anna … ghayra anna and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'صِحَّتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'هَلْ تَأْكُلُ طَعَامًا صِحِّيًّا؟', en: 'Do you eat healthy food?', start: 'نَعَمْ، آكُلُ …', model: 'نَعَمْ، آكُلُ الخُضَارَ وَالفَوَاكِهَ كُلَّ يَوْمٍ.', modelEn: 'Yes, I eat vegetables and fruit every day.' },
        { q: 'كَمْ سَاعَةً تَنَامُ؟', en: 'How many hours do you sleep?', start: 'أَنَامُ … سَاعَاتٍ', model: 'أَنَامُ سَبْعَ سَاعَاتٍ تَقْرِيبًا.', modelEn: 'I sleep about seven hours.' },
        { q: 'مَا رِيَاضَتُكَ المُفَضَّلَةُ؟', en: 'What is your favourite sport?', start: 'رِيَاضَتِي المُفَضَّلَةُ …', model: 'رِيَاضَتِي المُفَضَّلَةُ هِيَ كُرَةُ السَّلَّةِ.', modelEn: 'My favourite sport is basketball.' },
        { q: 'مَاذَا تَشْرَبُ عَادَةً؟', en: 'What do you usually drink?', start: 'أَشْرَبُ … عَادَةً', model: 'أَشْرَبُ المَاءَ عَادَةً، وَأَحْيَانًا العَصِيرَ.', modelEn: 'I usually drink water, and sometimes juice.' },
        { q: 'هَلْ تُحِبُّ الوَجَبَاتِ السَّرِيعَةَ؟', en: 'Do you like fast food?', start: 'نَعَمْ / لَا، …', model: 'نَعَمْ، أُحِبُّهَا، لٰكِنْ لَا آكُلُهَا كَثِيرًا.', modelEn: 'Yes, I like it, but I don’t eat it often.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a detail (how often, how much) = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'عَادَاتِي الصِّحِّيَّةُ', aim: 'two or three sentences, with a reason or some advice',
      qs: [
        { q: 'صِفْ يَوْمًا صِحِّيًّا فِي حَيَاتِكَ.', en: 'Describe a healthy day in your life.', start: 'أَسْتَيْقِظُ … ثُمَّ … وَفِي المَسَاءِ …', model: 'أَسْتَيْقِظُ مُبَكِّرًا وَآكُلُ فُطُورًا صِحِّيًّا، ثُمَّ أَمْشِي إِلَى المَدْرَسَةِ، وَفِي المَسَاءِ أُمَارِسُ السِّبَاحَةَ.', modelEn: 'I wake up early and eat a healthy breakfast, then walk to school, and in the evening I go swimming.' },
        { q: 'مَا العَادَةُ غَيْرُ الصِّحِّيَّةِ الَّتِي عِنْدَكَ؟', en: 'What unhealthy habit do you have?', start: 'أَحْيَانًا … لٰكِنِّي أُحَاوِلُ …', model: 'أَحْيَانًا أَسْهَرُ عَلَى الهَاتِفِ، لٰكِنِّي أُحَاوِلُ أَنْ أَنَامَ مُبَكِّرًا.', modelEn: 'Sometimes I stay up on my phone, but I try to sleep early.' },
        { q: 'مَا نَصِيحَتُكَ لِطَالِبٍ لَا يَأْكُلُ الفُطُورَ؟', en: 'What advice for a student who skips breakfast?', start: 'يَجِبُ أَنْ … لِأَنَّ …', model: 'يَجِبُ أَنْ يَأْكُلَ الفُطُورَ، لِأَنَّهُ يُعْطِيهِ الطَّاقَةَ لِلتَّرْكِيزِ فِي الصَّفِّ.', modelEn: 'He must eat breakfast, because it gives him energy to concentrate in class.' },
        { q: 'هَلْ تُمَارِسُ الرِّيَاضَةَ مَعَ أُسْرَتِكَ؟', en: 'Do you exercise with your family?', start: 'نَعَمْ، … مَعَ … يَوْمَ …', model: 'نَعَمْ، نَمْشِي مَعًا فِي الحَدِيقَةِ يَوْمَ الأَحَدِ، وَأَحْيَانًا نَرْكَبُ الدَّرَّاجَاتِ.', modelEn: 'Yes, we walk together in the park on Sundays, and sometimes we ride bikes.' },
        { q: 'مَاذَا أَكَلْتَ أَمْسِ؟ هَلْ كَانَ صِحِّيًّا؟', en: 'What did you eat yesterday? Was it healthy?', start: 'أَمْسِ أَكَلْتُ … وَكَانَ …', model: 'أَمْسِ أَكَلْتُ سَمَكًا مَعَ الخُضَارِ، وَكَانَ صِحِّيًّا وَلَذِيذًا.', modelEn: 'Yesterday I ate fish with vegetables, and it was healthy and tasty.' },
      ],
      foot: 'Develop: two or three sentences — advice (yajibu an + verb in -a), a reason and one past sentence.',
      modelFoot: 'Habit + advice + reason + one past sentence = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الصِّحَّةُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلِ الشَّبَابُ اليَوْمَ أَقَلُّ صِحَّةً مِنَ المَاضِي؟', en: 'Are young people less healthy than in the past?', start: 'فِي المَاضِي كَانَ … أَمَّا اليَوْمَ فَـ…', model: 'فِي المَاضِي كَانَ الشَّبَابُ يَلْعَبُونَ فِي الخَارِجِ أَكْثَرَ، أَمَّا اليَوْمَ فَيَجْلِسُونَ أَمَامَ الشَّاشَاتِ سَاعَاتٍ طَوِيلَةً.', modelEn: 'In the past young people played outside more; today they sit in front of screens for hours.' },
        { q: 'مَا أَهَمُّ عَادَةٍ صِحِّيَّةٍ فِي رَأْيِكَ؟ لِمَاذَا؟', en: 'What is the most important healthy habit?', start: 'أَعْتَقِدُ أَنَّ أَهَمَّ عَادَةٍ … لِأَنَّ …', model: 'أَعْتَقِدُ أَنَّ أَهَمَّ عَادَةٍ هِيَ النَّوْمُ الكَافِي، لِأَنَّهُ يُؤَثِّرُ فِي التَّرْكِيزِ وَالمِزَاجِ وَالصِّحَّةِ كُلِّهَا.', modelEn: 'I think the most important habit is enough sleep, because it affects concentration, mood and all of our health.' },
        { q: 'كَيْفَ غَيَّرْتَ عَادَةً سَيِّئَةً عِنْدَكَ؟', en: 'How did you change a bad habit?', start: 'كُنْتُ … فَقَرَّرْتُ أَنْ …', model: 'كُنْتُ أَشْرَبُ المَشْرُوبَاتِ الغَازِيَّةَ كُلَّ يَوْمٍ، فَقَرَّرْتُ أَنْ أَشْرَبَ المَاءَ بَدَلًا مِنْهَا، وَالآنَ أَشْعُرُ بِنَشَاطٍ أَكْبَرَ.', modelEn: 'I used to drink fizzy drinks every day, so I decided to drink water instead, and now I feel more energetic.' },
        { q: 'هَلْ يَجِبُ عَلَى المَدَارِسِ أَنْ تَمْنَعَ الوَجَبَاتِ السَّرِيعَةَ؟', en: 'Should schools ban fast food?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ المَنْعَ يَحْمِي الطُّلَّابَ، غَيْرَ أَنَّ التَّوْعِيَةَ أَفْضَلُ، لِأَنَّ الطَّالِبَ يَجِبُ أَنْ يَخْتَارَ بِنَفْسِهِ.', modelEn: 'It is true that a ban protects students, but education is better, because students must choose for themselves.' },
        { q: 'لَوْ كَانَ عِنْدَكَ شَهْرٌ لِتُحَسِّنَ صِحَّتَكَ، مَاذَا تَفْعَلُ؟', en: 'If you had a month to improve your health, what would you do?', start: 'لَوْ كَانَ عِنْدِي … لَـمَارَسْتُ …', model: 'لَوْ كَانَ عِنْدِي شَهْرٌ، لَمَارَسْتُ الرِّيَاضَةَ كُلَّ صَبَاحٍ، وَلَتَعَلَّمْتُ طَبْخَ وَجَبَاتٍ صِحِّيَّةٍ.', modelEn: 'If I had a month, I would exercise every morning and learn to cook healthy meals.' },
      ],
      foot: 'Stretch: past vs present (ammā … fa-), a superlative, a past habit, a concession and a conditional.',
      modelFoot: 'Stretch: kāna + present, a superlative (ahammu ʿāda), a concession, qarrartu an + verb in -a, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered every role-play task in a full sentence.' },
    { route: 'core', text: 'I described my habits: food, sport, sleep, water.' },
    { route: 'develop', text: 'I gave advice with yajibu an / yanbaghī an + verb in -a.' },
    { route: 'develop', text: 'I asked a question in the role play.' },
    { route: 'stretch', text: 'I used a concession, a comparison or a conditional.' },
  ],
};
speak.CONV[2].qs[4].start = 'لَوْ كَانَ عِنْدِي شَهْرٌ، لَمَارَسْتُ …';
speak.CONV[2].qs[0].start = 'فِي المَاضِي كَانَ … أَمَّا اليَوْمَ فَيَجْلِسُونَ …';

const Q2_CORE = `مَرْحَبًا يَا عُمَرُ،
كَيْفَ حَالُكَ؟ أُرِيدُ أَنْ أُخْبِرَكَ عَنْ عَادَاتِي الصِّحِّيَّةِ. آكُلُ الخُضَارَ وَالفَوَاكِهَ كُلَّ يَوْمٍ، وَأَشْرَبُ المَاءَ كَثِيرًا. أُمَارِسُ كُرَةَ القَدَمِ مَرَّتَيْنِ فِي الأُسْبُوعِ، وَأَنَامُ ثَمَانِيَ سَاعَاتٍ. لٰكِنِّي أُحِبُّ الشُّوكُولَاتَةَ كَثِيرًا. أَمْسِ لَعِبْتُ فِي المُبَارَاةِ وَأَكَلْتُ سَلَطَةً كَبِيرَةً فِي المَسَاءِ. نَصِيحَتِي لَكَ: يَجِبُ أَنْ تَشْرَبَ المَاءَ وَتَنَامَ مُبَكِّرًا، لِأَنَّ النَّوْمَ مُهِمٌّ جِدًّا.
مَعَ السَّلَامَةِ،
خَالِدٌ`;
const Q2_FULL = `مَرْحَبًا يَا عُمَرُ،
كَيْفَ حَالُكَ؟ سَأَلْتَنِي فِي رِسَالَتِكَ عَنْ عَادَاتِي الصِّحِّيَّةِ. أَحْرِصُ عَلَى أَنْ آكُلَ الخُضَارَ وَالفَوَاكِهَ يَوْمِيًّا، وَأَشْرَبُ ثَمَانِيَةَ أَكْوَابٍ مِنَ المَاءِ. أُمَارِسُ كُرَةَ القَدَمِ مَرَّتَيْنِ فِي الأُسْبُوعِ، وَأَمْشِي إِلَى المَدْرَسَةِ كُلَّ صَبَاحٍ. لٰكِنَّ عِنْدِي عَادَةً سَيِّئَةً: أَسْهَرُ أَحْيَانًا عَلَى الهَاتِفِ. أَمْسِ، بَعْدَ المُبَارَاةِ، أَكَلْتُ سَلَطَةً كَبِيرَةً مَعَ الدَّجَاجِ المَشْوِيِّ، وَنِمْتُ فِي العَاشِرَةِ. نَصِيحَتِي لَكَ: يَجِبُ أَنْ تَنَامَ ثَمَانِيَ سَاعَاتٍ، وَيَنْبَغِي أَلَّا تَشْرَبَ المَشْرُوبَاتِ الغَازِيَّةَ، لِأَنَّهَا مَلِيئَةٌ بِالسُّكَّرِ. وَأَنْتَ، مَا رِيَاضَتُكَ المُفَضَّلَةُ؟ وَكَمْ سَاعَةً تَنَامُ فِي اللَّيْلِ؟ أَنْتَظِرُ رَدَّكَ.
مَعَ تَحِيَّاتِي،
خَالِدٌ`;
const Q3A_CORE = `أُحَاوِلُ أَنْ أَعِيشَ حَيَاةً صِحِّيَّةً. فِي الصَّبَاحِ آكُلُ الشُّوفَانَ مَعَ المَوْزِ، وَأَشْرَبُ الحَلِيبَ. فِي المَدْرَسَةِ آكُلُ شَطِيرَةً وَتُفَّاحَةً، وَأَشْرَبُ المَاءَ. فِي المَسَاءِ نَأْكُلُ الأُرْزَ وَالخُضَارَ وَالدَّجَاجَ فِي البَيْتِ.
أُمَارِسُ الرِّيَاضَةَ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ. أَلْعَبُ كُرَةَ السَّلَّةِ يَوْمَ الإِثْنَيْنِ، وَأَسْبَحُ يَوْمَ الأَرْبِعَاءِ، وَأَمْشِي مَعَ أَبِي يَوْمَ السَّبْتِ. أَنَامُ فِي السَّاعَةِ العَاشِرَةِ عَادَةً، وَأَسْتَيْقِظُ فِي السَّاعَةِ السَّادِسَةِ، لِأَنَّ المَدْرَسَةَ تَبْدَأُ مُبَكِّرًا. الرِّيَاضَةُ تَجْعَلُنِي سَعِيدًا وَنَشِيطًا.
لٰكِنَّ عِنْدِي عَادَةً سَيِّئَةً، فَأَنَا أُحِبُّ الحَلَوِيَّاتِ كَثِيرًا. أَمْسِ أَكَلْتُ قِطْعَتَيْنِ مِنَ الكَعْكِ، وَشَرِبْتُ مَشْرُوبًا غَازِيًّا، فَشَعَرْتُ بِالتَّعَبِ فِي المَسَاءِ، وَلَمْ أَنَمْ جَيِّدًا.
فِي رَأْيِي، الأَكْلُ الصِّحِّيُّ وَالرِّيَاضَةُ مُهِمَّانِ جِدًّا. فِي المُسْتَقْبَلِ سَآكُلُ الحَلَوِيَّاتِ مَرَّةً فِي الأُسْبُوعِ فَقَطْ، وَسَأَشْرَبُ المَاءَ أَكْثَرَ، وَسَأَمْشِي إِلَى المَدْرَسَةِ مَعَ أَخِي. يَجِبُ أَنْ نَهْتَمَّ بِصِحَّتِنَا كُلَّ يَوْمٍ.`;
const Q3A_FULL = `أَحْرِصُ عَلَى أَنْ أَعِيشَ حَيَاةً صِحِّيَّةً مُتَوَازِنَةً. أَبْدَأُ يَوْمِي بِفُطُورٍ مُغَذٍّ مِنَ الشُّوفَانِ وَالفَوَاكِهِ، لِأَنَّهُ يُعْطِينِي الطَّاقَةَ حَتَّى الظُّهْرِ، وَأَشْرَبُ ثَمَانِيَةَ أَكْوَابٍ مِنَ المَاءِ يَوْمِيًّا. أَمَّا الوَجَبَاتُ السَّرِيعَةُ فَلَا آكُلُهَا إِلَّا نَادِرًا، لِأَنَّهَا مَلِيئَةٌ بِالدُّهُونِ وَالسُّكَّرِ وَالمِلْحِ.
أُمَارِسُ الرِّيَاضَةَ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ، وَأَمْشِي إِلَى المَدْرَسَةِ بَدَلًا مِنْ أَنْ أَرْكَبَ السَّيَّارَةَ. وَأَنَامُ ثَمَانِيَ سَاعَاتٍ، لِأَنَّ النَّوْمَ يُسَاعِدُنِي عَلَى التَّرْكِيزِ فِي الدُّرُوسِ، وَيَجْعَلُنِي أَهْدَأَ مَعَ أُسْرَتِي وَأَصْدِقَائِي.
لَمْ أَكُنْ هٰكَذَا دَائِمًا؛ فَقَبْلَ سَنَةٍ كُنْتُ أَشْرَبُ المَشْرُوبَاتِ الغَازِيَّةَ كُلَّ يَوْمٍ، وَأَسْهَرُ عَلَى الهَاتِفِ حَتَّى مُنْتَصَفِ اللَّيْلِ، فَكُنْتُ أَشْعُرُ بِالتَّعَبِ دَائِمًا. ثُمَّ نَصَحَنِي طَبِيبُ المَدْرَسَةِ بِأَنْ أُغَيِّرَ عَادَاتِي، فَفَعَلْتُ خُطْوَةً خُطْوَةً، وَبَدَأْتُ بِالمَاءِ ثُمَّ بِالنَّوْمِ.
صَحِيحٌ أَنَّ التَّغْيِيرَ كَانَ صَعْبًا فِي البِدَايَةِ، غَيْرَ أَنَّنِي الآنَ أَنْشَطُ وَأَسْعَدُ. فِي المُسْتَقْبَلِ سَأَتَعَلَّمُ طَبْخَ وَجَبَاتٍ صِحِّيَّةٍ، وَلَوْ تَبِعَ كُلُّ الطُّلَّابِ هٰذِهِ النَّصَائِحَ، لَتَحَسَّنَتْ صِحَّتُهُمْ وَنَتَائِجُهُمْ مَعًا.`;
const Q3B_FULL = `تُوَاجِهُ صِحَّةُ الشَّبَابِ اليَوْمَ تَحَدِّيَاتٍ كَثِيرَةً. فِي المَاضِي كَانَ الأَطْفَالُ يَلْعَبُونَ فِي الشَّوَارِعِ وَالحَدَائِقِ سَاعَاتٍ طَوِيلَةً، أَمَّا اليَوْمَ فَكَثِيرٌ مِنْهُمْ يَجْلِسُونَ أَمَامَ الشَّاشَاتِ، وَيَأْكُلُونَ الوَجَبَاتِ السَّرِيعَةَ المَلِيئَةَ بِالدُّهُونِ وَالسُّكَّرِ.
يَرَى بَعْضُ النَّاسِ أَنَّ المَسْؤُولِيَّةَ عَلَى الأُسْرَةِ، وَيَرَى آخَرُونَ أَنَّهَا عَلَى المَدْرَسَةِ. فِي رَأْيِي، كِلَاهُمَا مَسْؤُولٌ؛ فَيَجِبُ أَنْ تُقَدِّمَ الأُسْرَةُ طَعَامًا صِحِّيًّا فِي البَيْتِ، وَيَنْبَغِي أَنْ تُعَلِّمَ المَدْرَسَةُ الطُّلَّابَ أَهَمِّيَّةَ الرِّيَاضَةِ وَالنَّوْمِ، وَأَنْ تُقَدِّمَ فِي المَقْصَفِ وَجَبَاتٍ صِحِّيَّةً بِأَسْعَارٍ مُنَاسِبَةٍ.
فِي الشَّهْرِ المَاضِي شَارَكْتُ فِي حَمْلَةٍ صِحِّيَّةٍ فِي مَدْرَسَتِي؛ نَظَّمْنَا يَوْمًا لِلْفَوَاكِهِ، وَوَزَّعْنَا مَلْصَقَاتٍ عَنْ أَضْرَارِ السُّكَّرِ، وَلَاحَظْنَا أَنَّ كَثِيرًا مِنَ الطُّلَّابِ صَارُوا يَشْرَبُونَ المَاءَ بَدَلًا مِنَ المَشْرُوبَاتِ الغَازِيَّةِ، وَأَنَّ المُعَلِّمِينَ أَيْضًا شَارَكُوا بِحَمَاسٍ كَبِيرٍ.
صَحِيحٌ أَنَّ تَغْيِيرَ العَادَاتِ صَعْبٌ، غَيْرَ أَنَّهُ مُمْكِنٌ إِذَا بَدَأْنَا بِخُطُوَاتٍ صَغِيرَةٍ وَصَبَرْنَا قَلِيلًا. وَلَوِ اهْتَمَّ كُلُّ شَابٍّ بِصِحَّتِهِ قَلِيلًا كُلَّ يَوْمٍ، لَأَصْبَحَ المُجْتَمَعُ كُلُّهُ أَقْوَى وَأَسْعَدَ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a health questionnaire, write an email about your healthy (and unhealthy) habits with advice, and write an extended piece with advice, reasons and three time frames.',
  lift: [
    { ar: 'يَجِبُ أَنْ نَشْرَبَ · يَنْبَغِي أَلَّا نَأْكُلَ', en: 'we must drink · we should not eat' },
    { ar: 'لِأَنَّ … · لِكَيْ …', en: 'because … · so that …' },
    { ar: 'كُنْتُ … أَمَّا الآنَ فَـأُمَارِسُ …', en: 'I used to … but now I exercise …' },
  ],
  checkTip: 'Check: yajibu an / yanbaghī an + verb in -a; allā (= an lā) for negative advice; non-human plurals with feminine adjectives (ʿādāt ṣiḥḥiyya).',
  FORM: {
    title: 'Health questionnaire — sports centre', ar: 'اسْتِبْيَانٌ صِحِّيٌّ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Your name', model: 'خَالِدٌ يُوسُفُ', modelEn: 'Khalid Yusuf' },
      { core: true, ar: 'العُمْرُ', en: 'Your age', model: 'سِتَّ عَشْرَةَ سَنَةً', modelEn: 'sixteen' },
      { core: true, ar: 'رِيَاضَتُكَ المُفَضَّلَةُ', en: 'Your favourite sport', model: 'السِّبَاحَةُ', modelEn: 'swimming' },
      { core: true, ar: 'كَمْ مَرَّةً تُمَارِسُ الرِّيَاضَةَ؟', en: 'How often you exercise', model: 'ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ', modelEn: 'three times a week' },
      { core: true, ar: 'كَمْ سَاعَةً تَنَامُ؟', en: 'How many hours you sleep', model: 'ثَمَانِيَ سَاعَاتٍ', modelEn: 'eight hours' },
      { core: true, ar: 'طَعَامٌ صِحِّيٌّ تُحِبُّهُ', en: 'A healthy food you like', model: 'السَّلَطَةُ', modelEn: 'salad' },
      { ar: 'عَادَةٌ غَيْرُ صِحِّيَّةٍ عِنْدَكَ', en: 'An unhealthy habit you have', model: 'السَّهَرُ عَلَى الهَاتِفِ', modelEn: 'staying up on my phone' },
      { ar: 'جُمْلَةٌ: مَاذَا تُرِيدُ أَنْ تُحَسِّنَ؟', en: 'ONE sentence: what you want to improve', model: 'أُرِيدُ أَنْ أَنَامَ مُبَكِّرًا لِكَيْ أَكُونَ نَشِيطًا فِي الصَّبَاحِ.', modelEn: 'I want to sleep early so that I am energetic in the morning.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence (urīdu an + verb in -a).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 7 is a noun phrase (السَّهَرُ عَلَى الهَاتِفِ), not a verb.',
  },
  Q2: {
    short: 'an email about your healthy habits', title: 'Question 2: an email about healthy habits', ar: 'رِسَالَةٌ عَنِ الصِّحَّةِ',
    task: 'Your Arabic-speaking friend has asked about your lifestyle. Write an email in Arabic of about 80–90 words. You must include: • what you eat and drink to stay healthy • the sport you do and how often • one unhealthy habit you have • what you did yesterday to stay healthy, and one piece of advice for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Frequency words and numbers.', 'A past sentence AND advice (yajibu an …).', 'About 80–90 words.'],
    phrases: [['أَحْرِصُ عَلَى أَنْ …', 'I make sure to …'], ['أُمَارِسُ … مَرَّتَيْنِ فِي الأُسْبُوعِ', 'I do … twice a week'], ['لٰكِنَّ عِنْدِي عَادَةً سَيِّئَةً', 'but I have a bad habit'], ['نَصِيحَتِي لَكَ: يَجِبُ أَنْ …', 'my advice to you: you must …']],
    rubric: [
      ['task', 'سَأَلَكَ صَدِيقُكَ عَنْ أُسْلُوبِ حَيَاتِكَ. اكْتُبْ لَهُ رِسَالَةً إِلِكْتِرُونِيَّةً (٨٠–٩٠ كَلِمَةً).', 'Your friend asked about your lifestyle: write him an email (80–90 words).'],
      ['1', 'مَاذَا تَأْكُلُ وَتَشْرَبُ لِتُحَافِظَ عَلَى صِحَّتِكَ؟', 'What you eat and drink to stay healthy'],
      ['2', 'أَيَّ رِيَاضَةٍ تُمَارِسُ؟ وَكَمْ مَرَّةً؟', 'Which sport, and how often'],
      ['3', 'مَا العَادَةُ غَيْرُ الصِّحِّيَّةِ الَّتِي عِنْدَكَ؟', 'An unhealthy habit you have'],
      ['4', 'مَاذَا فَعَلْتَ أَمْسِ لِصِحَّتِكَ؟ وَمَا نَصِيحَتُكَ لِصَدِيقِكَ؟', 'What you did yesterday; your advice'],
    ],
    qwords: 'مَاذَا (what) · أَيَّ (which) · كَمْ مَرَّةً (how often) · مَا (what) — bullet 4 has a PAST verb (فَعَلْتَ) and asks for ADVICE',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'آكُلُ ______ كُلَّ يَوْمٍ، وَأَشْرَبُ ______ .', 'I eat … every day, and I drink …'],
      ['2', 'أُمَارِسُ ______ مَرَّتَيْنِ فِي الأُسْبُوعِ.', 'I do … twice a week.'],
      ['3', 'لٰكِنِّي ______ أَحْيَانًا.', 'But I sometimes …'],
      ['4', 'أَمْسِ ______ . يَجِبُ أَنْ ______ لِأَنَّ ______ .', 'Yesterday I … You must … because …'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Omar, how are you? I want to tell you about my healthy habits. I eat vegetables and fruit every day and drink lots of water. I play football twice a week and sleep eight hours. But I love chocolate a lot. Yesterday I played in the match and ate a big salad in the evening. My advice to you: you must drink water and sleep early, because sleep is very important. Goodbye, Khalid.”',
      find: ['كُلَّ يَوْمٍ', 'مَرَّتَيْنِ', 'لٰكِنِّي', 'يَجِبُ أَنْ تَشْرَبَ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Hello Omar, how are you? In your message you asked about my healthy habits. I make sure to eat vegetables and fruit every day, and I drink eight glasses of water. I play football twice a week and walk to school every morning. But I have a bad habit: I sometimes stay up on my phone. Yesterday, after the match, I ate a big salad with grilled chicken and slept at ten. My advice to you: you must sleep eight hours, and you should not drink fizzy drinks, because they are full of sugar. And you — what is your favourite sport? And how many hours do you sleep at night? I await your reply. With my greetings, Khalid.”',
      find: ['أَحْرِصُ عَلَى أَنْ آكُلَ', 'لٰكِنَّ عِنْدِي عَادَةً', 'نِمْتُ فِي العَاشِرَةِ', 'يَنْبَغِي أَلَّا تَشْرَبَ'],
    },
  },
  Q3: {
    a: { title: 'كَيْفَ أُحَافِظُ عَلَى صِحَّتِي', en: 'How I stay healthy', bullets: 'مَاذَا تَأْكُلُ وَتَشْرَبُ؟ · الرِّيَاضَةُ وَالنَّوْمُ فِي حَيَاتِكَ · عَادَةٌ غَيَّرْتَهَا أَوْ تُرِيدُ أَنْ تُغَيِّرَهَا · نَصَائِحُكَ وَخُطَطُكَ لِلْمُسْتَقْبَلِ', bulletsEn: 'What you eat and drink · sport and sleep · a habit you changed or want to change · your advice and future plans' },
    b: { title: 'صِحَّةُ الشَّبَابِ: مَسْؤُولِيَّةُ مَنْ؟', en: 'Young people’s health: whose responsibility?', bullets: 'كَيْفَ تَغَيَّرَتْ عَادَاتُ الشَّبَابِ؟ · دَوْرُ الأُسْرَةِ وَالمَدْرَسَةِ · تَجْرِبَةٌ أَوْ مُبَادَرَةٌ شَارَكْتَ فِيهَا · مَا رَأْيُكَ؟ وَمَاذَا تَقْتَرِحُ؟', bulletsEn: 'How young people’s habits have changed · the role of family and school · an experience or initiative · your opinion and suggestion' },
    plan: [
      'Present — food, drink, sport, sleep: frequency + numbers (thalātha marrāt, thamāniya akwāb).',
      'Reasons — li-anna …; Stretch: ammā … fa- (as for fast food …).',
      'Past — a habit you changed: kuntu + present (I used to …), then qarrartu an …',
      'Advice + future — yajibu an …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'أُمَارِسُ الرِّيَاضَةَ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ.', en: 'present: I exercise three times a week.' },
      { ar: 'كُنْتُ أَشْرَبُ المَشْرُوبَاتِ الغَازِيَّةَ كُلَّ يَوْمٍ.', en: 'past habit: I used to drink fizzy drinks every day.' },
      { ar: 'سَأَتَعَلَّمُ طَبْخَ وَجَبَاتٍ صِحِّيَّةٍ.', en: 'future: I will learn to cook healthy meals.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Present: oats, banana and milk; a sandwich, an apple and water at school; rice, vegetables and chicken at home → sport three times a week (basketball, swimming, walking with Dad); bed at ten, up at six; sport makes me happy and active → a bad habit: sweets; yesterday two pieces of cake and a fizzy drink, then tired and slept badly → opinion and future: healthy food and sport matter; sweets once a week, more water, walking to school with my brother; we must look after our health.', find: ['ثَلَاثَ مَرَّاتٍ', 'عَادَةً سَيِّئَةً', 'أَمْسِ أَكَلْتُ', 'يَجِبُ أَنْ نَهْتَمَّ'], notes: 'Core model: simple sentences, numbers and frequency, a past sentence, an opinion and advice.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Present: a nourishing breakfast (energy until noon), eight glasses of water; as for fast food, I only rarely eat it (full of fat, sugar and salt) → sport three times a week, walking instead of the car, eight hours’ sleep (helps concentration, makes me calmer) → past: a year ago I drank fizzy drinks daily and stayed up until midnight, always tired; the school doctor advised me to change, so I did, step by step → it is true that change was hard at first, but now I am more active and happier; I will learn to cook healthy meals; “if all students followed this advice, their health and results would both improve”.', find: ['أَمَّا الوَجَبَاتُ السَّرِيعَةُ فَلَا', 'كُنْتُ أَشْرَبُ', 'نَصَحَنِي … بِأَنْ أُغَيِّرَ', 'لَوْ تَبِعَ … لَتَحَسَّنَتْ'], notes: 'Full-mark model: aḥriṣu ʿalā an, ammā … fa- with lā … illā, badalan min an, a past habit, advice with bi-an, a concession, comparatives and a conditional.' },
      { which: 'ب', level: 'Full', subtitle: 'whose responsibility?', text: Q3B_FULL, en: 'Then and now: children used to play outside for hours; as for today, many sit in front of screens eating fast food → opinion: some blame the family, others the school; both are responsible — families must offer healthy food, schools should teach the importance of sport and sleep, and offer affordable healthy meals → past: a school health campaign last month — a fruit day, posters on sugar; many students switched to water, and teachers joined in → it is true changing habits is hard, but possible with small steps and a little patience; “if every young person cared a little for their health each day, the whole of society would be stronger and happier”.', find: ['كَانَ الأَطْفَالُ يَلْعَبُونَ', 'يَرَى بَعْضُ النَّاسِ … وَيَرَى آخَرُونَ', 'يَجِبُ أَنْ تُقَدِّمَ', 'لَوِ اهْتَمَّ … لَأَصْبَحَ'], notes: 'Full-mark model for the Stretch title: past habits, ammā … fa-, balanced views, advice with yajibu / yanbaghī an, a past campaign, a concession and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; numbers correct (thamāniya sāʿāt).' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: advice with yajibu an / yanbaghī an + verb in -a.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: a past habit, a concession or a conditional.' },
  ],
};
write.lift[2].ar = 'كُنْتُ … أَمَّا الآنَ فَأُمَارِسُ …';

module.exports = { speak, write };
