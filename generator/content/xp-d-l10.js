'use strict';
/* Exam-practice data · TD-L10 · Career Plans, Ambitions and Choices (the future; hopes; conditionals). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'D', n: 10, short: 'Career Plans, Ambitions and Choices', arShort: 'الخُطَطُ وَالطُّمُوحَاتُ', fileTitle: 'Career_Plans_Ambitions_and_Choices', title: 'Career Plans, Ambitions and Choices', ar: 'الخُطَطُ المِهْنِيَّةُ وَالطُّمُوحَاتُ وَالخِيَارَاتُ', icon: 'FaRoute', grammar: 'the future (sa- / sawfa; lan + subjunctive); hopes (aṭmaḥu ilā, atamannā an, aʾmalu an); conditionals (idhā … fa-sa-, idhā lam … fa-, law … la-)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: talk about your plans after school and your dream career with the future (سَأَدْرُسُ · سَوْفَ أَعْمَلُ · لَنْ أَتْرُكَ), express hopes (أَطْمَحُ إِلَى · أَتَمَنَّى أَنْ), give a plan B with conditionals (إِذَا لَمْ أُقْبَلْ، فَسَأَعْمَلُ …), and weigh up choices.',
  words: [
    w(1, 'سَأَدْرُسُ · سَوْفَ أَدْرُسُ', 'I will study', [['he will work', 'سَيَعْمَلُ'], ['I will not study', 'لَنْ أَدْرُسَ']], { tag: 'future' }),
    w(2, 'أَطْمَحُ إِلَى …', 'I aspire to …', [['ambition', 'طُمُوحٌ · طُمُوحَاتٌ'], ['ambitious (m. · f.)', 'طَمُوحٌ · طَمُوحَةٌ']], { tag: 'hopes' }),
    w(3, 'أَتَمَنَّى أَنْ …', 'I wish / hope to …', [['I hope that', 'آمُلُ أَنْ'], ['a dream', 'حُلْمٌ · أَحْلَامٌ']], { tag: 'hopes' }),
    w(4, 'هَدَفٌ', 'a goal', [['pl.', 'أَهْدَافٌ'], ['achieve', 'أُحَقِّقُ · تَحْقِيقٌ']]),
    w(5, 'خُطَّةٌ', 'a plan', [['pl.', 'خُطَطٌ'], ['plan B', 'خُطَّةٌ بَدِيلَةٌ']]),
    w(6, 'مُسْتَقْبَلٌ مِهْنِيٌّ', 'a career', [['career path', 'مَسَارٌ مِهْنِيٌّ'], ['promotion', 'تَرْقِيَةٌ']]),
    w(7, 'سَنَةُ فَرَاغٍ', 'a gap year', [['travel', 'السَّفَرُ'], ['volunteer abroad', 'أَتَطَوَّعُ فِي الخَارِجِ']]),
    w(8, 'أَتَخَصَّصُ فِي …', 'I specialise in …', [['specialism', 'تَخَصُّصٌ'], ['major (at university)', 'التَّخَصُّصُ الجَامِعِيُّ']]),
    w(9, 'إِذَا … فَسَأَدْرُسُ …', 'if … (then) I will study …', [['if I’m not accepted', 'إِذَا لَمْ أُقْبَلْ، فَسَأَعْمَلُ'], ['e.g.', 'إِذَا نَجَحْتُ، فَسَأَدْرُسُ الطِّبَّ']], { tag: 'condition' }),
    w(10, 'لَوْ كُنْتُ … لَاخْتَرْتُ …', 'if I were … I would choose …', [['if I could', 'لَوِ اسْتَطَعْتُ'], ['I would travel', 'لَسَافَرْتُ']], { tag: 'hypothetical' }),
    w(11, 'أَسَّسَ شَرِكَةً', 'founded a company', [['business', 'مَشْرُوعٌ تِجَارِيٌّ'], ['entrepreneur (m. · f.)', 'رَائِدُ أَعْمَالٍ · رَائِدَةُ أَعْمَالٍ']]),
    w(12, 'مُتَرَدِّدٌ', 'undecided, hesitant (m.)', [['f.', 'مُتَرَدِّدَةٌ'], ['sure (m. · f.)', 'مُتَأَكِّدٌ · مُتَأَكِّدَةٌ']]),
  ],
  words1: { eyebrow: 'Language bank · future and hopes', title: 'Will, won’t, I aspire to', ar: 'المُسْتَقْبَلُ وَالأَحْلَامُ', notes: 'LANGUAGE BANK (2 min) — future: سَأَدْرُسُ / سَوْفَ أَدْرُسُ. Negative future: لَنْ + subjunctive (لَنْ أَتْرُكَ). Hopes: أَطْمَحُ إِلَى أَنْ أُصْبِحَ … · أَتَمَنَّى أَنْ أَعْمَلَ … (أَنْ + subjunctive).' },
  words2: { eyebrow: 'Language bank · plans and plan B', title: 'If … then …', ar: 'الخُطَّةُ وَالخُطَّةُ البَدِيلَةُ', notes: 'LANGUAGE BANK (2 min) — real condition: إِذَا حَصَلْتُ عَلَى دَرَجَاتٍ جَيِّدَةٍ، فَسَأَدْرُسُ … Plan B: إِذَا لَمْ أُقْبَلْ، فَسَأَبْحَثُ عَنْ تَدْرِيبٍ. Unreal: لَوْ كُنْتُ غَنِيًّا، لَأَسَّسْتُ شَرِكَةً.' },
  checkCore: 'said what they will do after school with sa- / sawfa',
  checkDevelop: 'expressed a hope and gave a plan B with idhā (lam) … fa-',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a careers chat', title: 'Role play A — What will you do next year?', ar: 'مَاذَا سَتَفْعَلُ السَّنَةَ القَادِمَةَ؟', you: 'a Year 11 student', them: 'a friend’s parent',
      tasks: [
        { core: true, ex: 'مَاذَا سَتَفْعَلُ بَعْدَ الامْتِحَانَاتِ؟', task: 'Say your next step.', help: 'سَأَدْرُسُ فِي …', model: 'سَأَدْرُسُ فِي كُلِّيَّةٍ قَرِيبَةٍ.', modelEn: 'I’ll study at a nearby college.' },
        { core: true, ex: 'أَيَّ مَوَادَّ؟', task: 'Name two subjects.', help: 'سَأَدْرُسُ … وَ…', model: 'سَأَدْرُسُ الرِّيَاضِيَّاتِ وَالفِيزْيَاءَ.', modelEn: 'I’ll study maths and physics.' },
        { core: true, ex: 'وَمَاذَا تُرِيدُ أَنْ تَعْمَلَ فِي المُسْتَقْبَلِ؟', task: 'Say your dream job.', help: 'أَتَمَنَّى أَنْ أُصْبِحَ …', model: 'أَتَمَنَّى أَنْ أُصْبِحَ مُهَنْدِسًا.', modelEn: 'I hope to become an engineer.' },
        { core: true, ex: 'ابْنِي يُرِيدُ أَنْ يَكُونَ طَيَّارًا.', task: 'Ask where he will study.', help: 'أَيْنَ سَـ…؟', model: 'أَيْنَ سَيَدْرُسُ؟', modelEn: 'Where will he study?' },
        { core: true, unexpected: true, ex: 'هَلْ سَتَبْقَى فِي مَدِينَتِكَ؟', task: 'Answer the unexpected question.', help: 'لَا، سَأَنْتَقِلُ إِلَى … / نَعَمْ، …', model: 'لَا، سَأَنْتَقِلُ إِلَى لَنْدَنَ لِلْجَامِعَةِ.', modelEn: 'No, I’ll move to London for university.' },
      ],
      girl: 'سَتَفْعَلِينَ · تُرِيدِينَ · مُهَنْدِسَةً · سَتَبْقَيْنَ · مَدِينَتِكِ',
      notes: 'Core: sa- + present, atamannā an uṣbiḥa + accusative job noun, sa-yadrusu (3rd person), sa-antaqilu ilā.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a university open day', title: 'Role play B — At a university open day', ar: 'يَوْمٌ مَفْتُوحٌ فِي الجَامِعَةِ', you: 'a sixth-form student', them: 'a university admissions officer',
      tasks: [
        { core: true, ex: 'أَهْلًا! مَا التَّخَصُّصُ الَّذِي يُهِمُّكَ؟', task: 'Name the subject you want.', help: 'أُرِيدُ أَنْ أَتَخَصَّصَ فِي …', model: 'أُرِيدُ أَنْ أَتَخَصَّصَ فِي عِلْمِ النَّفْسِ.', modelEn: 'I want to specialise in psychology.' },
        { core: true, ex: 'لِمَاذَا؟', task: 'Give a reason linked to a job.', help: 'لِأَنِّي أَطْمَحُ إِلَى أَنْ …', model: 'لِأَنِّي أَطْمَحُ إِلَى أَنْ أُسَاعِدَ الشَّبَابَ الَّذِينَ يُعَانُونَ مِنَ القَلَقِ.', modelEn: 'Because I aspire to help young people who suffer from anxiety.' },
        { ex: 'الدِّرَاسَةُ ثَلَاثُ سَنَوَاتٍ.', task: 'ASK about work placements.', help: 'هَلْ يُمْكِنُ أَنْ … ؟', model: 'هَلْ يُمْكِنُ أَنْ أَتَدَرَّبَ فِي مُسْتَشْفًى أَوْ مَدْرَسَةٍ أَثْنَاءَ الدِّرَاسَةِ؟', modelEn: 'Can I do a placement in a hospital or school during the course?' },
        { ex: 'نَعَمْ، فِي السَّنَةِ الثَّانِيَةِ. وَمَا الدَّرَجَاتُ الَّتِي تَتَوَقَّعُهَا؟', task: 'Answer with a condition.', help: 'إِذَا … فَسَـ…', model: 'أَتَوَقَّعُ دَرَجَاتٍ جَيِّدَةً، وَإِذَا حَصَلْتُ عَلَيْهَا، فَسَأَتَقَدَّمُ إِلَى جَامِعَتِكُمْ أَوَّلًا.', modelEn: 'I expect good grades, and if I get them, your university will be my first choice.' },
        { unexpected: true, ex: 'وَإِذَا لَمْ تُقْبَلْ؟', task: 'Answer the unexpected question (plan B).', help: 'إِذَا لَمْ أُقْبَلْ، فَـ…', model: 'إِذَا لَمْ أُقْبَلْ، فَسَأَدْرُسُ فِي جَامِعَةٍ أُخْرَى، أَوْ سَأَعْمَلُ سَنَةً ثُمَّ أَتَقَدَّمُ مِنْ جَدِيدٍ.', modelEn: 'If I’m not accepted, I’ll study elsewhere, or work for a year and reapply.' },
      ],
      girl: 'يُهِمُّكِ · تَتَوَقَّعِينَهَا · تُقْبَلِي',
      notes: 'Core+: atakhaṣṣaṣa fī, aṭmaḥu ilā an + subjunctive, alladhīna, the CANDIDATE asks (task 3), idhā … fa-sa- and idhā lam + passive jussive (uqbal).',
    },
    {
      id: 'C', level: 'Develop', setting: 'a family discussion', title: 'Role play C — Gap year or straight to university?', ar: 'سَنَةُ فَرَاغٍ أَمِ الجَامِعَةُ مُبَاشَرَةً؟', you: 'a student', them: 'your mother or father',
      tasks: [
        { ex: 'سَمِعْتُ أَنَّكَ تُفَكِّرُ فِي سَنَةِ فَرَاغٍ. لِمَاذَا؟', task: 'Explain your plan with purpose.', help: 'أُرِيدُ أَنْ … لِكَيْ …', model: 'أُرِيدُ أَنْ أَتَطَوَّعَ فِي مَدْرَسَةٍ فِي المَغْرِبِ، لِكَيْ أُحَسِّنَ لُغَتِي العَرَبِيَّةَ وَأَكْتَسِبَ خِبْرَةً فِي التَّعْلِيمِ.', modelEn: 'I want to volunteer at a school in Morocco, to improve my Arabic and gain teaching experience.' },
        { ex: 'لٰكِنِّي أَخَافُ أَلَّا تَعُودَ إِلَى الدِّرَاسَةِ!', task: 'Reassure with lan.', help: 'لَنْ … لِأَنَّ …', model: 'لَنْ أَتْرُكَ الدِّرَاسَةَ أَبَدًا، لِأَنِّي قُبِلْتُ فِي الجَامِعَةِ، وَأَجَّلْتُ البِدَايَةَ سَنَةً فَقَطْ.', modelEn: 'I’ll never give up studying — I’ve been accepted and only deferred a year.' },
        { ex: 'وَمَنْ فَعَلَ ذٰلِكَ مِنْ قَبْلُ؟', task: 'Give an example (past).', help: 'ابْنُ عَمِّي … فَـ…', model: 'ابْنُ عَمِّي قَضَى سَنَةً فِي كِينْيَا يَبْنِي مَدَارِسَ، فَعَادَ أَكْثَرَ نُضْجًا، وَعَرَفَ بِالضَّبْطِ مَاذَا يُرِيدُ أَنْ يَدْرُسَ.', modelEn: 'My cousin spent a year in Kenya building schools, came back more mature and knew exactly what he wanted to study.' },
        { ex: 'وَالمَالُ؟', task: 'Explain how you will pay.', help: 'سَأَعْمَلُ … وَسَأَدَّخِرُ …', model: 'سَأَعْمَلُ فِي الصَّيْفِ، وَسَأَدَّخِرُ نِصْفَ رَاتِبِي، كَمَا أَنَّ المُنَظَّمَةَ تُوَفِّرُ السَّكَنَ مَجَّانًا.', modelEn: 'I’ll work in summer and save half my pay; the charity also provides free accommodation.' },
        { unexpected: true, ex: 'وَإِذَا لَمْ يُعْجِبْكَ المَكَانُ؟', task: 'Answer the unexpected question (plan B).', help: 'إِذَا لَمْ … فَسَـ…', model: 'إِذَا لَمْ يُعْجِبْنِي، فَسَأَعُودُ بَعْدَ ثَلَاثَةِ أَشْهُرٍ، وَأَعْمَلُ هُنَا حَتَّى تَبْدَأَ الجَامِعَةُ.', modelEn: 'If I don’t like it, I’ll come back after three months and work here until university starts.' },
      ],
      girl: 'أَنَّكِ تُفَكِّرِينَ · تَعُودِي · يُعْجِبْكِ',
      notes: 'Develop: li-kay + two subjunctives, lan + subjunctive, a passive (qubiltu), a past example with a ḥāl verb (yabnī) and fa-, kamā anna, idhā lam + jussive … fa-sa- with ḥattā.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a careers podcast', title: 'Role play D — Follow your passion or play it safe?', ar: 'الشَّغَفُ أَمِ الأَمَانُ؟', you: 'a student guest', them: 'the podcast host',
      tasks: [
        { ex: 'مَا حُلْمُكَ المِهْنِيُّ؟', task: 'State an ambition with a reason.', help: 'أَطْمَحُ إِلَى أَنْ … لِأَنَّ …', model: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ مُخْرِجًا سِينِمَائِيًّا، لِأَنَّ الأَفْلَامَ تَسْتَطِيعُ أَنْ تُغَيِّرَ نَظْرَةَ المَلَايِينِ إِلَى العَالَمِ.', modelEn: 'I aspire to be a film director, because films can change how millions see the world.' },
        { ex: 'لٰكِنَّ هٰذَا المَجَالَ صَعْبٌ وَغَيْرُ مَضْمُونٍ.', task: 'Concede and give your strategy.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنِّي …', model: 'صَحِيحٌ أَنَّهُ غَيْرُ مَضْمُونٍ، غَيْرَ أَنِّي سَأَدْرُسُ الإِعْلَامَ، وَهُوَ تَخَصُّصٌ يَفْتَحُ أَبْوَابًا كَثِيرَةً، وَسَأَصْنَعُ أَفْلَامًا قَصِيرَةً فِي وَقْتِ فَرَاغِي.', modelEn: 'It’s not guaranteed, but I’ll study media, which opens many doors, and make short films in my free time.' },
        { ex: 'هَلْ بَدَأْتَ فِعْلًا؟', task: 'Give past evidence.', help: 'نَعَمْ، صَنَعْتُ … فَـ…', model: 'نَعَمْ، صَنَعْتُ فِيلْمًا قَصِيرًا عَنْ جَدَّتِي وَهِجْرَتِهَا، فَفَازَ بِالجَائِزَةِ الثَّانِيَةِ فِي مُسَابَقَةٍ لِلشَّبَابِ.', modelEn: 'Yes, I made a short film about my grandmother’s migration, and it won second prize in a youth competition.' },
        { ex: 'مَاذَا تَقُولُ لِشَابٍّ مُتَرَدِّدٍ بَيْنَ الشَّغَفِ وَالأَمَانِ؟', task: 'Give balanced advice.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى … لِذٰلِكَ …', model: 'مِنْ نَاحِيَةٍ، لَا تَتْرُكْ حُلْمَكَ بِسُرْعَةٍ، وَمِنْ نَاحِيَةٍ أُخْرَى، ابْنِ لِنَفْسِكَ مَهَارَاتٍ تَحْمِيكَ؛ لِذٰلِكَ اجْمَعْ بَيْنَهُمَا مَا اسْتَطَعْتَ.', modelEn: 'Don’t drop your dream too fast, but build skills that protect you — so combine both as far as you can.' },
        { unexpected: true, ex: 'لَوْ لَمْ تَنْجَحْ كَمُخْرِجٍ، هَلْ سَتَنْدَمُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ لَمْ أَنْجَحْ، لَـ… لٰكِنِّي …', model: 'لَوْ لَمْ أَنْجَحْ، لَحَزِنْتُ قَلِيلًا، لٰكِنِّي لَنْ أَنْدَمَ أَبَدًا، لِأَنَّ النَّدَمَ الحَقِيقِيَّ أَلَّا تُحَاوِلَ.', modelEn: 'I’d be a little sad, but I’d never regret it — the real regret is not trying.' },
      ],
      girl: 'حُلْمُكِ · بَدَأْتِ · تَنْجَحِي · سَتَنْدَمِينَ · (advice to a girl:) لَا تَتْرُكِي · ابْنِي · اجْمَعِي',
      notes: 'Stretch: aṭmaḥu ilā an, a concession with a relative-like ḥāl (wa-huwa takhaṣṣuṣ), fa-fāza, imperatives (lā tatruk, ibni, ijmaʿ), mā istaṭaʿta, law lam … la- with lan and allā.',
      modelFoot: 'Stretch: an ambition with a reason, a concession with a strategy, past evidence, balanced advice and law lam … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'خِطَطِي', aim: 'one full sentence per question',
      qs: [
        { q: 'مَاذَا سَتَفْعَلُ بَعْدَ المَدْرَسَةِ؟', en: 'What will you do after school?', start: 'سَأَدْرُسُ / سَأَعْمَلُ …', model: 'سَأَدْرُسُ فِي الجَامِعَةِ.', modelEn: 'I will study at university.' },
        { q: 'مَا الوَظِيفَةُ الَّتِي تَحْلُمُ بِهَا؟', en: 'What job do you dream of?', start: 'أَحْلُمُ بِأَنْ أَكُونَ …', model: 'أَحْلُمُ بِأَنْ أَكُونَ طَيَّارًا.', modelEn: 'I dream of being a pilot.' },
        { q: 'أَيْنَ تُرِيدُ أَنْ تَعْمَلَ؟', en: 'Where do you want to work?', start: 'أُرِيدُ أَنْ أَعْمَلَ فِي …', model: 'أُرِيدُ أَنْ أَعْمَلَ فِي الخَارِجِ.', modelEn: 'I want to work abroad.' },
        { q: 'هَلْ سَتَدْرُسُ فِي الجَامِعَةِ؟', en: 'Will you go to university?', start: 'نَعَمْ، سَأَدْرُسُ … / لَا، لَنْ …', model: 'نَعَمْ، سَأَدْرُسُ الطِّبَّ.', modelEn: 'Yes, I’ll study medicine.' },
        { q: 'هَلْ تُرِيدُ أَنْ تُسَافِرَ قَبْلَ العَمَلِ؟', en: 'Do you want to travel before working?', start: 'نَعَمْ، أَتَمَنَّى أَنْ …', model: 'نَعَمْ، أَتَمَنَّى أَنْ أُسَافِرَ إِلَى اليَابَانِ.', modelEn: 'Yes, I hope to travel to Japan.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + sa- or atamannā an = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'الطُّمُوحَاتُ وَالخِيَارَاتُ', aim: 'two or three sentences, with a hope, a plan and a condition',
      qs: [
        { q: 'صِفْ خُطَّتَكَ لِلسَّنَوَاتِ الخَمْسِ القَادِمَةِ.', en: 'Describe your plan for the next five years.', start: 'أَوَّلًا سَـ… ثُمَّ سَـ… وَأَخِيرًا …', model: 'أَوَّلًا سَأُنْهِي الثَّانَوِيَّةَ، ثُمَّ سَأَدْرُسُ الهَنْدَسَةَ ثَلَاثَ سَنَوَاتٍ، وَأَخِيرًا أَطْمَحُ إِلَى أَنْ أَعْمَلَ فِي شَرِكَةٍ لِلطَّاقَةِ النَّظِيفَةِ.', modelEn: 'Finish sixth form, study engineering for three years, then I aspire to work for a clean-energy company.' },
        { q: 'مَنْ أَثَّرَ فِي اخْتِيَارَاتِكَ المِهْنِيَّةِ؟', en: 'Who has influenced your career choices?', start: '… الَّذِي / الَّتِي …', model: 'أَثَّرَتْ فِيَّ خَالَتِي الَّتِي تَعْمَلُ طَبِيبَةً فِي مُنَظَّمَةٍ إِنْسَانِيَّةٍ، فَقَدْ حَكَتْ لِي عَنْ عَمَلِهَا فِي أَفْرِيقْيَا.', modelEn: 'My aunt, a doctor with a humanitarian organisation — she told me about her work in Africa.' },
        { q: 'هَلْ تَغَيَّرَ حُلْمُكَ مُنْذُ الطُّفُولَةِ؟', en: 'Has your dream changed since childhood?', start: 'كُنْتُ أَحْلُمُ … أَمَّا الآنَ فَـ…', model: 'كُنْتُ أَحْلُمُ بِأَنْ أَكُونَ رَائِدَ فَضَاءٍ، أَمَّا الآنَ فَأُرِيدُ أَنْ أُصَمِّمَ الصَّوَارِيخَ بَدَلًا مِنْ أَنْ أَرْكَبَهَا!', modelEn: 'I dreamt of being an astronaut; now I want to design rockets instead of riding them!' },
        { q: 'مَا خُطَّتُكَ البَدِيلَةُ؟', en: 'What is your plan B?', start: 'إِذَا لَمْ … فَسَـ…', model: 'إِذَا لَمْ أُقْبَلْ فِي كُلِّيَّةِ الطِّبِّ، فَسَأَدْرُسُ الصَّيْدَلَةَ، لِأَنَّهَا قَرِيبَةٌ مِنْ حُلْمِي.', modelEn: 'If I’m not accepted for medicine, I’ll study pharmacy, which is close to my dream.' },
        { q: 'هَلْ تُفَضِّلُ أَنْ تَعْمَلَ لِنَفْسِكَ أَمْ لِشَرِكَةٍ؟', en: 'Would you rather work for yourself or a company?', start: 'أُفَضِّلُ … لِأَنَّ … لٰكِنَّ …', model: 'أُفَضِّلُ أَنْ أُؤَسِّسَ شَرِكَتِي الخَاصَّةَ، لِأَنِّي أُحِبُّ الحُرِّيَّةَ، لٰكِنِّي سَأَعْمَلُ لِشَرِكَةٍ أَوَّلًا لِأَكْتَسِبَ الخِبْرَةَ.', modelEn: 'Found my own company — I love freedom — but I’ll work for a company first to gain experience.' },
      ],
      foot: 'Develop: two or three sentences — sequenced future plans, a hope, a relative clause and a plan B.',
      modelFoot: 'Future sequence + hope + condition = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'المُسْتَقْبَلُ المِهْنِيُّ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ يَجِبُ أَنْ يَخْتَارَ الشَّبَابُ مِهَنَهُمْ فِي سِنٍّ مُبَكِّرَةٍ؟', en: 'Should young people choose careers early?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ التَّخْطِيطَ المُبَكِّرَ مُفِيدٌ، غَيْرَ أَنَّ الإِنْسَانَ يَتَغَيَّرُ، وَكَثِيرٌ مِنَ النَّاجِحِينَ غَيَّرُوا مَسَارَهُمْ أَكْثَرَ مِنْ مَرَّةٍ.', modelEn: 'Early planning helps, but people change, and many successful people changed path more than once.' },
        { q: 'هَلْ يَنْبَغِي أَنْ يَخْتَارَ الأَهْلُ مِهْنَةَ أَبْنَائِهِمْ؟', en: 'Should parents choose their children’s careers?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، لَدَى الأَهْلِ خِبْرَةٌ وَنَصَائِحُ قَيِّمَةٌ، وَمِنْ نَاحِيَةٍ أُخْرَى، القَرَارُ النِّهَائِيُّ يَجِبُ أَنْ يَكُونَ لِمَنْ سَيَعِيشُ هٰذِهِ المِهْنَةَ.', modelEn: 'Parents have experience and valuable advice, but the final decision belongs to whoever will live that career.' },
        { q: 'كَيْفَ سَيَكُونُ عَالَمُ العَمَلِ عِنْدَمَا تَتَخَرَّجُ؟', en: 'What will the world of work be like when you graduate?', start: 'مِنَ المُتَوَقَّعِ أَنْ … مِمَّا …', model: 'مِنَ المُتَوَقَّعِ أَنْ يَعْمَلَ النَّاسُ مَعَ الذَّكَاءِ الاصْطِنَاعِيِّ فِي كُلِّ مَجَالٍ، مِمَّا سَيَجْعَلُ المَهَارَاتِ الإِنْسَانِيَّةَ أَثْمَنَ مِنْ أَيِّ وَقْتٍ مَضَى.', modelEn: 'People will likely work with AI in every field, making human skills more valuable than ever.' },
        { q: 'هَلِ المَالُ أَهَمُّ مِنَ السَّعَادَةِ فِي اخْتِيَارِ المِهْنَةِ؟', en: 'Is money more important than happiness in choosing a career?', start: 'أَرَى أَنَّ … لِأَنَّ …', model: 'أَرَى أَنَّ المَالَ ضَرُورِيٌّ لِحَيَاةٍ كَرِيمَةٍ، لٰكِنَّ السَّعَادَةَ هِيَ الَّتِي تَجْعَلُكَ تَسْتَيْقِظُ كُلَّ صَبَاحٍ بِحَمَاسٍ.', modelEn: 'Money is needed for a decent life, but happiness is what gets you up every morning with enthusiasm.' },
        { q: 'لَوِ اسْتَطَعْتَ أَنْ تَسْأَلَ نَفْسَكَ فِي سِنِّ الأَرْبَعِينَ سُؤَالًا، مَاذَا تَسْأَلُ؟', en: 'If you could ask your forty-year-old self one question, what would it be?', start: 'لَوِ اسْتَطَعْتُ، لَسَأَلْتُ …', model: 'لَوِ اسْتَطَعْتُ، لَسَأَلْتُ: "هَلْ أَنْتَ فَخُورٌ بِمَا فَعَلْتَ؟"، لِأَنَّ هٰذَا أَهَمُّ مِنْ أَيِّ رَاتِبٍ أَوْ مَنْصِبٍ.', modelEn: '“Are you proud of what you did?” — that matters more than any salary or title.' },
      ],
      foot: 'Stretch: a concession, a balanced view, min al-mutawaqqaʿ an … mimmā, arā anna and law … la-.',
      modelFoot: 'Stretch: ṣaḥīḥun anna … ghayra anna, balance, prediction with mimmā and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I said what I will do with sa- / sawfa.' },
    { route: 'core', text: 'I named my dream job (atamannā an uṣbiḥa + accusative).' },
    { route: 'develop', text: 'I expressed a hope (aṭmaḥu ilā an …) and used lan + subjunctive.' },
    { route: 'develop', text: 'I gave a plan B with idhā lam … fa-sa-.' },
    { route: 'stretch', text: 'I gave a balanced view, a concession or law … la-.' },
  ],
};
speak.RP[0].tasks[3].help = 'أَيْنَ سَيَدْرُسُ؟';
speak.RP[2].tasks[2].help = 'ابْنُ عَمِّي … فَعَادَ …';
speak.RP[2].tasks[4].help = 'إِذَا لَمْ يُعْجِبْنِي، فَسَأَعُودُ …';
speak.RP[3].tasks[2].help = 'نَعَمْ، صَنَعْتُ … فَفَازَ …';
speak.RP[3].tasks[4].help = 'لَوْ لَمْ أَنْجَحْ، لَحَزِنْتُ … لٰكِنِّي …';
speak.RP[1].tasks[3].help = 'إِذَا حَصَلْتُ عَلَيْهَا، فَسَأَتَقَدَّمُ …';
speak.RP[1].tasks[4].help = 'إِذَا لَمْ أُقْبَلْ، فَسَأَدْرُسُ …';
speak.CONV[1].qs[0].start = 'أَوَّلًا سَأُنْهِي … ثُمَّ سَأَدْرُسُ … وَأَخِيرًا …';
speak.CONV[1].qs[2].start = 'كُنْتُ أَحْلُمُ … أَمَّا الآنَ فَأُرِيدُ …';
speak.CONV[1].qs[3].start = 'إِذَا لَمْ أُقْبَلْ …، فَسَأَدْرُسُ …';
speak.CONV[2].qs[4].start = 'لَوِ اسْتَطَعْتُ، لَسَأَلْتُ …';

const Q2_CORE = `مَرْحَبًا يَا خَالَتِي،
كَيْفَ حَالُكِ؟ أُرِيدُ أَنْ أُخْبِرَكِ عَنْ خِطَطِي لِلْمُسْتَقْبَلِ. بَعْدَ الامْتِحَانَاتِ سَأَدْرُسُ الأَحْيَاءَ وَالكِيمْيَاءَ فِي الكُلِّيَّةِ. أَتَمَنَّى أَنْ أُصْبِحَ طَبِيبَةً، لِأَنِّي أُحِبُّ مُسَاعَدَةَ النَّاسِ. فِي الشَّهْرِ المَاضِي زُرْتُ مُسْتَشْفًى مَعَ مَدْرَسَتِي، وَتَكَلَّمْتُ مَعَ طَبِيبَةٍ لَطِيفَةٍ، فَأَعْجَبَنِي عَمَلُهَا كَثِيرًا. فِي رَأْيِي، الطِّبُّ صَعْبٌ لٰكِنَّهُ مِهْنَةٌ رَائِعَةٌ. إِذَا لَمْ أُقْبَلْ فِي كُلِّيَّةِ الطِّبِّ، فَسَأَدْرُسُ التَّمْرِيضَ. هَلْ تَسْتَطِيعِينَ أَنْ تُسَاعِدِينِي فِي اخْتِيَارِ الجَامِعَةِ؟
مَعَ حُبِّي،
سَلْمَى`;
const Q2_FULL = `خَالَتِيَ العَزِيزَةَ،
بِمَا أَنَّكِ أَوَّلُ مَنْ شَجَّعَنِي عَلَى دِرَاسَةِ العُلُومِ، أَرَدْتُ أَنْ تَكُونِي أَوَّلَ مَنْ يَعْرِفُ قَرَارِي: سَأَدْرُسُ الأَحْيَاءَ وَالكِيمْيَاءَ فِي المَرْحَلَةِ القَادِمَةِ، وَأَطْمَحُ إِلَى أَنْ أُصْبِحَ طَبِيبَةَ أَطْفَالٍ. وَقَدْ تَأَكَّدَ هٰذَا الحُلْمُ عِنْدَمَا زُرْنَا المُسْتَشْفَى الشَّهْرَ المَاضِي، وَرَأَيْتُ كَيْفَ تُطَمْئِنُ طَبِيبَةٌ شَابَّةٌ طِفْلًا خَائِفًا قَبْلَ العَمَلِيَّةِ. صَحِيحٌ أَنَّ الطَّرِيقَ طَوِيلٌ، غَيْرَ أَنِّي لَنْ أَسْتَسْلِمَ بِسُهُولَةٍ؛ وَإِذَا لَمْ أُقْبَلْ فِي الطِّبِّ، فَسَأَدْرُسُ التَّمْرِيضَ، ثُمَّ أُحَاوِلُ مِنْ جَدِيدٍ. وَأَتَمَنَّى أَنْ تُسَاعِدِينِي فِي زِيَارَةِ الجَامِعَاتِ وَاخْتِيَارِ أَفْضَلِهَا هٰذَا الصَّيْفَ.
مَعَ حُبِّي وَامْتِنَانِي،
سَلْمَى`;
const Q3A_CORE = `أَنَا فِي الصَّفِّ الحَادِي عَشَرَ، وَأُفَكِّرُ كَثِيرًا فِي مُسْتَقْبَلِي. بَعْدَ الامْتِحَانَاتِ سَأَدْرُسُ الرِّيَاضِيَّاتِ وَالفِيزْيَاءَ وَالحَاسُوبَ فِي كُلِّيَّةٍ قَرِيبَةٍ مِنْ بَيْتِي. ثُمَّ سَأَذْهَبُ إِلَى الجَامِعَةِ فِي مَدِينَةٍ كَبِيرَةٍ.
حُلْمِي أَنْ أُصْبِحَ مُبَرْمِجًا. أُحِبُّ الحَاسُوبَ مُنْذُ أَنْ كُنْتُ صَغِيرًا، وَأُحِبُّ حَلَّ المُشْكِلَاتِ. أَتَمَنَّى أَنْ أَعْمَلَ فِي شَرِكَةٍ كَبِيرَةٍ، ثُمَّ أُؤَسِّسَ شَرِكَتِي الخَاصَّةَ بَعْدَ عَشْرِ سَنَوَاتٍ.
عِنْدَمَا كُنْتُ صَغِيرًا، كُنْتُ أُرِيدُ أَنْ أَكُونَ لَاعِبَ كُرَةِ قَدَمٍ. لٰكِنْ فِي السَّنَةِ المَاضِيَةِ حَضَرْتُ دَوْرَةً فِي البَرْمَجَةِ، وَصَنَعْتُ لُعْبَةً صَغِيرَةً، فَعَرَفْتُ أَنَّ هٰذَا مَا أُرِيدُهُ. كَانَ المُعَلِّمُ سَعِيدًا جِدًّا بِلُعْبَتِي.
إِذَا حَصَلْتُ عَلَى دَرَجَاتٍ جَيِّدَةٍ، فَسَأَدْرُسُ عُلُومَ الحَاسُوبِ فِي جَامِعَةِ مَانْشِسْتَرَ. وَإِذَا لَمْ أُقْبَلْ، فَسَأَبْحَثُ عَنْ تَدْرِيبٍ مِهْنِيٍّ فِي شَرِكَةٍ. لَنْ أَتْرُكَ حُلْمِي أَبَدًا، مَهْمَا كَانَ الطَّرِيقُ صَعْبًا.`;
const Q3A_FULL = `يَسْأَلُنِي الكِبَارُ دَائِمًا: "مَاذَا تُرِيدُ أَنْ تَكُونَ؟"، وَكَأَنَّ الجَوَابَ يَجِبُ أَنْ يَكُونَ كَلِمَةً وَاحِدَةً لَا تَتَغَيَّرُ أَبَدًا. أَمَّا أَنَا فَأَرَى المُسْتَقْبَلَ طَرِيقًا لَهُ مَحَطَّاتٌ، لَا بَابًا وَاحِدًا يُفْتَحُ مَرَّةً وَاحِدَةً.
مَحَطَّتِيَ الأُولَى وَاضِحَةٌ: سَأَدْرُسُ الرِّيَاضِيَّاتِ وَالحَاسُوبَ، لِأَنِّي أَطْمَحُ إِلَى أَنْ أَعْمَلَ فِي مَجَالِ الذَّكَاءِ الاصْطِنَاعِيِّ، وَبِالتَّحْدِيدِ فِي تَطْبِيقَاتٍ تُسَاعِدُ المَرْضَى عَلَى تَشْخِيصِ أَمْرَاضِهِمْ مُبَكِّرًا.
وَقَدْ وُلِدَ هٰذَا الحُلْمُ فِي لَحْظَةٍ حَزِينَةٍ؛ فَعِنْدَمَا مَرِضَ جَدِّي قَبْلَ ثَلَاثِ سَنَوَاتٍ، اكْتُشِفَ مَرَضُهُ مُتَأَخِّرًا، فَتَسَاءَلْتُ: أَلَمْ يَكُنْ بِإِمْكَانِ التِّكْنُولُوجْيَا أَنْ تَكْتَشِفَهُ قَبْلَ ذٰلِكَ؟ وَمُنْذُ ذٰلِكَ اليَوْمِ وَأَنَا أَقْرَأُ عَنِ الطِّبِّ الرَّقْمِيِّ، وَأُتَابِعُ أَحْدَثَ الأَبْحَاثِ فِيهِ.
صَحِيحٌ أَنَّ الطَّرِيقَ طَوِيلٌ وَالمُنَافَسَةَ شَدِيدَةٌ، غَيْرَ أَنَّ لِي خُطَّةً بَدِيلَةً؛ فَإِذَا لَمْ أُقْبَلْ فِي الجَامِعَةِ الَّتِي أُرِيدُهَا، فَسَأَبْدَأُ بِتَدْرِيبٍ مِهْنِيٍّ. وَلَوْ نَجَحَ تَطْبِيقٌ وَاحِدٌ صَمَّمْتُهُ فِي إِنْقَاذِ حَيَاةٍ وَاحِدَةٍ، لَشَعَرْتُ أَنَّ كُلَّ هٰذَا التَّعَبِ وَالسَّهَرِ كَانَ يَسْتَحِقُّ العَنَاءَ.`;
const Q3B_FULL = `يُقَالُ لِلشَّبَابِ دَائِمًا: "اتَّبِعْ شَغَفَكَ"، لٰكِنَّ الوَاقِعَ أَكْثَرُ تَعْقِيدًا؛ فَالشَّغَفُ وَحْدَهُ لَا يَدْفَعُ الإِيجَارَ، وَالأَمَانُ وَحْدَهُ قَدْ يَجْعَلُ الحَيَاةَ مُمِلَّةً. فَكَيْفَ نَخْتَارُ؟
مِنْ نَاحِيَةٍ، يَعْمَلُ الإِنْسَانُ الشَّغُوفُ بِطَاقَةٍ أَكْبَرَ، وَيُبْدِعُ أَكْثَرَ، مِمَّا قَدْ يَقُودُهُ إِلَى النَّجَاحِ فِي مَجَالَاتٍ يَرَاهَا الآخَرُونَ صَعْبَةً. وَمِنْ نَاحِيَةٍ أُخْرَى، تُوَفِّرُ المِهَنُ المَضْمُونَةُ، كَالمُحَاسَبَةِ وَالتَّمْرِيضِ، دَخْلًا ثَابِتًا يَسْمَحُ بِبِنَاءِ أُسْرَةٍ وَحَيَاةٍ مُسْتَقِرَّةٍ.
وَقَدْ رَأَيْتُ حَلًّا ذَكِيًّا فِي تَجْرِبَةِ عَمِّي؛ فَقَدْ دَرَسَ المُحَاسَبَةَ وَعَمِلَ بِهَا عَشْرَ سَنَوَاتٍ، بَيْنَمَا كَانَ يَرْسُمُ فِي المَسَاءِ. وَعِنْدَمَا أَصْبَحَتْ لَوْحَاتُهُ تُبَاعُ، تَرَكَ عَمَلَهُ، وَافْتَتَحَ مَعْرِضَهُ الخَاصَّ، دُونَ أَنْ يُخَاطِرَ بِمُسْتَقْبَلِ أُسْرَتِهِ، وَهُوَ اليَوْمَ أَسْعَدُ مِنْ أَيِّ وَقْتٍ مَضَى.
صَحِيحٌ أَنَّ الاخْتِيَارَ صَعْبٌ، غَيْرَ أَنَّهُ لَيْسَ بِالضَّرُورَةِ إِمَّا هٰذَا أَوْ ذَاكَ. وَإِذَا جَمَعَ الشَّبَابُ بَيْنَ مِهْنَةٍ تُؤَمِّنُ حَيَاتَهُمْ وَشَغَفٍ يُغَذِّي أَرْوَاحَهُمْ، فَسَيَصِلُونَ إِلَى التَّوَازُنِ الَّذِي يَبْحَثُ عَنْهُ الجَمِيعُ، وَلَنْ يَضْطَرُّوا إِلَى الاخْتِيَارِ بَيْنَ الخُبْزِ وَالحُلْمِ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a careers-interview form, write an email telling a relative about your future plans, and write an extended piece about your ambitions or about passion versus security in career choices.',
  lift: [
    { ar: 'أَطْمَحُ إِلَى أَنْ أُصْبِحَ طَبِيبَةَ أَطْفَالٍ', en: 'I aspire to become a paediatrician (f.)' },
    { ar: 'إِذَا لَمْ أُقْبَلْ، فَسَأَدْرُسُ التَّمْرِيضَ', en: 'if I am not accepted, I will study nursing' },
    { ar: 'لَنْ أَتْرُكَ حُلْمِي أَبَدًا', en: 'I will never give up my dream' },
  ],
  checkTip: 'Check: sa- / sawfa + present for the future; lan + subjunctive (lan atruka); atamannā / aṭmaḥu ilā an + subjunctive; idhā + past … fa-sa- + present; idhā lam + jussive; uṣbiḥa / akūna + accusative job noun (ṭabībatan, mubarmijan).',
  FORM: {
    title: 'Careers-interview form', ar: 'اسْتِمَارَةُ مُقَابَلَةِ الإِرْشَادِ المِهْنِيِّ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالصَّفُّ', en: 'Name and class', model: 'سَلْمَى عُمَرُ، الحَادِي عَشَرَ', modelEn: 'Salma Omar, Year 11' },
      { core: true, ar: 'المَوَادُّ لِلسَّنَةِ القَادِمَةِ', en: 'Subjects for next year', model: 'الأَحْيَاءُ وَالكِيمْيَاءُ وَالرِّيَاضِيَّاتُ', modelEn: 'biology, chemistry and maths' },
      { core: true, ar: 'المِهْنَةُ الَّتِي تَحْلُمُ بِهَا', en: 'Dream career', model: 'طَبِيبَةُ أَطْفَالٍ', modelEn: 'a paediatrician (f.)' },
      { core: true, ar: 'الجَامِعَةُ المُفَضَّلَةُ', en: 'Preferred university', model: 'جَامِعَةُ بِرْمِنْغْهَامَ', modelEn: 'the University of Birmingham' },
      { core: true, ar: 'مَهَارَةٌ عِنْدَكَ', en: 'A skill you have', model: 'الصَّبْرُ', modelEn: 'patience' },
      { core: true, ar: 'خِبْرَةُ عَمَلٍ', en: 'Work experience', model: 'أُسْبُوعٌ فِي مُسْتَشْفًى', modelEn: 'a week in a hospital' },
      { ar: 'الخُطَّةُ البَدِيلَةُ', en: 'Plan B', model: 'دِرَاسَةُ التَّمْرِيضِ', modelEn: 'studying nursing' },
      { ar: 'جُمْلَةٌ: مَا هَدَفُكَ بَعْدَ عَشْرِ سَنَوَاتٍ؟', en: 'ONE sentence: your goal in ten years', model: 'أَطْمَحُ إِلَى أَنْ أَعْمَلَ طَبِيبَةً فِي مُنَظَّمَةٍ تُسَاعِدُ الأَطْفَالَ فِي البُلْدَانِ الفَقِيرَةِ.', modelEn: 'I aspire to work as a doctor for an organisation helping children in poor countries.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with aṭmaḥu ilā an + subjunctive.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 3: ṭabībatu aṭfālin (iḍāfa). Box 7: a verbal noun (dirāsat at-tamrīḍ). Box 8: aʿmala ṭabībatan (ḥāl in the accusative).',
  },
  Q2: {
    short: 'an email about your future plans', title: 'Question 2: my plans for the future', ar: 'خِطَطِي لِلْمُسْتَقْبَلِ',
    task: 'Write an email in Arabic to a relative about your plans for the future, of about 80–90 words. You must include: • what you will study next • your dream job and why • an experience that influenced your choice • your plan B, and a request for help.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'The future (sa-) and a hope (atamannā an).', 'A past experience AND a plan B (idhā lam … fa-sa-).', 'About 80–90 words.'],
    phrases: [['بَعْدَ الامْتِحَانَاتِ سَأَدْرُسُ …', 'after the exams I will study …'], ['أَتَمَنَّى أَنْ أُصْبِحَ … لِأَنِّي …', 'I hope to become … because I …'], ['فِي الشَّهْرِ المَاضِي زُرْتُ … فَأَعْجَبَنِي …', 'last month I visited … and I liked …'], ['إِذَا لَمْ أُقْبَلْ، فَسَأَدْرُسُ …', 'if I am not accepted, I will study …']],
    rubric: [
      ['task', 'اكْتُبِي رِسَالَةً إِلَى أَحَدِ أَقَارِبِكِ عَنْ خِطَطِكِ لِلْمُسْتَقْبَلِ (٨٠–٩٠ كَلِمَةً).', 'Write to a relative about your future plans (80–90 words).'],
      ['1', 'مَاذَا سَتَدْرُسِينَ بَعْدَ ذٰلِكَ؟', 'What you will study next'],
      ['2', 'مَا الوَظِيفَةُ الَّتِي تَحْلُمِينَ بِهَا؟ وَلِمَاذَا؟', 'Your dream job and why'],
      ['3', 'مَا التَّجْرِبَةُ الَّتِي أَثَّرَتْ فِي اخْتِيَارِكِ؟', 'An experience that influenced your choice'],
      ['4', 'مَا خُطَّتُكِ البَدِيلَةُ؟ وَاطْلُبِي مُسَاعَدَةً.', 'Your plan B, and ask for help'],
    ],
    qwords: 'سَتَدْرُسِينَ (will study — FUTURE) · تَحْلُمِينَ بِهَا (you dream of) · أَثَّرَتْ (influenced — PAST) · البَدِيلَةُ (alternative — use idhā lam … fa-sa-)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'بَعْدَ الامْتِحَانَاتِ سَأَدْرُسُ ______ .', 'After the exams I will study …'],
      ['2', 'أَتَمَنَّى أَنْ أُصْبِحَ ______ ، لِأَنِّي ______ .', 'I hope to become …, because I …'],
      ['3', 'فِي الشَّهْرِ المَاضِي ______ ، فَأَعْجَبَنِي ______ .', 'Last month …, and I liked …'],
      ['4', 'إِذَا لَمْ أُقْبَلْ، فَسَأَدْرُسُ ______ . هَلْ تُسَاعِدِينَنِي ______ ؟', 'If I’m not accepted, I’ll study … Can you help me …?'],
      ['end', 'مَعَ حُبِّي، ______', 'With love, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Auntie, how are you? I want to tell you about my plans for the future. After the exams I’ll study biology and chemistry at college. I hope to become a doctor, because I love helping people. Last month I visited a hospital with my school and talked to a kind doctor, and I really liked her work. In my opinion medicine is hard but a wonderful job. If I’m not accepted for medicine, I’ll study nursing. Can you help me choose a university? With love, Salma.”',
      find: ['سَأَدْرُسُ الأَحْيَاءَ', 'أَتَمَنَّى أَنْ أُصْبِحَ', 'فَأَعْجَبَنِي', 'إِذَا لَمْ أُقْبَلْ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Auntie, since you were the first to encourage me to study science, I wanted you to be the first to know my decision: I’ll study biology and chemistry next, and I aspire to become a paediatrician. This dream was confirmed when we visited the hospital last month and I saw a young doctor reassure a frightened child before an operation. The road is long, but I won’t give up easily; if I’m not accepted for medicine, I’ll study nursing and then try again. I hope you can help me visit universities and choose the best this summer. With love and gratitude, Salma.”',
      find: ['بِمَا أَنَّكِ', 'أَطْمَحُ إِلَى أَنْ', 'لَنْ أَسْتَسْلِمَ', 'إِذَا لَمْ أُقْبَلْ … فَسَأَدْرُسُ'],
    },
  },
  Q3: {
    a: { title: 'طُمُوحَاتِي لِلْمُسْتَقْبَلِ', en: 'My ambitions for the future', bullets: 'دِرَاسَتُكَ القَادِمَةُ · حُلْمُكَ المِهْنِيُّ وَسَبَبُهُ · تَجْرِبَةٌ أَثَّرَتْ فِي اخْتِيَارِكَ · خُطَّتُكَ البَدِيلَةُ', bulletsEn: 'Your next studies · your dream career and why · an experience that influenced your choice · your plan B' },
    b: { title: 'الشَّغَفُ أَمِ الأَمَانُ؟', en: 'Passion or security?', bullets: 'الاخْتِيَارُ الصَّعْبُ · مَزَايَا كُلِّ طَرِيقٍ · مِثَالٌ مِنَ الوَاقِعِ · رَأْيُكَ', bulletsEn: 'The difficult choice · the advantages of each path · a real example · your opinion' },
    plan: [
      'Next studies — baʿda al-imtiḥānāt sa-adrusu …, thumma sa-adhhabu ilā al-jāmiʿa.',
      'Dream job — ḥulmī an uṣbiḥa …; atamannā an aʿmala fī …; li-annī …',
      'Past influence — ʿindamā kuntu ṣaghīran kuntu urīdu …; lākin … ḥaḍartu / zurtu …, fa-ʿaraftu anna …',
      'Plan B — idhā ḥaṣaltu ʿalā … fa-sa- …, wa-idhā lam uqbal fa-sa- …; lan atruka ḥulmī; Stretch: law … la-.',
    ],
    frames: [
      { ar: 'حُلْمِي أَنْ أُصْبِحَ مُبَرْمِجًا.', en: 'present: my dream is to become a programmer.' },
      { ar: 'حَضَرْتُ دَوْرَةً، فَعَرَفْتُ أَنَّ هٰذَا مَا أُرِيدُهُ.', en: 'past: I took a course, and knew this is what I want.' },
      { ar: 'إِذَا لَمْ أُقْبَلْ، فَسَأَبْحَثُ عَنْ تَدْرِيبٍ مِهْنِيٍّ.', en: 'future: if I’m not accepted, I’ll look for an apprenticeship.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'I’m in Year 11 and think a lot about my future: after the exams I’ll study maths, physics and computing at a nearby college, then go to university in a big city → my dream is to become a programmer: I’ve loved computers since I was small and love solving problems; I hope to work for a big company, then found my own in ten years → as a child I wanted to be a footballer, but last year I took a coding course and made a small game, and knew this is what I want; the teacher was very pleased with my game → if I get good grades I’ll study computer science at Manchester; if I’m not accepted I’ll look for an apprenticeship. I’ll never give up my dream, however hard the road.', find: ['سَأَدْرُسُ', 'أَتَمَنَّى أَنْ أَعْمَلَ', 'فَعَرَفْتُ أَنَّ', 'لَنْ أَتْرُكَ'], notes: 'Core model: sa- + present, ḥulmī an uṣbiḥa + accusative, mundhu an kuntu, atamannā an … thumma uʾassisa, kuntu urīdu, fa- result, idhā … fa-sa- / idhā lam … fa-sa-, lan + subjunctive.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'Adults always ask “What do you want to be?”, as if the answer must be one word that never changes; I see the future as a road with stations, not a single door that opens once → my first station is clear: maths and computing, because I aspire to work in AI — specifically apps that help patients diagnose illness early → this dream was born in a sad moment: when my grandfather fell ill three years ago, his illness was found too late, and I wondered: couldn’t technology have spotted it sooner? Since that day I’ve read about digital medicine and followed the latest research → the road is long and competition fierce, but I have a plan B: if I’m not accepted at the university I want, I’ll start with an apprenticeship; “if one app I designed saved a single life, I’d feel all this effort and late nights had been worth the trouble”.', find: ['وَكَأَنَّ الجَوَابَ', 'أَطْمَحُ إِلَى أَنْ', 'اكْتُشِفَ مَرَضُهُ', 'لَوْ نَجَحَ … لَشَعَرْتُ'], notes: 'Full-mark model: wa-ka-anna, ammā anā fa-, lā (not … but) contrast, aṭmaḥu ilā an, a passive (wulida, uktushifa), a rhetorical question with a-lam yakun, mundhu … wa-anā, a concession with a plan B (idhā lam … fa-sa-) and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'passion or security?', text: Q3B_FULL, en: 'Young people are always told “follow your passion”, but reality is more complex: passion alone doesn’t pay the rent, and security alone can make life dull — so how do we choose? → passionate people work with more energy and create more, which can lead to success in fields others find hard; secure careers like accountancy and nursing provide a steady income for building a family and a stable life → I saw a clever solution in my uncle’s life: he studied accountancy and worked in it for ten years while painting in the evenings; when his paintings began to sell, he left his job and opened his own gallery without risking his family’s future, and is happier today than ever → the choice is hard, but it isn’t necessarily either-or; “if young people combine a career that secures their lives with a passion that feeds their souls, they’ll find the balance everyone seeks, and won’t have to choose between bread and dreams”.', find: ['يُقَالُ لِلشَّبَابِ', 'مِمَّا قَدْ يَقُودُهُ', 'بَيْنَمَا كَانَ يَرْسُمُ', 'إِذَا جَمَعَ … فَسَيَصِلُونَ'], notes: 'Full-mark model for the Stretch title: a passive hook with a quoted imperative, a two-sided “wahdahu”, a rhetorical question, a balanced view with mimmā, baynamā kāna + present, a passive (tubāʿu), dūna an, a concession with laysa bi-ḍ-ḍarūra immā … aw, idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; job nouns agree with me.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: sa-, atamannā an and a plan B with idhā lam … fa-sa-.' },
    { route: 'develop', text: 'Q3: four paragraphs from past influence to future plans.' },
    { route: 'stretch', text: 'Q3: aṭmaḥu ilā an, lan + subjunctive, a concession and law … la-.' },
  ],
};

module.exports = { speak, write };
