'use strict';
/* Exam-practice data · TD-L03 · Subjects, Timetables and Preferences (telling the time; comparatives; reasons and contrast). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'D', n: 3, short: 'Subjects, Timetables and Preferences', arShort: 'المَوَادُّ وَالجَدْوَلُ', fileTitle: 'Subjects_Timetables_and_Preferences', title: 'Subjects, Timetables and Preferences', ar: 'المَوَادُّ وَالجَدَاوِلُ وَالتَّفْضِيلَاتُ', icon: 'FaCalendarDays', grammar: 'time (as-sāʿa ath-thāmina wa-n-niṣf); comparatives (aṣʿab min, ashal min); reasons and contrast (li-anna, lākinna, baynamā)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: talk about your subjects and timetable with accurate times (فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ), say which subjects you prefer and why (لِأَنَّ · لٰكِنَّ · أَصْعَبُ مِنْ), and plan your options.',
  words: [
    w(1, 'مَادَّةٌ', 'a school subject', [['pl.', 'مَوَادُّ'], ['favourite', 'مَادَّتِي المُفَضَّلَةُ']]),
    w(2, 'الرِّيَاضِيَّاتُ · العُلُومُ', 'maths · science', [['physics · chemistry · biology', 'الفِيزْيَاءُ · الكِيمْيَاءُ · الأَحْيَاءُ']]),
    w(3, 'التَّارِيخُ · الجُغْرَافْيَا', 'history · geography', [['art · music', 'الفَنُّ · المُوسِيقَى']]),
    w(4, 'اللُّغَةُ العَرَبِيَّةُ', 'Arabic', [['English', 'اللُّغَةُ الإِنْجْلِيزِيَّةُ'], ['French', 'الفَرَنْسِيَّةُ']]),
    w(5, 'التَّرْبِيَةُ البَدَنِيَّةُ', 'PE', [['Islamic studies', 'التَّرْبِيَةُ الإِسْلَامِيَّةُ'], ['computing', 'الحَاسُوبُ']]),
    w(6, 'حِصَّةٌ', 'a lesson, period', [['pl.', 'حِصَصٌ'], ['first lesson', 'الحِصَّةُ الأُولَى']]),
    w(7, 'جَدْوَلٌ دِرَاسِيٌّ', 'a timetable', [['pl.', 'جَدَاوِلُ دِرَاسِيَّةٌ'], ['break', 'الاسْتِرَاحَةُ']]),
    w(8, 'فِي السَّاعَةِ …', 'at … o’clock', [['8:30', 'الثَّامِنَةِ وَالنِّصْفِ'], ['9:15', 'التَّاسِعَةِ وَالرُّبْعِ'], ['3:45', 'الرَّابِعَةِ إِلَّا رُبْعًا']], { tag: 'time' }),
    w(9, 'سَهْلٌ · صَعْبٌ', 'easy · hard', [['f.', 'سَهْلَةٌ · صَعْبَةٌ'], ['comp.', 'أَسْهَلُ · أَصْعَبُ']]),
    w(10, 'مُفِيدٌ · مُمِلٌّ', 'useful · boring', [['f.', 'مُفِيدَةٌ · مُمِلَّةٌ'], ['comp.', 'أَكْثَرُ فَائِدَةً']]),
    w(11, 'أُفَضِّلُ … عَلَى …', 'I prefer … to …', [['he · she', 'يُفَضِّلُ · تُفَضِّلُ'], ['preference', 'تَفْضِيلٌ']], { tag: 'preference' }),
    w(12, 'لِأَنَّ · لٰكِنَّ · بَيْنَمَا', 'because · but · whereas', [['because it (f.)', 'لِأَنَّهَا'], ['but it (f.)', 'لٰكِنَّهَا']], { tag: 'linkers' }),
  ],
  words1: { eyebrow: 'Language bank · subjects and the timetable', title: 'Maths, history, Arabic', ar: 'المَوَادُّ الدِّرَاسِيَّةُ', notes: 'LANGUAGE BANK (2 min) — most subjects are feminine through مَادَّةٌ, but the adjective follows the subject’s own gender: الرِّيَاضِيَّاتُ صَعْبَةٌ (pl. → f.) · التَّارِيخُ مُمْتِعٌ (m.) · الكِيمْيَاءُ صَعْبَةٌ (f.).' },
  words2: { eyebrow: 'Language bank · times and preferences', title: 'At 8:30, harder than, because', ar: 'الوَقْتُ وَالتَّفْضِيلُ', notes: 'LANGUAGE BANK (2 min) — times use ordinal numbers in the feminine: فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ · الرَّابِعَةِ إِلَّا رُبْعًا. أُفَضِّلُ التَّارِيخَ عَلَى الجُغْرَافْيَا، لِأَنَّهُ … · لٰكِنَّهُ …' },
  checkCore: 'named subjects and gave one time accurately',
  checkDevelop: 'compared two subjects and gave a reason and a contrast',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a new student', title: 'Role play A — Your timetable today', ar: 'جَدْوَلُ اليَوْمِ', you: 'a student', them: 'a new classmate',
      tasks: [
        { core: true, ex: 'مَا الحِصَّةُ الأُولَى اليَوْمَ؟', task: 'Name the first lesson.', help: 'الحِصَّةُ الأُولَى …', model: 'الحِصَّةُ الأُولَى الرِّيَاضِيَّاتُ.', modelEn: 'The first lesson is maths.' },
        { core: true, ex: 'مَتَى تَبْدَأُ؟', task: 'Give the time.', help: 'تَبْدَأُ فِي السَّاعَةِ …', model: 'تَبْدَأُ فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ.', modelEn: 'It starts at half past eight.' },
        { core: true, ex: 'وَمَتَى الاسْتِرَاحَةُ؟', task: 'Give the break time.', help: 'الاسْتِرَاحَةُ فِي …', model: 'الاسْتِرَاحَةُ فِي السَّاعَةِ العَاشِرَةِ وَالرُّبْعِ.', modelEn: 'Break is at quarter past ten.' },
        { core: true, ex: 'عِنْدَنَا عُلُومٌ بَعْدَ الاسْتِرَاحَةِ.', task: 'Give your opinion of science.', help: 'أُحِبُّ … لِأَنَّهَا …', model: 'أُحِبُّ العُلُومَ، لِأَنَّهَا مُمْتِعَةٌ.', modelEn: 'I like science, because it is fun.' },
        { core: true, unexpected: true, ex: 'مَتَى يَنْتَهِي اليَوْمُ الدِّرَاسِيُّ؟', task: 'Answer the unexpected question.', help: 'يَنْتَهِي فِي …', model: 'يَنْتَهِي فِي السَّاعَةِ الثَّالِثَةِ.', modelEn: 'It ends at three o’clock.' },
      ],
      girl: '(same words — the classmate may be a girl)',
      notes: 'Core: al-ḥiṣṣa al-ūlā, times with ordinals (ath-thāmina wa-n-niṣf, al-ʿāshira wa-r-rubʿ), al-ʿulūm … li-annahā (pl. → f.).',
    },
    {
      id: 'B', level: 'Core+', setting: 'choosing options', title: 'Role play B — Choosing your GCSE options', ar: 'اخْتِيَارُ المَوَادِّ', you: 'a Year 9 student', them: 'your form tutor',
      tasks: [
        { core: true, ex: 'أَيَّ مَوَادَّ تُرِيدُ أَنْ تَخْتَارَ؟', task: 'Name two subjects.', help: 'أُرِيدُ أَنْ أَخْتَارَ … وَ…', model: 'أُرِيدُ أَنْ أَخْتَارَ التَّارِيخَ وَالعَرَبِيَّةَ.', modelEn: 'I want to choose history and Arabic.' },
        { core: true, ex: 'لِمَاذَا التَّارِيخُ؟', task: 'Give a reason.', help: 'لِأَنَّهُ …', model: 'لِأَنَّهُ مُمْتِعٌ، وَالمُعَلِّمُ مُمْتَازٌ.', modelEn: 'Because it is interesting, and the teacher is excellent.' },
        { ex: 'وَالجُغْرَافْيَا؟ دَرَجَاتُكَ فِيهَا جَيِّدَةٌ.', task: 'Explain your preference with a contrast.', help: 'أُفَضِّلُ … عَلَى … لِأَنَّ … لٰكِنَّ …', model: 'أُفَضِّلُ التَّارِيخَ عَلَى الجُغْرَافْيَا، لِأَنَّهُ أَقْرَبُ إِلَى اهْتِمَامَاتِي، لٰكِنَّ الجُغْرَافْيَا سَهْلَةٌ أَيْضًا.', modelEn: 'I prefer history to geography, as it suits my interests, but geography is easy too.' },
        { ex: 'تَذَكَّرْ: العَرَبِيَّةُ تَحْتَاجُ إِلَى وَقْتٍ كَثِيرٍ.', task: 'ASK how many lessons a week.', help: 'كَمْ حِصَّةً …؟', model: 'كَمْ حِصَّةً فِي الأُسْبُوعِ لِلْعَرَبِيَّةِ؟', modelEn: 'How many Arabic lessons are there a week?' },
        { unexpected: true, ex: 'مَا المَادَّةُ الَّتِي لَنْ تَخْتَارَهَا؟', task: 'Answer the unexpected question.', help: 'لَنْ أَخْتَارَ … لِأَنَّهَا …', model: 'لَنْ أَخْتَارَ المُوسِيقَى، لِأَنَّهَا صَعْبَةٌ عَلَيَّ، مَعَ أَنِّي أُحِبُّ الاسْتِمَاعَ إِلَيْهَا.', modelEn: 'I won’t choose music, because it is hard for me, although I like listening to it.' },
      ],
      girl: 'تُرِيدِينَ · دَرَجَاتُكِ · تَذَكَّرِي · تَخْتَارِيهَا',
      notes: 'Core+: ufaḍḍilu X ʿalā Y, aqrabu ilā, li-anna … lākinna, kam ḥiṣṣatan (kam + acc. sg.), the CANDIDATE asks (task 4), lan + subjunctive, maʿa anna.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a parents’ evening', title: 'Role play C — Parents’ evening', ar: 'لِقَاءُ أَوْلِيَاءِ الأُمُورِ', you: 'a student', them: 'your maths teacher',
      tasks: [
        { ex: 'كَيْفَ تَجِدُ الرِّيَاضِيَّاتِ هٰذِهِ السَّنَةَ؟', task: 'Compare with last year.', help: 'أَصْعَبُ مِنَ السَّنَةِ المَاضِيَةِ، لِأَنَّ …', model: 'أَجِدُهَا أَصْعَبَ مِنَ السَّنَةِ المَاضِيَةِ، لِأَنَّ الجَبْرَ جَدِيدٌ عَلَيَّ.', modelEn: 'I find it harder than last year, because algebra is new to me.' },
        { ex: 'وَمَا المَادَّةُ الَّتِي تَتَفَوَّقُ فِيهَا؟', task: 'Name it with evidence (past).', help: 'أَتَفَوَّقُ فِي … فَقَدْ حَصَلْتُ عَلَى …', model: 'أَتَفَوَّقُ فِي العَرَبِيَّةِ؛ فَقَدْ حَصَلْتُ عَلَى أَعْلَى دَرَجَةٍ فِي الامْتِحَانِ الأَخِيرِ.', modelEn: 'I excel in Arabic: I got the top mark in the last exam.' },
        { ex: 'كَيْفَ تُنَظِّمُ وَقْتَكَ فِي الأُسْبُوعِ؟', task: 'Describe your weekly routine with times.', help: 'مِنَ السَّاعَةِ … إِلَى …', model: 'أُرَاجِعُ مِنَ السَّاعَةِ الخَامِسَةِ إِلَى السَّادِسَةِ كُلَّ يَوْمٍ، وَأُخَصِّصُ يَوْمَ السَّبْتِ لِلرِّيَاضِيَّاتِ.', modelEn: 'I revise from five to six every day, and keep Saturday for maths.' },
        { ex: 'أَيُّهُمَا أَهَمُّ: المَوَادُّ العِلْمِيَّةُ أَمِ الأَدَبِيَّةُ؟', task: 'Give a balanced answer.', help: 'كِلْتَاهُمَا مُهِمَّةٌ، بَيْنَمَا …', model: 'كِلْتَاهُمَا مُهِمَّةٌ؛ فَالعِلْمِيَّةُ تُعَلِّمُنَا التَّفْكِيرَ المَنْطِقِيَّ، بَيْنَمَا تُعَلِّمُنَا الأَدَبِيَّةُ التَّعْبِيرَ وَفَهْمَ الآخَرِينَ.', modelEn: 'Both matter: sciences teach logic, whereas humanities teach expression and understanding others.' },
        { unexpected: true, ex: 'مَاذَا سَتَفْعَلُ لِتَتَحَسَّنَ فِي الرِّيَاضِيَّاتِ؟', task: 'Answer the unexpected question (future).', help: 'سَأَحْضُرُ … وَسَأُرَاجِعُ …', model: 'سَأَحْضُرُ دُرُوسَ الدَّعْمِ يَوْمَ الأَرْبِعَاءِ، وَسَأُرَاجِعُ التَّمَارِينَ مَعَ صَدِيقِي.', modelEn: 'I’ll attend support sessions on Wednesday and go over exercises with my friend.' },
      ],
      girl: 'تَجِدِينَ · تَتَفَوَّقِينَ · تُنَظِّمِينَ وَقْتَكِ · سَتَفْعَلِينَ',
      notes: 'Develop: ajiduhā aṣʿaba (accusative after wajada), allatī tatafawwaqu fīhā, fa-qad + past evidence, min … ilā …, kiltāhumā, baynamā, a future plan with li- purpose.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a school-council debate', title: 'Role play D — Should the school day start later?', ar: 'هَلْ يَبْدَأُ اليَوْمُ الدِّرَاسِيُّ مُتَأَخِّرًا؟', you: 'a student representative', them: 'the head teacher',
      tasks: [
        { ex: 'تَقْتَرِحُونَ أَنْ يَبْدَأَ اليَوْمُ فِي التَّاسِعَةِ وَالنِّصْفِ. لِمَاذَا؟', task: 'Justify with evidence.', help: 'لِأَنَّ الدِّرَاسَاتِ تُؤَكِّدُ أَنَّ …', model: 'لِأَنَّ الدِّرَاسَاتِ تُؤَكِّدُ أَنَّ المُرَاهِقِينَ يَحْتَاجُونَ إِلَى نَوْمٍ أَكْثَرَ، وَأَنَّ تَرْكِيزَهُمْ يَكُونُ أَضْعَفَ فِي الصَّبَاحِ البَاكِرِ.', modelEn: 'Research shows teenagers need more sleep and concentrate less early in the morning.' },
        { ex: 'لٰكِنَّ اليَوْمَ سَيَنْتَهِي مُتَأَخِّرًا!', task: 'Concede and counter.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهُ سَيَنْتَهِي فِي الرَّابِعَةِ، غَيْرَ أَنَّ حِصَّةً وَاحِدَةً بِتَرْكِيزٍ كَامِلٍ أَفْضَلُ مِنْ حِصَّتَيْنِ بِعُيُونٍ نَاعِسَةٍ.', modelEn: 'It will end at four, but one fully focused lesson beats two with sleepy eyes.' },
        { ex: 'هَلْ جَرَّبْتُمْ ذٰلِكَ؟', task: 'Describe a past trial and its result.', help: 'نَعَمْ، فِي أُسْبُوعِ … فَـ…', model: 'نَعَمْ، فِي أُسْبُوعِ الامْتِحَانَاتِ بَدَأْنَا فِي العَاشِرَةِ، فَتَحَسَّنَتْ نَتَائِجُ الحِصَّةِ الأُولَى بِشَكْلٍ مَلْحُوظٍ.', modelEn: 'Yes — in exam week we started at ten, and first-period results noticeably improved.' },
        { ex: 'وَمَاذَا عَنِ الطُّلَّابِ الَّذِينَ يَعْمَلُ وَالِدَاهُمْ مُبَكِّرًا؟', task: 'Give a balanced solution.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى … لِذٰلِكَ …', model: 'مِنْ نَاحِيَةٍ، يَجِبُ أَنْ نُرَاعِيَهُمْ، وَمِنْ نَاحِيَةٍ أُخْرَى، يُمْكِنُ أَنْ نَفْتَحَ المَكْتَبَةَ فِي الثَّامِنَةِ لِلدِّرَاسَةِ الهَادِئَةِ؛ لِذٰلِكَ لَا يَخْسَرُ أَحَدٌ.', modelEn: 'We must consider them, but the library could open at eight for quiet study — so nobody loses out.' },
        { unexpected: true, ex: 'لَوْ صَمَّمْتَ الجَدْوَلَ بِنَفْسِكَ، مَاذَا تُغَيِّرُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ صَمَّمْتُهُ، لَـ…', model: 'لَوْ صَمَّمْتُهُ، لَوَضَعْتُ المَوَادَّ الصَّعْبَةَ فِي مُنْتَصَفِ الصَّبَاحِ، وَلَجَعَلْتُ الرِّيَاضَةَ بَعْدَ الغَدَاءِ، لِأَنَّ الطَّاقَةَ تَقِلُّ عِنْدَئِذٍ.', modelEn: 'I’d put hard subjects mid-morning and sport after lunch, when energy drops.' },
      ],
      girl: 'صَمَّمْتِ',
      notes: 'Stretch: evidence with tuʾakkidu anna … wa-anna, a concession with a comparison of duals, a past trial → fa- result, alladhīna, a balanced solution with li-dhālika, law … la-.',
      modelFoot: 'Stretch: evidence, a reasoned concession, a past trial, a balanced solution and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'مَوَادِّي', aim: 'one full sentence per question',
      qs: [
        { q: 'مَا مَادَّتُكَ المُفَضَّلَةُ؟', en: 'What is your favourite subject?', start: 'مَادَّتِي المُفَضَّلَةُ …', model: 'مَادَّتِيَ المُفَضَّلَةُ التَّارِيخُ.', modelEn: 'My favourite subject is history.' },
        { q: 'لِمَاذَا تُحِبُّهَا؟', en: 'Why do you like it?', start: 'لِأَنَّهَا / لِأَنَّهُ …', model: 'لِأَنَّهُ مُمْتِعٌ، وَأَتَعَلَّمُ عَنِ المَاضِي.', modelEn: 'Because it is interesting and I learn about the past.' },
        { q: 'مَتَى يَبْدَأُ يَوْمُكَ الدِّرَاسِيُّ؟', en: 'When does your school day start?', start: 'يَبْدَأُ فِي السَّاعَةِ …', model: 'يَبْدَأُ فِي السَّاعَةِ الثَّامِنَةِ وَالرُّبْعِ.', modelEn: 'It starts at quarter past eight.' },
        { q: 'كَمْ حِصَّةً عِنْدَكَ كُلَّ يَوْمٍ؟', en: 'How many lessons do you have each day?', start: 'عِنْدِي … حِصَصٍ', model: 'عِنْدِي سِتُّ حِصَصٍ كُلَّ يَوْمٍ.', modelEn: 'I have six lessons every day.' },
        { q: 'مَا المَادَّةُ الصَّعْبَةُ عَلَيْكَ؟', en: 'Which subject is hard for you?', start: 'المَادَّةُ الصَّعْبَةُ … هِيَ …', model: 'المَادَّةُ الصَّعْبَةُ عَلَيَّ هِيَ الفِيزْيَاءُ.', modelEn: 'The hard subject for me is physics.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + an accurate time or reason = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'الجَدْوَلُ وَالتَّفْضِيلَاتُ', aim: 'two or three sentences, with a comparison and a past detail',
      qs: [
        { q: 'صِفْ يَوْمًا دِرَاسِيًّا عَادِيًّا.', en: 'Describe a normal school day.', start: 'يَبْدَأُ … ثُمَّ … وَيَنْتَهِي …', model: 'يَبْدَأُ يَوْمِي فِي الثَّامِنَةِ وَالنِّصْفِ بِحِصَّةِ الرِّيَاضِيَّاتِ، ثُمَّ العُلُومِ، وَبَعْدَ الغَدَاءِ عِنْدَنَا التَّارِيخُ، وَيَنْتَهِي اليَوْمُ فِي الثَّالِثَةِ.', modelEn: 'My day starts at 8.30 with maths, then science; after lunch history; it ends at three.' },
        { q: 'قَارِنْ بَيْنَ مَادَّتَيْنِ.', en: 'Compare two subjects.', start: '… أَسْهَلُ مِنْ … لٰكِنَّ …', model: 'الجُغْرَافْيَا أَسْهَلُ مِنَ الكِيمْيَاءِ، لٰكِنَّ الكِيمْيَاءَ أَكْثَرُ فَائِدَةً لِمُسْتَقْبَلِي.', modelEn: 'Geography is easier than chemistry, but chemistry is more useful for my future.' },
        { q: 'هَلْ تَغَيَّرَتْ مَادَّتُكَ المُفَضَّلَةُ؟', en: 'Has your favourite subject changed?', start: 'كُنْتُ أُحِبُّ … أَمَّا الآنَ …', model: 'كُنْتُ أُحِبُّ الرَّسْمَ فِي الابْتِدَائِيَّةِ، أَمَّا الآنَ فَأُفَضِّلُ العُلُومَ، لِأَنَّ التَّجَارِبَ مُدْهِشَةٌ.', modelEn: 'I loved art in primary; now I prefer science, because experiments are amazing.' },
        { q: 'مَا رَأْيُكَ فِي الوَاجِبَاتِ المَنْزِلِيَّةِ؟', en: 'What do you think of homework?', start: 'أَرَاهَا مُفِيدَةً لِأَنَّ … لٰكِنَّ …', model: 'أَرَاهَا مُفِيدَةً لِأَنَّهَا تُسَاعِدُنَا عَلَى المُرَاجَعَةِ، لٰكِنَّهَا أَحْيَانًا كَثِيرَةٌ جِدًّا.', modelEn: 'Useful for revision, but sometimes far too much.' },
        { q: 'أَيَّ مَوَادَّ سَتَدْرُسُ السَّنَةَ القَادِمَةَ؟', en: 'Which subjects will you study next year?', start: 'سَأَدْرُسُ … لِأَنِّي أُرِيدُ أَنْ …', model: 'سَأَدْرُسُ الأَحْيَاءَ وَالكِيمْيَاءَ وَالعَرَبِيَّةَ، لِأَنِّي أُرِيدُ أَنْ أَدْرُسَ الصَّيْدَلَةَ.', modelEn: 'Biology, chemistry and Arabic — I want to study pharmacy.' },
      ],
      foot: 'Develop: two or three sentences — times, a comparison with lākinna and a past or future detail.',
      modelFoot: 'Times + comparison + time frame = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'المَدْرَسَةُ وَالمُسْتَقْبَلُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ يَجِبُ أَنْ يَخْتَارَ الطُّلَّابُ كُلَّ مَوَادِّهِمْ؟', en: 'Should students choose all their subjects?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، يَزِيدُ الاخْتِيَارُ حَمَاسَهُمْ، وَمِنْ نَاحِيَةٍ أُخْرَى، يَحْتَاجُ الجَمِيعُ إِلَى أَسَاسٍ فِي الرِّيَاضِيَّاتِ وَاللُّغَةِ.', modelEn: 'Choice boosts motivation, but everyone needs a base in maths and language.' },
        { q: 'هَلِ المَوَادُّ الفَنِّيَّةُ أَقَلُّ أَهَمِّيَّةً؟', en: 'Are creative subjects less important?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ بَعْضَ النَّاسِ يَرَوْنَهَا تَرْفِيهًا، غَيْرَ أَنَّهَا تُنَمِّي الإِبْدَاعَ الَّذِي تَحْتَاجُ إِلَيْهِ كُلُّ مِهْنَةٍ.', modelEn: 'Some see them as entertainment, but they build the creativity every job needs.' },
        { q: 'كَيْفَ كَانَتِ المَوَادُّ فِي مَدْرَسَةِ وَالِدَيْكَ؟', en: 'What were subjects like at your parents’ school?', start: 'كَانُوا يَدْرُسُونَ … أَمَّا نَحْنُ فَـ…', model: 'كَانُوا يَدْرُسُونَ مَوَادَّ أَقَلَّ، وَلَمْ تَكُنْ هُنَاكَ حِصَّةٌ لِلْحَاسُوبِ، أَمَّا نَحْنُ فَنَتَعَلَّمُ البَرْمَجَةَ مُنْذُ الصَّفِّ السَّابِعِ.', modelEn: 'They studied fewer subjects, with no computing; we learn coding from Year 7.' },
        { q: 'مَا المَادَّةُ الَّتِي يَجِبُ أَنْ تُضَافَ إِلَى الجَدْوَلِ؟', en: 'Which subject should be added to the timetable?', start: 'أَقْتَرِحُ أَنْ تُضَافَ … لِأَنَّ …', model: 'أَقْتَرِحُ أَنْ تُضَافَ مَادَّةٌ لِلثَّقَافَةِ المَالِيَّةِ، لِأَنَّ كَثِيرًا مِنَ الشَّبَابِ لَا يَعْرِفُونَ كَيْفَ يُدِيرُونَ أَمْوَالَهُمْ.', modelEn: 'Financial literacy — many young people don’t know how to manage money.' },
        { q: 'لَوْ لَمْ تَكُنْ هُنَاكَ امْتِحَانَاتٌ، هَلْ تَدْرُسُ المَوَادَّ نَفْسَهَا؟', en: 'If there were no exams, would you study the same subjects?', start: 'لَوْ لَمْ تَكُنْ …، لَـ…', model: 'لَوْ لَمْ تَكُنْ هُنَاكَ امْتِحَانَاتٌ، لَدَرَسْتُ التَّارِيخَ وَالعَرَبِيَّةَ أَكْثَرَ، لِأَنِّي أَدْرُسُهُمَا لِلْمُتْعَةِ لَا لِلدَّرَجَاتِ.', modelEn: 'I’d study more history and Arabic, because I study them for pleasure, not grades.' },
      ],
      foot: 'Stretch: a balanced view, a concession, kānū + present vs ammā … fa-, aqtariḥu an + passive and law lam … la-.',
      modelFoot: 'Stretch: balance, ṣaḥīḥun anna … ghayra anna, past vs present, a passive proposal and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I named subjects and gave times accurately.' },
    { route: 'core', text: 'I gave a reason with li-anna / li-annahā.' },
    { route: 'develop', text: 'I compared subjects (aṣʿab / ashal / akthar fāʾida min).' },
    { route: 'develop', text: 'I used ufaḍḍilu … ʿalā … and lākinna.' },
    { route: 'stretch', text: 'I gave a balanced view, a concession or law … la-.' },
  ],
};
speak.CONV[2].qs[2].start = 'كَانُوا يَدْرُسُونَ … أَمَّا نَحْنُ فَنَتَعَلَّمُ …';
speak.CONV[2].qs[4].start = 'لَوْ لَمْ تَكُنْ هُنَاكَ امْتِحَانَاتٌ، لَدَرَسْتُ …';
speak.RP[3].tasks[2].help = 'نَعَمْ، فِي أُسْبُوعِ … فَتَحَسَّنَتْ …';
speak.RP[3].tasks[4].help = 'لَوْ صَمَّمْتُهُ، لَوَضَعْتُ …';

const Q2_CORE = `مَرْحَبًا يَا جَدَّتِي،
كَيْفَ حَالُكِ؟ أُرِيدُ أَنْ أُخْبِرَكِ عَنْ جَدْوَلِي الجَدِيدِ. يَبْدَأُ يَوْمِي الدِّرَاسِيُّ فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ، وَيَنْتَهِي فِي الثَّالِثَةِ. عِنْدِي سِتُّ حِصَصٍ كُلَّ يَوْمٍ. مَادَّتِيَ المُفَضَّلَةُ العَرَبِيَّةُ، لِأَنَّ المُعَلِّمَةَ لَطِيفَةٌ وَالدُّرُوسَ مُمْتِعَةٌ. أَمْسِ كَانَ عِنْدَنَا امْتِحَانٌ فِي الرِّيَاضِيَّاتِ، وَكَانَ صَعْبًا قَلِيلًا. فِي رَأْيِي، الرِّيَاضِيَّاتُ أَصْعَبُ مِنَ العُلُومِ، لٰكِنَّهَا مُفِيدَةٌ. فِي السَّنَةِ القَادِمَةِ سَأَخْتَارُ الكِيمْيَاءَ وَالأَحْيَاءَ، لِأَنِّي أُرِيدُ أَنْ أُصْبِحَ طَبِيبَةً.
مَعَ حُبِّي،
لَيْلَى`;
const Q2_FULL = `جَدَّتِيَ العَزِيزَةَ،
سَأَلْتِنِي عَنِ المَدْرَسَةِ، فَإِلَيْكِ أَخْبَارَ جَدْوَلِي الجَدِيدِ: يَبْدَأُ اليَوْمُ فِي الثَّامِنَةِ وَالنِّصْفِ وَيَنْتَهِي فِي الثَّالِثَةِ، وَبَيْنَهُمَا سِتُّ حِصَصٍ وَاسْتِرَاحَتَانِ قَصِيرَتَانِ. وَمَا زَالَتِ العَرَبِيَّةُ مَادَّتِيَ المُفَضَّلَةَ، لِأَنَّ مُعَلِّمَتَنَا تَرْبِطُ كُلَّ دَرْسٍ بِحَيَاتِنَا اليَوْمِيَّةِ، وَتَجْعَلُنَا نَكْتُبُ قِصَصًا قَصِيرَةً عَنْ أُسَرِنَا. أَمَّا الرِّيَاضِيَّاتُ فَأَصْبَحَتْ أَصْعَبَ بِكَثِيرٍ؛ فَقَدْ قَدَّمْنَا أَمْسِ امْتِحَانًا فِي الجَبْرِ لَمْ أُكْمِلْهُ فِي الوَقْتِ، فَخَرَجْتُ مِنَ الفَصْلِ حَزِينَةً. وَمَعَ أَنَّهَا تُتْعِبُنِي، فَإِنِّي أَعْرِفُ أَنَّهَا ضَرُورِيَّةٌ لِحُلْمِي. لِذٰلِكَ سَأَخْتَارُ العَامَ القَادِمَ الكِيمْيَاءَ وَالأَحْيَاءَ، وَإِذَا نَجَحْتُ، فَسَأَدْرُسُ الطِّبَّ.
مَعَ حُبِّي وَشَوْقِي،
لَيْلَى`;
const Q3A_CORE = `أَدْرُسُ فِي الصَّفِّ العَاشِرِ، وَعِنْدِي تِسْعُ مَوَادَّ. يَبْدَأُ يَوْمِي الدِّرَاسِيُّ فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ، وَيَنْتَهِي فِي الثَّالِثَةِ وَالرُّبْعِ. الاسْتِرَاحَةُ فِي العَاشِرَةِ وَالنِّصْفِ، وَالغَدَاءُ فِي السَّاعَةِ الوَاحِدَةِ. أَصِلُ إِلَى المَدْرَسَةِ بِالحَافِلَةِ.
مَادَّتِيَ المُفَضَّلَةُ التَّارِيخُ، لِأَنَّهُ مُمْتِعٌ، وَأَتَعَلَّمُ فِيهِ عَنْ حَضَارَاتٍ قَدِيمَةٍ. أُحِبُّ أَيْضًا العَرَبِيَّةَ، لِأَنَّهَا لُغَةُ عَائِلَتِي. لٰكِنِّي لَا أُحِبُّ الفِيزْيَاءَ كَثِيرًا، لِأَنَّهَا صَعْبَةٌ عَلَيَّ، وَالمُعَادَلَاتُ فِيهَا كَثِيرَةٌ جِدًّا.
فِي المَدْرَسَةِ الابْتِدَائِيَّةِ كَانَتِ المَوَادُّ أَسْهَلَ بِكَثِيرٍ. كُنْتُ أُحِبُّ الرَّسْمَ وَالمُوسِيقَى، وَكَانَ عِنْدَنَا وَقْتٌ طَوِيلٌ لِلَّعِبِ. فِي السَّنَةِ المَاضِيَةِ اخْتَرْتُ مَوَادِّي لِلشَّهَادَةِ، وَكَانَ الاخْتِيَارُ صَعْبًا، لِأَنِّي أُحِبُّ مَوَادَّ كَثِيرَةً.
فِي رَأْيِي، كُلُّ المَوَادِّ مُفِيدَةٌ، لٰكِنَّ بَعْضَهَا أَكْثَرُ أَهَمِّيَّةً لِلْمُسْتَقْبَلِ. فِي السَّنَةِ القَادِمَةِ سَأَدْرُسُ التَّارِيخَ وَالعَرَبِيَّةَ وَالإِنْجْلِيزِيَّةَ، لِأَنِّي أُرِيدُ أَنْ أَعْمَلَ صَحَفِيًّا فِي المُسْتَقْبَلِ.`;
const Q3A_FULL = `يَقُولُ أَبِي إِنَّ الجَدْوَلَ الدِّرَاسِيَّ يَكْشِفُ شَخْصِيَّةَ الطَّالِبِ، وَأَظُنُّهُ مُحِقًّا؛ فَعِنْدَمَا أَنْظُرُ إِلَى جَدْوَلِي هٰذَا العَامَ، أَرَى مَزِيجًا يُشْبِهُنِي تَمَامًا: ثَلَاثَ مَوَادَّ عِلْمِيَّةً، وَثَلَاثَ لُغَاتٍ، وَالتَّارِيخَ الَّذِي لَا أَسْتَطِيعُ الاسْتِغْنَاءَ عَنْهُ.
يَبْدَأُ يَوْمِي فِي الثَّامِنَةِ وَالنِّصْفِ، وَأُفَضِّلُ أَنْ تَكُونَ المَوَادُّ الصَّعْبَةُ فِي الصَّبَاحِ، حِينَ يَكُونُ ذِهْنِي صَافِيًا. أَمَّا الحِصَصُ الَّتِي بَعْدَ الغَدَاءِ، فَأُفَضِّلُ أَنْ تَكُونَ عَمَلِيَّةً، كَالتَّجَارِبِ فِي المُخْتَبَرِ أَوِ النِّقَاشِ فِي حِصَّةِ التَّارِيخِ، لِأَنَّ الجُلُوسَ وَالاسْتِمَاعَ بَعْدَ الأَكْلِ يُشْعِرُنِي بِالنُّعَاسِ.
وَلَمْ تَكُنْ تَفْضِيلَاتِي دَائِمًا كَذٰلِكَ؛ فَفِي المَدْرَسَةِ الابْتِدَائِيَّةِ كُنْتُ أَكْرَهُ الرِّيَاضِيَّاتِ، إِلَى أَنْ جَاءَنَا مُعَلِّمٌ حَوَّلَ كُلَّ مَسْأَلَةٍ إِلَى لُغْزٍ، فَأَصْبَحْتُ أَنْتَظِرُ حِصَّتَهُ بِشَوْقٍ، وَأَحُلُّ الأَلْغَازَ حَتَّى فِي البَيْتِ.
صَحِيحٌ أَنَّ بَعْضَ المَوَادِّ أَصْعَبُ مِنْ غَيْرِهَا، غَيْرَ أَنَّ المُعَلِّمَ وَالطَّرِيقَةَ يَصْنَعَانِ الفَرْقَ. وَلَوْ أُتِيحَ لِي أَنْ أَخْتَارَ بِحُرِّيَّةٍ، لَأَضَفْتُ إِلَى الجَدْوَلِ حِصَّةً أُسْبُوعِيَّةً لِلْفَلْسَفَةِ، لِأَنَّهَا تُعَلِّمُنَا كَيْفَ نُفَكِّرُ، لَا مَاذَا نُفَكِّرُ.`;
const Q3B_FULL = `يُوَاجِهُ الطُّلَّابُ فِي سِنِّ الرَّابِعَةَ عَشْرَةَ قَرَارًا صَعْبًا: اخْتِيَارَ المَوَادِّ الَّتِي سَيَدْرُسُونَهَا لِلشَّهَادَةِ. فَهَلْ يَخْتَارُونَ مَا يُحِبُّونَ، أَمْ مَا يَضْمَنُ لَهُمْ وَظِيفَةً جَيِّدَةً فِي المُسْتَقْبَلِ؟
مِنْ نَاحِيَةٍ، يَدْرُسُ الطَّالِبُ المَادَّةَ الَّتِي يُحِبُّهَا بِحَمَاسٍ أَكْبَرَ، مِمَّا يُؤَدِّي غَالِبًا إِلَى نَتَائِجَ أَفْضَلَ. وَمِنْ نَاحِيَةٍ أُخْرَى، تَطْلُبُ بَعْضُ الجَامِعَاتِ وَالمِهَنِ مَوَادَّ مُحَدَّدَةً، كَالكِيمْيَاءِ لِلطِّبِّ وَالرِّيَاضِيَّاتِ لِلْهَنْدَسَةِ، فَلَا يَكْفِي الحُبُّ وَحْدَهُ، بَلْ يَجِبُ أَنْ يَعْرِفَ الطَّالِبُ أَيْنَ يُرِيدُ أَنْ يَصِلَ.
وَقَدْ عِشْتُ هٰذِهِ الحَيْرَةَ فِي العَامِ المَاضِي؛ فَكُنْتُ أُرِيدُ أَنْ أَخْتَارَ الفَنَّ، بَيْنَمَا نَصَحَنِي وَالِدَايَ بِالفِيزْيَاءِ. وَبَعْدَ نِقَاشٍ طَوِيلٍ مَعَ مُرْشِدِ المَدْرَسَةِ، اخْتَرْتُ الاثْنَيْنِ مَعًا، وَتَخَلَّيْتُ عَنِ الجُغْرَافْيَا، وَأَنَا اليَوْمَ سَعِيدٌ بِهٰذَا القَرَارِ.
صَحِيحٌ أَنَّ المُسْتَقْبَلَ يَحْتَاجُ إِلَى تَخْطِيطٍ، غَيْرَ أَنَّ الطَّالِبَ الَّذِي يَدْرُسُ مَا يَكْرَهُهُ نَادِرًا مَا يَتَفَوَّقُ. وَإِذَا وَازَنَ الطُّلَّابُ بَيْنَ شَغَفِهِمْ وَمُتَطَلَّبَاتِ أَحْلَامِهِمْ، فَسَيَصِلُونَ إِلَى خِيَارٍ يُرْضِيهِمُ اليَوْمَ وَيَخْدُمُهُمْ غَدًا بِلَا شَكٍّ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a subject-options form, write an email about your timetable and favourite subjects, and write an extended piece about your subjects and preferences or about choosing subjects.',
  lift: [
    { ar: 'يَبْدَأُ اليَوْمُ فِي الثَّامِنَةِ وَالنِّصْفِ وَيَنْتَهِي فِي الثَّالِثَةِ', en: 'the day starts at 8.30 and ends at three' },
    { ar: 'أُفَضِّلُ التَّارِيخَ عَلَى الجُغْرَافْيَا، لِأَنَّهُ …', en: 'I prefer history to geography, because …' },
    { ar: 'الرِّيَاضِيَّاتُ أَصْعَبُ مِنَ العُلُومِ، لٰكِنَّهَا مُفِيدَةٌ', en: 'maths is harder than science, but it is useful' },
  ],
  checkTip: 'Check: times use feminine ordinals (fī as-sāʿati ath-thāminati wa-n-niṣf); the pronoun after li-anna / lākinna matches the subject (at-tārīkh → li-annahu; al-kīmyāʾ → li-annahā); 3–10 + plural (sittu ḥiṣaṣin), 11+ + singular.',
  FORM: {
    title: 'Subject-options form', ar: 'اسْتِمَارَةُ اخْتِيَارِ المَوَادِّ',
    fields: [
      { core: true, ar: 'الاسْمُ وَالصَّفُّ', en: 'Name and class', model: 'لَيْلَى أَحْمَدُ، التَّاسِعُ (أ)', modelEn: 'Layla Ahmed, 9A' },
      { core: true, ar: 'الاخْتِيَارُ الأَوَّلُ', en: 'First choice', model: 'الكِيمْيَاءُ', modelEn: 'chemistry' },
      { core: true, ar: 'الاخْتِيَارُ الثَّانِي', en: 'Second choice', model: 'اللُّغَةُ العَرَبِيَّةُ', modelEn: 'Arabic' },
      { core: true, ar: 'الاخْتِيَارُ الثَّالِثُ', en: 'Third choice', model: 'التَّارِيخُ', modelEn: 'history' },
      { core: true, ar: 'مَادَّةٌ صَعْبَةٌ عَلَيْكَ', en: 'A subject you find hard', model: 'الفِيزْيَاءُ', modelEn: 'physics' },
      { core: true, ar: 'الوَقْتُ المُفَضَّلُ لِلدِّرَاسَةِ', en: 'Preferred study time', model: 'مِنَ الخَامِسَةِ إِلَى السَّادِسَةِ مَسَاءً', modelEn: '5 to 6 p.m.' },
      { ar: 'المِهْنَةُ الَّتِي تَحْلُمُ بِهَا', en: 'The career you dream of', model: 'صَيْدَلَانِيَّةٌ', modelEn: 'a pharmacist (f.)' },
      { ar: 'جُمْلَةٌ: لِمَاذَا اخْتَرْتَ المَادَّةَ الأُولَى؟', en: 'ONE sentence: why your first choice', model: 'اخْتَرْتُ الكِيمْيَاءَ لِأَنَّهَا ضَرُورِيَّةٌ لِلصَّيْدَلَةِ، مَعَ أَنَّهَا أَصْعَبُ مِنَ الأَحْيَاءِ.', modelEn: 'I chose chemistry because it is essential for pharmacy, although it is harder than biology.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with li-annahā and maʿa anna.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 6: min … ilā … with feminine ordinals. Box 8: li-annahā (al-kīmyāʾ is f.) + maʿa anna + comparative.',
  },
  Q2: {
    short: 'an email about your timetable', title: 'Question 2: my new timetable', ar: 'جَدْوَلِي الجَدِيدُ',
    task: 'Write an email in Arabic to a relative about your school timetable, of about 80–90 words. You must include: • when your day starts and ends, and how many lessons you have • your favourite subject and why • something that happened in a lesson recently • the subjects you will choose next year and why.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Accurate times and a number of lessons.', 'A comparison, a past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['يَبْدَأُ يَوْمِي فِي السَّاعَةِ … وَيَنْتَهِي فِي …', 'my day starts at … and ends at …'], ['مَادَّتِيَ المُفَضَّلَةُ … لِأَنَّ …', 'my favourite subject is … because …'], ['أَمْسِ كَانَ عِنْدَنَا امْتِحَانٌ فِي …', 'yesterday we had a test in …'], ['سَأَخْتَارُ … لِأَنِّي أُرِيدُ أَنْ …', 'I will choose … because I want to …']],
    rubric: [
      ['task', 'اكْتُبِي رِسَالَةً إِلَى أَحَدِ أَقَارِبِكِ عَنْ جَدْوَلِكِ الدِّرَاسِيِّ (٨٠–٩٠ كَلِمَةً).', 'Write to a relative about your timetable (80–90 words).'],
      ['1', 'مَتَى يَبْدَأُ يَوْمُكِ وَيَنْتَهِي؟ وَكَمْ حِصَّةً عِنْدَكِ؟', 'When your day starts and ends; how many lessons'],
      ['2', 'مَا مَادَّتُكِ المُفَضَّلَةُ؟ وَلِمَاذَا؟', 'Your favourite subject and why'],
      ['3', 'مَاذَا حَدَثَ فِي حِصَّةٍ مُؤَخَّرًا؟', 'Something that happened in a lesson recently'],
      ['4', 'أَيَّ مَوَادَّ سَتَخْتَارِينَ السَّنَةَ القَادِمَةَ؟ وَلِمَاذَا؟', 'Next year’s choices and why'],
    ],
    qwords: 'مَتَى (when) · كَمْ (how many) · لِمَاذَا (why) · مَاذَا حَدَثَ (what happened — PAST) · سَتَخْتَارِينَ (you will choose — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'يَبْدَأُ يَوْمِي فِي السَّاعَةِ ______ ، وَيَنْتَهِي فِي ______ . عِنْدِي ______ حِصَصٍ.', 'My day starts at …, and ends at … I have … lessons.'],
      ['2', 'مَادَّتِيَ المُفَضَّلَةُ ______ ، لِأَنَّ ______ .', 'My favourite subject is …, because …'],
      ['3', 'أَمْسِ كَانَ عِنْدَنَا ______ فِي ______ ، وَكَانَ ______ .', 'Yesterday we had … in …, and it was …'],
      ['4', 'فِي السَّنَةِ القَادِمَةِ سَأَخْتَارُ ______ ، لِأَنِّي أُرِيدُ أَنْ ______ .', 'Next year I will choose …, because I want to …'],
      ['end', 'مَعَ حُبِّي، ______', 'With love, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Grandma, how are you? I want to tell you about my new timetable. My school day starts at 8.30 and ends at three. I have six lessons a day. My favourite subject is Arabic, because the teacher is kind and the lessons are fun. Yesterday we had a maths test, and it was a bit hard. In my opinion maths is harder than science, but it is useful. Next year I’ll choose chemistry and biology, because I want to become a doctor. With love, Layla.”',
      find: ['فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ', 'سِتُّ حِصَصٍ', 'أَصْعَبُ مِنَ العُلُومِ', 'سَأَخْتَارُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Grandma, you asked about school, so here’s news of my new timetable: the day starts at 8.30 and ends at three, with six lessons and two short breaks in between. Arabic is still my favourite subject, because our teacher links every lesson to daily life and has us write short stories about our families. Maths, though, has become much harder: yesterday we sat an algebra test I couldn’t finish in time, and I left the room upset. Although it tires me, I know it is essential for my dream. So next year I’ll choose chemistry and biology, and if I succeed, I’ll study medicine. With love and longing, Layla.”',
      find: ['وَاسْتِرَاحَتَانِ قَصِيرَتَانِ', 'مَا زَالَتِ العَرَبِيَّةُ', 'لَمْ أُكْمِلْهُ', 'مَعَ أَنَّهَا … فَإِنِّي'],
    },
  },
  Q3: {
    a: { title: 'مَوَادِّي وَجَدْوَلِي', en: 'My subjects and my timetable', bullets: 'جَدْوَلُكَ اليَوْمِيُّ · المَوَادُّ الَّتِي تُحِبُّهَا وَالَّتِي لَا تُحِبُّهَا · كَيْفَ تَغَيَّرَتْ تَفْضِيلَاتُكَ · اخْتِيَارَاتُكَ لِلْمُسْتَقْبَلِ', bulletsEn: 'Your daily timetable · subjects you like and dislike · how your preferences changed · your future choices' },
    b: { title: 'اخْتِيَارُ المَوَادِّ: الشَّغَفُ أَمِ المُسْتَقْبَلُ؟', en: 'Choosing subjects: passion or the future?', bullets: 'القَرَارُ الصَّعْبُ · الشَّغَفُ وَمُتَطَلَّبَاتُ المِهَنِ · تَجْرِبَتُكَ · رَأْيُكَ', bulletsEn: 'The difficult decision · passion and career requirements · your experience · your opinion' },
    plan: [
      'Your timetable — yabdaʾu yawmī fī as-sāʿa …, wa-yantahī …; ʿindī tisʿu mawādd.',
      'Likes and dislikes — li-annahu / li-annahā …, lākinnī lā uḥibbu …',
      'Past — fī al-ibtidāʾiyya kānat al-mawādd ashal …, kuntu uḥibbu …',
      'Future — sa-adrusu … li-annī urīdu an …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'يَبْدَأُ يَوْمِي فِي السَّاعَةِ الثَّامِنَةِ وَالنِّصْفِ.', en: 'present: my day starts at half past eight.' },
      { ar: 'كَانَتِ المَوَادُّ أَسْهَلَ، وَكُنْتُ أُحِبُّ الرَّسْمَ.', en: 'past: subjects were easier, and I used to love art.' },
      { ar: 'سَأَدْرُسُ التَّارِيخَ، لِأَنِّي أُرِيدُ أَنْ أَعْمَلَ صَحَفِيًّا.', en: 'future: I will study history, because I want to be a journalist.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'I’m in Year 10 with nine subjects; the day runs 8.30–3.15, break at 10.30, lunch at one; I get to school by bus → favourite: history (ancient civilisations); I like Arabic, my family’s language, but not physics — too hard, with far too many equations → primary subjects were much easier: I loved art and music and had lots of playtime; last year I chose my GCSE subjects, a hard choice, because I like many subjects → all subjects are useful, some more so for the future; next year I’ll study history, Arabic and English to become a journalist.', find: ['فِي السَّاعَةِ الثَّامِنَةِ', 'لِأَنَّهُ مُمْتِعٌ', 'كَانَتِ المَوَادُّ أَسْهَلَ', 'لِأَنِّي أُرِيدُ أَنْ'], notes: 'Core model: times with ordinals, tisʿu mawādda, li-annahu vs li-annahā by gender, lākinnī, kānat + comparative, kuntu + present and a future reason.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'My dad says a timetable reveals a student’s personality — and he’s right: mine is a mix that is just like me: three sciences, three languages and history, which I can’t do without → my day starts at 8.30; I prefer hard subjects in the morning when my mind is clear, and practical lessons after lunch, like lab experiments or history debates, because sitting and listening after eating makes me sleepy → my preferences weren’t always like this: in primary I hated maths until a teacher turned every problem into a puzzle, and I began looking forward to his lessons, solving puzzles even at home → some subjects are harder, but the teacher and method make the difference; “if I could choose freely, I’d add a weekly philosophy lesson, because it teaches us how to think, not what to think”.', find: ['يَقُولُ … إِنَّ', 'الَّذِي لَا أَسْتَطِيعُ', 'إِلَى أَنْ جَاءَنَا', 'لَوْ أُتِيحَ لِي … لَأَضَفْتُ'], notes: 'Full-mark model: reported speech, aẓunnuhu muḥiqqan, a relative with ʿanhu, ḥīna, ammā … fa-, lam takun … kadhālika, ilā an, a dual verb (yaṣnaʿān), a passive law … la- with lā contrast.' },
      { which: 'ب', level: 'Full', subtitle: 'passion or the future?', text: Q3B_FULL, en: 'At fourteen students face a hard decision: which subjects to take for their exams — what they love, or what guarantees a good job? → students study what they love with more enthusiasm, which usually leads to better results; but some universities and careers require specific subjects — chemistry for medicine, maths for engineering — so love alone isn’t enough — students must know where they want to go → I lived this dilemma last year: I wanted art, while my parents advised physics; after a long talk with the school counsellor I chose both and dropped geography, and today I’m happy with that decision → the future needs planning, but a student who studies what he hates rarely excels; “if students balance their passion with what their dreams require, they’ll reach a choice that satisfies them today and will surely serve them tomorrow”.', find: ['المَوَادِّ الَّتِي سَيَدْرُسُونَهَا', 'مِمَّا يُؤَدِّي غَالِبًا', 'بَيْنَمَا نَصَحَنِي', 'إِذَا وَازَنَ … فَسَيَصِلُونَ'], notes: 'Full-mark model for the Stretch title: a rhetorical question, a relative with a returning pronoun, a balanced view with mimmā and ka- examples, baynamā, a concession with nādiran mā and idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; times and subjects are correct.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: accurate times, a number of lessons and a comparison.' },
    { route: 'develop', text: 'Q3: four paragraphs with li-annahu / li-annahā and lākinna.' },
    { route: 'stretch', text: 'Q3: a balanced view, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
