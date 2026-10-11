'use strict';
/* Exam-practice data · TD-L08 · Personal Qualities and Professional Skills (adjective agreement; relative clauses; li-anna). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'D', n: 8, short: 'Personal Qualities and Professional Skills', arShort: 'الصِّفَاتُ وَالمَهَارَاتُ', fileTitle: 'Personal_Qualities_and_Professional_Skills', title: 'Personal Qualities and Professional Skills', ar: 'الصِّفَاتُ الشَّخْصِيَّةُ وَالمَهَارَاتُ المِهْنِيَّةُ', icon: 'FaHandshake', grammar: 'adjective agreement (m. · f. · pl.: ṣabūr · ṣabūra · ṣubur); relative clauses (al-mumarriḍ alladhī yaḥtāju ilā …); reasons with li-anna / li-annahu / li-annahā' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: describe your strengths and weaknesses with adjectives that agree, match qualities to jobs with relative clauses (المُعَلِّمُ الَّذِي يَحْتَاجُ إِلَى الصَّبْرِ), and back up every claim with evidence (لِأَنِّي … · فَمَثَلًا …).',
  words: [
    w(1, 'صَبُورٌ', 'patient (m.)', [['f.', 'صَبُورَةٌ · صَبُورٌ'], ['patience', 'الصَّبْرُ']]),
    w(2, 'مُنَظَّمٌ', 'organised (m.)', [['f.', 'مُنَظَّمَةٌ'], ['pl.', 'مُنَظَّمُونَ'], ['organisation', 'التَّنْظِيمُ']]),
    w(3, 'مَسْؤُولٌ', 'responsible (m.)', [['f.', 'مَسْؤُولَةٌ'], ['responsibility', 'المَسْؤُولِيَّةُ']]),
    w(4, 'مُبْدِعٌ', 'creative (m.)', [['f.', 'مُبْدِعَةٌ'], ['creativity', 'الإِبْدَاعُ']]),
    w(5, 'اجْتِمَاعِيٌّ', 'sociable (m.)', [['f.', 'اجْتِمَاعِيَّةٌ'], ['shy', 'خَجُولٌ · خَجُولَةٌ']]),
    w(6, 'دَقِيقٌ', 'precise, careful (m.)', [['f.', 'دَقِيقَةٌ'], ['precision', 'الدِّقَّةُ']]),
    w(7, 'مُتَعَاوِنٌ', 'cooperative (m.)', [['f.', 'مُتَعَاوِنَةٌ'], ['teamwork', 'العَمَلُ الجَمَاعِيُّ']]),
    w(8, 'وَاثِقٌ مِنْ نَفْسِهِ', 'self-confident (m.)', [['f.', 'وَاثِقَةٌ مِنْ نَفْسِهَا'], ['confidence', 'الثِّقَةُ بِالنَّفْسِ']]),
    w(9, 'نُقْطَةُ قُوَّةٍ', 'a strength', [['pl.', 'نِقَاطُ القُوَّةِ'], ['a weakness', 'نُقْطَةُ ضَعْفٍ']]),
    w(10, 'يَحْتَاجُ إِلَى …', 'needs …', [['she', 'تَحْتَاجُ إِلَى'], ['the job needs', 'تَحْتَاجُ الوَظِيفَةُ إِلَى']], { tag: 'verb + ilā' }),
    w(11, 'الَّذِي · الَّتِي · الَّذِينَ', 'who (m. · f. · pl.)', [['the doctor who', 'الطَّبِيبُ الَّذِي'], ['nurses who', 'المُمَرِّضَاتُ اللَّوَاتِي']], { tag: 'relatives' }),
    w(12, 'لِأَنِّي · لِأَنَّهُ · لِأَنَّهَا', 'because I · he · she', [['for example', 'فَمَثَلًا'], ['the proof is', 'وَالدَّلِيلُ أَنَّ']], { tag: 'evidence' }),
  ],
  words1: { eyebrow: 'Language bank · qualities (m. · f. · noun)', title: 'Patient, organised, creative', ar: 'الصِّفَاتُ الشَّخْصِيَّةُ', notes: 'LANGUAGE BANK (2 min) — adjectives agree: أَنَا مُنَظَّمٌ / أَنَا مُنَظَّمَةٌ · أُخْتِي مُبْدِعَةٌ · زُمَلَائِي مُتَعَاوِنُونَ. Noun for the quality: الصَّبْرُ · الدِّقَّةُ · الإِبْدَاعُ. Note: صَبُورٌ is often the same for m. and f.' },
  words2: { eyebrow: 'Language bank · matching qualities to jobs', title: 'A job that needs …', ar: 'المِهْنَةُ الَّتِي تَحْتَاجُ إِلَى …', notes: 'LANGUAGE BANK (2 min) — المُمَرِّضُ يَحْتَاجُ إِلَى الصَّبْرِ · الوَظِيفَةُ الَّتِي تُنَاسِبُنِي … · الأَشْخَاصُ الَّذِينَ يُحِبُّونَ … Evidence: أَنَا مُنَظَّمٌ، فَمَثَلًا أَكْتُبُ جَدْوَلًا لِكُلِّ أُسْبُوعٍ.' },
  checkCore: 'described themselves with two qualities that agree',
  checkDevelop: 'matched a quality to a job with a relative clause and evidence',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a school prefect application', title: 'Role play A — Applying to be a prefect', ar: 'طَلَبُ أَنْ أَكُونَ مُشْرِفًا', you: 'a student', them: 'the head of year',
      tasks: [
        { core: true, ex: 'لِمَاذَا تُرِيدُ أَنْ تَكُونَ مُشْرِفًا؟', task: 'Give a reason.', help: 'لِأَنِّي أُحِبُّ …', model: 'لِأَنِّي أُحِبُّ مُسَاعَدَةَ الطُّلَّابِ الصِّغَارِ.', modelEn: 'Because I like helping younger students.' },
        { core: true, ex: 'صِفْ نَفْسَكَ بِكَلِمَتَيْنِ.', task: 'Give two qualities.', help: 'أَنَا … وَ…', model: 'أَنَا مَسْؤُولٌ وَمُنَظَّمٌ.', modelEn: 'I am responsible and organised.' },
        { core: true, ex: 'وَمَا نُقْطَةُ ضَعْفِكَ؟', task: 'Give one weakness.', help: 'أَحْيَانًا أَنَا …', model: 'أَحْيَانًا أَنَا خَجُولٌ قَلِيلًا.', modelEn: 'Sometimes I am a bit shy.' },
        { core: true, ex: 'المُشْرِفُ يَعْمَلُ فِي الاسْتِرَاحَةِ.', task: 'Ask how many days.', help: 'كَمْ يَوْمًا …؟', model: 'كَمْ يَوْمًا فِي الأُسْبُوعِ؟', modelEn: 'How many days a week?' },
        { core: true, unexpected: true, ex: 'مَا رَأْيُ أَصْدِقَائِكَ فِيكَ؟', task: 'Answer the unexpected question.', help: 'يَقُولُونَ إِنِّي …', model: 'يَقُولُونَ إِنِّي لَطِيفٌ وَمُتَعَاوِنٌ.', modelEn: 'They say I am kind and cooperative.' },
      ],
      girl: 'تُرِيدِينَ · مُشْرِفَةً · صِفِي نَفْسَكِ · ضَعْفِكِ · مَسْؤُولَةٌ وَمُنَظَّمَةٌ · خَجُولَةٌ · لَطِيفَةٌ وَمُتَعَاوِنَةٌ',
      notes: 'Core: adjectives that agree with the speaker (m. / f.), a verbal noun (musāʿada), kam yawman, yaqūlūna innī + adjective.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a careers quiz', title: 'Role play B — Which job suits me?', ar: 'أَيُّ وَظِيفَةٍ تُنَاسِبُنِي؟', you: 'a student', them: 'a careers adviser',
      tasks: [
        { core: true, ex: 'مَا نِقَاطُ قُوَّتِكَ؟', task: 'Give two strengths.', help: 'أَنَا … وَ…', model: 'أَنَا مُبْدِعٌ وَصَبُورٌ.', modelEn: 'I am creative and patient.' },
        { core: true, ex: 'أَعْطِنِي مِثَالًا.', task: 'Give evidence.', help: 'فَمَثَلًا …', model: 'فَمَثَلًا أَرْسُمُ كُلَّ يَوْمٍ، وَأُعَلِّمُ أَخِي الصَّغِيرَ القِرَاءَةَ.', modelEn: 'For example, I draw every day and teach my little brother to read.' },
        { ex: 'رُبَّمَا تُنَاسِبُكَ مِهْنَةُ المُعَلِّمِ.', task: 'ASK what qualities a teacher needs.', help: 'مَا الصِّفَاتُ الَّتِي …؟', model: 'مَا الصِّفَاتُ الَّتِي يَحْتَاجُ إِلَيْهَا المُعَلِّمُ؟', modelEn: 'What qualities does a teacher need?' },
        { ex: 'الصَّبْرُ وَالتَّنْظِيمُ وَالثِّقَةُ.', task: 'Say which you have and which you lack.', help: 'عِنْدِي … لٰكِنِّي أَحْتَاجُ إِلَى …', model: 'عِنْدِي الصَّبْرُ، لٰكِنِّي أَحْتَاجُ إِلَى ثِقَةٍ أَكْبَرَ عِنْدَمَا أَتَكَلَّمُ أَمَامَ النَّاسِ.', modelEn: 'I have patience, but I need more confidence when I speak in public.' },
        { unexpected: true, ex: 'وَمَاذَا عَنْ مِهْنَةِ المُصَمِّمِ؟', task: 'Answer the unexpected question (compare).', help: 'تُنَاسِبُنِي أَكْثَرَ لِأَنَّ …', model: 'رُبَّمَا تُنَاسِبُنِي أَكْثَرَ، لِأَنَّ المُصَمِّمَ يَحْتَاجُ إِلَى الإِبْدَاعِ، وَهِيَ أَقْوَى صِفَةٍ عِنْدِي.', modelEn: 'It might suit me more, because designers need creativity, my strongest quality.' },
      ],
      girl: 'قُوَّتِكِ · أَعْطِينِي · تُنَاسِبُكِ · مُبْدِعَةٌ وَصَبُورٌ',
      notes: 'Core+: adjective agreement, fa-mathalan evidence, the CANDIDATE asks with allatī … ilayhā, ʿindī + noun vs aḥtāju ilā, a superlative (aqwā ṣifatin).',
    },
    {
      id: 'C', level: 'Develop', setting: 'a team-project review', title: 'Role play C — Who does what in our team?', ar: 'تَوْزِيعُ الأَدْوَارِ', you: 'the team leader', them: 'your teacher',
      tasks: [
        { ex: 'كَيْفَ وَزَّعْتُمُ الأَدْوَارَ فِي الفَرِيقِ؟', task: 'Explain with qualities (past).', help: 'اخْتَرْنَا … لِأَنَّهُ / لِأَنَّهَا …', model: 'اخْتَرْنَا سَارَةَ لِلتَّصْمِيمِ لِأَنَّهَا مُبْدِعَةٌ، وَعُمَرَ لِلْحِسَابَاتِ لِأَنَّهُ دَقِيقٌ جِدًّا.', modelEn: 'We chose Sara for design because she is creative, and Omar for the calculations because he is very precise.' },
        { ex: 'وَأَنْتَ، لِمَاذَا أَصْبَحْتَ القَائِدَ؟', task: 'Justify with evidence.', help: 'لِأَنِّي … فَمَثَلًا …', model: 'لِأَنِّي مُنَظَّمٌ وَأُحِبُّ المَسْؤُولِيَّةَ؛ فَمَثَلًا صَنَعْتُ جَدْوَلًا لِلْمَهَامِّ، وَكُنْتُ أُذَكِّرُ الجَمِيعَ بِالمَوَاعِيدِ.', modelEn: 'I’m organised and like responsibility — I made a task chart and reminded everyone of deadlines.' },
        { ex: 'هَلْ وَاجَهْتُمْ مُشْكِلَةً؟', task: 'Describe a problem and the quality that solved it.', help: 'نَعَمْ، … فَـ…', model: 'نَعَمْ، اخْتَلَفَ عُضْوَانِ فِي الفَرِيقِ، فَاسْتَمَعْتُ إِلَيْهِمَا بِصَبْرٍ، ثُمَّ جَمَعْنَا الفِكْرَتَيْنِ مَعًا.', modelEn: 'Yes, two members disagreed; I listened patiently, then we combined both ideas.' },
        { ex: 'مَا الصِّفَةُ الَّتِي تُرِيدُ أَنْ تُطَوِّرَهَا؟', task: 'Name it with a reason and a plan.', help: 'الصِّفَةُ الَّتِي … لِذٰلِكَ سَـ…', model: 'الصِّفَةُ الَّتِي أُرِيدُ أَنْ أُطَوِّرَهَا هِيَ الحَزْمُ، لِأَنِّي أَتْرُكُ النَّاسَ يَتَأَخَّرُونَ، لِذٰلِكَ سَأُحَدِّدُ مَوَاعِيدَ وَاضِحَةً.', modelEn: 'Firmness — I let people be late, so I’ll set clear deadlines.' },
        { unexpected: true, ex: 'لَوْ أَعَدْتَ المَشْرُوعَ، مَاذَا تُغَيِّرُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ أَعَدْتُهُ، لَـ…', model: 'لَوْ أَعَدْتُهُ، لَطَلَبْتُ مِنْ كُلِّ عُضْوٍ أَنْ يَخْتَارَ دَوْرَهُ بِنَفْسِهِ، لِأَنَّ النَّاسَ يَعْمَلُونَ أَفْضَلَ فِيمَا يُحِبُّونَ.', modelEn: 'If I did it again, I’d let each member choose their role, because people work better at what they love.' },
      ],
      girl: 'أَصْبَحْتِ القَائِدَةَ · مُنَظَّمَةٌ · تُرِيدِينَ · أَعَدْتِ',
      notes: 'Develop: li-annahu vs li-annahā by person, fa-mathalan + kuntu + present, a dual (ʿuḍwān, ilayhimā), allatī + returning pronoun, li-dhālika sa-, law … la-.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a leadership interview', title: 'Role play D — Are leaders born or made?', ar: 'هَلْ يُولَدُ القَائِدُ أَمْ يُصْنَعُ؟', you: 'a student leadership-award nominee', them: 'the award panel chair',
      tasks: [
        { ex: 'هَلِ القِيَادَةُ مَوْهِبَةٌ أَمْ مَهَارَةٌ تُتَعَلَّمُ؟', task: 'Give a balanced view.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، يُولَدُ بَعْضُ النَّاسِ وَاثِقِينَ وَاجْتِمَاعِيِّينَ، وَمِنْ نَاحِيَةٍ أُخْرَى، يُمْكِنُ تَعَلُّمُ مَهَارَاتِ القِيَادَةِ بِالتَّدْرِيبِ وَالتَّجْرِبَةِ.', modelEn: 'Some are born confident and sociable, but leadership skills can be learnt through training and experience.' },
        { ex: 'وَأَنْتَ؟', task: 'Give your own example (past → present).', help: 'كُنْتُ … أَمَّا الآنَ فَـ…', model: 'كُنْتُ خَجُولًا جِدًّا فِي الابْتِدَائِيَّةِ، أَمَّا الآنَ فَأُقَدِّمُ الاجْتِمَاعَاتِ الصَّبَاحِيَّةَ أَمَامَ خَمْسِمِئَةِ طَالِبٍ.', modelEn: 'I was very shy in primary; now I present assemblies to five hundred students.' },
        { ex: 'مَا الَّذِي غَيَّرَكَ؟', task: 'Explain the cause with a relative clause.', help: 'المُعَلِّمَةُ الَّتِي … فَـ…', model: 'المُعَلِّمَةُ الَّتِي شَجَّعَتْنِي عَلَى الانْضِمَامِ إِلَى نَادِي المُنَاظَرَاتِ؛ فَقَدْ آمَنَتْ بِي قَبْلَ أَنْ أُؤْمِنَ بِنَفْسِي.', modelEn: 'The teacher who encouraged me to join the debate club — she believed in me before I believed in myself.' },
        { ex: 'أَلَيْسَتِ الصِّفَاتُ أَهَمَّ مِنَ الشَّهَادَاتِ؟', task: 'Concede and qualify.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الشَّهَادَةَ وَحْدَهَا لَا تَكْفِي، غَيْرَ أَنَّ الصِّفَاتِ الجَيِّدَةَ بِلَا مَعْرِفَةٍ لَا تَبْنِي جِسْرًا وَلَا تُعَالِجُ مَرِيضًا.', modelEn: 'A certificate alone isn’t enough, but good qualities without knowledge can’t build a bridge or treat a patient.' },
        { unexpected: true, ex: 'لَوِ اسْتَطَعْتَ أَنْ تَكْتَسِبَ صِفَةً وَاحِدَةً فَوْرًا، مَاذَا تَخْتَارُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوِ اسْتَطَعْتُ، لَاخْتَرْتُ …', model: 'لَوِ اسْتَطَعْتُ، لَاخْتَرْتُ الصَّبْرَ، لِأَنَّهُ الصِّفَةُ الَّتِي تَجْعَلُ كُلَّ الصِّفَاتِ الأُخْرَى تَنْمُو.', modelEn: 'Patience — the quality that lets all the others grow.' },
      ],
      girl: 'غَيَّرَكِ · خَجُولَةً · اسْتَطَعْتِ',
      notes: 'Stretch: passives (yūladu, yuṣnaʿu, tutaʿallamu), a plural adjective in the accusative (wāthiqīna), kuntu vs ammā … fa-, khamsimiʾati ṭālibin, allatī + verb, qabla an, a concession with lā … wa-lā, law … la-.',
      modelFoot: 'Stretch: balance, a personal transformation, cause with a relative clause, a qualified concession and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'شَخْصِيَّتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'صِفْ شَخْصِيَّتَكَ.', en: 'Describe your personality.', start: 'أَنَا … وَ…', model: 'أَنَا اجْتِمَاعِيٌّ وَمُتَعَاوِنٌ.', modelEn: 'I am sociable and cooperative.' },
        { q: 'مَا نُقْطَةُ قُوَّتِكَ؟', en: 'What is your strength?', start: 'نُقْطَةُ قُوَّتِي …', model: 'نُقْطَةُ قُوَّتِي التَّنْظِيمُ.', modelEn: 'My strength is organisation.' },
        { q: 'مَا نُقْطَةُ ضَعْفِكَ؟', en: 'What is your weakness?', start: 'أَحْيَانًا أَنَا …', model: 'أَحْيَانًا أَنَا كَسُولٌ فِي الصَّبَاحِ!', modelEn: 'Sometimes I’m lazy in the morning!' },
        { q: 'صِفْ صَدِيقَكَ المُفَضَّلَ.', en: 'Describe your best friend.', start: 'صَدِيقِي … / صَدِيقَتِي …', model: 'صَدِيقَتِي مَرَحَةٌ وَصَادِقَةٌ.', modelEn: 'My friend (f.) is fun and honest.' },
        { q: 'هَلْ تُحِبُّ العَمَلَ فِي فَرِيقٍ؟', en: 'Do you like working in a team?', start: 'نَعَمْ، لِأَنِّي …', model: 'نَعَمْ، لِأَنِّي أَتَعَلَّمُ مِنَ الآخَرِينَ.', modelEn: 'Yes, because I learn from others.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + adjectives that agree = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'الصِّفَاتُ وَالمِهَنُ', aim: 'two or three sentences, with a relative clause and evidence',
      qs: [
        { q: 'مَا الصِّفَاتُ الَّتِي يَحْتَاجُ إِلَيْهَا الطَّبِيبُ؟', en: 'What qualities does a doctor need?', start: 'يَحْتَاجُ الطَّبِيبُ إِلَى … لِأَنَّ …', model: 'يَحْتَاجُ الطَّبِيبُ إِلَى الدِّقَّةِ وَالهُدُوءِ، لِأَنَّ خَطَأً صَغِيرًا قَدْ يَكُونُ خَطِيرًا جِدًّا.', modelEn: 'Precision and calm, because a small mistake can be very dangerous.' },
        { q: 'أَعْطِ مِثَالًا عَلَى صِفَةٍ إِيجَابِيَّةٍ عِنْدَكَ.', en: 'Give an example of a positive quality you have.', start: 'أَنَا … فَمَثَلًا …', model: 'أَنَا مَسْؤُولٌ؛ فَمَثَلًا أَعْتَنِي بِأَخِي الصَّغِيرِ بَعْدَ المَدْرَسَةِ حَتَّى يَعُودَ وَالِدَايَ مِنَ العَمَلِ.', modelEn: 'I’m responsible: I look after my little brother after school until my parents get home.' },
        { q: 'صِفْ شَخْصًا تُعْجِبُكَ صِفَاتُهُ.', en: 'Describe someone whose qualities you admire.', start: 'أُعْجَبُ بِـ … الَّذِي / الَّتِي …', model: 'أُعْجَبُ بِجَدَّتِي الَّتِي رَبَّتْ سِتَّةَ أَطْفَالٍ وَعَمِلَتْ فِي الوَقْتِ نَفْسِهِ، لِأَنَّهَا قَوِيَّةٌ وَصَبُورَةٌ.', modelEn: 'My grandmother, who raised six children while working — she is strong and patient.' },
        { q: 'هَلْ تَغَيَّرَتْ شَخْصِيَّتُكَ؟', en: 'Has your personality changed?', start: 'كُنْتُ … أَمَّا الآنَ فَـ…', model: 'كُنْتُ عَصَبِيًّا وَأَنَا صَغِيرٌ، أَمَّا الآنَ فَأَصْبَحْتُ أَهْدَأَ بِفَضْلِ الرِّيَاضَةِ.', modelEn: 'I was short-tempered as a child; now I’m calmer thanks to sport.' },
        { q: 'أَيُّ وَظِيفَةٍ تُنَاسِبُ شَخْصِيَّتَكَ؟', en: 'Which job suits your personality?', start: 'تُنَاسِبُنِي … لِأَنِّي …', model: 'تُنَاسِبُنِي وَظِيفَةُ المُهَنْدِسِ، لِأَنِّي دَقِيقٌ، وَأُحِبُّ حَلَّ المُشْكِلَاتِ.', modelEn: 'Engineering — I’m precise and love solving problems.' },
      ],
      foot: 'Develop: two or three sentences — agreement, allatī / alladhī with a verb, and evidence (fa-mathalan).',
      modelFoot: 'Agreement + relative clause + evidence = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الشَّخْصِيَّةُ وَالنَّجَاحُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلِ الشَّخْصِيَّةُ أَهَمُّ مِنَ الشَّهَادَاتِ فِي العَمَلِ؟', en: 'Is personality more important than qualifications at work?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الشَّهَادَاتِ تَفْتَحُ البَابَ، غَيْرَ أَنَّ الصِّفَاتِ كَالأَمَانَةِ وَالتَّعَاوُنِ هِيَ الَّتِي تَجْعَلُكَ تَبْقَى وَتَتَقَدَّمُ.', modelEn: 'Qualifications open the door, but qualities like honesty and cooperation keep you there and help you progress.' },
        { q: 'هَلْ يُمْكِنُ أَنْ يُغَيِّرَ الإِنْسَانُ شَخْصِيَّتَهُ؟', en: 'Can people change their personality?', start: 'أَعْتَقِدُ أَنَّ … بِدَلِيلِ أَنَّ …', model: 'أَعْتَقِدُ أَنَّهُ يَسْتَطِيعُ أَنْ يُطَوِّرَهَا، بِدَلِيلِ أَنَّ أَخِي الخَجُولَ أَصْبَحَ مُعَلِّمًا يَتَكَلَّمُ أَمَامَ الصَّفِّ كُلَّ يَوْمٍ.', modelEn: 'You can develop it — my shy brother became a teacher who speaks to a class every day.' },
        { q: 'هَلِ الانْطِوَائِيُّونَ أَقَلُّ نَجَاحًا فِي العَمَلِ؟', en: 'Are introverts less successful at work?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، قَدْ يَجِدُونَ الاجْتِمَاعَاتِ صَعْبَةً، وَمِنْ نَاحِيَةٍ أُخْرَى، يَتَمَيَّزُونَ بِالتَّرْكِيزِ وَالاسْتِمَاعِ الجَيِّدِ.', modelEn: 'They may find meetings hard, but they stand out for focus and good listening.' },
        { q: 'مَا الصِّفَاتُ الَّتِي سَيَحْتَاجُ إِلَيْهَا عُمَّالُ المُسْتَقْبَلِ؟', en: 'What qualities will future workers need?', start: 'سَيَحْتَاجُونَ إِلَى … لِأَنَّ …', model: 'سَيَحْتَاجُونَ إِلَى المُرُونَةِ وَحُبِّ التَّعَلُّمِ، لِأَنَّ الآلَاتِ سَتَقُومُ بِالأَعْمَالِ المُتَكَرِّرَةِ.', modelEn: 'Flexibility and a love of learning, because machines will do repetitive work.' },
        { q: 'لَوْ كُنْتَ مُدِيرًا، أَيَّ مُوَظَّفٍ تَخْتَارُ؟', en: 'If you were a manager, which employee would you choose?', start: 'لَوْ كُنْتُ مُدِيرًا، لَاخْتَرْتُ …', model: 'لَوْ كُنْتُ مُدِيرًا، لَاخْتَرْتُ المُوَظَّفَ الَّذِي يَعْتَرِفُ بِأَخْطَائِهِ وَيَتَعَلَّمُ مِنْهَا، لَا الَّذِي يَدَّعِي أَنَّهُ لَا يُخْطِئُ.', modelEn: 'The one who admits mistakes and learns from them, not one who claims never to err.' },
      ],
      foot: 'Stretch: a concession, bi-dalīli anna, a balanced view, a future relative clause and law … la- with lā contrast.',
      modelFoot: 'Stretch: ṣaḥīḥun anna … ghayra anna, evidence, balance and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I described myself with qualities that agree (m. / f.).' },
    { route: 'core', text: 'I gave a strength and a weakness.' },
    { route: 'develop', text: 'I matched qualities to a job with alladhī / allatī.' },
    { route: 'develop', text: 'I gave evidence with fa-mathalan.' },
    { route: 'stretch', text: 'I gave a balanced view, a concession or law … la-.' },
  ],
};
speak.RP[2].tasks[0].help = 'اخْتَرْنَا … لِأَنَّهَا … وَ… لِأَنَّهُ …';
speak.RP[2].tasks[2].help = 'نَعَمْ، اخْتَلَفَ … فَاسْتَمَعْتُ …';
speak.RP[2].tasks[3].help = 'الصِّفَةُ الَّتِي … لِذٰلِكَ سَأُحَدِّدُ …';
speak.RP[2].tasks[4].help = 'لَوْ أَعَدْتُهُ، لَطَلَبْتُ …';
speak.RP[3].tasks[1].help = 'كُنْتُ … أَمَّا الآنَ فَأُقَدِّمُ …';
speak.RP[3].tasks[2].help = 'المُعَلِّمَةُ الَّتِي … فَقَدْ …';
speak.CONV[1].qs[2].start = 'أُعْجَبُ بِجَدَّتِي الَّتِي …';
speak.CONV[1].qs[3].start = 'كُنْتُ … أَمَّا الآنَ فَأَصْبَحْتُ …';

const Q2_CORE = `إِلَى مُدِيرِ المُخَيَّمِ الصَّيْفِيِّ،
اسْمِي لَيْلَى، وَعُمْرِي سَبْعَ عَشْرَةَ سَنَةً. رَأَيْتُ إِعْلَانَكُمْ عَنْ وَظِيفَةِ مُسَاعِدَةٍ فِي المُخَيَّمِ، وَأُرِيدُ أَنْ أَتَقَدَّمَ لَهَا. أَنَا صَبُورَةٌ وَمُنَظَّمَةٌ وَاجْتِمَاعِيَّةٌ. فَمَثَلًا أُسَاعِدُ أَخِي الصَّغِيرَ فِي وَاجِبَاتِهِ كُلَّ يَوْمٍ. فِي الصَّيْفِ المَاضِي تَطَوَّعْتُ فِي نَادٍ لِلْأَطْفَالِ، وَكَانَتْ تَجْرِبَةً مُمْتِعَةً. نُقْطَةُ ضَعْفِي أَنِّي خَجُولَةٌ قَلِيلًا، لٰكِنِّي أُحَاوِلُ أَنْ أَتَحَسَّنَ. فِي رَأْيِي، هٰذِهِ الوَظِيفَةُ تُنَاسِبُنِي، لِأَنِّي أُحِبُّ الأَطْفَالَ. سَأَكُونُ مُتَاحَةً مِنْ يُولْيُو إِلَى أُغُسْطُسَ.
مَعَ الشُّكْرِ،
لَيْلَى`;
const Q2_FULL = `حَضْرَةَ مُدِيرِ المُخَيَّمِ الصَّيْفِيِّ المُحْتَرَمِ،
أَتَقَدَّمُ بِطَلَبِ وَظِيفَةِ المُسَاعِدَةِ الَّتِي أَعْلَنْتُمْ عَنْهَا، لِأَنَّنِي أُؤْمِنُ بِأَنَّ صِفَاتِي تُنَاسِبُ العَمَلَ مَعَ الأَطْفَالِ. فَأَنَا صَبُورَةٌ وَمُنَظَّمَةٌ، وَأَعْرِفُ كَيْفَ أُحَوِّلُ النَّشَاطَ البَسِيطَ إِلَى لُعْبَةٍ مُمْتِعَةٍ. وَقَدْ تَطَوَّعْتُ الصَّيْفَ المَاضِي فِي نَادٍ لِلْأَطْفَالِ، حَيْثُ كُنْتُ مَسْؤُولَةً عَنْ مَجْمُوعَةٍ مِنْ عَشَرَةِ أَطْفَالٍ، فَتَعَلَّمْتُ أَنْ أَحُلَّ الخِلَافَاتِ بِهُدُوءٍ. صَحِيحٌ أَنَّنِي كُنْتُ خَجُولَةً فِي البِدَايَةِ، غَيْرَ أَنَّ هٰذِهِ التَّجْرِبَةَ زَادَتْ ثِقَتِي بِنَفْسِي كَثِيرًا. وَسَأَكُونُ مُتَاحَةً طُوالَ يُولْيُو وَأُغُسْطُسَ، وَيُسْعِدُنِي أَنْ أُرْسِلَ لَكُمْ رِسَالَةَ تَوْصِيَةٍ مِنْ مُدِيرَةِ النَّادِي.
وَتَفَضَّلُوا بِقَبُولِ فَائِقِ الاحْتِرَامِ،
لَيْلَى`;
const Q3A_CORE = `أَنَا شَخْصٌ اجْتِمَاعِيٌّ وَمُتَعَاوِنٌ. أُحِبُّ العَمَلَ فِي فَرِيقٍ، وَأُحِبُّ مُسَاعَدَةَ الآخَرِينَ. أَنَا أَيْضًا مُنَظَّمٌ؛ فَمَثَلًا أَكْتُبُ جَدْوَلًا لِوَاجِبَاتِي كُلَّ أُسْبُوعٍ، وَلَا أَتَأَخَّرُ أَبَدًا عَنِ المَوَاعِيدِ.
لٰكِنْ عِنْدِي نُقْطَةُ ضَعْفٍ: أَنَا عَصَبِيٌّ أَحْيَانًا، خُصُوصًا عِنْدَمَا أَكُونُ تَعْبَانَ. أُحَاوِلُ أَنْ أَكُونَ أَهْدَأَ، وَأَلْعَبُ الرِّيَاضَةَ لِكَيْ أَتَحَكَّمَ فِي أَعْصَابِي.
فِي السَّنَةِ المَاضِيَةِ كُنْتُ قَائِدَ فَرِيقٍ فِي مَشْرُوعِ العُلُومِ. كَانَ فِي الفَرِيقِ أَرْبَعَةُ طُلَّابٍ. اخْتَرْتُ سَارَةَ لِلرَّسْمِ لِأَنَّهَا مُبْدِعَةٌ، وَيُوسُفَ لِلْحِسَابَاتِ لِأَنَّهُ دَقِيقٌ. عَمِلْنَا مَعًا ثَلَاثَةَ أَسَابِيعَ، وَحَصَلْنَا عَلَى أَعْلَى دَرَجَةٍ فِي الصَّفِّ. كُنْتُ فَخُورًا بِفَرِيقِي.
فِي رَأْيِي، الصِّفَاتُ الشَّخْصِيَّةُ مُهِمَّةٌ جِدًّا فِي العَمَلِ. المُهَنْدِسُ يَحْتَاجُ إِلَى الدِّقَّةِ، وَالمُعَلِّمُ يَحْتَاجُ إِلَى الصَّبْرِ. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَكُونَ مُدِيرَ مَشَارِيعَ، لِأَنِّي مُنَظَّمٌ وَأُحِبُّ القِيَادَةَ وَالعَمَلَ مَعَ النَّاسِ.`;
const Q3A_FULL = `يَصِفُنِي أَصْدِقَائِي بِأَنَّنِي "الشَّخْصُ الَّذِي يَعْرِفُ دَائِمًا أَيْنَ وَضَعَ كُلَّ شَيْءٍ"، وَأَظُنُّ أَنَّ التَّنْظِيمَ فِعْلًا أَقْوَى صِفَاتِي؛ فَأَنَا أُخَطِّطُ لِأُسْبُوعِي كُلَّ أَحَدٍ، وَأُقَسِّمُ المَشَارِيعَ الكَبِيرَةَ إِلَى مَهَامَّ صَغِيرَةٍ، وَأَضَعُ لِكُلِّ مُهِمَّةٍ مَوْعِدًا دَقِيقًا.
غَيْرَ أَنَّ هٰذِهِ الصِّفَةَ كَانَتْ لَهَا عُيُوبُهَا؛ فَقَدْ كُنْتُ أَنْزَعِجُ كَثِيرًا عِنْدَمَا لَا يَلْتَزِمُ زُمَلَائِي بِخُطَّتِي، وَأُرِيدُ أَنْ يَعْمَلَ الجَمِيعُ بِطَرِيقَتِي، إِلَى أَنْ تَعَلَّمْتُ دَرْسًا مُهِمًّا فِي مَشْرُوعِ العُلُومِ العَامَ المَاضِي.
كَانَ فِي فَرِيقِي طَالِبٌ يَبْدُو فَوْضَوِيًّا جِدًّا، لَا يُسَلِّمُ شَيْئًا فِي مَوْعِدِهِ أَبَدًا، لٰكِنَّهُ كَانَ أَكْثَرَنَا إِبْدَاعًا. وَعِنْدَمَا تَرَكْتُ لَهُ حُرِّيَّةَ تَصْمِيمِ العَرْضِ بِطَرِيقَتِهِ، قَدَّمَ فِكْرَةً جَعَلَتْ مَشْرُوعَنَا الأَفْضَلَ فِي المَدْرَسَةِ، وَأَدْهَشَتِ المُعَلِّمِينَ جَمِيعًا.
صَحِيحٌ أَنَّ لِكُلِّ مِهْنَةٍ صِفَاتٍ تَحْتَاجُ إِلَيْهَا، غَيْرَ أَنَّ أَنْجَحَ الفِرَقِ هِيَ الَّتِي تَجْمَعُ شَخْصِيَّاتٍ مُخْتَلِفَةً. وَلَوْ كَانَ كُلُّ أَعْضَاءِ الفَرِيقِ مِثْلِي تَمَامًا، لَكَانَ عَمَلُنَا مُنَظَّمًا جِدًّا، لٰكِنَّهُ بِلَا رُوحٍ وَلَا إِبْدَاعٍ.`;
const Q3B_FULL = `يَعْتَقِدُ كَثِيرُونَ أَنَّ الشَّهَادَةَ الجَامِعِيَّةَ هِيَ مِفْتَاحُ النَّجَاحِ الوَحِيدُ، غَيْرَ أَنَّ أَصْحَابَ العَمَلِ اليَوْمَ يَبْحَثُونَ عَنْ شَيْءٍ آخَرَ أَيْضًا: الصِّفَاتِ الشَّخْصِيَّةِ الَّتِي لَا تُكْتَبُ فِي أَيِّ شَهَادَةٍ.
مِنْ نَاحِيَةٍ، لَا يُمْكِنُ لِلطَّبِيبِ أَوِ المُهَنْدِسِ أَنْ يَعْمَلَ دُونَ مَعْرِفَةٍ عِلْمِيَّةٍ عَمِيقَةٍ تُثْبِتُهَا الشَّهَادَاتُ. وَمِنْ نَاحِيَةٍ أُخْرَى، تُشِيرُ دِرَاسَاتٌ إِلَى أَنَّ مُعْظَمَ الَّذِينَ يَفْقِدُونَ وَظَائِفَهُمْ لَا يَفْقِدُونَهَا بِسَبَبِ نَقْصِ المَعْرِفَةِ، بَلْ بِسَبَبِ ضَعْفِ التَّوَاصُلِ أَوْ عَدَمِ القُدْرَةِ عَلَى العَمَلِ فِي فَرِيقٍ.
وَقَدْ رَأَيْتُ ذٰلِكَ فِي تَجْرِبَةِ عَمِّي، الَّذِي يُدِيرُ شَرِكَةً صَغِيرَةً؛ فَقَدْ وَظَّفَ مَرَّةً مُهَنْدِسًا يَحْمِلُ شَهَادَاتٍ مُمْتَازَةً، لٰكِنَّهُ كَانَ يَرْفُضُ الاسْتِمَاعَ إِلَى زُمَلَائِهِ، فَاضْطُرَّ عَمِّي إِلَى إِنْهَاءِ عَقْدِهِ بَعْدَ أَشْهُرٍ.
صَحِيحٌ أَنَّ المَعْرِفَةَ أَسَاسٌ لَا غِنَى عَنْهُ، غَيْرَ أَنَّ الصِّفَاتِ هِيَ الَّتِي تَبْنِي عَلَيْهِ. وَإِذَا اهْتَمَّتِ المَدَارِسُ بِتَنْمِيَةِ الشَّخْصِيَّةِ كَمَا تَهْتَمُّ بِالدَّرَجَاتِ، فَسَنَحْصُلُ عَلَى جِيلٍ نَاجِحٍ فِي العَمَلِ وَفِي الحَيَاةِ مَعًا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a self-assessment profile, write a letter applying for a summer job describing your qualities, and write an extended piece about your strengths and weaknesses or about qualities versus qualifications.',
  lift: [
    { ar: 'أَنَا صَبُورَةٌ وَمُنَظَّمَةٌ وَاجْتِمَاعِيَّةٌ', en: 'I am patient, organised and sociable (f.)' },
    { ar: 'الصِّفَاتُ الَّتِي يَحْتَاجُ إِلَيْهَا المُعَلِّمُ', en: 'the qualities a teacher needs' },
    { ar: 'أَنَا مُنَظَّمٌ؛ فَمَثَلًا أَكْتُبُ جَدْوَلًا كُلَّ أُسْبُوعٍ', en: 'I’m organised — for example, I write a timetable every week' },
  ],
  checkTip: 'Check: adjectives agree with the person (anā munaẓẓam / munaẓẓama; zumalāʾī mutaʿāwinūn); after kāna / akūna the adjective is accusative (kuntu khajūlan); li-annahu (he) vs li-annahā (she); a relative needs alladhī / allatī after a definite noun.',
  FORM: {
    title: 'Self-assessment profile', ar: 'مَلَفُّ التَّقْيِيمِ الذَّاتِيِّ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'لَيْلَى حَسَنٌ', modelEn: 'Layla Hassan' },
      { core: true, ar: 'ثَلَاثُ صِفَاتٍ', en: 'Three qualities', model: 'صَبُورَةٌ، مُنَظَّمَةٌ، اجْتِمَاعِيَّةٌ', modelEn: 'patient, organised, sociable (f.)' },
      { core: true, ar: 'نُقْطَةُ قُوَّةٍ', en: 'A strength', model: 'التَّوَاصُلُ مَعَ الأَطْفَالِ', modelEn: 'communicating with children' },
      { core: true, ar: 'نُقْطَةُ ضَعْفٍ', en: 'A weakness', model: 'الخَجَلُ', modelEn: 'shyness' },
      { core: true, ar: 'نَشَاطٌ يُظْهِرُ صِفَاتِكَ', en: 'An activity that shows your qualities', model: 'التَّطَوُّعُ فِي نَادِي الأَطْفَالِ', modelEn: 'volunteering at a children’s club' },
      { core: true, ar: 'وَظِيفَةٌ تُنَاسِبُكَ', en: 'A job that suits you', model: 'مُعَلِّمَةُ رَوْضَةٍ', modelEn: 'a nursery teacher (f.)' },
      { ar: 'صِفَةٌ تُرِيدُ أَنْ تُطَوِّرَهَا', en: 'A quality you want to develop', model: 'الثِّقَةُ بِالنَّفْسِ', modelEn: 'self-confidence' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُنَاسِبُكَ هٰذِهِ الوَظِيفَةُ؟', en: 'ONE sentence: why this job suits you', model: 'تُنَاسِبُنِي لِأَنَّ المُعَلِّمَةَ الَّتِي تَعْمَلُ مَعَ الصِّغَارِ تَحْتَاجُ إِلَى الصَّبْرِ، وَأَنَا صَبُورَةٌ جِدًّا.', modelEn: 'Because a teacher who works with little ones needs patience, and I am very patient.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with allatī and an adjective that agrees.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 2: three adjectives in the speaker’s gender. Boxes 3–5, 7: verbal / abstract nouns. Box 8: al-muʿallima allatī taʿmalu … taḥtāju ilā.',
  },
  Q2: {
    short: 'a letter applying for a summer job', title: 'Question 2: my qualities for the job', ar: 'رِسَالَةُ طَلَبِ وَظِيفَةٍ',
    task: 'You want a summer job at a children’s camp. Write a letter in Arabic of about 80–90 words. You must include: • which job you are applying for • your qualities, with an example • an experience in the past that shows your qualities • a weakness, why the job suits you, and when you are available.',
    checklist: ['All four bullet points, in order.', 'A formal greeting and closing.', 'Adjectives that agree, with an example (fa-mathalan).', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['رَأَيْتُ إِعْلَانَكُمْ عَنْ وَظِيفَةِ …', 'I saw your advert for the post of …'], ['أَنَا … وَ… فَمَثَلًا …', 'I am … and … for example …'], ['فِي الصَّيْفِ المَاضِي تَطَوَّعْتُ فِي …', 'last summer I volunteered at …'], ['سَأَكُونُ مُتَاحَةً مِنْ … إِلَى …', 'I will be available from … to …']],
    rubric: [
      ['task', 'تُرِيدِينَ وَظِيفَةً صَيْفِيَّةً فِي مُخَيَّمٍ لِلْأَطْفَالِ. اكْتُبِي رِسَالَةً (٨٠–٩٠ كَلِمَةً).', 'Apply for a summer job at a children’s camp (80–90 words).'],
      ['1', 'أَيُّ وَظِيفَةٍ تَطْلُبِينَ؟', 'Which job you are applying for'],
      ['2', 'مَا صِفَاتُكِ؟ أَعْطِي مِثَالًا.', 'Your qualities, with an example'],
      ['3', 'صِفِي تَجْرِبَةً سَابِقَةً تُظْهِرُ صِفَاتِكِ.', 'A past experience that shows them'],
      ['4', 'مَا نُقْطَةُ ضَعْفِكِ؟ وَلِمَاذَا تُنَاسِبُكِ الوَظِيفَةُ؟ وَمَتَى أَنْتِ مُتَاحَةٌ؟', 'A weakness; why it suits you; availability'],
    ],
    qwords: 'أَيُّ (which) · مَا صِفَاتُكِ (your qualities) · سَابِقَةٌ (previous — PAST) · مَتَى (when — FUTURE availability)',
    frames: [
      ['start', 'إِلَى مُدِيرِ المُخَيَّمِ الصَّيْفِيِّ،', 'To the summer-camp director,'],
      ['1', 'رَأَيْتُ إِعْلَانَكُمْ عَنْ وَظِيفَةِ ______ ، وَأُرِيدُ أَنْ أَتَقَدَّمَ لَهَا.', 'I saw your advert for …; I want to apply.'],
      ['2', 'أَنَا ______ وَ______ . فَمَثَلًا ______ .', 'I am … and … For example …'],
      ['3', 'فِي الصَّيْفِ المَاضِي ______ ، وَكَانَتْ تَجْرِبَةً ______ .', 'Last summer …; it was a … experience.'],
      ['4', 'نُقْطَةُ ضَعْفِي ______ . سَأَكُونُ مُتَاحَةً مِنْ ______ .', 'My weakness is … I’ll be free from …'],
      ['end', 'مَعَ الشُّكْرِ، ______', 'With thanks, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“To the summer-camp director, my name is Layla and I am seventeen. I saw your advert for a camp assistant and want to apply. I am patient, organised and sociable — for example, I help my little brother with his homework every day. Last summer I volunteered at a children’s club, and it was a fun experience. My weakness is that I’m a little shy, but I’m trying to improve. I think this job suits me because I love children. I’ll be available from July to August. With thanks, Layla.”',
      find: ['صَبُورَةٌ وَمُنَظَّمَةٌ', 'فَمَثَلًا', 'تَطَوَّعْتُ', 'سَأَكُونُ مُتَاحَةً'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Director, I am applying for the assistant post you advertised, as I believe my qualities suit working with children: I am patient and organised, and I know how to turn a simple activity into a fun game. Last summer I volunteered at a children’s club, where I was responsible for a group of ten, and learnt to settle disputes calmly. It’s true I was shy at first, but the experience greatly boosted my confidence. I’ll be available throughout July and August, and would be happy to send you a reference from the club’s director. Yours respectfully, Layla.”',
      find: ['الَّتِي أَعْلَنْتُمْ عَنْهَا', 'أُؤْمِنُ بِأَنَّ', 'كُنْتُ مَسْؤُولَةً عَنْ', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ'],
    },
  },
  Q3: {
    a: { title: 'نِقَاطُ قُوَّتِي وَضَعْفِي', en: 'My strengths and weaknesses', bullets: 'صِفَاتُكَ الإِيجَابِيَّةُ مَعَ أَمْثِلَةٍ · نُقْطَةُ ضَعْفٍ وَكَيْفَ تُعَالِجُهَا · تَجْرِبَةٌ أَظْهَرَتْ صِفَاتِكَ · الوَظِيفَةُ الَّتِي تُنَاسِبُكَ', bulletsEn: 'Your positive qualities with examples · a weakness and how you deal with it · an experience that showed your qualities · the job that suits you' },
    b: { title: 'الصِّفَاتُ الشَّخْصِيَّةُ أَمِ الشَّهَادَاتُ؟', en: 'Personal qualities or qualifications?', bullets: 'مَا يَبْحَثُ عَنْهُ أَصْحَابُ العَمَلِ · أَهَمِّيَّةُ الشَّهَادَاتِ وَالصِّفَاتِ · مِثَالٌ مِنَ الوَاقِعِ · رَأْيُكَ', bulletsEn: 'What employers look for · the importance of qualifications and qualities · a real example · your opinion' },
    plan: [
      'Your qualities — anā ijtimāʿiyy wa-mutaʿāwin …; fa-mathalan … (agreement!).',
      'A weakness — ʿindī nuqṭatu ḍaʿf: anā …; uḥāwilu an akūna ahdaʾa li-kay …',
      'Past — kuntu qāʾida farīq …; ikhtartu X li-annahā … wa-Y li-annahu …',
      'Opinion + future — al-muhandis yaḥtāju ilā …; urīdu an akūna …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'أَنَا مُنَظَّمٌ؛ فَمَثَلًا أَكْتُبُ جَدْوَلًا لِوَاجِبَاتِي.', en: 'present: I’m organised — e.g. I write a homework timetable.' },
      { ar: 'اخْتَرْتُ سَارَةَ لِأَنَّهَا مُبْدِعَةٌ، وَيُوسُفَ لِأَنَّهُ دَقِيقٌ.', en: 'past: I chose Sara because she is creative, and Yusuf because he is precise.' },
      { ar: 'أُرِيدُ أَنْ أَكُونَ مُدِيرَ مَشَارِيعَ.', en: 'future: I want to be a project manager.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'I’m sociable and cooperative, love teamwork and helping others; I’m also organised — I write a weekly homework plan and I’m never late for appointments → my weakness: I’m sometimes short-tempered when tired; I try to be calmer and play sport to control my nerves → last year I led a four-person science project: I chose Sara for drawing (creative) and Yusuf for calculations (precise); we worked three weeks together and got the top mark in the class; I was proud of my team → qualities matter at work: engineers need precision, teachers patience; I want to be a project manager because I’m organised and like leading and working with people.', find: ['فَمَثَلًا أَكْتُبُ', 'لِكَيْ أَتَحَكَّمَ', 'لِأَنَّهَا مُبْدِعَةٌ', 'يَحْتَاجُ إِلَى الدِّقَّةِ'], notes: 'Core model: adjective agreement, fa-mathalan, akūna + comparative (ahdaʾa), li-kay, li-annahā vs li-annahu, a superlative, yaḥtāju ilā + verbal noun, a future ambition.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'My friends call me “the person who always knows where everything is”, and organisation really is my strongest quality: I plan my week every Sunday and split big projects into small tasks, each with a precise deadline → but this quality had its downsides: I used to get annoyed when classmates didn’t stick to my plan and wanted everyone to work my way — until I learnt an important lesson in last year’s science project → one teammate seemed very chaotic, never once handing in on time, yet he was the most creative of us; when I let him design the presentation his way, his idea made our project the best in the school, amazing all the teachers → every job needs certain qualities, but the most successful teams combine different personalities; “if everyone on the team were exactly like me, our work would be very organised — but without soul or creativity”.', find: ['يَصِفُنِي … بِأَنَّنِي', 'كُنْتُ أَنْزَعِجُ', 'أَكْثَرَنَا إِبْدَاعًا', 'لَوْ كَانَ … لَكَانَ'], notes: 'Full-mark model: waṣafa bi-anna, a quoted relative clause, ghayra anna as a turn, kuntu + present … ilā an, a superlative with tamyīz (aktharanā ibdāʿan), ʿindamā … , a concession and law kāna … la-kāna with lākinna.' },
      { which: 'ب', level: 'Full', subtitle: 'qualities or qualifications?', text: Q3B_FULL, en: 'Many believe a degree is the only key to success, but employers today seek something else too: personal qualities no certificate records → doctors and engineers can’t work without deep scientific knowledge proven by qualifications; yet studies suggest most people who lose their jobs don’t lose them for lack of knowledge, but for poor communication or inability to work in a team → I saw this through my uncle, who runs a small company: he once hired an engineer with excellent qualifications who refused to listen to colleagues, so my uncle had to end his contract after months → knowledge is an indispensable foundation, but qualities are what build on it; “if schools cared about developing character as much as grades, we’d have a generation successful at work and in life alike”.', find: ['الَّتِي لَا تُكْتَبُ', 'لَا يَفْقِدُونَهَا … بَلْ', 'فَاضْطُرَّ عَمِّي', 'إِذَا اهْتَمَّتْ … فَسَنَحْصُلُ'], notes: 'Full-mark model for the Stretch title: a passive relative (lā tuktabu), a balanced view, lā … bal with bi-sababi, a relative + kāna yarfuḍu, iḍṭurra ilā, a concession with lā ghinā ʿanhu, idhā … fa-sa- with kamā.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; adjectives in my gender.' },
    { route: 'core', text: 'Q2: all four bullet points, with a formal greeting and closing.' },
    { route: 'develop', text: 'Q2: qualities with an example (fa-mathalan) and a past experience.' },
    { route: 'develop', text: 'Q3: four paragraphs with allatī / alladhī and li-annahu / li-annahā.' },
    { route: 'stretch', text: 'Q3: a balanced view, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
