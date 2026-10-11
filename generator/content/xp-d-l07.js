'use strict';
/* Exam-practice data · TD-L07 · The Workplace and Working Conditions (comparatives; time expressions; kāna). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'D', n: 7, short: 'The Workplace and Working Conditions', arShort: 'مَكَانُ العَمَلِ وَظُرُوفُهُ', fileTitle: 'The_Workplace_and_Working_Conditions', title: 'The Workplace and Working Conditions', ar: 'مَكَانُ العَمَلِ وَظُرُوفُهُ', icon: 'FaBuilding', grammar: 'comparatives (aṭwal min, akthar rāḥa min); time expressions (min … ilā …, marratayn fī al-usbūʿ, sāʿāt al-ʿamal); kāna + accusative and kāna + present (used to)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: talk about part-time jobs and workplaces — hours (مِنَ التَّاسِعَةِ إِلَى الخَامِسَةِ), pay, colleagues and conditions — compare jobs (أَطْوَلُ مِنْ · أَكْثَرُ رَاحَةً مِنْ) and describe a past job with كَانَ.',
  words: [
    w(1, 'مَكْتَبٌ', 'an office', [['pl.', 'مَكَاتِبُ'], ['factory', 'مَصْنَعٌ · مَصَانِعُ'], ['shop', 'مَحَلٌّ · مَحَلَّاتٌ']]),
    w(2, 'عَمَلٌ جُزْئِيٌّ', 'a part-time job', [['full-time', 'عَمَلٌ بِدَوَامٍ كَامِلٍ'], ['shift', 'نَوْبَةٌ · نَوْبَاتٌ']]),
    w(3, 'سَاعَاتُ العَمَلِ', 'working hours', [['from … to', 'مِنَ … إِلَى …'], ['overtime', 'سَاعَاتٌ إِضَافِيَّةٌ']], { tag: 'time' }),
    w(4, 'رَاتِبٌ · أَجْرٌ', 'a salary · a wage', [['per hour', 'فِي السَّاعَةِ'], ['pl.', 'رَوَاتِبُ · أُجُورٌ']]),
    w(5, 'زَمِيلٌ', 'a colleague (m.)', [['f.', 'زَمِيلَةٌ'], ['pl.', 'زُمَلَاءُ · زَمِيلَاتٌ']]),
    w(6, 'مُدِيرٌ', 'a manager (m.)', [['f.', 'مُدِيرَةٌ'], ['pl.', 'مُدَرَاءُ · مُدِيرُونَ']]),
    w(7, 'زَبُونٌ', 'a customer', [['f.', 'زَبُونَةٌ'], ['pl.', 'زَبَائِنُ']]),
    w(8, 'عُطْلَةٌ', 'a holiday, day off', [['pl.', 'عُطَلٌ'], ['annual leave', 'إِجَازَةٌ سَنَوِيَّةٌ']]),
    w(9, 'ظُرُوفُ العَمَلِ', 'working conditions', [['good · bad', 'جَيِّدَةٌ · سَيِّئَةٌ'], ['safe', 'آمِنَةٌ']]),
    w(10, 'مَرَّتَيْنِ فِي الأُسْبُوعِ', 'twice a week', [['once a month', 'مَرَّةً فِي الشَّهْرِ'], ['at weekends', 'فِي نِهَايَةِ الأُسْبُوعِ']], { tag: 'frequency' }),
    w(11, 'أَطْوَلُ · أَقْصَرُ مِنْ', 'longer · shorter than', [['more comfortable', 'أَكْثَرُ رَاحَةً'], ['better paid', 'أَعْلَى أَجْرًا']], { tag: 'comparative' }),
    w(12, 'كُنْتُ أَعْمَلُ', 'I used to work', [['it was', 'كَانَ العَمَلُ مُتْعِبًا'], ['they were', 'كَانَ الزُّمَلَاءُ لُطَفَاءَ']], { tag: 'kāna' }),
  ],
  words1: { eyebrow: 'Language bank · workplaces and people', title: 'Office, shop, colleagues', ar: 'مَكَانُ العَمَلِ', notes: 'LANGUAGE BANK (2 min) — workplaces and people: أَعْمَلُ فِي مَحَلٍّ · زُمَلَائِي لُطَفَاءُ · المُدِيرَةُ صَارِمَةٌ. Hours: أَعْمَلُ مِنَ السَّاعَةِ التَّاسِعَةِ إِلَى الخَامِسَةِ · مَرَّتَيْنِ فِي الأُسْبُوعِ.' },
  words2: { eyebrow: 'Language bank · comparing and the past', title: 'Longer, better paid, used to', ar: 'المُقَارَنَةُ وَالمَاضِي', notes: 'LANGUAGE BANK (2 min) — comparatives + tamyīz: أَكْثَرُ رَاحَةً · أَعْلَى أَجْرًا · أَطْوَلُ سَاعَاتٍ. kāna + accusative: كَانَ العَمَلُ مُمِلًّا. kāna + present = used to: كُنْتُ أَعْمَلُ فِي مَقْهًى.' },
  checkCore: 'gave working hours and described a workplace',
  checkDevelop: 'compared two jobs and described a past job with kāna',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a café job', title: 'Role play A — Asking about a weekend job', ar: 'عَمَلٌ فِي نِهَايَةِ الأُسْبُوعِ', you: 'a teenager', them: 'the café manager',
      tasks: [
        { core: true, ex: 'أَهْلًا! كَيْفَ أُسَاعِدُكَ؟', task: 'Say you saw the job advert.', help: 'رَأَيْتُ إِعْلَانَ …', model: 'رَأَيْتُ إِعْلَانَ العَمَلِ فِي النَّافِذَةِ.', modelEn: 'I saw the job advert in the window.' },
        { core: true, ex: 'مَتَى تَسْتَطِيعُ أَنْ تَعْمَلَ؟', task: 'Say when you can work.', help: 'أَسْتَطِيعُ أَنْ أَعْمَلَ يَوْمَ …', model: 'أَسْتَطِيعُ أَنْ أَعْمَلَ يَوْمَ السَّبْتِ وَيَوْمَ الأَحَدِ.', modelEn: 'I can work on Saturday and Sunday.' },
        { core: true, ex: 'العَمَلُ مِنَ التَّاسِعَةِ إِلَى الثَّالِثَةِ.', task: 'Ask about the pay.', help: 'كَمْ … فِي السَّاعَةِ؟', model: 'كَمِ الأَجْرُ فِي السَّاعَةِ؟', modelEn: 'What is the pay per hour?' },
        { core: true, ex: 'عَشَرَةُ جُنَيْهَاتٍ.', task: 'Ask what you will do.', help: 'مَاذَا سَأَفْعَلُ …؟', model: 'وَمَاذَا سَأَفْعَلُ فِي العَمَلِ؟', modelEn: 'And what will I do at work?' },
        { core: true, unexpected: true, ex: 'هَلْ عَمِلْتَ مِنْ قَبْلُ؟', task: 'Answer the unexpected question (past).', help: 'نَعَمْ، عَمِلْتُ فِي … / لَا، …', model: 'نَعَمْ، عَمِلْتُ فِي مَحَلِّ عَمِّي فِي الصَّيْفِ.', modelEn: 'Yes, I worked in my uncle’s shop in the summer.' },
      ],
      girl: 'أُسَاعِدُكِ · تَسْتَطِيعِينَ · عَمِلْتِ',
      notes: 'Core: iʿlān al-ʿamal, yawma as-sabti, min … ilā …, kam al-ajr fī as-sāʿa, ʿasharatu junayhātin (3–10 + pl.), the past ʿamiltu.',
    },
    {
      id: 'B', level: 'Core+', setting: 'comparing two job offers', title: 'Role play B — Which job should I take?', ar: 'أَيُّ عَمَلٍ أَخْتَارُ؟', you: 'a student with two offers', them: 'an older sibling',
      tasks: [
        { core: true, ex: 'مَا العَمَلَانِ؟', task: 'Name the two jobs.', help: 'الأَوَّلُ فِي … وَالثَّانِي فِي …', model: 'الأَوَّلُ فِي مَطْعَمٍ، وَالثَّانِي فِي مَكْتَبَةٍ.', modelEn: 'The first is in a restaurant, and the second in a bookshop.' },
        { core: true, ex: 'وَالسَّاعَاتُ؟', task: 'Compare the hours.', help: 'سَاعَاتُ … أَطْوَلُ مِنْ …', model: 'سَاعَاتُ المَطْعَمِ أَطْوَلُ مِنْ سَاعَاتِ المَكْتَبَةِ.', modelEn: 'The restaurant hours are longer than the bookshop’s.' },
        { ex: 'وَالأَجْرُ؟', task: 'Compare the pay with a contrast.', help: 'المَطْعَمُ أَعْلَى أَجْرًا، لٰكِنَّ …', model: 'المَطْعَمُ أَعْلَى أَجْرًا، لٰكِنَّ المَكْتَبَةَ أَهْدَأُ وَأَكْثَرُ رَاحَةً.', modelEn: 'The restaurant pays more, but the bookshop is quieter and more comfortable.' },
        { ex: 'أَنَا أَعْرِفُ مُدِيرَ المَكْتَبَةِ.', task: 'ASK what he is like.', help: 'كَيْفَ هُوَ؟ هَلْ …؟', model: 'كَيْفَ هُوَ؟ هَلْ هُوَ لَطِيفٌ مَعَ المُوَظَّفِينَ؟', modelEn: 'What’s he like? Is he kind to the staff?' },
        { unexpected: true, ex: 'إِذَنْ، أَيُّهُمَا سَتَخْتَارُ؟', task: 'Answer the unexpected question (decision).', help: 'سَأَخْتَارُ … لِأَنَّ …', model: 'سَأَخْتَارُ المَكْتَبَةَ، لِأَنِّي أُحِبُّ الكُتُبَ، وَسَأَسْتَطِيعُ أَنْ أُرَاجِعَ دُرُوسِي هُنَاكَ.', modelEn: 'The bookshop, because I love books and I’ll be able to revise there.' },
      ],
      girl: 'سَتَخْتَارِينَ',
      notes: 'Core+: a dual (al-ʿamalān), aṭwalu min + iḍāfa, aʿlā ajran (comparative + tamyīz), lākinna, the CANDIDATE asks (task 4), a future decision with li-anna.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a job interview', title: 'Role play C — Talking about your last job', ar: 'عَمَلِي السَّابِقُ', you: 'a job applicant', them: 'a supermarket manager',
      tasks: [
        { ex: 'أَيْنَ كُنْتَ تَعْمَلُ قَبْلَ هٰذَا؟', task: 'Describe your past job (kuntu + present).', help: 'كُنْتُ أَعْمَلُ فِي … مِنْ … إِلَى …', model: 'كُنْتُ أَعْمَلُ فِي مَقْهًى قُرْبَ المَحَطَّةِ، مِنَ السَّابِعَةِ صَبَاحًا إِلَى الظُّهْرِ، كُلَّ يَوْمِ سَبْتٍ.', modelEn: 'I used to work in a café near the station, from 7 a.m. to noon, every Saturday.' },
        { ex: 'وَكَيْفَ كَانَتْ ظُرُوفُ العَمَلِ؟', task: 'Describe conditions with kāna / kānat.', help: 'كَانَ … وَكَانَتْ …', model: 'كَانَ المُدِيرُ عَادِلًا، وَكَانَ الزُّمَلَاءُ لُطَفَاءَ، لٰكِنَّ المَكَانَ كَانَ ضَيِّقًا وَمُزْدَحِمًا.', modelEn: 'The manager was fair and colleagues kind, but the place was cramped and crowded.' },
        { ex: 'لِمَاذَا تَرَكْتَ العَمَلَ؟', task: 'Give a reason.', help: 'تَرَكْتُهُ لِأَنَّ …', model: 'تَرَكْتُهُ لِأَنَّ المَقْهَى أُغْلِقَ بَعْدَ أَنْ بِيعَ المَبْنَى.', modelEn: 'I left because the café closed after the building was sold.' },
        { ex: 'عَمَلُنَا هُنَا فِي نِهَايَةِ الأُسْبُوعِ وَبَعْضِ الأُمْسِيَاتِ.', task: 'Compare with your old job.', help: 'هٰذَا أَكْثَرُ … مِنْ … لٰكِنَّ …', model: 'هٰذَا أَكْثَرُ سَاعَاتٍ مِنْ عَمَلِي السَّابِقِ، لٰكِنِّي أَسْتَطِيعُ أَنْ أُنَظِّمَ وَقْتِي، لِأَنَّ امْتِحَانَاتِي انْتَهَتْ.', modelEn: 'It’s more hours than my last job, but I can organise my time, as my exams are over.' },
        { unexpected: true, ex: 'مَاذَا تَفْعَلُ إِذَا غَضِبَ زَبُونٌ؟', task: 'Answer the unexpected question (condition).', help: 'إِذَا غَضِبَ …، فَـ…', model: 'إِذَا غَضِبَ زَبُونٌ، فَإِنِّي أَسْتَمِعُ إِلَيْهِ بِهُدُوءٍ، ثُمَّ أَطْلُبُ المُسَاعَدَةَ مِنَ المُدِيرِ.', modelEn: 'If a customer got angry, I’d listen calmly, then ask the manager for help.' },
      ],
      girl: 'كُنْتِ تَعْمَلِينَ · تَرَكْتِ · تَفْعَلِينَ',
      notes: 'Develop: kuntu aʿmalu (past habit), min … ilā …, kāna + accusative (ʿādilan, ḍayyiqan), lākinna, a passive (ughliqa, bīʿa), akthar sāʿātin min, idhā … fa-innī.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a workers’ rights podcast', title: 'Role play D — Should teenagers work while studying?', ar: 'العَمَلُ أَثْنَاءَ الدِّرَاسَةِ', you: 'a student guest', them: 'the podcast host',
      tasks: [
        { ex: 'هَلْ يَنْبَغِي أَنْ يَعْمَلَ المُرَاهِقُونَ أَثْنَاءَ الدِّرَاسَةِ؟', task: 'Give a balanced view.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، يُعَلِّمُهُمُ العَمَلُ المَسْؤُولِيَّةَ وَقِيمَةَ المَالِ، وَمِنْ نَاحِيَةٍ أُخْرَى، قَدْ يُؤَثِّرُ فِي دَرَجَاتِهِمْ إِذَا كَانَتِ السَّاعَاتُ طَوِيلَةً.', modelEn: 'Work teaches responsibility and the value of money, but can hurt grades if hours are long.' },
        { ex: 'وَمَا تَجْرِبَتُكَ أَنْتَ؟', task: 'Describe your experience with evidence.', help: 'كُنْتُ أَعْمَلُ … فَلَاحَظْتُ أَنَّ …', model: 'كُنْتُ أَعْمَلُ عِشْرِينَ سَاعَةً فِي الأُسْبُوعِ فِي مَتْجَرٍ، فَلَاحَظْتُ أَنَّ تَرْكِيزِي فِي الصَّفِّ أَصْبَحَ أَضْعَفَ، فَخَفَّضْتُهَا إِلَى ثَمَانِي سَاعَاتٍ.', modelEn: 'I worked twenty hours a week in a shop; I noticed my focus in class weakened, so I cut it to eight.' },
        { ex: 'لٰكِنَّ بَعْضَ الأُسَرِ تَحْتَاجُ إِلَى هٰذَا المَالِ.', task: 'Concede and say who must act.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّهُ يَجِبُ عَلَى …', model: 'صَحِيحٌ أَنَّ هٰذَا وَاقِعٌ، غَيْرَ أَنَّهُ يَجِبُ عَلَى أَصْحَابِ العَمَلِ أَنْ يَحْتَرِمُوا سَاعَاتِ الدِّرَاسَةِ، وَأَلَّا يَطْلُبُوا نَوْبَاتٍ لَيْلِيَّةً.', modelEn: 'True, but employers must respect study hours and not ask for night shifts.' },
        { ex: 'كَيْفَ كَانَتْ ظُرُوفُ العَمَلِ لِلشَّبَابِ فِي المَاضِي؟', task: 'Compare past and present.', help: 'كَانَ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَ كَثِيرٌ مِنَ الأَطْفَالِ يَعْمَلُونَ فِي المَصَانِعِ سَاعَاتٍ طَوِيلَةً، أَمَّا اليَوْمَ فَتَحْمِيهِمْ قَوَانِينُ تُحَدِّدُ أَعْمَارَهُمْ وَسَاعَاتِهِمْ.', modelEn: 'Many children worked long hours in factories; today laws protect them, limiting their age and hours.' },
        { unexpected: true, ex: 'لَوْ كُنْتَ صَاحِبَ عَمَلٍ، كَيْفَ تُعَامِلُ المُوَظَّفِينَ الشَّبَابَ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ كُنْتُ …، لَـ…', model: 'لَوْ كُنْتُ صَاحِبَ عَمَلٍ، لَأَعْطَيْتُ الطُّلَّابَ سَاعَاتٍ مَرِنَةً فِي فَتْرَةِ الامْتِحَانَاتِ، وَلَدَرَّبْتُهُمْ عَلَى مَهَارَاتٍ تَنْفَعُهُمْ مُسْتَقْبَلًا.', modelEn: 'If I were an employer, I’d give students flexible hours at exam time and train them in skills for the future.' },
      ],
      girl: 'تَجْرِبَتُكِ · كُنْتِ صَاحِبَةَ عَمَلٍ · تُعَامِلِينَ',
      notes: 'Stretch: a balanced view with idhā kānat, kuntu + present + fa-lāḥaẓtu anna + fa- action, a concession with yajibu ʿalā … an … wa-allā, kāna + present vs ammā … fa-, law … la-.',
      modelFoot: 'Stretch: balance, measurable personal evidence, a concession with obligation, past vs present and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'العَمَلُ', aim: 'one full sentence per question',
      qs: [
        { q: 'هَلْ عِنْدَكَ عَمَلٌ جُزْئِيٌّ؟', en: 'Do you have a part-time job?', start: 'نَعَمْ، أَعْمَلُ فِي … / لَا، …', model: 'نَعَمْ، أَعْمَلُ فِي مَخْبَزٍ يَوْمَ السَّبْتِ.', modelEn: 'Yes, I work in a bakery on Saturdays.' },
        { q: 'مَا سَاعَاتُ عَمَلِكَ؟', en: 'What are your working hours?', start: 'أَعْمَلُ مِنَ … إِلَى …', model: 'أَعْمَلُ مِنَ السَّاعَةِ الثَّامِنَةِ إِلَى الوَاحِدَةِ.', modelEn: 'I work from eight to one.' },
        { q: 'أَيْنَ يَعْمَلُ وَالِدُكَ؟', en: 'Where does your father work?', start: 'يَعْمَلُ فِي …', model: 'يَعْمَلُ فِي مَكْتَبٍ فِي وَسَطِ المَدِينَةِ.', modelEn: 'He works in an office in the town centre.' },
        { q: 'هَلْ تُحِبُّ العَمَلَ فِي مَكْتَبٍ؟', en: 'Would you like to work in an office?', start: 'نَعَمْ / لَا، لِأَنَّ …', model: 'لَا، لِأَنِّي لَا أُحِبُّ الجُلُوسَ طُولَ اليَوْمِ.', modelEn: 'No, because I don’t like sitting all day.' },
        { q: 'مَاذَا تَفْعَلُ بِالمَالِ؟', en: 'What do you do with the money?', start: 'أَدَّخِرُ … / أَشْتَرِي …', model: 'أَدَّخِرُ نِصْفَهُ، وَأَشْتَرِي بِالبَاقِي مَلَابِسَ.', modelEn: 'I save half and buy clothes with the rest.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + hours with min … ilā … = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'ظُرُوفُ العَمَلِ', aim: 'two or three sentences, with a comparison and a past detail',
      qs: [
        { q: 'صِفْ مَكَانَ عَمَلٍ زُرْتَهُ أَوْ عَمِلْتَ فِيهِ.', en: 'Describe a workplace you visited or worked in.', start: 'كَانَ … وَكَانَ … لٰكِنَّ …', model: 'كَانَ مَكْتَبُ أُمِّي وَاسِعًا وَحَدِيثًا، وَكَانَ المُوَظَّفُونَ يَعْمَلُونَ فِي مَجْمُوعَاتٍ، لٰكِنَّ الضَّجِيجَ كَانَ عَالِيًا.', modelEn: 'Mum’s office was spacious and modern, with staff working in groups, but it was noisy.' },
        { q: 'قَارِنْ بَيْنَ العَمَلِ فِي مَكْتَبٍ وَالعَمَلِ فِي الخَارِجِ.', en: 'Compare working in an office and outdoors.', start: 'العَمَلُ فِي … أَكْثَرُ … بَيْنَمَا …', model: 'العَمَلُ فِي المَكْتَبِ أَكْثَرُ رَاحَةً، بَيْنَمَا العَمَلُ فِي الخَارِجِ أَكْثَرُ حَرَكَةً وَصِحَّةً، لٰكِنَّهُ صَعْبٌ فِي الشِّتَاءِ.', modelEn: 'Office work is more comfortable, whereas outdoor work is more active and healthy — but hard in winter.' },
        { q: 'مَا أَهَمُّ شَيْءٍ فِي مَكَانِ العَمَلِ؟', en: 'What matters most in a workplace?', start: 'أَهَمُّ شَيْءٍ … لِأَنَّ …', model: 'أَهَمُّ شَيْءٍ الزُّمَلَاءُ، لِأَنَّ الجَوَّ الجَيِّدَ يَجْعَلُ السَّاعَاتِ الطَّوِيلَةَ أَقْصَرَ.', modelEn: 'Colleagues — a good atmosphere makes long hours feel shorter.' },
        { q: 'كَيْفَ كَانَ عَمَلُ جَدِّكَ؟', en: 'What was your grandfather’s work like?', start: 'كَانَ جَدِّي يَعْمَلُ … وَكَانَ …', model: 'كَانَ جَدِّي يَعْمَلُ فِي مَصْنَعٍ، وَكَانَتْ سَاعَاتُهُ طَوِيلَةً جِدًّا، وَلَمْ تَكُنْ عِنْدَهُ عُطْلَةٌ سَنَوِيَّةٌ.', modelEn: 'My grandad worked in a factory: very long hours and no annual holiday.' },
        { q: 'مَا العَمَلُ الَّذِي سَتَبْحَثُ عَنْهُ فِي الصَّيْفِ؟', en: 'What job will you look for in the summer?', start: 'سَأَبْحَثُ عَنْ … لِأَنَّ …', model: 'سَأَبْحَثُ عَنْ عَمَلٍ فِي مُخَيَّمٍ صَيْفِيٍّ لِلْأَطْفَالِ، لِأَنِّي أُحِبُّ الرِّيَاضَةَ وَالعَمَلَ فِي الهَوَاءِ الطَّلْقِ.', modelEn: 'A job at a children’s summer camp — I love sport and working outdoors.' },
      ],
      foot: 'Develop: two or three sentences — a comparative + tamyīz, kāna in the past and a future plan.',
      modelFoot: 'Comparison + kāna + time frame = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'العَمَلُ وَالحَيَاةُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ أُسْبُوعُ العَمَلِ ذُو الأَيَّامِ الأَرْبَعَةِ فِكْرَةٌ جَيِّدَةٌ؟', en: 'Is a four-day working week a good idea?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، يُعْطِي المُوَظَّفِينَ وَقْتًا أَطْوَلَ مَعَ أُسَرِهِمْ، وَمِنْ نَاحِيَةٍ أُخْرَى، قَدْ لَا يُنَاسِبُ المُسْتَشْفَيَاتِ وَالمَدَارِسَ.', modelEn: 'It gives staff more family time, but may not suit hospitals and schools.' },
        { q: 'أَيُّهُمَا أَهَمُّ: الرَّاتِبُ أَمْ ظُرُوفُ العَمَلِ؟', en: 'Which matters more: pay or conditions?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الرَّاتِبَ ضَرُورِيٌّ، غَيْرَ أَنَّ مُدِيرًا ظَالِمًا أَوْ مَكَانًا خَطِيرًا يَجْعَلُ أَيَّ رَاتِبٍ غَيْرَ كَافٍ.', modelEn: 'Pay is necessary, but an unfair boss or a dangerous place makes any salary not enough.' },
        { q: 'كَيْفَ غَيَّرَتِ التِّكْنُولُوجْيَا أَمَاكِنَ العَمَلِ؟', en: 'How has technology changed workplaces?', start: 'كَانَ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَ المُوَظَّفُونَ يَذْهَبُونَ إِلَى المَكْتَبِ كُلَّ يَوْمٍ، أَمَّا اليَوْمَ فَيَعْمَلُ كَثِيرٌ مِنْهُمْ مِنَ البَيْتِ يَوْمَيْنِ فِي الأُسْبُوعِ.', modelEn: 'Staff used to go in every day; today many work from home two days a week.' },
        { q: 'هَلْ يَجِبُ أَنْ يَحْصُلَ المُتَدَرِّبُونَ عَلَى أَجْرٍ؟', en: 'Should interns be paid?', start: 'أَرَى أَنَّهُ يَجِبُ … لِأَنَّ …', model: 'أَرَى أَنَّهُ يَجِبُ ذٰلِكَ، لِأَنَّ التَّدْرِيبَ غَيْرَ المَدْفُوعِ لَا يَسْتَطِيعُهُ إِلَّا الأَغْنِيَاءُ، مِمَّا يُقَلِّلُ الفُرَصَ لِلْآخَرِينَ.', modelEn: 'Yes — only the rich can afford unpaid internships, which reduces chances for others.' },
        { q: 'لَوْ صَمَّمْتَ مَكَانَ العَمَلِ المِثَالِيَّ، كَيْفَ يَكُونُ؟', en: 'If you designed the ideal workplace, what would it be like?', start: 'لَوْ صَمَّمْتُهُ، لَـ…', model: 'لَوْ صَمَّمْتُهُ، لَجَعَلْتُ فِيهِ حَدِيقَةً وَغُرْفَةً لِلرَّاحَةِ، وَلَسَمَحْتُ لِلْمُوَظَّفِينَ بِاخْتِيَارِ سَاعَاتِهِمْ.', modelEn: 'I’d include a garden and a rest room, and let staff choose their hours.' },
      ],
      foot: 'Stretch: a balanced view, a concession, kāna + present vs ammā … fa-, lā … illā with mimmā, law … la-.',
      modelFoot: 'Stretch: balance, ṣaḥīḥun anna … ghayra anna, past vs present, lā … illā and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I gave working hours with min … ilā …' },
    { route: 'core', text: 'I described a workplace and the people there.' },
    { route: 'develop', text: 'I compared two jobs (aṭwal, akthar rāḥa, aʿlā ajran).' },
    { route: 'develop', text: 'I described a past job with kāna / kuntu aʿmalu.' },
    { route: 'stretch', text: 'I gave a balanced view, a concession or law … la-.' },
  ],
};
speak.RP[2].tasks[4].help = 'إِذَا غَضِبَ …، فَإِنِّي أَسْتَمِعُ …';
speak.RP[3].tasks[3].help = 'كَانَ كَثِيرٌ مِنَ الأَطْفَالِ … أَمَّا اليَوْمَ فَتَحْمِيهِمْ …';
speak.RP[3].tasks[4].help = 'لَوْ كُنْتُ …، لَأَعْطَيْتُ …';
speak.CONV[2].qs[2].start = 'كَانَ المُوَظَّفُونَ … أَمَّا اليَوْمَ فَيَعْمَلُ …';
speak.CONV[2].qs[4].start = 'لَوْ صَمَّمْتُهُ، لَجَعَلْتُ …';

const Q2_CORE = `مَرْحَبًا يَا عَلِيُّ،
كَيْفَ حَالُكَ؟ عِنْدِي أَخْبَارٌ جَدِيدَةٌ: وَجَدْتُ عَمَلًا جُزْئِيًّا فِي مَكْتَبَةٍ قُرْبَ بَيْتِي. أَعْمَلُ يَوْمَ السَّبْتِ مِنَ التَّاسِعَةِ إِلَى الثَّالِثَةِ، وَالأَجْرُ عَشَرَةُ جُنَيْهَاتٍ فِي السَّاعَةِ. أُرَتِّبُ الكُتُبَ، وَأُسَاعِدُ الزَّبَائِنَ. فِي الصَّيْفِ المَاضِي كُنْتُ أَعْمَلُ فِي مَطْعَمٍ، وَكَانَ العَمَلُ مُتْعِبًا جِدًّا. فِي رَأْيِي، المَكْتَبَةُ أَفْضَلُ مِنَ المَطْعَمِ، لِأَنَّهَا أَهْدَأُ، وَالمُدِيرَةَ لَطِيفَةٌ. بِالمَالِ سَأَشْتَرِي حَاسُوبًا جَدِيدًا، وَسَأَدَّخِرُ البَاقِيَ لِلْجَامِعَةِ.
إِلَى اللِّقَاءِ،
مَازِنٌ`;
const Q2_FULL = `عَزِيزِي عَلِيُّ،
بَدَأْتُ هٰذَا الشَّهْرَ عَمَلًا جُزْئِيًّا فِي مَكْتَبَةٍ صَغِيرَةٍ لَا تَبْعُدُ عَنْ بَيْتِي إِلَّا خَمْسَ دَقَائِقَ؛ أَعْمَلُ فِيهَا كُلَّ سَبْتٍ مِنَ التَّاسِعَةِ إِلَى الثَّالِثَةِ، مُقَابِلَ عَشَرَةِ جُنَيْهَاتٍ فِي السَّاعَةِ. وَتَشْمَلُ مَهَامِّي تَرْتِيبَ الرُّفُوفِ، وَاقْتِرَاحَ الكُتُبِ عَلَى الزَّبَائِنِ، وَهُوَ الجُزْءُ الَّذِي أُحِبُّهُ أَكْثَرَ. وَعَلَى عَكْسِ المَطْعَمِ الَّذِي كُنْتُ أَعْمَلُ فِيهِ الصَّيْفَ المَاضِي، حَيْثُ كَانَتِ النَّوْبَاتُ طَوِيلَةً وَالضَّجِيجُ لَا يَتَوَقَّفُ، أَجِدُ هُنَا هُدُوءًا وَمُدِيرَةً تُقَدِّرُ جُهُودَ المُوَظَّفِينَ. صَحِيحٌ أَنَّ الأَجْرَ أَقَلُّ قَلِيلًا، غَيْرَ أَنَّ الظُّرُوفَ أَفْضَلُ بِكَثِيرٍ. وَسَأَدَّخِرُ مُعْظَمَ مَا أَكْسِبُهُ لِلْجَامِعَةِ.
مَعَ تَحِيَّاتِي،
مَازِنٌ`;
const Q3A_CORE = `أَعْمَلُ فِي مَخْبَزٍ صَغِيرٍ فِي حَيِّنَا كُلَّ يَوْمِ سَبْتٍ. أَبْدَأُ فِي السَّاعَةِ السَّابِعَةِ صَبَاحًا، وَأَنْتَهِي فِي الثَّانِيَةِ ظُهْرًا. الأَجْرُ تِسْعَةُ جُنَيْهَاتٍ فِي السَّاعَةِ. أَبِيعُ الخُبْزَ وَالحَلَوِيَّاتِ، وَأُنَظِّفُ المَكَانَ فِي النِّهَايَةِ. أَحْيَانًا أُسَاعِدُ الخَبَّازَ فِي صُنْعِ الكَعْكِ.
مَكَانُ العَمَلِ صَغِيرٌ وَدَافِئٌ، وَرَائِحَتُهُ جَمِيلَةٌ جِدًّا. زُمَلَائِي لُطَفَاءُ، وَالمُدِيرُ يُسَاعِدُنِي دَائِمًا. لٰكِنَّ العَمَلَ مُتْعِبٌ قَلِيلًا، لِأَنِّي أَقِفُ طُولَ الوَقْتِ، وَالمَخْبَزُ مُزْدَحِمٌ فِي الصَّبَاحِ.
فِي الصَّيْفِ المَاضِي كُنْتُ أَعْمَلُ فِي مَطْعَمٍ كَبِيرٍ. كَانَتِ السَّاعَاتُ أَطْوَلَ، وَكَانَ المُدِيرُ صَارِمًا جِدًّا. كَانَ الأَجْرُ أَعْلَى، لٰكِنِّي لَمْ أَكُنْ سَعِيدًا هُنَاكَ، فَتَرَكْتُ العَمَلَ بَعْدَ شَهْرٍ.
فِي رَأْيِي، ظُرُوفُ العَمَلِ أَهَمُّ مِنَ الرَّاتِبِ. فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَعْمَلَ فِي مَكَانٍ هَادِئٍ وَمُرِيحٍ، مَعَ زُمَلَاءَ لُطَفَاءَ، وَسَأَدَّخِرُ مَالِي لِأُسَافِرَ حَوْلَ العَالَمِ.`;
const Q3A_FULL = `لَمْ أَكُنْ أَتَخَيَّلُ أَنَّ عَمَلًا بَسِيطًا فِي مَخْبَزِ الحَيِّ سَيُعَلِّمُنِي مَا لَمْ تُعَلِّمْنِي إِيَّاهُ سَنَوَاتٌ مِنَ الدِّرَاسَةِ. فَمُنْذُ سَنَةٍ أَعْمَلُ هُنَاكَ كُلَّ سَبْتٍ، مِنَ السَّابِعَةِ صَبَاحًا حَتَّى الثَّانِيَةِ ظُهْرًا، مُقَابِلَ أَجْرٍ مُتَوَاضِعٍ وَخُبْزٍ طَازَجٍ.
وَمَعَ أَنَّ العَمَلَ يَتَطَلَّبُ الوُقُوفَ سَاعَاتٍ طَوِيلَةً، فَإِنَّ الجَوَّ هُنَاكَ يُنْسِينِي التَّعَبَ؛ فَصَاحِبُ المَخْبَزِ يُعَامِلُنَا كَأَفْرَادِ أُسْرَتِهِ، وَيُشَجِّعُنَا عَلَى تَجْرِبَةِ وَصَفَاتٍ جَدِيدَةٍ، بَلْ إِنَّ إِحْدَى وَصَفَاتِي أَصْبَحَتْ تُبَاعُ كُلَّ أُسْبُوعٍ، وَيَسْأَلُ عَنْهَا الزَّبَائِنُ بِالاسْمِ.
وَقَدْ أَدْرَكْتُ قِيمَةَ هٰذِهِ الظُّرُوفِ عِنْدَمَا قَارَنْتُهَا بِتَجْرِبَتِي فِي مَطْعَمٍ كَبِيرٍ قَبْلَ عَامَيْنِ؛ فَقَدْ كَانَ الأَجْرُ أَعْلَى، غَيْرَ أَنَّ المُدِيرَ كَانَ يَصْرُخُ عَلَى المُوَظَّفِينَ، وَكَانَتِ النَّوْبَاتُ تَمْتَدُّ إِلَى مُنْتَصَفِ اللَّيْلِ، فَاسْتَقَلْتُ بَعْدَ شَهْرٍ وَاحِدٍ.
صَحِيحٌ أَنَّ المَالَ ضَرُورِيٌّ، غَيْرَ أَنَّ الاحْتِرَامَ فِي مَكَانِ العَمَلِ لَا يُقَدَّرُ بِثَمَنٍ. وَلَوْ عَرَضَ عَلَيَّ أَحَدٌ ضِعْفَ أَجْرِي لِأَعْمَلَ فِي مَكَانٍ لَا أَشْعُرُ فِيهِ بِالتَّقْدِيرِ، لَرَفَضْتُ دُونَ تَرَدُّدٍ.`;
const Q3B_FULL = `قَبْلَ جِيلٍ وَاحِدٍ، كَانَ العَمَلُ يَعْنِي مَكْتَبًا ثَابِتًا، وَسَاعَاتٍ مِنَ التَّاسِعَةِ إِلَى الخَامِسَةِ، وَوَظِيفَةً تَدُومُ مَدَى الحَيَاةِ. أَمَّا اليَوْمَ، فَتَتَغَيَّرُ أَمَاكِنُ العَمَلِ وَظُرُوفُهُ بِسُرْعَةٍ مُذْهِلَةٍ. فَهَلْ هٰذَا التَّغْيِيرُ فِي صَالِحِ العُمَّالِ؟
مِنْ نَاحِيَةٍ، أَصْبَحَ كَثِيرٌ مِنَ المُوَظَّفِينَ يَعْمَلُونَ مِنَ البَيْتِ، مِمَّا يُوَفِّرُ سَاعَاتِ المُوَاصَلَاتِ، وَيُتِيحُ وَقْتًا أَطْوَلَ مَعَ الأُسْرَةِ. وَمِنْ نَاحِيَةٍ أُخْرَى، انْتَشَرَتْ وَظَائِفُ مُؤَقَّتَةٌ بِلَا عُطَلٍ مَدْفُوعَةٍ وَلَا تَأْمِينٍ صِحِّيٍّ، خُصُوصًا فِي التَّوْصِيلِ وَالتَّطْبِيقَاتِ.
وَقَدْ رَأَيْتُ الوَجْهَيْنِ فِي أُسْرَتِي؛ فَأُمِّي تَعْمَلُ مِنَ البَيْتِ ثَلَاثَةَ أَيَّامٍ فِي الأُسْبُوعِ، وَتَقُولُ إِنَّهَا أَصْبَحَتْ أَكْثَرَ إِنْتَاجًا وَرَاحَةً، بَيْنَمَا يَعْمَلُ ابْنُ خَالَتِي سَائِقَ تَوْصِيلٍ اثْنَتَيْ عَشْرَةَ سَاعَةً يَوْمِيًّا، دُونَ أَنْ يَعْرِفَ كَمْ سَيَكْسِبُ آخِرَ الشَّهْرِ.
صَحِيحٌ أَنَّ المُرُونَةَ مِيزَةٌ كَبِيرَةٌ، غَيْرَ أَنَّهَا لَا يَجِبُ أَنْ تَكُونَ عَلَى حِسَابِ حُقُوقِ العُمَّالِ. وَإِذَا وَضَعَتِ الحُكُومَاتُ قَوَانِينَ تَحْمِي هٰذِهِ الوَظَائِفَ الجَدِيدَةَ، فَسَيَجْمَعُ عَالَمُ العَمَلِ بَيْنَ الحُرِّيَّةِ وَالأَمَانِ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a part-time job application, write an email about your new part-time job, and write an extended piece about a workplace you know or about how working conditions are changing.',
  lift: [
    { ar: 'أَعْمَلُ كُلَّ سَبْتٍ مِنَ التَّاسِعَةِ إِلَى الثَّالِثَةِ', en: 'I work every Saturday from nine to three' },
    { ar: 'كَانَتِ السَّاعَاتُ أَطْوَلَ، وَكَانَ المُدِيرُ صَارِمًا', en: 'the hours were longer, and the manager was strict' },
    { ar: 'ظُرُوفُ العَمَلِ أَهَمُّ مِنَ الرَّاتِبِ', en: 'working conditions matter more than the salary' },
  ],
  checkTip: 'Check: times with min … ilā … and feminine ordinals; kāna / kānat + accusative (kāna ṣāriman, kānat ṭawīlatan); kuntu + present for “used to”; comparatives with tamyīz (aʿlā ajran, akthar rāḥatan); numbers + nouns (ʿasharatu junayhātin, tisʿatu junayhātin).',
  FORM: {
    title: 'Part-time job application', ar: 'طَلَبُ عَمَلٍ جُزْئِيٍّ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالعُمْرُ', en: 'Name and age', model: 'مَازِنٌ سَعِيدٌ، سَبْعَ عَشْرَةَ سَنَةً', modelEn: 'Mazen Saeed, seventeen' },
      { core: true, ar: 'الوَظِيفَةُ المَطْلُوبَةُ', en: 'Job applied for', model: 'مُسَاعِدٌ فِي مَكْتَبَةٍ', modelEn: 'bookshop assistant' },
      { core: true, ar: 'الأَيَّامُ المُتَاحَةُ', en: 'Days available', model: 'السَّبْتُ وَالأَحَدُ', modelEn: 'Saturday and Sunday' },
      { core: true, ar: 'السَّاعَاتُ المُتَاحَةُ', en: 'Hours available', model: 'مِنَ التَّاسِعَةِ إِلَى الثَّالِثَةِ', modelEn: '9 to 3' },
      { core: true, ar: 'العَمَلُ السَّابِقُ', en: 'Previous job', model: 'نَادِلٌ فِي مَطْعَمٍ', modelEn: 'a waiter in a restaurant' },
      { core: true, ar: 'مُدَّةُ العَمَلِ السَّابِقِ', en: 'Length of previous job', model: 'شَهْرَانِ', modelEn: 'two months' },
      { ar: 'لِمَاذَا تَرَكْتَ عَمَلَكَ السَّابِقَ؟', en: 'Why you left your last job', model: 'كَانَتِ النَّوْبَاتُ طَوِيلَةً جِدًّا', modelEn: 'the shifts were very long' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُنَاسِبُكَ هٰذِهِ الوَظِيفَةُ؟', en: 'ONE sentence: why this job suits you', model: 'تُنَاسِبُنِي لِأَنَّ المَكْتَبَةَ أَهْدَأُ مِنَ المَطْعَمِ، وَأَنَا أُحِبُّ القِرَاءَةَ.', modelEn: 'It suits me because a bookshop is quieter than a restaurant, and I love reading.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with a comparative.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 6: shahrān (dual). Box 7: kānat + accusative. Box 8: ahdaʾu min (comparative).',
  },
  Q2: {
    short: 'an email about a part-time job', title: 'Question 2: my new part-time job', ar: 'عَمَلِي الجُزْئِيُّ الجَدِيدُ',
    task: 'You have started a part-time job. Write an email in Arabic to a friend of about 80–90 words. You must include: • where you work, your hours and your pay • what you do there • a job you did before and what it was like • your opinion of the new job and what you will do with the money.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Hours with min … ilā … and a pay number.', 'kāna / kuntu for the past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['وَجَدْتُ عَمَلًا جُزْئِيًّا فِي …', 'I found a part-time job in …'], ['أَعْمَلُ يَوْمَ … مِنَ … إِلَى …', 'I work on … from … to …'], ['كُنْتُ أَعْمَلُ فِي … وَكَانَ العَمَلُ …', 'I used to work in … and the work was …'], ['بِالمَالِ سَأَشْتَرِي …', 'with the money I will buy …']],
    rubric: [
      ['task', 'بَدَأْتَ عَمَلًا جُزْئِيًّا. اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ (٨٠–٩٠ كَلِمَةً).', 'You started a part-time job: write to your friend (80–90 words).'],
      ['1', 'أَيْنَ تَعْمَلُ؟ وَمَا سَاعَاتُكَ وَأَجْرُكَ؟', 'Where you work; hours and pay'],
      ['2', 'مَاذَا تَفْعَلُ هُنَاكَ؟', 'What you do there'],
      ['3', 'مَا العَمَلُ الَّذِي قُمْتَ بِهِ قَبْلَ ذٰلِكَ؟ وَكَيْفَ كَانَ؟', 'A previous job and what it was like'],
      ['4', 'مَا رَأْيُكَ فِي العَمَلِ الجَدِيدِ؟ وَمَاذَا سَتَفْعَلُ بِالمَالِ؟', 'Your opinion; what you will do with the money'],
    ],
    qwords: 'أَيْنَ (where) · مَا سَاعَاتُكَ (your hours) · كَيْفَ كَانَ (what was it like — PAST) · سَتَفْعَلُ (will do — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'وَجَدْتُ عَمَلًا جُزْئِيًّا فِي ______ . أَعْمَلُ يَوْمَ ______ مِنَ ______ إِلَى ______ .', 'A job in …; I work on … from … to …'],
      ['2', 'أُرَتِّبُ ______ ، وَأُسَاعِدُ ______ .', 'I tidy …, and help …'],
      ['3', 'فِي الصَّيْفِ المَاضِي كُنْتُ أَعْمَلُ فِي ______ ، وَكَانَ العَمَلُ ______ .', 'Last summer I worked in …, and the work was …'],
      ['4', 'فِي رَأْيِي ______ أَفْضَلُ مِنْ ______ . بِالمَالِ سَأَشْتَرِي ______ .', '… is better than …; I’ll buy …'],
      ['end', 'إِلَى اللِّقَاءِ، ______', 'See you, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Ali, how are you? I have news: I found a part-time job in a bookshop near my house. I work on Saturdays from nine to three, and the pay is ten pounds an hour. I tidy the books and help customers. Last summer I used to work in a restaurant, and the work was very tiring. In my opinion the bookshop is better than the restaurant, because it’s quieter and the manager (f.) is kind. With the money I’ll buy a new computer and save the rest for university. See you, Mazen.”',
      find: ['مِنَ التَّاسِعَةِ إِلَى الثَّالِثَةِ', 'عَشَرَةُ جُنَيْهَاتٍ', 'كُنْتُ أَعْمَلُ', 'أَفْضَلُ مِنَ المَطْعَمِ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Ali, this month I started a part-time job in a small bookshop just five minutes from home; I work every Saturday from nine to three for ten pounds an hour. My tasks include arranging shelves and recommending books to customers — the part I love most. Unlike the restaurant where I worked last summer, where shifts were long and the noise never stopped, here I find calm and a manager who values the staff’s efforts. The pay is slightly lower, but the conditions are far better. I’ll save most of what I earn for university. Best wishes, Mazen.”',
      find: ['لَا تَبْعُدُ … إِلَّا', 'وَهُوَ الجُزْءُ الَّذِي', 'عَلَى عَكْسِ المَطْعَمِ الَّذِي', 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ'],
    },
  },
  Q3: {
    a: { title: 'مَكَانُ عَمَلٍ أَعْرِفُهُ', en: 'A workplace I know', bullets: 'المَكَانُ وَسَاعَاتُ العَمَلِ · الزُّمَلَاءُ وَالظُّرُوفُ · مُقَارَنَةٌ بِعَمَلٍ سَابِقٍ · رَأْيُكَ وَخِطَطُكَ', bulletsEn: 'The place and hours · colleagues and conditions · comparison with a previous job · your opinion and plans' },
    b: { title: 'ظُرُوفُ العَمَلِ تَتَغَيَّرُ', en: 'Working conditions are changing', bullets: 'العَمَلُ فِي المَاضِي وَاليَوْمَ · الإِيجَابِيَّاتُ وَالسَّلْبِيَّاتُ · مِثَالٌ مِنْ حَيَاتِكَ · رَأْيُكَ', bulletsEn: 'Work then and now · positives and negatives · an example from your life · your opinion' },
    plan: [
      'The place and hours — aʿmalu fī … min … ilā …; al-ajr … junayhāt fī as-sāʿa.',
      'Colleagues and conditions — zumalāʾī luṭafāʾ, al-mudīr …; lākinna al-ʿamal mutʿib li-annī …',
      'A previous job — kuntu aʿmalu fī …, kānat as-sāʿāt aṭwal, kāna al-mudīr ṣāriman …',
      'Opinion + future — ẓurūf al-ʿamal ahammu min ar-rātib, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'أَبْدَأُ فِي السَّاعَةِ السَّابِعَةِ، وَأَنْتَهِي فِي الثَّانِيَةِ.', en: 'present: I start at seven and finish at two.' },
      { ar: 'كَانَتِ السَّاعَاتُ أَطْوَلَ، وَكَانَ المُدِيرُ صَارِمًا.', en: 'past: the hours were longer, and the manager was strict.' },
      { ar: 'سَأَدَّخِرُ مَالِي لِأُسَافِرَ حَوْلَ العَالَمِ.', en: 'future: I will save my money to travel the world.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'I work in a small local bakery every Saturday, 7 a.m. to 2 p.m., for nine pounds an hour, selling bread and pastries and cleaning at the end; sometimes I help the baker make cakes → the place is small, warm and smells lovely; colleagues are kind and the manager always helps, but it’s a bit tiring standing all day, and the bakery is busy in the morning → last summer I worked in a big restaurant: longer hours, a very strict manager, higher pay — but I wasn’t happy, so I left after a month → conditions matter more than pay; I want a calm workplace with kind colleagues, and I’ll save to travel the world.', find: ['فِي السَّاعَةِ السَّابِعَةِ', 'زُمَلَائِي لُطَفَاءُ', 'كَانَتِ السَّاعَاتُ أَطْوَلَ', 'أَهَمُّ مِنَ الرَّاتِبِ'], notes: 'Core model: hours with ordinals, tisʿatu junayhātin, non-human vs human plural agreement, kuntu aʿmalu, kānat + comparative, lam akun + fa- result, li- purpose.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'I never imagined a simple job in the local bakery would teach me what years of school hadn’t; for a year I’ve worked there every Saturday, 7 to 2, for modest pay and fresh bread → although the job means standing for hours, the atmosphere makes me forget the tiredness: the owner treats us like family and encourages new recipes — one of mine is now sold every week, and customers ask for it by name → I realised the value of this when I compared it with a big restaurant two years ago: higher pay, but the manager shouted at staff and shifts ran till midnight, so I resigned after one month → money is necessary, but respect at work is priceless; “if someone offered me double my pay to work where I don’t feel valued, I’d refuse without hesitation”.', find: ['لَمْ أَكُنْ أَتَخَيَّلُ', 'مَعَ أَنَّ … فَإِنَّ', 'كَانَ يَصْرُخُ', 'لَوْ عَرَضَ … لَرَفَضْتُ'], notes: 'Full-mark model: lam akun ataakhayyalu + sa-, mundhu + present, maʿa anna … fa-inna, ka- simile, bal inna + passive (tubāʿu), kāna + present habits in the past, a concession with a passive (lā yuqaddaru) and law … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'working conditions are changing', text: Q3B_FULL, en: 'A generation ago work meant a fixed office, nine-to-five and a job for life; today workplaces and conditions change at amazing speed — is this good for workers? → many staff now work from home, saving commuting hours and gaining family time; but temporary jobs without paid leave or health insurance have spread, especially in delivery and apps → I’ve seen both in my family: Mum works from home three days a week and says she’s more productive and relaxed, while my cousin drives deliveries twelve hours a day without knowing what he’ll earn by month’s end → flexibility is a big advantage, but not at the expense of workers’ rights; “if governments pass laws protecting these new jobs, the world of work will combine freedom and security”.', find: ['أَمَّا اليَوْمَ، فَتَتَغَيَّرُ', 'مِمَّا يُوَفِّرُ', 'اثْنَتَيْ عَشْرَةَ سَاعَةً', 'إِذَا وَضَعَتْ … فَسَيَجْمَعُ'], notes: 'Full-mark model for the Stretch title: a three-part past description, ammā … fa-, a rhetorical question, mimmā, bi-lā … wa-lā, reported speech with inna, ithnatay ʿashrata sāʿatan, dūna an, a concession and idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; hours and the dual (shahrān) are correct.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: hours with min … ilā …, a pay number and kuntu aʿmalu.' },
    { route: 'develop', text: 'Q3: four paragraphs with comparatives and kāna + accusative.' },
    { route: 'stretch', text: 'Q3: a balanced view, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
