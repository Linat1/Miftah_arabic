'use strict';
/* Exam-practice data · TB-L02 · Family, Friends and Relationships (possessive endings; iḍāfa; dual and plural). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'B', n: 2, short: 'Family, Friends and Relationships', arShort: 'العَائِلَةُ وَالأَصْدِقَاءُ', fileTitle: 'Family_Friends_and_Relationships', title: 'Family, Friends and Relationships', ar: 'العَائِلَةُ وَالأَصْدِقَاءُ وَالعَلَاقَاتُ', icon: 'FaPeopleRoof', grammar: 'possessive endings; iḍāfa; dual and plural' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: describe your family and friends, explain relationships (my uncle’s son, my two sisters), and talk about how friendships change.',
  words: [
    w(1, 'أَخٌ', 'a brother', [['my', 'أَخِي'], ['dual', 'أَخَوَانِ'], ['pl.', 'إِخْوَةٌ']]),
    w(2, 'أُخْتٌ', 'a sister', [['my', 'أُخْتِي'], ['dual', 'أُخْتَانِ'], ['pl.', 'أَخَوَاتٌ']]),
    w(3, 'عَمٌّ · عَمَّةٌ', 'paternal uncle · aunt', [['my', 'عَمِّي · عَمَّتِي'], ['pl.', 'أَعْمَامٌ · عَمَّاتٌ']]),
    w(4, 'خَالٌ · خَالَةٌ', 'maternal uncle · aunt', [['my', 'خَالِي · خَالَتِي'], ['pl.', 'أَخْوَالٌ · خَالَاتٌ']]),
    w(5, 'ابْنُ عَمِّي', 'my cousin (uncle’s son)', [['f.', 'بِنْتُ عَمِّي'], ['pl.', 'أَوْلَادُ عَمِّي']], { tag: 'iḍāfa' }),
    w(6, 'جَدٌّ · جَدَّةٌ', 'grandfather · grandmother', [['my', 'جَدِّي · جَدَّتِي'], ['pl.', 'أَجْدَادٌ']]),
    w(7, 'صَدِيقٌ', 'a friend', [['m.', 'صَدِيقٌ'], ['f.', 'صَدِيقَةٌ'], ['pl.', 'أَصْدِقَاءُ']]),
    w(8, 'أَتَّفِقُ مَعَ …', 'I get on with …', [['he', 'يَتَّفِقُ'], ['she', 'تَتَّفِقُ'], ['we', 'نَتَّفِقُ']]),
    w(9, 'أَتَشَاجَرُ مَعَ …', 'I argue with …', [['he', 'يَتَشَاجَرُ'], ['she', 'تَتَشَاجَرُ'], ['we', 'نَتَشَاجَرُ']]),
    w(10, 'قَرِيبٌ مِنْ …', 'close to …', [['m.', 'قَرِيبٌ'], ['f.', 'قَرِيبَةٌ'], ['pl.', 'قَرِيبُونَ']]),
    w(11, 'الأَكْبَرُ · الأَصْغَرُ', 'the eldest · the youngest', [['f.', 'الكُبْرَى · الصُّغْرَى']], { tag: 'superlatives' }),
    w(12, 'أُسْرَةٌ', 'a family', [['my', 'أُسْرَتِي'], ['pl.', 'أُسَرٌ']]),
  ],
  words1: { eyebrow: 'Language bank · family words with my · dual · plural', title: 'Who is in your family?', ar: 'مَنْ فِي أُسْرَتِكَ؟', notes: 'LANGUAGE BANK (2 min) — the dual: عِنْدِي أَخَوَانِ وَأُخْتَانِ (two brothers and two sisters). Iḍāfa: ابْنُ عَمِّي (my uncle’s son) — the first word loses al- and tanwīn.' },
  words2: { eyebrow: 'Language bank · friendship and relationships (m. · f. · pl.)', title: 'Getting on — and falling out', ar: 'العَلَاقَاتُ', notes: 'LANGUAGE BANK (2 min) — أَتَّفِقُ مَعَ أُخْتِي (I get on with my sister) · أَتَشَاجَرُ مَعَ أَخِي أَحْيَانًا. Superlatives: أَخِي الأَكْبَرُ · أُخْتِي الكُبْرَى.' },
  checkCore: 'named family members with my (-ī) and gave ages or numbers',
  checkDevelop: 'used a dual or an iḍāfa and explained a relationship with a reason',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'showing a photo', title: 'Role play A — A family photo', ar: 'صُورَةُ العَائِلَةِ', you: 'a student', them: 'a friend looking at your photo',
      tasks: [
        { core: true, ex: 'صُورَةٌ جَمِيلَةٌ! كَمْ شَخْصًا فِي أُسْرَتِكَ؟', task: 'Say how many people are in your family.', help: 'فِي أُسْرَتِي … أَشْخَاصٍ', model: 'فِي أُسْرَتِي خَمْسَةُ أَشْخَاصٍ: أَبِي وَأُمِّي وَأَخَوَايَ وَأَنَا.', modelEn: 'There are five people in my family: my dad, my mum, my two brothers and me.' },
        { core: true, ex: 'مَنْ هٰذَا الرَّجُلُ؟', task: 'Say who the man is and his job.', help: 'هٰذَا … وَهُوَ …', model: 'هٰذَا أَبِي، وَهُوَ طَبِيبٌ فِي مُسْتَشْفًى كَبِيرٍ.', modelEn: 'This is my father; he is a doctor in a big hospital.' },
        { core: true, ex: 'وَمَنْ هٰذِهِ البِنْتُ الصَّغِيرَةُ؟', task: 'Say who she is and her age.', help: 'هٰذِهِ … عُمْرُهَا …', model: 'هٰذِهِ بِنْتُ عَمِّي، عُمْرُهَا سِتُّ سَنَوَاتٍ.', modelEn: 'This is my cousin; she is six.' },
        { core: true, ex: 'هَلْ عِنْدَكَ أَجْدَادٌ؟', task: 'Talk about your grandparents.', help: 'نَعَمْ، جَدِّي وَجَدَّتِي يَسْكُنَانِ فِي …', model: 'نَعَمْ، جَدِّي وَجَدَّتِي يَسْكُنَانِ فِي الأُرْدُنِّ.', modelEn: 'Yes, my grandfather and grandmother live in Jordan.' },
        { core: true, unexpected: true, ex: 'مَنْ أَقْرَبُ شَخْصٍ إِلَيْكَ؟', task: 'Answer the unexpected question.', help: '… لِأَنَّ …', model: 'أَخِي الأَكْبَرُ، لِأَنَّهُ يُسَاعِدُنِي دَائِمًا.', modelEn: 'My older brother, because he always helps me.' },
      ],
      girl: 'أُسْرَتِكِ · عِنْدَكِ · إِلَيْكِ',
      notes: 'Core: numbers + plural genitive (khamsatu ashkhāṣin), possessives (abī, ummī), dual verb (yaskunāni), a reason.',
    },
    {
      id: 'B', level: 'Core+', setting: 'planning a family visit', title: 'Role play B — Visiting your cousins', ar: 'زِيَارَةُ الأَقَارِبِ', you: 'a student', them: 'your aunt on the phone',
      tasks: [
        { core: true, ex: 'أَهْلًا يَا حَبِيبِي! مَتَى سَتَزُورُونَنَا؟', task: 'Say when you will visit.', help: 'سَنَزُورُكُمْ يَوْمَ …', model: 'سَنَزُورُكُمْ يَوْمَ الجُمُعَةِ بَعْدَ الصَّلَاةِ، إِنْ شَاءَ اللّٰهُ.', modelEn: 'We will visit you on Friday after prayers, God willing.' },
        { core: true, ex: 'مَنْ سَيَأْتِي مَعَكَ؟', task: 'Say who will come.', help: 'سَيَأْتِي … وَ…', model: 'سَيَأْتِي أَبِي وَأُمِّي وَأُخْتَايَ الصَّغِيرَتَانِ.', modelEn: 'My dad, my mum and my two little sisters will come.' },
        { ex: 'أَوْلَادِي يَنْتَظِرُونَكَ!', task: 'ASK how your cousins are.', help: 'كَيْفَ حَالُ …؟', model: 'وَكَيْفَ حَالُ أَوْلَادِ خَالَتِي؟ هَلْ نَجَحَ يُوسُفُ فِي الامْتِحَانِ؟', modelEn: 'And how are my cousins? Did Yusuf pass his exam?' },
        { ex: 'نَعَمْ! مَاذَا تُحِبُّ أَنْ تَأْكُلَ؟', task: 'Say what you would like to eat.', help: 'أُحِبُّ … الَّتِي تَطْبُخِينَهَا', model: 'أُحِبُّ المَنْسَفَ الَّذِي تَطْبُخِينَهُ، فَهُوَ أَلَذُّ مَنْسَفٍ فِي العَائِلَةِ!', modelEn: 'I love the mansaf you cook — it’s the tastiest mansaf in the family!' },
        { unexpected: true, ex: 'مَاذَا سَتَفْعَلُونَ بَعْدَ الغَدَاءِ؟', task: 'Answer the unexpected question.', help: 'سَنَلْعَبُ … / سَنَخْرُجُ …', model: 'سَنَلْعَبُ كُرَةَ القَدَمِ فِي الحَدِيقَةِ مَعَ أَوْلَادِ خَالَتِي.', modelEn: 'We will play football in the garden with my cousins.' },
      ],
      girl: 'يَا حَبِيبَتِي · مَعَكِ · يَنْتَظِرُونَكِ · تُحِبِّينَ',
      notes: 'Task 2: the dual with an adjective (ukhtāya ṣ-ṣaghīratāni). Task 3: the CANDIDATE asks. Task 4: a relative clause + superlative.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a friend’s problem', title: 'Role play C — A friend has fallen out with her sister', ar: 'مُشْكِلَةٌ عَائِلِيَّةٌ', you: 'a good friend', them: 'your friend who is upset',
      tasks: [
        { ex: 'تَشَاجَرْتُ مَعَ أُخْتِي أَمْسِ.', task: 'Show sympathy and ask what happened.', help: 'لَا تَحْزَنِي! مَاذَا …؟', model: 'لَا تَحْزَنِي! مَاذَا حَدَثَ بِالضَّبْطِ؟', modelEn: 'Don’t be sad! What exactly happened?' },
        { ex: 'أَخَذَتْ مَلَابِسِي بِدُونِ إِذْنٍ.', task: 'Say what happens with your own sibling.', help: 'أَنَا أَيْضًا … أَحْيَانًا', model: 'أَنَا أَيْضًا أَتَشَاجَرُ مَعَ أَخِي أَحْيَانًا، لِأَنَّهُ يَأْخُذُ أَغْرَاضِي.', modelEn: 'I also argue with my brother sometimes, because he takes my things.' },
        { ex: 'مَاذَا أَفْعَلُ الآنَ؟', task: 'Give two pieces of advice.', help: 'يَجِبُ أَنْ … وَأَنْ …', model: 'يَجِبُ أَنْ تَتَكَلَّمِي مَعَهَا بِهُدُوءٍ، وَأَنْ تَتَّفِقَا عَلَى قَوَاعِدَ وَاضِحَةٍ.', modelEn: 'You should talk to her calmly, and you should both agree on clear rules.' },
        { ex: '… لٰكِنَّهَا أَكْبَرُ مِنِّي، وَلَا تَسْمَعُنِي!', task: 'Suggest asking someone for help.', help: 'لِمَاذَا لَا تَطْلُبِينَ مِنْ …؟', model: 'لِمَاذَا لَا تَطْلُبِينَ مِنْ أُمِّكِ أَنْ تَتَكَلَّمَ مَعَكُمَا؟', modelEn: 'Why don’t you ask your mum to talk to both of you?' },
        { unexpected: true, ex: 'هَلْ أَنْتِ قَرِيبَةٌ مِنْ أَخِيكِ؟', task: 'Answer the unexpected question (past + present).', help: 'كُنَّا … أَمَّا الآنَ …', model: 'كُنَّا نَتَشَاجَرُ كَثِيرًا وَنَحْنُ صِغَارٌ، أَمَّا الآنَ فَنَحْنُ صَدِيقَانِ.', modelEn: 'We argued a lot when we were little, but now we are friends.' },
      ],
      girl: 'if the friend is a boy: تَشَاجَرْتُ مَعَ أَخِي · لَا تَحْزَنْ · تَتَكَلَّمَ مَعَهُ · لِمَاذَا لَا تَطْلُبُ',
      notes: 'Develop: imperative / negative imperative (lā taḥzanī), dual verbs (tattafiqā, maʿakumā), advice with an + verb in -a, kunnā + present.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a podcast on families', title: 'Role play D — Families today', ar: 'الأُسْرَةُ اليَوْمَ', you: 'a young guest', them: 'a podcast host',
      tasks: [
        { ex: 'هَلْ تَغَيَّرَتِ الأُسْرَةُ عَنْ أَيَّامِ أَجْدَادِكَ؟', task: 'Compare past and present.', help: 'كَانَتِ الأُسَرُ … أَمَّا اليَوْمَ فَـ…', model: 'كَانَتِ الأُسَرُ تَعِيشُ مَعًا فِي بَيْتٍ وَاحِدٍ كَبِيرٍ، أَمَّا اليَوْمَ فَيَسْكُنُ كُلُّ فَرْدٍ فِي مَدِينَةٍ.', modelEn: 'Families used to live together in one big house; today each member lives in a different town.' },
        { ex: 'مَا دَوْرُ الأَجْدَادِ فِي حَيَاتِكَ؟', task: 'Explain with a personal example.', help: 'جَدَّتِي … فَتَعَلَّمْتُ مِنْهَا …', model: 'جَدَّتِي تَسْكُنُ مَعَنَا، وَتَحْكِي لَنَا قِصَصًا كُلَّ لَيْلَةٍ، فَتَعَلَّمْتُ مِنْهَا الصَّبْرَ وَالعَرَبِيَّةَ.', modelEn: 'My grandmother lives with us and tells us stories every night, so I learned patience and Arabic from her.' },
        { ex: 'هَلِ الأَصْدِقَاءُ أَهَمُّ مِنَ العَائِلَةِ لِلْمُرَاهِقِينَ؟', task: 'Concede and give your view.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ المُرَاهِقِينَ يَقْضُونَ وَقْتًا أَطْوَلَ مَعَ أَصْدِقَائِهِمْ، غَيْرَ أَنَّ العَائِلَةَ تَبْقَى عِنْدَمَا يَذْهَبُ الأَصْدِقَاءُ.', modelEn: 'It is true teenagers spend more time with friends, but family stays when friends leave.' },
        { ex: 'كَيْفَ تُؤَثِّرُ الهَوَاتِفُ فِي العَلَاقَاتِ العَائِلِيَّةِ؟', task: 'Give an effect and an example.', help: 'تَجْعَلُنَا … فَمَثَلًا …', model: 'تَجْعَلُنَا نَجْلِسُ مَعًا دُونَ أَنْ نَتَكَلَّمَ؛ فَمَثَلًا فِي العَشَاءِ يَنْظُرُ كُلُّ وَاحِدٍ إِلَى هَاتِفِهِ.', modelEn: 'They make us sit together without talking — at dinner, for example, everyone looks at their phone.' },
        { unexpected: true, ex: 'لَوْ وَضَعْتَ قَاعِدَةً وَاحِدَةً لِأُسْرَتِكَ، فَمَاذَا تَكُونُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ وَضَعْتُ …، لَـ…', model: 'لَوْ وَضَعْتُ قَاعِدَةً، لَمَنَعْتُ الهَوَاتِفَ عَلَى المَائِدَةِ، لِكَيْ نَتَحَدَّثَ أَكْثَرَ.', modelEn: 'If I made one rule, I would ban phones at the table, so that we talk more.' },
      ],
      girl: 'أَجْدَادِكِ · حَيَاتِكِ · وَضَعْتِ · لِأُسْرَتِكِ',
      notes: 'Stretch: kāna + present vs ammā … fa-, a personal example with fa-, a concession, dūna an, mathalan, law … la- with likay.',
      modelFoot: 'Stretch: past vs present, a personal example, ṣaḥīḥun anna … ghayra anna, dūna an and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أُسْرَتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'صِفْ أُسْرَتَكَ.', en: 'Describe your family.', start: 'فِي أُسْرَتِي …', model: 'فِي أُسْرَتِي سِتَّةُ أَشْخَاصٍ، وَأَنَا الابْنُ الأَصْغَرُ.', modelEn: 'There are six people in my family, and I am the youngest son.' },
        { q: 'كَمْ أَخًا وَأُخْتًا عِنْدَكَ؟', en: 'How many brothers and sisters do you have?', start: 'عِنْدِي … وَ…', model: 'عِنْدِي أَخٌ وَاحِدٌ وَأُخْتَانِ.', modelEn: 'I have one brother and two sisters.' },
        { q: 'مَا اسْمُ صَدِيقِكَ المُفَضَّلِ؟', en: 'What is your best friend’s name?', start: 'اسْمُ صَدِيقِي …', model: 'اسْمُ صَدِيقِي المُفَضَّلِ يَاسِرٌ، وَهُوَ فِي صَفِّي.', modelEn: 'My best friend is called Yasir; he is in my class.' },
        { q: 'مَاذَا تَفْعَلُ مَعَ أُسْرَتِكَ فِي نِهَايَةِ الأُسْبُوعِ؟', en: 'What do you do with your family at the weekend?', start: 'نَزُورُ … / نَأْكُلُ …', model: 'نَزُورُ جَدِّي وَجَدَّتِي، وَنَأْكُلُ الغَدَاءَ مَعًا.', modelEn: 'We visit my grandparents and have lunch together.' },
        { q: 'هَلْ تَتَّفِقُ مَعَ إِخْوَتِكَ؟', en: 'Do you get on with your siblings?', start: 'نَعَمْ، أَتَّفِقُ مَعَ … لٰكِنْ …', model: 'نَعَمْ، أَتَّفِقُ مَعَ أُخْتِي، لٰكِنِّي أَتَشَاجَرُ مَعَ أَخِي أَحْيَانًا.', modelEn: 'Yes, I get on with my sister, but I sometimes argue with my brother.' },
      ],
      foot: 'Core: one full sentence for every question. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a number or a name = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'العَائِلَةُ وَالأَصْدِقَاءُ', aim: 'two or three sentences, with a reason or a past detail',
      qs: [
        { q: 'صِفْ صَدِيقَكَ المُفَضَّلَ.', en: 'Describe your best friend.', start: 'صَدِيقِي … هُوَ … وَنَحْنُ …', model: 'صَدِيقِي يَاسِرٌ طَوِيلٌ وَمَرِحٌ، وَنَحْنُ أَصْدِقَاءُ مُنْذُ المَدْرَسَةِ الابْتِدَائِيَّةِ.', modelEn: 'My friend Yasir is tall and funny, and we have been friends since primary school.' },
        { q: 'كَيْفَ تَعَرَّفْتَ إِلَى صَدِيقِكَ؟', en: 'How did you meet your friend?', start: 'تَعَرَّفْتُ إِلَيْهِ عِنْدَمَا …', model: 'تَعَرَّفْتُ إِلَيْهِ عِنْدَمَا جَلَسْنَا مَعًا فِي الحَافِلَةِ فِي رِحْلَةٍ مَدْرَسِيَّةٍ.', modelEn: 'I met him when we sat together on the bus on a school trip.' },
        { q: 'مَنْ تُحِبُّ أَكْثَرَ فِي عَائِلَتِكَ الكَبِيرَةِ؟ لِمَاذَا؟', en: 'Who do you like most in your extended family?', start: 'أُحِبُّ … لِأَنَّهُ / لِأَنَّهَا …', model: 'أُحِبُّ خَالِي كَثِيرًا، لِأَنَّهُ مَرِحٌ وَيَأْخُذُنَا إِلَى مُبَارَيَاتِ كُرَةِ القَدَمِ.', modelEn: 'I love my uncle a lot, because he is fun and takes us to football matches.' },
        { q: 'مَا صِفَاتُ الصَّدِيقِ الجَيِّدِ؟', en: 'What makes a good friend?', start: 'الصَّدِيقُ الجَيِّدُ … وَلَا …', model: 'الصَّدِيقُ الجَيِّدُ يَسْمَعُكَ وَيُسَاعِدُكَ، وَلَا يَتَكَلَّمُ عَنْكَ أَمَامَ الآخَرِينَ.', modelEn: 'A good friend listens and helps you, and doesn’t talk about you behind your back.' },
        { q: 'كَيْفَ سَتَحْتَفِلُ أُسْرَتُكَ بِالعِيدِ القَادِمِ؟', en: 'How will your family celebrate the next Eid?', start: 'سَنَزُورُ … وَسَـ…', model: 'سَنَزُورُ كُلَّ الأَقَارِبِ، وَسَنَأْكُلُ الحَلَوِيَّاتِ، وَسَأَلْبَسُ مَلَابِسَ جَدِيدَةً.', modelEn: 'We will visit all our relatives, eat sweets, and I will wear new clothes.' },
      ],
      foot: 'Develop: two or three sentences — description, a reason, a past sentence and a future plan.',
      modelFoot: 'Description + reason + a past detail = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'العَلَاقَاتُ وَالمُجْتَمَعُ', aim: 'a developed answer: opinion, comparison, concession and a conditional',
      qs: [
        { q: 'هَلِ الصَّدَاقَةُ عَلَى الإِنْتَرْنِتِ صَدَاقَةٌ حَقِيقِيَّةٌ؟', en: 'Is online friendship real friendship?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّنَا نَتَعَرَّفُ إِلَى أَشْخَاصٍ رَائِعِينَ عَلَى الإِنْتَرْنِتِ، غَيْرَ أَنَّ الصَّدِيقَ الحَقِيقِيَّ هُوَ الَّذِي يَقِفُ بِجَانِبِكَ فِي الصُّعُوبَاتِ.', modelEn: 'It is true we meet great people online, but a true friend is the one who stands by you in hard times.' },
        { q: 'لِمَاذَا تَتَغَيَّرُ الصَّدَاقَاتُ مَعَ الوَقْتِ؟', en: 'Why do friendships change over time?', start: 'لِأَنَّنَا … وَلِأَنَّ …', model: 'لِأَنَّنَا نَكْبُرُ وَتَتَغَيَّرُ اهْتِمَامَاتُنَا، وَلِأَنَّ بَعْضَ الأَصْدِقَاءِ يَنْتَقِلُونَ إِلَى مُدُنٍ أُخْرَى.', modelEn: 'Because we grow up and our interests change, and because some friends move to other towns.' },
        { q: 'هَلْ يَجِبُ أَنْ يَسْكُنَ الأَجْدَادُ مَعَ أَوْلَادِهِمْ؟', en: 'Should grandparents live with their children?', start: 'أَعْتَقِدُ أَنَّ … لِأَنَّ …', model: 'أَعْتَقِدُ أَنَّ ذٰلِكَ أَفْضَلُ، لِأَنَّ الأَجْدَادَ يُعْطُونَ الأَحْفَادَ الحِكْمَةَ، وَالأَحْفَادُ يُعْطُونَهُمُ الفَرَحَ.', modelEn: 'I think it is better, because grandparents give grandchildren wisdom, and grandchildren give them joy.' },
        { q: 'صِفْ مَوْقِفًا سَاعَدَكَ فِيهِ أَحَدُ أَفْرَادِ أُسْرَتِكَ.', en: 'Describe a time a family member helped you.', start: 'عِنْدَمَا … سَاعَدَنِي … فَـ…', model: 'عِنْدَمَا رَسَبْتُ فِي امْتِحَانِ الرِّيَاضِيَّاتِ، دَرَسَ مَعِي أَخِي الأَكْبَرُ كُلَّ لَيْلَةٍ، فَنَجَحْتُ فِي المَرَّةِ التَّالِيَةِ.', modelEn: 'When I failed my maths exam, my older brother studied with me every night, so I passed the next time.' },
        { q: 'لَوْ كَانَ عِنْدَكَ أَخٌ تَوْأَمٌ، كَيْفَ تَكُونُ حَيَاتُكَ؟', en: 'If you had a twin brother, what would your life be like?', start: 'لَوْ كَانَ عِنْدِي …، لَـ…', model: 'لَوْ كَانَ عِنْدِي أَخٌ تَوْأَمٌ، لَمَا شَعَرْتُ بِالوَحْدَةِ أَبَدًا، وَلَتَشَاجَرْنَا عَلَى كُلِّ شَيْءٍ!', modelEn: 'If I had a twin brother, I would never feel lonely — and we would argue about everything!' },
      ],
      foot: 'Stretch: a concession, a relative clause, two reasons, a past story with fa- and law … la- (lamā = would not).',
      modelFoot: 'Stretch: ṣaḥīḥun anna … ghayra anna, alladhī yaqifu, two reasons, a past story, law … lamā — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I named my family with my (abī, ummī, akhī).' },
    { route: 'core', text: 'I gave numbers and ages correctly.' },
    { route: 'develop', text: 'I used a dual (ukhtāni) or an iḍāfa (ibnu ʿammī).' },
    { route: 'develop', text: 'I described a friend and said how we met (past).' },
    { route: 'stretch', text: 'I used a concession, ammā … fa- or law … la-.' },
  ],
};
speak.RP[0].tasks[3].help = 'نَعَمْ، جَدِّي وَجَدَّتِي يَسْكُنَانِ فِي …';
speak.RP[3].tasks[0].help = 'كَانَتِ الأُسَرُ … أَمَّا اليَوْمَ فَيَسْكُنُ …';
speak.RP[3].tasks[4].help = 'لَوْ وَضَعْتُ قَاعِدَةً، لَمَنَعْتُ …';
speak.RP[0].tasks[4].help = 'أَخِي الأَكْبَرُ / أُمِّي … لِأَنَّ …';
speak.CONV[1].qs[4].start = 'سَنَزُورُ … وَسَنَأْكُلُ …';
speak.CONV[2].qs[3].start = 'عِنْدَمَا … سَاعَدَنِي … فَنَجَحْتُ …';
speak.CONV[2].qs[4].start = 'لَوْ كَانَ عِنْدِي …، لَمَا شَعَرْتُ …';

const Q2_CORE = `مَرْحَبًا يَا خَالِدُ،
كَيْفَ حَالُكَ؟ سَأُخْبِرُكَ عَنْ أُسْرَتِي. فِي أُسْرَتِي خَمْسَةُ أَشْخَاصٍ: أَبِي وَأُمِّي وَأُخْتَايَ وَأَنَا. أَبِي مُهَنْدِسٌ، وَأُمِّي مُعَلِّمَةٌ. أُخْتِي الكُبْرَى عُمْرُهَا ثَمَانِيَ عَشْرَةَ سَنَةً، وَهِيَ طَالِبَةٌ فِي الجَامِعَةِ. صَدِيقِي المُفَضَّلُ اسْمُهُ سَامِرٌ، وَهُوَ مَرِحٌ وَذَكِيٌّ. أَمْسِ لَعِبْنَا كُرَةَ القَدَمِ مَعًا فِي الحَدِيقَةِ. فِي العُطْلَةِ القَادِمَةِ سَنَزُورُ جَدِّي وَجَدَّتِي فِي مِصْرَ. وَأَنْتَ، كَمْ أَخًا عِنْدَكَ؟
مَعَ السَّلَامَةِ،
عُمَرُ`;
const Q2_FULL = `عَزِيزِي خَالِدٌ،
تَحِيَّةً طَيِّبَةً، وَبَعْدُ، فَقَدْ سَأَلْتَنِي فِي رِسَالَتِكَ عَنْ أُسْرَتِي وَأَصْدِقَائِي. أُسْرَتِي صَغِيرَةٌ لٰكِنَّهَا قَرِيبَةٌ جِدًّا مِنْ بَعْضِهَا: أَبِي مُهَنْدِسٌ يَعْمَلُ سَاعَاتٍ طَوِيلَةً، وَأُمِّي مُعَلِّمَةٌ صَبُورَةٌ، وَعِنْدِي أُخْتَانِ؛ الكُبْرَى تَدْرُسُ الطِّبَّ، وَالصُّغْرَى فِي المَدْرَسَةِ الابْتِدَائِيَّةِ. أَتَّفِقُ مَعَهُمَا عَادَةً، غَيْرَ أَنَّنَا نَتَشَاجَرُ أَحْيَانًا عَلَى التِّلْفَازِ! أَمَّا صَدِيقِي المُفَضَّلُ سَامِرٌ فَأَعْرِفُهُ مُنْذُ عَشْرِ سَنَوَاتٍ؛ أَمْسِ سَاعَدَنِي فِي وَاجِبِ الرِّيَاضِيَّاتِ، ثُمَّ لَعِبْنَا مُبَارَاةً فِي الحَدِيقَةِ. فِي العُطْلَةِ القَادِمَةِ سَنُسَافِرُ إِلَى مِصْرَ لِنَزُورَ جَدِّي وَجَدَّتِي. وَأَنْتَ، هَلْ عِنْدَكَ إِخْوَةٌ؟ أَرْسِلْ لِي صُورَةَ أُسْرَتِكَ!
مَعَ تَحِيَّاتِي،
عُمَرُ`;
const Q3A_CORE = `أُحِبُّ أُسْرَتِي كَثِيرًا. فِي بَيْتِنَا سِتَّةُ أَشْخَاصٍ: أَبِي وَأُمِّي وَجَدَّتِي وَأَخِي وَأُخْتِي وَأَنَا. أَبِي يَعْمَلُ فِي مَطْعَمٍ، وَأُمِّي تَعْمَلُ فِي مُسْتَشْفًى. جَدَّتِي تَسْكُنُ مَعَنَا، وَهِيَ تَطْبُخُ أَكْلًا لَذِيذًا، وَتَحْكِي لَنَا قِصَصًا جَمِيلَةً.
أَخِي الأَكْبَرُ عُمْرُهُ عِشْرُونَ سَنَةً، وَهُوَ يَدْرُسُ فِي الجَامِعَةِ. أُخْتِي الصُّغْرَى عُمْرُهَا ثَمَانِي سَنَوَاتٍ، وَهِيَ مُضْحِكَةٌ جِدًّا. أَتَّفِقُ مَعَ أُخْتِي، لٰكِنِّي أَتَشَاجَرُ مَعَ أَخِي أَحْيَانًا، لِأَنَّهُ يَأْخُذُ هَاتِفِي.
صَدِيقَتِي المُفَضَّلَةُ اسْمُهَا لَيْلَى. تَعَرَّفْتُ إِلَيْهَا فِي المَدْرَسَةِ قَبْلَ خَمْسِ سَنَوَاتٍ. فِي الأُسْبُوعِ المَاضِي ذَهَبْنَا إِلَى السِّينَمَا مَعًا، وَأَكَلْنَا الفُشَارَ، وَضَحِكْنَا كَثِيرًا. هِيَ ذَكِيَّةٌ وَلَطِيفَةٌ، وَتُسَاعِدُنِي فِي الوَاجِبَاتِ.
فِي رَأْيِي، الأُسْرَةُ وَالأَصْدِقَاءُ أَهَمُّ شَيْءٍ فِي الحَيَاةِ، لِأَنَّهُمْ يُسَاعِدُونَنَا دَائِمًا. فِي الصَّيْفِ القَادِمِ سَنَزُورُ خَالَتِي فِي دُبَيٍّ، وَسَأَلْعَبُ مَعَ بَنَاتِ خَالَتِي.`;
const Q3A_FULL = `يَقُولُونَ إِنَّ الإِنْسَانَ لَا يَخْتَارُ عَائِلَتَهُ، لٰكِنِّي لَوْ خُيِّرْتُ، لَاخْتَرْتُ عَائِلَتِي نَفْسَهَا. نَحْنُ سِتَّةُ أَشْخَاصٍ نَسْكُنُ فِي بَيْتٍ وَاحِدٍ، وَمَعَنَا جَدَّتِي الَّتِي تَحْكِي لَنَا كُلَّ لَيْلَةٍ قِصَصًا عَنْ طُفُولَتِهَا فِي القُدْسِ. أَبِي هَادِئٌ وَحَكِيمٌ، وَأُمِّي نَشِيطَةٌ لَا تَتْعَبُ أَبَدًا.
عَلَاقَتِي بِإِخْوَتِي لَيْسَتْ مِثَالِيَّةً؛ فَأَنَا أَتَّفِقُ مَعَ أُخْتِي الصُّغْرَى تَمَامًا، أَمَّا أَخِي الأَكْبَرُ فَكُنَّا نَتَشَاجَرُ يَوْمِيًّا وَنَحْنُ صِغَارٌ، لِأَنَّهُ كَانَ يَعْتَبِرُ نَفْسَهُ المَسْؤُولَ عَنِّي، فَيَمْنَعُنِي مِنَ اللَّعِبِ فِي الشَّارِعِ وَيَنْتَقِدُ كُلَّ مَا أَفْعَلُهُ.
لٰكِنَّ كُلَّ شَيْءٍ تَغَيَّرَ فِي الشِّتَاءِ المَاضِي، عِنْدَمَا كُسِرَتْ رِجْلِي فِي مُبَارَاةٍ؛ فَقَدْ كَانَ أَخِي يَحْمِلُ حَقِيبَتِي، وَيُوصِلُنِي إِلَى المَدْرَسَةِ كُلَّ صَبَاحٍ دُونَ أَنْ يَشْكُوَ. يَوْمَهَا فَهِمْتُ أَنَّ قَسْوَتَهُ كَانَتْ نَوْعًا مِنَ الحُبِّ.
صَحِيحٌ أَنَّ الأَصْدِقَاءَ يَمْلَؤُونَ أَيَّامَنَا بِالمَرَحِ، غَيْرَ أَنَّ العَائِلَةَ هِيَ الَّتِي تَبْقَى عِنْدَمَا يَصْعُبُ كُلُّ شَيْءٍ. وَفِي المُسْتَقْبَلِ، عِنْدَمَا يُسَافِرُ أَخِي لِلدِّرَاسَةِ، سَأَتَّصِلُ بِهِ كُلَّ أُسْبُوعٍ، وَسَأَحْكِي لَهُ كُلَّ أَخْبَارِ البَيْتِ.`;
const Q3B_FULL = `تَغَيَّرَتِ الصَّدَاقَةُ كَثِيرًا فِي عَصْرِ الإِنْتَرْنِتِ؛ فَأَصْبَحَ عِنْدَ كَثِيرٍ مِنَ الشَّبَابِ مِئَاتُ «الأَصْدِقَاءِ» عَلَى وَسَائِلِ التَّوَاصُلِ، لٰكِنَّهُمْ لَا يَعْرِفُونَ إِلَّا القَلِيلَ مِنْهُمْ فِي الحَيَاةِ الحَقِيقِيَّةِ، وَقَدْ يَشْعُرُونَ بِالوَحْدَةِ رَغْمَ هٰذَا العَدَدِ الكَبِيرِ.
فِي المَاضِي كَانَ الأَصْدِقَاءُ يَلْتَقُونَ فِي الحَيِّ وَالمَسْجِدِ وَالمَدْرَسَةِ، وَيَعْرِفُ كُلٌّ مِنْهُمْ أُسْرَةَ الآخَرِ، أَمَّا اليَوْمَ فَيُمْكِنُ أَنْ تَتَحَدَّثَ مَعَ صَدِيقٍ فِي اليَابَانِ كُلَّ يَوْمٍ دُونَ أَنْ تَرَاهُ أَبَدًا، وَأَنْ تَعْرِفَ عَنْ حَيَاتِهِ أَكْثَرَ مِمَّا تَعْرِفُ عَنْ جِيرَانِكَ.
لِي تَجْرِبَةٌ مَعَ ذٰلِكَ؛ فَقَدْ تَعَرَّفْتُ قَبْلَ سَنَتَيْنِ إِلَى صَدِيقَةٍ مِنْ تُونِسَ فِي مَجْمُوعَةٍ لِتَعَلُّمِ اللُّغَاتِ، فَكُنَّا نَتَبَادَلُ الرَّسَائِلَ يَوْمِيًّا، وَعِنْدَمَا زُرْتُ تُونِسَ فِي الصَّيْفِ المَاضِي، اسْتَقْبَلَتْنِي أُسْرَتُهَا كَأَنِّي ابْنَتُهُمْ، فَأَصْبَحَتِ الصَّدَاقَةُ الافْتِرَاضِيَّةُ صَدَاقَةً حَقِيقِيَّةً.
صَحِيحٌ أَنَّ الإِنْتَرْنِتَ يَجْمَعُ النَّاسَ مِنْ كُلِّ العَالَمِ، غَيْرَ أَنَّهُ قَدْ يَجْعَلُنَا نَنْسَى الأَصْدِقَاءَ القَرِيبِينَ مِنَّا. وَلَوْ خَصَّصْنَا وَقْتًا أَسْبُوعِيًّا لِلِقَاءِ أَصْدِقَائِنَا وَجْهًا لِوَجْهٍ، لَأَصْبَحَتْ عَلَاقَاتُنَا أَعْمَقَ وَأَصْدَقَ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a family-tree form, write an email about your family and best friend, and write an extended piece about your family or about friendship today.',
  lift: [
    { ar: 'عِنْدِي أُخْتَانِ: الكُبْرَى … وَالصُّغْرَى …', en: 'I have two sisters: the elder … and the younger …' },
    { ar: 'أَتَّفِقُ مَعَهُمَا عَادَةً، غَيْرَ أَنَّنَا …', en: 'I usually get on with them, but we …' },
    { ar: 'أَعْرِفُهُ مُنْذُ عَشْرِ سَنَوَاتٍ', en: 'I have known him for ten years' },
  ],
  checkTip: 'Check: possessive endings (abī, ukhtī, ṣadīqatī); the dual (ukhtāni, maʿahumā); iḍāfa without al- on the first word (ibnu ʿammī); kunnā + present for “we used to”.',
  FORM: {
    title: 'School family-information form', ar: 'اسْتِمَارَةُ مَعْلُومَاتِ الأُسْرَةِ',
    fields: [
      { core: true, ar: 'اسْمُ الطَّالِبِ', en: 'Student’s name', model: 'عُمَرُ أَحْمَدُ', modelEn: 'Omar Ahmed' },
      { core: true, ar: 'اسْمُ الأَبِ وَعَمَلُهُ', en: 'Father’s name and job', model: 'أَحْمَدُ، مُهَنْدِسٌ', modelEn: 'Ahmed, engineer' },
      { core: true, ar: 'اسْمُ الأُمِّ وَعَمَلُهَا', en: 'Mother’s name and job', model: 'هُدَى، مُعَلِّمَةٌ', modelEn: 'Huda, teacher' },
      { core: true, ar: 'عَدَدُ الإِخْوَةِ وَالأَخَوَاتِ', en: 'Number of brothers and sisters', model: 'أُخْتَانِ', modelEn: 'two sisters' },
      { core: true, ar: 'شَخْصٌ آخَرُ يَسْكُنُ مَعَكَ', en: 'Another person who lives with you', model: 'جَدَّتِي', modelEn: 'my grandmother' },
      { core: true, ar: 'رَقْمُ هَاتِفٍ لِلطَّوَارِئِ', en: 'Emergency phone number', model: '٠٧٨٠٠٩٨٧٦٥٤', modelEn: '07800987654' },
      { ar: 'اسْمُ صَدِيقِكَ المُفَضَّلِ فِي الصَّفِّ', en: 'Best friend in your class', model: 'سَامِرٌ يُوسُفُ', modelEn: 'Samer Yusuf' },
      { ar: 'جُمْلَةٌ: مَنْ يُسَاعِدُكَ فِي الوَاجِبَاتِ؟', en: 'ONE sentence: who helps you with homework', model: 'تُسَاعِدُنِي أُخْتِي الكُبْرَى لِأَنَّهَا تَدْرُسُ فِي الجَامِعَةِ.', modelEn: 'My elder sister helps me because she studies at university.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with a reason.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 4 is a good place for the dual (ukhtāni · akhawāni).',
  },
  Q2: {
    short: 'an email about your family', title: 'Question 2: my family and my best friend', ar: 'رِسَالَةٌ عَنْ أُسْرَتِي',
    task: 'Your Arabic-speaking friend has asked about your family. Write an email in Arabic of about 80–90 words. You must include: • the people in your family and their jobs • your brothers and sisters, and how you get on • your best friend, and what you did together recently • a family plan for the next holiday.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Possessives (abī, ukhtī) and a dual.', 'A past AND a future sentence.', 'About 80–90 words.'],
    phrases: [['فِي أُسْرَتِي … أَشْخَاصٍ', 'there are … people in my family'], ['أَتَّفِقُ مَعَ … لٰكِنِّي أَتَشَاجَرُ مَعَ …', 'I get on with … but I argue with …'], ['صَدِيقِي المُفَضَّلُ اسْمُهُ …', 'my best friend is called …'], ['فِي العُطْلَةِ القَادِمَةِ سَنَزُورُ …', 'next holiday we will visit …']],
    rubric: [
      ['task', 'سَأَلَكَ صَدِيقُكَ عَنْ أُسْرَتِكَ. اكْتُبْ لَهُ رِسَالَةً (٨٠–٩٠ كَلِمَةً).', 'Your friend asked about your family: write to him (80–90 words).'],
      ['1', 'مَنْ فِي أُسْرَتِكَ؟ وَمَاذَا يَعْمَلُونَ؟', 'Who is in your family; their jobs'],
      ['2', 'صِفْ إِخْوَتَكَ. هَلْ تَتَّفِقُ مَعَهُمْ؟', 'Your siblings; how you get on'],
      ['3', 'مَنْ صَدِيقُكَ المُفَضَّلُ؟ وَمَاذَا فَعَلْتُمَا مَعًا مُؤَخَّرًا؟', 'Your best friend; something you did together'],
      ['4', 'مَا خُطَّةُ أُسْرَتِكَ لِلْعُطْلَةِ القَادِمَةِ؟', 'Your family’s plan for the next holiday'],
    ],
    qwords: 'مَنْ (who) · مَاذَا (what) · صِفْ (describe) · هَلْ (yes/no) · مَا (what) — bullet 3 uses the DUAL past: فَعَلْتُمَا (you two did)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'فِي أُسْرَتِي ______ أَشْخَاصٍ. أَبِي ______ ، وَأُمِّي ______ .', 'There are … people. My dad is …, my mum is …'],
      ['2', 'عِنْدِي ______ . أَتَّفِقُ مَعَ ______ ، لٰكِنِّي ______ .', 'I have … I get on with …, but I …'],
      ['3', 'صَدِيقِي المُفَضَّلُ اسْمُهُ ______ . أَمْسِ ______ مَعًا.', 'My best friend is called … Yesterday we … together.'],
      ['4', 'فِي العُطْلَةِ القَادِمَةِ سَنَزُورُ ______ .', 'Next holiday we will visit …'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Khalid, how are you? I will tell you about my family. There are five people in my family: my dad, my mum, my two sisters and me. My dad is an engineer and my mum is a teacher. My elder sister is eighteen; she is a university student. My best friend is called Samer; he is funny and clever. Yesterday we played football together in the park. Next holiday we will visit my grandparents in Egypt. And you — how many brothers do you have? Goodbye, Omar.”',
      find: ['أُخْتَايَ', 'أُخْتِي الكُبْرَى', 'لَعِبْنَا … مَعًا', 'سَنَزُورُ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Khalid, greetings. In your message you asked about my family and friends. My family is small but very close: my dad is an engineer who works long hours, my mum is a patient teacher, and I have two sisters — the elder studies medicine and the younger is at primary school. I usually get on with them both, but we sometimes argue over the TV! As for my best friend Samer, I have known him for ten years; yesterday he helped me with my maths homework, then we played a match in the park. Next holiday we will travel to Egypt to visit my grandparents. And you — do you have brothers and sisters? Send me a photo of your family! Best wishes, Omar.”',
      find: ['عِنْدِي أُخْتَانِ', 'أَتَّفِقُ مَعَهُمَا', 'أَمَّا صَدِيقِي … فَأَعْرِفُهُ', 'لِنَزُورَ'],
    },
  },
  Q3: {
    a: { title: 'عَائِلَتِي وَأَنَا', en: 'My family and me', bullets: 'أَفْرَادُ أُسْرَتِكَ · عَلَاقَتُكَ بِهِمْ · مَوْقِفٌ لَا تَنْسَاهُ مَعَ أَحَدِهِمْ · مَاذَا تَعَلَّمْتَ؟ وَمَا خُطَطُكُمْ؟', bulletsEn: 'Your family members · your relationship with them · a moment you won’t forget with one of them · what you learned; your plans' },
    b: { title: 'الصَّدَاقَةُ فِي عَصْرِ الإِنْتَرْنِتِ', en: 'Friendship in the internet age', bullets: 'كَيْفَ تَغَيَّرَتِ الصَّدَاقَةُ؟ · المَاضِي وَالحَاضِرُ · تَجْرِبَةٌ شَخْصِيَّةٌ · رَأْيُكَ وَاقْتِرَاحُكَ', bulletsEn: 'How friendship has changed · past and present · a personal experience · your opinion and suggestion' },
    plan: [
      'Present — who is in your family, ages, jobs: possessives, numbers, the dual.',
      'Relationships — attafiqu maʿa …, atashājaru maʿa …; Stretch: ammā … fa-kunnā …',
      'Past — a moment you won’t forget: ʿindamā …, fa- …',
      'Lesson + future — fī raʾyī …, sa- …; Stretch: ṣaḥīḥun anna … ghayra anna, law … la-.',
    ],
    frames: [
      { ar: 'عِنْدِي أَخٌ وَأُخْتَانِ.', en: 'present: I have one brother and two sisters.' },
      { ar: 'كُنَّا نَتَشَاجَرُ كَثِيرًا وَنَحْنُ صِغَارٌ.', en: 'past: we used to argue a lot when we were little.' },
      { ar: 'سَأَتَّصِلُ بِهِ كُلَّ أُسْبُوعٍ.', en: 'future: I will call him every week.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Six at home: Dad (restaurant), Mum (hospital), Grandma (cooks delicious food and tells lovely stories), brother, sister and me → older brother 20 at university; little sister 8, very funny; I get on with my sister but argue with my brother because he takes my phone → best friend Layla, met at school five years ago; last week cinema, popcorn and lots of laughing; she is clever and kind and helps with homework → family and friends matter most because they always help; next summer we’ll visit my aunt in Dubai and I’ll play with my cousins.', find: ['سِتَّةُ أَشْخَاصٍ', 'أَخِي الأَكْبَرُ', 'تَعَرَّفْتُ إِلَيْهَا', 'سَنَزُورُ خَالَتِي'], notes: 'Core model (a girl writing): possessives, ages, superlatives (al-akbar, aṣ-ṣughrā), a past paragraph, an opinion and a future plan.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'They say you can’t choose your family, but if I could, I would choose mine again: six of us under one roof, with Grandma telling stories of her childhood in Jerusalem; Dad calm and wise, Mum tireless → not perfect: I get on with my little sister completely; as for my older brother, we argued daily as children because he saw himself as responsible for me — stopping me playing in the street and criticising everything I did → everything changed last winter when I broke my leg: he carried my bag and took me to school every morning without complaining; I understood his harshness was a kind of love → it is true friends fill our days with fun, but family stays when things get hard; when my brother leaves to study, I will call him every week and tell him all the news from home.', find: ['لَوْ خُيِّرْتُ، لَاخْتَرْتُ', 'أَمَّا أَخِي … فَكُنَّا نَتَشَاجَرُ', 'دُونَ أَنْ يَشْكُوَ', 'هِيَ الَّتِي تَبْقَى'], notes: 'Full-mark model: law … la- (passive khuyyirtu), a relative clause, ammā … fa-kunnā, wa-naḥnu ṣighār, a past narrative, dūna an, a concession and a future.' },
      { which: 'ب', level: 'Full', subtitle: 'friendship online', text: Q3B_FULL, en: 'Friendship has changed in the internet age: hundreds of online “friends”, few known in real life, and loneliness despite the numbers → in the past friends met in the neighbourhood, mosque and school and knew each other’s families; as for today, you can talk daily with a friend in Japan without ever meeting, knowing more about their life than your neighbours’ → my experience: two years ago I met a Tunisian girl in a language group; we messaged daily, and when I visited Tunisia last summer her family welcomed me like a daughter — the virtual friendship became real → it is true the internet brings people together, but it can make us forget friends nearby; “if we set aside weekly time to meet friends face to face, our relationships would be deeper and truer”.', find: ['لَا يَعْرِفُونَ إِلَّا القَلِيلَ', 'أَمَّا اليَوْمَ فَيُمْكِنُ', 'كَأَنِّي ابْنَتُهُمْ', 'لَوْ خَصَّصْنَا … لَأَصْبَحَتْ'], notes: 'Full-mark model for the Stretch title: lā … illā, kāna + present vs ammā … fa-, dūna an, a personal story with kunnā + present, kaʾanna, a concession and a conditional.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic; family words with the right ending.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: a dual (ukhtāni, maʿahumā) and an iḍāfa.' },
    { route: 'develop', text: 'Q3: four paragraphs in three time frames.' },
    { route: 'stretch', text: 'Q3: ammā … fa-, a concession or law … la-.' },
  ],
};

module.exports = { speak, write };
