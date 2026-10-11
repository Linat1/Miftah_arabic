'use strict';
/* Exam-practice data · FR-L05 · Final Revision — Mixed Mock 1 (Topics A–E mixed, as in the real exam: each role play and each conversation question may come from any topic). Teacher-made. */
const X = require('./xp-common');
const w = X.word;

const base = { topic: 'R', n: 5, short: 'Mixed Mock Exam 1', arShort: 'امْتِحَانٌ تَجْرِيبِيٌّ شَامِلٌ (١)', fileTitle: 'Mixed_Mock_Exam_1', title: 'Final Revision — Mixed Mock Exam 1 (Topics A–E)', ar: 'امْتِحَانٌ تَجْرِيبِيٌّ شَامِلٌ (١)', icon: 'FaClipboardList', grammar: 'all Advanced Topics A–E: present habits and times, agreement and colours, the past for events, yūjadu and prepositions, cause and effect, comparison, the passive, formal requests, sa- and conditionals' };

const speak = {
  ...base,
  focus: 'A full mixed Paper 3 mock in breakout rooms: four role plays from different topics (travel, lost property, a volunteer interview, tourism) and a topic conversation that jumps between all five Advanced Topics. Exam skills: read the card in your one minute of preparation, predict the unexpected question, and keep going with a repair phrase if you get stuck.',
  words: [
    w(1, 'تَذْكِرَةُ ذَهَابٍ وَإِيَابٍ', 'a return ticket', [['single', 'ذَهَابٌ فَقَطْ'], ['platform', 'رَصِيفٌ']], { tag: 'A · travel' }),
    w(2, 'يَنْطَلِقُ القِطَارُ فِي …', 'the train leaves at …', [['arrives', 'يَصِلُ'], ['delayed', 'مُتَأَخِّرٌ']], { tag: 'A · time' }),
    w(3, 'حَقِيبَةٌ سَوْدَاءُ صَغِيرَةٌ', 'a small black bag', [['made of leather', 'مِنَ الجِلْدِ'], ['inside it', 'فِيهَا']], { tag: 'B · C · description' }),
    w(4, 'فَقَدْتُ … · ضَاعَ / ضَاعَتْ', 'I lost … · it got lost (m. · f.)', [['I found', 'وَجَدْتُ'], ['lost property', 'المَفْقُودَاتُ']], { tag: 'C · services' }),
    w(5, 'صَبُورٌ · نَشِيطٌ · مُنَظَّمٌ', 'patient · active · organised', [['f.', 'صَبُورَةٌ · نَشِيطَةٌ · مُنَظَّمَةٌ'], ['teamwork', 'العَمَلُ الجَمَاعِيُّ']], { tag: 'B · D · qualities' }),
    w(6, 'أَتَطَوَّعُ فِي …', 'I volunteer at …', [['every Saturday', 'كُلَّ يَوْمِ سَبْتٍ'], ['experience', 'خِبْرَةٌ']], { tag: 'D · work' }),
    w(7, 'السِّيَاحَةُ', 'tourism', [['tourists', 'سُيَّاحٌ'], ['local people', 'السُّكَّانُ المَحَلِّيُّونَ']], { tag: 'C · E' }),
    w(8, 'بِسَبَبِ … مِمَّا …', 'because of … which …', [['so', 'لِذٰلِكَ'], ['as a result', 'نَتِيجَةً لِذٰلِكَ']], { tag: 'cause / result' }),
    w(9, 'أَكْثَرُ … مِنْ · بَيْنَمَا', 'more … than · whereas', [['as for', 'أَمَّا … فَهُوَ'], ['different, not better', 'مُخْتَلِفٌ لَا أَفْضَلُ']], { tag: 'comparison' }),
    w(10, 'يُبْنَى · بُنِيَ · تُرْمَى', 'is built · was built · is thrown', [['is celebrated', 'يُحْتَفَلُ بِهِ'], ['was made', 'صُنِعَ']], { tag: 'passive' }),
    w(11, 'كُنْتُ … أَمَّا الآنَ فَأَدْرُسُ …', 'I used to … but now I study …', [['I will', 'سَوْفَ'], ['I aspire to', 'أَطْمَحُ إِلَى أَنْ']], { tag: 'time frames' }),
    w(12, 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', 'it is true that … but …', [['if … would', 'لَوْ كُنْتُ … لَاخْتَرْتُ'], ['if … will', 'إِذَا … فَسَأُسَافِرُ']], { tag: 'top band' }),
  ],
  words1: { eyebrow: 'Language bank · structures from every topic', title: 'Ready for any card', ar: 'جَاهِزُونَ لِأَيِّ بِطَاقَةٍ', notes: 'LANGUAGE BANK (2 min) — in the real exam the role-play card can come from ANY topic. EXAM TIP: in your one minute of preparation, read all five tasks, underline the question words, and prepare the first words of each answer (not full sentences).' },
  words2: { eyebrow: 'Language bank · structures that lift a mark', title: 'Precise, linked, developed', ar: 'بِنْيَاتٌ تَرْفَعُ الدَّرَجَةَ', notes: 'LANGUAGE BANK (2 min) — in the conversation the examiner may jump from food to the environment to jobs. EXAM TIP: use the same pattern for every theme — answer + reason + another time frame — and add a concession or law … la- in your best answers.' },
  checkCore: 'completed every role-play task, including the unexpected one',
  checkDevelop: 'developed answers on at least three different topics',
  RP: [
    {
      id: 'A', level: 'Core', setting: 'a railway station abroad', title: 'Role play A — Buying a train ticket', ar: 'فِي مَحَطَّةِ القِطَارِ', you: 'a traveller', them: 'the ticket clerk',
      tasks: [
        { core: true, ex: 'صَبَاحَ الخَيْرِ، إِلَى أَيْنَ؟', task: 'Say where you want to go.', help: 'أُرِيدُ أَنْ أُسَافِرَ إِلَى …', model: 'أُرِيدُ أَنْ أُسَافِرَ إِلَى الإِسْكَنْدَرِيَّةِ.', modelEn: 'I want to go to Alexandria.' },
        { core: true, ex: 'ذَهَابٌ فَقَطْ؟', task: 'Ask for a return ticket.', help: 'لَا، تَذْكِرَةُ …', model: 'لَا، تَذْكِرَةُ ذَهَابٍ وَإِيَابٍ، مِنْ فَضْلِكَ.', modelEn: 'No, a return ticket, please.' },
        { core: true, ex: 'تَفَضَّلْ. الثَّمَنُ ثَمَانُونَ جُنَيْهًا.', task: 'Ask when the train leaves.', help: 'مَتَى يَنْطَلِقُ …؟', model: 'مَتَى يَنْطَلِقُ القِطَارُ؟', modelEn: 'When does the train leave?' },
        { core: true, ex: 'فِي العَاشِرَةِ وَالرُّبْعِ.', task: 'Ask which platform.', help: 'مِنْ أَيِّ …؟', model: 'مِنْ أَيِّ رَصِيفٍ؟', modelEn: 'From which platform?' },
        { core: true, unexpected: true, ex: 'الرَّصِيفُ الثَّالِثُ. لِمَاذَا تُسَافِرُ إِلَى الإِسْكَنْدَرِيَّةِ؟', task: 'Answer the unexpected question.', help: 'لِأَنِّي أُرِيدُ أَنْ …', model: 'لِأَنِّي أُرِيدُ أَنْ أَزُورَ عَمِّي وَأَرَى البَحْرَ.', modelEn: 'Because I want to visit my uncle and see the sea.' },
      ],
      girl: 'تُسَافِرِينَ · تَفَضَّلِي',
      notes: 'Core (Topic A · transport): urīdu an usāfira ilā, dhahābun wa-iyābun, matā yanṭaliqu …?, min ayyi raṣīfin?, li-annī urīdu an + two verbs. EXAM TIP: four questions to ASK — that is normal on a Core card.',
    },
    {
      id: 'B', level: 'Core+', setting: 'lost property at an airport', title: 'Role play B — A lost bag', ar: 'فِي مَكْتَبِ المَفْقُودَاتِ', you: 'a traveller who lost a bag', them: 'the airport employee',
      tasks: [
        { core: true, ex: 'نَعَمْ، كَيْفَ أُسَاعِدُكَ؟', task: 'Say what you lost and where.', help: 'فَقَدْتُ … فِي …', model: 'فَقَدْتُ حَقِيبَتِي فِي صَالَةِ الوُصُولِ.', modelEn: 'I lost my bag in the arrivals hall.' },
        { core: true, ex: 'صِفْ لِي الحَقِيبَةَ.', task: 'Describe it (colour, size, material).', help: 'هِيَ حَقِيبَةٌ … مِنَ …', model: 'هِيَ حَقِيبَةٌ سَوْدَاءُ صَغِيرَةٌ مِنَ الجِلْدِ.', modelEn: 'A small black leather bag.' },
        { ex: 'مَاذَا كَانَ فِيهَا؟', task: 'List the contents (past).', help: 'كَانَ فِيهَا … وَ…', model: 'كَانَ فِيهَا جَوَازُ سَفَرِي وَهَاتِفِي وَمِئَةُ دُولَارٍ.', modelEn: 'My passport, my phone and a hundred dollars.' },
        { ex: 'سَنَبْحَثُ عَنْهَا.', task: 'ASK two questions.', help: 'مَتَى …؟ وَهَلْ …؟', model: 'مَتَى سَتُخْبِرُونَنِي؟ وَهَلْ أَسْتَطِيعُ أَنْ أَتْرُكَ رَقْمَ هَاتِفِ صَدِيقِي؟', modelEn: 'When will you let me know? And can I leave my friend’s phone number?' },
        { unexpected: true, ex: 'طَبْعًا. أَيْنَ سَتُقِيمُ فِي القَاهِرَةِ؟', task: 'Answer the unexpected question (future + place).', help: 'سَأُقِيمُ فِي … قُرْبَ …', model: 'سَأُقِيمُ فِي فُنْدُقِ النِّيلِ، قُرْبَ المُتْحَفِ المِصْرِيِّ، لِمُدَّةِ أُسْبُوعٍ.', modelEn: 'At the Nile Hotel, near the Egyptian Museum, for a week.' },
      ],
      girl: 'أُسَاعِدُكِ · صِفِي · سَتُقِيمِينَ · صَدِيقَتِي',
      notes: 'Core+ (Topics B and C · description and services): faqadtu fī, colour + size + material agreement (sawdāʾu ṣaghīratun mina al-jild), kāna fīhā + list with a number, the CANDIDATE asks with sa- and hal astaṭīʿu an, sa-uqīmu + qurba.',
    },
    {
      id: 'C', level: 'Develop', setting: 'a youth-club interview', title: 'Role play C — Volunteering at the youth club', ar: 'التَّطَوُّعُ فِي نَادِي الشَّبَابِ', you: 'a student applying to volunteer', them: 'the youth-club manager',
      tasks: [
        { ex: 'صِفْ نَفْسَكَ بِثَلَاثِ صِفَاتٍ.', task: 'Describe yourself with examples.', help: 'أَنَا … وَ… ؛ مَثَلًا …', model: 'أَنَا صَبُورٌ وَنَشِيطٌ وَمُنَظَّمٌ؛ مَثَلًا، أُسَاعِدُ أَخِي الصَّغِيرَ فِي وَاجِبَاتِهِ كُلَّ يَوْمٍ دُونَ أَنْ أَغْضَبَ.', modelEn: 'Patient, active and organised — I help my little brother with homework daily without losing my temper.' },
        { ex: 'مَا هِوَايَاتُكَ؟', task: 'Hobbies with frequency and reason.', help: 'أَلْعَبُ … مَرَّتَيْنِ … ، لِأَنَّ …', model: 'أَلْعَبُ كُرَةَ القَدَمِ مَرَّتَيْنِ فِي الأُسْبُوعِ، وَأَرْسُمُ فِي نِهَايَةِ الأُسْبُوعِ، لِأَنَّ الرَّسْمَ يُرِيحُنِي.', modelEn: 'Football twice a week and drawing at weekends — drawing relaxes me.' },
        { ex: 'هَلْ عِنْدَكَ خِبْرَةٌ مَعَ الأَطْفَالِ؟', task: 'Narrate experience (past + result).', help: 'نَعَمْ، فِي … كُنْتُ … فَتَعَلَّمْتُ …', model: 'نَعَمْ، فِي الصَّيْفِ المَاضِي كُنْتُ أُسَاعِدُ فِي مُخَيَّمٍ رِيَاضِيٍّ لِلْأَطْفَالِ، فَتَعَلَّمْتُ كَيْفَ أَشْرَحُ القَوَاعِدَ بِطَرِيقَةٍ بَسِيطَةٍ.', modelEn: 'Last summer I helped at a children’s sports camp and learnt to explain rules simply.' },
        { ex: 'مَتَى تَسْتَطِيعُ أَنْ تَأْتِيَ؟', task: 'Availability with a contrast.', help: 'أَسْتَطِيعُ … ، أَمَّا … فَـ…', model: 'أَسْتَطِيعُ أَنْ آتِيَ يَوْمَ السَّبْتِ صَبَاحًا، أَمَّا أَيَّامُ الأُسْبُوعِ فَمَشْغُولَةٌ بِالمُرَاجَعَةِ لِلِامْتِحَانَاتِ.', modelEn: 'Saturday mornings; weekdays are busy with exam revision.' },
        { unexpected: true, ex: 'وَلِمَاذَا تُرِيدُ أَنْ تَتَطَوَّعَ؟', task: 'Answer the unexpected question (reason + future).', help: 'لِأَنَّ … ؛ وَسَـ…', model: 'لِأَنَّ هٰذَا النَّادِيَ سَاعَدَنِي عِنْدَمَا كُنْتُ صَغِيرًا؛ وَسَتُفِيدُنِي الخِبْرَةُ لِأَنِّي أَطْمَحُ إِلَى أَنْ أَكُونَ مُعَلِّمًا.', modelEn: 'This club helped me when I was little — and the experience will help, as I aspire to be a teacher.' },
      ],
      girl: 'صِفِي · نَفْسَكِ · هِوَايَاتُكِ · عِنْدَكِ · تَسْتَطِيعِينَ · تَأْتِي · تُرِيدِينَ · صَبُورَةٌ وَنَشِيطَةٌ وَمُنَظَّمَةٌ · مُعَلِّمَةً',
      notes: 'Develop (Topics B and D · personality, hobbies, experience): qualities + mathalan + dūna an, frequency + li-anna, kuntu + present + fa-taʿallamtu, ammā … fa-, a relative-free reason + sa- + aṭmaḥu ilā an.',
    },
    {
      id: 'D', level: 'Stretch', setting: 'a radio debate', title: 'Role play D — Tourism: blessing or burden?', ar: 'السِّيَاحَةُ: نِعْمَةٌ أَمْ عِبْءٌ؟', you: 'a young guest', them: 'the radio presenter',
      tasks: [
        { ex: 'هَلْ تُفِيدُ السِّيَاحَةُ السُّكَّانَ المَحَلِّيِّينَ؟', task: 'Give a balanced thesis.', help: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، تُوَفِّرُ السِّيَاحَةُ فُرَصَ عَمَلٍ وَتُنْعِشُ الأَسْوَاقَ، وَمِنْ نَاحِيَةٍ أُخْرَى، تَرْفَعُ أَسْعَارَ البُيُوتِ، مِمَّا يَدْفَعُ بَعْضَ السُّكَّانِ إِلَى الرَّحِيلِ.', modelEn: 'Tourism creates jobs and boosts markets, but raises house prices, pushing some residents out.' },
        { ex: 'أَعْطِنَا مِثَالًا.', task: 'Narrate an example with the passive.', help: 'عِنْدَمَا زُرْتُ … ، رَأَيْتُ … ؛ وَقِيلَ لِي إِنَّ …', model: 'عِنْدَمَا زُرْتُ مَدِينَةً قَدِيمَةً فِي المَغْرِبِ، رَأَيْتُ بُيُوتًا تَقْلِيدِيَّةً تَحَوَّلَتْ إِلَى فَنَادِقَ، وَقِيلَ لِي إِنَّ أَصْحَابَهَا انْتَقَلُوا إِلَى خَارِجِ المَدِينَةِ.', modelEn: 'In an old Moroccan city I saw traditional homes turned into hotels — I was told their owners moved out of town.' },
        { ex: 'وَمَاذَا عَنِ البِيئَةِ؟', task: 'Cause → effect → solution.', help: 'بِسَبَبِ … ، مِمَّا … ؛ لِذٰلِكَ يَجِبُ …', model: 'بِسَبَبِ كَثْرَةِ الطَّائِرَاتِ وَالنُّفَايَاتِ، تَتَضَرَّرُ الشَّوَاطِئُ، مِمَّا يُهَدِّدُ الحَيَاةَ البَحْرِيَّةَ؛ لِذٰلِكَ يَجِبُ أَنْ تُفْرَضَ ضَرِيبَةٌ صَغِيرَةٌ عَلَى السُّيَّاحِ لِحِمَايَتِهَا.', modelEn: 'Flights and waste damage beaches, threatening marine life — so a small tourist tax should protect them.' },
        { ex: 'لٰكِنَّ السِّيَاحَةَ تُقَرِّبُ الثَّقَافَاتِ.', task: 'Concede and refine.', help: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ ذٰلِكَ يَحْدُثُ فَقَطْ إِذَا …', model: 'صَحِيحٌ أَنَّهَا قَدْ تُقَرِّبُهَا، غَيْرَ أَنَّ ذٰلِكَ يَحْدُثُ فَقَطْ إِذَا احْتَرَمَ السَّائِحُ عَادَاتِ البَلَدِ، وَتَعَلَّمَ بَعْضَ كَلِمَاتِ لُغَتِهِ، وَاشْتَرَى مِنْ أَهْلِهِ.', modelEn: 'It can — but only if tourists respect local customs, learn some words and buy from local people.' },
        { unexpected: true, ex: 'لَوْ كُنْتَ وَزِيرَ السِّيَاحَةِ، مَاذَا تَفْعَلُ؟', task: 'Answer the unexpected question (law … la-).', help: 'لَوْ كُنْتُ …، لَـ…', model: 'لَوْ كُنْتُ وَزِيرَ السِّيَاحَةِ، لَشَجَّعْتُ السِّيَاحَةَ فِي القُرَى الصَّغِيرَةِ، وَلَجَعَلْتُ جُزْءًا مِنَ الأَرْبَاحِ لِمَدَارِسِ السُّكَّانِ المَحَلِّيِّينَ.', modelEn: 'I’d promote village tourism and give part of the profits to local schools.' },
      ],
      girl: 'أَعْطِينَا · كُنْتِ وَزِيرَةَ السِّيَاحَةِ · تَفْعَلِينَ',
      notes: 'Stretch (Topics C and E · environment, travel, cultures): a balanced thesis with mimmā, a narrated example with the passive qīla lī inna, cause → effect → solution with a passive subjunctive (tufraḍa), a concession with faqaṭ idhā + three verbs, law … la- ×2.',
      modelFoot: 'Stretch: Topics C and E together — balance, an example, cause and effect, a refined concession and law … la-.',
    },
  ],
  CONV: [
    {
      level: 'Core', title: 'Topic conversation — Core questions', ar: 'أَسْئِلَةٌ مِنْ كُلِّ المَحَاوِرِ', aim: 'one full sentence per question — each from a different topic',
      qs: [
        { q: 'مَاذَا تَأْكُلُ فِي الفُطُورِ؟ (A)', en: 'What do you eat for breakfast? (A)', start: 'آكُلُ …', model: 'آكُلُ الخُبْزَ وَالجُبْنَ، وَأَشْرَبُ الشَّايَ.', modelEn: 'Bread and cheese, with tea.' },
        { q: 'صِفْ أَعَزَّ أَصْدِقَائِكَ. (B)', en: 'Describe your best friend. (B)', start: 'أَعَزُّ أَصْدِقَائِي … ؛ هُوَ …', model: 'أَعَزُّ أَصْدِقَائِي اسْمُهُ آدَمُ؛ هُوَ طَوِيلٌ وَمَرِحٌ.', modelEn: 'Adam — tall and funny.' },
        { q: 'كَيْفَ الطَّقْسُ الآنَ؟ (C)', en: 'What’s the weather like now? (C)', start: 'الطَّقْسُ …', model: 'الطَّقْسُ بَارِدٌ وَغَائِمٌ.', modelEn: 'Cold and cloudy.' },
        { q: 'مَا الوَظِيفَةُ الَّتِي تُرِيدُهَا؟ (D)', en: 'What job do you want? (D)', start: 'أُرِيدُ أَنْ أَكُونَ …', model: 'أُرِيدُ أَنْ أَكُونَ مُهَنْدِسًا.', modelEn: 'An engineer.' },
        { q: 'أَيُّ بَلَدٍ تُرِيدُ أَنْ تَزُورَ؟ (E)', en: 'Which country do you want to visit? (E)', start: 'أُرِيدُ أَنْ أَزُورَ … لِأَنَّ …', model: 'أُرِيدُ أَنْ أَزُورَ تُرْكِيَا، لِأَنَّ تَارِيخَهَا غَنِيٌّ.', modelEn: 'Turkey — its history is rich.' },
      ],
      foot: 'Core: one full sentence for every question — the letter shows the topic. If you are stuck: عَفْوًا، هَلْ يُمْكِنُ أَنْ تُعِيدَ السُّؤَالَ؟',
      modelFoot: 'Full sentence + a reason = a secure Core answer on any topic.',
    },
    {
      level: 'Develop', title: 'Topic conversation — Develop questions', ar: 'تَطْوِيرُ الإِجَابَةِ فِي كُلِّ مِحْوَرٍ', aim: 'two or three sentences, with a reason and two time frames',
      qs: [
        { q: 'كَيْفَ تُحَافِظُ عَلَى صِحَّتِكَ؟ (A)', en: 'How do you stay healthy? (A)', start: 'أَ… دَائِمًا … ، وَكُنْتُ … أَمَّا الآنَ فَـ…', model: 'أَمْشِي إِلَى المَدْرَسَةِ دَائِمًا، وَكُنْتُ آكُلُ الحَلَوِيَّاتِ كَثِيرًا، أَمَّا الآنَ فَآكُلُ الفَوَاكِهَ.', modelEn: 'I always walk to school; I used to eat lots of sweets, now fruit.' },
        { q: 'صِفْ عُطْلَةً قَضَيْتَهَا مَعَ عَائِلَتِكَ. (B)', en: 'Describe a holiday with your family. (B)', start: 'قَضَيْنَا … فِي … ؛ وَكَانَ …', model: 'قَضَيْنَا أُسْبُوعًا فِي إِسْكُتْلَنْدَا؛ وَكَانَتِ الجِبَالُ رَائِعَةً، لٰكِنَّ المَطَرَ لَمْ يَتَوَقَّفْ.', modelEn: 'A week in Scotland: wonderful mountains, but non-stop rain.' },
        { q: 'مَا الَّذِي يَجِبُ أَنْ نَفْعَلَهُ لِحِمَايَةِ البِيئَةِ؟ (C)', en: 'What should we do to protect the environment? (C)', start: 'يَجِبُ أَنْ … لِأَنَّ … مِمَّا …', model: 'يَجِبُ أَنْ نُقَلِّلَ البْلَاسْتِيكَ، لِأَنَّهُ يُرْمَى فِي البَحْرِ، مِمَّا يَقْتُلُ الأَسْمَاكَ.', modelEn: 'Cut plastic — it ends up in the sea and kills fish.' },
        { q: 'كَيْفَ تَسْتَعِدُّ لِلِامْتِحَانَاتِ؟ (D)', en: 'How do you prepare for exams? (D)', start: 'أَوَّلًا … ثُمَّ … وَفِي الأُسْبُوعِ الأَخِيرِ سَـ…', model: 'أَوَّلًا أَضَعُ جَدْوَلًا، ثُمَّ أَحُلُّ امْتِحَانَاتٍ سَابِقَةً، وَفِي الأُسْبُوعِ الأَخِيرِ سَأُرَاجِعُ الكَلِمَاتِ فَقَطْ.', modelEn: 'A timetable, then past papers; in the last week I’ll revise vocabulary only.' },
        { q: 'قَارِنْ بَيْنَ ثَقَافَتَيْنِ تَعْرِفُهُمَا. (E)', en: 'Compare two cultures you know. (E)', start: 'فِي … بَيْنَمَا فِي … ؛ وَكِلْتَاهُمَا …', model: 'فِي بَيْتِنَا نَأْكُلُ مَعًا مُتَأَخِّرِينَ، بَيْنَمَا يَأْكُلُ جِيرَانِي مُبَكِّرًا؛ وَكِلْتَا الثَّقَافَتَيْنِ تُحِبُّ العَائِلَةَ.', modelEn: 'We eat late together; my neighbours early — both cultures love family.' },
      ],
      foot: 'Develop: two or three sentences — a reason, a linker and a past or future detail, whatever the topic.',
      modelFoot: 'The same pattern works for every topic: answer + reason + another time frame.',
    },
    {
      level: 'Stretch', title: 'Topic conversation — Stretch questions', ar: 'أَسْئِلَةُ التَّفْكِيرِ العَمِيقِ', aim: 'a developed answer: opinion, balance, concession and a conditional',
      qs: [
        { q: 'هَلِ الطَّعَامُ السَّرِيعُ مُشْكِلَةٌ اجْتِمَاعِيَّةٌ؟ (A)', en: 'Is fast food a social problem? (A)', start: 'صَحِيحٌ أَنَّ … غَيْرَ أَنَّ …', model: 'صَحِيحٌ أَنَّهُ رَخِيصٌ وَسَرِيعٌ، غَيْرَ أَنَّهُ يُضْعِفُ صِحَّةَ الأَطْفَالِ، وَيَحْرِمُ العَائِلَاتِ مِنْ وَجْبَةٍ مُشْتَرَكَةٍ.', modelEn: 'It’s cheap and quick, but weakens children’s health and robs families of a shared meal.' },
        { q: 'هَلْ تَتَغَيَّرُ الصَّدَاقَةُ مَعَ التِّكْنُولُوجْيَا؟ (B · C)', en: 'Does friendship change with technology? (B · C)', start: 'مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …', model: 'مِنْ نَاحِيَةٍ، نَبْقَى عَلَى اتِّصَالٍ دَائِمٍ، وَمِنْ نَاحِيَةٍ أُخْرَى، قَلَّتِ اللِّقَاءَاتُ الحَقِيقِيَّةُ الَّتِي تَبْنِي الثِّقَةَ.', modelEn: 'We stay constantly in touch, yet real meetings that build trust have become fewer.' },
        { q: 'مَا أَهَمُّ مَهَارَةٍ لِلْمُسْتَقْبَلِ؟ (D)', en: 'What is the most important skill for the future? (D)', start: 'أَرَى أَنَّ … لِأَنَّ … مِمَّا …', model: 'أَرَى أَنَّ أَهَمَّهَا القُدْرَةُ عَلَى التَّعَلُّمِ، لِأَنَّ الوَظَائِفَ تَتَغَيَّرُ بِسُرْعَةٍ، مِمَّا يَجْعَلُ مَا نَعْرِفُهُ اليَوْمَ قَدِيمًا غَدًا.', modelEn: 'The ability to learn — jobs change fast, making today’s knowledge outdated tomorrow.' },
        { q: 'كَيْفَ يَخْتَلِفُ جِيلُكَ عَنْ جِيلِ أَجْدَادِكَ؟ (E)', en: 'How does your generation differ from your grandparents’? (E)', start: 'كَانَ أَجْدَادِي … أَمَّا جِيلُنَا فَـ…', model: 'كَانَ أَجْدَادِي يَعِيشُونَ فِي قَرْيَةٍ وَاحِدَةٍ، أَمَّا جِيلُنَا فَيَعِيشُ بَيْنَ لُغَاتٍ وَثَقَافَاتٍ، مِمَّا يَمْنَحُنَا فُرَصًا أَكْثَرَ وَتَحَدِّيَاتٍ جَدِيدَةً.', modelEn: 'They lived in one village; we live between languages and cultures — more chances and new challenges.' },
        { q: 'لَوِ اسْتَطَعْتَ أَنْ تُغَيِّرَ شَيْئًا فِي مَدْرَسَتِكَ، فَمَاذَا تُغَيِّرُ؟', en: 'If you could change one thing at your school, what would it be?', start: 'لَوِ اسْتَطَعْتُ، لَـ… لِكَيْ …', model: 'لَوِ اسْتَطَعْتُ، لَأَضَفْتُ حِصَّةً أُسْبُوعِيَّةً لِلطَّبْخِ الصِّحِّيِّ، لِكَيْ يَتَعَلَّمَ الطُّلَّابُ مَهَارَةً يَحْتَاجُونَهَا طُولَ حَيَاتِهِمْ.', modelEn: 'A weekly healthy-cooking lesson, so students learn a lifelong skill.' },
      ],
      foot: 'Stretch: mixed topics — a concession, a balanced view, mimmā, kāna … ammā … fa- and law … la-.',
      modelFoot: 'Stretch: one structure from each topic, all at top-band level — range is rewarded.',
    },
  ],
  selfCheck: [
    { route: 'core', text: 'I completed every role-play task, including the unexpected one.' },
    { route: 'core', text: 'I used my preparation minute to plan the first words of each task.' },
    { route: 'develop', text: 'I developed answers on at least three different topics.' },
    { route: 'develop', text: 'I used a repair phrase instead of silence when I got stuck.' },
    { route: 'stretch', text: 'I used a concession and law … la- in the conversation.' },
  ],
};
speak.RP[2].tasks[2].help = 'نَعَمْ، فِي … كُنْتُ … فَتَعَلَّمْتُ …';
speak.RP[2].tasks[3].help = 'أَسْتَطِيعُ … ، أَمَّا أَيَّامُ الأُسْبُوعِ فَمَشْغُولَةٌ …';
speak.RP[2].tasks[4].help = 'لِأَنَّ … ؛ وَسَتُفِيدُنِي …';
speak.RP[3].tasks[4].help = 'لَوْ كُنْتُ …، لَشَجَّعْتُ …';
speak.CONV[1].qs[0].start = 'أَمْشِي … دَائِمًا، وَكُنْتُ … أَمَّا الآنَ فَآكُلُ …';
speak.CONV[1].qs[3].start = 'أَوَّلًا … ثُمَّ … وَفِي الأُسْبُوعِ الأَخِيرِ سَأُرَاجِعُ …';
speak.CONV[2].qs[3].start = 'كَانَ أَجْدَادِي … أَمَّا جِيلُنَا فَيَعِيشُ …';
speak.CONV[2].qs[4].start = 'لَوِ اسْتَطَعْتُ، لَأَضَفْتُ … لِكَيْ …';

const Q2_CORE = `مَرْحَبًا يَا حَسَنُ،
كَيْفَ حَالُكَ؟ قَضَيْتُ عُطْلَةَ نِهَايَةِ الأُسْبُوعِ عِنْدَ جَدِّي وَجَدَّتِي فِي قَرْيَةٍ فِي شَمَالِ وِيلْزَ. سَافَرْنَا بِالقِطَارِ، وَاسْتَغْرَقَتِ الرِّحْلَةُ ثَلَاثَ سَاعَاتٍ. القَرْيَةُ صَغِيرَةٌ وَهَادِئَةٌ، وَفِيهَا جِبَالٌ خَضْرَاءُ وَنَهْرٌ جَمِيلٌ. يَوْمَ السَّبْتِ مَشَيْنَا فِي الجِبَالِ، لٰكِنَّ الجَوَّ كَانَ بَارِدًا وَمُمْطِرًا. فِي المَسَاءِ طَبَخَتْ جَدَّتِي طَعَامًا لَذِيذًا، وَلَعِبْنَا الشِّطْرَنْجَ مَعَ جَدِّي. أَظُنُّ أَنَّ الحَيَاةَ فِي القَرْيَةِ أَهْدَأُ مِنَ المَدِينَةِ، لٰكِنَّهَا مُمِلَّةٌ قَلِيلًا. فِي الصَّيْفِ سَأَعُودُ إِلَى هُنَاكَ أُسْبُوعَيْنِ. وَأَنْتَ، أَيْنَ قَضَيْتَ العُطْلَةَ؟
إِلَى اللِّقَاءِ،
أُسَامَةُ`;
const Q2_FULL = `عَزِيزِي حَسَنُ،
عُدْتُ أَمْسِ مِنْ عُطْلَةِ نِهَايَةِ أُسْبُوعٍ عِنْدَ جَدِّي وَجَدَّتِي فِي قَرْيَةٍ صَغِيرَةٍ تَقَعُ فِي شَمَالِ وِيلْزَ، بَيْنَ الجِبَالِ وَالبَحْرِ. سَافَرْنَا بِالقِطَارِ ثَلَاثَ سَاعَاتٍ، فَتَغَيَّرَ المَنْظَرُ تَدْرِيجِيًّا مِنَ المَبَانِي الرَّمَادِيَّةِ إِلَى الحُقُولِ الخَضْرَاءِ. وَمَعَ أَنَّ المَطَرَ لَمْ يَتَوَقَّفْ يَوْمَ السَّبْتِ، فَقَدْ مَشَيْنَا إِلَى شَلَّالٍ قَدِيمٍ، ثُمَّ جَلَسْنَا حَوْلَ المِدْفَأَةِ نَشْرَبُ الشَّايَ وَنَسْمَعُ قِصَصَ جَدِّي عَنْ طُفُولَتِهِ. صَحِيحٌ أَنَّ الحَيَاةَ هُنَاكَ أَبْطَأُ بِكَثِيرٍ مِنْ مَدِينَتِنَا، غَيْرَ أَنَّ هٰذَا البُطْءَ هُوَ مَا أَحْتَاجُ إِلَيْهِ قَبْلَ الامْتِحَانَاتِ. وَإِذَا نَجَحْتُ، فَسَأَقْضِي هُنَاكَ أُسْبُوعَيْنِ فِي الصَّيْفِ. هَلْ تَأْتِي مَعِي؟
مَعَ تَحِيَّاتِي،
أُسَامَةُ`;
const Q3A_CORE = `يَوْمٌ لَا أَنْسَاهُ هُوَ يَوْمُ نَتَائِجِ امْتِحَانَاتِ الصَّفِّ العَاشِرِ فِي السَّنَةِ المَاضِيَةِ. اسْتَيْقَظْتُ فِي السَّادِسَةِ، لِأَنِّي كُنْتُ قَلِقًا جِدًّا، وَلَمْ آكُلْ فُطُورِي. شَرِبْتُ كُوبًا مِنَ الحَلِيبِ فَقَطْ، وَلَبِسْتُ مَلَابِسِي بِسُرْعَةٍ.
ذَهَبْتُ إِلَى المَدْرَسَةِ مَعَ صَدِيقِي آدَمَ. كَانَ الجَوُّ بَارِدًا وَمُمْطِرًا، لٰكِنَّ المَدْرَسَةَ كَانَتْ مُزْدَحِمَةً بِالطُّلَّابِ وَالآبَاءِ. فِي السَّاعَةِ التَّاسِعَةِ أَخَذْتُ الظَّرْفَ، وَفَتَحْتُهُ بِبُطْءٍ. كَانَ آدَمُ يَقِفُ بِجَانِبِي، وَكَانَ قَلِقًا مِثْلِي.
نَجَحْتُ فِي كُلِّ المَوَادِّ! كَانَتْ نَتِيجَةُ العَرَبِيَّةِ أَفْضَلَ نَتِيجَةٍ، لِأَنِّي رَاجَعْتُ كَثِيرًا. اتَّصَلْتُ بِأُمِّي فَوْرًا، وَكَانَتْ سَعِيدَةً جِدًّا. فِي المَسَاءِ ذَهَبْنَا إِلَى مَطْعَمٍ لُبْنَانِيٍّ، وَأَكَلْنَا المَشَاوِيَ وَالسَّلَطَةَ مَعَ كُلِّ العَائِلَةِ. كَانَ أَجْمَلَ مَسَاءٍ فِي السَّنَةِ.
تَعَلَّمْتُ أَنَّ التَّعَبَ وَالمُرَاجَعَةَ يُعْطِيَانِ نَتِيجَةً. الآنَ أُرَاجِعُ لِامْتِحَانَاتِ الصَّفِّ الحَادِي عَشَرَ، وَفِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَدْرُسَ الهَنْدَسَةَ فِي الجَامِعَةِ.`;
const Q3A_FULL = `لَمْ يَكُنْ يَوْمًا عَادِيًّا ذٰلِكَ الخَمِيسُ مِنْ شَهْرِ أَغُسْطُسَ؛ فَقَدِ اسْتَيْقَظْتُ قَبْلَ المُنَبِّهِ بِسَاعَةٍ، وَقَلْبِي يَدُقُّ بِسُرْعَةٍ، لِأَنَّهُ كَانَ يَوْمَ نَتَائِجِ الامْتِحَانَاتِ الَّتِي رَاجَعْتُ لَهَا شُهُورًا. لَمْ أَسْتَطِعْ أَنْ آكُلَ شَيْئًا، فَاكْتَفَيْتُ بِكُوبٍ مِنَ الشَّايِ، وَخَرَجْتُ مِنَ البَيْتِ دُونَ أَنْ أُوقِظَ أَحَدًا.
كَانَ المَطَرُ يَتَسَاقَطُ بِهُدُوءٍ وَأَنَا أَمْشِي مَعَ صَدِيقِي آدَمَ إِلَى المَدْرَسَةِ، وَكُنَّا نَتَظَاهَرُ بِأَنَّنَا غَيْرُ قَلِقَيْنِ. وَحِينَ وَصَلْنَا، وَجَدْنَا السَّاحَةَ مُزْدَحِمَةً بِالطُّلَّابِ وَالآبَاءِ، بَعْضُهُمْ يَبْكِي فَرَحًا، وَبَعْضُهُمْ يُحَاوِلُ أَنْ يُخْفِيَ خَيْبَتَهُ، وَالمُعَلِّمُونَ يَتَنَقَّلُونَ بَيْنَهُمْ بِابْتِسَامَاتٍ هَادِئَةٍ.
فَتَحْتُ الظَّرْفَ بِيَدَيْنِ مُرْتَجِفَتَيْنِ، فَوَجَدْتُ أَنَّنِي نَجَحْتُ فِي كُلِّ المَوَادِّ، وَأَنَّ نَتِيجَةَ العَرَبِيَّةِ كَانَتْ أَعْلَى مِمَّا تَوَقَّعْتُ. عِنْدَئِذٍ اتَّصَلْتُ بِأُمِّي، فَسَمِعْتُهَا تَبْكِي لِأَوَّلِ مَرَّةٍ مِنَ الفَرَحِ. وَفِي المَسَاءِ احْتَفَلَتِ العَائِلَةُ كُلُّهَا بِعَشَاءٍ فِي مَطْعَمِنَا المُفَضَّلِ.
تَعَلَّمْتُ يَوْمَهَا أَنَّ النَّجَاحَ لَيْسَ حَظًّا، بَلْ سَاعَاتٌ صَغِيرَةٌ مِنَ الجُهْدِ تَتَرَاكَمُ بِصَمْتٍ. وَلَوْ عُدْتُ إِلَى بِدَايَةِ تِلْكَ السَّنَةِ، لَقُلْتُ لِنَفْسِي: "رَاجِعْ قَلِيلًا كُلَّ يَوْمٍ، وَلَا تَخَفْ".`;
const Q3B_FULL = `يَحْلُمُ كَثِيرٌ مِنْ سُكَّانِ المُدُنِ بِبَيْتٍ هَادِئٍ فِي الرِّيفِ، بَيْنَمَا يَحْلُمُ شَبَابُ القُرَى بِأَضْوَاءِ المَدِينَةِ. فَهَلِ الحَيَاةُ فِي المَدِينَةِ أَفْضَلُ حَقًّا مِنَ الحَيَاةِ فِي الرِّيفِ؟
مِنْ نَاحِيَةٍ، تُقَدِّمُ المَدِينَةُ فُرَصًا أَكْثَرَ لِلدِّرَاسَةِ وَالعَمَلِ، وَمُوَاصَلَاتٍ أَسْهَلَ، وَمُسْتَشْفَيَاتٍ وَمَتَاحِفَ قَرِيبَةً. وَمِنْ نَاحِيَةٍ أُخْرَى، يُعَانِي سُكَّانُهَا مِنَ التَّلَوُّثِ وَالزِّحَامِ وَارْتِفَاعِ الأَسْعَارِ، بَيْنَمَا يَتَمَتَّعُ أَهْلُ الرِّيفِ بِهَوَاءٍ نَظِيفٍ وَعَلَاقَاتٍ أَقْوَى بَيْنَ الجِيرَانِ.
وَقَدْ لَاحَظْتُ هٰذَا الفَرْقَ فِي عَائِلَتِي؛ فَجَدِّي فِي وِيلْزَ يَعْرِفُ كُلَّ سُكَّانِ قَرْيَتِهِ بِأَسْمَائِهِمْ، وَيَتَبَادَلُ مَعَهُمُ الخُضَارَ مِنْ حَدِيقَتِهِ، أَمَّا نَحْنُ فِي مَانْشِسْتَرَ فَلَا نَعْرِفُ جِيرَانَنَا فِي الطَّابِقِ نَفْسِهِ. وَمَعَ ذٰلِكَ، فَإِنَّ جَدِّي يَحْتَاجُ إِلَى سَاعَةٍ كَامِلَةٍ لِيَصِلَ إِلَى أَقْرَبِ مُسْتَشْفًى، وَلَا يَجِدُ حَافِلَةً بَعْدَ السَّادِسَةِ مَسَاءً.
لِذٰلِكَ أَرَى أَنَّهُ لَا يُوجَدُ مَكَانٌ أَفْضَلُ لِلْجَمِيعِ، بَلْ مَكَانٌ أَنْسَبُ لِكُلِّ مَرْحَلَةٍ مِنَ العُمُرِ. فَإِذَا وَصَلَتِ الخِدْمَاتُ الجَيِّدَةُ إِلَى القُرَى، فَسَيَجْمَعُ الرِّيفُ بَيْنَ هُدُوئِهِ وَرَاحَةِ المَدِينَةِ.`;

const write = {
  ...base,
  focus: 'A full mixed Paper 4 mock: fill in a lost-property form, write an email about a weekend in the countryside (travel, family, nature and weather), and write an extended piece about a day you will never forget or about whether city life is better than country life. Exam skills: about 45 minutes in total — 8 for Q1, 12 for Q2, 25 for Q3 including a 3-minute plan and a 2-minute check.',
  lift: [
    { ar: 'سَافَرْنَا بِالقِطَارِ، وَاسْتَغْرَقَتِ الرِّحْلَةُ ثَلَاثَ سَاعَاتٍ', en: 'we went by train, and the journey took three hours' },
    { ar: 'فِيهَا جِبَالٌ خَضْرَاءُ وَنَهْرٌ جَمِيلٌ', en: 'it has green mountains and a beautiful river' },
    { ar: 'الحَيَاةُ فِي القَرْيَةِ أَهْدَأُ مِنَ المَدِينَةِ، لٰكِنَّهَا …', en: 'village life is calmer than the city, but it is …' },
  ],
  checkTip: 'EXAM CHECK (2 min): every bullet answered? greeting and closing? Then run the five-point check — verb endings (person and tense), adjective agreement (jibālun khaḍrāʾu), numbers + nouns (thalātha sāʿātin), linkers, and at least one past, one present and one future verb.',
  FORM: {
    title: 'Lost-property form', ar: 'اسْتِمَارَةُ المَفْقُودَاتِ',
    fields: [
      { core: true, ar: 'الاسْمُ', en: 'Name', model: 'أُسَامَةُ إِبْرَاهِيمُ', modelEn: 'Usama Ibrahim' },
      { core: true, ar: 'الشَّيْءُ المَفْقُودُ', en: 'Item lost', model: 'حَقِيبَةُ ظَهْرٍ', modelEn: 'a rucksack' },
      { core: true, ar: 'اللَّوْنُ', en: 'Colour', model: 'زَرْقَاءُ', modelEn: 'blue' },
      { core: true, ar: 'المَكَانُ', en: 'Place', model: 'فِي القِطَارِ إِلَى وِيلْزَ', modelEn: 'on the train to Wales' },
      { core: true, ar: 'التَّارِيخُ', en: 'Date', model: 'السَّبْتُ، الخَامِسُ مِنْ مَايُو', modelEn: 'Saturday 5 May' },
      { core: true, ar: 'رَقْمُ الهَاتِفِ', en: 'Phone number', model: '٠٧٧٠٠٩٠٠٤٥٦', modelEn: '07700 900456' },
      { ar: 'مَا فِيهَا', en: 'What was inside', model: 'كُتُبٌ مَدْرَسِيَّةٌ وَقَارُورَةُ مَاءٍ', modelEn: 'schoolbooks and a water bottle' },
      { ar: 'جُمْلَةٌ: صِفِ الحَقِيبَةَ', en: 'ONE sentence: describe the bag', model: 'هِيَ حَقِيبَةٌ زَرْقَاءُ كَبِيرَةٌ مِنَ القُمَاشِ، وَعَلَيْهَا اسْمِي بِاللَّوْنِ الأَبْيَضِ.', modelEn: 'A big blue cloth bag with my name on it in white.' },
    ],
    foot: 'One word or a short phrase for each box — box 3 agrees with a feminine noun (zarqāʾu); the last box is a full sentence with colour, size and material. EXAM TIP: about 8 minutes, then move on.',
    notes: 'About 8 minutes. Core: boxes 1–6. Develop / Stretch: all 8. Mixed topics: description (B), services and documents (C), travel (A). Box 5: a day + an ordinal date.',
  },
  Q2: {
    short: 'an email about a weekend in the countryside', title: 'Question 2: a weekend with my grandparents', ar: 'عُطْلَةٌ عِنْدَ جَدِّي وَجَدَّتِي',
    task: 'Write an email in Arabic to a friend of about 80–90 words. You must include: • where you went and how you travelled • a description of the place and the weather • what you did with your family • your opinion of country life and your plans, and a question for your friend.',
    checklist: ['All four bullet points, in order.', 'A greeting and a closing.', 'Transport, place and weather from three topics.', 'Past, present AND future.', 'About 80–90 words.'],
    phrases: [['سَافَرْنَا بِالقِطَارِ … وَاسْتَغْرَقَتِ الرِّحْلَةُ …', 'we travelled by train … and the journey took …'], ['القَرْيَةُ … وَفِيهَا …', 'the village is … and has …'], ['كَانَ الجَوُّ … لٰكِنَّنَا …', 'the weather was … but we …'], ['الحَيَاةُ فِي القَرْيَةِ أَهْدَأُ مِنْ …', 'village life is calmer than …']],
    rubric: [
      ['task', 'اكْتُبْ رِسَالَةً إِلَى صَدِيقِكَ عَنْ عُطْلَةٍ فِي الرِّيفِ (٨٠–٩٠ كَلِمَةً).', 'Write to your friend about a weekend in the countryside (80–90 words).'],
      ['1', 'أَيْنَ ذَهَبْتَ؟ وَكَيْفَ سَافَرْتَ؟', 'Where you went; how you travelled'],
      ['2', 'صِفِ المَكَانَ وَالطَّقْسَ.', 'Describe the place and the weather'],
      ['3', 'مَاذَا فَعَلْتَ مَعَ عَائِلَتِكَ؟', 'What you did with your family'],
      ['4', 'مَا رَأْيُكَ فِي الحَيَاةِ فِي الرِّيفِ؟ وَمَا خِطَطُكَ؟ وَاسْأَلْ صَدِيقَكَ سُؤَالًا.', 'Opinion of country life; plans; a question'],
    ],
    qwords: 'أَيْنَ / كَيْفَ (where / how — PAST) · صِفْ (describe!) · مَاذَا فَعَلْتَ (what did you do) · رَأْيُكَ (opinion → comparison) · خِطَطُكَ (FUTURE)',
    frames: [
      ['start', 'مَرْحَبًا يَا ______ ، كَيْفَ حَالُكَ؟', 'Hello …, how are you?'],
      ['1', 'قَضَيْتُ … عِنْدَ ______ فِي ______ . سَافَرْنَا ______ .', 'I spent … at … in … We travelled …'],
      ['2', 'القَرْيَةُ ______ ، وَفِيهَا ______ . كَانَ الجَوُّ ______ .', 'The village is …, and has … It was …'],
      ['3', 'يَوْمَ السَّبْتِ ______ ، وَفِي المَسَاءِ ______ .', 'On Saturday …, and in the evening …'],
      ['4', 'الحَيَاةُ فِي القَرْيَةِ ______ مِنَ المَدِينَةِ. سَأَعُودُ ______ .', 'Village life is … than the city. I’ll return …'],
      ['end', 'وَأَنْتَ، ______ ؟ إِلَى اللِّقَاءِ.', 'And you, …? See you.'],
    ],
    core: {
      text: Q2_CORE,
      en: '“Hello Hassan, how are you? I spent the weekend at my grandparents’ in a village in North Wales. We went by train, and the journey took three hours. The village is small and quiet, with green mountains and a beautiful river. On Saturday we walked in the mountains, but it was cold and rainy. In the evening grandma cooked delicious food, and we played chess with grandpa. I think village life is calmer than the city, but a bit boring. In the summer I’ll go back for two weeks. And you, where did you spend the weekend? See you, Usama.”',
      find: ['وَاسْتَغْرَقَتِ الرِّحْلَةُ', 'جِبَالٌ خَضْرَاءُ', 'أَهْدَأُ مِنَ المَدِينَةِ', 'سَأَعُودُ إِلَى هُنَاكَ'],
    },
    full: {
      text: Q2_FULL,
      en: '“Dear Hassan, I got back yesterday from a weekend at my grandparents’ in a small village in North Wales, between the mountains and the sea. We took the train for three hours, and the view slowly changed from grey buildings to green fields. Although the rain didn’t stop on Saturday, we walked to an old waterfall, then sat by the fire drinking tea and hearing grandpa’s childhood stories. Life there is much slower than in our city, but that slowness is exactly what I need before the exams. If I pass, I’ll spend two weeks there in the summer. Will you come with me? Best wishes, Usama.”',
      find: ['تَقَعُ فِي شَمَالِ … بَيْنَ', 'مِنَ المَبَانِي الرَّمَادِيَّةِ إِلَى', 'مَعَ أَنَّ … فَقَدْ', 'أَبْطَأُ بِكَثِيرٍ مِنْ'],
    },
  },
  Q3: {
    a: { title: 'يَوْمٌ لَا أَنْسَاهُ', en: 'A day I will never forget', bullets: 'مَتَى كَانَ وَلِمَاذَا كَانَ مُهِمًّا · مَاذَا حَدَثَ بِالتَّرْتِيبِ · مَشَاعِرُكَ وَمَنْ كَانَ مَعَكَ · مَا تَعَلَّمْتَهُ وَخُطَطُكَ', bulletsEn: 'When it was and why it mattered · what happened, in order · your feelings and who was with you · what you learnt and your plans' },
    b: { title: 'هَلِ الحَيَاةُ فِي المَدِينَةِ أَفْضَلُ مِنَ الحَيَاةِ فِي الرِّيفِ؟', en: 'Is life in the city better than life in the countryside?', bullets: 'المَوْضُوعُ · مَزَايَا المَدِينَةِ وَالرِّيفِ · مِثَالٌ مِنْ عَائِلَتِكَ · رَأْيُكَ', bulletsEn: 'The issue · advantages of city and countryside · an example from your family · your opinion' },
    plan: [
      'When + why — yawmun lā ansāhu huwa …; istayqaẓtu fī … li-annī kuntu …',
      'What happened — dhahabtu …; kāna al-jawwu …; fī as-sāʿati … akhadhtu …',
      'Feelings + people — najaḥtu / faraḥtu …; ittaṣaltu bi- …; fī al-masāʾi …',
      'Lesson + future — taʿallamtu anna …; al-āna …; fī al-mustaqbali urīdu an …; Stretch: lam yakun … , laysa … bal, law … la-.',
    ],
    frames: [
      { ar: 'اسْتَيْقَظْتُ فِي السَّادِسَةِ، لِأَنِّي كُنْتُ قَلِقًا.', en: 'past: I woke at six because I was nervous.' },
      { ar: 'كَانَتِ النَّتِيجَةُ أَفْضَلَ مِمَّا تَوَقَّعْتُ.', en: 'comparison: better than I expected.' },
      { ar: 'فِي المُسْتَقْبَلِ أُرِيدُ أَنْ أَدْرُسَ الهَنْدَسَةَ.', en: 'future: I want to study engineering.' },
    ],
    models: [
      { which: 'أ', level: 'Core', text: Q3A_CORE, en: 'Results day last year: I woke at six, nervous, and only drank milk → walked to school with Adam in the cold rain; the school was crowded; at nine I opened the envelope slowly → I passed everything, Arabic best because I revised; mum was delighted; dinner at a Lebanese restaurant → effort pays off; now I revise for Year 11 and want to study engineering.', find: ['لِأَنِّي كُنْتُ قَلِقًا', 'كَانَ الجَوُّ بَارِدًا', 'أَفْضَلَ نَتِيجَةٍ', 'أُرِيدُ أَنْ أَدْرُسَ'], notes: 'Core model: a mixed-topic narrative — routine and food (A), a friend and family (B), weather (C), exams and results (D), a restaurant (A) — with sequence, li-annī, a superlative, a dual verb (yuʿṭiyāni) and three time frames.' },
      { which: 'أ', level: 'Full', text: Q3A_FULL, en: 'That Thursday in August was no ordinary day: I woke an hour before the alarm, heart racing — results day for exams I’d revised for months → rain fell softly as I walked with Adam, both pretending not to be nervous; the yard was crowded, some crying with joy, others hiding disappointment → I opened the envelope with trembling hands: I’d passed everything, and Arabic was higher than I expected; I called mum and heard her cry with joy for the first time → success isn’t luck but small hours of effort piling up silently; “if I went back to the start of that year, I’d tell myself: revise a little every day, and don’t be afraid”.', find: ['لَمْ يَكُنْ يَوْمًا عَادِيًّا', 'وَأَنَا أَمْشِي … وَكُنَّا نَتَظَاهَرُ', 'بِيَدَيْنِ مُرْتَجِفَتَيْنِ', 'لَيْسَ حَظًّا، بَلْ'], notes: 'Full-mark model: a fronted negative hook, ḥāl clauses (wa-qalbī yaduqqu, wa-anā amshī), kāna + present, baʿḍuhum … wa-baʿḍuhum, a dual adjective (murtajifatayni), aʿlā mimmā, ʿindaʾidhin, laysa … bal + a relative-free verb (tatarākamu), law … la- with imperatives.' },
      { which: 'ب', level: 'Full', subtitle: 'city or countryside?', text: Q3B_FULL, en: 'Many city people dream of a quiet country home, while village youth dream of city lights — is city life really better? → cities offer more study and work opportunities, easier transport, nearby hospitals and museums; yet residents suffer pollution, crowds and high prices, while country people enjoy clean air and closer neighbours → I see this in my family: grandpa in Wales knows every villager by name, whereas we in Manchester don’t know our neighbours on the same floor; still, grandpa needs a full hour to reach the nearest hospital → there is no best place for everyone, only a better place for each stage of life; “if good services reach villages, the countryside will combine its calm with city comfort”.', find: ['بَيْنَمَا يَحْلُمُ', 'يُعَانِي … مِنَ', 'أَمَّا نَحْنُ … فَلَا', 'لَا يُوجَدُ … بَلْ'], notes: 'Full-mark model for the Stretch title: a mirrored hook with baynamā, a list with akthar / ashal, yuʿānī min + three verbal nouns, a family example with ammā … fa-lā, wa-maʿa dhālika fa-inna, lā yūjadu … bal with ansab, and idhā … fa-sa-.' },
    ],
  },
  selfCheck: [
    { route: 'core', text: 'Q1: done in about 8 minutes, no empty boxes.' },
    { route: 'core', text: 'Q2: all four bullet points, with a greeting and a closing.' },
    { route: 'develop', text: 'Q2: transport, place and weather; three time frames.' },
    { route: 'develop', text: 'Q3: a 3-minute plan, four paragraphs, a 2-minute check.' },
    { route: 'stretch', text: 'Q3: a concession and a conditional; my five-point check is done.' },
  ],
};

module.exports = { speak, write };
