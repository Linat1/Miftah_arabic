'use strict';
/* Exam-practice data · AT-A-L08 · Doctor, Pharmacy and Advice (advice with أَنْ + subjunctive; requests; instructions). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { n: 8, short: 'Doctor and Pharmacy', arShort: 'عِنْدَ الطَّبِيبِ وَفِي الصَّيْدَلِيَّةِ', fileTitle: 'Doctor_Pharmacy_and_Advice', title: 'Doctor, Pharmacy and Advice', ar: 'الطَّبِيبُ وَالصَّيْدَلِيَّةُ وَالنَّصِيحَةُ', icon: 'FaUserDoctor', grammar: 'advice with أَنْ + subjunctive; polite requests; medicine instructions' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: make an appointment, explain a problem to a doctor or pharmacist, ask for and give advice (anṣaḥuka an …), and understand medicine instructions.',
  words: [
    w(1, 'طَبِيبٌ', 'a doctor', [['m.', 'طَبِيبٌ'], ['f.', 'طَبِيبَةٌ'], ['pl.', 'أَطِبَّاءُ']]),
    w(2, 'صَيْدَلِيٌّ', 'a pharmacist', [['m.', 'صَيْدَلِيٌّ'], ['f.', 'صَيْدَلِيَّةٌ'], ['pl.', 'صَيَادِلَةٌ']]),
    w(3, 'مَوْعِدٌ', 'an appointment', [['sg.', 'مَوْعِدٌ'], ['pl.', 'مَوَاعِيدُ']]),
    w(4, 'دَوَاءٌ', 'a medicine', [['sg.', 'دَوَاءٌ'], ['pl.', 'أَدْوِيَةٌ']]),
    w(5, 'حَبَّةٌ · شَرَابٌ · مَرْهَمٌ', 'a tablet · syrup · cream', [['pl.', 'حُبُوبٌ']], { tag: 'kinds of medicine' }),
    w(6, 'وَصْفَةٌ طِبِّيَّةٌ', 'a prescription', [['sg.', 'وَصْفَةٌ'], ['pl.', 'وَصَفَاتٌ']]),
    w(7, 'أَنْصَحُكَ بِأَنْ …', 'I advise you to … (+ verb in -a)', [['you f.', 'أَنْصَحُكِ'], ['you pl.', 'أَنْصَحُكُمْ']], { tag: 'advice' }),
    w(8, 'خُذْ …', 'take … (imperative)', [['m.', 'خُذْ'], ['f.', 'خُذِي'], ['pl.', 'خُذُوا']]),
    w(9, 'ارْتَحْ', 'rest (imperative)', [['m.', 'ارْتَحْ'], ['f.', 'ارْتَاحِي'], ['pl.', 'ارْتَاحُوا']]),
    w(10, 'مَرَّتَيْنِ فِي اليَوْمِ', 'twice a day', null, { tag: 'dosage' }),
    w(11, 'قَبْلَ الأَكْلِ · بَعْدَ الأَكْلِ', 'before food · after food', null, { tag: 'instructions' }),
    w(12, 'هَلْ يُمْكِنُ أَنْ …؟', 'could I / could you …?', null, { tag: 'polite request' }),
  ],
  words1: { eyebrow: 'Language bank · people, places and medicine (m. · f. · pl.)', title: 'At the doctor and the pharmacy', ar: 'فِي العِيَادَةِ', notes: 'LANGUAGE BANK (2 min) — broken plurals to learn by heart: أَطِبَّاءُ · صَيَادِلَةٌ · مَوَاعِيدُ · أَدْوِيَةٌ. The place: الصَّيْدَلِيَّةُ (the pharmacy) — same spelling as the female pharmacist.' },
  words2: { eyebrow: 'Language bank · advice, instructions and requests', title: 'Giving advice — and following instructions', ar: 'النَّصَائِحُ وَالتَّعْلِيمَاتُ', notes: 'LANGUAGE BANK (2 min) — three ways to advise: يَجِبُ أَنْ تَرْتَاحَ · أَنْصَحُكَ بِأَنْ تَرْتَاحَ · ارْتَحْ! Polite request: هَلْ يُمْكِنُ أَنْ أَحْجِزَ مَوْعِدًا؟' },
  checkCore: 'made a polite request and explained the problem in full sentences',
  checkDevelop: 'gave or understood advice with an + verb in -a, and a dosage',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'phoning the clinic', title: 'Role play A — Booking an appointment', ar: 'أَحْجِزُ مَوْعِدًا', you: 'a patient', them: 'the clinic receptionist',
      tasks: [
        { core: true, ex: 'عِيَادَةُ الشِّفَاءِ، كَيْفَ أُسَاعِدُكَ؟', task: 'Ask for an appointment.', help: 'هَلْ يُمْكِنُ أَنْ أَحْجِزَ …؟', model: 'صَبَاحُ الخَيْرِ، هَلْ يُمْكِنُ أَنْ أَحْجِزَ مَوْعِدًا مَعَ الطَّبِيبِ؟', modelEn: 'Good morning, could I book an appointment with the doctor?' },
        { core: true, ex: 'مَا اسْمُكَ وَعُمْرُكَ؟', task: 'Give your name and age.', help: 'اسْمِي … وَعُمْرِي …', model: 'اسْمِي يُوسُفُ، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً.', modelEn: 'My name is Yusuf and I am fifteen.' },
        { core: true, ex: 'مَا المُشْكِلَةُ؟', task: 'Say what the problem is.', help: 'عِنْدِي … وَيُؤْلِمُنِي …', model: 'عِنْدِي حُمَّى، وَيُؤْلِمُنِي حَلْقِي مُنْذُ ثَلَاثَةِ أَيَّامٍ.', modelEn: 'I have a fever and my throat has hurt for three days.' },
        { core: true, ex: 'عِنْدَنَا مَوْعِدٌ غَدًا فِي العَاشِرَةِ أَوْ فِي الرَّابِعَةِ.', task: 'Choose a time and say why.', help: 'أُفَضِّلُ … لِأَنَّ …', model: 'أُفَضِّلُ السَّاعَةَ الرَّابِعَةَ، لِأَنَّ عِنْدِي امْتِحَانًا فِي الصَّبَاحِ.', modelEn: 'I prefer four o’clock, because I have an exam in the morning.' },
        { core: true, unexpected: true, ex: 'هَلْ عِنْدَكَ حَسَاسِيَّةٌ مِنْ أَيِّ دَوَاءٍ؟', task: 'Answer the unexpected question.', help: 'لَا، لَيْسَ عِنْدِي … / نَعَمْ، مِنْ …', model: 'لَا، لَيْسَ عِنْدِي حَسَاسِيَّةٌ مِنْ أَيِّ دَوَاءٍ.', modelEn: 'No, I am not allergic to any medicine.' },
      ],
      girl: 'أُسَاعِدُكِ · اسْمُكِ وَعُمْرُكِ · عِنْدَكِ',
      notes: 'Core: a polite request (هَلْ يُمْكِنُ أَنْ + verb in -a), personal details, the problem, a preference with a reason.',
    },
    {
      id: 'B', level: 'Core+', setting: 'at the pharmacy', title: 'Role play B — At the pharmacy', ar: 'فِي الصَّيْدَلِيَّةِ', you: 'a customer', them: 'the pharmacist',
      tasks: [
        { core: true, ex: 'أَهْلًا، تَفَضَّلْ.', task: 'Say what you need and for whom.', help: 'أُرِيدُ دَوَاءً لِـ…', model: 'أُرِيدُ دَوَاءً لِلسُّعَالِ لِأَخِي الصَّغِيرِ، مِنْ فَضْلِكِ.', modelEn: 'I would like some cough medicine for my little brother, please.' },
        { core: true, ex: 'كَمْ عُمْرُهُ؟', task: 'Say his age.', help: 'عُمْرُهُ …', model: 'عُمْرُهُ سَبْعُ سَنَوَاتٍ.', modelEn: 'He is seven years old.' },
        { ex: 'هٰذَا الشَّرَابُ مُنَاسِبٌ.', task: 'ASK how often he should take it.', help: 'كَمْ مَرَّةً يَجِبُ أَنْ …؟', model: 'كَمْ مَرَّةً يَجِبُ أَنْ يَأْخُذَهُ فِي اليَوْمِ؟', modelEn: 'How many times a day should he take it?' },
        { ex: 'مِلْعَقَةً ثَلَاثَ مَرَّاتٍ فِي اليَوْمِ، بَعْدَ الأَكْلِ.', task: 'Repeat the instructions to check.', help: 'إِذَنْ، مِلْعَقَةً … بَعْدَ …', model: 'إِذَنْ، مِلْعَقَةً وَاحِدَةً ثَلَاثَ مَرَّاتٍ فِي اليَوْمِ، بَعْدَ الأَكْلِ. شُكْرًا.', modelEn: 'So, one spoonful three times a day, after food. Thank you.' },
        { unexpected: true, ex: 'هَلْ تُرِيدُ شَيْئًا آخَرَ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، … / لَا، شُكْرًا، بِكَمْ …؟', model: 'لَا، شُكْرًا. بِكَمْ هٰذَا الشَّرَابُ؟', modelEn: 'No, thank you. How much is this syrup?' },
      ],
      girl: 'تَفَضَّلِي · تُرِيدِينَ — the candidate says لِأُخْتِي الصَّغِيرَةِ · عُمْرُهَا · تَأْخُذَهُ',
      notes: 'Task 3: the CANDIDATE asks. Task 4: checking by repeating = a real-life skill examiners reward. The pharmacist is a woman → مِنْ فَضْلِكِ.',
    },
    {
      id: 'C', level: 'Develop', setting: 'in the doctor’s room', title: 'Role play C — Seeing the doctor', ar: 'فِي غُرْفَةِ الطَّبِيبِ', you: 'a patient', them: 'the doctor',
      tasks: [
        { ex: 'تَفَضَّلْ اجْلِسْ. مَاذَا بِكَ؟', task: 'Describe two symptoms and how long.', help: 'عِنْدِي … وَ… مُنْذُ …', model: 'عِنْدِي صُدَاعٌ شَدِيدٌ وَدُوَارٌ مُنْذُ يَوْمِ الأَحَدِ.', modelEn: 'I have had a bad headache and dizziness since Sunday.' },
        { ex: 'هَلْ تَنَامُ جَيِّدًا؟ وَكَمْ سَاعَةً تَدْرُسُ؟', task: 'Explain your routine (a likely cause).', help: 'أَدْرُسُ … وَأَنَامُ … فَقَطْ', model: 'لَا، أَدْرُسُ حَتَّى مُنْتَصَفِ اللَّيْلِ لِلِامْتِحَانَاتِ، وَأَنَامُ خَمْسَ سَاعَاتٍ فَقَطْ.', modelEn: 'No, I study until midnight for the exams and only sleep five hours.' },
        { ex: 'أَنْصَحُكَ بِأَنْ تَنَامَ ثَمَانِيَ سَاعَاتٍ.', task: 'ASK what else you should do.', help: 'وَمَاذَا أَيْضًا …؟', model: 'وَمَاذَا يَجِبُ أَنْ أَفْعَلَ أَيْضًا؟ هَلْ أَحْتَاجُ إِلَى دَوَاءٍ؟', modelEn: 'And what else should I do? Do I need medicine?' },
        { ex: 'اشْرَبِ المَاءَ، وَخُذْ هٰذِهِ الحُبُوبَ عِنْدَ الصُّدَاعِ فَقَطْ.', task: 'Repeat the advice and say how you will follow it.', help: 'سَأَشْرَبُ … وَسَآخُذُ …', model: 'حَسَنًا، سَأَشْرَبُ المَاءَ كَثِيرًا، وَسَآخُذُ الحُبُوبَ عِنْدَ الصُّدَاعِ فَقَطْ.', modelEn: 'OK, I will drink lots of water and take the tablets only when I have a headache.' },
        { unexpected: true, ex: 'هَلْ تُمَارِسُ أَيَّ رِيَاضَةٍ هٰذِهِ الأَيَّامَ؟', task: 'Answer the unexpected question (past + present).', help: 'كُنْتُ … لٰكِنِّي الآنَ …', model: 'كُنْتُ أَلْعَبُ التِّنِسَ، لٰكِنِّي تَوَقَّفْتُ بِسَبَبِ الدِّرَاسَةِ.', modelEn: 'I used to play tennis, but I stopped because of studying.' },
      ],
      girl: 'تَفَضَّلِي اجْلِسِي · مَاذَا بِكِ · تَنَامِينَ · تَدْرُسِينَ · أَنْصَحُكِ بِأَنْ تَنَامِي · تُمَارِسِينَ',
      notes: 'Develop: symptoms + duration, a routine as a cause, a follow-up question, the future (sa-) and a past habit (kuntu + present).',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a radio phone-in', title: 'Role play D — Health radio phone-in', ar: 'بَرْنَامَجٌ صِحِّيٌّ فِي الرَّادْيُو', you: 'a young caller', them: 'the radio doctor',
      tasks: [
        { ex: 'أَهْلًا بِكَ فِي البَرْنَامَجِ. مَا سُؤَالُكَ؟', task: 'Explain your problem and its effect.', help: 'أَشْعُرُ بِـ… مِمَّا يُؤَثِّرُ فِي …', model: 'أَشْعُرُ بِالتَّعَبِ طُولَ الوَقْتِ، مِمَّا يُؤَثِّرُ فِي دِرَاسَتِي وَمِزَاجِي.', modelEn: 'I feel tired all the time, which affects my studies and my mood.' },
        { ex: 'مَاذَا جَرَّبْتَ حَتَّى الآنَ؟', task: 'Say what you have tried (past) and the result.', help: 'جَرَّبْتُ أَنْ … لٰكِنْ …', model: 'جَرَّبْتُ أَنْ أَشْرَبَ القَهْوَةَ، لٰكِنَّهَا جَعَلَتْنِي أَسْهَرُ أَكْثَرَ.', modelEn: 'I tried drinking coffee, but it made me stay up even later.' },
        { ex: 'هَلْ تَأْخُذُ فِيتَامِينَاتٍ بِدُونِ اسْتِشَارَةٍ؟', task: 'Answer and give your opinion with a reason.', help: 'لَا، لِأَنِّي أَعْتَقِدُ أَنَّ …', model: 'لَا، لِأَنِّي أَعْتَقِدُ أَنَّ أَخْذَ الدَّوَاءِ بِدُونِ اسْتِشَارَةِ الطَّبِيبِ خَطِيرٌ.', modelEn: 'No, because I believe taking medicine without consulting a doctor is dangerous.' },
        { ex: 'أَنْصَحُكَ بِأَنْ تُنَظِّمَ نَوْمَكَ وَتَتْرُكَ القَهْوَةَ.', task: 'Concede, then ask a follow-up question.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ … فَكَيْفَ …؟', model: 'صَحِيحٌ أَنَّ النَّوْمَ مُهِمٌّ، غَيْرَ أَنَّ الوَاجِبَاتِ كَثِيرَةٌ، فَكَيْفَ أُنَظِّمُ وَقْتِي؟', modelEn: 'It is true that sleep is important, but there is a lot of homework, so how do I organise my time?' },
        { unexpected: true, ex: 'لَوْ كُنْتَ وَزِيرَ الصِّحَّةِ، مَاذَا تَفْعَلُ لِلشَّبَابِ؟', task: 'Answer the unexpected question (a conditional).', help: 'لَوْ كُنْتُ …، لَـ…', model: 'لَوْ كُنْتُ وَزِيرَ الصِّحَّةِ، لَفَتَحْتُ عِيَادَةً مَجَّانِيَّةً لِلشَّبَابِ فِي كُلِّ مَدْرَسَةٍ.', modelEn: 'If I were health minister, I would open a free youth clinic in every school.' },
      ],
      girl: 'بِكِ · سُؤَالُكِ · جَرَّبْتِ · تَأْخُذِينَ · أَنْصَحُكِ بِأَنْ تُنَظِّمِي · كُنْتِ وَزِيرَةَ الصِّحَّةِ',
      notes: 'Stretch: mimmā (which …), jarrabtu an + verb in -a, jaʿalatnī, an opinion with a reason, a concession and a conditional.',
      modelFoot: 'Stretch: mimmā yuʾaththiru, jarrabtu an, aʿtaqidu anna, ṣaḥīḥun anna … ghayra anna and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'الطَّبِيبُ وَالدَّوَاءُ', aim: 'one full sentence per question',
      qs: [
        { q: 'مَتَى ذَهَبْتَ إِلَى الطَّبِيبِ آخِرَ مَرَّةٍ؟', en: 'When did you last go to the doctor?', start: 'ذَهَبْتُ إِلَى الطَّبِيبِ فِي …', model: 'ذَهَبْتُ إِلَى الطَّبِيبِ فِي الشَّهْرِ المَاضِي.', modelEn: 'I went to the doctor last month.' },
        { q: 'أَيْنَ الصَّيْدَلِيَّةُ القَرِيبَةُ مِنْ بَيْتِكَ؟', en: 'Where is the nearest pharmacy to your home?', start: 'الصَّيْدَلِيَّةُ … بِجَانِبِ …', model: 'الصَّيْدَلِيَّةُ فِي شَارِعِنَا، بِجَانِبِ المَخْبَزِ.', modelEn: 'The pharmacy is in our street, next to the bakery.' },
        { q: 'هَلْ تُحِبُّ أَنْ تَأْخُذَ الدَّوَاءَ؟', en: 'Do you like taking medicine?', start: 'لَا، لَا أُحِبُّ … لِأَنَّ …', model: 'لَا، لَا أُحِبُّ الدَّوَاءَ، لِأَنَّ طَعْمَهُ مُرٌّ.', modelEn: 'No, I don’t like medicine because it tastes bitter.' },
        { q: 'مَاذَا تَفْعَلُ عِنْدَمَا عِنْدَكَ زُكَامٌ؟', en: 'What do you do when you have a cold?', start: 'أَشْرَبُ … وَأَرْتَاحُ …', model: 'أَشْرَبُ الشَّايَ بِاللَّيْمُونِ، وَأَرْتَاحُ فِي البَيْتِ.', modelEn: 'I drink tea with lemon and rest at home.' },
        { q: 'هَلْ تُرِيدُ أَنْ تَكُونَ طَبِيبًا؟', en: 'Would you like to be a doctor?', start: 'نَعَمْ / لَا، … لِأَنَّ …', model: 'نَعَمْ، أُرِيدُ أَنْ أَكُونَ طَبِيبًا، لِأَنِّي أُحِبُّ أَنْ أُسَاعِدَ النَّاسَ.', modelEn: 'Yes, I want to be a doctor because I like helping people.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a place, a time or a reason = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'نَصَائِحُ صِحِّيَّةٌ', aim: 'two or three sentences, with advice and a past experience',
      qs: [
        { q: 'صِفْ زِيَارَتَكَ الأَخِيرَةَ لِلطَّبِيبِ.', en: 'Describe your last visit to the doctor.', start: 'ذَهَبْتُ لِأَنَّ … فَفَحَصَنِي … وَنَصَحَنِي بِأَنْ …', model: 'ذَهَبْتُ لِأَنَّ أُذُنِي كَانَتْ تُؤْلِمُنِي، فَفَحَصَنِي الطَّبِيبُ، وَنَصَحَنِي بِأَنْ أَسْتَعْمِلَ قَطْرَةً أُسْبُوعًا.', modelEn: 'I went because my ear hurt; the doctor examined me and advised me to use drops for a week.' },
        { q: 'بِمَاذَا تَنْصَحُ صَدِيقًا عِنْدَهُ زُكَامٌ؟', en: 'What would you advise a friend with a cold?', start: 'أَنْصَحُهُ بِأَنْ … وَأَلَّا …', model: 'أَنْصَحُهُ بِأَنْ يَرْتَاحَ وَيَشْرَبَ سَوَائِلَ دَافِئَةً، وَأَلَّا يَخْرُجَ فِي البَرْدِ.', modelEn: 'I advise him to rest and drink warm fluids, and not to go out in the cold.' },
        { q: 'هَلْ تَقْرَأُ تَعْلِيمَاتِ الدَّوَاءِ؟ لِمَاذَا؟', en: 'Do you read medicine instructions? Why?', start: 'نَعَمْ، أَقْرَؤُهَا لِأَنَّ …', model: 'نَعَمْ، أَقْرَؤُهَا دَائِمًا، لِأَنَّ بَعْضَ الأَدْوِيَةِ يَجِبُ أَنْ نَأْخُذَهَا بَعْدَ الأَكْلِ.', modelEn: 'Yes, I always read them, because some medicines must be taken after food.' },
        { q: 'مَا رَأْيُكَ فِي الطِّبِّ الشَّعْبِيِّ، مِثْلِ العَسَلِ وَالأَعْشَابِ؟', en: 'What do you think of home remedies like honey and herbs?', start: 'أَعْتَقِدُ أَنَّهُ مُفِيدٌ لِـ… لٰكِنْ …', model: 'أَعْتَقِدُ أَنَّ العَسَلَ مُفِيدٌ لِلْحَلْقِ، لٰكِنْ يَجِبُ أَنْ نَذْهَبَ إِلَى الطَّبِيبِ إِذَا كَانَ المَرَضُ شَدِيدًا.', modelEn: 'I think honey is good for the throat, but we must see a doctor if the illness is serious.' },
        { q: 'مَنْ فِي أُسْرَتِكَ يَعْمَلُ فِي مَجَالِ الصِّحَّةِ؟', en: 'Who in your family works in health?', start: 'خَالَتِي / عَمِّي … تَعْمَلُ / يَعْمَلُ …', model: 'خَالَتِي مُمَرِّضَةٌ، وَتَعْمَلُ فِي مُسْتَشْفًى كَبِيرٍ، وَهِيَ تَنْصَحُنَا دَائِمًا بِالنَّوْمِ المُبَكِّرِ.', modelEn: 'My aunt is a nurse; she works in a big hospital and always advises us to sleep early.' },
      ],
      foot: 'Develop: two or three sentences — advice with anṣaḥu … bi-an + verb in -a, a reason and a past visit.',
      modelFoot: 'Past visit + advice + reason + allā = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الدَّوَاءُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلْ يَأْخُذُ النَّاسُ أَدْوِيَةً أَكْثَرَ مِنَ اللَّازِمِ؟', en: 'Do people take more medicine than necessary?', start: 'نَعَمْ، فِي رَأْيِي … لِأَنَّهُمْ …', model: 'نَعَمْ، فِي رَأْيِي يَأْخُذُ كَثِيرٌ مِنَ النَّاسِ المُسَكِّنَاتِ عِنْدَ أَيِّ أَلَمٍ بَسِيطٍ، بَدَلًا مِنْ أَنْ يَرْتَاحُوا.', modelEn: 'Yes, I think many people take painkillers for any small pain instead of resting.' },
        { q: 'مَا الفَرْقُ بَيْنَ الطَّبِيبِ وَالصَّيْدَلِيِّ فِي رَأْيِكَ؟', en: 'What is the difference between a doctor and a pharmacist?', start: 'الطَّبِيبُ … أَمَّا الصَّيْدَلِيُّ فَـ…', model: 'الطَّبِيبُ يَفْحَصُ المَرِيضَ وَيَكْتُبُ الوَصْفَةَ، أَمَّا الصَّيْدَلِيُّ فَيَشْرَحُ كَيْفَ نَأْخُذُ الدَّوَاءَ.', modelEn: 'The doctor examines the patient and writes the prescription; the pharmacist explains how to take the medicine.' },
        { q: 'هَلِ الاسْتِشَارَةُ الطِّبِّيَّةُ عَبْرَ الإِنْتَرْنِتِ فِكْرَةٌ جَيِّدَةٌ؟', en: 'Are online medical consultations a good idea?', start: 'صَحِيحٌ أَنَّهَا … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا سَرِيعَةٌ وَتُوَفِّرُ الوَقْتَ، غَيْرَ أَنَّ الطَّبِيبَ لَا يَسْتَطِيعُ أَنْ يَفْحَصَ المَرِيضَ بِنَفْسِهِ.', modelEn: 'It is true they are quick and save time, but the doctor cannot examine the patient in person.' },
        { q: 'كَيْفَ تَغَيَّرَتْ خِدْمَاتُ الصِّحَّةِ مُنْذُ أَيَّامِ أَجْدَادِكَ؟', en: 'How have health services changed since your grandparents’ day?', start: 'فِي أَيَّامِ جَدِّي كَانَ … أَمَّا اليَوْمَ فَهُنَاكَ …', model: 'فِي أَيَّامِ جَدِّي كَانَ النَّاسُ يَمْشُونَ سَاعَاتٍ إِلَى أَقْرَبِ طَبِيبٍ، أَمَّا اليَوْمَ فَهُنَاكَ عِيَادَةٌ فِي كُلِّ حَيٍّ.', modelEn: 'In my grandfather’s day people walked for hours to the nearest doctor; today there is a clinic in every neighbourhood.' },
        { q: 'لَوْ أَصْبَحْتَ طَبِيبًا، أَيْنَ تُحِبُّ أَنْ تَعْمَلَ؟', en: 'If you became a doctor, where would you like to work?', start: 'لَوْ أَصْبَحْتُ طَبِيبًا، لَعَمِلْتُ فِي …', model: 'لَوْ أَصْبَحْتُ طَبِيبًا، لَعَمِلْتُ فِي قَرْيَةٍ بَعِيدَةٍ، لِأَنَّ أَهْلَهَا يَحْتَاجُونَ إِلَى الأَطِبَّاءِ أَكْثَرَ مِنْ غَيْرِهِمْ.', modelEn: 'If I became a doctor, I would work in a remote village, because its people need doctors more than others.' },
      ],
      foot: 'Stretch: badalan min an, ammā … fa-, a concession, past vs present and a conditional.',
      modelFoot: 'Stretch: badalan min an, ammā … fa-, ṣaḥīḥun anna … ghayra anna, kāna + present, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I made a polite request with hal yumkin an …?' },
    { route: 'core', text: 'I explained the problem: symptoms and how long.' },
    { route: 'develop', text: 'I gave or repeated advice with an + verb in -a (and allā).' },
    { route: 'develop', text: 'I asked a follow-up question in the role play.' },
    { route: 'stretch', text: 'I used a concession, ammā … fa- or a conditional.' },
  ],
};
speak.RP[1].tasks[0].help = 'أُرِيدُ دَوَاءً لِلسُّعَالِ …';
speak.RP[3].tasks[0].help = 'أَشْعُرُ بِالتَّعَبِ … مِمَّا يُؤَثِّرُ فِي …';
speak.RP[3].tasks[4].help = 'لَوْ كُنْتُ …، لَفَتَحْتُ …';
speak.CONV[1].qs[3].start = 'أَعْتَقِدُ أَنَّ العَسَلَ مُفِيدٌ … لٰكِنْ …';
speak.CONV[2].qs[1].start = 'الطَّبِيبُ … أَمَّا الصَّيْدَلِيُّ فَيَشْرَحُ …';

const Q2_CORE = `مَرْحَبًا يَا لَيْلَى،
كَيْفَ حَالُكِ؟ أَمْسِ ذَهَبْتُ إِلَى الطَّبِيبِ، لِأَنَّ حَلْقِي كَانَ يُؤْلِمُنِي، وَكَانَ عِنْدِي حُمَّى. فَحَصَنِي الطَّبِيبُ، وَقَالَ: «عِنْدَكِ التِهَابٌ فِي الحَلْقِ». بَعْدَ ذٰلِكَ ذَهَبْتُ إِلَى الصَّيْدَلِيَّةِ، وَاشْتَرَيْتُ شَرَابًا وَحُبُوبًا. آخُذُ الدَّوَاءَ ثَلَاثَ مَرَّاتٍ فِي اليَوْمِ بَعْدَ الأَكْلِ. نَصَحَنِي الطَّبِيبُ بِأَنْ أَرْتَاحَ فِي البَيْتِ يَوْمَيْنِ، وَأَنْ أَشْرَبَ المَاءَ كَثِيرًا. سَأَرْجِعُ إِلَى المَدْرَسَةِ يَوْمَ الأَحَدِ.
مَعَ السَّلَامَةِ،
مَرْيَمُ`;
const Q2_FULL = `عَزِيزَتِي لَيْلَى،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَقَدْ سَأَلْتِنِي لِمَاذَا غِبْتُ عَنِ المَدْرَسَةِ. أَمْسِ اسْتَيْقَظْتُ وَحَلْقِي يُؤْلِمُنِي بِشِدَّةٍ، وَكَانَتْ حَرَارَتِي مُرْتَفِعَةً، فَحَجَزَتْ لِي أُمِّي مَوْعِدًا فِي العِيَادَةِ. فَحَصَنِي الطَّبِيبُ بِعِنَايَةٍ، وَقَالَ إِنَّ عِنْدِي التِهَابًا فِي الحَلْقِ، ثُمَّ كَتَبَ لِي وَصْفَةً. فِي الصَّيْدَلِيَّةِ شَرَحَ لِي الصَّيْدَلِيُّ أَنْ آخُذَ حَبَّةً مَرَّتَيْنِ فِي اليَوْمِ بَعْدَ الأَكْلِ، خَمْسَةَ أَيَّامٍ. نَصَحَنِي الطَّبِيبُ بِأَنْ أَرْتَاحَ، وَأَلَّا أَشْرَبَ المَشْرُوبَاتِ البَارِدَةَ. أَشْعُرُ بِتَحَسُّنٍ اليَوْمَ، وَالحُمَّى أَقَلُّ مِنْ أَمْسِ، وَسَأَرْجِعُ إِلَى المَدْرَسَةِ يَوْمَ الإِثْنَيْنِ إِنْ شَاءَ اللّٰهُ.
هَلْ يُمْكِنُ أَنْ تُرْسِلِي لِي الوَاجِبَ؟
مَعَ مَحَبَّتِي،
مَرْيَمُ`;
const Q3A_CORE = `فِي الأُسْبُوعِ المَاضِي كُنْتُ مَرِيضَةً. فِي يَوْمِ الثُّلَاثَاءِ اسْتَيْقَظْتُ، وَكَانَتْ أُذُنِي تُؤْلِمُنِي كَثِيرًا، وَكَانَ عِنْدِي صُدَاعٌ. لَمْ أَذْهَبْ إِلَى المَدْرَسَةِ، وَبَقِيتُ فِي السَّرِيرِ، لِأَنِّي كُنْتُ مُتْعَبَةً جِدًّا.
اتَّصَلَتْ أُمِّي بِالعِيَادَةِ، وَحَجَزَتْ مَوْعِدًا فِي السَّاعَةِ الحَادِيَةَ عَشْرَةَ. ذَهَبْنَا بِالسَّيَّارَةِ، وَانْتَظَرْنَا عِشْرِينَ دَقِيقَةً. الطَّبِيبَةُ كَانَتْ لَطِيفَةً جِدًّا. سَأَلَتْنِي: «مُنْذُ مَتَى تُؤْلِمُكِ أُذُنُكِ؟» قُلْتُ: «مُنْذُ يَوْمَيْنِ». فَحَصَتْنِي، وَكَتَبَتْ لِي وَصْفَةً.
بَعْدَ ذٰلِكَ ذَهَبْنَا إِلَى الصَّيْدَلِيَّةِ. أَعْطَانَا الصَّيْدَلِيُّ قَطْرَةً لِلْأُذُنِ وَحُبُوبًا لِلصُّدَاعِ. قَالَ: «خُذِي الحُبُوبَ مَرَّتَيْنِ فِي اليَوْمِ بَعْدَ الأَكْلِ». فِي البَيْتِ نِمْتُ كَثِيرًا، وَشَرِبْتُ الشَّايَ بِالعَسَلِ.
الآنَ أَنَا بِخَيْرٍ، وَالحَمْدُ لِلّٰهِ. فِي رَأْيِي، يَجِبُ أَنْ نَذْهَبَ إِلَى الطَّبِيبِ عِنْدَمَا نَمْرَضُ، وَأَنْ نَقْرَأَ تَعْلِيمَاتِ الدَّوَاءِ. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَكُونَ طَبِيبَةً، لِأَنِّي أُحِبُّ أَنْ أُسَاعِدَ النَّاسَ.`;
const Q3A_FULL = `لَمْ أَكُنْ أُحِبُّ زِيَارَةَ الطَّبِيبِ عِنْدَمَا كُنْتُ صَغِيرَةً، لٰكِنَّ زِيَارَتِي الأَخِيرَةَ غَيَّرَتْ رَأْيِي. فِي الشَّهْرِ المَاضِي، بَعْدَ أُسْبُوعٍ مِنَ السَّهَرِ لِلِامْتِحَانَاتِ، بَدَأْتُ أَشْعُرُ بِدُوَارٍ وَصُدَاعٍ مُسْتَمِرٍّ، فَحَجَزَتْ لِي أُمِّي مَوْعِدًا فِي العِيَادَةِ القَرِيبَةِ مِنْ بَيْتِنَا.
اسْتَقْبَلَتْنِي الطَّبِيبَةُ بِابْتِسَامَةٍ، وَسَأَلَتْنِي عَنْ نَوْمِي وَأَكْلِي، ثُمَّ فَحَصَتْنِي بِعِنَايَةٍ. قَالَتْ إِنَّ المُشْكِلَةَ لَيْسَتْ مَرَضًا، بَلْ قِلَّةُ النَّوْمِ وَالمَاءِ، وَنَصَحَتْنِي بِأَنْ أَنَامَ ثَمَانِيَ سَاعَاتٍ، وَأَلَّا أَشْرَبَ القَهْوَةَ فِي المَسَاءِ، وَأَنْ أُطْفِئَ الهَاتِفَ قَبْلَ النَّوْمِ بِسَاعَةٍ.
لَمْ تَكْتُبْ لِي أَدْوِيَةً كَثِيرَةً، بَلْ فِيتَامِينًا وَاحِدًا آخُذُهُ مَرَّةً فِي اليَوْمِ بَعْدَ الفُطُورِ. وَفِي الصَّيْدَلِيَّةِ شَرَحَ لِي الصَّيْدَلِيُّ التَّعْلِيمَاتِ بِوُضُوحٍ، وَنَبَّهَنِي إِلَى أَلَّا آخُذَهُ عَلَى مَعِدَةٍ فَارِغَةٍ، وَقَالَ إِنَّ النَّتِيجَةَ سَتَظْهَرُ بَعْدَ أُسْبُوعَيْنِ.
تَعَلَّمْتُ أَنَّ الطَّبِيبَ الجَيِّدَ يُعَالِجُ السَّبَبَ لَا الأَعْرَاضَ فَقَطْ. صَحِيحٌ أَنَّ تَغْيِيرَ عَادَاتِي كَانَ صَعْبًا، غَيْرَ أَنِّي أَشْعُرُ الآنَ بِنَشَاطٍ أَكْبَرَ. وَلَوْ سَأَلَنِي أَحَدٌ عَنْ أَهَمِّ نَصِيحَةٍ، لَقُلْتُ: النَّوْمُ أَوَّلًا.`;
const Q3B_FULL = `صَارَ كَثِيرٌ مِنَ النَّاسِ اليَوْمَ يَأْخُذُونَ الدَّوَاءَ دُونَ أَنْ يَسْتَشِيرُوا الطَّبِيبَ؛ فَإِذَا شَعَرُوا بِصُدَاعٍ بَسِيطٍ أَخَذُوا مُسَكِّنًا، وَإِذَا أُصِيبُوا بِزُكَامٍ اشْتَرَوْا مُضَادًّا حَيَوِيًّا مِنَ الصَّيْدَلِيَّةِ. وَيَقُولُونَ إِنَّ ذٰلِكَ أَسْرَعُ وَأَرْخَصُ مِنْ زِيَارَةِ الطَّبِيبِ، خُصُوصًا عِنْدَمَا تَكُونُ العِيَادَاتُ مُزْدَحِمَةً.
فِي رَأْيِي، هٰذِهِ عَادَةٌ خَطِيرَةٌ، لِأَنَّ لِكُلِّ دَوَاءٍ آثَارًا جَانِبِيَّةً، وَلِأَنَّ المُضَادَّاتِ الحَيَوِيَّةَ لَا تُفِيدُ ضِدَّ الفَيْرُوسَاتِ. أَمَّا الطَّبِيبُ فَيَعْرِفُ تَارِيخَ المَرِيضِ، وَيَخْتَارُ الدَّوَاءَ المُنَاسِبَ وَالجُرْعَةَ الصَّحِيحَةَ، وَيُتَابِعُ حَالَتَهُ حَتَّى يُشْفَى.
فِي السَّنَةِ المَاضِيَةِ أَخَذَ أَخِي دَوَاءً لِصَدِيقِهِ عِنْدَمَا كَانَ مَرِيضًا، فَأُصِيبَ بَعْدَ سَاعَةٍ وَاحِدَةٍ بِحَسَاسِيَّةٍ شَدِيدَةٍ، وَاضْطُرَّ إِلَى الذَّهَابِ إِلَى المُسْتَشْفَى. مُنْذُ ذٰلِكَ اليَوْمِ تَعَلَّمَتْ أُسْرَتِي كُلُّهَا أَنْ تَقْرَأَ التَّعْلِيمَاتِ وَأَنْ تَسْأَلَ الصَّيْدَلِيَّ دَائِمًا.
صَحِيحٌ أَنَّ زِيَارَةَ الطَّبِيبِ تَأْخُذُ وَقْتًا، غَيْرَ أَنَّهَا أَكْثَرُ أَمَانًا. لِذٰلِكَ أَقْتَرِحُ أَنْ تُنَظِّمَ المَدَارِسُ دُرُوسًا عَنِ الاسْتِعْمَالِ الصَّحِيحِ لِلْأَدْوِيَةِ، وَلَوْ فَعَلَتْ ذٰلِكَ، لَقَلَّتِ الأَخْطَاءُ كَثِيرًا، وَلَحَمَيْنَا صِحَّةَ أُسَرِنَا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a pharmacy form, write an email about a visit to the doctor, and write an extended piece with advice (naṣaḥanī bi-an …) and instructions.',
  lift: [
    { ar: 'نَصَحَنِي الطَّبِيبُ بِأَنْ أَرْتَاحَ', en: 'the doctor advised me to rest' },
    { ar: 'وَأَلَّا أَشْرَبَ المَشْرُوبَاتِ البَارِدَةَ', en: 'and not to drink cold drinks' },
    { ar: 'آخُذُ حَبَّةً مَرَّتَيْنِ فِي اليَوْمِ بَعْدَ الأَكْلِ', en: 'I take a tablet twice a day after food' },
  ],
  checkTip: 'Check: naṣaḥa … bi-an + verb in -a; allā for “not to”; dosage = number + marra (marratayn, thalātha marrāt); female doctor → faḥaṣatnī, qālat.',
  FORM: {
    title: 'Pharmacy customer form', ar: 'اسْتِمَارَةُ الصَّيْدَلِيَّةِ',
    fields: [
      { core: true, ar: 'اسْمُ المَرِيضِ', en: 'Patient’s name', model: 'مَرْيَمُ أَحْمَدُ', modelEn: 'Maryam Ahmed' },
      { core: true, ar: 'العُمْرُ', en: 'Age', model: 'أَرْبَعَ عَشْرَةَ سَنَةً', modelEn: 'fourteen' },
      { core: true, ar: 'المُشْكِلَةُ', en: 'The problem', model: 'التِهَابٌ فِي الحَلْقِ', modelEn: 'a sore throat' },
      { core: true, ar: 'اسْمُ الطَّبِيبِ', en: 'Doctor’s name', model: 'الدُّكْتُورَةُ سَلْمَى', modelEn: 'Dr Salma' },
      { core: true, ar: 'نَوْعُ الدَّوَاءِ', en: 'Type of medicine', model: 'شَرَابٌ', modelEn: 'syrup' },
      { core: true, ar: 'كَمْ مَرَّةً فِي اليَوْمِ؟', en: 'How many times a day', model: 'ثَلَاثَ مَرَّاتٍ', modelEn: 'three times' },
      { ar: 'قَبْلَ الأَكْلِ أَمْ بَعْدَهُ؟', en: 'Before or after food', model: 'بَعْدَ الأَكْلِ', modelEn: 'after food' },
      { ar: 'جُمْلَةٌ: مَا نَصِيحَةُ الطَّبِيبِ؟', en: 'ONE sentence: the doctor’s advice', model: 'نَصَحَتْنِي بِأَنْ أَرْتَاحَ وَأَلَّا أَشْرَبَ المَاءَ البَارِدَ.', modelEn: 'She advised me to rest and not to drink cold water.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence (naṣaḥatnī bi-an …).',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 6: number + marra in the genitive plural (thalātha marrāt).',
  },
  Q2: {
    short: 'an email about a visit to the doctor', title: 'Question 2: a visit to the doctor', ar: 'رِسَالَةٌ عَنْ زِيَارَةِ الطَّبِيبِ',
    task: 'Your Arabic-speaking friend asked why you were absent. Write an email in Arabic of about 80–90 words. You must include: • why you went to the doctor • what the doctor did and said • what you bought at the pharmacy and how you take it • the doctor’s advice, and when you will return to school.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'A dosage (marratayn fī l-yawm …).', 'Advice with naṣaḥanī bi-an + verb in -a.', 'About 80–90 words.'],
    phrases: [['ذَهَبْتُ إِلَى الطَّبِيبِ لِأَنَّ …', 'I went to the doctor because …'], ['فَحَصَنِي وَقَالَ إِنَّ …', 'he examined me and said that …'], ['آخُذُ … مَرَّتَيْنِ فِي اليَوْمِ', 'I take … twice a day'], ['نَصَحَنِي بِأَنْ … وَأَلَّا …', 'he advised me to … and not to …']],
    rubric: [
      ['task', 'سَأَلَتْكِ صَدِيقَتُكِ لِمَاذَا غِبْتِ. اكْتُبِي لَهَا رِسَالَةً (٨٠–٩٠ كَلِمَةً).', 'Your friend asked why you were absent: write to her (80–90 words).'],
      ['1', 'لِمَاذَا ذَهَبْتِ إِلَى الطَّبِيبِ؟', 'Why you went to the doctor'],
      ['2', 'مَاذَا فَعَلَ الطَّبِيبُ؟ وَمَاذَا قَالَ؟', 'What the doctor did and said'],
      ['3', 'مَاذَا اشْتَرَيْتِ مِنَ الصَّيْدَلِيَّةِ؟ وَكَيْفَ تَأْخُذِينَهُ؟', 'What you bought; how you take it'],
      ['4', 'مَا نَصِيحَةُ الطَّبِيبِ؟ وَمَتَى سَتَرْجِعِينَ؟', 'The advice; when you will return'],
    ],
    qwords: 'لِمَاذَا (why) · مَاذَا (what) · كَيْفَ (how) · مَا (what) · مَتَى (when) — the rubric here speaks to a girl (ghibti, tarjiʿīna)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'أَمْسِ ذَهَبْتُ إِلَى الطَّبِيبِ لِأَنَّ ______ .', 'Yesterday I went to the doctor because …'],
      ['2', 'فَحَصَنِي الطَّبِيبُ، وَقَالَ: «______».', 'The doctor examined me and said: “…”'],
      ['3', 'اشْتَرَيْتُ ______ . آخُذُهُ ______ فِي اليَوْمِ.', 'I bought … I take it … a day.'],
      ['4', 'نَصَحَنِي بِأَنْ ______ . سَأَرْجِعُ يَوْمَ ______ .', 'He advised me to … I will return on …'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Layla, how are you? Yesterday I went to the doctor because my throat hurt and I had a fever. The doctor examined me and said: ‘You have a throat infection.’ After that I went to the pharmacy and bought syrup and tablets. I take the medicine three times a day after food. The doctor advised me to rest at home for two days and drink lots of water. I will come back to school on Sunday. Goodbye, Maryam.”',
      find: ['ذَهَبْتُ إِلَى الطَّبِيبِ', 'فَحَصَنِي', 'ثَلَاثَ مَرَّاتٍ', 'نَصَحَنِي … بِأَنْ أَرْتَاحَ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Layla, greetings. You asked me why I was absent from school. Yesterday I woke up with a very sore throat and a high temperature, so my mum booked me an appointment at the clinic. The doctor examined me carefully, said I had a throat infection, then wrote me a prescription. At the pharmacy the pharmacist explained that I should take one tablet twice a day after food, for five days. The doctor advised me to rest and not to drink cold drinks. I feel better today and the fever is lower than yesterday, and I will return to school on Monday, God willing. Could you send me the homework? With love, Maryam.”',
      find: ['فَحَجَزَتْ لِي أُمِّي مَوْعِدًا', 'قَالَ إِنَّ عِنْدِي', 'مَرَّتَيْنِ فِي اليَوْمِ بَعْدَ الأَكْلِ', 'وَأَلَّا أَشْرَبَ'],
    },
  },
  Q3: {
    a: { title: 'زِيَارَةٌ إِلَى الطَّبِيبِ', en: 'A visit to the doctor', bullets: 'لِمَاذَا ذَهَبْتَ؟ · مَاذَا حَدَثَ فِي العِيَادَةِ؟ · الدَّوَاءُ وَالنَّصَائِحُ · مَاذَا تَعَلَّمْتَ؟ وَمَا خُطَطُكَ؟', bulletsEn: 'Why you went · what happened at the clinic · the medicine and advice · what you learned; your plans' },
    b: { title: 'الدَّوَاءُ بِدُونِ اسْتِشَارَةٍ: خَطَرٌ أَمْ حَلٌّ سَرِيعٌ؟', en: 'Medicine without advice: danger or quick fix?', bullets: 'لِمَاذَا يَأْخُذُ النَّاسُ الدَّوَاءَ وَحْدَهُمْ؟ · دَوْرُ الطَّبِيبِ وَالصَّيْدَلِيِّ · تَجْرِبَةٌ تَعْرِفُهَا · رَأْيُكَ وَاقْتِرَاحَاتُكَ', bulletsEn: 'Why people self-medicate · the role of doctor and pharmacist · an experience you know · your opinion and suggestions' },
    plan: [
      'Start — why: symptoms + how long (mundhu …); kuntu + adjective.',
      'At the clinic — what the doctor did and said: faḥaṣanī, qāla inna …',
      'Medicine + advice — dosage (marratayn …), naṣaḥanī bi-an …, allā …',
      'End — what you learned + future: sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'نَصَحَنِي الطَّبِيبُ بِأَنْ أَرْتَاحَ.', en: 'past: the doctor advised me to rest.' },
      { ar: 'آخُذُ الدَّوَاءَ مَرَّتَيْنِ فِي اليَوْمِ.', en: 'present: I take the medicine twice a day.' },
      { ar: 'سَأَقْرَأُ التَّعْلِيمَاتِ دَائِمًا.', en: 'future: I will always read the instructions.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Last week: earache and a headache on Tuesday; no school, stayed in bed, very tired → Mum booked an appointment for eleven; a twenty-minute wait; a kind (female) doctor: “Since when?” “Two days”; a prescription → the pharmacy: ear drops and headache tablets, “twice a day after food”; sleep and honey tea → now well; we must see a doctor when ill and read medicine instructions; I want to be a doctor because I like helping people.', find: ['حَجَزَتْ مَوْعِدًا', 'مُنْذُ يَوْمَيْنِ', 'مَرَّتَيْنِ فِي اليَوْمِ', 'يَجِبُ أَنْ نَذْهَبَ'], notes: 'Core model: a clear past story, simple dialogue, a dosage, an opinion and a future wish — written by a girl (marīḍa, ṭabība).' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'I didn’t like doctors as a child, but my last visit changed my mind: after a week of late-night revision, dizziness and constant headaches → the doctor asked about sleep and food; not an illness but lack of sleep and water; advised eight hours’ sleep and no coffee in the evening, phone off an hour before bed → only one vitamin, once a day after breakfast; the pharmacist warned me not to take it on an empty stomach; results in two weeks → a good doctor treats the cause, not just the symptoms; it is true changing habits was hard, but I feel more energetic; “if anyone asked me for the most important advice, I would say: sleep first”.', find: ['لَمْ أَكُنْ أُحِبُّ', 'لَيْسَتْ مَرَضًا، بَلْ', 'نَبَّهَنِي إِلَى أَلَّا', 'لَوْ سَأَلَنِي … لَقُلْتُ'], notes: 'Full-mark model: lam akun + present, bal (rather), reported speech (qālat inna), advice with bi-an / allā, a concession and a conditional.' },
      { which: 'ب', level: 'Full', subtitle: 'medicine without advice', text: Q3B_FULL, en: 'Many people now take medicine without asking a doctor — a painkiller for a small headache, antibiotics for a cold, saying it is quicker and cheaper, especially when clinics are busy → dangerous: every medicine has side effects and antibiotics don’t work on viruses; as for the doctor, he knows the history and the right dose, and follows up until recovery → last year my brother took a friend’s medicine, within an hour had a severe allergy and went to hospital; since then my family reads the instructions and asks the pharmacist → it is true a doctor’s visit takes time, but it is safer; schools should teach the correct use of medicine; “if they did, mistakes would fall a lot and we would protect our families’ health”.', find: ['دُونَ أَنْ يَسْتَشِيرُوا', 'أَمَّا الطَّبِيبُ فَيَعْرِفُ', 'وَاضْطُرَّ إِلَى', 'لَوْ فَعَلَتْ … لَقَلَّتِ'], notes: 'Full-mark model for the Stretch title: idhā … (conditional habits), two reasons, ammā … fa-, a past example, a concession, a suggestion and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; the dosage is correct (thalātha marrāt).' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: naṣaḥanī bi-an + verb in -a, and allā.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: reported speech, a concession or a conditional.' },
  ],
};

module.exports = { speak, write };
