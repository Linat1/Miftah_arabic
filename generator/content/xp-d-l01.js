'use strict';
/* Exam-practice data · TD-L01 · Learning Institutions and Stages of Education (nisba adjectives; comparatives; prepositions). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'D', n: 1, short: 'Institutions and Stages of Education', arShort: 'مَرَاحِلُ التَّعْلِيمِ', fileTitle: 'Learning_Institutions_and_Stages_of_Education', title: 'Learning Institutions and Stages of Education', ar: 'المُؤَسَّسَاتُ التَّعْلِيمِيَّةُ وَمَرَاحِلُ التَّعْلِيمِ', icon: 'FaSchool', grammar: 'nisba adjectives (ḥukūmiyya, khāṣṣa, ibtidāʾiyya); comparatives (akbaru min, aṣʿabu min); prepositions (fī, ilā, baʿda, qabla)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: describe your school and the stages of education, compare state and private schools or the UK and an Arab country (أَكْبَرُ مِنْ · بَيْنَمَا), and talk about your route so far and next.',
  words: [
    w(1, 'مَدْرَسَةٌ', 'a school', [['pl.', 'مَدَارِسُ'], ['state', 'مَدْرَسَةٌ حُكُومِيَّةٌ'], ['private', 'مَدْرَسَةٌ خَاصَّةٌ']]),
    w(2, 'رَوْضَةُ الأَطْفَالِ', 'nursery, kindergarten', [['pl.', 'رِيَاضُ الأَطْفَالِ']]),
    w(3, 'المَرْحَلَةُ الابْتِدَائِيَّةُ', 'the primary stage', [['secondary', 'الثَّانَوِيَّةُ'], ['pl.', 'المَرَاحِلُ']]),
    w(4, 'جَامِعَةٌ', 'a university', [['pl.', 'جَامِعَاتٌ'], ['university (adj.)', 'جَامِعِيٌّ · جَامِعِيَّةٌ']]),
    w(5, 'كُلِّيَّةٌ · مَعْهَدٌ', 'a college · an institute', [['pl.', 'كُلِّيَّاتٌ · مَعَاهِدُ'], ['vocational', 'مَعْهَدٌ مِهْنِيٌّ']]),
    w(6, 'طَالِبٌ', 'a student (m.)', [['f.', 'طَالِبَةٌ'], ['pl.', 'طُلَّابٌ · طَالِبَاتٌ']]),
    w(7, 'مُعَلِّمٌ', 'a teacher (m.)', [['f.', 'مُعَلِّمَةٌ'], ['pl.', 'مُعَلِّمُونَ · مُعَلِّمَاتٌ']]),
    w(8, 'مُخْتَلَطٌ', 'mixed (school)', [['f.', 'مُخْتَلَطَةٌ'], ['boys’ / girls’', 'لِلْبَنِينَ · لِلْبَنَاتِ']]),
    w(9, 'زِيٌّ مَدْرَسِيٌّ', 'a school uniform', [['pl.', 'أَزْيَاءٌ مَدْرَسِيَّةٌ'], ['compulsory', 'إِجْبَارِيٌّ']]),
    w(10, 'إِلِكْتْرُونِيٌّ · عَنْ بُعْدٍ', 'online · remote', [['f.', 'إِلِكْتْرُونِيَّةٌ'], ['online school', 'مَدْرَسَةٌ إِلِكْتْرُونِيَّةٌ']], { tag: 'nisba' }),
    w(11, 'أَكْبَرُ مِنْ …', 'bigger than …', [['harder', 'أَصْعَبُ'], ['more expensive', 'أَغْلَى']], { tag: 'comparative' }),
    w(12, 'بَيْنَمَا', 'whereas', [['as for … then', 'أَمَّا نَحْنُ فَنَبْدَأُ …'], ['both', 'كِلْتَاهُمَا']], { tag: 'contrast' }),
  ],
  words1: { eyebrow: 'Language bank · institutions (sg. · pl. · nisba)', title: 'School, college, university', ar: 'المُؤَسَّسَاتُ التَّعْلِيمِيَّةُ', notes: 'LANGUAGE BANK (2 min) — nisba adjectives agree: مَدْرَسَةٌ حُكُومِيَّةٌ · مَعْهَدٌ مِهْنِيٌّ · جَامِعَاتٌ بَرِيطَانِيَّةٌ (non-human pl. → f. sg.). Stages: رَوْضَةٌ → ابْتِدَائِيَّةٌ → ثَانَوِيَّةٌ → جَامِعَةٌ.' },
  words2: { eyebrow: 'Language bank · comparing schools and systems', title: 'Bigger, harder, whereas', ar: 'المُقَارَنَةُ', notes: 'LANGUAGE BANK (2 min) — comparatives never change for gender: المَدْرَسَةُ الخَاصَّةُ أَغْلَى مِنَ الحُكُومِيَّةِ. Contrast: بَيْنَمَا + sentence; أَمَّا فِي … فَـ …' },
  checkCore: 'described their school with two nisba adjectives',
  checkDevelop: 'compared two schools or systems with a comparative and baynamā',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a school open day', title: 'Role play A — At a school open day', ar: 'يَوْمُ الأَبْوَابِ المَفْتُوحَةِ', you: 'a new student', them: 'a teacher showing you round',
      tasks: [
        { core: true, ex: 'أَهْلًا! فِي أَيِّ صَفٍّ أَنْتَ؟', task: 'Say your year.', help: 'أَنَا فِي الصَّفِّ …', model: 'أَنَا فِي الصَّفِّ العَاشِرِ.', modelEn: 'I am in Year 10.' },
        { core: true, ex: 'وَأَيْنَ دَرَسْتَ قَبْلَ ذٰلِكَ؟', task: 'Name your old school and its type.', help: 'دَرَسْتُ فِي مَدْرَسَةٍ …', model: 'دَرَسْتُ فِي مَدْرَسَةٍ حُكُومِيَّةٍ صَغِيرَةٍ.', modelEn: 'I studied at a small state school.' },
        { core: true, ex: 'مَدْرَسَتُنَا كَبِيرَةٌ.', task: 'Ask how many students there are.', help: 'كَمْ طَالِبًا …؟', model: 'كَمْ طَالِبًا فِي المَدْرَسَةِ؟', modelEn: 'How many students are in the school?' },
        { core: true, ex: 'أَلْفُ طَالِبٍ وَطَالِبَةٍ.', task: 'Compare with your old school.', help: 'هِيَ أَكْبَرُ مِنْ …', model: 'هِيَ أَكْبَرُ مِنْ مَدْرَسَتِي القَدِيمَةِ بِكَثِيرٍ.', modelEn: 'It is much bigger than my old school.' },
        { core: true, unexpected: true, ex: 'هَلْ تُحِبُّ الزِّيَّ المَدْرَسِيَّ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ / لَا، لِأَنَّ …', model: 'نَعَمْ، لِأَنَّهُ مُرِيحٌ وَجَمِيلٌ.', modelEn: 'Yes, because it is comfortable and smart.' },
      ],
      girl: 'دَرَسْتِ · تُحِبِّينَ',
      notes: 'Core: madrasa ḥukūmiyya ṣaghīra (nisba + adjective agreement), kam ṭāliban (kam + accusative singular), akbaru min … bi-kathīr.',
    },
    {
      id: 'B', level: 'Core+', setting: 'choosing a sixth form', title: 'Role play B — Choosing a sixth-form college', ar: 'اخْتِيَارُ كُلِّيَّةٍ', you: 'a Year 11 student', them: 'a careers adviser',
      tasks: [
        { core: true, ex: 'مَاذَا تُرِيدُ أَنْ تَفْعَلَ بَعْدَ الصَّفِّ الحَادِي عَشَرَ؟', task: 'Say what you want to do next.', help: 'أُرِيدُ أَنْ أَدْرُسَ فِي …', model: 'أُرِيدُ أَنْ أَدْرُسَ فِي كُلِّيَّةٍ قَرِيبَةٍ مِنْ بَيْتِي.', modelEn: 'I want to study at a college near my home.' },
        { core: true, ex: 'لِمَاذَا لَا تَبْقَى فِي مَدْرَسَتِكَ؟', task: 'Give a reason.', help: 'لِأَنَّ الكُلِّيَّةَ …', model: 'لِأَنَّ الكُلِّيَّةَ فِيهَا مَوَادُّ أَكْثَرُ.', modelEn: 'Because the college offers more subjects.' },
        { ex: 'هُنَاكَ كُلِّيَّتَانِ فِي المِنْطَقَةِ.', task: 'ASK about the difference.', help: 'مَا الفَرْقُ بَيْنَهُمَا؟', model: 'مَا الفَرْقُ بَيْنَهُمَا؟ وَأَيُّهُمَا أَقْرَبُ؟', modelEn: 'What’s the difference between them? And which is closer?' },
        { ex: 'الأُولَى حُكُومِيَّةٌ وَمُخْتَلَطَةٌ، وَالثَّانِيَةُ خَاصَّةٌ لِلْبَنَاتِ.', task: 'Choose and justify with a comparison.', help: 'أُفَضِّلُ … لِأَنَّهَا … بَيْنَمَا …', model: 'أُفَضِّلُ الحُكُومِيَّةَ، لِأَنَّهَا مَجَّانِيَّةٌ، بَيْنَمَا الخَاصَّةُ غَالِيَةٌ جِدًّا.', modelEn: 'I prefer the state one, because it is free, whereas the private one is very expensive.' },
        { unexpected: true, ex: 'وَمَاذَا بَعْدَ الكُلِّيَّةِ؟', task: 'Answer the unexpected question (future).', help: 'سَأَدْرُسُ … فِي الجَامِعَةِ', model: 'سَأَدْرُسُ الهَنْدَسَةَ فِي الجَامِعَةِ، إِنْ شَاءَ اللّٰهُ.', modelEn: 'I will study engineering at university, God willing.' },
      ],
      girl: 'تُرِيدِينَ · تَبْقَيْنَ · مَدْرَسَتِكِ',
      notes: 'Core+: nisba adjectives in the f. (ḥukūmiyya, mukhtalaṭa, majjāniyya), a dual (kulliyyatān), the CANDIDATE asks (mā al-farq …?), baynamā for contrast.',
    },
    {
      id: 'C', level: 'Develop', setting: 'an exchange visit', title: 'Role play C — Comparing schools with an exchange student', ar: 'مَدْرَسَتِي وَمَدْرَسَتُكَ', you: 'a UK student', them: 'an exchange student from Jordan',
      tasks: [
        { ex: 'صِفْ لِي مَدْرَسَتَكَ.', task: 'Describe it with three details.', help: 'مَدْرَسَتِي … فِيهَا … وَ…', model: 'مَدْرَسَتِي ثَانَوِيَّةٌ مُخْتَلَطَةٌ، فِيهَا أَلْفُ طَالِبٍ، وَمُخْتَبَرَاتٌ حَدِيثَةٌ، وَمَلْعَبٌ كَبِيرٌ.', modelEn: 'My school is a mixed secondary with a thousand students, modern labs and a big pitch.' },
        { ex: 'فِي الأُرْدُنِّ نَبْدَأُ الدِّرَاسَةَ فِي السَّابِعَةِ وَالنِّصْفِ.', task: 'Compare the school day.', help: 'أَمَّا نَحْنُ فَنَبْدَأُ … بَيْنَمَا …', model: 'أَمَّا نَحْنُ فَنَبْدَأُ فِي الثَّامِنَةِ وَالنِّصْفِ، بَيْنَمَا يَنْتَهِي يَوْمُنَا فِي الثَّالِثَةِ وَالنِّصْفِ.', modelEn: 'We start at 8.30, whereas our day ends at 3.30.' },
        { ex: 'كَيْفَ كَانَتْ مَدْرَسَتُكَ الابْتِدَائِيَّةُ؟', task: 'Describe it in the past.', help: 'كَانَتْ … وَكُنَّا …', model: 'كَانَتْ صَغِيرَةً وَقَرِيبَةً مِنْ بَيْتِي، وَكُنَّا نَلْعَبُ فِي الحَدِيقَةِ كُلَّ يَوْمٍ.', modelEn: 'It was small and near my home, and we played in the garden every day.' },
        { ex: 'أَيُّهُمَا أَصْعَبُ فِي رَأْيِكَ: الابْتِدَائِيَّةُ أَمِ الثَّانَوِيَّةُ؟', task: 'Compare with two reasons.', help: 'الثَّانَوِيَّةُ أَصْعَبُ، لِأَنَّ … وَلِأَنَّ …', model: 'الثَّانَوِيَّةُ أَصْعَبُ بِكَثِيرٍ، لِأَنَّ المَوَادَّ أَكْثَرُ، وَلِأَنَّ عِنْدَنَا امْتِحَانَاتٍ مُهِمَّةً.', modelEn: 'Secondary is much harder: more subjects and important exams.' },
        { unexpected: true, ex: 'هَلْ تُحِبُّ أَنْ تَدْرُسَ فِي الأُرْدُنِّ؟', task: 'Answer the unexpected question (future + condition).', help: 'نَعَمْ، إِذَا … فَسَـ…', model: 'نَعَمْ، إِذَا سَنَحَتْ لِي الفُرْصَةُ، فَسَأَدْرُسُ فِي جَامِعَةٍ أُرْدُنِّيَّةٍ لِأُحَسِّنَ لُغَتِي العَرَبِيَّةَ.', modelEn: 'Yes — if I get the chance, I’ll study at a Jordanian university to improve my Arabic.' },
      ],
      girl: 'صِفِي · مَدْرَسَتَكِ · رَأْيِكِ · تُحِبِّينَ',
      notes: 'Develop: a description with non-human plurals (mukhtabarātun ḥadītha), ammā … fa- and baynamā, kānat + kunnā + present, two reasons with a comparative, a nisba in a conditional answer.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a radio phone-in', title: 'Role play D — State, private or online school?', ar: 'أَيُّ مَدْرَسَةٍ أَفْضَلُ؟', you: 'a student caller', them: 'the presenter',
      tasks: [
        { ex: 'هَلِ المَدَارِسُ الخَاصَّةُ أَفْضَلُ مِنَ الحُكُومِيَّةِ؟', task: 'Give a balanced view.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، الصُّفُوفُ فِي الخَاصَّةِ أَصْغَرُ، وَمِنْ نَاحِيَةٍ أُخْرَى، تَجْمَعُ الحُكُومِيَّةُ طُلَّابًا مِنْ كُلِّ الخَلْفِيَّاتِ.', modelEn: 'Private classes are smaller, but state schools bring together students from every background.' },
        { ex: 'وَأَنْتَ تَدْرُسُ فِي مَدْرَسَةٍ إِلِكْتْرُونِيَّةٍ، أَلَيْسَ كَذٰلِكَ؟', task: 'Explain why with evidence.', help: 'نَعَمْ، انْتَقَلْتُ إِلَيْهَا … لِأَنَّ …', model: 'نَعَمْ، انْتَقَلْتُ إِلَيْهَا قَبْلَ سَنَتَيْنِ، لِأَنَّهَا تُقَدِّمُ مَوَادَّ لَمْ تَكُنْ مُتَوَفِّرَةً فِي مَدِينَتِي، كَاللُّغَةِ العَرَبِيَّةِ.', modelEn: 'Yes, I moved two years ago because it offers subjects not available in my town, like Arabic.' },
        { ex: 'لٰكِنَّ الطُّلَّابَ يَحْتَاجُونَ إِلَى أَصْدِقَاءَ!', task: 'Concede and counter.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الحَيَاةَ الاجْتِمَاعِيَّةَ أَصْعَبُ، غَيْرَ أَنِّي أَلْتَقِي زُمَلَائِي فِي الغُرَفِ الجَانِبِيَّةِ، وَأُمَارِسُ الرِّيَاضَةَ فِي نَادٍ مَحَلِّيٍّ.', modelEn: 'Social life is harder, but I meet classmates in breakout rooms and play sport at a local club.' },
        { ex: 'كَيْفَ كَانَ التَّعْلِيمُ فِي زَمَنِ أَجْدَادِكَ؟', task: 'Compare past and present.', help: 'كَانَ جَدِّي … أَمَّا اليَوْمَ فَأَحْضُرُ …', model: 'كَانَ جَدِّي يَمْشِي سَاعَةً إِلَى مَدْرَسَةٍ فِيهَا صَفٌّ وَاحِدٌ، أَمَّا اليَوْمَ فَأَحْضُرُ دُرُوسِي وَأَنَا فِي غُرْفَتِي.', modelEn: 'My grandad walked an hour to a one-room school; today I attend lessons from my bedroom.' },
        { unexpected: true, ex: 'لَوْ كُنْتَ وَزِيرَ التَّعْلِيمِ، مَاذَا تُغَيِّرُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ كُنْتُ وَزِيرًا، لَـ…', model: 'لَوْ كُنْتُ وَزِيرَ التَّعْلِيمِ، لَجَعَلْتُ كُلَّ المَدَارِسِ تُقَدِّمُ دُرُوسًا إِلِكْتْرُونِيَّةً إِضَافِيَّةً، لِكَيْ يَخْتَارَ كُلُّ طَالِبٍ مَا يُنَاسِبُهُ.', modelEn: 'If I were education minister, I’d have every school offer extra online lessons so each student can choose what suits them.' },
      ],
      girl: 'تَدْرُسِينَ · أَجْدَادِكِ · كُنْتِ',
      notes: 'Stretch: a balanced view, intaqaltu + lam takun mutawaffira, a concession, kāna + present vs ammā … fa-, law … la- with li-kay.',
      modelFoot: 'Stretch: balance, evidence from experience, ṣaḥīḥun anna … ghayra anna, past vs present and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'مَدْرَسَتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'مَا اسْمُ مَدْرَسَتِكَ؟', en: 'What is your school called?', start: 'اسْمُ مَدْرَسَتِي …', model: 'اسْمُ مَدْرَسَتِي مَدْرَسَةُ المَدِينَةِ.', modelEn: 'My school is called Al Madina School.' },
        { q: 'هَلْ مَدْرَسَتُكَ حُكُومِيَّةٌ أَمْ خَاصَّةٌ؟', en: 'Is your school state or private?', start: 'مَدْرَسَتِي …', model: 'مَدْرَسَتِي خَاصَّةٌ وَإِلِكْتْرُونِيَّةٌ.', modelEn: 'My school is private and online.' },
        { q: 'فِي أَيِّ صَفٍّ أَنْتَ؟', en: 'Which year are you in?', start: 'أَنَا فِي الصَّفِّ …', model: 'أَنَا فِي الصَّفِّ الحَادِي عَشَرَ.', modelEn: 'I am in Year 11.' },
        { q: 'كَمْ طَالِبًا فِي صَفِّكَ؟', en: 'How many students are in your class?', start: 'فِي صَفِّي …', model: 'فِي صَفِّي عِشْرُونَ طَالِبًا.', modelEn: 'There are twenty students in my class.' },
        { q: 'هَلْ تُحِبُّ مَدْرَسَتَكَ؟', en: 'Do you like your school?', start: 'نَعَمْ، أُحِبُّهَا لِأَنَّ …', model: 'نَعَمْ، أُحِبُّهَا لِأَنَّ المُعَلِّمِينَ لُطَفَاءُ.', modelEn: 'Yes, I like it because the teachers are kind.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a nisba adjective that agrees = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'رِحْلَتِي التَّعْلِيمِيَّةُ', aim: 'two or three sentences, with a comparison and a past detail',
      qs: [
        { q: 'صِفْ مَدْرَسَتَكَ الابْتِدَائِيَّةَ.', en: 'Describe your primary school.', start: 'كَانَتْ مَدْرَسَتِي … وَكُنْتُ …', model: 'كَانَتْ مَدْرَسَتِي الابْتِدَائِيَّةُ صَغِيرَةً وَهَادِئَةً، وَكُنْتُ أَمْشِي إِلَيْهَا مَعَ أُمِّي كُلَّ صَبَاحٍ.', modelEn: 'My primary school was small and quiet, and I walked there with Mum every morning.' },
        { q: 'مَا الفَرْقُ بَيْنَ المَرْحَلَةِ الابْتِدَائِيَّةِ وَالثَّانَوِيَّةِ؟', en: 'What is the difference between primary and secondary?', start: 'فِي الابْتِدَائِيَّةِ … بَيْنَمَا فِي الثَّانَوِيَّةِ …', model: 'فِي الابْتِدَائِيَّةِ كَانَ عِنْدَنَا مُعَلِّمٌ وَاحِدٌ، بَيْنَمَا فِي الثَّانَوِيَّةِ لِكُلِّ مَادَّةٍ مُعَلِّمٌ مُخْتَلِفٌ.', modelEn: 'In primary we had one teacher, whereas in secondary each subject has a different teacher.' },
        { q: 'هَلْ تُفَضِّلُ المَدَارِسَ المُخْتَلَطَةَ؟', en: 'Do you prefer mixed schools?', start: 'أُفَضِّلُ … لِأَنَّ …', model: 'أُفَضِّلُ المَدَارِسَ المُخْتَلَطَةَ، لِأَنَّهَا تُشْبِهُ الحَيَاةَ الحَقِيقِيَّةَ وَالجَامِعَةَ.', modelEn: 'I prefer mixed schools, because they are like real life and university.' },
        { q: 'قَارِنْ بَيْنَ التَّعْلِيمِ فِي بَرِيطَانْيَا وَفِي بَلَدٍ عَرَبِيٍّ.', en: 'Compare education in Britain and an Arab country.', start: 'فِي بَرِيطَانْيَا … أَمَّا فِي … فَـ…', model: 'فِي بَرِيطَانْيَا يَلْبَسُ الطُّلَّابُ زِيًّا مَدْرَسِيًّا، أَمَّا فِي مِصْرَ فَالمَدَارِسُ الحُكُومِيَّةُ أَكْبَرُ وَالصُّفُوفُ أَكْثَرُ ازْدِحَامًا.', modelEn: 'In Britain pupils wear uniform; in Egypt state schools are bigger and classes more crowded.' },
        { q: 'أَيْنَ سَتَدْرُسُ بَعْدَ المَدْرَسَةِ؟', en: 'Where will you study after school?', start: 'سَأَدْرُسُ فِي … لِأَنَّ …', model: 'سَأَدْرُسُ فِي جَامِعَةِ مَانْشِسْتَرَ، لِأَنَّ قِسْمَ الطِّبِّ فِيهَا مَشْهُورٌ.', modelEn: 'I’ll study at Manchester University, because its medical school is famous.' },
      ],
      foot: 'Develop: two or three sentences — a nisba adjective, a comparison (baynamā / ammā … fa-) and a past or future detail.',
      modelFoot: 'Nisba + comparison + time frame = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'التَّعْلِيمُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ يَجِبُ أَنْ يَكُونَ التَّعْلِيمُ الجَامِعِيُّ مَجَّانِيًّا؟', en: 'Should university education be free?', start: 'أَرَى أَنَّ … لِأَنَّ …', model: 'أَرَى أَنَّهُ يَجِبُ أَنْ يَكُونَ مَجَّانِيًّا، لِأَنَّ المَوَاهِبَ مَوْجُودَةٌ فِي كُلِّ الأُسَرِ، لَا فِي الغَنِيَّةِ فَقَطْ.', modelEn: 'It should be free, because talent exists in every family, not just rich ones.' },
        { q: 'هَلِ المَدْرَسَةُ الإِلِكْتْرُونِيَّةُ مُسْتَقْبَلُ التَّعْلِيمِ؟', en: 'Is online school the future of education?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تُتِيحُ التَّعَلُّمَ مِنْ أَيِّ مَكَانٍ، وَمِنْ نَاحِيَةٍ أُخْرَى، لَا تُنَاسِبُ كُلَّ طَالِبٍ، لِأَنَّ بَعْضَهُمْ يَحْتَاجُ إِلَى نِظَامٍ يَوْمِيٍّ.', modelEn: 'It lets you learn anywhere, but doesn’t suit everyone — some need a daily routine.' },
        { q: 'هَلِ الزِّيُّ المَدْرَسِيُّ ضَرُورِيٌّ؟', en: 'Is school uniform necessary?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهُ يُقَلِّلُ الفُرُوقَ بَيْنَ الطُّلَّابِ، غَيْرَ أَنَّهُ غَالٍ عَلَى بَعْضِ الأُسَرِ، وَلَا يَسْمَحُ بِالتَّعْبِيرِ عَنِ الشَّخْصِيَّةِ.', modelEn: 'It reduces differences between pupils, but it is expensive for some families and limits self-expression.' },
        { q: 'كَيْفَ تَغَيَّرَتِ المَدَارِسُ مُنْذُ أَيَّامِ وَالِدَيْكَ؟', en: 'How have schools changed since your parents’ day?', start: 'كَانَ … أَمَّا الآنَ فَـ…', model: 'كَانَ المُعَلِّمُ يَكْتُبُ عَلَى السَّبُّورَةِ بِالطَّبَاشِيرِ، أَمَّا الآنَ فَنَسْتَخْدِمُ الشَّاشَاتِ الذَّكِيَّةَ وَالحَوَاسِيبَ فِي كُلِّ حِصَّةٍ.', modelEn: 'Teachers wrote in chalk on the board; now we use smart screens and computers in every lesson.' },
        { q: 'لَوْ أَسَّسْتَ مَدْرَسَةً، كَيْفَ تَكُونُ؟', en: 'If you founded a school, what would it be like?', start: 'لَوْ أَسَّسْتُ مَدْرَسَةً، لَـ…', model: 'لَوْ أَسَّسْتُ مَدْرَسَةً، لَجَعَلْتُهَا مُخْتَلَطَةً وَصَغِيرَةً، فِيهَا حَدِيقَةٌ وَمُخْتَبَرٌ رَقْمِيٌّ، وَلَعَلَّمْتُ فِيهَا لُغَتَيْنِ مُنْذُ الرَّوْضَةِ.', modelEn: 'I’d make it small and mixed, with a garden and a digital lab, teaching two languages from nursery.' },
      ],
      foot: 'Stretch: an opinion with lā … faqaṭ, a balanced view, a concession, kāna + present vs ammā … fa-, law … la-.',
      modelFoot: 'Stretch: arā anna, balance, ṣaḥīḥun anna … ghayra anna, past vs present, law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I described my school with nisba adjectives that agree.' },
    { route: 'core', text: 'I named the stages of education.' },
    { route: 'develop', text: 'I compared two schools (akbaru min, baynamā).' },
    { route: 'develop', text: 'I described my primary school in the past (kānat, kuntu + present).' },
    { route: 'stretch', text: 'I gave a balanced view, a concession or law … la-.' },
  ],
};
speak.RP[2].tasks[4].help = 'نَعَمْ، إِذَا سَنَحَتْ لِي الفُرْصَةُ، فَسَأَدْرُسُ …';
speak.RP[3].tasks[4].help = 'لَوْ كُنْتُ وَزِيرًا، لَجَعَلْتُ …';
speak.CONV[1].qs[3].start = 'فِي بَرِيطَانْيَا … أَمَّا فِي مِصْرَ فَالمَدَارِسُ …';
speak.CONV[2].qs[3].start = 'كَانَ المُعَلِّمُ … أَمَّا الآنَ فَنَسْتَخْدِمُ …';
speak.CONV[2].qs[4].start = 'لَوْ أَسَّسْتُ مَدْرَسَةً، لَجَعَلْتُهَا …';

const Q2_CORE = `مَرْحَبًا يَا مُحَمَّدُ،
كَيْفَ حَالُكَ؟ أُرِيدُ أَنْ أُخْبِرَكَ عَنْ مَدْرَسَتِي الجَدِيدَةِ. هِيَ مَدْرَسَةٌ ثَانَوِيَّةٌ حُكُومِيَّةٌ مُخْتَلَطَةٌ، وَفِيهَا أَلْفُ طَالِبٍ. المَبْنَى حَدِيثٌ، وَفِيهِ مُخْتَبَرَاتٌ كَبِيرَةٌ وَمَكْتَبَةٌ جَمِيلَةٌ. مَدْرَسَتِي القَدِيمَةُ كَانَتْ صَغِيرَةً وَقَرِيبَةً مِنْ بَيْتِي، وَكُنْتُ أَمْشِي إِلَيْهَا. أَمَّا الآنَ فَأَرْكَبُ الحَافِلَةَ. فِي رَأْيِي، مَدْرَسَتِي الجَدِيدَةُ أَفْضَلُ، لِأَنَّ النَّشَاطَاتِ فِيهَا أَكْثَرُ. لٰكِنَّ الوَاجِبَاتِ أَصْعَبُ! بَعْدَ المَدْرَسَةِ سَأَدْرُسُ فِي الجَامِعَةِ، وَأُرِيدُ أَنْ أُصْبِحَ طَبِيبًا.
إِلَى اللِّقَاءِ،
عُمَرُ`;
const Q2_FULL = `عَزِيزِي مُحَمَّدُ،
سَأَلْتَنِي عَنْ مَدْرَسَتِي الجَدِيدَةِ، فَإِلَيْكَ الصُّورَةَ كَامِلَةً: انْتَقَلْتُ هٰذَا العَامَ إِلَى مَدْرَسَةٍ ثَانَوِيَّةٍ حُكُومِيَّةٍ مُخْتَلَطَةٍ تَضُمُّ أَكْثَرَ مِنْ أَلْفِ طَالِبٍ وَطَالِبَةٍ، وَمَبْنَاهَا الحَدِيثُ مُجَهَّزٌ بِمُخْتَبَرَاتٍ عِلْمِيَّةٍ وَمَكْتَبَةٍ رَقْمِيَّةٍ رَائِعَةٍ. وَعَلَى عَكْسِ مَدْرَسَتِي الابْتِدَائِيَّةِ الصَّغِيرَةِ الَّتِي كُنْتُ أَمْشِي إِلَيْهَا فِي خَمْسِ دَقَائِقَ، أَرْكَبُ الآنَ حَافِلَتَيْنِ كُلَّ صَبَاحٍ. صَحِيحٌ أَنَّ الطَّرِيقَ أَطْوَلُ وَالوَاجِبَاتِ أَصْعَبُ، غَيْرَ أَنَّ النَّوَادِيَ وَالرِّحْلَاتِ هُنَا لَا تُقَارَنُ بِمَا عَرَفْتُهُ مِنْ قَبْلُ. وَإِذَا حَصَلْتُ عَلَى نَتَائِجَ جَيِّدَةٍ، فَسَأَدْرُسُ الطِّبَّ فِي جَامِعَةِ لَنْدَنَ، كَمَا فَعَلَ أَخِي الأَكْبَرُ.
مَعَ تَحِيَّاتِي،
عُمَرُ`;
const Q3A_CORE = `أَدْرُسُ الآنَ فِي مَدْرَسَةٍ ثَانَوِيَّةٍ حُكُومِيَّةٍ فِي مَدِينَةِ لِيسْتَرَ. مَدْرَسَتِي كَبِيرَةٌ وَمُخْتَلَطَةٌ، وَفِيهَا أَلْفٌ وَمِئَتَا طَالِبٍ. عِنْدَنَا مُخْتَبَرَاتٌ حَدِيثَةٌ، وَمَلْعَبٌ كَبِيرٌ، وَمَكْتَبَةٌ هَادِئَةٌ. نَلْبَسُ زِيًّا مَدْرَسِيًّا أَزْرَقَ. يَبْدَأُ اليَوْمُ الدِّرَاسِيُّ فِي الثَّامِنَةِ وَالنِّصْفِ، وَيَنْتَهِي فِي الثَّالِثَةِ.
قَبْلَ ذٰلِكَ دَرَسْتُ فِي مَدْرَسَةٍ ابْتِدَائِيَّةٍ صَغِيرَةٍ. كَانَتْ قَرِيبَةً مِنْ بَيْتِي، وَكَانَ عِنْدَنَا مُعَلِّمٌ وَاحِدٌ لِكُلِّ المَوَادِّ. كُنْتُ أُحِبُّ القِرَاءَةَ وَالرَّسْمَ، وَكُنَّا نَلْعَبُ فِي الحَدِيقَةِ كُلَّ يَوْمٍ. كَانَتْ أَيَّامًا جَمِيلَةً وَهَادِئَةً.
فِي رَأْيِي، المَدْرَسَةُ الثَّانَوِيَّةُ أَصْعَبُ مِنَ الابْتِدَائِيَّةِ، لِأَنَّ المَوَادَّ أَكْثَرُ وَالامْتِحَانَاتِ مُهِمَّةٌ. لٰكِنَّهَا أَيْضًا أَكْثَرُ مُتْعَةً، لِأَنَّ فِيهَا نَوَادِيَ كَثِيرَةً وَرِحْلَاتٍ.
بَعْدَ الصَّفِّ الحَادِي عَشَرَ سَأَدْرُسُ فِي كُلِّيَّةٍ قَرِيبَةٍ، ثُمَّ سَأَذْهَبُ إِلَى الجَامِعَةِ. أُرِيدُ أَنْ أَدْرُسَ عِلْمَ الحَاسُوبِ، لِأَنِّي أُحِبُّ التِّكْنُولُوجْيَا كَثِيرًا وَأُرِيدُ أَنْ أُصَمِّمَ التَّطْبِيقَاتِ.`;
const Q3A_FULL = `يُقَالُ إِنَّ المَدْرَسَةَ بَيْتٌ ثَانٍ، وَقَدْ عِشْتُ هٰذِهِ الحَقِيقَةَ فِي ثَلَاثِ مَدَارِسَ مُخْتَلِفَةٍ؛ فَكُلُّ مَرْحَلَةٍ مِنْ رِحْلَتِي التَّعْلِيمِيَّةِ تَرَكَتْ فِي نَفْسِي أَثَرًا خَاصًّا.
بَدَأْتُ فِي مَدْرَسَةٍ ابْتِدَائِيَّةٍ صَغِيرَةٍ فِي حَيِّنَا، لَمْ يَكُنْ فِيهَا أَكْثَرُ مِنْ مِئَتَيْ طَالِبٍ، وَكَانَتِ المُعَلِّمَاتُ يَعْرِفْنَ أَسْمَاءَنَا جَمِيعًا. وَهُنَاكَ تَعَلَّمْتُ أَنْ أُحِبَّ القِرَاءَةَ، بِفَضْلِ مُعَلِّمَةٍ كَانَتْ تَقْرَأُ لَنَا قِصَّةً كُلَّ يَوْمِ جُمُعَةٍ، وَتَطْلُبُ مِنَّا أَنْ نَتَخَيَّلَ نِهَايَةً مُخْتَلِفَةً لَهَا.
أَمَّا المَرْحَلَةُ الثَّانَوِيَّةُ فَكَانَتْ عَالَمًا مُخْتَلِفًا تَمَامًا؛ إِذِ انْتَقَلْتُ إِلَى مَدْرَسَةٍ حُكُومِيَّةٍ ضَخْمَةٍ، ثُمَّ إِلَى مَدْرَسَةٍ إِلِكْتْرُونِيَّةٍ لِأَدْرُسَ اللُّغَةَ العَرَبِيَّةَ الَّتِي لَمْ تَكُنْ مُتَوَفِّرَةً فِي مَدِينَتِي. وَمَعَ أَنَّنِي افْتَقَدْتُ المَلْعَبَ وَالأَصْدِقَاءَ، فَقَدْ أَصْبَحْتُ أَكْثَرَ اسْتِقْلَالِيَّةً وَتَنْظِيمًا، وَتَعَلَّمْتُ كَيْفَ أُدِيرُ وَقْتِي.
صَحِيحٌ أَنَّ لِكُلِّ نَوْعٍ مِنَ المَدَارِسِ عُيُوبَهُ، غَيْرَ أَنَّ المُهِمَّ أَنْ يَجِدَ الطَّالِبُ المَكَانَ الَّذِي يُنَاسِبُهُ. وَإِذَا حَقَّقْتُ أَحْلَامِي، فَسَأُصْبِحُ مُعَلِّمًا بِنَفْسِي، لِأَرُدَّ شَيْئًا مِمَّا أَعْطَتْنِي إِيَّاهُ المَدْرَسَةُ.`;
const Q3B_FULL = `يَخْتَلِفُ النَّاسُ كَثِيرًا حَوْلَ نَوْعِ المَدْرَسَةِ الأَفْضَلِ لِأَبْنَائِهِمْ: هَلْ هِيَ الحُكُومِيَّةُ المَجَّانِيَّةُ، أَمِ الخَاصَّةُ الغَالِيَةُ، أَمِ الإِلِكْتْرُونِيَّةُ الَّتِي انْتَشَرَتْ فِي السَّنَوَاتِ الأَخِيرَةِ؟
مِنْ نَاحِيَةٍ، تَتَمَيَّزُ المَدَارِسُ الخَاصَّةُ بِصُفُوفٍ أَصْغَرَ وَمَرَافِقَ أَحْدَثَ، مِمَّا يُتِيحُ لِلْمُعَلِّمِ أَنْ يَهْتَمَّ بِكُلِّ طَالِبٍ. وَمِنْ نَاحِيَةٍ أُخْرَى، تَجْمَعُ المَدَارِسُ الحُكُومِيَّةُ طُلَّابًا مِنْ خَلْفِيَّاتٍ مُخْتَلِفَةٍ، فَتُعَلِّمُهُمْ أَنْ يَعِيشُوا فِي مُجْتَمَعٍ حَقِيقِيٍّ مُتَنَوِّعٍ، وَأَنْ يَحْتَرِمُوا مَنْ يَخْتَلِفُ عَنْهُمْ.
وَقَدْ جَرَّبْتُ بِنَفْسِي نَوْعَيْنِ مِنَ التَّعْلِيمِ؛ فَبَعْدَ سَنَوَاتٍ فِي مَدْرَسَةٍ حُكُومِيَّةٍ مُزْدَحِمَةٍ، انْتَقَلْتُ إِلَى مَدْرَسَةٍ إِلِكْتْرُونِيَّةٍ، فَوَجَدْتُ فِيهَا مَوَادَّ لَمْ أَكُنْ أَحْلُمُ بِهَا، لٰكِنَّنِي اضْطُرِرْتُ إِلَى بِنَاءِ صَدَاقَاتِي خَارِجَ المَدْرَسَةِ، فِي النَّادِي الرِّيَاضِيِّ وَالمَسْجِدِ.
صَحِيحٌ أَنَّ المَالَ يَشْتَرِي مَرَافِقَ أَفْضَلَ، غَيْرَ أَنَّهُ لَا يَشْتَرِي مُعَلِّمًا مُلْهِمًا أَوْ طَالِبًا مُتَحَمِّسًا. وَلَوْ حَصَلَتْ كُلُّ المَدَارِسِ الحُكُومِيَّةِ عَلَى دَعْمٍ كَافٍ، لَمَا احْتَاجَتِ الأُسَرُ إِلَى دَفْعِ مَبَالِغَ ضَخْمَةٍ مِنْ أَجْلِ تَعْلِيمٍ جَيِّدٍ، وَلَحَصَلَ كُلُّ طِفْلٍ عَلَى فُرْصَةٍ عَادِلَةٍ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a new-student registration form, write an email about your new school, and write an extended piece about your journey through education or about state, private and online schools.',
  lift: [
    { ar: 'مَدْرَسَةٌ ثَانَوِيَّةٌ حُكُومِيَّةٌ مُخْتَلَطَةٌ', en: 'a mixed state secondary school' },
    { ar: 'عَلَى عَكْسِ مَدْرَسَتِي الابْتِدَائِيَّةِ', en: 'unlike my primary school' },
    { ar: 'المَدْرَسَةُ الثَّانَوِيَّةُ أَصْعَبُ مِنَ الابْتِدَائِيَّةِ', en: 'secondary school is harder than primary' },
  ],
  checkTip: 'Check: every nisba adjective agrees with its noun (madrasa ḥukūmiyya, maʿhad mihaniyy, mukhtabarāt ḥadītha); comparatives stay the same for m. and f. (aṣʿab, akbar); prepositions + genitive (fī madrasatin, ilā al-jāmiʿati).',
  FORM: {
    title: 'New-student registration form', ar: 'اسْتِمَارَةُ تَسْجِيلِ طَالِبٍ جَدِيدٍ',
    fields: [
      { core: true, ar: 'الاسْمُ الكَامِلُ', en: 'Full name', model: 'عُمَرُ خَالِدٌ', modelEn: 'Omar Khalid' },
      { core: true, ar: 'تَارِيخُ المِيلَادِ', en: 'Date of birth', model: '٤ فِبْرَايِر ٢٠٠٩', modelEn: '4 February 2009' },
      { core: true, ar: 'الصَّفُّ', en: 'Year group', model: 'الصَّفُّ العَاشِرُ', modelEn: 'Year 10' },
      { core: true, ar: 'المَدْرَسَةُ السَّابِقَةُ', en: 'Previous school', model: 'مَدْرَسَةُ النُّورِ', modelEn: 'Al Noor School' },
      { core: true, ar: 'نَوْعُ المَدْرَسَةِ السَّابِقَةِ', en: 'Type of previous school', model: 'حُكُومِيَّةٌ مُخْتَلَطَةٌ', modelEn: 'state, mixed' },
      { core: true, ar: 'المَادَّةُ المُفَضَّلَةُ', en: 'Favourite subject', model: 'العُلُومُ', modelEn: 'science' },
      { ar: 'نَشَاطٌ تُرِيدُ أَنْ تُشَارِكَ فِيهِ', en: 'An activity you want to join', model: 'نَادِي المُنَاظَرَاتِ', modelEn: 'the debating club' },
      { ar: 'جُمْلَةٌ: لِمَاذَا اخْتَرْتَ مَدْرَسَتَنَا؟', en: 'ONE sentence: why you chose our school', model: 'اخْتَرْتُ مَدْرَسَتَكُمْ لِأَنَّ مُخْتَبَرَاتِهَا أَحْدَثُ مِنْ مُخْتَبَرَاتِ مَدْرَسَتِي السَّابِقَةِ.', modelEn: 'I chose your school because its labs are more modern than my previous school’s.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with a comparative.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 5: two nisba adjectives in the f. (ḥukūmiyya mukhtalaṭa). Box 8: aḥdathu min + iḍāfa.',
  },
  Q2: {
    short: 'an email about your new school', title: 'Question 2: my new school', ar: 'مَدْرَسَتِي الجَدِيدَةُ',
    task: 'You have moved to a new school. Write an email in Arabic to a friend of about 80–90 words. You must include: • what your new school is like • how it is different from your old school • your opinion, with a reason • what you will do after school.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Nisba adjectives and a comparative.', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['هِيَ مَدْرَسَةٌ … وَفِيهَا …', 'it is a … school and it has …'], ['مَدْرَسَتِي القَدِيمَةُ كَانَتْ … أَمَّا الآنَ فَأَرْكَبُ …', 'my old school was … but now I take …'], ['مَدْرَسَتِي الجَدِيدَةُ أَفْضَلُ، لِأَنَّ …', 'my new school is better, because …'], ['بَعْدَ المَدْرَسَةِ سَأَدْرُسُ …', 'after school I will study …']],
    rubric: [
      ['task', 'انْتَقَلْتَ إِلَى مَدْرَسَةٍ جَدِيدَةٍ. اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ (٨٠–٩٠ كَلِمَةً).', 'You moved to a new school: write to your friend (80–90 words).'],
      ['1', 'كَيْفَ مَدْرَسَتُكَ الجَدِيدَةُ؟', 'What your new school is like'],
      ['2', 'مَا الفَرْقُ بَيْنَهَا وَبَيْنَ مَدْرَسَتِكَ القَدِيمَةِ؟', 'How it differs from your old school'],
      ['3', 'مَا رَأْيُكَ؟ وَلِمَاذَا؟', 'Your opinion and why'],
      ['4', 'مَاذَا سَتَفْعَلُ بَعْدَ المَدْرَسَةِ؟', 'What you will do after school'],
    ],
    qwords: 'كَيْفَ (what … like) · مَا الفَرْقُ (what is the difference — use PAST for the old school) · لِمَاذَا (why) · سَتَفْعَلُ (will do — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'مَدْرَسَتِي الجَدِيدَةُ ______ ، وَفِيهَا ______ .', 'My new school is …, and it has …'],
      ['2', 'مَدْرَسَتِي القَدِيمَةُ كَانَتْ ______ ، أَمَّا الآنَ فَأَ______ .', 'My old school was …, but now I …'],
      ['3', 'فِي رَأْيِي، مَدْرَسَتِي الجَدِيدَةُ أَفْضَلُ، لِأَنَّ ______ .', 'In my opinion my new school is better, because …'],
      ['4', 'بَعْدَ المَدْرَسَةِ سَأَدْرُسُ ______ .', 'After school I will study …'],
      ['end', 'إِلَى اللِّقَاءِ، ______', 'See you, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Mohammed, how are you? I want to tell you about my new school. It is a mixed state secondary school with a thousand students. The building is modern, with big labs and a lovely library. My old school was small and near my home, and I used to walk there; now I take the bus. In my opinion my new school is better, because there are more activities — but the homework is harder! After school I will study at university, and I want to become a doctor. See you, Omar.”',
      find: ['ثَانَوِيَّةٌ حُكُومِيَّةٌ مُخْتَلَطَةٌ', 'كَانَتْ صَغِيرَةً', 'أَمَّا الآنَ فَأَرْكَبُ', 'سَأَدْرُسُ فِي الجَامِعَةِ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Mohammed, you asked about my new school, so here’s the full picture: this year I moved to a mixed state secondary with over a thousand students, its modern building equipped with science labs and a wonderful digital library. Unlike my small primary school, which I walked to in five minutes, I now take two buses every morning. The journey is longer and the homework harder, but the clubs and trips here are beyond anything I knew before. If I get good results, I’ll study medicine at a London university, as my older brother did. Best wishes, Omar.”',
      find: ['تَضُمُّ أَكْثَرَ مِنْ', 'عَلَى عَكْسِ', 'الَّتِي كُنْتُ أَمْشِي إِلَيْهَا', 'إِذَا حَصَلْتُ … فَسَأَدْرُسُ'],
    },
  },
  Q3: {
    a: { title: 'رِحْلَتِي التَّعْلِيمِيَّةُ', en: 'My journey through education', bullets: 'مَدْرَسَتُكَ الآنَ · المَرْحَلَةُ الابْتِدَائِيَّةُ · مُقَارَنَةٌ بَيْنَ المَرْحَلَتَيْنِ · خِطَطُكَ بَعْدَ المَدْرَسَةِ', bulletsEn: 'Your school now · primary school · comparing the two stages · your plans after school' },
    b: { title: 'حُكُومِيَّةٌ أَمْ خَاصَّةٌ أَمْ إِلِكْتْرُونِيَّةٌ؟', en: 'State, private or online?', bullets: 'أَنْوَاعُ المَدَارِسِ · المَزَايَا وَالعُيُوبُ · تَجْرِبَتُكَ · رَأْيُكَ', bulletsEn: 'Types of school · advantages and disadvantages · your experience · your opinion' },
    plan: [
      'Your school now — madrasa thānawiyya ḥukūmiyya …, fīhā …; non-human plural agreement.',
      'Primary — kānat ṣaghīra, kāna ʿindanā …, kuntu + present for habits.',
      'Comparison — aṣʿabu / akthar min …, baynamā …, lākinnahā …',
      'Future — baʿda aṣ-ṣaff …, sa-adrusu …; Stretch: ṣaḥīḥun anna … ghayra anna, idhā … fa-sa-.',
    ],
    frames: [
      { ar: 'مَدْرَسَتِي كَبِيرَةٌ وَمُخْتَلَطَةٌ، وَفِيهَا مُخْتَبَرَاتٌ حَدِيثَةٌ.', en: 'present: my school is big and mixed, with modern labs.' },
      { ar: 'كَانَتْ قَرِيبَةً مِنْ بَيْتِي، وَكُنَّا نَلْعَبُ فِي الحَدِيقَةِ.', en: 'past: it was near my home, and we used to play in the garden.' },
      { ar: 'سَأَدْرُسُ فِي كُلِّيَّةٍ قَرِيبَةٍ، ثُمَّ سَأَذْهَبُ إِلَى الجَامِعَةِ.', en: 'future: I will study at a nearby college, then go to university.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'I attend a big, mixed state secondary in Leicester with 1,200 students: modern labs, a big pitch, a quiet library, blue uniform; the day runs 8.30 to 3 → before that, a small primary near home with one teacher for everything; I loved reading and drawing and we played in the garden daily — lovely, calm days → secondary is harder (more subjects, important exams) but more fun (clubs, trips) → after Year 11 I’ll go to a local college, then university to study computer science, because I love technology and want to design apps.', find: ['ثَانَوِيَّةٍ حُكُومِيَّةٍ', 'كَانَتْ قَرِيبَةً', 'أَصْعَبُ مِنَ الابْتِدَائِيَّةِ', 'سَأَدْرُسُ فِي كُلِّيَّةٍ'], notes: 'Core model: nisba adjectives with agreement, a large number (alfun wa-miʾatā ṭālibin), kānat / kāna / kuntu + present, comparatives with li-anna, a future route with thumma.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'They say school is a second home — I’ve lived this in three different schools, each stage leaving its mark → I began at a small local primary of under 200 pupils where the teachers knew all our names; there I learnt to love reading, thanks to a teacher who read us a story every Friday and asked us to imagine a different ending → secondary was a different world: a huge state school, then an online school to study Arabic, which wasn’t available in my town; although I missed the playground and friends, I became more independent and organised, and learnt to manage my time → every type of school has its faults, but what matters is finding the right place; “if I achieve my dreams, I’ll become a teacher myself, to give back some of what school gave me”.', find: ['يُقَالُ إِنَّ', 'بِفَضْلِ مُعَلِّمَةٍ', 'مَعَ أَنَّنِي … فَقَدْ', 'إِذَا حَقَّقْتُ … فَسَأُصْبِحُ'], notes: 'Full-mark model: a passive hook, lam yakun fīhā akthar min, a feminine plural verb (yaʿrifna), bi-faḍli, ammā … fa-, idh, a relative clause (allatī lam takun), maʿa anna … fa-qad, a concession and idhā … fa-sa-.' },
      { which: 'ب', level: 'Full', subtitle: 'state, private or online?', text: Q3B_FULL, en: 'People disagree about the best kind of school: free state, expensive private, or the online schools that have spread recently? → private schools offer smaller classes and newer facilities, letting teachers attend to each pupil; state schools bring together students from different backgrounds, teaching them to live in a real, diverse society and respect those who are different → I’ve tried two kinds: after years in a crowded state school I moved online and found subjects I never dreamt of, but had to build friendships outside school, at the sports club and the mosque → money buys better facilities, but not an inspiring teacher or a motivated student; “if every state school had enough support, families wouldn’t need to pay huge sums for a good education, and every child would get a fair chance”.', find: ['تَتَمَيَّزُ … بِصُفُوفٍ', 'مِمَّا يُتِيحُ', 'لَمْ أَكُنْ أَحْلُمُ بِهَا', 'لَوْ حَصَلَتْ … لَمَا احْتَاجَتْ'], notes: 'Full-mark model for the Stretch title: a three-way question, a balanced view with comparatives, mimmā, a personal experience with iḍṭurirtu, a concession with lā yashtarī, law … la-mā (negative result).' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; nisba adjectives agree.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: a comparison between the old and new school (kānat … ammā al-ān).' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: a balanced view, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
