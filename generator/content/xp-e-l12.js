'use strict';
/* Exam-practice data · TE-L12 · Topic E Review and Bridge to Final Revision — a full Topic E mock: countries, nationalities and languages, multilingual life, culture and identity,
   customs and hospitality, faiths and places of worship, faith and national celebrations, travel and exchange, comparing cultures, global connections. Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'E', n: 12, short: 'Topic E Mock Exam', arShort: 'امْتِحَانٌ تَجْرِيبِيٌّ', fileTitle: 'Topic_E_Review_and_Bridge_to_Final_Revision', title: 'Topic E Review — mock exam practice', ar: 'مُرَاجَعَةُ المِحْوَرِ الخَامِسِ', icon: 'FaClipboardCheck', grammar: 'all of Topic E: nisba and agreement, verbal nouns and relative clauses, possessives and inna, imperatives and advice, respectful factual language, sequencing and object pronouns, the passive, cause and result, comparatives with baynamā / ammā … fa-, conditionals and balanced opinion' };

const speak = {
  ...base,
  focus: 'A full Paper 3 mock in breakout rooms: four role plays and a mixed topic conversation covering the whole of Topic E — nationalities and languages, identity, hospitality, faith and national celebrations, travel and exchange, comparing cultures with respect, and global connections.',
  words: [
    w(1, 'مِصْرِيٌّ · مِصْرِيَّةٌ · مِصْرِيُّونَ', 'Egyptian (m. · f. · pl.)', [['is located in', 'يَقَعُ / تَقَعُ فِي'], ['in the north of', 'فِي شَمَالِ']], { tag: 'L01' }),
    w(2, 'اللُّغَةُ الَّتِي أَتَكَلَّمُهَا', 'the language (that) I speak', [['learning (v.n.)', 'تَعَلُّمُ'], ['communication', 'التَّوَاصُلُ']], { tag: 'L02' }),
    w(3, 'إِنَّ ثَقَافَتَنَا …', 'indeed our culture …', [['my identity', 'هُوِيَّتِي'], ['for example', 'مَثَلًا']], { tag: 'L03' }),
    w(4, 'اِخْلَعْ · لَا تَرْفُضْ', 'take off! · don’t refuse!', [['f.', 'اِخْلَعِي · لَا تَرْفُضِي'], ['one should', 'يَنْبَغِي أَنْ']], { tag: 'L04' }),
    w(5, 'المَسْجِدُ الَّذِي … · الكَنِيسَةُ الَّتِي …', 'the mosque which … · the church which …', [['next to', 'بِجَانِبِ'], ['I respect', 'أَحْتَرِمُ']], { tag: 'L05' }),
    w(6, 'زُرْنَاهُمْ · اشْتَرَيْتُهَا', 'we visited them · I bought it', [['first … then', 'أَوَّلًا … ثُمَّ'], ['finally', 'أَخِيرًا']], { tag: 'L06' }),
    w(7, 'يُحْتَفَلُ بِهِ', 'it is celebrated', [['flags are raised', 'تُرْفَعُ الأَعْلَامُ'], ['it was made', 'صُنِعَ']], { tag: 'L07' }),
    w(8, 'بِسَبَبِ … مِمَّا …', 'because of … which …', [['so', 'لِذٰلِكَ'], ['as a result', 'نَتِيجَةً لِذٰلِكَ']], { tag: 'L08' }),
    w(9, 'بَيْنَمَا · أَمَّا … فَهُوَ …', 'whereas · as for … it is …', [['bigger than', 'أَكْبَرُ مِنْ'], ['different, not better', 'مُخْتَلِفٌ لَا أَفْضَلُ']], { tag: 'L09' }),
    w(10, 'إِذَا … فَسَأُسَافِرُ', 'if … I will travel', [['on one hand', 'مِنْ نَاحِيَةٍ'], ['on the other', 'وَمِنْ نَاحِيَةٍ أُخْرَى']], { tag: 'L10' }),
    w(11, 'أَوَّلًا · بِالإِضَافَةِ إِلَى ذٰلِكَ', 'firstly · in addition', [['however', 'مَعَ ذٰلِكَ'], ['therefore', 'لِذٰلِكَ']], { tag: 'L11' }),
    w(12, 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it is true that … but …', [['if … would', 'لَوْ كُنْتُ … لَاخْتَرْتُ'], ['not … but', 'لَيْسَ … بَلْ']], { tag: 'top band' }),
  ],
  words1: { eyebrow: 'Language bank · one key structure from each part of Topic E', title: 'Topic E in twelve structures', ar: 'المِحْوَرُ الخَامِسُ فِي اثْنَتَيْ عَشْرَةَ بِنْيَةً', notes: 'LANGUAGE BANK (2 min) — a revision map: each card recalls one lesson (L01–L11). Ask students to say ONE sentence with each structure before the role plays.' },
  words2: { eyebrow: 'Language bank · structures that lift a mark', title: 'Precise, linked, developed, respectful', ar: 'بِنْيَاتٌ تَرْفَعُ الدَّرَجَةَ', notes: 'LANGUAGE BANK (2 min) — top-band answers are precise (nisba, agreement, the passive), linked (awwalan, li-dhālika, maʿa dhālika), developed (a concession and a conditional) and respectful (ghāliban, baʿḍu an-nās, mukhtalif lā afḍal).' },
  checkCore: 'completed every role-play task, including the unexpected one',
  checkDevelop: 'used three Topic E structures accurately and two time frames',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'airport arrivals', title: 'Role play A — Meeting your exchange student', ar: 'اسْتِقْبَالُ طَالِبَةِ التَّبَادُلِ', you: 'a host student in Britain', them: 'an exchange student just arrived from Jordan',
      tasks: [
        { core: true, ex: 'مَرْحَبًا! أَنَا لَمَى مِنْ عَمَّانَ.', task: 'Greet her and say who you are.', help: 'أَهْلًا وَسَهْلًا! أَنَا …', model: 'أَهْلًا وَسَهْلًا يَا لَمَى! أَنَا سُمَيَّةُ، وَأَنَا بَرِيطَانِيَّةٌ.', modelEn: 'Welcome, Lama! I’m Sumaya, and I’m British.' },
        { core: true, ex: 'كَمْ لُغَةً تَتَكَلَّمِينَ؟', task: 'Name your languages.', help: 'أَتَكَلَّمُ …', model: 'أَتَكَلَّمُ الإِنْجْلِيزِيَّةَ وَالعَرَبِيَّةَ.', modelEn: 'English and Arabic.' },
        { core: true, ex: 'جَمِيلٌ! الرِّحْلَةُ كَانَتْ طَوِيلَةً.', task: 'Ask about the journey.', help: 'هَلْ … ؟ كَمْ سَاعَةً …؟', model: 'كَمْ سَاعَةً كَانَتِ الرِّحْلَةُ؟', modelEn: 'How many hours was the flight?' },
        { core: true, ex: 'سِتُّ سَاعَاتٍ. مَاذَا سَنَفْعَلُ اليَوْمَ؟', task: 'Say what you will do (future).', help: 'سَنَذْهَبُ إِلَى … ثُمَّ …', model: 'سَنَذْهَبُ إِلَى البَيْتِ، ثُمَّ نَتَعَشَّى مَعَ أُسْرَتِي.', modelEn: 'We’ll go home, then have dinner with my family.' },
        { core: true, unexpected: true, ex: 'هَلْ أَخْلَعُ حِذَائِي فِي بَيْتِكُمْ؟', task: 'Answer the unexpected question.', help: 'نَعَمْ، … عِنْدَ …', model: 'نَعَمْ، نَخْلَعُ الأَحْذِيَةَ عِنْدَ البَابِ.', modelEn: 'Yes, we take shoes off at the door.' },
      ],
      girl: '(a boy hosting a boy: أَنَا بَرِيطَانِيٌّ · تَتَكَلَّمُ)',
      notes: 'Core: welcome phrases, the nisba (barīṭāniyya), languages (L01–L02), kam sāʿatan …?, sa- + thumma, a house custom (L04).',
    },
    {
      id: 'B', level: 'Core+', setting: 'a friend’s invitation', title: 'Role play B — Invited to Diwali', ar: 'دَعْوَةٌ إِلَى عِيدِ دِيوَالِي', you: 'a student', them: 'a Hindu classmate inviting you to her family’s Diwali celebration',
      tasks: [
        { core: true, ex: 'أَدْعُوكِ إِلَى احْتِفَالِ دِيوَالِي فِي بَيْتِنَا يَوْمَ السَّبْتِ!', task: 'Thank her and accept.', help: 'شُكْرًا … ، بِكُلِّ سُرُورٍ!', model: 'شُكْرًا جَزِيلًا، بِكُلِّ سُرُورٍ!', modelEn: 'Thank you so much — with pleasure!' },
        { core: true, ex: 'سَيَكُونُ هُنَاكَ طَعَامٌ وَأَضْوَاءٌ كَثِيرَةٌ.', task: 'Ask what you should bring.', help: 'مَاذَا …؟', model: 'مَاذَا أُحْضِرُ مَعِي؟', modelEn: 'What should I bring?' },
        { ex: 'حَلَوِيَّاتٍ إِنْ أَرَدْتِ. هَلْ عِنْدَكُمْ عِيدٌ مِثْلُهُ؟', task: 'Compare respectfully with Eid.', help: 'نَعَمْ، عِيدُ … ؛ وَفِيهِ … مِثْلَكُمْ، بَيْنَمَا …', model: 'نَعَمْ، عِيدُ الفِطْرِ؛ وَفِيهِ نَزُورُ الأَقَارِبَ وَنَأْكُلُ الحَلَوِيَّاتِ مِثْلَكُمْ، بَيْنَمَا تُضِيئُونَ أَنْتُمُ المَصَابِيحَ.', modelEn: 'Yes, Eid al-Fitr: we visit relatives and eat sweets like you, whereas you light lamps.' },
        { ex: 'رَائِعٌ! سَتَحْضُرُ جَدَّتِي أَيْضًا.', task: 'ASK about etiquette (two questions).', help: 'كَيْفَ أُحَيِّي …؟ وَهَلْ …؟', model: 'كَيْفَ أُحَيِّي جَدَّتَكِ بِاحْتِرَامٍ؟ وَهَلْ يَجِبُ أَنْ أَخْلَعَ حِذَائِي؟', modelEn: 'How should I greet your grandmother respectfully? And should I take off my shoes?' },
        { unexpected: true, ex: 'تَقُولِينَ "نَمَسْتِي" وَتَضُمِّينَ يَدَيْكِ. لِمَاذَا تُحِبِّينَ أَعْيَادَ الآخَرِينَ؟', task: 'Answer the unexpected question (reason + example).', help: 'لِأَنَّ … ؛ مَثَلًا …', model: 'لِأَنَّهَا تُعَلِّمُنِي أَشْيَاءَ جَدِيدَةً؛ مَثَلًا، تَعَلَّمْتُ أَنَّ الضَّوْءَ فِي دِيوَالِي رَمْزٌ لِلْأَمَلِ.', modelEn: 'They teach me new things — I learnt the light at Diwali symbolises hope.' },
      ],
      girl: '(model is f.; a boy: أَدْعُوكَ · أَرَدْتَ · جَدَّتَكَ · تَقُولُ · تُحِبُّ)',
      notes: 'Core+: courtesy (bi-kulli surūr), a respectful comparison with mithlakum + baynamā (L05–L06, L09), the CANDIDATE asks about etiquette (L04), li-annahā + mathalan + taʿallamtu anna (L03).',
    },
    {
      id: 'C', level: 'Develop', setting: 'a trip report', title: 'Role play C — The school trip to Andalusia', ar: 'رِحْلَةٌ مَدْرَسِيَّةٌ إِلَى الأَنْدَلُسِ', you: 'a student back from Granada and Córdoba', them: 'your History teacher',
      tasks: [
        { ex: 'مَاذَا زُرْتُمْ فِي غَرْنَاطَةَ؟', task: 'Describe a place with the passive.', help: 'زُرْنَا … الَّذِي بُنِيَ فِي …', model: 'زُرْنَا قَصْرَ الحَمْرَاءِ الَّذِي بُنِيَ فِي القَرْنِ الرَّابِعَ عَشَرَ، وَرَأَيْنَا الكِتَابَاتِ العَرَبِيَّةَ عَلَى جُدْرَانِهِ.', modelEn: 'The Alhambra, built in the fourteenth century — we saw the Arabic inscriptions on its walls.' },
        { ex: 'وَفِي قُرْطُبَةَ؟', task: 'Explain with respectful, factual language.', help: 'زُرْنَا … ، وَهُوَ … ؛ كَانَ … ثُمَّ …', model: 'زُرْنَا المَسْجِدَ الكَبِيرَ، وَهُوَ اليَوْمَ كَاتِدْرَائِيَّةٌ؛ كَانَ مَسْجِدًا لِقُرُونٍ، ثُمَّ بُنِيَتْ كَنِيسَةٌ فِي وَسَطِهِ، فَتَرَى فِيهِ تَارِيخَ دِينَيْنِ.', modelEn: 'The Great Mosque, today a cathedral: a mosque for centuries, then a church built in its middle — two faiths’ history in one place.' },
        { ex: 'مَا الَّذِي فَاجَأَكَ؟', task: 'Cause and result.', help: 'فَاجَأَنِي أَنَّ … ، مِمَّا …', model: 'فَاجَأَنِي أَنَّ العُلَمَاءَ المُسْلِمِينَ وَاليَهُودَ وَالمَسِيحِيِّينَ عَمِلُوا مَعًا فِي التَّرْجَمَةِ، مِمَّا جَعَلَ قُرْطُبَةَ أَكْبَرَ مَدِينَةٍ عِلْمِيَّةٍ فِي أُورُوبَّا.', modelEn: 'Muslim, Jewish and Christian scholars worked together on translation, making Córdoba Europe’s greatest centre of learning.' },
        { ex: 'كَيْفَ تُقَارِنُ إِسْبَانْيَا اليَوْمَ بِبَرِيطَانْيَا؟', task: 'Compare with ammā … fa- and a hedge.', help: 'فِي إِسْبَانْيَا … غَالِبًا … أَمَّا فِي بَرِيطَانْيَا فَـ…', model: 'فِي إِسْبَانْيَا يَتَعَشَّى النَّاسُ غَالِبًا فِي العَاشِرَةِ، أَمَّا فِي بَرِيطَانْيَا فَنَتَعَشَّى قَبْلَ ذٰلِكَ بِكَثِيرٍ؛ وَلِكُلٍّ مِنْهُمَا سَبَبُهُ.', modelEn: 'Spaniards usually dine at ten; in Britain much earlier — each for its reasons.' },
        { unexpected: true, ex: 'هَلْ سَتَعُودُ إِلَى هُنَاكَ؟', task: 'Answer the unexpected question (conditional).', help: 'إِذَا … فَسَـ…', model: 'إِذَا حَصَلْتُ عَلَى مِنْحَةٍ، فَسَأَدْرُسُ التَّارِيخَ الأَنْدَلُسِيَّ فِي جَامِعَةِ غَرْنَاطَةَ.', modelEn: 'If I get a scholarship, I’ll study Andalusian history at the University of Granada.' },
      ],
      girl: 'فَاجَأَكِ · تُقَارِنِينَ · سَتَعُودِينَ',
      notes: 'Develop: alladhī buniya + an ordinal century (L07), respectful factual language about two faiths (L05), faājaʾanī anna + mimmā (L08), ammā … fa- + ghāliban (L09), idhā … fa-sa- (L10).',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a radio interview', title: 'Role play D — Do young people respect other cultures?', ar: 'هَلْ يَحْتَرِمُ الشَّبَابُ الثَّقَافَاتِ الأُخْرَى؟', you: 'a young guest', them: 'the radio presenter',
      tasks: [
        { ex: 'هَلْ جِيلُكُمْ أَكْثَرُ احْتِرَامًا لِلثَّقَافَاتِ الأُخْرَى مِنْ جِيلِ آبَائِكُمْ؟', task: 'Balanced comparison of generations.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، نَدْرُسُ وَنَلْعَبُ مَعَ زُمَلَاءَ مِنْ عَشَرَاتِ البُلْدَانِ، مِمَّا يَجْعَلُنَا أَكْثَرَ انْفِتَاحًا، وَمِنْ نَاحِيَةٍ أُخْرَى، تَنْتَشِرُ الصُّوَرُ النَّمَطِيَّةُ عَلَى الإِنْتَرْنِتِ أَسْرَعَ مِنْ قَبْلُ.', modelEn: 'We study and play with classmates from dozens of countries, making us more open; yet stereotypes spread online faster than before.' },
        { ex: 'أَعْطِنَا مِثَالًا.', task: 'Narrate a personal example.', help: 'عِنْدَمَا … كُنْتُ أَظُنُّ … ثُمَّ …', model: 'عِنْدَمَا وَصَلَتْ إِلَى صَفِّنَا طَالِبَةٌ مِنْ أَفْغَانِسْتَانَ، كَانَ بَعْضُ الزُّمَلَاءِ يَظُنُّونَ أَنَّهَا لَا تَتَكَلَّمُ، ثُمَّ اكْتَشَفْنَا أَنَّهَا تَتَكَلَّمُ أَرْبَعَ لُغَاتٍ!', modelEn: 'When a girl from Afghanistan joined our class, some thought she couldn’t speak — then we found she spoke four languages!' },
        { ex: 'لٰكِنَّ بَعْضَ النَّاسِ يَقُولُونَ إِنَّ الاحْتِرَامَ يَعْنِي أَنْ نَقْبَلَ كُلَّ شَيْءٍ.', task: 'Concede and clarify.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ الاحْتِرَامَ لَا يَعْنِي … بَلْ …', model: 'صَحِيحٌ أَنَّ الاحْتِرَامَ يَحْتَاجُ إِلَى تَسَامُحٍ، غَيْرَ أَنَّهُ لَا يَعْنِي أَنْ نَتَّفِقَ فِي كُلِّ شَيْءٍ، بَلْ أَنْ نَخْتَلِفَ بِأَدَبٍ، وَأَنْ نَسْأَلَ قَبْلَ أَنْ نَحْكُمَ.', modelEn: 'Respect needs tolerance, but it doesn’t mean agreeing on everything — it means disagreeing politely and asking before judging.' },
        { ex: 'مَاذَا يَنْبَغِي أَنْ تَفْعَلَ المَدَارِسُ؟', task: 'Formal advice with the passive.', help: 'يَنْبَغِي أَنْ تُدَرَّسَ … وَأَنْ تُنَظَّمَ …', model: 'يَنْبَغِي أَنْ تُدَرَّسَ اللُّغَاتُ وَالأَدْيَانُ بِطَرِيقَةٍ مُحْتَرِمَةٍ، وَأَنْ تُنَظَّمَ زِيَارَاتٌ لِأَمَاكِنِ العِبَادَةِ وَبَرَامِجُ لِلتَّبَادُلِ، لِأَنَّ المَعْرِفَةَ تَقْتُلُ الخَوْفَ.', modelEn: 'Languages and faiths should be taught respectfully, and visits and exchanges organised — knowledge kills fear.' },
        { unexpected: true, ex: 'لَوْ أَعْطَيْتَ جِيلَكَ نَصِيحَةً وَاحِدَةً، فَمَا هِيَ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ أَعْطَيْتُهُمْ نَصِيحَةً، لَقُلْتُ: "…"', model: 'لَوْ أَعْطَيْتُهُمْ نَصِيحَةً وَاحِدَةً، لَقُلْتُ: "تَعَلَّمُوا لُغَةَ جَارِكُمْ، وَكُلُوا عَلَى مَائِدَتِهِ مَرَّةً؛ فَلَنْ تَرَوْهُ غَرِيبًا بَعْدَ ذٰلِكَ".', modelEn: '“Learn your neighbour’s language and eat at their table once — you’ll never see them as a stranger again.”' },
      ],
      girl: 'أَعْطِينَا · جِيلَكِ · أَعْطَيْتِ',
      notes: 'Stretch: akthar iḥtirāman min (L09), a balanced view with mimmā (L08, L10), kānū yaẓunnūna … thumma iktashafnā, a concession with lā yaʿnī … bal an (L03, L05), passive subjunctives (tudarrasa, tunaẓẓama), law … la- with plural imperatives (L04).',
      modelFoot: 'Stretch: every Topic E skill in one card — comparison, an example, a concession, formal advice with the passive and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'العَالَمُ الدُّوَلِيُّ', aim: 'one full sentence per question',
      qs: [
        { q: 'مَا جِنْسِيَّتُكَ؟ وَمِنْ أَيْنَ أُسْرَتُكَ؟', en: 'What is your nationality, and where is your family from?', start: 'أَنَا … وَأُسْرَتِي مِنْ …', model: 'أَنَا بَرِيطَانِيٌّ، وَأُسْرَتِي مِنَ العِرَاقِ.', modelEn: 'British; my family is from Iraq.' },
        { q: 'مَعَ مَنْ تَتَكَلَّمُ العَرَبِيَّةَ؟', en: 'Who do you speak Arabic with?', start: 'أَتَكَلَّمُهَا مَعَ …', model: 'أَتَكَلَّمُهَا مَعَ جَدِّي وَجَدَّتِي.', modelEn: 'With my grandparents.' },
        { q: 'مَاذَا تُقَدِّمُونَ لِلضُّيُوفِ؟', en: 'What do you offer guests?', start: 'نُقَدِّمُ …', model: 'نُقَدِّمُ الشَّايَ وَالكَعْكَ.', modelEn: 'Tea and biscuits.' },
        { q: 'كَيْفَ تَحْتَفِلُونَ بِالعِيدِ؟', en: 'How do you celebrate Eid?', start: 'أَوَّلًا … ثُمَّ …', model: 'أَوَّلًا نُصَلِّي، ثُمَّ نَزُورُ الأَقَارِبَ.', modelEn: 'We pray, then visit relatives.' },
        { q: 'أَيُّ بَلَدٍ تُرِيدُ أَنْ تَزُورَ؟', en: 'Which country do you want to visit?', start: 'أُرِيدُ أَنْ أَزُورَ … لِأَنَّ …', model: 'أُرِيدُ أَنْ أَزُورَ إِسْبَانْيَا، لِأَنَّ فِيهَا آثَارًا عَرَبِيَّةً.', modelEn: 'Spain — it has Arab monuments.' },
      ],
      foot: 'Core: one full sentence for every question — each question comes from a different Topic E lesson. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + accurate agreement = a secure Core answer on every theme.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'ثَقَافَاتٌ وَلُغَاتٌ وَرِحْلَاتٌ', aim: 'two or three sentences, mixing time frames',
      qs: [
        { q: 'كَيْفَ تَخْتَلِفُ حَيَاتُكَ فِي البَيْتِ عَنْ حَيَاتِكَ فِي المَدْرَسَةِ؟', en: 'How does your life at home differ from school?', start: 'فِي البَيْتِ … بَيْنَمَا فِي المَدْرَسَةِ …', model: 'فِي البَيْتِ نَتَكَلَّمُ العَرَبِيَّةَ وَنَأْكُلُ مَعًا، بَيْنَمَا فِي المَدْرَسَةِ أَتَكَلَّمُ الإِنْجْلِيزِيَّةَ وَأَعِيشُ ثَقَافَةً أُخْرَى، لٰكِنَّنِي أُحِبُّ العَالَمَيْنِ.', modelEn: 'Arabic and shared meals at home; English and another culture at school — I love both worlds.' },
        { q: 'صِفْ احْتِفَالًا حَضَرْتَهُ فِي ثَقَافَةٍ أُخْرَى.', en: 'Describe a celebration you attended in another culture.', start: 'حَضَرْتُ … ؛ رَأَيْتُ … وَتَعَلَّمْتُ …', model: 'حَضَرْتُ عِيدَ المِيلَادِ عِنْدَ جِيرَانِي؛ رَأَيْتُ الشَّجَرَةَ المُزَيَّنَةَ، وَتَعَلَّمْتُ أَنَّهُمْ يَجْتَمِعُونَ كَعَائِلَةٍ مِثْلَنَا تَمَامًا.', modelEn: 'Christmas at my neighbours’: a decorated tree — and they gather as a family just like us.' },
        { q: 'حَدِّثْنِي عَنْ رِحْلَةٍ إِلَى الخَارِجِ.', en: 'Tell me about a trip abroad.', start: 'سَافَرْتُ إِلَى … ؛ وَبِسَبَبِ … فَـ…', model: 'سَافَرْتُ إِلَى تُونِسَ؛ وَبِسَبَبِ الحَرِّ كُنَّا نَخْرُجُ فِي المَسَاءِ، فَاكْتَشَفْتُ أَنَّ الأَسْوَاقَ أَجْمَلُ فِي اللَّيْلِ.', modelEn: 'Tunisia: because of the heat we went out in the evenings, and I found the markets lovelier at night.' },
        { q: 'هَلْ تَغَيَّرَتْ نَظْرَتُكَ إِلَى ثَقَافَتِكَ؟', en: 'Has your view of your own culture changed?', start: 'كُنْتُ … أَمَّا الآنَ فَـ…', model: 'كُنْتُ أَرَاهَا قَدِيمَةً، أَمَّا الآنَ فَأَرَاهَا كَنْزًا، لِأَنَّ أَصْدِقَائِي يُحِبُّونَ طَعَامَنَا وَقِصَصَنَا.', modelEn: 'I saw it as old-fashioned; now as a treasure, because my friends love our food and stories.' },
        { q: 'كَيْفَ سَتَسْتَخْدِمُ لُغَاتِكَ فِي المُسْتَقْبَلِ؟', en: 'How will you use your languages in future?', start: 'إِذَا … فَسَـ…', model: 'إِذَا دَرَسْتُ القَانُونَ الدُّوَلِيَّ، فَسَأَسْتَخْدِمُ لُغَاتِي لِمُسَاعَدَةِ اللَّاجِئِينَ فِي المَحَاكِمِ.', modelEn: 'If I study international law, I’ll use my languages to help refugees in court.' },
      ],
      foot: 'Develop: two or three sentences — a comparison, a cause or result, and a past or future detail.',
      modelFoot: 'Comparison + cause / result + two time frames = a strong Develop answer.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'الإِنْسَانُ بَيْنَ ثَقَافَتِهِ وَالعَالَمِ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلْ يَجِبُ أَنْ تُدَرَّسَ الأَدْيَانُ وَالثَّقَافَاتُ فِي كُلِّ المَدَارِسِ؟', en: 'Should faiths and cultures be taught in every school?', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ المَنْهَجَ مُزْدَحِمٌ، غَيْرَ أَنَّ مَعْرِفَةَ الآخَرِ لَمْ تَعُدْ تَرَفًا؛ فَنَحْنُ نَعِيشُ وَنَعْمَلُ مَعَهُ كُلَّ يَوْمٍ.', modelEn: 'The curriculum is crowded, but knowing others is no longer a luxury — we live and work with them daily.' },
        { q: 'هَلِ السَّفَرُ أَفْضَلُ مُعَلِّمٍ؟', en: 'Is travel the best teacher?', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، يُرِينَا السَّفَرُ مَا لَا تُرِيهِ الكُتُبُ، وَمِنْ نَاحِيَةٍ أُخْرَى، لَا يَتَعَلَّمُ إِلَّا مَنْ يُسَافِرُ بِعَقْلٍ مَفْتُوحٍ.', modelEn: 'Travel shows what books can’t — yet only those who travel with an open mind learn.' },
        { q: 'كَيْفَ تُحَافِظُ الأُسَرُ المُهَاجِرَةُ عَلَى لُغَتِهَا؟', en: 'How do immigrant families keep their language?', start: 'إِنَّ … ؛ فَإِذَا … فَـ…', model: 'إِنَّ البَيْتَ هُوَ المَدْرَسَةُ الأُولَى؛ فَإِذَا تَكَلَّمَ الوَالِدَانِ لُغَتَهُمَا كُلَّ يَوْمٍ وَقَرَأَا القِصَصَ، فَسَيَحْفَظُهَا الأَطْفَالُ دُونَ جُهْدٍ كَبِيرٍ.', modelEn: 'Home is the first school: if parents speak their language daily and read stories, children will keep it without great effort.' },
        { q: 'مَا الَّذِي تَعَلَّمْتَهُ مِنْ هٰذَا المِحْوَرِ عَنْ نَفْسِكَ؟', en: 'What has this topic taught you about yourself?', start: 'تَعَلَّمْتُ أَنَّ … لَيْسَ … بَلْ …', model: 'تَعَلَّمْتُ أَنَّ هُوِيَّتِي لَيْسَتْ شَيْئًا ثَابِتًا، بَلْ رِحْلَةٌ؛ فَكُلُّ لُغَةٍ أَتَعَلَّمُهَا وَكُلُّ صَدِيقٍ مِنْ ثَقَافَةٍ أُخْرَى يُضِيفُ إِلَيْهَا شَيْئًا جَمِيلًا.', modelEn: 'My identity isn’t fixed but a journey: every language and every friend from another culture adds something beautiful.' },
        { q: 'لَوْ اسْتَطَعْتَ أَنْ تُغَيِّرَ شَيْئًا وَاحِدًا فِي العَالَمِ، فَمَا هُوَ؟', en: 'If you could change one thing in the world, what would it be?', start: 'لَوِ اسْتَطَعْتُ، لَـ… لِكَيْ …', model: 'لَوِ اسْتَطَعْتُ، لَجَعَلْتُ كُلَّ طِفْلٍ يَتَعَلَّمُ لُغَتَيْنِ وَيَزُورُ بَلَدًا آخَرَ، لِكَيْ يَكْبُرَ جِيلٌ لَا يَخَافُ مِنَ المُخْتَلِفِ.', modelEn: 'Every child would learn two languages and visit another country, so a generation grows up unafraid of difference.' },
      ],
      foot: 'Stretch: a concession, a balanced view, inna + idhā … fa-sa-, laysa … bal and law … la-.',
      modelFoot: 'Stretch: lam taʿud, lā … illā man, a dual verb (qaraʾā), laysat … bal and law … la- + li-kay — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I completed every role-play task, including the unexpected one.' },
    { route: 'core', text: 'I answered in full sentences on at least three Topic E themes.' },
    { route: 'develop', text: 'I used a nisba, a passive or a relative clause accurately.' },
    { route: 'develop', text: 'I linked ideas and used two time frames in one answer.' },
    { route: 'stretch', text: 'I compared cultures with respect, with a concession and a conditional.' },
  ],
};
speak.RP[1].tasks[2].help = 'نَعَمْ، عِيدُ … ؛ وَفِيهِ … مِثْلَكُمْ، بَيْنَمَا تُضِيئُونَ …';
speak.RP[2].tasks[1].help = 'زُرْنَا … ، وَهُوَ … ؛ كَانَ … ثُمَّ بُنِيَتْ …';
speak.RP[2].tasks[3].help = 'فِي إِسْبَانْيَا … غَالِبًا … أَمَّا فِي بَرِيطَانْيَا فَنَتَعَشَّى …';
speak.RP[2].tasks[4].help = 'إِذَا حَصَلْتُ عَلَى … فَسَأَدْرُسُ …';
speak.RP[3].tasks[4].help = 'لَوْ أَعْطَيْتُهُمْ نَصِيحَةً، لَقُلْتُ: "…"';
speak.CONV[1].qs[2].start = 'سَافَرْتُ إِلَى … ؛ وَبِسَبَبِ … فَاكْتَشَفْتُ …';
speak.CONV[1].qs[3].start = 'كُنْتُ … أَمَّا الآنَ فَأَرَاهَا …';
speak.CONV[1].qs[4].start = 'إِذَا دَرَسْتُ … فَسَأَسْتَخْدِمُ …';
speak.CONV[2].qs[2].start = 'إِنَّ … ؛ فَإِذَا … فَسَيَحْفَظُهَا …';
speak.CONV[2].qs[4].start = 'لَوِ اسْتَطَعْتُ، لَجَعَلْتُ … لِكَيْ …';

const Q2_CORE = `مَرْحَبًا يَا رِيمُ،
كَيْفَ حَالُكِ؟ عِنْدِي ضَيْفَةٌ جَدِيدَةٌ فِي البَيْتِ! اسْمُهَا لَمَى، وَهِيَ طَالِبَةُ تَبَادُلٍ أُرْدُنِيَّةٌ. وَصَلَتْ يَوْمَ السَّبْتِ، وَسَتَبْقَى ثَلَاثَةَ أَسَابِيعَ. فِي اليَوْمِ الأَوَّلِ أَخَذْتُهَا إِلَى وَسَطِ لَنْدَنَ، ثُمَّ أَكَلْنَا السَّمَكَ وَالبَطَاطَا. أَمَّا أُمِّي فَطَبَخَتْ لَهَا المَقْلُوبَةَ، لِكَيْ تَشْعُرَ بِأَنَّهَا فِي بَيْتِهَا. لَاحَظَتْ لَمَى أَنَّنَا نَتَعَشَّى مُبَكِّرًا، بَيْنَمَا يَتَعَشَّى النَّاسُ فِي الأُرْدُنِّ مُتَأَخِّرِينَ. أَظُنُّ أَنَّ التَّبَادُلَ مُفِيدٌ جِدًّا، لِأَنَّنَا نَتَعَلَّمُ مِنْ بَعْضِنَا. فِي الصَّيْفِ سَأَزُورُهَا فِي عَمَّانَ. وَأَنْتِ، هَلْ تُرِيدِينَ أَنْ تُقَابِلِيهَا؟
مَعَ السَّلَامَةِ،
سُمَيَّةُ`;
const Q2_FULL = `عَزِيزَتِي رِيمُ،
صَارَ بَيْتُنَا هٰذَا الأُسْبُوعَ أَكْثَرَ ازْدِحَامًا وَدِفْئًا؛ فَقَدْ وَصَلَتْ لَمَى، طَالِبَةُ التَّبَادُلِ الأُرْدُنِيَّةُ الَّتِي سَتُقِيمُ عِنْدَنَا ثَلَاثَةَ أَسَابِيعَ. حَرَصْتُ عَلَى أَنْ أُرِيَهَا لَنْدَنَ الحَقِيقِيَّةَ، فَأَخَذْتُهَا إِلَى سُوقٍ شَعْبِيٍّ بَدَلًا مِنَ المَحَلَّاتِ السِّيَاحِيَّةِ، بَيْنَمَا حَرَصَتْ أُمِّي عَلَى أَنْ تَطْبُخَ لَهَا المَقْلُوبَةَ كَيْ لَا تَشْتَاقَ إِلَى بَيْتِهَا. وَأَكْثَرُ مَا أَضْحَكَنَا أَنَّهَا اسْتَغْرَبَتْ عَشَاءَنَا فِي السَّادِسَةِ، لِأَنَّهُمْ لَا يَتَعَشَّوْنَ فِي عَمَّانَ قَبْلَ التَّاسِعَةِ! صَحِيحٌ أَنَّ عَادَاتِنَا مُخْتَلِفَةٌ، غَيْرَ أَنَّنَا اكْتَشَفْنَا أَنَّ مَا يَجْمَعُنَا أَكْثَرُ بِكَثِيرٍ. وَإِذَا سَمَحَ وَالِدَايَ، فَسَأُرَافِقُهَا إِلَى الأُرْدُنِّ فِي الصَّيْفِ. أَلَا تُرِيدِينَ أَنْ تَتَعَشَّيْ مَعَنَا يَوْمَ الجُمُعَةِ؟
بِمَحَبَّةٍ،
سُمَيَّةُ`;
const Q3A_CORE = `فِي السَّنَةِ المَاضِيَةِ اسْتَقْبَلَتْ أُسْرَتِي طَالِبَةَ تَبَادُلٍ مِنَ اليَابَانِ اسْمُهَا يُوكِي. بَقِيَتْ عِنْدَنَا شَهْرًا كَامِلًا، وَكَانَتْ هٰذِهِ أَوَّلَ مَرَّةٍ أَتَعَرَّفُ فِيهَا عَلَى ثَقَافَةٍ بَعِيدَةٍ جِدًّا عَنْ ثَقَافَتِي.
أَوَّلًا، لَاحَظْتُ أَنَّ يُوكِي هَادِئَةٌ وَمُؤَدَّبَةٌ جِدًّا. كَانَتْ تَنْحَنِي لِتُحَيِّيَ أُمِّي، بَيْنَمَا نَحْنُ نُصَافِحُ أَوْ نُقَبِّلُ. وَكَانَتْ تَخْلَعُ حِذَاءَهَا عِنْدَ البَابِ مِثْلَنَا تَمَامًا، لِأَنَّهُمْ فِي اليَابَانِ يَفْعَلُونَ ذٰلِكَ أَيْضًا.
بِالإِضَافَةِ إِلَى ذٰلِكَ، عَلَّمَتْنِي كَلِمَاتٍ يَابَانِيَّةً، وَعَلَّمْتُهَا الحُرُوفَ العَرَبِيَّةَ وَكِتَابَةَ اسْمِهَا. فِي رَمَضَانَ صَامَتْ يَوْمًا وَاحِدًا مَعَنَا، لِكَيْ تَفْهَمَ تَجْرِبَتَنَا، ثُمَّ أَفْطَرْنَا مَعًا. كَانَ ذٰلِكَ اليَوْمُ جَمِيلًا جِدًّا، وَلَنْ أَنْسَاهُ أَبَدًا.
تَعَلَّمْتُ أَنَّ الثَّقَافَاتِ مُخْتَلِفَةٌ، لٰكِنَّ النَّاسَ يَتَشَابَهُونَ فِي أَشْيَاءَ كَثِيرَةٍ، مِثْلَ احْتِرَامِ الكِبَارِ وَحُبِّ العَائِلَةِ. لِذٰلِكَ سَأُسَافِرُ إِلَى اليَابَانِ بَعْدَ الامْتِحَانَاتِ، وَسَأَزُورُ يُوكِي وَأُسْرَتَهَا إِنْ شَاءَ اللّٰهُ.`;
const Q3A_FULL = `حِينَ فَتَحْتُ البَابَ لِيُوكِي، الطَّالِبَةِ اليَابَانِيَّةِ الَّتِي اسْتَضَفْنَاهَا شَهْرًا، انْحَنَتْ أَمَامِي بِأَدَبٍ، فَارْتَبَكْتُ وَمَدَدْتُ يَدِي! وَكَانَتْ تِلْكَ اللَّحْظَةُ المُضْحِكَةُ بِدَايَةَ رِحْلَةٍ عَرَّفَتْنِي بِثَقَافَةٍ لَمْ أَكُنْ أَعْرِفُ عَنْهَا إِلَّا الأَفْلَامَ وَالرُّسُومَ المُتَحَرِّكَةَ.
وَسُرْعَانَ مَا اكْتَشَفْتُ أَنَّ المَسَافَةَ بَيْنَ لَنْدَنَ وَطُوكْيُو أَقْصَرُ مِمَّا كُنْتُ أَظُنُّ؛ فَيُوكِي تَخْلَعُ حِذَاءَهَا عِنْدَ البَابِ مِثْلَنَا، وَتُقَدِّسُ احْتِرَامَ الكِبَارِ كَجَدَّتِي، وَتَرَى أَنَّ الضَّيْفَ يَجِبُ أَنْ يُكْرَمَ، وَأَنْ يُقَدَّمَ لَهُ أَفْضَلُ مَا فِي البَيْتِ.
غَيْرَ أَنَّ أَعْمَقَ مَا تَعَلَّمْتُهُ جَاءَ فِي رَمَضَانَ؛ إِذْ طَلَبَتْ أَنْ تَصُومَ مَعَنَا يَوْمًا وَاحِدًا "لِتَفْهَمَ"، كَمَا قَالَتْ. وَعِنْدَ الإِفْطَارِ، بَعْدَ يَوْمٍ طَوِيلٍ مِنَ الجُوعِ وَالعَطَشِ، وَضَعَتْ يَدَهَا عَلَى قَلْبِهَا وَقَالَتْ: "الآنَ أَعْرِفُ لِمَاذَا تُحِبُّونَ هٰذَا الشَّهْرَ". فَأَدْرَكْتُ أَنَّ الاحْتِرَامَ لَيْسَ أَنْ نَتَشَابَهَ، بَلْ أَنْ نُحَاوِلَ الفَهْمَ، وَأَنْ نَحْتَرِمَ مَا لَا نَفْهَمُهُ بَعْدُ.
وَلَوْ سَأَلَنِي أَحَدٌ الآنَ مَاذَا يَعْنِي التَّبَادُلُ الثَّقَافِيُّ، لَقُلْتُ: "أَنْ تَفْتَحَ بَابَكَ لِغَرِيبٍ، فَتُغْلِقَهُ بَعْدَ شَهْرٍ عَلَى صَدِيقَةٍ".`;
const Q3B_FULL = `فِي صَفِّي ثَلَاثُونَ طَالِبًا مِنْ اثْنَيْ عَشَرَ بَلَدًا وَخَمْسَةِ أَدْيَانٍ. وَمَعَ ذٰلِكَ، لَا نَعْرِفُ عَنْ ثَقَافَاتِ بَعْضِنَا إِلَّا القَلِيلَ، وَأَحْيَانًا مَا هُوَ خَاطِئٌ. فَهَلْ يَجِبُ أَنْ تُدَرَّسَ الثَّقَافَاتُ وَالأَدْيَانُ فِي كُلِّ المَدَارِسِ؟
مِنْ نَاحِيَةٍ، يَرَى بَعْضُ النَّاسِ أَنَّ المَنْهَجَ مُزْدَحِمٌ أَصْلًا بِالرِّيَاضِيَّاتِ وَالعُلُومِ، وَأَنَّ الثَّقَافَةَ مَسْؤُولِيَّةُ الأُسْرَةِ لَا المَدْرَسَةِ. وَمِنْ نَاحِيَةٍ أُخْرَى، فَإِنَّ الجَهْلَ بِالآخَرِ هُوَ أَوَّلُ أَسْبَابِ الخَوْفِ وَالصُّوَرِ النَّمَطِيَّةِ، مِمَّا يَجْعَلُ هٰذِهِ المَعْرِفَةَ ضَرُورَةً لَا تَرَفًا.
وَقَدْ رَأَيْتُ أَثَرَ ذٰلِكَ فِي مَدْرَسَتِي؛ فَبَعْدَ أَنْ زُرْنَا مَسْجِدًا وَكَنِيسَةً وَمَعْبَدًا فِي يَوْمٍ وَاحِدٍ، وَتَحَدَّثْنَا مَعَ أَهْلِهَا بِصَرَاحَةٍ وَلُطْفٍ، تَوَقَّفَ زُمَلَاءُ كَثِيرُونَ عَنِ النُّكَتِ الجَارِحَةِ، وَبَدَؤُوا يَطْرَحُونَ أَسْئِلَةً بِفُضُولٍ وَاحْتِرَامٍ عَنْ أَعْيَادِ زُمَلَائِهِمْ وَعَادَاتِهِمْ.
صَحِيحٌ أَنَّ المَدْرَسَةَ لَا تَسْتَطِيعُ أَنْ تُعَلِّمَ كُلَّ شَيْءٍ، غَيْرَ أَنَّ سَاعَةً وَاحِدَةً فِي الأُسْبُوعِ تَكْفِي لِتَبْدَأَ التَّغْيِيرَ. فَإِذَا تَعَلَّمَ الأَطْفَالُ أَنْ يَسْأَلُوا قَبْلَ أَنْ يَحْكُمُوا، فَسَنَبْنِي مُجْتَمَعًا يَعِيشُ فِيهِ الجَمِيعُ بِأَمَانٍ وَكَرَامَةٍ.`;

const write = {
  ...base,
  focus: 'A full Paper 4 mock across all of Topic E: fill in a host-family form for an exchange student, write an email about hosting a Jordanian exchange student, and write an extended piece about an experience that introduced you to another culture or about whether every school should teach about other cultures and faiths.',
  lift: [
    { ar: 'وَهِيَ طَالِبَةُ تَبَادُلٍ أُرْدُنِيَّةٌ', en: 'she is a Jordanian exchange student' },
    { ar: 'نَتَعَشَّى مُبَكِّرًا، بَيْنَمَا يَتَعَشَّى النَّاسُ فِي الأُرْدُنِّ مُتَأَخِّرِينَ', en: 'we dine early, whereas people in Jordan dine late' },
    { ar: 'أَمَّا أُمِّي فَطَبَخَتْ لَهَا … لِكَيْ تَشْعُرَ …', en: 'as for my mum, she cooked her … so that she would feel …' },
  ],
  checkTip: 'Check Topic E accuracy: the nisba in the feminine (urduniyya, yābāniyya); relative clauses with returning pronouns (allatī istaḍafnāhā); object pronouns (akhadhtuhā, sa-azūruhā); baynamā and ammā … fa-; the passive where the doer is unknown (tudarrasa, yukrama); li-kay + subjunctive; and respectful hedging (baʿḍu an-nās).',
  FORM: {
    title: 'Host-family form for an exchange student', ar: 'اسْتِمَارَةُ العَائِلَةِ المُضِيفَةِ لِطَالِبِ التَّبَادُلِ',
    fields: [
      { core: true, ar: 'اسْمُ الطَّالِبَةِ المُضِيفَةِ', en: 'Host student’s name', model: 'سُمَيَّةُ رَحْمَانُ', modelEn: 'Sumaya Rahman' },
      { core: true, ar: 'الجِنْسِيَّةُ', en: 'Nationality', model: 'بَرِيطَانِيَّةٌ', modelEn: 'British' },
      { core: true, ar: 'لُغَاتُ البَيْتِ', en: 'Home languages', model: 'الإِنْجْلِيزِيَّةُ وَالعَرَبِيَّةُ وَالبَنْغَالِيَّةُ', modelEn: 'English, Arabic and Bengali' },
      { core: true, ar: 'عَدَدُ أَفْرَادِ الأُسْرَةِ', en: 'Number of family members', model: 'خَمْسَةٌ', modelEn: 'five' },
      { core: true, ar: 'عَادَةٌ فِي البَيْتِ', en: 'A house custom', model: 'خَلْعُ الأَحْذِيَةِ', modelEn: 'taking shoes off' },
      { core: true, ar: 'عِيدٌ خِلَالَ الزِّيَارَةِ', en: 'A festival during the visit', model: 'عِيدُ الفِطْرِ', modelEn: 'Eid al-Fitr' },
      { ar: 'مَكَانٌ سَتَزُورَانِهِ مَعًا', en: 'A place you will visit together', model: 'المُتْحَفُ البَرِيطَانِيُّ', modelEn: 'the British Museum' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدِينَ اسْتِضَافَةَ طَالِبَةٍ؟', en: 'ONE sentence: why you want to host a student', model: 'أُرِيدُ أَنْ أَتَعَرَّفَ عَلَى ثَقَافَةٍ جَدِيدَةٍ، لِأَنَّ ذٰلِكَ سَيَجْعَلُنِي أَفْهَمُ العَالَمَ أَكْثَرَ.', modelEn: 'I want to get to know a new culture, because it will make me understand the world better.' },
    ],
    foot: 'One word or a short phrase for each box — feminine agreement for a female host (barīṭāniyya); the last box is a full sentence with li-anna and a future verb.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. The boxes recycle Topic E: nationality and languages (L01–L02), customs (L04), festivals (L06), places (L05, L07). Box 7 heading uses a dual verb with a returning pronoun (sa-tazūrānihi).',
  },
  Q2: {
    short: 'an email about hosting an exchange student', title: 'Question 2: our exchange guest', ar: 'ضَيْفَتُنَا مِنَ الأُرْدُنِّ',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • who your guest is and how long she is staying • what you did on the first day • a cultural difference you noticed • your opinion of the exchange and your plans, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'A nisba, baynamā and an object pronoun.', 'Past, present AND future.', 'About 80–90 words.'],
    phrases: [['اسْمُهَا … ، وَهِيَ طَالِبَةُ تَبَادُلٍ …', 'her name is …; she is a … exchange student'], ['فِي اليَوْمِ الأَوَّلِ أَخَذْتُهَا إِلَى …', 'on the first day I took her to …'], ['… بَيْنَمَا يَتَعَشَّى النَّاسُ فِي …', '… whereas people in … dine …'], ['فِي الصَّيْفِ سَأَزُورُهَا فِي …', 'in the summer I will visit her in …']],
    rubric: [
      ['task', 'اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ عَنْ طَالِبَةِ التَّبَادُلِ الَّتِي تُقِيمُ عِنْدَكُمْ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about the exchange student staying with you (80–90 words).'],
      ['1', 'مَنْ ضَيْفَتُكِ؟ وَكَمْ سَتَبْقَى؟', 'Who your guest is; how long she will stay'],
      ['2', 'مَاذَا فَعَلْتُمَا فِي اليَوْمِ الأَوَّلِ؟', 'What you both did on the first day'],
      ['3', 'مَا الاخْتِلَافُ الثَّقَافِيُّ الَّذِي لَاحَظْتُمَاهُ؟', 'A cultural difference you noticed'],
      ['4', 'مَا رَأْيُكِ فِي التَّبَادُلِ؟ وَمَا خِطَطُكِ؟ وَاسْأَلِي صَدِيقَتَكِ سُؤَالًا.', 'Your opinion; plans; a question'],
    ],
    qwords: 'مَنْ (who) · كَمْ سَتَبْقَى (how long — FUTURE) · فَعَلْتُمَا (you two did — PAST dual) · لَاحَظْتُمَاهُ (you two noticed it) · خِطَطُكِ (plans)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكِ؟', 'Hello …, how are you?'],
      ['1', 'عِنْدِي ضَيْفَةٌ: اسْمُهَا ______ ، وَهِيَ ______ .', 'I have a guest: her name is …; she is …'],
      ['2', 'فِي اليَوْمِ الأَوَّلِ أَخَذْتُهَا إِلَى ______ ، ثُمَّ ______ .', 'On day one I took her to …, then …'],
      ['3', 'نَحْنُ ______ ، بَيْنَمَا ______ .', 'We …, whereas …'],
      ['4', 'أَظُنُّ أَنَّ التَّبَادُلَ ______ . سَأَزُورُهَا ______ .', 'I think the exchange … I’ll visit her …'],
      ['end', 'وَأَنْتِ، ______ ؟ مَعَ السَّلَامَةِ.', 'And you, …? Goodbye.'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Reem, how are you? I have a new guest at home! Her name is Lama, and she’s a Jordanian exchange student. She arrived on Saturday and will stay three weeks. On the first day I took her to central London, then we ate fish and chips. As for my mum, she cooked her maqluba so she’d feel at home. Lama noticed we eat dinner early, whereas people in Jordan dine late. I think the exchange is very useful, because we learn from each other. In the summer I’ll visit her in Amman. And you, would you like to meet her? Goodbye, Sumaya.”',
      find: ['أُرْدُنِيَّةٌ', 'أَخَذْتُهَا', 'أَمَّا أُمِّي فَطَبَخَتْ', 'بَيْنَمَا يَتَعَشَّى'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Reem, our house is busier and warmer this week: Lama has arrived, the Jordanian exchange student who will stay with us for three weeks. I made sure to show her the real London, taking her to a street market instead of tourist shops, while my mum made sure to cook her maqluba so she wouldn’t miss home. What made us laugh most was her surprise at our dinner at six — in Amman they don’t dine before nine! Our customs are different, but we discovered that what unites us is far greater. If my parents allow, I’ll go with her to Jordan in the summer. Won’t you have dinner with us on Friday? With love, Sumaya.”',
      find: ['أَكْثَرَ ازْدِحَامًا وَدِفْئًا', 'الَّتِي سَتُقِيمُ', 'بَدَلًا مِنَ … بَيْنَمَا', 'إِذَا سَمَحَ … فَسَأُرَافِقُهَا'],
    },
  },
  Q3: {
    a: { title: 'تَجْرِبَةٌ عَرَّفَتْنِي بِثَقَافَةٍ أُخْرَى', en: 'An experience that introduced me to another culture', bullets: 'مَا التَّجْرِبَةُ وَمَتَى · الاخْتِلَافَاتُ وَالتَّشَابُهَاتُ · لَحْظَةٌ مُهِمَّةٌ · مَا تَعَلَّمْتَهُ وَخُطَطُكَ', bulletsEn: 'What the experience was and when · differences and similarities · an important moment · what you learnt and your plans' },
    b: { title: 'هَلْ يَجِبُ أَنْ تُدَرَّسَ الثَّقَافَاتُ وَالأَدْيَانُ فِي كُلِّ المَدَارِسِ؟', en: 'Should cultures and faiths be taught in every school?', bullets: 'المَوْضُوعُ · الآرَاءُ المُخْتَلِفَةُ · مِثَالٌ مِنْ مَدْرَسَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · different views · an example from your school · your opinion' },
    plan: [
      'The experience — fī as-sanati al-māḍiya istaqbalat usratī …; baqiyat ʿindanā …',
      'Differences + similarities — awwalan lāḥaẓtu anna …; kānat … baynamā naḥnu …; mithlanā tamāman li-annahum …',
      'An important moment — bi-l-iḍāfati ilā dhālika …; fī ramaḍāna ṣāmat … li-kay …; thumma …',
      'Lesson + future — taʿallamtu anna … lākinna …, mithla …; li-dhālika sa- …; Stretch: laysa … bal, law … la-.',
    ],
    frames: [
      { ar: 'كَانَتْ تَنْحَنِي، بَيْنَمَا نَحْنُ نُصَافِحُ.', en: 'contrast: she bowed, whereas we shake hands.' },
      { ar: 'صَامَتْ مَعَنَا لِكَيْ تَفْهَمَ تَجْرِبَتَنَا.', en: 'purpose: she fasted with us to understand.' },
      { ar: 'سَأَزُورُهَا وَأُسْرَتَهَا بَعْدَ الامْتِحَانَاتِ.', en: 'future: I’ll visit her family after exams.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'We hosted Yuki from Japan for a month — my first very distant culture → she bowed to greet mum, whereas we shake hands, but took her shoes off at the door just like us → we swapped words and letters; in Ramadan she fasted one day with us to understand → cultures differ, but people share much; I’ll visit her in Japan after my exams.', find: ['بَيْنَمَا نَحْنُ', 'مِثْلَنَا تَمَامًا', 'لِكَيْ تَفْهَمَ', 'لِذٰلِكَ سَأُسَافِرُ'], notes: 'Core model: the whole of Topic E — hosting and exchange (L08), customs and greetings (L04), comparing cultures with baynamā (L09), Ramadan (L06), languages (L02) — with linkers, li-kay, mithla and sa- + an object pronoun.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'When I opened the door to Yuki, the Japanese student we hosted for a month, she bowed politely — I panicked and held out my hand! That funny moment began a journey into a culture I knew only from films and cartoons → I soon found London and Tokyo closer than I thought: she takes off her shoes at the door like us, holds respect for elders sacred like my grandmother, and believes a guest must be honoured and given the best in the house → the deepest lesson came in Ramadan: she asked to fast one day “to understand”; at iftar, after a long day of hunger and thirst, she put her hand on her heart and said “now I know why you love this month” — I realised respect is not being alike but trying to understand, and respecting what we don’t yet understand → “if anyone asked what cultural exchange means, I’d say: opening your door to a stranger and closing it, a month later, on a friend”.', find: ['الَّتِي اسْتَضَفْنَاهَا', 'أَقْصَرُ مِمَّا كُنْتُ أَظُنُّ', 'لَيْسَ أَنْ نَتَشَابَهَ، بَلْ', 'لَوْ سَأَلَنِي … لَقُلْتُ'], notes: 'Full-mark model: an anecdote hook with fa-, a relative clause with an object pronoun, lam akun aʿrifu … illā, surʿāna mā, aqṣaru mimmā kuntu aẓunnu, ka- comparisons, a passive subjunctive (yukrama), idh + reported speech, laysa an … bal an and law … la- with a parallel close.' },
      { which: 'ب', level: 'Full', subtitle: 'cultures in the curriculum?', text: Q3B_FULL, en: 'My class has thirty students from twelve countries and five faiths, yet we know little of each other’s cultures, sometimes wrongly — should cultures and faiths be taught in every school? → some say the curriculum is already crowded and culture is the family’s job, not the school’s; yet ignorance of others is the first cause of fear and stereotypes, making this knowledge a necessity, not a luxury → I saw the effect at my school: after visiting a mosque, a church and a temple in one day and talking with their communities, many classmates stopped hurtful jokes and began asking questions with curiosity and respect about classmates’ festivals and customs → a school can’t teach everything, but one hour a week is enough to start; “if children learn to ask before they judge, we will build a society where everyone lives safely and with dignity”.', find: ['لَا نَعْرِفُ … إِلَّا القَلِيلَ', 'لَا المَدْرَسَةِ', 'ضَرُورَةً لَا تَرَفًا', 'إِذَا تَعَلَّمَ … فَسَنَبْنِي'], notes: 'Full-mark model for the Stretch title: a statistic hook with numbers and lā … illā, a passive question (tudarrasa), yarā baʿḍu an-nās anna (respectful hedging), lā al-madrasa, fa-inna + mimmā, baʿda an + a measurable result, a concession and idhā … fa-sa- with a relative-free yaʿīshu fīhi.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box in Arabic, with feminine agreement where needed.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: a nisba, baynamā and an object pronoun.' },
    { route: 'develop', text: 'Q3: four paragraphs with linkers and three time frames.' },
    { route: 'stretch', text: 'Q3: laysa … bal, a concession and a conditional.' },
  ],
};

module.exports = { speak, write };
