'use strict';
/* Exam-practice data · FR-L06 · Final Revision — Final Mock Exam (Topics A–E mixed, timed as in the real exam, with exam-day strategies). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'R', n: 6, short: 'Final Mock Exam', arShort: 'الامْتِحَانُ التَّجْرِيبِيُّ النِّهَائِيُّ', fileTitle: 'Final_Mock_Exam', title: 'Final Revision — Final Mock Exam (Topics A–E)', ar: 'الامْتِحَانُ التَّجْرِيبِيُّ النِّهَائِيُّ', icon: 'FaFlagCheckered', grammar: 'everything together: accurate verb endings in three time frames, agreement, numbers, cause and effect, comparison, the passive, polite requests, concessions and law … la- / idhā … fa-sa-' };

const speak = {
  ...base,
  focus: 'The final timed Paper 3 mock in breakout rooms, exactly as on exam day: four role plays (a café, a pharmacy, a part-time job interview, a debate on learning languages) and a conversation that moves across all five Advanced Topics. Exam-day skills: stay calm, listen to the whole question, answer fully, and never leave a silence — use a repair phrase and keep going.',
  words: [
    w(1, 'أُرِيدُ … مِنْ فَضْلِكَ', 'I would like … please', [['f. (to a woman)', 'مِنْ فَضْلِكِ'], ['the bill', 'الحِسَابُ']], { tag: 'A · café' }),
    w(2, 'عَصِيرُ بُرْتُقَالٍ · فَطِيرَةٌ', 'orange juice · a pastry', [['with / without', 'مَعَ / بِدُونِ'], ['sugar', 'سُكَّرٌ']], { tag: 'A · food' }),
    w(3, 'عِنْدِي صُدَاعٌ وَحُمَّى', 'I have a headache and a fever', [['since yesterday', 'مُنْذُ أَمْسِ'], ['a cough', 'سُعَالٌ']], { tag: 'A · health' }),
    w(4, 'مَرَّتَيْنِ فِي اليَوْمِ بَعْدَ الأَكْلِ', 'twice a day after food', [['tablets', 'أَقْرَاصٌ'], ['medicine', 'دَوَاءٌ']], { tag: 'A · numbers' }),
    w(5, 'عَمَلٌ جُزْئِيٌّ · مُقَابَلَةٌ', 'a part-time job · an interview', [['salary', 'رَاتِبٌ'], ['hours', 'سَاعَاتُ العَمَلِ']], { tag: 'D · work' }),
    w(6, 'أُجِيدُ … · أَتَكَلَّمُ … بِطَلَاقَةٍ', 'I am good at … · I speak … fluently', [['f.', 'أُجِيدُ · أَتَكَلَّمُ (same)'], ['skills', 'مَهَارَاتٌ']], { tag: 'D · skills' }),
    w(7, 'لُغَةٌ أَجْنَبِيَّةٌ · لُغَاتٌ', 'a foreign language · languages', [['mother tongue', 'اللُّغَةُ الأُمُّ'], ['bilingual', 'ثُنَائِيُّ اللُّغَةِ']], { tag: 'E · languages' }),
    w(8, 'يُسَاعِدُ عَلَى … مِمَّا …', 'helps to … which …', [['so', 'لِذٰلِكَ'], ['thanks to', 'بِفَضْلِ']], { tag: 'cause / result' }),
    w(9, 'أَسْهَلُ مِنْ · أَصْعَبُ مِنْ', 'easier than · harder than', [['the most', 'أَكْثَرُ … / أَهَمُّ'], ['whereas', 'بَيْنَمَا']], { tag: 'comparison' }),
    w(10, 'تُدَرَّسُ · يُتَكَلَّمُ بِهَا', 'is taught · is spoken', [['was opened', 'افْتُتِحَ'], ['is used', 'يُسْتَخْدَمُ']], { tag: 'passive' }),
    w(11, 'عِنْدَمَا كُنْتُ صَغِيرًا … أَمَّا الآنَ فَإِنِّي …', 'when I was little … but now I …', [['f.', 'صَغِيرَةً'], ['next year', 'فِي السَّنَةِ القَادِمَةِ']], { tag: 'time frames' }),
    w(12, 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it is true that … but …', [['if … would', 'لَوْ … لَتَعَلَّمْتُ'], ['in my view', 'فِي رَأْيِي']], { tag: 'top band' }),
  ],
  words1: { eyebrow: 'Language bank · the final checklist', title: 'Everything you need', ar: 'كُلُّ مَا تَحْتَاجُ إِلَيْهِ', notes: 'LANGUAGE BANK (2 min) — the last language bank before the exam. EXAM-DAY TIP: on the day, read the role-play card carefully in your preparation time and notice WHO you are and WHO the examiner is (formal or friendly? male or female?) — it changes your verb and pronoun endings.' },
  words2: { eyebrow: 'Language bank · top-band structures', title: 'Finish strong', ar: 'اخْتِمْ بِقُوَّةٍ', notes: 'LANGUAGE BANK (2 min) — EXAM-DAY TIP: the examiner rewards range AND accuracy. A short correct sentence beats a long broken one. Bring out your best structures (concession, mimmā, law … la-) in the conversation, not in the Core role-play tasks.' },
  checkCore: 'answered every task in full sentences without long silences',
  checkDevelop: 'gave reasons and used three time frames across the conversation',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a café in Amman', title: 'Role play A — Ordering at a café', ar: 'فِي المَقْهَى', you: 'a customer', them: 'the waiter',
      tasks: [
        { core: true, ex: 'أَهْلًا وَسَهْلًا! مَاذَا تَشْرَبُ؟', task: 'Order a drink.', help: 'أُرِيدُ … مِنْ فَضْلِكَ.', model: 'أُرِيدُ عَصِيرَ بُرْتُقَالٍ، مِنْ فَضْلِكَ.', modelEn: 'An orange juice, please.' },
        { core: true, ex: 'بِسُكَّرٍ أَمْ بِدُونِ سُكَّرٍ؟', task: 'Say how you want it.', help: 'بِدُونِ …', model: 'بِدُونِ سُكَّرٍ، وَمَعَ ثَلْجٍ.', modelEn: 'Without sugar, with ice.' },
        { core: true, ex: 'وَمَاذَا تَأْكُلُ؟', task: 'Order something to eat.', help: 'سَآكُلُ …', model: 'سَآكُلُ فَطِيرَةً بِالجُبْنِ.', modelEn: 'I’ll have a cheese pastry.' },
        { core: true, ex: 'حَاضِرٌ.', task: 'Ask how much it costs.', help: 'كَمْ …؟', model: 'كَمِ الحِسَابُ، مِنْ فَضْلِكَ؟', modelEn: 'How much is the bill, please?' },
        { core: true, unexpected: true, ex: 'ثَلَاثَةُ دَنَانِيرَ. هَلْ تُحِبُّ الطَّعَامَ الأُرْدُنِّيَّ؟', task: 'Answer the unexpected question (opinion + reason).', help: 'نَعَمْ، أُحِبُّ … لِأَنَّهُ …', model: 'نَعَمْ، أُحِبُّ المَنْسَفَ كَثِيرًا، لِأَنَّهُ لَذِيذٌ وَغَنِيٌّ.', modelEn: 'Yes, I love mansaf — it’s delicious and rich.' },
      ],
      girl: 'تَشْرَبِينَ · تَأْكُلِينَ · تُحِبِّينَ',
      notes: 'Core (Topic A · food and drink): urīdu … min faḍlika, bi-dūni, sa-ākulu, kam al-ḥisābu?, uḥibbu … li-annahu. EXAM-DAY TIP: if the waiter is a woman on your card, say min faḍliki.',
    },
    {
      id: 'B', level: 'Core+', setting: 'a pharmacy', title: 'Role play B — At the pharmacy', ar: 'فِي الصَّيْدَلِيَّةِ', you: 'a visitor who feels ill', them: 'the pharmacist',
      tasks: [
        { core: true, ex: 'مَسَاءَ الخَيْرِ، مَا المُشْكِلَةُ؟', task: 'Say what is wrong (two symptoms).', help: 'عِنْدِي … وَ…', model: 'عِنْدِي صُدَاعٌ شَدِيدٌ وَحُمَّى خَفِيفَةٌ.', modelEn: 'A bad headache and a slight fever.' },
        { core: true, ex: 'مُنْذُ مَتَى؟', task: 'Say since when.', help: 'مُنْذُ …', model: 'مُنْذُ أَمْسِ فِي المَسَاءِ.', modelEn: 'Since yesterday evening.' },
        { ex: 'مَاذَا أَكَلْتَ أَمْسِ؟', task: 'Say what you did and ate yesterday (past).', help: 'أَكَلْتُ … ثُمَّ …', model: 'أَكَلْتُ سَمَكًا فِي مَطْعَمٍ عَلَى الشَّاطِئِ، ثُمَّ جَلَسْتُ فِي الشَّمْسِ سَاعَتَيْنِ.', modelEn: 'Fish at a beach restaurant, then two hours in the sun.' },
        { ex: 'خُذْ هٰذِهِ الأَقْرَاصَ.', task: 'ASK two questions about the medicine.', help: 'كَمْ مَرَّةً …؟ وَهَلْ …؟', model: 'كَمْ مَرَّةً آخُذُهَا فِي اليَوْمِ؟ وَهَلْ آخُذُهَا قَبْلَ الأَكْلِ أَمْ بَعْدَهُ؟', modelEn: 'How many times a day? Before or after food?' },
        { unexpected: true, ex: 'مَرَّتَيْنِ بَعْدَ الأَكْلِ. وَمَاذَا سَتَفْعَلُ غَدًا؟', task: 'Answer the unexpected question (future + reason).', help: 'سَأَبْقَى … لِأَنَّ …', model: 'سَأَبْقَى فِي الفُنْدُقِ وَأَشْرَبُ مَاءً كَثِيرًا، لِأَنِّي أُرِيدُ أَنْ أَكُونَ بِخَيْرٍ قَبْلَ رِحْلَةِ البَتْرَاءِ.', modelEn: 'Stay at the hotel and drink lots of water — I want to be well before the Petra trip.' },
      ],
      girl: 'أَكَلْتِ · خُذِي · سَتَفْعَلِينَ',
      notes: 'Core+ (Topics A and C · health and holidays): ʿindī + two symptoms with agreement (ṣudāʿun shadīdun, ḥummā khafīfatun), mundhu, past sequence with thumma, the CANDIDATE asks kam marratan …? and … qabla … am baʿdahu?, sa- + li-annī.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a bookshop', title: 'Role play C — A part-time job interview', ar: 'مُقَابَلَةُ عَمَلٍ جُزْئِيٍّ', you: 'a student applying for a Saturday job', them: 'the bookshop manager',
      tasks: [
        { ex: 'لِمَاذَا تُرِيدُ أَنْ تَعْمَلَ فِي مَكْتَبَتِنَا؟', task: 'Give two reasons.', help: 'لِأَنِّي … ، وَأَيْضًا لِأَنَّ …', model: 'لِأَنِّي أُحِبُّ القِرَاءَةَ مُنْذُ طُفُولَتِي، وَأَيْضًا لِأَنَّ المَكْتَبَةَ قَرِيبَةٌ مِنْ بَيْتِي، فَأَسْتَطِيعُ أَنْ آتِيَ مَشْيًا.', modelEn: 'I’ve loved reading since childhood, and it’s near my home — I can walk.' },
        { ex: 'مَا مَهَارَاتُكَ؟', task: 'Skills with an example.', help: 'أُجِيدُ … ؛ مَثَلًا …', model: 'أُجِيدُ اسْتِخْدَامَ الحَاسُوبِ، وَأَتَكَلَّمُ العَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ؛ مَثَلًا، أُسَاعِدُ أَبِي فِي الرَّدِّ عَلَى رَسَائِلِ زَبَائِنِهِ.', modelEn: 'Good with computers, speak Arabic and English — I help my dad answer customers’ messages.' },
        { ex: 'هَلْ عَمِلْتَ مِنْ قَبْلُ؟', task: 'Narrate past experience + what you learnt.', help: 'نَعَمْ، فِي … عَمِلْتُ … فَتَعَلَّمْتُ …', model: 'نَعَمْ، فِي الصَّيْفِ المَاضِي عَمِلْتُ أُسْبُوعَيْنِ فِي مَكْتَبٍ، فَتَعَلَّمْتُ أَنْ أَكُونَ دَقِيقًا وَأَنْ أَحْتَرِمَ المَوَاعِيدَ.', modelEn: 'Two weeks in an office last summer — I learnt accuracy and punctuality.' },
        { ex: 'هٰذَا العَمَلُ يَوْمَ السَّبْتِ فَقَطْ. هَلْ يُنَاسِبُكَ؟', task: 'Accept, with a contrast.', help: 'نَعَمْ، يُنَاسِبُنِي ، أَمَّا الأَحَدُ فَهُوَ …', model: 'نَعَمْ، يُنَاسِبُنِي تَمَامًا، أَمَّا يَوْمُ الأَحَدِ فَأُخَصِّصُهُ لِلْمُرَاجَعَةِ وَلِعَائِلَتِي.', modelEn: 'Perfectly — Sundays are for revision and family.' },
        { unexpected: true, ex: 'وَكَيْفَ سَتَصْرِفُ رَاتِبَكَ؟', task: 'Answer the unexpected question (future + purpose).', help: 'سَأُوَفِّرُ … لِكَيْ …', model: 'سَأُوَفِّرُ نِصْفَهُ لِكَيْ أُسَافِرَ إِلَى المَغْرِبِ بَعْدَ الامْتِحَانَاتِ، وَسَأَشْتَرِي بِالبَاقِي كُتُبًا.', modelEn: 'Save half to travel to Morocco after the exams, and buy books with the rest.' },
      ],
      girl: 'تُرِيدِينَ · مَهَارَاتُكِ · عَمِلْتِ · يُنَاسِبُكِ · سَتَصْرِفِينَ رَاتِبَكِ · دَقِيقَةً',
      notes: 'Develop (Topics B, D and E · hobbies, work, travel): two linked reasons, ujīdu + a verbal noun + mathalan, past + fa-taʿallamtu an, ammā … fa- with a verb, sa-uwaffiru … li-kay. EXAM-DAY TIP: an interview card is formal — keep it polite and complete.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a school podcast', title: 'Role play D — Should every student learn a language?', ar: 'هَلْ يَجِبُ أَنْ يَتَعَلَّمَ كُلُّ طَالِبٍ لُغَةً أَجْنَبِيَّةً؟', you: 'a student guest', them: 'the podcast host',
      tasks: [
        { ex: 'هَلْ يَجِبُ أَنْ تَكُونَ اللُّغَاتُ إِلْزَامِيَّةً؟', task: 'State a thesis with two reasons.', help: 'فِي رَأْيِي … لِأَنَّهَا … وَلِأَنَّهَا …', model: 'فِي رَأْيِي، نَعَمْ، لِأَنَّ اللُّغَةَ تَفْتَحُ أَبْوَابَ العَمَلِ وَالدِّرَاسَةِ فِي الخَارِجِ، وَلِأَنَّهَا تُعَلِّمُنَا كَيْفَ يُفَكِّرُ الآخَرُونَ.', modelEn: 'Yes — languages open doors to work and study abroad, and teach us how others think.' },
        { ex: 'أَعْطِنَا مِثَالًا مِنْ حَيَاتِكَ.', task: 'Narrate an example (past → result).', help: 'عِنْدَمَا … ، اسْتَطَعْتُ أَنْ … مِمَّا …', model: 'عِنْدَمَا زُرْتُ الأُرْدُنَّ، اسْتَطَعْتُ أَنْ أَتَكَلَّمَ مَعَ بَائِعٍ فِي السُّوقِ بِالعَرَبِيَّةِ، مِمَّا جَعَلَهُ يَدْعُونَا إِلَى الشَّايِ فِي بَيْتِهِ.', modelEn: 'In Jordan I chatted with a market seller in Arabic — he invited us home for tea.' },
        { ex: 'لٰكِنَّ الإِنْجِلِيزِيَّةَ تَكْفِي، أَلَيْسَ كَذٰلِكَ؟', task: 'Concede and counter.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّ الإِنْجِلِيزِيَّةَ يُتَكَلَّمُ بِهَا فِي كُلِّ مَكَانٍ، غَيْرَ أَنَّ النَّاسَ يَفْتَحُونَ قُلُوبَهُمْ لِمَنْ يُكَلِّمُهُمْ بِلُغَتِهِمْ.', modelEn: 'English is spoken everywhere, but people open their hearts to those who speak their language.' },
        { ex: 'كَيْفَ نُشَجِّعُ الطُّلَّابَ؟', task: 'Suggest two solutions with the passive.', help: 'يَجِبُ أَنْ تُدَرَّسَ … وَأَنْ …', model: 'يَجِبُ أَنْ تُدَرَّسَ اللُّغَاتُ مِنَ المَرْحَلَةِ الابْتِدَائِيَّةِ، وَأَنْ تُنَظَّمَ رِحْلَاتُ تَبَادُلٍ، لِأَنَّ الطَّالِبَ يَتَعَلَّمُ أَسْرَعَ عِنْدَمَا يَحْتَاجُ إِلَى اللُّغَةِ.', modelEn: 'Teach languages from primary school and organise exchanges — students learn faster when they need the language.' },
        { unexpected: true, ex: 'لَوْ تَعَلَّمْتَ لُغَةً جَدِيدَةً، فَأَيُّهَا تَخْتَارُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ تَعَلَّمْتُ …، لَاخْتَرْتُ … لِأَنَّ …', model: 'لَوْ تَعَلَّمْتُ لُغَةً جَدِيدَةً، لَاخْتَرْتُ التُّرْكِيَّةَ، لِأَنَّ فِيهَا كَلِمَاتٍ عَرَبِيَّةً كَثِيرَةً، وَلَزُرْتُ إِسْطَنْبُولَ لِأُمَارِسَهَا.', modelEn: 'Turkish — it has many Arabic words — and I’d visit Istanbul to practise.' },
      ],
      girl: 'أَعْطِينَا · حَيَاتِكِ · تَعَلَّمْتِ · تَخْتَارِينَ',
      notes: 'Stretch (Topics D and E · education, international world): a thesis with two li-anna clauses, ʿindamā … mimmā jaʿalahu, a concession with the passive yutakallamu bihā, two passive subjunctives (tudarrasa, tunaẓẓama), law … la- ×2. EXAM-DAY TIP: a debate task rewards balance — agree with part of the challenge before you counter it.',
      modelFoot: 'Stretch: a thesis, a lived example, a passive concession, two solutions and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَسْئِلَةٌ مِنْ كُلِّ المَحَاوِرِ', aim: 'one full, accurate sentence per question',
      qs: [
        { q: 'مَا وَجْبَتُكَ المُفَضَّلَةُ؟ (A)', en: 'What is your favourite meal? (A)', start: 'وَجْبَتِي المُفَضَّلَةُ …', model: 'وَجْبَتِي المُفَضَّلَةُ الأَرُزُّ مَعَ الدَّجَاجِ.', modelEn: 'Rice with chicken.' },
        { q: 'مَاذَا تَفْعَلُ فِي وَقْتِ الفَرَاغِ؟ (B)', en: 'What do you do in your free time? (B)', start: 'فِي وَقْتِ الفَرَاغِ …', model: 'فِي وَقْتِ الفَرَاغِ أَقْرَأُ وَأَلْعَبُ كُرَةَ السَّلَّةِ.', modelEn: 'I read and play basketball.' },
        { q: 'صِفْ بَيْتَكَ. (B · C)', en: 'Describe your home. (B · C)', start: 'بَيْتِي … ، فِيهِ …', model: 'بَيْتِي كَبِيرٌ، فِيهِ أَرْبَعُ غُرَفٍ وَحَدِيقَةٌ.', modelEn: 'Big, with four rooms and a garden.' },
        { q: 'مَا مَادَّتُكَ المُفَضَّلَةُ؟ (D)', en: 'What is your favourite subject? (D)', start: 'مَادَّتِي المُفَضَّلَةُ … لِأَنَّ …', model: 'مَادَّتِي المُفَضَّلَةُ العُلُومُ، لِأَنَّهَا مُمْتِعَةٌ.', modelEn: 'Science — it’s fun.' },
        { q: 'أَيْنَ قَضَيْتَ عُطْلَتَكَ الأَخِيرَةَ؟ (E)', en: 'Where did you spend your last holiday? (E)', start: 'قَضَيْتُ عُطْلَتِي فِي …', model: 'قَضَيْتُ عُطْلَتِي فِي إِسْبَانْيَا مَعَ عَائِلَتِي.', modelEn: 'In Spain with my family.' },
      ],
      foot: 'Core: one full sentence for every question — check the tense in the question (qaḍayta = past). Stuck? عَفْوًا، لَمْ أَفْهَمْ. هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'A full, accurate sentence + a reason = a secure Core answer.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'تَطْوِيرُ الإِجَابَةِ', aim: 'two or three sentences, a reason and two time frames',
      qs: [
        { q: 'هَلْ تَأْكُلُ بِطَرِيقَةٍ صِحِّيَّةٍ؟ (A)', en: 'Do you eat healthily? (A)', start: 'أُحَاوِلُ أَنْ … لٰكِنَّ … وَمِنَ الآنَ سَأُقَلِّلُ …', model: 'أُحَاوِلُ أَنْ آكُلَ الخُضَارَ كُلَّ يَوْمٍ، لٰكِنَّنِي أُحِبُّ الحَلَوِيَّاتِ؛ وَمِنَ الآنَ سَأُقَلِّلُ السُّكَّرَ.', modelEn: 'I try to eat vegetables daily but love sweets — from now on I’ll cut sugar.' },
        { q: 'كَيْفَ تَحْتَفِلُ عَائِلَتُكَ بِالعِيدِ؟ (B · E)', en: 'How does your family celebrate Eid? (B · E)', start: 'نُصَلِّي … ثُمَّ نَزُورُ … ؛ وَفِي العِيدِ المَاضِي …', model: 'نُصَلِّي صَلَاةَ العِيدِ، ثُمَّ نَزُورُ أَقَارِبَنَا؛ وَفِي العِيدِ المَاضِي سَافَرْنَا إِلَى بَيْتِ جَدَّتِي.', modelEn: 'We pray Eid prayer, then visit relatives; last Eid we went to grandma’s.' },
        { q: 'هَلْ تُحِبُّ مَدِينَتَكَ؟ لِمَاذَا؟ (C)', en: 'Do you like your town? Why? (C)', start: 'نَعَمْ، لِأَنَّ … ، لٰكِنْ يَنْقُصُهَا …', model: 'نَعَمْ، لِأَنَّ فِيهَا حَدَائِقَ وَمَكْتَبَةً كَبِيرَةً، لٰكِنْ يَنْقُصُهَا مَرْكَزٌ لِلشَّبَابِ.', modelEn: 'Yes — parks and a big library — but it lacks a youth centre.' },
        { q: 'مَاذَا سَتَفْعَلُ بَعْدَ الامْتِحَانَاتِ؟ (D)', en: 'What will you do after the exams? (D)', start: 'سَأَ… ثُمَّ … لِأَنِّي …', model: 'سَأَرْتَاحُ أُسْبُوعًا، ثُمَّ سَأَبْحَثُ عَنْ عَمَلٍ صَيْفِيٍّ، لِأَنِّي أُرِيدُ أَنْ أَكْسِبَ خِبْرَةً.', modelEn: 'Rest a week, then look for a summer job to gain experience.' },
        { q: 'لِمَاذَا تَتَعَلَّمُ العَرَبِيَّةَ؟ (E)', en: 'Why do you learn Arabic? (E)', start: 'أَتَعَلَّمُهَا لِأَنَّ … ؛ وَعِنْدَمَا كُنْتُ صَغِيرًا …', model: 'أَتَعَلَّمُهَا لِأَفْهَمَ القُرْآنَ وَأَتَكَلَّمَ مَعَ أَقَارِبِي؛ وَعِنْدَمَا كُنْتُ صَغِيرًا كُنْتُ أَخْجَلُ مِنْ أَخْطَائِي.', modelEn: 'To understand the Qur’an and talk with relatives; when I was little I was shy of my mistakes.' },
      ],
      foot: 'Develop: two or three linked sentences — a reason, a contrast and a past or future detail.',
      modelFoot: 'Develop: answer + reason + a second time frame — the same pattern on every topic.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'أَسْئِلَةُ التَّفْكِيرِ العَمِيقِ', aim: 'a developed, balanced answer with a top-band structure',
      qs: [
        { q: 'مَنِ المَسْؤُولُ عَنْ صِحَّةِ الشَّبَابِ: الأُسْرَةُ أَمِ المَدْرَسَةُ؟ (A · D)', en: 'Who is responsible for young people’s health? (A · D)', start: 'أَرَى أَنَّ … ؛ فَالأُسْرَةُ … بَيْنَمَا المَدْرَسَةُ …', model: 'أَرَى أَنَّ المَسْؤُولِيَّةَ مُشْتَرَكَةٌ؛ فَالأُسْرَةُ تَخْتَارُ الطَّعَامَ فِي البَيْتِ، بَيْنَمَا تُعَلِّمُ المَدْرَسَةُ العَادَاتِ الصِّحِّيَّةَ وَتُوَفِّرُ الرِّيَاضَةَ.', modelEn: 'It’s shared: families choose food at home, while schools teach healthy habits and provide sport.' },
        { q: 'هَلْ جَعَلَتِ التِّكْنُولُوجْيَا حَيَاتَنَا أَسْهَلَ؟ (C)', en: 'Has technology made life easier? (C)', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهَا وَفَّرَتْ عَلَيْنَا الوَقْتَ، غَيْرَ أَنَّهَا جَعَلَتْنَا مَشْغُولِينَ دَائِمًا، مِمَّا يُقَلِّلُ وَقْتَ الرَّاحَةِ وَالتَّفْكِيرِ.', modelEn: 'It saves time, but keeps us always busy, reducing time to rest and think.' },
        { q: 'مَا الَّذِي يَجْعَلُ المَدِينَةَ مَكَانًا جَيِّدًا لِلْعَيْشِ؟ (C)', en: 'What makes a town a good place to live? (C)', start: 'فِي رَأْيِي … ، لِأَنَّ … مِمَّا …', model: 'فِي رَأْيِي، المُوَاصَلَاتُ النَّظِيفَةُ وَالمَسَاحَاتُ الخَضْرَاءُ، لِأَنَّهَا تُقَرِّبُ النَّاسَ بَعْضَهُمْ مِنْ بَعْضٍ، مِمَّا يَبْنِي مُجْتَمَعًا أَقْوَى.', modelEn: 'Clean transport and green spaces — they bring people together, building a stronger community.' },
        { q: 'هَلِ العَمَلُ فِي الخَارِجِ فِكْرَةٌ جَيِّدَةٌ؟ (D · E)', en: 'Is working abroad a good idea? (D · E)', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، يُوَسِّعُ العَمَلُ فِي الخَارِجِ خِبْرَتَنَا وَيُعَلِّمُنَا الاسْتِقْلَالَ، وَمِنْ نَاحِيَةٍ أُخْرَى، قَدْ نَشْعُرُ بِالوَحْدَةِ بَعِيدًا عَنِ العَائِلَةِ.', modelEn: 'It broadens experience and teaches independence, but we may feel lonely far from family.' },
        { q: 'لَوْ عُدْتَ إِلَى بِدَايَةِ الصَّفِّ العَاشِرِ، فَمَاذَا تُغَيِّرُ؟', en: 'If you went back to the start of Year 10, what would you change?', start: 'لَوْ عُدْتُ، لَبَدَأْتُ … وَلَـمَا …', model: 'لَوْ عُدْتُ، لَبَدَأْتُ المُرَاجَعَةَ مُبَكِّرًا، وَلَقَرَأْتُ بِالعَرَبِيَّةِ كُلَّ يَوْمٍ، لِأَنَّ القَلِيلَ الدَّائِمَ خَيْرٌ مِنَ الكَثِيرِ المُنْقَطِعِ.', modelEn: 'I’d start revising earlier and read Arabic daily — a little, often, beats a lot, rarely.' },
      ],
      foot: 'Stretch: opinion with baynamā, a concession with mimmā, a balanced view and law … la- — finish strong.',
      modelFoot: 'Stretch: range across all five topics — and a proverb-style ending leaves a strong final impression.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I answered every task in full sentences, with no long silences.' },
    { route: 'core', text: 'I checked who I am and who the examiner is before I started.' },
    { route: 'develop', text: 'I gave reasons and used three time frames in the conversation.' },
    { route: 'develop', text: 'I asked my role-play questions clearly and correctly.' },
    { route: 'stretch', text: 'I used a concession, mimmā and law … la- accurately.' },
  ],
};
speak.CONV[1].qs[3].start = 'سَأَرْتَاحُ … ثُمَّ … لِأَنِّي …';
speak.CONV[2].qs[4].start = 'لَوْ عُدْتُ، لَبَدَأْتُ … وَلَقَرَأْتُ …';
speak.RP[2].tasks[3].help = 'نَعَمْ، يُنَاسِبُنِي … أَمَّا يَوْمُ الأَحَدِ فَأُخَصِّصُهُ …';

const Q2_CORE = `عَزِيزَتِي مَرْيَمُ،
السَّلَامُ عَلَيْكُمْ! كَيْفَ حَالُكِ؟ احْتَفَلْنَا بِعِيدِ الفِطْرِ يَوْمَ الأَحَدِ المَاضِي فِي بَيْتِ جَدَّتِي فِي بِرْمِنْغْهَامَ. فِي الصَّبَاحِ صَلَّيْنَا صَلَاةَ العِيدِ فِي المَسْجِدِ، ثُمَّ لَبِسْتُ فُسْتَانًا أَخْضَرَ جَدِيدًا. اجْتَمَعَتْ كُلُّ العَائِلَةِ، وَكَانَ عَدَدُنَا عِشْرِينَ شَخْصًا! أَكَلْنَا المَعْمُولَ وَالكَبْسَةَ، وَأَعْطَانِي عَمِّي عِيدِيَّةً. أُحِبُّ العِيدَ كَثِيرًا، لِأَنَّ العَائِلَةَ تَجْتَمِعُ وَالجَمِيعُ سُعَدَاءُ. فِي العِيدِ القَادِمِ سَأُسَاعِدُ أُمِّي فِي صُنْعِ الحَلَوِيَّاتِ. وَأَنْتِ، كَيْفَ احْتَفَلْتِ بِالعِيدِ؟
مَعَ مَحَبَّتِي،
خَدِيجَةُ`;
const Q2_FULL = `عَزِيزَتِي مَرْيَمُ،
عِيدُكِ مُبَارَكٌ! أَكْتُبُ إِلَيْكِ لِأُخْبِرَكِ بِأَجْمَلِ عِيدِ فِطْرٍ قَضَيْتُهُ حَتَّى الآنَ، فَقَدِ اجْتَمَعَتْ عَائِلَتُنَا كُلُّهَا لِأَوَّلِ مَرَّةٍ مُنْذُ خَمْسِ سَنَوَاتٍ فِي بَيْتِ جَدَّتِي بِبِرْمِنْغْهَامَ. بَعْدَ صَلَاةِ العِيدِ، الَّتِي أُقِيمَتْ فِي الحَدِيقَةِ العَامَّةِ بِسَبَبِ كَثْرَةِ المُصَلِّينَ، عُدْنَا إِلَى البَيْتِ، فَوَجَدْنَا المَائِدَةَ مَلِيئَةً بِالكَبْسَةِ وَالمَعْمُولِ الَّذِي خَبَزَتْهُ جَدَّتِي بِنَفْسِهَا. وَمَعَ أَنَّ البَيْتَ كَانَ مُزْدَحِمًا وَصَاخِبًا، فَقَدْ شَعَرْتُ بِسَعَادَةٍ لَا تُوصَفُ وَأَنَا أَسْمَعُ ضَحِكَاتِ أَبْنَاءِ عُمُومَتِي. فِي رَأْيِي، العِيدُ أَهَمُّ مِنَ الهَدَايَا، لِأَنَّهُ يَصِلُ مَا قَطَعَتْهُ الأَيَّامُ. وَإِنْ شَاءَ اللّٰهُ، سَأَدْعُوكِ إِلَى بَيْتِنَا فِي العِيدِ القَادِمِ، فَهَلْ تَقْبَلِينَ؟
مَعَ أَطْيَبِ تَمَنِّيَاتِي،
خَدِيجَةُ`;
const Q3A_CORE = `فِي الصَّيْفِ المَاضِي سَافَرْتُ مَعَ عَائِلَتِي إِلَى الأُرْدُنِّ لِمُدَّةِ عَشَرَةِ أَيَّامٍ. كَانَتْ هٰذِهِ أَوَّلَ رِحْلَةٍ لِي إِلَى بَلَدٍ عَرَبِيٍّ، وَكُنْتُ مُتَحَمِّسَةً جِدًّا، لِأَنِّي أَدْرُسُ العَرَبِيَّةَ مُنْذُ ثَلَاثِ سَنَوَاتٍ.
سَافَرْنَا بِالطَّائِرَةِ مِنْ لَنْدَنَ إِلَى عَمَّانَ، وَاسْتَغْرَقَتِ الرِّحْلَةُ خَمْسَ سَاعَاتٍ. نَزَلْنَا فِي فُنْدُقٍ جَمِيلٍ فِي وَسَطِ المَدِينَةِ، وَكَانَتْ غُرْفَتِي تُطِلُّ عَلَى جَبَلٍ كَبِيرٍ. كَانَ الجَوُّ حَارًّا جِدًّا، لٰكِنَّ النَّاسَ كَانُوا لُطَفَاءَ وَكُرَمَاءَ.
زُرْنَا البَتْرَاءَ، وَهِيَ مَدِينَةٌ قَدِيمَةٌ جَمِيلَةٌ، وَسَبَحْنَا فِي البَحْرِ المَيِّتِ، وَأَكَلْنَا المَنْسَفَ فِي مَطْعَمٍ شَعْبِيٍّ. فِي يَوْمٍ مِنَ الأَيَّامِ، تَكَلَّمْتُ بِالعَرَبِيَّةِ مَعَ بَائِعَةٍ فِي السُّوقِ، وَاشْتَرَيْتُ مِنْهَا وِشَاحًا أَحْمَرَ. كُنْتُ فَخُورَةً جِدًّا، لِأَنَّهَا فَهِمَتْنِي!
أَظُنُّ أَنَّ الأُرْدُنَّ أَجْمَلُ بَلَدٍ زُرْتُهُ. الآنَ أُرَاجِعُ العَرَبِيَّةَ كُلَّ يَوْمٍ، وَفِي المُسْتَقْبَلِ سَأَزُورُ مِصْرَ وَالمَغْرِبَ إِنْ شَاءَ اللّٰهُ.`;
const Q3A_FULL = `لَمْ أَكُنْ أَتَوَقَّعُ أَنَّ رِحْلَةً مُدَّتُهَا عَشَرَةُ أَيَّامٍ سَتُغَيِّرُ عَلَاقَتِي بِاللُّغَةِ العَرَبِيَّةِ، وَلٰكِنَّ هٰذَا مَا حَدَثَ عِنْدَمَا سَافَرْتُ مَعَ عَائِلَتِي إِلَى الأُرْدُنِّ فِي الصَّيْفِ المَاضِي.
هَبَطَتْ طَائِرَتُنَا فِي عَمَّانَ لَيْلًا، فَاسْتَقْبَلَنَا هَوَاءٌ دَافِئٌ يَحْمِلُ رَائِحَةَ القَهْوَةِ وَالهَيْلِ، وَكَانَ خَالِي يَنْتَظِرُنَا بِابْتِسَامَتِهِ الوَاسِعَةِ. وَفِي الأَيَّامِ التَّالِيَةِ، تَجَوَّلْنَا بَيْنَ أَسْوَاقِ المَدِينَةِ القَدِيمَةِ، ثُمَّ مَشَيْنَا فِي البَتْرَاءِ، تِلْكَ المَدِينَةِ الوَرْدِيَّةِ الَّتِي نُحِتَتْ فِي الصَّخْرِ قَبْلَ أَلْفَيْ عَامٍ، وَسَبَحْنَا فِي البَحْرِ المَيِّتِ الَّذِي يَطْفُو فِيهِ الإِنْسَانُ دُونَ جُهْدٍ.
غَيْرَ أَنَّ أَجْمَلَ لَحْظَةٍ لَمْ تَكُنْ فِي مَكَانٍ سِيَاحِيٍّ، بَلْ فِي دُكَّانٍ صَغِيرٍ، حِينَ تَحَدَّثْتُ مَعَ بَائِعَةٍ عَجُوزٍ عَنْ عَائِلَتِهَا، فَابْتَسَمَتْ وَقَالَتْ: "عَرَبِيَّتُكِ جَمِيلَةٌ يَا بِنْتِي". عِنْدَئِذٍ أَدْرَكْتُ أَنَّ سَنَوَاتِ الدِّرَاسَةِ أَمَامَ الشَّاشَةِ لَمْ تَضِعْ سُدًى.
مُنْذُ عَوْدَتِي صِرْتُ أُرَاجِعُ بِحَمَاسٍ أَكْبَرَ، وَأُشَاهِدُ الأَخْبَارَ بِالعَرَبِيَّةِ كُلَّ مَسَاءٍ. وَلَوْ أُتِيحَتْ لِي الفُرْصَةُ، لَدَرَسْتُ سَنَةً كَامِلَةً فِي عَمَّانَ بَعْدَ المَدْرَسَةِ.`;
const Q3B_FULL = `مُنْذُ سَنَوَاتٍ قَلِيلَةٍ، كَانَ التَّعَلُّمُ عَبْرَ الإِنْتَرْنِتْ فِكْرَةً غَرِيبَةً، أَمَّا اليَوْمَ فَيَدْرُسُ آلَافُ الطُّلَّابِ فِي مَدَارِسَ إِلِكْتُرُونِيَّةٍ كَامِلَةٍ. فَهَلْ هٰذَا النَّوْعُ مِنَ التَّعَلُّمِ أَفْضَلُ مِنَ المَدْرَسَةِ التَّقْلِيدِيَّةِ؟
مِنْ نَاحِيَةٍ، يُوَفِّرُ التَّعَلُّمُ عَبْرَ الإِنْتَرْنِتْ الوَقْتَ وَالمَالَ، إِذْ لَا يَحْتَاجُ الطَّالِبُ إِلَى المُوَاصَلَاتِ، كَمَا يُمْكِنُهُ أَنْ يُعِيدَ مُشَاهَدَةَ الدُّرُوسِ المُسَجَّلَةِ مَتَى شَاءَ، وَأَنْ يَتَعَلَّمَ بِالسُّرْعَةِ الَّتِي تُنَاسِبُهُ. وَمِنْ نَاحِيَةٍ أُخْرَى، يَفْتَقِدُ كَثِيرٌ مِنَ الطُّلَّابِ الأَصْدِقَاءَ وَالأَنْشِطَةَ الرِّيَاضِيَّةَ، مِمَّا قَدْ يُشْعِرُهُمْ بِالوَحْدَةِ.
وَقَدْ عِشْتُ التَّجْرِبَتَيْنِ؛ فَفِي مَدْرَسَتِي القَدِيمَةِ كُنْتُ أَقْضِي سَاعَةً كُلَّ يَوْمٍ فِي الحَافِلَةِ، بَيْنَمَا أَسْتَغِلُّ هٰذِهِ السَّاعَةَ الآنَ فِي القِرَاءَةِ. وَمَعَ ذٰلِكَ، فَإِنَّنِي أَشْتَاقُ أَحْيَانًا إِلَى الضَّحِكِ مَعَ زَمِيلَاتِي فِي السَّاحَةِ، وَإِلَى الحِصَصِ العَمَلِيَّةِ فِي المُخْتَبَرِ.
لِذٰلِكَ أَرَى أَنَّ النَّجَاحَ لَا يَتَوَقَّفُ عَلَى المَكَانِ، بَلْ عَلَى انْضِبَاطِ الطَّالِبِ وَجَوْدَةِ المُعَلِّمِ. وَإِذَا جَمَعَتِ المَدَارِسُ بَيْنَ الطَّرِيقَتَيْنِ، فَسَيَحْصُلُ الطُّلَّابُ عَلَى أَفْضَلِ مَا فِيهِمَا.`;

const write = {
  ...base,
  focus: 'The final timed Paper 4 mock: fill in a form for a summer Arabic course, write an email to a friend about celebrating Eid, and write an extended piece about a trip to an Arab country or about whether online learning is better than school. Exam-day skills: read every bullet before you write, keep to about 8 / 12 / 25 minutes, and save 2 minutes at the end for the five-point check.',
  lift: [
    { ar: 'اجْتَمَعَتْ كُلُّ العَائِلَةِ، وَكَانَ عَدَدُنَا عِشْرِينَ شَخْصًا', en: 'the whole family gathered — there were twenty of us' },
    { ar: 'لَبِسْتُ فُسْتَانًا أَخْضَرَ جَدِيدًا', en: 'I wore a new green dress' },
    { ar: 'أُحِبُّ العِيدَ كَثِيرًا، لِأَنَّ العَائِلَةَ تَجْتَمِعُ', en: 'I love Eid because the family gets together' },
  ],
  checkTip: 'FINAL FIVE-POINT CHECK (2 min): 1) every bullet answered; 2) verb endings — I (–tu), we (–nā), she (–at), and to a girl: –ti / –īna; 3) agreement — fustānan akhḍara jadīdan; 4) numbers + nouns — ʿishrīna shakhṣan; 5) past, present AND future verbs. Then stop: do not rewrite whole sentences in the last minute.',
  FORM: {
    title: 'Summer Arabic course: registration form', ar: 'اسْتِمَارَةُ التَّسْجِيلِ فِي دَوْرَةٍ صَيْفِيَّةٍ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'خَدِيجَةُ عُمَرُ', modelEn: 'Khadija Omar' },
      { core: true, ar: 'العُمُرُ', en: 'Age', model: 'سِتَّ عَشْرَةَ سَنَةً', modelEn: '16' },
      { core: true, ar: 'الجِنْسِيَّةُ', en: 'Nationality', model: 'بِرِيطَانِيَّةٌ', modelEn: 'British' },
      { core: true, ar: 'اللُّغَاتُ', en: 'Languages', model: 'الإِنْجِلِيزِيَّةُ وَالعَرَبِيَّةُ وَالأُورْدِيَّةُ', modelEn: 'English, Arabic and Urdu' },
      { core: true, ar: 'المُسْتَوَى فِي العَرَبِيَّةِ', en: 'Level in Arabic', model: 'مُتَوَسِّطٌ', modelEn: 'intermediate' },
      { core: true, ar: 'الهِوَايَاتُ', en: 'Hobbies', model: 'القِرَاءَةُ وَالسِّبَاحَةُ', modelEn: 'reading and swimming' },
      { ar: 'مُدَّةُ الدَّوْرَةِ المَطْلُوبَةُ', en: 'Course length wanted', model: 'أُسْبُوعَانِ فِي يُولْيُو', modelEn: 'two weeks in July' },
      { ar: 'جُمْلَةٌ: لِمَاذَا تُرِيدِينَ هٰذِهِ الدَّوْرَةَ؟', en: 'ONE sentence: why this course?', model: 'أُرِيدُ أَنْ أُحَسِّنَ مُحَادَثَتِي، لِأَنِّي سَأَدْرُسُ العَرَبِيَّةَ فِي الجَامِعَةِ.', modelEn: 'To improve my speaking — I’ll study Arabic at university.' },
    ],
    foot: 'One word or a short phrase for each box. Box 3: a girl writes biriṭāniyyatun (f.); box 2: a number + sanatan. EXAM-DAY TIP: never leave a box empty — a simple correct answer still scores.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Mixed topics: personal details (B), languages and the international world (E), education (D). Box 7: the dual usbūʿāni.',
  },
  Q2: {
    short: 'an email about celebrating Eid', title: 'Question 2: celebrating Eid', ar: 'الاحْتِفَالُ بِالعِيدِ',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • where and with whom you celebrated Eid • what you wore and what you ate • why you like Eid • your plans for next Eid, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Clothes and food, with agreement.', 'Past, present AND future.', 'About 80–90 words.'],
    phrases: [['احْتَفَلْنَا بِالعِيدِ فِي …', 'we celebrated Eid at …'], ['لَبِسْتُ … وَأَكَلْنَا …', 'I wore … and we ate …'], ['أُحِبُّ العِيدَ لِأَنَّ …', 'I love Eid because …'], ['فِي العِيدِ القَادِمِ سَأُسَاعِدُ …', 'next Eid I will help …']],
    rubric: [
      ['task', 'اكْتُبِي رِسَالَةً إِلَى صَدِيقَتِكِ عَنِ الاحْتِفَالِ بِالعِيدِ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about celebrating Eid (80–90 words).'],
      ['1', 'أَيْنَ احْتَفَلْتِ بِالعِيدِ؟ وَمَعَ مَنْ؟', 'Where and with whom you celebrated'],
      ['2', 'مَاذَا لَبِسْتِ؟ وَمَاذَا أَكَلْتُمْ؟', 'What you wore and what you ate'],
      ['3', 'لِمَاذَا تُحِبِّينَ العِيدَ؟', 'Why you like Eid'],
      ['4', 'مَا خِطَطُكِ لِلْعِيدِ القَادِمِ؟ وَاسْأَلِي صَدِيقَتَكِ سُؤَالًا.', 'Plans for next Eid; a question'],
    ],
    qwords: 'أَيْنَ / مَعَ مَنْ (where / with whom — PAST) · لَبِسْتِ / أَكَلْتُمْ (PAST: what you wore and ate) · لِمَاذَا (reason → li-anna) · خِطَطُكِ (FUTURE)',
    frames: [
      ['start', 'عَزِيزَتِي ______ ، كَيْفَ حَالُكِ؟', 'Dear …, how are you?'],
      ['1', 'احْتَفَلْنَا بِالعِيدِ فِي ______ مَعَ ______ .', 'We celebrated Eid at … with …'],
      ['2', 'لَبِسْتُ ______ ، وَأَكَلْنَا ______ .', 'I wore …, and we ate …'],
      ['3', 'أُحِبُّ العِيدَ كَثِيرًا، لِأَنَّ ______ .', 'I love Eid because …'],
      ['4', 'فِي العِيدِ القَادِمِ سَأُسَاعِدُ ______ .', 'Next Eid I will help …'],
      ['end', 'وَأَنْتِ، كَيْفَ ______ ؟ مَعَ مَحَبَّتِي.', 'And you, how …? With love.'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Dear Maryam, peace be upon you! How are you? We celebrated Eid al-Fitr last Sunday at my grandma’s in Birmingham. In the morning we prayed Eid prayer at the mosque, then I put on a new green dress. The whole family gathered — there were twenty of us! We ate maamoul and kabsa, and my uncle gave me Eid money. I love Eid because the family gets together and everyone is happy. Next Eid I’ll help my mum make the sweets. And you, how did you celebrate? With love, Khadija.”',
      find: ['احْتَفَلْنَا بِعِيدِ الفِطْرِ', 'فُسْتَانًا أَخْضَرَ جَدِيدًا', 'عِشْرِينَ شَخْصًا', 'سَأُسَاعِدُ أُمِّي'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Maryam, Eid Mubarak! I’m writing to tell you about the best Eid al-Fitr I’ve had so far: our whole family gathered for the first time in five years at grandma’s in Birmingham. After the Eid prayer — held in the park because there were so many worshippers — we went home to a table full of kabsa and maamoul that grandma baked herself. Although the house was crowded and noisy, I felt indescribable joy hearing my cousins laugh. In my view Eid matters more than presents, because it reconnects what the days have cut apart. God willing, I’ll invite you to our home next Eid — will you accept? Best wishes, Khadija.”',
      find: ['لِأَوَّلِ مَرَّةٍ مُنْذُ', 'الَّتِي أُقِيمَتْ', 'مَعَ أَنَّ … فَقَدْ', 'أَهَمُّ مِنَ الهَدَايَا'],
    },
  },
  Q3: {
    a: { title: 'رِحْلَةٌ إِلَى بَلَدٍ عَرَبِيٍّ', en: 'A trip to an Arab country', bullets: 'إِلَى أَيْنَ وَمَتَى وَمَعَ مَنْ · السَّفَرُ وَالمَكَانُ وَالطَّقْسُ · مَا فَعَلْتِ وَمَوْقِفٌ لَا تَنْسَيْنَهُ · رَأْيُكِ وَخُطَطُكِ', bulletsEn: 'Where, when and with whom · the journey, the place and the weather · what you did and a moment you won’t forget · your opinion and plans' },
    b: { title: 'هَلِ التَّعَلُّمُ عَبْرَ الإِنْتَرْنِتْ أَفْضَلُ مِنَ المَدْرَسَةِ؟', en: 'Is online learning better than going to school?', bullets: 'المَوْضُوعُ · المَزَايَا وَالعُيُوبُ · مِثَالٌ مِنْ تَجْرِبَتِكِ · رَأْيُكِ', bulletsEn: 'The issue · advantages and disadvantages · an example from your own experience · your opinion' },
    plan: [
      'Where + when + who — fī aṣ-ṣayfi al-māḍī sāfartu maʿa … ilā …; kuntu mutaḥammisatan li-annī …',
      'Journey + place + weather — sāfarnā bi-…; istaghraqat ar-riḥlatu …; kāna al-jawwu …',
      'What you did + a moment — zurnā …; fī yawmin mina al-ayyām …; kuntu fakhūratan …',
      'Opinion + future — aẓunnu anna … ajmalu …; al-āna …; sa-azūru …; Stretch: lam akun atawaqqaʿu, lam takun … bal, law … la-.',
    ],
    frames: [
      { ar: 'كُنْتُ مُتَحَمِّسَةً جِدًّا، لِأَنِّي أَدْرُسُ العَرَبِيَّةَ.', en: 'past + reason: I was excited (f.).' },
      { ar: 'أَظُنُّ أَنَّ الأُرْدُنَّ أَجْمَلُ بَلَدٍ زُرْتُهُ.', en: 'superlative: the most beautiful.' },
      { ar: 'فِي المُسْتَقْبَلِ سَأَزُورُ مِصْرَ وَالمَغْرِبَ.', en: 'future: I will visit Egypt and Morocco.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Last summer: ten days in Jordan with my family — my first Arab country; excited after three years of Arabic → five-hour flight to Amman; a hotel facing a mountain; hot, but kind people → Petra, the Dead Sea and mansaf; I spoke Arabic with a market seller and bought a red scarf — proud she understood me → Jordan is the most beautiful country I’ve visited; next, Egypt and Morocco.', find: ['كُنْتُ مُتَحَمِّسَةً جِدًّا', 'وَاسْتَغْرَقَتِ الرِّحْلَةُ', 'وِشَاحًا أَحْمَرَ', 'أَجْمَلُ بَلَدٍ زُرْتُهُ'], notes: 'Core model (a girl writing — feminine adjectives: mutaḥammisatan, fakhūratan): a travel narrative across topics — family (B), transport and weather (A, C), shopping and a colour (B), the Arab world (E) — with mundhu, a number + noun, a superlative and three time frames.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'I never expected a ten-day trip to change my relationship with Arabic — but it did, in Jordan last summer → we landed in Amman at night to warm air smelling of coffee and cardamom; we wandered old markets, walked through Petra — the pink city carved into rock two thousand years ago — and floated effortlessly in the Dead Sea → yet the best moment was in a tiny shop, chatting with an old saleswoman who smiled: “your Arabic is beautiful, my daughter” — then I realised my years studying in front of a screen were not wasted → since then I revise with more enthusiasm and watch the news in Arabic; “if I had the chance, I would study a whole year in Amman after school”.', find: ['لَمْ أَكُنْ أَتَوَقَّعُ', 'الَّتِي نُحِتَتْ فِي الصَّخْرِ', 'لَمْ تَكُنْ … بَلْ', 'وَلَوْ أُتِيحَتْ … لَدَرَسْتُ'], notes: 'Full-mark model: a negated-expectation hook, a sensory description (hawāʾun dāfiʾun yaḥmilu …), a passive relative (allatī nuḥitat), apposition (tilka al-madīnati al-wardiyyati), lam takun … bal, ʿindaʾidhin + adraktu anna, ṣirtu + present, and law + a passive verb … la-.' },
      { which: 'ب', level: 'Full', subtitle: 'online or at school?', text: Q3B_FULL, en: 'Online learning was a strange idea a few years ago; today thousands study in full online schools — is it better than a traditional school? → it saves time and money (no transport) and lessons can be rewatched; yet many students miss friends and sport, which can make them feel lonely → I have lived both: at my old school I spent an hour a day on the bus, whereas now I use that hour to read; still, I sometimes miss laughing with classmates in the playground → success depends not on the place but on the student’s discipline and the teacher’s quality; “if schools combine both methods, students will get the best of each”.', find: ['أَمَّا اليَوْمَ فَيَدْرُسُ', 'إِذْ لَا يَحْتَاجُ', 'عِشْتُ التَّجْرِبَتَيْنِ', 'لَا يَتَوَقَّفُ عَلَى … بَلْ'], notes: 'Full-mark model for the Stretch title, written by an online-school student: a then/now hook with ammā … fa-, idh + kamā for developed advantages, mimmā qad, a personal example with the dual (at-tajribatayni) and baynamā, wa-maʿa dhālika fa-innanī, lā … bal, and idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: every box filled in about 8 minutes.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: feminine agreement correct; three time frames.' },
    { route: 'develop', text: 'Q3: plan, four paragraphs, and a 2-minute check.' },
    { route: 'stretch', text: 'Q3: a concession and a conditional; I am exam ready.' },
  ],
};

module.exports = { speak, write };
