'use strict';
/* Exam-practice data · TE-L01 · Countries, Nationalities and Languages (nisba adjectives; gender and plural agreement; prepositions of place). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'E', n: 1, short: 'Countries, Nationalities and Languages', arShort: 'البُلْدَانُ وَالجِنْسِيَّاتُ وَاللُّغَاتُ', fileTitle: 'Countries_Nationalities_and_Languages', title: 'Countries, Nationalities and Languages', ar: 'البُلْدَانُ وَالجِنْسِيَّاتُ وَاللُّغَاتُ', icon: 'FaEarthAfrica', grammar: 'nisba adjectives (miṣr → miṣriyy / miṣriyya / miṣriyyūn); gender and plural agreement; prepositions of place (fī shamāli, bayna, qurba); wulidtu fī, aṣlī min' };

const speak = {
  ...base,
  focus: 'Paper 3 practice in breakout rooms: say where you and your family are from, give nationalities with the correct nisba ending (m. / f. / pl.), locate countries with prepositions (فِي شَمَالِ · بَيْنَ · قُرْبَ) and talk about the languages you speak, with whom and why.',
  words: [
    w(1, 'بَلَدٌ', 'a country', [['countries', 'بُلْدَانٌ'], ['capital', 'عَاصِمَةٌ']], { tag: 'noun' }),
    w(2, 'جِنْسِيَّةٌ', 'nationality', [['nationalities', 'جِنْسِيَّاتٌ'], ['I hold', 'أَحْمِلُ الجِنْسِيَّةَ …']], { tag: 'noun' }),
    w(3, 'مِصْرِيٌّ', 'Egyptian (m.)', [['f.', 'مِصْرِيَّةٌ'], ['pl.', 'مِصْرِيُّونَ']], { tag: 'nisba' }),
    w(4, 'بَرِيطَانِيٌّ', 'British (m.)', [['f.', 'بَرِيطَانِيَّةٌ'], ['pl.', 'بَرِيطَانِيُّونَ']], { tag: 'nisba' }),
    w(5, 'مَغْرِبِيٌّ', 'Moroccan (m.)', [['f.', 'مَغْرِبِيَّةٌ'], ['pl.', 'مَغَارِبَةٌ']], { tag: 'nisba' }),
    w(6, 'لُغَةٌ', 'a language', [['languages', 'لُغَاتٌ'], ['mother tongue', 'اللُّغَةُ الأُمُّ']], { tag: 'noun' }),
    w(7, 'العَرَبِيَّةُ · الإِنْجْلِيزِيَّةُ', 'Arabic · English', [['French', 'الفَرَنْسِيَّةُ'], ['Spanish', 'الإِسْبَانِيَّةُ']], { tag: 'languages' }),
    w(8, 'وُلِدْتُ فِي …', 'I was born in …', [['she was born', 'وُلِدَتْ'], ['I grew up', 'نَشَأْتُ']], { tag: 'verb' }),
    w(9, 'أَصْلِي مِنْ …', 'my origin is from …', [['my family’s origin', 'أَصْلُ أُسْرَتِي'], ['roots', 'جُذُورٌ']], { tag: 'phrase' }),
    w(10, 'يَقَعُ · تَقَعُ فِي …', 'is located in (m. · f.)', [['in the north of', 'فِي شَمَالِ'], ['between', 'بَيْنَ']], { tag: 'place' }),
    w(11, 'أَتَكَلَّمُ بِطَلَاقَةٍ', 'I speak fluently', [['a little', 'قَلِيلًا'], ['I understand', 'أَفْهَمُ']], { tag: 'verb' }),
    w(12, 'قَارَّةٌ', 'a continent', [['continents', 'قَارَّاتٌ'], ['Africa · Asia', 'إِفْرِيقْيَا · آسْيَا']], { tag: 'noun' }),
  ],
  words1: { eyebrow: 'Language bank · countries and nationalities', title: 'Country → nationality (nisba)', ar: 'البَلَدُ وَالجِنْسِيَّةُ', notes: 'LANGUAGE BANK (2 min) — the nisba: drop al- and the final vowel, add ـِيٌّ (m.), ـِيَّةٌ (f.), ـِيُّونَ (pl.): مِصْرُ → مِصْرِيٌّ · مِصْرِيَّةٌ · مِصْرِيُّونَ. Watch irregular plurals: مَغَارِبَةٌ. Drill: انْطِقْ / قُولِي الجِنْسِيَّةَ لِأُمِّكَ وَأَبِيكَ.' },
  words2: { eyebrow: 'Language bank · places and languages', title: 'Where it is · what we speak', ar: 'المَوْقِعُ وَاللُّغَاتُ', notes: 'LANGUAGE BANK (2 min) — yaqaʿu (m. country) vs taqaʿu (f. country / city): يَقَعُ المَغْرِبُ · تَقَعُ مِصْرُ. Languages are feminine (al-ʿarabiyya) — so "my favourite language" is لُغَتِي المُفَضَّلَةُ.' },
  checkCore: 'gave a nationality and a language with correct agreement',
  checkDevelop: 'located a country with a preposition and said who they speak each language with',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'an international summer camp', title: 'Role play A — Registering at an international camp', ar: 'فِي مُخَيَّمٍ دُوَلِيٍّ', you: 'a new camper', them: 'the camp organiser',
      tasks: [
        { core: true, ex: 'أَهْلًا وَسَهْلًا! مَا اسْمُكَ؟ وَمِنْ أَيْنَ أَنْتَ؟', task: 'Say your name and where you are from.', help: 'اسْمِي … وَأَنَا مِنْ …', model: 'اسْمِي عُمَرُ، وَأَنَا مِنْ بَرِيطَانْيَا.', modelEn: 'My name is Omar, and I’m from Britain.' },
        { core: true, ex: 'مَا جِنْسِيَّتُكَ؟', task: 'Give your nationality.', help: 'أَنَا … (nisba)', model: 'أَنَا بَرِيطَانِيٌّ، وَأَصْلِي مِنَ المَغْرِبِ.', modelEn: 'I’m British, and my origin is Moroccan.' },
        { core: true, ex: 'مَا اللُّغَاتُ الَّتِي تَتَكَلَّمُهَا؟', task: 'Name two languages.', help: 'أَتَكَلَّمُ … وَ…', model: 'أَتَكَلَّمُ الإِنْجْلِيزِيَّةَ وَالعَرَبِيَّةَ.', modelEn: 'I speak English and Arabic.' },
        { core: true, ex: 'مُمْتَازٌ. عِنْدَنَا طُلَّابٌ مِنْ عِشْرِينَ بَلَدًا.', task: 'Ask where most students are from.', help: 'مِنْ أَيْنَ …؟', model: 'مِنْ أَيْنَ أَكْثَرُ الطُّلَّابِ؟', modelEn: 'Where are most of the students from?' },
        { core: true, unexpected: true, ex: 'مِنْ فَرَنْسَا وَمِصْرَ. أَيْنَ يَقَعُ المَغْرِبُ؟', task: 'Answer the unexpected question.', help: 'يَقَعُ المَغْرِبُ فِي …', model: 'يَقَعُ المَغْرِبُ فِي شَمَالِ إِفْرِيقْيَا.', modelEn: 'Morocco is in North Africa.' },
      ],
      girl: 'اسْمُكِ · أَنْتِ · جِنْسِيَّتُكِ · تَتَكَلَّمِينَهَا · بَرِيطَانِيَّةٌ',
      notes: 'Core: min ayna, the nisba (barīṭāniyy — f. barīṭāniyya), aṣlī min al-maghrib, two languages with wa-, yaqaʿu fī shamāli.',
    },
    {
      id: 'B', level: 'Core+', setting: 'the first day at school', title: 'Role play B — A new classmate from abroad', ar: 'زَمِيلٌ جَدِيدٌ مِنَ الخَارِجِ', you: 'a student', them: 'a new classmate who has just arrived',
      tasks: [
        { core: true, ex: 'مَرْحَبًا، أَنَا جَدِيدٌ هُنَا. هَلْ أَنْتَ إِنْجْلِيزِيٌّ؟', task: 'Say your nationality and origin.', help: 'أَنَا … لٰكِنَّ أَصْلَ أُسْرَتِي مِنْ …', model: 'أَنَا بَرِيطَانِيٌّ، لٰكِنَّ أَصْلَ أُسْرَتِي مِنَ السُّودَانِ.', modelEn: 'I’m British, but my family is originally from Sudan.' },
        { core: true, ex: 'أَيْنَ تَقَعُ السُّودَانُ؟', task: 'Locate the country with a preposition.', help: 'تَقَعُ … فِي … جَنُوبَ …', model: 'تَقَعُ السُّودَانُ فِي إِفْرِيقْيَا، جَنُوبَ مِصْرَ.', modelEn: 'Sudan is in Africa, south of Egypt.' },
        { ex: 'مَا اللُّغَةُ الَّتِي تَتَكَلَّمُهَا فِي البَيْتِ؟', task: 'Say which language and with whom.', help: 'أَتَكَلَّمُ … مَعَ … وَ… مَعَ …', model: 'أَتَكَلَّمُ العَرَبِيَّةَ مَعَ وَالِدَيَّ، وَالإِنْجْلِيزِيَّةَ مَعَ إِخْوَتِي.', modelEn: 'Arabic with my parents, and English with my siblings.' },
        { ex: 'أَنَا مِنْ إِيطَالْيَا.', task: 'ASK two questions about Italy.', help: 'مَا عَاصِمَةُ …؟ وَهَلْ …؟', model: 'مَا عَاصِمَةُ إِيطَالْيَا؟ وَهَلْ تَتَكَلَّمُ الإِنْجْلِيزِيَّةَ جَيِّدًا؟', modelEn: 'What is the capital of Italy? And do you speak English well?' },
        { unexpected: true, ex: 'رُومَا. أَيُّ بَلَدٍ تُرِيدُ أَنْ تَزُورَ؟', task: 'Answer the unexpected question with a reason.', help: 'أُرِيدُ أَنْ أَزُورَ … لِأَنَّ …', model: 'أُرِيدُ أَنْ أَزُورَ اليَابَانَ، لِأَنَّ ثَقَافَتَهَا مُخْتَلِفَةٌ جِدًّا.', modelEn: 'I want to visit Japan, because its culture is very different.' },
      ],
      girl: 'أَنْتِ إِنْجْلِيزِيَّةٌ · تَتَكَلَّمِينَهَا · تُرِيدِينَ · أَنَا جَدِيدَةٌ',
      notes: 'Core+: lākinna + aṣl, taqaʿu (Sudan treated as f.) + janūba, maʿa + family dual (wālidayya), the CANDIDATE asks two questions (mā ʿāṣimatu …? hal …?), urīdu an azūra + li-anna.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a radio programme', title: 'Role play C — Families with many languages', ar: 'أُسَرٌ مُتَعَدِّدَةُ اللُّغَاتِ', you: 'a teenage guest', them: 'the presenter of a youth radio show',
      tasks: [
        { ex: 'حَدِّثْنَا عَنْ أَصْلِ أُسْرَتِكَ.', task: 'Give origins of different family members (nisba agreement).', help: 'أَبِي … وَأُمِّي … أَمَّا أَنَا فَـ…', model: 'أَبِي مِصْرِيٌّ، وَأُمِّي لُبْنَانِيَّةٌ، أَمَّا أَنَا فَوُلِدْتُ فِي لَنْدَنَ، وَأَحْمِلُ الجِنْسِيَّةَ البَرِيطَانِيَّةَ.', modelEn: 'My dad is Egyptian, my mum Lebanese, and I was born in London with British nationality.' },
        { ex: 'وَأَيْنَ يَقَعُ لُبْنَانُ بِالضَّبْطِ؟', task: 'Locate it with two prepositions.', help: 'يَقَعُ … بَيْنَ … وَ… عَلَى …', model: 'يَقَعُ لُبْنَانُ فِي غَرْبِ آسْيَا، بَيْنَ سُورِيَا وَفِلَسْطِينَ، عَلَى سَاحِلِ البَحْرِ الأَبْيَضِ المُتَوَسِّطِ.', modelEn: 'Lebanon is in western Asia, between Syria and Palestine, on the Mediterranean coast.' },
        { ex: 'كَمْ لُغَةً تَتَكَلَّمُونَ فِي البَيْتِ؟', task: 'Explain who speaks what.', help: 'نَتَكَلَّمُ … ؛ فَمَعَ … وَمَعَ …', model: 'نَتَكَلَّمُ ثَلَاثَ لُغَاتٍ؛ فَمَعَ جَدَّتِي نَتَكَلَّمُ العَرَبِيَّةَ، وَمَعَ خَالَتِي الفَرَنْسِيَّةَ، وَبَيْنَنَا الإِنْجْلِيزِيَّةَ.', modelEn: 'Three: Arabic with grandma, French with my aunt, English among ourselves.' },
        { ex: 'هَلْ كَانَ ذٰلِكَ صَعْبًا عِنْدَمَا كُنْتَ صَغِيرًا؟', task: 'Contrast past and present.', help: 'كُنْتُ … أَمَّا الآنَ فَـ…', model: 'نَعَمْ، كُنْتُ أَخْلِطُ بَيْنَ اللُّغَاتِ، أَمَّا الآنَ فَأَنْتَقِلُ مِنْ لُغَةٍ إِلَى أُخْرَى بِسُهُولَةٍ.', modelEn: 'Yes, I used to mix them up; now I switch easily between languages.' },
        { unexpected: true, ex: 'هَلْ سَتُعَلِّمُ أَوْلَادَكَ هٰذِهِ اللُّغَاتِ؟', task: 'Answer the unexpected question (future + reason).', help: 'نَعَمْ، سَأُعَلِّمُهُمْ … لِأَنَّ …', model: 'نَعَمْ، سَأُعَلِّمُهُمُ العَرَبِيَّةَ أَوَّلًا، لِأَنَّهَا تَرْبِطُهُمْ بِدِينِهِمْ وَأَجْدَادِهِمْ.', modelEn: 'Yes — Arabic first, because it connects them to their faith and grandparents.' },
      ],
      girl: 'حَدِّثِينَا · أُسْرَتِكِ · كُنْتِ صَغِيرَةً · سَتُعَلِّمِينَ · أَوْلَادَكِ',
      notes: 'Develop: nisba agreement across a family (miṣriyy / lubnāniyya), ammā … fa-, bayna … wa- and ʿalā sāḥili, fa-maʿa … wa-maʿa, kuntu + present vs ammā al-āna fa-, sa- + attached pronoun.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a formal interview', title: 'Role play D — Youth ambassador interview', ar: 'مُقَابَلَةُ سَفِيرِ الشَّبَابِ', you: 'a candidate for an international youth programme', them: 'the head of the selection panel',
      tasks: [
        { ex: 'عَرِّفْنَا بِنَفْسِكَ وَبِهُوِيَّتِكَ.', task: 'Present a mixed identity formally.', help: 'يَسُرُّنِي أَنْ … وُلِدْتُ … غَيْرَ أَنَّ …', model: 'يَسُرُّنِي أَنْ أُقَدِّمَ نَفْسِي: وُلِدْتُ فِي مَانْشِسْتَرَ لِأَبٍ سُودَانِيٍّ وَأُمٍّ صُومَالِيَّةٍ، فَأَنَا بَرِيطَانِيٌّ، غَيْرَ أَنَّ جُذُورِي إِفْرِيقِيَّةٌ.', modelEn: 'I was born in Manchester to a Sudanese father and a Somali mother: British, with African roots.' },
        { ex: 'مَا قِيمَةُ اللُّغَاتِ فِي رَأْيِكَ؟', task: 'Give a reasoned opinion with linkers.', help: 'أَرَى أَنَّ … أَوَّلًا … بِالإِضَافَةِ إِلَى ذٰلِكَ …', model: 'أَرَى أَنَّ اللُّغَةَ جِسْرٌ؛ أَوَّلًا، تُمَكِّنُنَا مِنَ التَّوَاصُلِ، وَبِالإِضَافَةِ إِلَى ذٰلِكَ، تُتِيحُ لَنَا أَنْ نَفْهَمَ طَرِيقَةَ تَفْكِيرِ الآخَرِينَ.', modelEn: 'Language is a bridge: it lets us communicate and also understand how others think.' },
        { ex: 'هَلْ وَاجَهْتَ صُعُوبَةً بِسَبَبِ أَصْلِكَ؟', task: 'Narrate a past experience and its result.', help: 'عِنْدَمَا … كَانَ … فَـ…', model: 'عِنْدَمَا كُنْتُ فِي الابْتِدَائِيَّةِ، كَانَ بَعْضُ الزُّمَلَاءِ يَسْخَرُونَ مِنْ اسْمِي، فَقَدَّمْتُ عَرْضًا عَنْ ثَقَافَتِي، وَمُنْذُ ذٰلِكَ اليَوْمِ تَغَيَّرَتْ نَظْرَتُهُمْ.', modelEn: 'In primary some classmates mocked my name, so I gave a presentation on my culture — and their view changed from that day.' },
        { ex: 'أَلَا تَخْشَى أَنْ تَضِيعَ لُغَتُكَ الأُمُّ؟', task: 'Concede and balance.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ … لِذٰلِكَ …', model: 'صَحِيحٌ أَنَّ الإِنْجْلِيزِيَّةَ تُسَيْطِرُ عَلَى حَيَاتِي اليَوْمِيَّةِ، غَيْرَ أَنَّنِي أَقْرَأُ بِالعَرَبِيَّةِ كُلَّ يَوْمٍ؛ لِذٰلِكَ لَا أَخْشَى ذٰلِكَ.', modelEn: 'English dominates my daily life, but I read in Arabic every day, so I don’t fear it.' },
        { unexpected: true, ex: 'لَوْ مَثَّلْتَ بَلَدَكَ فِي مُؤْتَمَرٍ دُوَلِيٍّ، مَاذَا تَقُولُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ مَثَّلْتُ …، لَقُلْتُ إِنَّ …', model: 'لَوْ مَثَّلْتُ بَلَدِي، لَقُلْتُ إِنَّ تَعَدُّدَ الجِنْسِيَّاتِ وَاللُّغَاتِ لَيْسَ مُشْكِلَةً، بَلْ هُوَ قُوَّةٌ تَجْمَعُ النَّاسَ.', modelEn: 'I’d say that many nationalities and languages are not a problem but a strength that unites people.' },
      ],
      girl: 'عَرِّفِينَا · بِنَفْسِكِ · وَاجَهْتِ · أَصْلِكِ · تَخْشَيْنَ · مَثَّلْتِ · بَرِيطَانِيَّةٌ',
      notes: 'Stretch: formal register (yasurrunī an uqaddima nafsī), li-abin sūdāniyyin wa-ummin ṣūmāliyyatin (nisba in the genitive), arā anna + linkers, kāna + present … fa- … mundhu, a concession with li-dhālika, law … la-qultu inna + laysa … bal.',
      modelFoot: 'Stretch: identity, nisba agreement in every case, narrated experience, a concession and law … la- — all in formal Arabic.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَنَا وَبَلَدِي', aim: 'one full sentence per question',
      qs: [
        { q: 'مِنْ أَيْنَ أَنْتَ؟', en: 'Where are you from?', start: 'أَنَا مِنْ …', model: 'أَنَا مِنْ بَرِيطَانْيَا، وَأَصْلِي مِنْ بَاكِسْتَانَ.', modelEn: 'I’m from Britain, originally from Pakistan.' },
        { q: 'مَا جِنْسِيَّتُكَ؟', en: 'What is your nationality?', start: 'أَنَا …', model: 'أَنَا بَرِيطَانِيٌّ.', modelEn: 'I’m British.' },
        { q: 'أَيْنَ وُلِدْتَ؟', en: 'Where were you born?', start: 'وُلِدْتُ فِي …', model: 'وُلِدْتُ فِي مَدِينَةِ لِيدْزَ فِي شَمَالِ إِنْجِلْتِرَا.', modelEn: 'In Leeds, in the north of England.' },
        { q: 'كَمْ لُغَةً تَتَكَلَّمُ؟', en: 'How many languages do you speak?', start: 'أَتَكَلَّمُ … لُغَاتٍ: …', model: 'أَتَكَلَّمُ ثَلَاثَ لُغَاتٍ: الإِنْجْلِيزِيَّةَ وَالأُرْدِيَّةَ وَالعَرَبِيَّةَ.', modelEn: 'Three: English, Urdu and Arabic.' },
        { q: 'مَا لُغَتُكَ المُفَضَّلَةُ؟', en: 'What is your favourite language?', start: 'لُغَتِي المُفَضَّلَةُ … لِأَنَّ …', model: 'لُغَتِيَ المُفَضَّلَةُ العَرَبِيَّةُ، لِأَنَّهَا جَمِيلَةٌ.', modelEn: 'Arabic, because it’s beautiful.' },
      ],
      foot: 'Core: one full sentence for every question — check the nisba ending (m. ـِيٌّ / f. ـِيَّةٌ). If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + correct nisba = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'أُسْرَتِي وَلُغَاتُهَا', aim: 'two or three sentences, with a location, a reason and a time frame',
      qs: [
        { q: 'صِفْ بَلَدَ أُسْرَتِكَ.', en: 'Describe your family’s country.', start: 'يَقَعُ … فِي … وَعَاصِمَتُهُ … وَفِيهِ …', model: 'يَقَعُ اليَمَنُ فِي جَنُوبِ الجَزِيرَةِ العَرَبِيَّةِ، وَعَاصِمَتُهُ صَنْعَاءُ، وَفِيهِ جِبَالٌ عَالِيَةٌ وَمُدُنٌ قَدِيمَةٌ جِدًّا.', modelEn: 'Yemen is in the south of the Arabian Peninsula; its capital is Sanaa, with high mountains and very old cities.' },
        { q: 'مَعَ مَنْ تَتَكَلَّمُ كُلَّ لُغَةٍ؟', en: 'Who do you speak each language with?', start: 'أَتَكَلَّمُ … مَعَ … أَمَّا … فَـ…', model: 'أَتَكَلَّمُ الصُّومَالِيَّةَ مَعَ جَدِّي، أَمَّا مَعَ أَصْدِقَائِي فَأَتَكَلَّمُ الإِنْجْلِيزِيَّةَ دَائِمًا.', modelEn: 'Somali with my grandpa; with friends always English.' },
        { q: 'مَتَى بَدَأْتَ تَتَعَلَّمُ العَرَبِيَّةَ؟', en: 'When did you start learning Arabic?', start: 'بَدَأْتُ … عِنْدَمَا كُنْتُ … وَالآنَ …', model: 'بَدَأْتُ أَتَعَلَّمُهَا عِنْدَمَا كُنْتُ فِي السَّادِسَةِ فِي المَسْجِدِ، وَالآنَ أَدْرُسُهَا فِي المَدْرَسَةِ أَيْضًا.', modelEn: 'At six, at the mosque; now I study it at school too.' },
        { q: 'هَلْ زُرْتَ بَلَدًا عَرَبِيًّا؟', en: 'Have you visited an Arab country?', start: 'نَعَمْ، زُرْتُ … وَتَكَلَّمْتُ …', model: 'نَعَمْ، زُرْتُ الأُرْدُنَّ السَّنَةَ المَاضِيَةَ، وَتَكَلَّمْتُ العَرَبِيَّةَ فِي السُّوقِ لِأَوَّلِ مَرَّةٍ، فَكُنْتُ فَخُورًا جِدًّا.', modelEn: 'Yes, Jordan last year — I spoke Arabic in the market for the first time and felt very proud.' },
        { q: 'أَيُّ لُغَةٍ سَتَتَعَلَّمُ فِي المُسْتَقْبَلِ؟', en: 'Which language will you learn in future?', start: 'سَأَتَعَلَّمُ … لِأَنَّ …', model: 'سَأَتَعَلَّمُ التُّرْكِيَّةَ، لِأَنَّ تُرْكِيَا بَلَدٌ قَرِيبٌ مِنَ العَالَمِ العَرَبِيِّ، وَأُرِيدُ أَنْ أَدْرُسَ هُنَاكَ.', modelEn: 'Turkish — Turkey is close to the Arab world and I want to study there.' },
      ],
      foot: 'Develop: two or three sentences — a location with a preposition, a reason and a past or future detail.',
      modelFoot: 'Prepositions + nisba + two time frames = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الجِنْسِيَّةُ وَاللُّغَةُ وَالهُوِيَّةُ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ تُحَدِّدُ الجِنْسِيَّةُ هُوِيَّةَ الإِنْسَانِ؟', en: 'Does nationality define a person’s identity?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الجِنْسِيَّةَ تُكْتَبُ فِي جَوَازِ السَّفَرِ، غَيْرَ أَنَّ الهُوِيَّةَ أَوْسَعُ؛ فَهِيَ اللُّغَةُ وَالدِّينُ وَالذِّكْرَيَاتُ.', modelEn: 'Nationality is written in the passport, but identity is wider: language, faith and memories.' },
        { q: 'هَلْ يَجِبُ أَنْ يَتَعَلَّمَ كُلُّ طَالِبٍ لُغَةً ثَانِيَةً؟', en: 'Should every student learn a second language?', start: 'أَرَى أَنَّ … لِأَنَّ … مِمَّا …', model: 'أَرَى أَنَّ ذٰلِكَ ضَرُورِيٌّ، لِأَنَّ العَالَمَ أَصْبَحَ قَرْيَةً صَغِيرَةً، مِمَّا يَجْعَلُ اللُّغَاتِ مَهَارَةً أَسَاسِيَّةً لِلْعَمَلِ.', modelEn: 'Yes — the world is a small village now, making languages a core work skill.' },
        { q: 'كَيْفَ تَغَيَّرَتْ لُغَاتُ أُسْرَتِكَ عَبْرَ الأَجْيَالِ؟', en: 'How have your family’s languages changed over generations?', start: 'كَانَ جَدِّي … أَمَّا أَنَا فَـ…', model: 'كَانَ جَدِّي يَتَكَلَّمُ البَنْغَالِيَّةَ فَقَطْ، وَتَعَلَّمَ أَبِي الإِنْجْلِيزِيَّةَ فِي العَمَلِ، أَمَّا أَنَا فَأَتَكَلَّمُ ثَلَاثَ لُغَاتٍ.', modelEn: 'Grandpa spoke only Bengali, dad learnt English at work, and I speak three languages.' },
        { q: 'مَا الصُّعُوبَاتُ الَّتِي يُوَاجِهُهَا مَنْ يَعِيشُ بَيْنَ ثَقَافَتَيْنِ؟', en: 'What difficulties face someone living between two cultures?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، قَدْ يَشْعُرُ بِأَنَّهُ غَرِيبٌ فِي البَلَدَيْنِ، وَمِنْ نَاحِيَةٍ أُخْرَى، يَمْلِكُ مَفَاتِيحَ عَالَمَيْنِ بَدَلًا مِنْ عَالَمٍ وَاحِدٍ.', modelEn: 'They may feel a stranger in both countries, yet hold the keys to two worlds instead of one.' },
        { q: 'لَوِ اسْتَطَعْتَ أَنْ تَتَكَلَّمَ كُلَّ لُغَاتِ العَالَمِ، مَاذَا تَفْعَلُ؟', en: 'If you could speak every language in the world, what would you do?', start: 'لَوِ اسْتَطَعْتُ …، لَـ…', model: 'لَوِ اسْتَطَعْتُ ذٰلِكَ، لَسَافَرْتُ إِلَى كُلِّ القَارَّاتِ، وَلَعَمِلْتُ مُتَرْجِمًا فِي الأُمَمِ المُتَّحِدَةِ لِأُسَاعِدَ عَلَى حَلِّ النِّزَاعَاتِ.', modelEn: 'I’d travel every continent and work as a UN interpreter to help resolve conflicts.' },
      ],
      foot: 'Stretch: a concession, an opinion with mimmā, change across generations, a balanced view and law … la-.',
      modelFoot: 'Stretch: ṣaḥīḥun anna … ghayra anna, the passive (tuktabu), mimmā yajʿalu, kāna … ammā … fa- and law … la- — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I said where I am from and my nationality.' },
    { route: 'core', text: 'I named the languages I speak.' },
    { route: 'develop', text: 'I used the nisba correctly for m. and f. family members.' },
    { route: 'develop', text: 'I located a country with a preposition (fī shamāli, bayna, qurba).' },
    { route: 'stretch', text: 'I discussed identity with a concession or law … la-.' },
  ],
};
speak.RP[2].tasks[0].help = 'أَبِي … وَأُمِّي … أَمَّا أَنَا فَوُلِدْتُ …';
speak.RP[2].tasks[2].help = 'نَتَكَلَّمُ … ؛ فَمَعَ جَدَّتِي … وَمَعَ …';
speak.RP[2].tasks[3].help = 'كُنْتُ … أَمَّا الآنَ فَأَنْتَقِلُ …';
speak.RP[3].tasks[2].help = 'عِنْدَمَا … كَانَ … فَقَدَّمْتُ …';
speak.RP[3].tasks[4].help = 'لَوْ مَثَّلْتُ …، لَقُلْتُ إِنَّ …';
speak.CONV[1].qs[1].start = 'أَتَكَلَّمُ … مَعَ … أَمَّا مَعَ أَصْدِقَائِي فَأَتَكَلَّمُ …';
speak.CONV[2].qs[2].start = 'كَانَ جَدِّي … أَمَّا أَنَا فَأَتَكَلَّمُ …';
speak.CONV[2].qs[4].start = 'لَوِ اسْتَطَعْتُ …، لَسَافَرْتُ …';

const Q2_CORE = `مَرْحَبًا يَا كَرِيمُ،
اسْمِي عُمَرُ، وَعُمْرِي خَمْسَ عَشْرَةَ سَنَةً. وُلِدْتُ فِي مَدِينَةِ بِرْمِنْغْهَامَ فِي بَرِيطَانْيَا، لٰكِنَّ أَصْلَ أُسْرَتِي مِنَ المَغْرِبِ. أَنَا بَرِيطَانِيٌّ وَمَغْرِبِيٌّ أَيْضًا! يَقَعُ المَغْرِبُ فِي شَمَالِ إِفْرِيقْيَا، وَعَاصِمَتُهُ الرِّبَاطُ. أَتَكَلَّمُ ثَلَاثَ لُغَاتٍ: الإِنْجْلِيزِيَّةَ وَالعَرَبِيَّةَ وَالفَرَنْسِيَّةَ قَلِيلًا. فِي البَيْتِ أَتَكَلَّمُ العَرَبِيَّةَ مَعَ جَدَّتِي، وَفِي المَدْرَسَةِ أَتَكَلَّمُ الإِنْجْلِيزِيَّةَ. لُغَتِيَ المُفَضَّلَةُ العَرَبِيَّةُ، لِأَنَّهَا لُغَةُ القُرْآنِ وَلُغَةُ عَائِلَتِي. فِي المُسْتَقْبَلِ سَأَتَعَلَّمُ الإِسْبَانِيَّةَ. وَأَنْتَ، كَمْ لُغَةً تَتَكَلَّمُ؟
مَعَ السَّلَامَةِ،
عُمَرُ`;
const Q2_FULL = `عَزِيزِي كَرِيمُ،
يَسُرُّنِي أَنْ أَكُونَ صَدِيقَكَ بِالمُرَاسَلَةِ! اسْمِي عُمَرُ، وُلِدْتُ وَنَشَأْتُ فِي بِرْمِنْغْهَامَ، غَيْرَ أَنَّ جُذُورَ أُسْرَتِي مَغْرِبِيَّةٌ؛ فَأَنَا أَحْمِلُ الجِنْسِيَّتَيْنِ البَرِيطَانِيَّةَ وَالمَغْرِبِيَّةَ. يَقَعُ المَغْرِبُ فِي أَقْصَى شَمَالِ غَرْبِ إِفْرِيقْيَا، وَلَا يَفْصِلُهُ عَنْ إِسْبَانْيَا إِلَّا مَضِيقٌ صَغِيرٌ. أَمَّا اللُّغَاتُ، فَأَتَكَلَّمُ الإِنْجْلِيزِيَّةَ بِطَلَاقَةٍ، وَالعَرَبِيَّةَ مَعَ جَدَّتِي الَّتِي تَسْكُنُ مَعَنَا، وَأَفْهَمُ الأَمَازِيغِيَّةَ قَلِيلًا، وَهِيَ لُغَةُ جَدِّي الأَصْلِيَّةُ. أُحِبُّ العَرَبِيَّةَ أَكْثَرَ مِنْ غَيْرِهَا، لِأَنَّهَا تَرْبِطُنِي بِدِينِي وَبِأَهْلِي. وَإِذَا سَنَحَتْ لِيَ الفُرْصَةُ، فَسَأَتَعَلَّمُ الإِسْبَانِيَّةَ، لِأَنَّ جِيرَانَنَا فِي الشَّمَالِ يَتَكَلَّمُونَهَا. وَأَنْتَ، مَا اللُّغَاتُ الَّتِي تَتَكَلَّمُهَا فِي بَيْتِكَ؟
مَعَ أَطْيَبِ التَّحِيَّاتِ،
عُمَرُ`;
const Q3A_CORE = `اسْمِي عُمَرُ، وَأَنَا بَرِيطَانِيٌّ مِنْ أَصْلٍ مَغْرِبِيٍّ. وُلِدْتُ فِي مَدِينَةِ بِرْمِنْغْهَامَ فِي وَسَطِ إِنْجِلْتِرَا، وَأَسْكُنُ فِيهَا مَعَ أُسْرَتِي. أَبِي مَغْرِبِيٌّ، وَأُمِّي مَغْرِبِيَّةٌ، وَجَدَّتِي تَسْكُنُ مَعَنَا.
يَقَعُ المَغْرِبُ فِي شَمَالِ إِفْرِيقْيَا، قُرْبَ إِسْبَانْيَا. عَاصِمَتُهُ الرِّبَاطُ، وَأَكْبَرُ مَدِينَةٍ فِيهِ الدَّارُ البَيْضَاءُ. فِيهِ جِبَالٌ عَالِيَةٌ وَشَوَاطِئُ جَمِيلَةٌ. نُسَافِرُ إِلَى هُنَاكَ كُلَّ صَيْفٍ لِنَزُورَ أَقَارِبَنَا فِي مَدِينَةِ فَاسَ، وَهِيَ مَدِينَةٌ قَدِيمَةٌ جِدًّا.
أَتَكَلَّمُ ثَلَاثَ لُغَاتٍ. فِي المَدْرَسَةِ أَتَكَلَّمُ الإِنْجْلِيزِيَّةَ مَعَ أَصْدِقَائِي، وَفِي البَيْتِ أَتَكَلَّمُ العَرَبِيَّةَ مَعَ جَدَّتِي، لِأَنَّهَا لَا تَتَكَلَّمُ الإِنْجْلِيزِيَّةَ. أَدْرُسُ الفَرَنْسِيَّةَ أَيْضًا، وَهِيَ لُغَةٌ مُفِيدَةٌ فِي المَغْرِبِ وَفِي فَرَنْسَا. عِنْدَمَا كُنْتُ صَغِيرًا، كُنْتُ أَتَكَلَّمُ العَرَبِيَّةَ قَلِيلًا فَقَطْ، أَمَّا الآنَ فَأَتَكَلَّمُهَا جَيِّدًا.
فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَتَعَلَّمَ الإِسْبَانِيَّةَ، لِأَنَّهَا لُغَةٌ عَالَمِيَّةٌ، وَلِأَنَّ إِسْبَانْيَا قَرِيبَةٌ مِنَ المَغْرِبِ. لِذٰلِكَ سَأَدْرُسُهَا فِي الجَامِعَةِ إِنْ شَاءَ اللّٰهُ.`;
const Q3A_FULL = `يَسْأَلُنِي النَّاسُ أَحْيَانًا: "مِنْ أَيْنَ أَنْتَ؟"، فَأَبْتَسِمُ، لِأَنَّ الجَوَابَ عِنْدِي لَيْسَ كَلِمَةً وَاحِدَةً. فَأَنَا وُلِدْتُ فِي بِرْمِنْغْهَامَ، وَأَحْمِلُ الجِنْسِيَّةَ البَرِيطَانِيَّةَ، غَيْرَ أَنَّ جُذُورِي تَمْتَدُّ إِلَى قَرْيَةٍ صَغِيرَةٍ فِي جِبَالِ الأَطْلَسِ المَغْرِبِيَّةِ. فَأَبِي مَغْرِبِيٌّ أَمَازِيغِيٌّ، وَأُمِّي مَغْرِبِيَّةٌ عَرَبِيَّةٌ، وَأَنَا خَلِيطٌ جَمِيلٌ مِنْهُمَا.
يَقَعُ المَغْرِبُ فِي أَقْصَى شَمَالِ غَرْبِ إِفْرِيقْيَا، بَيْنَ البَحْرِ الأَبْيَضِ المُتَوَسِّطِ وَالمُحِيطِ الأَطْلَسِيِّ، وَهُوَ بَلَدٌ تَلْتَقِي فِيهِ الثَّقَافَاتُ العَرَبِيَّةُ وَالأَمَازِيغِيَّةُ وَالإِفْرِيقِيَّةُ وَالأُورُوبِّيَّةُ. وَعَاصِمَتُهُ الرِّبَاطُ، أَمَّا أَكْبَرُ مُدُنِهِ فَالدَّارُ البَيْضَاءُ.
وَلَعَلَّ أَجْمَلَ مَا وَرِثْتُهُ مِنْ هٰذَا التَّنَوُّعِ هُوَ اللُّغَاتُ؛ فَأَنَا أُفَكِّرُ بِالإِنْجْلِيزِيَّةِ، وَأُصَلِّي وَأَتَحَدَّثُ مَعَ جَدَّتِي بِالعَرَبِيَّةِ، وَأَتَعَلَّمُ الفَرَنْسِيَّةَ فِي المَدْرَسَةِ. وَمَعَ أَنَّنِي كُنْتُ أَخْجَلُ مِنْ لَهْجَتِي المَغْرِبِيَّةِ فِي صِغَرِي، فَإِنَّنِي أَعْتَزُّ بِهَا اليَوْمَ، وَأَسْتَخْدِمُهَا بِفَخْرٍ كُلَّمَا زُرْتُ أَقَارِبِي.
أَمَّا فِي المُسْتَقْبَلِ، فَأَطْمَحُ إِلَى تَعَلُّمِ الإِسْبَانِيَّةِ، لِكَيْ أَعْمَلَ مُتَرْجِمًا بَيْنَ ضِفَّتَيِ المُتَوَسِّطِ. وَلَوْ سَأَلَنِي أَحَدٌ اليَوْمَ: "مِنْ أَيْنَ أَنْتَ؟"، لَقُلْتُ: "مِنْ بِرْمِنْغْهَامَ وَمِنَ الأَطْلَسِ مَعًا".`;
const Q3B_FULL = `فِي مُدُنِ العَالَمِ الكُبْرَى، يَنْشَأُ مَلَايِينُ الأَطْفَالِ فِي بُيُوتٍ تَتَكَلَّمُ لُغَةً، وَمَدَارِسَ تَتَكَلَّمُ لُغَةً أُخْرَى. فَهَلْ مِنَ المُهِمِّ أَنْ يَحْتَفِظُوا بِلُغَةِ آبَائِهِمْ، أَمْ يَكْفِي أَنْ يُتْقِنُوا لُغَةَ البَلَدِ الَّذِي يَعِيشُونَ فِيهِ؟
مِنْ نَاحِيَةٍ، تَرْبِطُ لُغَةُ الآبَاءِ الطِّفْلَ بِأَجْدَادِهِ وَدِينِهِ وَتَارِيخِهِ، كَمَا أَنَّ تَعَلُّمَ لُغَتَيْنِ مُنْذُ الصِّغَرِ يُقَوِّي الذَّاكِرَةَ وَالتَّرْكِيزَ وَيَفْتَحُ فُرَصَ عَمَلٍ أَكْثَرَ. وَمِنْ نَاحِيَةٍ أُخْرَى، يَشْعُرُ بَعْضُ الأَطْفَالِ بِضَغْطٍ كَبِيرٍ، لِأَنَّهُمْ يَدْرُسُونَ طُولَ الأُسْبُوعِ، ثُمَّ يَذْهَبُونَ إِلَى دُرُوسٍ إِضَافِيَّةٍ يَوْمَ السَّبْتِ.
وَقَدْ عِشْتُ هٰذِهِ التَّجْرِبَةَ بِنَفْسِي؛ فَكُنْتُ أَكْرَهُ دُرُوسَ العَرَبِيَّةِ فِي عُطْلَةِ نِهَايَةِ الأُسْبُوعِ، إِلَى أَنْ زُرْتُ المَغْرِبَ، وَاسْتَطَعْتُ لِأَوَّلِ مَرَّةٍ أَنْ أَتَحَدَّثَ مَعَ جَدِّي دُونَ مُتَرْجِمٍ، فَبَكَى مِنَ الفَرَحِ وَعَانَقَنِي طَوِيلًا. عِنْدَئِذٍ فَهِمْتُ قِيمَةَ تِلْكَ السَّاعَاتِ الطَّوِيلَةِ.
أَرَى أَنَّ لُغَةَ الآبَاءِ كَنْزٌ يَجِبُ أَلَّا نَفْقِدَهُ، غَيْرَ أَنَّ الأُسَرَ يَنْبَغِي أَنْ تُعَلِّمَهَا بِالحُبِّ لَا بِالإِجْبَارِ. فَإِذَا ارْتَبَطَتِ اللُّغَةُ بِالقِصَصِ وَالرِّحْلَاتِ وَالأَلْعَابِ، فَسَيُحِبُّهَا الأَطْفَالُ وَيَحْفَظُونَهَا.`;

const write = {
  ...base,
  focus: 'Paper 4 practice: fill in an international exchange registration form, write an email introducing yourself to a new penfriend (origins, location, languages), and write an extended piece about your country and languages or about keeping your parents’ language.',
  lift: [
    { ar: 'أَنَا بَرِيطَانِيٌّ، لٰكِنَّ أَصْلَ أُسْرَتِي مِنَ المَغْرِبِ', en: 'I am British, but my family is originally from Morocco' },
    { ar: 'يَقَعُ المَغْرِبُ فِي شَمَالِ إِفْرِيقْيَا، قُرْبَ إِسْبَانْيَا', en: 'Morocco is in North Africa, near Spain' },
    { ar: 'أَتَكَلَّمُ العَرَبِيَّةَ مَعَ جَدَّتِي، لِأَنَّهَا …', en: 'I speak Arabic with my grandmother, because she …' },
  ],
  checkTip: 'Check every nisba: m. ـِيٌّ (bārīṭāniyy), f. ـِيَّةٌ (ummī maghribiyya), pl. ـِيُّونَ; yaqaʿu for a masculine country, taqaʿu for a feminine one (Miṣr, Sūriyā, cities); languages take the feminine (al-ʿarabiyya al-jamīla); prepositions of place: fī shamāli, bayna … wa-, qurba.',
  FORM: {
    title: 'International exchange registration form', ar: 'اسْتِمَارَةُ التَّسْجِيلِ فِي بَرْنَامَجِ التَّبَادُلِ الدُّوَلِيِّ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'عُمَرُ بِنْ عَلِيٍّ', modelEn: 'Omar Ben Ali' },
      { core: true, ar: 'الجِنْسِيَّةُ', en: 'Nationality', model: 'بَرِيطَانِيٌّ', modelEn: 'British' },
      { core: true, ar: 'مَكَانُ الوِلَادَةِ', en: 'Place of birth', model: 'بِرْمِنْغْهَامُ', modelEn: 'Birmingham' },
      { core: true, ar: 'أَصْلُ الأُسْرَةِ', en: 'Family origin', model: 'المَغْرِبُ', modelEn: 'Morocco' },
      { core: true, ar: 'اللُّغَةُ الأُمُّ', en: 'Mother tongue', model: 'الإِنْجْلِيزِيَّةُ', modelEn: 'English' },
      { core: true, ar: 'لُغَاتٌ أُخْرَى', en: 'Other languages', model: 'العَرَبِيَّةُ وَالفَرَنْسِيَّةُ', modelEn: 'Arabic and French' },
      { ar: 'البَلَدُ المَطْلُوبُ', en: 'Country you want to go to', model: 'الأُرْدُنُّ', modelEn: 'Jordan' },
      { ar: 'جُمْلَةٌ: لِمَاذَا هٰذَا البَلَدُ؟', en: 'ONE sentence: why this country', model: 'أُرِيدُ أَنْ أُحَسِّنَ لُغَتِيَ العَرَبِيَّةَ، لِأَنَّ النَّاسَ هُنَاكَ يَتَكَلَّمُونَهَا كُلَّ يَوْمٍ.', modelEn: 'I want to improve my Arabic, because people there speak it every day.' },
    ],
    foot: 'One word or a short phrase for each box — a nisba for nationality (barīṭāniyy / barīṭāniyya); the last box is a full sentence with a reason.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. A girl writes بَرِيطَانِيَّةٌ in box 2. Box 4 takes the country (al-maghrib), not the nisba — a common slip.',
  },
  Q2: {
    short: 'an email to a new penfriend', title: 'Question 2: introducing myself to a penfriend', ar: 'رِسَالَةٌ إِلَى صَدِيقٍ جَدِيدٍ',
    task: 'Write an email in Arabic to a new penfriend of about 80–90 words. You must include: • where you were born and your nationality • where your family’s country is and its capital • the languages you speak and with whom • your favourite language and a language you will learn, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Correct nisba endings.', 'Present AND future.', 'About 80–90 words.'],
    phrases: [['وُلِدْتُ فِي … لٰكِنَّ أَصْلَ أُسْرَتِي مِنْ …', 'I was born in … but my family is from …'], ['يَقَعُ … فِي … وَعَاصِمَتُهُ …', '… is in …, and its capital is …'], ['أَتَكَلَّمُ … مَعَ …', 'I speak … with …'], ['فِي المُسْتَقْبَلِ سَأَتَعَلَّمُ …', 'in the future I will learn …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ الجَدِيدِ بِالمُرَاسَلَةِ (٨٠–٩٠ كَلِمَةً).', 'Write to your new penfriend (80–90 words).'],
      ['1', 'أَيْنَ وُلِدْتَ؟ وَمَا جِنْسِيَّتُكَ؟', 'Where you were born; your nationality'],
      ['2', 'أَيْنَ يَقَعُ بَلَدُ أُسْرَتِكَ؟ وَمَا عَاصِمَتُهُ؟', 'Where your family’s country is; its capital'],
      ['3', 'مَا اللُّغَاتُ الَّتِي تَتَكَلَّمُهَا؟ وَمَعَ مَنْ؟', 'The languages you speak, and with whom'],
      ['4', 'مَا لُغَتُكَ المُفَضَّلَةُ؟ وَمَا اللُّغَةُ الَّتِي سَتَتَعَلَّمُهَا؟ وَاسْأَلْ صَدِيقَكَ سُؤَالًا.', 'Favourite language; one you will learn; a question'],
    ],
    qwords: 'أَيْنَ وُلِدْتَ (where were you born — PAST) · مَا جِنْسِيَّتُكَ (nationality — nisba) · مَعَ مَنْ (with whom) · سَتَتَعَلَّمُهَا (you will learn — FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، اسْمِي ______ .', 'Hello …, my name is …'],
      ['1', 'وُلِدْتُ فِي ______ ، وَأَنَا ______ .', 'I was born in …, and I am (nisba).'],
      ['2', 'يَقَعُ ______ فِي ______ ، وَعَاصِمَتُهُ ______ .', '… is in …; its capital is …'],
      ['3', 'أَتَكَلَّمُ ______ مَعَ ______ ، وَ______ مَعَ ______ .', 'I speak … with …, and … with …'],
      ['4', 'لُغَتِيَ المُفَضَّلَةُ ______ . وَسَأَتَعَلَّمُ ______ .', 'My favourite language is … I’ll learn …'],
      ['end', 'وَأَنْتَ، ______ ؟ مَعَ السَّلَامَةِ.', 'And you, …? Goodbye.'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Karim, my name is Omar and I’m fifteen. I was born in Birmingham in Britain, but my family is originally from Morocco. I’m British and Moroccan too! Morocco is in North Africa, and its capital is Rabat. I speak three languages: English, Arabic and a little French. At home I speak Arabic with my grandmother, and at school English. My favourite language is Arabic, because it’s the language of the Qur’an and of my family. In future I’ll learn Spanish. And you, how many languages do you speak? Goodbye, Omar.”',
      find: ['لٰكِنَّ أَصْلَ أُسْرَتِي', 'بَرِيطَانِيٌّ وَمَغْرِبِيٌّ', 'يَقَعُ المَغْرِبُ فِي', 'مَعَ جَدَّتِي'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Karim, I’m delighted to be your penfriend! I’m Omar; I was born and raised in Birmingham, but my family’s roots are Moroccan, so I hold both British and Moroccan nationality. Morocco lies in the far north-west of Africa, separated from Spain only by a narrow strait. As for languages, I speak English fluently, Arabic with my grandmother who lives with us, and understand a little Amazigh, my grandfather’s original language. I love Arabic most, because it connects me to my faith and family. And if I get the chance, I’ll learn Spanish, because our northern neighbours speak it. And you — what languages do you speak at home? Best wishes, Omar.”',
      find: ['غَيْرَ أَنَّ جُذُورَ', 'الجِنْسِيَّتَيْنِ', 'لَا يَفْصِلُهُ … إِلَّا', 'إِذَا سَنَحَتْ … فَسَأَتَعَلَّمُ'],
    },
  },
  Q3: {
    a: { title: 'بَلَدِي وَلُغَاتِي', en: 'My country and my languages', bullets: 'أَيْنَ وُلِدْتَ وَمَا جِنْسِيَّتُكَ · بَلَدُ أُسْرَتِكَ: المَوْقِعُ وَالعَاصِمَةُ · اللُّغَاتُ الَّتِي تَتَكَلَّمُهَا وَمَتَى · لُغَةٌ تُرِيدُ أَنْ تَتَعَلَّمَهَا وَلِمَاذَا', bulletsEn: 'Where you were born and your nationality · your family’s country: location and capital · the languages you speak and when · a language you want to learn and why' },
    b: { title: 'هَلْ مِنَ المُهِمِّ أَنْ نَتَكَلَّمَ لُغَةَ آبَائِنَا؟', en: 'Is it important to speak our parents’ language?', bullets: 'المَوْضُوعُ · الفَوَائِدُ وَالصُّعُوبَاتُ · مِثَالٌ مِنْ تَجْرِبَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · benefits and difficulties · an example from your experience · your opinion' },
    plan: [
      'Me — ismī …; anā barīṭāniyy min aṣlin …; wulidtu fī …; abī … wa-ummī … (nisba m. / f.)',
      'The country — yaqaʿu … fī shamāli …, qurba …; ʿāṣimatuhu …; fīhi jibālun ʿāliya …',
      'Languages — atakallamu … maʿa … wa-… maʿa …; li-annahā …; ʿindamā kuntu ṣaghīran kuntu …',
      'Future — urīdu an ataʿallama … li-annahā …; li-dhālika sa- …; Stretch: maʿa anna … fa-inna, law … la-.',
    ],
    frames: [
      { ar: 'وُلِدْتُ فِي بِرْمِنْغْهَامَ، وَأَنَا بَرِيطَانِيٌّ.', en: 'past + nisba: born in Birmingham; British.' },
      { ar: 'أَتَكَلَّمُ العَرَبِيَّةَ مَعَ جَدَّتِي.', en: 'present: I speak Arabic with my grandma.' },
      { ar: 'سَأَتَعَلَّمُ الإِسْبَانِيَّةَ فِي الجَامِعَةِ.', en: 'future: I’ll learn Spanish at university.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'I’m Omar, British of Moroccan origin, born in Birmingham; dad and mum are Moroccan → Morocco is in North Africa near Spain; capital Rabat, biggest city Casablanca; we visit every summer → three languages: English with friends, Arabic with grandma, French at school; as a child I spoke little Arabic → in future I want to learn Spanish, a world language, at university.', find: ['مِنْ أَصْلٍ مَغْرِبِيٍّ', 'أَبِي مَغْرِبِيٌّ، وَأُمِّي مَغْرِبِيَّةٌ', 'يَقَعُ المَغْرِبُ فِي', 'كُنْتُ أَتَكَلَّمُ'], notes: 'Core model: nisba with m. and f. (maghribiyy / maghribiyya), min aṣlin, yaqaʿu fī shamāli + qurba, maʿa + family, li-annahā, kuntu + present and sa- — four paragraphs, four time markers.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'People sometimes ask “Where are you from?” and I smile, because my answer isn’t one word: I was born in Birmingham and hold British nationality, but my roots reach a small village in Morocco’s Atlas Mountains; dad is Amazigh Moroccan, mum Arab Moroccan, and I’m a lovely mix → Morocco lies in Africa’s far north-west, between the Mediterranean and the Atlantic, where Arab, Amazigh, African and European cultures meet; its capital is Rabat, its largest city Casablanca → perhaps the finest thing I inherited is languages: I think in English, pray and talk with grandma in Arabic, learn French at school; though I was shy of my Moroccan dialect as a child, I’m proud of it today and use it whenever I visit relatives → I aspire to learn Spanish to work as an interpreter across the Mediterranean; “asked today, I’d say: from Birmingham and the Atlas together”.', find: ['لَيْسَ كَلِمَةً وَاحِدَةً', 'تَلْتَقِي فِيهِ الثَّقَافَاتُ', 'مَعَ أَنَّنِي … فَإِنَّنِي', 'لَوْ سَأَلَنِي … لَقُلْتُ'], notes: 'Full-mark model: a hook with direct speech, ghayra anna, a relative clause without allatī (baladun taltaqī fīhi), four nisbas in agreement with al-thaqāfāt, laʿalla, maʿa annanī … fa-innanī, li-kay and law … la-qultu with a circular ending.' },
      { which: 'ب', level: 'Full', subtitle: 'is our parents’ language important?', text: Q3B_FULL, en: 'In the world’s big cities millions of children grow up in homes speaking one language and schools speaking another — should they keep their parents’ language, or is it enough to master the local one? → it connects children to grandparents, faith and history, and two languages from early on strengthen memory and focus and open more job opportunities; yet some children feel great pressure, studying all week then attending extra Saturday classes → I lived this: I hated weekend Arabic lessons until I visited Morocco and spoke with my grandfather without an interpreter for the first time, and he wept with joy and hugged me — then I understood those hours’ value → the parents’ language is a treasure we mustn’t lose, but families should teach it with love, not force; “if it is tied to stories, trips and games, children will love it and keep it”.', find: ['هَلْ … أَمْ يَكْفِي', 'كَمَا أَنَّ', 'إِلَى أَنْ زُرْتُ', 'إِذَا ارْتَبَطَتْ … فَسَيُحِبُّهَا'], notes: 'Full-mark model for the Stretch title: a hal … am question, a balanced view with kamā anna, a narrated turning point (ilā an … ʿindaʾidhin), yajibu allā, bi-l-ḥubbi lā bi-l-ijbār and idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, with a nisba for nationality.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: nisba agreement for m. and f., and a preposition of place.' },
    { route: 'develop', text: 'Q3: four paragraphs: me, the country, languages, the future.' },
    { route: 'stretch', text: 'Q3: a concession (maʿa anna … fa-inna) and a conditional.' },
  ],
};

module.exports = { speak, write };
