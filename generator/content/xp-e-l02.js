'use strict';
/* Exam-practice data · TE-L02 · Multilingual Life and Communication (present tense; verbal nouns: taʿallum, tawāṣul, tarjama; relative clauses allatī / alladhī / man). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'E', n: 2, short: 'Multilingual Life and Communication', arShort: 'الحَيَاةُ بِلُغَاتٍ مُتَعَدِّدَةٍ', fileTitle: 'Multilingual_Life_and_Communication', title: 'Multilingual Life and Communication', ar: 'الحَيَاةُ بِلُغَاتٍ مُتَعَدِّدَةٍ وَالتَّوَاصُلُ', icon: 'FaLanguage', grammar: 'present tense for habits (atawāṣalu, atarjimu); verbal nouns as subjects and objects (taʿallumu al-lughāti mumtiʿ; uḥibbu at-tarjama); relative clauses (al-lughatu allatī …, aṣ-ṣadīqu alladhī …, man yatakallamu …)' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: describe how you learn and use languages every day, how you communicate with family and friends abroad, and how you help people who do not share your language — using the present tense, verbal nouns (تَعَلُّمٌ · تَوَاصُلٌ · تَرْجَمَةٌ) and relative clauses (الَّذِي · الَّتِي · مَنْ).',
  words: [
    w(1, 'تَعَلُّمُ اللُّغَاتِ', 'learning languages (v.n.)', [['I learn', 'أَتَعَلَّمُ'], ['learner (f.)', 'مُتَعَلِّمَةٌ']], { tag: 'verbal noun' }),
    w(2, 'التَّوَاصُلُ', 'communication', [['I keep in touch', 'أَتَوَاصَلُ مَعَ'], ['social media', 'وَسَائِلُ التَّوَاصُلِ']], { tag: 'verbal noun' }),
    w(3, 'التَّرْجَمَةُ', 'translation', [['I translate', 'أُتَرْجِمُ'], ['translator (m. · f.)', 'مُتَرْجِمٌ · مُتَرْجِمَةٌ']], { tag: 'verbal noun' }),
    w(4, 'ثُنَائِيُّ اللُّغَةِ', 'bilingual (m.)', [['f.', 'ثُنَائِيَّةُ اللُّغَةِ'], ['multilingual', 'مُتَعَدِّدُ اللُّغَاتِ']], { tag: 'adjective' }),
    w(5, 'لَهْجَةٌ', 'a dialect', [['dialects', 'لَهَجَاتٌ'], ['standard Arabic', 'الفُصْحَى']], { tag: 'noun' }),
    w(6, 'مُكَالَمَةُ فِيدْيُو', 'a video call', [['I call', 'أَتَّصِلُ بِجَدِّي'], ['a message', 'رِسَالَةٌ']], { tag: 'noun' }),
    w(7, 'تَطْبِيقٌ', 'an app', [['apps', 'تَطْبِيقَاتٌ'], ['a dictionary', 'قَامُوسٌ']], { tag: 'noun' }),
    w(8, 'أَفْهَمُ · لَا أَفْهَمُ', 'I understand · I don’t', [['understanding', 'الفَهْمُ'], ['a misunderstanding', 'سُوءُ فَهْمٍ']], { tag: 'verb' }),
    w(9, 'أَخْلِطُ بَيْنَ …', 'I mix up …', [['I switch to', 'أَنْتَقِلُ إِلَى'], ['mistakes', 'أَخْطَاءٌ']], { tag: 'verb' }),
    w(10, 'الَّذِي · الَّتِي', 'who / which (m. · f.)', [['pl. (people)', 'الَّذِينَ'], ['whoever', 'مَنْ']], { tag: 'relative' }),
    w(11, 'النُّطْقُ', 'pronunciation', [['vocabulary', 'المُفْرَدَاتُ'], ['grammar', 'القَوَاعِدُ']], { tag: 'noun' }),
    w(12, 'بِطَلَاقَةٍ', 'fluently', [['slowly', 'بِبُطْءٍ'], ['with difficulty', 'بِصُعُوبَةٍ']], { tag: 'adverb' }),
  ],
  words1: { eyebrow: 'Language bank · verbal nouns', title: 'Verb → verbal noun', ar: 'الفِعْلُ وَالمَصْدَرُ', notes: 'LANGUAGE BANK (2 min) — the maṣdar lets you talk ABOUT an activity: أَتَعَلَّمُ → تَعَلُّمٌ · أَتَوَاصَلُ → تَوَاصُلٌ · أُتَرْجِمُ → تَرْجَمَةٌ. Use it as a subject (تَعَلُّمُ اللُّغَاتِ مُفِيدٌ) or after أُحِبُّ (أُحِبُّ التَّرْجَمَةَ).' },
  words2: { eyebrow: 'Language bank · relative clauses and communication', title: 'The language that … · the friend who …', ar: 'الاسْمُ المَوْصُولُ', notes: 'LANGUAGE BANK (2 min) — الَّذِي for m. nouns, الَّتِي for f. nouns AND non-human plurals (اللُّغَاتُ الَّتِي أَتَكَلَّمُهَا), الَّذِينَ for people (pl.). Remember the returning pronoun: الصَّدِيقُ الَّذِي أُرَاسِلُهُ.' },
  checkCore: 'said which languages they use, with whom, in the present tense',
  checkDevelop: 'used a verbal noun and a relative clause with the returning pronoun',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a language-school open day', title: 'Role play A — At the language school', ar: 'فِي مَدْرَسَةِ اللُّغَاتِ', you: 'a student', them: 'a teacher at the language school',
      tasks: [
        { core: true, ex: 'أَهْلًا! أَيَّ لُغَةٍ تَتَعَلَّمُ؟', task: 'Say which language you learn.', help: 'أَتَعَلَّمُ …', model: 'أَتَعَلَّمُ اللُّغَةَ العَرَبِيَّةَ.', modelEn: 'I’m learning Arabic.' },
        { core: true, ex: 'مُنْذُ مَتَى؟', task: 'Say for how long.', help: 'مُنْذُ … سَنَوَاتٍ', model: 'أَتَعَلَّمُهَا مُنْذُ ثَلَاثِ سَنَوَاتٍ.', modelEn: 'I’ve been learning it for three years.' },
        { core: true, ex: 'وَلِمَاذَا تَتَعَلَّمُهَا؟', task: 'Give one reason.', help: 'لِأَنَّ …', model: 'لِأَنَّ أُسْرَتِي تَتَكَلَّمُ العَرَبِيَّةَ.', modelEn: 'Because my family speaks Arabic.' },
        { core: true, ex: 'عِنْدَنَا صُفُوفٌ لِلْمُحَادَثَةِ.', task: 'Ask when the classes are.', help: 'مَتَى …؟', model: 'مَتَى الصُّفُوفُ، مِنْ فَضْلِكَ؟', modelEn: 'When are the classes, please?' },
        { core: true, unexpected: true, ex: 'يَوْمَ الأَرْبِعَاءِ. كَيْفَ تَتَدَرَّبُ فِي البَيْتِ؟', task: 'Answer the unexpected question.', help: 'أَسْتَخْدِمُ … / أُشَاهِدُ …', model: 'أَسْتَخْدِمُ تَطْبِيقًا، وَأُشَاهِدُ أَفْلَامًا بِالعَرَبِيَّةِ.', modelEn: 'I use an app and watch films in Arabic.' },
      ],
      girl: 'تَتَعَلَّمِينَ · تَتَعَلَّمِينَهَا · تَتَدَرَّبِينَ',
      notes: 'Core: present tense (ataʿallamu, astakhdimu, ushāhidu), mundhu thalāthi sanawātin, li-anna + subject, matā …?',
    },
    {
      id: 'B', level: 'Core+', setting: 'a railway station', title: 'Role play B — Helping a lost tourist', ar: 'مُسَاعَدَةُ سَائِحٍ', you: 'a bilingual teenager', them: 'an Arabic-speaking tourist who speaks no English',
      tasks: [
        { core: true, ex: 'عَفْوًا، هَلْ تَتَكَلَّمُ العَرَبِيَّةَ؟', task: 'Say yes and offer help.', help: 'نَعَمْ، أَتَكَلَّمُ … كَيْفَ …؟', model: 'نَعَمْ، أَتَكَلَّمُ العَرَبِيَّةَ. كَيْفَ أُسَاعِدُكَ؟', modelEn: 'Yes, I speak Arabic. How can I help you?' },
        { core: true, ex: 'أُرِيدُ القِطَارَ إِلَى لَنْدَنَ، لٰكِنِّي لَا أَفْهَمُ اللَّوْحَةَ.', task: 'Translate the platform and time.', help: 'القِطَارُ الَّذِي … يَنْطَلِقُ مِنْ …', model: 'القِطَارُ الَّذِي يَذْهَبُ إِلَى لَنْدَنَ يَنْطَلِقُ مِنَ الرَّصِيفِ الرَّابِعِ.', modelEn: 'The train that goes to London leaves from platform four.' },
        { ex: 'شُكْرًا! أَيْنَ تَعَلَّمْتَ العَرَبِيَّةَ؟', task: 'Explain briefly.', help: 'أَتَكَلَّمُهَا فِي البَيْتِ، وَأَدْرُسُ … فِي …', model: 'أَتَكَلَّمُهَا فِي البَيْتِ مَعَ أُسْرَتِي، وَأَدْرُسُ الفُصْحَى فِي المَدْرَسَةِ.', modelEn: 'I speak it at home and study standard Arabic at school.' },
        { ex: 'لَهْجَتُكَ مُخْتَلِفَةٌ عَنْ لَهْجَتِي!', task: 'ASK where the tourist is from.', help: 'مِنْ أَيِّ …؟', model: 'صَحِيحٌ! مِنْ أَيِّ بَلَدٍ أَنْتَ؟', modelEn: 'True! Which country are you from?' },
        { unexpected: true, ex: 'مِنَ العِرَاقِ. هَلِ العَرَبِيَّةُ صَعْبَةٌ عَلَيْكَ؟', task: 'Answer the unexpected question (opinion + reason).', help: 'القِرَاءَةُ … أَمَّا الكِتَابَةُ فَـ…', model: 'القِرَاءَةُ سَهْلَةٌ، أَمَّا الكِتَابَةُ فَصَعْبَةٌ قَلِيلًا، لِأَنَّ القَوَاعِدَ كَثِيرَةٌ.', modelEn: 'Reading is easy, but writing is a bit hard, because there is a lot of grammar.' },
      ],
      girl: 'تَتَكَلَّمِينَ · تَعَلَّمْتِ · لَهْجَتُكِ · عَلَيْكِ',
      notes: 'Core+: a relative clause (al-qiṭāru alladhī yadhhabu), the ordinal (ar-raṣīf ar-rābiʿ), fuṣḥā vs lahja, the CANDIDATE asks (min ayyi baladin?), verbal nouns as subjects (al-qirāʾa / al-kitāba) + ammā … fa-.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a school assembly', title: 'Role play C — Language ambassador', ar: 'سَفِيرُ اللُّغَاتِ فِي المَدْرَسَةِ', you: 'the school’s language ambassador', them: 'a Year 7 student interviewing you for the school blog',
      tasks: [
        { ex: 'كَمْ لُغَةً تَسْتَخْدِمُ فِي يَوْمٍ عَادِيٍّ؟', task: 'Describe a multilingual day (present).', help: 'فِي الصَّبَاحِ … وَفِي المَدْرَسَةِ … وَفِي المَسَاءِ …', model: 'فِي الصَّبَاحِ أَتَكَلَّمُ البُنْجَابِيَّةَ مَعَ جَدَّتِي، وَفِي المَدْرَسَةِ الإِنْجْلِيزِيَّةَ، وَفِي المَسَاءِ أَدْرُسُ العَرَبِيَّةَ؛ أَيْ ثَلَاثَ لُغَاتٍ.', modelEn: 'Punjabi with grandma in the morning, English at school, Arabic in the evening — three languages.' },
        { ex: 'مَا الطَّرِيقَةُ الَّتِي تُسَاعِدُكَ أَكْثَرَ؟', task: 'Explain a method with a relative clause.', help: 'الطَّرِيقَةُ الَّتِي … هِيَ …', model: 'الطَّرِيقَةُ الَّتِي تُسَاعِدُنِي أَكْثَرَ هِيَ مُشَاهَدَةُ المُسَلْسَلَاتِ مَعَ التَّرْجَمَةِ، ثُمَّ تَكْرَارُ الجُمَلِ بِصَوْتٍ عَالٍ.', modelEn: 'Watching series with subtitles, then repeating sentences aloud.' },
        { ex: 'كَيْفَ تَتَوَاصَلُ مَعَ أَقَارِبِكَ فِي الخَارِجِ؟', task: 'Describe communication habits.', help: 'نَتَّصِلُ … كُلَّ … وَأُرْسِلُ …', model: 'نَتَّصِلُ بِهِمْ بِمُكَالَمَةِ فِيدْيُو كُلَّ يَوْمِ جُمُعَةٍ، وَأُرْسِلُ رَسَائِلَ صَوْتِيَّةً إِلَى ابْنِ عَمِّي، لِأَنَّهُ لَا يُحِبُّ الكِتَابَةَ.', modelEn: 'A video call every Friday, and voice messages to my cousin, because he doesn’t like writing.' },
        { ex: 'مَا أَصْعَبُ شَيْءٍ؟', task: 'Name a difficulty and your solution.', help: 'أَصْعَبُ شَيْءٍ … لِذٰلِكَ …', model: 'أَصْعَبُ شَيْءٍ أَنَّنِي أَخْلِطُ بَيْنَ اللُّغَاتِ أَحْيَانًا؛ لِذٰلِكَ أُخَصِّصُ لِكُلِّ لُغَةٍ مَكَانًا وَوَقْتًا.', modelEn: 'I sometimes mix languages up, so I give each language its own place and time.' },
        { unexpected: true, ex: 'هَلْ حَدَثَ مَعَكَ سُوءُ فَهْمٍ مُضْحِكٌ؟', task: 'Answer the unexpected question (past narrative).', help: 'نَعَمْ، مَرَّةً … فَـ…', model: 'نَعَمْ، مَرَّةً طَلَبْتُ مِنْ خَالِي "كُرْسِيًّا" بَدَلًا مِنْ "كُرَةٍ"، فَأَحْضَرَ لِي كُرْسِيًّا، وَضَحِكْنَا كَثِيرًا!', modelEn: 'Once I asked my uncle for a “chair” instead of a “ball” — he brought a chair and we laughed a lot!' },
      ],
      girl: 'تَسْتَخْدِمِينَ · تُسَاعِدُكِ · تَتَوَاصَلِينَ · أَقَارِبِكِ · مَعَكِ',
      notes: 'Develop: a present-tense routine with time markers, allatī + returning pronoun, verbal nouns (mushāhada, takrār), bi-mukālamati fīdyū, aṣʿabu shayʾin + li-dhālika, a past anecdote with badalan min.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a formal interview', title: 'Role play D — Volunteer interpreter', ar: 'مُتَرْجِمٌ مُتَطَوِّعٌ', you: 'an applicant', them: 'the coordinator of a community advice centre',
      tasks: [
        { ex: 'لِمَاذَا تُرِيدُ أَنْ تَتَطَوَّعَ مُتَرْجِمًا؟', task: 'Give a formal motivation.', help: 'يَسُرُّنِي أَنْ … فَقَدْ رَأَيْتُ …', model: 'يَسُرُّنِي أَنْ أَتَقَدَّمَ لِهٰذَا الدَّوْرِ؛ فَقَدْ رَأَيْتُ كَيْفَ عَانَتْ جَدَّتِي عِنْدَمَا وَصَلَتْ إِلَى بَرِيطَانْيَا دُونَ أَنْ تَعْرِفَ كَلِمَةً إِنْجْلِيزِيَّةً.', modelEn: 'I saw how my grandmother struggled when she arrived in Britain without a word of English.' },
        { ex: 'مَا المَهَارَاتُ الَّتِي يَحْتَاجُ إِلَيْهَا المُتَرْجِمُ؟', task: 'List skills with verbal nouns and linkers.', help: 'أَوَّلًا … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أَوَّلًا، إِتْقَانُ اللُّغَتَيْنِ؛ بِالإِضَافَةِ إِلَى ذٰلِكَ، الدِّقَّةُ وَالحِيَادُ وَاحْتِرَامُ الخُصُوصِيَّةِ، لِأَنَّ النَّاسَ يَثِقُونَ بِمَنْ يُتَرْجِمُ لَهُمْ.', modelEn: 'Mastery of both languages; also precision, neutrality and privacy, because people trust whoever translates for them.' },
        { ex: 'هَلْ تُتَرْجِمُ لِأَحَدٍ الآنَ؟', task: 'Describe a current habit with a result.', help: 'نَعَمْ، أُتَرْجِمُ لِوَالِدَتِي عِنْدَمَا … مِمَّا …', model: 'نَعَمْ، أُتَرْجِمُ لِوَالِدَتِي عِنْدَمَا تَزُورُ الطَّبِيبَ، مِمَّا عَلَّمَنِي الصَّبْرَ وَكَثِيرًا مِنَ المُفْرَدَاتِ الطِّبِّيَّةِ.', modelEn: 'I translate for my mother at the doctor’s, which has taught me patience and medical vocabulary.' },
        { ex: 'أَلَيْسَتِ التَّرْجَمَةُ الآلِيَّةُ كَافِيَةً اليَوْمَ؟', task: 'Concede and argue.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا سَرِيعَةٌ وَمُفِيدَةٌ، غَيْرَ أَنَّهَا لَا تَفْهَمُ المَشَاعِرَ وَلَا الثَّقَافَةَ، وَقَدْ تُخْطِئُ فِي كَلِمَةٍ تُغَيِّرُ المَعْنَى كُلَّهُ.', modelEn: 'It is fast and useful, but it understands neither feelings nor culture, and one wrong word can change the whole meaning.' },
        { unexpected: true, ex: 'لَوْ طَلَبَ مِنْكَ شَخْصٌ أَنْ تُغَيِّرَ كَلَامَهُ، مَاذَا تَفْعَلُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ طَلَبَ …، لَشَرَحْتُ …', model: 'لَوْ طَلَبَ مِنِّي ذٰلِكَ، لَشَرَحْتُ لَهُ بِلُطْفٍ أَنَّ المُتَرْجِمَ الأَمِينَ يَنْقُلُ الكَلَامَ كَمَا هُوَ، وَإِلَّا فَقَدَ ثِقَةَ الجَمِيعِ.', modelEn: 'I’d kindly explain that an honest interpreter conveys words as they are — otherwise they lose everyone’s trust.' },
      ],
      girl: 'تُرِيدِينَ · تَتَطَوَّعِي · مُتَرْجِمَةً · تُتَرْجِمِينَ · مِنْكِ · تُغَيِّرِي · تَفْعَلِينَ',
      notes: 'Stretch: formal register, dūna an + subjunctive, a list of verbal nouns (itqān, ḥiyād, iḥtirām), man as "whoever", mimmā + past, a concession with lā … wa-lā, law … la- + wa-illā.',
      modelFoot: 'Stretch: motivation, verbal nouns, mimmā, a concession and law … la- — the language of a professional, in formal Arabic.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'اللُّغَاتُ فِي حَيَاتِي', aim: 'one full sentence per question',
      qs: [
        { q: 'مَا اللُّغَاتُ الَّتِي تَتَكَلَّمُهَا؟', en: 'Which languages do you speak?', start: 'أَتَكَلَّمُ … وَ…', model: 'أَتَكَلَّمُ الإِنْجْلِيزِيَّةَ وَالعَرَبِيَّةَ.', modelEn: 'English and Arabic.' },
        { q: 'أَيَّ لُغَةٍ تَتَكَلَّمُ فِي البَيْتِ؟', en: 'Which language do you speak at home?', start: 'فِي البَيْتِ أَتَكَلَّمُ …', model: 'فِي البَيْتِ أَتَكَلَّمُ العَرَبِيَّةَ مَعَ أُمِّي.', modelEn: 'Arabic with my mum.' },
        { q: 'كَيْفَ تَتَعَلَّمُ الكَلِمَاتِ الجَدِيدَةَ؟', en: 'How do you learn new words?', start: 'أَكْتُبُ … / أَسْتَخْدِمُ …', model: 'أَكْتُبُهَا فِي دَفْتَرٍ، وَأُرَاجِعُهَا كُلَّ يَوْمٍ.', modelEn: 'I write them in a notebook and revise them daily.' },
        { q: 'هَلْ تُشَاهِدُ أَفْلَامًا بِلُغَةٍ أُخْرَى؟', en: 'Do you watch films in another language?', start: 'نَعَمْ، أُشَاهِدُ … / لَا، …', model: 'نَعَمْ، أُشَاهِدُ أَفْلَامًا تُرْكِيَّةً مَعَ التَّرْجَمَةِ.', modelEn: 'Yes, Turkish films with subtitles.' },
        { q: 'هَلْ تَعَلُّمُ اللُّغَاتِ سَهْلٌ؟', en: 'Is learning languages easy?', start: 'تَعَلُّمُ اللُّغَاتِ … لِأَنَّ …', model: 'تَعَلُّمُ اللُّغَاتِ صَعْبٌ قَلِيلًا، لٰكِنَّهُ مُمْتِعٌ.', modelEn: 'A bit hard, but fun.' },
      ],
      foot: 'Core: one full sentence for every question — in the present tense. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + the present tense = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'التَّوَاصُلُ بِلُغَاتٍ كَثِيرَةٍ', aim: 'two or three sentences, with a verbal noun or a relative clause',
      qs: [
        { q: 'صِفْ يَوْمًا عَادِيًّا بِاللُّغَاتِ الَّتِي تَسْتَخْدِمُهَا.', en: 'Describe a normal day through the languages you use.', start: 'فِي الصَّبَاحِ … وَفِي … أَمَّا فِي المَسَاءِ فَـ…', model: 'فِي الصَّبَاحِ أَسْمَعُ الأَخْبَارَ بِالإِنْجْلِيزِيَّةِ، وَفِي الطَّرِيقِ أَقْرَأُ القُرْآنَ بِالعَرَبِيَّةِ، أَمَّا فِي المَسَاءِ فَأُكَلِّمُ جَدِّي بِالصُّومَالِيَّةِ.', modelEn: 'News in English in the morning, Qur’an in Arabic on the way, and Somali with grandpa in the evening.' },
        { q: 'مَنِ الشَّخْصُ الَّذِي تَتَوَاصَلُ مَعَهُ بِلُغَةٍ أُخْرَى؟', en: 'Who do you communicate with in another language?', start: 'الشَّخْصُ الَّذِي … هُوَ …', model: 'الشَّخْصُ الَّذِي أَتَوَاصَلُ مَعَهُ أَكْثَرَ هُوَ ابْنُ خَالَتِي فِي مِصْرَ؛ نَتَرَاسَلُ يَوْمِيًّا، وَيُصَحِّحُ أَخْطَائِي.', modelEn: 'My cousin in Egypt: we message daily and he corrects my mistakes.' },
        { q: 'مَا فَوَائِدُ أَنْ تَكُونَ ثُنَائِيَّ اللُّغَةِ؟', en: 'What are the benefits of being bilingual?', start: 'أَوَّلًا … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أَوَّلًا، التَّوَاصُلُ مَعَ نَاسٍ أَكْثَرَ؛ بِالإِضَافَةِ إِلَى ذٰلِكَ، فُرَصُ العَمَلِ وَفَهْمُ ثَقَافَتَيْنِ مِنَ الدَّاخِلِ.', modelEn: 'Talking to more people; also job opportunities and understanding two cultures from inside.' },
        { q: 'كَيْفَ كُنْتَ تَتَعَلَّمُ عِنْدَمَا كُنْتَ صَغِيرًا؟', en: 'How did you learn when you were little?', start: 'كُنْتُ … أَمَّا الآنَ فَـ…', model: 'كُنْتُ أَحْفَظُ الأَغَانِيَ وَالأَنَاشِيدَ، أَمَّا الآنَ فَأَدْرُسُ القَوَاعِدَ وَأَقْرَأُ القِصَصَ القَصِيرَةَ.', modelEn: 'I memorised songs; now I study grammar and read short stories.' },
        { q: 'أَيُّ لُغَةٍ سَتَتَعَلَّمُ فِي المُسْتَقْبَلِ؟ وَلِمَاذَا؟', en: 'Which language will you learn next, and why?', start: 'سَأَتَعَلَّمُ … لِكَيْ …', model: 'سَأَتَعَلَّمُ الصِّينِيَّةَ، لِكَيْ أَعْمَلَ فِي التِّجَارَةِ الدُّوَلِيَّةِ، لِأَنَّ الصِّينَ شَرِيكٌ مُهِمٌّ لِلْعَالَمِ العَرَبِيِّ.', modelEn: 'Chinese, to work in international trade — China is a key partner of the Arab world.' },
      ],
      foot: 'Develop: two or three sentences — a verbal noun or a relative clause, a reason and a time marker.',
      modelFoot: 'Verbal nouns + allatī / alladhī + two time frames = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'اللُّغَةُ وَالتَّوَاصُلُ فِي العَالَمِ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ سَتُغْنِينَا التَّرْجَمَةُ الآلِيَّةُ عَنْ تَعَلُّمِ اللُّغَاتِ؟', en: 'Will machine translation make learning languages unnecessary?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا تَتَطَوَّرُ بِسُرْعَةٍ، غَيْرَ أَنَّ تَعَلُّمَ اللُّغَةِ يَفْتَحُ القَلْبَ لَا الأُذُنَ فَقَطْ؛ فَلَا آلَةَ تَنْقُلُ النُّكْتَةَ أَوِ الدُّعَاءَ كَمَا هُوَ.', modelEn: 'It’s improving fast, but learning a language opens the heart, not just the ear — no machine conveys a joke or a prayer as it is.' },
        { q: 'هَلِ الفُصْحَى أَهَمُّ مِنَ اللَّهَجَاتِ؟', en: 'Is standard Arabic more important than dialects?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تَجْمَعُ الفُصْحَى العَرَبَ كُلَّهُمْ فِي الكِتَابَةِ وَالإِعْلَامِ، وَمِنْ نَاحِيَةٍ أُخْرَى، اللَّهْجَةُ هِيَ لُغَةُ البَيْتِ وَالمَشَاعِرِ، لِذٰلِكَ نَحْتَاجُ إِلَى الاثْنَتَيْنِ.', modelEn: 'Fuṣḥā unites all Arabs in writing and media; dialect is the language of home and feeling — we need both.' },
        { q: 'كَيْفَ غَيَّرَتِ التِّكْنُولُوجْيَا التَّوَاصُلَ بَيْنَ الأُسَرِ المُتَفَرِّقَةِ؟', en: 'How has technology changed communication for scattered families?', start: 'كَانَ … أَمَّا اليَوْمَ فَـ… مِمَّا …', model: 'كَانَ جَدِّي يَنْتَظِرُ رِسَالَةً وَرَقِيَّةً شَهْرًا كَامِلًا، أَمَّا اليَوْمَ فَنَرَى بَعْضَنَا كُلَّ يَوْمٍ، مِمَّا يُقَرِّبُ المَسَافَاتِ وَيُحَافِظُ عَلَى اللُّغَةِ.', modelEn: 'Grandpa waited a month for a paper letter; today we see each other daily, which shrinks distances and keeps the language alive.' },
        { q: 'مَا مَسْؤُولِيَّةُ مَنْ يَتَكَلَّمُ لُغَتَيْنِ فِي مُجْتَمَعِهِ؟', en: 'What responsibility does a bilingual person have in their community?', start: 'أَرَى أَنَّ مَنْ … يَجِبُ أَنْ …', model: 'أَرَى أَنَّ مَنْ يَتَكَلَّمُ لُغَتَيْنِ يَجِبُ أَنْ يَكُونَ جِسْرًا؛ فَيُسَاعِدَ الجِيرَانَ الجُدُدَ، وَيَشْرَحَ ثَقَافَةَ كُلِّ طَرَفٍ لِلْآخَرِ.', modelEn: 'Whoever speaks two languages should be a bridge — helping new neighbours and explaining each side’s culture to the other.' },
        { q: 'لَوْ فَقَدَ العَالَمُ كُلَّ لُغَاتِهِ إِلَّا لُغَةً وَاحِدَةً، مَاذَا نَخْسَرُ؟', en: 'If the world lost all its languages but one, what would we lose?', start: 'لَوْ حَدَثَ ذٰلِكَ، لَـ…', model: 'لَوْ حَدَثَ ذٰلِكَ، لَخَسِرْنَا آلَافَ الطُّرُقِ لِرُؤْيَةِ العَالَمِ؛ فَكُلُّ لُغَةٍ تَحْمِلُ أَمْثَالًا وَأَشْعَارًا وَحِكْمَةً لَا تُوجَدُ فِي غَيْرِهَا.', modelEn: 'We’d lose thousands of ways of seeing the world: every language carries proverbs, poems and wisdom found nowhere else.' },
      ],
      foot: 'Stretch: a concession, a balanced view, kāna … ammā al-yawma fa- with mimmā, man as "whoever" and law … la-.',
      modelFoot: 'Stretch: verbal nouns, lā + noun of absolute negation, mimmā, man yatakallamu and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I said which languages I use and with whom.' },
    { route: 'core', text: 'I described how I learn, in the present tense.' },
    { route: 'develop', text: 'I used a verbal noun (taʿallum, tawāṣul, tarjama).' },
    { route: 'develop', text: 'I used allatī / alladhī with the returning pronoun.' },
    { route: 'stretch', text: 'I gave a balanced view of technology or dialects, with law … la-.' },
  ],
};
speak.RP[1].tasks[4].help = 'القِرَاءَةُ … أَمَّا الكِتَابَةُ فَصَعْبَةٌ …';
speak.RP[2].tasks[4].help = 'نَعَمْ، مَرَّةً طَلَبْتُ … فَأَحْضَرَ …';
speak.RP[3].tasks[4].help = 'لَوْ طَلَبَ …، لَشَرَحْتُ …';
speak.CONV[1].qs[0].start = 'فِي الصَّبَاحِ … وَفِي الطَّرِيقِ … أَمَّا فِي المَسَاءِ فَأُكَلِّمُ …';
speak.CONV[1].qs[3].start = 'كُنْتُ … أَمَّا الآنَ فَأَدْرُسُ …';
speak.CONV[2].qs[2].start = 'كَانَ جَدِّي … أَمَّا اليَوْمَ فَنَرَى … مِمَّا …';
speak.CONV[2].qs[4].start = 'لَوْ حَدَثَ ذٰلِكَ، لَخَسِرْنَا …';

const Q2_CORE = `مَرْحَبًا يَا نُورُ،
كَيْفَ حَالُكِ؟ عِنْدِي خَبَرٌ جَمِيلٌ! بَدَأْتُ تَبَادُلًا لُغَوِيًّا عَلَى الإِنْتَرْنِتِ مَعَ بِنْتٍ اسْمُهَا لِينَا. لِينَا أُرْدُنِيَّةٌ، وَتَسْكُنُ فِي عَمَّانَ. نَتَوَاصَلُ بِمُكَالَمَةِ فِيدْيُو مَرَّتَيْنِ فِي الأُسْبُوعِ. أَوَّلًا نَتَكَلَّمُ بِالعَرَبِيَّةِ نِصْفَ سَاعَةٍ، ثُمَّ بِالإِنْجْلِيزِيَّةِ نِصْفَ سَاعَةٍ. هِيَ تُصَحِّحُ نُطْقِي، وَأَنَا أُسَاعِدُهَا فِي القَوَاعِدِ. تَعَلُّمُ اللُّغَةِ بِهٰذِهِ الطَّرِيقَةِ مُمْتِعٌ جِدًّا، لِأَنِّي أَتَكَلَّمُ مَعَ شَخْصٍ حَقِيقِيٍّ. فِي الصَّيْفِ سَأَزُورُ الأُرْدُنَّ، وَسَأُقَابِلُ لِينَا إِنْ شَاءَ اللّٰهُ. وَأَنْتِ، هَلْ تُرِيدِينَ صَدِيقَةً لِلتَّبَادُلِ أَيْضًا؟
مَعَ السَّلَامَةِ،
سَلْمَى`;
const Q2_FULL = `عَزِيزَتِي نُورُ،
أَكْتُبُ إِلَيْكِ لِأُخْبِرَكِ بِتَجْرِبَةٍ غَيَّرَتْ طَرِيقَةَ تَعَلُّمِي! فَقَدْ بَدَأْتُ تَبَادُلًا لُغَوِيًّا مَعَ لِينَا، وَهِيَ طَالِبَةٌ أُرْدُنِيَّةٌ تَدْرُسُ الطِّبَّ فِي عَمَّانَ وَتُرِيدُ أَنْ تُحَسِّنَ لُغَتَهَا الإِنْجْلِيزِيَّةَ. نَتَوَاصَلُ مَرَّتَيْنِ فِي الأُسْبُوعِ بِالفِيدْيُو، فَنَتَحَدَّثُ نِصْفَ السَّاعَةِ الأُولَى بِالعَرَبِيَّةِ، وَالثَّانِيَةَ بِالإِنْجْلِيزِيَّةِ. أَكْثَرُ مَا يُعْجِبُنِي أَنَّ لِينَا تُعَلِّمُنِي عِبَارَاتٍ لَا تُوجَدُ فِي الكُتُبِ، وَتَشْرَحُ لِي الفَرْقَ بَيْنَ لَهْجَتِهَا وَالفُصْحَى. صَحِيحٌ أَنَّنِي أَخْجَلُ أَحْيَانًا مِنْ أَخْطَائِي، غَيْرَ أَنَّهَا صَبُورَةٌ جِدًّا. وَإِذَا اسْتَمْرَرْنَا هٰكَذَا، فَسَأَتَكَلَّمُ بِطَلَاقَةٍ قَبْلَ الامْتِحَانِ. هَلْ تُرِيدِينَ أَنْ أُعَرِّفَكِ بِصَدِيقَةٍ لَهَا؟
بِمَحَبَّةٍ،
سَلْمَى`;
const Q3A_CORE = `أَنَا سَلْمَى، وَأَعِيشُ فِي لَنْدَنَ. أَبِي سُودَانِيٌّ، وَأُمِّي إِنْجْلِيزِيَّةٌ، لِذٰلِكَ أَتَكَلَّمُ لُغَتَيْنِ مُنْذُ صِغَرِي. فِي البَيْتِ نَتَكَلَّمُ الإِنْجْلِيزِيَّةَ وَالعَرَبِيَّةَ، وَفِي المَدْرَسَةِ أَتَكَلَّمُ الإِنْجْلِيزِيَّةَ فَقَطْ.
فِي الصَّبَاحِ أَسْمَعُ القُرْآنَ بِالعَرَبِيَّةِ، وَفِي المَسَاءِ أَتَّصِلُ بِجَدَّتِي فِي الخُرْطُومِ عَبْرَ الفِيدْيُو، وَنَتَكَلَّمُ نِصْفَ سَاعَةٍ. جَدَّتِي لَا تَتَكَلَّمُ الإِنْجْلِيزِيَّةَ، لِذٰلِكَ أَتَكَلَّمُ مَعَهَا بِالعَرَبِيَّةِ دَائِمًا. أَحْيَانًا أُتَرْجِمُ لِأُمِّي، لِأَنَّهَا لَا تَفْهَمُ كُلَّ الكَلِمَاتِ العَرَبِيَّةِ، وَأَنَا أُحِبُّ مُسَاعَدَتَهَا.
أَتَعَلَّمُ الفُصْحَى فِي المَدْرَسَةِ ثَلَاثَ سَاعَاتٍ فِي الأُسْبُوعِ. أَسْتَخْدِمُ تَطْبِيقًا لِلْمُفْرَدَاتِ، وَأُشَاهِدُ مُسَلْسَلًا عَرَبِيًّا مَعَ أُخْتِي. الطَّرِيقَةُ الَّتِي تُسَاعِدُنِي أَكْثَرَ هِيَ الكَلَامُ مَعَ النَّاسِ، لِأَنِّي أَسْمَعُ النُّطْقَ الصَّحِيحَ. أَصْعَبُ شَيْءٍ هُوَ القَوَاعِدُ، وَمَعَ ذٰلِكَ أُحِبُّهَا كَثِيرًا.
أَرَى أَنَّ تَعَلُّمَ اللُّغَاتِ مُهِمٌّ جِدًّا. فِي المُسْتَقْبَلِ سَأَتَعَلَّمُ الفَرَنْسِيَّةَ أَيْضًا، لِأَنِّي أُرِيدُ أَنْ أَعْمَلَ مُتَرْجِمَةً فِي مُنَظَّمَةٍ دُوَلِيَّةٍ.`;
const Q3A_FULL = `حِينَ أَسْتَيْقِظُ صَبَاحًا، لَا أَعْرِفُ بِأَيِّ لُغَةٍ سَأَحْلُمُ فِي اللَّيْلِ! فَأَنَا أَعِيشُ يَوْمِي بَيْنَ ثَلَاثِ لُغَاتٍ: الإِنْجْلِيزِيَّةِ الَّتِي أَدْرُسُ بِهَا، وَالعَرَبِيَّةِ الَّتِي أُصَلِّي وَأُكَلِّمُ بِهَا جَدَّتِي، وَالفَرَنْسِيَّةِ الَّتِي بَدَأْتُ أَتَعَلَّمُهَا هٰذَا العَامَ، اسْتِعْدَادًا لِرِحْلَةٍ مَدْرَسِيَّةٍ إِلَى بَارِيسَ.
وَلَيْسَ هٰذَا التَّنَقُّلُ سَهْلًا دَائِمًا؛ فَكَثِيرًا مَا أَبْحَثُ عَنْ كَلِمَةٍ عَرَبِيَّةٍ فَلَا أَجِدُ إِلَّا مُقَابِلَهَا الإِنْجْلِيزِيَّ، مِمَّا يُضْحِكُ أَقَارِبِي فِي الخُرْطُومِ. غَيْرَ أَنَّنِي اكْتَشَفْتُ أَنَّ أَفْضَلَ طَرِيقَةٍ لِلتَّعَلُّمِ لَيْسَتِ الحِفْظَ، بَلِ الاسْتِعْمَالُ الحَقِيقِيُّ فِي مَوَاقِفِ الحَيَاةِ اليَوْمِيَّةِ، مَهْمَا كَثُرَتِ الأَخْطَاءُ.
لِذٰلِكَ صِرْتُ أُتَرْجِمُ لِأُمِّي فِي زِيَارَاتِهَا لِأُسْرَةِ أَبِي، وَأُشَارِكُ فِي تَبَادُلٍ لُغَوِيٍّ أُسْبُوعِيٍّ مَعَ طَالِبَةٍ أُرْدُنِيَّةٍ تُصَحِّحُ نُطْقِي وَأُصَحِّحُ قَوَاعِدَهَا. وَقَدْ عَلَّمَتْنِي هٰذِهِ التَّجَارِبُ أَنَّ التَّوَاصُلَ لَيْسَ كَلِمَاتٍ فَقَطْ، بَلْ إِصْغَاءٌ وَاحْتِرَامٌ أَيْضًا.
أَمَّا فِي المُسْتَقْبَلِ، فَأَطْمَحُ إِلَى أَنْ أَعْمَلَ مُتَرْجِمَةً فِي مُنَظَّمَةٍ إِنْسَانِيَّةٍ تَخْدُمُ اللَّاجِئِينَ وَالمُهَاجِرِينَ الجُدُدَ. وَلَوْ سُئِلْتُ عَنْ أَثْمَنِ هَدِيَّةٍ أَعْطَانِي إِيَّاهَا وَالِدَايَ، لَقُلْتُ: "لُغَتَانِ، وَقَلْبٌ يَفْهَمُ بِهِمَا".`;
const Q3B_FULL = `قَبْلَ سَنَوَاتٍ قَلِيلَةٍ، كَانَ السَّائِحُ يَحْمِلُ قَامُوسًا وَرَقِيًّا ثَقِيلًا؛ أَمَّا اليَوْمَ فَيَكْفِيهِ أَنْ يُوَجِّهَ هَاتِفَهُ إِلَى لَافِتَةٍ لِيَقْرَأَهَا بِلُغَتِهِ فِي ثَانِيَةٍ. فَهَلْ سَتُغْنِينَا التَّرْجَمَةُ الآلِيَّةُ عَنْ تَعَلُّمِ اللُّغَاتِ؟
لَا شَكَّ أَنَّ هٰذِهِ التِّكْنُولُوجْيَا مُفِيدَةٌ جِدًّا؛ فَهِيَ تُسَاعِدُ المُسَافِرِينَ وَالمَرْضَى وَاللَّاجِئِينَ عَلَى التَّوَاصُلِ فِي لَحَظَاتٍ صَعْبَةٍ، كَمَا أَنَّهَا سَرِيعَةٌ وَمَجَّانِيَّةٌ، وَتَتَحَسَّنُ عَامًا بَعْدَ عَامٍ. وَمَعَ ذٰلِكَ، فَإِنَّهَا تُتَرْجِمُ الكَلِمَاتِ لَا المَعَانِيَ؛ إِذْ لَا تَفْهَمُ النُّكْتَةَ وَلَا المَثَلَ وَلَا نَبْرَةَ الصَّوْتِ.
وَقَدْ رَأَيْتُ ذٰلِكَ بِنَفْسِي عِنْدَمَا اسْتَخْدَمَتْ زَمِيلَتِي تَطْبِيقًا لِتُرْسِلَ تَهْنِئَةً بِالعِيدِ إِلَى جَارَتِهَا العَرَبِيَّةِ، فَخَرَجَتِ الرِّسَالَةُ غَرِيبَةً، وَضَحِكَتِ الجَارَةُ كَثِيرًا، لٰكِنَّ زَمِيلَتِي شَعَرَتْ بِالحَرَجِ الشَّدِيدِ. وَبَعْدَ أَنْ عَلَّمْتُهَا العِبَارَةَ الصَّحِيحَةَ، صَارَتْ تُحَيِّيهَا بِهَا كُلَّ عِيدٍ.
أَرَى أَنَّ الآلَةَ أَدَاةٌ مُمْتَازَةٌ، غَيْرَ أَنَّهَا لَا تَسْتَطِيعُ أَنْ تَبْنِيَ صَدَاقَةً أَوْ ثِقَةً بَيْنَ شَخْصَيْنِ مِنْ ثَقَافَتَيْنِ مُخْتَلِفَتَيْنِ. فَإِذَا أَرَدْنَا أَنْ نَفْهَمَ النَّاسَ حَقًّا، فَسَنَظَلُّ نَحْتَاجُ إِلَى تَعَلُّمِ لُغَاتِهِمْ وَثَقَافَاتِهِمْ.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in a language-exchange application form, write an email about an online language exchange, and write an extended piece about living with several languages or about whether machine translation will replace learning languages.',
  lift: [
    { ar: 'تَعَلُّمُ اللُّغَةِ بِهٰذِهِ الطَّرِيقَةِ مُمْتِعٌ جِدًّا', en: 'learning a language this way is great fun' },
    { ar: 'الطَّرِيقَةُ الَّتِي تُسَاعِدُنِي أَكْثَرَ هِيَ …', en: 'the method that helps me most is …' },
    { ar: 'جَدَّتِي لَا تَتَكَلَّمُ الإِنْجْلِيزِيَّةَ، لِذٰلِكَ …', en: 'my grandmother doesn’t speak English, so …' },
  ],
  checkTip: 'Check the present tense endings (atakallamu, natawāṣalu, tuṣaḥḥiḥu for "she"); verbal nouns after uḥibbu / as subjects (taʿallumu al-lughati mumtiʿun); allatī for feminine nouns and non-human plurals with the returning pronoun (al-lughātu allatī atakallamuhā); and the feminine for a female writer (mutarjima).',
  FORM: {
    title: 'Language-exchange application form', ar: 'اسْتِمَارَةُ طَلَبِ تَبَادُلٍ لُغَوِيٍّ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'سَلْمَى أَحْمَدُ', modelEn: 'Salma Ahmed' },
      { core: true, ar: 'العُمْرُ', en: 'Age', model: 'سِتَّ عَشْرَةَ سَنَةً', modelEn: 'sixteen' },
      { core: true, ar: 'اللُّغَاتُ الَّتِي تَتَكَلَّمُهَا', en: 'Languages you speak', model: 'الإِنْجْلِيزِيَّةُ وَالعَرَبِيَّةُ', modelEn: 'English and Arabic' },
      { core: true, ar: 'اللُّغَةُ الَّتِي تُرِيدُ تَعَلُّمَهَا', en: 'Language you want to learn', model: 'الفَرَنْسِيَّةُ', modelEn: 'French' },
      { core: true, ar: 'المُسْتَوَى', en: 'Level', model: 'مُبْتَدِئَةٌ', modelEn: 'beginner (f.)' },
      { core: true, ar: 'طَرِيقَةُ التَّوَاصُلِ', en: 'Way of communicating', model: 'مُكَالَمَةُ فِيدْيُو', modelEn: 'video call' },
      { ar: 'الأَوْقَاتُ المُنَاسِبَةُ', en: 'Suitable times', model: 'مَسَاءَ الثُّلَاثَاءِ وَالخَمِيسِ', modelEn: 'Tuesday and Thursday evenings' },
      { ar: 'جُمْلَةٌ: مَا هَدَفُكَ مِنَ التَّبَادُلِ؟', en: 'ONE sentence: your aim for the exchange', model: 'أُرِيدُ تَحْسِينَ نُطْقِي، لِأَنِّي سَأُسَافِرُ إِلَى فَرَنْسَا فِي الصَّيْفِ.', modelEn: 'I want to improve my pronunciation, because I’m travelling to France in the summer.' },
    ],
    foot: 'One word or a short phrase for each box — the last box is a full sentence with a verbal noun (taḥsīn) and a reason.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Box 3 and 4 headings contain relative clauses — point out allatī + returning pronoun (-hā). A boy writes مُبْتَدِئٌ in box 5.',
  },
  Q2: {
    short: 'an email about an online language exchange', title: 'Question 2: my language exchange', ar: 'تَبَادُلِي اللُّغَوِيُّ',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • who your language-exchange partner is • how and how often you communicate • what you do in the sessions and your opinion • your plans, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'One verbal noun and one relative clause.', 'Present AND future.', 'About 80–90 words.'],
    phrases: [['بَدَأْتُ تَبَادُلًا لُغَوِيًّا مَعَ …', 'I started a language exchange with …'], ['نَتَوَاصَلُ بِالفِيدْيُو مَرَّتَيْنِ فِي الأُسْبُوعِ', 'we communicate by … twice a week'], ['تَعَلُّمُ اللُّغَةِ بِهٰذِهِ الطَّرِيقَةِ …', 'learning a language this way …'], ['فِي الصَّيْفِ سَأَزُورُ …', 'in the summer I will visit …']],
    rubric: [
      ['task', 'اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ عَنْ تَبَادُلِكِ اللُّغَوِيِّ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about your language exchange (80–90 words).'],
      ['1', 'مَنْ شَرِيكَتُكِ فِي التَّبَادُلِ؟', 'Who your exchange partner is'],
      ['2', 'كَيْفَ تَتَوَاصَلَانِ؟ وَكَمْ مَرَّةً؟', 'How and how often you communicate'],
      ['3', 'مَاذَا تَفْعَلَانِ؟ وَمَا رَأْيُكِ؟', 'What you do; your opinion'],
      ['4', 'مَا خِطَطُكِ؟ وَاسْأَلِي صَدِيقَتَكِ سُؤَالًا.', 'Your plans; a question for your friend'],
    ],
    qwords: 'مَنْ (who) · كَيْفَ (how) · كَمْ مَرَّةً (how often) · تَتَوَاصَلَانِ (you two communicate — dual) · خِطَطُكِ (plans — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'بَدَأْتُ تَبَادُلًا لُغَوِيًّا مَعَ ______ ، وَهِيَ ______ .', 'I started an exchange with …; she is …'],
      ['2', 'نَتَوَاصَلُ عَبْرَ ______ ______ فِي الأُسْبُوعِ.', 'We communicate by … … a week.'],
      ['3', 'هِيَ ______ ، وَأَنَا ______ . التَّبَادُلُ ______ .', 'She …, and I … The exchange is …'],
      ['4', 'فِي الصَّيْفِ سَأَ______ . وَأَنْتِ، ______ ؟', 'In summer I will … And you, …?'],
      ['end', 'مَعَ السَّلَامَةِ، ______', 'Goodbye, (your name)'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Nour, how are you? I have lovely news! I started an online language exchange with a girl called Lina. Lina is Jordanian and lives in Amman. We talk by video call twice a week: first half an hour in Arabic, then half an hour in English. She corrects my pronunciation and I help her with grammar. Learning a language this way is great fun, because I speak with a real person. In the summer I’ll visit Jordan and meet Lina, God willing. And you, do you want an exchange friend too? Goodbye, Salma.”',
      find: ['تَبَادُلًا لُغَوِيًّا', 'نَتَوَاصَلُ بِمُكَالَمَةِ فِيدْيُو', 'تَعَلُّمُ اللُّغَةِ', 'سَأَزُورُ الأُرْدُنَّ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Nour, I’m writing to tell you about an experience that changed how I learn! I started a language exchange with Lina, a Jordanian medical student in Amman who wants to improve her English. We talk by video twice a week: the first half hour in Arabic, the second in English. What I like most is that Lina teaches me expressions you won’t find in books and explains the difference between her dialect and fuṣḥā. I’m sometimes embarrassed by my mistakes, but she is very patient. If we keep this up, I’ll speak fluently before the exam. Shall I introduce you to a friend of hers? With love, Salma.”',
      find: ['تَجْرِبَةٍ غَيَّرَتْ', 'طَالِبَةٌ أُرْدُنِيَّةٌ تَدْرُسُ', 'لَا تُوجَدُ فِي الكُتُبِ', 'إِذَا اسْتَمْرَرْنَا … فَسَأَتَكَلَّمُ'],
    },
  },
  Q3: {
    a: { title: 'اللُّغَاتُ فِي حَيَاتِي اليَوْمِيَّةِ', en: 'Languages in my daily life', bullets: 'اللُّغَاتُ الَّتِي تَتَكَلَّمُهَا وَمَعَ مَنْ · يَوْمُكَ بَيْنَ اللُّغَاتِ · كَيْفَ تَتَعَلَّمُ وَمَا الصُّعُوبَاتُ · رَأْيُكَ وَخُطَطُكَ', bulletsEn: 'The languages you speak and with whom · your day between languages · how you learn and the difficulties · your opinion and plans' },
    b: { title: 'هَلْ سَتُغْنِينَا التَّرْجَمَةُ الآلِيَّةُ عَنْ تَعَلُّمِ اللُّغَاتِ؟', en: 'Will machine translation replace learning languages?', bullets: 'المَوْضُوعُ · فَوَائِدُ التَّرْجَمَةِ الآلِيَّةِ وَحُدُودُهَا · مِثَالٌ مِنْ تَجْرِبَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · benefits and limits of machine translation · an example from your experience · your opinion' },
    plan: [
      'Who I am — abī … wa-ummī …; li-dhālika atakallamu lughatayni; fī al-bayti … wa-fī al-madrasati …',
      'My day — fī aṣ-ṣabāḥi … wa-fī al-masāʾi attaṣilu bi- …; aḥyānan utarjimu li- …',
      'Learning — ataʿallamu …; astakhdimu …; aṭ-ṭarīqatu allatī tusāʿidunī …; aṣʿabu shayʾin …, wa-maʿa dhālika …',
      'Opinion + future — arā anna taʿallumu al-lughāti …; sa-ataʿallamu … li-annī …; Stretch: laysa … bal, law … la-.',
    ],
    frames: [
      { ar: 'أَتَّصِلُ بِجَدَّتِي، وَأَتَكَلَّمُ مَعَهَا بِالعَرَبِيَّةِ.', en: 'present: I call grandma and speak Arabic.' },
      { ar: 'الطَّرِيقَةُ الَّتِي تُسَاعِدُنِي هِيَ الكَلَامُ مَعَ النَّاسِ.', en: 'relative: the way that helps me is talking.' },
      { ar: 'سَأَتَعَلَّمُ الفَرَنْسِيَّةَ، لِأَنِّي أُرِيدُ أَنْ أُتَرْجِمَ.', en: 'future: I’ll learn French to translate.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'I’m Salma in London: Sudanese dad, English mum, so two languages since childhood → mornings Qur’an in Arabic, evenings calls to grandma in Khartoum in Arabic; I sometimes translate for mum → I study fuṣḥā three hours a week, use an app and watch a series; talking to people helps most; grammar is hardest, yet I like it → learning languages matters; I’ll learn French to be a translator.', find: ['لِذٰلِكَ أَتَكَلَّمُ', 'أُتَرْجِمُ لِأُمِّي', 'الطَّرِيقَةُ الَّتِي', 'تَعَلُّمَ اللُّغَاتِ'], notes: 'Core model: the present tense throughout (asmaʿu, attaṣilu, utarjimu, astakhdimu), a relative clause with a returning pronoun, verbal nouns (taʿallum, kalām), li-dhālika and maʿa dhālika, and a future plan with li-annī.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'When I wake up, I don’t know which language I’ll dream in! I live between three: English, which I study in; Arabic, in which I pray and talk to grandma; and French, which I began this year for a school trip to Paris → switching isn’t always easy: I often look for an Arabic word and find only its English equivalent, which makes my relatives in Khartoum laugh; but I’ve found the best way to learn is not memorising but real use in daily situations, however many mistakes → so I translate for mum on visits to dad’s family and do a weekly exchange with a Jordanian student — she corrects my pronunciation, I her grammar; these taught me communication is not just words but listening and respect → I aspire to interpret for a humanitarian organisation serving refugees and newcomers; “asked for my parents’ most precious gift, I’d say: two languages, and a heart that understands through them”.', find: ['الَّتِي أَدْرُسُ بِهَا', 'مِمَّا يُضْحِكُ', 'لَيْسَتِ الحِفْظَ، بَلِ', 'لَوْ سُئِلْتُ … لَقُلْتُ'], notes: 'Full-mark model: three relative clauses with returning pronouns (bihā, -hā), lā … illā, mimmā, laysa … bal with verbal nouns (ḥifẓ, istiʿmāl, iṣghāʾ, iḥtirām), ṣirtu + present, a passive law suʾiltu … la-qultu and the dual (lughatāni, bihimā).' },
      { which: 'ب', level: 'Full', subtitle: 'will machines replace languages?', text: Q3B_FULL, en: 'A few years ago tourists carried heavy paper dictionaries; today pointing a phone at a sign is enough to read it in their own language in a second — will machine translation make learning languages unnecessary? → no doubt it is very useful, helping travellers, patients and refugees communicate in hard moments, and it is fast, free and improving every year; yet it translates words, not meanings — it can’t grasp a joke, a proverb or a tone of voice → I saw this when a classmate used an app to send Eid greetings to her Arab neighbour: the message came out strange and the neighbour laughed, though my classmate was very embarrassed; after I taught her the right phrase, she greeted her with it every Eid → the machine is an excellent tool, but it can’t build friendship or trust between people of two cultures; “if we truly want to understand people, we will still need to learn their languages and cultures”.', find: ['أَمَّا اليَوْمَ فَيَكْفِيهِ', 'لَا شَكَّ أَنَّ', 'الكَلِمَاتِ لَا المَعَانِيَ', 'إِذَا أَرَدْنَا … فَسَنَظَلُّ'], notes: 'Full-mark model for the Stretch title: a then-and-now hook, a rhetorical question, lā shakka anna, kamā anna, wa-maʿa dhālika fa-innahā, idh + lā … wa-lā, a narrated example with baʿda an, and idhā … fa-sa-naẓallu.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, with a full sentence in box 8.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: a verbal noun and a relative clause.' },
    { route: 'develop', text: 'Q3: four paragraphs, mostly in the present tense, with a future ending.' },
    { route: 'stretch', text: 'Q3: laysa … bal, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
